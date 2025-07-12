import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      alert('Registration successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" required onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}
