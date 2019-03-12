import { fromJS } from 'immutable';

const defaultValue = fromJS({
    topicList: [{
        id: 1,
        title: '读书',
        imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id: 2,
        title: '故事',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id: 3,
        title: '简书电影',
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id: 4,
        title: '手绘',
        imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    articleList: [{
        id: 1,
        title: '70条适合摘抄的句子，文艺有韵味',
        desc: '2019.1.15 1，两姓联姻，一堂缔约，良缘永结，匹配同称。 看此日桃花灼灼，宜室宜家，卜他年瓜瓞绵绵，尔昌尔炽。 谨以白头之约，书向鸿笺，...',
        imgUrl: '//upload-images.jianshu.io/upload_images/14833843-5cfd33c7fa11b884.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

    },{
        id: 2,
        title: '70条适合摘抄的句子，文艺有韵味',
        desc: '2019.1.15 1，两姓联姻，一堂缔约，良缘永结，匹配同称。 看此日桃花灼灼，宜室宜家，卜他年瓜瓞绵绵，尔昌尔炽。 谨以白头之约，书向鸿笺，...',
        imgUrl: '//upload-images.jianshu.io/upload_images/14833843-5cfd33c7fa11b884.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

    },{
        id: 3,
        title: '70条适合摘抄的句子，文艺有韵味',
        desc: '2019.1.15 1，两姓联姻，一堂缔约，良缘永结，匹配同称。 看此日桃花灼灼，宜室宜家，卜他年瓜瓞绵绵，尔昌尔炽。 谨以白头之约，书向鸿笺，...',
        imgUrl: '//upload-images.jianshu.io/upload_images/14833843-5cfd33c7fa11b884.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

    },{
        id: 4,
        title: '70条适合摘抄的句子，文艺有韵味',
        desc: '2019.1.15 1，两姓联姻，一堂缔约，良缘永结，匹配同称。 看此日桃花灼灼，宜室宜家，卜他年瓜瓞绵绵，尔昌尔炽。 谨以白头之约，书向鸿笺，...',
        imgUrl: '//upload-images.jianshu.io/upload_images/14833843-5cfd33c7fa11b884.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',

    },]
});

export default (state = defaultValue, action) => {
    switch(action.type) {
        default:
            return state;
    }

}