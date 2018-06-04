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
                intrestigness: "70%",
                compatibility: "80%",
                clicks: 500,
                clickedPresantage: 50,
                notClicked : 50,
                subCompetability: 20,
                subIntrestingness :80,
                subClickedCompetability :40,
                subClickedIntrestingness : 60,
            }
        }
    }

    changeData = (newData) => {
        console.log( '1')
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
                    <_Button active={this.state.active} route={'/settings'} handleChangeNav={this.handleChangeNav} icon={faCog} title={'settings'}/>
                </div>
                <div className={styles.infoContainer}>
                    <Switch>
                        <Route path="/analytics" render={() => <Analytics
                            quantity={this.state.data.quantity}
                            intrestigness = {this.state.data.intrestigness}
                            compatibility = {this.state.data.compatibility}
                            clicks = {this.state.data.clicks}
                            clickedPresantage = {this.state.data.clickedPresantage}
                            notClicked = {this.state.data.notClicked}
                            subCompetability= {this.state.data.subCompetability}
                            subIntrestingness = {this.state.data.subIntrestingness}
                            subClickedCompetability = {this.state.data.subClickedCompetability}
                            subClickedIntrestingness = {this.state.data.subClickedIntrestingness}
                        />} />
                        <Route path="/contributors" render={() => <Contributors />} />
                        <Route path="/settings" render={() => <Settings changeData={this.changeData} />} />
                        <Route path="/" render={() => <Home />} />
                    </Switch>
                </div>
            </div>
        )
    }

    componentDidMount(){
        {console.log('test')}
    }
    
    componentWillUpdate(previusState, newState){
        console.log(newState)
    }
}