import React from 'react';
import { shallow } from 'enzyme';
import RepoList from './RepoList';

describe('RepoList', () => {
  it('match a snapshot', () => {
    const repos = [
      {
        id: 1,
        name: 'dakota-app',
        url: 'URL1'
      },
      {
        id: 2,
        name: 'dakota-app-2',
        url: 'URL2'
      }
    ];
    const wrapper = shallow(<RepoList repos={repos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
