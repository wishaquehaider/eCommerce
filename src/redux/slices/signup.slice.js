import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSignupData = createAsyncThunk(
  "signup/getSignupData",
  async (data, thunkAPI) => {
    try {
      console.log("dstdddddddddd", data);
      const response = await fetch(
        "https://ammadai.pythonanywhere.com/api/ai",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        }
      )
        .then((response) => response.json())
        .then((response) => {
          try {
            console.log(response?.data);
          } catch (e) {
            console.log("ERROR", e);
            return "";
          }
        });

      if (response) {
        console.log("response send in callback", response);
        return response;
      }

      return thunkAPI.rejectWithValue({
        message: "Request Failed",
      });
    } catch (error) {
      console.log("errr", error);

      return thunkAPI.rejectWithValue({
        message: error.message,
      });
    }
  }
);

const initialState = {
  datasignup: null,
  status: "blocked",
  loading: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.datasignup = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSignupData.fulfilled, (state, action) => {
      state.datasignup = action.payload;
      state.loading = false;
      console.log("data check payload bengoo", action.payload);
    });
    builder.addCase(getSignupData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSignupData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addDetails } = signupSlice.actions;
export default signupSlice.reducer;
