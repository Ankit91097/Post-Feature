import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './pages/HomeScreen'
import CreatePost from './pages/CreatePost'
import ViewPost from './pages/ViewPost'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/create' element={<CreatePost />}/>
        <Route path='/posts' element={<ViewPost />}/>
      </Routes>
    </div>
  )
}

export default App