import * as constants from './constants';
import { fromJS } from 'immutable'; 
import axios from 'axios';

//由于changeList只在当前页面使用，不需要export暴露出去

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    // 因为store中为immutable对象，所以传过去的也要转化为immutable对象，不能是普通对象
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () =>({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () =>({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () =>({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () =>({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) =>({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));

        }).catch(() => {
            console.log('error');
        })
    }
}