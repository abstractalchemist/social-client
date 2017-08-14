import React from 'react';

function TextField({id,type,label}) {
    return (<div className="mdl-textfield mdl-js-textfield">
	    <input className="mdl-textfield__input" type={ type } id={ id }></input>
	    <label className="mdl-textfield__label" for={ id }>{ label }</label>
	    </div>)
}

function Login({action}) {
    return (<form action={action}>
	    <span>Please Login Here</span>
	    <TextField id="username" type="text" label="Email...."/>
	    <TextField id="passd" type="password" label="Password"/>
	    </form>)
}

export default Login;
