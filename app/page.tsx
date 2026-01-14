import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          FD-Works 勤怠管理システム
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/schedule"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              勤務表
            </h2>
            <p className="text-gray-600">
              職員の勤務表を作成・管理します
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}