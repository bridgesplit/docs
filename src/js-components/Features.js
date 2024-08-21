import clsx from 'clsx';
import styles from './styles.module.css';
import React from 'react';


import OutwardArrowIcon from '@site/static/img/icons/outward_arrow.svg'
import InfoIcon from '@site/static/img/icons/info.svg'
import XLogo from "@site/static/img/x_logo.svg";
import DiscordLogo from "@site/static/img/discord_logo.svg";
import AppLogo from "@site/static/img/app_logo.svg";
import OpenBookIcon from '@site/static/img/icons/open_book.svg'



const featureItems = [
  {
    title: 'Stay Updated',
    Icon: XLogo,
    description: (
      <>
        Follow us on Twitter to get the most recent updates on product, partnerships, and opportunties on Loopscale! 
      </>
    ),
    external_url: "https://x.com/LoopscaleLabs",
    disabled: false
  },
  {
    title: 'Access Alpha',
    Icon: DiscordLogo,
    description: (
      <>
        Jump in the Discord to ask questions, learn about the future of the Loopscale ecosystem, and more.
      </>
    ),
    external_url: "https://discord.gg/loopscale",
    disabled: false
  },
  {
    title: 'Use Loopscale',
    Icon: AppLogo,
    description: (
      <>
        Jump on the app and start lending or borrowing. Rack up points to stay as far ahead as you can.
      </>
    ),
    external_url: "https://app.loopscale.com",
    disabled: false
  },
  {
    title: 'What is Loopscale',
    Icon: InfoIcon,
    description: (
      <>
        Learn about the core concepts of the Loopscale Protocol, Loopscale Markets Application, the Creditbook, and more.
      </>
    ),
    slug: "/concepts",
    disabled: false
  },
  {
    title: 'User Guides',
    Icon: OpenBookIcon,
    description: (
      <>
        Learn how to get started borrowing and lending on Loopscale with easy-to-follow user guides.
      </>
    ),
    slug: "/user-guides/create-an-account",
    disabled: false
  },
];
function Tag({ text }) {
  return <div className={clsx(styles.tag)}><p>{text}</p></div>
}

function FeatureContent(featureItem) {
  const { title, Icon, description, disabled } = featureItem;
  return (
    <div className={clsx('card', disabled && 'disabled')}>
      <div className={clsx('card__body')}>
        <div className={clsx(styles.featureHeader)}>
          <Icon className={clsx(styles.featureIcon)} role="img" />
          {disabled ? <Tag text="Coming Soon" /> : <OutwardArrowIcon className={clsx(styles.featureArrowIcon)} role="img" />}
        </div>
        <h3>{title}</h3>
        <p className={clsx(styles.cardBody)}>{description}</p>
      </div>
    </div >
  )
}

function Feature(featureItem) {
  const { slug, disabled } = featureItem;
  const colSize = featureItem.small ? 'col col--4 ' : 'col col--6 ';
  return (
    <div className={clsx(colSize)}>
      {
        disabled ? <FeatureContent {...featureItem} /> :
          <a target="_self" href={slug}><FeatureContent {...featureItem} /></a>
      }
    </div >
  )
};

export default function Features() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {featureItems.slice(0,3).map((props, idx) => (
            <Feature key={idx} {...{...props, small: true}} />
          ))}
        </div>
        <div className="row">
          {featureItems.slice(3,5).map((props, idx) => (
            <Feature key={idx} {...{...props, small: false}} />
          ))}
        </div>
      </div>
    </section >
  );
}
