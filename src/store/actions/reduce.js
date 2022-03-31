import { SET_REDUCE } from './types'

export const setReducer = (payload) =>{
    return {
        type:SET_REDUCE,
        payload
    }
}