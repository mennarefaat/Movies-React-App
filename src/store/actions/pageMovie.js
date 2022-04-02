import axios from 'axios'
import { SET_PAGE } from './types'
import { useSelector } from 'react-redux'



export const getMovies=(page,lang)=>async (dispatch)=>{
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=${lang}&api_key=40b9cd171d9532635ec61365b799928f`)
        console.log(res)
        dispatch({
            type: SET_PAGE,
            payload: res.data
        })
    } catch (err) {
        return console.log("data err",err)
    }
}           