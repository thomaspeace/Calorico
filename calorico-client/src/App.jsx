import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CaloriePage from './components/CaloriePage';
import WeightPage from './components/WeightPage';


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
          <Navigation />
          <main>
            <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path="/users/:id" element={<UserPage />}/>
              <Route path="/calories/:id" element={<CaloriePage />}/>
              <Route path="/weights/:id" element={<WeightPage />}/>
            </Routes>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
