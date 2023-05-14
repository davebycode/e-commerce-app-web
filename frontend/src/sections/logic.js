export const initialState = {
    count: 0
}

export function reducer(state, action) {
    switch(action.type){
        case 'Increased':
            return {
                count: state.count + 1
            }
            case 'Decreased': 
            return{
                count:state - 1
            }
            default:
                return state


    }
}