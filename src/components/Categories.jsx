import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/Blog.context";

const Categories = () => {
  const { categoryLoaded, categories } = useContext(BlogContext);

  return (
    <>
      {categoryLoaded ? (
        <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
          <h3 className="widget_title mb_30 text-capitalize">Category</h3>
          <div className="category_sidebar">
            <ul>
              {categories.map((category) => {
                return (
                  <li key={category?.id} className="category">
                    <Link to={`/categories/${category.id}`}>{category?.attributes?.categoryName}</Link>
                    <span>({category?.attributes?.posts?.data?.length})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div style={{color:'red', textAlign: 'center', marginTop: '100px'}}>
          <h3>Loaded...</h3>
        </div>
      )}
    </>
  );
};

export default Categories;
