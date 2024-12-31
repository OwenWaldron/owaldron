
type Art = {
    contentType: 'art';
    url: string;
    title: string;
    subtitle?: string;
    collection?: string;
}

type Quote = {
    contentType: 'quote';
    text: string;
    author: string;
    date: string;
    url?: string;
}

type Article = {
    contentType: 'article';
}

type Content = Art | Quote | Article;

export const BlogContent: Content[] = [

]
