import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { MovieReducer } from './reducers/MovieReducer';
import { TheaterReducer } from './reducers/TheaterReducer';
import { UserReducer } from './reducers/UserReducer';

const rootReducer = combineReducers({
    CarouselReducer,
    MovieReducer,
    TheaterReducer,
    UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));