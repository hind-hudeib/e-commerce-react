import { useState, useEffect } from 'react';
import axios from 'axios';

function useAuthentication() {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  const setUserAndToken = (userData, token) => {
    setUser(userData);
    console.log(userData);
    localStorage.setItem('token', token);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:5000/user/getUser', {
        headers: {
          'x-auth-token': token,
        },
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        setUser(null);
        localStorage.removeItem('token');
      });
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  return { user, loading, setUserAndToken };
}

export default useAuthentication;
