import clsx from 'clsx';
import styles from './styles.module.css';

import DiscordLogo from "@site/static/img/discord_logo.svg";
import AppLogo from "@site/static/img/app_logo.svg";
import AnalyticsIcon from "@site/static/img/icons/analytics.svg";
import FeedbackIcon from "@site/static/img/icons/feedback.svg";

type Resource = {
    title: string;
    Image: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    slug: string,
};

const ResourceList: Resource[] = [
    {
        title: "Discord",
        description: <>Join our community.</>,
        Image: DiscordLogo,
        slug: "https://discord.com/invite/A9xnqqzACF"
    },
    {
        title: "Analytics",
        description: <>Explore protocol usage and metrics.</>,
        Image: AnalyticsIcon,
        slug: "https://dashboards.bridgesplit.com",
    },
    {
        title: "Bridgesplit Omni",
        description: <>Borrow and lend on Bridgesplit's interface.</>,
        Image: AppLogo,
        slug: "https://app.bridgesplit.com"

    },
    {
        title: "Feedback",
        description: <>Submit feature requests and issues.</>,
        Image: FeedbackIcon,
        slug: "https://bridgesplit.canny.io"

    }
]


function Resource({ title, Image, slug, description }: Resource) {
    return (
        <div className={clsx('col col--6 ')}>
            <a target="_blank" href={slug} className={clsx(styles.linkedCard)}>

                <div className={clsx('card', styles.outlinedCard)}>
                    <div className={clsx('card__body')}>
                        <div className={clsx(styles.resourceCardContent)}>
                            <Image className={styles.resourceCardIcon} role="img" />
                            <div>
                                <h3>{title}</h3>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </a>
        </div >
    );
}

export default function HomepageResources(): JSX.Element {
    return (
        <section>
            <div className={clsx("container", styles.resourcesContainer)}>

                <div className="row">
                    {ResourceList.slice(0, 2).map((props, idx) => (
                        <Resource key={idx} {...props} />
                    ))}
                </div>

                <div className="row">
                    {ResourceList.slice(2, 4).map((props, idx) => (
                        <Resource key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section >
    );
}