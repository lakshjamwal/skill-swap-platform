import { useEffect, useState } from 'react';
import axios from 'axios';
import SwapCard from '../components/Swapcard';

export default function Browse() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  async function fetchUsers() {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  }

  useEffect(() => { fetchUsers(); }, []);

  const filtered = users.filter(user =>
    user.skillsOffered.join(' ').toLowerCase().includes(query.toLowerCase()) ||
    user.skillsWanted.join(' ').toLowerCase().includes(query.toLowerCase())
  );

  async function handleRequestSwap(receiverId) {
    const senderId = localStorage.getItem('userId'); // or from AuthContext
    try {
      await axios.post('http://localhost:5000/api/swaps/request', { senderId, receiverId });
      alert('Swap Request Sent!');
    } catch (err) {
      alert('Request failed');
    }
  }

  return (
    <div className="browse-page">
      <input
        placeholder="Search skill e.g. Photoshop"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="swap-list">
        {filtered.map(user => (
          <SwapCard key={user._id} user={user} onRequest={handleRequestSwap} />
        ))}
      </div>
    </div>
  );
}
