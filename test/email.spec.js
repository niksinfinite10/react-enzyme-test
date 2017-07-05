import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Email from '../lib/components/email';
describe('<Email />', () => {
  it('should have input for the email', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('input')).to.have.length(1);
  });
  it('should have a button', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('should have a props for handleEmailChange and fetchGravatar', () => {
    const wrapper = shallow(<Email />);
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });
});
