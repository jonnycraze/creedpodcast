import { useState, useEffect, useCallback } from 'react';
import style from './MorePodcasts.module.scss';
import data from '../assets/data/podcasts-by-genre.json'
import Podcast from '../interfaces/podcast';
import CondensedBlurb from './CondensedBlurb';
import Select from './Select';

const MorePodcasts = () => {
    const [dataToShow, setDataToShow] = useState<(Podcast)[]>();
    const [filterBy, setFilterBy] = useState('All');
    const Categories = [
        'All',
        'Technology',
        'Web Design'
    ];

    const selectCategory = useCallback((v:any) => {
        setFilterBy(v.currentTarget.value);
    }, [setFilterBy])

    useEffect(() => {
        if (filterBy === 'All') {
            let _data: (Podcast)[] = [];


            data.forEach(d => {
                d.podcasts = d.podcasts.map(p => {
                    return {
                        ...p,
                        category: d.name,
                    }
                });
                _data = [..._data, ...d.podcasts];
            });

            _data = _data.sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            });

            setDataToShow(_data);
            return;
        }

        setDataToShow(data?.find(d => d.name === filterBy)?.podcasts);
    }, [filterBy, data]);


    return (
        <div className={style.container} id="morePodcastContainer">
            <h2 className={style.headline}>More Procasts about Web Design &amp; Technology</h2>
            <Select label='Categories' options={Categories} onChange={selectCategory} />
            {dataToShow &&
                <>
                    <div className={style.totalData}>Total Podcasts: {dataToShow.length}</div>
                    <div>
                        {
                            dataToShow.map(d => (
                                <CondensedBlurb data={d} key={d.id} />
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default MorePodcasts;