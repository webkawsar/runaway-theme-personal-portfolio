import React, { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import { BlogContext } from "../context/Blog.context";


const Blogs = () => {
  const {loaded, blogs} = useContext(BlogContext);

  return (
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
                <span className="sub_title">
                  Interdum a etiam sagittis vehicula porta. Massa felis eros
                  quam blandit nulla dolor habitant. Ullamcorper quis ornare et
                  proin pellentesque.
                </span>
              </div>
            </div>
          </Fade>
          <div className="col-md-12 col-lg-12">
            <div className="blog_grid_1 wow animated slideInUp">
              <div className="row">
                {blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
              </div>
              <div className="mx-auto text-center mt_60">
                <Link className="btn btn-default" to="/blogs">
                  View Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
