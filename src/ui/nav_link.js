import React from 'react';

function NavLink({linkname}) {
    return ( <a className="mdl-navigation__link" href="#">{ linkname }</a> );
}

export default NavLink;
