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
		return {};
	    }
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
