import React, { useState } from "react";
import { Fade } from "react-reveal";

const data = [
  {
    image: "01.jpg",
    tag_one: "Web Development",
    tag_two: "Wordpress",
    tags: ["development", "wordpress"],
  },
  {
    image: "02.jpg",
    tag_one: "Branding",
    tag_two: "Wordpress",
    tags: ["branding", "wordpress"],
  },
  {
    image: "03.jpg",
    tag_one: "Web Design",
    tag_two: "Web Development",
    tags: ["design", "development"],
  },
  {
    image: "04.jpg",
    tag_one: "Branding",
    tag_two: "Wordpress",
    tags: ["branding", "wordpress"],
  },
  {
    image: "05.jpg",
    tag_one: "Web Design",
    tag_two: "Wordpress",
    tags: ["design", "wordpress"],
  },
  {
    image: "06.jpg",
    tag_one: "Web Design",
    tag_two: "Web Development",
    tags: ["design", "development"],
  },
];
const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  //   const selectedMenu = document.querySelector('[data-filter]');
  //   useEffect(() => {

  //     console.log(selectedMenu, 'selectedMenu');

  //   }, [selectedMenu])

  const [previousSelectedMenu, setPreviousSelectedMenu] = useState('');
  const handleSelectedMenu = (e) => {

    // filter projects by menu
    const filteredProjects = data.filter((project) => {
      
      return e.target.getAttribute('data-filter') === 'all' ? project : project.tags.includes(e.target.getAttribute('data-filter'))
    });
    setProjects(filteredProjects);

    // remove active class from menu item all
    if(!previousSelectedMenu) {
      const menuItemAll = document.querySelector('.filter');
      menuItemAll.classList.remove('active');
    }
    
    // remove menu item from previous selected menu
    if(previousSelectedMenu) {
      previousSelectedMenu.classList.remove('active');
    }
    
    setPreviousSelectedMenu(e.target);
    e.target.classList.add('active');
  };

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
                <span className="sub_title">
                  Interdum a etiam sagittis vehicula porta. Massa felis eros
                  quam blandit nulla dolor habitant. Ullamcorper quis ornare et
                  proin pellentesque.
                </span>
              </div>
            </div>
          </Fade>
          <div className="col-md-12 col-lg-12">
            <div className="my_portfolio" id="tab-panel">
              <div className="row">
                <div className="col-md-12">
                  <div className="filters mb_30 w-100 text-center">
                    <ul className="filter-tabs mx-auto d-inline-block">
                      <li
                        className="active filter"
                        data-role="button"
                        data-filter="all"
                        onClick={(e) => handleSelectedMenu(e)}
                      >
                        All
                      </li>

                      <li
                        className="filter"
                        data-role="button"
                        data-filter="design"
                        onClick={(e) => handleSelectedMenu(e)}
                      >
                        Web Design
                      </li>
                      <li
                        className="filter"
                        data-role="button"
                        data-filter="wordpress"
                        onClick={(e) => handleSelectedMenu(e)}
                      >
                        Wordpress
                      </li>
                      <li
                        className="filter"
                        data-role="button"
                        data-filter="development"
                        onClick={(e) => handleSelectedMenu(e)}
                      >
                        Web Development
                      </li>
                      <li
                        className="filter"
                        data-role="button"
                        data-filter="branding"
                        onClick={(e) => handleSelectedMenu(e)}
                      >
                        Branding
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="filter-list">
                <div className="portfolio-items">
                  <div className="row">
                    {projects.map((project) => {
                      return (
                        <div
                          key={project.image}
                          className="column mix mix_all graphic development wordpress mb_30 col-md-4 col-lg-4"
                        >
                          <div className="default-portfolio-item">
                            <a
                              href={`images/portfolio/${project.image}`}
                              data-fancybox="gallery"
                            >
                              <img
                                src={`images/portfolio/${project.image}`}
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
                                    <li>{project.tag_one},</li>
                                    <li>{project.tag_two}</li>
                                  </ul>
                                </div>
                              </div>
                            </a>
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
      </div>
    </section>
  );
};

export default Portfolio;
