import React from 'react';
import styles from './settings.scss';


export default class Settings extends React.Component {
    constructor(){
        super();
        this.state = {
            chosen: '1',
        }
    }

    changeButtonDisplay = (str) => {
        console.log(str)
        this.setState({
            chosen: str
        })
    }

    render(){
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
                            <button 
                                onClick={() => this.changeButtonDisplay('1')}
                                className={this.state.chosen == '1' ? styles.btn_active : styles.btn}
                            >
                                <div className={styles.text1}>
                                    1
                                </div>
                                <div className={styles.text2}>
                                SEKE'2018 = a surprising balance between Software and Knowledge
                                </div>
                            </button>
                            <button 
                                onClick={() => this.changeButtonDisplay('2')}
                                className={this.state.chosen == '2' ? styles.btn_active : styles.btn}
                            >
                                <div className={styles.text1}>
                                    2
                                </div>
                                <div className={styles.text2}>
                                LATTICE = non-obvious topic for a special session: Conceptual Lattices
                                </div>
                            </button>
                            <button 
                                onClick={() => this.changeButtonDisplay('3')}
                                className={this.state.chosen == '3' ? styles.btn_active : styles.btn}
                            >
                                <div className={styles.text1}>
                                    3
                                </div>
                                <div className={styles.text2}>
                                LATTICE special session = rigorous Software Theory for use in practice
                                </div>
                            </button>
                            <button 
                                onClick={() => this.changeButtonDisplay('4')}
                                className={this.state.chosen == '4' ? styles.btn_active : styles.btn}
                            >
                                <div className={styles.text1}>
                                    4
                                </div>
                                <div className={styles.text2}>
                                SEKE'2018 conference = medium size , high-quality, therefore fosters originality
                                </div>
                            </button>
                        </div>
                        <button className={styles.submit}>SUBMIT</button>
                    </div>
                </div>
            </div>
        )
    }
}
