import { useState , useReducer } from "react";

import{
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

{/*const initialState = {*/}
    {/*email: "",*/}
    {/*password: "",*/}
    {/*emailError: "",*/}
    {/*passworderror: "",*/}
    {/*submit: true,*/}
{/*}*/}

{/*const loginConstants = {*/}
    {/*setEmail: "SET_EMAIL",*/}
    {/*setPassword: "SET_PASSWORD",*/}
    {/*setEmailError: "SET_EMAIL_ERROR",   */}
    {/*setPasswordError: "SET_PASSWORD_ERROR",*/}
    {/*setSubmit: "SET_SUBMIT"*/}
{/*}*/}

{/*const reducer = (state , action) => {*/}
    {/*const {type , payload} = action*/}

    {/*switch(type){*/}
        {/*case loginConstants.setEmail:{*/}
            {/*return{*/}
                {/*...state,*/}
                {/*email: payload*/}
            {/*}*/}
        {/*}*/}

        {/*case loginConstants.setPassword:{*/}
            {/*return{*/}
                {/*...state,*/}
                {/*password: payload*/}
            {/*}*/}
        {/*}*/}

        {/*case loginConstants.setEmailError:{*/}
            {/*return{*/}
                {/*...state,*/}
                {/*emailError: payload*/}
            {/*}*/}
        {/*}*/}

        {/*case loginConstants.setPasswordError:{*/}
            {/*return{*/}
                {/*...state,*/}
                {/*passwordError: payload*/}
            {/*}*/}
        {/*}*/}

        {/*case loginConstants.setSubmit:{*/}
            {/*return{*/}
                {/*...state,*/}
                {/*submit: payload*/}
            {/*}*/}
        {/*}*/}

        {/*default: {*/}
            {/*return state*/}
        {/*}*/}
    {/*}*/}
{/*}*/}

const LogIn = (props) => {
    const {onShow} = props
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    //const {email , password , emailError , passwordError , submit} = state;


    //const [state , dispatch] = useReducer(reducer , initialState)

    const onnSubmit = (event)=>{
        event.preventDefault();
        const els = event.target.elements;
        const email = els.email.value;
        const password = els.password.value;

        const req ={ 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"email": email , "password": password})
        };

        const resp = fetch("https://reqres.in/api/login" , req)
                        .then(res => {
                            if(res.status===200)
                                onShow();
                            else
                                alert("Invalid Credentials");
                        });
                        
  
        //console.log(email , password);
        //console.log(resp);
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

    return(
        <Card> 
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
        </Card>
    )
}

export default LogIn
