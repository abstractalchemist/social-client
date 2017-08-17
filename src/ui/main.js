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
import ResetPassword from './resetpassword'

class Main extends React.Component {
    constructor(props) {
	super(props);
	this.state = { view : <Login action={this.addViewHandler.bind(this)} /> }
    }

    componentDidMount() {
	componentHandler.upgradeDom();
    }
    
    componentDidUpdate() {
	componentHandler.upgradeDom();
    }

    addViewHandler(view) {
	switch(view) {
	case "Profile":
	    return (evt) => {
		if(evt)
		    evt.preventDefault();
		this.setState({ view: <Profile {...Data.profile()} /> });
	    }
	case "Wall":
	    return (evt) => {
		if(evt)
		    evt.preventDefault();
		this.setState({ view: <Wall /> });
	    }
	case "Search":
	    return (evt) => {
		if(evt)
		    evt.preventDefault();
		this.setState({ view: <Search /> });
	    }
	    
	case "New Account":
	    return (evt) => {
		evt.preventDefault();
		this.setState({ view:  <NewAccount action={this.addViewHandler.bind(this)} /> });
	    }
	case "Login":
	    return (evt) => {
		evt.preventDefault();
		this.setState({ view: <Login action={this.addViewHandler.bind(this)} /> });
	    }
	case "Reset Password":
	    return (evt) => {
		evt.preventDefault();
		this.setState({ view: <ResetPassword action={this.addViewHandler.bind(this)}/> })
	    }
			      
	}
    }

    logout(evt) {
    }
    
    render() {
	const navLoggedIn = [{linkname: 'Profile', clickAction : this.addViewHandler("Profile") },
			     {linkname: 'Wall', clickAction : this.addViewHandler("Wall") },
			     {linkname: 'Search', clickAction : this.addViewHandler("Search") },
			     {linkname: 'Logout', clickAction : this.logout.bind(this)} ]
	      .map( obj => <NavLink {...obj} ></NavLink> );
	const nav = [];

	return ( <div className="mdl-layout mdl-js-layout">
		 <Header title="A Social App">
		 <Nav>
		 { (_ => {
		     if(Data.isLoggedIn())
			 return navLoggedIn;
		     return nav;
		 })() }
		 </Nav>
		 </Header>
		 <Drawer title="A Social App">
		 { nav }
		 </Drawer>
		 <main className="mdl-layout__content">
 		 { this.state.view }
		 </main>
		 </div> );
    }
}

export default Main;
