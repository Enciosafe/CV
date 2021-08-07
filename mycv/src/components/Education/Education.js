import s from "./Education.module.css"

const Education = () => {
    return <>
        <ul>
            <li className={s.item}>GoIT FullStack Developer (HTML/CSS/JS/REACT/NODE), <span className={s.year}>2020 - 2021</span></li>
            <li className={s.item}>Kremenchuk Mykhailo Ostohradskyi National University
                (Bachelor's degree Field Of Study control and automation systems),
                <span className={s.year}> 2005 – 2009</span>
            </li>
        </ul>
    </>
}

export default Education