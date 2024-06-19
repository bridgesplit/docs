import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import SearchBar from '@theme/SearchBar'
import styles from './index.module.css';
import HomepageResources from '@site/src/components/HomepageResources';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={clsx("container")}>
        <div className={clsx("col col--12")}>

          <Heading as="h1">
            Bridgesplit Docs
          </Heading>
          <p className={clsx(styles.heroSubtitle)}>
            Bridgesplit provides the borrow-lend infrastructure to unlock novel loan collateral and structures on more efficient, flexible capital markets.

          </p>
          <SearchBar />
        </div>
      </div>
    </header>)
}





export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main>
      <div className={clsx(styles.homeContainer)}>

        <HomepageHeader />


        <HomepageFeatures />
      </div>
      <hr />
      <HomepageResources />
    </main >
  );
}