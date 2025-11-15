// src/BlogDetail.js
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AboutWrapper } from "../About/AboutStyles";
import CodeSnippet from "../../components/Codesnippet";
import blogContent from "../../Data/BlogArray";

const BlogDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const [blog, setBlog] = useState(location.state?.blog || null);

  useEffect(() => {
    if (!blog && id) {
      // Find the blog data from the array based on the ID
      const foundBlog = blogContent.find((blog) => blog.id === id);
      setBlog(foundBlog);
    }
  }, [blog, id]);

  const createMarkup = (html) => {
    return { __html: html };
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <AboutWrapper>
      <div className="blog-detail-container">
        <div className="head">
          <h1>
            Blog <span>Content</span>
          </h1>
        </div>
        <div>
          <h2>{blog.volumeInfo.title}</h2>
          <p>
            <strong>Subtitle:</strong> {blog.volumeInfo.subtitle || "N/A"}
          </p>
        </div>
        <div>
          <strong>Authors:</strong>{" "}
          {blog.volumeInfo.authors
            ? blog.volumeInfo.authors.join(", ")
            : "Unknown Author"}
        </div>
        <div>
          <strong>Published Date:</strong>{" "}
          {blog.volumeInfo.publishedDate || "N/A"}
        </div>
        <div
          dangerouslySetInnerHTML={createMarkup(
            blog.volumeInfo.description || "No description available."
          )}
        ></div>
        <CodeSnippet language="javascript" code={blog.exampleCode1} />
        <div>{blog.subtitleTwo}</div>
        <div dangerouslySetInnerHTML={createMarkup(blog.description2)}></div>
        <CodeSnippet language="javascript" code={blog.exampleCode2} />
        <div dangerouslySetInnerHTML={createMarkup(blog.conclusion)}></div>
      </div>
    </AboutWrapper>
  );
};

export default BlogDetail;
