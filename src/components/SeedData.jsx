import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SeedData({ onSeeded }) {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const seed = async () => {
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
      if (!res.ok) throw new Error(`Failed: ${res.status}`)
      const data = await res.json()
      setStatus(`Seeded ✔ roadmaps: ${data.created?.roadmaps ?? 0}, courses: ${data.created?.courses ?? 0}`)
      onSeeded?.()
    } catch (e) {
      setStatus(`Error seeding: ${e.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 p-4 border border-slate-700 rounded-xl bg-slate-800/60">
      <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
        <div className="text-slate-300 text-sm">
          If you don't see any items, add sample content to get started.
        </div>
        <button onClick={seed} disabled={loading} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white font-semibold">
          {loading ? 'Seeding…' : 'Seed Sample Data'}
        </button>
      </div>
      {status && <p className="text-slate-300 text-sm mt-3">{status}</p>}
    </div>
  )
}

export default SeedData
