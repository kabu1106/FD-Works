'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { format, addDays, subDays } from 'date-fns'
import ja from 'date-fns/locale/ja'
import { Employee, SleepGroup, WorkScheduleDay, SpecialLeave, SpecialLeaveType } from '@/types'
import ScheduleTable from '@/components/ScheduleTable'
import EmployeeList from '@/components/EmployeeList'
import SpecialLeaveForm from '@/components/SpecialLeaveForm'
import { saveSchedule, loadSchedule } from '@/lib/storage'
import { convertToMinutes } from '@/lib/timeUtils'

// 仮眠時間グループの定義
const SLEEP_GROUPS: { [key in SleepGroup]: { label: string; timeRanges: string[] } } = {
  group1: {
    label: '[1番起]24:00〜30:45',
    timeRanges: ['24:00〜30:45']
  },
  group2: {
    label: '[2番起]22:00〜24:00,26:00〜30:45',
    timeRanges: ['22:00〜24:00', '26:00〜30:45']
  },
  group3: {
    label: '[3番起]22:00〜26:00,28:00〜30:45',
    timeRanges: ['22:00〜26:00', '28:00〜30:45']
  },
  group4: {
    label: '[4番起]21:15〜28:00',
    timeRanges: ['21:15〜28:00']
  },
  weekend: {
    label: '週休',
    timeRanges: []
  }
}

// サンプル職員データ
const SAMPLE_EMPLOYEES: Employee[] = [
  { id: '1', employeeNumber: '001', name: '山田太郎', department: '第一分署' },
  { id: '2', employeeNumber: '002', name: '佐藤花子', department: '第一分署' },
  { id: '3', employeeNumber: '003', name: '鈴木一郎', department: '第二分署' },
  { id: '4', employeeNumber: '004', name: '高橋次郎', department: '第二分署' },
  { id: '5', employeeNumber: '005', name: '伊藤三郎', department: '第三分署' },
]

