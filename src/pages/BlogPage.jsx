import React, { useState } from "react";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogIntro from "../components/BlogIntro";
import Categories from "../components/Categories";
import Layout from "../components/layout/Layout";
import MonthArchives from "../components/MonthArchives";
import RecentPosts from "../components/RecentPosts";
import Social from "../components/Social";
import TagsArchives from "../components/TagsArchives";


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
const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogsData);

  return (
    <>
      <Layout>
        <BlogIntro />
        <section class="blog_area py_80 bg_secondery full_row">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-lg-8">
                <div class="blog_list mb_60">
                  
                  {blogs.map((blog) => {
                    return (
                      <div key={blog.id} class="blog_item mb_30 wow animated slideInUp">
                        <div class="comments">
                          <FaComment />
                          <span class="color_white">180</span>
                        </div>
                        <div class="blog_img overlay_one">
                          <img src={`images/blog/${blog.image}`} alt="Blog Image" />
                        </div>
                        <div class="blog_content bg_white">
                          <div class="blog_title">
                            <Link class="color_primary" to={`/blogs/${blog.id}`}>
                              <h5>
                                {blog.title}
                              </h5>
                            </Link>
                          </div>
                          <p class="mt_15 mb_30">
                            {blog.description}
                          </p>

                          <div class="admin">
                            <img src="images/about/02.jpg" alt="image" />
                            <span class="color_white">By - {blog.author}</span>
                          </div>
                          <div class="date float-right color_primary">
                            {blog.publishedAt}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                </div>
                <nav>
                  <ul class="pagination wow animated slideInUp full_row">
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-md-5 col-lg-4">
                <div class="blog_sidebar">
                  <Social />
                  <Categories />
                  <RecentPosts />
                  <MonthArchives />
                  <TagsArchives />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPage;
