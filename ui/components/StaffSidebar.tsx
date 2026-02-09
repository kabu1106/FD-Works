// ui/components/StaffSidebar.tsx

import { StaffCard } from './StaffCard';

interface Props {
  unassignedStaffs: { id: number; name: string }[];
  // ① Props に追加
  onRemoveStaff: (staffId: number, fromGroupId: number) => void;
  // ② StaffCard が必要とする Swap 用のハンドラーも（サイドバー内では使わないが型として）必要
  onSwapStaff?: (staffAId: number, groupAId: number, staffBId: number, groupBId: number) => void;
}

export const StaffSidebar = ({ unassignedStaffs, onRemoveStaff, onSwapStaff }: Props) => {
  return (
    <aside 
      className="w-64 bg-slate-50 border-r border-slate-200 h-screen p-4 flex flex-col"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const staffIdStr = e.dataTransfer.getData('staffId');
        const fromGroupIdStr = e.dataTransfer.getData('fromGroupId');

        // ③ より安全な条件判定
        if (staffIdStr && fromGroupIdStr) {
          onRemoveStaff(Number(staffIdStr), Number(fromGroupIdStr));
        }
      }}
    >
      <h2 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
        👥 未配置職員
        <span className="text-sm font-normal bg-slate-200 px-2 py-0.5 rounded-full">
          {unassignedStaffs.length}
        </span>
      </h2>
      
      <div className="space-y-2 overflow-y-auto flex-1">
        {unassignedStaffs.map(staff => (
          <StaffCard 
            key={staff.id} 
            staffId={staff.id} 
            staffName={staff.name}
            // サイドバーなので currentGroupId は指定しない
            onSwapStaff={onSwapStaff} 
          />
        ))}
        {unassignedStaffs.length === 0 && (
          <p className="text-slate-400 text-sm italic text-center mt-8">全員配置済み</p>
        )}
      </div>
    </aside>
  );
};