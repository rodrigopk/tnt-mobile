export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../instructions.json';

export function getData(){
    return (dispatch) => {

        setTimeout(() => {
            var message  = Data.message;
            dispatch({type: DATA_AVAILABLE, message: message});
        }, 2000);

    };
}
