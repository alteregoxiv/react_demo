import "./App.css";
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

import LogIn from "./views/LogIn";
import Blogs from "./views/Blogs";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginInitiate , loginSuccess , loginFailure } from "./redux/login/action";
import { useSelector } from "react-redux";
import Index from "./views/Index";
import Navin from "./components/Navin";
import Navout from "./components/Navout";

function App() {
  //const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  //const blogs = useSelector((state) => state.blogs);
  return(
    <>
    {
      !login.response ?
      (
        <>
        <Navin />
        </>
      )
      :
      (
        <Blogs />
      )
    }
    </>
  );
}

export default App;
