// ui/components/SpecialLeaveModal.tsx

import React, { useState, useMemo } from 'react';
import { ScheduleDaySpecialLeaveUI } from '@/types/schedule-day';

interface SpecialLeaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  baseDate: string; // YYYY-MM-DD
  staffs: { id: number; name: string; staffNo: string }[];
  leaveGroups: { id: string; name: string }[];
  leaveTypes: { id: string; name: string; groupId: string }[];
  onSave: (assignment: any) => void;
}

export const SpecialLeaveModal = ({
  isOpen,
  onClose,
  baseDate,
  staffs,
  leaveGroups,
  leaveTypes,
  onSave,
}: SpecialLeaveModalProps) => {
  const [selectedStaffId, setSelectedStaffId] = useState<number | ''>('');
  const [selectedGroupId, setSelectedGroupId] = useState<string>('');
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');
  
  // 時間入力：時刻(HH:mm)と「翌日フラグ」を分けて管理
  const [startClock, setStartClock] = useState('08:30');
  const [isStartNextDay, setIsStartNextDay] = useState(false);
  const [endClock, setEndClock] = useState('17:30');
  const [isEndNextDay, setIsEndNextDay] = useState(false);

  // LeaveTypeの絞り込み
  const filteredTypes = useMemo(() => 
    leaveTypes.filter(t => t.groupId === selectedGroupId),
    [leaveTypes, selectedGroupId]
  );

  // 時刻文字列を 24h+ 表記に変換 (バリデーション表示用)
  const formatToDisplayTime = (clock: string, isNextDay: boolean) => {
    if (!isNextDay) return clock;
    const [h, m] = clock.split(':');
    return `${Number(h) + 24}:${m}`;
  };

  const handleSave = () => {
    if (!selectedStaffId || !selectedTypeId) return;

    // Prisma/DB形式に合わせて DateTime オブジェクトを組み立て
    const constructDateTime = (clock: string, isNextDay: boolean) => {
      const date = new Date(baseDate);
      if (isNextDay) date.setDate(date.getDate() + 1);
      const [h, m] = clock.split(':');
      date.setHours(Number(h), Number(m), 0, 0);
      return date;
    };

    onSave({
      staffId: selectedStaffId,
      specialLeaveTypeId: selectedTypeId,
      baseDate: new Date(baseDate),
      startTime: constructDateTime(startClock, isStartNextDay),
      endTime: constructDateTime(endClock, isEndNextDay),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden">
        
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-blue-600 text-white">
          <h2 className="text-xl font-bold">特別休暇の登録</h2>
          <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Staff 選択 */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">職員</label>
            <select 
              value={selectedStaffId} 
              onChange={(e) => setSelectedStaffId(Number(e.target.value))}
              className="w-full rounded-lg border-slate-200"
            >
              <option value="">職員を選択してください</option>
              {staffs.map(s => <option key={s.id} value={s.id}>{s.name} (#{s.staffNo})</option>)}
            </select>
          </div>

          {/* 休暇分類・種類 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">休暇グループ</label>
              <select 
                value={selectedGroupId} 
                onChange={(e) => { setSelectedGroupId(e.target.value); setSelectedTypeId(''); }}
                className="w-full rounded-lg border-slate-200"
              >
                <option value="">選択...</option>
                {leaveGroups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">休暇名</label>
              <select 
                value={selectedTypeId} 
                onChange={(e) => setSelectedTypeId(e.target.value)}
                disabled={!selectedGroupId}
                className="w-full rounded-lg border-slate-200 disabled:bg-slate-50"
              >
                <option value="">選択...</option>
                {filteredTypes.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </div>
          </div>

          {/* 時間入力エリア */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
            <TimeInputRow 
              label="開始時刻"
              clock={startClock}
              setClock={setStartClock}
              isNextDay={isStartNextDay}
              setIsNextDay={setIsStartNextDay}
              displayTime={formatToDisplayTime(startClock, isStartNextDay)}
            />
            <hr className="border-slate-200" />
            <TimeInputRow 
              label="終了時刻"
              clock={endClock}
              setClock={setEndClock}
              isNextDay={isEndNextDay}
              setIsNextDay={setIsEndNextDay}
              displayTime={formatToDisplayTime(endClock, isEndNextDay)}
            />
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-200 rounded-lg transition-all">キャンセル</button>
          <button 
            onClick={handleSave}
            disabled={!selectedStaffId || !selectedTypeId}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50 shadow-lg shadow-blue-200 transition-all"
          >
            登録する
          </button>
        </div>
      </div>
    </div>
  );
};

// 時間入力用のサブコンポーネント
const TimeInputRow = ({ label, clock, setClock, isNextDay, setIsNextDay, displayTime }: any) => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-bold text-slate-600">{label}</span>
      <span className="text-xs font-mono bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
        表記: {displayTime}
      </span>
    </div>
    <div className="flex items-center gap-3">
      <input 
        type="time" 
        value={clock}
        onChange={(e) => setClock(e.target.value)}
        className="flex-1 rounded-lg border-slate-200 focus:ring-blue-500"
      />
      <div className="flex bg-white rounded-lg border border-slate-200 p-1">
        <button 
          onClick={() => setIsNextDay(false)}
          className={`px-3 py-1 text-xs rounded-md transition-all ${!isNextDay ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'}`}
        >当日</button>
        <button 
          onClick={() => setIsNextDay(true)}
          className={`px-3 py-1 text-xs rounded-md transition-all ${isNextDay ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500'}`}
        >翌日</button>
      </div>
    </div>
  </div>
);