import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

function Bookmarks({ bookmarks }) {
  return (
    <div className="border-2 w-1/3 rounded-2xl p-3 bg-[#1111110D]">
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
