import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAdd2Bookmark }) => {
  const { cover, img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div>
      <img className="h-96 w-full rounded-lg" src={cover} alt="cover picture" />
      <div className="flex items-center justify-between mt-8 mb-8">
        <div className="flex gap-6 items-center">
          <img className="h-20 w-20 rounded-full" src={img} alt="author img" />
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-4 ">
          <span className="text-xl">{reading_time} min read</span>
          <button
            onClick={() => {
              handleAdd2Bookmark(blog);
            }}
            className="text-3xl text-red-600"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">
        How to get your first job as a self-taught programmer
      </h1>
      <span className="space-x-6">
        {hashtags.map((hash, idx) => (
          <a className="text-blue-600" key={idx} href="">
            {hash}
          </a>
        ))}
      </span>
      <div className="mt-4 border-b-2 pb-4 mb-6">
        <a href="">hello</a>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
