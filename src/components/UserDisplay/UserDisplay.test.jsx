import React from 'react';
import { shallow } from 'enzyme';
import UserDisplay from './UserDisplay.jsx';

describe('UserDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<UserDisplay 
      name="dakota druley" 
      link="URL"
      followers="10" 
      following="15"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
