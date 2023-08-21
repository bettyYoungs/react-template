import { LOGIN_SLICE, setLogin } from "../store/login.slice"
import { useAppDispatch, useAppSelector } from "../store/type"


function Login() {
  const username = useAppSelector((state) => state[LOGIN_SLICE].username)
  const dispatch = useAppDispatch()
  return (
    <div>
      {username }
      <button onClick={()=> dispatch(setLogin('111'))}></button>
    </div>
  )
}

export default Login