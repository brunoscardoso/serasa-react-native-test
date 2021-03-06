import { Alert } from 'react-native';
import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';
import NavigationService from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';

/**
 * @param { payload } = { username, password }
 */
export function* signIn({ payload }) {
  try {
    const res = yield call(api.post, 'session', payload);

    const { token, user } = res.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    const { error } = err.response.data;
    const msg = error || 'Houve um erro no login, verifique seus dados!';

    Alert.alert('Falha no autenticação', msg);
    yield put(signFailure());
  }
}

/**
 * @param { payload } = { username, password }
 */
export function* signUp({ payload }) {
  try {
    yield call(api.post, 'users', payload);

    Alert.alert(
      'Sucesso',
      'Cadastro realizado com sucesso, vamos direcionar você para o login..',
      [{ text: 'OK', onPress: () => NavigationService.navigate('SignIn') }]
    );
  } catch (err) {
    const { error } = err.response.data;
    const msg = error || 'Houve um erro no cadastro, verifique seus dados!';

    Alert.alert('Falha no cadastro', msg);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
