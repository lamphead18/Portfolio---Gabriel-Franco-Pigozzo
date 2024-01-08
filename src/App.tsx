import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';
import Header from './Header';

const App: React.FC = () => {
  const infoBoxAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const icon1Animation = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: 0 },
    config: { duration: 800 },
  });

  const icon2Animation = useSpring({
    opacity: 1,
    marginLeft: 0,
    from: { opacity: 0, marginLeft: 0 },
    config: { duration: 800 },
    delay: 300,
  });

  const presentationBoxAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 900,
  });

  return (
    <div className="app">
      <Header />
      <animated.div style={infoBoxAnimation} className="info-box">
        <h2>Gabriel Franco Pigozzo</h2>
        <p>Web Development - FullStack</p>
        <p>Ceará - Brazil</p>
        <p>gabrielfpigozzo@gmail.com</p>
      </animated.div>

      <div className="icon-box">
        <animated.a style={icon1Animation} href="https://github.com/lamphead18" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </animated.a>
        <animated.a style={icon2Animation} href="https://www.linkedin.com/in/gabriel-f-956163131/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </animated.a>
      </div>

      <animated.div style={presentationBoxAnimation} className="presentation-box">
        <h3>Apresentação</h3>
        <p>
          Meu nome é Gabriel Franco Pigozzo, tenho 21 anos, sou um entusiasmado
          desenvolvedor Full Stack Web e Mobile.
          Possuo uma sólida formação em programação, com foco em tecnologias como
          Javascript, React, HTML, CSS, Node, Python, React-Native, Django e SQL.
          Além das habilidades técnicas, domino métodos de debug, organização de
          tarefas, adaptabilidade, resolução de problemas, RESTful APIs, testes
          automatizados, arquitetura de software, UX, metodologias ágeis, requisições
          HTTP e tenho uma comunicação eficaz e proatividade no meu DNA. Minha
          abordagem para o desenvolvimento de software vai além das linhas de código,
          incorporando um entendimento aprofundado de arquiteturas e melhores
          práticas.
        </p>
      </animated.div>
    </div>
  );
};

export default App;
