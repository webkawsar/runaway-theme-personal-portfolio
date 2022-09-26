import React, { useContext } from "react";
import { BlogContext } from "../context/Blog.context";
import Loader from "./Loader";

const TagsArchives = () => {
  const { loadedTags, tags } = useContext(BlogContext);

  return (
    <>
      {loadedTags ? (
        <div className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp">
          <h3 className="widget_title mb_30 text-capitalize">Archives</h3>
          <div className="tags">
            {tags.length ? (
              <ul>
                {tags.map((tag) => {
                  return (
                    <li key={tag.id} className="text-capitalize">
                      <a href="#">{tag?.attributes?.tagName}</a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div style={{ color: "red", textAlign: "center" }}>
                <h2>Tags is not available to show</h2>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader color="#36d7b7" />
      )}
    </>
  );
};

export default TagsArchives;
