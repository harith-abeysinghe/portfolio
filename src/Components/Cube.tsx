// src/components/Cube.tsx
import React from "react";
import "../css/Cube.css"; // Make sure to create this CSS file

const Cube: React.FC = () => {
	return (
		<div className="scene">
			<div className="cube">
				<div className="cube-face cube-face-front"></div>
				<div className="cube-face cube-face-back"></div>
				<div className="cube-face cube-face-left"></div>
				<div className="cube-face cube-face-right"></div>
				<div className="cube-face cube-face-top"></div>
				<div className="cube-face cube-face-bottom"></div>
			</div>
		</div>
	);
};

export default Cube;
