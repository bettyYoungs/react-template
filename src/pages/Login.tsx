import { USER_SLICE, setUser } from "../store/user.slice"
import { useAppDispatch, useAppSelector } from "../store/type"


function Login() {
  const username = useAppSelector((state) => state[USER_SLICE].username)
  const dispatch = useAppDispatch()
  return (
    <div>
      {username }
      <button onClick={()=> dispatch(setUser('111'))}></button>
    </div>
  )
}

export default Login