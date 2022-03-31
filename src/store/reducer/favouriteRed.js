import { SET_FAVOURITE, SET_REDUCE } from '.././actions/types'
import { SET_COUNTER } from '.././actions/types'

const INITIAL_STATE={
    counter:0,
    currentMovie:[]
}


export function favouriteReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case SET_FAVOURITE:
            return {
                ...state,
                currentMovie: [...state.currentMovie, action.payload],
                counter: state.currentMovie.length+1
            }
            case SET_REDUCE:
                let index = state.currentMovie.findIndex((movie)=>movie.id === action.payload.id)
                state.currentMovie.splice(index, 1)
                console.log(index)
                return {
                    ...state,
                    currentMovie: [...state.currentMovie],
                    counter: state.currentMovie.length

                }
        case SET_COUNTER:
            return{
                ...state,
                counter:action.payload
            }
            default:
            return state
    }
}