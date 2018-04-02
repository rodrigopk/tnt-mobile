import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import MessageContainer from '../../../../components/Home/MessageContainer';

describe('MessageContainer component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <MessageContainer message={'Some message'} title={'Some title'} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
