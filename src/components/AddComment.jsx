import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BlogContext } from "../context/Blog.context";

const schema = yup
  .object({
    name: yup.string().required("Your name is required"),
    email: yup.string().email().required("Email is required"),
    text: yup.string().required("Comment text is required"),
  })
  .required();

const AddComment = ({ blogId }) => {
  const { createNewComment } = useContext(BlogContext);

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    
    const modifiedData = { ...data, blog: blogId };
    createNewComment(modifiedData);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
    
      resetField('name');
      resetField('email');
      resetField('text');
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <div className="replay mt_60 mb_30">
        <h4 className="text-uppercase color_primary mb_30">Leave A Replay</h4>
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
                <div className="invalid-feedback">{errors?.name?.message}</div>
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
                <div className="invalid-feedback">{errors?.email?.message}</div>
              )}
            </div>
            <div className="col-md-12">
              <textarea
                className={`form-control ${
                  errors?.text?.message ? "is-invalid" : ""
                }`}
                name="author_comments"
                rows="7"
                placeholder="Type Comments..."
                {...register("text")}
              ></textarea>
              {errors?.text?.message && (
                <div className="invalid-feedback">{errors?.text?.message}</div>
              )}
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                name="submit"
                className="btn btn-default"
                disabled={isSubmitting ? true : false}
              >
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddComment;
