import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';
import { MovieReducer } from './reducers/MovieReducer';
import { TheaterReducer } from './reducers/TheaterReducer';

const rootReducer = combineReducers({
    CarouselReducer,
    MovieReducer,
    TheaterReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));