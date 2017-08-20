import React from 'react';
import TextField from './textfield'

class Search extends React.Component {
    constructor(props) {
	super(props);
	this.state = { data : [], searchTerm : "" };
    }

    searchClicked(evt) {
	this.props.store.profiles(this.state.searchTerm).subscribe( data => {
	    this.setState({ data: data });
	})
	evt.preventDefault();
    }

    friendMessage(evt) {
	evt.preventDefault();
    }

    onSearch(evt) {
	this.setState({ searchTerm: evt.target.value });
    }

    render() {
	return ( <div className="mdl-grid">
		 <div className="mdl-cell mdl-js-cell">
		 <TextField id="search" change={this.onSearch.bind(this)} value={ this.state.searchTerm } />
		 <button id="search-field" className="mdl-button mdl-js-button mdl-button---raised" onClick={ this.searchClicked.bind(this) } >Search</button>
		     
		 {(_ => {
		     if(this.state.data) {
			 return this.state.data.map( obj => {
			     return (<div className="mdl-card">
				     <div className="mdl-card__title"><h2 className="mdl-card__title-text">{obj.name}</h2></div>
				     <div className="mdl-card__media"></div>
				     <div className="mdl-card__supporting-text">Tags: {obj.tags.map(({tag}) => tag).join(',')}</div>
				     <div className="mdl-card__actions">
				     <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.friendMessage.bind(this)}>Friend Message</button>
				     <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.viewProfile.bind(this)}>View Profile</button>
				     </div>
				     </div>)
			 })
		     }
		 })()
		 }

		 </div>
		 </div>)
    }
}

export default Search;
