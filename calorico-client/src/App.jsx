import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { useState, useEffect } from 'react';


function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users');
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
  }
}

  useEffect(() => {
    fetchUsers();
  },[])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Router>
      <div>
        <nav>
        </nav>
        <main>
          <Routes>
            <Route exact path="/" element={<Home users={users}/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}


export default App;
