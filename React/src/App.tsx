import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/data/podcasts-by-genre.json'
import Blurb from './components/Blurb';
import styles from './app.module.scss';
import Header from './components/Header';

function App() {
  const top5Pocasts = [
    data[1].podcasts[0],
    data[1].podcasts[9],
    data[1].podcasts[2],
    data[1].podcasts[8],
    data[1].podcasts[7],
  ]

  return (
    <section className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {
          top5Pocasts.map((item, i) => (
            <Blurb data={item} position={i+1} key={i} />
          ))
        }
      </div>
    </section>
  )
}

export default App
