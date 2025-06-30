import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="btn btn-outline-primary">
          <i className="fas fa-home"></i>
        </Link>
        {isHome && (
          <Link to="/form">
            <button className="btn btn-success">Add new contact</button>
          </Link>
        )}
      </div>
    </nav>
  );
};
