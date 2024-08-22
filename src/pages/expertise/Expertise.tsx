import React from "react";
import "./expertise.css";

const MyExpertise: React.FC = () => {
	return (
		<div className="container">
			<h1 className="title">My Expertise</h1>
			<div className="expertise-section">
				<div className="expertise-card">
					<div className="icon">💻</div>
					<h2 className="card-title">
						Software <span>Engineering</span>
					</h2>
					<h3 className="card-text">
						Expertise in software engineering principles, best practices, and
						methodologies.
					</h3>
				</div>

				<div className="expertise-card">
					<div className="icon">🌐</div>
					<h2 className="card-title">
						Full Stack Dev <span>(Spring Boot, React, Node, Django)</span>
					</h2>
					<h3 className="card-text">
						Proficient in building scalable and robust applications using a wide
						range of frameworks and tools.
					</h3>
				</div>

				<div className="expertise-card">
					<div className="icon">🎮</div>
					<h2 className="card-title">
						Game Dev <span>Unity, C#</span>
					</h2>
					<h3 className="card-text">
						Skilled in game development, creating interactive and immersive
						experiences using Unity and C#.
					</h3>
				</div>

				<div className="expertise-card">
					<div className="icon">🤖</div>
					<h2 className="card-title">
						Machine <span>Learning</span>
					</h2>
					<h3 className="card-text">
						Experienced in developing and deploying machine learning models,
						with expertise in Python and popular ML frameworks.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default MyExpertise;
