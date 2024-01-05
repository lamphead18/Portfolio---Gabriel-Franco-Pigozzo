// SideBar.tsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaPhone, FaEnvelope, FaJs, FaReact, FaHtml5, FaCss3, FaPython, FaNodeJs, FaDatabase } from 'react-icons/fa';
import './SideBar.css';

interface SideBarProps {
  show: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ show }) => {
  const sidebarAnimation = useSpring({
    opacity: show ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={sidebarAnimation} className="sidebar">
      <img
        src="https://avatars.githubusercontent.com/u/69656794?s=400&u=c466f033b05a01218b1cae35884ffb8a5e0f3e8e&v=4"
        alt="Minha Foto"
        className="profile-picture"
      />
      <p>
        <FaPhone /> +55(85)98126-3142
      </p>
      <p>
        <FaEnvelope /> gabrielfpigozzo@gmail.com
      </p>
      <div className="tech-icons">
        <FaJs title="JavaScript" />
        <FaReact title="React" />
        <FaHtml5 title="HTML5" />
        <FaCss3 title="CSS3" />
        <FaPython title="Python" />
        <FaNodeJs title="Node.js" />
        <FaDatabase title="SQL" />
      </div>
    </animated.div>
  );
};

export default SideBar;
