import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Profile from '../../src/ui/profile';

describe('<Profile />', function() {
    it('basic', function() {
	const elem = mount( <Profile /> );
	expect(elem).to.not.be.null;
    })
})
