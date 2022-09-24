import React from "react";

const MonthArchives = () => {
  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 bg_white primary_link full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Archives</h3>
        <div className="archives">
          <ul>
            <li>
              <a href="#">December 2018</a>
            </li>
            <li>
              <a href="#">November 2018</a>
            </li>
            <li>
              <a href="#">October 2018</a>
            </li>
            <li>
              <a href="#">September 2018</a>
            </li>
            <li>
              <a href="#">August 2018</a>
            </li>
            <li>
              <a href="#">July 2018</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MonthArchives;
