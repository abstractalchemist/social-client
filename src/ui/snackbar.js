import React from 'react';

function SnackBar({id}) {
    return (<div id={id} className="mdl-snackbar mdl-js-snackbar">
	    <div className="mdl-snackbar__text">
	    </div>
	    <button className="mdl-snackbar__action" type="button"></button>
	    </div>)
}

export default SnackBar;
	   
