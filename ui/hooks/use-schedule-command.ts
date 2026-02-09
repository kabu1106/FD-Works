// ui/hooks/use-schedule-command.ts

import { useState } from 'react';
import { ScheduleCommand } from '@/domain/commands/schedule-commands';
import { handleScheduleCommand } from '@/domain/handlers/schedule-command-handler';
import { ScheduleDayProjection } from '@/projections/schedule-day/schedule-day.projection';
import { HistoryManager } from '@/domain/history/history-manager';
import { createInverseCommand } from '@/domain/history/undo-command-factory';

export const useScheduleCommand = (currentProjection: ScheduleDayProjection) => {
  const [error, setError] = useState<string | null>(null);

  const dispatch = async (command: ScheduleCommand) => {
    try {
      setError(null);

      // 1. Command Handler を実行（バリデーション込み）
      const envelopes = handleScheduleCommand(command, currentProjection);

      // 2. 本来はここで EventStore (API) へ保存
      // await api.saveEvents(envelopes); 
      console.log('Events to be saved:', envelopes);

      // 3. 成功時のフィードバック（トースト通知など）
      return { success: true, envelopes };

    } catch (e: any) {
      // InvariantViolationError などのビジネスルール違反をキャッチ
      const message = e.message || '予期せぬエラーが発生しました';
      setError(message);
      return { success: false, error: message };
    }
  };

  return { dispatch, error };
};

