'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { format, addDays, subDays } from 'date-fns'
import ja from 'date-fns/locale/ja'
import {
  Employee,
  SleepGroup,
  WorkScheduleDay,
  SpecialLeave,
  SpecialLeaveType,
  UserRole,
  WorkScheduleStatus
} from '@/types'
import ScheduleTable from '@/components/ScheduleTable'
import EmployeeList from '@/components/EmployeeList'
import SpecialLeaveForm from '@/components/SpecialLeaveForm'
import {
  getScheduleDayAction,
  addEmployeeToGroupAction,
  removeEmployeeFromGroupAction,
  addSpecialLeaveAction,
  removeSpecialLeaveAction,
  updateScheduleStatusAction
} from './actions'

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
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>('一般')
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
      specialLeaves: [],
      status: '未承認',
      hasEverCancelled: false
    }
    return initial
  })

  const isEditable =
    !schedule.status || schedule.status === '未承認' || schedule.status === '修正中'

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
  const handleAddEmployeeToGroup = async (employeeId: string, groupId: SleepGroup) => {
    if (!isEditable) return
    try {
      await addEmployeeToGroupAction(selectedDate, employeeId, groupId)
      // データを再取得
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated)
    } catch (error) {
      alert(error instanceof Error ? error.message : '職員の追加に失敗しました')
    }
  }

  // 職員を仮眠時間グループから削除
  const handleRemoveEmployeeFromGroup = async (employeeId: string, groupId: SleepGroup) => {
    if (!isEditable) return
    try {
      await removeEmployeeFromGroupAction(selectedDate, employeeId, groupId)
      // データを再取得
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated)
    } catch (error) {
      console.error('職員の削除に失敗しました:', error)
    }
  }

  // 特別休暇を追加
  const handleAddSpecialLeave = async (
    employeeId: string,
    type: SpecialLeaveType,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string
  ) => {
    if (!isEditable) return
    try {
      await addSpecialLeaveAction(selectedDate, employeeId, type, startDate, startTime, endDate, endTime)
      // データを再取得
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated)
    } catch (error) {
      alert(error instanceof Error ? error.message : '特別休暇の追加に失敗しました')
    }
  }

  // 特別休暇を削除
  const handleRemoveSpecialLeave = async (leaveId: string) => {
    if (!isEditable) return
    try {
      await removeSpecialLeaveAction(selectedDate, leaveId)
      // データを再取得
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated)
    } catch (error) {
      console.error('特別休暇の削除に失敗しました:', error)
    }
  }

  // 日付変更時
  useEffect(() => {
    const loadScheduleData = async () => {
      try {
        const scheduleData = await getScheduleDayAction(selectedDate)
        setSchedule(scheduleData as WorkScheduleDay)
      } catch (error) {
        console.error('勤務表の読み込みに失敗しました:', error)
        // エラー時は初期値を設定
        setSchedule({
          date: selectedDate,
          sleepGroups: {
            group1: [],
            group2: [],
            group3: [],
            group4: [],
            weekend: []
          },
          specialLeaves: [],
          status: '未承認',
          hasEverCancelled: false
        })
      }
    }
    loadScheduleData()
  }, [selectedDate])

  // 確定承認依頼
  const handleRequestApproval = async () => {
    if (schedule.status !== '未承認' && schedule.status !== '修正中') return
    if (currentUserRole !== '一般' && currentUserRole !== '承認者' && currentUserRole !== '管理者') return
    try {
      await updateScheduleStatusAction(selectedDate, '承認依頼中')
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated as WorkScheduleDay)
    } catch (error) {
      console.error('確定承認依頼に失敗しました:', error)
    }
  }

  // 勤務表の承認・確定
  const handleConfirmSchedule = async () => {
    if (currentUserRole !== '承認者' && currentUserRole !== '管理者') return
    if (schedule.status !== '承認依頼中') return

    const nextStatus: WorkScheduleStatus = schedule.hasEverCancelled ? '修正済' : '確定'
    try {
      await updateScheduleStatusAction(selectedDate, nextStatus)
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated as WorkScheduleDay)
    } catch (error) {
      console.error('勤務表の承認・確定に失敗しました:', error)
    }
  }

  // 確定取り消し
  const handleCancelConfirmation = async () => {
    if (currentUserRole !== '管理者') return
    if (schedule.status !== '確定' && schedule.status !== '修正済') return

    try {
      await updateScheduleStatusAction(selectedDate, '修正中', { markCancelled: true })
      const updated = await getScheduleDayAction(selectedDate)
      setSchedule(updated as WorkScheduleDay)
    } catch (error) {
      console.error('確定取り消しに失敗しました:', error)
    }
  }

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
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">現在の役割</span>
            <select
              value={currentUserRole}
              onChange={(e) => setCurrentUserRole(e.target.value as UserRole)}
              className="px-3 py-1 border border-gray-300 rounded text-sm"
            >
              <option value="一般">一般</option>
              <option value="承認者">承認者</option>
              <option value="管理者">管理者</option>
            </select>
          </div>
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

        {/* 勤務表の状態と操作 */}
        <div className="mb-4 bg-white p-4 rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm text-gray-600">勤務表の状態</div>
            <div className="mt-1 text-lg font-semibold">
              {schedule.status}
            </div>
            {(!isEditable) && (
              <div className="mt-1 text-xs text-red-600">
                この状態では勤務表の編集はできません。
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleRequestApproval}
              disabled={
                !(
                  (schedule.status === '未承認' || schedule.status === '修正中') &&
                  (currentUserRole === '一般' || currentUserRole === '承認者' || currentUserRole === '管理者')
                )
              }
              className={`px-3 py-2 rounded text-sm ${
                (schedule.status === '未承認' || schedule.status === '修正中') &&
                (currentUserRole === '一般' || currentUserRole === '承認者' || currentUserRole === '管理者')
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-200 text-blue-700 cursor-not-allowed'
              }`}
            >
              確定承認依頼
            </button>
            <button
              type="button"
              onClick={handleConfirmSchedule}
              disabled={!(schedule.status === '承認依頼中' && (currentUserRole === '承認者' || currentUserRole === '管理者'))}
              className={`px-3 py-2 rounded text-sm ${
                schedule.status === '承認依頼中' && (currentUserRole === '承認者' || currentUserRole === '管理者')
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-200 text-green-700 cursor-not-allowed'
              }`}
            >
              勤務表を承認・確定
            </button>
            <button
              type="button"
              onClick={handleCancelConfirmation}
              disabled={!(currentUserRole === '管理者' && (schedule.status === '確定' || schedule.status === '修正済'))}
              className={`px-3 py-2 rounded text-sm ${
                currentUserRole === '管理者' && (schedule.status === '確定' || schedule.status === '修正済')
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-200 text-red-700 cursor-not-allowed'
              }`}
            >
              確定を取り消し
            </button>
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
                isEditable={isEditable}
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