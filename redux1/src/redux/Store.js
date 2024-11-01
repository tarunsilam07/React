import {createStore} from 'redux'

const reducer=(state={counter:0},action)=>{
    switch(action.type){
        case "INCREMENT": return { ...state, counter: state.counter + 1 };
        case "DECREMENT": return { ...state, counter: state.counter - 1 };
        default:return state;
    }
}

export const store=createStore(reducer);