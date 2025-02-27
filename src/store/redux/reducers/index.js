import { combineReducers } from "redux";
import { minData , LogInData} from "./Reducer";

const reducers = combineReducers({
  minData: minData,
  LogInData: LogInData,
});

export default reducers;
