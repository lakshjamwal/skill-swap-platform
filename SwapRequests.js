import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SwapRequests() {
  const [requests, setRequests] = useState([]);

  async function fetchRequests() {
    const userId = localStorage.getItem('userId');
    const res = await axios.get(`http://localhost:5000/api/swaps/${userId}`);
    setRequests(res.data);
  }

  async function handleAccept(id) {
    await axios.post(`http://localhost:5000/api/swaps/accept/${id}`);
    fetchRequests();
  }

  async function handleDelete(id) {
    await axios.delete(`http://localhost:5000/api/swaps/${id}`);
    fetchRequests();
  }

  useEffect(() => { fetchRequests(); }, []);

  return (
    <div className="requests-page">
      <h2>Swap Requests</h2>
      {requests.map(req => (
        <div key={req._id} className="request-card">
          <p><strong>From:</strong> {req.sender.name}</p>
          <p><strong>Status:</strong> {req.status}</p>
          {req.status === 'pending' && (
            <>
              <button onClick={() => handleAccept(req._id)}>Accept</button>
              <button onClick={() => handleDelete(req._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
