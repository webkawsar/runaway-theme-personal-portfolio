import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import { FaComment } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { BlogContext } from "../context/Blog.context";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

const CategoryContents = () => {
  const {
    fetchCategory,
    categoryLoaded,
    category,
    categoryBlogs,
    catPageNumber,
    setCatPageNumber
  } = useContext(BlogContext);
  const { slug } = useParams();
  
  useEffect(() => {

    fetchCategory(slug);
    
  }, [slug, catPageNumber]);

  const handlePageClick = (pageNum) => {
    
    scroll.scrollToTop();
    setCatPageNumber(pageNum);
  };

  return (
    <>
      {categoryLoaded ? (
        <section className="blog_area py_80 bg_secondery full_row">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                {categoryBlogs.length ? (
                  <>
                    <div className="blog_list mb_60">
                      {categoryBlogs.map((blog) => {
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
                                src={`${
                                  blog?.image?.formats?.large?.url
                                    ? blog?.image?.formats?.large?.url
                                    : blog?.image?.formats?.medium?.url
                                }`}
                                alt="Blog Image"
                              />
                            </div>
                            <div className="blog_content bg_white">
                              <div className="blog_title">
                                <Link
                                  className="color_primary"
                                  to={`/blogs/${blog?.slug}`}
                                >
                                  <h5>{blog?.title}</h5>
                                </Link>
                              </div>
                              <p className="mt_15 mb_30">{blog?.description}</p>

                              <div className="admin">
                                <img
                                  src={
                                    blog?.author?.profileImage?.formats
                                      ?.thumbnail?.url
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
                        {category?.pagination?.hasPreviousPage && (
                          <li
                            className="page-item"
                            onClick={() =>
                              handlePageClick(
                                category?.pagination?.previousPage
                              )
                            }
                          >
                            <span className="page-link">
                              {category?.pagination?.previousPage}
                            </span>
                          </li>
                        )}

                        {
                          <li className="page-item active">
                            <span className="page-link">
                              {category?.pagination?.currentPage}
                            </span>
                          </li>
                        }

                        {category?.pagination?.hasNextPage && (
                          <li
                            className="page-item"
                            onClick={() =>
                              handlePageClick(category?.pagination?.nextPage)
                            }
                          >
                            <span className="page-link">
                              {category?.pagination?.nextPage}
                            </span>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </>
                ) : (
                  <div style={{ color: "red", textAlign: "center" }}>
                    <h3><span style={{textTransform: 'capitalize'}}>"{category.name}"</span> category blogs is not available to show</h3>
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

export default CategoryContents;
