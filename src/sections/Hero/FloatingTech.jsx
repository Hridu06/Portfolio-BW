import "./FloatingTech.css";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

const techs = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
    className: "orange",
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <FaJs />,
    className: "cyan",
  },
  {
    id: 3,
    name: "React",
    icon: <FaReact />,
    className: "blue",
  },
  {
    id: 4,
    name: "Figma",
    icon: <FaFigma />,
    className: "figma",
  },
];

export default function FloatingTech() {
  return (
    <div className="tool-grid">
      {techs.map((tech) => (
        <div key={tech.id} className={`tool-card ${tech.className}`}>
          <b>{tech.icon}</b>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}