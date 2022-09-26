import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import { FaComment } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";
import CategorySideBar from "./CategorySideBar";

const CategoryContents = () => {
  const { categoryBlogLoaded, categoryBlog, fetchBlogByCategoryID } = useContext(BlogContext);

  const { catId } = useParams();
  useEffect(() => {

    fetchBlogByCategoryID(catId);
    
  }, [catId]);

  // console.log(categoryBlog, 'categoryBlog');


  return (
    <>
      <section className="blog_area py_80 bg_secondery full_row">
        <div className="container">
          <div className="row">
            {categoryBlogLoaded ? (
              <div className="col-md-7 col-lg-8">
                <div className="blog_list mb_60">
                  {categoryBlog.map((blog) => {
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
                            src={`${blog?.image?.formats?.large?.url}`}
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
                            <img src="/images/about/02.jpg" alt="image" />
                            <span className="color_white">
                              By - {blog?.author?.username}
                            </span>
                          </div>
                          <div className="date float-right color_primary">
                            {blog?.publishedAt &&
                              format(new Date(blog?.publishedAt), "d MMM yyyy")}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <nav>
                  <ul className="pagination wow animated slideInUp full_row">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
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
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            ) : (
              <div
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: "100px",
                }}
              >
                <h3>Loaded...</h3>
              </div>
            )}
            <CategorySideBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryContents;
