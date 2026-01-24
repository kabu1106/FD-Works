# リファクタリング完了報告

## 問題点一覧

### 修正前の問題点
1. **UIと業務ロジックの混在**: `app/schedule/page.tsx` に UI と業務ロジックが混在していた
2. **時間処理の混在**: `lib/timeUtils.ts` に汎用処理と業務特化ロジックが混在していた
3. **データ永続化の欠如**: データがフロントエンドのみ（localStorage）で完結しており、サーバー側に永続化されていなかった
4. **拡張性の欠如**: 将来の拡張（API化・認証・権限・集計）を考えると構造が脆弱だった

## 改善後のディレクトリ構成

```
lib/
├─ db/
│  ├─ prisma.ts                    # Prismaクライアントの初期化
│  └─ repositories/
│     └─ scheduleRepository.ts     # データベースアクセス層（リポジトリパターン）
├─ schedule/
│  ├─ types.ts                     # ドメインモデルの型定義
│  ├─ calculator.ts                # 計算ロジック（純粋関数）
│  ├─ datetime.ts                  # 業務特化の日時処理
│  └─ service.ts                   # 業務ロジック層（サービス層）
├─ datetime/
│  ├─ basic.ts                     # 汎用的な日時処理
│  └─ range.ts                     # 時間区間の基本構造と操作

app/
└─ schedule/
   ├─ page.tsx                     # UI専用（業務ロジック禁止）
   └─ actions.ts                   # Server Actions（サーバー側のアクション）

prisma/
└─ schema.prisma                   # Prismaスキーマ定義
```

## 実装内容

### 1. Prismaスキーマの作成

PostgreSQLを使用したデータモデルを定義：
- `Employee`: 職員マスタ
- `ScheduleDay`: 勤務表の1日のデータ
- `SleepGroupAssignment`: 仮眠時間グループへの職員配置
- `SpecialLeave`: 特別休暇

### 2. レイヤー分離

#### データベース層（Repository）
- `lib/db/repositories/scheduleRepository.ts`
- Prismaモデルとドメインモデルの変換を担当
- データベースアクセスを隠蔽

#### ドメイン層（Domain）
- `lib/schedule/types.ts`: ドメインモデルの型定義
- `lib/schedule/calculator.ts`: 計算ロジック（純粋関数）
- `lib/schedule/datetime.ts`: 業務特化の日時処理

#### サービス層（Service）
- `lib/schedule/service.ts`: 業務ロジックを実装
- リポジトリを呼び出し、ドメインロジックを実行

#### プレゼンテーション層（UI）
- `app/schedule/page.tsx`: UI専用（業務ロジック禁止）
- `app/schedule/actions.ts`: Server Actions（サーバー側のアクション）

### 3. 時間処理の分離

#### 汎用層（`lib/datetime/`）
- `basic.ts`: 時刻変換、バリデーションなど汎用的な処理
- `range.ts`: 時間区間の基本構造と操作（Django設計思想に基づく）

#### 業務層（`lib/schedule/datetime.ts`）
- 勤務表ドメイン専用の日時処理
- 8:30～翌日8:30の範囲チェックなど業務特化ロジック

### 4. Server Actionsの実装

クライアントコンポーネントから呼び出されるサーバー側のアクション：
- `getScheduleDayAction`: 勤務表の1日を取得
- `addEmployeeToGroupAction`: 職員を仮眠時間グループに追加
- `removeEmployeeFromGroupAction`: 職員を仮眠時間グループから削除
- `addSpecialLeaveAction`: 特別休暇を追加
- `removeSpecialLeaveAction`: 特別休暇を削除
- `updateScheduleStatusAction`: 勤務表の状態を更新

## PostgreSQL連携部分の設計意図

### 1. Prismaスキーマ設計
- **正規化**: 職員マスタと勤務表を分離し、リレーションで管理
- **整合性**: 外部キー制約によりデータ整合性を保証
- **拡張性**: 将来の機能追加（出動記録、超過勤務計算など）に対応可能な構造

### 2. リポジトリパターン
- **抽象化**: データベースアクセスを隠蔽し、ドメイン層から独立
- **テスト容易性**: モック化が容易
- **変更耐性**: データベース変更時もドメイン層への影響を最小化

### 3. トランザクション管理
- `saveScheduleDay` ではトランザクションを使用し、データ整合性を保証
- 関連データ（SleepGroupAssignment、SpecialLeave）の一括更新を実現

## 将来拡張（API化・集計・帳票）に向けた補足

### API化への対応
- Server Actionsは既にAPI的な役割を果たしている
- 将来的には `/api/schedule` のようなRESTful APIエンドポイントに変換可能
- リポジトリ層はそのまま再利用可能

### 集計機能への対応
- Prismaの集計機能（`aggregate`、`groupBy`）を活用可能
- ドメイン層の計算ロジック（`calculator.ts`）を拡張して集計処理を追加可能
- 時間区間の重複計算（`TimeRange`）は既に実装済み

### 帳票機能への対応
- データベースから直接データを取得可能
- ドメインモデルをそのまま帳票データとして使用可能
- サービス層に帳票生成ロジックを追加可能

### 認証・権限への対応
- Server Actionsに認証チェックを追加可能
- ユーザー役割（`UserRole`）は既に型定義済み
- データベースにユーザーテーブルを追加し、リレーションを設定可能

## セットアップ手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env` ファイルを作成し、以下の内容を設定：
```
DATABASE_URL="postgresql://user:password@localhost:5432/fd_works?schema=public"
```

### 3. データベースマイグレーション
```bash
npx prisma migrate dev --name init
```

### 4. Prismaクライアントの生成
```bash
npx prisma generate
```

### 5. 開発サーバーの起動
```bash
npm run dev
```

## 注意事項

- 既存のUI仕様は変更していません
- 既存の表示内容は変更していません
- データ移行が必要な場合は、`lib/storage.ts` の `loadAllSchedules` を使用して既存データを移行してください
