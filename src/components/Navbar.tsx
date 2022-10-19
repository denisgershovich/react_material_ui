import React, { FC, ReactElement } from "react";
import {
  Box,
  Link,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flex:1,
        height: "100%",
        backgroundColor: "secondary.dark",
      }}
    >
      <Container maxWidth="xl">
      <Box
    sx={{
      display: "flex",
      flexDirection: "column",
    }}
  >
  <Typography
  variant="h6"
  noWrap
  component="div"
  
>
  React Starter App
</Typography>
    {routes.map((page) => (
      <Link
        key={page.key}
        component={NavLink}
        to={page.path}
        color="black"
        underline="none"
        variant="button"
        sx={{ fontSize: "large", marginLeft: "2rem" }}
      >
        {page.title}
      </Link>
    ))}
  </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
