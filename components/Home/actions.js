const API_BASE_URL = 'https://totally-not-twiter.herokuapp.com/';
const HELLO_ENDPOINT = 'api/hello';

export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export const fetchHelloMessage = () => {
    return (dispatch) => {
      fetch(API_BASE_URL + HELLO_ENDPOINT)
      .then(response => response.json())
      .then(parsedResponse => {
        var message  = parsedResponse.message;
        dispatch({type: MESSAGE_RECEIVED, message: message});
      });
    };
};

export default { fetchHelloMessage };
