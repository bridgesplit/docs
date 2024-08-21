import clsx from 'clsx';
import styles from './styles.module.css';
import React from 'react';


import OutwardArrowIcon from '@site/static/img/icons/outward_arrow.svg'
import InfoIcon from '@site/static/img/icons/info.svg'
import CodeIcon from '@site/static/img/icons/code.svg'
import OpenBookIcon from '@site/static/img/icons/open_book.svg'

const advantageItems = [
  {
    title: 'Lowest Borrow Rates.',
  },
  {
    title: 'More assets, higher LTVs.',
  },
  {
    title: 'Fixed rates for fixed terms.',
  },
];

function AdvantageContent(advantageItem) {
  const { title } = advantageItem;
  return (
    <div className={clsx('card')}>
      <div className={clsx('card__body')}>
        <div className={clsx(styles.advantageHeader)}>
          <div>
            <InfoIcon className={clsx(styles.advantageIcon)} role="img" />
            <div></div>
          </div>
          <h4>{title}</h4>
        </div>
      </div>
    </div >
  )
}

function Advantage(advantageItem) {
  return (
    <div className={clsx('col col--4 ')}>
      <AdvantageContent {...advantageItem} />
    </div >
  )
};
export default function Advantages() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {advantageItems.map((props, idx) => (
            <Advantage key={idx} {...props} />
          ))}
        </div>
      </div>
    </section >
  );
}
