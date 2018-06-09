import React from 'react';
import styles from './app.scss';
import Home from './body/home';
import Settings from './body/settings';
import Analytics from './body/analytics';
import Contributors from './body/contributors';

var FontAwesome = require('react-fontawesome')
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboard'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import faMoneyBillAlt from '@fortawesome/fontawesome-free-solid/faMoneyBillAlt'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'
import faClipboardList from '@fortawesome/fontawesome-free-solid/faClipboardList'


const fontawesome = require('@fortawesome/fontawesome')
const faFlag = require('@fortawesome/fontawesome-free-solid/faFlag')
const faSquare = require('@fortawesome/fontawesome-free-solid/faSquare')

import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

const _Button = (data) => (
    <Route render={({ history}) => (
        <button
            className={data.active === data.title ? styles._button : styles.button}
            handleChangeNav
            onClick={() => { data.handleChangeNav(data.title)+history.push(`${data.route}`)}}//) }}
            >
                <div className={styles.icon} >
                    <FontAwesomeIcon icon={data.icon} />        
                </div>
        </button>
  )} />
)

export default class App extends React.Component {
    constructor(){
        super();
        this.state={
            active: 'home',
            data: {
                quantity: 1000,
                interestingness: 0,
                match: 0,
                clicks: 500,
                clickedPercentage: 0,
                notClicked : 0,
                subMatch: 0,
                subInterestingness :0,
                subClickedMatch :0,
                subClickedInterestingness : 0,
            }
        }
    }

    changeData = (newData) => {
        this.setState({
            ...this.state,
            data: newData
        })

    }

    handleChangeNav = (title) => {
        this.setState({
            ...this.state,
            active: title
        })
    }


    setClicked = (value) => {
        let newValue = JSON.parse(value);
        console.log(newValue)
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                clicks: newValue.quantity,
                clickedPercentage: (newValue.quantity/152).toFixed(2) * 100,
                subClickedInterestingness: Number(newValue.interestingness),
                subClickedMatch: Number(newValue.match) 
            }
        })
    }

    setNotClicked = (value) => {
        let newValue = JSON.parse(value);

        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                notClicked: (newValue.quantity/152).toFixed(2) * 100,
                subMatch: Number(newValue.interestingness),
                subInterestingness: Number(newValue.match) 
            }
        })
    }

    setEveryone = (value) => {
        let newValue = JSON.parse(value);

        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                quantity: newValue.quantity,
                interestingness: newValue.interestingness.toString() + ' ' + '%',
                match: newValue.match.toString() + ' ' + '%' 
            }
        })
    }

    componentDidMount(){
        let temp = (text) => {
            this.setClicked(text)
        };
        let temp1 = (text) => {
            this.setNotClicked(text)
        };
        let temp2 = (text) => {
            this.setEveryone(text)
        };

        fetch(`./api/everyone`).then(function(response) {
            response.text().then(function(text){
                temp2(text);
            })
        })

        fetch(`./api/clicked`).then(function(response) {
            response.text().then(function(text){
                temp(text);
            })
        })
        fetch(`./api/notClicked`).then(function(response) {
            response.text().then(function(text){
                temp1(text);
            })
        })

    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <div className={styles.navHeader}>
                        <div className={styles.logo}>N</div>
                    </div>
                    <Redirect to='/' />        
                    <_Button active={this.state.active} route={'/'} handleChangeNav={this.handleChangeNav} title={'home'} icon={faHome}/>
                    <_Button active={this.state.active} route={'/contributors'} handleChangeNav={this.handleChangeNav} icon={faUsers} title={'contributors'}/>
                    <_Button active={this.state.active} route={'/analytics'} handleChangeNav={this.handleChangeNav} icon={faChartLine} title={'analytics'}/>
                    {/* <_Button active={this.state.active} route={'/settings'} handleChangeNav={this.handleChangeNav} icon={faCog} title={'settings'}/> */}
                </div>
                <div className={styles.infoContainer}>
                    <Switch>
                        <Route path="/analytics" render={() => <Analytics
                            quantity={this.state.data.quantity}
                            interestingness = {this.state.data.interestingness}
                            match = {this.state.data.match}
                            clicks = {this.state.data.clicks}
                            clickedPercentage = {this.state.data.clickedPercentage}
                            notClicked = {this.state.data.notClicked}
                            subMatch= {this.state.data.subMatch}
                            subInterestingness = {this.state.data.subInterestingness}
                            subClickedMatch = {this.state.data.subClickedMatch}
                            subClickedInterestingness = {this.state.data.subClickedInterestingness}
                        />} />
                        <Route path="/contributors" render={() => <Contributors />} />
                        {/* <Route path="/settings" render={() => <Settings changeData={this.changeData} />} /> */}
                        <Route path="/" render={() => <Home />} />
                    </Switch>
                </div>
            </div>
        )
    }


    
    componentWillUpdate(previusState, newState){
        console.log(newState)
    }
}