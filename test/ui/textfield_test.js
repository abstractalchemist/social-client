import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import TextField from '../../src/ui/textfield'

describe('<TextField />', function() {
    it('basic', function() {
	const elem = mount(<TextField />);
	expect(elem).to.not.be.null;
    })

    it('input', function() {
	let value = "";
	let onChange = function(evt) {
	    value = evt.target.value;
	}
	const elem = mount(<TextField id="test" change={ onChange } value={ value } />);
	const input = elem.find('#test');
	input.simulate('change', { target: { value: "updated" } });
	expect(value).to.equal("updated");
    })
})
