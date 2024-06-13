import clsx from 'clsx';
import styles from './styles.module.css';

export const ProductCard = ({ title }) =>
(
    <div className={clsx('card', styles.outlinedCard)}>
        <div className={clsx('card__header')}>
            <h4>{title}</h4>
        </div>
    </div >
);

export const ProductCardRow = ({ cards }) =>
(
    <div className="container">
        <div className="row">
            {cards.map(card =>
                // <div className={clsx(`col col--${(Math.floor(12 / card.length)).toString()}`)}>

                <div className={clsx(`col col--${6}`)}>
                    <ProductCard title={card.title} />
                </div>)
            }
        </div>
    </div>
);

export const FixedTblCol = ({ text }) => (
    <div className="tb_col--200px">{text}</div>
);
