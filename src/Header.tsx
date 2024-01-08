import React from 'react';
import { FaReact, FaNode, FaPython } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className={"header"}>
            <div className="icon-container">
                <FaReact className="icon" />
                <FaNode className="icon" />
                <FaPython className="icon" />
            </div>
        </header>
    );
};

export default Header;