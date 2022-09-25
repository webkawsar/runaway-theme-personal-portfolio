import React from "react";
import Social from "./Social";
import TagsArchives from "./TagsArchives";

const CategorySideBar = () => {
  return (
    <>
      <div className="col-md-5 col-lg-4">
        <div className="blog_sidebar">
          <Social />
          <TagsArchives />
        </div>
      </div>
    </>
  );
};

export default CategorySideBar;
