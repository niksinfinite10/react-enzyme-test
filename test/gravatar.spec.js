import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';

import Gravatar from '../lib/gravatar';
import Avatar from '../lib/components/avatar';
import Email from '../lib/components/email';

describe('<Gravatar />', () => {
  it('contains an <Avatar /> component', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });
  it('contains an <Email /> component', () => {
    const wrapper = mount(<Email />);
    expect(wrapper.find(Email)).to.have.length(1);
  });
  it('should have initial email state', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });
  it('should have initial src state', () => {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });
  it('should update the src state on clicking fetch', () => {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'n@n.com' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('n@n.com');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('n@n.com')}?s=200`);
  });

});
