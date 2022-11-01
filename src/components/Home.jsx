import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
	return (
		<div className="home-container">
			<h1>Welcome to our Memorial website!</h1>
            <p>
                Welcome to Algiers's Martyr's Memorial Map location.
            </p>
            <Link to="/contact">Click here</Link> to find out where it is located.
		</div>
	);
};

export default Home;
