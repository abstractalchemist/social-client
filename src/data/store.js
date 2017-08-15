import Rx from 'rx';

const httpPromise = function(url, method, data) {
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
	ajax.send(data);
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
	
	login(form) {
	    if(form) {
		const login = Rx.Observable.fromPromise(httpPromise(form.action, "POST", new FormData(form)));
		login.subscribe(
		    _ => {
			loggedIn = true;
		    },
		    _ => {
			loggedIn = false;
		    });
		return login;
	    }
	    return Rx.Observable.create(observer => {
		observer.onError();
		observer.onCompleted();
	    });
	}

	
    };
    
})()

export default Data;
