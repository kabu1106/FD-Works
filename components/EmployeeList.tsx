'use client'

import { Staff } from '@/types'
import { UserIcon } from '@heroicons/react/24/solid'



interface StaffListProps {
  staffs: Staff[]
  onSelect?: (staff: Staff) => void
}

export default function StaffList({
  staffs,
  onSelect,
}: StaffListProps) {
  return (
    <div className="max-h-[420px] overflow-y-auto space-y-2 pr-1">
      {staffs.length === 0 ? (
        <div className="py-6 text-center text-sm text-gray-500">
          利用可能な職員がありません
        </div>
      ) : (
        staffs.map(staff => (
          <button
            key={staff.id}
            type="button"
            onClick={() => onSelect?.(staff)}
            className="
              w-full flex items-center gap-3
              rounded-md border border-gray-200
              bg-white px-3 py-2
              text-left
              hover:bg-blue-50 hover:border-blue-300
              transition
            "
          >
            {/* アイコン */}
            <div className="flex-shrink-0">
              <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* テキスト */}
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">
                {staff.name}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {staff.staffNo} / {staff.department.name}
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  )
}
