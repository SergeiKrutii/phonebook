import styled from "styled-components";

export const StyledHeader = styled.header(({ isLoggedin }) => ({
  height: "auto",
  paddingBottom: isLoggedin ? "0px" : "30px",
  display: "flex",
  justifyContent: isLoggedin ? "space-between" : "center",

  alignItems: isLoggedin ? "center" : "",
}));
