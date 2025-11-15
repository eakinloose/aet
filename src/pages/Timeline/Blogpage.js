// src/Blog.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { AboutWrapper } from "../About/AboutStyles";
import blogContent from "../../Data/BlogArray";

const Blogpage = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();

  const createMarkup = (html) => {
    return { __html: html };
  };

  const booksPerPage = 6; // 3 columns x 3 rows per page
  const pagesVisited = pageNumber * booksPerPage;

  const openBlogDetail = (book) => {
    navigate(`/blog/${book.id}`, { state: { book } });
  };

  const truncateDescription = (description) => {
    if (!description) {
      return "No description available.";
    }
    return description.length > 200
      ? `${description.substring(0, 210)}...`
      : description;
  };

  const displayBooks = blogContent
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book, index) => (
      <div
        className="blog-item"
        key={index}
        onClick={() => openBlogDetail(book)}
      >
        <img
          src={book.volumeInfo.imageUrl.smallThumbnail}
          alt={book.volumeInfo.title}
        />
        <div className="blog-item-content">
          <h3>{book.volumeInfo.title}</h3>
          <p
            dangerouslySetInnerHTML={createMarkup(
              truncateDescription(book.volumeInfo.description)
            )}
          />
          <span className="readmore">Click card to read...</span>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(blogContent.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <AboutWrapper>
      <div className="head">
        <h1>
          Blog <span>Page</span>
        </h1>
      </div>
      <div className="blog-container">
        <h1>Software Books</h1>
        <div className="blog-grid">{displayBooks}</div>
        {blogContent.length > booksPerPage && (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        )}
      </div>
    </AboutWrapper>
  );
};

export default Blogpage;
