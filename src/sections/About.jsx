import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import Venobox from "venobox";

const About = () => {
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
                <span className="sub_title">
                  Interdum a etiam sagittis vehicula porta. Massa felis eros
                  quam blandit nulla dolor habitant. Ullamcorper quis ornare et
                  proin pellentesque.
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <div className="about_one">
          <div className="row">
            <Fade left>
              <div className="col-md-7 col-lg-7">
                <div className="myself color_secondery wow animated fadeInLeft">
                  <p>
                    Sodales iaculis est Scelerisque sociis magna dolor pulvinar
                    magnis. Varius praesent suscipit. Donec morbi feugiat
                    placerat gravida porttitor natoque nonummy parturient
                    posuere. Magnis suspendisse parturient. Magna ultricies
                    nostra nunc magna. Sodales etiam arcu suscipit, mollis.
                    Aenean tempor eu ipsum nisi sociosqu lorem hymenaeos sapien.
                    Aptent maecenas ac ante molestie habitant.
                  </p>

                  <p>
                    Duis vulputate nisi nam sem penatibus parturient volutpat
                    justo phasellus. Netus. Hac montes tempor lorem tempor
                    tincidunt vehicula velit. Tellus. className aenean leo elit
                    maecenas. Vehicula sagittis. Curae; eget lacus. Fames neque
                    diam elementum risus eleifend dui tortor netus turpis.
                  </p>
                </div>
                <div className="personal_info">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      <ul>
                        <li>
                          <span className="color_secondery">Name : </span>
                          Kawsar Ahmed
                        </li>
                        <li>
                          <span className="color_secondery">Email : </span>
                          kawsarahmed.dev@gmail.com
                        </li>
                        <li>
                          <span className="color_secondery">Phone : </span> +880
                          1715 103 606
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <ul>
                        <li>
                          <span className="color_secondery">
                            Date of Birth :{" "}
                          </span>
                          21 December 1995
                        </li>
                        <li>
                          <span className="color_secondery">
                            Blood Group :{" "}
                          </span>
                          AB+
                        </li>
                        <li>
                          <span className="color_secondery">Address : </span>
                          MoulviBazar, Sylhet, Bangladesh
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
                  <img src="/images/about/03.png" alt="image" />
                  <div className="iconround ">
                    <a
                      className="venobox round_shape"
                      href="https://www.youtube.com/watch?v=x1dnE0GzKVA&t=8s"
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
