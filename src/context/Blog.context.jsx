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

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [blogLoaded, setBlogLoaded] = useState(false);

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

  const fetchBlog = async (blogId) => {
    try {

      const query = qs.stringify({
        populate: ['image', 'author', 'comments', 'comments.user'],
      }, {
        encodeValuesOnly: true, // prettify URL
      });
      const response = await fetch(
        `http://localhost:1337/api/posts/${blogId}?${query}`
      );
      const data = await response.json();
   
      setBlog(data.data);
      setComments(data?.data?.attributes?.comments?.data);
      setBlogLoaded(true);
      
    } catch (error) {
      console.log(error, "error");
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
    fetchBlog,
    blog,
    comments,
    blogLoaded,
    categoryLoaded,
    categories,
    fetchBlogByCategoryID,
    categoryBlogLoaded,
    categoryBlog
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
