import {useReducer} from "react";

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

import * as yup from "yup";

const signinSchema = yup.object().shape({
    email: yup.string().required(),    
    username: yup.string().required(),
    password: yup.string().required().min(8),
    confirmpwd: yup.string().required().min(8),
    contact: yup.string().min(10)
})

const signinConstants = {
    setEmail: "SET_EMAIL",
    setEmailError: "SET_EMAIL_ERROR",
    setUsername: "SET_USERNAME",
    setUsernameError: "SET_USERNAME_ERROR",
    setPassword: "SET_PASSWORD",
    setPasswordError: "SET_PASSWORD_ERROR",
    setConfirmPassword: "SET_CONFIRM_PASSWORD",
    setConfirmPasswordError: "SET_CONFIRM_PASSWORD_ERROR",
    setContact: "SET_CONTACT",
    setContactError: "SET_CONTACT_ERROR"
}

const initialState = {
    email: "",
    emailError: "",
    username: "",
    usernameError: "",
    password: "",
    passwordError: "",
    confirmpwd: "",
    confirmpwdError: "",
    contact: "",
    contactError: ""
}

const reducer = (state , action) => {
    const {type , payload} = action;
    switch(type){
        case signinConstants.setEmail:{
            return{
                ...state,
                email: payload
            };
        }

        case signinConstants.setEmailError:{
            return{
                ...state,
                emailError: payload
            };
        }

        case signinConstants.setUsername:{
            return{
                ...state,
                username: payload
            };
        }

        case signinConstants.setUsernameError:{
            return{
                ...state,
                usernameError: payload
            };
        }

        case signinConstants.setPassword:{
            return{
                ...state,
                password: payload
            };
        }

        case signinConstants.setPasswordError:{
            return{
                ...state,
                passwordError: payload
            };
        }

        case signinConstants.setConfirmPassword:{
            return{
                ...state,
                confirmpwd: payload
            };
        }

        case signinConstants.setConfirmPasswordError:{
            return{
                ...state,
                confirmpwdError: payload
            };
        }

        case signinConstants.setContact:{
            return{
                ...state,
                contact: payload
            };
        }

        case signinConstants.setContactError:{
            return{
                ...state,
                contactError: payload
            };
        }

        default: return state;

    }
}


const SignIn = () => {
    const [state , dispatch] = useReducer(reducer , initialState);

    const {email , username , password , confirmpwd , contact , emailError , usernameError , passwordError , confirmpwdError , contactError} = state

    const handleEmail = (event) => {
        const {
            target: {value}
        } = event;
        dispatch({type: signinConstants.setEmail , payload: value});
    }

    const handleUsername = (event) => {
        const {
            target: {value}
        }=event;
        dispatch({type: signinConstants.setUsername , payload: value});
    }

    const handlePassword = (event) => {
        const {
            target: {value}
        }=event;
        dispatch({type: signinConstants.setPassword , payload: value});
    }

    const handleConfirmpwd = (event) => {
        const {
            target: {value}
        }=event;
        dispatch({type: signinConstants.setConfirmPassword , payload: value});
    }

    const handleContact = (event) => {
        const {
            target: {value}
        }=event;
        dispatch({type: signinConstants.setContact , payload: value});
    }

    const handleSignin = (event) => {
        event.preventDefault();

        dispatch({type: signinConstants.setEmailError , payload: ""});
        dispatch({type: signinConstants.setUsernameError , payload: ""});
        dispatch({type: signinConstants.setPasswordError , payload: ""});
        dispatch({type: signinConstants.setConfirmPasswordError , payload: ""});
        dispatch({type: signinConstants.setContactError , payload: ""});

        signinSchema
        .validate({email , username , password , confirmpwd , contact} , {abortEarly: false})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err.inner)
                err.inner.forEach((e) => {
                    if(e.path==="email"){
                        dispatch({
                            type: signinConstants.setEmailError,
                            payload: e.message
                        })
                    }

                    if(e.path==="username"){
                        dispatch({
                            type: signinConstants.setUsernameError,
                            payload: e.message
                        })
                    }

                    if(e.path==="password"){
                        dispatch({
                            type: signinConstants.setPasswordError,
                            payload: e.message
                        })
                    }

                    if(e.path==="confirmpwd"){
                        dispatch({
                            type: signinConstants.setConfirmPasswordError,
                            payload: e.message
                        })
                    }

                    if(e.path==="contact"){
                        dispatch({
                            type: signinConstants.setContactError,
                            payload: e.message
                        })
                    }
                })
            })
    }

    return(
        <Card> 
            <CardBody>
                <CardTitle tag="h1">SignIn</CardTitle>
                <Form inline onSubmit={handleSignin}> 
                    <FormGroup> 
                        <div>{emailError && <sub>{emailError} </sub>}</div>
                        <InputGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input
                                id="Email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={handleEmail}
                            />
                        </InputGroup>
                    </FormGroup>                      
                    {' '}
                    <FormGroup> 
                        <div>{usernameError && <sub>{usernameError} </sub>}</div>
                        <InputGroup>
                            <Label for="exampleUsername" hidden>Username</Label>
                            <Input
                                id="Username"
                                name="username"
                                placeholder="Username"
                                value={username}
                                type="text"
                                onChange={handleUsername}
                            />
                        </InputGroup>
                    </FormGroup>                      
                    {' '}
                    <FormGroup> 
                        <div>{passwordError && <sub>{passwordError} </sub>}</div>
                        <InputGroup>
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input
                                id="Password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={handlePassword}
                            />    
                        </InputGroup>
                    </FormGroup>
                    {' '}
                    <FormGroup> 
                        <div>{confirmpwdError && <sub>{confirmpwdError} </sub>}</div>
                        <InputGroup>
                            <Label for="exampleConfirmPassword" hidden>Email</Label>
                            <Input
                                id="ConfirmPwd"
                                name="confirmpwd"
                                placeholder="Confirm Password"
                                value={confirmpwd}
                                type="password"
                                onChange={handleConfirmpwd}
                            />
                        </InputGroup>
                    </FormGroup>                      
                    {' '}
                    <FormGroup> 
                        <div>{contactError && <sub>{contactError} </sub>}</div>
                        <InputGroup>
                            <Label for="exampleContact" hidden>Email</Label>
                            <Input
                                id="Contact"
                                name="contact"
                                placeholder="Contact Details"
                                value={contact}
                                type="text"
                                onChange={handleContact}
                            />
                        </InputGroup>
                    </FormGroup>                      
                    {' '}
                    <Button color="primary" type="submit">Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}

export default SignIn
