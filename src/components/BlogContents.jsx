import React, { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";

const blogsData = [
  {
    id: 1,
    title: `Convallis pulvinar morbi. Aenean nisi vitae metus
      nonummy a morbi.`,
    description: `Dictumst integer sollicitudin venenatis ornare quam.
      Ligula integer luctus, blandit egestas molestie facilisi
      porttitor neque sodal luctus senectus lacinia euismod
      adipiscing element turpis dolor curae; posuere augue.`,
    image: "01.jpg",
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
    image: "02.jpg",
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
    image: "03.jpg",
    author: "Rockstar Jack",
    publishedAt: "20 Jan 2019",
  },
];

const BlogContents = () => {
  const [blogs, setBlogs] = useState(blogsData);

  useEffect(() => {

    fetchBlogsData();
    
  }, [])

  const fetchBlogsData = async () => {
    try {

      const response = await fetch('http://localhost:1337/api/posts?populate=*');
      const data = await response.json();
      // console.log(data.data, 'data');
      setBlogs(data.data);
      
    } catch (error) {
      
      console.log(error, 'error');
    }
  }

  return (
    <>
      <section className="blog_area py_80 bg_secondery full_row">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <div className="blog_list mb_60">
                {blogs.map((blog) => {
                  return (
                    <div
                      key={blog.id}
                      className="blog_item mb_30 wow animated slideInUp"
                    >
                      <div className="comments">
                        <FaComment />
                        <span className="color_white">180</span>
                      </div>
                      <div className="blog_img overlay_one">
                        <img
                          src={`${blog?.attributes?.image?.data?.attributes?.formats?.large?.url}`}
                          alt="Blog Image"
                        />
                      </div>
                      <div className="blog_content bg_white">
                        <div className="blog_title">
                          <Link
                            className="color_primary"
                            to={`/blogs/${blog.id}`}
                          >
                            <h5>{blog?.attributes?.title}</h5>
                          </Link>
                        </div>
                        <p className="mt_15 mb_30">{blog?.attributes?.description}</p>

                        <div className="admin">
                          <img src="/images/about/02.jpg" alt="image" />
                          <span className="color_white">
                            By - {blog?.attributes?.author?.data?.attributes?.username}
                          </span>
                        </div>
                        <div className="date float-right color_primary">
                          {blog?.attributes?.publishedAt}
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
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContents;
