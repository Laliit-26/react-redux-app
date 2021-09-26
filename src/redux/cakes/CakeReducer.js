import { BUY_CAKE } from "./CakeType"
const initialState = {
    numofcakes:10
}

const CakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,numofcakes:state.numofcakes-1
            }
        default:
            return state
    }
}

export default CakeReducer;