import { useState } from "react";
import styles from "./NavBarStyles.module.css";
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';
import { Link } from "react-router-dom";

function NavBar() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleBurgerToggle = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <div className={styles.navContainer}>
            <img
                src={themeIcon} 
                alt="Theme mode icon"
                onClick={toggleTheme} 
            />

            {/* Burger Menu Icon Visible when isBurgerOpen is false */}
            {!isBurgerOpen && (
                <div 
                    onClick={handleBurgerToggle} 
                    className={styles.burgerIcon}
                    
                >
                    <span className={styles.hamburgerTop}></span>
                    <span className={styles.hamburgerMiddle}></span>
                    <span className={styles.hamburgerBottom}></span>
                </div>
            )}

            {/* Navigation Links */}
            <div className={`${styles.navContent} ${isBurgerOpen ? styles.showMenu : ''}`}>
                {isBurgerOpen && (
                    <span 
                        onClick={handleBurgerToggle} 
                        className={styles.closeIcon}
                        
                    >
                        ✕
                    </span>
                )}
                <Link to="/" onClick={handleBurgerToggle} style={{ color: theme === 'light' ? 'black' : 'white' }}>Home</Link>
                <Link to="/skills" onClick={handleBurgerToggle} style={{ color: theme === 'light' ? 'black' : 'white' }}>About</Link>
                <Link to="/projects" onClick={handleBurgerToggle} style={{ color: theme === 'light' ? 'black' : 'white' }}>Project</Link>
                <Link to="/contact" onClick={handleBurgerToggle} style={{ color: theme === 'light' ? 'black' : 'white' }}>Contact</Link>
                <a href="https://linkedin.com/in/muazu-suzuki" target='_blank' onClick={handleBurgerToggle}>
                    <img src={linkedinIcon} alt="linkedin logo" />
                </a>
                <a href="https://github.com/el-meowzu" target='_blank' onClick={handleBurgerToggle}>
                    <img src={githubIcon} alt="github logo" />
                </a>
            </div>
        </div>
    );
}

export default NavBar;
