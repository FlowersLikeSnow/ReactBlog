const __vite__fileDeps=["static/js/index-page-9YILeICk.js","static/js/common-ntSfBM1a.js","static/js/element-ui-B79v0QtT.js","static/js/chatgpt-CYDpgU_b.js","static/css/index-page-CUI5Sgk6.css","static/js/index-page-DoLlZdSw.js","static/css/index-page-gKQHY9ly.css","static/js/index-page-C7SQ_J8Y.js","static/css/index-page-rY2Mkj2T.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as u,I as E,J as t,O as R,K as _,N as L,L as S,R as P,M as O,P as C}from"./common-ntSfBM1a.js";import{L as h,S as N,M as k,C as I,R as A,a as $,b as q,c as D,H as V,d as T,z}from"./element-ui-B79v0QtT.js";import{u as H}from"./chatgpt-CYDpgU_b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const K="modulepreload",U=function(r){return"/"+r},x={},p=function(o,l,i){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),n=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));e=Promise.all(l.map(a=>{if(a=U(a),a in x)return;x[a]=!0;const d=a.endsWith(".css"),j=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${j}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":K,d||(c.as="script",c.crossOrigin=""),c.href=a,n&&c.setAttribute("nonce",n),document.head.appendChild(c),d)return new Promise((b,w)=>{c.addEventListener("load",b),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${a}`)))})}))}return e.then(()=>o()).catch(s=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s})},B={borderRadius:8,overflow:"hidden",width:"100%",maxWidth:"100%"},F={maxHeight:"100%",height:"100%",color:"unset",backgroundColor:"unset",overflowY:"auto",position:"relative"},M={color:"#fff",backgroundColor:"#001529"},f=[{key:"/views/home/index",icon:t.jsx(A,{}),label:"首页"},{key:"23",label:"恋爱系列",icon:t.jsx($,{}),children:[{key:"/views/love-box/index",icon:t.jsx(q,{}),label:"恋爱盒子"},{key:"/views/love-you/index",icon:t.jsx(D,{}),label:"爱心发射"}]}],W=()=>{var i;const[r,o]=u.useState(!1),l=E();return u.useEffect(()=>{var e;l(`${(e=f[0])==null?void 0:e.key}`)},[]),t.jsx("div",{className:"h-full w-full flex layout-page",children:t.jsxs(h,{style:B,children:[t.jsxs(N,{style:M,className:r?"collapsibled":"",collapsible:!0,collapsed:r,onCollapse:e=>o(e),children:[t.jsx("div",{className:"h-[40px] m-[4px] mt-[8px] flex justify-center items-center text-[2rem] text-[yellow]",children:t.jsx("img",{className:"avatar",title:"花如雪(FlowersLikeSnow)",src:"https://q1.qlogo.cn/g?b=qq&nk=360913684&s=640"})}),t.jsx(k,{defaultSelectedKeys:[`${(i=f[0])==null?void 0:i.key}`],defaultOpenKeys:["sub1"],mode:"inline",theme:"dark",items:f,onClick:({key:e})=>l(e)})]}),t.jsx(h,{children:t.jsxs(I,{style:F,children:[t.jsx(R,{}),t.jsxs("span",{className:"w-full absolute bottom-[5px] text-[14px] text-[#ccc] flex flex-wrap justify-center",children:[t.jsx("div",{className:"mx-[10px] whitespace-nowrap",children:"备案号:湘ICP备2020020115号"}),t.jsxs("div",{className:"whitespace-nowrap",children:["工信部网站（",t.jsx("span",{children:"https://beian.miit.gov.cn"}),"）"]})]})]})})]})})},y=Object.assign({"../views/home/index-page.tsx":()=>p(()=>import("./index-page-9YILeICk.js"),__vite__mapDeps([0,1,2,3,4])),"../views/love-box/index-page.tsx":()=>p(()=>import("./index-page-DoLlZdSw.js"),__vite__mapDeps([5,1,6])),"../views/love-you/index-page.tsx":()=>p(()=>import("./index-page-C7SQ_J8Y.js"),__vite__mapDeps([7,1,8]))}),J=Object.keys(y).map(r=>{const o=r.split("/").filter(e=>e!=".."&&e!="views").map(e=>e.replace("-page.tsx","")),l=o.join("/"),i=o.map(e=>e.split("-").map(n=>H(n.charAt(0))+n.substring(1)).join("")).join("")+"Page";return{path:l,auth:!0,name:i,component:u.lazy(y[r])}}),g=[{name:"layout",path:"/views",component:W,children:J}],m=r=>r.map(o=>(o.children&&(o.children=m(o.children)),o.element=t.jsx(u.Suspense,{fallback:t.jsx("div",{children:"加载中..."}),children:o.name?t.jsx(o.component,{}):t.jsx(o.component,{})}),o));console.log(m(g));const Y=()=>_([...m(g),{path:"/",auth:!1,skipLazyLoad:!0,element:t.jsx(L,{to:"views"})}]),v={};var G={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Q=()=>{console.log(v,"theme obj");const r=document.getElementById("root");r.classList.add(`platform-${G.VITE_ENV}`),S.createRoot(r).render(t.jsx(P.StrictMode,{children:t.jsx(O.AliveScope,{children:t.jsx(C,{children:t.jsx(V,{children:t.jsx(T,{theme:v,locale:z,children:t.jsx(Y,{})})})})})}))};Q();