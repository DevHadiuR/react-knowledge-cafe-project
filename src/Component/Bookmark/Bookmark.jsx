import PropTypes from "prop-types";

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="p-3 rounded-xl font-semibold m-5 bg-white">
      <h2>{title}</h2>
    </div>
  );
}

export default Bookmark;
