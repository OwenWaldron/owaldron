import * as art from './artworks';
import * as articles from './articles';

type Art = {
    contentType: 'art';
    url: string;
    title: string;
    date: string;
    subtitle?: string;
    collection?: string;
}

type Quote = {
    contentType: 'quote';
    text: string;
    author?: string;
    date?: string;
    url?: string;
}

type Article = {
    contentType: 'article';
    title: string;
    tldr: string;
    date: string;
    article: string;
    url: string;
}

export type Content = Art | Quote | Article;

export const BlogContent: Content[] = [
    {
        contentType: 'quote',
        text: 'Everything should be made as simple as possible, but no simpler.',
        author: 'Albert Einstein (paraphrased)',
        date: ''
    },
    {
        contentType: 'art',
        title: 'Heartbyte',
        date: 'Dec 29, 2024',
        url: art.Heartbyte,
    },
    {
        contentType: 'quote',
        text: 'You cannot control what you are looking at, but what you see is entirely up to you.',
    },
    {
        contentType: 'article',
        title: 'Leave Your Mark',
        tldr: `
            For my logbook, I wanted to create a randomly generated mark seeded by a user's input.
            This article outlines how the procedural generation works.
        `,
        date: 'Dec 30, 2024',
        article: articles.Test,
        url: 'test'
    }
]
