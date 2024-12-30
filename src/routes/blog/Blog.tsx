import React from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import styles from './Blog.module.css';

const BlogPage = () => {
    return <PageContainer>
        <div className={styles["masonry"]}>
            <Box>
                <h1>Hello, blog!</h1>
            </Box>
        </div>
    </PageContainer>
}

export default BlogPage;