import axios from 'axios'
import { SET_LANGUAGE } from './types'


export const setLang=(lang)=>async (dispatch)=>{
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=${lang}&api_key=40b9cd171d9532635ec61365b799928f`)
        console.log(res)
        dispatch({
            type: SET_LANGUAGE,
            payload: res.data
        })
    } catch (err) {
        return console.log("data err",err)
    }
}           