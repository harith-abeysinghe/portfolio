// src/components/Cube.tsx
import React from "react";
import "../css/Cube.css"; // Make sure to create this CSS file

const Cube: React.FC = () => {
	return (
		<div className="scene">
			<div className="cube">
				<div className="cube-face cube-face-front">Front</div>
				<div className="cube-face cube-face-back">Back</div>
				<div className="cube-face cube-face-left">Left</div>
				<div className="cube-face cube-face-right">Right</div>
				<div className="cube-face cube-face-top">Top</div>
				<div className="cube-face cube-face-bottom">Bottom</div>
			</div>
		</div>
	);
};

export default Cube;
