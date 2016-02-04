import { take, put, call } from 'redux-saga';
import {
  NPM_CHECK_BEGIN,
  npmCheckSuccess
} from '../actions';
import { npmCheck } from '../services/api';

export function* getNpmCheck(getState) {
  while( yield take(NPM_CHECK_BEGIN) ) {
    const path = getState().npmCheck.path;
    const result = yield call(npmCheck, path);
    yield put(npmCheckSuccess(result))
  }
}

export default [getNpmCheck];
