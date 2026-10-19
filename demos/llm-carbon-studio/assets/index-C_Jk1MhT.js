(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function SS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vh={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function MS(){if($0)return jo;$0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var e_;function ES(){return e_||(e_=1,vh.exports=MS()),vh.exports}var M=ES(),xh={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function bS(){if(t_)return bt;t_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function S(z,X,he){this.props=z,this.context=X,this.refs=T,this.updater=he||x}S.prototype.isReactComponent={},S.prototype.setState=function(z,X){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,X,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function v(){}v.prototype=S.prototype;function N(z,X,he){this.props=z,this.context=X,this.refs=T,this.updater=he||x}var L=N.prototype=new v;L.constructor=N,b(L,S.prototype),L.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function B(z,X,he,pe,Ie,je){return he=je.ref,{$$typeof:r,type:z,key:X,ref:he!==void 0?he:null,props:je}}function G(z,X){return B(z.type,X,void 0,void 0,void 0,z.props)}function R(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function D(z){var X={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(he){return X[he]})}var H=/\/+/g;function Q(z,X){return typeof z=="object"&&z!==null&&z.key!=null?D(""+z.key):X.toString(36)}function oe(){}function ce(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(oe,oe):(z.status="pending",z.then(function(X){z.status==="pending"&&(z.status="fulfilled",z.value=X)},function(X){z.status==="pending"&&(z.status="rejected",z.reason=X)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function fe(z,X,he,pe,Ie){var je=typeof z;(je==="undefined"||je==="boolean")&&(z=null);var ae=!1;if(z===null)ae=!0;else switch(je){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(z.$$typeof){case r:case e:ae=!0;break;case _:return ae=z._init,fe(ae(z._payload),X,he,pe,Ie)}}if(ae)return Ie=Ie(z),ae=pe===""?"."+Q(z,0):pe,A(Ie)?(he="",ae!=null&&(he=ae.replace(H,"$&/")+"/"),fe(Ie,X,he,"",function(at){return at})):Ie!=null&&(R(Ie)&&(Ie=G(Ie,he+(Ie.key==null||z&&z.key===Ie.key?"":(""+Ie.key).replace(H,"$&/")+"/")+ae)),X.push(Ie)),1;ae=0;var xe=pe===""?".":pe+":";if(A(z))for(var Oe=0;Oe<z.length;Oe++)pe=z[Oe],je=xe+Q(pe,Oe),ae+=fe(pe,X,he,je,Ie);else if(Oe=y(z),typeof Oe=="function")for(z=Oe.call(z),Oe=0;!(pe=z.next()).done;)pe=pe.value,je=xe+Q(pe,Oe++),ae+=fe(pe,X,he,je,Ie);else if(je==="object"){if(typeof z.then=="function")return fe(ce(z),X,he,pe,Ie);throw X=String(z),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ae}function F(z,X,he){if(z==null)return z;var pe=[],Ie=0;return fe(z,pe,"","",function(je){return X.call(he,je,Ie++)}),pe}function $(z){if(z._status===-1){var X=z._result;X=X(),X.then(function(he){(z._status===0||z._status===-1)&&(z._status=1,z._result=he)},function(he){(z._status===0||z._status===-1)&&(z._status=2,z._result=he)}),z._status===-1&&(z._status=0,z._result=X)}if(z._status===1)return z._result.default;throw z._result}var K=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function Me(){}return bt.Children={map:F,forEach:function(z,X,he){F(z,function(){X.apply(this,arguments)},he)},count:function(z){var X=0;return F(z,function(){X++}),X},toArray:function(z){return F(z,function(X){return X})||[]},only:function(z){if(!R(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},bt.Component=S,bt.Fragment=i,bt.Profiler=l,bt.PureComponent=N,bt.StrictMode=s,bt.Suspense=m,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,bt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},bt.cache=function(z){return function(){return z.apply(null,arguments)}},bt.cloneElement=function(z,X,he){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var pe=b({},z.props),Ie=z.key,je=void 0;if(X!=null)for(ae in X.ref!==void 0&&(je=void 0),X.key!==void 0&&(Ie=""+X.key),X)!O.call(X,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&X.ref===void 0||(pe[ae]=X[ae]);var ae=arguments.length-2;if(ae===1)pe.children=he;else if(1<ae){for(var xe=Array(ae),Oe=0;Oe<ae;Oe++)xe[Oe]=arguments[Oe+2];pe.children=xe}return B(z.type,Ie,void 0,void 0,je,pe)},bt.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},bt.createElement=function(z,X,he){var pe,Ie={},je=null;if(X!=null)for(pe in X.key!==void 0&&(je=""+X.key),X)O.call(X,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Ie[pe]=X[pe]);var ae=arguments.length-2;if(ae===1)Ie.children=he;else if(1<ae){for(var xe=Array(ae),Oe=0;Oe<ae;Oe++)xe[Oe]=arguments[Oe+2];Ie.children=xe}if(z&&z.defaultProps)for(pe in ae=z.defaultProps,ae)Ie[pe]===void 0&&(Ie[pe]=ae[pe]);return B(z,je,void 0,void 0,null,Ie)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(z){return{$$typeof:h,render:z}},bt.isValidElement=R,bt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:$}},bt.memo=function(z,X){return{$$typeof:p,type:z,compare:X===void 0?null:X}},bt.startTransition=function(z){var X=P.T,he={};P.T=he;try{var pe=z(),Ie=P.S;Ie!==null&&Ie(he,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(Me,K)}catch(je){K(je)}finally{P.T=X}},bt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},bt.use=function(z){return P.H.use(z)},bt.useActionState=function(z,X,he){return P.H.useActionState(z,X,he)},bt.useCallback=function(z,X){return P.H.useCallback(z,X)},bt.useContext=function(z){return P.H.useContext(z)},bt.useDebugValue=function(){},bt.useDeferredValue=function(z,X){return P.H.useDeferredValue(z,X)},bt.useEffect=function(z,X,he){var pe=P.H;if(typeof he=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return pe.useEffect(z,X)},bt.useId=function(){return P.H.useId()},bt.useImperativeHandle=function(z,X,he){return P.H.useImperativeHandle(z,X,he)},bt.useInsertionEffect=function(z,X){return P.H.useInsertionEffect(z,X)},bt.useLayoutEffect=function(z,X){return P.H.useLayoutEffect(z,X)},bt.useMemo=function(z,X){return P.H.useMemo(z,X)},bt.useOptimistic=function(z,X){return P.H.useOptimistic(z,X)},bt.useReducer=function(z,X,he){return P.H.useReducer(z,X,he)},bt.useRef=function(z){return P.H.useRef(z)},bt.useState=function(z){return P.H.useState(z)},bt.useSyncExternalStore=function(z,X,he){return P.H.useSyncExternalStore(z,X,he)},bt.useTransition=function(){return P.H.useTransition()},bt.version="19.1.1",bt}var n_;function op(){return n_||(n_=1,xh.exports=bS()),xh.exports}var be=op();const TS=SS(be);var yh={exports:{}},Xo={},Sh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function AS(){return i_||(i_=1,(function(r){function e(F,$){var K=F.length;F.push($);e:for(;0<K;){var Me=K-1>>>1,z=F[Me];if(0<l(z,$))F[Me]=$,F[K]=z,K=Me;else break e}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var $=F[0],K=F.pop();if(K!==$){F[0]=K;e:for(var Me=0,z=F.length,X=z>>>1;Me<X;){var he=2*(Me+1)-1,pe=F[he],Ie=he+1,je=F[Ie];if(0>l(pe,K))Ie<z&&0>l(je,pe)?(F[Me]=je,F[Ie]=K,Me=Ie):(F[Me]=pe,F[he]=K,Me=he);else if(Ie<z&&0>l(je,K))F[Me]=je,F[Ie]=K,Me=Ie;else break e}}return $}function l(F,$){var K=F.sortIndex-$.sortIndex;return K!==0?K:F.id-$.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,y=3,x=!1,b=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var $=i(p);$!==null;){if($.callback===null)s(p);else if($.startTime<=F)s(p),$.sortIndex=$.expirationTime,e(m,$);else break;$=i(p)}}function P(F){if(T=!1,A(F),!b)if(i(m)!==null)b=!0,O||(O=!0,Q());else{var $=i(p);$!==null&&fe(P,$.startTime-F)}}var O=!1,B=-1,G=5,R=-1;function D(){return S?!0:!(r.unstable_now()-R<G)}function H(){if(S=!1,O){var F=r.unstable_now();R=F;var $=!0;try{e:{b=!1,T&&(T=!1,N(B),B=-1),x=!0;var K=y;try{t:{for(A(F),g=i(m);g!==null&&!(g.expirationTime>F&&D());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,y=g.priorityLevel;var z=Me(g.expirationTime<=F);if(F=r.unstable_now(),typeof z=="function"){g.callback=z,A(F),$=!0;break t}g===i(m)&&s(m),A(F)}else s(m);g=i(m)}if(g!==null)$=!0;else{var X=i(p);X!==null&&fe(P,X.startTime-F),$=!1}}break e}finally{g=null,y=K,x=!1}$=void 0}}finally{$?Q():O=!1}}}var Q;if(typeof L=="function")Q=function(){L(H)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=H,Q=function(){ce.postMessage(null)}}else Q=function(){v(H,0)};function fe(F,$){B=v(function(){F(r.unstable_now())},$)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(F){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var K=y;y=$;try{return F()}finally{y=K}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var K=y;y=F;try{return $()}finally{y=K}},r.unstable_scheduleCallback=function(F,$,K){var Me=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Me+K:Me):K=Me,F){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=K+z,F={id:_++,callback:$,priorityLevel:F,startTime:K,expirationTime:z,sortIndex:-1},K>Me?(F.sortIndex=K,e(p,F),i(m)===null&&F===i(p)&&(T?(N(B),B=-1):T=!0,fe(P,K-Me))):(F.sortIndex=z,e(m,F),b||x||(b=!0,O||(O=!0,Q()))),F},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(F){var $=y;return function(){var K=y;y=$;try{return F.apply(this,arguments)}finally{y=K}}}})(Mh)),Mh}var a_;function wS(){return a_||(a_=1,Sh.exports=AS()),Sh.exports}var Eh={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function RS(){if(s_)return Kn;s_=1;var r=op();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Kn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Kn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Kn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:x}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Kn.requestFormReset=function(m){s.d.r(m)},Kn.unstable_batchedUpdates=function(m,p){return m(p)},Kn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Kn.version="19.1.1",Kn}var r_;function CS(){if(r_)return Eh.exports;r_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Eh.exports=RS(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function DS(){if(o_)return Xo;o_=1;var r=wS(),e=op(),i=CS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),t;if(d===o)return h(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,U=u.child;U;){if(U===a){E=!0,a=u,o=d;break}if(U===o){E=!0,o=u,a=d;break}U=U.sibling}if(!E){for(U=d.child;U;){if(U===a){E=!0,a=d,o=u;break}if(U===o){E=!0,o=d,a=u;break}U=U.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case L:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case A:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case G:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var fe=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Me=[],z=-1;function X(t){return{current:t}}function he(t){0>z||(t.current=Me[z],Me[z]=null,z--)}function pe(t,n){z++,Me[z]=t.current,t.current=n}var Ie=X(null),je=X(null),ae=X(null),xe=X(null);function Oe(t,n){switch(pe(ae,n),pe(je,t),pe(Ie,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?w0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=w0(n),t=R0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}he(Ie),pe(Ie,t)}function at(){he(Ie),he(je),he(ae)}function $e(t){t.memoizedState!==null&&pe(xe,t);var n=Ie.current,a=R0(n,t.type);n!==a&&(pe(je,t),pe(Ie,a))}function xt(t){je.current===t&&(he(Ie),he(je)),xe.current===t&&(he(xe),Fo._currentValue=K)}var Bt=Object.prototype.hasOwnProperty,k=r.unstable_scheduleCallback,Pt=r.unstable_cancelCallback,ft=r.unstable_shouldYield,rt=r.unstable_requestPaint,Ge=r.unstable_now,kt=r.unstable_getCurrentPriorityLevel,We=r.unstable_ImmediatePriority,gt=r.unstable_UserBlockingPriority,Ft=r.unstable_NormalPriority,en=r.unstable_LowPriority,I=r.unstable_IdlePriority,C=r.log,te=r.unstable_setDisableYieldValue,me=null,_e=null;function de(t){if(typeof C=="function"&&te(t),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(me,t)}catch{}}var Ue=Math.clz32?Math.clz32:ke,Le=Math.log,Ke=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(Le(t)/Ke|0)|0}var Re=256,Ne=4194304;function qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var U=o&134217727;return U!==0?(o=U&~d,o!==0?u=qe(o):(E&=U,E!==0?u=qe(E):a||(a=U&~t,a!==0&&(u=qe(a))))):(U=o&~d,U!==0?u=qe(U):E!==0?u=qe(E):a||(a=o&~t,a!==0&&(u=qe(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ht(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z(){var t=Re;return Re<<=1,(Re&4194048)===0&&(Re=256),t}function we(){var t=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),t}function Pe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ce(t,n,a,o,u,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var U=t.entanglements,V=t.expirationTimes,se=t.hiddenUpdates;for(a=E&~a;0<a;){var ve=31-Ue(a),Ee=1<<ve;U[ve]=0,V[ve]=-1;var le=se[ve];if(le!==null)for(se[ve]=null,ve=0;ve<le.length;ve++){var ue=le[ve];ue!==null&&(ue.lane&=-536870913)}a&=~Ee}o!==0&&ye(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function ye(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ue(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ze(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ue(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function lt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function It(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Rt(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:q0(t.type))}function Wn(t,n){var a=$.p;try{return $.p=t,n()}finally{$.p=a}}var ln=Math.random().toString(36).slice(2),ee="__reactFiber$"+ln,Be="__reactProps$"+ln,Qe="__reactContainer$"+ln,De="__reactEvents$"+ln,Te="__reactListeners$"+ln,tt="__reactHandles$"+ln,yt="__reactResources$"+ln,st="__reactMarker$"+ln;function mt(t){delete t[ee],delete t[Be],delete t[De],delete t[Te],delete t[tt]}function Qt(t){var n=t[ee];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Qe]||a[ee]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=L0(t);t!==null;){if(a=t[ee])return a;t=L0(t)}return n}t=a,a=t.parentNode}return null}function Wt(t){if(t=t[ee]||t[Qe]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Gt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Vt(t){var n=t[yt];return n||(n=t[yt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qt(t){t[st]=!0}var it=new Set,Rn={};function w(t,n){W(t,n),W(t+"Capture",n)}function W(t,n){for(Rn[t]=n,t=0;t<n.length;t++)it.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},j={};function ge(t){return Bt.call(j,t)?!0:Bt.call(ne,t)?!1:re.test(t)?j[t]=!0:(ne[t]=!0,!1)}function Ae(t,n,a){if(ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function He(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Fe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Je,ut;function nt(t){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+t+ut}var Mt=!1;function Et(t,n){if(!t||Mt)return"";Mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(ue){var le=ue}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(ue){le=ue}t.call(Ee.prototype)}}else{try{throw Error()}catch(ue){le=ue}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],U=d[1];if(E&&U){var V=E.split(`
`),se=U.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===se.length)for(o=V.length-1,u=se.length-1;1<=o&&0<=u&&V[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==se[u]){var ve=`
`+V[o].replace(" at new "," at ");return t.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",t.displayName)),ve}while(1<=o&&0<=u);break}}}finally{Mt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?nt(a):""}function Kt(t){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return Et(t.type,!1);case 11:return Et(t.type.render,!1);case 1:return Et(t.type,!0);case 31:return nt("Activity");default:return""}}function Yt(t){try{var n="";do n+=Kt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function St(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ct(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(t){var n=ct(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dt(t){t._valueTracker||(t._valueTracker=hn(t))}function qn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ct(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $n=/[\n"\\]/g;function zn(t){return t.replace($n,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function cn(t,n,a,o,u,d,E,U){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+St(n)):t.value!==""+St(n)&&(t.value=""+St(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Yn(t,E,St(n)):a!=null?Yn(t,E,St(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+St(U):t.removeAttribute("name")}function ei(t,n,a,o,u,d,E,U){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+St(a):"",n=n!=null?""+St(n):a,U||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=U?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Yn(t,n,a){n==="number"&&Li(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+St(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Gn(t,n,a){if(n!=null&&(n=""+St(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+St(a):""}function Vs(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(fe(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=St(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||vx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Rp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&wp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&wp(t,d,n[d])}function gu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(t){return yx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _u=null;function vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var js=null,Xs=null;function Cp(t){var n=Wt(t);if(n&&(t=n.stateNode)){var a=t[Be]||null;e:switch(t=n.stateNode,n.type){case"input":if(cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Be]||null;if(!u)throw Error(s(90));cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&qn(o)}break e;case"textarea":Gn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var xu=!1;function Dp(t,n,a){if(xu)return t(n,a);xu=!0;try{var o=t(n);return o}finally{if(xu=!1,(js!==null||Xs!==null)&&(tc(),js&&(n=js,t=Xs,Xs=js=null,Cp(n),t)))for(n=0;n<t.length;n++)Cp(t[n])}}function Qr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Be]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=!1;if(ia)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){yu=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{yu=!1}var Ca=null,Su=null,_l=null;function Up(){if(_l)return _l;var t,n=Su,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[d-o];o++);return _l=u.slice(t,1<o?1-o:void 0)}function vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Lp(){return!1}function si(t){function n(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(d):d[U]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xl:Lp,this.isPropagationStopped=Lp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=si(us),$r=_({},us,{view:0,detail:0}),Sx=si($r),Mu,Eu,eo,Sl=_({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Mu=t.screenX-eo.screenX,Eu=t.screenY-eo.screenY):Eu=Mu=0,eo=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),Np=si(Sl),Mx=_({},Sl,{dataTransfer:0}),Ex=si(Mx),bx=_({},$r,{relatedTarget:0}),bu=si(bx),Tx=_({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=si(Tx),wx=_({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=si(wx),Cx=_({},us,{data:0}),Op=si(Cx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Lx[t])?!!n[t]:!1}function Tu(){return Nx}var Ox=_({},$r,{key:function(t){if(t.key){var n=Dx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Px=si(Ox),zx=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=si(zx),Ix=_({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Bx=si(Ix),Fx=_({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=si(Fx),Gx=_({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=si(Gx),Vx=_({},us,{newState:0,oldState:0}),jx=si(Vx),Xx=[9,13,27,32],Au=ia&&"CompositionEvent"in window,to=null;ia&&"documentMode"in document&&(to=document.documentMode);var Wx=ia&&"TextEvent"in window&&!to,zp=ia&&(!Au||to&&8<to&&11>=to),Ip=" ",Bp=!1;function Fp(t,n){switch(t){case"keyup":return Xx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function qx(t,n){switch(t){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(Bp=!0,Ip);case"textInput":return t=n.data,t===Ip&&Bp?null:t;default:return null}}function Yx(t,n){if(Ws)return t==="compositionend"||!Au&&Fp(t,n)?(t=Up(),_l=Su=Ca=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zp&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zx[t.type]:n==="textarea"}function kp(t,n,a,o){js?Xs?Xs.push(o):Xs=[o]:js=o,n=oc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function Kx(t){M0(t,0)}function Ml(t){var n=Gt(t);if(qn(n))return t}function Vp(t,n){if(t==="change")return n}var jp=!1;if(ia){var wu;if(ia){var Ru="oninput"in document;if(!Ru){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ru=typeof Xp.oninput=="function"}wu=Ru}else wu=!1;jp=wu&&(!document.documentMode||9<document.documentMode)}function Wp(){no&&(no.detachEvent("onpropertychange",qp),io=no=null)}function qp(t){if(t.propertyName==="value"&&Ml(io)){var n=[];kp(n,io,t,vu(t)),Dp(Kx,n)}}function Qx(t,n,a){t==="focusin"?(Wp(),no=n,io=a,no.attachEvent("onpropertychange",qp)):t==="focusout"&&Wp()}function Jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(io)}function $x(t,n){if(t==="click")return Ml(n)}function ey(t,n){if(t==="input"||t==="change")return Ml(n)}function ty(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var hi=typeof Object.is=="function"?Object.is:ty;function ao(t,n){if(hi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Bt.call(n,u)||!hi(t[u],n[u]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,n){var a=Yp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function Kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Li(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Li(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ny=ia&&"documentMode"in document&&11>=document.documentMode,qs=null,Du=null,so=null,Uu=!1;function Jp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||qs==null||qs!==Li(o)||(o=qs,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ao(so,o)||(so=o,o=oc(Du,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=qs)))}function fs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ys={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Lu={},$p={};ia&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function hs(t){if(Lu[t])return Lu[t];if(!Ys[t])return t;var n=Ys[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Lu[t]=n[a];return t}var em=hs("animationend"),tm=hs("animationiteration"),nm=hs("animationstart"),iy=hs("transitionrun"),ay=hs("transitionstart"),sy=hs("transitioncancel"),im=hs("transitionend"),am=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Ni(t,n){am.set(t,n),w(n,[t])}var sm=new WeakMap;function Ei(t,n){if(typeof t=="object"&&t!==null){var a=sm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Yt(n)},sm.set(t,n),n)}return{value:t,source:n,stack:Yt(n)}}var bi=[],Zs=0,Ou=0;function El(){for(var t=Zs,n=Ou=Zs=0;n<t;){var a=bi[n];bi[n++]=null;var o=bi[n];bi[n++]=null;var u=bi[n];bi[n++]=null;var d=bi[n];if(bi[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&rm(a,u,d)}}function bl(t,n,a,o){bi[Zs++]=t,bi[Zs++]=n,bi[Zs++]=a,bi[Zs++]=o,Ou|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Pu(t,n,a,o){return bl(t,n,a,o),Tl(t)}function Ks(t,n){return bl(t,null,null,n),Tl(t)}function rm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ue(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Tl(t){if(50<Uo)throw Uo=0,kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Qs={};function ry(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,n,a,o){return new ry(t,n,a,o)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,n){var a=t.alternate;return a===null?(a=di(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function om(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,o,u,d){var E=0;if(o=t,typeof t=="function")zu(t)&&(E=1);else if(typeof t=="string")E=lS(t,a,Ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=di(31,a,n,u),t.elementType=R,t.lanes=d,t;case b:return ds(a.children,u,d,n);case T:E=8,u|=24;break;case S:return t=di(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case P:return t=di(13,a,n,u),t.elementType=P,t.lanes=d,t;case O:return t=di(19,a,n,u),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case L:E=10;break e;case N:E=9;break e;case A:E=11;break e;case B:E=14;break e;case G:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=di(E,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function ds(t,n,a,o){return t=di(7,t,o,n),t.lanes=a,t}function Iu(t,n,a){return t=di(6,t,null,n),t.lanes=a,t}function Bu(t,n,a){return n=di(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Js=[],$s=0,wl=null,Rl=0,Ti=[],Ai=0,ps=null,sa=1,ra="";function ms(t,n){Js[$s++]=Rl,Js[$s++]=wl,wl=t,Rl=n}function lm(t,n,a){Ti[Ai++]=sa,Ti[Ai++]=ra,Ti[Ai++]=ps,ps=t;var o=sa;t=ra;var u=32-Ue(o)-1;o&=~(1<<u),a+=1;var d=32-Ue(n)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,sa=1<<32-Ue(n)+u|a<<u|o,ra=d+t}else sa=1<<d|a<<u|o,ra=t}function Fu(t){t.return!==null&&(ms(t,1),lm(t,1,0))}function Hu(t){for(;t===wl;)wl=Js[--$s],Js[$s]=null,Rl=Js[--$s],Js[$s]=null;for(;t===ps;)ps=Ti[--Ai],Ti[Ai]=null,ra=Ti[--Ai],Ti[Ai]=null,sa=Ti[--Ai],Ti[Ai]=null}var ti=null,yn=null,Zt=!1,gs=null,ji=!1,Gu=Error(s(519));function _s(t){var n=Error(s(418,""));throw lo(Ei(n,t)),Gu}function cm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ee]=t,n[Be]=o,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)Lt(No[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),ei(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Dt(n);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),Vs(n,o.value,o.defaultValue,o.children),Dt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||A0(n.textContent,a)?(o.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),o.onScroll!=null&&Lt("scroll",n),o.onScrollEnd!=null&&Lt("scrollend",n),o.onClick!=null&&(n.onclick=lc),n=!0):n=!1,n||_s(t)}function um(t){for(ti=t.return;ti;)switch(ti.tag){case 5:case 13:ji=!1;return;case 27:case 3:ji=!0;return;default:ti=ti.return}}function ro(t){if(t!==ti)return!1;if(!Zt)return um(t),Zt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ah(t.type,t.memoizedProps)),a=!a),a&&yn&&_s(t),um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){yn=Pi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}yn=null}}else n===27?(n=yn,Xa(t.type)?(t=lh,lh=null,yn=t):yn=n):yn=ti?Pi(t.stateNode.nextSibling):null;return!0}function oo(){yn=ti=null,Zt=!1}function fm(){var t=gs;return t!==null&&(li===null?li=t:li.push.apply(li,t),gs=null),t}function lo(t){gs===null?gs=[t]:gs.push(t)}var ku=X(null),vs=null,oa=null;function Da(t,n,a){pe(ku,n._currentValue),n._currentValue=a}function la(t){t._currentValue=ku.current,he(ku)}function Vu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ju(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var U=d;d=u;for(var V=0;V<n.length;V++)if(U.context===n[V]){d.lanes|=a,U=d.alternate,U!==null&&(U.lanes|=a),Vu(d.return,a,t),o||(E=null);break e}d=U.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Vu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function co(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var U=u.type;hi(u.pendingProps.value,E.value)||(t!==null?t.push(U):t=[U])}}else if(u===xe.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&ju(n,t,a,o),n.flags|=262144}function Cl(t){for(t=t.firstContext;t!==null;){if(!hi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xs(t){vs=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zn(t){return hm(vs,t)}function Dl(t,n){return vs===null&&xs(t),hm(t,n)}function hm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var oy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ly=r.unstable_scheduleCallback,cy=r.unstable_NormalPriority,Cn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new oy,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&ly(cy,function(){t.controller.abort()})}var fo=null,Wu=0,er=0,tr=null;function uy(t,n){if(fo===null){var a=fo=[];Wu=0,er=Zf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(dm,dm),n}function dm(){if(--Wu===0&&fo!==null){tr!==null&&(tr.status="fulfilled");var t=fo;fo=null,er=0,tr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=F.S;F.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),pm!==null&&pm(t,n)};var ys=X(null);function qu(){var t=ys.current;return t!==null?t:fn.pooledCache}function Ul(t,n){n===null?pe(ys,ys.current):pe(ys,n.pool)}function mm(){var t=qu();return t===null?null:{parent:Cn._currentValue,pool:t}}var ho=Error(s(460)),gm=Error(s(474)),Ll=Error(s(542)),Yu={then:function(){}};function _m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nl(){}function vm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Nl,Nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t;default:if(typeof n.status=="string")n.then(Nl,Nl);else{if(t=fn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ym(t),t}throw po=n,ho}}var po=null;function xm(){if(po===null)throw Error(s(459));var t=po;return po=null,t}function ym(t){if(t===ho||t===Ll)throw Error(s(483))}var Ua=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function La(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Jt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),rm(t,null,a),n}return bl(t,o,n,a),Tl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ze(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ju=!1;function go(){if(Ju){var t=tr;if(t!==null)throw t}}function _o(t,n,a,o){Ju=!1;var u=t.updateQueue;Ua=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var V=U,se=V.next;V.next=null,E===null?d=se:E.next=se,E=V;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==E&&(U===null?ve.firstBaseUpdate=se:U.next=se,ve.lastBaseUpdate=V))}if(d!==null){var Ee=u.baseState;E=0,ve=se=V=null,U=d;do{var le=U.lane&-536870913,ue=le!==U.lane;if(ue?(Ht&le)===le:(o&le)===le){le!==0&&le===er&&(Ju=!0),ve!==null&&(ve=ve.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var _t=t,dt=U;le=n;var an=a;switch(dt.tag){case 1:if(_t=dt.payload,typeof _t=="function"){Ee=_t.call(an,Ee,le);break e}Ee=_t;break e;case 3:_t.flags=_t.flags&-65537|128;case 0:if(_t=dt.payload,le=typeof _t=="function"?_t.call(an,Ee,le):_t,le==null)break e;Ee=_({},Ee,le);break e;case 2:Ua=!0}}le=U.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(se=ve=ue,V=Ee):ve=ve.next=ue,E|=le;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;ue=U,U=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);ve===null&&(V=Ee),u.baseState=V,u.firstBaseUpdate=se,u.lastBaseUpdate=ve,d===null&&(u.shared.lanes=0),Ga|=E,t.lanes=E,t.memoizedState=Ee}}function Sm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Mm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Sm(a[t],n)}var nr=X(null),Ol=X(0);function Em(t,n){t=ma,pe(Ol,t),pe(nr,n),ma=t|n.baseLanes}function $u(){pe(Ol,ma),pe(nr,nr.current)}function ef(){ma=Ol.current,he(nr),he(Ol)}var Oa=0,wt=null,tn=null,Tn=null,Pl=!1,ir=!1,Ss=!1,zl=0,vo=0,ar=null,hy=0;function Mn(){throw Error(s(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!hi(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,d){return Oa=d,wt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?rg:og,Ss=!1,d=a(o,u),Ss=!1,ir&&(d=Tm(n,a,o,u)),bm(t),d}function bm(t){F.H=kl;var n=tn!==null&&tn.next!==null;if(Oa=0,Tn=tn=wt=null,Pl=!1,vo=0,ar=null,n)throw Error(s(300));t===null||In||(t=t.dependencies,t!==null&&Cl(t)&&(In=!0))}function Tm(t,n,a,o){wt=t;var u=0;do{if(ir&&(ar=null),vo=0,ir=!1,25<=u)throw Error(s(301));if(u+=1,Tn=tn=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=xy,d=n(a,o)}while(ir);return d}function dy(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(wt.flags|=1024),n}function af(){var t=zl!==0;return zl=0,t}function sf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}Oa=0,Tn=tn=wt=null,ir=!1,vo=zl=0,ar=null}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?wt.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function An(){if(tn===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=Tn===null?wt.memoizedState:Tn.next;if(n!==null)Tn=n,tn=t;else{if(t===null)throw wt.alternate===null?Error(s(467)):Error(s(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Tn===null?wt.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function of(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=vo;return vo+=1,ar===null&&(ar=[]),t=vm(ar,t,n),n=wt,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?rg:og),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===L)return Zn(t)}throw Error(s(438,String(t)))}function lf(t){var n=null,a=wt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=wt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=of(),wt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function ca(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=An();return cf(n,tn,t)}function cf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var U=E=null,V=null,se=n,ve=!1;do{var Ee=se.lane&-536870913;if(Ee!==se.lane?(Ht&Ee)===Ee:(Oa&Ee)===Ee){var le=se.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Ee===er&&(ve=!0);else if((Oa&le)===le){se=se.next,le===er&&(ve=!0);continue}else Ee={lane:0,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(U=V=Ee,E=d):V=V.next=Ee,wt.lanes|=le,Ga|=le;Ee=se.action,Ss&&a(d,Ee),d=se.hasEagerState?se.eagerState:a(d,Ee)}else le={lane:Ee,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(U=V=le,E=d):V=V.next=le,wt.lanes|=Ee,Ga|=Ee;se=se.next}while(se!==null&&se!==n);if(V===null?E=d:V.next=U,!hi(d,t.memoizedState)&&(In=!0,ve&&(a=tr,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function uf(t){var n=An(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);hi(d,n.memoizedState)||(In=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Am(t,n,a){var o=wt,u=An(),d=Zt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!hi((tn||u).memoizedState,a);E&&(u.memoizedState=a,In=!0),u=u.queue;var U=Cm.bind(null,o,u,t);if(yo(2048,8,U,[t]),u.getSnapshot!==n||E||Tn!==null&&Tn.memoizedState.tag&1){if(o.flags|=2048,sr(9,Fl(),Rm.bind(null,o,u,a,n),null),fn===null)throw Error(s(349));d||(Oa&124)!==0||wm(o,n,a)}return a}function wm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=wt.updateQueue,n===null?(n=of(),wt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,o){n.value=a,n.getSnapshot=o,Dm(n)&&Um(t)}function Cm(t,n,a){return a(function(){Dm(n)&&Um(t)})}function Dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!hi(t,a)}catch{return!0}}function Um(t){var n=Ks(t,2);n!==null&&vi(n,t,2)}function ff(t){var n=ri();if(typeof t=="function"){var a=t;if(t=a(),Ss){de(!0);try{a()}finally{de(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},n}function Lm(t,n,a,o){return t.baseState=a,cf(t,tn,typeof o=="function"?o:ca)}function py(t,n,a,o,u){if(Gl(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};F.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Nm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Nm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=F.T,E={};F.T=E;try{var U=a(u,o),V=F.S;V!==null&&V(E,U),Om(t,n,U)}catch(se){hf(t,n,se)}finally{F.T=d}}else try{d=a(u,o),Om(t,n,d)}catch(se){hf(t,n,se)}}function Om(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Pm(t,n,o)},function(o){return hf(t,n,o)}):Pm(t,n,a)}function Pm(t,n,a){n.status="fulfilled",n.value=a,zm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Nm(t,a)))}function hf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,zm(n),n=n.next;while(n!==o)}t.action=null}function zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Im(t,n){return n}function Bm(t,n){if(Zt){var a=fn.formState;if(a!==null){e:{var o=wt;if(Zt){if(yn){t:{for(var u=yn,d=ji;u.nodeType!==8;){if(!d){u=null;break t}if(u=Pi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){yn=Pi(u.nextSibling),o=u.data==="F!";break e}}_s(o)}o=!1}o&&(n=a[0])}}return a=ri(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:n},a.queue=o,a=ig.bind(null,wt,o),o.dispatch=a,o=ff(!1),d=_f.bind(null,wt,!1,o.queue),o=ri(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=py.bind(null,wt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Fm(t){var n=An();return Hm(n,tn,t)}function Hm(t,n,a){if(n=cf(t,n,Im)[0],t=Bl(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(E){throw E===ho?Ll:E}else o=n;n=An();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(wt.flags|=2048,sr(9,Fl(),my.bind(null,u,a),null)),[o,d,t]}function my(t,n){t.action=n}function Gm(t){var n=An(),a=tn;if(a!==null)return Hm(n,a,t);An(),n=n.memoizedState,a=An();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function sr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=wt.updateQueue,n===null&&(n=of(),wt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Fl(){return{destroy:void 0,resource:void 0}}function km(){return An().memoizedState}function Hl(t,n,a,o){var u=ri();o=o===void 0?null:o,wt.flags|=t,u.memoizedState=sr(1|n,Fl(),a,o)}function yo(t,n,a,o){var u=An();o=o===void 0?null:o;var d=u.memoizedState.inst;tn!==null&&o!==null&&tf(o,tn.memoizedState.deps)?u.memoizedState=sr(n,d,a,o):(wt.flags|=t,u.memoizedState=sr(1|n,d,a,o))}function Vm(t,n){Hl(8390656,8,t,n)}function jm(t,n){yo(2048,8,t,n)}function Xm(t,n){return yo(4,2,t,n)}function Wm(t,n){return yo(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ym(t,n,a){a=a!=null?a.concat([t]):null,yo(4,4,qm.bind(null,n,t),a)}function df(){}function Zm(t,n){var a=An();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Km(t,n){var a=An();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),Ss){de(!0);try{t()}finally{de(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(Oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=$g(),wt.lanes|=t,Ga|=t,a)}function Qm(t,n,a,o){return hi(a,n)?a:nr.current!==null?(t=pf(t,a,o),hi(t,n)||(In=!0),t):(Oa&42)===0?(In=!0,t.memoizedState=a):(t=$g(),wt.lanes|=t,Ga|=t,n)}function Jm(t,n,a,o,u){var d=$.p;$.p=d!==0&&8>d?d:8;var E=F.T,U={};F.T=U,_f(t,!1,n,a);try{var V=u(),se=F.S;if(se!==null&&se(U,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ve=fy(V,o);So(t,n,ve,_i(t))}else So(t,n,o,_i(t))}catch(Ee){So(t,n,{then:function(){},status:"rejected",reason:Ee},_i())}finally{$.p=d,F.T=E}}function gy(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=$m(t).queue;Jm(t,u,n,K,a===null?gy:function(){return eg(t),a(o)})}function $m(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function eg(t){var n=$m(t).next.queue;So(t,n,{},_i())}function gf(){return Zn(Fo)}function tg(){return An().memoizedState}function ng(){return An().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();t=La(a);var o=Na(n,t,a);o!==null&&(vi(o,n,a),mo(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function vy(t,n,a){var o=_i();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(t)?ag(n,a):(a=Pu(t,n,a,o),a!==null&&(vi(a,t,o),sg(a,n,o)))}function ig(t,n,a){var o=_i();So(t,n,a,o)}function So(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(t))ag(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,U=d(E,a);if(u.hasEagerState=!0,u.eagerState=U,hi(U,E))return bl(t,n,u,0),fn===null&&El(),!1}catch{}finally{}if(a=Pu(t,n,u,o),a!==null)return vi(a,t,o),sg(a,n,o),!0}return!1}function _f(t,n,a,o){if(o={lane:2,revertLane:Zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Gl(t)){if(n)throw Error(s(479))}else n=Pu(t,a,o,2),n!==null&&vi(n,t,2)}function Gl(t){var n=t.alternate;return t===wt||n!==null&&n===wt}function ag(t,n){ir=Pl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function sg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ze(t,a)}}var kl={readContext:Zn,use:Il,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn},rg={readContext:Zn,use:Il,useCallback:function(t,n){return ri().memoizedState=[t,n===void 0?null:n],t},useContext:Zn,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=ri();n=n===void 0?null:n;var o=t();if(Ss){de(!0);try{t()}finally{de(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ri();if(a!==void 0){var u=a(n);if(Ss){de(!0);try{a(n)}finally{de(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=vy.bind(null,wt,t),[o.memoizedState,t]},useRef:function(t){var n=ri();return t={current:t},n.memoizedState=t},useState:function(t){t=ff(t);var n=t.queue,a=ig.bind(null,wt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=ri();return pf(a,t,n)},useTransition:function(){var t=ff(!1);return t=Jm.bind(null,wt,t.queue,!0,!1),ri().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=wt,u=ri();if(Zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),fn===null)throw Error(s(349));(Ht&124)!==0||wm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Vm(Cm.bind(null,o,d,t),[t]),o.flags|=2048,sr(9,Fl(),Rm.bind(null,o,d,a,n),null),a},useId:function(){var t=ri(),n=fn.identifierPrefix;if(Zt){var a=ra,o=sa;a=(o&~(1<<32-Ue(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=hy++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:gf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t){var n=ri();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=_f.bind(null,wt,!0,a),a.dispatch=n,[t,n]},useMemoCache:lf,useCacheRefresh:function(){return ri().memoizedState=_y.bind(null,wt)}},og={readContext:Zn,use:Il,useCallback:Zm,useContext:Zn,useEffect:jm,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:Bl,useRef:km,useState:function(){return Bl(ca)},useDebugValue:df,useDeferredValue:function(t,n){var a=An();return Qm(a,tn.memoizedState,t,n)},useTransition:function(){var t=Bl(ca)[0],n=An().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Am,useId:tg,useHostTransitionStatus:gf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=An();return Lm(a,tn,t,n)},useMemoCache:lf,useCacheRefresh:ng},xy={readContext:Zn,use:Il,useCallback:Zm,useContext:Zn,useEffect:jm,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Km,useReducer:uf,useRef:km,useState:function(){return uf(ca)},useDebugValue:df,useDeferredValue:function(t,n){var a=An();return tn===null?pf(a,t,n):Qm(a,tn.memoizedState,t,n)},useTransition:function(){var t=uf(ca)[0],n=An().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Am,useId:tg,useHostTransitionStatus:gf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,n){var a=An();return tn!==null?Lm(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:ng},rr=null,Mo=0;function Vl(t){var n=Mo;return Mo+=1,rr===null&&(rr=[]),vm(rr,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function lg(t){var n=t._init;return n(t._payload)}function cg(t){function n(J,Y){if(t){var ie=J.deletions;ie===null?(J.deletions=[Y],J.flags|=16):ie.push(Y)}}function a(J,Y){if(!t)return null;for(;Y!==null;)n(J,Y),Y=Y.sibling;return null}function o(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function u(J,Y){return J=aa(J,Y),J.index=0,J.sibling=null,J}function d(J,Y,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<Y?(J.flags|=67108866,Y):ie):(J.flags|=67108866,Y)):(J.flags|=1048576,Y)}function E(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function U(J,Y,ie,Se){return Y===null||Y.tag!==6?(Y=Iu(ie,J.mode,Se),Y.return=J,Y):(Y=u(Y,ie),Y.return=J,Y)}function V(J,Y,ie,Se){var et=ie.type;return et===b?ve(J,Y,ie.props.children,Se,ie.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===G&&lg(et)===Y.type)?(Y=u(Y,ie.props),Eo(Y,ie),Y.return=J,Y):(Y=Al(ie.type,ie.key,ie.props,null,J.mode,Se),Eo(Y,ie),Y.return=J,Y)}function se(J,Y,ie,Se){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=Bu(ie,J.mode,Se),Y.return=J,Y):(Y=u(Y,ie.children||[]),Y.return=J,Y)}function ve(J,Y,ie,Se,et){return Y===null||Y.tag!==7?(Y=ds(ie,J.mode,Se,et),Y.return=J,Y):(Y=u(Y,ie),Y.return=J,Y)}function Ee(J,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Iu(""+Y,J.mode,ie),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case y:return ie=Al(Y.type,Y.key,Y.props,null,J.mode,ie),Eo(ie,Y),ie.return=J,ie;case x:return Y=Bu(Y,J.mode,ie),Y.return=J,Y;case G:var Se=Y._init;return Y=Se(Y._payload),Ee(J,Y,ie)}if(fe(Y)||Q(Y))return Y=ds(Y,J.mode,ie,null),Y.return=J,Y;if(typeof Y.then=="function")return Ee(J,Vl(Y),ie);if(Y.$$typeof===L)return Ee(J,Dl(J,Y),ie);jl(J,Y)}return null}function le(J,Y,ie,Se){var et=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return et!==null?null:U(J,Y,""+ie,Se);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:return ie.key===et?V(J,Y,ie,Se):null;case x:return ie.key===et?se(J,Y,ie,Se):null;case G:return et=ie._init,ie=et(ie._payload),le(J,Y,ie,Se)}if(fe(ie)||Q(ie))return et!==null?null:ve(J,Y,ie,Se,null);if(typeof ie.then=="function")return le(J,Y,Vl(ie),Se);if(ie.$$typeof===L)return le(J,Y,Dl(J,ie),Se);jl(J,ie)}return null}function ue(J,Y,ie,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ie)||null,U(Y,J,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case y:return J=J.get(Se.key===null?ie:Se.key)||null,V(Y,J,Se,et);case x:return J=J.get(Se.key===null?ie:Se.key)||null,se(Y,J,Se,et);case G:var Ct=Se._init;return Se=Ct(Se._payload),ue(J,Y,ie,Se,et)}if(fe(Se)||Q(Se))return J=J.get(ie)||null,ve(Y,J,Se,et,null);if(typeof Se.then=="function")return ue(J,Y,ie,Vl(Se),et);if(Se.$$typeof===L)return ue(J,Y,ie,Dl(Y,Se),et);jl(Y,Se)}return null}function _t(J,Y,ie,Se){for(var et=null,Ct=null,ot=Y,pt=Y=0,Fn=null;ot!==null&&pt<ie.length;pt++){ot.index>pt?(Fn=ot,ot=null):Fn=ot.sibling;var jt=le(J,ot,ie[pt],Se);if(jt===null){ot===null&&(ot=Fn);break}t&&ot&&jt.alternate===null&&n(J,ot),Y=d(jt,Y,pt),Ct===null?et=jt:Ct.sibling=jt,Ct=jt,ot=Fn}if(pt===ie.length)return a(J,ot),Zt&&ms(J,pt),et;if(ot===null){for(;pt<ie.length;pt++)ot=Ee(J,ie[pt],Se),ot!==null&&(Y=d(ot,Y,pt),Ct===null?et=ot:Ct.sibling=ot,Ct=ot);return Zt&&ms(J,pt),et}for(ot=o(ot);pt<ie.length;pt++)Fn=ue(ot,J,pt,ie[pt],Se),Fn!==null&&(t&&Fn.alternate!==null&&ot.delete(Fn.key===null?pt:Fn.key),Y=d(Fn,Y,pt),Ct===null?et=Fn:Ct.sibling=Fn,Ct=Fn);return t&&ot.forEach(function(Ka){return n(J,Ka)}),Zt&&ms(J,pt),et}function dt(J,Y,ie,Se){if(ie==null)throw Error(s(151));for(var et=null,Ct=null,ot=Y,pt=Y=0,Fn=null,jt=ie.next();ot!==null&&!jt.done;pt++,jt=ie.next()){ot.index>pt?(Fn=ot,ot=null):Fn=ot.sibling;var Ka=le(J,ot,jt.value,Se);if(Ka===null){ot===null&&(ot=Fn);break}t&&ot&&Ka.alternate===null&&n(J,ot),Y=d(Ka,Y,pt),Ct===null?et=Ka:Ct.sibling=Ka,Ct=Ka,ot=Fn}if(jt.done)return a(J,ot),Zt&&ms(J,pt),et;if(ot===null){for(;!jt.done;pt++,jt=ie.next())jt=Ee(J,jt.value,Se),jt!==null&&(Y=d(jt,Y,pt),Ct===null?et=jt:Ct.sibling=jt,Ct=jt);return Zt&&ms(J,pt),et}for(ot=o(ot);!jt.done;pt++,jt=ie.next())jt=ue(ot,J,pt,jt.value,Se),jt!==null&&(t&&jt.alternate!==null&&ot.delete(jt.key===null?pt:jt.key),Y=d(jt,Y,pt),Ct===null?et=jt:Ct.sibling=jt,Ct=jt);return t&&ot.forEach(function(yS){return n(J,yS)}),Zt&&ms(J,pt),et}function an(J,Y,ie,Se){if(typeof ie=="object"&&ie!==null&&ie.type===b&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:e:{for(var et=ie.key;Y!==null;){if(Y.key===et){if(et=ie.type,et===b){if(Y.tag===7){a(J,Y.sibling),Se=u(Y,ie.props.children),Se.return=J,J=Se;break e}}else if(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===G&&lg(et)===Y.type){a(J,Y.sibling),Se=u(Y,ie.props),Eo(Se,ie),Se.return=J,J=Se;break e}a(J,Y);break}else n(J,Y);Y=Y.sibling}ie.type===b?(Se=ds(ie.props.children,J.mode,Se,ie.key),Se.return=J,J=Se):(Se=Al(ie.type,ie.key,ie.props,null,J.mode,Se),Eo(Se,ie),Se.return=J,J=Se)}return E(J);case x:e:{for(et=ie.key;Y!==null;){if(Y.key===et)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){a(J,Y.sibling),Se=u(Y,ie.children||[]),Se.return=J,J=Se;break e}else{a(J,Y);break}else n(J,Y);Y=Y.sibling}Se=Bu(ie,J.mode,Se),Se.return=J,J=Se}return E(J);case G:return et=ie._init,ie=et(ie._payload),an(J,Y,ie,Se)}if(fe(ie))return _t(J,Y,ie,Se);if(Q(ie)){if(et=Q(ie),typeof et!="function")throw Error(s(150));return ie=et.call(ie),dt(J,Y,ie,Se)}if(typeof ie.then=="function")return an(J,Y,Vl(ie),Se);if(ie.$$typeof===L)return an(J,Y,Dl(J,ie),Se);jl(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,Y!==null&&Y.tag===6?(a(J,Y.sibling),Se=u(Y,ie),Se.return=J,J=Se):(a(J,Y),Se=Iu(ie,J.mode,Se),Se.return=J,J=Se),E(J)):a(J,Y)}return function(J,Y,ie,Se){try{Mo=0;var et=an(J,Y,ie,Se);return rr=null,et}catch(ot){if(ot===ho||ot===Ll)throw ot;var Ct=di(29,ot,null,J.mode);return Ct.lanes=Se,Ct.return=J,Ct}finally{}}}var or=cg(!0),ug=cg(!1),wi=X(null),Xi=null;function Pa(t){var n=t.alternate;pe(Dn,Dn.current&1),pe(wi,t),Xi===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(Xi=t)}function fg(t){if(t.tag===22){if(pe(Dn,Dn.current),pe(wi,t),Xi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Xi=t)}}else za()}function za(){pe(Dn,Dn.current),pe(wi,wi.current)}function ua(t){he(wi),Xi===t&&(Xi=null),he(Dn)}var Dn=X(0);function Xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||oh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function vf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=_i(),u=La(o);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(vi(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=_i(),u=La(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,o),n!==null&&(vi(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=_i(),o=La(a);o.tag=2,n!=null&&(o.callback=n),n=Na(t,o,a),n!==null&&(vi(n,t,a),mo(n,t,a))}};function hg(t,n,a,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,d):!0}function dg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&xf.enqueueReplaceState(n,n.state,null)}function Ms(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function pg(t){Wl(t)}function mg(t){console.error(t)}function gg(t){Wl(t)}function ql(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _g(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yf(t,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(t,n)},a}function vg(t){return t=La(t),t.tag=3,t}function xg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){_g(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){_g(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function yy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&co(n,a,u,!0),a=wi.current,a!==null){switch(a.tag){case 13:return Xi===null?jf():a.alternate===null&&Sn===0&&(Sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(s(435,a.tag))}return Wf(t,o,u),jf(),!1}if(Zt)return n=wi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(t=Error(s(422),{cause:o}),lo(Ei(t,a)))):(o!==Gu&&(n=Error(s(423),{cause:o}),lo(Ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ei(o,a),u=yf(t.stateNode,o,u),Qu(t,u),Sn!==4&&(Sn=2)),!1;var d=Error(s(520),{cause:o});if(d=Ei(d,a),Do===null?Do=[d]:Do.push(d),Sn!==4&&(Sn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ka===null||!ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=vg(u),xg(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var yg=Error(s(461)),In=!1;function kn(t,n,a,o){n.child=t===null?ug(n,null,a,o):or(n,t.child,a,o)}function Sg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var U in o)U!=="ref"&&(E[U]=o[U])}else E=o;return xs(n),o=nf(t,n,a,E,d,u),U=af(),t!==null&&!In?(sf(t,n,u),fa(t,n,u)):(Zt&&U&&Fu(n),n.flags|=1,kn(t,n,o,u),n.child)}function Mg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Eg(t,n,d,o,u)):(t=Al(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Rf(t,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(E,o)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=aa(d,o),t.ref=n.ref,t.return=n,n.child=t}function Eg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(ao(d,o)&&t.ref===n.ref)if(In=!1,n.pendingProps=o=d,Rf(t,u))(t.flags&131072)!==0&&(In=!0);else return n.lanes=t.lanes,fa(t,n,u)}return Sf(t,n,a,o,u)}function bg(t,n,a){var o=n.pendingProps,u=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,t!==null){for(u=n.child=t.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return Tg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ul(n,d!==null?d.cachePool:null),d!==null?Em(n,d):$u(),fg(n);else return n.lanes=n.childLanes=536870912,Tg(t,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ul(n,d.cachePool),Em(n,d),za(),n.memoizedState=null):(t!==null&&Ul(n,null),$u(),za());return kn(t,n,u,a),n.child}function Tg(t,n,a,o){var u=qu();return u=u===null?null:{parent:Cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Ul(n,null),$u(),fg(n),t!==null&&co(t,n,o,!0),null}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return xs(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!In?(sf(t,n,u),fa(t,n,u)):(Zt&&o&&Fu(n),n.flags|=1,kn(t,n,a,u),n.child)}function Ag(t,n,a,o,u,d){return xs(n),n.updateQueue=null,a=Tm(n,o,a,u),bm(t),o=af(),t!==null&&!In?(sf(t,n,d),fa(t,n,d)):(Zt&&o&&Fu(n),n.flags|=1,kn(t,n,a,d),n.child)}function wg(t,n,a,o,u){if(xs(n),n.stateNode===null){var d=Qs,E=a.contextType;typeof E=="object"&&E!==null&&(d=Zn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=xf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Zu(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?Zn(E):Qs,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(vf(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&xf.enqueueReplaceState(d,d.state,null),_o(n,o,d,u),go(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var U=n.memoizedProps,V=Ms(a,U);d.props=V;var se=d.context,ve=a.contextType;E=Qs,typeof ve=="object"&&ve!==null&&(E=Zn(ve));var Ee=a.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof d.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,ve||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(U||se!==E)&&dg(n,d,o,E),Ua=!1;var le=n.memoizedState;d.state=le,_o(n,o,d,u),go(),se=n.memoizedState,U||le!==se||Ua?(typeof Ee=="function"&&(vf(n,a,Ee,o),se=n.memoizedState),(V=Ua||hg(n,a,V,o,le,se,E))?(ve||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=E,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ku(t,n),E=n.memoizedProps,ve=Ms(a,E),d.props=ve,Ee=n.pendingProps,le=d.context,se=a.contextType,V=Qs,typeof se=="object"&&se!==null&&(V=Zn(se)),U=a.getDerivedStateFromProps,(se=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Ee||le!==V)&&dg(n,d,o,V),Ua=!1,le=n.memoizedState,d.state=le,_o(n,o,d,u),go();var ue=n.memoizedState;E!==Ee||le!==ue||Ua||t!==null&&t.dependencies!==null&&Cl(t.dependencies)?(typeof U=="function"&&(vf(n,a,U,o),ue=n.memoizedState),(ve=Ua||hg(n,a,ve,o,le,ue,V)||t!==null&&t.dependencies!==null&&Cl(t.dependencies))?(se||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ue,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ue,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),d.props=o,d.state=ue,d.context=V,o=ve):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Yl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=or(n,t.child,null,u),n.child=or(n,null,a,u)):kn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=fa(t,n,u),t}function Rg(t,n,a,o){return oo(),n.flags|=256,kn(t,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(t){return{baseLanes:t,cachePool:mm()}}function bf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ri),t}function Cg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Zt){if(u?Pa(n):za(),Zt){var U=yn,V;if(V=U){e:{for(V=U,U=ji;V.nodeType!==8;){if(!U){U=null;break e}if(V=Pi(V.nextSibling),V===null){U=null;break e}}U=V}U!==null?(n.memoizedState={dehydrated:U,treeContext:ps!==null?{id:sa,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},V=di(18,null,null,0),V.stateNode=U,V.return=n,n.child=V,ti=n,yn=null,V=!0):V=!1}V||_s(n)}if(U=n.memoizedState,U!==null&&(U=U.dehydrated,U!==null))return oh(U)?n.lanes=32:n.lanes=536870912,null;ua(n)}return U=o.children,o=o.fallback,u?(za(),u=n.mode,U=Zl({mode:"hidden",children:U},u),o=ds(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,u=n.child,u.memoizedState=Ef(a),u.childLanes=bf(t,E,a),n.memoizedState=Mf,o):(Pa(n),Tf(n,U))}if(V=t.memoizedState,V!==null&&(U=V.dehydrated,U!==null)){if(d)n.flags&256?(Pa(n),n.flags&=-257,n=Af(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),u=o.fallback,U=n.mode,o=Zl({mode:"visible",children:o.children},U),u=ds(u,U,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,or(n,t.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=bf(t,E,a),n.memoizedState=Mf,n=u);else if(Pa(n),oh(U)){if(E=U.nextSibling&&U.nextSibling.dataset,E)var se=E.dgst;E=se,o=Error(s(419)),o.stack="",o.digest=E,lo({value:o,source:null,stack:null}),n=Af(t,n,a)}else if(In||co(t,n,a,!1),E=(a&t.childLanes)!==0,In||E){if(E=fn,E!==null&&(o=a&-a,o=(o&42)!==0?1:lt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==V.retryLane))throw V.retryLane=o,Ks(t,o),vi(E,t,o),yg;U.data==="$?"||jf(),n=Af(t,n,a)}else U.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,yn=Pi(U.nextSibling),ti=n,Zt=!0,gs=null,ji=!1,t!==null&&(Ti[Ai++]=sa,Ti[Ai++]=ra,Ti[Ai++]=ps,sa=t.id,ra=t.overflow,ps=n),n=Tf(n,o.children),n.flags|=4096);return n}return u?(za(),u=o.fallback,U=n.mode,V=t.child,se=V.sibling,o=aa(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,se!==null?u=aa(se,u):(u=ds(u,U,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,U=t.child.memoizedState,U===null?U=Ef(a):(V=U.cachePool,V!==null?(se=Cn._currentValue,V=V.parent!==se?{parent:se,pool:se}:V):V=mm(),U={baseLanes:U.baseLanes|a,cachePool:V}),u.memoizedState=U,u.childLanes=bf(t,E,a),n.memoizedState=Mf,o):(Pa(n),a=t.child,t=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function Tf(t,n){return n=Zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Zl(t,n){return t=di(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Af(t,n,a){return or(n,t.child,null,a),t=Tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Dg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,a)}function wf(t,n,a,o,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Ug(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(kn(t,n,o.children,a),o=Dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,a,n);else if(t.tag===19)Dg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(pe(Dn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Xl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Xl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wf(n,!0,a,null,d);break;case"together":wf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(co(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=aa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=aa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cl(t)))}function Sy(t,n,a){switch(n.tag){case 3:Oe(n,n.stateNode.containerInfo),Da(n,Cn,t.memoizedState.cache),oo();break;case 27:case 5:$e(n);break;case 4:Oe(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(t,n,a):(Pa(n),t=fa(t,n,a),t!==null?t.sibling:null);Pa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(co(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Ug(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(Dn,Dn.current),o)break;return null;case 22:case 23:return n.lanes=0,bg(t,n,a);case 24:Da(n,Cn,t.memoizedState.cache)}return fa(t,n,a)}function Lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)In=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return In=!1,Sy(t,n,a);In=(t.flags&131072)!==0}else In=!1,Zt&&(n.flags&1048576)!==0&&lm(n,Rl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")zu(o)?(t=Ms(o,t),n.tag=1,n=wg(null,n,o,t,a)):(n.tag=0,n=Sf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===A){n.tag=11,n=Sg(null,n,o,t,a);break e}else if(u===B){n.tag=14,n=Mg(null,n,o,t,a);break e}}throw n=ce(o)||o,Error(s(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),wg(t,n,o,u,a);case 3:e:{if(Oe(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ku(t,n),_o(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Da(n,Cn,o),o!==d.cache&&ju(n,[Cn],a,!0),go(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Rg(t,n,o,a);break e}else if(o!==u){u=Ei(Error(s(424)),n),lo(u),n=Rg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(yn=Pi(t.firstChild),ti=n,Zt=!0,gs=null,ji=!0,a=ug(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(oo(),o===u){n=fa(t,n,a);break e}kn(t,n,o,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=z0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Zt||(a=n.type,t=n.pendingProps,o=cc(ae.current).createElement(a),o[ee]=n,o[Be]=t,jn(o,a,t),qt(o),n.stateNode=o):n.memoizedState=z0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $e(n),t===null&&Zt&&(o=n.stateNode=N0(n.type,n.pendingProps,ae.current),ti=n,ji=!0,u=yn,Xa(n.type)?(lh=u,yn=Pi(o.firstChild)):yn=u),kn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Zt&&((u=o=yn)&&(o=Zy(o,n.type,n.pendingProps,ji),o!==null?(n.stateNode=o,ti=n,yn=Pi(o.firstChild),ji=!1,u=!0):u=!1),u||_s(n)),$e(n),u=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,ah(u,d)?o=null:E!==null&&ah(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,dy,null,null,a),Fo._currentValue=u),Yl(t,n),kn(t,n,o,a),n.child;case 6:return t===null&&Zt&&((t=a=yn)&&(a=Ky(a,n.pendingProps,ji),a!==null?(n.stateNode=a,ti=n,yn=null,t=!0):t=!1),t||_s(n)),null;case 13:return Cg(t,n,a);case 4:return Oe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=or(n,null,o,a):kn(t,n,o,a),n.child;case 11:return Sg(t,n,n.type,n.pendingProps,a);case 7:return kn(t,n,n.pendingProps,a),n.child;case 8:return kn(t,n,n.pendingProps.children,a),n.child;case 12:return kn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),kn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=Zn(u),o=o(u),n.flags|=1,kn(t,n,o,a),n.child;case 14:return Mg(t,n,n.type,n.pendingProps,a);case 15:return Eg(t,n,n.type,n.pendingProps,a);case 19:return Ug(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=aa(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return bg(t,n,a);case 24:return xs(n),o=Zn(Cn),t===null?(u=qu(),u===null&&(u=fn,d=Xu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Zu(n),Da(n,Cn,u)):((t.lanes&a)!==0&&(Ku(t,n),_o(n,null,null,a),go()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,Cn,o)):(o=d.cache,Da(n,Cn,o),o!==u.cache&&ju(n,[Cn],a,!0))),kn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function Ng(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(n)){if(n=wi.current,n!==null&&((Ht&4194048)===Ht?Xi!==null:(Ht&62914560)!==Ht&&(Ht&536870912)===0||n!==Xi))throw po=Yu,gm;t.flags|=8192}}function Kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?we():536870912,t.lanes|=n,fr|=n)}function bo(t,n){if(!Zt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function _n(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function My(t,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(n),null;case 1:return _n(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(Cn),at(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ro(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,fm())),_n(n),null;case 26:return a=n.memoizedState,t===null?(ha(n),a!==null?(_n(n),Ng(n,a)):(_n(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ha(n),_n(n),Ng(n,a)):(_n(n),n.flags&=-16777217):(t.memoizedProps!==o&&ha(n),_n(n),n.flags&=-16777217),null;case 27:xt(n),a=ae.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}t=Ie.current,ro(n)?cm(n):(t=N0(u,o,a),n.stateNode=t,ha(n))}return _n(n),null;case 5:if(xt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return _n(n),null}if(t=Ie.current,ro(n))cm(n);else{switch(u=cc(ae.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[ee]=n,t[Be]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(jn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ha(n)}}return _n(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ae.current,ro(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=ti,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ee]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||A0(t.nodeValue,a)),t||_s(n)}else t=cc(t).createTextNode(o),t[ee]=n,n.stateNode=t}return _n(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ro(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ee]=n}else oo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;_n(n),u=!1}else u=fm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ua(n),n):(ua(n),null)}if(ua(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),_n(n),null;case 4:return at(),t===null&&$f(n.stateNode.containerInfo),_n(n),null;case 10:return la(n.type),_n(n),null;case 19:if(he(Dn),u=n.memoizedState,u===null)return _n(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)bo(u,!1);else{if(Sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Xl(t),d!==null){for(n.flags|=128,bo(u,!1),t=d.updateQueue,n.updateQueue=t,Kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)om(a,t),a=a.sibling;return pe(Dn,Dn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Ge()>$l&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Xl(d),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Kl(n,t),bo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Zt)return _n(n),null}else 2*Ge()-u.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(t=u.last,t!==null?t.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ge(),n.sibling=null,t=Dn.current,pe(Dn,o?t&1|2:t&1),n):(_n(n),null);case 22:case 23:return ua(n),ef(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(_n(n),n.subtreeFlags&6&&(n.flags|=8192)):_n(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&he(ys),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(Cn),_n(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ey(t,n){switch(Hu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(Cn),at(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return xt(n),null;case 13:if(ua(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));oo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return he(Dn),null;case 4:return at(),null;case 10:return la(n.type),null;case 22:case 23:return ua(n),ef(),t!==null&&he(ys),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(Cn),null;case 25:return null;default:return null}}function Og(t,n){switch(Hu(n),n.tag){case 3:la(Cn),at();break;case 26:case 27:case 5:xt(n);break;case 4:at();break;case 13:ua(n);break;case 19:he(Dn);break;case 10:la(n.type);break;case 22:case 23:ua(n),ef(),t!==null&&he(ys);break;case 24:la(Cn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(U){un(n,n.return,U)}}function Ia(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,U=E.destroy;if(U!==void 0){E.destroy=void 0,u=n;var V=a,se=U;try{se()}catch(ve){un(u,V,ve)}}}o=o.next}while(o!==d)}}catch(ve){un(n,n.return,ve)}}function Pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Mm(n,a)}catch(o){un(t,t.return,o)}}}function zg(t,n,a){a.props=Ms(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){un(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){un(t,n,u)}}function Wi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){un(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){un(t,n,u)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){un(t,t.return,u)}}function Cf(t,n,a){try{var o=t.stateNode;jy(o,t.type,a,n),o[Be]=n}catch(u){un(t,t.return,u)}}function Bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Xa(t.type)||t.tag===4}function Df(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=lc));else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Uf(t,n,a),t=t.sibling;t!==null;)Uf(t,n,a),t=t.sibling}function Ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ql(t,n,a),t=t.sibling;t!==null;)Ql(t,n,a),t=t.sibling}function Fg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);jn(n,o,a),n[ee]=t,n[Be]=a}catch(d){un(t,t.return,d)}}var da=!1,En=!1,Lf=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Bn=null;function by(t,n){if(t=t.containerInfo,nh=mc,t=Qp(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,U=-1,V=-1,se=0,ve=0,Ee=t,le=null;t:for(;;){for(var ue;Ee!==a||u!==0&&Ee.nodeType!==3||(U=E+u),Ee!==d||o!==0&&Ee.nodeType!==3||(V=E+o),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(ue=Ee.firstChild)!==null;)le=Ee,Ee=ue;for(;;){if(Ee===t)break t;if(le===a&&++se===u&&(U=E),le===d&&++ve===o&&(V=E),(ue=Ee.nextSibling)!==null)break;Ee=le,le=Ee.parentNode}Ee=ue}a=U===-1||V===-1?null:{start:U,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:t,selectionRange:a},mc=!1,Bn=n;Bn!==null;)if(n=Bn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Bn=t;else for(;Bn!==null;){switch(n=Bn,d=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var _t=Ms(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(_t,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(dt){un(a,a.return,dt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Bn=t;break}Bn=n.return}}function Gg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a),o&4&&To(5,a);break;case 1:if(Ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){un(a,a.return,E)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){un(a,a.return,E)}}o&64&&Pg(a),o&512&&Ao(a,a.return);break;case 3:if(Ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(t,n)}catch(E){un(a,a.return,E)}}break;case 27:n===null&&o&4&&Fg(a);case 26:case 5:Ba(t,a),n===null&&o&4&&Ig(a),o&512&&Ao(a,a.return);break;case 12:Ba(t,a);break;case 13:Ba(t,a),o&4&&jg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ny.bind(null,a),Qy(t,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||En,u=da;var d=En;da=o,(En=n)&&!d?Fa(t,a,(a.subtreeFlags&8772)!==0):Ba(t,a),da=u,En=d}break;case 30:break;default:Ba(t,a)}}function kg(t){var n=t.alternate;n!==null&&(t.alternate=null,kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&mt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mn=null,oi=!1;function pa(t,n,a){for(a=a.child;a!==null;)Vg(t,n,a),a=a.sibling}function Vg(t,n,a){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:En||Wi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:En||Wi(a,n);var o=mn,u=oi;Xa(a.type)&&(mn=a.stateNode,oi=!1),pa(t,n,a),Po(a.stateNode),mn=o,oi=u;break;case 5:En||Wi(a,n);case 6:if(o=mn,u=oi,mn=null,pa(t,n,a),mn=o,oi=u,mn!==null)if(oi)try{(mn.nodeType===9?mn.body:mn.nodeName==="HTML"?mn.ownerDocument.body:mn).removeChild(a.stateNode)}catch(d){un(a,n,d)}else try{mn.removeChild(a.stateNode)}catch(d){un(a,n,d)}break;case 18:mn!==null&&(oi?(t=mn,U0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Vo(t)):U0(mn,a.stateNode));break;case 4:o=mn,u=oi,mn=a.stateNode.containerInfo,oi=!0,pa(t,n,a),mn=o,oi=u;break;case 0:case 11:case 14:case 15:En||Ia(2,a,n),En||Ia(4,a,n),pa(t,n,a);break;case 1:En||(Wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&zg(a,n,o)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:En=(o=En)||a.memoizedState!==null,pa(t,n,a),En=o;break;default:pa(t,n,a)}}function jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vo(t)}catch(a){un(n,n.return,a)}}function Ty(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Hg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Hg),n;default:throw Error(s(435,t.tag))}}function Nf(t,n){var a=Ty(t);n.forEach(function(o){var u=Oy.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function pi(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,E=n,U=E;e:for(;U!==null;){switch(U.tag){case 27:if(Xa(U.type)){mn=U.stateNode,oi=!1;break e}break;case 5:mn=U.stateNode,oi=!1;break e;case 3:case 4:mn=U.stateNode.containerInfo,oi=!0;break e}U=U.return}if(mn===null)throw Error(s(160));Vg(d,E,u),mn=null,oi=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Xg(n,t),n=n.sibling}var Oi=null;function Xg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pi(n,t),mi(t),o&4&&(Ia(3,t,t.return),To(3,t),Ia(5,t,t.return));break;case 1:pi(n,t),mi(t),o&512&&(En||a===null||Wi(a,a.return)),o&64&&da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Oi;if(pi(n,t),mi(t),o&512&&(En||a===null||Wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[st]||d[ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),jn(d,o,a),d[ee]=t,qt(d),o=d;break e;case"link":var E=F0("link","href",u).get(o+(a.href||""));if(E){for(var U=0;U<E.length;U++)if(d=E[U],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(U,1);break t}}d=u.createElement(o),jn(d,o,a),u.head.appendChild(d);break;case"meta":if(E=F0("meta","content",u).get(o+(a.content||""))){for(U=0;U<E.length;U++)if(d=E[U],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(U,1);break t}}d=u.createElement(o),jn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[ee]=t,qt(d),o=d}t.stateNode=o}else H0(u,t.type,t.stateNode);else t.stateNode=B0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?H0(u,t.type,t.stateNode):B0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:pi(n,t),mi(t),o&512&&(En||a===null||Wi(a,a.return)),a!==null&&o&4&&Cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pi(n,t),mi(t),o&512&&(En||a===null||Wi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(ue){un(t,t.return,ue)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Cf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(pi(n,t),mi(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ue){un(t,t.return,ue)}}break;case 3:if(hc=null,u=Oi,Oi=uc(n.containerInfo),pi(n,t),Oi=u,mi(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Vo(n.containerInfo)}catch(ue){un(t,t.return,ue)}Lf&&(Lf=!1,Wg(t));break;case 4:o=Oi,Oi=uc(t.stateNode.containerInfo),pi(n,t),mi(t),Oi=o;break;case 12:pi(n,t),mi(t);break;case 13:pi(n,t),mi(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ff=Ge()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Nf(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,se=da,ve=En;if(da=se||u,En=ve||V,pi(n,t),En=ve,da=se,mi(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||da||En||Es(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{U=V.stateNode;var Ee=V.memoizedProps.style,le=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;U.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(ue){un(V,V.return,ue)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ue){un(V,V.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Nf(t,a))));break;case 19:pi(n,t),mi(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Nf(t,o)));break;case 30:break;case 21:break;default:pi(n,t),mi(t)}}function mi(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Bg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Df(t);Ql(t,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(ai(E,""),a.flags&=-33);var U=Df(t);Ql(t,U,E);break;case 3:case 4:var V=a.stateNode.containerInfo,se=Df(t);Uf(t,se,V);break;default:throw Error(s(161))}}catch(ve){un(t,t.return,ve)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Gg(t,n.alternate,n),n=n.sibling}function Es(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),Es(n);break;case 1:Wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&zg(n,n.return,a),Es(n);break;case 27:Po(n.stateNode);case 26:case 5:Wi(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}t=t.sibling}}function Fa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:Fa(u,d,a),To(4,d);break;case 1:if(Fa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){un(o,o.return,se)}if(o=d,u=o.updateQueue,u!==null){var U=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Sm(V[u],U)}catch(se){un(o,o.return,se)}}a&&E&64&&Pg(d),Ao(d,d.return);break;case 27:Fg(d);case 26:case 5:Fa(u,d,a),a&&o===null&&E&4&&Ig(d),Ao(d,d.return);break;case 12:Fa(u,d,a);break;case 13:Fa(u,d,a),a&&E&4&&jg(u,d);break;case 22:d.memoizedState===null&&Fa(u,d,a),Ao(d,d.return);break;case 30:break;default:Fa(u,d,a)}n=n.sibling}}function Of(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function qi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qg(t,n,a,o),n=n.sibling}function qg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:qi(t,n,a,o),u&2048&&To(9,n);break;case 1:qi(t,n,a,o);break;case 3:qi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){qi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,U=d.onPostCommit;typeof U=="function"&&U(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){un(n,n.return,V)}}else qi(t,n,a,o);break;case 13:qi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?qi(t,n,a,o):wo(t,n):d._visibility&2?qi(t,n,a,o):(d._visibility|=2,lr(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Of(E,n);break;case 24:qi(t,n,a,o),u&2048&&Pf(n.alternate,n);break;default:qi(t,n,a,o)}}function lr(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=t,E=n,U=a,V=o,se=E.flags;switch(E.tag){case 0:case 11:case 15:lr(d,E,U,V,u),To(8,E);break;case 23:break;case 22:var ve=E.stateNode;E.memoizedState!==null?ve._visibility&2?lr(d,E,U,V,u):wo(d,E):(ve._visibility|=2,lr(d,E,U,V,u)),u&&se&2048&&Of(E.alternate,E);break;case 24:lr(d,E,U,V,u),u&&se&2048&&Pf(E.alternate,E);break;default:lr(d,E,U,V,u)}n=n.sibling}}function wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Of(o.alternate,o);break;case 24:wo(a,o),u&2048&&Pf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Ro=8192;function cr(t){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 26:cr(t),t.flags&Ro&&t.memoizedState!==null&&uS(Oi,t.memoizedState,t.memoizedProps);break;case 5:cr(t);break;case 3:case 4:var n=Oi;Oi=uc(t.stateNode.containerInfo),cr(t),Oi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Ro,Ro=16777216,cr(t),Ro=n):cr(t));break;default:cr(t)}}function Zg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Bn=o,Qg(o,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Co(t);break;default:Co(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Bn=o,Qg(o,t)}Zg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Qg(t,n){for(;Bn!==null;){var a=Bn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Bn=o;else e:for(a=t;Bn!==null;){o=Bn;var u=o.sibling,d=o.return;if(kg(o),o===a){Bn=null;break e}if(u!==null){u.return=d,Bn=u;break e}Bn=d}}}var Ay={getCacheForType:function(t){var n=Zn(Cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},wy=typeof WeakMap=="function"?WeakMap:Map,Jt=0,fn=null,Ut=null,Ht=0,$t=0,gi=null,Ha=!1,ur=!1,zf=!1,ma=0,Sn=0,Ga=0,bs=0,If=0,Ri=0,fr=0,Do=null,li=null,Bf=!1,Ff=0,$l=1/0,ec=null,ka=null,Vn=0,Va=null,hr=null,dr=0,Hf=0,Gf=null,Jg=null,Uo=0,kf=null;function _i(){if((Jt&2)!==0&&Ht!==0)return Ht&-Ht;if(F.T!==null){var t=er;return t!==0?t:Zf()}return Rt()}function $g(){Ri===0&&(Ri=(Ht&536870912)===0||Zt?Z():536870912);var t=wi.current;return t!==null&&(t.flags|=32),Ri}function vi(t,n,a){(t===fn&&($t===2||$t===9)||t.cancelPendingCommit!==null)&&(pr(t,0),ja(t,Ht,Ri,!1)),Xe(t,a),((Jt&2)===0||t!==fn)&&(t===fn&&((Jt&2)===0&&(bs|=a),Sn===4&&ja(t,Ht,Ri,!1)),Yi(t))}function e0(t,n,a){if((Jt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||ze(t,n),u=o?Dy(t,n):Xf(t,n,!0),d=o;do{if(u===0){ur&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Ry(a)){u=Xf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var U=t;u=Do;var V=U.current.memoizedState.isDehydrated;if(V&&(pr(U,E).flags|=256),E=Xf(U,E,!1),E!==2){if(zf&&!V){U.errorRecoveryDisabledLanes|=d,bs|=d,u=4;break e}d=li,li=u,d!==null&&(li===null?li=d:li.push.apply(li,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){pr(t,0),ja(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,Ri,!Ha);break e;case 2:li=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ff+300-Ge(),10<u)){if(ja(o,n,Ri,!Ha),Ye(o,0,!0)!==0)break e;o.timeoutHandle=C0(t0.bind(null,o,a,li,ec,Bf,n,Ri,bs,fr,Ha,d,2,-0,0),u);break e}t0(o,a,li,ec,Bf,n,Ri,bs,fr,Ha,d,0,-0,0)}}break}while(!0);Yi(t)}function t0(t,n,a,o,u,d,E,U,V,se,ve,Ee,le,ue){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,(Ee&8192||(Ee&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:cS},Yg(n),Ee=fS(),Ee!==null)){t.cancelPendingCommit=Ee(l0.bind(null,t,n,d,a,o,u,E,U,V,ve,1,le,ue)),ja(t,d,E,!se);return}l0(t,n,d,a,o,u,E,U,V)}function Ry(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!hi(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~If,n&=~bs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ue(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&ye(t,a,n)}function tc(){return(Jt&6)===0?(Lo(0),!1):!0}function Vf(){if(Ut!==null){if($t===0)var t=Ut.return;else t=Ut,oa=vs=null,rf(t),rr=null,Mo=0,t=Ut;for(;t!==null;)Og(t.alternate,t),t=t.return;Ut=null}}function pr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Wy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Vf(),fn=t,Ut=a=aa(t.current,null),Ht=n,$t=0,gi=null,Ha=!1,ur=ze(t,n),zf=!1,fr=Ri=If=bs=Ga=Sn=0,li=Do=null,Bf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ue(o),d=1<<u;n|=t[u],o&=~d}return ma=n,El(),a}function n0(t,n){wt=null,F.H=kl,n===ho||n===Ll?(n=xm(),$t=3):n===gm?(n=xm(),$t=4):$t=n===yg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gi=n,Ut===null&&(Sn=1,ql(t,Ei(n,t.current)))}function i0(){var t=F.H;return F.H=kl,t===null?kl:t}function a0(){var t=F.A;return F.A=Ay,t}function jf(){Sn=4,Ha||(Ht&4194048)!==Ht&&wi.current!==null||(ur=!0),(Ga&134217727)===0&&(bs&134217727)===0||fn===null||ja(fn,Ht,Ri,!1)}function Xf(t,n,a){var o=Jt;Jt|=2;var u=i0(),d=a0();(fn!==t||Ht!==n)&&(ec=null,pr(t,n)),n=!1;var E=Sn;e:do try{if($t!==0&&Ut!==null){var U=Ut,V=gi;switch($t){case 8:Vf(),E=6;break e;case 3:case 2:case 9:case 6:wi.current===null&&(n=!0);var se=$t;if($t=0,gi=null,mr(t,U,V,se),a&&ur){E=0;break e}break;default:se=$t,$t=0,gi=null,mr(t,U,V,se)}}Cy(),E=Sn;break}catch(ve){n0(t,ve)}while(!0);return n&&t.shellSuspendCounter++,oa=vs=null,Jt=o,F.H=u,F.A=d,Ut===null&&(fn=null,Ht=0,El()),E}function Cy(){for(;Ut!==null;)s0(Ut)}function Dy(t,n){var a=Jt;Jt|=2;var o=i0(),u=a0();fn!==t||Ht!==n?(ec=null,$l=Ge()+500,pr(t,n)):ur=ze(t,n);e:do try{if($t!==0&&Ut!==null){n=Ut;var d=gi;t:switch($t){case 1:$t=0,gi=null,mr(t,n,d,1);break;case 2:case 9:if(_m(d)){$t=0,gi=null,r0(n);break}n=function(){$t!==2&&$t!==9||fn!==t||($t=7),Yi(t)},d.then(n,n);break e;case 3:$t=7;break e;case 4:$t=5;break e;case 7:_m(d)?($t=0,gi=null,r0(n)):($t=0,gi=null,mr(t,n,d,7));break;case 5:var E=null;switch(Ut.tag){case 26:E=Ut.memoizedState;case 5:case 27:var U=Ut;if(!E||G0(E)){$t=0,gi=null;var V=U.sibling;if(V!==null)Ut=V;else{var se=U.return;se!==null?(Ut=se,nc(se)):Ut=null}break t}}$t=0,gi=null,mr(t,n,d,5);break;case 6:$t=0,gi=null,mr(t,n,d,6);break;case 8:Vf(),Sn=6;break e;default:throw Error(s(462))}}Uy();break}catch(ve){n0(t,ve)}while(!0);return oa=vs=null,F.H=o,F.A=u,Jt=a,Ut!==null?0:(fn=null,Ht=0,El(),Sn)}function Uy(){for(;Ut!==null&&!ft();)s0(Ut)}function s0(t){var n=Lg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?nc(t):Ut=n}function r0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ag(a,n,n.pendingProps,n.type,void 0,Ht);break;case 11:n=Ag(a,n,n.pendingProps,n.type.render,n.ref,Ht);break;case 5:rf(n);default:Og(a,n),n=Ut=om(n,ma),n=Lg(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?nc(t):Ut=n}function mr(t,n,a,o){oa=vs=null,rf(n),rr=null,Mo=0;var u=n.return;try{if(yy(t,u,n,a,Ht)){Sn=1,ql(t,Ei(a,t.current)),Ut=null;return}}catch(d){if(u!==null)throw Ut=u,d;Sn=1,ql(t,Ei(a,t.current)),Ut=null;return}n.flags&32768?(Zt||o===1?t=!0:ur||(Ht&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=wi.current,o!==null&&o.tag===13&&(o.flags|=16384))),o0(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){o0(n,Ha);return}t=n.return;var a=My(n.alternate,n,ma);if(a!==null){Ut=a;return}if(n=n.sibling,n!==null){Ut=n;return}Ut=n=t}while(n!==null);Sn===0&&(Sn=5)}function o0(t,n){do{var a=Ey(t.alternate,t);if(a!==null){a.flags&=32767,Ut=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ut=t;return}Ut=t=a}while(t!==null);Sn=6,Ut=null}function l0(t,n,a,o,u,d,E,U,V){t.cancelPendingCommit=null;do ic();while(Vn!==0);if((Jt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Ou,Ce(t,a,d,E,U,V),t===fn&&(Ut=fn=null,Ht=0),hr=n,Va=t,dr=a,Hf=d,Gf=u,Jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Py(Ft,function(){return d0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=$.p,$.p=2,E=Jt,Jt|=4;try{by(t,n,a)}finally{Jt=E,$.p=u,F.T=o}}Vn=1,c0(),u0(),f0()}}function c0(){if(Vn===1){Vn=0;var t=Va,n=hr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=$.p;$.p=2;var u=Jt;Jt|=4;try{Xg(n,t);var d=ih,E=Qp(t.containerInfo),U=d.focusedElem,V=d.selectionRange;if(E!==U&&U&&U.ownerDocument&&Kp(U.ownerDocument.documentElement,U)){if(V!==null&&Cu(U)){var se=V.start,ve=V.end;if(ve===void 0&&(ve=se),"selectionStart"in U)U.selectionStart=se,U.selectionEnd=Math.min(ve,U.value.length);else{var Ee=U.ownerDocument||document,le=Ee&&Ee.defaultView||window;if(le.getSelection){var ue=le.getSelection(),_t=U.textContent.length,dt=Math.min(V.start,_t),an=V.end===void 0?dt:Math.min(V.end,_t);!ue.extend&&dt>an&&(E=an,an=dt,dt=E);var J=Zp(U,dt),Y=Zp(U,an);if(J&&Y&&(ue.rangeCount!==1||ue.anchorNode!==J.node||ue.anchorOffset!==J.offset||ue.focusNode!==Y.node||ue.focusOffset!==Y.offset)){var ie=Ee.createRange();ie.setStart(J.node,J.offset),ue.removeAllRanges(),dt>an?(ue.addRange(ie),ue.extend(Y.node,Y.offset)):(ie.setEnd(Y.node,Y.offset),ue.addRange(ie))}}}}for(Ee=[],ue=U;ue=ue.parentNode;)ue.nodeType===1&&Ee.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Ee.length;U++){var Se=Ee[U];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}mc=!!nh,ih=nh=null}finally{Jt=u,$.p=o,F.T=a}}t.current=n,Vn=2}}function u0(){if(Vn===2){Vn=0;var t=Va,n=hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=$.p;$.p=2;var u=Jt;Jt|=4;try{Gg(t,n.alternate,n)}finally{Jt=u,$.p=o,F.T=a}}Vn=3}}function f0(){if(Vn===4||Vn===3){Vn=0,rt();var t=Va,n=hr,a=dr,o=Jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Vn=5:(Vn=0,hr=Va=null,h0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),It(a),n=n.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=$.p,$.p=2,F.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var U=o[E];d(U.value,{componentStack:U.stack})}}finally{F.T=n,$.p=u}}(dr&3)!==0&&ic(),Yi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===kf?Uo++:(Uo=0,kf=t):Uo=0,Lo(0)}}function h0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function ic(t){return c0(),u0(),f0(),d0()}function d0(){if(Vn!==5)return!1;var t=Va,n=Hf;Hf=0;var a=It(dr),o=F.T,u=$.p;try{$.p=32>a?32:a,F.T=null,a=Gf,Gf=null;var d=Va,E=dr;if(Vn=0,hr=Va=null,dr=0,(Jt&6)!==0)throw Error(s(331));var U=Jt;if(Jt|=4,Kg(d.current),qg(d,d.current,E,a),Jt=U,Lo(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(me,d)}catch{}return!0}finally{$.p=u,F.T=o,h0(t,n)}}function p0(t,n,a){n=Ei(a,n),n=yf(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Xe(t,2),Yi(t))}function un(t,n,a){if(t.tag===3)p0(t,t,a);else for(;n!==null;){if(n.tag===3){p0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=Ei(a,t),a=vg(2),o=Na(n,a,2),o!==null&&(xg(a,o,n,t),Xe(o,2),Yi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new wy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),t=Ly.bind(null,t,n,a),n.then(t,t))}function Ly(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,fn===t&&(Ht&a)===a&&(Sn===4||Sn===3&&(Ht&62914560)===Ht&&300>Ge()-Ff?(Jt&2)===0&&pr(t,0):If|=a,fr===Ht&&(fr=0)),Yi(t)}function m0(t,n){n===0&&(n=we()),t=Ks(t,n),t!==null&&(Xe(t,n),Yi(t))}function Ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),m0(t,a)}function Oy(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),m0(t,a)}function Py(t,n){return k(t,n)}var ac=null,gr=null,qf=!1,sc=!1,Yf=!1,Ts=0;function Yi(t){t!==gr&&t.next===null&&(gr===null?ac=gr=t:gr=gr.next=t),sc=!0,qf||(qf=!0,Iy())}function Lo(t,n){if(!Yf&&sc){Yf=!0;do for(var a=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,U=o.pingedLanes;d=(1<<31-Ue(42|t)+1)-1,d&=u&~(E&~U),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,x0(o,d))}else d=Ht,d=Ye(o,o===fn?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ze(o,d)||(a=!0,x0(o,d));o=o.next}while(a);Yf=!1}}function zy(){g0()}function g0(){sc=qf=!1;var t=0;Ts!==0&&(Xy()&&(t=Ts),Ts=0);for(var n=Ge(),a=null,o=ac;o!==null;){var u=o.next,d=_0(o,n);d===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(gr=a)):(a=o,(t!==0||(d&3)!==0)&&(sc=!0)),o=u}Lo(t)}function _0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Ue(d),U=1<<E,V=u[E];V===-1?((U&a)===0||(U&o)!==0)&&(u[E]=ht(U,n)):V<=n&&(t.expiredLanes|=U),d&=~U}if(n=fn,a=Ht,a=Ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&($t===2||$t===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Pt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ze(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Pt(o),It(a)){case 2:case 8:a=gt;break;case 32:a=Ft;break;case 268435456:a=I;break;default:a=Ft}return o=v0.bind(null,t),a=k(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Pt(o),t.callbackPriority=2,t.callbackNode=null,2}function v0(t,n){if(Vn!==0&&Vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var o=Ht;return o=Ye(t,t===fn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(e0(t,o,n),_0(t,Ge()),t.callbackNode!=null&&t.callbackNode===a?v0.bind(null,t):null)}function x0(t,n){if(ic())return null;e0(t,n,!0)}function Iy(){qy(function(){(Jt&6)!==0?k(We,zy):g0()})}function Zf(){return Ts===0&&(Ts=Z()),Ts}function y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gl(""+t)}function S0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function By(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=y0((u[Be]||null).action),E=o.submitter;E&&(n=(n=E[Be]||null)?y0(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var U=new yl("action","action",null,o,u);t.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ts!==0){var V=E?S0(u,E):new FormData(u);mf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(U.preventDefault(),V=E?S0(u,E):new FormData(u),mf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var Kf=0;Kf<Nu.length;Kf++){var Qf=Nu[Kf],Fy=Qf.toLowerCase(),Hy=Qf[0].toUpperCase()+Qf.slice(1);Ni(Fy,"on"+Hy)}Ni(em,"onAnimationEnd"),Ni(tm,"onAnimationIteration"),Ni(nm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(iy,"onTransitionRun"),Ni(ay,"onTransitionStart"),Ni(sy,"onTransitionCancel"),Ni(im,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function M0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var U=o[E],V=U.instance,se=U.currentTarget;if(U=U.listener,V!==d&&u.isPropagationStopped())break e;d=U,u.currentTarget=se;try{d(u)}catch(ve){Wl(ve)}u.currentTarget=null,d=V}else for(E=0;E<o.length;E++){if(U=o[E],V=U.instance,se=U.currentTarget,U=U.listener,V!==d&&u.isPropagationStopped())break e;d=U,u.currentTarget=se;try{d(u)}catch(ve){Wl(ve)}u.currentTarget=null,d=V}}}}function Lt(t,n){var a=n[De];a===void 0&&(a=n[De]=new Set);var o=t+"__bubble";a.has(o)||(E0(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),E0(a,t,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[rc]){t[rc]=!0,it.forEach(function(a){a!=="selectionchange"&&(Gy.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[rc]||(n[rc]=!0,Jf("selectionchange",!1,n))}}function E0(t,n,a,o){switch(q0(n)){case 2:var u=pS;break;case 8:u=mS;break;default:u=dh}a=u.bind(null,n,a,t),u=void 0,!yu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function eh(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var U=o.stateNode.containerInfo;if(U===u)break;if(E===4)for(E=o.return;E!==null;){var V=E.tag;if((V===3||V===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;U!==null;){if(E=Qt(U),E===null)return;if(V=E.tag,V===5||V===6||V===26||V===27){o=d=E;continue e}U=U.parentNode}}o=o.return}Dp(function(){var se=d,ve=vu(a),Ee=[];e:{var le=am.get(t);if(le!==void 0){var ue=yl,_t=t;switch(t){case"keypress":if(vl(a)===0)break e;case"keydown":case"keyup":ue=Px;break;case"focusin":_t="focus",ue=bu;break;case"focusout":_t="blur",ue=bu;break;case"beforeblur":case"afterblur":ue=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Bx;break;case em:case tm:case nm:ue=Ax;break;case im:ue=Hx;break;case"scroll":case"scrollend":ue=Sx;break;case"wheel":ue=kx;break;case"copy":case"cut":case"paste":ue=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Pp;break;case"toggle":case"beforetoggle":ue=jx}var dt=(n&4)!==0,an=!dt&&(t==="scroll"||t==="scrollend"),J=dt?le!==null?le+"Capture":null:le;dt=[];for(var Y=se,ie;Y!==null;){var Se=Y;if(ie=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ie===null||J===null||(Se=Qr(Y,J),Se!=null&&dt.push(Oo(Y,Se,ie))),an)break;Y=Y.return}0<dt.length&&(le=new ue(le,_t,null,a,ve),Ee.push({event:le,listeners:dt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&a!==_u&&(_t=a.relatedTarget||a.fromElement)&&(Qt(_t)||_t[Qe]))break e;if((ue||le)&&(le=ve.window===ve?ve:(le=ve.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(_t=a.relatedTarget||a.toElement,ue=se,_t=_t?Qt(_t):null,_t!==null&&(an=c(_t),dt=_t.tag,_t!==an||dt!==5&&dt!==27&&dt!==6)&&(_t=null)):(ue=null,_t=se),ue!==_t)){if(dt=Np,Se="onMouseLeave",J="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(dt=Pp,Se="onPointerLeave",J="onPointerEnter",Y="pointer"),an=ue==null?le:Gt(ue),ie=_t==null?le:Gt(_t),le=new dt(Se,Y+"leave",ue,a,ve),le.target=an,le.relatedTarget=ie,Se=null,Qt(ve)===se&&(dt=new dt(J,Y+"enter",_t,a,ve),dt.target=ie,dt.relatedTarget=an,Se=dt),an=Se,ue&&_t)t:{for(dt=ue,J=_t,Y=0,ie=dt;ie;ie=_r(ie))Y++;for(ie=0,Se=J;Se;Se=_r(Se))ie++;for(;0<Y-ie;)dt=_r(dt),Y--;for(;0<ie-Y;)J=_r(J),ie--;for(;Y--;){if(dt===J||J!==null&&dt===J.alternate)break t;dt=_r(dt),J=_r(J)}dt=null}else dt=null;ue!==null&&b0(Ee,le,ue,dt,!1),_t!==null&&an!==null&&b0(Ee,an,_t,dt,!0)}}e:{if(le=se?Gt(se):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var et=Vp;else if(Gp(le))if(jp)et=ey;else{et=Jx;var Ct=Qx}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?se&&gu(se.elementType)&&(et=Vp):et=$x;if(et&&(et=et(t,se))){kp(Ee,et,a,ve);break e}Ct&&Ct(t,le,se),t==="focusout"&&se&&le.type==="number"&&se.memoizedProps.value!=null&&Yn(le,"number",le.value)}switch(Ct=se?Gt(se):window,t){case"focusin":(Gp(Ct)||Ct.contentEditable==="true")&&(qs=Ct,Du=se,so=null);break;case"focusout":so=Du=qs=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Jp(Ee,a,ve);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Jp(Ee,a,ve)}var ot;if(Au)e:{switch(t){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Ws?Fp(t,a)&&(pt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(zp&&a.locale!=="ko"&&(Ws||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ws&&(ot=Up()):(Ca=ve,Su="value"in Ca?Ca.value:Ca.textContent,Ws=!0)),Ct=oc(se,pt),0<Ct.length&&(pt=new Op(pt,t,null,a,ve),Ee.push({event:pt,listeners:Ct}),ot?pt.data=ot:(ot=Hp(a),ot!==null&&(pt.data=ot)))),(ot=Wx?qx(t,a):Yx(t,a))&&(pt=oc(se,"onBeforeInput"),0<pt.length&&(Ct=new Op("onBeforeInput","beforeinput",null,a,ve),Ee.push({event:Ct,listeners:pt}),Ct.data=ot)),By(Ee,t,se,a,ve)}M0(Ee,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Qr(t,a),u!=null&&o.unshift(Oo(t,u,d)),u=Qr(t,n),u!=null&&o.push(Oo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function b0(t,n,a,o,u){for(var d=n._reactName,E=[];a!==null&&a!==o;){var U=a,V=U.alternate,se=U.stateNode;if(U=U.tag,V!==null&&V===o)break;U!==5&&U!==26&&U!==27||se===null||(V=se,u?(se=Qr(a,d),se!=null&&E.unshift(Oo(a,se,V))):u||(se=Qr(a,d),se!=null&&E.push(Oo(a,se,V)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var ky=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Vy,"")}function A0(t,n){return n=T0(n),T0(t)===n}function lc(){}function nn(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(t,""+o);break;case"className":He(t,"class",o);break;case"tabIndex":He(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":He(t,a,o);break;case"style":Rp(t,o,d);break;case"data":if(n!=="object"){He(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&nn(t,n,"name",u.name,u,null),nn(t,n,"formEncType",u.formEncType,u,null),nn(t,n,"formMethod",u.formMethod,u,null),nn(t,n,"formTarget",u.formTarget,u,null)):(nn(t,n,"encType",u.encType,u,null),nn(t,n,"method",u.method,u,null),nn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=gl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=lc);break;case"onScroll":o!=null&&Lt("scroll",t);break;case"onScrollEnd":o!=null&&Lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=gl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Lt("beforetoggle",t),Lt("toggle",t),Ae(t,"popover",o);break;case"xlinkActuate":Fe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Fe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Fe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Fe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Fe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Fe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Fe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Fe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Fe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ae(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xx.get(a)||a,Ae(t,a,o))}}function th(t,n,a,o,u,d){switch(a){case"style":Rp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ai(t,o):(typeof o=="number"||typeof o=="bigint")&&ai(t,""+o);break;case"onScroll":o!=null&&Lt("scroll",t);break;case"onScrollEnd":o!=null&&Lt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Be]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ae(t,a,o)}}}function jn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",t),Lt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,d,E,a,null)}}u&&nn(t,n,"srcSet",a.srcSet,a,null),o&&nn(t,n,"src",a.src,a,null);return;case"input":Lt("invalid",t);var U=d=E=u=null,V=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var ve=a[o];if(ve!=null)switch(o){case"name":u=ve;break;case"type":E=ve;break;case"checked":V=ve;break;case"defaultChecked":se=ve;break;case"value":d=ve;break;case"defaultValue":U=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:nn(t,n,o,ve,a,null)}}ei(t,d,U,V,se,E,u,!1),Dt(t);return;case"select":Lt("invalid",t),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":d=U;break;case"defaultValue":E=U;break;case"multiple":o=U;default:nn(t,n,u,U,a,null)}n=d,a=E,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":Lt("invalid",t),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(U=a[E],U!=null))switch(E){case"value":o=U;break;case"defaultValue":u=U;break;case"children":d=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(91));break;default:nn(t,n,E,U,a,null)}Vs(t,o,u,d),Dt(t);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:nn(t,n,V,o,a,null)}return;case"dialog":Lt("beforetoggle",t),Lt("toggle",t),Lt("cancel",t),Lt("close",t);break;case"iframe":case"object":Lt("load",t);break;case"video":case"audio":for(o=0;o<No.length;o++)Lt(No[o],t);break;case"image":Lt("error",t),Lt("load",t);break;case"details":Lt("toggle",t);break;case"embed":case"source":case"link":Lt("error",t),Lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,se,o,a,null)}return;default:if(gu(n)){for(ve in a)a.hasOwnProperty(ve)&&(o=a[ve],o!==void 0&&th(t,n,ve,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&nn(t,n,U,o,a,null))}function jy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,U=null,V=null,se=null,ve=null;for(ue in a){var Ee=a[ue];if(a.hasOwnProperty(ue)&&Ee!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":V=Ee;default:o.hasOwnProperty(ue)||nn(t,n,ue,null,o,Ee)}}for(var le in o){var ue=o[le];if(Ee=a[le],o.hasOwnProperty(le)&&(ue!=null||Ee!=null))switch(le){case"type":d=ue;break;case"name":u=ue;break;case"checked":se=ue;break;case"defaultChecked":ve=ue;break;case"value":E=ue;break;case"defaultValue":U=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==Ee&&nn(t,n,le,ue,o,Ee)}}cn(t,E,U,V,se,ve,d,u);return;case"select":ue=E=U=le=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ue=V;default:o.hasOwnProperty(d)||nn(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":le=d;break;case"defaultValue":U=d;break;case"multiple":E=d;default:d!==V&&nn(t,n,u,d,o,V)}n=U,a=E,o=ue,le!=null?xn(t,!!a,le,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":ue=le=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:nn(t,n,U,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":le=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&nn(t,n,E,u,o,d)}Gn(t,le,ue);return;case"option":for(var _t in a)if(le=a[_t],a.hasOwnProperty(_t)&&le!=null&&!o.hasOwnProperty(_t))switch(_t){case"selected":t.selected=!1;break;default:nn(t,n,_t,null,o,le)}for(V in o)if(le=o[V],ue=a[V],o.hasOwnProperty(V)&&le!==ue&&(le!=null||ue!=null))switch(V){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:nn(t,n,V,le,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)le=a[dt],a.hasOwnProperty(dt)&&le!=null&&!o.hasOwnProperty(dt)&&nn(t,n,dt,null,o,le);for(se in o)if(le=o[se],ue=a[se],o.hasOwnProperty(se)&&le!==ue&&(le!=null||ue!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:nn(t,n,se,le,o,ue)}return;default:if(gu(n)){for(var an in a)le=a[an],a.hasOwnProperty(an)&&le!==void 0&&!o.hasOwnProperty(an)&&th(t,n,an,void 0,o,le);for(ve in o)le=o[ve],ue=a[ve],!o.hasOwnProperty(ve)||le===ue||le===void 0&&ue===void 0||th(t,n,ve,le,o,ue);return}}for(var J in a)le=a[J],a.hasOwnProperty(J)&&le!=null&&!o.hasOwnProperty(J)&&nn(t,n,J,null,o,le);for(Ee in o)le=o[Ee],ue=a[Ee],!o.hasOwnProperty(Ee)||le===ue||le==null&&ue==null||nn(t,n,Ee,le,o,ue)}var nh=null,ih=null;function cc(t){return t.nodeType===9?t:t.ownerDocument}function w0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ah(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function Xy(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(t){return D0.resolve(null).then(t).catch(Yy)}:C0;function Yy(t){setTimeout(function(){throw t})}function Xa(t){return t==="head"}function U0(t,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Po(E.documentElement),a&2&&Po(E.body),a&4)for(a=E.head,Po(a),E=a.firstChild;E;){var U=E.nextSibling,V=E.nodeName;E[st]||V==="SCRIPT"||V==="STYLE"||V==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=U}}if(u===0){t.removeChild(d),Vo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Vo(n)}function rh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rh(a),mt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[st])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Pi(t.nextSibling),t===null)break}return null}function Ky(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Pi(t.nextSibling),t===null))return null;return t}function oh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Qy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var lh=null;function L0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function N0(t,n,a){switch(n=cc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);mt(t)}var Ci=new Map,O0=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=$.d;$.d={f:Jy,r:$y,D:eS,C:tS,L:nS,m:iS,X:sS,S:aS,M:rS};function Jy(){var t=ga.f(),n=tc();return t||n}function $y(t){var n=Wt(t);n!==null&&n.tag===5&&n.type==="form"?eg(n):ga.r(t)}var vr=typeof document>"u"?null:document;function P0(t,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=zn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),O0.has(u)||(O0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),jn(n,"link",t),qt(n),o.head.appendChild(n)))}}function eS(t){ga.D(t),P0("dns-prefetch",t,null)}function tS(t,n){ga.C(t,n),P0("preconnect",t,n)}function nS(t,n,a){ga.L(t,n,a);var o=vr;if(o&&t&&n){var u='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+zn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+zn(a.imageSizes)+'"]')):u+='[href="'+zn(t)+'"]';var d=u;switch(n){case"style":d=xr(t);break;case"script":d=yr(t)}Ci.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(d))||n==="script"&&o.querySelector(Io(d))||(n=o.createElement("link"),jn(n,"link",t),qt(n),o.head.appendChild(n)))}}function iS(t,n){ga.m(t,n);var a=vr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+zn(o)+'"][href="'+zn(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=yr(t)}if(!Ci.has(d)&&(t=_({rel:"modulepreload",href:t},n),Ci.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(d)))return}o=a.createElement("link"),jn(o,"link",t),qt(o),a.head.appendChild(o)}}}function aS(t,n,a){ga.S(t,n,a);var o=vr;if(o&&t){var u=Vt(o).hoistableStyles,d=xr(t);n=n||"default";var E=u.get(d);if(!E){var U={loading:0,preload:null};if(E=o.querySelector(zo(d)))U.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(d))&&ch(t,a);var V=E=o.createElement("link");qt(V),jn(V,"link",t),V._p=new Promise(function(se,ve){V.onload=se,V.onerror=ve}),V.addEventListener("load",function(){U.loading|=1}),V.addEventListener("error",function(){U.loading|=2}),U.loading|=4,fc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:U},u.set(d,E)}}}function sS(t,n){ga.X(t,n);var a=vr;if(a&&t){var o=Vt(a).hoistableScripts,u=yr(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=_({src:t,async:!0},n),(n=Ci.get(u))&&uh(t,n),d=a.createElement("script"),qt(d),jn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function rS(t,n){ga.M(t,n);var a=vr;if(a&&t){var o=Vt(a).hoistableScripts,u=yr(t),d=o.get(u);d||(d=a.querySelector(Io(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Ci.get(u))&&uh(t,n),d=a.createElement("script"),qt(d),jn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function z0(t,n,a,o){var u=(u=ae.current)?uc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Vt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xr(a.href);var d=Vt(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(zo(t)))&&!d._p&&(E.instance=d,E.state.loading=5),Ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,a),d||oS(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Vt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xr(t){return'href="'+zn(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function I0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function oS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),jn(n,"link",a),qt(n),t.head.appendChild(n))}function yr(t){return'[src="'+zn(t)+'"]'}function Io(t){return"script[async]"+t}function B0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+zn(a.href)+'"]');if(o)return n.instance=o,qt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),qt(o),jn(o,"style",u),fc(o,a.precedence,t),n.instance=o;case"stylesheet":u=xr(a.href);var d=t.querySelector(zo(u));if(d)return n.state.loading|=4,n.instance=d,qt(d),d;o=I0(a),(u=Ci.get(u))&&ch(o,u),d=(t.ownerDocument||t).createElement("link"),qt(d);var E=d;return E._p=new Promise(function(U,V){E.onload=U,E.onerror=V}),jn(d,"link",o),n.state.loading|=4,fc(d,a.precedence,t),n.instance=d;case"script":return d=yr(a.src),(u=t.querySelector(Io(d)))?(n.instance=u,qt(u),u):(o=a,(u=Ci.get(d))&&(o=_({},a),uh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),qt(u),jn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,fc(o,a.precedence,t));return n.instance}function fc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var U=o[E];if(U.dataset.precedence===n)d=U;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function uh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function F0(t,n,a){if(hc===null){var o=new Map,u=hc=new Map;u.set(a,o)}else u=hc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[st]||d[ee]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var U=o.get(E);U?U.push(d):o.set(E,[d])}}return o}function H0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function lS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Bo=null;function cS(){}function uS(t,n,a){if(Bo===null)throw Error(s(475));var o=Bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=xr(a.href),d=t.querySelector(zo(u));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=dc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=d,qt(d);return}d=t.ownerDocument||t,a=I0(a),(u=Ci.get(u))&&ch(a,u),d=d.createElement("link"),qt(d);var E=d;E._p=new Promise(function(U,V){E.onload=U,E.onerror=V}),jn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=dc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function fS(){if(Bo===null)throw Error(s(475));var t=Bo;return t.stylesheets&&t.count===0&&fh(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&fh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function dc(){if(this.count--,this.count===0){if(this.stylesheets)fh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pc=null;function fh(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pc=new Map,n.forEach(hS,t),pc=null,dc.call(t))}function hS(t,n){if(!(n.state.loading&4)){var a=pc.get(t);if(a)var o=a.get(null);else{a=new Map,pc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:L,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function dS(t,n,a,o,u,d,E,U){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.incompleteTransitions=new Map}function k0(t,n,a,o,u,d,E,U,V,se,ve,Ee){return t=new dS(t,n,a,E,U,V,se,Ee),n=1,d===!0&&(n|=24),d=di(3,null,null,n),t.current=d,d.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Zu(d),t}function V0(t){return t?(t=Qs,t):Qs}function j0(t,n,a,o,u,d){u=V0(u),o.context===null?o.context=u:o.pendingContext=u,o=La(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Na(t,o,n),a!==null&&(vi(a,t,n),mo(a,t,n))}function X0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hh(t,n){X0(t,n),(t=t.alternate)&&X0(t,n)}function W0(t){if(t.tag===13){var n=Ks(t,67108864);n!==null&&vi(n,t,67108864),hh(t,67108864)}}var mc=!0;function pS(t,n,a,o){var u=F.T;F.T=null;var d=$.p;try{$.p=2,dh(t,n,a,o)}finally{$.p=d,F.T=u}}function mS(t,n,a,o){var u=F.T;F.T=null;var d=$.p;try{$.p=8,dh(t,n,a,o)}finally{$.p=d,F.T=u}}function dh(t,n,a,o){if(mc){var u=ph(o);if(u===null)eh(t,n,o,gc,a),Y0(t,o);else if(_S(u,t,n,a,o))o.stopPropagation();else if(Y0(t,o),n&4&&-1<gS.indexOf(t)){for(;u!==null;){var d=Wt(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=qe(d.pendingLanes);if(E!==0){var U=d;for(U.pendingLanes|=2,U.entangledLanes|=2;E;){var V=1<<31-Ue(E);U.entanglements[1]|=V,E&=~V}Yi(d),(Jt&6)===0&&($l=Ge()+500,Lo(0))}}break;case 13:U=Ks(d,2),U!==null&&vi(U,d,2),tc(),hh(d,2)}if(d=ph(o),d===null&&eh(t,n,o,gc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else eh(t,n,o,null,a)}}function ph(t){return t=vu(t),mh(t)}var gc=null;function mh(t){if(gc=null,t=Qt(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function q0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case We:return 2;case gt:return 8;case Ft:case en:return 32;case I:return 268435456;default:return 32}default:return 32}}var gh=!1,Wa=null,qa=null,Ya=null,Ho=new Map,Go=new Map,Za=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(t,n){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function ko(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Wt(n),n!==null&&W0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function _S(t,n,a,o,u){switch(n){case"focusin":return Wa=ko(Wa,t,n,a,o,u),!0;case"dragenter":return qa=ko(qa,t,n,a,o,u),!0;case"mouseover":return Ya=ko(Ya,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Ho.set(d,ko(Ho.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Go.set(d,ko(Go.get(d)||null,t,n,a,o,u)),!0}return!1}function Z0(t){var n=Qt(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Wn(t.priority,function(){if(a.tag===13){var o=_i();o=lt(o);var u=Ks(a,o);u!==null&&vi(u,a,o),hh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ph(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=Wt(a),n!==null&&W0(n),t.blockedOn=a,!1;n.shift()}return!0}function K0(t,n,a){_c(t)&&a.delete(n)}function vS(){gh=!1,Wa!==null&&_c(Wa)&&(Wa=null),qa!==null&&_c(qa)&&(qa=null),Ya!==null&&_c(Ya)&&(Ya=null),Ho.forEach(K0),Go.forEach(K0)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,gh||(gh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,vS)))}var xc=null;function Q0(t){xc!==t&&(xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(mh(o||a)===null)continue;break}var d=Wt(a);d!==null&&(t.splice(n,3),n-=3,mf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Vo(t){function n(V){return vc(V,t)}Wa!==null&&vc(Wa,t),qa!==null&&vc(qa,t),Ya!==null&&vc(Ya,t),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Z0(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[Be]||null;if(typeof d=="function")E||Q0(a);else if(E){var U=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[Be]||null)U=E.formAction;else if(mh(u)!==null)continue}else U=E.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),Q0(a)}}}function _h(t){this._internalRoot=t}yc.prototype.render=_h.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=_i();j0(a,o,t,n,null,null)},yc.prototype.unmount=_h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;j0(t.current,2,null,t,null,null),tc(),n[Qe]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Rt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&Z0(t)}};var J0=e.version;if(J0!=="19.1.1")throw Error(s(527,J0,"19.1.1"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var xS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{me=Sc.inject(xS),_e=Sc}catch{}}return Xo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=pg,d=mg,E=gg,U=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(U=n.unstable_transitionCallbacks)),n=k0(t,1,!1,null,null,a,o,u,d,E,U,null),t[Qe]=n.current,$f(t),new _h(n)},Xo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=pg,E=mg,U=gg,V=null,se=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(V=a.unstable_transitionCallbacks),a.formState!==void 0&&(se=a.formState)),n=k0(t,1,!0,n,a??null,o,u,d,E,U,V,se),n.context=V0(null),a=n.current,o=_i(),o=lt(o),u=La(o),u.callback=null,Na(a,u,o),a=o,n.current.lanes=a,Xe(n,a),Yi(n),t[Qe]=n.current,$f(t),new yc(n)},Xo.version="19.1.1",Xo}var l_;function US(){if(l_)return yh.exports;l_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),yh.exports=DS(),yh.exports}var LS=US();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=be.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},m)=>be.createElement("svg",{ref:m,...OS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Rv("lucide",l),...h},[...f.map(([p,_])=>be.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=(r,e)=>{const i=be.forwardRef(({className:s,...l},c)=>be.createElement(PS,{ref:c,iconNode:e,className:Rv(`lucide-${NS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=zt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=zt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=zt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=zt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=zt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=zt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=zt("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=zt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=zt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=zt("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=zt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=zt("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=zt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=zt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=zt("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=zt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=zt("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=zt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=zt("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=zt("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=zt("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=zt("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=zt("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=zt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=zt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=zt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=zt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=zt("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=zt("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=zt("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=zt("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=zt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=zt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=zt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=zt("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="180",Gr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nM=0,h_=1,iM=2,Uv=1,aM=2,ba=3,ls=0,fi=1,Aa=2,rs=0,kr=1,d_=2,p_=3,m_=4,sM=5,Ns=100,rM=101,oM=102,lM=103,cM=104,uM=200,fM=201,hM=202,dM=203,md=204,gd=205,pM=206,mM=207,gM=208,_M=209,vM=210,xM=211,yM=212,SM=213,MM=214,_d=0,vd=1,xd=2,Xr=3,yd=4,Sd=5,Md=6,Ed=7,Lv=0,EM=1,bM=2,os=0,TM=1,AM=2,wM=3,RM=4,CM=5,DM=6,UM=7,Nv=300,Wr=301,qr=302,bd=303,Td=304,du=306,Ad=1e3,Ps=1001,wd=1002,ki=1003,LM=1004,Mc=1005,$i=1006,Th=1007,zs=1008,ta=1009,Ov=1010,Pv=1011,al=1012,up=1013,Is=1014,wa=1015,ul=1016,fp=1017,hp=1018,sl=1020,zv=35902,Iv=35899,Bv=1021,Fv=1022,Gi=1023,rl=1026,ol=1027,Hv=1028,dp=1029,Gv=1030,pp=1031,mp=1033,eu=33776,tu=33777,nu=33778,iu=33779,Rd=35840,Cd=35841,Dd=35842,Ud=35843,Ld=36196,Nd=37492,Od=37496,Pd=37808,zd=37809,Id=37810,Bd=37811,Fd=37812,Hd=37813,Gd=37814,kd=37815,Vd=37816,jd=37817,Xd=37818,Wd=37819,qd=37820,Yd=37821,Zd=36492,Kd=36494,Qd=36495,Jd=36283,$d=36284,ep=36285,tp=36286,NM=3200,OM=3201,kv=0,PM=1,as="",Si="srgb",Yr="srgb-linear",ou="linear",sn="srgb",Sr=7680,g_=519,zM=512,IM=513,BM=514,Vv=515,FM=516,HM=517,GM=518,kM=519,__=35044,VM=35048,v_="300 es",ea=2e3,lu=2001;class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,np=180/Math.PI;function fl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[s&255]+Qn[s>>8&255]+Qn[s>>16&255]+Qn[s>>24&255]).toLowerCase()}function Nt(r,e,i){return Math.max(e,Math.min(i,r))}function jM(r,e){return(r%e+e)%e}function Ah(r,e,i){return(1-i)*r+i*e}function Wo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const XM={DEG2RAD:nl};class vt{constructor(e=0,i=0){vt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];const y=c[f+0],x=c[f+1],b=c[f+2],T=c[f+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h===1){e[i+0]=y,e[i+1]=x,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==y||p!==x||_!==b){let S=1-h;const v=m*y+p*x+_*b+g*T,N=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const P=Math.sqrt(L),O=Math.atan2(P,v*N);S=Math.sin(S*O)/P,h=Math.sin(h*O)/P}const A=h*N;if(m=m*S+y*A,p=p*S+x*A,_=_*S+b*A,g=g*S+T*A,S===1-h){const P=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=P,p*=P,_*=P,g*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[f],y=c[f+1],x=c[f+2],b=c[f+3];return e[i]=h*b+_*g+m*x-p*y,e[i+1]=m*b+_*y+p*g-h*x,e[i+2]=p*b+_*x+h*y-m*g,e[i+3]=_*b-h*g-m*y-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(c/2),y=m(s/2),x=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=y*_*g+p*x*b,this._y=p*x*g-y*_*b,this._z=p*_*b+y*x*g,this._w=p*_*g-y*x*b;break;case"YXZ":this._x=y*_*g+p*x*b,this._y=p*x*g-y*_*b,this._z=p*_*b-y*x*g,this._w=p*_*g+y*x*b;break;case"ZXY":this._x=y*_*g-p*x*b,this._y=p*x*g+y*_*b,this._z=p*_*b+y*x*g,this._w=p*_*g-y*x*b;break;case"ZYX":this._x=y*_*g-p*x*b,this._y=p*x*g+y*_*b,this._z=p*_*b-y*x*g,this._w=p*_*g+y*x*b;break;case"YZX":this._x=y*_*g+p*x*b,this._y=p*x*g+y*_*b,this._z=p*_*b-y*x*g,this._w=p*_*g-y*x*b;break;case"XZY":this._x=y*_*g-p*x*b,this._y=p*x*g-y*_*b,this._z=p*_*b+y*x*g,this._w=p*_*g+y*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=s+h+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(_-m)*x,this._y=(c-p)*x,this._z=(f-l)*x}else if(s>h&&s>g){const x=2*Math.sqrt(1+s-h-g);this._w=(_-m)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+p)/x}else if(h>g){const x=2*Math.sqrt(1+h-s-g);this._w=(c-p)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(m+_)/x}else{const x=2*Math.sqrt(1+g-s-h);this._w=(f-l)/x,this._x=(c+p)/x,this._y=(m+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-s*p,this._z=c*_+f*p+s*m-l*h,this._w=f*_-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+s*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),g=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,i=0,s=0){q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(x_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(x_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),_=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*_,this.y=s+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new q,x_=new Bs;class Tt{constructor(e,i,s,l,c,f,h,m,p){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],y=s[2],x=s[5],b=s[8],T=l[0],S=l[3],v=l[6],N=l[1],L=l[4],A=l[7],P=l[2],O=l[5],B=l[8];return c[0]=f*T+h*N+m*P,c[3]=f*S+h*L+m*O,c[6]=f*v+h*A+m*B,c[1]=p*T+_*N+g*P,c[4]=p*S+_*L+g*O,c[7]=p*v+_*A+g*B,c[2]=y*T+x*N+b*P,c[5]=y*S+x*L+b*O,c[8]=y*v+x*A+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*h*p-s*c*_+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*f-h*p,y=h*m-_*c,x=p*c-f*m,b=i*g+s*y+l*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-_*s)*T,e[2]=(h*s-l*f)*T,e[3]=y*T,e[4]=(_*i-l*m)*T,e[5]=(l*c-h*i)*T,e[6]=x*T,e[7]=(s*m-p*i)*T,e[8]=(f*i-s*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Rh.makeScale(e,i)),this}rotate(e){return this.premultiply(Rh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rh=new Tt;function jv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WM(){const r=cu("canvas");return r.style.display="block",r}const y_={};function ll(r){r in y_||(y_[r]=!0,console.warn(r))}function qM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const S_=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YM(){const r={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===sn&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===sn&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ll("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ll("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yr]:{primaries:e,whitePoint:s,transfer:ou,toXYZ:S_,fromXYZ:M_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:s,transfer:sn,toXYZ:S_,fromXYZ:M_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Xt=YM();function Ra(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mr;class ZM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Mr===void 0&&(Mr=cu("canvas")),Mr.width=e.width,Mr.height=e.height;const l=Mr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Mr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ra(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KM=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ch(l[f].image)):c.push(Ch(l[f]))}else c=Ch(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QM=0;const Dh=new q;class ii extends Gs{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=Ps,l=Ps,c=$i,f=zs,h=Gi,m=ta,p=ii.DEFAULT_ANISOTROPY,_=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=fl(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case Ps:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case Ps:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Nv;ii.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],y=m[1],x=m[5],b=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-T)<.01&&Math.abs(b-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+T)<.1&&Math.abs(b+S)<.1&&Math.abs(p+x+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,A=(x+1)/2,P=(v+1)/2,O=(_+y)/4,B=(g+T)/4,G=(b+S)/4;return L>A&&L>P?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=O/s,c=B/s):A>P?A<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),s=O/l,c=G/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=B/c,l=G/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-b)*(S-b)+(g-T)*(g-T)+(y-_)*(y-_));return Math.abs(N)<.001&&(N=1),this.x=(S-b)/N,this.y=(g-T)/N,this.z=(y-_)/N,this.w=Math.acos((p+x+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this.w=Nt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this.w=Nt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JM extends Gs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new ii(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:$i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends JM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Xv extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $M extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ki,this.minFilter=ki,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,zi):zi.fromBufferAttribute(c,f),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ec.copy(s.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),bc.subVectors(this.max,qo),Er.subVectors(e.a,qo),br.subVectors(e.b,qo),Tr.subVectors(e.c,qo),Qa.subVectors(br,Er),Ja.subVectors(Tr,br),As.subVectors(Er,Tr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-As.z,As.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,As.z,0,-As.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-As.y,As.x,0];return!Uh(i,Er,br,Tr,bc)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,Er,br,Tr,bc))?!1:(Tc.crossVectors(Qa,Ja),i=[Tc.x,Tc.y,Tc.z],Uh(i,Er,br,Tr,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new q,new q,new q,new q,new q,new q,new q,new q],zi=new q,Ec=new hl,Er=new q,br=new q,Tr=new q,Qa=new q,Ja=new q,As=new q,qo=new q,bc=new q,Tc=new q,ws=new q;function Uh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ws.fromArray(r,c);const h=l.x*Math.abs(ws.x)+l.y*Math.abs(ws.y)+l.z*Math.abs(ws.z),m=e.dot(ws),p=i.dot(ws),_=s.dot(ws);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const eE=new hl,Yo=new q,Lh=new q;class dl{constructor(e=new q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):eE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Lh)),this.expandByPoint(Yo.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new q,Nh=new q,Ac=new q,$a=new q,Oh=new q,wc=new q,Ph=new q;class pl{constructor(e=new q,i=new q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Nh.copy(e).add(i).multiplyScalar(.5),Ac.copy(i).sub(e).normalize(),$a.copy(this.origin).sub(Nh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Ac),h=$a.dot(this.direction),m=-$a.dot(Ac),p=$a.lengthSq(),_=Math.abs(1-f*f);let g,y,x,b;if(_>0)if(g=f*m-h,y=f*h-m,b=c*_,g>=0)if(y>=-b)if(y<=b){const T=1/_;g*=T,y*=T,x=g*(g+f*y+2*h)+y*(f*g+y+2*m)+p}else y=c,g=Math.max(0,-(f*y+h)),x=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(f*y+h)),x=-g*g+y*(y+2*m)+p;else y<=-b?(g=Math.max(0,-(-f*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),x=-g*g+y*(y+2*m)+p):y<=b?(g=0,y=Math.min(Math.max(-c,-m),c),x=y*(y+2*m)+p):(g=Math.max(0,-(f*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),x=-g*g+y*(y+2*m)+p);else y=f>0?-c:c,g=Math.max(0,-(f*y+h)),x=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Nh).addScaledVector(Ac,y),x}intersectSphere(e,i){va.subVectors(e.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,f=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,f=(e.min.y-y.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(h=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,s,l,c){Oh.subVectors(i,e),wc.subVectors(s,e),Ph.crossVectors(Oh,wc);let f=this.direction.dot(Ph),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,e);const m=h*this.direction.dot(wc.crossVectors($a,wc));if(m<0)return null;const p=h*this.direction.dot(Oh.cross($a));if(p<0||m+p>f)return null;const _=-h*$a.dot(Ph);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,s,l,c,f,h,m,p,_,g,y,x,b,T,S){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,_,g,y,x,b,T,S)}set(e,i,s,l,c,f,h,m,p,_,g,y,x,b,T,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=x,v[7]=b,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Ar.setFromMatrixColumn(e,0).length(),c=1/Ar.setFromMatrixColumn(e,1).length(),f=1/Ar.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=f*_,x=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=x+b*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=b+x*p,i[10]=f*m}else if(e.order==="YXZ"){const y=m*_,x=m*g,b=p*_,T=p*g;i[0]=y+T*h,i[4]=b*h-x,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-h,i[2]=x*h-b,i[6]=T+y*h,i[10]=f*m}else if(e.order==="ZXY"){const y=m*_,x=m*g,b=p*_,T=p*g;i[0]=y-T*h,i[4]=-f*g,i[8]=b+x*h,i[1]=x+b*h,i[5]=f*_,i[9]=T-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const y=f*_,x=f*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-x,i[8]=y*p+T,i[1]=m*g,i[5]=T*p+y,i[9]=x*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,x=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-y*g,i[8]=b*g+x,i[1]=g,i[5]=f*_,i[9]=-h*_,i[2]=-p*_,i[6]=x*g+b,i[10]=y-T*g}else if(e.order==="XZY"){const y=f*m,x=f*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+T,i[5]=f*_,i[9]=x*g-b,i[2]=b*g-x,i[6]=h*_,i[10]=T*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tE,e,nE)}lookAt(e,i,s){const l=this.elements;return xi.subVectors(e,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),es.crossVectors(s,xi),es.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),es.crossVectors(s,xi)),es.normalize(),Rc.crossVectors(xi,es),l[0]=es.x,l[4]=Rc.x,l[8]=xi.x,l[1]=es.y,l[5]=Rc.y,l[9]=xi.y,l[2]=es.z,l[6]=Rc.z,l[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],y=s[9],x=s[13],b=s[2],T=s[6],S=s[10],v=s[14],N=s[3],L=s[7],A=s[11],P=s[15],O=l[0],B=l[4],G=l[8],R=l[12],D=l[1],H=l[5],Q=l[9],oe=l[13],ce=l[2],fe=l[6],F=l[10],$=l[14],K=l[3],Me=l[7],z=l[11],X=l[15];return c[0]=f*O+h*D+m*ce+p*K,c[4]=f*B+h*H+m*fe+p*Me,c[8]=f*G+h*Q+m*F+p*z,c[12]=f*R+h*oe+m*$+p*X,c[1]=_*O+g*D+y*ce+x*K,c[5]=_*B+g*H+y*fe+x*Me,c[9]=_*G+g*Q+y*F+x*z,c[13]=_*R+g*oe+y*$+x*X,c[2]=b*O+T*D+S*ce+v*K,c[6]=b*B+T*H+S*fe+v*Me,c[10]=b*G+T*Q+S*F+v*z,c[14]=b*R+T*oe+S*$+v*X,c[3]=N*O+L*D+A*ce+P*K,c[7]=N*B+L*H+A*fe+P*Me,c[11]=N*G+L*Q+A*F+P*z,c[15]=N*R+L*oe+A*$+P*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],y=e[10],x=e[14],b=e[3],T=e[7],S=e[11],v=e[15];return b*(+c*m*g-l*p*g-c*h*y+s*p*y+l*h*x-s*m*x)+T*(+i*m*x-i*p*y+c*f*y-l*f*x+l*p*_-c*m*_)+S*(+i*p*g-i*h*x-c*f*g+s*f*x+c*h*_-s*p*_)+v*(-l*h*_-i*m*g+i*h*y+l*f*g-s*f*y+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],y=e[10],x=e[11],b=e[12],T=e[13],S=e[14],v=e[15],N=g*S*p-T*y*p+T*m*x-h*S*x-g*m*v+h*y*v,L=b*y*p-_*S*p-b*m*x+f*S*x+_*m*v-f*y*v,A=_*T*p-b*g*p+b*h*x-f*T*x-_*h*v+f*g*v,P=b*g*m-_*T*m-b*h*y+f*T*y+_*h*S-f*g*S,O=i*N+s*L+l*A+c*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return e[0]=N*B,e[1]=(T*y*c-g*S*c-T*l*x+s*S*x+g*l*v-s*y*v)*B,e[2]=(h*S*c-T*m*c+T*l*p-s*S*p-h*l*v+s*m*v)*B,e[3]=(g*m*c-h*y*c-g*l*p+s*y*p+h*l*x-s*m*x)*B,e[4]=L*B,e[5]=(_*S*c-b*y*c+b*l*x-i*S*x-_*l*v+i*y*v)*B,e[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*v-i*m*v)*B,e[7]=(f*y*c-_*m*c+_*l*p-i*y*p-f*l*x+i*m*x)*B,e[8]=A*B,e[9]=(b*g*c-_*T*c-b*s*x+i*T*x+_*s*v-i*g*v)*B,e[10]=(f*T*c-b*h*c+b*s*p-i*T*p-f*s*v+i*h*v)*B,e[11]=(_*h*c-f*g*c-_*s*p+i*g*p+f*s*x-i*h*x)*B,e[12]=P*B,e[13]=(_*T*l-b*g*l+b*s*y-i*T*y-_*s*S+i*g*S)*B,e[14]=(b*h*l-f*T*l-b*s*m+i*T*m+f*s*S-i*h*S)*B,e[15]=(f*g*l-_*h*l+_*s*m-i*g*m-f*s*y+i*h*y)*B,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,_=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,_=f+f,g=h+h,y=c*p,x=c*_,b=c*g,T=f*_,S=f*g,v=h*g,N=m*p,L=m*_,A=m*g,P=s.x,O=s.y,B=s.z;return l[0]=(1-(T+v))*P,l[1]=(x+A)*P,l[2]=(b-L)*P,l[3]=0,l[4]=(x-A)*O,l[5]=(1-(y+v))*O,l[6]=(S+N)*O,l[7]=0,l[8]=(b+L)*B,l[9]=(S-N)*B,l[10]=(1-(y+T))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Ar.set(l[0],l[1],l[2]).length();const f=Ar.set(l[4],l[5],l[6]).length(),h=Ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ii.copy(this);const p=1/c,_=1/f,g=1/h;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,i.setFromRotationMatrix(Ii),s.x=c,s.y=f,s.z=h,this}makePerspective(e,i,s,l,c,f,h=ea,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(s-l),y=(i+e)/(i-e),x=(s+l)/(s-l);let b,T;if(m)b=c/(f-c),T=f*c/(f-c);else if(h===ea)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(h===lu)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=ea,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),y=-(i+e)/(i-e),x=-(s+l)/(s-l);let b,T;if(m)b=1/(f-c),T=f/(f-c);else if(h===ea)b=-2/(f-c),T=-(f+c)/(f-c);else if(h===lu)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ar=new q,Ii=new pn,tE=new q(0,0,0),nE=new q(1,1,1),es=new q,Rc=new q,xi=new q,E_=new pn,b_=new Bs;class na{constructor(e=0,i=0,s=0,l=na.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return E_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return b_.setFromEuler(this),this.setFromQuaternion(b_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iE=0;const T_=new q,wr=new Bs,xa=new pn,Cc=new q,Zo=new q,aE=new q,sE=new Bs,A_=new q(1,0,0),w_=new q(0,1,0),R_=new q(0,0,1),C_={type:"added"},rE={type:"removed"},Rr={type:"childadded",child:null},zh={type:"childremoved",child:null};class Nn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new q,i=new na,s=new Bs,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new Tt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(A_,e)}rotateY(e){return this.rotateOnAxis(w_,e)}rotateZ(e){return this.rotateOnAxis(R_,e)}translateOnAxis(e,i){return T_.copy(e).applyQuaternion(this.quaternion),this.position.add(T_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(A_,e)}translateY(e){return this.translateOnAxis(w_,e)}translateZ(e){return this.translateOnAxis(R_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Cc.copy(e):Cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(Zo,Cc,this.up):xa.lookAt(Cc,Zo,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(xa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C_),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(rE),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C_),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,aE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,sE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),y=f(e.skeletons),x=f(e.animations),b=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new q(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new q,ya=new q,Ih=new q,Sa=new q,Cr=new q,Dr=new q,D_=new q,Bh=new q,Fh=new q,Hh=new q,Gh=new on,kh=new on,Vh=new on;class Ui{constructor(e=new q,i=new q,s=new q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Bi.subVectors(e,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Bi.subVectors(l,i),ya.subVectors(s,i),Ih.subVectors(e,i);const f=Bi.dot(Bi),h=Bi.dot(ya),m=Bi.dot(Ih),p=ya.dot(ya),_=ya.dot(Ih),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,x=(p*m-h*_)*y,b=(f*_-h*m)*y;return c.set(1-x-b,b,x)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(h,Sa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Gh.setScalar(0),kh.setScalar(0),Vh.setScalar(0),Gh.fromBufferAttribute(e,i),kh.fromBufferAttribute(e,s),Vh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Gh,c.x),f.addScaledVector(kh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(e,i,s,l){return Bi.subVectors(s,i),ya.subVectors(e,i),Bi.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Bi.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ui.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Cr.subVectors(l,s),Dr.subVectors(c,s),Bh.subVectors(e,s);const m=Cr.dot(Bh),p=Dr.dot(Bh);if(m<=0&&p<=0)return i.copy(s);Fh.subVectors(e,l);const _=Cr.dot(Fh),g=Dr.dot(Fh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(Cr,f);Hh.subVectors(e,c);const x=Cr.dot(Hh),b=Dr.dot(Hh);if(b>=0&&x<=b)return i.copy(c);const T=x*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(s).addScaledVector(Dr,h);const S=_*b-x*g;if(S<=0&&g-_>=0&&x-b>=0)return D_.subVectors(c,l),h=(g-_)/(g-_+(x-b)),i.copy(l).addScaledVector(D_,h);const v=1/(S+T+y);return f=T*v,h=y*v,i.copy(s).addScaledVector(Cr,f).addScaledVector(Dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function jh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ot{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Xt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Xt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Xt.workingColorSpace){if(e=jM(e,1),i=Nt(i,0,1),s=Nt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=jh(f,c,e+1/3),this.g=jh(f,c,e),this.b=jh(f,c,e-1/3)}return Xt.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const s=Wv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Xt.workingToColorSpace(Jn.copy(this),e),Math.round(Nt(Jn.r*255,0,255))*65536+Math.round(Nt(Jn.g*255,0,255))*256+Math.round(Nt(Jn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Xt.workingColorSpace){Xt.workingToColorSpace(Jn.copy(this),i);const s=Jn.r,l=Jn.g,c=Jn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Xt.workingColorSpace){return Xt.workingToColorSpace(Jn.copy(this),i),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Si){Xt.workingToColorSpace(Jn.copy(this),e);const i=Jn.r,s=Jn.g,l=Jn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+i,ts.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ts),e.getHSL(Dc);const s=Ah(ts.h,Dc.h,i),l=Ah(ts.s,Dc.s,i),c=Ah(ts.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Ot;Ot.NAMES=Wv;let oE=0;class ks extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=kr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==md&&(s.blendSrc=this.blendSrc),this.blendDst!==gd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ki extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=Lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wn=new q,Uc=new vt;let lE=0;class Vi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=__,this.updateRanges=[],this.gpuType=wa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Wo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ci(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),s=ci(s,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}}class qv extends Vi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Yv extends Vi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class gn extends Vi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let cE=0;const Di=new pn,Xh=new Nn,Ur=new q,yi=new hl,Ko=new hl,Hn=new q;class Ln extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jv(e)?Yv:qv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new Tt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,i,s){return Di.makeTranslation(e,i,s),this.applyMatrix4(Di),this}scale(e,i,s){return Di.makeScale(e,i,s),this.applyMatrix4(Di),this}lookAt(e){return Xh.lookAt(e),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new gn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const s=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(Hn.addVectors(yi.min,Ko.min),yi.expandByPoint(Hn),Hn.addVectors(yi.max,Ko.max),yi.expandByPoint(Hn)):(yi.expandByPoint(Ko.min),yi.expandByPoint(Ko.max))}yi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Hn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Hn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Hn.fromBufferAttribute(h,p),m&&(Ur.fromBufferAttribute(e,p),Hn.add(Ur)),l=Math.max(l,s.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let G=0;G<s.count;G++)h[G]=new q,m[G]=new q;const p=new q,_=new q,g=new q,y=new vt,x=new vt,b=new vt,T=new q,S=new q;function v(G,R,D){p.fromBufferAttribute(s,G),_.fromBufferAttribute(s,R),g.fromBufferAttribute(s,D),y.fromBufferAttribute(c,G),x.fromBufferAttribute(c,R),b.fromBufferAttribute(c,D),_.sub(p),g.sub(p),x.sub(y),b.sub(y);const H=1/(x.x*b.y-b.x*x.y);isFinite(H)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(_,-b.x).multiplyScalar(H),h[G].add(T),h[R].add(T),h[D].add(T),m[G].add(S),m[R].add(S),m[D].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,R=N.length;G<R;++G){const D=N[G],H=D.start,Q=D.count;for(let oe=H,ce=H+Q;oe<ce;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new q,A=new q,P=new q,O=new q;function B(G){P.fromBufferAttribute(l,G),O.copy(P);const R=h[G];L.copy(R),L.sub(P.multiplyScalar(P.dot(R))).normalize(),A.crossVectors(O,R);const H=A.dot(m[G])<0?-1:1;f.setXYZW(G,L.x,L.y,L.z,H)}for(let G=0,R=N.length;G<R;++G){const D=N[G],H=D.start,Q=D.count;for(let oe=H,ce=H+Q;oe<ce;oe+=3)B(e.getX(oe+0)),B(e.getX(oe+1)),B(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new q,c=new q,f=new q,h=new q,m=new q,p=new q,_=new q,g=new q;if(e)for(let y=0,x=e.count;y<x;y+=3){const b=e.getX(y+0),T=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),h.add(_),m.add(_),p.add(_),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Hn.fromBufferAttribute(e,i),Hn.normalize(),e.setXYZ(i,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,y=new p.constructor(m.length*_);let x=0,b=0;for(let T=0,S=m.length;T<S;T++){h.isInterleavedBufferAttribute?x=m[T]*h.data.stride+h.offset:x=m[T]*_;for(let v=0;v<_;v++)y[b++]=p[x++]}return new Vi(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ln,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const y=p[_],x=e(y,s);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const x=p[g];_.push(x.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,x=g.length;y<x;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U_=new pn,Rs=new pl,Lc=new dl,L_=new q,Nc=new q,Oc=new q,Pc=new q,Wh=new q,zc=new q,N_=new q,Ic=new q;class bn extends Nn{constructor(e=new Ln,i=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Wh.fromBufferAttribute(g,e),f?zc.addScaledVector(Wh,_):zc.addScaledVector(Wh.sub(i),_))}i.add(zc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),Rs.copy(e.ray).recast(e.near),!(Lc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Lc,L_)===null||Rs.origin.distanceToSquared(L_)>(e.far-e.near)**2))&&(U_.copy(c).invert(),Rs.copy(e.ray).applyMatrix4(U_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Rs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=y.length;b<T;b++){const S=y[b],v=f[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let A=N,P=L;A<P;A+=3){const O=h.getX(A),B=h.getX(A+1),G=h.getX(A+2);l=Bc(this,v,e,s,p,_,g,O,B,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=b,v=T;S<v;S+=3){const N=h.getX(S),L=h.getX(S+1),A=h.getX(S+2);l=Bc(this,f,e,s,p,_,g,N,L,A),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=y.length;b<T;b++){const S=y[b],v=f[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let A=N,P=L;A<P;A+=3){const O=A,B=A+1,G=A+2;l=Bc(this,v,e,s,p,_,g,O,B,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),T=Math.min(m.count,x.start+x.count);for(let S=b,v=T;S<v;S+=3){const N=S,L=S+1,A=S+2;l=Bc(this,f,e,s,p,_,g,N,L,A),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function uE(r,e,i,s,l,c,f,h){let m;if(e.side===fi?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===ls,h),m===null)return null;Ic.copy(h),Ic.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:r}}function Bc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Nc),r.getVertexPosition(m,Oc),r.getVertexPosition(p,Pc);const _=uE(r,e,i,s,Nc,Oc,Pc,N_);if(_){const g=new q;Ui.getBarycoord(N_,Nc,Oc,Pc,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,h,m,p,g,new vt)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new vt)),f&&(_.normal=Ui.getInterpolatedAttribute(f,h,m,p,g,new q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new q,materialIndex:0};Ui.getNormal(Nc,Oc,Pc,y.normal),_.face=y,_.barycoord=g}return _}class Hi extends Ln{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let y=0,x=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(g,2));function b(T,S,v,N,L,A,P,O,B,G,R){const D=A/B,H=P/G,Q=A/2,oe=P/2,ce=O/2,fe=B+1,F=G+1;let $=0,K=0;const Me=new q;for(let z=0;z<F;z++){const X=z*H-oe;for(let he=0;he<fe;he++){const pe=he*D-Q;Me[T]=pe*N,Me[S]=X*L,Me[v]=ce,p.push(Me.x,Me.y,Me.z),Me[T]=0,Me[S]=0,Me[v]=O>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(he/B),g.push(1-z/G),$+=1}}for(let z=0;z<G;z++)for(let X=0;X<B;X++){const he=y+X+fe*z,pe=y+X+fe*(z+1),Ie=y+(X+1)+fe*(z+1),je=y+(X+1)+fe*z;m.push(he,pe,je),m.push(pe,Ie,je),K+=6}h.addGroup(x,K,R),x+=K,y+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function ni(r){const e={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)e[l]=s[l]}return e}function fE(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Zv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}const hE={clone:Zr,merge:ni};var dE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dE,this.fragmentShader=pE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=fE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Kv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new q,O_=new vt,P_=new vt;class Mi extends Kv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,O_,P_),i.subVectors(P_,O_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(nl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Lr=-90,Nr=1;class mE extends Nn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Lr,Nr,e,i);l.layers=this.layers,this.add(l);const c=new Mi(Lr,Nr,e,i);c.layers=this.layers,this.add(c);const f=new Mi(Lr,Nr,e,i);f.layers=this.layers,this.add(f);const h=new Mi(Lr,Nr,e,i);h.layers=this.layers,this.add(h);const m=new Mi(Lr,Nr,e,i);m.layers=this.layers,this.add(m);const p=new Mi(Lr,Nr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,f),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(g,y,x),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Qv extends ii{constructor(e=[],i=Wr,s,l,c,f,h,m,p,_){super(e,i,s,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gE extends Fs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Hi(5,5,5),c=new cs({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:rs});c.uniforms.tEquirect.value=i;const f=new bn(l,c),h=i.minFilter;return i.minFilter===zs&&(i.minFilter=$i),new mE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}class Fr extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,s),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),x=.02,b=.005;p.inputState.pinching&&y>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Fr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class vp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ot(e),this.near=i,this.far=s}clone(){return new vp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let vE=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};const Yh=new q,xE=new q,yE=new Tt;class is{constructor(e=new q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Yh.subVectors(s,i).cross(xE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Yh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||yE.getNormalMatrix(e),l=this.coplanarPoint(Yh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new dl,SE=new vt(.5,.5),Fc=new q;class xp{constructor(e=new is,i=new is,s=new is,l=new is,c=new is,f=new is){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ea,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],x=c[7],b=c[8],T=c[9],S=c[10],v=c[11],N=c[12],L=c[13],A=c[14],P=c[15];if(l[0].setComponents(p-f,x-_,v-b,P-N).normalize(),l[1].setComponents(p+f,x+_,v+b,P+N).normalize(),l[2].setComponents(p+h,x+g,v+T,P+L).normalize(),l[3].setComponents(p-h,x-g,v-T,P-L).normalize(),s)l[4].setComponents(m,y,S,A).normalize(),l[5].setComponents(p-m,x-y,v-S,P-A).normalize();else if(l[4].setComponents(p-m,x-y,v-S,P-A).normalize(),i===ea)l[5].setComponents(p+m,x+y,v+S,P+A).normalize();else if(i===lu)l[5].setComponents(m,y,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const i=SE.distanceTo(e.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jr extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uu=new q,fu=new q,z_=new pn,Qo=new pl,Hc=new dl,Zh=new q,I_=new q;class au extends Nn{constructor(e=new Ln,i=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uu.distanceTo(fu);e.setAttribute("lineDistance",new gn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;z_.copy(l).invert(),Qo.copy(e.ray).applyMatrix4(z_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const x=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let T=x,S=b-1;T<S;T+=p){const v=_.getX(T),N=_.getX(T+1),L=Gc(this,e,Qo,m,v,N,T);L&&i.push(L)}if(this.isLineLoop){const T=_.getX(b-1),S=_.getX(x),v=Gc(this,e,Qo,m,T,S,b-1);v&&i.push(v)}}else{const x=Math.max(0,f.start),b=Math.min(y.count,f.start+f.count);for(let T=x,S=b-1;T<S;T+=p){const v=Gc(this,e,Qo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Gc(this,e,Qo,m,b-1,x,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Gc(r,e,i,s,l,c,f){const h=r.geometry.attributes.position;if(uu.fromBufferAttribute(h,l),fu.fromBufferAttribute(h,c),i.distanceSqToSegment(uu,fu,Zh,I_)>s)return;Zh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Zh);if(!(p<e.near||p>e.far))return{distance:p,point:I_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const B_=new q,F_=new q;class Jv extends au{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)B_.fromBufferAttribute(i,l),F_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+B_.distanceTo(F_);e.setAttribute("lineDistance",new gn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $v extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H_=new pn,ip=new pl,kc=new dl,Vc=new q;class ME extends Nn{constructor(e=new Ln,i=new $v){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;H_.copy(l).invert(),ip.copy(e.ray).applyMatrix4(H_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const y=Math.max(0,f.start),x=Math.min(p.count,f.start+f.count);for(let b=y,T=x;b<T;b++){const S=p.getX(b);Vc.fromBufferAttribute(g,S),G_(Vc,S,m,l,e,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(g.count,f.start+f.count);for(let b=y,T=x;b<T;b++)Vc.fromBufferAttribute(g,b),G_(Vc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function G_(r,e,i,s,l,c,f){const h=ip.distanceSqToPoint(r);if(h<i){const m=new q;ip.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class EE extends ii{constructor(e,i,s,l,c,f,h,m,p){super(e,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ex extends ii{constructor(e,i,s=Is,l,c,f,h=ki,m=ki,p,_=rl,g=1){if(_!==rl&&_!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,f,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tx extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pu extends Ln{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],y=[],x=[];let b=0;const T=[],S=s/2;let v=0;N(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(y,3)),this.setAttribute("uv",new gn(x,2));function N(){const A=new q,P=new q;let O=0;const B=(i-e)/s;for(let G=0;G<=c;G++){const R=[],D=G/c,H=D*(i-e)+e;for(let Q=0;Q<=l;Q++){const oe=Q/l,ce=oe*m+h,fe=Math.sin(ce),F=Math.cos(ce);P.x=H*fe,P.y=-D*s+S,P.z=H*F,g.push(P.x,P.y,P.z),A.set(fe,B,F).normalize(),y.push(A.x,A.y,A.z),x.push(oe,1-D),R.push(b++)}T.push(R)}for(let G=0;G<l;G++)for(let R=0;R<c;R++){const D=T[R][G],H=T[R+1][G],Q=T[R+1][G+1],oe=T[R][G+1];(e>0||R!==0)&&(_.push(D,H,oe),O+=3),(i>0||R!==c-1)&&(_.push(H,Q,oe),O+=3)}p.addGroup(v,O,0),v+=O}function L(A){const P=b,O=new vt,B=new q;let G=0;const R=A===!0?e:i,D=A===!0?1:-1;for(let Q=1;Q<=l;Q++)g.push(0,S*D,0),y.push(0,D,0),x.push(.5,.5),b++;const H=b;for(let Q=0;Q<=l;Q++){const ce=Q/l*m+h,fe=Math.cos(ce),F=Math.sin(ce);B.x=R*F,B.y=S*D,B.z=R*fe,g.push(B.x,B.y,B.z),y.push(0,D,0),O.x=fe*.5+.5,O.y=F*.5*D+.5,x.push(O.x,O.y),b++}for(let Q=0;Q<l;Q++){const oe=P+Q,ce=H+Q;A===!0?_.push(ce,ce+1,oe):_.push(ce+1,ce,oe),G+=3}p.addGroup(v,G,A===!0?1:2),v+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yp extends pu{constructor(e=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,e,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(e){return new yp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sp extends Ln{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],f=[];h(l),p(s),_(),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(c.slice(),3)),this.setAttribute("uv",new gn(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const L=new q,A=new q,P=new q;for(let O=0;O<i.length;O+=3)x(i[O+0],L),x(i[O+1],A),x(i[O+2],P),m(L,A,P,N)}function m(N,L,A,P){const O=P+1,B=[];for(let G=0;G<=O;G++){B[G]=[];const R=N.clone().lerp(A,G/O),D=L.clone().lerp(A,G/O),H=O-G;for(let Q=0;Q<=H;Q++)Q===0&&G===O?B[G][Q]=R:B[G][Q]=R.clone().lerp(D,Q/H)}for(let G=0;G<O;G++)for(let R=0;R<2*(O-G)-1;R++){const D=Math.floor(R/2);R%2===0?(y(B[G][D+1]),y(B[G+1][D]),y(B[G][D])):(y(B[G][D+1]),y(B[G+1][D+1]),y(B[G+1][D]))}}function p(N){const L=new q;for(let A=0;A<c.length;A+=3)L.x=c[A+0],L.y=c[A+1],L.z=c[A+2],L.normalize().multiplyScalar(N),c[A+0]=L.x,c[A+1]=L.y,c[A+2]=L.z}function _(){const N=new q;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const A=S(N)/2/Math.PI+.5,P=v(N)/Math.PI+.5;f.push(A,1-P)}b(),g()}function g(){for(let N=0;N<f.length;N+=6){const L=f[N+0],A=f[N+2],P=f[N+4],O=Math.max(L,A,P),B=Math.min(L,A,P);O>.9&&B<.1&&(L<.2&&(f[N+0]+=1),A<.2&&(f[N+2]+=1),P<.2&&(f[N+4]+=1))}}function y(N){c.push(N.x,N.y,N.z)}function x(N,L){const A=N*3;L.x=e[A+0],L.y=e[A+1],L.z=e[A+2]}function b(){const N=new q,L=new q,A=new q,P=new q,O=new vt,B=new vt,G=new vt;for(let R=0,D=0;R<c.length;R+=9,D+=6){N.set(c[R+0],c[R+1],c[R+2]),L.set(c[R+3],c[R+4],c[R+5]),A.set(c[R+6],c[R+7],c[R+8]),O.set(f[D+0],f[D+1]),B.set(f[D+2],f[D+3]),G.set(f[D+4],f[D+5]),P.copy(N).add(L).add(A).divideScalar(3);const H=S(P);T(O,D+0,N,H),T(B,D+2,L,H),T(G,D+4,A,H)}}function T(N,L,A,P){P<0&&N.x===1&&(f[L]=N.x-1),A.x===0&&A.z===0&&(f[L]=P/2/Math.PI+.5)}function S(N){return Math.atan2(N.z,-N.x)}function v(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sp(e.vertices,e.indices,e.radius,e.details)}}const jc=new q,Xc=new q,Kh=new q,Wc=new Ui;class bE extends Ln{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(nl*i),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],_=["a","b","c"],g=new Array(3),y={},x=[];for(let b=0;b<m;b+=3){f?(p[0]=f.getX(b),p[1]=f.getX(b+1),p[2]=f.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:T,b:S,c:v}=Wc;if(T.fromBufferAttribute(h,p[0]),S.fromBufferAttribute(h,p[1]),v.fromBufferAttribute(h,p[2]),Wc.getNormal(Kh),g[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,g[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,g[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let N=0;N<3;N++){const L=(N+1)%3,A=g[N],P=g[L],O=Wc[_[N]],B=Wc[_[L]],G=`${A}_${P}`,R=`${P}_${A}`;R in y&&y[R]?(Kh.dot(y[R].normal)<=c&&(x.push(O.x,O.y,O.z),x.push(B.x,B.y,B.z)),y[R]=null):G in y||(y[G]={index0:p[N],index1:p[L],normal:Kh.clone()})}}for(const b in y)if(y[b]){const{index0:T,index1:S}=y[b];jc.fromBufferAttribute(h,T),Xc.fromBufferAttribute(h,S),x.push(jc.x,jc.y,jc.z),x.push(Xc.x,Xc.y,Xc.z)}this.setAttribute("position",new gn(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Mp extends Sp{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Mp(e.radius,e.detail)}}class ml extends Ln{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=e/h,y=i/m,x=[],b=[],T=[],S=[];for(let v=0;v<_;v++){const N=v*y-f;for(let L=0;L<p;L++){const A=L*g-c;b.push(A,-N,0),T.push(0,0,1),S.push(L/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<h;N++){const L=N+p*v,A=N+p*(v+1),P=N+1+p*(v+1),O=N+1+p*v;x.push(L,A,O),x.push(A,P,O)}this.setIndex(x),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ep extends Ln{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const _=[],g=new q,y=new q,x=[],b=[],T=[],S=[];for(let v=0;v<=s;v++){const N=[],L=v/s;let A=0;v===0&&f===0?A=.5/i:v===s&&m===Math.PI&&(A=-.5/i);for(let P=0;P<=i;P++){const O=P/i;g.x=-e*Math.cos(l+O*c)*Math.sin(f+L*h),g.y=e*Math.cos(f+L*h),g.z=e*Math.sin(l+O*c)*Math.sin(f+L*h),b.push(g.x,g.y,g.z),y.copy(g).normalize(),T.push(y.x,y.y,y.z),S.push(O+A,1-L),N.push(p++)}_.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const L=_[v][N+1],A=_[v][N],P=_[v+1][N],O=_[v+1][N+1];(v!==0||f>0)&&x.push(L,A,O),(v!==s-1||m<Math.PI)&&x.push(A,P,O)}this.setIndex(x),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ep(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hu extends Ln{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],_=new q,g=new q,y=new q;for(let x=0;x<=s;x++)for(let b=0;b<=l;b++){const T=b/l*c,S=x/s*Math.PI*2;g.x=(e+i*Math.cos(S))*Math.cos(T),g.y=(e+i*Math.cos(S))*Math.sin(T),g.z=i*Math.sin(S),h.push(g.x,g.y,g.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(b/l),p.push(x/s)}for(let x=1;x<=s;x++)for(let b=1;b<=l;b++){const T=(l+1)*x+b-1,S=(l+1)*(x-1)+b-1,v=(l+1)*(x-1)+b,N=(l+1)*x+b;f.push(T,S,N),f.push(S,v,N)}this.setIndex(f),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(m,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qc extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TE extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AE extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wE extends jr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class bp extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class RE extends bp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Qh=new pn,k_=new q,V_=new q;class nx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=ta,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xp,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;k_.setFromMatrixPosition(e.matrixWorld),i.position.copy(k_),V_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const j_=new pn,Jo=new q,Jh=new q;class CE extends nx{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new on(2,1,1,1),new on(0,1,1,1),new on(3,1,1,1),new on(1,1,1,1),new on(3,0,1,1),new on(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,c=e.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Jo.setFromMatrixPosition(e.matrixWorld),s.position.copy(Jo),Jh.copy(s.position),Jh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Jh),s.updateMatrixWorld(),l.makeTranslation(-Jo.x,-Jo.y,-Jo.z),j_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(j_,s.coordinateSystem,s.reversedDepth)}}class DE extends bp{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new CE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ix extends Kv{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class UE extends nx{constructor(){super(new ix(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LE extends bp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new UE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class NE extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const X_=new pn;class OE{constructor(e,i,s=0,l=1/0){this.ray=new pl(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new _p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return X_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(e,i=!0,s=[]){return ap(e,this,s,i),s.sort(W_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)ap(e[l],this,s,i);return s.sort(W_),s}}function W_(r,e){return r.distance-e.distance}function ap(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)ap(c[f],e,i,!0)}}class q_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Nt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PE extends Jv{constructor(e=10,i=10,s=4473924,l=8947848){s=new Ot(s),l=new Ot(l);const c=i/2,f=e/i,h=e/2,m=[],p=[];for(let y=0,x=0,b=-h;y<=i;y++,b+=f){m.push(-h,0,b,h,0,b),m.push(b,0,-h,b,0,h);const T=y===c?s:l;T.toArray(p,x),x+=3,T.toArray(p,x),x+=3,T.toArray(p,x),x+=3,T.toArray(p,x),x+=3}const _=new Ln;_.setAttribute("position",new gn(m,3)),_.setAttribute("color",new gn(p,3));const g=new jr({vertexColors:!0,toneMapped:!1});super(_,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zE extends Gs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Y_(r,e,i,s){const l=IE(s);switch(i){case Bv:return r*e;case Hv:return r*e/l.components*l.byteLength;case dp:return r*e/l.components*l.byteLength;case Gv:return r*e*2/l.components*l.byteLength;case pp:return r*e*2/l.components*l.byteLength;case Fv:return r*e*3/l.components*l.byteLength;case Gi:return r*e*4/l.components*l.byteLength;case mp:return r*e*4/l.components*l.byteLength;case eu:case tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Ud:return Math.max(r,16)*Math.max(e,8)/4;case Rd:case Dd:return Math.max(r,8)*Math.max(e,8)/2;case Ld:case Nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Kd:case Qd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jd:case $d:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function IE(r){switch(r){case ta:case Ov:return{byteLength:1,components:1};case al:case Pv:case ul:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case Is:case up:case wa:return{byteLength:4,components:1};case zv:case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ax(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function BE(r){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,_),h.onUploadCallback();let x;if(p instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=r.SHORT;else if(p instanceof Uint32Array)x=r.UNSIGNED_INT;else if(p instanceof Int32Array)x=r.INT;else if(p instanceof Int8Array)x=r.BYTE;else if(p instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,_);else{g.sort((x,b)=>x.start-b.start);let y=0;for(let x=1;x<g.length;x++){const b=g[y],T=g[x];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++y,g[y]=T)}g.length=y+1;for(let x=0,b=g.length;x<b;x++){const T=g[x];r.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var FE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
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
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,WE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JE=`#ifdef USE_IRIDESCENCE
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
#endif`,$E=`#ifdef USE_BUMPMAP
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
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,l1=`#define PI 3.141592653589793
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
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u1=`vec3 transformedNormal = objectNormal;
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
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
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
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
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
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z1=`PhysicalMaterial material;
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
#endif`,I1=`struct PhysicalMaterial {
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
}`,B1=`
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eb=`float getShadowMask() {
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
}`,bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fb=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
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
}`,Xb=`#if DEPTH_PACKING == 3200
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
}`,Wb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,$b=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,rT=`#define PHONG
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
}`,oT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,hT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:FE,alphahash_pars_fragment:HE,alphamap_fragment:GE,alphamap_pars_fragment:kE,alphatest_fragment:VE,alphatest_pars_fragment:jE,aomap_fragment:XE,aomap_pars_fragment:WE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:ZE,beginnormal_vertex:KE,bsdfs:QE,iridescence_fragment:JE,bumpmap_pars_fragment:$E,clipping_planes_fragment:e1,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:n1,clipping_planes_vertex:i1,color_fragment:a1,color_pars_fragment:s1,color_pars_vertex:r1,color_vertex:o1,common:l1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:d1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:_1,envmap_common_pars_fragment:v1,envmap_pars_fragment:x1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:U1,envmap_vertex:S1,fog_vertex:M1,fog_pars_vertex:E1,fog_fragment:b1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:w1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:C1,lights_pars_begin:D1,lights_toon_fragment:L1,lights_toon_pars_fragment:N1,lights_phong_fragment:O1,lights_phong_pars_fragment:P1,lights_physical_fragment:z1,lights_physical_pars_fragment:I1,lights_fragment_begin:B1,lights_fragment_maps:F1,lights_fragment_end:H1,logdepthbuf_fragment:G1,logdepthbuf_pars_fragment:k1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:j1,map_fragment:X1,map_pars_fragment:W1,map_particle_fragment:q1,map_particle_pars_fragment:Y1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:K1,morphinstance_vertex:Q1,morphcolor_vertex:J1,morphnormal_vertex:$1,morphtarget_pars_vertex:eb,morphtarget_vertex:tb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:ab,normal_pars_vertex:sb,normal_vertex:rb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:cb,clearcoat_pars_fragment:ub,iridescence_pars_fragment:fb,opaque_fragment:hb,packing:db,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:gb,dithering_pars_fragment:_b,roughnessmap_fragment:vb,roughnessmap_pars_fragment:xb,shadowmap_pars_fragment:yb,shadowmap_pars_vertex:Sb,shadowmap_vertex:Mb,shadowmask_pars_fragment:Eb,skinbase_vertex:bb,skinning_pars_vertex:Tb,skinning_vertex:Ab,skinnormal_vertex:wb,specularmap_fragment:Rb,specularmap_pars_fragment:Cb,tonemapping_fragment:Db,tonemapping_pars_fragment:Ub,transmission_fragment:Lb,transmission_pars_fragment:Nb,uv_pars_fragment:Ob,uv_pars_vertex:Pb,uv_vertex:zb,worldpos_vertex:Ib,background_vert:Bb,background_frag:Fb,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:kb,cube_frag:Vb,depth_vert:jb,depth_frag:Xb,distanceRGBA_vert:Wb,distanceRGBA_frag:qb,equirect_vert:Yb,equirect_frag:Zb,linedashed_vert:Kb,linedashed_frag:Qb,meshbasic_vert:Jb,meshbasic_frag:$b,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:sT,meshphong_vert:rT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Ve={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ji={basic:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ot(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ni([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ni([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ot(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ni([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ni([Ve.points,Ve.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ni([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ni([Ve.common,Ve.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ni([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ni([Ve.sprite,Ve.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:ni([Ve.common,Ve.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:ni([Ve.lights,Ve.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Ji.physical={uniforms:ni([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Yc={r:0,b:0,g:0},Ds=new na,vT=new pn;function xT(r,e,i,s,l,c,f){const h=new Ot(0);let m=c===!0?0:1,p,_,g=null,y=0,x=null;function b(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?i:e).get(A)),A}function T(L){let A=!1;const P=b(L);P===null?v(h,m):P&&P.isColor&&(v(P,1),A=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,A){const P=b(A);P&&(P.isCubeTexture||P.mapping===du)?(_===void 0&&(_=new bn(new Hi(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Zr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,B,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ds.copy(A.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(Ds)),_.material.toneMapped=Xt.getTransfer(P.colorSpace)!==sn,(g!==P||y!==P.version||x!==r.toneMapping)&&(_.material.needsUpdate=!0,g=P,y=P.version,x=r.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new bn(new ml(2,2),new cs({name:"BackgroundMaterial",uniforms:Zr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Xt.getTransfer(P.colorSpace)!==sn,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||y!==P.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,g=P,y=P.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,A){L.getRGB(Yc,Zv(r)),s.buffers.color.setClear(Yc.r,Yc.g,Yc.b,A,f)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,A=1){h.set(L),m=A,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:T,addToRenderList:S,dispose:N}}function yT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function h(D,H,Q,oe,ce){let fe=!1;const F=g(oe,Q,H);c!==F&&(c=F,p(c.object)),fe=x(D,oe,Q,ce),fe&&b(D,oe,Q,ce),ce!==null&&e.update(ce,r.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,A(D,H,Q,oe),ce!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function m(){return r.createVertexArray()}function p(D){return r.bindVertexArray(D)}function _(D){return r.deleteVertexArray(D)}function g(D,H,Q){const oe=Q.wireframe===!0;let ce=s[D.id];ce===void 0&&(ce={},s[D.id]=ce);let fe=ce[H.id];fe===void 0&&(fe={},ce[H.id]=fe);let F=fe[oe];return F===void 0&&(F=y(m()),fe[oe]=F),F}function y(D){const H=[],Q=[],oe=[];for(let ce=0;ce<i;ce++)H[ce]=0,Q[ce]=0,oe[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:oe,object:D,attributes:{},index:null}}function x(D,H,Q,oe){const ce=c.attributes,fe=H.attributes;let F=0;const $=Q.getAttributes();for(const K in $)if($[K].location>=0){const z=ce[K];let X=fe[K];if(X===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),z===void 0||z.attribute!==X||X&&z.data!==X.data)return!0;F++}return c.attributesNum!==F||c.index!==oe}function b(D,H,Q,oe){const ce={},fe=H.attributes;let F=0;const $=Q.getAttributes();for(const K in $)if($[K].location>=0){let z=fe[K];z===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(z=D.instanceColor));const X={};X.attribute=z,z&&z.data&&(X.data=z.data),ce[K]=X,F++}c.attributes=ce,c.attributesNum=F,c.index=oe}function T(){const D=c.newAttributes;for(let H=0,Q=D.length;H<Q;H++)D[H]=0}function S(D){v(D,0)}function v(D,H){const Q=c.newAttributes,oe=c.enabledAttributes,ce=c.attributeDivisors;Q[D]=1,oe[D]===0&&(r.enableVertexAttribArray(D),oe[D]=1),ce[D]!==H&&(r.vertexAttribDivisor(D,H),ce[D]=H)}function N(){const D=c.newAttributes,H=c.enabledAttributes;for(let Q=0,oe=H.length;Q<oe;Q++)H[Q]!==D[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function L(D,H,Q,oe,ce,fe,F){F===!0?r.vertexAttribIPointer(D,H,Q,ce,fe):r.vertexAttribPointer(D,H,Q,oe,ce,fe)}function A(D,H,Q,oe){T();const ce=oe.attributes,fe=Q.getAttributes(),F=H.defaultAttributeValues;for(const $ in fe){const K=fe[$];if(K.location>=0){let Me=ce[$];if(Me===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor)),Me!==void 0){const z=Me.normalized,X=Me.itemSize,he=e.get(Me);if(he===void 0)continue;const pe=he.buffer,Ie=he.type,je=he.bytesPerElement,ae=Ie===r.INT||Ie===r.UNSIGNED_INT||Me.gpuType===up;if(Me.isInterleavedBufferAttribute){const xe=Me.data,Oe=xe.stride,at=Me.offset;if(xe.isInstancedInterleavedBuffer){for(let $e=0;$e<K.locationSize;$e++)v(K.location+$e,xe.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let $e=0;$e<K.locationSize;$e++)S(K.location+$e);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let $e=0;$e<K.locationSize;$e++)L(K.location+$e,X/K.locationSize,Ie,z,Oe*je,(at+X/K.locationSize*$e)*je,ae)}else{if(Me.isInstancedBufferAttribute){for(let xe=0;xe<K.locationSize;xe++)v(K.location+xe,Me.meshPerAttribute);D.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let xe=0;xe<K.locationSize;xe++)S(K.location+xe);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let xe=0;xe<K.locationSize;xe++)L(K.location+xe,X/K.locationSize,Ie,z,X*je,X/K.locationSize*xe*je,ae)}}else if(F!==void 0){const z=F[$];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(K.location,z);break;case 3:r.vertexAttrib3fv(K.location,z);break;case 4:r.vertexAttrib4fv(K.location,z);break;default:r.vertexAttrib1fv(K.location,z)}}}}N()}function P(){G();for(const D in s){const H=s[D];for(const Q in H){const oe=H[Q];for(const ce in oe)_(oe[ce].object),delete oe[ce];delete H[Q]}delete s[D]}}function O(D){if(s[D.id]===void 0)return;const H=s[D.id];for(const Q in H){const oe=H[Q];for(const ce in oe)_(oe[ce].object),delete oe[ce];delete H[Q]}delete s[D.id]}function B(D){for(const H in s){const Q=s[H];if(Q[D.id]===void 0)continue;const oe=Q[D.id];for(const ce in oe)_(oe[ce].object),delete oe[ce];delete Q[D.id]}}function G(){R(),f=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:N}}function ST(r,e,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function f(p,_,g){g!==0&&(r.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let x=0;for(let b=0;b<g;b++)x+=_[b];i.update(x,s,1)}function m(p,_,g,y){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<p.length;b++)f(p[b],_[b],y[b]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*y[T];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function MT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Gi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const G=B===ul&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ta&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==wa&&!G)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=b>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:P,maxSamples:O}}function ET(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new is,h=new Tt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||s!==0||l;return l=y,s=g.length,x},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,x){const b=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,v=r.get(g);if(!l||b===null||b.length===0||c&&!S)c?_(null):p();else{const N=c?0:s,L=N*4;let A=v.clippingState||null;m.value=A,A=_(b,y,L,x);for(let P=0;P!==L;++P)A[P]=i[P];v.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,y,x,b){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=m.value,b!==!0||S===null){const v=x+T*4,N=y.matrixWorldInverse;h.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,A=x;L!==T;++L,A+=4)f.copy(g[L]).applyMatrix4(N,h),f.normal.toArray(S,A),S[A+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function bT(r){let e=new WeakMap;function i(f,h){return h===bd?f.mapping=Wr:h===Td&&(f.mapping=qr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===bd||h===Td)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new gE(m.height);return p.fromEquirectangularTexture(r,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Hr=4,Z_=[.125,.215,.35,.446,.526,.582],Os=20,$h=new ix,K_=new Ot;let ed=null,td=0,nd=0,id=!1;const Ls=(1+Math.sqrt(5))/2,Or=1/Ls,Q_=[new q(-Ls,Or,0),new q(Ls,Or,0),new q(-Or,0,Ls),new q(Or,0,Ls),new q(0,Ls,-Or),new q(0,Ls,Or),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],TT=new q;class J_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=TT}=c;ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,Zc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Wr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:ul,format:Gi,colorSpace:Yr,depthBuffer:!1},l=$_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$_(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(c)),this._blurMaterial=wT(c,e,i)}return l}_compileMaterial(e){const i=new bn(this._lodPlanes[0],e);this._renderer.compile(i,$h)}_sceneToCubeUV(e,i,s,l,c){const m=new Mi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(K_),g.toneMapping=os,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new Ki({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),S=new bn(new Hi,T);let v=!1;const N=e.background;N?N.isColor&&(T.color.copy(N),e.background=null,v=!0):(T.color.copy(K_),v=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):A===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const P=this._cubeSize;Zc(l,A*P,L>2?P:0,P,P),g.setRenderTarget(l),v&&g.render(S,m),g.render(e,m)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=y,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Wr||e.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new bn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Zc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,$h)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Q_[(l-c-1)%Q_.length];this._blur(e,c-1,c,f,h)}i.autoClear=s}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new bn(this._lodPlanes[l],p),y=p.uniforms,x=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Os-1),T=c/b,S=isFinite(c)?1+Math.floor(_*T):Os;S>Os&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Os}`);const v=[];let N=0;for(let B=0;B<Os;++B){const G=B/T,R=Math.exp(-G*G/2);v.push(R),B===0?N+=R:B<S&&(N+=2*R)}for(let B=0;B<v.length;B++)v[B]=v[B]/N;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=b,y.mipInt.value=L-s;const A=this._sizeLods[l],P=3*A*(l>L-Hr?l-L+Hr:0),O=4*(this._cubeSize-A);Zc(i,P,O,3*A,2*A),m.setRenderTarget(i),m.render(g,$h)}}function AT(r){const e=[],i=[],s=[];let l=r;const c=r-Hr+1+Z_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>r-Hr?m=Z_[f-r+Hr-1]:f===0&&(m=0),s.push(m);const p=1/(h-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,b=6,T=3,S=2,v=1,N=new Float32Array(T*b*x),L=new Float32Array(S*b*x),A=new Float32Array(v*b*x);for(let O=0;O<x;O++){const B=O%3*2/3-1,G=O>2?0:-1,R=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];N.set(R,T*b*O),L.set(y,S*b*O);const D=[O,O,O,O,O,O];A.set(D,v*b*O)}const P=new Ln;P.setAttribute("position",new Vi(N,T)),P.setAttribute("uv",new Vi(L,S)),P.setAttribute("faceIndex",new Vi(A,v)),e.push(P),l>Hr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function $_(r,e,i){const s=new Fs(r,e,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Zc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function wT(r,e,i){const s=new Float32Array(Os),l=new q(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function ev(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tp(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function tv(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Tp(){return`

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
	`}function RT(r){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===bd||m===Td,_=m===Wr||m===qr;if(p||_){let g=e.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new J_(r)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return p&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new J_(r)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function CT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ll("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function DT(r,e,i,s){const l={},c=new WeakMap;function f(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const x=c.get(y);x&&(e.remove(x),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const x in y)e.update(y[x],r.ARRAY_BUFFER)}function p(g){const y=[],x=g.index,b=g.attributes.position;let T=0;if(x!==null){const N=x.array;T=x.version;for(let L=0,A=N.length;L<A;L+=3){const P=N[L+0],O=N[L+1],B=N[L+2];y.push(P,O,O,B,B,P)}}else if(b!==void 0){const N=b.array;T=b.version;for(let L=0,A=N.length/3-1;L<A;L+=3){const P=L+0,O=L+1,B=L+2;y.push(P,O,O,B,B,P)}}else return;const S=new(jv(y)?Yv:qv)(y,1);S.version=T;const v=c.get(g);v&&e.remove(v),c.set(g,S)}function _(g){const y=c.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function UT(r,e,i){let s;function l(y){s=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,x){r.drawElements(s,x,c,y*f),i.update(x,s,1)}function p(y,x,b){b!==0&&(r.drawElementsInstanced(s,x,c,y*f,b),i.update(x,s,b))}function _(y,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,b);let S=0;for(let v=0;v<b;v++)S+=x[v];i.update(S,s,1)}function g(y,x,b,T){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)p(y[v]/f,x[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(s,x,0,c,y,0,T,0,b);let v=0;for(let N=0;N<b;N++)v+=x[N]*T[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function LT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function NT(r,e,i){const s=new WeakMap,l=new on;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let R=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",R)};y!==void 0&&y.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),b===!0&&(L=2),T===!0&&(L=3);let A=h.attributes.position.count*L,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const O=new Float32Array(A*P*4*g),B=new Xv(O,A,P,g);B.type=wa,B.needsUpdate=!0;const G=L*4;for(let D=0;D<g;D++){const H=S[D],Q=v[D],oe=N[D],ce=A*P*4*D;for(let fe=0;fe<H.count;fe++){const F=fe*G;x===!0&&(l.fromBufferAttribute(H,fe),O[ce+F+0]=l.x,O[ce+F+1]=l.y,O[ce+F+2]=l.z,O[ce+F+3]=0),b===!0&&(l.fromBufferAttribute(Q,fe),O[ce+F+4]=l.x,O[ce+F+5]=l.y,O[ce+F+6]=l.z,O[ce+F+7]=0),T===!0&&(l.fromBufferAttribute(oe,fe),O[ce+F+8]=l.x,O[ce+F+9]=l.y,O[ce+F+10]=l.z,O[ce+F+11]=oe.itemSize===4?l.w:1)}}y={count:g,texture:B,size:new vt(A,P)},s.set(h,y),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let x=0;for(let T=0;T<p.length;T++)x+=p[T];const b=h.morphTargetsRelative?1:1-x;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function OT(r,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const sx=new ii,nv=new ex(1,1),rx=new Xv,ox=new $M,lx=new Qv,iv=[],av=[],sv=new Float32Array(16),rv=new Float32Array(9),ov=new Float32Array(4);function Kr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=iv[l];if(c===void 0&&(c=new Float32Array(l),iv[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function On(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Pn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function mu(r,e){let i=av[e];i===void 0&&(i=new Int32Array(e),av[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function PT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function zT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2fv(this.addr,e),Pn(i,e)}}function IT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;r.uniform3fv(this.addr,e),Pn(i,e)}}function BT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4fv(this.addr,e),Pn(i,e)}}function FT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;ov.set(s),r.uniformMatrix2fv(this.addr,!1,ov),Pn(i,s)}}function HT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;rv.set(s),r.uniformMatrix3fv(this.addr,!1,rv),Pn(i,s)}}function GT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;sv.set(s),r.uniformMatrix4fv(this.addr,!1,sv),Pn(i,s)}}function kT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function VT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2iv(this.addr,e),Pn(i,e)}}function jT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3iv(this.addr,e),Pn(i,e)}}function XT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4iv(this.addr,e),Pn(i,e)}}function WT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function qT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2uiv(this.addr,e),Pn(i,e)}}function YT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3uiv(this.addr,e),Pn(i,e)}}function ZT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4uiv(this.addr,e),Pn(i,e)}}function KT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(nv.compareFunction=Vv,c=nv):c=sx,i.setTexture2D(e||c,l)}function QT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||ox,l)}function JT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||lx,l)}function $T(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||rx,l)}function eA(r){switch(r){case 5126:return PT;case 35664:return zT;case 35665:return IT;case 35666:return BT;case 35674:return FT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return kT;case 35667:case 35671:return VT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}function tA(r,e){r.uniform1fv(this.addr,e)}function nA(r,e){const i=Kr(e,this.size,2);r.uniform2fv(this.addr,i)}function iA(r,e){const i=Kr(e,this.size,3);r.uniform3fv(this.addr,i)}function aA(r,e){const i=Kr(e,this.size,4);r.uniform4fv(this.addr,i)}function sA(r,e){const i=Kr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function rA(r,e){const i=Kr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function oA(r,e){const i=Kr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function lA(r,e){r.uniform1iv(this.addr,e)}function cA(r,e){r.uniform2iv(this.addr,e)}function uA(r,e){r.uniform3iv(this.addr,e)}function fA(r,e){r.uniform4iv(this.addr,e)}function hA(r,e){r.uniform1uiv(this.addr,e)}function dA(r,e){r.uniform2uiv(this.addr,e)}function pA(r,e){r.uniform3uiv(this.addr,e)}function mA(r,e){r.uniform4uiv(this.addr,e)}function gA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||sx,c[f])}function _A(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||ox,c[f])}function vA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||lx,c[f])}function xA(r,e,i){const s=this.cache,l=e.length,c=mu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||rx,c[f])}function yA(r){switch(r){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return sA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}class SA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=eA(i.type)}}class MA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=yA(i.type)}}class EA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function lv(r,e){r.seq.push(e),r.map[e.id]=e}function bA(r,e,i){const s=r.name,l=s.length;for(ad.lastIndex=0;;){const c=ad.exec(s),f=ad.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){lv(i,p===void 0?new SA(h,r,e):new MA(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new EA(h),lv(i,g)),i=g}}}class su{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);bA(c,f,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function cv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const TA=37297;let AA=0;function wA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const uv=new Tt;function RA(r){Xt._getMatrix(uv,Xt.workingColorSpace,r);const e=`mat3( ${uv.elements.map(i=>i.toFixed(4))} )`;switch(Xt.getTransfer(r)){case ou:return[e,"LinearTransferOETF"];case sn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+wA(r.getShaderSource(e),h)}else return c}function CA(r,e){const i=RA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function DA(r,e){let i;switch(e){case TM:i="Linear";break;case AM:i="Reinhard";break;case wM:i="Cineon";break;case RM:i="ACESFilmic";break;case DM:i="AgX";break;case UM:i="Neutral";break;case CM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new q;function UA(){Xt.getLuminanceCoefficients(Kc);const r=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function NA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function OA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function $o(r){return r!==""}function hv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(r){return r.replace(PA,IA)}const zA=new Map;function IA(r,e){let i=At[e];if(i===void 0){const s=zA.get(e);if(s!==void 0)i=At[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sp(i)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pv(r){return r.replace(BA,FA)}function FA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function mv(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===aM?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ba&&(e="SHADOWMAP_TYPE_VSM"),e}function GA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wr:case qr:e="ENVMAP_TYPE_CUBE";break;case du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function VA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Lv:e="ENVMAP_BLENDING_MULTIPLY";break;case EM:e="ENVMAP_BLENDING_MIX";break;case bM:e="ENVMAP_BLENDING_ADD";break}return e}function jA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function XA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=HA(i),p=GA(i),_=kA(i),g=VA(i),y=jA(i),x=LA(i),b=NA(c),T=l.createProgram();let S,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),v.length>0&&(v+=`
`)):(S=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),v=[mv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==os?"#define TONE_MAPPING":"",i.toneMapping!==os?At.tonemapping_pars_fragment:"",i.toneMapping!==os?DA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,CA("linearToOutputTexel",i.outputColorSpace),UA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),f=sp(f),f=hv(f,i),f=dv(f,i),h=sp(h),h=hv(h,i),h=dv(h,i),f=pv(f),h=pv(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+S+f,A=N+v+h,P=cv(l,l.VERTEX_SHADER,L),O=cv(l,l.FRAGMENT_SHADER,A);l.attachShader(T,P),l.attachShader(T,O),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function B(H){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",oe=l.getShaderInfoLog(P)||"",ce=l.getShaderInfoLog(O)||"",fe=Q.trim(),F=oe.trim(),$=ce.trim();let K=!0,Me=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,O);else{const z=fv(l,P,"vertex"),X=fv(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+fe+`
`+z+`
`+X)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(F===""||$==="")&&(Me=!1);Me&&(H.diagnostics={runnable:K,programLog:fe,vertexShader:{log:F,prefix:S},fragmentShader:{log:$,prefix:v}})}l.deleteShader(P),l.deleteShader(O),G=new su(l,T),R=OA(l,T)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,TA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=O,this}let WA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new YA(e),i.set(e,s)),s}}class YA{constructor(e){this.id=WA++,this.code=e,this.usedTimes=0}}function ZA(r,e,i,s,l,c,f){const h=new _p,m=new qA,p=new Set,_=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(R){return p.add(R),R===0?"uv":`uv${R}`}function S(R,D,H,Q,oe){const ce=Q.fog,fe=oe.geometry,F=R.isMeshStandardMaterial?Q.environment:null,$=(R.isMeshStandardMaterial?i:e).get(R.envMap||F),K=$&&$.mapping===du?$.image.height:null,Me=b[R.type];R.precision!==null&&(x=l.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const z=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,X=z!==void 0?z.length:0;let he=0;fe.morphAttributes.position!==void 0&&(he=1),fe.morphAttributes.normal!==void 0&&(he=2),fe.morphAttributes.color!==void 0&&(he=3);let pe,Ie,je,ae;if(Me){const Rt=Ji[Me];pe=Rt.vertexShader,Ie=Rt.fragmentShader}else pe=R.vertexShader,Ie=R.fragmentShader,m.update(R),je=m.getVertexShaderID(R),ae=m.getFragmentShaderID(R);const xe=r.getRenderTarget(),Oe=r.state.buffers.depth.getReversed(),at=oe.isInstancedMesh===!0,$e=oe.isBatchedMesh===!0,xt=!!R.map,Bt=!!R.matcap,k=!!$,Pt=!!R.aoMap,ft=!!R.lightMap,rt=!!R.bumpMap,Ge=!!R.normalMap,kt=!!R.displacementMap,We=!!R.emissiveMap,gt=!!R.metalnessMap,Ft=!!R.roughnessMap,en=R.anisotropy>0,I=R.clearcoat>0,C=R.dispersion>0,te=R.iridescence>0,me=R.sheen>0,_e=R.transmission>0,de=en&&!!R.anisotropyMap,Ue=I&&!!R.clearcoatMap,Le=I&&!!R.clearcoatNormalMap,Ke=I&&!!R.clearcoatRoughnessMap,ke=te&&!!R.iridescenceMap,Re=te&&!!R.iridescenceThicknessMap,Ne=me&&!!R.sheenColorMap,qe=me&&!!R.sheenRoughnessMap,Ye=!!R.specularMap,ze=!!R.specularColorMap,ht=!!R.specularIntensityMap,Z=_e&&!!R.transmissionMap,we=_e&&!!R.thicknessMap,Pe=!!R.gradientMap,Xe=!!R.alphaMap,Ce=R.alphaTest>0,ye=!!R.alphaHash,Ze=!!R.extensions;let lt=os;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(lt=r.toneMapping);const It={shaderID:Me,shaderType:R.type,shaderName:R.name,vertexShader:pe,fragmentShader:Ie,defines:R.defines,customVertexShaderID:je,customFragmentShaderID:ae,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:$e,batchingColor:$e&&oe._colorsTexture!==null,instancing:at,instancingColor:at&&oe.instanceColor!==null,instancingMorph:at&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Yr,alphaToCoverage:!!R.alphaToCoverage,map:xt,matcap:Bt,envMap:k,envMapMode:k&&$.mapping,envMapCubeUVHeight:K,aoMap:Pt,lightMap:ft,bumpMap:rt,normalMap:Ge,displacementMap:y&&kt,emissiveMap:We,normalMapObjectSpace:Ge&&R.normalMapType===PM,normalMapTangentSpace:Ge&&R.normalMapType===kv,metalnessMap:gt,roughnessMap:Ft,anisotropy:en,anisotropyMap:de,clearcoat:I,clearcoatMap:Ue,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ke,dispersion:C,iridescence:te,iridescenceMap:ke,iridescenceThicknessMap:Re,sheen:me,sheenColorMap:Ne,sheenRoughnessMap:qe,specularMap:Ye,specularColorMap:ze,specularIntensityMap:ht,transmission:_e,transmissionMap:Z,thicknessMap:we,gradientMap:Pe,opaque:R.transparent===!1&&R.blending===kr&&R.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Ce,alphaHash:ye,combine:R.combine,mapUv:xt&&T(R.map.channel),aoMapUv:Pt&&T(R.aoMap.channel),lightMapUv:ft&&T(R.lightMap.channel),bumpMapUv:rt&&T(R.bumpMap.channel),normalMapUv:Ge&&T(R.normalMap.channel),displacementMapUv:kt&&T(R.displacementMap.channel),emissiveMapUv:We&&T(R.emissiveMap.channel),metalnessMapUv:gt&&T(R.metalnessMap.channel),roughnessMapUv:Ft&&T(R.roughnessMap.channel),anisotropyMapUv:de&&T(R.anisotropyMap.channel),clearcoatMapUv:Ue&&T(R.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&T(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(R.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&T(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&T(R.sheenColorMap.channel),sheenRoughnessMapUv:qe&&T(R.sheenRoughnessMap.channel),specularMapUv:Ye&&T(R.specularMap.channel),specularColorMapUv:ze&&T(R.specularColorMap.channel),specularIntensityMapUv:ht&&T(R.specularIntensityMap.channel),transmissionMapUv:Z&&T(R.transmissionMap.channel),thicknessMapUv:we&&T(R.thicknessMap.channel),alphaMapUv:Xe&&T(R.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ge||en),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(xt||Xe),fog:!!ce,useFog:R.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Oe,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:he,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:xt&&R.map.isVideoTexture===!0&&Xt.getTransfer(R.map.colorSpace)===sn,decodeVideoTextureEmissive:We&&R.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(R.emissiveMap.colorSpace)===sn,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Aa,flipSided:R.side===fi,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ze&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&R.extensions.multiDraw===!0||$e)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function v(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)D.push(H),D.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(N(D,R),L(D,R),D.push(r.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function N(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function L(R,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),R.push(h.mask)}function A(R){const D=b[R.type];let H;if(D){const Q=Ji[D];H=hE.clone(Q.uniforms)}else H=R.uniforms;return H}function P(R,D){let H;for(let Q=0,oe=_.length;Q<oe;Q++){const ce=_[Q];if(ce.cacheKey===D){H=ce,++H.usedTimes;break}}return H===void 0&&(H=new XA(r,D,R,c),_.push(H)),H}function O(R){if(--R.usedTimes===0){const D=_.indexOf(R);_[D]=_[_.length-1],_.pop(),R.destroy()}}function B(R){m.remove(R)}function G(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:A,acquireProgram:P,releaseProgram:O,releaseShaderCache:B,programs:_,dispose:G}}function KA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function QA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _v(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g,y,x,b,T,S){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:y,material:x,groupOrder:b,renderOrder:g.renderOrder,z:T,group:S},r[e]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=x,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=S),e++,v}function h(g,y,x,b,T,S){const v=f(g,y,x,b,T,S);x.transmission>0?s.push(v):x.transparent===!0?l.push(v):i.push(v)}function m(g,y,x,b,T,S){const v=f(g,y,x,b,T,S);x.transmission>0?s.unshift(v):x.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,y){i.length>1&&i.sort(g||QA),s.length>1&&s.sort(y||gv),l.length>1&&l.sort(y||gv)}function _(){for(let g=e,y=r.length;g<y;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function JA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new _v,r.set(s,[f])):l>=c.length?(f=new _v,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function $A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new q,color:new Ot};break;case"SpotLight":i={position:new q,direction:new q,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=i,i}}}function ew(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let tw=0;function nw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function iw(r){const e=new $A,i=ew(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new pn,f=new pn;function h(p){let _=0,g=0,y=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let x=0,b=0,T=0,S=0,v=0,N=0,L=0,A=0,P=0,O=0,B=0;p.sort(nw);for(let R=0,D=p.length;R<D;R++){const H=p[R],Q=H.color,oe=H.intensity,ce=H.distance,fe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Q.r*oe,g+=Q.g*oe,y+=Q.b*oe;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],oe);B++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,K=i.get(H);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,s.directionalShadow[x]=K,s.directionalShadowMap[x]=fe,s.directionalShadowMatrix[x]=H.shadow.matrix,N++}s.directional[x]=F,x++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(Q).multiplyScalar(oe),F.distance=ce,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[T]=F;const $=H.shadow;if(H.map&&(s.spotLightMap[P]=H.map,P++,$.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[T]=$.matrix,H.castShadow){const K=i.get(H);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,s.spotShadow[T]=K,s.spotShadowMap[T]=fe,A++}T++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(Q).multiplyScalar(oe),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=F,S++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const $=H.shadow,K=i.get(H);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=fe,s.pointShadowMatrix[b]=H.shadow.matrix,L++}s.point[b]=F,b++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(oe),F.groundColor.copy(H.groundColor).multiplyScalar(oe),s.hemi[v]=F,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=y;const G=s.hash;(G.directionalLength!==x||G.pointLength!==b||G.spotLength!==T||G.rectAreaLength!==S||G.hemiLength!==v||G.numDirectionalShadows!==N||G.numPointShadows!==L||G.numSpotShadows!==A||G.numSpotMaps!==P||G.numLightProbes!==B)&&(s.directional.length=x,s.spot.length=T,s.rectArea.length=S,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+P-O,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=B,G.directionalLength=x,G.pointLength=b,G.spotLength=T,G.rectAreaLength=S,G.hemiLength=v,G.numDirectionalShadows=N,G.numPointShadows=L,G.numSpotShadows=A,G.numSpotMaps=P,G.numLightProbes=B,s.version=tw++)}function m(p,_){let g=0,y=0,x=0,b=0,T=0;const S=_.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const L=p[v];if(L.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(S),g++}else if(L.isSpotLight){const A=s.spot[x];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const A=s.rectArea[b];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(f),A.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const A=s.point[y];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const A=s.hemi[T];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:h,setupView:m,state:s}}function vv(r){const e=new iw(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function aw(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new vv(r),e.set(l,[h])):c>=f.length?(h=new vv(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rw=`uniform sampler2D shadow_pass;
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
}`;function ow(r,e,i){let s=new xp;const l=new vt,c=new vt,f=new on,h=new TE({depthPacking:OM}),m=new AE,p={},_=i.maxTextureSize,g={[ls]:fi,[fi]:ls,[Aa]:Aa},y=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:sw,fragmentShader:rw}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const b=new Ln;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new bn(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uv;let v=this.type;this.render=function(O,B,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const R=r.getRenderTarget(),D=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(rs),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const oe=v!==ba&&this.type===ba,ce=v===ba&&this.type!==ba;for(let fe=0,F=O.length;fe<F;fe++){const $=O[fe],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const Me=K.getFrameExtents();if(l.multiply(Me),c.copy(K.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Me.x),l.x=c.x*Me.x,K.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Me.y),l.y=c.y*Me.y,K.mapSize.y=c.y)),K.map===null||oe===!0||ce===!0){const X=this.type!==ba?{minFilter:ki,magFilter:ki}:{};K.map!==null&&K.map.dispose(),K.map=new Fs(l.x,l.y,X),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();const z=K.getViewportCount();for(let X=0;X<z;X++){const he=K.getViewport(X);f.set(c.x*he.x,c.y*he.y,c.x*he.z,c.y*he.w),Q.viewport(f),K.updateMatrices($,X),s=K.getFrustum(),A(B,G,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===ba&&N(K,G),K.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(R,D,H)};function N(O,B){const G=e.update(T);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Fs(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,G,y,T,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,G,x,T,null)}function L(O,B,G,R){let D=null;const H=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)D=H;else if(D=G.isPointLight===!0?m:h,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=D.uuid,oe=B.uuid;let ce=p[Q];ce===void 0&&(ce={},p[Q]=ce);let fe=ce[oe];fe===void 0&&(fe=D.clone(),ce[oe]=fe,B.addEventListener("dispose",P)),D=fe}if(D.visible=B.visible,D.wireframe=B.wireframe,R===ba?D.side=B.shadowSide!==null?B.shadowSide:B.side:D.side=B.shadowSide!==null?B.shadowSide:g[B.side],D.alphaMap=B.alphaMap,D.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,D.map=B.map,D.clipShadows=B.clipShadows,D.clippingPlanes=B.clippingPlanes,D.clipIntersection=B.clipIntersection,D.displacementMap=B.displacementMap,D.displacementScale=B.displacementScale,D.displacementBias=B.displacementBias,D.wireframeLinewidth=B.wireframeLinewidth,D.linewidth=B.linewidth,G.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Q=r.properties.get(D);Q.light=G}return D}function A(O,B,G,R,D){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&D===ba)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const oe=e.update(O),ce=O.material;if(Array.isArray(ce)){const fe=oe.groups;for(let F=0,$=fe.length;F<$;F++){const K=fe[F],Me=ce[K.materialIndex];if(Me&&Me.visible){const z=L(O,Me,R,D);O.onBeforeShadow(r,O,B,G,oe,z,K),r.renderBufferDirect(G,null,oe,z,O,K),O.onAfterShadow(r,O,B,G,oe,z,K)}}}else if(ce.visible){const fe=L(O,ce,R,D);O.onBeforeShadow(r,O,B,G,oe,fe,null),r.renderBufferDirect(G,null,oe,fe,O,null),O.onAfterShadow(r,O,B,G,oe,fe,null)}}const Q=O.children;for(let oe=0,ce=Q.length;oe<ce;oe++)A(Q[oe],B,G,R,D)}function P(O){O.target.removeEventListener("dispose",P);for(const G in p){const R=p[G],D=O.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const lw={[_d]:vd,[xd]:Md,[yd]:Ed,[Xr]:Sd,[vd]:_d,[Md]:xd,[Ed]:yd,[Sd]:Xr};function cw(r,e){function i(){let Z=!1;const we=new on;let Pe=null;const Xe=new on(0,0,0,0);return{setMask:function(Ce){Pe!==Ce&&!Z&&(r.colorMask(Ce,Ce,Ce,Ce),Pe=Ce)},setLocked:function(Ce){Z=Ce},setClear:function(Ce,ye,Ze,lt,It){It===!0&&(Ce*=lt,ye*=lt,Ze*=lt),we.set(Ce,ye,Ze,lt),Xe.equals(we)===!1&&(r.clearColor(Ce,ye,Ze,lt),Xe.copy(we))},reset:function(){Z=!1,Pe=null,Xe.set(-1,0,0,0)}}}function s(){let Z=!1,we=!1,Pe=null,Xe=null,Ce=null;return{setReversed:function(ye){if(we!==ye){const Ze=e.get("EXT_clip_control");ye?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),we=ye;const lt=Ce;Ce=null,this.setClear(lt)}},getReversed:function(){return we},setTest:function(ye){ye?xe(r.DEPTH_TEST):Oe(r.DEPTH_TEST)},setMask:function(ye){Pe!==ye&&!Z&&(r.depthMask(ye),Pe=ye)},setFunc:function(ye){if(we&&(ye=lw[ye]),Xe!==ye){switch(ye){case _d:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case Xr:r.depthFunc(r.LEQUAL);break;case yd:r.depthFunc(r.EQUAL);break;case Sd:r.depthFunc(r.GEQUAL);break;case Md:r.depthFunc(r.GREATER);break;case Ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xe=ye}},setLocked:function(ye){Z=ye},setClear:function(ye){Ce!==ye&&(we&&(ye=1-ye),r.clearDepth(ye),Ce=ye)},reset:function(){Z=!1,Pe=null,Xe=null,Ce=null,we=!1}}}function l(){let Z=!1,we=null,Pe=null,Xe=null,Ce=null,ye=null,Ze=null,lt=null,It=null;return{setTest:function(Rt){Z||(Rt?xe(r.STENCIL_TEST):Oe(r.STENCIL_TEST))},setMask:function(Rt){we!==Rt&&!Z&&(r.stencilMask(Rt),we=Rt)},setFunc:function(Rt,Wn,ln){(Pe!==Rt||Xe!==Wn||Ce!==ln)&&(r.stencilFunc(Rt,Wn,ln),Pe=Rt,Xe=Wn,Ce=ln)},setOp:function(Rt,Wn,ln){(ye!==Rt||Ze!==Wn||lt!==ln)&&(r.stencilOp(Rt,Wn,ln),ye=Rt,Ze=Wn,lt=ln)},setLocked:function(Rt){Z=Rt},setClear:function(Rt){It!==Rt&&(r.clearStencil(Rt),It=Rt)},reset:function(){Z=!1,we=null,Pe=null,Xe=null,Ce=null,ye=null,Ze=null,lt=null,It=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,x=[],b=null,T=!1,S=null,v=null,N=null,L=null,A=null,P=null,O=null,B=new Ot(0,0,0),G=0,R=!1,D=null,H=null,Q=null,oe=null,ce=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=$>=2);let Me=null,z={};const X=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),pe=new on().fromArray(X),Ie=new on().fromArray(he);function je(Z,we,Pe,Xe){const Ce=new Uint8Array(4),ye=r.createTexture();r.bindTexture(Z,ye),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<Pe;Ze++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Xe,0,r.RGBA,r.UNSIGNED_BYTE,Ce):r.texImage2D(we+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ce);return ye}const ae={};ae[r.TEXTURE_2D]=je(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=je(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=je(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=je(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),xe(r.DEPTH_TEST),f.setFunc(Xr),rt(!1),Ge(h_),xe(r.CULL_FACE),Pt(rs);function xe(Z){_[Z]!==!0&&(r.enable(Z),_[Z]=!0)}function Oe(Z){_[Z]!==!1&&(r.disable(Z),_[Z]=!1)}function at(Z,we){return g[Z]!==we?(r.bindFramebuffer(Z,we),g[Z]=we,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=we),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=we),!0):!1}function $e(Z,we){let Pe=x,Xe=!1;if(Z){Pe=y.get(we),Pe===void 0&&(Pe=[],y.set(we,Pe));const Ce=Z.textures;if(Pe.length!==Ce.length||Pe[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,Ze=Ce.length;ye<Ze;ye++)Pe[ye]=r.COLOR_ATTACHMENT0+ye;Pe.length=Ce.length,Xe=!0}}else Pe[0]!==r.BACK&&(Pe[0]=r.BACK,Xe=!0);Xe&&r.drawBuffers(Pe)}function xt(Z){return b!==Z?(r.useProgram(Z),b=Z,!0):!1}const Bt={[Ns]:r.FUNC_ADD,[rM]:r.FUNC_SUBTRACT,[oM]:r.FUNC_REVERSE_SUBTRACT};Bt[lM]=r.MIN,Bt[cM]=r.MAX;const k={[uM]:r.ZERO,[fM]:r.ONE,[hM]:r.SRC_COLOR,[md]:r.SRC_ALPHA,[vM]:r.SRC_ALPHA_SATURATE,[gM]:r.DST_COLOR,[pM]:r.DST_ALPHA,[dM]:r.ONE_MINUS_SRC_COLOR,[gd]:r.ONE_MINUS_SRC_ALPHA,[_M]:r.ONE_MINUS_DST_COLOR,[mM]:r.ONE_MINUS_DST_ALPHA,[xM]:r.CONSTANT_COLOR,[yM]:r.ONE_MINUS_CONSTANT_COLOR,[SM]:r.CONSTANT_ALPHA,[MM]:r.ONE_MINUS_CONSTANT_ALPHA};function Pt(Z,we,Pe,Xe,Ce,ye,Ze,lt,It,Rt){if(Z===rs){T===!0&&(Oe(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),Z!==sM){if(Z!==S||Rt!==R){if((v!==Ns||A!==Ns)&&(r.blendEquation(r.FUNC_ADD),v=Ns,A=Ns),Rt)switch(Z){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFunc(r.ONE,r.ONE);break;case p_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case m_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case d_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case p_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case m_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}N=null,L=null,P=null,O=null,B.set(0,0,0),G=0,S=Z,R=Rt}return}Ce=Ce||we,ye=ye||Pe,Ze=Ze||Xe,(we!==v||Ce!==A)&&(r.blendEquationSeparate(Bt[we],Bt[Ce]),v=we,A=Ce),(Pe!==N||Xe!==L||ye!==P||Ze!==O)&&(r.blendFuncSeparate(k[Pe],k[Xe],k[ye],k[Ze]),N=Pe,L=Xe,P=ye,O=Ze),(lt.equals(B)===!1||It!==G)&&(r.blendColor(lt.r,lt.g,lt.b,It),B.copy(lt),G=It),S=Z,R=!1}function ft(Z,we){Z.side===Aa?Oe(r.CULL_FACE):xe(r.CULL_FACE);let Pe=Z.side===fi;we&&(Pe=!Pe),rt(Pe),Z.blending===kr&&Z.transparent===!1?Pt(rs):Pt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Xe=Z.stencilWrite;h.setTest(Xe),Xe&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),We(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):Oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(Z){D!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),D=Z)}function Ge(Z){Z!==nM?(xe(r.CULL_FACE),Z!==H&&(Z===h_?r.cullFace(r.BACK):Z===iM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Oe(r.CULL_FACE),H=Z}function kt(Z){Z!==Q&&(F&&r.lineWidth(Z),Q=Z)}function We(Z,we,Pe){Z?(xe(r.POLYGON_OFFSET_FILL),(oe!==we||ce!==Pe)&&(r.polygonOffset(we,Pe),oe=we,ce=Pe)):Oe(r.POLYGON_OFFSET_FILL)}function gt(Z){Z?xe(r.SCISSOR_TEST):Oe(r.SCISSOR_TEST)}function Ft(Z){Z===void 0&&(Z=r.TEXTURE0+fe-1),Me!==Z&&(r.activeTexture(Z),Me=Z)}function en(Z,we,Pe){Pe===void 0&&(Me===null?Pe=r.TEXTURE0+fe-1:Pe=Me);let Xe=z[Pe];Xe===void 0&&(Xe={type:void 0,texture:void 0},z[Pe]=Xe),(Xe.type!==Z||Xe.texture!==we)&&(Me!==Pe&&(r.activeTexture(Pe),Me=Pe),r.bindTexture(Z,we||ae[Z]),Xe.type=Z,Xe.texture=we)}function I(){const Z=z[Me];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function te(){try{r.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{r.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _e(){try{r.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Le(){try{r.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ke(){try{r.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ke(){try{r.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Re(){try{r.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ne(Z){pe.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),pe.copy(Z))}function qe(Z){Ie.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Ie.copy(Z))}function Ye(Z,we){let Pe=p.get(we);Pe===void 0&&(Pe=new WeakMap,p.set(we,Pe));let Xe=Pe.get(Z);Xe===void 0&&(Xe=r.getUniformBlockIndex(we,Z.name),Pe.set(Z,Xe))}function ze(Z,we){const Xe=p.get(we).get(Z);m.get(we)!==Xe&&(r.uniformBlockBinding(we,Xe,Z.__bindingPointIndex),m.set(we,Xe))}function ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Me=null,z={},g={},y=new WeakMap,x=[],b=null,T=!1,S=null,v=null,N=null,L=null,A=null,P=null,O=null,B=new Ot(0,0,0),G=0,R=!1,D=null,H=null,Q=null,oe=null,ce=null,pe.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:xe,disable:Oe,bindFramebuffer:at,drawBuffers:$e,useProgram:xt,setBlending:Pt,setMaterial:ft,setFlipSided:rt,setCullFace:Ge,setLineWidth:kt,setPolygonOffset:We,setScissorTest:gt,activeTexture:Ft,bindTexture:en,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:te,texImage2D:ke,texImage3D:Re,updateUBOMapping:Ye,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:Ke,texSubImage2D:me,texSubImage3D:_e,compressedTexSubImage2D:de,compressedTexSubImage3D:Ue,scissor:Ne,viewport:qe,reset:ht}}function uw(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new vt,_=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,C){return x?new OffscreenCanvas(I,C):cu("canvas")}function T(I,C,te){let me=1;const _e=en(I);if((_e.width>te||_e.height>te)&&(me=te/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(me*_e.width),Ue=Math.floor(me*_e.height);g===void 0&&(g=b(de,Ue));const Le=C?b(de,Ue):g;return Le.width=de,Le.height=Ue,Le.getContext("2d").drawImage(I,0,0,de,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Ue+")."),Le}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function S(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,C,te,me,_e=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=C;if(C===r.RED&&(te===r.FLOAT&&(de=r.R32F),te===r.HALF_FLOAT&&(de=r.R16F),te===r.UNSIGNED_BYTE&&(de=r.R8)),C===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(de=r.R8UI),te===r.UNSIGNED_SHORT&&(de=r.R16UI),te===r.UNSIGNED_INT&&(de=r.R32UI),te===r.BYTE&&(de=r.R8I),te===r.SHORT&&(de=r.R16I),te===r.INT&&(de=r.R32I)),C===r.RG&&(te===r.FLOAT&&(de=r.RG32F),te===r.HALF_FLOAT&&(de=r.RG16F),te===r.UNSIGNED_BYTE&&(de=r.RG8)),C===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(de=r.RG8UI),te===r.UNSIGNED_SHORT&&(de=r.RG16UI),te===r.UNSIGNED_INT&&(de=r.RG32UI),te===r.BYTE&&(de=r.RG8I),te===r.SHORT&&(de=r.RG16I),te===r.INT&&(de=r.RG32I)),C===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(de=r.RGB8UI),te===r.UNSIGNED_SHORT&&(de=r.RGB16UI),te===r.UNSIGNED_INT&&(de=r.RGB32UI),te===r.BYTE&&(de=r.RGB8I),te===r.SHORT&&(de=r.RGB16I),te===r.INT&&(de=r.RGB32I)),C===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),te===r.UNSIGNED_INT&&(de=r.RGBA32UI),te===r.BYTE&&(de=r.RGBA8I),te===r.SHORT&&(de=r.RGBA16I),te===r.INT&&(de=r.RGBA32I)),C===r.RGB&&(te===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),C===r.RGBA){const Ue=_e?ou:Xt.getTransfer(me);te===r.FLOAT&&(de=r.RGBA32F),te===r.HALF_FLOAT&&(de=r.RGBA16F),te===r.UNSIGNED_BYTE&&(de=Ue===sn?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(I,C){let te;return I?C===null||C===Is||C===sl?te=r.DEPTH24_STENCIL8:C===wa?te=r.DEPTH32F_STENCIL8:C===al&&(te=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Is||C===sl?te=r.DEPTH_COMPONENT24:C===wa?te=r.DEPTH_COMPONENT32F:C===al&&(te=r.DEPTH_COMPONENT16),te}function P(I,C){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==ki&&I.minFilter!==$i?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function O(I){const C=I.target;C.removeEventListener("dispose",O),G(C),C.isVideoTexture&&_.delete(C)}function B(I){const C=I.target;C.removeEventListener("dispose",B),D(C)}function G(I){const C=s.get(I);if(C.__webglInit===void 0)return;const te=I.source,me=y.get(te);if(me){const _e=me[C.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(I),Object.keys(me).length===0&&y.delete(te)}s.remove(I)}function R(I){const C=s.get(I);r.deleteTexture(C.__webglTexture);const te=I.source,me=y.get(te);delete me[C.__cacheKey],f.memory.textures--}function D(I){const C=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(C.__webglFramebuffer[me]))for(let _e=0;_e<C.__webglFramebuffer[me].length;_e++)r.deleteFramebuffer(C.__webglFramebuffer[me][_e]);else r.deleteFramebuffer(C.__webglFramebuffer[me]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[me])}else{if(Array.isArray(C.__webglFramebuffer))for(let me=0;me<C.__webglFramebuffer.length;me++)r.deleteFramebuffer(C.__webglFramebuffer[me]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let me=0;me<C.__webglColorRenderbuffer.length;me++)C.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[me]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const te=I.textures;for(let me=0,_e=te.length;me<_e;me++){const de=s.get(te[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),f.memory.textures--),s.remove(te[me])}s.remove(I)}let H=0;function Q(){H=0}function oe(){const I=H;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function ce(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function fe(I,C){const te=s.get(I);if(I.isVideoTexture&&gt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&te.__version!==I.version){const me=I.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(te,I,C);return}}else I.isExternalTexture&&(te.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+C)}function F(I,C){const te=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){ae(te,I,C);return}i.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+C)}function $(I,C){const te=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){ae(te,I,C);return}i.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+C)}function K(I,C){const te=s.get(I);if(I.version>0&&te.__version!==I.version){xe(te,I,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+C)}const Me={[Ad]:r.REPEAT,[Ps]:r.CLAMP_TO_EDGE,[wd]:r.MIRRORED_REPEAT},z={[ki]:r.NEAREST,[LM]:r.NEAREST_MIPMAP_NEAREST,[Mc]:r.NEAREST_MIPMAP_LINEAR,[$i]:r.LINEAR,[Th]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},X={[zM]:r.NEVER,[kM]:r.ALWAYS,[IM]:r.LESS,[Vv]:r.LEQUAL,[BM]:r.EQUAL,[GM]:r.GEQUAL,[FM]:r.GREATER,[HM]:r.NOTEQUAL};function he(I,C){if(C.type===wa&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===$i||C.magFilter===Th||C.magFilter===Mc||C.magFilter===zs||C.minFilter===$i||C.minFilter===Th||C.minFilter===Mc||C.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,Me[C.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,Me[C.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,Me[C.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,z[C.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,z[C.minFilter]),C.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,X[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===ki||C.minFilter!==Mc&&C.minFilter!==zs||C.type===wa&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function pe(I,C){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",O));const me=C.source;let _e=y.get(me);_e===void 0&&(_e={},y.set(me,_e));const de=ce(C);if(de!==I.__cacheKey){_e[de]===void 0&&(_e[de]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,te=!0),_e[de].usedTimes++;const Ue=_e[I.__cacheKey];Ue!==void 0&&(_e[I.__cacheKey].usedTimes--,Ue.usedTimes===0&&R(C)),I.__cacheKey=de,I.__webglTexture=_e[de].texture}return te}function Ie(I,C,te){return Math.floor(Math.floor(I/te)/C)}function je(I,C,te,me){const de=I.updateRanges;if(de.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,te,me,C.data);else{de.sort((Re,Ne)=>Re.start-Ne.start);let Ue=0;for(let Re=1;Re<de.length;Re++){const Ne=de[Ue],qe=de[Re],Ye=Ne.start+Ne.count,ze=Ie(qe.start,C.width,4),ht=Ie(Ne.start,C.width,4);qe.start<=Ye+1&&ze===ht&&Ie(qe.start+qe.count-1,C.width,4)===ze?Ne.count=Math.max(Ne.count,qe.start+qe.count-Ne.start):(++Ue,de[Ue]=qe)}de.length=Ue+1;const Le=r.getParameter(r.UNPACK_ROW_LENGTH),Ke=r.getParameter(r.UNPACK_SKIP_PIXELS),ke=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let Re=0,Ne=de.length;Re<Ne;Re++){const qe=de[Re],Ye=Math.floor(qe.start/4),ze=Math.ceil(qe.count/4),ht=Ye%C.width,Z=Math.floor(Ye/C.width),we=ze,Pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,ht,Z,we,Pe,te,me,C.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,ke)}}function ae(I,C,te){let me=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(me=r.TEXTURE_3D);const _e=pe(I,C),de=C.source;i.bindTexture(me,I.__webglTexture,r.TEXTURE0+te);const Ue=s.get(de);if(de.version!==Ue.__version||_e===!0){i.activeTexture(r.TEXTURE0+te);const Le=Xt.getPrimaries(Xt.workingColorSpace),Ke=C.colorSpace===as?null:Xt.getPrimaries(C.colorSpace),ke=C.colorSpace===as||Le===Ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Re=T(C.image,!1,l.maxTextureSize);Re=Ft(C,Re);const Ne=c.convert(C.format,C.colorSpace),qe=c.convert(C.type);let Ye=L(C.internalFormat,Ne,qe,C.colorSpace,C.isVideoTexture);he(me,C);let ze;const ht=C.mipmaps,Z=C.isVideoTexture!==!0,we=Ue.__version===void 0||_e===!0,Pe=de.dataReady,Xe=P(C,Re);if(C.isDepthTexture)Ye=A(C.format===ol,C.type),we&&(Z?i.texStorage2D(r.TEXTURE_2D,1,Ye,Re.width,Re.height):i.texImage2D(r.TEXTURE_2D,0,Ye,Re.width,Re.height,0,Ne,qe,null));else if(C.isDataTexture)if(ht.length>0){Z&&we&&i.texStorage2D(r.TEXTURE_2D,Xe,Ye,ht[0].width,ht[0].height);for(let Ce=0,ye=ht.length;Ce<ye;Ce++)ze=ht[Ce],Z?Pe&&i.texSubImage2D(r.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Ne,qe,ze.data):i.texImage2D(r.TEXTURE_2D,Ce,Ye,ze.width,ze.height,0,Ne,qe,ze.data);C.generateMipmaps=!1}else Z?(we&&i.texStorage2D(r.TEXTURE_2D,Xe,Ye,Re.width,Re.height),Pe&&je(C,Re,Ne,qe)):i.texImage2D(r.TEXTURE_2D,0,Ye,Re.width,Re.height,0,Ne,qe,Re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Z&&we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,Ye,ht[0].width,ht[0].height,Re.depth);for(let Ce=0,ye=ht.length;Ce<ye;Ce++)if(ze=ht[Ce],C.format!==Gi)if(Ne!==null)if(Z){if(Pe)if(C.layerUpdates.size>0){const Ze=Y_(ze.width,ze.height,C.format,C.type);for(const lt of C.layerUpdates){const It=ze.data.subarray(lt*Ze/ze.data.BYTES_PER_ELEMENT,(lt+1)*Ze/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ce,0,0,lt,ze.width,ze.height,1,Ne,It)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ce,0,0,0,ze.width,ze.height,Re.depth,Ne,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ce,Ye,ze.width,ze.height,Re.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Pe&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ce,0,0,0,ze.width,ze.height,Re.depth,Ne,qe,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ce,Ye,ze.width,ze.height,Re.depth,0,Ne,qe,ze.data)}else{Z&&we&&i.texStorage2D(r.TEXTURE_2D,Xe,Ye,ht[0].width,ht[0].height);for(let Ce=0,ye=ht.length;Ce<ye;Ce++)ze=ht[Ce],C.format!==Gi?Ne!==null?Z?Pe&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Ne,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,Ce,Ye,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Pe&&i.texSubImage2D(r.TEXTURE_2D,Ce,0,0,ze.width,ze.height,Ne,qe,ze.data):i.texImage2D(r.TEXTURE_2D,Ce,Ye,ze.width,ze.height,0,Ne,qe,ze.data)}else if(C.isDataArrayTexture)if(Z){if(we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xe,Ye,Re.width,Re.height,Re.depth),Pe)if(C.layerUpdates.size>0){const Ce=Y_(Re.width,Re.height,C.format,C.type);for(const ye of C.layerUpdates){const Ze=Re.data.subarray(ye*Ce/Re.data.BYTES_PER_ELEMENT,(ye+1)*Ce/Re.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ye,Re.width,Re.height,1,Ne,qe,Ze)}C.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ne,qe,Re.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ye,Re.width,Re.height,Re.depth,0,Ne,qe,Re.data);else if(C.isData3DTexture)Z?(we&&i.texStorage3D(r.TEXTURE_3D,Xe,Ye,Re.width,Re.height,Re.depth),Pe&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ne,qe,Re.data)):i.texImage3D(r.TEXTURE_3D,0,Ye,Re.width,Re.height,Re.depth,0,Ne,qe,Re.data);else if(C.isFramebufferTexture){if(we)if(Z)i.texStorage2D(r.TEXTURE_2D,Xe,Ye,Re.width,Re.height);else{let Ce=Re.width,ye=Re.height;for(let Ze=0;Ze<Xe;Ze++)i.texImage2D(r.TEXTURE_2D,Ze,Ye,Ce,ye,0,Ne,qe,null),Ce>>=1,ye>>=1}}else if(ht.length>0){if(Z&&we){const Ce=en(ht[0]);i.texStorage2D(r.TEXTURE_2D,Xe,Ye,Ce.width,Ce.height)}for(let Ce=0,ye=ht.length;Ce<ye;Ce++)ze=ht[Ce],Z?Pe&&i.texSubImage2D(r.TEXTURE_2D,Ce,0,0,Ne,qe,ze):i.texImage2D(r.TEXTURE_2D,Ce,Ye,Ne,qe,ze);C.generateMipmaps=!1}else if(Z){if(we){const Ce=en(Re);i.texStorage2D(r.TEXTURE_2D,Xe,Ye,Ce.width,Ce.height)}Pe&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,qe,Re)}else i.texImage2D(r.TEXTURE_2D,0,Ye,Ne,qe,Re);S(C)&&v(me),Ue.__version=de.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function xe(I,C,te){if(C.image.length!==6)return;const me=pe(I,C),_e=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+te);const de=s.get(_e);if(_e.version!==de.__version||me===!0){i.activeTexture(r.TEXTURE0+te);const Ue=Xt.getPrimaries(Xt.workingColorSpace),Le=C.colorSpace===as?null:Xt.getPrimaries(C.colorSpace),Ke=C.colorSpace===as||Ue===Le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const ke=C.isCompressedTexture||C.image[0].isCompressedTexture,Re=C.image[0]&&C.image[0].isDataTexture,Ne=[];for(let ye=0;ye<6;ye++)!ke&&!Re?Ne[ye]=T(C.image[ye],!0,l.maxCubemapSize):Ne[ye]=Re?C.image[ye].image:C.image[ye],Ne[ye]=Ft(C,Ne[ye]);const qe=Ne[0],Ye=c.convert(C.format,C.colorSpace),ze=c.convert(C.type),ht=L(C.internalFormat,Ye,ze,C.colorSpace),Z=C.isVideoTexture!==!0,we=de.__version===void 0||me===!0,Pe=_e.dataReady;let Xe=P(C,qe);he(r.TEXTURE_CUBE_MAP,C);let Ce;if(ke){Z&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Xe,ht,qe.width,qe.height);for(let ye=0;ye<6;ye++){Ce=Ne[ye].mipmaps;for(let Ze=0;Ze<Ce.length;Ze++){const lt=Ce[Ze];C.format!==Gi?Ye!==null?Z?Pe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,0,0,lt.width,lt.height,Ye,lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,ht,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,0,0,lt.width,lt.height,Ye,ze,lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,ht,lt.width,lt.height,0,Ye,ze,lt.data)}}}else{if(Ce=C.mipmaps,Z&&we){Ce.length>0&&Xe++;const ye=en(Ne[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Xe,ht,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Re){Z?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne[ye].width,Ne[ye].height,Ye,ze,Ne[ye].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Ne[ye].width,Ne[ye].height,0,Ye,ze,Ne[ye].data);for(let Ze=0;Ze<Ce.length;Ze++){const It=Ce[Ze].image[ye].image;Z?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,0,0,It.width,It.height,Ye,ze,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,ht,It.width,It.height,0,Ye,ze,It.data)}}else{Z?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ye,ze,Ne[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ht,Ye,ze,Ne[ye]);for(let Ze=0;Ze<Ce.length;Ze++){const lt=Ce[Ze];Z?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,0,0,Ye,ze,lt.image[ye]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,ht,Ye,ze,lt.image[ye])}}}S(C)&&v(r.TEXTURE_CUBE_MAP),de.__version=_e.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Oe(I,C,te,me,_e,de){const Ue=c.convert(te.format,te.colorSpace),Le=c.convert(te.type),Ke=L(te.internalFormat,Ue,Le,te.colorSpace),ke=s.get(C),Re=s.get(te);if(Re.__renderTarget=C,!ke.__hasExternalTextures){const Ne=Math.max(1,C.width>>de),qe=Math.max(1,C.height>>de);_e===r.TEXTURE_3D||_e===r.TEXTURE_2D_ARRAY?i.texImage3D(_e,de,Ke,Ne,qe,C.depth,0,Ue,Le,null):i.texImage2D(_e,de,Ke,Ne,qe,0,Ue,Le,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),We(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,_e,Re.__webglTexture,0,kt(C)):(_e===r.TEXTURE_2D||_e>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,_e,Re.__webglTexture,de),i.bindFramebuffer(r.FRAMEBUFFER,null)}function at(I,C,te){if(r.bindRenderbuffer(r.RENDERBUFFER,I),C.depthBuffer){const me=C.depthTexture,_e=me&&me.isDepthTexture?me.type:null,de=A(C.stencilBuffer,_e),Ue=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=kt(C);We(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Le,de,C.width,C.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,de,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,de,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,I)}else{const me=C.textures;for(let _e=0;_e<me.length;_e++){const de=me[_e],Ue=c.convert(de.format,de.colorSpace),Le=c.convert(de.type),Ke=L(de.internalFormat,Ue,Le,de.colorSpace),ke=kt(C);te&&We(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Ke,C.width,C.height):We(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,Ke,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Ke,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(C.depthTexture);me.__renderTarget=C,(!me.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),fe(C.depthTexture,0);const _e=me.__webglTexture,de=kt(C);if(C.depthTexture.format===rl)We(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,_e,0);else if(C.depthTexture.format===ol)We(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function xt(I){const C=s.get(I),te=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),me){const _e=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),C.__depthDisposeCallback=_e}C.__boundDepthTexture=me}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const me=I.texture.mipmaps;me&&me.length>0?$e(C.__webglFramebuffer[0],I):$e(C.__webglFramebuffer,I)}else if(te){C.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[me]),C.__webglDepthbuffer[me]===void 0)C.__webglDepthbuffer[me]=r.createRenderbuffer(),at(C.__webglDepthbuffer[me],I,!1);else{const _e=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=C.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,de)}}else{const me=I.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),at(C.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,de)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(I,C,te){const me=s.get(I);C!==void 0&&Oe(me.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&xt(I)}function k(I){const C=I.texture,te=s.get(I),me=s.get(C);I.addEventListener("dispose",B);const _e=I.textures,de=I.isWebGLCubeRenderTarget===!0,Ue=_e.length>1;if(Ue||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=C.version,f.memory.textures++),de){te.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0){te.__webglFramebuffer[Le]=[];for(let Ke=0;Ke<C.mipmaps.length;Ke++)te.__webglFramebuffer[Le][Ke]=r.createFramebuffer()}else te.__webglFramebuffer[Le]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){te.__webglFramebuffer=[];for(let Le=0;Le<C.mipmaps.length;Le++)te.__webglFramebuffer[Le]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let Le=0,Ke=_e.length;Le<Ke;Le++){const ke=s.get(_e[Le]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&We(I)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Le=0;Le<_e.length;Le++){const Ke=_e[Le];te.__webglColorRenderbuffer[Le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Le]);const ke=c.convert(Ke.format,Ke.colorSpace),Re=c.convert(Ke.type),Ne=L(Ke.internalFormat,ke,Re,Ke.colorSpace,I.isXRRenderTarget===!0),qe=kt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ne,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,te.__webglColorRenderbuffer[Le])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),at(te.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),he(r.TEXTURE_CUBE_MAP,C);for(let Le=0;Le<6;Le++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ke=0;Ke<C.mipmaps.length;Ke++)Oe(te.__webglFramebuffer[Le][Ke],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke);else Oe(te.__webglFramebuffer[Le],I,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(C)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ue){for(let Le=0,Ke=_e.length;Le<Ke;Le++){const ke=_e[Le],Re=s.get(ke);let Ne=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Re.__webglTexture),he(Ne,ke),Oe(te.__webglFramebuffer,I,ke,r.COLOR_ATTACHMENT0+Le,Ne,0),S(ke)&&v(Ne)}i.unbindTexture()}else{let Le=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Le,me.__webglTexture),he(Le,C),C.mipmaps&&C.mipmaps.length>0)for(let Ke=0;Ke<C.mipmaps.length;Ke++)Oe(te.__webglFramebuffer[Ke],I,C,r.COLOR_ATTACHMENT0,Le,Ke);else Oe(te.__webglFramebuffer,I,C,r.COLOR_ATTACHMENT0,Le,0);S(C)&&v(Le),i.unbindTexture()}I.depthBuffer&&xt(I)}function Pt(I){const C=I.textures;for(let te=0,me=C.length;te<me;te++){const _e=C[te];if(S(_e)){const de=N(I),Ue=s.get(_e).__webglTexture;i.bindTexture(de,Ue),v(de),i.unbindTexture()}}}const ft=[],rt=[];function Ge(I){if(I.samples>0){if(We(I)===!1){const C=I.textures,te=I.width,me=I.height;let _e=r.COLOR_BUFFER_BIT;const de=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=s.get(I),Le=C.length>1;if(Le)for(let ke=0;ke<C.length;ke++)i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ke=I.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ke=0;ke<C.length;ke++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=r.STENCIL_BUFFER_BIT)),Le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const Re=s.get(C[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,te,me,0,0,te,me,_e,r.NEAREST),m===!0&&(ft.length=0,rt.length=0,ft.push(r.COLOR_ATTACHMENT0+ke),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ft.push(de),rt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Le)for(let ke=0;ke<C.length;ke++){i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const Re=s.get(C[ke]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,Re,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const C=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function kt(I){return Math.min(l.maxSamples,I.samples)}function We(I){const C=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function gt(I){const C=f.render.frame;_.get(I)!==C&&(_.set(I,C),I.update())}function Ft(I,C){const te=I.colorSpace,me=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||te!==Yr&&te!==as&&(Xt.getTransfer(te)===sn?(me!==Gi||_e!==ta)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),C}function en(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=Q,this.setTexture2D=fe,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=Bt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=We}function fw(r,e){function i(s,l=as){let c;const f=Xt.getTransfer(l);if(s===ta)return r.UNSIGNED_BYTE;if(s===fp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===zv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ov)return r.BYTE;if(s===Pv)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===up)return r.INT;if(s===Is)return r.UNSIGNED_INT;if(s===wa)return r.FLOAT;if(s===ul)return r.HALF_FLOAT;if(s===Bv)return r.ALPHA;if(s===Fv)return r.RGB;if(s===Gi)return r.RGBA;if(s===rl)return r.DEPTH_COMPONENT;if(s===ol)return r.DEPTH_STENCIL;if(s===Hv)return r.RED;if(s===dp)return r.RED_INTEGER;if(s===Gv)return r.RG;if(s===pp)return r.RG_INTEGER;if(s===mp)return r.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(f===sn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rd||s===Cd||s===Dd||s===Ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Rd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ld||s===Nd||s===Od)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ld||s===Nd)return f===sn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Od)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pd||s===zd||s===Id||s===Bd||s===Fd||s===Hd||s===Gd||s===kd||s===Vd||s===jd||s===Xd||s===Wd||s===qd||s===Yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Pd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Id)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yd)return f===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zd||s===Kd||s===Qd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Zd)return f===sn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jd||s===$d||s===ep||s===tp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Jd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===$d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
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

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new tx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new cs({vertexShader:hw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends Gs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,y=null,x=null,b=null;const T=typeof XRWebGLBinding<"u",S=new pw,v={},N=i.getContextAttributes();let L=null,A=null;const P=[],O=[],B=new vt;let G=null;const R=new Mi;R.viewport=new on;const D=new Mi;D.viewport=new on;const H=[R,D],Q=new NE;let oe=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let xe=P[ae];return xe===void 0&&(xe=new qh,P[ae]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ae){let xe=P[ae];return xe===void 0&&(xe=new qh,P[ae]=xe),xe.getGripSpace()},this.getHand=function(ae){let xe=P[ae];return xe===void 0&&(xe=new qh,P[ae]=xe),xe.getHandSpace()};function fe(ae){const xe=O.indexOf(ae.inputSource);if(xe===-1)return;const Oe=P[xe];Oe!==void 0&&(Oe.update(ae.inputSource,ae.frame,p||f),Oe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function F(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",$);for(let ae=0;ae<P.length;ae++){const xe=O[ae];xe!==null&&(O[ae]=null,P[ae].disconnect(xe))}oe=null,ce=null,S.reset();for(const ae in v)delete v[ae];e.setRenderTarget(L),x=null,y=null,g=null,l=null,A=null,je.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",F),l.addEventListener("inputsourceschange",$),N.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,at=null,$e=null;N.depth&&($e=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Oe=N.stencil?ol:rl,at=N.stencil?sl:Is);const xt={colorFormat:i.RGBA8,depthFormat:$e,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(xt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new Fs(y.textureWidth,y.textureHeight,{format:Gi,type:ta,depthTexture:new ex(y.textureWidth,y.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Oe={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Oe),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new Fs(x.framebufferWidth,x.framebufferHeight,{format:Gi,type:ta,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),je.setContext(l),je.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(ae){for(let xe=0;xe<ae.removed.length;xe++){const Oe=ae.removed[xe],at=O.indexOf(Oe);at>=0&&(O[at]=null,P[at].disconnect(Oe))}for(let xe=0;xe<ae.added.length;xe++){const Oe=ae.added[xe];let at=O.indexOf(Oe);if(at===-1){for(let xt=0;xt<P.length;xt++)if(xt>=O.length){O.push(Oe),at=xt;break}else if(O[xt]===null){O[xt]=Oe,at=xt;break}if(at===-1)break}const $e=P[at];$e&&$e.connect(Oe)}}const K=new q,Me=new q;function z(ae,xe,Oe){K.setFromMatrixPosition(xe.matrixWorld),Me.setFromMatrixPosition(Oe.matrixWorld);const at=K.distanceTo(Me),$e=xe.projectionMatrix.elements,xt=Oe.projectionMatrix.elements,Bt=$e[14]/($e[10]-1),k=$e[14]/($e[10]+1),Pt=($e[9]+1)/$e[5],ft=($e[9]-1)/$e[5],rt=($e[8]-1)/$e[0],Ge=(xt[8]+1)/xt[0],kt=Bt*rt,We=Bt*Ge,gt=at/(-rt+Ge),Ft=gt*-rt;if(xe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ft),ae.translateZ(gt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),$e[10]===-1)ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const en=Bt+gt,I=k+gt,C=kt-Ft,te=We+(at-Ft),me=Pt*k/I*en,_e=ft*k/I*en;ae.projectionMatrix.makePerspective(C,te,me,_e,en,I),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function X(ae,xe){xe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(xe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let xe=ae.near,Oe=ae.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(Oe=S.depthFar)),Q.near=D.near=R.near=xe,Q.far=D.far=R.far=Oe,(oe!==Q.near||ce!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),oe=Q.near,ce=Q.far),Q.layers.mask=ae.layers.mask|6,R.layers.mask=Q.layers.mask&3,D.layers.mask=Q.layers.mask&5;const at=ae.parent,$e=Q.cameras;X(Q,at);for(let xt=0;xt<$e.length;xt++)X($e[xt],at);$e.length===2?z(Q,R,D):Q.projectionMatrix.copy(R.projectionMatrix),he(ae,Q,at)};function he(ae,xe,Oe){Oe===null?ae.matrix.copy(xe.matrixWorld):(ae.matrix.copy(Oe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(xe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(xe.projectionMatrix),ae.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=np*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(ae){m=ae,y!==null&&(y.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(ae){return v[ae]};let pe=null;function Ie(ae,xe){if(_=xe.getViewerPose(p||f),b=xe,_!==null){const Oe=_.views;x!==null&&(e.setRenderTargetFramebuffer(A,x.framebuffer),e.setRenderTarget(A));let at=!1;Oe.length!==Q.cameras.length&&(Q.cameras.length=0,at=!0);for(let k=0;k<Oe.length;k++){const Pt=Oe[k];let ft=null;if(x!==null)ft=x.getViewport(Pt);else{const Ge=g.getViewSubImage(y,Pt);ft=Ge.viewport,k===0&&(e.setRenderTargetTextures(A,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(A))}let rt=H[k];rt===void 0&&(rt=new Mi,rt.layers.enable(k),rt.viewport=new on,H[k]=rt),rt.matrix.fromArray(Pt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Pt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ft.x,ft.y,ft.width,ft.height),k===0&&(Q.matrix.copy(rt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),at===!0&&Q.cameras.push(rt)}const $e=l.enabledFeatures;if($e&&$e.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const k=g.getDepthInformation(Oe[0]);k&&k.isValid&&k.texture&&S.init(k,l.renderState)}if($e&&$e.includes("camera-access")&&T){e.state.unbindTexture(),g=s.getBinding();for(let k=0;k<Oe.length;k++){const Pt=Oe[k].camera;if(Pt){let ft=v[Pt];ft||(ft=new tx,v[Pt]=ft);const rt=g.getCameraImage(Pt);ft.sourceTexture=rt}}}}for(let Oe=0;Oe<P.length;Oe++){const at=O[Oe],$e=P[Oe];at!==null&&$e!==void 0&&$e.update(at,xe,p||f)}pe&&pe(ae,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),b=null}const je=new ax;je.setAnimationLoop(Ie),this.setAnimationLoop=function(ae){pe=ae},this.dispose=function(){}}}const Us=new na,gw=new pn;function _w(r,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,Zv(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,N,L,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),g(S,v)):v.isMeshPhongMaterial?(c(S,v),_(S,v)):v.isMeshStandardMaterial?(c(S,v),y(S,v),v.isMeshPhysicalMaterial&&x(S,v,A)):v.isMeshMatcapMaterial?(c(S,v),b(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(f(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,N,L):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===fi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===fi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,A=N.envMapRotation;L&&(S.envMap.value=L,Us.copy(A),Us.x*=-1,Us.y*=-1,Us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),S.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(Us)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function f(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,N,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function g(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function x(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===fi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const N=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function vw(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const A=L.program;s.uniformBlockBinding(N,A)}function p(N,L){let A=l[N.id];A===void 0&&(b(N),A=_(N),l[N.id]=A,N.addEventListener("dispose",S));const P=L.program;s.updateUBOMapping(N,P);const O=e.render.frame;c[N.id]!==O&&(y(N),c[N.id]=O)}function _(N){const L=g();N.__bindingPointIndex=L;const A=r.createBuffer(),P=N.__size,O=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,P,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,A),A}function g(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=l[N.id],A=N.uniforms,P=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let O=0,B=A.length;O<B;O++){const G=Array.isArray(A[O])?A[O]:[A[O]];for(let R=0,D=G.length;R<D;R++){const H=G[R];if(x(H,O,R,P)===!0){const Q=H.__offset,oe=Array.isArray(H.value)?H.value:[H.value];let ce=0;for(let fe=0;fe<oe.length;fe++){const F=oe[fe],$=T(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,Q+ce,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ce),ce+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(N,L,A,P){const O=N.value,B=L+"_"+A;if(P[B]===void 0)return typeof O=="number"||typeof O=="boolean"?P[B]=O:P[B]=O.clone(),!0;{const G=P[B];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return P[B]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function b(N){const L=N.uniforms;let A=0;const P=16;for(let B=0,G=L.length;B<G;B++){const R=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,H=R.length;D<H;D++){const Q=R[D],oe=Array.isArray(Q.value)?Q.value:[Q.value];for(let ce=0,fe=oe.length;ce<fe;ce++){const F=oe[ce],$=T(F),K=A%P,Me=K%$.boundary,z=K+Me;A+=Me,z!==0&&P-z<$.storage&&(A+=P-z),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=$.storage}}}const O=A%P;return O>0&&(A+=P-O),N.__size=A,N.__cache={},this}function T(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const A=f.indexOf(L.__bindingPointIndex);f.splice(A,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const N in l)r.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class xw{constructor(e={}){const{canvas:i=WM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=f;const b=new Uint32Array(4),T=new Int32Array(4);let S=null,v=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=Si;let O=0,B=0,G=null,R=-1,D=null;const H=new on,Q=new on;let oe=null;const ce=new Ot(0);let fe=0,F=i.width,$=i.height,K=1,Me=null,z=null;const X=new on(0,0,F,$),he=new on(0,0,F,$);let pe=!1;const Ie=new xp;let je=!1,ae=!1;const xe=new pn,Oe=new q,at=new on,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function Bt(){return G===null?K:1}let k=s;function Pt(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",Pe,!1),i.addEventListener("webglcontextrestored",Xe,!1),i.addEventListener("webglcontextcreationerror",Ce,!1),k===null){const W="webgl2";if(k=Pt(W,w),k===null)throw Pt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ft,rt,Ge,kt,We,gt,Ft,en,I,C,te,me,_e,de,Ue,Le,Ke,ke,Re,Ne,qe,Ye,ze,ht;function Z(){ft=new CT(k),ft.init(),Ye=new fw(k,ft),rt=new MT(k,ft,e,Ye),Ge=new cw(k,ft),rt.reversedDepthBuffer&&y&&Ge.buffers.depth.setReversed(!0),kt=new LT(k),We=new KA,gt=new uw(k,ft,Ge,We,rt,Ye,kt),Ft=new bT(A),en=new RT(A),I=new BE(k),ze=new yT(k,I),C=new DT(k,I,kt,ze),te=new OT(k,C,I,kt),Re=new NT(k,rt,gt),Le=new ET(We),me=new ZA(A,Ft,en,ft,rt,ze,Le),_e=new _w(A,We),de=new JA,Ue=new aw(ft),ke=new xT(A,Ft,en,Ge,te,x,m),Ke=new ow(A,te,rt),ht=new vw(k,kt,rt,Ge),Ne=new ST(k,ft,kt),qe=new UT(k,ft,kt),kt.programs=me.programs,A.capabilities=rt,A.extensions=ft,A.properties=We,A.renderLists=de,A.shadowMap=Ke,A.state=Ge,A.info=kt}Z();const we=new mw(A,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(F,$,!1))},this.getSize=function(w){return w.set(F,$)},this.setSize=function(w,W,re=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,$=W,i.width=Math.floor(w*K),i.height=Math.floor(W*K),re===!0&&(i.style.width=w+"px",i.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(F*K,$*K).floor()},this.setDrawingBufferSize=function(w,W,re){F=w,$=W,K=re,i.width=Math.floor(w*re),i.height=Math.floor(W*re),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,W,re,ne){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,W,re,ne),Ge.viewport(H.copy(X).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,W,re,ne){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,W,re,ne),Ge.scissor(Q.copy(he).multiplyScalar(K).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){Ge.setScissorTest(pe=w)},this.setOpaqueSort=function(w){Me=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,re=!0){let ne=0;if(w){let j=!1;if(G!==null){const ge=G.texture.format;j=ge===mp||ge===pp||ge===dp}if(j){const ge=G.texture.type,Ae=ge===ta||ge===Is||ge===al||ge===sl||ge===fp||ge===hp,He=ke.getClearColor(),Fe=ke.getClearAlpha(),Je=He.r,ut=He.g,nt=He.b;Ae?(b[0]=Je,b[1]=ut,b[2]=nt,b[3]=Fe,k.clearBufferuiv(k.COLOR,0,b)):(T[0]=Je,T[1]=ut,T[2]=nt,T[3]=Fe,k.clearBufferiv(k.COLOR,0,T))}else ne|=k.COLOR_BUFFER_BIT}W&&(ne|=k.DEPTH_BUFFER_BIT),re&&(ne|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",Xe,!1),i.removeEventListener("webglcontextcreationerror",Ce,!1),ke.dispose(),de.dispose(),Ue.dispose(),We.dispose(),Ft.dispose(),en.dispose(),te.dispose(),ze.dispose(),ht.dispose(),me.dispose(),we.dispose(),we.removeEventListener("sessionstart",ln),we.removeEventListener("sessionend",ee),Be.stop()};function Pe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=kt.autoReset,W=Ke.enabled,re=Ke.autoUpdate,ne=Ke.needsUpdate,j=Ke.type;Z(),kt.autoReset=w,Ke.enabled=W,Ke.autoUpdate=re,Ke.needsUpdate=ne,Ke.type=j}function Ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ye(w){const W=w.target;W.removeEventListener("dispose",ye),Ze(W)}function Ze(w){lt(w),We.remove(w)}function lt(w){const W=We.get(w).programs;W!==void 0&&(W.forEach(function(re){me.releaseProgram(re)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,re,ne,j,ge){W===null&&(W=$e);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,He=Wt(w,W,re,ne,j);Ge.setMaterial(ne,Ae);let Fe=re.index,Je=1;if(ne.wireframe===!0){if(Fe=C.getWireframeAttribute(re),Fe===void 0)return;Je=2}const ut=re.drawRange,nt=re.attributes.position;let Mt=ut.start*Je,Et=(ut.start+ut.count)*Je;ge!==null&&(Mt=Math.max(Mt,ge.start*Je),Et=Math.min(Et,(ge.start+ge.count)*Je)),Fe!==null?(Mt=Math.max(Mt,0),Et=Math.min(Et,Fe.count)):nt!=null&&(Mt=Math.max(Mt,0),Et=Math.min(Et,nt.count));const Kt=Et-Mt;if(Kt<0||Kt===1/0)return;ze.setup(j,ne,He,re,Fe);let Yt,St=Ne;if(Fe!==null&&(Yt=I.get(Fe),St=qe,St.setIndex(Yt)),j.isMesh)ne.wireframe===!0?(Ge.setLineWidth(ne.wireframeLinewidth*Bt()),St.setMode(k.LINES)):St.setMode(k.TRIANGLES);else if(j.isLine){let ct=ne.linewidth;ct===void 0&&(ct=1),Ge.setLineWidth(ct*Bt()),j.isLineSegments?St.setMode(k.LINES):j.isLineLoop?St.setMode(k.LINE_LOOP):St.setMode(k.LINE_STRIP)}else j.isPoints?St.setMode(k.POINTS):j.isSprite&&St.setMode(k.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ll("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ct=j._multiDrawStarts,hn=j._multiDrawCounts,Dt=j._multiDrawCount,qn=Fe?I.get(Fe).bytesPerElement:1,Li=We.get(ne).currentProgram.getUniforms();for(let $n=0;$n<Dt;$n++)Li.setValue(k,"_gl_DrawID",$n),St.render(ct[$n]/qn,hn[$n])}else if(j.isInstancedMesh)St.renderInstances(Mt,Kt,j.count);else if(re.isInstancedBufferGeometry){const ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,hn=Math.min(re.instanceCount,ct);St.renderInstances(Mt,Kt,hn)}else St.render(Mt,Kt)};function It(w,W,re){w.transparent===!0&&w.side===Aa&&w.forceSinglePass===!1?(w.side=fi,w.needsUpdate=!0,st(w,W,re),w.side=ls,w.needsUpdate=!0,st(w,W,re),w.side=Aa):st(w,W,re)}this.compile=function(w,W,re=null){re===null&&(re=w),v=Ue.get(re),v.init(W),L.push(v),re.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),w!==re&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ne=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ge=j.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){const He=ge[Ae];It(He,re,j),ne.add(He)}else It(ge,re,j),ne.add(ge)}),v=L.pop(),ne},this.compileAsync=function(w,W,re=null){const ne=this.compile(w,W,re);return new Promise(j=>{function ge(){if(ne.forEach(function(Ae){We.get(Ae).currentProgram.isReady()&&ne.delete(Ae)}),ne.size===0){j(w);return}setTimeout(ge,10)}ft.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Rt=null;function Wn(w){Rt&&Rt(w)}function ln(){Be.stop()}function ee(){Be.start()}const Be=new ax;Be.setAnimationLoop(Wn),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(w){Rt=w,we.setAnimationLoop(w),w===null?Be.stop():Be.start()},we.addEventListener("sessionstart",ln),we.addEventListener("sessionend",ee),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,W,G),v=Ue.get(w,L.length),v.init(W),L.push(v),xe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ie.setFromProjectionMatrix(xe,ea,W.reversedDepth),ae=this.localClippingEnabled,je=Le.init(this.clippingPlanes,ae),S=de.get(w,N.length),S.init(),N.push(S),we.enabled===!0&&we.isPresenting===!0){const ge=A.xr.getDepthSensingMesh();ge!==null&&Qe(ge,W,-1/0,A.sortObjects)}Qe(w,W,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(Me,z),xt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,xt&&ke.addToRenderList(S,w),this.info.render.frame++,je===!0&&Le.beginShadows();const re=v.state.shadowsArray;Ke.render(re,w,W),je===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,j=S.transmissive;if(v.setupLights(),W.isArrayCamera){const ge=W.cameras;if(j.length>0)for(let Ae=0,He=ge.length;Ae<He;Ae++){const Fe=ge[Ae];Te(ne,j,w,Fe)}xt&&ke.render(w);for(let Ae=0,He=ge.length;Ae<He;Ae++){const Fe=ge[Ae];De(S,w,Fe,Fe.viewport)}}else j.length>0&&Te(ne,j,w,W),xt&&ke.render(w),De(S,w,W);G!==null&&B===0&&(gt.updateMultisampleRenderTarget(G),gt.updateRenderTargetMipmap(G)),w.isScene===!0&&w.onAfterRender(A,w,W),ze.resetDefaultState(),R=-1,D=null,L.pop(),L.length>0?(v=L[L.length-1],je===!0&&Le.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Qe(w,W,re,ne){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){ne&&at.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const Ae=te.update(w),He=w.material;He.visible&&S.push(w,Ae,He,re,at.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const Ae=te.update(w),He=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),at.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),at.copy(Ae.boundingSphere.center)),at.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(He)){const Fe=Ae.groups;for(let Je=0,ut=Fe.length;Je<ut;Je++){const nt=Fe[Je],Mt=He[nt.materialIndex];Mt&&Mt.visible&&S.push(w,Ae,Mt,re,at.z,nt)}}else He.visible&&S.push(w,Ae,He,re,at.z,null)}}const ge=w.children;for(let Ae=0,He=ge.length;Ae<He;Ae++)Qe(ge[Ae],W,re,ne)}function De(w,W,re,ne){const j=w.opaque,ge=w.transmissive,Ae=w.transparent;v.setupLightsView(re),je===!0&&Le.setGlobalState(A.clippingPlanes,re),ne&&Ge.viewport(H.copy(ne)),j.length>0&&tt(j,W,re),ge.length>0&&tt(ge,W,re),Ae.length>0&&tt(Ae,W,re),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Te(w,W,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new Fs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?ul:ta,minFilter:zs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const ge=v.state.transmissionRenderTarget[ne.id],Ae=ne.viewport||H;ge.setSize(Ae.z*A.transmissionResolutionScale,Ae.w*A.transmissionResolutionScale);const He=A.getRenderTarget(),Fe=A.getActiveCubeFace(),Je=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(ce),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),xt&&ke.render(re);const ut=A.toneMapping;A.toneMapping=os;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),je===!0&&Le.setGlobalState(A.clippingPlanes,ne),tt(w,re,ne),gt.updateMultisampleRenderTarget(ge),gt.updateRenderTargetMipmap(ge),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Et=0,Kt=W.length;Et<Kt;Et++){const Yt=W[Et],St=Yt.object,ct=Yt.geometry,hn=Yt.material,Dt=Yt.group;if(hn.side===Aa&&St.layers.test(ne.layers)){const qn=hn.side;hn.side=fi,hn.needsUpdate=!0,yt(St,re,ne,ct,hn,Dt),hn.side=qn,hn.needsUpdate=!0,Mt=!0}}Mt===!0&&(gt.updateMultisampleRenderTarget(ge),gt.updateRenderTargetMipmap(ge))}A.setRenderTarget(He,Fe,Je),A.setClearColor(ce,fe),nt!==void 0&&(ne.viewport=nt),A.toneMapping=ut}function tt(w,W,re){const ne=W.isScene===!0?W.overrideMaterial:null;for(let j=0,ge=w.length;j<ge;j++){const Ae=w[j],He=Ae.object,Fe=Ae.geometry,Je=Ae.group;let ut=Ae.material;ut.allowOverride===!0&&ne!==null&&(ut=ne),He.layers.test(re.layers)&&yt(He,W,re,Fe,ut,Je)}}function yt(w,W,re,ne,j,ge){w.onBeforeRender(A,W,re,ne,j,ge),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(A,W,re,ne,w,ge),j.transparent===!0&&j.side===Aa&&j.forceSinglePass===!1?(j.side=fi,j.needsUpdate=!0,A.renderBufferDirect(re,W,ne,j,w,ge),j.side=ls,j.needsUpdate=!0,A.renderBufferDirect(re,W,ne,j,w,ge),j.side=Aa):A.renderBufferDirect(re,W,ne,j,w,ge),w.onAfterRender(A,W,re,ne,j,ge)}function st(w,W,re){W.isScene!==!0&&(W=$e);const ne=We.get(w),j=v.state.lights,ge=v.state.shadowsArray,Ae=j.state.version,He=me.getParameters(w,j.state,ge,W,re),Fe=me.getProgramCacheKey(He);let Je=ne.programs;ne.environment=w.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(w.isMeshStandardMaterial?en:Ft).get(w.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Je===void 0&&(w.addEventListener("dispose",ye),Je=new Map,ne.programs=Je);let ut=Je.get(Fe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Ae)return Qt(w,He),ut}else He.uniforms=me.getUniforms(w),w.onBeforeCompile(He,A),ut=me.acquireProgram(He,Fe),Je.set(Fe,ut),ne.uniforms=He.uniforms;const nt=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(nt.clippingPlanes=Le.uniform),Qt(w,He),ne.needsLights=Vt(w),ne.lightsStateVersion=Ae,ne.needsLights&&(nt.ambientLightColor.value=j.state.ambient,nt.lightProbe.value=j.state.probe,nt.directionalLights.value=j.state.directional,nt.directionalLightShadows.value=j.state.directionalShadow,nt.spotLights.value=j.state.spot,nt.spotLightShadows.value=j.state.spotShadow,nt.rectAreaLights.value=j.state.rectArea,nt.ltc_1.value=j.state.rectAreaLTC1,nt.ltc_2.value=j.state.rectAreaLTC2,nt.pointLights.value=j.state.point,nt.pointLightShadows.value=j.state.pointShadow,nt.hemisphereLights.value=j.state.hemi,nt.directionalShadowMap.value=j.state.directionalShadowMap,nt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,nt.spotShadowMap.value=j.state.spotShadowMap,nt.spotLightMatrix.value=j.state.spotLightMatrix,nt.spotLightMap.value=j.state.spotLightMap,nt.pointShadowMap.value=j.state.pointShadowMap,nt.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=ut,ne.uniformsList=null,ut}function mt(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=su.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Qt(w,W){const re=We.get(w);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function Wt(w,W,re,ne,j){W.isScene!==!0&&(W=$e),gt.resetTextureUnits();const ge=W.fog,Ae=ne.isMeshStandardMaterial?W.environment:null,He=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Yr,Fe=(ne.isMeshStandardMaterial?en:Ft).get(ne.envMap||Ae),Je=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ut=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),nt=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,Et=!!re.morphAttributes.color;let Kt=os;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Kt=A.toneMapping);const Yt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,St=Yt!==void 0?Yt.length:0,ct=We.get(ne),hn=v.state.lights;if(je===!0&&(ae===!0||w!==D)){const xn=w===D&&ne.id===R;Le.setState(ne,w,xn)}let Dt=!1;ne.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==hn.state.version||ct.outputColorSpace!==He||j.isBatchedMesh&&ct.batching===!1||!j.isBatchedMesh&&ct.batching===!0||j.isBatchedMesh&&ct.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ct.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ct.instancing===!1||!j.isInstancedMesh&&ct.instancing===!0||j.isSkinnedMesh&&ct.skinning===!1||!j.isSkinnedMesh&&ct.skinning===!0||j.isInstancedMesh&&ct.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ct.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ct.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ct.instancingMorph===!1&&j.morphTexture!==null||ct.envMap!==Fe||ne.fog===!0&&ct.fog!==ge||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Le.numPlanes||ct.numIntersection!==Le.numIntersection)||ct.vertexAlphas!==Je||ct.vertexTangents!==ut||ct.morphTargets!==nt||ct.morphNormals!==Mt||ct.morphColors!==Et||ct.toneMapping!==Kt||ct.morphTargetsCount!==St)&&(Dt=!0):(Dt=!0,ct.__version=ne.version);let qn=ct.currentProgram;Dt===!0&&(qn=st(ne,W,j));let Li=!1,$n=!1,zn=!1;const cn=qn.getUniforms(),ei=ct.uniforms;if(Ge.useProgram(qn.program)&&(Li=!0,$n=!0,zn=!0),ne.id!==R&&(R=ne.id,$n=!0),Li||D!==w){Ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),cn.setValue(k,"projectionMatrix",w.projectionMatrix),cn.setValue(k,"viewMatrix",w.matrixWorldInverse);const Gn=cn.map.cameraPosition;Gn!==void 0&&Gn.setValue(k,Oe.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&cn.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&cn.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,$n=!0,zn=!0)}if(j.isSkinnedMesh){cn.setOptional(k,j,"bindMatrix"),cn.setOptional(k,j,"bindMatrixInverse");const xn=j.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),cn.setValue(k,"boneTexture",xn.boneTexture,gt))}j.isBatchedMesh&&(cn.setOptional(k,j,"batchingTexture"),cn.setValue(k,"batchingTexture",j._matricesTexture,gt),cn.setOptional(k,j,"batchingIdTexture"),cn.setValue(k,"batchingIdTexture",j._indirectTexture,gt),cn.setOptional(k,j,"batchingColorTexture"),j._colorsTexture!==null&&cn.setValue(k,"batchingColorTexture",j._colorsTexture,gt));const Yn=re.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&Re.update(j,re,qn),($n||ct.receiveShadow!==j.receiveShadow)&&(ct.receiveShadow=j.receiveShadow,cn.setValue(k,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ei.envMap.value=Fe,ei.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(ei.envMapIntensity.value=W.environmentIntensity),$n&&(cn.setValue(k,"toneMappingExposure",A.toneMappingExposure),ct.needsLights&&Gt(ei,zn),ge&&ne.fog===!0&&_e.refreshFogUniforms(ei,ge),_e.refreshMaterialUniforms(ei,ne,K,$,v.state.transmissionRenderTarget[w.id]),su.upload(k,mt(ct),ei,gt)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(su.upload(k,mt(ct),ei,gt),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&cn.setValue(k,"center",j.center),cn.setValue(k,"modelViewMatrix",j.modelViewMatrix),cn.setValue(k,"normalMatrix",j.normalMatrix),cn.setValue(k,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const xn=ne.uniformsGroups;for(let Gn=0,Vs=xn.length;Gn<Vs;Gn++){const ai=xn[Gn];ht.update(ai,qn),ht.bind(ai,qn)}}return qn}function Gt(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Vt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,W,re){const ne=We.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),We.get(w.texture).__webglTexture=W,We.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const re=We.get(w);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0};const qt=k.createFramebuffer();this.setRenderTarget=function(w,W=0,re=0){G=w,O=W,B=re;let ne=!0,j=null,ge=!1,Ae=!1;if(w){const Fe=We.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(k.FRAMEBUFFER,null),ne=!1;else if(Fe.__webglFramebuffer===void 0)gt.setupRenderTarget(w);else if(Fe.__hasExternalTextures)gt.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Fe.__boundDepthTexture!==nt){if(nt!==null&&We.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(w)}}const Je=w.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ae=!0);const ut=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ut[W])?j=ut[W][re]:j=ut[W],ge=!0):w.samples>0&&gt.useMultisampledRTT(w)===!1?j=We.get(w).__webglMultisampledFramebuffer:Array.isArray(ut)?j=ut[re]:j=ut,H.copy(w.viewport),Q.copy(w.scissor),oe=w.scissorTest}else H.copy(X).multiplyScalar(K).floor(),Q.copy(he).multiplyScalar(K).floor(),oe=pe;if(re!==0&&(j=qt),Ge.bindFramebuffer(k.FRAMEBUFFER,j)&&ne&&Ge.drawBuffers(w,j),Ge.viewport(H),Ge.scissor(Q),Ge.setScissorTest(oe),ge){const Fe=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,re)}else if(Ae){const Fe=W;for(let Je=0;Je<w.textures.length;Je++){const ut=We.get(w.textures[Je]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Je,ut.__webglTexture,re,Fe)}}else if(w!==null&&re!==0){const Fe=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fe.__webglTexture,re)}R=-1},this.readRenderTargetPixels=function(w,W,re,ne,j,ge,Ae,He=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe){Ge.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Je=w.textures[He],ut=Je.format,nt=Je.type;if(!rt.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-ne&&re>=0&&re<=w.height-j&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(W,re,ne,j,Ye.convert(ut),Ye.convert(nt),ge))}finally{const Je=G!==null?We.get(G).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(w,W,re,ne,j,ge,Ae,He=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Fe=Fe[Ae]),Fe)if(W>=0&&W<=w.width-ne&&re>=0&&re<=w.height-j){Ge.bindFramebuffer(k.FRAMEBUFFER,Fe);const Je=w.textures[He],ut=Je.format,nt=Je.type;if(!rt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Mt),k.bufferData(k.PIXEL_PACK_BUFFER,ge.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He),k.readPixels(W,re,ne,j,Ye.convert(ut),Ye.convert(nt),0);const Et=G!==null?We.get(G).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,Et);const Kt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await qM(k,Kt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Mt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ge),k.deleteBuffer(Mt),k.deleteSync(Kt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,re=0){const ne=Math.pow(2,-re),j=Math.floor(w.image.width*ne),ge=Math.floor(w.image.height*ne),Ae=W!==null?W.x:0,He=W!==null?W.y:0;gt.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,Ae,He,j,ge),Ge.unbindTexture()};const it=k.createFramebuffer(),Rn=k.createFramebuffer();this.copyTextureToTexture=function(w,W,re=null,ne=null,j=0,ge=null){ge===null&&(j!==0?(ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=j,j=0):ge=0);let Ae,He,Fe,Je,ut,nt,Mt,Et,Kt;const Yt=w.isCompressedTexture?w.mipmaps[ge]:w.image;if(re!==null)Ae=re.max.x-re.min.x,He=re.max.y-re.min.y,Fe=re.isBox3?re.max.z-re.min.z:1,Je=re.min.x,ut=re.min.y,nt=re.isBox3?re.min.z:0;else{const Yn=Math.pow(2,-j);Ae=Math.floor(Yt.width*Yn),He=Math.floor(Yt.height*Yn),w.isDataArrayTexture?Fe=Yt.depth:w.isData3DTexture?Fe=Math.floor(Yt.depth*Yn):Fe=1,Je=0,ut=0,nt=0}ne!==null?(Mt=ne.x,Et=ne.y,Kt=ne.z):(Mt=0,Et=0,Kt=0);const St=Ye.convert(W.format),ct=Ye.convert(W.type);let hn;W.isData3DTexture?(gt.setTexture3D(W,0),hn=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(gt.setTexture2DArray(W,0),hn=k.TEXTURE_2D_ARRAY):(gt.setTexture2D(W,0),hn=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Dt=k.getParameter(k.UNPACK_ROW_LENGTH),qn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Li=k.getParameter(k.UNPACK_SKIP_PIXELS),$n=k.getParameter(k.UNPACK_SKIP_ROWS),zn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),k.pixelStorei(k.UNPACK_SKIP_ROWS,ut),k.pixelStorei(k.UNPACK_SKIP_IMAGES,nt);const cn=w.isDataArrayTexture||w.isData3DTexture,ei=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Yn=We.get(w),xn=We.get(W),Gn=We.get(Yn.__renderTarget),Vs=We.get(xn.__renderTarget);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,Gn.__webglFramebuffer),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let ai=0;ai<Fe;ai++)cn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(w).__webglTexture,j,nt+ai),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(W).__webglTexture,ge,Kt+ai)),k.blitFramebuffer(Je,ut,Ae,He,Mt,Et,Ae,He,k.DEPTH_BUFFER_BIT,k.NEAREST);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||We.has(w)){const Yn=We.get(w),xn=We.get(W);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,it),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Rn);for(let Gn=0;Gn<Fe;Gn++)cn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Yn.__webglTexture,j,nt+Gn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Yn.__webglTexture,j),ei?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,ge,Kt+Gn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,ge),j!==0?k.blitFramebuffer(Je,ut,Ae,He,Mt,Et,Ae,He,k.COLOR_BUFFER_BIT,k.NEAREST):ei?k.copyTexSubImage3D(hn,ge,Mt,Et,Kt+Gn,Je,ut,Ae,He):k.copyTexSubImage2D(hn,ge,Mt,Et,Je,ut,Ae,He);Ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ei?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(hn,ge,Mt,Et,Kt,Ae,He,Fe,St,ct,Yt.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(hn,ge,Mt,Et,Kt,Ae,He,Fe,St,Yt.data):k.texSubImage3D(hn,ge,Mt,Et,Kt,Ae,He,Fe,St,ct,Yt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ge,Mt,Et,Ae,He,St,ct,Yt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ge,Mt,Et,Yt.width,Yt.height,St,Yt.data):k.texSubImage2D(k.TEXTURE_2D,ge,Mt,Et,Ae,He,St,ct,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Dt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Li),k.pixelStorei(k.UNPACK_SKIP_ROWS,$n),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zn),ge===0&&W.generateMipmaps&&k.generateMipmap(hn),Ge.unbindTexture()},this.initRenderTarget=function(w){We.get(w).__webglFramebuffer===void 0&&gt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),Ge.unbindTexture()},this.resetState=function(){O=0,B=0,G=null,Ge.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Xt._getUnpackColorSpace()}}const xv={type:"change"},Ap={type:"start"},cx={type:"end"},Qc=new pl,yv=new is,yw=Math.cos(70*XM.DEG2RAD),Un=new q,ui=2*Math.PI,rn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sd=1e-6;class Sw extends zE{constructor(e,i=null){super(e,i),this.state=rn.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Bs,this._lastTargetPosition=new q,this._quat=new Bs().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new q_,this._sphericalDelta=new q_,this._scale=1,this._panOffset=new q,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new q,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ew.bind(this),this._onPointerDown=Mw.bind(this),this._onPointerUp=bw.bind(this),this._onContextMenu=Uw.bind(this),this._onMouseWheel=ww.bind(this),this._onKeyDown=Rw.bind(this),this._onTouchStart=Cw.bind(this),this._onTouchMove=Dw.bind(this),this._onMouseDown=Tw.bind(this),this._onMouseMove=Aw.bind(this),this._interceptControlDown=Lw.bind(this),this._interceptControlUp=Nw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xv),this.update(),this.state=rn.NONE}update(e=null){const i=this.object.position;Un.copy(i).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===rn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),l<-Math.PI?l+=ui:l>Math.PI&&(l-=ui),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),i.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=Un.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new q(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Qc.origin.copy(this.object.position),Qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qc.direction))<yw?this.object.lookAt(this.target):(yv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qc.intersectPlane(yv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sd||this._lastTargetPosition.distanceToSquared(this.target)>sd?(this.dispatchEvent(xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Un.setFromMatrixColumn(i,0),Un.multiplyScalar(-e),this._panOffset.add(Un)}_panUp(e,i){this.screenSpacePanning===!0?Un.setFromMatrixColumn(i,1):(Un.setFromMatrixColumn(i,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(e),this._panOffset.add(Un)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Un.copy(l).sub(this.target);let c=Un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/i.clientHeight),this._rotateUp(ui*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+i.x)*.5,h=(e.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new vt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Mw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Ew(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function bw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cx),this.state=rn.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function Tw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=rn.DOLLY;break;case Gr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rn.ROTATE}break;case Gr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rn.PAN}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Ap)}function Aw(r){switch(this.state){case rn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case rn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ww(r){this.enabled===!1||this.enableZoom===!1||this.state!==rn.NONE||(r.preventDefault(),this.dispatchEvent(Ap),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(cx))}function Rw(r){this.enabled!==!1&&this._handleKeyDown(r)}function Cw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=rn.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=rn.TOUCH_PAN;break;default:this.state=rn.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=rn.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=rn.TOUCH_DOLLY_ROTATE;break;default:this.state=rn.NONE}break;default:this.state=rn.NONE}this.state!==rn.NONE&&this.dispatchEvent(Ap)}function Dw(r){switch(this._trackPointer(r),this.state){case rn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case rn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case rn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case rn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=rn.NONE}}function Uw(r){this.enabled!==!1&&r.preventDefault()}function Lw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const cl=Object.freeze({servers:3,channels:2,idleW:70,busyW:320,networkW:25,pue:1.2,ci:400,tuSeconds:1,seed:12,milpTimeLimit:5}),ux=Object.freeze([{id:"serial",en:"Serial",zh:"串行调度",color:"#8ea5b7"},{id:"random",en:"Random",zh:"随机调度",color:"#c5a5f6"},{id:"list",en:"List",zh:"List 调度",color:"#77aafa"},{id:"aware",en:"Network-aware List",zh:"通信感知 List",color:"#efc17a"},{id:"milp",en:"Our Proposed",zh:"本文方法",color:"#e692aa"}]),Ma=1e-7,rd=r=>r.reduce((e,i)=>e+i,0),ss=r=>`${r.source}:${r.target}`;function Ow(r){let e=r>>>0;return()=>{e+=1831565813;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Xn(r,e,i,s,l=!1){if(typeof r!="number"||!Number.isFinite(r)||r<i||r>s||l&&!Number.isInteger(r))throw new Error(`${e} must be ${l?"an integer":"a finite number"} from ${i} to ${s}.`);return r}function fx(r={},e={}){const i={...cl,...e,...r};return Xn(i.servers,"Servers",1,8,!0),Xn(i.channels,"Channels",1,8,!0),Xn(i.idleW,"Idle power",0,1e6),Xn(i.busyW,"Busy power",i.idleW,1e6),Xn(i.networkW,"Network power",0,1e6),Xn(i.pue,"PUE",1,10),Xn(i.ci,"Carbon intensity",0,5e3),Xn(i.tuSeconds,"Seconds per time unit",.001,86400),Xn(i.seed,"Seed",0,4294967295,!0),Xn(i.milpTimeLimit,"MILP time limit in seconds",.01,60),i}function Pw(r){const e=new Map(r.nodes.map(f=>[f.id,[]])),i=new Map(r.nodes.map(f=>[f.id,[]]));for(const f of r.edges)e.get(f.target).push(f),i.get(f.source).push(f);const s=new Map([...e].map(([f,h])=>[f,h.length])),l=r.nodes.filter(f=>!s.get(f.id)).map(f=>f.id).sort((f,h)=>f-h),c=[];for(;l.length;){const f=l.shift();c.push(f);for(const h of i.get(f)){const m=s.get(h.target)-1;s.set(h.target,m),m||(l.push(h.target),l.sort((p,_)=>p-_))}}if(c.length!==r.nodes.length)throw new Error("The graph contains a cycle; upload a directed acyclic graph.");return{order:c,parents:e,children:i}}function zr(r,e={}){if(!r||!Array.isArray(r.nodes)||!Array.isArray(r.edges))throw new Error("A DAG needs nodes and edges arrays.");if(r.nodes.length<1||r.nodes.length>32)throw new Error("Use 1–32 tasks.");if(r.edges.length>496)throw new Error("Use at most 496 unique edges.");const i=fx({...r.seed===void 0?{}:{seed:r.seed},...e},r.resources),s=new Set,l=r.nodes.map(m=>{if(Xn(m.id,"Task ID",0,2147483647,!0),Xn(m.duration,`Task ${m.id} duration`,.001,1e4),s.has(m.id))throw new Error(`Duplicate task ID ${m.id}.`);return s.add(m.id),{...m,id:m.id,duration:m.duration}}),c=new Set,f=r.edges.map(m=>{if(!s.has(m.source)||!s.has(m.target))throw new Error("Every edge endpoint must name an existing task.");if(m.source===m.target)throw new Error("Self edges are not allowed in a DAG.");if(Xn(m.duration,"Transfer duration",0,1e4),c.has(ss(m)))throw new Error(`Duplicate edge ${ss(m)}.`);return c.add(ss(m)),{source:m.source,target:m.target,duration:m.duration}}),h={...r,nodes:l,edges:f,resources:{servers:i.servers,channels:i.channels},seed:i.seed};return Pw(h),h}function hx(r="forkjoin",e=8,i=12){if(Xn(e,"Task count",1,32,!0),Xn(i,"Seed",0,4294967295,!0),!["pipeline","forkjoin","mapreduce","diamond","layered","random","tree","independent"].includes(r))throw new Error(`Unknown DAG family ${r}.`);const l=Ow(i),c=Array.from({length:e},(p,_)=>({id:_,duration:2+Math.floor(l()*7)})),f=[],h=new Set,m=(p,_)=>{p>=_||p<0||_>=e||h.has(`${p}:${_}`)||(h.add(`${p}:${_}`),f.push({source:p,target:_,duration:1+Math.floor(l()*4)}))};if(r==="pipeline")for(let p=1;p<e;p++)m(p-1,p);if(r==="forkjoin")for(let p=1;p<e-1;p++)m(0,p),m(p,e-1);if(r==="forkjoin"&&e===2&&m(0,1),r==="mapreduce"){const p=Math.ceil(e/2);for(let _=0;_<p;_++)for(let g=p;g<e;g++)m(_,g)}if(r==="diamond")for(let p=0;p<e-1;p+=3)m(p,p+1),m(p,p+2),m(p+1,p+3),m(p+2,p+3);if(r==="layered"){const p=Math.max(2,Math.ceil(Math.sqrt(e)));for(let _=0;_<e;_++)for(let g=_+1;g<e;g++)Math.floor(g/p)===Math.floor(_/p)+1&&(g%p===_%p||l()<.55)&&m(_,g)}if(r==="random")for(let p=0;p<e;p++)for(let _=p+1;_<e;_++)l()<.24&&m(p,_);if(r==="tree")for(let p=1;p<e;p++)m(Math.floor((p-1)/2),p);return{name:r,nodes:c,edges:f,seed:i,resources:{servers:cl.servers,channels:cl.channels}}}function Jc(){return{...hx("forkjoin",8,70),name:"Shared network · fork and join",seed:cl.seed}}function zw(r,e){const i=zr(r);if(!e||!Array.isArray(e.tasks)||!Array.isArray(e.flows))throw new Error("A schedule needs tasks and flows arrays.");if(e.tasks.length!==i.nodes.length)throw new Error("Schedule must contain every task exactly once.");const s=new Map(i.nodes.map(g=>[g.id,g])),l=new Map,c=Array.from({length:i.resources.servers},()=>[]),f=Array.from({length:i.resources.channels},()=>[]),h=(g,y)=>{if(!Number.isFinite(g.start)||!Number.isFinite(g.end)||g.start<-Ma||g.end<g.start-Ma)throw new Error(`${y} has an invalid interval.`)};for(const g of e.tasks){if(!s.has(g.id)||l.has(g.id))throw new Error("Schedule has an unknown or duplicate task.");if(Xn(g.resource,"Task server",0,c.length-1,!0),h(g,"Task"),Math.abs(g.end-g.start-s.get(g.id).duration)>Ma)throw new Error("A task duration differs from the input.");l.set(g.id,g),c[g.resource].push(g)}const m=new Map(i.edges.map(g=>[ss(g),g])),p=new Map;for(const g of e.flows){const y=m.get(ss(g));if(!y||p.has(ss(g)))throw new Error("Schedule has an unknown or duplicate transfer.");const x=l.get(g.source),b=l.get(g.target);if(x.resource===b.resource)throw new Error("Co-located tasks must not emit a network transfer.");if(Xn(g.resource,"Transfer channel",0,f.length-1,!0),h(g,"Transfer"),Math.abs(g.end-g.start-y.duration)>Ma)throw new Error("A transfer duration differs from the input.");if(g.start<x.end-Ma||g.end>b.start+Ma)throw new Error("Transfer violates predecessor/consumer precedence.");p.set(ss(g),g),y.duration>0&&f[g.resource].push(g)}for(const g of i.edges){const y=l.get(g.source),x=l.get(g.target);if(y.end>x.start+Ma)throw new Error("Task precedence is violated.");if(y.resource!==x.resource&&!p.has(ss(g)))throw new Error("Every cross-server edge needs a transfer, including zero-duration edges.")}for(const g of[...c,...f]){const y=[...g].sort((x,b)=>x.start-b.start||x.end-b.end);for(let x=1;x<y.length;x++)if(y[x].start<y[x-1].end-Ma)throw new Error("Resource mutex violated: overlapping intervals.")}const _=Math.max(...e.tasks.map(g=>g.end));if(!Number.isFinite(e.completion_time)||Math.abs(_-e.completion_time)>Ma)throw new Error("Completion time must equal the last task end.");return!0}function Hs(r,e,i={},s=0){const l=fx(i,r.resources);if(l.servers!==r.resources.servers||l.channels!==r.resources.channels)throw new Error("Accounting resources must match the scheduled resources.");if(typeof s!="number"||Number.isNaN(s))throw new Error("Ledger time must be a number.");const c=Math.max(0,Math.min(e.completion_time,s)),f=c>=e.completion_time,h=c*l.tuSeconds,m=l.pue*l.ci/36e5,p=Array.from({length:l.servers},(T,S)=>{const v=e.tasks.filter(P=>P.resource===S),N=rd(v.map(P=>Math.max(0,Math.min(c,P.end)-P.start)))*l.tuSeconds,L=f?null:v.find(P=>P.start<=c&&c<P.end)?.id??null,A=l.idleW*h+(l.busyW-l.idleW)*N;return{resource:S,carbonG:A*m,energyJ:A,powerW:f?0:L===null?l.idleW:l.busyW,activeTask:L,busySeconds:N,idleSeconds:Math.max(0,h-N)}}),_=l.networkW*h,g={carbonG:_*m,energyJ:_,powerW:f?0:l.networkW,activeFlows:f?[]:e.flows.filter(T=>T.start<=c&&c<T.end)},y=rd(p.map(T=>T.energyJ))+_,x=rd(p.map(T=>T.busySeconds))*(l.busyW-l.idleW)*m,b=(l.servers*l.idleW+l.networkW)*h*m;return{time:c,finished:f,totalG:y*m,totalJ:y,servers:p,network:g,fixedG:x,reservationG:b}}function Iw(r={}){const e=r.nodes||[],i=new Map(e.map((x,b)=>[String(x.id),b])),s=e.map(()=>0),l=e.map(()=>[]);for(const x of r.edges||[]){const b=i.get(String(x.source)),T=i.get(String(x.target));b!==void 0&&T!==void 0&&(s[T]++,l[b].push(T))}const c=s.slice(),f=e.map(()=>0),h=e.map((x,b)=>b).filter(x=>c[x]===0),m=[];for(let x=0;x<h.length;x++){const b=h[x];m.push(b);for(const T of l[b])f[T]=Math.max(f[T],f[b]+1),--c[T]===0&&h.push(T)}e.forEach((x,b)=>{m.includes(b)||m.push(b)});const p=[];m.forEach(x=>(p[f[x]]||=[]).push(x));const _=Math.max(0,...p.map(x=>x?.length||0)),g=p.length<=7&&_<=6,y=new Map;if(g){const x=Math.max(1,p.length);p.forEach((b=[],T)=>{const S=b.length===6?10:8.75,v=b.length===6?5.75:4.1;b.forEach((N,L)=>{y.set(String(e[N].id),{x:x===1?0:(T/(x-1)-.5)*11.2,y:b.length===1?_===6?7.125:6.55:S-L/(b.length-1)*v,z:-.55,rank:T})})})}else{const x=Math.min(7,Math.max(2,Math.ceil(Math.sqrt(e.length*1.65)))),b=Math.ceil(e.length/x);m.forEach((T,S)=>{const v=Math.floor(S/x),N=v%2?x-1-S%x:S%x;y.set(String(e[T].id),{x:(N/Math.max(1,x-1)-.5)*11.2,y:b===1?6.55:8.75-v/(b-1)*4.1,z:-.55,rank:f[T]})})}return y}function Bw(r){if(r===1)return[{x:0,z:2.4}];if(r===2)return[{x:-3.9,z:1.5},{x:3.9,z:1.5}];if(r===3)return[{x:-4.3,z:2},{x:0,z:-2.1},{x:4.3,z:2}];const e=Math.ceil(r/2),i=r-e;return Array.from({length:r},(s,l)=>{const c=l<e,f=c?e:i,h=c?l:l-e;return{x:f===1?0:(h/(f-1)-.5)*9.8,z:c?2.65:-2.3}})}const Qi=["#5fc9ba","#73a7ff","#e1b969","#b298e9","#e48d9a","#73c2df","#b1c47a","#de9a6f"],Pr=(r,e,i)=>Math.min(i,Math.max(e,r)),dn=(r,e=0)=>Number.isFinite(Number(r))?Number(r):e,il=r=>dn(r)===0?"0.000":Math.abs(r)<.001?Number(r).toPrecision(2):Number(r).toFixed(r>=100?1:3),Ta=r=>Number(dn(r).toFixed(2)).toString(),Fw=r=>new q(r.x,r.y,r.z),dx=(r,e)=>Qi[Math.max(0,(r.nodes||[]).findIndex(i=>String(i.id)===String(e)))%Qi.length],px=(r,e)=>({type:"task",id:r.id,duration:r.duration,resource:e?.resource??null,start:e?.start??null,end:e?.end??null});function Hw({dag:r,result:e,ledger:i,lang:s,onSelect:l}){const c=s==="zh",f=new Map((e?.tasks||[]).map(h=>[String(h.id),h]));return M.jsxs("div",{className:"carbon-scene-fallback",children:[M.jsx("p",{children:c?"当前设备无法开启 3D，实时能耗与排放仍可查看。":"3D is unavailable on this device. Live energy and carbon remain available."}),M.jsxs("div",{className:"carbon-fallback-resources",children:[(i?.servers||[]).map(h=>M.jsxs("button",{onClick:()=>l?.({type:"server",resource:h.resource}),children:[M.jsxs("strong",{children:["VM ",h.resource+1]}),M.jsxs("span",{children:[il(h.carbonG)," gCO₂e"]}),M.jsxs("small",{children:[dn(h.powerW).toFixed(0)," W · ",h.activeTask!=null?`T${h.activeTask}`:i?.finished?c?"已释放":"Released":c?"空闲":"Idle"]})]},h.resource)),M.jsxs("div",{children:[M.jsx("strong",{children:c?"网络":"Network"}),M.jsxs("span",{children:[il(i?.network?.carbonG)," gCO₂e"]}),M.jsxs("small",{children:[dn(i?.network?.powerW).toFixed(0)," W"]})]})]}),M.jsx("div",{className:"carbon-fallback-tasks",children:(r?.nodes||[]).map(h=>{const m=f.get(String(h.id)),p=m&&i?.time>=m.end?"done":m&&i?.time>=m.start?"running":"waiting";return M.jsxs("button",{"data-state":p,style:{"--task-color":dx(r,h.id)},onClick:()=>l?.(px(h,m)),children:["T",h.id,M.jsx("small",{children:m?`${Ta(m.start)}–${Ta(m.end)} tu · VM ${m.resource+1}`:`${Ta(h.duration)} tu`})]},h.id)})})]})}function Gw({dag:r,result:e,config:i,time:s=0,playing:l=!1,lang:c="zh",showAssignments:f=!0,smoke:h=!0,resetKey:m=0,onSelect:p,comparisonEndTime:_}){const g=be.useRef(null),y=be.useRef(null),[x,b]=be.useState(!1),[T,S]=be.useState(!1),v=be.useMemo(()=>e?Hs(r,e,i,s):null,[r,e,i,s]),N=be.useRef(null);N.current={dag:r,result:e,config:i,time:s,playing:l,lang:c,showAssignments:f,smoke:h,onSelect:p,ledger:v,comparisonEndTime:_};const L=Pr(Math.floor(dn(i?.servers,r?.resources?.servers||1)),1,8),A=Pr(Math.floor(dn(i?.channels,r?.resources?.channels||1)),1,16);be.useEffect(()=>{const O=g.current;if(!O||!r)return;b(!1),S(!1);let B;try{B=new xw({antialias:!0,alpha:!1,powerPreference:"low-power"}),B.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),B.setClearColor("#060e19"),B.outputColorSpace=Si,O.appendChild(B.domElement)}catch{b(!0);return}const G=B.domElement;G.setAttribute("aria-label",c==="zh"?"任务 DAG、虚拟机和网络的交互式 3D 场景":"Interactive 3D task DAG, virtual machines and network");const R=new vE;R.fog=new vp("#060e19",29,54);const D=new Mi(39,1,.1,100),H=new Sw(D,G);H.enableDamping=!0,H.dampingFactor=.09,H.enablePan=!0,H.screenSpacePanning=!0,H.minPolarAngle=.36,H.maxPolarAngle=Math.PI*.52,H.rotateSpeed=.55,H.zoomSpeed=.7,H.target.set(0,4.1,0);const Q=()=>{const De=Math.max(.45,O.clientWidth/Math.max(1,O.clientHeight)),Te=Math.max(20,20/De);H.target.set(0,4.1,0),D.position.set(.25,4.1+Te*.21,Te),H.minDistance=8,H.maxDistance=Math.max(54,Te*2.5),H.update()};y.current={reset:Q,zoom:De=>{D.position.sub(H.target).multiplyScalar(De).add(H.target),H.update()}},R.add(new RE("#c7e5ff","#101b31",2.5));const oe=new LE("#adcbff",3.1);oe.position.set(-5,12,10),R.add(oe);const ce=new DE("#53ecc0",18,18);ce.position.set(0,2.8,1),R.add(ce);const fe=new bn(new ml(14.6,8.6),new qc({color:"#0b1c2c",metalness:.18,roughness:.85,transparent:!0,opacity:.85}));fe.rotation.x=-Math.PI/2,fe.position.y=-.12,R.add(fe);const F=new PE(14,14,"#214957","#142b3c");F.position.y=-.1,F.material.transparent=!0,F.material.opacity=.56,R.add(F);const $=new Jv(new bE(new Hi(14.6,.12,8.6)),new jr({color:"#32667a",transparent:!0,opacity:.65}));$.position.y=-.17,R.add($);const K=document.createElement("div");K.className="carbon-world-overlay",O.appendChild(K);const Me=[],z=[],X=(De,Te,tt,yt)=>{const st=document.createElement(yt?"button":"div");st.className=`carbon-world-label ${De}`,st.innerHTML=tt,yt&&(st.type="button",st.addEventListener("click",()=>N.current.onSelect?.(yt))),K.appendChild(st);const mt={element:st,point:Te,width:0,height:0};return Me.push(mt),mt},he=Iw(r),pe=new Map((e?.tasks||[]).map(De=>[String(De.id),De])),Ie=new Map((e?.flows||[]).map(De=>[`${De.source}:${De.target}`,De])),je=Bw(L),ae=[],xe=new Map,Oe=new Mp(.26,0),at=new hu(.35,.018,5,24),$e=new Fr;R.add($e);const xt=[],Bt=[];for(const[De,Te]of(r.nodes||[]).entries()){const tt=he.get(String(Te.id));if(!tt)continue;const yt=Qi[De%Qi.length],st=px(Te,pe.get(String(Te.id))),mt=new bn(Oe,new qc({color:yt,emissive:yt,emissiveIntensity:.15,roughness:.55,metalness:.25}));mt.position.copy(Fw(tt)),mt.userData.selection=st,R.add(mt),z.push(mt);const Qt=new bn(at,new Ki({color:yt,transparent:!0,opacity:.25}));Qt.position.copy(mt.position),R.add(Qt);const Wt=X("carbon-task-label",mt.position.clone().add(new q(0,.13,.05)),"<strong></strong><small></small>",st);Wt.element.style.setProperty("--task-color",yt),Wt.element.dataset.task=String(Te.id),Wt.element.querySelector("strong").textContent=`T${Te.id}`,Wt.element.querySelector("small").textContent=`${Ta(Te.duration)} tu`;const Gt={node:Te,mesh:mt,ring:Qt,label:Wt,color:yt,row:pe.get(String(Te.id)),state:""};ae.push(Gt),xe.set(String(Te.id),Gt);const Vt=je[Gt.row?.resource];if(Vt){const qt=[mt.position.clone().add(new q(0,-.3,0)),new q(Vt.x,1.05,Vt.z)],it=new au(new Ln().setFromPoints(qt),new wE({color:yt,transparent:!0,opacity:.12,dashSize:.1,gapSize:.13,depthWrite:!1}));it.computeLineDistances(),$e.add(it),xt.push({line:it,task:Gt})}}for(const[De,Te]of(r.edges||[]).entries()){const tt=xe.get(String(Te.source)),yt=xe.get(String(Te.target));if(!tt||!yt)continue;const st=tt.mesh.position.clone(),mt=yt.mesh.position.clone(),Qt=mt.clone().sub(st).normalize();st.addScaledVector(Qt,.3),mt.addScaledVector(Qt,-.38);const Wt=new au(new Ln().setFromPoints([st,mt]),new jr({color:"#6e91af",transparent:!0,opacity:.35,depthWrite:!1})),Gt=new bn(new yp(.052,.16,5),new Ki({color:"#6e91af",transparent:!0,opacity:.65}));Gt.position.copy(mt),Gt.quaternion.setFromUnitVectors(new q(0,1,0),Qt),R.add(Wt,Gt);let Vt=null;if((r.edges||[]).length<=16){const qt=r.edges.filter(W=>String(W.source)===String(Te.source)).length,it=r.edges.filter(W=>String(W.target)===String(Te.target)).length,Rn=(qt>it?.6:it>qt?.4:.5)+(De%3-1)*.01,w=tt.mesh.position.clone().lerp(yt.mesh.position,Rn);w.y+=.13,w.z+=.06,Vt=X("carbon-edge-label",w,"<span></span>"),Vt.element.querySelector("span").textContent=`${Ta(Te.duration)} tu`,Vt.element.dataset.edge=`${Te.source}:${Te.target}`,Vt.element.title=`T${Te.source} → T${Te.target} · ${Ta(Te.duration)} tu`,Vt.element.setAttribute("aria-label",Vt.element.title)}Bt.push({edge:Te,line:Wt,arrow:Gt,label:Vt})}const k=new Fr;k.position.set(0,.55,0);const Pt=new bn(new pu(.64,.72,.35,6),new qc({color:"#153849",metalness:.65,roughness:.3,emissive:"#2b6080",emissiveIntensity:.3})),ft=new bn(new hu(.84,.035,6,40),new Ki({color:"#73a7ff",transparent:!0,opacity:.6}));ft.rotation.x=Math.PI/2,k.add(Pt,ft),R.add(k);const rt=X("carbon-hub-label",new q(2.3,1.7,.2),"<strong></strong><span></span><small></small>"),Ge=new bn(new Hi(.15,1,.15),new Ki({color:"#73a7ff",transparent:!0,opacity:.8}));Ge.position.set(.96,.2,0),R.add(Ge);const kt=[],We=[],gt=new Hi(1.05,.88,.85),Ft=new Hi(.7,.045,.025),en=new Hi(.14,1,.14);je.forEach((De,Te)=>{const tt=new bn(gt,new qc({color:"#203c52",metalness:.45,roughness:.48,emissive:"#132432",emissiveIntensity:.4}));tt.position.set(De.x,.45,De.z),tt.userData.selection={type:"server",resource:Te},R.add(tt),z.push(tt);const yt=[];for(let Wt=0;Wt<4;Wt++){const Gt=new bn(Ft,new Ki({color:"#2e6270",transparent:!0,opacity:.8}));Gt.position.set(De.x,.2+Wt*.15,De.z+.438),R.add(Gt),yt.push(Gt)}const st=new bn(new Hi(.85,.025,.64),new Ki({color:"#17374b"}));st.position.set(De.x,.903,De.z),R.add(st);const mt=new bn(en,new Ki({color:"#e1b969",transparent:!0,opacity:.92}));mt.position.set(De.x+.72,0,De.z),R.add(mt);const Qt=X("carbon-server-label",new q(De.x,0,De.z+.72),"<strong></strong><span></span><small></small>",{type:"server",resource:Te});Qt.element.dataset.resource=String(Te),Qt.element.querySelector("strong").textContent=`VM ${Te+1}`,kt.push({resource:Te,position:De,body:tt,slits:yt,bar:mt,label:Qt});for(let Wt=0;Wt<A;Wt++){const Gt=(Wt-(A-1)/2)*Math.min(.08,.45/A),Vt=new q(-De.z,0,De.x).normalize().multiplyScalar(Gt),qt=new q(De.x,.32,De.z).add(Vt),it=new q(0,.56,0).add(Vt),Rn=new jr({color:Qi[Wt%Qi.length],transparent:!0,opacity:.12,depthWrite:!1}),w=new au(new Ln().setFromPoints([qt,it]),Rn);R.add(w),We.push({resource:Te,channel:Wt,line:w,start:qt,end:it})}});const I=new Ep(.055,6,4),C=Array.from({length:A*3},(De,Te)=>{const tt=new bn(I,new Ki({color:Qi[Math.floor(Te/3)%Qi.length]}));return tt.visible=!1,R.add(tt),tt}),te=document.createElement("canvas");te.width=te.height=32;const me=te.getContext("2d"),_e=me.createRadialGradient(16,16,0,16,16,16);_e.addColorStop(0,"rgba(207,231,236,.85)"),_e.addColorStop(.3,"rgba(174,200,216,.5)"),_e.addColorStop(1,"rgba(152,176,199,0)"),me.fillStyle=_e,me.fillRect(0,0,32,32);const de=new EE(te),Ue=[...je.map(De=>({...De,y:.98})),{x:0,z:0,y:.95}].map((De,Te)=>{const tt=new Float32Array(126),yt=new Ln;yt.setAttribute("position",new Vi(tt,3).setUsage(VM));const st=new $v({map:de,color:"#b8ccd4",size:.58,transparent:!0,opacity:.23,depthWrite:!1,sizeAttenuation:!0}),mt=new ME(yt,st);return mt.frustumCulled=!1,R.add(mt),{points:mt,data:tt,position:De,index:Te}});let Le=null;const Ke=new OE,ke=new vt,Re=De=>{De.button===0&&(Le=[De.clientX,De.clientY])},Ne=De=>{if(!Le||De.button!==0||Math.hypot(De.clientX-Le[0],De.clientY-Le[1])>5){Le=null;return}Le=null;const Te=G.getBoundingClientRect();ke.set((De.clientX-Te.left)/Te.width*2-1,-(De.clientY-Te.top)/Te.height*2+1),Ke.setFromCamera(ke,D);const tt=Ke.intersectObjects(z,!1)[0];tt&&N.current.onSelect?.(tt.object.userData.selection)},qe=()=>{Le=null},Ye=De=>{De.preventDefault(),b(!0)};G.addEventListener("pointerdown",Re),G.addEventListener("pointerup",Ne),G.addEventListener("pointercancel",qe),G.addEventListener("webglcontextlost",Ye);let ze=0,ht=0,Z=!0,we=!0,Pe=1;const Xe=()=>{if(ze=O.clientWidth,ht=O.clientHeight,!ze||!ht)return;B.setSize(ze,ht,!1),D.aspect=ze/ht,D.updateProjectionMatrix(),we=!0;const De=Math.max(1,1/D.aspect);Z?(Q(),Z=!1):De!==Pe&&D.position.sub(H.target).multiplyScalar(De/Pe).add(H.target),Pe=De,Me.forEach(Te=>{Te.width=Te.element.offsetWidth,Te.height=Te.element.offsetHeight})},Ce=new ResizeObserver(Xe);Ce.observe(O),Xe();let ye,Ze=performance.now(),lt=.8,It=null,Rt=null,Wn=null,ln=null,ee=null;const Be=new q,Qe=De=>{if(ye=requestAnimationFrame(Qe),B.getContext().isContextLost())return;const Te=N.current,tt=Math.min(.05,Math.max(0,(De-Ze)/1e3));Ze=De,Te.playing&&(lt+=tt);const yt=H.update(),st=Te.ledger,mt=st!==It||Te.lang!==Rt||Te.showAssignments!==Wn||Te.comparisonEndTime!==ee;if(!Te.playing&&!yt&&!we&&!mt&&Te.smoke===ln)return;ln=Te.smoke,we=!1,D.updateMatrixWorld();const Qt=dn(st?.time,Math.min(dn(Te.time),dn(Te.result?.completion_time))),Wt=dn(Te.result?.completion_time),Gt=st?.finished??Qt>=Wt,Vt=Gt?[]:st?.network?.activeFlows||[];if($e.visible=Te.showAssignments,mt){It=st,Rt=Te.lang,Wn=Te.showAssignments,ee=Te.comparisonEndTime;const it=Te.lang==="zh";G.setAttribute("aria-label",it?"任务 DAG、虚拟机和网络的交互式 3D 场景":"Interactive 3D task DAG, virtual machines and network");const Rn=new Set(Vt.map(j=>`${j.source}:${j.target}`));ae.forEach(j=>{const{row:ge,node:Ae,mesh:He,ring:Fe,label:Je,color:ut}=j,Mt=(r.edges||[]).filter(Kt=>String(Kt.target)===String(Ae.id)).every(Kt=>{const Yt=pe.get(String(Kt.source)),St=Ie.get(`${Kt.source}:${Kt.target}`);return Yt&&Yt.end<=Qt&&(!St||St.end<=Qt)}),Et=ge&&Qt>=ge.end?"done":ge&&Qt>=ge.start&&Qt<ge.end?"running":Mt?"ready":"waiting";j.state=Et,He.material.color.set(Et==="waiting"?"#34495f":ut),He.material.emissive.set(ut),He.material.emissiveIntensity=Et==="running"?.72:Et==="done"?.25:.07,Fe.material.opacity=Et==="running"?.9:Et==="done"?.6:.2,Je.element.dataset.state=Et,Je.element.title=`T${Ae.id} · ${Ta(Ae.duration)} tu · ${it?{waiting:"等待前序",ready:"就绪",running:"运行中",done:"完成"}[Et]:Et}${ge?` · VM ${ge.resource+1} · ${Ta(ge.start)}–${Ta(ge.end)} tu`:""}`,Je.element.setAttribute("aria-label",Je.element.title)}),xt.forEach(({line:j,task:ge})=>{j.material.opacity=ge.state==="running"?.6:ge.state==="done"?.09:.11,j.material.dashSize=ge.state==="running"?.17:.1}),Bt.forEach(({edge:j,line:ge,arrow:Ae,label:He})=>{const Fe=Rn.has(`${j.source}:${j.target}`),Je=Fe?"#73a7ff":"#6e91af";ge.material.color.set(Je),Ae.material.color.set(Je),ge.material.opacity=Fe?.95:.3,He&&(He.element.dataset.state=Fe?"active":"idle")});const w=Math.max(Wt,dn(Te.comparisonEndTime,Wt),.1),W=dn(Te.config?.tuSeconds,1)*dn(Te.config?.pue,1)*dn(Te.config?.ci,0)/36e5,re=Math.max(1e-8,Math.max(dn(Te.config?.busyW),dn(Te.config?.idleW),dn(Te.config?.networkW))*w*W);kt.forEach(j=>{const ge=st?.servers?.find(Je=>Je.resource===j.resource),Ae=ge?.activeTask!=null&&!Gt,He=Ae?dx(r,ge.activeTask):"#294c62";j.body.material.color.set(Ae?He:Gt?"#203044":"#203c52"),j.body.material.emissive.set(He),j.body.material.emissiveIntensity=Ae?.3:.04,j.slits.forEach(Je=>{Je.material.color.set(Ae?He:"#396070"),Je.material.opacity=Gt?.35:Ae?1:.6});const Fe=Pr(dn(ge?.carbonG)/re,0,1)*1.75;j.bar.visible=Fe>.002,j.bar.scale.y=Math.max(.002,Fe),j.bar.position.y=Fe/2,j.label.element.dataset.state=Ae?"running":Gt?"released":"idle",j.label.element.style.setProperty("--task-color",He),j.label.element.querySelector("span").textContent=`${il(ge?.carbonG)} gCO₂e`,j.label.element.querySelector("small").textContent=`${dn(ge?.powerW).toFixed(0)} W · ${Ae?`T${ge.activeTask}`:Gt?it?"已释放":"Released":it?"空闲":"Idle"}`,j.label.element.title=`VM ${j.resource+1} · ${il(ge?.carbonG)} gCO₂e · ${dn(ge?.energyJ).toFixed(1)} J`}),rt.element.querySelector("strong").textContent=it?`网络 · ${A} 通道`:`Network · ${A} ch`,rt.element.querySelector("span").textContent=`${il(st?.network?.carbonG)} gCO₂e`,rt.element.querySelector("small").textContent=`${dn(st?.network?.powerW).toFixed(0)} W · ${Gt?it?"已释放":"Released":Vt.length?it?`${Vt.length} 传输`:`${Vt.length} flows`:it?"已预留":"Reserved"}`;const ne=Pr(dn(st?.network?.carbonG)/re,0,1)*1.75;Ge.visible=ne>.002,Ge.scale.y=Math.max(.002,ne),Ge.position.y=ne/2,ft.material.opacity=Gt?.2:Vt.length?1:.45,We.forEach(j=>{const ge=Vt.some(Ae=>Ae.resource===j.channel&&[pe.get(String(Ae.source))?.resource,pe.get(String(Ae.target))?.resource].includes(j.resource));j.line.material.opacity=ge?.85:.11}),Me.forEach(j=>{j.width=j.element.offsetWidth,j.height=j.element.offsetHeight})}ae.forEach(it=>{it.ring.quaternion.copy(D.quaternion),it.state==="running"?(it.mesh.rotation.y=lt*.85,it.ring.scale.setScalar(1+Math.sin(lt*4)*.1)):it.ring.scale.setScalar(1)}),C.forEach((it,Rn)=>{const w=Vt[Math.floor(Rn/3)],W=w&&je[pe.get(String(w.source))?.resource],re=w&&je[pe.get(String(w.target))?.resource];if(it.visible=!!(w&&W&&re),!it.visible)return;const ne=((Qt-w.start)/Math.max(1e-4,w.end-w.start)+Rn%3*.18)%1,j=dn(w.resource),ge=We.find(He=>He.resource===pe.get(String(w.source))?.resource&&He.channel===j),Ae=We.find(He=>He.resource===pe.get(String(w.target))?.resource&&He.channel===j);if(!ge||!Ae){it.visible=!1;return}ne<.5?it.position.lerpVectors(ge.start,ge.end,ne*2):it.position.lerpVectors(Ae.end,Ae.start,(ne-.5)*2),it.position.y+=.045,it.material.color.set(Qi[j%Qi.length])}),Ue.forEach(it=>{const Rn=it.index===L,w=st?.servers?.find(ne=>ne.resource===it.index),W=Rn?Vt.length>0:w?.activeTask!=null;if(it.points.visible=Te.smoke&&!Gt&&(Rn?W&&dn(st?.network?.powerW)>0:dn(w?.powerW)>0),!it.points.visible)return;const re=W?42:13;it.points.geometry.setDrawRange(0,re),it.points.material.opacity=W?.32:.15,it.points.material.size=W?.66:.39;for(let ne=0;ne<re;ne++){const j=(lt*(W?.33:.18)+ne/re+it.index*.117)%1,ge=ne*2.399+it.index,Ae=.1+j*(W?.48:.23);it.data[ne*3]=it.position.x+Math.cos(ge)*Ae+j*.25,it.data[ne*3+1]=it.position.y+j*(W?1.55:.85),it.data[ne*3+2]=it.position.z+Math.sin(ge)*Ae}it.points.geometry.attributes.position.needsUpdate=!0});const qt=[];Me.forEach(it=>{Be.copy(it.point).project(D);const Rn=Be.z>=-1&&Be.z<=1&&Math.abs(Be.x)<1.16&&Math.abs(Be.y)<1.16;if(it.element.style.visibility=Rn?"visible":"hidden",!Rn)return;let w=(Be.x*.5+.5)*ze,W=(-Be.y*.5+.5)*ht;const re=(it.width||55)/2,ne=it.height||28;w=Pr(w,re+4,Math.max(re+4,ze-re-4));for(let j=0;j<4&&qt.some(Ae=>w+re>Ae.left&&w-re<Ae.right&&W+ne>Ae.top&&W<Ae.bottom);j++)W+=j%2?-ne*2:ne;W=Pr(W,32,Math.max(32,ht-ne-20)),qt.push({left:w-re,right:w+re,top:W,bottom:W+ne}),it.element.style.transform=`translate3d(${Math.round(w)}px,${Math.round(W)}px,0) translateX(-50%)`}),B.render(R,D)};return ye=requestAnimationFrame(Qe),S(!0),()=>{cancelAnimationFrame(ye),Ce.disconnect(),H.dispose(),y.current=null,G.removeEventListener("pointerdown",Re),G.removeEventListener("pointerup",Ne),G.removeEventListener("pointercancel",qe),G.removeEventListener("webglcontextlost",Ye);const De=new Set,Te=new Set;R.traverse(tt=>{tt.geometry&&De.add(tt.geometry),tt.material&&(Array.isArray(tt.material)?tt.material:[tt.material]).forEach(yt=>Te.add(yt))}),De.forEach(tt=>tt.dispose()),Te.forEach(tt=>tt.dispose()),de.dispose(),B.dispose(),B.forceContextLoss(),G.remove(),K.remove()}},[r,e,L,A]),be.useEffect(()=>{y.current?.reset()},[m]);const P=c==="zh";return M.jsxs("div",{className:"carbon-scene","data-renderer":x?"fallback":T?"webgl":"loading",children:[M.jsx("div",{className:"carbon-scene-stage",ref:g,"aria-hidden":x||void 0}),x?M.jsx(Hw,{dag:r,result:e,ledger:v,lang:c,onSelect:p}):M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"carbon-scene-key",children:[M.jsxs("span",{children:[M.jsx("i",{}),P?"任务 DAG":"Task DAG"]}),M.jsx("small",{children:P?"时长 · tu":"Duration · tu"})]}),M.jsxs("div",{className:"carbon-scene-controls","aria-label":P?"3D 视角控制":"3D camera controls",children:[M.jsx("button",{type:"button",onClick:()=>y.current?.zoom(.82),title:P?"放大":"Zoom in","aria-label":P?"放大 3D 场景":"Zoom in 3D scene",children:"＋"}),M.jsx("button",{type:"button",onClick:()=>y.current?.zoom(1.22),title:P?"缩小":"Zoom out","aria-label":P?"缩小 3D 场景":"Zoom out 3D scene",children:"−"}),M.jsx("button",{type:"button",onClick:()=>y.current?.reset(),title:P?"重置视角":"Reset view","aria-label":P?"重置 3D 视角":"Reset 3D view",children:"↺"})]}),M.jsx("div",{className:"carbon-scene-caption",children:P?"拖动旋转 · 滚轮缩放 · 点击查看":"Drag to orbit · Scroll to zoom · Click to inspect"}),M.jsx("div",{className:"carbon-scene-smoke-note",children:P?"烟雾表示功率状态":"Plumes indicate power state"})]})]})}const kw="modulepreload",Vw=function(r,e){return new URL(r,e).href},Sv={},jw=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const f=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(_=>{if(_=Vw(_,s),_ in Sv)return;Sv[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(s)for(let b=f.length-1;b>=0;b--){const T=f[b];if(T.href===_&&(!g||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${y}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":kw,g||(x.as="script"),x.crossOrigin="",x.href=_,m&&x.setAttribute("nonce",m),document.head.appendChild(x),g)return new Promise((b,T)=>{x.addEventListener("load",b),x.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})},Xw=200*1024*1024,Ww=600*1e3;function qw(r){return["video/mp4;codecs=avc1.42E028","video/mp4;codecs=avc1","video/mp4","video/webm;codecs=h264","video/webm;codecs=vp8","video/webm"].find(e=>r(e))||""}function Mv(r,e=new Date){const i=r.toLowerCase().startsWith("video/mp4")?"mp4":"webm";return`CARELab-Carbon-Studio-${e.toISOString().replace(/[:.]/g,"-")}.${i}`}async function Ev(r){const e=new Uint8Array(await r.slice(0,4096).arrayBuffer()),i=new DataView(e.buffer,e.byteOffset,e.byteLength);for(let s=0;s+12<=e.length;){const l=i.getUint32(s);if(String.fromCharCode(...e.slice(s+4,s+8))==="ftyp"&&l>=16&&s+16<=e.length)return!0;if(l<8||l>e.length-s)break;s+=l}return!1}class Yw{constructor(e,i,s=5e6,l=()=>{},c={}){const f=c.Recorder||globalThis.MediaRecorder;this.now=c.now||(()=>performance.now()),this.maxBytes=c.maxBytes||Xw,this.stream=e,this.changed=l,this.bytes=0,this.chunks=[],this.elapsed=0,this.since=null,this.reason="",this.state="idle",this.settled=!1,this.recorder=new f(e,{mimeType:i,videoBitsPerSecond:s}),this.done=new Promise((h,m)=>{this.resolve=h,this.reject=m}),this.done.catch(()=>{}),this.onEnded=()=>this.stop("sharing-ended"),this.stream.getVideoTracks().forEach(h=>h.addEventListener("ended",this.onEnded)),this.recorder.ondataavailable=h=>{this.settled||!h.data?.size||(this.chunks.push(h.data),this.bytes+=h.data.size,this.changed(),this.bytes>=this.maxBytes&&this.stop("limit"))},this.recorder.onerror=()=>{this.reason||="encoder",this.freezeClock(),this.state="stopping",this.changed()},this.recorder.onstop=()=>this.finish(i)}freezeClock(){this.since!==null&&(this.elapsed+=Math.max(0,this.now()-this.since)),this.since=null}duration(){return this.elapsed+(this.since===null?0:Math.max(0,this.now()-this.since))}start(){if(this.state==="idle")try{this.recorder.start(1e3),this.state="recording",this.since=this.now(),this.changed()}catch(e){throw this.cleanup(),this.state="stopped",this.settled=!0,this.reject(e),e}}pause(){this.state==="recording"&&(this.recorder.pause(),this.freezeClock(),this.state="paused",this.changed())}resume(){this.state==="paused"&&(this.recorder.resume(),this.since=this.now(),this.state="recording",this.changed())}stop(e=""){if(!(this.settled||this.state==="stopping")){if(this.reason||=e,this.freezeClock(),this.state="stopping",this.recorder.state!=="inactive")try{this.recorder.stop()}catch{this.finish(this.recorder.mimeType)}else this.finish(this.recorder.mimeType);this.changed()}}cleanup(){this.stream.getVideoTracks().forEach(e=>e.removeEventListener("ended",this.onEnded)),this.stream.getTracks().forEach(e=>e.stop())}finish(e){if(this.settled)return;this.settled=!0,this.freezeClock(),this.cleanup(),this.state="stopped";const i=new Blob(this.chunks,{type:this.recorder.mimeType||e});this.chunks=[],this.changed(),i.size?this.resolve({blob:i,duration:this.elapsed,reason:this.reason}):this.reject(new Error("empty"))}}async function Zw(r,{onProgress:e=()=>{},signal:i,load:s=()=>jw(()=>import("./index-DrM87vF9.js"),[],import.meta.url)}={}){const l=()=>{if(i?.aborted)throw new DOMException("Conversion canceled","AbortError")};if(l(),await Ev(r))return e(1),r.type==="video/mp4"?r:new Blob([r],{type:"video/mp4"});const{Input:c,Output:f,Conversion:h,ALL_FORMATS:m,BlobSource:p,BufferTarget:_,Mp4OutputFormat:g}=await s();l();const y=new c({formats:m,source:new p(r)}),x=new f({format:new g,target:new _});let b;const T=()=>{b?.cancel().catch(()=>{})};try{if(b=await h.init({input:y,output:x,video:{codec:"avc"},audio:{discard:!0}}),l(),!b.isValid)throw new Error("mp4-unsupported");i?.addEventListener("abort",T,{once:!0}),b.onProgress=v=>e(Math.max(0,Math.min(1,v))),await b.execute(),l();const S=new Blob([x.target.buffer],{type:"video/mp4"});if(!await Ev(S))throw new Error("invalid-mp4");return e(1),S}catch(S){throw b&&await b.cancel().catch(()=>{}),S}finally{i?.removeEventListener("abort",T),y.dispose()}}const od=r=>`${Math.floor(r/60).toString().padStart(2,"0")}:${Math.floor(r%60).toString().padStart(2,"0")}`;function Kw({lang:r="en"}){const e=r==="zh",i=(X,he)=>e?X:he,[s,l]=be.useState(!1),[c,f]=be.useState("idle"),[h,m]=be.useState(0),[p,_]=be.useState(0),[g,y]=be.useState("1080"),[x,b]=be.useState(0),[T,S]=be.useState(""),[v,N]=be.useState(null),[L,A]=be.useState(!1),P=be.useRef(null),O=be.useRef(null),B=be.useRef(!0),G=be.useRef(null),R=be.useRef([]),D=be.useRef(!1),H=!!globalThis.navigator?.mediaDevices?.getDisplayMedia&&typeof MediaRecorder<"u",Q=H?qw(X=>MediaRecorder.isTypeSupported(X)):"",oe=c==="recording"||c==="paused",ce=c!=="idle";be.useEffect(()=>(B.current=!0,()=>{B.current=!1,G.current?.abort(),O.current?.stop(),O.current?.stream.getTracks().forEach(X=>X.stop()),R.current.forEach(X=>URL.revokeObjectURL(X))}),[]),be.useEffect(()=>{if(!s)return;const X=pe=>{P.current?.contains(pe.target)||l(!1)},he=pe=>{pe.key==="Escape"&&l(!1)};return document.addEventListener("pointerdown",X),document.addEventListener("keydown",he),()=>{document.removeEventListener("pointerdown",X),document.removeEventListener("keydown",he)}},[s]),be.useEffect(()=>{if(!oe)return;const X=setInterval(()=>{const he=O.current;he&&(m(he.duration()/1e3),he.duration()>=Ww&&he.stop("limit"))},200);return()=>clearInterval(X)},[oe]),be.useEffect(()=>{if(!ce&&(!v||L))return;const X=he=>{he.preventDefault(),he.returnValue=""};return window.addEventListener("beforeunload",X),()=>window.removeEventListener("beforeunload",X)},[ce,v,L]);function fe(X){R.current.forEach(pe=>URL.revokeObjectURL(pe)),R.current=[];const he=URL.createObjectURL(X.blob||X.rawBlob);R.current.push(he),N({...X,url:he}),A(!1)}async function F(X){const he=new AbortController;G.current=he,f("converting"),b(0);try{const pe=await Zw(X.rawBlob||X.blob,{signal:he.signal,onProgress:Ie=>{B.current&&b(Math.round(Ie*100))}});if(!B.current)return;fe({blob:pe,duration:X.duration,filename:Mv("video/mp4")}),(X.reason==="limit"||X.reason==="encoder")&&S(X.reason)}catch(pe){if(!B.current)return;fe({rawBlob:X.rawBlob||X.blob,duration:X.duration}),S(pe?.name==="AbortError"?"conversion-canceled":"conversion")}finally{G.current=null,B.current&&(f("idle"),l(!0))}}async function $(){if(ce||D.current||!H||!Q)return;D.current=!0,f("choosing"),S(""),b(0);let X;try{const he=g==="1080";if(X=await navigator.mediaDevices.getDisplayMedia({video:{width:{max:he?1920:1280},height:{max:he?1080:720},frameRate:{max:30}},audio:!1,preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"exclude"}),!B.current){X.getTracks().forEach(je=>je.stop());return}const pe=new Yw(X,Q,he?5e6:25e5,()=>{B.current&&(_(pe.bytes),f(["stopping","stopped"].includes(pe.state)?"finalizing":pe.state))});O.current=pe,pe.start(),m(0),_(0),l(!1);const Ie=await pe.done;if(!B.current)return;m(Ie.duration/1e3),await F(Ie)}catch(he){X?.getTracks().forEach(pe=>pe.stop()),B.current&&(S(["NotAllowedError","AbortError"].includes(he?.name)?"permission":"capture"),f("idle"),l(!0))}finally{D.current=!1}}function K(X=!1){const he=X?v?.rawBlob:v?.blob;if(!he)return;const pe=document.createElement("a");pe.href=v.url,pe.download=Mv(he.type),document.body.appendChild(pe),pe.click(),pe.remove(),A(!0)}function Me(){c==="paused"?O.current?.resume():O.current?.pause()}const z={permission:i("未获得画面共享许可，请重试。","Screen sharing was not allowed. Please try again."),capture:i("录制未完成，请重试。","Recording could not complete. Please try again."),conversion:i("MP4 转换失败，可重试或下载原始 WebM。","MP4 conversion failed. Retry or download the original WebM."),"conversion-canceled":i("已取消转换，原始片段已保留。","Conversion canceled. Original clip retained."),limit:i("已达到单次 10 分钟或 200 MB 上限，录制已结束。","Recording ended at the 10-minute or 200 MB limit."),encoder:i("编码曾中断，已保留收到的视频片段。请预览后保存。","Encoding was interrupted. Received footage is preserved; preview it before saving.")};return M.jsxs("div",{className:"studio-recorder",ref:P,children:[M.jsxs("button",{className:`record-trigger ${oe?"record-active":""}`,onClick:()=>l(X=>!X),"aria-expanded":s,"aria-controls":"studio-record-panel",title:i("录制整个演示界面","Record the full demo interface"),children:[oe?M.jsx("i",{className:c==="paused"?"paused":""}):M.jsx(tM,{size:16}),M.jsx("span",{children:oe?od(h):i("录屏","Record")}),!oe&&ce&&M.jsx(lp,{className:"spin",size:12})]}),oe&&M.jsxs("div",{className:"record-inline-controls",children:[M.jsx("button",{onClick:Me,title:c==="paused"?i("继续录制","Resume recording"):i("暂停录制","Pause recording"),"aria-label":c==="paused"?i("继续录制","Resume recording"):i("暂停录制","Pause recording"),children:c==="paused"?M.jsx(tl,{size:14}):M.jsx(hd,{size:14})}),M.jsx("button",{onClick:()=>O.current?.stop(),className:"record-stop",title:i("结束录制","Stop recording"),"aria-label":i("结束录制","Stop recording"),children:M.jsx(dd,{size:13})})]}),s&&M.jsxs("section",{id:"studio-record-panel",className:"record-panel","aria-label":i("界面录屏","Screen recording"),children:[M.jsxs("div",{className:"record-panel-heading",children:[M.jsx("h2",{children:i("界面录屏","Screen recording")}),M.jsx("button",{className:"icon-button",onClick:()=>l(!1),"aria-label":i("收起录屏面板","Close recording panel"),children:M.jsx(pd,{size:16})})]}),M.jsx("p",{children:i("选择当前标签页，录制画面。","Choose this tab to record its screen.")}),M.jsxs("div",{className:"record-settings",children:[M.jsxs("label",{children:[i("画面质量","Quality"),M.jsxs("select",{disabled:ce,value:g,onChange:X=>y(X.target.value),children:[M.jsx("option",{value:"1080",children:"1080p · 30 FPS"}),M.jsx("option",{value:"720",children:"720p · 30 FPS"})]})]}),M.jsxs("span",{children:["MP4",M.jsx("small",{children:"≤ 30 FPS"})]})]}),(!H||!Q)&&M.jsx("p",{className:"record-notice",children:i("当前浏览器不支持屏幕录制，请用桌面 Chrome 或 Edge 打开此网址。","Screen recording is unavailable here. Open this URL in desktop Chrome or Edge.")}),M.jsxs("div",{className:"record-buttons",children:[oe?M.jsxs(M.Fragment,{children:[M.jsxs("button",{onClick:Me,children:[c==="paused"?M.jsx(tl,{size:14}):M.jsx(hd,{size:14}),c==="paused"?i("继续","Resume"):i("暂停","Pause")]}),M.jsxs("button",{className:"record-stop",onClick:()=>O.current?.stop(),children:[M.jsx(dd,{size:13}),i("结束录制","Stop recording")]})]}):M.jsxs("button",{className:"primary",disabled:ce||!H||!Q,onClick:$,children:[M.jsx(BS,{size:13}),c==="choosing"?i("等待选择画面…","Choose a screen…"):c==="finalizing"?i("正在整理视频…","Finalizing…"):c==="converting"?i(`正在生成 MP4 · ${x}%`,`Creating MP4 · ${x}%`):i("开始录制","Start recording")]}),c==="converting"&&M.jsx("button",{onClick:()=>G.current?.abort(),children:i("取消转换","Cancel conversion")})]}),oe&&M.jsxs("div",{className:"record-state",children:[M.jsxs("span",{children:[c==="paused"?i("已暂停","Paused"):"REC"," · ",od(h)]}),M.jsxs("span",{children:[(p/1048576).toFixed(1)," MB"]})]}),M.jsx("p",{className:"record-small",children:i("单段最多 10 分钟 / 200 MB。","Up to 10 minutes / 200 MB per clip.")}),!!T&&M.jsx("p",{role:"status",className:"record-notice",children:z[T]}),!!v&&!ce&&M.jsxs("div",{className:"record-result",children:[M.jsx("video",{src:v.url,controls:!0,playsInline:!0,preload:"metadata","aria-label":i("录屏预览","Recording preview")}),M.jsxs("div",{className:"record-result-meta",children:[M.jsx("span",{children:od(v.duration/1e3)}),M.jsxs("span",{children:[((v.blob||v.rawBlob).size/1048576).toFixed(1)," MB"]}),M.jsx("span",{children:v.blob?"MP4":"WebM"})]}),M.jsx("div",{className:"record-buttons",children:v.blob?M.jsxs("button",{className:"primary",onClick:()=>K(),children:[M.jsx(fd,{size:14}),i("保存 MP4","Save MP4")]}):M.jsxs(M.Fragment,{children:[M.jsxs("button",{onClick:()=>{S(""),F(v)},children:[M.jsx($c,{size:14}),i("重试 MP4 转换","Retry MP4")]}),M.jsxs("button",{onClick:()=>K(!0),children:[M.jsx(fd,{size:14}),i("原始 WebM","Original WebM")]})]})}),L&&M.jsx("p",{className:"record-saved",role:"status",children:i("已开始下载。","Download started.")})]})]})]})}const Qw=[{label:"IEEE",href:"https://ieeexplore.ieee.org/author/37089678912"},{label:"Google Scholar",href:"https://scholar.google.com/citations?user=NA8egm4AAAAJ&hl=en"},{label:"GitHub",href:"https://github.com/wilixx"}],bv="./wechat-academic.png",Jw="https://www.linkedin.com/in/binquan-guo-754078371/";function Tv(){return M.jsxs("svg",{className:"studio-wechat-icon",width:"20",height:"20",viewBox:"0 0 28 24","aria-hidden":"true",focusable:"false",children:[M.jsx("path",{fill:"currentColor",d:"M11 1C5.5 1 1 4.5 1 8.8c0 2.4 1.4 4.5 3.6 5.9l-.9 3.1 3.8-1.9c.8.2 1.7.4 2.6.5a7.5 7.5 0 0 1-.5-2.7c0-4.6 4.4-8.3 9.8-8.3h.6C18.4 2.8 15 1 11 1Zm-3.2 4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm6.5 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z"}),M.jsx("path",{fill:"currentColor",d:"M19.4 7C14.8 7 11 10 11 13.7s3.8 6.7 8.4 6.7c1.1 0 2.2-.2 3.2-.5l3.1 1.6-.7-2.7c1.8-1.2 2.8-3 2.8-5.1C27.8 10 24 7 19.4 7Zm-2.8 3.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm5.6 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"})]})}function mx({lang:r="en",compact:e=!1,idPrefix:i="studio"}){const s=r==="zh",l=e?"div":"section",c=`${i}-contact-dialog`,f=`${i}-contact-title`,h=be.useRef(null),m=be.useRef(null),p=be.useRef(null),_=be.useRef(null),g=be.useRef(!1),[y,x]=be.useState(!1),[b,T]=be.useState(!1);be.useEffect(()=>()=>window.clearTimeout(_.current),[]);const S=()=>{window.clearTimeout(_.current),h.current?.close()},v=()=>{if(!(!h.current?.open||y)){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return S();x(!0),_.current=window.setTimeout(S,240)}},N=()=>{!h.current||h.current.open||(window.clearTimeout(_.current),x(!1),g.current=!1,h.current.showModal(),T(!0),p.current?.focus({preventScroll:!0}))},L=O=>{const B=h.current.getBoundingClientRect();return O.clientX<B.left||O.clientX>B.right||O.clientY<B.top||O.clientY>B.bottom},A=()=>{window.clearTimeout(_.current),x(!1),T(!1),g.current=!1,m.current?.focus({preventScroll:!0})},P=M.jsxs("button",{className:`studio-contact-trigger${e?" is-compact":""}`,ref:m,type:"button",onClick:N,title:s?"微信":"WeChat","aria-label":s?"通过微信联系":"Connect on WeChat","aria-haspopup":"dialog","aria-controls":c,"aria-expanded":b,children:[M.jsx(Tv,{}),e&&M.jsx("span",{children:s?"微信":"WeChat"})]});return M.jsxs(l,{className:e?"studio-contact-compact":"studio-contact",...e?{}:{"aria-label":s?"学术主页与联系":"Academic profiles and contact"},children:[e?P:M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"studio-contact-name",children:[M.jsx("span",{children:"Binquan Guo"}),P]}),M.jsx("nav",{className:"studio-profile-links","aria-label":s?"学术主页":"Academic profiles",children:Qw.map(O=>M.jsxs("a",{href:O.href,target:"_blank",rel:"noopener noreferrer",children:[O.label==="GitHub"&&M.jsx(VS,{size:11,"aria-hidden":"true"}),O.label,M.jsx(ud,{size:10,"aria-hidden":"true"})]},O.label))}),M.jsxs("a",{className:"studio-contact-email",href:"mailto:bqguo@stu.xidian.edu.cn",children:[M.jsx(Dv,{size:11,"aria-hidden":"true"}),M.jsx("span",{children:"bqguo@stu.xidian.edu.cn"})]})]}),M.jsxs("dialog",{className:`studio-contact-dialog${y?" is-closing":""}`,id:c,ref:h,"aria-labelledby":f,onCancel:O=>{O.preventDefault(),v()},onClose:A,onPointerDown:O=>{g.current=O.target===h.current&&L(O)},onPointerCancel:()=>{g.current=!1},onClick:O=>{g.current&&O.target===h.current&&L(O)&&v(),g.current=!1},onAnimationEnd:O=>{O.target===h.current&&O.animationName==="studio-contact-out"&&S()},children:[M.jsx("button",{className:"studio-contact-close",ref:p,type:"button",onClick:v,"aria-label":s?"关闭联系方式":"Close contact dialog",children:"×"}),M.jsxs("h2",{id:f,children:[M.jsx(Tv,{}),M.jsx("span",{children:s?"微信":"WeChat"})]}),M.jsx("img",{className:"studio-contact-qr",src:bv,alt:s?"Binquan Guo 的微信联系二维码":"Binquan Guo's WeChat contact QR code",width:"410",height:"410",loading:"lazy",decoding:"async"}),M.jsxs("div",{className:"studio-contact-actions",children:[M.jsx("a",{href:bv,download:"binquan-guo-wechat.png",children:s?"保存二维码":"Save QR code"}),M.jsxs("a",{className:"studio-contact-linkedin",href:Jw,target:"_blank",rel:"noopener noreferrer","aria-label":s?"在新标签页打开 LinkedIn 主页":"Open LinkedIn profile in a new tab",children:["LinkedIn ",M.jsx(ud,{size:12,"aria-hidden":"true"})]})]})]})]})}function $w({targetRef:r,layoutKey:e,lang:i}){const s=be.useRef(null),[l,c]=be.useState({left:0,width:0,content:0,visible:!1});return be.useEffect(()=>{const f=r.current,h=s.current;if(!f||!h)return;const m=()=>{const y=f.getBoundingClientRect();c({left:y.left,width:y.width,content:f.scrollWidth,visible:f.scrollWidth>f.clientWidth+2}),Math.abs(h.scrollLeft-f.scrollLeft)>1&&(h.scrollLeft=f.scrollLeft)},p=()=>{Math.abs(h.scrollLeft-f.scrollLeft)>1&&(h.scrollLeft=f.scrollLeft)},_=()=>{Math.abs(f.scrollLeft-h.scrollLeft)>1&&(f.scrollLeft=h.scrollLeft)},g=new ResizeObserver(m);return g.observe(f),f.addEventListener("scroll",p,{passive:!0}),h.addEventListener("scroll",_,{passive:!0}),window.addEventListener("resize",m),m(),()=>{g.disconnect(),f.removeEventListener("scroll",p),h.removeEventListener("scroll",_),window.removeEventListener("resize",m)}},[r,e]),M.jsx("div",{ref:s,className:"comparison-scrollbar",tabIndex:l.visible?0:-1,role:"region","aria-label":i==="zh"?"左右滚动调度方法":"Scroll scheduling methods horizontally",title:i==="zh"?"拖动底部滚动条，对照不同方法":"Drag to compare scheduling methods",style:{left:l.left,width:l.width,visibility:l.visible?"visible":"hidden"},children:M.jsx("div",{style:{width:l.content,height:1}})})}const Av=["#5fc9ba","#73a7ff","#e1b969","#b298e9","#e48d9a","#73c2df","#b1c47a","#de9a6f"],rp=(r,e)=>Av[(e?Math.max(0,e.nodes.findIndex(i=>i.id===r)):Number(r))%Av.length],vn=(r,e=2)=>Number.isFinite(r)?Number(r).toFixed(e):"—";function eR(r,e=6){const i=Math.max(1e-4,r/e),s=10**Math.floor(Math.log10(i)),l=[1,2,5,10].find(c=>c*s>=i)*s;return Array.from({length:Math.floor(r/l)+1},(c,f)=>+(f*l).toFixed(6))}function tR({dag:r,result:e,time:i,maxTime:s,lang:l,onSeek:c}){const f=r.resources.servers+r.resources.channels,h=640,m=55,p=16,_=f*25+32,g=(h-m-p)/s,y=Math.min(i,e.completion_time),x=l==="zh",b=[...e.tasks.map(T=>({...T,row:T.resource,label:`T${T.id}`,col:rp(T.id,r)})),...e.flows.filter(T=>T.end>T.start).map(T=>({...T,row:r.resources.servers+T.resource,label:`${T.source}→${T.target}`,col:rp(T.target,r)}))];return M.jsxs("svg",{className:"gantt",viewBox:`0 0 ${h} ${_}`,role:"img","aria-label":x?"计算与网络甘特图，点击可定位时间":"Compute and network Gantt, click to seek",onClick:T=>{const S=T.currentTarget.getBoundingClientRect(),v=(T.clientX-S.left)/S.width*h;c?.(Math.max(0,Math.min(s,(v-m)/g)))},children:[Array.from({length:f},(T,S)=>M.jsxs("g",{children:[M.jsx("text",{x:"2",y:S*25+17,className:"axis-label",children:S<r.resources.servers?`VM${S+1}`:`CH${S-r.resources.servers+1}`}),M.jsx("rect",{x:m,y:S*25+3,width:e.completion_time*g,height:"20",rx:"2",fill:"#172c39"})]},S)),eR(s).map(T=>M.jsxs("g",{children:[M.jsx("line",{x1:m+T*g,x2:m+T*g,y1:"0",y2:_-22,stroke:"#2b3e4d",strokeDasharray:"2 4"}),M.jsx("text",{x:m+T*g,y:_-6,textAnchor:"middle",className:"axis-label",children:T})]},T)),b.map((T,S)=>M.jsxs("g",{children:[M.jsx("rect",{x:m+T.start*g,y:T.row*25+3,width:Math.max(.4,(T.end-T.start)*g),height:"20",rx:"3",fill:T.col,opacity:T.start>=y?.28:.92}),y>T.start&&y<T.end&&M.jsx("rect",{x:m+y*g,y:T.row*25+3,width:(T.end-y)*g,height:"20",fill:"#08131e",opacity:".6"}),(T.end-T.start)*g>19&&M.jsx("text",{x:m+(T.start+T.end)/2*g,y:T.row*25+17,textAnchor:"middle",className:"task-label",children:T.label}),M.jsxs("title",{children:[T.label," · ",vn(T.start),"–",vn(T.end)," tu"]})]},S)),M.jsx("line",{x1:m+y*g,x2:m+y*g,y1:"0",y2:_-23,stroke:"#f9d284",strokeWidth:"2"}),M.jsx("text",{x:h-1,y:_-6,textAnchor:"end",className:"axis-label",children:"tu"})]})}function nR({dag:r,result:e,config:i,time:s,maxTime:l,maxCarbon:c,lang:f}){const x=569/l,b=77/Math.max(c,1e-5),T=Array.from(new Set([0,e.completion_time,...e.tasks.flatMap(A=>[A.start,A.end])])).sort((A,P)=>A-P),S=Math.min(s,e.completion_time),v=[...T.filter(A=>A<S),S],N=[...T,l],L=A=>A.map((P,O)=>`${O?"L":"M"}${55+P*x},${86-Hs(r,e,i,P).totalG*b}`).join(" ");return M.jsxs("svg",{className:"carbon-curve",viewBox:"0 0 640 111",role:"img","aria-label":f==="zh"?"累计碳排放随时间变化":"Cumulative operational carbon over time",children:[[0,.5,1].map(A=>M.jsxs("g",{children:[M.jsx("line",{x1:55,x2:624,y1:86-77*A,y2:86-77*A,stroke:"#20333f",strokeDasharray:"2 4"}),M.jsx("text",{x:47,y:86-77*A+4,textAnchor:"end",className:"axis-label",children:vn(c*A,2)})]},A)),M.jsx("path",{d:L(N),fill:"none",stroke:"#60dbc2",strokeWidth:"1.3",opacity:".2",strokeDasharray:"4 4"}),M.jsx("path",{d:`${L(v)} L${55+S*x},86 L55,86 Z`,fill:"#58cfb5",opacity:".08"}),M.jsx("path",{d:L(v),fill:"none",stroke:"#66e3c4",strokeWidth:"2.5"}),M.jsx("line",{x1:55+S*x,x2:55+S*x,y1:9,y2:86,stroke:"#f9d284",strokeDasharray:"3 3"}),M.jsx("circle",{cx:55+S*x,cy:86-Hs(r,e,i,S).totalG*b,r:"3.5",fill:"#b9ffeb"}),M.jsx("text",{x:55,y:"105",className:"axis-label",children:"0"}),M.jsxs("text",{x:624,y:"105",textAnchor:"end",className:"axis-label",children:[vn(l,1)," tu"]})]})}function iR({ledger:r,config:e,lang:i}){const s=e.pue*e.ci/36e5,l=r.servers.reduce((_,g)=>_+(g.busySeconds+g.idleSeconds)*e.idleW*s,0),c=r.servers.reduce((_,g)=>_+g.busySeconds*(e.busyW-e.idleW)*s,0),f=r.network.carbonG,h=Math.max(r.totalG,1e-12),m=i==="zh",p=[[m?"计算增量":"Compute",c,"#67d8c1"],[m?"VM 基础功耗":"VM baseline",l,"#749fdb"],[m?"网络预留":"Network",f,"#c4a2e9"]];return M.jsxs("div",{className:"breakdown",children:[M.jsx("div",{className:"stacked-bar",children:p.map(([_,g,y])=>M.jsx("span",{style:{width:`${g/h*100}%`,background:y},title:`${_}: ${vn(g,4)} gCO₂e`},_))}),M.jsx("div",{className:"breakdown-values",children:p.map(([_,g,y])=>M.jsxs("span",{children:[M.jsx("i",{style:{background:y}}),_,M.jsx("b",{children:vn(g,3)})]},_))})]})}const aR=[["demo","Presentation example","演示样例"],["mapreduce","MapReduce","映射与汇聚"],["forkjoin","Fork–join","并行与汇合"],["layered","Layered workflow","分层工作流"],["diamond","Diamond","菱形依赖"],["pipeline","Pipeline","串行流水线"],["tree","Tree","树状任务"],["random","Random DAG","随机 DAG"],["independent","Independent batch","独立任务批次"]],Ir=Object.fromEntries(ux.map(({id:r,en:e,zh:i,color:s})=>[r,[e,i,s]])),Zi=ux.map(({id:r})=>r),ld={...cl,servers:3,channels:2,idleW:70,busyW:320,networkW:25,pue:1.2,ci:400,tuSeconds:1,seed:12,milpTimeLimit:5},cd=r=>JSON.parse(JSON.stringify(r));function Fi({label:r,value:e,onChange:i,min:s,max:l,step:c=1,suffix:f}){return M.jsxs("label",{className:"field",children:[M.jsx("span",{children:r}),M.jsxs("div",{children:[M.jsx("input",{type:"number",value:e,min:s,max:l,step:c,onChange:h=>i(h.target.value===""?"":Number(h.target.value))}),f&&M.jsx("small",{children:f})]})]})}function Ea({label:r,children:e,...i}){return M.jsx("button",{className:"icon-button",title:r,"aria-label":r,...i,children:e})}function sR({id:r,dag:e,result:i,config:s,time:l,playing:c,maxTime:f,maxCarbon:h,lang:m,showAssignments:p,smoke:_,resetKey:g,onSeek:y}){const x=m==="zh",b=Ir[r],T=i?Hs(e,i,s,l):null,S=T?.finished,v=i?.status,N=i?Hs(e,i,s,i.completion_time):null,[L,A]=be.useState(null),P=L?.type==="task"?i?.tasks.find(O=>O.id===L.id):null;return M.jsxs("article",{className:`method-card ${S?"is-complete":""}`,style:{"--method":b[2]},"aria-label":b[x?1:0],children:[M.jsxs("header",{className:"method-card-head",children:[M.jsxs("div",{children:[M.jsx("i",{className:"method-dot"}),M.jsx("h2",{children:b[x?1:0]})]}),M.jsx("span",{className:`status ${S?"done":""}`,children:i?S?M.jsxs(M.Fragment,{children:[M.jsx(ru,{size:11}),x?"作业完成":"Completed"]}):l>0?M.jsxs(M.Fragment,{children:[M.jsx(zS,{size:11}),x?"执行中":"Executing"]}):x?"就绪":"Ready":x?"等待调度":"Pending"})]}),i?M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"card-metrics",children:[M.jsxs("div",{className:"carbon-total",children:[M.jsx("span",{children:x?"累计碳排放":"Cumulative carbon"}),M.jsxs("strong",{children:[vn(T.totalG,3),M.jsx("small",{children:"gCO₂e"})]})]}),M.jsxs("div",{className:"schedule-time",children:[M.jsx("span",{children:x?"作业完成时间":"Job completion time"}),M.jsxs("strong",{children:[vn(i.completion_time,1),M.jsx("small",{children:"tu"})]})]})]}),M.jsxs("div",{className:"method-subline",children:[M.jsxs("span",{children:[x?"最终":"Final"," ",vn(N.totalG,3)," gCO₂e"]}),M.jsxs("span",{children:[x?"算法运行":"Algorithm"," ",vn(i.runtime_ms,1)," ms"]})]}),M.jsx("div",{className:"certificate",children:v==="imported"?x?"导入方案 · 可行":"Imported · feasible":r==="milp"?v==="optimal"?x?"最优已证明":"Certified optimal":v==="fallback"?x?"启发式回退":"Heuristic fallback":x?"限时可行方案":"Time-limited · feasible":x?"启发式调度":"Heuristic schedule"}),M.jsx(Gw,{dag:e,result:i,config:s,time:l,playing:c,lang:m,showAssignments:p,smoke:_,resetKey:g,comparisonEndTime:f,onSelect:A}),M.jsxs("div",{className:"scene-readout",children:[L?.type==="server"?M.jsxs("span",{children:["VM",L.resource+1," · ",vn(T.servers[L.resource]?.powerW,0)," W · ",vn(T.servers[L.resource]?.carbonG,4)," gCO₂e"]}):P?M.jsxs("span",{children:["LLM T",P.id," · VM",P.resource+1," · ",vn(P.start,1),"–",vn(P.end,1)," tu"]}):M.jsx("span",{}),M.jsx("span",{children:S?x?"资源已释放":"Released":`${Math.min(l,i.completion_time).toFixed(1)} tu`})]}),M.jsxs("div",{className:"chart-section",children:[M.jsxs("div",{className:"chart-label",children:[M.jsx("span",{children:x?"计算 / 传输调度":"COMPUTE / TRANSFER SCHEDULE"}),M.jsx("small",{children:x?"点击甘特图定位":"Click to seek"})]}),M.jsx(tR,{dag:e,result:i,time:l,maxTime:f,lang:m,onSeek:y})]}),M.jsxs("div",{className:"chart-section carbon-chart",children:[M.jsxs("div",{className:"chart-label",children:[M.jsx("span",{children:x?"累计碳排放":"CUMULATIVE CARBON"}),M.jsx("small",{children:"gCO₂e"})]}),M.jsx(nR,{dag:e,result:i,config:s,time:l,maxTime:f,maxCarbon:h,lang:m}),M.jsx(iR,{ledger:T,config:s,lang:m})]})]}):M.jsxs("div",{className:"pending-card",children:[M.jsx(el,{size:42}),M.jsx("h3",{children:x?"等待该方法的调度方案":"Waiting for this schedule"}),M.jsx("p",{children:x?"选择方法后，点击“运行并播放”。":"Choose the method, then Run & play."})]})]})}function rR({previewLocked:r=!1,previewLanguage:e}){const[i,s]=be.useState(()=>{try{return localStorage.getItem("carelab-carbon-studio-lang")||"zh"}catch{return"zh"}}),l=i==="zh",c=(ee,Be)=>l?Be:ee,[f,h]=be.useState(ld),[m,p]=be.useState(()=>Jc()),[_,g]=be.useState("demo"),[y,x]=be.useState(()=>Jc().nodes.length),[b,T]=be.useState(Zi),[S,v]=be.useState(null),[N,L]=be.useState({}),[A,P]=be.useState(!1),[O,B]=be.useState(null),[G,R]=be.useState(""),[D,H]=be.useState(!1),[Q,oe]=be.useState(0),[ce,fe]=be.useState(0),[F,$]=be.useState(!1),[K,Me]=be.useState(1),[z,X]=be.useState(1),[he,pe]=be.useState(!0),[Ie,je]=be.useState(!1),[ae,xe]=be.useState(!0),[Oe,at]=be.useState(!0),[$e,xt]=be.useState(0),[Bt,k]=be.useState(null),[Pt,ft]=be.useState(!1),[rt,Ge]=be.useState(""),[kt,We]=be.useState(""),gt=be.useRef(null),Ft=be.useRef(null),en=be.useRef(0),I=be.useRef(null),C=be.useRef(0),te=be.useRef(!1),me=be.useRef({}),_e=be.useRef(null),de=be.useRef(null),Ue=S||{dag:zr(m,f),config:f},Le=Zi.flatMap(ee=>N[ee]?[N[ee]]:[]),Ke=Le.filter(ee=>b.includes(ee.method)),ke=Math.max(1,...Ke.map(ee=>ee.completion_time)),Re=Math.max(.01,...Ke.map(ee=>Hs(Ue.dag,ee,Ue.config,ee.completion_time).totalG)),Ne=Ke.length>0;be.useEffect(()=>{fe(ee=>Math.min(ee,ke))},[ke]),be.useEffect(()=>{document.documentElement.lang=l?"zh-CN":"en";try{localStorage.setItem("carelab-carbon-studio-lang",i)}catch{}},[i]),be.useEffect(()=>{r&&e&&s(e)},[r,e]),be.useEffect(()=>{const ee=()=>je(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",ee),()=>document.removeEventListener("fullscreenchange",ee)},[]),be.useEffect(()=>{if(!A)return;const ee=setInterval(()=>oe((performance.now()-C.current)/1e3),100);return()=>clearInterval(ee)},[A]),be.useEffect(()=>{if(!F||!Ne||A)return;let ee=performance.now(),Be=0,Qe;const De=Te=>{if(Be+=Math.min((Te-ee)/1e3,.25)*K,ee=Te,Be>=z){const tt=Math.floor(Be/z)*z;Be-=tt,fe(yt=>{const st=Math.min(ke,yt+tt);return st>=ke-1e-8&&$(!1),st})}Qe=requestAnimationFrame(De)};return Qe=requestAnimationFrame(De),()=>cancelAnimationFrame(Qe)},[F,K,z,ke,A,Ne]),be.useEffect(()=>(Ye(!1),()=>Ft.current?.terminate()),[]),be.useEffect(()=>{r||($(!1),fe(0))},[r]),be.useEffect(()=>{if(!(!r||!Ne||A)){if(matchMedia("(prefers-reduced-motion: reduce)").matches){fe(Math.min(8,ke));return}if(ce>=ke){const ee=setTimeout(()=>{fe(0),$(!0)},1800);return()=>clearTimeout(ee)}$(!0)}},[r,Ne,A,ce>=ke,ke]),be.useEffect(()=>{Bt?(de.current=document.activeElement,_e.current?.showModal()):_e.current?.open&&(_e.current.close(),de.current?.focus?.())},[!!Bt]);function qe(ee,Be){h(Qe=>({...Qe,[ee]:Be})),H(!0),$(!1)}function Ye(ee=!0,Be=m,Qe=f,De=b){try{const Te=zr(Be,Qe);R(""),P(!0),$(!1),H(!1),fe(0),L({}),me.current={},oe(0),v({dag:cd(Te),config:cd(Qe)}),C.current=performance.now(),te.current=ee,Ft.current?.terminate();const tt=++en.current,yt=new Worker(new URL(""+new URL("solver.worker-Dfg-S1nz.js",import.meta.url).href,import.meta.url),{type:"module"});Ft.current=yt;const st=[...Zi.filter(mt=>mt!=="milp"),...De.includes("milp")?["milp"]:[]];B({method:st[0],index:0,total:st.length}),yt.onmessage=({data:mt})=>{mt.id===tt&&(mt.type==="progress"&&B(mt),mt.type==="result"&&(me.current={...me.current,[mt.result.method]:mt.result},L({...me.current})),mt.type==="done"&&(P(!1),B(null),$(te.current&&Object.keys(me.current).length>0),yt.terminate(),Ft.current=null),mt.type==="error"&&(P(!1),$(!1),R(mt.message||mt.error||"Scheduling failed."),yt.terminate(),Ft.current=null))},yt.onerror=mt=>{P(!1),R(mt.message||c("The solver could not start.","调度器未能启动。")),yt.terminate(),Ft.current=null},yt.postMessage({id:tt,dag:Te,config:Qe,methods:st})}catch(Te){R(Te.message),P(!1)}}function ze(){Ft.current?.terminate(),Ft.current=null,en.current++,P(!1),$(!1),B(null),R(c("Stopped. Completed schedules remain available.","已停止求解，已完成的方法仍可查看。"))}function ht(){try{const ee=_==="demo"?Jc():hx(_,Number(y),Number(f.seed));p(ee),x(ee.nodes.length),H(!0),$(!1),R("")}catch(ee){R(ee.message)}}function Z(){const ee=Jc(),Be={...ld};p(ee),h(Be),x(ee.nodes.length),g("demo"),T(Zi),Ye(!0,ee,Be,Zi)}function we(ee){$(!1),fe(Math.max(0,Math.min(ke,ee)))}function Pe(){!Ne||A||(ce>=ke&&fe(0),$(ee=>!ee))}function Xe(){const ee={schema:"carelab-carbon-studio-v1",created:new Date().toISOString(),dag:Ue.dag,config:Ue.config,methods:Zi.filter(De=>b.includes(De)),results:Le},Be=URL.createObjectURL(new Blob([JSON.stringify(ee,null,2)],{type:"application/json"})),Qe=document.createElement("a");Qe.href=Be,Qe.download="carelab-carbon-workflow.json",Qe.click(),setTimeout(()=>URL.revokeObjectURL(Be),2e3)}async function Ce(ee){try{const Be=ee.target.files[0];if(!Be)return;if(Be.size>4e6)throw Error(c("Please use a JSON file smaller than 4 MB.","JSON 文件请小于 4 MB。"));const Qe=JSON.parse(await Be.text()),De=Qe.dag||Qe,Te={...ld,...De.resources,...De.seed===void 0?{}:{seed:De.seed},...Qe.config},tt=zr(De,Te);if(p(tt),h(Te),x(tt.nodes.length),H(!0),$(!1),R(""),Array.isArray(Qe.results)&&Qe.results.length){const yt={};for(const st of Qe.results)Zi.includes(st.method)&&(zw(tt,st),(!Number.isFinite(st.runtime_ms)||st.runtime_ms<0)&&(st.runtime_ms=0),yt[st.method]={...st,status:"imported"});v({dag:tt,config:Te}),L(yt),me.current=yt,fe(0),H(!1),Array.isArray(Qe.methods)&&T(Zi.filter(st=>Qe.methods.includes(st)))}}catch(Be){R(Be.message)}finally{ee.target.value=""}}function ye(){k(cd(m)),Ge(JSON.stringify(m,null,2)),We(""),ft(!1),$(!1)}function Ze(){try{const ee=zr(Pt?JSON.parse(rt):Bt,f);p(ee),x(ee.nodes.length),H(!0),k(null)}catch(ee){We(ee.message)}}const lt=Ue.config.pue*Ue.config.ci/36e5,It=Ue.dag.nodes.reduce((ee,Be)=>ee+Be.duration,0)*Ue.config.tuSeconds*(Ue.config.busyW-Ue.config.idleW),Rt=lt*It,Wn=lt*(Ue.config.servers*Ue.config.idleW+Ue.config.networkW)*Ue.config.tuSeconds,ln=Zi.filter(ee=>b.includes(ee));return M.jsxs("div",{className:`app-shell ${he?"":"sidebar-hidden"} ${Ie?"is-fullscreen":""}`,children:[M.jsxs("header",{className:"topbar",children:[M.jsxs("div",{className:"brand-area",children:[M.jsxs("a",{className:"home-return",href:"https://wilixx.github.io/","aria-label":c("Return to homepage","返回主页"),title:c("Return to homepage","返回主页"),children:[M.jsx(Cv,{size:16}),M.jsx("span",{children:c("Home","主页")})]}),M.jsxs("div",{className:"brand","aria-label":"CARELab Carbon Studio",children:[M.jsx("span",{className:"brand-symbol",children:M.jsx(el,{size:26})}),M.jsxs("span",{children:[M.jsxs("b",{children:["CARELab ",M.jsx("em",{children:"CARBON STUDIO"})]}),M.jsx("small",{children:"MULTI-STEP LLM INFERENCE"})]})]})]}),M.jsxs("div",{className:"top-actions",children:[M.jsx(Kw,{lang:i}),M.jsx("button",{onClick:()=>s(l?"en":"zh"),className:"language-button",children:l?"EN":"中文"}),M.jsx(Ea,{label:c("Toggle full screen","切换全屏"),onClick:async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{je(ee=>!ee)}},children:Ie?M.jsx(qS,{size:17}):M.jsx(WS,{size:17})})]})]}),M.jsxs("aside",{className:"sidebar",children:[M.jsxs("button",{className:"primary demo-button",onClick:Z,disabled:A,children:[M.jsx(tl,{size:16}),c("One-click demonstration","一键演示"),M.jsx("span",{children:"DAG"})]}),M.jsxs("div",{className:"sidebar-section",children:[M.jsxs("h2",{children:[M.jsx(kS,{size:15}),c("Inference workflow","推理工作流")]}),M.jsxs("label",{className:"select-field",children:[M.jsx("span",{children:c("Application structure","应用结构")}),M.jsx("select",{value:_,onChange:ee=>g(ee.target.value),children:aR.map(([ee,Be,Qe])=>M.jsx("option",{value:ee,children:l?Qe:Be},ee))})]}),M.jsxs("div",{className:"field-pair",children:[M.jsx(Fi,{label:c("Tasks","任务数"),value:y,onChange:x,min:2,max:24}),M.jsx(Fi,{label:c("Seed","随机种子"),value:f.seed,onChange:ee=>qe("seed",ee),min:0,max:999999})]}),M.jsxs("div",{className:"button-pair",children:[M.jsxs("button",{onClick:ht,disabled:A,children:[M.jsx($c,{size:13}),c("Generate","生成")]}),M.jsxs("button",{onClick:ye,disabled:A,children:[M.jsx(FS,{size:13}),c("Edit DAG","编辑 DAG")]})]}),M.jsxs("p",{className:"sidebar-hint",children:[m.nodes.length," ",c("tasks","个计算任务")," · ",m.edges.length," ",c("dependencies","条依赖")]})]}),M.jsxs("div",{className:"sidebar-section",children:[M.jsxs("h2",{children:[M.jsx(el,{size:15}),c("Reserved resources","预留资源")]}),M.jsx(Fi,{label:c("Execution VMs","执行 VM 数量"),value:f.servers,onChange:ee=>qe("servers",ee),min:1,max:8}),M.jsx(Fi,{label:c("Network channels","网络通道数量"),value:f.channels,onChange:ee=>qe("channels",ee),min:1,max:4}),M.jsx(Fi,{label:c("Time unit","仿真时间单位"),value:f.tuSeconds,onChange:ee=>qe("tuSeconds",ee),min:.01,max:3600,step:.1,suffix:"s / tu"})]}),M.jsxs("details",{className:"sidebar-section",open:!0,children:[M.jsxs("summary",{children:[M.jsx(c_,{size:15}),c("Power & carbon","功率与碳核算")]}),M.jsx(Fi,{label:c("Idle VM","VM 空闲功率"),value:f.idleW,onChange:ee=>qe("idleW",ee),min:0,max:2e3,suffix:"W"}),M.jsx(Fi,{label:c("Busy VM · total","VM 计算功率 · 总值"),value:f.busyW,onChange:ee=>qe("busyW",ee),min:0,max:5e3,suffix:"W"}),M.jsx(Fi,{label:c("Reserved network","网络预留功率"),value:f.networkW,onChange:ee=>qe("networkW",ee),min:0,max:5e3,suffix:"W"}),M.jsxs("div",{className:"field-pair",children:[M.jsx(Fi,{label:"PUE",value:f.pue,onChange:ee=>qe("pue",ee),min:1,max:3,step:.05}),M.jsx(Fi,{label:c("Grid intensity","电网碳强度"),value:f.ci,onChange:ee=>qe("ci",ee),min:0,max:2e3})]}),M.jsx("p",{className:"sidebar-hint",children:"CI: gCO₂e/kWh"})]}),M.jsxs("details",{className:"sidebar-section advanced",children:[M.jsxs("summary",{children:[M.jsx($S,{size:15}),c("Solver & playback","求解与播放设置")]}),M.jsx(Fi,{label:c("MILP time limit","MILP 求解时限"),value:f.milpTimeLimit,onChange:ee=>qe("milpTimeLimit",ee),min:1,max:30,suffix:"s"}),M.jsxs("label",{className:"select-field",children:[M.jsx("span",{children:c("Time step","时间步长")}),M.jsx("select",{value:z,onChange:ee=>X(Number(ee.target.value)),children:[.25,.5,1,2].map(ee=>M.jsxs("option",{value:ee,children:[ee," tu"]},ee))})]}),M.jsxs("label",{className:"check-row",children:[M.jsx("input",{type:"checkbox",checked:Oe,onChange:ee=>at(ee.target.checked)}),c("Task-to-VM assignment lines","显示任务与 VM 的分配线")]}),M.jsxs("label",{className:"check-row",children:[M.jsx("input",{type:"checkbox",checked:ae,onChange:ee=>xe(ee.target.checked)}),c("Activity plumes","计算与传输烟雾动画")]})]}),M.jsxs("div",{className:"sidebar-bottom",children:[M.jsxs("button",{className:"primary run-button",onClick:()=>Ye(!0),disabled:A||!b.length,children:[A?M.jsx(lp,{className:"spin",size:16}):M.jsx(tl,{size:16})," ",c("Run & play","运行并播放")]}),M.jsxs("div",{className:"button-pair",children:[M.jsxs("button",{onClick:()=>I.current?.click(),disabled:A,children:[M.jsx(eM,{size:13}),c("Import","导入")]}),M.jsxs("button",{onClick:Xe,disabled:!Ne,children:[M.jsx(fd,{size:13}),c("Export","导出")]})]}),M.jsx("input",{ref:I,type:"file",accept:".json,application/json",hidden:!0,onChange:Ce}),M.jsx(mx,{lang:i})]})]}),M.jsxs("main",{className:"workspace",children:[M.jsxs("div",{className:"workspace-heading",children:[M.jsxs("div",{className:"workspace-title",children:[M.jsx(Ea,{label:c("Toggle configuration panel","显示或隐藏配置"),onClick:()=>pe(ee=>!ee),children:he?M.jsx(YS,{size:17}):M.jsx(ZS,{size:17})}),M.jsx("div",{children:M.jsx("h1",{children:c("Workflow comparison","工作流调度比较")})})]}),M.jsxs("div",{className:"model-chip",children:[M.jsx(c_,{size:15}),M.jsx("span",{children:"C = A + B · T"})]})]}),M.jsx("div",{className:"method-selection",role:"group","aria-label":c("Visible scheduling methods","显示的调度方法"),children:Zi.map(ee=>M.jsxs("label",{className:b.includes(ee)?"selected":"",style:{"--method":Ir[ee][2]},children:[M.jsx("input",{type:"checkbox",checked:b.includes(ee),onChange:Be=>T(Qe=>Be.target.checked?[...Qe,ee]:Qe.filter(De=>De!==ee))}),M.jsx("i",{}),Ir[ee][l?1:0]]},ee))}),G&&M.jsxs("div",{className:"alert",role:"alert",children:[M.jsx(jS,{size:16}),M.jsx("span",{children:G}),M.jsx("button",{onClick:()=>R(""),"aria-label":c("Dismiss","关闭提示"),children:M.jsx(pd,{size:14})})]}),D&&M.jsxs("div",{className:"notice",children:[M.jsx(KS,{size:14}),c("Configuration changed. Run again to apply.","配置已修改，请重新运行。")]}),M.jsxs("section",{className:"playback","aria-label":c("Simulation controls","仿真播放控制"),children:[M.jsxs("div",{className:"transport",children:[M.jsx("button",{className:"play",onClick:Pe,disabled:!Ne||A,title:F?c("Pause","暂停"):c("Play","播放"),"aria-label":F?c("Pause","暂停"):c("Play","播放"),children:F?M.jsx(hd,{size:21}):M.jsx(tl,{size:21})}),M.jsx(Ea,{label:c("Restart replay","从头回放"),onClick:()=>{fe(0),$(!1)},disabled:!Ne,children:M.jsx($c,{size:16})}),M.jsx(Ea,{label:c("Previous time step","上一个时间步"),onClick:()=>we(ce-z),disabled:!Ne||A,children:M.jsx(QS,{size:16})}),M.jsx(Ea,{label:c("Next time step","下一个时间步"),onClick:()=>we(ce+z),disabled:!Ne||A,children:M.jsx(JS,{size:16})}),M.jsxs("div",{className:"clock",children:[M.jsx("strong",{children:vn(ce,2)}),M.jsxs("span",{children:["/ ",vn(ke,1)," tu"]})]})]}),M.jsxs("div",{className:"time-track",children:[M.jsx("input",{type:"range","aria-label":c("Simulation time","仿真时间"),min:"0",max:ke,step:"0.25",value:ce,onChange:ee=>we(Number(ee.target.value)),disabled:!Ne||A}),M.jsxs("div",{children:[M.jsx("span",{children:A?`${c("Scheduling","正在调度")} ${O?.method?Ir[O.method]?.[l?1:0]||O.method:""} · ${vn(Q,1)} s`:F?c("Synchronized playback","同步播放中"):ce>=ke?c("All jobs completed","全部作业完成"):c("Paused","已暂停")}),M.jsxs("span",{children:["1 tu = ",Ue.config.tuSeconds," s"]})]})]}),M.jsxs("div",{className:"playback-options",children:[M.jsxs("label",{children:[c("Speed","速度"),M.jsx("select",{"aria-label":c("Playback speed","播放速度"),value:K,onChange:ee=>Me(Number(ee.target.value)),children:[.25,.5,1,2,4,8].map(ee=>M.jsxs("option",{value:ee,children:[ee,"×"]},ee))})]}),A?M.jsxs("button",{onClick:ze,children:[M.jsx(dd,{size:13}),c("Stop solver","停止求解")]}):M.jsxs("button",{onClick:()=>we(ke),disabled:!Ne,children:[c("Final state","查看最终"),M.jsx(bh,{size:13})]}),M.jsx(Ea,{label:c("Reset all cameras","重置全部视角"),onClick:()=>xt(ee=>ee+1),children:M.jsx($c,{size:15})})]})]}),M.jsxs("div",{className:"arena-meta",children:[M.jsxs("div",{children:[M.jsx("span",{className:"live-dot"}),Ue.dag.nodes.length," ",c("tasks","个任务"),M.jsx("span",{children:"·"}),Ue.config.servers," VM",M.jsx("span",{children:"·"}),Ue.config.channels," ",c("shared channels","条共享通道")]}),M.jsxs("span",{children:[c("Drag panels sideways to compare more methods","横向滚动可对照更多方法"),M.jsx(bh,{size:12})]})]}),M.jsx("section",{ref:gt,className:"arena","aria-label":c("3D scheduling comparison","3D 调度对比"),style:{"--card-count":ln.length},children:ln.length?ln.map(ee=>M.jsx(sR,{id:ee,dag:Ue.dag,result:N[ee],config:Ue.config,time:ce,playing:F,maxTime:ke,maxCarbon:Re,lang:i,showAssignments:Oe,smoke:ae,resetKey:$e,onSeek:we},ee)):M.jsxs("div",{className:"empty-state",children:[M.jsx(el,{size:40}),M.jsx("p",{children:c("Select at least one method above.","请在上方勾选至少一种方法。")})]})}),M.jsxs("div",{className:"activity-legend",children:[M.jsxs("span",{children:[M.jsx("i",{className:"key busy"}),c("Computing","计算中")]}),M.jsxs("span",{children:[M.jsx("i",{className:"key idle"}),c("Idle reservation","空闲但仍预留")]}),M.jsxs("span",{children:[M.jsx("i",{className:"key packet"}),c("Data transfer","数据传输")]}),M.jsxs("span",{children:[M.jsx("i",{className:"key released"}),c("Released after completion","完成后释放")]})]}),M.jsxs("section",{className:"outcomes",children:[M.jsx("div",{className:"section-heading",children:M.jsx("h2",{children:c("Complete schedule results","完整调度结果")})}),M.jsx("div",{className:"table-scroll",children:M.jsxs("table",{children:[M.jsx("thead",{children:M.jsxs("tr",{children:[M.jsx("th",{children:c("Method","方法")}),M.jsxs("th",{children:[c("Job completion","作业完成时间")," (tu)"]}),M.jsxs("th",{children:[c("Elapsed","执行时长")," (s)"]}),M.jsxs("th",{children:[c("Job carbon","总碳排放")," (gCO₂e)"]}),M.jsxs("th",{children:[c("Algorithm","算法运行时间")," (ms)"]}),M.jsx("th",{children:c("Status","求解状态")})]})}),M.jsx("tbody",{children:ln.filter(ee=>N[ee]).map(ee=>{const Be=N[ee],Qe=Hs(Ue.dag,Be,Ue.config,Be.completion_time).totalG;return M.jsxs("tr",{children:[M.jsxs("td",{children:[M.jsx("i",{style:{background:Ir[ee][2]}}),Ir[ee][l?1:0]]}),M.jsx("td",{children:vn(Be.completion_time,2)}),M.jsx("td",{children:vn(Be.completion_time*Ue.config.tuSeconds,2)}),M.jsx("td",{className:"carbon-cell",children:vn(Qe,4)}),M.jsx("td",{children:vn(Be.runtime_ms,2)}),M.jsx("td",{children:Be.status==="imported"?c("Imported, validated","导入 · 可行性已验证"):Be.status==="optimal"?c("Optimal","最优已证明"):Be.status==="fallback"?c("Heuristic fallback","启发式回退"):Be.status==="feasible"?c("Feasible, time-limited","限时可行"):c("Heuristic","启发式")})]},ee)})})]})})]}),M.jsxs("details",{className:"model-notes",children:[M.jsxs("summary",{children:[c("Carbon model","碳核算模型"),M.jsxs("span",{children:["C = ",vn(Rt,3)," + ",vn(Wn,4)," × T"]})]}),M.jsxs("div",{className:"model-content",children:[M.jsx("div",{className:"equation",children:"ΔC = PUE × CI × P(W) × Δt(s) / 3,600,000"}),M.jsx("p",{children:c("Operational energy includes VM idle power, computation and the reserved network until job completion. With fixed resources and power profiles, C = A + B · T; A is task-work carbon and B is reservation carbon per time unit.","运行能耗计入作业完成前的 VM 空闲功率、计算功率及网络预留功率。资源与功率配置固定时，C = A + B · T；A 为任务计算碳排放，B 为单位时间的资源预留碳排放。")}),M.jsxs("div",{className:"source-links",children:[M.jsx("a",{href:"https://doi.org/10.1002/advs.202100707",target:"_blank",rel:"noreferrer",children:"Green Algorithms · Advanced Science (2021)"}),M.jsx("a",{href:"https://arxiv.org/html/2406.09645v1#S3.SS3.SSS1",target:"_blank",rel:"noreferrer",children:"Dedicated-machine allocation"}),M.jsx("a",{href:"https://sci.greensoftware.foundation/",target:"_blank",rel:"noreferrer",children:"Software Carbon Intensity"})]})]})]}),M.jsxs("footer",{className:"app-footer",children:["CARELab Carbon-aware Multi-step LLM Inference ",M.jsx("span",{children:M.jsx("a",{href:"./THIRD_PARTY_NOTICES.txt",target:"_blank",rel:"noreferrer",children:c("Open-source notices","开源组件说明")})})]})]}),M.jsx($w,{targetRef:gt,layoutKey:b.join(","),lang:i}),M.jsxs("dialog",{className:"dag-editor",ref:_e,onCancel:()=>k(null),children:[M.jsxs("div",{className:"dialog-heading",children:[M.jsx("div",{children:M.jsx("h2",{children:c("Edit your inference workflow","编辑推理工作流")})}),M.jsx(Ea,{label:c("Close editor","关闭编辑器"),onClick:()=>k(null),children:M.jsx(pd,{size:20})})]}),Bt&&M.jsxs(M.Fragment,{children:[M.jsxs("div",{className:"editor-tabs",children:[M.jsx("button",{className:Pt?"":"active",onClick:()=>{if(Pt)try{k(zr(JSON.parse(rt),f)),ft(!1),We("")}catch(ee){We(ee.message)}},children:c("Tasks & dependencies","任务与依赖")}),M.jsx("button",{className:Pt?"active":"",onClick:()=>{Ge(JSON.stringify(Bt,null,2)),ft(!0)},children:"JSON"})]}),Pt?M.jsx("textarea",{className:"json-editor",value:rt,spellCheck:"false","aria-label":"DAG JSON",onChange:ee=>Ge(ee.target.value)}):M.jsxs("div",{className:"visual-editor",children:[M.jsxs("div",{children:[M.jsx("h3",{children:c("LLM inference tasks","LLM 推理任务")}),Bt.nodes.map((ee,Be)=>M.jsxs("div",{className:"editor-row",children:[M.jsx("i",{style:{background:rp(ee.id,Bt)}}),M.jsxs("span",{children:["T",ee.id]}),M.jsx("input",{type:"number",min:"0.01",step:".5",value:ee.duration,"aria-label":`T${ee.id} ${c("duration","计算时间")}`,onChange:Qe=>k(De=>({...De,nodes:De.nodes.map((Te,tt)=>tt===Be?{...Te,duration:Number(Qe.target.value)}:Te)}))}),M.jsx("small",{children:"tu"}),M.jsx(Ea,{label:c(`Remove T${ee.id}`,`删除 T${ee.id}`),onClick:()=>k(Qe=>({...Qe,nodes:Qe.nodes.filter(De=>De.id!==ee.id),edges:Qe.edges.filter(De=>De.source!==ee.id&&De.target!==ee.id)})),children:M.jsx(f_,{size:13})})]},ee.id)),M.jsxs("button",{className:"text-button",onClick:()=>k(ee=>({...ee,nodes:[...ee.nodes,{id:Math.max(0,...ee.nodes.map(Be=>Number(Be.id)))+1,duration:3}]})),children:[M.jsx(u_,{size:14}),c("Add task","添加任务")]})]}),M.jsxs("div",{children:[M.jsx("h3",{children:c("Dependencies & transfers","依赖与传输")}),Bt.edges.map((ee,Be)=>M.jsxs("div",{className:"editor-row",children:[M.jsx("select",{"aria-label":c(`Edge ${Be+1} source`,`依赖 ${Be+1} 起点`),value:ee.source,onChange:Qe=>k(De=>({...De,edges:De.edges.map((Te,tt)=>tt===Be?{...Te,source:Number(Qe.target.value)}:Te)})),children:Bt.nodes.map(Qe=>M.jsxs("option",{value:Qe.id,children:["T",Qe.id]},Qe.id))}),M.jsx(bh,{size:13}),M.jsx("select",{"aria-label":c(`Edge ${Be+1} target`,`依赖 ${Be+1} 终点`),value:ee.target,onChange:Qe=>k(De=>({...De,edges:De.edges.map((Te,tt)=>tt===Be?{...Te,target:Number(Qe.target.value)}:Te)})),children:Bt.nodes.map(Qe=>M.jsxs("option",{value:Qe.id,children:["T",Qe.id]},Qe.id))}),M.jsx("input",{type:"number",min:"0",step:".5",value:ee.duration,"aria-label":c(`Edge ${Be+1} duration`,`依赖 ${Be+1} 传输时间`),onChange:Qe=>k(De=>({...De,edges:De.edges.map((Te,tt)=>tt===Be?{...Te,duration:Number(Qe.target.value)}:Te)}))}),M.jsx("small",{children:"tu"}),M.jsx(Ea,{label:c("Remove dependency","删除依赖"),onClick:()=>k(Qe=>({...Qe,edges:Qe.edges.filter((De,Te)=>Te!==Be)})),children:M.jsx(f_,{size:13})})]},Be)),M.jsxs("button",{className:"text-button",onClick:()=>k(ee=>({...ee,edges:[...ee.edges,{source:ee.nodes[0]?.id??0,target:ee.nodes.at(-1)?.id??1,duration:1}]})),children:[M.jsx(u_,{size:14}),c("Add dependency","添加依赖")]})]})]}),kt&&M.jsx("p",{className:"edit-error",role:"alert",children:kt}),M.jsx("div",{className:"dialog-actions",style:{justifyContent:"flex-end"},children:M.jsxs("button",{className:"primary",onClick:Ze,children:[M.jsx(ru,{size:15}),c("Apply workflow","应用工作流")]})})]})]})]})}const gx=Object.freeze({enabled:!0,version:1,algorithm:"PBKDF2",digest:"SHA-256",iterations:6e5,salt:"QLlJi47NDSlO2ALwLcmpp+k2CEOExMri",verifier:"DGfIgDofmqXKrrsQPH0Mup/bzco0u+iEN4N8Qzv2SLM="}),oR=6,_x=256;function lR(){if(!globalThis.crypto?.subtle||!globalThis.crypto?.getRandomValues)throw new Error("Password verification requires Web Crypto on HTTPS or localhost.");return globalThis.crypto}function cR(r){return btoa(String.fromCharCode(...r))}function wv(r,e){if(typeof r!="string"||!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r)||r.length>128)throw new Error(`Invalid access configuration: ${e}.`);const i=Uint8Array.from(atob(r),s=>s.charCodeAt(0));if(cR(i)!==r)throw new Error(`Invalid access configuration: ${e}.`);return i}function uR(r){return typeof r=="string"&&r.length>=oR&&r.length<=_x}function fR(r){if(!r||typeof r!="object"||typeof r.enabled!="boolean"||r.version!==1||r.algorithm!=="PBKDF2"||r.digest!=="SHA-256")throw new Error("Invalid access configuration: unsupported format.");if(!Number.isInteger(r.iterations)||r.iterations<1e5||r.iterations>2e6)throw new Error("Invalid access configuration: iteration count.");const e=wv(r.salt,"salt"),i=wv(r.verifier,"verifier");if(e.length<16||e.length>64||i.length!==32)throw new Error("Invalid access configuration: salt or verifier length.");return{salt:e,verifier:i}}async function hR(r,e,i){const s=lR(),l=new TextEncoder().encode(r);let c;try{c=await s.subtle.importKey("raw",l,"PBKDF2",!1,["deriveBits"])}finally{l.fill(0)}return new Uint8Array(await s.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:e,iterations:i},c,256))}async function dR(r,e=gx){const{salt:i,verifier:s}=fR(e);if(!uR(r))return!1;const l=await hR(r,i,e.iterations);let c=0;for(let f=0;f<s.length;f++)c|=l[f]^s[f];return l.fill(0),c===0}const pR="https://www.linkedin.com/in/binquan-guo-754078371/",mR="mailto:13468897661@163.com?subject=CARELab%20Carbon%20Studio%20%E2%80%94%20access%20request";function gR({children:r}){const[e,i]=be.useState(gx.enabled?"locked":"open"),[s,l]=be.useState(()=>{try{return localStorage.getItem("carelab-carbon-studio-lang")==="en"?"en":"zh"}catch{return"zh"}}),[c,f]=be.useState(""),[h,m]=be.useState(!1),[p,_]=be.useState(!1),[g,y]=be.useState(""),[x,b]=be.useState(0),T=be.useRef(null),S=be.useRef(null),v=be.useRef(null),N=be.useRef(0),L=be.useRef(0),A=be.useRef(!1),P=be.useRef(!0),O=e!=="open",B=s==="zh",G=(D,H)=>B?H:D;be.useLayoutEffect(()=>{!O||!T.current||(T.current.open||T.current.showModal(),S.current?.focus({preventScroll:!0}))},[O]),be.useEffect(()=>(P.current=!0,()=>{P.current=!1}),[]),be.useEffect(()=>{if(!x)return;const D=setInterval(()=>b(Math.max(0,Math.ceil((L.current-Date.now())/1e3))),250);return()=>clearInterval(D)},[x>0]),be.useEffect(()=>{if(e!=="opening")return;const D=matchMedia("(prefers-reduced-motion: reduce)").matches?80:850,H=setTimeout(()=>{T.current?.close(),i("open"),requestAnimationFrame(()=>document.querySelector(".home-return")?.focus({preventScroll:!0}))},D);return()=>clearTimeout(H)},[e]);async function R(D){if(D.preventDefault(),!(A.current||e!=="locked"||L.current>Date.now())){if(!c){y("empty"),v.current?.focus();return}A.current=!0,_(!0),y("");try{const H=await dR(c);if(!P.current)return;f(""),m(!1),H?(N.current=0,i("opening")):(N.current+=1,y("wrong"),N.current%5===0&&(L.current=Date.now()+8e3,b(8)),v.current?.focus())}catch{P.current&&(f(""),y("unavailable"))}finally{A.current=!1,P.current&&_(!1)}}}return M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"access-content",inert:O?!0:void 0,"aria-hidden":O?!0:void 0,children:TS.cloneElement(r,{previewLocked:O,previewLanguage:s})}),O&&M.jsxs("dialog",{ref:T,className:`access-gate ${e==="opening"?"is-opening":""}`,"aria-labelledby":"access-title",onCancel:D=>D.preventDefault(),children:[M.jsx("div",{className:"access-curtain access-curtain-left","aria-hidden":"true"}),M.jsx("div",{className:"access-curtain access-curtain-right","aria-hidden":"true"}),M.jsxs("div",{className:"access-panel",ref:S,tabIndex:-1,children:[M.jsxs("div",{className:"access-topline",children:[M.jsxs("span",{children:[M.jsx(el,{size:16,"aria-hidden":"true"})," CARELab"]}),M.jsx("button",{className:"access-language",type:"button",onClick:()=>l(B?"en":"zh"),"aria-label":B?"Switch to English":"切换为中文",children:B?"EN":"中文"})]}),M.jsx("div",{className:"access-lock","aria-hidden":"true",children:e==="opening"?M.jsx(ru,{size:23}):M.jsx(XS,{size:23})}),M.jsx("p",{className:"access-eyebrow",children:"CARBON STUDIO"}),M.jsx("h1",{id:"access-title",children:G("Multi-step LLM inference","多步 LLM 推理")}),M.jsxs("form",{onSubmit:R,className:"access-form",children:[M.jsx("label",{htmlFor:"access-password",children:G("Access password","访问密码")}),M.jsxs("div",{className:"access-input-wrap",children:[M.jsx("input",{id:"access-password",ref:v,type:h?"text":"password",value:c,onChange:D=>{f(D.target.value),y("")},autoComplete:"off",autoCapitalize:"none",spellCheck:!1,maxLength:_x,placeholder:G("Enter password","请输入密码"),"aria-describedby":"access-feedback","aria-invalid":g==="wrong",readOnly:p||e==="opening",disabled:x>0}),M.jsx("button",{type:"button",className:"access-eye",onClick:()=>m(D=>!D),"aria-label":h?G("Hide password","隐藏密码"):G("Show password","显示密码"),"aria-pressed":h,disabled:e==="opening",children:h?M.jsx(HS,{size:17}):M.jsx(GS,{size:17})})]}),M.jsxs("button",{className:"access-unlock",type:"submit",disabled:p||x>0||e==="opening",children:[p?M.jsx(lp,{className:"access-spinner",size:17}):e==="opening"?M.jsx(ru,{size:17}):M.jsx(IS,{size:17}),M.jsx("span",{children:p?G("Checking…","正在验证…"):e==="opening"?G("Welcome","欢迎体验"):x>0?G(`Try again in ${x}s`,`${x} 秒后可重试`):G("Enter studio","进入演示")})]}),M.jsx("p",{id:"access-feedback",className:"access-feedback",role:"status","aria-live":"polite",children:g==="wrong"?G("That password does not match. Please try again.","密码不正确，请重试。"):g==="empty"?G("Please enter your access password.","请输入访问密码。"):g==="unavailable"?G("Unable to verify. Please reload and try again.","暂时无法验证，请刷新后重试。"):" "})]}),M.jsx("div",{className:"access-divider",children:M.jsx("span",{children:G("Connect with Binquan Guo","与郭斌全交流")})}),M.jsxs("nav",{className:"access-contacts","aria-label":G("Contact and access","联系与访问"),children:[M.jsx(mx,{lang:s,compact:!0,idPrefix:"access"}),M.jsxs("a",{href:pR,target:"_blank",rel:"noopener noreferrer",children:["LinkedIn ",M.jsx(ud,{size:13})]}),M.jsxs("a",{href:mR,children:[M.jsx(Dv,{size:13}),G("Request access","申请访问")]})]}),M.jsxs("a",{className:"access-home",href:"https://wilixx.github.io/",children:[M.jsx(Cv,{size:13}),G("Back to homepage","返回个人主页")]})]})]})]})}LS.createRoot(document.getElementById("root")).render(M.jsx(gR,{children:M.jsx(rR,{})}));
