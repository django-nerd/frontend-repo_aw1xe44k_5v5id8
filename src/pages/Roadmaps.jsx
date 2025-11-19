import Navbar from '../components/Navbar'
import RoadmapList from '../components/RoadmapList'

function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Roadmaps</h1>
        <p className="text-slate-300 mb-8">Step-by-step guides to learn each programming language from scratch.</p>
        <RoadmapList />
      </main>
    </div>
  )
}

export default RoadmapsPage
