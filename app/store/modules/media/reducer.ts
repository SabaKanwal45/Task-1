import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib';
import { IError } from 'apis/modules/media';

export interface IMedia {
    caption: string;
    id: string;
    media_type: string,
    media_url: string,
    permalink: string,
    thumbnail_url: string,
    timestamp: string,
    username: string,
    children: IMedia[]
}
export interface IMediaList {
    data: IMedia[];
    paging: any
}
export interface MediaState {
    mediaList: IMediaList | null;
    message: string;
}

const FETCH_MEDIA_LIST_BY_USER = createAsyncAction('media/FETCH_MEDIA_LIST_BY_USER');
export const fetchMediaListByUser = createActionEntity<string, IMediaList, IError>(FETCH_MEDIA_LIST_BY_USER);

const actions = { fetchMediaListByUser };
const state: MediaState = {
    mediaList: null,
    message: '',
};

const reducer = createCustomReducer(state, actions)
.handleAction(fetchMediaListByUser.success, (state, action) => {
    return { ...state, mediaList: action.payload };
})
.handleAction(fetchMediaListByUser.failure, (state, action) => {
    console.log("inside state changed due to error message")
    console.log(action.payload);
    return { ...state, message: action.payload.message };
});

export default reducer;
