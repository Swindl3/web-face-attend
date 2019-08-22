export default function(state = [],action ){
    
    switch(action.type){
        case "attend_fetch":
            return action.payload;
        default: //คืนค่ากลับเป็น state เดิม
            return state;

    }

}