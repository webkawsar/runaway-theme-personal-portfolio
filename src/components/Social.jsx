import React, { useContext } from "react";
import * as FaIcons from "react-icons/fa";
import { BlogContext } from "../context/Blog.context";

const Social = () => {
  const { socials } = useContext(BlogContext);

  
  return (
    <>
      <div className="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp">
        <h3 className="widget_title mb_30 text-capitalize">Follow Me</h3>
        {socials?.length ? (
          <div className="socal_media">
            <ul>
              {socials.map((social) => {
                const icon = social.icon;
                const DynamicIcon = FaIcons[icon];
                return (
                  <li key={social.id}>
                    <a href={social.link} target="__blank">
                      <DynamicIcon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div style={{ color: "red", textAlign: "center" }}>
            <h5>Socials is not available to show</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Social;
