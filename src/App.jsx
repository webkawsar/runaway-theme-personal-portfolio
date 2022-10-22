import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-typed/dist/animatedCursor.css";
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
import Tag from "./pages/Tag";

const isProduction = import.meta.env.PROD;

// set global base url for every req
axios.defaults.baseURL = isProduction
  ? import.meta.env.VITE_PRODUCTION_URL
  : import.meta.env.VITE_DEVELOPMENT_URL;

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* It is used for solve problem ScrollRestoration */}
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route path="/tags/:slug" element={<Tag />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
