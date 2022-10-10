import React from "react";
import Categories from "./Categories";
import Social from "./Social";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <>
      <div className="col-md-5 col-lg-4">
        <div className="blog_sidebar">
          <Social />
          <Categories />
          {/* <RecentPosts /> */}
          {/* <MonthArchives /> */}
          <Tags />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
