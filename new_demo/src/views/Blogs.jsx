import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs)

  return(
    <>
    {blogs.data.map((i) => {
      <BlogCard 
        id={i.id}
        title={i.title}
        body={i.body}
      />
    })}
    </>
  )
}

export default Blogs
