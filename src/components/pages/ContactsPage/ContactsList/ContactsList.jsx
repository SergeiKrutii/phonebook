import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "components/redux/contacts/contactsSelectors";
import contactsOperation from "components/redux/contacts/contactsOperations";
import Filter from "components/Filter/Filter";
import TransitionsModal from "components/Modal/Modal";
import { getCurrentTheme } from "components/redux/theme/themeSelectors";
import { TableVirtuoso } from "react-virtuoso";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const buttonAPI = {
  color: "primary",
  sx: {
    padding: "0px",
  },
};

const tabletOption = {
  height: "330px",
  width: "440px",
  borderColor: "transparent",
  marginLeft: "7px",
};

const ContactsList = () => {
  const [filter, setFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editContact, setEditContact] = useState("");
  const globalTheme = useSelector(getCurrentTheme);

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  const onEditContact = (contact) => {
    setOpenModal((prevState) => !prevState);
    setEditContact(contact);
  };

  const toogleModal = () => setOpenModal((prevState) => !prevState);

  const getFilteredContacts = (items, filter) => {
    if (filter === "") {
      return items;
    }

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts(contacts, normalizedFilter);

  return (
    <>
      <TransitionsModal
        openModal={openModal}
        toogleModal={toogleModal}
        editContact={editContact}
      />

      <Filter contacts={contacts} setFilter={setFilter} />
      <TableVirtuoso
        style={{ ...tabletOption }}
        data={filteredContacts}
        followOutput={"smooth"}
        fixedHeaderContent={() => (
          <tr
            style={{
              background: globalTheme === "light" ? "#eeedf1" : "#2c1e3c",
              height: "auto",
            }}
          >
            <th style={{ width: "171px", padding: "0px" }}>Contact name</th>
            <th style={{ width: "110px", padding: "0px" }}>Contact number</th>
            <th style={{ width: "81px", padding: "0px" }}>Action</th>
          </tr>
        )}
        itemContent={(_, contact) => (
          <>
            <td style={{ width: "160px", wordWrap: "break-word" }}>
              {contact.name}
            </td>
            <td style={{ width: "160px", wordWrap: "break-word" }}>
              {contact.number}
            </td>
            <td style={{ wordWrap: "break-word", paddingLeft: "15px" }}>
              <Stack direction="row" spacing={0}>
                <IconButton
                  aria-label="delete"
                  onClick={() =>
                    dispatch(contactsOperation.deleteContacts(contact.id))
                  }
                  {...buttonAPI}
                >
                  <DeleteIcon />
                </IconButton>
                /
                <IconButton
                  aria-label="edit"
                  onClick={() => onEditContact(contact)}
                  {...buttonAPI}
                >
                  <EditIcon />
                </IconButton>
              </Stack>
            </td>
          </>
        )}
      />
    </>
  );
};

export default ContactsList;
