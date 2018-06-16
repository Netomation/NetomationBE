import React from 'react';
import styles from './contributors.scss';
import Slider from "react-slick";

// const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const SampleArrow = () => (
    <div />
)

const Test = () => {

    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
      };
  

    return(
        <div className={styles.container} >
            
            <div className={styles.pageTitle} >
                <div className={styles.routeName}>Contributors</div>
                <div className={styles._logo}>
                    <div className={styles.logo}>N</div>
                </div>
                <div className={styles.title}>etomation</div>
                <div className={styles.titleLogo}></div>
            </div>
            <Slider className={styles.mainContent} {...settings}>
                <div className={styles.test}>
                    <div className = {styles.picAvatar}>
                        <img src={require('./assets/yakir.png')} className={styles.img} /> 
                    </div>
                    <div className={styles.contentAvatar}>
                        <div className={styles._title}>
                            Yakir Winograd
                        </div>
                        <p>
                        Yakir is a 4th year software engineering student at Azrieli College of Engineering in Jerusalem. Yakir currently works at Oracm company as an Algorithem Engineer.
                        </p>
                    </div>                
                </div>
                <div className={styles.test}>
                    <div className = {styles.picAvatar}>            
                        <img src={require('./assets/Avihu-Harush.png')}  className={styles.img} />
                    </div>
                    <div className={styles.contentAvatar}>
                        <div className={styles._title}>
                            Avihu Harush
                        </div>
                        <p>
                        Avihu is a 4th year software engineering student at Azrieli College of Engineering in Jerusalem. Avihu currently works at ISR company as a Full Stack Developer.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Test;