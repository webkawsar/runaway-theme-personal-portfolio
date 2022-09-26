import React from "react";
import Categories from "./Categories";
import Social from "./Social";

const CategorySideBar = () => {
  return (
    <>
      <div className="col-md-5 col-lg-4">
        <div className="blog_sidebar">
          <Social />
          <Categories />
        </div>
      </div>
    </>
  );
};

export default CategorySideBar;
