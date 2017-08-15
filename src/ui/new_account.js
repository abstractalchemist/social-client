import React from 'react';
import TextField from './textfield';

function NewAccount() {
    return (<div className="mdl-grid" style={{ maxWidth: "50%" }}>
	    <div className="mdl-cell mdl-js-cell">
	    <form>
	    <TextField id="name" label="Name...."/>
	    <TextField id="email" label="Email...."/>
	    </form>
	    </div>
	    </div>)
}

export default NewAccount;
