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
    .pic{
        // float: left;
        width: 60px;
        height: 60px;
        opacity: .85;
    }
`;

export const DownloadInfo = styled.div`
    // float: right;
    margin-left: 7px;
    display: inline-block;
    vertical-align: middle;
`;