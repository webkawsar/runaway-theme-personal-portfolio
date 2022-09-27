import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";
import AddComment from "./AddComment";
import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";
import Loader from "./Loader";

const Content = () => {
  const { blogId } = useParams();
  const { blogLoaded, blog, comments, fetchBlog } = useContext(BlogContext);

  useEffect(() => {
    fetchBlog(blogId);
  }, [blogId]);


  return (
    <>
      {blogLoaded ? (
        <section className="blog_area py_80 bg_secondery full_row">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-8">
                {Object.keys(blog).length ? (
                  <div className="blog_details">
                    <div className="blog_img overlay_one wow animated slideInUp">
                      <img
                        src={`${
                          blog?.attributes?.image?.data?.attributes?.formats
                            ?.large?.url
                            ? blog?.attributes?.image?.data?.attributes?.formats
                                ?.large?.url
                            : blog?.attributes?.image?.data?.attributes?.formats
                                ?.thumbnail?.url
                        }`}
                        alt="image"
                      />
                    </div>
                    <div className="blog_content bg_white">
                      <div className="blog_title mb_20 color_primary">
                        <h5>{blog?.attributes?.title}</h5>
                      </div>
                      <div className="admin">
                        <img src="/images/about/02.jpg" alt="image" />
                        <span className="color_primary">
                          By -{" "}
                          {blog?.attributes?.author?.data?.attributes?.username}
                        </span>
                      </div>
                      <div className="date color_primary float-left">
                        
                        {blog?.attributes?.publishedAt &&  format(new Date(blog?.attributes?.publishedAt), "d MMM yyyy")}
                      </div>
                      <div className="comments">
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <span className="color_primary">
                          {comments.length}
                        </span>
                      </div>
                      <div className="single_blog_content d-inline-block mt_30 color_secondery wow animated slideInUp">
                        <p>{blog?.attributes?.description}</p>
                        <p className="mt_15 wow animated slideInUp">
                          Sit lacinia dolor arcu vel quisque neque felis proin
                          ante,
                        </p>
                        <blockquote className="color_primary mt_15 wow animated slideInUp">
                          <sup>
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </sup>{" "}
                          Netus vestibulum nostra facilisi tellus.
                          <sup>
                            <i
                              className="fa fa-quote-right"
                              aria-hidden="true"
                            ></i>
                          </sup>
                        </blockquote>
                        <p className="mt_15">
                          Ante nascetur className fames leo nisi arcu Fringilla
                        </p>
                      </div>
                      <div className="share_post mt_30 wow animated slideInUp">
                        <h4 className="float-left mr_20">Share : </h4>
                        <div className="socal_media_2 d-inline-block">
                          <ul>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-google-plus"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-linkedin"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {comments && <Comments comments={comments} />}

                    <AddComment postId={blog?.id} />
                  </div>
                ) : (
                  <div style={{ color: "red", textAlign: "center" }}>
                    <h2>Post is not available to show</h2>
                  </div>
                )}
              </div>
              <BlogSidebar />
            </div>
          </div>
        </section>
      ) : (
        <Loader color="#36d7b7" />
      )}
    </>
  );
};

export default Content;
