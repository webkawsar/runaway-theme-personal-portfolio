import axios from "axios";
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


  useEffect(() => {

    loadBlogs();

  }, [])


  const loadBlogs = async () => {
    try {
      const response = await axios.get("/posts?populate=*");
    //   console.log(response?.data?.data, "loadBlogs response");

      const formattedBlogs = response?.data?.data.map((blog) => {
        const {author, comments, image, likes, tag, ...restData} = blog.attributes;
        return {
            id: blog.id,
            author: {
                id: author?.data?.id,
                ...author?.data?.attributes
            },
            comments: comments?.data,
            image: image?.data?.attributes,
            ...restData
        }
      })

      setBlogs(formattedBlogs);
      setLoaded(true);

    } catch (error) {

      console.log(error, "loadBlogs error");
      setLoaded(true);
      
    }
  };


  const addContact = async (contact) => {
    try {
      const { image, ...restData } = contact;
      const formData = new FormData();
      formData.append("image", image[0], image[0]?.name);
      formData.append("data", JSON.stringify(restData));

      const response = await axiosPrivateInstance(token).post(
        "/contacts",
        formData
      );

      // dispatch({ type: ADD_CONTACT, payload: response?.data });

      // show flash message
      toast.success("Contact added successfully");

      // redirect to user
      navigate("/contacts");
    } catch (error) {
      console.log(error, "addContact error");
      toast.error(error?.response?.data?.error?.message);
    }
  };

  const updateContact = async (updatedContactValue, id) => {
    try {
      const response = await axiosPrivateInstance(token).put(
        `/contacts/${id}?populate=*`,
        {
          data: updatedContactValue,
        }
      );

      const updatedContact = formateContact(response?.data?.data);

      dispatch({ type: UPDATE_CONTACT, payload: updatedContact });

      // show flash message
      toast.success("Contact updated successfully");

      // redirect to user
      navigate(`/contacts/${updatedContact.id}`);
    } catch (error) {
      console.log(error?.response?.data?.error, "addContact error");
      toast.error(error?.response?.data?.error?.message);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await axiosPrivateInstance(token).delete(
        `/contacts/${id}`
      );
      dispatch({ type: DELETE_CONTACT, payload: response?.data?.data?.id });

      // show flash message
      toast.success("Contact delete successfully");

      // redirect to user
      navigate("/contacts");
    } catch (error) {
      console.log(error, "deleteContact error");
      toast.error(error?.response?.data?.error?.message);
    }
  };

  const value = {
    loaded,
    blogs,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
