import React from 'react';
import styles from './home.scss';


const SampleArrow = () => (
    <div />
)

const Home = () => {

    return(
        <div className={styles.container} >
            
            <div className={styles.pageTitle} >
                <div className={styles.routeName}>Home page</div>
                <div className={styles._logo}>
                    <div className={styles.logo}>N</div>
                </div>
                <div className={styles.title}>etomation</div>
                <div className={styles.titleLogo}></div>
            </div>
            <div className={styles.infoContainer} >
                <div className={styles.infoTitle}>About the project:</div>
                <div className={styles.contentContainer}>
                    <p>
                    This project engages in the effort of igniting an interest in a specific topic or conference by using social networks. The success ratio of finding relevant audience and igniting interest is measured by a relevant interestingness model.
                    Large social Networks have marketing potential to
                    spread information about interesting events to suitable audiences.
                    However, huge network sizes and varieties of information
                    available are obstacles to reach the desired goal. In this project we
                    investigate the hypothesis of computable Interestingness as a
                    criterion to focus on suitable audiences for any given event.
                    Interestingness is calculated by combining two functions:
                    Relevance and Surprise. A generic software tool has been
                    developed (Called Netomation) as an experimental testbed to interact with any social
                    network. Its inputs are the event characterization and audience
                    candidates for the given event. Two results validate this work’s
                    hypothesis: first, audience candidates who actually visited the
                    event site, have on the average a bigger computed Interestingness
                    than the rest of the population; second and most important,
                    computed Interestingness better differentiates event site visitors,
                    actually interested in the Event, from non-visitors, while
                    Relevance alone, does not distinguish so-well between visitors and
                    non-visitors. Throughout the project all relevant data was saved to a dedicated database and analyzed on a dedicated server. This project is the result of the combined effort of Yakir Winograd & Avihu Harush led by Prof. Iaakov Exman.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;