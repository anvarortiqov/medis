import './App.css'
// components
import Header from './components/Header/index'
import Navbar from './components/Navbar/index'
// imports
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from './hooks/useAuth'
import YesNo from './components/Modals/YesNo/index'

const App = () => {
  const { isAuthenticated, loading, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [loading, isAuthenticated, navigate, token]);

  return (
    <div className='app'>
      <YesNo/>
      <Header />
      <div className='app-block'>
        <Navbar />
        <div className='app-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App