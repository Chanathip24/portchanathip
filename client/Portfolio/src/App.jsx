import './App.css'

/* Pages */
import Home from './pages/Home'
import Works from './pages/Works'
import NotFound from './pages/NotFound'

/* import route */
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'





function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='*' element={<NotFound/>} />


      </Routes>
    </Router>
  )
}

export default App
