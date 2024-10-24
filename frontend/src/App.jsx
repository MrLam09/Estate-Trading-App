import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Navbar />
          <main className='min-h-screen px-4 py-6 mx-auto max-w-screen-2xl font-primary'>
              <Outlet />
          </main>
        <Footer />
      </AuthProvider>
      
    </>
  )
}

export default App
