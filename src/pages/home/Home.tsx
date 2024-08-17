// src/pages/home/Home.tsx
import React from "react";
import mainBg from "./images/main_bg.jpg";
import Cube from "../../Components/Cube";
const Home: React.FC = () => {
	return (
		<>
			<div className="home-container">
				<img src={mainBg} alt="Main Background" className="background-image">
					<Cube />
				</img>
			</div>
		</>
	);
};

export default Home;
