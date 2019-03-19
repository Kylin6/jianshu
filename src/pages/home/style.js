import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right; 
    padding-top: 30px;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    margin-left: -18px;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const TopicMore = styled.div`
    float: left;
    margin-left: 18px;
    line-height: 32px;
    color: #333;

`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 150px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 30px;
    margin-bottom: 60px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    .recommendItem {
        margin-bottom: 6px;
        width: 280px;
        height: 50px;
    }
`;

export const Download = styled.div`
    margin-bottom: 30px;
    padding: 10px 20px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    vertical-align: middle;
    .pic{
        display:inline-block;
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`;

export const DownloadInfo = styled.div`
    margin-left: 7px;
    display: inline-block;
    vertical-align: middle;
    .title {
        font-size: 15px;
        color: #333;
    }
    .desc {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;

export const WriterWrapper = styled.div`
    // margin-top: 20px;
    // margin-bottom: 15px;
    line-heigth: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    height: 48px;
    .avatarPic{
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius: 50%;
        float: left;
    }
    .follow {
        color: #42c02e;
        margin-top: 5px;
        font-size: 13px;
        float: right;
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        line-height: 20px;
    }
    .info{
        font-size: 12px;
        margin-top: 2px;
    }
`;

export const WriterMore = styled.div`
    margin-top: 20px;
    padding: 7px 7px 7px 12px;
    color: #787878;
    font-size: 13px;
    text-align: center;
    line-height: 19px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
    &:hover{
        background: #ddd;
    }
`;