// src/BlogDetail.js
import React from "react";
import { useLocation } from "react-router-dom";
import { AboutWrapper } from "../About/AboutStyles";
import CodeSnippet from "../../components/Codesnippet";

const BlogDetail = () => {
  const location = useLocation();
  const book = location.state.book;

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <AboutWrapper>
      <div className="blog-detail-container">
        <div className="head">
          <h1>
            Blog <span>Content</span>
          </h1>
        </div>
        <p>
          <h2>{book.volumeInfo.title}</h2>
          <strong>Subtitle:</strong> {book.volumeInfo.subtitle || "N/A"}
        </p>
        <p>
          <strong>Authors:</strong>{" "}
          {book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown Author"}
        </p>
        <p>
          <strong>Published Date:</strong>{" "}
          {book.volumeInfo.publishedDate || "N/A"}
        </p>
        <p
          dangerouslySetInnerHTML={createMarkup(
            book.volumeInfo.description || "No description available."
          )}
        ></p>

        <CodeSnippet language="javascript" code={book.exampleCode1} />
        <p>{book.volumeInfo.subtitleTwo}</p>
        <p dangerouslySetInnerHTML={createMarkup(book.description2)}></p>
        <CodeSnippet language="javascript" code={book.exampleCode2} />
        <p dangerouslySetInnerHTML={createMarkup(book.conclusion)}></p>
      </div>
    </AboutWrapper>
  );
};

export default BlogDetail;
