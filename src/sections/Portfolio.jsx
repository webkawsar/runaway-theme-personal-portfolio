import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import VenoBox from "venobox";
import { BlogContext } from "../context/Blog.context";

const Portfolio = () => {
  const { homeInfo } = useContext(BlogContext);
  const {
    portfolioIntro,
    menus: menusFromDB,
    projects: projectsDataFromDB,
  } = homeInfo.portfolioSection;
  const [menus, setMenus] = useState(menusFromDB);
  const [projects, setProjects] = useState(projectsDataFromDB);

  const handleClick = (menu) => {
    // modified clicked menu isActive field
    const modifiedMenus = menus.map((singleMenu) => {
      if (singleMenu.id === menu.id) {
        singleMenu.isActive = true;
        return singleMenu;
      } else {
        singleMenu.isActive = false;
        return singleMenu;
      }
    });
    setMenus(modifiedMenus);

    // filtered data
    const filteredProjects = projectsDataFromDB.filter((project) =>
      menu?.keyword?.toLowerCase() === "all"
        ? project
        : project?.tags?.toLowerCase().includes(menu?.keyword?.toLowerCase())
    );
    setProjects(filteredProjects);
  };

  new VenoBox({
    selector: ".venobox",
    spinner: "rotating-plane",
  });

  return (
    <section
      id="portfolio"
      name="portfolio"
      className="py_80 bg_secondery full_row"
    >
      <div className="container">
        <div className="row">
          <Fade bottom cascade>
            <div className="col-md-12 col-lg-12">
              <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
                <h2 className="title text-uppercase">
                  <span className="line_double mx-auto color_default">
                    portfolio
                  </span>
                  Recent Projects
                </h2>
                <span className="sub_title">{portfolioIntro}</span>
              </div>
            </div>
          </Fade>
          <div className="col-md-12 col-lg-12">
            <div className="my_portfolio" id="tab-panel">
              <div className="row">
                <div className="col-md-12">
                  <div className="filters mb_30 w-100 text-center">
                    <ul className="filter-tabs mx-auto d-inline-block">
                      {menus.map((menu) => {
                        return (
                          <li
                            key={menu.id}
                            className={`filter ${
                              menu.isActive ? "active" : ""
                            }`}
                            data-role="button"
                            onClick={() => handleClick(menu)}
                          >
                            {menu.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="filter-list">
                <div className="portfolio-items">
                  <div className="row">
                    {projects.map((project) => {
                      return (
                        <AnimatePresence key={project.id}>
                          <motion.div
                            layout
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.9 }}
                            
                            className="column mix mix_all graphic development wordpress mb_30 col-md-4 col-lg-4"
                          >
                            <div className="default-portfolio-item">
                              <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 1 }}
                                href={`${project?.image?.data?.attributes?.formats?.small?.url}`}
                                data-fancybox="gallery"
                                data-gall="myGallery"
                                className="venobox"
                              >
                                <img
                                  src={`${project?.image?.data?.attributes?.formats?.medium?.url}`}
                                  alt="image"
                                />
                                <div className="overlay-box">
                                  <span>
                                    <i
                                      className="fa fa-eye"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <div className="tag">
                                    <ul>
                                      <li>{project.tags}</li>
                                    </ul>
                                  </div>
                                </div>
                              </motion.a>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
