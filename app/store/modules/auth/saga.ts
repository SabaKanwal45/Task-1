import { takeEvery } from 'redux-saga/effects'

import API from '../../../apis/modules/auth';
import { createAsyncSaga } from '../../lib';
import { fetchAccessTokenByCode } from './reducer';

const asyncFetchAuthSaga = createAsyncSaga(fetchAccessTokenByCode, API.fetchAccessTokenFromCode);

export default [
    takeEvery(fetchAccessTokenByCode.request, asyncFetchAuthSaga)
];
