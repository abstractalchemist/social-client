import React from 'react';
import TextField from './textfield';
import Data from '../data/store'
import SnackBar from './snackbar';

function Submit() {
    return ( <input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="Submit"></input> );
}

function NewAccount() {
    return (<input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="new-account" ></input>    )
}

function ResetPassword() {
    return (<input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="reset-password" ></input>    )
}


function Login({action}) {

    function submit(evt) {
	console.log("logging in....");
	evt.preventDefault();
	switch(evt.target.id) {
	case "login-form":
	    Data.login(evt.target).subscribe(
		_ => {
		    action("Profile")(evt);
		},
		_ => {
		    document.querySelector('#login-error').MaterialSnackbar.showSnackbar({message:"Error Logging in.  Please try again"})
		    
		})
	    break;
	case "reset-password":
	    action("Reset Password")(evt);
	    break;
	case "new-account":
	    action("New Account")(evt);
	    break;
	}
	

    }
    
    return (<div className="mdl-grid" style={{maxWidth:"50%"}}>
	    <div className="mdl-cell mdl-cell--middle">
	    <form action={action} onSubmit={submit} id="login-form">
	    <span>Please Login Here</span>
	    <TextField id="username" label="Email...."/>
	    <TextField id="passwd" type="password" label="Password"/>
	    <p>
	    <Submit />
	    </p>
	    </form>
	    
	    <form onSubmit={submit} id="reset-password">
	    <ResetPassword />
	    </form>
	    
	    <form onSubmit={submit} id="new-account">
	    <NewAccount />
	    </form>
	    <SnackBar id="login-error">

	    </SnackBar>
	    </div>
	    </div>)
}

export default Login;
