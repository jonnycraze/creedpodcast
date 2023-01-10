import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/data/podcasts-by-genre.json'
import Blurb from './components/Blurb';
import styles from './app.module.scss';
import Header from './components/Header';
import MorePodcasts from './components/MorePodcasts';

export const top5Pocasts = [
  data[1].podcasts[0],
  data[1].podcasts[9],
  data[1].podcasts[2],
  data[1].podcasts[8],
  data[1].podcasts[7],
];

function App() {
  const [showAll, setShowAll] = useState(false);

  const showMorePodcasts = () => {
    setShowAll(true);

    setTimeout(() => {
      const element = document?.getElementById('morePodcastContainer');
      const elementTop = element?.offsetTop || 0;
      const elementPlusWindow = elementTop;
      
      window.scrollTo({
        top: elementPlusWindow,
        left: 0,
        behavior: 'smooth',
      });
    }, 1);
  }

  return (
    <section className={styles.wrapper}>
      <Header data-testid="header" />
      <div className={styles.content}>
        {
          top5Pocasts.map((item, i) => (
            <Blurb data-testid={`blurb-${i}`} data={item} position={i+1} key={i} />
          ))
        }
        <button data-testid="findMoreButton" className={styles.showMoreButton} onClick={showMorePodcasts}>
          Find More Podcasts
        </button>
      </div>
      {showAll &&
        <MorePodcasts data-testid="morePodcasts" />
      }
    </section>
  )
}

export default App
