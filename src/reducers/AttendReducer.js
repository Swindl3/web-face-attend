import {ATTEND_FETCH} from '../actions/ActionType'
export default function(state = [],action ){
    
    switch(action.type){
        case ATTEND_FETCH:
            return action.payload;
        default: //คืนค่ากลับเป็น state เดิม
            return state;

    }

}