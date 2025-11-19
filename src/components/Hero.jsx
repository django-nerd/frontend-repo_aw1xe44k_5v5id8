import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.25),transparent_35%)]"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
        <p className="text-blue-300/80 mb-3">By Nazar</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Learn Programming with Clear Roadmaps and Hands‑on Courses
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Explore step‑by‑step roadmaps for every popular language and dive into detailed courses. Everything you need to go from beginner to builder.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/roadmaps" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow">
            Browse Roadmaps
          </Link>
          <Link to="/courses" className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700">
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
