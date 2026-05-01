import { Link } from "react-router-dom";
import { users } from "../data/users";

export default function Users() {
  return (
    <div className="page">
      <h1>Users List</h1>
      <p>Click on a user to view details.</p>

      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}`} className="btn-small">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}