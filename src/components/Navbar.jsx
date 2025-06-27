import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="btn btn-outline-primary">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/form">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
    </nav>
  );
};
