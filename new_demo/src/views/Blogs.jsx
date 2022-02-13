import "../Blogs.css" 

import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import {
  blogsInitiate,
  blogsSuccess,
  blogsFailure,
} from "../redux/blogs/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Navin from "../components/Navin"
import Navout from "../components/Navout";

import { useNavigate } from "react-router-dom"

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const navigate = useNavigate()

  useEffect(() => {
    const reque = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const respo = fetch("https://jsonplaceholder.typicode.com/posts", reque)
      .then((respi) => respi.json())
      .then((res) => dispatch(blogsSuccess(res)));
  }, []);

  const navigateToBlogDetails = (userId) => {
		navigate(`/blogs/details/${userId}`)
	}

  return (
    <>
      {blogs.data ? (
        <>
        <div className="main">
        {blogs.data.map((i) => {
          return <BlogCard id={i.id} title={i.title} body={i.body} />;
        })}
        </div>
        </>
      ) : (
        <><h1>Gathering Blogs...</h1></>
      )}
    </>
  );
};

export default Blogs;
