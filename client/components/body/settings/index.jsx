import React from 'react';
import styles from './settings.scss';


const Test = () => {

    return(
        <div className={styles.container} >
            
            <div className={styles.pageTitle} >
                <div className={styles.routeName}>Settings</div>
                <div className={styles._logo}>
                    <div className={styles.logo}>N</div>
                </div>
                <div className={styles.title}>etomation</div>
                <div className={styles.titleLogo}></div>
            </div>
            <div className={styles.infoContainer} >
                <div className={styles.info}>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>message one</button>
                        <button className={styles.btn}>message two</button>
                        <button className={styles.btn}>message three</button>
                        <button className={styles.btn}>message four</button>
                    </div>
                    <button className={styles.submit}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Test;