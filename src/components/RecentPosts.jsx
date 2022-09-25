import React from "react";

const RecentPosts = () => {
  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Recent Post</h3>
        <div className="recent_post">
          <ul>
            <li className="mb_30">
              <a href="#">
                <div className="post_img">
                  <img src="/images/recent-post/01.jpg" alt="image" />
                </div>
                <div className="recent_post_content">
                  <h6>Convallis pulvinar morbi. Aenean nisi vitae metus.</h6>
                  <span className="color_gray">30 Jan 2019</span>
                </div>
              </a>
            </li>
            <li className="mb_30">
              <a href="#">
                <div className="post_img">
                  <img src="/images/recent-post/02.jpg" alt="image" />
                </div>
                <div className="recent_post_content">
                  <h6>Eleifend ante hac quam. Rhoncus dapibus morbi.</h6>
                  <span className="color_gray">28 Jan 2019</span>
                </div>
              </a>
            </li>
            <li className="mb_30">
              <a href="#">
                <div className="post_img">
                  <img src="/images/recent-post/03.jpg" alt="image" />
                </div>
                <div className="recent_post_content">
                  <h6>Felis cum, elementum. Rhoncus aliquam cras.</h6>
                  <span className="color_gray">25 Jan 2019</span>
                </div>
              </a>
            </li>
            <li className="mb_30">
              <a href="#">
                <div className="post_img">
                  <img src="/images/recent-post/04.jpg" alt="image" />
                </div>
                <div className="recent_post_content">
                  <h6>Turpis eleifend dis platea lectus nam eleifen etiam.</h6>
                  <span className="color_gray">24 Jan 2019</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;