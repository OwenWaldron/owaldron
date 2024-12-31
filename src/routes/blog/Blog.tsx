import React from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import { Masonry } from '@mui/lab';

const BlogPage = () => {
    return <PageContainer>
        <Masonry columns={{ sm: 3, xs: 1 }} spacing={3}>
            <Box label="Welcome">
                <div className="py-4 px-6">
                    <h1 className="text-3xl mb-2">Welcome to my blog</h1>
                    <p>
                        This page is where I share any creative works including artwork, writing, or quotes (both original and external).
                        As you can see, it is very much a work in progress. 
                        Please reach out to me if you are curious or take issue with anything posted here.
                    </p>
                </div>
            </Box>
            <Box>
                <h1>Hello, blog!</h1>
            </Box>
            <Box>
                <h1>Hello, blog!</h1>
            </Box>
            <Box>
                <h1>Hello, blog!</h1>
            </Box>
            <Box>
                <h1>Hello, blog!</h1>
            </Box>
        </Masonry>
    </PageContainer>
}

export default BlogPage;