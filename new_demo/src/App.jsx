import './App.css';
import{
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

function App() {
  return (
    <>
    <Navbar
      color="dark"
      dark
      expand="md"
    >
      <NavbarBrand href="/">
        reactstrap
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
    </>
  );
}

export default App;
