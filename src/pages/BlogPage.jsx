import React from "react";
import BlogContents from "../components/BlogContents";
import BlogIntro from "../components/BlogIntro";
import Layout from "../components/layout/Layout";
import ScrollBottom from "../components/ScrollBottom";

const BlogPage = () => {

  return (
    <>
      <Layout>
        <ScrollBottom />
        <BlogIntro title='Blog' />
        <BlogContents />
      </Layout>
    </>
  );
};

export default BlogPage;
