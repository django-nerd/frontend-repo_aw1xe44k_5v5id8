import Navbar from '../components/Navbar'
import CourseDetail from '../components/CourseDetail'

function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <CourseDetail />
      </main>
    </div>
  )
}

export default CourseDetailPage
