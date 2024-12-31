import React, { FC } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import { Masonry } from '@mui/lab';
import { Content, BlogContent } from "../../content/blog/blog";

const BlogPage = () => {
    return <PageContainer>
        <Masonry columns={{ sm: 3, xs: 1 }} spacing={3}>
            <Box label="Welcome">
                <div className="py-4 px-6">
                    <h1 className="text-3xl mb-2">Welcome to my blog</h1>
                    <p>
                        This page is where I share any creative works including artwork, writing, or quotes I like.
                        Please reach out to me if you are curious or take issue with anything posted here.
                    </p>
                </div>
            </Box>
            { BlogContent.map(item => <BlogItem content={item} />) }
        </Masonry>
    </PageContainer>
}

type BlogItemProps = {
    content: Content;
}

const BlogItem: FC<BlogItemProps> = ({ content }) => {
    console.log(content.contentType)
    switch (content.contentType) {
        case 'art':
            return <Box label="Art">
                <div className="p-4 flex flex-col items-center">
                    <img src={content.url} className="mb-2" />
                    <h1 className="text-3xl">{content.title}</h1>
                    <p>{content.date}</p>
                    <p className="w-full">{content.subtitle}</p>
                </div>
            </Box>
        case 'article':
            return <Box label="Article">
                <div className="p-4">
                    <h1 className="text-2xl">{content.title}</h1>
                    <p>{content.tldr}</p>
                    <h2 className="ml-auto w-fit">{content.date}</h2>
                </div>
            </Box>
        case 'quote':
            return <Box label="Quote">
                <div className="p-4">
                    <p className="text-xl">
                        {content.text}
                    </p>
                    <div className="flex justify-between mt-2">
                        <p>{content.date}</p>
                        <p>{content.author}</p>
                    </div>
                </div>
            </Box>
    }
}


export default BlogPage;