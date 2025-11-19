import Navbar from '../components/Navbar'
import CourseList from '../components/CourseList'

function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Courses</h1>
        <p className="text-slate-300 mb-8">Hands-on courses for each programming language. Select one to begin learning.</p>
        <CourseList />
      </main>
    </div>
  )
}

export default CoursesPage
