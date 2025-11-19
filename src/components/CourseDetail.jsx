import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CourseDetail() {
  const { slug } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/courses/${slug}`)
        if (!res.ok) throw new Error('Course not found')
        const data = await res.json()
        setCourse(data)
      } catch (e) {
        setCourse({ error: e.message })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  },[slug])

  if (loading) return <p className="text-slate-300">Loading course...</p>
  if (!course || course.error) return (
    <div className="text-slate-300">
      <p>Course not found.</p>
      <Link to="/courses" className="text-blue-400 underline">Back to courses</Link>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Link to="/courses" className="text-blue-400 underline text-sm">← Back to courses</Link>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
      <p className="text-slate-300 mb-4">{course.description}</p>
      {course.duration && <p className="text-slate-400 text-sm mb-6">Duration: {course.duration}</p>}
      <h2 className="text-xl text-white font-semibold mb-3">Lessons</h2>
      <ol className="list-decimal pl-6 space-y-2 text-slate-300">
        {course.lessons?.sort((a,b)=>a.order-b.order).map((l,idx)=> (
          <li key={idx}>
            <p className="font-medium text-white">{l.title}</p>
            <p className="text-slate-300 text-sm">{l.content}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CourseDetail
