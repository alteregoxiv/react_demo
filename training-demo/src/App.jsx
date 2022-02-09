import {useEffect, useState, useReducer} from "react";
import {Container , Button} from 'reactstrap';
import ProjectCard from './components/ProjectCard';
import projectjson from './projects.json';
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn"
import Details from "./components/details";
import All from "./App.css";

function App() {
    let [showlog  , setShowlog] = useState(true)
    let [resp , setResp] = useState({})

    useEffect(() => {
        const reque ={ 
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        const respo = fetch("https://reqres.in/api/users?page=2" , reque)
                        .then(res => res.json())
                        .then(res => setResp(res['data']))
    } , [])

    const onLoginSuccess = () => {
        setShowlog(!(showlog));
    }
    
    return (
        <Container>
        {showlog ? 
            (
                <LogIn onShow={onLoginSuccess}/>
            ) :
            (
                <>
                <Button onClick={onLoginSuccess}>LogInPage</Button>
                {resp.map((res)=>{
                    return (
                        <ProjectCard
                            imgSrcUrl={res.avatar}
                            cardTitle={res.first_name}
                            description={res.email}
                        />
                    );
                })}
                </>
            )
        }
        <SignIn />
        <Details />
        </Container>
    );
}

export default App;
