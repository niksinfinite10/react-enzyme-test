import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from '../lib/components/avatar';

describe('<Avatar />', () => {
  it('shuld have an image to display the gravatar', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.props().email).to.be.defined;
    expect(wrapper.props().src).to.be.defined;
  });
});
