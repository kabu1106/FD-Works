'use client';

import React, { useState, useMemo } from 'react';
import { WorkGroupTable } from '@/ui/components/WorkGroupTable';
import { StaffSelectModal } from '@/ui/components/StaffSelectModal';
import { SpecialLeaveModal } from '@/ui/components/SpecialLeaveModal';
import { useScheduleWithHistory } from '@/ui/hooks/useScheduleWithHistory';
import { createInitialScheduleDay } from '@/projections/schedule-day/schedule-day.projection.factory';
import { createCommand } from '@/domain/commands/command-factory';
import { applyScheduleEvent } from '@/projections/schedule-day/apply-events';

// --- Mock Data ---
const INITIAL_CONFIG = {
  teams: [
    {
      teamId: 1,
      name: '1担当',
      workGroups: [
        { workGroupId: 101, name: '1番起' },
        { workGroupId: 102, name: '2番起' },
        { workGroupId: 103, name: '3番起' },
        { workGroupId: 104, name: '4番起' },
        { workGroupId: 105, name: '日勤' },
      ]
    },
    {
      teamId: 2,
      name: '2担当',
      workGroups: [
        { workGroupId: 101, name: '1番起' },
        { workGroupId: 102, name: '2番起' },
        { workGroupId: 103, name: '3番起' },
        { workGroupId: 104, name: '4番起' },
        { workGroupId: 105, name: '日勤' },
      ]
    }
  ],
  allStaffs: [
    { id: 1, name: '山前 太郎', staffNo: '801', teamId: 1, photoUrl: '/avatar1.jpg' },
    { id: 2, name: '山田 孝明', staffNo: '804', teamId: 1, photoUrl: '/avatar2.jpg' },
    { id: 3, name: '榊原 直樹', staffNo: '866', teamId: 1, photoUrl: '/avatar3.jpg' },
    { id: 4, name: '飯 薫', staffNo: '803', teamId: 1, photoUrl: '/avatar4.jpg' },
    { id: 5, name: '川原田 箒', staffNo: '802', teamId: 2, photoUrl: '/avatar5.jpg' },
    { id: 6, name: '石原 孝明', staffNo: '805', teamId: 2, photoUrl: '/avatar6.jpg' },
    { id: 7, name: '渡辺 信二', staffNo: '806', teamId: 2, photoUrl: '/avatar7.jpg' },
    { id: 8, name: '高橋 浩紀', staffNo: '807', teamId: 2, photoUrl: '/avatar8.jpg' },
  ]
};

const USER_TEAM_ID = 1;

