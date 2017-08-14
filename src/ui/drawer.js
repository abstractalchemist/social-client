import React from 'react';

function Drawer({title, children}) {
    return ( <div className="mdl-layout__drawer">
	     <span className="mdl-layout__title">{ title }</span>
	     </div> )
}

export default Drawer;
