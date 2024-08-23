import React from "react";
import "./expertise.css";
import { FaLaptopCode } from "react-icons/fa"; // FontAwesome
import { FiDatabase } from "react-icons/fi"; // Feather Icons
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { LuBrainCircuit } from "react-icons/lu";
import NeuralNetwork from "../../Components/NeuralNetwork";

const Expertise: React.FC = () => {
	return (
		<div className="container" id="expertise">
			<h1 className="title">My Expertise</h1>
			<div className="expertise-section">
				<div className="expertise-card">
					<div className="icon">
						<FaLaptopCode style={{ fontSize: 50 }} />
					</div>
					<h2 className="card-title">
						Software <span>Engineering</span>
					</h2>
					<div className="card-text">
						<p>
							Proficient in software engineering principles, best practices, and
							methodologies.
						</p>
						<p>
							Skilled in{" "}
							<span className="highlight highlight-pulse">Python</span>,{" "}
							<span className="highlight highlight-pulse">Java</span>,{" "}
							<span className="highlight highlight-pulse">JavaScript</span>,{" "}
							<span className="highlight highlight-pulse">TypeScript</span>,{" "}
							<span className="highlight highlight-pulse">C</span>, and{" "}
							<span className="highlight highlight-pulse">C#</span>.
						</p>
					</div>
				</div>

				<div className="expertise-card">
					<div className="icon">
						<FiDatabase style={{ fontSize: 50 }} />
					</div>
					<h2 className="card-title">
						Full Stack
						<span> Development</span>
					</h2>
					<div className="card-text">
						<p>
							Experienced in developing robust and scalable applications using
							<span className="highlight highlight-pulse"> React</span>,{" "}
							<span className="highlight highlight-pulse">Spring Boot</span>,{" "}
							<span className="highlight highlight-pulse">Node.js</span>,{" "}
							<span className="highlight highlight-pulse">Django</span>, and{" "}
							<span className="highlight highlight-pulse">Express</span>.
						</p>
						<p>
							Proficient in both{" "}
							<span className="highlight highlight-pulse">SQL</span> (
							<span className="highlight highlight-pulse">PostgreSQL</span>,{" "}
							<span className="highlight highlight-pulse">MySQL</span>) and{" "}
							<span className="highlight highlight-pulse">NoSQL</span> (
							<span className="highlight highlight-pulse">MongoDB</span>,{" "}
							<span className="highlight highlight-pulse">Firebase</span>)
							databases.
						</p>
					</div>
				</div>

				<div className="expertise-card">
					<div className="icon">
						<SportsEsportsOutlinedIcon style={{ fontSize: 50 }} />
					</div>
					<h2 className="card-title">
						<span>Game </span>Development
					</h2>
					<div className="card-text">
						<p>
							Skilled in developing interactive and immersive experiences using
							<span className="highlight highlight-pulse"> Unity</span> and{" "}
							<span className="highlight highlight-pulse">C#</span>.
						</p>
						<p>
							Proficient in creating{" "}
							<span className="highlight highlight-pulse">2D</span>,{" "}
							<span className="highlight highlight-pulse">3D</span>, and{" "}
							<span className="highlight highlight-pulse">AR</span> games, from
							concept to deployment.
						</p>
					</div>
				</div>

				<div className="expertise-card">
					<div className="icon">
						<LuBrainCircuit style={{ fontSize: 50 }} />
					</div>
					<h2 className="card-title">
						<span>Machine Learning </span>&<span> AI</span>
					</h2>
					<div className="card-text">
						<p>
							Experienced in developing and deploying machine learning models
							using <span className="highlight highlight-pulse">Python</span>{" "}
							and frameworks like{" "}
							<span className="highlight highlight-pulse">Scikit-learn</span>.
						</p>
						<p>
							Familiar with{" "}
							<span className="highlight highlight-pulse">supervised</span> and{" "}
							<span className="highlight highlight-pulse">unsupervised</span>{" "}
							learning techniques.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Expertise;
