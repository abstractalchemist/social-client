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
	Data.profile().subscribe(
	    _ => {
		this.addViewHandler("Profile")();
	    },
	    _ => {
		console.log("Error attemped auto login");
	    });
    }
    
    componentDidUpdate() {
	componentHandler.upgradeDom();
    }

    addViewHandler(view) {
	switch(view) {
	case "User Profile":
	    return (profile) => {
		return Data.profile(profile).subscribe(data => {
		    this.setState({ view: <Profile {...data} /> });
		})
	    }
	case "Profile":
	    return (evt) => {
		if(evt)
		    evt.preventDefault();
		Data.profile().subscribe(data => {
		    console.log(data);
		    this.setState({ view: <Profile changeTags={function(tag) {
			Data.addTag(tag);
		    }} deleteTags={function(tag) {
			console.log("Deleting " + tag);
			Data.deleteTags(tag).subscribe(_ => {});
		    }} {...data} /> });
		})
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
		this.setState({ view: <Search store={Data} action={this.addViewHandler.bind(this)}/> });
	    }
	    
	case "New Account":
	    return (evt) => {
		evt.preventDefault();
		this.setState({ view:  <NewAccount action={this.addViewHandler.bind(this)} /> });
	    }
	case "Login":
	    return (evt) => {
		if(evt)
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
	
	Data.logout().subscribe(
	    _ => {
		this.addViewHandler("Login")();
	    });
	if(evt)
	    evt.preventDefault();
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
