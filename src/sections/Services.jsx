import React, { useContext } from "react";
// import { FaDesktop } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { Fade } from "react-reveal";
import { BlogContext } from "../context/Blog.context";

const Services = () => {
  const { myInfo } = useContext(BlogContext);
  const { serviceIntro, services } = myInfo.serviceSection;
  console.log(myInfo, "myInfo");
 
  

  return (
    <section id="services" name="services" className="py_80 full_row bg_white">
      <div className="container">
        <div className="row">
          <Fade bottom cascade>
            <div className="col-md-12 col-lg-12">
              <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                <h2 className="title text-uppercase">
                  <span className="line_double mx-auto color_default">
                    services
                  </span>
                  What i do
                </h2>
                <span className="sub_title">
                  Interdum a etiam sagittis vehicula porta. Massa felis eros
                  quam blandit nulla dolor habitant. Ullamcorper quis ornare et
                  proin pellentesque.
                </span>
              </div>
            </div>
          </Fade>
          <div className="services_item1">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <Fade bottom cascade>
                  {services.map((service) => {
                    
                    let icon = service.icon;
                    const DynamicIcon = FaIcons[icon];
                    
                    return (
                      <div className="col-md-6 col-lg-4">
                        <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                          <div className="srv_item_number color_lightgray">
                            <strong>{service.idNo < 10 ? `0${service.idNo}` : service.idNo}.</strong>
                          </div>
                          <h3 className="p_20 text-uppercase color_primary">
                            {service.name}
                          </h3>
                          <div className="srv_icon color_white d-flex align-items-center justify-content-center">
                            <DynamicIcon size={40} />
                          </div>
                          <p>
                            {service.intro}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  <div className="col-md-6 col-lg-4">
                    <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                      <div className="srv_item_number color_lightgray">
                        <strong>02.</strong>
                      </div>
                      <h3 className="p_20 text-uppercase color_primary">
                        Web Development
                      </h3>
                      <div className="srv_icon color_white">
                        <span className="flaticon-programming"></span>
                      </div>
                      <p>
                        Proin a ullamcorper et primis lobortis laoreet senectus.
                        Vitae dignissim sollicitudin eleifend cursus tempus
                        curabitur posuere nam arcu platea sodales.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                      <div className="srv_item_number color_lightgray">
                        <strong>03.</strong>
                      </div>
                      <h3 className="p_20 text-uppercase color_primary">
                        Wordpress
                      </h3>
                      <div className="srv_icon color_white">
                        <span className="flaticon-wordpress-logo"></span>
                      </div>
                      <p>
                        Proin a ullamcorper et primis lobortis laoreet senectus.
                        Vitae dignissim sollicitudin eleifend cursus tempus
                        curabitur posuere nam arcu platea sodales.
                      </p>
                    </div>
                  </div>
                </Fade>
                <Fade bottom cascade>
                  <div className="col-md-6 col-lg-4">
                    <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                      <div className="srv_item_number color_lightgray">
                        <strong>04.</strong>
                      </div>
                      <h3 className="p_20 text-uppercase color_primary">
                        Graghic Design
                      </h3>
                      <div className="srv_icon color_white">
                        <span className="flaticon-editor"></span>
                      </div>
                      <p>
                        Proin a ullamcorper et primis lobortis laoreet senectus.
                        Vitae dignissim sollicitudin eleifend cursus tempus
                        curabitur posuere nam arcu platea sodales.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                      <div className="srv_item_number color_lightgray">
                        <strong>05.</strong>
                      </div>
                      <h3 className="p_20 text-uppercase color_primary">
                        Branding
                      </h3>
                      <div className="srv_icon color_white">
                        <span className="flaticon-internet"></span>
                      </div>
                      <p>
                        Proin a ullamcorper et primis lobortis laoreet senectus.
                        Vitae dignissim sollicitudin eleifend cursus tempus
                        curabitur posuere nam arcu platea sodales.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                      <div className="srv_item_number color_lightgray">
                        <strong>06.</strong>
                      </div>
                      <h3 className="p_20 text-uppercase color_primary">
                        Opencart
                      </h3>
                      <div className="srv_icon color_white">
                        <span className="flaticon-shopping-cart"></span>
                      </div>
                      <p>
                        Proin a ullamcorper et primis lobortis laoreet senectus.
                        Vitae dignissim sollicitudin eleifend cursus tempus
                        curabitur posuere nam arcu platea sodales.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
