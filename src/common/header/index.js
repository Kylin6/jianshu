import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreatore } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button,
    Content,
} from './style';
//无状态组件(就是一个函数），好处：它的性能会比价高
class Header extends Component {
    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const pagelist = [];
        const newlist = list.toJS();
        
        if(newlist.length){
            for(let i = (page - 1) * 10; i < page * 10 &&  i < newlist.length; i++){
                pagelist.push(
                    <SearchInfoItem key={newlist[i]}>{ newlist[i] }</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page , totalPage, this.spinIcon)}>
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        { pagelist }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Content>
                    <Logo />
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载App</NavItem>
                        <NavItem className='right'>登录</NavItem>
                        <NavItem className='right'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='slide'
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='writting'>
                            <i className='iconfont'>&#xe615;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Content>
            </HeaderWrapper>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']), // 同 state.get('header').get('focused')
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //建立动作事件
        handleInputFocus(list) {
            console.log(list);
            (list.size === 0) && dispatch(actionCreatore.getList());
            // if(list.size === 0) {
            //      dispatch(actionCreatore.getList());
            // }
            dispatch(actionCreatore.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreatore.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreatore.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreatore.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle) {
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            // spin.style.transform = 'rotate(360deg)';
            if(page<totalPage){
                dispatch(actionCreatore.changePage(page + 1));
            } else {
                dispatch(actionCreatore.changePage(1));
            }
            
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);