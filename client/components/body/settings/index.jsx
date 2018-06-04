import React from 'react';
import styles from './settings.scss';

export default class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chosen: '1',
            arr: []
        }
        console.log(props, 'settings')
    }
    
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            console.log('success')
            let newArr = response;
            console.log(newArr)
            this.setState({
                ...this.state,
                arr: array.push(newArr)
            })
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    componentWillUpdate(previusState, newState){
        console.log(newState)
    }

    changeButtonDisplay = (str) => {
        if(str == '1'){
            fetch(`./api/one_clicked`)
                .then(res => this.checkStatus(res));
            fetch(`./api/one_clicked`)
                .then(res => this.checkStatus(res));
        }
        if(str == '2'){
            fetch(`./api/two_clicked`)
                .then(res => this.checkStatus(res));
            fetch(`./api/two_not_clicked`)
                .then(res => this.checkStatus(res));
        }
        if(str == '3'){
            fetch(`./api/three_clicked`)
                .then(res => this.checkStatus(res));
            fetch(`./api/three_not_clicked`)
                .then(res => this.checkStatus(res));
        }
        if(str == '4'){
            fetch(`./api/four_clicked`)
                .then(res => this.checkStatus(res));
            fetch(`./api/four_not_clicked`)
                .then(res => this.checkStatus(res));
        }

        this.setState({
            chosen: str
        })
    }

    change = () => {
        let newData = {
            quantity: 5000,
            intrestigness: '100%',
            compatibility: '40%',
            clicks: 499,
            clickedPresantage: 20,
            notClicked : 50,
            subCompetability: 20,
            subIntrestingness :80,
            subClickedCompetability :40,
            subClickedIntrestingness :60,
        }
        this.props.changeData(newData);
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
                        <button
                            className={styles.submit}
                            onClick={this.change}
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
