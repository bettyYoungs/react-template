import { createSlice} from '@reduxjs/toolkit'
interface UserProps {
  username: '',
  password: ''
}

const initialState: UserProps = {
  username: '',
  password: ''
}

export const USER_SLICE = 'user'
export const userSlice =  createSlice({
  name: USER_SLICE,
  initialState,
  reducers: {
    setUser(state, action){
      state.username = action.payload
    }
  }
})

export default userSlice.reducer
export const { setUser } = userSlice.actions
