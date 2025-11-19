import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-500 grid place-items-center text-white font-bold">N</div>
          <span className="text-white font-semibold">Nazar Blog</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/roadmaps" className={({isActive})=>`text-slate-300 hover:text-white transition ${isActive?'text-white':''}`}>Roadmaps</NavLink>
          <NavLink to="/courses" className={({isActive})=>`text-slate-300 hover:text-white transition ${isActive?'text-white':''}`}>Courses</NavLink>
          <a href="/test" className="text-slate-300 hover:text-white transition">Status</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
