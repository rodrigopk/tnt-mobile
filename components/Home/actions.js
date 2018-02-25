export const DATA_AVAILABLE = 'MESSAGE_RECEIVED';

//Import the sample data
import Data from '../../hello.json';

export const fetchHelloMessage = () => {
    return (dispatch) => {

        setTimeout(() => {
            var message  = Data.message;
            dispatch({type: DATA_AVAILABLE, message: message});
        }, 2000);

    };
};

export default { fetchHelloMessage };
