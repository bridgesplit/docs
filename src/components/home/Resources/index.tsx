import clsx from 'clsx';
import styles from './styles.module.css';

import DiscordLogo from "@site/static/img/discord_logo.svg";
import AppLogo from "@site/static/img/app_logo.svg";
import AnalyticsIcon from "@site/static/img/icons/analytics.svg";
import FeedbackIcon from "@site/static/img/icons/feedback.svg";

type ResourceItem = {
    title: string;
    Image: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    slug: string,
};

const ResourceItems: ResourceItem[] = [
    {
        title: "Discord",
        description: <>Join community</>,
        Image: DiscordLogo,
        slug: "https://discord.com/invite/A9xnqqzACF"
    },
    {
        title: "Analytics",
        description: <>Explore metrics</>,
        Image: AnalyticsIcon,
        slug: "https://dashboards.bridgesplit.com",
    },
    {
        title: "Markets",
        description: <>Borrow and lend </>,
        Image: AppLogo,
        slug: "https://app.bridgesplit.com"

    },
    {
        title: "Feedback",
        description: <>Submit requests</>,
        Image: FeedbackIcon,
        slug: "https://bridgesplit.canny.io"
    }
]


function Resource({ title, Image, slug, description }: ResourceItem) {
    return (
        <div className={clsx('col col--6 ')}>
            <a target="_blank" href={slug}>
                <div className={clsx('card', styles.resource)}>
                    <div className={clsx('card__body')}>
                        <div className={clsx(styles.resourceContent)}>
                            <Image className={styles.resourceIcon} role="img" />
                            <div>
                                <h4>{title}</h4>
                                <p className={styles.resourceBody}>{description}</p>
                            </div>
                        </div>
                    </div>
                </div >
            </a>
        </div >
    );
}

export default function Resources(): JSX.Element {
    return (
        <section>
            <div className={clsx("container", styles.resourcesContainer)}>
                <h3>More ways to explore</h3>
                <div className="row">
                    {ResourceItems.slice(0, 2).map((props, idx) => (
                        <Resource key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    {ResourceItems.slice(2, 5).map((props, idx) => (
                        <Resource key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section >
    );
}