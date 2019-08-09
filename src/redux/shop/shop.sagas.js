import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions'
import shopActionsTypes from './shop.types'

export function* fetchCollectionsAsync(){
    yield console.log('fetchCollectionsAsync')

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionsStart(){
    yield takeLatest(
        shopActionsTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    )
}

export function* shopSagas(){
    yield all[call(fetchCollectionsStart)]
}











// takeEvry - слушает каждый акшон специального типа
// call - call method
// put - dispatch