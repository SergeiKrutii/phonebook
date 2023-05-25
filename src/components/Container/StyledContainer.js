import styled from "styled-components";

export const StyledContainer = styled.div(({ theme }) => ({
  backgroundColor: theme === "light" ? "#eeedf1" : "rgba(0, 0, 0, 0.77)",
  color: theme === "light" ? "#020202" : "#ffffff",
  width: "450px",
  borderRadius: "15px",
  minHeight: "700px",
  padding: "15px 15px",
  position: "relative",

  "& p.creator": {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: "15px",
    left: "180px",
  },
}));
