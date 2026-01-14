'use client'

import { Employee } from '@/types'

interface EmployeeListProps {
  employees: Employee[]
  onDragStart?: (employeeId: string) => void
}

export default function EmployeeList({ employees, onDragStart }: EmployeeListProps) {
  const handleDragStart = (e: React.DragEvent, employeeId: string) => {
    e.dataTransfer.setData('employeeId', employeeId)
    if (onDragStart) {
      onDragStart(employeeId)
    }
  }

  return (
    <div className="space-y-2 max-h-96 overflow-y-auto">
      {employees.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-4">
          利用可能な職員がありません
        </p>
      ) : (
        employees.map(employee => (
          <div
            key={employee.id}
            draggable
            onDragStart={(e) => handleDragStart(e, employee.id)}
            className="p-3 bg-gray-50 border border-gray-200 rounded cursor-move hover:bg-gray-100 transition-colors"
          >
            <div className="font-medium text-sm">{employee.name}</div>
            <div className="text-xs text-gray-500">
              {employee.employeeNumber} - {employee.department}
            </div>
          </div>
        ))
      )}
    </div>
  )
}