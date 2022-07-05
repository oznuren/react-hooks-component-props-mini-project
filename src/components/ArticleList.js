import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList(props) {
  return (
    <main>
      {blogData.posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
