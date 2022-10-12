import { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import HomeBlog from "../components/HomeBlog";
import { BlogContext } from "../context/Blog.context";

const Blogs = () => {
  const { homeInfo } = useContext(BlogContext);
  const { blogIntro, blogs } = homeInfo.blogSection;

  return (
    <>
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

            {blogs?.data.length ? (
              <div className="col-lg-12">
                <div className="blog_grid_1 wow animated slideInUp">
                  <div className="row">
                    {blogs?.data.map((blog) => (
                      <HomeBlog key={blog.id} blog={blog} />
                    ))}
                  </div>
                  <div className="mx-auto text-center mt_60">
                    <Link className="btn btn-default" to="/blogs">
                      View Blog
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="col-lg-12"
                style={{ color: "red", textAlign: "center" }}
              >
                <h4>Blogs is not available to show</h4>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
