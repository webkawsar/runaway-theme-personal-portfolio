import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";

const Categories = () => {
  const { categories } = useContext(BlogContext);
 

  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Category</h3>
        <div className="category_sidebar">
          {categories?.length ? (
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category?.id} className="category">
                    <Link to={`/categories/${category?.attributes?.slug}`}>
                      {category?.attributes?.name}
                    </Link>
                    <span>({category?.attributes?.posts?.data?.length})</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div style={{ color: "red", textAlign: "center" }}>
              <h4>Categories is not available to show</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
