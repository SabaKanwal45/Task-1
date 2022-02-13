import { takeEvery } from 'redux-saga/effects'

import API from '../../../apis/modules/media';
import { createAsyncSaga } from '../../lib';
import { fetchMediaListByUser } from './reducer';

const asyncFetchAuthSaga = createAsyncSaga(fetchMediaListByUser, API.fetchMediaListByUser);

export default [
    takeEvery(fetchMediaListByUser.request, asyncFetchAuthSaga)
];
