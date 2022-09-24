import React from "react";

const Social = () => {
  return (
    <>
      <div class="widget mb_60 d-inline-block p_30 bg_white full_row wow animated slideInUp">
        <h3 class="widget_title mb_30 text-capitalize">Follow Me</h3>
        <div class="socal_media">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Social;
