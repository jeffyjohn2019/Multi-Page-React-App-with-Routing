import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to the React Multi-Page App</h1>
      <p>This application demonstrates routing using React Router DOM.</p>

      <div className="btn-group">
        <Link to="/about" className="btn">
          Go to About
        </Link>
        <Link to="/users" className="btn">
          View Users
        </Link>
      </div>
    </div>
  );
}