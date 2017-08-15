import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Search from '../../src/ui/search'

describe('<Search />', function() {
    it('basic', function() {
	const elem = mount(<Search />);
	expect(elem).to.not.be.null;
    })
})
