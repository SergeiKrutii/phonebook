import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    setLightTheme: (state) => ({ value: "light" }),
    setDarkTheme: (state) => ({ value: "dark" }),
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
