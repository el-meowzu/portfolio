import styles from './ProjectsStyles.module.css';
import underConstruction from "../../assets/underConstruction.mp4"
import oneLogo from "../../assets/one_logo.webp"
import cssAnimation from "../../assets/css.webp"
import weatherApp from "../../assets/weather_logo.webp"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (

    <section id="projects" className={styles.container}>
        <h2 className="sectionTitle">Projects</h2>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={oneLogo} 
                link="https://el-meowzu.github.io/One_Esport/" 
                h3="One E-Sport"
                p="Tailwind Css landing page"
            />

            <ProjectCard 
                src={cssAnimation} 
                link="https://el-meowzu.github.io/Slider/" 
                h3="Animation Slider"
                p="Animation Slider made with Html & Css "
            />
            <ProjectCard 
                src={weatherApp}
                link="https://weather-app-five-eta-34.vercel.app/"
                h3="Weather App"
                p=" This App Uses Open Weather Map API "
                
            />
            <ProjectCard 
                src={underConstruction}
                h3="Project Under Construction"
                p="Working on a project using PERN stack"
                isVideo={true}
            />
        </div>        
    </section>
  )
}

export default Projects