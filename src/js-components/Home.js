import clsx from 'clsx';
import React from 'react';
import { Features, Resources } from '@site/src/js-components';
import SearchBar from '@theme/SearchBar'
import styles from './styles.module.css';

function Header() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("col col--8 col--offset-2", styles.header)}>
        <h1>Loopscale Docs</h1>
        <p className={clsx(styles.subtitle)}>
          Loopscale provides market-driven, modular credit infrastructure for the next generation of capital markets.
        </p>
        <SearchBar />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="homeContainer">
      <div className={clsx(styles.homeContainer)}>

        <Header />
        <Features />
      </div>
      {/* <div className={clsx("container")}>
        <hr />
      </div>
      <Resources /> */}
    </main >
  );
}
