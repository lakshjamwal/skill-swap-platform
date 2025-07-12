export default function SwapCard({ user, onRequest }) {
  return (
    <div className="swap-card">
      <h3>{user.name}</h3>
      <p><strong>Offers:</strong> {user.skillsOffered.join(', ')}</p>
      <p><strong>Wants:</strong> {user.skillsWanted.join(', ')}</p>
      <p><strong>Availability:</strong> {user.availability}</p>
      <button onClick={() => onRequest(user._id)}>Request Swap</button>
    </div>
  );
}
