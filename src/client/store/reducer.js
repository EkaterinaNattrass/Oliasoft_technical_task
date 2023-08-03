import { combineReducers } from '@reduxjs/toolkit';
import entities from './entities';

export const rootReducer = (routerReducer) =>
  combineReducers({
    router: routerReducer,
    entities,
  });
