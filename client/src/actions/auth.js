import { userLogin } from "../api/helpers";
import { loginUser } from "../reducer/auth";

export const LoginUser = (user, navigate) => async (dispatch) => {
  try {
    const { data } = await userLogin(user)
    dispatch(loginUser(data))
    navigate('/posts')
  } catch (error) {
    console.log(error);
  }
}