import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Container,
	Typography,
	Button,
	Menu,
	MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../assets/logo_2.svg";

const pages = ["Login", "Cadastre-se"];

const HeaderHome = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position="static"
			sx={{ bgcolor: "transparent", boxShadow: "none" }}
		>
			<Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
				<Toolbar disableGutters>
					<Box>
						<img src={logo} alt="logo" width={200} />
					</Box>

					<Box
						sx={{
							marginLeft: "auto",
							display: { xs: "none", md: "flex" },
						}}
					>
						<Button variant="outlined">Login</Button>
						<Button
							variant="contained"
							sx={{ marginLeft: "16px", bgcolor: "#ffa726" }}
						>
							Cadastre-se
						</Button>
					</Box>

					{/* BURGER MENU */}
					<Box
						sx={{
							marginLeft: "auto",
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default HeaderHome;
