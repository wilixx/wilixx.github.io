(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var _h={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function mS(){if(K_)return Vo;K_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var Q_;function gS(){return Q_||(Q_=1,_h.exports=mS()),_h.exports}var E=gS(),vh={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_;function _S(){if(J_)return be;J_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function S(P,X,dt){this.props=P,this.context=X,this.refs=T,this.updater=dt||y}S.prototype.isReactComponent={},S.prototype.setState=function(P,X){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,X,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function v(){}v.prototype=S.prototype;function N(P,X,dt){this.props=P,this.context=X,this.refs=T,this.updater=dt||y}var L=N.prototype=new v;L.constructor=N,b(L,S.prototype),L.isPureReactComponent=!0;var C=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function B(P,X,dt,mt,Ot,qt){return dt=qt.ref,{$$typeof:r,type:P,key:X,ref:dt!==void 0?dt:null,props:qt}}function V(P,X){return B(P.type,X,void 0,void 0,void 0,P.props)}function R(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function U(P){var X={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(dt){return X[dt]})}var H=/\/+/g;function K(P,X){return typeof P=="object"&&P!==null&&P.key!=null?U(""+P.key):X.toString(36)}function rt(){}function ct(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(rt,rt):(P.status="pending",P.then(function(X){P.status==="pending"&&(P.status="fulfilled",P.value=X)},function(X){P.status==="pending"&&(P.status="rejected",P.reason=X)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ut(P,X,dt,mt,Ot){var qt=typeof P;(qt==="undefined"||qt==="boolean")&&(P=null);var it=!1;if(P===null)it=!0;else switch(qt){case"bigint":case"string":case"number":it=!0;break;case"object":switch(P.$$typeof){case r:case t:it=!0;break;case _:return it=P._init,ut(it(P._payload),X,dt,mt,Ot)}}if(it)return Ot=Ot(P),it=mt===""?"."+K(P,0):mt,C(Ot)?(dt="",it!=null&&(dt=it.replace(H,"$&/")+"/"),ut(Ot,X,dt,"",function(se){return se})):Ot!=null&&(R(Ot)&&(Ot=V(Ot,dt+(Ot.key==null||P&&P.key===Ot.key?"":(""+Ot.key).replace(H,"$&/")+"/")+it)),X.push(Ot)),1;it=0;var yt=mt===""?".":mt+":";if(C(P))for(var Dt=0;Dt<P.length;Dt++)mt=P[Dt],qt=yt+K(mt,Dt),it+=ut(mt,X,dt,qt,Ot);else if(Dt=x(P),typeof Dt=="function")for(P=Dt.call(P),Dt=0;!(mt=P.next()).done;)mt=mt.value,qt=yt+K(mt,Dt++),it+=ut(mt,X,dt,qt,Ot);else if(qt==="object"){if(typeof P.then=="function")return ut(ct(P),X,dt,mt,Ot);throw X=String(P),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return it}function F(P,X,dt){if(P==null)return P;var mt=[],Ot=0;return ut(P,mt,"","",function(qt){return X.call(dt,qt,Ot++)}),mt}function nt(P){if(P._status===-1){var X=P._result;X=X(),X.then(function(dt){(P._status===0||P._status===-1)&&(P._status=1,P._result=dt)},function(dt){(P._status===0||P._status===-1)&&(P._status=2,P._result=dt)}),P._status===-1&&(P._status=0,P._result=X)}if(P._status===1)return P._result.default;throw P._result}var Q=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Mt(){}return be.Children={map:F,forEach:function(P,X,dt){F(P,function(){X.apply(this,arguments)},dt)},count:function(P){var X=0;return F(P,function(){X++}),X},toArray:function(P){return F(P,function(X){return X})||[]},only:function(P){if(!R(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},be.Component=S,be.Fragment=i,be.Profiler=l,be.PureComponent=N,be.StrictMode=s,be.Suspense=m,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,be.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},be.cache=function(P){return function(){return P.apply(null,arguments)}},be.cloneElement=function(P,X,dt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var mt=b({},P.props),Ot=P.key,qt=void 0;if(X!=null)for(it in X.ref!==void 0&&(qt=void 0),X.key!==void 0&&(Ot=""+X.key),X)!z.call(X,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&X.ref===void 0||(mt[it]=X[it]);var it=arguments.length-2;if(it===1)mt.children=dt;else if(1<it){for(var yt=Array(it),Dt=0;Dt<it;Dt++)yt[Dt]=arguments[Dt+2];mt.children=yt}return B(P.type,Ot,void 0,void 0,qt,mt)},be.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},be.createElement=function(P,X,dt){var mt,Ot={},qt=null;if(X!=null)for(mt in X.key!==void 0&&(qt=""+X.key),X)z.call(X,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(Ot[mt]=X[mt]);var it=arguments.length-2;if(it===1)Ot.children=dt;else if(1<it){for(var yt=Array(it),Dt=0;Dt<it;Dt++)yt[Dt]=arguments[Dt+2];Ot.children=yt}if(P&&P.defaultProps)for(mt in it=P.defaultProps,it)Ot[mt]===void 0&&(Ot[mt]=it[mt]);return B(P,qt,void 0,void 0,null,Ot)},be.createRef=function(){return{current:null}},be.forwardRef=function(P){return{$$typeof:h,render:P}},be.isValidElement=R,be.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:nt}},be.memo=function(P,X){return{$$typeof:p,type:P,compare:X===void 0?null:X}},be.startTransition=function(P){var X=O.T,dt={};O.T=dt;try{var mt=P(),Ot=O.S;Ot!==null&&Ot(dt,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(Mt,Q)}catch(qt){Q(qt)}finally{O.T=X}},be.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},be.use=function(P){return O.H.use(P)},be.useActionState=function(P,X,dt){return O.H.useActionState(P,X,dt)},be.useCallback=function(P,X){return O.H.useCallback(P,X)},be.useContext=function(P){return O.H.useContext(P)},be.useDebugValue=function(){},be.useDeferredValue=function(P,X){return O.H.useDeferredValue(P,X)},be.useEffect=function(P,X,dt){var mt=O.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return mt.useEffect(P,X)},be.useId=function(){return O.H.useId()},be.useImperativeHandle=function(P,X,dt){return O.H.useImperativeHandle(P,X,dt)},be.useInsertionEffect=function(P,X){return O.H.useInsertionEffect(P,X)},be.useLayoutEffect=function(P,X){return O.H.useLayoutEffect(P,X)},be.useMemo=function(P,X){return O.H.useMemo(P,X)},be.useOptimistic=function(P,X){return O.H.useOptimistic(P,X)},be.useReducer=function(P,X,dt){return O.H.useReducer(P,X,dt)},be.useRef=function(P){return O.H.useRef(P)},be.useState=function(P){return O.H.useState(P)},be.useSyncExternalStore=function(P,X,dt){return O.H.useSyncExternalStore(P,X,dt)},be.useTransition=function(){return O.H.useTransition()},be.version="19.1.1",be}var $_;function sp(){return $_||($_=1,vh.exports=_S()),vh.exports}var Pt=sp(),xh={exports:{}},jo={},yh={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function vS(){return t0||(t0=1,(function(r){function t(F,nt){var Q=F.length;F.push(nt);t:for(;0<Q;){var Mt=Q-1>>>1,P=F[Mt];if(0<l(P,nt))F[Mt]=nt,F[Q]=P,Q=Mt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],Q=F.pop();if(Q!==nt){F[0]=Q;t:for(var Mt=0,P=F.length,X=P>>>1;Mt<X;){var dt=2*(Mt+1)-1,mt=F[dt],Ot=dt+1,qt=F[Ot];if(0>l(mt,Q))Ot<P&&0>l(qt,mt)?(F[Mt]=qt,F[Ot]=Q,Mt=Ot):(F[Mt]=mt,F[dt]=Q,Mt=dt);else if(Ot<P&&0>l(qt,Q))F[Mt]=qt,F[Ot]=Q,Mt=Ot;else break t}}return nt}function l(F,nt){var Q=F.sortIndex-nt.sortIndex;return Q!==0?Q:F.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,x=3,y=!1,b=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var nt=i(p);nt!==null;){if(nt.callback===null)s(p);else if(nt.startTime<=F)s(p),nt.sortIndex=nt.expirationTime,t(m,nt);else break;nt=i(p)}}function O(F){if(T=!1,C(F),!b)if(i(m)!==null)b=!0,z||(z=!0,K());else{var nt=i(p);nt!==null&&ut(O,nt.startTime-F)}}var z=!1,B=-1,V=5,R=-1;function U(){return S?!0:!(r.unstable_now()-R<V)}function H(){if(S=!1,z){var F=r.unstable_now();R=F;var nt=!0;try{t:{b=!1,T&&(T=!1,N(B),B=-1),y=!0;var Q=x;try{e:{for(C(F),g=i(m);g!==null&&!(g.expirationTime>F&&U());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,x=g.priorityLevel;var P=Mt(g.expirationTime<=F);if(F=r.unstable_now(),typeof P=="function"){g.callback=P,C(F),nt=!0;break e}g===i(m)&&s(m),C(F)}else s(m);g=i(m)}if(g!==null)nt=!0;else{var X=i(p);X!==null&&ut(O,X.startTime-F),nt=!1}}break t}finally{g=null,x=Q,y=!1}nt=void 0}}finally{nt?K():z=!1}}}var K;if(typeof L=="function")K=function(){L(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=H,K=function(){ct.postMessage(null)}}else K=function(){v(H,0)};function ut(F,nt){B=v(function(){F(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(F){switch(x){case 1:case 2:case 3:var nt=3;break;default:nt=x}var Q=x;x=nt;try{return F()}finally{x=Q}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=x;x=F;try{return nt()}finally{x=Q}},r.unstable_scheduleCallback=function(F,nt,Q){var Mt=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Mt+Q:Mt):Q=Mt,F){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Q+P,F={id:_++,callback:nt,priorityLevel:F,startTime:Q,expirationTime:P,sortIndex:-1},Q>Mt?(F.sortIndex=Q,t(p,F),i(m)===null&&F===i(p)&&(T?(N(B),B=-1):T=!0,ut(O,Q-Mt))):(F.sortIndex=P,t(m,F),b||y||(b=!0,z||(z=!0,K()))),F},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(F){var nt=x;return function(){var Q=x;x=nt;try{return F.apply(this,arguments)}finally{x=Q}}}})(Sh)),Sh}var e0;function xS(){return e0||(e0=1,yh.exports=vS()),yh.exports}var Mh={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function yS(){if(n0)return Kn;n0=1;var r=sp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Kn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Kn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Kn.requestFormReset=function(m){s.d.r(m)},Kn.unstable_batchedUpdates=function(m,p){return m(p)},Kn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Kn.version="19.1.1",Kn}var i0;function SS(){if(i0)return Mh.exports;i0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=yS(),Mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function MS(){if(a0)return jo;a0=1;var r=xS(),t=sp(),i=SS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,D=u.child;D;){if(D===a){M=!0,a=u,o=d;break}if(D===o){M=!0,o=u,a=d;break}D=D.sibling}if(!M){for(D=d.child;D;){if(D===a){M=!0,a=d,o=u;break}if(D===o){M=!0,o=d,a=u;break}D=D.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case O:return"Suspense";case z:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case L:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ut=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Mt=[],P=-1;function X(e){return{current:e}}function dt(e){0>P||(e.current=Mt[P],Mt[P]=null,P--)}function mt(e,n){P++,Mt[P]=e.current,e.current=n}var Ot=X(null),qt=X(null),it=X(null),yt=X(null);function Dt(e,n){switch(mt(it,n),mt(qt,e),mt(Ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?b_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=b_(n),e=T_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(Ot),mt(Ot,e)}function se(){dt(Ot),dt(qt),dt(it)}function Xt(e){e.memoizedState!==null&&mt(yt,e);var n=Ot.current,a=T_(n,e.type);n!==a&&(mt(qt,e),mt(Ot,a))}function oe(e){qt.current===e&&(dt(Ot),dt(qt)),yt.current===e&&(dt(yt),Bo._currentValue=Q)}var Qe=Object.prototype.hasOwnProperty,k=r.unstable_scheduleCallback,ze=r.unstable_cancelCallback,de=r.unstable_shouldYield,le=r.unstable_requestPaint,Ft=r.unstable_now,He=r.unstable_getCurrentPriorityLevel,Gt=r.unstable_ImmediatePriority,ge=r.unstable_UserBlockingPriority,en=r.unstable_NormalPriority,nn=r.unstable_LowPriority,I=r.unstable_IdlePriority,A=r.log,$=r.unstable_setDisableYieldValue,gt=null,ht=null;function pt(e){if(typeof A=="function"&&$(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(gt,e)}catch{}}var kt=Math.clz32?Math.clz32:Yt,At=Math.log,$t=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(At(e)/$t|0)|0}var bt=256,Bt=4194304;function ne(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~d,o!==0?u=ne(o):(M&=D,M!==0?u=ne(M):a||(a=D&~e,a!==0&&(u=ne(a))))):(D=o&~d,D!==0?u=ne(D):M!==0?u=ne(M):a||(a=o&~e,a!==0&&(u=ne(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Nt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z(){var e=bt;return bt<<=1,(bt&4194048)===0&&(bt=256),e}function Rt(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Lt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Wt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wt(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,G=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var vt=31-kt(a),Et=1<<vt;D[vt]=0,G[vt]=-1;var lt=st[vt];if(lt!==null)for(st[vt]=null,vt=0;vt<lt.length;vt++){var ft=lt[vt];ft!==null&&(ft.lane&=-536870913)}a&=~Et}o!==0&&xt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function xt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-kt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Kt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-kt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ue(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:j_(e.type))}function at(e,n){var a=nt.p;try{return nt.p=e,n()}finally{nt.p=a}}var Ht=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Ht,ee="__reactProps$"+Ht,Ce="__reactContainer$"+Ht,Ut="__reactEvents$"+Ht,Ct="__reactListeners$"+Ht,Zt="__reactHandles$"+Ht,Ze="__reactResources$"+Ht,Ee="__reactMarker$"+Ht;function Ie(e){delete e[Vt],delete e[ee],delete e[Ut],delete e[Ct],delete e[Zt]}function Je(e){var n=e[Vt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ce]||a[Vt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=C_(e);e!==null;){if(a=e[Vt])return a;e=C_(e)}return n}e=a,a=e.parentNode}return null}function Xe(e){if(e=e[Vt]||e[Ce]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Fe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ge(e){var n=e[Ze];return n||(n=e[Ze]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function We(e){e[Ee]=!0}var ae=new Set,Cn={};function w(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(Cn[e]=n,e=0;e<n.length;e++)ae.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},j={};function _t(e){return Qe.call(j,e)?!0:Qe.call(tt,e)?!1:ot.test(e)?j[e]=!0:(tt[e]=!0,!1)}function Tt(e,n,a){if(_t(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Jt,he;function ie(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+he}var ye=!1;function Se(e,n){if(!e||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ft){var lt=ft}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(ft){lt=ft}e.call(Et.prototype)}}else{try{throw Error()}catch(ft){lt=ft}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ft){if(ft&&lt&&typeof ft.stack=="string")return[ft.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],D=d[1];if(M&&D){var G=M.split(`
`),st=D.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===st.length)for(o=G.length-1,u=st.length-1;1<=o&&0<=u&&G[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==st[u]){var vt=`
`+G[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ie(a):""}function Ke(e){switch(e.tag){case 26:case 27:case 5:return ie(e.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return ie("Activity");default:return""}}function qe(e){try{var n="";do n+=Ke(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function dn(e){var n=fe(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function De(e){e._valueTracker||(e._valueTracker=dn(e))}function qn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=fe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $n=/[\n"\\]/g;function In(e){return e.replace($n,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function un(e,n,a,o,u,d,M,D){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Yn(e,M,xe(n)):a!=null?Yn(e,M,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+xe(D):e.removeAttribute("name")}function ti(e,n,a,o,u,d,M,D){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Yn(e,n,a){n==="number"&&Li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function yn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function kn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function ks(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||hx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&bp(e,d,n[d])}function mu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return px.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,js=null;function Ap(e){var n=Xe(e);if(n&&(e=n.stateNode)){var a=e[ee]||null;t:switch(e=n.stateNode,n.type){case"input":if(un(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+In(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ee]||null;if(!u)throw Error(s(90));un(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&qn(o)}break t;case"textarea":kn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&yn(e,!!a.multiple,n,!1)}}}var vu=!1;function wp(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,(Vs!==null||js!==null)&&(tc(),Vs&&(n=Vs,e=js,js=Vs=null,Ap(n),e)))for(n=0;n<e.length;n++)Ap(e[n])}}function Kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ee]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(na)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{xu=!1}var Ra=null,yu=null,gl=null;function Rp(){if(gl)return gl;var e,n=yu,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Cp(){return!1}function si(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(d):d[D]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vl:Cp,this.isPropagationStopped=Cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=si(cs),Jr=_({},cs,{view:0,detail:0}),mx=si(Jr),Su,Mu,$r,yl=_({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(Su=e.screenX-$r.screenX,Mu=e.screenY-$r.screenY):Mu=Su=0,$r=e),Su)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Dp=si(yl),gx=_({},yl,{dataTransfer:0}),_x=si(gx),vx=_({},Jr,{relatedTarget:0}),Eu=si(vx),xx=_({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=si(xx),Sx=_({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mx=si(Sx),Ex=_({},cs,{data:0}),Up=si(Ex),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ax[e])?!!n[e]:!1}function bu(){return wx}var Rx=_({},Jr,{key:function(e){if(e.key){var n=bx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cx=si(Rx),Dx=_({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=si(Dx),Ux=_({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Lx=si(Ux),Nx=_({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=si(Nx),Px=_({},yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=si(Px),Ix=_({},cs,{newState:0,oldState:0}),Bx=si(Ix),Fx=[9,13,27,32],Tu=na&&"CompositionEvent"in window,to=null;na&&"documentMode"in document&&(to=document.documentMode);var Hx=na&&"TextEvent"in window&&!to,Np=na&&(!Tu||to&&8<to&&11>=to),Op=" ",Pp=!1;function zp(e,n){switch(e){case"keyup":return Fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Gx(e,n){switch(e){case"compositionend":return Ip(n);case"keypress":return n.which!==32?null:(Pp=!0,Op);case"textInput":return e=n.data,e===Op&&Pp?null:e;default:return null}}function kx(e,n){if(Xs)return e==="compositionend"||!Tu&&zp(e,n)?(e=Rp(),gl=yu=Ra=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Np&&n.locale!=="ko"?null:n.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Vx[e.type]:n==="textarea"}function Fp(e,n,a,o){Vs?js?js.push(o):js=[o]:Vs=o,n=rc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var eo=null,no=null;function jx(e){x_(e,0)}function Sl(e){var n=Fe(e);if(qn(n))return e}function Hp(e,n){if(e==="change")return n}var Gp=!1;if(na){var Au;if(na){var wu="oninput"in document;if(!wu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),wu=typeof kp.oninput=="function"}Au=wu}else Au=!1;Gp=Au&&(!document.documentMode||9<document.documentMode)}function Vp(){eo&&(eo.detachEvent("onpropertychange",jp),no=eo=null)}function jp(e){if(e.propertyName==="value"&&Sl(no)){var n=[];Fp(n,no,e,_u(e)),wp(jx,n)}}function Xx(e,n,a){e==="focusin"?(Vp(),eo=n,no=a,eo.attachEvent("onpropertychange",jp)):e==="focusout"&&Vp()}function Wx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(no)}function qx(e,n){if(e==="click")return Sl(n)}function Yx(e,n){if(e==="input"||e==="change")return Sl(n)}function Zx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:Zx;function io(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qe.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,n){var a=Xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xp(a)}}function qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Li(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Li(e.document)}return n}function Ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kx=na&&"documentMode"in document&&11>=document.documentMode,Ws=null,Cu=null,ao=null,Du=!1;function Zp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Ws==null||Ws!==Li(o)||(o=Ws,"selectionStart"in o&&Ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=rc(Cu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ws)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},Uu={},Kp={};na&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function fs(e){if(Uu[e])return Uu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kp)return Uu[e]=n[a];return e}var Qp=fs("animationend"),Jp=fs("animationiteration"),$p=fs("animationstart"),Qx=fs("transitionrun"),Jx=fs("transitionstart"),$x=fs("transitioncancel"),tm=fs("transitionend"),em=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ni(e,n){em.set(e,n),w(n,[e])}var nm=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=nm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qe(n)},nm.set(e,n),n)}return{value:e,source:n,stack:qe(n)}}var bi=[],Ys=0,Nu=0;function Ml(){for(var e=Ys,n=Nu=Ys=0;n<e;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var d=bi[n];if(bi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&im(a,u,d)}}function El(e,n,a,o){bi[Ys++]=e,bi[Ys++]=n,bi[Ys++]=a,bi[Ys++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return El(e,n,a,o),bl(e)}function Zs(e,n){return El(e,null,null,n),bl(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-kt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function bl(e){if(50<Do)throw Do=0,Gf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ks={};function ty(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,n,a,o){return new ty(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=di(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Pu(e)&&(M=1);else if(typeof e=="string")M=nS(e,a,Ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=di(31,a,n,u),e.elementType=R,e.lanes=d,e;case b:return hs(a.children,u,d,n);case T:M=8,u|=24;break;case S:return e=di(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case O:return e=di(13,a,n,u),e.elementType=O,e.lanes=d,e;case z:return e=di(19,a,n,u),e.elementType=z,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:M=10;break t;case N:M=9;break t;case C:M=11;break t;case B:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=di(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function hs(e,n,a,o){return e=di(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=di(6,e,null,n),e.lanes=a,e}function Iu(e,n,a){return n=di(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Qs=[],Js=0,Al=null,wl=0,Ti=[],Ai=0,ds=null,aa=1,sa="";function ps(e,n){Qs[Js++]=wl,Qs[Js++]=Al,Al=e,wl=n}function sm(e,n,a){Ti[Ai++]=aa,Ti[Ai++]=sa,Ti[Ai++]=ds,ds=e;var o=aa;e=sa;var u=32-kt(o)-1;o&=~(1<<u),a+=1;var d=32-kt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,aa=1<<32-kt(n)+u|a<<u|o,sa=d+e}else aa=1<<d|a<<u|o,sa=e}function Bu(e){e.return!==null&&(ps(e,1),sm(e,1,0))}function Fu(e){for(;e===Al;)Al=Qs[--Js],Qs[Js]=null,wl=Qs[--Js],Qs[Js]=null;for(;e===ds;)ds=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null,aa=Ti[--Ai],Ti[Ai]=null}var ei=null,Sn=null,Ye=!1,ms=null,ji=!1,Hu=Error(s(519));function gs(e){var n=Error(s(418,""));throw oo(Ei(n,e)),Hu}function rm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Vt]=e,n[ee]=o,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Le(Lo[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),ti(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),De(n);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),ks(n,o.value,o.defaultValue,o.children),De(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||E_(n.textContent,a)?(o.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),o.onScroll!=null&&Le("scroll",n),o.onScrollEnd!=null&&Le("scrollend",n),o.onClick!=null&&(n.onclick=oc),n=!0):n=!1,n||gs(e)}function om(e){for(ei=e.return;ei;)switch(ei.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:ei=ei.return}}function so(e){if(e!==ei)return!1;if(!Ye)return om(e),Ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&Sn&&gs(e),om(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Sn=Pi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Sn=null}}else n===27?(n=Sn,ja(e.type)?(e=oh,oh=null,Sn=e):Sn=n):Sn=ei?Pi(e.stateNode.nextSibling):null;return!0}function ro(){Sn=ei=null,Ye=!1}function lm(){var e=ms;return e!==null&&(li===null?li=e:li.push.apply(li,e),ms=null),e}function oo(e){ms===null?ms=[e]:ms.push(e)}var Gu=X(null),_s=null,ra=null;function Ca(e,n,a){mt(Gu,n._currentValue),n._currentValue=a}function oa(e){e._currentValue=Gu.current,dt(Gu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Vu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var D=d;d=u;for(var G=0;G<n.length;G++)if(D.context===n[G]){d.lanes|=a,D=d.alternate,D!==null&&(D.lanes|=a),ku(d.return,a,e),o||(M=null);break t}d=D.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),ku(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function lo(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var D=u.type;hi(u.pendingProps.value,M.value)||(e!==null?e.push(D):e=[D])}}else if(u===yt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Vu(n,e,a,o),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zn(e){return cm(_s,e)}function Cl(e,n){return _s===null&&vs(e),cm(e,n)}function cm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(s(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var ey=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ny=r.unstable_scheduleCallback,iy=r.unstable_NormalPriority,Dn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new ey,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&ny(iy,function(){e.controller.abort()})}var uo=null,Xu=0,$s=0,tr=null;function ay(e,n){if(uo===null){var a=uo=[];Xu=0,$s=Yf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Xu++,n.then(um,um),n}function um(){if(--Xu===0&&uo!==null){tr!==null&&(tr.status="fulfilled");var e=uo;uo=null,$s=0,tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var fm=F.S;F.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ay(e,n),fm!==null&&fm(e,n)};var xs=X(null);function Wu(){var e=xs.current;return e!==null?e:hn.pooledCache}function Dl(e,n){n===null?mt(xs,xs.current):mt(xs,n.pool)}function hm(){var e=Wu();return e===null?null:{parent:Dn._currentValue,pool:e}}var fo=Error(s(460)),dm=Error(s(474)),Ul=Error(s(542)),qu={then:function(){}};function pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ll(){}function mm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ll,Ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e;default:if(typeof n.status=="string")n.then(Ll,Ll);else{if(e=hn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e}throw ho=n,fo}}var ho=null;function gm(){if(ho===null)throw Error(s(459));var e=ho;return ho=null,e}function _m(e){if(e===fo||e===Ul)throw Error(s(483))}var Da=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,($e&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(e),im(e,null,a),n}return El(e,o,n,a),bl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kt(e,a)}}function Ku(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Qu=!1;function mo(){if(Qu){var e=tr;if(e!==null)throw e}}function go(e,n,a,o){Qu=!1;var u=e.updateQueue;Da=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var G=D,st=G.next;G.next=null,M===null?d=st:M.next=st,M=G;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,D=vt.lastBaseUpdate,D!==M&&(D===null?vt.firstBaseUpdate=st:D.next=st,vt.lastBaseUpdate=G))}if(d!==null){var Et=u.baseState;M=0,vt=st=G=null,D=d;do{var lt=D.lane&-536870913,ft=lt!==D.lane;if(ft?(Be&lt)===lt:(o&lt)===lt){lt!==0&&lt===$s&&(Qu=!0),vt!==null&&(vt=vt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var _e=e,pe=D;lt=n;var rn=a;switch(pe.tag){case 1:if(_e=pe.payload,typeof _e=="function"){Et=_e.call(rn,Et,lt);break t}Et=_e;break t;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=pe.payload,lt=typeof _e=="function"?_e.call(rn,Et,lt):_e,lt==null)break t;Et=_({},Et,lt);break t;case 2:Da=!0}}lt=D.callback,lt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[lt]:ft.push(lt))}else ft={lane:lt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},vt===null?(st=vt=ft,G=Et):vt=vt.next=ft,M|=lt;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ft=D,D=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);vt===null&&(G=Et),u.baseState=G,u.firstBaseUpdate=st,u.lastBaseUpdate=vt,d===null&&(u.shared.lanes=0),Ha|=M,e.lanes=M,e.memoizedState=Et}}function vm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function xm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vm(a[e],n)}var er=X(null),Nl=X(0);function ym(e,n){e=pa,mt(Nl,e),mt(er,n),pa=e|n.baseLanes}function Ju(){mt(Nl,pa),mt(er,er.current)}function $u(){pa=Nl.current,dt(er),dt(Nl)}var Na=0,we=null,an=null,An=null,Ol=!1,nr=!1,ys=!1,Pl=0,_o=0,ir=null,ry=0;function En(){throw Error(s(321))}function tf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function ef(e,n,a,o,u,d){return Na=d,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?ig:ag,ys=!1,d=a(o,u),ys=!1,nr&&(d=Mm(n,a,o,u)),Sm(e),d}function Sm(e){F.H=Gl;var n=an!==null&&an.next!==null;if(Na=0,An=an=we=null,Ol=!1,_o=0,ir=null,n)throw Error(s(300));e===null||Bn||(e=e.dependencies,e!==null&&Rl(e)&&(Bn=!0))}function Mm(e,n,a,o){we=e;var u=0;do{if(nr&&(ir=null),_o=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,An=an=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=dy,d=n(a,o)}while(nr);return d}function oy(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(we.flags|=1024),n}function nf(){var e=Pl!==0;return Pl=0,e}function af(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function sf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}Na=0,An=an=we=null,nr=!1,_o=Pl=0,ir=null}function ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?we.memoizedState=An=e:An=An.next=e,An}function wn(){if(an===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var n=An===null?we.memoizedState:An.next;if(n!==null)An=n,an=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},An===null?we.memoizedState=An=e:An=An.next=e}return An}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,ir===null&&(ir=[]),e=mm(ir,e,n),n=we,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?ig:ag),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===L)return Zn(e)}throw Error(s(438,String(e)))}function of(e){var n=null,a=we.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=we.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rf(),we.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=wn();return lf(n,an,e)}function lf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var D=M=null,G=null,st=n,vt=!1;do{var Et=st.lane&-536870913;if(Et!==st.lane?(Be&Et)===Et:(Na&Et)===Et){var lt=st.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),Et===$s&&(vt=!0);else if((Na&lt)===lt){st=st.next,lt===$s&&(vt=!0);continue}else Et={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(D=G=Et,M=d):G=G.next=Et,we.lanes|=lt,Ha|=lt;Et=st.action,ys&&a(d,Et),d=st.hasEagerState?st.eagerState:a(d,Et)}else lt={lane:Et,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(D=G=lt,M=d):G=G.next=lt,we.lanes|=Et,Ha|=Et;st=st.next}while(st!==null&&st!==n);if(G===null?M=d:G.next=D,!hi(d,e.memoizedState)&&(Bn=!0,vt&&(a=tr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function cf(e){var n=wn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);hi(d,n.memoizedState)||(Bn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Em(e,n,a){var o=we,u=wn(),d=Ye;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!hi((an||u).memoizedState,a);M&&(u.memoizedState=a,Bn=!0),u=u.queue;var D=Am.bind(null,o,u,e);if(xo(2048,8,D,[e]),u.getSnapshot!==n||M||An!==null&&An.memoizedState.tag&1){if(o.flags|=2048,ar(9,Bl(),Tm.bind(null,o,u,a,n),null),hn===null)throw Error(s(349));d||(Na&124)!==0||bm(o,n,a)}return a}function bm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=we.updateQueue,n===null?(n=rf(),we.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tm(e,n,a,o){n.value=a,n.getSnapshot=o,wm(n)&&Rm(e)}function Am(e,n,a){return a(function(){wm(n)&&Rm(e)})}function wm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function Rm(e){var n=Zs(e,2);n!==null&&vi(n,e,2)}function uf(e){var n=ri();if(typeof e=="function"){var a=e;if(e=a(),ys){pt(!0);try{a()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function Cm(e,n,a,o){return e.baseState=a,lf(e,an,typeof o=="function"?o:la)}function ly(e,n,a,o,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Dm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=F.T,M={};F.T=M;try{var D=a(u,o),G=F.S;G!==null&&G(M,D),Um(e,n,D)}catch(st){ff(e,n,st)}finally{F.T=d}}else try{d=a(u,o),Um(e,n,d)}catch(st){ff(e,n,st)}}function Um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Lm(e,n,o)},function(o){return ff(e,n,o)}):Lm(e,n,a)}function Lm(e,n,a){n.status="fulfilled",n.value=a,Nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dm(e,a)))}function ff(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}e.action=null}function Nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Om(e,n){return n}function Pm(e,n){if(Ye){var a=hn.formState;if(a!==null){t:{var o=we;if(Ye){if(Sn){e:{for(var u=Sn,d=ji;u.nodeType!==8;){if(!d){u=null;break e}if(u=Pi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Sn=Pi(u.nextSibling),o=u.data==="F!";break t}}gs(o)}o=!1}o&&(n=a[0])}}return a=ri(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},a.queue=o,a=tg.bind(null,we,o),o.dispatch=a,o=uf(!1),d=gf.bind(null,we,!1,o.queue),o=ri(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=ly.bind(null,we,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function zm(e){var n=wn();return Im(n,an,e)}function Im(e,n,a){if(n=lf(e,n,Om)[0],e=Il(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(M){throw M===fo?Ul:M}else o=n;n=wn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(we.flags|=2048,ar(9,Bl(),cy.bind(null,u,a),null)),[o,d,e]}function cy(e,n){e.action=n}function Bm(e){var n=wn(),a=an;if(a!==null)return Im(n,a,e);wn(),n=n.memoizedState,a=wn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ar(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=we.updateQueue,n===null&&(n=rf(),we.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bl(){return{destroy:void 0,resource:void 0}}function Fm(){return wn().memoizedState}function Fl(e,n,a,o){var u=ri();o=o===void 0?null:o,we.flags|=e,u.memoizedState=ar(1|n,Bl(),a,o)}function xo(e,n,a,o){var u=wn();o=o===void 0?null:o;var d=u.memoizedState.inst;an!==null&&o!==null&&tf(o,an.memoizedState.deps)?u.memoizedState=ar(n,d,a,o):(we.flags|=e,u.memoizedState=ar(1|n,d,a,o))}function Hm(e,n){Fl(8390656,8,e,n)}function Gm(e,n){xo(2048,8,e,n)}function km(e,n){return xo(4,2,e,n)}function Vm(e,n){return xo(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xm(e,n,a){a=a!=null?a.concat([e]):null,xo(4,4,jm.bind(null,n,e),a)}function hf(){}function Wm(e,n){var a=wn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=wn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=e(),ys){pt(!0);try{e()}finally{pt(!1)}}return a.memoizedState=[o,n],o}function df(e,n,a){return a===void 0||(Na&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),we.lanes|=e,Ha|=e,a)}function Ym(e,n,a,o){return hi(a,n)?a:er.current!==null?(e=df(e,a,o),hi(e,n)||(Bn=!0),e):(Na&42)===0?(Bn=!0,e.memoizedState=a):(e=Kg(),we.lanes|=e,Ha|=e,n)}function Zm(e,n,a,o,u){var d=nt.p;nt.p=d!==0&&8>d?d:8;var M=F.T,D={};F.T=D,gf(e,!1,n,a);try{var G=u(),st=F.S;if(st!==null&&st(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=sy(G,o);yo(e,n,vt,_i(e))}else yo(e,n,o,_i(e))}catch(Et){yo(e,n,{then:function(){},status:"rejected",reason:Et},_i())}finally{nt.p=d,F.T=M}}function uy(){}function pf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Km(e).queue;Zm(e,u,n,Q,a===null?uy:function(){return Qm(e),a(o)})}function Km(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qm(e){var n=Km(e).next.queue;yo(e,n,{},_i())}function mf(){return Zn(Bo)}function Jm(){return wn().memoizedState}function $m(){return wn().memoizedState}function fy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=Ua(a);var o=La(n,e,a);o!==null&&(vi(o,n,a),po(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function hy(e,n,a){var o=_i();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?eg(n,a):(a=Ou(e,n,a,o),a!==null&&(vi(a,e,o),ng(a,n,o)))}function tg(e,n,a){var o=_i();yo(e,n,a,o)}function yo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))eg(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,D=d(M,a);if(u.hasEagerState=!0,u.eagerState=D,hi(D,M))return El(e,n,u,0),hn===null&&Ml(),!1}catch{}finally{}if(a=Ou(e,n,u,o),a!==null)return vi(a,e,o),ng(a,n,o),!0}return!1}function gf(e,n,a,o){if(o={lane:2,revertLane:Yf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&vi(n,e,2)}function Hl(e){var n=e.alternate;return e===we||n!==null&&n===we}function eg(e,n){nr=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ng(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kt(e,a)}}var Gl={readContext:Zn,use:zl,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useLayoutEffect:En,useInsertionEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useSyncExternalStore:En,useId:En,useHostTransitionStatus:En,useFormState:En,useActionState:En,useOptimistic:En,useMemoCache:En,useCacheRefresh:En},ig={readContext:Zn,use:zl,useCallback:function(e,n){return ri().memoizedState=[e,n===void 0?null:n],e},useContext:Zn,useEffect:Hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var a=ri();n=n===void 0?null:n;var o=e();if(ys){pt(!0);try{e()}finally{pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=ri();if(a!==void 0){var u=a(n);if(ys){pt(!0);try{a(n)}finally{pt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=hy.bind(null,we,e),[o.memoizedState,e]},useRef:function(e){var n=ri();return e={current:e},n.memoizedState=e},useState:function(e){e=uf(e);var n=e.queue,a=tg.bind(null,we,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(e,n){var a=ri();return df(a,e,n)},useTransition:function(){var e=uf(!1);return e=Zm.bind(null,we,e.queue,!0,!1),ri().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=we,u=ri();if(Ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),hn===null)throw Error(s(349));(Be&124)!==0||bm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Hm(Am.bind(null,o,d,e),[e]),o.flags|=2048,ar(9,Bl(),Tm.bind(null,o,d,a,n),null),a},useId:function(){var e=ri(),n=hn.identifierPrefix;if(Ye){var a=sa,o=aa;a=(o&~(1<<32-kt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ry++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:mf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e){var n=ri();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,we,!0,a),a.dispatch=n,[e,n]},useMemoCache:of,useCacheRefresh:function(){return ri().memoizedState=fy.bind(null,we)}},ag={readContext:Zn,use:zl,useCallback:Wm,useContext:Zn,useEffect:Gm,useImperativeHandle:Xm,useInsertionEffect:km,useLayoutEffect:Vm,useMemo:qm,useReducer:Il,useRef:Fm,useState:function(){return Il(la)},useDebugValue:hf,useDeferredValue:function(e,n){var a=wn();return Ym(a,an.memoizedState,e,n)},useTransition:function(){var e=Il(la)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:mf,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=wn();return Cm(a,an,e,n)},useMemoCache:of,useCacheRefresh:$m},dy={readContext:Zn,use:zl,useCallback:Wm,useContext:Zn,useEffect:Gm,useImperativeHandle:Xm,useInsertionEffect:km,useLayoutEffect:Vm,useMemo:qm,useReducer:cf,useRef:Fm,useState:function(){return cf(la)},useDebugValue:hf,useDeferredValue:function(e,n){var a=wn();return an===null?df(a,e,n):Ym(a,an.memoizedState,e,n)},useTransition:function(){var e=cf(la)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,n){var a=wn();return an!==null?Cm(a,an,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:$m},sr=null,So=0;function kl(e){var n=So;return So+=1,sr===null&&(sr=[]),mm(sr,e,n)}function Mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sg(e){var n=e._init;return n(e._payload)}function rg(e){function n(J,Y){if(e){var et=J.deletions;et===null?(J.deletions=[Y],J.flags|=16):et.push(Y)}}function a(J,Y){if(!e)return null;for(;Y!==null;)n(J,Y),Y=Y.sibling;return null}function o(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function u(J,Y){return J=ia(J,Y),J.index=0,J.sibling=null,J}function d(J,Y,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<Y?(J.flags|=67108866,Y):et):(J.flags|=67108866,Y)):(J.flags|=1048576,Y)}function M(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function D(J,Y,et,St){return Y===null||Y.tag!==6?(Y=zu(et,J.mode,St),Y.return=J,Y):(Y=u(Y,et),Y.return=J,Y)}function G(J,Y,et,St){var te=et.type;return te===b?vt(J,Y,et.props.children,St,et.key):Y!==null&&(Y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===V&&sg(te)===Y.type)?(Y=u(Y,et.props),Mo(Y,et),Y.return=J,Y):(Y=Tl(et.type,et.key,et.props,null,J.mode,St),Mo(Y,et),Y.return=J,Y)}function st(J,Y,et,St){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==et.containerInfo||Y.stateNode.implementation!==et.implementation?(Y=Iu(et,J.mode,St),Y.return=J,Y):(Y=u(Y,et.children||[]),Y.return=J,Y)}function vt(J,Y,et,St,te){return Y===null||Y.tag!==7?(Y=hs(et,J.mode,St,te),Y.return=J,Y):(Y=u(Y,et),Y.return=J,Y)}function Et(J,Y,et){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=zu(""+Y,J.mode,et),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case x:return et=Tl(Y.type,Y.key,Y.props,null,J.mode,et),Mo(et,Y),et.return=J,et;case y:return Y=Iu(Y,J.mode,et),Y.return=J,Y;case V:var St=Y._init;return Y=St(Y._payload),Et(J,Y,et)}if(ut(Y)||K(Y))return Y=hs(Y,J.mode,et,null),Y.return=J,Y;if(typeof Y.then=="function")return Et(J,kl(Y),et);if(Y.$$typeof===L)return Et(J,Cl(J,Y),et);Vl(J,Y)}return null}function lt(J,Y,et,St){var te=Y!==null?Y.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return te!==null?null:D(J,Y,""+et,St);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===te?G(J,Y,et,St):null;case y:return et.key===te?st(J,Y,et,St):null;case V:return te=et._init,et=te(et._payload),lt(J,Y,et,St)}if(ut(et)||K(et))return te!==null?null:vt(J,Y,et,St,null);if(typeof et.then=="function")return lt(J,Y,kl(et),St);if(et.$$typeof===L)return lt(J,Y,Cl(J,et),St);Vl(J,et)}return null}function ft(J,Y,et,St,te){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return J=J.get(et)||null,D(Y,J,""+St,te);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return J=J.get(St.key===null?et:St.key)||null,G(Y,J,St,te);case y:return J=J.get(St.key===null?et:St.key)||null,st(Y,J,St,te);case V:var Re=St._init;return St=Re(St._payload),ft(J,Y,et,St,te)}if(ut(St)||K(St))return J=J.get(et)||null,vt(Y,J,St,te,null);if(typeof St.then=="function")return ft(J,Y,et,kl(St),te);if(St.$$typeof===L)return ft(J,Y,et,Cl(Y,St),te);Vl(Y,St)}return null}function _e(J,Y,et,St){for(var te=null,Re=null,re=Y,me=Y=0,Hn=null;re!==null&&me<et.length;me++){re.index>me?(Hn=re,re=null):Hn=re.sibling;var ke=lt(J,re,et[me],St);if(ke===null){re===null&&(re=Hn);break}e&&re&&ke.alternate===null&&n(J,re),Y=d(ke,Y,me),Re===null?te=ke:Re.sibling=ke,Re=ke,re=Hn}if(me===et.length)return a(J,re),Ye&&ps(J,me),te;if(re===null){for(;me<et.length;me++)re=Et(J,et[me],St),re!==null&&(Y=d(re,Y,me),Re===null?te=re:Re.sibling=re,Re=re);return Ye&&ps(J,me),te}for(re=o(re);me<et.length;me++)Hn=ft(re,J,me,et[me],St),Hn!==null&&(e&&Hn.alternate!==null&&re.delete(Hn.key===null?me:Hn.key),Y=d(Hn,Y,me),Re===null?te=Hn:Re.sibling=Hn,Re=Hn);return e&&re.forEach(function(Za){return n(J,Za)}),Ye&&ps(J,me),te}function pe(J,Y,et,St){if(et==null)throw Error(s(151));for(var te=null,Re=null,re=Y,me=Y=0,Hn=null,ke=et.next();re!==null&&!ke.done;me++,ke=et.next()){re.index>me?(Hn=re,re=null):Hn=re.sibling;var Za=lt(J,re,ke.value,St);if(Za===null){re===null&&(re=Hn);break}e&&re&&Za.alternate===null&&n(J,re),Y=d(Za,Y,me),Re===null?te=Za:Re.sibling=Za,Re=Za,re=Hn}if(ke.done)return a(J,re),Ye&&ps(J,me),te;if(re===null){for(;!ke.done;me++,ke=et.next())ke=Et(J,ke.value,St),ke!==null&&(Y=d(ke,Y,me),Re===null?te=ke:Re.sibling=ke,Re=ke);return Ye&&ps(J,me),te}for(re=o(re);!ke.done;me++,ke=et.next())ke=ft(re,J,me,ke.value,St),ke!==null&&(e&&ke.alternate!==null&&re.delete(ke.key===null?me:ke.key),Y=d(ke,Y,me),Re===null?te=ke:Re.sibling=ke,Re=ke);return e&&re.forEach(function(pS){return n(J,pS)}),Ye&&ps(J,me),te}function rn(J,Y,et,St){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var te=et.key;Y!==null;){if(Y.key===te){if(te=et.type,te===b){if(Y.tag===7){a(J,Y.sibling),St=u(Y,et.props.children),St.return=J,J=St;break t}}else if(Y.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===V&&sg(te)===Y.type){a(J,Y.sibling),St=u(Y,et.props),Mo(St,et),St.return=J,J=St;break t}a(J,Y);break}else n(J,Y);Y=Y.sibling}et.type===b?(St=hs(et.props.children,J.mode,St,et.key),St.return=J,J=St):(St=Tl(et.type,et.key,et.props,null,J.mode,St),Mo(St,et),St.return=J,J=St)}return M(J);case y:t:{for(te=et.key;Y!==null;){if(Y.key===te)if(Y.tag===4&&Y.stateNode.containerInfo===et.containerInfo&&Y.stateNode.implementation===et.implementation){a(J,Y.sibling),St=u(Y,et.children||[]),St.return=J,J=St;break t}else{a(J,Y);break}else n(J,Y);Y=Y.sibling}St=Iu(et,J.mode,St),St.return=J,J=St}return M(J);case V:return te=et._init,et=te(et._payload),rn(J,Y,et,St)}if(ut(et))return _e(J,Y,et,St);if(K(et)){if(te=K(et),typeof te!="function")throw Error(s(150));return et=te.call(et),pe(J,Y,et,St)}if(typeof et.then=="function")return rn(J,Y,kl(et),St);if(et.$$typeof===L)return rn(J,Y,Cl(J,et),St);Vl(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,Y!==null&&Y.tag===6?(a(J,Y.sibling),St=u(Y,et),St.return=J,J=St):(a(J,Y),St=zu(et,J.mode,St),St.return=J,J=St),M(J)):a(J,Y)}return function(J,Y,et,St){try{So=0;var te=rn(J,Y,et,St);return sr=null,te}catch(re){if(re===fo||re===Ul)throw re;var Re=di(29,re,null,J.mode);return Re.lanes=St,Re.return=J,Re}finally{}}}var rr=rg(!0),og=rg(!1),wi=X(null),Xi=null;function Oa(e){var n=e.alternate;mt(Un,Un.current&1),mt(wi,e),Xi===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(Xi=e)}function lg(e){if(e.tag===22){if(mt(Un,Un.current),mt(wi,e),Xi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Xi=e)}}else Pa()}function Pa(){mt(Un,Un.current),mt(wi,wi.current)}function ca(e){dt(wi),Xi===e&&(Xi=null),dt(Un)}var Un=X(0);function jl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function _f(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=_i(),u=Ua(o);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(vi(n,e,o),po(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=_i(),u=Ua(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(vi(n,e,o),po(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),o=Ua(a);o.tag=2,n!=null&&(o.callback=n),n=La(e,o,a),n!==null&&(vi(n,e,a),po(n,e,a))}};function cg(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,d):!0}function ug(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&vf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fg(e){Xl(e)}function hg(e){console.error(e)}function dg(e){Xl(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function mg(e){return e=Ua(e),e.tag=3,e}function gg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){pg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){pg(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function py(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&lo(n,a,u,!0),a=wi.current,a!==null){switch(a.tag){case 13:return Xi===null?Vf():a.alternate===null&&Mn===0&&(Mn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===qu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Xf(e,o,u)),!1;case 22:return a.flags|=65536,o===qu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Xf(e,o,u)),!1}throw Error(s(435,a.tag))}return Xf(e,o,u),Vf(),!1}if(Ye)return n=wi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(s(422),{cause:o}),oo(Ei(e,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),oo(Ei(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ei(o,a),u=xf(e.stateNode,o,u),Ku(e,u),Mn!==4&&(Mn=2)),!1;var d=Error(s(520),{cause:o});if(d=Ei(d,a),Co===null?Co=[d]:Co.push(d),Mn!==4&&(Mn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=xf(a.stateNode,o,e),Ku(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mg(u),gg(u,e,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var _g=Error(s(461)),Bn=!1;function Vn(e,n,a,o){n.child=e===null?og(n,null,a,o):rr(n,e.child,a,o)}function vg(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var D in o)D!=="ref"&&(M[D]=o[D])}else M=o;return vs(n),o=ef(e,n,a,M,d,u),D=nf(),e!==null&&!Bn?(af(e,n,u),ua(e,n,u)):(Ye&&D&&Bu(n),n.flags|=1,Vn(e,n,o,u),n.child)}function xg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Pu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,yg(e,n,d,o,u)):(e=Tl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!wf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(M,o)&&e.ref===n.ref)return ua(e,n,u)}return n.flags|=1,e=ia(d,o),e.ref=n.ref,e.return=n,n.child=e}function yg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(io(d,o)&&e.ref===n.ref)if(Bn=!1,n.pendingProps=o=d,wf(e,u))(e.flags&131072)!==0&&(Bn=!0);else return n.lanes=e.lanes,ua(e,n,u)}return yf(e,n,a,o,u)}function Sg(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Mg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,d!==null?d.cachePool:null),d!==null?ym(n,d):Ju(),lg(n);else return n.lanes=n.childLanes=536870912,Mg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Dl(n,d.cachePool),ym(n,d),Pa(),n.memoizedState=null):(e!==null&&Dl(n,null),Ju(),Pa());return Vn(e,n,u,a),n.child}function Mg(e,n,a,o){var u=Wu();return u=u===null?null:{parent:Dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Dl(n,null),Ju(),lg(n),e!==null&&lo(e,n,o,!0),null}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function yf(e,n,a,o,u){return vs(n),a=ef(e,n,a,o,void 0,u),o=nf(),e!==null&&!Bn?(af(e,n,u),ua(e,n,u)):(Ye&&o&&Bu(n),n.flags|=1,Vn(e,n,a,u),n.child)}function Eg(e,n,a,o,u,d){return vs(n),n.updateQueue=null,a=Mm(n,o,a,u),Sm(e),o=nf(),e!==null&&!Bn?(af(e,n,d),ua(e,n,d)):(Ye&&o&&Bu(n),n.flags|=1,Vn(e,n,a,d),n.child)}function bg(e,n,a,o,u){if(vs(n),n.stateNode===null){var d=Ks,M=a.contextType;typeof M=="object"&&M!==null&&(d=Zn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=vf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Yu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Zn(M):Ks,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(_f(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&vf.enqueueReplaceState(d,d.state,null),go(n,o,d,u),mo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var D=n.memoizedProps,G=Ss(a,D);d.props=G;var st=d.context,vt=a.contextType;M=Ks,typeof vt=="object"&&vt!==null&&(M=Zn(vt));var Et=a.getDerivedStateFromProps;vt=typeof Et=="function"||typeof d.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,vt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(D||st!==M)&&ug(n,d,o,M),Da=!1;var lt=n.memoizedState;d.state=lt,go(n,o,d,u),mo(),st=n.memoizedState,D||lt!==st||Da?(typeof Et=="function"&&(_f(n,a,Et,o),st=n.memoizedState),(G=Da||cg(n,a,G,o,lt,st,M))?(vt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=M,o=G):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Zu(e,n),M=n.memoizedProps,vt=Ss(a,M),d.props=vt,Et=n.pendingProps,lt=d.context,st=a.contextType,G=Ks,typeof st=="object"&&st!==null&&(G=Zn(st)),D=a.getDerivedStateFromProps,(st=typeof D=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Et||lt!==G)&&ug(n,d,o,G),Da=!1,lt=n.memoizedState,d.state=lt,go(n,o,d,u),mo();var ft=n.memoizedState;M!==Et||lt!==ft||Da||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof D=="function"&&(_f(n,a,D,o),ft=n.memoizedState),(vt=Da||cg(n,a,vt,o,lt,ft,G)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(st||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ft,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ft,G)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),d.props=o,d.state=ft,d.context=G,o=vt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,ql(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=rr(n,e.child,null,u),n.child=rr(n,null,a,u)):Vn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ua(e,n,u),e}function Tg(e,n,a,o){return ro(),n.flags|=256,Vn(e,n,a,o),n.child}var Sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mf(e){return{baseLanes:e,cachePool:hm()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Ri),e}function Ag(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(Un.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ye){if(u?Oa(n):Pa(),Ye){var D=Sn,G;if(G=D){t:{for(G=D,D=ji;G.nodeType!==8;){if(!D){D=null;break t}if(G=Pi(G.nextSibling),G===null){D=null;break t}}D=G}D!==null?(n.memoizedState={dehydrated:D,treeContext:ds!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},G=di(18,null,null,0),G.stateNode=D,G.return=n,n.child=G,ei=n,Sn=null,G=!0):G=!1}G||gs(n)}if(D=n.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return rh(D)?n.lanes=32:n.lanes=536870912,null;ca(n)}return D=o.children,o=o.fallback,u?(Pa(),u=n.mode,D=Yl({mode:"hidden",children:D},u),o=hs(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,u=n.child,u.memoizedState=Mf(a),u.childLanes=Ef(e,M,a),n.memoizedState=Sf,o):(Oa(n),bf(n,D))}if(G=e.memoizedState,G!==null&&(D=G.dehydrated,D!==null)){if(d)n.flags&256?(Oa(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),u=o.fallback,D=n.mode,o=Yl({mode:"visible",children:o.children},D),u=hs(u,D,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,rr(n,e.child,null,a),o=n.child,o.memoizedState=Mf(a),o.childLanes=Ef(e,M,a),n.memoizedState=Sf,n=u);else if(Oa(n),rh(D)){if(M=D.nextSibling&&D.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,oo({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(Bn||lo(e,n,a,!1),M=(a&e.childLanes)!==0,Bn||M){if(M=hn,M!==null&&(o=a&-a,o=(o&42)!==0?1:ue(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,Zs(e,o),vi(M,e,o),_g;D.data==="$?"||Vf(),n=Tf(e,n,a)}else D.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Sn=Pi(D.nextSibling),ei=n,Ye=!0,ms=null,ji=!1,e!==null&&(Ti[Ai++]=aa,Ti[Ai++]=sa,Ti[Ai++]=ds,aa=e.id,sa=e.overflow,ds=n),n=bf(n,o.children),n.flags|=4096);return n}return u?(Pa(),u=o.fallback,D=n.mode,G=e.child,st=G.sibling,o=ia(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,st!==null?u=ia(st,u):(u=hs(u,D,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,D=e.child.memoizedState,D===null?D=Mf(a):(G=D.cachePool,G!==null?(st=Dn._currentValue,G=G.parent!==st?{parent:st,pool:st}:G):G=hm(),D={baseLanes:D.baseLanes|a,cachePool:G}),u.memoizedState=D,u.childLanes=Ef(e,M,a),n.memoizedState=Sf,o):(Oa(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=Yl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Yl(e,n){return e=di(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Tf(e,n,a){return rr(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Af(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Vn(e,n,o.children,a),o=Un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,a,n);else if(e.tag===19)wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(mt(Un,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&jl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&jl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,d);break;case"together":Af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ua(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(lo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function my(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ca(n,Dn,e.memoizedState.cache),ro();break;case 27:case 5:Xt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ag(e,n,a):(Oa(n),e=ua(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(lo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(Un,Un.current),o)break;return null;case 22:case 23:return n.lanes=0,Sg(e,n,a);case 24:Ca(n,Dn,e.memoizedState.cache)}return ua(e,n,a)}function Cg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Bn=!0;else{if(!wf(e,a)&&(n.flags&128)===0)return Bn=!1,my(e,n,a);Bn=(e.flags&131072)!==0}else Bn=!1,Ye&&(n.flags&1048576)!==0&&sm(n,wl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Pu(o)?(e=Ss(o,e),n.tag=1,n=bg(null,n,o,e,a)):(n.tag=0,n=yf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=vg(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=xg(null,n,o,e,a);break t}}throw n=ct(o)||o,Error(s(306,n,""))}}return n;case 0:return yf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ss(o,n.pendingProps),bg(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Zu(e,n),go(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ca(n,Dn,o),o!==d.cache&&Vu(n,[Dn],a,!0),mo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Tg(e,n,o,a);break t}else if(o!==u){u=Ei(Error(s(424)),n),oo(u),n=Tg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Sn=Pi(e.firstChild),ei=n,Ye=!0,ms=null,ji=!0,a=og(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ro(),o===u){n=ua(e,n,a);break t}Vn(e,n,o,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ye||(a=n.type,e=n.pendingProps,o=lc(it.current).createElement(a),o[Vt]=n,o[ee]=e,Xn(o,a,e),We(o),n.stateNode=o):n.memoizedState=N_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xt(n),e===null&&Ye&&(o=n.stateNode=D_(n.type,n.pendingProps,it.current),ei=n,ji=!0,u=Sn,ja(n.type)?(oh=u,Sn=Pi(o.firstChild)):Sn=u),Vn(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ye&&((u=o=Sn)&&(o=Vy(o,n.type,n.pendingProps,ji),o!==null?(n.stateNode=o,ei=n,Sn=Pi(o.firstChild),ji=!1,u=!0):u=!1),u||gs(n)),Xt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,ih(u,d)?o=null:M!==null&&ih(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ef(e,n,oy,null,null,a),Bo._currentValue=u),ql(e,n),Vn(e,n,o,a),n.child;case 6:return e===null&&Ye&&((e=a=Sn)&&(a=jy(a,n.pendingProps,ji),a!==null?(n.stateNode=a,ei=n,Sn=null,e=!0):e=!1),e||gs(n)),null;case 13:return Ag(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=rr(n,null,o,a):Vn(e,n,o,a),n.child;case 11:return vg(e,n,n.type,n.pendingProps,a);case 7:return Vn(e,n,n.pendingProps,a),n.child;case 8:return Vn(e,n,n.pendingProps.children,a),n.child;case 12:return Vn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),Vn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Zn(u),o=o(u),n.flags|=1,Vn(e,n,o,a),n.child;case 14:return xg(e,n,n.type,n.pendingProps,a);case 15:return yg(e,n,n.type,n.pendingProps,a);case 19:return Rg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Yl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ia(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Sg(e,n,a);case 24:return vs(n),o=Zn(Dn),e===null?(u=Wu(),u===null&&(u=hn,d=ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Yu(n),Ca(n,Dn,u)):((e.lanes&a)!==0&&(Zu(e,n),go(n,null,null,a),mo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,Dn,o)):(o=d.cache,Ca(n,Dn,o),o!==u.cache&&Vu(n,[Dn],a,!0))),Vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function fa(e){e.flags|=4}function Dg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!B_(n)){if(n=wi.current,n!==null&&((Be&4194048)===Be?Xi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||n!==Xi))throw ho=qu,dm;e.flags|=8192}}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,ur|=n)}function Eo(e,n){if(!Ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function vn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function gy(e,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(n),null;case 1:return vn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),oa(Dn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(so(n)?fa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,lm())),vn(n),null;case 26:return a=n.memoizedState,e===null?(fa(n),a!==null?(vn(n),Dg(n,a)):(vn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(fa(n),vn(n),Dg(n,a)):(vn(n),n.flags&=-16777217):(e.memoizedProps!==o&&fa(n),vn(n),n.flags&=-16777217),null;case 27:oe(n),a=it.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}e=Ot.current,so(n)?rm(n):(e=D_(u,o,a),n.stateNode=e,fa(n))}return vn(n),null;case 5:if(oe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return vn(n),null}if(e=Ot.current,so(n))rm(n);else{switch(u=lc(it.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Vt]=n,e[ee]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Xn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&fa(n)}}return vn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&fa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,so(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=ei,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||E_(e.nodeValue,a)),e||gs(n)}else e=lc(e).createTextNode(o),e[Vt]=n,n.stateNode=e}return vn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=so(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Vt]=n}else ro(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;vn(n),u=!1}else u=lm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ca(n),n):(ca(n),null)}if(ca(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),vn(n),null;case 4:return se(),e===null&&Jf(n.stateNode.containerInfo),vn(n),null;case 10:return oa(n.type),vn(n),null;case 19:if(dt(Un),u=n.memoizedState,u===null)return vn(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)Eo(u,!1);else{if(Mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=jl(e),d!==null){for(n.flags|=128,Eo(u,!1),e=d.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return mt(Un,Un.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ft()>Jl&&(n.flags|=128,o=!0,Eo(u,!1),n.lanes=4194304)}else{if(!o)if(e=jl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),Eo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ye)return vn(n),null}else 2*Ft()-u.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,o=!0,Eo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ft(),n.sibling=null,e=Un.current,mt(Un,o?e&1|2:e&1),n):(vn(n),null);case 22:case 23:return ca(n),$u(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(vn(n),n.subtreeFlags&6&&(n.flags|=8192)):vn(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&dt(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),oa(Dn),vn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function _y(e,n){switch(Fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return oa(Dn),se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return oe(n),null;case 13:if(ca(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ro()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dt(Un),null;case 4:return se(),null;case 10:return oa(n.type),null;case 22:case 23:return ca(n),$u(),e!==null&&dt(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return oa(Dn),null;case 25:return null;default:return null}}function Ug(e,n){switch(Fu(n),n.tag){case 3:oa(Dn),se();break;case 26:case 27:case 5:oe(n);break;case 4:se();break;case 13:ca(n);break;case 19:dt(Un);break;case 10:oa(n.type);break;case 22:case 23:ca(n),$u(),e!==null&&dt(xs);break;case 24:oa(Dn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(D){fn(n,n.return,D)}}function za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,D=M.destroy;if(D!==void 0){M.destroy=void 0,u=n;var G=a,st=D;try{st()}catch(vt){fn(u,G,vt)}}}o=o.next}while(o!==d)}}catch(vt){fn(n,n.return,vt)}}function Lg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xm(n,a)}catch(o){fn(e,e.return,o)}}}function Ng(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){fn(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){fn(e,n,u)}}function Wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){fn(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){fn(e,n,u)}else a.current=null}function Og(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){fn(e,e.return,u)}}function Rf(e,n,a){try{var o=e.stateNode;By(o,e.type,a,n),o[ee]=n}catch(u){fn(e,e.return,u)}}function Pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function Cf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oc));else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Df(e,n,a),e=e.sibling;e!==null;)Df(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function zg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Xn(n,o,a),n[Vt]=e,n[ee]=a}catch(d){fn(e,e.return,d)}}var ha=!1,bn=!1,Uf=!1,Ig=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function vy(e,n){if(e=e.containerInfo,eh=pc,e=Yp(e),Ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,D=-1,G=-1,st=0,vt=0,Et=e,lt=null;e:for(;;){for(var ft;Et!==a||u!==0&&Et.nodeType!==3||(D=M+u),Et!==d||o!==0&&Et.nodeType!==3||(G=M+o),Et.nodeType===3&&(M+=Et.nodeValue.length),(ft=Et.firstChild)!==null;)lt=Et,Et=ft;for(;;){if(Et===e)break e;if(lt===a&&++st===u&&(D=M),lt===d&&++vt===o&&(G=M),(ft=Et.nextSibling)!==null)break;Et=lt,lt=Et.parentNode}Et=ft}a=D===-1||G===-1?null:{start:D,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(nh={focusedElem:e,selectionRange:a},pc=!1,Fn=n;Fn!==null;)if(n=Fn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Fn=e;else for(;Fn!==null;){switch(n=Fn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var _e=Ss(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(_e,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(pe){fn(a,a.return,pe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)sh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Fn=e;break}Fn=n.return}}function Bg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ia(e,a),o&4&&bo(5,a);break;case 1:if(Ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){fn(a,a.return,M)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){fn(a,a.return,M)}}o&64&&Lg(a),o&512&&To(a,a.return);break;case 3:if(Ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xm(e,n)}catch(M){fn(a,a.return,M)}}break;case 27:n===null&&o&4&&zg(a);case 26:case 5:Ia(e,a),n===null&&o&4&&Og(a),o&512&&To(a,a.return);break;case 12:Ia(e,a);break;case 13:Ia(e,a),o&4&&Gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wy.bind(null,a),Xy(e,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||bn,u=ha;var d=bn;ha=o,(bn=n)&&!d?Ba(e,a,(a.subtreeFlags&8772)!==0):Ia(e,a),ha=u,bn=d}break;case 30:break;default:Ia(e,a)}}function Fg(e){var n=e.alternate;n!==null&&(e.alternate=null,Fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ie(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gn=null,oi=!1;function da(e,n,a){for(a=a.child;a!==null;)Hg(e,n,a),a=a.sibling}function Hg(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:bn||Wi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bn||Wi(a,n);var o=gn,u=oi;ja(a.type)&&(gn=a.stateNode,oi=!1),da(e,n,a),Oo(a.stateNode),gn=o,oi=u;break;case 5:bn||Wi(a,n);case 6:if(o=gn,u=oi,gn=null,da(e,n,a),gn=o,oi=u,gn!==null)if(oi)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(a.stateNode)}catch(d){fn(a,n,d)}else try{gn.removeChild(a.stateNode)}catch(d){fn(a,n,d)}break;case 18:gn!==null&&(oi?(e=gn,R_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ko(e)):R_(gn,a.stateNode));break;case 4:o=gn,u=oi,gn=a.stateNode.containerInfo,oi=!0,da(e,n,a),gn=o,oi=u;break;case 0:case 11:case 14:case 15:bn||za(2,a,n),bn||za(4,a,n),da(e,n,a);break;case 1:bn||(Wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ng(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:bn=(o=bn)||a.memoizedState!==null,da(e,n,a),bn=o;break;default:da(e,n,a)}}function Gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ko(e)}catch(a){fn(n,n.return,a)}}function xy(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ig),n;default:throw Error(s(435,e.tag))}}function Lf(e,n){var a=xy(e);n.forEach(function(o){var u=Ry.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function pi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,D=M;t:for(;D!==null;){switch(D.tag){case 27:if(ja(D.type)){gn=D.stateNode,oi=!1;break t}break;case 5:gn=D.stateNode,oi=!1;break t;case 3:case 4:gn=D.stateNode.containerInfo,oi=!0;break t}D=D.return}if(gn===null)throw Error(s(160));Hg(d,M,u),gn=null,oi=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)kg(n,e),n=n.sibling}var Oi=null;function kg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pi(n,e),mi(e),o&4&&(za(3,e,e.return),bo(3,e),za(5,e,e.return));break;case 1:pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),o&64&&ha&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ee]||d[Vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Xn(d,o,a),d[Vt]=e,We(d),o=d;break t;case"link":var M=z_("link","href",u).get(o+(a.href||""));if(M){for(var D=0;D<M.length;D++)if(d=M[D],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(D,1);break e}}d=u.createElement(o),Xn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=z_("meta","content",u).get(o+(a.content||""))){for(D=0;D<M.length;D++)if(d=M[D],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(D,1);break e}}d=u.createElement(o),Xn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[Vt]=e,We(d),o=d}e.stateNode=o}else I_(u,e.type,e.stateNode);else e.stateNode=P_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?I_(u,e.type,e.stateNode):P_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),a!==null&&o&4&&Rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(pi(n,e),mi(e),o&512&&(bn||a===null||Wi(a,a.return)),e.flags&32){u=e.stateNode;try{ai(u,"")}catch(ft){fn(e,e.return,ft)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Rf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(pi(n,e),mi(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ft){fn(e,e.return,ft)}}break;case 3:if(fc=null,u=Oi,Oi=cc(n.containerInfo),pi(n,e),Oi=u,mi(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(n.containerInfo)}catch(ft){fn(e,e.return,ft)}Uf&&(Uf=!1,Vg(e));break;case 4:o=Oi,Oi=cc(e.stateNode.containerInfo),pi(n,e),mi(e),Oi=o;break;case 12:pi(n,e),mi(e);break;case 13:pi(n,e),mi(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bf=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,st=ha,vt=bn;if(ha=st||u,bn=vt||G,pi(n,e),bn=vt,ha=st,mi(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ha||bn||Ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(d=G.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{D=G.stateNode;var Et=G.memoizedProps.style,lt=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;D.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ft){fn(G,G.return,ft)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(ft){fn(G,G.return,ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Lf(e,a))));break;case 19:pi(n,e),mi(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Lf(e,o)));break;case 30:break;case 21:break;default:pi(n,e),mi(e)}}function mi(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Pg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Cf(e);Kl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(ai(M,""),a.flags&=-33);var D=Cf(e);Kl(e,D,M);break;case 3:case 4:var G=a.stateNode.containerInfo,st=Cf(e);Df(e,st,G);break;default:throw Error(s(161))}}catch(vt){fn(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bg(e,n.alternate,n),n=n.sibling}function Ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Ms(n);break;case 1:Wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Ng(n,n.return,a),Ms(n);break;case 27:Oo(n.stateNode);case 26:case 5:Wi(n,n.return),Ms(n);break;case 22:n.memoizedState===null&&Ms(n);break;case 30:Ms(n);break;default:Ms(n)}e=e.sibling}}function Ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ba(u,d,a),bo(4,d);break;case 1:if(Ba(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){fn(o,o.return,st)}if(o=d,u=o.updateQueue,u!==null){var D=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)vm(G[u],D)}catch(st){fn(o,o.return,st)}}a&&M&64&&Lg(d),To(d,d.return);break;case 27:zg(d);case 26:case 5:Ba(u,d,a),a&&o===null&&M&4&&Og(d),To(d,d.return);break;case 12:Ba(u,d,a);break;case 13:Ba(u,d,a),a&&M&4&&Gg(u,d);break;case 22:d.memoizedState===null&&Ba(u,d,a),To(d,d.return);break;case 30:break;default:Ba(u,d,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function qi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jg(e,n,a,o),n=n.sibling}function jg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:qi(e,n,a,o),u&2048&&bo(9,n);break;case 1:qi(e,n,a,o);break;case 3:qi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){qi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,D=d.onPostCommit;typeof D=="function"&&D(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){fn(n,n.return,G)}}else qi(e,n,a,o);break;case 13:qi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?qi(e,n,a,o):Ao(e,n):d._visibility&2?qi(e,n,a,o):(d._visibility|=2,or(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Nf(M,n);break;case 24:qi(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:qi(e,n,a,o)}}function or(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,D=a,G=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:or(d,M,D,G,u),bo(8,M);break;case 23:break;case 22:var vt=M.stateNode;M.memoizedState!==null?vt._visibility&2?or(d,M,D,G,u):Ao(d,M):(vt._visibility|=2,or(d,M,D,G,u)),u&&st&2048&&Nf(M.alternate,M);break;case 24:or(d,M,D,G,u),u&&st&2048&&Of(M.alternate,M);break;default:or(d,M,D,G,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Nf(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Of(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var wo=8192;function lr(e){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)Xg(e),e=e.sibling}function Xg(e){switch(e.tag){case 26:lr(e),e.flags&wo&&e.memoizedState!==null&&aS(Oi,e.memoizedState,e.memoizedProps);break;case 5:lr(e);break;case 3:case 4:var n=Oi;Oi=cc(e.stateNode.containerInfo),lr(e),Oi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=wo,wo=16777216,lr(e),wo=n):lr(e));break;default:lr(e)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fn=o,Yg(o,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qg(e),e=e.sibling}function qg(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&za(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):Ro(e);break;default:Ro(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fn=o,Yg(o,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:za(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function Yg(e,n){for(;Fn!==null;){var a=Fn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Fn=o;else t:for(a=e;Fn!==null;){o=Fn;var u=o.sibling,d=o.return;if(Fg(o),o===a){Fn=null;break t}if(u!==null){u.return=d,Fn=u;break t}Fn=d}}}var yy={getCacheForType:function(e){var n=Zn(Dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Sy=typeof WeakMap=="function"?WeakMap:Map,$e=0,hn=null,Ue=null,Be=0,tn=0,gi=null,Fa=!1,cr=!1,Pf=!1,pa=0,Mn=0,Ha=0,Es=0,zf=0,Ri=0,ur=0,Co=null,li=null,If=!1,Bf=0,Jl=1/0,$l=null,Ga=null,jn=0,ka=null,fr=null,hr=0,Ff=0,Hf=null,Zg=null,Do=0,Gf=null;function _i(){if(($e&2)!==0&&Be!==0)return Be&-Be;if(F.T!==null){var e=$s;return e!==0?e:Yf()}return Me()}function Kg(){Ri===0&&(Ri=(Be&536870912)===0||Ye?Z():536870912);var e=wi.current;return e!==null&&(e.flags|=32),Ri}function vi(e,n,a){(e===hn&&(tn===2||tn===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Va(e,Be,Ri,!1)),Wt(e,a),(($e&2)===0||e!==hn)&&(e===hn&&(($e&2)===0&&(Es|=a),Mn===4&&Va(e,Be,Ri,!1)),Yi(e))}function Qg(e,n,a){if(($e&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Nt(e,n),u=o?by(e,n):jf(e,n,!0),d=o;do{if(u===0){cr&&!o&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!My(a)){u=jf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var D=e;u=Co;var G=D.current.memoizedState.isDehydrated;if(G&&(dr(D,M).flags|=256),M=jf(D,M,!1),M!==2){if(Pf&&!G){D.errorRecoveryDisabledLanes|=d,Es|=d,u=4;break t}d=li,li=u,d!==null&&(li===null?li=d:li.push.apply(li,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){dr(e,0),Va(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(o,n,Ri,!Fa);break t;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bf+300-Ft(),10<u)){if(Va(o,n,Ri,!Fa),Qt(o,0,!0)!==0)break t;o.timeoutHandle=A_(Jg.bind(null,o,a,li,$l,If,n,Ri,Es,ur,Fa,d,2,-0,0),u);break t}Jg(o,a,li,$l,If,n,Ri,Es,ur,Fa,d,0,-0,0)}}break}while(!0);Yi(e)}function Jg(e,n,a,o,u,d,M,D,G,st,vt,Et,lt,ft){if(e.timeoutHandle=-1,Et=n.subtreeFlags,(Et&8192||(Et&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:iS},Xg(n),Et=sS(),Et!==null)){e.cancelPendingCommit=Et(s_.bind(null,e,n,d,a,o,u,M,D,G,vt,1,lt,ft)),Va(e,d,M,!st);return}s_(e,n,d,a,o,u,M,D,G)}function My(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!hi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,o){n&=~zf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-kt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&xt(e,a,n)}function tc(){return($e&6)===0?(Uo(0),!1):!0}function kf(){if(Ue!==null){if(tn===0)var e=Ue.return;else e=Ue,ra=_s=null,sf(e),sr=null,So=0,e=Ue;for(;e!==null;)Ug(e.alternate,e),e=e.return;Ue=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),kf(),hn=e,Ue=a=ia(e.current,null),Be=n,tn=0,gi=null,Fa=!1,cr=Nt(e,n),Pf=!1,ur=Ri=zf=Es=Ha=Mn=0,li=Co=null,If=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-kt(o),d=1<<u;n|=e[u],o&=~d}return pa=n,Ml(),a}function $g(e,n){we=null,F.H=Gl,n===fo||n===Ul?(n=gm(),tn=3):n===dm?(n=gm(),tn=4):tn=n===_g?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gi=n,Ue===null&&(Mn=1,Wl(e,Ei(n,e.current)))}function t_(){var e=F.H;return F.H=Gl,e===null?Gl:e}function e_(){var e=F.A;return F.A=yy,e}function Vf(){Mn=4,Fa||(Be&4194048)!==Be&&wi.current!==null||(cr=!0),(Ha&134217727)===0&&(Es&134217727)===0||hn===null||Va(hn,Be,Ri,!1)}function jf(e,n,a){var o=$e;$e|=2;var u=t_(),d=e_();(hn!==e||Be!==n)&&($l=null,dr(e,n)),n=!1;var M=Mn;t:do try{if(tn!==0&&Ue!==null){var D=Ue,G=gi;switch(tn){case 8:kf(),M=6;break t;case 3:case 2:case 9:case 6:wi.current===null&&(n=!0);var st=tn;if(tn=0,gi=null,pr(e,D,G,st),a&&cr){M=0;break t}break;default:st=tn,tn=0,gi=null,pr(e,D,G,st)}}Ey(),M=Mn;break}catch(vt){$g(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ra=_s=null,$e=o,F.H=u,F.A=d,Ue===null&&(hn=null,Be=0,Ml()),M}function Ey(){for(;Ue!==null;)n_(Ue)}function by(e,n){var a=$e;$e|=2;var o=t_(),u=e_();hn!==e||Be!==n?($l=null,Jl=Ft()+500,dr(e,n)):cr=Nt(e,n);t:do try{if(tn!==0&&Ue!==null){n=Ue;var d=gi;e:switch(tn){case 1:tn=0,gi=null,pr(e,n,d,1);break;case 2:case 9:if(pm(d)){tn=0,gi=null,i_(n);break}n=function(){tn!==2&&tn!==9||hn!==e||(tn=7),Yi(e)},d.then(n,n);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:pm(d)?(tn=0,gi=null,i_(n)):(tn=0,gi=null,pr(e,n,d,7));break;case 5:var M=null;switch(Ue.tag){case 26:M=Ue.memoizedState;case 5:case 27:var D=Ue;if(!M||B_(M)){tn=0,gi=null;var G=D.sibling;if(G!==null)Ue=G;else{var st=D.return;st!==null?(Ue=st,ec(st)):Ue=null}break e}}tn=0,gi=null,pr(e,n,d,5);break;case 6:tn=0,gi=null,pr(e,n,d,6);break;case 8:kf(),Mn=6;break t;default:throw Error(s(462))}}Ty();break}catch(vt){$g(e,vt)}while(!0);return ra=_s=null,F.H=o,F.A=u,$e=a,Ue!==null?0:(hn=null,Be=0,Ml(),Mn)}function Ty(){for(;Ue!==null&&!de();)n_(Ue)}function n_(e){var n=Cg(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?ec(e):Ue=n}function i_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Eg(a,n,n.pendingProps,n.type,void 0,Be);break;case 11:n=Eg(a,n,n.pendingProps,n.type.render,n.ref,Be);break;case 5:sf(n);default:Ug(a,n),n=Ue=am(n,pa),n=Cg(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?ec(e):Ue=n}function pr(e,n,a,o){ra=_s=null,sf(n),sr=null,So=0;var u=n.return;try{if(py(e,u,n,a,Be)){Mn=1,Wl(e,Ei(a,e.current)),Ue=null;return}}catch(d){if(u!==null)throw Ue=u,d;Mn=1,Wl(e,Ei(a,e.current)),Ue=null;return}n.flags&32768?(Ye||o===1?e=!0:cr||(Be&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=wi.current,o!==null&&o.tag===13&&(o.flags|=16384))),a_(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){a_(n,Fa);return}e=n.return;var a=gy(n.alternate,n,pa);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);Mn===0&&(Mn=5)}function a_(e,n){do{var a=_y(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);Mn=6,Ue=null}function s_(e,n,a,o,u,d,M,D,G){e.cancelPendingCommit=null;do nc();while(jn!==0);if(($e&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Nu,wt(e,a,d,M,D,G),e===hn&&(Ue=hn=null,Be=0),fr=n,ka=e,hr=a,Ff=d,Hf=u,Zg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cy(en,function(){return u_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=nt.p,nt.p=2,M=$e,$e|=4;try{vy(e,n,a)}finally{$e=M,nt.p=u,F.T=o}}jn=1,r_(),o_(),l_()}}function r_(){if(jn===1){jn=0;var e=ka,n=fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=nt.p;nt.p=2;var u=$e;$e|=4;try{kg(n,e);var d=nh,M=Yp(e.containerInfo),D=d.focusedElem,G=d.selectionRange;if(M!==D&&D&&D.ownerDocument&&qp(D.ownerDocument.documentElement,D)){if(G!==null&&Ru(D)){var st=G.start,vt=G.end;if(vt===void 0&&(vt=st),"selectionStart"in D)D.selectionStart=st,D.selectionEnd=Math.min(vt,D.value.length);else{var Et=D.ownerDocument||document,lt=Et&&Et.defaultView||window;if(lt.getSelection){var ft=lt.getSelection(),_e=D.textContent.length,pe=Math.min(G.start,_e),rn=G.end===void 0?pe:Math.min(G.end,_e);!ft.extend&&pe>rn&&(M=rn,rn=pe,pe=M);var J=Wp(D,pe),Y=Wp(D,rn);if(J&&Y&&(ft.rangeCount!==1||ft.anchorNode!==J.node||ft.anchorOffset!==J.offset||ft.focusNode!==Y.node||ft.focusOffset!==Y.offset)){var et=Et.createRange();et.setStart(J.node,J.offset),ft.removeAllRanges(),pe>rn?(ft.addRange(et),ft.extend(Y.node,Y.offset)):(et.setEnd(Y.node,Y.offset),ft.addRange(et))}}}}for(Et=[],ft=D;ft=ft.parentNode;)ft.nodeType===1&&Et.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<Et.length;D++){var St=Et[D];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}pc=!!eh,nh=eh=null}finally{$e=u,nt.p=o,F.T=a}}e.current=n,jn=2}}function o_(){if(jn===2){jn=0;var e=ka,n=fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=nt.p;nt.p=2;var u=$e;$e|=4;try{Bg(e,n.alternate,n)}finally{$e=u,nt.p=o,F.T=a}}jn=3}}function l_(){if(jn===4||jn===3){jn=0,le();var e=ka,n=fr,a=hr,o=Zg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?jn=5:(jn=0,fr=ka=null,c_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Pe(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=nt.p,nt.p=2,F.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var D=o[M];d(D.value,{componentStack:D.stack})}}finally{F.T=n,nt.p=u}}(hr&3)!==0&&nc(),Yi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Gf?Do++:(Do=0,Gf=e):Do=0,Uo(0)}}function c_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function nc(e){return r_(),o_(),l_(),u_()}function u_(){if(jn!==5)return!1;var e=ka,n=Ff;Ff=0;var a=Pe(hr),o=F.T,u=nt.p;try{nt.p=32>a?32:a,F.T=null,a=Hf,Hf=null;var d=ka,M=hr;if(jn=0,fr=ka=null,hr=0,($e&6)!==0)throw Error(s(331));var D=$e;if($e|=4,qg(d.current),jg(d,d.current,M,a),$e=D,Uo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(gt,d)}catch{}return!0}finally{nt.p=u,F.T=o,c_(e,n)}}function f_(e,n,a){n=Ei(a,n),n=xf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Wt(e,2),Yi(e))}function fn(e,n,a){if(e.tag===3)f_(e,e,a);else for(;n!==null;){if(n.tag===3){f_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=Ei(a,e),a=mg(2),o=La(n,a,2),o!==null&&(gg(a,o,n,e),Wt(o,2),Yi(o));break}}n=n.return}}function Xf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Sy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=Ay.bind(null,e,n,a),n.then(e,e))}function Ay(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,hn===e&&(Be&a)===a&&(Mn===4||Mn===3&&(Be&62914560)===Be&&300>Ft()-Bf?($e&2)===0&&dr(e,0):zf|=a,ur===Be&&(ur=0)),Yi(e)}function h_(e,n){n===0&&(n=Rt()),e=Zs(e,n),e!==null&&(Wt(e,n),Yi(e))}function wy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),h_(e,a)}function Ry(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),h_(e,a)}function Cy(e,n){return k(e,n)}var ic=null,mr=null,Wf=!1,ac=!1,qf=!1,bs=0;function Yi(e){e!==mr&&e.next===null&&(mr===null?ic=mr=e:mr=mr.next=e),ac=!0,Wf||(Wf=!0,Uy())}function Uo(e,n){if(!qf&&ac){qf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,D=o.pingedLanes;d=(1<<31-kt(42|e)+1)-1,d&=u&~(M&~D),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,g_(o,d))}else d=Be,d=Qt(o,o===hn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Nt(o,d)||(a=!0,g_(o,d));o=o.next}while(a);qf=!1}}function Dy(){d_()}function d_(){ac=Wf=!1;var e=0;bs!==0&&(Fy()&&(e=bs),bs=0);for(var n=Ft(),a=null,o=ic;o!==null;){var u=o.next,d=p_(o,n);d===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(mr=a)):(a=o,(e!==0||(d&3)!==0)&&(ac=!0)),o=u}Uo(e)}function p_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-kt(d),D=1<<M,G=u[M];G===-1?((D&a)===0||(D&o)!==0)&&(u[M]=ce(D,n)):G<=n&&(e.expiredLanes|=D),d&=~D}if(n=hn,a=Be,a=Qt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(tn===2||tn===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ze(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ze(o),Pe(a)){case 2:case 8:a=ge;break;case 32:a=en;break;case 268435456:a=I;break;default:a=en}return o=m_.bind(null,e),a=k(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ze(o),e.callbackPriority=2,e.callbackNode=null,2}function m_(e,n){if(jn!==0&&jn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=Be;return o=Qt(e,e===hn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Qg(e,o,n),p_(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?m_.bind(null,e):null)}function g_(e,n){if(nc())return null;Qg(e,n,!0)}function Uy(){Gy(function(){($e&6)!==0?k(Gt,Dy):d_()})}function Yf(){return bs===0&&(bs=Z()),bs}function __(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function v_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ly(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=__((u[ee]||null).action),M=o.submitter;M&&(n=(n=M[ee]||null)?__(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var D=new xl("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(bs!==0){var G=M?v_(u,M):new FormData(u);pf(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(D.preventDefault(),G=M?v_(u,M):new FormData(u),pf(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Zf=0;Zf<Lu.length;Zf++){var Kf=Lu[Zf],Ny=Kf.toLowerCase(),Oy=Kf[0].toUpperCase()+Kf.slice(1);Ni(Ny,"on"+Oy)}Ni(Qp,"onAnimationEnd"),Ni(Jp,"onAnimationIteration"),Ni($p,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Qx,"onTransitionRun"),Ni(Jx,"onTransitionStart"),Ni($x,"onTransitionCancel"),Ni(tm,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function x_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var D=o[M],G=D.instance,st=D.currentTarget;if(D=D.listener,G!==d&&u.isPropagationStopped())break t;d=D,u.currentTarget=st;try{d(u)}catch(vt){Xl(vt)}u.currentTarget=null,d=G}else for(M=0;M<o.length;M++){if(D=o[M],G=D.instance,st=D.currentTarget,D=D.listener,G!==d&&u.isPropagationStopped())break t;d=D,u.currentTarget=st;try{d(u)}catch(vt){Xl(vt)}u.currentTarget=null,d=G}}}}function Le(e,n){var a=n[Ut];a===void 0&&(a=n[Ut]=new Set);var o=e+"__bubble";a.has(o)||(y_(n,e,2,!1),a.add(o))}function Qf(e,n,a){var o=0;n&&(o|=4),y_(a,e,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[sc]){e[sc]=!0,ae.forEach(function(a){a!=="selectionchange"&&(Py.has(a)||Qf(a,!1,e),Qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,Qf("selectionchange",!1,n))}}function y_(e,n,a,o){switch(j_(n)){case 2:var u=lS;break;case 8:u=cS;break;default:u=hh}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function $f(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var D=o.stateNode.containerInfo;if(D===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;D!==null;){if(M=Je(D),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=d=M;continue t}D=D.parentNode}}o=o.return}wp(function(){var st=d,vt=_u(a),Et=[];t:{var lt=em.get(e);if(lt!==void 0){var ft=xl,_e=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":ft=Cx;break;case"focusin":_e="focus",ft=Eu;break;case"focusout":_e="blur",ft=Eu;break;case"beforeblur":case"afterblur":ft=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Lx;break;case Qp:case Jp:case $p:ft=yx;break;case tm:ft=Ox;break;case"scroll":case"scrollend":ft=mx;break;case"wheel":ft=zx;break;case"copy":case"cut":case"paste":ft=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Lp;break;case"toggle":case"beforetoggle":ft=Bx}var pe=(n&4)!==0,rn=!pe&&(e==="scroll"||e==="scrollend"),J=pe?lt!==null?lt+"Capture":null:lt;pe=[];for(var Y=st,et;Y!==null;){var St=Y;if(et=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||et===null||J===null||(St=Kr(Y,J),St!=null&&pe.push(No(Y,St,et))),rn)break;Y=Y.return}0<pe.length&&(lt=new ft(lt,_e,null,a,vt),Et.push({event:lt,listeners:pe}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",lt&&a!==gu&&(_e=a.relatedTarget||a.fromElement)&&(Je(_e)||_e[Ce]))break t;if((ft||lt)&&(lt=vt.window===vt?vt:(lt=vt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ft?(_e=a.relatedTarget||a.toElement,ft=st,_e=_e?Je(_e):null,_e!==null&&(rn=c(_e),pe=_e.tag,_e!==rn||pe!==5&&pe!==27&&pe!==6)&&(_e=null)):(ft=null,_e=st),ft!==_e)){if(pe=Dp,St="onMouseLeave",J="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Lp,St="onPointerLeave",J="onPointerEnter",Y="pointer"),rn=ft==null?lt:Fe(ft),et=_e==null?lt:Fe(_e),lt=new pe(St,Y+"leave",ft,a,vt),lt.target=rn,lt.relatedTarget=et,St=null,Je(vt)===st&&(pe=new pe(J,Y+"enter",_e,a,vt),pe.target=et,pe.relatedTarget=rn,St=pe),rn=St,ft&&_e)e:{for(pe=ft,J=_e,Y=0,et=pe;et;et=gr(et))Y++;for(et=0,St=J;St;St=gr(St))et++;for(;0<Y-et;)pe=gr(pe),Y--;for(;0<et-Y;)J=gr(J),et--;for(;Y--;){if(pe===J||J!==null&&pe===J.alternate)break e;pe=gr(pe),J=gr(J)}pe=null}else pe=null;ft!==null&&S_(Et,lt,ft,pe,!1),_e!==null&&rn!==null&&S_(Et,rn,_e,pe,!0)}}t:{if(lt=st?Fe(st):window,ft=lt.nodeName&&lt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&lt.type==="file")var te=Hp;else if(Bp(lt))if(Gp)te=Yx;else{te=Wx;var Re=Xx}else ft=lt.nodeName,!ft||ft.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?st&&mu(st.elementType)&&(te=Hp):te=qx;if(te&&(te=te(e,st))){Fp(Et,te,a,vt);break t}Re&&Re(e,lt,st),e==="focusout"&&st&&lt.type==="number"&&st.memoizedProps.value!=null&&Yn(lt,"number",lt.value)}switch(Re=st?Fe(st):window,e){case"focusin":(Bp(Re)||Re.contentEditable==="true")&&(Ws=Re,Cu=st,ao=null);break;case"focusout":ao=Cu=Ws=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Zp(Et,a,vt);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":Zp(Et,a,vt)}var re;if(Tu)t:{switch(e){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Xs?zp(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Np&&a.locale!=="ko"&&(Xs||me!=="onCompositionStart"?me==="onCompositionEnd"&&Xs&&(re=Rp()):(Ra=vt,yu="value"in Ra?Ra.value:Ra.textContent,Xs=!0)),Re=rc(st,me),0<Re.length&&(me=new Up(me,e,null,a,vt),Et.push({event:me,listeners:Re}),re?me.data=re:(re=Ip(a),re!==null&&(me.data=re)))),(re=Hx?Gx(e,a):kx(e,a))&&(me=rc(st,"onBeforeInput"),0<me.length&&(Re=new Up("onBeforeInput","beforeinput",null,a,vt),Et.push({event:Re,listeners:me}),Re.data=re)),Ly(Et,e,st,a,vt)}x_(Et,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Kr(e,a),u!=null&&o.unshift(No(e,u,d)),u=Kr(e,n),u!=null&&o.push(No(e,u,d))),e.tag===3)return o;e=e.return}return[]}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function S_(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var D=a,G=D.alternate,st=D.stateNode;if(D=D.tag,G!==null&&G===o)break;D!==5&&D!==26&&D!==27||st===null||(G=st,u?(st=Kr(a,d),st!=null&&M.unshift(No(a,st,G))):u||(st=Kr(a,d),st!=null&&M.push(No(a,st,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var zy=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function M_(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Iy,"")}function E_(e,n){return n=M_(n),M_(e)===n}function oc(){}function sn(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(e,""+o);break;case"className":It(e,"class",o);break;case"tabIndex":It(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,o);break;case"style":Tp(e,o,d);break;case"data":if(n!=="object"){It(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&sn(e,n,"name",u.name,u,null),sn(e,n,"formEncType",u.formEncType,u,null),sn(e,n,"formMethod",u.formMethod,u,null),sn(e,n,"formTarget",u.formTarget,u,null)):(sn(e,n,"encType",u.encType,u,null),sn(e,n,"method",u.method,u,null),sn(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oc);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Le("beforetoggle",e),Le("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=dx.get(a)||a,Tt(e,a,o))}}function th(e,n,a,o,u,d){switch(a){case"style":Tp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ai(e,o):(typeof o=="number"||typeof o=="bigint")&&ai(e,""+o);break;case"onScroll":o!=null&&Le("scroll",e);break;case"onScrollEnd":o!=null&&Le("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[ee]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function Xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,d,M,a,null)}}u&&sn(e,n,"srcSet",a.srcSet,a,null),o&&sn(e,n,"src",a.src,a,null);return;case"input":Le("invalid",e);var D=d=M=u=null,G=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":M=vt;break;case"checked":G=vt;break;case"defaultChecked":st=vt;break;case"value":d=vt;break;case"defaultValue":D=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:sn(e,n,o,vt,a,null)}}ti(e,d,D,G,st,M,u,!1),De(e);return;case"select":Le("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":d=D;break;case"defaultValue":M=D;break;case"multiple":o=D;default:sn(e,n,u,D,a,null)}n=d,a=M,e.multiple=!!o,n!=null?yn(e,!!o,n,!1):a!=null&&yn(e,!!o,a,!0);return;case"textarea":Le("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(D=a[M],D!=null))switch(M){case"value":o=D;break;case"defaultValue":u=D;break;case"children":d=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:sn(e,n,M,D,a,null)}ks(e,o,u,d),De(e);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:sn(e,n,G,o,a,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(o=0;o<Lo.length;o++)Le(Lo[o],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:sn(e,n,st,o,a,null)}return;default:if(mu(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&th(e,n,vt,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&sn(e,n,D,o,a,null))}function By(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,D=null,G=null,st=null,vt=null;for(ft in a){var Et=a[ft];if(a.hasOwnProperty(ft)&&Et!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=Et;default:o.hasOwnProperty(ft)||sn(e,n,ft,null,o,Et)}}for(var lt in o){var ft=o[lt];if(Et=a[lt],o.hasOwnProperty(lt)&&(ft!=null||Et!=null))switch(lt){case"type":d=ft;break;case"name":u=ft;break;case"checked":st=ft;break;case"defaultChecked":vt=ft;break;case"value":M=ft;break;case"defaultValue":D=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==Et&&sn(e,n,lt,ft,o,Et)}}un(e,M,D,G,st,vt,d,u);return;case"select":ft=M=D=lt=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(d)||sn(e,n,d,null,o,G)}for(u in o)if(d=o[u],G=a[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":lt=d;break;case"defaultValue":D=d;break;case"multiple":M=d;default:d!==G&&sn(e,n,u,d,o,G)}n=D,a=M,o=ft,lt!=null?yn(e,!!a,lt,!1):!!o!=!!a&&(n!=null?yn(e,!!a,n,!0):yn(e,!!a,a?[]:"",!1));return;case"textarea":ft=lt=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:sn(e,n,D,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":lt=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&sn(e,n,M,u,o,d)}kn(e,lt,ft);return;case"option":for(var _e in a)if(lt=a[_e],a.hasOwnProperty(_e)&&lt!=null&&!o.hasOwnProperty(_e))switch(_e){case"selected":e.selected=!1;break;default:sn(e,n,_e,null,o,lt)}for(G in o)if(lt=o[G],ft=a[G],o.hasOwnProperty(G)&&lt!==ft&&(lt!=null||ft!=null))switch(G){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:sn(e,n,G,lt,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)lt=a[pe],a.hasOwnProperty(pe)&&lt!=null&&!o.hasOwnProperty(pe)&&sn(e,n,pe,null,o,lt);for(st in o)if(lt=o[st],ft=a[st],o.hasOwnProperty(st)&&lt!==ft&&(lt!=null||ft!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:sn(e,n,st,lt,o,ft)}return;default:if(mu(n)){for(var rn in a)lt=a[rn],a.hasOwnProperty(rn)&&lt!==void 0&&!o.hasOwnProperty(rn)&&th(e,n,rn,void 0,o,lt);for(vt in o)lt=o[vt],ft=a[vt],!o.hasOwnProperty(vt)||lt===ft||lt===void 0&&ft===void 0||th(e,n,vt,lt,o,ft);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&sn(e,n,J,null,o,lt);for(Et in o)lt=o[Et],ft=a[Et],!o.hasOwnProperty(Et)||lt===ft||lt==null&&ft==null||sn(e,n,Et,lt,o,ft)}var eh=null,nh=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ih(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function Fy(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(ky)}:A_;function ky(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function R_(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Oo(M.documentElement),a&2&&Oo(M.body),a&4)for(a=M.head,Oo(a),M=a.firstChild;M;){var D=M.nextSibling,G=M.nodeName;M[Ee]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=D}}if(u===0){e.removeChild(d),ko(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);ko(n)}function sh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sh(a),Ie(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Vy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ee])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Pi(e.nextSibling),e===null)break}return null}function jy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pi(e.nextSibling),e===null))return null;return e}function rh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Xy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var oh=null;function C_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function D_(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ie(e)}var Ci=new Map,U_=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=nt.d;nt.d={f:Wy,r:qy,D:Yy,C:Zy,L:Ky,m:Qy,X:$y,S:Jy,M:tS};function Wy(){var e=ma.f(),n=tc();return e||n}function qy(e){var n=Xe(e);n!==null&&n.tag===5&&n.type==="form"?Qm(n):ma.r(e)}var _r=typeof document>"u"?null:document;function L_(e,n,a){var o=_r;if(o&&typeof n=="string"&&n){var u=In(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),U_.has(u)||(U_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Xn(n,"link",e),We(n),o.head.appendChild(n)))}}function Yy(e){ma.D(e),L_("dns-prefetch",e,null)}function Zy(e,n){ma.C(e,n),L_("preconnect",e,n)}function Ky(e,n,a){ma.L(e,n,a);var o=_r;if(o&&e&&n){var u='link[rel="preload"][as="'+In(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+In(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+In(a.imageSizes)+'"]')):u+='[href="'+In(e)+'"]';var d=u;switch(n){case"style":d=vr(e);break;case"script":d=xr(e)}Ci.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(d))||n==="script"&&o.querySelector(zo(d))||(n=o.createElement("link"),Xn(n,"link",e),We(n),o.head.appendChild(n)))}}function Qy(e,n){ma.m(e,n);var a=_r;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+In(o)+'"][href="'+In(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=xr(e)}if(!Ci.has(d)&&(e=_({rel:"modulepreload",href:e},n),Ci.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(d)))return}o=a.createElement("link"),Xn(o,"link",e),We(o),a.head.appendChild(o)}}}function Jy(e,n,a){ma.S(e,n,a);var o=_r;if(o&&e){var u=Ge(o).hoistableStyles,d=vr(e);n=n||"default";var M=u.get(d);if(!M){var D={loading:0,preload:null};if(M=o.querySelector(Po(d)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(d))&&lh(e,a);var G=M=o.createElement("link");We(G),Xn(G,"link",e),G._p=new Promise(function(st,vt){G.onload=st,G.onerror=vt}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,uc(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:D},u.set(d,M)}}}function $y(e,n){ma.X(e,n);var a=_r;if(a&&e){var o=Ge(a).hoistableScripts,u=xr(e),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(e=_({src:e,async:!0},n),(n=Ci.get(u))&&ch(e,n),d=a.createElement("script"),We(d),Xn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function tS(e,n){ma.M(e,n);var a=_r;if(a&&e){var o=Ge(a).hoistableScripts,u=xr(e),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=Ci.get(u))&&ch(e,n),d=a.createElement("script"),We(d),Xn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function N_(e,n,a,o){var u=(u=it.current)?cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=vr(a.href),a=Ge(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=vr(a.href);var d=Ge(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Po(e)))&&!d._p&&(M.instance=d,M.state.loading=5),Ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,a),d||eS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=xr(a),a=Ge(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function vr(e){return'href="'+In(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function O_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Xn(n,"link",a),We(n),e.head.appendChild(n))}function xr(e){return'[src="'+In(e)+'"]'}function zo(e){return"script[async]"+e}function P_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+In(a.href)+'"]');if(o)return n.instance=o,We(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),We(o),Xn(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=vr(a.href);var d=e.querySelector(Po(u));if(d)return n.state.loading|=4,n.instance=d,We(d),d;o=O_(a),(u=Ci.get(u))&&lh(o,u),d=(e.ownerDocument||e).createElement("link"),We(d);var M=d;return M._p=new Promise(function(D,G){M.onload=D,M.onerror=G}),Xn(d,"link",o),n.state.loading|=4,uc(d,a.precedence,e),n.instance=d;case"script":return d=xr(a.src),(u=e.querySelector(zo(d)))?(n.instance=u,We(u),u):(o=a,(u=Ci.get(d))&&(o=_({},a),ch(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),We(u),Xn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var D=o[M];if(D.dataset.precedence===n)d=D;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ch(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function z_(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ee]||d[Vt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var D=o.get(M);D?D.push(d):o.set(M,[d])}}return o}function I_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function B_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Io=null;function iS(){}function aS(e,n,a){if(Io===null)throw Error(s(475));var o=Io;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=vr(a.href),d=e.querySelector(Po(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=hc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,We(d);return}d=e.ownerDocument||e,a=O_(a),(u=Ci.get(u))&&lh(a,u),d=d.createElement("link"),We(d);var M=d;M._p=new Promise(function(D,G){M.onload=D,M.onerror=G}),Xn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function sS(){if(Io===null)throw Error(s(475));var e=Io;return e.stylesheets&&e.count===0&&uh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&uh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)uh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function uh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(rS,e),dc=null,hc.call(e))}function rS(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function oS(e,n,a,o,u,d,M,D){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function F_(e,n,a,o,u,d,M,D,G,st,vt,Et){return e=new oS(e,n,a,M,D,G,st,Et),n=1,d===!0&&(n|=24),d=di(3,null,null,n),e.current=d,d.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Yu(d),e}function H_(e){return e?(e=Ks,e):Ks}function G_(e,n,a,o,u,d){u=H_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ua(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=La(e,o,n),a!==null&&(vi(a,e,n),po(a,e,n))}function k_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function fh(e,n){k_(e,n),(e=e.alternate)&&k_(e,n)}function V_(e){if(e.tag===13){var n=Zs(e,67108864);n!==null&&vi(n,e,67108864),fh(e,67108864)}}var pc=!0;function lS(e,n,a,o){var u=F.T;F.T=null;var d=nt.p;try{nt.p=2,hh(e,n,a,o)}finally{nt.p=d,F.T=u}}function cS(e,n,a,o){var u=F.T;F.T=null;var d=nt.p;try{nt.p=8,hh(e,n,a,o)}finally{nt.p=d,F.T=u}}function hh(e,n,a,o){if(pc){var u=dh(o);if(u===null)$f(e,n,o,mc,a),X_(e,o);else if(fS(u,e,n,a,o))o.stopPropagation();else if(X_(e,o),n&4&&-1<uS.indexOf(e)){for(;u!==null;){var d=Xe(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=ne(d.pendingLanes);if(M!==0){var D=d;for(D.pendingLanes|=2,D.entangledLanes|=2;M;){var G=1<<31-kt(M);D.entanglements[1]|=G,M&=~G}Yi(d),($e&6)===0&&(Jl=Ft()+500,Uo(0))}}break;case 13:D=Zs(d,2),D!==null&&vi(D,d,2),tc(),fh(d,2)}if(d=dh(o),d===null&&$f(e,n,o,mc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else $f(e,n,o,null,a)}}function dh(e){return e=_u(e),ph(e)}var mc=null;function ph(e){if(mc=null,e=Je(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function j_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case Gt:return 2;case ge:return 8;case en:case nn:return 32;case I:return 268435456;default:return 32}default:return 32}}var mh=!1,Xa=null,Wa=null,qa=null,Fo=new Map,Ho=new Map,Ya=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X_(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Xe(n),n!==null&&V_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fS(e,n,a,o,u){switch(n){case"focusin":return Xa=Go(Xa,e,n,a,o,u),!0;case"dragenter":return Wa=Go(Wa,e,n,a,o,u),!0;case"mouseover":return qa=Go(qa,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Fo.set(d,Go(Fo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,e,n,a,o,u)),!0}return!1}function W_(e){var n=Je(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,at(e.priority,function(){if(a.tag===13){var o=_i();o=ue(o);var u=Zs(a,o);u!==null&&vi(u,a,o),fh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Xe(a),n!==null&&V_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){gc(e)&&a.delete(n)}function hS(){mh=!1,Xa!==null&&gc(Xa)&&(Xa=null),Wa!==null&&gc(Wa)&&(Wa=null),qa!==null&&gc(qa)&&(qa=null),Fo.forEach(q_),Ho.forEach(q_)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,mh||(mh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hS)))}var vc=null;function Y_(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(ph(o||a)===null)continue;break}var d=Xe(a);d!==null&&(e.splice(n,3),n-=3,pf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ko(e){function n(G){return _c(G,e)}Xa!==null&&_c(Xa,e),Wa!==null&&_c(Wa,e),qa!==null&&_c(qa,e),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<Ya.length;a++){var o=Ya[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)W_(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[ee]||null;if(typeof d=="function")M||Y_(a);else if(M){var D=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[ee]||null)D=M.formAction;else if(ph(u)!==null)continue}else D=M.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),Y_(a)}}}function gh(e){this._internalRoot=e}xc.prototype.render=gh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();G_(a,o,e,n,null,null)},xc.prototype.unmount=gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;G_(e.current,2,null,e,null,null),tc(),n[Ce]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&W_(e)}};var Z_=t.version;if(Z_!=="19.1.1")throw Error(s(527,Z_,"19.1.1"));nt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var dS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{gt=yc.inject(dS),ht=yc}catch{}}return jo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=fg,d=hg,M=dg,D=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(D=n.unstable_transitionCallbacks)),n=F_(e,1,!1,null,null,a,o,u,d,M,D,null),e[Ce]=n.current,Jf(e),new gh(n)},jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=fg,M=hg,D=dg,G=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=F_(e,1,!0,n,a??null,o,u,d,M,D,G,st),n.context=H_(null),a=n.current,o=_i(),o=ue(o),u=Ua(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Wt(n,a),Yi(n),e[Ce]=n.current,Jf(e),new xc(n)},jo.version="19.1.1",jo}var s0;function ES(){if(s0)return xh.exports;s0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xh.exports=MS(),xh.exports}var bS=ES();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Av=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=Pt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},m)=>Pt.createElement("svg",{ref:m,...AS,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Av("lucide",l),...h},[...f.map(([p,_])=>Pt.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(r,t)=>{const i=Pt.forwardRef(({className:s,...l},c)=>Pt.createElement(wS,{ref:c,iconNode:t,className:Av(`lucide-${TS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=je("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=je("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=je("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=je("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=je("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=je("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=je("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=je("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=je("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=je("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=je("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=je("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=je("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=je("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=je("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=je("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=je("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=je("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=je("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=je("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=je("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=je("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=je("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=je("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=je("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=je("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=je("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=je("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=je("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=je("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=je("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="180",Hr={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},XS=0,f0=1,WS=2,Cv=1,qS=2,Ea=3,os=0,fi=1,Ta=2,ss=0,Gr=1,h0=2,d0=3,p0=4,YS=5,Ls=100,ZS=101,KS=102,QS=103,JS=104,$S=200,tM=201,eM=202,nM=203,dd=204,pd=205,iM=206,aM=207,sM=208,rM=209,oM=210,lM=211,cM=212,uM=213,fM=214,md=0,gd=1,_d=2,jr=3,vd=4,xd=5,yd=6,Sd=7,Dv=0,hM=1,dM=2,rs=0,pM=1,mM=2,gM=3,_M=4,vM=5,xM=6,yM=7,Uv=300,Xr=301,Wr=302,Md=303,Ed=304,hu=306,bd=1e3,Os=1001,Td=1002,ki=1003,SM=1004,Sc=1005,Ji=1006,bh=1007,Ps=1008,ta=1009,Lv=1010,Nv=1011,il=1012,op=1013,zs=1014,Aa=1015,cl=1016,lp=1017,cp=1018,al=1020,Ov=35902,Pv=35899,zv=1021,Iv=1022,Gi=1023,sl=1026,rl=1027,Bv=1028,up=1029,Fv=1030,fp=1031,hp=1033,tu=33776,eu=33777,nu=33778,iu=33779,Ad=35840,wd=35841,Rd=35842,Cd=35843,Dd=36196,Ud=37492,Ld=37496,Nd=37808,Od=37809,Pd=37810,zd=37811,Id=37812,Bd=37813,Fd=37814,Hd=37815,Gd=37816,kd=37817,Vd=37818,jd=37819,Xd=37820,Wd=37821,qd=36492,Yd=36494,Zd=36495,Kd=36283,Qd=36284,Jd=36285,$d=36286,MM=3200,EM=3201,Hv=0,bM=1,is="",Si="srgb",qr="srgb-linear",ru="linear",on="srgb",yr=7680,m0=519,TM=512,AM=513,wM=514,Gv=515,RM=516,CM=517,DM=518,UM=519,g0=35044,LM=35048,_0="300 es",$i=2e3,ou=2001;class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,tp=180/Math.PI;function ul(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[t&255]+Qn[t>>8&255]+"-"+Qn[t>>16&15|64]+Qn[t>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]).toLowerCase()}function Ne(r,t,i){return Math.max(t,Math.min(i,r))}function NM(r,t){return(r%t+t)%t}function Th(r,t,i){return(1-i)*r+i*t}function Xo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ci(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const OM={DEG2RAD:el};class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ne(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];const x=c[f+0],y=c[f+1],b=c[f+2],T=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h===1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==x||p!==y||_!==b){let S=1-h;const v=m*x+p*y+_*b+g*T,N=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const O=Math.sqrt(L),z=Math.atan2(O,v*N);S=Math.sin(S*z)/O,h=Math.sin(h*z)/O}const C=h*N;if(m=m*S+x*C,p=p*S+y*C,_=_*S+b*C,g=g*S+T*C,S===1-h){const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[i]=h*b+_*g+m*y-p*x,t[i+1]=m*b+_*x+p*g-h*y,t[i+2]=p*b+_*y+h*x-m*g,t[i+3]=_*b-h*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),x=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"YXZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"ZXY":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"ZYX":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"YZX":this._x=x*_*g+p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g-x*y*b;break;case"XZY":this._x=x*_*g-p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=s+h+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),g=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=f*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(v0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(v0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),_=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ne(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new q,v0=new Is;class Te{constructor(t,i,s,l,c,f,h,m,p){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],x=s[2],y=s[5],b=s[8],T=l[0],S=l[3],v=l[6],N=l[1],L=l[4],C=l[7],O=l[2],z=l[5],B=l[8];return c[0]=f*T+h*N+m*O,c[3]=f*S+h*L+m*z,c[6]=f*v+h*C+m*B,c[1]=p*T+_*N+g*O,c[4]=p*S+_*L+g*z,c[7]=p*v+_*C+g*B,c[2]=x*T+y*N+b*O,c[5]=x*S+y*L+b*z,c[8]=x*v+y*C+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*f-h*p,x=h*m-_*c,y=p*c-f*m,b=i*g+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-_*s)*T,t[2]=(h*s-l*f)*T,t[3]=x*T,t[4]=(_*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(s*m-p*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(wh.makeScale(t,i)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,i){return this.premultiply(wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new Te;function kv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function PM(){const r=lu("canvas");return r.style.display="block",r}const x0={};function ol(r){r in x0||(x0[r]=!0,console.warn(r))}function zM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const y0=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S0=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IM(){const r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===on&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===on&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ol("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ol("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[qr]:{primaries:t,whitePoint:s,transfer:ru,toXYZ:y0,fromXYZ:S0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:on,toXYZ:y0,fromXYZ:S0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ve=IM();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class BM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=lu("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=wa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FM=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=ul(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Rh(l[f].image)):c.push(Rh(l[f]))}else c=Rh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?BM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HM=0;const Ch=new q;class ii extends Hs{constructor(t=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=Os,l=Os,c=Ji,f=Ps,h=Gi,m=ta,p=ii.DEFAULT_ANISOTROPY,_=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=ul(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bd:t.x=t.x-Math.floor(t.x);break;case Os:t.x=t.x<0?0:1;break;case Td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bd:t.y=t.y-Math.floor(t.y);break;case Os:t.y=t.y<0?0:1;break;case Td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Uv;ii.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],b=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(y+1)/2,O=(v+1)/2,z=(_+x)/4,B=(g+T)/4,V=(b+S)/4;return L>C&&L>O?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=z/s,c=B/s):C>O?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=z/l,c=V/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=B/c,l=V/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-b)*(S-b)+(g-T)*(g-T)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(S-b)/N,this.y=(g-T)/N,this.z=(x-_)/N,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ne(this.x,t.x,i.x),this.y=Ne(this.y,t.y,i.y),this.z=Ne(this.z,t.z,i.z),this.w=Ne(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ne(this.x,t,i),this.y=Ne(this.y,t,i),this.z=Ne(this.z,t,i),this.w=Ne(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GM extends Hs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new ii(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ji,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bs extends GM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Vv extends ii{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends ii{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=Os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,zi):zi.fromBufferAttribute(c,f),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Ec.subVectors(this.max,Wo),Mr.subVectors(t.a,Wo),Er.subVectors(t.b,Wo),br.subVectors(t.c,Wo),Ka.subVectors(Er,Mr),Qa.subVectors(br,Er),Ts.subVectors(Mr,br);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Ts.z,Ts.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Ts.z,0,-Ts.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Ts.y,Ts.x,0];return!Dh(i,Mr,Er,br,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Dh(i,Mr,Er,br,Ec))?!1:(bc.crossVectors(Ka,Qa),i=[bc.x,bc.y,bc.z],Dh(i,Mr,Er,br,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new q,new q,new q,new q,new q,new q,new q,new q],zi=new q,Mc=new fl,Mr=new q,Er=new q,br=new q,Ka=new q,Qa=new q,Ts=new q,Wo=new q,Ec=new q,bc=new q,As=new q;function Dh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){As.fromArray(r,c);const h=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),p=i.dot(As),_=s.dot(As);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const VM=new fl,qo=new q,Uh=new q;class hl{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):VM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Uh)),this.expandByPoint(qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const _a=new q,Lh=new q,Tc=new q,Ja=new q,Nh=new q,Ac=new q,Oh=new q;class dl{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_a)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=_a.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Lh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Ja.copy(this.origin).sub(Lh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=Ja.dot(this.direction),m=-Ja.dot(Tc),p=Ja.lengthSq(),_=Math.abs(1-f*f);let g,x,y,b;if(_>0)if(g=f*m-h,x=f*h-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const T=1/_;g*=T,x*=T,y=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),y=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Lh).addScaledVector(Tc,x),y}intersectSphere(t,i){_a.subVectors(t.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,_a)!==null}intersectTriangle(t,i,s,l,c){Nh.subVectors(i,t),Ac.subVectors(s,t),Oh.crossVectors(Nh,Ac);let f=this.direction.dot(Oh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ja.subVectors(this.origin,t);const m=h*this.direction.dot(Ac.crossVectors(Ja,Ac));if(m<0)return null;const p=h*this.direction.dot(Nh.cross(Ja));if(p<0||m+p>f)return null;const _=-h*Ja.dot(Oh);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,s,l,c,f,h,m,p,_,g,x,y,b,T,S){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,_,g,x,y,b,T,S)}set(t,i,s,l,c,f,h,m,p,_,g,x,y,b,T,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=b,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),f=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*_,y=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,b=p*_,T=p*g;i[0]=x+T*h,i[4]=b*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=y*h-b,i[6]=T+x*h,i[10]=f*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,b=p*_,T=p*g;i[0]=x-T*h,i[4]=-f*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=f*_,i[9]=T-x*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const x=f*_,y=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-x*g,i[8]=b*g+y,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+b,i[10]=x-T*g}else if(t.order==="XZY"){const x=f*m,y=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+T,i[5]=f*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*_,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jM,t,XM)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),$a.crossVectors(s,xi),$a.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),$a.crossVectors(s,xi)),$a.normalize(),wc.crossVectors(xi,$a),l[0]=$a.x,l[4]=wc.x,l[8]=xi.x,l[1]=$a.y,l[5]=wc.y,l[9]=xi.y,l[2]=$a.z,l[6]=wc.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],x=s[9],y=s[13],b=s[2],T=s[6],S=s[10],v=s[14],N=s[3],L=s[7],C=s[11],O=s[15],z=l[0],B=l[4],V=l[8],R=l[12],U=l[1],H=l[5],K=l[9],rt=l[13],ct=l[2],ut=l[6],F=l[10],nt=l[14],Q=l[3],Mt=l[7],P=l[11],X=l[15];return c[0]=f*z+h*U+m*ct+p*Q,c[4]=f*B+h*H+m*ut+p*Mt,c[8]=f*V+h*K+m*F+p*P,c[12]=f*R+h*rt+m*nt+p*X,c[1]=_*z+g*U+x*ct+y*Q,c[5]=_*B+g*H+x*ut+y*Mt,c[9]=_*V+g*K+x*F+y*P,c[13]=_*R+g*rt+x*nt+y*X,c[2]=b*z+T*U+S*ct+v*Q,c[6]=b*B+T*H+S*ut+v*Mt,c[10]=b*V+T*K+S*F+v*P,c[14]=b*R+T*rt+S*nt+v*X,c[3]=N*z+L*U+C*ct+O*Q,c[7]=N*B+L*H+C*ut+O*Mt,c[11]=N*V+L*K+C*F+O*P,c[15]=N*R+L*rt+C*nt+O*X,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],b=t[3],T=t[7],S=t[11],v=t[15];return b*(+c*m*g-l*p*g-c*h*x+s*p*x+l*h*y-s*m*y)+T*(+i*m*y-i*p*x+c*f*x-l*f*y+l*p*_-c*m*_)+S*(+i*p*g-i*h*y-c*f*g+s*f*y+c*h*_-s*p*_)+v*(-l*h*_-i*m*g+i*h*x+l*f*g-s*f*x+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],b=t[12],T=t[13],S=t[14],v=t[15],N=g*S*p-T*x*p+T*m*y-h*S*y-g*m*v+h*x*v,L=b*x*p-_*S*p-b*m*y+f*S*y+_*m*v-f*x*v,C=_*T*p-b*g*p+b*h*y-f*T*y-_*h*v+f*g*v,O=b*g*m-_*T*m-b*h*x+f*T*x+_*h*S-f*g*S,z=i*N+s*L+l*C+c*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=N*B,t[1]=(T*x*c-g*S*c-T*l*y+s*S*y+g*l*v-s*x*v)*B,t[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*v+s*m*v)*B,t[3]=(g*m*c-h*x*c-g*l*p+s*x*p+h*l*y-s*m*y)*B,t[4]=L*B,t[5]=(_*S*c-b*x*c+b*l*y-i*S*y-_*l*v+i*x*v)*B,t[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*v-i*m*v)*B,t[7]=(f*x*c-_*m*c+_*l*p-i*x*p-f*l*y+i*m*y)*B,t[8]=C*B,t[9]=(b*g*c-_*T*c-b*s*y+i*T*y+_*s*v-i*g*v)*B,t[10]=(f*T*c-b*h*c+b*s*p-i*T*p-f*s*v+i*h*v)*B,t[11]=(_*h*c-f*g*c-_*s*p+i*g*p+f*s*y-i*h*y)*B,t[12]=O*B,t[13]=(_*T*l-b*g*l+b*s*x-i*T*x-_*s*S+i*g*S)*B,t[14]=(b*h*l-f*T*l-b*s*m+i*T*m+f*s*S-i*h*S)*B,t[15]=(f*g*l-_*h*l+_*s*m-i*g*m-f*s*x+i*h*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,x=c*p,y=c*_,b=c*g,T=f*_,S=f*g,v=h*g,N=m*p,L=m*_,C=m*g,O=s.x,z=s.y,B=s.z;return l[0]=(1-(T+v))*O,l[1]=(y+C)*O,l[2]=(b-L)*O,l[3]=0,l[4]=(y-C)*z,l[5]=(1-(x+v))*z,l[6]=(S+N)*z,l[7]=0,l[8]=(b+L)*B,l[9]=(S-N)*B,l[10]=(1-(x+T))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=Tr.set(l[0],l[1],l[2]).length();const f=Tr.set(l[4],l[5],l[6]).length(),h=Tr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ii.copy(this);const p=1/c,_=1/f,g=1/h;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,i.setFromRotationMatrix(Ii),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=$i,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(h===$i)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===ou)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=$i,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(h===$i)b=-2/(f-c),T=-(f+c)/(f-c);else if(h===ou)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new q,Ii=new mn,jM=new q(0,0,0),XM=new q(1,1,1),$a=new q,wc=new q,xi=new q,M0=new mn,E0=new Is;class ea{constructor(t=0,i=0,s=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ne(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return M0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return E0.setFromEuler(this),this.setFromQuaternion(E0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WM=0;const b0=new q,Ar=new Is,va=new mn,Rc=new q,Yo=new q,qM=new q,YM=new Is,T0=new q(1,0,0),A0=new q(0,1,0),w0=new q(0,0,1),R0={type:"added"},ZM={type:"removed"},wr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class On extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new q,i=new ea,s=new Is,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new Te}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(T0,t)}rotateY(t){return this.rotateOnAxis(A0,t)}rotateZ(t){return this.rotateOnAxis(w0,t)}translateOnAxis(t,i){return b0.copy(t).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(T0,t)}translateY(t){return this.translateOnAxis(A0,t)}translateZ(t){return this.translateOnAxis(w0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Rc.copy(t):Rc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Yo,Rc,this.up):va.lookAt(Rc,Yo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(va),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R0),wr.child=t,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ZM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R0),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,qM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,YM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new q(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new q,xa=new q,zh=new q,ya=new q,Rr=new q,Cr=new q,C0=new q,Ih=new q,Bh=new q,Fh=new q,Hh=new cn,Gh=new cn,kh=new cn;class Ui{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Bi.subVectors(t,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Bi.subVectors(l,i),xa.subVectors(s,i),zh.subVectors(t,i);const f=Bi.dot(Bi),h=Bi.dot(xa),m=Bi.dot(zh),p=xa.dot(xa),_=xa.dot(zh),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-h*_)*x,b=(f*_-h*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ya.x),m.addScaledVector(f,ya.y),m.addScaledVector(h,ya.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Hh.setScalar(0),Gh.setScalar(0),kh.setScalar(0),Hh.fromBufferAttribute(t,i),Gh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(kh,c.z),f}static isFrontFacing(t,i,s,l){return Bi.subVectors(s,i),xa.subVectors(t,i),Bi.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Bi.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ui.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;Rr.subVectors(l,s),Cr.subVectors(c,s),Ih.subVectors(t,s);const m=Rr.dot(Ih),p=Cr.dot(Ih);if(m<=0&&p<=0)return i.copy(s);Bh.subVectors(t,l);const _=Rr.dot(Bh),g=Cr.dot(Bh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Rr,f);Fh.subVectors(t,c);const y=Rr.dot(Fh),b=Cr.dot(Fh);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(Cr,h);const S=_*b-y*g;if(S<=0&&g-_>=0&&y-b>=0)return C0.subVectors(c,l),h=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(C0,h);const v=1/(S+T+x);return f=T*v,h=x*v,i.copy(s).addScaledVector(Rr,f).addScaledVector(Cr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Vh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ve.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ve.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ve.workingColorSpace){if(t=NM(t,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Vh(f,c,t+1/3),this.g=Vh(f,c,t),this.b=Vh(f,c,t-1/3)}return Ve.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=jv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ve.workingToColorSpace(Jn.copy(this),t),Math.round(Ne(Jn.r*255,0,255))*65536+Math.round(Ne(Jn.g*255,0,255))*256+Math.round(Ne(Jn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ve.workingColorSpace){Ve.workingToColorSpace(Jn.copy(this),i);const s=Jn.r,l=Jn.g,c=Jn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ve.workingColorSpace){return Ve.workingToColorSpace(Jn.copy(this),i),t.r=Jn.r,t.g=Jn.g,t.b=Jn.b,t}getStyle(t=Si){Ve.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,s=Jn.g,l=Jn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+i,ts.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ts),t.getHSL(Cc);const s=Th(ts.h,Cc.h,i),l=Th(ts.s,Cc.s,i),c=Th(ts.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Oe;Oe.NAMES=jv;let KM=0;class Gs extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Gr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yr,this.stencilZFail=yr,this.stencilZPass=yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==dd&&(s.blendSrc=this.blendSrc),this.blendDst!==pd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zi extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Rn=new q,Dc=new ve;let QM=0;class Vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=g0,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(t),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==g0&&(t.usage=this.usage),t}}class Xv extends Vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Wv extends Vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class _n extends Vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let JM=0;const Di=new mn,jh=new On,Dr=new q,yi=new fl,Zo=new fl,Gn=new q;class Nn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kv(t)?Wv:Xv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Te().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,i,s){return Di.makeTranslation(t,i,s),this.applyMatrix4(Di),this}scale(t,i,s){return Di.makeScale(t,i,s),this.applyMatrix4(Di),this}lookAt(t){return jh.lookAt(t),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new _n(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Zo.setFromBufferAttribute(h),this.morphTargetsRelative?(Gn.addVectors(yi.min,Zo.min),yi.expandByPoint(Gn),Gn.addVectors(yi.max,Zo.max),yi.expandByPoint(Gn)):(yi.expandByPoint(Zo.min),yi.expandByPoint(Zo.max))}yi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Gn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Gn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Gn.fromBufferAttribute(h,p),m&&(Dr.fromBufferAttribute(t,p),Gn.add(Dr)),l=Math.max(l,s.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let V=0;V<s.count;V++)h[V]=new q,m[V]=new q;const p=new q,_=new q,g=new q,x=new ve,y=new ve,b=new ve,T=new q,S=new q;function v(V,R,U){p.fromBufferAttribute(s,V),_.fromBufferAttribute(s,R),g.fromBufferAttribute(s,U),x.fromBufferAttribute(c,V),y.fromBufferAttribute(c,R),b.fromBufferAttribute(c,U),_.sub(p),g.sub(p),y.sub(x),b.sub(x);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(H),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(H),h[V].add(T),h[R].add(T),h[U].add(T),m[V].add(S),m[R].add(S),m[U].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let V=0,R=N.length;V<R;++V){const U=N[V],H=U.start,K=U.count;for(let rt=H,ct=H+K;rt<ct;rt+=3)v(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new q,C=new q,O=new q,z=new q;function B(V){O.fromBufferAttribute(l,V),z.copy(O);const R=h[V];L.copy(R),L.sub(O.multiplyScalar(O.dot(R))).normalize(),C.crossVectors(z,R);const H=C.dot(m[V])<0?-1:1;f.setXYZW(V,L.x,L.y,L.z,H)}for(let V=0,R=N.length;V<R;++V){const U=N[V],H=U.start,K=U.count;for(let rt=H,ct=H+K;rt<ct;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new q,c=new q,f=new q,h=new q,m=new q,p=new q,_=new q,g=new q;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),T=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Gn.fromBufferAttribute(t,i),Gn.normalize(),t.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*_;for(let v=0;v<_;v++)x[b++]=p[y++]}return new Vi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Nn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D0=new mn,ws=new dl,Uc=new hl,U0=new q,Lc=new q,Nc=new q,Oc=new q,Xh=new q,Pc=new q,L0=new q,zc=new q;class Tn extends On{constructor(t=new Nn,i=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Xh.fromBufferAttribute(g,t),f?Pc.addScaledVector(Xh,_):Pc.addScaledVector(Xh.sub(i),_))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Uc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Uc,U0)===null||ws.origin.distanceToSquared(U0)>(t.far-t.near)**2))&&(D0.copy(c).invert(),ws.copy(t.ray).applyMatrix4(D0),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const S=x[b],v=f[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let C=N,O=L;C<O;C+=3){const z=h.getX(C),B=h.getX(C+1),V=h.getX(C+2);l=Ic(this,v,t,s,p,_,g,z,B,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let S=b,v=T;S<v;S+=3){const N=h.getX(S),L=h.getX(S+1),C=h.getX(S+2);l=Ic(this,f,t,s,p,_,g,N,L,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const S=x[b],v=f[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let C=N,O=L;C<O;C+=3){const z=C,B=C+1,V=C+2;l=Ic(this,v,t,s,p,_,g,z,B,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let S=b,v=T;S<v;S+=3){const N=S,L=S+1,C=S+2;l=Ic(this,f,t,s,p,_,g,N,L,C),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function $M(r,t,i,s,l,c,f,h){let m;if(t.side===fi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===os,h),m===null)return null;zc.copy(h),zc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:r}}function Ic(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Lc),r.getVertexPosition(m,Nc),r.getVertexPosition(p,Oc);const _=$M(r,t,i,s,Lc,Nc,Oc,L0);if(_){const g=new q;Ui.getBarycoord(L0,Lc,Nc,Oc,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new ve)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new ve)),f&&(_.normal=Ui.getInterpolatedAttribute(f,h,m,p,g,new q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new q,materialIndex:0};Ui.getNormal(Lc,Nc,Oc,x.normal),_.face=x,_.barycoord=g}return _}class Hi extends Nn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2));function b(T,S,v,N,L,C,O,z,B,V,R){const U=C/B,H=O/V,K=C/2,rt=O/2,ct=z/2,ut=B+1,F=V+1;let nt=0,Q=0;const Mt=new q;for(let P=0;P<F;P++){const X=P*H-rt;for(let dt=0;dt<ut;dt++){const mt=dt*U-K;Mt[T]=mt*N,Mt[S]=X*L,Mt[v]=ct,p.push(Mt.x,Mt.y,Mt.z),Mt[T]=0,Mt[S]=0,Mt[v]=z>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),g.push(dt/B),g.push(1-P/V),nt+=1}}for(let P=0;P<V;P++)for(let X=0;X<B;X++){const dt=x+X+ut*P,mt=x+X+ut*(P+1),Ot=x+(X+1)+ut*(P+1),qt=x+(X+1)+ut*P;m.push(dt,mt,qt),m.push(mt,Ot,qt),Q+=6}h.addGroup(y,Q,R),y+=Q,x+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function ni(r){const t={};for(let i=0;i<r.length;i++){const s=Yr(r[i]);for(const l in s)t[l]=s[l]}return t}function tE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function qv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const eE={clone:Yr,merge:ni};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=tE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Yv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new q,N0=new ve,O0=new ve;class Mi extends Yv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,N0,O0),i.subVectors(O0,N0)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(el*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ur=-90,Lr=1;class aE extends On{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Ur,Lr,t,i);l.layers=this.layers,this.add(l);const c=new Mi(Ur,Lr,t,i);c.layers=this.layers,this.add(c);const f=new Mi(Ur,Lr,t,i);f.layers=this.layers,this.add(f);const h=new Mi(Ur,Lr,t,i);h.layers=this.layers,this.add(h);const m=new Mi(Ur,Lr,t,i);m.layers=this.layers,this.add(m);const p=new Mi(Ur,Lr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===$i)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ou)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,x,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Zv extends ii{constructor(t=[],i=Xr,s,l,c,f,h,m,p,_){super(t,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sE extends Bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Zv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Hi(5,5,5),c=new ls({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:ss});c.uniforms.tEquirect.value=i;const f=new Tn(l,c),h=i.minFilter;return i.minFilter===Ps&&(i.minFilter=Ji),new aE(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Br extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rE={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(rE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Br;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class mp{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Oe(t),this.near=i,this.far=s}clone(){return new mp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let oE=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};const qh=new q,lE=new q,cE=new Te;class ns{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=qh.subVectors(s,i).cross(lE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(qh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||cE.getNormalMatrix(t),l=this.coplanarPoint(qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new hl,uE=new ve(.5,.5),Bc=new q;class gp{constructor(t=new ns,i=new ns,s=new ns,l=new ns,c=new ns,f=new ns){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=$i,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],y=c[7],b=c[8],T=c[9],S=c[10],v=c[11],N=c[12],L=c[13],C=c[14],O=c[15];if(l[0].setComponents(p-f,y-_,v-b,O-N).normalize(),l[1].setComponents(p+f,y+_,v+b,O+N).normalize(),l[2].setComponents(p+h,y+g,v+T,O+L).normalize(),l[3].setComponents(p-h,y-g,v-T,O-L).normalize(),s)l[4].setComponents(m,x,S,C).normalize(),l[5].setComponents(p-m,y-x,v-S,O-C).normalize();else if(l[4].setComponents(p-m,y-x,v-S,O-C).normalize(),i===$i)l[5].setComponents(p+m,y+x,v+S,O+C).normalize();else if(i===ou)l[5].setComponents(m,x,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const i=uE.distanceTo(t.center);return Rs.radius=.7071067811865476+i,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vr extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new q,uu=new q,P0=new mn,Ko=new dl,Fc=new hl,Yh=new q,z0=new q;class au extends On{constructor(t=new Nn,i=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=c,t.ray.intersectsSphere(Fc)===!1)return;P0.copy(l).invert(),Ko.copy(t.ray).applyMatrix4(P0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const y=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let T=y,S=b-1;T<S;T+=p){const v=_.getX(T),N=_.getX(T+1),L=Hc(this,t,Ko,m,v,N,T);L&&i.push(L)}if(this.isLineLoop){const T=_.getX(b-1),S=_.getX(y),v=Hc(this,t,Ko,m,T,S,b-1);v&&i.push(v)}}else{const y=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let T=y,S=b-1;T<S;T+=p){const v=Hc(this,t,Ko,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Hc(this,t,Ko,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Hc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(cu.fromBufferAttribute(h,l),uu.fromBufferAttribute(h,c),i.distanceSqToSegment(cu,uu,Yh,z0)>s)return;Yh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Yh);if(!(p<t.near||p>t.far))return{distance:p,point:z0.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const I0=new q,B0=new q;class Kv extends au{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)I0.fromBufferAttribute(i,l),B0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+I0.distanceTo(B0);t.setAttribute("lineDistance",new _n(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qv extends Gs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const F0=new mn,ep=new dl,Gc=new hl,kc=new q;class fE extends On{constructor(t=new Nn,i=new Qv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,t.ray.intersectsSphere(Gc)===!1)return;F0.copy(l).invert(),ep.copy(t.ray).applyMatrix4(F0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const x=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let b=x,T=y;b<T;b++){const S=p.getX(b);kc.fromBufferAttribute(g,S),H0(kc,S,m,l,t,i,this)}}else{const x=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let b=x,T=y;b<T;b++)kc.fromBufferAttribute(g,b),H0(kc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function H0(r,t,i,s,l,c,f){const h=ep.distanceSqToPoint(r);if(h<i){const m=new q;ep.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class hE extends ii{constructor(t,i,s,l,c,f,h,m,p){super(t,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jv extends ii{constructor(t,i,s=zs,l,c,f,h=ki,m=ki,p,_=sl,g=1){if(_!==sl&&_!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $v extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class du extends Nn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],x=[],y=[];let b=0;const T=[],S=s/2;let v=0;N(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(x,3)),this.setAttribute("uv",new _n(y,2));function N(){const C=new q,O=new q;let z=0;const B=(i-t)/s;for(let V=0;V<=c;V++){const R=[],U=V/c,H=U*(i-t)+t;for(let K=0;K<=l;K++){const rt=K/l,ct=rt*m+h,ut=Math.sin(ct),F=Math.cos(ct);O.x=H*ut,O.y=-U*s+S,O.z=H*F,g.push(O.x,O.y,O.z),C.set(ut,B,F).normalize(),x.push(C.x,C.y,C.z),y.push(rt,1-U),R.push(b++)}T.push(R)}for(let V=0;V<l;V++)for(let R=0;R<c;R++){const U=T[R][V],H=T[R+1][V],K=T[R+1][V+1],rt=T[R][V+1];(t>0||R!==0)&&(_.push(U,H,rt),z+=3),(i>0||R!==c-1)&&(_.push(H,K,rt),z+=3)}p.addGroup(v,z,0),v+=z}function L(C){const O=b,z=new ve,B=new q;let V=0;const R=C===!0?t:i,U=C===!0?1:-1;for(let K=1;K<=l;K++)g.push(0,S*U,0),x.push(0,U,0),y.push(.5,.5),b++;const H=b;for(let K=0;K<=l;K++){const ct=K/l*m+h,ut=Math.cos(ct),F=Math.sin(ct);B.x=R*F,B.y=S*U,B.z=R*ut,g.push(B.x,B.y,B.z),x.push(0,U,0),z.x=ut*.5+.5,z.y=F*.5*U+.5,y.push(z.x,z.y),b++}for(let K=0;K<l;K++){const rt=O+K,ct=H+K;C===!0?_.push(ct,ct+1,rt):_.push(ct+1,ct,rt),V+=3}p.addGroup(v,V,C===!0?1:2),v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _p extends du{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new _p(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vp extends Nn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];h(l),p(s),_(),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(c.slice(),3)),this.setAttribute("uv",new _n(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const L=new q,C=new q,O=new q;for(let z=0;z<i.length;z+=3)y(i[z+0],L),y(i[z+1],C),y(i[z+2],O),m(L,C,O,N)}function m(N,L,C,O){const z=O+1,B=[];for(let V=0;V<=z;V++){B[V]=[];const R=N.clone().lerp(C,V/z),U=L.clone().lerp(C,V/z),H=z-V;for(let K=0;K<=H;K++)K===0&&V===z?B[V][K]=R:B[V][K]=R.clone().lerp(U,K/H)}for(let V=0;V<z;V++)for(let R=0;R<2*(z-V)-1;R++){const U=Math.floor(R/2);R%2===0?(x(B[V][U+1]),x(B[V+1][U]),x(B[V][U])):(x(B[V][U+1]),x(B[V+1][U+1]),x(B[V+1][U]))}}function p(N){const L=new q;for(let C=0;C<c.length;C+=3)L.x=c[C+0],L.y=c[C+1],L.z=c[C+2],L.normalize().multiplyScalar(N),c[C+0]=L.x,c[C+1]=L.y,c[C+2]=L.z}function _(){const N=new q;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const C=S(N)/2/Math.PI+.5,O=v(N)/Math.PI+.5;f.push(C,1-O)}b(),g()}function g(){for(let N=0;N<f.length;N+=6){const L=f[N+0],C=f[N+2],O=f[N+4],z=Math.max(L,C,O),B=Math.min(L,C,O);z>.9&&B<.1&&(L<.2&&(f[N+0]+=1),C<.2&&(f[N+2]+=1),O<.2&&(f[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function y(N,L){const C=N*3;L.x=t[C+0],L.y=t[C+1],L.z=t[C+2]}function b(){const N=new q,L=new q,C=new q,O=new q,z=new ve,B=new ve,V=new ve;for(let R=0,U=0;R<c.length;R+=9,U+=6){N.set(c[R+0],c[R+1],c[R+2]),L.set(c[R+3],c[R+4],c[R+5]),C.set(c[R+6],c[R+7],c[R+8]),z.set(f[U+0],f[U+1]),B.set(f[U+2],f[U+3]),V.set(f[U+4],f[U+5]),O.copy(N).add(L).add(C).divideScalar(3);const H=S(O);T(z,U+0,N,H),T(B,U+2,L,H),T(V,U+4,C,H)}}function T(N,L,C,O){O<0&&N.x===1&&(f[L]=N.x-1),C.x===0&&C.z===0&&(f[L]=O/2/Math.PI+.5)}function S(N){return Math.atan2(N.z,-N.x)}function v(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vp(t.vertices,t.indices,t.radius,t.details)}}const Vc=new q,jc=new q,Zh=new q,Xc=new Ui;class dE extends Nn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(el*i),f=t.getIndex(),h=t.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),x={},y=[];for(let b=0;b<m;b+=3){f?(p[0]=f.getX(b),p[1]=f.getX(b+1),p[2]=f.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:T,b:S,c:v}=Xc;if(T.fromBufferAttribute(h,p[0]),S.fromBufferAttribute(h,p[1]),v.fromBufferAttribute(h,p[2]),Xc.getNormal(Zh),g[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,g[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,g[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let N=0;N<3;N++){const L=(N+1)%3,C=g[N],O=g[L],z=Xc[_[N]],B=Xc[_[L]],V=`${C}_${O}`,R=`${O}_${C}`;R in x&&x[R]?(Zh.dot(x[R].normal)<=c&&(y.push(z.x,z.y,z.z),y.push(B.x,B.y,B.z)),x[R]=null):V in x||(x[V]={index0:p[N],index1:p[L],normal:Zh.clone()})}}for(const b in x)if(x[b]){const{index0:T,index1:S}=x[b];Vc.fromBufferAttribute(h,T),jc.fromBufferAttribute(h,S),y.push(Vc.x,Vc.y,Vc.z),y.push(jc.x,jc.y,jc.z)}this.setAttribute("position",new _n(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class xp extends vp{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new xp(t.radius,t.detail)}}class pl extends Nn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=t/h,x=i/m,y=[],b=[],T=[],S=[];for(let v=0;v<_;v++){const N=v*x-f;for(let L=0;L<p;L++){const C=L*g-c;b.push(C,-N,0),T.push(0,0,1),S.push(L/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<h;N++){const L=N+p*v,C=N+p*(v+1),O=N+1+p*(v+1),z=N+1+p*v;y.push(L,C,z),y.push(C,O,z)}this.setIndex(y),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(T,3)),this.setAttribute("uv",new _n(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.widthSegments,t.heightSegments)}}class yp extends Nn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],g=new q,x=new q,y=[],b=[],T=[],S=[];for(let v=0;v<=s;v++){const N=[],L=v/s;let C=0;v===0&&f===0?C=.5/i:v===s&&m===Math.PI&&(C=-.5/i);for(let O=0;O<=i;O++){const z=O/i;g.x=-t*Math.cos(l+z*c)*Math.sin(f+L*h),g.y=t*Math.cos(f+L*h),g.z=t*Math.sin(l+z*c)*Math.sin(f+L*h),b.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),S.push(z+C,1-L),N.push(p++)}_.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const L=_[v][N+1],C=_[v][N],O=_[v+1][N],z=_[v+1][N+1];(v!==0||f>0)&&y.push(L,C,z),(v!==s-1||m<Math.PI)&&y.push(C,O,z)}this.setIndex(y),this.setAttribute("position",new _n(b,3)),this.setAttribute("normal",new _n(T,3)),this.setAttribute("uv",new _n(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fu extends Nn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],_=new q,g=new q,x=new q;for(let y=0;y<=s;y++)for(let b=0;b<=l;b++){const T=b/l*c,S=y/s*Math.PI*2;g.x=(t+i*Math.cos(S))*Math.cos(T),g.y=(t+i*Math.cos(S))*Math.sin(T),g.z=i*Math.sin(S),h.push(g.x,g.y,g.z),_.x=t*Math.cos(T),_.y=t*Math.sin(T),x.subVectors(g,_).normalize(),m.push(x.x,x.y,x.z),p.push(b/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let b=1;b<=l;b++){const T=(l+1)*y+b-1,S=(l+1)*(y-1)+b-1,v=(l+1)*(y-1)+b,N=(l+1)*y+b;f.push(T,S,N),f.push(S,v,N)}this.setIndex(f),this.setAttribute("position",new _n(h,3)),this.setAttribute("normal",new _n(m,3)),this.setAttribute("uv",new _n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wc extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hv,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pE extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mE extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gE extends Vr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Sp extends On{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class _E extends Sp{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Kh=new mn,G0=new q,k0=new q;class tx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=ta,this.map=null,this.mapPass=null,this.matrix=new mn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G0.setFromMatrixPosition(t.matrixWorld),i.position.copy(G0),k0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(k0),i.updateMatrixWorld(),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const V0=new mn,Qo=new q,Qh=new q;class vE extends tx{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new cn(2,1,1,1),new cn(0,1,1,1),new cn(3,1,1,1),new cn(1,1,1,1),new cn(3,0,1,1),new cn(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Qo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Qo),Qh.copy(s.position),Qh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Qh),s.updateMatrixWorld(),l.makeTranslation(-Qo.x,-Qo.y,-Qo.z),V0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(V0,s.coordinateSystem,s.reversedDepth)}}class xE extends Sp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new vE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ex extends Yv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yE extends tx{constructor(){super(new ex(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SE extends Sp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new yE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ME extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const j0=new mn;class EE{constructor(t,i,s=0,l=1/0){this.ray=new dl(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return j0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(j0),this}intersectObject(t,i=!0,s=[]){return np(t,this,s,i),s.sort(X0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)np(t[l],this,s,i);return s.sort(X0),s}}function X0(r,t){return r.distance-t.distance}function np(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)np(c[f],t,i,!0)}}class W0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ne(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bE extends Kv{constructor(t=10,i=10,s=4473924,l=8947848){s=new Oe(s),l=new Oe(l);const c=i/2,f=t/i,h=t/2,m=[],p=[];for(let x=0,y=0,b=-h;x<=i;x++,b+=f){m.push(-h,0,b,h,0,b),m.push(b,0,-h,b,0,h);const T=x===c?s:l;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const _=new Nn;_.setAttribute("position",new _n(m,3)),_.setAttribute("color",new _n(p,3));const g=new Vr({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class TE extends Hs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function q0(r,t,i,s){const l=AE(s);switch(i){case zv:return r*t;case Bv:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case Fv:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case Iv:return r*t*3/l.components*l.byteLength;case Gi:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wd:case Cd:return Math.max(r,16)*Math.max(t,8)/4;case Ad:case Rd:return Math.max(r,8)*Math.max(t,8)/2;case Dd:case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case qd:case Yd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jd:case $d:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AE(r){switch(r){case ta:case Lv:return{byteLength:1,components:1};case il:case Nv:case cl:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case zs:case op:case Aa:return{byteLength:4,components:1};case Ov:case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function wE(r){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OE=`#ifdef USE_AOMAP
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
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zE=`#ifdef USE_BATCHING
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
#endif`,IE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GE=`#ifdef USE_IRIDESCENCE
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
#endif`,kE=`#ifdef USE_BUMPMAP
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
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QE=`#define PI 3.141592653589793
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
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
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
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,Ab=`struct PhysicalMaterial {
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
}`,wb=`
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ib=`#if defined( USE_POINTS_UV )
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
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
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
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,O1=`#if DEPTH_PACKING == 3200
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
}`,P1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,j1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define NORMAL
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
}`,Z1=`#define PHONG
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
}`,K1=`#define PHONG
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,$1=`#define TOON
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
}`,tT=`#define TOON
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
}`,eT=`uniform float size;
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,aT=`uniform vec3 color;
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
}`,sT=`uniform float rotation;
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
}`,rT=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:RE,alphahash_pars_fragment:CE,alphamap_fragment:DE,alphamap_pars_fragment:UE,alphatest_fragment:LE,alphatest_pars_fragment:NE,aomap_fragment:OE,aomap_pars_fragment:PE,batching_pars_vertex:zE,batching_vertex:IE,begin_vertex:BE,beginnormal_vertex:FE,bsdfs:HE,iridescence_fragment:GE,bumpmap_pars_fragment:kE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:jE,clipping_planes_pars_vertex:XE,clipping_planes_vertex:WE,color_fragment:qE,color_pars_fragment:YE,color_pars_vertex:ZE,color_vertex:KE,common:QE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:$E,displacementmap_pars_vertex:tb,displacementmap_vertex:eb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:ab,colorspace_pars_fragment:sb,envmap_fragment:rb,envmap_common_pars_fragment:ob,envmap_pars_fragment:lb,envmap_pars_vertex:cb,envmap_physical_pars_fragment:yb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:hb,fog_fragment:db,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_pars_fragment:gb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:xb,lights_toon_fragment:Sb,lights_toon_pars_fragment:Mb,lights_phong_fragment:Eb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:wb,lights_fragment_maps:Rb,lights_fragment_end:Cb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Ub,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Nb,map_fragment:Ob,map_pars_fragment:Pb,map_particle_fragment:zb,map_particle_pars_fragment:Ib,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Fb,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:kb,morphtarget_pars_vertex:Vb,morphtarget_vertex:jb,normal_fragment_begin:Xb,normal_fragment_maps:Wb,normal_pars_fragment:qb,normal_pars_vertex:Yb,normal_vertex:Zb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:t1,opaque_fragment:e1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:a1,dithering_fragment:s1,dithering_pars_fragment:r1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:u1,shadowmap_vertex:f1,shadowmask_pars_fragment:h1,skinbase_vertex:d1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:_1,specularmap_pars_fragment:v1,tonemapping_fragment:x1,tonemapping_pars_fragment:y1,transmission_fragment:S1,transmission_pars_fragment:M1,uv_pars_fragment:E1,uv_pars_vertex:b1,uv_vertex:T1,worldpos_vertex:A1,background_vert:w1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:D1,cube_vert:U1,cube_frag:L1,depth_vert:N1,depth_frag:O1,distanceRGBA_vert:P1,distanceRGBA_frag:z1,equirect_vert:I1,equirect_frag:B1,linedashed_vert:F1,linedashed_frag:H1,meshbasic_vert:G1,meshbasic_frag:k1,meshlambert_vert:V1,meshlambert_frag:j1,meshmatcap_vert:X1,meshmatcap_frag:W1,meshnormal_vert:q1,meshnormal_frag:Y1,meshphong_vert:Z1,meshphong_frag:K1,meshphysical_vert:Q1,meshphysical_frag:J1,meshtoon_vert:$1,meshtoon_frag:tT,points_vert:eT,points_frag:nT,shadow_vert:iT,shadow_frag:aT,sprite_vert:sT,sprite_frag:rT},jt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},Qi={basic:{uniforms:ni([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:ni([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:ni([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:ni([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:ni([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:ni([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:ni([jt.points,jt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:ni([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:ni([jt.common,jt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:ni([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:ni([jt.sprite,jt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:ni([jt.common,jt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:ni([jt.lights,jt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Qi.physical={uniforms:ni([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const qc={r:0,b:0,g:0},Cs=new ea,oT=new mn;function lT(r,t,i,s,l,c,f){const h=new Oe(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function b(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:t).get(C)),C}function T(L){let C=!1;const O=b(L);O===null?v(h,m):O&&O.isColor&&(v(O,1),C=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,C){const O=b(C);O&&(O.isCubeTexture||O.mapping===hu)?(_===void 0&&(_=new Tn(new Hi(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:Yr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,B,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Cs.copy(C.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(Cs)),_.material.toneMapped=Ve.getTransfer(O.colorSpace)!==on,(g!==O||x!==O.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,g=O,x=O.version,y=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Tn(new pl(2,2),new ls({name:"BackgroundMaterial",uniforms:Yr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Ve.getTransfer(O.colorSpace)!==on,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||x!==O.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=O,x=O.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,C){L.getRGB(qc,qv(r)),s.buffers.color.setClear(qc.r,qc.g,qc.b,C,f)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,C=1){h.set(L),m=C,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:T,addToRenderList:S,dispose:N}}function cT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function h(U,H,K,rt,ct){let ut=!1;const F=g(rt,K,H);c!==F&&(c=F,p(c.object)),ut=y(U,rt,K,ct),ut&&b(U,rt,K,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,C(U,H,K,rt),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function _(U){return r.deleteVertexArray(U)}function g(U,H,K){const rt=K.wireframe===!0;let ct=s[U.id];ct===void 0&&(ct={},s[U.id]=ct);let ut=ct[H.id];ut===void 0&&(ut={},ct[H.id]=ut);let F=ut[rt];return F===void 0&&(F=x(m()),ut[rt]=F),F}function x(U){const H=[],K=[],rt=[];for(let ct=0;ct<i;ct++)H[ct]=0,K[ct]=0,rt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:rt,object:U,attributes:{},index:null}}function y(U,H,K,rt){const ct=c.attributes,ut=H.attributes;let F=0;const nt=K.getAttributes();for(const Q in nt)if(nt[Q].location>=0){const P=ct[Q];let X=ut[Q];if(X===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),P===void 0||P.attribute!==X||X&&P.data!==X.data)return!0;F++}return c.attributesNum!==F||c.index!==rt}function b(U,H,K,rt){const ct={},ut=H.attributes;let F=0;const nt=K.getAttributes();for(const Q in nt)if(nt[Q].location>=0){let P=ut[Q];P===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(P=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(P=U.instanceColor));const X={};X.attribute=P,P&&P.data&&(X.data=P.data),ct[Q]=X,F++}c.attributes=ct,c.attributesNum=F,c.index=rt}function T(){const U=c.newAttributes;for(let H=0,K=U.length;H<K;H++)U[H]=0}function S(U){v(U,0)}function v(U,H){const K=c.newAttributes,rt=c.enabledAttributes,ct=c.attributeDivisors;K[U]=1,rt[U]===0&&(r.enableVertexAttribArray(U),rt[U]=1),ct[U]!==H&&(r.vertexAttribDivisor(U,H),ct[U]=H)}function N(){const U=c.newAttributes,H=c.enabledAttributes;for(let K=0,rt=H.length;K<rt;K++)H[K]!==U[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function L(U,H,K,rt,ct,ut,F){F===!0?r.vertexAttribIPointer(U,H,K,ct,ut):r.vertexAttribPointer(U,H,K,rt,ct,ut)}function C(U,H,K,rt){T();const ct=rt.attributes,ut=K.getAttributes(),F=H.defaultAttributeValues;for(const nt in ut){const Q=ut[nt];if(Q.location>=0){let Mt=ct[nt];if(Mt===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor)),Mt!==void 0){const P=Mt.normalized,X=Mt.itemSize,dt=t.get(Mt);if(dt===void 0)continue;const mt=dt.buffer,Ot=dt.type,qt=dt.bytesPerElement,it=Ot===r.INT||Ot===r.UNSIGNED_INT||Mt.gpuType===op;if(Mt.isInterleavedBufferAttribute){const yt=Mt.data,Dt=yt.stride,se=Mt.offset;if(yt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Q.locationSize;Xt++)v(Q.location+Xt,yt.meshPerAttribute);U.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Xt=0;Xt<Q.locationSize;Xt++)S(Q.location+Xt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Xt=0;Xt<Q.locationSize;Xt++)L(Q.location+Xt,X/Q.locationSize,Ot,P,Dt*qt,(se+X/Q.locationSize*Xt)*qt,it)}else{if(Mt.isInstancedBufferAttribute){for(let yt=0;yt<Q.locationSize;yt++)v(Q.location+yt,Mt.meshPerAttribute);U.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let yt=0;yt<Q.locationSize;yt++)S(Q.location+yt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let yt=0;yt<Q.locationSize;yt++)L(Q.location+yt,X/Q.locationSize,Ot,P,X*qt,X/Q.locationSize*yt*qt,it)}}else if(F!==void 0){const P=F[nt];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(Q.location,P);break;case 3:r.vertexAttrib3fv(Q.location,P);break;case 4:r.vertexAttrib4fv(Q.location,P);break;default:r.vertexAttrib1fv(Q.location,P)}}}}N()}function O(){V();for(const U in s){const H=s[U];for(const K in H){const rt=H[K];for(const ct in rt)_(rt[ct].object),delete rt[ct];delete H[K]}delete s[U]}}function z(U){if(s[U.id]===void 0)return;const H=s[U.id];for(const K in H){const rt=H[K];for(const ct in rt)_(rt[ct].object),delete rt[ct];delete H[K]}delete s[U.id]}function B(U){for(const H in s){const K=s[H];if(K[U.id]===void 0)continue;const rt=K[U.id];for(const ct in rt)_(rt[ct].object),delete rt[ct];delete K[U.id]}}function V(){R(),f=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:V,resetDefaultState:R,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:N}}function uT(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,s,1)}function m(p,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*x[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function fT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Gi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const V=B===cl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ta&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Aa&&!V)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=b>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:O,maxSamples:z}}function hT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ns,h=new Te,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,v=r.get(g);if(!l||b===null||b.length===0||c&&!S)c?_(null):p();else{const N=c?0:s,L=N*4;let C=v.clippingState||null;m.value=C,C=_(b,x,L,y);for(let O=0;O!==L;++O)C[O]=i[O];v.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,x,y,b){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,b!==!0||S===null){const v=y+T*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,C=y;L!==T;++L,C+=4)f.copy(g[L]).applyMatrix4(N,h),f.normal.toArray(S,C),S[C+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function dT(r){let t=new WeakMap;function i(f,h){return h===Md?f.mapping=Xr:h===Ed&&(f.mapping=Wr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Md||h===Ed)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new sE(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Fr=4,Y0=[.125,.215,.35,.446,.526,.582],Ns=20,Jh=new ex,Z0=new Oe;let $h=null,td=0,ed=0,nd=!1;const Us=(1+Math.sqrt(5))/2,Nr=1/Us,K0=[new q(-Us,Nr,0),new q(Us,Nr,0),new q(-Nr,0,Us),new q(Nr,0,Us),new q(0,Us,-Nr),new q(0,Us,Nr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],pT=new q;class Q0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=pT}=c;$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($h,td,ed),this._renderer.xr.enabled=nd,t.scissorTest=!1,Yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Xr||t.mapping===Wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$h=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:cl,format:Gi,colorSpace:qr,depthBuffer:!1},l=J0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mT(c)),this._blurMaterial=gT(c,t,i)}return l}_compileMaterial(t){const i=new Tn(this._lodPlanes[0],t);this._renderer.compile(i,Jh)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(Z0),g.toneMapping=rs,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new Zi({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),S=new Tn(new Hi,T);let v=!1;const N=t.background;N?N.isColor&&(T.color.copy(N),t.background=null,v=!0):(T.color.copy(Z0),v=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):C===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const O=this._cubeSize;Yc(l,C*O,L>2?O:0,O,O),g.setRenderTarget(l),v&&g.render(S,m),g.render(t,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Xr||t.mapping===Wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Tn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Yc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Jh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=K0[(l-c-1)%K0.length];this._blur(t,c-1,c,f,h)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Tn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),T=c/b,S=isFinite(c)?1+Math.floor(_*T):Ns;S>Ns&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ns}`);const v=[];let N=0;for(let B=0;B<Ns;++B){const V=B/T,R=Math.exp(-V*V/2);v.push(R),B===0?N+=R:B<S&&(N+=2*R)}for(let B=0;B<v.length;B++)v[B]=v[B]/N;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-s;const C=this._sizeLods[l],O=3*C*(l>L-Fr?l-L+Fr:0),z=4*(this._cubeSize-C);Yc(i,O,z,3*C,2*C),m.setRenderTarget(i),m.render(g,Jh)}}function mT(r){const t=[],i=[],s=[];let l=r;const c=r-Fr+1+Y0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>r-Fr?m=Y0[f-r+Fr-1]:f===0&&(m=0),s.push(m);const p=1/(h-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,T=3,S=2,v=1,N=new Float32Array(T*b*y),L=new Float32Array(S*b*y),C=new Float32Array(v*b*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,V=z>2?0:-1,R=[B,V,0,B+2/3,V,0,B+2/3,V+1,0,B,V,0,B+2/3,V+1,0,B,V+1,0];N.set(R,T*b*z),L.set(x,S*b*z);const U=[z,z,z,z,z,z];C.set(U,v*b*z)}const O=new Nn;O.setAttribute("position",new Vi(N,T)),O.setAttribute("uv",new Vi(L,S)),O.setAttribute("faceIndex",new Vi(C,v)),t.push(O),l>Fr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function J0(r,t,i){const s=new Bs(r,t,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function gT(r,t,i){const s=new Float32Array(Ns),l=new q(0,1,0);return new ls({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function $0(){return new ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mp(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function tv(){return new ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Mp(){return`

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
	`}function _T(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Md||m===Ed,_=m===Xr||m===Wr;if(p||_){let g=t.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new Q0(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Q0(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function vT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ol("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function xT(r,t,i,s){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let L=0,C=N.length;L<C;L+=3){const O=N[L+0],z=N[L+1],B=N[L+2];x.push(O,z,z,B,B,O)}}else if(b!==void 0){const N=b.array;T=b.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const O=L+0,z=L+1,B=L+2;x.push(O,z,z,B,B,O)}}else return;const S=new(kv(x)?Wv:Xv)(x,1);S.version=T;const v=c.get(g);v&&t.remove(v),c.set(g,S)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function yT(r,t,i){let s;function l(x){s=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,c,x*f),i.update(y,s,1)}function p(x,y,b){b!==0&&(r.drawElementsInstanced(s,y,c,x*f,b),i.update(y,s,b))}function _(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,x,0,b);let S=0;for(let v=0;v<b;v++)S+=y[v];i.update(S,s,1)}function g(x,y,b,T){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,x,0,T,0,b);let v=0;for(let N=0;N<b;N++)v+=y[N]*T[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function ST(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function MT(r,t,i){const s=new WeakMap,l=new cn;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let R=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",R)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;y===!0&&(L=1),b===!0&&(L=2),T===!0&&(L=3);let C=h.attributes.position.count*L,O=1;C>t.maxTextureSize&&(O=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const z=new Float32Array(C*O*4*g),B=new Vv(z,C,O,g);B.type=Aa,B.needsUpdate=!0;const V=L*4;for(let U=0;U<g;U++){const H=S[U],K=v[U],rt=N[U],ct=C*O*4*U;for(let ut=0;ut<H.count;ut++){const F=ut*V;y===!0&&(l.fromBufferAttribute(H,ut),z[ct+F+0]=l.x,z[ct+F+1]=l.y,z[ct+F+2]=l.z,z[ct+F+3]=0),b===!0&&(l.fromBufferAttribute(K,ut),z[ct+F+4]=l.x,z[ct+F+5]=l.y,z[ct+F+6]=l.z,z[ct+F+7]=0),T===!0&&(l.fromBufferAttribute(rt,ut),z[ct+F+8]=l.x,z[ct+F+9]=l.y,z[ct+F+10]=l.z,z[ct+F+11]=rt.itemSize===4?l.w:1)}}x={count:g,texture:B,size:new ve(C,O)},s.set(h,x),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let y=0;for(let T=0;T<p.length;T++)y+=p[T];const b=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function ET(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const ix=new ii,ev=new Jv(1,1),ax=new Vv,sx=new kM,rx=new Zv,nv=[],iv=[],av=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=nv[l];if(c===void 0&&(c=new Float32Array(l),nv[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function Pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function zn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function pu(r,t){let i=iv[t];i===void 0&&(i=new Int32Array(t),iv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function bT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function TT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2fv(this.addr,t),zn(i,t)}}function AT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Pn(i,t))return;r.uniform3fv(this.addr,t),zn(i,t)}}function wT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4fv(this.addr,t),zn(i,t)}}function RT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),zn(i,t)}else{if(Pn(i,s))return;rv.set(s),r.uniformMatrix2fv(this.addr,!1,rv),zn(i,s)}}function CT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),zn(i,t)}else{if(Pn(i,s))return;sv.set(s),r.uniformMatrix3fv(this.addr,!1,sv),zn(i,s)}}function DT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),zn(i,t)}else{if(Pn(i,s))return;av.set(s),r.uniformMatrix4fv(this.addr,!1,av),zn(i,s)}}function UT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2iv(this.addr,t),zn(i,t)}}function NT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;r.uniform3iv(this.addr,t),zn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4iv(this.addr,t),zn(i,t)}}function PT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Pn(i,t))return;r.uniform2uiv(this.addr,t),zn(i,t)}}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Pn(i,t))return;r.uniform3uiv(this.addr,t),zn(i,t)}}function BT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Pn(i,t))return;r.uniform4uiv(this.addr,t),zn(i,t)}}function FT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ev.compareFunction=Gv,c=ev):c=ix,i.setTexture2D(t||c,l)}function HT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||sx,l)}function GT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||rx,l)}function kT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||ax,l)}function VT(r){switch(r){case 5126:return bT;case 35664:return TT;case 35665:return AT;case 35666:return wT;case 35674:return RT;case 35675:return CT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return IT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return kT}}function jT(r,t){r.uniform1fv(this.addr,t)}function XT(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function WT(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function qT(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function YT(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function ZT(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function KT(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function QT(r,t){r.uniform1iv(this.addr,t)}function JT(r,t){r.uniform2iv(this.addr,t)}function $T(r,t){r.uniform3iv(this.addr,t)}function tA(r,t){r.uniform4iv(this.addr,t)}function eA(r,t){r.uniform1uiv(this.addr,t)}function nA(r,t){r.uniform2uiv(this.addr,t)}function iA(r,t){r.uniform3uiv(this.addr,t)}function aA(r,t){r.uniform4uiv(this.addr,t)}function sA(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||ix,c[f])}function rA(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||sx,c[f])}function oA(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||rx,c[f])}function lA(r,t,i){const s=this.cache,l=t.length,c=pu(i,l);Pn(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||ax,c[f])}function cA(r){switch(r){case 5126:return jT;case 35664:return XT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return $T;case 35669:case 35673:return tA;case 5125:return eA;case 36294:return nA;case 36295:return iA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return lA}}class uA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VT(i.type)}}class fA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=cA(i.type)}}class hA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const id=/(\w+)(\])?(\[|\.)?/g;function ov(r,t){r.seq.push(t),r.map[t.id]=t}function dA(r,t,i){const s=r.name,l=s.length;for(id.lastIndex=0;;){const c=id.exec(s),f=id.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){ov(i,p===void 0?new uA(h,r,t):new fA(h,r,t));break}else{let g=i.map[h];g===void 0&&(g=new hA(h),ov(i,g)),i=g}}}class su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);dA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function lv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const pA=37297;let mA=0;function gA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const cv=new Te;function _A(r){Ve._getMatrix(cv,Ve.workingColorSpace,r);const t=`mat3( ${cv.elements.map(i=>i.toFixed(4))} )`;switch(Ve.getTransfer(r)){case ru:return[t,"LinearTransferOETF"];case on:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function uv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+gA(r.getShaderSource(t),h)}else return c}function vA(r,t){const i=_A(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function xA(r,t){let i;switch(t){case pM:i="Linear";break;case mM:i="Reinhard";break;case gM:i="Cineon";break;case _M:i="ACESFilmic";break;case xM:i="AgX";break;case yM:i="Neutral";break;case vM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new q;function yA(){Ve.getLuminanceCoefficients(Zc);const r=Zc.x.toFixed(4),t=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function MA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function EA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function $o(r){return r!==""}function fv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(bA,AA)}const TA=new Map;function AA(r,t){let i=Ae[t];if(i===void 0){const s=TA.get(t);if(s!==void 0)i=Ae[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ip(i)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(wA,RA)}function RA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function pv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function CA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ea&&(t="SHADOWMAP_TYPE_VSM"),t}function DA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case Wr:t="ENVMAP_TYPE_CUBE";break;case hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function UA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Wr:t="ENVMAP_MODE_REFRACTION";break}return t}function LA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dv:t="ENVMAP_BLENDING_MULTIPLY";break;case hM:t="ENVMAP_BLENDING_MIX";break;case dM:t="ENVMAP_BLENDING_ADD";break}return t}function NA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function OA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=CA(i),p=DA(i),_=UA(i),g=LA(i),x=NA(i),y=SA(i),b=MA(c),T=l.createProgram();let S,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),v.length>0&&(v+=`
`)):(S=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),v=[pv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==rs?"#define TONE_MAPPING":"",i.toneMapping!==rs?Ae.tonemapping_pars_fragment:"",i.toneMapping!==rs?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,vA("linearToOutputTexel",i.outputColorSpace),yA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=ip(f),f=fv(f,i),f=hv(f,i),h=ip(h),h=fv(h,i),h=hv(h,i),f=dv(f),h=dv(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+S+f,C=N+v+h,O=lv(l,l.VERTEX_SHADER,L),z=lv(l,l.FRAGMENT_SHADER,C);l.attachShader(T,O),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(H){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",rt=l.getShaderInfoLog(O)||"",ct=l.getShaderInfoLog(z)||"",ut=K.trim(),F=rt.trim(),nt=ct.trim();let Q=!0,Mt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,O,z);else{const P=uv(l,O,"vertex"),X=uv(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+P+`
`+X)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(F===""||nt==="")&&(Mt=!1);Mt&&(H.diagnostics={runnable:Q,programLog:ut,vertexShader:{log:F,prefix:S},fragmentShader:{log:nt,prefix:v}})}l.deleteShader(O),l.deleteShader(z),V=new su(l,T),R=EA(l,T)}let V;this.getUniforms=function(){return V===void 0&&B(this),V};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(T,pA)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=mA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=z,this}let PA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new IA(t),i.set(t,s)),s}}class IA{constructor(t){this.id=PA++,this.code=t,this.usedTimes=0}}function BA(r,t,i,s,l,c,f){const h=new pp,m=new zA,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function S(R,U,H,K,rt){const ct=K.fog,ut=rt.geometry,F=R.isMeshStandardMaterial?K.environment:null,nt=(R.isMeshStandardMaterial?i:t).get(R.envMap||F),Q=nt&&nt.mapping===hu?nt.image.height:null,Mt=b[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const P=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,X=P!==void 0?P.length:0;let dt=0;ut.morphAttributes.position!==void 0&&(dt=1),ut.morphAttributes.normal!==void 0&&(dt=2),ut.morphAttributes.color!==void 0&&(dt=3);let mt,Ot,qt,it;if(Mt){const Me=Qi[Mt];mt=Me.vertexShader,Ot=Me.fragmentShader}else mt=R.vertexShader,Ot=R.fragmentShader,m.update(R),qt=m.getVertexShaderID(R),it=m.getFragmentShaderID(R);const yt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),se=rt.isInstancedMesh===!0,Xt=rt.isBatchedMesh===!0,oe=!!R.map,Qe=!!R.matcap,k=!!nt,ze=!!R.aoMap,de=!!R.lightMap,le=!!R.bumpMap,Ft=!!R.normalMap,He=!!R.displacementMap,Gt=!!R.emissiveMap,ge=!!R.metalnessMap,en=!!R.roughnessMap,nn=R.anisotropy>0,I=R.clearcoat>0,A=R.dispersion>0,$=R.iridescence>0,gt=R.sheen>0,ht=R.transmission>0,pt=nn&&!!R.anisotropyMap,kt=I&&!!R.clearcoatMap,At=I&&!!R.clearcoatNormalMap,$t=I&&!!R.clearcoatRoughnessMap,Yt=$&&!!R.iridescenceMap,bt=$&&!!R.iridescenceThicknessMap,Bt=gt&&!!R.sheenColorMap,ne=gt&&!!R.sheenRoughnessMap,Qt=!!R.specularMap,Nt=!!R.specularColorMap,ce=!!R.specularIntensityMap,Z=ht&&!!R.transmissionMap,Rt=ht&&!!R.thicknessMap,Lt=!!R.gradientMap,Wt=!!R.alphaMap,wt=R.alphaTest>0,xt=!!R.alphaHash,Kt=!!R.extensions;let ue=rs;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ue=r.toneMapping);const Pe={shaderID:Mt,shaderType:R.type,shaderName:R.name,vertexShader:mt,fragmentShader:Ot,defines:R.defines,customVertexShaderID:qt,customFragmentShaderID:it,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&rt._colorsTexture!==null,instancing:se,instancingColor:se&&rt.instanceColor!==null,instancingMorph:se&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:qr,alphaToCoverage:!!R.alphaToCoverage,map:oe,matcap:Qe,envMap:k,envMapMode:k&&nt.mapping,envMapCubeUVHeight:Q,aoMap:ze,lightMap:de,bumpMap:le,normalMap:Ft,displacementMap:x&&He,emissiveMap:Gt,normalMapObjectSpace:Ft&&R.normalMapType===bM,normalMapTangentSpace:Ft&&R.normalMapType===Hv,metalnessMap:ge,roughnessMap:en,anisotropy:nn,anisotropyMap:pt,clearcoat:I,clearcoatMap:kt,clearcoatNormalMap:At,clearcoatRoughnessMap:$t,dispersion:A,iridescence:$,iridescenceMap:Yt,iridescenceThicknessMap:bt,sheen:gt,sheenColorMap:Bt,sheenRoughnessMap:ne,specularMap:Qt,specularColorMap:Nt,specularIntensityMap:ce,transmission:ht,transmissionMap:Z,thicknessMap:Rt,gradientMap:Lt,opaque:R.transparent===!1&&R.blending===Gr&&R.alphaToCoverage===!1,alphaMap:Wt,alphaTest:wt,alphaHash:xt,combine:R.combine,mapUv:oe&&T(R.map.channel),aoMapUv:ze&&T(R.aoMap.channel),lightMapUv:de&&T(R.lightMap.channel),bumpMapUv:le&&T(R.bumpMap.channel),normalMapUv:Ft&&T(R.normalMap.channel),displacementMapUv:He&&T(R.displacementMap.channel),emissiveMapUv:Gt&&T(R.emissiveMap.channel),metalnessMapUv:ge&&T(R.metalnessMap.channel),roughnessMapUv:en&&T(R.roughnessMap.channel),anisotropyMapUv:pt&&T(R.anisotropyMap.channel),clearcoatMapUv:kt&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:At&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:ne&&T(R.sheenRoughnessMap.channel),specularMapUv:Qt&&T(R.specularMap.channel),specularColorMapUv:Nt&&T(R.specularColorMap.channel),specularIntensityMapUv:ce&&T(R.specularIntensityMap.channel),transmissionMapUv:Z&&T(R.transmissionMap.channel),thicknessMapUv:Rt&&T(R.thicknessMap.channel),alphaMapUv:Wt&&T(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Ft||nn),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ut.attributes.uv&&(oe||Wt),fog:!!ct,useFog:R.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:rt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:dt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:oe&&R.map.isVideoTexture===!0&&Ve.getTransfer(R.map.colorSpace)===on,decodeVideoTextureEmissive:Gt&&R.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(R.emissiveMap.colorSpace)===on,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ta,flipSided:R.side===fi,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Kt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&R.extensions.multiDraw===!0||Xt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(R){const U=[];if(R.shaderID?U.push(R.shaderID):(U.push(R.customVertexShaderID),U.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)U.push(H),U.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(N(U,R),L(U,R),U.push(r.outputColorSpace)),U.push(R.customProgramCacheKey),U.join()}function N(R,U){R.push(U.precision),R.push(U.outputColorSpace),R.push(U.envMapMode),R.push(U.envMapCubeUVHeight),R.push(U.mapUv),R.push(U.alphaMapUv),R.push(U.lightMapUv),R.push(U.aoMapUv),R.push(U.bumpMapUv),R.push(U.normalMapUv),R.push(U.displacementMapUv),R.push(U.emissiveMapUv),R.push(U.metalnessMapUv),R.push(U.roughnessMapUv),R.push(U.anisotropyMapUv),R.push(U.clearcoatMapUv),R.push(U.clearcoatNormalMapUv),R.push(U.clearcoatRoughnessMapUv),R.push(U.iridescenceMapUv),R.push(U.iridescenceThicknessMapUv),R.push(U.sheenColorMapUv),R.push(U.sheenRoughnessMapUv),R.push(U.specularMapUv),R.push(U.specularColorMapUv),R.push(U.specularIntensityMapUv),R.push(U.transmissionMapUv),R.push(U.thicknessMapUv),R.push(U.combine),R.push(U.fogExp2),R.push(U.sizeAttenuation),R.push(U.morphTargetsCount),R.push(U.morphAttributeCount),R.push(U.numDirLights),R.push(U.numPointLights),R.push(U.numSpotLights),R.push(U.numSpotLightMaps),R.push(U.numHemiLights),R.push(U.numRectAreaLights),R.push(U.numDirLightShadows),R.push(U.numPointLightShadows),R.push(U.numSpotLightShadows),R.push(U.numSpotLightShadowsWithMaps),R.push(U.numLightProbes),R.push(U.shadowMapType),R.push(U.toneMapping),R.push(U.numClippingPlanes),R.push(U.numClipIntersection),R.push(U.depthPacking)}function L(R,U){h.disableAll(),U.supportsVertexTextures&&h.enable(0),U.instancing&&h.enable(1),U.instancingColor&&h.enable(2),U.instancingMorph&&h.enable(3),U.matcap&&h.enable(4),U.envMap&&h.enable(5),U.normalMapObjectSpace&&h.enable(6),U.normalMapTangentSpace&&h.enable(7),U.clearcoat&&h.enable(8),U.iridescence&&h.enable(9),U.alphaTest&&h.enable(10),U.vertexColors&&h.enable(11),U.vertexAlphas&&h.enable(12),U.vertexUv1s&&h.enable(13),U.vertexUv2s&&h.enable(14),U.vertexUv3s&&h.enable(15),U.vertexTangents&&h.enable(16),U.anisotropy&&h.enable(17),U.alphaHash&&h.enable(18),U.batching&&h.enable(19),U.dispersion&&h.enable(20),U.batchingColor&&h.enable(21),U.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),R.push(h.mask)}function C(R){const U=b[R.type];let H;if(U){const K=Qi[U];H=eE.clone(K.uniforms)}else H=R.uniforms;return H}function O(R,U){let H;for(let K=0,rt=_.length;K<rt;K++){const ct=_[K];if(ct.cacheKey===U){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new OA(r,U,R,c),_.push(H)),H}function z(R){if(--R.usedTimes===0){const U=_.indexOf(R);_[U]=_[_.length-1],_.pop(),R.destroy()}}function B(R){m.remove(R)}function V(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:C,acquireProgram:O,releaseProgram:z,releaseShaderCache:B,programs:_,dispose:V}}function FA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function HA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,x,y,b,T,S){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:S},r[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=S),t++,v}function h(g,x,y,b,T,S){const v=f(g,x,y,b,T,S);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,x,y,b,T,S){const v=f(g,x,y,b,T,S);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||HA),s.length>1&&s.sort(x||mv),l.length>1&&l.sort(x||mv)}function _(){for(let g=t,x=r.length;g<x;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function GA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new gv,r.set(s,[f])):l>=c.length?(f=new gv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function kA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new Oe};break;case"SpotLight":i={position:new q,direction:new q,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function VA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let jA=0;function XA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function WA(r){const t=new kA,i=VA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new mn,f=new mn;function h(p){let _=0,g=0,x=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,b=0,T=0,S=0,v=0,N=0,L=0,C=0,O=0,z=0,B=0;p.sort(XA);for(let R=0,U=p.length;R<U;R++){const H=p[R],K=H.color,rt=H.intensity,ct=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=K.r*rt,g+=K.g*rt,x+=K.b*rt;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],rt);B++}else if(H.isDirectionalLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const nt=H.shadow,Q=i.get(H);Q.shadowIntensity=nt.intensity,Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,s.directionalShadow[y]=Q,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=H.shadow.matrix,N++}s.directional[y]=F,y++}else if(H.isSpotLight){const F=t.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(K).multiplyScalar(rt),F.distance=ct,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[T]=F;const nt=H.shadow;if(H.map&&(s.spotLightMap[O]=H.map,O++,nt.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[T]=nt.matrix,H.castShadow){const Q=i.get(H);Q.shadowIntensity=nt.intensity,Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,s.spotShadow[T]=Q,s.spotShadowMap[T]=ut,C++}T++}else if(H.isRectAreaLight){const F=t.get(H);F.color.copy(K).multiplyScalar(rt),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=F,S++}else if(H.isPointLight){const F=t.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const nt=H.shadow,Q=i.get(H);Q.shadowIntensity=nt.intensity,Q.shadowBias=nt.bias,Q.shadowNormalBias=nt.normalBias,Q.shadowRadius=nt.radius,Q.shadowMapSize=nt.mapSize,Q.shadowCameraNear=nt.camera.near,Q.shadowCameraFar=nt.camera.far,s.pointShadow[b]=Q,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=H.shadow.matrix,L++}s.point[b]=F,b++}else if(H.isHemisphereLight){const F=t.get(H);F.skyColor.copy(H.color).multiplyScalar(rt),F.groundColor.copy(H.groundColor).multiplyScalar(rt),s.hemi[v]=F,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==y||V.pointLength!==b||V.spotLength!==T||V.rectAreaLength!==S||V.hemiLength!==v||V.numDirectionalShadows!==N||V.numPointShadows!==L||V.numSpotShadows!==C||V.numSpotMaps!==O||V.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=T,s.rectArea.length=S,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+O-z,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=B,V.directionalLength=y,V.pointLength=b,V.spotLength=T,V.rectAreaLength=S,V.hemiLength=v,V.numDirectionalShadows=N,V.numPointShadows=L,V.numSpotShadows=C,V.numSpotMaps=O,V.numLightProbes=B,s.version=jA++)}function m(p,_){let g=0,x=0,y=0,b=0,T=0;const S=_.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const L=p[v];if(L.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),g++}else if(L.isSpotLight){const C=s.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function _v(r){const t=new WA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function qA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new _v(r),t.set(l,[h])):c>=f.length?(h=new _v(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
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
}`;function KA(r,t,i){let s=new gp;const l=new ve,c=new ve,f=new cn,h=new pE({depthPacking:EM}),m=new mE,p={},_=i.maxTextureSize,g={[os]:fi,[fi]:os,[Ta]:Ta},x=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:YA,fragmentShader:ZA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Tn(b,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let v=this.type;this.render=function(z,B,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const R=r.getRenderTarget(),U=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(ss),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const rt=v!==Ea&&this.type===Ea,ct=v===Ea&&this.type!==Ea;for(let ut=0,F=z.length;ut<F;ut++){const nt=z[ut],Q=nt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const Mt=Q.getFrameExtents();if(l.multiply(Mt),c.copy(Q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Mt.x),l.x=c.x*Mt.x,Q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Mt.y),l.y=c.y*Mt.y,Q.mapSize.y=c.y)),Q.map===null||rt===!0||ct===!0){const X=this.type!==Ea?{minFilter:ki,magFilter:ki}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Bs(l.x,l.y,X),Q.map.texture.name=nt.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const P=Q.getViewportCount();for(let X=0;X<P;X++){const dt=Q.getViewport(X);f.set(c.x*dt.x,c.y*dt.y,c.x*dt.z,c.y*dt.w),K.viewport(f),Q.updateMatrices(nt,X),s=Q.getFrustum(),C(B,V,Q.camera,nt,this.type)}Q.isPointLightShadow!==!0&&this.type===Ea&&N(Q,V),Q.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(R,U,H)};function N(z,B){const V=t.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Bs(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(B,null,V,x,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(B,null,V,y,T,null)}function L(z,B,V,R){let U=null;const H=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)U=H;else if(U=V.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const K=U.uuid,rt=B.uuid;let ct=p[K];ct===void 0&&(ct={},p[K]=ct);let ut=ct[rt];ut===void 0&&(ut=U.clone(),ct[rt]=ut,B.addEventListener("dispose",O)),U=ut}if(U.visible=B.visible,U.wireframe=B.wireframe,R===Ea?U.side=B.shadowSide!==null?B.shadowSide:B.side:U.side=B.shadowSide!==null?B.shadowSide:g[B.side],U.alphaMap=B.alphaMap,U.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,U.map=B.map,U.clipShadows=B.clipShadows,U.clippingPlanes=B.clippingPlanes,U.clipIntersection=B.clipIntersection,U.displacementMap=B.displacementMap,U.displacementScale=B.displacementScale,U.displacementBias=B.displacementBias,U.wireframeLinewidth=B.wireframeLinewidth,U.linewidth=B.linewidth,V.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const K=r.properties.get(U);K.light=V}return U}function C(z,B,V,R,U){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&U===Ea)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const rt=t.update(z),ct=z.material;if(Array.isArray(ct)){const ut=rt.groups;for(let F=0,nt=ut.length;F<nt;F++){const Q=ut[F],Mt=ct[Q.materialIndex];if(Mt&&Mt.visible){const P=L(z,Mt,R,U);z.onBeforeShadow(r,z,B,V,rt,P,Q),r.renderBufferDirect(V,null,rt,P,z,Q),z.onAfterShadow(r,z,B,V,rt,P,Q)}}}else if(ct.visible){const ut=L(z,ct,R,U);z.onBeforeShadow(r,z,B,V,rt,ut,null),r.renderBufferDirect(V,null,rt,ut,z,null),z.onAfterShadow(r,z,B,V,rt,ut,null)}}const K=z.children;for(let rt=0,ct=K.length;rt<ct;rt++)C(K[rt],B,V,R,U)}function O(z){z.target.removeEventListener("dispose",O);for(const V in p){const R=p[V],U=z.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}const QA={[md]:gd,[_d]:yd,[vd]:Sd,[jr]:xd,[gd]:md,[yd]:_d,[Sd]:vd,[xd]:jr};function JA(r,t){function i(){let Z=!1;const Rt=new cn;let Lt=null;const Wt=new cn(0,0,0,0);return{setMask:function(wt){Lt!==wt&&!Z&&(r.colorMask(wt,wt,wt,wt),Lt=wt)},setLocked:function(wt){Z=wt},setClear:function(wt,xt,Kt,ue,Pe){Pe===!0&&(wt*=ue,xt*=ue,Kt*=ue),Rt.set(wt,xt,Kt,ue),Wt.equals(Rt)===!1&&(r.clearColor(wt,xt,Kt,ue),Wt.copy(Rt))},reset:function(){Z=!1,Lt=null,Wt.set(-1,0,0,0)}}}function s(){let Z=!1,Rt=!1,Lt=null,Wt=null,wt=null;return{setReversed:function(xt){if(Rt!==xt){const Kt=t.get("EXT_clip_control");xt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Rt=xt;const ue=wt;wt=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(xt){xt?yt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(xt){Lt!==xt&&!Z&&(r.depthMask(xt),Lt=xt)},setFunc:function(xt){if(Rt&&(xt=QA[xt]),Wt!==xt){switch(xt){case md:r.depthFunc(r.NEVER);break;case gd:r.depthFunc(r.ALWAYS);break;case _d:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case vd:r.depthFunc(r.EQUAL);break;case xd:r.depthFunc(r.GEQUAL);break;case yd:r.depthFunc(r.GREATER);break;case Sd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Wt=xt}},setLocked:function(xt){Z=xt},setClear:function(xt){wt!==xt&&(Rt&&(xt=1-xt),r.clearDepth(xt),wt=xt)},reset:function(){Z=!1,Lt=null,Wt=null,wt=null,Rt=!1}}}function l(){let Z=!1,Rt=null,Lt=null,Wt=null,wt=null,xt=null,Kt=null,ue=null,Pe=null;return{setTest:function(Me){Z||(Me?yt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!Z&&(r.stencilMask(Me),Rt=Me)},setFunc:function(Me,at,Ht){(Lt!==Me||Wt!==at||wt!==Ht)&&(r.stencilFunc(Me,at,Ht),Lt=Me,Wt=at,wt=Ht)},setOp:function(Me,at,Ht){(xt!==Me||Kt!==at||ue!==Ht)&&(r.stencilOp(Me,at,Ht),xt=Me,Kt=at,ue=Ht)},setLocked:function(Me){Z=Me},setClear:function(Me){Pe!==Me&&(r.clearStencil(Me),Pe=Me)},reset:function(){Z=!1,Rt=null,Lt=null,Wt=null,wt=null,xt=null,Kt=null,ue=null,Pe=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],b=null,T=!1,S=null,v=null,N=null,L=null,C=null,O=null,z=null,B=new Oe(0,0,0),V=0,R=!1,U=null,H=null,K=null,rt=null,ct=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,nt=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),F=nt>=1):Q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),F=nt>=2);let Mt=null,P={};const X=r.getParameter(r.SCISSOR_BOX),dt=r.getParameter(r.VIEWPORT),mt=new cn().fromArray(X),Ot=new cn().fromArray(dt);function qt(Z,Rt,Lt,Wt){const wt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(Z,xt),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<Lt;Kt++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Wt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Rt+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return xt}const it={};it[r.TEXTURE_2D]=qt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(r.DEPTH_TEST),f.setFunc(jr),le(!1),Ft(f0),yt(r.CULL_FACE),ze(ss);function yt(Z){_[Z]!==!0&&(r.enable(Z),_[Z]=!0)}function Dt(Z){_[Z]!==!1&&(r.disable(Z),_[Z]=!1)}function se(Z,Rt){return g[Z]!==Rt?(r.bindFramebuffer(Z,Rt),g[Z]=Rt,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Rt),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Xt(Z,Rt){let Lt=y,Wt=!1;if(Z){Lt=x.get(Rt),Lt===void 0&&(Lt=[],x.set(Rt,Lt));const wt=Z.textures;if(Lt.length!==wt.length||Lt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Kt=wt.length;xt<Kt;xt++)Lt[xt]=r.COLOR_ATTACHMENT0+xt;Lt.length=wt.length,Wt=!0}}else Lt[0]!==r.BACK&&(Lt[0]=r.BACK,Wt=!0);Wt&&r.drawBuffers(Lt)}function oe(Z){return b!==Z?(r.useProgram(Z),b=Z,!0):!1}const Qe={[Ls]:r.FUNC_ADD,[ZS]:r.FUNC_SUBTRACT,[KS]:r.FUNC_REVERSE_SUBTRACT};Qe[QS]=r.MIN,Qe[JS]=r.MAX;const k={[$S]:r.ZERO,[tM]:r.ONE,[eM]:r.SRC_COLOR,[dd]:r.SRC_ALPHA,[oM]:r.SRC_ALPHA_SATURATE,[sM]:r.DST_COLOR,[iM]:r.DST_ALPHA,[nM]:r.ONE_MINUS_SRC_COLOR,[pd]:r.ONE_MINUS_SRC_ALPHA,[rM]:r.ONE_MINUS_DST_COLOR,[aM]:r.ONE_MINUS_DST_ALPHA,[lM]:r.CONSTANT_COLOR,[cM]:r.ONE_MINUS_CONSTANT_COLOR,[uM]:r.CONSTANT_ALPHA,[fM]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(Z,Rt,Lt,Wt,wt,xt,Kt,ue,Pe,Me){if(Z===ss){T===!0&&(Dt(r.BLEND),T=!1);return}if(T===!1&&(yt(r.BLEND),T=!0),Z!==YS){if(Z!==S||Me!==R){if((v!==Ls||C!==Ls)&&(r.blendEquation(r.FUNC_ADD),v=Ls,C=Ls),Me)switch(Z){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h0:r.blendFunc(r.ONE,r.ONE);break;case d0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case p0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case h0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case d0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}N=null,L=null,O=null,z=null,B.set(0,0,0),V=0,S=Z,R=Me}return}wt=wt||Rt,xt=xt||Lt,Kt=Kt||Wt,(Rt!==v||wt!==C)&&(r.blendEquationSeparate(Qe[Rt],Qe[wt]),v=Rt,C=wt),(Lt!==N||Wt!==L||xt!==O||Kt!==z)&&(r.blendFuncSeparate(k[Lt],k[Wt],k[xt],k[Kt]),N=Lt,L=Wt,O=xt,z=Kt),(ue.equals(B)===!1||Pe!==V)&&(r.blendColor(ue.r,ue.g,ue.b,Pe),B.copy(ue),V=Pe),S=Z,R=!1}function de(Z,Rt){Z.side===Ta?Dt(r.CULL_FACE):yt(r.CULL_FACE);let Lt=Z.side===fi;Rt&&(Lt=!Lt),le(Lt),Z.blending===Gr&&Z.transparent===!1?ze(ss):ze(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Wt=Z.stencilWrite;h.setTest(Wt),Wt&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Gt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(Z){U!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),U=Z)}function Ft(Z){Z!==XS?(yt(r.CULL_FACE),Z!==H&&(Z===f0?r.cullFace(r.BACK):Z===WS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),H=Z}function He(Z){Z!==K&&(F&&r.lineWidth(Z),K=Z)}function Gt(Z,Rt,Lt){Z?(yt(r.POLYGON_OFFSET_FILL),(rt!==Rt||ct!==Lt)&&(r.polygonOffset(Rt,Lt),rt=Rt,ct=Lt)):Dt(r.POLYGON_OFFSET_FILL)}function ge(Z){Z?yt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function en(Z){Z===void 0&&(Z=r.TEXTURE0+ut-1),Mt!==Z&&(r.activeTexture(Z),Mt=Z)}function nn(Z,Rt,Lt){Lt===void 0&&(Mt===null?Lt=r.TEXTURE0+ut-1:Lt=Mt);let Wt=P[Lt];Wt===void 0&&(Wt={type:void 0,texture:void 0},P[Lt]=Wt),(Wt.type!==Z||Wt.texture!==Rt)&&(Mt!==Lt&&(r.activeTexture(Lt),Mt=Lt),r.bindTexture(Z,Rt||it[Z]),Wt.type=Z,Wt.texture=Rt)}function I(){const Z=P[Mt];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function gt(){try{r.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ht(){try{r.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function At(){try{r.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $t(){try{r.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Yt(){try{r.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function bt(){try{r.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Bt(Z){mt.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),mt.copy(Z))}function ne(Z){Ot.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ot.copy(Z))}function Qt(Z,Rt){let Lt=p.get(Rt);Lt===void 0&&(Lt=new WeakMap,p.set(Rt,Lt));let Wt=Lt.get(Z);Wt===void 0&&(Wt=r.getUniformBlockIndex(Rt,Z.name),Lt.set(Z,Wt))}function Nt(Z,Rt){const Wt=p.get(Rt).get(Z);m.get(Rt)!==Wt&&(r.uniformBlockBinding(Rt,Wt,Z.__bindingPointIndex),m.set(Rt,Wt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Mt=null,P={},g={},x=new WeakMap,y=[],b=null,T=!1,S=null,v=null,N=null,L=null,C=null,O=null,z=null,B=new Oe(0,0,0),V=0,R=!1,U=null,H=null,K=null,rt=null,ct=null,mt.set(0,0,r.canvas.width,r.canvas.height),Ot.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Dt,bindFramebuffer:se,drawBuffers:Xt,useProgram:oe,setBlending:ze,setMaterial:de,setFlipSided:le,setCullFace:Ft,setLineWidth:He,setPolygonOffset:Gt,setScissorTest:ge,activeTexture:en,bindTexture:nn,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:$,texImage2D:Yt,texImage3D:bt,updateUBOMapping:Qt,uniformBlockBinding:Nt,texStorage2D:At,texStorage3D:$t,texSubImage2D:gt,texSubImage3D:ht,compressedTexSubImage2D:pt,compressedTexSubImage3D:kt,scissor:Bt,viewport:ne,reset:ce}}function $A(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,A){return y?new OffscreenCanvas(I,A):lu("canvas")}function T(I,A,$){let gt=1;const ht=nn(I);if((ht.width>$||ht.height>$)&&(gt=$/Math.max(ht.width,ht.height)),gt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(gt*ht.width),kt=Math.floor(gt*ht.height);g===void 0&&(g=b(pt,kt));const At=A?b(pt,kt):g;return At.width=pt,At.height=kt,At.getContext("2d").drawImage(I,0,0,pt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+pt+"x"+kt+")."),At}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function S(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,A,$,gt,ht=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt=A;if(A===r.RED&&($===r.FLOAT&&(pt=r.R32F),$===r.HALF_FLOAT&&(pt=r.R16F),$===r.UNSIGNED_BYTE&&(pt=r.R8)),A===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(pt=r.R8UI),$===r.UNSIGNED_SHORT&&(pt=r.R16UI),$===r.UNSIGNED_INT&&(pt=r.R32UI),$===r.BYTE&&(pt=r.R8I),$===r.SHORT&&(pt=r.R16I),$===r.INT&&(pt=r.R32I)),A===r.RG&&($===r.FLOAT&&(pt=r.RG32F),$===r.HALF_FLOAT&&(pt=r.RG16F),$===r.UNSIGNED_BYTE&&(pt=r.RG8)),A===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(pt=r.RG8UI),$===r.UNSIGNED_SHORT&&(pt=r.RG16UI),$===r.UNSIGNED_INT&&(pt=r.RG32UI),$===r.BYTE&&(pt=r.RG8I),$===r.SHORT&&(pt=r.RG16I),$===r.INT&&(pt=r.RG32I)),A===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(pt=r.RGB8UI),$===r.UNSIGNED_SHORT&&(pt=r.RGB16UI),$===r.UNSIGNED_INT&&(pt=r.RGB32UI),$===r.BYTE&&(pt=r.RGB8I),$===r.SHORT&&(pt=r.RGB16I),$===r.INT&&(pt=r.RGB32I)),A===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(pt=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(pt=r.RGBA16UI),$===r.UNSIGNED_INT&&(pt=r.RGBA32UI),$===r.BYTE&&(pt=r.RGBA8I),$===r.SHORT&&(pt=r.RGBA16I),$===r.INT&&(pt=r.RGBA32I)),A===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(pt=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(pt=r.R11F_G11F_B10F)),A===r.RGBA){const kt=ht?ru:Ve.getTransfer(gt);$===r.FLOAT&&(pt=r.RGBA32F),$===r.HALF_FLOAT&&(pt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(pt=kt===on?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function C(I,A){let $;return I?A===null||A===zs||A===al?$=r.DEPTH24_STENCIL8:A===Aa?$=r.DEPTH32F_STENCIL8:A===il&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zs||A===al?$=r.DEPTH_COMPONENT24:A===Aa?$=r.DEPTH_COMPONENT32F:A===il&&($=r.DEPTH_COMPONENT16),$}function O(I,A){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==ki&&I.minFilter!==Ji?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function z(I){const A=I.target;A.removeEventListener("dispose",z),V(A),A.isVideoTexture&&_.delete(A)}function B(I){const A=I.target;A.removeEventListener("dispose",B),U(A)}function V(I){const A=s.get(I);if(A.__webglInit===void 0)return;const $=I.source,gt=x.get($);if(gt){const ht=gt[A.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&R(I),Object.keys(gt).length===0&&x.delete($)}s.remove(I)}function R(I){const A=s.get(I);r.deleteTexture(A.__webglTexture);const $=I.source,gt=x.get($);delete gt[A.__cacheKey],f.memory.textures--}function U(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let ht=0;ht<A.__webglFramebuffer[gt].length;ht++)r.deleteFramebuffer(A.__webglFramebuffer[gt][ht]);else r.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)r.deleteFramebuffer(A.__webglFramebuffer[gt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=I.textures;for(let gt=0,ht=$.length;gt<ht;gt++){const pt=s.get($[gt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),f.memory.textures--),s.remove($[gt])}s.remove(I)}let H=0;function K(){H=0}function rt(){const I=H;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function ct(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ut(I,A){const $=s.get(I);if(I.isVideoTexture&&ge(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const gt=I.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,I,A);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+A)}function F(I,A){const $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){it($,I,A);return}i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+A)}function nt(I,A){const $=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){it($,I,A);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+A)}function Q(I,A){const $=s.get(I);if(I.version>0&&$.__version!==I.version){yt($,I,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+A)}const Mt={[bd]:r.REPEAT,[Os]:r.CLAMP_TO_EDGE,[Td]:r.MIRRORED_REPEAT},P={[ki]:r.NEAREST,[SM]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[Ji]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},X={[TM]:r.NEVER,[UM]:r.ALWAYS,[AM]:r.LESS,[Gv]:r.LEQUAL,[wM]:r.EQUAL,[DM]:r.GEQUAL,[RM]:r.GREATER,[CM]:r.NOTEQUAL};function dt(I,A){if(A.type===Aa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ji||A.magFilter===bh||A.magFilter===Sc||A.magFilter===Ps||A.minFilter===Ji||A.minFilter===bh||A.minFilter===Sc||A.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Mt[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Mt[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Mt[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,P[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,P[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,X[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ki||A.minFilter!==Sc&&A.minFilter!==Ps||A.type===Aa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function mt(I,A){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",z));const gt=A.source;let ht=x.get(gt);ht===void 0&&(ht={},x.set(gt,ht));const pt=ct(A);if(pt!==I.__cacheKey){ht[pt]===void 0&&(ht[pt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),ht[pt].usedTimes++;const kt=ht[I.__cacheKey];kt!==void 0&&(ht[I.__cacheKey].usedTimes--,kt.usedTimes===0&&R(A)),I.__cacheKey=pt,I.__webglTexture=ht[pt].texture}return $}function Ot(I,A,$){return Math.floor(Math.floor(I/$)/A)}function qt(I,A,$,gt){const pt=I.updateRanges;if(pt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,$,gt,A.data);else{pt.sort((bt,Bt)=>bt.start-Bt.start);let kt=0;for(let bt=1;bt<pt.length;bt++){const Bt=pt[kt],ne=pt[bt],Qt=Bt.start+Bt.count,Nt=Ot(ne.start,A.width,4),ce=Ot(Bt.start,A.width,4);ne.start<=Qt+1&&Nt===ce&&Ot(ne.start+ne.count-1,A.width,4)===Nt?Bt.count=Math.max(Bt.count,ne.start+ne.count-Bt.start):(++kt,pt[kt]=ne)}pt.length=kt+1;const At=r.getParameter(r.UNPACK_ROW_LENGTH),$t=r.getParameter(r.UNPACK_SKIP_PIXELS),Yt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let bt=0,Bt=pt.length;bt<Bt;bt++){const ne=pt[bt],Qt=Math.floor(ne.start/4),Nt=Math.ceil(ne.count/4),ce=Qt%A.width,Z=Math.floor(Qt/A.width),Rt=Nt,Lt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,ce,Z,Rt,Lt,$,gt,A.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,At),r.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),r.pixelStorei(r.UNPACK_SKIP_ROWS,Yt)}}function it(I,A,$){let gt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=r.TEXTURE_3D);const ht=mt(I,A),pt=A.source;i.bindTexture(gt,I.__webglTexture,r.TEXTURE0+$);const kt=s.get(pt);if(pt.version!==kt.__version||ht===!0){i.activeTexture(r.TEXTURE0+$);const At=Ve.getPrimaries(Ve.workingColorSpace),$t=A.colorSpace===is?null:Ve.getPrimaries(A.colorSpace),Yt=A.colorSpace===is||At===$t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let bt=T(A.image,!1,l.maxTextureSize);bt=en(A,bt);const Bt=c.convert(A.format,A.colorSpace),ne=c.convert(A.type);let Qt=L(A.internalFormat,Bt,ne,A.colorSpace,A.isVideoTexture);dt(gt,A);let Nt;const ce=A.mipmaps,Z=A.isVideoTexture!==!0,Rt=kt.__version===void 0||ht===!0,Lt=pt.dataReady,Wt=O(A,bt);if(A.isDepthTexture)Qt=C(A.format===rl,A.type),Rt&&(Z?i.texStorage2D(r.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Bt,ne,null));else if(A.isDataTexture)if(ce.length>0){Z&&Rt&&i.texStorage2D(r.TEXTURE_2D,Wt,Qt,ce[0].width,ce[0].height);for(let wt=0,xt=ce.length;wt<xt;wt++)Nt=ce[wt],Z?Lt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Nt.width,Nt.height,Bt,ne,Nt.data):i.texImage2D(r.TEXTURE_2D,wt,Qt,Nt.width,Nt.height,0,Bt,ne,Nt.data);A.generateMipmaps=!1}else Z?(Rt&&i.texStorage2D(r.TEXTURE_2D,Wt,Qt,bt.width,bt.height),Lt&&qt(A,bt,Bt,ne)):i.texImage2D(r.TEXTURE_2D,0,Qt,bt.width,bt.height,0,Bt,ne,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Z&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,Qt,ce[0].width,ce[0].height,bt.depth);for(let wt=0,xt=ce.length;wt<xt;wt++)if(Nt=ce[wt],A.format!==Gi)if(Bt!==null)if(Z){if(Lt)if(A.layerUpdates.size>0){const Kt=q0(Nt.width,Nt.height,A.format,A.type);for(const ue of A.layerUpdates){const Pe=Nt.data.subarray(ue*Kt/Nt.data.BYTES_PER_ELEMENT,(ue+1)*Kt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,ue,Nt.width,Nt.height,1,Bt,Pe)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,Nt.width,Nt.height,bt.depth,Bt,Nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,wt,Qt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Lt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,Nt.width,Nt.height,bt.depth,Bt,ne,Nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,wt,Qt,Nt.width,Nt.height,bt.depth,0,Bt,ne,Nt.data)}else{Z&&Rt&&i.texStorage2D(r.TEXTURE_2D,Wt,Qt,ce[0].width,ce[0].height);for(let wt=0,xt=ce.length;wt<xt;wt++)Nt=ce[wt],A.format!==Gi?Bt!==null?Z?Lt&&i.compressedTexSubImage2D(r.TEXTURE_2D,wt,0,0,Nt.width,Nt.height,Bt,Nt.data):i.compressedTexImage2D(r.TEXTURE_2D,wt,Qt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Lt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Nt.width,Nt.height,Bt,ne,Nt.data):i.texImage2D(r.TEXTURE_2D,wt,Qt,Nt.width,Nt.height,0,Bt,ne,Nt.data)}else if(A.isDataArrayTexture)if(Z){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,Qt,bt.width,bt.height,bt.depth),Lt)if(A.layerUpdates.size>0){const wt=q0(bt.width,bt.height,A.format,A.type);for(const xt of A.layerUpdates){const Kt=bt.data.subarray(xt*wt/bt.data.BYTES_PER_ELEMENT,(xt+1)*wt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Bt,ne,Kt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,ne,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,Bt,ne,bt.data);else if(A.isData3DTexture)Z?(Rt&&i.texStorage3D(r.TEXTURE_3D,Wt,Qt,bt.width,bt.height,bt.depth),Lt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,ne,bt.data)):i.texImage3D(r.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,Bt,ne,bt.data);else if(A.isFramebufferTexture){if(Rt)if(Z)i.texStorage2D(r.TEXTURE_2D,Wt,Qt,bt.width,bt.height);else{let wt=bt.width,xt=bt.height;for(let Kt=0;Kt<Wt;Kt++)i.texImage2D(r.TEXTURE_2D,Kt,Qt,wt,xt,0,Bt,ne,null),wt>>=1,xt>>=1}}else if(ce.length>0){if(Z&&Rt){const wt=nn(ce[0]);i.texStorage2D(r.TEXTURE_2D,Wt,Qt,wt.width,wt.height)}for(let wt=0,xt=ce.length;wt<xt;wt++)Nt=ce[wt],Z?Lt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Bt,ne,Nt):i.texImage2D(r.TEXTURE_2D,wt,Qt,Bt,ne,Nt);A.generateMipmaps=!1}else if(Z){if(Rt){const wt=nn(bt);i.texStorage2D(r.TEXTURE_2D,Wt,Qt,wt.width,wt.height)}Lt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,ne,bt)}else i.texImage2D(r.TEXTURE_2D,0,Qt,Bt,ne,bt);S(A)&&v(gt),kt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function yt(I,A,$){if(A.image.length!==6)return;const gt=mt(I,A),ht=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+$);const pt=s.get(ht);if(ht.version!==pt.__version||gt===!0){i.activeTexture(r.TEXTURE0+$);const kt=Ve.getPrimaries(Ve.workingColorSpace),At=A.colorSpace===is?null:Ve.getPrimaries(A.colorSpace),$t=A.colorSpace===is||kt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const Yt=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Bt=[];for(let xt=0;xt<6;xt++)!Yt&&!bt?Bt[xt]=T(A.image[xt],!0,l.maxCubemapSize):Bt[xt]=bt?A.image[xt].image:A.image[xt],Bt[xt]=en(A,Bt[xt]);const ne=Bt[0],Qt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),ce=L(A.internalFormat,Qt,Nt,A.colorSpace),Z=A.isVideoTexture!==!0,Rt=pt.__version===void 0||gt===!0,Lt=ht.dataReady;let Wt=O(A,ne);dt(r.TEXTURE_CUBE_MAP,A);let wt;if(Yt){Z&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Wt,ce,ne.width,ne.height);for(let xt=0;xt<6;xt++){wt=Bt[xt].mipmaps;for(let Kt=0;Kt<wt.length;Kt++){const ue=wt[Kt];A.format!==Gi?Qt!==null?Z?Lt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt,0,0,ue.width,ue.height,Qt,ue.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt,0,0,ue.width,ue.height,Qt,Nt,ue.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt,ce,ue.width,ue.height,0,Qt,Nt,ue.data)}}}else{if(wt=A.mipmaps,Z&&Rt){wt.length>0&&Wt++;const xt=nn(Bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Wt,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){Z?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt[xt].width,Bt[xt].height,Qt,Nt,Bt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Bt[xt].width,Bt[xt].height,0,Qt,Nt,Bt[xt].data);for(let Kt=0;Kt<wt.length;Kt++){const Pe=wt[Kt].image[xt].image;Z?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt+1,0,0,Pe.width,Pe.height,Qt,Nt,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt+1,ce,Pe.width,Pe.height,0,Qt,Nt,Pe.data)}}else{Z?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Qt,Nt,Bt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,Qt,Nt,Bt[xt]);for(let Kt=0;Kt<wt.length;Kt++){const ue=wt[Kt];Z?Lt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt+1,0,0,Qt,Nt,ue.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Kt+1,ce,Qt,Nt,ue.image[xt])}}}S(A)&&v(r.TEXTURE_CUBE_MAP),pt.__version=ht.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Dt(I,A,$,gt,ht,pt){const kt=c.convert($.format,$.colorSpace),At=c.convert($.type),$t=L($.internalFormat,kt,At,$.colorSpace),Yt=s.get(A),bt=s.get($);if(bt.__renderTarget=A,!Yt.__hasExternalTextures){const Bt=Math.max(1,A.width>>pt),ne=Math.max(1,A.height>>pt);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?i.texImage3D(ht,pt,$t,Bt,ne,A.depth,0,kt,At,null):i.texImage2D(ht,pt,$t,Bt,ne,0,kt,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),Gt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,ht,bt.__webglTexture,0,He(A)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,ht,bt.__webglTexture,pt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function se(I,A,$){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const gt=A.depthTexture,ht=gt&&gt.isDepthTexture?gt.type:null,pt=C(A.stencilBuffer,ht),kt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=He(A);Gt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,pt,A.width,A.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,pt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,pt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,kt,r.RENDERBUFFER,I)}else{const gt=A.textures;for(let ht=0;ht<gt.length;ht++){const pt=gt[ht],kt=c.convert(pt.format,pt.colorSpace),At=c.convert(pt.type),$t=L(pt.internalFormat,kt,At,pt.colorSpace),Yt=He(A);$&&Gt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,$t,A.width,A.height):Gt(A)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,$t,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,$t,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ut(A.depthTexture,0);const ht=gt.__webglTexture,pt=He(A);if(A.depthTexture.format===sl)Gt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(A.depthTexture.format===rl)Gt(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function oe(I){const A=s.get(I),$=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const gt=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const ht=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",ht)};gt.addEventListener("dispose",ht),A.__depthDisposeCallback=ht}A.__boundDepthTexture=gt}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const gt=I.texture.mipmaps;gt&&gt.length>0?Xt(A.__webglFramebuffer[0],I):Xt(A.__webglFramebuffer,I)}else if($){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=r.createRenderbuffer(),se(A.__webglDepthbuffer[gt],I,!1);else{const ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,pt)}}else{const gt=I.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),se(A.__webglDepthbuffer,I,!1);else{const ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,pt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(I,A,$){const gt=s.get(I);A!==void 0&&Dt(gt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&oe(I)}function k(I){const A=I.texture,$=s.get(I),gt=s.get(A);I.addEventListener("dispose",B);const ht=I.textures,pt=I.isWebGLCubeRenderTarget===!0,kt=ht.length>1;if(kt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=A.version,f.memory.textures++),pt){$.__webglFramebuffer=[];for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[At]=[];for(let $t=0;$t<A.mipmaps.length;$t++)$.__webglFramebuffer[At][$t]=r.createFramebuffer()}else $.__webglFramebuffer[At]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)$.__webglFramebuffer[At]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(kt)for(let At=0,$t=ht.length;At<$t;At++){const Yt=s.get(ht[At]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&Gt(I)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<ht.length;At++){const $t=ht[At];$.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[At]);const Yt=c.convert($t.format,$t.colorSpace),bt=c.convert($t.type),Bt=L($t.internalFormat,Yt,bt,$t.colorSpace,I.isXRRenderTarget===!0),ne=He(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,Bt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,$.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),se($.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),dt(r.TEXTURE_CUBE_MAP,A);for(let At=0;At<6;At++)if(A.mipmaps&&A.mipmaps.length>0)for(let $t=0;$t<A.mipmaps.length;$t++)Dt($.__webglFramebuffer[At][$t],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t);else Dt($.__webglFramebuffer[At],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(A)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let At=0,$t=ht.length;At<$t;At++){const Yt=ht[At],bt=s.get(Yt);let Bt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Bt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Bt,bt.__webglTexture),dt(Bt,Yt),Dt($.__webglFramebuffer,I,Yt,r.COLOR_ATTACHMENT0+At,Bt,0),S(Yt)&&v(Bt)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(At=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,gt.__webglTexture),dt(At,A),A.mipmaps&&A.mipmaps.length>0)for(let $t=0;$t<A.mipmaps.length;$t++)Dt($.__webglFramebuffer[$t],I,A,r.COLOR_ATTACHMENT0,At,$t);else Dt($.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,At,0);S(A)&&v(At),i.unbindTexture()}I.depthBuffer&&oe(I)}function ze(I){const A=I.textures;for(let $=0,gt=A.length;$<gt;$++){const ht=A[$];if(S(ht)){const pt=N(I),kt=s.get(ht).__webglTexture;i.bindTexture(pt,kt),v(pt),i.unbindTexture()}}}const de=[],le=[];function Ft(I){if(I.samples>0){if(Gt(I)===!1){const A=I.textures,$=I.width,gt=I.height;let ht=r.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,kt=s.get(I),At=A.length>1;if(At)for(let Yt=0;Yt<A.length;Yt++)i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const $t=I.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Yt=0;Yt<A.length;Yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,kt.__webglColorRenderbuffer[Yt]);const bt=s.get(A[Yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,$,gt,0,0,$,gt,ht,r.NEAREST),m===!0&&(de.length=0,le.length=0,de.push(r.COLOR_ATTACHMENT0+Yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(de.push(pt),le.push(pt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let Yt=0;Yt<A.length;Yt++){i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,kt.__webglColorRenderbuffer[Yt]);const bt=s.get(A[Yt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,kt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function He(I){return Math.min(l.maxSamples,I.samples)}function Gt(I){const A=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ge(I){const A=f.render.frame;_.get(I)!==A&&(_.set(I,A),I.update())}function en(I,A){const $=I.colorSpace,gt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==qr&&$!==is&&(Ve.getTransfer($)===on?(gt!==Gi||ht!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function nn(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=K,this.setTexture2D=ut,this.setTexture2DArray=F,this.setTexture3D=nt,this.setTextureCube=Q,this.rebindTextures=Qe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Gt}function tw(r,t){function i(s,l=is){let c;const f=Ve.getTransfer(l);if(s===ta)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ov)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Pv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Lv)return r.BYTE;if(s===Nv)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===zs)return r.UNSIGNED_INT;if(s===Aa)return r.FLOAT;if(s===cl)return r.HALF_FLOAT;if(s===zv)return r.ALPHA;if(s===Iv)return r.RGB;if(s===Gi)return r.RGBA;if(s===sl)return r.DEPTH_COMPONENT;if(s===rl)return r.DEPTH_STENCIL;if(s===Bv)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Fv)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===tu||s===eu||s===nu||s===iu)if(f===on)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ad||s===wd||s===Rd||s===Cd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dd||s===Ud||s===Ld)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Dd||s===Ud)return f===on?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ld)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Nd||s===Od||s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===kd||s===Vd||s===jd||s===Xd||s===Wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Nd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wd)return f===on?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qd||s===Yd||s===Zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===qd)return f===on?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kd||s===Qd||s===Jd||s===$d)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Kd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nw=`
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

}`;class iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new $v(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ls({vertexShader:ew,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tn(new pl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aw extends Hs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",S=new iw,v={},N=i.getContextAttributes();let L=null,C=null;const O=[],z=[],B=new ve;let V=null;const R=new Mi;R.viewport=new cn;const U=new Mi;U.viewport=new cn;const H=[R,U],K=new ME;let rt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let yt=O[it];return yt===void 0&&(yt=new Wh,O[it]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(it){let yt=O[it];return yt===void 0&&(yt=new Wh,O[it]=yt),yt.getGripSpace()},this.getHand=function(it){let yt=O[it];return yt===void 0&&(yt=new Wh,O[it]=yt),yt.getHandSpace()};function ut(it){const yt=z.indexOf(it.inputSource);if(yt===-1)return;const Dt=O[yt];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||f),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",nt);for(let it=0;it<O.length;it++){const yt=z[it];yt!==null&&(z[it]=null,O[it].disconnect(yt))}rt=null,ct=null,S.reset();for(const it in v)delete v[it];t.setRenderTarget(L),y=null,x=null,g=null,l=null,C=null,qt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",F),l.addEventListener("inputsourceschange",nt),N.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,se=null,Xt=null;N.depth&&(Xt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=N.stencil?rl:sl,se=N.stencil?al:zs);const oe={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),C=new Bs(x.textureWidth,x.textureHeight,{format:Gi,type:ta,depthTexture:new Jv(x.textureWidth,x.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Bs(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:ta,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),qt.setContext(l),qt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function nt(it){for(let yt=0;yt<it.removed.length;yt++){const Dt=it.removed[yt],se=z.indexOf(Dt);se>=0&&(z[se]=null,O[se].disconnect(Dt))}for(let yt=0;yt<it.added.length;yt++){const Dt=it.added[yt];let se=z.indexOf(Dt);if(se===-1){for(let oe=0;oe<O.length;oe++)if(oe>=z.length){z.push(Dt),se=oe;break}else if(z[oe]===null){z[oe]=Dt,se=oe;break}if(se===-1)break}const Xt=O[se];Xt&&Xt.connect(Dt)}}const Q=new q,Mt=new q;function P(it,yt,Dt){Q.setFromMatrixPosition(yt.matrixWorld),Mt.setFromMatrixPosition(Dt.matrixWorld);const se=Q.distanceTo(Mt),Xt=yt.projectionMatrix.elements,oe=Dt.projectionMatrix.elements,Qe=Xt[14]/(Xt[10]-1),k=Xt[14]/(Xt[10]+1),ze=(Xt[9]+1)/Xt[5],de=(Xt[9]-1)/Xt[5],le=(Xt[8]-1)/Xt[0],Ft=(oe[8]+1)/oe[0],He=Qe*le,Gt=Qe*Ft,ge=se/(-le+Ft),en=ge*-le;if(yt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(en),it.translateZ(ge),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Xt[10]===-1)it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const nn=Qe+ge,I=k+ge,A=He-en,$=Gt+(se-en),gt=ze*k/I*nn,ht=de*k/I*nn;it.projectionMatrix.makePerspective(A,$,gt,ht,nn,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function X(it,yt){yt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(yt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let yt=it.near,Dt=it.far;S.texture!==null&&(S.depthNear>0&&(yt=S.depthNear),S.depthFar>0&&(Dt=S.depthFar)),K.near=U.near=R.near=yt,K.far=U.far=R.far=Dt,(rt!==K.near||ct!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),rt=K.near,ct=K.far),K.layers.mask=it.layers.mask|6,R.layers.mask=K.layers.mask&3,U.layers.mask=K.layers.mask&5;const se=it.parent,Xt=K.cameras;X(K,se);for(let oe=0;oe<Xt.length;oe++)X(Xt[oe],se);Xt.length===2?P(K,R,U):K.projectionMatrix.copy(R.projectionMatrix),dt(it,K,se)};function dt(it,yt,Dt){Dt===null?it.matrix.copy(yt.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(yt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(yt.projectionMatrix),it.projectionMatrixInverse.copy(yt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=tp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(it){return v[it]};let mt=null;function Ot(it,yt){if(_=yt.getViewerPose(p||f),b=yt,_!==null){const Dt=_.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let se=!1;Dt.length!==K.cameras.length&&(K.cameras.length=0,se=!0);for(let k=0;k<Dt.length;k++){const ze=Dt[k];let de=null;if(y!==null)de=y.getViewport(ze);else{const Ft=g.getViewSubImage(x,ze);de=Ft.viewport,k===0&&(t.setRenderTargetTextures(C,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(C))}let le=H[k];le===void 0&&(le=new Mi,le.layers.enable(k),le.viewport=new cn,H[k]=le),le.matrix.fromArray(ze.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ze.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(de.x,de.y,de.width,de.height),k===0&&(K.matrix.copy(le.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),se===!0&&K.cameras.push(le)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const k=g.getDepthInformation(Dt[0]);k&&k.isValid&&k.texture&&S.init(k,l.renderState)}if(Xt&&Xt.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let k=0;k<Dt.length;k++){const ze=Dt[k].camera;if(ze){let de=v[ze];de||(de=new $v,v[ze]=de);const le=g.getCameraImage(ze);de.sourceTexture=le}}}}for(let Dt=0;Dt<O.length;Dt++){const se=z[Dt],Xt=O[Dt];se!==null&&Xt!==void 0&&Xt.update(se,yt,p||f)}mt&&mt(it,yt),yt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:yt}),b=null}const qt=new nx;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(it){mt=it},this.dispose=function(){}}}const Ds=new ea,sw=new mn;function rw(r,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,qv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,N,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),g(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,C)):v.isMeshMatcapMaterial?(c(S,v),b(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,N,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===fi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===fi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=t.get(v),L=N.envMap,C=N.envMapRotation;L&&(S.envMap.value=L,Ds.copy(C),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),S.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(Ds)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,N,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const N=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ow(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const C=L.program;s.uniformBlockBinding(N,C)}function p(N,L){let C=l[N.id];C===void 0&&(b(N),C=_(N),l[N.id]=C,N.addEventListener("dispose",S));const O=L.program;s.updateUBOMapping(N,O);const z=t.render.frame;c[N.id]!==z&&(x(N),c[N.id]=z)}function _(N){const L=g();N.__bindingPointIndex=L;const C=r.createBuffer(),O=N.__size,z=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,O,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function g(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],C=N.uniforms,O=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,B=C.length;z<B;z++){const V=Array.isArray(C[z])?C[z]:[C[z]];for(let R=0,U=V.length;R<U;R++){const H=V[R];if(y(H,z,R,O)===!0){const K=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let ut=0;ut<rt.length;ut++){const F=rt[ut],nt=T(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,K+ct,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ct),ct+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,L,C,O){const z=N.value,B=L+"_"+C;if(O[B]===void 0)return typeof z=="number"||typeof z=="boolean"?O[B]=z:O[B]=z.clone(),!0;{const V=O[B];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return O[B]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function b(N){const L=N.uniforms;let C=0;const O=16;for(let B=0,V=L.length;B<V;B++){const R=Array.isArray(L[B])?L[B]:[L[B]];for(let U=0,H=R.length;U<H;U++){const K=R[U],rt=Array.isArray(K.value)?K.value:[K.value];for(let ct=0,ut=rt.length;ct<ut;ct++){const F=rt[ct],nt=T(F),Q=C%O,Mt=Q%nt.boundary,P=Q+Mt;C+=Mt,P!==0&&O-P<nt.storage&&(C+=O-P),K.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=C,C+=nt.storage}}}const z=C%O;return z>0&&(C+=O-z),N.__size=C,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class lw{constructor(t={}){const{canvas:i=PM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const b=new Uint32Array(4),T=new Int32Array(4);let S=null,v=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let O=!1;this._outputColorSpace=Si;let z=0,B=0,V=null,R=-1,U=null;const H=new cn,K=new cn;let rt=null;const ct=new Oe(0);let ut=0,F=i.width,nt=i.height,Q=1,Mt=null,P=null;const X=new cn(0,0,F,nt),dt=new cn(0,0,F,nt);let mt=!1;const Ot=new gp;let qt=!1,it=!1;const yt=new mn,Dt=new q,se=new cn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Qe(){return V===null?Q:1}let k=s;function ze(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",Wt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),k===null){const W="webgl2";if(k=ze(W,w),k===null)throw ze(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let de,le,Ft,He,Gt,ge,en,nn,I,A,$,gt,ht,pt,kt,At,$t,Yt,bt,Bt,ne,Qt,Nt,ce;function Z(){de=new vT(k),de.init(),Qt=new tw(k,de),le=new fT(k,de,t,Qt),Ft=new JA(k,de),le.reversedDepthBuffer&&x&&Ft.buffers.depth.setReversed(!0),He=new ST(k),Gt=new FA,ge=new $A(k,de,Ft,Gt,le,Qt,He),en=new dT(C),nn=new _T(C),I=new wE(k),Nt=new cT(k,I),A=new xT(k,I,He,Nt),$=new ET(k,A,I,He),bt=new MT(k,le,ge),At=new hT(Gt),gt=new BA(C,en,nn,de,le,Nt,At),ht=new rw(C,Gt),pt=new GA,kt=new qA(de),Yt=new lT(C,en,nn,Ft,$,y,m),$t=new KA(C,$,le),ce=new ow(k,He,le,Ft),Bt=new uT(k,de,He),ne=new yT(k,de,He),He.programs=gt.programs,C.capabilities=le,C.extensions=de,C.properties=Gt,C.renderLists=pt,C.shadowMap=$t,C.state=Ft,C.info=He}Z();const Rt=new aw(C,k);this.xr=Rt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=de.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=de.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(F,nt,!1))},this.getSize=function(w){return w.set(F,nt)},this.setSize=function(w,W,ot=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,nt=W,i.width=Math.floor(w*Q),i.height=Math.floor(W*Q),ot===!0&&(i.style.width=w+"px",i.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(F*Q,nt*Q).floor()},this.setDrawingBufferSize=function(w,W,ot){F=w,nt=W,Q=ot,i.width=Math.floor(w*ot),i.height=Math.floor(W*ot),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,W,ot,tt){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,W,ot,tt),Ft.viewport(H.copy(X).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,W,ot,tt){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,W,ot,tt),Ft.scissor(K.copy(dt).multiplyScalar(Q).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){Ft.setScissorTest(mt=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ot=!0){let tt=0;if(w){let j=!1;if(V!==null){const _t=V.texture.format;j=_t===hp||_t===fp||_t===up}if(j){const _t=V.texture.type,Tt=_t===ta||_t===zs||_t===il||_t===al||_t===lp||_t===cp,It=Yt.getClearColor(),zt=Yt.getClearAlpha(),Jt=It.r,he=It.g,ie=It.b;Tt?(b[0]=Jt,b[1]=he,b[2]=ie,b[3]=zt,k.clearBufferuiv(k.COLOR,0,b)):(T[0]=Jt,T[1]=he,T[2]=ie,T[3]=zt,k.clearBufferiv(k.COLOR,0,T))}else tt|=k.COLOR_BUFFER_BIT}W&&(tt|=k.DEPTH_BUFFER_BIT),ot&&(tt|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",Wt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Yt.dispose(),pt.dispose(),kt.dispose(),Gt.dispose(),en.dispose(),nn.dispose(),$.dispose(),Nt.dispose(),ce.dispose(),gt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ht),Rt.removeEventListener("sessionend",Vt),ee.stop()};function Lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=He.autoReset,W=$t.enabled,ot=$t.autoUpdate,tt=$t.needsUpdate,j=$t.type;Z(),He.autoReset=w,$t.enabled=W,$t.autoUpdate=ot,$t.needsUpdate=tt,$t.type=j}function wt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const W=w.target;W.removeEventListener("dispose",xt),Kt(W)}function Kt(w){ue(w),Gt.remove(w)}function ue(w){const W=Gt.get(w).programs;W!==void 0&&(W.forEach(function(ot){gt.releaseProgram(ot)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ot,tt,j,_t){W===null&&(W=Xt);const Tt=j.isMesh&&j.matrixWorld.determinant()<0,It=Xe(w,W,ot,tt,j);Ft.setMaterial(tt,Tt);let zt=ot.index,Jt=1;if(tt.wireframe===!0){if(zt=A.getWireframeAttribute(ot),zt===void 0)return;Jt=2}const he=ot.drawRange,ie=ot.attributes.position;let ye=he.start*Jt,Se=(he.start+he.count)*Jt;_t!==null&&(ye=Math.max(ye,_t.start*Jt),Se=Math.min(Se,(_t.start+_t.count)*Jt)),zt!==null?(ye=Math.max(ye,0),Se=Math.min(Se,zt.count)):ie!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,ie.count));const Ke=Se-ye;if(Ke<0||Ke===1/0)return;Nt.setup(j,tt,It,ot,zt);let qe,xe=Bt;if(zt!==null&&(qe=I.get(zt),xe=ne,xe.setIndex(qe)),j.isMesh)tt.wireframe===!0?(Ft.setLineWidth(tt.wireframeLinewidth*Qe()),xe.setMode(k.LINES)):xe.setMode(k.TRIANGLES);else if(j.isLine){let fe=tt.linewidth;fe===void 0&&(fe=1),Ft.setLineWidth(fe*Qe()),j.isLineSegments?xe.setMode(k.LINES):j.isLineLoop?xe.setMode(k.LINE_LOOP):xe.setMode(k.LINE_STRIP)}else j.isPoints?xe.setMode(k.POINTS):j.isSprite&&xe.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ol("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))xe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const fe=j._multiDrawStarts,dn=j._multiDrawCounts,De=j._multiDrawCount,qn=zt?I.get(zt).bytesPerElement:1,Li=Gt.get(tt).currentProgram.getUniforms();for(let $n=0;$n<De;$n++)Li.setValue(k,"_gl_DrawID",$n),xe.render(fe[$n]/qn,dn[$n])}else if(j.isInstancedMesh)xe.renderInstances(ye,Ke,j.count);else if(ot.isInstancedBufferGeometry){const fe=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,dn=Math.min(ot.instanceCount,fe);xe.renderInstances(ye,Ke,dn)}else xe.render(ye,Ke)};function Pe(w,W,ot){w.transparent===!0&&w.side===Ta&&w.forceSinglePass===!1?(w.side=fi,w.needsUpdate=!0,Ee(w,W,ot),w.side=os,w.needsUpdate=!0,Ee(w,W,ot),w.side=Ta):Ee(w,W,ot)}this.compile=function(w,W,ot=null){ot===null&&(ot=w),v=kt.get(ot),v.init(W),L.push(v),ot.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),w!==ot&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const tt=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const _t=j.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const It=_t[Tt];Pe(It,ot,j),tt.add(It)}else Pe(_t,ot,j),tt.add(_t)}),v=L.pop(),tt},this.compileAsync=function(w,W,ot=null){const tt=this.compile(w,W,ot);return new Promise(j=>{function _t(){if(tt.forEach(function(Tt){Gt.get(Tt).currentProgram.isReady()&&tt.delete(Tt)}),tt.size===0){j(w);return}setTimeout(_t,10)}de.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Me=null;function at(w){Me&&Me(w)}function Ht(){ee.stop()}function Vt(){ee.start()}const ee=new nx;ee.setAnimationLoop(at),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(w){Me=w,Rt.setAnimationLoop(w),w===null?ee.stop():ee.start()},Rt.addEventListener("sessionstart",Ht),Rt.addEventListener("sessionend",Vt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(W),W=Rt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,W,V),v=kt.get(w,L.length),v.init(W),L.push(v),yt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ot.setFromProjectionMatrix(yt,$i,W.reversedDepth),it=this.localClippingEnabled,qt=At.init(this.clippingPlanes,it),S=pt.get(w,N.length),S.init(),N.push(S),Rt.enabled===!0&&Rt.isPresenting===!0){const _t=C.xr.getDepthSensingMesh();_t!==null&&Ce(_t,W,-1/0,C.sortObjects)}Ce(w,W,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(Mt,P),oe=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,oe&&Yt.addToRenderList(S,w),this.info.render.frame++,qt===!0&&At.beginShadows();const ot=v.state.shadowsArray;$t.render(ot,w,W),qt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=S.opaque,j=S.transmissive;if(v.setupLights(),W.isArrayCamera){const _t=W.cameras;if(j.length>0)for(let Tt=0,It=_t.length;Tt<It;Tt++){const zt=_t[Tt];Ct(tt,j,w,zt)}oe&&Yt.render(w);for(let Tt=0,It=_t.length;Tt<It;Tt++){const zt=_t[Tt];Ut(S,w,zt,zt.viewport)}}else j.length>0&&Ct(tt,j,w,W),oe&&Yt.render(w),Ut(S,w,W);V!==null&&B===0&&(ge.updateMultisampleRenderTarget(V),ge.updateRenderTargetMipmap(V)),w.isScene===!0&&w.onAfterRender(C,w,W),Nt.resetDefaultState(),R=-1,U=null,L.pop(),L.length>0?(v=L[L.length-1],qt===!0&&At.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Ce(w,W,ot,tt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ot.intersectsSprite(w)){tt&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);const Tt=$.update(w),It=w.material;It.visible&&S.push(w,Tt,It,ot,se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ot.intersectsObject(w))){const Tt=$.update(w),It=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),se.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),se.copy(Tt.boundingSphere.center)),se.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(It)){const zt=Tt.groups;for(let Jt=0,he=zt.length;Jt<he;Jt++){const ie=zt[Jt],ye=It[ie.materialIndex];ye&&ye.visible&&S.push(w,Tt,ye,ot,se.z,ie)}}else It.visible&&S.push(w,Tt,It,ot,se.z,null)}}const _t=w.children;for(let Tt=0,It=_t.length;Tt<It;Tt++)Ce(_t[Tt],W,ot,tt)}function Ut(w,W,ot,tt){const j=w.opaque,_t=w.transmissive,Tt=w.transparent;v.setupLightsView(ot),qt===!0&&At.setGlobalState(C.clippingPlanes,ot),tt&&Ft.viewport(H.copy(tt)),j.length>0&&Zt(j,W,ot),_t.length>0&&Zt(_t,W,ot),Tt.length>0&&Zt(Tt,W,ot),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Ct(w,W,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[tt.id]===void 0&&(v.state.transmissionRenderTarget[tt.id]=new Bs(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?cl:ta,minFilter:Ps,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const _t=v.state.transmissionRenderTarget[tt.id],Tt=tt.viewport||H;_t.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);const It=C.getRenderTarget(),zt=C.getActiveCubeFace(),Jt=C.getActiveMipmapLevel();C.setRenderTarget(_t),C.getClearColor(ct),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),oe&&Yt.render(ot);const he=C.toneMapping;C.toneMapping=rs;const ie=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),v.setupLightsView(tt),qt===!0&&At.setGlobalState(C.clippingPlanes,tt),Zt(w,ot,tt),ge.updateMultisampleRenderTarget(_t),ge.updateRenderTargetMipmap(_t),de.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Se=0,Ke=W.length;Se<Ke;Se++){const qe=W[Se],xe=qe.object,fe=qe.geometry,dn=qe.material,De=qe.group;if(dn.side===Ta&&xe.layers.test(tt.layers)){const qn=dn.side;dn.side=fi,dn.needsUpdate=!0,Ze(xe,ot,tt,fe,dn,De),dn.side=qn,dn.needsUpdate=!0,ye=!0}}ye===!0&&(ge.updateMultisampleRenderTarget(_t),ge.updateRenderTargetMipmap(_t))}C.setRenderTarget(It,zt,Jt),C.setClearColor(ct,ut),ie!==void 0&&(tt.viewport=ie),C.toneMapping=he}function Zt(w,W,ot){const tt=W.isScene===!0?W.overrideMaterial:null;for(let j=0,_t=w.length;j<_t;j++){const Tt=w[j],It=Tt.object,zt=Tt.geometry,Jt=Tt.group;let he=Tt.material;he.allowOverride===!0&&tt!==null&&(he=tt),It.layers.test(ot.layers)&&Ze(It,W,ot,zt,he,Jt)}}function Ze(w,W,ot,tt,j,_t){w.onBeforeRender(C,W,ot,tt,j,_t),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(C,W,ot,tt,w,_t),j.transparent===!0&&j.side===Ta&&j.forceSinglePass===!1?(j.side=fi,j.needsUpdate=!0,C.renderBufferDirect(ot,W,tt,j,w,_t),j.side=os,j.needsUpdate=!0,C.renderBufferDirect(ot,W,tt,j,w,_t),j.side=Ta):C.renderBufferDirect(ot,W,tt,j,w,_t),w.onAfterRender(C,W,ot,tt,j,_t)}function Ee(w,W,ot){W.isScene!==!0&&(W=Xt);const tt=Gt.get(w),j=v.state.lights,_t=v.state.shadowsArray,Tt=j.state.version,It=gt.getParameters(w,j.state,_t,W,ot),zt=gt.getProgramCacheKey(It);let Jt=tt.programs;tt.environment=w.isMeshStandardMaterial?W.environment:null,tt.fog=W.fog,tt.envMap=(w.isMeshStandardMaterial?nn:en).get(w.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",xt),Jt=new Map,tt.programs=Jt);let he=Jt.get(zt);if(he!==void 0){if(tt.currentProgram===he&&tt.lightsStateVersion===Tt)return Je(w,It),he}else It.uniforms=gt.getUniforms(w),w.onBeforeCompile(It,C),he=gt.acquireProgram(It,zt),Jt.set(zt,he),tt.uniforms=It.uniforms;const ie=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ie.clippingPlanes=At.uniform),Je(w,It),tt.needsLights=Ge(w),tt.lightsStateVersion=Tt,tt.needsLights&&(ie.ambientLightColor.value=j.state.ambient,ie.lightProbe.value=j.state.probe,ie.directionalLights.value=j.state.directional,ie.directionalLightShadows.value=j.state.directionalShadow,ie.spotLights.value=j.state.spot,ie.spotLightShadows.value=j.state.spotShadow,ie.rectAreaLights.value=j.state.rectArea,ie.ltc_1.value=j.state.rectAreaLTC1,ie.ltc_2.value=j.state.rectAreaLTC2,ie.pointLights.value=j.state.point,ie.pointLightShadows.value=j.state.pointShadow,ie.hemisphereLights.value=j.state.hemi,ie.directionalShadowMap.value=j.state.directionalShadowMap,ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ie.spotShadowMap.value=j.state.spotShadowMap,ie.spotLightMatrix.value=j.state.spotLightMatrix,ie.spotLightMap.value=j.state.spotLightMap,ie.pointShadowMap.value=j.state.pointShadowMap,ie.pointShadowMatrix.value=j.state.pointShadowMatrix),tt.currentProgram=he,tt.uniformsList=null,he}function Ie(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=su.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Je(w,W){const ot=Gt.get(w);ot.outputColorSpace=W.outputColorSpace,ot.batching=W.batching,ot.batchingColor=W.batchingColor,ot.instancing=W.instancing,ot.instancingColor=W.instancingColor,ot.instancingMorph=W.instancingMorph,ot.skinning=W.skinning,ot.morphTargets=W.morphTargets,ot.morphNormals=W.morphNormals,ot.morphColors=W.morphColors,ot.morphTargetsCount=W.morphTargetsCount,ot.numClippingPlanes=W.numClippingPlanes,ot.numIntersection=W.numClipIntersection,ot.vertexAlphas=W.vertexAlphas,ot.vertexTangents=W.vertexTangents,ot.toneMapping=W.toneMapping}function Xe(w,W,ot,tt,j){W.isScene!==!0&&(W=Xt),ge.resetTextureUnits();const _t=W.fog,Tt=tt.isMeshStandardMaterial?W.environment:null,It=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:qr,zt=(tt.isMeshStandardMaterial?nn:en).get(tt.envMap||Tt),Jt=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,he=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),ie=!!ot.morphAttributes.position,ye=!!ot.morphAttributes.normal,Se=!!ot.morphAttributes.color;let Ke=rs;tt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ke=C.toneMapping);const qe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,xe=qe!==void 0?qe.length:0,fe=Gt.get(tt),dn=v.state.lights;if(qt===!0&&(it===!0||w!==U)){const yn=w===U&&tt.id===R;At.setState(tt,w,yn)}let De=!1;tt.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==dn.state.version||fe.outputColorSpace!==It||j.isBatchedMesh&&fe.batching===!1||!j.isBatchedMesh&&fe.batching===!0||j.isBatchedMesh&&fe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&fe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&fe.instancing===!1||!j.isInstancedMesh&&fe.instancing===!0||j.isSkinnedMesh&&fe.skinning===!1||!j.isSkinnedMesh&&fe.skinning===!0||j.isInstancedMesh&&fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&fe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&fe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&fe.instancingMorph===!1&&j.morphTexture!==null||fe.envMap!==zt||tt.fog===!0&&fe.fog!==_t||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==At.numPlanes||fe.numIntersection!==At.numIntersection)||fe.vertexAlphas!==Jt||fe.vertexTangents!==he||fe.morphTargets!==ie||fe.morphNormals!==ye||fe.morphColors!==Se||fe.toneMapping!==Ke||fe.morphTargetsCount!==xe)&&(De=!0):(De=!0,fe.__version=tt.version);let qn=fe.currentProgram;De===!0&&(qn=Ee(tt,W,j));let Li=!1,$n=!1,In=!1;const un=qn.getUniforms(),ti=fe.uniforms;if(Ft.useProgram(qn.program)&&(Li=!0,$n=!0,In=!0),tt.id!==R&&(R=tt.id,$n=!0),Li||U!==w){Ft.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),un.setValue(k,"projectionMatrix",w.projectionMatrix),un.setValue(k,"viewMatrix",w.matrixWorldInverse);const kn=un.map.cameraPosition;kn!==void 0&&kn.setValue(k,Dt.setFromMatrixPosition(w.matrixWorld)),le.logarithmicDepthBuffer&&un.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&un.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),U!==w&&(U=w,$n=!0,In=!0)}if(j.isSkinnedMesh){un.setOptional(k,j,"bindMatrix"),un.setOptional(k,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),un.setValue(k,"boneTexture",yn.boneTexture,ge))}j.isBatchedMesh&&(un.setOptional(k,j,"batchingTexture"),un.setValue(k,"batchingTexture",j._matricesTexture,ge),un.setOptional(k,j,"batchingIdTexture"),un.setValue(k,"batchingIdTexture",j._indirectTexture,ge),un.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&un.setValue(k,"batchingColorTexture",j._colorsTexture,ge));const Yn=ot.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&bt.update(j,ot,qn),($n||fe.receiveShadow!==j.receiveShadow)&&(fe.receiveShadow=j.receiveShadow,un.setValue(k,"receiveShadow",j.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ti.envMap.value=zt,ti.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&W.environment!==null&&(ti.envMapIntensity.value=W.environmentIntensity),$n&&(un.setValue(k,"toneMappingExposure",C.toneMappingExposure),fe.needsLights&&Fe(ti,In),_t&&tt.fog===!0&&ht.refreshFogUniforms(ti,_t),ht.refreshMaterialUniforms(ti,tt,Q,nt,v.state.transmissionRenderTarget[w.id]),su.upload(k,Ie(fe),ti,ge)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(su.upload(k,Ie(fe),ti,ge),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&un.setValue(k,"center",j.center),un.setValue(k,"modelViewMatrix",j.modelViewMatrix),un.setValue(k,"normalMatrix",j.normalMatrix),un.setValue(k,"modelMatrix",j.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const yn=tt.uniformsGroups;for(let kn=0,ks=yn.length;kn<ks;kn++){const ai=yn[kn];ce.update(ai,qn),ce.bind(ai,qn)}}return qn}function Fe(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Ge(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,W,ot){const tt=Gt.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Gt.get(w.texture).__webglTexture=W,Gt.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ot=Gt.get(w);ot.__webglFramebuffer=W,ot.__useDefaultFramebuffer=W===void 0};const We=k.createFramebuffer();this.setRenderTarget=function(w,W=0,ot=0){V=w,z=W,B=ot;let tt=!0,j=null,_t=!1,Tt=!1;if(w){const zt=Gt.get(w);if(zt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(k.FRAMEBUFFER,null),tt=!1;else if(zt.__webglFramebuffer===void 0)ge.setupRenderTarget(w);else if(zt.__hasExternalTextures)ge.rebindTextures(w,Gt.get(w.texture).__webglTexture,Gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ie=w.depthTexture;if(zt.__boundDepthTexture!==ie){if(ie!==null&&Gt.has(ie)&&(w.width!==ie.image.width||w.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(w)}}const Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Tt=!0);const he=Gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(he[W])?j=he[W][ot]:j=he[W],_t=!0):w.samples>0&&ge.useMultisampledRTT(w)===!1?j=Gt.get(w).__webglMultisampledFramebuffer:Array.isArray(he)?j=he[ot]:j=he,H.copy(w.viewport),K.copy(w.scissor),rt=w.scissorTest}else H.copy(X).multiplyScalar(Q).floor(),K.copy(dt).multiplyScalar(Q).floor(),rt=mt;if(ot!==0&&(j=We),Ft.bindFramebuffer(k.FRAMEBUFFER,j)&&tt&&Ft.drawBuffers(w,j),Ft.viewport(H),Ft.scissor(K),Ft.setScissorTest(rt),_t){const zt=Gt.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,ot)}else if(Tt){const zt=W;for(let Jt=0;Jt<w.textures.length;Jt++){const he=Gt.get(w.textures[Jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Jt,he.__webglTexture,ot,zt)}}else if(w!==null&&ot!==0){const zt=Gt.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,ot)}R=-1},this.readRenderTargetPixels=function(w,W,ot,tt,j,_t,Tt,It=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(zt=zt[Tt]),zt){Ft.bindFramebuffer(k.FRAMEBUFFER,zt);try{const Jt=w.textures[It],he=Jt.format,ie=Jt.type;if(!le.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-tt&&ot>=0&&ot<=w.height-j&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),k.readPixels(W,ot,tt,j,Qt.convert(he),Qt.convert(ie),_t))}finally{const Jt=V!==null?Gt.get(V).__webglFramebuffer:null;Ft.bindFramebuffer(k.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,W,ot,tt,j,_t,Tt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(zt=zt[Tt]),zt)if(W>=0&&W<=w.width-tt&&ot>=0&&ot<=w.height-j){Ft.bindFramebuffer(k.FRAMEBUFFER,zt);const Jt=w.textures[It],he=Jt.format,ie=Jt.type;if(!le.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.bufferData(k.PIXEL_PACK_BUFFER,_t.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+It),k.readPixels(W,ot,tt,j,Qt.convert(he),Qt.convert(ie),0);const Se=V!==null?Gt.get(V).__webglFramebuffer:null;Ft.bindFramebuffer(k.FRAMEBUFFER,Se);const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await zM(k,Ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,_t),k.deleteBuffer(ye),k.deleteSync(Ke),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ot=0){const tt=Math.pow(2,-ot),j=Math.floor(w.image.width*tt),_t=Math.floor(w.image.height*tt),Tt=W!==null?W.x:0,It=W!==null?W.y:0;ge.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,Tt,It,j,_t),Ft.unbindTexture()};const ae=k.createFramebuffer(),Cn=k.createFramebuffer();this.copyTextureToTexture=function(w,W,ot=null,tt=null,j=0,_t=null){_t===null&&(j!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=j,j=0):_t=0);let Tt,It,zt,Jt,he,ie,ye,Se,Ke;const qe=w.isCompressedTexture?w.mipmaps[_t]:w.image;if(ot!==null)Tt=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,zt=ot.isBox3?ot.max.z-ot.min.z:1,Jt=ot.min.x,he=ot.min.y,ie=ot.isBox3?ot.min.z:0;else{const Yn=Math.pow(2,-j);Tt=Math.floor(qe.width*Yn),It=Math.floor(qe.height*Yn),w.isDataArrayTexture?zt=qe.depth:w.isData3DTexture?zt=Math.floor(qe.depth*Yn):zt=1,Jt=0,he=0,ie=0}tt!==null?(ye=tt.x,Se=tt.y,Ke=tt.z):(ye=0,Se=0,Ke=0);const xe=Qt.convert(W.format),fe=Qt.convert(W.type);let dn;W.isData3DTexture?(ge.setTexture3D(W,0),dn=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ge.setTexture2DArray(W,0),dn=k.TEXTURE_2D_ARRAY):(ge.setTexture2D(W,0),dn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const De=k.getParameter(k.UNPACK_ROW_LENGTH),qn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Li=k.getParameter(k.UNPACK_SKIP_PIXELS),$n=k.getParameter(k.UNPACK_SKIP_ROWS),In=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,he),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ie);const un=w.isDataArrayTexture||w.isData3DTexture,ti=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Yn=Gt.get(w),yn=Gt.get(W),kn=Gt.get(Yn.__renderTarget),ks=Gt.get(yn.__renderTarget);Ft.bindFramebuffer(k.READ_FRAMEBUFFER,kn.__webglFramebuffer),Ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let ai=0;ai<zt;ai++)un&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.get(w).__webglTexture,j,ie+ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,_t,Ke+ai)),k.blitFramebuffer(Jt,he,Tt,It,ye,Se,Tt,It,k.DEPTH_BUFFER_BIT,k.NEAREST);Ft.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||Gt.has(w)){const Yn=Gt.get(w),yn=Gt.get(W);Ft.bindFramebuffer(k.READ_FRAMEBUFFER,ae),Ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,Cn);for(let kn=0;kn<zt;kn++)un?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Yn.__webglTexture,j,ie+kn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Yn.__webglTexture,j),ti?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yn.__webglTexture,_t,Ke+kn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yn.__webglTexture,_t),j!==0?k.blitFramebuffer(Jt,he,Tt,It,ye,Se,Tt,It,k.COLOR_BUFFER_BIT,k.NEAREST):ti?k.copyTexSubImage3D(dn,_t,ye,Se,Ke+kn,Jt,he,Tt,It):k.copyTexSubImage2D(dn,_t,ye,Se,Jt,he,Tt,It);Ft.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ti?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(dn,_t,ye,Se,Ke,Tt,It,zt,xe,fe,qe.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(dn,_t,ye,Se,Ke,Tt,It,zt,xe,qe.data):k.texSubImage3D(dn,_t,ye,Se,Ke,Tt,It,zt,xe,fe,qe):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,_t,ye,Se,Tt,It,xe,fe,qe.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,_t,ye,Se,qe.width,qe.height,xe,qe.data):k.texSubImage2D(k.TEXTURE_2D,_t,ye,Se,Tt,It,xe,fe,qe);k.pixelStorei(k.UNPACK_ROW_LENGTH,De),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Li),k.pixelStorei(k.UNPACK_SKIP_ROWS,$n),k.pixelStorei(k.UNPACK_SKIP_IMAGES,In),_t===0&&W.generateMipmaps&&k.generateMipmap(dn),Ft.unbindTexture()},this.initRenderTarget=function(w){Gt.get(w).__webglFramebuffer===void 0&&ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ge.setTextureCube(w,0):w.isData3DTexture?ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ge.setTexture2DArray(w,0):ge.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){z=0,B=0,V=null,Ft.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ve._getUnpackColorSpace()}}const vv={type:"change"},Ep={type:"start"},ox={type:"end"},Kc=new dl,xv=new ns,cw=Math.cos(70*OM.DEG2RAD),Ln=new q,ui=2*Math.PI,ln={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ad=1e-6;class uw extends TE{constructor(t,i=null){super(t,i),this.state=ln.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Is,this._lastTargetPosition=new q,this._quat=new Is().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new W0,this._sphericalDelta=new W0,this._scale=1,this._panOffset=new q,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new q,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hw.bind(this),this._onPointerDown=fw.bind(this),this._onPointerUp=dw.bind(this),this._onContextMenu=yw.bind(this),this._onMouseWheel=gw.bind(this),this._onKeyDown=_w.bind(this),this._onTouchStart=vw.bind(this),this._onTouchMove=xw.bind(this),this._onMouseDown=pw.bind(this),this._onMouseMove=mw.bind(this),this._interceptControlDown=Sw.bind(this),this._interceptControlUp=Mw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vv),this.update(),this.state=ln.NONE}update(t=null){const i=this.object.position;Ln.copy(i).sub(this.target),Ln.applyQuaternion(this._quat),this._spherical.setFromVector3(Ln),this.autoRotate&&this.state===ln.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),l<-Math.PI?l+=ui:l>Math.PI&&(l-=ui),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Ln.setFromSpherical(this._spherical),Ln.applyQuaternion(this._quatInverse),i.copy(this.target).add(Ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=Ln.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new q(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=Ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Kc.origin.copy(this.object.position),Kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kc.direction))<cw?this.object.lookAt(this.target):(xv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kc.intersectPlane(xv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ad||this._lastTargetPosition.distanceToSquared(this.target)>ad?(this.dispatchEvent(vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ui/60*this.autoRotateSpeed*t:ui/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Ln.setFromMatrixColumn(i,0),Ln.multiplyScalar(-t),this._panOffset.add(Ln)}_panUp(t,i){this.screenSpacePanning===!0?Ln.setFromMatrixColumn(i,1):(Ln.setFromMatrixColumn(i,0),Ln.crossVectors(this.object.up,Ln)),Ln.multiplyScalar(t),this._panOffset.add(Ln)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Ln.copy(l).sub(this.target);let c=Ln.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ve,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function fw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function hw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function dw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ox),this.state=ln.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function pw(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ln.DOLLY;break;case Hr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ln.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ln.ROTATE}break;case Hr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ln.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ln.PAN}break;default:this.state=ln.NONE}this.state!==ln.NONE&&this.dispatchEvent(Ep)}function mw(r){switch(this.state){case ln.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ln.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function gw(r){this.enabled===!1||this.enableZoom===!1||this.state!==ln.NONE||(r.preventDefault(),this.dispatchEvent(Ep),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ox))}function _w(r){this.enabled!==!1&&this._handleKeyDown(r)}function vw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ln.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ln.TOUCH_PAN;break;default:this.state=ln.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ln.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ln.TOUCH_DOLLY_ROTATE;break;default:this.state=ln.NONE}break;default:this.state=ln.NONE}this.state!==ln.NONE&&this.dispatchEvent(Ep)}function xw(r){switch(this._trackPointer(r),this.state){case ln.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ln.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ln.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ln.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ln.NONE}}function yw(r){this.enabled!==!1&&r.preventDefault()}function Sw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ll=Object.freeze({servers:3,channels:2,idleW:70,busyW:320,networkW:25,pue:1.2,ci:400,tuSeconds:1,seed:12,milpTimeLimit:5}),Sa=1e-7,sd=r=>r.reduce((t,i)=>t+i,0),as=r=>`${r.source}:${r.target}`;function Ew(r){let t=r>>>0;return()=>{t+=1831565813;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Wn(r,t,i,s,l=!1){if(typeof r!="number"||!Number.isFinite(r)||r<i||r>s||l&&!Number.isInteger(r))throw new Error(`${t} must be ${l?"an integer":"a finite number"} from ${i} to ${s}.`);return r}function lx(r={},t={}){const i={...ll,...t,...r};return Wn(i.servers,"Servers",1,8,!0),Wn(i.channels,"Channels",1,8,!0),Wn(i.idleW,"Idle power",0,1e6),Wn(i.busyW,"Busy power",i.idleW,1e6),Wn(i.networkW,"Network power",0,1e6),Wn(i.pue,"PUE",1,10),Wn(i.ci,"Carbon intensity",0,5e3),Wn(i.tuSeconds,"Seconds per time unit",.001,86400),Wn(i.seed,"Seed",0,4294967295,!0),Wn(i.milpTimeLimit,"MILP time limit in seconds",.01,60),i}function bw(r){const t=new Map(r.nodes.map(f=>[f.id,[]])),i=new Map(r.nodes.map(f=>[f.id,[]]));for(const f of r.edges)t.get(f.target).push(f),i.get(f.source).push(f);const s=new Map([...t].map(([f,h])=>[f,h.length])),l=r.nodes.filter(f=>!s.get(f.id)).map(f=>f.id).sort((f,h)=>f-h),c=[];for(;l.length;){const f=l.shift();c.push(f);for(const h of i.get(f)){const m=s.get(h.target)-1;s.set(h.target,m),m||(l.push(h.target),l.sort((p,_)=>p-_))}}if(c.length!==r.nodes.length)throw new Error("The graph contains a cycle; upload a directed acyclic graph.");return{order:c,parents:t,children:i}}function Pr(r,t={}){if(!r||!Array.isArray(r.nodes)||!Array.isArray(r.edges))throw new Error("A DAG needs nodes and edges arrays.");if(r.nodes.length<1||r.nodes.length>32)throw new Error("Use 1–32 tasks.");if(r.edges.length>496)throw new Error("Use at most 496 unique edges.");const i=lx({...r.seed===void 0?{}:{seed:r.seed},...t},r.resources),s=new Set,l=r.nodes.map(m=>{if(Wn(m.id,"Task ID",0,2147483647,!0),Wn(m.duration,`Task ${m.id} duration`,.001,1e4),s.has(m.id))throw new Error(`Duplicate task ID ${m.id}.`);return s.add(m.id),{...m,id:m.id,duration:m.duration}}),c=new Set,f=r.edges.map(m=>{if(!s.has(m.source)||!s.has(m.target))throw new Error("Every edge endpoint must name an existing task.");if(m.source===m.target)throw new Error("Self edges are not allowed in a DAG.");if(Wn(m.duration,"Transfer duration",0,1e4),c.has(as(m)))throw new Error(`Duplicate edge ${as(m)}.`);return c.add(as(m)),{source:m.source,target:m.target,duration:m.duration}}),h={...r,nodes:l,edges:f,resources:{servers:i.servers,channels:i.channels},seed:i.seed};return bw(h),h}function cx(r="forkjoin",t=8,i=12){if(Wn(t,"Task count",1,32,!0),Wn(i,"Seed",0,4294967295,!0),!["pipeline","forkjoin","mapreduce","diamond","layered","random","tree","independent"].includes(r))throw new Error(`Unknown DAG family ${r}.`);const l=Ew(i),c=Array.from({length:t},(p,_)=>({id:_,duration:2+Math.floor(l()*7)})),f=[],h=new Set,m=(p,_)=>{p>=_||p<0||_>=t||h.has(`${p}:${_}`)||(h.add(`${p}:${_}`),f.push({source:p,target:_,duration:1+Math.floor(l()*4)}))};if(r==="pipeline")for(let p=1;p<t;p++)m(p-1,p);if(r==="forkjoin")for(let p=1;p<t-1;p++)m(0,p),m(p,t-1);if(r==="forkjoin"&&t===2&&m(0,1),r==="mapreduce"){const p=Math.ceil(t/2);for(let _=0;_<p;_++)for(let g=p;g<t;g++)m(_,g)}if(r==="diamond")for(let p=0;p<t-1;p+=3)m(p,p+1),m(p,p+2),m(p+1,p+3),m(p+2,p+3);if(r==="layered"){const p=Math.max(2,Math.ceil(Math.sqrt(t)));for(let _=0;_<t;_++)for(let g=_+1;g<t;g++)Math.floor(g/p)===Math.floor(_/p)+1&&(g%p===_%p||l()<.55)&&m(_,g)}if(r==="random")for(let p=0;p<t;p++)for(let _=p+1;_<t;_++)l()<.24&&m(p,_);if(r==="tree")for(let p=1;p<t;p++)m(Math.floor((p-1)/2),p);return{name:r,nodes:c,edges:f,seed:i,resources:{servers:ll.servers,channels:ll.channels}}}function Qc(){return{...cx("forkjoin",8,70),name:"Shared network · fork and join",seed:ll.seed}}function Tw(r,t){const i=Pr(r);if(!t||!Array.isArray(t.tasks)||!Array.isArray(t.flows))throw new Error("A schedule needs tasks and flows arrays.");if(t.tasks.length!==i.nodes.length)throw new Error("Schedule must contain every task exactly once.");const s=new Map(i.nodes.map(g=>[g.id,g])),l=new Map,c=Array.from({length:i.resources.servers},()=>[]),f=Array.from({length:i.resources.channels},()=>[]),h=(g,x)=>{if(!Number.isFinite(g.start)||!Number.isFinite(g.end)||g.start<-Sa||g.end<g.start-Sa)throw new Error(`${x} has an invalid interval.`)};for(const g of t.tasks){if(!s.has(g.id)||l.has(g.id))throw new Error("Schedule has an unknown or duplicate task.");if(Wn(g.resource,"Task server",0,c.length-1,!0),h(g,"Task"),Math.abs(g.end-g.start-s.get(g.id).duration)>Sa)throw new Error("A task duration differs from the input.");l.set(g.id,g),c[g.resource].push(g)}const m=new Map(i.edges.map(g=>[as(g),g])),p=new Map;for(const g of t.flows){const x=m.get(as(g));if(!x||p.has(as(g)))throw new Error("Schedule has an unknown or duplicate transfer.");const y=l.get(g.source),b=l.get(g.target);if(y.resource===b.resource)throw new Error("Co-located tasks must not emit a network transfer.");if(Wn(g.resource,"Transfer channel",0,f.length-1,!0),h(g,"Transfer"),Math.abs(g.end-g.start-x.duration)>Sa)throw new Error("A transfer duration differs from the input.");if(g.start<y.end-Sa||g.end>b.start+Sa)throw new Error("Transfer violates predecessor/consumer precedence.");p.set(as(g),g),x.duration>0&&f[g.resource].push(g)}for(const g of i.edges){const x=l.get(g.source),y=l.get(g.target);if(x.end>y.start+Sa)throw new Error("Task precedence is violated.");if(x.resource!==y.resource&&!p.has(as(g)))throw new Error("Every cross-server edge needs a transfer, including zero-duration edges.")}for(const g of[...c,...f]){const x=[...g].sort((y,b)=>y.start-b.start||y.end-b.end);for(let y=1;y<x.length;y++)if(x[y].start<x[y-1].end-Sa)throw new Error("Resource mutex violated: overlapping intervals.")}const _=Math.max(...t.tasks.map(g=>g.end));if(!Number.isFinite(t.completion_time)||Math.abs(_-t.completion_time)>Sa)throw new Error("Completion time must equal the last task end.");return!0}function Fs(r,t,i={},s=0){const l=lx(i,r.resources);if(l.servers!==r.resources.servers||l.channels!==r.resources.channels)throw new Error("Accounting resources must match the scheduled resources.");if(typeof s!="number"||Number.isNaN(s))throw new Error("Ledger time must be a number.");const c=Math.max(0,Math.min(t.completion_time,s)),f=c>=t.completion_time,h=c*l.tuSeconds,m=l.pue*l.ci/36e5,p=Array.from({length:l.servers},(T,S)=>{const v=t.tasks.filter(O=>O.resource===S),N=sd(v.map(O=>Math.max(0,Math.min(c,O.end)-O.start)))*l.tuSeconds,L=f?null:v.find(O=>O.start<=c&&c<O.end)?.id??null,C=l.idleW*h+(l.busyW-l.idleW)*N;return{resource:S,carbonG:C*m,energyJ:C,powerW:f?0:L===null?l.idleW:l.busyW,activeTask:L,busySeconds:N,idleSeconds:Math.max(0,h-N)}}),_=l.networkW*h,g={carbonG:_*m,energyJ:_,powerW:f?0:l.networkW,activeFlows:f?[]:t.flows.filter(T=>T.start<=c&&c<T.end)},x=sd(p.map(T=>T.energyJ))+_,y=sd(p.map(T=>T.busySeconds))*(l.busyW-l.idleW)*m,b=(l.servers*l.idleW+l.networkW)*h*m;return{time:c,finished:f,totalG:x*m,totalJ:x,servers:p,network:g,fixedG:y,reservationG:b}}function Aw(r={}){const t=r.nodes||[],i=new Map(t.map((y,b)=>[String(y.id),b])),s=t.map(()=>0),l=t.map(()=>[]);for(const y of r.edges||[]){const b=i.get(String(y.source)),T=i.get(String(y.target));b!==void 0&&T!==void 0&&(s[T]++,l[b].push(T))}const c=s.slice(),f=t.map(()=>0),h=t.map((y,b)=>b).filter(y=>c[y]===0),m=[];for(let y=0;y<h.length;y++){const b=h[y];m.push(b);for(const T of l[b])f[T]=Math.max(f[T],f[b]+1),--c[T]===0&&h.push(T)}t.forEach((y,b)=>{m.includes(b)||m.push(b)});const p=[];m.forEach(y=>(p[f[y]]||=[]).push(y));const _=Math.max(0,...p.map(y=>y?.length||0)),g=p.length<=7&&_<=6,x=new Map;if(g){const y=Math.max(1,p.length);p.forEach((b=[],T)=>{const S=b.length===6?10:8.75,v=b.length===6?5.75:4.1;b.forEach((N,L)=>{x.set(String(t[N].id),{x:y===1?0:(T/(y-1)-.5)*11.2,y:b.length===1?_===6?7.125:6.55:S-L/(b.length-1)*v,z:-.55,rank:T})})})}else{const y=Math.min(7,Math.max(2,Math.ceil(Math.sqrt(t.length*1.65)))),b=Math.ceil(t.length/y);m.forEach((T,S)=>{const v=Math.floor(S/y),N=v%2?y-1-S%y:S%y;x.set(String(t[T].id),{x:(N/Math.max(1,y-1)-.5)*11.2,y:b===1?6.55:8.75-v/(b-1)*4.1,z:-.55,rank:f[T]})})}return x}function ww(r){if(r===1)return[{x:0,z:2.4}];if(r===2)return[{x:-3.9,z:1.5},{x:3.9,z:1.5}];if(r===3)return[{x:-4.3,z:2},{x:0,z:-2.1},{x:4.3,z:2}];const t=Math.ceil(r/2),i=r-t;return Array.from({length:r},(s,l)=>{const c=l<t,f=c?t:i,h=c?l:l-t;return{x:f===1?0:(h/(f-1)-.5)*9.8,z:c?2.65:-2.3}})}const Ki=["#5fc9ba","#73a7ff","#e1b969","#b298e9","#e48d9a","#73c2df","#b1c47a","#de9a6f"],Or=(r,t,i)=>Math.min(i,Math.max(t,r)),pn=(r,t=0)=>Number.isFinite(Number(r))?Number(r):t,nl=r=>pn(r)===0?"0.000":Math.abs(r)<.001?Number(r).toPrecision(2):Number(r).toFixed(r>=100?1:3),ba=r=>Number(pn(r).toFixed(2)).toString(),Rw=r=>new q(r.x,r.y,r.z),ux=(r,t)=>Ki[Math.max(0,(r.nodes||[]).findIndex(i=>String(i.id)===String(t)))%Ki.length],fx=(r,t)=>({type:"task",id:r.id,duration:r.duration,resource:t?.resource??null,start:t?.start??null,end:t?.end??null});function Cw({dag:r,result:t,ledger:i,lang:s,onSelect:l}){const c=s==="zh",f=new Map((t?.tasks||[]).map(h=>[String(h.id),h]));return E.jsxs("div",{className:"carbon-scene-fallback",children:[E.jsx("p",{children:c?"当前设备无法开启 3D，实时能耗与排放仍可查看。":"3D is unavailable on this device. Live energy and carbon remain available."}),E.jsxs("div",{className:"carbon-fallback-resources",children:[(i?.servers||[]).map(h=>E.jsxs("button",{onClick:()=>l?.({type:"server",resource:h.resource}),children:[E.jsxs("strong",{children:["VM ",h.resource+1]}),E.jsxs("span",{children:[nl(h.carbonG)," gCO₂e"]}),E.jsxs("small",{children:[pn(h.powerW).toFixed(0)," W · ",h.activeTask!=null?`T${h.activeTask}`:i?.finished?c?"已释放":"Released":c?"空闲":"Idle"]})]},h.resource)),E.jsxs("div",{children:[E.jsx("strong",{children:c?"网络":"Network"}),E.jsxs("span",{children:[nl(i?.network?.carbonG)," gCO₂e"]}),E.jsxs("small",{children:[pn(i?.network?.powerW).toFixed(0)," W"]})]})]}),E.jsx("div",{className:"carbon-fallback-tasks",children:(r?.nodes||[]).map(h=>{const m=f.get(String(h.id)),p=m&&i?.time>=m.end?"done":m&&i?.time>=m.start?"running":"waiting";return E.jsxs("button",{"data-state":p,style:{"--task-color":ux(r,h.id)},onClick:()=>l?.(fx(h,m)),children:["T",h.id,E.jsx("small",{children:m?`${ba(m.start)}–${ba(m.end)} tu · VM ${m.resource+1}`:`${ba(h.duration)} tu`})]},h.id)})})]})}function Dw({dag:r,result:t,config:i,time:s=0,playing:l=!1,lang:c="zh",showAssignments:f=!0,smoke:h=!0,resetKey:m=0,onSelect:p,comparisonEndTime:_}){const g=Pt.useRef(null),x=Pt.useRef(null),[y,b]=Pt.useState(!1),[T,S]=Pt.useState(!1),v=Pt.useMemo(()=>t?Fs(r,t,i,s):null,[r,t,i,s]),N=Pt.useRef(null);N.current={dag:r,result:t,config:i,time:s,playing:l,lang:c,showAssignments:f,smoke:h,onSelect:p,ledger:v,comparisonEndTime:_};const L=Or(Math.floor(pn(i?.servers,r?.resources?.servers||1)),1,8),C=Or(Math.floor(pn(i?.channels,r?.resources?.channels||1)),1,16);Pt.useEffect(()=>{const z=g.current;if(!z||!r)return;b(!1),S(!1);let B;try{B=new lw({antialias:!0,alpha:!1,powerPreference:"low-power"}),B.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),B.setClearColor("#060e19"),B.outputColorSpace=Si,z.appendChild(B.domElement)}catch{b(!0);return}const V=B.domElement;V.setAttribute("aria-label",c==="zh"?"任务 DAG、虚拟机和网络的交互式 3D 场景":"Interactive 3D task DAG, virtual machines and network");const R=new oE;R.fog=new mp("#060e19",29,54);const U=new Mi(39,1,.1,100),H=new uw(U,V);H.enableDamping=!0,H.dampingFactor=.09,H.enablePan=!0,H.screenSpacePanning=!0,H.minPolarAngle=.36,H.maxPolarAngle=Math.PI*.52,H.rotateSpeed=.55,H.zoomSpeed=.7,H.target.set(0,4.1,0);const K=()=>{const Ut=Math.max(.45,z.clientWidth/Math.max(1,z.clientHeight)),Ct=Math.max(20,20/Ut);H.target.set(0,4.1,0),U.position.set(.25,4.1+Ct*.21,Ct),H.minDistance=8,H.maxDistance=Math.max(54,Ct*2.5),H.update()};x.current={reset:K,zoom:Ut=>{U.position.sub(H.target).multiplyScalar(Ut).add(H.target),H.update()}},R.add(new _E("#c7e5ff","#101b31",2.5));const rt=new SE("#adcbff",3.1);rt.position.set(-5,12,10),R.add(rt);const ct=new xE("#53ecc0",18,18);ct.position.set(0,2.8,1),R.add(ct);const ut=new Tn(new pl(14.6,8.6),new Wc({color:"#0b1c2c",metalness:.18,roughness:.85,transparent:!0,opacity:.85}));ut.rotation.x=-Math.PI/2,ut.position.y=-.12,R.add(ut);const F=new bE(14,14,"#214957","#142b3c");F.position.y=-.1,F.material.transparent=!0,F.material.opacity=.56,R.add(F);const nt=new Kv(new dE(new Hi(14.6,.12,8.6)),new Vr({color:"#32667a",transparent:!0,opacity:.65}));nt.position.y=-.17,R.add(nt);const Q=document.createElement("div");Q.className="carbon-world-overlay",z.appendChild(Q);const Mt=[],P=[],X=(Ut,Ct,Zt,Ze)=>{const Ee=document.createElement(Ze?"button":"div");Ee.className=`carbon-world-label ${Ut}`,Ee.innerHTML=Zt,Ze&&(Ee.type="button",Ee.addEventListener("click",()=>N.current.onSelect?.(Ze))),Q.appendChild(Ee);const Ie={element:Ee,point:Ct,width:0,height:0};return Mt.push(Ie),Ie},dt=Aw(r),mt=new Map((t?.tasks||[]).map(Ut=>[String(Ut.id),Ut])),Ot=new Map((t?.flows||[]).map(Ut=>[`${Ut.source}:${Ut.target}`,Ut])),qt=ww(L),it=[],yt=new Map,Dt=new xp(.26,0),se=new fu(.35,.018,5,24),Xt=new Br;R.add(Xt);const oe=[],Qe=[];for(const[Ut,Ct]of(r.nodes||[]).entries()){const Zt=dt.get(String(Ct.id));if(!Zt)continue;const Ze=Ki[Ut%Ki.length],Ee=fx(Ct,mt.get(String(Ct.id))),Ie=new Tn(Dt,new Wc({color:Ze,emissive:Ze,emissiveIntensity:.15,roughness:.55,metalness:.25}));Ie.position.copy(Rw(Zt)),Ie.userData.selection=Ee,R.add(Ie),P.push(Ie);const Je=new Tn(se,new Zi({color:Ze,transparent:!0,opacity:.25}));Je.position.copy(Ie.position),R.add(Je);const Xe=X("carbon-task-label",Ie.position.clone().add(new q(0,.13,.05)),"<strong></strong><small></small>",Ee);Xe.element.style.setProperty("--task-color",Ze),Xe.element.dataset.task=String(Ct.id),Xe.element.querySelector("strong").textContent=`T${Ct.id}`,Xe.element.querySelector("small").textContent=`${ba(Ct.duration)} tu`;const Fe={node:Ct,mesh:Ie,ring:Je,label:Xe,color:Ze,row:mt.get(String(Ct.id)),state:""};it.push(Fe),yt.set(String(Ct.id),Fe);const Ge=qt[Fe.row?.resource];if(Ge){const We=[Ie.position.clone().add(new q(0,-.3,0)),new q(Ge.x,1.05,Ge.z)],ae=new au(new Nn().setFromPoints(We),new gE({color:Ze,transparent:!0,opacity:.12,dashSize:.1,gapSize:.13,depthWrite:!1}));ae.computeLineDistances(),Xt.add(ae),oe.push({line:ae,task:Fe})}}for(const[Ut,Ct]of(r.edges||[]).entries()){const Zt=yt.get(String(Ct.source)),Ze=yt.get(String(Ct.target));if(!Zt||!Ze)continue;const Ee=Zt.mesh.position.clone(),Ie=Ze.mesh.position.clone(),Je=Ie.clone().sub(Ee).normalize();Ee.addScaledVector(Je,.3),Ie.addScaledVector(Je,-.38);const Xe=new au(new Nn().setFromPoints([Ee,Ie]),new Vr({color:"#6e91af",transparent:!0,opacity:.35,depthWrite:!1})),Fe=new Tn(new _p(.052,.16,5),new Zi({color:"#6e91af",transparent:!0,opacity:.65}));Fe.position.copy(Ie),Fe.quaternion.setFromUnitVectors(new q(0,1,0),Je),R.add(Xe,Fe);let Ge=null;if((r.edges||[]).length<=16){const We=r.edges.filter(W=>String(W.source)===String(Ct.source)).length,ae=r.edges.filter(W=>String(W.target)===String(Ct.target)).length,Cn=(We>ae?.6:ae>We?.4:.5)+(Ut%3-1)*.01,w=Zt.mesh.position.clone().lerp(Ze.mesh.position,Cn);w.y+=.13,w.z+=.06,Ge=X("carbon-edge-label",w,"<span></span>"),Ge.element.querySelector("span").textContent=`${ba(Ct.duration)} tu`,Ge.element.dataset.edge=`${Ct.source}:${Ct.target}`,Ge.element.title=`T${Ct.source} → T${Ct.target} · ${ba(Ct.duration)} tu`,Ge.element.setAttribute("aria-label",Ge.element.title)}Qe.push({edge:Ct,line:Xe,arrow:Fe,label:Ge})}const k=new Br;k.position.set(0,.55,0);const ze=new Tn(new du(.64,.72,.35,6),new Wc({color:"#153849",metalness:.65,roughness:.3,emissive:"#2b6080",emissiveIntensity:.3})),de=new Tn(new fu(.84,.035,6,40),new Zi({color:"#73a7ff",transparent:!0,opacity:.6}));de.rotation.x=Math.PI/2,k.add(ze,de),R.add(k);const le=X("carbon-hub-label",new q(2.3,1.7,.2),"<strong></strong><span></span><small></small>"),Ft=new Tn(new Hi(.15,1,.15),new Zi({color:"#73a7ff",transparent:!0,opacity:.8}));Ft.position.set(.96,.2,0),R.add(Ft);const He=[],Gt=[],ge=new Hi(1.05,.88,.85),en=new Hi(.7,.045,.025),nn=new Hi(.14,1,.14);qt.forEach((Ut,Ct)=>{const Zt=new Tn(ge,new Wc({color:"#203c52",metalness:.45,roughness:.48,emissive:"#132432",emissiveIntensity:.4}));Zt.position.set(Ut.x,.45,Ut.z),Zt.userData.selection={type:"server",resource:Ct},R.add(Zt),P.push(Zt);const Ze=[];for(let Xe=0;Xe<4;Xe++){const Fe=new Tn(en,new Zi({color:"#2e6270",transparent:!0,opacity:.8}));Fe.position.set(Ut.x,.2+Xe*.15,Ut.z+.438),R.add(Fe),Ze.push(Fe)}const Ee=new Tn(new Hi(.85,.025,.64),new Zi({color:"#17374b"}));Ee.position.set(Ut.x,.903,Ut.z),R.add(Ee);const Ie=new Tn(nn,new Zi({color:"#e1b969",transparent:!0,opacity:.92}));Ie.position.set(Ut.x+.72,0,Ut.z),R.add(Ie);const Je=X("carbon-server-label",new q(Ut.x,0,Ut.z+.72),"<strong></strong><span></span><small></small>",{type:"server",resource:Ct});Je.element.dataset.resource=String(Ct),Je.element.querySelector("strong").textContent=`VM ${Ct+1}`,He.push({resource:Ct,position:Ut,body:Zt,slits:Ze,bar:Ie,label:Je});for(let Xe=0;Xe<C;Xe++){const Fe=(Xe-(C-1)/2)*Math.min(.08,.45/C),Ge=new q(-Ut.z,0,Ut.x).normalize().multiplyScalar(Fe),We=new q(Ut.x,.32,Ut.z).add(Ge),ae=new q(0,.56,0).add(Ge),Cn=new Vr({color:Ki[Xe%Ki.length],transparent:!0,opacity:.12,depthWrite:!1}),w=new au(new Nn().setFromPoints([We,ae]),Cn);R.add(w),Gt.push({resource:Ct,channel:Xe,line:w,start:We,end:ae})}});const I=new yp(.055,6,4),A=Array.from({length:C*3},(Ut,Ct)=>{const Zt=new Tn(I,new Zi({color:Ki[Math.floor(Ct/3)%Ki.length]}));return Zt.visible=!1,R.add(Zt),Zt}),$=document.createElement("canvas");$.width=$.height=32;const gt=$.getContext("2d"),ht=gt.createRadialGradient(16,16,0,16,16,16);ht.addColorStop(0,"rgba(207,231,236,.85)"),ht.addColorStop(.3,"rgba(174,200,216,.5)"),ht.addColorStop(1,"rgba(152,176,199,0)"),gt.fillStyle=ht,gt.fillRect(0,0,32,32);const pt=new hE($),kt=[...qt.map(Ut=>({...Ut,y:.98})),{x:0,z:0,y:.95}].map((Ut,Ct)=>{const Zt=new Float32Array(126),Ze=new Nn;Ze.setAttribute("position",new Vi(Zt,3).setUsage(LM));const Ee=new Qv({map:pt,color:"#b8ccd4",size:.58,transparent:!0,opacity:.23,depthWrite:!1,sizeAttenuation:!0}),Ie=new fE(Ze,Ee);return Ie.frustumCulled=!1,R.add(Ie),{points:Ie,data:Zt,position:Ut,index:Ct}});let At=null;const $t=new EE,Yt=new ve,bt=Ut=>{Ut.button===0&&(At=[Ut.clientX,Ut.clientY])},Bt=Ut=>{if(!At||Ut.button!==0||Math.hypot(Ut.clientX-At[0],Ut.clientY-At[1])>5){At=null;return}At=null;const Ct=V.getBoundingClientRect();Yt.set((Ut.clientX-Ct.left)/Ct.width*2-1,-(Ut.clientY-Ct.top)/Ct.height*2+1),$t.setFromCamera(Yt,U);const Zt=$t.intersectObjects(P,!1)[0];Zt&&N.current.onSelect?.(Zt.object.userData.selection)},ne=()=>{At=null},Qt=Ut=>{Ut.preventDefault(),b(!0)};V.addEventListener("pointerdown",bt),V.addEventListener("pointerup",Bt),V.addEventListener("pointercancel",ne),V.addEventListener("webglcontextlost",Qt);let Nt=0,ce=0,Z=!0,Rt=!0,Lt=1;const Wt=()=>{if(Nt=z.clientWidth,ce=z.clientHeight,!Nt||!ce)return;B.setSize(Nt,ce,!1),U.aspect=Nt/ce,U.updateProjectionMatrix(),Rt=!0;const Ut=Math.max(1,1/U.aspect);Z?(K(),Z=!1):Ut!==Lt&&U.position.sub(H.target).multiplyScalar(Ut/Lt).add(H.target),Lt=Ut,Mt.forEach(Ct=>{Ct.width=Ct.element.offsetWidth,Ct.height=Ct.element.offsetHeight})},wt=new ResizeObserver(Wt);wt.observe(z),Wt();let xt,Kt=performance.now(),ue=.8,Pe=null,Me=null,at=null,Ht=null,Vt=null;const ee=new q,Ce=Ut=>{if(xt=requestAnimationFrame(Ce),B.getContext().isContextLost())return;const Ct=N.current,Zt=Math.min(.05,Math.max(0,(Ut-Kt)/1e3));Kt=Ut,Ct.playing&&(ue+=Zt);const Ze=H.update(),Ee=Ct.ledger,Ie=Ee!==Pe||Ct.lang!==Me||Ct.showAssignments!==at||Ct.comparisonEndTime!==Vt;if(!Ct.playing&&!Ze&&!Rt&&!Ie&&Ct.smoke===Ht)return;Ht=Ct.smoke,Rt=!1,U.updateMatrixWorld();const Je=pn(Ee?.time,Math.min(pn(Ct.time),pn(Ct.result?.completion_time))),Xe=pn(Ct.result?.completion_time),Fe=Ee?.finished??Je>=Xe,Ge=Fe?[]:Ee?.network?.activeFlows||[];if(Xt.visible=Ct.showAssignments,Ie){Pe=Ee,Me=Ct.lang,at=Ct.showAssignments,Vt=Ct.comparisonEndTime;const ae=Ct.lang==="zh";V.setAttribute("aria-label",ae?"任务 DAG、虚拟机和网络的交互式 3D 场景":"Interactive 3D task DAG, virtual machines and network");const Cn=new Set(Ge.map(j=>`${j.source}:${j.target}`));it.forEach(j=>{const{row:_t,node:Tt,mesh:It,ring:zt,label:Jt,color:he}=j,ye=(r.edges||[]).filter(Ke=>String(Ke.target)===String(Tt.id)).every(Ke=>{const qe=mt.get(String(Ke.source)),xe=Ot.get(`${Ke.source}:${Ke.target}`);return qe&&qe.end<=Je&&(!xe||xe.end<=Je)}),Se=_t&&Je>=_t.end?"done":_t&&Je>=_t.start&&Je<_t.end?"running":ye?"ready":"waiting";j.state=Se,It.material.color.set(Se==="waiting"?"#34495f":he),It.material.emissive.set(he),It.material.emissiveIntensity=Se==="running"?.72:Se==="done"?.25:.07,zt.material.opacity=Se==="running"?.9:Se==="done"?.6:.2,Jt.element.dataset.state=Se,Jt.element.title=`T${Tt.id} · ${ba(Tt.duration)} tu · ${ae?{waiting:"等待前序",ready:"就绪",running:"运行中",done:"完成"}[Se]:Se}${_t?` · VM ${_t.resource+1} · ${ba(_t.start)}–${ba(_t.end)} tu`:""}`,Jt.element.setAttribute("aria-label",Jt.element.title)}),oe.forEach(({line:j,task:_t})=>{j.material.opacity=_t.state==="running"?.6:_t.state==="done"?.09:.11,j.material.dashSize=_t.state==="running"?.17:.1}),Qe.forEach(({edge:j,line:_t,arrow:Tt,label:It})=>{const zt=Cn.has(`${j.source}:${j.target}`),Jt=zt?"#73a7ff":"#6e91af";_t.material.color.set(Jt),Tt.material.color.set(Jt),_t.material.opacity=zt?.95:.3,It&&(It.element.dataset.state=zt?"active":"idle")});const w=Math.max(Xe,pn(Ct.comparisonEndTime,Xe),.1),W=pn(Ct.config?.tuSeconds,1)*pn(Ct.config?.pue,1)*pn(Ct.config?.ci,0)/36e5,ot=Math.max(1e-8,Math.max(pn(Ct.config?.busyW),pn(Ct.config?.idleW),pn(Ct.config?.networkW))*w*W);He.forEach(j=>{const _t=Ee?.servers?.find(Jt=>Jt.resource===j.resource),Tt=_t?.activeTask!=null&&!Fe,It=Tt?ux(r,_t.activeTask):"#294c62";j.body.material.color.set(Tt?It:Fe?"#203044":"#203c52"),j.body.material.emissive.set(It),j.body.material.emissiveIntensity=Tt?.3:.04,j.slits.forEach(Jt=>{Jt.material.color.set(Tt?It:"#396070"),Jt.material.opacity=Fe?.35:Tt?1:.6});const zt=Or(pn(_t?.carbonG)/ot,0,1)*1.75;j.bar.visible=zt>.002,j.bar.scale.y=Math.max(.002,zt),j.bar.position.y=zt/2,j.label.element.dataset.state=Tt?"running":Fe?"released":"idle",j.label.element.style.setProperty("--task-color",It),j.label.element.querySelector("span").textContent=`${nl(_t?.carbonG)} gCO₂e`,j.label.element.querySelector("small").textContent=`${pn(_t?.powerW).toFixed(0)} W · ${Tt?`T${_t.activeTask}`:Fe?ae?"已释放":"Released":ae?"空闲":"Idle"}`,j.label.element.title=`VM ${j.resource+1} · ${nl(_t?.carbonG)} gCO₂e · ${pn(_t?.energyJ).toFixed(1)} J`}),le.element.querySelector("strong").textContent=ae?`网络 · ${C} 通道`:`Network · ${C} ch`,le.element.querySelector("span").textContent=`${nl(Ee?.network?.carbonG)} gCO₂e`,le.element.querySelector("small").textContent=`${pn(Ee?.network?.powerW).toFixed(0)} W · ${Fe?ae?"已释放":"Released":Ge.length?ae?`${Ge.length} 传输`:`${Ge.length} flows`:ae?"已预留":"Reserved"}`;const tt=Or(pn(Ee?.network?.carbonG)/ot,0,1)*1.75;Ft.visible=tt>.002,Ft.scale.y=Math.max(.002,tt),Ft.position.y=tt/2,de.material.opacity=Fe?.2:Ge.length?1:.45,Gt.forEach(j=>{const _t=Ge.some(Tt=>Tt.resource===j.channel&&[mt.get(String(Tt.source))?.resource,mt.get(String(Tt.target))?.resource].includes(j.resource));j.line.material.opacity=_t?.85:.11}),Mt.forEach(j=>{j.width=j.element.offsetWidth,j.height=j.element.offsetHeight})}it.forEach(ae=>{ae.ring.quaternion.copy(U.quaternion),ae.state==="running"?(ae.mesh.rotation.y=ue*.85,ae.ring.scale.setScalar(1+Math.sin(ue*4)*.1)):ae.ring.scale.setScalar(1)}),A.forEach((ae,Cn)=>{const w=Ge[Math.floor(Cn/3)],W=w&&qt[mt.get(String(w.source))?.resource],ot=w&&qt[mt.get(String(w.target))?.resource];if(ae.visible=!!(w&&W&&ot),!ae.visible)return;const tt=((Je-w.start)/Math.max(1e-4,w.end-w.start)+Cn%3*.18)%1,j=pn(w.resource),_t=Gt.find(It=>It.resource===mt.get(String(w.source))?.resource&&It.channel===j),Tt=Gt.find(It=>It.resource===mt.get(String(w.target))?.resource&&It.channel===j);if(!_t||!Tt){ae.visible=!1;return}tt<.5?ae.position.lerpVectors(_t.start,_t.end,tt*2):ae.position.lerpVectors(Tt.end,Tt.start,(tt-.5)*2),ae.position.y+=.045,ae.material.color.set(Ki[j%Ki.length])}),kt.forEach(ae=>{const Cn=ae.index===L,w=Ee?.servers?.find(tt=>tt.resource===ae.index),W=Cn?Ge.length>0:w?.activeTask!=null;if(ae.points.visible=Ct.smoke&&!Fe&&(Cn?W&&pn(Ee?.network?.powerW)>0:pn(w?.powerW)>0),!ae.points.visible)return;const ot=W?42:13;ae.points.geometry.setDrawRange(0,ot),ae.points.material.opacity=W?.32:.15,ae.points.material.size=W?.66:.39;for(let tt=0;tt<ot;tt++){const j=(ue*(W?.33:.18)+tt/ot+ae.index*.117)%1,_t=tt*2.399+ae.index,Tt=.1+j*(W?.48:.23);ae.data[tt*3]=ae.position.x+Math.cos(_t)*Tt+j*.25,ae.data[tt*3+1]=ae.position.y+j*(W?1.55:.85),ae.data[tt*3+2]=ae.position.z+Math.sin(_t)*Tt}ae.points.geometry.attributes.position.needsUpdate=!0});const We=[];Mt.forEach(ae=>{ee.copy(ae.point).project(U);const Cn=ee.z>=-1&&ee.z<=1&&Math.abs(ee.x)<1.16&&Math.abs(ee.y)<1.16;if(ae.element.style.visibility=Cn?"visible":"hidden",!Cn)return;let w=(ee.x*.5+.5)*Nt,W=(-ee.y*.5+.5)*ce;const ot=(ae.width||55)/2,tt=ae.height||28;w=Or(w,ot+4,Math.max(ot+4,Nt-ot-4));for(let j=0;j<4&&We.some(Tt=>w+ot>Tt.left&&w-ot<Tt.right&&W+tt>Tt.top&&W<Tt.bottom);j++)W+=j%2?-tt*2:tt;W=Or(W,32,Math.max(32,ce-tt-20)),We.push({left:w-ot,right:w+ot,top:W,bottom:W+tt}),ae.element.style.transform=`translate3d(${Math.round(w)}px,${Math.round(W)}px,0) translateX(-50%)`}),B.render(R,U)};return xt=requestAnimationFrame(Ce),S(!0),()=>{cancelAnimationFrame(xt),wt.disconnect(),H.dispose(),x.current=null,V.removeEventListener("pointerdown",bt),V.removeEventListener("pointerup",Bt),V.removeEventListener("pointercancel",ne),V.removeEventListener("webglcontextlost",Qt);const Ut=new Set,Ct=new Set;R.traverse(Zt=>{Zt.geometry&&Ut.add(Zt.geometry),Zt.material&&(Array.isArray(Zt.material)?Zt.material:[Zt.material]).forEach(Ze=>Ct.add(Ze))}),Ut.forEach(Zt=>Zt.dispose()),Ct.forEach(Zt=>Zt.dispose()),pt.dispose(),B.dispose(),B.forceContextLoss(),V.remove(),Q.remove()}},[r,t,L,C]),Pt.useEffect(()=>{x.current?.reset()},[m]);const O=c==="zh";return E.jsxs("div",{className:"carbon-scene","data-renderer":y?"fallback":T?"webgl":"loading",children:[E.jsx("div",{className:"carbon-scene-stage",ref:g,"aria-hidden":y||void 0}),y?E.jsx(Cw,{dag:r,result:t,ledger:v,lang:c,onSelect:p}):E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"carbon-scene-key",children:[E.jsxs("span",{children:[E.jsx("i",{}),O?"任务 DAG":"Task DAG"]}),E.jsx("small",{children:O?"时长 · tu":"Duration · tu"})]}),E.jsxs("div",{className:"carbon-scene-controls","aria-label":O?"3D 视角控制":"3D camera controls",children:[E.jsx("button",{type:"button",onClick:()=>x.current?.zoom(.82),title:O?"放大":"Zoom in","aria-label":O?"放大 3D 场景":"Zoom in 3D scene",children:"＋"}),E.jsx("button",{type:"button",onClick:()=>x.current?.zoom(1.22),title:O?"缩小":"Zoom out","aria-label":O?"缩小 3D 场景":"Zoom out 3D scene",children:"−"}),E.jsx("button",{type:"button",onClick:()=>x.current?.reset(),title:O?"重置视角":"Reset view","aria-label":O?"重置 3D 视角":"Reset 3D view",children:"↺"})]}),E.jsx("div",{className:"carbon-scene-caption",children:O?"拖动旋转 · 滚轮缩放 · 点击查看":"Drag to orbit · Scroll to zoom · Click to inspect"}),E.jsx("div",{className:"carbon-scene-smoke-note",children:O?"烟雾表示功率状态":"Plumes indicate power state"})]})]})}const Uw="modulepreload",Lw=function(r,t){return new URL(r,t).href},yv={},Nw=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};const f=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(_=>{if(_=Lw(_,s),_ in yv)return;yv[_]=!0;const g=_.endsWith(".css"),x=g?'[rel="stylesheet"]':"";if(s)for(let b=f.length-1;b>=0;b--){const T=f[b];if(T.href===_&&(!g||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${x}`))return;const y=document.createElement("link");if(y.rel=g?"stylesheet":Uw,g||(y.as="script"),y.crossOrigin="",y.href=_,m&&y.setAttribute("nonce",m),document.head.appendChild(y),g)return new Promise((b,T)=>{y.addEventListener("load",b),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})},Ow=200*1024*1024,Pw=600*1e3;function zw(r){return["video/mp4;codecs=avc1.42E028","video/mp4;codecs=avc1","video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm"].find(t=>r(t))||""}function Sv(r,t=new Date){const i=r.toLowerCase().startsWith("video/mp4")?"mp4":"webm";return`CARELab-Carbon-Studio-${t.toISOString().replace(/[:.]/g,"-")}.${i}`}async function Mv(r){const t=new Uint8Array(await r.slice(0,4096).arrayBuffer()),i=new DataView(t.buffer,t.byteOffset,t.byteLength);for(let s=0;s+12<=t.length;){const l=i.getUint32(s);if(String.fromCharCode(...t.slice(s+4,s+8))==="ftyp"&&l>=16&&s+16<=t.length)return!0;if(l<8||l>t.length-s)break;s+=l}return!1}class Iw{constructor(t,i,s=5e6,l=()=>{},c={}){const f=c.Recorder||globalThis.MediaRecorder;this.now=c.now||(()=>performance.now()),this.maxBytes=c.maxBytes||Ow,this.stream=t,this.changed=l,this.bytes=0,this.chunks=[],this.elapsed=0,this.since=null,this.reason="",this.state="idle",this.settled=!1,this.recorder=new f(t,{mimeType:i,videoBitsPerSecond:s}),this.done=new Promise((h,m)=>{this.resolve=h,this.reject=m}),this.done.catch(()=>{}),this.onEnded=()=>this.stop("sharing-ended"),this.stream.getVideoTracks().forEach(h=>h.addEventListener("ended",this.onEnded)),this.recorder.ondataavailable=h=>{this.settled||!h.data?.size||(this.chunks.push(h.data),this.bytes+=h.data.size,this.changed(),this.bytes>=this.maxBytes&&this.stop("limit"))},this.recorder.onerror=()=>{this.reason||="encoder",this.freezeClock(),this.state="stopping",this.changed()},this.recorder.onstop=()=>this.finish(i)}freezeClock(){this.since!==null&&(this.elapsed+=Math.max(0,this.now()-this.since)),this.since=null}duration(){return this.elapsed+(this.since===null?0:Math.max(0,this.now()-this.since))}start(){if(this.state==="idle")try{this.recorder.start(1e3),this.state="recording",this.since=this.now(),this.changed()}catch(t){throw this.cleanup(),this.state="stopped",this.settled=!0,this.reject(t),t}}pause(){this.state==="recording"&&(this.recorder.pause(),this.freezeClock(),this.state="paused",this.changed())}resume(){this.state==="paused"&&(this.recorder.resume(),this.since=this.now(),this.state="recording",this.changed())}stop(t=""){if(!(this.settled||this.state==="stopping")){if(this.reason||=t,this.freezeClock(),this.state="stopping",this.recorder.state!=="inactive")try{this.recorder.stop()}catch{this.finish(this.recorder.mimeType)}else this.finish(this.recorder.mimeType);this.changed()}}cleanup(){this.stream.getVideoTracks().forEach(t=>t.removeEventListener("ended",this.onEnded)),this.stream.getTracks().forEach(t=>t.stop())}finish(t){if(this.settled)return;this.settled=!0,this.freezeClock(),this.cleanup(),this.state="stopped";const i=new Blob(this.chunks,{type:this.recorder.mimeType||t});this.chunks=[],this.changed(),i.size?this.resolve({blob:i,duration:this.elapsed,reason:this.reason}):this.reject(new Error("empty"))}}async function Bw(r,{onProgress:t=()=>{},signal:i,load:s=()=>Nw(()=>import("./index-DrM87vF9.js"),[],import.meta.url)}={}){const l=()=>{if(i?.aborted)throw new DOMException("Conversion canceled","AbortError")};if(l(),await Mv(r))return t(1),r.type==="video/mp4"?r:new Blob([r],{type:"video/mp4"});const{Input:c,Output:f,Conversion:h,ALL_FORMATS:m,BlobSource:p,BufferTarget:_,Mp4OutputFormat:g}=await s();l();const x=new c({formats:m,source:new p(r)}),y=new f({format:new g,target:new _});let b;const T=()=>{b?.cancel().catch(()=>{})};try{if(b=await h.init({input:x,output:y,video:{codec:"avc"},audio:{discard:!0}}),l(),!b.isValid)throw new Error("mp4-unsupported");i?.addEventListener("abort",T,{once:!0}),b.onProgress=v=>t(Math.max(0,Math.min(1,v))),await b.execute(),l();const S=new Blob([y.target.buffer],{type:"video/mp4"});if(!await Mv(S))throw new Error("invalid-mp4");return t(1),S}catch(S){throw b&&await b.cancel().catch(()=>{}),S}finally{i?.removeEventListener("abort",T),x.dispose()}}const rd=r=>`${Math.floor(r/60).toString().padStart(2,"0")}:${Math.floor(r%60).toString().padStart(2,"0")}`;function Fw({lang:r="en"}){const t=r==="zh",i=(X,dt)=>t?X:dt,[s,l]=Pt.useState(!1),[c,f]=Pt.useState("idle"),[h,m]=Pt.useState(0),[p,_]=Pt.useState(0),[g,x]=Pt.useState("1080"),[y,b]=Pt.useState(0),[T,S]=Pt.useState(""),[v,N]=Pt.useState(null),[L,C]=Pt.useState(!1),O=Pt.useRef(null),z=Pt.useRef(null),B=Pt.useRef(!0),V=Pt.useRef(null),R=Pt.useRef([]),U=Pt.useRef(!1),H=!!globalThis.navigator?.mediaDevices?.getDisplayMedia&&typeof MediaRecorder<"u",K=H?zw(X=>MediaRecorder.isTypeSupported(X)):"",rt=c==="recording"||c==="paused",ct=c!=="idle";Pt.useEffect(()=>(B.current=!0,()=>{B.current=!1,V.current?.abort(),z.current?.stop(),z.current?.stream.getTracks().forEach(X=>X.stop()),R.current.forEach(X=>URL.revokeObjectURL(X))}),[]),Pt.useEffect(()=>{if(!s)return;const X=mt=>{O.current?.contains(mt.target)||l(!1)},dt=mt=>{mt.key==="Escape"&&l(!1)};return document.addEventListener("pointerdown",X),document.addEventListener("keydown",dt),()=>{document.removeEventListener("pointerdown",X),document.removeEventListener("keydown",dt)}},[s]),Pt.useEffect(()=>{if(!rt)return;const X=setInterval(()=>{const dt=z.current;dt&&(m(dt.duration()/1e3),dt.duration()>=Pw&&dt.stop("limit"))},200);return()=>clearInterval(X)},[rt]),Pt.useEffect(()=>{if(!ct&&(!v||L))return;const X=dt=>{dt.preventDefault(),dt.returnValue=""};return window.addEventListener("beforeunload",X),()=>window.removeEventListener("beforeunload",X)},[ct,v,L]);function ut(X){R.current.forEach(mt=>URL.revokeObjectURL(mt)),R.current=[];const dt=URL.createObjectURL(X.blob||X.rawBlob);R.current.push(dt),N({...X,url:dt}),C(!1)}async function F(X){const dt=new AbortController;V.current=dt,f("converting"),b(0);try{const mt=await Bw(X.rawBlob||X.blob,{signal:dt.signal,onProgress:Ot=>{B.current&&b(Math.round(Ot*100))}});if(!B.current)return;ut({blob:mt,duration:X.duration,filename:Sv("video/mp4")}),(X.reason==="limit"||X.reason==="encoder")&&S(X.reason)}catch(mt){if(!B.current)return;ut({rawBlob:X.rawBlob||X.blob,duration:X.duration}),S(mt?.name==="AbortError"?"conversion-canceled":"conversion")}finally{V.current=null,B.current&&(f("idle"),l(!0))}}async function nt(){if(ct||U.current||!H||!K)return;U.current=!0,f("choosing"),S(""),b(0);let X;try{const dt=g==="1080";if(X=await navigator.mediaDevices.getDisplayMedia({video:{width:{max:dt?1920:1280},height:{max:dt?1080:720},frameRate:{max:30}},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude"}),!B.current){X.getTracks().forEach(qt=>qt.stop());return}const mt=new Iw(X,K,dt?5e6:25e5,()=>{B.current&&(_(mt.bytes),f(["stopping","stopped"].includes(mt.state)?"finalizing":mt.state))});z.current=mt,mt.start(),m(0),_(0),l(!1);const Ot=await mt.done;if(!B.current)return;m(Ot.duration/1e3),await F(Ot)}catch(dt){X?.getTracks().forEach(mt=>mt.stop()),B.current&&(S(["NotAllowedError","AbortError"].includes(dt?.name)?"permission":"capture"),f("idle"),l(!0))}finally{U.current=!1}}function Q(X=!1){const dt=X?v?.rawBlob:v?.blob;if(!dt)return;const mt=document.createElement("a");mt.href=v.url,mt.download=Sv(dt.type),document.body.appendChild(mt),mt.click(),mt.remove(),C(!0)}function Mt(){c==="paused"?z.current?.resume():z.current?.pause()}const P={permission:i("已取消画面选择，未开始录制。点击开始录制后，选择当前标签页并允许共享。","Screen selection was canceled or denied. To record, start again and choose this tab in the browser dialog."),capture:i("未能完成录制。请在桌面 Chrome 或 Edge 中重试，并允许共享当前标签页。","Recording could not complete. Retry in desktop Chrome or Edge and allow sharing of this tab."),conversion:i("此环境未能生成 MP4，原始片段仍保留。可重试转换，或下载原始 WebM 后转换；请优先使用新版桌面 Chrome / Edge。","MP4 conversion failed in this environment. The original clip is preserved: retry conversion or download the original WebM. A current desktop Chrome or Edge is recommended."),"conversion-canceled":i("已取消 MP4 转换，原始片段仍保留，可以再次转换。","MP4 conversion canceled. The original clip is preserved for another attempt."),limit:i("已达到单次 10 分钟或 200 MB 上限，录制已结束。","Recording ended at the 10-minute or 200 MB limit."),encoder:i("编码曾中断，已保留收到的视频片段。请预览后保存。","Encoding was interrupted. Received footage is preserved; preview it before saving.")};return E.jsxs("div",{className:"studio-recorder",ref:O,children:[E.jsxs("button",{className:`record-trigger ${rt?"record-active":""}`,onClick:()=>l(X=>!X),"aria-expanded":s,"aria-controls":"studio-record-panel",title:i("录制整个演示界面","Record the full demo interface"),children:[rt?E.jsx("i",{className:c==="paused"?"paused":""}):E.jsx(jS,{size:16}),E.jsx("span",{children:rt?rd(h):i("录屏","Record")}),!rt&&ct&&E.jsx(Rv,{className:"spin",size:12})]}),rt&&E.jsxs("div",{className:"record-inline-controls",children:[E.jsx("button",{onClick:Mt,title:c==="paused"?i("继续录制","Resume recording"):i("暂停录制","Pause recording"),"aria-label":c==="paused"?i("继续录制","Resume recording"):i("暂停录制","Pause recording"),children:c==="paused"?E.jsx(tl,{size:14}):E.jsx(ud,{size:14})}),E.jsx("button",{onClick:()=>z.current?.stop(),className:"record-stop",title:i("结束录制","Stop recording"),"aria-label":i("结束录制","Stop recording"),children:E.jsx(fd,{size:13})})]}),s&&E.jsxs("section",{id:"studio-record-panel",className:"record-panel","aria-label":i("界面录屏","Screen recording"),children:[E.jsxs("div",{className:"record-panel-heading",children:[E.jsx("h2",{children:i("界面录屏","Screen recording")}),E.jsx("button",{className:"icon-button",onClick:()=>l(!1),"aria-label":i("收起录屏面板","Close recording panel"),children:E.jsx(hd,{size:16})})]}),E.jsx("p",{children:i("选择当前标签页，录制整个可见界面。可先点击右上角全屏，再开始录制；不采集声音；暂停录屏不会暂停仿真。","Choose this tab to record its entire visible interface. You can enter full screen first. No audio is captured. Recording pause does not pause the simulation.")}),E.jsxs("div",{className:"record-settings",children:[E.jsxs("label",{children:[i("画面质量","Quality"),E.jsxs("select",{disabled:ct,value:g,onChange:X=>x(X.target.value),children:[E.jsx("option",{value:"1080",children:"1080p · 30 FPS"}),E.jsx("option",{value:"720",children:"720p · 30 FPS"})]})]}),E.jsxs("span",{children:["MP4",E.jsx("small",{children:"≤ 30 FPS"})]})]}),(!H||!K)&&E.jsx("p",{className:"record-notice",children:i("当前浏览器不支持屏幕录制，请用桌面 Chrome 或 Edge 打开此网址。","Screen recording is unavailable here. Open this URL in desktop Chrome or Edge.")}),!!K&&!K.startsWith("video/mp4")&&E.jsx("p",{className:"record-small",children:i("此浏览器先录制 WebM，结束后在本机转换为 MP4。","This browser records WebM first, then converts it locally to MP4.")}),E.jsxs("div",{className:"record-buttons",children:[rt?E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:Mt,children:[c==="paused"?E.jsx(tl,{size:14}):E.jsx(ud,{size:14}),c==="paused"?i("继续","Resume"):i("暂停","Pause")]}),E.jsxs("button",{className:"record-stop",onClick:()=>z.current?.stop(),children:[E.jsx(fd,{size:13}),i("结束录制","Stop recording")]})]}):E.jsxs("button",{className:"primary",disabled:ct||!H||!K,onClick:nt,children:[E.jsx(DS,{size:13}),c==="choosing"?i("等待选择画面…","Choose a screen…"):c==="finalizing"?i("正在整理视频…","Finalizing…"):c==="converting"?i(`正在生成 MP4 · ${y}%`,`Creating MP4 · ${y}%`):i("开始录制","Start recording")]}),c==="converting"&&E.jsx("button",{onClick:()=>V.current?.abort(),children:i("取消转换","Cancel conversion")})]}),rt&&E.jsxs("div",{className:"record-state",children:[E.jsxs("span",{children:[c==="paused"?i("已暂停","Paused"):"REC"," · ",rd(h)]}),E.jsxs("span",{children:[(p/1048576).toFixed(1)," MB"]})]}),E.jsx("p",{className:"record-small",children:i("视频仅保留在本机，不上传。单段最多 10 分钟 / 200 MB。结束后点击“保存 MP4”。","Video stays on your device. Up to 10 minutes / 200 MB per clip. After stopping, click Save MP4.")}),!!T&&E.jsx("p",{role:"status",className:"record-notice",children:P[T]}),!!v&&!ct&&E.jsxs("div",{className:"record-result",children:[E.jsx("video",{src:v.url,controls:!0,playsInline:!0,preload:"metadata","aria-label":i("录屏预览","Recording preview")}),E.jsxs("div",{className:"record-result-meta",children:[E.jsx("span",{children:rd(v.duration/1e3)}),E.jsxs("span",{children:[((v.blob||v.rawBlob).size/1048576).toFixed(1)," MB"]}),E.jsx("span",{children:v.blob?"MP4":"WebM"})]}),E.jsx("div",{className:"record-buttons",children:v.blob?E.jsxs("button",{className:"primary",onClick:()=>Q(),children:[E.jsx(cd,{size:14}),i("保存 MP4","Save MP4")]}):E.jsxs(E.Fragment,{children:[E.jsxs("button",{onClick:()=>{S(""),F(v)},children:[E.jsx($c,{size:14}),i("重试 MP4 转换","Retry MP4")]}),E.jsxs("button",{onClick:()=>Q(!0),children:[E.jsx(cd,{size:14}),i("原始 WebM","Original WebM")]})]})}),L&&E.jsx("p",{className:"record-saved",role:"status",children:i("已发起下载，请在浏览器下载列表中确认。","Download requested. Check your browser downloads.")})]})]})]})}const Hw=[{label:"IEEE",href:"https://ieeexplore.ieee.org/author/37089678912"},{label:"Google Scholar",href:"https://scholar.google.com/citations?user=NA8egm4AAAAJ&hl=en"},{label:"GitHub",href:"https://github.com/wilixx"}],Ev="./wechat-academic.png",Gw="https://www.linkedin.com/in/binquan-guo-754078371/";function bv(){return E.jsxs("svg",{className:"studio-wechat-icon",width:"20",height:"20",viewBox:"0 0 28 24","aria-hidden":"true",focusable:"false",children:[E.jsx("path",{fill:"currentColor",d:"M11 1C5.5 1 1 4.5 1 8.8c0 2.4 1.4 4.5 3.6 5.9l-.9 3.1 3.8-1.9c.8.2 1.7.4 2.6.5a7.5 7.5 0 0 1-.5-2.7c0-4.6 4.4-8.3 9.8-8.3h.6C18.4 2.8 15 1 11 1Zm-3.2 4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm6.5 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"}),E.jsx("path",{fill:"currentColor",d:"M19.4 7C14.8 7 11 10 11 13.7s3.8 6.7 8.4 6.7c1.1 0 2.2-.2 3.2-.5l3.1 1.6-.7-2.7c1.8-1.2 2.8-3 2.8-5.1C27.8 10 24 7 19.4 7Zm-2.8 3.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm5.6 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"})]})}function kw({lang:r="en"}){const t=r==="zh",i=Pt.useRef(null),s=Pt.useRef(null),l=Pt.useRef(null),c=Pt.useRef(null),f=Pt.useRef(!1),[h,m]=Pt.useState(!1),[p,_]=Pt.useState(!1);Pt.useEffect(()=>()=>window.clearTimeout(c.current),[]);const g=()=>{window.clearTimeout(c.current),i.current?.close()},x=()=>{if(!(!i.current?.open||h)){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return g();m(!0),c.current=window.setTimeout(g,240)}},y=()=>{!i.current||i.current.open||(window.clearTimeout(c.current),m(!1),f.current=!1,i.current.showModal(),_(!0),l.current?.focus({preventScroll:!0}))},b=S=>{const v=i.current.getBoundingClientRect();return S.clientX<v.left||S.clientX>v.right||S.clientY<v.top||S.clientY>v.bottom},T=()=>{window.clearTimeout(c.current),m(!1),_(!1),f.current=!1,s.current?.focus({preventScroll:!0})};return E.jsxs("section",{className:"studio-contact","aria-label":t?"学术主页与联系":"Academic profiles and contact",children:[E.jsxs("div",{className:"studio-contact-name",children:[E.jsx("span",{children:"Binquan Guo"}),E.jsx("button",{className:"studio-contact-trigger",ref:s,type:"button",onClick:y,title:t?"微信":"WeChat","aria-label":t?"通过微信联系":"Connect on WeChat","aria-haspopup":"dialog","aria-controls":"studio-contact-dialog","aria-expanded":p,children:E.jsx(bv,{})})]}),E.jsx("nav",{className:"studio-profile-links","aria-label":t?"学术主页":"Academic profiles",children:Hw.map(S=>E.jsxs("a",{href:S.href,target:"_blank",rel:"noopener noreferrer",children:[S.label==="GitHub"&&E.jsx(NS,{size:11,"aria-hidden":"true"}),S.label,E.jsx(r0,{size:10,"aria-hidden":"true"})]},S.label))}),E.jsxs("a",{className:"studio-contact-email",href:"mailto:bqguo@stu.xidian.edu.cn",children:[E.jsx(OS,{size:11,"aria-hidden":"true"}),E.jsx("span",{children:"bqguo@stu.xidian.edu.cn"})]}),E.jsxs("dialog",{className:`studio-contact-dialog${h?" is-closing":""}`,id:"studio-contact-dialog",ref:i,"aria-labelledby":"studio-contact-title","aria-describedby":"studio-contact-hint",onCancel:S=>{S.preventDefault(),x()},onClose:T,onPointerDown:S=>{f.current=S.target===i.current&&b(S)},onPointerCancel:()=>{f.current=!1},onClick:S=>{f.current&&S.target===i.current&&b(S)&&x(),f.current=!1},onAnimationEnd:S=>{S.target===i.current&&S.animationName==="studio-contact-out"&&g()},children:[E.jsx("button",{className:"studio-contact-close",ref:l,type:"button",onClick:x,"aria-label":t?"关闭联系方式":"Close contact dialog",children:"×"}),E.jsxs("h2",{id:"studio-contact-title",children:[E.jsx(bv,{}),E.jsx("span",{children:t?"微信":"WeChat"})]}),E.jsx("p",{id:"studio-contact-hint",children:t?"扫描二维码，交流联系。":"Scan the QR code to connect."}),E.jsx("img",{className:"studio-contact-qr",src:Ev,alt:t?"Binquan Guo 的微信联系二维码":"Binquan Guo's WeChat contact QR code",width:"410",height:"410",loading:"lazy",decoding:"async"}),E.jsxs("div",{className:"studio-contact-actions",children:[E.jsx("a",{href:Ev,download:"binquan-guo-wechat.png",children:t?"保存二维码":"Save QR code"}),E.jsxs("a",{className:"studio-contact-linkedin",href:Gw,target:"_blank",rel:"noopener noreferrer","aria-label":t?"在新标签页打开 LinkedIn 主页":"Open LinkedIn profile in a new tab",children:["LinkedIn ",E.jsx(r0,{size:12,"aria-hidden":"true"})]})]})]})]})}function Vw({targetRef:r,layoutKey:t,lang:i}){const s=Pt.useRef(null),[l,c]=Pt.useState({left:0,width:0,content:0,visible:!1});return Pt.useEffect(()=>{const f=r.current,h=s.current;if(!f||!h)return;const m=()=>{const x=f.getBoundingClientRect();c({left:x.left,width:x.width,content:f.scrollWidth,visible:f.scrollWidth>f.clientWidth+2}),Math.abs(h.scrollLeft-f.scrollLeft)>1&&(h.scrollLeft=f.scrollLeft)},p=()=>{Math.abs(h.scrollLeft-f.scrollLeft)>1&&(h.scrollLeft=f.scrollLeft)},_=()=>{Math.abs(f.scrollLeft-h.scrollLeft)>1&&(f.scrollLeft=h.scrollLeft)},g=new ResizeObserver(m);return g.observe(f),f.addEventListener("scroll",p,{passive:!0}),h.addEventListener("scroll",_,{passive:!0}),window.addEventListener("resize",m),m(),()=>{g.disconnect(),f.removeEventListener("scroll",p),h.removeEventListener("scroll",_),window.removeEventListener("resize",m)}},[r,t]),E.jsx("div",{ref:s,className:"comparison-scrollbar",tabIndex:l.visible?0:-1,role:"region","aria-label":i==="zh"?"左右滚动调度方法":"Scroll scheduling methods horizontally",title:i==="zh"?"拖动底部滚动条，对照不同方法":"Drag to compare scheduling methods",style:{left:l.left,width:l.width,visibility:l.visible?"visible":"hidden"},children:E.jsx("div",{style:{width:l.content,height:1}})})}const Tv=["#5fc9ba","#73a7ff","#e1b969","#b298e9","#e48d9a","#73c2df","#b1c47a","#de9a6f"],ap=(r,t)=>Tv[(t?Math.max(0,t.nodes.findIndex(i=>i.id===r)):Number(r))%Tv.length],xn=(r,t=2)=>Number.isFinite(r)?Number(r).toFixed(t):"—";function jw(r,t=6){const i=Math.max(1e-4,r/t),s=10**Math.floor(Math.log10(i)),l=[1,2,5,10].find(c=>c*s>=i)*s;return Array.from({length:Math.floor(r/l)+1},(c,f)=>+(f*l).toFixed(6))}function Xw({dag:r,result:t,time:i,maxTime:s,lang:l,onSeek:c}){const f=r.resources.servers+r.resources.channels,h=640,m=55,p=16,_=f*25+32,g=(h-m-p)/s,x=Math.min(i,t.completion_time),y=l==="zh",b=[...t.tasks.map(T=>({...T,row:T.resource,label:`T${T.id}`,col:ap(T.id,r)})),...t.flows.filter(T=>T.end>T.start).map(T=>({...T,row:r.resources.servers+T.resource,label:`${T.source}→${T.target}`,col:ap(T.target,r)}))];return E.jsxs("svg",{className:"gantt",viewBox:`0 0 ${h} ${_}`,role:"img","aria-label":y?"计算与网络甘特图，点击可定位时间":"Compute and network Gantt, click to seek",onClick:T=>{const S=T.currentTarget.getBoundingClientRect(),v=(T.clientX-S.left)/S.width*h;c?.(Math.max(0,Math.min(s,(v-m)/g)))},children:[Array.from({length:f},(T,S)=>E.jsxs("g",{children:[E.jsx("text",{x:"2",y:S*25+17,className:"axis-label",children:S<r.resources.servers?`VM${S+1}`:`CH${S-r.resources.servers+1}`}),E.jsx("rect",{x:m,y:S*25+3,width:t.completion_time*g,height:"20",rx:"2",fill:"#172c39"})]},S)),jw(s).map(T=>E.jsxs("g",{children:[E.jsx("line",{x1:m+T*g,x2:m+T*g,y1:"0",y2:_-22,stroke:"#2b3e4d",strokeDasharray:"2 4"}),E.jsx("text",{x:m+T*g,y:_-6,textAnchor:"middle",className:"axis-label",children:T})]},T)),b.map((T,S)=>E.jsxs("g",{children:[E.jsx("rect",{x:m+T.start*g,y:T.row*25+3,width:Math.max(.4,(T.end-T.start)*g),height:"20",rx:"3",fill:T.col,opacity:T.start>=x?.28:.92}),x>T.start&&x<T.end&&E.jsx("rect",{x:m+x*g,y:T.row*25+3,width:(T.end-x)*g,height:"20",fill:"#08131e",opacity:".6"}),(T.end-T.start)*g>19&&E.jsx("text",{x:m+(T.start+T.end)/2*g,y:T.row*25+17,textAnchor:"middle",className:"task-label",children:T.label}),E.jsxs("title",{children:[T.label," · ",xn(T.start),"–",xn(T.end)," tu"]})]},S)),E.jsx("line",{x1:m+x*g,x2:m+x*g,y1:"0",y2:_-23,stroke:"#f9d284",strokeWidth:"2"}),E.jsx("text",{x:h-1,y:_-6,textAnchor:"end",className:"axis-label",children:"tu"})]})}function Ww({dag:r,result:t,config:i,time:s,maxTime:l,maxCarbon:c,lang:f}){const y=569/l,b=77/Math.max(c,1e-5),T=Array.from(new Set([0,t.completion_time,...t.tasks.flatMap(C=>[C.start,C.end])])).sort((C,O)=>C-O),S=Math.min(s,t.completion_time),v=[...T.filter(C=>C<S),S],N=[...T,l],L=C=>C.map((O,z)=>`${z?"L":"M"}${55+O*y},${86-Fs(r,t,i,O).totalG*b}`).join(" ");return E.jsxs("svg",{className:"carbon-curve",viewBox:"0 0 640 111",role:"img","aria-label":f==="zh"?"累计碳排放随时间变化":"Cumulative operational carbon over time",children:[[0,.5,1].map(C=>E.jsxs("g",{children:[E.jsx("line",{x1:55,x2:624,y1:86-77*C,y2:86-77*C,stroke:"#20333f",strokeDasharray:"2 4"}),E.jsx("text",{x:47,y:86-77*C+4,textAnchor:"end",className:"axis-label",children:xn(c*C,2)})]},C)),E.jsx("path",{d:L(N),fill:"none",stroke:"#60dbc2",strokeWidth:"1.3",opacity:".2",strokeDasharray:"4 4"}),E.jsx("path",{d:`${L(v)} L${55+S*y},86 L55,86 Z`,fill:"#58cfb5",opacity:".08"}),E.jsx("path",{d:L(v),fill:"none",stroke:"#66e3c4",strokeWidth:"2.5"}),E.jsx("line",{x1:55+S*y,x2:55+S*y,y1:9,y2:86,stroke:"#f9d284",strokeDasharray:"3 3"}),E.jsx("circle",{cx:55+S*y,cy:86-Fs(r,t,i,S).totalG*b,r:"3.5",fill:"#b9ffeb"}),E.jsx("text",{x:55,y:"105",className:"axis-label",children:"0"}),E.jsxs("text",{x:624,y:"105",textAnchor:"end",className:"axis-label",children:[xn(l,1)," tu"]})]})}function qw({ledger:r,config:t,lang:i}){const s=t.pue*t.ci/36e5,l=r.servers.reduce((_,g)=>_+(g.busySeconds+g.idleSeconds)*t.idleW*s,0),c=r.servers.reduce((_,g)=>_+g.busySeconds*(t.busyW-t.idleW)*s,0),f=r.network.carbonG,h=Math.max(r.totalG,1e-12),m=i==="zh",p=[[m?"计算增量":"Compute",c,"#67d8c1"],[m?"VM 基础功耗":"VM baseline",l,"#749fdb"],[m?"网络预留":"Network",f,"#c4a2e9"]];return E.jsxs("div",{className:"breakdown",children:[E.jsx("div",{className:"stacked-bar",children:p.map(([_,g,x])=>E.jsx("span",{style:{width:`${g/h*100}%`,background:x},title:`${_}: ${xn(g,4)} gCO₂e`},_))}),E.jsx("div",{className:"breakdown-values",children:p.map(([_,g,x])=>E.jsxs("span",{children:[E.jsx("i",{style:{background:x}}),_,E.jsx("b",{children:xn(g,3)})]},_))})]})}const Yw=[["demo","Presentation example","演示样例"],["mapreduce","MapReduce","映射与汇聚"],["forkjoin","Fork–join","并行与汇合"],["layered","Layered workflow","分层工作流"],["diamond","Diamond","菱形依赖"],["pipeline","Pipeline","串行流水线"],["tree","Tree","树状任务"],["random","Random DAG","随机 DAG"],["independent","Independent batch","独立任务批次"]],zr={list:["List scheduling","List 调度","#77aafa"],random:["Random scheduling","随机调度","#c5a5f6"],aware:["Network-aware List","通信感知 List","#efc17a"],reserve:["CARE Reserve search","CARE 预留搜索","#61e2bd"],milp:["Exact MILP · GLPK","精确 MILP · GLPK","#e692aa"],serial:["Serial scheduling","串行调度","#8ea5b7"]},Jo=["list","random","aware","reserve","milp","serial"],od={...ll,servers:3,channels:2,idleW:70,busyW:320,networkW:25,pue:1.2,ci:400,tuSeconds:1,seed:12,milpTimeLimit:5},ld=r=>JSON.parse(JSON.stringify(r));function Fi({label:r,value:t,onChange:i,min:s,max:l,step:c=1,suffix:f}){return E.jsxs("label",{className:"field",children:[E.jsx("span",{children:r}),E.jsxs("div",{children:[E.jsx("input",{type:"number",value:t,min:s,max:l,step:c,onChange:h=>i(h.target.value===""?"":Number(h.target.value))}),f&&E.jsx("small",{children:f})]})]})}function Ma({label:r,children:t,...i}){return E.jsx("button",{className:"icon-button",title:r,"aria-label":r,...i,children:t})}function Zw({id:r,dag:t,result:i,config:s,time:l,playing:c,maxTime:f,maxCarbon:h,lang:m,showAssignments:p,smoke:_,resetKey:g,onSeek:x}){const y=m==="zh",b=zr[r],T=i?Fs(t,i,s,l):null,S=T?.finished,v=i?.status,N=i?Fs(t,i,s,i.completion_time):null,[L,C]=Pt.useState(null),O=L?.type==="task"?i?.tasks.find(z=>z.id===L.id):null;return E.jsxs("article",{className:`method-card ${S?"is-complete":""}`,style:{"--method":b[2]},"aria-label":b[y?1:0],children:[E.jsxs("header",{className:"method-card-head",children:[E.jsxs("div",{children:[E.jsx("i",{className:"method-dot"}),E.jsx("h2",{children:b[y?1:0]})]}),E.jsx("span",{className:`status ${S?"done":""}`,children:i?S?E.jsxs(E.Fragment,{children:[E.jsx(wv,{size:11}),y?"作业完成":"Completed"]}):l>0?E.jsxs(E.Fragment,{children:[E.jsx(RS,{size:11}),y?"执行中":"Executing"]}):y?"就绪":"Ready":y?"等待调度":"Pending"})]}),i?E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"card-metrics",children:[E.jsxs("div",{className:"carbon-total",children:[E.jsx("span",{children:y?"累计碳排放":"Cumulative carbon"}),E.jsxs("strong",{children:[xn(T.totalG,3),E.jsx("small",{children:"gCO₂e"})]})]}),E.jsxs("div",{className:"schedule-time",children:[E.jsx("span",{children:y?"作业完成时间":"Job completion time"}),E.jsxs("strong",{children:[xn(i.completion_time,1),E.jsx("small",{children:"tu"})]})]})]}),E.jsxs("div",{className:"method-subline",children:[E.jsxs("span",{children:[y?"最终":"Final"," ",xn(N.totalG,3)," gCO₂e"]}),E.jsxs("span",{children:[y?"算法运行":"Algorithm"," ",xn(i.runtime_ms,1)," ms"]})]}),E.jsx("div",{className:"certificate",children:v==="imported"?y?"导入方案 · 已验证可行性，最优性未经重新验证":"Imported · feasibility checked; optimality unverified":r==="milp"?v==="optimal"?y?"已证明全局最优（数值容差内）":"Global optimum certified within solver tolerances":v==="fallback"?y?"启发式回退 · 无最优性证明":"Heuristic fallback · no optimality certificate":y?"限时可行方案 · 尚未证明最优":"Time-limited feasible schedule · not certified":y?"可行启发式调度":"Feasible heuristic schedule"}),E.jsx(Dw,{dag:t,result:i,config:s,time:l,playing:c,lang:m,showAssignments:p,smoke:_,resetKey:g,comparisonEndTime:f,onSelect:C}),E.jsxs("div",{className:"scene-readout",children:[L?.type==="server"?E.jsxs("span",{children:["VM",L.resource+1," · ",xn(T.servers[L.resource]?.powerW,0)," W · ",xn(T.servers[L.resource]?.carbonG,4)," gCO₂e"]}):O?E.jsxs("span",{children:["LLM T",O.id," · VM",O.resource+1," · ",xn(O.start,1),"–",xn(O.end,1)," tu"]}):E.jsx("span",{children:y?"拖动旋转 · 滚轮缩放 · 点击任务或 VM":"Drag to orbit · scroll to zoom · click a task or VM"}),E.jsx("span",{children:S?y?"资源已释放":"Released":`${Math.min(l,i.completion_time).toFixed(1)} tu`})]}),E.jsxs("div",{className:"chart-section",children:[E.jsxs("div",{className:"chart-label",children:[E.jsx("span",{children:y?"计算 / 传输调度":"COMPUTE / TRANSFER SCHEDULE"}),E.jsx("small",{children:y?"点击甘特图定位":"Click to seek"})]}),E.jsx(Xw,{dag:t,result:i,time:l,maxTime:f,lang:m,onSeek:x})]}),E.jsxs("div",{className:"chart-section carbon-chart",children:[E.jsxs("div",{className:"chart-label",children:[E.jsx("span",{children:y?"累计碳排放":"CUMULATIVE CARBON"}),E.jsxs("small",{children:["gCO₂e · ",y?"各方法同一坐标尺度":"Shared scales"]})]}),E.jsx(Ww,{dag:t,result:i,config:s,time:l,maxTime:f,maxCarbon:h,lang:m}),E.jsx(qw,{ledger:T,config:s,lang:m})]})]}):E.jsxs("div",{className:"pending-card",children:[E.jsx(Jc,{size:42}),E.jsx("h3",{children:y?"等待该方法的调度方案":"Waiting for this schedule"}),E.jsx("p",{children:y?"选择方法后，点击“运行并播放”。":"Choose the method, then Run & play."})]})]})}function Kw(){const[r,t]=Pt.useState(()=>{try{return localStorage.getItem("carelab-carbon-studio-lang")||"zh"}catch{return"zh"}}),i=r==="zh",s=(at,Ht)=>i?Ht:at,[l,c]=Pt.useState(od),[f,h]=Pt.useState(()=>Qc()),[m,p]=Pt.useState("demo"),[_,g]=Pt.useState(()=>Qc().nodes.length),[x,y]=Pt.useState(["list","random","reserve"]),[b,T]=Pt.useState(null),[S,v]=Pt.useState({}),[N,L]=Pt.useState(!1),[C,O]=Pt.useState(null),[z,B]=Pt.useState(""),[V,R]=Pt.useState(!1),[U,H]=Pt.useState(0),[K,rt]=Pt.useState(0),[ct,ut]=Pt.useState(!1),[F,nt]=Pt.useState(1),[Q,Mt]=Pt.useState(1),[P,X]=Pt.useState(!0),[dt,mt]=Pt.useState(!1),[Ot,qt]=Pt.useState(!0),[it,yt]=Pt.useState(!0),[Dt,se]=Pt.useState(0),[Xt,oe]=Pt.useState(null),[Qe,k]=Pt.useState(!1),[ze,de]=Pt.useState(""),[le,Ft]=Pt.useState(""),He=Pt.useRef(null),Gt=Pt.useRef(null),ge=Pt.useRef(0),en=Pt.useRef(null),nn=Pt.useRef(0),I=Pt.useRef(!1),A=Pt.useRef({}),$=Pt.useRef(null),gt=Pt.useRef(null),ht=b||{dag:Pr(f,l),config:l},pt=Object.values(S),kt=pt.filter(at=>x.includes(at.method)),At=Math.max(1,...kt.map(at=>at.completion_time)),$t=Math.max(.01,...kt.map(at=>Fs(ht.dag,at,ht.config,at.completion_time).totalG)),Yt=kt.length>0;Pt.useEffect(()=>{rt(at=>Math.min(at,At))},[At]),Pt.useEffect(()=>{document.documentElement.lang=i?"zh-CN":"en";try{localStorage.setItem("carelab-carbon-studio-lang",r)}catch{}},[r]),Pt.useEffect(()=>{const at=()=>mt(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",at),()=>document.removeEventListener("fullscreenchange",at)},[]),Pt.useEffect(()=>{if(!N)return;const at=setInterval(()=>H((performance.now()-nn.current)/1e3),100);return()=>clearInterval(at)},[N]),Pt.useEffect(()=>{if(!ct||!Yt||N)return;let at=performance.now(),Ht=0,Vt;const ee=Ce=>{if(Ht+=Math.min((Ce-at)/1e3,.25)*F,at=Ce,Ht>=Q){const Ut=Math.floor(Ht/Q)*Q;Ht-=Ut,rt(Ct=>{const Zt=Math.min(At,Ct+Ut);return Zt>=At-1e-8&&ut(!1),Zt})}Vt=requestAnimationFrame(ee)};return Vt=requestAnimationFrame(ee),()=>cancelAnimationFrame(Vt)},[ct,F,Q,At,N,Yt]),Pt.useEffect(()=>(Bt(!1),()=>Gt.current?.terminate()),[]),Pt.useEffect(()=>{Xt?(gt.current=document.activeElement,$.current?.showModal()):$.current?.open&&($.current.close(),gt.current?.focus?.())},[!!Xt]);function bt(at,Ht){c(Vt=>({...Vt,[at]:Ht})),R(!0),ut(!1)}function Bt(at=!0,Ht=f,Vt=l){try{const ee=Pr(Ht,Vt);B(""),L(!0),ut(!1),R(!1),rt(0),v({}),A.current={},H(0),T({dag:ld(ee),config:ld(Vt)}),nn.current=performance.now(),I.current=at,Gt.current?.terminate();const Ce=++ge.current,Ut=new Worker(new URL(""+new URL("solver.worker-DwhLNaE3.js",import.meta.url).href,import.meta.url),{type:"module"});Gt.current=Ut;const Ct=[...Jo.filter(Zt=>Zt!=="milp"),...x.includes("milp")?["milp"]:[]];O({method:Ct[0],index:0,total:Ct.length}),Ut.onmessage=({data:Zt})=>{Zt.id===Ce&&(Zt.type==="progress"&&O(Zt),Zt.type==="result"&&(A.current={...A.current,[Zt.result.method]:Zt.result},v({...A.current})),Zt.type==="done"&&(L(!1),O(null),ut(I.current&&Object.keys(A.current).length>0),Ut.terminate(),Gt.current=null),Zt.type==="error"&&(L(!1),ut(!1),B(Zt.message||Zt.error||"Scheduling failed."),Ut.terminate(),Gt.current=null))},Ut.onerror=Zt=>{L(!1),B(Zt.message||s("The solver could not start.","调度器未能启动。")),Ut.terminate(),Gt.current=null},Ut.postMessage({id:Ce,dag:ee,config:Vt,methods:Ct})}catch(ee){B(ee.message),L(!1)}}function ne(){Gt.current?.terminate(),Gt.current=null,ge.current++,L(!1),ut(!1),O(null),B(s("Stopped. Completed schedules remain available.","已停止求解，已完成的方法仍可查看。"))}function Qt(){try{const at=m==="demo"?Qc():cx(m,Number(_),Number(l.seed));h(at),g(at.nodes.length),R(!0),ut(!1),B("")}catch(at){B(at.message)}}function Nt(){const at=Qc(),Ht={...od};h(at),c(Ht),g(at.nodes.length),p("demo"),Bt(!0,at,Ht)}function ce(at){ut(!1),rt(Math.max(0,Math.min(At,at)))}function Z(){!Yt||N||(K>=At&&rt(0),ut(at=>!at))}function Rt(){const at={schema:"carelab-carbon-studio-v1",created:new Date().toISOString(),dag:ht.dag,config:ht.config,methods:x,results:pt},Ht=URL.createObjectURL(new Blob([JSON.stringify(at,null,2)],{type:"application/json"})),Vt=document.createElement("a");Vt.href=Ht,Vt.download="carelab-carbon-workflow.json",Vt.click(),setTimeout(()=>URL.revokeObjectURL(Ht),2e3)}async function Lt(at){try{const Ht=at.target.files[0];if(!Ht)return;if(Ht.size>4e6)throw Error(s("Please use a JSON file smaller than 4 MB.","JSON 文件请小于 4 MB。"));const Vt=JSON.parse(await Ht.text()),ee=Vt.dag||Vt,Ce={...od,...ee.resources,...ee.seed===void 0?{}:{seed:ee.seed},...Vt.config},Ut=Pr(ee,Ce);if(h(Ut),c(Ce),g(Ut.nodes.length),R(!0),ut(!1),B(""),Array.isArray(Vt.results)&&Vt.results.length){const Ct={};for(const Zt of Vt.results)Jo.includes(Zt.method)&&(Tw(Ut,Zt),(!Number.isFinite(Zt.runtime_ms)||Zt.runtime_ms<0)&&(Zt.runtime_ms=0),Ct[Zt.method]={...Zt,status:"imported"});T({dag:Ut,config:Ce}),v(Ct),A.current=Ct,rt(0),R(!1),Array.isArray(Vt.methods)&&y(Vt.methods.filter(Zt=>Jo.includes(Zt)))}}catch(Ht){B(Ht.message)}finally{at.target.value=""}}function Wt(){oe(ld(f)),de(JSON.stringify(f,null,2)),Ft(""),k(!1),ut(!1)}function wt(){try{const at=Pr(Qe?JSON.parse(ze):Xt,l);h(at),g(at.nodes.length),R(!0),oe(null)}catch(at){Ft(at.message)}}const xt=ht.config.pue*ht.config.ci/36e5,Kt=ht.dag.nodes.reduce((at,Ht)=>at+Ht.duration,0)*ht.config.tuSeconds*(ht.config.busyW-ht.config.idleW),ue=xt*Kt,Pe=xt*(ht.config.servers*ht.config.idleW+ht.config.networkW)*ht.config.tuSeconds,Me=x.filter(at=>Jo.includes(at));return E.jsxs("div",{className:`app-shell ${P?"":"sidebar-hidden"} ${dt?"is-fullscreen":""}`,children:[E.jsxs("header",{className:"topbar",children:[E.jsxs("div",{className:"brand-area",children:[E.jsxs("a",{className:"home-return",href:"https://wilixx.github.io/","aria-label":s("Return to homepage","返回主页"),title:s("Return to homepage","返回主页"),children:[E.jsx(CS,{size:16}),E.jsx("span",{children:s("Home","主页")})]}),E.jsxs("a",{className:"brand",href:"#","aria-label":"CARELab Carbon Studio",children:[E.jsx("span",{className:"brand-symbol",children:E.jsx(Jc,{size:26})}),E.jsxs("span",{children:[E.jsxs("b",{children:["CARELab ",E.jsx("em",{children:"CARBON STUDIO"})]}),E.jsx("small",{children:"MULTI-STEP LLM INFERENCE"})]})]})]}),E.jsxs("div",{className:"header-statement",children:[s("Shorter workflows.","缩短工作流，")," ",E.jsx("strong",{children:s("A smaller job footprint.","减少作业碳排放。")})]}),E.jsxs("div",{className:"top-actions",children:[E.jsx(Fw,{lang:r}),E.jsx("button",{onClick:()=>t(i?"en":"zh"),className:"language-button",children:i?"EN":"中文"}),E.jsx(Ma,{label:s("Toggle full screen","切换全屏"),onClick:async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{mt(at=>!at)}},children:dt?E.jsx(zS,{size:17}):E.jsx(PS,{size:17})})]})]}),E.jsxs("aside",{className:"sidebar",children:[E.jsxs("button",{className:"primary demo-button",onClick:Nt,disabled:N,children:[E.jsx(tl,{size:16}),s("One-click demonstration","一键演示"),E.jsx("span",{children:"DAG"})]}),E.jsxs("div",{className:"sidebar-section",children:[E.jsxs("h2",{children:[E.jsx(LS,{size:15}),s("Inference workflow","推理工作流")]}),E.jsxs("label",{className:"select-field",children:[E.jsx("span",{children:s("Application structure","应用结构")}),E.jsx("select",{value:m,onChange:at=>p(at.target.value),children:Yw.map(([at,Ht,Vt])=>E.jsx("option",{value:at,children:i?Vt:Ht},at))})]}),E.jsxs("div",{className:"field-pair",children:[E.jsx(Fi,{label:s("Tasks","任务数"),value:_,onChange:g,min:2,max:24}),E.jsx(Fi,{label:s("Seed","随机种子"),value:l.seed,onChange:at=>bt("seed",at),min:0,max:999999})]}),E.jsxs("div",{className:"button-pair",children:[E.jsxs("button",{onClick:Qt,disabled:N,children:[E.jsx($c,{size:13}),s("Generate","生成")]}),E.jsxs("button",{onClick:Wt,disabled:N,children:[E.jsx(US,{size:13}),s("Edit DAG","编辑 DAG")]})]}),E.jsxs("p",{className:"sidebar-hint",children:[f.nodes.length," ",s("tasks","个计算任务")," · ",f.edges.length," ",s("dependencies","条依赖")]})]}),E.jsxs("div",{className:"sidebar-section",children:[E.jsxs("h2",{children:[E.jsx(Jc,{size:15}),s("Reserved resources","预留资源")]}),E.jsx(Fi,{label:s("Execution VMs","执行 VM 数量"),value:l.servers,onChange:at=>bt("servers",at),min:1,max:8}),E.jsx(Fi,{label:s("Network channels","网络通道数量"),value:l.channels,onChange:at=>bt("channels",at),min:1,max:4}),E.jsx(Fi,{label:s("Time unit","仿真时间单位"),value:l.tuSeconds,onChange:at=>bt("tuSeconds",at),min:.01,max:3600,step:.1,suffix:"s / tu"})]}),E.jsxs("details",{className:"sidebar-section",open:!0,children:[E.jsxs("summary",{children:[E.jsx(l0,{size:15}),s("Power & carbon","功率与碳核算")]}),E.jsx(Fi,{label:s("Idle VM","VM 空闲功率"),value:l.idleW,onChange:at=>bt("idleW",at),min:0,max:2e3,suffix:"W"}),E.jsx(Fi,{label:s("Busy VM · total","VM 计算功率 · 总值"),value:l.busyW,onChange:at=>bt("busyW",at),min:0,max:5e3,suffix:"W"}),E.jsx(Fi,{label:s("Reserved network","网络预留功率"),value:l.networkW,onChange:at=>bt("networkW",at),min:0,max:5e3,suffix:"W"}),E.jsxs("div",{className:"field-pair",children:[E.jsx(Fi,{label:"PUE",value:l.pue,onChange:at=>bt("pue",at),min:1,max:3,step:.05}),E.jsx(Fi,{label:s("Grid intensity","电网碳强度"),value:l.ci,onChange:at=>bt("ci",at),min:0,max:2e3})]}),E.jsxs("p",{className:"sidebar-hint",children:["CI: gCO₂e/kWh · ",s("Synthetic, editable profiles","可编辑的合成功率配置")]})]}),E.jsxs("details",{className:"sidebar-section advanced",children:[E.jsxs("summary",{children:[E.jsx(kS,{size:15}),s("Solver & playback","求解与播放设置")]}),E.jsx(Fi,{label:s("MILP time limit","MILP 求解时限"),value:l.milpTimeLimit,onChange:at=>bt("milpTimeLimit",at),min:1,max:30,suffix:"s"}),E.jsxs("label",{className:"select-field",children:[E.jsx("span",{children:s("Simulation step","仿真步长")}),E.jsx("select",{value:Q,onChange:at=>Mt(Number(at.target.value)),children:[.25,.5,1,2].map(at=>E.jsxs("option",{value:at,children:[at," tu"]},at))})]}),E.jsxs("label",{className:"check-row",children:[E.jsx("input",{type:"checkbox",checked:it,onChange:at=>yt(at.target.checked)}),s("Task-to-VM assignment lines","显示任务与 VM 的分配线")]}),E.jsxs("label",{className:"check-row",children:[E.jsx("input",{type:"checkbox",checked:Ot,onChange:at=>qt(at.target.checked)}),s("Activity plumes","计算与传输烟雾动画")]})]}),E.jsxs("div",{className:"sidebar-bottom",children:[E.jsxs("button",{className:"primary run-button",onClick:()=>Bt(!0),disabled:N||!x.length,children:[N?E.jsx(Rv,{className:"spin",size:16}):E.jsx(tl,{size:16})," ",s("Run & play","运行并播放")]}),E.jsxs("div",{className:"button-pair",children:[E.jsxs("button",{onClick:()=>en.current?.click(),disabled:N,children:[E.jsx(VS,{size:13}),s("Import","导入")]}),E.jsxs("button",{onClick:Rt,disabled:!Yt,children:[E.jsx(cd,{size:13}),s("Export","导出")]})]}),E.jsx("input",{ref:en,type:"file",accept:".json,application/json",hidden:!0,onChange:Lt}),E.jsxs("small",{children:["CARELab · ",s("Research demonstration","研究演示")]}),E.jsx(kw,{lang:r})]})]}),E.jsxs("main",{className:"workspace",children:[E.jsxs("div",{className:"workspace-heading",children:[E.jsxs("div",{className:"workspace-title",children:[E.jsx(Ma,{label:s("Toggle configuration panel","显示或隐藏配置"),onClick:()=>X(at=>!at),children:P?E.jsx(IS,{size:17}):E.jsx(BS,{size:17})}),E.jsxs("div",{children:[E.jsx("h1",{children:s("Workflow comparison","工作流调度比较")}),E.jsx("p",{children:s("One job. The same reserved resources. A shared simulation clock.","同一个作业，相同的预留资源，共用仿真时间轴。")})]})]}),E.jsxs("div",{className:"model-chip",children:[E.jsx(l0,{size:15}),E.jsx("span",{children:"C = A + B · T"})]})]}),E.jsx("div",{className:"method-selection",role:"group","aria-label":s("Visible scheduling methods","显示的调度方法"),children:Jo.map(at=>E.jsxs("label",{className:x.includes(at)?"selected":"",style:{"--method":zr[at][2]},children:[E.jsx("input",{type:"checkbox",checked:x.includes(at),onChange:Ht=>y(Vt=>Ht.target.checked?[...Vt,at]:Vt.filter(ee=>ee!==at))}),E.jsx("i",{}),zr[at][i?1:0],at==="milp"&&E.jsx("small",{children:"OPT"})]},at))}),z&&E.jsxs("div",{className:"alert",role:"alert",children:[E.jsx(o0,{size:16}),E.jsx("span",{children:z}),E.jsx("button",{onClick:()=>B(""),"aria-label":s("Dismiss","关闭提示"),children:E.jsx(hd,{size:14})})]}),V&&E.jsxs("div",{className:"notice",children:[E.jsx(FS,{size:14}),s("Configuration changed. Run again to apply it; the current replay uses its original settings.","配置已修改。点击“运行并播放”后生效；当前回放仍使用原来的配置。")]}),E.jsxs("section",{className:"playback","aria-label":s("Simulation controls","仿真播放控制"),children:[E.jsxs("div",{className:"transport",children:[E.jsx("button",{className:"play",onClick:Z,disabled:!Yt||N,title:ct?s("Pause","暂停"):s("Play","播放"),"aria-label":ct?s("Pause","暂停"):s("Play","播放"),children:ct?E.jsx(ud,{size:21}):E.jsx(tl,{size:21})}),E.jsx(Ma,{label:s("Restart replay","从头回放"),onClick:()=>{rt(0),ut(!1)},disabled:!Yt,children:E.jsx($c,{size:16})}),E.jsx(Ma,{label:s("Previous time step","上一个时间步"),onClick:()=>ce(K-Q),disabled:!Yt||N,children:E.jsx(HS,{size:16})}),E.jsx(Ma,{label:s("Next time step","下一个时间步"),onClick:()=>ce(K+Q),disabled:!Yt||N,children:E.jsx(GS,{size:16})}),E.jsxs("div",{className:"clock",children:[E.jsx("strong",{children:xn(K,2)}),E.jsxs("span",{children:["/ ",xn(At,1)," tu"]})]})]}),E.jsxs("div",{className:"time-track",children:[E.jsx("input",{type:"range","aria-label":s("Simulation time","仿真时间"),min:"0",max:At,step:"0.25",value:K,onChange:at=>ce(Number(at.target.value)),disabled:!Yt||N}),E.jsxs("div",{children:[E.jsx("span",{children:N?`${s("Scheduling","正在调度")} ${C?.method?zr[C.method]?.[i?1:0]||C.method:""} · ${xn(U,1)} s`:ct?s("Synchronized playback","同步播放中"):K>=At?s("All jobs completed","全部作业完成"):s("Paused · advance one time step to inspect","已暂停 · 可逐时间步查看")}),E.jsxs("span",{children:["1 tu = ",ht.config.tuSeconds," s"]})]})]}),E.jsxs("div",{className:"playback-options",children:[E.jsxs("label",{children:[s("Speed","速度"),E.jsx("select",{"aria-label":s("Playback speed","播放速度"),value:F,onChange:at=>nt(Number(at.target.value)),children:[.25,.5,1,2,4,8].map(at=>E.jsxs("option",{value:at,children:[at,"×"]},at))})]}),N?E.jsxs("button",{onClick:ne,children:[E.jsx(fd,{size:13}),s("Stop solver","停止求解")]}):E.jsxs("button",{onClick:()=>ce(At),disabled:!Yt,children:[s("Final state","查看最终"),E.jsx(Eh,{size:13})]}),E.jsx(Ma,{label:s("Reset all cameras","重置全部视角"),onClick:()=>se(at=>at+1),children:E.jsx($c,{size:15})})]})]}),E.jsxs("div",{className:"arena-meta",children:[E.jsxs("div",{children:[E.jsx("span",{className:"live-dot"}),ht.dag.nodes.length," ",s("tasks","个任务"),E.jsx("span",{children:"·"}),ht.config.servers," VM",E.jsx("span",{children:"·"}),ht.config.channels," ",s("shared channels","条共享通道")]}),E.jsxs("span",{children:[s("Drag panels sideways to compare more methods","横向滚动可对照更多方法"),E.jsx(Eh,{size:12})]})]}),E.jsx("section",{ref:He,className:"arena","aria-label":s("3D scheduling comparison","3D 调度对比"),style:{"--card-count":Me.length},children:Me.length?Me.map(at=>E.jsx(Zw,{id:at,dag:ht.dag,result:S[at],config:ht.config,time:K,playing:ct,maxTime:At,maxCarbon:$t,lang:r,showAssignments:it,smoke:Ot,resetKey:Dt,onSeek:ce},at)):E.jsxs("div",{className:"empty-state",children:[E.jsx(Jc,{size:40}),E.jsx("p",{children:s("Select at least one method above.","请在上方勾选至少一种方法。")})]})}),E.jsxs("div",{className:"activity-legend",children:[E.jsxs("span",{children:[E.jsx("i",{className:"key busy"}),s("Computing","计算中")]}),E.jsxs("span",{children:[E.jsx("i",{className:"key idle"}),s("Idle reservation","空闲但仍预留")]}),E.jsxs("span",{children:[E.jsx("i",{className:"key packet"}),s("Data transfer","数据传输")]}),E.jsxs("span",{children:[E.jsx("i",{className:"key released"}),s("Released after completion","完成后释放")]}),E.jsx("p",{children:s("Plumes illustrate activity, not direct on-site CO₂. The reserved network baseline still accrues during idle periods.","烟雾仅示意活动，并非机房直接排烟；网络空闲时不显示烟雾，但预留基础碳仍计入。")})]}),E.jsxs("section",{className:"outcomes",children:[E.jsxs("div",{className:"section-heading",children:[E.jsx("h2",{children:s("Complete schedule results","完整调度结果")}),E.jsx("span",{children:s("Algorithm runtime and job completion time are different quantities.","算法运行时间与作业完成时间是两个不同的量。")})]}),E.jsx("div",{className:"table-scroll",children:E.jsxs("table",{children:[E.jsx("thead",{children:E.jsxs("tr",{children:[E.jsx("th",{children:s("Method","方法")}),E.jsxs("th",{children:[s("Job completion","作业完成时间")," (tu)"]}),E.jsxs("th",{children:[s("Elapsed","执行时长")," (s)"]}),E.jsxs("th",{children:[s("Job carbon","总碳排放")," (gCO₂e)"]}),E.jsxs("th",{children:[s("Algorithm","算法运行时间")," (ms)"]}),E.jsx("th",{children:s("Status","求解状态")})]})}),E.jsx("tbody",{children:Me.filter(at=>S[at]).map(at=>{const Ht=S[at],Vt=Fs(ht.dag,Ht,ht.config,Ht.completion_time).totalG;return E.jsxs("tr",{children:[E.jsxs("td",{children:[E.jsx("i",{style:{background:zr[at][2]}}),zr[at][i?1:0]]}),E.jsx("td",{children:xn(Ht.completion_time,2)}),E.jsx("td",{children:xn(Ht.completion_time*ht.config.tuSeconds,2)}),E.jsx("td",{className:"carbon-cell",children:xn(Vt,4)}),E.jsx("td",{children:xn(Ht.runtime_ms,2)}),E.jsx("td",{children:Ht.status==="imported"?s("Imported, validated","导入 · 可行性已验证"):Ht.status==="optimal"?s("Optimal","最优已证明"):Ht.status==="fallback"?s("Heuristic fallback","启发式回退"):Ht.status==="feasible"?s("Feasible, time-limited","限时可行"):s("Heuristic","启发式")})]},at)})})]})})]}),E.jsxs("details",{className:"model-notes",children:[E.jsxs("summary",{children:[E.jsx(o0,{size:16}),s("How the carbon is calculated","碳排放如何逐步计算"),E.jsxs("span",{children:["C = ",xn(ue,3)," + ",xn(Pe,4)," × T"]})]}),E.jsxs("div",{className:"model-content",children:[E.jsx("p",{children:s("All VMs and the shared network allocation belong to this job until its final task finishes. A VM draws idle power while waiting and total busy power while computing. Its contribution stops when the entire job releases the reservation. Displayed watts are allocated to this job; release does not imply a physical shutdown.","所有 VM 和共享网络资源一直预留到该作业最后一个任务完成。VM 等待时计空闲功率，计算时计总计算功率；整个作业完成后停止归集该作业的碳排放。界面功率均指该作业归集的功率，释放资源不代表机房物理断电。")}),E.jsx("div",{className:"equation",children:"ΔC = PUE × CI × P(W) × Δt(s) / 3,600,000"}),E.jsx("p",{children:s("We integrate every actual busy/idle interval, including fractional boundaries. Playback speed and step size do not change the final carbon. VM baseline, incremental computation and reserved network sum exactly to job carbon.","按真实的忙闲区间积分，跨时间步的区间也精确分段。改变播放速度或步长不会改变最终碳排放。VM 基础功耗、计算增量和网络预留三项之和，严格等于作业总碳排放。")}),E.jsx("p",{children:s("With the same fixed VM count, execution profiles, grid intensity, PUE and traffic-independent network baseline, task work energy A is fixed and reservation carbon grows at B per tu. If B > 0, minimizing job carbon and completion time gives the same ranking.","在 VM 数量、任务执行配置、电网碳强度、PUE 和网络预留基础功率均固定时，计算增量碳 A 固定，预留碳按每 tu 的速率 B 累加。B > 0 时，最小化作业碳排放与最小化完成时间具有相同排序。")}),E.jsx("p",{children:s("VMs represent exclusive execution allocations with attributed power. Network channels are logical parallel transfer slots, not extra copies of a physical switch. These are synthetic operational-carbon profiles, excluding embodied emissions and solver energy.","VM 表示独占的执行资源份额，功率按该份额归集。通道表示并行传输槽位，并非重复计算多个交换机。这里采用合成的运行碳模型，不含硬件制造碳和算法求解能耗。")}),E.jsxs("div",{className:"source-links",children:[E.jsx("a",{href:"https://doi.org/10.1002/advs.202100707",target:"_blank",rel:"noreferrer",children:"Green Algorithms · Advanced Science (2021), §5 Eq. (1)"}),E.jsx("a",{href:"https://arxiv.org/html/2406.09645v1#S3.SS3.SSS1",target:"_blank",rel:"noreferrer",children:"Dedicated-machine allocation · §3.3.1"}),E.jsx("a",{href:"https://sci.greensoftware.foundation/",target:"_blank",rel:"noreferrer",children:"Software Carbon Intensity · O = E × I"})]})]})]}),E.jsxs("footer",{className:"app-footer",children:["CARELab Carbon-aware Multi-step LLM Inference · ",s("All scheduling and simulation run in your browser.","调度与仿真均在浏览器中运行。")," ",E.jsx("span",{children:E.jsx("a",{href:"./THIRD_PARTY_NOTICES.txt",target:"_blank",rel:"noreferrer",children:s("Open-source notices","开源组件说明")})})]})]}),E.jsx(Vw,{targetRef:He,layoutKey:x.join(","),lang:r}),E.jsxs("dialog",{className:"dag-editor",ref:$,onCancel:()=>oe(null),children:[E.jsxs("div",{className:"dialog-heading",children:[E.jsxs("div",{children:[E.jsx("h2",{children:s("Edit your inference workflow","编辑推理工作流")}),E.jsx("p",{children:s("Task durations and transfer durations use time units (tu).","节点为推理任务，边为依赖；计算和传输时长均使用 tu。")})]}),E.jsx(Ma,{label:s("Close editor","关闭编辑器"),onClick:()=>oe(null),children:E.jsx(hd,{size:20})})]}),Xt&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"editor-tabs",children:[E.jsx("button",{className:Qe?"":"active",onClick:()=>{if(Qe)try{oe(Pr(JSON.parse(ze),l)),k(!1),Ft("")}catch(at){Ft(at.message)}},children:s("Tasks & dependencies","任务与依赖")}),E.jsx("button",{className:Qe?"active":"",onClick:()=>{de(JSON.stringify(Xt,null,2)),k(!0)},children:"JSON"})]}),Qe?E.jsx("textarea",{className:"json-editor",value:ze,spellCheck:"false","aria-label":"DAG JSON",onChange:at=>de(at.target.value)}):E.jsxs("div",{className:"visual-editor",children:[E.jsxs("div",{children:[E.jsx("h3",{children:s("LLM inference tasks","LLM 推理任务")}),Xt.nodes.map((at,Ht)=>E.jsxs("div",{className:"editor-row",children:[E.jsx("i",{style:{background:ap(at.id,Xt)}}),E.jsxs("span",{children:["T",at.id]}),E.jsx("input",{type:"number",min:"0.01",step:".5",value:at.duration,"aria-label":`T${at.id} ${s("duration","计算时间")}`,onChange:Vt=>oe(ee=>({...ee,nodes:ee.nodes.map((Ce,Ut)=>Ut===Ht?{...Ce,duration:Number(Vt.target.value)}:Ce)}))}),E.jsx("small",{children:"tu"}),E.jsx(Ma,{label:s(`Remove T${at.id}`,`删除 T${at.id}`),onClick:()=>oe(Vt=>({...Vt,nodes:Vt.nodes.filter(ee=>ee.id!==at.id),edges:Vt.edges.filter(ee=>ee.source!==at.id&&ee.target!==at.id)})),children:E.jsx(u0,{size:13})})]},at.id)),E.jsxs("button",{className:"text-button",onClick:()=>oe(at=>({...at,nodes:[...at.nodes,{id:Math.max(0,...at.nodes.map(Ht=>Number(Ht.id)))+1,duration:3}]})),children:[E.jsx(c0,{size:14}),s("Add task","添加任务")]})]}),E.jsxs("div",{children:[E.jsx("h3",{children:s("Dependencies & transfers","依赖与传输")}),Xt.edges.map((at,Ht)=>E.jsxs("div",{className:"editor-row",children:[E.jsx("select",{"aria-label":s(`Edge ${Ht+1} source`,`依赖 ${Ht+1} 起点`),value:at.source,onChange:Vt=>oe(ee=>({...ee,edges:ee.edges.map((Ce,Ut)=>Ut===Ht?{...Ce,source:Number(Vt.target.value)}:Ce)})),children:Xt.nodes.map(Vt=>E.jsxs("option",{value:Vt.id,children:["T",Vt.id]},Vt.id))}),E.jsx(Eh,{size:13}),E.jsx("select",{"aria-label":s(`Edge ${Ht+1} target`,`依赖 ${Ht+1} 终点`),value:at.target,onChange:Vt=>oe(ee=>({...ee,edges:ee.edges.map((Ce,Ut)=>Ut===Ht?{...Ce,target:Number(Vt.target.value)}:Ce)})),children:Xt.nodes.map(Vt=>E.jsxs("option",{value:Vt.id,children:["T",Vt.id]},Vt.id))}),E.jsx("input",{type:"number",min:"0",step:".5",value:at.duration,"aria-label":s(`Edge ${Ht+1} duration`,`依赖 ${Ht+1} 传输时间`),onChange:Vt=>oe(ee=>({...ee,edges:ee.edges.map((Ce,Ut)=>Ut===Ht?{...Ce,duration:Number(Vt.target.value)}:Ce)}))}),E.jsx("small",{children:"tu"}),E.jsx(Ma,{label:s("Remove dependency","删除依赖"),onClick:()=>oe(Vt=>({...Vt,edges:Vt.edges.filter((ee,Ce)=>Ce!==Ht)})),children:E.jsx(u0,{size:13})})]},Ht)),E.jsxs("button",{className:"text-button",onClick:()=>oe(at=>({...at,edges:[...at.edges,{source:at.nodes[0]?.id??0,target:at.nodes.at(-1)?.id??1,duration:1}]})),children:[E.jsx(c0,{size:14}),s("Add dependency","添加依赖")]})]})]}),le&&E.jsx("p",{className:"edit-error",role:"alert",children:le}),E.jsxs("div",{className:"dialog-actions",children:[E.jsx("span",{children:s("Local edges need no network channel. Cycles are rejected.","本地依赖不占网络通道；系统会检查并拒绝环路。")}),E.jsxs("button",{className:"primary",onClick:wt,children:[E.jsx(wv,{size:15}),s("Apply workflow","应用工作流")]})]})]})]})]})}bS.createRoot(document.getElementById("root")).render(E.jsx(Kw,{}));
