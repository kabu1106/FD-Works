// ui/components/StaffSelectModal.tsx

import React, { useState, useMemo } from 'react';

interface Staff {
  id: number;
  name: string;
  staffNo: string;
  teamId: number;
  photoUrl?: string;
}

interface Team {
  teamId: number;
  name: string;
}

interface StaffSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetGroupName: string;
  allStaffs: Staff[];
  teams: Team[];
  userTeamId: number;
  assignedStaffIds: number[]; // 追加：既にどこかのWorkGroupに配置されているID
  onSelect: (staffIds: number[]) => void; // 複数選択のため number[] に変更
}

export const StaffSelectModal = ({
  isOpen,
  onClose,
  targetGroupName,
  allStaffs,
  teams,
  userTeamId,
  assignedStaffIds,
  onSelect,
}: StaffSelectModalProps) => {
  const [filterTeamId, setFilterTeamId] = useState<number | 'all'>(userTeamId);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]); // 複数選択用

  // フィルタリングロジック（配置済みを除外し、検索条件を適用）
  const filteredStaffs = useMemo(() => {
    return allStaffs.filter((staff) => {
      const isAlreadyAssigned = assignedStaffIds.includes(staff.id);
      const matchesTeam = filterTeamId === 'all' || staff.teamId === filterTeamId;
      const matchesSearch = staff.name.includes(searchQuery) || staff.staffNo.includes(searchQuery);
      
      return !isAlreadyAssigned && matchesTeam && matchesSearch;
    });
  }, [allStaffs, filterTeamId, searchQuery, assignedStaffIds]);

  if (!isOpen) return null;

  const toggleSelection = (id: number) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleConfirm = () => {
    if (selectedIds.length === 0) return;
    onSelect(selectedIds);
    setSelectedIds([]); // リセット
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        
        {/* モーダルヘッダー */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-black text-slate-800 tracking-tight">職員を選択して配置</h2>
            <p className="text-sm text-blue-600 font-bold flex items-center gap-1 mt-0.5">
              <span className="bg-blue-100 px-2 py-0.5 rounded text-xs uppercase">Assign to</span>
              {targetGroupName}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* フィルター・検索エリア */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase mb-1.5 ml-1">Team Filter</label>
              <select
                value={filterTeamId}
                onChange={(e) => setFilterTeamId(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full rounded-xl border-slate-200 text-sm font-bold focus:ring-blue-500 focus:border-blue-500 py-2.5"
              >
                <option value="all">すべてのチーム</option>
                {teams.map(t => (
                  <option key={t.teamId} value={t.teamId}>{t.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase mb-1.5 ml-1">Search Staff</label>
              <input
                type="text"
                placeholder="名前・職員番号..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border-slate-200 text-sm focus:ring-blue-500 focus:border-blue-500 py-2.5"
              />
            </div>
          </div>
        </div>

        {/* 職員リストエリア */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredStaffs.length > 0 ? (
              filteredStaffs.map((staff) => {
                const isSelected = selectedIds.includes(staff.id);
                return (
                  <button
                    key={staff.id}
                    onClick={() => toggleSelection(staff.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all text-left group
                      ${isSelected 
                        ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-100' 
                        : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors
                      ${isSelected ? 'bg-blue-600 border-blue-600' : 'border-slate-300 bg-white'}`}>
                      {isSelected && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-black text-xs overflow-hidden border border-slate-200">
                        {staff.photoUrl ? <img src={staff.photoUrl} alt="" className="w-full h-full object-cover" /> : staff.name[0]}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className={`font-bold text-sm ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>{staff.name}</div>
                      <div className="text-xs text-slate-400 font-mono">#{staff.staffNo}</div>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <p className="text-slate-400 text-sm font-medium">配置可能な職員がいないか、全員配置済みです</p>
              </div>
            )}
          </div>
        </div>

        {/* フッター */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-500">
            {selectedIds.length} 名選択中
          </span>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-5 py-2 text-sm font-bold text-slate-500 hover:bg-slate-200 rounded-xl transition-colors">
              キャンセル
            </button>
            <button 
              onClick={handleConfirm}
              disabled={selectedIds.length === 0}
              className={`px-4 py-2 rounded text-white
                ${selectedIds.length > 0 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95' 
                  : 'bg-slate-300 text-slate-100 cursor-not-allowed'}`}
            >
              配置を確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};