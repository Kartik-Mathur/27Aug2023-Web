const initialState = {
    value: 1000
};

export default function counterReducer(state=initialState,action){
    switch(action.type){
        case 'INCREASE': return {
            value: state.value + 1
        }
        case 'DECREASE' : return {
            value: state.value - 1
        }
        default :
        return state;
    }
}