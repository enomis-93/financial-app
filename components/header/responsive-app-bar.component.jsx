import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Image } from "react-native-web";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "flex" },
							fontFamily: { xs: "monospace", md: "monospace" },
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							fontSize: { xs: 13, md: 20 },
						}}
					>
						<Image
							style={{
								height: 20,
								width: 20,
								zIndex: 3,
								display: { xs: "flex", md: "flex" },
								marginRight: 5,
							}}
							source={require("../../assets/img/piggy-bank.png")}
						/>
						strongest world finance
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
