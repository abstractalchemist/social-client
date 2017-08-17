import React from 'react';
import TextField from './textfield'
import Data from '../data/store'

class ResetPassword extends React.Component {
    constructor(props) {
	super(props)
	this.state = { email: "" };
    }

    updateEmail(evt) {
	this.setState({ email: evt.target.value });
    }

    submit(evt) {
	let fd = new window.FormData();
	fd.append("email", this.state.email);
	Data.resetPassword(fd).subscribe(
	    _ => {
	    },
	    _ => {
	    });

	evt.preventDefault();
    }

    render() {
	return (<div className="mdl-grid" style={{maxWidth:"70%"}}>
		<div className="mdl-cell mdl-cell--12-col mdl-cell--middle">
		<form action={Data.url() + "/resetpassword"} onSubmit={this.submit.bind(this)}>
		<p>
		Please provide email to send reset url to.
		</p>
		<TextField id='email' label='email' value={ this.state.email }/>
		<p>
		<input type='submit' className="mdl-button mdl-js-button mdl-button--raised" value="submit" />
		</p>
		</form>
		</div>
		<div className="mdl-cell mdl-cell--12-col mdl-cell--middle">
		<button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.props.action("Login")}>Back To Login</button>
		</div>
		</div>)
    }
}
export default ResetPassword;
