import { AUTHENTICATE } from '../actions/types';

const initialState = {
    authenticated: false,
    username: '',
    password: '',
    message: ''
};

export default function(state = initialState, action){
    switch(action.type){
        case AUTHENTICATE:
            return {
                ...action.payload,
                message: action.message
            };
        default: 
            return state;
    }
};