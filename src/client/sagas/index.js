import { take, put, call } from 'redux-saga';
import {
  NPM_CHECK_BEGIN,
  npmCheckSuccess
} from '../actions';
import { npmCheck } from '../services/api';

export function* getNpmCheck() {
  while( yield take(NPM_CHECK_BEGIN) ) {
    const result = yield call(npmCheck);
    yield put(npmCheckSuccess(result))
  }
}

export default [getNpmCheck];
