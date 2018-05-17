import React from 'react';
import styles from './app.scss';
import Home from './body/home';
import Conversion from './body/conversion';
import Settings from './body/settings';
import Revenue from './body/revenue';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faDollarSign from '@fortawesome/fontawesome-free-solid/faDollarSign'
import faMoneyBillAlt from '@fortawesome/fontawesome-free-solid/faMoneyBillAlt'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'

import { NavLink, Route, Switch } from 'react-router-dom';

const _Button = (data) => (
    <Route render={({ history}) => (
        <button
            className={data.active === data.title ? styles._button : styles.button}
            handleChangeNav
            onClick={() => { data.handleChangeNav(data.title)+history.push(`${data.route}`)}}//) }}
            >
                <FontAwesomeIcon className={styles.icon} icon={data.icon} />        
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
                    <div className={styles.navHeader}>LS</div>
                    <_Button active={this.state.active} route={'/'} handleChangeNav={this.handleChangeNav} title={'home'} icon={faHome}/>
                    <_Button active={this.state.active} route={'/revenue'} handleChangeNav={this.handleChangeNav} icon={faDollarSign} title={'revenue'}/>
                    <_Button active={this.state.active} route={'/conversion'} handleChangeNav={this.handleChangeNav} icon={faMoneyBillAlt} title={'conversion'}/>
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