import { format } from "date-fns";
import React from "react";
import { FaComment } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, author, description, image, publishedAt, comments } = blog;

  return (
    <>
      <Fade bottom>
        <div key={blog.id} className="blog_item mb_30 wow animated slideInUp">
          <div className="comments">
            <FaComment />
            <span className="color_white">
              {blog?.attributes?.comments?.data?.length}
            </span>
          </div>
          <div className="blog_img overlay_one">
            <img
              src={
                blog?.attributes?.image?.data?.attributes?.formats?.large?.url
                  ? blog?.attributes?.image?.data?.attributes?.formats?.large
                      ?.url
                  : blog?.attributes?.image?.data?.attributes?.formats?.medium
                      ?.url
              }
              alt="Blog Image"
            />
          </div>
          <div className="blog_content bg_white">
            <div className="blog_title">
              <Link
                className="color_primary"
                to={`/blogs/${blog?.attributes?.slug}`}
              >
                <h5>{blog?.attributes?.title}</h5>
              </Link>
            </div>
            <p className="mt_15 mb_30">{blog?.attributes?.description}</p>

            <div className="admin">
              <img
                src={
                  blog?.attributes?.author?.data?.attributes?.profileImage?.data
                    ?.attributes?.formats?.thumbnail?.url
                }
                alt="image"
              />
              <span className="color_white">
                By - {blog?.attributes?.author?.data?.attributes?.username}
              </span>
            </div>
            <div className="date float-right color_primary">
              {blog?.attributes?.publishedAt &&
                format(new Date(blog?.attributes?.publishedAt), "d MMM yyyy")}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Blog;
