import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware             from 'redux-saga';
import rootReducer                      from '../reducers';
import rootSaga                         from '../sagas';

const configureStore = () => {
  const sagaMw = createSagaMiddleware();
  const store = createStore( rootReducer, sagaMw );
  sagaMw.run( rootSaga );
  return store
};

export default configureStore();