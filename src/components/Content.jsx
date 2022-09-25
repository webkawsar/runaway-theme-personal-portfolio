import qs from 'qs';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";

const Content = () => {
  const { blogId } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const query = qs.stringify({
          populate: ['image', 'author', 'comments', 'comments.user'],
        }, {
          encodeValuesOnly: true, // prettify URL
        });
        const response = await fetch(
          `http://localhost:1337/api/posts/${blogId}?${query}`
        );
        const data = await response.json();
        // console.log(data.data, '/posts/id api is loaded');
        // console.log(data?.data?.attributes?.comments?.data, "data");
        
        setBlog(data.data);
        setComments(data?.data?.attributes?.comments?.data);
        setLoaded(true);
        
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, [blogId]);

  const handleAddComment = (newComment) => {

    setComments([...comments, newComment]);
  }


  return (
    <>
      {loaded ? (
        <section className="blog_area py_80 bg_secondery full_row">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-8">
                <div className="blog_details">
                  <div className="blog_img overlay_one wow animated slideInUp">
                    <img src={`${blog?.attributes?.image?.data?.attributes?.formats?.large?.url}`} alt="image" />
                  </div>
                  <div className="blog_content bg_white">
                    <div className="blog_title mb_20 color_primary">
                      <h5>{blog?.attributes?.title}</h5>
                    </div>
                    <div className="admin">
                      <img src="/images/about/02.jpg" alt="image" />
                      <span className="color_primary">By - {blog?.attributes?.author?.data?.attributes?.username}</span>
                    </div>
                    <div className="date color_primary float-left">
                    {blog?.attributes?.publishedAt}
                    </div>
                    <div className="comments">
                      <i className="fa fa-comment" aria-hidden="true"></i>
                      <span className="color_primary">{blog?.attributes?.comments?.data?.length}</span>
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
                  {
                    comments && <Comments comments={comments} />
                  }

                  <AddComment postId={blog?.id} handleAddComment={handleAddComment} />
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </section>
      ) : (
        <div style={{ color: "red", textAlign: 'center' }}>
          <h2>Blog post not to show</h2>
        </div>
      )}
    </>
  );
};

export default Content;
