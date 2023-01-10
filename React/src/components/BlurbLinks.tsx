import Podcast from "../interfaces/podcast";
import style from './BlurbLinks.module.scss';
import Link from './Link';
import { FaApple } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

interface Props {
    data: Podcast
}

const BlurbLinks:React.FC<Props> = ({data}) => {
    return (
        <div className={style.links}>
            <Link url={`https://podcasts.apple.com/us/podcast/alexa-stop-podcast/id${data.itunes_id}`} label="Itunes">
                <span className={style.linkIcon}>
                    <FaApple />
                </span>
            </Link>
            <Link url={data.website} label="Web">
                <span className={style.linkIcon}>
                    <FaLink />
                </span>
            </Link>
            <Link url={data.rss} label="RSS">
                <span className={style.linkIcon}>
                    <FaRss />
                </span>
            </Link>
        </div>
    )
}

export default BlurbLinks;