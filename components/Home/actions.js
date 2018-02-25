export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

//Import the sample data
import Data from '../../hello.json';

export const fetchHelloMessage = () => {
    return (dispatch) => {

        setTimeout(() => {
            var message  = Data.message;
            dispatch({type: MESSAGE_RECEIVED, message: message});
        }, 2000);

    };
};

export default { fetchHelloMessage };
