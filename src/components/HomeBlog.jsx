import { format } from "date-fns";
import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const HomeBlog = ({blog}) => {
  return (
    <>
      <Fade bottom>
        <div key={blog.id} className="col-sm-12 col-md-6 col-lg-4">
          <div className="blog_item">
            <div className="comments">
              <i className="fa fa-comment" aria-hidden="true"></i>
              <span className="color_white">
                {blog?.attributes?.comments?.data?.length}
              </span>
            </div>
            <div className="blog_img">
              <img
                style={{ height: "220px" }}
                src={`${
                  blog?.attributes?.image?.data?.attributes?.formats?.large?.url
                    ? blog?.attributes?.image?.data?.attributes?.formats?.large
                        ?.url
                    : blog?.attributes?.image?.data?.attributes?.formats
                        ?.thumbnail?.url
                }`}
                alt="image"
              />
            </div>
            <div className="blog_content bg_white color_secondery">
              <div className="blog_title">
                <Link
                  className="color_primary"
                  to={`/blogs/${blog?.attributes?.slug}`}
                >
                  <h5>{blog?.attributes?.title}</h5>
                </Link>
              </div>
              <p className="mt_15 mb_30">
                {blog?.attributes?.description.slice(0, 260).concat("...")}
              </p>

              <div className="admin">
                <img
                  src={
                    blog?.attributes?.author?.data?.attributes?.profileImage
                      ?.data?.attributes?.url
                  }
                  alt="image"
                />
                <span className="color_white">
                  By - {blog?.attributes?.author?.data?.attributes?.username}
                </span>
              </div>
              <div className="date float-right color_primary">
                {format(new Date(blog?.attributes?.publishedAt), "d MMM yyyy")}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default HomeBlog;
