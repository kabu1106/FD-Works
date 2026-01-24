'use client'

import { useState } from 'react'
import { Employee } from '@/types'

interface EmployeeSelectModalProps {
  isOpen: boolean
  employees: Employee[]
  onConfirm: (employeeIds: string[]) => void
  onClose: () => void
}

export default function EmployeeSelectModal({
  isOpen,
  employees,
  onConfirm,
  onClose
}: EmployeeSelectModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<string[]>([])

  if (!isOpen) return null

  const filteredEmployees = employees.filter(employee =>
    employee.name.includes(searchTerm) ||
    employee.employeeNumber.includes(searchTerm) ||
    employee.department.includes(searchTerm)
  )

  const toggleSelect = (employeeId: string) => {
    setSelectedEmployeeIds(prev =>
      prev.includes(employeeId)
        ? prev.filter(id => id !== employeeId)
        : [...prev, employeeId]
    )
  }

  const handleConfirm = () => {
    if (selectedEmployeeIds.length === 0) return
    onConfirm(selectedEmployeeIds)
    setSelectedEmployeeIds([])
  }

  const handleClose = () => {
    setSelectedEmployeeIds([])
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">職員を選択</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="職員名、職員番号、所属で検索"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
        />
        <div className="flex-1 overflow-y-auto">
          {filteredEmployees.length === 0 ? (
            <p className="text-gray-500 text-center py-4">該当する職員が見つかりません</p>
          ) : (
            <div className="space-y-2">
              {filteredEmployees.map(employee => {
                const isSelected = selectedEmployeeIds.includes(employee.id)
                return (
                  <button
                    key={employee.id}
                    type="button"
                    onClick={() => toggleSelect(employee.id)}
                    className={`w-full text-left p-3 border rounded flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-blue-50 border-blue-400'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{employee.name}</div>
                      <div className="text-sm text-gray-500">
                        {employee.employeeNumber} - {employee.department}
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            キャンセル
          </button>
          <button
            type="button"
            onClick={() => {
              handleConfirm()
              handleClose()
            }}
            disabled={selectedEmployeeIds.length === 0}
            className={`px-4 py-2 rounded text-white ${
              selectedEmployeeIds.length === 0
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            選択した職員を追加
          </button>
        </div>
      </div>
    </div>
  )
}