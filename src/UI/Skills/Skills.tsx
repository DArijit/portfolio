import classnames from "classnames";
import styles from "./Skills.module.css";
import { ContentWrapper } from "../Shared/Shared";

const Skills = () => {
  const skills = [
    "React",
    "Next",
    "TypeScript",
    "JavaScript",
    "Redux",
    "HTML5",
    "CSS3",
    "JSX",
    "TSX",
    "Redux Saga",
    "GraphQl",
    "ES6",
    "Git",
    "Github",
    "Jest",
    "React Testing Library",
    "MySql",
    "Neo4J",
    "Splunk",
    "Dojo",
    "NodeJS",
    "Jenkins",
    "MongoDB",
    "ESLint",
    "LightHouse",
    "JQuery",
    "Figma",
    "Canva",
    "Procreate",
    "Technical Interviews",
    "Sprint Planning",
    "Team Management",
    "Problem Solving",
  ];

  return (
    <div className={styles.skillsContainer}>
      <ContentWrapper header='Skills'>
        <>
          {skills.map((skill) => (
            <div className={styles.skill} key={skill}>
              {skill}
            </div>
          ))}
        </>
      </ContentWrapper>
    </div>
  );
};

export default Skills;
