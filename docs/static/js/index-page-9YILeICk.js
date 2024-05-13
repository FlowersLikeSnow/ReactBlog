import{b as e,Q as D,J as o,S as Q}from"./common-ntSfBM1a.js";import{P as O,I as K,e as X}from"./element-ui-B79v0QtT.js";import{d as ee}from"./chatgpt-CYDpgU_b.js";const z=[`/*
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
	width:45%;
	height:77vh;
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
	position:absolute;
	right:7%;
	top:0;
	transition:none;
	transform:rotateY(-10deg) translateZ(100px);
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
	position:absolute;
	left:0;
	top:0;
	width:45%;
	height:93vh;
	background-color:#032331;
	transform:rotateY(10deg) translateZ(-100px);
}
/*
* 编辑器写好了,开始往里面写内容,我开始介绍我自己了......
*/
`,`
/*
* 对了这个简历,好像还差点啥.
* 嗯,这只是一个文本介绍,我需要把他打造成HTML页面类型.
* 用一个编译工具markdown编译一下
* 好了,成功了.
*/
`,`
/*
* 我先把这个编辑器调整一下.
* 再添加点样式.
*/
.resumeEditor{
	padding:2em;
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
*/`],te=[`/*
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
	width:100%;
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
	width:100%;
	height:50%;
	min-height:35vh;
	background-color:#032331;
}
/*
* 编辑器写好了,开始往里面写内容,我开始介绍我自己了......
*/
`,`
/*
* 对了这个简历,好像还差点啥.
* 嗯,这只是一个文本介绍,我需要把他打造成HTML页面类型.
* 用一个编译工具markdown编译一下
* 好了,成功了.
*/
`,`
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
*/`],$=`
* 花如雪(FlowersLikeSnow),
* 目前在长沙工作
-----
技能
-----
* 熟练HTML,CSS,JS
* 熟悉vue.js,react.js,jQuery以及typescript
* 熟悉Ant Design,element UI,iview,uniApp,layUI,bootstrap等框架，熟悉less,sass
* 对canvas也有接触，如three.js,echarts.js或者canvas
* 对后台服务也开发也有一定了解，如Golang,Node进行后台服务开发
* 使用Electron<js>,Wails<go>进行桌面端开发
* 高效的自学能力
-----
工作项目
-----
* [计支宝官网](https://www.jizhibao.com.cn/)
* [计支宝后台管理](https://www.jizhibao.com.cn/login)
* [计支宝App](https://jf-open-prod-1301446188.cos.ap-guangzhou.myqcloud.com/app/appDownload/jizhibao.html)
* [水羊集团官网](https://www.syounggroup.com/)
* [石基环企逸云eCloud业务管理平台系统软件V1.0](https://ecloud-test.galasystec.net.cn/#/login)
* [环企电商平台系统软件V1.0](https://ecloud-test.galasystec.net.cn/pda/#/login)
* [石基环企-智能收银系统](https://ecloud-test.galasystec.net.cn/pos/#/login)
* [石基环企逸云eCloud运营管理平台](https://ecloud-test.galasystec.net.cn/platform/#/login)
* 石基环企自助机售票APP
* 相关APP页面若干
-----
个人项目
-----
* [暂时没想好放什么...](http://lijundong.cn)

* 本效果参考了该[源码](https://github.com/eveningwater/vue-resume)，在该基础上更新当前React版本。
> 如果你喜欢这个效果的话,欢迎私信我。`,oe=e.forwardRef((w,m)=>{const{styleCode:n,setStyleCode:s}=w,a=b=>{console.log({e:b}),s(b.target.textContent||"")},p=e.useMemo(()=>`<style>${n}</style>`,[n]),i=e.useMemo(()=>D.highlight(n,D.languages.css,"zh"),[n]);e.useImperativeHandle(m,()=>({goBottom:h,containerRef:l.current}));const h=()=>{l!=null&&l.current&&(l.current.scrollTop=1e5)},l=e.useRef(null);return o.jsxs("div",{className:"container style-editor-component",children:[o.jsx("div",{className:"style-code",dangerouslySetInnerHTML:{__html:p}}),o.jsx("div",{className:"styleEditor",dangerouslySetInnerHTML:{__html:i},contentEditable:!0,onBlur:a,ref:l})]})}),ne=e.forwardRef((w,m)=>{const{markdown:n,showHTML:s}=w,a=e.useMemo(()=>s?Q(n):n,[n,s]);e.useImperativeHandle(m,()=>({goBottom:p,containerRef:i.current}));const p=()=>{i!=null&&i.current&&(i.current.scrollTop=1e5)},i=e.useRef(null);return o.jsx("div",{className:`resume-editor-component resumeEditor ${s?"htmlMode":""}`,ref:i,children:s?o.jsx("div",{dangerouslySetInnerHTML:{__html:a}}):o.jsx("pre",{children:a})})}),se=w=>{const{updateSpeed:m,showHeader:n,speed:s}=w,[a,p]=e.useState(!1),[i,h]=e.useState(s||0);return o.jsx("div",{className:"animation-speed-component",children:o.jsx(O,{title:"修改写字速度",description:o.jsx(K,{type:"text",style:{textAlign:"center"},value:i,onChange:l=>h(Number(l.target.value)),placeholder:"请输入1到100的整数","v-number":!0}),okText:"确定",onConfirm:()=>m(i),cancelText:"取消",onCancel:()=>h(s),children:o.jsx("div",{className:"down",onClick:()=>{p(!a),n(!a)},children:o.jsx(X,{style:{color:"#2396ef",fontSize:"30px"}})})})})},re=[{title:"个人网站",url:"http://lijundong.cn"},{title:"码云",url:"https://gitee.com/FlowersLikeSnow"}],ie=e.forwardRef((w,m)=>{const{onSkip:n,onPaused:s}=w;e.useImperativeHandle(m,()=>({playMusic:a,containerRef:p.current}));const a=()=>{b(!0),v(),setTimeout(()=>{y&&y.play()},0)},p=e.useRef(null),[i,h]=e.useState(!1),[l,b]=e.useState(!1),T=()=>{const c=!i;h(c),s(c)},H=()=>{n()},[y,S]=e.useState(),f=()=>{b(!l),y&&y[l?"pause":"play"]()},v=()=>{if(y)y.load();else{const c=new Audio;c.loop=!0,c.autoplay=!0,c.src="https://www.eveningwater.com/static/resouces/audio/5.mp3",S(c)}};return o.jsxs("div",{className:"bottom-nav-component",children:[o.jsx("a",{onClick:T,id:"pause",children:i?"继续动画":"暂停动画"}),o.jsx("a",{onClick:H,id:"skipAnimation",children:"跳过动画"}),o.jsx("p",{children:re.map((c,R)=>o.jsx("span",{children:o.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",children:c.title})},c.url+R))}),o.jsx("div",{id:"music",onClick:f,className:`music ${l?"rotate":""}`})]})}),ue=()=>{const[w,m]=e.useState({}),n=e.useRef(null),s=e.useRef(null),a=e.useRef(null),[p,i]=e.useState(!1),[h,l]=e.useState(!1),[b,T]=e.useState(z),[H]=e.useState($),[y,S]=e.useState(""),[f,v]=e.useState([]),[c,R]=e.useState(50),[F,P]=e.useState(""),[E,V]=e.useState(!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)||window.innerWidth<666),_=()=>{m(E?p?{height:"calc(100% - 100px)",marginBottom:"60px"}:{height:"calc(100% - 60px)",marginBottom:"60px"}:p?{height:"calc(100% - 70px)"}:{height:"calc(100% - 30px)"})},L=()=>{T(E?te:z),_()},W=()=>{V(window.innerWidth<666),L(),S(""),P(""),l(!1),I()},j=t=>{document.body.scrollTop=document.documentElement.scrollTop=t},N=t=>{var g,d,k,M;const u=((d=(g=s.current)==null?void 0:g.containerRef)==null?void 0:d.getBoundingClientRect())||{top:0,left:0,width:0},r=((M=(k=n.current)==null?void 0:k.containerRef)==null?void 0:M.offsetHeight)||0;return Math.abs(t?u.top-r:r-parseInt(`${u.width}`)+u.top)},A=(t,u)=>{let r=y||u||"";return new Promise(g=>{const d=()=>{var B;const k=b[t];if(!k)return;const M=b.filter((x,C)=>C<=t).map(x=>x.length).reduce((x,C)=>x+C,0),J=M-k.length;if(r.length<M){const x=r.length-J,C=k.substring(x,x+1)||" ";r+=C,(B=n.current)==null||B.goBottom(),S(()=>r),k.substring(x-1,x)===`
`&&(E&&!h?j(1e4):s!=null&&s.current&&(n!=null&&n.current)&&j(N(!1))),v([...f,setTimeout(d,c)])}else S(()=>r),g(r)};d()})},q=()=>new Promise(t=>{const u=H.length;let r="";const g=()=>{var d;if(r.length<u){r=$.substring(0,r.length+1),P(()=>r);const k=r[r.length-2];(d=s.current)==null||d.goBottom(),k===`
`&&E&&!h&&j(1e4),v([...f,setTimeout(g,c)])}else t()};g()}),U=()=>new Promise(t=>{l(!0),E&&s.current&&n.current&&j(N(!0)),t()}),I=async()=>{var u;let t=await A(0);await q(),t=await A(1,t),await U(),t=await A(2,t),S(t),a.current&&((u=a.current)==null||u.playMusic()),E&&j(1e4),v([])},Y=()=>{var u,r,g;f.length&&(f.forEach(d=>clearTimeout(d)),v([]));let t="";b.map(d=>t+=d),S(t),P(H),l(!0),s.current&&((u=s.current)==null||u.goBottom()),n.current&&((r=n.current)==null||r.goBottom()),a.current&&((g=a.current)==null||g.playMusic()),E&&j(1e4)},Z=t=>{f.length&&t?f.forEach(u=>clearTimeout(u)):I()},G=t=>{i(t),_()};return e.useEffect(()=>{f.length&&f.forEach(t=>clearTimeout(t)),L(),I()},[]),window.addEventListener("resize",ee(W,100),!1),o.jsxs("div",{className:"h-full w-full overflow-y-auto current-page",children:[o.jsx(se,{updateSpeed:R,showHeader:G,speed:c}),o.jsxs("div",{className:"main",style:w,children:[o.jsx(oe,{styleCode:y,setStyleCode:S,ref:n}),o.jsx(ne,{markdown:F,showHTML:h,ref:s})]}),o.jsx(ie,{ref:a,onSkip:Y,onPaused:Z})]})};export{ue as default};
