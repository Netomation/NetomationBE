import React from 'react';
import styles from './analytics.scss';
import Slider from "react-slick";
import Chart from './chart';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faCertificate from '@fortawesome/fontawesome-free-solid/faCertificate'
import faGem from '@fortawesome/fontawesome-free-solid/faGem'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

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
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faCertificate} />        
                        80%
                    </div>
                </div>
                <div className={styles.intrestingnessContainer}>
                    <div className={styles.header}>Intrestingness</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faGem} />        
                    
                        70%                    
                    </div>
                </div>

                <div className={styles.quantityContainer}>
                    <div className={styles.header}>Quantity</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faUserCircle} />        
                    
                        1000
                    </div>
                </div>

                <div className={styles.clicksContainer}>
                    <div className={styles.header}>Clicks</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faHeart} />        
                        
                        500
                    </div>
                </div>
                <div className={styles.chart}>
                    <Chart 
                        id={'0'}
                        type={'pie'}
                        height = {650}
                        series ={
                            [{
                                name: 'people',
                                colorByPoint: true,
                                data: [{
                                  name: 'Not clicked',
                                  y: 80,
                                  sliced: true,
                                  selected: true
                                }, {
                                  name: 'Clicked',
                                  y: 20
                                },
                                ]
                              }]
                        }
                        // color= {['#0052CC', '#0051ca99']}
                    />
                </div>
            </div>
        </div>
    )
}

export default Test;