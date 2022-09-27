import { format } from "date-fns";
import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, author, description, image, publishedAt, comments } = blog;

  // console.log(blog, 'blog');
  return (
    <>
      <Fade bottom>
        <div key={id} className="col-md-12 col-lg-4">
          <div className="blog_item">
            <div className="comments">
              <i className="fa fa-comment" aria-hidden="true"></i>
              <span className="color_white">{comments.length}</span>
            </div>
            <div className="blog_img overlay_one">
              <img
                src={`${
                  image?.formats?.large?.url
                    ? image?.formats?.large?.url
                    : image?.formats?.thumbnail?.url
                }`}
                alt="image"
              />
            </div>
            <div className="blog_content bg_white color_secondery">
              <div className="blog_title">
                <Link className="color_primary" to={`/blogs/${id}`}>
                  <h5>{title}</h5>
                </Link>
              </div>
              <p className="mt_15 mb_30">{description.slice(0, 260)}</p>

              <div className="admin">
                <img src="/images/about/02.jpg" alt="image" />
                <span className="color_white">By - {author?.username}</span>
              </div>
              <div className="date float-right color_primary">
                {format(new Date(publishedAt), "d MMM yyyy")}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Blog;
