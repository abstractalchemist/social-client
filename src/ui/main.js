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
import NewAccount from './new_account';

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

    addViewHandler(view) {
	return function() {
	    console.log(view + " clicked");
	    switch(view) {
	    case "Profile":
		return ( <Profile {...Data.profile()} /> );
	    case "Wall":
		return ( <Wall /> );
	    case "Search":
		return ( <Search /> );
	    
	    case "New Account":
		return ( <NewAccount /> );
	    }
	}
    }
    
    
    render() {
	const nav = [{linkname: 'Profile', clickAction : this.addViewHandler("Profile") },
		     {linkname: 'Wall', clickAction : this.addViewHandler("Wall") },
		     {linkname: 'Search', clickAction : this.addViewHandler("Search") }]
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
 		 { (function() {
		     if(Data.isLoggedIn()) 
			 return ( <Profile {...Data.profile()}/> );
		     else
			 return ( <Login /> );
		 })()
		 }
		 </main>
		 </div> );
    }
}

export default Main;
