import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Main from '../../src/ui/main'

describe('<Main />', function() {
    it('basic', function() {
	const elem = mount(<Main />);
	expect(Main).to.not.be.null;
    })
})
