import Config from 'react-native-config'

const API_BASE_URL = Config.API_BASE_URL;
const HELLO_ENDPOINT = 'api/hello';

export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export const fetchHelloMessage = () => {
    return (dispatch) => {
      fetch(API_BASE_URL + HELLO_ENDPOINT)
      .then(response => response.json())
      .then(parsedResponse => {
        dispatch(
          {
            type: MESSAGE_RECEIVED,
            title: parsedResponse.title,
            message: parsedResponse.message
          });
      });
    };
};

export default { fetchHelloMessage };
