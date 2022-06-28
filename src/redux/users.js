import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: ''
}

const users = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
    }
  }
});

export const {setActiveUser} = users.actions

export const selectFirstName = state => state.user.firstName
export const selectLastName = state => state.user.lastName

export default users.reducer