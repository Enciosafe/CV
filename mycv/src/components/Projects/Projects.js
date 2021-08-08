import s from "./Projects.module.css"

const Projects = () => {
    return <>
        <ul className={s.list}>
            <li className={s.item}><a target='_blank' href="https://photobookhooks.netlify.app">Photobook (React/Redux/Hooks/Route/CSS modules)</a></li>
            <li className={s.item}><a target='_blank' href="https://enciosafe-hw-04-movies.netlify.app/home">Trending Movies and Search Movies (React/Classes/Axios/API/Route)</a></li>
            <li className={s.item}><a target='_blank' href="https://enciosafe.github.io/goit-js-hw-13-image-finder/">Image Finder with full-size option (React/Props/Local State/Intersection Observer/async requests)</a></li>
            <li className={s.item}><a target='_blank' href="https://akunadjvili.github.io/js-13-command-webpack/">Buying Tickets for Events (Vanila JS/Webpack/Pagination/AJAX/team project)</a></li>
            <li className={s.item}><a target='_blank' href="https://akunadjvili.github.io/command-project-markup">Advertising landing with sale of ice cream (Semantic Layout/SAS(SCSS)/Adaptive)</a></li>
            <li className={s.item}><a target='_blank' href="https://enciosafe.github.io/goit-markup-hw-08/">Web-studio site (Preprocessors/Responsive Design (three breaking points)/Modal form/Accessibility)</a></li>
        </ul>
    </>
}


export default Projects