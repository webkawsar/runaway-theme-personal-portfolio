import React, { useContext, useEffect, useState } from "react";
import CountUp from "react-countup";
import * as FaIcons from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { BlogContext } from "../context/Blog.context";

const initialData = [
  {
    title: "Years of Experience",
    value: 0,
    duration: 0,
    id: 1,
  },
  {
    title: "Projects Done",
    value: 0,
    duration: 0,
    id: 2,
  },
  {
    title: "Happy Clients",
    value: 0,
    duration: 0,
    id: 3
  },
];

const ExperienceCountUp = () => {
  const { homeInfo } = useContext(BlogContext);
  const [counts, setCounts] = useState(initialData);
  const { factCounts } = homeInfo.countupSection;
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      setCounts(factCounts);
    }
  }, [inView]);

  return (
    <div
      className="experience background2 overlay_two py_60 full_row"
      ref={ref}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="fact-counter">
              <div className="row">
                {counts.map((counter) => {
                  let icon = counter.icon ? counter.icon : 'FaCertificate';
                  const DynamicIcon = FaIcons[icon];

                  return (
                    <div key={counter.id} className="col-md-4 col-lg-4">
                      <div
                        className="counter count wow text-center"
                        data-wow-duration="300ms"
                      >
                        <DynamicIcon size={40} color="white" />
                        <div className="counting_digit color_default mt_15">
                          <h2
                            className="count-num"
                            data-speed="3000"
                            data-stop="7"
                          >
                            <CountUp
                              end={counter.value}
                              duration={counter.duration}
                            />
                          </h2>
                          <span>+</span>
                        </div>
                        <h3 className="color_white mt_15">{counter.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCountUp;
