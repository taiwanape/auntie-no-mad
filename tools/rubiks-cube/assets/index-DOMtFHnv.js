var dM=Object.defineProperty;var Cv=s=>{throw TypeError(s)};var pM=(s,t,i)=>t in s?dM(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var Fr=(s,t,i)=>pM(s,typeof t!="symbol"?t+"":t,i),Qh=(s,t,i)=>t.has(s)||Cv("Cannot "+i);var lt=(s,t,i)=>(Qh(s,t,"read from private field"),i?i.call(s):t.get(s)),ln=(s,t,i)=>t.has(s)?Cv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,i),Qe=(s,t,i,r)=>(Qh(s,t,"write to private field"),r?r.call(s,i):t.set(s,i),i),Si=(s,t,i)=>(Qh(s,t,"access private method"),i);var Kh=(s,t,i,r)=>({set _(l){Qe(s,t,l,i)},get _(){return lt(s,t,r)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ox(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Jh={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function mM(){if(Uv)return xl;Uv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return xl.Fragment=t,xl.jsx=i,xl.jsxs=i,xl}var Dv;function gM(){return Dv||(Dv=1,Jh.exports=mM()),Jh.exports}var at=gM(),$h={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function _M(){if(Lv)return ce;Lv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function x(L,nt,Mt){this.props=L,this.context=nt,this.refs=S,this.updater=Mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=x.prototype;function N(L,nt,Mt){this.props=L,this.context=nt,this.refs=S,this.updater=Mt||E}var U=N.prototype=new z;U.constructor=N,A(U,x.prototype),U.isPureReactComponent=!0;var j=Array.isArray;function G(){}var O={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function C(L,nt,Mt){var Z=Mt.ref;return{$$typeof:s,type:L,key:nt,ref:Z!==void 0?Z:null,props:Mt}}function w(L,nt){return C(L.type,nt,L.props)}function F(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function ct(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Mt){return nt[Mt]})}var tt=/\/+/g;function vt(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?ct(""+L.key):nt.toString(36)}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,nt,Mt,Z,ft){var bt=typeof L;(bt==="undefined"||bt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(bt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case s:case t:St=!0;break;case g:return St=L._init,P(St(L._payload),nt,Mt,Z,ft)}}if(St)return ft=ft(L),St=Z===""?"."+vt(L,0):Z,j(ft)?(Mt="",St!=null&&(Mt=St.replace(tt,"$&/")+"/"),P(ft,nt,Mt,"",function(Rt){return Rt})):ft!=null&&(F(ft)&&(ft=w(ft,Mt+(ft.key==null||L&&L.key===ft.key?"":(""+ft.key).replace(tt,"$&/")+"/")+St)),nt.push(ft)),1;St=0;var Gt=Z===""?".":Z+":";if(j(L))for(var Ft=0;Ft<L.length;Ft++)Z=L[Ft],bt=Gt+vt(Z,Ft),St+=P(Z,nt,Mt,bt,ft);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(Z=L.next()).done;)Z=Z.value,bt=Gt+vt(Z,Ft++),St+=P(Z,nt,Mt,bt,ft);else if(bt==="object"){if(typeof L.then=="function")return P(mt(L),nt,Mt,Z,ft);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function Q(L,nt,Mt){if(L==null)return L;var Z=[],ft=0;return P(L,Z,"","",function(bt){return nt.call(Mt,bt,ft++)}),Z}function q(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(Mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Mt)},function(Mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Mt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var Et=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},At={map:Q,forEach:function(L,nt,Mt){Q(L,function(){nt.apply(this,arguments)},Mt)},count:function(L){var nt=0;return Q(L,function(){nt++}),nt},toArray:function(L){return Q(L,function(nt){return nt})||[]},only:function(L){if(!F(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ce.Activity=v,ce.Children=At,ce.Component=x,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(L){return O.H.useMemoCache(L)}},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(L,nt,Mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Z=A({},L.props),ft=L.key;if(nt!=null)for(bt in nt.key!==void 0&&(ft=""+nt.key),nt)!V.call(nt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&nt.ref===void 0||(Z[bt]=nt[bt]);var bt=arguments.length-2;if(bt===1)Z.children=Mt;else if(1<bt){for(var St=Array(bt),Gt=0;Gt<bt;Gt++)St[Gt]=arguments[Gt+2];Z.children=St}return C(L.type,ft,Z)},ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ce.createElement=function(L,nt,Mt){var Z,ft={},bt=null;if(nt!=null)for(Z in nt.key!==void 0&&(bt=""+nt.key),nt)V.call(nt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(ft[Z]=nt[Z]);var St=arguments.length-2;if(St===1)ft.children=Mt;else if(1<St){for(var Gt=Array(St),Ft=0;Ft<St;Ft++)Gt[Ft]=arguments[Ft+2];ft.children=Gt}if(L&&L.defaultProps)for(Z in St=L.defaultProps,St)ft[Z]===void 0&&(ft[Z]=St[Z]);return C(L,bt,ft)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=F,ce.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:q}},ce.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ce.startTransition=function(L){var nt=O.T,Mt={};O.T=Mt;try{var Z=L(),ft=O.S;ft!==null&&ft(Mt,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(G,Et)}catch(bt){Et(bt)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),O.T=nt}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(L){return O.H.use(L)},ce.useActionState=function(L,nt,Mt){return O.H.useActionState(L,nt,Mt)},ce.useCallback=function(L,nt){return O.H.useCallback(L,nt)},ce.useContext=function(L){return O.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,nt){return O.H.useDeferredValue(L,nt)},ce.useEffect=function(L,nt){return O.H.useEffect(L,nt)},ce.useEffectEvent=function(L){return O.H.useEffectEvent(L)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(L,nt,Mt){return O.H.useImperativeHandle(L,nt,Mt)},ce.useInsertionEffect=function(L,nt){return O.H.useInsertionEffect(L,nt)},ce.useLayoutEffect=function(L,nt){return O.H.useLayoutEffect(L,nt)},ce.useMemo=function(L,nt){return O.H.useMemo(L,nt)},ce.useOptimistic=function(L,nt){return O.H.useOptimistic(L,nt)},ce.useReducer=function(L,nt,Mt){return O.H.useReducer(L,nt,Mt)},ce.useRef=function(L){return O.H.useRef(L)},ce.useState=function(L){return O.H.useState(L)},ce.useSyncExternalStore=function(L,nt,Mt){return O.H.useSyncExternalStore(L,nt,Mt)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.2.7",ce}var Nv;function zp(){return Nv||(Nv=1,$h.exports=_M()),$h.exports}var le=zp();const vM=ox(le);var td={exports:{}},yl={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function xM(){return Ov||(Ov=1,(function(s){function t(P,Q){var q=P.length;P.push(Q);t:for(;0<q;){var Et=q-1>>>1,At=P[Et];if(0<l(At,Q))P[Et]=Q,P[q]=At,q=Et;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Q=P[0],q=P.pop();if(q!==Q){P[0]=q;t:for(var Et=0,At=P.length,L=At>>>1;Et<L;){var nt=2*(Et+1)-1,Mt=P[nt],Z=nt+1,ft=P[Z];if(0>l(Mt,q))Z<At&&0>l(ft,Mt)?(P[Et]=ft,P[Z]=q,Et=Z):(P[Et]=Mt,P[nt]=q,Et=nt);else if(Z<At&&0>l(ft,q))P[Et]=ft,P[Z]=q,Et=Z;else break t}}return Q}function l(P,Q){var q=P.sortIndex-Q.sortIndex;return q!==0?q:P.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,_=3,M=!1,E=!1,A=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=P)r(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function j(P){if(A=!1,U(P),!E)if(i(m)!==null)E=!0,G||(G=!0,ct());else{var Q=i(p);Q!==null&&mt(j,Q.startTime-P)}}var G=!1,O=-1,V=5,C=-1;function w(){return S?!0:!(s.unstable_now()-C<V)}function F(){if(S=!1,G){var P=s.unstable_now();C=P;var Q=!0;try{t:{E=!1,A&&(A=!1,z(O),O=-1),M=!0;var q=_;try{e:{for(U(P),v=i(m);v!==null&&!(v.expirationTime>P&&w());){var Et=v.callback;if(typeof Et=="function"){v.callback=null,_=v.priorityLevel;var At=Et(v.expirationTime<=P);if(P=s.unstable_now(),typeof At=="function"){v.callback=At,U(P),Q=!0;break e}v===i(m)&&r(m),U(P)}else r(m);v=i(m)}if(v!==null)Q=!0;else{var L=i(p);L!==null&&mt(j,L.startTime-P),Q=!1}}break t}finally{v=null,_=q,M=!1}Q=void 0}}finally{Q?ct():G=!1}}}var ct;if(typeof N=="function")ct=function(){N(F)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,vt=tt.port2;tt.port1.onmessage=F,ct=function(){vt.postMessage(null)}}else ct=function(){x(F,0)};function mt(P,Q){O=x(function(){P(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(P){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var q=_;_=Q;try{return P()}finally{_=q}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=_;_=P;try{return Q()}finally{_=q}},s.unstable_scheduleCallback=function(P,Q,q){var Et=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Et+q:Et):q=Et,P){case 1:var At=-1;break;case 2:At=250;break;case 5:At=1073741823;break;case 4:At=1e4;break;default:At=5e3}return At=q+At,P={id:g++,callback:Q,priorityLevel:P,startTime:q,expirationTime:At,sortIndex:-1},q>Et?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(A?(z(O),O=-1):A=!0,mt(j,q-Et))):(P.sortIndex=At,t(m,P),E||M||(E=!0,G||(G=!0,ct()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var Q=_;return function(){var q=_;_=Q;try{return P.apply(this,arguments)}finally{_=q}}}})(nd)),nd}var zv;function yM(){return zv||(zv=1,ed.exports=xM()),ed.exports}var id={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function SM(){if(Pv)return Pn;Pv=1;var s=zp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Pn.requestFormReset=function(m){r.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.7",Pn}var Iv;function MM(){if(Iv)return id.exports;Iv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),id.exports=SM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function EM(){if(Bv)return yl;Bv=1;var s=yM(),t=zp(),i=MM();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,o=f;break}if(T===o){y=!0,o=u,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,o=u;break}if(T===o){y=!0,o=f,a=u;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var mt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},Et=[],At=-1;function L(e){return{current:e}}function nt(e){0>At||(e.current=Et[At],Et[At]=null,At--)}function Mt(e,n){At++,Et[At]=e.current,e.current=n}var Z=L(null),ft=L(null),bt=L(null),St=L(null);function Gt(e,n){switch(Mt(bt,n),Mt(ft,e),Mt(Z,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?J_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=J_(n),e=$_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Z),Mt(Z,e)}function Ft(){nt(Z),nt(ft),nt(bt)}function Rt(e){e.memoizedState!==null&&Mt(St,e);var n=Z.current,a=$_(n,e.type);n!==a&&(Mt(ft,e),Mt(Z,a))}function Wt(e){ft.current===e&&(nt(Z),nt(ft)),St.current===e&&(nt(St),ml._currentValue=q)}var ee,Ce;function B(e){if(ee===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ee=n&&n[1]||"",Ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+e+Ce}var cn=!1;function me(e,n){if(!e||cn)return"";cn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var et=ot}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ot){et=ot}e.call(_t.prototype)}}else{try{throw Error()}catch(ot){et=ot}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var I=y.split(`
`),J=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===J.length)for(o=I.length-1,u=J.length-1;1<=o&&0<=u&&I[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==J[u]){var ht=`
`+I[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{cn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?B(a):""}function _e(e,n){switch(e.tag){case 26:case 27:case 5:return B(e.type);case 16:return B("Lazy");case 13:return e.child!==n&&n!==null?B("Suspense Fallback"):B("Suspense");case 19:return B("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return B("Activity");default:return""}}function Zt(e){try{var n="",a=null;do n+=_e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ue=Object.prototype.hasOwnProperty,Qt=s.unstable_scheduleCallback,D=s.unstable_cancelCallback,b=s.unstable_shouldYield,it=s.unstable_requestPaint,dt=s.unstable_now,Tt=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,Lt=s.unstable_NormalPriority,Ht=s.unstable_LowPriority,Se=s.unstable_IdlePriority,wt=s.log,Vt=s.unstable_setDisableYieldValue,Kt=null,jt=null;function Pt(e){if(typeof wt=="function"&&Vt(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Kt,e)}catch{}}var re=Math.clz32?Math.clz32:k,ue=Math.log,He=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(ue(e)/He|0)|0}var Ut=256,ut=262144,xt=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Dt(o):(y&=T,y!==0?u=Dt(y):a||(a=T&~e,a!==0&&(u=Dt(a))))):(T=o&~f,T!==0?u=Dt(T):y!==0?u=Dt(y):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function se(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ke(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gn(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Re(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ui(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,J=e.hiddenUpdates;for(a=y&~a;0<a;){var ht=31-re(a),_t=1<<ht;T[ht]=0,I[ht]=-1;var et=J[ht];if(et!==null)for(J[ht]=null,ht=0;ht<et.length;ht++){var ot=et[ht];ot!==null&&(ot.lane&=-536870913)}a&=~_t}o!==0&&wo(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function wo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-re(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Co(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-re(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Gi(e,n){var a=n&-n;return a=(a&42)!==0?1:xr(a),(a&(e.suspendedLanes|n))!==0?0:a}function xr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Uo(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Mv(e.type))}function yr(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var Di=Math.random().toString(36).slice(2),tn="__reactFiber$"+Di,wn="__reactProps$"+Di,na="__reactContainer$"+Di,Do="__reactEvents$"+Di,ku="__reactListeners$"+Di,Xu="__reactHandles$"+Di,Vl="__reactResources$"+Di,Sr="__reactMarker$"+Di;function R(e){delete e[tn],delete e[wn],delete e[Do],delete e[ku],delete e[Xu]}function X(e){var n=e[tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[na]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=sv(e);e!==null;){if(a=e[tn])return a;e=sv(e)}return n}e=a,a=e.parentNode}return null}function rt(e){if(e=e[tn]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function W(e){var n=e[Vl];return n||(n=e[Vl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(e){e[Sr]=!0}var Ot=new Set,Bt={};function It(e,n){te(e,n),te(e+"Capture",n)}function te(e,n){for(Bt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},Me={};function De(e){return Ue.call(Me,e)?!0:Ue.call(Jt,e)?!1:oe.test(e)?Me[e]=!0:(Jt[e]=!0,!1)}function Ye(e,n,a){if(De(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function qe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function fe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function un(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Le(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fn(e){if(!e._valueTracker){var n=un(e)?"checked":"value";e._valueTracker=Le(e,n,""+e[n])}}function ia(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=un(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mr=/[\n"\\]/g;function ve(e){return e.replace(Mr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,f,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?_n(e,y,Xt(n)):a!=null?_n(e,y,Xt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Xt(T):e.removeAttribute("name")}function Hn(e,n,a,o,u,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Fn(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Fn(e)}function _n(e,n,a){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function cs(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function Vi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(mt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Fn(e)}function us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ly=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ly.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Zp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Zp(e,f,n[f])}function qu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kl(e){return uy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var Wu=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,hs=null;function Kp(e){var n=rt(e);if(n&&(e=n.stateNode)){var a=e[wn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[wn]||null;if(!u)throw Error(r(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ia(o)}break t;case"textarea":cs(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rn(e,!!a.multiple,n,!1)}}}var ju=!1;function Jp(e,n,a){if(ju)return e(n,a);ju=!0;try{var o=e(n);return o}finally{if(ju=!1,(fs!==null||hs!==null)&&(Uc(),fs&&(n=fs,e=hs,hs=fs=null,Kp(n),e)))for(n=0;n<e.length;n++)Kp(e[n])}}function Lo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[wn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=!1;if(ra)try{var No={};Object.defineProperty(No,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Zu=!1}var Pa=null,Qu=null,Xl=null;function $p(){if(Xl)return Xl;var e,n=Qu,a=n.length,o,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Xl=u.slice(e,1<o?1-o:void 0)}function ql(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function tm(){return!1}function Xn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wl:tm,this.isPropagationStopped=tm,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),n}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Xn(Er),Oo=v({},Er,{view:0,detail:0}),fy=Xn(Oo),Ku,Ju,zo,jl=v({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zo&&(zo&&e.type==="mousemove"?(Ku=e.screenX-zo.screenX,Ju=e.screenY-zo.screenY):Ju=Ku=0,zo=e),Ku)},movementY:function(e){return"movementY"in e?e.movementY:Ju}}),em=Xn(jl),hy=v({},jl,{dataTransfer:0}),dy=Xn(hy),py=v({},Oo,{relatedTarget:0}),$u=Xn(py),my=v({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Xn(my),_y=v({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vy=Xn(_y),xy=v({},Er,{data:0}),nm=Xn(xy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},My={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=My[e])?!!n[e]:!1}function tf(){return Ey}var Ty=v({},Oo,{key:function(e){if(e.key){var n=yy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),by=Xn(Ty),Ay=v({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Xn(Ay),Ry=v({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),wy=Xn(Ry),Cy=v({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=Xn(Cy),Dy=v({},jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Xn(Dy),Ny=v({},Er,{newState:0,oldState:0}),Oy=Xn(Ny),zy=[9,13,27,32],ef=ra&&"CompositionEvent"in window,Po=null;ra&&"documentMode"in document&&(Po=document.documentMode);var Py=ra&&"TextEvent"in window&&!Po,am=ra&&(!ef||Po&&8<Po&&11>=Po),rm=" ",sm=!1;function om(e,n){switch(e){case"keyup":return zy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function Iy(e,n){switch(e){case"compositionend":return lm(n);case"keypress":return n.which!==32?null:(sm=!0,rm);case"textInput":return e=n.data,e===rm&&sm?null:e;default:return null}}function By(e,n){if(ds)return e==="compositionend"||!ef&&om(e,n)?(e=$p(),Xl=Qu=Pa=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return am&&n.locale!=="ko"?null:n.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Fy[e.type]:n==="textarea"}function um(e,n,a,o){fs?hs?hs.push(o):hs=[o]:fs=o,n=Ic(n,"onChange"),0<n.length&&(a=new Yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Io=null,Bo=null;function Hy(e){W_(e,0)}function Zl(e){var n=st(e);if(ia(n))return e}function fm(e,n){if(e==="change")return n}var hm=!1;if(ra){var nf;if(ra){var af="oninput"in document;if(!af){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),af=typeof dm.oninput=="function"}nf=af}else nf=!1;hm=nf&&(!document.documentMode||9<document.documentMode)}function pm(){Io&&(Io.detachEvent("onpropertychange",mm),Bo=Io=null)}function mm(e){if(e.propertyName==="value"&&Zl(Bo)){var n=[];um(n,Bo,e,Yu(e)),Jp(Hy,n)}}function Gy(e,n,a){e==="focusin"?(pm(),Io=n,Bo=a,Io.attachEvent("onpropertychange",mm)):e==="focusout"&&pm()}function Vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Bo)}function ky(e,n){if(e==="click")return Zl(n)}function Xy(e,n){if(e==="input"||e==="change")return Zl(n)}function qy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:qy;function Fo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ue.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function gm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _m(e,n){var a=gm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gm(a)}}function vm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sn(e.document)}return n}function rf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wy=ra&&"documentMode"in document&&11>=document.documentMode,ps=null,sf=null,Ho=null,of=!1;function ym(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||ps==null||ps!==Sn(o)||(o=ps,"selectionStart"in o&&rf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&Fo(Ho,o)||(Ho=o,o=Ic(sf,"onSelect"),0<o.length&&(n=new Yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=ps)))}function Tr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ms={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},lf={},Sm={};ra&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function br(e){if(lf[e])return lf[e];if(!ms[e])return e;var n=ms[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sm)return lf[e]=n[a];return e}var Mm=br("animationend"),Em=br("animationiteration"),Tm=br("animationstart"),Yy=br("transitionrun"),jy=br("transitionstart"),Zy=br("transitioncancel"),bm=br("transitionend"),Am=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function Li(e,n){Am.set(e,n),It(n,[e])}var Ql=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],gs=0,uf=0;function Kl(){for(var e=gs,n=uf=gs=0;n<e;){var a=di[n];di[n++]=null;var o=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Rm(a,u,f)}}function Jl(e,n,a,o){di[gs++]=e,di[gs++]=n,di[gs++]=a,di[gs++]=o,uf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ff(e,n,a,o){return Jl(e,n,a,o),$l(e)}function Ar(e,n){return Jl(e,null,null,n),$l(e)}function Rm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-re(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function $l(e){if(50<ll)throw ll=0,yh=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var _s={};function Qy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new Qy(e,n,a,o)}function hf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tc(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")hf(e)&&(y=1);else if(typeof e=="string")y=eM(e,a,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=ii(31,a,n,u),e.elementType=C,e.lanes=f,e;case A:return Rr(a.children,u,f,n);case S:y=8,u|=24;break;case x:return e=ii(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case j:return e=ii(13,a,n,u),e.elementType=j,e.lanes=f,e;case G:return e=ii(19,a,n,u),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:y=10;break t;case z:y=9;break t;case U:y=11;break t;case O:y=14;break t;case V:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=ii(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Rr(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function df(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function Cm(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function pf(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Um=new WeakMap;function pi(e,n){if(typeof e=="object"&&e!==null){var a=Um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zt(n)},Um.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var vs=[],xs=0,ec=null,Go=0,mi=[],gi=0,Ia=null,ki=1,Xi="";function oa(e,n){vs[xs++]=Go,vs[xs++]=ec,ec=e,Go=n}function Dm(e,n,a){mi[gi++]=ki,mi[gi++]=Xi,mi[gi++]=Ia,Ia=e;var o=ki;e=Xi;var u=32-re(o)-1;o&=~(1<<u),a+=1;var f=32-re(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ki=1<<32-re(n)+u|a<<u|o,Xi=f+e}else ki=1<<f|a<<u|o,Xi=e}function mf(e){e.return!==null&&(oa(e,1),Dm(e,1,0))}function gf(e){for(;e===ec;)ec=vs[--xs],vs[xs]=null,Go=vs[--xs],vs[xs]=null;for(;e===Ia;)Ia=mi[--gi],mi[gi]=null,Xi=mi[--gi],mi[gi]=null,ki=mi[--gi],mi[gi]=null}function Lm(e,n){mi[gi++]=ki,mi[gi++]=Xi,mi[gi++]=Ia,ki=n.id,Xi=n.overflow,Ia=e}var Cn=null,je=null,Ae=!1,Ba=null,_i=!1,_f=Error(r(519));function Fa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(pi(n,e)),_f}function Nm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[tn]=e,n[wn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)ye(ul[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Hn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Vi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Q_(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Fa(e,!0)}function Om(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function ys(e){if(e!==Cn)return!1;if(!Ae)return Om(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zh(e.type,e.memoizedProps)),a=!a),a&&je&&Fa(e),Om(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=rv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));je=rv(e)}else n===27?(n=je,$a(e.type)?(e=Hh,Hh=null,je=e):je=n):je=Cn?xi(e.stateNode.nextSibling):null;return!0}function wr(){je=Cn=null,Ae=!1}function vf(){var e=Ba;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ba=null),e}function Vo(e){Ba===null?Ba=[e]:Ba.push(e)}var xf=L(null),Cr=null,la=null;function Ha(e,n,a){Mt(xf,n._currentValue),n._currentValue=a}function ca(e){e._currentValue=xf.current,nt(xf)}function yf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Sf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),yf(f.return,a,e),o||(y=null);break t}f=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),yf(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Ss(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=u.type;ni(u.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(u===St.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}u=u.return}e!==null&&Sf(n,e,a,o),n.flags|=262144}function nc(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ur(e){Cr=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return zm(Cr,e)}function ic(e,n){return Cr===null&&Ur(e),zm(e,n)}function zm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(e===null)throw Error(r(308));la=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else la=la.next=n;return a}var Ky=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Jy=s.unstable_scheduleCallback,$y=s.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new Ky,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&Jy($y,function(){e.controller.abort()})}var Xo=null,Ef=0,Ms=0,Es=null;function tS(e,n){if(Xo===null){var a=Xo=[];Ef=0,Ms=Ah(),Es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ef++,n.then(Pm,Pm),n}function Pm(){if(--Ef===0&&Xo!==null){Es!==null&&(Es.status="fulfilled");var e=Xo;Xo=null,Ms=0,Es=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Im=P.S;P.S=function(e,n){y_=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&tS(e,n),Im!==null&&Im(e,n)};var Dr=L(null);function Tf(){var e=Dr.current;return e!==null?e:We.pooledCache}function ac(e,n){n===null?Mt(Dr,Dr.current):Mt(Dr,n.pool)}function Bm(){var e=Tf();return e===null?null:{parent:fn._currentValue,pool:e}}var Ts=Error(r(460)),bf=Error(r(474)),rc=Error(r(542)),sc={then:function(){}};function Fm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vm(e),e;default:if(typeof n.status=="string")n.then(aa,aa);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vm(e),e}throw Nr=n,Ts}}function Lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,Ts):a}}var Nr=null;function Gm(){if(Nr===null)throw Error(r(459));var e=Nr;return Nr=null,e}function Vm(e){if(e===Ts||e===rc)throw Error(r(483))}var bs=null,qo=0;function oc(e){var n=qo;return qo+=1,bs===null&&(bs=[]),Hm(bs,e,n)}function Wo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lc(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function km(e){function n(Y,H){if(e){var K=Y.deletions;K===null?(Y.deletions=[H],Y.flags|=16):K.push(H)}}function a(Y,H){if(!e)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function o(Y){for(var H=new Map;Y!==null;)Y.key!==null?H.set(Y.key,Y):H.set(Y.index,Y),Y=Y.sibling;return H}function u(Y,H){return Y=sa(Y,H),Y.index=0,Y.sibling=null,Y}function f(Y,H,K){return Y.index=K,e?(K=Y.alternate,K!==null?(K=K.index,K<H?(Y.flags|=67108866,H):K):(Y.flags|=67108866,H)):(Y.flags|=1048576,H)}function y(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,H,K,pt){return H===null||H.tag!==6?(H=df(K,Y.mode,pt),H.return=Y,H):(H=u(H,K),H.return=Y,H)}function I(Y,H,K,pt){var $t=K.type;return $t===A?ht(Y,H,K.props.children,pt,K.key):H!==null&&(H.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&Lr($t)===H.type)?(H=u(H,K.props),Wo(H,K),H.return=Y,H):(H=tc(K.type,K.key,K.props,null,Y.mode,pt),Wo(H,K),H.return=Y,H)}function J(Y,H,K,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=pf(K,Y.mode,pt),H.return=Y,H):(H=u(H,K.children||[]),H.return=Y,H)}function ht(Y,H,K,pt,$t){return H===null||H.tag!==7?(H=Rr(K,Y.mode,pt,$t),H.return=Y,H):(H=u(H,K),H.return=Y,H)}function _t(Y,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=df(""+H,Y.mode,K),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return K=tc(H.type,H.key,H.props,null,Y.mode,K),Wo(K,H),K.return=Y,K;case E:return H=pf(H,Y.mode,K),H.return=Y,H;case V:return H=Lr(H),_t(Y,H,K)}if(mt(H)||ct(H))return H=Rr(H,Y.mode,K,null),H.return=Y,H;if(typeof H.then=="function")return _t(Y,oc(H),K);if(H.$$typeof===N)return _t(Y,ic(Y,H),K);lc(Y,H)}return null}function et(Y,H,K,pt){var $t=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return $t!==null?null:T(Y,H,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===$t?I(Y,H,K,pt):null;case E:return K.key===$t?J(Y,H,K,pt):null;case V:return K=Lr(K),et(Y,H,K,pt)}if(mt(K)||ct(K))return $t!==null?null:ht(Y,H,K,pt,null);if(typeof K.then=="function")return et(Y,H,oc(K),pt);if(K.$$typeof===N)return et(Y,H,ic(Y,K),pt);lc(Y,K)}return null}function ot(Y,H,K,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(K)||null,T(H,Y,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Y=Y.get(pt.key===null?K:pt.key)||null,I(H,Y,pt,$t);case E:return Y=Y.get(pt.key===null?K:pt.key)||null,J(H,Y,pt,$t);case V:return pt=Lr(pt),ot(Y,H,K,pt,$t)}if(mt(pt)||ct(pt))return Y=Y.get(K)||null,ht(H,Y,pt,$t,null);if(typeof pt.then=="function")return ot(Y,H,K,oc(pt),$t);if(pt.$$typeof===N)return ot(Y,H,K,ic(H,pt),$t);lc(H,pt)}return null}function kt(Y,H,K,pt){for(var $t=null,Ne=null,qt=H,de=H=0,Te=null;qt!==null&&de<K.length;de++){qt.index>de?(Te=qt,qt=null):Te=qt.sibling;var Oe=et(Y,qt,K[de],pt);if(Oe===null){qt===null&&(qt=Te);break}e&&qt&&Oe.alternate===null&&n(Y,qt),H=f(Oe,H,de),Ne===null?$t=Oe:Ne.sibling=Oe,Ne=Oe,qt=Te}if(de===K.length)return a(Y,qt),Ae&&oa(Y,de),$t;if(qt===null){for(;de<K.length;de++)qt=_t(Y,K[de],pt),qt!==null&&(H=f(qt,H,de),Ne===null?$t=qt:Ne.sibling=qt,Ne=qt);return Ae&&oa(Y,de),$t}for(qt=o(qt);de<K.length;de++)Te=ot(qt,Y,de,K[de],pt),Te!==null&&(e&&Te.alternate!==null&&qt.delete(Te.key===null?de:Te.key),H=f(Te,H,de),Ne===null?$t=Te:Ne.sibling=Te,Ne=Te);return e&&qt.forEach(function(ar){return n(Y,ar)}),Ae&&oa(Y,de),$t}function ne(Y,H,K,pt){if(K==null)throw Error(r(151));for(var $t=null,Ne=null,qt=H,de=H=0,Te=null,Oe=K.next();qt!==null&&!Oe.done;de++,Oe=K.next()){qt.index>de?(Te=qt,qt=null):Te=qt.sibling;var ar=et(Y,qt,Oe.value,pt);if(ar===null){qt===null&&(qt=Te);break}e&&qt&&ar.alternate===null&&n(Y,qt),H=f(ar,H,de),Ne===null?$t=ar:Ne.sibling=ar,Ne=ar,qt=Te}if(Oe.done)return a(Y,qt),Ae&&oa(Y,de),$t;if(qt===null){for(;!Oe.done;de++,Oe=K.next())Oe=_t(Y,Oe.value,pt),Oe!==null&&(H=f(Oe,H,de),Ne===null?$t=Oe:Ne.sibling=Oe,Ne=Oe);return Ae&&oa(Y,de),$t}for(qt=o(qt);!Oe.done;de++,Oe=K.next())Oe=ot(qt,Y,de,Oe.value,pt),Oe!==null&&(e&&Oe.alternate!==null&&qt.delete(Oe.key===null?de:Oe.key),H=f(Oe,H,de),Ne===null?$t=Oe:Ne.sibling=Oe,Ne=Oe);return e&&qt.forEach(function(hM){return n(Y,hM)}),Ae&&oa(Y,de),$t}function ke(Y,H,K,pt){if(typeof K=="object"&&K!==null&&K.type===A&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var $t=K.key;H!==null;){if(H.key===$t){if($t=K.type,$t===A){if(H.tag===7){a(Y,H.sibling),pt=u(H,K.props.children),pt.return=Y,Y=pt;break t}}else if(H.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===V&&Lr($t)===H.type){a(Y,H.sibling),pt=u(H,K.props),Wo(pt,K),pt.return=Y,Y=pt;break t}a(Y,H);break}else n(Y,H);H=H.sibling}K.type===A?(pt=Rr(K.props.children,Y.mode,pt,K.key),pt.return=Y,Y=pt):(pt=tc(K.type,K.key,K.props,null,Y.mode,pt),Wo(pt,K),pt.return=Y,Y=pt)}return y(Y);case E:t:{for($t=K.key;H!==null;){if(H.key===$t)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(Y,H.sibling),pt=u(H,K.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}pt=pf(K,Y.mode,pt),pt.return=Y,Y=pt}return y(Y);case V:return K=Lr(K),ke(Y,H,K,pt)}if(mt(K))return kt(Y,H,K,pt);if(ct(K)){if($t=ct(K),typeof $t!="function")throw Error(r(150));return K=$t.call(K),ne(Y,H,K,pt)}if(typeof K.then=="function")return ke(Y,H,oc(K),pt);if(K.$$typeof===N)return ke(Y,H,ic(Y,K),pt);lc(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(Y,H.sibling),pt=u(H,K),pt.return=Y,Y=pt):(a(Y,H),pt=df(K,Y.mode,pt),pt.return=Y,Y=pt),y(Y)):a(Y,H)}return function(Y,H,K,pt){try{qo=0;var $t=ke(Y,H,K,pt);return bs=null,$t}catch(qt){if(qt===Ts||qt===rc)throw qt;var Ne=ii(29,qt,null,Y.mode);return Ne.lanes=pt,Ne.return=Y,Ne}finally{}}}var Or=km(!0),Xm=km(!1),Ga=!1;function Af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=$l(e),Rm(e,null,a),n}return Jl(e,o,n,a),$l(e)}function Yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Co(e,a)}}function wf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cf=!1;function jo(){if(Cf){var e=Es;if(e!==null)throw e}}function Zo(e,n,a,o){Cf=!1;var u=e.updateQueue;Ga=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,J=I.next;I.next=null,y===null?f=J:y.next=J,y=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==y&&(T===null?ht.firstBaseUpdate=J:T.next=J,ht.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;y=0,ht=J=I=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(Ee&et)===et:(o&et)===et){et!==0&&et===Ms&&(Cf=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var kt=e,ne=T;et=n;var ke=a;switch(ne.tag){case 1:if(kt=ne.payload,typeof kt=="function"){_t=kt.call(ke,_t,et);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ne.payload,et=typeof kt=="function"?kt.call(ke,_t,et):kt,et==null)break t;_t=v({},_t,et);break t;case 2:Ga=!0}}et=T.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(J=ht=ot,I=_t):ht=ht.next=ot,y|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),ja|=y,e.lanes=y,e.memoizedState=_t}}function qm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Wm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qm(a[e],n)}var As=L(null),cc=L(0);function Ym(e,n){e=va,Mt(cc,e),Mt(As,n),va=e|n.baseLanes}function Uf(){Mt(cc,va),Mt(As,As.current)}function Df(){va=cc.current,nt(As),nt(cc)}var ai=L(null),vi=null;function Xa(e){var n=e.alternate;Mt(sn,sn.current&1),Mt(ai,e),vi===null&&(n===null||As.current!==null||n.memoizedState!==null)&&(vi=e)}function Lf(e){Mt(sn,sn.current),Mt(ai,e),vi===null&&(vi=e)}function jm(e){e.tag===22?(Mt(sn,sn.current),Mt(ai,e),vi===null&&(vi=e)):qa()}function qa(){Mt(sn,sn.current),Mt(ai,ai.current)}function ri(e){nt(ai),vi===e&&(vi=null),nt(sn)}var sn=L(0);function uc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bh(a)||Fh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,he=null,Ge=null,hn=null,fc=!1,Rs=!1,zr=!1,hc=0,Qo=0,ws=null,nS=0;function en(){throw Error(r(321))}function Nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function Of(e,n,a,o,u,f){return ua=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Dg:Zf,zr=!1,f=a(o,u),zr=!1,Rs&&(f=Qm(n,a,o,u)),Zm(e),f}function Zm(e){P.H=$o;var n=Ge!==null&&Ge.next!==null;if(ua=0,hn=Ge=he=null,fc=!1,Qo=0,ws=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&nc(e)&&(dn=!0))}function Qm(e,n,a,o){he=e;var u=0;do{if(Rs&&(ws=null),Qo=0,Rs=!1,25<=u)throw Error(r(301));if(u+=1,hn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Lg,f=n(a,o)}while(Rs);return f}function iS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?Ko(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(he.flags|=1024),n}function zf(){var e=hc!==0;return hc=0,e}function Pf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function If(e){if(fc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fc=!1}ua=0,hn=Ge=he=null,Rs=!1,Qo=hc=0,ws=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=e:hn=hn.next=e,hn}function on(){if(Ge===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=hn===null?he.memoizedState:hn.next;if(n!==null)hn=n,Ge=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},hn===null?he.memoizedState=hn=e:hn=hn.next=e}return hn}function dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(e){var n=Qo;return Qo+=1,ws===null&&(ws=[]),e=Hm(ws,e,n),n=he,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Dg:Zf),e}function pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ko(e);if(e.$$typeof===N)return Un(e)}throw Error(r(438,String(e)))}function Bf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function fa(e,n){return typeof n=="function"?n(e):n}function mc(e){var n=on();return Ff(n,Ge,e)}function Ff(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=y=null,I=null,J=n,ht=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(Ee&_t)===_t:(ua&_t)===_t){var et=J.revertLane;if(et===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Ms&&(ht=!0);else if((ua&et)===et){J=J.next,et===Ms&&(ht=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(T=I=_t,y=f):I=I.next=_t,he.lanes|=et,ja|=et;_t=J.action,zr&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else et={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(T=I=et,y=f):I=I.next=et,he.lanes|=_t,ja|=_t;J=J.next}while(J!==null&&J!==n);if(I===null?y=f:I.next=T,!ni(f,e.memoizedState)&&(dn=!0,ht&&(a=Es,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hf(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);ni(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Km(e,n,a){var o=he,u=on(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!ni((Ge||u).memoizedState,a);if(y&&(u.memoizedState=a,dn=!0),u=u.queue,kf(tg.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,Cs(9,{destroy:void 0},$m.bind(null,o,u,a,n),null),We===null)throw Error(r(349));f||(ua&127)!==0||Jm(o,n,a)}return a}function Jm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=dc(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $m(e,n,a,o){n.value=a,n.getSnapshot=o,eg(n)&&ng(e)}function tg(e,n,a){return a(function(){eg(n)&&ng(e)})}function eg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function ng(e){var n=Ar(e,2);n!==null&&Zn(n,e,2)}function Gf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),zr){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},n}function ig(e,n,a,o){return e.baseState=a,Ff(e,Ge,typeof o=="function"?o:fa)}function aS(e,n,a,o,u){if(vc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,ag(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ag(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=P.T,y={};P.T=y;try{var T=a(u,o),I=P.S;I!==null&&I(y,T),rg(e,n,T)}catch(J){Vf(e,n,J)}finally{f!==null&&y.types!==null&&(f.types=y.types),P.T=f}}else try{f=a(u,o),rg(e,n,f)}catch(J){Vf(e,n,J)}}function rg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sg(e,n,o)},function(o){return Vf(e,n,o)}):sg(e,n,a)}function sg(e,n,a){n.status="fulfilled",n.value=a,og(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ag(e,a)))}function Vf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,og(n),n=n.next;while(n!==o)}e.action=null}function og(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lg(e,n){return n}function cg(e,n){if(Ae){var a=We.formState;if(a!==null){t:{var o=he;if(Ae){if(je){e:{for(var u=je,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=xi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=xi(u.nextSibling),o=u.data==="F!";break t}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:n},a.queue=o,a=wg.bind(null,he,o),o.dispatch=a,o=Gf(!1),f=jf.bind(null,he,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=aS.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function ug(e){var n=on();return fg(n,Ge,e)}function fg(e,n,a){if(n=Ff(e,n,lg)[0],e=mc(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ko(n)}catch(y){throw y===Ts?rc:y}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Cs(9,{destroy:void 0},rS.bind(null,u,a),null)),[o,f,e]}function rS(e,n){e.action=n}function hg(e){var n=on(),a=Ge;if(a!==null)return fg(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Cs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=dc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function dg(){return on().memoizedState}function gc(e,n,a,o){var u=Gn();he.flags|=e,u.memoizedState=Cs(1|n,{destroy:void 0},a,o===void 0?null:o)}function _c(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&Nf(o,Ge.memoizedState.deps)?u.memoizedState=Cs(n,f,a,o):(he.flags|=e,u.memoizedState=Cs(1|n,f,a,o))}function pg(e,n){gc(8390656,8,e,n)}function kf(e,n){_c(2048,8,e,n)}function sS(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=dc(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mg(e){var n=on().memoizedState;return sS({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function gg(e,n){return _c(4,2,e,n)}function _g(e,n){return _c(4,4,e,n)}function vg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xg(e,n,a){a=a!=null?a.concat([e]):null,_c(4,4,vg.bind(null,n,e),a)}function Xf(){}function yg(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Sg(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nf(n,o[1]))return o[0];if(o=e(),zr){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function qf(e,n,a){return a===void 0||(ua&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=M_(),he.lanes|=e,ja|=e,a)}function Mg(e,n,a,o){return ni(a,n)?a:As.current!==null?(e=qf(e,a,o),ni(e,n)||(dn=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(Ee&261930)===0?(dn=!0,e.memoizedState=a):(e=M_(),he.lanes|=e,ja|=e,n)}function Eg(e,n,a,o,u){var f=Q.p;Q.p=f!==0&&8>f?f:8;var y=P.T,T={};P.T=T,jf(e,!1,n,a);try{var I=u(),J=P.S;if(J!==null&&J(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=eS(I,o);Jo(e,n,ht,li(e))}else Jo(e,n,o,li(e))}catch(_t){Jo(e,n,{then:function(){},status:"rejected",reason:_t},li())}finally{Q.p=f,y!==null&&T.types!==null&&(y.types=T.types),P.T=y}}function oS(){}function Wf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Tg(e).queue;Eg(e,u,n,q,a===null?oS:function(){return bg(e),a(o)})}function Tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bg(e){var n=Tg(e);n.next===null&&(n=e.alternate.memoizedState),Jo(e,n.next.queue,{},li())}function Yf(){return Un(ml)}function Ag(){return on().memoizedState}function Rg(){return on().memoizedState}function lS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Va(a);var o=ka(n,e,a);o!==null&&(Zn(o,n,a),Yo(o,n,a)),n={cache:Mf()},e.payload=n;return}n=n.return}}function cS(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vc(e)?Cg(n,a):(a=ff(e,n,a,o),a!==null&&(Zn(a,e,o),Ug(a,n,o)))}function wg(e,n,a){var o=li();Jo(e,n,a,o)}function Jo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vc(e))Cg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(u.hasEagerState=!0,u.eagerState=T,ni(T,y))return Jl(e,n,u,0),We===null&&Kl(),!1}catch{}finally{}if(a=ff(e,n,u,o),a!==null)return Zn(a,e,o),Ug(a,n,o),!0}return!1}function jf(e,n,a,o){if(o={lane:2,revertLane:Ah(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(n)throw Error(r(479))}else n=ff(e,a,o,2),n!==null&&Zn(n,e,2)}function vc(e){var n=e.alternate;return e===he||n!==null&&n===he}function Cg(e,n){Rs=fc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ug(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Co(e,a)}}var $o={readContext:Un,use:pc,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};$o.useEffectEvent=en;var Dg={readContext:Un,use:pc,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:pg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gc(4194308,4,vg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gc(4194308,4,e,n)},useInsertionEffect:function(e,n){gc(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(zr){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(zr){Pt(!0);try{a(n)}finally{Pt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=cS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gf(e);var n=e.queue,a=wg.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xf,useDeferredValue:function(e,n){var a=Gn();return qf(a,e,n)},useTransition:function(){var e=Gf(!1);return e=Eg.bind(null,he,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Gn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Ee&127)!==0||Jm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pg(tg.bind(null,o,f,e),[e]),o.flags|=2048,Cs(9,{destroy:void 0},$m.bind(null,o,f,a,n),null),a},useId:function(){var e=Gn(),n=We.identifierPrefix;if(Ae){var a=Xi,o=ki;a=(o&~(1<<32-re(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yf,useFormState:cg,useActionState:cg,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=jf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bf,useCacheRefresh:function(){return Gn().memoizedState=lS.bind(null,he)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zf={readContext:Un,use:pc,useCallback:yg,useContext:Un,useEffect:kf,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Sg,useReducer:mc,useRef:dg,useState:function(){return mc(fa)},useDebugValue:Xf,useDeferredValue:function(e,n){var a=on();return Mg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=mc(fa)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Ko(e),n]},useSyncExternalStore:Km,useId:Ag,useHostTransitionStatus:Yf,useFormState:ug,useActionState:ug,useOptimistic:function(e,n){var a=on();return ig(a,Ge,e,n)},useMemoCache:Bf,useCacheRefresh:Rg};Zf.useEffectEvent=mg;var Lg={readContext:Un,use:pc,useCallback:yg,useContext:Un,useEffect:kf,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Sg,useReducer:Hf,useRef:dg,useState:function(){return Hf(fa)},useDebugValue:Xf,useDeferredValue:function(e,n){var a=on();return Ge===null?qf(a,e,n):Mg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Hf(fa)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Ko(e),n]},useSyncExternalStore:Km,useId:Ag,useHostTransitionStatus:Yf,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var a=on();return Ge!==null?ig(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:Rg};Lg.useEffectEvent=mg;function Qf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(e,u,o),n!==null&&(Zn(n,e,o),Yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(e,u,o),n!==null&&(Zn(n,e,o),Yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(e,o,a),n!==null&&(Zn(n,e,a),Yo(n,e,a))}};function Ng(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Fo(a,o)||!Fo(u,f):!0}function Og(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Kf.enqueueReplaceState(n,n.state,null)}function Pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function zg(e){Ql(e)}function Pg(e){console.error(e)}function Ig(e){Ql(e)}function xc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Bg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Jf(e,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){xc(e,n)},a}function Fg(e){return e=Va(e),e.tag=3,e}function Hg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Bg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Bg(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function uS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ss(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return vi===null?Dc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===sc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Eh(e,o,u)),!1;case 22:return a.flags|=65536,o===sc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Eh(e,o,u)),!1}throw Error(r(435,a.tag))}return Eh(e,o,u),Dc(),!1}if(Ae)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==_f&&(e=Error(r(422),{cause:o}),Vo(pi(e,a)))):(o!==_f&&(n=Error(r(423),{cause:o}),Vo(pi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=pi(o,a),u=Jf(e.stateNode,o,u),wf(e,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:o});if(f=pi(f,a),ol===null?ol=[f]:ol.push(f),nn!==4&&(nn=2),n===null)return!0;o=pi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Jf(a.stateNode,o,e),wf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fg(u),Hg(u,e,a,o),wf(a,u),!1}a=a.return}while(a!==null);return!1}var $f=Error(r(461)),dn=!1;function Dn(e,n,a,o){n.child=e===null?Xm(n,null,a,o):Or(n,e.child,a,o)}function Gg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var T in o)T!=="ref"&&(y[T]=o[T])}else y=o;return Ur(n),o=Of(e,n,a,y,f,u),T=zf(),e!==null&&!dn?(Pf(e,n,u),ha(e,n,u)):(Ae&&T&&mf(n),n.flags|=1,Dn(e,n,o,u),n.child)}function Vg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!hf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,kg(e,n,f,o,u)):(e=tc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!oh(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(y,o)&&e.ref===n.ref)return ha(e,n,u)}return n.flags|=1,e=sa(f,o),e.ref=n.ref,e.return=n,n.child=e}function kg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Fo(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,oh(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,ha(e,n,u)}return th(e,n,a,o,u)}function Xg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return qg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ac(n,f!==null?f.cachePool:null),f!==null?Ym(n,f):Uf(),jm(n);else return o=n.lanes=536870912,qg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(ac(n,f.cachePool),Ym(n,f),qa(),n.memoizedState=null):(e!==null&&ac(n,null),Uf(),qa());return Dn(e,n,u,a),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qg(e,n,a,o,u){var f=Tf();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ac(n,null),Uf(),jm(n),e!==null&&Ss(e,n,o,!0),n.childLanes=u,null}function yc(e,n){return n=Mc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Wg(e,n,a){return Or(n,e.child,null,a),e=yc(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function fS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(o.mode==="hidden")return e=yc(n,o),n.lanes=536870912,tl(null,e);if(Lf(n),(e=je)?(e=av(e,_i),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=Cm(e),a.return=n,n.child=a,Cn=n,je=null)):e=null,e===null)throw Fa(n);return n.lanes=536870912,null}return yc(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Lf(n),u)if(n.flags&256)n.flags&=-257,n=Wg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Ss(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=We,o!==null&&(y=Gi(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Ar(e,y),Zn(o,e,y),$f;Dc(),n=Wg(e,n,a)}else e=f.treeContext,je=xi(y.nextSibling),Cn=n,Ae=!0,Ba=null,_i=!1,e!==null&&Lm(n,e),n=yc(n,o),n.flags|=4096;return n}return e=sa(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Sc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function th(e,n,a,o,u){return Ur(n),a=Of(e,n,a,o,void 0,u),o=zf(),e!==null&&!dn?(Pf(e,n,u),ha(e,n,u)):(Ae&&o&&mf(n),n.flags|=1,Dn(e,n,a,u),n.child)}function Yg(e,n,a,o,u,f){return Ur(n),n.updateQueue=null,a=Qm(n,o,a,u),Zm(e),o=zf(),e!==null&&!dn?(Pf(e,n,f),ha(e,n,f)):(Ae&&o&&mf(n),n.flags|=1,Dn(e,n,a,f),n.child)}function jg(e,n,a,o,u){if(Ur(n),n.stateNode===null){var f=_s,y=a.contextType;typeof y=="object"&&y!==null&&(f=Un(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Kf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Af(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Un(y):_s,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Qf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Kf.enqueueReplaceState(f,f.state,null),Zo(n,o,f,u),jo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,I=Pr(a,T);f.props=I;var J=f.context,ht=a.contextType;y=_s,typeof ht=="object"&&ht!==null&&(y=Un(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==y)&&Og(n,f,o,y),Ga=!1;var et=n.memoizedState;f.state=et,Zo(n,o,f,u),jo(),J=n.memoizedState,T||et!==J||Ga?(typeof _t=="function"&&(Qf(n,a,_t,o),J=n.memoizedState),(I=Ga||Ng(n,a,I,o,et,J,y))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Rf(e,n),y=n.memoizedProps,ht=Pr(a,y),f.props=ht,_t=n.pendingProps,et=f.context,J=a.contextType,I=_s,typeof J=="object"&&J!==null&&(I=Un(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==_t||et!==I)&&Og(n,f,o,I),Ga=!1,et=n.memoizedState,f.state=et,Zo(n,o,f,u),jo();var ot=n.memoizedState;y!==_t||et!==ot||Ga||e!==null&&e.dependencies!==null&&nc(e.dependencies)?(typeof T=="function"&&(Qf(n,a,T,o),ot=n.memoizedState),(ht=Ga||Ng(n,a,ht,o,et,ot,I)||e!==null&&e.dependencies!==null&&nc(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=I,o=ht):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Sc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Or(n,e.child,null,u),n.child=Or(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ha(e,n,u),e}function Zg(e,n,a,o){return wr(),n.flags|=256,Dn(e,n,a,o),n.child}var eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nh(e){return{baseLanes:e,cachePool:Bm()}}function ih(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Qg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?Xa(n):qa(),(e=je)?(e=av(e,_i),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=Cm(e),a.return=n,n.child=a,Cn=n,je=null)):e=null,e===null)throw Fa(n);return Fh(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(qa(),u=n.mode,T=Mc({mode:"hidden",children:T},u),o=Rr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=nh(a),o.childLanes=ih(e,y,a),n.memoizedState=eh,tl(null,o)):(Xa(n),ah(n,T))}var I=e.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=rh(e,n,a)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,n=null):(qa(),T=o.fallback,u=n.mode,o=Mc({mode:"visible",children:o.children},u),T=Rr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,Or(n,e.child,null,a),o=n.child,o.memoizedState=nh(a),o.childLanes=ih(e,y,a),n.memoizedState=eh,n=tl(null,o));else if(Xa(n),Fh(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var J=y.dgst;y=J,o=Error(r(419)),o.stack="",o.digest=y,Vo({value:o,source:null,stack:null}),n=rh(e,n,a)}else if(dn||Ss(e,n,a,!1),y=(a&e.childLanes)!==0,dn||y){if(y=We,y!==null&&(o=Gi(y,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Ar(e,o),Zn(y,e,o),$f;Bh(T)||Dc(),n=rh(e,n,a)}else Bh(T)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,je=xi(T.nextSibling),Cn=n,Ae=!0,Ba=null,_i=!1,e!==null&&Lm(n,e),n=ah(n,o.children),n.flags|=4096);return n}return u?(qa(),T=o.fallback,u=n.mode,I=e.child,J=I.sibling,o=sa(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,J!==null?T=sa(J,T):(T=Rr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,tl(null,o),o=n.child,T=e.child.memoizedState,T===null?T=nh(a):(u=T.cachePool,u!==null?(I=fn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Bm(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=ih(e,y,a),n.memoizedState=eh,tl(e.child,o)):(Xa(n),a=e.child,e=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function ah(e,n){return n=Mc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Mc(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function rh(e,n,a){return Or(n,e.child,null,a),e=ah(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yf(e.return,n,a)}function sh(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function Jg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=sn.current,T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,Mt(sn,y),Dn(e,n,o,a),o=Ae?Go:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kg(e,a,n);else if(e.tag===19)Kg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&uc(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sh(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&uc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}sh(n,!0,a,null,f,o);break;case"together":sh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ha(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ss(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function oh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nc(e)))}function hS(e,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),Ha(n,fn,e.memoizedState.cache),wr();break;case 27:case 5:Rt(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qg(e,n,a):(Xa(n),e=ha(e,n,a),e!==null?e.sibling:null);Xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ss(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Jg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Xg(e,n,a,n.pendingProps);case 24:Ha(n,fn,e.memoizedState.cache)}return ha(e,n,a)}function $g(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!oh(e,a)&&(n.flags&128)===0)return dn=!1,hS(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Ae&&(n.flags&1048576)!==0&&Dm(n,Go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Lr(n.elementType),n.type=e,typeof e=="function")hf(e)?(o=Pr(e,o),n.tag=1,n=jg(null,n,e,o,a)):(n.tag=0,n=th(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Gg(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=Vg(null,n,e,o,a);break t}}throw n=vt(e)||e,Error(r(306,n,""))}}return n;case 0:return th(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Pr(o,n.pendingProps),jg(e,n,o,u,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Rf(e,n),Zo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ha(n,fn,o),o!==f.cache&&Sf(n,[fn],a,!0),jo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zg(e,n,o,a);break t}else if(o!==u){u=pi(Error(r(424)),n),Vo(u),n=Zg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=xi(e.firstChild),Cn=n,Ae=!0,Ba=null,_i=!0,a=Xm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wr(),o===u){n=ha(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Sc(e,n),e===null?(a=uv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Bc(bt.current).createElement(a),o[tn]=n,o[wn]=e,Ln(o,a,e),yt(o),n.stateNode=o):n.memoizedState=uv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Rt(n),e===null&&Ae&&(o=n.stateNode=ov(n.type,n.pendingProps,bt.current),Cn=n,_i=!0,u=je,$a(n.type)?(Hh=u,je=xi(o.firstChild)):je=u),Dn(e,n,n.pendingProps.children,a),Sc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=o=je)&&(o=VS(o,n.type,n.pendingProps,_i),o!==null?(n.stateNode=o,Cn=n,je=xi(o.firstChild),_i=!1,u=!0):u=!1),u||Fa(n)),Rt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,zh(u,f)?o=null:y!==null&&zh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Of(e,n,iS,null,null,a),ml._currentValue=u),Sc(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=je)&&(a=kS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,je=null,e=!0):e=!1),e||Fa(n)),null;case 13:return Qg(e,n,a);case 4:return Gt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Or(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return Gg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ur(n),u=Un(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return Vg(e,n,n.type,n.pendingProps,a);case 15:return kg(e,n,n.type,n.pendingProps,a);case 19:return Jg(e,n,a);case 31:return fS(e,n,a);case 22:return Xg(e,n,a,n.pendingProps);case 24:return Ur(n),o=Un(fn),e===null?(u=Tf(),u===null&&(u=We,f=Mf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Af(n),Ha(n,fn,u)):((e.lanes&a)!==0&&(Rf(e,n),Zo(n,null,null,a),jo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,fn,o)):(o=f.cache,Ha(n,fn,o),o!==u.cache&&Sf(n,[fn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function da(e){e.flags|=4}function lh(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(A_())e.flags|=8192;else throw Nr=sc,bf}else e.flags&=-16777217}function t_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mv(n))if(A_())e.flags|=8192;else throw Nr=sc,bf}function Ec(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?gn():536870912,e.lanes|=n,Ns|=n)}function el(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function dS(e,n,a){var o=n.pendingProps;switch(gf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ca(fn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ys(n)?da(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vf())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(da(n),f!==null?(Ze(n),t_(n,f)):(Ze(n),lh(n,u,null,o,a))):f?f!==e.memoizedState?(da(n),Ze(n),t_(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&da(n),Ze(n),lh(n,u,e,o,a)),null;case 27:if(Wt(n),a=bt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=Z.current,ys(n)?Nm(n):(e=ov(u,o,a),n.stateNode=e,da(n))}return Ze(n),null;case 5:if(Wt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Z.current,ys(n))Nm(n);else{var y=Bc(bt.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[tn]=n,f[wn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Ln(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&da(n)}}return Ze(n),lh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=bt.current,ys(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[tn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Q_(e.nodeValue,a)),e||Fa(n,!0)}else e=Bc(e).createTextNode(o),e[tn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ys(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[tn]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ys(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[tn]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ec(n,n.updateQueue),Ze(n),null);case 4:return Ft(),e===null&&Uh(n.stateNode.containerInfo),Ze(n),null;case 10:return ca(n.type),Ze(n),null;case 19:if(nt(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)el(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=uc(e),f!==null){for(n.flags|=128,el(o,!1),e=f.updateQueue,n.updateQueue=e,Ec(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wm(a,e),a=a.sibling;return Mt(sn,sn.current&1|2),Ae&&oa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&dt()>wc&&(n.flags|=128,u=!0,el(o,!1),n.lanes=4194304)}else{if(!u)if(e=uc(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ec(n,e),el(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ae)return Ze(n),null}else 2*dt()-o.renderingStartTime>wc&&a!==536870912&&(n.flags|=128,u=!0,el(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=dt(),e.sibling=null,a=sn.current,Mt(sn,u?a&1|2:a&1),Ae&&oa(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ri(n),Df(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ec(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(Dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function pS(e,n){switch(gf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ca(fn),Ft(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(sn),null;case 4:return Ft(),null;case 10:return ca(n.type),null;case 22:case 23:return ri(n),Df(),e!==null&&nt(Dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ca(fn),null;case 25:return null;default:return null}}function e_(e,n){switch(gf(n),n.tag){case 3:ca(fn),Ft();break;case 26:case 27:case 5:Wt(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:nt(sn);break;case 10:ca(n.type);break;case 22:case 23:ri(n),Df(),e!==null&&nt(Dr);break;case 24:ca(fn)}}function nl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(T){Fe(n,n.return,T)}}function Wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var I=a,J=T;try{J()}catch(ht){Fe(u,I,ht)}}}o=o.next}while(o!==f)}}catch(ht){Fe(n,n.return,ht)}}function n_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Wm(n,a)}catch(o){Fe(e,e.return,o)}}}function i_(e,n,a){a.props=Pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function il(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function qi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function a_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function ch(e,n,a){try{var o=e.stateNode;PS(o,e.type,a,n),o[wn]=n}catch(u){Fe(e,e.return,u)}}function r_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function uh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||r_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(fh(e,n,a),e=e.sibling;e!==null;)fh(e,n,a),e=e.sibling}function Tc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&$a(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tc(e,n,a),e=e.sibling;e!==null;)Tc(e,n,a),e=e.sibling}function s_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,o,a),n[tn]=e,n[wn]=a}catch(f){Fe(e,e.return,f)}}var pa=!1,pn=!1,hh=!1,o_=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function mS(e,n){if(e=e.containerInfo,Nh=qc,e=xm(e),rf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,T=-1,I=-1,J=0,ht=0,_t=e,et=null;e:for(;;){for(var ot;_t!==a||u!==0&&_t.nodeType!==3||(T=y+u),_t!==f||o!==0&&_t.nodeType!==3||(I=y+o),_t.nodeType===3&&(y+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)et=_t,_t=ot;for(;;){if(_t===e)break e;if(et===a&&++J===u&&(T=y),et===f&&++ht===o&&(I=y),(ot=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=ot}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oh={focusedElem:e,selectionRange:a},qc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=Pr(a.type,u);e=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Fe(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function l_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ga(e,a),o&4&&nl(5,a);break;case 1:if(ga(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Fe(a,a.return,y)}else{var u=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Fe(a,a.return,y)}}o&64&&n_(a),o&512&&il(a,a.return);break;case 3:if(ga(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wm(e,n)}catch(y){Fe(a,a.return,y)}}break;case 27:n===null&&o&4&&s_(a);case 26:case 5:ga(e,a),n===null&&o&4&&a_(a),o&512&&il(a,a.return);break;case 12:ga(e,a);break;case 31:ga(e,a),o&4&&f_(e,a);break;case 13:ga(e,a),o&4&&h_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=TS.bind(null,a),XS(e,a))));break;case 22:if(o=a.memoizedState!==null||pa,!o){n=n!==null&&n.memoizedState!==null||pn,u=pa;var f=pn;pa=o,(pn=n)&&!f?_a(e,a,(a.subtreeFlags&8772)!==0):ga(e,a),pa=u,pn=f}break;case 30:break;default:ga(e,a)}}function c_(e){var n=e.alternate;n!==null&&(e.alternate=null,c_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,qn=!1;function ma(e,n,a){for(a=a.child;a!==null;)u_(e,n,a),a=a.sibling}function u_(e,n,a){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:pn||qi(a,n),ma(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||qi(a,n);var o=Je,u=qn;$a(a.type)&&(Je=a.stateNode,qn=!1),ma(e,n,a),hl(a.stateNode),Je=o,qn=u;break;case 5:pn||qi(a,n);case 6:if(o=Je,u=qn,Je=null,ma(e,n,a),Je=o,qn=u,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(qn?(e=Je,nv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Gs(e)):nv(Je,a.stateNode));break;case 4:o=Je,u=qn,Je=a.stateNode.containerInfo,qn=!0,ma(e,n,a),Je=o,qn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),pn||Wa(4,a,n),ma(e,n,a);break;case 1:pn||(qi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&i_(a,n,o)),ma(e,n,a);break;case 21:ma(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ma(e,n,a),pn=o;break;default:ma(e,n,a)}}function f_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gs(e)}catch(a){Fe(n,n.return,a)}}}function h_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gs(e)}catch(a){Fe(n,n.return,a)}}function gS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new o_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new o_),n;default:throw Error(r(435,e.tag))}}function bc(e,n){var a=gS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=bS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if($a(T.type)){Je=T.stateNode,qn=!1;break t}break;case 5:Je=T.stateNode,qn=!1;break t;case 3:case 4:Je=T.stateNode.containerInfo,qn=!0;break t}T=T.return}if(Je===null)throw Error(r(160));u_(f,y,u),Je=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d_(n,e),n=n.sibling}var Ni=null;function d_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),Yn(e),o&4&&(Wa(3,e,e.return),nl(3,e),Wa(5,e,e.return));break;case 1:Wn(n,e),Yn(e),o&512&&(pn||a===null||qi(a,a.return)),o&64&&pa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ni;if(Wn(n,e),Yn(e),o&512&&(pn||a===null||qi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Sr]||f[tn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,o,a),f[tn]=e,yt(f),o=f;break t;case"link":var y=dv("link","href",u).get(o+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(f=y[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;case"meta":if(y=dv("meta","content",u).get(o+(a.content||""))){for(T=0;T<y.length;T++)if(f=y[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}f=u.createElement(o),Ln(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[tn]=e,yt(f),o=f}e.stateNode=o}else pv(u,e.type,e.stateNode);else e.stateNode=hv(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?pv(u,e.type,e.stateNode):hv(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ch(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),Yn(e),o&512&&(pn||a===null||qi(a,a.return)),a!==null&&o&4&&ch(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),Yn(e),o&512&&(pn||a===null||qi(a,a.return)),e.flags&32){u=e.stateNode;try{us(u,"")}catch(kt){Fe(e,e.return,kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ch(e,u,a!==null?a.memoizedProps:u)),o&1024&&(hh=!0);break;case 6:if(Wn(n,e),Yn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(Gc=null,u=Ni,Ni=Fc(n.containerInfo),Wn(n,e),Ni=u,Yn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(kt){Fe(e,e.return,kt)}hh&&(hh=!1,p_(e));break;case 4:o=Ni,Ni=Fc(e.stateNode.containerInfo),Wn(n,e),Yn(e),Ni=o;break;case 12:Wn(n,e),Yn(e);break;case 31:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bc(e,o)));break;case 13:Wn(n,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rc=dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bc(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,J=pa,ht=pn;if(pa=J||u,pn=ht||I,Wn(n,e),pn=ht,pa=J,Yn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||pa||pn||Ir(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=I.stateNode;var _t=I.memoizedProps.style,et=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(kt){Fe(I,I.return,kt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(kt){Fe(I,I.return,kt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;u?iv(ot,!0):iv(I.stateNode,!1)}catch(kt){Fe(I,I.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,bc(e,a))));break;case 19:Wn(n,e),Yn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,bc(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),Yn(e)}}function Yn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(r_(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=uh(e);Tc(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(us(y,""),a.flags&=-33);var T=uh(e);Tc(e,T,y);break;case 3:case 4:var I=a.stateNode.containerInfo,J=uh(e);fh(e,J,I);break;default:throw Error(r(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function p_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;p_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ga(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l_(e,n.alternate,n),n=n.sibling}function Ir(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Ir(n);break;case 1:qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i_(n,n.return,a),Ir(n);break;case 27:hl(n.stateNode);case 26:case 5:qi(n,n.return),Ir(n);break;case 22:n.memoizedState===null&&Ir(n);break;case 30:Ir(n);break;default:Ir(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:_a(u,f,a),nl(4,f);break;case 1:if(_a(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)qm(I[u],T)}catch(J){Fe(o,o.return,J)}}a&&y&64&&n_(f),il(f,f.return);break;case 27:s_(f);case 26:case 5:_a(u,f,a),a&&o===null&&y&4&&a_(f),il(f,f.return);break;case 12:_a(u,f,a);break;case 31:_a(u,f,a),a&&y&4&&f_(u,f);break;case 13:_a(u,f,a),a&&y&4&&h_(u,f);break;case 22:f.memoizedState===null&&_a(u,f,a),il(f,f.return);break;case 30:break;default:_a(u,f,a)}n=n.sibling}}function dh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function ph(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ko(e))}function Oi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m_(e,n,a,o),n=n.sibling}function m_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,o),u&2048&&nl(9,n);break;case 1:Oi(e,n,a,o);break;case 3:Oi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ko(e)));break;case 12:if(u&2048){Oi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,T=f.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Fe(n,n.return,I)}}else Oi(e,n,a,o);break;case 31:Oi(e,n,a,o);break;case 13:Oi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Oi(e,n,a,o):al(e,n):f._visibility&2?Oi(e,n,a,o):(f._visibility|=2,Us(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&dh(y,n);break;case 24:Oi(e,n,a,o),u&2048&&ph(n.alternate,n);break;default:Oi(e,n,a,o)}}function Us(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,T=a,I=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:Us(f,y,T,I,u),nl(8,y);break;case 23:break;case 22:var ht=y.stateNode;y.memoizedState!==null?ht._visibility&2?Us(f,y,T,I,u):al(f,y):(ht._visibility|=2,Us(f,y,T,I,u)),u&&J&2048&&dh(y.alternate,y);break;case 24:Us(f,y,T,I,u),u&&J&2048&&ph(y.alternate,y);break;default:Us(f,y,T,I,u)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:al(a,o),u&2048&&dh(o.alternate,o);break;case 24:al(a,o),u&2048&&ph(o.alternate,o);break;default:al(a,o)}n=n.sibling}}var rl=8192;function Ds(e,n,a){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)g_(e,n,a),e=e.sibling}function g_(e,n,a){switch(e.tag){case 26:Ds(e,n,a),e.flags&rl&&e.memoizedState!==null&&nM(a,Ni,e.memoizedState,e.memoizedProps);break;case 5:Ds(e,n,a);break;case 3:case 4:var o=Ni;Ni=Fc(e.stateNode.containerInfo),Ds(e,n,a),Ni=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=rl,rl=16777216,Ds(e,n,a),rl=o):Ds(e,n,a));break;default:Ds(e,n,a)}}function __(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,x_(o,e)}__(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)v_(e),e=e.sibling}function v_(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ac(e)):sl(e);break;default:sl(e)}}function Ac(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,x_(o,e)}__(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Ac(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ac(n));break;default:Ac(n)}e=e.sibling}}function x_(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ko(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(c_(o),o===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var _S={getCacheForType:function(e){var n=Un(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(fn).controller.signal}},vS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,xe=null,Ee=0,Be=0,si=null,Ya=!1,Ls=!1,mh=!1,va=0,nn=0,ja=0,Br=0,gh=0,oi=0,Ns=0,ol=null,jn=null,_h=!1,Rc=0,y_=0,wc=1/0,Cc=null,Za=null,vn=0,Qa=null,Os=null,xa=0,vh=0,xh=null,S_=null,ll=0,yh=null;function li(){return(Pe&2)!==0&&Ee!==0?Ee&-Ee:P.T!==null?Ah():Uo()}function M_(){if(oi===0)if((Ee&536870912)===0||Ae){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Zn(e,n,a){(e===We&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(zs(e,0),Ka(e,Ee,oi,!1)),Rn(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(Br|=a),nn===4&&Ka(e,Ee,oi,!1)),Wi(e))}function E_(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||se(e,n),u=o?SS(e,n):Mh(e,n,!0),f=o;do{if(u===0){Ls&&!o&&Ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!xS(a)){u=Mh(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;u=ol;var I=T.current.memoizedState.isDehydrated;if(I&&(zs(T,y).flags|=256),y=Mh(T,y,!1),y!==2){if(mh&&!I){T.errorRecoveryDisabledLanes|=f,Br|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){zs(e,0),Ka(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ka(o,n,oi,!Ya);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Rc+300-dt(),10<u)){if(Ka(o,n,oi,!Ya),Nt(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=tv(T_.bind(null,o,a,jn,Cc,_h,n,oi,Br,Ns,Ya,f,"Throttled",-0,0),u);break t}T_(o,a,jn,Cc,_h,n,oi,Br,Ns,Ya,f,null,-0,0)}}break}while(!0);Wi(e)}function T_(e,n,a,o,u,f,y,T,I,J,ht,_t,et,ot){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},g_(n,f,_t);var kt=(f&62914560)===f?Rc-dt():(f&4194048)===f?y_-dt():0;if(kt=iM(_t,kt),kt!==null){xa=f,e.cancelPendingCommit=kt(L_.bind(null,e,n,f,a,o,u,y,T,I,ht,_t,null,et,ot)),Ka(e,f,y,!J);return}}L_(e,n,f,a,o,u,y,T,I)}function xS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(e,n,a,o){n&=~gh,n&=~Br,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-re(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&wo(e,a,n)}function Uc(){return(Pe&6)===0?(cl(0),!1):!0}function Sh(){if(xe!==null){if(Be===0)var e=xe.return;else e=xe,la=Cr=null,If(e),bs=null,qo=0,e=xe;for(;e!==null;)e_(e.alternate,e),e=e.return;xe=null}}function zs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,FS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,Sh(),We=e,xe=a=sa(e.current,null),Ee=n,Be=0,si=null,Ya=!1,Ls=se(e,n),mh=!1,Ns=oi=gh=Br=ja=nn=0,jn=ol=null,_h=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-re(o),f=1<<u;n|=e[u],o&=~f}return va=n,Kl(),a}function b_(e,n){he=null,P.H=$o,n===Ts||n===rc?(n=Gm(),Be=3):n===bf?(n=Gm(),Be=4):Be=n===$f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,xe===null&&(nn=1,xc(e,pi(n,e.current)))}function A_(){var e=ai.current;return e===null?!0:(Ee&4194048)===Ee?vi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===vi:!1}function R_(){var e=P.H;return P.H=$o,e===null?$o:e}function w_(){var e=P.A;return P.A=_S,e}function Dc(){nn=4,Ya||(Ee&4194048)!==Ee&&ai.current!==null||(Ls=!0),(ja&134217727)===0&&(Br&134217727)===0||We===null||Ka(We,Ee,oi,!1)}function Mh(e,n,a){var o=Pe;Pe|=2;var u=R_(),f=w_();(We!==e||Ee!==n)&&(Cc=null,zs(e,n)),n=!1;var y=nn;t:do try{if(Be!==0&&xe!==null){var T=xe,I=si;switch(Be){case 8:Sh(),y=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Be;if(Be=0,si=null,Ps(e,T,I,J),a&&Ls){y=0;break t}break;default:J=Be,Be=0,si=null,Ps(e,T,I,J)}}yS(),y=nn;break}catch(ht){b_(e,ht)}while(!0);return n&&e.shellSuspendCounter++,la=Cr=null,Pe=o,P.H=u,P.A=f,xe===null&&(We=null,Ee=0,Kl()),y}function yS(){for(;xe!==null;)C_(xe)}function SS(e,n){var a=Pe;Pe|=2;var o=R_(),u=w_();We!==e||Ee!==n?(Cc=null,wc=dt()+500,zs(e,n)):Ls=se(e,n);t:do try{if(Be!==0&&xe!==null){n=xe;var f=si;e:switch(Be){case 1:Be=0,si=null,Ps(e,n,f,1);break;case 2:case 9:if(Fm(f)){Be=0,si=null,U_(n);break}n=function(){Be!==2&&Be!==9||We!==e||(Be=7),Wi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Fm(f)?(Be=0,si=null,U_(n)):(Be=0,si=null,Ps(e,n,f,7));break;case 5:var y=null;switch(xe.tag){case 26:y=xe.memoizedState;case 5:case 27:var T=xe;if(y?mv(y):T.stateNode.complete){Be=0,si=null;var I=T.sibling;if(I!==null)xe=I;else{var J=T.return;J!==null?(xe=J,Lc(J)):xe=null}break e}}Be=0,si=null,Ps(e,n,f,5);break;case 6:Be=0,si=null,Ps(e,n,f,6);break;case 8:Sh(),nn=6;break t;default:throw Error(r(462))}}MS();break}catch(ht){b_(e,ht)}while(!0);return la=Cr=null,P.H=o,P.A=u,Pe=a,xe!==null?0:(We=null,Ee=0,Kl(),nn)}function MS(){for(;xe!==null&&!b();)C_(xe)}function C_(e){var n=$g(e.alternate,e,va);e.memoizedProps=e.pendingProps,n===null?Lc(e):xe=n}function U_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Yg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Yg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:If(n);default:e_(a,n),n=xe=wm(n,va),n=$g(a,n,va)}e.memoizedProps=e.pendingProps,n===null?Lc(e):xe=n}function Ps(e,n,a,o){la=Cr=null,If(n),bs=null,qo=0;var u=n.return;try{if(uS(e,u,n,a,Ee)){nn=1,xc(e,pi(a,e.current)),xe=null;return}}catch(f){if(u!==null)throw xe=u,f;nn=1,xc(e,pi(a,e.current)),xe=null;return}n.flags&32768?(Ae||o===1?e=!0:Ls||(Ee&536870912)!==0?e=!1:(Ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),D_(n,e)):Lc(n)}function Lc(e){var n=e;do{if((n.flags&32768)!==0){D_(n,Ya);return}e=n.return;var a=dS(n.alternate,n,va);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=e}while(n!==null);nn===0&&(nn=5)}function D_(e,n){do{var a=pS(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);nn=6,xe=null}function L_(e,n,a,o,u,f,y,T,I){e.cancelPendingCommit=null;do Nc();while(vn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=uf,Ui(e,a,f,y,T,I),e===We&&(xe=We=null,Ee=0),Os=n,Qa=e,xa=a,vh=f,xh=u,S_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AS(Lt,function(){return I_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Q.p,Q.p=2,y=Pe,Pe|=4;try{mS(e,n,a)}finally{Pe=y,Q.p=u,P.T=o}}vn=1,N_(),O_(),z_()}}function N_(){if(vn===1){vn=0;var e=Qa,n=Os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var u=Pe;Pe|=4;try{d_(n,e);var f=Oh,y=xm(e.containerInfo),T=f.focusedElem,I=f.selectionRange;if(y!==T&&T&&T.ownerDocument&&vm(T.ownerDocument.documentElement,T)){if(I!==null&&rf(T)){var J=I.start,ht=I.end;if(ht===void 0&&(ht=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,et=_t&&_t.defaultView||window;if(et.getSelection){var ot=et.getSelection(),kt=T.textContent.length,ne=Math.min(I.start,kt),ke=I.end===void 0?ne:Math.min(I.end,kt);!ot.extend&&ne>ke&&(y=ke,ke=ne,ne=y);var Y=_m(T,ne),H=_m(T,ke);if(Y&&H&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var K=_t.createRange();K.setStart(Y.node,Y.offset),ot.removeAllRanges(),ne>ke?(ot.addRange(K),ot.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),ot.addRange(K))}}}}for(_t=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var pt=_t[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}qc=!!Nh,Oh=Nh=null}finally{Pe=u,Q.p=o,P.T=a}}e.current=n,vn=2}}function O_(){if(vn===2){vn=0;var e=Qa,n=Os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var u=Pe;Pe|=4;try{l_(e,n.alternate,n)}finally{Pe=u,Q.p=o,P.T=a}}vn=3}}function z_(){if(vn===4||vn===3){vn=0,it();var e=Qa,n=Os,a=xa,o=S_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,Os=Qa=null,P_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Za=null),ls(a),n=n.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Kt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Q.p,Q.p=2,P.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var T=o[y];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Q.p=u}}(xa&3)!==0&&Nc(),Wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yh?ll++:(ll=0,yh=e):ll=0,cl(0)}}function P_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ko(n)))}function Nc(){return N_(),O_(),z_(),I_()}function I_(){if(vn!==5)return!1;var e=Qa,n=vh;vh=0;var a=ls(xa),o=P.T,u=Q.p;try{Q.p=32>a?32:a,P.T=null,a=xh,xh=null;var f=Qa,y=xa;if(vn=0,Os=Qa=null,xa=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,v_(f.current),m_(f,f.current,y,a),Pe=T,cl(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Kt,f)}catch{}return!0}finally{Q.p=u,P.T=o,P_(e,n)}}function B_(e,n,a){n=pi(a,n),n=Jf(e.stateNode,n,2),e=ka(e,n,2),e!==null&&(Rn(e,2),Wi(e))}function Fe(e,n,a){if(e.tag===3)B_(e,e,a);else for(;n!==null;){if(n.tag===3){B_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){e=pi(a,e),a=Fg(2),o=ka(n,a,2),o!==null&&(Hg(a,o,n,e),Rn(o,2),Wi(o));break}}n=n.return}}function Eh(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new vS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mh=!0,u.add(a),e=ES.bind(null,e,n,a),n.then(e,e))}function ES(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Ee&a)===a&&(nn===4||nn===3&&(Ee&62914560)===Ee&&300>dt()-Rc?(Pe&2)===0&&zs(e,0):gh|=a,Ns===Ee&&(Ns=0)),Wi(e)}function F_(e,n){n===0&&(n=gn()),e=Ar(e,n),e!==null&&(Rn(e,n),Wi(e))}function TS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),F_(e,a)}function bS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),F_(e,a)}function AS(e,n){return Qt(e,n)}var Oc=null,Is=null,Th=!1,zc=!1,bh=!1,Ja=0;function Wi(e){e!==Is&&e.next===null&&(Is===null?Oc=Is=e:Is=Is.next=e),zc=!0,Th||(Th=!0,wS())}function cl(e,n){if(!bh&&zc){bh=!0;do for(var a=!1,o=Oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-re(42|e)+1)-1,f&=u&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k_(o,f))}else f=Ee,f=Nt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||se(o,f)||(a=!0,k_(o,f));o=o.next}while(a);bh=!1}}function RS(){H_()}function H_(){zc=Th=!1;var e=0;Ja!==0&&BS()&&(e=Ja);for(var n=dt(),a=null,o=Oc;o!==null;){var u=o.next,f=G_(o,n);f===0?(o.next=null,a===null?Oc=u:a.next=u,u===null&&(Is=a)):(a=o,(e!==0||(f&3)!==0)&&(zc=!0)),o=u}vn!==0&&vn!==5||cl(e),Ja!==0&&(Ja=0)}function G_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-re(f),T=1<<y,I=u[y];I===-1?((T&a)===0||(T&o)!==0)&&(u[y]=Ke(T,n)):I<=n&&(e.expiredLanes|=T),f&=~T}if(n=We,a=Ee,a=Nt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&D(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||se(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&D(o),ls(a)){case 2:case 8:a=Yt;break;case 32:a=Lt;break;case 268435456:a=Se;break;default:a=Lt}return o=V_.bind(null,e),a=Qt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&D(o),e.callbackPriority=2,e.callbackNode=null,2}function V_(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nc()&&e.callbackNode!==a)return null;var o=Ee;return o=Nt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(E_(e,o,n),G_(e,dt()),e.callbackNode!=null&&e.callbackNode===a?V_.bind(null,e):null)}function k_(e,n){if(Nc())return null;E_(e,n,!0)}function wS(){HS(function(){(Pe&6)!==0?Qt(gt,RS):H_()})}function Ah(){if(Ja===0){var e=Ms;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ja=e}return Ja}function X_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kl(""+e)}function q_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function CS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=X_((u[wn]||null).action),y=o.submitter;y&&(n=(n=y[wn]||null)?X_(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Yl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var I=y?q_(u,y):new FormData(u);Wf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=y?q_(u,y):new FormData(u),Wf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Rh=0;Rh<cf.length;Rh++){var wh=cf[Rh],US=wh.toLowerCase(),DS=wh[0].toUpperCase()+wh.slice(1);Li(US,"on"+DS)}Li(Mm,"onAnimationEnd"),Li(Em,"onAnimationIteration"),Li(Tm,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(Yy,"onTransitionRun"),Li(jy,"onTransitionStart"),Li(Zy,"onTransitionCancel"),Li(bm,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function W_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var T=o[y],I=T.instance,J=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ht){Ql(ht)}u.currentTarget=null,f=I}else for(y=0;y<o.length;y++){if(T=o[y],I=T.instance,J=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ht){Ql(ht)}u.currentTarget=null,f=I}}}}function ye(e,n){var a=n[Do];a===void 0&&(a=n[Do]=new Set);var o=e+"__bubble";a.has(o)||(Y_(n,e,2,!1),a.add(o))}function Ch(e,n,a){var o=0;n&&(o|=4),Y_(a,e,o,n)}var Pc="_reactListening"+Math.random().toString(36).slice(2);function Uh(e){if(!e[Pc]){e[Pc]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(LS.has(a)||Ch(a,!1,e),Ch(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pc]||(n[Pc]=!0,Ch("selectionchange",!1,n))}}function Y_(e,n,a,o){switch(Mv(n)){case 2:var u=sM;break;case 8:u=oM;break;default:u=qh}a=u.bind(null,n,a,e),u=void 0,!Zu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Dh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var T=o.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=X(T),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=f=y;continue t}T=T.parentNode}}o=o.return}Jp(function(){var J=f,ht=Yu(a),_t=[];t:{var et=Am.get(e);if(et!==void 0){var ot=Yl,kt=e;switch(e){case"keypress":if(ql(a)===0)break t;case"keydown":case"keyup":ot=by;break;case"focusin":kt="focus",ot=$u;break;case"focusout":kt="blur",ot=$u;break;case"beforeblur":case"afterblur":ot=$u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=wy;break;case Mm:case Em:case Tm:ot=gy;break;case bm:ot=Uy;break;case"scroll":case"scrollend":ot=fy;break;case"wheel":ot=Ly;break;case"copy":case"cut":case"paste":ot=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=im;break;case"toggle":case"beforetoggle":ot=Oy}var ne=(n&4)!==0,ke=!ne&&(e==="scroll"||e==="scrollend"),Y=ne?et!==null?et+"Capture":null:et;ne=[];for(var H=J,K;H!==null;){var pt=H;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||Y===null||(pt=Lo(H,Y),pt!=null&&ne.push(fl(H,pt,K))),ke)break;H=H.return}0<ne.length&&(et=new ot(et,kt,null,a,ht),_t.push({event:et,listeners:ne}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==Wu&&(kt=a.relatedTarget||a.fromElement)&&(X(kt)||kt[na]))break t;if((ot||et)&&(et=ht.window===ht?ht:(et=ht.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(kt=a.relatedTarget||a.toElement,ot=J,kt=kt?X(kt):null,kt!==null&&(ke=c(kt),ne=kt.tag,kt!==ke||ne!==5&&ne!==27&&ne!==6)&&(kt=null)):(ot=null,kt=J),ot!==kt)){if(ne=em,pt="onMouseLeave",Y="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(ne=im,pt="onPointerLeave",Y="onPointerEnter",H="pointer"),ke=ot==null?et:st(ot),K=kt==null?et:st(kt),et=new ne(pt,H+"leave",ot,a,ht),et.target=ke,et.relatedTarget=K,pt=null,X(ht)===J&&(ne=new ne(Y,H+"enter",kt,a,ht),ne.target=K,ne.relatedTarget=ke,pt=ne),ke=pt,ot&&kt)e:{for(ne=NS,Y=ot,H=kt,K=0,pt=Y;pt;pt=ne(pt))K++;pt=0;for(var $t=H;$t;$t=ne($t))pt++;for(;0<K-pt;)Y=ne(Y),K--;for(;0<pt-K;)H=ne(H),pt--;for(;K--;){if(Y===H||H!==null&&Y===H.alternate){ne=Y;break e}Y=ne(Y),H=ne(H)}ne=null}else ne=null;ot!==null&&j_(_t,et,ot,ne,!1),kt!==null&&ke!==null&&j_(_t,ke,kt,ne,!0)}}t:{if(et=J?st(J):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var Ne=fm;else if(cm(et))if(hm)Ne=Xy;else{Ne=Vy;var qt=Gy}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&qu(J.elementType)&&(Ne=fm):Ne=ky;if(Ne&&(Ne=Ne(e,J))){um(_t,Ne,a,ht);break t}qt&&qt(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&_n(et,"number",et.value)}switch(qt=J?st(J):window,e){case"focusin":(cm(qt)||qt.contentEditable==="true")&&(ps=qt,sf=J,Ho=null);break;case"focusout":Ho=sf=ps=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,ym(_t,a,ht);break;case"selectionchange":if(Wy)break;case"keydown":case"keyup":ym(_t,a,ht)}var de;if(ef)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else ds?om(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(am&&a.locale!=="ko"&&(ds||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&ds&&(de=$p()):(Pa=ht,Qu="value"in Pa?Pa.value:Pa.textContent,ds=!0)),qt=Ic(J,Te),0<qt.length&&(Te=new nm(Te,e,null,a,ht),_t.push({event:Te,listeners:qt}),de?Te.data=de:(de=lm(a),de!==null&&(Te.data=de)))),(de=Py?Iy(e,a):By(e,a))&&(Te=Ic(J,"onBeforeInput"),0<Te.length&&(qt=new nm("onBeforeInput","beforeinput",null,a,ht),_t.push({event:qt,listeners:Te}),qt.data=de)),CS(_t,e,J,a,ht)}W_(_t,n)})}function fl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ic(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lo(e,a),u!=null&&o.unshift(fl(e,u,f)),u=Lo(e,n),u!=null&&o.push(fl(e,u,f))),e.tag===3)return o;e=e.return}return[]}function NS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function j_(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var T=a,I=T.alternate,J=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||J===null||(I=J,u?(J=Lo(a,f),J!=null&&y.unshift(fl(a,J,I))):u||(J=Lo(a,f),J!=null&&y.push(fl(a,J,I)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var OS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function Z_(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(zS,"")}function Q_(e,n){return n=Z_(n),Z_(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||us(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&us(e,""+o);break;case"className":qe(e,"class",o);break;case"tabIndex":qe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(e,a,o);break;case"style":Qp(e,o,f);break;case"data":if(n!=="object"){qe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=kl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=kl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=aa);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=kl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":fe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":fe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":fe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":fe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":fe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":fe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":fe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":fe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":fe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cy.get(a)||a,Ye(e,a,o))}}function Lh(e,n,a,o,u,f){switch(a){case"style":Qp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?us(e,o):(typeof o=="number"||typeof o=="bigint")&&us(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[wn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ye(e,a,o)}}}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,f,y,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var T=f=y=u=null,I=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":y=ht;break;case"checked":I=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ve(e,n,o,ht,a,null)}}Hn(e,f,T,I,J,y,u,!1);return;case"select":ye("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":o=T;default:Ve(e,n,u,T,a,null)}n=f,a=y,e.multiple=!!o,n!=null?rn(e,!!o,n,!1):a!=null&&rn(e,!!o,a,!0);return;case"textarea":ye("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ve(e,n,y,T,a,null)}Vi(e,o,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ve(e,n,I,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<ul.length;o++)ye(ul[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ve(e,n,J,o,a,null)}return;default:if(qu(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Lh(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ve(e,n,T,o,a,null))}function PS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,T=null,I=null,J=null,ht=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=_t;default:o.hasOwnProperty(ot)||Ve(e,n,ot,null,o,_t)}}for(var et in o){var ot=o[et];if(_t=a[et],o.hasOwnProperty(et)&&(ot!=null||_t!=null))switch(et){case"type":f=ot;break;case"name":u=ot;break;case"checked":J=ot;break;case"defaultChecked":ht=ot;break;case"value":y=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==_t&&Ve(e,n,et,ot,o,_t)}}zn(e,y,T,I,J,ht,f,u);return;case"select":ot=y=T=et=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":y=f;default:f!==I&&Ve(e,n,u,f,o,I)}n=T,a=y,o=ot,et!=null?rn(e,!!a,et,!1):!!o!=!!a&&(n!=null?rn(e,!!a,n,!0):rn(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(e,n,T,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ve(e,n,y,u,o,f)}cs(e,et,ot);return;case"option":for(var kt in a)if(et=a[kt],a.hasOwnProperty(kt)&&et!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ve(e,n,kt,null,o,et)}for(I in o)if(et=o[I],ot=a[I],o.hasOwnProperty(I)&&et!==ot&&(et!=null||ot!=null))switch(I){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ve(e,n,I,et,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!o.hasOwnProperty(ne)&&Ve(e,n,ne,null,o,et);for(J in o)if(et=o[J],ot=a[J],o.hasOwnProperty(J)&&et!==ot&&(et!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ve(e,n,J,et,o,ot)}return;default:if(qu(n)){for(var ke in a)et=a[ke],a.hasOwnProperty(ke)&&et!==void 0&&!o.hasOwnProperty(ke)&&Lh(e,n,ke,void 0,o,et);for(ht in o)et=o[ht],ot=a[ht],!o.hasOwnProperty(ht)||et===ot||et===void 0&&ot===void 0||Lh(e,n,ht,et,o,ot);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!o.hasOwnProperty(Y)&&Ve(e,n,Y,null,o,et);for(_t in o)et=o[_t],ot=a[_t],!o.hasOwnProperty(_t)||et===ot||et==null&&ot==null||Ve(e,n,_t,et,o,ot)}function K_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,T=u.duration;if(f&&T&&K_(y)){for(y=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],J=I.startTime;if(J>T)break;var ht=I.transferSize,_t=I.initiatorType;ht&&K_(_t)&&(I=I.responseEnd,y+=ht*(I<T?1:(T-J)/(I-J)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nh=null,Oh=null;function Bc(e){return e.nodeType===9?e:e.ownerDocument}function J_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ph=null;function BS(){var e=window.event;return e&&e.type==="popstate"?e===Ph?!1:(Ph=e,!0):(Ph=null,!1)}var tv=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(e){return ev.resolve(null).then(e).catch(GS)}:tv;function GS(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function nv(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Gs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")hl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hl(a);for(var f=a.firstChild;f;){var y=f.nextSibling,T=f.nodeName;f[Sr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&hl(e.ownerDocument.body);a=u}while(a);Gs(n)}function iv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ih(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Sr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function kS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xi(e.nextSibling),e===null))return null;return e}function av(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Bh(e){return e.data==="$?"||e.data==="$~"}function Fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function xi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hh=null;function rv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return xi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function sv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ov(e,n,a){switch(n=Bc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function hl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var yi=new Map,lv=new Set;function Fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=Q.d;Q.d={f:qS,r:WS,D:YS,C:jS,L:ZS,m:QS,X:JS,S:KS,M:$S};function qS(){var e=ya.f(),n=Uc();return e||n}function WS(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?bg(n):ya.r(e)}var Bs=typeof document>"u"?null:document;function cv(e,n,a){var o=Bs;if(o&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lv.has(u)||(lv.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Ln(n,"link",e),yt(n),o.head.appendChild(n)))}}function YS(e){ya.D(e),cv("dns-prefetch",e,null)}function jS(e,n){ya.C(e,n),cv("preconnect",e,n)}function ZS(e,n,a){ya.L(e,n,a);var o=Bs;if(o&&e&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(e)+'"]';var f=u;switch(n){case"style":f=Fs(e);break;case"script":f=Hs(e)}yi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),yi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(dl(f))||n==="script"&&o.querySelector(pl(f))||(n=o.createElement("link"),Ln(n,"link",e),yt(n),o.head.appendChild(n)))}}function QS(e,n){ya.m(e,n);var a=Bs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(o)+'"][href="'+ve(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Hs(e)}if(!yi.has(f)&&(e=v({rel:"modulepreload",href:e},n),yi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(f)))return}o=a.createElement("link"),Ln(o,"link",e),yt(o),a.head.appendChild(o)}}}function KS(e,n,a){ya.S(e,n,a);var o=Bs;if(o&&e){var u=W(o).hoistableStyles,f=Fs(e);n=n||"default";var y=u.get(f);if(!y){var T={loading:0,preload:null};if(y=o.querySelector(dl(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=yi.get(f))&&Gh(e,a);var I=y=o.createElement("link");yt(I),Ln(I,"link",e),I._p=new Promise(function(J,ht){I.onload=J,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(f,y)}}}function JS(e,n){ya.X(e,n);var a=Bs;if(a&&e){var o=W(a).hoistableScripts,u=Hs(e),f=o.get(u);f||(f=a.querySelector(pl(u)),f||(e=v({src:e,async:!0},n),(n=yi.get(u))&&Vh(e,n),f=a.createElement("script"),yt(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function $S(e,n){ya.M(e,n);var a=Bs;if(a&&e){var o=W(a).hoistableScripts,u=Hs(e),f=o.get(u);f||(f=a.querySelector(pl(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=yi.get(u))&&Vh(e,n),f=a.createElement("script"),yt(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function uv(e,n,a,o){var u=(u=bt.current)?Fc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Fs(a.href),a=W(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fs(a.href);var f=W(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(dl(e)))&&!f._p&&(y.instance=f,y.state.loading=5),yi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(e,a),f||tM(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Hs(a),a=W(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Fs(e){return'href="'+ve(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function fv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function tM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ln(n,"link",a),yt(n),e.head.appendChild(n))}function Hs(e){return'[src="'+ve(e)+'"]'}function pl(e){return"script[async]"+e}function hv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(o)return n.instance=o,yt(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),yt(o),Ln(o,"style",u),Hc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Fs(a.href);var f=e.querySelector(dl(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;o=fv(a),(u=yi.get(u))&&Gh(o,u),f=(e.ownerDocument||e).createElement("link"),yt(f);var y=f;return y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),Ln(f,"link",o),n.state.loading|=4,Hc(f,a.precedence,e),n.instance=f;case"script":return f=Hs(a.src),(u=e.querySelector(pl(f)))?(n.instance=u,yt(u),u):(o=a,(u=yi.get(f))&&(o=v({},a),Vh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),yt(u),Ln(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hc(o,a.precedence,e));return n.instance}function Hc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var T=o[y];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gc=null;function dv(e,n,a){if(Gc===null){var o=new Map,u=Gc=new Map;u.set(a,o)}else u=Gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Sr]||f[tn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var T=o.get(y);T?T.push(f):o.set(y,[f])}}return o}function pv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function eM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Fs(o.href),f=n.querySelector(dl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,yt(f);return}f=n.ownerDocument||n,o=fv(o),(u=yi.get(u))&&Gh(o,u),f=f.createElement("link"),yt(f);var y=f;y._p=new Promise(function(T,I){y.onload=T,y.onerror=I}),Ln(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kh=0;function iM(e,n){return e.stylesheets&&e.count===0&&Xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&kh===0&&(kh=62500*IS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>kh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kc=null;function Xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kc=new Map,n.forEach(aM,e),kc=null,Vc.call(e))}function aM(e,n){if(!(n.state.loading&4)){var a=kc.get(e);if(a)var o=a.get(null);else{a=new Map,kc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=Vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ml={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function rM(e,n,a,o,u,f,y,T,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function gv(e,n,a,o,u,f,y,T,I,J,ht,_t){return e=new rM(e,n,a,y,I,J,ht,_t,T),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=Mf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Af(f),e}function _v(e){return e?(e=_s,e):_s}function vv(e,n,a,o,u,f){u=_v(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ka(e,o,n),a!==null&&(Zn(a,e,n),Yo(a,e,n))}function xv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xh(e,n){xv(e,n),(e=e.alternate)&&xv(e,n)}function yv(e){if(e.tag===13||e.tag===31){var n=Ar(e,67108864);n!==null&&Zn(n,e,67108864),Xh(e,67108864)}}function Sv(e){if(e.tag===13||e.tag===31){var n=li();n=xr(n);var a=Ar(e,n);a!==null&&Zn(a,e,n),Xh(e,n)}}var qc=!0;function sM(e,n,a,o){var u=P.T;P.T=null;var f=Q.p;try{Q.p=2,qh(e,n,a,o)}finally{Q.p=f,P.T=u}}function oM(e,n,a,o){var u=P.T;P.T=null;var f=Q.p;try{Q.p=8,qh(e,n,a,o)}finally{Q.p=f,P.T=u}}function qh(e,n,a,o){if(qc){var u=Wh(o);if(u===null)Dh(e,n,o,Wc,a),Ev(e,o);else if(cM(u,e,n,a,o))o.stopPropagation();else if(Ev(e,o),n&4&&-1<lM.indexOf(e)){for(;u!==null;){var f=rt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Dt(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var I=1<<31-re(y);T.entanglements[1]|=I,y&=~I}Wi(f),(Pe&6)===0&&(wc=dt()+500,cl(0))}}break;case 31:case 13:T=Ar(f,2),T!==null&&Zn(T,f,2),Uc(),Xh(f,2)}if(f=Wh(o),f===null&&Dh(e,n,o,Wc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Dh(e,n,o,null,a)}}function Wh(e){return e=Yu(e),Yh(e)}var Wc=null;function Yh(e){if(Wc=null,e=X(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Wc=e,null}function Mv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case gt:return 2;case Yt:return 8;case Lt:case Ht:return 32;case Se:return 268435456;default:return 32}default:return 32}}var jh=!1,tr=null,er=null,nr=null,gl=new Map,_l=new Map,ir=[],lM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ev(e,n){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(n.pointerId)}}function vl(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&yv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function cM(e,n,a,o,u){switch(n){case"focusin":return tr=vl(tr,e,n,a,o,u),!0;case"dragenter":return er=vl(er,e,n,a,o,u),!0;case"mouseover":return nr=vl(nr,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return gl.set(f,vl(gl.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,_l.set(f,vl(_l.get(f)||null,e,n,a,o,u)),!0}return!1}function Tv(e){var n=X(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,yr(e.priority,function(){Sv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,yr(e.priority,function(){Sv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Wu=o,a.target.dispatchEvent(o),Wu=null}else return n=rt(a),n!==null&&yv(n),e.blockedOn=a,!1;n.shift()}return!0}function bv(e,n,a){Yc(e)&&a.delete(n)}function uM(){jh=!1,tr!==null&&Yc(tr)&&(tr=null),er!==null&&Yc(er)&&(er=null),nr!==null&&Yc(nr)&&(nr=null),gl.forEach(bv),_l.forEach(bv)}function jc(e,n){e.blockedOn===n&&(e.blockedOn=null,jh||(jh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,uM)))}var Zc=null;function Av(e){Zc!==e&&(Zc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Zc===e&&(Zc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yh(o||a)===null)continue;break}var f=rt(a);f!==null&&(e.splice(n,3),n-=3,Wf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Gs(e){function n(I){return jc(I,e)}tr!==null&&jc(tr,e),er!==null&&jc(er,e),nr!==null&&jc(nr,e),gl.forEach(n),_l.forEach(n);for(var a=0;a<ir.length;a++){var o=ir[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Tv(a),a.blockedOn===null&&ir.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[wn]||null;if(typeof f=="function")y||Av(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[wn]||null)T=y.formAction;else if(Yh(u)!==null)continue}else T=y.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Av(a)}}}function Rv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zh(e){this._internalRoot=e}Qc.prototype.render=Zh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=li();vv(a,o,e,n,null,null)},Qc.prototype.unmount=Zh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vv(e.current,2,null,e,null,null),Uc(),n[na]=null}};function Qc(e){this._internalRoot=e}Qc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Uo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ir.length&&n!==0&&n<ir[a].priority;a++);ir.splice(a,0,e),a===0&&Tv(e)}};var wv=t.version;if(wv!=="19.2.7")throw Error(r(527,wv,"19.2.7"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var fM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{Kt=Kc.inject(fM),jt=Kc}catch{}}return yl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=zg,f=Pg,y=Ig;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=gv(e,1,!1,null,null,a,o,null,u,f,y,Rv),e[na]=n.current,Uh(e),new Zh(n)},yl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=zg,y=Pg,T=Ig,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=gv(e,1,!0,n,a??null,o,u,I,f,y,T,Rv),n.context=_v(null),a=n.current,o=li(),o=xr(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,Rn(n,a),Wi(n),e[na]=n.current,Uh(e),new Qc(n)},yl.version="19.2.7",yl}var Fv;function TM(){if(Fv)return td.exports;Fv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),td.exports=EM(),td.exports}var bM=TM();const AM=ox(bM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lx=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=le.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>le.createElement("svg",{ref:m,...wM,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:lx("lucide",l),...d},[...h.map(([p,g])=>le.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=(s,t)=>{const i=le.forwardRef(({className:r,...l},c)=>le.createElement(CM,{ref:c,iconNode:t,className:lx(`lucide-${RM(s)}`,r),...l}));return i.displayName=`${s}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=ei("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=ei("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=ei("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ei("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=ei("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=ei("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=ei("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=ei("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=ei("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=ei("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=ei("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=ei("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=ei("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=ei("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);var fx=class{is(s){return this instanceof s}as(s){return this instanceof s?this:null}},vr=class extends fx{constructor(){super()}get log(){return console.log.bind(console,this,this.toString())}};function GM(s,t=!0){if(!t)return s;switch(s){case 1:return-1;case-1:return 1}}function VM(s,t){return t===-1?Array.from(s).reverse():s}function kM(s){return Array.from(s).reverse()}var Jr,$r,ns,Ti=(ns=class extends vr{constructor(i,r){super();ln(this,Jr);ln(this,$r);Qe(this,Jr,Nl(i)),Qe(this,$r,Nl(r))}get A(){return lt(this,Jr)}get B(){return lt(this,$r)}isIdentical(i){const r=i.as(ns);return!!(r!=null&&r.A.isIdentical(this.A)&&(r!=null&&r.B.isIdentical(this.B)))}invert(){return new ns(lt(this,$r),lt(this,Jr))}*experimentalExpand(i=1,r){r??(r=1/0),r===0?yield i===1?this:this.invert():i===1?(yield*this.A.experimentalExpand(1,r-1),yield*this.B.experimentalExpand(1,r-1),yield*this.A.experimentalExpand(-1,r-1),yield*this.B.experimentalExpand(-1,r-1)):(yield*this.B.experimentalExpand(1,r-1),yield*this.A.experimentalExpand(1,r-1),yield*this.B.experimentalExpand(-1,r-1),yield*this.A.experimentalExpand(-1,r-1))}toString(i){return`[${lt(this,Jr).toString(i)}, ${lt(this,$r).toString(i)}]`}},Jr=new WeakMap,$r=new WeakMap,ns),fo,ho,is,bi=(is=class extends vr{constructor(i,r){super();ln(this,fo);ln(this,ho);Qe(this,fo,Nl(i)),Qe(this,ho,Nl(r))}get A(){return lt(this,fo)}get B(){return lt(this,ho)}isIdentical(i){const r=i.as(is);return!!(r!=null&&r.A.isIdentical(this.A)&&(r!=null&&r.B.isIdentical(this.B)))}invert(){return new is(lt(this,fo),lt(this,ho).invert())}*experimentalExpand(i,r){r??(r=1/0),r===0?yield i===1?this:this.invert():(yield*this.A.experimentalExpand(1,r-1),yield*this.B.experimentalExpand(i,r-1),yield*this.A.experimentalExpand(-1,r-1))}toString(i){return`[${this.A.toString(i)}: ${this.B.toString(i)}]`}},fo=new WeakMap,ho=new WeakMap,is),Hd=2147483647,Gd="2^31 - 1",XM=-2147483648,ts,ax,qM=(ax=class{constructor(){ln(this,ts,[])}push(s){lt(this,ts).push(s)}experimentalPushAlg(s){for(const t of s.childAlgNodes())this.push(t)}experimentalNumAlgNodes(){return lt(this,ts).length}toAlg(){return new ae(lt(this,ts))}reset(){Qe(this,ts,[])}},ts=new WeakMap,ax),hr,po,Il=(po=class extends vr{constructor(i){super();ln(this,hr);if(i.includes(`
`)||i.includes("\r"))throw new Error("LineComment cannot contain newline");Qe(this,hr,i)}get text(){return lt(this,hr)}isIdentical(i){const r=i;return i.is(po)&&lt(this,hr)===lt(r,hr)}invert(){return this}*experimentalExpand(i=1,r=1/0){yield this}toString(i){return`//${lt(this,hr)}`}},hr=new WeakMap,po),es=class hx extends vr{toString(t){return`
`}isIdentical(t){return t.is(hx)}invert(){return this}*experimentalExpand(t=1,i=1/0){yield this}},Ji=class dx extends vr{constructor(){super(...arguments);Fr(this,"experimentalNISSGrouping")}toString(i){return"."}isIdentical(i){return i.is(dx)}invert(){return this}*experimentalExpand(i=1,r=1/0){yield this}};function Jc(s,t){return s?parseInt(s,10):t}var Gv=/^(\d+)?('?)/,WM=/^[_\dA-Za-z]/,YM=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,jM=/^[^\n]*/,ZM=/^(-?\d+), ?/,QM=/^(-?\d+)\)/;function px(s){return new Pp().parseAlg(s)}function KM(s){return new Pp().parseMove(s)}function JM(s){return new Pp().parseQuantumMove(s)}var Ul=Symbol("startCharIndex"),Dl=Symbol("endCharIndex");function En(s,t,i){const r=s;return r[Ul]=t,r[Dl]=i,r}function $M(s,t){return Ul in s&&(t[Ul]=s[Ul]),Dl in s&&(t[Dl]=s[Dl]),t}var Qn,ie,mo,rx,Pp=(rx=class{constructor(){ln(this,Qn,"");ln(this,ie,0);ln(this,mo,[])}parseAlg(s){Qe(this,Qn,s),Qe(this,ie,0);const t=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();const i=Array.from(t.childAlgNodes());if(lt(this,mo).length>0)for(const h of lt(this,mo).reverse())i.push(h);const r=new ae(i),{[Ul]:l,[Dl]:c}=t;return En(r,l,c),r}parseMove(s){Qe(this,Qn,s),Qe(this,ie,0);const t=this.parseMoveImpl();return this.mustBeAtEndOfInput(),t}parseQuantumMove(s){Qe(this,Qn,s),Qe(this,ie,0);const t=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),t}mustBeAtEndOfInput(){if(lt(this,ie)!==lt(this,Qn).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(s){let t=lt(this,ie),i=lt(this,ie);const r=new qM;let l=!1;const c=h=>{if(l)throw new Error(`Unexpected character at index ${h}. Are you missing a space?`)};for(;lt(this,ie)<lt(this,Qn).length;){const h=lt(this,ie);if(s.includes(lt(this,Qn)[lt(this,ie)]))return En(r.toAlg(),t,i);if(this.tryConsumeNext(" "))l=!1,r.experimentalNumAlgNodes()===0&&(t=lt(this,ie));else if(WM.test(lt(this,Qn)[lt(this,ie)])){c(h);const d=this.parseMoveImpl();r.push(d),l=!0,i=lt(this,ie)}else if(this.tryConsumeNext("(")){c(h);const d=this.tryRegex(ZM);if(d){const m=d[1],p=lt(this,ie),g=this.parseRegex(QM),v=En(new Ct(new so("U_SQ_"),parseInt(m,10)),h+1,h+1+m.length),_=En(new Ct(new so("D_SQ_"),parseInt(g[1],10)),p,lt(this,ie)-1),M=En(new ae([v,_]),h+1,lt(this,ie)-1);r.push(En(new Bi(M),h,lt(this,ie))),l=!0,i=lt(this,ie)}else{const m=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");const p=this.parseAmount();r.push(En(new Bi(m,p),h,lt(this,ie))),l=!0,i=lt(this,ie)}}else if(this.tryConsumeNext("^")){this.mustConsumeNext("(");const d=this.parseAlgWithStopping([")"]);this.popNext();const m=new Bi(d,-1),p=new Ji;m.experimentalNISSPlaceholder=p,p.experimentalNISSGrouping=m,lt(this,mo).push(m),r.push(p)}else if(this.tryConsumeNext("[")){c(h);const d=this.parseAlgWithStopping([",",":"]),m=this.popNext(),p=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let g;switch(m){case":":{g=En(new bi(d,p),h,lt(this,ie)),l=!0,i=lt(this,ie);break}case",":{g=En(new Ti(d,p),h,lt(this,ie)),l=!0,i=lt(this,ie);break}default:throw new Error("unexpected parsing error")}const v=lt(this,ie),_=this.parseAmount();if(_===1)r.push(g);else{const M=En(new ae([g]),h,v),E=En(new Bi(M,_),h,lt(this,ie));r.push(E)}l=!0,i=lt(this,ie)}else if(this.tryConsumeNext(`
`))r.push(En(new es,h,lt(this,ie))),l=!1,i=lt(this,ie);else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){c(h);const[d]=this.parseRegex(jM);r.push(En(new Il(d),h,lt(this,ie))),l=!1,i=lt(this,ie)}else r.push(En(new Ct("_SLASH_"),h,lt(this,ie))),l=!0,i=lt(this,ie);else if(this.tryConsumeNext("."))c(h),r.push(En(new Ji,h,lt(this,ie))),l=!0,i=lt(this,ie);else throw new Error(`Unexpected character: ${this.popNext()}`)}if(lt(this,ie)!==lt(this,Qn).length)throw new Error("did not finish parsing?");if(s.length>0)throw new Error("expected stopping");return En(r.toAlg(),t,i)}parseQuantumMoveImpl(){const[,,,s,t,i]=this.parseRegex(YM);return new so(i,Jc(t,void 0),Jc(s,void 0))}parseMoveImpl(){const s=lt(this,ie);if(this.tryConsumeNext("/"))return En(new Ct("_SLASH_"),s,lt(this,ie));let t=this.parseQuantumMoveImpl(),[i,r]=this.parseAmountAndTrackEmptyAbsAmount();const l=this.parseMoveSuffix();if(l){if(i<0)throw new Error("uh-oh");if((l==="++"||l==="--")&&i!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((l==="++"||l==="--")&&!r)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((l==="+"||l==="-")&&r)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");l.startsWith("+")&&(t=t.modified({family:`${t.family}_${l==="+"?"PLUS":"PLUSPLUS"}_`})),l.startsWith("-")&&(t=t.modified({family:`${t.family}_${l==="-"?"PLUS":"PLUSPLUS"}_`}),i*=-1)}return En(new Ct(t,i),s,lt(this,ie))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){const s=lt(this,ie),[,t,i]=this.parseRegex(Gv);if(t!=null&&t.startsWith("0")&&t!=="0")throw new Error(`Error at char index ${s}: An amount can only start with 0 if it's exactly the digit 0.`);return[Jc(t,1)*(i==="'"?-1:1),!t]}parseAmount(){const s=lt(this,ie),[,t,i]=this.parseRegex(Gv);if(t!=null&&t.startsWith("0")&&t!=="0")throw new Error(`Error at char index ${s}: An amount number can only start with 0 if it's exactly the digit 0.`);return Jc(t,1)*(i==="'"?-1:1)}parseRegex(s){const t=s.exec(this.remaining());if(t===null)throw new Error("internal parsing error");return Qe(this,ie,lt(this,ie)+t[0].length),t}tryRegex(s){const t=s.exec(this.remaining());return t===null?null:(Qe(this,ie,lt(this,ie)+t[0].length),t)}remaining(){return lt(this,Qn).slice(lt(this,ie))}popNext(){const s=lt(this,Qn)[lt(this,ie)];return Kh(this,ie)._++,s}tryConsumeNext(s){return lt(this,Qn)[lt(this,ie)]===s?(Kh(this,ie)._++,!0):!1}mustConsumeNext(s){const t=this.popNext();if(t!==s)throw new Error(`expected \`${s}\` while parsing, encountered ${t}`);return t}},Qn=new WeakMap,ie=new WeakMap,mo=new WeakMap,rx),Vv=new Set;function mx(s){Vv.has(s)||(console.warn(s),Vv.add(s))}var Vd=class{constructor(s,t=1){Fr(this,"quantum");Fr(this,"amount");if(this.quantum=s,this.amount=t,!Number.isInteger(this.amount)||this.amount<XM||this.amount>Hd)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${Gd}.`)}suffix(){let s="";const t=Math.abs(this.amount);return t!==1&&(s+=t),this.amount<0&&(s+="'"),s}isIdentical(s){return this.quantum.isIdentical(s.quantum)&&this.amount===s.amount}*experimentalExpand(s,t){const i=Math.abs(this.amount),r=GM(s,this.amount<0);for(let l=0;l<i;l++)yield*this.quantum.experimentalExpand(r,t)}},wa,Nn,On,as,so=(as=class extends fx{constructor(i,r,l){super();ln(this,wa);ln(this,Nn);ln(this,On);if(Qe(this,wa,i),Qe(this,Nn,r??null),Qe(this,On,l??null),Object.freeze(this),lt(this,Nn)!==null&&(!Number.isInteger(lt(this,Nn))||lt(this,Nn)<1||lt(this,Nn)>Hd))throw new Error(`QuantumMove inner layer must be a positive integer below ${Gd}.`);if(lt(this,On)!==null&&(!Number.isInteger(lt(this,On))||lt(this,On)<1||lt(this,On)>Hd))throw new Error(`QuantumMove outer layer must be a positive integer below ${Gd}.`);if(lt(this,On)!==null&&lt(this,Nn)!==null&&lt(this,Nn)<=lt(this,On))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(lt(this,On)!==null&&lt(this,Nn)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(i){return JM(i)}modified(i){return new as(i.family??lt(this,wa),i.innerLayer??lt(this,Nn),i.outerLayer??lt(this,On))}isIdentical(i){const r=i;return i.is(as)&&lt(this,wa)===lt(r,wa)&&lt(this,Nn)===lt(r,Nn)&&lt(this,On)===lt(r,On)}get family(){return lt(this,wa)}get outerLayer(){return lt(this,On)}get innerLayer(){return lt(this,Nn)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(i){let r=lt(this,wa);return lt(this,Nn)!==null&&(r=String(lt(this,Nn))+r,lt(this,On)!==null&&(r=`${String(lt(this,On))}-${r}`)),r}},wa=new WeakMap,Nn=new WeakMap,On=new WeakMap,as),bn,Iu,Pl,kd,ji,Ct=(ji=class extends vr{constructor(...i){super();ln(this,Pl);ln(this,bn);ln(this,Iu);if(typeof i[0]=="string")if(i[1]??null){Qe(this,bn,new Vd(so.fromString(i[0]),i[1]));return}else return ji.fromString(i[0]);Qe(this,bn,new Vd(i[0],i[1]))}isIdentical(i){const r=i.as(ji);return!!r&&lt(this,bn).isIdentical(lt(r,bn))}invert(){return $M(this,new ji(lt(this,bn).quantum,Si(this,Pl,kd).call(this)?this.amount:-this.amount))}*experimentalExpand(i=1){i===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return lt(this,bn).quantum}modified(i){return new ji(lt(this,bn).quantum.modified(i),i.amount??this.amount)}static fromString(i){return KM(i)}get amount(){return lt(this,bn).amount}get type(){return mx("deprecated: type"),"blockMove"}get family(){return lt(this,bn).quantum.family??void 0}get outerLayer(){return lt(this,bn).quantum.outerLayer??void 0}get innerLayer(){return lt(this,bn).quantum.innerLayer??void 0}toString(i){if((i==null?void 0:i.notation)!=="LGN"){if(Si(this,Pl,kd).call(this))return"/";if(this.family.endsWith("_PLUS_"))return lt(this,bn).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){const r=Math.abs(this.amount);return lt(this,bn).quantum.toString().slice(0,-10)+(r===1?"":r)+(this.amount<0?"--":"++")}}return lt(this,bn).quantum.toString(i)+lt(this,bn).suffix()}},bn=new WeakMap,Iu=new WeakMap,Pl=new WeakSet,kd=function(){return this.isIdentical(lt(this,Iu)??Qe(this,Iu,new ji("_SLASH_")))},ji),tE=class{constructor(){Fr(this,"quantumU_SQ_",null);Fr(this,"quantumD_SQ_",null)}format(s,t){if((t==null?void 0:t.notation)==="LGN"||s.amount!==1)return null;const i=this.tuple(s);return i?`(${i.map(r=>r.amount).join(", ")})`:null}tuple(s){var i,r;if(s.amount!==1)return null;this.quantumU_SQ_||(this.quantumU_SQ_=new so("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new so("D_SQ_"));const t=s.alg;if(t.experimentalNumChildAlgNodes()===2){const[l,c]=t.childAlgNodes();if((i=l.as(Ct))!=null&&i.quantum.isIdentical(this.quantumU_SQ_)&&((r=c.as(Ct))!=null&&r.quantum.isIdentical(this.quantumD_SQ_)))return[l,c]}return null}},ad=new tE,Kn,Bu,gx,La,Bi=(La=class extends vr{constructor(i,r){super();ln(this,Bu);ln(this,Kn);Fr(this,"experimentalNISSPlaceholder");const l=Nl(i);Qe(this,Kn,new Vd(l,r))}isIdentical(i){const r=i;return i.is(La)&&lt(this,Kn).isIdentical(lt(r,Kn))}get alg(){return lt(this,Kn).quantum}get amount(){return lt(this,Kn).amount}modified(i){return new La(i.alg??this.alg,i.amount??this.amount)}get experimentalRepetitionSuffix(){return lt(this,Kn).suffix()}invert(){const i=ad.tuple(this);if(i){const[r,l]=i;return new La(new ae([r.invert(),l.invert()]))}return new La(lt(this,Kn).quantum,-lt(this,Kn).amount)}*experimentalExpand(i=1,r){r??(r=1/0),r===0?yield i===1?this:this.invert():yield*lt(this,Kn).experimentalExpand(i,r-1)}static fromString(){throw new Error("unimplemented")}toString(i){return ad.format(this,i)??`${Si(this,Bu,gx).call(this,i)}${lt(this,Kn).suffix()}`}experimentalAsSquare1Tuple(){return ad.tuple(this)}},Kn=new WeakMap,Bu=new WeakSet,gx=function(i){const r=lt(this,Kn).quantum.toString(i),l=this.alg.childAlgNodes(),{value:c}=l.next();return l.next().done&&(c!=null&&c.is(Ti)||c!=null&&c.is(bi))?r:`(${r})`},La);function Ra(s,t){return s instanceof t}function eE(s){return Ra(s,Bi)||Ra(s,Il)||Ra(s,Ti)||Ra(s,bi)||Ra(s,Ct)||Ra(s,es)||Ra(s,Ji)}var nE="any-direction",_x=class{constructor(s={}){this.config=s}cancelQuantum(){const{cancel:s}=this.config;return s===!0?nE:s===!1?"none":(s==null?void 0:s.directional)??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){const{cancel:s}=this.config;return s===!0||s===!1?"canonical-centered":s!=null&&s.puzzleSpecificModWrap?s==null?void 0:s.puzzleSpecificModWrap:(s==null?void 0:s.directional)==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){var s;return((s=this.config.puzzleLoader)==null?void 0:s.puzzleSpecificSimplifyOptions)??this.config.puzzleSpecificSimplifyOptions}};function iE(s,t){return s*Math.sign(t.amount)>=0}function aE(s,t,i=0){return((s-i)%t+t)%t+i}function rE(s,t,i){var m;const r=new _x(i),l=Array.from(s.childAlgNodes());let c=[t];function h(){return new ae([...l,...c])}function d(p){var E;if(r.cancelPuzzleSpecificModWrap()==="none")return p;const g=(E=r.puzzleSpecificSimplifyOptions())==null?void 0:E.quantumMoveOrder;if(!g)return p;const v=g(t.quantum);let _;switch(r.cancelPuzzleSpecificModWrap()){case"gravity":{_=-Math.floor((v-(p.amount<0?0:1))/2);break}case"canonical-centered":{_=-Math.floor((v-1)/2);break}case"canonical-positive":{_=0;break}case"preserve-sign":{_=p.amount<0?1-v:0;break}default:throw new Error("Unknown mod wrap")}const M=aE(p.amount,v,_);return p.modified({amount:M})}if(r.cancelAny()){let p;const g=(m=r.puzzleSpecificSimplifyOptions())==null?void 0:m.axis;if(g)p=A=>g.areQuantumMovesSameAxis(t.quantum,A.quantum);else{const A=t.quantum.toString();p=S=>S.quantum.toString()===A}const v=r.cancelQuantum()==="same-direction",_=new Map;_.set(t.quantum.toString(),Math.sign(t.amount));let M;for(M=l.length-1;M>=0;M--){const A=l[M].as(Ct);if(!A||!p(A))break;const S=A.quantum.toString();if(v){const x=_.get(S);if(x&&!iE(x,A))break;_.set(S,Math.sign(A.amount))}}const E=[...l.splice(M+1),t];if(g)c=g.simplifySameAxisMoves(E,r.cancelPuzzleSpecificModWrap()!=="none");else{const A=E.reduce((S,x)=>S+x.amount,0);if(_.size!==1)throw new Error("Internal error: multiple quantums when one was expected");c=[new Ct(t.quantum,A)]}}return c=c.map(p=>d(p)).filter(p=>p.amount!==0),h()}function sE(s,t,i){const r=t.as(Ct);return r?rE(s,r,i):new ae([...s.childAlgNodes(),t])}function oE(s,t,i){if(t.is(Bi))return s.traverseGrouping(t,i);if(t.is(Ct))return s.traverseMove(t,i);if(t.is(Ti))return s.traverseCommutator(t,i);if(t.is(bi))return s.traverseConjugate(t,i);if(t.is(Ji))return s.traversePause(t,i);if(t.is(es))return s.traverseNewline(t,i);if(t.is(Il))return s.traverseLineComment(t,i);throw new Error("unknown AlgNode")}function lE(s){if(s.is(Bi)||s.is(Ct)||s.is(Ti)||s.is(bi)||s.is(Ji)||s.is(es)||s.is(Il))return s;throw new Error("internal error: expected AlgNode")}var cE=class{traverseAlgNode(s,t){return oE(this,s,t)}traverseIntoAlgNode(s,t){return lE(this.traverseAlgNode(s,t))}};function uE(s,t){const i=new s;return i.traverseAlg.bind(i)}var Fu,hi,Xd,Rl,qd,sx,fE=(sx=class extends cE{constructor(){super(...arguments);ln(this,hi);ln(this,Fu)}*traverseAlg(t,i){if(i.depth===0){yield*t.childAlgNodes();return}let r=[];const l=Si(this,hi,Rl).call(this,i);for(const c of t.childAlgNodes())for(const h of this.traverseAlgNode(c,l))r=Array.from(sE(new ae(r),h,l).childAlgNodes());for(const c of r)yield c}*traverseGrouping(t,i){if(i.depth===0){yield t;return}if(t.amount===0)return;const r=new Bi(this.traverseAlg(t.alg,Si(this,hi,Rl).call(this,i)),t.amount);if(r.alg.experimentalIsEmpty())return;const l=Si(this,hi,Xd).call(this).get(t);l&&(r.experimentalNISSPlaceholder=l,l.experimentalNISSGrouping=r),yield r}*traverseMove(t,i){yield t}*traverseCommutator(t,i){if(i.depth===0){yield t;return}const r=Si(this,hi,Rl).call(this,i),l=new Ti(this.traverseAlg(t.A,r),this.traverseAlg(t.B,r));l.A.experimentalIsEmpty()||l.B.experimentalIsEmpty()||l.A.isIdentical(l.B)||l.A.isIdentical(l.B.invert())||Si(this,hi,qd).call(this,l.A,l.B,i)||(yield l)}*traverseConjugate(t,i){if(i.depth===0){yield t;return}const r=Si(this,hi,Rl).call(this,i),l=new bi(this.traverseAlg(t.A,r),this.traverseAlg(t.B,r));if(!l.B.experimentalIsEmpty()){if(l.A.experimentalIsEmpty()||l.A.isIdentical(l.B)||l.A.isIdentical(l.B.invert())||Si(this,hi,qd).call(this,l.A,l.B,i)){yield*t.B.childAlgNodes();return}yield l}}*traversePause(t,i){if(t.experimentalNISSGrouping){const r=new Ji;Si(this,hi,Xd).call(this).set(t.experimentalNISSGrouping,r),yield r}else yield t}*traverseNewline(t,i){yield t}*traverseLineComment(t,i){yield t}},Fu=new WeakMap,hi=new WeakSet,Xd=function(){return lt(this,Fu)??Qe(this,Fu,new Map)},Rl=function(t){return{...t,depth:t.depth?t.depth-1:null}},qd=function(t,i,r){var l,c,h,d;if(t.experimentalNumChildAlgNodes()===1&&i.experimentalNumChildAlgNodes()===1){const m=(l=Array.from(t.childAlgNodes())[0])==null?void 0:l.as(Ct),p=(c=Array.from(i.childAlgNodes())[0])==null?void 0:c.as(Ct);if(!(m&&p))return!1;if(p.quantum.isIdentical(m.quantum)||(d=(h=new _x(r).puzzleSpecificSimplifyOptions())==null?void 0:h.axis)!=null&&d.areQuantumMovesSameAxis(m.quantum,p.quantum))return!0}return!1},sx),hE=uE(fE);function kv(s){if(!s)return[];if(Ra(s,ae))return s.childAlgNodes();if(typeof s=="string")return px(s).childAlgNodes();const t=s;if(typeof t[Symbol.iterator]=="function")return t;throw new Error("Invalid AlgNode")}function Nl(s){return Ra(s,ae)?s:new ae(s)}var Jn,Zi,ae=(Zi=class extends vr{constructor(i){super();ln(this,Jn);Qe(this,Jn,Array.from(kv(i)));for(const r of lt(this,Jn))if(!eE(r))throw new Error("An alg can only contain alg nodes.")}isIdentical(i){const r=i;if(!i.is(Zi))return!1;const l=Array.from(lt(this,Jn)),c=Array.from(lt(r,Jn));if(l.length!==c.length)return!1;for(let h=0;h<l.length;h++)if(!l[h].isIdentical(c[h]))return!1;return!0}invert(){return new Zi(kM(Array.from(lt(this,Jn)).map(i=>i.invert())))}*experimentalExpand(i=1,r){r??(r=1/0);for(const l of VM(lt(this,Jn),i))yield*l.experimentalExpand(i,r)}expand(i){return new Zi(this.experimentalExpand(1,(i==null?void 0:i.depth)??1/0))}*experimentalLeafMoves(){for(const i of this.experimentalExpand())i.is(Ct)&&(yield i)}concat(i){return new Zi(Array.from(lt(this,Jn)).concat(Array.from(kv(i))))}experimentalIsEmpty(){for(const i of lt(this,Jn))return!1;return!0}static fromString(i){return px(i)}units(){return this.childAlgNodes()}*childAlgNodes(){for(const i of lt(this,Jn))yield i}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(lt(this,Jn)).length}get type(){return mx("deprecated: type"),"sequence"}toString(i){var c,h;let r="",l=null;for(const d of lt(this,Jn)){l&&(r+=dE(l,d));const m=(c=d.as(Ji))==null?void 0:c.experimentalNISSGrouping;if(m){if(m.amount!==-1)throw new Error("Invalid NISS Grouping amount!");r+=`^(${m.alg.toString(i)})`}else(h=d.as(Bi))!=null&&h.experimentalNISSPlaceholder||(r+=d.toString(i));l=d}return r}experimentalSimplify(i){return new Zi(hE(this,i??{}))}simplify(i){return this.experimentalSimplify(i)}},Jn=new WeakMap,Zi);function dE(s,t){var i;return s.is(es)||t.is(es)||(i=t.as(Bi))!=null&&i.experimentalNISSPlaceholder?"":s.is(Il)&&!t.is(es)?`
`:" "}new ae([new Ct("R",1),new Ct("U",1),new Ct("R",-1),new Ct("U",1),new Ct("R",1),new Ct("U",-2),new Ct("R",-1)]),new ae([new Ct("R",1),new Ct("U",2),new Ct("R",-1),new Ct("U",-1),new Ct("R",1),new Ct("U",-1),new Ct("R",-1)]),new ae([new Ti(new ae([new Ct("R",1),new Ct("U",1),new Ct("R",-2)]),new ae([new bi(new ae([new Ct("R",1)]),new ae([new Ct("U",1)]))]))]),new ae([new Ct("R",1),new Ct("U",-1),new Ct("L",-1),new Ct("U",1),new Ct("R",-1),new Ct("U",-1),new Ct("L",1),new Ct("U",1)]),new ae([new Ct("x",-1),new Ti(new ae([new bi(new ae([new Ct("R",1)]),new ae([new Ct("U",-1)]))]),new ae([new Ct("D",1)])),new Ti(new ae([new bi(new ae([new Ct("R",1)]),new ae([new Ct("U",1)]))]),new ae([new Ct("D",1)])),new Ct("x",1)]),new ae([new bi(new ae([new Ct("F",1)]),new ae([new Ti(new ae([new Ct("U",1)]),new ae([new Ct("R",1)]))]))]),new ae([new bi(new ae([new Ct("R",2)]),new ae([new Ti(new ae([new Ct("F",2)]),new ae([new Ct("R",-1),new Ct("B",-1),new Ct("R",1)]))]))]),new ae([new Ct("F",1),new Ct("U",1),new Ct("R",1),new Ct("U",-1),new Ct("R",-1),new Ct("F",-1)]),new ae([new Ct("R",1),new Ct("U",1),new Ct("R",-1),new Ct("U",-1),new Ct("R",-1),new Ct("F",1),new Ct("R",2),new Ct("U",-1),new Ct("R",-1),new Ct("U",-1),new Ct("R",1),new Ct("U",1),new Ct("R",-1),new Ct("F",-1)]),new ae([new bi(new ae([new Ct("F",1)]),new ae([new Bi(new ae([new Ti(new ae([new Ct("R",1)]),new ae([new Ct("U",1)]))]),3)]))]),new ae([new Ji,new Ji,new Ji]);const Ip={U:{color:"#f8fafc",normal:{x:0,y:1,z:0},label:"上面",shortLabel:"上"},D:{color:"#ffd23f",normal:{x:0,y:-1,z:0},label:"下面",shortLabel:"下"},F:{color:"#2667ff",normal:{x:0,y:0,z:1},label:"前面",shortLabel:"前"},B:{color:"#2bb673",normal:{x:0,y:0,z:-1},label:"後面",shortLabel:"後"},R:{color:"#ef233c",normal:{x:1,y:0,z:0},label:"右面",shortLabel:"右"},L:{color:"#e66a00",normal:{x:-1,y:0,z:0},label:"左面",shortLabel:"左"}},pE={U:{axis:"y",layer:1,clockwiseQuarterTurns:-1},D:{axis:"y",layer:-1,clockwiseQuarterTurns:1},F:{axis:"z",layer:1,clockwiseQuarterTurns:-1},B:{axis:"z",layer:-1,clockwiseQuarterTurns:1},R:{axis:"x",layer:1,clockwiseQuarterTurns:-1},L:{axis:"x",layer:-1,clockwiseQuarterTurns:1}},Ci=Ip,vx=["U","U'","R","R'","F","F'","D","D'","L","L'","B","B'"];function Vs(){const s=[];for(let t=-1;t<=1;t+=1)for(let i=-1;i<=1;i+=1)for(let r=-1;r<=1;r+=1){const l={x:t,y:i,z:r},c=Object.entries(Ip).filter(([,h])=>vE(l,h.normal)===1).map(([h,d])=>({face:h,color:d.color,normal:{...d.normal}}));s.push({id:`${t}:${i}:${r}`,position:l,stickers:c})}return s}function xx(s){if(!s.trim())return[];const t=new ae(s);return Array.from(t.expand().childAlgNodes()).map(i=>i.toString()).filter(i=>/^[URFDLB][2']?$/.test(i)||/^[URFDLB]2'?$/.test(i))}function mE(s){return s.trim()?new ae(s).toString():""}function rs(s){const t=s.match(/^([URFDLB])([2']*)$/);if(!t)throw new Error(`Unsupported move: ${s}`);const i=t[1],r=t[2]??"",l=r.includes("2")?2:1,c=r.includes("'")?-1:1,h=pE[i],d=h.clockwiseQuarterTurns*c*l,m=l===2?"轉半圈":c===1?"順時針":"逆時針",p=Ip[i];return{token:s,face:i,axis:h.axis,layer:h.layer,quarterTurns:d,angle:d*(Math.PI/2),label:`${p.label}${m}`,shortLabel:p.shortLabel}}function Bp(s,t){const i=rs(t);return s.map(r=>yx(r.position,i.axis)!==i.layer?_E(r):{...r,position:Wv(r.position,i.axis,i.quarterTurns),stickers:r.stickers.map(l=>({...l,normal:Wv(l.normal,i.axis,i.quarterTurns)}))})}function Xv(s,t){return t.reduce((i,r)=>Bp(i,r),s)}function gE(s,t){return yx(s,t.axis)===t.layer}function qv(s){return rs(s).label}function _E(s){return{...s,position:{...s.position},stickers:s.stickers.map(t=>({...t,normal:{...t.normal}}))}}function vE(s,t){return s.x*t.x+s.y*t.y+s.z*t.z}function yx(s,t){return s[t]}function Wv(s,t,i){let r={...s};const l=(i%4+4)%4;for(let c=0;c<l;c+=1)r=xE(r,t);return r}function xE(s,t){switch(t){case"x":return{x:s.x,y:-s.z,z:s.y};case"y":return{x:s.z,y:s.y,z:-s.x};case"z":return{x:-s.y,y:s.x,z:s.z}}}const yE=["U2","R2","F2","D2","L2","B2"],SE=[...vx,...yE],Yv=new Map;function ME(s){const t=TE(s),i=t.filter(Wd).length,r=i===4,l=r?[]:EE(t),c=l[0]??null;return{solved:r,solvedCount:i,total:4,progress:Math.round(i/4*100),moves:l,nextMove:c,message:r?"白色十字已完成。接著可以進入白色角塊。":c?`偵測到 ${i}/4 個白色邊塊已歸位，建議下一步先轉 ${c}。`:"目前狀態比較複雜，先用「套用情境」回到練習狀態，或按重置重新開始。"}}function EE(s){const t=jv(s),i=Yv.get(t);if(i)return i;if(s.every(Wd))return[];const r=[{edges:s,path:[],previousFace:""}],l=new Set([t]);for(let c=0;c<r.length;c+=1){const h=r[c];for(const d of SE){const m=d[0];if(m===h.previousFace)continue;const p=Bp(h.edges,d),g=jv(p);if(l.has(g))continue;const v=[...h.path,d];if(p.every(Wd))return Yv.set(t,v),v;l.add(g),r.push({edges:p,path:v,previousFace:m})}}return[]}function TE(s){return s.filter(t=>t.stickers.length===2&&t.stickers.some(i=>i.face==="U")).map(t=>({...t,position:{...t.position},stickers:t.stickers.map(i=>({...i,normal:{...i.normal}}))})).sort((t,i)=>t.id.localeCompare(i.id))}function Wd(s){const t=bE(s.id);return Zv(s.position,t)?s.stickers.every(i=>Zv(i.normal,Ci[i.face].normal)):!1}function jv(s){return s.map(t=>{const i=t.stickers.find(l=>l.face==="U"),r=t.stickers.find(l=>l.face!=="U");return[t.id,rd(t.position),i?rd(i.normal):"x",(r==null?void 0:r.face)??"x",r?rd(r.normal):"x"].join(":")}).join("|")}function bE(s){const[t,i,r]=s.split(":").map(Number);return{x:t,y:i,z:r}}function Zv(s,t){return s.x===t.x&&s.y===t.y&&s.z===t.z}function rd(s){return`${s.x}${s.y}${s.z}`}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="171",AE=0,Qv=1,RE=2,Sx=1,Mx=2,Aa=3,gr=0,$n=1,Ca=2,pr=0,oo=1,Kv=2,Jv=3,$v=4,wE=5,jr=100,CE=101,UE=102,DE=103,LE=104,NE=200,OE=201,zE=202,PE=203,Yd=204,jd=205,IE=206,BE=207,FE=208,HE=209,GE=210,VE=211,kE=212,XE=213,qE=214,Zd=0,Qd=1,Kd=2,go=3,Jd=4,$d=5,tp=6,ep=7,Ex=0,WE=1,YE=2,mr=0,jE=1,ZE=2,QE=3,KE=4,JE=5,$E=6,t1=7,Tx=300,_o=301,vo=302,np=303,ip=304,Hu=306,ap=1e3,Qr=1001,rp=1002,Hi=1003,e1=1004,$c=1005,Qi=1006,sd=1007,Kr=1008,Oa=1009,bx=1010,Ax=1011,Ol=1012,Hp=1013,ss=1014,Ua=1015,Bl=1016,Gp=1017,Vp=1018,xo=1020,Rx=35902,wx=1021,Cx=1022,Fi=1023,Ux=1024,Dx=1025,lo=1026,yo=1027,Lx=1028,kp=1029,Nx=1030,Xp=1031,qp=1033,Au=33776,Ru=33777,wu=33778,Cu=33779,sp=35840,op=35841,lp=35842,cp=35843,up=36196,fp=37492,hp=37496,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,yp=37815,Sp=37816,Mp=37817,Ep=37818,Tp=37819,bp=37820,Ap=37821,Uu=36492,Rp=36494,wp=36495,Ox=36283,Cp=36284,Up=36285,Dp=36286,n1=3200,i1=3201,zx=0,a1=1,fr="",fi="srgb",So="srgb-linear",Lu="linear",Xe="srgb",ks=7680,t0=519,r1=512,s1=513,o1=514,Px=515,l1=516,c1=517,u1=518,f1=519,e0=35044,n0="300 es",Da=2e3,Nu=2001;class Eo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let i0=1234567;const co=Math.PI/180,zl=180/Math.PI;function To(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function be(s,t,i){return Math.max(t,Math.min(i,s))}function Wp(s,t){return(s%t+t)%t}function h1(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function d1(s,t,i){return s!==t?(i-s)/(t-s):0}function Ll(s,t,i){return(1-i)*s+i*t}function p1(s,t,i,r){return Ll(s,t,1-Math.exp(-i*r))}function m1(s,t=1){return t-Math.abs(Wp(s,t*2)-t)}function g1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function _1(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function v1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function x1(s,t){return s+Math.random()*(t-s)}function y1(s){return s*(.5-Math.random())}function S1(s){s!==void 0&&(i0=s);let t=i0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function M1(s){return s*co}function E1(s){return s*zl}function T1(s){return(s&s-1)===0&&s!==0}function b1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function A1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function R1(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),v=c((t-r)/2),_=h((t-r)/2),M=c((r-t)/2),E=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*v,m*_,d*p);break;case"YZY":s.set(m*_,d*g,m*v,d*p);break;case"ZXZ":s.set(m*v,m*_,d*g,d*p);break;case"XZX":s.set(d*g,m*E,m*M,d*p);break;case"YXY":s.set(m*M,d*g,m*E,d*p);break;case"ZYZ":s.set(m*E,m*M,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const w1={DEG2RAD:co,RAD2DEG:zl,generateUUID:To,clamp:be,euclideanModulo:Wp,mapLinear:h1,inverseLerp:d1,lerp:Ll,damp:p1,pingpong:m1,smoothstep:g1,smootherstep:_1,randInt:v1,randFloat:x1,randFloatSpread:y1,seededRandom:S1,degToRad:M1,radToDeg:E1,isPowerOfTwo:T1,ceilPowerOfTwo:b1,floorPowerOfTwo:A1,setQuaternionFromProperEuler:R1,normalize:Vn,denormalize:io};class Ie{constructor(t=0,i=0){Ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,i,r,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],_=r[2],M=r[5],E=r[8],A=l[0],S=l[3],x=l[6],z=l[1],N=l[4],U=l[7],j=l[2],G=l[5],O=l[8];return c[0]=h*A+d*z+m*j,c[3]=h*S+d*N+m*G,c[6]=h*x+d*U+m*O,c[1]=p*A+g*z+v*j,c[4]=p*S+g*N+v*G,c[7]=p*x+g*U+v*O,c[2]=_*A+M*z+E*j,c[5]=_*S+M*N+E*G,c[8]=_*x+M*U+E*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,_=d*m-g*c,M=p*c-h*m,E=i*v+r*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=_*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(od.makeScale(t,i)),this}rotate(t){return this.premultiply(od.makeRotation(-t)),this}translate(t,i){return this.premultiply(od.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const od=new pe;function Ix(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ou(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function C1(){const s=Ou("canvas");return s.style.display="block",s}const a0={};function ao(s){s in a0||(a0[s]=!0,console.warn(s))}function U1(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function D1(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function L1(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const r0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N1(){const s={enabled:!0,workingColorSpace:So,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xe&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=uo(l.r),l.g=uo(l.g),l.b=uo(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fr?Lu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[So]:{primaries:t,whitePoint:r,transfer:Lu,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const ze=N1();function Na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xs;class O1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xs===void 0&&(Xs=Ou("canvas")),Xs.width=t.width,Xs.height=t.height;const r=Xs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Xs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ou("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Na(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Na(i[r]/255)*255):i[r]=Na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let z1=0;class Bx{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=To(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ld(l[h].image)):c.push(ld(l[h]))}else c=ld(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?O1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P1=0;class ti extends Eo{constructor(t=ti.DEFAULT_IMAGE,i=ti.DEFAULT_MAPPING,r=Qr,l=Qr,c=Qi,h=Kr,d=Fi,m=Oa,p=ti.DEFAULT_ANISOTROPY,g=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=To(),this.name="",this.source=new Bx(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ap:t.x=t.x-Math.floor(t.x);break;case Qr:t.x=t.x<0?0:1;break;case rp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ap:t.y=t.y-Math.floor(t.y);break;case Qr:t.y=t.y<0?0:1;break;case rp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Tx;ti.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],_=m[1],M=m[5],E=m[9],A=m[2],S=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(M+1)/2,j=(x+1)/2,G=(g+_)/4,O=(v+A)/4,V=(E+S)/4;return N>U&&N>j?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=G/r,c=O/r):U>j?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=G/l,c=V/l):j<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),r=O/c,l=V/c),this.set(r,l,c,i),this}let z=Math.sqrt((S-E)*(S-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(z)<.001&&(z=1),this.x=(S-E)/z,this.y=(v-A)/z,this.z=(_-g)/z,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class I1 extends Eo{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new ti(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Bx(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends I1{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Fx extends ti{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class B1 extends ti{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const _=c[h+0],M=c[h+1],E=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=_,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(v!==A||m!==_||p!==M||g!==E){let S=1-d;const x=m*_+p*M+g*E+v*A,z=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const j=Math.sqrt(N),G=Math.atan2(j,x*z);S=Math.sin(S*G)/j,d=Math.sin(d*G)/j}const U=d*z;if(m=m*S+_*U,p=p*S+M*U,g=g*S+E*U,v=v*S+A*U,S===1-d){const j=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=j,p*=j,g*=j,v*=j}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],_=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+g*v+m*M-p*_,t[i+1]=m*E+g*_+p*v-d*M,t[i+2]=p*E+g*M+d*_-m*v,t[i+3]=g*E-d*v-m*_-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),_=m(r/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=_*g*v+p*M*E,this._y=p*M*v-_*g*E,this._z=p*g*E+_*M*v,this._w=p*g*v-_*M*E;break;case"YXZ":this._x=_*g*v+p*M*E,this._y=p*M*v-_*g*E,this._z=p*g*E-_*M*v,this._w=p*g*v+_*M*E;break;case"ZXY":this._x=_*g*v-p*M*E,this._y=p*M*v+_*g*E,this._z=p*g*E+_*M*v,this._w=p*g*v-_*M*E;break;case"ZYX":this._x=_*g*v-p*M*E,this._y=p*M*v+_*g*E,this._z=p*g*E-_*M*v,this._w=p*g*v+_*M*E;break;case"YZX":this._x=_*g*v+p*M*E,this._y=p*M*v+_*g*E,this._z=p*g*E-_*M*v,this._w=p*g*v-_*M*E;break;case"XZY":this._x=_*g*v-p*M*E,this._y=p*M*v-_*g*E,this._z=p*g*E+_*M*v,this._w=p*g*v+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=r+d+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,_=Math.sin(i*g)/p;return this._w=h*v+this._w*_,this._x=r*v+this._x*_,this._y=l*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(o0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(o0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return cd.copy(this).projectOnVector(t),this.sub(cd)}reflect(t){return this.sub(cd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new $,o0=new Fl;class Hl{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,zi):zi.fromBufferAttribute(c,h),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tu.copy(r.boundingBox)),tu.applyMatrix4(t.matrixWorld),this.union(tu)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),eu.subVectors(this.max,Sl),qs.subVectors(t.a,Sl),Ws.subVectors(t.b,Sl),Ys.subVectors(t.c,Sl),rr.subVectors(Ws,qs),sr.subVectors(Ys,Ws),Hr.subVectors(qs,Ys);let i=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Hr.z,Hr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Hr.z,0,-Hr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Hr.y,Hr.x,0];return!ud(i,qs,Ws,Ys,eu)||(i=[1,0,0,0,1,0,0,0,1],!ud(i,qs,Ws,Ys,eu))?!1:(nu.crossVectors(rr,sr),i=[nu.x,nu.y,nu.z],ud(i,qs,Ws,Ys,eu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sa=[new $,new $,new $,new $,new $,new $,new $,new $],zi=new $,tu=new Hl,qs=new $,Ws=new $,Ys=new $,rr=new $,sr=new $,Hr=new $,Sl=new $,eu=new $,nu=new $,Gr=new $;function ud(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Gr.fromArray(s,c);const d=l.x*Math.abs(Gr.x)+l.y*Math.abs(Gr.y)+l.z*Math.abs(Gr.z),m=t.dot(Gr),p=i.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const F1=new Hl,Ml=new $,fd=new $;class Gu{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):F1.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const i=Ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ml,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(fd)),this.expandByPoint(Ml.copy(t.center).sub(fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ma=new $,hd=new $,iu=new $,or=new $,dd=new $,au=new $,pd=new $;class Hx{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){hd.copy(t).add(i).multiplyScalar(.5),iu.copy(i).sub(t).normalize(),or.copy(this.origin).sub(hd);const c=t.distanceTo(i)*.5,h=-this.direction.dot(iu),d=or.dot(this.direction),m=-or.dot(iu),p=or.lengthSq(),g=Math.abs(1-h*h);let v,_,M,E;if(g>0)if(v=h*m-d,_=h*d-m,E=c*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,M=v*(v+h*_+2*d)+_*(h*v+_+2*m)+p}else _=c,v=Math.max(0,-(h*_+d)),M=-v*v+_*(_+2*m)+p;else _=-c,v=Math.max(0,-(h*_+d)),M=-v*v+_*(_+2*m)+p;else _<=-E?(v=Math.max(0,-(-h*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+p):_<=E?(v=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+p):(v=Math.max(0,-(h*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+_*(_+2*m)+p);else _=h>0?-c:c,v=Math.max(0,-(h*_+d)),M=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(hd).addScaledVector(iu,_),M}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const r=Ma.dot(this.direction),l=Ma.dot(Ma)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-_.z)*v,m=(t.max.z-_.z)*v):(d=(t.max.z-_.z)*v,m=(t.min.z-_.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,r,l,c){dd.subVectors(i,t),au.subVectors(r,t),pd.crossVectors(dd,au);let h=this.direction.dot(pd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;or.subVectors(this.origin,t);const m=d*this.direction.dot(au.crossVectors(or,au));if(m<0)return null;const p=d*this.direction.dot(dd.cross(or));if(p<0||m+p>h)return null;const g=-d*or.dot(pd);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,r,l,c,h,d,m,p,g,v,_,M,E,A,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,v,_,M,E,A,S)}set(t,i,r,l,c,h,d,m,p,g,v,_,M,E,A,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=v,x[14]=_,x[3]=M,x[7]=E,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/js.setFromMatrixColumn(t,0).length(),c=1/js.setFromMatrixColumn(t,1).length(),h=1/js.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=h*g,M=h*v,E=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+E*p,i[5]=_-A*p,i[9]=-d*m,i[2]=A-_*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,M=m*v,E=p*g,A=p*v;i[0]=_+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=A+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,M=m*v,E=p*g,A=p*v;i[0]=_-A*d,i[4]=-h*v,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=A-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,M=h*v,E=d*g,A=d*v;i[0]=m*g,i[4]=E*p-M,i[8]=_*p+A,i[1]=m*v,i[5]=A*p+_,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-_*v,i[8]=E*v+M,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*v+E,i[10]=_-A*v}else if(t.order==="XZY"){const _=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+A,i[5]=h*g,i[9]=M*v-E,i[2]=E*v-M,i[6]=d*g,i[10]=A*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(H1,t,G1)}lookAt(t,i,r){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),lr.crossVectors(r,ci),lr.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),lr.crossVectors(r,ci)),lr.normalize(),ru.crossVectors(ci,lr),l[0]=lr.x,l[4]=ru.x,l[8]=ci.x,l[1]=lr.y,l[5]=ru.y,l[9]=ci.y,l[2]=lr.z,l[6]=ru.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],_=r[9],M=r[13],E=r[2],A=r[6],S=r[10],x=r[14],z=r[3],N=r[7],U=r[11],j=r[15],G=l[0],O=l[4],V=l[8],C=l[12],w=l[1],F=l[5],ct=l[9],tt=l[13],vt=l[2],mt=l[6],P=l[10],Q=l[14],q=l[3],Et=l[7],At=l[11],L=l[15];return c[0]=h*G+d*w+m*vt+p*q,c[4]=h*O+d*F+m*mt+p*Et,c[8]=h*V+d*ct+m*P+p*At,c[12]=h*C+d*tt+m*Q+p*L,c[1]=g*G+v*w+_*vt+M*q,c[5]=g*O+v*F+_*mt+M*Et,c[9]=g*V+v*ct+_*P+M*At,c[13]=g*C+v*tt+_*Q+M*L,c[2]=E*G+A*w+S*vt+x*q,c[6]=E*O+A*F+S*mt+x*Et,c[10]=E*V+A*ct+S*P+x*At,c[14]=E*C+A*tt+S*Q+x*L,c[3]=z*G+N*w+U*vt+j*q,c[7]=z*O+N*F+U*mt+j*Et,c[11]=z*V+N*ct+U*P+j*At,c[15]=z*C+N*tt+U*Q+j*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],_=t[10],M=t[14],E=t[3],A=t[7],S=t[11],x=t[15];return E*(+c*m*v-l*p*v-c*d*_+r*p*_+l*d*M-r*m*M)+A*(+i*m*M-i*p*_+c*h*_-l*h*M+l*p*g-c*m*g)+S*(+i*p*v-i*d*M-c*h*v+r*h*M+c*d*g-r*p*g)+x*(-l*d*g-i*m*v+i*d*_+l*h*v-r*h*_+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],_=t[10],M=t[11],E=t[12],A=t[13],S=t[14],x=t[15],z=v*S*p-A*_*p+A*m*M-d*S*M-v*m*x+d*_*x,N=E*_*p-g*S*p-E*m*M+h*S*M+g*m*x-h*_*x,U=g*A*p-E*v*p+E*d*M-h*A*M-g*d*x+h*v*x,j=E*v*m-g*A*m-E*d*_+h*A*_+g*d*S-h*v*S,G=i*z+r*N+l*U+c*j;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return t[0]=z*O,t[1]=(A*_*c-v*S*c-A*l*M+r*S*M+v*l*x-r*_*x)*O,t[2]=(d*S*c-A*m*c+A*l*p-r*S*p-d*l*x+r*m*x)*O,t[3]=(v*m*c-d*_*c-v*l*p+r*_*p+d*l*M-r*m*M)*O,t[4]=N*O,t[5]=(g*S*c-E*_*c+E*l*M-i*S*M-g*l*x+i*_*x)*O,t[6]=(E*m*c-h*S*c-E*l*p+i*S*p+h*l*x-i*m*x)*O,t[7]=(h*_*c-g*m*c+g*l*p-i*_*p-h*l*M+i*m*M)*O,t[8]=U*O,t[9]=(E*v*c-g*A*c-E*r*M+i*A*M+g*r*x-i*v*x)*O,t[10]=(h*A*c-E*d*c+E*r*p-i*A*p-h*r*x+i*d*x)*O,t[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*M-i*d*M)*O,t[12]=j*O,t[13]=(g*A*l-E*v*l+E*r*_-i*A*_-g*r*S+i*v*S)*O,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*S-i*d*S)*O,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*_+i*d*_)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,_=c*p,M=c*g,E=c*v,A=h*g,S=h*v,x=d*v,z=m*p,N=m*g,U=m*v,j=r.x,G=r.y,O=r.z;return l[0]=(1-(A+x))*j,l[1]=(M+U)*j,l[2]=(E-N)*j,l[3]=0,l[4]=(M-U)*G,l[5]=(1-(_+x))*G,l[6]=(S+z)*G,l[7]=0,l[8]=(E+N)*O,l[9]=(S-z)*O,l[10]=(1-(_+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=js.set(l[0],l[1],l[2]).length();const h=js.set(l[4],l[5],l[6]).length(),d=js.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Pi.copy(this);const p=1/c,g=1/h,v=1/d;return Pi.elements[0]*=p,Pi.elements[1]*=p,Pi.elements[2]*=p,Pi.elements[4]*=g,Pi.elements[5]*=g,Pi.elements[6]*=g,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,i.setFromRotationMatrix(Pi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Da){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),_=(r+l)/(r-l);let M,E;if(d===Da)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Nu)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Da){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(h-c),_=(i+t)*p,M=(r+l)*g;let E,A;if(d===Da)E=(h+c)*v,A=-2*v;else if(d===Nu)E=c*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-_,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const js=new $,Pi=new $e,H1=new $(0,0,0),G1=new $(1,1,1),lr=new $,ru=new $,ci=new $,l0=new $e,c0=new Fl;class ea{constructor(t=0,i=0,r=0,l=ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return l0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(l0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return c0.setFromEuler(this),this.setFromQuaternion(c0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ea.DEFAULT_ORDER="XYZ";class Gx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let V1=0;const u0=new $,Zs=new Fl,Ea=new $e,su=new $,El=new $,k1=new $,X1=new Fl,f0=new $(1,0,0),h0=new $(0,1,0),d0=new $(0,0,1),p0={type:"added"},q1={type:"removed"},Qs={type:"childadded",child:null},md={type:"childremoved",child:null};class An extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new $,i=new ea,r=new Fl,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new pe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Zs.setFromAxisAngle(t,i),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,i){return Zs.setFromAxisAngle(t,i),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(f0,t)}rotateY(t){return this.rotateOnAxis(h0,t)}rotateZ(t){return this.rotateOnAxis(d0,t)}translateOnAxis(t,i){return u0.copy(t).applyQuaternion(this.quaternion),this.position.add(u0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(f0,t)}translateY(t){return this.translateOnAxis(h0,t)}translateZ(t){return this.translateOnAxis(d0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?su.copy(t):su.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ea.lookAt(El,su,this.up):Ea.lookAt(su,El,this.up),this.quaternion.setFromRotationMatrix(Ea),l&&(Ea.extractRotation(l.matrixWorld),Zs.setFromRotationMatrix(Ea),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(p0),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(q1),md.child=t,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(p0),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,k1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,X1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),_=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new $(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new $,Ta=new $,gd=new $,ba=new $,Ks=new $,Js=new $,m0=new $,_d=new $,vd=new $,xd=new $,yd=new an,Sd=new an,Md=new an;class Ri{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ii.subVectors(t,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ii.subVectors(l,i),Ta.subVectors(r,i),gd.subVectors(t,i);const h=Ii.dot(Ii),d=Ii.dot(Ta),m=Ii.dot(gd),p=Ta.dot(Ta),g=Ta.dot(gd),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,M=(p*m-d*g)*_,E=(h*g-d*m)*_;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(h,ba.y),m.addScaledVector(d,ba.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(t,i),Sd.fromBufferAttribute(t,r),Md.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(yd,c.x),h.addScaledVector(Sd,c.y),h.addScaledVector(Md,c.z),h}static isFrontFacing(t,i,r,l){return Ii.subVectors(r,i),Ta.subVectors(t,i),Ii.cross(Ta).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ta.subVectors(this.a,this.b),Ii.cross(Ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Ks.subVectors(l,r),Js.subVectors(c,r),_d.subVectors(t,r);const m=Ks.dot(_d),p=Js.dot(_d);if(m<=0&&p<=0)return i.copy(r);vd.subVectors(t,l);const g=Ks.dot(vd),v=Js.dot(vd);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Ks,h);xd.subVectors(t,c);const M=Ks.dot(xd),E=Js.dot(xd);if(E>=0&&M<=E)return i.copy(c);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Js,d);const S=g*E-M*v;if(S<=0&&v-g>=0&&M-E>=0)return m0.subVectors(c,l),d=(v-g)/(v-g+(M-E)),i.copy(l).addScaledVector(m0,d);const x=1/(S+A+_);return h=A*x,d=_*x,i.copy(r).addScaledVector(Ks,h).addScaledVector(Js,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Ed(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class we{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=ze.workingColorSpace){return this.r=t,this.g=i,this.b=r,ze.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=ze.workingColorSpace){if(t=Wp(t,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Ed(h,c,t+1/3),this.g=Ed(h,c,t),this.b=Ed(h,c,t-1/3)}return ze.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Vx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Na(t.r),this.g=Na(t.g),this.b=Na(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return ze.fromWorkingColorSpace(Bn.copy(this),t),Math.round(be(Bn.r*255,0,255))*65536+Math.round(be(Bn.g*255,0,255))*256+Math.round(be(Bn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.fromWorkingColorSpace(Bn.copy(this),i);const r=Bn.r,l=Bn.g,c=Bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=ze.workingColorSpace){return ze.fromWorkingColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=fi){ze.fromWorkingColorSpace(Bn.copy(this),t);const i=Bn.r,r=Bn.g,l=Bn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(cr),this.setHSL(cr.h+t,cr.s+i,cr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(cr),t.getHSL(ou);const r=Ll(cr.h,ou.h,i),l=Ll(cr.s,ou.s,i),c=Ll(cr.l,ou.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new we;we.NAMES=Vx;let W1=0;class bo extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=To(),this.name="",this.type="Material",this.blending=oo,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=jd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yd&&(r.blendSrc=this.blendSrc),this.blendDst!==jd&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kx extends bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new $,lu=new Ie;class $i{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=e0,this.updateRanges=[],this.gpuType=Ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(t),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=io(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==e0&&(t.usage=this.usage),t}}class Xx extends $i{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class qx extends $i{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ta extends $i{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Y1=0;const Mi=new $e,Td=new An,$s=new $,ui=new Hl,Tl=new Hl,Tn=new $;class za extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ix(t)?qx:Xx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,i,r){return Mi.makeTranslation(t,i,r),this.applyMatrix4(Mi),this}scale(t,i,r){return Mi.makeScale(t,i,r),this.applyMatrix4(Mi),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ta(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ui.min,Tl.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,Tl.max),ui.expandByPoint(Tn)):(ui.expandByPoint(Tl.min),ui.expandByPoint(Tl.max))}ui.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Tn.fromBufferAttribute(d,p),m&&($s.fromBufferAttribute(t,p),Tn.add($s)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<r.count;V++)d[V]=new $,m[V]=new $;const p=new $,g=new $,v=new $,_=new Ie,M=new Ie,E=new Ie,A=new $,S=new $;function x(V,C,w){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),_.fromBufferAttribute(c,V),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(p),v.sub(p),M.sub(_),E.sub(_);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-M.y).multiplyScalar(F),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(F),d[V].add(A),d[C].add(A),d[w].add(A),m[V].add(S),m[C].add(S),m[w].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let V=0,C=z.length;V<C;++V){const w=z[V],F=w.start,ct=w.count;for(let tt=F,vt=F+ct;tt<vt;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const N=new $,U=new $,j=new $,G=new $;function O(V){j.fromBufferAttribute(l,V),G.copy(j);const C=d[V];N.copy(C),N.sub(j.multiplyScalar(j.dot(C))).normalize(),U.crossVectors(G,C);const F=U.dot(m[V])<0?-1:1;h.setXYZW(V,N.x,N.y,N.z,F)}for(let V=0,C=z.length;V<C;++V){const w=z[V],F=w.start,ct=w.count;for(let tt=F,vt=F+ct;tt<vt;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,g=new $,v=new $;if(t)for(let _=0,M=t.count;_<M;_+=3){const E=t.getX(_+0),A=t.getX(_+1),S=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,_=new p.constructor(m.length*g);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let x=0;x<g;x++)_[E++]=p[M++]}return new $i(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new za,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const _=p[g],M=t(_,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const M=p[v];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g0=new $e,Vr=new Hx,cu=new Gu,_0=new $,uu=new $,fu=new $,hu=new $,bd=new $,du=new $,v0=new $,pu=new $;class wi extends An{constructor(t=new za,i=new kx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){du.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(bd.fromBufferAttribute(v,t),h?du.addScaledVector(bd,g):du.addScaledVector(bd.sub(i),g))}i.add(du)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(c),Vr.copy(t.ray).recast(t.near),!(cu.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(cu,_0)===null||Vr.origin.distanceToSquared(_0)>(t.far-t.near)**2))&&(g0.copy(c).invert(),Vr.copy(t.ray).applyMatrix4(g0),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Vr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=_.length;E<A;E++){const S=_[E],x=h[S.materialIndex],z=Math.max(S.start,M.start),N=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,j=N;U<j;U+=3){const G=d.getX(U),O=d.getX(U+1),V=d.getX(U+2);l=mu(this,x,t,r,p,g,v,G,O,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=E,x=A;S<x;S+=3){const z=d.getX(S),N=d.getX(S+1),U=d.getX(S+2);l=mu(this,h,t,r,p,g,v,z,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=_.length;E<A;E++){const S=_[E],x=h[S.materialIndex],z=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=z,j=N;U<j;U+=3){const G=U,O=U+1,V=U+2;l=mu(this,x,t,r,p,g,v,G,O,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,x=A;S<x;S+=3){const z=S,N=S+1,U=S+2;l=mu(this,h,t,r,p,g,v,z,N,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function j1(s,t,i,r,l,c,h,d){let m;if(t.side===$n?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===gr,d),m===null)return null;pu.copy(d),pu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(pu);return p<i.near||p>i.far?null:{distance:p,point:pu.clone(),object:s}}function mu(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,uu),s.getVertexPosition(m,fu),s.getVertexPosition(p,hu);const g=j1(s,t,i,r,uu,fu,hu,v0);if(g){const v=new $;Ri.getBarycoord(v0,uu,fu,hu,v),l&&(g.uv=Ri.getInterpolatedAttribute(l,d,m,p,v,new Ie)),c&&(g.uv1=Ri.getInterpolatedAttribute(c,d,m,p,v,new Ie)),h&&(g.normal=Ri.getInterpolatedAttribute(h,d,m,p,v,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new $,materialIndex:0};Ri.getNormal(uu,fu,hu,_.normal),g.face=_,g.barycoord=v}return g}class Ao extends za{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let _=0,M=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ta(p,3)),this.setAttribute("normal",new ta(g,3)),this.setAttribute("uv",new ta(v,2));function E(A,S,x,z,N,U,j,G,O,V,C){const w=U/O,F=j/V,ct=U/2,tt=j/2,vt=G/2,mt=O+1,P=V+1;let Q=0,q=0;const Et=new $;for(let At=0;At<P;At++){const L=At*F-tt;for(let nt=0;nt<mt;nt++){const Mt=nt*w-ct;Et[A]=Mt*z,Et[S]=L*N,Et[x]=vt,p.push(Et.x,Et.y,Et.z),Et[A]=0,Et[S]=0,Et[x]=G>0?1:-1,g.push(Et.x,Et.y,Et.z),v.push(nt/O),v.push(1-At/V),Q+=1}}for(let At=0;At<V;At++)for(let L=0;L<O;L++){const nt=_+L+mt*At,Mt=_+L+mt*(At+1),Z=_+(L+1)+mt*(At+1),ft=_+(L+1)+mt*At;m.push(nt,Mt,ft),m.push(Mt,Z,ft),q+=6}d.addGroup(M,q,C),M+=q,_+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function kn(s){const t={};for(let i=0;i<s.length;i++){const r=Mo(s[i]);for(const l in r)t[l]=r[l]}return t}function Z1(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Wx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const Q1={clone:Mo,merge:kn};var K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=J1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=Z1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Yx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Da}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new $,x0=new Ie,y0=new Ie;class Ai extends Yx{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=zl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,i){return this.getViewBounds(t,x0,y0),i.subVectors(y0,x0)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(co*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const to=-90,eo=1;class $1 extends An{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(to,eo,t,i);l.layers=this.layers,this.add(l);const c=new Ai(to,eo,t,i);c.layers=this.layers,this.add(c);const h=new Ai(to,eo,t,i);h.layers=this.layers,this.add(h);const d=new Ai(to,eo,t,i);d.layers=this.layers,this.add(d);const m=new Ai(to,eo,t,i);m.layers=this.layers,this.add(m);const p=new Ai(to,eo,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Da)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,_,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class jx extends ti{constructor(t,i,r,l,c,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:_o,super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tT extends os{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new jx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Qi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ao(5,5,5),c=new _r({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:pr});c.uniforms.tEquirect.value=i;const h=new wi(l,c),d=i.minFilter;return i.minFilter===Kr&&(i.minFilter=Qi),new $1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class eT extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ea,this.environmentIntensity=1,this.environmentRotation=new ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ad=new $,nT=new $,iT=new pe;class Wr{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ad.subVectors(r,i).cross(nT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ad),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||iT.getNormalMatrix(t),l=this.coplanarPoint(Ad).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Gu,gu=new $;class Yp{constructor(t=new Wr,i=new Wr,r=new Wr,l=new Wr,c=new Wr,h=new Wr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Da){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],_=l[7],M=l[8],E=l[9],A=l[10],S=l[11],x=l[12],z=l[13],N=l[14],U=l[15];if(r[0].setComponents(m-c,_-p,S-M,U-x).normalize(),r[1].setComponents(m+c,_+p,S+M,U+x).normalize(),r[2].setComponents(m+h,_+g,S+E,U+z).normalize(),r[3].setComponents(m-h,_-g,S-E,U-z).normalize(),r[4].setComponents(m-d,_-v,S-A,U-N).normalize(),i===Da)r[5].setComponents(m+d,_+v,S+A,U+N).normalize();else if(i===Nu)r[5].setComponents(d,v,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(t){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(t.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gu.x=l.normal.x>0?t.max.x:t.min.x,gu.y=l.normal.y>0?t.max.y:t.min.y,gu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(gu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zx extends bo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zu=new $,Pu=new $,S0=new $e,bl=new Hx,_u=new Gu,Rd=new $,M0=new $;class aT extends An{constructor(t=new za,i=new Zx){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)zu.fromBufferAttribute(i,l-1),Pu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=zu.distanceTo(Pu);t.setAttribute("lineDistance",new ta(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(l),_u.radius+=c,t.ray.intersectsSphere(_u)===!1)return;S0.copy(l).invert(),bl.copy(t.ray).applyMatrix4(S0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let A=M,S=E-1;A<S;A+=p){const x=g.getX(A),z=g.getX(A+1),N=vu(this,t,bl,m,x,z);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(M),x=vu(this,t,bl,m,A,S);x&&i.push(x)}}else{const M=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let A=M,S=E-1;A<S;A+=p){const x=vu(this,t,bl,m,A,A+1);x&&i.push(x)}if(this.isLineLoop){const A=vu(this,t,bl,m,E-1,M);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function vu(s,t,i,r,l,c){const h=s.geometry.attributes.position;if(zu.fromBufferAttribute(h,l),Pu.fromBufferAttribute(h,c),i.distanceSqToSegment(zu,Pu,Rd,M0)>r)return;Rd.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Rd);if(!(m<t.near||m>t.far))return{distance:m,point:M0.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const E0=new $,T0=new $;class Lp extends aT{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)E0.fromBufferAttribute(i,l),T0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+E0.distanceTo(T0);t.setAttribute("lineDistance",new ta(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dr extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Qx extends ti{constructor(t,i,r,l,c,h,d,m,p,g=lo){if(g!==lo&&g!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===lo&&(r=ss),r===void 0&&g===yo&&(r=xo),super(null,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Hi,this.minFilter=m!==void 0?m:Hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const xu=new $,yu=new $,wd=new $,Su=new Ri;class rT extends za{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(co*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),_={},M=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:A,b:S,c:x}=Su;if(A.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),x.fromBufferAttribute(d,p[2]),Su.getNormal(wd),v[0]=`${Math.round(A.x*l)},${Math.round(A.y*l)},${Math.round(A.z*l)}`,v[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,v[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let z=0;z<3;z++){const N=(z+1)%3,U=v[z],j=v[N],G=Su[g[z]],O=Su[g[N]],V=`${U}_${j}`,C=`${j}_${U}`;C in _&&_[C]?(wd.dot(_[C].normal)<=c&&(M.push(G.x,G.y,G.z),M.push(O.x,O.y,O.z)),_[C]=null):V in _||(_[V]={index0:p[z],index1:p[N],normal:wd.clone()})}}for(const E in _)if(_[E]){const{index0:A,index1:S}=_[E];xu.fromBufferAttribute(d,A),yu.fromBufferAttribute(d,S),M.push(xu.x,xu.y,xu.z),M.push(yu.x,yu.y,yu.z)}this.setAttribute("position",new ta(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gl extends za{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,_=i/m,M=[],E=[],A=[],S=[];for(let x=0;x<g;x++){const z=x*_-h;for(let N=0;N<p;N++){const U=N*v-c;E.push(U,-z,0),A.push(0,0,1),S.push(N/d),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<d;z++){const N=z+p*x,U=z+p*(x+1),j=z+1+p*(x+1),G=z+1+p*x;M.push(N,U,G),M.push(U,j,G)}this.setIndex(M),this.setAttribute("position",new ta(E,3)),this.setAttribute("normal",new ta(A,3)),this.setAttribute("uv",new ta(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kx extends bo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zx,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ea,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sT extends bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oT extends bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jx extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new we(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class lT extends Jx{constructor(t,i,r){super(t,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Cd=new $e,b0=new $,A0=new $;class cT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;b0.setFromMatrixPosition(t.matrixWorld),i.position.copy(b0),A0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A0),i.updateMatrixWorld(),Cd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $x extends Yx{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class uT extends cT{constructor(){super(new $x(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class R0 extends Jx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new uT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fT extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function w0(s,t,i,r){const l=hT(r);switch(i){case wx:return s*t;case Ux:return s*t;case Dx:return s*t*2;case Lx:return s*t/l.components*l.byteLength;case kp:return s*t/l.components*l.byteLength;case Nx:return s*t*2/l.components*l.byteLength;case Xp:return s*t*2/l.components*l.byteLength;case Cx:return s*t*3/l.components*l.byteLength;case Fi:return s*t*4/l.components*l.byteLength;case qp:return s*t*4/l.components*l.byteLength;case Au:case Ru:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wu:case Cu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case op:case cp:return Math.max(s,16)*Math.max(t,8)/4;case sp:case lp:return Math.max(s,8)*Math.max(t,8)/2;case up:case fp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case mp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case gp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case _p:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Tp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ap:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uu:case Rp:case wp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ox:case Cp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Up:case Dp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hT(s){switch(s){case Oa:case bx:return{byteLength:1,components:1};case Ol:case Ax:case Bl:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case ss:case Hp:case Ua:return{byteLength:4,components:1};case Rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ty(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function dT(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<v.length;M++){const E=v[_],A=v[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let M=0,E=v.length;M<E;M++){const A=v[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var pT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mT=`#ifdef USE_ALPHAHASH
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
#endif`,gT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yT=`#ifdef USE_AOMAP
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
#endif`,ST=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MT=`#ifdef USE_BATCHING
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
#endif`,ET=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RT=`#ifdef USE_IRIDESCENCE
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
#endif`,wT=`#ifdef USE_BUMPMAP
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
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IT=`#define PI 3.141592653589793
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
} // validated`,BT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,FT=`vec3 transformedNormal = objectNormal;
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
#endif`,HT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XT="gl_FragColor = linearToOutputTexel( gl_FragColor );",qT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WT=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eb=`#ifdef USE_GRADIENTMAP
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
}`,nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rb=`uniform bool receiveShadow;
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
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
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
#endif`,hb=`struct PhysicalMaterial {
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
}`,db=`
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eb=`#if defined( USE_POINTS_UV )
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
#endif`,Tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pb=`#ifdef USE_NORMALMAP
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
#endif`,Ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jb=`float getShadowMask() {
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
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nA=`#ifdef USE_SKINNING
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
#endif`,iA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#ifdef USE_TRANSMISSION
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
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pA=`uniform sampler2D t2D;
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
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`#include <common>
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
}`,yA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SA=`#define DISTANCE
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
}`,MA=`#define DISTANCE
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`uniform float scale;
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,wA=`uniform vec3 diffuse;
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
}`,CA=`#define LAMBERT
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
}`,UA=`#define LAMBERT
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
}`,DA=`#define MATCAP
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
}`,LA=`#define MATCAP
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
}`,NA=`#define NORMAL
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
}`,OA=`#define NORMAL
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
}`,zA=`#define PHONG
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
}`,PA=`#define PHONG
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
}`,IA=`#define STANDARD
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
}`,BA=`#define STANDARD
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
}`,FA=`#define TOON
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
}`,HA=`#define TOON
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
}`,GA=`uniform float size;
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
}`,VA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,XA=`uniform vec3 color;
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
}`,qA=`uniform float rotation;
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
}`,WA=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:pT,alphahash_pars_fragment:mT,alphamap_fragment:gT,alphamap_pars_fragment:_T,alphatest_fragment:vT,alphatest_pars_fragment:xT,aomap_fragment:yT,aomap_pars_fragment:ST,batching_pars_vertex:MT,batching_vertex:ET,begin_vertex:TT,beginnormal_vertex:bT,bsdfs:AT,iridescence_fragment:RT,bumpmap_pars_fragment:wT,clipping_planes_fragment:CT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:LT,color_fragment:NT,color_pars_fragment:OT,color_pars_vertex:zT,color_vertex:PT,common:IT,cube_uv_reflection_fragment:BT,defaultnormal_vertex:FT,displacementmap_pars_vertex:HT,displacementmap_vertex:GT,emissivemap_fragment:VT,emissivemap_pars_fragment:kT,colorspace_fragment:XT,colorspace_pars_fragment:qT,envmap_fragment:WT,envmap_common_pars_fragment:YT,envmap_pars_fragment:jT,envmap_pars_vertex:ZT,envmap_physical_pars_fragment:sb,envmap_vertex:QT,fog_vertex:KT,fog_pars_vertex:JT,fog_fragment:$T,fog_pars_fragment:tb,gradientmap_pars_fragment:eb,lightmap_pars_fragment:nb,lights_lambert_fragment:ib,lights_lambert_pars_fragment:ab,lights_pars_begin:rb,lights_toon_fragment:ob,lights_toon_pars_fragment:lb,lights_phong_fragment:cb,lights_phong_pars_fragment:ub,lights_physical_fragment:fb,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:pb,lights_fragment_end:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:xb,map_fragment:yb,map_pars_fragment:Sb,map_particle_fragment:Mb,map_particle_pars_fragment:Eb,metalnessmap_fragment:Tb,metalnessmap_pars_fragment:bb,morphinstance_vertex:Ab,morphcolor_vertex:Rb,morphnormal_vertex:wb,morphtarget_pars_vertex:Cb,morphtarget_vertex:Ub,normal_fragment_begin:Db,normal_fragment_maps:Lb,normal_pars_fragment:Nb,normal_pars_vertex:Ob,normal_vertex:zb,normalmap_pars_fragment:Pb,clearcoat_normal_fragment_begin:Ib,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:Fb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Vb,premultiplied_alpha_fragment:kb,project_vertex:Xb,dithering_fragment:qb,dithering_pars_fragment:Wb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Qb,shadowmap_vertex:Kb,shadowmask_pars_fragment:Jb,skinbase_vertex:$b,skinning_pars_vertex:tA,skinning_vertex:eA,skinnormal_vertex:nA,specularmap_fragment:iA,specularmap_pars_fragment:aA,tonemapping_fragment:rA,tonemapping_pars_fragment:sA,transmission_fragment:oA,transmission_pars_fragment:lA,uv_pars_fragment:cA,uv_pars_vertex:uA,uv_vertex:fA,worldpos_vertex:hA,background_vert:dA,background_frag:pA,backgroundCube_vert:mA,backgroundCube_frag:gA,cube_vert:_A,cube_frag:vA,depth_vert:xA,depth_frag:yA,distanceRGBA_vert:SA,distanceRGBA_frag:MA,equirect_vert:EA,equirect_frag:TA,linedashed_vert:bA,linedashed_frag:AA,meshbasic_vert:RA,meshbasic_frag:wA,meshlambert_vert:CA,meshlambert_frag:UA,meshmatcap_vert:DA,meshmatcap_frag:LA,meshnormal_vert:NA,meshnormal_frag:OA,meshphong_vert:zA,meshphong_frag:PA,meshphysical_vert:IA,meshphysical_frag:BA,meshtoon_vert:FA,meshtoon_frag:HA,points_vert:GA,points_frag:VA,shadow_vert:kA,shadow_frag:XA,sprite_vert:qA,sprite_frag:WA},zt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Yi={basic:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new we(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new we(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:kn([zt.common,zt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:kn([zt.lights,zt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Yi.physical={uniforms:kn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Mu={r:0,b:0,g:0},Xr=new ea,YA=new $e;function jA(s,t,i,r,l,c,h){const d=new we(0);let m=c===!0?0:1,p,g,v=null,_=0,M=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function A(N){let U=!1;const j=E(N);j===null?x(d,m):j&&j.isColor&&(x(j,1),U=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,U){const j=E(U);j&&(j.isCubeTexture||j.mapping===Hu)?(g===void 0&&(g=new wi(new Ao(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Mo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Xr.copy(U.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Xr)),g.material.toneMapped=ze.getTransfer(j.colorSpace)!==Xe,(v!==j||_!==j.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=j,_=j.version,M=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new wi(new Gl(2,2),new _r({name:"BackgroundMaterial",uniforms:Mo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=ze.getTransfer(j.colorSpace)!==Xe,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(v!==j||_!==j.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=j,_=j.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,U){N.getRGB(Mu,Wx(s)),r.buffers.color.setClear(Mu.r,Mu.g,Mu.b,U,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:A,addToRenderList:S,dispose:z}}function ZA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(w,F,ct,tt,vt){let mt=!1;const P=v(tt,ct,F);c!==P&&(c=P,p(c.object)),mt=M(w,tt,ct,vt),mt&&E(w,tt,ct,vt),vt!==null&&t.update(vt,s.ELEMENT_ARRAY_BUFFER),(mt||h)&&(h=!1,U(w,F,ct,tt),vt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,F,ct){const tt=ct.wireframe===!0;let vt=r[w.id];vt===void 0&&(vt={},r[w.id]=vt);let mt=vt[F.id];mt===void 0&&(mt={},vt[F.id]=mt);let P=mt[tt];return P===void 0&&(P=_(m()),mt[tt]=P),P}function _(w){const F=[],ct=[],tt=[];for(let vt=0;vt<i;vt++)F[vt]=0,ct[vt]=0,tt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:tt,object:w,attributes:{},index:null}}function M(w,F,ct,tt){const vt=c.attributes,mt=F.attributes;let P=0;const Q=ct.getAttributes();for(const q in Q)if(Q[q].location>=0){const At=vt[q];let L=mt[q];if(L===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),At===void 0||At.attribute!==L||L&&At.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==tt}function E(w,F,ct,tt){const vt={},mt=F.attributes;let P=0;const Q=ct.getAttributes();for(const q in Q)if(Q[q].location>=0){let At=mt[q];At===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(At=w.instanceColor));const L={};L.attribute=At,At&&At.data&&(L.data=At.data),vt[q]=L,P++}c.attributes=vt,c.attributesNum=P,c.index=tt}function A(){const w=c.newAttributes;for(let F=0,ct=w.length;F<ct;F++)w[F]=0}function S(w){x(w,0)}function x(w,F){const ct=c.newAttributes,tt=c.enabledAttributes,vt=c.attributeDivisors;ct[w]=1,tt[w]===0&&(s.enableVertexAttribArray(w),tt[w]=1),vt[w]!==F&&(s.vertexAttribDivisor(w,F),vt[w]=F)}function z(){const w=c.newAttributes,F=c.enabledAttributes;for(let ct=0,tt=F.length;ct<tt;ct++)F[ct]!==w[ct]&&(s.disableVertexAttribArray(ct),F[ct]=0)}function N(w,F,ct,tt,vt,mt,P){P===!0?s.vertexAttribIPointer(w,F,ct,vt,mt):s.vertexAttribPointer(w,F,ct,tt,vt,mt)}function U(w,F,ct,tt){A();const vt=tt.attributes,mt=ct.getAttributes(),P=F.defaultAttributeValues;for(const Q in mt){const q=mt[Q];if(q.location>=0){let Et=vt[Q];if(Et===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),Et!==void 0){const At=Et.normalized,L=Et.itemSize,nt=t.get(Et);if(nt===void 0)continue;const Mt=nt.buffer,Z=nt.type,ft=nt.bytesPerElement,bt=Z===s.INT||Z===s.UNSIGNED_INT||Et.gpuType===Hp;if(Et.isInterleavedBufferAttribute){const St=Et.data,Gt=St.stride,Ft=Et.offset;if(St.isInstancedInterleavedBuffer){for(let Rt=0;Rt<q.locationSize;Rt++)x(q.location+Rt,St.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Rt=0;Rt<q.locationSize;Rt++)S(q.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Rt=0;Rt<q.locationSize;Rt++)N(q.location+Rt,L/q.locationSize,Z,At,Gt*ft,(Ft+L/q.locationSize*Rt)*ft,bt)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<q.locationSize;St++)x(q.location+St,Et.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<q.locationSize;St++)S(q.location+St);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let St=0;St<q.locationSize;St++)N(q.location+St,L/q.locationSize,Z,At,L*ft,L/q.locationSize*St*ft,bt)}}else if(P!==void 0){const At=P[Q];if(At!==void 0)switch(At.length){case 2:s.vertexAttrib2fv(q.location,At);break;case 3:s.vertexAttrib3fv(q.location,At);break;case 4:s.vertexAttrib4fv(q.location,At);break;default:s.vertexAttrib1fv(q.location,At)}}}}z()}function j(){V();for(const w in r){const F=r[w];for(const ct in F){const tt=F[ct];for(const vt in tt)g(tt[vt].object),delete tt[vt];delete F[ct]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const F=r[w.id];for(const ct in F){const tt=F[ct];for(const vt in tt)g(tt[vt].object),delete tt[vt];delete F[ct]}delete r[w.id]}function O(w){for(const F in r){const ct=r[F];if(ct[w.id]===void 0)continue;const tt=ct[w.id];for(const vt in tt)g(tt[vt].object),delete tt[vt];delete ct[w.id]}}function V(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:G,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:z}}function QA(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=g[E];i.update(M,r,1)}function m(p,g,v,_){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],g[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*_[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function KA(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Fi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===Bl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Oa&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ua&&!V)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),j=E>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:j,maxSamples:G}}function JA(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Wr,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const E=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=s.get(v);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const z=c?0:r,N=z*4;let U=x.clippingState||null;m.value=U,U=g(E,_,N,M);for(let j=0;j!==N;++j)U[j]=i[j];x.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,_,M,E){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const x=M+A*4,z=_.matrixWorldInverse;d.getNormalMatrix(z),(S===null||S.length<x)&&(S=new Float32Array(x));for(let N=0,U=M;N!==A;++N,U+=4)h.copy(v[N]).applyMatrix4(z,d),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function $A(s){let t=new WeakMap;function i(h,d){return d===np?h.mapping=_o:d===ip&&(h.mapping=vo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===np||d===ip)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new tT(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ro=4,C0=[.125,.215,.35,.446,.526,.582],Zr=20,Ud=new $x,U0=new we;let Dd=null,Ld=0,Nd=0,Od=!1;const Yr=(1+Math.sqrt(5))/2,no=1/Yr,D0=[new $(-Yr,no,0),new $(Yr,no,0),new $(-no,0,Yr),new $(no,0,Yr),new $(0,Yr,-no),new $(0,Yr,no),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class L0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Ld,Nd),this._renderer.xr.enabled=Od,t.scissorTest=!1,Eu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===_o||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:Bl,format:Fi,colorSpace:So,depthBuffer:!1},l=N0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tR(c)),this._blurMaterial=eR(c,t,i)}return l}_compileMaterial(t){const i=new wi(this._lodPlanes[0],t);this._renderer.compile(i,Ud)}_sceneToCubeUV(t,i,r,l){const d=new Ai(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(U0),g.toneMapping=mr,g.autoClear=!1;const M=new kx({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),E=new wi(new Ao,M);let A=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,A=!0):(M.color.copy(U0),A=!0);for(let x=0;x<6;x++){const z=x%3;z===0?(d.up.set(0,m[x],0),d.lookAt(p[x],0,0)):z===1?(d.up.set(0,0,m[x]),d.lookAt(0,p[x],0)):(d.up.set(0,m[x],0),d.lookAt(0,0,p[x]));const N=this._cubeSize;Eu(l,z*N,x>2?N:0,N,N),g.setRenderTarget(l),A&&g.render(E,d),g.render(t,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=v,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===_o||t.mapping===vo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new wi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Eu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=D0[(l-c-1)%D0.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new wi(this._lodPlanes[l],p),_=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):Zr;S>Zr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const x=[];let z=0;for(let O=0;O<Zr;++O){const V=O/A,C=Math.exp(-V*V/2);x.push(C),O===0?z+=C:O<S&&(z+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/z;_.envMap.value=t.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-r;const U=this._sizeLods[l],j=3*U*(l>N-ro?l-N+ro:0),G=4*(this._cubeSize-U);Eu(i,j,G,3*U,2*U),m.setRenderTarget(i),m.render(v,Ud)}}function tR(s){const t=[],i=[],r=[];let l=s;const c=s-ro+1+C0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-ro?m=C0[h-s+ro-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,E=6,A=3,S=2,x=1,z=new Float32Array(A*E*M),N=new Float32Array(S*E*M),U=new Float32Array(x*E*M);for(let G=0;G<M;G++){const O=G%3*2/3-1,V=G>2?0:-1,C=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];z.set(C,A*E*G),N.set(_,S*E*G);const w=[G,G,G,G,G,G];U.set(w,x*E*G)}const j=new za;j.setAttribute("position",new $i(z,A)),j.setAttribute("uv",new $i(N,S)),j.setAttribute("faceIndex",new $i(U,x)),t.push(j),l>ro&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function N0(s,t,i){const r=new os(s,t,i);return r.texture.mapping=Hu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Eu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function eR(s,t,i){const r=new Float32Array(Zr),l=new $(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jp(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function O0(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jp(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function z0(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function jp(){return`

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
	`}function nR(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===np||m===ip,g=m===_o||m===vo;if(p||g){let v=t.get(d);const _=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new L0(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new L0(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function iR(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ao("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function aR(s,t,i,r){const l={},c=new WeakMap;function h(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const M=c.get(_);M&&(t.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)t.update(_[M],s.ARRAY_BUFFER)}function p(v){const _=[],M=v.index,E=v.attributes.position;let A=0;if(M!==null){const z=M.array;A=M.version;for(let N=0,U=z.length;N<U;N+=3){const j=z[N+0],G=z[N+1],O=z[N+2];_.push(j,G,G,O,O,j)}}else if(E!==void 0){const z=E.array;A=E.version;for(let N=0,U=z.length/3-1;N<U;N+=3){const j=N+0,G=N+1,O=N+2;_.push(j,G,G,O,O,j)}}else return;const S=new(Ix(_)?qx:Xx)(_,1);S.version=A;const x=c.get(v);x&&t.remove(x),c.set(v,S)}function g(v){const _=c.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function rR(s,t,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,M){s.drawElements(r,M,c,_*h),i.update(M,r,1)}function p(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,_*h,E),i.update(M,r,E))}function g(_,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];i.update(S,r,1)}function v(_,M,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)p(_[x]/h,M[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,A,0,E);let x=0;for(let z=0;z<E;z++)x+=M[z]*A[z];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function sR(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oR(s,t,i){const r=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let w=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),A===!0&&(U=2),S===!0&&(U=3);let j=d.attributes.position.count*U,G=1;j>t.maxTextureSize&&(G=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const O=new Float32Array(j*G*4*v),V=new Fx(O,j,G,v);V.type=Ua,V.needsUpdate=!0;const C=U*4;for(let F=0;F<v;F++){const ct=x[F],tt=z[F],vt=N[F],mt=j*G*4*F;for(let P=0;P<ct.count;P++){const Q=P*C;E===!0&&(l.fromBufferAttribute(ct,P),O[mt+Q+0]=l.x,O[mt+Q+1]=l.y,O[mt+Q+2]=l.z,O[mt+Q+3]=0),A===!0&&(l.fromBufferAttribute(tt,P),O[mt+Q+4]=l.x,O[mt+Q+5]=l.y,O[mt+Q+6]=l.z,O[mt+Q+7]=0),S===!0&&(l.fromBufferAttribute(vt,P),O[mt+Q+8]=l.x,O[mt+Q+9]=l.y,O[mt+Q+10]=l.z,O[mt+Q+11]=vt.itemSize===4?l.w:1)}}_={count:v,texture:V,size:new Ie(j,G)},r.set(d,_),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function lR(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const ey=new ti,P0=new Qx(1,1),ny=new Fx,iy=new B1,ay=new jx,I0=[],B0=[],F0=new Float32Array(16),H0=new Float32Array(9),G0=new Float32Array(4);function Ro(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=I0[l];if(c===void 0&&(c=new Float32Array(l),I0[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function xn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Vu(s,t){let i=B0[t];i===void 0&&(i=new Int32Array(t),B0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function cR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function uR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function fR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function hR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function dR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;G0.set(r),s.uniformMatrix2fv(this.addr,!1,G0),yn(i,r)}}function pR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;H0.set(r),s.uniformMatrix3fv(this.addr,!1,H0),yn(i,r)}}function mR(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,r))return;F0.set(r),s.uniformMatrix4fv(this.addr,!1,F0),yn(i,r)}}function gR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function _R(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function vR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function xR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function yR(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function SR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function MR(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function ER(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function TR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(P0.compareFunction=Px,c=P0):c=ey,i.setTexture2D(t||c,l)}function bR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||iy,l)}function AR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||ay,l)}function RR(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||ny,l)}function wR(s){switch(s){case 5126:return cR;case 35664:return uR;case 35665:return fR;case 35666:return hR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}function CR(s,t){s.uniform1fv(this.addr,t)}function UR(s,t){const i=Ro(t,this.size,2);s.uniform2fv(this.addr,i)}function DR(s,t){const i=Ro(t,this.size,3);s.uniform3fv(this.addr,i)}function LR(s,t){const i=Ro(t,this.size,4);s.uniform4fv(this.addr,i)}function NR(s,t){const i=Ro(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function OR(s,t){const i=Ro(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function zR(s,t){const i=Ro(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function PR(s,t){s.uniform1iv(this.addr,t)}function IR(s,t){s.uniform2iv(this.addr,t)}function BR(s,t){s.uniform3iv(this.addr,t)}function FR(s,t){s.uniform4iv(this.addr,t)}function HR(s,t){s.uniform1uiv(this.addr,t)}function GR(s,t){s.uniform2uiv(this.addr,t)}function VR(s,t){s.uniform3uiv(this.addr,t)}function kR(s,t){s.uniform4uiv(this.addr,t)}function XR(s,t,i){const r=this.cache,l=t.length,c=Vu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||ey,c[h])}function qR(s,t,i){const r=this.cache,l=t.length,c=Vu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||iy,c[h])}function WR(s,t,i){const r=this.cache,l=t.length,c=Vu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ay,c[h])}function YR(s,t,i){const r=this.cache,l=t.length,c=Vu(i,l);xn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||ny,c[h])}function jR(s){switch(s){case 5126:return CR;case 35664:return UR;case 35665:return DR;case 35666:return LR;case 35674:return NR;case 35675:return OR;case 35676:return zR;case 5124:case 35670:return PR;case 35667:case 35671:return IR;case 35668:case 35672:return BR;case 35669:case 35673:return FR;case 5125:return HR;case 36294:return GR;case 36295:return VR;case 36296:return kR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return qR;case 35680:case 36300:case 36308:case 36293:return WR;case 36289:case 36303:case 36311:case 36292:return YR}}class ZR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=wR(i.type)}}class QR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jR(i.type)}}class KR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function V0(s,t){s.seq.push(t),s.map[t.id]=t}function JR(s,t,i){const r=s.name,l=r.length;for(zd.lastIndex=0;;){const c=zd.exec(r),h=zd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V0(i,p===void 0?new ZR(d,s,t):new QR(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new KR(d),V0(i,v)),i=v}}}class Du{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);JR(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function k0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const $R=37297;let tw=0;function ew(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const X0=new pe;function nw(s){ze._getMatrix(X0,ze.workingColorSpace,s);const t=`mat3( ${X0.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(s)){case Lu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function q0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+ew(s.getShaderSource(t),h)}else return l}function iw(s,t){const i=nw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function aw(s,t){let i;switch(t){case jE:i="Linear";break;case ZE:i="Reinhard";break;case QE:i="Cineon";break;case KE:i="ACESFilmic";break;case $E:i="AgX";break;case t1:i="Neutral";break;case JE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tu=new $;function rw(){ze.getLuminanceCoefficients(Tu);const s=Tu.x.toFixed(4),t=Tu.y.toFixed(4),i=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function ow(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function lw(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function wl(s){return s!==""}function W0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Y0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Np(s){return s.replace(cw,fw)}const uw=new Map;function fw(s,t){let i=ge[t];if(i===void 0){const r=uw.get(t);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Np(i)}const hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j0(s){return s.replace(hw,dw)}function dw(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pw(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sx?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mx?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Aa&&(t="SHADOWMAP_TYPE_VSM"),t}function mw(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _o:case vo:t="ENVMAP_TYPE_CUBE";break;case Hu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gw(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vo:t="ENVMAP_MODE_REFRACTION";break}return t}function _w(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ex:t="ENVMAP_BLENDING_MULTIPLY";break;case WE:t="ENVMAP_BLENDING_MIX";break;case YE:t="ENVMAP_BLENDING_ADD";break}return t}function vw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function xw(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=pw(i),p=mw(i),g=gw(i),v=_w(i),_=vw(i),M=sw(i),E=ow(c),A=l.createProgram();let S,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(wl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(wl).join(`
`),x.length>0&&(x+=`
`)):(S=[Z0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),x=[Z0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==mr?"#define TONE_MAPPING":"",i.toneMapping!==mr?ge.tonemapping_pars_fragment:"",i.toneMapping!==mr?aw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,iw("linearToOutputTexel",i.outputColorSpace),rw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wl).join(`
`)),h=Np(h),h=W0(h,i),h=Y0(h,i),d=Np(d),d=W0(d,i),d=Y0(d,i),h=j0(h),d=j0(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=z+S+h,U=z+x+d,j=k0(l,l.VERTEX_SHADER,N),G=k0(l,l.FRAGMENT_SHADER,U);l.attachShader(A,j),l.attachShader(A,G),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(F){if(s.debug.checkShaderErrors){const ct=l.getProgramInfoLog(A).trim(),tt=l.getShaderInfoLog(j).trim(),vt=l.getShaderInfoLog(G).trim();let mt=!0,P=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(mt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,j,G);else{const Q=q0(l,j,"vertex"),q=q0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+Q+`
`+q)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(tt===""||vt==="")&&(P=!1);P&&(F.diagnostics={runnable:mt,programLog:ct,vertexShader:{log:tt,prefix:S},fragmentShader:{log:vt,prefix:x}})}l.deleteShader(j),l.deleteShader(G),V=new Du(l,A),C=lw(l,A)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,$R)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tw++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=G,this}let yw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Mw(t),i.set(t,r)),r}}class Mw{constructor(t){this.id=yw++,this.code=t,this.usedTimes=0}}function Ew(s,t,i,r,l,c,h){const d=new Gx,m=new Sw,p=new Set,g=[],v=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,F,ct,tt){const vt=ct.fog,mt=tt.geometry,P=C.isMeshStandardMaterial?ct.environment:null,Q=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),q=Q&&Q.mapping===Hu?Q.image.height:null,Et=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const At=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,L=At!==void 0?At.length:0;let nt=0;mt.morphAttributes.position!==void 0&&(nt=1),mt.morphAttributes.normal!==void 0&&(nt=2),mt.morphAttributes.color!==void 0&&(nt=3);let Mt,Z,ft,bt;if(Et){const Re=Yi[Et];Mt=Re.vertexShader,Z=Re.fragmentShader}else Mt=C.vertexShader,Z=C.fragmentShader,m.update(C),ft=m.getVertexShaderID(C),bt=m.getFragmentShaderID(C);const St=s.getRenderTarget(),Gt=s.state.buffers.depth.getReversed(),Ft=tt.isInstancedMesh===!0,Rt=tt.isBatchedMesh===!0,Wt=!!C.map,ee=!!C.matcap,Ce=!!Q,B=!!C.aoMap,cn=!!C.lightMap,me=!!C.bumpMap,_e=!!C.normalMap,Zt=!!C.displacementMap,Ue=!!C.emissiveMap,Qt=!!C.metalnessMap,D=!!C.roughnessMap,b=C.anisotropy>0,it=C.clearcoat>0,dt=C.dispersion>0,Tt=C.iridescence>0,gt=C.sheen>0,Yt=C.transmission>0,Lt=b&&!!C.anisotropyMap,Ht=it&&!!C.clearcoatMap,Se=it&&!!C.clearcoatNormalMap,wt=it&&!!C.clearcoatRoughnessMap,Vt=Tt&&!!C.iridescenceMap,Kt=Tt&&!!C.iridescenceThicknessMap,jt=gt&&!!C.sheenColorMap,Pt=gt&&!!C.sheenRoughnessMap,re=!!C.specularMap,ue=!!C.specularColorMap,He=!!C.specularIntensityMap,k=Yt&&!!C.transmissionMap,Ut=Yt&&!!C.thicknessMap,ut=!!C.gradientMap,xt=!!C.alphaMap,Dt=C.alphaTest>0,Nt=!!C.alphaHash,se=!!C.extensions;let Ke=mr;C.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const gn={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:Mt,fragmentShader:Z,defines:C.defines,customVertexShaderID:ft,customFragmentShaderID:bt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&tt._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&tt.instanceColor!==null,instancingMorph:Ft&&tt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:So,alphaToCoverage:!!C.alphaToCoverage,map:Wt,matcap:ee,envMap:Ce,envMapMode:Ce&&Q.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:cn,bumpMap:me,normalMap:_e,displacementMap:_&&Zt,emissiveMap:Ue,normalMapObjectSpace:_e&&C.normalMapType===a1,normalMapTangentSpace:_e&&C.normalMapType===zx,metalnessMap:Qt,roughnessMap:D,anisotropy:b,anisotropyMap:Lt,clearcoat:it,clearcoatMap:Ht,clearcoatNormalMap:Se,clearcoatRoughnessMap:wt,dispersion:dt,iridescence:Tt,iridescenceMap:Vt,iridescenceThicknessMap:Kt,sheen:gt,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:re,specularColorMap:ue,specularIntensityMap:He,transmission:Yt,transmissionMap:k,thicknessMap:Ut,gradientMap:ut,opaque:C.transparent===!1&&C.blending===oo&&C.alphaToCoverage===!1,alphaMap:xt,alphaTest:Dt,alphaHash:Nt,combine:C.combine,mapUv:Wt&&A(C.map.channel),aoMapUv:B&&A(C.aoMap.channel),lightMapUv:cn&&A(C.lightMap.channel),bumpMapUv:me&&A(C.bumpMap.channel),normalMapUv:_e&&A(C.normalMap.channel),displacementMapUv:Zt&&A(C.displacementMap.channel),emissiveMapUv:Ue&&A(C.emissiveMap.channel),metalnessMapUv:Qt&&A(C.metalnessMap.channel),roughnessMapUv:D&&A(C.roughnessMap.channel),anisotropyMapUv:Lt&&A(C.anisotropyMap.channel),clearcoatMapUv:Ht&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Se&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&A(C.sheenRoughnessMap.channel),specularMapUv:re&&A(C.specularMap.channel),specularColorMapUv:ue&&A(C.specularColorMap.channel),specularIntensityMapUv:He&&A(C.specularIntensityMap.channel),transmissionMapUv:k&&A(C.transmissionMap.channel),thicknessMapUv:Ut&&A(C.thicknessMap.channel),alphaMapUv:xt&&A(C.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(_e||b),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!mt.attributes.uv&&(Wt||xt),fog:!!vt,useFog:C.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Gt,skinning:tt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Wt&&C.map.isVideoTexture===!0&&ze.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ue&&C.emissiveMap.isVideoTexture===!0&&ze.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ca,flipSided:C.side===$n,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:se&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&C.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return gn.vertexUv1s=p.has(1),gn.vertexUv2s=p.has(2),gn.vertexUv3s=p.has(3),p.clear(),gn}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)w.push(F),w.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(z(w,C),N(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function z(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function N(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=E[C.type];let F;if(w){const ct=Yi[w];F=Q1.clone(ct.uniforms)}else F=C.uniforms;return F}function j(C,w){let F;for(let ct=0,tt=g.length;ct<tt;ct++){const vt=g[ct];if(vt.cacheKey===w){F=vt,++F.usedTimes;break}}return F===void 0&&(F=new xw(s,w,C,c),g.push(F)),F}function G(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function O(C){m.remove(C)}function V(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:U,acquireProgram:j,releaseProgram:G,releaseShaderCache:O,programs:g,dispose:V}}function Tw(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function bw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Q0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function K0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,_,M,E,A,S){let x=s[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:M,groupOrder:E,renderOrder:v.renderOrder,z:A,group:S},s[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=A,x.group=S),t++,x}function d(v,_,M,E,A,S){const x=h(v,_,M,E,A,S);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(v,_,M,E,A,S){const x=h(v,_,M,E,A,S);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,_){i.length>1&&i.sort(v||bw),r.length>1&&r.sort(_||Q0),l.length>1&&l.sort(_||Q0)}function g(){for(let v=t,_=s.length;v<_;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function Aw(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new K0,s.set(r,[h])):l>=c.length?(h=new K0,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function Rw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new we};break;case"SpotLight":i={position:new $,direction:new $,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=i,i}}}function ww(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let Cw=0;function Uw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dw(s){const t=new Rw,i=ww(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new $e,h=new $e;function d(p){let g=0,v=0,_=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,E=0,A=0,S=0,x=0,z=0,N=0,U=0,j=0,G=0,O=0;p.sort(Uw);for(let C=0,w=p.length;C<w;C++){const F=p[C],ct=F.color,tt=F.intensity,vt=F.distance,mt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ct.r*tt,v+=ct.g*tt,_+=ct.b*tt;else if(F.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(F.sh.coefficients[P],tt);O++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,q=i.get(F);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=mt,r.directionalShadowMatrix[M]=F.shadow.matrix,z++}r.directional[M]=P,M++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(ct).multiplyScalar(tt),P.distance=vt,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,r.spot[A]=P;const Q=F.shadow;if(F.map&&(r.spotLightMap[j]=F.map,j++,Q.updateMatrices(F),F.castShadow&&G++),r.spotLightMatrix[A]=Q.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=mt,U++}A++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(ct).multiplyScalar(tt),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=P,S++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const Q=F.shadow,q=i.get(F);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[E]=q,r.pointShadowMap[E]=mt,r.pointShadowMatrix[E]=F.shadow.matrix,N++}r.point[E]=P,E++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar(tt),P.groundColor.copy(F.groundColor).multiplyScalar(tt),r.hemi[x]=P,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const V=r.hash;(V.directionalLength!==M||V.pointLength!==E||V.spotLength!==A||V.rectAreaLength!==S||V.hemiLength!==x||V.numDirectionalShadows!==z||V.numPointShadows!==N||V.numSpotShadows!==U||V.numSpotMaps!==j||V.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+j-G,r.spotLightMap.length=j,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=O,V.directionalLength=M,V.pointLength=E,V.spotLength=A,V.rectAreaLength=S,V.hemiLength=x,V.numDirectionalShadows=z,V.numPointShadows=N,V.numSpotShadows=U,V.numSpotMaps=j,V.numLightProbes=O,r.version=Cw++)}function m(p,g){let v=0,_=0,M=0,E=0,A=0;const S=g.matrixWorldInverse;for(let x=0,z=p.length;x<z;x++){const N=p[x];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),v++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(N.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(S),_++}else if(N.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:r}}function J0(s){const t=new Dw(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Lw(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new J0(s),t.set(l,[d])):c>=h.length?(d=new J0(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ow=`uniform sampler2D shadow_pass;
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
}`;function zw(s,t,i){let r=new Yp;const l=new Ie,c=new Ie,h=new an,d=new sT({depthPacking:i1}),m=new oT,p={},g=i.maxTextureSize,v={[gr]:$n,[$n]:gr,[Ca]:Ca},_=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Nw,fragmentShader:Ow}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new za;E.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wi(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sx;let x=this.type;this.render=function(G,O,V){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(pr),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const tt=x!==Aa&&this.type===Aa,vt=x===Aa&&this.type!==Aa;for(let mt=0,P=G.length;mt<P;mt++){const Q=G[mt],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const Et=q.getFrameExtents();if(l.multiply(Et),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Et.x),l.x=c.x*Et.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Et.y),l.y=c.y*Et.y,q.mapSize.y=c.y)),q.map===null||tt===!0||vt===!0){const L=this.type!==Aa?{minFilter:Hi,magFilter:Hi}:{};q.map!==null&&q.map.dispose(),q.map=new os(l.x,l.y,L),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const At=q.getViewportCount();for(let L=0;L<At;L++){const nt=q.getViewport(L);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),ct.viewport(h),q.updateMatrices(Q,L),r=q.getFrustum(),U(O,V,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Aa&&z(q,V),q.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(C,w,F)};function z(G,O){const V=t.update(A);_.defines.VSM_SAMPLES!==G.blurSamples&&(_.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new os(l.x,l.y)),_.uniforms.shadow_pass.value=G.map.texture,_.uniforms.resolution.value=G.mapSize,_.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(O,null,V,_,A,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(O,null,V,M,A,null)}function N(G,O,V,C){let w=null;const F=V.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(F!==void 0)w=F;else if(w=V.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ct=w.uuid,tt=O.uuid;let vt=p[ct];vt===void 0&&(vt={},p[ct]=vt);let mt=vt[tt];mt===void 0&&(mt=w.clone(),vt[tt]=mt,O.addEventListener("dispose",j)),w=mt}if(w.visible=O.visible,w.wireframe=O.wireframe,C===Aa?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:v[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ct=s.properties.get(w);ct.light=V}return w}function U(G,O,V,C,w){if(G.visible===!1)return;if(G.layers.test(O.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===Aa)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,G.matrixWorld);const tt=t.update(G),vt=G.material;if(Array.isArray(vt)){const mt=tt.groups;for(let P=0,Q=mt.length;P<Q;P++){const q=mt[P],Et=vt[q.materialIndex];if(Et&&Et.visible){const At=N(G,Et,C,w);G.onBeforeShadow(s,G,O,V,tt,At,q),s.renderBufferDirect(V,null,tt,At,G,q),G.onAfterShadow(s,G,O,V,tt,At,q)}}}else if(vt.visible){const mt=N(G,vt,C,w);G.onBeforeShadow(s,G,O,V,tt,mt,null),s.renderBufferDirect(V,null,tt,mt,G,null),G.onAfterShadow(s,G,O,V,tt,mt,null)}}const ct=G.children;for(let tt=0,vt=ct.length;tt<vt;tt++)U(ct[tt],O,V,C,w)}function j(G){G.target.removeEventListener("dispose",j);for(const V in p){const C=p[V],w=G.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const Pw={[Zd]:Qd,[Kd]:tp,[Jd]:ep,[go]:$d,[Qd]:Zd,[tp]:Kd,[ep]:Jd,[$d]:go};function Iw(s,t){function i(){let k=!1;const Ut=new an;let ut=null;const xt=new an(0,0,0,0);return{setMask:function(Dt){ut!==Dt&&!k&&(s.colorMask(Dt,Dt,Dt,Dt),ut=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,Nt,se,Ke,gn){gn===!0&&(Dt*=Ke,Nt*=Ke,se*=Ke),Ut.set(Dt,Nt,se,Ke),xt.equals(Ut)===!1&&(s.clearColor(Dt,Nt,se,Ke),xt.copy(Ut))},reset:function(){k=!1,ut=null,xt.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,ut=null,xt=null,Dt=null;return{setReversed:function(Nt){if(Ut!==Nt){const se=t.get("EXT_clip_control");Ut?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Ke=Dt;Dt=null,this.setClear(Ke)}Ut=Nt},getReversed:function(){return Ut},setTest:function(Nt){Nt?St(s.DEPTH_TEST):Gt(s.DEPTH_TEST)},setMask:function(Nt){ut!==Nt&&!k&&(s.depthMask(Nt),ut=Nt)},setFunc:function(Nt){if(Ut&&(Nt=Pw[Nt]),xt!==Nt){switch(Nt){case Zd:s.depthFunc(s.NEVER);break;case Qd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case go:s.depthFunc(s.LEQUAL);break;case Jd:s.depthFunc(s.EQUAL);break;case $d:s.depthFunc(s.GEQUAL);break;case tp:s.depthFunc(s.GREATER);break;case ep:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Dt!==Nt&&(Ut&&(Nt=1-Nt),s.clearDepth(Nt),Dt=Nt)},reset:function(){k=!1,ut=null,xt=null,Dt=null,Ut=!1}}}function l(){let k=!1,Ut=null,ut=null,xt=null,Dt=null,Nt=null,se=null,Ke=null,gn=null;return{setTest:function(Re){k||(Re?St(s.STENCIL_TEST):Gt(s.STENCIL_TEST))},setMask:function(Re){Ut!==Re&&!k&&(s.stencilMask(Re),Ut=Re)},setFunc:function(Re,Rn,Ui){(ut!==Re||xt!==Rn||Dt!==Ui)&&(s.stencilFunc(Re,Rn,Ui),ut=Re,xt=Rn,Dt=Ui)},setOp:function(Re,Rn,Ui){(Nt!==Re||se!==Rn||Ke!==Ui)&&(s.stencilOp(Re,Rn,Ui),Nt=Re,se=Rn,Ke=Ui)},setLocked:function(Re){k=Re},setClear:function(Re){gn!==Re&&(s.clearStencil(Re),gn=Re)},reset:function(){k=!1,Ut=null,ut=null,xt=null,Dt=null,Nt=null,se=null,Ke=null,gn=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,M=[],E=null,A=!1,S=null,x=null,z=null,N=null,U=null,j=null,G=null,O=new we(0,0,0),V=0,C=!1,w=null,F=null,ct=null,tt=null,vt=null;const mt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=Q>=2);let Et=null,At={};const L=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),Mt=new an().fromArray(L),Z=new an().fromArray(nt);function ft(k,Ut,ut,xt){const Dt=new Uint8Array(4),Nt=s.createTexture();s.bindTexture(k,Nt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<ut;se++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(Ut+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return Nt}const bt={};bt[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(s.DEPTH_TEST),h.setFunc(go),me(!1),_e(Qv),St(s.CULL_FACE),B(pr);function St(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Gt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Ft(k,Ut){return v[k]!==Ut?(s.bindFramebuffer(k,Ut),v[k]=Ut,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ut),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Rt(k,Ut){let ut=M,xt=!1;if(k){ut=_.get(Ut),ut===void 0&&(ut=[],_.set(Ut,ut));const Dt=k.textures;if(ut.length!==Dt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Nt=0,se=Dt.length;Nt<se;Nt++)ut[Nt]=s.COLOR_ATTACHMENT0+Nt;ut.length=Dt.length,xt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ut)}function Wt(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const ee={[jr]:s.FUNC_ADD,[CE]:s.FUNC_SUBTRACT,[UE]:s.FUNC_REVERSE_SUBTRACT};ee[DE]=s.MIN,ee[LE]=s.MAX;const Ce={[NE]:s.ZERO,[OE]:s.ONE,[zE]:s.SRC_COLOR,[Yd]:s.SRC_ALPHA,[GE]:s.SRC_ALPHA_SATURATE,[FE]:s.DST_COLOR,[IE]:s.DST_ALPHA,[PE]:s.ONE_MINUS_SRC_COLOR,[jd]:s.ONE_MINUS_SRC_ALPHA,[HE]:s.ONE_MINUS_DST_COLOR,[BE]:s.ONE_MINUS_DST_ALPHA,[VE]:s.CONSTANT_COLOR,[kE]:s.ONE_MINUS_CONSTANT_COLOR,[XE]:s.CONSTANT_ALPHA,[qE]:s.ONE_MINUS_CONSTANT_ALPHA};function B(k,Ut,ut,xt,Dt,Nt,se,Ke,gn,Re){if(k===pr){A===!0&&(Gt(s.BLEND),A=!1);return}if(A===!1&&(St(s.BLEND),A=!0),k!==wE){if(k!==S||Re!==C){if((x!==jr||U!==jr)&&(s.blendEquation(s.FUNC_ADD),x=jr,U=jr),Re)switch(k){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kv:s.blendFunc(s.ONE,s.ONE);break;case Jv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $v:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $v:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,N=null,j=null,G=null,O.set(0,0,0),V=0,S=k,C=Re}return}Dt=Dt||Ut,Nt=Nt||ut,se=se||xt,(Ut!==x||Dt!==U)&&(s.blendEquationSeparate(ee[Ut],ee[Dt]),x=Ut,U=Dt),(ut!==z||xt!==N||Nt!==j||se!==G)&&(s.blendFuncSeparate(Ce[ut],Ce[xt],Ce[Nt],Ce[se]),z=ut,N=xt,j=Nt,G=se),(Ke.equals(O)===!1||gn!==V)&&(s.blendColor(Ke.r,Ke.g,Ke.b,gn),O.copy(Ke),V=gn),S=k,C=!1}function cn(k,Ut){k.side===Ca?Gt(s.CULL_FACE):St(s.CULL_FACE);let ut=k.side===$n;Ut&&(ut=!ut),me(ut),k.blending===oo&&k.transparent===!1?B(pr):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const xt=k.stencilWrite;d.setTest(xt),xt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):Gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function _e(k){k!==AE?(St(s.CULL_FACE),k!==F&&(k===Qv?s.cullFace(s.BACK):k===RE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Gt(s.CULL_FACE),F=k}function Zt(k){k!==ct&&(P&&s.lineWidth(k),ct=k)}function Ue(k,Ut,ut){k?(St(s.POLYGON_OFFSET_FILL),(tt!==Ut||vt!==ut)&&(s.polygonOffset(Ut,ut),tt=Ut,vt=ut)):Gt(s.POLYGON_OFFSET_FILL)}function Qt(k){k?St(s.SCISSOR_TEST):Gt(s.SCISSOR_TEST)}function D(k){k===void 0&&(k=s.TEXTURE0+mt-1),Et!==k&&(s.activeTexture(k),Et=k)}function b(k,Ut,ut){ut===void 0&&(Et===null?ut=s.TEXTURE0+mt-1:ut=Et);let xt=At[ut];xt===void 0&&(xt={type:void 0,texture:void 0},At[ut]=xt),(xt.type!==k||xt.texture!==Ut)&&(Et!==ut&&(s.activeTexture(ut),Et=ut),s.bindTexture(k,Ut||bt[k]),xt.type=k,xt.texture=Ut)}function it(){const k=At[Et];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function Pt(k){Z.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function re(k,Ut){let ut=p.get(Ut);ut===void 0&&(ut=new WeakMap,p.set(Ut,ut));let xt=ut.get(k);xt===void 0&&(xt=s.getUniformBlockIndex(Ut,k.name),ut.set(k,xt))}function ue(k,Ut){const xt=p.get(Ut).get(k);m.get(Ut)!==xt&&(s.uniformBlockBinding(Ut,xt,k.__bindingPointIndex),m.set(Ut,xt))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,At={},v={},_=new WeakMap,M=[],E=null,A=!1,S=null,x=null,z=null,N=null,U=null,j=null,G=null,O=new we(0,0,0),V=0,C=!1,w=null,F=null,ct=null,tt=null,vt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:St,disable:Gt,bindFramebuffer:Ft,drawBuffers:Rt,useProgram:Wt,setBlending:B,setMaterial:cn,setFlipSided:me,setCullFace:_e,setLineWidth:Zt,setPolygonOffset:Ue,setScissorTest:Qt,activeTexture:D,bindTexture:b,unbindTexture:it,compressedTexImage2D:dt,compressedTexImage3D:Tt,texImage2D:Vt,texImage3D:Kt,updateUBOMapping:re,uniformBlockBinding:ue,texStorage2D:Se,texStorage3D:wt,texSubImage2D:gt,texSubImage3D:Yt,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Ht,scissor:jt,viewport:Pt,reset:He}}function Bw(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ie,g=new WeakMap;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return M?new OffscreenCanvas(D,b):Ou("canvas")}function A(D,b,it){let dt=1;const Tt=Qt(D);if((Tt.width>it||Tt.height>it)&&(dt=it/Math.max(Tt.width,Tt.height)),dt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const gt=Math.floor(dt*Tt.width),Yt=Math.floor(dt*Tt.height);v===void 0&&(v=E(gt,Yt));const Lt=b?E(gt,Yt):v;return Lt.width=gt,Lt.height=Yt,Lt.getContext("2d").drawImage(D,0,0,gt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+gt+"x"+Yt+")."),Lt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),D;return D}function S(D){return D.generateMipmaps}function x(D){s.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,b,it,dt,Tt=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let gt=b;if(b===s.RED&&(it===s.FLOAT&&(gt=s.R32F),it===s.HALF_FLOAT&&(gt=s.R16F),it===s.UNSIGNED_BYTE&&(gt=s.R8)),b===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(gt=s.R8UI),it===s.UNSIGNED_SHORT&&(gt=s.R16UI),it===s.UNSIGNED_INT&&(gt=s.R32UI),it===s.BYTE&&(gt=s.R8I),it===s.SHORT&&(gt=s.R16I),it===s.INT&&(gt=s.R32I)),b===s.RG&&(it===s.FLOAT&&(gt=s.RG32F),it===s.HALF_FLOAT&&(gt=s.RG16F),it===s.UNSIGNED_BYTE&&(gt=s.RG8)),b===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(gt=s.RG8UI),it===s.UNSIGNED_SHORT&&(gt=s.RG16UI),it===s.UNSIGNED_INT&&(gt=s.RG32UI),it===s.BYTE&&(gt=s.RG8I),it===s.SHORT&&(gt=s.RG16I),it===s.INT&&(gt=s.RG32I)),b===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(gt=s.RGB8UI),it===s.UNSIGNED_SHORT&&(gt=s.RGB16UI),it===s.UNSIGNED_INT&&(gt=s.RGB32UI),it===s.BYTE&&(gt=s.RGB8I),it===s.SHORT&&(gt=s.RGB16I),it===s.INT&&(gt=s.RGB32I)),b===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(gt=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(gt=s.RGBA16UI),it===s.UNSIGNED_INT&&(gt=s.RGBA32UI),it===s.BYTE&&(gt=s.RGBA8I),it===s.SHORT&&(gt=s.RGBA16I),it===s.INT&&(gt=s.RGBA32I)),b===s.RGB&&it===s.UNSIGNED_INT_5_9_9_9_REV&&(gt=s.RGB9_E5),b===s.RGBA){const Yt=Tt?Lu:ze.getTransfer(dt);it===s.FLOAT&&(gt=s.RGBA32F),it===s.HALF_FLOAT&&(gt=s.RGBA16F),it===s.UNSIGNED_BYTE&&(gt=Yt===Xe?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(gt=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(gt=s.RGB5_A1)}return(gt===s.R16F||gt===s.R32F||gt===s.RG16F||gt===s.RG32F||gt===s.RGBA16F||gt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function U(D,b){let it;return D?b===null||b===ss||b===xo?it=s.DEPTH24_STENCIL8:b===Ua?it=s.DEPTH32F_STENCIL8:b===Ol&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===xo?it=s.DEPTH_COMPONENT24:b===Ua?it=s.DEPTH_COMPONENT32F:b===Ol&&(it=s.DEPTH_COMPONENT16),it}function j(D,b){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Hi&&D.minFilter!==Qi?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function G(D){const b=D.target;b.removeEventListener("dispose",G),V(b),b.isVideoTexture&&g.delete(b)}function O(D){const b=D.target;b.removeEventListener("dispose",O),w(b)}function V(D){const b=r.get(D);if(b.__webglInit===void 0)return;const it=D.source,dt=_.get(it);if(dt){const Tt=dt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&C(D),Object.keys(dt).length===0&&_.delete(it)}r.remove(D)}function C(D){const b=r.get(D);s.deleteTexture(b.__webglTexture);const it=D.source,dt=_.get(it);delete dt[b.__cacheKey],h.memory.textures--}function w(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let Tt=0;Tt<b.__webglFramebuffer[dt].length;Tt++)s.deleteFramebuffer(b.__webglFramebuffer[dt][Tt]);else s.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)s.deleteFramebuffer(b.__webglFramebuffer[dt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=D.textures;for(let dt=0,Tt=it.length;dt<Tt;dt++){const gt=r.get(it[dt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),h.memory.textures--),r.remove(it[dt])}r.remove(D)}let F=0;function ct(){F=0}function tt(){const D=F;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),F+=1,D}function vt(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function mt(D,b){const it=r.get(D);if(D.isVideoTexture&&Zt(D),D.isRenderTargetTexture===!1&&D.version>0&&it.__version!==D.version){const dt=D.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(it,D,b);return}}i.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+b)}function P(D,b){const it=r.get(D);if(D.version>0&&it.__version!==D.version){Z(it,D,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+b)}function Q(D,b){const it=r.get(D);if(D.version>0&&it.__version!==D.version){Z(it,D,b);return}i.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+b)}function q(D,b){const it=r.get(D);if(D.version>0&&it.__version!==D.version){ft(it,D,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+b)}const Et={[ap]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[rp]:s.MIRRORED_REPEAT},At={[Hi]:s.NEAREST,[e1]:s.NEAREST_MIPMAP_NEAREST,[$c]:s.NEAREST_MIPMAP_LINEAR,[Qi]:s.LINEAR,[sd]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},L={[r1]:s.NEVER,[f1]:s.ALWAYS,[s1]:s.LESS,[Px]:s.LEQUAL,[o1]:s.EQUAL,[u1]:s.GEQUAL,[l1]:s.GREATER,[c1]:s.NOTEQUAL};function nt(D,b){if(b.type===Ua&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qi||b.magFilter===sd||b.magFilter===$c||b.magFilter===Kr||b.minFilter===Qi||b.minFilter===sd||b.minFilter===$c||b.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Et[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Et[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Et[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,At[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Hi||b.minFilter!==$c&&b.minFilter!==Kr||b.type===Ua&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Mt(D,b){let it=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",G));const dt=b.source;let Tt=_.get(dt);Tt===void 0&&(Tt={},_.set(dt,Tt));const gt=vt(b);if(gt!==D.__cacheKey){Tt[gt]===void 0&&(Tt[gt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,it=!0),Tt[gt].usedTimes++;const Yt=Tt[D.__cacheKey];Yt!==void 0&&(Tt[D.__cacheKey].usedTimes--,Yt.usedTimes===0&&C(b)),D.__cacheKey=gt,D.__webglTexture=Tt[gt].texture}return it}function Z(D,b,it){let dt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=s.TEXTURE_3D);const Tt=Mt(D,b),gt=b.source;i.bindTexture(dt,D.__webglTexture,s.TEXTURE0+it);const Yt=r.get(gt);if(gt.version!==Yt.__version||Tt===!0){i.activeTexture(s.TEXTURE0+it);const Lt=ze.getPrimaries(ze.workingColorSpace),Ht=b.colorSpace===fr?null:ze.getPrimaries(b.colorSpace),Se=b.colorSpace===fr||Lt===Ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let wt=A(b.image,!1,l.maxTextureSize);wt=Ue(b,wt);const Vt=c.convert(b.format,b.colorSpace),Kt=c.convert(b.type);let jt=N(b.internalFormat,Vt,Kt,b.colorSpace,b.isVideoTexture);nt(dt,b);let Pt;const re=b.mipmaps,ue=b.isVideoTexture!==!0,He=Yt.__version===void 0||Tt===!0,k=gt.dataReady,Ut=j(b,wt);if(b.isDepthTexture)jt=U(b.format===yo,b.type),He&&(ue?i.texStorage2D(s.TEXTURE_2D,1,jt,wt.width,wt.height):i.texImage2D(s.TEXTURE_2D,0,jt,wt.width,wt.height,0,Vt,Kt,null));else if(b.isDataTexture)if(re.length>0){ue&&He&&i.texStorage2D(s.TEXTURE_2D,Ut,jt,re[0].width,re[0].height);for(let ut=0,xt=re.length;ut<xt;ut++)Pt=re[ut],ue?k&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Vt,Kt,Pt.data):i.texImage2D(s.TEXTURE_2D,ut,jt,Pt.width,Pt.height,0,Vt,Kt,Pt.data);b.generateMipmaps=!1}else ue?(He&&i.texStorage2D(s.TEXTURE_2D,Ut,jt,wt.width,wt.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,wt.width,wt.height,Vt,Kt,wt.data)):i.texImage2D(s.TEXTURE_2D,0,jt,wt.width,wt.height,0,Vt,Kt,wt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ue&&He&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,jt,re[0].width,re[0].height,wt.depth);for(let ut=0,xt=re.length;ut<xt;ut++)if(Pt=re[ut],b.format!==Fi)if(Vt!==null)if(ue){if(k)if(b.layerUpdates.size>0){const Dt=w0(Pt.width,Pt.height,b.format,b.type);for(const Nt of b.layerUpdates){const se=Pt.data.subarray(Nt*Dt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Dt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Nt,Pt.width,Pt.height,1,Vt,se)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,wt.depth,Vt,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,jt,Pt.width,Pt.height,wt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Pt.width,Pt.height,wt.depth,Vt,Kt,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,jt,Pt.width,Pt.height,wt.depth,0,Vt,Kt,Pt.data)}else{ue&&He&&i.texStorage2D(s.TEXTURE_2D,Ut,jt,re[0].width,re[0].height);for(let ut=0,xt=re.length;ut<xt;ut++)Pt=re[ut],b.format!==Fi?Vt!==null?ue?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Vt,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?k&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt.width,Pt.height,Vt,Kt,Pt.data):i.texImage2D(s.TEXTURE_2D,ut,jt,Pt.width,Pt.height,0,Vt,Kt,Pt.data)}else if(b.isDataArrayTexture)if(ue){if(He&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,jt,wt.width,wt.height,wt.depth),k)if(b.layerUpdates.size>0){const ut=w0(wt.width,wt.height,b.format,b.type);for(const xt of b.layerUpdates){const Dt=wt.data.subarray(xt*ut/wt.data.BYTES_PER_ELEMENT,(xt+1)*ut/wt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,wt.width,wt.height,1,Vt,Kt,Dt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Vt,Kt,wt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,wt.width,wt.height,wt.depth,0,Vt,Kt,wt.data);else if(b.isData3DTexture)ue?(He&&i.texStorage3D(s.TEXTURE_3D,Ut,jt,wt.width,wt.height,wt.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Vt,Kt,wt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,wt.width,wt.height,wt.depth,0,Vt,Kt,wt.data);else if(b.isFramebufferTexture){if(He)if(ue)i.texStorage2D(s.TEXTURE_2D,Ut,jt,wt.width,wt.height);else{let ut=wt.width,xt=wt.height;for(let Dt=0;Dt<Ut;Dt++)i.texImage2D(s.TEXTURE_2D,Dt,jt,ut,xt,0,Vt,Kt,null),ut>>=1,xt>>=1}}else if(re.length>0){if(ue&&He){const ut=Qt(re[0]);i.texStorage2D(s.TEXTURE_2D,Ut,jt,ut.width,ut.height)}for(let ut=0,xt=re.length;ut<xt;ut++)Pt=re[ut],ue?k&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Vt,Kt,Pt):i.texImage2D(s.TEXTURE_2D,ut,jt,Vt,Kt,Pt);b.generateMipmaps=!1}else if(ue){if(He){const ut=Qt(wt);i.texStorage2D(s.TEXTURE_2D,Ut,jt,ut.width,ut.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,Kt,wt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Vt,Kt,wt);S(b)&&x(dt),Yt.__version=gt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ft(D,b,it){if(b.image.length!==6)return;const dt=Mt(D,b),Tt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+it);const gt=r.get(Tt);if(Tt.version!==gt.__version||dt===!0){i.activeTexture(s.TEXTURE0+it);const Yt=ze.getPrimaries(ze.workingColorSpace),Lt=b.colorSpace===fr?null:ze.getPrimaries(b.colorSpace),Ht=b.colorSpace===fr||Yt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Se=b.isCompressedTexture||b.image[0].isCompressedTexture,wt=b.image[0]&&b.image[0].isDataTexture,Vt=[];for(let xt=0;xt<6;xt++)!Se&&!wt?Vt[xt]=A(b.image[xt],!0,l.maxCubemapSize):Vt[xt]=wt?b.image[xt].image:b.image[xt],Vt[xt]=Ue(b,Vt[xt]);const Kt=Vt[0],jt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),re=N(b.internalFormat,jt,Pt,b.colorSpace),ue=b.isVideoTexture!==!0,He=gt.__version===void 0||dt===!0,k=Tt.dataReady;let Ut=j(b,Kt);nt(s.TEXTURE_CUBE_MAP,b);let ut;if(Se){ue&&He&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,re,Kt.width,Kt.height);for(let xt=0;xt<6;xt++){ut=Vt[xt].mipmaps;for(let Dt=0;Dt<ut.length;Dt++){const Nt=ut[Dt];b.format!==Fi?jt!==null?ue?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,Nt.width,Nt.height,jt,Nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,re,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,Nt.width,Nt.height,jt,Pt,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,re,Nt.width,Nt.height,0,jt,Pt,Nt.data)}}}else{if(ut=b.mipmaps,ue&&He){ut.length>0&&Ut++;const xt=Qt(Vt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,re,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(wt){ue?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt[xt].width,Vt[xt].height,jt,Pt,Vt[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,Vt[xt].width,Vt[xt].height,0,jt,Pt,Vt[xt].data);for(let Dt=0;Dt<ut.length;Dt++){const se=ut[Dt].image[xt].image;ue?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,se.width,se.height,jt,Pt,se.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,re,se.width,se.height,0,jt,Pt,se.data)}}else{ue?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,Pt,Vt[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,re,jt,Pt,Vt[xt]);for(let Dt=0;Dt<ut.length;Dt++){const Nt=ut[Dt];ue?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,jt,Pt,Nt.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,re,jt,Pt,Nt.image[xt])}}}S(b)&&x(s.TEXTURE_CUBE_MAP),gt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function bt(D,b,it,dt,Tt,gt){const Yt=c.convert(it.format,it.colorSpace),Lt=c.convert(it.type),Ht=N(it.internalFormat,Yt,Lt,it.colorSpace),Se=r.get(b),wt=r.get(it);if(wt.__renderTarget=b,!Se.__hasExternalTextures){const Vt=Math.max(1,b.width>>gt),Kt=Math.max(1,b.height>>gt);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,gt,Ht,Vt,Kt,b.depth,0,Yt,Lt,null):i.texImage2D(Tt,gt,Ht,Vt,Kt,0,Yt,Lt,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),_e(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,Tt,wt.__webglTexture,0,me(b)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,Tt,wt.__webglTexture,gt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function St(D,b,it){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){const dt=b.depthTexture,Tt=dt&&dt.isDepthTexture?dt.type:null,gt=U(b.stencilBuffer,Tt),Yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=me(b);_e(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,gt,b.width,b.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,gt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,D)}else{const dt=b.textures;for(let Tt=0;Tt<dt.length;Tt++){const gt=dt[Tt],Yt=c.convert(gt.format,gt.colorSpace),Lt=c.convert(gt.type),Ht=N(gt.internalFormat,Yt,Lt,gt.colorSpace),Se=me(b);it&&_e(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Ht,b.width,b.height):_e(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ht,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt(b.depthTexture,0);const Tt=dt.__webglTexture,gt=me(b);if(b.depthTexture.format===lo)_e(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(b.depthTexture.format===yo)_e(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const b=r.get(D),it=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const dt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",Tt)};dt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=dt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Gt(b.__webglFramebuffer,D)}else if(it){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=s.createRenderbuffer(),St(b.__webglDepthbuffer[dt],D,!1);else{const Tt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,gt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),St(b.__webglDepthbuffer,D,!1);else{const dt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,Tt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(D,b,it){const dt=r.get(D);b!==void 0&&bt(dt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&Ft(D)}function Wt(D){const b=D.texture,it=r.get(D),dt=r.get(b);D.addEventListener("dispose",O);const Tt=D.textures,gt=D.isWebGLCubeRenderTarget===!0,Yt=Tt.length>1;if(Yt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=b.version,h.memory.textures++),gt){it.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Lt]=[];for(let Ht=0;Ht<b.mipmaps.length;Ht++)it.__webglFramebuffer[Lt][Ht]=s.createFramebuffer()}else it.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)it.__webglFramebuffer[Lt]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Lt=0,Ht=Tt.length;Lt<Ht;Lt++){const Se=r.get(Tt[Lt]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),h.memory.textures++)}if(D.samples>0&&_e(D)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Tt.length;Lt++){const Ht=Tt[Lt];it.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Lt]);const Se=c.convert(Ht.format,Ht.colorSpace),wt=c.convert(Ht.type),Vt=N(Ht.internalFormat,Se,wt,Ht.colorSpace,D.isXRRenderTarget===!0),Kt=me(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Vt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,it.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),St(it.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(s.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ht=0;Ht<b.mipmaps.length;Ht++)bt(it.__webglFramebuffer[Lt][Ht],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ht);else bt(it.__webglFramebuffer[Lt],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);S(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Lt=0,Ht=Tt.length;Lt<Ht;Lt++){const Se=Tt[Lt],wt=r.get(Se);i.bindTexture(s.TEXTURE_2D,wt.__webglTexture),nt(s.TEXTURE_2D,Se),bt(it.__webglFramebuffer,D,Se,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,0),S(Se)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,dt.__webglTexture),nt(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ht=0;Ht<b.mipmaps.length;Ht++)bt(it.__webglFramebuffer[Ht],D,b,s.COLOR_ATTACHMENT0,Lt,Ht);else bt(it.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,Lt,0);S(b)&&x(Lt),i.unbindTexture()}D.depthBuffer&&Ft(D)}function ee(D){const b=D.textures;for(let it=0,dt=b.length;it<dt;it++){const Tt=b[it];if(S(Tt)){const gt=z(D),Yt=r.get(Tt).__webglTexture;i.bindTexture(gt,Yt),x(gt),i.unbindTexture()}}}const Ce=[],B=[];function cn(D){if(D.samples>0){if(_e(D)===!1){const b=D.textures,it=D.width,dt=D.height;let Tt=s.COLOR_BUFFER_BIT;const gt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=r.get(D),Lt=b.length>1;if(Lt)for(let Ht=0;Ht<b.length;Ht++)i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Ht=0;Ht<b.length;Ht++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[Ht]);const Se=r.get(b[Ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,it,dt,0,0,it,dt,Tt,s.NEAREST),m===!0&&(Ce.length=0,B.length=0,Ce.push(s.COLOR_ATTACHMENT0+Ht),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ce.push(gt),B.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Ht=0;Ht<b.length;Ht++){i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[Ht]);const Se=r.get(b[Ht]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ht,s.TEXTURE_2D,Se,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function me(D){return Math.min(l.maxSamples,D.samples)}function _e(D){const b=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Zt(D){const b=h.render.frame;g.get(D)!==b&&(g.set(D,b),D.update())}function Ue(D,b){const it=D.colorSpace,dt=D.format,Tt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||it!==So&&it!==fr&&(ze.getTransfer(it)===Xe?(dt!==Fi||Tt!==Oa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=ct,this.setTexture2D=mt,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Rt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=_e}function Fw(s,t){function i(r,l=fr){let c;const h=ze.getTransfer(l);if(r===Oa)return s.UNSIGNED_BYTE;if(r===Gp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bx)return s.BYTE;if(r===Ax)return s.SHORT;if(r===Ol)return s.UNSIGNED_SHORT;if(r===Hp)return s.INT;if(r===ss)return s.UNSIGNED_INT;if(r===Ua)return s.FLOAT;if(r===Bl)return s.HALF_FLOAT;if(r===wx)return s.ALPHA;if(r===Cx)return s.RGB;if(r===Fi)return s.RGBA;if(r===Ux)return s.LUMINANCE;if(r===Dx)return s.LUMINANCE_ALPHA;if(r===lo)return s.DEPTH_COMPONENT;if(r===yo)return s.DEPTH_STENCIL;if(r===Lx)return s.RED;if(r===kp)return s.RED_INTEGER;if(r===Nx)return s.RG;if(r===Xp)return s.RG_INTEGER;if(r===qp)return s.RGBA_INTEGER;if(r===Au||r===Ru||r===wu||r===Cu)if(h===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sp||r===op||r===lp||r===cp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===op)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===up||r===fp||r===hp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===up||r===fp)return h===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===hp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===dp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uu||r===Rp||r===wp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Uu)return h===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ox||r===Cp||r===Up||r===Dp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Uu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Up)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const Hw={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),x=this._getHandJoint(p,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new dr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vw=`
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

}`;class kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new ti,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new _r({vertexShader:Gw,fragmentShader:Vw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Gl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xw extends Eo{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,_=null,M=null,E=null;const A=new kw,S=i.getContextAttributes();let x=null,z=null;const N=[],U=[],j=new Ie;let G=null;const O=new Ai;O.viewport=new an;const V=new Ai;V.viewport=new an;const C=[O,V],w=new fT;let F=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ft=N[Z];return ft===void 0&&(ft=new Pd,N[Z]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Z){let ft=N[Z];return ft===void 0&&(ft=new Pd,N[Z]=ft),ft.getGripSpace()},this.getHand=function(Z){let ft=N[Z];return ft===void 0&&(ft=new Pd,N[Z]=ft),ft.getHandSpace()};function tt(Z){const ft=U.indexOf(Z.inputSource);if(ft===-1)return;const bt=N[ft];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,p||h),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function vt(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",mt);for(let Z=0;Z<N.length;Z++){const ft=U[Z];ft!==null&&(U[Z]=null,N[Z].disconnect(ft))}F=null,ct=null,A.reset(),t.setRenderTarget(x),M=null,_=null,v=null,l=null,z=null,Mt.stop(),r.isPresenting=!1,t.setPixelRatio(G),t.setSize(j.width,j.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",mt),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(j),l.renderState.layers===void 0){const ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new os(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:Oa,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil})}else{let ft=null,bt=null,St=null;S.depth&&(St=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=S.stencil?yo:lo,bt=S.stencil?xo:ss);const Gt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:c};v=new XRWebGLBinding(l,i),_=v.createProjectionLayer(Gt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),z=new os(_.textureWidth,_.textureHeight,{format:Fi,type:Oa,depthTexture:new Qx(_.textureWidth,_.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function mt(Z){for(let ft=0;ft<Z.removed.length;ft++){const bt=Z.removed[ft],St=U.indexOf(bt);St>=0&&(U[St]=null,N[St].disconnect(bt))}for(let ft=0;ft<Z.added.length;ft++){const bt=Z.added[ft];let St=U.indexOf(bt);if(St===-1){for(let Ft=0;Ft<N.length;Ft++)if(Ft>=U.length){U.push(bt),St=Ft;break}else if(U[Ft]===null){U[Ft]=bt,St=Ft;break}if(St===-1)break}const Gt=N[St];Gt&&Gt.connect(bt)}}const P=new $,Q=new $;function q(Z,ft,bt){P.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);const St=P.distanceTo(Q),Gt=ft.projectionMatrix.elements,Ft=bt.projectionMatrix.elements,Rt=Gt[14]/(Gt[10]-1),Wt=Gt[14]/(Gt[10]+1),ee=(Gt[9]+1)/Gt[5],Ce=(Gt[9]-1)/Gt[5],B=(Gt[8]-1)/Gt[0],cn=(Ft[8]+1)/Ft[0],me=Rt*B,_e=Rt*cn,Zt=St/(-B+cn),Ue=Zt*-B;if(ft.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(Zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Gt[10]===-1)Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Qt=Rt+Zt,D=Wt+Zt,b=me-Ue,it=_e+(St-Ue),dt=ee*Wt/D*Qt,Tt=Ce*Wt/D*Qt;Z.projectionMatrix.makePerspective(b,it,dt,Tt,Qt,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Et(Z,ft){ft===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ft.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let ft=Z.near,bt=Z.far;A.texture!==null&&(A.depthNear>0&&(ft=A.depthNear),A.depthFar>0&&(bt=A.depthFar)),w.near=V.near=O.near=ft,w.far=V.far=O.far=bt,(F!==w.near||ct!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,ct=w.far),O.layers.mask=Z.layers.mask|2,V.layers.mask=Z.layers.mask|4,w.layers.mask=O.layers.mask|V.layers.mask;const St=Z.parent,Gt=w.cameras;Et(w,St);for(let Ft=0;Ft<Gt.length;Ft++)Et(Gt[Ft],St);Gt.length===2?q(w,O,V):w.projectionMatrix.copy(O.projectionMatrix),At(Z,w,St)};function At(Z,ft,bt){bt===null?Z.matrix.copy(ft.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ft.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ft.projectionMatrix),Z.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let L=null;function nt(Z,ft){if(g=ft.getViewerPose(p||h),E=ft,g!==null){const bt=g.views;M!==null&&(t.setRenderTargetFramebuffer(z,M.framebuffer),t.setRenderTarget(z));let St=!1;bt.length!==w.cameras.length&&(w.cameras.length=0,St=!0);for(let Ft=0;Ft<bt.length;Ft++){const Rt=bt[Ft];let Wt=null;if(M!==null)Wt=M.getViewport(Rt);else{const Ce=v.getViewSubImage(_,Rt);Wt=Ce.viewport,Ft===0&&(t.setRenderTargetTextures(z,Ce.colorTexture,_.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(z))}let ee=C[Ft];ee===void 0&&(ee=new Ai,ee.layers.enable(Ft),ee.viewport=new an,C[Ft]=ee),ee.matrix.fromArray(Rt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Rt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Ft===0&&(w.matrix.copy(ee.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),St===!0&&w.cameras.push(ee)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ft=v.getDepthInformation(bt[0]);Ft&&Ft.isValid&&Ft.texture&&A.init(t,Ft,l.renderState)}}for(let bt=0;bt<N.length;bt++){const St=U[bt],Gt=N[bt];St!==null&&Gt!==void 0&&Gt.update(St,ft,p||h)}L&&L(Z,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Mt=new ty;Mt.setAnimationLoop(nt),this.setAnimationLoop=function(Z){L=Z},this.dispose=function(){}}}const qr=new ea,qw=new $e;function Ww(s,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,Wx(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,z,N,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),v(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&M(S,x,U)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),A(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?m(S,x,z,N):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===$n&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===$n&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const z=t.get(x),N=z.envMap,U=z.envMapRotation;N&&(S.envMap.value=N,qr.copy(U),qr.x*=-1,qr.y*=-1,qr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(qr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,z,N){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*z,S.scale.value=N*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,z){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const z=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Yw(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,N){const U=N.program;r.uniformBlockBinding(z,U)}function p(z,N){let U=l[z.id];U===void 0&&(E(z),U=g(z),l[z.id]=U,z.addEventListener("dispose",S));const j=N.program;r.updateUBOMapping(z,j);const G=t.render.frame;c[z.id]!==G&&(_(z),c[z.id]=G)}function g(z){const N=v();z.__bindingPointIndex=N;const U=s.createBuffer(),j=z.__size,G=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,j,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,U),U}function v(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(z){const N=l[z.id],U=z.uniforms,j=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let G=0,O=U.length;G<O;G++){const V=Array.isArray(U[G])?U[G]:[U[G]];for(let C=0,w=V.length;C<w;C++){const F=V[C];if(M(F,G,C,j)===!0){const ct=F.__offset,tt=Array.isArray(F.value)?F.value:[F.value];let vt=0;for(let mt=0;mt<tt.length;mt++){const P=tt[mt],Q=A(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,ct+vt,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,vt),vt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(z,N,U,j){const G=z.value,O=N+"_"+U;if(j[O]===void 0)return typeof G=="number"||typeof G=="boolean"?j[O]=G:j[O]=G.clone(),!0;{const V=j[O];if(typeof G=="number"||typeof G=="boolean"){if(V!==G)return j[O]=G,!0}else if(V.equals(G)===!1)return V.copy(G),!0}return!1}function E(z){const N=z.uniforms;let U=0;const j=16;for(let O=0,V=N.length;O<V;O++){const C=Array.isArray(N[O])?N[O]:[N[O]];for(let w=0,F=C.length;w<F;w++){const ct=C[w],tt=Array.isArray(ct.value)?ct.value:[ct.value];for(let vt=0,mt=tt.length;vt<mt;vt++){const P=tt[vt],Q=A(P),q=U%j,Et=q%Q.boundary,At=q+Et;U+=Et,At!==0&&j-At<Q.storage&&(U+=j-At),ct.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=U,U+=Q.storage}}}const G=U%j;return G>0&&(U+=j-G),z.__size=U,z.__cache={},this}function A(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function S(z){const N=z.target;N.removeEventListener("dispose",S);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const z in l)s.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}class jw{constructor(t={}){const{canvas:i=C1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,x=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=mr,this.toneMappingExposure=1;const U=this;let j=!1,G=0,O=0,V=null,C=-1,w=null;const F=new an,ct=new an;let tt=null;const vt=new we(0);let mt=0,P=i.width,Q=i.height,q=1,Et=null,At=null;const L=new an(0,0,P,Q),nt=new an(0,0,P,Q);let Mt=!1;const Z=new Yp;let ft=!1,bt=!1;const St=new $e,Gt=new $e,Ft=new $,Rt=new an,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function Ce(){return V===null?q:1}let B=r;function cn(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fp}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),B===null){const X="webgl2";if(B=cn(X,R),B===null)throw cn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let me,_e,Zt,Ue,Qt,D,b,it,dt,Tt,gt,Yt,Lt,Ht,Se,wt,Vt,Kt,jt,Pt,re,ue,He,k;function Ut(){me=new iR(B),me.init(),ue=new Fw(B,me),_e=new KA(B,me,t,ue),Zt=new Iw(B,me),_e.reverseDepthBuffer&&_&&Zt.buffers.depth.setReversed(!0),Ue=new sR(B),Qt=new Tw,D=new Bw(B,me,Zt,Qt,_e,ue,Ue),b=new $A(U),it=new nR(U),dt=new dT(B),He=new ZA(B,dt),Tt=new aR(B,dt,Ue,He),gt=new lR(B,Tt,dt,Ue),jt=new oR(B,_e,D),wt=new JA(Qt),Yt=new Ew(U,b,it,me,_e,He,wt),Lt=new Ww(U,Qt),Ht=new Aw,Se=new Lw(me),Kt=new jA(U,b,it,Zt,gt,M,m),Vt=new zw(U,gt,_e),k=new Yw(B,Ue,_e,Zt),Pt=new QA(B,me,Ue),re=new rR(B,me,Ue),Ue.programs=Yt.programs,U.capabilities=_e,U.extensions=me,U.properties=Qt,U.renderLists=Ht,U.shadowMap=Vt,U.state=Zt,U.info=Ue}Ut();const ut=new Xw(U,B);this.xr=ut,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(P,Q,!1))},this.getSize=function(R){return R.set(P,Q)},this.setSize=function(R,X,rt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Q=X,i.width=Math.floor(R*q),i.height=Math.floor(X*q),rt===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(P*q,Q*q).floor()},this.setDrawingBufferSize=function(R,X,rt){P=R,Q=X,q=rt,i.width=Math.floor(R*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,X,rt,st){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,X,rt,st),Zt.viewport(F.copy(L).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,X,rt,st){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,X,rt,st),Zt.scissor(ct.copy(nt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Zt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){Et=R},this.setTransparentSort=function(R){At=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(R=!0,X=!0,rt=!0){let st=0;if(R){let W=!1;if(V!==null){const yt=V.texture.format;W=yt===qp||yt===Xp||yt===kp}if(W){const yt=V.texture.type,Ot=yt===Oa||yt===ss||yt===Ol||yt===xo||yt===Gp||yt===Vp,Bt=Kt.getClearColor(),It=Kt.getClearAlpha(),te=Bt.r,oe=Bt.g,Jt=Bt.b;Ot?(E[0]=te,E[1]=oe,E[2]=Jt,E[3]=It,B.clearBufferuiv(B.COLOR,0,E)):(A[0]=te,A[1]=oe,A[2]=Jt,A[3]=It,B.clearBufferiv(B.COLOR,0,A))}else st|=B.COLOR_BUFFER_BIT}X&&(st|=B.DEPTH_BUFFER_BIT),rt&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Kt.dispose(),Ht.dispose(),Se.dispose(),Qt.dispose(),b.dispose(),it.dispose(),gt.dispose(),He.dispose(),k.dispose(),Yt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",wo),ut.removeEventListener("sessionend",Co),Gi.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const R=Ue.autoReset,X=Vt.enabled,rt=Vt.autoUpdate,st=Vt.needsUpdate,W=Vt.type;Ut(),Ue.autoReset=R,Vt.enabled=X,Vt.autoUpdate=rt,Vt.needsUpdate=st,Vt.type=W}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function se(R){const X=R.target;X.removeEventListener("dispose",se),Ke(X)}function Ke(R){gn(R),Qt.remove(R)}function gn(R){const X=Qt.get(R).programs;X!==void 0&&(X.forEach(function(rt){Yt.releaseProgram(rt)}),R.isShaderMaterial&&Yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,rt,st,W,yt){X===null&&(X=Wt);const Ot=W.isMesh&&W.matrixWorld.determinant()<0,Bt=Do(R,X,rt,st,W);Zt.setMaterial(st,Ot);let It=rt.index,te=1;if(st.wireframe===!0){if(It=Tt.getWireframeAttribute(rt),It===void 0)return;te=2}const oe=rt.drawRange,Jt=rt.attributes.position;let Me=oe.start*te,De=(oe.start+oe.count)*te;yt!==null&&(Me=Math.max(Me,yt.start*te),De=Math.min(De,(yt.start+yt.count)*te)),It!==null?(Me=Math.max(Me,0),De=Math.min(De,It.count)):Jt!=null&&(Me=Math.max(Me,0),De=Math.min(De,Jt.count));const Ye=De-Me;if(Ye<0||Ye===1/0)return;He.setup(W,st,Bt,rt,It);let qe,fe=Pt;if(It!==null&&(qe=dt.get(It),fe=re,fe.setIndex(qe)),W.isMesh)st.wireframe===!0?(Zt.setLineWidth(st.wireframeLinewidth*Ce()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(W.isLine){let Xt=st.linewidth;Xt===void 0&&(Xt=1),Zt.setLineWidth(Xt*Ce()),W.isLineSegments?fe.setMode(B.LINES):W.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else W.isPoints?fe.setMode(B.POINTS):W.isSprite&&fe.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)fe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xt=W._multiDrawStarts,un=W._multiDrawCounts,Le=W._multiDrawCount,Fn=It?dt.get(It).bytesPerElement:1,ia=Qt.get(st).currentProgram.getUniforms();for(let Sn=0;Sn<Le;Sn++)ia.setValue(B,"_gl_DrawID",Sn),fe.render(Xt[Sn]/Fn,un[Sn])}else if(W.isInstancedMesh)fe.renderInstances(Me,Ye,W.count);else if(rt.isInstancedBufferGeometry){const Xt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,un=Math.min(rt.instanceCount,Xt);fe.renderInstances(Me,Ye,un)}else fe.render(Me,Ye)};function Re(R,X,rt){R.transparent===!0&&R.side===Ca&&R.forceSinglePass===!1?(R.side=$n,R.needsUpdate=!0,tn(R,X,rt),R.side=gr,R.needsUpdate=!0,tn(R,X,rt),R.side=Ca):tn(R,X,rt)}this.compile=function(R,X,rt=null){rt===null&&(rt=R),x=Se.get(rt),x.init(X),N.push(x),rt.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),R!==rt&&R.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(x.pushLight(W),W.castShadow&&x.pushShadow(W))}),x.setupLights();const st=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const yt=W.material;if(yt)if(Array.isArray(yt))for(let Ot=0;Ot<yt.length;Ot++){const Bt=yt[Ot];Re(Bt,rt,W),st.add(Bt)}else Re(yt,rt,W),st.add(yt)}),N.pop(),x=null,st},this.compileAsync=function(R,X,rt=null){const st=this.compile(R,X,rt);return new Promise(W=>{function yt(){if(st.forEach(function(Ot){Qt.get(Ot).currentProgram.isReady()&&st.delete(Ot)}),st.size===0){W(R);return}setTimeout(yt,10)}me.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Rn=null;function Ui(R){Rn&&Rn(R)}function wo(){Gi.stop()}function Co(){Gi.start()}const Gi=new ty;Gi.setAnimationLoop(Ui),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(R){Rn=R,ut.setAnimationLoop(R),R===null?Gi.stop():Gi.start()},ut.addEventListener("sessionstart",wo),ut.addEventListener("sessionend",Co),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(X),X=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,X,V),x=Se.get(R,N.length),x.init(X),N.push(x),Gt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Gt),bt=this.localClippingEnabled,ft=wt.init(this.clippingPlanes,bt),S=Ht.get(R,z.length),S.init(),z.push(S),ut.enabled===!0&&ut.isPresenting===!0){const yt=U.xr.getDepthSensingMesh();yt!==null&&xr(yt,X,-1/0,U.sortObjects)}xr(R,X,0,U.sortObjects),S.finish(),U.sortObjects===!0&&S.sort(Et,At),ee=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ee&&Kt.addToRenderList(S,R),this.info.render.frame++,ft===!0&&wt.beginShadows();const rt=x.state.shadowsArray;Vt.render(rt,R,X),ft===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=S.opaque,W=S.transmissive;if(x.setupLights(),X.isArrayCamera){const yt=X.cameras;if(W.length>0)for(let Ot=0,Bt=yt.length;Ot<Bt;Ot++){const It=yt[Ot];Uo(st,W,R,It)}ee&&Kt.render(R);for(let Ot=0,Bt=yt.length;Ot<Bt;Ot++){const It=yt[Ot];ls(S,R,It,It.viewport)}}else W.length>0&&Uo(st,W,R,X),ee&&Kt.render(R),ls(S,R,X);V!==null&&(D.updateMultisampleRenderTarget(V),D.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(U,R,X),He.resetDefaultState(),C=-1,w=null,N.pop(),N.length>0?(x=N[N.length-1],ft===!0&&wt.setGlobalState(U.clippingPlanes,x.state.camera)):x=null,z.pop(),z.length>0?S=z[z.length-1]:S=null};function xr(R,X,rt,st){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){st&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Gt);const Ot=gt.update(R),Bt=R.material;Bt.visible&&S.push(R,Ot,Bt,rt,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const Ot=gt.update(R),Bt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Rt.copy(Ot.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(Gt)),Array.isArray(Bt)){const It=Ot.groups;for(let te=0,oe=It.length;te<oe;te++){const Jt=It[te],Me=Bt[Jt.materialIndex];Me&&Me.visible&&S.push(R,Ot,Me,rt,Rt.z,Jt)}}else Bt.visible&&S.push(R,Ot,Bt,rt,Rt.z,null)}}const yt=R.children;for(let Ot=0,Bt=yt.length;Ot<Bt;Ot++)xr(yt[Ot],X,rt,st)}function ls(R,X,rt,st){const W=R.opaque,yt=R.transmissive,Ot=R.transparent;x.setupLightsView(rt),ft===!0&&wt.setGlobalState(U.clippingPlanes,rt),st&&Zt.viewport(F.copy(st)),W.length>0&&yr(W,X,rt),yt.length>0&&yr(yt,X,rt),Ot.length>0&&yr(Ot,X,rt),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function Uo(R,X,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new os(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Bl:Oa,minFilter:Kr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const yt=x.state.transmissionRenderTarget[st.id],Ot=st.viewport||F;yt.setSize(Ot.z,Ot.w);const Bt=U.getRenderTarget();U.setRenderTarget(yt),U.getClearColor(vt),mt=U.getClearAlpha(),mt<1&&U.setClearColor(16777215,.5),U.clear(),ee&&Kt.render(rt);const It=U.toneMapping;U.toneMapping=mr;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),ft===!0&&wt.setGlobalState(U.clippingPlanes,st),yr(R,rt,st),D.updateMultisampleRenderTarget(yt),D.updateRenderTargetMipmap(yt),me.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Jt=0,Me=X.length;Jt<Me;Jt++){const De=X[Jt],Ye=De.object,qe=De.geometry,fe=De.material,Xt=De.group;if(fe.side===Ca&&Ye.layers.test(st.layers)){const un=fe.side;fe.side=$n,fe.needsUpdate=!0,Di(Ye,rt,st,qe,fe,Xt),fe.side=un,fe.needsUpdate=!0,oe=!0}}oe===!0&&(D.updateMultisampleRenderTarget(yt),D.updateRenderTargetMipmap(yt))}U.setRenderTarget(Bt),U.setClearColor(vt,mt),te!==void 0&&(st.viewport=te),U.toneMapping=It}function yr(R,X,rt){const st=X.isScene===!0?X.overrideMaterial:null;for(let W=0,yt=R.length;W<yt;W++){const Ot=R[W],Bt=Ot.object,It=Ot.geometry,te=st===null?Ot.material:st,oe=Ot.group;Bt.layers.test(rt.layers)&&Di(Bt,X,rt,It,te,oe)}}function Di(R,X,rt,st,W,yt){R.onBeforeRender(U,X,rt,st,W,yt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(U,X,rt,st,R,yt),W.transparent===!0&&W.side===Ca&&W.forceSinglePass===!1?(W.side=$n,W.needsUpdate=!0,U.renderBufferDirect(rt,X,st,W,R,yt),W.side=gr,W.needsUpdate=!0,U.renderBufferDirect(rt,X,st,W,R,yt),W.side=Ca):U.renderBufferDirect(rt,X,st,W,R,yt),R.onAfterRender(U,X,rt,st,W,yt)}function tn(R,X,rt){X.isScene!==!0&&(X=Wt);const st=Qt.get(R),W=x.state.lights,yt=x.state.shadowsArray,Ot=W.state.version,Bt=Yt.getParameters(R,W.state,yt,X,rt),It=Yt.getProgramCacheKey(Bt);let te=st.programs;st.environment=R.isMeshStandardMaterial?X.environment:null,st.fog=X.fog,st.envMap=(R.isMeshStandardMaterial?it:b).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",se),te=new Map,st.programs=te);let oe=te.get(It);if(oe!==void 0){if(st.currentProgram===oe&&st.lightsStateVersion===Ot)return na(R,Bt),oe}else Bt.uniforms=Yt.getUniforms(R),R.onBeforeCompile(Bt,U),oe=Yt.acquireProgram(Bt,It),te.set(It,oe),st.uniforms=Bt.uniforms;const Jt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=wt.uniform),na(R,Bt),st.needsLights=Xu(R),st.lightsStateVersion=Ot,st.needsLights&&(Jt.ambientLightColor.value=W.state.ambient,Jt.lightProbe.value=W.state.probe,Jt.directionalLights.value=W.state.directional,Jt.directionalLightShadows.value=W.state.directionalShadow,Jt.spotLights.value=W.state.spot,Jt.spotLightShadows.value=W.state.spotShadow,Jt.rectAreaLights.value=W.state.rectArea,Jt.ltc_1.value=W.state.rectAreaLTC1,Jt.ltc_2.value=W.state.rectAreaLTC2,Jt.pointLights.value=W.state.point,Jt.pointLightShadows.value=W.state.pointShadow,Jt.hemisphereLights.value=W.state.hemi,Jt.directionalShadowMap.value=W.state.directionalShadowMap,Jt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Jt.spotShadowMap.value=W.state.spotShadowMap,Jt.spotLightMatrix.value=W.state.spotLightMatrix,Jt.spotLightMap.value=W.state.spotLightMap,Jt.pointShadowMap.value=W.state.pointShadowMap,Jt.pointShadowMatrix.value=W.state.pointShadowMatrix),st.currentProgram=oe,st.uniformsList=null,oe}function wn(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Du.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function na(R,X){const rt=Qt.get(R);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function Do(R,X,rt,st,W){X.isScene!==!0&&(X=Wt),D.resetTextureUnits();const yt=X.fog,Ot=st.isMeshStandardMaterial?X.environment:null,Bt=V===null?U.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:So,It=(st.isMeshStandardMaterial?it:b).get(st.envMap||Ot),te=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,oe=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Jt=!!rt.morphAttributes.position,Me=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Ye=mr;st.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ye=U.toneMapping);const qe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,fe=qe!==void 0?qe.length:0,Xt=Qt.get(st),un=x.state.lights;if(ft===!0&&(bt===!0||R!==w)){const _n=R===w&&st.id===C;wt.setState(st,R,_n)}let Le=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==un.state.version||Xt.outputColorSpace!==Bt||W.isBatchedMesh&&Xt.batching===!1||!W.isBatchedMesh&&Xt.batching===!0||W.isBatchedMesh&&Xt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xt.instancing===!1||!W.isInstancedMesh&&Xt.instancing===!0||W.isSkinnedMesh&&Xt.skinning===!1||!W.isSkinnedMesh&&Xt.skinning===!0||W.isInstancedMesh&&Xt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xt.instancingMorph===!1&&W.morphTexture!==null||Xt.envMap!==It||st.fog===!0&&Xt.fog!==yt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==wt.numPlanes||Xt.numIntersection!==wt.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==oe||Xt.morphTargets!==Jt||Xt.morphNormals!==Me||Xt.morphColors!==De||Xt.toneMapping!==Ye||Xt.morphTargetsCount!==fe)&&(Le=!0):(Le=!0,Xt.__version=st.version);let Fn=Xt.currentProgram;Le===!0&&(Fn=tn(st,X,W));let ia=!1,Sn=!1,Mr=!1;const ve=Fn.getUniforms(),zn=Xt.uniforms;if(Zt.useProgram(Fn.program)&&(ia=!0,Sn=!0,Mr=!0),st.id!==C&&(C=st.id,Sn=!0),ia||w!==R){Zt.buffers.depth.getReversed()?(St.copy(R.projectionMatrix),D1(St),L1(St),ve.setValue(B,"projectionMatrix",St)):ve.setValue(B,"projectionMatrix",R.projectionMatrix),ve.setValue(B,"viewMatrix",R.matrixWorldInverse);const rn=ve.map.cameraPosition;rn!==void 0&&rn.setValue(B,Ft.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&ve.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ve.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Sn=!0,Mr=!0)}if(W.isSkinnedMesh){ve.setOptional(B,W,"bindMatrix"),ve.setOptional(B,W,"bindMatrixInverse");const _n=W.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),ve.setValue(B,"boneTexture",_n.boneTexture,D))}W.isBatchedMesh&&(ve.setOptional(B,W,"batchingTexture"),ve.setValue(B,"batchingTexture",W._matricesTexture,D),ve.setOptional(B,W,"batchingIdTexture"),ve.setValue(B,"batchingIdTexture",W._indirectTexture,D),ve.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&ve.setValue(B,"batchingColorTexture",W._colorsTexture,D));const Hn=rt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&jt.update(W,rt,Fn),(Sn||Xt.receiveShadow!==W.receiveShadow)&&(Xt.receiveShadow=W.receiveShadow,ve.setValue(B,"receiveShadow",W.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(zn.envMap.value=It,zn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&X.environment!==null&&(zn.envMapIntensity.value=X.environmentIntensity),Sn&&(ve.setValue(B,"toneMappingExposure",U.toneMappingExposure),Xt.needsLights&&ku(zn,Mr),yt&&st.fog===!0&&Lt.refreshFogUniforms(zn,yt),Lt.refreshMaterialUniforms(zn,st,q,Q,x.state.transmissionRenderTarget[R.id]),Du.upload(B,wn(Xt),zn,D)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Du.upload(B,wn(Xt),zn,D),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ve.setValue(B,"center",W.center),ve.setValue(B,"modelViewMatrix",W.modelViewMatrix),ve.setValue(B,"normalMatrix",W.normalMatrix),ve.setValue(B,"modelMatrix",W.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const _n=st.uniformsGroups;for(let rn=0,cs=_n.length;rn<cs;rn++){const Vi=_n[rn];k.update(Vi,Fn),k.bind(Vi,Fn)}}return Fn}function ku(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Xu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,X,rt){Qt.get(R.texture).__webglTexture=X,Qt.get(R.depthTexture).__webglTexture=rt;const st=Qt.get(R);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const rt=Qt.get(R);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,rt=0){V=R,G=X,O=rt;let st=!0,W=null,yt=!1,Ot=!1;if(R){const It=Qt.get(R);if(It.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(It.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(It.__hasExternalTextures)D.rebindTextures(R,Qt.get(R.texture).__webglTexture,Qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(It.__boundDepthTexture!==Jt){if(Jt!==null&&Qt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ot=!0);const oe=Qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[X])?W=oe[X][rt]:W=oe[X],yt=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?W=Qt.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?W=oe[rt]:W=oe,F.copy(R.viewport),ct.copy(R.scissor),tt=R.scissorTest}else F.copy(L).multiplyScalar(q).floor(),ct.copy(nt).multiplyScalar(q).floor(),tt=Mt;if(Zt.bindFramebuffer(B.FRAMEBUFFER,W)&&st&&Zt.drawBuffers(R,W),Zt.viewport(F),Zt.scissor(ct),Zt.setScissorTest(tt),yt){const It=Qt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,It.__webglTexture,rt)}else if(Ot){const It=Qt.get(R.texture),te=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,rt||0,te)}C=-1},this.readRenderTargetPixels=function(R,X,rt,st,W,yt,Ot){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){Zt.bindFramebuffer(B.FRAMEBUFFER,Bt);try{const It=R.texture,te=It.format,oe=It.type;if(!_e.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-st&&rt>=0&&rt<=R.height-W&&B.readPixels(X,rt,st,W,ue.convert(te),ue.convert(oe),yt)}finally{const It=V!==null?Qt.get(V).__webglFramebuffer:null;Zt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(R,X,rt,st,W,yt,Ot){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){const It=R.texture,te=It.format,oe=It.type;if(!_e.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-st&&rt>=0&&rt<=R.height-W){Zt.bindFramebuffer(B.FRAMEBUFFER,Bt);const Jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Jt),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),B.readPixels(X,rt,st,W,ue.convert(te),ue.convert(oe),0);const Me=V!==null?Qt.get(V).__webglFramebuffer:null;Zt.bindFramebuffer(B.FRAMEBUFFER,Me);const De=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await U1(B,De,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.deleteBuffer(Jt),B.deleteSync(De),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,rt=0){R.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const st=Math.pow(2,-rt),W=Math.floor(R.image.width*st),yt=Math.floor(R.image.height*st),Ot=X!==null?X.x:0,Bt=X!==null?X.y:0;D.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,rt,0,0,Ot,Bt,W,yt),Zt.unbindTexture()};const Vl=B.createFramebuffer(),Sr=B.createFramebuffer();this.copyTextureToTexture=function(R,X,rt=null,st=null,W=0,yt=null){R.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,R=arguments[1],X=arguments[2],yt=arguments[3]||0,rt=null),yt===null&&(W!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=W,W=0):yt=0);let Ot,Bt,It,te,oe,Jt,Me,De,Ye;const qe=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(rt!==null)Ot=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,te=rt.min.x,oe=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const Hn=Math.pow(2,-W);Ot=Math.floor(qe.width*Hn),Bt=Math.floor(qe.height*Hn),R.isDataArrayTexture?It=qe.depth:R.isData3DTexture?It=Math.floor(qe.depth*Hn):It=1,te=0,oe=0,Jt=0}st!==null?(Me=st.x,De=st.y,Ye=st.z):(Me=0,De=0,Ye=0);const fe=ue.convert(X.format),Xt=ue.convert(X.type);let un;X.isData3DTexture?(D.setTexture3D(X,0),un=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),un=B.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),un=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Le=B.getParameter(B.UNPACK_ROW_LENGTH),Fn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ia=B.getParameter(B.UNPACK_SKIP_PIXELS),Sn=B.getParameter(B.UNPACK_SKIP_ROWS),Mr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,qe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Jt);const ve=R.isDataArrayTexture||R.isData3DTexture,zn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Hn=Qt.get(R),_n=Qt.get(X),rn=Qt.get(Hn.__renderTarget),cs=Qt.get(_n.__renderTarget);Zt.bindFramebuffer(B.READ_FRAMEBUFFER,rn.__webglFramebuffer),Zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let Vi=0;Vi<It;Vi++)ve&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qt.get(R).__webglTexture,W,Jt+Vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Qt.get(X).__webglTexture,yt,Ye+Vi)),B.blitFramebuffer(te,oe,Ot,Bt,Me,De,Ot,Bt,B.DEPTH_BUFFER_BIT,B.NEAREST);Zt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||Qt.has(R)){const Hn=Qt.get(R),_n=Qt.get(X);Zt.bindFramebuffer(B.READ_FRAMEBUFFER,Vl),Zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sr);for(let rn=0;rn<It;rn++)ve?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Hn.__webglTexture,W,Jt+rn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Hn.__webglTexture,W),zn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,_n.__webglTexture,yt,Ye+rn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_n.__webglTexture,yt),W!==0?B.blitFramebuffer(te,oe,Ot,Bt,Me,De,Ot,Bt,B.COLOR_BUFFER_BIT,B.NEAREST):zn?B.copyTexSubImage3D(un,yt,Me,De,Ye+rn,te,oe,Ot,Bt):B.copyTexSubImage2D(un,yt,Me,De,te,oe,Ot,Bt);Zt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(un,yt,Me,De,Ye,Ot,Bt,It,fe,Xt,qe.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(un,yt,Me,De,Ye,Ot,Bt,It,fe,qe.data):B.texSubImage3D(un,yt,Me,De,Ye,Ot,Bt,It,fe,Xt,qe):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,yt,Me,De,Ot,Bt,fe,Xt,qe.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,yt,Me,De,qe.width,qe.height,fe,qe.data):B.texSubImage2D(B.TEXTURE_2D,yt,Me,De,Ot,Bt,fe,Xt,qe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Le),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Fn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ia),B.pixelStorei(B.UNPACK_SKIP_ROWS,Sn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Mr),yt===0&&X.generateMipmaps&&B.generateMipmap(un),Zt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,rt=null,st=null,W=0){return R.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,R=arguments[2],X=arguments[3],W=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,rt,st,W)},this.initRenderTarget=function(R){Qt.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Zt.unbindTexture()},this.resetState=function(){G=0,O=0,V=null,Zt.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=ze._getUnpackColorSpace()}}const Al=new $;function Ei(s,t,i,r,l,c){const h=2*Math.PI*l/4,d=Math.max(c-2*l,0),m=Math.PI/4;Al.copy(t),Al[r]=0,Al.normalize();const p=.5*h/(h+d),g=1-Al.angleTo(s)/m;return Math.sign(Al[i])===1?g*p:d/(h+d)+p+p*(1-g)}class Zw extends Ao{constructor(t=1,i=1,r=1,l=2,c=.1){if(l=l*2+1,c=Math.min(t/2,i/2,r/2,c),super(1,1,1,l,l,l),l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const d=new $,m=new $,p=new $(t,i,r).divideScalar(2).subScalar(c),g=this.attributes.position.array,v=this.attributes.normal.array,_=this.attributes.uv.array,M=g.length/6,E=new $,A=.5/l;for(let S=0,x=0;S<g.length;S+=3,x+=2)switch(d.fromArray(g,S),m.copy(d),m.x-=Math.sign(m.x)*A,m.y-=Math.sign(m.y)*A,m.z-=Math.sign(m.z)*A,m.normalize(),g[S+0]=p.x*Math.sign(d.x)+m.x*c,g[S+1]=p.y*Math.sign(d.y)+m.y*c,g[S+2]=p.z*Math.sign(d.z)+m.z*c,v[S+0]=m.x,v[S+1]=m.y,v[S+2]=m.z,Math.floor(S/M)){case 0:E.set(1,0,0),_[x+0]=Ei(E,m,"z","y",c,r),_[x+1]=1-Ei(E,m,"y","z",c,i);break;case 1:E.set(-1,0,0),_[x+0]=1-Ei(E,m,"z","y",c,r),_[x+1]=1-Ei(E,m,"y","z",c,i);break;case 2:E.set(0,1,0),_[x+0]=1-Ei(E,m,"x","z",c,t),_[x+1]=Ei(E,m,"z","x",c,r);break;case 3:E.set(0,-1,0),_[x+0]=1-Ei(E,m,"x","z",c,t),_[x+1]=1-Ei(E,m,"z","x",c,r);break;case 4:E.set(0,0,1),_[x+0]=1-Ei(E,m,"x","y",c,t),_[x+1]=1-Ei(E,m,"y","x",c,i);break;case 5:E.set(0,0,-1),_[x+0]=Ei(E,m,"x","y",c,t),_[x+1]=1-Ei(E,m,"y","x",c,i);break}}}const Id=1.005,Bd=.972,$0=.78,Fd=.492,tx=new Zw(Bd,Bd,Bd,3,.035),Qw=new Gl($0,$0),ry=new Kx({color:"#121826",roughness:.64,metalness:.08}),Kw=new Zx({color:"#0a0f1d",transparent:!0,opacity:.72});function Jw({cubies:s,activeMove:t,onMoveComplete:i,viewResetKey:r}){const l=le.useRef(null),c=le.useRef(null),h=le.useRef(s),d=le.useRef(null);le.useEffect(()=>{h.current=s,t||ex(s,c.current)},[t,s]),le.useEffect(()=>{const p=l.current;if(!p)return;const g=new eT;g.background=null;const v=new Ai(38,1,.1,100);v.position.set(5.3,4.2,6.4),v.lookAt(0,0,0);const _=new jw({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.outputColorSpace=fi,_.shadowMap.enabled=!0,_.shadowMap.type=Mx,p.appendChild(_.domElement);const M=new dr;M.rotation.set(0,0,0),g.add(M);const E=new dr;M.add(E);const A=new lT("#ffffff","#64748b",1.6);g.add(A);const S=new R0("#ffffff",3.2);S.position.set(4,6,6),S.castShadow=!0,S.shadow.mapSize.set(1024,1024),g.add(S);const x=new R0("#e0f2fe",1.2);x.position.set(-5,2,-4),g.add(x);const z={scene:g,camera:v,renderer:_,cubeRoot:E,viewRoot:M,cubieGroups:new Map,frameId:0,dragging:!1,pointer:{x:0,y:0}};c.current=z,ex(h.current,z);const N=()=>{const C=p.getBoundingClientRect(),w=Math.max(320,C.width),F=Math.max(320,C.height);_.setSize(w,F,!1),v.aspect=w/F,v.updateProjectionMatrix()},U=()=>{z.frameId=requestAnimationFrame(U),_.render(g,v)},j=C=>{z.dragging=!0,z.pointer={x:C.clientX,y:C.clientY},_.domElement.setPointerCapture(C.pointerId)},G=C=>{if(!z.dragging)return;const w=C.clientX-z.pointer.x,F=C.clientY-z.pointer.y;z.pointer={x:C.clientX,y:C.clientY},z.viewRoot.rotation.y+=w*.008,z.viewRoot.rotation.x+=F*.006,z.viewRoot.rotation.x=w1.clamp(z.viewRoot.rotation.x,-1.2,.65)},O=C=>{z.dragging=!1,_.domElement.hasPointerCapture(C.pointerId)&&_.domElement.releasePointerCapture(C.pointerId)};N(),U();const V=new ResizeObserver(N);return V.observe(p),_.domElement.addEventListener("pointerdown",j),_.domElement.addEventListener("pointermove",G),_.domElement.addEventListener("pointerup",O),_.domElement.addEventListener("pointercancel",O),()=>{V.disconnect(),cancelAnimationFrame(z.frameId),_.domElement.removeEventListener("pointerdown",j),_.domElement.removeEventListener("pointermove",G),_.domElement.removeEventListener("pointerup",O),_.domElement.removeEventListener("pointercancel",O),p.removeChild(_.domElement),sy(z),_.dispose()}},[]),le.useEffect(()=>{const p=c.current;p&&p.viewRoot.rotation.set(0,0,0)},[r]),le.useEffect(()=>{const p=c.current;if(!t||!p||d.current===t.id)return;d.current=t.id;const g=h.current;$w(p,g,t.token,()=>{const v=Bp(g,t.token);h.current=v,d.current=null,i(v,t.token)})},[t,i]);const m=le.useMemo(()=>t?rs(t.token).label:"靜止觀察中",[t]);return at.jsxs("div",{className:"cube-stage","data-testid":"cube-stage",children:[at.jsx("div",{className:"cube-canvas",ref:l,"aria-label":"互動式 3D 魔術方塊"}),at.jsxs("div",{className:"cube-status",children:[at.jsx("span",{className:"status-dot","aria-hidden":"true"}),at.jsx("span",{children:m})]})]})}function $w(s,t,i,r){const l=rs(i),c=new dr;s.cubeRoot.add(c);const h=new Set(t.filter(v=>gE(v.position,l)).map(v=>v.id));for(const[v,_]of s.cubieGroups)h.has(v)&&(c.attach(_),nx(_,!0));const d=Math.abs(l.quarterTurns)===2?640:480,m=performance.now(),p=e2(l.axis),g=v=>{const _=Math.min(1,(v-m)/d),M=1-Math.pow(1-_,3);if(c.setRotationFromAxisAngle(p,l.angle*M),_<1){requestAnimationFrame(g);return}c.setRotationFromAxisAngle(p,l.angle);for(const[E,A]of s.cubieGroups)h.has(E)&&(s.cubeRoot.attach(A),nx(A,!1));s.cubeRoot.remove(c),r()};requestAnimationFrame(g)}function ex(s,t){if(t){sy(t);for(const i of s){const r=t2(i);t.cubieGroups.set(i.id,r),t.cubeRoot.add(r)}}}function sy(s){for(const t of s.cubieGroups.values())s.cubeRoot.remove(t),t.traverse(i=>{if(i instanceof wi||i instanceof Lp){if(i.geometry.dispose(),i instanceof Lp)return;Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material!==ry&&i.material.dispose()}});s.cubieGroups.clear()}function t2(s){const t=new dr;t.name=s.id,t.position.set(s.position.x*Id,s.position.y*Id,s.position.z*Id);const i=new wi(tx.clone(),ry);i.castShadow=!0,i.receiveShadow=!0,t.add(i);const r=new Lp(new rT(tx.clone()),Kw);t.add(r);for(const l of s.stickers){const c=new Kx({color:l.color,roughness:.42,metalness:.02,emissive:l.color,emissiveIntensity:.05}),h=new wi(Qw.clone(),c);h.position.set(l.normal.x*Fd,l.normal.y*Fd,l.normal.z*Fd),h.quaternion.setFromUnitVectors(new $(0,0,1),new $(l.normal.x,l.normal.y,l.normal.z)),t.add(h)}return t}function e2(s){switch(s){case"x":return new $(1,0,0);case"y":return new $(0,1,0);case"z":return new $(0,0,1)}}function nx(s,t){const i=t?1.035:1;s.scale.setScalar(i)}const n2=[{id:"faces",title:"認識六個面",badge:"入門",goal:"先固定拿法：白色中心在上面、黃色在底部、藍色中心在前面。",setup:"",algorithm:"R U R' U'",plainMoves:["右面順轉","上面順轉","右面逆轉","上面逆轉"],checkpoints:["中心顏色不會換位置","每次只轉一層","先看清楚要轉哪一面"],encouragement:"學魔術方塊先求看懂，不急著求快。",example:{title:"拿法範例",caption:"上方看到白色，正面看到藍色，底部是黃色。",cells:["white","white","white","blue","blue","red","blue","blue","red"]}},{id:"white-cross",title:"白色十字",badge:"第 1 關",goal:"把四個白色邊塊送到白色中心旁邊，做出一個白色加號。",setup:"F R U R' U' F'",algorithm:"F R U R' U' F'",plainMoves:["前面順轉","右面順轉","上面順轉","右面逆轉","上面逆轉","前面逆轉"],checkpoints:["先找白色邊塊","白色貼紙要朝上","側邊顏色也要對到中心"],encouragement:"這一關現在會看目前方塊狀態，動態建議下一步。",example:{title:"目標範例",caption:"白色中心上下左右四格都要是白色，四個角先不用管。",cells:["neutral","white","neutral","white","white","white","neutral","white","neutral"]}},{id:"white-corners",title:"白色角塊",badge:"第 2 關",goal:"把白色角塊一顆一顆放進白色那一層。",setup:"R U R' U'",algorithm:"R U R' U'",plainMoves:["右面順轉","上面順轉","右面逆轉","上面逆轉"],checkpoints:["角塊有三個顏色","把角塊放到目標位置上方","重複四步直到白色回到上面"],encouragement:"這組四步是初學者最常用的基本功。",example:{title:"完成範例",caption:"白色面九格都完成，側邊第一層顏色也要連起來。",cells:["white","white","white","white","white","white","white","white","white"]}},{id:"middle-layer",title:"中間層邊塊",badge:"第 3 關",goal:"不用動白色面，把沒有黃色的邊塊送進中間層。",setup:"U R U' R' U' F' U F",algorithm:"U R U' R' U' F' U F",plainMoves:["上面順轉","右面順轉","上面逆轉","右面逆轉","上面逆轉","前面逆轉","上面順轉","前面順轉"],checkpoints:["先對準前方中心顏色","選沒有黃色的邊塊","做完檢查白色層有沒有被保護好"],encouragement:"中間層看起來長，其實是把四步拆成兩段。",example:{title:"目標範例",caption:"側面中間一圈要和中心顏色排成直線。",cells:["neutral","neutral","neutral","blue","blue","blue","neutral","neutral","neutral"]}},{id:"yellow-cross",title:"黃色十字",badge:"第 4 關",goal:"先讓黃色面出現一條線、L 形，最後變成黃色十字。",setup:"F R U R' U' F'",algorithm:"F R U R' U' F'",plainMoves:["前面順轉","右面順轉","上面順轉","右面逆轉","上面逆轉","前面逆轉"],checkpoints:["只看黃色貼紙","有 L 形就放左上角","有直線就橫著放"],encouragement:"同一組手法會在不同關卡重複出現，這是好消息。",example:{title:"目標範例",caption:"先只要求黃色中心和四個邊是黃色。",cells:["neutral","yellow","neutral","yellow","yellow","yellow","neutral","yellow","neutral"]}},{id:"yellow-face",title:"補滿黃色面",badge:"第 5 關",goal:"讓黃色角塊翻到上面，先不用管旁邊顏色。",setup:"R U R' U R U2 R'",algorithm:"R U R' U R U2 R'",plainMoves:["右面順轉","上面順轉","右面逆轉","上面順轉","右面順轉","上面半圈","右面逆轉"],checkpoints:["黃色角塊慢慢翻上來","每做一次都重新看圖案","不要拆掉已完成的白色層"],encouragement:"這裡最容易心急，照順序按就會變清楚。",example:{title:"目標範例",caption:"整個上面九格都是黃色。",cells:["yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"]}},{id:"final-layer",title:"最後一層歸位",badge:"完成",goal:"把最後一層的角塊和邊塊換到正確位置。",setup:"R U R' F' R U R' U' R' F R2 U' R'",algorithm:"R U R' F' R U R' U' R' F R2 U' R'",plainMoves:["右面順轉","上面順轉","右面逆轉","前面逆轉","右面順轉","上面順轉","右面逆轉","上面逆轉","右面逆轉","前面順轉","右面半圈","上面逆轉","右面逆轉"],checkpoints:["先找已經正確的一面","把正確的一面放後面","做完再轉上層對齊中心"],encouragement:"到這裡已經不是新手，是正在形成手感的人。",example:{title:"完成範例",caption:"每一面都回到單一顏色，整顆方塊復原。",cells:["blue","blue","blue","blue","blue","blue","blue","blue","blue"]}}],bu=n2.map(s=>({...s,algorithm:mE(s.algorithm)}));function i2(s){return xx(s.algorithm)}const Ki=["U","F","R","B","L","D"],Cl={U:{label:"上面",hint:"白色中心",expected:"白"},F:{label:"前面",hint:"藍色中心",expected:"藍"},R:{label:"右面",hint:"紅色中心",expected:"紅"},B:{label:"後面",hint:"綠色中心",expected:"綠"},L:{label:"左面",hint:"橘色中心",expected:"橘"},D:{label:"下面",hint:"黃色中心",expected:"黃"}},a2={U:{normal:{x:0,y:1,z:0},right:{x:1,y:0,z:0},up:{x:0,y:0,z:-1}},D:{normal:{x:0,y:-1,z:0},right:{x:1,y:0,z:0},up:{x:0,y:0,z:1}},F:{normal:{x:0,y:0,z:1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0}},B:{normal:{x:0,y:0,z:-1},right:{x:-1,y:0,z:0},up:{x:0,y:1,z:0}},R:{normal:{x:1,y:0,z:0},right:{x:0,y:0,z:-1},up:{x:0,y:1,z:0}},L:{normal:{x:-1,y:0,z:0},right:{x:0,y:0,z:1},up:{x:0,y:1,z:0}}};async function r2(s,t){const i=await o2(t),r=document.createElement("canvas"),c=Math.min(1,900/Math.max(i.width,i.height));r.width=Math.max(1,Math.round(i.width*c)),r.height=Math.max(1,Math.round(i.height*c));const h=r.getContext("2d",{willReadFrequently:!0});if(!h)throw new Error("Cannot read image.");h.drawImage(i,0,0,r.width,r.height);const d=[],p=Math.min(r.width,r.height)*.72,g=(r.width-p)/2,v=(r.height-p)/2,_=p/3,M=Math.max(4,Math.round(_*.11));for(let E=0;E<3;E+=1)for(let A=0;A<3;A+=1){const S=g+_*(A+.5),x=v+_*(E+.5),z=l2(h,S,x,M);d.push({rgb:z,hex:f2(z)})}return{face:s,imageUrl:r.toDataURL("image/jpeg",.82),samples:d}}function s2(s){const t=Ki.filter(p=>!s[p]);if(t.length)return{complete:!1,cubies:null,classified:{},colorCounts:{},validColorCounts:!1,message:`還差 ${t.length} 面`};const i=Object.fromEntries(Ki.map(p=>[p,s[p].samples[4].rgb])),r={},l={},c=new Map;for(const p of Ki){const g=s[p].samples.map(v=>{const _=v.colorFace??c2(v.rgb,i);return l[_]=(l[_]??0)+1,{...v,colorFace:_,hex:Ci[_].color}});r[p]=g;for(let v=0;v<g.length;v+=1){const _=h2(p,v),M=oy(_),E={face:g[v].colorFace,color:Ci[g[v].colorFace].color,normal:{...Ci[p].normal}};c.set(M,[...c.get(M)??[],E])}}const h=[],d=new Set;for(const[p,g]of c){const v=d2(g),_=d.has(v)?`${v}:${p}`:v;d.add(_),h.push({id:_,position:p2(p),stickers:g})}h.push({id:"0:0:0",position:{x:0,y:0,z:0},stickers:[]});const m=Ki.find(p=>l[p]!==9);return{complete:!0,cubies:h,classified:r,colorCounts:l,validColorCounts:!m,message:m?"色塊數量不平均，請點色塊修正到每色 9 格。":"六面已解讀，可以套用到 3D 方塊。"}}function o2(s){return new Promise((t,i)=>{const r=URL.createObjectURL(s),l=new Image;l.onload=()=>{URL.revokeObjectURL(r),t(l)},l.onerror=()=>{URL.revokeObjectURL(r),i(new Error("Image load failed."))},l.src=r})}function l2(s,t,i,r){const l=Math.max(0,Math.round(t-r)),c=Math.max(0,Math.round(i-r)),h=Math.min(s.canvas.width-l,r*2),d=Math.min(s.canvas.height-c,r*2),m=s.getImageData(l,c,h,d).data;let p=0,g=0,v=0,_=0;for(let M=0;M<m.length;M+=4)p+=m[M],g+=m[M+1],v+=m[M+2],_+=1;return{r:Math.round(p/_),g:Math.round(g/_),b:Math.round(v/_)}}function c2(s,t){return Ki.reduce((i,r)=>{const l=u2(s,t[r]);return l<i.distance?{face:r,distance:l}:i},{face:"U",distance:Number.POSITIVE_INFINITY}).face}function u2(s,t){const i=s.r-t.r,r=s.g-t.g,l=s.b-t.b,c=(s.r+s.g+s.b)/3,h=(t.r+t.g+t.b)/3;return i*i+r*r+l*l+Math.abs(c-h)*18}function f2({r:s,g:t,b:i}){return`#${[s,t,i].map(r=>r.toString(16).padStart(2,"0")).join("")}`}function h2(s,t){const i=Math.floor(t/3),r=t%3,l=a2[s];return Op(l.normal,Op(ix(l.right,r-1),ix(l.up,1-i)))}function d2(s){const t=s.reduce((i,r)=>Op(i,Ci[r.face].normal),{x:0,y:0,z:0});return oy(t)}function Op(s,t){return{x:s.x+t.x,y:s.y+t.y,z:s.z+t.z}}function ix(s,t){return{x:s.x*t,y:s.y*t,z:s.z*t}}function oy(s){return`${s.x}:${s.y}:${s.z}`}function p2(s){const[t,i,r]=s.split(":").map(Number);return{x:t,y:i,z:r}}const m2=["R","U","F","U'","R'","D","F'","U"];function g2(){const s=window.location.pathname.includes("/tools/rubiks-cube"),[t,i]=le.useState(()=>Vs()),[r,l]=le.useState(0),[c,h]=le.useState(null),[d,m]=le.useState([]),[p,g]=le.useState([]),[v,_]=le.useState(0),[M,E]=le.useState(0),[A,S]=le.useState(!1),[x,z]=le.useState({}),[N,U]=le.useState("U"),[j,G]=le.useState(!1),O=le.useRef(0),V=bu[r],C=V.id==="white-cross",w=le.useMemo(()=>ME(t),[t]),F=le.useMemo(()=>i2(V),[V]),ct=C?w.moves:F,tt=C?w.nextMove??"":v<ct.length?ct[v]:"",vt=C?w.progress:ct.length?Math.round(v/ct.length*100):0,mt=le.useMemo(()=>s2(x),[x]),P=Object.keys(x).length,Q=le.useCallback((Rt,Wt)=>{m(ee=>[...ee,...Rt.map(Ce=>({token:Ce,reason:Wt}))])},[]),q=le.useCallback((Rt,Wt="free")=>{if(c){m(ee=>[...ee,{token:Rt,reason:Wt}]);return}O.current+=1,h({id:O.current,token:Rt,reason:Wt})},[c]),Et=le.useCallback((Rt,Wt)=>{i(Rt),g(ee=>[...ee,Wt]),(c==null?void 0:c.reason)==="lesson"&&_(ee=>C?0:Math.min(ee+1,ct.length)),h(null)},[c==null?void 0:c.reason,C,ct.length]);le.useEffect(()=>{if(c||d.length===0)return;const[Rt,...Wt]=d;O.current+=1,h({id:O.current,token:Rt.token,reason:Rt.reason}),m(Wt)},[c,d]),le.useEffect(()=>{if(!A||c||d.length>0)return;if(!tt){S(!1);return}const Rt=window.setTimeout(()=>{q(tt,"lesson")},900);return()=>window.clearTimeout(Rt)},[c,tt,A,d.length,q]);const At=le.useCallback(()=>{i(Vs()),h(null),m([]),g([]),_(0),S(!1)},[]),L=le.useCallback(async(Rt,Wt)=>{if(Wt){G(!0);try{const ee=await r2(Rt,Wt);z(Ce=>({...Ce,[Rt]:ee}))}finally{G(!1)}}},[]),nt=le.useCallback(()=>{z({}),U("U")},[]),Mt=le.useCallback((Rt,Wt)=>{z(ee=>{const Ce=ee[Rt];if(!Ce)return ee;const B=Ce.samples.map((cn,me)=>{if(me!==Wt)return cn;const _e=cn.colorFace??Rt,Zt=Ki.indexOf(_e),Ue=Ki[(Zt+1)%Ki.length];return{...cn,colorFace:Ue,hex:Ci[Ue].color}});return{...ee,[Rt]:{...Ce,samples:B}}})},[]),Z=le.useCallback(()=>{!mt.cubies||!mt.validColorCounts||(i(mt.cubies),l(1),h(null),m([]),g([]),_(0),S(!1))},[mt.cubies]),ft=le.useCallback(Rt=>{l(Rt),i(Vs()),h(null),m([]),g([]),_(0),S(!1)},[]),bt=le.useCallback(()=>{!C&&v>=ct.length&&(_(0),i(Vs()),g([])),tt&&S(Rt=>!Rt)},[tt,C,v,ct.length]),St=le.useCallback(()=>{tt&&q(tt,"lesson")},[tt,q]),Gt=le.useCallback(()=>{const Rt=V.setup?xx(V.setup):[];i(Xv(Vs(),Rt)),h(null),m([]),g(Rt),_(0),S(!1)},[V]),Ft=le.useCallback(()=>{const Rt=p.slice(0,-1);i(Xv(Vs(),Rt)),g(Rt),_(Wt=>C?0:Math.max(0,Wt-1)),h(null),m([]),S(!1)},[C,p]);return at.jsx("main",{className:"app-shell",children:at.jsxs("section",{className:"workspace","aria-label":"魔術方塊互動教學",children:[at.jsxs("div",{className:"stage-panel",children:[at.jsxs("header",{className:"topbar",children:[at.jsxs("div",{children:[at.jsx("p",{className:"eyebrow",children:"初學者友善"}),at.jsx("h1",{children:"魔術方塊互動教學"})]}),at.jsxs("div",{className:"topbar-actions",children:[s?at.jsx("a",{className:"site-return",href:"../index.html",children:"回阿姨工具箱"}):null,at.jsxs("div",{className:"lesson-pill",children:[at.jsx(Hv,{size:18}),at.jsx("span",{children:V.badge})]})]})]}),at.jsx(Jw,{cubies:t,activeMove:c,onMoveComplete:Et,viewResetKey:M}),at.jsxs("div",{className:"stage-actions","aria-label":"方塊控制",children:[at.jsxs("button",{type:"button",className:"icon-button",onClick:()=>E(Rt=>Rt+1),children:[at.jsx(NM,{size:20}),at.jsx("span",{children:"視角"})]}),at.jsxs("button",{type:"button",className:"icon-button",onClick:Ft,disabled:!p.length||!!c,children:[at.jsx(HM,{size:20}),at.jsx("span",{children:"上一步"})]}),at.jsxs("button",{type:"button",className:"icon-button",onClick:At,children:[at.jsx(cx,{size:20}),at.jsx("span",{children:"重置"})]}),at.jsxs("button",{type:"button",className:"icon-button accent",onClick:()=>Q(m2,"scramble"),children:[at.jsx(BM,{size:20}),at.jsx("span",{children:"練習打亂"})]})]})]}),at.jsxs("aside",{className:"lesson-panel","aria-label":"教學步驟",children:[at.jsx("nav",{className:"lesson-rail","aria-label":"課程列表",children:bu.map((Rt,Wt)=>at.jsxs("button",{type:"button",className:Wt===r?"lesson-tab active":"lesson-tab",onClick:()=>ft(Wt),children:[at.jsx("span",{children:Wt+1}),at.jsx("strong",{children:Rt.title})]},Rt.id))}),at.jsx(y2,{activeFace:N,isReading:j,scanFaces:x,scanResult:mt,scannedFaceCount:P,onActiveFaceChange:U,onFile:L,onSampleCycle:Mt,onApply:Z,onClear:nt}),at.jsxs("section",{className:"lesson-card",children:[at.jsxs("div",{className:"lesson-heading",children:[at.jsxs("div",{children:[at.jsx("p",{className:"eyebrow",children:V.badge}),at.jsx("h2",{children:V.title})]}),at.jsx("div",{className:"mini-progress",children:at.jsxs("span",{children:[vt,"%"]})})]}),at.jsx("div",{className:"progress-track","aria-hidden":"true",children:at.jsx("span",{style:{width:`${vt}%`}})}),at.jsx("p",{className:"goal-text",children:V.goal}),at.jsx(_2,{example:V.example,currentMove:tt}),C?at.jsxs("div",{className:"coach-panel",children:[at.jsxs("div",{children:[at.jsx("span",{className:"section-label",children:"狀態判斷"}),at.jsxs("strong",{children:[w.solvedCount,"/",w.total," 個白色邊塊已歸位"]})]}),at.jsx("p",{children:w.message})]}):null,at.jsx("span",{className:"section-label",children:C?"依目前狀態建議":"本關轉法"}),at.jsx("div",{className:"algorithm-strip","aria-label":"本關轉法",children:ct.length?ct.slice(0,14).map((Rt,Wt)=>at.jsx("button",{type:"button",className:Wt===0||Wt===v?"move-chip active":"move-chip",onClick:()=>{C&&Wt!==0||(_(Wt),q(Rt,"lesson"))},disabled:!!c||C&&Wt!==0,title:qv(Rt),children:Rt},`${V.id}-${Rt}-${Wt}`)):at.jsx("span",{className:"done-chip",children:"已完成"})}),at.jsxs("div",{className:"current-move",children:[at.jsx("span",{children:C?"下一步":"目前"}),at.jsx("strong",{children:tt?`${tt} ${rs(tt).label}`:"完成"})]}),at.jsxs("div",{className:"lesson-controls",children:[at.jsxs("button",{type:"button",className:"primary-action",onClick:bt,disabled:!tt,children:[A?at.jsx(zM,{size:22}):at.jsx(PM,{size:22}),at.jsx("span",{children:A?"暫停示範":C?"智慧示範":"自動示範"})]}),at.jsxs("button",{type:"button",className:"secondary-action",onClick:St,disabled:!tt||!!c,children:[at.jsx(FM,{size:22}),at.jsx("span",{children:"走一步"})]}),at.jsxs("button",{type:"button",className:"secondary-action",onClick:Gt,children:[at.jsx(ux,{size:22}),at.jsx("span",{children:"套用情境"})]})]}),at.jsx("div",{className:"checklist",children:V.checkpoints.map(Rt=>at.jsxs("div",{className:"check-row",children:[at.jsx(Hv,{size:18}),at.jsx("span",{children:Rt})]},Rt))}),at.jsx("p",{className:"encouragement",children:V.encouragement})]}),at.jsxs("section",{className:"practice-card","aria-label":"自由練習",children:[at.jsxs("div",{className:"practice-header",children:[at.jsx("h2",{children:"自由練習"}),at.jsx("span",{children:c?qv(c.token):"可直接按面"})]}),at.jsx("div",{className:"move-grid",children:vx.map(Rt=>{const Wt=rs(Rt);return at.jsxs("button",{type:"button",className:"free-move",onClick:()=>q(Rt,"free"),style:{borderColor:Ci[Wt.face].color},title:Wt.label,children:[at.jsx("span",{className:"face-dot",style:{background:Ci[Wt.face].color}}),at.jsx("strong",{children:Rt}),at.jsx("small",{children:Wt.shortLabel})]},Rt)})})]}),at.jsxs("footer",{className:"lesson-footer",children:[at.jsxs("button",{type:"button",className:"pager",onClick:()=>ft(Math.max(0,r-1)),disabled:r===0,children:[at.jsx(UM,{size:18}),at.jsx("span",{children:"上一關"})]}),at.jsxs("button",{type:"button",className:"pager next",onClick:()=>ft(Math.min(bu.length-1,r+1)),disabled:r===bu.length-1,children:[at.jsx("span",{children:"下一關"}),at.jsx(DM,{size:18})]})]})]})]})})}function _2({example:s,currentMove:t}){return at.jsxs("div",{className:"example-panel",children:[at.jsxs("div",{className:"example-block",children:[at.jsx("span",{className:"section-label",children:s.title}),at.jsx(v2,{cells:s.cells}),at.jsx("p",{children:s.caption})]}),at.jsx(x2,{move:t})]})}function v2({cells:s}){return at.jsx("div",{className:"face-diagram","aria-hidden":"true",children:s.map((t,i)=>at.jsx("span",{className:`diagram-cell ${t}`},`${t}-${i}`))})}function x2({move:s}){const t=s?rs(s):null,i=s.includes("2"),r=s.includes("'")?cx:ux;return at.jsxs("div",{className:"turn-example",children:[at.jsx("span",{className:"section-label",children:"轉動範例"}),t?at.jsxs("div",{className:"turn-card",children:[at.jsx("span",{className:"turn-face",style:{background:Ci[t.face].color}}),at.jsx("span",{className:"turn-arrow","aria-hidden":"true",children:i?"180°":at.jsx(r,{size:32,strokeWidth:2.4})}),at.jsx("strong",{children:s}),at.jsx("p",{children:t.label})]}):at.jsxs("div",{className:"turn-card muted",children:[at.jsx("strong",{children:"OK"}),at.jsx("p",{children:"這一步已經完成"})]})]})}function y2({activeFace:s,isReading:t,scanFaces:i,scanResult:r,scannedFaceCount:l,onActiveFaceChange:c,onFile:h,onSampleCycle:d,onApply:m,onClear:p}){const g=i[s],v=r.classified[s]??(g==null?void 0:g.samples)??[];return at.jsxs("section",{className:"scan-card","aria-label":"拍照或上傳魔術方塊照片",children:[at.jsxs("div",{className:"scan-heading",children:[at.jsxs("div",{children:[at.jsx("p",{className:"eyebrow",children:"照片解讀"}),at.jsx("h2",{children:"拍照/上傳目前方塊"})]}),at.jsxs("div",{className:"scan-count",children:[at.jsx(IM,{size:18}),at.jsxs("span",{children:[l,"/6"]})]})]}),at.jsx("div",{className:"scan-tabs",children:Ki.map(_=>at.jsxs("button",{type:"button",className:_===s?"scan-tab active":"scan-tab",onClick:()=>c(_),children:[at.jsx("span",{className:"scan-tab-dot",style:{background:Ci[_].color}}),at.jsx("strong",{children:Cl[_].label}),at.jsx("small",{children:Cl[_].expected})]},_))}),at.jsxs("div",{className:"scan-workbench",children:[at.jsx("div",{className:"scan-preview",children:g?at.jsx("img",{src:g.imageUrl,alt:`${Cl[s].label}照片`}):at.jsxs("div",{className:"scan-placeholder",children:[at.jsx(OM,{size:28}),at.jsx("strong",{children:Cl[s].hint})]})}),at.jsxs("div",{className:"scan-side",children:[at.jsx(S2,{face:s,samples:v,onSampleCycle:d}),at.jsxs("label",{className:"scan-file-button",children:[at.jsx(LM,{size:19}),at.jsx("span",{children:t?"解讀中":"拍照/上傳這一面"}),at.jsx("input",{type:"file",accept:"image/*",capture:"environment",disabled:t,onChange:_=>{var M;h(s,((M=_.currentTarget.files)==null?void 0:M[0])??null),_.currentTarget.value=""}})]})]})]}),at.jsxs("div",{className:"scan-result",children:[at.jsxs("div",{children:[at.jsx("span",{children:r.message}),at.jsx(M2,{scanResult:r})]}),at.jsxs("div",{className:"scan-actions",children:[at.jsx("button",{type:"button",className:"secondary-action compact",onClick:p,children:"清空"}),at.jsx("button",{type:"button",className:"primary-action compact",onClick:m,disabled:!r.complete||!r.cubies||!r.validColorCounts,children:"套用掃描狀態"})]})]})]})}function S2({face:s,samples:t,onSampleCycle:i}){return at.jsx("div",{className:"scan-grid","aria-label":"照片色塊解讀",children:Array.from({length:9},(r,l)=>{const c=t[l],h=c==null?void 0:c.colorFace;return at.jsx("button",{type:"button",className:"scan-cell",disabled:!c,onClick:()=>i(s,l),style:{background:h?Ci[h].color:"#e5edf6"},title:c?"點一下可修正顏色":"",children:h??""},l)})})}function M2({scanResult:s}){return s.complete?at.jsx("div",{className:"color-count-strip","aria-label":"六色數量檢查",children:Ki.map(t=>{const i=s.colorCounts[t]??0;return at.jsxs("span",{className:i===9?"ok":"warn",children:[at.jsx("i",{style:{background:Ci[t].color}}),Cl[t].expected," ",i]},t)})}):null}AM.createRoot(document.getElementById("root")).render(at.jsx(vM.StrictMode,{children:at.jsx(g2,{})}));
