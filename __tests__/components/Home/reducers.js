import reducer from '../../../components/Home/reducers';
import { MESSAGE_RECEIVED } from "../../../components/Home/actions"



describe('Home reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('MESSAGE_RECEIVED action', () => {
    const action = {
      type: MESSAGE_RECEIVED,
      title: 'Some title',
      message: 'Some message',
    };

    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});
