import styled from "styled-components";

export const StyledAuthUser = styled.div({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "center",

  "& .btngrad": {
    backgroundImage:
      "linear-gradient(to right, #fc00ff 0%, #00dbde  51%, #fc00ff  100%)",
    margin: "0px",
    padding: "5px 5px",
    textAlign: "center",
    transition: "0.5s",
    backgroundSize: "200%, auto",
    color: "white",
    boxShadow: "0 0 20px #eee",
    borderRadius: "5px",
    display: "block",
    borderColor: "transparent",
    cursor: "pointer",
    marginTop: "5px",
  },

  "& .btngrad:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: " none",
  },
});
