// ui/hooks/use-schedule-with-history.ts

import { useState } from 'react';
import { applyScheduleEvent } from '@/projections/schedule-day/apply-events';
import { ScheduleCommand } from '@/domain/commands/schedule-commands';
import { HistoryManager } from '@/domain/history/history-manager';
import { createInverseCommand } from '@/domain/history/undo-command-factory';
import { ScheduleDayProjection } from '@/projections/schedule-day/schedule-day.projection';
import { useScheduleCommand } from './use-schedule-command';

export const useScheduleWithHistory = (initialData: ScheduleDayProjection) => {
  // 1. 現在の状態（Projection）を保持
  const [projection, setProjection] = useState<ScheduleDayProjection>(initialData);
  const [history] = useState(() => new HistoryManager());
  
  // コマンド実行用の dispatch
  const { dispatch: originalDispatch, error } = useScheduleCommand(projection);

  const execute = async (command: ScheduleCommand) => {
    const result = await originalDispatch(command);
    
    if (result.success && result.envelopes) {
      // 2. イベントを現在の状態に適用して UI を更新
      let newState = projection;
      result.envelopes.forEach(envelope => {
        newState = applyScheduleEvent(newState, envelope.payload);
      });
      
      setProjection(newState);
      history.push(command);
    }
    return result;
  };

  const undo = async () => {
    const command = history.undo();
    if (!command) return;
    
    const inverse = createInverseCommand(command);
    const result = await originalDispatch(inverse);
    
    if (result.success && result.envelopes) {
      let newState = projection;
      result.envelopes.forEach(envelope => {
        newState = applyScheduleEvent(newState, envelope.payload);
      });
      setProjection(newState);
    }
  };

  const redo = async () => {
    const command = history.redo();
    if (!command) return;
  
    const result = await originalDispatch(command);
    
    if (result.success && result.envelopes) {
      let newState = projection;
      result.envelopes.forEach(env => {
        newState = applyScheduleEvent(newState, env.payload);
      });
      setProjection(newState);
    }
  };

  // 3. setProjection を戻り値に含め、外部から関数型アップデートを呼べるようにする
  return { 
    projection, 
    setProjection, // ← これを追加
    execute, 
    undo, 
    redo, 
    canUndo: history.canUndo, 
    canRedo: history.canRedo, 
    error 
  };
};