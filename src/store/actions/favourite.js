
import { SET_FAVOURITE } from './types'

export const setFavourite =(payload)=>{
    return {
        type:SET_FAVOURITE,
        payload
    }
}