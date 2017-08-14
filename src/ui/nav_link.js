import React from 'react';

function NavLink({linkname, clickAction}) {
    return ( <a className="mdl-navigation__link" href="#" onClick={ clickAction }>{ linkname }</a> );
}

export default NavLink;
