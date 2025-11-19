import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function RoadmapCard({ r }) {
  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-blue-500/40 transition">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-white font-semibold text-lg">{r.title}</h3>
        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full">{r.level}</span>
      </div>
      <p className="text-slate-300 text-sm mb-3">{r.description}</p>
      <ol className="list-decimal pl-5 space-y-1 text-slate-300/90 text-sm">
        {r.steps?.slice(0,5).map((s,i)=>(<li key={i}>{s}</li>))}
      </ol>
    </div>
  )
}

function RoadmapList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/roadmaps`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  },[])

  if (loading) return <p className="text-slate-300">Loading roadmaps...</p>

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((r,idx)=> <RoadmapCard key={idx} r={r} />)}
      {items.length===0 && (
        <div className="col-span-full text-slate-300">
          No roadmaps yet. Click "Seed Sample Data" below to add examples.
        </div>
      )}
    </div>
  )
}

export default RoadmapList
