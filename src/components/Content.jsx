import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";

const Content = () => {
  const {blogId} = useParams();

  useEffect(() => {

    

  }, [])
  return (
    <>
      <section className="blog_area py_80 bg_secondery full_row">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8">
              <div className="blog_details">
                <div className="blog_img overlay_one wow animated slideInUp">
                  <img src="/images/blog/01.jpg" alt="image" />
                </div>
                <div className="blog_content bg_white">
                  <div className="blog_title mb_20 color_primary">
                    <h5>
                      In faucibus donec varius. Potenti velit nam pede justo.
                      Condimentum interdum quisque aenean ligula dapibus amet
                      semper nisi tempor cras.
                    </h5>
                  </div>
                  <div className="admin">
                    <img src="/images/about/02.jpg" alt="image" />
                    <span className="color_primary">By - Rockstar Jack</span>
                  </div>
                  <div className="date color_primary float-left">20 Jan 2019</div>
                  <div className="comments">
                    <i className="fa fa-comment" aria-hidden="true"></i>
                    <span className="color_primary">12</span>
                  </div>
                  <div className="single_blog_content d-inline-block mt_30 color_secondery wow animated slideInUp">
                    <p>
                      Dictumst augue tortor laoreet. Commodo ad laoreet
                      parturient magna tristique elementum facilisis sodales
                      velit morbi nostra iaculis, fermentum bibendum. Congue per
                      Ornare in placerat. phasellus dapibus ullamcorper dolor
                      pellentesque aliquam nibh ultrices aliquam netus
                      consectetuer Etiam tempus nam ridiculus fringilla
                      elementum pharetra tempor torquent purus purus. Neque.
                      Lorem. Eget montes pretium donec mus tincidunt venenatis
                      interdum.
                    </p>
                    <p className="mt_15 wow animated slideInUp">
                      Sit lacinia dolor arcu vel quisque neque felis proin ante,
                      nisl amet vitae nullam placerat elementum varius cum
                      viverra, vel mattis elit praesent iaculis sollicitudin
                      bibendum est consequat tempus hac ante pulvinar leo
                      suspendisse tellus dictum. Morbi, venenatis ullamcorper.
                    </p>
                    <blockquote className="color_primary mt_15 wow animated slideInUp">
                      <sup>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </sup>{" "}
                      Netus vestibulum nostra facilisi tellus. Id taciti dapibus
                      Platea tincidunt quis sollicitudin dignissim penatibus
                      orci primis cum ullamcorper euismod, potenti tincidunt
                      praesent ipsum aug. Ullamcorper cras vestibulum urna
                      inceptos Neque curae; feugiat mattis auctor nec tortor
                      faucibus. Elit vehicula nibh dolor litora. Placerat ad
                      mauris. Dapibus hymenaeos. Potenti.
                      <sup>
                        <i className="fa fa-quote-right" aria-hidden="true"></i>
                      </sup>
                    </blockquote>
                    <p className="mt_15">
                      Ante nascetur className fames leo nisi arcu Fringilla sapien
                      Netus libero nisl lacinia id urna commodo tellus volutpat.
                      Integer ridiculus consectetuer ut lacus. Platea ante at
                      dis cras sed pharetra dictumst dui tellus condimentum duis
                      pellentesque. Cubilia scelerisque nascetur nostra proin
                      bibendum inceptos. Inceptos fringilla malesuada ut feugiat
                      mus phasellus Nunc cubilia. Turpis tristique luctus libero
                      est tortor nostra orci commodo nullam rhoncus Lacus ante
                      morbi. Ante vitae nullam nisi.
                    </p>
                  </div>
                  <div className="share_post mt_30 wow animated slideInUp">
                    <h4 className="float-left mr_20">Share : </h4>
                    <div className="socal_media_2 d-inline-block">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Comments />

                <AddComment />
              </div>
            </div>
            <BlogSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
