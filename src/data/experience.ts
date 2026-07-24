export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education" | "certification";
}

export const experience: ExperienceItem[] = [
  {
    year: "2024 - Present",
    title: "Full-Stack Developer",
    company: "Freelance",
    description: "Building modern web applications for clients using Next.js, React, TypeScript, and various modern technologies. Specializing in creating premium user experiences and scalable solutions.",
    type: "work",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Developer",
    company: "Tech Startup",
    description: "Developed responsive and interactive user interfaces using React and Next.js. Collaborated with design teams to implement pixel-perfect designs and improve user engagement.",
    type: "work",
  },
  {
    year: "2022 - 2023",
    title: "Web Developer",
    company: "Digital Agency",
    description: "Created websites and web applications for various clients. Gained experience in full-stack development, API integration, and performance optimization.",
    type: "work",
  },
  {
    year: "2021 - 2022",
    title: "Computer Science Degree",
    company: "University",
    description: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles. Built a strong foundation in programming and problem-solving.",
    type: "education",
  },
  {
    year: "2023",
    title: "AWS Certified Developer",
    company: "Amazon Web Services",
    description: "Obtained certification demonstrating proficiency in developing and maintaining applications on AWS cloud platform.",
    type: "certification",
  },
  {
    year: "2022",
    title: "Meta Front-End Developer Certificate",
    company: "Meta",
    description: "Completed professional certificate program covering React, JavaScript, UI/UX principles, and modern front-end development practices.",
    type: "certification",
  },
];
