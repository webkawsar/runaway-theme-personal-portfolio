import React, { useContext } from "react";
import Typed from "react-typed";
import { BlogContext } from "../context/Blog.context";

const Intro = () => {
  const { myInfo} = useContext(BlogContext);
  const {fullName, professions, bio, cv_url } = myInfo.profile;
  const typedStrings = professions.map(profession => profession.name);
 
  const typedOptions = {
    stringsElement: null,
    typeSpeed: 50,
    startDelay: 500,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
    loopCount: 100,
    showCursor: false,
    cursorChar: "|",
    attr: null,
    contentType: "html",
  };


  return (
    <section
      id="main_banner"
      name="main_banner"
      className="banner_water_effect background3 overlay_one"
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-12 col-lg-12 home-content text-left">
            <div className="mainbanner_content">
              <span className="pb_5 banner_title color_white">
                I Am {fullName}!
              </span>
              <h1 className="cd-headline clip is-full-width text-uppercase mt-2 mb-3">
                <span className="color_white">I am a </span>
                <span className="color_default"><Typed strings={typedStrings} {...typedOptions} /></span>
              </h1>
              <p className="color_white mb_30">
                {bio}
              </p>
              <a target='__blank' className="btn btn-default" href={cv_url}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
