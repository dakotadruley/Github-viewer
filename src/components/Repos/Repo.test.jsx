import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Repo
      name="dakota-app"
      url="url" />);
    expect(wrapper).toMatchSnapshot();
  });
});
