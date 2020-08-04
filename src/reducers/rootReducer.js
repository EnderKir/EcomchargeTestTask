import { combineReducers } from "redux";

import { dataReducer } from './dataReducer'
import {appReducer} from './appReducer'

const rootReducer = combineReducers({
    data: dataReducer,
    app: appReducer
});

export default rootReducer;