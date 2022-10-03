import format from "date-fns/format";
import React, { useContext, useEffect } from "react";
import { Fade } from "react-reveal";
import Venobox from "venobox";
import { BlogContext } from "../context/Blog.context";

const About = () => {
  const { myInfo } = useContext(BlogContext);
  const {
    aboutIntro,
    aboutIntroDetails,
    fullName,
    phone_number,
    dob,
    blood_group,
    address,
    introVideo,
    roundImage: {
      formats: {
        small: { url },
      },
    },
  } = myInfo.profile;

  useEffect(() => {
    new Venobox({
      autoplay: false,
      spinner: "circle-fade",
    });
  }, []);

  return (
    <section id="about" name="about" className="py_80 full_row bg_white">
      <div className="container">
        <Fade bottom>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                <h2 className="title text-uppercase">
                  <span className="line_double mx-auto color_default">
                    about
                  </span>
                  about myself
                </h2>
                <span className="sub_title">{aboutIntro}</span>
              </div>
            </div>
          </div>
        </Fade>
        <div className="about_one">
          <div className="row d-flex align-items-center">
            <Fade left>
              <div className="col-md-7 col-lg-7">
                <div className="myself color_secondery wow animated fadeInLeft">
                  <p>{aboutIntroDetails}</p>
                </div>
                <div className="personal_info">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <ul>
                        <li>
                          <span className="color_secondery">Name : </span>
                          {fullName}
                        </li>
                        <li>
                          <span className="color_secondery">Email : </span>
                          {myInfo?.email}
                        </li>
                        <li>
                          <span className="color_secondery">Phone : </span> {phone_number}
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <ul>
                        <li>
                          <span className="color_secondery">
                            Date of Birth :{" "}
                          </span>
                          {
                            format(new Date(dob), 'dd MMM yyyy')
                          }
                        </li>
                        <li>
                          <span className="color_secondery">
                            Blood Group :{" "}
                          </span>
                          {blood_group}
                        </li>
                        <li>
                          <span className="color_secondery">Address : </span>
                          {address}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-5 col-lg-5">
                <div className="profile_img personal_video wow animated fadeInRight">
                  {/* <img src="/images/about/03.png" alt="image" /> */}
                  <img src={url} alt="image" />
                  <div className="iconround ">
                    <a
                      className="venobox round_shape"
                      href={introVideo?.url}
                      title="Runaway - Personal Portfolio"
                      data-vbtype="video"
                      data-maxwidth="600px"
                    >
                      <i className="fa fa-play" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="loader">
                    <div className="loader-inner ball-scale-multiple">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
