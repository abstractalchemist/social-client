import React from 'react';
import { mount } from 'enzyme';
import Login from '../../src/ui/login';
import { expect } from 'chai';

describe('<Login />', function() {
    it('basic', function() {
	const elem = mount(<Login />);
	expect(elem).to.not.be.null;
    })
})
      
	 