const SPECIAL_LEAVE_TYPES: SpecialLeaveType[] = ['年次休暇', '夏季休暇', '慶弔休暇', 'その他']

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [selectedDepartment, setSelectedDepartment] = useState<string>('全て')
  const [schedule, setSchedule] = useState<WorkScheduleDay>(() => {
    const initial: WorkScheduleDay = {
      date: selectedDate,
      sleepGroups: {
        group1: [],
        group2: [],
        group3: [],
        group4: [],
        weekend: []
      },
      specialLeaves: []
    }
    return initial
  })

  // 所属のリスト
  const departments = ['全て', ...Array.from(new Set(SAMPLE_EMPLOYEES.map(e => e.department)))]

  // フィルタリングされた職員リスト
  const filteredEmployees = selectedDepartment === '全て'
    ? SAMPLE_EMPLOYEES
    : SAMPLE_EMPLOYEES.filter(e => e.department === selectedDepartment)

  // 既に配置されている職員ID
  const assignedEmployeeIds = new Set([
    ...schedule.sleepGroups.group1,
    ...schedule.sleepGroups.group2,
    ...schedule.sleepGroups.group3,
    ...schedule.sleepGroups.group4,
    ...schedule.sleepGroups.weekend
  ])

  // 利用可能な職員（未配置の職員）
  const availableEmployees = filteredEmployees.filter(e => !assignedEmployeeIds.has(e.id))

  // 職員を仮眠時間グループに追加
  const handleAddEmployeeToGroup = (employeeId: string, groupId: SleepGroup) => {
    setSchedule(prev => {
      // 既に他のグループに配置されているかチェック
      const allAssignedIds = [
        ...prev.sleepGroups.group1,
        ...prev.sleepGroups.group2,
        ...prev.sleepGroups.group3,
        ...prev.sleepGroups.group4,
        ...prev.sleepGroups.weekend
      ]
      
      if (allAssignedIds.includes(employeeId)) {
        // 既にこのグループに配置されている場合は何もしない
        if (prev.sleepGroups[groupId].includes(employeeId)) {
          return prev
        }
        // 他のグループに配置されている場合は警告
        alert('この職員は既に他のグループに配置されています')
        return prev
      }

      const updated = {
        ...prev,
        sleepGroups: {
          ...prev.sleepGroups,
          [groupId]: [...prev.sleepGroups[groupId], employeeId]
        }
      }
      saveSchedule(selectedDate, updated)
      return updated
    })
  }

  // 職員を仮眠時間グループから削除
  const handleRemoveEmployeeFromGroup = (employeeId: string, groupId: SleepGroup) => {
    setSchedule(prev => {
      const updated = {
        ...prev,
        sleepGroups: {
          ...prev.sleepGroups,
          [groupId]: prev.sleepGroups[groupId].filter(id => id !== employeeId)
        }
      }
      saveSchedule(selectedDate, updated)
      return updated
    })
  }

  // 特別休暇を追加
  const handleAddSpecialLeave = (
    employeeId: string,
    type: SpecialLeaveType,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string
  ) => {
    // 分単位に変換
    const startMinutes = convertToMinutes(startDate, startTime, selectedDate)
    const endMinutes = convertToMinutes(endDate, endTime, selectedDate)

    const newLeave: SpecialLeave = {
      id: Date.now().toString(),
      employeeId,
      type,
      baseDate: selectedDate,
      startDate,
      startTime,
      startMinutes,
      endDate,
      endTime,
      endMinutes
    }
    setSchedule(prev => {
      const updated = {
        ...prev,
        specialLeaves: [...prev.specialLeaves, newLeave]
      }
      saveSchedule(selectedDate, updated)
      return updated
    })
  }

  // 特別休暇を削除
  const handleRemoveSpecialLeave = (leaveId: string) => {
    setSchedule(prev => {
      const updated = {
        ...prev,
        specialLeaves: prev.specialLeaves.filter(leave => leave.id !== leaveId)
      }
      saveSchedule(selectedDate, updated)
      return updated
    })
  }

  // 日付変更時
  useEffect(() => {
    const saved = loadSchedule(selectedDate)
    if (saved) {
      setSchedule(saved)
    } else {
      setSchedule({
        date: selectedDate,
        sleepGroups: {
          group1: [],
          group2: [],
          group3: [],
          group4: [],
          weekend: []
        },
        specialLeaves: []
      })
    }
  }, [selectedDate])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex justify-between items-center">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            ← ダッシュボードに戻る
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">勤務表</h1>
          <div></div>
        </div>

        {/* 日付選択 */}
        <div className="mb-4 bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedDate(format(subDays(new Date(selectedDate), 1), 'yyyy-MM-dd'))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              前日
            </button>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={() => setSelectedDate(format(addDays(new Date(selectedDate), 1), 'yyyy-MM-dd'))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              翌日
            </button>
            <span className="text-gray-600">
              {format(new Date(selectedDate), 'yyyy年M月d日(E)', { locale: ja })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* 左側: 職員リスト */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-blue-500">
              <h2 className="text-lg font-semibold mb-3 text-gray-900">職員一覧</h2>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  所属でフィルタ
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <EmployeeList
                employees={availableEmployees}
                onDragStart={(employeeId) => {
                  // ドラッグデータを設定（ブラウザの標準機能では実装が難しいため、別のアプローチを取る）
                }}
              />
            </div>
          </div>

          {/* 右側: 勤務表 */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-green-500">
              <h2 className="text-lg font-semibold mb-3 text-gray-900">勤務表</h2>
              <ScheduleTable
                schedule={schedule}
                employees={SAMPLE_EMPLOYEES}
                sleepGroups={SLEEP_GROUPS}
                onAddEmployee={handleAddEmployeeToGroup}
                onRemoveEmployee={handleRemoveEmployeeFromGroup}
              />
            </div>

            {/* 特別休暇フォーム */}
            <div className="bg-white p-4 rounded-lg shadow border-t-4 border-purple-500">
              <h2 className="text-lg font-semibold mb-3 text-gray-900">特別休暇</h2>
              <SpecialLeaveForm
                employees={SAMPLE_EMPLOYEES}
                leaveTypes={SPECIAL_LEAVE_TYPES}
                currentDate={selectedDate}
                existingLeaves={schedule.specialLeaves}
                onAdd={handleAddSpecialLeave}
              />
              {schedule.specialLeaves.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-md font-semibold mb-4 text-gray-800 pb-2 border-b-2 border-gray-200">
                    登録済み特別休暇
                  </h3>
                  <div className="space-y-3">
                    {schedule.specialLeaves.map(leave => {
                      const employee = SAMPLE_EMPLOYEES.find(e => e.id === leave.employeeId)
                      const startDateTime = `${leave.startDate} ${leave.startTime}`
                      const endDateTime = leave.endDate === leave.startDate
                        ? leave.endTime
                        : `${leave.endDate} ${leave.endTime}`
                      
                      // 休暇種別ごとの色分け
                      const typeColors: { [key in SpecialLeaveType]: string } = {
                        '年次休暇': 'bg-blue-100 text-blue-800 border-blue-300',
                        '夏季休暇': 'bg-green-100 text-green-800 border-green-300',
                        '慶弔休暇': 'bg-purple-100 text-purple-800 border-purple-300',
                        'その他': 'bg-gray-100 text-gray-800 border-gray-300'
                      }
                      
                      return (
                        <div
                          key={leave.id}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex-1 flex items-center gap-4">
                            <span className={`px-3 py-1.5 text-sm font-semibold rounded-full border ${typeColors[leave.type]}`}>
                              {leave.type}
                            </span>
                            <div>
                              <div className="font-semibold text-gray-900">{employee?.name}</div>
                              <div className="text-sm text-gray-600 mt-1">
                                {startDateTime} 〜 {endDateTime}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveSpecialLeave(leave.id)}
                            className="ml-4 px-3 py-1.5 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm hover:shadow"
                          >
                            削除
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}