import React, { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BlogContext } from "../context/Blog.context";
import Blog from "./Blog";
import Loader from "./Loader";
import Sidebar from "./Sidebar";

const BlogContents = () => {
  const { blogsLoaded, blogs, page, pageCount, setPage } = useContext(BlogContext);

  const generateArr = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  };
  const pageCountArr = generateArr(pageCount);
  const handlePageClick = (pageNum) => {
    
    setPage(+pageNum);
    scroll.scrollToTop();
  };

 

  return (
    <>
      {blogsLoaded ? (
        <section
          className="blog_area py_80 bg_secondery full_row"
          name="blogContent"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                {blogs.length ? (
                  <>
                    <div className="blog_list mb_60">
                      {blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                      ))}
                    </div>
                    <nav>
                      <ul className="pagination wow animated slideInUp full_row">
                        {pageCountArr.map((count) => {
                          return (
                            <li
                              key={count}
                              className={
                                count === page
                                  ? "page-item active"
                                  : "page-item"
                              }
                              onClick={() => handlePageClick(count)}
                            >
                              <span className="page-link">{count}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </>
                ) : (
                  <div style={{ color: "red", textAlign: "center" }}>
                    <h2>Blog is not available to show</h2>
                  </div>
                )}
              </div>
              <Sidebar />
            </div>
          </div>
        </section>
      ) : (
        <Loader color="#36d7b7" />
      )}
    </>
  );
};

export default BlogContents;
