import 'react-native';
import 'isomorphic-fetch';
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import Home from '../../../components/Home/index.js';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const loadingState = {
  home: {
    message: '',
    title: '',
    loading: true
  }
};

const finishedLoadingState = {
  home: {
    message: 'Hello from the backend!',
    title: 'Greetings',
    loading: false
  }
};

describe('Testing Home component', () => {
  it('renders loading state', () => {
    const wrapper = shallow(
      <Home />,
      { context: { store: mockStore(loadingState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('renders loaded state', () => {
    const wrapper = shallow(
      <Home />,
      { context: { store: mockStore(finishedLoadingState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
