import React from 'react';
import styles from './home.scss';
import Chart from '../../chart/client/components/app'

import Slider from "react-slick";

let Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.widgetsContainer}>
                <div className={styles.mrr}>mrr</div>
                <div className={styles.subs}>subs</div>
                <div className={styles.churn}>churn</div>
            </div>
            <div classname={styles.chart}>
                <Chart />
            </div>
        </div>
    )
}

export default Home;
