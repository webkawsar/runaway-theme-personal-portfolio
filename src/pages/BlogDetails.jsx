import React from "react";
import BlogIntro from "../components/BlogIntro";
import Content from "../components/Content";
import Layout from "../components/layout/Layout";
import ScrollBottom from "../components/ScrollBottom";

const BlogDetails = () => {
  return (
    <>
      <Layout>
        <ScrollBottom />
        <BlogIntro title='Blog Details' />
        <Content />
      </Layout>
    </>
  );
};

export default BlogDetails;
