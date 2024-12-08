const aboutMeText = `
My name is Owen Waldron, and I am a computer science student at Waterloo with a passion for exploring the intersection of technology,
math, and physics. Whether I'm coding, solving complex problems, or enjoying activities like swimming and rock climbing, my curiosity
and drive for self-improvement fuel everything I do. I’m also a proud cat enthusiast. I am always seeking new challenges and ways to
grow in both my academic and personal life
`

interface Taggable {
   title: string;
   date: string;
   tag: string;
   description: string;
}

const educationHistory: Taggable[] = [
   {
      title: 'Bachelors of Computer Science',
      date: 'Sep 2022 - June 2027',
      tag: 'University of Waterloo, Faculty of Mathematics',
      description: `Candidate for a Bachelor's of Computer Science (Co-op) with a minor in Physics. Sample courses include Object Oriented Software Development, Calculus 1 through 3, Linear Algebra, Elementary Algorithm Design and Data Abstraction.`
   },
   {
      title: 'High School and IB Diplomas',
      date: 'Sep 2017 - June 2022',
      tag: 'Toronto French School',
      description: 'Advanced Bilingual International Baccalaureate Diploma recipient. Awards for greatest achievement in higher level mathematics, higher level physics, and computer science.'
   }
]

const workHistory: Taggable[] = [
   {
      title: 'Course Marker',
      date: 'Sep 2023 - Dec 2023',
      tag: 'University of Waterloo, Faculty of Mathematics',
      description: `Part time job as a course marker for first year course MATH135: Algebra for Honours Mathematics. I am part of a team that marks student’s weekly assignments.`
   }, {
      title: 'Web Developper',
      date: 'May 2023 - Aug 2023',
      tag: 'North York Aquatic Club',
      description: `Invented and implemented frameworks for quantitative analysis of swim club performance. Automated data visualization and performance report generation for board use through a web app interface. Developed feature rich web app with React.js frontend and a Django backend on an AWS server.`
   }, {
      title: 'Aquatics Instructor',
      date: 'July 2022',
      tag: 'Toronto Athletic Camps',
      description: `
         Instructed swimmers ranging from first-time to competitive levels, adjusting to a new group and skill set each week. Cooperated with a team of instructors and coaches to manage over 300 campers.
      `
   }, {
      title: 'Competitive Swim Coach',
      date: 'Sep 2021 - June 2022',
      tag: 'North York Aquatic Club',
      description: `
         Coordinated competitive swimming groups involving competition registration, writing and executing practices, and communicating with parents. Engineered a web application using Django to compute data relating to club performance for the use of the club head coach.
      `
   },
]


export { aboutMeText, educationHistory, workHistory };
export type { Taggable };
