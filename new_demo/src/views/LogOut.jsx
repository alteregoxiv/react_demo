import { useDispatch } from "react-redux";
import {
  loginInitiate,
  loginSuccess,
  loginFailure,
} from "../redux/login/action";
import {
  blogsInitiate,
  blogsSuccess,
  blogsFailure,
} from "../redux/blogs/action";
import { useSelector } from "react-redux";
import Navin from "../components/Navin";

const LogOut = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const blogs = useSelector((state) => state.blogs);

  localStorage.setItem("response", "");
  dispatch(loginInitiate());
  dispatch(blogsInitiate());

  return <Navin />;
};

export default LogOut;
