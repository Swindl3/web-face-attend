import Axios from 'axios'
import { api_url } from "../Api"
import {ATTEND_FETCH} from './ActionType';
import socketIOClient  from "socket.io-client"
let socket;

export const AttendFetch = () => { // ตัวส่งไป Reducer(ตัวรับ)
    const callSocket = () => {
            console.log("Call Socket")
            socket = socketIOClient('ws://10.5.50.112:8888' ,{transports: ['websocket']})  
            socket.on("TEST",msg => {
              console.log(msg)
            })
    }
    return dispath => {
        callSocket();
        Axios.get(api_url)
            .then(res => {
                dispath({ type: ATTEND_FETCH, payload: res.data.body })
                // console.log("DISPATH",res)
            })
    }

}