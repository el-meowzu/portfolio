import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-meowzu.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/myCv_Eng_ON.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    
    return (
        <section id="hero">
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero}
                    src={heroImg} 
                    alt="Profile Picture of Muazu" 
                />
                <img
                    className= {styles.colorMode}
                    src={themeIcon} 
                    alt="Theme mode icon"
                    onClick={toggleTheme} 
                />
            </div>
            <div className={styles.info}>
                <h1>Muazu <br/> Suzuki </h1>
                <h2>Junior Full stack Web Developer </h2>
                <span>
                    <a href="https://linkedin.com/in/muazu-suzuki" target='_blank'>
                        <img src={linkedinIcon} alt="linkedin logo" />
                    </a>
                    <a href="https://github.com/el-meowzu" target='_blank'>
                        <img src={githubIcon} alt="github logo" />
                    </a>
                </span>
                <h2>Building creative solutions, one line of code at a time.</h2>
                <a href={CV} target='_blank'>
                    <button className={styles.button}>
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Hero