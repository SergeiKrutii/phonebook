import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const signUp = createAsyncThunk("auth/signup", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const signIn = createAsyncThunk("auth/signin", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const getCurrentUser = createAsyncThunk(
  "auth/recovery",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const recoveryToken = auth.token;

    if (recoveryToken === null) {
      return rejectWithValue();
    }

    token.set(recoveryToken);

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const authOperations = {
  signUp,
  signIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
