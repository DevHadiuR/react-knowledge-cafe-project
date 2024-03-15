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

  return (
    <>
      <Header></Header>
      <main className="container mx-auto md:flex mt-10 gap-10 border-2 p-4 rounded-lg">
        <Blogs handleAdd2Bookmark={handleAdd2Bookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
