import Podcast from "../interfaces/podcast";
import BlurbLinks from "./BlurbLinks";
import style from './CondensedBlurb.module.scss';

interface Props {
    data: Podcast
}

const CondensedBlurb:React.FC<Props> = ({ data }) => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.thumbnail} src={data.thumbnail} />
            </div>
            <div className={style.contentMiddle}>
                <h3 className={style.title}>{data.title}</h3>
                <p className={style.contentMiddleParagraph}>
                    By: {data.publisher}
                </p>
                <small>{data.category} | {data.country}</small>
                <small className={style.totalEpisodes}>{data.total_episodes} Episodes</small>
                <BlurbLinks data={data} />
            </div>
            {/* <div className={style.contentRight}>
                {data.description}
            </div> */}
        </div>

    )
}

export default CondensedBlurb;