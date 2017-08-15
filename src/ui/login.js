import React from 'react';
import TextField from './textfield';

function Submit() {
    return ( <input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="Submit"></input> );
}

function NewAccount() {
    return (<input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="new-account"></input>    )
}

function ResetPassword() {
    return (<input className="mdl-button mdl-js-button mdl-button--raised" type="submit" value="reset-password"></input>    )
}


function Login({action}) {

    function submit(evt) {
	console.log("logging in....");
	evt.preventDefault();
    }
    
    return (<div className="mdl-grid" style={{maxWidth:"50%"}}>
	    <div className="mdl-cell mdl-cell--middle">
	    <form action={action} onSubmit={submit}>
	    <span>Please Login Here</span>
	    <TextField id="username" label="Email...."/>
	    <TextField id="passd" type="password" label="Password"/>
	    <p>
	    <Submit />
	    </p>

	    <p>
	    <ResetPassword />
	    </p>

	    <p>
	    <NewAccount />
	    </p>
	    
	    </form>
	    </div>
	    </div>)
}

export default Login;
