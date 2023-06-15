import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../src/contexts/auth'
import { DbContentsProvider } from './contexts/db'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <DbContentsProvider>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='plans' element={<Plans />} />
            <Route path='trainers' element={<Trainers />} />
            <Route path='login/*' element={<Login />} />
            <Route path='admin/*' element={<Admin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />
        </DbContentsProvider>
      </AuthProvider>
    </ BrowserRouter>
  )
}

export default App
