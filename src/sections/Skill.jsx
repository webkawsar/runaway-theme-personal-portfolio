import React, { useContext, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Fade } from "react-reveal";
import { BlogContext } from "../context/Blog.context";

const skillSets = [
  {
    id: 1,
    skillName: "javaScript",
    percent: 0,
  },
  {
    id: 2,
    skillName: "React",
    percent: 0,
  },
  {
    id: 3,
    skillName: "Node.js",
    percent: 0,
  },
  {
    id: 4,
    skillName: "MongoDB",
    percent: 0,
  },
  {
    id: 5,
    skillName: "Strapi",
    percent: 0,
  },
];

const Skill = () => {
  const [skills, setSkills] = useState(skillSets);
  const {myInfo} = useContext(BlogContext);
  const {intro, introDetails, skills: updatedSkills} = myInfo.skillSection;
  const [ref, inView ] = useInView();

 
  useEffect(() => {
    if (inView) {
      
     setSkills(updatedSkills);
    }
  }, [inView]);

  return (
    <section id="skill" name="skill" className="py_80 bg_secondery full_row" ref={ref}>
      <div className="container">
        <Fade bottom>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                <h2 className="title text-uppercase">
                  <span className="line_double mx-auto color_default">
                    skill
                  </span>
                  Design skill
                </h2>
                <span className="sub_title">
                 {intro}
                </span>
              </div>
            </div>
          </div>
        </Fade>
        <div className="my_skill">
          <div className="row">
            <Fade left>
              <div className="col-md-12 col-lg-6">
                <div className="about_myskill color_secondery wow animated slideInLeft">
                  <h2 className="color_primary">
                    Some talk about my professional design skill
                  </h2>
                  
                  <p className="pt_15 mb-5">
                    {introDetails}
                  </p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-12 col-lg-6">
                <div className="skill-progress wow animated slideInRight">
                  {skills.map((skill) => {
                    return (
                      <div key={skill.id} className="prgs-bar fact-counter">
                        <span>{skill.name}</span>
                        <div
                          className="progress count wow"
                          data-wow-duration="0ms"
                        >
                          <div className="skill-percent">
                            <span
                              className="count-num"
                              data-speed="3000"
                              data-stop={skill.percent}
                            >
                              {skill.percent}
                            </span>
                            %
                          </div>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={skill.percent}
                            aria-valuemax="100"
                            style={{ width: `${skill.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
