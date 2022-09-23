import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Your name is required"),
    email: yup.string().email().required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <section id="contact" name="contact" className="py_80 full_row bg_white">
      <div className="container">
        <div className="row">
          <Fade bottom>
            <div className="col-md-12 col-lg-12">
              <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                <h2 className="title text-uppercase">
                  <span className="line_double mx-auto color_default">
                    contact
                  </span>
                  Get In Touch
                </h2>
                <span className="sub_title">
                  Interdum a etiam sagittis vehicula porta. Massa felis eros
                  quam blandit nulla dolor habitant. Ullamcorper quis ornare et
                  proin pellentesque.
                </span>
              </div>
            </div>
          </Fade>
          <div className="col-md-12 col-lg-12">
            <div className="row">
              <Fade left>
                <div className="col-md-4 col-lg-4">
                  <div className="contact_info wow animated fadeInLeft">
                    <ul>
                      <li>
                        <div className="contact_text">
                          <h6 className="font-weight-bold color_primary">
                            Email
                          </h6>
                          <span className="color_secondery">
                            kawsarahmed.dev@gmail.com
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="contact_text">
                          <h6 className="font-weight-bold color_primary">
                            Phone
                          </h6>
                          <span className="color_secondery">
                            +880 1715 103 606
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="contact_text">
                          <h6 className="font-weight-bold color_primary">
                            Address
                          </h6>
                          <span className="color_secondery">
                            MoulviBazar, Sylhet, Bangladesh
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="contact_text">
                          <h6 className="font-weight-bold color_primary">
                            Website
                          </h6>
                          <span className="color_secondery">
                            kawsar-ahmed.web.app
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="socal_media_2 mt_15 d-inline-block">
                    <ul>
                      <li>
                        <a href="https://web.facebook.com/web.kawsarahmed">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="col-md-8 col-lg-8">
                  <form
                    className="form contact_message"
                    id="contact-form"
                    action="#"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="row">
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            className={`form-control ${
                              errors?.name?.message ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            {...register("name")}
                          />

                          {errors?.name?.message && (
                            <div className="invalid-feedback">
                              {errors?.name?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6">
                        <div className="form-group">
                          <input
                            className={`form-control ${
                              errors?.email?.message ? "is-invalid" : ""
                            }`}
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            {...register("email")}
                          />
                          {errors?.email?.message && (
                            <div className="invalid-feedback">
                              {errors?.email?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <input
                            className={`form-control ${
                              errors?.subject?.message ? "is-invalid" : ""
                            }`}
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            {...register("subject")}
                          />
                          {errors?.subject?.message && (
                            <div className="invalid-feedback">
                              {errors?.subject?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <textarea
                            className={`form-control ${
                              errors?.message?.message ? "is-invalid" : ""
                            }`}
                            name="message"
                            rows="7"
                            placeholder="Message"
                            {...register("message")}
                          ></textarea>
                          {errors?.message?.message && (
                            <div className="invalid-feedback">
                              {errors?.message?.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                          <input
                            className="btn btn-default"
                            id="send"
                            value="Send Massage"
                            type="submit"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-12">
                        <div className="error-handel">
                          <div id="success">
                            Your email sent Successfully, Thank you.
                          </div>
                          <div id="error">
                            Error occurred while sending email. Please try again
                            later.
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
