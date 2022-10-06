import React, { useContext, useEffect, useRef } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { BlogContext } from "../../context/Blog.context";

const Header = () => {
  const {myInfo} = useContext(BlogContext);
  const elm = useRef();
  const { pathname } = useLocation();

  const handleScroll = () => {
    const scrolledValue = window.scrollY;
    
    // back to top handle
    if (scrolledValue >= 500) {
      document.querySelector("#scroll").classList.add("scrollVisible");
    } else {
      document.querySelector("#scroll").classList.remove("scrollVisible");
    }

    // navbar handle
    if (scrolledValue >= 100) {
      elm.current.classList.add("nav-scroll");
    } else {
      elm.current.classList.remove("nav-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNavigate = pathname === "/" || pathname === "/home";
  

  return (
    <header className="main_nav" ref={elm}>
      <div className="container">
        <nav
          id="navbar-example2"
          className="navbar navbar-expand-lg navbar-light w-100"
        >
          <Link className="navbar-brand" to="top" smooth={true}>
            <img className="nav-logo" src={myInfo?.introSection?.logo?.data?.attributes?.url} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="main_banner"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Home
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`main_banner`}
                  >
                    Home
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="about"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    About
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`about`}
                  >
                    About
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="skill"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Skill
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`skill`}
                  >
                    Skill
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="services"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Services
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`services`}
                  >
                    Services
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="portfolio"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Portfolio
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`portfolio`}
                  >
                    Portfolio
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="testimonial"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Testimonial
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`testimonial`}
                  >
                    Testimonial
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="blog"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Blog
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`blog`}
                  >
                    Blog
                  </RouterLink>
                )}
              </li>
              <li className="nav-item">
                {isNavigate ? (
                  <Link
                    className="nav-link"
                    to="contact"
                    smooth={true}
                    spy={true}
                    activeClass="active"
                  >
                    Contact
                  </Link>
                ) : (
                  <RouterLink
                    className="nav-link"
                    to="/"
                    state={`contact`}
                  >
                    Contact
                  </RouterLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
