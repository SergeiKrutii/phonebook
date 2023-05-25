const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    setLightTheme: (state) => "light",
    setDarkTheme: (state) => "dark",
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
