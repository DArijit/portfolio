import classnames from "classnames";
import styles from "./Skills.module.css";

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
      <h3 className={classnames([styles.skillHeader, styles.removeMargin])}>
        Skills
      </h3>
      <div className={styles.skillList}>
        {skills.map((skill) => (
          <div className={styles.skill} key={skill}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
