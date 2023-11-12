const project = [
  {
    project: "CourtCanva Vender Platform",
    des:
      "This is a vender end order management platform form venders to manage orders form retail buyers",
    activities: [
      "Build UI with React, Next.js, TypeScript, Chakra UI",
      "In charge of order display and modification module, both front end and back end",
      "Build Rest API with Spring Boot",
      "Write unit test, integration test with JUnit",
      "Use Spring Data JPA(Hibernate) to operate database, flyway for database version control",
      "Use MapStruct to convert between DTO and Entity",
      "Config JWT, CORS, CSRF using Spring Security",
      "Use Docker to run PostgreSQL database in dev environment, AWS RDS in UAT and product environment",
    ],
    tech_stacks:
      "Next.js, React, TypeScript, Chakra UI, Spring Boot, Spring Data JPA, PostgreSQL, JWT, JUnit",
  },
  {
    project: "Log Service Solution",
    des:
      "This is a prototype log service solution which helps web applications companies collect and analyse logs",
    activities: [
      "Wrote log Script which embed to user's app to capture errors and send them to a server",
      "Wrote logger service for storing and reading logs",
      "Wrote log display app for reading and displaying logs from server",
      "Created docker files and containerize logger service, display app",
    ],
    tech_stacks:
      "React, Node.js, Tailwind CSS, Docker",
  },
  {
    project: "Australia Fintech Infrastructure web Application",
    des:
      "This is a webpage for a crypto infrastructure company",
    activities: [
      "Wrote 4 static pages",
      "Used styled-components to build reusable, responsive styles",
      "Realised video as background",
    ],
    tech_stacks:
      "Next.js, React, TypeScript, styled-components, Vercel",
  },
  {
    project: "My Portfolio (Personal Project)",
    des: "It is a personal responsive web application of My Portfolio with frontend and backend separation",
    activities: [
      "Deployed the project using AWS",
      "Realized responsive layout with Bootstrap",
      "Realized UI design Material-UI library",
      "Realized page transformation by using React-Router ",
      "Built backend server with Node.js and Express",
      "Used ESLint and Prettier to standardize code writing",
    ],
    tech_stacks:
      "React, Bootstrap, Material UI, Node.js, Express, CSS/SASS, ESLint, Prettier",
  },
  {
    project: "Food & Weather web Application (Personal Project)",
    des:
      "Built a food and weather single page app",
    activities: [
      "Config front end using Webpack, Babel, ESLint, Prettier husky, lint-staged",
      "Implement SSR using Node.js, Express, React, Webpack, Babel",
      "Write lean, readable, maintainable style using Tailwind CSS, classnames",
      "Build 4 scale Responsive UI",
      "Use Intersection Observer API to control animation",
      "Write test using Jest and React Testing Library",
      "Implement CICD using GitHub Actions and GitHub Pages",
      "Call OpenWeatherMap API to get weather information",
    ],
    tech_stacks:
      "React, Webpack, Babel, Tailwind CSS, Node.js, SSR",
  },
]

module.exports = project
