import React from "react";
import Map from "./Map";

const location = {
	address: "Chemin Omar Kechkar, El Madania",
	lat:  36.745848007899866,
	lng: 3.069820413292181, 
};

const Contact = () => {
	return (
		<div className="contact-container">
			<h1>Contact Us</h1>
			<p>
				<b>E-mail:</b>
				<a href="mailto:helloworld@gmail.com"> company@gmail.com</a>
				<br />
				<b>Phone:</b>
				<a href="tel:000-000-0000"> 000-000-0000</a>
				<br />
				<b>Address: </b>
				{location.address}
			</p>
			<Map location={location} zoomLevel={17} />
		</div>
	);
};

export default Contact;
