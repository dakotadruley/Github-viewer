import React from 'react';
import { shallow } from 'enzyme';
import SearchUser from './Username.jsx';

describe('SearchUser', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<SearchUser 
      username="dakotadruley"
      onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
