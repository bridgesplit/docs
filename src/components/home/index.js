import clsx from 'clsx';
import React from 'react';
import { Features } from '@site/src/components/Features';
import SearchBar from '@theme/SearchBar'
import styles from './index.module.css';
import { Resources } from '@site/src/components/Resources';

function Header() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("col col--10 col--offset-1", styles.header)}>
        <h1> Bridgesplit Docs</h1>
        <p className={clsx(styles.subtitle)}>
          Bridgesplit provides the borrow-lend infrastructure to unlock novel loan collateral and structures on more efficient, flexible capital markets.
        </p>
        <SearchBar />
      </div>
    </div>
  )
}


export const Home = () => (
  <main>
    <Header />
    <Features />
    <div className={clsx("container")}>
      <hr />
    </div>
    <Resources />
  </main >
);