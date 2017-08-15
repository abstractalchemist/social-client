import Rx from 'rx';

const httpPromise = function(url, method) {
    method = method || "GET";
    return new Promise((resolve, reject) => {
	var ajax = new XMLHttpRequest();
	ajax.open(method, url, true);
	ajax.onreadystatechange = _ => {
	    if(ajax.readyState === 4) {
		if(ajax.status === 200) {
		    resolve(ajax.response);
		}
		else
		    reject();
	    }
	}
	ajax.send();
    })
}

const Data = (function() {

    const url = "";
    let loggedIn = false;
    const dummyProfile = { name: "Jason Hirata", email: "test@foo.com", tags: ["programmer", "pc games", "weiss schwarz"]  };
    const loginURL = "";
    return {
	isLoggedIn() {
	    return loggedIn;
	},

	wall() {
	    if(!loggedIn) {
		return {};
	    }
	},

	profile() {
	    if(!loggedIn) {
		return {  };
	    }
	    return dummyProfile;
	},

	search(parameters) {
	},

	update(myProfile) {
	    if(!loggedIn) {
		return {};
	    }
	},
	
	login() {
	    return Rx.Observable.fromPromise(httpPromise(loginURL));
	}

	
    };
    
})()

export default Data;
