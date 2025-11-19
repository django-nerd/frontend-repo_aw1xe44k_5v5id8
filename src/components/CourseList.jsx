import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CourseCard({ c }) {
  return (
    <Link to={`/courses/${c.slug}`} className="block bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-blue-500/40 transition">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-white font-semibold text-lg">{c.title}</h3>
        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full">{c.level}</span>
      </div>
      <p className="text-slate-300 text-sm mb-3">{c.description}</p>
      {c.duration && <p className="text-slate-400 text-xs">Duration: {c.duration}</p>}
    </Link>
  )}

function CourseList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/courses`)
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

  if (loading) return <p className="text-slate-300">Loading courses...</p>

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((c,idx)=> <CourseCard key={idx} c={c} />)}
      {items.length===0 && (
        <div className="col-span-full text-slate-300">
          No courses yet. Click "Seed Sample Data" below to add examples.
        </div>
      )}
    </div>
  )
}

export default CourseList
