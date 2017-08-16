import React from 'react';

function Wall({data,update}) {
    return (<div className="mdl-grid" style={{maxWidth:"70%"}}> 
	    <div className="mdl-cell mdl-cell--12-col">
	    <form onSubmit={update}>
	    <div className="mdl-textfield mdl-js-textfield">
	    <textarea className="mdl-textfield__input" type="text" rows={3} id="today"></textarea>
	    <label className="mdl-textfield__label" htmlFor="today">Whats up today</label>
	    </div>
	    <p>
	    <input type='submit' className="mdl-button mdl-js-button mdl-button--raised" value="submit"/>
	    </p>
	    </form>
	    {( _ => {
		if(data) {
		    return data.map(obj => {
			return (<div className="mdl-cell--12-col mdl-cell">
				</div>)
		    })
		}
	    })()}
	    </div>
	    </div>)
}

export default Wall;
