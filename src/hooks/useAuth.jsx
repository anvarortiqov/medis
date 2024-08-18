import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, [token]);

  return { isAuthenticated, loading, setLoading, setIsAuthenticated, token };
};

export default useAuth;
