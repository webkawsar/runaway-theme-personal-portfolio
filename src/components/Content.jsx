import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

const Content = () => {
  const { slug } = useParams();
  const { fetchBlog, blogLoaded, blog, comments } = useContext(BlogContext);

  useEffect(() => {

    fetchBlog(slug);
    
  }, [slug]);

  return (
    <>
      {blogLoaded ? (
        <section className="blog_area py_80 bg_secondery full_row">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                {Object.keys(blog).length ? (
                  <div className="blog_details">
                    <div className="blog_img overlay_one wow animated slideInUp">
                      <img
                        src={`${
                          blog?.image?.formats?.medium?.url
                            ? blog?.image?.formats?.medium?.url
                            : blog?.image?.formats?.thumbnail?.url
                        }`}
                        alt="image"
                      />
                    </div>
                    <div className="blog_content bg_white">
                      <div className="blog_title mb_20 color_primary">
                        <h5>{blog?.title}</h5>
                      </div>
                      <div className="admin">
                        <img
                          src={
                            blog?.author?.profileImage?.formats?.thumbnail?.url
                          }
                          alt="image"
                        />
                        <span className="color_primary">
                          By - {blog?.author?.username}
                        </span>
                      </div>
                      <div className="date color_primary float-left">
                        {blog?.publishedAt &&
                          format(new Date(blog?.publishedAt), "d MMM yyyy")}
                      </div>
                      <div className="comments">
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <span className="color_primary">{comments.length}</span>
                      </div>
                      <div className="single_blog_content d-inline-block mt_30 color_secondery wow animated slideInUp">
                        <p>{blog?.description}</p>
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
                    <AddComment blogId={blog?.id} />
                    
                  </div>
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

export default Content;
