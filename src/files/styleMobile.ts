const fullMobileStyle:string [] = [`/*
* 大家好,我叫花如雪(FlowersLikeSnow),
* 是一个web前端开发工程师,
* 这是一个我为自己而写的简历.
* 让我们一起来看看吧.
* 注意:当前界面的一级类名是.current-page
*/
/* 首先给动画加上过渡效果*/
.current-page{
	transition:all .5s;
}
/* 过渡效果加上了,但是你并没有看到啥,
* 是不是啊?
* 不要着急,继续往下看就是了:
* 过渡效果只是为了让动画更顺畅一点罢了.
* 先改变背景颜色,毕竟白色背景太单调了不是吗?
*/
.current-page{
	background-color:#abb1b1;
}
/*
* 等待所有的字体都变成白色...
*/
.current-page{
	color:#fff;
}
/*
* 但是就这样,肯定还远远不够,嗯,
* 我就加个编辑器,
* 用于装css代码的,
* 将这些代码都装在这里面
*/
.styleEditor{
	width: calc(100% - 1em);
	height:50%;
	min-height:35vh;
	background:#032331;
	border:1px solid #f2f2f2;
}
/*
* 编辑器写好了,但是字体颜色全是白色,
* 是不是太过单调了些?
* 别着急,我马上把代码高亮效果添加上,
* 继续......
*/
.token.comment{color:#b4b4b4;font-family:italic;}
.token.selector{ color: #de8322; }
.token.property{ color: #a230ea; }
.token.punctuation{ color: #29e354;}
.token.function{ color: #de32b0;}
/*
* 代码高亮效果添加了,但是我发现这个编辑器,
* 这样看着好没意思,
* 嗯,加点3D效果,让它看上去像立体模式一样......
*/
.main,.resumeEditor{
	perspective:1000px;
}
/*
* 这只是开启了3D模式,要让它看上去有种立体感,
* 还得加点动画......
*/
.styleEditor{
	transition:none;
	transform:rotateY(1deg) translateZ(-5px);
}
/*
* 我把滚动条的样式也设置一下.
*/
::-webkit-scrollbar{
	width: 0;
}
/*
* 嗯,这个编辑器看来是没啥问题了,但是,
* 我觉得好像少了点什么......
* 哦,对还少了另一个编辑器,毕竟是一个简历网页,
* 得把我的简历写上吧.
* 好吧,接下来,我就再写一个编辑器.
*/
.resumeEditor{
	width: calc(100% - 1em);
	height:50%;
	min-height:35vh;
	background-color:#032331;
	margin-bottom:10px;
}
/*
* 编辑器写好了,开始往里面写内容,我开始介绍我自己了......
*/
`,
`
/*
* 对了这个简历,好像还差点啥.
* 嗯,这只是一个文本介绍,我需要把他打造成HTML页面类型.
* 用一个编译工具markdown编译一下
* 好了,成功了.
*/
`,
`
/*
* 我先把这个编辑器调整一下.
* 再添加点样式.
*/
.resumeEditor{
	padding:10px;
}
.resumeEditor h2{
	display:inline-block;
	border-bottom:1px solid;
	margin:1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
	list-style:none;
}
.resumeEditor ul > li::before{
	content:" ";
	margin-right:.5em;
}
.resumeEditor ol{
	counter-reset:section;
}
.resumeEditor ol li::before{
	counter-increment:section;
	content:counters(section,'.') " ";
	margin-right:.5em;
}
.resumeEditor blockquote{
	margin: 1em;
	padding: .5em;
}
/* 但是这超链接看着不爽,
* 我改美观一些,
*/
.resumeEditor a{
	text-decoration:none;
	color:#2396ef;
}
.resumeEditor a:hover,
.resumeEditor a:active{
	color:#e6a122;
}
/*
* 动画加载完成了.
* 暂停和跳过动画按钮也得移除掉.....
*/
#pause,#skipAnimation{
	display:none;
}
/*
* 当然，你还可以自己编辑样式。
* 比如，我把页面的背景换下
* 
*/
.current-page{
	background-color:#f2f2f2;
}
/*
* 最后,我想听首歌放松放松下.
* 歌名:<真爱你的云>
* 歌手:黄国俊
* 先加个按钮控制音乐的暂停和播放.
*/
#music{
	display:block;
}
/*
* 准备好......
* 3...
* 2...
* 1...
* 音乐开始......
*/`];

export default fullMobileStyle;