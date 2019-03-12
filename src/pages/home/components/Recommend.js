import React, { Component } from 'react';
import {
    RecommendWrapper,
    Download,
    DownloadInfo
} from '../style'
class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                <img className='recommendItem' src="//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/>
                <img className='recommendItem' src="//cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png" alt=""/>
                <img className='recommendItem' src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt=""/>
                <img className='recommendItem' src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/>
                <img className='recommendItem' src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/>
                <img className='recommendItem' src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt=""/>

                <Download className='clearfix'>
                    <img className='pic' src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                    <DownloadInfo>
                        <h3 className='title' >下载简书手机App</h3>
                        <p className='desc' > 随时随地发现和创作内容</p>
                    </DownloadInfo>
                </Download>
            </RecommendWrapper>
        )
    }
}

export default Recommend;