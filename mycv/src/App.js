import Contacts from "./components/Contacts/Contacts";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Languages from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import PastWorkExperience from "./components/PastWorkExperience/PastWorkExperience";
import s from "./App.module.css"
import m from "./AppMin.module.css"
import headPhoto from './pics/CC8210C1-8758-45DE-9B0E-EE0135B87D10.jpg'
import TitleMobile from "./components/Mobile/TitleMobile";
require('./styles.css');


let widerScreenWidth = window.matchMedia("(max-width: 450px)");




function App() {
    return <>
        {widerScreenWidth.matches && <TitleMobile/>}
   <div className={widerScreenWidth.matches ? m.mainContainer : s.mainContainer}>
    <div className={s.sidebar}>
        <img  className={s.photo} width='250px' src={headPhoto} alt="main photo"/>
        <div className={s.contactsContainer}>
            <h2 className={s.contactsTitle}>Contacts</h2>
            <Contacts />
        </div>
       <div className={s.skillsContainer}>
           <h2 className={s.skillsTitle}>Skills</h2>
           <Skills />
       </div>
    </div>
    <div className={s.info}>
      <h1 className={s.nameTitle}>Matvieiev Stanislav</h1>
      <h2 className={s.profTitle}>FullStack Developer</h2>
        <div className={s.aboutMeContainer}>
            <h2 className={s.aboutMeTitle}>About me</h2>
            <AboutMe/>
        </div>

      <div className={s.educationContainer}>
          <h3 className={s.educationTitle}>Education</h3>
          <Education/>
      </div>
      <div className={s.langContainer}>
          <h3 className={s.langTitle}>Languages Spoken</h3>
          <Languages/>
      </div>
      <div className={s.projContainer}>
          <h3 className={s.projTitle}>Projects</h3>
          <Projects/>
      </div>
      <div className={s.careerContainer}>
          <h3 className={s.careerTitle}>Career history</h3>
          <PastWorkExperience/>
      </div>
    </div>
   </div>

  </>
}

export default App;
