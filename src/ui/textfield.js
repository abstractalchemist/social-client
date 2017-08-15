import React from 'react';

function TextField({id, label, type}) {
    type = type || "text";
    return (<div className="mdl-textfield mdl-js-textfield" >
	    <input className="mdl-textfield__input" type={ type } id={ id }>
	    </input>
	    <label className="mdl-textfield__label" htmlFor={ id }>{ label }</label>
	    </div>)
}
	    
export default TextField;
