import Navigation from "./Navigation"
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <Navigation />
            <div className={style.banner}>
                <div className={style.headlineWrapper}>
                    <h1 className={style.headline}>Top 5 <span className={style.headlineAccent}>Web Design</span> Podcasts</h1>
                    <div className={style.flourish1}></div>
                    <div className={style.flourish2}></div>
                </div>
            </div>
        </header>
    )
}

export default Header