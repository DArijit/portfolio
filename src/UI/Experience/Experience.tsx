import classNames from "classnames";
import styles from "./Experience.module.css";
import { ContentWrapper } from "../Shared/Shared";

const Experience = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const experience = [
    {
      name: "Persistent Systems",
      client: "Intuit Quickbooks",
      dayStarted: "May 3rd, 2022",
      designation: "Lead Software Engineer",
      description: (
        <ul className={styles.removeMargin}>
          <li>Used by millions of users in USA</li>
          <li>Main demographic is small business owners</li>
          <li>Migrated the code base from Dojo to React</li>
          <li>Used HTML/HTML5 and CSS/CSS3 and modular CSS approaches.</li>
          <li>Written test cases using jest and react testing library</li>
          <li>Monitored Voice of customer to improve UI/UX</li>
        </ul>
      ),
    },
    {
      name: "vConstruct private Limited",
      client: "DPR Constructions",
      dayStarted: "Jan 7th, 2019",
      dayEnded: "Apr 1st, 2022",
      designation: "Senior Software Engineer",
      description: (
        <ul className={styles.removeMargin}>
          <li>Used by DPR internally.</li>
          <li>This is very similar to Jira application.</li>
          <li>
            Helps in monitoring the day to day tasks and to achieve timelines.
          </li>
          <li>
            This is a very important application from business's perspective.
          </li>
          <li>This was developed from scratch.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className={styles.experienceContainer}>
      <ContentWrapper header="Experience">
        <>
          {experience.map((exp) => (
            <div className={styles.expContainer} key={exp.name}>
              <div className={styles.leftExp}>
                <div className={styles.expName}>{exp.name}</div>
                <div className={styles.expClient}>{exp.client}</div>
                <div className={styles.expDesignation}>{exp.designation}</div>
                <div
                  className={styles.expDuration}
                >{`${exp.dayStarted}${exp.dayEnded !== undefined ? ` - ${exp.dayEnded}` : " - present"}`}</div>
              </div>
              <div className={styles.rightExp}>{exp.description}</div>
            </div>
          ))}
        </>
      </ContentWrapper>
    </div>
  );
};

export default Experience;
