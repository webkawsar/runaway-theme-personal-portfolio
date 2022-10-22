import axios from "axios";
import qs from "qs";
import { createContext, useEffect, useState } from "react";

// create a context
export const BlogContext = createContext();

// create a provider
export const BlogProvider = ({ children }) => {
  
  // load home info in mounting stage
  const [homeInfoLoaded, setHomeInfoLoaded] = useState(false);
  const [homeInfo, setHomeInfo] = useState({});

  // load all blogs
  const [blogsLoaded, setBlogsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  // pagination for blogs page
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);

  // load sidebar info
  const [socials, setSocials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tagsLoaded, setTagsLoaded] = useState(false);
  const [tags, setTags] = useState([]);
  // recent posts
  const [recentPosts, setRecentPosts] = useState([]);


  // load single blog data
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [isComponentRender, setIsComponentRender] = useState(false);

  // category wise fetch posts data
  const [categoryLoaded, setCategoryLoaded] = useState(false);
  const [category, setCategory] = useState({});
  const [categoryBlogs, setCategoryBlogs] = useState([]);
  // pagination for category page
  const [catPageNumber, setCatPageNumber] = useState(1);

  // fetch data by tag 
  const [tagLoaded, setTagLoaded] = useState(false);
  const [tag, setTag] = useState({});
  const [tagBlogs, setTagBlogs] = useState([]);
  // pagination for tag page
  const [tagPageNumber, setTagPageNumber] = useState(1);




  useEffect(() => {
    
    loadHomeInfo();
    loadBlogs();
    loadSidebarInfo();
    // console.log('context loaded in first time');
    
  }, [isComponentRender, page, catPageNumber, tagPageNumber]);




  // const homeQuery = qs.stringify(
  //   {
  //     populate: [
  //       "introSection",
  //       "introSection.introImage",
  //       "introSection.professions",
  //       "aboutSection",
  //       "aboutSection.introVideo",
  //       "aboutSection.roundImage",
  //       "skillSection",
  //       "skillSection.skills",
  //       "countupSection",
  //       "countupSection.factCounts",
  //       "serviceSection",
  //       "serviceSection.services",
  //       "portfolioSection",
  //       "portfolioSection.menus",
  //       "portfolioSection.projects",
  //       "portfolioSection.projects.image",
  //       "testimonialSection",
  //       "testimonialSection.clientsFeedback",
  //       "testimonialSection.clientsFeedback.image",
  //       "blogSection",
  //       "blogSection.blogs",
  //       "blogSection.blogs",
  //       "blogSection.blogs.image",
  //       "blogSection.blogs.author",
  //       "blogSection.blogs.comments",
  //       "blogSection.blogs.author.profileImage",
  //       "contactSection",
  //       "contactSection.socials",
  //       "introSection.logo",
  //     ],
  //   },
  //   {
  //     encodeValuesOnly: true, // prettify URL
  //   }
  // );
  
  // const { response, loading, error } = useAxios({
  //   method: 'GET',
  //   url: `/home?${homeQuery}`,
  //   headers: { // no need to stringify
  //     accept: '*/*'
  //   }
  // });

  // console.log(response, 'response');


  const createRepliedComment = async (newComment) => {
    try {
      const response = await axios.post("/replied-comments?populate=*", {
        data: newComment,
      });

      // console.log(response?.data, "createRepliedComment response");
      // setIsComponentRender(!isComponentRender);
      
    } catch (error) {
      
      console.log(error, "createRepliedComment error");
    }
  };

  
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
            "blogSection.blogs",
            "blogSection.blogs",
            "blogSection.blogs.image",
            "blogSection.blogs.author",
            "blogSection.blogs.comments",
            "blogSection.blogs.author.profileImage",
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
      // console.log(response.data, 'loadHomeInfo res');
      
      setHomeInfo(response?.data?.data?.attributes);
      setHomeInfoLoaded(true);
      
    } catch (error) {

      console.log(error, "loadMyProfile error");
      setHomeInfoLoaded(true);
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
      const response = await axios.get(`/blogs?${query}`);
      // console.log(response?.data, "loadBlogs response");

      setBlogs(response?.data?.data);
      setBlogsLoaded(true);
      setPageCount(response?.data?.meta?.pagination?.pageCount);

    } catch (error) {
      
      console.log(error, "loadBlogs error");
      setBlogsLoaded(true);
    }
  };
  
  const loadSidebarInfo = async () => {
    try {
      const query = qs.stringify(
        {
          populate: ['socials', 'categories', 'tags', 'categories.blogs'],
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

  const fetchBlog = async (slug) => {
    try {
      const query = qs.stringify(
        {
          populate: ["image", "author", "comments", "comments.replied_comments", "author.profileImage"],
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );
      
      const response = await axios.get(`/blogs/${slug}?${query}`);
      // console.log(response.data, 'fetchBlog response');

      setBlog(response?.data);
      setComments(response?.data?.comments);
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

      // console.log(response?.data, "createNewComment response");
      setComments([...comments, {...response?.data?.data?.attributes, id: response?.data?.data?.id}]);
      setIsComponentRender(!isComponentRender);
      
    } catch (error) {
      
      console.log(error, "createNewComment error");
    }
  };

  const fetchCategory = async (slug) => {
    try {
      const query = qs.stringify(
        {
          populate: ["blogs", "blogs.image", "blogs.author", "blogs.comments", 'blogs.author.profileImage'],
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
      // console.log(response?.data, 'fetchCategory res');

      setCategory(response?.data);
      setCategoryBlogs(response?.data?.posts);
      setCategoryLoaded(true);

    } catch (error) {
      
      console.log(error, "fetchCategory error");
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
      const response = await axios.get(`/blogs?${query}`);
        // console.log(response?.data, "loadRecentPosts response");

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
      
      console.log(error, "loadRecentPosts error");
    }
  }

  const fetchBlogsByTag = async (slug) => {

    try {
      const query = qs.stringify(
        {
          populate:  ["blogs", "blogs.image", "blogs.author", "blogs.comments", 'blogs.author.profileImage'],
          pagination: {
            page: tagPageNumber,
            pageSize: import.meta.env.VITE_PAGE_SIZE
          }
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      );

      const response = await axios.get(`/tags/${slug}?${query}`);
      // console.log(response?.data, 'fetchBlogsByTag res');

      setTag(response?.data);
      setTagBlogs(response?.data?.blogs);
      setTagLoaded(true);

    } catch (error) {
      
      console.log(error, "fetchBlogsByTag error");
      setTagLoaded(true);
    }
  }


  const value = {
    homeInfoLoaded,
    homeInfo,
    blogsLoaded,
    blogs,
    page,
    pageCount,
    setPage,
    socials,
    categories,
    loadRecentPosts,
    recentPosts,
    tags,
    fetchBlog,
    blogLoaded,
    blog,
    comments,
    createNewComment,
    createRepliedComment,
    fetchCategory,
    categoryLoaded,
    category,
    categoryBlogs,
    catPageNumber,
    setCatPageNumber,
    fetchBlogsByTag,
    tagLoaded,
    tag,
    tagBlogs,
    tagPageNumber,
    setTagPageNumber
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
