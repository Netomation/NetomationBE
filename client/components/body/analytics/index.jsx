import React from 'react';
import styles from './analytics.scss';
import Slider from "react-slick";
import Chart from './chart';

const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const Test = () => {
    return(
        <div className={styles.container} >
            
            <div className={styles.pageTitle} >
                <div className={styles.routeName}>Analytics</div>
                <div className={styles._logo}>
                    <div className={styles.logo}>N</div>
                </div>
                <div className={styles.title}>etomation</div>
                <div className={styles.titleLogo}></div>
            </div>
            <div className={styles.infoContainer} >
                <div className={styles.compatibilityContainer}>
                    <div className={styles.header}>Compatibility</div>
                    <div className={styles.info}></div>
                </div>
                <div className={styles.intrestingnessContainer}>
                    <div className={styles.header}>Intrestingness</div>
                    <div className={styles.info}></div>
                </div>
                <div className={styles.chart}>
                    <Chart 
                        id={'0'}
                        type={'pie'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Test;