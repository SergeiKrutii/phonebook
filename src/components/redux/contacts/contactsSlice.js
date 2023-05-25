import { createSlice } from "@reduxjs/toolkit";
import contactsOperation from "./contactsOperations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(contactsOperation.fetchContacts.fulfilled, (_, { payload }) => {
        return payload;
      })
      .addCase(contactsOperation.addContact.fulfilled, (state, { payload }) => {
        state.push(payload);
      })
      .addCase(
        contactsOperation.updateContact.fulfilled,
        (state, { payload }) => {
          const idx = state.findIndex((contact) => contact.id === payload.id);
          state[idx] = payload;
        }
      )
      .addCase(
        contactsOperation.deleteContacts.fulfilled,
        (state, { payload }) => {
          return state.filter((contact) => contact.id !== payload);
        }
      );
  },
});

export default contactsSlice.reducer;
