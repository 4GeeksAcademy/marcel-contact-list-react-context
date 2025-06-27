import { Link } from "react-router-dom";

export const Navbar = () => {
<<<<<<< HEAD

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
=======
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
>>>>>>> acf7c40 (First commit)
