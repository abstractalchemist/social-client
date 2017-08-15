const Data = (function() {

    const url = "";
    let loggedIn = false;
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
	    return { name: "Jason Hirata", email: "test@foo.com", tags: ["programmer", "pc games", "weiss schwarz"]  };
	},

	search(parameters) {
	},

	update(myProfile) {
	    if(!loggedIn) {
		return {};
	    }
	}

	
    };
    
})()

export default Data;
