import React from 'react';

function TextField({id,type,label}) {
    return (<div className="mdl-textfield mdl-js-textfield">
	    <input className="mdl-textfield__input" type={ type } id={ id }></input>
	    <label className="mdl-textfield__label" htmlFor={ id }>{ label }</label>
	    </div>)
}

function Submit() {
    return ( <input className="mdl-button mdl-js-button mdl-button--raised" type="submit"></input> );
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
	    <TextField id="username" type="text" label="Email...."/>
	    <TextField id="passd" type="password" label="Password"/>
	    <Submit />
	    </form>
	    </div>
	    </div>)
}

export default Login;
