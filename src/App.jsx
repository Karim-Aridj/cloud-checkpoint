import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="content">
				<div className="content-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
