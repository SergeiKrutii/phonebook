import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { useSelector } from "react-redux";

const boxOptions = {
  display: "flex",
  alignItems: "flex-end",
  marginBottom: "20px",
};

const Filter = ({ filter, setFilter }) => {
  const globalTheme = useSelector(getCurrentTheme);

  const textInputOptions = {
    variant: "standard",
    inputProps: {
      maxLength: "25",
      minLength: "3",
      style: { color: globalTheme === "light" ? "#020202" : "#ffffff" },
    },
    sx: {
      mr: 1,
      my: 0.5,
    },
  };
  return (
    <Box sx={{ ...boxOptions }}>
      <PersonSearchIcon sx={textInputOptions.sx} />
      <TextField
        name="name"
        value={filter}
        label="Find contact"
        {...textInputOptions}
        onChange={(e) => setFilter(e.target.value)}
      />
    </Box>
  );
};

export default Filter;
