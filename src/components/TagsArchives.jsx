import qs from "qs";
import React, { useEffect, useState } from "react";

const TagsArchives = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const query = qs.stringify(
        {
          populate: "*",
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await fetch(`http://localhost:1337/api/tags?${query}`);
      const data = await response.json();
      console.log(data?.data, "tags data");
      setTags(data.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Archives</h3>
        <div className="tags">
          <ul>
            {tags.map((tag) => {
              return (
                <li key={tag.id} className='text-capitalize'>
                  <a href="#">{tag?.attributes?.tagName}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TagsArchives;
