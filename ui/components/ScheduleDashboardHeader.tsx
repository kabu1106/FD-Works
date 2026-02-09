// ui/components/ScheduleDashboardHeader.tsx

import React from 'react';

interface Team {
  teamId: number;
  name: string;
}

interface ScheduleDashboardHeaderProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  teams: Team[];
  selectedTeamId: number;
  onTeamChange: (teamId: number) => void;
}

export const ScheduleDashboardHeader = ({
  selectedDate,
  onDateChange,
  teams,
  selectedTeamId,
  onTeamChange,
}: ScheduleDashboardHeaderProps) => {
  
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30 w-full">
      <div className="max-w-[1600px] mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* 左側：タイトルと日付選択 */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="p-2 bg-blue-600 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              Duty Scheduler
            </h1>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <label htmlFor="date-picker" className="sr-only">日付選択</label>
              <input
                id="date-picker"
                type="date"
                value={selectedDate}
                onChange={(e) => onDateChange(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 cursor-pointer"
              />
              <span className="text-slate-400 text-xs pr-2 hidden md:inline">
                (手入力可)
              </span>
            </div>
          </div>

          {/* 右側：Team選択ドロップダウン */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <select
                value={selectedTeamId}
                onChange={(e) => onTeamChange(Number(e.target.value))}
                className="block w-full pl-10 pr-10 py-2 text-base border-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg border appearance-none bg-white font-medium text-slate-700 shadow-sm"
              >
                {teams.map((team) => (
                  <option key={team.teamId} value={team.teamId}>
                    {team.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* クイック統計（任意：選択中のチームの概要など） */}
            <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-100">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Viewing Team Duty
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};