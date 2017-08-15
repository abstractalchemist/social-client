import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import NewAccount from '../../src/ui/new_account';

describe('<NewAccount />', function() {
    const click = function() {
	return function(evt) {
	}
    };
    it('basic', function() {
	const elem = mount(<NewAccount action={click}/>);
	expect(elem).to.not.be.null;
    })
})
