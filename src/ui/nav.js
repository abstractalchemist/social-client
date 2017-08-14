import React from 'react';

function Nav({children}) {
    return (<nav className="mdl-navigation">
	    { children }
	    </nav>);
}

export default Nav;
