import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchContacts = createAsyncThunk(
  "contacts/get",

  async (_, { rejectValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      rejectValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/add",
  async (newContact, { rejectValue }) => {
    try {
      const { data } = await axios.post("/contacts", newContact);

      return data;
    } catch (error) {
      rejectValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk(
  "contacts/delete",
  async (contactId, { rejectValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      rejectValue(error);
    }
  }
);
const updateContact = createAsyncThunk(
  "contacts/update",
  async ({ newCredentials, contactId }, { rejectValue }) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${contactId}`,
        newCredentials
      );
      return data;
    } catch (error) {
      rejectValue(error);
    }
  }
);

const contactsOperation = {
  fetchContacts,
  addContact,
  deleteContacts,
  updateContact,
};

export default contactsOperation;
