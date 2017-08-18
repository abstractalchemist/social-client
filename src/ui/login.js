import React from 'react';
import TextField from './textfield';
import Data from '../data/store'
import SnackBar from './snackbar';

function Submit() {
    return ( <input id="login-submit" className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="Submit"></input> );
}

function NewAccount() {
    return (<input id="new-account" className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="new-account" ></input>    )
}

function ResetPassword() {
    return (<input id="reset-password" className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="reset-password" ></input>    )
}


class Login extends React.Component {
    constructor(props) {
	super(props)
	this.state = { email : "", password: "" };
    }

    submit(evt) {
	evt.preventDefault();
	switch(evt.target.id) {
	case "login-form": {
	    let fd = new window.FormData();
	    fd.append("email", this.state.email);
	    fd.append("password", this.state.password);
	    Data.login(evt.target, fd).subscribe(
		_ => {
		    this.props.action("Profile")(evt);
		},
		_ => {
		    let snackbar = document.querySelector('#login-error');
		    if(snackbar)
			snackbar.MaterialSnackbar.showSnackbar({message:"Error Logging in.  Please try again"})
		    
		})
	}
	    break;
	case "reset-password":
	    this.props.action("Reset Password")(evt);
	    break;
	case "new-account":
	    this.props.action("New Account")(evt);
	    break;
	}
	

    }

    updateEmail(evt) {
	this.setState({ email: evt.target.value });
    }

    updatePassword(evt) {
	this.setState({ password: evt.target.value });
    }
    
    render() {
	return (<div className="mdl-grid" style={{maxWidth:"50%"}}>
		<div className="mdl-cell mdl-cell--middle">
		<form action={Data.url() + "/login"} onSubmit={this.submit.bind(this)} id="login-form">
		<span>Please Login Here</span>
		<TextField id="username" label="Email...." value={ this.state.email } change={ this.updateEmail.bind(this) }/>
		<TextField id="passwd" type="password" label="Password" value={ this.state.password } change={ this.updatePassword.bind(this) }/>
		<p>
		<Submit />
		</p>
		</form>
		
		<form onSubmit={this.submit.bind(this)} id="reset-password">
		<ResetPassword/>
		</form>
		
		<form onSubmit={this.submit.bind(this)} id="new-account">
		<NewAccount />
		</form>
		<SnackBar id="login-error" />

		</div>
		</div>)
    }
}
export default Login;
