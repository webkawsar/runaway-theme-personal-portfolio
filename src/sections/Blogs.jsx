import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";

const blogsData = [
  {
    id: 1,
    title: `Convallis pulvinar morbi. Aenean nisi vitae metus
    nonummy a morbi.`,
    description: `Dictumst integer sollicitudin venenatis ornare quam.
    Ligula integer luctus, blandit egestas molestie facilisi
    porttitor neque sodal luctus senectus lacinia euismod
    adipiscing element turpis dolor curae; posuere augue.`,
    image: '01.jpg',
    author: "Rockstar Jack",
    publishedAt: "20 Jan 2019",
  },
  {
    id: 2,
    title: `Ornare fames imperdiet sapien. Iaculis dictum aptent
    commodo at iaculis.`,
    description: `Dictumst integer sollicitudin venenatis ornare quam.
    Ligula integer luctus, blandit egestas molestie facilisi
    porttitor neque sodal luctus senectus lacinia euismod
    adipiscing element turpis dolor curae; posuere augue.`,
    image: '02.jpg',
    author: "Rockstar Jack",
    publishedAt: "20 Jan 2019",
  },
  {
    id: 3,
    title: `Vulputate donec sem purus litora varius auctor augue
    suscipit hac.`,
    description: `Dictumst integer sollicitudin venenatis ornare quam.
    Ligula integer luctus, blandit egestas molestie facilisi
    porttitor neque sodal luctus senectus lacinia euismod
    adipiscing element turpis dolor curae; posuere augue.`,
    image: '03.jpg',
    author: "Rockstar Jack",
    publishedAt: "20 Jan 2019",
  },
];
const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

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