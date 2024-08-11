
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
    <Router>
      <div>
        <nav>

        </nav>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route />
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </main>
      </div>
    </Router>
    </>
  )
}

export default App
