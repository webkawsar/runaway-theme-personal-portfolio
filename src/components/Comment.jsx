import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Your name is required"),
    email: yup.string().email().required("Email is required"),
    text: yup.string().required("Comment text is required"),
  })
  .required();

const Comment = ({ comment }) => {
  const [repliedComments, setRepliedComments] = useState(
    comment.replied_comments
  );
  const [showForm, setShowForm] = useState(false);
  //   console.log(comment.replied_comments, 'replied_comments');

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const createRepliedComment = async (newComment) => {
    try {
      const response = await axios.post("/replied-comments?populate=*", {
        data: newComment,
      });

      //   console.log(response?.data, "createRepliedComment response");
      setRepliedComments([
        ...repliedComments,
        { ...response?.data?.data?.attributes, id: response?.data?.data?.id },
      ]);
      setShowForm(false);
      
      // show message
      toast.success('Replied comment successfully');
            
    } catch (error) {
      console.log(error, "createRepliedComment error");

      toast.error('Server Error!');
    }
  };

  const onSubmit = async (data) => {
    const modifiedData = { ...data, comment: comment.id };
    createRepliedComment(modifiedData);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      resetField("name");
      resetField("email");
      resetField("text");
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <li className="mb_20">
        <div className="comment_description bg_white p_20">
          <div className="author_img">
            <img
              src="https://res.cloudinary.com/dqu7xtx64/image/upload/v1664089025/user_avatar_9871a28f94.png?updated_at=2022-09-25T06:57:07.024Z"
              alt="images"
            />
          </div>
          <div className="author_text">
            <div className="author_info">
              <h5 className="author_name color_primary">{comment.name}</h5>
              <span>
                {comment?.publishedAt &&
                  format(new Date(comment?.publishedAt), "d MMM yyyy")}
              </span>
            </div>
            <div>
              <p>{comment.text}</p>
              <span
                className="btn btn_info mt_15"
                onClick={() => setShowForm(true)}
              >
                Replay
              </span>
            </div>
          </div>
        </div>
      </li>
      {repliedComments.map((repliedComment) => {
        return (
          <li key={repliedComment.id} className="mb_20 replied">
            <div className="comment_description bg_white p_20">
              <div className="author_img">
                <img
                  src="https://res.cloudinary.com/dqu7xtx64/image/upload/v1664089025/user_avatar_9871a28f94.png?updated_at=2022-09-25T06:57:07.024Z"
                  alt="images"
                />
              </div>
              <div className="author_text">
                <div className="author_info">
                  <h5 className="author_name color_primary">
                    {repliedComment?.name}
                  </h5>
                  <span>
                    {repliedComment?.publishedAt &&
                      format(
                        new Date(repliedComment?.publishedAt),
                        "d MMM yyyy"
                      )}
                  </span>
                </div>
                <div>
                  <p>{repliedComment?.text}</p>
                  <span className="btn btn_info mt_15">Replay</span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
      {showForm && (
        <li className="custom_replied_block">
          <div className="comment_description replied ">
            <form className="reply_form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <input
                    className={`form-control ${
                      errors?.name?.message ? "is-invalid" : ""
                    }`}
                    name="author_name"
                    type="text"
                    placeholder="Your Name*"
                    {...register("name")}
                  />
                  {errors?.name?.message && (
                    <div className="invalid-feedback">
                      {errors?.name?.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-lg-6">
                  <input
                    className={`form-control ${
                      errors?.email?.message ? "is-invalid" : ""
                    }`}
                    name="author_email"
                    type="email"
                    placeholder="Email Address*"
                    {...register("email")}
                  />
                  {errors?.email?.message && (
                    <div className="invalid-feedback">
                      {errors?.email?.message}
                    </div>
                  )}
                </div>
                <div className="col-md-12">
                  <textarea
                    className={`form-control ${
                      errors?.text?.message ? "is-invalid" : ""
                    }`}
                    name="author_comments"
                    rows="3"
                    placeholder="Type Comments..."
                    {...register("text")}
                  ></textarea>
                  {errors?.text?.message && (
                    <div className="invalid-feedback">
                      {errors?.text?.message}
                    </div>
                  )}
                </div>
                <div className="col-md-12">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-default"
                    disabled={isSubmitting ? true : false}
                  >
                    Replied comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
      )}
    </div>
  );
};

export default Comment;