export default function ScheduleDashboard() {
  const [currentDate, setCurrentDate] = useState('2026-02-06');
  const [currentTeamId, setCurrentTeamId] = useState(USER_TEAM_ID);
  
  const [activeModal, setActiveModal] = useState<null | 'staff-select' | 'special-leave'>(null);
  const [targetGroupId, setTargetGroupId] = useState<number | null>(null);

  const initialData = useMemo(() => createInitialScheduleDay(currentDate, INITIAL_CONFIG), [currentDate]);
  
  // setProjection も取得できるようにフックを調整（必要に応じて）
  const { projection, setProjection, execute, undo, redo, canUndo, canRedo } = useScheduleWithHistory(initialData);

  const selectedTeam = projection.teams.find(t => t.teamId === currentTeamId);
  const staffMap = useMemo(() => {
    return Object.fromEntries(INITIAL_CONFIG.allStaffs.map(s => [s.id, s]));
  }, []);

  const assignedStaffIds = useMemo(() => {
    return projection.teams.flatMap(t => 
      t.workGroups.flatMap(g => g.staffIds)
    );
  }, [projection]);

  // --- Handlers ---

  const handleAssignStaff = async (staffIds: number[]) => {
    if (!targetGroupId) return;
  
    // UI上の楽観的更新
    setProjection((current) => {
      let next = { ...current };
      for (const id of staffIds) {
        // Reducerが期待するイベント名（STAFF_ASSIGNEDなど）に合わせる
        const eventPayload = {
          type: 'STAFF_ASSIGNED', 
          date: currentDate,
          staffId: id,
          to: { teamId: currentTeamId, workGroupId: targetGroupId }
        };
        next = applyScheduleEvent(next, eventPayload as any);
      }
      return next;
    });
  
    // コマンド実行（履歴保存・API発行）
    for (const id of staffIds) {
      const command = createCommand({
        type: 'ASSIGN_STAFF_TO_WORK_GROUP',
        date: currentDate,
        staffId: id,
        to: { teamId: currentTeamId, workGroupId: targetGroupId }
      });
      
      // フックから提供された execute 関数を使用
      await execute(command);
    }
  };

  const handleSwap = async (staffAId: number, groupAId: number, staffBId: number, groupBId: number) => {
    await execute(createCommand({
      type: 'SWAP_STAFF',
      date: currentDate,
      staffA: { 
        staffId: staffAId, 
        from: { teamId: currentTeamId, workGroupId: groupAId }, 
        to: { teamId: currentTeamId, workGroupId: groupBId } 
      },
      staffB: { 
        staffId: staffBId, 
        from: { teamId: currentTeamId, workGroupId: groupBId }, 
        to: { teamId: currentTeamId, workGroupId: groupAId } 
      }
    }));
  };

  const handleRemoveStaff = async (staffId: number, fromGroupId: number) => {
    await execute(createCommand({
      type: 'REMOVE_STAFF_FROM_WORK_GROUP',
      date: currentDate,
      staffId,
      from: { teamId: currentTeamId, workGroupId: fromGroupId }
    }));
  };

  const handleMoveStaff = async (staffId: number, fromGroupId: number, toGroupId: number) => {
    await execute(createCommand({
      type: 'MOVE_STAFF_BETWEEN_WORK_GROUPS',
      date: currentDate,
      staffId,
      from: { teamId: currentTeamId, workGroupId: fromGroupId },
      to: { teamId: currentTeamId, workGroupId: toGroupId }
    }));
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col font-sans">
      <nav className="bg-[#B91C1C] text-white px-4 py-2 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1.5 rounded-full">🚒</div>
          <span className="font-bold tracking-tight text-lg text-white">FD Duty Roster</span>
        </div>
      </nav>

      <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-extrabold text-slate-800">{currentDate} (水)</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={undo} disabled={!canUndo} className="px-3 py-1 bg-white border rounded disabled:opacity-30">Undo</button>
          <button onClick={redo} disabled={!canRedo} className="px-3 py-1 bg-white border rounded disabled:opacity-30">Redo</button>
        </div>
      </div>

      <main className="flex-1 px-6 pb-6 overflow-auto">
        <WorkGroupTable 
          workGroups={selectedTeam?.workGroups || []}
          staffMap={staffMap as any}
          onHeaderClick={(id) => { setTargetGroupId(id); setActiveModal('staff-select'); }}
          onRemoveStaff={handleRemoveStaff}
          onMoveStaff={handleMoveStaff}
          onSwapStaff={handleSwap}
        />
      </main>

      <StaffSelectModal 
        isOpen={activeModal === 'staff-select'} 
        onClose={() => setActiveModal(null)} 
        assignedStaffIds={assignedStaffIds} 
        onSelect={handleAssignStaff}
        allStaffs={INITIAL_CONFIG.allStaffs}
        teams={INITIAL_CONFIG.teams}
        userTeamId={USER_TEAM_ID}
        targetGroupName={
          selectedTeam?.workGroups.find(g => g.workGroupId === targetGroupId)?.name || '未選択'
        }
      />

      <SpecialLeaveModal 
        isOpen={activeModal === 'special-leave'}
        onClose={() => setActiveModal(null)}
        baseDate={currentDate}
        staffs={INITIAL_CONFIG.allStaffs}
        leaveGroups={[{ id: 'g1', name: '有給・特休' }]}
        leaveTypes={[{ id: 't1', name: '年次有給休暇', groupId: 'g1' }]}
        onSave={(assignment) => console.log(assignment)}
      />
    </div>
  );
}