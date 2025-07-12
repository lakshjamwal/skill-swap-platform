import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      alert('Login successful!');
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
