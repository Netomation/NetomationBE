import React from 'react';
import styles from './app.scss';
import Home from './body/home';
import Analytics from './body/analytics';
import Contributors from './body/contributors';

var FontAwesome = require('react-fontawesome')
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboard'
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign'
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
            active: 'home'
        }
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
                </div>
                <div className={styles.infoContainer}>
                    <Switch>
                        <Route path="/analytics" render={() => <Analytics />} />
                        <Route path="/contributors" render={() => <Contributors />} />
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