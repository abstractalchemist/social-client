import React from 'react';

function Display(profileData) {
    return (<div className="mdl-grid" style={{ maxWidth: "70%"}}>
	    <div className="mdl-cell">
	    <table className="mdl-data-table mdl-js-data-table">
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
	    </div>)

}

function ChangePassword({changePassword}) {
    return (<div className="mdl-grid" sytle={{ maxWidth : "50%" }}>
	    <div className="mdl-cell">
	    <form onSubmit={ changePassword }>
	    <div className="mdl-textfield mdl-js-textfield">
	    <input className="mdl-textfield__input" type="password" id="oldPassword" ></input>
	    <label className="mdl-textfield__label" htmlFor="oldPassword">Old Password</label>
	    </div>

	    <div className="mdl-textfield mdl-js-textfield">
	    <input className="mdl-textfield__input" type="password" id="newPassword1"></input>
	    <label className="mdl-textfield__label" htmlFor="newPassword1">New Password Once</label>
	    </div>

	    <div className="mdl-textfield mdl-js-textfield">
	    <input className="mdl-textfield__input" type="password" id="newPassword2" ></input>
	    <label className="mdl-textfield__label" htmlFor="newPassword2">New Password Again</label>
	    </div>

	    <input type="submit" className="mdl-button mdl-js-button mdl-button-raised"></input>
	    
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
