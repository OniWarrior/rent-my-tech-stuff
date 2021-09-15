import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/RegisterActions'

const initialState={
    register:{},
    error:'',
    loading:true
}


const registerReducer=(state=initialState,action)=>{
    switch(action.type){
        case REGISTER_START:
            return {...state,loading:true}
        case REGISTER_SUCCESS:
            return {...state,register:action.payload,loading:false}
        case REGISTER_FAILURE:
            return {...state,error:action.payload,loading:false}
        default:
            return state    
    }

}

export default registerReducer