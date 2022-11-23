import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/header'
import { Posts } from './pages/home/components/posts'
import { Home } from './pages/home/index'
import { Post } from './pages/page'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route>
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
