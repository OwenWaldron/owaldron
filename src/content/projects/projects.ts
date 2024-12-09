import * as TobaImages from './tobatalks'; 
import * as Donuts from './donut';
import * as BlackJack from './blackjack';
import * as Fuser from './fuser';
import * as DataPool from './datapool';
import * as WaveAI from './waveai';

type Project = {
    name: string;
    description: string;
    tags: string[];
    images: string[];
}

const projects: Project[] = [{
    name: 'DataPool',
    description: `
    I was employed by my former swim club to create an application capable of analyzing group competitive swimming data.
    `,
    tags: ["Django", "React.js"],
    images: Object.values(DataPool)
},{
    name: 'WaveAI',
    description: `
    Collaborated with classmates to envision and create an iOS application to facilitate communication for non-verbal individuals
    `,
    tags: ["iOS", "Swift", 'OpenAI'],
    images: Object.values(WaveAI)
},{
    name: 'Toba Talks',
    description: `
    Collaborated with classmates to envision and create an iOS application to facilitate communication for non-verbal individuals
    `,
    tags: ["iOS", "Swift", 'SwiftUI'],
    images: Object.values(TobaImages)
},{
    name: 'FUSER',
    description: `
    I constructed an iOS virtual store demo to showcase UI/UX principles, Firebase connectivity, and User objects.
    `,
    tags: ['iOS', 'SwiftUI', 'Firebase'],
    images: Object.values(Fuser)
},{
    name: 'Donut.py',
    description: `
Inspired by the infamous "donut.c", I created a vector graphics engine in python using techniques from calculus and linear algebra.
    `,
    tags: ['Python', 'Vector Graphics'],
    images: Object.values(Donuts)
},{
    name: 'BlackJack',
    description: `
Using ReactJS, I created blackjack powered by a deck of cards API. This project was done to showcase my grasp of the basics of React and interacting with a web API.
`,
    tags: ['React.js'],
    images: Object.values(BlackJack)
}];

export default projects;
export type { Project };

