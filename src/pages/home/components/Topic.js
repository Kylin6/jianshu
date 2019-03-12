import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    TopicMore
} from '../style';

class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item)=>{
                        return(
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')} alt=""/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
                <TopicMore>
                    更多热门专题
                </TopicMore>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.getIn(['home','topicList'])
    }
};

export default connect(mapStateToProps,null)(Topic);