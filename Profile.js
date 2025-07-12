import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/users/${userId}`).then(res => {
      setUser(res.data);
    });
  }, []);

  const toggleVisibility = async () => {
    const updated = !user.isPublic;
    const res = await axios.put(`http://localhost:5000/api/users/visibility/${userId}`, {
      isPublic: updated
    });
    setUser(res.data);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile">
      <h2>{user.name}'s Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Status:</strong> {user.isPublic ? '🌐 Public' : '🔒 Private'}</p>
      <button onClick={toggleVisibility}>
        Make {user.isPublic ? 'Private' : 'Public'}
      </button>
    </div>
  );
}
