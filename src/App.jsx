import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "venobox/dist/venobox.min.css";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
