import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import PostList from "../components/Post";
import Markdown from "markdown-to-jsx";

// const Blog = () => {
//   const file_name = "post1.md";
//   const [Post, setPost] = useState("");

//   useEffect(() => {
//     import(`../Markdown/${file_name}`)
//       .then((res) => {
//         fetch(res.default)
//           .then((res) => res.text())
//           .then((res) => setPost(res));
//       })
//       .catch((err) => console.log(err));
//   });

//   return (
//     <main>
//       <header>
//         <Nav />
//       </header>
//       <Markdown>{Post}</Markdown>
//     </main>
//   );
// };

const Blog = () => {
  return (
    <main>
      <header>
        <Nav />
      </header>

      <PostList />
    </main>
  );
};

export default Blog;
