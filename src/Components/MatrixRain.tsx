import React, { useEffect, useRef } from "react";
import "../css/matrixRain.css";

const MatrixRain: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const matrixChars = "HARITHABEYSINGHE";
		const fontSize = 16;
		const columns = canvas.width / fontSize;
		const drops: number[] = Array(Math.floor(columns)).fill(1);

		const draw = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "rgba(0, 255, 0, 0.88)";
			ctx.font = `${fontSize}px monospace`;

			for (let i = 0; i < drops.length; i++) {
				const text =
					matrixChars[Math.floor(Math.random() * matrixChars.length)];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
					drops[i] = 0;
				}

				drops[i]++;
			}
		};

		const interval = setInterval(draw, 50);

		return () => clearInterval(interval);
	}, []);

	return <canvas ref={canvasRef}></canvas>;
};

export default MatrixRain;
