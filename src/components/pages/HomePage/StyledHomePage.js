import styled from "styled-components";

export const StyledHomePage = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  "& img": {
    objectFit: "contain",
    backgroundPosition: "center",
    width: "150px",
    aspectRatio: 1 / 2,
    mixBlendMode: theme === "light" ? "color-burn" : "hard-light",
  },

  "& p.greetings": {
    textAlign: "center",
  },
}));
export const StytledImageContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "350px",
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: "bold",
  fontSize: "40px",
});
