import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserData } from '../interfaces/UserInterface'

interface State {
  isAuthenticated: boolean
  userData: UserData | null
}

const initialState: State = {
  isAuthenticated: false,
  userData: {
    id: 1,
    password: '12345678',
  },
}

const reducerSlice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    clearReducer: (state) => {
      state.isAuthenticated = false
      state.userData = null
    },
  },
})

export const { setAuthentication, clearReducer } = reducerSlice.actions

export const store = configureStore({
  reducer: reducerSlice.reducer,
})

export type RootState = ReturnType<typeof store.getState>
