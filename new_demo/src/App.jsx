import './App.css';
import{
    Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import LogIn from "./views/LogIn"
import Blogs from './views/Blogs';
import { Link, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//import { loginInitiate , loginSuccess , loginFailure } from "./redux/login";
import { useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    //const login = useSelector((state) => state.login);
    //const blogs = useSelector((state) => state.blogs);
    const logOut = () => {
        localStorage.setItem("response", "")
    }
  return (
    <>
    {!localStorage.getItem("response") ? 
        (<>
    <Navbar
      color="dark"
      dark
      expand="md"
    >
      <NavbarBrand href="/">
        Blog
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/login">
              LogIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blogs">
              Blogs
            </NavLink>
          </NavItem> 
        </Nav>
      </Collapse>
    </Navbar>
      <div style={{ display: "flex" }}>
					<div>
						<Routes>
							<Route path="/" element={<h1>HI</h1>} />
                            <Route path="/login" element={<LogIn />} />
                            <Route path="/blogs" element={<Blogs />} />
								{/*<Route path="/blogs/details/:userId" element={<BlogDetails />} />*/}
							{/*</Route>*/}
						</Routes>
					</div>
				</div>
        </>) :
        (<>
        <Navbar
      color="dark"
      dark
      expand="md"
    >
      <NavbarBrand href="/">
        Blog
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink>
              <Button color="primary" type="reset" onClick={logOut}>LogOut</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
      <div style={{ display: "flex" }}>
					<div>
						<Routes>
							<Route path="/logout" element={<h1>HI</h1>} />
                            <Route path="/" element={<h1>HI</h1>} />
                            <Route path="/login" element={<LogIn />} />
								{/*<Route path="/blogs/details/:userId" element={<BlogDetails />} />*/}
							{/*</Route>*/}
						</Routes>
					</div>
				</div>
        </>)}
    </>
  );
}

export default App;
