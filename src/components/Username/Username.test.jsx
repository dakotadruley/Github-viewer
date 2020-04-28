import React from 'react';
import { shallow } from 'enzyme';
import Username from './Username.jsx';

describe('Username', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Username 
      username="dakotadruley"
      onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
