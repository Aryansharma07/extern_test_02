import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import { BASE_URL } from "../config";

export const apiCallHandler = async (api, method, body) => {
    const asyncUserDetails = await AsyncStorage.getItem('userDetails')
    // const userDetails = JSON.parse(asyncUserDetails)
    // const token = userDetails?.accessToken ? userDetails?.accessToken : ''
    // console.log(token)
    // const fbToken = userDetails ? userDetails : ''
    // const googleToken = userDetails?.idToken ? userDetails?.idToken : ''
    var config = {
        method: method,
        url: `${BASE_URL}${api}`,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    };
    if (body) {
        config.data = JSON.stringify(body)
    }
    try {
        const res = await axios(config)
        return res.data
    } catch (error) {
       
    };
};
