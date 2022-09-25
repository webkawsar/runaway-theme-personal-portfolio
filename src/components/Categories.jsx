import qs from "qs";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const query = qs.stringify(
        {
          populate: "*",
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await fetch(
        `http://localhost:1337/api/categories?${query}`
      );
      const data = await response.json();
      // console.log(data?.data, "data");
      setCategories(data.data);

      // setBlog(data.data);
      // setComments(data?.data?.attributes?.comments?.data);
      // setLoaded(true);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 primary_link bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Category</h3>
        <div className="category_sidebar">
          <ul>
            {categories.map((category) => {
              return (
                <li key={category?.id} className="category">
                  <a href="#">{category?.attributes?.categoryName}</a>
                  <span>({category?.attributes?.posts?.data?.length})</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
