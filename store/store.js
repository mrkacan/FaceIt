import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from '../features/root-reducer';
import {handler as moviesSaga} from '../features/users/sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['users']
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store, null, () => {
    // console.log('state', store.getState());
});
const configureStore = () => {
    return {persistor, store};
};

sagaMiddleware.run(moviesSaga);

export default configureStore;
