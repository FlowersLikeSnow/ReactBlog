import{b as e,Q as A,J as o,S as B}from"./common-ntSfBM1a.js";import{P as D,T as z,e as $}from"./element-ui-SAv-zIFg.js";import{d as F}from"./chatgpt-CYDpgU_b.js";const U=[`/*
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
	width:calc(50% - .5em);
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
	right:0;
	top:0;
	transition:none;
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
	width:calc(50% - .5em);
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
*/`],V=[`/*
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
*/`],H=`
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
> 如果你喜欢这个效果的话,欢迎私信我。`,q=e.forwardRef((h,s)=>{const{styleCode:n,setStyleCode:a}=h,p=c=>{console.log({e:c}),a(c.target.textContent||"")},f=e.useMemo(()=>`<style>${n}</style>`,[n]),r=e.useMemo(()=>A.highlight(n,A.languages.css,"zh"),[n]);e.useImperativeHandle(s,()=>({goBottom:y,containerRef:i.current}));const y=()=>{i!=null&&i.current&&(i.current.scrollTop=1e5)},i=e.useRef(null);return o.jsxs("div",{className:"container style-editor-component",children:[o.jsx("div",{className:"style-code",dangerouslySetInnerHTML:{__html:f}}),o.jsx("div",{className:"styleEditor",dangerouslySetInnerHTML:{__html:r},contentEditable:!0,onBlur:p,ref:i})]})}),W=e.forwardRef((h,s)=>{const{markdown:n,showHTML:a}=h,p=e.useMemo(()=>a?B(n):n,[n,a]);e.useImperativeHandle(s,()=>({goBottom:f,containerRef:r.current}));const f=()=>{r!=null&&r.current&&(r.current.scrollTop=1e5)},r=e.useRef(null);return o.jsx("div",{className:`resume-editor-component resumeEditor ${a?"htmlMode":""}`,ref:r,children:a?o.jsx("div",{dangerouslySetInnerHTML:{__html:p}}):o.jsx("pre",{children:p})})}),G=h=>{const{updateSpeed:s,speed:n}=h,[a,p]=e.useState(!1),[f,r]=e.useState(n||0);return o.jsx("div",{className:"animation-speed-component",children:o.jsx(D,{title:"修改写字速度",description:o.jsx(z,{className:"w-[200px]",style:{textAlign:"center"},value:f,max:100,min:1,onChange:y=>r(y||0),placeholder:"请输入1到100的整数"}),okText:"确定",onConfirm:()=>s(f),cancelText:"取消",onCancel:()=>r(n),children:o.jsx("div",{className:"down",onClick:()=>p(!a),children:o.jsx($,{style:{color:"#2396ef",fontSize:"30px"}})})})})},J=[{title:"个人网站",url:"http://lijundong.cn"},{title:"码云",url:"https://gitee.com/FlowersLikeSnow"}],Q=e.forwardRef((h,s)=>{const{onSkip:n,onPaused:a}=h;e.useImperativeHandle(s,()=>({playMusic:p,containerRef:f.current}));const p=()=>{c(!0),k(),setTimeout(()=>{d&&d.play()},0)},f=e.useRef(null),[r,y]=e.useState(!1),[i,c]=e.useState(!1),j=()=>{const m=!r;y(m),a(m)},x=()=>{n()},[d,v]=e.useState(),M=()=>{c(!i),d&&d[i?"pause":"play"]()},k=()=>{if(d)d.load();else{const m=new Audio;m.loop=!0,m.autoplay=!0,m.src="https://www.eveningwater.com/static/resouces/audio/5.mp3",v(m)}};return o.jsxs("div",{className:"bottom-nav-component",children:[o.jsx("a",{onClick:j,id:"pause",children:r?"继续动画":"暂停动画"}),o.jsx("a",{onClick:x,id:"skipAnimation",children:"跳过动画"}),o.jsx("p",{children:J.map((m,S)=>o.jsx("span",{children:o.jsx("a",{href:m.url,target:"_blank",rel:"noopener noreferrer",children:m.title})},m.url+S))}),o.jsx("div",{id:"music",onClick:M,className:`music ${i?"rotate":""}`})]})}),O=()=>{const[,h]=e.useState(""),s=e.useRef(null),n=e.useRef(null),a=e.useRef(null),p=e.useRef(null),[f,r]=e.useState(!1),[y]=e.useState(H),i=e.useRef(""),c=e.useRef([]),j=e.useRef(50),x=e.useRef(""),d=e.useMemo(()=>!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)||window.innerWidth<666,[navigator.userAgent,window.innerWidth]),v=e.useMemo(()=>d?V:U,[d]),M=()=>{c.current.length&&(c.current.forEach(t=>clearTimeout(t)),c.current=[]),i.current="",x.current="",r(!1),C()},k=t=>{p.current&&(p.current.scrollTop=t)},m=t=>{var g,w,E,T;const l=((w=(g=n.current)==null?void 0:g.containerRef)==null?void 0:w.getBoundingClientRect())||{top:0,left:0,width:0},u=((T=(E=s.current)==null?void 0:E.containerRef)==null?void 0:T.offsetHeight)||0;return Math.abs(t?l.top-u:u-parseInt(`${l.width}`)+l.top)},S=t=>{let l=i.current;return new Promise(u=>{const g=()=>{var P;const w=v[t];if(!w)return;const E=v.filter((b,R)=>R<=t).map(b=>b.length).reduce((b,R)=>b+R,0),T=E-w.length;if(l.length<E){const b=l.length-T,R=w.substring(b,b+1)||" ";l+=R,(P=s.current)==null||P.goBottom(),i.current=l,h(()=>l),w.substring(b-1,b)===`
`&&(d&&!f?k(1e4):n!=null&&n.current&&(s!=null&&s.current)&&k(m(!1))),c.current.push(setTimeout(g,j.current))}else u(l)};g()})},L=()=>new Promise(t=>{const l=y.length;let u=x.current;const g=()=>{var w;if(u.length<l){u=H.substring(0,u.length+1),x.current=u,h(()=>u);const E=u[u.length-2];(w=n.current)==null||w.goBottom(),E===`
`&&d&&!f&&k(1e4),c.current.push(setTimeout(g,j.current))}else t()};g()}),N=()=>new Promise(t=>{r(!0),d&&n.current&&s.current&&k(m(!0)),t()}),C=async()=>{var t;await S(0),await L(),await S(1),await N(),await S(2),a.current&&((t=a.current)==null||t.playMusic()),d&&k(1e4),c.current=[]},I=()=>{var t,l,u;c.current.length&&(c.current.forEach(g=>clearTimeout(g)),c.current=[]),v.map(g=>i.current+=g),x.current=y,r(!0),n.current&&((t=n.current)==null||t.goBottom()),s.current&&((l=s.current)==null||l.goBottom()),a.current&&((u=a.current)==null||u.playMusic()),d&&k(1e4)},_=t=>{c.current.length&&t?c.current.forEach(l=>clearTimeout(l)):C()};return e.useEffect(M,[]),window.addEventListener("resize",F(M,100),!1),o.jsxs("div",{className:"h-full w-full overflow-y-auto current-page",ref:p,children:[o.jsx(G,{updateSpeed:t=>j.current=t,speed:j.current}),o.jsxs("div",{className:"main",children:[o.jsx(q,{styleCode:i.current,setStyleCode:t=>{i.current=t,h(()=>t)},ref:s}),o.jsx(W,{markdown:x.current,showHTML:f,ref:n})]}),o.jsx(Q,{ref:a,onSkip:I,onPaused:_})]})};export{O as default};
