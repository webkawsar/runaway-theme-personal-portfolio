import React from "react";

const Categories = () => {
  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Category</h3>
        <div className="category_sidebar">
          <ul>
            <li>
              <a href="#">Web Development</a>
              <span>(14)</span>
            </li>
            <li>
              <a href="#">Web Design</a>
              <span>(07)</span>
            </li>
            <li>
              <a href="#">Graphic Design</a>
              <span>(10)</span>
            </li>
            <li>
              <a href="#">UI/UX Design</a>
              <span>(12)</span>
            </li>
            <li>
              <a href="#">Consultation</a>
              <span>(18)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
