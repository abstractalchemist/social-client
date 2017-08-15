import React from 'react';
import TextField from './textfield';

function NewAccount({action}) {
    return (<div className="mdl-grid" style={{ maxWidth: "50%" }}>
	    <div className="mdl-cell mdl-js-cell">
	    <form>
	    <h2>Create A New Account</h2>
	    <TextField id="name" label="Name...."/>
	    <TextField id="email" label="Email...."/>
	    <TextField id="passwd" label="Password..."/>
	    <TextField id="passwd-verify" label="Type Again to Verify"/>
	    <p>
	    <input type="submit" className="mdl-button mdl-js-button mdl-button--raised" name="submit" value="Submit" />
	    </p>
	    </form>
	    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={action("Login")}>Back To Login</button>
	    </div>
	    </div>)
}

export default NewAccount;
