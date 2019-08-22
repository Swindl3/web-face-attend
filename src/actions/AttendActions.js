import Axios from 'axios'
import { api_url } from "../Api"
export const AttendFetch = () => { // ตัวส่งไป Reducer(ตัวรับ)
    return dispath => {
        Axios.get(api_url)
            .then(res => {
                dispath({ type: "attend_fetch", payload: res.data })
            })
    }

}