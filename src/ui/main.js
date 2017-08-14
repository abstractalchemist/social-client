import React from 'react';
import Header from './header';

class Main extends React.Component {
    constructor(props) {
	super(props);
    }

    render() {
	return ( <div className="mdl-layout mdl-js-layout">
		 <Header />
		 </div> );
    }
}

export default Main;
