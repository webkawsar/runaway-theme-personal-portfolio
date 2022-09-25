import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "venobox/dist/venobox.min.css";
import Wrapper from "./components/Wrapper";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import Category from "./pages/Category";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* It is used for solve problem ScrollRestoration */}
        <Wrapper>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:blogId" element={<BlogDetails />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
