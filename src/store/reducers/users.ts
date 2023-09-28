import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { token?: string | undefined; user?: object | undefined } =
  {
    token: undefined,
    user: undefined,
  };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.token = payload;
    },
    updateUser: (state, action: PayloadAction<object>) => {
      const { payload } = action;
      state.user = payload;
    },
    // logout: (state) => {
    //   state = initialState
    //   clearStorage()
    //   window.location.href = routes.login.url
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  //   logout,
  updateUser,
  setToken,
} = userSlice.actions;

export default userSlice.reducer;
