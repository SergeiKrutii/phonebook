import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledUserNav = styled(NavLink)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "18px",
  textDecoration: "none",
  color: theme === "light" ? "#fc00ff" : "#6dd5fa",
  background:
    theme === "light"
      ? "linear-gradient(to right, #fc00ff 0%, #00dbde 51%, #fc00ff 100%)"
      : "linear-gradient(to right, #2980b9 , #6dd5fa 20%, #ffffff 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

  " &.active": {
    backgroundClip: "text",
    color: theme === "light" ? "red" : "#ffffff",
    background: theme === "light" ? "red" : "#ffffff",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  "&:hover": {
    color: theme === "light" ? "red" : "#ffffff",
    background: theme === "light" ? "red" : "#ffffff",
    // "#ffffff",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
}));
