import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAdd2Bookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const [readTime, setReadTime] = useState(0);

  const handleReadTime = (time) => {
    setReadTime(readTime + time);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto md:flex mt-10 gap-10 border-2 p-4 rounded-lg">
        <Blogs handleReadTime={handleReadTime} handleAdd2Bookmark={handleAdd2Bookmark}></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
