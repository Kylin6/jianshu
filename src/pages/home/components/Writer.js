import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper,
    SearchInfoSwitch,
    WriterItem,
    WriterMore
} from '../style';

class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <WriterWrapper>
                推荐作者
                <SearchInfoSwitch >
                    <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                    换一批
                </SearchInfoSwitch>
                {
                    list.map((item) =>{
                        return (
                            <WriterItem key={item.get('id')}> 
                                <img className="avatarPic" src={item.get('imgUrl')} alt=""/>
                                <div className="follow">
                                    关注
                                </div>
                                <p className="name">{item.get('name')}</p>
                                <p className="info">{item.get('info')}</p>
                            </WriterItem>
                        )
                    })
                }
                <WriterMore>
                    查看全部
                </WriterMore>
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        list : state.getIn(['home','writerList'])
    }
}

export default connect(mapStateToProps,null)(Writer);