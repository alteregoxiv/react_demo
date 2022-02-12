import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";
import { blogsInitiate , blogsSuccess , blogsFailure } from "../redux/blogs/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blogs)

  useEffect(() => {
    const reque = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    
    const respo = fetch("https://jsonplaceholder.typicode.com/posts" , reque)
    .then(respi => respi.json())
    .then(res => dispatch(blogsSuccess(res)))
  } , [])

  return(
    <>
    {blogs.data ? (<>{JSON.stringify(blogs.data)}
    {blogs.data.map((i) => {
      <BlogCard 
        id={i.id}
        title={i.title}
        body={i.body}
      />
    })}</>) : (
      <>Wait</>
    )}
    </>
  )
}

export default Blogs
