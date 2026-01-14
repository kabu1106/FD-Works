'use client'

import { useState } from 'react'
import { Employee } from '@/types'

interface EmployeeSelectModalProps {
  isOpen: boolean
  employees: Employee[]
  onSelect: (employeeId: string) => void
  onClose: () => void
}

export default function EmployeeSelectModal({
  isOpen,
  employees,
  onSelect,
  onClose
}: EmployeeSelectModalProps) {
  const [searchTerm, setSearchTerm] = useState('')

  if (!isOpen) return null

  const filteredEmployees = employees.filter(employee =>
    employee.name.includes(searchTerm) ||
    employee.employeeNumber.includes(searchTerm) ||
    employee.department.includes(searchTerm)
  )

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">職員を選択</h2>
          <button
            onClick={onClose}
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
              {filteredEmployees.map(employee => (
                <button
                  key={employee.id}
                  onClick={() => {
                    onSelect(employee.id)
                    onClose()
                  }}
                  className="w-full text-left p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">{employee.name}</div>
                  <div className="text-sm text-gray-500">
                    {employee.employeeNumber} - {employee.department}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}