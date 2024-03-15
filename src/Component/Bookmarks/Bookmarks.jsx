import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

function Bookmarks({ bookmarks, readTime }) {
  return (
    <div className="border-2 w-1/3 rounded-2xl p-3 bg-[#1111110D]">
      <div className="border text-center p-4 rounded-lg mb-2 bg-purple-200">
        <h2 className="text-2xl font-bold">
          Spent time on read : {readTime} min
        </h2>
      </div>
      <h2 className="text-2xl font-bold text-center">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}

export default Bookmarks;
