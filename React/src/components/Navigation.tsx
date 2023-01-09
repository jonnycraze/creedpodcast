import { FaBars } from "react-icons/fa";
import style from './Navigation.module.scss';

const Navigation = () => {
    return (
        <button className={style.button}>
            <FaBars />
        </button>
    )
}

export default Navigation