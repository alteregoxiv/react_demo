import { useDispatch } from "react-redux";
import { userDataInitiate , userDataSuccess , userDataFailure } from "../redux/users/action";
import Alldetails from "./alldetails";
import { useSelector } from "react-redux";

const { useState , useEffect } = require("react")

const Details = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);

  const fetchuser = () => {
    const reque ={ 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
    dispatch(userDataInitiate()) ;
    fetch("https://jsonplaceholder.typicode.com/users" , reque)
    .then(res => res.json())
    .then((res) => {
      console.log(res)
      dispatch(userDataSuccess(res))
      console.log(user)
    })
    .catch(error => dispatch(userDataFailure(error)))
  }

  useEffect(() => {
    fetchuser()
  } , [])


  return(
    <>
    {user.userData.map((i) => {
        return (
          <Alldetails 
            user={i}
          />
        )
      })}
    
    </>
  )
}

export default Details
