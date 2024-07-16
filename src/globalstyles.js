import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

   *,
   *::before,
   *::after {
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
   }
 
   html {
      font-size: 62.5%;
   }

   body {
      margin: 0;
      padding: 0;
      min-height: 100%;
      width: 100%;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: 0.02rem;
      line-height: 2.5rem;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background: ${({ theme }) => theme.colors?.black};
    /* background: red; */
    color: ${({ theme }) => theme.colors?.grey01};
   }

   a, strong{
      text-decoration: none;
      color: ${({ theme }) => theme.colors?.button};
   }

   button, .button{
    border: 0;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: inline-block;
    width: 150px;
    text-align: center;
    padding: 1.2rem 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 1.6rem;
    border-radius: 3px;
    text-transform: capitalize;
    transition: transform 300ms ease-in-out;
    background-color: ${({ theme }) => theme.colors?.button};
    color: ${({ theme }) => theme.colors.white};
   }

   button:hover, .button:hover{
    background-color: ${({ theme }) => theme.colors?.buttonhover};
   }

   input, textarea{
    width: 100%;
    max-width: 560px;
    border: 1px solid grey;
    outline: none;
    font-size: 1.5rem;
    appearance: none;
    border-radius: 0;
    padding: 1.08rem;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors?.grey01};
   }

   input:hover, textarea:hover{
    background-color: ${({ theme }) => theme.colors?.inputhover};
   }

  input::placeholder, textarea::placeholder {
    font-weight: 400;
    opacity: .9;
    font-size: 12px;
    text-transform: capitalize !important;
    color: grey;
  }

  .blog-item-content h3, .blog-item-content span{
    color: ${({ theme }) => theme.colors?.button};
  }

  .menu{
     background: black;
     fill-opacity: 1;
     opacity: 0.7;
     color: ${({ theme }) => theme.colors.white};
     width: 50px;
     height: 50px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     position: fixed;
     top: 2rem;
     
   }

   .navcontents{
      display: flex;
      justify-content: space-around;
      position: fixed;
      background: black;
      fill-opacity: 1;
      opacity: 0.7;
      color: ${({ theme }) => theme.colors.white};
      top: 2.2rem;
      left: 6rem;
      width: 90%;
      max-width: 370px;
      border-radius: 50px;
    
    h4, a{
       display: inline;
       margin: 1rem;
       font-weight: 400;
       color: ${({ theme }) => theme.colors.white};
    }
   }

  .side{
    display: flex;
  }



  .vertical-timeline-element-content {
  background: #fff !important; /* Override default background */
  color: black !important; /* Text color */
}
  .vertical-timeline-element-content:hover{
    color: white !important;
    background: ${({ theme }) => theme.colors.button} !important;
     transition: background-color 0.3s ease;
     transform: translateY(-5px);
  color: ${({ theme }) => theme.colors.white} !important;
  box-shadow: ${({ theme }) => theme.colors.button} 0px 1px 9px 0px;
  transform: scale(1.025);
    transition: transform 0.3s ease, transform 0.3s ease;
  }



.vertical-timeline-element-title:hover, .vertical-timeline-element-subtitle:hover {
  color: white !important; /* Title text color */
}
.vertical-timeline-element-content .vertical-timeline-element-date {
  color: white !important; /* Date text color */
}

/* src/Blog.css */
/* src/Blog.css */

.blog-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  color: black;
}

.blog-container h1 {
  text-align: center;
  margin-bottom: 30px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

@media (max-width: 900px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
   .blog-container {
  padding: 10px;
  max-width: 1200px;
  margin: -120px auto;
  color: black;
}

  .blog-grid {
    grid-template-columns: 1fr;
  }
}

.blog-item {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  color: whitesmoke;
}

.blog-item:hover {
  transform: translateY(-5px);
  color: ${({ theme }) => theme.colors.white} !important;
  box-shadow: ${({ theme }) => theme.colors.button} 0px 1px 9px 0px;

}

.blog-item img {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 200px; /* Adjust height as needed */
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.blog-item:hover{
   transform: scale(1.025);
    transition: transform 0.3s ease, transform 0.3s ease;

}
.blog-item h3 {
  margin: 5px 0;
  padding: 0 5px; /* Add padding to align with text */
}

.blog-item p {
  margin: 0 0 10px;
  padding: 0 5px; /* Add padding to align with text */
}

/* Additional styling for content alignment */
.blog-item-content {
  padding: 15px 10px;
}



.pagination {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 20px 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination li a {
  text-decoration: none;
  color: #007bff;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.pagination li a:hover {
  background-color: #007bff;
  color: #fff;
}

.pagination .active a {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

/* src/BlogDetail.css */

.blog-detail-container {
  max-width: 1100px;
  margin: 0 auto;
}

.blog-detail-container img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
}

.blog-detail-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.blog-detail-container p {
  margin: 10px 0;
}


`;

export { GlobalStyles };
