import Data from '../../src/data/store';
import { expect } from 'chai';

describe('DataStore', function() {
    it('basic', function() {
	const data = Data;
	expect(data.isLoggedIn()).to.be.false;
    })

    it('login', function(done) {
	const data = Data;
	data.login().subscribe(
	    _ => {
		expect(true).to.be.false; // this indicates failure
		done();
	    },
	    _ => {
		expect(true).to.be.true;  // this indicates success; we expect failure here
		done();
	    });
    })
})
