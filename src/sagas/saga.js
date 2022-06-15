// import { delay } from "redux-saga/effects";
// import { takeEvery,put } from "redux-saga/effects";

// function* ageUpAsync(){
//     yield delay(4000)   //this will take 4 second to display action
//     yield put({type:'AGE_UP_ASYNC', value: 1})  // put are usefull to dispatch the action. in this type return new action other-wise same action name go into the infinite loop.
// }

//  function* watchAgeUp(){              // generator function
//         yield takeEvery('AGE_UP', ageUpAsync)  // takeevery means it will take all the action and give result based on recent action. or you can write takeLatest this will take latest action      
// }

// export default watchAgeUp

import { all } from "redux-saga/effects";
import watcherUserSaga from "./handler/fetchUsers";

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}