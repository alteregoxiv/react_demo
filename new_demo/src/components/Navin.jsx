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

import LogIn from "../views/LogIn";
import Blogs from "../views/Blogs";
import { BlogDetails } from "../views/BlogDetails";
import Index from "../views/Index";

const Navin = () => {
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Blog</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/login">LogIn</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div style={{ display: "flex" }}>
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/blogs" element={<Blogs />} />
              {/*<Route path="" element={<Blogs />} /> */}
              {/*<Route path="/blogs/details/:blogId" element={<BlogDetails />} />*/}
            {/*</Route>*/}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Navin;
