import React from 'react';
import styles from './home.scss';
import Chart from '../../chart/client/components/app'

import Slider from "react-slick";

let Home = () => {

    return (
        <div className={styles.container}>

            <Chart />
        </div>
    )
}

export default Home;
