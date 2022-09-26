import axios from "axios";
import qs from "qs";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create a context
export const BlogContext = createContext();

// create a provider
export const BlogProvider = ({ children }) => {
  // const [blogs, dispatch] = useReducer(blogReducer, []);
  const [blogs, setBlogs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [categoryLoaded, setCategoryLoaded] = useState(false);

  const [categoryBlog, setCategoryBlog] = useState([]);
  const [categoryBlogLoaded, setCategoryBlogLoaded] = useState(false);

  useEffect(() => {
    loadBlogs();
    fetchCategories();
  }, []);

  const loadBlogs = async () => {
    try {
      const response = await axios.get("/posts?populate=*");
      //   console.log(response?.data?.data, "loadBlogs response");

      const formattedBlogs = response?.data?.data.map((blog) => {
        const { author, comments, image, likes, tag, ...restData } =
          blog.attributes;
        return {
          id: blog.id,
          author: {
            id: author?.data?.id,
            ...author?.data?.attributes,
          },
          comments: comments?.data,
          image: image?.data?.attributes,
          ...restData,
        };
      });

      setBlogs(formattedBlogs);
      setLoaded(true);
    } catch (error) {
      console.log(error, "loadBlogs error");
      setLoaded(true);
    }
  };

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

      const response = await axios.get(`/categories?${query}`);
      // console.log(response?.data?.data, 'response');
      setCategories(response?.data?.data);
      setCategoryLoaded(true);
      
    } catch (error) {
      
      console.log(error, "fetchCategories error");
      setCategoryLoaded(true);
    }
  };

  const fetchBlogByCategoryID = async (id) => {

    try {
      const query = qs.stringify(
        {
          populate: ['posts', 'posts.image', 'posts.author', 'posts.comments']
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/categories/${id}?${query}`);

      const formattedData = response?.data?.data?.attributes?.posts?.data?.map((blog) => {
        const { author, comments, image, likes, tag, ...restData } =
          blog.attributes;
        return {
          id: blog.id,
          author: {
            id: author?.data?.id,
            ...author?.data?.attributes,
          },
          comments: comments?.data,
          image: image?.data?.attributes,
          ...restData,
        };
      });
      setCategoryBlog(formattedData);
      setCategoryBlogLoaded(true);
      
      // console.log(formattedData, 'formattedData');
      // console.log(response?.data?.data?.attributes?.posts?.data, 'fetchBlogByCategoryID response');
      // console.log(response?.data?.data, 'response?.data?');
      
    } catch (error) {
      setCategoryBlogLoaded(true);
      console.log(error, "fetchBlogByCategoryID error");
      
    }
  }



  const value = {
    loaded,
    blogs,
    categoryLoaded,
    categories,
    fetchBlogByCategoryID,
    categoryBlogLoaded,
    categoryBlog
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
