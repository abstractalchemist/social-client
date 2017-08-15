import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Wall from '../../src/ui/wall'

describe('<Wall />', function() {
    it('basic', function() {
	const elem = mount(<Wall />);
	expect(elem).to.not.be.null;
    })
})
