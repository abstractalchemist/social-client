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

    const baseUrl = "/api";
    let loggedIn = false;
    const dummyProfile = { name: "Jason Hirata", email: "test@foo.com", tags: ["programmer", "pc games", "weiss schwarz"]  };
    const loginURL = "";
    return {
	url() {
	    return baseUrl;
	},
	newAccount(form, fd) {
	    
	    let newAccount = Rx.Observable.fromPromise(httpPromise(form.action, "POST", fd));
	    newAccount.subscribe(
		_ => {
		    loggedIn = true;
		})
	    return newAccount;
	},
	isLoggedIn() {
	    return loggedIn;
	},

	wall() {
	    return [];
	    
	},

	profile() {
	  
	    let profile = Rx.Observable.fromPromise(httpPromise(baseUrl + "/profile")).map(JSON.parse);
	    profile.subscribe(
		_ => {
		    loggedIn = true;
		},
		_ => {
		    loggedIn = false;
		})
	    return profile;
	    
	  
	    
	},

	search(parameters) {
	},

	update(myProfile) {
	    if(!loggedIn) {
		return {};
	    }
	},
	logout() {
	    let logout = Rx.Observable.fromPromise(httpPromise(baseUrl + "/logout", "POST"));
	    logout.subscribe(
		_ => {
		    loggedIn = false
		});
	    return logout;
	},
	
	login(form, fd) {
	    if(fd) {
		
		const login = Rx.Observable.fromPromise(httpPromise(form.action, "POST", fd)).map(JSON.parse);
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
	},

	tags() {
	    return Rx.Observable.fromPromise(httpPromise(baseUrl + "/profile/tags").map(JSON.parse));
	},

	addTag(tag) {
	    return Rx.Observable.fromPromise(httpPromise(baseUrl + "/profile/tags/" + tag, "POST"));
	},
	deleteTags(tags) {
	    
	    return Rx.Observable.fromArray(tags).selectMany(tag => {
		return Rx.Observable.fromPromise(httpPromise(baseUrl + "/profile/tags/" + tag, "DELETE"))
	    });
	},
	profiles() {
	    return Rx.Observable.fromPromise(httpPromise(baseUrl + "/profiles")).map(JSON.parse);
	}
	
    };
    
})()

export default Data;
