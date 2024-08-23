import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "@fontsource/roboto";

const StyledAppBar = styled(AppBar)({
	position: "relative",
	backgroundColor: "rgba(0, 0, 0, 0.3)",
	backdropFilter: "blur(10px)",
	boxShadow: "none",
	overflow: "hidden",
});

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "center", // Center the contents horizontally
});

const MenuContainer = styled("div")({
	display: "flex",
	justifyContent: "center", // Center the menu items horizontally
	width: "100%", // Ensure the container takes up full width
});

const MenuButton = styled(Button)(({ isHovered }: { isHovered: boolean }) => ({
	fontFamily: "Roboto, sans-serif",
	color: "#fff", // Default color is white
	textTransform: "none",
	fontSize: "1.1rem",
	opacity: isHovered ? 1 : 0.5, // If hovered, full opacity; otherwise, less visible
	transition: "opacity 0.3s ease",
	"&:hover": {
		color: "#fff", // Ensure hovered button stays white
		opacity: 1, // Ensure hovered button is fully opaque
	},
}));

const NavBar: React.FC = () => {
	const [hoveredButton, setHoveredButton] = useState<string | null>(null);

	return (
		<StyledAppBar>
			<StyledToolbar>
				<MenuContainer>
					{[
						{ text: "#home", href: "#home" },
						{ text: "#expertise", href: "#expertise" },
						{ text: "#work", href: "#work" },
						// Add more sections as needed
					].map((item) => (
						<MenuButton
							key={item.text}
							href={item.href}
							onMouseEnter={() => setHoveredButton(item.href)}
							onMouseLeave={() => setHoveredButton(null)}
							isHovered={hoveredButton === item.href}
						>
							{item.text}
						</MenuButton>
					))}
				</MenuContainer>
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default NavBar;
