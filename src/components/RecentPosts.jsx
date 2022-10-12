import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";

const RecentPosts = () => {
  const { recentPosts, loadRecentPosts } = useContext(BlogContext);

  useEffect(() => {

    loadRecentPosts();
    
  }, []);

  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Recent Post</h3>
        {recentPosts.length ? (
          <div className="recent_post">
            <ul>
              {recentPosts.map((blog) => {
                return (
                  <li key={blog.id} className="mb_30">
                    <Link to={`/blogs/${blog.slug}`}>
                      <div className="d-flex">
                        <div className="post_img">
                          <img
                            src={
                              blog?.image?.formats?.thumbnail?.url
                                ? blog?.image?.formats?.thumbnail?.url
                                : blog?.image?.formats?.medium?.url
                            }
                            alt="image"
                          />
                        </div>
                        <div className="recent_post_content">
                          <h6>
                            {blog?.title?.length >= 40
                              ? blog.title.slice(0, 40) + "..."
                              : blog.title}
                          </h6>
                          <span className="color_gray">
                            {" "}
                            {blog?.publishedAt &&
                              format(new Date(blog?.publishedAt), "d MMM yyyy")}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}

              {/* <li className="mb_30">
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
            </li> */}
            </ul>
          </div>
        ) : (
          <div style={{ color: "red", textAlign: "center" }}>
            <h5>Post is not available to show</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default RecentPosts;
