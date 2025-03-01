import clsx from 'clsx';
import styles from './styles.module.css';
import React from 'react';
import connect from "@site/static/img/docs/onboarding-cards/connect.png"
import points from "@site/static/img/docs/onboarding-cards/points.png"
import borrow from "@site/static/img/docs/onboarding-cards/borrow.png"
import OutwardArrowIcon from '@site/static/img/icons/outward_arrow.svg'

const onboardingSteps = [
    {
        imgPath: connect,
    },
    {
        imgPath: points
    },
    {
        imgPath: borrow
    },
]

const OnboardingStep = (stepDetails) => {
    const { imgPath } = stepDetails;

    return (
        <div className={clsx('card', styles.product)}>
            <OutwardArrowIcon className={clsx(styles.productArrowIcon)} role="img" />
            <img src={imgPath} className={clsx(styles.productImage)} />
        </div>
    )
};

export default function GettingStarted() {
    return (
        <div className="container">
            <div className="row">
                {onboardingSteps.map(productItem =>
                    <div className={clsx('col col--4')}>
                        <OnboardingStep {...productItem} />
                    </div>)
                }
            </div>
        </div>
    );
}
