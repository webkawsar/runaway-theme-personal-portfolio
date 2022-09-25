import React from 'react';
import BlogIntro from '../components/BlogIntro';
import CategoryContents from '../components/CategoryContents';
import Layout from '../components/layout/Layout';
import ScrollBottom from '../components/ScrollBottom';

const Category = () => {
    return (
        <>
            <Layout>
                <ScrollBottom />
                <BlogIntro title='Category' />
                <CategoryContents />
            </Layout>
        </>
    );
};

export default Category;