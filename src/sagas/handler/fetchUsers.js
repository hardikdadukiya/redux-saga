import { call, put,  takeLatest } from "redux-saga/effects";
import fetchGetUsers from "../request/fetchUsers";

function* handleGetUsers(action) {
  console.log(action);
  try {
    let users = yield call(fetchGetUsers, action.payload);
    if (!Array.isArray(users)) {
      users = [users];
    }
    yield put({ type: "GET_USERS_SUCCESS", users: users });
  } catch (err) {
    yield put({ type: "GET_USERS_FAILED", message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeLatest("GET_USERS_REQUESTED", handleGetUsers);
}

export default watcherUserSaga;