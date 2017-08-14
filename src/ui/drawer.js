import React from 'react';

function Drawer({title, children}) {
    return ( <div className="mdl-layout__drawer">
	     <span className="mdl-layout__title">{ title }</span>
	     <nav className="mdl-navigation">
	     { children }
	     </nav>
	     </div> )
}

export default Drawer;
