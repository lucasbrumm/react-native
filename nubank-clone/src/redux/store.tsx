import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Authenticated {
  isAuthenticated: boolean
}

const initialState: Authenticated = {
  isAuthenticated: false,
}

const reducerSlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
  },
})

export const { setAuthentication } = reducerSlice.actions

export const store = configureStore({
  reducer: reducerSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
