import React, { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import { Fade } from "react-reveal";
import { BlogContext } from "../context/Blog.context";

const Services = () => {
  const { homeInfo } = useContext(BlogContext);
  const { serviceIntro, services } = homeInfo.serviceSection;


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
                <span className="sub_title">{serviceIntro}</span>
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
                      <div key={service.idNo} className="col-md-6 col-lg-4">
                        <div className="service_two text-center pt_15 mb_30 wow animated slideInUp">
                          <div className="srv_item_number color_lightgray">
                            <strong>
                              {service.idNo < 10
                                ? `0${service.idNo}`
                                : service.idNo}
                              .
                            </strong>
                          </div>
                          <h3 className="p_20 text-uppercase color_primary">
                            {service.name}
                          </h3>
                          <div className="srv_icon color_white d-flex align-items-center justify-content-center">
                            <DynamicIcon size={40} />
                          </div>
                          <p>{service.intro}</p>
                        </div>
                      </div>
                    );
                  })}
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
