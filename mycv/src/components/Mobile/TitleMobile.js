import s from "./TitleMobile.module.css"



const TitleMobile = () => {
    return <div>
        <h1 className={s.title}>Hey, I'm Stanislav!</h1>
        <div className={s.arrow}>
            <div className={s.text}>SWIPE</div>
        </div>
    </div>

}

export default TitleMobile

