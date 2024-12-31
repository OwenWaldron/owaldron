import * as art from './artworks';

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
}

export type Content = Art | Quote | Article;

export const BlogContent: Content[] = [
    {
        contentType: 'quote',
        text: 'Sometimes, I like to write some quotes here. I like to read quotes.',
        author: 'Owen Waldron',
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
        date: 'Dec 30, 2024'
    }
]
