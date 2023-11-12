const experience = [
  {
    employer: "New Aim",
    title: "Developer (Intern)",
    time: "Sep 2023 - Present",
    description:
      "Developing a prototype log service solution which helps web applications companies collect and analyse logs.",
    responsibilities: [
      "System design, write prototype code with 3 module: \n•\tlog Script: embedded to user's app to capture errors and send them to a server(logger service)\n•\tlogger service: provide service for storing and reading logs\n•\tlog display app: a web app for reading and displaying logs from server",
      "Create docker files and containerize logger service, display app.",
    ],
  },
  {
    employer: "JR Academy",
    title: "Developer (Intern)",
    time: "Jun - Aug 2023",
    description:
      "develop website for client. Work with an agile team composed of BA, UI designers, developers.",
    responsibilities: [
      "Use styled-components to build reusable, responsive styles",
      "Refactor existing code, use pure css instead of window event for responsive UI",
      "Implement video as background",
      "Work in agile environment, using Jira, GitHub and Zeplin",
    ],
  },
  {
    employer: "Async Working",
    title: "Developer (Part-time)",
    time: "Oct  – Dec 2022",
    description:
      "Participated in developing vender end order management platform. Worked with an agile team composed of BA, UI designers, developers and DevOps.",
    responsibilities: [
      "Build UI with React, Next.js, TypeScript, Chakra UI",
      "In charge of order display and modification module, both front end and back end",
      "Build Rest API with Spring Boot",
      "Write unit test, integration test with JUnit",
      "Use Spring Data JPA(Hibernate) to operate database, flyway for database version control",
      "Use MapStruct to convert between DTO and Entity",
      "Config JWT, CORS, CSRF using Spring Security",
      "Use Docker to run PostgreSQL database in dev environment, AWS RDS in UAT and product environment",
    ],
  },
]

module.exports = experience
