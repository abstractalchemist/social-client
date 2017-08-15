import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TextField from '../../src/ui/textfield'

describe('<TextField />', function() {
    it('basic', function() {
	const elem = mount(<TextField />);
	expect(elem).to.not.be.null;
    })
})
