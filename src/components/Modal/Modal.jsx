import { useEffect, useState } from "react";
import contactsOperation from "components/redux/contacts/contactsOperations";
import { useDispatch } from "react-redux";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormEdit from "components/form/FormEdit";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const buttonOptions = {
  variant: "contained",
  endIcon: <CloseIcon />,
  size: "small",
};

const TransitionsModal = ({ openModal, toogleModal, editContact }) => {
  const [name, setName] = useState(editContact.name);
  const [number, setNumber] = useState(editContact.number);
  const dispatch = useDispatch();
  const globalTheme = useSelector(getCurrentTheme);
  const [equalValue, setEqualValue] = useState(true);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: globalTheme === "light" ? "background.paper" : "#514959",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: globalTheme === "light" ? "#000" : "#ffffff",
  };

  useEffect(() => {
    setName(editContact.name || "");
    setNumber(editContact.number || "");
  }, [editContact.name, editContact.number]);

  const closeModal = (e) => {
    toogleModal();
    setEqualValue(true);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }

    if (name === "name" && value === editContact.name) {
      setEqualValue(true);
    } else if (name === "number" && value === editContact.number) {
      setEqualValue(true);
    } else {
      setEqualValue(false);
    }
  };

  const onSaveChange = (e) => {
    e.preventDefault();

    const newData = {
      name: `${name}`,
      number: `${number}`,
    };

    dispatch(
      contactsOperation.updateContact({
        newCredentials: newData,
        contactId: editContact.id,
      })
    );
    closeModal();
    setEqualValue(true);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={closeModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography
              style={{ textAlign: "center" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Edit contact
            </Typography>

            <FormEdit
              name={name}
              number={number}
              onInputChange={onInputChange}
              onSubmit={onSaveChange}
              btnText={"Save edit"}
              btnAction={"edit"}
              equalValue={equalValue}
            >
              <Button {...buttonOptions} onClick={closeModal}>
                Close
              </Button>
            </FormEdit>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
