import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { userDataInitiate , userDataSuccess , userDataFailure } from "../redux/users/action";
import Alldetails from "./alldetails";
import Moredetails from "./moredetails";

const { useState , useEffect } = require("react")

const Details = () => {
  const [users , setUsers] = useState([])
  const dispatch = useDispatch()

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
      console.log(users)
    })
    .catch(error => dispatch(userDataFailure(error)))
  }

  useEffect(() => {
    fetchuser()
  } , [])


  return(
    <Container>
    {users.map((i) => {
        return (
          <Alldetails 
            user={i}
          />
        )
      })}
    </Container>
  )
}

export default Details
