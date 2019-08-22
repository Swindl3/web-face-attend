import Axios from 'axios'
import { api_url } from "../Api"
import {ATTEND_FETCH} from './ActionType'

export const AttendFetch = () => { // ตัวส่งไป Reducer(ตัวรับ)
    return dispath => {
        Axios.get(api_url)
            .then(res => {
                dispath({ type: ATTEND_FETCH, payload: res.data.body })
            })
    }

}