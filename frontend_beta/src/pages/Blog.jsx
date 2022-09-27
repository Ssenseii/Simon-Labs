import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion"; 

const Blog = () => {
  const file_name = "BuildProcess.md";

  const [Post, setPost] = useState("");

  useEffect(() => {
    import(`../Markdown/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <motion.main className="blog">
      <header>
        <Nav />
      </header>

      <section className="post">
        <Markdown>{Post}</Markdown>
      </section>
    </motion.main>
  );
};

export default Blog;
