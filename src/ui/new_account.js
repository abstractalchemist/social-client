import React from 'react';
import TextField from './textfield';
import Data from '../data/store';
import SnackBar from './snackbar'

class NewAccount extends React.Component {
    constructor(props) {
	super(props);
	this.state = { name: "", email : "", passwd: "", passwd_v: "" }
    }
    submit(evt) {
	evt.preventDefault();
	let fd = new window.FormData();
	fd.append("name", this.state.name);
	fd.append("email", this.state.email);
	fd.append("passwd", this.state.passwd);
	fd.append("passwd-verify", this.state.passwd_v);
	Data.newAccount(evt.target, fd).subscribe(
	    _ => {
		this.props.action("Profile")();
	    },
	    _ => {
		this.setState({name: "", email: "", passwd: "", passwd_v: ""});
		document.querySelector("#error").MaterialSnackbar.showSnackbar({ message: "Error Creating a New Account; please try again" })
	    });
    }

    updateName(evt) {
	this.setState({ name: evt.target.value });
    }

    updateEmail(evt) {
	this.setState({ email: evt.target.value });
    }

    updatePassword(evt) {
	this.setState({ passwd: evt.target.value });
    }

    updatePassword_V(evt) {
	this.setState({ passwd_v: evt.target.value });
    }

    render() {
	return (<div className="mdl-grid" style={{ maxWidth: "50%" }}>
		<div className="mdl-cell mdl-js-cell">
		<form action={Data.url() + "/account"} onSubmit={this.submit.bind(this) }>
		<h2>Create A New Account</h2>
		<TextField id="name" label="Name...." change={ this.updateName.bind(this) } value={ this.state.name }/>
		<TextField id="email" label="Email...." change={ this.updateEmail.bind(this) } value={ this.state.email }/>
		<TextField id="passwd" type="password" label="Password..." change={ this.updatePassword.bind(this) } value={ this.state.passwd }/>
		<TextField id="passwd-verify" type="password" label="Type Again to Verify" change={ this.updatePassword_V.bind(this) } value={ this.state.passwd_v }/>
		<p>
		<input type="submit" className="mdl-button mdl-js-button mdl-button--raised" name="submit" value="Submit" />
		</p>
		</form>
		<button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.props.action("Login")}>Back To Login</button>
		</div>
		<SnackBar id="error" />
		</div>)
    }
}

export default NewAccount;
