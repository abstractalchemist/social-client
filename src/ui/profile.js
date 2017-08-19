import React from 'react';
import TextField from './textfield';


class TagForm extends React.Component {
    constructor(props) {
	super(props);
	this.state = { value : "" }
    }

    submit(evt) {
	let form = evt.target;
	console.log(this.state.value);
	this.props.changeTags(this.state.value);
	evt.preventDefault();
    }

    onChange(evt) {
	console.log('changing value to ' + evt);
	this.setState({ value: evt.target.value });
    }

    render() {
	return (<div className="mdl-cell">
		<form onSubmit={ this.submit.bind(this) } id="tag-form">
		<TextField id="newTag" label="New Tag...." value={ this.state.value } change={this.onChange.bind(this)}/>
		<p>
		<input value="Add Tag" type="submit" className="mdl-button mdl-js-button mdl-button--raised" id="update"/>
		</p>
		</form>
		</div>)

    }
}

function Display(profileData) {
    return (<div className="mdl-grid" style={{ maxWidth: "70%"}}>
	    
	    <div className="mdl-cell">
	    <table className="mdl-data-table mdl-js-data-table" id="profile-table">
	    <thead>
	    <tr>
	    <th className="mdl-data-table__cell--non-numeric">Attribute</th>
	    <th className="mdl-data-table__cell--non-numeric">Value</th>
	    </tr>
	    </thead>
	    <tbody>
	    <tr>
	    <td className="mdl-data-table__cell--non-numeric">Name</td>
	    <td className="mdl-data-table__cell--non-numeric" id="data-name">{profileData.name}</td>
 	    </tr>
	    
	    <tr>
	    <td className="mdl-data-table__cell--non-numeric">Email</td>
	    <td className="mdl-data-table__cell--non-numeric" id="data-email">{profileData.email}</td>
 	    </tr>
	    </tbody>
	    </table>

	    </div>
	    
	    <div className="mdl-cell">
	    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable" id="tag-table">
	    <thead>
	    <tr><th className="mdl-data-table__cell--non-numeric">Tags</th></tr>
	    </thead>
	    <tbody>
	    {(function() {
		if(profileData.tags) {
		    return profileData.tags.map(({tag}) => {
			return ( <tr>
				 <td className="mdl-data-table__cell--non-numeric">{tag}</td>
				 </tr> )
		    });
					       
		}
	    })()
	    }
	    </tbody>
	    </table>

	    <button id="delete-tags" className="mdl-button mdl-js-button mdl-button--raised" onClick={ function(evt) {
		let table = document.querySelector("#tag-table");
		let values = table.querySelectorAll("tbody tr");
		let selected = [];
		for(let i = 0; i < values.length; ++i) {
		    let tr = values[i];
		    let input = tr.querySelector("input");
		    let data = tr.querySelectorAll("td")[1];
//		    console.log(input);
		    //		    console.log(data);
		    if(input.checked)
			selected.push(data.textContent);
		}
		profileData.deleteTags(selected);
		evt.preventDefault();
		
	    }} >Delete Selected</button>
	    </div>
	    <TagForm changeTags={ profileData.changeTags }/>
	    
	    </div>)

}

function ChangePassword({changePassword}) {
    return (<div className="mdl-grid" style={{ maxWidth : "50%" }}>
	    <div className="mdl-cell">
	    <form onSubmit={ changePassword }>
	    <TextField id="old-password" label="Old Password" type="password" />
	    <TextField id="new-password-1" label="New Password..." type="password" />
	    <TextField id="new-password-2" label="New Password verify" type="password" />
	    <input type="submit" className="mdl-button mdl-js-button mdl-button--raised"></input>
	    
	    </form>
	    </div>
	    </div>)
}


function Profile(profileData) {
    return (<div className="mdl-tabs mdl-js-tabs">

	    {
		// this is the tabs
	    }
	    <div className="mdl-tabs__tab-bar">
	    <a href="#tab1" className="mdl-tabs__tab">Profile</a>
	    <a href="#tab2" className="mdl-tabs__tab">Security</a>
	    </div>

	    <div className="mdl-tabs__panel is-active" id="tab1">
	    <p>Profile</p>
	    <Display {...profileData} />
	    </div>

	    <div className="mdl-tabs__panel" id="tab2">
	    <p>Security</p>
	    <ChangePassword />
	    </div>
	    
	    </div>)
}

export default Profile;
