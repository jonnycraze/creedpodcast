import style from './Blurb.module.scss';
import Link from './Link';
import { FaApple } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import BlurbProps from '../interfaces/blurb';

const Blurb:React.FC<BlurbProps> = ({data, position}) => {
    return (
        <article className={style.blurbContent}>
            <div className={style.blurbContentLeft}>
                <div className={style.blurbContentRank}>{position}</div>
                <div className={style.thumbnailContainer}>
                    <img className={style.blurbContentThumbnail} src={data.image} alt={data.description} />
                </div>
                <div className={style.blurbContentLeftBody}>
                    <h2 className={style.blurbContentTitle}>{data.title}</h2>
                    <span className={style.blurbContentPublisher}>
                        by <Link url={data.website} label={data.publisher} alt target="_blank" />
                    </span>
                    <span>{data.total_episodes} episodes</span>
                    <div className={style.blurbContentLinks}>
                        <Link url={`https://podcasts.apple.com/us/podcast/alexa-stop-podcast/id${data.itunes_id}`} label="Itunes">
                            <span className={style.blurbContentLinksIcon}>
                                <FaApple />
                            </span>
                        </Link>
                        <Link url={data.website} label="Web">
                            <span className={style.blurbContentLinksIcon}>
                                <FaLink />
                            </span>
                        </Link>
                        <Link url={data.rss} label="RSS">
                            <span className={style.blurbContentLinksIcon}>
                                <FaRss />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.blurbContentRight}>
                <p className={style.blurbContentRightDescription}>{data.description}</p>
            </div>
        </article>
    )
}

export default Blurb;