import { combineReducers } from 'redux';
import { combineSagas } from '../lib';

import auth from './auth';
import media from './media';


export default {
    rootReducer: combineReducers({auth: auth.reducer, media: media.reducer }),
    rootSagas: combineSagas({ auth: auth.saga, media: media.saga})
};
