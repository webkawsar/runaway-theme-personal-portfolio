import React, { useContext, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Rating from "react-rating";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import { BlogContext } from "../context/Blog.context";

const Testimonial = () => {
  const { homeInfo } = useContext(BlogContext);
  const { testimonialIntro, clientsFeedback } = homeInfo.testimonialSection;

  const ref = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const previous = () => {
    ref.current.slickPrev();
  };

  const next = () => {
    ref.current.slickNext();
  };

  return (
    <section
      id="testimonial"
      name="testimonial"
      className="py_80 full_row bg_white"
    >
      <div className="container">
        <div className="row">
          <Fade bottom cascade>
            <div className="col-md-12 col-lg-12">
              <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                <h2 className="title text-uppercase">
                  <span className="line_double mx-auto color_default">
                    testimonial
                  </span>
                  What Client Say’s
                </h2>
                <span className="sub_title">{testimonialIntro}</span>
              </div>
            </div>
          </Fade>
          <div className="col-md-12 col-lg-12">
            <div className="testimonial_item owl-carousel">
              <Slider {...settings} ref={ref}>
                {clientsFeedback.map((feedback) => {
                  return (
                    <Fade bottom key={feedback.id}>
                      <div className="member_feedback p_30 color_secondery">
                        <div className="client_img">
                          <img
                            src={feedback?.image?.data?.attributes?.url}
                            alt="Client Image"
                          />
                        </div>
                        <div className="star d-inline-block mt_30 color_default">
                          <Rating
                            readonly
                            initialRating={feedback.rating}
                            fullSymbol="fa fa-star fa-2x"
                            emptySymbol="fa fa-star-o fa-2x"
                          />
                        </div>
                        <h5 className="color_primary mb_15">
                          {feedback.fullName}
                        </h5>
                        <p>{feedback.message}</p>
                      </div>
                    </Fade>
                  );
                })}
              </Slider>

              <div
                className="testimonial_prev_next"
                style={{ textAlign: "center" }}
              >
                <button className="testimonial_prev" onClick={previous}>
                  <FaArrowLeft />
                </button>
                <button className="testimonial_next" onClick={next}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
