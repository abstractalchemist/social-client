import React from 'react';
import TextField from './textfield';

function Display(profileData) {
    return (<div className="mdl-grid" style={{ maxWidth: "70%"}}>
	    
	    <div className="mdl-cell">
	    <table className="mdl-data-table mdl-js-data-table">
	    <thead>
	    <tr>
	    <th className="mdl-data-table__cell--non-numeric">Attribute</th>
	    <th className="mdl-data-table__cell--non-numeric">Value</th>
	    </tr>
	    </thead>
	    <tbody>
	    <tr>
	    <td className="mdl-data-table__cell--non-numeric">Name</td>
	    <td className="mdl-data-table__cell--non-numeric">{profileData.name}</td>
 	    </tr>
	    
	    <tr>
	    <td className="mdl-data-table__cell--non-numeric">Email</td>
	    <td className="mdl-data-table__cell--non-numeric">{profileData.email}</td>
 	    </tr>
	    </tbody>
	    </table>

	    </div>
	    
	    <div className="mdl-cell">
	    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable">
	    <thead>
	    <tr><th className="mdl-data-table__cell--non-numeric">Tags</th></tr>
	    </thead>
	    <tbody>
	    {(function() {
		if(profileData.tags) {
		    return profileData.tags.map(obj => {
			return ( <tr>
				 <td className="mdl-data-table__cell--non-numeric">{obj}</td>
				 </tr> )
		    });
					       
		}
	    })()
	    }
	    </tbody>
	    </table>

	    <button className="mdl-button mdl-js-button mdl-button--raised" onClick={ profileData.changeTags} >Delete Selected</button>
	    </div>

	    <div className="mdl-cell">
	    <form onSubmit={ profileData.changeTags }>
	    <TextField id="newTag" label="New Tag...." />
	    <p>
	    <input type="submit" className="mdl-button mdl-js-button mdl-button--raised" id="update"/>
	    </p>
	    </form>
	    </div>
	    
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
