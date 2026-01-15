'use client'

import { useState, useEffect } from 'react'
import { Employee, SpecialLeaveType, SpecialLeave } from '@/types'
import { validateDateTimeRange, convertToMinutes, isTimeRangeOverlapping } from '@/lib/timeUtils'

interface SpecialLeaveFormProps {
  employees: Employee[]
  leaveTypes: SpecialLeaveType[]
  currentDate: string // YYYY-MM-DD形式
  existingLeaves: SpecialLeave[] // 既存の特別休暇
  onAdd: (
    employeeId: string,
    type: SpecialLeaveType,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string
  ) => void
}

export default function SpecialLeaveForm({ employees, leaveTypes, currentDate, existingLeaves, onAdd }: SpecialLeaveFormProps) {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('')
  const [selectedType, setSelectedType] = useState<SpecialLeaveType>(leaveTypes[0])
  const [startDate, setStartDate] = useState(currentDate)
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState(currentDate)
  const [endTime, setEndTime] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  // 日付変更時に開始日・終了日も変更
  useEffect(() => {
    setStartDate(currentDate)
    setEndDate(currentDate)
  }, [currentDate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    if (!selectedEmployeeId) {
      setErrors({ employee: '職員を選択してください' })
      return
    }

    if (!startDate) {
      setErrors(prev => ({ ...prev, startDate: '開始日を入力してください' }))
      return
    }

    if (!startTime) {
      setErrors(prev => ({ ...prev, startTime: '開始時間を入力してください' }))
      return
    }

    if (!endDate) {
      setErrors(prev => ({ ...prev, endDate: '終了日を入力してください' }))
      return
    }

    if (!endTime) {
      setErrors(prev => ({ ...prev, endTime: '終了時間を入力してください' }))
      return
    }

    // 日付と時刻のバリデーション（選択された日付を基準に）
    const validation = validateDateTimeRange(startDate, startTime, endDate, endTime, currentDate)
    if (!validation.valid) {
      setErrors(prev => ({ ...prev, timeRange: validation.error || '日時の範囲が無効です' }))
      return
    }

    // 分単位に変換（現在の選択日付を基準に）
    const newStartMinutes = convertToMinutes(startDate, startTime, currentDate)
    const newEndMinutes = convertToMinutes(endDate, endTime, currentDate)

    // 同一職員の既存の休暇と重複していないかチェック
    const overlappingLeave = existingLeaves.find(leave => {
      if (leave.employeeId !== selectedEmployeeId) {
        return false
      }
      
      // 既存の休暇のbaseDateと新しい休暇のcurrentDateが異なる場合も正しく比較するため、
      // 既存の休暇の日付・時刻を新しい休暇のbaseDate（currentDate）を基準に再計算
      const existingStartMinutes = convertToMinutes(leave.startDate, leave.startTime, currentDate)
      const existingEndMinutes = convertToMinutes(leave.endDate, leave.endTime, currentDate)
      
      return isTimeRangeOverlapping(
        newStartMinutes,
        newEndMinutes,
        existingStartMinutes,
        existingEndMinutes
      )
    })

    if (overlappingLeave) {
      setErrors(prev => ({ ...prev, timeRange: 'この職員は既に同じ期間に他の休暇が登録されています' }))
      return
    }

    onAdd(selectedEmployeeId, selectedType, startDate, startTime, endDate, endTime)
    
    // フォームをリセット
    setStartTime('')
    setEndTime('')
    setStartDate(currentDate)
    setEndDate(currentDate)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          職員
        </label>
        <select
          value={selectedEmployeeId}
          onChange={(e) => setSelectedEmployeeId(e.target.value)}
          className={`w-full px-3 py-2 border rounded ${
            errors.employee ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        >
          <option value="">選択してください</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>
              {employee.name} ({employee.employeeNumber})
            </option>
          ))}
        </select>
        {errors.employee && (
          <p className="mt-1 text-xs text-red-600">{errors.employee}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          休暇種別
        </label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as SpecialLeaveType)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        >
          {leaveTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            開始日
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={`w-full px-3 py-2 border rounded ${
              errors.startDate ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.startDate && (
            <p className="mt-1 text-xs text-red-600">{errors.startDate}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            開始時間
          </label>
          <input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            placeholder="例: 8:30, 24:00"
            className={`w-full px-3 py-2 border rounded ${
              errors.startTime ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.startTime && (
            <p className="mt-1 text-xs text-red-600">{errors.startTime}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            24:00形式（8:30〜24:00、25:00はNG）
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            終了日
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={`w-full px-3 py-2 border rounded ${
              errors.endDate ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.endDate && (
            <p className="mt-1 text-xs text-red-600">{errors.endDate}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            終了時間
          </label>
          <input
            type="text"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            placeholder="例: 17:00, 24:00"
            className={`w-full px-3 py-2 border rounded ${
              errors.endTime ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {errors.endTime && (
            <p className="mt-1 text-xs text-red-600">{errors.endTime}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            24:00形式（8:30〜24:00、25:00はNG）
          </p>
        </div>
      </div>

      {errors.timeRange && (
        <div className="p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-sm text-red-600">{errors.timeRange}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        追加
      </button>
    </form>
  )
}