import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <h3 className="text-white font-semibold text-xl mb-2">Roadmaps</h3>
            <p className="text-slate-300 mb-4">Follow step-by-step plans to master languages faster.</p>
            <Link to="/roadmaps" className="text-blue-400 underline">Explore roadmaps →</Link>
          </div>
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <h3 className="text-white font-semibold text-xl mb-2">Courses</h3>
            <p className="text-slate-300 mb-4">Learn by doing with structured lessons and resources.</p>
            <Link to="/courses" className="text-blue-400 underline">Browse courses →</Link>
          </div>
        </div>
      </section>
      <footer className="text-center text-slate-400 py-10">
        © {new Date().getFullYear()} Nazar. All rights reserved.
      </footer>
    </div>
  )
}

export default App
