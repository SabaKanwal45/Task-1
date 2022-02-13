import axios from 'axios'
import { NODE_ENV } from '../../constants/global'
import { IAuth } from 'store/modules/auth/reducer';
export interface IError {
    message: string
}

const fetchAccessTokenFromCode = async (code: string): Promise<IAuth> => {
    try {
        const BASE_URL = NODE_ENV === 'development' ? 'http://localhost:3000' : ''
        let res:any = await axios.create({
            baseURL: `${BASE_URL}/api/getAccessTokenFromInstagram?code=${code}`,
        }).get('/')
        return {
            access_token: res.data.access_token,
            user_id: res.data.user_id,
            is_logged_in: true,
        }
    } catch(err:any){
        if(err && err.response && err.response.data && err.response.data.error_message){
            throw new Error(`${err.response.data.error_type}: ${err.response.data.error_message}`)
        }
        throw err;
    }
};

export default {
    fetchAccessTokenFromCode
};
