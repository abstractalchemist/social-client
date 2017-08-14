import React from 'react';

function Header({title}) {
    return (<header className="mdl-layout__header">
	    <div className="mdl-layout-icon"></div>
	    <div className="mdl-layout__header-row">
	    <span className="mdl-layout__title">
	    { title }
	    </span>
	    </div>
	    </header>);
}

export default Header;
