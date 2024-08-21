import clsx from 'clsx';
import React from 'react';
import { Features, GettingStarted } from '@site/src/js-components';
import styles from './styles.module.css';
import Advantages from './Advantages';

function Header() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("col col--8 col--offset-2", styles.header)}>
        <h1>Loopscale</h1>
          <p className={clsx(styles.subtitle)}>
            Loopscale is the next generation of onchain borrowing and lending platform that uses an orderbook instead of a curve to determine interest rate.
          </p>
          <Advantages />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="homeContainer">
      <div className={clsx(styles.homeContainer)}>
        <Header />
        <GettingStarted />
        <Features />
      </div>
    </main >
  );
}
