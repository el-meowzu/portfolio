import React from 'react';
import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import htmlLogo from '../../assets/skillLogo/html.svg';
import cssLogo from '../../assets/skillLogo/css.svg';
import jsLogo from '../../assets/skillLogo/javascript.svg';
import jQueryLogo from '../../assets/skillLogo/jquery.svg';
import reactLogo from '../../assets/skillLogo/react.svg';
import nodeLogo from '../../assets/skillLogo/node.svg';
import expressLogoLight from '../../assets/skillLogo/express-light.svg';
import expressLogoDark from '../../assets/skillLogo/express-dark.svg';
import postreSqlLogo from '../../assets/skillLogo/postgresql.svg';
import mySqlLogo from '../../assets/skillLogo/mysql.svg';
import apiLight from '../../assets/skillLogo/api-light.svg';
import apiDark from '../../assets/skillLogo/api-dark.svg';
import phpLogo from '../../assets/skillLogo/php.svg';
import bootstrapLogo from '../../assets/skillLogo/bootstrap.svg';
import tailwindLogo from '../../assets/skillLogo/tailwind.svg';
import githubLogo from '../../assets/skillLogo/github.svg';
import symfonyLight from '../../assets/skillLogo/symfony-light.svg';
import symfonyDark from '../../assets/skillLogo/symfony-dark.svg';

function Skills() {

  const { theme } = useTheme();
  const expressLogo = theme === 'light' ? expressLogoLight : expressLogoDark;
  const apiLogo = theme === 'light' ? apiLight : apiDark;
  const symfonyLogo  = theme === 'light' ? symfonyLight : symfonyDark;

  return (
    <section id="skills" className={styles.container}>
      <h2 className='sectionTitle'>Skills</h2>
      <div className={styles.skillList}>
        <SkillList src={htmlLogo} skill="HTML" rating={4.5}/>
        <SkillList src={cssLogo} skill="CSS" rating={4.5}/>
        <SkillList src={jsLogo} skill="JavaScript" rating={4}/>
        <SkillList src={jQueryLogo} skill="jQuery" rating={4}/>
        <SkillList src={reactLogo} skill="React.js" rating={3.5} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={nodeLogo} skill="Node.js" rating={3.5}/>
        <SkillList src={expressLogo} skill="Express.js" rating={3.5}/>
        <SkillList src={postreSqlLogo} skill="PostGreSQL" rating={3.5}/>
        <SkillList src={mySqlLogo} skill="MySQL" rating={3.5}/>
        <SkillList src={apiLogo} skill="Restful API" rating={3}/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={bootstrapLogo} skill="BootStrap" rating={4}/>
        <SkillList src={tailwindLogo} skill="TailwindCss" rating={3.5}/>
        <SkillList src={githubLogo} skill="GitHub" rating={4}/>
        <SkillList src={phpLogo} skill="PHP" rating={3}/>
        <SkillList src={symfonyLogo} skill="Symfony" rating={3}/>
      </div>
  
    </section>
  )
}

export default Skills;