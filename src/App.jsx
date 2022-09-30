import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "venobox/dist/venobox.min.css";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
import Wrapper from "./components/Wrapper";
import BlogDetails from "./pages/BlogDetails";
import BlogPage from "./pages/BlogPage";
import Category from "./pages/Category";
import Home from "./pages/Home";

// set global base url for every req
axios.defaults.baseURL =
  "https://simple-runaway-theme-backend.herokuapp.com/api";
// http://localhost:1337/api
// https://simple-runaway-theme-backend.herokuapp.com/api

const App = () => {
  return (
    <>
      {/* It is used for solve problem ScrollRestoration */}
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/categories/:catId" element={<Category />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
