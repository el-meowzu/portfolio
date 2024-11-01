import CV from '../../assets/myCv_Eng_ON.pdf';
import { useTheme } from '../../common/ThemeContext';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-meowzu.png';


function Hero() {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <section id="hero">
            <div className={styles.heroContainer}>
                <img 
                    className={styles.hero}
                    src={heroImg} 
                    alt="Profile Picture of Muazu" 
                />
                <div className={styles.info}>
                    <h1>Muazu <br/> Suzuki </h1>
                    <h2>Junior Full stack Web Developer </h2>
                    <h2>Future Python AI Developer</h2>

                    <h2>Building solutions, one line of code at a time.</h2>
                    <a href={CV} target='_blank'>
                        <button className={styles.button}>
                            Resume
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
