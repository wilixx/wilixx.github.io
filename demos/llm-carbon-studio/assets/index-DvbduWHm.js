(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var mh={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function aS(){if(X_)return ko;X_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var W_;function sS(){return W_||(W_=1,mh.exports=aS()),mh.exports}var R=sS(),gh={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function rS(){if(q_)return be;q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(P,et,Mt){this.props=P,this.context=et,this.refs=E,this.updater=Mt||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,et){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,et,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(P,et,Mt){this.props=P,this.context=et,this.refs=E,this.updater=Mt||y}var N=L.prototype=new v;N.constructor=L,b(N,S.prototype),N.isPureReactComponent=!0;var D=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function F(P,et,Mt,yt,zt,Wt){return Mt=Wt.ref,{$$typeof:r,type:P,key:et,ref:Mt!==void 0?Mt:null,props:Wt}}function j(P,et){return F(P.type,et,void 0,void 0,void 0,P.props)}function w(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function U(P){var et={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Mt){return et[Mt]})}var V=/\/+/g;function K(P,et){return typeof P=="object"&&P!==null&&P.key!=null?U(""+P.key):et.toString(36)}function ct(){}function ht(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(ct,ct):(P.status="pending",P.then(function(et){P.status==="pending"&&(P.status="fulfilled",P.value=et)},function(et){P.status==="pending"&&(P.status="rejected",P.reason=et)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ft(P,et,Mt,yt,zt){var Wt=typeof P;(Wt==="undefined"||Wt==="boolean")&&(P=null);var it=!1;if(P===null)it=!0;else switch(Wt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(P.$$typeof){case r:case t:it=!0;break;case _:return it=P._init,ft(it(P._payload),et,Mt,yt,zt)}}if(it)return zt=zt(P),it=yt===""?"."+K(P,0):yt,D(zt)?(Mt="",it!=null&&(Mt=it.replace(V,"$&/")+"/"),ft(zt,et,Mt,"",function(ne){return ne})):zt!=null&&(w(zt)&&(zt=j(zt,Mt+(zt.key==null||P&&P.key===zt.key?"":(""+zt.key).replace(V,"$&/")+"/")+it)),et.push(zt)),1;it=0;var _t=yt===""?".":yt+":";if(D(P))for(var Ut=0;Ut<P.length;Ut++)yt=P[Ut],Wt=_t+K(yt,Ut),it+=ft(yt,et,Mt,Wt,zt);else if(Ut=x(P),typeof Ut=="function")for(P=Ut.call(P),Ut=0;!(yt=P.next()).done;)yt=yt.value,Wt=_t+K(yt,Ut++),it+=ft(yt,et,Mt,Wt,zt);else if(Wt==="object"){if(typeof P.then=="function")return ft(ht(P),et,Mt,yt,zt);throw et=String(P),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return it}function B(P,et,Mt){if(P==null)return P;var yt=[],zt=0;return ft(P,yt,"","",function(Wt){return et.call(Mt,Wt,zt++)}),yt}function at(P){if(P._status===-1){var et=P._result;et=et(),et.then(function(Mt){(P._status===0||P._status===-1)&&(P._status=1,P._result=Mt)},function(Mt){(P._status===0||P._status===-1)&&(P._status=2,P._result=Mt)}),P._status===-1&&(P._status=0,P._result=et)}if(P._status===1)return P._result.default;throw P._result}var Z=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Et(){}return be.Children={map:B,forEach:function(P,et,Mt){B(P,function(){et.apply(this,arguments)},Mt)},count:function(P){var et=0;return B(P,function(){et++}),et},toArray:function(P){return B(P,function(et){return et})||[]},only:function(P){if(!w(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},be.Component=S,be.Fragment=i,be.Profiler=l,be.PureComponent=L,be.StrictMode=s,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,be.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},be.cache=function(P){return function(){return P.apply(null,arguments)}},be.cloneElement=function(P,et,Mt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var yt=b({},P.props),zt=P.key,Wt=void 0;if(et!=null)for(it in et.ref!==void 0&&(Wt=void 0),et.key!==void 0&&(zt=""+et.key),et)!I.call(et,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&et.ref===void 0||(yt[it]=et[it]);var it=arguments.length-2;if(it===1)yt.children=Mt;else if(1<it){for(var _t=Array(it),Ut=0;Ut<it;Ut++)_t[Ut]=arguments[Ut+2];yt.children=_t}return F(P.type,zt,void 0,void 0,Wt,yt)},be.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},be.createElement=function(P,et,Mt){var yt,zt={},Wt=null;if(et!=null)for(yt in et.key!==void 0&&(Wt=""+et.key),et)I.call(et,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(zt[yt]=et[yt]);var it=arguments.length-2;if(it===1)zt.children=Mt;else if(1<it){for(var _t=Array(it),Ut=0;Ut<it;Ut++)_t[Ut]=arguments[Ut+2];zt.children=_t}if(P&&P.defaultProps)for(yt in it=P.defaultProps,it)zt[yt]===void 0&&(zt[yt]=it[yt]);return F(P,Wt,void 0,void 0,null,zt)},be.createRef=function(){return{current:null}},be.forwardRef=function(P){return{$$typeof:d,render:P}},be.isValidElement=w,be.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:at}},be.memo=function(P,et){return{$$typeof:p,type:P,compare:et===void 0?null:et}},be.startTransition=function(P){var et=O.T,Mt={};O.T=Mt;try{var yt=P(),zt=O.S;zt!==null&&zt(Mt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Et,Z)}catch(Wt){Z(Wt)}finally{O.T=et}},be.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},be.use=function(P){return O.H.use(P)},be.useActionState=function(P,et,Mt){return O.H.useActionState(P,et,Mt)},be.useCallback=function(P,et){return O.H.useCallback(P,et)},be.useContext=function(P){return O.H.useContext(P)},be.useDebugValue=function(){},be.useDeferredValue=function(P,et){return O.H.useDeferredValue(P,et)},be.useEffect=function(P,et,Mt){var yt=O.H;if(typeof Mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(P,et)},be.useId=function(){return O.H.useId()},be.useImperativeHandle=function(P,et,Mt){return O.H.useImperativeHandle(P,et,Mt)},be.useInsertionEffect=function(P,et){return O.H.useInsertionEffect(P,et)},be.useLayoutEffect=function(P,et){return O.H.useLayoutEffect(P,et)},be.useMemo=function(P,et){return O.H.useMemo(P,et)},be.useOptimistic=function(P,et){return O.H.useOptimistic(P,et)},be.useReducer=function(P,et,Mt){return O.H.useReducer(P,et,Mt)},be.useRef=function(P){return O.H.useRef(P)},be.useState=function(P){return O.H.useState(P)},be.useSyncExternalStore=function(P,et,Mt){return O.H.useSyncExternalStore(P,et,Mt)},be.useTransition=function(){return O.H.useTransition()},be.version="19.1.1",be}var Y_;function tp(){return Y_||(Y_=1,gh.exports=rS()),gh.exports}var oe=tp(),_h={exports:{}},jo={},vh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function oS(){return Z_||(Z_=1,(function(r){function t(B,at){var Z=B.length;B.push(at);t:for(;0<Z;){var Et=Z-1>>>1,P=B[Et];if(0<l(P,at))B[Et]=at,B[Z]=P,Z=Et;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var at=B[0],Z=B.pop();if(Z!==at){B[0]=Z;t:for(var Et=0,P=B.length,et=P>>>1;Et<et;){var Mt=2*(Et+1)-1,yt=B[Mt],zt=Mt+1,Wt=B[zt];if(0>l(yt,Z))zt<P&&0>l(Wt,yt)?(B[Et]=Wt,B[zt]=Z,Et=zt):(B[Et]=yt,B[Mt]=Z,Et=Mt);else if(zt<P&&0>l(Wt,Z))B[Et]=Wt,B[zt]=Z,Et=zt;else break t}}return at}function l(B,at){var Z=B.sortIndex-at.sortIndex;return Z!==0?Z:B.id-at.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,x=3,y=!1,b=!1,E=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var at=i(p);at!==null;){if(at.callback===null)s(p);else if(at.startTime<=B)s(p),at.sortIndex=at.expirationTime,t(m,at);else break;at=i(p)}}function O(B){if(E=!1,D(B),!b)if(i(m)!==null)b=!0,I||(I=!0,K());else{var at=i(p);at!==null&&ft(O,at.startTime-B)}}var I=!1,F=-1,j=5,w=-1;function U(){return S?!0:!(r.unstable_now()-w<j)}function V(){if(S=!1,I){var B=r.unstable_now();w=B;var at=!0;try{t:{b=!1,E&&(E=!1,L(F),F=-1),y=!0;var Z=x;try{e:{for(D(B),g=i(m);g!==null&&!(g.expirationTime>B&&U());){var Et=g.callback;if(typeof Et=="function"){g.callback=null,x=g.priorityLevel;var P=Et(g.expirationTime<=B);if(B=r.unstable_now(),typeof P=="function"){g.callback=P,D(B),at=!0;break e}g===i(m)&&s(m),D(B)}else s(m);g=i(m)}if(g!==null)at=!0;else{var et=i(p);et!==null&&ft(O,et.startTime-B),at=!1}}break t}finally{g=null,x=Z,y=!1}at=void 0}}finally{at?K():I=!1}}}var K;if(typeof N=="function")K=function(){N(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ht=ct.port2;ct.port1.onmessage=V,K=function(){ht.postMessage(null)}}else K=function(){v(V,0)};function ft(B,at){F=v(function(){B(r.unstable_now())},at)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var Z=x;x=at;try{return B()}finally{x=Z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(B,at){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=x;x=B;try{return at()}finally{x=Z}},r.unstable_scheduleCallback=function(B,at,Z){var Et=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Et+Z:Et):Z=Et,B){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,B={id:_++,callback:at,priorityLevel:B,startTime:Z,expirationTime:P,sortIndex:-1},Z>Et?(B.sortIndex=Z,t(p,B),i(m)===null&&B===i(p)&&(E?(L(F),F=-1):E=!0,ft(O,Z-Et))):(B.sortIndex=P,t(m,B),b||y||(b=!0,I||(I=!0,K()))),B},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(B){var at=x;return function(){var Z=x;x=at;try{return B.apply(this,arguments)}finally{x=Z}}}})(xh)),xh}var K_;function lS(){return K_||(K_=1,vh.exports=oS()),vh.exports}var yh={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function cS(){if(Q_)return Kn;Q_=1;var r=tp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Kn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Kn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Kn.requestFormReset=function(m){s.d.r(m)},Kn.unstable_batchedUpdates=function(m,p){return m(p)},Kn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Kn.version="19.1.1",Kn}var J_;function uS(){if(J_)return yh.exports;J_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=cS(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function fS(){if($_)return jo;$_=1;var r=lS(),t=tp(),i=uS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,o=h;break}if(C===o){M=!0,o=u,a=h;break}C=C.sibling}if(!M){for(C=h.child;C;){if(C===a){M=!0,a=h,o=u;break}if(C===o){M=!0,o=h,a=u;break}C=C.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case E:return"StrictMode";case O:return"Suspense";case I:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Et=[],P=-1;function et(e){return{current:e}}function Mt(e){0>P||(e.current=Et[P],Et[P]=null,P--)}function yt(e,n){P++,Et[P]=e.current,e.current=n}var zt=et(null),Wt=et(null),it=et(null),_t=et(null);function Ut(e,n){switch(yt(it,n),yt(Wt,e),yt(zt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?x_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=x_(n),e=y_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Mt(zt),yt(zt,e)}function ne(){Mt(zt),Mt(Wt),Mt(it)}function Vt(e){e.memoizedState!==null&&yt(_t,e);var n=zt.current,a=y_(n,e.type);n!==a&&(yt(Wt,e),yt(zt,a))}function ae(e){Wt.current===e&&(Mt(zt),Mt(Wt)),_t.current===e&&(Mt(_t),Bo._currentValue=Z)}var Ke=Object.prototype.hasOwnProperty,G=r.unstable_scheduleCallback,Ie=r.unstable_cancelCallback,he=r.unstable_shouldYield,se=r.unstable_requestPaint,It=r.unstable_now,we=r.unstable_getCurrentPriorityLevel,qt=r.unstable_ImmediatePriority,ge=r.unstable_UserBlockingPriority,tn=r.unstable_NormalPriority,en=r.unstable_LowPriority,z=r.unstable_IdlePriority,A=r.log,$=r.unstable_setDisableYieldValue,ot=null,gt=null;function dt(e){if(typeof A=="function"&&$(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(ot,e)}catch{}}var Nt=Math.clz32?Math.clz32:Xt,Ct=Math.log,kt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Ct(e)/kt|0)|0}var At=256,Bt=4194304;function $t(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Kt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=$t(o):(M&=C,M!==0?u=$t(M):a||(a=C&~e,a!==0&&(u=$t(a))))):(C=o&~h,C!==0?u=$t(C):M!==0?u=$t(M):a||(a=o&~e,a!==0&&(u=$t(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=At;return At<<=1,(At&4194048)===0&&(At=256),e}function wt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Lt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function jt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rt(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,H=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-Nt(a),St=1<<mt;C[mt]=0,H[mt]=-1;var lt=st[mt];if(lt!==null)for(st[mt]=null,mt=0;mt<lt.length;mt++){var ut=lt[mt];ut!==null&&(ut.lane&=-536870913)}a&=~St}o!==0&&vt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function vt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Zt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ce(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Q(){var e=at.p;return e!==0?e:(e=window.event,e===void 0?32:F_(e.type))}function Yt(e,n){var a=at.p;try{return at.p=e,n()}finally{at.p=a}}var Ht=Math.random().toString(36).slice(2),re="__reactFiber$"+Ht,ce="__reactProps$"+Ht,Ue="__reactContainer$"+Ht,Ft="__reactEvents$"+Ht,bt="__reactListeners$"+Ht,xe="__reactHandles$"+Ht,Ye="__reactResources$"+Ht,Ee="__reactMarker$"+Ht;function Be(e){delete e[re],delete e[ce],delete e[Ft],delete e[bt],delete e[xe]}function Qe(e){var n=e[re];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ue]||a[re]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=b_(e);e!==null;){if(a=e[re])return a;e=b_(e)}return n}e=a,a=e.parentNode}return null}function je(e){if(e=e[re]||e[Ue]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function He(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ge(e){var n=e[Ye];return n||(n=e[Ye]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xe(e){e[Ee]=!0}var ee=new Set,Cn={};function T(e,n){X(e,n),X(e+"Capture",n)}function X(e,n){for(Cn[e]=n,e=0;e<n.length;e++)ee.add(n[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},k={};function pt(e){return Ke.call(k,e)?!0:Ke.call(tt,e)?!1:rt.test(e)?k[e]=!0:(tt[e]=!0,!1)}function Tt(e,n,a){if(pt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ot(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Qt,fe;function te(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+fe}var Se=!1;function Me(e,n){if(!e||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ut){var lt=ut}Reflect.construct(e,[],St)}else{try{St.call()}catch(ut){lt=ut}e.call(St.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],C=h[1];if(M&&C){var H=M.split(`
`),st=C.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===st.length)for(o=H.length-1,u=st.length-1;1<=o&&0<=u&&H[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==st[u]){var mt=`
`+H[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?te(a):""}function Ze(e){switch(e.tag){case 26:case 27:case 5:return te(e.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return te("Activity");default:return""}}function We(e){try{var n="";do n+=Ze(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(e){var n=ue(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Le(e){e._valueTracker||(e._valueTracker=dn(e))}function qn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ue(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $n=/[\n"\\]/g;function In(e){return e.replace($n,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cn(e,n,a,o,u,h,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ye(n)):e.value!==""+ye(n)&&(e.value=""+ye(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Yn(e,M,ye(n)):a!=null?Yn(e,M,ye(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ye(C):e.removeAttribute("name")}function ti(e,n,a,o,u,h,M,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+ye(a):"",n=n!=null?""+ye(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Yn(e,n,a){n==="number"&&Li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ye(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Vn(e,n,a){if(n!=null&&(n=""+ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ye(a):""}function Vs(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ye(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ex.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&xp(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&xp(e,h,n[h])}function du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return ix.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,js=null;function Sp(e){var n=je(e);if(n&&(e=n.stateNode)){var a=e[ce]||null;t:switch(e=n.stateNode,n.type){case"input":if(cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+In(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ce]||null;if(!u)throw Error(s(90));cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&qn(o)}break t;case"textarea":Vn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yn(e,!!a.multiple,n,!1)}}}var gu=!1;function Mp(e,n,a){if(gu)return e(n,a);gu=!0;try{var o=e(n);return o}finally{if(gu=!1,(ks!==null||js!==null)&&($l(),ks&&(n=ks,e=js,js=ks=null,Sp(n),e)))for(n=0;n<e.length;n++)Sp(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ce]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(na)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{_u=!1}var wa=null,vu=null,ml=null;function Ep(){if(ml)return ml;var e,n=vu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return ml=u.slice(e,1<o?1-o:void 0)}function gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function bp(){return!1}function si(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_l:bp,this.isPropagationStopped=bp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=si(cs),Jr=_({},cs,{view:0,detail:0}),ax=si(Jr),xu,yu,$r,xl=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(xu=e.screenX-$r.screenX,yu=e.screenY-$r.screenY):yu=xu=0,$r=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:yu}}),Tp=si(xl),sx=_({},xl,{dataTransfer:0}),rx=si(sx),ox=_({},Jr,{relatedTarget:0}),Su=si(ox),lx=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=si(lx),ux=_({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fx=si(ux),hx=_({},cs,{data:0}),Ap=si(hx),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mx[e])?!!n[e]:!1}function Mu(){return gx}var _x=_({},Jr,{key:function(e){if(e.key){var n=dx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?px[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vx=si(_x),xx=_({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=si(xx),yx=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),Sx=si(yx),Mx=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=si(Mx),bx=_({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tx=si(bx),Ax=_({},cs,{newState:0,oldState:0}),Rx=si(Ax),wx=[9,13,27,32],Eu=na&&"CompositionEvent"in window,to=null;na&&"documentMode"in document&&(to=document.documentMode);var Cx=na&&"TextEvent"in window&&!to,wp=na&&(!Eu||to&&8<to&&11>=to),Cp=" ",Dp=!1;function Up(e,n){switch(e){case"keyup":return wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Dx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Dp=!0,Cp);case"textInput":return e=n.data,e===Cp&&Dp?null:e;default:return null}}function Ux(e,n){if(Xs)return e==="compositionend"||!Eu&&Up(e,n)?(e=Ep(),ml=vu=wa=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lx[e.type]:n==="textarea"}function Op(e,n,a,o){ks?js?js.push(o):js=[o]:ks=o,n=sc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,no=null;function Nx(e){p_(e,0)}function yl(e){var n=He(e);if(qn(n))return e}function Pp(e,n){if(e==="change")return n}var zp=!1;if(na){var bu;if(na){var Tu="oninput"in document;if(!Tu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Tu=typeof Ip.oninput=="function"}bu=Tu}else bu=!1;zp=bu&&(!document.documentMode||9<document.documentMode)}function Bp(){eo&&(eo.detachEvent("onpropertychange",Fp),no=eo=null)}function Fp(e){if(e.propertyName==="value"&&yl(no)){var n=[];Op(n,no,e,mu(e)),Mp(Nx,n)}}function Ox(e,n,a){e==="focusin"?(Bp(),eo=n,no=a,eo.attachEvent("onpropertychange",Fp)):e==="focusout"&&Bp()}function Px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(no)}function zx(e,n){if(e==="click")return yl(n)}function Ix(e,n){if(e==="input"||e==="change")return yl(n)}function Bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:Bx;function io(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ke.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,n){var a=Hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Li(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Li(e.document)}return n}function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Fx=na&&"documentMode"in document&&11>=document.documentMode,Ws=null,Ru=null,ao=null,wu=!1;function jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Ws==null||Ws!==Li(o)||(o=Ws,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=sc(Ru,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ws)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Cu={},Xp={};na&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function fs(e){if(Cu[e])return Cu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xp)return Cu[e]=n[a];return e}var Wp=fs("animationend"),qp=fs("animationiteration"),Yp=fs("animationstart"),Hx=fs("transitionrun"),Gx=fs("transitionstart"),Vx=fs("transitioncancel"),Zp=fs("transitionend"),Kp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function Ni(e,n){Kp.set(e,n),T(n,[e])}var Qp=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=Qp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},Qp.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var bi=[],Ys=0,Uu=0;function Sl(){for(var e=Ys,n=Uu=Ys=0;n<e;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var h=bi[n];if(bi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Jp(a,u,h)}}function Ml(e,n,a,o){bi[Ys++]=e,bi[Ys++]=n,bi[Ys++]=a,bi[Ys++]=o,Uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Lu(e,n,a,o){return Ml(e,n,a,o),El(e)}function Zs(e,n){return Ml(e,null,null,n),El(e)}function Jp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function El(e){if(50<Do)throw Do=0,Ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function kx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,n,a,o){return new kx(e,n,a,o)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=di(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")Nu(e)&&(M=1);else if(typeof e=="string")M=Xy(e,a,zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=di(31,a,n,u),e.elementType=w,e.lanes=h,e;case b:return hs(a.children,u,h,n);case E:M=8,u|=24;break;case S:return e=di(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case O:return e=di(13,a,n,u),e.elementType=O,e.lanes=h,e;case I:return e=di(19,a,n,u),e.elementType=I,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case N:M=10;break t;case L:M=9;break t;case D:M=11;break t;case F:M=14;break t;case j:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=di(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function hs(e,n,a,o){return e=di(7,e,o,n),e.lanes=a,e}function Ou(e,n,a){return e=di(6,e,null,n),e.lanes=a,e}function Pu(e,n,a){return n=di(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Qs=[],Js=0,Tl=null,Al=0,Ti=[],Ai=0,ds=null,aa=1,sa="";function ps(e,n){Qs[Js++]=Al,Qs[Js++]=Tl,Tl=e,Al=n}function tm(e,n,a){Ti[Ai++]=aa,Ti[Ai++]=sa,Ti[Ai++]=ds,ds=e;var o=aa;e=sa;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var h=32-Nt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,aa=1<<32-Nt(n)+u|a<<u|o,sa=h+e}else aa=1<<h|a<<u|o,sa=e}function zu(e){e.return!==null&&(ps(e,1),tm(e,1,0))}function Iu(e){for(;e===Tl;)Tl=Qs[--Js],Qs[Js]=null,Al=Qs[--Js],Qs[Js]=null;for(;e===ds;)ds=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null,aa=Ti[--Ai],Ti[Ai]=null}var ei=null,Sn=null,qe=!1,ms=null,ji=!1,Bu=Error(s(519));function gs(e){var n=Error(s(418,""));throw oo(Ei(n,e)),Bu}function em(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[re]=e,n[ce]=o,a){case"dialog":Oe("cancel",n),Oe("close",n);break;case"iframe":case"object":case"embed":Oe("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Oe(Lo[a],n);break;case"source":Oe("error",n);break;case"img":case"image":case"link":Oe("error",n),Oe("load",n);break;case"details":Oe("toggle",n);break;case"input":Oe("invalid",n),ti(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Le(n);break;case"select":Oe("invalid",n);break;case"textarea":Oe("invalid",n),Vs(n,o.value,o.defaultValue,o.children),Le(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||v_(n.textContent,a)?(o.popover!=null&&(Oe("beforetoggle",n),Oe("toggle",n)),o.onScroll!=null&&Oe("scroll",n),o.onScrollEnd!=null&&Oe("scrollend",n),o.onClick!=null&&(n.onclick=rc),n=!0):n=!1,n||gs(e)}function nm(e){for(ei=e.return;ei;)switch(ei.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:ei=ei.return}}function so(e){if(e!==ei)return!1;if(!qe)return nm(e),qe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&Sn&&gs(e),nm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Sn=Pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Sn=null}}else n===27?(n=Sn,ja(e.type)?(e=sh,sh=null,Sn=e):Sn=n):Sn=ei?Pi(e.stateNode.nextSibling):null;return!0}function ro(){Sn=ei=null,qe=!1}function im(){var e=ms;return e!==null&&(li===null?li=e:li.push.apply(li,e),ms=null),e}function oo(e){ms===null?ms=[e]:ms.push(e)}var Fu=et(null),_s=null,ra=null;function Ca(e,n,a){yt(Fu,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=Fu.current,Mt(Fu)}function Hu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Gu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var H=0;H<n.length;H++)if(C.context===n[H]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),Hu(h.return,a,e),o||(M=null);break t}h=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Hu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function lo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=u.type;hi(u.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(u===_t.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Gu(n,e,a,o),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zn(e){return am(_s,e)}function wl(e,n){return _s===null&&vs(e),am(e,n)}function am(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var jx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Xx=r.unstable_scheduleCallback,Wx=r.unstable_NormalPriority,Dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new jx,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&Xx(Wx,function(){e.controller.abort()})}var uo=null,ku=0,$s=0,tr=null;function qx(e,n){if(uo===null){var a=uo=[];ku=0,$s=Wf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(sm,sm),n}function sm(){if(--ku===0&&uo!==null){tr!==null&&(tr.status="fulfilled");var e=uo;uo=null,$s=0,tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Yx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var rm=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&qx(e,n),rm!==null&&rm(e,n)};var xs=et(null);function ju(){var e=xs.current;return e!==null?e:fn.pooledCache}function Cl(e,n){n===null?yt(xs,xs.current):yt(xs,n.pool)}function om(){var e=ju();return e===null?null:{parent:Dn._currentValue,pool:e}}var fo=Error(s(460)),lm=Error(s(474)),Dl=Error(s(542)),Xu={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ul(){}function um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ul,Ul),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(Ul,Ul);else{if(e=fn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw ho=n,fo}}var ho=null;function fm(){if(ho===null)throw Error(s(459));var e=ho;return ho=null,e}function hm(e){if(e===fo||e===Dl)throw Error(s(483))}var Da=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),Jp(e,null,a),n}return Ml(e,o,n,a),El(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Zt(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zu=!1;function mo(){if(Zu){var e=tr;if(e!==null)throw e}}function go(e,n,a,o){Zu=!1;var u=e.updateQueue;Da=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var H=C,st=H.next;H.next=null,M===null?h=st:M.next=st,M=H;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,C=mt.lastBaseUpdate,C!==M&&(C===null?mt.firstBaseUpdate=st:C.next=st,mt.lastBaseUpdate=H))}if(h!==null){var St=u.baseState;M=0,mt=st=H=null,C=h;do{var lt=C.lane&-536870913,ut=lt!==C.lane;if(ut?(Fe&lt)===lt:(o&lt)===lt){lt!==0&&lt===$s&&(Zu=!0),mt!==null&&(mt=mt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var _e=e,pe=C;lt=n;var sn=a;switch(pe.tag){case 1:if(_e=pe.payload,typeof _e=="function"){St=_e.call(sn,St,lt);break t}St=_e;break t;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=pe.payload,lt=typeof _e=="function"?_e.call(sn,St,lt):_e,lt==null)break t;St=_({},St,lt);break t;case 2:Da=!0}}lt=C.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},mt===null?(st=mt=ut,H=St):mt=mt.next=ut,M|=lt;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);mt===null&&(H=St),u.baseState=H,u.firstBaseUpdate=st,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),Ha|=M,e.lanes=M,e.memoizedState=St}}function dm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function pm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)dm(a[e],n)}var er=et(null),Ll=et(0);function mm(e,n){e=pa,yt(Ll,e),yt(er,n),pa=e|n.baseLanes}function Ku(){yt(Ll,pa),yt(er,er.current)}function Qu(){pa=Ll.current,Mt(er),Mt(Ll)}var Na=0,Re=null,nn=null,An=null,Nl=!1,nr=!1,ys=!1,Ol=0,_o=0,ir=null,Zx=0;function En(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,h){return Na=h,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Jm:$m,ys=!1,h=a(o,u),ys=!1,nr&&(h=_m(n,a,o,u)),gm(e),h}function gm(e){B.H=Hl;var n=nn!==null&&nn.next!==null;if(Na=0,An=nn=Re=null,Nl=!1,_o=0,ir=null,n)throw Error(s(300));e===null||Bn||(e=e.dependencies,e!==null&&Rl(e)&&(Bn=!0))}function _m(e,n,a,o){Re=e;var u=0;do{if(nr&&(ir=null),_o=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,An=nn=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=ny,h=n(a,o)}while(nr);return h}function Kx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(nn!==null?nn.memoizedState:null)!==e&&(Re.flags|=1024),n}function tf(){var e=Ol!==0;return Ol=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}Na=0,An=nn=Re=null,nr=!1,_o=Ol=0,ir=null}function ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?Re.memoizedState=An=e:An=An.next=e,An}function Rn(){if(nn===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=nn.next;var n=An===null?Re.memoizedState:An.next;if(n!==null)An=n,nn=e;else{if(e===null)throw Re.alternate===null?Error(s(467)):Error(s(310));nn=e,e={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},An===null?Re.memoizedState=An=e:An=An.next=e}return An}function af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,ir===null&&(ir=[]),e=um(ir,e,n),n=Re,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Jm:$m),e}function Pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===N)return Zn(e)}throw Error(s(438,String(e)))}function sf(e){var n=null,a=Re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Re.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=af(),Re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=Rn();return rf(n,nn,e)}function rf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=M=null,H=null,st=n,mt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(Fe&St)===St:(Na&St)===St){var lt=st.revertLane;if(lt===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===$s&&(mt=!0);else if((Na&lt)===lt){st=st.next,lt===$s&&(mt=!0);continue}else St={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(C=H=St,M=h):H=H.next=St,Re.lanes|=lt,Ha|=lt;St=st.action,ys&&a(h,St),h=st.hasEagerState?st.eagerState:a(h,St)}else lt={lane:St,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},H===null?(C=H=lt,M=h):H=H.next=lt,Re.lanes|=St,Ha|=St;st=st.next}while(st!==null&&st!==n);if(H===null?M=h:H.next=C,!hi(h,e.memoizedState)&&(Bn=!0,mt&&(a=tr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=H,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function of(e){var n=Rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);hi(h,n.memoizedState)||(Bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function vm(e,n,a){var o=Re,u=Rn(),h=qe;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!hi((nn||u).memoizedState,a);M&&(u.memoizedState=a,Bn=!0),u=u.queue;var C=Sm.bind(null,o,u,e);if(xo(2048,8,C,[e]),u.getSnapshot!==n||M||An!==null&&An.memoizedState.tag&1){if(o.flags|=2048,ar(9,Il(),ym.bind(null,o,u,a,n),null),fn===null)throw Error(s(349));h||(Na&124)!==0||xm(o,n,a)}return a}function xm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Re.updateQueue,n===null?(n=af(),Re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ym(e,n,a,o){n.value=a,n.getSnapshot=o,Mm(n)&&Em(e)}function Sm(e,n,a){return a(function(){Mm(n)&&Em(e)})}function Mm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function Em(e){var n=Zs(e,2);n!==null&&vi(n,e,2)}function lf(e){var n=ri();if(typeof e=="function"){var a=e;if(e=a(),ys){dt(!0);try{a()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function bm(e,n,a,o){return e.baseState=a,rf(e,nn,typeof o=="function"?o:la)}function Qx(e,n,a,o,u){if(Fl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Tm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Tm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=B.T,M={};B.T=M;try{var C=a(u,o),H=B.S;H!==null&&H(M,C),Am(e,n,C)}catch(st){cf(e,n,st)}finally{B.T=h}}else try{h=a(u,o),Am(e,n,h)}catch(st){cf(e,n,st)}}function Am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Rm(e,n,o)},function(o){return cf(e,n,o)}):Rm(e,n,a)}function Rm(e,n,a){n.status="fulfilled",n.value=a,wm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Tm(e,a)))}function cf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,wm(n),n=n.next;while(n!==o)}e.action=null}function wm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cm(e,n){return n}function Dm(e,n){if(qe){var a=fn.formState;if(a!==null){t:{var o=Re;if(qe){if(Sn){e:{for(var u=Sn,h=ji;u.nodeType!==8;){if(!h){u=null;break e}if(u=Pi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Sn=Pi(u.nextSibling),o=u.data==="F!";break t}}gs(o)}o=!1}o&&(n=a[0])}}return a=ri(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:n},a.queue=o,a=Zm.bind(null,Re,o),o.dispatch=a,o=lf(!1),h=pf.bind(null,Re,!1,o.queue),o=ri(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Qx.bind(null,Re,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Um(e){var n=Rn();return Lm(n,nn,e)}function Lm(e,n,a){if(n=rf(e,n,Cm)[0],e=zl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(M){throw M===fo?Dl:M}else o=n;n=Rn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(Re.flags|=2048,ar(9,Il(),Jx.bind(null,u,a),null)),[o,h,e]}function Jx(e,n){e.action=n}function Nm(e){var n=Rn(),a=nn;if(a!==null)return Lm(n,a,e);Rn(),n=n.memoizedState,a=Rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ar(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Re.updateQueue,n===null&&(n=af(),Re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Il(){return{destroy:void 0,resource:void 0}}function Om(){return Rn().memoizedState}function Bl(e,n,a,o){var u=ri();o=o===void 0?null:o,Re.flags|=e,u.memoizedState=ar(1|n,Il(),a,o)}function xo(e,n,a,o){var u=Rn();o=o===void 0?null:o;var h=u.memoizedState.inst;nn!==null&&o!==null&&Ju(o,nn.memoizedState.deps)?u.memoizedState=ar(n,h,a,o):(Re.flags|=e,u.memoizedState=ar(1|n,h,a,o))}function Pm(e,n){Bl(8390656,8,e,n)}function zm(e,n){xo(2048,8,e,n)}function Im(e,n){return xo(4,2,e,n)}function Bm(e,n){return xo(4,4,e,n)}function Fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hm(e,n,a){a=a!=null?a.concat([e]):null,xo(4,4,Fm.bind(null,n,e),a)}function uf(){}function Gm(e,n){var a=Rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Vm(e,n){var a=Rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),ys){dt(!0);try{e()}finally{dt(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(Na&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Xg(),Re.lanes|=e,Ha|=e,a)}function km(e,n,a,o){return hi(a,n)?a:er.current!==null?(e=ff(e,a,o),hi(e,n)||(Bn=!0),e):(Na&42)===0?(Bn=!0,e.memoizedState=a):(e=Xg(),Re.lanes|=e,Ha|=e,n)}function jm(e,n,a,o,u){var h=at.p;at.p=h!==0&&8>h?h:8;var M=B.T,C={};B.T=C,pf(e,!1,n,a);try{var H=u(),st=B.S;if(st!==null&&st(C,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=Yx(H,o);yo(e,n,mt,_i(e))}else yo(e,n,o,_i(e))}catch(St){yo(e,n,{then:function(){},status:"rejected",reason:St},_i())}finally{at.p=h,B.T=M}}function $x(){}function hf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Xm(e).queue;jm(e,u,n,Z,a===null?$x:function(){return Wm(e),a(o)})}function Xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wm(e){var n=Xm(e).next.queue;yo(e,n,{},_i())}function df(){return Zn(Bo)}function qm(){return Rn().memoizedState}function Ym(){return Rn().memoizedState}function ty(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=Ua(a);var o=La(n,e,a);o!==null&&(vi(o,n,a),po(o,n,a)),n={cache:Vu()},e.payload=n;return}n=n.return}}function ey(e,n,a){var o=_i();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(e)?Km(n,a):(a=Lu(e,n,a,o),a!==null&&(vi(a,e,o),Qm(a,n,o)))}function Zm(e,n,a){var o=_i();yo(e,n,a,o)}function yo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(e))Km(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,C=h(M,a);if(u.hasEagerState=!0,u.eagerState=C,hi(C,M))return Ml(e,n,u,0),fn===null&&Sl(),!1}catch{}finally{}if(a=Lu(e,n,u,o),a!==null)return vi(a,e,o),Qm(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:Wf(),action:o,hasEagerState:!1,eagerState:null,next:null},Fl(e)){if(n)throw Error(s(479))}else n=Lu(e,a,o,2),n!==null&&vi(n,e,2)}function Fl(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function Km(e,n){nr=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Qm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Zt(e,a)}}var Hl={readContext:Zn,use:Pl,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},Jm={readContext:Zn,use:Pl,useCallback:function(e,n){return ri().memoizedState=[e,n===void 0?null:n],e},useContext:Zn,useEffect:Pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=ri();n=n===void 0?null:n;var o=e();if(ys){dt(!0);try{e()}finally{dt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ri();if(a!==void 0){var u=a(n);if(ys){dt(!0);try{a(n)}finally{dt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ey.bind(null,Re,e),[o.memoizedState,e]},useRef:function(e){var n=ri();return e={current:e},n.memoizedState=e},useState:function(e){e=lf(e);var n=e.queue,a=Zm.bind(null,Re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=ri();return ff(a,e,n)},useTransition:function(){var e=lf(!1);return e=jm.bind(null,Re,e.queue,!0,!1),ri().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Re,u=ri();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),fn===null)throw Error(s(349));(Fe&124)!==0||xm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Pm(Sm.bind(null,o,h,e),[e]),o.flags|=2048,ar(9,Il(),ym.bind(null,o,h,a,n),null),a},useId:function(){var e=ri(),n=fn.identifierPrefix;if(qe){var a=sa,o=aa;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Zx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:Dm,useActionState:Dm,useOptimistic:function(e){var n=ri();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,Re,!0,a),a.dispatch=n,[e,n]},useMemoCache:sf,useCacheRefresh:function(){return ri().memoizedState=ty.bind(null,Re)}},$m={readContext:Zn,use:Pl,useCallback:Gm,useContext:Zn,useEffect:zm,useImperativeHandle:Hm,useInsertionEffect:Im,useLayoutEffect:Bm,useMemo:Vm,useReducer:zl,useRef:Om,useState:function(){return zl(la)},useDebugValue:uf,useDeferredValue:function(e,n){var a=Rn();return km(a,nn.memoizedState,e,n)},useTransition:function(){var e=zl(la)[0],n=Rn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:df,useFormState:Um,useActionState:Um,useOptimistic:function(e,n){var a=Rn();return bm(a,nn,e,n)},useMemoCache:sf,useCacheRefresh:Ym},ny={readContext:Zn,use:Pl,useCallback:Gm,useContext:Zn,useEffect:zm,useImperativeHandle:Hm,useInsertionEffect:Im,useLayoutEffect:Bm,useMemo:Vm,useReducer:of,useRef:Om,useState:function(){return of(la)},useDebugValue:uf,useDeferredValue:function(e,n){var a=Rn();return nn===null?ff(a,e,n):km(a,nn.memoizedState,e,n)},useTransition:function(){var e=of(la)[0],n=Rn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:vm,useId:qm,useHostTransitionStatus:df,useFormState:Nm,useActionState:Nm,useOptimistic:function(e,n){var a=Rn();return nn!==null?bm(a,nn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:Ym},sr=null,So=0;function Gl(e){var n=So;return So+=1,sr===null&&(sr=[]),um(sr,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){var n=e._init;return n(e._payload)}function eg(e){function n(J,q){if(e){var nt=J.deletions;nt===null?(J.deletions=[q],J.flags|=16):nt.push(q)}}function a(J,q){if(!e)return null;for(;q!==null;)n(J,q),q=q.sibling;return null}function o(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function u(J,q){return J=ia(J,q),J.index=0,J.sibling=null,J}function h(J,q,nt){return J.index=nt,e?(nt=J.alternate,nt!==null?(nt=nt.index,nt<q?(J.flags|=67108866,q):nt):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function C(J,q,nt,xt){return q===null||q.tag!==6?(q=Ou(nt,J.mode,xt),q.return=J,q):(q=u(q,nt),q.return=J,q)}function H(J,q,nt,xt){var Jt=nt.type;return Jt===b?mt(J,q,nt.props.children,xt,nt.key):q!==null&&(q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===j&&tg(Jt)===q.type)?(q=u(q,nt.props),Mo(q,nt),q.return=J,q):(q=bl(nt.type,nt.key,nt.props,null,J.mode,xt),Mo(q,nt),q.return=J,q)}function st(J,q,nt,xt){return q===null||q.tag!==4||q.stateNode.containerInfo!==nt.containerInfo||q.stateNode.implementation!==nt.implementation?(q=Pu(nt,J.mode,xt),q.return=J,q):(q=u(q,nt.children||[]),q.return=J,q)}function mt(J,q,nt,xt,Jt){return q===null||q.tag!==7?(q=hs(nt,J.mode,xt,Jt),q.return=J,q):(q=u(q,nt),q.return=J,q)}function St(J,q,nt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Ou(""+q,J.mode,nt),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return nt=bl(q.type,q.key,q.props,null,J.mode,nt),Mo(nt,q),nt.return=J,nt;case y:return q=Pu(q,J.mode,nt),q.return=J,q;case j:var xt=q._init;return q=xt(q._payload),St(J,q,nt)}if(ft(q)||K(q))return q=hs(q,J.mode,nt,null),q.return=J,q;if(typeof q.then=="function")return St(J,Gl(q),nt);if(q.$$typeof===N)return St(J,wl(J,q),nt);Vl(J,q)}return null}function lt(J,q,nt,xt){var Jt=q!==null?q.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Jt!==null?null:C(J,q,""+nt,xt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:return nt.key===Jt?H(J,q,nt,xt):null;case y:return nt.key===Jt?st(J,q,nt,xt):null;case j:return Jt=nt._init,nt=Jt(nt._payload),lt(J,q,nt,xt)}if(ft(nt)||K(nt))return Jt!==null?null:mt(J,q,nt,xt,null);if(typeof nt.then=="function")return lt(J,q,Gl(nt),xt);if(nt.$$typeof===N)return lt(J,q,wl(J,nt),xt);Vl(J,nt)}return null}function ut(J,q,nt,xt,Jt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return J=J.get(nt)||null,C(q,J,""+xt,Jt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case x:return J=J.get(xt.key===null?nt:xt.key)||null,H(q,J,xt,Jt);case y:return J=J.get(xt.key===null?nt:xt.key)||null,st(q,J,xt,Jt);case j:var De=xt._init;return xt=De(xt._payload),ut(J,q,nt,xt,Jt)}if(ft(xt)||K(xt))return J=J.get(nt)||null,mt(q,J,xt,Jt,null);if(typeof xt.then=="function")return ut(J,q,nt,Gl(xt),Jt);if(xt.$$typeof===N)return ut(J,q,nt,wl(q,xt),Jt);Vl(q,xt)}return null}function _e(J,q,nt,xt){for(var Jt=null,De=null,ie=q,me=q=0,Hn=null;ie!==null&&me<nt.length;me++){ie.index>me?(Hn=ie,ie=null):Hn=ie.sibling;var Ve=lt(J,ie,nt[me],xt);if(Ve===null){ie===null&&(ie=Hn);break}e&&ie&&Ve.alternate===null&&n(J,ie),q=h(Ve,q,me),De===null?Jt=Ve:De.sibling=Ve,De=Ve,ie=Hn}if(me===nt.length)return a(J,ie),qe&&ps(J,me),Jt;if(ie===null){for(;me<nt.length;me++)ie=St(J,nt[me],xt),ie!==null&&(q=h(ie,q,me),De===null?Jt=ie:De.sibling=ie,De=ie);return qe&&ps(J,me),Jt}for(ie=o(ie);me<nt.length;me++)Hn=ut(ie,J,me,nt[me],xt),Hn!==null&&(e&&Hn.alternate!==null&&ie.delete(Hn.key===null?me:Hn.key),q=h(Hn,q,me),De===null?Jt=Hn:De.sibling=Hn,De=Hn);return e&&ie.forEach(function(Za){return n(J,Za)}),qe&&ps(J,me),Jt}function pe(J,q,nt,xt){if(nt==null)throw Error(s(151));for(var Jt=null,De=null,ie=q,me=q=0,Hn=null,Ve=nt.next();ie!==null&&!Ve.done;me++,Ve=nt.next()){ie.index>me?(Hn=ie,ie=null):Hn=ie.sibling;var Za=lt(J,ie,Ve.value,xt);if(Za===null){ie===null&&(ie=Hn);break}e&&ie&&Za.alternate===null&&n(J,ie),q=h(Za,q,me),De===null?Jt=Za:De.sibling=Za,De=Za,ie=Hn}if(Ve.done)return a(J,ie),qe&&ps(J,me),Jt;if(ie===null){for(;!Ve.done;me++,Ve=nt.next())Ve=St(J,Ve.value,xt),Ve!==null&&(q=h(Ve,q,me),De===null?Jt=Ve:De.sibling=Ve,De=Ve);return qe&&ps(J,me),Jt}for(ie=o(ie);!Ve.done;me++,Ve=nt.next())Ve=ut(ie,J,me,Ve.value,xt),Ve!==null&&(e&&Ve.alternate!==null&&ie.delete(Ve.key===null?me:Ve.key),q=h(Ve,q,me),De===null?Jt=Ve:De.sibling=Ve,De=Ve);return e&&ie.forEach(function(iS){return n(J,iS)}),qe&&ps(J,me),Jt}function sn(J,q,nt,xt){if(typeof nt=="object"&&nt!==null&&nt.type===b&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case x:t:{for(var Jt=nt.key;q!==null;){if(q.key===Jt){if(Jt=nt.type,Jt===b){if(q.tag===7){a(J,q.sibling),xt=u(q,nt.props.children),xt.return=J,J=xt;break t}}else if(q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===j&&tg(Jt)===q.type){a(J,q.sibling),xt=u(q,nt.props),Mo(xt,nt),xt.return=J,J=xt;break t}a(J,q);break}else n(J,q);q=q.sibling}nt.type===b?(xt=hs(nt.props.children,J.mode,xt,nt.key),xt.return=J,J=xt):(xt=bl(nt.type,nt.key,nt.props,null,J.mode,xt),Mo(xt,nt),xt.return=J,J=xt)}return M(J);case y:t:{for(Jt=nt.key;q!==null;){if(q.key===Jt)if(q.tag===4&&q.stateNode.containerInfo===nt.containerInfo&&q.stateNode.implementation===nt.implementation){a(J,q.sibling),xt=u(q,nt.children||[]),xt.return=J,J=xt;break t}else{a(J,q);break}else n(J,q);q=q.sibling}xt=Pu(nt,J.mode,xt),xt.return=J,J=xt}return M(J);case j:return Jt=nt._init,nt=Jt(nt._payload),sn(J,q,nt,xt)}if(ft(nt))return _e(J,q,nt,xt);if(K(nt)){if(Jt=K(nt),typeof Jt!="function")throw Error(s(150));return nt=Jt.call(nt),pe(J,q,nt,xt)}if(typeof nt.then=="function")return sn(J,q,Gl(nt),xt);if(nt.$$typeof===N)return sn(J,q,wl(J,nt),xt);Vl(J,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,q!==null&&q.tag===6?(a(J,q.sibling),xt=u(q,nt),xt.return=J,J=xt):(a(J,q),xt=Ou(nt,J.mode,xt),xt.return=J,J=xt),M(J)):a(J,q)}return function(J,q,nt,xt){try{So=0;var Jt=sn(J,q,nt,xt);return sr=null,Jt}catch(ie){if(ie===fo||ie===Dl)throw ie;var De=di(29,ie,null,J.mode);return De.lanes=xt,De.return=J,De}finally{}}}var rr=eg(!0),ng=eg(!1),Ri=et(null),Xi=null;function Oa(e){var n=e.alternate;yt(Un,Un.current&1),yt(Ri,e),Xi===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(Xi=e)}function ig(e){if(e.tag===22){if(yt(Un,Un.current),yt(Ri,e),Xi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Xi=e)}}else Pa()}function Pa(){yt(Un,Un.current),yt(Ri,Ri.current)}function ca(e){Mt(Ri),Xi===e&&(Xi=null),Mt(Un)}var Un=et(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ah(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=_i(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(vi(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=_i(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(vi(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(e,o,a),n!==null&&(vi(n,e,a),po(n,e,a))}};function ag(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,h):!0}function sg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rg(e){jl(e)}function og(e){console.error(e)}function lg(e){jl(e)}function Xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(e,n)},a}function ug(e){return e=Ua(e),e.tag=3,e}function fg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){cg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){cg(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function iy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lo(n,a,u,!0),a=Ri.current,a!==null){switch(a.tag){case 13:return Xi===null?Gf():a.alternate===null&&Mn===0&&(Mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(s(435,a.tag))}return kf(e,o,u),Gf(),!1}if(qe)return n=Ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Bu&&(e=Error(s(422),{cause:o}),oo(Ei(e,a)))):(o!==Bu&&(n=Error(s(423),{cause:o}),oo(Ei(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ei(o,a),u=_f(e.stateNode,o,u),Yu(e,u),Mn!==4&&(Mn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ei(h,a),Co===null?Co=[h]:Co.push(h),Mn!==4&&(Mn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ga===null||!Ga.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ug(u),fg(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var hg=Error(s(461)),Bn=!1;function kn(e,n,a,o){n.child=e===null?ng(n,null,a,o):rr(n,e.child,a,o)}function dg(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return vs(n),o=$u(e,n,a,M,h,u),C=tf(),e!==null&&!Bn?(ef(e,n,u),ua(e,n,u)):(qe&&C&&zu(n),n.flags|=1,kn(e,n,o,u),n.child)}function pg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,mg(e,n,h,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Tf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(M,o)&&e.ref===n.ref)return ua(e,n,u)}return n.flags|=1,e=ia(h,o),e.ref=n.ref,e.return=n,n.child=e}function mg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(io(h,o)&&e.ref===n.ref)if(Bn=!1,n.pendingProps=o=h,Tf(e,u))(e.flags&131072)!==0&&(Bn=!0);else return n.lanes=e.lanes,ua(e,n,u)}return vf(e,n,a,o,u)}function gg(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return _g(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,h!==null?h.cachePool:null),h!==null?mm(n,h):Ku(),ig(n);else return n.lanes=n.childLanes=536870912,_g(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Cl(n,h.cachePool),mm(n,h),Pa(),n.memoizedState=null):(e!==null&&Cl(n,null),Ku(),Pa());return kn(e,n,u,a),n.child}function _g(e,n,a,o){var u=ju();return u=u===null?null:{parent:Dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Cl(n,null),Ku(),ig(n),e!==null&&lo(e,n,o,!0),null}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function vf(e,n,a,o,u){return vs(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!Bn?(ef(e,n,u),ua(e,n,u)):(qe&&o&&zu(n),n.flags|=1,kn(e,n,a,u),n.child)}function vg(e,n,a,o,u,h){return vs(n),n.updateQueue=null,a=_m(n,o,a,u),gm(e),o=tf(),e!==null&&!Bn?(ef(e,n,h),ua(e,n,h)):(qe&&o&&zu(n),n.flags|=1,kn(e,n,a,h),n.child)}function xg(e,n,a,o,u){if(vs(n),n.stateNode===null){var h=Ks,M=a.contextType;typeof M=="object"&&M!==null&&(h=Zn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=gf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Wu(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Zn(M):Ks,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(mf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&gf.enqueueReplaceState(h,h.state,null),go(n,o,h,u),mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,H=Ss(a,C);h.props=H;var st=h.context,mt=a.contextType;M=Ks,typeof mt=="object"&&mt!==null&&(M=Zn(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||st!==M)&&sg(n,h,o,M),Da=!1;var lt=n.memoizedState;h.state=lt,go(n,o,h,u),mo(),st=n.memoizedState,C||lt!==st||Da?(typeof St=="function"&&(mf(n,a,St,o),st=n.memoizedState),(H=Da||ag(n,a,H,o,lt,st,M))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),h.props=o,h.state=st,h.context=M,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,qu(e,n),M=n.memoizedProps,mt=Ss(a,M),h.props=mt,St=n.pendingProps,lt=h.context,st=a.contextType,H=Ks,typeof st=="object"&&st!==null&&(H=Zn(st)),C=a.getDerivedStateFromProps,(st=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==St||lt!==H)&&sg(n,h,o,H),Da=!1,lt=n.memoizedState,h.state=lt,go(n,o,h,u),mo();var ut=n.memoizedState;M!==St||lt!==ut||Da||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof C=="function"&&(mf(n,a,C,o),ut=n.memoizedState),(mt=Da||ag(n,a,mt,o,lt,ut,H)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(st||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ut,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ut,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ut),h.props=o,h.state=ut,h.context=H,o=mt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Wl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=rr(n,e.child,null,u),n.child=rr(n,null,a,u)):kn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ua(e,n,u),e}function yg(e,n,a,o){return ro(),n.flags|=256,kn(e,n,a,o),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:om()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=wi),e}function Sg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(qe){if(u?Oa(n):Pa(),qe){var C=Sn,H;if(H=C){t:{for(H=C,C=ji;H.nodeType!==8;){if(!C){C=null;break t}if(H=Pi(H.nextSibling),H===null){C=null;break t}}C=H}C!==null?(n.memoizedState={dehydrated:C,treeContext:ds!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},H=di(18,null,null,0),H.stateNode=C,H.return=n,n.child=H,ei=n,Sn=null,H=!0):H=!1}H||gs(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return ah(C)?n.lanes=32:n.lanes=536870912,null;ca(n)}return C=o.children,o=o.fallback,u?(Pa(),u=n.mode,C=ql({mode:"hidden",children:C},u),o=hs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,u=n.child,u.memoizedState=yf(a),u.childLanes=Sf(e,M,a),n.memoizedState=xf,o):(Oa(n),Mf(n,C))}if(H=e.memoizedState,H!==null&&(C=H.dehydrated,C!==null)){if(h)n.flags&256?(Oa(n),n.flags&=-257,n=Ef(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),u=o.fallback,C=n.mode,o=ql({mode:"visible",children:o.children},C),u=hs(u,C,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,rr(n,e.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Sf(e,M,a),n.memoizedState=xf,n=u);else if(Oa(n),ah(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,oo({value:o,source:null,stack:null}),n=Ef(e,n,a)}else if(Bn||lo(e,n,a,!1),M=(a&e.childLanes)!==0,Bn||M){if(M=fn,M!==null&&(o=a&-a,o=(o&42)!==0?1:le(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==H.retryLane))throw H.retryLane=o,Zs(e,o),vi(M,e,o),hg;C.data==="$?"||Gf(),n=Ef(e,n,a)}else C.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Sn=Pi(C.nextSibling),ei=n,qe=!0,ms=null,ji=!1,e!==null&&(Ti[Ai++]=aa,Ti[Ai++]=sa,Ti[Ai++]=ds,aa=e.id,sa=e.overflow,ds=n),n=Mf(n,o.children),n.flags|=4096);return n}return u?(Pa(),u=o.fallback,C=n.mode,H=e.child,st=H.sibling,o=ia(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,st!==null?u=ia(st,u):(u=hs(u,C,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,C=e.child.memoizedState,C===null?C=yf(a):(H=C.cachePool,H!==null?(st=Dn._currentValue,H=H.parent!==st?{parent:st,pool:st}:H):H=om(),C={baseLanes:C.baseLanes|a,cachePool:H}),u.memoizedState=C,u.childLanes=Sf(e,M,a),n.memoizedState=xf,o):(Oa(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Mf(e,n){return n=ql({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ql(e,n){return e=di(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ef(e,n,a){return rr(n,e.child,null,a),e=Mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Hu(e.return,n,a)}function bf(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function Eg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(kn(e,n,o.children,a),o=Un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,a,n);else if(e.tag===19)Mg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(Un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}bf(n,!0,a,null,h);break;case"together":bf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(lo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Tf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function ay(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Ca(n,Dn,e.memoizedState.cache),ro();break;case 27:case 5:Vt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sg(e,n,a):(Oa(n),e=ua(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Eg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(Un,Un.current),o)break;return null;case 22:case 23:return n.lanes=0,gg(e,n,a);case 24:Ca(n,Dn,e.memoizedState.cache)}return ua(e,n,a)}function bg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Bn=!0;else{if(!Tf(e,a)&&(n.flags&128)===0)return Bn=!1,ay(e,n,a);Bn=(e.flags&131072)!==0}else Bn=!1,qe&&(n.flags&1048576)!==0&&tm(n,Al,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Nu(o)?(e=Ss(o,e),n.tag=1,n=xg(null,n,o,e,a)):(n.tag=0,n=vf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=dg(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=pg(null,n,o,e,a);break t}}throw n=ht(o)||o,Error(s(306,n,""))}}return n;case 0:return vf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),xg(e,n,o,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,qu(e,n),go(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ca(n,Dn,o),o!==h.cache&&Gu(n,[Dn],a,!0),mo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=yg(e,n,o,a);break t}else if(o!==u){u=Ei(Error(s(424)),n),oo(u),n=yg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Sn=Pi(e.firstChild),ei=n,qe=!0,ms=null,ji=!0,a=ng(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ro(),o===u){n=ua(e,n,a);break t}kn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=w_(n.type,null,n.pendingProps,null))?n.memoizedState=a:qe||(a=n.type,e=n.pendingProps,o=oc(it.current).createElement(a),o[re]=n,o[ce]=e,Xn(o,a,e),Xe(o),n.stateNode=o):n.memoizedState=w_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&qe&&(o=n.stateNode=T_(n.type,n.pendingProps,it.current),ei=n,ji=!0,u=Sn,ja(n.type)?(sh=u,Sn=Pi(o.firstChild)):Sn=u),kn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&qe&&((u=o=Sn)&&(o=Ly(o,n.type,n.pendingProps,ji),o!==null?(n.stateNode=o,ei=n,Sn=Pi(o.firstChild),ji=!1,u=!0):u=!1),u||gs(n)),Vt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,eh(u,h)?o=null:M!==null&&eh(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,Kx,null,null,a),Bo._currentValue=u),Wl(e,n),kn(e,n,o,a),n.child;case 6:return e===null&&qe&&((e=a=Sn)&&(a=Ny(a,n.pendingProps,ji),a!==null?(n.stateNode=a,ei=n,Sn=null,e=!0):e=!1),e||gs(n)),null;case 13:return Sg(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=rr(n,null,o,a):kn(e,n,o,a),n.child;case 11:return dg(e,n,n.type,n.pendingProps,a);case 7:return kn(e,n,n.pendingProps,a),n.child;case 8:return kn(e,n,n.pendingProps.children,a),n.child;case 12:return kn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),kn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Zn(u),o=o(u),n.flags|=1,kn(e,n,o,a),n.child;case 14:return pg(e,n,n.type,n.pendingProps,a);case 15:return mg(e,n,n.type,n.pendingProps,a);case 19:return Eg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=ql(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ia(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return gg(e,n,a);case 24:return vs(n),o=Zn(Dn),e===null?(u=ju(),u===null&&(u=fn,h=Vu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Wu(n),Ca(n,Dn,u)):((e.lanes&a)!==0&&(qu(e,n),go(n,null,null,a),mo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,Dn,o)):(o=h.cache,Ca(n,Dn,o),o!==u.cache&&Gu(n,[Dn],a,!0))),kn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(e){e.flags|=4}function Tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!N_(n)){if(n=Ri.current,n!==null&&((Fe&4194048)===Fe?Xi!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||n!==Xi))throw ho=Xu,lm;e.flags|=8192}}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?wt():536870912,e.lanes|=n,ur|=n)}function Eo(e,n){if(!qe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function vn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function sy(e,n,a){var o=n.pendingProps;switch(Iu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(Dn),ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(so(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,im())),vn(n),null;case 26:return a=n.memoizedState,e===null?(fa(n),a!==null?(vn(n),Tg(n,a)):(vn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(fa(n),vn(n),Tg(n,a)):(vn(n),n.flags&=-16777217):(e.memoizedProps!==o&&fa(n),vn(n),n.flags&=-16777217),null;case 27:ae(n),a=it.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}e=zt.current,so(n)?em(n):(e=T_(u,o,a),n.stateNode=e,fa(n))}return vn(n),null;case 5:if(ae(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}if(e=zt.current,so(n))em(n);else{switch(u=oc(it.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[re]=n,e[ce]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Xn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&fa(n)}}return vn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,so(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ei,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[re]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||gs(n)}else e=oc(e).createTextNode(o),e[re]=n,n.stateNode=e}return vn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=so(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[re]=n}else ro(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=im(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ca(n),n):(ca(n),null)}if(ca(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),vn(n),null;case 4:return ne(),e===null&&Kf(n.stateNode.containerInfo),vn(n),null;case 10:return oa(n.type),vn(n),null;case 19:if(Mt(Un),u=n.memoizedState,u===null)return vn(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)Eo(u,!1);else{if(Mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=kl(e),h!==null){for(n.flags|=128,Eo(u,!1),e=h.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return yt(Un,Un.current&1|2),n.child}e=e.sibling}u.tail!==null&&It()>Ql&&(n.flags|=128,o=!0,Eo(u,!1),n.lanes=4194304)}else{if(!o)if(e=kl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Eo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!qe)return vn(n),null}else 2*It()-u.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,o=!0,Eo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=It(),n.sibling=null,e=Un.current,yt(Un,o?e&1|2:e&1),n):(vn(n),null);case 22:case 23:return ca(n),Qu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Mt(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(Dn),vn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ry(e,n){switch(Iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(Dn),ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ae(n),null;case 13:if(ca(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ro()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Mt(Un),null;case 4:return ne(),null;case 10:return oa(n.type),null;case 22:case 23:return ca(n),Qu(),e!==null&&Mt(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(Dn),null;case 25:return null;default:return null}}function Ag(e,n){switch(Iu(n),n.tag){case 3:oa(Dn),ne();break;case 26:case 27:case 5:ae(n);break;case 4:ne();break;case 13:ca(n);break;case 19:Mt(Un);break;case 10:oa(n.type);break;case 22:case 23:ca(n),Qu(),e!==null&&Mt(xs);break;case 24:oa(Dn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(C){un(n,n.return,C)}}function za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var H=a,st=C;try{st()}catch(mt){un(u,H,mt)}}}o=o.next}while(o!==h)}}catch(mt){un(n,n.return,mt)}}function Rg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pm(n,a)}catch(o){un(e,e.return,o)}}}function wg(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){un(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){un(e,n,u)}}function Wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){un(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){un(e,n,u)}else a.current=null}function Cg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){un(e,e.return,u)}}function Af(e,n,a){try{var o=e.stateNode;Ry(o,e.type,a,n),o[ce]=n}catch(u){un(e,e.return,u)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=rc));else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(wf(e,n,a),e=e.sibling;e!==null;)wf(e,n,a),e=e.sibling}function Zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,n,a),e=e.sibling;e!==null;)Zl(e,n,a),e=e.sibling}function Ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Xn(n,o,a),n[re]=e,n[ce]=a}catch(h){un(e,e.return,h)}}var ha=!1,bn=!1,Cf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function oy(e,n){if(e=e.containerInfo,$f=dc,e=kp(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,C=-1,H=-1,st=0,mt=0,St=e,lt=null;e:for(;;){for(var ut;St!==a||u!==0&&St.nodeType!==3||(C=M+u),St!==h||o!==0&&St.nodeType!==3||(H=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(ut=St.firstChild)!==null;)lt=St,St=ut;for(;;){if(St===e)break e;if(lt===a&&++st===u&&(C=M),lt===h&&++mt===o&&(H=M),(ut=St.nextSibling)!==null)break;St=lt,lt=St.parentNode}St=ut}a=C===-1||H===-1?null:{start:C,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:e,selectionRange:a},dc=!1,Fn=n;Fn!==null;)if(n=Fn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Fn=e;else for(;Fn!==null;){switch(n=Fn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var _e=Ss(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(_e,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(pe){un(a,a.return,pe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Fn=e;break}Fn=n.return}}function Ng(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ia(e,a),o&4&&bo(5,a);break;case 1:if(Ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){un(a,a.return,M)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){un(a,a.return,M)}}o&64&&Rg(a),o&512&&To(a,a.return);break;case 3:if(Ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(e,n)}catch(M){un(a,a.return,M)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:Ia(e,a),n===null&&o&4&&Cg(a),o&512&&To(a,a.return);break;case 12:Ia(e,a);break;case 13:Ia(e,a),o&4&&zg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gy.bind(null,a),Oy(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||bn,u=ha;var h=bn;ha=o,(bn=n)&&!h?Ba(e,a,(a.subtreeFlags&8772)!==0):Ia(e,a),ha=u,bn=h}break;case 30:break;default:Ia(e,a)}}function Og(e){var n=e.alternate;n!==null&&(e.alternate=null,Og(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Be(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gn=null,oi=!1;function da(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ot,a)}catch{}switch(a.tag){case 26:bn||Wi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Wi(a,n);var o=gn,u=oi;ja(a.type)&&(gn=a.stateNode,oi=!1),da(e,n,a),Oo(a.stateNode),gn=o,oi=u;break;case 5:bn||Wi(a,n);case 6:if(o=gn,u=oi,gn=null,da(e,n,a),gn=o,oi=u,gn!==null)if(oi)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(a.stateNode)}catch(h){un(a,n,h)}else try{gn.removeChild(a.stateNode)}catch(h){un(a,n,h)}break;case 18:gn!==null&&(oi?(e=gn,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Vo(e)):E_(gn,a.stateNode));break;case 4:o=gn,u=oi,gn=a.stateNode.containerInfo,oi=!0,da(e,n,a),gn=o,oi=u;break;case 0:case 11:case 14:case 15:bn||za(2,a,n),bn||za(4,a,n),da(e,n,a);break;case 1:bn||(Wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wg(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,da(e,n,a),bn=o;break;default:da(e,n,a)}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vo(e)}catch(a){un(n,n.return,a)}}function ly(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lg),n;default:throw Error(s(435,e.tag))}}function Df(e,n){var a=ly(e);n.forEach(function(o){var u=_y.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function pi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(ja(C.type)){gn=C.stateNode,oi=!1;break t}break;case 5:gn=C.stateNode,oi=!1;break t;case 3:case 4:gn=C.stateNode.containerInfo,oi=!0;break t}C=C.return}if(gn===null)throw Error(s(160));Pg(h,M,u),gn=null,oi=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ig(n,e),n=n.sibling}var Oi=null;function Ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pi(n,e),mi(e),o&4&&(za(3,e,e.return),bo(3,e),za(5,e,e.return));break;case 1:pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ee]||h[re]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Xn(h,o,a),h[re]=e,Xe(h),o=h;break t;case"link":var M=U_("link","href",u).get(o+(a.href||""));if(M){for(var C=0;C<M.length;C++)if(h=M[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(C,1);break e}}h=u.createElement(o),Xn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=U_("meta","content",u).get(o+(a.content||""))){for(C=0;C<M.length;C++)if(h=M[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(C,1);break e}}h=u.createElement(o),Xn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[re]=e,Xe(h),o=h}e.stateNode=o}else L_(u,e.type,e.stateNode);else e.stateNode=D_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?L_(u,e.type,e.stateNode):D_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Af(e,e.memoizedProps,a.memoizedProps)}break;case 27:pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),a!==null&&o&4&&Af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),e.flags&32){u=e.stateNode;try{ai(u,"")}catch(ut){un(e,e.return,ut)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Af(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(pi(n,e),mi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ut){un(e,e.return,ut)}}break;case 3:if(uc=null,u=Oi,Oi=lc(n.containerInfo),pi(n,e),Oi=u,mi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Vo(n.containerInfo)}catch(ut){un(e,e.return,ut)}Cf&&(Cf=!1,Bg(e));break;case 4:o=Oi,Oi=lc(e.stateNode.containerInfo),pi(n,e),mi(e),Oi=o;break;case 12:pi(n,e),mi(e);break;case 13:pi(n,e),mi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zf=It()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Df(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,st=ha,mt=bn;if(ha=st||u,bn=mt||H,pi(n,e),bn=mt,ha=st,mi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||ha||bn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=H.stateNode;var St=H.memoizedProps.style,lt=St!=null&&St.hasOwnProperty("display")?St.display:null;C.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ut){un(H,H.return,ut)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(ut){un(H,H.return,ut)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Df(e,a))));break;case 19:pi(n,e),mi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Df(e,o)));break;case 30:break;case 21:break;default:pi(n,e),mi(e)}}function mi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Rf(e);Zl(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(ai(M,""),a.flags&=-33);var C=Rf(e);Zl(e,C,M);break;case 3:case 4:var H=a.stateNode.containerInfo,st=Rf(e);wf(e,st,H);break;default:throw Error(s(161))}}catch(mt){un(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ng(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Ms(n);break;case 1:Wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wg(n,n.return,a),Ms(n);break;case 27:Oo(n.stateNode);case 26:case 5:Wi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function Ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ba(u,h,a),bo(4,h);break;case 1:if(Ba(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){un(o,o.return,st)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)dm(H[u],C)}catch(st){un(o,o.return,st)}}a&&M&64&&Rg(h),To(h,h.return);break;case 27:Ug(h);case 26:case 5:Ba(u,h,a),a&&o===null&&M&4&&Cg(h),To(h,h.return);break;case 12:Ba(u,h,a);break;case 13:Ba(u,h,a),a&&M&4&&zg(u,h);break;case 22:h.memoizedState===null&&Ba(u,h,a),To(h,h.return);break;case 30:break;default:Ba(u,h,a)}n=n.sibling}}function Uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function qi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(e,n,a,o),n=n.sibling}function Fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:qi(e,n,a,o),u&2048&&bo(9,n);break;case 1:qi(e,n,a,o);break;case 3:qi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){qi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,C=h.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){un(n,n.return,H)}}else qi(e,n,a,o);break;case 13:qi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?qi(e,n,a,o):Ao(e,n):h._visibility&2?qi(e,n,a,o):(h._visibility|=2,or(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Uf(M,n);break;case 24:qi(e,n,a,o),u&2048&&Lf(n.alternate,n);break;default:qi(e,n,a,o)}}function or(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,C=a,H=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:or(h,M,C,H,u),bo(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?or(h,M,C,H,u):Ao(h,M):(mt._visibility|=2,or(h,M,C,H,u)),u&&st&2048&&Uf(M.alternate,M);break;case 24:or(h,M,C,H,u),u&&st&2048&&Lf(M.alternate,M);break;default:or(h,M,C,H,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Uf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Lf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function lr(e){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 26:lr(e),e.flags&Ro&&e.memoizedState!==null&&qy(Oi,e.memoizedState,e.memoizedProps);break;case 5:lr(e);break;case 3:case 4:var n=Oi;Oi=lc(e.stateNode.containerInfo),lr(e),Oi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ro,Ro=16777216,lr(e),Ro=n):lr(e));break;default:lr(e)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fn=o,kg(o,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&za(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):wo(e);break;default:wo(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fn=o,kg(o,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:za(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function kg(e,n){for(;Fn!==null;){var a=Fn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Fn=o;else t:for(a=e;Fn!==null;){o=Fn;var u=o.sibling,h=o.return;if(Og(o),o===a){Fn=null;break t}if(u!==null){u.return=h,Fn=u;break t}Fn=h}}}var cy={getCacheForType:function(e){var n=Zn(Dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},uy=typeof WeakMap=="function"?WeakMap:Map,Je=0,fn=null,Ne=null,Fe=0,$e=0,gi=null,Fa=!1,cr=!1,Nf=!1,pa=0,Mn=0,Ha=0,Es=0,Of=0,wi=0,ur=0,Co=null,li=null,Pf=!1,zf=0,Ql=1/0,Jl=null,Ga=null,jn=0,Va=null,fr=null,hr=0,If=0,Bf=null,jg=null,Do=0,Ff=null;function _i(){if((Je&2)!==0&&Fe!==0)return Fe&-Fe;if(B.T!==null){var e=$s;return e!==0?e:Wf()}return Q()}function Xg(){wi===0&&(wi=(Fe&536870912)===0||qe?Y():536870912);var e=Ri.current;return e!==null&&(e.flags|=32),wi}function vi(e,n,a){(e===fn&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(dr(e,0),ka(e,Fe,wi,!1)),jt(e,a),((Je&2)===0||e!==fn)&&(e===fn&&((Je&2)===0&&(Es|=a),Mn===4&&ka(e,Fe,wi,!1)),Yi(e))}function Wg(e,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?dy(e,n):Vf(e,n,!0),h=o;do{if(u===0){cr&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!fy(a)){u=Vf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var C=e;u=Co;var H=C.current.memoizedState.isDehydrated;if(H&&(dr(C,M).flags|=256),M=Vf(C,M,!1),M!==2){if(Nf&&!H){C.errorRecoveryDisabledLanes|=h,Es|=h,u=4;break t}h=li,li=u,h!==null&&(li===null?li=h:li.push.apply(li,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){dr(e,0),ka(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,wi,!Fa);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=zf+300-It(),10<u)){if(ka(o,n,wi,!Fa),Kt(o,0,!0)!==0)break t;o.timeoutHandle=S_(qg.bind(null,o,a,li,Jl,Pf,n,wi,Es,ur,Fa,h,2,-0,0),u);break t}qg(o,a,li,Jl,Pf,n,wi,Es,ur,Fa,h,0,-0,0)}}break}while(!0);Yi(e)}function qg(e,n,a,o,u,h,M,C,H,st,mt,St,lt,ut){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:Wy},Hg(n),St=Yy(),St!==null)){e.cancelPendingCommit=St(t_.bind(null,e,n,h,a,o,u,M,C,H,mt,1,lt,ut)),ka(e,h,M,!st);return}t_(e,n,h,a,o,u,M,C,H)}function fy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!hi(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~Of,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Nt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&vt(e,a,n)}function $l(){return(Je&6)===0?(Uo(0),!1):!0}function Hf(){if(Ne!==null){if($e===0)var e=Ne.return;else e=Ne,ra=_s=null,nf(e),sr=null,So=0,e=Ne;for(;e!==null;)Ag(e.alternate,e),e=e.return;Ne=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Hf(),fn=e,Ne=a=ia(e.current,null),Fe=n,$e=0,gi=null,Fa=!1,cr=Dt(e,n),Nf=!1,ur=wi=Of=Es=Ha=Mn=0,li=Co=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Nt(o),h=1<<u;n|=e[u],o&=~h}return pa=n,Sl(),a}function Yg(e,n){Re=null,B.H=Hl,n===fo||n===Dl?(n=fm(),$e=3):n===lm?(n=fm(),$e=4):$e=n===hg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gi=n,Ne===null&&(Mn=1,Xl(e,Ei(n,e.current)))}function Zg(){var e=B.H;return B.H=Hl,e===null?Hl:e}function Kg(){var e=B.A;return B.A=cy,e}function Gf(){Mn=4,Fa||(Fe&4194048)!==Fe&&Ri.current!==null||(cr=!0),(Ha&134217727)===0&&(Es&134217727)===0||fn===null||ka(fn,Fe,wi,!1)}function Vf(e,n,a){var o=Je;Je|=2;var u=Zg(),h=Kg();(fn!==e||Fe!==n)&&(Jl=null,dr(e,n)),n=!1;var M=Mn;t:do try{if($e!==0&&Ne!==null){var C=Ne,H=gi;switch($e){case 8:Hf(),M=6;break t;case 3:case 2:case 9:case 6:Ri.current===null&&(n=!0);var st=$e;if($e=0,gi=null,pr(e,C,H,st),a&&cr){M=0;break t}break;default:st=$e,$e=0,gi=null,pr(e,C,H,st)}}hy(),M=Mn;break}catch(mt){Yg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,ra=_s=null,Je=o,B.H=u,B.A=h,Ne===null&&(fn=null,Fe=0,Sl()),M}function hy(){for(;Ne!==null;)Qg(Ne)}function dy(e,n){var a=Je;Je|=2;var o=Zg(),u=Kg();fn!==e||Fe!==n?(Jl=null,Ql=It()+500,dr(e,n)):cr=Dt(e,n);t:do try{if($e!==0&&Ne!==null){n=Ne;var h=gi;e:switch($e){case 1:$e=0,gi=null,pr(e,n,h,1);break;case 2:case 9:if(cm(h)){$e=0,gi=null,Jg(n);break}n=function(){$e!==2&&$e!==9||fn!==e||($e=7),Yi(e)},h.then(n,n);break t;case 3:$e=7;break t;case 4:$e=5;break t;case 7:cm(h)?($e=0,gi=null,Jg(n)):($e=0,gi=null,pr(e,n,h,7));break;case 5:var M=null;switch(Ne.tag){case 26:M=Ne.memoizedState;case 5:case 27:var C=Ne;if(!M||N_(M)){$e=0,gi=null;var H=C.sibling;if(H!==null)Ne=H;else{var st=C.return;st!==null?(Ne=st,tc(st)):Ne=null}break e}}$e=0,gi=null,pr(e,n,h,5);break;case 6:$e=0,gi=null,pr(e,n,h,6);break;case 8:Hf(),Mn=6;break t;default:throw Error(s(462))}}py();break}catch(mt){Yg(e,mt)}while(!0);return ra=_s=null,B.H=o,B.A=u,Je=a,Ne!==null?0:(fn=null,Fe=0,Sl(),Mn)}function py(){for(;Ne!==null&&!he();)Qg(Ne)}function Qg(e){var n=bg(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?tc(e):Ne=n}function Jg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:nf(n);default:Ag(a,n),n=Ne=$p(n,pa),n=bg(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?tc(e):Ne=n}function pr(e,n,a,o){ra=_s=null,nf(n),sr=null,So=0;var u=n.return;try{if(iy(e,u,n,a,Fe)){Mn=1,Xl(e,Ei(a,e.current)),Ne=null;return}}catch(h){if(u!==null)throw Ne=u,h;Mn=1,Xl(e,Ei(a,e.current)),Ne=null;return}n.flags&32768?(qe||o===1?e=!0:cr||(Fe&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ri.current,o!==null&&o.tag===13&&(o.flags|=16384))),$g(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){$g(n,Fa);return}e=n.return;var a=sy(n.alternate,n,pa);if(a!==null){Ne=a;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);Mn===0&&(Mn=5)}function $g(e,n){do{var a=ry(e.alternate,e);if(a!==null){a.flags&=32767,Ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=a}while(e!==null);Mn=6,Ne=null}function t_(e,n,a,o,u,h,M,C,H){e.cancelPendingCommit=null;do ec();while(jn!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Uu,Rt(e,a,h,M,C,H),e===fn&&(Ne=fn=null,Fe=0),fr=n,Va=e,hr=a,If=h,Bf=u,jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vy(tn,function(){return s_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=at.p,at.p=2,M=Je,Je|=4;try{oy(e,n,a)}finally{Je=M,at.p=u,B.T=o}}jn=1,e_(),n_(),i_()}}function e_(){if(jn===1){jn=0;var e=Va,n=fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=at.p;at.p=2;var u=Je;Je|=4;try{Ig(n,e);var h=th,M=kp(e.containerInfo),C=h.focusedElem,H=h.selectionRange;if(M!==C&&C&&C.ownerDocument&&Vp(C.ownerDocument.documentElement,C)){if(H!==null&&Au(C)){var st=H.start,mt=H.end;if(mt===void 0&&(mt=st),"selectionStart"in C)C.selectionStart=st,C.selectionEnd=Math.min(mt,C.value.length);else{var St=C.ownerDocument||document,lt=St&&St.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),_e=C.textContent.length,pe=Math.min(H.start,_e),sn=H.end===void 0?pe:Math.min(H.end,_e);!ut.extend&&pe>sn&&(M=sn,sn=pe,pe=M);var J=Gp(C,pe),q=Gp(C,sn);if(J&&q&&(ut.rangeCount!==1||ut.anchorNode!==J.node||ut.anchorOffset!==J.offset||ut.focusNode!==q.node||ut.focusOffset!==q.offset)){var nt=St.createRange();nt.setStart(J.node,J.offset),ut.removeAllRanges(),pe>sn?(ut.addRange(nt),ut.extend(q.node,q.offset)):(nt.setEnd(q.node,q.offset),ut.addRange(nt))}}}}for(St=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&St.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<St.length;C++){var xt=St[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}dc=!!$f,th=$f=null}finally{Je=u,at.p=o,B.T=a}}e.current=n,jn=2}}function n_(){if(jn===2){jn=0;var e=Va,n=fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=at.p;at.p=2;var u=Je;Je|=4;try{Ng(e,n.alternate,n)}finally{Je=u,at.p=o,B.T=a}}jn=3}}function i_(){if(jn===4||jn===3){jn=0,se();var e=Va,n=fr,a=hr,o=jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?jn=5:(jn=0,fr=Va=null,a_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Ce(a),n=n.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=at.p,at.p=2,B.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var C=o[M];h(C.value,{componentStack:C.stack})}}finally{B.T=n,at.p=u}}(hr&3)!==0&&ec(),Yi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Ff?Do++:(Do=0,Ff=e):Do=0,Uo(0)}}function a_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function ec(e){return e_(),n_(),i_(),s_()}function s_(){if(jn!==5)return!1;var e=Va,n=If;If=0;var a=Ce(hr),o=B.T,u=at.p;try{at.p=32>a?32:a,B.T=null,a=Bf,Bf=null;var h=Va,M=hr;if(jn=0,fr=Va=null,hr=0,(Je&6)!==0)throw Error(s(331));var C=Je;if(Je|=4,Vg(h.current),Fg(h,h.current,M,a),Je=C,Uo(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ot,h)}catch{}return!0}finally{at.p=u,B.T=o,a_(e,n)}}function r_(e,n,a){n=Ei(a,n),n=_f(e.stateNode,n,2),e=La(e,n,2),e!==null&&(jt(e,2),Yi(e))}function un(e,n,a){if(e.tag===3)r_(e,e,a);else for(;n!==null;){if(n.tag===3){r_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=Ei(a,e),a=ug(2),o=La(n,a,2),o!==null&&(fg(a,o,n,e),jt(o,2),Yi(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new uy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),e=my.bind(null,e,n,a),n.then(e,e))}function my(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,fn===e&&(Fe&a)===a&&(Mn===4||Mn===3&&(Fe&62914560)===Fe&&300>It()-zf?(Je&2)===0&&dr(e,0):Of|=a,ur===Fe&&(ur=0)),Yi(e)}function o_(e,n){n===0&&(n=wt()),e=Zs(e,n),e!==null&&(jt(e,n),Yi(e))}function gy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),o_(e,a)}function _y(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),o_(e,a)}function vy(e,n){return G(e,n)}var nc=null,mr=null,jf=!1,ic=!1,Xf=!1,bs=0;function Yi(e){e!==mr&&e.next===null&&(mr===null?nc=mr=e:mr=mr.next=e),ic=!0,jf||(jf=!0,yy())}function Uo(e,n){if(!Xf&&ic){Xf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Nt(42|e)+1)-1,h&=u&~(M&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,f_(o,h))}else h=Fe,h=Kt(o,o===fn?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Dt(o,h)||(a=!0,f_(o,h));o=o.next}while(a);Xf=!1}}function xy(){l_()}function l_(){ic=jf=!1;var e=0;bs!==0&&(wy()&&(e=bs),bs=0);for(var n=It(),a=null,o=nc;o!==null;){var u=o.next,h=c_(o,n);h===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(mr=a)):(a=o,(e!==0||(h&3)!==0)&&(ic=!0)),o=u}Uo(e)}function c_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Nt(h),C=1<<M,H=u[M];H===-1?((C&a)===0||(C&o)!==0)&&(u[M]=de(C,n)):H<=n&&(e.expiredLanes|=C),h&=~C}if(n=fn,a=Fe,a=Kt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&($e===2||$e===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ie(o),Ce(a)){case 2:case 8:a=ge;break;case 32:a=tn;break;case 268435456:a=z;break;default:a=tn}return o=u_.bind(null,e),a=G(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ie(o),e.callbackPriority=2,e.callbackNode=null,2}function u_(e,n){if(jn!==0&&jn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=Fe;return o=Kt(e,e===fn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Wg(e,o,n),c_(e,It()),e.callbackNode!=null&&e.callbackNode===a?u_.bind(null,e):null)}function f_(e,n){if(ec())return null;Wg(e,n,!0)}function yy(){Dy(function(){(Je&6)!==0?G(qt,xy):l_()})}function Wf(){return bs===0&&(bs=Y()),bs}function h_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function d_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Sy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=h_((u[ce]||null).action),M=o.submitter;M&&(n=(n=M[ce]||null)?h_(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var C=new vl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(bs!==0){var H=M?d_(u,M):new FormData(u);hf(a,{pending:!0,data:H,method:u.method,action:h},null,H)}}else typeof h=="function"&&(C.preventDefault(),H=M?d_(u,M):new FormData(u),hf(a,{pending:!0,data:H,method:u.method,action:h},h,H))},currentTarget:u}]})}}for(var qf=0;qf<Du.length;qf++){var Yf=Du[qf],My=Yf.toLowerCase(),Ey=Yf[0].toUpperCase()+Yf.slice(1);Ni(My,"on"+Ey)}Ni(Wp,"onAnimationEnd"),Ni(qp,"onAnimationIteration"),Ni(Yp,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Hx,"onTransitionRun"),Ni(Gx,"onTransitionStart"),Ni(Vx,"onTransitionCancel"),Ni(Zp,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),T("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),T("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),T("onBeforeInput",["compositionend","keypress","textInput","paste"]),T("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),T("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function p_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],H=C.instance,st=C.currentTarget;if(C=C.listener,H!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=st;try{h(u)}catch(mt){jl(mt)}u.currentTarget=null,h=H}else for(M=0;M<o.length;M++){if(C=o[M],H=C.instance,st=C.currentTarget,C=C.listener,H!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=st;try{h(u)}catch(mt){jl(mt)}u.currentTarget=null,h=H}}}}function Oe(e,n){var a=n[Ft];a===void 0&&(a=n[Ft]=new Set);var o=e+"__bubble";a.has(o)||(m_(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),m_(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[ac]){e[ac]=!0,ee.forEach(function(a){a!=="selectionchange"&&(by.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,Zf("selectionchange",!1,n))}}function m_(e,n,a,o){switch(F_(n)){case 2:var u=Qy;break;case 8:u=Jy;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=Qe(C),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){o=h=M;continue t}C=C.parentNode}}o=o.return}Mp(function(){var st=h,mt=mu(a),St=[];t:{var lt=Kp.get(e);if(lt!==void 0){var ut=vl,_e=e;switch(e){case"keypress":if(gl(a)===0)break t;case"keydown":case"keyup":ut=vx;break;case"focusin":_e="focus",ut=Su;break;case"focusout":_e="blur",ut=Su;break;case"beforeblur":case"afterblur":ut=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Sx;break;case Wp:case qp:case Yp:ut=cx;break;case Zp:ut=Ex;break;case"scroll":case"scrollend":ut=ax;break;case"wheel":ut=Tx;break;case"copy":case"cut":case"paste":ut=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Rp;break;case"toggle":case"beforetoggle":ut=Rx}var pe=(n&4)!==0,sn=!pe&&(e==="scroll"||e==="scrollend"),J=pe?lt!==null?lt+"Capture":null:lt;pe=[];for(var q=st,nt;q!==null;){var xt=q;if(nt=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||nt===null||J===null||(xt=Kr(q,J),xt!=null&&pe.push(No(q,xt,nt))),sn)break;q=q.return}0<pe.length&&(lt=new ut(lt,_e,null,a,mt),St.push({event:lt,listeners:pe}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&a!==pu&&(_e=a.relatedTarget||a.fromElement)&&(Qe(_e)||_e[Ue]))break t;if((ut||lt)&&(lt=mt.window===mt?mt:(lt=mt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(_e=a.relatedTarget||a.toElement,ut=st,_e=_e?Qe(_e):null,_e!==null&&(sn=c(_e),pe=_e.tag,_e!==sn||pe!==5&&pe!==27&&pe!==6)&&(_e=null)):(ut=null,_e=st),ut!==_e)){if(pe=Tp,xt="onMouseLeave",J="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Rp,xt="onPointerLeave",J="onPointerEnter",q="pointer"),sn=ut==null?lt:He(ut),nt=_e==null?lt:He(_e),lt=new pe(xt,q+"leave",ut,a,mt),lt.target=sn,lt.relatedTarget=nt,xt=null,Qe(mt)===st&&(pe=new pe(J,q+"enter",_e,a,mt),pe.target=nt,pe.relatedTarget=sn,xt=pe),sn=xt,ut&&_e)e:{for(pe=ut,J=_e,q=0,nt=pe;nt;nt=gr(nt))q++;for(nt=0,xt=J;xt;xt=gr(xt))nt++;for(;0<q-nt;)pe=gr(pe),q--;for(;0<nt-q;)J=gr(J),nt--;for(;q--;){if(pe===J||J!==null&&pe===J.alternate)break e;pe=gr(pe),J=gr(J)}pe=null}else pe=null;ut!==null&&g_(St,lt,ut,pe,!1),_e!==null&&sn!==null&&g_(St,sn,_e,pe,!0)}}t:{if(lt=st?He(st):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Jt=Pp;else if(Np(lt))if(zp)Jt=Ix;else{Jt=Px;var De=Ox}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&du(st.elementType)&&(Jt=Pp):Jt=zx;if(Jt&&(Jt=Jt(e,st))){Op(St,Jt,a,mt);break t}De&&De(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&Yn(lt,"number",lt.value)}switch(De=st?He(st):window,e){case"focusin":(Np(De)||De.contentEditable==="true")&&(Ws=De,Ru=st,ao=null);break;case"focusout":ao=Ru=Ws=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,jp(St,a,mt);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":jp(St,a,mt)}var ie;if(Eu)t:{switch(e){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Xs?Up(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(wp&&a.locale!=="ko"&&(Xs||me!=="onCompositionStart"?me==="onCompositionEnd"&&Xs&&(ie=Ep()):(wa=mt,vu="value"in wa?wa.value:wa.textContent,Xs=!0)),De=sc(st,me),0<De.length&&(me=new Ap(me,e,null,a,mt),St.push({event:me,listeners:De}),ie?me.data=ie:(ie=Lp(a),ie!==null&&(me.data=ie)))),(ie=Cx?Dx(e,a):Ux(e,a))&&(me=sc(st,"onBeforeInput"),0<me.length&&(De=new Ap("onBeforeInput","beforeinput",null,a,mt),St.push({event:De,listeners:me}),De.data=ie)),Sy(St,e,st,a,mt)}p_(St,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Kr(e,a),u!=null&&o.unshift(No(e,u,h)),u=Kr(e,n),u!=null&&o.push(No(e,u,h))),e.tag===3)return o;e=e.return}return[]}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function g_(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var C=a,H=C.alternate,st=C.stateNode;if(C=C.tag,H!==null&&H===o)break;C!==5&&C!==26&&C!==27||st===null||(H=st,u?(st=Kr(a,h),st!=null&&M.unshift(No(a,st,H))):u||(st=Kr(a,h),st!=null&&M.push(No(a,st,H)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Ty=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function __(e){return(typeof e=="string"?e:""+e).replace(Ty,`
`).replace(Ay,"")}function v_(e,n){return n=__(n),__(e)===n}function rc(){}function an(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(e,""+o);break;case"className":Pt(e,"class",o);break;case"tabIndex":Pt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,o);break;case"style":yp(e,o,h);break;case"data":if(n!=="object"){Pt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&an(e,n,"name",u.name,u,null),an(e,n,"formEncType",u.formEncType,u,null),an(e,n,"formMethod",u.formMethod,u,null),an(e,n,"formTarget",u.formTarget,u,null)):(an(e,n,"encType",u.encType,u,null),an(e,n,"method",u.method,u,null),an(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=pl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=rc);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=pl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nx.get(a)||a,Tt(e,a,o))}}function Jf(e,n,a,o,u,h){switch(a){case"style":yp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ai(e,o):(typeof o=="number"||typeof o=="bigint")&&ai(e,""+o);break;case"onScroll":o!=null&&Oe("scroll",e);break;case"onScrollEnd":o!=null&&Oe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[ce]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function Xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,h,M,a,null)}}u&&an(e,n,"srcSet",a.srcSet,a,null),o&&an(e,n,"src",a.src,a,null);return;case"input":Oe("invalid",e);var C=h=M=u=null,H=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":H=mt;break;case"defaultChecked":st=mt;break;case"value":h=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:an(e,n,o,mt,a,null)}}ti(e,h,C,H,st,M,u,!1),Le(e);return;case"select":Oe("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:an(e,n,u,C,a,null)}n=h,a=M,e.multiple=!!o,n!=null?yn(e,!!o,n,!1):a!=null&&yn(e,!!o,a,!0);return;case"textarea":Oe("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:an(e,n,M,C,a,null)}Vs(e,o,u,h),Le(e);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:an(e,n,H,o,a,null)}return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)Oe(Lo[o],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:an(e,n,st,o,a,null)}return;default:if(du(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Jf(e,n,mt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&an(e,n,C,o,a,null))}function Ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,C=null,H=null,st=null,mt=null;for(ut in a){var St=a[ut];if(a.hasOwnProperty(ut)&&St!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=St;default:o.hasOwnProperty(ut)||an(e,n,ut,null,o,St)}}for(var lt in o){var ut=o[lt];if(St=a[lt],o.hasOwnProperty(lt)&&(ut!=null||St!=null))switch(lt){case"type":h=ut;break;case"name":u=ut;break;case"checked":st=ut;break;case"defaultChecked":mt=ut;break;case"value":M=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==St&&an(e,n,lt,ut,o,St)}}cn(e,M,C,H,st,mt,h,u);return;case"select":ut=M=C=lt=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ut=H;default:o.hasOwnProperty(h)||an(e,n,h,null,o,H)}for(u in o)if(h=o[u],H=a[u],o.hasOwnProperty(u)&&(h!=null||H!=null))switch(u){case"value":lt=h;break;case"defaultValue":C=h;break;case"multiple":M=h;default:h!==H&&an(e,n,u,h,o,H)}n=C,a=M,o=ut,lt!=null?yn(e,!!a,lt,!1):!!o!=!!a&&(n!=null?yn(e,!!a,n,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":ut=lt=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:an(e,n,C,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":lt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&an(e,n,M,u,o,h)}Vn(e,lt,ut);return;case"option":for(var _e in a)if(lt=a[_e],a.hasOwnProperty(_e)&&lt!=null&&!o.hasOwnProperty(_e))switch(_e){case"selected":e.selected=!1;break;default:an(e,n,_e,null,o,lt)}for(H in o)if(lt=o[H],ut=a[H],o.hasOwnProperty(H)&&lt!==ut&&(lt!=null||ut!=null))switch(H){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:an(e,n,H,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)lt=a[pe],a.hasOwnProperty(pe)&&lt!=null&&!o.hasOwnProperty(pe)&&an(e,n,pe,null,o,lt);for(st in o)if(lt=o[st],ut=a[st],o.hasOwnProperty(st)&&lt!==ut&&(lt!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:an(e,n,st,lt,o,ut)}return;default:if(du(n)){for(var sn in a)lt=a[sn],a.hasOwnProperty(sn)&&lt!==void 0&&!o.hasOwnProperty(sn)&&Jf(e,n,sn,void 0,o,lt);for(mt in o)lt=o[mt],ut=a[mt],!o.hasOwnProperty(mt)||lt===ut||lt===void 0&&ut===void 0||Jf(e,n,mt,lt,o,ut);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&an(e,n,J,null,o,lt);for(St in o)lt=o[St],ut=a[St],!o.hasOwnProperty(St)||lt===ut||lt==null&&ut==null||an(e,n,St,lt,o,ut)}var $f=null,th=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function x_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function wy(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,M_=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof M_<"u"?function(e){return M_.resolve(null).then(e).catch(Uy)}:S_;function Uy(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function E_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Oo(M.documentElement),a&2&&Oo(M.body),a&4)for(a=M.head,Oo(a),M=a.firstChild;M;){var C=M.nextSibling,H=M.nodeName;M[Ee]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=C}}if(u===0){e.removeChild(h),Vo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Vo(n)}function ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),Be(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ly(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ee])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Pi(e.nextSibling),e===null)break}return null}function Ny(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pi(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Oy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var sh=null;function b_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function T_(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Be(e)}var Ci=new Map,A_=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=at.d;at.d={f:Py,r:zy,D:Iy,C:By,L:Fy,m:Hy,X:Vy,S:Gy,M:ky};function Py(){var e=ma.f(),n=$l();return e||n}function zy(e){var n=je(e);n!==null&&n.tag===5&&n.type==="form"?Wm(n):ma.r(e)}var _r=typeof document>"u"?null:document;function R_(e,n,a){var o=_r;if(o&&typeof n=="string"&&n){var u=In(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),A_.has(u)||(A_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Xn(n,"link",e),Xe(n),o.head.appendChild(n)))}}function Iy(e){ma.D(e),R_("dns-prefetch",e,null)}function By(e,n){ma.C(e,n),R_("preconnect",e,n)}function Fy(e,n,a){ma.L(e,n,a);var o=_r;if(o&&e&&n){var u='link[rel="preload"][as="'+In(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+In(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+In(a.imageSizes)+'"]')):u+='[href="'+In(e)+'"]';var h=u;switch(n){case"style":h=vr(e);break;case"script":h=xr(e)}Ci.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(h))||n==="script"&&o.querySelector(zo(h))||(n=o.createElement("link"),Xn(n,"link",e),Xe(n),o.head.appendChild(n)))}}function Hy(e,n){ma.m(e,n);var a=_r;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+In(o)+'"][href="'+In(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=xr(e)}if(!Ci.has(h)&&(e=_({rel:"modulepreload",href:e},n),Ci.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(h)))return}o=a.createElement("link"),Xn(o,"link",e),Xe(o),a.head.appendChild(o)}}}function Gy(e,n,a){ma.S(e,n,a);var o=_r;if(o&&e){var u=Ge(o).hoistableStyles,h=vr(e);n=n||"default";var M=u.get(h);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(Po(h)))C.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(h))&&rh(e,a);var H=M=o.createElement("link");Xe(H),Xn(H,"link",e),H._p=new Promise(function(st,mt){H.onload=st,H.onerror=mt}),H.addEventListener("load",function(){C.loading|=1}),H.addEventListener("error",function(){C.loading|=2}),C.loading|=4,cc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(h,M)}}}function Vy(e,n){ma.X(e,n);var a=_r;if(a&&e){var o=Ge(a).hoistableScripts,u=xr(e),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(e=_({src:e,async:!0},n),(n=Ci.get(u))&&oh(e,n),h=a.createElement("script"),Xe(h),Xn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ky(e,n){ma.M(e,n);var a=_r;if(a&&e){var o=Ge(a).hoistableScripts,u=xr(e),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=Ci.get(u))&&oh(e,n),h=a.createElement("script"),Xe(h),Xn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function w_(e,n,a,o){var u=(u=it.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=Ge(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vr(a.href);var h=Ge(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Po(e)))&&!h._p&&(M.instance=h,M.state.loading=5),Ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,a),h||jy(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Ge(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vr(e){return'href="'+In(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function C_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function jy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Xn(n,"link",a),Xe(n),e.head.appendChild(n))}function xr(e){return'[src="'+In(e)+'"]'}function zo(e){return"script[async]"+e}function D_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+In(a.href)+'"]');if(o)return n.instance=o,Xe(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Xe(o),Xn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=vr(a.href);var h=e.querySelector(Po(u));if(h)return n.state.loading|=4,n.instance=h,Xe(h),h;o=C_(a),(u=Ci.get(u))&&rh(o,u),h=(e.ownerDocument||e).createElement("link"),Xe(h);var M=h;return M._p=new Promise(function(C,H){M.onload=C,M.onerror=H}),Xn(h,"link",o),n.state.loading|=4,cc(h,a.precedence,e),n.instance=h;case"script":return h=xr(a.src),(u=e.querySelector(zo(h)))?(n.instance=u,Xe(u),u):(o=a,(u=Ci.get(h))&&(o=_({},a),oh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Xe(u),Xn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function U_(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ee]||h[re]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var C=o.get(M);C?C.push(h):o.set(M,[h])}}return o}function L_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Xy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Io=null;function Wy(){}function qy(e,n,a){if(Io===null)throw Error(s(475));var o=Io;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=vr(a.href),h=e.querySelector(Po(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,Xe(h);return}h=e.ownerDocument||e,a=C_(a),(u=Ci.get(u))&&rh(a,u),h=h.createElement("link"),Xe(h);var M=h;M._p=new Promise(function(C,H){M.onload=C,M.onerror=H}),Xn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=fc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Yy(){if(Io===null)throw Error(s(475));var e=Io;return e.stylesheets&&e.count===0&&lh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function fc(){if(this.count--,this.count===0){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hc=null;function lh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hc=new Map,n.forEach(Zy,e),hc=null,fc.call(e))}function Zy(e,n){if(!(n.state.loading&4)){var a=hc.get(e);if(a)var o=a.get(null);else{a=new Map,hc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ky(e,n,a,o,u,h,M,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function O_(e,n,a,o,u,h,M,C,H,st,mt,St){return e=new Ky(e,n,a,M,C,H,st,St),n=1,h===!0&&(n|=24),h=di(3,null,null,n),e.current=h,h.stateNode=e,n=Vu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Wu(h),e}function P_(e){return e?(e=Ks,e):Ks}function z_(e,n,a,o,u,h){u=P_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=La(e,o,n),a!==null&&(vi(a,e,n),po(a,e,n))}function I_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){I_(e,n),(e=e.alternate)&&I_(e,n)}function B_(e){if(e.tag===13){var n=Zs(e,67108864);n!==null&&vi(n,e,67108864),ch(e,67108864)}}var dc=!0;function Qy(e,n,a,o){var u=B.T;B.T=null;var h=at.p;try{at.p=2,uh(e,n,a,o)}finally{at.p=h,B.T=u}}function Jy(e,n,a,o){var u=B.T;B.T=null;var h=at.p;try{at.p=8,uh(e,n,a,o)}finally{at.p=h,B.T=u}}function uh(e,n,a,o){if(dc){var u=fh(o);if(u===null)Qf(e,n,o,pc,a),H_(e,o);else if(tS(u,e,n,a,o))o.stopPropagation();else if(H_(e,o),n&4&&-1<$y.indexOf(e)){for(;u!==null;){var h=je(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=$t(h.pendingLanes);if(M!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var H=1<<31-Nt(M);C.entanglements[1]|=H,M&=~H}Yi(h),(Je&6)===0&&(Ql=It()+500,Uo(0))}}break;case 13:C=Zs(h,2),C!==null&&vi(C,h,2),$l(),ch(h,2)}if(h=fh(o),h===null&&Qf(e,n,o,pc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function fh(e){return e=mu(e),hh(e)}var pc=null;function hh(e){if(pc=null,e=Qe(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function F_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(we()){case qt:return 2;case ge:return 8;case tn:case en:return 32;case z:return 268435456;default:return 32}default:return 32}}var dh=!1,Xa=null,Wa=null,qa=null,Fo=new Map,Ho=new Map,Ya=[],$y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H_(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=je(n),n!==null&&B_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function tS(e,n,a,o,u){switch(n){case"focusin":return Xa=Go(Xa,e,n,a,o,u),!0;case"dragenter":return Wa=Go(Wa,e,n,a,o,u),!0;case"mouseover":return qa=Go(qa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Fo.set(h,Go(Fo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Ho.set(h,Go(Ho.get(h)||null,e,n,a,o,u)),!0}return!1}function G_(e){var n=Qe(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Yt(e.priority,function(){if(a.tag===13){var o=_i();o=le(o);var u=Zs(a,o);u!==null&&vi(u,a,o),ch(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=je(a),n!==null&&B_(n),e.blockedOn=a,!1;n.shift()}return!0}function V_(e,n,a){mc(e)&&a.delete(n)}function eS(){dh=!1,Xa!==null&&mc(Xa)&&(Xa=null),Wa!==null&&mc(Wa)&&(Wa=null),qa!==null&&mc(qa)&&(qa=null),Fo.forEach(V_),Ho.forEach(V_)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,eS)))}var _c=null;function k_(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var h=je(a);h!==null&&(e.splice(n,3),n-=3,hf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Vo(e){function n(H){return gc(H,e)}Xa!==null&&gc(Xa,e),Wa!==null&&gc(Wa,e),qa!==null&&gc(qa,e),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<Ya.length;a++){var o=Ya[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)G_(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[ce]||null;if(typeof h=="function")M||k_(a);else if(M){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[ce]||null)C=M.formAction;else if(hh(u)!==null)continue}else C=M.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),k_(a)}}}function ph(e){this._internalRoot=e}vc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();z_(a,o,e,n,null,null)},vc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;z_(e.current,2,null,e,null,null),$l(),n[Ue]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Q();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&G_(e)}};var j_=t.version;if(j_!=="19.1.1")throw Error(s(527,j_,"19.1.1"));at.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var nS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{ot=xc.inject(nS),gt=xc}catch{}}return jo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=rg,h=og,M=lg,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=O_(e,1,!1,null,null,a,o,u,h,M,C,null),e[Ue]=n.current,Kf(e),new ph(n)},jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=rg,M=og,C=lg,H=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(H=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=O_(e,1,!0,n,a??null,o,u,h,M,C,H,st),n.context=P_(null),a=n.current,o=_i(),o=le(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,jt(n,a),Yi(n),e[Ue]=n.current,Kf(e),new vc(n)},jo.version="19.1.1",jo}var t0;function hS(){if(t0)return _h.exports;t0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=fS(),_h.exports}var dS=hS();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=oe.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},m)=>oe.createElement("svg",{ref:m,...mS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:gv("lucide",l),...d},[...f.map(([p,_])=>oe.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=(r,t)=>{const i=oe.forwardRef(({className:s,...l},c)=>oe.createElement(gS,{ref:c,iconNode:t,className:gv(`lucide-${pS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=hn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=hn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=hn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=hn("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=hn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=hn("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=hn("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=hn("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=hn("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=hn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=hn("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=hn("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=hn("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=hn("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=hn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=hn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=hn("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=hn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=hn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=hn("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=hn("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=hn("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=hn("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=hn("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=hn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=hn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="180",Hr={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},NS=0,r0=1,OS=2,vv=1,PS=2,Ea=3,os=0,fi=1,Ta=2,ss=0,Gr=1,o0=2,l0=3,c0=4,zS=5,Ls=100,IS=101,BS=102,FS=103,HS=104,GS=200,VS=201,kS=202,jS=203,ld=204,cd=205,XS=206,WS=207,qS=208,YS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,ud=0,fd=1,hd=2,jr=3,dd=4,pd=5,md=6,gd=7,xv=0,tM=1,eM=2,rs=0,nM=1,iM=2,aM=3,sM=4,rM=5,oM=6,lM=7,yv=300,Xr=301,Wr=302,_d=303,vd=304,uu=306,xd=1e3,Os=1001,yd=1002,Vi=1003,cM=1004,yc=1005,Ji=1006,bh=1007,Ps=1008,ta=1009,Sv=1010,Mv=1011,nl=1012,np=1013,zs=1014,Aa=1015,ll=1016,ip=1017,ap=1018,il=1020,Ev=35902,bv=35899,Tv=1021,Av=1022,Gi=1023,al=1026,sl=1027,Rv=1028,sp=1029,wv=1030,rp=1031,op=1033,Jc=33776,$c=33777,tu=33778,eu=33779,Sd=35840,Md=35841,Ed=35842,bd=35843,Td=36196,Ad=37492,Rd=37496,wd=37808,Cd=37809,Dd=37810,Ud=37811,Ld=37812,Nd=37813,Od=37814,Pd=37815,zd=37816,Id=37817,Bd=37818,Fd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,jd=36495,Xd=36283,Wd=36284,qd=36285,Yd=36286,uM=3200,fM=3201,Cv=0,hM=1,is="",Si="srgb",qr="srgb-linear",au="linear",rn="srgb",yr=7680,u0=519,dM=512,pM=513,mM=514,Dv=515,gM=516,_M=517,vM=518,xM=519,f0=35044,yM=35048,h0="300 es",$i=2e3,su=2001;class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,Zd=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]).toLowerCase()}function Pe(r,t,i){return Math.max(t,Math.min(i,r))}function SM(r,t){return(r%t+t)%t}function Th(r,t,i){return(1-i)*r+i*t}function Xo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ci(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const MM={DEG2RAD:tl};class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];const x=c[f+0],y=c[f+1],b=c[f+2],E=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=E;return}if(g!==E||m!==x||p!==y||_!==b){let S=1-d;const v=m*x+p*y+_*b+g*E,L=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const O=Math.sqrt(N),I=Math.atan2(O,v*L);S=Math.sin(S*I)/O,d=Math.sin(d*I)/O}const D=d*L;if(m=m*S+x*D,p=p*S+y*D,_=_*S+b*D,g=g*S+E*D,S===1-d){const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[i]=d*b+_*g+m*y-p*x,t[i+1]=m*b+_*x+p*g-d*y,t[i+2]=p*b+_*y+d*x-m*g,t[i+3]=_*b-d*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),x=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"YXZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"ZXY":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"ZYX":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"YZX":this._x=x*_*g+p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g-x*y*b;break;case"XZY":this._x=x*_*g-p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(d0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(d0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),_=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new W,d0=new Is;class Te{constructor(t,i,s,l,c,f,d,m,p){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],y=s[5],b=s[8],E=l[0],S=l[3],v=l[6],L=l[1],N=l[4],D=l[7],O=l[2],I=l[5],F=l[8];return c[0]=f*E+d*L+m*O,c[3]=f*S+d*N+m*I,c[6]=f*v+d*D+m*F,c[1]=p*E+_*L+g*O,c[4]=p*S+_*N+g*I,c[7]=p*v+_*D+g*F,c[2]=x*E+y*L+b*O,c[5]=x*S+y*N+b*I,c[8]=x*v+y*D+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*f-d*p,x=d*m-_*c,y=p*c-f*m,b=i*g+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=g*E,t[1]=(l*p-_*s)*E,t[2]=(d*s-l*f)*E,t[3]=x*E,t[4]=(_*i-l*m)*E,t[5]=(l*c-d*i)*E,t[6]=y*E,t[7]=(s*m-p*i)*E,t[8]=(f*i-s*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new Te;function Uv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function EM(){const r=ru("canvas");return r.style.display="block",r}const p0={};function rl(r){r in p0||(p0[r]=!0,console.warn(r))}function bM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const m0=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g0=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TM(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===rn&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===rn&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:s,transfer:au,toXYZ:m0,fromXYZ:g0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:rn,toXYZ:m0,fromXYZ:g0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const ke=TM();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class AM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=ru("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RM=0;class lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(wh(l[f].image)):c.push(wh(l[f]))}else c=wh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wM=0;const Ch=new W;class ii extends Hs{constructor(t=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=Os,l=Os,c=Ji,f=Ps,d=Gi,m=ta,p=ii.DEFAULT_ANISOTROPY,_=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=cl(),this.name="",this.source=new lp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case Os:t.x=t.x<0?0:1;break;case yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case Os:t.y=t.y<0?0:1;break;case yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=yv;ii.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],b=m[9],E=m[2],S=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+E)<.1&&Math.abs(b+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(y+1)/2,O=(v+1)/2,I=(_+x)/4,F=(g+E)/4,j=(b+S)/4;return N>D&&N>O?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=I/s,c=F/s):D>O?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=I/l,c=j/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=F/c,l=j/c),this.set(s,l,c,i),this}let L=Math.sqrt((S-b)*(S-b)+(g-E)*(g-E)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(g-E)/L,this.z=(x-_)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Pe(this.x,t.x,i.x),this.y=Pe(this.y,t.y,i.y),this.z=Pe(this.z,t.z,i.z),this.w=Pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Pe(this.x,t,i),this.y=Pe(this.y,t,i),this.z=Pe(this.z,t,i),this.w=Pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new ii(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ji,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new lp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bs extends CM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Lv extends ii{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends ii{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Vi,this.minFilter=Vi,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,zi):zi.fromBufferAttribute(c,f),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Sc.copy(s.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Mc.subVectors(this.max,Wo),Mr.subVectors(t.a,Wo),Er.subVectors(t.b,Wo),br.subVectors(t.c,Wo),Ka.subVectors(Er,Mr),Qa.subVectors(br,Er),Ts.subVectors(Mr,br);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Ts.z,Ts.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Ts.z,0,-Ts.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Ts.y,Ts.x,0];return!Dh(i,Mr,Er,br,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,Mr,Er,br,Mc))?!1:(Ec.crossVectors(Ka,Qa),i=[Ec.x,Ec.y,Ec.z],Dh(i,Mr,Er,br,Mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new W,new W,new W,new W,new W,new W,new W,new W],zi=new W,Sc=new ul,Mr=new W,Er=new W,br=new W,Ka=new W,Qa=new W,Ts=new W,Wo=new W,Mc=new W,Ec=new W,As=new W;function Dh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){As.fromArray(r,c);const d=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),p=i.dot(As),_=s.dot(As);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const UM=new ul,qo=new W,Uh=new W;class fl{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):UM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Uh)),this.expandByPoint(qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _a=new W,Lh=new W,bc=new W,Ja=new W,Nh=new W,Tc=new W,Oh=new W;class hl{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_a)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=_a.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Lh.copy(t).add(i).multiplyScalar(.5),bc.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(Lh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(bc),d=Ja.dot(this.direction),m=-Ja.dot(bc),p=Ja.lengthSq(),_=Math.abs(1-f*f);let g,x,y,b;if(_>0)if(g=f*m-d,x=f*d-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const E=1/_;g*=E,x*=E,y=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Lh).addScaledVector(bc,x),y}intersectSphere(t,i){_a.subVectors(t.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,_a)!==null}intersectTriangle(t,i,s,l,c){Nh.subVectors(i,t),Tc.subVectors(s,t),Oh.crossVectors(Nh,Tc);let f=this.direction.dot(Oh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ja.subVectors(this.origin,t);const m=d*this.direction.dot(Tc.crossVectors(Ja,Tc));if(m<0)return null;const p=d*this.direction.dot(Nh.cross(Ja));if(p<0||m+p>f)return null;const _=-d*Ja.dot(Oh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,s,l,c,f,d,m,p,_,g,x,y,b,E,S){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,_,g,x,y,b,E,S)}set(t,i,s,l,c,f,d,m,p,_,g,x,y,b,E,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=b,v[11]=E,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),f=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*_,y=f*g,b=d*_,E=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-E*p,i[9]=-d*m,i[2]=E-x*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,b=p*_,E=p*g;i[0]=x+E*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=y*d-b,i[6]=E+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,b=p*_,E=p*g;i[0]=x-E*d,i[4]=-f*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*_,i[9]=E-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*_,y=f*g,b=d*_,E=d*g;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+E,i[1]=m*g,i[5]=E*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=d*m,E=d*p;i[0]=m*_,i[4]=E-x*g,i[8]=b*g+y,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+b,i[10]=x-E*g}else if(t.order==="XZY"){const x=f*m,y=f*p,b=d*m,E=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+E,i[5]=f*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=E*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LM,t,NM)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),$a.crossVectors(s,xi),$a.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),$a.crossVectors(s,xi)),$a.normalize(),Ac.crossVectors(xi,$a),l[0]=$a.x,l[4]=Ac.x,l[8]=xi.x,l[1]=$a.y,l[5]=Ac.y,l[9]=xi.y,l[2]=$a.z,l[6]=Ac.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],y=s[13],b=s[2],E=s[6],S=s[10],v=s[14],L=s[3],N=s[7],D=s[11],O=s[15],I=l[0],F=l[4],j=l[8],w=l[12],U=l[1],V=l[5],K=l[9],ct=l[13],ht=l[2],ft=l[6],B=l[10],at=l[14],Z=l[3],Et=l[7],P=l[11],et=l[15];return c[0]=f*I+d*U+m*ht+p*Z,c[4]=f*F+d*V+m*ft+p*Et,c[8]=f*j+d*K+m*B+p*P,c[12]=f*w+d*ct+m*at+p*et,c[1]=_*I+g*U+x*ht+y*Z,c[5]=_*F+g*V+x*ft+y*Et,c[9]=_*j+g*K+x*B+y*P,c[13]=_*w+g*ct+x*at+y*et,c[2]=b*I+E*U+S*ht+v*Z,c[6]=b*F+E*V+S*ft+v*Et,c[10]=b*j+E*K+S*B+v*P,c[14]=b*w+E*ct+S*at+v*et,c[3]=L*I+N*U+D*ht+O*Z,c[7]=L*F+N*V+D*ft+O*Et,c[11]=L*j+N*K+D*B+O*P,c[15]=L*w+N*ct+D*at+O*et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],b=t[3],E=t[7],S=t[11],v=t[15];return b*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*y-s*m*y)+E*(+i*m*y-i*p*x+c*f*x-l*f*y+l*p*_-c*m*_)+S*(+i*p*g-i*d*y-c*f*g+s*f*y+c*d*_-s*p*_)+v*(-l*d*_-i*m*g+i*d*x+l*f*g-s*f*x+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],b=t[12],E=t[13],S=t[14],v=t[15],L=g*S*p-E*x*p+E*m*y-d*S*y-g*m*v+d*x*v,N=b*x*p-_*S*p-b*m*y+f*S*y+_*m*v-f*x*v,D=_*E*p-b*g*p+b*d*y-f*E*y-_*d*v+f*g*v,O=b*g*m-_*E*m-b*d*x+f*E*x+_*d*S-f*g*S,I=i*L+s*N+l*D+c*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=L*F,t[1]=(E*x*c-g*S*c-E*l*y+s*S*y+g*l*v-s*x*v)*F,t[2]=(d*S*c-E*m*c+E*l*p-s*S*p-d*l*v+s*m*v)*F,t[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*y-s*m*y)*F,t[4]=N*F,t[5]=(_*S*c-b*x*c+b*l*y-i*S*y-_*l*v+i*x*v)*F,t[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*v-i*m*v)*F,t[7]=(f*x*c-_*m*c+_*l*p-i*x*p-f*l*y+i*m*y)*F,t[8]=D*F,t[9]=(b*g*c-_*E*c-b*s*y+i*E*y+_*s*v-i*g*v)*F,t[10]=(f*E*c-b*d*c+b*s*p-i*E*p-f*s*v+i*d*v)*F,t[11]=(_*d*c-f*g*c-_*s*p+i*g*p+f*s*y-i*d*y)*F,t[12]=O*F,t[13]=(_*E*l-b*g*l+b*s*x-i*E*x-_*s*S+i*g*S)*F,t[14]=(b*d*l-f*E*l-b*s*m+i*E*m+f*s*S-i*d*S)*F,t[15]=(f*g*l-_*d*l+_*s*m-i*g*m-f*s*x+i*d*x)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,g=d+d,x=c*p,y=c*_,b=c*g,E=f*_,S=f*g,v=d*g,L=m*p,N=m*_,D=m*g,O=s.x,I=s.y,F=s.z;return l[0]=(1-(E+v))*O,l[1]=(y+D)*O,l[2]=(b-N)*O,l[3]=0,l[4]=(y-D)*I,l[5]=(1-(x+v))*I,l[6]=(S+L)*I,l[7]=0,l[8]=(b+N)*F,l[9]=(S-L)*F,l[10]=(1-(x+E))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Tr.set(l[0],l[1],l[2]).length();const f=Tr.set(l[4],l[5],l[6]).length(),d=Tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ii.copy(this);const p=1/c,_=1/f,g=1/d;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,i.setFromRotationMatrix(Ii),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=$i,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let b,E;if(m)b=c/(f-c),E=f*c/(f-c);else if(d===$i)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===su)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=$i,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,E;if(m)b=1/(f-c),E=f/(f-c);else if(d===$i)b=-2/(f-c),E=-(f+c)/(f-c);else if(d===su)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new W,Ii=new mn,LM=new W(0,0,0),NM=new W(1,1,1),$a=new W,Ac=new W,xi=new W,_0=new mn,v0=new Is;class ea{constructor(t=0,i=0,s=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Pe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return _0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return v0.setFromEuler(this),this.setFromQuaternion(v0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class cp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OM=0;const x0=new W,Ar=new Is,va=new mn,Rc=new W,Yo=new W,PM=new W,zM=new Is,y0=new W(1,0,0),S0=new W(0,1,0),M0=new W(0,0,1),E0={type:"added"},IM={type:"removed"},Rr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class On extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new W,i=new ea,s=new Is,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new Te}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(y0,t)}rotateY(t){return this.rotateOnAxis(S0,t)}rotateZ(t){return this.rotateOnAxis(M0,t)}translateOnAxis(t,i){return x0.copy(t).applyQuaternion(this.quaternion),this.position.add(x0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y0,t)}translateY(t){return this.translateOnAxis(S0,t)}translateZ(t){return this.translateOnAxis(M0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Rc.copy(t):Rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Yo,Rc,this.up):va.lookAt(Rc,Yo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(va),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(E0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(E0),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,zM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new W(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new W,xa=new W,zh=new W,ya=new W,wr=new W,Cr=new W,b0=new W,Ih=new W,Bh=new W,Fh=new W,Hh=new ln,Gh=new ln,Vh=new ln;class Ui{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),xa.subVectors(s,i),zh.subVectors(t,i);const f=Bi.dot(Bi),d=Bi.dot(xa),m=Bi.dot(zh),p=xa.dot(xa),_=xa.dot(zh),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-d*_)*x,b=(f*_-d*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(f,ya.y),m.addScaledVector(d,ya.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),xa.subVectors(t,i),Bi.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Bi.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;wr.subVectors(l,s),Cr.subVectors(c,s),Ih.subVectors(t,s);const m=wr.dot(Ih),p=Cr.dot(Ih);if(m<=0&&p<=0)return i.copy(s);Bh.subVectors(t,l);const _=wr.dot(Bh),g=Cr.dot(Bh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(wr,f);Fh.subVectors(t,c);const y=wr.dot(Fh),b=Cr.dot(Fh);if(b>=0&&y<=b)return i.copy(c);const E=y*p-m*b;if(E<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Cr,d);const S=_*b-y*g;if(S<=0&&g-_>=0&&y-b>=0)return b0.subVectors(c,l),d=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(b0,d);const v=1/(S+E+x);return f=E*v,d=x*v,i.copy(s).addScaledVector(wr,f).addScaledVector(Cr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},wc={h:0,s:0,l:0};function kh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ze{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ke.workingColorSpace){return this.r=t,this.g=i,this.b=s,ke.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ke.workingColorSpace){if(t=SM(t,1),i=Pe(i,0,1),s=Pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=Nv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ra(t.r),this.g=Ra(t.g),this.b=Ra(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return ke.workingToColorSpace(Jn.copy(this),t),Math.round(Pe(Jn.r*255,0,255))*65536+Math.round(Pe(Jn.g*255,0,255))*256+Math.round(Pe(Jn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ke.workingColorSpace){ke.workingToColorSpace(Jn.copy(this),i);const s=Jn.r,l=Jn.g,c=Jn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=ke.workingColorSpace){return ke.workingToColorSpace(Jn.copy(this),i),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Si){ke.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,s=Jn.g,l=Jn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(wc);const s=Th(ts.h,wc.h,i),l=Th(ts.s,wc.s,i),c=Th(ts.l,wc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new ze;ze.NAMES=Nv;let BM=0;class Gs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Gr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ld&&(s.blendSrc=this.blendSrc),this.blendDst!==cd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zi extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wn=new W,Cc=new ve;let FM=0;class ki{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=f0,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(t),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==f0&&(t.usage=this.usage),t}}class Ov extends ki{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Pv extends ki{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class _n extends ki{constructor(t,i,s){super(new Float32Array(t),i,s)}}let HM=0;const Di=new mn,jh=new On,Dr=new W,yi=new ul,Zo=new ul,Gn=new W;class Nn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uv(t)?Pv:Ov)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Te().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,i,s){return Di.makeTranslation(t,i,s),this.applyMatrix4(Di),this}scale(t,i,s){return Di.makeScale(t,i,s),this.applyMatrix4(Di),this}lookAt(t){return jh.lookAt(t),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new _n(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(Gn.addVectors(yi.min,Zo.min),yi.expandByPoint(Gn),Gn.addVectors(yi.max,Zo.max),yi.expandByPoint(Gn)):(yi.expandByPoint(Zo.min),yi.expandByPoint(Zo.max))}yi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Gn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Gn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Gn.fromBufferAttribute(d,p),m&&(Dr.fromBufferAttribute(t,p),Gn.add(Dr)),l=Math.max(l,s.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new W,m[j]=new W;const p=new W,_=new W,g=new W,x=new ve,y=new ve,b=new ve,E=new W,S=new W;function v(j,w,U){p.fromBufferAttribute(s,j),_.fromBufferAttribute(s,w),g.fromBufferAttribute(s,U),x.fromBufferAttribute(c,j),y.fromBufferAttribute(c,w),b.fromBufferAttribute(c,U),_.sub(p),g.sub(p),y.sub(x),b.sub(x);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(E.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(V),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),d[j].add(E),d[w].add(E),d[U].add(E),m[j].add(S),m[w].add(S),m[U].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let j=0,w=L.length;j<w;++j){const U=L[j],V=U.start,K=U.count;for(let ct=V,ht=V+K;ct<ht;ct+=3)v(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const N=new W,D=new W,O=new W,I=new W;function F(j){O.fromBufferAttribute(l,j),I.copy(O);const w=d[j];N.copy(w),N.sub(O.multiplyScalar(O.dot(w))).normalize(),D.crossVectors(I,w);const V=D.dot(m[j])<0?-1:1;f.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,w=L.length;j<w;++j){const U=L[j],V=U.start,K=U.count;for(let ct=V,ht=V+K;ct<ht;ct+=3)F(t.getX(ct+0)),F(t.getX(ct+1)),F(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new W,c=new W,f=new W,d=new W,m=new W,p=new W,_=new W,g=new W;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),E=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,E),p.fromBufferAttribute(s,S),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(E,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Gn.fromBufferAttribute(t,i),Gn.normalize(),t.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let E=0,S=m.length;E<S;E++){d.isInterleavedBufferAttribute?y=m[E]*d.data.stride+d.offset:y=m[E]*_;for(let v=0;v<_;v++)x[b++]=p[y++]}return new ki(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T0=new mn,Rs=new hl,Dc=new fl,A0=new W,Uc=new W,Lc=new W,Nc=new W,Xh=new W,Oc=new W,R0=new W,Pc=new W;class Tn extends On{constructor(t=new Nn,i=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Xh.fromBufferAttribute(g,t),f?Oc.addScaledVector(Xh,_):Oc.addScaledVector(Xh.sub(i),_))}i.add(Oc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(Dc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Dc,A0)===null||Rs.origin.distanceToSquared(A0)>(t.far-t.near)**2))&&(T0.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(T0),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const S=x[b],v=f[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let D=L,O=N;D<O;D+=3){const I=d.getX(D),F=d.getX(D+1),j=d.getX(D+2);l=zc(this,v,t,s,p,_,g,I,F,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=b,v=E;S<v;S+=3){const L=d.getX(S),N=d.getX(S+1),D=d.getX(S+2);l=zc(this,f,t,s,p,_,g,L,N,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const S=x[b],v=f[S.materialIndex],L=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=L,O=N;D<O;D+=3){const I=D,F=D+1,j=D+2;l=zc(this,v,t,s,p,_,g,I,F,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let S=b,v=E;S<v;S+=3){const L=S,N=S+1,D=S+2;l=zc(this,f,t,s,p,_,g,L,N,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function GM(r,t,i,s,l,c,f,d){let m;if(t.side===fi?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===os,d),m===null)return null;Pc.copy(d),Pc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:r}}function zc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(p,Nc);const _=GM(r,t,i,s,Uc,Lc,Nc,R0);if(_){const g=new W;Ui.getBarycoord(R0,Uc,Lc,Nc,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,d,m,p,g,new ve)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,d,m,p,g,new ve)),f&&(_.normal=Ui.getInterpolatedAttribute(f,d,m,p,g,new W),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new W,materialIndex:0};Ui.getNormal(Uc,Lc,Nc,x.normal),_.face=x,_.barycoord=g}return _}class Hi extends Nn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2));function b(E,S,v,L,N,D,O,I,F,j,w){const U=D/F,V=O/j,K=D/2,ct=O/2,ht=I/2,ft=F+1,B=j+1;let at=0,Z=0;const Et=new W;for(let P=0;P<B;P++){const et=P*V-ct;for(let Mt=0;Mt<ft;Mt++){const yt=Mt*U-K;Et[E]=yt*L,Et[S]=et*N,Et[v]=ht,p.push(Et.x,Et.y,Et.z),Et[E]=0,Et[S]=0,Et[v]=I>0?1:-1,_.push(Et.x,Et.y,Et.z),g.push(Mt/F),g.push(1-P/j),at+=1}}for(let P=0;P<j;P++)for(let et=0;et<F;et++){const Mt=x+et+ft*P,yt=x+et+ft*(P+1),zt=x+(et+1)+ft*(P+1),Wt=x+(et+1)+ft*P;m.push(Mt,yt,Wt),m.push(yt,zt,Wt),Z+=6}d.addGroup(y,Z,w),y+=Z,x+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function ni(r){const t={};for(let i=0;i<r.length;i++){const s=Yr(r[i]);for(const l in s)t[l]=s[l]}return t}function VM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}const kM={clone:Yr,merge:ni};var jM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jM,this.fragmentShader=XM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=VM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Iv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new W,w0=new ve,C0=new ve;class Mi extends Iv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,w0,C0),i.subVectors(C0,w0)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class WM extends On{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new Mi(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const f=new Mi(Ur,Lr,t,i);f.layers=this.layers,this.add(f);const d=new Mi(Ur,Lr,t,i);d.layers=this.layers,this.add(d);const m=new Mi(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new Mi(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===$i)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=E,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Bv extends ii{constructor(t=[],i=Xr,s,l,c,f,d,m,p,_){super(t,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qM extends Bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Hi(5,5,5),c=new ls({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:ss});c.uniforms.tEquirect.value=i;const f=new Tn(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Ji),new WM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Br extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const E of t.hand.values()){const S=i.getJointPose(E,s),v=this._getHandJoint(p,E);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Br;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class up{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ze(t),this.near=i,this.far=s}clone(){return new up(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let ZM=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};const qh=new W,KM=new W,QM=new Te;class ns{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=qh.subVectors(s,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QM.getNormalMatrix(t),l=this.coplanarPoint(qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new fl,JM=new ve(.5,.5),Ic=new W;class fp{constructor(t=new ns,i=new ns,s=new ns,l=new ns,c=new ns,f=new ns){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=$i,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],y=c[7],b=c[8],E=c[9],S=c[10],v=c[11],L=c[12],N=c[13],D=c[14],O=c[15];if(l[0].setComponents(p-f,y-_,v-b,O-L).normalize(),l[1].setComponents(p+f,y+_,v+b,O+L).normalize(),l[2].setComponents(p+d,y+g,v+E,O+N).normalize(),l[3].setComponents(p-d,y-g,v-E,O-N).normalize(),s)l[4].setComponents(m,x,S,D).normalize(),l[5].setComponents(p-m,y-x,v-S,O-D).normalize();else if(l[4].setComponents(p-m,y-x,v-S,O-D).normalize(),i===$i)l[5].setComponents(p+m,y+x,v+S,O+D).normalize();else if(i===su)l[5].setComponents(m,x,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){ws.center.set(0,0,0);const i=JM.distanceTo(t.center);return ws.radius=.7071067811865476+i,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kr extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new W,lu=new W,D0=new mn,Ko=new hl,Bc=new fl,Yh=new W,U0=new W;class nu extends On{constructor(t=new Nn,i=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;D0.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(D0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let E=y,S=b-1;E<S;E+=p){const v=_.getX(E),L=_.getX(E+1),N=Fc(this,t,Ko,m,v,L,E);N&&i.push(N)}if(this.isLineLoop){const E=_.getX(b-1),S=_.getX(y),v=Fc(this,t,Ko,m,E,S,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let E=y,S=b-1;E<S;E+=p){const v=Fc(this,t,Ko,m,E,E+1,E);v&&i.push(v)}if(this.isLineLoop){const E=Fc(this,t,Ko,m,b-1,y,b-1);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(ou.fromBufferAttribute(d,l),lu.fromBufferAttribute(d,c),i.distanceSqToSegment(ou,lu,Yh,U0)>s)return;Yh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Yh);if(!(p<t.near||p>t.far))return{distance:p,point:U0.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const L0=new W,N0=new W;class Fv extends nu{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)L0.fromBufferAttribute(i,l),N0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+L0.distanceTo(N0);t.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hv extends Gs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const O0=new mn,Kd=new hl,Hc=new fl,Gc=new W;class $M extends On{constructor(t=new Nn,i=new Hv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;O0.copy(l).invert(),Kd.copy(t.ray).applyMatrix4(O0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=x,E=y;b<E;b++){const S=p.getX(b);Gc.fromBufferAttribute(g,S),P0(Gc,S,m,l,t,i,this)}}else{const x=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let b=x,E=y;b<E;b++)Gc.fromBufferAttribute(g,b),P0(Gc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function P0(r,t,i,s,l,c,f){const d=Kd.distanceSqToPoint(r);if(d<i){const m=new W;Kd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class tE extends ii{constructor(t,i,s,l,c,f,d,m,p){super(t,i,s,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gv extends ii{constructor(t,i,s=zs,l,c,f,d=Vi,m=Vi,p,_=al,g=1){if(_!==al&&_!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Vv extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fu extends Nn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],x=[],y=[];let b=0;const E=[],S=s/2;let v=0;L(),f===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(_),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(y,2));function L(){const D=new W,O=new W;let I=0;const F=(i-t)/s;for(let j=0;j<=c;j++){const w=[],U=j/c,V=U*(i-t)+t;for(let K=0;K<=l;K++){const ct=K/l,ht=ct*m+d,ft=Math.sin(ht),B=Math.cos(ht);O.x=V*ft,O.y=-U*s+S,O.z=V*B,g.push(O.x,O.y,O.z),D.set(ft,F,B).normalize(),x.push(D.x,D.y,D.z),y.push(ct,1-U),w.push(b++)}E.push(w)}for(let j=0;j<l;j++)for(let w=0;w<c;w++){const U=E[w][j],V=E[w+1][j],K=E[w+1][j+1],ct=E[w][j+1];(t>0||w!==0)&&(_.push(U,V,ct),I+=3),(i>0||w!==c-1)&&(_.push(V,K,ct),I+=3)}p.addGroup(v,I,0),v+=I}function N(D){const O=b,I=new ve,F=new W;let j=0;const w=D===!0?t:i,U=D===!0?1:-1;for(let K=1;K<=l;K++)g.push(0,S*U,0),x.push(0,U,0),y.push(.5,.5),b++;const V=b;for(let K=0;K<=l;K++){const ht=K/l*m+d,ft=Math.cos(ht),B=Math.sin(ht);F.x=w*B,F.y=S*U,F.z=w*ft,g.push(F.x,F.y,F.z),x.push(0,U,0),I.x=ft*.5+.5,I.y=B*.5*U+.5,y.push(I.x,I.y),b++}for(let K=0;K<l;K++){const ct=O+K,ht=V+K;D===!0?_.push(ht,ht+1,ct):_.push(ht+1,ht,ct),j+=3}p.addGroup(v,j,D===!0?1:2),v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hp extends fu{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,s,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new hp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dp extends Nn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),p(s),_(),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(c.slice(),3)),this.setAttribute("uv",new _n(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const N=new W,D=new W,O=new W;for(let I=0;I<i.length;I+=3)y(i[I+0],N),y(i[I+1],D),y(i[I+2],O),m(N,D,O,L)}function m(L,N,D,O){const I=O+1,F=[];for(let j=0;j<=I;j++){F[j]=[];const w=L.clone().lerp(D,j/I),U=N.clone().lerp(D,j/I),V=I-j;for(let K=0;K<=V;K++)K===0&&j===I?F[j][K]=w:F[j][K]=w.clone().lerp(U,K/V)}for(let j=0;j<I;j++)for(let w=0;w<2*(I-j)-1;w++){const U=Math.floor(w/2);w%2===0?(x(F[j][U+1]),x(F[j+1][U]),x(F[j][U])):(x(F[j][U+1]),x(F[j+1][U+1]),x(F[j+1][U]))}}function p(L){const N=new W;for(let D=0;D<c.length;D+=3)N.x=c[D+0],N.y=c[D+1],N.z=c[D+2],N.normalize().multiplyScalar(L),c[D+0]=N.x,c[D+1]=N.y,c[D+2]=N.z}function _(){const L=new W;for(let N=0;N<c.length;N+=3){L.x=c[N+0],L.y=c[N+1],L.z=c[N+2];const D=S(L)/2/Math.PI+.5,O=v(L)/Math.PI+.5;f.push(D,1-O)}b(),g()}function g(){for(let L=0;L<f.length;L+=6){const N=f[L+0],D=f[L+2],O=f[L+4],I=Math.max(N,D,O),F=Math.min(N,D,O);I>.9&&F<.1&&(N<.2&&(f[L+0]+=1),D<.2&&(f[L+2]+=1),O<.2&&(f[L+4]+=1))}}function x(L){c.push(L.x,L.y,L.z)}function y(L,N){const D=L*3;N.x=t[D+0],N.y=t[D+1],N.z=t[D+2]}function b(){const L=new W,N=new W,D=new W,O=new W,I=new ve,F=new ve,j=new ve;for(let w=0,U=0;w<c.length;w+=9,U+=6){L.set(c[w+0],c[w+1],c[w+2]),N.set(c[w+3],c[w+4],c[w+5]),D.set(c[w+6],c[w+7],c[w+8]),I.set(f[U+0],f[U+1]),F.set(f[U+2],f[U+3]),j.set(f[U+4],f[U+5]),O.copy(L).add(N).add(D).divideScalar(3);const V=S(O);E(I,U+0,L,V),E(F,U+2,N,V),E(j,U+4,D,V)}}function E(L,N,D,O){O<0&&L.x===1&&(f[N]=L.x-1),D.x===0&&D.z===0&&(f[N]=O/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dp(t.vertices,t.indices,t.radius,t.details)}}const Vc=new W,kc=new W,Zh=new W,jc=new Ui;class eE extends Nn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(tl*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),x={},y=[];for(let b=0;b<m;b+=3){f?(p[0]=f.getX(b),p[1]=f.getX(b+1),p[2]=f.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:E,b:S,c:v}=jc;if(E.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),jc.getNormal(Zh),g[0]=`${Math.round(E.x*l)},${Math.round(E.y*l)},${Math.round(E.z*l)}`,g[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,g[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let L=0;L<3;L++){const N=(L+1)%3,D=g[L],O=g[N],I=jc[_[L]],F=jc[_[N]],j=`${D}_${O}`,w=`${O}_${D}`;w in x&&x[w]?(Zh.dot(x[w].normal)<=c&&(y.push(I.x,I.y,I.z),y.push(F.x,F.y,F.z)),x[w]=null):j in x||(x[j]={index0:p[L],index1:p[N],normal:Zh.clone()})}}for(const b in x)if(x[b]){const{index0:E,index1:S}=x[b];Vc.fromBufferAttribute(d,E),kc.fromBufferAttribute(d,S),y.push(Vc.x,Vc.y,Vc.z),y.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new _n(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class pp extends dp{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new pp(t.radius,t.detail)}}class dl extends Nn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,y=[],b=[],E=[],S=[];for(let v=0;v<_;v++){const L=v*x-f;for(let N=0;N<p;N++){const D=N*g-c;b.push(D,-L,0),E.push(0,0,1),S.push(N/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const N=L+p*v,D=L+p*(v+1),O=L+1+p*(v+1),I=L+1+p*v;y.push(N,D,I),y.push(D,O,I)}this.setIndex(y),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(E,3)),this.setAttribute("uv",new _n(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.widthSegments,t.heightSegments)}}class mp extends Nn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],g=new W,x=new W,y=[],b=[],E=[],S=[];for(let v=0;v<=s;v++){const L=[],N=v/s;let D=0;v===0&&f===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let O=0;O<=i;O++){const I=O/i;g.x=-t*Math.cos(l+I*c)*Math.sin(f+N*d),g.y=t*Math.cos(f+N*d),g.z=t*Math.sin(l+I*c)*Math.sin(f+N*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),E.push(x.x,x.y,x.z),S.push(I+D,1-N),L.push(p++)}_.push(L)}for(let v=0;v<s;v++)for(let L=0;L<i;L++){const N=_[v][L+1],D=_[v][L],O=_[v+1][L],I=_[v+1][L+1];(v!==0||f>0)&&y.push(N,D,I),(v!==s-1||m<Math.PI)&&y.push(D,O,I)}this.setIndex(y),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(E,3)),this.setAttribute("uv",new _n(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cu extends Nn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],m=[],p=[],_=new W,g=new W,x=new W;for(let y=0;y<=s;y++)for(let b=0;b<=l;b++){const E=b/l*c,S=y/s*Math.PI*2;g.x=(t+i*Math.cos(S))*Math.cos(E),g.y=(t+i*Math.cos(S))*Math.sin(E),g.z=i*Math.sin(S),d.push(g.x,g.y,g.z),_.x=t*Math.cos(E),_.y=t*Math.sin(E),x.subVectors(g,_).normalize(),m.push(x.x,x.y,x.z),p.push(b/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=l;b++){const E=(l+1)*y+b-1,S=(l+1)*(y-1)+b-1,v=(l+1)*(y-1)+b,L=(l+1)*y+b;f.push(E,S,L),f.push(S,v,L)}this.setIndex(f),this.setAttribute("position",new _n(d,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Xc extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cv,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nE extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iE extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class aE extends kr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class gp extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class sE extends gp{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Kh=new mn,z0=new W,I0=new W;class kv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=ta,this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;z0.setFromMatrixPosition(t.matrixWorld),i.position.copy(z0),I0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(I0),i.updateMatrixWorld(),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const B0=new mn,Qo=new W,Qh=new W;class rE extends kv{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ln(2,1,1,1),new ln(0,1,1,1),new ln(3,1,1,1),new ln(1,1,1,1),new ln(3,0,1,1),new ln(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Qo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Qo),Qh.copy(s.position),Qh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Qh),s.updateMatrixWorld(),l.makeTranslation(-Qo.x,-Qo.y,-Qo.z),B0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(B0,s.coordinateSystem,s.reversedDepth)}}class oE extends gp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new rE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jv extends Iv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lE extends kv{constructor(){super(new jv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cE extends gp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new lE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uE extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const F0=new mn;class fE{constructor(t,i,s=0,l=1/0){this.ray=new hl(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new cp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return F0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(F0),this}intersectObject(t,i=!0,s=[]){return Qd(t,this,s,i),s.sort(H0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Qd(t[l],this,s,i);return s.sort(H0),s}}function H0(r,t){return r.distance-t.distance}function Qd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Qd(c[f],t,i,!0)}}class G0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hE extends Fv{constructor(t=10,i=10,s=4473924,l=8947848){s=new ze(s),l=new ze(l);const c=i/2,f=t/i,d=t/2,m=[],p=[];for(let x=0,y=0,b=-d;x<=i;x++,b+=f){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const E=x===c?s:l;E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3}const _=new Nn;_.setAttribute("position",new _n(m,3)),_.setAttribute("color",new _n(p,3));const g=new kr({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class dE extends Hs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function V0(r,t,i,s){const l=pE(s);switch(i){case Tv:return r*t;case Rv:return r*t/l.components*l.byteLength;case sp:return r*t/l.components*l.byteLength;case wv:return r*t*2/l.components*l.byteLength;case rp:return r*t*2/l.components*l.byteLength;case Av:return r*t*3/l.components*l.byteLength;case Gi:return r*t*4/l.components*l.byteLength;case op:return r*t*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:case bd:return Math.max(r,16)*Math.max(t,8)/4;case Sd:case Ed:return Math.max(r,8)*Math.max(t,8)/2;case Td:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pE(r){switch(r){case ta:case Sv:return{byteLength:1,components:1};case nl:case Mv:case ll:return{byteLength:2,components:1};case ip:case ap:return{byteLength:2,components:4};case zs:case np:case Aa:return{byteLength:4,components:1};case Ev:case bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function mE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],E=g[y];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,g[x]=E)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const E=g[y];r.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ob=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ub=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$b=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:gE,alphahash_pars_fragment:_E,alphamap_fragment:vE,alphamap_pars_fragment:xE,alphatest_fragment:yE,alphatest_pars_fragment:SE,aomap_fragment:ME,aomap_pars_fragment:EE,batching_pars_vertex:bE,batching_vertex:TE,begin_vertex:AE,beginnormal_vertex:RE,bsdfs:wE,iridescence_fragment:CE,bumpmap_pars_fragment:DE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:NE,clipping_planes_vertex:OE,color_fragment:PE,color_pars_fragment:zE,color_pars_vertex:IE,color_vertex:BE,common:FE,cube_uv_reflection_fragment:HE,defaultnormal_vertex:GE,displacementmap_pars_vertex:VE,displacementmap_vertex:kE,emissivemap_fragment:jE,emissivemap_pars_fragment:XE,colorspace_fragment:WE,colorspace_pars_fragment:qE,envmap_fragment:YE,envmap_common_pars_fragment:ZE,envmap_pars_fragment:KE,envmap_pars_vertex:QE,envmap_physical_pars_fragment:lb,envmap_vertex:JE,fog_vertex:$E,fog_pars_vertex:tb,fog_fragment:eb,fog_pars_fragment:nb,gradientmap_pars_fragment:ib,lightmap_pars_fragment:ab,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ob,lights_toon_fragment:cb,lights_toon_pars_fragment:ub,lights_phong_fragment:fb,lights_phong_pars_fragment:hb,lights_physical_fragment:db,lights_physical_pars_fragment:pb,lights_fragment_begin:mb,lights_fragment_maps:gb,lights_fragment_end:_b,logdepthbuf_fragment:vb,logdepthbuf_pars_fragment:xb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Sb,map_fragment:Mb,map_pars_fragment:Eb,map_particle_fragment:bb,map_particle_pars_fragment:Tb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:wb,morphcolor_vertex:Cb,morphnormal_vertex:Db,morphtarget_pars_vertex:Ub,morphtarget_vertex:Lb,normal_fragment_begin:Nb,normal_fragment_maps:Ob,normal_pars_fragment:Pb,normal_pars_vertex:zb,normal_vertex:Ib,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:kb,packing:jb,premultiplied_alpha_fragment:Xb,project_vertex:Wb,dithering_fragment:qb,dithering_pars_fragment:Yb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Kb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:Jb,shadowmap_vertex:$b,shadowmask_pars_fragment:t1,skinbase_vertex:e1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:a1,specularmap_fragment:s1,specularmap_pars_fragment:r1,tonemapping_fragment:o1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:u1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:d1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:_1,backgroundCube_frag:v1,cube_vert:x1,cube_frag:y1,depth_vert:S1,depth_frag:M1,distanceRGBA_vert:E1,distanceRGBA_frag:b1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:R1,linedashed_frag:w1,meshbasic_vert:C1,meshbasic_frag:D1,meshlambert_vert:U1,meshlambert_frag:L1,meshmatcap_vert:N1,meshmatcap_frag:O1,meshnormal_vert:P1,meshnormal_frag:z1,meshphong_vert:I1,meshphong_frag:B1,meshphysical_vert:F1,meshphysical_frag:H1,meshtoon_vert:G1,meshtoon_frag:V1,points_vert:k1,points_frag:j1,shadow_vert:X1,shadow_frag:W1,sprite_vert:q1,sprite_frag:Y1},Gt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Qi={basic:{uniforms:ni([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ni([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ni([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ni([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ni([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ni([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ni([Gt.points,Gt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ni([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ni([Gt.common,Gt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ni([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:ni([Gt.sprite,Gt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ni([Gt.common,Gt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ni([Gt.lights,Gt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Qi.physical={uniforms:ni([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Wc={r:0,b:0,g:0},Cs=new ea,Z1=new mn;function K1(r,t,i,s,l,c,f){const d=new ze(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function b(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function E(N){let D=!1;const O=b(N);O===null?v(d,m):O&&O.isColor&&(v(O,1),D=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(N,D){const O=b(D);O&&(O.isCubeTexture||O.mapping===uu)?(_===void 0&&(_=new Tn(new Hi(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:Yr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cs.copy(D.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(Cs)),_.material.toneMapped=ke.getTransfer(O.colorSpace)!==rn,(g!==O||x!==O.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=O,x=O.version,y=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Tn(new dl(2,2),new ls({name:"BackgroundMaterial",uniforms:Yr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=ke.getTransfer(O.colorSpace)!==rn,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||x!==O.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=O,x=O.version,y=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,D){N.getRGB(Wc,zv(r)),s.buffers.color.setClear(Wc.r,Wc.g,Wc.b,D,f)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:E,addToRenderList:S,dispose:L}}function Q1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(U,V,K,ct,ht){let ft=!1;const B=g(ct,K,V);c!==B&&(c=B,p(c.object)),ft=y(U,ct,K,ht),ft&&b(U,ct,K,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(ft||f)&&(f=!1,D(U,V,K,ct),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function _(U){return r.deleteVertexArray(U)}function g(U,V,K){const ct=K.wireframe===!0;let ht=s[U.id];ht===void 0&&(ht={},s[U.id]=ht);let ft=ht[V.id];ft===void 0&&(ft={},ht[V.id]=ft);let B=ft[ct];return B===void 0&&(B=x(m()),ft[ct]=B),B}function x(U){const V=[],K=[],ct=[];for(let ht=0;ht<i;ht++)V[ht]=0,K[ht]=0,ct[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:ct,object:U,attributes:{},index:null}}function y(U,V,K,ct){const ht=c.attributes,ft=V.attributes;let B=0;const at=K.getAttributes();for(const Z in at)if(at[Z].location>=0){const P=ht[Z];let et=ft[Z];if(et===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),P===void 0||P.attribute!==et||et&&P.data!==et.data)return!0;B++}return c.attributesNum!==B||c.index!==ct}function b(U,V,K,ct){const ht={},ft=V.attributes;let B=0;const at=K.getAttributes();for(const Z in at)if(at[Z].location>=0){let P=ft[Z];P===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(P=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(P=U.instanceColor));const et={};et.attribute=P,P&&P.data&&(et.data=P.data),ht[Z]=et,B++}c.attributes=ht,c.attributesNum=B,c.index=ct}function E(){const U=c.newAttributes;for(let V=0,K=U.length;V<K;V++)U[V]=0}function S(U){v(U,0)}function v(U,V){const K=c.newAttributes,ct=c.enabledAttributes,ht=c.attributeDivisors;K[U]=1,ct[U]===0&&(r.enableVertexAttribArray(U),ct[U]=1),ht[U]!==V&&(r.vertexAttribDivisor(U,V),ht[U]=V)}function L(){const U=c.newAttributes,V=c.enabledAttributes;for(let K=0,ct=V.length;K<ct;K++)V[K]!==U[K]&&(r.disableVertexAttribArray(K),V[K]=0)}function N(U,V,K,ct,ht,ft,B){B===!0?r.vertexAttribIPointer(U,V,K,ht,ft):r.vertexAttribPointer(U,V,K,ct,ht,ft)}function D(U,V,K,ct){E();const ht=ct.attributes,ft=K.getAttributes(),B=V.defaultAttributeValues;for(const at in ft){const Z=ft[at];if(Z.location>=0){let Et=ht[at];if(Et===void 0&&(at==="instanceMatrix"&&U.instanceMatrix&&(Et=U.instanceMatrix),at==="instanceColor"&&U.instanceColor&&(Et=U.instanceColor)),Et!==void 0){const P=Et.normalized,et=Et.itemSize,Mt=t.get(Et);if(Mt===void 0)continue;const yt=Mt.buffer,zt=Mt.type,Wt=Mt.bytesPerElement,it=zt===r.INT||zt===r.UNSIGNED_INT||Et.gpuType===np;if(Et.isInterleavedBufferAttribute){const _t=Et.data,Ut=_t.stride,ne=Et.offset;if(_t.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Z.locationSize;Vt++)v(Z.location+Vt,_t.meshPerAttribute);U.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Vt=0;Vt<Z.locationSize;Vt++)S(Z.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Vt=0;Vt<Z.locationSize;Vt++)N(Z.location+Vt,et/Z.locationSize,zt,P,Ut*Wt,(ne+et/Z.locationSize*Vt)*Wt,it)}else{if(Et.isInstancedBufferAttribute){for(let _t=0;_t<Z.locationSize;_t++)v(Z.location+_t,Et.meshPerAttribute);U.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let _t=0;_t<Z.locationSize;_t++)S(Z.location+_t);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let _t=0;_t<Z.locationSize;_t++)N(Z.location+_t,et/Z.locationSize,zt,P,et*Wt,et/Z.locationSize*_t*Wt,it)}}else if(B!==void 0){const P=B[at];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(Z.location,P);break;case 3:r.vertexAttrib3fv(Z.location,P);break;case 4:r.vertexAttrib4fv(Z.location,P);break;default:r.vertexAttrib1fv(Z.location,P)}}}}L()}function O(){j();for(const U in s){const V=s[U];for(const K in V){const ct=V[K];for(const ht in ct)_(ct[ht].object),delete ct[ht];delete V[K]}delete s[U]}}function I(U){if(s[U.id]===void 0)return;const V=s[U.id];for(const K in V){const ct=V[K];for(const ht in ct)_(ct[ht].object),delete ct[ht];delete V[K]}delete s[U.id]}function F(U){for(const V in s){const K=s[V];if(K[U.id]===void 0)continue;const ct=K[U.id];for(const ht in ct)_(ct[ht].object),delete ct[ht];delete K[U.id]}}function j(){w(),f=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function J1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,s,1)}function m(p,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let b=0;for(let E=0;E<g;E++)b+=_[E]*x[E];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function $1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Gi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ta&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Aa&&!j)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=b>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:O,maxSamples:I}}function tT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ns,d=new Te,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,v=r.get(g);if(!l||b===null||b.length===0||c&&!S)c?_(null):p();else{const L=c?0:s,N=L*4;let D=v.clippingState||null;m.value=D,D=_(b,x,N,y);for(let O=0;O!==N;++O)D[O]=i[O];v.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,y,b){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=m.value,b!==!0||S===null){const v=y+E*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,D=y;N!==E;++N,D+=4)f.copy(g[N]).applyMatrix4(L,d),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}function eT(r){let t=new WeakMap;function i(f,d){return d===_d?f.mapping=Xr:d===vd&&(f.mapping=Wr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===_d||d===vd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new qM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Fr=4,k0=[.125,.215,.35,.446,.526,.582],Ns=20,Jh=new jv,j0=new ze;let $h=null,td=0,ed=0,nd=!1;const Us=(1+Math.sqrt(5))/2,Nr=1/Us,X0=[new W(-Us,Nr,0),new W(Us,Nr,0),new W(-Nr,0,Us),new W(Nr,0,Us),new W(0,Us,-Nr),new W(0,Us,Nr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],nT=new W;class W0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=nT}=c;$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($h,td,ed),this._renderer.xr.enabled=nd,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Xr||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:ll,format:Gi,colorSpace:qr,depthBuffer:!1},l=q0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iT(c)),this._blurMaterial=aT(c,t,i)}return l}_compileMaterial(t){const i=new Tn(this._lodPlanes[0],t);this._renderer.compile(i,Jh)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(j0),g.toneMapping=rs,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const E=new Zi({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),S=new Tn(new Hi,E);let v=!1;const L=t.background;L?L.isColor&&(E.color.copy(L),t.background=null,v=!0):(E.color.copy(j0),v=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const O=this._cubeSize;qc(l,D*O,N>2?O:0,O,O),g.setRenderTarget(l),v&&g.render(S,m),g.render(t,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Xr||t.mapping===Wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Tn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;qc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Jh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=X0[(l-c-1)%X0.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Tn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),E=c/b,S=isFinite(c)?1+Math.floor(_*E):Ns;S>Ns&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ns}`);const v=[];let L=0;for(let F=0;F<Ns;++F){const j=F/E,w=Math.exp(-j*j/2);v.push(w),F===0?L+=w:F<S&&(L+=2*w)}for(let F=0;F<v.length;F++)v[F]=v[F]/L;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-s;const D=this._sizeLods[l],O=3*D*(l>N-Fr?l-N+Fr:0),I=4*(this._cubeSize-D);qc(i,O,I,3*D,2*D),m.setRenderTarget(i),m.render(g,Jh)}}function iT(r){const t=[],i=[],s=[];let l=r;const c=r-Fr+1+k0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Fr?m=k0[f-r+Fr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,E=3,S=2,v=1,L=new Float32Array(E*b*y),N=new Float32Array(S*b*y),D=new Float32Array(v*b*y);for(let I=0;I<y;I++){const F=I%3*2/3-1,j=I>2?0:-1,w=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];L.set(w,E*b*I),N.set(x,S*b*I);const U=[I,I,I,I,I,I];D.set(U,v*b*I)}const O=new Nn;O.setAttribute("position",new ki(L,E)),O.setAttribute("uv",new ki(N,S)),O.setAttribute("faceIndex",new ki(D,v)),t.push(O),l>Fr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function q0(r,t,i){const s=new Bs(r,t,i);return s.texture.mapping=uu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function aT(r,t,i){const s=new Float32Array(Ns),l=new W(0,1,0);return new ls({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Y0(){return new ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Z0(){return new ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function _p(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===_d||m===vd,_=m===Xr||m===Wr;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new W0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new W0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function rT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&rl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function oT(r,t,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let N=0,D=L.length;N<D;N+=3){const O=L[N+0],I=L[N+1],F=L[N+2];x.push(O,I,I,F,F,O)}}else if(b!==void 0){const L=b.array;E=b.version;for(let N=0,D=L.length/3-1;N<D;N+=3){const O=N+0,I=N+1,F=N+2;x.push(O,I,I,F,F,O)}}else return;const S=new(Uv(x)?Pv:Ov)(x,1);S.version=E;const v=c.get(g);v&&t.remove(v),c.set(g,S)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function lT(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,x*f,b),i.update(y,s,b))}function _(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,b);let S=0;for(let v=0;v<b;v++)S+=y[v];i.update(S,s,1)}function g(x,y,b,E){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],E[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,E,0,b);let v=0;for(let L=0;L<b;L++)v+=y[L]*E[L];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function cT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function uT(r,t,i){const s=new WeakMap,l=new ln;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let w=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",w)};x!==void 0&&x.texture.dispose();const y=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let N=0;y===!0&&(N=1),b===!0&&(N=2),E===!0&&(N=3);let D=d.attributes.position.count*N,O=1;D>t.maxTextureSize&&(O=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*O*4*g),F=new Lv(I,D,O,g);F.type=Aa,F.needsUpdate=!0;const j=N*4;for(let U=0;U<g;U++){const V=S[U],K=v[U],ct=L[U],ht=D*O*4*U;for(let ft=0;ft<V.count;ft++){const B=ft*j;y===!0&&(l.fromBufferAttribute(V,ft),I[ht+B+0]=l.x,I[ht+B+1]=l.y,I[ht+B+2]=l.z,I[ht+B+3]=0),b===!0&&(l.fromBufferAttribute(K,ft),I[ht+B+4]=l.x,I[ht+B+5]=l.y,I[ht+B+6]=l.z,I[ht+B+7]=0),E===!0&&(l.fromBufferAttribute(ct,ft),I[ht+B+8]=l.x,I[ht+B+9]=l.y,I[ht+B+10]=l.z,I[ht+B+11]=ct.itemSize===4?l.w:1)}}x={count:g,texture:F,size:new ve(D,O)},s.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let y=0;for(let E=0;E<p.length;E++)y+=p[E];const b=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function fT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Wv=new ii,K0=new Gv(1,1),qv=new Lv,Yv=new DM,Zv=new Bv,Q0=[],J0=[],$0=new Float32Array(16),tv=new Float32Array(9),ev=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Q0[l];if(c===void 0&&(c=new Float32Array(l),Q0[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function Pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function zn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=J0[t];i===void 0&&(i=new Int32Array(t),J0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function hT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2fv(this.addr,t),zn(i,t)}}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pn(i,t))return;r.uniform3fv(this.addr,t),zn(i,t)}}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4fv(this.addr,t),zn(i,t)}}function gT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),zn(i,t)}else{if(Pn(i,s))return;ev.set(s),r.uniformMatrix2fv(this.addr,!1,ev),zn(i,s)}}function _T(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),zn(i,t)}else{if(Pn(i,s))return;tv.set(s),r.uniformMatrix3fv(this.addr,!1,tv),zn(i,s)}}function vT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),zn(i,t)}else{if(Pn(i,s))return;$0.set(s),r.uniformMatrix4fv(this.addr,!1,$0),zn(i,s)}}function xT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function yT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2iv(this.addr,t),zn(i,t)}}function ST(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;r.uniform3iv(this.addr,t),zn(i,t)}}function MT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4iv(this.addr,t),zn(i,t)}}function ET(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function bT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2uiv(this.addr,t),zn(i,t)}}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;r.uniform3uiv(this.addr,t),zn(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4uiv(this.addr,t),zn(i,t)}}function RT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(K0.compareFunction=Dv,c=K0):c=Wv,i.setTexture2D(t||c,l)}function wT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Yv,l)}function CT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Zv,l)}function DT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||qv,l)}function UT(r){switch(r){case 5126:return hT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return vT;case 5124:case 35670:return xT;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return bT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return DT}}function LT(r,t){r.uniform1fv(this.addr,t)}function NT(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function OT(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function PT(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function zT(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function IT(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function BT(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function FT(r,t){r.uniform1iv(this.addr,t)}function HT(r,t){r.uniform2iv(this.addr,t)}function GT(r,t){r.uniform3iv(this.addr,t)}function VT(r,t){r.uniform4iv(this.addr,t)}function kT(r,t){r.uniform1uiv(this.addr,t)}function jT(r,t){r.uniform2uiv(this.addr,t)}function XT(r,t){r.uniform3uiv(this.addr,t)}function WT(r,t){r.uniform4uiv(this.addr,t)}function qT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Wv,c[f])}function YT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Yv,c[f])}function ZT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Zv,c[f])}function KT(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||qv,c[f])}function QT(r){switch(r){case 5126:return LT;case 35664:return NT;case 35665:return OT;case 35666:return PT;case 35674:return zT;case 35675:return IT;case 35676:return BT;case 5124:case 35670:return FT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return jT;case 36295:return XT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return KT}}class JT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UT(i.type)}}class $T{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=QT(i.type)}}class tA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const id=/(\w+)(\])?(\[|\.)?/g;function nv(r,t){r.seq.push(t),r.map[t.id]=t}function eA(r,t,i){const s=r.name,l=s.length;for(id.lastIndex=0;;){const c=id.exec(s),f=id.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){nv(i,p===void 0?new JT(d,r,t):new $T(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new tA(d),nv(i,g)),i=g}}}class iu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);eA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function iv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const nA=37297;let iA=0;function aA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const av=new Te;function sA(r){ke._getMatrix(av,ke.workingColorSpace,r);const t=`mat3( ${av.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+aA(r.getShaderSource(t),d)}else return c}function rA(r,t){const i=sA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function oA(r,t){let i;switch(t){case nM:i="Linear";break;case iM:i="Reinhard";break;case aM:i="Cineon";break;case sM:i="ACESFilmic";break;case oM:i="AgX";break;case lM:i="Neutral";break;case rM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new W;function lA(){ke.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function uA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function fA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function $o(r){return r!==""}function rv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ov(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(r){return r.replace(hA,pA)}const dA=new Map;function pA(r,t){let i=Ae[t];if(i===void 0){const s=dA.get(t);if(s!==void 0)i=Ae[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Jd(i)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(r){return r.replace(mA,gA)}function gA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function cv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _A(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===PS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ea&&(t="SHADOWMAP_TYPE_VSM"),t}function vA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case Wr:t="ENVMAP_TYPE_CUBE";break;case uu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wr:t="ENVMAP_MODE_REFRACTION";break}return t}function yA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xv:t="ENVMAP_BLENDING_MULTIPLY";break;case tM:t="ENVMAP_BLENDING_MIX";break;case eM:t="ENVMAP_BLENDING_ADD";break}return t}function SA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function MA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=_A(i),p=vA(i),_=xA(i),g=yA(i),x=SA(i),y=cA(i),b=uA(c),E=l.createProgram();let S,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),v.length>0&&(v+=`
`)):(S=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),v=[cv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==rs?"#define TONE_MAPPING":"",i.toneMapping!==rs?Ae.tonemapping_pars_fragment:"",i.toneMapping!==rs?oA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,rA("linearToOutputTexel",i.outputColorSpace),lA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=Jd(f),f=rv(f,i),f=ov(f,i),d=Jd(d),d=rv(d,i),d=ov(d,i),f=lv(f),d=lv(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===h0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===h0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=L+S+f,D=L+v+d,O=iv(l,l.VERTEX_SHADER,N),I=iv(l,l.FRAGMENT_SHADER,D);l.attachShader(E,O),l.attachShader(E,I),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function F(V){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(E)||"",ct=l.getShaderInfoLog(O)||"",ht=l.getShaderInfoLog(I)||"",ft=K.trim(),B=ct.trim(),at=ht.trim();let Z=!0,Et=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,E,O,I);else{const P=sv(l,O,"vertex"),et=sv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+P+`
`+et)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||at==="")&&(Et=!1);Et&&(V.diagnostics={runnable:Z,programLog:ft,vertexShader:{log:B,prefix:S},fragmentShader:{log:at,prefix:v}})}l.deleteShader(O),l.deleteShader(I),j=new iu(l,E),w=fA(l,E)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(E,nA)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iA++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=I,this}let EA=0;class bA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new TA(t),i.set(t,s)),s}}class TA{constructor(t){this.id=EA++,this.code=t,this.usedTimes=0}}function AA(r,t,i,s,l,c,f){const d=new cp,m=new bA,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,U,V,K,ct){const ht=K.fog,ft=ct.geometry,B=w.isMeshStandardMaterial?K.environment:null,at=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),Z=at&&at.mapping===uu?at.image.height:null,Et=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const P=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,et=P!==void 0?P.length:0;let Mt=0;ft.morphAttributes.position!==void 0&&(Mt=1),ft.morphAttributes.normal!==void 0&&(Mt=2),ft.morphAttributes.color!==void 0&&(Mt=3);let yt,zt,Wt,it;if(Et){const Q=Qi[Et];yt=Q.vertexShader,zt=Q.fragmentShader}else yt=w.vertexShader,zt=w.fragmentShader,m.update(w),Wt=m.getVertexShaderID(w),it=m.getFragmentShaderID(w);const _t=r.getRenderTarget(),Ut=r.state.buffers.depth.getReversed(),ne=ct.isInstancedMesh===!0,Vt=ct.isBatchedMesh===!0,ae=!!w.map,Ke=!!w.matcap,G=!!at,Ie=!!w.aoMap,he=!!w.lightMap,se=!!w.bumpMap,It=!!w.normalMap,we=!!w.displacementMap,qt=!!w.emissiveMap,ge=!!w.metalnessMap,tn=!!w.roughnessMap,en=w.anisotropy>0,z=w.clearcoat>0,A=w.dispersion>0,$=w.iridescence>0,ot=w.sheen>0,gt=w.transmission>0,dt=en&&!!w.anisotropyMap,Nt=z&&!!w.clearcoatMap,Ct=z&&!!w.clearcoatNormalMap,kt=z&&!!w.clearcoatRoughnessMap,Xt=$&&!!w.iridescenceMap,At=$&&!!w.iridescenceThicknessMap,Bt=ot&&!!w.sheenColorMap,$t=ot&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Dt=!!w.specularColorMap,de=!!w.specularIntensityMap,Y=gt&&!!w.transmissionMap,wt=gt&&!!w.thicknessMap,Lt=!!w.gradientMap,jt=!!w.alphaMap,Rt=w.alphaTest>0,vt=!!w.alphaHash,Zt=!!w.extensions;let le=rs;w.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(le=r.toneMapping);const Ce={shaderID:Et,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:zt,defines:w.defines,customVertexShaderID:Wt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&ct._colorsTexture!==null,instancing:ne,instancingColor:ne&&ct.instanceColor!==null,instancingMorph:ne&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:qr,alphaToCoverage:!!w.alphaToCoverage,map:ae,matcap:Ke,envMap:G,envMapMode:G&&at.mapping,envMapCubeUVHeight:Z,aoMap:Ie,lightMap:he,bumpMap:se,normalMap:It,displacementMap:x&&we,emissiveMap:qt,normalMapObjectSpace:It&&w.normalMapType===hM,normalMapTangentSpace:It&&w.normalMapType===Cv,metalnessMap:ge,roughnessMap:tn,anisotropy:en,anisotropyMap:dt,clearcoat:z,clearcoatMap:Nt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:A,iridescence:$,iridescenceMap:Xt,iridescenceThicknessMap:At,sheen:ot,sheenColorMap:Bt,sheenRoughnessMap:$t,specularMap:Kt,specularColorMap:Dt,specularIntensityMap:de,transmission:gt,transmissionMap:Y,thicknessMap:wt,gradientMap:Lt,opaque:w.transparent===!1&&w.blending===Gr&&w.alphaToCoverage===!1,alphaMap:jt,alphaTest:Rt,alphaHash:vt,combine:w.combine,mapUv:ae&&E(w.map.channel),aoMapUv:Ie&&E(w.aoMap.channel),lightMapUv:he&&E(w.lightMap.channel),bumpMapUv:se&&E(w.bumpMap.channel),normalMapUv:It&&E(w.normalMap.channel),displacementMapUv:we&&E(w.displacementMap.channel),emissiveMapUv:qt&&E(w.emissiveMap.channel),metalnessMapUv:ge&&E(w.metalnessMap.channel),roughnessMapUv:tn&&E(w.roughnessMap.channel),anisotropyMapUv:dt&&E(w.anisotropyMap.channel),clearcoatMapUv:Nt&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:$t&&E(w.sheenRoughnessMap.channel),specularMapUv:Kt&&E(w.specularMap.channel),specularColorMapUv:Dt&&E(w.specularColorMap.channel),specularIntensityMapUv:de&&E(w.specularIntensityMap.channel),transmissionMapUv:Y&&E(w.transmissionMap.channel),thicknessMapUv:wt&&E(w.thicknessMap.channel),alphaMapUv:jt&&E(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(It||en),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ft.attributes.uv&&(ae||jt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ut,skinning:ct.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Mt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:ae&&w.map.isVideoTexture===!0&&ke.getTransfer(w.map.colorSpace)===rn,decodeVideoTextureEmissive:qt&&w.emissiveMap.isVideoTexture===!0&&ke.getTransfer(w.emissiveMap.colorSpace)===rn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ta,flipSided:w.side===fi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=p.has(1),Ce.vertexUv2s=p.has(2),Ce.vertexUv3s=p.has(3),p.clear(),Ce}function v(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)U.push(V),U.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(L(U,w),N(U,w),U.push(r.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function L(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function N(w,U){d.disableAll(),U.supportsVertexTextures&&d.enable(0),U.instancing&&d.enable(1),U.instancingColor&&d.enable(2),U.instancingMorph&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),U.dispersion&&d.enable(20),U.batchingColor&&d.enable(21),U.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const U=b[w.type];let V;if(U){const K=Qi[U];V=kM.clone(K.uniforms)}else V=w.uniforms;return V}function O(w,U){let V;for(let K=0,ct=_.length;K<ct;K++){const ht=_[K];if(ht.cacheKey===U){V=ht,++V.usedTimes;break}}return V===void 0&&(V=new MA(r,U,w,c),_.push(V)),V}function I(w){if(--w.usedTimes===0){const U=_.indexOf(w);_[U]=_[_.length-1],_.pop(),w.destroy()}}function F(w){m.remove(w)}function j(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:D,acquireProgram:O,releaseProgram:I,releaseShaderCache:F,programs:_,dispose:j}}function RA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function wA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function uv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,x,y,b,E,S){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:E,group:S},r[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=E,v.group=S),t++,v}function d(g,x,y,b,E,S){const v=f(g,x,y,b,E,S);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,x,y,b,E,S){const v=f(g,x,y,b,E,S);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||wA),s.length>1&&s.sort(x||uv),l.length>1&&l.sort(x||uv)}function _(){for(let g=t,x=r.length;g<x;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function CA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new fv,r.set(s,[f])):l>=c.length?(f=new fv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function DA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new ze};break;case"SpotLight":i={position:new W,direction:new W,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=i,i}}}function UA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let LA=0;function NA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function OA(r){const t=new DA,i=UA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,c=new mn,f=new mn;function d(p){let _=0,g=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,b=0,E=0,S=0,v=0,L=0,N=0,D=0,O=0,I=0,F=0;p.sort(NA);for(let w=0,U=p.length;w<U;w++){const V=p[w],K=V.color,ct=V.intensity,ht=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=K.r*ct,g+=K.g*ct,x+=K.b*ct;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],ct);F++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const at=V.shadow,Z=i.get(V);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=ft,s.directionalShadowMatrix[y]=V.shadow.matrix,L++}s.directional[y]=B,y++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(K).multiplyScalar(ct),B.distance=ht,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[E]=B;const at=V.shadow;if(V.map&&(s.spotLightMap[O]=V.map,O++,at.updateMatrices(V),V.castShadow&&I++),s.spotLightMatrix[E]=at.matrix,V.castShadow){const Z=i.get(V);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,s.spotShadow[E]=Z,s.spotShadowMap[E]=ft,D++}E++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(K).multiplyScalar(ct),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=B,S++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const at=V.shadow,Z=i.get(V);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,Z.shadowCameraNear=at.camera.near,Z.shadowCameraFar=at.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=V.shadow.matrix,N++}s.point[b]=B,b++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(ct),B.groundColor.copy(V.groundColor).multiplyScalar(ct),s.hemi[v]=B,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Gt.LTC_FLOAT_1,s.rectAreaLTC2=Gt.LTC_FLOAT_2):(s.rectAreaLTC1=Gt.LTC_HALF_1,s.rectAreaLTC2=Gt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const j=s.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==E||j.rectAreaLength!==S||j.hemiLength!==v||j.numDirectionalShadows!==L||j.numPointShadows!==N||j.numSpotShadows!==D||j.numSpotMaps!==O||j.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=E,s.rectArea.length=S,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+O-I,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=F,j.directionalLength=y,j.pointLength=b,j.spotLength=E,j.rectAreaLength=S,j.hemiLength=v,j.numDirectionalShadows=L,j.numPointShadows=N,j.numSpotShadows=D,j.numSpotMaps=O,j.numLightProbes=F,s.version=LA++)}function m(p,_){let g=0,x=0,y=0,b=0,E=0;const S=_.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const N=p[v];if(N.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),g++}else if(N.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(N.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(S),x++}else if(N.isHemisphereLight){const D=s.hemi[E];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(S),E++}}}return{setup:d,setupView:m,state:s}}function hv(r){const t=new OA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function PA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new hv(r),t.set(l,[d])):c>=f.length?(d=new hv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BA(r,t,i){let s=new fp;const l=new ve,c=new ve,f=new ln,d=new nE({depthPacking:fM}),m=new iE,p={},_=i.maxTextureSize,g={[os]:fi,[fi]:os,[Ta]:Ta},x=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:zA,fragmentShader:IA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Tn(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vv;let v=this.type;this.render=function(I,F,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const w=r.getRenderTarget(),U=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),K=r.state;K.setBlending(ss),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ct=v!==Ea&&this.type===Ea,ht=v===Ea&&this.type!==Ea;for(let ft=0,B=I.length;ft<B;ft++){const at=I[ft],Z=at.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Et=Z.getFrameExtents();if(l.multiply(Et),c.copy(Z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Et.x),l.x=c.x*Et.x,Z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Et.y),l.y=c.y*Et.y,Z.mapSize.y=c.y)),Z.map===null||ct===!0||ht===!0){const et=this.type!==Ea?{minFilter:Vi,magFilter:Vi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Bs(l.x,l.y,et),Z.map.texture.name=at.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const P=Z.getViewportCount();for(let et=0;et<P;et++){const Mt=Z.getViewport(et);f.set(c.x*Mt.x,c.y*Mt.y,c.x*Mt.z,c.y*Mt.w),K.viewport(f),Z.updateMatrices(at,et),s=Z.getFrustum(),D(F,j,Z.camera,at,this.type)}Z.isPointLightShadow!==!0&&this.type===Ea&&L(Z,j),Z.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(w,U,V)};function L(I,F){const j=t.update(E);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bs(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(F,null,j,x,E,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(F,null,j,y,E,null)}function N(I,F,j,w){let U=null;const V=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)U=V;else if(U=j.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=U.uuid,ct=F.uuid;let ht=p[K];ht===void 0&&(ht={},p[K]=ht);let ft=ht[ct];ft===void 0&&(ft=U.clone(),ht[ct]=ft,F.addEventListener("dispose",O)),U=ft}if(U.visible=F.visible,U.wireframe=F.wireframe,w===Ea?U.side=F.shadowSide!==null?F.shadowSide:F.side:U.side=F.shadowSide!==null?F.shadowSide:g[F.side],U.alphaMap=F.alphaMap,U.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,U.map=F.map,U.clipShadows=F.clipShadows,U.clippingPlanes=F.clippingPlanes,U.clipIntersection=F.clipIntersection,U.displacementMap=F.displacementMap,U.displacementScale=F.displacementScale,U.displacementBias=F.displacementBias,U.wireframeLinewidth=F.wireframeLinewidth,U.linewidth=F.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const K=r.properties.get(U);K.light=j}return U}function D(I,F,j,w,U){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&U===Ea)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const ct=t.update(I),ht=I.material;if(Array.isArray(ht)){const ft=ct.groups;for(let B=0,at=ft.length;B<at;B++){const Z=ft[B],Et=ht[Z.materialIndex];if(Et&&Et.visible){const P=N(I,Et,w,U);I.onBeforeShadow(r,I,F,j,ct,P,Z),r.renderBufferDirect(j,null,ct,P,I,Z),I.onAfterShadow(r,I,F,j,ct,P,Z)}}}else if(ht.visible){const ft=N(I,ht,w,U);I.onBeforeShadow(r,I,F,j,ct,ft,null),r.renderBufferDirect(j,null,ct,ft,I,null),I.onAfterShadow(r,I,F,j,ct,ft,null)}}const K=I.children;for(let ct=0,ht=K.length;ct<ht;ct++)D(K[ct],F,j,w,U)}function O(I){I.target.removeEventListener("dispose",O);for(const j in p){const w=p[j],U=I.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}const FA={[ud]:fd,[hd]:md,[dd]:gd,[jr]:pd,[fd]:ud,[md]:hd,[gd]:dd,[pd]:jr};function HA(r,t){function i(){let Y=!1;const wt=new ln;let Lt=null;const jt=new ln(0,0,0,0);return{setMask:function(Rt){Lt!==Rt&&!Y&&(r.colorMask(Rt,Rt,Rt,Rt),Lt=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,vt,Zt,le,Ce){Ce===!0&&(Rt*=le,vt*=le,Zt*=le),wt.set(Rt,vt,Zt,le),jt.equals(wt)===!1&&(r.clearColor(Rt,vt,Zt,le),jt.copy(wt))},reset:function(){Y=!1,Lt=null,jt.set(-1,0,0,0)}}}function s(){let Y=!1,wt=!1,Lt=null,jt=null,Rt=null;return{setReversed:function(vt){if(wt!==vt){const Zt=t.get("EXT_clip_control");vt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),wt=vt;const le=Rt;Rt=null,this.setClear(le)}},getReversed:function(){return wt},setTest:function(vt){vt?_t(r.DEPTH_TEST):Ut(r.DEPTH_TEST)},setMask:function(vt){Lt!==vt&&!Y&&(r.depthMask(vt),Lt=vt)},setFunc:function(vt){if(wt&&(vt=FA[vt]),jt!==vt){switch(vt){case ud:r.depthFunc(r.NEVER);break;case fd:r.depthFunc(r.ALWAYS);break;case hd:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case dd:r.depthFunc(r.EQUAL);break;case pd:r.depthFunc(r.GEQUAL);break;case md:r.depthFunc(r.GREATER);break;case gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}jt=vt}},setLocked:function(vt){Y=vt},setClear:function(vt){Rt!==vt&&(wt&&(vt=1-vt),r.clearDepth(vt),Rt=vt)},reset:function(){Y=!1,Lt=null,jt=null,Rt=null,wt=!1}}}function l(){let Y=!1,wt=null,Lt=null,jt=null,Rt=null,vt=null,Zt=null,le=null,Ce=null;return{setTest:function(Q){Y||(Q?_t(r.STENCIL_TEST):Ut(r.STENCIL_TEST))},setMask:function(Q){wt!==Q&&!Y&&(r.stencilMask(Q),wt=Q)},setFunc:function(Q,Yt,Ht){(Lt!==Q||jt!==Yt||Rt!==Ht)&&(r.stencilFunc(Q,Yt,Ht),Lt=Q,jt=Yt,Rt=Ht)},setOp:function(Q,Yt,Ht){(vt!==Q||Zt!==Yt||le!==Ht)&&(r.stencilOp(Q,Yt,Ht),vt=Q,Zt=Yt,le=Ht)},setLocked:function(Q){Y=Q},setClear:function(Q){Ce!==Q&&(r.clearStencil(Q),Ce=Q)},reset:function(){Y=!1,wt=null,Lt=null,jt=null,Rt=null,vt=null,Zt=null,le=null,Ce=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],b=null,E=!1,S=null,v=null,L=null,N=null,D=null,O=null,I=null,F=new ze(0,0,0),j=0,w=!1,U=null,V=null,K=null,ct=null,ht=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,at=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),B=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),B=at>=2);let Et=null,P={};const et=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),yt=new ln().fromArray(et),zt=new ln().fromArray(Mt);function Wt(Y,wt,Lt,jt){const Rt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(Y,vt),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Zt=0;Zt<Lt;Zt++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,jt,0,r.RGBA,r.UNSIGNED_BYTE,Rt):r.texImage2D(wt+Zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Rt);return vt}const it={};it[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_t(r.DEPTH_TEST),f.setFunc(jr),se(!1),It(r0),_t(r.CULL_FACE),Ie(ss);function _t(Y){_[Y]!==!0&&(r.enable(Y),_[Y]=!0)}function Ut(Y){_[Y]!==!1&&(r.disable(Y),_[Y]=!1)}function ne(Y,wt){return g[Y]!==wt?(r.bindFramebuffer(Y,wt),g[Y]=wt,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=wt),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function Vt(Y,wt){let Lt=y,jt=!1;if(Y){Lt=x.get(wt),Lt===void 0&&(Lt=[],x.set(wt,Lt));const Rt=Y.textures;if(Lt.length!==Rt.length||Lt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Zt=Rt.length;vt<Zt;vt++)Lt[vt]=r.COLOR_ATTACHMENT0+vt;Lt.length=Rt.length,jt=!0}}else Lt[0]!==r.BACK&&(Lt[0]=r.BACK,jt=!0);jt&&r.drawBuffers(Lt)}function ae(Y){return b!==Y?(r.useProgram(Y),b=Y,!0):!1}const Ke={[Ls]:r.FUNC_ADD,[IS]:r.FUNC_SUBTRACT,[BS]:r.FUNC_REVERSE_SUBTRACT};Ke[FS]=r.MIN,Ke[HS]=r.MAX;const G={[GS]:r.ZERO,[VS]:r.ONE,[kS]:r.SRC_COLOR,[ld]:r.SRC_ALPHA,[ZS]:r.SRC_ALPHA_SATURATE,[qS]:r.DST_COLOR,[XS]:r.DST_ALPHA,[jS]:r.ONE_MINUS_SRC_COLOR,[cd]:r.ONE_MINUS_SRC_ALPHA,[YS]:r.ONE_MINUS_DST_COLOR,[WS]:r.ONE_MINUS_DST_ALPHA,[KS]:r.CONSTANT_COLOR,[QS]:r.ONE_MINUS_CONSTANT_COLOR,[JS]:r.CONSTANT_ALPHA,[$S]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(Y,wt,Lt,jt,Rt,vt,Zt,le,Ce,Q){if(Y===ss){E===!0&&(Ut(r.BLEND),E=!1);return}if(E===!1&&(_t(r.BLEND),E=!0),Y!==zS){if(Y!==S||Q!==w){if((v!==Ls||D!==Ls)&&(r.blendEquation(r.FUNC_ADD),v=Ls,D=Ls),Q)switch(Y){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case o0:r.blendFunc(r.ONE,r.ONE);break;case l0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case c0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case o0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case l0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case c0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}L=null,N=null,O=null,I=null,F.set(0,0,0),j=0,S=Y,w=Q}return}Rt=Rt||wt,vt=vt||Lt,Zt=Zt||jt,(wt!==v||Rt!==D)&&(r.blendEquationSeparate(Ke[wt],Ke[Rt]),v=wt,D=Rt),(Lt!==L||jt!==N||vt!==O||Zt!==I)&&(r.blendFuncSeparate(G[Lt],G[jt],G[vt],G[Zt]),L=Lt,N=jt,O=vt,I=Zt),(le.equals(F)===!1||Ce!==j)&&(r.blendColor(le.r,le.g,le.b,Ce),F.copy(le),j=Ce),S=Y,w=!1}function he(Y,wt){Y.side===Ta?Ut(r.CULL_FACE):_t(r.CULL_FACE);let Lt=Y.side===fi;wt&&(Lt=!Lt),se(Lt),Y.blending===Gr&&Y.transparent===!1?Ie(ss):Ie(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const jt=Y.stencilWrite;d.setTest(jt),jt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):Ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(Y){U!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),U=Y)}function It(Y){Y!==NS?(_t(r.CULL_FACE),Y!==V&&(Y===r0?r.cullFace(r.BACK):Y===OS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ut(r.CULL_FACE),V=Y}function we(Y){Y!==K&&(B&&r.lineWidth(Y),K=Y)}function qt(Y,wt,Lt){Y?(_t(r.POLYGON_OFFSET_FILL),(ct!==wt||ht!==Lt)&&(r.polygonOffset(wt,Lt),ct=wt,ht=Lt)):Ut(r.POLYGON_OFFSET_FILL)}function ge(Y){Y?_t(r.SCISSOR_TEST):Ut(r.SCISSOR_TEST)}function tn(Y){Y===void 0&&(Y=r.TEXTURE0+ft-1),Et!==Y&&(r.activeTexture(Y),Et=Y)}function en(Y,wt,Lt){Lt===void 0&&(Et===null?Lt=r.TEXTURE0+ft-1:Lt=Et);let jt=P[Lt];jt===void 0&&(jt={type:void 0,texture:void 0},P[Lt]=jt),(jt.type!==Y||jt.texture!==wt)&&(Et!==Lt&&(r.activeTexture(Lt),Et=Lt),r.bindTexture(Y,wt||it[Y]),jt.type=Y,jt.texture=wt)}function z(){const Y=P[Et];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(){try{r.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{r.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Nt(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{r.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(){try{r.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{r.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{r.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(Y){yt.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),yt.copy(Y))}function $t(Y){zt.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),zt.copy(Y))}function Kt(Y,wt){let Lt=p.get(wt);Lt===void 0&&(Lt=new WeakMap,p.set(wt,Lt));let jt=Lt.get(Y);jt===void 0&&(jt=r.getUniformBlockIndex(wt,Y.name),Lt.set(Y,jt))}function Dt(Y,wt){const jt=p.get(wt).get(Y);m.get(wt)!==jt&&(r.uniformBlockBinding(wt,jt,Y.__bindingPointIndex),m.set(wt,jt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Et=null,P={},g={},x=new WeakMap,y=[],b=null,E=!1,S=null,v=null,L=null,N=null,D=null,O=null,I=null,F=new ze(0,0,0),j=0,w=!1,U=null,V=null,K=null,ct=null,ht=null,yt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:_t,disable:Ut,bindFramebuffer:ne,drawBuffers:Vt,useProgram:ae,setBlending:Ie,setMaterial:he,setFlipSided:se,setCullFace:It,setLineWidth:we,setPolygonOffset:qt,setScissorTest:ge,activeTexture:tn,bindTexture:en,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:Xt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:Dt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:ot,texSubImage3D:gt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Nt,scissor:Bt,viewport:$t,reset:de}}function GA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,A){return y?new OffscreenCanvas(z,A):ru("canvas")}function E(z,A,$){let ot=1;const gt=en(z);if((gt.width>$||gt.height>$)&&(ot=$/Math.max(gt.width,gt.height)),ot<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const dt=Math.floor(ot*gt.width),Nt=Math.floor(ot*gt.height);g===void 0&&(g=b(dt,Nt));const Ct=A?b(dt,Nt):g;return Ct.width=dt,Ct.height=Nt,Ct.getContext("2d").drawImage(z,0,0,dt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+dt+"x"+Nt+")."),Ct}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),z;return z}function S(z){return z.generateMipmaps}function v(z){r.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(z,A,$,ot,gt=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let dt=A;if(A===r.RED&&($===r.FLOAT&&(dt=r.R32F),$===r.HALF_FLOAT&&(dt=r.R16F),$===r.UNSIGNED_BYTE&&(dt=r.R8)),A===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(dt=r.R8UI),$===r.UNSIGNED_SHORT&&(dt=r.R16UI),$===r.UNSIGNED_INT&&(dt=r.R32UI),$===r.BYTE&&(dt=r.R8I),$===r.SHORT&&(dt=r.R16I),$===r.INT&&(dt=r.R32I)),A===r.RG&&($===r.FLOAT&&(dt=r.RG32F),$===r.HALF_FLOAT&&(dt=r.RG16F),$===r.UNSIGNED_BYTE&&(dt=r.RG8)),A===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(dt=r.RG8UI),$===r.UNSIGNED_SHORT&&(dt=r.RG16UI),$===r.UNSIGNED_INT&&(dt=r.RG32UI),$===r.BYTE&&(dt=r.RG8I),$===r.SHORT&&(dt=r.RG16I),$===r.INT&&(dt=r.RG32I)),A===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),$===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),$===r.UNSIGNED_INT&&(dt=r.RGB32UI),$===r.BYTE&&(dt=r.RGB8I),$===r.SHORT&&(dt=r.RGB16I),$===r.INT&&(dt=r.RGB32I)),A===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),$===r.UNSIGNED_INT&&(dt=r.RGBA32UI),$===r.BYTE&&(dt=r.RGBA8I),$===r.SHORT&&(dt=r.RGBA16I),$===r.INT&&(dt=r.RGBA32I)),A===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),A===r.RGBA){const Nt=gt?au:ke.getTransfer(ot);$===r.FLOAT&&(dt=r.RGBA32F),$===r.HALF_FLOAT&&(dt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(dt=Nt===rn?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(z,A){let $;return z?A===null||A===zs||A===il?$=r.DEPTH24_STENCIL8:A===Aa?$=r.DEPTH32F_STENCIL8:A===nl&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zs||A===il?$=r.DEPTH_COMPONENT24:A===Aa?$=r.DEPTH_COMPONENT32F:A===nl&&($=r.DEPTH_COMPONENT16),$}function O(z,A){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Vi&&z.minFilter!==Ji?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function I(z){const A=z.target;A.removeEventListener("dispose",I),j(A),A.isVideoTexture&&_.delete(A)}function F(z){const A=z.target;A.removeEventListener("dispose",F),U(A)}function j(z){const A=s.get(z);if(A.__webglInit===void 0)return;const $=z.source,ot=x.get($);if(ot){const gt=ot[A.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&w(z),Object.keys(ot).length===0&&x.delete($)}s.remove(z)}function w(z){const A=s.get(z);r.deleteTexture(A.__webglTexture);const $=z.source,ot=x.get($);delete ot[A.__cacheKey],f.memory.textures--}function U(z){const A=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(A.__webglFramebuffer[ot]))for(let gt=0;gt<A.__webglFramebuffer[ot].length;gt++)r.deleteFramebuffer(A.__webglFramebuffer[ot][gt]);else r.deleteFramebuffer(A.__webglFramebuffer[ot]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[ot])}else{if(Array.isArray(A.__webglFramebuffer))for(let ot=0;ot<A.__webglFramebuffer.length;ot++)r.deleteFramebuffer(A.__webglFramebuffer[ot]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ot=0;ot<A.__webglColorRenderbuffer.length;ot++)A.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[ot]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=z.textures;for(let ot=0,gt=$.length;ot<gt;ot++){const dt=s.get($[ot]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),f.memory.textures--),s.remove($[ot])}s.remove(z)}let V=0;function K(){V=0}function ct(){const z=V;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),V+=1,z}function ht(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function ft(z,A){const $=s.get(z);if(z.isVideoTexture&&ge(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&$.__version!==z.version){const ot=z.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,z,A);return}}else z.isExternalTexture&&($.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+A)}function B(z,A){const $=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&$.__version!==z.version){it($,z,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+A)}function at(z,A){const $=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&$.__version!==z.version){it($,z,A);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+A)}function Z(z,A){const $=s.get(z);if(z.version>0&&$.__version!==z.version){_t($,z,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+A)}const Et={[xd]:r.REPEAT,[Os]:r.CLAMP_TO_EDGE,[yd]:r.MIRRORED_REPEAT},P={[Vi]:r.NEAREST,[cM]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[Ji]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},et={[dM]:r.NEVER,[xM]:r.ALWAYS,[pM]:r.LESS,[Dv]:r.LEQUAL,[mM]:r.EQUAL,[vM]:r.GEQUAL,[gM]:r.GREATER,[_M]:r.NOTEQUAL};function Mt(z,A){if(A.type===Aa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ji||A.magFilter===bh||A.magFilter===yc||A.magFilter===Ps||A.minFilter===Ji||A.minFilter===bh||A.minFilter===yc||A.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,Et[A.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,Et[A.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,Et[A.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,P[A.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,et[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Vi||A.minFilter!==yc&&A.minFilter!==Ps||A.type===Aa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function yt(z,A){let $=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",I));const ot=A.source;let gt=x.get(ot);gt===void 0&&(gt={},x.set(ot,gt));const dt=ht(A);if(dt!==z.__cacheKey){gt[dt]===void 0&&(gt[dt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),gt[dt].usedTimes++;const Nt=gt[z.__cacheKey];Nt!==void 0&&(gt[z.__cacheKey].usedTimes--,Nt.usedTimes===0&&w(A)),z.__cacheKey=dt,z.__webglTexture=gt[dt].texture}return $}function zt(z,A,$){return Math.floor(Math.floor(z/$)/A)}function Wt(z,A,$,ot){const dt=z.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,$,ot,A.data);else{dt.sort((At,Bt)=>At.start-Bt.start);let Nt=0;for(let At=1;At<dt.length;At++){const Bt=dt[Nt],$t=dt[At],Kt=Bt.start+Bt.count,Dt=zt($t.start,A.width,4),de=zt(Bt.start,A.width,4);$t.start<=Kt+1&&Dt===de&&zt($t.start+$t.count-1,A.width,4)===Dt?Bt.count=Math.max(Bt.count,$t.start+$t.count-Bt.start):(++Nt,dt[Nt]=$t)}dt.length=Nt+1;const Ct=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),Xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let At=0,Bt=dt.length;At<Bt;At++){const $t=dt[At],Kt=Math.floor($t.start/4),Dt=Math.ceil($t.count/4),de=Kt%A.width,Y=Math.floor(Kt/A.width),wt=Dt,Lt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,de,Y,wt,Lt,$,ot,A.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ct),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xt)}}function it(z,A,$){let ot=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ot=r.TEXTURE_3D);const gt=yt(z,A),dt=A.source;i.bindTexture(ot,z.__webglTexture,r.TEXTURE0+$);const Nt=s.get(dt);if(dt.version!==Nt.__version||gt===!0){i.activeTexture(r.TEXTURE0+$);const Ct=ke.getPrimaries(ke.workingColorSpace),kt=A.colorSpace===is?null:ke.getPrimaries(A.colorSpace),Xt=A.colorSpace===is||Ct===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let At=E(A.image,!1,l.maxTextureSize);At=tn(A,At);const Bt=c.convert(A.format,A.colorSpace),$t=c.convert(A.type);let Kt=N(A.internalFormat,Bt,$t,A.colorSpace,A.isVideoTexture);Mt(ot,A);let Dt;const de=A.mipmaps,Y=A.isVideoTexture!==!0,wt=Nt.__version===void 0||gt===!0,Lt=dt.dataReady,jt=O(A,At);if(A.isDepthTexture)Kt=D(A.format===sl,A.type),wt&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Kt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Kt,At.width,At.height,0,Bt,$t,null));else if(A.isDataTexture)if(de.length>0){Y&&wt&&i.texStorage2D(r.TEXTURE_2D,jt,Kt,de[0].width,de[0].height);for(let Rt=0,vt=de.length;Rt<vt;Rt++)Dt=de[Rt],Y?Lt&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Bt,$t,Dt.data):i.texImage2D(r.TEXTURE_2D,Rt,Kt,Dt.width,Dt.height,0,Bt,$t,Dt.data);A.generateMipmaps=!1}else Y?(wt&&i.texStorage2D(r.TEXTURE_2D,jt,Kt,At.width,At.height),Lt&&Wt(A,At,Bt,$t)):i.texImage2D(r.TEXTURE_2D,0,Kt,At.width,At.height,0,Bt,$t,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Y&&wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,jt,Kt,de[0].width,de[0].height,At.depth);for(let Rt=0,vt=de.length;Rt<vt;Rt++)if(Dt=de[Rt],A.format!==Gi)if(Bt!==null)if(Y){if(Lt)if(A.layerUpdates.size>0){const Zt=V0(Dt.width,Dt.height,A.format,A.type);for(const le of A.layerUpdates){const Ce=Dt.data.subarray(le*Zt/Dt.data.BYTES_PER_ELEMENT,(le+1)*Zt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,le,Dt.width,Dt.height,1,Bt,Ce)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,At.depth,Bt,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Rt,Kt,Dt.width,Dt.height,At.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Lt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Rt,0,0,0,Dt.width,Dt.height,At.depth,Bt,$t,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Rt,Kt,Dt.width,Dt.height,At.depth,0,Bt,$t,Dt.data)}else{Y&&wt&&i.texStorage2D(r.TEXTURE_2D,jt,Kt,de[0].width,de[0].height);for(let Rt=0,vt=de.length;Rt<vt;Rt++)Dt=de[Rt],A.format!==Gi?Bt!==null?Y?Lt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Bt,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,Rt,Kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Lt&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Dt.width,Dt.height,Bt,$t,Dt.data):i.texImage2D(r.TEXTURE_2D,Rt,Kt,Dt.width,Dt.height,0,Bt,$t,Dt.data)}else if(A.isDataArrayTexture)if(Y){if(wt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,jt,Kt,At.width,At.height,At.depth),Lt)if(A.layerUpdates.size>0){const Rt=V0(At.width,At.height,A.format,A.type);for(const vt of A.layerUpdates){const Zt=At.data.subarray(vt*Rt/At.data.BYTES_PER_ELEMENT,(vt+1)*Rt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Bt,$t,Zt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Bt,$t,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,At.width,At.height,At.depth,0,Bt,$t,At.data);else if(A.isData3DTexture)Y?(wt&&i.texStorage3D(r.TEXTURE_3D,jt,Kt,At.width,At.height,At.depth),Lt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Bt,$t,At.data)):i.texImage3D(r.TEXTURE_3D,0,Kt,At.width,At.height,At.depth,0,Bt,$t,At.data);else if(A.isFramebufferTexture){if(wt)if(Y)i.texStorage2D(r.TEXTURE_2D,jt,Kt,At.width,At.height);else{let Rt=At.width,vt=At.height;for(let Zt=0;Zt<jt;Zt++)i.texImage2D(r.TEXTURE_2D,Zt,Kt,Rt,vt,0,Bt,$t,null),Rt>>=1,vt>>=1}}else if(de.length>0){if(Y&&wt){const Rt=en(de[0]);i.texStorage2D(r.TEXTURE_2D,jt,Kt,Rt.width,Rt.height)}for(let Rt=0,vt=de.length;Rt<vt;Rt++)Dt=de[Rt],Y?Lt&&i.texSubImage2D(r.TEXTURE_2D,Rt,0,0,Bt,$t,Dt):i.texImage2D(r.TEXTURE_2D,Rt,Kt,Bt,$t,Dt);A.generateMipmaps=!1}else if(Y){if(wt){const Rt=en(At);i.texStorage2D(r.TEXTURE_2D,jt,Kt,Rt.width,Rt.height)}Lt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,$t,At)}else i.texImage2D(r.TEXTURE_2D,0,Kt,Bt,$t,At);S(A)&&v(ot),Nt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function _t(z,A,$){if(A.image.length!==6)return;const ot=yt(z,A),gt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+$);const dt=s.get(gt);if(gt.version!==dt.__version||ot===!0){i.activeTexture(r.TEXTURE0+$);const Nt=ke.getPrimaries(ke.workingColorSpace),Ct=A.colorSpace===is?null:ke.getPrimaries(A.colorSpace),kt=A.colorSpace===is||Nt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Xt=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++)!Xt&&!At?Bt[vt]=E(A.image[vt],!0,l.maxCubemapSize):Bt[vt]=At?A.image[vt].image:A.image[vt],Bt[vt]=tn(A,Bt[vt]);const $t=Bt[0],Kt=c.convert(A.format,A.colorSpace),Dt=c.convert(A.type),de=N(A.internalFormat,Kt,Dt,A.colorSpace),Y=A.isVideoTexture!==!0,wt=dt.__version===void 0||ot===!0,Lt=gt.dataReady;let jt=O(A,$t);Mt(r.TEXTURE_CUBE_MAP,A);let Rt;if(Xt){Y&&wt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,jt,de,$t.width,$t.height);for(let vt=0;vt<6;vt++){Rt=Bt[vt].mipmaps;for(let Zt=0;Zt<Rt.length;Zt++){const le=Rt[Zt];A.format!==Gi?Kt!==null?Y?Lt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,0,0,le.width,le.height,Kt,le.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,de,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,0,0,le.width,le.height,Kt,Dt,le.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt,de,le.width,le.height,0,Kt,Dt,le.data)}}}else{if(Rt=A.mipmaps,Y&&wt){Rt.length>0&&jt++;const vt=en(Bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,jt,de,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){Y?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,Kt,Dt,Bt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,de,Bt[vt].width,Bt[vt].height,0,Kt,Dt,Bt[vt].data);for(let Zt=0;Zt<Rt.length;Zt++){const Ce=Rt[Zt].image[vt].image;Y?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,0,0,Ce.width,Ce.height,Kt,Dt,Ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,de,Ce.width,Ce.height,0,Kt,Dt,Ce.data)}}else{Y?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Kt,Dt,Bt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,de,Kt,Dt,Bt[vt]);for(let Zt=0;Zt<Rt.length;Zt++){const le=Rt[Zt];Y?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,0,0,Kt,Dt,le.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Zt+1,de,Kt,Dt,le.image[vt])}}}S(A)&&v(r.TEXTURE_CUBE_MAP),dt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Ut(z,A,$,ot,gt,dt){const Nt=c.convert($.format,$.colorSpace),Ct=c.convert($.type),kt=N($.internalFormat,Nt,Ct,$.colorSpace),Xt=s.get(A),At=s.get($);if(At.__renderTarget=A,!Xt.__hasExternalTextures){const Bt=Math.max(1,A.width>>dt),$t=Math.max(1,A.height>>dt);gt===r.TEXTURE_3D||gt===r.TEXTURE_2D_ARRAY?i.texImage3D(gt,dt,kt,Bt,$t,A.depth,0,Nt,Ct,null):i.texImage2D(gt,dt,kt,Bt,$t,0,Nt,Ct,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),qt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,gt,At.__webglTexture,0,we(A)):(gt===r.TEXTURE_2D||gt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,gt,At.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(z,A,$){if(r.bindRenderbuffer(r.RENDERBUFFER,z),A.depthBuffer){const ot=A.depthTexture,gt=ot&&ot.isDepthTexture?ot.type:null,dt=D(A.stencilBuffer,gt),Nt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=we(A);qt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,dt,A.width,A.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,dt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,dt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,z)}else{const ot=A.textures;for(let gt=0;gt<ot.length;gt++){const dt=ot[gt],Nt=c.convert(dt.format,dt.colorSpace),Ct=c.convert(dt.type),kt=N(dt.internalFormat,Nt,Ct,dt.colorSpace),Xt=we(A);$&&qt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,kt,A.width,A.height):qt(A)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,kt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,kt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=s.get(A.depthTexture);ot.__renderTarget=A,(!ot.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ft(A.depthTexture,0);const gt=ot.__webglTexture,dt=we(A);if(A.depthTexture.format===al)qt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,gt,0);else if(A.depthTexture.format===sl)qt(A)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function ae(z){const A=s.get(z),$=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const ot=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ot){const gt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ot.removeEventListener("dispose",gt)};ot.addEventListener("dispose",gt),A.__depthDisposeCallback=gt}A.__boundDepthTexture=ot}if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ot=z.texture.mipmaps;ot&&ot.length>0?Vt(A.__webglFramebuffer[0],z):Vt(A.__webglFramebuffer,z)}else if($){A.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ot]),A.__webglDepthbuffer[ot]===void 0)A.__webglDepthbuffer[ot]=r.createRenderbuffer(),ne(A.__webglDepthbuffer[ot],z,!1);else{const gt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,dt)}}else{const ot=z.texture.mipmaps;if(ot&&ot.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),ne(A.__webglDepthbuffer,z,!1);else{const gt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(z,A,$){const ot=s.get(z);A!==void 0&&Ut(ot.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ae(z)}function G(z){const A=z.texture,$=s.get(z),ot=s.get(A);z.addEventListener("dispose",F);const gt=z.textures,dt=z.isWebGLCubeRenderTarget===!0,Nt=gt.length>1;if(Nt||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=A.version,f.memory.textures++),dt){$.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ct]=[];for(let kt=0;kt<A.mipmaps.length;kt++)$.__webglFramebuffer[Ct][kt]=r.createFramebuffer()}else $.__webglFramebuffer[Ct]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)$.__webglFramebuffer[Ct]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let Ct=0,kt=gt.length;Ct<kt;Ct++){const Xt=s.get(gt[Ct]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),f.memory.textures++)}if(z.samples>0&&qt(z)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ct=0;Ct<gt.length;Ct++){const kt=gt[Ct];$.__webglColorRenderbuffer[Ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ct]);const Xt=c.convert(kt.format,kt.colorSpace),At=c.convert(kt.type),Bt=N(kt.internalFormat,Xt,At,kt.colorSpace,z.isXRRenderTarget===!0),$t=we(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,Bt,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),ne($.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Mt(r.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)Ut($.__webglFramebuffer[Ct][kt],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else Ut($.__webglFramebuffer[Ct],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);S(A)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let Ct=0,kt=gt.length;Ct<kt;Ct++){const Xt=gt[Ct],At=s.get(Xt);let Bt=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Bt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Bt,At.__webglTexture),Mt(Bt,Xt),Ut($.__webglFramebuffer,z,Xt,r.COLOR_ATTACHMENT0+Ct,Bt,0),S(Xt)&&v(Bt)}i.unbindTexture()}else{let Ct=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ct=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ot.__webglTexture),Mt(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)Ut($.__webglFramebuffer[kt],z,A,r.COLOR_ATTACHMENT0,Ct,kt);else Ut($.__webglFramebuffer,z,A,r.COLOR_ATTACHMENT0,Ct,0);S(A)&&v(Ct),i.unbindTexture()}z.depthBuffer&&ae(z)}function Ie(z){const A=z.textures;for(let $=0,ot=A.length;$<ot;$++){const gt=A[$];if(S(gt)){const dt=L(z),Nt=s.get(gt).__webglTexture;i.bindTexture(dt,Nt),v(dt),i.unbindTexture()}}}const he=[],se=[];function It(z){if(z.samples>0){if(qt(z)===!1){const A=z.textures,$=z.width,ot=z.height;let gt=r.COLOR_BUFFER_BIT;const dt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(z),Ct=A.length>1;if(Ct)for(let Xt=0;Xt<A.length;Xt++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const kt=z.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Xt=0;Xt<A.length;Xt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(gt|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(gt|=r.STENCIL_BUFFER_BIT)),Ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Xt]);const At=s.get(A[Xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,$,ot,0,0,$,ot,gt,r.NEAREST),m===!0&&(he.length=0,se.length=0,he.push(r.COLOR_ATTACHMENT0+Xt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(he.push(dt),se.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ct)for(let Xt=0;Xt<A.length;Xt++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Xt]);const At=s.get(A[Xt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xt,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const A=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function we(z){return Math.min(l.maxSamples,z.samples)}function qt(z){const A=s.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ge(z){const A=f.render.frame;_.get(z)!==A&&(_.set(z,A),z.update())}function tn(z,A){const $=z.colorSpace,ot=z.format,gt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||$!==qr&&$!==is&&(ke.getTransfer($)===rn?(ot!==Gi||gt!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function en(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=K,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=at,this.setTextureCube=Z,this.rebindTextures=Ke,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=qt}function VA(r,t){function i(s,l=is){let c;const f=ke.getTransfer(l);if(s===ta)return r.UNSIGNED_BYTE;if(s===ip)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ev)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===bv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Sv)return r.BYTE;if(s===Mv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===np)return r.INT;if(s===zs)return r.UNSIGNED_INT;if(s===Aa)return r.FLOAT;if(s===ll)return r.HALF_FLOAT;if(s===Tv)return r.ALPHA;if(s===Av)return r.RGB;if(s===Gi)return r.RGBA;if(s===al)return r.DEPTH_COMPONENT;if(s===sl)return r.DEPTH_STENCIL;if(s===Rv)return r.RED;if(s===sp)return r.RED_INTEGER;if(s===wv)return r.RG;if(s===rp)return r.RG_INTEGER;if(s===op)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(f===rn)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td||s===Ad||s===Rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Td||s===Ad)return f===rn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Rd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wd||s===Cd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===wd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ld)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Id)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return f===rn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===jd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return f===rn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Wd||s===qd||s===Yd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Vv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ls({vertexShader:kA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tn(new dl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Hs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,b=null;const E=typeof XRWebGLBinding<"u",S=new XA,v={},L=i.getContextAttributes();let N=null,D=null;const O=[],I=[],F=new ve;let j=null;const w=new Mi;w.viewport=new ln;const U=new Mi;U.viewport=new ln;const V=[w,U],K=new uE;let ct=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let _t=O[it];return _t===void 0&&(_t=new Wh,O[it]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(it){let _t=O[it];return _t===void 0&&(_t=new Wh,O[it]=_t),_t.getGripSpace()},this.getHand=function(it){let _t=O[it];return _t===void 0&&(_t=new Wh,O[it]=_t),_t.getHandSpace()};function ft(it){const _t=I.indexOf(it.inputSource);if(_t===-1)return;const Ut=O[_t];Ut!==void 0&&(Ut.update(it.inputSource,it.frame,p||f),Ut.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",at);for(let it=0;it<O.length;it++){const _t=I[it];_t!==null&&(I[it]=null,O[it].disconnect(_t))}ct=null,ht=null,S.reset();for(const it in v)delete v[it];t.setRenderTarget(N),y=null,x=null,g=null,l=null,D=null,Wt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",B),l.addEventListener("inputsourceschange",at),L.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(F),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,ne=null,Vt=null;L.depth&&(Vt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=L.stencil?sl:al,ne=L.stencil?il:zs);const ae={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ae),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Bs(x.textureWidth,x.textureHeight,{format:Gi,type:ta,depthTexture:new Gv(x.textureWidth,x.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ut={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Bs(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:ta,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Wt.setContext(l),Wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function at(it){for(let _t=0;_t<it.removed.length;_t++){const Ut=it.removed[_t],ne=I.indexOf(Ut);ne>=0&&(I[ne]=null,O[ne].disconnect(Ut))}for(let _t=0;_t<it.added.length;_t++){const Ut=it.added[_t];let ne=I.indexOf(Ut);if(ne===-1){for(let ae=0;ae<O.length;ae++)if(ae>=I.length){I.push(Ut),ne=ae;break}else if(I[ae]===null){I[ae]=Ut,ne=ae;break}if(ne===-1)break}const Vt=O[ne];Vt&&Vt.connect(Ut)}}const Z=new W,Et=new W;function P(it,_t,Ut){Z.setFromMatrixPosition(_t.matrixWorld),Et.setFromMatrixPosition(Ut.matrixWorld);const ne=Z.distanceTo(Et),Vt=_t.projectionMatrix.elements,ae=Ut.projectionMatrix.elements,Ke=Vt[14]/(Vt[10]-1),G=Vt[14]/(Vt[10]+1),Ie=(Vt[9]+1)/Vt[5],he=(Vt[9]-1)/Vt[5],se=(Vt[8]-1)/Vt[0],It=(ae[8]+1)/ae[0],we=Ke*se,qt=Ke*It,ge=ne/(-se+It),tn=ge*-se;if(_t.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(tn),it.translateZ(ge),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Vt[10]===-1)it.projectionMatrix.copy(_t.projectionMatrix),it.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const en=Ke+ge,z=G+ge,A=we-tn,$=qt+(ne-tn),ot=Ie*G/z*en,gt=he*G/z*en;it.projectionMatrix.makePerspective(A,$,ot,gt,en,z),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function et(it,_t){_t===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(_t.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let _t=it.near,Ut=it.far;S.texture!==null&&(S.depthNear>0&&(_t=S.depthNear),S.depthFar>0&&(Ut=S.depthFar)),K.near=U.near=w.near=_t,K.far=U.far=w.far=Ut,(ct!==K.near||ht!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ct=K.near,ht=K.far),K.layers.mask=it.layers.mask|6,w.layers.mask=K.layers.mask&3,U.layers.mask=K.layers.mask&5;const ne=it.parent,Vt=K.cameras;et(K,ne);for(let ae=0;ae<Vt.length;ae++)et(Vt[ae],ne);Vt.length===2?P(K,w,U):K.projectionMatrix.copy(w.projectionMatrix),Mt(it,K,ne)};function Mt(it,_t,Ut){Ut===null?it.matrix.copy(_t.matrixWorld):(it.matrix.copy(Ut.matrixWorld),it.matrix.invert(),it.matrix.multiply(_t.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(_t.projectionMatrix),it.projectionMatrixInverse.copy(_t.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(it){return v[it]};let yt=null;function zt(it,_t){if(_=_t.getViewerPose(p||f),b=_t,_!==null){const Ut=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let ne=!1;Ut.length!==K.cameras.length&&(K.cameras.length=0,ne=!0);for(let G=0;G<Ut.length;G++){const Ie=Ut[G];let he=null;if(y!==null)he=y.getViewport(Ie);else{const It=g.getViewSubImage(x,Ie);he=It.viewport,G===0&&(t.setRenderTargetTextures(D,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(D))}let se=V[G];se===void 0&&(se=new Mi,se.layers.enable(G),se.viewport=new ln,V[G]=se),se.matrix.fromArray(Ie.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ie.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(he.x,he.y,he.width,he.height),G===0&&(K.matrix.copy(se.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ne===!0&&K.cameras.push(se)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&E){g=s.getBinding();const G=g.getDepthInformation(Ut[0]);G&&G.isValid&&G.texture&&S.init(G,l.renderState)}if(Vt&&Vt.includes("camera-access")&&E){t.state.unbindTexture(),g=s.getBinding();for(let G=0;G<Ut.length;G++){const Ie=Ut[G].camera;if(Ie){let he=v[Ie];he||(he=new Vv,v[Ie]=he);const se=g.getCameraImage(Ie);he.sourceTexture=se}}}}for(let Ut=0;Ut<O.length;Ut++){const ne=I[Ut],Vt=O[Ut];ne!==null&&Vt!==void 0&&Vt.update(ne,_t,p||f)}yt&&yt(it,_t),_t.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_t}),b=null}const Wt=new Xv;Wt.setAnimationLoop(zt),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const Ds=new ea,qA=new mn;function YA(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,zv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,L,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),g(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,D)):v.isMeshMatcapMaterial?(c(S,v),b(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),E(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,L,N):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===fi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===fi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=t.get(v),N=L.envMap,D=L.envMapRotation;N&&(S.envMap.value=N,Ds.copy(D),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),S.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(Ds)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=N*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function E(S,v){const L=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ZA(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,N){const D=N.program;s.uniformBlockBinding(L,D)}function p(L,N){let D=l[L.id];D===void 0&&(b(L),D=_(L),l[L.id]=D,L.addEventListener("dispose",S));const O=N.program;s.updateUBOMapping(L,O);const I=t.render.frame;c[L.id]!==I&&(x(L),c[L.id]=I)}function _(L){const N=g();L.__bindingPointIndex=N;const D=r.createBuffer(),O=L.__size,I=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,O,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,D),D}function g(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const N=l[L.id],D=L.uniforms,O=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let I=0,F=D.length;I<F;I++){const j=Array.isArray(D[I])?D[I]:[D[I]];for(let w=0,U=j.length;w<U;w++){const V=j[w];if(y(V,I,w,O)===!0){const K=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let ft=0;ft<ct.length;ft++){const B=ct[ft],at=E(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,K+ht,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,ht),ht+=at.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(L,N,D,O){const I=L.value,F=N+"_"+D;if(O[F]===void 0)return typeof I=="number"||typeof I=="boolean"?O[F]=I:O[F]=I.clone(),!0;{const j=O[F];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return O[F]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function b(L){const N=L.uniforms;let D=0;const O=16;for(let F=0,j=N.length;F<j;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let U=0,V=w.length;U<V;U++){const K=w[U],ct=Array.isArray(K.value)?K.value:[K.value];for(let ht=0,ft=ct.length;ht<ft;ht++){const B=ct[ht],at=E(B),Z=D%O,Et=Z%at.boundary,P=Z+Et;D+=Et,P!==0&&O-P<at.storage&&(D+=O-P),K.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=at.storage}}}const I=D%O;return I>0&&(D+=O-I),L.__size=D,L.__cache={},this}function E(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function S(L){const N=L.target;N.removeEventListener("dispose",S);const D=f.indexOf(N.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const L in l)r.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class KA{constructor(t={}){const{canvas:i=EM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,v=null;const L=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=Si;let I=0,F=0,j=null,w=-1,U=null;const V=new ln,K=new ln;let ct=null;const ht=new ze(0);let ft=0,B=i.width,at=i.height,Z=1,Et=null,P=null;const et=new ln(0,0,B,at),Mt=new ln(0,0,B,at);let yt=!1;const zt=new fp;let Wt=!1,it=!1;const _t=new mn,Ut=new W,ne=new ln,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function Ke(){return j===null?Z:1}let G=s;function Ie(T,X){return i.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ep}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),G===null){const X="webgl2";if(G=Ie(X,T),G===null)throw Ie(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,se,It,we,qt,ge,tn,en,z,A,$,ot,gt,dt,Nt,Ct,kt,Xt,At,Bt,$t,Kt,Dt,de;function Y(){he=new rT(G),he.init(),Kt=new VA(G,he),se=new $1(G,he,t,Kt),It=new HA(G,he),se.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),we=new cT(G),qt=new RA,ge=new GA(G,he,It,qt,se,Kt,we),tn=new eT(D),en=new sT(D),z=new mE(G),Dt=new Q1(G,z),A=new oT(G,z,we,Dt),$=new fT(G,A,z,we),At=new uT(G,se,ge),Ct=new tT(qt),ot=new AA(D,tn,en,he,se,Dt,Ct),gt=new YA(D,qt),dt=new CA,Nt=new PA(he),Xt=new K1(D,tn,en,It,$,y,m),kt=new BA(D,$,se),de=new ZA(G,we,se,It),Bt=new J1(G,he,we),$t=new lT(G,he,we),we.programs=ot.programs,D.capabilities=se,D.extensions=he,D.properties=qt,D.renderLists=dt,D.shadowMap=kt,D.state=It,D.info=we}Y();const wt=new WA(D,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(B,at,!1))},this.getSize=function(T){return T.set(B,at)},this.setSize=function(T,X,rt=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,at=X,i.width=Math.floor(T*Z),i.height=Math.floor(X*Z),rt===!0&&(i.style.width=T+"px",i.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(B*Z,at*Z).floor()},this.setDrawingBufferSize=function(T,X,rt){B=T,at=X,Z=rt,i.width=Math.floor(T*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,X,rt,tt){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,X,rt,tt),It.viewport(V.copy(et).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(Mt)},this.setScissor=function(T,X,rt,tt){T.isVector4?Mt.set(T.x,T.y,T.z,T.w):Mt.set(T,X,rt,tt),It.scissor(K.copy(Mt).multiplyScalar(Z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){It.setScissorTest(yt=T)},this.setOpaqueSort=function(T){Et=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,rt=!0){let tt=0;if(T){let k=!1;if(j!==null){const pt=j.texture.format;k=pt===op||pt===rp||pt===sp}if(k){const pt=j.texture.type,Tt=pt===ta||pt===zs||pt===nl||pt===il||pt===ip||pt===ap,Pt=Xt.getClearColor(),Ot=Xt.getClearAlpha(),Qt=Pt.r,fe=Pt.g,te=Pt.b;Tt?(b[0]=Qt,b[1]=fe,b[2]=te,b[3]=Ot,G.clearBufferuiv(G.COLOR,0,b)):(E[0]=Qt,E[1]=fe,E[2]=te,E[3]=Ot,G.clearBufferiv(G.COLOR,0,E))}else tt|=G.COLOR_BUFFER_BIT}X&&(tt|=G.DEPTH_BUFFER_BIT),rt&&(tt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),Xt.dispose(),dt.dispose(),Nt.dispose(),qt.dispose(),tn.dispose(),en.dispose(),$.dispose(),Dt.dispose(),de.dispose(),ot.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ht),wt.removeEventListener("sessionend",re),ce.stop()};function Lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const T=we.autoReset,X=kt.enabled,rt=kt.autoUpdate,tt=kt.needsUpdate,k=kt.type;Y(),we.autoReset=T,kt.enabled=X,kt.autoUpdate=rt,kt.needsUpdate=tt,kt.type=k}function Rt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function vt(T){const X=T.target;X.removeEventListener("dispose",vt),Zt(X)}function Zt(T){le(T),qt.remove(T)}function le(T){const X=qt.get(T).programs;X!==void 0&&(X.forEach(function(rt){ot.releaseProgram(rt)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,rt,tt,k,pt){X===null&&(X=Vt);const Tt=k.isMesh&&k.matrixWorld.determinant()<0,Pt=je(T,X,rt,tt,k);It.setMaterial(tt,Tt);let Ot=rt.index,Qt=1;if(tt.wireframe===!0){if(Ot=A.getWireframeAttribute(rt),Ot===void 0)return;Qt=2}const fe=rt.drawRange,te=rt.attributes.position;let Se=fe.start*Qt,Me=(fe.start+fe.count)*Qt;pt!==null&&(Se=Math.max(Se,pt.start*Qt),Me=Math.min(Me,(pt.start+pt.count)*Qt)),Ot!==null?(Se=Math.max(Se,0),Me=Math.min(Me,Ot.count)):te!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,te.count));const Ze=Me-Se;if(Ze<0||Ze===1/0)return;Dt.setup(k,tt,Pt,rt,Ot);let We,ye=Bt;if(Ot!==null&&(We=z.get(Ot),ye=$t,ye.setIndex(We)),k.isMesh)tt.wireframe===!0?(It.setLineWidth(tt.wireframeLinewidth*Ke()),ye.setMode(G.LINES)):ye.setMode(G.TRIANGLES);else if(k.isLine){let ue=tt.linewidth;ue===void 0&&(ue=1),It.setLineWidth(ue*Ke()),k.isLineSegments?ye.setMode(G.LINES):k.isLineLoop?ye.setMode(G.LINE_LOOP):ye.setMode(G.LINE_STRIP)}else k.isPoints?ye.setMode(G.POINTS):k.isSprite&&ye.setMode(G.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)rl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ue=k._multiDrawStarts,dn=k._multiDrawCounts,Le=k._multiDrawCount,qn=Ot?z.get(Ot).bytesPerElement:1,Li=qt.get(tt).currentProgram.getUniforms();for(let $n=0;$n<Le;$n++)Li.setValue(G,"_gl_DrawID",$n),ye.render(ue[$n]/qn,dn[$n])}else if(k.isInstancedMesh)ye.renderInstances(Se,Ze,k.count);else if(rt.isInstancedBufferGeometry){const ue=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,dn=Math.min(rt.instanceCount,ue);ye.renderInstances(Se,Ze,dn)}else ye.render(Se,Ze)};function Ce(T,X,rt){T.transparent===!0&&T.side===Ta&&T.forceSinglePass===!1?(T.side=fi,T.needsUpdate=!0,Ee(T,X,rt),T.side=os,T.needsUpdate=!0,Ee(T,X,rt),T.side=Ta):Ee(T,X,rt)}this.compile=function(T,X,rt=null){rt===null&&(rt=T),v=Nt.get(rt),v.init(X),N.push(v),rt.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),T!==rt&&T.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights();const tt=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let Tt=0;Tt<pt.length;Tt++){const Pt=pt[Tt];Ce(Pt,rt,k),tt.add(Pt)}else Ce(pt,rt,k),tt.add(pt)}),v=N.pop(),tt},this.compileAsync=function(T,X,rt=null){const tt=this.compile(T,X,rt);return new Promise(k=>{function pt(){if(tt.forEach(function(Tt){qt.get(Tt).currentProgram.isReady()&&tt.delete(Tt)}),tt.size===0){k(T);return}setTimeout(pt,10)}he.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Q=null;function Yt(T){Q&&Q(T)}function Ht(){ce.stop()}function re(){ce.start()}const ce=new Xv;ce.setAnimationLoop(Yt),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(T){Q=T,wt.setAnimationLoop(T),T===null?ce.stop():ce.start()},wt.addEventListener("sessionstart",Ht),wt.addEventListener("sessionend",re),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(X),X=wt.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,X,j),v=Nt.get(T,N.length),v.init(X),N.push(v),_t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),zt.setFromProjectionMatrix(_t,$i,X.reversedDepth),it=this.localClippingEnabled,Wt=Ct.init(this.clippingPlanes,it),S=dt.get(T,L.length),S.init(),L.push(S),wt.enabled===!0&&wt.isPresenting===!0){const pt=D.xr.getDepthSensingMesh();pt!==null&&Ue(pt,X,-1/0,D.sortObjects)}Ue(T,X,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Et,P),ae=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ae&&Xt.addToRenderList(S,T),this.info.render.frame++,Wt===!0&&Ct.beginShadows();const rt=v.state.shadowsArray;kt.render(rt,T,X),Wt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=S.opaque,k=S.transmissive;if(v.setupLights(),X.isArrayCamera){const pt=X.cameras;if(k.length>0)for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++){const Ot=pt[Tt];bt(tt,k,T,Ot)}ae&&Xt.render(T);for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++){const Ot=pt[Tt];Ft(S,T,Ot,Ot.viewport)}}else k.length>0&&bt(tt,k,T,X),ae&&Xt.render(T),Ft(S,T,X);j!==null&&F===0&&(ge.updateMultisampleRenderTarget(j),ge.updateRenderTargetMipmap(j)),T.isScene===!0&&T.onAfterRender(D,T,X),Dt.resetDefaultState(),w=-1,U=null,N.pop(),N.length>0?(v=N[N.length-1],Wt===!0&&Ct.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ue(T,X,rt,tt){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)rt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||zt.intersectsSprite(T)){tt&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_t);const Tt=$.update(T),Pt=T.material;Pt.visible&&S.push(T,Tt,Pt,rt,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||zt.intersectsObject(T))){const Tt=$.update(T),Pt=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ne.copy(Tt.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(_t)),Array.isArray(Pt)){const Ot=Tt.groups;for(let Qt=0,fe=Ot.length;Qt<fe;Qt++){const te=Ot[Qt],Se=Pt[te.materialIndex];Se&&Se.visible&&S.push(T,Tt,Se,rt,ne.z,te)}}else Pt.visible&&S.push(T,Tt,Pt,rt,ne.z,null)}}const pt=T.children;for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++)Ue(pt[Tt],X,rt,tt)}function Ft(T,X,rt,tt){const k=T.opaque,pt=T.transmissive,Tt=T.transparent;v.setupLightsView(rt),Wt===!0&&Ct.setGlobalState(D.clippingPlanes,rt),tt&&It.viewport(V.copy(tt)),k.length>0&&xe(k,X,rt),pt.length>0&&xe(pt,X,rt),Tt.length>0&&xe(Tt,X,rt),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function bt(T,X,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[tt.id]===void 0&&(v.state.transmissionRenderTarget[tt.id]=new Bs(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ll:ta,minFilter:Ps,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace}));const pt=v.state.transmissionRenderTarget[tt.id],Tt=tt.viewport||V;pt.setSize(Tt.z*D.transmissionResolutionScale,Tt.w*D.transmissionResolutionScale);const Pt=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(pt),D.getClearColor(ht),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),ae&&Xt.render(rt);const fe=D.toneMapping;D.toneMapping=rs;const te=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),v.setupLightsView(tt),Wt===!0&&Ct.setGlobalState(D.clippingPlanes,tt),xe(T,rt,tt),ge.updateMultisampleRenderTarget(pt),ge.updateRenderTargetMipmap(pt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Me=0,Ze=X.length;Me<Ze;Me++){const We=X[Me],ye=We.object,ue=We.geometry,dn=We.material,Le=We.group;if(dn.side===Ta&&ye.layers.test(tt.layers)){const qn=dn.side;dn.side=fi,dn.needsUpdate=!0,Ye(ye,rt,tt,ue,dn,Le),dn.side=qn,dn.needsUpdate=!0,Se=!0}}Se===!0&&(ge.updateMultisampleRenderTarget(pt),ge.updateRenderTargetMipmap(pt))}D.setRenderTarget(Pt,Ot,Qt),D.setClearColor(ht,ft),te!==void 0&&(tt.viewport=te),D.toneMapping=fe}function xe(T,X,rt){const tt=X.isScene===!0?X.overrideMaterial:null;for(let k=0,pt=T.length;k<pt;k++){const Tt=T[k],Pt=Tt.object,Ot=Tt.geometry,Qt=Tt.group;let fe=Tt.material;fe.allowOverride===!0&&tt!==null&&(fe=tt),Pt.layers.test(rt.layers)&&Ye(Pt,X,rt,Ot,fe,Qt)}}function Ye(T,X,rt,tt,k,pt){T.onBeforeRender(D,X,rt,tt,k,pt),T.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(D,X,rt,tt,T,pt),k.transparent===!0&&k.side===Ta&&k.forceSinglePass===!1?(k.side=fi,k.needsUpdate=!0,D.renderBufferDirect(rt,X,tt,k,T,pt),k.side=os,k.needsUpdate=!0,D.renderBufferDirect(rt,X,tt,k,T,pt),k.side=Ta):D.renderBufferDirect(rt,X,tt,k,T,pt),T.onAfterRender(D,X,rt,tt,k,pt)}function Ee(T,X,rt){X.isScene!==!0&&(X=Vt);const tt=qt.get(T),k=v.state.lights,pt=v.state.shadowsArray,Tt=k.state.version,Pt=ot.getParameters(T,k.state,pt,X,rt),Ot=ot.getProgramCacheKey(Pt);let Qt=tt.programs;tt.environment=T.isMeshStandardMaterial?X.environment:null,tt.fog=X.fog,tt.envMap=(T.isMeshStandardMaterial?en:tn).get(T.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,Qt===void 0&&(T.addEventListener("dispose",vt),Qt=new Map,tt.programs=Qt);let fe=Qt.get(Ot);if(fe!==void 0){if(tt.currentProgram===fe&&tt.lightsStateVersion===Tt)return Qe(T,Pt),fe}else Pt.uniforms=ot.getUniforms(T),T.onBeforeCompile(Pt,D),fe=ot.acquireProgram(Pt,Ot),Qt.set(Ot,fe),tt.uniforms=Pt.uniforms;const te=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(te.clippingPlanes=Ct.uniform),Qe(T,Pt),tt.needsLights=Ge(T),tt.lightsStateVersion=Tt,tt.needsLights&&(te.ambientLightColor.value=k.state.ambient,te.lightProbe.value=k.state.probe,te.directionalLights.value=k.state.directional,te.directionalLightShadows.value=k.state.directionalShadow,te.spotLights.value=k.state.spot,te.spotLightShadows.value=k.state.spotShadow,te.rectAreaLights.value=k.state.rectArea,te.ltc_1.value=k.state.rectAreaLTC1,te.ltc_2.value=k.state.rectAreaLTC2,te.pointLights.value=k.state.point,te.pointLightShadows.value=k.state.pointShadow,te.hemisphereLights.value=k.state.hemi,te.directionalShadowMap.value=k.state.directionalShadowMap,te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,te.spotShadowMap.value=k.state.spotShadowMap,te.spotLightMatrix.value=k.state.spotLightMatrix,te.spotLightMap.value=k.state.spotLightMap,te.pointShadowMap.value=k.state.pointShadowMap,te.pointShadowMatrix.value=k.state.pointShadowMatrix),tt.currentProgram=fe,tt.uniformsList=null,fe}function Be(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=iu.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Qe(T,X){const rt=qt.get(T);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function je(T,X,rt,tt,k){X.isScene!==!0&&(X=Vt),ge.resetTextureUnits();const pt=X.fog,Tt=tt.isMeshStandardMaterial?X.environment:null,Pt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qr,Ot=(tt.isMeshStandardMaterial?en:tn).get(tt.envMap||Tt),Qt=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,fe=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),te=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let Ze=rs;tt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ze=D.toneMapping);const We=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ye=We!==void 0?We.length:0,ue=qt.get(tt),dn=v.state.lights;if(Wt===!0&&(it===!0||T!==U)){const yn=T===U&&tt.id===w;Ct.setState(tt,T,yn)}let Le=!1;tt.version===ue.__version?(ue.needsLights&&ue.lightsStateVersion!==dn.state.version||ue.outputColorSpace!==Pt||k.isBatchedMesh&&ue.batching===!1||!k.isBatchedMesh&&ue.batching===!0||k.isBatchedMesh&&ue.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ue.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ue.instancing===!1||!k.isInstancedMesh&&ue.instancing===!0||k.isSkinnedMesh&&ue.skinning===!1||!k.isSkinnedMesh&&ue.skinning===!0||k.isInstancedMesh&&ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ue.instancingMorph===!1&&k.morphTexture!==null||ue.envMap!==Ot||tt.fog===!0&&ue.fog!==pt||ue.numClippingPlanes!==void 0&&(ue.numClippingPlanes!==Ct.numPlanes||ue.numIntersection!==Ct.numIntersection)||ue.vertexAlphas!==Qt||ue.vertexTangents!==fe||ue.morphTargets!==te||ue.morphNormals!==Se||ue.morphColors!==Me||ue.toneMapping!==Ze||ue.morphTargetsCount!==ye)&&(Le=!0):(Le=!0,ue.__version=tt.version);let qn=ue.currentProgram;Le===!0&&(qn=Ee(tt,X,k));let Li=!1,$n=!1,In=!1;const cn=qn.getUniforms(),ti=ue.uniforms;if(It.useProgram(qn.program)&&(Li=!0,$n=!0,In=!0),tt.id!==w&&(w=tt.id,$n=!0),Li||U!==T){It.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),cn.setValue(G,"projectionMatrix",T.projectionMatrix),cn.setValue(G,"viewMatrix",T.matrixWorldInverse);const Vn=cn.map.cameraPosition;Vn!==void 0&&Vn.setValue(G,Ut.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&cn.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&cn.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,$n=!0,In=!0)}if(k.isSkinnedMesh){cn.setOptional(G,k,"bindMatrix"),cn.setOptional(G,k,"bindMatrixInverse");const yn=k.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),cn.setValue(G,"boneTexture",yn.boneTexture,ge))}k.isBatchedMesh&&(cn.setOptional(G,k,"batchingTexture"),cn.setValue(G,"batchingTexture",k._matricesTexture,ge),cn.setOptional(G,k,"batchingIdTexture"),cn.setValue(G,"batchingIdTexture",k._indirectTexture,ge),cn.setOptional(G,k,"batchingColorTexture"),k._colorsTexture!==null&&cn.setValue(G,"batchingColorTexture",k._colorsTexture,ge));const Yn=rt.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&At.update(k,rt,qn),($n||ue.receiveShadow!==k.receiveShadow)&&(ue.receiveShadow=k.receiveShadow,cn.setValue(G,"receiveShadow",k.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ti.envMap.value=Ot,ti.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&X.environment!==null&&(ti.envMapIntensity.value=X.environmentIntensity),$n&&(cn.setValue(G,"toneMappingExposure",D.toneMappingExposure),ue.needsLights&&He(ti,In),pt&&tt.fog===!0&&gt.refreshFogUniforms(ti,pt),gt.refreshMaterialUniforms(ti,tt,Z,at,v.state.transmissionRenderTarget[T.id]),iu.upload(G,Be(ue),ti,ge)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(iu.upload(G,Be(ue),ti,ge),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&cn.setValue(G,"center",k.center),cn.setValue(G,"modelViewMatrix",k.modelViewMatrix),cn.setValue(G,"normalMatrix",k.normalMatrix),cn.setValue(G,"modelMatrix",k.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const yn=tt.uniformsGroups;for(let Vn=0,Vs=yn.length;Vn<Vs;Vn++){const ai=yn[Vn];de.update(ai,qn),de.bind(ai,qn)}}return qn}function He(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Ge(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,X,rt){const tt=qt.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),qt.get(T.texture).__webglTexture=X,qt.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const rt=qt.get(T);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const Xe=G.createFramebuffer();this.setRenderTarget=function(T,X=0,rt=0){j=T,I=X,F=rt;let tt=!0,k=null,pt=!1,Tt=!1;if(T){const Ot=qt.get(T);if(Ot.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(G.FRAMEBUFFER,null),tt=!1;else if(Ot.__webglFramebuffer===void 0)ge.setupRenderTarget(T);else if(Ot.__hasExternalTextures)ge.rebindTextures(T,qt.get(T.texture).__webglTexture,qt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const te=T.depthTexture;if(Ot.__boundDepthTexture!==te){if(te!==null&&qt.has(te)&&(T.width!==te.image.width||T.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(T)}}const Qt=T.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Tt=!0);const fe=qt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(fe[X])?k=fe[X][rt]:k=fe[X],pt=!0):T.samples>0&&ge.useMultisampledRTT(T)===!1?k=qt.get(T).__webglMultisampledFramebuffer:Array.isArray(fe)?k=fe[rt]:k=fe,V.copy(T.viewport),K.copy(T.scissor),ct=T.scissorTest}else V.copy(et).multiplyScalar(Z).floor(),K.copy(Mt).multiplyScalar(Z).floor(),ct=yt;if(rt!==0&&(k=Xe),It.bindFramebuffer(G.FRAMEBUFFER,k)&&tt&&It.drawBuffers(T,k),It.viewport(V),It.scissor(K),It.setScissorTest(ct),pt){const Ot=qt.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,rt)}else if(Tt){const Ot=X;for(let Qt=0;Qt<T.textures.length;Qt++){const fe=qt.get(T.textures[Qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Qt,fe.__webglTexture,rt,Ot)}}else if(T!==null&&rt!==0){const Ot=qt.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(T,X,rt,tt,k,pt,Tt,Pt=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ot=Ot[Tt]),Ot){It.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const Qt=T.textures[Pt],fe=Qt.format,te=Qt.type;if(!se.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-tt&&rt>=0&&rt<=T.height-k&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(X,rt,tt,k,Kt.convert(fe),Kt.convert(te),pt))}finally{const Qt=j!==null?qt.get(j).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(T,X,rt,tt,k,pt,Tt,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ot=Ot[Tt]),Ot)if(X>=0&&X<=T.width-tt&&rt>=0&&rt<=T.height-k){It.bindFramebuffer(G.FRAMEBUFFER,Ot);const Qt=T.textures[Pt],fe=Qt.format,te=Qt.type;if(!se.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.bufferData(G.PIXEL_PACK_BUFFER,pt.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Pt),G.readPixels(X,rt,tt,k,Kt.convert(fe),Kt.convert(te),0);const Me=j!==null?qt.get(j).__webglFramebuffer:null;It.bindFramebuffer(G.FRAMEBUFFER,Me);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await bM(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,pt),G.deleteBuffer(Se),G.deleteSync(Ze),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,rt=0){const tt=Math.pow(2,-rt),k=Math.floor(T.image.width*tt),pt=Math.floor(T.image.height*tt),Tt=X!==null?X.x:0,Pt=X!==null?X.y:0;ge.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Tt,Pt,k,pt),It.unbindTexture()};const ee=G.createFramebuffer(),Cn=G.createFramebuffer();this.copyTextureToTexture=function(T,X,rt=null,tt=null,k=0,pt=null){pt===null&&(k!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=k,k=0):pt=0);let Tt,Pt,Ot,Qt,fe,te,Se,Me,Ze;const We=T.isCompressedTexture?T.mipmaps[pt]:T.image;if(rt!==null)Tt=rt.max.x-rt.min.x,Pt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,fe=rt.min.y,te=rt.isBox3?rt.min.z:0;else{const Yn=Math.pow(2,-k);Tt=Math.floor(We.width*Yn),Pt=Math.floor(We.height*Yn),T.isDataArrayTexture?Ot=We.depth:T.isData3DTexture?Ot=Math.floor(We.depth*Yn):Ot=1,Qt=0,fe=0,te=0}tt!==null?(Se=tt.x,Me=tt.y,Ze=tt.z):(Se=0,Me=0,Ze=0);const ye=Kt.convert(X.format),ue=Kt.convert(X.type);let dn;X.isData3DTexture?(ge.setTexture3D(X,0),dn=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ge.setTexture2DArray(X,0),dn=G.TEXTURE_2D_ARRAY):(ge.setTexture2D(X,0),dn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Le=G.getParameter(G.UNPACK_ROW_LENGTH),qn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Li=G.getParameter(G.UNPACK_SKIP_PIXELS),$n=G.getParameter(G.UNPACK_SKIP_ROWS),In=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,We.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,We.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,fe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,te);const cn=T.isDataArrayTexture||T.isData3DTexture,ti=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const Yn=qt.get(T),yn=qt.get(X),Vn=qt.get(Yn.__renderTarget),Vs=qt.get(yn.__renderTarget);It.bindFramebuffer(G.READ_FRAMEBUFFER,Vn.__webglFramebuffer),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let ai=0;ai<Ot;ai++)cn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.get(T).__webglTexture,k,te+ai),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.get(X).__webglTexture,pt,Ze+ai)),G.blitFramebuffer(Qt,fe,Tt,Pt,Se,Me,Tt,Pt,G.DEPTH_BUFFER_BIT,G.NEAREST);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||qt.has(T)){const Yn=qt.get(T),yn=qt.get(X);It.bindFramebuffer(G.READ_FRAMEBUFFER,ee),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,Cn);for(let Vn=0;Vn<Ot;Vn++)cn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yn.__webglTexture,k,te+Vn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Yn.__webglTexture,k),ti?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,pt,Ze+Vn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,pt),k!==0?G.blitFramebuffer(Qt,fe,Tt,Pt,Se,Me,Tt,Pt,G.COLOR_BUFFER_BIT,G.NEAREST):ti?G.copyTexSubImage3D(dn,pt,Se,Me,Ze+Vn,Qt,fe,Tt,Pt):G.copyTexSubImage2D(dn,pt,Se,Me,Qt,fe,Tt,Pt);It.bindFramebuffer(G.READ_FRAMEBUFFER,null),It.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ti?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(dn,pt,Se,Me,Ze,Tt,Pt,Ot,ye,ue,We.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(dn,pt,Se,Me,Ze,Tt,Pt,Ot,ye,We.data):G.texSubImage3D(dn,pt,Se,Me,Ze,Tt,Pt,Ot,ye,ue,We):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,pt,Se,Me,Tt,Pt,ye,ue,We.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,pt,Se,Me,We.width,We.height,ye,We.data):G.texSubImage2D(G.TEXTURE_2D,pt,Se,Me,Tt,Pt,ye,ue,We);G.pixelStorei(G.UNPACK_ROW_LENGTH,Le),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Li),G.pixelStorei(G.UNPACK_SKIP_ROWS,$n),G.pixelStorei(G.UNPACK_SKIP_IMAGES,In),pt===0&&X.generateMipmaps&&G.generateMipmap(dn),It.unbindTexture()},this.initRenderTarget=function(T){qt.get(T).__webglFramebuffer===void 0&&ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),It.unbindTexture()},this.resetState=function(){I=0,F=0,j=null,It.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(t),i.unpackColorSpace=ke._getUnpackColorSpace()}}const dv={type:"change"},vp={type:"start"},Kv={type:"end"},Zc=new hl,pv=new ns,QA=Math.cos(70*MM.DEG2RAD),Ln=new W,ui=2*Math.PI,on={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ad=1e-6;class JA extends dE{constructor(t,i=null){super(t,i),this.state=on.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Is,this._lastTargetPosition=new W,this._quat=new Is().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new G0,this._sphericalDelta=new G0,this._scale=1,this._panOffset=new W,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new W,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tR.bind(this),this._onPointerDown=$A.bind(this),this._onPointerUp=eR.bind(this),this._onContextMenu=lR.bind(this),this._onMouseWheel=aR.bind(this),this._onKeyDown=sR.bind(this),this._onTouchStart=rR.bind(this),this._onTouchMove=oR.bind(this),this._onMouseDown=nR.bind(this),this._onMouseMove=iR.bind(this),this._interceptControlDown=cR.bind(this),this._interceptControlUp=uR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dv),this.update(),this.state=on.NONE}update(t=null){const i=this.object.position;Ln.copy(i).sub(this.target),Ln.applyQuaternion(this._quat),this._spherical.setFromVector3(Ln),this.autoRotate&&this.state===on.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),l<-Math.PI?l+=ui:l>Math.PI&&(l-=ui),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Ln.setFromSpherical(this._spherical),Ln.applyQuaternion(this._quatInverse),i.copy(this.target).add(Ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=Ln.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=Ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<QA?this.object.lookAt(this.target):(pv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(pv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ad||this._lastTargetPosition.distanceToSquared(this.target)>ad?(this.dispatchEvent(dv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Ln.setFromMatrixColumn(i,0),Ln.multiplyScalar(-t),this._panOffset.add(Ln)}_panUp(t,i){this.screenSpacePanning===!0?Ln.setFromMatrixColumn(i,1):(Ln.setFromMatrixColumn(i,0),Ln.crossVectors(this.object.up,Ln)),Ln.multiplyScalar(t),this._panOffset.add(Ln)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Ln.copy(l).sub(this.target);let c=Ln.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ve,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function $A(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function tR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function eR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kv),this.state=on.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function nR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=on.DOLLY;break;case Hr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=on.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=on.ROTATE}break;case Hr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=on.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=on.PAN}break;default:this.state=on.NONE}this.state!==on.NONE&&this.dispatchEvent(vp)}function iR(r){switch(this.state){case on.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case on.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case on.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function aR(r){this.enabled===!1||this.enableZoom===!1||this.state!==on.NONE||(r.preventDefault(),this.dispatchEvent(vp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Kv))}function sR(r){this.enabled!==!1&&this._handleKeyDown(r)}function rR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=on.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=on.TOUCH_PAN;break;default:this.state=on.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=on.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=on.TOUCH_DOLLY_ROTATE;break;default:this.state=on.NONE}break;default:this.state=on.NONE}this.state!==on.NONE&&this.dispatchEvent(vp)}function oR(r){switch(this._trackPointer(r),this.state){case on.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case on.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case on.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case on.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=on.NONE}}function lR(r){this.enabled!==!1&&r.preventDefault()}function cR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ol=Object.freeze({servers:3,channels:2,idleW:70,busyW:320,networkW:25,pue:1.2,ci:400,tuSeconds:1,seed:12,milpTimeLimit:5}),Sa=1e-7,sd=r=>r.reduce((t,i)=>t+i,0),as=r=>`${r.source}:${r.target}`;function fR(r){let t=r>>>0;return()=>{t+=1831565813;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Wn(r,t,i,s,l=!1){if(typeof r!="number"||!Number.isFinite(r)||r<i||r>s||l&&!Number.isInteger(r))throw new Error(`${t} must be ${l?"an integer":"a finite number"} from ${i} to ${s}.`);return r}function Qv(r={},t={}){const i={...ol,...t,...r};return Wn(i.servers,"Servers",1,8,!0),Wn(i.channels,"Channels",1,8,!0),Wn(i.idleW,"Idle power",0,1e6),Wn(i.busyW,"Busy power",i.idleW,1e6),Wn(i.networkW,"Network power",0,1e6),Wn(i.pue,"PUE",1,10),Wn(i.ci,"Carbon intensity",0,5e3),Wn(i.tuSeconds,"Seconds per time unit",.001,86400),Wn(i.seed,"Seed",0,4294967295,!0),Wn(i.milpTimeLimit,"MILP time limit in seconds",.01,60),i}function hR(r){const t=new Map(r.nodes.map(f=>[f.id,[]])),i=new Map(r.nodes.map(f=>[f.id,[]]));for(const f of r.edges)t.get(f.target).push(f),i.get(f.source).push(f);const s=new Map([...t].map(([f,d])=>[f,d.length])),l=r.nodes.filter(f=>!s.get(f.id)).map(f=>f.id).sort((f,d)=>f-d),c=[];for(;l.length;){const f=l.shift();c.push(f);for(const d of i.get(f)){const m=s.get(d.target)-1;s.set(d.target,m),m||(l.push(d.target),l.sort((p,_)=>p-_))}}if(c.length!==r.nodes.length)throw new Error("The graph contains a cycle; upload a directed acyclic graph.");return{order:c,parents:t,children:i}}function Pr(r,t={}){if(!r||!Array.isArray(r.nodes)||!Array.isArray(r.edges))throw new Error("A DAG needs nodes and edges arrays.");if(r.nodes.length<1||r.nodes.length>32)throw new Error("Use 1–32 tasks.");if(r.edges.length>496)throw new Error("Use at most 496 unique edges.");const i=Qv({...r.seed===void 0?{}:{seed:r.seed},...t},r.resources),s=new Set,l=r.nodes.map(m=>{if(Wn(m.id,"Task ID",0,2147483647,!0),Wn(m.duration,`Task ${m.id} duration`,.001,1e4),s.has(m.id))throw new Error(`Duplicate task ID ${m.id}.`);return s.add(m.id),{...m,id:m.id,duration:m.duration}}),c=new Set,f=r.edges.map(m=>{if(!s.has(m.source)||!s.has(m.target))throw new Error("Every edge endpoint must name an existing task.");if(m.source===m.target)throw new Error("Self edges are not allowed in a DAG.");if(Wn(m.duration,"Transfer duration",0,1e4),c.has(as(m)))throw new Error(`Duplicate edge ${as(m)}.`);return c.add(as(m)),{source:m.source,target:m.target,duration:m.duration}}),d={...r,nodes:l,edges:f,resources:{servers:i.servers,channels:i.channels},seed:i.seed};return hR(d),d}function Jv(r="forkjoin",t=8,i=12){if(Wn(t,"Task count",1,32,!0),Wn(i,"Seed",0,4294967295,!0),!["pipeline","forkjoin","mapreduce","diamond","layered","random","tree","independent"].includes(r))throw new Error(`Unknown DAG family ${r}.`);const l=fR(i),c=Array.from({length:t},(p,_)=>({id:_,duration:2+Math.floor(l()*7)})),f=[],d=new Set,m=(p,_)=>{p>=_||p<0||_>=t||d.has(`${p}:${_}`)||(d.add(`${p}:${_}`),f.push({source:p,target:_,duration:1+Math.floor(l()*4)}))};if(r==="pipeline")for(let p=1;p<t;p++)m(p-1,p);if(r==="forkjoin")for(let p=1;p<t-1;p++)m(0,p),m(p,t-1);if(r==="forkjoin"&&t===2&&m(0,1),r==="mapreduce"){const p=Math.ceil(t/2);for(let _=0;_<p;_++)for(let g=p;g<t;g++)m(_,g)}if(r==="diamond")for(let p=0;p<t-1;p+=3)m(p,p+1),m(p,p+2),m(p+1,p+3),m(p+2,p+3);if(r==="layered"){const p=Math.max(2,Math.ceil(Math.sqrt(t)));for(let _=0;_<t;_++)for(let g=_+1;g<t;g++)Math.floor(g/p)===Math.floor(_/p)+1&&(g%p===_%p||l()<.55)&&m(_,g)}if(r==="random")for(let p=0;p<t;p++)for(let _=p+1;_<t;_++)l()<.24&&m(p,_);if(r==="tree")for(let p=1;p<t;p++)m(Math.floor((p-1)/2),p);return{name:r,nodes:c,edges:f,seed:i,resources:{servers:ol.servers,channels:ol.channels}}}function Kc(){return{...Jv("forkjoin",8,70),name:"Shared network · fork and join",seed:ol.seed}}function dR(r,t){const i=Pr(r);if(!t||!Array.isArray(t.tasks)||!Array.isArray(t.flows))throw new Error("A schedule needs tasks and flows arrays.");if(t.tasks.length!==i.nodes.length)throw new Error("Schedule must contain every task exactly once.");const s=new Map(i.nodes.map(g=>[g.id,g])),l=new Map,c=Array.from({length:i.resources.servers},()=>[]),f=Array.from({length:i.resources.channels},()=>[]),d=(g,x)=>{if(!Number.isFinite(g.start)||!Number.isFinite(g.end)||g.start<-Sa||g.end<g.start-Sa)throw new Error(`${x} has an invalid interval.`)};for(const g of t.tasks){if(!s.has(g.id)||l.has(g.id))throw new Error("Schedule has an unknown or duplicate task.");if(Wn(g.resource,"Task server",0,c.length-1,!0),d(g,"Task"),Math.abs(g.end-g.start-s.get(g.id).duration)>Sa)throw new Error("A task duration differs from the input.");l.set(g.id,g),c[g.resource].push(g)}const m=new Map(i.edges.map(g=>[as(g),g])),p=new Map;for(const g of t.flows){const x=m.get(as(g));if(!x||p.has(as(g)))throw new Error("Schedule has an unknown or duplicate transfer.");const y=l.get(g.source),b=l.get(g.target);if(y.resource===b.resource)throw new Error("Co-located tasks must not emit a network transfer.");if(Wn(g.resource,"Transfer channel",0,f.length-1,!0),d(g,"Transfer"),Math.abs(g.end-g.start-x.duration)>Sa)throw new Error("A transfer duration differs from the input.");if(g.start<y.end-Sa||g.end>b.start+Sa)throw new Error("Transfer violates predecessor/consumer precedence.");p.set(as(g),g),x.duration>0&&f[g.resource].push(g)}for(const g of i.edges){const x=l.get(g.source),y=l.get(g.target);if(x.end>y.start+Sa)throw new Error("Task precedence is violated.");if(x.resource!==y.resource&&!p.has(as(g)))throw new Error("Every cross-server edge needs a transfer, including zero-duration edges.")}for(const g of[...c,...f]){const x=[...g].sort((y,b)=>y.start-b.start||y.end-b.end);for(let y=1;y<x.length;y++)if(x[y].start<x[y-1].end-Sa)throw new Error("Resource mutex violated: overlapping intervals.")}const _=Math.max(...t.tasks.map(g=>g.end));if(!Number.isFinite(t.completion_time)||Math.abs(_-t.completion_time)>Sa)throw new Error("Completion time must equal the last task end.");return!0}function Fs(r,t,i={},s=0){const l=Qv(i,r.resources);if(l.servers!==r.resources.servers||l.channels!==r.resources.channels)throw new Error("Accounting resources must match the scheduled resources.");if(typeof s!="number"||Number.isNaN(s))throw new Error("Ledger time must be a number.");const c=Math.max(0,Math.min(t.completion_time,s)),f=c>=t.completion_time,d=c*l.tuSeconds,m=l.pue*l.ci/36e5,p=Array.from({length:l.servers},(E,S)=>{const v=t.tasks.filter(O=>O.resource===S),L=sd(v.map(O=>Math.max(0,Math.min(c,O.end)-O.start)))*l.tuSeconds,N=f?null:v.find(O=>O.start<=c&&c<O.end)?.id??null,D=l.idleW*d+(l.busyW-l.idleW)*L;return{resource:S,carbonG:D*m,energyJ:D,powerW:f?0:N===null?l.idleW:l.busyW,activeTask:N,busySeconds:L,idleSeconds:Math.max(0,d-L)}}),_=l.networkW*d,g={carbonG:_*m,energyJ:_,powerW:f?0:l.networkW,activeFlows:f?[]:t.flows.filter(E=>E.start<=c&&c<E.end)},x=sd(p.map(E=>E.energyJ))+_,y=sd(p.map(E=>E.busySeconds))*(l.busyW-l.idleW)*m,b=(l.servers*l.idleW+l.networkW)*d*m;return{time:c,finished:f,totalG:x*m,totalJ:x,servers:p,network:g,fixedG:y,reservationG:b}}function pR(r={}){const t=r.nodes||[],i=new Map(t.map((y,b)=>[String(y.id),b])),s=t.map(()=>0),l=t.map(()=>[]);for(const y of r.edges||[]){const b=i.get(String(y.source)),E=i.get(String(y.target));b!==void 0&&E!==void 0&&(s[E]++,l[b].push(E))}const c=s.slice(),f=t.map(()=>0),d=t.map((y,b)=>b).filter(y=>c[y]===0),m=[];for(let y=0;y<d.length;y++){const b=d[y];m.push(b);for(const E of l[b])f[E]=Math.max(f[E],f[b]+1),--c[E]===0&&d.push(E)}t.forEach((y,b)=>{m.includes(b)||m.push(b)});const p=[];m.forEach(y=>(p[f[y]]||=[]).push(y));const _=Math.max(0,...p.map(y=>y?.length||0)),g=p.length<=7&&_<=6,x=new Map;if(g){const y=Math.max(1,p.length);p.forEach((b=[],E)=>{const S=b.length===6?10:8.75,v=b.length===6?5.75:4.1;b.forEach((L,N)=>{x.set(String(t[L].id),{x:y===1?0:(E/(y-1)-.5)*11.2,y:b.length===1?_===6?7.125:6.55:S-N/(b.length-1)*v,z:-.55,rank:E})})})}else{const y=Math.min(7,Math.max(2,Math.ceil(Math.sqrt(t.length*1.65)))),b=Math.ceil(t.length/y);m.forEach((E,S)=>{const v=Math.floor(S/y),L=v%2?y-1-S%y:S%y;x.set(String(t[E].id),{x:(L/Math.max(1,y-1)-.5)*11.2,y:b===1?6.55:8.75-v/(b-1)*4.1,z:-.55,rank:f[E]})})}return x}function mR(r){if(r===1)return[{x:0,z:2.4}];if(r===2)return[{x:-3.9,z:1.5},{x:3.9,z:1.5}];if(r===3)return[{x:-4.3,z:2},{x:0,z:-2.1},{x:4.3,z:2}];const t=Math.ceil(r/2),i=r-t;return Array.from({length:r},(s,l)=>{const c=l<t,f=c?t:i,d=c?l:l-t;return{x:f===1?0:(d/(f-1)-.5)*9.8,z:c?2.65:-2.3}})}const Ki=["#5fc9ba","#73a7ff","#e1b969","#b298e9","#e48d9a","#73c2df","#b1c47a","#de9a6f"],Or=(r,t,i)=>Math.min(i,Math.max(t,r)),pn=(r,t=0)=>Number.isFinite(Number(r))?Number(r):t,el=r=>pn(r)===0?"0.000":Math.abs(r)<.001?Number(r).toPrecision(2):Number(r).toFixed(r>=100?1:3),ba=r=>Number(pn(r).toFixed(2)).toString(),gR=r=>new W(r.x,r.y,r.z),$v=(r,t)=>Ki[Math.max(0,(r.nodes||[]).findIndex(i=>String(i.id)===String(t)))%Ki.length],tx=(r,t)=>({type:"task",id:r.id,duration:r.duration,resource:t?.resource??null,start:t?.start??null,end:t?.end??null});function _R({dag:r,result:t,ledger:i,lang:s,onSelect:l}){const c=s==="zh",f=new Map((t?.tasks||[]).map(d=>[String(d.id),d]));return R.jsxs("div",{className:"carbon-scene-fallback",children:[R.jsx("p",{children:c?"当前设备无法开启 3D，实时能耗与排放仍可查看。":"3D is unavailable on this device. Live energy and carbon remain available."}),R.jsxs("div",{className:"carbon-fallback-resources",children:[(i?.servers||[]).map(d=>R.jsxs("button",{onClick:()=>l?.({type:"server",resource:d.resource}),children:[R.jsxs("strong",{children:["VM ",d.resource+1]}),R.jsxs("span",{children:[el(d.carbonG)," gCO₂e"]}),R.jsxs("small",{children:[pn(d.powerW).toFixed(0)," W · ",d.activeTask!=null?`T${d.activeTask}`:i?.finished?c?"已释放":"Released":c?"空闲":"Idle"]})]},d.resource)),R.jsxs("div",{children:[R.jsx("strong",{children:c?"网络":"Network"}),R.jsxs("span",{children:[el(i?.network?.carbonG)," gCO₂e"]}),R.jsxs("small",{children:[pn(i?.network?.powerW).toFixed(0)," W"]})]})]}),R.jsx("div",{className:"carbon-fallback-tasks",children:(r?.nodes||[]).map(d=>{const m=f.get(String(d.id)),p=m&&i?.time>=m.end?"done":m&&i?.time>=m.start?"running":"waiting";return R.jsxs("button",{"data-state":p,style:{"--task-color":$v(r,d.id)},onClick:()=>l?.(tx(d,m)),children:["T",d.id,R.jsx("small",{children:m?`${ba(m.start)}–${ba(m.end)} tu · VM ${m.resource+1}`:`${ba(d.duration)} tu`})]},d.id)})})]})}function vR({dag:r,result:t,config:i,time:s=0,playing:l=!1,lang:c="zh",showAssignments:f=!0,smoke:d=!0,resetKey:m=0,onSelect:p,comparisonEndTime:_}){const g=oe.useRef(null),x=oe.useRef(null),[y,b]=oe.useState(!1),[E,S]=oe.useState(!1),v=oe.useMemo(()=>t?Fs(r,t,i,s):null,[r,t,i,s]),L=oe.useRef(null);L.current={dag:r,result:t,config:i,time:s,playing:l,lang:c,showAssignments:f,smoke:d,onSelect:p,ledger:v,comparisonEndTime:_};const N=Or(Math.floor(pn(i?.servers,r?.resources?.servers||1)),1,8),D=Or(Math.floor(pn(i?.channels,r?.resources?.channels||1)),1,16);oe.useEffect(()=>{const I=g.current;if(!I||!r)return;b(!1),S(!1);let F;try{F=new KA({antialias:!0,alpha:!1,powerPreference:"low-power"}),F.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),F.setClearColor("#060e19"),F.outputColorSpace=Si,I.appendChild(F.domElement)}catch{b(!0);return}const j=F.domElement;j.setAttribute("aria-label",c==="zh"?"任务 DAG、虚拟机和网络的交互式 3D 场景":"Interactive 3D task DAG, virtual machines and network");const w=new ZM;w.fog=new up("#060e19",29,54);const U=new Mi(39,1,.1,100),V=new JA(U,j);V.enableDamping=!0,V.dampingFactor=.09,V.enablePan=!0,V.screenSpacePanning=!0,V.minPolarAngle=.36,V.maxPolarAngle=Math.PI*.52,V.rotateSpeed=.55,V.zoomSpeed=.7,V.target.set(0,4.1,0);const K=()=>{const Ft=Math.max(.45,I.clientWidth/Math.max(1,I.clientHeight)),bt=Math.max(20,20/Ft);V.target.set(0,4.1,0),U.position.set(.25,4.1+bt*.21,bt),V.minDistance=8,V.maxDistance=Math.max(54,bt*2.5),V.update()};x.current={reset:K,zoom:Ft=>{U.position.sub(V.target).multiplyScalar(Ft).add(V.target),V.update()}},w.add(new sE("#c7e5ff","#101b31",2.5));const ct=new cE("#adcbff",3.1);ct.position.set(-5,12,10),w.add(ct);const ht=new oE("#53ecc0",18,18);ht.position.set(0,2.8,1),w.add(ht);const ft=new Tn(new dl(14.6,8.6),new Xc({color:"#0b1c2c",metalness:.18,roughness:.85,transparent:!0,opacity:.85}));ft.rotation.x=-Math.PI/2,ft.position.y=-.12,w.add(ft);const B=new hE(14,14,"#214957","#142b3c");B.position.y=-.1,B.material.transparent=!0,B.material.opacity=.56,w.add(B);const at=new Fv(new eE(new Hi(14.6,.12,8.6)),new kr({color:"#32667a",transparent:!0,opacity:.65}));at.position.y=-.17,w.add(at);const Z=document.createElement("div");Z.className="carbon-world-overlay",I.appendChild(Z);const Et=[],P=[],et=(Ft,bt,xe,Ye)=>{const Ee=document.createElement(Ye?"button":"div");Ee.className=`carbon-world-label ${Ft}`,Ee.innerHTML=xe,Ye&&(Ee.type="button",Ee.addEventListener("click",()=>L.current.onSelect?.(Ye))),Z.appendChild(Ee);const Be={element:Ee,point:bt,width:0,height:0};return Et.push(Be),Be},Mt=pR(r),yt=new Map((t?.tasks||[]).map(Ft=>[String(Ft.id),Ft])),zt=new Map((t?.flows||[]).map(Ft=>[`${Ft.source}:${Ft.target}`,Ft])),Wt=mR(N),it=[],_t=new Map,Ut=new pp(.26,0),ne=new cu(.35,.018,5,24),Vt=new Br;w.add(Vt);const ae=[],Ke=[];for(const[Ft,bt]of(r.nodes||[]).entries()){const xe=Mt.get(String(bt.id));if(!xe)continue;const Ye=Ki[Ft%Ki.length],Ee=tx(bt,yt.get(String(bt.id))),Be=new Tn(Ut,new Xc({color:Ye,emissive:Ye,emissiveIntensity:.15,roughness:.55,metalness:.25}));Be.position.copy(gR(xe)),Be.userData.selection=Ee,w.add(Be),P.push(Be);const Qe=new Tn(ne,new Zi({color:Ye,transparent:!0,opacity:.25}));Qe.position.copy(Be.position),w.add(Qe);const je=et("carbon-task-label",Be.position.clone().add(new W(0,.13,.05)),"<strong></strong><small></small>",Ee);je.element.style.setProperty("--task-color",Ye),je.element.dataset.task=String(bt.id),je.element.querySelector("strong").textContent=`T${bt.id}`,je.element.querySelector("small").textContent=`${ba(bt.duration)} tu`;const He={node:bt,mesh:Be,ring:Qe,label:je,color:Ye,row:yt.get(String(bt.id)),state:""};it.push(He),_t.set(String(bt.id),He);const Ge=Wt[He.row?.resource];if(Ge){const Xe=[Be.position.clone().add(new W(0,-.3,0)),new W(Ge.x,1.05,Ge.z)],ee=new nu(new Nn().setFromPoints(Xe),new aE({color:Ye,transparent:!0,opacity:.12,dashSize:.1,gapSize:.13,depthWrite:!1}));ee.computeLineDistances(),Vt.add(ee),ae.push({line:ee,task:He})}}for(const[Ft,bt]of(r.edges||[]).entries()){const xe=_t.get(String(bt.source)),Ye=_t.get(String(bt.target));if(!xe||!Ye)continue;const Ee=xe.mesh.position.clone(),Be=Ye.mesh.position.clone(),Qe=Be.clone().sub(Ee).normalize();Ee.addScaledVector(Qe,.3),Be.addScaledVector(Qe,-.38);const je=new nu(new Nn().setFromPoints([Ee,Be]),new kr({color:"#6e91af",transparent:!0,opacity:.35,depthWrite:!1})),He=new Tn(new hp(.052,.16,5),new Zi({color:"#6e91af",transparent:!0,opacity:.65}));He.position.copy(Be),He.quaternion.setFromUnitVectors(new W(0,1,0),Qe),w.add(je,He);let Ge=null;if((r.edges||[]).length<=16){const Xe=r.edges.filter(X=>String(X.source)===String(bt.source)).length,ee=r.edges.filter(X=>String(X.target)===String(bt.target)).length,Cn=(Xe>ee?.6:ee>Xe?.4:.5)+(Ft%3-1)*.01,T=xe.mesh.position.clone().lerp(Ye.mesh.position,Cn);T.y+=.13,T.z+=.06,Ge=et("carbon-edge-label",T,"<span></span>"),Ge.element.querySelector("span").textContent=`${ba(bt.duration)} tu`,Ge.element.dataset.edge=`${bt.source}:${bt.target}`,Ge.element.title=`T${bt.source} → T${bt.target} · ${ba(bt.duration)} tu`,Ge.element.setAttribute("aria-label",Ge.element.title)}Ke.push({edge:bt,line:je,arrow:He,label:Ge})}const G=new Br;G.position.set(0,.55,0);const Ie=new Tn(new fu(.64,.72,.35,6),new Xc({color:"#153849",metalness:.65,roughness:.3,emissive:"#2b6080",emissiveIntensity:.3})),he=new Tn(new cu(.84,.035,6,40),new Zi({color:"#73a7ff",transparent:!0,opacity:.6}));he.rotation.x=Math.PI/2,G.add(Ie,he),w.add(G);const se=et("carbon-hub-label",new W(2.3,1.7,.2),"<strong></strong><span></span><small></small>"),It=new Tn(new Hi(.15,1,.15),new Zi({color:"#73a7ff",transparent:!0,opacity:.8}));It.position.set(.96,.2,0),w.add(It);const we=[],qt=[],ge=new Hi(1.05,.88,.85),tn=new Hi(.7,.045,.025),en=new Hi(.14,1,.14);Wt.forEach((Ft,bt)=>{const xe=new Tn(ge,new Xc({color:"#203c52",metalness:.45,roughness:.48,emissive:"#132432",emissiveIntensity:.4}));xe.position.set(Ft.x,.45,Ft.z),xe.userData.selection={type:"server",resource:bt},w.add(xe),P.push(xe);const Ye=[];for(let je=0;je<4;je++){const He=new Tn(tn,new Zi({color:"#2e6270",transparent:!0,opacity:.8}));He.position.set(Ft.x,.2+je*.15,Ft.z+.438),w.add(He),Ye.push(He)}const Ee=new Tn(new Hi(.85,.025,.64),new Zi({color:"#17374b"}));Ee.position.set(Ft.x,.903,Ft.z),w.add(Ee);const Be=new Tn(en,new Zi({color:"#e1b969",transparent:!0,opacity:.92}));Be.position.set(Ft.x+.72,0,Ft.z),w.add(Be);const Qe=et("carbon-server-label",new W(Ft.x,0,Ft.z+.72),"<strong></strong><span></span><small></small>",{type:"server",resource:bt});Qe.element.dataset.resource=String(bt),Qe.element.querySelector("strong").textContent=`VM ${bt+1}`,we.push({resource:bt,position:Ft,body:xe,slits:Ye,bar:Be,label:Qe});for(let je=0;je<D;je++){const He=(je-(D-1)/2)*Math.min(.08,.45/D),Ge=new W(-Ft.z,0,Ft.x).normalize().multiplyScalar(He),Xe=new W(Ft.x,.32,Ft.z).add(Ge),ee=new W(0,.56,0).add(Ge),Cn=new kr({color:Ki[je%Ki.length],transparent:!0,opacity:.12,depthWrite:!1}),T=new nu(new Nn().setFromPoints([Xe,ee]),Cn);w.add(T),qt.push({resource:bt,channel:je,line:T,start:Xe,end:ee})}});const z=new mp(.055,6,4),A=Array.from({length:D*3},(Ft,bt)=>{const xe=new Tn(z,new Zi({color:Ki[Math.floor(bt/3)%Ki.length]}));return xe.visible=!1,w.add(xe),xe}),$=document.createElement("canvas");$.width=$.height=32;const ot=$.getContext("2d"),gt=ot.createRadialGradient(16,16,0,16,16,16);gt.addColorStop(0,"rgba(207,231,236,.85)"),gt.addColorStop(.3,"rgba(174,200,216,.5)"),gt.addColorStop(1,"rgba(152,176,199,0)"),ot.fillStyle=gt,ot.fillRect(0,0,32,32);const dt=new tE($),Nt=[...Wt.map(Ft=>({...Ft,y:.98})),{x:0,z:0,y:.95}].map((Ft,bt)=>{const xe=new Float32Array(126),Ye=new Nn;Ye.setAttribute("position",new ki(xe,3).setUsage(yM));const Ee=new Hv({map:dt,color:"#b8ccd4",size:.58,transparent:!0,opacity:.23,depthWrite:!1,sizeAttenuation:!0}),Be=new $M(Ye,Ee);return Be.frustumCulled=!1,w.add(Be),{points:Be,data:xe,position:Ft,index:bt}});let Ct=null;const kt=new fE,Xt=new ve,At=Ft=>{Ft.button===0&&(Ct=[Ft.clientX,Ft.clientY])},Bt=Ft=>{if(!Ct||Ft.button!==0||Math.hypot(Ft.clientX-Ct[0],Ft.clientY-Ct[1])>5){Ct=null;return}Ct=null;const bt=j.getBoundingClientRect();Xt.set((Ft.clientX-bt.left)/bt.width*2-1,-(Ft.clientY-bt.top)/bt.height*2+1),kt.setFromCamera(Xt,U);const xe=kt.intersectObjects(P,!1)[0];xe&&L.current.onSelect?.(xe.object.userData.selection)},$t=()=>{Ct=null},Kt=Ft=>{Ft.preventDefault(),b(!0)};j.addEventListener("pointerdown",At),j.addEventListener("pointerup",Bt),j.addEventListener("pointercancel",$t),j.addEventListener("webglcontextlost",Kt);let Dt=0,de=0,Y=!0,wt=!0,Lt=1;const jt=()=>{if(Dt=I.clientWidth,de=I.clientHeight,!Dt||!de)return;F.setSize(Dt,de,!1),U.aspect=Dt/de,U.updateProjectionMatrix(),wt=!0;const Ft=Math.max(1,1/U.aspect);Y?(K(),Y=!1):Ft!==Lt&&U.position.sub(V.target).multiplyScalar(Ft/Lt).add(V.target),Lt=Ft,Et.forEach(bt=>{bt.width=bt.element.offsetWidth,bt.height=bt.element.offsetHeight})},Rt=new ResizeObserver(jt);Rt.observe(I),jt();let vt,Zt=performance.now(),le=.8,Ce=null,Q=null,Yt=null,Ht=null,re=null;const ce=new W,Ue=Ft=>{if(vt=requestAnimationFrame(Ue),F.getContext().isContextLost())return;const bt=L.current,xe=Math.min(.05,Math.max(0,(Ft-Zt)/1e3));Zt=Ft,bt.playing&&(le+=xe);const Ye=V.update(),Ee=bt.ledger,Be=Ee!==Ce||bt.lang!==Q||bt.showAssignments!==Yt||bt.comparisonEndTime!==re;if(!bt.playing&&!Ye&&!wt&&!Be&&bt.smoke===Ht)return;Ht=bt.smoke,wt=!1,U.updateMatrixWorld();const Qe=pn(Ee?.time,Math.min(pn(bt.time),pn(bt.result?.completion_time))),je=pn(bt.result?.completion_time),He=Ee?.finished??Qe>=je,Ge=He?[]:Ee?.network?.activeFlows||[];if(Vt.visible=bt.showAssignments,Be){Ce=Ee,Q=bt.lang,Yt=bt.showAssignments,re=bt.comparisonEndTime;const ee=bt.lang==="zh";j.setAttribute("aria-label",ee?"任务 DAG、虚拟机和网络的交互式 3D 场景":"Interactive 3D task DAG, virtual machines and network");const Cn=new Set(Ge.map(k=>`${k.source}:${k.target}`));it.forEach(k=>{const{row:pt,node:Tt,mesh:Pt,ring:Ot,label:Qt,color:fe}=k,Se=(r.edges||[]).filter(Ze=>String(Ze.target)===String(Tt.id)).every(Ze=>{const We=yt.get(String(Ze.source)),ye=zt.get(`${Ze.source}:${Ze.target}`);return We&&We.end<=Qe&&(!ye||ye.end<=Qe)}),Me=pt&&Qe>=pt.end?"done":pt&&Qe>=pt.start&&Qe<pt.end?"running":Se?"ready":"waiting";k.state=Me,Pt.material.color.set(Me==="waiting"?"#34495f":fe),Pt.material.emissive.set(fe),Pt.material.emissiveIntensity=Me==="running"?.72:Me==="done"?.25:.07,Ot.material.opacity=Me==="running"?.9:Me==="done"?.6:.2,Qt.element.dataset.state=Me,Qt.element.title=`T${Tt.id} · ${ba(Tt.duration)} tu · ${ee?{waiting:"等待前序",ready:"就绪",running:"运行中",done:"完成"}[Me]:Me}${pt?` · VM ${pt.resource+1} · ${ba(pt.start)}–${ba(pt.end)} tu`:""}`,Qt.element.setAttribute("aria-label",Qt.element.title)}),ae.forEach(({line:k,task:pt})=>{k.material.opacity=pt.state==="running"?.6:pt.state==="done"?.09:.11,k.material.dashSize=pt.state==="running"?.17:.1}),Ke.forEach(({edge:k,line:pt,arrow:Tt,label:Pt})=>{const Ot=Cn.has(`${k.source}:${k.target}`),Qt=Ot?"#73a7ff":"#6e91af";pt.material.color.set(Qt),Tt.material.color.set(Qt),pt.material.opacity=Ot?.95:.3,Pt&&(Pt.element.dataset.state=Ot?"active":"idle")});const T=Math.max(je,pn(bt.comparisonEndTime,je),.1),X=pn(bt.config?.tuSeconds,1)*pn(bt.config?.pue,1)*pn(bt.config?.ci,0)/36e5,rt=Math.max(1e-8,Math.max(pn(bt.config?.busyW),pn(bt.config?.idleW),pn(bt.config?.networkW))*T*X);we.forEach(k=>{const pt=Ee?.servers?.find(Qt=>Qt.resource===k.resource),Tt=pt?.activeTask!=null&&!He,Pt=Tt?$v(r,pt.activeTask):"#294c62";k.body.material.color.set(Tt?Pt:He?"#203044":"#203c52"),k.body.material.emissive.set(Pt),k.body.material.emissiveIntensity=Tt?.3:.04,k.slits.forEach(Qt=>{Qt.material.color.set(Tt?Pt:"#396070"),Qt.material.opacity=He?.35:Tt?1:.6});const Ot=Or(pn(pt?.carbonG)/rt,0,1)*1.75;k.bar.visible=Ot>.002,k.bar.scale.y=Math.max(.002,Ot),k.bar.position.y=Ot/2,k.label.element.dataset.state=Tt?"running":He?"released":"idle",k.label.element.style.setProperty("--task-color",Pt),k.label.element.querySelector("span").textContent=`${el(pt?.carbonG)} gCO₂e`,k.label.element.querySelector("small").textContent=`${pn(pt?.powerW).toFixed(0)} W · ${Tt?`T${pt.activeTask}`:He?ee?"已释放":"Released":ee?"空闲":"Idle"}`,k.label.element.title=`VM ${k.resource+1} · ${el(pt?.carbonG)} gCO₂e · ${pn(pt?.energyJ).toFixed(1)} J`}),se.element.querySelector("strong").textContent=ee?`网络 · ${D} 通道`:`Network · ${D} ch`,se.element.querySelector("span").textContent=`${el(Ee?.network?.carbonG)} gCO₂e`,se.element.querySelector("small").textContent=`${pn(Ee?.network?.powerW).toFixed(0)} W · ${He?ee?"已释放":"Released":Ge.length?ee?`${Ge.length} 传输`:`${Ge.length} flows`:ee?"已预留":"Reserved"}`;const tt=Or(pn(Ee?.network?.carbonG)/rt,0,1)*1.75;It.visible=tt>.002,It.scale.y=Math.max(.002,tt),It.position.y=tt/2,he.material.opacity=He?.2:Ge.length?1:.45,qt.forEach(k=>{const pt=Ge.some(Tt=>Tt.resource===k.channel&&[yt.get(String(Tt.source))?.resource,yt.get(String(Tt.target))?.resource].includes(k.resource));k.line.material.opacity=pt?.85:.11}),Et.forEach(k=>{k.width=k.element.offsetWidth,k.height=k.element.offsetHeight})}it.forEach(ee=>{ee.ring.quaternion.copy(U.quaternion),ee.state==="running"?(ee.mesh.rotation.y=le*.85,ee.ring.scale.setScalar(1+Math.sin(le*4)*.1)):ee.ring.scale.setScalar(1)}),A.forEach((ee,Cn)=>{const T=Ge[Math.floor(Cn/3)],X=T&&Wt[yt.get(String(T.source))?.resource],rt=T&&Wt[yt.get(String(T.target))?.resource];if(ee.visible=!!(T&&X&&rt),!ee.visible)return;const tt=((Qe-T.start)/Math.max(1e-4,T.end-T.start)+Cn%3*.18)%1,k=pn(T.resource),pt=qt.find(Pt=>Pt.resource===yt.get(String(T.source))?.resource&&Pt.channel===k),Tt=qt.find(Pt=>Pt.resource===yt.get(String(T.target))?.resource&&Pt.channel===k);if(!pt||!Tt){ee.visible=!1;return}tt<.5?ee.position.lerpVectors(pt.start,pt.end,tt*2):ee.position.lerpVectors(Tt.end,Tt.start,(tt-.5)*2),ee.position.y+=.045,ee.material.color.set(Ki[k%Ki.length])}),Nt.forEach(ee=>{const Cn=ee.index===N,T=Ee?.servers?.find(tt=>tt.resource===ee.index),X=Cn?Ge.length>0:T?.activeTask!=null;if(ee.points.visible=bt.smoke&&!He&&(Cn?X&&pn(Ee?.network?.powerW)>0:pn(T?.powerW)>0),!ee.points.visible)return;const rt=X?42:13;ee.points.geometry.setDrawRange(0,rt),ee.points.material.opacity=X?.32:.15,ee.points.material.size=X?.66:.39;for(let tt=0;tt<rt;tt++){const k=(le*(X?.33:.18)+tt/rt+ee.index*.117)%1,pt=tt*2.399+ee.index,Tt=.1+k*(X?.48:.23);ee.data[tt*3]=ee.position.x+Math.cos(pt)*Tt+k*.25,ee.data[tt*3+1]=ee.position.y+k*(X?1.55:.85),ee.data[tt*3+2]=ee.position.z+Math.sin(pt)*Tt}ee.points.geometry.attributes.position.needsUpdate=!0});const Xe=[];Et.forEach(ee=>{ce.copy(ee.point).project(U);const Cn=ce.z>=-1&&ce.z<=1&&Math.abs(ce.x)<1.16&&Math.abs(ce.y)<1.16;if(ee.element.style.visibility=Cn?"visible":"hidden",!Cn)return;let T=(ce.x*.5+.5)*Dt,X=(-ce.y*.5+.5)*de;const rt=(ee.width||55)/2,tt=ee.height||28;T=Or(T,rt+4,Math.max(rt+4,Dt-rt-4));for(let k=0;k<4&&Xe.some(Tt=>T+rt>Tt.left&&T-rt<Tt.right&&X+tt>Tt.top&&X<Tt.bottom);k++)X+=k%2?-tt*2:tt;X=Or(X,32,Math.max(32,de-tt-20)),Xe.push({left:T-rt,right:T+rt,top:X,bottom:X+tt}),ee.element.style.transform=`translate3d(${Math.round(T)}px,${Math.round(X)}px,0) translateX(-50%)`}),F.render(w,U)};return vt=requestAnimationFrame(Ue),S(!0),()=>{cancelAnimationFrame(vt),Rt.disconnect(),V.dispose(),x.current=null,j.removeEventListener("pointerdown",At),j.removeEventListener("pointerup",Bt),j.removeEventListener("pointercancel",$t),j.removeEventListener("webglcontextlost",Kt);const Ft=new Set,bt=new Set;w.traverse(xe=>{xe.geometry&&Ft.add(xe.geometry),xe.material&&(Array.isArray(xe.material)?xe.material:[xe.material]).forEach(Ye=>bt.add(Ye))}),Ft.forEach(xe=>xe.dispose()),bt.forEach(xe=>xe.dispose()),dt.dispose(),F.dispose(),F.forceContextLoss(),j.remove(),Z.remove()}},[r,t,N,D]),oe.useEffect(()=>{x.current?.reset()},[m]);const O=c==="zh";return R.jsxs("div",{className:"carbon-scene","data-renderer":y?"fallback":E?"webgl":"loading",children:[R.jsx("div",{className:"carbon-scene-stage",ref:g,"aria-hidden":y||void 0}),y?R.jsx(_R,{dag:r,result:t,ledger:v,lang:c,onSelect:p}):R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"carbon-scene-key",children:[R.jsxs("span",{children:[R.jsx("i",{}),O?"任务 DAG":"Task DAG"]}),R.jsx("small",{children:O?"时长 · tu":"Duration · tu"})]}),R.jsxs("div",{className:"carbon-scene-controls","aria-label":O?"3D 视角控制":"3D camera controls",children:[R.jsx("button",{type:"button",onClick:()=>x.current?.zoom(.82),title:O?"放大":"Zoom in","aria-label":O?"放大 3D 场景":"Zoom in 3D scene",children:"＋"}),R.jsx("button",{type:"button",onClick:()=>x.current?.zoom(1.22),title:O?"缩小":"Zoom out","aria-label":O?"缩小 3D 场景":"Zoom out 3D scene",children:"−"}),R.jsx("button",{type:"button",onClick:()=>x.current?.reset(),title:O?"重置视角":"Reset view","aria-label":O?"重置 3D 视角":"Reset 3D view",children:"↺"})]}),R.jsx("div",{className:"carbon-scene-caption",children:O?"拖动旋转 · 滚轮缩放 · 点击查看":"Drag to orbit · Scroll to zoom · Click to inspect"}),R.jsx("div",{className:"carbon-scene-smoke-note",children:O?"烟雾表示功率状态":"Plumes indicate power state"})]})]})}const mv=["#5fc9ba","#73a7ff","#e1b969","#b298e9","#e48d9a","#73c2df","#b1c47a","#de9a6f"],$d=(r,t)=>mv[(t?Math.max(0,t.nodes.findIndex(i=>i.id===r)):Number(r))%mv.length],xn=(r,t=2)=>Number.isFinite(r)?Number(r).toFixed(t):"—";function xR(r,t=6){const i=Math.max(1e-4,r/t),s=10**Math.floor(Math.log10(i)),l=[1,2,5,10].find(c=>c*s>=i)*s;return Array.from({length:Math.floor(r/l)+1},(c,f)=>+(f*l).toFixed(6))}function yR({dag:r,result:t,time:i,maxTime:s,lang:l,onSeek:c}){const f=r.resources.servers+r.resources.channels,d=640,m=55,p=16,_=f*25+32,g=(d-m-p)/s,x=Math.min(i,t.completion_time),y=l==="zh",b=[...t.tasks.map(E=>({...E,row:E.resource,label:`T${E.id}`,col:$d(E.id,r)})),...t.flows.filter(E=>E.end>E.start).map(E=>({...E,row:r.resources.servers+E.resource,label:`${E.source}→${E.target}`,col:$d(E.target,r)}))];return R.jsxs("svg",{className:"gantt",viewBox:`0 0 ${d} ${_}`,role:"img","aria-label":y?"计算与网络甘特图，点击可定位时间":"Compute and network Gantt, click to seek",onClick:E=>{const S=E.currentTarget.getBoundingClientRect(),v=(E.clientX-S.left)/S.width*d;c?.(Math.max(0,Math.min(s,(v-m)/g)))},children:[Array.from({length:f},(E,S)=>R.jsxs("g",{children:[R.jsx("text",{x:"2",y:S*25+17,className:"axis-label",children:S<r.resources.servers?`VM${S+1}`:`CH${S-r.resources.servers+1}`}),R.jsx("rect",{x:m,y:S*25+3,width:t.completion_time*g,height:"20",rx:"2",fill:"#172c39"})]},S)),xR(s).map(E=>R.jsxs("g",{children:[R.jsx("line",{x1:m+E*g,x2:m+E*g,y1:"0",y2:_-22,stroke:"#2b3e4d",strokeDasharray:"2 4"}),R.jsx("text",{x:m+E*g,y:_-6,textAnchor:"middle",className:"axis-label",children:E})]},E)),b.map((E,S)=>R.jsxs("g",{children:[R.jsx("rect",{x:m+E.start*g,y:E.row*25+3,width:Math.max(.4,(E.end-E.start)*g),height:"20",rx:"3",fill:E.col,opacity:E.start>=x?.28:.92}),x>E.start&&x<E.end&&R.jsx("rect",{x:m+x*g,y:E.row*25+3,width:(E.end-x)*g,height:"20",fill:"#08131e",opacity:".6"}),(E.end-E.start)*g>19&&R.jsx("text",{x:m+(E.start+E.end)/2*g,y:E.row*25+17,textAnchor:"middle",className:"task-label",children:E.label}),R.jsxs("title",{children:[E.label," · ",xn(E.start),"–",xn(E.end)," tu"]})]},S)),R.jsx("line",{x1:m+x*g,x2:m+x*g,y1:"0",y2:_-23,stroke:"#f9d284",strokeWidth:"2"}),R.jsx("text",{x:d-1,y:_-6,textAnchor:"end",className:"axis-label",children:"tu"})]})}function SR({dag:r,result:t,config:i,time:s,maxTime:l,maxCarbon:c,lang:f}){const y=569/l,b=77/Math.max(c,1e-5),E=Array.from(new Set([0,t.completion_time,...t.tasks.flatMap(D=>[D.start,D.end])])).sort((D,O)=>D-O),S=Math.min(s,t.completion_time),v=[...E.filter(D=>D<S),S],L=[...E,l],N=D=>D.map((O,I)=>`${I?"L":"M"}${55+O*y},${86-Fs(r,t,i,O).totalG*b}`).join(" ");return R.jsxs("svg",{className:"carbon-curve",viewBox:"0 0 640 111",role:"img","aria-label":f==="zh"?"累计碳排放随时间变化":"Cumulative operational carbon over time",children:[[0,.5,1].map(D=>R.jsxs("g",{children:[R.jsx("line",{x1:55,x2:624,y1:86-77*D,y2:86-77*D,stroke:"#20333f",strokeDasharray:"2 4"}),R.jsx("text",{x:47,y:86-77*D+4,textAnchor:"end",className:"axis-label",children:xn(c*D,2)})]},D)),R.jsx("path",{d:N(L),fill:"none",stroke:"#60dbc2",strokeWidth:"1.3",opacity:".2",strokeDasharray:"4 4"}),R.jsx("path",{d:`${N(v)} L${55+S*y},86 L55,86 Z`,fill:"#58cfb5",opacity:".08"}),R.jsx("path",{d:N(v),fill:"none",stroke:"#66e3c4",strokeWidth:"2.5"}),R.jsx("line",{x1:55+S*y,x2:55+S*y,y1:9,y2:86,stroke:"#f9d284",strokeDasharray:"3 3"}),R.jsx("circle",{cx:55+S*y,cy:86-Fs(r,t,i,S).totalG*b,r:"3.5",fill:"#b9ffeb"}),R.jsx("text",{x:55,y:"105",className:"axis-label",children:"0"}),R.jsxs("text",{x:624,y:"105",textAnchor:"end",className:"axis-label",children:[xn(l,1)," tu"]})]})}function MR({ledger:r,config:t,lang:i}){const s=t.pue*t.ci/36e5,l=r.servers.reduce((_,g)=>_+(g.busySeconds+g.idleSeconds)*t.idleW*s,0),c=r.servers.reduce((_,g)=>_+g.busySeconds*(t.busyW-t.idleW)*s,0),f=r.network.carbonG,d=Math.max(r.totalG,1e-12),m=i==="zh",p=[[m?"计算增量":"Compute",c,"#67d8c1"],[m?"VM 基础功耗":"VM baseline",l,"#749fdb"],[m?"网络预留":"Network",f,"#c4a2e9"]];return R.jsxs("div",{className:"breakdown",children:[R.jsx("div",{className:"stacked-bar",children:p.map(([_,g,x])=>R.jsx("span",{style:{width:`${g/d*100}%`,background:x},title:`${_}: ${xn(g,4)} gCO₂e`},_))}),R.jsx("div",{className:"breakdown-values",children:p.map(([_,g,x])=>R.jsxs("span",{children:[R.jsx("i",{style:{background:x}}),_,R.jsx("b",{children:xn(g,3)})]},_))})]})}const ER=[["demo","Presentation example","演示样例"],["mapreduce","MapReduce","映射与汇聚"],["forkjoin","Fork–join","并行与汇合"],["layered","Layered workflow","分层工作流"],["diamond","Diamond","菱形依赖"],["pipeline","Pipeline","串行流水线"],["tree","Tree","树状任务"],["random","Random DAG","随机 DAG"],["independent","Independent batch","独立任务批次"]],zr={list:["List scheduling","List 调度","#77aafa"],random:["Random scheduling","随机调度","#c5a5f6"],aware:["Network-aware List","通信感知 List","#efc17a"],reserve:["CARE Reserve search","CARE 预留搜索","#61e2bd"],milp:["Exact MILP · GLPK","精确 MILP · GLPK","#e692aa"],serial:["Serial scheduling","串行调度","#8ea5b7"]},Jo=["list","random","aware","reserve","milp","serial"],rd={...ol,servers:3,channels:2,idleW:70,busyW:320,networkW:25,pue:1.2,ci:400,tuSeconds:1,seed:12,milpTimeLimit:5},od=r=>JSON.parse(JSON.stringify(r));function Fi({label:r,value:t,onChange:i,min:s,max:l,step:c=1,suffix:f}){return R.jsxs("label",{className:"field",children:[R.jsx("span",{children:r}),R.jsxs("div",{children:[R.jsx("input",{type:"number",value:t,min:s,max:l,step:c,onChange:d=>i(d.target.value===""?"":Number(d.target.value))}),f&&R.jsx("small",{children:f})]})]})}function Ma({label:r,children:t,...i}){return R.jsx("button",{className:"icon-button",title:r,"aria-label":r,...i,children:t})}function bR({id:r,dag:t,result:i,config:s,time:l,playing:c,maxTime:f,maxCarbon:d,lang:m,showAssignments:p,smoke:_,resetKey:g,onSeek:x}){const y=m==="zh",b=zr[r],E=i?Fs(t,i,s,l):null,S=E?.finished,v=i?.status,L=i?Fs(t,i,s,i.completion_time):null,[N,D]=oe.useState(null),O=N?.type==="task"?i?.tasks.find(I=>I.id===N.id):null;return R.jsxs("article",{className:`method-card ${S?"is-complete":""}`,style:{"--method":b[2]},"aria-label":b[y?1:0],children:[R.jsxs("header",{className:"method-card-head",children:[R.jsxs("div",{children:[R.jsx("i",{className:"method-dot"}),R.jsx("h2",{children:b[y?1:0]})]}),R.jsx("span",{className:`status ${S?"done":""}`,children:i?S?R.jsxs(R.Fragment,{children:[R.jsx(_v,{size:11}),y?"作业完成":"Completed"]}):l>0?R.jsxs(R.Fragment,{children:[R.jsx(_S,{size:11}),y?"执行中":"Executing"]}):y?"就绪":"Ready":y?"等待调度":"Pending"})]}),i?R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"card-metrics",children:[R.jsxs("div",{className:"carbon-total",children:[R.jsx("span",{children:y?"累计碳排放":"Cumulative carbon"}),R.jsxs("strong",{children:[xn(E.totalG,3),R.jsx("small",{children:"gCO₂e"})]})]}),R.jsxs("div",{className:"schedule-time",children:[R.jsx("span",{children:y?"作业完成时间":"Job completion time"}),R.jsxs("strong",{children:[xn(i.completion_time,1),R.jsx("small",{children:"tu"})]})]})]}),R.jsxs("div",{className:"method-subline",children:[R.jsxs("span",{children:[y?"最终":"Final"," ",xn(L.totalG,3)," gCO₂e"]}),R.jsxs("span",{children:[y?"算法运行":"Algorithm"," ",xn(i.runtime_ms,1)," ms"]})]}),R.jsx("div",{className:"certificate",children:v==="imported"?y?"导入方案 · 已验证可行性，最优性未经重新验证":"Imported · feasibility checked; optimality unverified":r==="milp"?v==="optimal"?y?"已证明全局最优（数值容差内）":"Global optimum certified within solver tolerances":v==="fallback"?y?"启发式回退 · 无最优性证明":"Heuristic fallback · no optimality certificate":y?"限时可行方案 · 尚未证明最优":"Time-limited feasible schedule · not certified":y?"可行启发式调度":"Feasible heuristic schedule"}),R.jsx(vR,{dag:t,result:i,config:s,time:l,playing:c,lang:m,showAssignments:p,smoke:_,resetKey:g,comparisonEndTime:f,onSelect:D}),R.jsxs("div",{className:"scene-readout",children:[N?.type==="server"?R.jsxs("span",{children:["VM",N.resource+1," · ",xn(E.servers[N.resource]?.powerW,0)," W · ",xn(E.servers[N.resource]?.carbonG,4)," gCO₂e"]}):O?R.jsxs("span",{children:["LLM T",O.id," · VM",O.resource+1," · ",xn(O.start,1),"–",xn(O.end,1)," tu"]}):R.jsx("span",{children:y?"拖动旋转 · 滚轮缩放 · 点击任务或 VM":"Drag to orbit · scroll to zoom · click a task or VM"}),R.jsx("span",{children:S?y?"资源已释放":"Released":`${Math.min(l,i.completion_time).toFixed(1)} tu`})]}),R.jsxs("div",{className:"chart-section",children:[R.jsxs("div",{className:"chart-label",children:[R.jsx("span",{children:y?"计算 / 传输调度":"COMPUTE / TRANSFER SCHEDULE"}),R.jsx("small",{children:y?"点击甘特图定位":"Click to seek"})]}),R.jsx(yR,{dag:t,result:i,time:l,maxTime:f,lang:m,onSeek:x})]}),R.jsxs("div",{className:"chart-section carbon-chart",children:[R.jsxs("div",{className:"chart-label",children:[R.jsx("span",{children:y?"累计碳排放":"CUMULATIVE CARBON"}),R.jsxs("small",{children:["gCO₂e · ",y?"各方法同一坐标尺度":"Shared scales"]})]}),R.jsx(SR,{dag:t,result:i,config:s,time:l,maxTime:f,maxCarbon:d,lang:m}),R.jsx(MR,{ledger:E,config:s,lang:m})]})]}):R.jsxs("div",{className:"pending-card",children:[R.jsx(Qc,{size:42}),R.jsx("h3",{children:y?"等待该方法的调度方案":"Waiting for this schedule"}),R.jsx("p",{children:y?"选择方法后，点击“运行并播放”。":"Choose the method, then Run & play."})]})]})}function TR(){const[r,t]=oe.useState(()=>{try{return localStorage.getItem("carelab-carbon-studio-lang")||"zh"}catch{return"zh"}}),i=r==="zh",s=(Q,Yt)=>i?Yt:Q,[l,c]=oe.useState(rd),[f,d]=oe.useState(()=>Kc()),[m,p]=oe.useState("demo"),[_,g]=oe.useState(()=>Kc().nodes.length),[x,y]=oe.useState(["list","random","reserve"]),[b,E]=oe.useState(null),[S,v]=oe.useState({}),[L,N]=oe.useState(!1),[D,O]=oe.useState(null),[I,F]=oe.useState(""),[j,w]=oe.useState(!1),[U,V]=oe.useState(0),[K,ct]=oe.useState(0),[ht,ft]=oe.useState(!1),[B,at]=oe.useState(1),[Z,Et]=oe.useState(1),[P,et]=oe.useState(!0),[Mt,yt]=oe.useState(!1),[zt,Wt]=oe.useState(!0),[it,_t]=oe.useState(!0),[Ut,ne]=oe.useState(0),[Vt,ae]=oe.useState(null),[Ke,G]=oe.useState(!1),[Ie,he]=oe.useState(""),[se,It]=oe.useState(""),we=oe.useRef(null),qt=oe.useRef(0),ge=oe.useRef(null),tn=oe.useRef(0),en=oe.useRef(!1),z=oe.useRef({}),A=oe.useRef(null),$=oe.useRef(null),ot=b||{dag:Pr(f,l),config:l},gt=Object.values(S),dt=gt.filter(Q=>x.includes(Q.method)),Nt=Math.max(1,...dt.map(Q=>Q.completion_time)),Ct=Math.max(.01,...dt.map(Q=>Fs(ot.dag,Q,ot.config,Q.completion_time).totalG)),kt=dt.length>0;oe.useEffect(()=>{ct(Q=>Math.min(Q,Nt))},[Nt]),oe.useEffect(()=>{document.documentElement.lang=i?"zh-CN":"en";try{localStorage.setItem("carelab-carbon-studio-lang",r)}catch{}},[r]),oe.useEffect(()=>{const Q=()=>yt(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",Q),()=>document.removeEventListener("fullscreenchange",Q)},[]),oe.useEffect(()=>{if(!L)return;const Q=setInterval(()=>V((performance.now()-tn.current)/1e3),100);return()=>clearInterval(Q)},[L]),oe.useEffect(()=>{if(!ht||!kt||L)return;let Q=performance.now(),Yt=0,Ht;const re=ce=>{if(Yt+=Math.min((ce-Q)/1e3,.25)*B,Q=ce,Yt>=Z){const Ue=Math.floor(Yt/Z)*Z;Yt-=Ue,ct(Ft=>{const bt=Math.min(Nt,Ft+Ue);return bt>=Nt-1e-8&&ft(!1),bt})}Ht=requestAnimationFrame(re)};return Ht=requestAnimationFrame(re),()=>cancelAnimationFrame(Ht)},[ht,B,Z,Nt,L,kt]),oe.useEffect(()=>(At(!1),()=>we.current?.terminate()),[]),oe.useEffect(()=>{Vt?($.current=document.activeElement,A.current?.showModal()):A.current?.open&&(A.current.close(),$.current?.focus?.())},[!!Vt]);function Xt(Q,Yt){c(Ht=>({...Ht,[Q]:Yt})),w(!0),ft(!1)}function At(Q=!0,Yt=f,Ht=l){try{const re=Pr(Yt,Ht);F(""),N(!0),ft(!1),w(!1),ct(0),v({}),z.current={},V(0),E({dag:od(re),config:od(Ht)}),tn.current=performance.now(),en.current=Q,we.current?.terminate();const ce=++qt.current,Ue=new Worker(new URL(""+new URL("solver.worker-DwhLNaE3.js",import.meta.url).href,import.meta.url),{type:"module"});we.current=Ue;const Ft=[...Jo.filter(bt=>bt!=="milp"),...x.includes("milp")?["milp"]:[]];O({method:Ft[0],index:0,total:Ft.length}),Ue.onmessage=({data:bt})=>{bt.id===ce&&(bt.type==="progress"&&O(bt),bt.type==="result"&&(z.current={...z.current,[bt.result.method]:bt.result},v({...z.current})),bt.type==="done"&&(N(!1),O(null),ft(en.current&&Object.keys(z.current).length>0),Ue.terminate(),we.current=null),bt.type==="error"&&(N(!1),ft(!1),F(bt.message||bt.error||"Scheduling failed."),Ue.terminate(),we.current=null))},Ue.onerror=bt=>{N(!1),F(bt.message||s("The solver could not start.","调度器未能启动。")),Ue.terminate(),we.current=null},Ue.postMessage({id:ce,dag:re,config:Ht,methods:Ft})}catch(re){F(re.message),N(!1)}}function Bt(){we.current?.terminate(),we.current=null,qt.current++,N(!1),ft(!1),O(null),F(s("Stopped. Completed schedules remain available.","已停止求解，已完成的方法仍可查看。"))}function $t(){try{const Q=m==="demo"?Kc():Jv(m,Number(_),Number(l.seed));d(Q),g(Q.nodes.length),w(!0),ft(!1),F("")}catch(Q){F(Q.message)}}function Kt(){const Q=Kc(),Yt={...rd};d(Q),c(Yt),g(Q.nodes.length),p("demo"),At(!0,Q,Yt)}function Dt(Q){ft(!1),ct(Math.max(0,Math.min(Nt,Q)))}function de(){!kt||L||(K>=Nt&&ct(0),ft(Q=>!Q))}function Y(){const Q={schema:"carelab-carbon-studio-v1",created:new Date().toISOString(),dag:ot.dag,config:ot.config,methods:x,results:gt},Yt=URL.createObjectURL(new Blob([JSON.stringify(Q,null,2)],{type:"application/json"})),Ht=document.createElement("a");Ht.href=Yt,Ht.download="carelab-carbon-workflow.json",Ht.click(),setTimeout(()=>URL.revokeObjectURL(Yt),2e3)}async function wt(Q){try{const Yt=Q.target.files[0];if(!Yt)return;if(Yt.size>4e6)throw Error(s("Please use a JSON file smaller than 4 MB.","JSON 文件请小于 4 MB。"));const Ht=JSON.parse(await Yt.text()),re=Ht.dag||Ht,ce={...rd,...re.resources,...re.seed===void 0?{}:{seed:re.seed},...Ht.config},Ue=Pr(re,ce);if(d(Ue),c(ce),g(Ue.nodes.length),w(!0),ft(!1),F(""),Array.isArray(Ht.results)&&Ht.results.length){const Ft={};for(const bt of Ht.results)Jo.includes(bt.method)&&(dR(Ue,bt),(!Number.isFinite(bt.runtime_ms)||bt.runtime_ms<0)&&(bt.runtime_ms=0),Ft[bt.method]={...bt,status:"imported"});E({dag:Ue,config:ce}),v(Ft),z.current=Ft,ct(0),w(!1),Array.isArray(Ht.methods)&&y(Ht.methods.filter(bt=>Jo.includes(bt)))}}catch(Yt){F(Yt.message)}finally{Q.target.value=""}}function Lt(){ae(od(f)),he(JSON.stringify(f,null,2)),It(""),G(!1),ft(!1)}function jt(){try{const Q=Pr(Ke?JSON.parse(Ie):Vt,l);d(Q),g(Q.nodes.length),w(!0),ae(null)}catch(Q){It(Q.message)}}const Rt=ot.config.pue*ot.config.ci/36e5,vt=ot.dag.nodes.reduce((Q,Yt)=>Q+Yt.duration,0)*ot.config.tuSeconds*(ot.config.busyW-ot.config.idleW),Zt=Rt*vt,le=Rt*(ot.config.servers*ot.config.idleW+ot.config.networkW)*ot.config.tuSeconds,Ce=x.filter(Q=>Jo.includes(Q));return R.jsxs("div",{className:`app-shell ${P?"":"sidebar-hidden"} ${Mt?"is-fullscreen":""}`,children:[R.jsxs("header",{className:"topbar",children:[R.jsxs("a",{className:"brand",href:"#","aria-label":"CARELab Carbon Studio",children:[R.jsx("span",{className:"brand-symbol",children:R.jsx(Qc,{size:26})}),R.jsxs("span",{children:[R.jsxs("b",{children:["CARELab ",R.jsx("em",{children:"CARBON STUDIO"})]}),R.jsx("small",{children:"MULTI-STEP LLM INFERENCE"})]})]}),R.jsxs("div",{className:"header-statement",children:[s("Shorter workflows.","缩短工作流，")," ",R.jsx("strong",{children:s("A smaller job footprint.","减少作业碳排放。")})]}),R.jsxs("div",{className:"top-actions",children:[R.jsx("button",{onClick:()=>t(i?"en":"zh"),className:"language-button",children:i?"EN":"中文"}),R.jsx(Ma,{label:s("Toggle full screen","切换全屏"),onClick:async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{yt(Q=>!Q)}},children:Mt?R.jsx(ES,{size:17}):R.jsx(MS,{size:17})})]})]}),R.jsxs("aside",{className:"sidebar",children:[R.jsxs("button",{className:"primary demo-button",onClick:Kt,disabled:L,children:[R.jsx(Mh,{size:16}),s("One-click demonstration","一键演示"),R.jsx("span",{children:"DAG"})]}),R.jsxs("div",{className:"sidebar-section",children:[R.jsxs("h2",{children:[R.jsx(yS,{size:15}),s("Inference workflow","推理工作流")]}),R.jsxs("label",{className:"select-field",children:[R.jsx("span",{children:s("Application structure","应用结构")}),R.jsx("select",{value:m,onChange:Q=>p(Q.target.value),children:ER.map(([Q,Yt,Ht])=>R.jsx("option",{value:Q,children:i?Ht:Yt},Q))})]}),R.jsxs("div",{className:"field-pair",children:[R.jsx(Fi,{label:s("Tasks","任务数"),value:_,onChange:g,min:2,max:24}),R.jsx(Fi,{label:s("Seed","随机种子"),value:l.seed,onChange:Q=>Xt("seed",Q),min:0,max:999999})]}),R.jsxs("div",{className:"button-pair",children:[R.jsxs("button",{onClick:$t,disabled:L,children:[R.jsx(Eh,{size:13}),s("Generate","生成")]}),R.jsxs("button",{onClick:Lt,disabled:L,children:[R.jsx(vS,{size:13}),s("Edit DAG","编辑 DAG")]})]}),R.jsxs("p",{className:"sidebar-hint",children:[f.nodes.length," ",s("tasks","个计算任务")," · ",f.edges.length," ",s("dependencies","条依赖")]})]}),R.jsxs("div",{className:"sidebar-section",children:[R.jsxs("h2",{children:[R.jsx(Qc,{size:15}),s("Reserved resources","预留资源")]}),R.jsx(Fi,{label:s("Execution VMs","执行 VM 数量"),value:l.servers,onChange:Q=>Xt("servers",Q),min:1,max:8}),R.jsx(Fi,{label:s("Network channels","网络通道数量"),value:l.channels,onChange:Q=>Xt("channels",Q),min:1,max:4}),R.jsx(Fi,{label:s("Time unit","仿真时间单位"),value:l.tuSeconds,onChange:Q=>Xt("tuSeconds",Q),min:.01,max:3600,step:.1,suffix:"s / tu"})]}),R.jsxs("details",{className:"sidebar-section",open:!0,children:[R.jsxs("summary",{children:[R.jsx(n0,{size:15}),s("Power & carbon","功率与碳核算")]}),R.jsx(Fi,{label:s("Idle VM","VM 空闲功率"),value:l.idleW,onChange:Q=>Xt("idleW",Q),min:0,max:2e3,suffix:"W"}),R.jsx(Fi,{label:s("Busy VM · total","VM 计算功率 · 总值"),value:l.busyW,onChange:Q=>Xt("busyW",Q),min:0,max:5e3,suffix:"W"}),R.jsx(Fi,{label:s("Reserved network","网络预留功率"),value:l.networkW,onChange:Q=>Xt("networkW",Q),min:0,max:5e3,suffix:"W"}),R.jsxs("div",{className:"field-pair",children:[R.jsx(Fi,{label:"PUE",value:l.pue,onChange:Q=>Xt("pue",Q),min:1,max:3,step:.05}),R.jsx(Fi,{label:s("Grid intensity","电网碳强度"),value:l.ci,onChange:Q=>Xt("ci",Q),min:0,max:2e3})]}),R.jsxs("p",{className:"sidebar-hint",children:["CI: gCO₂e/kWh · ",s("Synthetic, editable profiles","可编辑的合成功率配置")]})]}),R.jsxs("details",{className:"sidebar-section advanced",children:[R.jsxs("summary",{children:[R.jsx(DS,{size:15}),s("Solver & playback","求解与播放设置")]}),R.jsx(Fi,{label:s("MILP time limit","MILP 求解时限"),value:l.milpTimeLimit,onChange:Q=>Xt("milpTimeLimit",Q),min:1,max:30,suffix:"s"}),R.jsxs("label",{className:"select-field",children:[R.jsx("span",{children:s("Simulation step","仿真步长")}),R.jsx("select",{value:Z,onChange:Q=>Et(Number(Q.target.value)),children:[.25,.5,1,2].map(Q=>R.jsxs("option",{value:Q,children:[Q," tu"]},Q))})]}),R.jsxs("label",{className:"check-row",children:[R.jsx("input",{type:"checkbox",checked:it,onChange:Q=>_t(Q.target.checked)}),s("Task-to-VM assignment lines","显示任务与 VM 的分配线")]}),R.jsxs("label",{className:"check-row",children:[R.jsx("input",{type:"checkbox",checked:zt,onChange:Q=>Wt(Q.target.checked)}),s("Activity plumes","计算与传输烟雾动画")]})]}),R.jsxs("div",{className:"sidebar-bottom",children:[R.jsxs("button",{className:"primary run-button",onClick:()=>At(!0),disabled:L||!x.length,children:[L?R.jsx(SS,{className:"spin",size:16}):R.jsx(Mh,{size:16})," ",s("Run & play","运行并播放")]}),R.jsxs("div",{className:"button-pair",children:[R.jsxs("button",{onClick:()=>ge.current?.click(),disabled:L,children:[R.jsx(LS,{size:13}),s("Import","导入")]}),R.jsxs("button",{onClick:Y,disabled:!kt,children:[R.jsx(xS,{size:13}),s("Export","导出")]})]}),R.jsx("input",{ref:ge,type:"file",accept:".json,application/json",hidden:!0,onChange:wt}),R.jsxs("small",{children:["CARELab · ",s("Research demonstration","研究演示")]})]})]}),R.jsxs("main",{className:"workspace",children:[R.jsxs("div",{className:"workspace-heading",children:[R.jsxs("div",{className:"workspace-title",children:[R.jsx(Ma,{label:s("Toggle configuration panel","显示或隐藏配置"),onClick:()=>et(Q=>!Q),children:P?R.jsx(bS,{size:17}):R.jsx(TS,{size:17})}),R.jsxs("div",{children:[R.jsx("h1",{children:s("Workflow comparison","工作流调度比较")}),R.jsx("p",{children:s("One job. The same reserved resources. A shared simulation clock.","同一个作业，相同的预留资源，共用仿真时间轴。")})]})]}),R.jsxs("div",{className:"model-chip",children:[R.jsx(n0,{size:15}),R.jsx("span",{children:"C = A + B · T"})]})]}),R.jsx("div",{className:"method-selection",role:"group","aria-label":s("Visible scheduling methods","显示的调度方法"),children:Jo.map(Q=>R.jsxs("label",{className:x.includes(Q)?"selected":"",style:{"--method":zr[Q][2]},children:[R.jsx("input",{type:"checkbox",checked:x.includes(Q),onChange:Yt=>y(Ht=>Yt.target.checked?[...Ht,Q]:Ht.filter(re=>re!==Q))}),R.jsx("i",{}),zr[Q][i?1:0],Q==="milp"&&R.jsx("small",{children:"OPT"})]},Q))}),I&&R.jsxs("div",{className:"alert",role:"alert",children:[R.jsx(e0,{size:16}),R.jsx("span",{children:I}),R.jsx("button",{onClick:()=>F(""),"aria-label":s("Dismiss","关闭提示"),children:R.jsx(s0,{size:14})})]}),j&&R.jsxs("div",{className:"notice",children:[R.jsx(RS,{size:14}),s("Configuration changed. Run again to apply it; the current replay uses its original settings.","配置已修改。点击“运行并播放”后生效；当前回放仍使用原来的配置。")]}),R.jsxs("section",{className:"playback","aria-label":s("Simulation controls","仿真播放控制"),children:[R.jsxs("div",{className:"transport",children:[R.jsx("button",{className:"play",onClick:de,disabled:!kt||L,title:ht?s("Pause","暂停"):s("Play","播放"),"aria-label":ht?s("Pause","暂停"):s("Play","播放"),children:ht?R.jsx(AS,{size:21}):R.jsx(Mh,{size:21})}),R.jsx(Ma,{label:s("Restart replay","从头回放"),onClick:()=>{ct(0),ft(!1)},disabled:!kt,children:R.jsx(Eh,{size:16})}),R.jsx(Ma,{label:s("Previous time step","上一个时间步"),onClick:()=>Dt(K-Z),disabled:!kt||L,children:R.jsx(wS,{size:16})}),R.jsx(Ma,{label:s("Next time step","下一个时间步"),onClick:()=>Dt(K+Z),disabled:!kt||L,children:R.jsx(CS,{size:16})}),R.jsxs("div",{className:"clock",children:[R.jsx("strong",{children:xn(K,2)}),R.jsxs("span",{children:["/ ",xn(Nt,1)," tu"]})]})]}),R.jsxs("div",{className:"time-track",children:[R.jsx("input",{type:"range","aria-label":s("Simulation time","仿真时间"),min:"0",max:Nt,step:"0.25",value:K,onChange:Q=>Dt(Number(Q.target.value)),disabled:!kt||L}),R.jsxs("div",{children:[R.jsx("span",{children:L?`${s("Scheduling","正在调度")} ${D?.method?zr[D.method]?.[i?1:0]||D.method:""} · ${xn(U,1)} s`:ht?s("Synchronized playback","同步播放中"):K>=Nt?s("All jobs completed","全部作业完成"):s("Paused · advance one time step to inspect","已暂停 · 可逐时间步查看")}),R.jsxs("span",{children:["1 tu = ",ot.config.tuSeconds," s"]})]})]}),R.jsxs("div",{className:"playback-options",children:[R.jsxs("label",{children:[s("Speed","速度"),R.jsx("select",{"aria-label":s("Playback speed","播放速度"),value:B,onChange:Q=>at(Number(Q.target.value)),children:[.25,.5,1,2,4,8].map(Q=>R.jsxs("option",{value:Q,children:[Q,"×"]},Q))})]}),L?R.jsxs("button",{onClick:Bt,children:[R.jsx(US,{size:13}),s("Stop solver","停止求解")]}):R.jsxs("button",{onClick:()=>Dt(Nt),disabled:!kt,children:[s("Final state","查看最终"),R.jsx(Sh,{size:13})]}),R.jsx(Ma,{label:s("Reset all cameras","重置全部视角"),onClick:()=>ne(Q=>Q+1),children:R.jsx(Eh,{size:15})})]})]}),R.jsxs("div",{className:"arena-meta",children:[R.jsxs("div",{children:[R.jsx("span",{className:"live-dot"}),ot.dag.nodes.length," ",s("tasks","个任务"),R.jsx("span",{children:"·"}),ot.config.servers," VM",R.jsx("span",{children:"·"}),ot.config.channels," ",s("shared channels","条共享通道")]}),R.jsxs("span",{children:[s("Drag panels sideways to compare more methods","横向滚动可对照更多方法"),R.jsx(Sh,{size:12})]})]}),R.jsx("section",{className:"arena","aria-label":s("3D scheduling comparison","3D 调度对比"),style:{"--card-count":Ce.length},children:Ce.length?Ce.map(Q=>R.jsx(bR,{id:Q,dag:ot.dag,result:S[Q],config:ot.config,time:K,playing:ht,maxTime:Nt,maxCarbon:Ct,lang:r,showAssignments:it,smoke:zt,resetKey:Ut,onSeek:Dt},Q)):R.jsxs("div",{className:"empty-state",children:[R.jsx(Qc,{size:40}),R.jsx("p",{children:s("Select at least one method above.","请在上方勾选至少一种方法。")})]})}),R.jsxs("div",{className:"activity-legend",children:[R.jsxs("span",{children:[R.jsx("i",{className:"key busy"}),s("Computing","计算中")]}),R.jsxs("span",{children:[R.jsx("i",{className:"key idle"}),s("Idle reservation","空闲但仍预留")]}),R.jsxs("span",{children:[R.jsx("i",{className:"key packet"}),s("Data transfer","数据传输")]}),R.jsxs("span",{children:[R.jsx("i",{className:"key released"}),s("Released after completion","完成后释放")]}),R.jsx("p",{children:s("Plumes illustrate activity, not direct on-site CO₂. The reserved network baseline still accrues during idle periods.","烟雾仅示意活动，并非机房直接排烟；网络空闲时不显示烟雾，但预留基础碳仍计入。")})]}),R.jsxs("section",{className:"outcomes",children:[R.jsxs("div",{className:"section-heading",children:[R.jsx("h2",{children:s("Complete schedule results","完整调度结果")}),R.jsx("span",{children:s("Algorithm runtime and job completion time are different quantities.","算法运行时间与作业完成时间是两个不同的量。")})]}),R.jsx("div",{className:"table-scroll",children:R.jsxs("table",{children:[R.jsx("thead",{children:R.jsxs("tr",{children:[R.jsx("th",{children:s("Method","方法")}),R.jsxs("th",{children:[s("Job completion","作业完成时间")," (tu)"]}),R.jsxs("th",{children:[s("Elapsed","执行时长")," (s)"]}),R.jsxs("th",{children:[s("Job carbon","总碳排放")," (gCO₂e)"]}),R.jsxs("th",{children:[s("Algorithm","算法运行时间")," (ms)"]}),R.jsx("th",{children:s("Status","求解状态")})]})}),R.jsx("tbody",{children:Ce.filter(Q=>S[Q]).map(Q=>{const Yt=S[Q],Ht=Fs(ot.dag,Yt,ot.config,Yt.completion_time).totalG;return R.jsxs("tr",{children:[R.jsxs("td",{children:[R.jsx("i",{style:{background:zr[Q][2]}}),zr[Q][i?1:0]]}),R.jsx("td",{children:xn(Yt.completion_time,2)}),R.jsx("td",{children:xn(Yt.completion_time*ot.config.tuSeconds,2)}),R.jsx("td",{className:"carbon-cell",children:xn(Ht,4)}),R.jsx("td",{children:xn(Yt.runtime_ms,2)}),R.jsx("td",{children:Yt.status==="imported"?s("Imported, validated","导入 · 可行性已验证"):Yt.status==="optimal"?s("Optimal","最优已证明"):Yt.status==="fallback"?s("Heuristic fallback","启发式回退"):Yt.status==="feasible"?s("Feasible, time-limited","限时可行"):s("Heuristic","启发式")})]},Q)})})]})})]}),R.jsxs("details",{className:"model-notes",children:[R.jsxs("summary",{children:[R.jsx(e0,{size:16}),s("How the carbon is calculated","碳排放如何逐步计算"),R.jsxs("span",{children:["C = ",xn(Zt,3)," + ",xn(le,4)," × T"]})]}),R.jsxs("div",{className:"model-content",children:[R.jsx("p",{children:s("All VMs and the shared network allocation belong to this job until its final task finishes. A VM draws idle power while waiting and total busy power while computing. Its contribution stops when the entire job releases the reservation. Displayed watts are allocated to this job; release does not imply a physical shutdown.","所有 VM 和共享网络资源一直预留到该作业最后一个任务完成。VM 等待时计空闲功率，计算时计总计算功率；整个作业完成后停止归集该作业的碳排放。界面功率均指该作业归集的功率，释放资源不代表机房物理断电。")}),R.jsx("div",{className:"equation",children:"ΔC = PUE × CI × P(W) × Δt(s) / 3,600,000"}),R.jsx("p",{children:s("We integrate every actual busy/idle interval, including fractional boundaries. Playback speed and step size do not change the final carbon. VM baseline, incremental computation and reserved network sum exactly to job carbon.","按真实的忙闲区间积分，跨时间步的区间也精确分段。改变播放速度或步长不会改变最终碳排放。VM 基础功耗、计算增量和网络预留三项之和，严格等于作业总碳排放。")}),R.jsx("p",{children:s("With the same fixed VM count, execution profiles, grid intensity, PUE and traffic-independent network baseline, task work energy A is fixed and reservation carbon grows at B per tu. If B > 0, minimizing job carbon and completion time gives the same ranking.","在 VM 数量、任务执行配置、电网碳强度、PUE 和网络预留基础功率均固定时，计算增量碳 A 固定，预留碳按每 tu 的速率 B 累加。B > 0 时，最小化作业碳排放与最小化完成时间具有相同排序。")}),R.jsx("p",{children:s("VMs represent exclusive execution allocations with attributed power. Network channels are logical parallel transfer slots, not extra copies of a physical switch. These are synthetic operational-carbon profiles, excluding embodied emissions and solver energy.","VM 表示独占的执行资源份额，功率按该份额归集。通道表示并行传输槽位，并非重复计算多个交换机。这里采用合成的运行碳模型，不含硬件制造碳和算法求解能耗。")}),R.jsxs("div",{className:"source-links",children:[R.jsx("a",{href:"https://doi.org/10.1002/advs.202100707",target:"_blank",rel:"noreferrer",children:"Green Algorithms · Advanced Science (2021), §5 Eq. (1)"}),R.jsx("a",{href:"https://arxiv.org/html/2406.09645v1#S3.SS3.SSS1",target:"_blank",rel:"noreferrer",children:"Dedicated-machine allocation · §3.3.1"}),R.jsx("a",{href:"https://sci.greensoftware.foundation/",target:"_blank",rel:"noreferrer",children:"Software Carbon Intensity · O = E × I"})]})]})]}),R.jsxs("footer",{className:"app-footer",children:["CARELab Carbon-aware Multi-step LLM Inference · ",s("All scheduling and simulation run in your browser.","调度与仿真均在浏览器中运行。")," ",R.jsx("span",{children:R.jsx("a",{href:"./THIRD_PARTY_NOTICES.txt",target:"_blank",rel:"noreferrer",children:s("Open-source notices","开源组件说明")})})]})]}),R.jsxs("dialog",{className:"dag-editor",ref:A,onCancel:()=>ae(null),children:[R.jsxs("div",{className:"dialog-heading",children:[R.jsxs("div",{children:[R.jsx("h2",{children:s("Edit your inference workflow","编辑推理工作流")}),R.jsx("p",{children:s("Task durations and transfer durations use time units (tu).","节点为推理任务，边为依赖；计算和传输时长均使用 tu。")})]}),R.jsx(Ma,{label:s("Close editor","关闭编辑器"),onClick:()=>ae(null),children:R.jsx(s0,{size:20})})]}),Vt&&R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"editor-tabs",children:[R.jsx("button",{className:Ke?"":"active",onClick:()=>{if(Ke)try{ae(Pr(JSON.parse(Ie),l)),G(!1),It("")}catch(Q){It(Q.message)}},children:s("Tasks & dependencies","任务与依赖")}),R.jsx("button",{className:Ke?"active":"",onClick:()=>{he(JSON.stringify(Vt,null,2)),G(!0)},children:"JSON"})]}),Ke?R.jsx("textarea",{className:"json-editor",value:Ie,spellCheck:"false","aria-label":"DAG JSON",onChange:Q=>he(Q.target.value)}):R.jsxs("div",{className:"visual-editor",children:[R.jsxs("div",{children:[R.jsx("h3",{children:s("LLM inference tasks","LLM 推理任务")}),Vt.nodes.map((Q,Yt)=>R.jsxs("div",{className:"editor-row",children:[R.jsx("i",{style:{background:$d(Q.id,Vt)}}),R.jsxs("span",{children:["T",Q.id]}),R.jsx("input",{type:"number",min:"0.01",step:".5",value:Q.duration,"aria-label":`T${Q.id} ${s("duration","计算时间")}`,onChange:Ht=>ae(re=>({...re,nodes:re.nodes.map((ce,Ue)=>Ue===Yt?{...ce,duration:Number(Ht.target.value)}:ce)}))}),R.jsx("small",{children:"tu"}),R.jsx(Ma,{label:s(`Remove T${Q.id}`,`删除 T${Q.id}`),onClick:()=>ae(Ht=>({...Ht,nodes:Ht.nodes.filter(re=>re.id!==Q.id),edges:Ht.edges.filter(re=>re.source!==Q.id&&re.target!==Q.id)})),children:R.jsx(a0,{size:13})})]},Q.id)),R.jsxs("button",{className:"text-button",onClick:()=>ae(Q=>({...Q,nodes:[...Q.nodes,{id:Math.max(0,...Q.nodes.map(Yt=>Number(Yt.id)))+1,duration:3}]})),children:[R.jsx(i0,{size:14}),s("Add task","添加任务")]})]}),R.jsxs("div",{children:[R.jsx("h3",{children:s("Dependencies & transfers","依赖与传输")}),Vt.edges.map((Q,Yt)=>R.jsxs("div",{className:"editor-row",children:[R.jsx("select",{"aria-label":s(`Edge ${Yt+1} source`,`依赖 ${Yt+1} 起点`),value:Q.source,onChange:Ht=>ae(re=>({...re,edges:re.edges.map((ce,Ue)=>Ue===Yt?{...ce,source:Number(Ht.target.value)}:ce)})),children:Vt.nodes.map(Ht=>R.jsxs("option",{value:Ht.id,children:["T",Ht.id]},Ht.id))}),R.jsx(Sh,{size:13}),R.jsx("select",{"aria-label":s(`Edge ${Yt+1} target`,`依赖 ${Yt+1} 终点`),value:Q.target,onChange:Ht=>ae(re=>({...re,edges:re.edges.map((ce,Ue)=>Ue===Yt?{...ce,target:Number(Ht.target.value)}:ce)})),children:Vt.nodes.map(Ht=>R.jsxs("option",{value:Ht.id,children:["T",Ht.id]},Ht.id))}),R.jsx("input",{type:"number",min:"0",step:".5",value:Q.duration,"aria-label":s(`Edge ${Yt+1} duration`,`依赖 ${Yt+1} 传输时间`),onChange:Ht=>ae(re=>({...re,edges:re.edges.map((ce,Ue)=>Ue===Yt?{...ce,duration:Number(Ht.target.value)}:ce)}))}),R.jsx("small",{children:"tu"}),R.jsx(Ma,{label:s("Remove dependency","删除依赖"),onClick:()=>ae(Ht=>({...Ht,edges:Ht.edges.filter((re,ce)=>ce!==Yt)})),children:R.jsx(a0,{size:13})})]},Yt)),R.jsxs("button",{className:"text-button",onClick:()=>ae(Q=>({...Q,edges:[...Q.edges,{source:Q.nodes[0]?.id??0,target:Q.nodes.at(-1)?.id??1,duration:1}]})),children:[R.jsx(i0,{size:14}),s("Add dependency","添加依赖")]})]})]}),se&&R.jsx("p",{className:"edit-error",role:"alert",children:se}),R.jsxs("div",{className:"dialog-actions",children:[R.jsx("span",{children:s("Local edges need no network channel. Cycles are rejected.","本地依赖不占网络通道；系统会检查并拒绝环路。")}),R.jsxs("button",{className:"primary",onClick:jt,children:[R.jsx(_v,{size:15}),s("Apply workflow","应用工作流")]})]})]})]})]})}dS.createRoot(document.getElementById("root")).render(R.jsx(TR,{}));
