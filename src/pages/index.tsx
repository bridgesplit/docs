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
        <Heading as="h1">
          Bridgesplit Docs
        </Heading>
        <SearchBar />
      </div>
    </header>)
}



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className={clsx(styles.homeContainer)}>

          <HomepageHeader />


          <HomepageFeatures />
        </div>
        <hr />
        <HomepageResources />
      </main>
    </Layout >
  );
}
