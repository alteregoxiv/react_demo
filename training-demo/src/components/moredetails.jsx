import { useSelector } from "react-redux";

const Moredetails = () => {
  const user = useSelector((state) => state.user);
  return <div>{user.userData.length > 0 && JSON.stringify(user.userData)}</div>;
};

export default Moredetails;
