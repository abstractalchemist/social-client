import React from 'react';
import Header from './header';
import Nav from './nav';
import NavLink from './nav_link';
import Drawer from './drawer';
import Login from './login';
import Profile from './profile';
import Wall from './wall';
import Search from './search';
import Data from '../data/store';

class Main extends React.Component {
    constructor(props) {
	super(props);
    }

    componentDidMount() {
	componentHandler.upgradeDom();
    }
    
    componentDidUpdate() {
	componentHandler.upgradeDom();
    }

    render() {
	const nav = [{linkname: 'Profile'},
		     {linkname: 'Wall'},
		     {linkname: 'Search'}]
	      .map( obj => <NavLink {...obj} ></NavLink> );
	return ( <div className="mdl-layout mdl-js-layout">
		 <Header title="A Social App">
		 <Nav>
		 { nav }
		 </Nav>
		 </Header>
		 <Drawer title="A Social App">
		 { nav }
		 </Drawer>
		 <main className="mdl-layout__content">
		 <div className="mdl-grid">
		 <div className="mdl-cell mdl-cell--3-col">
		 <Login />
		 </div>
		 </div>
		 </main>
		 </div> );
    }
}

export default Main;
