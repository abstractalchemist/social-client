const Data = (function() {

    const url = "";
    let loggedIn = true;
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
	    return { name: "Jason Hirata", email: "test@foo.com" };
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
