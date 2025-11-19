import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Roadmaps from './pages/Roadmaps'
import Courses from './pages/Courses'
import CourseDetailPage from './pages/CourseDetailPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
