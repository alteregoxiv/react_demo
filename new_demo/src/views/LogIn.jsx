import{
    Container,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    Button
} from "reactstrap"

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginInitiate , loginSuccess , loginFailure } from "../redux/login/action";
import { blogsInitiate , blogsSuccess , blogsFailure  } from "../redux/blogs/action";
import { useSelector } from "react-redux";

const LogIn = () => {
    const dispatch = useDispatch()
    const login = useSelector((state) => state.login);
    const blogs = useSelector((state) => state.blogs)

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const onnSubmit = (event)=>{
        event.preventDefault();
        const els = event.target.elements;
        const email = els.email.value;
        const password = els.password.value;
        
        dispatch(loginInitiate()) 

        const req = { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"email": email , "password": password})
        };

        const resp = fetch("https://reqres.in/api/login" , req)
                        .then(res => {
                            if(res.status===200){
                                dispatch(loginSuccess(res.status))
                                dispatch(blogsInitiate())
                                const reque = {
                                  method: 'GET',
                                  headers: { 'Content-Type': 'application/json' }
                                }
                                
                                const respo = fetch("https://jsonplaceholder.typicode.com/posts" , reque)
                                .then(respi => respi.json())
                                .then(respi => {
                                  if(respi.status===200)
                                    dispatch(blogsSuccess(respi))
                                  else
                                    dispatch(blogsFailure("No Blogs Found"))
                                })
                            }
                            else{
                                dispatch(loginFailure("Invalid Credentials"));
                                console.log(login)
                                alert(login.error)
                              }
                        });
    }

    const clearEmail = () => {
        setEmail("");
    }

    const clearPassowrd = () => {
        setPassword("");
    }

    const resetAll = () => {
        setEmail("");
        setPassword("");
    }

  const logOut = () => {
    dispatch(loginInitiate())
    dispatch(blogsInitiate())
  }

    return(
      <Container>
        {login.response!==200 ?
        (
          <Card style={{margin: "30vh", width: "50vw"}}> 
            <CardBody>
                <CardTitle tag="h1">LogIn</CardTitle>
                <Form inline onSubmit={onnSubmit}> 
                    <FormGroup> 
                        <InputGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button color="danger" onClick={clearEmail}><span aria-hidden>&times;</span></Button>
                        </InputGroup>
                    </FormGroup>                      
                    {' '}
                    <FormGroup> 
                        <InputGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />    
                            <Button color="danger" onClick={clearPassowrd}><span aria-hidden>&times;</span></Button>
                        </InputGroup>
                    </FormGroup>
                    {' '}
                    <Button color="primary" type="submit">Submit</Button>   <Button color="primary" type="reset" onClick={resetAll}>Reset</Button>
                </Form>
            </CardBody>
          {console.log(login)}
        </Card>) : 
        (
          <>
            <h1>WELCOME</h1>
            <Button color="primary" type="reset" onClick={logOut}>Reset</Button>
            {console.log(login)}
          </>
        )}
      </Container>
    )
}

export default LogIn
