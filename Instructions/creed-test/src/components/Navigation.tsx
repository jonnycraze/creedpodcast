import { FaBars } from "react-icons/fa";
import style from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav>
            <button className={style.button}>
                <FaBars />
            </button>
        </nav>
    )
}

export default Navigation