import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";

const Tags = () => {
  const { tags } = useContext(BlogContext);

  
  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Tags</h3>
        <div className="tags">
          {tags.length ? (
            <ul>
              {tags.map((tag) => {
                return (
                  <li key={tag.id} className="text-capitalize">
                    <Link to={`/tags/${tag.attributes?.slug}`}>{tag?.attributes?.name}</Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div style={{ color: "red", textAlign: "center" }}>
              <h4>Tags is not available to show</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tags;
