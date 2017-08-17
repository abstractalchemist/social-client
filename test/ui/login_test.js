import React from 'react';
import { mount } from 'enzyme';
import Login from '../../src/ui/login';
import { expect } from 'chai';

describe('<Login />', function() {
    it('basic', function() {
	const elem = mount(<Login />);
	expect(elem).to.not.be.null;
    })

    it('login', function() {
	const elem = mount(<Login />);
	const username = elem.find('#username');
	const passwd = elem.find('#passwd');
	const submit = elem.find('#login-submit');
	const login_form = elem.find('#login-form');
	username.simulate('change', { target: { value: "foo@bar.com" } });
	passwd.simulate('change', { target: { value: "foo" } });
	login_form.simulate('submit');
	
    })
})
      
	 
