import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAdd2Bookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className=" w-2/3 border-2 p-2 rounded-lg">
      {blogs.map((blog) => (
        <Blog
          handleAdd2Bookmark={handleAdd2Bookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
