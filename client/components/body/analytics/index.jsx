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

const Test = (props) => {
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
                    <div className={styles.header}>Match Score</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faCertificate} />        
                        {props.match}
                    </div>
                </div>
                <div className={styles.intrestingnessContainer}>
                    <div className={styles.header}>Interestingness Score</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faGem} />        
                    
                        {props.interestingness}                   
                    </div>
                </div>

                <div className={styles.quantityContainer}>
                    <div className={styles.header}>Number of Pepole</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faUserCircle} />        
                    
                        {props.quantity}
                    </div>
                </div>

                <div className={styles.clicksContainer}>
                    <div className={styles.header}>Number of Clicks</div>
                    <div className={styles.info}>
                        <FontAwesomeIcon className={styles.icon} icon={faHeart} />        
                        
                        {props.clicks}
                    </div>
                </div>

                <div className={styles.chart}>
                    {/* main */}
                    <Chart 
                        height = {600}
                        title={'Clicked ratio'}
                        subTitle={'Main'}
                        className={styles.chart1}
                        id={'0'}
                        type={'pie'}
                        clicked = {props.clickedPercentage}
                        notClicked = {props.notClicked}
                        cat_1="clicked"
                        cat_2="didn't click"

                        series = {
                            [{
                                name: 'people',
                                colorByPoint: true,
                                data: [{
                                name: "didn't click",
                                sliced: true,
                                selected: true
                                }, {
                                name: 'Clicked',
                                },
                                ]
                            }]
                        }
                    />

                    {/* interestingness */}
                    <Chart 
                        title={'Interestingness ratio'}
                        id={'1'}
                        type={'pie'}
                        height = {600}
                        cat_1="clicked"
                        cat_2="didn't click"
                        subTitle={'Interestingness'}

                        clicked = {props.subClickedInterestingness}
                        notClicked = {props.subInterestingness}

                        series = {
                            [{
                                name: 'people',
                                colorByPoint: true,
                                data: [{
                                name: "didn't click",
                                sliced: true,
                                selected: true
                                }, {
                                name: 'Clicked',
                                },
                                ]
                            }]
                        }
                    />

                    {/* match */}
                        <Chart 
                            cat_1="clicked"
                            cat_2="didn't click"
                            id={'2'}
                            height = {600}
                            type={'pie'}
                            title={'Match ratio'}
                            subTitle={'Match'}

                            notClicked = {props.subClickedMatch}
                            clicked = {props.subMatch}
                            series = {
                                [{
                                    name: 'match',
                                    colorByPoint: true,
                                    data: [{
                                    name: "didn't click match",
                                    sliced: true,
                                    selected: true
                                    }, {
                                    name: 'Clicked match',
                                    },
                                    ]
                                }]
                            }
                        />
                    </div>
                </div>
            </div>
    )
}

export default Test;