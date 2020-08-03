import { combineReducers } from "redux";

import { dataReducer } from './dataReducer'
// import {appReducer} from './appReducer'

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;