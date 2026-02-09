// domain/history/history-manager.ts

import { ScheduleCommand } from '../commands/schedule-commands';

export interface HistoryState {
  past: ScheduleCommand[];   // Undo用スタック
  future: ScheduleCommand[]; // Redo用スタック
}

export class HistoryManager {
  private state: HistoryState = {
    past: [],
    future: []
  };

  /** 新しいコマンドを実行した際に記録する */
  push(command: ScheduleCommand) {
    this.state.past.push(command);
    // 新しい操作をしたら Redo スタックはクリアする（標準的な挙動）
    this.state.future = [];
  }

  /** Undo（元に戻す）: 最後のコマンドを取り出し、逆操作のために返す */
  undo(): ScheduleCommand | null {
    const command = this.state.past.pop();
    if (!command) return null;

    this.state.future.push(command);
    return command;
  }

  /** Redo（やり直す）: Undo されたコマンドを再度実行するために返す */
  redo(): ScheduleCommand | null {
    const command = this.state.future.pop();
    if (!command) return null;

    this.state.past.push(command);
    return command;
  }

  get canUndo(): boolean { return this.state.past.length > 0; }
  get canRedo(): boolean { return this.state.future.length > 0; }
}