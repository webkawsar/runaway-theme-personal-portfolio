import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ExperienceCountUp = () => {
  const [counts, setCounts] = useState([
    {
      title: "Years of Experience",
      value: 0,
      duration: 3
    },
    {
      title: "Projects Done",
      value: 0,
      duration: 4
    },
    {
      title: "Happy Clients",
      value: 0,
      duration: 4
    },
  ]);

  // const [counts, setCounts] = useState([0, 0, 0])

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setCounts([
        {
          title: "Years of Experience",
          value: 6,
          duration: 3
        },
        {
          title: "Projects Done",
          value: 100,
          duration: 4
        },
        {
          title: "Happy Clients",
          value: 27,
          duration: 4
        },
      ]);
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
                  return (
                    <div className="col-md-4 col-lg-4">
                      <div
                        className="counter count wow text-center"
                        data-wow-duration="300ms"
                      >
                        <span className="flaticon-man-working-on-a-laptop-from-side-view"></span>
                        <div className="counting_digit color_default mt_15">
                          <h2
                            className="count-num"
                            data-speed="3000"
                            data-stop="7"
                          >
                            <CountUp end={counter.value} duration={counter.duration} />
                          </h2>
                          <span>+</span>
                        </div>
                        <h3 className="color_white mt_15">
                          {counter.title}
                        </h3>
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
