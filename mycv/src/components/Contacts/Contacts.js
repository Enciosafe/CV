import s from "./Contacts.module.css"

const Contacts = () => {
    return <div className={s.container}>
            <a href="tel:+380986254200"><span className={s.arrow}>></span> Call</a>
            <a href="mailto: finneganlucky@gmail.com"><span className={s.arrow}>></span> Email</a>
            <a href="https://www.linkedin.com/in/stanislav-matvieiev-94bb21208/"><span className={s.arrow}>></span> LinkedIn</a>
            <a href="https://t.me/lightzebro"><span className={s.arrow}>></span> Telegram</a>
            <a href="https://github.com/Enciosafe"><span className={s.arrow}>></span> GitHub</a>
        </div>
}

export default Contacts