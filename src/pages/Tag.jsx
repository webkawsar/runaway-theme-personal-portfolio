import React from 'react';
import BlogIntro from '../components/BlogIntro';
import Layout from '../components/layout/Layout';
import ScrollBottom from '../components/ScrollBottom';
import TagContents from '../components/TagContents';

const Tag = () => {
    return (
        <>
            <Layout>
                <ScrollBottom />
                <BlogIntro title='Tag' />
                <TagContents />
            </Layout>
        </>
    );
};

export default Tag;