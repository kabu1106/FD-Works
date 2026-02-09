// ui/components/StaffCard.tsx
import { useState } from 'react';

interface StaffCardProps {
  staffId: number;
  staffName: string;
  staffNo: string;
  photoUrl?: string;
  teamName?: string; // 例: "第一小隊"
  currentGroupId: number;
  // 各コマンドに対応するハンドラー
  onSwapStaff?: (staffAId: number, groupAId: number, staffBId: number, groupBId: number) => void;
  onRemoveStaff?: (staffId: number, groupId: number) => void;
}

export const StaffCard = ({
  staffId,
  staffName,
  staffNo,
  photoUrl,
  teamName = "第一公選", // 初期値としてモックデータに合わせる
  currentGroupId,
  onSwapStaff,
  onRemoveStaff,
}: StaffCardProps) => {
  const [isOver, setIsOver] = useState(false);

  // ドラッグ開始（MOVE/SWAP共通）
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('staffId', staffId.toString());
    e.dataTransfer.setData('fromGroupId', currentGroupId.toString());
    e.dataTransfer.effectAllowed = 'move';
  };

  // ドロップ時（他の職員の上に落とした場合は SWAP）
  const handleDrop = (e: React.DragEvent) => {
    setIsOver(false);
    e.stopPropagation();

    const draggedStaffId = Number(e.dataTransfer.getData('staffId'));
    const fromGroupId = Number(e.dataTransfer.getData('fromGroupId'));

    // 自分自身以外の上にドロップされた場合に Swap を実行
    if (onSwapStaff && draggedStaffId !== staffId) {
      onSwapStaff(draggedStaffId, fromGroupId, staffId, currentGroupId);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => {
        e.preventDefault();
        setIsOver(true);
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
      className={`
        group relative flex items-center gap-3 p-2 rounded bg-white border transition-all duration-150 cursor-grab active:cursor-grabbing
        ${isOver 
          ? 'border-red-500 bg-red-50 ring-2 ring-red-100 scale-[1.02] z-10' 
          : 'border-slate-200 shadow-sm hover:shadow-md'
        }
      `}
    >
      {/* 削除ボタン (REMOVEコマンド) - ホバー時に表示 */}
      {onRemoveStaff && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemoveStaff(staffId, currentGroupId);
          }}
          className="absolute -top-1.5 -right-1.5 opacity-0 group-hover:opacity-100 bg-[#BE123C] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-sm transition-opacity hover:bg-red-700 z-20"
          title="配置解除"
        >
          ×
        </button>
      )}

      {/* 顔写真エリア */}
      <div className="flex-shrink-0">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={staffName}
            className="w-10 h-10 rounded-full object-cover border border-slate-100"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>

      {/* 職員情報エリア - 添付画像のレイアウトを再現 */}
      <div className="flex-grow min-w-0 flex flex-col justify-center">
        <span className="font-bold text-slate-800 truncate text-sm leading-tight">
          {staffName}
        </span>
        <span className="text-xs text-slate-500 font-medium">
          {staffNo} - {teamName}
        </span>
      </div>

      {/* ドラッグハンドル (視覚的ヒント) */}
      <div className="flex-shrink-0 text-slate-300 group-hover:text-slate-400">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 2a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm6-12a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>
    </div>
  );
};