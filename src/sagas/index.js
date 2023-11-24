import { delay, all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchedSearchMovies, searchMovies } from '../redux/search';
import TheMovieDbApi from '../lib/api';


const api = new TheMovieDbApi(process.env.REACT_APP_API_KEY);

function* fetchSearchMovies(action) {
  yield delay(500);

  yield put(
    fetchedSearchMovies(yield call(api.searchMovies, action.payload))
  );

}

export default function* watcherSaga() {
  yield all([
    yield takeLatest(searchMovies.type, fetchSearchMovies)
  ])
}
