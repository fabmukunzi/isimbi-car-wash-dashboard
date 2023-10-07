import { UserSchema } from '@/src/utils/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { token?: string | undefined; user?: UserSchema | undefined } =
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
    updateUser: (state, action: PayloadAction<UserSchema|undefined>) => {
      const { payload } = action;
      state.user = payload;
    },
    logout: (state) => {
      state.token = undefined
      state.user = undefined
      localStorage.removeItem('car_wash_token');
      window.location.href = '/';
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, updateUser, setToken } = userSlice.actions;

export default userSlice.reducer;
