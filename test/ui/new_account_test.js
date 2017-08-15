import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import NewAccount from '../../src/ui/new_account';

describe('<NewAccount />', function() {
    it('basic', function() {
	const elem = mount(<NewAccount />);
	expect(elem).to.not.be.null;
    })
})
