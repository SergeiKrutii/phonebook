import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/material";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { useSelector } from "react-redux";

const boxOptions = {
  display: "flex",
  alignItems: "flex-end",
};

const Form = ({
  name,
  number,
  onInputChange,
  onSubmit,
  isEmptyInput,
  btnText = "",
  btnAction = "",
  equalValue,
  children,
}) => {
  const globalTheme = useSelector(getCurrentTheme);

  const textInputOptions = {
    id: "input-with-sx",
    variant: "standard",
    inputProps: {
      maxLength: "18",
      minLength: "3",
      style: { color: globalTheme === "light" ? "#020202" : "#ffffff" },
    },
  };
  const buttonOptions = {
    variant: "contained",
    sx: {
      marginRight: "5px",
      "&.Mui-disabled": {
        backgroundColor: globalTheme === "light" ? "" : "#cccccc",
        color: globalTheme === "light" ? "" : "#ffffff",
      },
    },
    size: "small",
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          display: "flex",
          alignItems: "center",
          color: "white",
        },
      }}
    >
      <FormControl variant="standard">
        <Box sx={{ ...boxOptions }}>
          <AccountCircle sx={{ color: globalTheme, mr: 1, my: 0.5 }} />
          <TextField
            name="name"
            value={name}
            type="text"
            label="Contact name"
            {...textInputOptions}
            onChange={onInputChange}
          />
        </Box>
        <Box sx={{ ...boxOptions }}>
          <PhoneAndroidTwoToneIcon
            sx={{ color: globalTheme, mr: 1, my: 0.5 }}
          />
          <TextField
            name="number"
            type="tel"
            value={number}
            label="Contact number"
            {...textInputOptions}
            onChange={onInputChange}
          />
        </Box>
        <Stack direction="row" spacing={0}>
          <Box sx={{ width: "141", marginTop: "15px", marginBottom: "15px" }}>
            <Button
              disabled={!!isEmptyInput || equalValue}
              {...buttonOptions}
              endIcon={
                btnAction === "add" ? <PersonAddAlt1Icon /> : <CheckIcon />
              }
              onClick={onSubmit}
            >
              {btnText === "" ? "Add contact" : `${btnText}`}
            </Button>
            {children}
          </Box>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Form;
