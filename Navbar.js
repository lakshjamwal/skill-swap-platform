import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold">SkillSwap</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/swaps">Swaps</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
