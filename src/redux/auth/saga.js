import {
  all, takeEvery, put, fork,
} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import request from 'request';
import { getToken, clearToken } from '../../helpers/utility';
import actions from './actions';

// const fakeApiCall = true; // auth0 or express JWT
const fakeApiCall = () => {
  request.post(
    {
      url: 'http://localhost:4000/api/session',
      form: {
        user: {
          username: 'Guest',
          password: 'password',
        },
      },
    }, (err, httpResponse, body) => {
      console.log(err);
      console.log(httpResponse);
      console.log(body);
    },
  );
};

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function* () {
    if (fakeApiCall()) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: 'secret token',
        profile: 'Profile',
      });
    } else {
      yield put({ type: actions.LOGIN_ERROR });
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function* (payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function* () {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function* () {
    clearToken();
    yield put(push('/'));
  });
}
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function* () {
    const token = getToken().get('idToken');
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        profile: 'Profile',
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
  ]);
}
