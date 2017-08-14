import React from 'react';

function Header({title,children}) {
    return (<header className="mdl-layout__header">
	    <div className="mdl-layout-icon"></div>
	    <div className="mdl-layout__header-row">
	    <span className="mdl-layout__title">
	    { title }
	    </span>
	    <div className="mdl-layout-spacer">
	    </div>
	    { children }
	    </div>
	    </header>);
}

export default Header;
