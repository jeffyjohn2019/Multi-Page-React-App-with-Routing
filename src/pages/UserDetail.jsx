import { useParams, useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return (
      <div className="page">
        <h2>User Not Found</h2>
        <button className="btn" onClick={() => navigate("/users")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>User Details</h1>

      <div className="details-card">
        <h2>{user.name}</h2>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Age:</b> {user.age}</p>
      </div>

      <button className="btn" onClick={() => navigate("/users")}>
        Go Back
      </button>
    </div>
  );
}