import * as constants from './constants';
import { fromJS } from 'immutable';

//immutable 
//fromJS 会将一个js对象转化为一个immutable对象

const defaultValue = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

//reducer导出的是一个纯函数
export default (state = defaultValue, action) => {
    // if(action.type === constants.SEARCH_FOCUS){
    //     // immutable对象的set方法，会结合之前immutable对象的值
    //     // 和设置的值，返回一个全新的对象
    //     return state.set('focused',true);
    //     //怎么对state变更，它是先拿到state，在拿到你想要变更的内容，做结合返回一个全新的对象，这个时候他并没有改变原始的state
    //     //使用immutable就可以完全避免自己不小心改变state里的数据的情况
    // }
    // if(action.type === constants.SEARCH_BLUR){
    //     return state.set('focused',false);
    // }
    // if(action.type === constants.CHANGE_LIST){
    //     return state.set('list', action.data);
    // }
    // return state;

    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({
                list : action.data,
                totalPage : action.totalPage
            })
            
            // 同 state.set('list', action.data).set('totalPage',action.totalPage);  merge 可以同时批量的去改变state中的内容
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default :
            return state;
    }
}