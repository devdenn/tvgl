(this["webpackJsonpreservierungssystem-tennis"]=this["webpackJsonpreservierungssystem-tennis"]||[]).push([[5],{309:function(e,t,n){"use strict";var a=n(349);t.a=a.a},310:function(e,t,n){"use strict";var a=n(336);t.a=a.a},360:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(361))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},361:function(e,t,n){"use strict";var a=n(21),r=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),o=a(n(362)),i=a(n(34)),l=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:o.default}))};l.displayName="PlusOutlined";var u=c.forwardRef(l);t.default=u},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},368:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(4),o=n.n(c),i=n(0),l=n(6),u=n(7),s=n(23),d=n(22),f=n(1),b=n(5),v=n.n(b),m=n(35),p=n(296),h=n(9),j=n(102),O=n.n(j),g=n(105);function y(e){var t=Object(i.useRef)(),n=Object(i.useRef)(!1);return Object(i.useEffect)((function(){return function(){n.current=!0,O.a.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n.current||(O.a.cancel(t.current),t.current=O()((function(){e.apply(void 0,r)})))}}var w=n(27);var k=i.forwardRef((function(e,t){var n,a=e.prefixCls,r=e.id,c=e.active,o=e.rtl,u=e.tab,s=u.key,d=u.tab,f=u.disabled,b=u.closeIcon,m=e.tabBarGutter,p=e.tabPosition,h=e.closable,j=e.renderWrapper,O=e.removeAriaLabel,g=e.editable,y=e.onClick,k=e.onRemove,E=e.onFocus,x="".concat(a,"-tab");i.useEffect((function(){return k}),[]);var C={};"top"===p||"bottom"===p?C[o?"marginLeft":"marginRight"]=m:C.marginBottom=m;var N=g&&!1!==h&&!f;function P(e){f||y(e)}var T=i.createElement("div",{key:s,ref:t,className:v()(x,(n={},Object(l.a)(n,"".concat(x,"-with-remove"),N),Object(l.a)(n,"".concat(x,"-active"),c),Object(l.a)(n,"".concat(x,"-disabled"),f),n)),style:C,onClick:P},i.createElement("div",{role:"tab","aria-selected":c,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(x,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),P(e)},onKeyDown:function(e){[w.a.SPACE,w.a.ENTER].includes(e.which)&&(e.preventDefault(),P(e))},onFocus:E},d),N&&i.createElement("button",{type:"button","aria-label":O||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),g.onEdit("remove",{key:s,event:t})}},b||g.removeIcon||"\xd7"));return j&&(T=j(T)),T})),E={width:0,height:0,left:0,top:0};var x={width:0,height:0,left:0,top:0,right:0};var C=n(60),N=n(328);var P=i.forwardRef((function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,c=e.style;return a&&!1!==a.showAdd?i.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}));var T=i.forwardRef((function(e,t){var n=e.prefixCls,a=e.id,r=e.tabs,c=e.locale,o=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,f=e.moreTransitionName,b=e.style,m=e.className,p=e.editable,h=e.tabBarGutter,j=e.rtl,O=e.onTabClick,g=Object(i.useState)(!1),y=Object(u.a)(g,2),k=y[0],E=y[1],x=Object(i.useState)(null),T=Object(u.a)(x,2),S=T[0],R=T[1],I="".concat(a,"-more-popup"),M="".concat(n,"-dropdown"),B=null!==S?"".concat(I,"-").concat(S):null,A=null===c||void 0===c?void 0:c.dropdownAriaLabel,D=i.createElement(C.f,{onClick:function(e){var t=e.key,n=e.domEvent;O(t,n),E(!1)},id:I,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[S],"aria-label":void 0!==A?A:"expanded dropdown"},r.map((function(e){return i.createElement(C.d,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function L(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,c=0;c<a;c+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void R(o.key)}}Object(i.useEffect)((function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),Object(i.useEffect)((function(){k||R(null)}),[k]);var z=Object(l.a)({},j?"marginLeft":"marginRight",h);r.length||(z.visibility="hidden",z.order=1);var _=v()(Object(l.a)({},"".concat(M,"-rtl"),j)),q=o?null:i.createElement(N.a,{prefixCls:M,overlay:D,trigger:["hover"],visible:k,transitionName:f,onVisibleChange:E,overlayClassName:_,mouseEnterDelay:.1,mouseLeaveDelay:.1},i.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:z,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(a,"-more"),"aria-expanded":k,onKeyDown:function(e){var t=e.which;if(k)switch(t){case w.a.UP:L(-1),e.preventDefault();break;case w.a.DOWN:L(1),e.preventDefault();break;case w.a.ESC:E(!1);break;case w.a.SPACE:case w.a.ENTER:null!==S&&O(S,e)}else[w.a.DOWN,w.a.SPACE,w.a.ENTER].includes(t)&&(E(!0),e.preventDefault())}},d));return i.createElement("div",{className:v()("".concat(n,"-nav-operations"),m),style:b,ref:t},q,i.createElement(P,{prefixCls:n,locale:c,editable:p}))})),S=Object(i.createContext)(null),R=Math.pow(.995,20);function I(e,t){var n=i.useRef(e),a=i.useState({}),r=Object(u.a)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var M=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var c=r;return"right"===n&&(t=c.right||!c.left&&c||null),"left"===n&&(t=c.left||null),t?i.createElement("div",{className:"".concat(a,"-extra-content")},t):null};var B=i.forwardRef((function(e,t){var n,a=i.useContext(S),r=a.prefixCls,c=a.tabs,o=e.className,s=e.style,d=e.id,b=e.animated,m=e.activeKey,p=e.rtl,j=e.extra,w=e.editable,C=e.locale,N=e.tabPosition,B=e.tabBarGutter,A=e.children,D=e.onTabClick,L=e.onTabScroll,z=Object(i.useRef)(),_=Object(i.useRef)(),q=Object(i.useRef)(),K=Object(i.useRef)(),W=function(){var e=Object(i.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,i.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),G=Object(u.a)(W,2),H=G[0],V=G[1],Y="top"===N||"bottom"===N,F=I(0,(function(e,t){Y&&L&&L({direction:e>t?"left":"right"})})),X=Object(u.a)(F,2),J=X[0],U=X[1],Q=I(0,(function(e,t){!Y&&L&&L({direction:e>t?"top":"bottom"})})),Z=Object(u.a)(Q,2),$=Z[0],ee=Z[1],te=Object(i.useState)(0),ne=Object(u.a)(te,2),ae=ne[0],re=ne[1],ce=Object(i.useState)(0),oe=Object(u.a)(ce,2),ie=oe[0],le=oe[1],ue=Object(i.useState)(0),se=Object(u.a)(ue,2),de=se[0],fe=se[1],be=Object(i.useState)(0),ve=Object(u.a)(be,2),me=ve[0],pe=ve[1],he=Object(i.useState)(null),je=Object(u.a)(he,2),Oe=je[0],ge=je[1],ye=Object(i.useState)(null),we=Object(u.a)(ye,2),ke=we[0],Ee=we[1],xe=Object(i.useState)(0),Ce=Object(u.a)(xe,2),Ne=Ce[0],Pe=Ce[1],Te=Object(i.useState)(0),Se=Object(u.a)(Te,2),Re=Se[0],Ie=Se[1],Me=function(e){var t=Object(i.useRef)([]),n=Object(i.useState)({}),a=Object(u.a)(n,2)[1],r=Object(i.useRef)("function"===typeof e?e():e),c=y((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Be=Object(u.a)(Me,2),Ae=Be[0],De=Be[1],Le=function(e,t,n){return Object(i.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||E,c=r.left+r.width,o=0;o<e.length;o+=1){var i,l=e[o].key,u=t.get(l);u||(u=t.get(null===(i=e[o-1])||void 0===i?void 0:i.key)||E);var s=a.get(l)||Object(f.a)({},u);s.right=c-s.left-s.width,a.set(l,s)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,Ae,ae),ze="".concat(r,"-nav-operations-hidden"),_e=0,qe=0;function Ke(e){return e<_e?[_e,!1]:e>qe?[qe,!1]:[e,!0]}Y?p?(_e=0,qe=Math.max(0,ae-Oe)):(_e=Math.min(0,Oe-ae),qe=0):(_e=Math.min(0,ke-ie),qe=0);var We=Object(i.useRef)(),Ge=Object(i.useState)(),He=Object(u.a)(Ge,2),Ve=He[0],Ye=He[1];function Fe(){Ye(Date.now())}function Xe(){window.clearTimeout(We.current)}function Je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=Le.get(e);if(t)if(Y){var n=J;p?t.right<J?n=t.right:t.right+t.width>J+Oe&&(n=t.right+t.width-Oe):t.left<-J?n=-t.left:t.left+t.width>-J+Oe&&(n=-(t.left+t.width-Oe)),ee(0),U(Ke(n)[0])}else{var a=$;t.top<-$?a=-t.top:t.top+t.height>-$+ke&&(a=-(t.top+t.height-ke)),U(0),ee(Ke(a)[0])}}!function(e,t){var n=Object(i.useState)(),a=Object(u.a)(n,2),r=a[0],c=a[1],o=Object(i.useState)(0),l=Object(u.a)(o,2),s=l[0],d=l[1],f=Object(i.useState)(0),b=Object(u.a)(f,2),v=b[0],m=b[1],p=Object(i.useState)(),h=Object(u.a)(p,2),j=h[0],O=h[1],g=Object(i.useRef)(),y=Object(i.useRef)(0),w=Object(i.useRef)(!1),k=Object(i.useRef)(),E=Object(i.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var u=Date.now();d(u),m(u-s),O({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),O(null),j)){var e=j.x/v,n=j.y/v,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;g.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(i*=R),20*(l*=R))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,c=Math.abs(n),o=Math.abs(a);c===o?r="x"===k.current?n:a:c>o?(r=n,k.current="x"):(r=a,k.current="y");var i=Date.now();i-y.current>100&&(w.current=!1),(t(-r,-r)||w.current)&&(e.preventDefault(),w.current=!0),y.current=i}},i.useEffect((function(){function t(e){E.current.onTouchMove(e)}function n(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(z,(function(e,t){var n=!1;function a(e,t){e((function(e){var a=Ke(e+t),r=Object(u.a)(a,2),c=r[0],o=r[1];return n=o,c}))}if(Y){if(Oe>=ae)return n;a(U,e)}else{if(ke>=ie)return n;a(ee,t)}return Xe(),Fe(),n})),Object(i.useEffect)((function(){return Xe(),Ve&&(We.current=window.setTimeout((function(){Ye(0)}),100)),Xe}),[Ve]);var Ue=function(e,t,n,a,r){var c,o,l,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(c="width",o=d?"right":"left",l=Math.abs(t.left)):(c="height",o="top",l=-t.top);var f=t[c],b=n[c],v=a[c],m=f;return b+v>f&&(m=f-v),Object(i.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||x;if(r[o]+r[c]>l+m){n=a-1;break}}for(var i=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||x)[o]<l){i=s+1;break}return[i,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),d])}(Le,{width:Oe,height:ke,left:J,top:$},{width:de,height:me},{width:Ne,height:Re},Object(f.a)(Object(f.a)({},e),{},{tabs:c})),Qe=Object(u.a)(Ue,2),Ze=Qe[0],$e=Qe[1],et=c.map((function(e){var t=e.key;return i.createElement(k,{id:d,prefixCls:r,key:t,rtl:p,tab:e,closable:e.closable,editable:w,active:t===m,tabPosition:N,tabBarGutter:B,renderWrapper:A,removeAriaLabel:null===C||void 0===C?void 0:C.removeAriaLabel,ref:H(t),onClick:function(e){D(t,e)},onRemove:function(){V(t)},onFocus:function(){Je(t),Fe(),p||(z.current.scrollLeft=0),z.current.scrollTop=0}})})),tt=y((function(){var e,t,n,a,r,o,i,l,u,s=(null===(e=z.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=z.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=K.current)||void 0===n?void 0:n.offsetWidth)||0,b=(null===(a=K.current)||void 0===a?void 0:a.offsetHeight)||0,v=(null===(r=q.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(o=q.current)||void 0===o?void 0:o.offsetHeight)||0;ge(s),Ee(d),Pe(f),Ie(b);var p=((null===(i=_.current)||void 0===i?void 0:i.offsetWidth)||0)-f,h=((null===(l=_.current)||void 0===l?void 0:l.offsetHeight)||0)-b;re(p),le(h);var j=null===(u=q.current)||void 0===u?void 0:u.className.includes(ze);fe(p-(j?0:v)),pe(h-(j?0:m)),De((function(){var e=new Map;return c.forEach((function(t){var n=t.key,a=H(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),nt=c.slice(0,Ze),at=c.slice($e+1),rt=[].concat(Object(h.a)(nt),Object(h.a)(at)),ct=Object(i.useState)(),ot=Object(u.a)(ct,2),it=ot[0],lt=ot[1],ut=Le.get(m),st=Object(i.useRef)();function dt(){O.a.cancel(st.current)}Object(i.useEffect)((function(){var e={};return ut&&(Y?(p?e.right=ut.right:e.left=ut.left,e.width=ut.width):(e.top=ut.top,e.height=ut.height)),dt(),st.current=O()((function(){lt(e)})),dt}),[ut,Y,p]),Object(i.useEffect)((function(){Je()}),[m,ut,Le,Y]),Object(i.useEffect)((function(){tt()}),[p,B,m,c.map((function(e){return e.key})).join("_")]);var ft,bt,vt,mt,pt=!!rt.length,ht="".concat(r,"-nav-wrap");return Y?p?(bt=J>0,ft=J+Oe<ae):(ft=J<0,bt=-J+Oe<ae):(vt=$<0,mt=-$+ke<ie),i.createElement("div",{ref:t,role:"tablist",className:v()("".concat(r,"-nav"),o),style:s,onKeyDown:function(){Fe()}},i.createElement(M,{position:"left",extra:j,prefixCls:r}),i.createElement(g.a,{onResize:tt},i.createElement("div",{className:v()(ht,(n={},Object(l.a)(n,"".concat(ht,"-ping-left"),ft),Object(l.a)(n,"".concat(ht,"-ping-right"),bt),Object(l.a)(n,"".concat(ht,"-ping-top"),vt),Object(l.a)(n,"".concat(ht,"-ping-bottom"),mt),n)),ref:z},i.createElement(g.a,{onResize:tt},i.createElement("div",{ref:_,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(J,"px, ").concat($,"px)"),transition:Ve?"none":void 0}},et,i.createElement(P,{ref:K,prefixCls:r,locale:C,editable:w,style:{visibility:pt?"hidden":null}}),i.createElement("div",{className:v()("".concat(r,"-ink-bar"),Object(l.a)({},"".concat(r,"-ink-bar-animated"),b.inkBar)),style:it}))))),i.createElement(T,Object.assign({},e,{ref:q,prefixCls:r,tabs:rt,className:!pt&&ze})),i.createElement(M,{position:"right",extra:j,prefixCls:r}))}));function A(e){var t=e.id,n=e.activeKey,a=e.animated,r=e.tabPosition,c=e.rtl,o=e.destroyInactiveTabPane,u=i.useContext(S),s=u.prefixCls,d=u.tabs,f=a.tabPane,b=d.findIndex((function(e){return e.key===n}));return i.createElement("div",{className:v()("".concat(s,"-content-holder"))},i.createElement("div",{className:v()("".concat(s,"-content"),"".concat(s,"-content-").concat(r),Object(l.a)({},"".concat(s,"-content-animated"),f)),style:b&&f?Object(l.a)({},c?"marginRight":"marginLeft","-".concat(b,"00%")):null},d.map((function(e){return i.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:f,active:e.key===n,destroyInactiveTabPane:o})}))))}function D(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,o=e.active,l=e.animated,s=e.destroyInactiveTabPane,d=e.tabKey,b=e.children,m=i.useState(n),p=Object(u.a)(m,2),h=p[0],j=p[1];i.useEffect((function(){o?j(!0):s&&j(!1)}),[o,s]);var O={};return o||(l?(O.visibility="hidden",O.height=0,O.overflowY="hidden"):O.display="none"),i.createElement("div",{id:c&&"".concat(c,"-panel-").concat(d),role:"tabpanel",tabIndex:o?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(d),"aria-hidden":!o,style:Object(f.a)(Object(f.a)({},O),r),className:v()("".concat(t,"-tabpane"),o&&"".concat(t,"-tabpane-active"),a)},(o||h||n)&&b)}var L=0;var z=i.forwardRef((function(e,t){var n,a,r=e.id,c=e.prefixCls,o=void 0===c?"rc-tabs":c,b=e.className,h=e.children,j=e.direction,O=e.activeKey,g=e.defaultActiveKey,y=e.editable,w=e.animated,k=void 0===w?{inkBar:!0,tabPane:!1}:w,E=e.tabPosition,x=void 0===E?"top":E,C=e.tabBarGutter,N=e.tabBarStyle,P=e.tabBarExtraContent,T=e.locale,R=e.moreIcon,I=e.moreTransitionName,M=e.destroyInactiveTabPane,D=e.renderTabBar,z=e.onChange,_=e.onTabClick,q=e.onTabScroll,K=Object(d.a)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),W=function(e){return Object(m.a)(e).map((function(e){if(i.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return Object(f.a)(Object(f.a)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(h),G="rtl"===j;a=!1===k?{inkBar:!1,tabPane:!1}:!0===k?{inkBar:!0,tabPane:!0}:Object(f.a)({inkBar:!0,tabPane:!1},"object"===Object(s.a)(k)?k:{});var H=Object(i.useState)(!1),V=Object(u.a)(H,2),Y=V[0],F=V[1];Object(i.useEffect)((function(){F(function(){var e=navigator.userAgent||navigator.vendor||window.opera;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))}())}),[]);var X=Object(p.a)((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:O,defaultValue:g}),J=Object(u.a)(X,2),U=J[0],Q=J[1],Z=Object(i.useState)((function(){return W.findIndex((function(e){return e.key===U}))})),$=Object(u.a)(Z,2),ee=$[0],te=$[1];Object(i.useEffect)((function(){var e,t=W.findIndex((function(e){return e.key===U}));-1===t&&(t=Math.max(0,Math.min(ee,W.length-1)),Q(null===(e=W[t])||void 0===e?void 0:e.key));te(t)}),[W.map((function(e){return e.key})).join("_"),U,ee]);var ne=Object(p.a)(null,{value:r}),ae=Object(u.a)(ne,2),re=ae[0],ce=ae[1],oe=x;Y&&!["left","right"].includes(x)&&(oe="top"),Object(i.useEffect)((function(){r||(ce("rc-tabs-".concat(L)),L+=1)}),[]);var ie,le={id:re,activeKey:U,animated:a,tabPosition:oe,rtl:G,mobile:Y},ue=Object(f.a)(Object(f.a)({},le),{},{editable:y,locale:T,moreIcon:R,moreTransitionName:I,tabBarGutter:C,onTabClick:function(e,t){null===_||void 0===_||_(e,t),Q(e),null===z||void 0===z||z(e)},onTabScroll:q,extra:P,style:N,panes:h});return ie=D?D(ue,B):i.createElement(B,Object.assign({},ue)),i.createElement(S.Provider,{value:{tabs:W,prefixCls:o}},i.createElement("div",Object.assign({ref:t,id:r,className:v()(o,"".concat(o,"-").concat(oe),(n={},Object(l.a)(n,"".concat(o,"-mobile"),Y),Object(l.a)(n,"".concat(o,"-editable"),y),Object(l.a)(n,"".concat(o,"-rtl"),G),n),b)},K),ie,i.createElement(A,Object.assign({destroyInactiveTabPane:M},le,{animated:a}))))}));z.TabPane=D;var _=z,q=n(324),K=n.n(q),W=n(360),G=n.n(W),H=n(70),V=n.n(H),Y=n(24),F=n(47),X=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function J(e){var t,n,a=e.type,c=e.className,l=e.size,u=e.onEdit,s=e.hideAdd,d=e.centered,f=e.addIcon,b=X(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=b.prefixCls,p=i.useContext(F.b),h=p.getPrefixCls,j=p.direction,O=h("tabs",m);return"editable-card"===a&&(n={onEdit:function(e,t){var n=t.key,a=t.event;null===u||void 0===u||u("add"===e?a:n,e)},removeIcon:i.createElement(V.a,null),addIcon:f||i.createElement(G.a,null),showAdd:!0!==s}),Object(Y.a)(!("onPrevClick"in b)&&!("onNextClick"in b),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),i.createElement(_,r()({direction:j},b,{moreTransitionName:"slide-up",className:v()((t={},o()(t,"".concat(O,"-").concat(l),l),o()(t,"".concat(O,"-card"),["card","editable-card"].includes(a)),o()(t,"".concat(O,"-editable-card"),"editable-card"===a),o()(t,"".concat(O,"-centered"),d),t),c),editable:n,moreIcon:i.createElement(K.a,null),prefixCls:O}))}J.TabPane=D;t.a=J}}]);
//# sourceMappingURL=5.b172bdb3.chunk.js.map