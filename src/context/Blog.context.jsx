import axios from "axios";
import qs from "qs";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// create a context
export const BlogContext = createContext();

// create a provider
export const BlogProvider = ({ children }) => {
  
  // load loadMyProfile in mounting stage
  const [myInfo, setMyInfo] = useState({});
  const [myInfoLoaded, setMyInfoLoaded] = useState(false);

  // load all blogs
  const [blogs, setBlogs] = useState([]);
  const [blogsLoaded, setBlogsLoaded] = useState(false);
  const navigate = useNavigate();

  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [isComponentRender, setIsComponentRender] = useState(false);


  // category wise fetch posts data
  const [category, setCategory] = useState({});
  const [categoryLoaded, setCategoryLoaded] = useState(false);
  const [categoryPosts, setCategoryPosts] = useState([]);


  // load sidebar info
  const [socials, setSocials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tagsLoaded, setTagsLoaded] = useState(false);
  const [tags, setTags] = useState([]);

  // recent posts
  const [recentPosts, setRecentPosts] = useState([]);

  // pagination for blogs page
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  // pagination for category page
  const [catPageNumber, setCatPageNumber] = useState(1);


  useEffect(() => {
    
    loadHomeInfo();
    loadBlogs();
    loadSidebarInfo();
    // console.log('context loaded in first time');
    
  }, [isComponentRender, page, catPageNumber]);

  const loadHomeInfo = async () => {
    try {
      const query = qs.stringify(
        {
          populate: [
            "introSection",
            "introSection.introImage",
            "introSection.professions",
            "aboutSection",
            "aboutSection.introVideo",
            "aboutSection.roundImage",
            "skillSection",
            "skillSection.skills",
            "countupSection",
            "countupSection.factCounts",
            "serviceSection",
            "serviceSection.services",
            "portfolioSection",
            "portfolioSection.menus",
            "portfolioSection.projects",
            "portfolioSection.projects.image",
            "testimonialSection",
            "testimonialSection.clientsFeedback",
            "testimonialSection.clientsFeedback.image",
            "blogSection",
            "blogSection.posts",
            "blogSection.posts",
            "blogSection.posts.image",
            "blogSection.posts.author",
            "blogSection.posts.comments",
            "blogSection.posts.author.profileImage",
            "contactSection",
            "contactSection.socials",
            "introSection.logo",
          ],
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/home?${query}`);
      setMyInfo(response?.data?.data?.attributes);
      setMyInfoLoaded(true);
      
    } catch (error) {

      console.log(error, "loadMyProfile error");
      setMyInfoLoaded(true);
    }
  };

  const loadSidebarInfo = async () => {
    try {
      const query = qs.stringify(
        {
          populate: ['socials', 'categories', 'tags', 'categories.posts'],
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/static?${query}`);
      // console.log(response?.data?.data?.attributes, "loadSidebarInfo response");
      setSocials(response?.data?.data?.attributes?.socials);
      setCategories(response?.data?.data?.attributes?.categories?.data);
      setTags(response?.data?.data?.attributes?.tags?.data);
      
    } catch (error) {
      
      console.log(error, "loadSidebarInfo error");
    }
  };

  const loadBlogs = async () => {
    try {
      const query = qs.stringify(
        {
          populate: [
            "image",
            "author",
            "comments",
            "category",
            "tag",
            "author.socials",
            "author.profileImage",
          ],
          pagination: {
            page,
            pageSize: import.meta.env.VITE_PAGE_SIZE
          },
          sort: ['id:desc']
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      const response = await axios.get(`/posts?${query}`);
        // console.log(response?.data, "loadBlogs response");

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
      setPageCount(response?.data?.meta?.pagination?.pageCount);

    } catch (error) {
      
      console.log(error, "loadBlogs error");
      setBlogsLoaded(true);
    }
  };

  const fetchBlog = async (blogId) => {
    try {
      const query = qs.stringify(
        {
          populate: ["image", "author", "comments", "comments.user", "author.profileImage"],
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
        data: newComment,
      });

      // console.log(response?.data?.data, "response");
      setComments([...comments, response?.data?.data]);
      setIsComponentRender(!isComponentRender);
      
    } catch (error) {
      
      console.log(error, "createNewComment error");
    }
  };

  const fetchCategory = async (slug) => {
    try {
      const query = qs.stringify(
        {
          populate: ["posts", "posts.image", "posts.author", "posts.comments", 'posts.author.profileImage'],
          pagination: {
            page: catPageNumber,
            pageSize: import.meta.env.VITE_PAGE_SIZE
          }
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/categories/${slug}?${query}`);
      console.log(response?.data, 'fetchBlogsByCategory res');

      setCategory(response?.data);
      setCategoryLoaded(true);
      setCategoryPosts(response?.data?.posts);

    } catch (error) {
      
      console.log(error, "fetchBlogByCategoryID error");
      setCategoryLoaded(true);
    }
  };


  const loadRecentPosts = async () => {

    try {
      const query = qs.stringify(
        {
          populate: [
            "image",
            "author",
            "comments",
            "category",
            "tag",
            "author.socials",
            "author.profileImage",
          ],
          pagination: {
            page: 1,
            pageSize: import.meta.env.VITE_RECENT_POST_PAGE_SIZE
          },
          sort: ['id:desc']
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      const response = await axios.get(`/posts?${query}`);
        // console.log(response?.data, "loadBlogs response");

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

      setRecentPosts(formattedBlogs);

    } catch (error) {
      
      console.log(error, "loadBlogs error");
    }
  }


  const value = {
    loadSidebarInfo,
    myInfoLoaded,
    myInfo,
    blogsLoaded,
    blogs,
    blogLoaded,
    loadBlogs,
    blog,
    comments,
    fetchBlog,
    createNewComment,
    categories,
    categoryLoaded,
    categoryPosts,
    category,
    fetchCategory,
    tags,
    socials,
    page,
    pageCount,
    setPage,
    catPageNumber,
    setCatPageNumber,
    recentPosts,
    loadRecentPosts
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
