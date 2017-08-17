import React from 'react';
import TextField from './textfield'

function ResetPassword({action}) {
    return (<div className="mdl-grid" style={{maxWidth:"70%"}}>
	    <div className="mdl-cell mdl-cell--12-col mdl-cell--middle">
	    <form>
	    <p>
	    Please provide email to send reset url to.
	    </p>
	    <TextField id='email' label='New Password Again' />
	    <p>
	    <input type='submit' className="mdl-button mdl-js-button mdl-button--raised" value="submit" />
	    </p>
	    </form>
	    </div>
	    <div className="mdl-cell mdl-cell--12-col mdl-cell--middle">
	    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={action("Login")}>Back To Login</button>
	    </div>
	    </div>)
}

export default ResetPassword;
