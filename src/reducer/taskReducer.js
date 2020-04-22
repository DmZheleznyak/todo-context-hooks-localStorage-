import uuid from 'uuid/v1';

export const taskReducer = ( state, action ) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state, {
                    name: action.task.name,
                    id: uuid()
                }
            ]
        case 'REMOVE_TASK':
            return state.filter( book => book.id != action.id )   
        default:
            return state      
    }
}