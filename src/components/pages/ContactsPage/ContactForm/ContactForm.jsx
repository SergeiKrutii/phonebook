import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "components/redux/contacts/contactsSelectors";
import contactsOperation from "components/redux/contacts/contactsOperations";

import Form from "components/form/FormEdit";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

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
  };

  const reset = (e) => {
    setName("");
    setNumber("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: name,
      number: number,
    };

    const isEqualName = contacts.some((contact) => contact.name.includes(name));

    if (isEqualName) {
      toast.error("User with this name already exist!!");
      return;
    }

    dispatch(contactsOperation.addContact(newContact));
    reset();
  };

  const isEmptyInput = number.trim() === "" || name.trim() === "";

  return (
    <>
      <ToastContainer autoClose={1500} />
      <Form
        name={name}
        number={number}
        onInputChange={onInputChange}
        isEmptyInput={isEmptyInput}
        onSubmit={onSubmit}
        btnText={"Add contact"}
        btnAction={"add"}
      />
    </>
  );
};

export default ContactForm;
