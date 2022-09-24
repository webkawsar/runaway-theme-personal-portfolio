import React from "react";
import Categories from "./Categories";
import MonthArchives from "./MonthArchives";
import RecentPosts from "./RecentPosts";
import Social from "./Social";
import TagsArchives from "./TagsArchives";

const BlogSidebar = () => {
  return (
    <>
      <div className="col-md-5 col-lg-4">
        <div className="blog_sidebar">
          <Social />
          <Categories />
          <RecentPosts />
          <MonthArchives />
          <TagsArchives />
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
