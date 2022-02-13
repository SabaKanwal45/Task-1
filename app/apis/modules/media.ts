import axios from 'axios'
import { IMediaList } from 'store/modules/media/reducer';
export interface IError {
    message: string
}

const fetchMediaListByUser = async (data: string): Promise<IMediaList> => {
    try {
        let reqParams:any = JSON.parse(data);
        const fields = `caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username,children`
        let res:any = await axios.get(`https://graph.instagram.com/v13.0/${reqParams.userId}/media?fields=${fields}&access_token=${reqParams.accessToken}`);
        return {
            data: res.data.data,
            paging: res.data.paging
        };
    } catch(err:any){
        if(err?.response?.data?.error?.message){
            if(err.response.data.error.type === 'OAuthException'){
                console.log("session expired");
            }
            throw new Error(
                `${err.response.data.error.type}: ${err.response.data.error.message}`
            );
        }
        throw err;
    }
};

export default {
    fetchMediaListByUser
};
