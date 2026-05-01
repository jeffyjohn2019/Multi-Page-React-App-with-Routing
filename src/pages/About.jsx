import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="page">
      <h1>About This App</h1>
      <p>
        This is a React application built using React Router DOM. It demonstrates
        navigation between multiple pages, including parameterized routes.
      </p>

      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}