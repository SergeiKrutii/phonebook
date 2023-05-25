import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { StyledAuthNav } from "./StyledAuthNav";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { useSelector } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";

const navLinkOptions = {
  style: { textDecoration: "none" },
  underline: "hover",
  sx: {
    display: "flex",
    alignItems: "center",
  },
};

const AuthNav = () => {
  const globalTheme = useSelector(getCurrentTheme);
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledAuthNav to="/" {...navLinkOptions} theme={globalTheme}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </StyledAuthNav>
        <StyledAuthNav to="signin" {...navLinkOptions} theme={globalTheme}>
          <LoginIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Sign in
        </StyledAuthNav>
        <StyledAuthNav to="signup" {...navLinkOptions} theme={globalTheme}>
          <AppRegistrationOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Sign up
        </StyledAuthNav>
      </Breadcrumbs>
    </>
  );
};

export default AuthNav;
