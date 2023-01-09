import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/data/podcasts-by-genre.json'
import Blurb from './components/Blurb';
import styles from './app.module.scss';
import Header from './components/Header';
import MorePodcasts from './components/MorePodcasts';

function App() {
  const [showAll, setShowAll] = useState(false);
  const top5Pocasts = [
    data[1].podcasts[0],
    data[1].podcasts[9],
    data[1].podcasts[2],
    data[1].podcasts[8],
    data[1].podcasts[7],
  ];

  const showMorePodcasts = () => {
    setShowAll(true);

    setTimeout(() => {
      const element = document?.getElementById('morePodcastContainer');
      const elementTop = element?.offsetTop || 0;
      const elementPlusWindow = elementTop;
      // console.log(element.offsetTop);
      // debugger;
      scrollTo({
        top: elementPlusWindow,
        left: 0,
        behavior: 'smooth',
      });
    }, 1);
  }

  return (
    <section className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {
          top5Pocasts.map((item, i) => (
            <Blurb data={item} position={i+1} key={i} />
          ))
        }
        <button className={styles.showMoreButton} onClick={showMorePodcasts}>
          Find More Podcasts
        </button>
      </div>
      {showAll &&
        <MorePodcasts />
      }
    </section>
  )
}

export default App
