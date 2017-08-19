import React from 'react';

function TextField({id, label, type, value, change}) {
    type = type || "text";
    return (<div className="mdl-textfield mdl-js-textfield" >
	    <input className="mdl-textfield__input" value={ value } type={ type } id={ id } onChange={change} name={ id }>
	    </input>
	    <label className="mdl-textfield__label" htmlFor={ id }>{ label }</label>
	    </div>)
}
	    
export default TextField;
