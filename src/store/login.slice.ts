import { createSlice} from '@reduxjs/toolkit'
interface LoginProps {
  username: '',
  password: ''
}

const initialState: LoginProps = {
  username: '',
  password: ''
}

export const LOGIN_SLICE = 'login'
export const userSlice =  createSlice({
  name: LOGIN_SLICE,
  initialState,
  reducers: {
    setLogin(state, action){
      state.username = action.payload
    }
  }
})

export default userSlice.reducer
export const { setLogin } = userSlice.actions
