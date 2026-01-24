'use client'

import { useState } from 'react'
import { Employee, SleepGroup, WorkScheduleDay } from '@/types'
import EmployeeSelectModal from './EmployeeSelectModal'

interface ScheduleTableProps {
  schedule: WorkScheduleDay
  employees: Employee[]
  sleepGroups: { [key in SleepGroup]: { label: string; timeRanges: string[] } }
  onAddEmployee: (employeeId: string, groupId: SleepGroup) => void
  onRemoveEmployee: (employeeId: string, groupId: SleepGroup) => void
  isEditable: boolean
}

export default function ScheduleTable({
  schedule,
  employees,
  sleepGroups,
  onAddEmployee,
  onRemoveEmployee,
  isEditable
}: ScheduleTableProps) {
  const [selectedGroup, setSelectedGroup] = useState<SleepGroup | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (groupId: SleepGroup) => {
    if (!isEditable) return
    // 列（またはカード）をクリックして職員選択モーダルを開く
    setSelectedGroup(groupId)
    setIsModalOpen(true)
  }

  const handleEmployeeSelect = (employeeIds: string[]) => {
    if (selectedGroup) {
      employeeIds.forEach(employeeId => {
        onAddEmployee(employeeId, selectedGroup)
      })
    }
    setIsModalOpen(false)
    setSelectedGroup(null)
  }

  const getEmployeeById = (id: string) => employees.find(e => e.id === id)

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        {/* デスクトップ表示 */}
        <table className="hidden md:table min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {(['group1', 'group2', 'group3', 'group4', 'weekend'] as SleepGroup[]).map(groupId => (
                <th
                  key={groupId}
                  className="px-4 py-3 text-center text-sm font-medium text-gray-700 w-1/5"
                >
                  {groupId === 'group1' && '①１番起'}
                  {groupId === 'group2' && '②２番起'}
                  {groupId === 'group3' && '③３番起'}
                  {groupId === 'group4' && '④４番起'}
                  {groupId === 'weekend' && '⑤週休'}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              {(['group1', 'group2', 'group3', 'group4', 'weekend'] as SleepGroup[]).map(groupId => (
                <td
                  key={groupId}
                  className={`px-4 py-4 w-1/5 ${isEditable ? 'cursor-pointer' : 'cursor-not-allowed bg-gray-50'}`}
                  onClick={() => handleClick(groupId)}
                  style={{ minHeight: '200px' }}
                >
                  <div className="flex flex-col gap-2">
                    {schedule.sleepGroups[groupId].map(employeeId => {
                      const employee = getEmployeeById(employeeId)
                      if (!employee) return null
                      return (
                        <div
                          key={employeeId}
                          className="flex items-center justify-between p-2 bg-blue-100 border border-blue-300 rounded"
                        >
                          <span className="text-sm font-medium">{employee.name}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              if (!isEditable) return
                              onRemoveEmployee(employeeId, groupId)
                            }}
                            className={`ml-2 px-2 py-1 text-xs rounded ${
                              isEditable
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            }`}
                          >
                            削除
                          </button>
                        </div>
                      )
                    })}
                    {schedule.sleepGroups[groupId].length === 0 && (
                      <div className="text-gray-400 text-sm text-center py-4">
                        {isEditable ? 'クリックして職員を追加' : '編集不可の状態です'}
                      </div>
                    )}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        {/* スマートフォン表示（縦並び） */}
        <div className="md:hidden space-y-4">
          {(['group1', 'group2', 'group3', 'group4', 'weekend'] as SleepGroup[]).map(groupId => (
            <div
              key={groupId}
              className={`border border-gray-200 rounded-lg p-4 ${
                isEditable ? 'cursor-pointer' : 'cursor-not-allowed bg-gray-50'
              }`}
              onClick={() => handleClick(groupId)}
            >
              <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">
                {groupId === 'group1' && '①１番起'}
                {groupId === 'group2' && '②２番起'}
                {groupId === 'group3' && '③３番起'}
                {groupId === 'group4' && '④４番起'}
                {groupId === 'weekend' && '⑤週休'}
              </h3>
              <div className="flex flex-col gap-2">
                {schedule.sleepGroups[groupId].map(employeeId => {
                  const employee = getEmployeeById(employeeId)
                  if (!employee) return null
                  return (
                    <div
                      key={employeeId}
                      className="flex items-center justify-between p-2 bg-blue-100 border border-blue-300 rounded"
                    >
                      <span className="text-sm font-medium">{employee.name}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemoveEmployee(employeeId, groupId)
                        }}
                        className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        削除
                      </button>
                    </div>
                  )
                })}
                {schedule.sleepGroups[groupId].length === 0 && (
                  <div className="text-gray-400 text-sm text-center py-4">
                    {isEditable ? 'タップして職員を追加' : '編集不可の状態です'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <EmployeeSelectModal
        isOpen={isModalOpen}
        employees={employees.filter(e => !Object.values(schedule.sleepGroups).flat().includes(e.id))}
        onConfirm={handleEmployeeSelect}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedGroup(null)
        }}
      />
    </>
  )
}