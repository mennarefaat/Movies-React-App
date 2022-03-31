import { SET_COUNTER } from './types'

export const setCounter = (payload) =>{
    return {
        type:SET_COUNTER,
        payload
    }
}