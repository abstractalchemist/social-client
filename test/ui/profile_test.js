import React from 'react';
import { mount,render } from 'enzyme';
import { expect } from 'chai';
import Profile from '../../src/ui/profile';
import Rx from 'rx';

describe('<Profile />', function() {
    it('basic', function() {
	const elem = mount( <Profile /> );
	expect(elem).to.not.be.null;
    })

    it('test display', function() {
	const elem = mount( <Profile name="Jason Hirata" email="foo@bar.com"/> );
	expect(elem.find("#data-name").text()).to.equal("Jason Hirata");
	expect(elem.find("#data-email").text()).to.equal("foo@bar.com");
    })

    it('test tags', function() {
	let tag = {};
	let tagUpdate = function(_tag) {
	    tag = _tag;
	    return Rx.Observable.create(
		(observer) => {
		    observer.onNext(_tag);
		    observer.onCompleted();
		});
	}
	const elem = mount( <Profile name="Jason Hirata" email="foo@bar.com" tags={[{"tag" : "computer_science"},{"tag":"weiss"}]} changeTags={tagUpdate} />);
	let inputTag = elem.find("#newTag");
	inputTag.simulate('change', { target : { value: "computer_science" } });
	let tag_form = elem.find("#tag-form");
	tag_form.simulate('submit', { });
	expect(tag).to.equal('computer_science');
    })

    it('test delete', function() {
	let tag = {};
	let tagUpdate = function(_tag) {
	    tag = _tag;
	}
	
	const elem = mount( <Profile name="Jason Hirata" email="foo@bar.com" tags={[{"tag" : "computer_science"},{"tag":"weiss"}]} changeTags={tagUpdate} />);
	console.log(elem.debug());
//	elem.find('#delete-tags').simulate('click');
    })
})
