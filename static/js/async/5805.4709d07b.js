/*! For license information please see 5805.4709d07b.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5805"],{18152:function(e,t,r){"use strict";r.r(t);var a=r("80578");r.es(a,t),r("43802");let n=a.default;t.default=n},80578:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a.default}});var a=r("94406");r.es(a,t)},94406:function(e,t,r){"use strict";r.r(t);var a=r("69298"),n=r("23483"),o=r("7197"),i=r("19294"),l=r("95786"),u=r("24647"),c={class:"text"},d=(0,a.createElementVNode)("div",{class:"text"},"cover",-1),s={class:"text"},f=(0,a.createElementVNode)("div",{class:"text"},"contain",-1),p={class:"text"},v={class:"text"},m={class:"text"},g={class:"text"},h={class:"text"},N={class:"text"};t.default=(0,a.defineComponent)({__name:"index",setup(e){var t=(0,u.useTranslate)({"zh-CN":{fitMode:"\u586B\u5145\u6A21\u5F0F",position:"\u56FE\u7247\u4F4D\u7F6E",round:"\u5706\u5F62\u56FE\u7247",loading:"\u52A0\u8F7D\u4E2D\u63D0\u793A",error:"\u52A0\u8F7D\u5931\u8D25\u63D0\u793A",defaultTip:"\u9ED8\u8BA4\u63D0\u793A",customTip:"\u81EA\u5B9A\u4E49\u63D0\u793A",loadFail:"\u52A0\u8F7D\u5931\u8D25"},"en-US":{fitMode:"Fit Mode",position:"Position",round:"Round",loading:"Loading",error:"Error",defaultTip:"Default Tip",customTip:"Custom Tip",loadFail:"Load failed"}}),r=(0,u.cdnURL)("cat.jpeg"),V=["contain","cover","fill","none","scale-down"],w=["left","center","right"],x=["top","center","bottom"];return(e,u)=>{var y=(0,a.resolveComponent)("demo-block");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(y,{title:(0,a.unref)(t)("basicUsage")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),null,{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{width:"100",height:"100",src:(0,a.unref)(r)},null,8,["src"])]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(y,{title:(0,a.unref)(t)("fitMode")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{gutter:"20"},{default:(0,a.withCtx)(()=>[((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(V,e=>(0,a.createVNode)((0,a.unref)(i.default),{span:"8",key:e},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{fit:e,width:"100%",height:"27vw",src:(0,a.unref)(r)},null,8,["fit","src"]),(0,a.createElementVNode)("div",c,(0,a.toDisplayString)(e),1)]),_:2},1024)),64))]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(y,{title:(0,a.unref)(t)("position")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{gutter:"20"},{default:(0,a.withCtx)(()=>[((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(w,e=>(0,a.createVNode)((0,a.unref)(i.default),{span:"8",key:e},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{position:e,width:"100%",height:"27vw",fit:"cover",src:(0,a.unref)(r)},null,8,["position","src"]),d,(0,a.createElementVNode)("div",s,(0,a.toDisplayString)(e),1)]),_:2},1024)),64)),((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(x,e=>(0,a.createVNode)((0,a.unref)(i.default),{span:"8",key:e},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{position:e,width:"100%",height:"27vw",fit:"contain",src:(0,a.unref)(r)},null,8,["position","src"]),f,(0,a.createElementVNode)("div",p,(0,a.toDisplayString)(e),1)]),_:2},1024)),64))]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(y,{title:(0,a.unref)(t)("round")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{gutter:"20"},{default:(0,a.withCtx)(()=>[((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(V,e=>(0,a.createVNode)((0,a.unref)(i.default),{span:"8",key:e},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{round:"",fit:e,width:"100%",height:"27vw",src:(0,a.unref)(r)},null,8,["fit","src"]),(0,a.createElementVNode)("div",v,(0,a.toDisplayString)(e),1)]),_:2},1024)),64))]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(y,{title:(0,a.unref)(t)("loading")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{gutter:"20"},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(i.default),{span:"8"},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{width:"100%",height:"27vw"}),(0,a.createElementVNode)("div",m,(0,a.toDisplayString)((0,a.unref)(t)("defaultTip")),1)]),_:1}),(0,a.createVNode)((0,a.unref)(i.default),{span:"8"},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{width:"100%",height:"27vw"},{loading:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(l.default),{type:"spinner",size:"20"})]),_:1}),(0,a.createElementVNode)("div",g,(0,a.toDisplayString)((0,a.unref)(t)("customTip")),1)]),_:1})]),_:1})]),_:1},8,["title"]),(0,a.createVNode)(y,{title:(0,a.unref)(t)("error")},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(n.default),{gutter:"20"},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(i.default),{span:"8"},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{width:"100%",height:"27vw",src:"http://x"}),(0,a.createElementVNode)("div",h,(0,a.toDisplayString)((0,a.unref)(t)("defaultTip")),1)]),_:1}),(0,a.createVNode)((0,a.unref)(i.default),{span:"8"},{default:(0,a.withCtx)(()=>[(0,a.createVNode)((0,a.unref)(o.default),{width:"100%",height:"27vw",src:"http://x"},{error:(0,a.withCtx)(()=>[(0,a.createTextVNode)((0,a.toDisplayString)((0,a.unref)(t)("loadFail")),1)]),_:1}),(0,a.createElementVNode)("div",N,(0,a.toDisplayString)((0,a.unref)(t)("customTip")),1)]),_:1})]),_:1})]),_:1},8,["title"])],64)}}})},72555:function(e,t,r){"use strict";r.r(t),r.d(t,{Badge:function(){return o}});var a=r("37704"),n=r("9818"),o=(0,a.withInstall)(n.default);t.default=o},19294:function(e,t,r){"use strict";r.r(t);var a=r("37704"),n=r("79592"),o=(0,a.withInstall)(n.default);t.default=o},14517:function(e,t,r){"use strict";r.r(t),r.d(t,{setGlobalZIndex:function(){return o},useGlobalZIndex:function(){return n}});var a=2e3,n=()=>++a,o=e=>{a=e}},96528:function(e,t,r){"use strict";r.r(t),r.d(t,{Icon:function(){return o}});var a=r("37704"),n=r("57337"),o=(0,a.withInstall)(n.default);t.default=o},7197:function(e,t,r){"use strict";r.r(t),r.d(t,{Image:function(){return o}});var a=r("37704"),n=r("33233"),o=(0,a.withInstall)(n.default);t.default=o},95786:function(e,t,r){"use strict";r.r(t),r.d(t,{Loading:function(){return o}});var a=r("37704"),n=r("94354"),o=(0,a.withInstall)(n.default);t.default=o},23483:function(e,t,r){"use strict";r.r(t);var a=r("37704"),n=r("37609"),o=(0,a.withInstall)(n.default);t.default=o},9818:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("56821"),r("5780"),r("22584");var a=r("69298"),n=r("37704"),[o,i]=(0,n.createNamespace)("badge"),l={dot:Boolean,max:n.numericProp,tag:(0,n.makeStringProp)("div"),color:String,offset:Array,content:n.numericProp,showZero:n.truthProp,position:(0,n.makeStringProp)("top-right")};t.default=(0,a.defineComponent)({name:o,props:l,setup(e,t){var{slots:r}=t,o=()=>{if(r.content)return!0;var{content:t,showZero:a}=e;return(0,n.isDef)(t)&&""!==t&&(a||0!==t&&"0"!==t)},l=()=>{var{dot:t,max:a,content:i}=e;if(!t&&o())return r.content?r.content():(0,n.isDef)(a)&&(0,n.isNumeric)(i)&&+i>+a?"".concat(a,"+"):i},u=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),c=(0,a.computed)(()=>{var t={background:e.color};if(e.offset){var[a,o]=e.offset,{position:i}=e,[l,c]=i.split("-");r.default?("number"==typeof o?t[l]=(0,n.addUnit)("top"===l?o:-o):t[l]="top"===l?(0,n.addUnit)(o):u(o),"number"==typeof a?t[c]=(0,n.addUnit)("left"===c?a:-a):t[c]="left"===c?(0,n.addUnit)(a):u(a)):(t.marginTop=(0,n.addUnit)(o),t.marginLeft=(0,n.addUnit)(a))}return t}),d=()=>{if(o()||e.dot)return(0,a.createVNode)("div",{class:i([e.position,{dot:e.dot,fixed:!!r.default}]),style:c.value},[l()])};return()=>{if(r.default){var{tag:t}=e;return(0,a.createVNode)(t,{class:i("wrapper")},{default:()=>[r.default(),d()]})}return d()}}})},79592:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400");var a=r("69298"),n=r("37704"),o=r("22300"),i=r("37609"),[l,u]=(0,n.createNamespace)("col"),c={tag:(0,n.makeStringProp)("div"),span:(0,n.makeNumericProp)(0),offset:n.numericProp};t.default=(0,a.defineComponent)({name:l,props:c,setup(e,t){var{slots:r}=t,{parent:l,index:c}=(0,o.useParent)(i.ROW_KEY),d=(0,a.computed)(()=>{if(l){var{spaces:e,verticalSpaces:t}=l,r={};if(e&&e.value&&e.value[c.value]){var{left:a,right:o}=e.value[c.value];r={paddingLeft:a?"".concat(a,"px"):null,paddingRight:o?"".concat(o,"px"):null}}var{bottom:i}=t.value[c.value]||{};return(0,n.extend)(r,{marginBottom:i?"".concat(i,"px"):null})}});return()=>{var{tag:t,span:n,offset:o}=e;return(0,a.createVNode)(t,{style:d.value,class:u({[n]:n,["offset-".concat(o)]:o})},{default:()=>{var e;return[(e=r.default)===null||void 0===e?void 0:e.call(r)]}})}}})},12176:function(e,t,r){"use strict";r.r(t),r.d(t,{CONFIG_PROVIDER_KEY:function(){return u}}),r("74366"),r("52400"),r("95818"),r("56821"),r("5780"),r("76959"),r("11057"),r("64667");var a=r("69298"),n=r("37704"),o=r("14517"),[i,l]=(0,n.createNamespace)("config-provider"),u=Symbol(i),c={tag:(0,n.makeStringProp)("div"),theme:(0,n.makeStringProp)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,n.makeStringProp)("local"),iconPrefix:String};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(r=>{e[r]!==t[r]&&document.documentElement.style.setProperty(r,e[r])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}t.default=(0,a.defineComponent)({name:i,props:c,setup(e,t){var{slots:r}=t,i=(0,a.computed)(()=>{var t,r;return t=(0,n.extend)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),r={},Object.keys(t).forEach(e=>{var a=(0,n.kebabCase)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");r["--van-".concat(a)]=t[e]}),r});if(n.inBrowser){var c=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,a.watch)(()=>e.theme,(e,t)=>{t&&s(t),c()},{immediate:!0}),(0,a.onActivated)(c),(0,a.onDeactivated)(s),(0,a.onBeforeUnmount)(s),(0,a.watch)(i,(t,r)=>{"global"===e.themeVarsScope&&d(t,r)}),(0,a.watch)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&d({},i.value),"global"===e&&d(i.value,{})}),"global"===e.themeVarsScope&&d(i.value,{})}return(0,a.provide)(u,e),(0,a.watchEffect)(()=>{void 0!==e.zIndex&&(0,o.setGlobalZIndex)(e.zIndex)}),()=>(0,a.createVNode)(e.tag,{class:l(),style:"local"===e.themeVarsScope?i.value:void 0},{default:()=>{var e;return[(e=r.default)===null||void 0===e?void 0:e.call(r)]}})}})},57337:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("20964");var a=r("69298"),n=r("37704"),o=r("72555"),i=r("12176"),[l,u]=(0,n.createNamespace)("icon"),c=e=>null==e?void 0:e.includes("/"),d={dot:Boolean,tag:(0,n.makeStringProp)("i"),name:String,size:n.numericProp,badge:n.numericProp,color:String,badgeProps:Object,classPrefix:String};t.default=(0,a.defineComponent)({name:l,props:d,setup(e,t){var{slots:r}=t,l=(0,a.inject)(i.CONFIG_PROVIDER_KEY,null),d=(0,a.computed)(()=>e.classPrefix||(null==l?void 0:l.iconPrefix)||u());return()=>{var{tag:t,dot:i,name:l,size:s,badge:f,color:p}=e,v=c(l);return(0,a.createVNode)(o.Badge,(0,a.mergeProps)({dot:i,tag:t,class:[d.value,v?"":"".concat(d.value,"-").concat(l)],style:{color:p,fontSize:(0,n.addUnit)(s)},content:f},e.badgeProps),{default:()=>{var e;return[(e=r.default)===null||void 0===e?void 0:e.call(r),v&&(0,a.createVNode)("img",{class:u("image"),src:l},null)]}})}}})},33233:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400");var a=r("69298"),n=r("37704"),o=r("96528"),[i,l]=(0,n.createNamespace)("image"),u={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:n.numericProp,height:n.numericProp,radius:n.numericProp,lazyLoad:Boolean,iconSize:n.numericProp,showError:n.truthProp,errorIcon:(0,n.makeStringProp)("photo-fail"),iconPrefix:String,showLoading:n.truthProp,loadingIcon:(0,n.makeStringProp)("photo"),crossorigin:String,referrerpolicy:String};t.default=(0,a.defineComponent)({name:i,props:u,emits:["load","error"],setup(e,t){var{emit:r,slots:i}=t,u=(0,a.ref)(!1),c=(0,a.ref)(!0),d=(0,a.ref)(),{$Lazyload:s}=(0,a.getCurrentInstance)().proxy,f=(0,a.computed)(()=>{var t={width:(0,n.addUnit)(e.width),height:(0,n.addUnit)(e.height)};return(0,n.isDef)(e.radius)&&(t.overflow="hidden",t.borderRadius=(0,n.addUnit)(e.radius)),t});(0,a.watch)(()=>e.src,()=>{u.value=!1,c.value=!0});var p=e=>{c.value&&(c.value=!1,r("load",e))},v=()=>{var e=new Event("load");Object.defineProperty(e,"target",{value:d.value,enumerable:!0}),p(e)},m=e=>{u.value=!0,c.value=!1,r("error",e)},g=(t,r,n)=>n?n():(0,a.createVNode)(o.Icon,{name:t,size:e.iconSize,class:r,classPrefix:e.iconPrefix},null),h=()=>c.value&&e.showLoading?(0,a.createVNode)("div",{class:l("loading")},[g(e.loadingIcon,l("loading-icon"),i.loading)]):u.value&&e.showError?(0,a.createVNode)("div",{class:l("error")},[g(e.errorIcon,l("error-icon"),i.error)]):void 0,N=()=>{if(!u.value&&e.src){var t={alt:e.alt,class:l("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?(0,a.withDirectives)((0,a.createVNode)("img",(0,a.mergeProps)({ref:d},t),null),[[(0,a.resolveDirective)("lazy"),e.src]]):(0,a.createVNode)("img",(0,a.mergeProps)({ref:d,src:e.src,onLoad:p,onError:m},t),null)}},V=e=>{var{el:t}=e,r=()=>{t===d.value&&c.value&&v()};d.value?r():(0,a.nextTick)(r)},w=e=>{var{el:t}=e;t===d.value&&!u.value&&m()};return s&&n.inBrowser&&(s.$on("loaded",V),s.$on("error",w),(0,a.onBeforeUnmount)(()=>{s.$off("loaded",V),s.$off("error",w)})),(0,a.onMounted)(()=>{(0,a.nextTick)(()=>{var t;((t=d.value)===null||void 0===t?void 0:t.complete)&&!e.lazyLoad&&v()})}),()=>{var t;return(0,a.createVNode)("div",{class:l({round:e.round,block:e.block}),style:f.value},[N(),h(),(t=i.default)===null||void 0===t?void 0:t.call(i)])}}})},94354:function(e,t,r){"use strict";r.r(t),r("74366"),r("52400"),r("6868"),r("4331");var a=r("69298"),n=r("37704"),[o,i]=(0,n.createNamespace)("loading"),l=Array(12).fill(null).map((e,t)=>(0,a.createVNode)("i",{class:i("line",String(t+1))},null)),u=(0,a.createVNode)("svg",{class:i("circular"),viewBox:"25 25 50 50"},[(0,a.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),c={size:n.numericProp,type:(0,n.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:n.numericProp,textColor:String};t.default=(0,a.defineComponent)({name:o,props:c,setup(e,t){var{slots:r}=t,o=(0,a.computed)(()=>(0,n.extend)({color:e.color},(0,n.getSizeStyle)(e.size))),c=()=>{var t="spinner"===e.type?l:u;return(0,a.createVNode)("span",{class:i("spinner",e.type),style:o.value},[r.icon?r.icon():t])},d=()=>{if(r.default){var t;return(0,a.createVNode)("span",{class:i("text"),style:{fontSize:(0,n.addUnit)(e.textSize),color:(t=e.textColor)!==null&&void 0!==t?t:e.color}},[r.default()])}};return()=>{var{type:t,vertical:r}=e;return(0,a.createVNode)("div",{class:i([t,{vertical:r}]),"aria-live":"polite","aria-busy":!0},[c(),d()])}}})},37609:function(e,t,r){"use strict";r.r(t),r.d(t,{ROW_KEY:function(){return u}}),r("74366"),r("52400"),r("95818"),r("76959"),r("11057"),r("64667"),r("14078");var a=r("69298"),n=r("37704"),o=r("22300"),[i,l]=(0,n.createNamespace)("row"),u=Symbol(i),c={tag:(0,n.makeStringProp)("div"),wrap:n.truthProp,align:String,gutter:{type:[String,Number,Array],default:0},justify:String};t.default=(0,a.defineComponent)({name:i,props:c,setup(e,t){var{slots:r}=t,{children:n,linkChildren:i}=(0,o.useChildren)(u),c=(0,a.computed)(()=>{var e=[[]],t=0;return n.forEach((r,a)=>{(t+=Number(r.span))>24?(e.push([a]),t-=24):e[e.length-1].push(a)}),e}),d=(0,a.computed)(()=>{var t=0;t=Array.isArray(e.gutter)?Number(e.gutter[0])||0:Number(e.gutter);var r=[];return t?(c.value.forEach(e=>{var a=t*(e.length-1)/e.length;e.forEach((e,n)=>{if(0===n)r.push({right:a});else{var o=t-r[e-1].right;r.push({left:o,right:a-o})}})}),r):r});return i({spaces:d,verticalSpaces:(0,a.computed)(()=>{var{gutter:t}=e,r=[];if(Array.isArray(t)&&t.length>1){var a=Number(t[1])||0;if(a<=0)return r;c.value.forEach((e,t)=>{t!==c.value.length-1&&e.forEach(()=>{r.push({bottom:a})})})}return r})}),()=>{var{tag:t,wrap:n,align:o,justify:i}=e;return(0,a.createVNode)(t,{class:l({["align-".concat(o)]:o,["justify-".concat(i)]:i,nowrap:!n})},{default:()=>{var e;return[(e=r.default)===null||void 0===e?void 0:e.call(r)]}})}}})},43802:function(e){},65508:function(e){}}]);