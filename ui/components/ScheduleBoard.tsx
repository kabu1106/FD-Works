// ui/components/ScheduleBoard.tsx
  import { ScheduleDayProjection } from "@/projections/schedule-day/schedule-day.projection";
  import { useScheduleWithHistory } from "../hooks/useScheduleWithHistory";
  import { WorkGroupCell } from "./WorkGroupCell";
  import { StaffSidebar } from "./StaffSidebar"; // 追加
  import { createCommand } from "@/domain/commands/command-factory";
  import { useKeyboardShortcut } from '../hooks/use-keyboard-shortcut';


export const ScheduleBoard = ({ initialData }: { initialData: ScheduleDayProjection }) => {
    // redo と canRedo もフックから返るように調整済みと想定
    const { projection, execute, undo, redo, canUndo, canRedo, error } = useScheduleWithHistory(initialData);
  
    // --- ショートカットの登録 ---
  
    // Undo: Ctrl + Z
    useKeyboardShortcut('z', undo, { ctrl: true });
  
    // Redo: Ctrl + Y (Windows) または Ctrl + Shift + Z (Mac風)
    useKeyboardShortcut('y', redo, { ctrl: true });
    useKeyboardShortcut('z', redo, { ctrl: true, shift: true });
  
    // --- ロジック統合部分 ---
  
    /** 1. 配置・移動の処理 */
    const handleDropOnGroup = async (staffId: number, fromGroupId: number | null, toGroupId: number) => {
      if (fromGroupId === toGroupId) return;
  
      const cmd = fromGroupId === null
        ? createCommand({
            type: 'ASSIGN_STAFF_TO_WORK_GROUP',
            date: projection.date,
            staffId,
            to: { teamId: 1, workGroupId: toGroupId }
          })
        : createCommand({
            type: 'MOVE_STAFF_BETWEEN_WORK_GROUPS',
            date: projection.date,
            staffId,
            from: { teamId: 1, workGroupId: fromGroupId },
            to: { teamId: 1, workGroupId: toGroupId }
          });
  
      const result = await execute(cmd);
      if (!result.success) alert(result.error);
    };
  
    /** 2. 配置解除の処理 (Sidebarへドロップ) */
    const handleRemove = async (staffId: number, fromGroupId: number) => {
      const cmd = createCommand({
        type: 'REMOVE_STAFF_FROM_WORK_GROUP',
        date: projection.date,
        staffId,
        from: { teamId: 1, workGroupId: fromGroupId }
      });
  
      const result = await execute(cmd);
      if (!result.success) alert(result.error);
    };
  
    /** 3. 入れ替えの処理 (StaffCard間) */
    const handleSwap = async (staffAId: number, groupAId: number, staffBId: number, groupBId: number) => {
      const cmd = createCommand({
        type: 'SWAP_STAFF',
        date: projection.date,
        staffA: {
          staffId: staffAId,
          from: { teamId: 1, workGroupId: groupAId },
          to: { teamId: 1, workGroupId: groupBId }
        },
        staffB: {
          staffId: staffBId,
          from: { teamId: 1, workGroupId: groupBId },
          to: { teamId: 1, workGroupId: groupAId }
        }
      });
  
      const result = await execute(cmd);
      if (!result.success) alert(result.error);
    };
  
    return (
      <div className="flex h-screen bg-slate-100 overflow-hidden">
        {/* 未配置リストのサイドバー */}
        <StaffSidebar 
          unassignedStaffs={projection.unassignedStaffs} // Projection側に未配置リストが必要
          onRemoveStaff={handleRemove}
          onSwapStaff={handleSwap} 
        />
        
        <div className="flex-1 p-6 overflow-y-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">勤務配置表</h1>
              <p className="text-slate-500">{projection.date}</p>
            </div>
            <div className="space-x-2">
              <button 
                onClick={undo} 
                disabled={!canUndo}
                className="px-4 py-2 bg-white border border-slate-300 rounded shadow-sm disabled:opacity-50 hover:bg-slate-50 transition-colors"
              >
                ↩️ 元に戻す (Ctrl+Z)
              </button>
              {/* 視覚的にショートカットが使えることをユーザーに伝えるヒント */}
                <div className="fixed bottom-4 right-4 flex gap-2">
                    <div className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                    Undo: <kbd className="font-sans border border-white/30 px-1 rounded">Ctrl</kbd> + <kbd className="font-sans border border-white/30 px-1 rounded">Z</kbd>
                    </div>
                    <div className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                    Redo: <kbd className="font-sans border border-white/30 px-1 rounded">Ctrl</kbd> + <kbd className="font-sans border border-white/30 px-1 rounded">Y</kbd>
                    </div>
                </div>
            </div>
          </header>
  
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 animate-pulse">
              ⚠️ {error}
            </div>
          )}
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projection.teams.flatMap(team => 
              team.workGroups.map(group => (
                <WorkGroupCell 
                  key={group.workGroupId} 
                  group={group} 
                  onDropStaff={(staffId, fromId) => handleDropOnGroup(staffId, fromId, group.workGroupId)}
                  onSwapStaff={handleSwap}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  };