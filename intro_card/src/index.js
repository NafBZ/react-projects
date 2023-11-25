import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App({ avatarSrc, name, intro, skills }) {
  return (
    <div className="container">
      <div className="card">
        <Avatar src={avatarSrc} alt={`Avatar for ${name}`} />
        <div className="data">
          <Intro name={name} intro={intro} />
          <br />
          <SkillList skills={skills} />
        </div>
      </div>
    </div>
  );
}

function Avatar({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} />;
}

function Intro({ name, intro }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{intro}</p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill.skill}
          emoji={skill.emoji}
          color={skill.color}
        />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="model">
      <App
        avatarSrc="AvNafees.png"
        name="Nafees Bin Zaman"
        intro="As a Robotics Software Engineer 1, I develop and integrate deep learning models and quality control pipelines for mobile robots using ROS2. I also work on frontend and backend technologies and unit testing."
        skills={[
          { skill: "Python", emoji: "💪", color: "#F05941" },
          { skill: "JavaScript", emoji: "🤝", color: "#BE3144" },
          { skill: "React", emoji: "👦", color: "#872341" },
        ]}
      />
      <App
        avatarSrc="superhero.png"
        name="Super Hero"
        intro="Super Hero is a superhero whose superpower is to develop harmony in the world."
        skills={[
          { skill: "Bonding", emoji: "💪", color: "#F05941" },
          { skill: "Socialise", emoji: "🤝", color: "#BE3144" },
          { skill: "Solution", emoji: "👦", color: "#872341" },
        ]}
      />
      <App
        avatarSrc="AvNafees.png"
        name="Nafees Bin Zaman"
        intro="As a Robotics Software Engineer 3, I develop and integrate deep learning models and quality control pipelines for mobile robots using ROS2. I also work on frontend and backend technologies and unit testing."
        skills={[
          { skill: "Python", emoji: "💪", color: "#F05941" },
          { skill: "JavaScript", emoji: "🤝", color: "#BE3144" },
          { skill: "React", emoji: "👦", color: "#872341" },
        ]}
      />
    </div>
  </StrictMode>
);
