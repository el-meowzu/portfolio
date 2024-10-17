import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {

  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h2 className='sectionTitle'>Skills</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="jQuery" />
        <SkillList src={checkMarkIcon} skill="React.js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node.js"/>
        <SkillList src={checkMarkIcon} skill="Express.js"/>
        <SkillList src={checkMarkIcon} skill="PostGreSQL"/>
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="Restful API" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="BootStrap" />
        <SkillList src={checkMarkIcon} skill="TailwindCss" />
        <SkillList src={checkMarkIcon} skill="GitHub"/>
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="Symfony" />
      </div>
      <hr />
    </section>
  )
}

export default Skills