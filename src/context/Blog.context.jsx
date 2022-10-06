import axios from "axios";
import qs from "qs";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create a context
export const BlogContext = createContext();

// create a provider
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoaded, setBlogsLoaded] = useState(false);
  const navigate = useNavigate();

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [isComponentRender, setIsComponentRender] = useState(false);

  const [categories, setCategories] = useState([]);
  const [categoryLoaded, setCategoryLoaded] = useState(false);

  const [categoryBlog, setCategoryBlog] = useState([]);
  const [categoryBlogLoaded, setCategoryBlogLoaded] = useState(false);

  const [tags, setTags] = useState([]);
  const [tagsLoaded, setTagsLoaded] = useState(false);


  useEffect(() => {
    loadBlogs();
    fetchCategories();
    fetchTags();
    loadMyProfile();
    
    // console.log('context loaded in first time');
    
  }, [isComponentRender]);


  const [myInfo, setMyInfo] = useState({});
  const [myInfoLoaded, setMyInfoLoaded] = useState(false);

  const loadMyProfile = async () => {
    try {

      const query = qs.stringify(
        {
          populate: ["introSection", 'introSection.introImage', 'introSection.professions', 'aboutSection', 'aboutSection.introVideo', 'aboutSection.roundImage', 'skillSection', 'skillSection.skills', 'countupSection', 'countupSection.factCounts', 'serviceSection', 'serviceSection.services', 'portfolioSection', 'portfolioSection.menus', 'portfolioSection.projects', 'portfolioSection.projects.image', 'testimonialSection', 'testimonialSection.clientsFeedback', 'testimonialSection.clientsFeedback.image', 'blogSection', 'blogSection.posts', 'blogSection.posts', 'blogSection.posts.image', 'blogSection.posts.author', 'blogSection.posts.comments', 'blogSection.posts.author.profileImage', 'contactSection', 'contactSection.socials'],
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/home?${query}`);
      // console.log(response?.data?.data?.attributes, 'response');
      setMyInfo(response?.data?.data?.attributes);
      setMyInfoLoaded(true);
      
    } catch (error) {
      
      console.log(error, 'error');
      setMyInfoLoaded(true);
    }
  }



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
      setBlogsLoaded(true);
      
    } catch (error) {
      
      console.log(error, "loadBlogs error");
      setBlogsLoaded(true);
    }
  };

  const fetchBlog = async (blogId) => {
    try {
      const query = qs.stringify(
        {
          populate: ["image", "author", "comments", "comments.user"],
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      const response = await axios.get(`/posts/${blogId}?${query}`);

      setBlog(response?.data?.data);
      setComments(response?.data?.data?.attributes?.comments?.data);
      setBlogLoaded(true);

    } catch (error) {
      console.log(error, "fetchBlog error");
      setBlogLoaded(true);
    }
  };

  const createNewComment = async (newComment) => {
    try {
      const response = await axios.post("/comments?populate=*", {
        data: newComment
      });
   
      // console.log(response?.data?.data, "response");
      setComments([...comments, response?.data?.data]);
      setIsComponentRender(!isComponentRender);

    } catch (error) {
      console.log(error, "createNewComment error");
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
          populate: ["posts", "posts.image", "posts.author", "posts.comments"],
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/categories/${id}?${query}`);

      const formattedData = response?.data?.data?.attributes?.posts?.data?.map(
        (blog) => {
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
        }
      );
      setCategoryBlog(formattedData);
      setCategoryBlogLoaded(true);

    } catch (error) {
      
      console.log(error, "fetchBlogByCategoryID error");
      setCategoryBlogLoaded(true);
    }
  };

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

      const response = await axios.get(`/tags?${query}`);

      setTags(response?.data?.data);
      setTagsLoaded(true);

    } catch (error) {
      
      console.log(error, "fetchTags error");
      setTagsLoaded(true);
    }
  };


 

  const value = {
    myInfoLoaded,
    myInfo,
    blogsLoaded,
    blogs,
    blogLoaded,
    blog,
    comments,
    fetchBlog,
    createNewComment,
    categoryLoaded,
    categories,
    fetchBlogByCategoryID,
    categoryBlogLoaded,
    categoryBlog,
    tags,
    tagsLoaded,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
