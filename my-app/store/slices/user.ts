import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  user: null;
  userLoading: false;
}

const initialState: UserState = {
  user: null,
  userLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

    },
    setUserLoading: (state, action) => {
      state.userLoading = action.payload;
    },
  },
})

export const { actions: { setUser, setUserLoading }, reducer: userReducer } = userSlice
