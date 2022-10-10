import { format } from "date-fns";
import React, { useContext } from "react";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { BlogContext } from "../context/Blog.context";
import Loader from "./Loader";
import Sidebar from "./Sidebar";


const BlogContents = () => {
  const { blogsLoaded, blogs, page, pageCount, setPage } = useContext(BlogContext);

  const generateArr = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  };
  const pageCountArr = generateArr(pageCount);
  const handlePageClick = (pageNum) => {
    
    setPage(+pageNum);
    scroll.scrollToTop()
  };

  return (
    <>
      {blogsLoaded ? (
        <section className="blog_area py_80 bg_secondery full_row" name='blogContent'>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                {blogs.length ? (
                  <>
                    <div className="blog_list mb_60">
                      {blogs.map((blog) => {
                        return (
                          <div
                            key={blog.id}
                            className="blog_item mb_30 wow animated slideInUp"
                          >
                            <div className="comments">
                              <FaComment />
                              <span className="color_white">
                                {blog?.comments?.length}
                              </span>
                            </div>
                            <div className="blog_img overlay_one">
                              <img
                                src={
                                  blog?.image?.formats?.large?.url
                                    ? blog?.image?.formats?.large?.url
                                    : blog?.image?.formats?.medium?.url
                                }
                                alt="Blog Image"
                              />
                            </div>
                            <div className="blog_content bg_white">
                              <div className="blog_title">
                                <Link
                                  className="color_primary"
                                  to={`/blogs/${blog.id}`}
                                >
                                  <h5>{blog?.title}</h5>
                                </Link>
                              </div>
                              <p className="mt_15 mb_30">{blog?.description}</p>

                              <div className="admin">
                                <img
                                  src={
                                    blog?.author?.profileImage?.data?.attributes
                                      ?.formats?.thumbnail?.url
                                  }
                                  alt="image"
                                />
                                <span className="color_white">
                                  By - {blog?.author?.username}
                                </span>
                              </div>
                              <div className="date float-right color_primary">
                                {blog?.publishedAt &&
                                  format(
                                    new Date(blog?.publishedAt),
                                    "d MMM yyyy"
                                  )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <nav>
                      <ul className="pagination wow animated slideInUp full_row">
                        {pageCountArr.map((count) => {
                          return (
                            <li
                              key={count}
                              className={
                                count === page
                                  ? "page-item active"
                                  : "page-item"
                              }
                              onClick={() => handlePageClick(count)}
                            >
                              <span className="page-link">
                                {count}
                              </span>
                            </li>
                          );
                        })}

                        {/* <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>

                        <li className="page-item">
                          <a className="page-link" href="#">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li> */}
                      </ul>
                    </nav>
                  </>
                ) : (
                  <div style={{ color: "red", textAlign: "center" }}>
                    <h2>Post is not available to show</h2>
                  </div>
                )}
              </div>
              <Sidebar />
            </div>
          </div>
        </section>
      ) : (
        <Loader color="#36d7b7" />
      )}
    </>
  );
};

export default BlogContents;
