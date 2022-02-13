import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginInitiate , loginSuccess , loginFailure } from "../redux/login/action";

import LogIn from "../views/LogIn";
import Blogs from "../views/Blogs";
import Index from "../views/Index";
import LogOut from "../views/LogOut";

const Navout = () => {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.setItem("response", "");
    dispatch(loginInitiate)
  };

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Blog</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/logout">LogOut</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs">Blogs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div style={{ display: "flex" }}>
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/blogs" element={<Blogs />} />
            {/*<Route path="/blogs/details/:userId" element={<BlogDetails />} />*/}
            {/*</Route>*/}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navout;
