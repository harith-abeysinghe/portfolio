import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import "@fontsource/roboto"; // Example: Importing Roboto font

const StyledAppBar = styled(AppBar)({
	backgroundColor: "#1a1c2c",
	boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
	padding: "0 30px",
});

const LogoTypography = styled(Typography)({
	fontFamily: "Roboto, sans-serif", // Use your selected font
	color: "#6be0f1",
	textTransform: "capitalize", // To capitalize first letters
});

const MenuContainer = styled("div")({
	display: "flex",
	gap: "20px",
});

const MenuButton = styled(Button)({
	fontFamily: "Roboto, sans-serif", // Apply the font to buttons
	color: "#fff",
	textTransform: "none", // Ensure text remains in its original case
	"&:hover": {
		color: "#d18ce6",
	},
});

const NavBar: React.FC = () => {
	return (
		<StyledAppBar position="static">
			<StyledToolbar>
				<LogoTypography variant="h6">Harith A.</LogoTypography>
				<MenuContainer>
					<MenuButton>#home</MenuButton>
					<MenuButton>#expertise</MenuButton>
					<MenuButton>#work</MenuButton>
					<MenuButton>#experience</MenuButton>
					<MenuButton>#contact</MenuButton>
				</MenuContainer>
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default NavBar;
