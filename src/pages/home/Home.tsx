import React from "react";
import Cube from "../../Components/Cube";
import NavBar from "../../Components/NavBar";
import MatrixRain from "../../Components/MatrixRain";
import "./home.css";

const Home: React.FC = () => {
	return (
		<>
			<div className="home-container" id="home">
				{/* Matrix Rain Background */}
				<MatrixRain />

				{/* Navbar */}
				<div className="home-nav">
					<NavBar />
				</div>

				{/* Text Content */}
				<div className="text-container">
					<h1>Harith Abeysinghe</h1>
					<p>Software Engineer / Full Stack Developer / Game Developer</p>
				</div>

				{/* Cube */}
				<div className="cube-container">
					<Cube />
				</div>
			</div>
		</>
	);
};

export default Home;
