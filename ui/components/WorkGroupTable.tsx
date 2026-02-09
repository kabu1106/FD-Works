// ui/components/WorkGroupTable.tsx

import React, { useState } from 'react';
import { WorkGroupProjection } from '@/projections/schedule-day/schedule-day.projection';
import { StaffCard } from './StaffCard';

interface Staff {
  id: number;
  name: string;
  staffNo: string;
  photoUrl?: string;
}

interface WorkGroupTableProps {
  workGroups: WorkGroupProjection[];
  staffMap: Record<number, Staff>;
  onHeaderClick: (workGroupId: number) => void;
  onSwapStaff: (staffAId: number, groupAId: number, staffBId: number, groupBId: number) => void;
  onMoveStaff: (staffId: number, fromGroupId: number, toGroupId: number) => void;
  onRemoveStaff: (staffId: number, groupId: number) => void;
}

export const WorkGroupTable = ({
  workGroups,
  staffMap,
  onHeaderClick,
  onSwapStaff,
  onMoveStaff,
  onRemoveStaff,
}: WorkGroupTableProps) => {
  const [dragOverGroupId, setDragOverGroupId] = useState<number | null>(null);

  const handleColumnDrop = (e: React.DragEvent, toGroupId: number) => {
    e.preventDefault();
    setDragOverGroupId(null);

    const staffId = Number(e.dataTransfer.getData('staffId'));
    const fromGroupId = Number(e.dataTransfer.getData('fromGroupId'));

    if (fromGroupId !== toGroupId) {
      onMoveStaff(staffId, fromGroupId, toGroupId);
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-sm border border-slate-300 bg-white">
      <table className="w-full border-collapse table-fixed min-w-[900px]">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-300">
            {workGroups.map((group) => (
              <th
                key={group.workGroupId}
                onClick={() => onHeaderClick(group.workGroupId)}
                className="group p-0 border-r border-slate-300 last:border-r-0 cursor-pointer transition-all active:opacity-90"
              >
                <div className="flex flex-col border-t-4 border-[#B91C1C] bg-white p-3 group-hover:bg-red-50 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-[#B91C1C] tracking-widest uppercase">
                      隊別編成
                    </span>
                    {/* 定員を削除し、現在の人数のみを表示 */}
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-700 text-white">
                      {group.staffIds.length} 名
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-slate-800 tracking-tight">
                    {group.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    ＋ 職員を追加
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="align-top">
            {workGroups.map((group) => (
              <td
                key={group.workGroupId}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOverGroupId(group.workGroupId);
                }}
                onDragLeave={() => setDragOverGroupId(null)}
                onDrop={(e) => handleColumnDrop(e, group.workGroupId)}
                className={`
                  p-2 border-r border-slate-200 last:border-r-0 min-h-[500px] transition-colors
                  ${dragOverGroupId === group.workGroupId ? 'bg-red-50/50' : 'bg-[#F8FAFC]'}
                `}
              >
                {/* min-h を設定することで、空の状態でもドロップ領域を確保 */}
                <div className="flex flex-col gap-2 min-h-[480px]">
                  {/* 配置済みの職員カード */}
                  {group.staffIds.map((staffId) => {
                    const staff = staffMap[staffId];
                    if (!staff) return null;
                    return (
                      <StaffCard
                        key={staffId}
                        staffId={staffId}
                        staffName={staff.name}
                        staffNo={staff.staffNo}
                        photoUrl={staff.photoUrl}
                        currentGroupId={group.workGroupId}
                        onSwapStaff={onSwapStaff}
                        onRemoveStaff={onRemoveStaff}
                      />
                    );
                  })}
                  
                  {/* 人数が0人の時だけ表示されるプレースホルダー（ガイド） */}
                  {group.staffIds.length === 0 && (
                    <div 
                      className="border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-xs text-slate-400 font-bold uppercase tracking-widest bg-white/30"
                    >
                      <span>No Staff</span>
                      <span className="mt-1 font-normal lowercase tracking-normal">Drop here to assign</span>
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};