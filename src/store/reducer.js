import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
 
//combineReducers 将各个小的reducer合并为一个大的reducer
// as  ES6的语法，将一个名字起一个别名

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer;