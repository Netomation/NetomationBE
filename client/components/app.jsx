import React from 'react';
import styles from './app.scss';
import Home from './body/home';
// import Statistics from './body/statistics';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faStar from '@fortawesome/fontawesome-free-solid/faStar'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

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
            active: 'Home'
        }
    }
      

    handleChangeNav = (title) => {
        this.setState({
            ...this.state,
            active: title
        })
    }
    
    handleNavClick = () => {
        this.setState({
            ...this.state,
            navOpen: !this.state.navOpen
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <div className={styles.navHeader}>LS</div>
                    <_Button active={this.state.active} route={'/'} handleChangeNav={this.handleChangeNav} title={'Home'} icon={faHome}/>
                    <_Button active={this.state.active} route={'/statistics'} handleChangeNav={this.handleChangeNav} icon={faStar} title={'Statistics'}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.body}>
                        <Switch>
                            <Route path="/" render={() => <Home />} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
    
    componentWillUpdate(previusState, newState){
        console.log(newState)
    }
}