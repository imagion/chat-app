import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Users from './components/Users'
import Home from './pages/Home/Home'
import ChatRoom from './pages/Home/ChatRoom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <div className='flex justify-between h-screen'>
            {user && <Sidebar />}
            <Routes>
              <Route
                path='/'
                element={user ? <Home /> : <Navigate to='/login' />}
              />
              <Route
                path='/chats/:id'
                element={user ? <ChatRoom /> : <Navigate to='/login' />}
              />
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to='/' />}
              />
              <Route
                path='/signup'
                element={!user ? <Signup /> : <Navigate to='/' />}
              />
            </Routes>
            {user && <Users />}
          </div>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
