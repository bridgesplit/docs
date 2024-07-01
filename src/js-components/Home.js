import clsx from 'clsx';
import React from 'react';
import { Features, Resources } from '@site/src/js-components';
import SearchBar from '@theme/SearchBar'
import styles from './styles.module.css';

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

export default function Home() {
  return (
    <main className="homeContainer">
      <Header />
      <Features />
      <div className={clsx("container")}>
        <hr />
      </div>
      <Resources />
    </main >
  );
}
