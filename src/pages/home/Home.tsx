// src/pages/home/Home.tsx
import React from "react";
import mainBg from "./images/main_bg.jpg";
import Cube from "../../Components/Cube";
import NavBar from "../../Components/NavBar";
import "./home.css";
const Home: React.FC = () => {
	return (
		<>
			<div className="home-container">
				<div className="home-nav">
					<NavBar />
				</div>
				<img
					src={mainBg}
					alt="Main Background"
					className="background-image"
				></img>
				<div className="text-container">
					<h1>Harith Abeysinghe</h1>
					<p>Software Engineer / Full Stack Developer / Game Developer</p>
				</div>
				<div className="cube-container">
					<Cube />
				</div>
			</div>
		</>
	);
};

export default Home;
