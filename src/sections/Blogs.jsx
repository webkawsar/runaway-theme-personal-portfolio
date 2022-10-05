import { format } from "date-fns";
import { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { BlogContext } from "../context/Blog.context";

const Blogs = () => {
  const { blogsLoaded, blogs } = useContext(BlogContext);
  const { myInfo } = useContext(BlogContext);
  const { blogIntro, posts } = myInfo.blogSection;

  

  return (
    <>
      {blogsLoaded ? (
        <section id="blog" name="blog" className="py_80 bg_secondery full_row">
          <div className="container">
            <div className="row">
              <Fade bottom cascade>
                <div className="col-md-12 col-lg-12">
                  <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                    <h2 className="title text-uppercase">
                      <span className="line_double mx-auto color_default">
                        blog
                      </span>
                      What’s News
                    </h2>
                    <span className="sub_title">{blogIntro}</span>
                  </div>
                </div>
              </Fade>
              {posts?.data.length && (
                <div className="col-md-12 col-lg-12">
                  <div className="blog_grid_1 wow animated slideInUp">
                    <div className="row">
                      {posts?.data.map((blog) => {
                        return (
                          <Fade bottom key={blog.id}>
                            <div key={blog.id} className="col-md-12 col-lg-4">
                              <div className="blog_item">
                                <div className="comments">
                                  <i
                                    className="fa fa-comment"
                                    aria-hidden="true"
                                  ></i>
                                  <span className="color_white">
                                    {blog?.attributes?.comments?.data?.length}
                                  </span>
                                </div>
                                <div className="blog_img overlay_one">
                                  <img
                                    src={`${
                                      blog?.attributes?.image?.data?.attributes?.formats?.large?.url
                                        ? blog?.attributes?.image?.data?.attributes?.formats?.large?.url
                                        : blog?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url
                                    }`}
                                    alt="image"
                                  />
                                </div>
                                <div className="blog_content bg_white color_secondery">
                                  <div className="blog_title">
                                    <Link
                                      className="color_primary"
                                      to={`/blogs/${blog.id}`}
                                    >
                                      <h5>{blog?.attributes?.title}</h5>
                                    </Link>
                                  </div>
                                  <p className="mt_15 mb_30">
                                    {blog?.attributes?.description.slice(0, 260).concat('...')}
                                  </p>

                                  <div className="admin">
                                    <img
                                      src={blog?.attributes?.author?.data?.attributes?.profileImage?.data?.attributes?.url}
                                      alt="image"
                                    />
                                    <span className="color_white">
                                      By - {blog?.attributes?.author?.data?.attributes?.username}
                                    </span>
                                  </div>
                                  <div className="date float-right color_primary">
                                    {format(
                                      new Date(blog?.attributes?.publishedAt),
                                      "d MMM yyyy"
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Fade>
                        );
                      })}
                    </div>
                    <div className="mx-auto text-center mt_60">
                      <Link className="btn btn-default" to="/blogs">
                        View Blog
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loader color="#36d7b7" />
      )}
    </>
  );
};

export default Blogs;
