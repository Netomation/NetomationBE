import React from 'react';
import styles from './analytics.scss';
import Slider from "react-slick";
import Chart from './chart';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import faCertificate from '@fortawesome/fontawesome-free-solid/faCertificate'
import faGem from '@fortawesome/fontawesome-free-solid/faGem'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

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
                    <div className={styles.header}>Number of People</div>
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
                                name: 'clicked',
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
                                name: 'clicked',
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
                                    name: "didn't click",
                                    sliced: true,
                                    selected: true
                                    }, {
                                    name: 'clicked',
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