//create basic navbar
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
	return (
		<nav>
			<ul className="navbar-container">
				<li className="navbar-item">
					<Link className="navbar-link" to="/">
						Home
					</Link>
				</li>
				<li className="navbar-item">
					<Link className="navbar-link" to="/contact">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
