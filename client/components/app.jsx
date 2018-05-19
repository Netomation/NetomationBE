import React from 'react';
import styles from './app.scss';
import Home from './body/home';
import Conversion from './body/conversion';
import Settings from './body/settings';
import Revenue from './body/revenue';

var FontAwesome = require('react-fontawesome')
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faChartLine from '@fortawesome/fontawesome-free-solid/faChartLine'
import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboard'
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign'
import faMoneyBillAlt from '@fortawesome/fontawesome-free-solid/faMoneyBillAlt'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import faClipboardList from '@fortawesome/fontawesome-free-solid/faClipboardList'


const fontawesome = require('@fortawesome/fontawesome')
const faFlag = require('@fortawesome/fontawesome-free-solid/faFlag')
const faSquare = require('@fortawesome/fontawesome-free-solid/faSquare')

import { NavLink, Route, Switch } from 'react-router-dom';

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
                    <_Button active={this.state.active} route={'/'} handleChangeNav={this.handleChangeNav} title={'home'} icon={faHome}/>
                    <_Button active={this.state.active} route={'/revenue'} handleChangeNav={this.handleChangeNav} icon={faClipboardList} title={'revenue'}/>
                    <_Button active={this.state.active} route={'/conversion'} handleChangeNav={this.handleChangeNav} icon={faChartLine} title={'conversion'}/>
                    <_Button active={this.state.active} route={'/settings'} handleChangeNav={this.handleChangeNav} icon={faCog} title={'settings'}/>
                </div>
                <div className={styles.infoContainer}>
                    <Switch>
                        <Route path="/conversion" render={() => <Conversion />} />
                        <Route path="/revenue" render={() => <Revenue />} />
                        <Route path="/settings" render={() => <Settings />} />                            
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