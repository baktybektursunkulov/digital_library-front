import React, { useState, useEffect,axios } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

import '../../App.css'

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  
  const handleSubmit = async(e) => {
  e.preventDefault();
  const token = new URLSearchParams(window.location.search).get('token');
  try {
    const response = await fetch('http://localhost:8075/api/password/reset-password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password }),
    });
    console.log(response)
    if (response.ok) {
      console.log('Password reset successfully:', response);
      // const data = await response.json();
      //   localStorage.setItem('myData', JSON.stringify(data));
        history.push('/login');
      // do something with the data
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.error('Error resetting password:', error);
  setError(error.response.data.message);
  }
  }
  
  return (
  <form onSubmit={handleSubmit}>
  {error && <div>{error}</div>}
  <label>
  New password:
  <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
  </label>
  <label>
  Confirm new password:
  <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
  </label>
  <button type="submit">Submit</button>
  </form>
  );
  }
