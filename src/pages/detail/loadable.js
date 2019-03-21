import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    //当进入想要的页面需要加载页面，加载需要时间，在加载的时间中可以在页面中实现一些临时的内容（用loading来展示存放内容）
    //loading是一个函数，要返回一个组件（也就是临时的文件）
    loading() {
        return <div>正在加载</div>
    }
});

export default () => <LoadableComponent />