import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContent } from "../../../content/blog/blog";
import PageContainer from "../../../components/page-container/PageContainer";
import Box from "../../../components/box/Box";
import ReactMarkdown from "react-markdown";
import './ArticleView.css';

const ArticleView = () => {
    let { name } = useParams();
    const [text, setText] = useState('');


    useEffect(() => {
        const source = BlogContent.find(proj => proj.contentType === 'article' && proj.url === name);

        if (source && source.contentType === 'article') {
            fetch(source.article).then(res => res.text()).then(text => setText(text))
        }
	})


    const article = BlogContent.find(proj => proj.contentType === 'article' && proj.url === name);

    if (!article || article.contentType !== 'article') {
        return <h1>
            Uh oh! Looks like this project doesn't exist...
        </h1>
    }

    return (
        <PageContainer>
            <Box 
                label="Project View"
                leftButtons={
                    <Link className="whitespace-nowrap text-card-border underline" to="/blog">
                        {"< Projects"}
                    </Link>
                }
            >
                <div className="flex flex-col items-center py-6 px-8">
                    <h2 className="mb-4 text-3xl">{article.title}</h2>
                    <div className="blog-article w-full mt-6 gap-8">
                        <ReactMarkdown children={text} />
                    </div>
                </div>
            </Box>
        </PageContainer>
    )   
}

export default ArticleView;
