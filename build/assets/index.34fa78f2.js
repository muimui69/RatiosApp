function Ax(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function BE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Ox=Symbol.for("react.fragment"),Dx=Symbol.for("react.strict_mode"),Mx=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ux=Symbol.for("react.suspense"),jx=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),Jv=Symbol.iterator;function Bx(t){return t===null||typeof t!="object"?null:(t=Jv&&t[Jv]||t["@@iterator"],typeof t=="function"?t:null)}var zE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HE=Object.assign,WE={};function ho(t,e,n){this.props=t,this.context=e,this.refs=WE,this.updater=n||zE}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function KE(){}KE.prototype=ho.prototype;function Fm(t,e,n){this.props=t,this.context=e,this.refs=WE,this.updater=n||zE}var Um=Fm.prototype=new KE;Um.constructor=Fm;HE(Um,ho.prototype);Um.isPureReactComponent=!0;var Zv=Array.isArray,qE=Object.prototype.hasOwnProperty,jm={current:null},GE={key:!0,ref:!0,__self:!0,__source:!0};function QE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qE.call(e,r)&&!GE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pl,type:t,key:s,ref:o,props:i,_owner:jm.current}}function zx(t,e){return{$$typeof:pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vm(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl}function Hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e_=/\/+/g;function Td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hx(""+t.key):e.toString(36)}function xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pl:case Px:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Td(o,0):r,Zv(i)?(n="",t!=null&&(n=t.replace(e_,"$&/")+"/"),xu(i,e,n,"",function(u){return u})):i!=null&&(Vm(i)&&(i=zx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(e_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Zv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Td(s,a);o+=xu(s,e,n,l,i)}else if(l=Bx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Td(s,a++),o+=xu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(t,e,n){if(t==null)return t;var r=[],i=0;return xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Wx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},Nu={transition:null},Kx={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:Nu,ReactCurrentOwner:jm};ce.Children={map:Jl,forEach:function(t,e,n){Jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jl(t,function(){e++}),e},toArray:function(t){return Jl(t,function(e){return e})||[]},only:function(t){if(!Vm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ho;ce.Fragment=Ox;ce.Profiler=Mx;ce.PureComponent=Fm;ce.StrictMode=Dx;ce.Suspense=Ux;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=HE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qE.call(e,l)&&!GE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lx,_context:t},t.Consumer=t};ce.createElement=QE;ce.createFactory=function(t){var e=QE.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:Fx,render:t}};ce.isValidElement=Vm;ce.lazy=function(t){return{$$typeof:Vx,_payload:{_status:-1,_result:t},_init:Wx}};ce.memo=function(t,e){return{$$typeof:jx,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Nu.transition;Nu.transition={};try{t()}finally{Nu.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Ot.current.useCallback(t,e)};ce.useContext=function(t){return Ot.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Ot.current.useEffect(t,e)};ce.useId=function(){return Ot.current.useId()};ce.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Ot.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};ce.useRef=function(t){return Ot.current.useRef(t)};ce.useState=function(t){return Ot.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Ot.current.useTransition()};ce.version="18.2.0";(function(t){t.exports=ce})(w);const Un=BE(w.exports),Mf=Ax({__proto__:null,default:Un},[w.exports]);var Lf={},Bm={exports:{}},on={},YE={exports:{}},XE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var K=O.length;O.push(G);e:for(;0<K;){var ye=K-1>>>1,F=O[ye];if(0<i(F,G))O[ye]=G,O[K]=F,K=ye;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],K=O.pop();if(K!==G){O[0]=K;e:for(var ye=0,F=O.length,k=F>>>1;ye<k;){var M=2*(ye+1)-1,B=O[M],W=M+1,me=O[W];if(0>i(B,K))W<F&&0>i(me,B)?(O[ye]=me,O[W]=K,ye=W):(O[ye]=B,O[M]=K,ye=M);else if(W<F&&0>i(me,K))O[ye]=me,O[W]=K,ye=W;else break e}}return G}function i(O,G){var K=O.sortIndex-G.sortIndex;return K!==0?K:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,c=null,d=3,m=!1,p=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=O)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function C(O){if(v=!1,_(O),!p)if(n(l)!==null)p=!0,_n(I);else{var G=n(u);G!==null&&ln(C,G.startTime-O)}}function I(O,G){p=!1,v&&(v=!1,g(D),D=-1),m=!0;var K=d;try{for(_(G),c=n(l);c!==null&&(!(c.expirationTime>G)||O&&!oe());){var ye=c.callback;if(typeof ye=="function"){c.callback=null,d=c.priorityLevel;var F=ye(c.expirationTime<=G);G=t.unstable_now(),typeof F=="function"?c.callback=F:c===n(l)&&r(l),_(G)}else r(l);c=n(l)}if(c!==null)var k=!0;else{var M=n(u);M!==null&&ln(C,M.startTime-G),k=!1}return k}finally{c=null,d=K,m=!1}}var N=!1,A=null,D=-1,H=5,J=-1;function oe(){return!(t.unstable_now()-J<H)}function Qt(){if(A!==null){var O=t.unstable_now();J=O;var G=!0;try{G=A(!0,O)}finally{G?xt():(N=!1,A=null)}}else N=!1}var xt;if(typeof y=="function")xt=function(){y(Qt)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Pe=Mt.port2;Mt.port1.onmessage=Qt,xt=function(){Pe.postMessage(null)}}else xt=function(){T(Qt,0)};function _n(O){A=O,N||(N=!0,xt())}function ln(O,G){D=T(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){p||m||(p=!0,_n(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return O()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=d;d=O;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(O,G,K){var ye=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ye+K:ye):K=ye,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=K+F,O={id:h++,callback:G,priorityLevel:O,startTime:K,expirationTime:F,sortIndex:-1},K>ye?(O.sortIndex=K,e(u,O),n(l)===null&&O===n(u)&&(v?(g(D),D=-1):v=!0,ln(C,K-ye))):(O.sortIndex=F,e(l,O),p||m||(p=!0,_n(I))),O},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(O){var G=d;return function(){var K=d;d=G;try{return O.apply(this,arguments)}finally{d=K}}}})(XE);(function(t){t.exports=XE})(YE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE=w.exports,nn=YE.exports;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ZE=new Set,Ta={};function ts(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Ta[t]=e,t=0;t<e.length;t++)ZE.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$f=Object.prototype.hasOwnProperty,qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,t_={},n_={};function Gx(t){return $f.call(n_,t)?!0:$f.call(t_,t)?!1:qx.test(t)?n_[t]=!0:(t_[t]=!0,!1)}function Qx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yx(t,e,n,r){if(e===null||typeof e>"u"||Qx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var zm=/[\-:]([a-z])/g;function Hm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zm,Hm);pt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zm,Hm);pt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zm,Hm);pt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wm(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yx(e,n,i,r)&&(n=null),r||i===null?Gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=JE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),eC=Symbol.for("react.provider"),tC=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),Uf=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),Gm=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),nC=Symbol.for("react.offscreen"),r_=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=r_&&t[r_]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Sd;function qo(t){if(Sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sd=e&&e[1]||""}return`
`+Sd+t}var Id=!1;function kd(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function Xx(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=kd(t.type,!1),t;case 11:return t=kd(t.type.render,!1),t;case 1:return t=kd(t.type,!0),t;default:return""}}function Vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case Ff:return"Profiler";case Km:return"StrictMode";case Uf:return"Suspense";case jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tC:return(t.displayName||"Context")+".Consumer";case eC:return(t._context.displayName||"Context")+".Provider";case qm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gm:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}function Jx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===Km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zx(t){var e=rC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){t._valueTracker||(t._valueTracker=Zx(t))}function iC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function i_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sC(t,e){e=e.checked,e!=null&&Wm(t,"checked",e,!1)}function zf(t,e){sC(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hf(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hf(t,e,n){(e!=="number"||Yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function o_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Go(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function oC(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function a_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tu,lC=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tu=tu||document.createElement("div"),tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eN=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){eN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function uC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function cC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tN=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(tN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=null;function Qm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,Ms=null,Ls=null;function l_(t){if(t=yl(t)){if(typeof Yf!="function")throw Error(b(280));var e=t.stateNode;e&&(e=ph(e),Yf(t.stateNode,t.type,e))}}function hC(t){Ms?Ls?Ls.push(t):Ls=[t]:Ms=t}function dC(){if(Ms){var t=Ms,e=Ls;if(Ls=Ms=null,l_(t),e)for(t=0;t<e.length;t++)l_(e[t])}}function fC(t,e){return t(e)}function pC(){}var bd=!1;function mC(t,e,n){if(bd)return t(e,n);bd=!0;try{return fC(t,e,n)}finally{bd=!1,(Ms!==null||Ls!==null)&&(pC(),dC())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var r=ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Xf=!1;if(lr)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Xf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Xf=!1}function nN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var sa=!1,Xu=null,Ju=!1,Jf=null,rN={onError:function(t){sa=!0,Xu=t}};function iN(t,e,n,r,i,s,o,a,l){sa=!1,Xu=null,nN.apply(rN,arguments)}function sN(t,e,n,r,i,s,o,a,l){if(iN.apply(this,arguments),sa){if(sa){var u=Xu;sa=!1,Xu=null}else throw Error(b(198));Ju||(Ju=!0,Jf=u)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function u_(t){if(ns(t)!==t)throw Error(b(188))}function oN(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return u_(i),t;if(s===r)return u_(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function yC(t){return t=oN(t),t!==null?vC(t):null}function vC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vC(t);if(e!==null)return e;t=t.sibling}return null}var _C=nn.unstable_scheduleCallback,c_=nn.unstable_cancelCallback,aN=nn.unstable_shouldYield,lN=nn.unstable_requestPaint,Ve=nn.unstable_now,uN=nn.unstable_getCurrentPriorityLevel,Ym=nn.unstable_ImmediatePriority,wC=nn.unstable_UserBlockingPriority,Zu=nn.unstable_NormalPriority,cN=nn.unstable_LowPriority,EC=nn.unstable_IdlePriority,ch=null,jn=null;function hN(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(ch,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:pN,dN=Math.log,fN=Math.LN2;function pN(t){return t>>>=0,t===0?32:31-(dN(t)/fN|0)|0}var nu=64,ru=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qo(a):(s&=o,s!==0&&(r=Qo(s)))}else o=n&~i,o!==0?r=Qo(o):s!==0&&(r=Qo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function mN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=mN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function CC(){var t=nu;return nu<<=1,(nu&4194240)===0&&(nu=64),t}function xd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function yN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function TC(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var SC,Jm,IC,kC,bC,ep=!1,iu=[],jr=null,Vr=null,Br=null,ka=new Map,ba=new Map,Ar=[],vN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h_(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yl(e),e!==null&&Jm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _N(t,e,n,r,i){switch(e){case"focusin":return jr=Oo(jr,t,e,n,r,i),!0;case"dragenter":return Vr=Oo(Vr,t,e,n,r,i),!0;case"mouseover":return Br=Oo(Br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ka.set(s,Oo(ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ba.set(s,Oo(ba.get(s)||null,t,e,n,r,i)),!0}return!1}function xC(t){var e=Ci(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=gC(n),e!==null){t.blockedOn=e,bC(t.priority,function(){IC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ru(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qf=r,n.target.dispatchEvent(r),Qf=null}else return e=yl(n),e!==null&&Jm(e),t.blockedOn=n,!1;e.shift()}return!0}function d_(t,e,n){Ru(t)&&n.delete(e)}function wN(){ep=!1,jr!==null&&Ru(jr)&&(jr=null),Vr!==null&&Ru(Vr)&&(Vr=null),Br!==null&&Ru(Br)&&(Br=null),ka.forEach(d_),ba.forEach(d_)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,ep||(ep=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,wN)))}function xa(t){function e(i){return Do(i,t)}if(0<iu.length){Do(iu[0],t);for(var n=1;n<iu.length;n++){var r=iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Do(jr,t),Vr!==null&&Do(Vr,t),Br!==null&&Do(Br,t),ka.forEach(e),ba.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)xC(n),n.blockedOn===null&&Ar.shift()}var $s=vr.ReactCurrentBatchConfig,tc=!0;function EN(t,e,n,r){var i=_e,s=$s.transition;$s.transition=null;try{_e=1,Zm(t,e,n,r)}finally{_e=i,$s.transition=s}}function CN(t,e,n,r){var i=_e,s=$s.transition;$s.transition=null;try{_e=4,Zm(t,e,n,r)}finally{_e=i,$s.transition=s}}function Zm(t,e,n,r){if(tc){var i=tp(t,e,n,r);if(i===null)Fd(t,e,r,nc,n),h_(t,r);else if(_N(i,t,e,n,r))r.stopPropagation();else if(h_(t,r),e&4&&-1<vN.indexOf(t)){for(;i!==null;){var s=yl(i);if(s!==null&&SC(s),s=tp(t,e,n,r),s===null&&Fd(t,e,r,nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fd(t,e,r,null,n)}}var nc=null;function tp(t,e,n,r){if(nc=null,t=Qm(r),t=Ci(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function NC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uN()){case Ym:return 1;case wC:return 4;case Zu:case cN:return 16;case EC:return 536870912;default:return 16}default:return 16}}var $r=null,eg=null,Au=null;function RC(){if(Au)return Au;var t,e=eg,n=e.length,r,i="value"in $r?$r.value:$r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Au=i.slice(t,1<r?1-r:void 0)}function Pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function su(){return!0}function f_(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?su:f_,this.isPropagationStopped=f_,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=su)},persist:function(){},isPersistent:su}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tg=an(fo),gl=Me({},fo,{view:0,detail:0}),TN=an(gl),Nd,Rd,Mo,hh=Me({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ng,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Nd=t.screenX-Mo.screenX,Rd=t.screenY-Mo.screenY):Rd=Nd=0,Mo=t),Nd)},movementY:function(t){return"movementY"in t?t.movementY:Rd}}),p_=an(hh),SN=Me({},hh,{dataTransfer:0}),IN=an(SN),kN=Me({},gl,{relatedTarget:0}),Ad=an(kN),bN=Me({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),xN=an(bN),NN=Me({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RN=an(NN),AN=Me({},fo,{data:0}),m_=an(AN),PN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ON={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=DN[t])?!!e[t]:!1}function ng(){return MN}var LN=Me({},gl,{key:function(t){if(t.key){var e=PN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ON[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ng,charCode:function(t){return t.type==="keypress"?Pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$N=an(LN),FN=Me({},hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=an(FN),UN=Me({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ng}),jN=an(UN),VN=Me({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BN=an(VN),zN=Me({},hh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HN=an(zN),WN=[9,13,27,32],rg=lr&&"CompositionEvent"in window,oa=null;lr&&"documentMode"in document&&(oa=document.documentMode);var KN=lr&&"TextEvent"in window&&!oa,AC=lr&&(!rg||oa&&8<oa&&11>=oa),y_=String.fromCharCode(32),v_=!1;function PC(t,e){switch(t){case"keyup":return WN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function qN(t,e){switch(t){case"compositionend":return OC(e);case"keypress":return e.which!==32?null:(v_=!0,y_);case"textInput":return t=e.data,t===y_&&v_?null:t;default:return null}}function GN(t,e){if(vs)return t==="compositionend"||!rg&&PC(t,e)?(t=RC(),Au=eg=$r=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return AC&&e.locale!=="ko"?null:e.data;default:return null}}var QN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function __(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!QN[t.type]:e==="textarea"}function DC(t,e,n,r){hC(r),e=rc(e,"onChange"),0<e.length&&(n=new tg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var aa=null,Na=null;function YN(t){WC(t,0)}function dh(t){var e=Es(t);if(iC(e))return t}function XN(t,e){if(t==="change")return e}var MC=!1;if(lr){var Pd;if(lr){var Od="oninput"in document;if(!Od){var w_=document.createElement("div");w_.setAttribute("oninput","return;"),Od=typeof w_.oninput=="function"}Pd=Od}else Pd=!1;MC=Pd&&(!document.documentMode||9<document.documentMode)}function E_(){aa&&(aa.detachEvent("onpropertychange",LC),Na=aa=null)}function LC(t){if(t.propertyName==="value"&&dh(Na)){var e=[];DC(e,Na,t,Qm(t)),mC(YN,e)}}function JN(t,e,n){t==="focusin"?(E_(),aa=e,Na=n,aa.attachEvent("onpropertychange",LC)):t==="focusout"&&E_()}function ZN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dh(Na)}function eR(t,e){if(t==="click")return dh(e)}function tR(t,e){if(t==="input"||t==="change")return dh(e)}function nR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:nR;function Ra(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$f.call(e,i)||!On(t[i],e[i]))return!1}return!0}function C_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function T_(t,e){var n=C_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=C_(n)}}function $C(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$C(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function FC(){for(var t=window,e=Yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yu(t.document)}return e}function ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rR(t){var e=FC(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$C(n.ownerDocument.documentElement,n)){if(r!==null&&ig(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=T_(n,s);var o=T_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iR=lr&&"documentMode"in document&&11>=document.documentMode,_s=null,np=null,la=null,rp=!1;function S_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||_s==null||_s!==Yu(r)||(r=_s,"selectionStart"in r&&ig(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&Ra(la,r)||(la=r,r=rc(np,"onSelect"),0<r.length&&(e=new tg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Dd={},UC={};lr&&(UC=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function fh(t){if(Dd[t])return Dd[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in UC)return Dd[t]=e[n];return t}var jC=fh("animationend"),VC=fh("animationiteration"),BC=fh("animationstart"),zC=fh("transitionend"),HC=new Map,I_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(t,e){HC.set(t,e),ts(e,[t])}for(var Md=0;Md<I_.length;Md++){var Ld=I_[Md],sR=Ld.toLowerCase(),oR=Ld[0].toUpperCase()+Ld.slice(1);oi(sR,"on"+oR)}oi(jC,"onAnimationEnd");oi(VC,"onAnimationIteration");oi(BC,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(zC,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function k_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sN(r,e,void 0,t),t.currentTarget=null}function WC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;k_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;k_(i,a,u),s=l}}}if(Ju)throw t=Jf,Ju=!1,Jf=null,t}function ke(t,e){var n=e[lp];n===void 0&&(n=e[lp]=new Set);var r=t+"__bubble";n.has(r)||(KC(e,t,2,!1),n.add(r))}function $d(t,e,n){var r=0;e&&(r|=4),KC(n,t,r,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[au]){t[au]=!0,ZE.forEach(function(n){n!=="selectionchange"&&(aR.has(n)||$d(n,!1,t),$d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[au]||(e[au]=!0,$d("selectionchange",!1,e))}}function KC(t,e,n,r){switch(NC(e)){case 1:var i=EN;break;case 4:i=CN;break;default:i=Zm}n=i.bind(null,e,n,t),i=void 0,!Xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fd(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ci(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}mC(function(){var u=s,h=Qm(n),c=[];e:{var d=HC.get(t);if(d!==void 0){var m=tg,p=t;switch(t){case"keypress":if(Pu(n)===0)break e;case"keydown":case"keyup":m=$N;break;case"focusin":p="focus",m=Ad;break;case"focusout":p="blur",m=Ad;break;case"beforeblur":case"afterblur":m=Ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=IN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=jN;break;case jC:case VC:case BC:m=xN;break;case zC:m=BN;break;case"scroll":m=TN;break;case"wheel":m=HN;break;case"copy":case"cut":case"paste":m=RN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=g_}var v=(e&4)!==0,T=!v&&t==="scroll",g=v?d!==null?d+"Capture":null:d;v=[];for(var y=u,_;y!==null;){_=y;var C=_.stateNode;if(_.tag===5&&C!==null&&(_=C,g!==null&&(C=Ia(y,g),C!=null&&v.push(Pa(y,C,_)))),T)break;y=y.return}0<v.length&&(d=new m(d,p,null,n,h),c.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Qf&&(p=n.relatedTarget||n.fromElement)&&(Ci(p)||p[ur]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(p=n.relatedTarget||n.toElement,m=u,p=p?Ci(p):null,p!==null&&(T=ns(p),p!==T||p.tag!==5&&p.tag!==6)&&(p=null)):(m=null,p=u),m!==p)){if(v=p_,C="onMouseLeave",g="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=g_,C="onPointerLeave",g="onPointerEnter",y="pointer"),T=m==null?d:Es(m),_=p==null?d:Es(p),d=new v(C,y+"leave",m,n,h),d.target=T,d.relatedTarget=_,C=null,Ci(h)===u&&(v=new v(g,y+"enter",p,n,h),v.target=_,v.relatedTarget=T,C=v),T=C,m&&p)t:{for(v=m,g=p,y=0,_=v;_;_=hs(_))y++;for(_=0,C=g;C;C=hs(C))_++;for(;0<y-_;)v=hs(v),y--;for(;0<_-y;)g=hs(g),_--;for(;y--;){if(v===g||g!==null&&v===g.alternate)break t;v=hs(v),g=hs(g)}v=null}else v=null;m!==null&&b_(c,d,m,v,!1),p!==null&&T!==null&&b_(c,T,p,v,!0)}}e:{if(d=u?Es(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=XN;else if(__(d))if(MC)I=tR;else{I=ZN;var N=JN}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=eR);if(I&&(I=I(t,u))){DC(c,I,n,h);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&Hf(d,"number",d.value)}switch(N=u?Es(u):window,t){case"focusin":(__(N)||N.contentEditable==="true")&&(_s=N,np=u,la=null);break;case"focusout":la=np=_s=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,S_(c,n,h);break;case"selectionchange":if(iR)break;case"keydown":case"keyup":S_(c,n,h)}var A;if(rg)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vs?PC(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(AC&&n.locale!=="ko"&&(vs||D!=="onCompositionStart"?D==="onCompositionEnd"&&vs&&(A=RC()):($r=h,eg="value"in $r?$r.value:$r.textContent,vs=!0)),N=rc(u,D),0<N.length&&(D=new m_(D,t,null,n,h),c.push({event:D,listeners:N}),A?D.data=A:(A=OC(n),A!==null&&(D.data=A)))),(A=KN?qN(t,n):GN(t,n))&&(u=rc(u,"onBeforeInput"),0<u.length&&(h=new m_("onBeforeInput","beforeinput",null,n,h),c.push({event:h,listeners:u}),h.data=A))}WC(c,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ia(t,n),s!=null&&r.unshift(Pa(t,s,i)),s=Ia(t,e),s!=null&&r.push(Pa(t,s,i))),t=t.return}return r}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function b_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ia(n,s),l!=null&&o.unshift(Pa(n,l,a))):i||(l=Ia(n,s),l!=null&&o.push(Pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lR=/\r\n?/g,uR=/\u0000|\uFFFD/g;function x_(t){return(typeof t=="string"?t:""+t).replace(lR,`
`).replace(uR,"")}function lu(t,e,n){if(e=x_(e),x_(t)!==e&&n)throw Error(b(425))}function ic(){}var ip=null,sp=null;function op(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ap=typeof setTimeout=="function"?setTimeout:void 0,cR=typeof clearTimeout=="function"?clearTimeout:void 0,N_=typeof Promise=="function"?Promise:void 0,hR=typeof queueMicrotask=="function"?queueMicrotask:typeof N_<"u"?function(t){return N_.resolve(null).then(t).catch(dR)}:ap;function dR(t){setTimeout(function(){throw t})}function Ud(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function R_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),$n="__reactFiber$"+po,Oa="__reactProps$"+po,ur="__reactContainer$"+po,lp="__reactEvents$"+po,fR="__reactListeners$"+po,pR="__reactHandles$"+po;function Ci(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ur]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=R_(t);t!==null;){if(n=t[$n])return n;t=R_(t)}return e}t=n,n=t.parentNode}return null}function yl(t){return t=t[$n]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function ph(t){return t[Oa]||null}var up=[],Cs=-1;function ai(t){return{current:t}}function xe(t){0>Cs||(t.current=up[Cs],up[Cs]=null,Cs--)}function Te(t,e){Cs++,up[Cs]=t.current,t.current=e}var ei={},It=ai(ei),zt=ai(!1),$i=ei;function Gs(t,e){var n=t.type.contextTypes;if(!n)return ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function sc(){xe(zt),xe(It)}function A_(t,e,n){if(It.current!==ei)throw Error(b(168));Te(It,e),Te(zt,n)}function qC(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Jx(t)||"Unknown",i));return Me({},n,r)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ei,$i=It.current,Te(It,t),Te(zt,zt.current),!0}function P_(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=qC(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,xe(zt),xe(It),Te(It,t)):xe(zt),Te(zt,n)}var Qn=null,mh=!1,jd=!1;function GC(t){Qn===null?Qn=[t]:Qn.push(t)}function mR(t){mh=!0,GC(t)}function li(){if(!jd&&Qn!==null){jd=!0;var t=0,e=_e;try{var n=Qn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,mh=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),_C(Ym,li),i}finally{_e=e,jd=!1}}return null}var Ts=[],Ss=0,ac=null,lc=0,un=[],cn=0,Fi=null,Xn=1,Jn="";function pi(t,e){Ts[Ss++]=lc,Ts[Ss++]=ac,ac=t,lc=e}function QC(t,e,n){un[cn++]=Xn,un[cn++]=Jn,un[cn++]=Fi,Fi=t;var r=Xn;t=Jn;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xn=1<<32-Rn(e)+i|n<<i|r,Jn=s+t}else Xn=1<<s|n<<i|r,Jn=t}function sg(t){t.return!==null&&(pi(t,1),QC(t,1,0))}function og(t){for(;t===ac;)ac=Ts[--Ss],Ts[Ss]=null,lc=Ts[--Ss],Ts[Ss]=null;for(;t===Fi;)Fi=un[--cn],un[cn]=null,Jn=un[--cn],un[cn]=null,Xn=un[--cn],un[cn]=null}var en=null,Zt=null,Ne=!1,Tn=null;function YC(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function O_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Zt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fi!==null?{id:Xn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Zt=null,!0):!1;default:return!1}}function cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hp(t){if(Ne){var e=Zt;if(e){var n=e;if(!O_(t,e)){if(cp(t))throw Error(b(418));e=zr(n.nextSibling);var r=en;e&&O_(t,e)?YC(r,n):(t.flags=t.flags&-4097|2,Ne=!1,en=t)}}else{if(cp(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ne=!1,en=t}}}function D_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function uu(t){if(t!==en)return!1;if(!Ne)return D_(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!op(t.type,t.memoizedProps)),e&&(e=Zt)){if(cp(t))throw XC(),Error(b(418));for(;e;)YC(t,e),e=zr(e.nextSibling)}if(D_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=en?zr(t.stateNode.nextSibling):null;return!0}function XC(){for(var t=Zt;t;)t=zr(t.nextSibling)}function Qs(){Zt=en=null,Ne=!1}function ag(t){Tn===null?Tn=[t]:Tn.push(t)}var gR=vr.ReactCurrentBatchConfig;function En(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var uc=ai(null),cc=null,Is=null,lg=null;function ug(){lg=Is=cc=null}function cg(t){var e=uc.current;xe(uc),t._currentValue=e}function dp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){cc=t,lg=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ut=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(lg!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(cc===null)throw Error(b(308));Is=t,cc.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Ti=null;function hg(t){Ti===null?Ti=[t]:Ti.push(t)}function JC(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,hg(e)):(n.next=i.next,i.next=n),e.interleaved=n,cr(t,r)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function dg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZC(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(pe&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cr(t,n)}return i=r.interleaved,i===null?(e.next=e,hg(r)):(e.next=i.next,i.next=e),r.interleaved=e,cr(t,n)}function Ou(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xm(t,n)}}function M_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hc(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,h=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,v=a;switch(d=e,m=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){c=p.call(m,c,d);break e}c=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,d=typeof p=="function"?p.call(m,c,d):p,d==null)break e;c=Me({},c,d);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=m,l=c):h=h.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(h===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ji|=o,t.lanes=o,t.memoizedState=c}}function L_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var eT=new JE.Component().refs;function fp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gh={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Kr(t),s=rr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(An(e,t,i,r),Ou(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Kr(t),s=rr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(An(e,t,i,r),Ou(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Kr(t),i=rr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(An(e,t,r,n),Ou(e,t,r))}};function $_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,s):!0}function tT(t,e,n){var r=!1,i=ei,s=e.contextType;return typeof s=="object"&&s!==null?s=mn(s):(i=Ht(e)?$i:It.current,r=e.contextTypes,s=(r=r!=null)?Gs(t,i):ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function F_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gh.enqueueReplaceState(e,e.state,null)}function pp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=eT,dg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=mn(s):(s=Ht(e)?$i:It.current,i.context=Gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gh.enqueueReplaceState(i,i.state,null),hc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===eT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function cu(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function U_(t){var e=t._init;return e(t._payload)}function nT(t){function e(g,y){if(t){var _=g.deletions;_===null?(g.deletions=[y],g.flags|=16):_.push(y)}}function n(g,y){if(!t)return null;for(;y!==null;)e(g,y),y=y.sibling;return null}function r(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function i(g,y){return g=qr(g,y),g.index=0,g.sibling=null,g}function s(g,y,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<y?(g.flags|=2,y):_):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,y,_,C){return y===null||y.tag!==6?(y=qd(_,g.mode,C),y.return=g,y):(y=i(y,_),y.return=g,y)}function l(g,y,_,C){var I=_.type;return I===ys?h(g,y,_.props.children,C,_.key):y!==null&&(y.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xr&&U_(I)===y.type)?(C=i(y,_.props),C.ref=Lo(g,y,_),C.return=g,C):(C=Uu(_.type,_.key,_.props,null,g.mode,C),C.ref=Lo(g,y,_),C.return=g,C)}function u(g,y,_,C){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Gd(_,g.mode,C),y.return=g,y):(y=i(y,_.children||[]),y.return=g,y)}function h(g,y,_,C,I){return y===null||y.tag!==7?(y=Ai(_,g.mode,C,I),y.return=g,y):(y=i(y,_),y.return=g,y)}function c(g,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=qd(""+y,g.mode,_),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zl:return _=Uu(y.type,y.key,y.props,null,g.mode,_),_.ref=Lo(g,null,y),_.return=g,_;case gs:return y=Gd(y,g.mode,_),y.return=g,y;case xr:var C=y._init;return c(g,C(y._payload),_)}if(Go(y)||Ao(y))return y=Ai(y,g.mode,_,null),y.return=g,y;cu(g,y)}return null}function d(g,y,_,C){var I=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return I!==null?null:a(g,y,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zl:return _.key===I?l(g,y,_,C):null;case gs:return _.key===I?u(g,y,_,C):null;case xr:return I=_._init,d(g,y,I(_._payload),C)}if(Go(_)||Ao(_))return I!==null?null:h(g,y,_,C,null);cu(g,_)}return null}function m(g,y,_,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(_)||null,a(y,g,""+C,I);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Zl:return g=g.get(C.key===null?_:C.key)||null,l(y,g,C,I);case gs:return g=g.get(C.key===null?_:C.key)||null,u(y,g,C,I);case xr:var N=C._init;return m(g,y,_,N(C._payload),I)}if(Go(C)||Ao(C))return g=g.get(_)||null,h(y,g,C,I,null);cu(y,C)}return null}function p(g,y,_,C){for(var I=null,N=null,A=y,D=y=0,H=null;A!==null&&D<_.length;D++){A.index>D?(H=A,A=null):H=A.sibling;var J=d(g,A,_[D],C);if(J===null){A===null&&(A=H);break}t&&A&&J.alternate===null&&e(g,A),y=s(J,y,D),N===null?I=J:N.sibling=J,N=J,A=H}if(D===_.length)return n(g,A),Ne&&pi(g,D),I;if(A===null){for(;D<_.length;D++)A=c(g,_[D],C),A!==null&&(y=s(A,y,D),N===null?I=A:N.sibling=A,N=A);return Ne&&pi(g,D),I}for(A=r(g,A);D<_.length;D++)H=m(A,g,D,_[D],C),H!==null&&(t&&H.alternate!==null&&A.delete(H.key===null?D:H.key),y=s(H,y,D),N===null?I=H:N.sibling=H,N=H);return t&&A.forEach(function(oe){return e(g,oe)}),Ne&&pi(g,D),I}function v(g,y,_,C){var I=Ao(_);if(typeof I!="function")throw Error(b(150));if(_=I.call(_),_==null)throw Error(b(151));for(var N=I=null,A=y,D=y=0,H=null,J=_.next();A!==null&&!J.done;D++,J=_.next()){A.index>D?(H=A,A=null):H=A.sibling;var oe=d(g,A,J.value,C);if(oe===null){A===null&&(A=H);break}t&&A&&oe.alternate===null&&e(g,A),y=s(oe,y,D),N===null?I=oe:N.sibling=oe,N=oe,A=H}if(J.done)return n(g,A),Ne&&pi(g,D),I;if(A===null){for(;!J.done;D++,J=_.next())J=c(g,J.value,C),J!==null&&(y=s(J,y,D),N===null?I=J:N.sibling=J,N=J);return Ne&&pi(g,D),I}for(A=r(g,A);!J.done;D++,J=_.next())J=m(A,g,D,J.value,C),J!==null&&(t&&J.alternate!==null&&A.delete(J.key===null?D:J.key),y=s(J,y,D),N===null?I=J:N.sibling=J,N=J);return t&&A.forEach(function(Qt){return e(g,Qt)}),Ne&&pi(g,D),I}function T(g,y,_,C){if(typeof _=="object"&&_!==null&&_.type===ys&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Zl:e:{for(var I=_.key,N=y;N!==null;){if(N.key===I){if(I=_.type,I===ys){if(N.tag===7){n(g,N.sibling),y=i(N,_.props.children),y.return=g,g=y;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===xr&&U_(I)===N.type){n(g,N.sibling),y=i(N,_.props),y.ref=Lo(g,N,_),y.return=g,g=y;break e}n(g,N);break}else e(g,N);N=N.sibling}_.type===ys?(y=Ai(_.props.children,g.mode,C,_.key),y.return=g,g=y):(C=Uu(_.type,_.key,_.props,null,g.mode,C),C.ref=Lo(g,y,_),C.return=g,g=C)}return o(g);case gs:e:{for(N=_.key;y!==null;){if(y.key===N)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(g,y.sibling),y=i(y,_.children||[]),y.return=g,g=y;break e}else{n(g,y);break}else e(g,y);y=y.sibling}y=Gd(_,g.mode,C),y.return=g,g=y}return o(g);case xr:return N=_._init,T(g,y,N(_._payload),C)}if(Go(_))return p(g,y,_,C);if(Ao(_))return v(g,y,_,C);cu(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(g,y.sibling),y=i(y,_),y.return=g,g=y):(n(g,y),y=qd(_,g.mode,C),y.return=g,g=y),o(g)):n(g,y)}return T}var Ys=nT(!0),rT=nT(!1),vl={},Vn=ai(vl),Da=ai(vl),Ma=ai(vl);function Si(t){if(t===vl)throw Error(b(174));return t}function fg(t,e){switch(Te(Ma,e),Te(Da,t),Te(Vn,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kf(e,t)}xe(Vn),Te(Vn,e)}function Xs(){xe(Vn),xe(Da),xe(Ma)}function iT(t){Si(Ma.current);var e=Si(Vn.current),n=Kf(e,t.type);e!==n&&(Te(Da,t),Te(Vn,n))}function pg(t){Da.current===t&&(xe(Vn),xe(Da))}var Oe=ai(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vd=[];function mg(){for(var t=0;t<Vd.length;t++)Vd[t]._workInProgressVersionPrimary=null;Vd.length=0}var Du=vr.ReactCurrentDispatcher,Bd=vr.ReactCurrentBatchConfig,Ui=0,De=null,Ge=null,rt=null,fc=!1,ua=!1,La=0,yR=0;function gt(){throw Error(b(321))}function gg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function yg(t,e,n,r,i,s){if(Ui=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Du.current=t===null||t.memoizedState===null?ER:CR,t=n(r,i),ua){s=0;do{if(ua=!1,La=0,25<=s)throw Error(b(301));s+=1,rt=Ge=null,e.updateQueue=null,Du.current=TR,t=n(r,i)}while(ua)}if(Du.current=pc,e=Ge!==null&&Ge.next!==null,Ui=0,rt=Ge=De=null,fc=!1,e)throw Error(b(300));return t}function vg(){var t=La!==0;return La=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?De.memoizedState=rt=t:rt=rt.next=t,rt}function gn(){if(Ge===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=rt===null?De.memoizedState:rt.next;if(e!==null)rt=e,Ge=t;else{if(t===null)throw Error(b(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},rt===null?De.memoizedState=rt=t:rt=rt.next=t}return rt}function $a(t,e){return typeof e=="function"?e(t):e}function zd(t){var e=gn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ui&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,De.lanes|=h,ji|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,On(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=gn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);On(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function sT(){}function oT(t,e){var n=De,r=gn(),i=e(),s=!On(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,_g(uT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,lT.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(b(349));(Ui&30)!==0||aT(n,e,i)}return i}function aT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lT(t,e,n,r){e.value=n,e.getSnapshot=r,cT(e)&&hT(t)}function uT(t,e,n){return n(function(){cT(e)&&hT(t)})}function cT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function hT(t){var e=cr(t,1);e!==null&&An(e,t,1,-1)}function j_(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=wR.bind(null,De,t),[e.memoizedState,t]}function Fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dT(){return gn().memoizedState}function Mu(t,e,n,r){var i=Ln();De.flags|=t,i.memoizedState=Fa(1|e,n,void 0,r===void 0?null:r)}function yh(t,e,n,r){var i=gn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&gg(r,o.deps)){i.memoizedState=Fa(e,n,s,r);return}}De.flags|=t,i.memoizedState=Fa(1|e,n,s,r)}function V_(t,e){return Mu(8390656,8,t,e)}function _g(t,e){return yh(2048,8,t,e)}function fT(t,e){return yh(4,2,t,e)}function pT(t,e){return yh(4,4,t,e)}function mT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gT(t,e,n){return n=n!=null?n.concat([t]):null,yh(4,4,mT.bind(null,e,t),n)}function wg(){}function yT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _T(t,e,n){return(Ui&21)===0?(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n):(On(n,e)||(n=CC(),De.lanes|=n,ji|=n,t.baseState=!0),e)}function vR(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Bd.transition;Bd.transition={};try{t(!1),e()}finally{_e=n,Bd.transition=r}}function wT(){return gn().memoizedState}function _R(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ET(t))CT(e,n);else if(n=JC(t,e,n,r),n!==null){var i=Pt();An(n,t,r,i),TT(n,e,r)}}function wR(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ET(t))CT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(i.next=i,hg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=JC(t,e,i,r),n!==null&&(i=Pt(),An(n,t,r,i),TT(n,e,r))}}function ET(t){var e=t.alternate;return t===De||e!==null&&e===De}function CT(t,e){ua=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TT(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xm(t,n)}}var pc={readContext:mn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},ER={readContext:mn,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:V_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4194308,4,mT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mu(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_R.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:j_,useDebugValue:wg,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=j_(!1),e=t[0];return t=vR.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Ln();if(Ne){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),ot===null)throw Error(b(349));(Ui&30)!==0||aT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,V_(uT.bind(null,r,s,t),[t]),r.flags|=2048,Fa(9,lT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=ot.identifierPrefix;if(Ne){var n=Jn,r=Xn;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CR={readContext:mn,useCallback:yT,useContext:mn,useEffect:_g,useImperativeHandle:gT,useInsertionEffect:fT,useLayoutEffect:pT,useMemo:vT,useReducer:zd,useRef:dT,useState:function(){return zd($a)},useDebugValue:wg,useDeferredValue:function(t){var e=gn();return _T(e,Ge.memoizedState,t)},useTransition:function(){var t=zd($a)[0],e=gn().memoizedState;return[t,e]},useMutableSource:sT,useSyncExternalStore:oT,useId:wT,unstable_isNewReconciler:!1},TR={readContext:mn,useCallback:yT,useContext:mn,useEffect:_g,useImperativeHandle:gT,useInsertionEffect:fT,useLayoutEffect:pT,useMemo:vT,useReducer:Hd,useRef:dT,useState:function(){return Hd($a)},useDebugValue:wg,useDeferredValue:function(t){var e=gn();return Ge===null?e.memoizedState=t:_T(e,Ge.memoizedState,t)},useTransition:function(){var t=Hd($a)[0],e=gn().memoizedState;return[t,e]},useMutableSource:sT,useSyncExternalStore:oT,useId:wT,unstable_isNewReconciler:!1};function Js(t,e){try{var n="",r=e;do n+=Xx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wd(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function mp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SR=typeof WeakMap=="function"?WeakMap:Map;function ST(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gc||(gc=!0,Ip=r),mp(t,e)},n}function IT(t,e,n){n=rr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mp(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function B_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FR.bind(null,t,e,n),e.then(t,t))}function z_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function H_(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var IR=vr.ReactCurrentOwner,Ut=!1;function Rt(t,e,n,r){e.child=t===null?rT(e,null,n,r):Ys(e,t.child,n,r)}function W_(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=yg(t,e,n,r,s,i),n=vg(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Ne&&n&&sg(e),e.flags|=1,Rt(t,e,r,i),e.child)}function K_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kT(t,e,s,r,i)):(t=Uu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,r)&&t.ref===e.ref)return hr(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function kT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ra(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ut=!0);else return e.lanes=t.lanes,hr(t,e,i)}return gp(t,e,n,r,i)}function bT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(bs,Xt),Xt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(bs,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(bs,Xt),Xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(bs,Xt),Xt|=r;return Rt(t,e,i,n),e.child}function xT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gp(t,e,n,r,i){var s=Ht(n)?$i:It.current;return s=Gs(e,s),Fs(e,i),n=yg(t,e,n,r,s,i),r=vg(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,hr(t,e,i)):(Ne&&r&&sg(e),e.flags|=1,Rt(t,e,n,i),e.child)}function q_(t,e,n,r,i){if(Ht(n)){var s=!0;oc(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Lu(t,e),tT(e,n,r),pp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=mn(u):(u=Ht(n)?$i:It.current,u=Gs(e,u));var h=n.getDerivedStateFromProps,c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&F_(e,o,r,u),Nr=!1;var d=e.memoizedState;o.state=d,hc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||zt.current||Nr?(typeof h=="function"&&(fp(e,n,h,r),l=e.memoizedState),(a=Nr||$_(e,n,a,r,d,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ZC(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,c=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=mn(l):(l=Ht(n)?$i:It.current,l=Gs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||d!==l)&&F_(e,o,r,l),Nr=!1,d=e.memoizedState,o.state=d,hc(e,r,o,i);var p=e.memoizedState;a!==c||d!==p||zt.current||Nr?(typeof m=="function"&&(fp(e,n,m,r),p=e.memoizedState),(u=Nr||$_(e,n,u,r,d,p,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return yp(t,e,n,r,s,i)}function yp(t,e,n,r,i,s){xT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&P_(e,n,!1),hr(t,e,s);r=e.stateNode,IR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&P_(e,n,!0),e.child}function NT(t){var e=t.stateNode;e.pendingContext?A_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&A_(t,e.context,!1),fg(t,e.containerInfo)}function G_(t,e,n,r,i){return Qs(),ag(i),e.flags|=256,Rt(t,e,n,r),e.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function _p(t){return{baseLanes:t,cachePool:null,transitions:null}}function RT(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Oe,i&1),t===null)return hp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wh(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_p(n),e.memoizedState=vp,t):Eg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_p(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vp,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Eg(t,e){return e=wh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hu(t,e,n,r){return r!==null&&ag(r),Ys(e,t.child,null,n),t=Eg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wd(Error(b(422))),hu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wh({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ys(e,t.child,null,o),e.child.memoizedState=_p(o),e.memoizedState=vp,s);if((e.mode&1)===0)return hu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Wd(s,r,void 0),hu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cr(t,i),An(r,t,i,-1))}return bg(),r=Wd(Error(b(421))),hu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zt=zr(i.nextSibling),en=e,Ne=!0,Tn=null,t!==null&&(un[cn++]=Xn,un[cn++]=Jn,un[cn++]=Fi,Xn=t.id,Jn=t.overflow,Fi=e),e=Eg(e,r.children),e.flags|=4096,e)}function Q_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dp(t.return,e,n)}function Kd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Oe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q_(t,n,e);else if(t.tag===19)Q_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Oe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kd(e,!0,n,null,s);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ji|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bR(t,e,n){switch(e.tag){case 3:NT(e),Qs();break;case 5:iT(e);break;case 1:Ht(e.type)&&oc(e);break;case 4:fg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(uc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Oe,Oe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?RT(t,e,n):(Te(Oe,Oe.current&1),t=hr(t,e,n),t!==null?t.sibling:null);Te(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return AT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,bT(t,e,n)}return hr(t,e,n)}var PT,wp,OT,DT;PT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wp=function(){};OT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Si(Vn.current);var s=null;switch(n){case"input":i=Bf(t,i),r=Bf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Wf(t,i),r=Wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ic)}qf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};DT=function(t,e,n,r){n!==r&&(e.flags|=4)};function $o(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xR(t,e,n){var r=e.pendingProps;switch(og(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return Ht(e.type)&&sc(),yt(e),null;case 3:return r=e.stateNode,Xs(),xe(zt),xe(It),mg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tn!==null&&(xp(Tn),Tn=null))),wp(t,e),yt(e),null;case 5:pg(e);var i=Si(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)OT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return yt(e),null}if(t=Si(Vn.current),uu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)ke(Yo[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":i_(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":o_(r,s),ke("invalid",r)}qf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":eu(r),s_(r,s,!0);break;case"textarea":eu(r),a_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ic)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[Oa]=r,PT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)ke(Yo[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":i_(t,r),i=Bf(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),ke("invalid",t);break;case"textarea":o_(t,r),i=Wf(t,r),ke("invalid",t);break;default:i=r}qf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cC(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lC(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&Wm(t,s,l,o))}switch(n){case"input":eu(t),s_(t,r,!1);break;case"textarea":eu(t),a_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ic)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)DT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Si(Ma.current),Si(Vn.current),uu(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return yt(e),null;case 13:if(xe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Zt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)XC(),Qs(),e.flags|=98560,s=!1;else if(s=uu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[$n]=e}else Qs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else Tn!==null&&(xp(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Oe.current&1)!==0?Ye===0&&(Ye=3):bg())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Xs(),wp(t,e),t===null&&Aa(e.stateNode.containerInfo),yt(e),null;case 10:return cg(e.type._context),yt(e),null;case 17:return Ht(e.type)&&sc(),yt(e),null;case 19:if(xe(Oe),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$o(s,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=dc(t),o!==null){for(e.flags|=128,$o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Zs&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304)}else{if(!r)if(t=dc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return yt(e),null}else 2*Ve()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Oe.current,Te(Oe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return kg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Xt&1073741824)!==0&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function NR(t,e){switch(og(e),e.tag){case 1:return Ht(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),xe(zt),xe(It),mg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return pg(e),null;case 13:if(xe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Oe),null;case 4:return Xs(),null;case 10:return cg(e.type._context),null;case 22:case 23:return kg(),null;case 24:return null;default:return null}}var du=!1,_t=!1,RR=typeof WeakSet=="function"?WeakSet:Set,L=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Ep(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Y_=!1;function AR(t,e){if(ip=tc,t=FC(),ig(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,c=t,d=null;t:for(;;){for(var m;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(m=c.firstChild)!==null;)d=c,c=m;for(;;){if(c===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++h===r&&(l=o),(m=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sp={focusedElem:t,selectionRange:n},tc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var p=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,T=p.memoizedState,g=e.stateNode,y=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:En(e.type,v),T);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(C){Le(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return p=Y_,Y_=!1,p}function ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ep(e,n,s)}i=i.next}while(i!==r)}}function vh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function MT(t){var e=t.alternate;e!==null&&(t.alternate=null,MT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Oa],delete e[lp],delete e[fR],delete e[pR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function LT(t){return t.tag===5||t.tag===3||t.tag===4}function X_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||LT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ic));else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}var lt=null,Cn=!1;function Sr(t,e,n){for(n=n.child;n!==null;)$T(t,e,n),n=n.sibling}function $T(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(ch,n)}catch{}switch(n.tag){case 5:_t||ks(n,e);case 6:var r=lt,i=Cn;lt=null,Sr(t,e,n),lt=r,Cn=i,lt!==null&&(Cn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(Cn?(t=lt,n=n.stateNode,t.nodeType===8?Ud(t.parentNode,n):t.nodeType===1&&Ud(t,n),xa(t)):Ud(lt,n.stateNode));break;case 4:r=lt,i=Cn,lt=n.stateNode.containerInfo,Cn=!0,Sr(t,e,n),lt=r,Cn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Ep(n,e,o),i=i.next}while(i!==r)}Sr(t,e,n);break;case 1:if(!_t&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Sr(t,e,n),_t=r):Sr(t,e,n);break;default:Sr(t,e,n)}}function J_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RR),e.forEach(function(r){var i=jR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,Cn=!1;break e;case 3:lt=a.stateNode.containerInfo,Cn=!0;break e;case 4:lt=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(lt===null)throw Error(b(160));$T(s,o,i),lt=null,Cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)FT(e,t),e=e.sibling}function FT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Mn(t),r&4){try{ca(3,t,t.return),vh(3,t)}catch(v){Le(t,t.return,v)}try{ca(5,t,t.return)}catch(v){Le(t,t.return,v)}}break;case 1:wn(e,t),Mn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(wn(e,t),Mn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var i=t.stateNode;try{Sa(i,"")}catch(v){Le(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&sC(i,s),Gf(a,o);var u=Gf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],c=l[o+1];h==="style"?cC(i,c):h==="dangerouslySetInnerHTML"?lC(i,c):h==="children"?Sa(i,c):Wm(i,h,c,u)}switch(a){case"input":zf(i,s);break;case"textarea":oC(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ds(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ds(i,!!s.multiple,s.defaultValue,!0):Ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(v){Le(t,t.return,v)}}break;case 6:if(wn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Le(t,t.return,v)}}break;case 3:if(wn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(v){Le(t,t.return,v)}break;case 4:wn(e,t),Mn(t);break;case 13:wn(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sg=Ve())),r&4&&J_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||h,wn(e,t),_t=u):wn(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&(t.mode&1)!==0)for(L=t,h=t.child;h!==null;){for(c=L=h;L!==null;){switch(d=L,m=d.child,d.tag){case 0:case 11:case 14:case 15:ca(4,d,d.return);break;case 1:ks(d,d.return);var p=d.stateNode;if(typeof p.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(v){Le(r,n,v)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){ew(c);continue}}m!==null?(m.return=d,L=m):ew(c)}h=h.sibling}e:for(h=null,c=t;;){if(c.tag===5){if(h===null){h=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uC("display",o))}catch(v){Le(t,t.return,v)}}}else if(c.tag===6){if(h===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){Le(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;h===c&&(h=null),c=c.return}h===c&&(h=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:wn(e,t),Mn(t),r&4&&J_(t);break;case 21:break;default:wn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(LT(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var s=X_(t);Sp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=X_(t);Tp(t,a,o);break;default:throw Error(b(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PR(t,e,n){L=t,UT(t)}function UT(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||du;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=du;var u=_t;if(du=o,(_t=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?tw(i):l!==null?(l.return=o,L=l):tw(i);for(;s!==null;)L=s,UT(s),s=s.sibling;L=i,du=a,_t=u}Z_(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):Z_(t)}}function Z_(t){for(;L!==null;){var e=L;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:_t||vh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var c=h.dehydrated;c!==null&&xa(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}_t||e.flags&512&&Cp(e)}catch(d){Le(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function ew(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function tw(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Cp(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Cp(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var OR=Math.ceil,mc=vr.ReactCurrentDispatcher,Cg=vr.ReactCurrentOwner,dn=vr.ReactCurrentBatchConfig,pe=0,ot=null,He=null,dt=0,Xt=0,bs=ai(0),Ye=0,Ua=null,ji=0,_h=0,Tg=0,ha=null,Lt=null,Sg=0,Zs=1/0,Gn=null,gc=!1,Ip=null,Wr=null,fu=!1,Fr=null,yc=0,da=0,kp=null,$u=-1,Fu=0;function Pt(){return(pe&6)!==0?Ve():$u!==-1?$u:$u=Ve()}function Kr(t){return(t.mode&1)===0?1:(pe&2)!==0&&dt!==0?dt&-dt:gR.transition!==null?(Fu===0&&(Fu=CC()),Fu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:NC(t.type)),t)}function An(t,e,n,r){if(50<da)throw da=0,kp=null,Error(b(185));ml(t,n,r),((pe&2)===0||t!==ot)&&(t===ot&&((pe&2)===0&&(_h|=n),Ye===4&&Pr(t,dt)),Wt(t,r),n===1&&pe===0&&(e.mode&1)===0&&(Zs=Ve()+500,mh&&li()))}function Wt(t,e){var n=t.callbackNode;gN(t,e);var r=ec(t,t===ot?dt:0);if(r===0)n!==null&&c_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&c_(n),e===1)t.tag===0?mR(nw.bind(null,t)):GC(nw.bind(null,t)),hR(function(){(pe&6)===0&&li()}),n=null;else{switch(TC(r)){case 1:n=Ym;break;case 4:n=wC;break;case 16:n=Zu;break;case 536870912:n=EC;break;default:n=Zu}n=qT(n,jT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jT(t,e){if($u=-1,Fu=0,(pe&6)!==0)throw Error(b(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=ec(t,t===ot?dt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=vc(t,r);else{e=r;var i=pe;pe|=2;var s=BT();(ot!==t||dt!==e)&&(Gn=null,Zs=Ve()+500,Ri(t,e));do try{LR();break}catch(a){VT(t,a)}while(1);ug(),mc.current=s,pe=i,He!==null?e=0:(ot=null,dt=0,e=Ye)}if(e!==0){if(e===2&&(i=Zf(t),i!==0&&(r=i,e=bp(t,i))),e===1)throw n=Ua,Ri(t,0),Pr(t,r),Wt(t,Ve()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!DR(i)&&(e=vc(t,r),e===2&&(s=Zf(t),s!==0&&(r=s,e=bp(t,s))),e===1))throw n=Ua,Ri(t,0),Pr(t,r),Wt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:mi(t,Lt,Gn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Sg+500-Ve(),10<e)){if(ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ap(mi.bind(null,t,Lt,Gn),e);break}mi(t,Lt,Gn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OR(r/1960))-r,10<r){t.timeoutHandle=ap(mi.bind(null,t,Lt,Gn),r);break}mi(t,Lt,Gn);break;case 5:mi(t,Lt,Gn);break;default:throw Error(b(329))}}}return Wt(t,Ve()),t.callbackNode===n?jT.bind(null,t):null}function bp(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Ri(t,e).flags|=256),t=vc(t,e),t!==2&&(e=Lt,Lt=n,e!==null&&xp(e)),t}function xp(t){Lt===null?Lt=t:Lt.push.apply(Lt,t)}function DR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!On(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~Tg,e&=~_h,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function nw(t){if((pe&6)!==0)throw Error(b(327));Us();var e=ec(t,0);if((e&1)===0)return Wt(t,Ve()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var r=Zf(t);r!==0&&(e=r,n=bp(t,r))}if(n===1)throw n=Ua,Ri(t,0),Pr(t,e),Wt(t,Ve()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,Lt,Gn),Wt(t,Ve()),null}function Ig(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Zs=Ve()+500,mh&&li())}}function Vi(t){Fr!==null&&Fr.tag===0&&(pe&6)===0&&Us();var e=pe;pe|=1;var n=dn.transition,r=_e;try{if(dn.transition=null,_e=1,t)return t()}finally{_e=r,dn.transition=n,pe=e,(pe&6)===0&&li()}}function kg(){Xt=bs.current,xe(bs)}function Ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cR(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(og(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sc();break;case 3:Xs(),xe(zt),xe(It),mg();break;case 5:pg(r);break;case 4:Xs();break;case 13:xe(Oe);break;case 19:xe(Oe);break;case 10:cg(r.type._context);break;case 22:case 23:kg()}n=n.return}if(ot=t,He=t=qr(t.current,null),dt=Xt=e,Ye=0,Ua=null,Tg=_h=ji=0,Lt=ha=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function VT(t,e){do{var n=He;try{if(ug(),Du.current=pc,fc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fc=!1}if(Ui=0,rt=Ge=De=null,ua=!1,La=0,Cg.current=null,n===null||n.return===null){Ye=1,Ua=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,c=h.tag;if((h.mode&1)===0&&(c===0||c===11||c===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=z_(o);if(m!==null){m.flags&=-257,H_(m,o,a,s,e),m.mode&1&&B_(s,u,e),e=m,l=u;var p=e.updateQueue;if(p===null){var v=new Set;v.add(l),e.updateQueue=v}else p.add(l);break e}else{if((e&1)===0){B_(s,u,e),bg();break e}l=Error(b(426))}}else if(Ne&&a.mode&1){var T=z_(o);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),H_(T,o,a,s,e),ag(Js(l,a));break e}}s=l=Js(l,a),Ye!==4&&(Ye=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=ST(s,l,e);M_(s,g);break e;case 1:a=l;var y=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wr===null||!Wr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=IT(s,a,e);M_(s,C);break e}}s=s.return}while(s!==null)}HT(n)}catch(I){e=I,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function BT(){var t=mc.current;return mc.current=pc,t===null?pc:t}function bg(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),ot===null||(ji&268435455)===0&&(_h&268435455)===0||Pr(ot,dt)}function vc(t,e){var n=pe;pe|=2;var r=BT();(ot!==t||dt!==e)&&(Gn=null,Ri(t,e));do try{MR();break}catch(i){VT(t,i)}while(1);if(ug(),pe=n,mc.current=r,He!==null)throw Error(b(261));return ot=null,dt=0,Ye}function MR(){for(;He!==null;)zT(He)}function LR(){for(;He!==null&&!aN();)zT(He)}function zT(t){var e=KT(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?HT(t):He=e,Cg.current=null}function HT(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=xR(n,e,Xt),n!==null){He=n;return}}else{if(n=NR(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function mi(t,e,n){var r=_e,i=dn.transition;try{dn.transition=null,_e=1,$R(t,e,n,r)}finally{dn.transition=i,_e=r}return null}function $R(t,e,n,r){do Us();while(Fr!==null);if((pe&6)!==0)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yN(t,s),t===ot&&(He=ot=null,dt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fu||(fu=!0,qT(Zu,function(){return Us(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=dn.transition,dn.transition=null;var o=_e;_e=1;var a=pe;pe|=4,Cg.current=null,AR(t,n),FT(n,t),rR(sp),tc=!!ip,sp=ip=null,t.current=n,PR(n),lN(),pe=a,_e=o,dn.transition=s}else t.current=n;if(fu&&(fu=!1,Fr=t,yc=i),s=t.pendingLanes,s===0&&(Wr=null),hN(n.stateNode),Wt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gc)throw gc=!1,t=Ip,Ip=null,t;return(yc&1)!==0&&t.tag!==0&&Us(),s=t.pendingLanes,(s&1)!==0?t===kp?da++:(da=0,kp=t):da=0,li(),null}function Us(){if(Fr!==null){var t=TC(yc),e=dn.transition,n=_e;try{if(dn.transition=null,_e=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,yc=0,(pe&6)!==0)throw Error(b(331));var i=pe;for(pe|=4,L=t.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var h=L;switch(h.tag){case 0:case 11:case 15:ca(8,h,s)}var c=h.child;if(c!==null)c.return=h,L=c;else for(;L!==null;){h=L;var d=h.sibling,m=h.return;if(MT(h),h===u){L=null;break}if(d!==null){d.return=m,L=d;break}L=m}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var y=t.current;for(L=y;L!==null;){o=L;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,L=_;else e:for(o=y;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:vh(9,a)}}catch(I){Le(a,a.return,I)}if(a===o){L=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,L=C;break e}L=a.return}}if(pe=i,li(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(ch,t)}catch{}r=!0}return r}finally{_e=n,dn.transition=e}}return!1}function rw(t,e,n){e=Js(n,e),e=ST(t,e,1),t=Hr(t,e,1),e=Pt(),t!==null&&(ml(t,1,e),Wt(t,e))}function Le(t,e,n){if(t.tag===3)rw(t,t,n);else for(;e!==null;){if(e.tag===3){rw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=Js(n,t),t=IT(e,t,1),e=Hr(e,t,1),t=Pt(),e!==null&&(ml(e,1,t),Wt(e,t));break}}e=e.return}}function FR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(dt&n)===n&&(Ye===4||Ye===3&&(dt&130023424)===dt&&500>Ve()-Sg?Ri(t,0):Tg|=n),Wt(t,e)}function WT(t,e){e===0&&((t.mode&1)===0?e=1:(e=ru,ru<<=1,(ru&130023424)===0&&(ru=4194304)));var n=Pt();t=cr(t,e),t!==null&&(ml(t,e,n),Wt(t,n))}function UR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),WT(t,n)}function jR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),WT(t,n)}var KT;KT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ut=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ut=!1,bR(t,e,n);Ut=(t.flags&131072)!==0}else Ut=!1,Ne&&(e.flags&1048576)!==0&&QC(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lu(t,e),t=e.pendingProps;var i=Gs(e,It.current);Fs(e,n),i=yg(null,e,r,t,i,n);var s=vg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,oc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dg(e),i.updater=gh,e.stateNode=i,i._reactInternals=e,pp(e,r,t,n),e=yp(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&sg(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BR(r),t=En(r,t),i){case 0:e=gp(null,e,r,t,n);break e;case 1:e=q_(null,e,r,t,n);break e;case 11:e=W_(null,e,r,t,n);break e;case 14:e=K_(null,e,r,En(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),gp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),q_(t,e,r,i,n);case 3:e:{if(NT(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ZC(t,e),hc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Js(Error(b(423)),e),e=G_(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(b(424)),e),e=G_(t,e,r,n,i);break e}else for(Zt=zr(e.stateNode.containerInfo.firstChild),en=e,Ne=!0,Tn=null,n=rT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=hr(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return iT(e),t===null&&hp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,op(r,i)?o=null:s!==null&&op(r,s)&&(e.flags|=32),xT(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&hp(e),null;case 13:return RT(t,e,n);case 4:return fg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ys(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),W_(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(uc,r._currentValue),r._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===i.children&&!zt.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=rr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=mn(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),K_(t,e,r,i,n);case 15:return kT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Lu(t,e),e.tag=1,Ht(r)?(t=!0,oc(e)):t=!1,Fs(e,n),tT(e,r,i),pp(e,r,i,n),yp(null,e,r,!0,t,n);case 19:return AT(t,e,n);case 22:return bT(t,e,n)}throw Error(b(156,e.tag))};function qT(t,e){return _C(t,e)}function VR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new VR(t,e,n,r)}function xg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BR(t){if(typeof t=="function")return xg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qm)return 11;if(t===Gm)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Ai(n.children,i,s,e);case Km:o=8,i|=8;break;case Ff:return t=hn(12,n,e,i|2),t.elementType=Ff,t.lanes=s,t;case Uf:return t=hn(13,n,e,i),t.elementType=Uf,t.lanes=s,t;case jf:return t=hn(19,n,e,i),t.elementType=jf,t.lanes=s,t;case nC:return wh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eC:o=10;break e;case tC:o=9;break e;case qm:o=11;break e;case Gm:o=14;break e;case xr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function wh(t,e,n,r){return t=hn(22,t,r,e),t.elementType=nC,t.lanes=n,t.stateNode={isHidden:!1},t}function qd(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xd(0),this.expirationTimes=xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ng(t,e,n,r,i,s,o,a,l){return t=new zR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dg(s),t}function HR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function GT(t){if(!t)return ei;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Ht(n))return qC(t,n,e)}return e}function QT(t,e,n,r,i,s,o,a,l){return t=Ng(n,r,!0,t,i,s,o,a,l),t.context=GT(null),n=t.current,r=Pt(),i=Kr(n),s=rr(r,i),s.callback=e!=null?e:null,Hr(n,s,i),t.current.lanes=i,ml(t,i,r),Wt(t,r),t}function Eh(t,e,n,r){var i=e.current,s=Pt(),o=Kr(i);return n=GT(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(An(t,i,o,s),Ou(t,i,o)),o}function _c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function iw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rg(t,e){iw(t,e),(t=t.alternate)&&iw(t,e)}function WR(){return null}var YT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ag(t){this._internalRoot=t}Ch.prototype.render=Ag.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Eh(t,e,null,null)};Ch.prototype.unmount=Ag.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Eh(null,t,null,null)}),e[ur]=null}};function Ch(t){this._internalRoot=t}Ch.prototype.unstable_scheduleHydration=function(t){if(t){var e=kC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&xC(t)}};function Pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sw(){}function KR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_c(o);s.call(u)}}var o=QT(e,r,t,0,null,!1,!1,"",sw);return t._reactRootContainer=o,t[ur]=o.current,Aa(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_c(l);a.call(u)}}var l=Ng(t,0,!1,null,null,!1,!1,"",sw);return t._reactRootContainer=l,t[ur]=l.current,Aa(t.nodeType===8?t.parentNode:t),Vi(function(){Eh(e,l,n,r)}),l}function Sh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_c(o);a.call(l)}}Eh(e,o,t,i)}else o=KR(n,e,t,i,r);return _c(o)}SC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(Xm(e,n|1),Wt(e,Ve()),(pe&6)===0&&(Zs=Ve()+500,li()))}break;case 13:Vi(function(){var r=cr(t,1);if(r!==null){var i=Pt();An(r,t,1,i)}}),Rg(t,1)}};Jm=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=Pt();An(e,t,134217728,n)}Rg(t,134217728)}};IC=function(t){if(t.tag===13){var e=Kr(t),n=cr(t,e);if(n!==null){var r=Pt();An(n,t,e,r)}Rg(t,e)}};kC=function(){return _e};bC=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Yf=function(t,e,n){switch(e){case"input":if(zf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ph(r);if(!i)throw Error(b(90));iC(r),zf(r,i)}}}break;case"textarea":oC(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};fC=Ig;pC=Vi;var qR={usingClientEntryPoint:!1,Events:[yl,Es,ph,hC,dC,Ig]},Fo={findFiberByHostInstance:Ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},GR={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yC(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||WR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{ch=pu.inject(GR),jn=pu}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qR;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pg(e))throw Error(b(200));return HR(t,e,null,n)};on.createRoot=function(t,e){if(!Pg(t))throw Error(b(299));var n=!1,r="",i=YT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ng(t,1,!1,null,null,n,!1,r,i),t[ur]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Ag(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=yC(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return Vi(t)};on.hydrate=function(t,e,n){if(!Th(e))throw Error(b(200));return Sh(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!Pg(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=YT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=QT(e,null,t,1,n!=null?n:null,i,!1,s,o),t[ur]=e.current,Aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ch(e)};on.render=function(t,e,n){if(!Th(e))throw Error(b(200));return Sh(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!Th(t))throw Error(b(40));return t._reactRootContainer?(Vi(function(){Sh(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1};on.unstable_batchedUpdates=Ig;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Th(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Sh(t,e,n,!1,r)};on.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=on})(Bm);const xs=BE(Bm.exports);var ow=Bm.exports;Lf.createRoot=ow.createRoot,Lf.hydrateRoot=ow.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wc(){return wc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wc.apply(this,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));const aw="popstate";function QR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Np("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Rp(i)}return XR(e,n,null,t)}function YR(){return Math.random().toString(36).substr(2,8)}function lw(t){return{usr:t.state,key:t.key}}function Np(t,e,n,r){return n===void 0&&(n=null),wc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mo(e):e,{state:n,key:e&&e.key||r||YR()})}function Rp(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function XR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ur.Pop,l=null;function u(){a=Ur.Pop,l&&l({action:a,location:d.location})}function h(m,p){a=Ur.Push;let v=Np(d.location,m,p);n&&n(v,m);let T=lw(v),g=d.createHref(v);try{o.pushState(T,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:v})}function c(m,p){a=Ur.Replace;let v=Np(d.location,m,p);n&&n(v,m);let T=lw(v),g=d.createHref(v);o.replaceState(T,"",g),s&&l&&l({action:a,location:v})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(aw,u),l=m,()=>{i.removeEventListener(aw,u),l=null}},createHref(m){return e(i,m)},push:h,replace:c,go(m){return o.go(m)}};return d}var uw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(uw||(uw={}));function JR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?mo(e):e,i=JT(r.pathname||"/",n);if(i==null)return null;let s=XT(t);ZR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=lA(s[a],i);return o}function XT(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Xe(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Gr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),XT(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:oA(a,i.index),routesMeta:l})}),e}function ZR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eA=/^:\w+$/,tA=3,nA=2,rA=1,iA=10,sA=-2,cw=t=>t==="*";function oA(t,e){let n=t.split("/"),r=n.length;return n.some(cw)&&(r+=sA),e&&(r+=nA),n.filter(i=>!cw(i)).reduce((i,s)=>i+(eA.test(s)?tA:s===""?rA:iA),r)}function aA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=uA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(r,h.params);let c=a.route;s.push({params:r,pathname:Gr([i,h.pathname]),pathnameBase:pA(Gr([i,h.pathnameBase])),route:c}),h.pathnameBase!=="/"&&(i=Gr([i,h.pathnameBase]))}return s}function uA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,c)=>{if(h==="*"){let d=a[c]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[h]=hA(a[c]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function cA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ZT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hA(t,e){try{return decodeURIComponent(t)}catch(n){return ZT(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function JT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ZT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mo(t):t;return{pathname:n?n.startsWith("/")?n:fA(n,e):e,search:mA(r),hash:gA(i)}}function fA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mo(t):(i=wc({},t),Xe(!i.pathname||!i.pathname.includes("?"),Qd("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Qd("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Qd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let c=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?e[c]:"/"}let l=dA(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Gr=t=>t.join("/").replace(/\/\/+/g,"/"),pA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class yA{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function vA(t){return t instanceof yA}var Ih={exports:{}},kh={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _A=w.exports,wA=Symbol.for("react.element"),EA=Symbol.for("react.fragment"),CA=Object.prototype.hasOwnProperty,TA=_A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,SA={key:!0,ref:!0,__self:!0,__source:!0};function tS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)CA.call(e,r)&&!SA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wA,type:t,key:s,ref:o,props:i,_owner:TA.current}}kh.Fragment=EA;kh.jsx=tS;kh.jsxs=tS;(function(t){t.exports=kh})(Ih);const j=Ih.exports.Fragment,f=Ih.exports.jsx,E=Ih.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ap(){return Ap=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ap.apply(this,arguments)}function IA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const kA=typeof Object.is=="function"?Object.is:IA,{useState:bA,useEffect:xA,useLayoutEffect:NA,useDebugValue:RA}=Mf;function AA(t,e,n){const r=e(),[{inst:i},s]=bA({inst:{value:r,getSnapshot:e}});return NA(()=>{i.value=r,i.getSnapshot=e,Yd(i)&&s({inst:i})},[t,r,e]),xA(()=>(Yd(i)&&s({inst:i}),t(()=>{Yd(i)&&s({inst:i})})),[t]),RA(r),r}function Yd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!kA(n,r)}catch{return!0}}function PA(t,e,n){return e()}const OA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DA=!OA,MA=DA?PA:AA;"useSyncExternalStore"in Mf&&(t=>t.useSyncExternalStore)(Mf);const LA=w.exports.createContext(null),$A=w.exports.createContext(null),Og=w.exports.createContext(null),Dg=w.exports.createContext(null),bh=w.exports.createContext(null),go=w.exports.createContext({outlet:null,matches:[]}),nS=w.exports.createContext(null);function FA(t,e){let{relative:n}=e===void 0?{}:e;yo()||Xe(!1);let{basename:r,navigator:i}=w.exports.useContext(Dg),{hash:s,pathname:o,search:a}=iS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function yo(){return w.exports.useContext(bh)!=null}function xh(){return yo()||Xe(!1),w.exports.useContext(bh).location}function rS(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function rs(){yo()||Xe(!1);let{basename:t,navigator:e}=w.exports.useContext(Dg),{matches:n}=w.exports.useContext(go),{pathname:r}=xh(),i=JSON.stringify(rS(n).map(a=>a.pathnameBase)),s=w.exports.useRef(!1);return w.exports.useEffect(()=>{s.current=!0}),w.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=eS(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Gr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function UA(){let{matches:t}=w.exports.useContext(go),e=t[t.length-1];return e?e.params:{}}function iS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.exports.useContext(go),{pathname:i}=xh(),s=JSON.stringify(rS(r).map(o=>o.pathnameBase));return w.exports.useMemo(()=>eS(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function jA(t,e){yo()||Xe(!1);let n=w.exports.useContext(Og),{matches:r}=w.exports.useContext(go),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=xh(),l;if(e){var u;let p=typeof e=="string"?mo(e):e;o==="/"||((u=p.pathname)==null?void 0:u.startsWith(o))||Xe(!1),l=p}else l=a;let h=l.pathname||"/",c=o==="/"?h:h.slice(o.length)||"/",d=JR(t,{pathname:c}),m=HA(d&&d.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:Gr([o,p.pathname]),pathnameBase:p.pathnameBase==="/"?o:Gr([o,p.pathnameBase])})),r,n||void 0);return e?f(bh.Provider,{value:{location:Ap({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Ur.Pop},children:m}):m}function VA(){let t=KA(),e=vA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return E(j,{children:[f("h2",{children:"Unhandled Thrown Error!"}),f("h3",{style:{fontStyle:"italic"},children:e}),n?f("pre",{style:i,children:n}):null,f("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),E("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",f("code",{style:s,children:"errorElement"})," props on\xA0",f("code",{style:s,children:"<Route>"})]})]})}class BA extends w.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?f(nS.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function zA(t){let{routeContext:e,match:n,children:r}=t,i=w.exports.useContext(LA);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),f(go.Provider,{value:e,children:r})}function HA(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||f(VA,{}):null,h=()=>f(zA,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?f(BA,{location:n.location,component:u,error:l,children:h()}):h()},null)}var hw;(function(t){t.UseRevalidator="useRevalidator"})(hw||(hw={}));var Pp;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Pp||(Pp={}));function WA(t){let e=w.exports.useContext(Og);return e||Xe(!1),e}function KA(){var t;let e=w.exports.useContext(nS),n=WA(Pp.UseRouteError),r=w.exports.useContext(go),i=r.matches[r.matches.length-1];return e||(r||Xe(!1),i.route.id||Xe(!1),(t=n.errors)==null?void 0:t[i.route.id])}function sS(t){let{to:e,replace:n,state:r,relative:i}=t;yo()||Xe(!1);let s=w.exports.useContext(Og),o=rs();return w.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function br(t){Xe(!1)}function qA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ur.Pop,navigator:s,static:o=!1}=t;yo()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=w.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=mo(r));let{pathname:u="/",search:h="",hash:c="",state:d=null,key:m="default"}=r,p=w.exports.useMemo(()=>{let v=JT(u,a);return v==null?null:{pathname:v,search:h,hash:c,state:d,key:m}},[a,u,h,c,d,m]);return p==null?null:f(Dg.Provider,{value:l,children:f(bh.Provider,{children:n,value:{location:p,navigationType:i}})})}function GA(t){let{children:e,location:n}=t,r=w.exports.useContext($A),i=r&&!e?r.router.routes:Op(e);return jA(i,n)}var dw;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(dw||(dw={}));new Promise(()=>{});function Op(t,e){e===void 0&&(e=[]);let n=[];return w.exports.Children.forEach(t,(r,i)=>{if(!w.exports.isValidElement(r))return;if(r.type===w.exports.Fragment){n.push.apply(n,Op(r.props.children,e));return}r.type!==br&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Op(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function QA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XA(t,e){return t.button===0&&(!e||e==="_self")&&!YA(t)}const JA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ZA(t){let{basename:e,children:n,window:r}=t,i=w.exports.useRef();i.current==null&&(i.current=QR({window:r,v5Compat:!0}));let s=i.current,[o,a]=w.exports.useState({action:s.action,location:s.location});return w.exports.useLayoutEffect(()=>s.listen(a),[s]),f(qA,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Xd=w.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h}=e,c=QA(e,JA),d=FA(u,{relative:i}),m=eP(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function p(v){r&&r(v),v.defaultPrevented||m(v)}return f("a",{...c,href:d,onClick:s?r:p,ref:n,target:l})});var fw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(fw||(fw={}));var pw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pw||(pw={}));function eP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=rs(),l=xh(),u=iS(t,{relative:o});return w.exports.useCallback(h=>{if(XA(h,n)){h.preventDefault();let c=r!==void 0?r:Rp(l)===Rp(u);a(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw vo(e)},vo=function(t){return new Error("Firebase Database ("+oS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[h],n[c],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),c!==64){const p=u<<6&192|c;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lS=function(t){const e=aS(t);return Mg.encodeByteArray(e,!0)},Ec=function(t){return lS(t).replace(/\./g,"")},Cc=function(t){try{return Mg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){return uS(void 0,t)}function uS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rP(n)||(t[n]=uS(t[n],e[n]));return t}function rP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function iP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sP(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hS(){return oS.NODE_ADMIN===!0}function dS(){return typeof indexedDB=="object"}function oP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function aP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=()=>aP().__FIREBASE_DEFAULTS__,uP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cP=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&Cc(t[1]);return e&&JSON.parse(e)},$g=()=>lP()||uP()||cP(),fS=t=>{var e,n;return(n=(e=$g())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hP=t=>{const e=fS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dP=()=>{var t;return(t=$g())===null||t===void 0?void 0:t.config},pS=t=>{var e;return(e=$g())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ec(JSON.stringify(n)),Ec(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pP,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,r)}}function mP(t,e){return t.replace(gP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ja(Cc(s[0])||""),n=ja(Cc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yP=function(t){const e=mS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vP=function(t){const e=mS(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function eo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Sc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mw(s)&&mw(o)){if(!Sc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),h=1518500249):(u=s^o^a,h=1859775393):c<60?(u=s&o|a&(s|o),h=2400959708):(u=s^o^a,h=3395469782);const d=(i<<5|i>>>27)+u+l+h+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function wP(t,e){const n=new EP(t,e);return n.subscribe.bind(n)}class EP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jd),i.error===void 0&&(i.error=Jd),i.complete===void 0&&(i.complete=Jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jd(){}function gS(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=1e3,IP=2,kP=4*60*60*1e3,bP=.5;function xP(t,e=SP,n=IP){const r=e*Math.pow(n,t),i=Math.round(bP*r*(Math.random()-.5)*2);return Math.min(kP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AP(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RP(t){return t===gi?void 0:t}function AP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const OP={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},DP=fe.INFO,MP={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},LP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=DP,this._logHandler=LP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const $P=(t,e)=>e.some(n=>t instanceof n);let gw,yw;function FP(){return gw||(gw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UP(){return yw||(yw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yS=new WeakMap,Mp=new WeakMap,vS=new WeakMap,Zd=new WeakMap,Ug=new WeakMap;function jP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yS.set(n,t)}).catch(()=>{}),Ug.set(e,t),e}function VP(t){if(Mp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mp.set(t,e)}let Lp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BP(t){Lp=t(Lp)}function zP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ef(this),e,...n);return vS.set(r,e.sort?e.sort():[e]),Qr(r)}:UP().includes(t)?function(...e){return t.apply(ef(this),e),Qr(yS.get(this))}:function(...e){return Qr(t.apply(ef(this),e))}}function HP(t){return typeof t=="function"?zP(t):(t instanceof IDBTransaction&&VP(t),$P(t,FP())?new Proxy(t,Lp):t)}function Qr(t){if(t instanceof IDBRequest)return jP(t);if(Zd.has(t))return Zd.get(t);const e=HP(t);return e!==t&&(Zd.set(t,e),Ug.set(e,t)),e}const ef=t=>Ug.get(t);function _S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qr(o.result),l.oldVersion,l.newVersion,Qr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const WP=["get","getKey","getAll","getAllKeys","count"],KP=["put","add","delete","clear"],tf=new Map;function vw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tf.get(e))return tf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return tf.set(e,s),s}BP(t=>({...t,get:(e,n,r)=>vw(e,n)||t.get(e,n,r),has:(e,n)=>!!vw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $p="@firebase/app",_w="0.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new _l("@firebase/app"),QP="@firebase/app-compat",YP="@firebase/analytics-compat",XP="@firebase/analytics",JP="@firebase/app-check-compat",ZP="@firebase/app-check",eO="@firebase/auth",tO="@firebase/auth-compat",nO="@firebase/database",rO="@firebase/database-compat",iO="@firebase/functions",sO="@firebase/functions-compat",oO="@firebase/installations",aO="@firebase/installations-compat",lO="@firebase/messaging",uO="@firebase/messaging-compat",cO="@firebase/performance",hO="@firebase/performance-compat",dO="@firebase/remote-config",fO="@firebase/remote-config-compat",pO="@firebase/storage",mO="@firebase/storage-compat",gO="@firebase/firestore",yO="@firebase/firestore-compat",vO="firebase",_O="9.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="[DEFAULT]",wO={[$p]:"fire-core",[QP]:"fire-core-compat",[XP]:"fire-analytics",[YP]:"fire-analytics-compat",[ZP]:"fire-app-check",[JP]:"fire-app-check-compat",[eO]:"fire-auth",[tO]:"fire-auth-compat",[nO]:"fire-rtdb",[rO]:"fire-rtdb-compat",[iO]:"fire-fn",[sO]:"fire-fn-compat",[oO]:"fire-iid",[aO]:"fire-iid-compat",[lO]:"fire-fcm",[uO]:"fire-fcm-compat",[cO]:"fire-perf",[hO]:"fire-perf-compat",[dO]:"fire-rc",[fO]:"fire-rc-compat",[pO]:"fire-gcs",[mO]:"fire-gcs-compat",[gO]:"fire-fst",[yO]:"fire-fst-compat","fire-js":"fire-js",[vO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=new Map,Up=new Map;function EO(t,e){try{t.container.addComponent(e)}catch(n){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(Up.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;Up.set(e,t);for(const n of Va.values())EO(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yr=new is("app","Firebase",CO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=_O;function jg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=dP()),!n)throw Yr.create("no-options");const s=Va.get(i);if(s){if(Sc(n,s.options)&&Sc(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new PP(i);for(const l of Up.values())o.addComponent(l);const a=new TO(n,r,o);return Va.set(i,a),a}function wS(t=Fp){const e=Va.get(t);if(!e&&t===Fp)return jg();if(!e)throw Yr.create("no-app",{appName:t});return e}function SO(){return Array.from(Va.values())}function We(t,e,n){var r;let i=(r=wO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(a.join(" "));return}yn(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO="firebase-heartbeat-database",kO=1,Ba="firebase-heartbeat-store";let nf=null;function ES(){return nf||(nf=_S(IO,kO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ba)}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),nf}async function bO(t){var e;try{return(await ES()).transaction(Ba).objectStore(Ba).get(CS(t))}catch(n){if(n instanceof vn)Bi.warn(n.message);else{const r=Yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bi.warn(r.message)}}}async function ww(t,e){var n;try{const i=(await ES()).transaction(Ba,"readwrite");return await i.objectStore(Ba).put(e,CS(t)),i.done}catch(r){if(r instanceof vn)Bi.warn(r.message);else{const i=Yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Bi.warn(i.message)}}}function CS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=1024,NO=30*24*60*60*1e3;class RO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ew();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=NO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ew(),{heartbeatsToSend:n,unsentEntries:r}=AO(this._heartbeatsCache.heartbeats),i=Ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ew(){return new Date().toISOString().substring(0,10)}function AO(t,e=xO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dS()?oP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ww(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ww(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cw(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){yn(new rn("platform-logger",e=>new qP(e),"PRIVATE")),yn(new rn("heartbeat",e=>new RO(e),"PRIVATE")),We($p,_w,t),We($p,_w,"esm2017"),We("fire-js","")}OO("");function Vg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function TS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DO=TS,SS=new is("auth","Firebase",TS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=new _l("@firebase/auth");function ju(t,...e){Tw.logLevel<=fe.ERROR&&Tw.error(`Auth (${ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,...e){throw Bg(t,...e)}function Bn(t,...e){return Bg(t,...e)}function MO(t,e,n){const r=Object.assign(Object.assign({},DO()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function Bg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return SS.create(t,...e)}function Q(t,e,...n){if(!t)throw Bg(e,...n)}function Zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ju(e),new Error(e)}function dr(t,e){t||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new Map;function er(t){dr(t instanceof Function,"Expected a class definition");let e=Sw.get(t);return e?(dr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sw.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LO(t,e){const n=wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sc(s,e!=null?e:{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function $O(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FO(){return Iw()==="http:"||Iw()==="https:"}function Iw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FO()||iP()||"connection"in navigator)?navigator.onLine:!0}function jO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,dr(n>e,"Short delay should be less than long delay!"),this.isMobile=Lg()||cS()}get(){return UO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){dr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=new El(3e4,6e4);function wo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Eo(t,e,n,r,i={}){return kS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),IS.fetch()(bS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function kS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VO),e);try{const i=new zO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mu(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw MO(t,h,u);Dn(t,h)}}catch(i){if(i instanceof vn)throw i;Dn(t,"network-request-failed")}}async function Cl(t,e,n,r,i={}){const s=await Eo(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zg(t.config,i):`${t.config.apiScheme}://${i}`}class zO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bn(this.auth,"network-request-failed")),BO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e){return Eo(t,"POST","/v1/accounts:delete",e)}async function WO(t,e){return Eo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KO(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Hg(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fa(rf(i.auth_time)),issuedAtTime:fa(rf(i.iat)),expirationTime:fa(rf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rf(t){return Number(t)*1e3}function Hg(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cc(r);return s?JSON.parse(s):(ju("Failed to decode base64 JWT payload"),null)}catch(s){return ju("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function qO(t){const e=Hg(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&GO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await za(t,WO(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JO(s.providerUserInfo):[],a=XO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xS(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function YO(t){const e=Fe(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JO(t){return t.map(e=>{var{providerId:n}=e,r=Vg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t,e){const n=await kS(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",IS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ha;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await za(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KO(this,e)}reload(){return YO(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await za(this,HO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:C,isAnonymous:I,providerData:N,stsTokenManager:A}=n;Q(_&&A,e,"internal-error");const D=Ha.fromJSON(this.name,A);Q(typeof _=="string",e,"internal-error"),Ir(c,e.name),Ir(d,e.name),Q(typeof C=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),Ir(m,e.name),Ir(p,e.name),Ir(v,e.name),Ir(T,e.name),Ir(g,e.name),Ir(y,e.name);const H=new Pi({uid:_,auth:e,email:d,emailVerified:C,displayName:c,isAnonymous:I,photoURL:p,phoneNumber:m,tenantId:v,stsTokenManager:D,createdAt:g,lastLoginAt:y});return N&&Array.isArray(N)&&(H.providerData=N.map(J=>Object.assign({},J))),T&&(H._redirectEventId=T),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ha;i.updateFromServerResponse(n);const s=new Pi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ic(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}NS.type="NONE";const kw=NS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(er(kw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||er(kw);const o=Vu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Pi._fromJSON(e,h);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new js(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(MS(e))return"Webos";if(Wg(e))return"Safari";if((e.includes("chrome/")||AS(e))&&!e.includes("edge/"))return"Chrome";if(OS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RS(t=kt()){return/firefox\//i.test(t)}function Wg(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AS(t=kt()){return/crios\//i.test(t)}function PS(t=kt()){return/iemobile/i.test(t)}function OS(t=kt()){return/android/i.test(t)}function DS(t=kt()){return/blackberry/i.test(t)}function MS(t=kt()){return/webos/i.test(t)}function Rh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eD(t=kt()){var e;return Rh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tD(){return sP()&&document.documentMode===10}function LS(t=kt()){return Rh(t)||OS(t)||MS(t)||DS(t)||/windows phone/i.test(t)||PS(t)}function nD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e=[]){let n;switch(t){case"Browser":n=bw(kt());break;case"Worker":n=`${bw(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xw(this),this.idTokenSubscription=new xw(this),this.beforeStateQueue=new rD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ic(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&er(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$S(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Tl(t){return Fe(t)}class xw{constructor(e){this.auth=e,this.observer=null,this.addObserver=wP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sD(t,e,n){const r=Tl(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=FS(e),{host:o,port:a}=oD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||aD()}function FS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oD(t){const e=FS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nw(o)}}}function Nw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,n){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function lD(t,e){return Eo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",wo(t,e))}async function cD(t,e){return Eo(t,"POST","/v1/accounts:sendOobCode",wo(t,e))}async function hD(t,e){return cD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",wo(t,e))}async function fD(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",wo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Kg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return uD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dD(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fD(e,{idToken:n,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return Cl(t,"POST","/v1/accounts:signInWithIdp",wo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="http://localhost";class zi extends Kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:pD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gD(t){const e=Xo(Jo(t)).link,n=e?Xo(Jo(e)).deep_link_id:null,r=Xo(Jo(t)).deep_link_id;return(r?Xo(Jo(r)).link:null)||r||n||e||t}class qg{constructor(e){var n,r,i,s,o,a;const l=Xo(Jo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,c=mD((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gD(e);try{return new qg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qg.parseLink(n);return Q(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends US{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Sl{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Sl{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Sl{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e){return Cl(t,"POST","/v1/accounts:signUp",wo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pi._fromIdTokenResponse(e,r,i),o=Rw(r);return new Hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rw(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kc(e,n,r,i)}}function jS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kc._fromErrorAndOperation(t,s,e,r):s})}async function vD(t,e,n=!1){const r=await za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await za(t,jS(i,s,e,t),n);Q(o.idToken,i,"internal-error");const a=Hg(o.idToken);Q(a,i,"internal-error");const{sub:l}=a;return Q(t.uid===l,i,"user-mismatch"),Hi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Dn(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e,n=!1){const r="signIn",i=await jS(t,r,e),s=await Hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wD(t,e){return VS(Tl(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t,e,n){var r;Q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function CD(t,e,n){const r=Tl(t),i=await yD(r,{returnSecureToken:!0,email:e,password:n}),s=await Hi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function TD(t,e,n){return wD(Fe(t),Co.credential(e,n))}async function SD(t,e){const n=Fe(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&ED(n.auth,i,e);const{email:s}=await hD(n.auth,i);s!==t.email&&await t.reload()}function ID(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function kD(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function bD(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function xD(t){return Fe(t).signOut()}const bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(){const t=kt();return Wg(t)||Rh(t)}const RD=1e3,AD=10;class zS extends BS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ND()&&nD(),this.fallbackToPolling=LS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,AD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zS.type="LOCAL";const PD=zS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS extends BS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HS.type="SESSION";const WS=HS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await OD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gg("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}function MD(t){zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function LD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $D(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FD(){return KS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="firebaseLocalStorageDb",UD=1,xc="firebaseLocalStorage",GS="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ph(t,e){return t.transaction([xc],e?"readwrite":"readonly").objectStore(xc)}function jD(){const t=indexedDB.deleteDatabase(qS);return new Il(t).toPromise()}function Vp(){const t=indexedDB.open(qS,UD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xc,{keyPath:GS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xc)?e(r):(r.close(),await jD(),e(await Vp()))})})}async function Aw(t,e,n){const r=Ph(t,!0).put({[GS]:e,value:n});return new Il(r).toPromise()}async function VD(t,e){const n=Ph(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function Pw(t,e){const n=Ph(t,!0).delete(e);return new Il(n).toPromise()}const BD=800,zD=3;class QS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ah._getInstance(FD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LD(),!this.activeServiceWorker)return;this.sender=new DD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$D()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await Aw(e,bc,"1"),await Pw(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Aw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ph(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QS.type="LOCAL";const HD=QS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KD(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WD().appendChild(r)})}function qD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new El(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t,e){return e?er(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QD(t){return VS(t.auth,new Qg(t),t.bypassAuthState)}function YD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),_D(n,new Qg(t),t.bypassAuthState)}async function XD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),vD(n,new Qg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QD;case"linkViaPopup":case"linkViaRedirect":return XD;case"reauthViaPopup":case"reauthViaRedirect":return YD;default:Dn(this.auth,"internal-error")}}resolve(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=new El(2e3,1e4);class Ns extends YS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){dr(this.filter.length===1,"Popup operations only handle one event");const e=Gg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,JD.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD="pendingRedirect",Bu=new Map;class eM extends YS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bu.get(this.auth._key());if(!e){try{const r=await tM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bu.set(this.auth._key(),e)}return this.bypassAuthState||Bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tM(t,e){const n=iM(e),r=rM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nM(t,e){Bu.set(t._key(),e)}function rM(t){return er(t._redirectPersistence)}function iM(t){return Vu(ZD,t.config.apiKey,t.name)}async function sM(t,e,n=!1){const r=Tl(t),i=GD(r,e),o=await new eM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=10*60*1e3;class aM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ow(e))}saveEventToCache(e){this.cachedEventUids.add(Ow(e)),this.lastProcessedEventTime=Date.now()}}function Ow(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e={}){return Eo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hM=/^https?/;async function dM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uM(t);for(const n of e)try{if(fM(n))return}catch{}Dn(t,"unauthorized-domain")}function fM(t){const e=jp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hM.test(n))return!1;if(cM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=new El(3e4,6e4);function Dw(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mM(t){return new Promise((e,n)=>{var r,i,s;function o(){Dw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dw(),n(Bn(t,"network-request-failed"))},timeout:pM.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=qD("iframefcb");return zn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},KD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zu=null,e})}let zu=null;function gM(t){return zu=zu||mM(t),zu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=new El(5e3,15e3),vM="__/auth/iframe",_M="emulator/auth/iframe",wM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CM(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zg(e,_M):`https://${t.config.authDomain}/${vM}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=EM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function TM(t){const e=await gM(t),n=zn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:CM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},yM.get());function l(){zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IM=500,kM=600,bM="_blank",xM="http://localhost";class Mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NM(t,e,n,r=IM,i=kM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=kt().toLowerCase();n&&(a=AS(u)?bM:n),RS(u)&&(e=e||xM,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[m,p])=>`${d}${m}=${p},`,"");if(eD(u)&&a!=="_self")return RM(e||"",a),new Mw(null);const c=window.open(e||"",a,h);Q(c,t,"popup-blocked");try{c.focus()}catch{}return new Mw(c)}function RM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM="__/auth/handler",PM="emulator/auth/handler";function Lw(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof US){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Sl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${OM(t)}?${_o(a).slice(1)}`}function OM({config:t}){return t.emulator?zg(t,PM):`https://${t.authDomain}/${AM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="webStorageSupport";class DM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WS,this._completeRedirectFn=sM,this._overrideRedirectResult=nM}async _openPopup(e,n,r,i){var s;dr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Lw(e,n,r,jp(),i);return NM(e,o,Gg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),MD(Lw(e,n,r,jp(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TM(e),r=new aM(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sf,{type:sf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[sf];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LS()||Wg()||Rh()}}const MM=DM;var $w="@firebase/auth",Fw="0.20.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FM(t){yn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{Q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$S(t)},h=new iD(a,l,u);return $O(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new rn("auth-internal",e=>{const n=Tl(e.getProvider("auth").getImmediate());return(r=>new LM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We($w,Fw,$M(t)),We($w,Fw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=5*60,jM=pS("authIdTokenMaxAge")||UM;let Uw=null;const VM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jM)return;const i=n==null?void 0:n.token;Uw!==i&&(Uw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function BM(t=wS()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LO(t,{popupRedirectResolver:MM,persistence:[HD,PD,WS]}),r=pS("authTokenSyncURL");if(r){const s=VM(r);kD(n,s,()=>s(n.currentUser)),ID(n,o=>s(o))}const i=fS("auth");return i&&sD(n,`http://${i}`),n}FM("Browser");var zM="firebase",HM="9.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We(zM,HM,"app");var WM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Yg=Yg||{},Z=WM||self;function Nc(){}function Oh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KM(t){return Object.prototype.hasOwnProperty.call(t,of)&&t[of]||(t[of]=++qM)}var of="closure_uid_"+(1e9*Math.random()>>>0),qM=0;function GM(t,e,n){return t.call.apply(t.bind,arguments)}function QM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=GM:Tt=QM,Tt.apply(null,arguments)}function gu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ci(){this.s=this.s,this.o=this.o}var YM=0;ci.prototype.s=!1;ci.prototype.na=function(){!this.s&&(this.s=!0,this.M(),YM!=0)&&KM(this)};ci.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const JS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Xg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Oh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var XM=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",Nc,e),Z.removeEventListener("test",Nc,e)}catch{}return t}();function Rc(t){return/^[\s\xa0]*$/.test(t)}var Vw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function af(t,e){return t<e?-1:t>e?1:0}function Dh(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Fn(t){return Dh().indexOf(t)!=-1}function Jg(t){return Jg[" "](t),t}Jg[" "]=Nc;function JM(t){var e=tL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ZM=Fn("Opera"),to=Fn("Trident")||Fn("MSIE"),ZS=Fn("Edge"),Bp=ZS||to,eI=Fn("Gecko")&&!(Dh().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge"))&&!(Fn("Trident")||Fn("MSIE"))&&!Fn("Edge"),eL=Dh().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge");function tI(){var t=Z.document;return t?t.documentMode:void 0}var Ac;e:{var lf="",uf=function(){var t=Dh();if(eI)return/rv:([^\);]+)(\)|;)/.exec(t);if(ZS)return/Edge\/([\d\.]+)/.exec(t);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eL)return/WebKit\/(\S+)/.exec(t);if(ZM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(uf&&(lf=uf?uf[1]:""),to){var cf=tI();if(cf!=null&&cf>parseFloat(lf)){Ac=String(cf);break e}}Ac=lf}var tL={};function nL(){return JM(function(){let t=0;const e=Vw(String(Ac)).split("."),n=Vw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=af(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||af(i[2].length==0,s[2].length==0)||af(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var zp;if(Z.document&&to){var Bw=tI();zp=Bw||parseInt(Ac,10)||void 0}else zp=void 0;var rL=zp;function Ka(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(eI){e:{try{Jg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ka.X.h.call(this)}}mt(Ka,St);var iL={2:"touch",3:"pen",4:"mouse"};Ka.prototype.h=function(){Ka.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bl="closure_listenable_"+(1e6*Math.random()|0),sL=0;function oL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++sL,this.ba=this.ea=!1}function Mh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Zg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nI(t){const e={};for(const n in t)e[n]=t[n];return e}const zw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<zw.length;s++)n=zw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Lh(t){this.src=t,this.g={},this.h=0}Lh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Wp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new oL(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Hp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=JS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Mh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var ey="closure_lm_"+(1e6*Math.random()|0),hf={};function iI(t,e,n,r,i){if(r&&r.once)return oI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)iI(t,e[s],n,r,i);return null}return n=ry(n),t&&t[bl]?t.N(e,n,kl(r)?!!r.capture:!!r,i):sI(t,e,n,!1,r,i)}function sI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=kl(i)?!!i.capture:!!i,a=ny(t);if(a||(t[ey]=a=new Lh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=aL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)XM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(lI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function aL(){function t(n){return e.call(t.src,t.listener,n)}const e=lL;return t}function oI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)oI(t,e[s],n,r,i);return null}return n=ry(n),t&&t[bl]?t.O(e,n,kl(r)?!!r.capture:!!r,i):sI(t,e,n,!0,r,i)}function aI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)aI(t,e[s],n,r,i);else r=kl(r)?!!r.capture:!!r,n=ry(n),t&&t[bl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Wp(s,n,r,i),-1<n&&(Mh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ny(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wp(e,n,r,i)),(n=-1<t?e[t]:null)&&ty(n))}function ty(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[bl])Hp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(lI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ny(e))?(Hp(n,t),n.h==0&&(n.src=null,e[ey]=null)):Mh(t)}}}function lI(t){return t in hf?hf[t]:hf[t]="on"+t}function lL(t,e){if(t.ba)t=!0;else{e=new Ka(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ty(t),t=n.call(r,e)}return t}function ny(t){return t=t[ey],t instanceof Lh?t:null}var df="__closure_events_fn_"+(1e9*Math.random()>>>0);function ry(t){return typeof t=="function"?t:(t[df]||(t[df]=function(e){return t.handleEvent(e)}),t[df])}function at(){ci.call(this),this.i=new Lh(this),this.P=this,this.I=null}mt(at,ci);at.prototype[bl]=!0;at.prototype.removeEventListener=function(t,e,n,r){aI(this,t,e,n,r)};function ft(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(r,t),rI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yu(o,r,!0,e)&&i}if(o=e.g=t,i=yu(o,r,!0,e)&&i,i=yu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yu(o,r,!1,e)&&i}at.prototype.M=function(){if(at.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Mh(n[r]);delete t.g[e],t.h--}}this.I=null};at.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Hp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var iy=Z.JSON.stringify;function uL(){var t=hI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cL{constructor(){this.h=this.g=null}add(e,n){const r=uI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var uI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hL,t=>t.reset());class hL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dL(t){Z.setTimeout(()=>{throw t},0)}function cI(t,e){Kp||fL(),qp||(Kp(),qp=!0),hI.add(t,e)}var Kp;function fL(){var t=Z.Promise.resolve(void 0);Kp=function(){t.then(pL)}}var qp=!1,hI=new cL;function pL(){for(var t;t=uL();){try{t.h.call(t.g)}catch(n){dL(n)}var e=uI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qp=!1}function $h(t,e){at.call(this),this.h=t||1,this.g=e||Z,this.j=Tt(this.lb,this),this.l=Date.now()}mt($h,at);V=$h.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(sy(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sy(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){$h.X.M.call(this),sy(this),delete this.g};function oy(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function dI(t){t.g=oy(()=>{t.g=null,t.i&&(t.i=!1,dI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mL extends ci{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dI(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(t){ci.call(this),this.h=t,this.g={}}mt(qa,ci);var Hw=[];function fI(t,e,n,r){Array.isArray(n)||(n&&(Hw[0]=n.toString()),n=Hw);for(var i=0;i<n.length;i++){var s=iI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function pI(t){Zg(t.g,function(e,n){this.g.hasOwnProperty(n)&&ty(e)},t),t.g={}}qa.prototype.M=function(){qa.X.M.call(this),pI(this)};qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fh(){this.g=!0}Fh.prototype.Aa=function(){this.g=!1};function gL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function yL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Rs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_L(t,n)+(r?" "+r:"")})}function vL(t,e){t.info(function(){return"TIMEOUT: "+e})}Fh.prototype.info=function(){};function _L(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return iy(n)}catch{return e}}var ss={},Ww=null;function Uh(){return Ww=Ww||new at}ss.Pa="serverreachability";function mI(t){St.call(this,ss.Pa,t)}mt(mI,St);function Ga(t){const e=Uh();ft(e,new mI(e))}ss.STAT_EVENT="statevent";function gI(t,e){St.call(this,ss.STAT_EVENT,t),this.stat=e}mt(gI,St);function At(t){const e=Uh();ft(e,new gI(e,t))}ss.Qa="timingevent";function yI(t,e){St.call(this,ss.Qa,t),this.size=e}mt(yI,St);function xl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var jh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},vI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ay(){}ay.prototype.h=null;function Kw(t){return t.h||(t.h=t.i())}function _I(){}var Nl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ly(){St.call(this,"d")}mt(ly,St);function uy(){St.call(this,"c")}mt(uy,St);var Gp;function Vh(){}mt(Vh,ay);Vh.prototype.g=function(){return new XMLHttpRequest};Vh.prototype.i=function(){return{}};Gp=new Vh;function Rl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new qa(this),this.O=wL,t=Bp?125:void 0,this.T=new $h(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new wI}function wI(){this.i=null,this.g="",this.h=!1}var wL=45e3,Qp={},Pc={};V=Rl.prototype;V.setTimeout=function(t){this.O=t};function Yp(t,e,n){t.K=1,t.v=zh(fr(e)),t.s=n,t.P=!0,EI(t,null)}function EI(t,e){t.F=Date.now(),Al(t),t.A=fr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),NI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new wI,t.g=YI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new mL(Tt(t.La,t,t.g),t.N)),fI(t.S,t.g,"readystatechange",t.ib),e=t.H?nI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ga(),gL(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&tr(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const h=tr(this.g);var e=this.g.Ea();const c=this.g.aa();if(!(3>h)&&(h!=3||Bp||this.g&&(this.h.h||this.g.fa()||Yw(this.g)))){this.I||h!=4||e==7||(e==8||0>=c?Ga(3):Ga(2)),Bh(this);var n=this.g.aa();this.Y=n;t:if(CI(this)){var r=Yw(this.g);t="";var i=r.length,s=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ii(this),pa(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yL(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rc(a)){var u=a;break t}}u=null}if(n=u)Rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xp(this,n);else{this.i=!1,this.o=3,At(12),Ii(this),pa(this);break e}}this.P?(TI(this,h,o),Bp&&this.i&&h==3&&(fI(this.S,this.T,"tick",this.hb),this.T.start())):(Rs(this.j,this.m,o,null),Xp(this,o)),h==4&&Ii(this),this.i&&!this.I&&(h==4?KI(this.l,this):(this.i=!1,Al(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,At(12)):(this.o=0,At(13)),Ii(this),pa(this)}}}catch{}finally{}};function CI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function TI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=EL(t,n),i==Pc){e==4&&(t.o=4,At(14),r=!1),Rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Qp){t.o=4,At(15),Rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rs(t.j,t.m,i,null),Xp(t,i);CI(t)&&i!=Pc&&i!=Qp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,At(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),gy(e),e.K=!0,At(11))):(Rs(t.j,t.m,n,"[Invalid Chunked Response]"),Ii(t),pa(t))}V.hb=function(){if(this.g){var t=tr(this.g),e=this.g.fa();this.C<e.length&&(Bh(this),TI(this,t,e),this.i&&t!=4&&Al(this))}};function EL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Pc:(n=Number(e.substring(n,r)),isNaN(n)?Qp:(r+=1,r+n>e.length?Pc:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,Ii(this)};function Al(t){t.V=Date.now()+t.O,SI(t,t.O)}function SI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xl(Tt(t.gb,t),e)}function Bh(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vL(this.j,this.A),this.K!=2&&(Ga(),At(17)),Ii(this),this.o=2,pa(this)):SI(this,this.V-t)};function pa(t){t.l.G==0||t.I||KI(t.l,t)}function Ii(t){Bh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,sy(t.T),pI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jp(n.h,t))){if(!t.J&&Jp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Mc(n),Kh(n);else break e;my(n),At(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=xl(Tt(n.cb,n),6e3));if(1>=PI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ki(n,11)}else if((t.J||n.g==t)&&Mc(n),!Rc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const c=u[4];c!=null&&(n.Ca=c,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const p=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.h;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cy(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Re(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=QI(r,r.H?r.ka:null,r.V),o.J){OI(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Bh(a),Al(a)),r.g=o}else HI(r);0<n.i.length&&qh(n)}else u[0]!="stop"&&u[0]!="close"||ki(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ki(n,7):py(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ga(4)}catch{}}function CL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function II(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TL(t),r=CL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var kI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Oi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Oi){this.h=e!==void 0?e:t.h,Oc(this,t.j),this.s=t.s,this.g=t.g,Dc(this,t.m),this.l=t.l,e=t.i;var n=new Qa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qw(this,n),this.o=t.o}else t&&(n=String(t).match(kI))?(this.h=!!e,Oc(this,n[1]||"",!0),this.s=Zo(n[2]||""),this.g=Zo(n[3]||"",!0),Dc(this,n[4]),this.l=Zo(n[5]||"",!0),qw(this,n[6]||"",!0),this.o=Zo(n[7]||"")):(this.h=!!e,this.i=new Qa(null,this.h))}Oi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ea(e,Gw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ea(e,Gw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ea(n,n.charAt(0)=="/"?bL:kL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ea(n,NL)),t.join("")};function fr(t){return new Oi(t)}function Oc(t,e,n){t.j=n?Zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Dc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qw(t,e,n){e instanceof Qa?(t.i=e,RL(t.i,t.h)):(n||(e=ea(e,xL)),t.i=new Qa(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function zh(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gw=/[#\/\?@]/g,kL=/[#\?:]/g,bL=/[#\?]/g,xL=/[#\?@]/g,NL=/#/g;function Qa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hi(t){t.g||(t.g=new Map,t.h=0,t.i&&SL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Qa.prototype;V.add=function(t,e){hi(this),this.i=null,t=To(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bI(t,e){hi(t),e=To(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xI(t,e){return hi(t),e=To(t,e),t.g.has(e)}V.forEach=function(t,e){hi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.oa=function(){hi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.W=function(t){hi(this);let e=[];if(typeof t=="string")xI(this,t)&&(e=e.concat(this.g.get(To(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return hi(this),this.i=null,t=To(this,t),xI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function NI(t,e,n){bI(t,e),0<n.length&&(t.i=null,t.g.set(To(t,e),Xg(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function To(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RL(t,e){e&&!t.j&&(hi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bI(this,r),NI(this,i,n))},t)),t.j=e}var AL=class{constructor(t,e){this.h=t,this.g=e}};function RI(t){this.l=t||PL,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PL=10;function AI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function PI(t){return t.h?1:t.g?t.g.size:0}function Jp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cy(t,e){t.g?t.g.add(e):t.h=e}function OI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RI.prototype.cancel=function(){if(this.i=DI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xg(t.i)}function hy(){}hy.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};hy.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function OL(){this.g=new hy}function DL(t,e,n){const r=n||"";try{II(t,function(i,s){let o=i;kl(i)&&(o=iy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ML(t,e){const n=new Fh;if(Z.Image){const r=new Image;r.onload=gu(vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gu(vu,n,r,"TestLoadImage: error",!1,e),r.onabort=gu(vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gu(vu,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pl(t){this.l=t.ac||null,this.j=t.jb||!1}mt(Pl,ay);Pl.prototype.g=function(){return new Hh(this.l,this.j)};Pl.prototype.i=function(t){return function(){return t}}({});function Hh(t,e){at.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(Hh,at);var dy=0;V=Hh.prototype;V.open=function(t,e){if(this.readyState!=dy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ya(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ol(this)),this.readyState=dy};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ya(this)),this.g&&(this.readyState=3,Ya(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;MI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function MI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ol(this):Ya(this),this.readyState==3&&MI(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Ol(this))};V.Ua=function(t){this.g&&(this.response=t,Ol(this))};V.ga=function(){this.g&&Ol(this)};function Ol(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ya(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LL=Z.JSON.parse;function Ue(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=LI,this.K=this.L=!1}mt(Ue,at);var LI="",$L=/^https?$/i,FL=["POST","PUT"];V=Ue.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Gp.g(),this.C=this.u?Kw(this.u):Kw(Gp),this.g.onreadystatechange=Tt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Qw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=JS(FL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{UI(this),0<this.B&&((this.K=UL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.qa,this)):this.A=oy(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Qw(this,s)}};function UL(t){return to&&nL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Yg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function Qw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$I(t),Wh(t)}function $I(t){t.D||(t.D=!0,ft(t,"complete"),ft(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Wh(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wh(this,!0)),Ue.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?FI(this):this.fb())};V.fb=function(){FI(this)};function FI(t){if(t.h&&typeof Yg<"u"&&(!t.C[1]||tr(t)!=4||t.aa()!=2)){if(t.v&&tr(t)==4)oy(t.Ha,0,t);else if(ft(t,"readystatechange"),tr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(kI)[1]||null;if(!i&&Z.self&&Z.self.location){var s=Z.self.location.protocol;i=s.substr(0,s.length-1)}r=!$L.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<tr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$I(t)}}finally{Wh(t)}}}}function Wh(t,e){if(t.g){UI(t);const n=t.g,r=t.C[0]?Nc:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function UI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function tr(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LL(e)}};function Yw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case LI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jI(t){let e="";return Zg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function fy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Uo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function VI(t){this.Ca=0,this.i=[],this.j=new Fh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Uo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Uo("baseRetryDelayMs",5e3,t),this.bb=Uo("retryDelaySeedMs",1e4,t),this.$a=Uo("forwardChannelMaxRetries",2,t),this.ta=Uo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new RI(t&&t.concurrentRequestLimit),this.Fa=new OL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=VI.prototype;V.ma=8;V.G=1;function py(t){if(BI(t),t.G==3){var e=t.U++,n=fr(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),Dl(t,n),e=new Rl(t,t.j,e,void 0),e.K=2,e.v=zh(fr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=YI(e.l,null),e.g.da(e.v)),e.F=Date.now(),Al(e)}GI(t)}function Kh(t){t.g&&(gy(t),t.g.cancel(),t.g=null)}function BI(t){Kh(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Mc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function qh(t){AI(t.h)||t.m||(t.m=!0,cI(t.Ja,t),t.C=0)}function jL(t,e){return PI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=xl(Tt(t.Ja,t,e),qI(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Rl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=nI(s),rI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zI(this,i,e),n=fr(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Dl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(jI(s)))+"&"+e:this.o&&fy(n,this.o,s)),cy(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Yp(i,n,null)):Yp(i,n,e),this.G=2}}else this.G==3&&(t?Xw(this,t):this.i.length==0||AI(this.h)||Xw(this))};function Xw(t,e){var n;e?n=e.m:n=t.U++;const r=fr(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),Dl(t,r),t.o&&t.s&&fy(r,t.o,t.s),n=new Rl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),cy(t.h,n),Yp(n,r,e)}function Dl(t,e){t.ia&&Zg(t.ia,function(n,r){Re(e,r,n)}),t.l&&II({},function(n,r){Re(e,r,n)})}function zI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Tt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const h=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{DL(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function HI(t){t.g||t.u||(t.Z=1,cI(t.Ia,t),t.A=0)}function my(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xl(Tt(t.Ia,t),qI(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,WI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xl(Tt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,At(10),Kh(this),WI(this))};function gy(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function WI(t){t.g=new Rl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=fr(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),Dl(t,e),t.o&&t.s&&fy(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zh(fr(e)),n.s=null,n.P=!0,EI(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Kh(this),my(this),At(19))};function Mc(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function KI(t,e){var n=null;if(t.g==e){Mc(t),gy(t),t.g=null;var r=2}else if(Jp(t.h,e))n=e.D,OI(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Uh(),ft(r,new yI(r,n)),qh(t)}else HI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&jL(t,e)||r==2&&my(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ki(t,5);break;case 4:ki(t,10);break;case 3:ki(t,6);break;default:ki(t,2)}}}function qI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ki(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Tt(t.kb,t);n||(n=new Oi("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Oc(n,"https"),zh(n)),ML(n.toString(),r)}else At(2);t.G=0,t.l&&t.l.va(e),GI(t),BI(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function GI(t){if(t.G=0,t.la=[],t.l){const e=DI(t.h);(e.length!=0||t.i.length!=0)&&(jw(t.la,e),jw(t.la,t.i),t.h.i.length=0,Xg(t.i),t.i.length=0),t.l.ua()}}function QI(t,e,n){var r=n instanceof Oi?fr(n):new Oi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Dc(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Oi(null,void 0);r&&Oc(s,r),e&&(s.g=e),i&&Dc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),Dl(t,r),r}function YI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new Pl({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function XI(){}V=XI.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Lc(){if(to&&!(10<=Number(rL)))throw Error("Environmental error: no available transport.")}Lc.prototype.g=function(t,e){return new sn(t,e)};function sn(t,e){at.call(this),this.g=new VI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Rc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new So(this)}mt(sn,at);sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;At(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=QI(t,null,t.V),qh(t)};sn.prototype.close=function(){py(this.g)};sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=iy(t),t=n);e.i.push(new AL(e.ab++,t)),e.G==3&&qh(e)};sn.prototype.M=function(){this.g.l=null,delete this.j,py(this.g),delete this.g,sn.X.M.call(this)};function JI(t){ly.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(JI,ly);function ZI(){uy.call(this),this.status=1}mt(ZI,uy);function So(t){this.g=t}mt(So,XI);So.prototype.xa=function(){ft(this.g,"a")};So.prototype.wa=function(t){ft(this.g,new JI(t))};So.prototype.va=function(t){ft(this.g,new ZI)};So.prototype.ua=function(){ft(this.g,"b")};Lc.prototype.createWebChannel=Lc.prototype.g;sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;jh.NO_ERROR=0;jh.TIMEOUT=8;jh.HTTP_ERROR=6;vI.COMPLETE="complete";_I.EventType=Nl;Nl.OPEN="a";Nl.CLOSE="b";Nl.ERROR="c";Nl.MESSAGE="d";at.prototype.listen=at.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var VL=function(){return new Lc},BL=function(){return Uh()},ff=jh,zL=vI,HL=ss,Jw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},WL=Pl,_u=_I,KL=Ue;const Zw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io="9.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new _l("@firebase/firestore");function e0(){return Wi.logLevel}function z(t,...e){if(Wi.logLevel<=fe.DEBUG){const n=e.map(yy);Wi.debug(`Firestore (${Io}): ${t}`,...n)}}function pr(t,...e){if(Wi.logLevel<=fe.ERROR){const n=e.map(yy);Wi.error(`Firestore (${Io}): ${t}`,...n)}}function Zp(t,...e){if(Wi.logLevel<=fe.WARN){const n=e.map(yy);Wi.warn(`Firestore (${Io}): ${t}`,...n)}}function yy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function Se(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class GL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QL{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Di;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Di,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Di)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new e1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new vt(e)}}class YL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class XL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new YL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new JL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=e$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Je(0,0))}static max(){return new ie(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Xa{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const t$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Xa{construct(e,n,r){return new Ct(e,n,r)}static isValidIdentifier(e){return t$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(n)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function n$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new ti(i,q.empty(),e)}function r$(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(ie.min(),q.empty(),-1)}static max(){return new ti(ie.max(),q.empty(),-1)}}function i$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==s$)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function n1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vy.at=-1;class et{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ut.RED,this.left=i!=null?i:ut.EMPTY,this.right=s!=null?s:ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ut(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n0(this.data.getIterator())}getIteratorFrom(e){return new n0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class n0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Ze(Ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new bt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const a$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(Se(!!t),typeof t=="string"){let e=0;const n=a$.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ro(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function i1(t){const e=t.mapValue.fields.__previous_value__;return r1(e)?i1(e):e}function Ja(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l${constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}function Gh(t){return t==null}function $c(t){return t===0&&1/t==-1/0}function u$(t){return typeof t=="number"&&Number.isInteger(t)&&!$c(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r1(t)?4:c$(t)?9007199254740991:10:ee()}function Kn(t,e){if(t===e)return!0;const n=Ki(t);if(n!==Ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ja(t).isEqual(Ja(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ni(r.timestampValue),o=ni(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ro(r.bytesValue).isEqual(ro(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?$c(s)===$c(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(t0(s)!==t0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Kn(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function el(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=Ki(t),r=Ki(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return r0(t.timestampValue,e.timestampValue);case 4:return r0(Ja(t),Ja(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ro(i),a=ro(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ve(o[l],a[l]);if(u!==0)return u}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ve(ze(i.latitude),ze(s.latitude));return o!==0?o:ve(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=io(o[l],a[l]);if(u)return u}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Eu.mapValue&&s===Eu.mapValue)return 0;if(i===Eu.mapValue)return 1;if(s===Eu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const c=ve(a[h],u[h]);if(c!==0)return c;const d=io(o[a[h]],l[u[h]]);if(d!==0)return d}return ve(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function r0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=ni(t),r=ni(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function Bs(t){return em(t)}function em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ni(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ro(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=em(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${em(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function tm(t){return!!t&&"integerValue"in t}function _y(t){return!!t&&"arrayValue"in t}function i0(t){return!!t&&"nullValue"in t}function s0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hu(t){return!!t&&"mapValue"in t}function ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function c$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=Ct.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){os(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(ma(this.value))}}function s1(t){const e=[];return os(t.fields,(n,r)=>{const i=new Ct([n]);if(Hu(r)){const s=s1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ht(e,0,ie.min(),ie.min(),$t.empty(),0)}static newFoundDocument(e,n,r){return new ht(e,1,n,ie.min(),r,0)}static newNoDocument(e,n){return new ht(e,2,n,ie.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,ie.min(),$t.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function o0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new h$(t,e,n,r,i,s,o)}function wy(t){const e=ne(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Bs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.ht=n}return e.ht}function d$(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Bs(r.value)}`;var r}).join(", ")}]`),Gh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Bs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Bs(n)).join(",")),`Target(${e})`}function Ey(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!w$(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Kn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l0(t.startAt,e.startAt)&&l0(t.endAt,e.endAt)}function nm(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class jt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new f$(e,n,r):n==="array-contains"?new g$(e,r):n==="in"?new y$(e,r):n==="not-in"?new v$(e,r):n==="array-contains-any"?new _$(e,r):new jt(e,n,r)}static lt(e,n,r){return n==="in"?new p$(e,r):new m$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(io(n,this.value)):n!==null&&Ki(this.value)===Ki(n)&&this.ft(io(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class f$ extends jt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.ft(n)}}class p$ extends jt{constructor(e,n){super(e,"in",n),this.keys=o1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class m$ extends jt{constructor(e,n){super(e,"not-in",n),this.keys=o1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function o1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class g$ extends jt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _y(n)&&el(n.arrayValue,this.value)}}class y$ extends jt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class v$ extends jt{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!el(this.value.arrayValue,n)}}class _$ extends jt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_y(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}class Fc{constructor(e,n){this.position=e,this.inclusive=n}}class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function w$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function a0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function E$(t,e,n,r,i,s,o,a){return new Qh(t,e,n,r,i,s,o,a)}function Cy(t){return new Qh(t)}function u0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function C$(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function T$(t){for(const e of t.filters)if(e.dt())return e.field;return null}function S$(t){return t.collectionGroup!==null}function tl(t){const e=ne(t);if(e._t===null){e._t=[];const n=T$(e),r=C$(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ga(n)),e._t.push(new ga(Ct.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ga(Ct.keyField(),s))}}}return e._t}function mr(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=o0(e.path,e.collectionGroup,tl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of tl(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ga(s.field,o))}const r=e.endAt?new Fc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Fc(e.startAt.position,e.startAt.inclusive):null;e.wt=o0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function rm(t,e,n){return new Qh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yh(t,e){return Ey(mr(t),mr(e))&&t.limitType===e.limitType}function a1(t){return`${wy(mr(t))}|lt:${t.limitType}`}function im(t){return`Query(target=${d$(mr(t))}; limitType=${t.limitType})`}function Ty(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=a0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,tl(n),r)||n.endAt&&!function(i,s,o){const a=a0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,tl(n),r))}(t,e)}function I$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function l1(t){return(e,n)=>{let r=!1;for(const i of tl(t)){const s=k$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function k$(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?io(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function c1(t){return{integerValue:""+t}}function b$(t,e){return u$(e)?c1(e):u1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this._=void 0}}function x$(t,e,n){return t instanceof Uc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof nl?d1(t,e):t instanceof rl?f1(t,e):function(r,i){const s=h1(r,i),o=c0(s)+c0(r.yt);return tm(s)&&tm(r.yt)?c1(o):u1(r.It,o)}(t,e)}function N$(t,e,n){return t instanceof nl?d1(t,e):t instanceof rl?f1(t,e):n}function h1(t,e){return t instanceof jc?tm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Uc extends Xh{}class nl extends Xh{constructor(e){super(),this.elements=e}}function d1(t,e){const n=p1(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class rl extends Xh{constructor(e){super(),this.elements=e}}function f1(t,e){let n=p1(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class jc extends Xh{constructor(e,n){super(),this.It=e,this.yt=n}}function c0(t){return ze(t.integerValue||t.doubleValue)}function p1(t){return _y(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function R$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof nl&&r instanceof nl||n instanceof rl&&r instanceof rl?no(n.elements,r.elements,Kn):n instanceof jc&&r instanceof jc?Kn(n.yt,r.yt):n instanceof Uc&&r instanceof Uc}(t.transform,e.transform)}class A${constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jh{}function m1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sy(t.key,pn.none()):new $l(t.key,t.data,pn.none());{const n=t.data,r=$t.empty();let i=new Ze(Ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new fn(i.toArray()),pn.none())}}function P$(t,e,n){t instanceof $l?function(r,i,s){const o=r.value.clone(),a=d0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof di?function(r,i,s){if(!Wu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=d0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(g1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ya(t,e,n,r){return t instanceof $l?function(i,s,o,a){if(!Wu(i.precondition,s))return o;const l=i.value.clone(),u=f0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(i,s,o,a){if(!Wu(i.precondition,s))return o;const l=f0(i.fieldTransforms,a,s),u=s.data;return u.setAll(g1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,o){return Wu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function O$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=h1(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function h0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&no(n,r,(i,s)=>R$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $l extends Jh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends Jh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function g1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function d0(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,N$(o,a,n[i]))}return r}function f0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,x$(s,o,e))}return r}class Sy extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class D$ extends Jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,de;function L$(t){switch(t){default:return ee();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function y1(t){if(t===void 0)return pr("GRPC error has no .code"),R.UNKNOWN;switch(t){case Be.OK:return R.OK;case Be.CANCELLED:return R.CANCELLED;case Be.UNKNOWN:return R.UNKNOWN;case Be.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Be.INTERNAL:return R.INTERNAL;case Be.UNAVAILABLE:return R.UNAVAILABLE;case Be.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Be.NOT_FOUND:return R.NOT_FOUND;case Be.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Be.ABORTED:return R.ABORTED;case Be.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Be.DATA_LOSS:return R.DATA_LOSS;default:return ee()}}(de=Be||(Be={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return n1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $$=new et(q.comparator);function gr(){return $$}const v1=new et(q.comparator);function ta(...t){let e=v1;for(const n of t)e=e.insert(n.key,n);return e}function _1(t){let e=v1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return va()}function w1(){return va()}function va(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const F$=new et(q.comparator),U$=new Ze(q.comparator);function ue(...t){let e=U$;for(const n of t)e=e.add(n);return e}const j$=new Ze(ve);function E1(){return j$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zh(ie.min(),i,E1(),gr(),ue())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class C1{constructor(e,n){this.targetId=e,this.At=n}}class T1{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class p0{constructor(){this.Rt=0,this.bt=g0(),this.Pt=bt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ue(),n=ue(),r=ue();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Fl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=g0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class V${constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=gr(),this.qt=m0(),this.Kt=new Ze(ve)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(nm(s))if(r===0){const o=new q(s.path);this.jt(n,o,ht.newNoDocument(o,ie.min()))}else Se(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&nm(a.target)){const l=new q(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,ht.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ue();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Zh(e,n,this.Kt,this.Ut,r);return this.Ut=gr(),this.qt=m0(),this.Kt=new Ze(ve),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new p0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ze(ve),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new p0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function m0(){return new et(q.comparator)}function g0(){return new et(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),z$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class H${constructor(e,n){this.databaseId=e,this.gt=n}}function Vc(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S1(t,e){return t.gt?e.toBase64():e.toUint8Array()}function W$(t,e){return Vc(t,e.toTimestamp())}function ir(t){return Se(!!t),ie.fromTimestamp(function(e){const n=ni(e);return new Je(n.seconds,n.nanos)}(t))}function Iy(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function I1(t){const e=Ae.fromString(t);return Se(x1(e)),e}function sm(t,e){return Iy(t.databaseId,e.path)}function pf(t,e){const n=I1(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(k1(n))}function om(t,e){return Iy(t.databaseId,e)}function K$(t){const e=I1(t);return e.length===4?Ae.emptyPath():k1(e)}function am(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k1(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function y0(t,e,n){return{name:sm(t,e),fields:n.value.mapValue.fields}}function q$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Se(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:y1(l.code);return new Y(u,l.message||"")}(o);n=new T1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pf(t,r.document.name),s=ir(r.document.updateTime),o=new $t({mapValue:{fields:r.document.fields}}),a=ht.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ku(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pf(t,r.document),s=r.readTime?ir(r.readTime):ie.min(),o=ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ku([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pf(t,r.document),s=r.removedTargetIds||[];n=new Ku([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new M$(i),o=r.targetId;n=new C1(o,s)}}return n}function G$(t,e){let n;if(e instanceof $l)n={update:y0(t,e.key,e.value)};else if(e instanceof Sy)n={delete:sm(t,e.key)};else if(e instanceof di)n={update:y0(t,e.key,e.data),updateMask:iF(e.fieldMask)};else{if(!(e instanceof D$))return ee();n={verify:sm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Uc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof nl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof jc)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:W$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function Q$(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ir(r.updateTime):ir(i);return s.isEqual(ie.min())&&(s=ir(i)),new A$(s,r.transformResults||[])}(n,e))):[]}function Y$(t,e){return{documents:[om(t,e.path)]}}function X$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=om(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=om(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(h=>function(c){if(c.op==="=="){if(s0(c.value))return{unaryFilter:{field:ds(c.field),op:"IS_NAN"}};if(i0(c.value))return{unaryFilter:{field:ds(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(s0(c.value))return{unaryFilter:{field:ds(c.field),op:"IS_NOT_NAN"}};if(i0(c.value))return{unaryFilter:{field:ds(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(c.field),op:tF(c.op),value:c.value}}}(h));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:ds(h.field),direction:eF(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Gh(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function J$(t){let e=K$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=b1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(c){return new ga(As(c.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(h)));let a=null;n.limit&&(a=function(h){let c;return c=typeof h=="object"?h.value:h,Gh(c)?null:c}(n.limit));let l=null;n.startAt&&(l=function(h){const c=!!h.before,d=h.values||[];return new Fc(d,c)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const c=!h.before,d=h.values||[];return new Fc(d,c)}(n.endAt)),E$(e,i,o,s,a,"F",l,u)}function Z$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function b1(t){return t?t.unaryFilter!==void 0?[rF(t)]:t.fieldFilter!==void 0?[nF(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>b1(e)).reduce((e,n)=>e.concat(n)):ee():[]}function eF(t){return B$[t]}function tF(t){return z$[t]}function ds(t){return{fieldPath:t.canonicalString()}}function As(t){return Ct.fromServerFormat(t.fieldPath)}function nF(t){return jt.create(As(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function rF(t){switch(t.unaryFilter.op){case"IS_NAN":const e=As(t.unaryFilter.field);return jt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=As(t.unaryFilter.field);return jt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=As(t.unaryFilter.field);return jt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=As(t.unaryFilter.field);return jt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function iF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&P$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=w1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=m1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>h0(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>h0(n,r))}}class ky{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=F$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ky(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=bt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e){this.re=e}}function lF(t){const e=J$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(){this.Ye=new cF}addToCollectionParentIndex(e,n){return this.Ye.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(ti.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class cF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new so(0)}static vn(){return new so(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ya(r.mutation,i,fn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ta();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=gr();const o=va(),a=va();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof di)?s=s.insert(u.key,u):h!==void 0&&(o.set(u.key,h.mutation.getFieldMask()),ya(h.mutation,u,h.mutation.getFieldMask(),Je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var c;return a.set(u,new dF(h,(c=o.get(u))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let i=new et((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||fn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const c=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,c=w1();h.forEach(d=>{if(!s.has(d)){const m=m1(n.get(d),r.get(d));m!==null&&c.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,c))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):S$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(bi());let a=-1,l=s;return o.next(u=>x.forEach(u,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?x.resolve():this.getBaseDocument(e,h,c).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(h=>({batchId:a,changes:_1(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ta();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,h){return new Qh(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((h,c)=>{s=s.insert(h,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,ht.newInvalidDocument(u)))});let o=ta();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ya(u.mutation,l,fn.empty(),Je.now()),Ty(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(ht.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:ir(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:lF(r.bundledQuery),readTime:ir(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(){this.overlays=new et(q.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new et((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=bi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return x.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oF(n,r));let s=this.es.get(n);s===void 0&&(s=ue(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.ns=new Ze(nt.ss),this.rs=new Ze(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new nt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new q(new Ae([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ae([])),r=new nt(n,e),i=new nt(n,e+1);let s=ue();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||ve(e._s,n._s)}static os(e,n){return ve(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ze(nt.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ve);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),x.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new nt(new q(s),0);let a=new Ze(ve);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return x.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new nt(n,0),i=this.gs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e){this.Es=e,this.docs=new et(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=gr();const s=new q(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||i$(r$(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ee()}As(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vF(this)}getSize(e){return x.resolve(this.size)}}class vF extends hF{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e){this.persistence=e,this.Rs=new ko(n=>wy(n),Ey),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.bs=0,this.Ps=new by,this.targetCount=0,this.vs=so.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new so(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new vy(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new _F(this),this.indexManager=new uF,this.remoteDocumentCache=function(r){return new yF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new aF(n),this.Ns=new pF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new gF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new EF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return x.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class EF extends o${constructor(e){super(),this.currentSequenceNumber=e}}class xy{constructor(e){this.persistence=e,this.Fs=new by,this.$s=null}static Bs(e){return new xy(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,r=>{const i=q.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ny(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(u0(n))return x.resolve(null);let r=mr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rm(n,null,"F"),r=mr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,rm(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return u0(n)||i.isEqual(ie.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(e0()<=fe.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),im(n)),this.Bi(e,o,n,n$(i,-1)))})}Fi(e,n){let r=new Ze(l1(e));return n.forEach((i,s)=>{Ty(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return e0()<=fe.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",im(n)),this.Ni.getDocumentsMatchingQuery(e,n,ti.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new et(ve),this.qi=new ko(s=>wy(s),Ey),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fF(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function SF(t,e,n,r){return new TF(t,e,n,r)}async function N1(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function IF(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,c=h.keys();let d=x.resolve();return c.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(p=>{const v=l.docVersions.get(m);Se(v!==null),p.version.compareTo(v)<0&&(h.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),u.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function R1(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function kF(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((h,c)=>{const d=i.get(c);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,h.removedDocuments,c).next(()=>n.Cs.addMatchingKeys(s,h.addedDocuments,c)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?m=m.withResumeToken(bt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),i=i.insert(c,m),function(p,v,T){return p.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,m,h)&&a.push(n.Cs.updateTargetData(s,m))});let l=gr(),u=ue();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(bF(s,o,e.documentUpdates).next(h=>{l=h.Wi,u=h.zi})),!r.isEqual(ie.min())){const h=n.Cs.getLastRemoteSnapshotVersion(s).next(c=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function bF(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=gr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function xF(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NF(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Mi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function lm(t,e,n){const r=ne(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ll(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function v0(t,e,n){const r=ne(t);let i=ie.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=ne(a),c=h.qi.get(u);return c!==void 0?x.resolve(h.Ui.get(c)):h.Cs.getTargetData(l,u)}(r,o,mr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:ue())).next(a=>(RF(r,I$(e),a),{documents:a,Hi:s})))}function RF(t,e,n){let r=t.Ki.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class _0{constructor(){this.activeTargetIds=E1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AF{constructor(){this.Lr=new _0,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new _0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);z("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(z("RestConnection","Received: ",l),l),l=>{throw Zp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Io,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=OF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new KL;a.setWithCredentials(!0),a.listenOnce(zL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ff.NO_ERROR:const u=a.getResponseJson();z("Connection","XHR received:",JSON.stringify(u)),s(u);break;case ff.TIMEOUT:z("Connection",'RPC "'+e+'" timed out'),o(new Y(R.DEADLINE_EXCEEDED,"Request time out"));break;case ff.HTTP_ERROR:const h=a.getStatus();if(z("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){const c=a.getResponseJson().error;if(c&&c.status&&c.message){const d=function(m){const p=m.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(p)>=0?p:R.UNKNOWN}(c.status);o(new Y(d,c.message))}else o(new Y(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Y(R.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=VL(),o=BL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new WL({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");z("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let h=!1,c=!1;const d=new DF({Hr:p=>{c?z("Connection","Not sending because WebChannel is closed:",p):(h||(z("Connection","Opening WebChannel transport."),u.open(),h=!0),z("Connection","WebChannel sending:",p),u.send(p))},Jr:()=>u.close()}),m=(p,v,T)=>{p.listen(v,g=>{try{T(g)}catch(y){setTimeout(()=>{throw y},0)}})};return m(u,_u.EventType.OPEN,()=>{c||z("Connection","WebChannel transport opened.")}),m(u,_u.EventType.CLOSE,()=>{c||(c=!0,z("Connection","WebChannel transport closed"),d.io())}),m(u,_u.EventType.ERROR,p=>{c||(c=!0,Zp("Connection","WebChannel transport errored:",p),d.io(new Y(R.UNAVAILABLE,"The operation could not be completed")))}),m(u,_u.EventType.MESSAGE,p=>{var v;if(!c){const T=p.data[0];Se(!!T);const g=T,y=g.error||((v=g[0])===null||v===void 0?void 0:v.error);if(y){z("Connection","WebChannel received error:",y);const _=y.status;let C=function(N){const A=Be[N];if(A!==void 0)return y1(A)}(_),I=y.message;C===void 0&&(C=R.INTERNAL,I="Unknown error status: "+_+" with message "+y.message),c=!0,d.io(new Y(C,I)),u.close()}else z("Connection","WebChannel received:",T),d.ro(T)}}),m(o,HL.STAT_EVENT,p=>{p.stat===Jw.PROXY?z("Connection","Detected buffering proxy"):p.stat===Jw.NOPROXY&&z("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function mf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){return new H$(t,!0)}class A1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new A1(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new Y(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LF extends P1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=q$(this.It,e),r=function(i){if(!("targetChange"in i))return ie.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?ir(s.readTime):ie.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=am(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=nm(a)?{documents:Y$(i,a)}:{query:X$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=S1(i,s.resumeToken):s.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=Vc(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=Z$(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=am(this.It),n.removeTarget=e,this.Lo(n)}}class $F extends P1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Q$(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.tu(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=am(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>G$(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new Y(R.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(R.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(R.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class UF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(pr(n),this.uu=!1):z("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{as(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l.wu.add(4),await Ul(l),l.yu.set("Unknown"),l.wu.delete(4),await td(l)}(this))})}),this.yu=new UF(r,i)}}async function td(t){if(as(t))for(const e of t.mu)await e(!0)}async function Ul(t){for(const e of t.mu)await e(!1)}function O1(t,e){const n=ne(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Py(n)?Ay(n):bo(n).Oo()&&Ry(n,e))}function D1(t,e){const n=ne(t),r=bo(n);n._u.delete(e),r.Oo()&&M1(n,e),n._u.size===0&&(r.Oo()?r.$o():as(n)&&n.yu.set("Unknown"))}function Ry(t,e){t.pu.Mt(e.targetId),bo(t).Ho(e)}function M1(t,e){t.pu.Mt(e),bo(t).Jo(e)}function Ay(t){t.pu=new V$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),bo(t).start(),t.yu.cu()}function Py(t){return as(t)&&!bo(t).ko()&&t._u.size>0}function as(t){return ne(t).wu.size===0}function L1(t){t.pu=void 0}async function VF(t){t._u.forEach((e,n)=>{Ry(t,e)})}async function BF(t,e){L1(t),Py(t)?(t.yu.lu(e),Ay(t)):t.yu.set("Unknown")}async function zF(t,e,n){if(t.yu.set("Online"),e instanceof T1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bc(t,r)}else if(e instanceof Ku?t.pu.Gt(e):e instanceof C1?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(ie.min()))try{const r=await R1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(bt.EMPTY_BYTE_STRING,l.snapshotVersion)),M1(i,a);const u=new Mi(l.target,a,1,l.sequenceNumber);Ry(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Bc(t,r)}}async function Bc(t,e,n){if(!Ll(e))throw e;t.wu.add(1),await Ul(t),t.yu.set("Offline"),n||(n=()=>R1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await td(t)})}function $1(t,e){return e().catch(n=>Bc(t,n,e))}async function nd(t){const e=ne(t),n=ri(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;HF(e);)try{const i=await xF(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,WF(e,i)}catch(i){await Bc(e,i)}F1(e)&&U1(e)}function HF(t){return as(t)&&t.du.length<10}function WF(t,e){t.du.push(e);const n=ri(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function F1(t){return as(t)&&!ri(t).ko()&&t.du.length>0}function U1(t){ri(t).start()}async function KF(t){ri(t).nu()}async function qF(t){const e=ri(t);for(const n of t.du)e.Zo(n.mutations)}async function GF(t,e,n){const r=t.du.shift(),i=ky.from(r,e,n);await $1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nd(t)}async function QF(t,e){e&&ri(t).Xo&&await async function(n,r){if(i=r.code,L$(i)&&i!==R.ABORTED){const s=n.du.shift();ri(n).Fo(),await $1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await nd(n)}var i}(t,e),F1(t)&&U1(t)}async function E0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=as(n);n.wu.add(3),await Ul(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await td(n)}async function YF(t,e){const n=ne(t);e?(n.wu.delete(2),await td(n)):e||(n.wu.add(2),await Ul(n),n.yu.set("Unknown"))}function bo(t){return t.Iu||(t.Iu=function(e,n,r){const i=ne(e);return i.iu(),new LF(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:VF.bind(null,t),Zr:BF.bind(null,t),zo:zF.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Py(t)?Ay(t):t.yu.set("Unknown")):(await t.Iu.stop(),L1(t))})),t.Iu}function ri(t){return t.Tu||(t.Tu=function(e,n,r){const i=ne(e);return i.iu(),new $F(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:KF.bind(null,t),Zr:QF.bind(null,t),eu:qF.bind(null,t),tu:GF.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await nd(t)):(await t.Tu.stop(),t.du.length>0&&(z("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Oy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dy(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Ll(t))return new Y(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ta(),this.sortedSet=new et(this.comparator)}static emptySet(e){return new zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.Eu=new et(q.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):ee():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,zs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(){this.Ru=void 0,this.listeners=[]}}class JF{constructor(){this.queries=new ko(e=>a1(e),Yh),this.onlineState="Unknown",this.bu=new Set}}async function ZF(t,e){const n=ne(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new XF),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Dy(o,`Initialization of query '${im(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&My(n)}async function eU(t,e){const n=ne(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function tU(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&My(n)}function nU(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function My(t){t.bu.forEach(e=>{e.next()})}class rU{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.key=e}}class V1{constructor(e){this.key=e}}class iU{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ue(),this.mutatedKeys=ue(),this.Gu=l1(e),this.Qu=new zs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new C0,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,c)=>{const d=i.get(h),m=Ty(this.query,c)?c:null,p=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?p!==v&&(r.track({type:3,doc:m}),T=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=v?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,h)=>function(c,d){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return m(c)-m(d)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new oo(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new C0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ue(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new V1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new j1(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ue();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return oo.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class sU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class oU{constructor(e){this.key=e,this.nc=!1}}class aU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ko(a=>a1(a),Yh),this.rc=new Map,this.oc=new Set,this.uc=new et(q.comparator),this.cc=new Map,this.ac=new by,this.hc={},this.lc=new Map,this.fc=so.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function lU(t,e){const n=vU(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await NF(n.localStore,mr(e));n.isPrimaryClient&&O1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await uU(n,e,r,a==="current",o.resumeToken)}return i}async function uU(t,e,n,r,i){t._c=(c,d,m)=>async function(p,v,T,g){let y=v.view.Wu(T);y.$i&&(y=await v0(p.localStore,v.query,!1).then(({documents:I})=>v.view.Wu(I,y)));const _=g&&g.targetChanges.get(v.targetId),C=v.view.applyChanges(y,p.isPrimaryClient,_);return S0(p,v.targetId,C.Xu),C.snapshot}(t,c,d,m);const s=await v0(t.localStore,e,!0),o=new iU(e,s.Hi),a=o.Wu(s.documents),l=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);S0(t,n,u.Xu);const h=new sU(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function cU(t,e){const n=ne(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Yh(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),D1(n.remoteStore,r.targetId),um(n,r.targetId)}).catch(Ml)):(um(n,r.targetId),await lm(n.localStore,r.targetId,!0))}async function hU(t,e,n){const r=_U(t);try{const i=await function(s,o){const a=ne(s),l=Je.now(),u=o.reduce((d,m)=>d.add(m.key),ue());let h,c;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=gr(),p=ue();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((T,g)=>{g.isValidDocument()||(p=p.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{h=v;const T=[];for(const g of o){const y=O$(g,h.get(g.key).overlayedDocument);y!=null&&T.push(new di(g.key,y,s1(y.value.mapValue),pn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,T,o)}).next(v=>{c=v;const T=v.applyToLocalDocumentSet(h,p);return a.documentOverlayCache.saveOverlays(d,v.batchId,T)})}).then(()=>({batchId:c.batchId,changes:_1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new et(ve)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await jl(r,i.changes),await nd(r.remoteStore)}catch(i){const s=Dy(i,"Failed to persist write");n.reject(s)}}async function B1(t,e){const n=ne(t);try{const r=await kF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Se(o.nc):i.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await jl(n,r,e)}catch(r){await Ml(r)}}function T0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ne(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const c of h.listeners)c.Pu(o)&&(l=!0)}),l&&My(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dU(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new et(q.comparator);o=o.insert(s,ht.newNoDocument(s,ie.min()));const a=ue().add(s),l=new Zh(ie.min(),new Map,new Ze(ve),o,a);await B1(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Ly(r)}else await lm(r.localStore,e,!1).then(()=>um(r,e,n)).catch(Ml)}async function fU(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await IF(n.localStore,e);H1(n,r,null),z1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,i)}catch(i){await Ml(i)}}async function pU(t,e,n){const r=ne(t);try{const i=await function(s,o){const a=ne(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(Se(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);H1(r,e,n),z1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,i)}catch(i){await Ml(i)}}function z1(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function H1(t,e,n){const r=ne(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function um(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||W1(t,r)})}function W1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(D1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ly(t))}function S0(t,e,n){for(const r of n)r instanceof j1?(t.ac.addReference(r.key,e),mU(t,r)):r instanceof V1?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||W1(t,r.key)):ee()}function mU(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(z("SyncEngine","New document in limbo: "+n),t.oc.add(r),Ly(t))}function Ly(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ae.fromString(e)),r=t.fc.next();t.cc.set(r,new oU(n)),t.uc=t.uc.insert(n,r),O1(t.remoteStore,new Mi(mr(Cy(n.path)),r,2,vy.at))}}async function jl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Ny.Ci(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=ne(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>x.forEach(l,c=>x.forEach(c.Si,d=>u.persistence.referenceDelegate.addReference(h,c.targetId,d)).next(()=>x.forEach(c.Di,d=>u.persistence.referenceDelegate.removeReference(h,c.targetId,d)))))}catch(h){if(!Ll(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const c=h.targetId;if(!h.fromCache){const d=u.Ui.get(c),m=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(c,p)}}}(r.localStore,s))}async function gU(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await N1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new Y(R.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.ji)}}function yU(t,e){const n=ne(t),r=n.cc.get(e);if(r&&r.nc)return ue().add(r.key);{let i=ue();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function vU(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=B1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dU.bind(null,e),e.sc.zo=tU.bind(null,e.eventManager),e.sc.wc=nU.bind(null,e.eventManager),e}function _U(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pU.bind(null,e),e}class wU{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ed(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return SF(this.persistence,new CF,e.initialUser,this.It)}yc(e){return new wF(xy.Bs,this.It)}gc(e){return new AF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class EU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gU.bind(null,this.syncEngine),await YF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new JF}createDatastore(e){const n=ed(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new MF(i));var i;return function(s,o,a,l){return new FF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>T0(this.syncEngine,a,0),o=w0.C()?new w0:new PF,new jF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const h=new aU(r,i,s,o,a,l);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);z("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ul(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t,e,n){if(!n)throw new Y(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CU(t,e,n,r){if(e===!0&&r===!0)throw new Y(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function I0(t){if(!q.isDocumentKey(t))throw new Y(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k0(t){if(q.isDocumentKey(t))throw new Y(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $y(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$y(t);throw new Y(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;class x0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,CU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new x0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new x0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qL;switch(n.type){case"gapi":const r=n.client;return new XL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Y(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=b0.get(e);n&&(z("ComponentProvider","Removing Datastore"),b0.delete(e),n.terminate())}(this),Promise.resolve()}}function TU(t,e,n,r={}){var i;const s=(t=Hn(t,rd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Zp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=vt.MOCK_USER;else{o=fP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Y(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new vt(l)}t._authCredentials=new GL(new e1(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class id{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new id(this.firestore,e,this._query)}}class Xr extends id{constructor(e,n,r){super(e,n,Cy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new q(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function Yt(t,e,...n){if(t=Fe(t),K1("collection","path",e),t instanceof rd){const r=Ae.fromString(e,...n);return k0(r),new Xr(t,null,r)}{if(!(t instanceof Kt||t instanceof Xr))throw new Y(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return k0(r),new Xr(t.firestore,null,r)}}function yi(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=t1.R()),K1("doc","path",e),t instanceof rd){const r=Ae.fromString(e,...n);return I0(r),new Kt(t,null,new q(r))}{if(!(t instanceof Kt||t instanceof Xr))throw new Y(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return I0(r),new Kt(t.firestore,t instanceof Xr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=t1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Dy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kU(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await N1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function bU(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xU(t);z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>E0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>E0(e.remoteStore,s)),t.onlineComponents=e}async function xU(t){return t.offlineComponents||(z("FirestoreClient","Using default OfflineComponentProvider"),await kU(t,new wU)),t.offlineComponents}async function q1(t){return t.onlineComponents||(z("FirestoreClient","Using default OnlineComponentProvider"),await bU(t,new EU)),t.onlineComponents}function NU(t){return q1(t).then(e=>e.syncEngine)}async function N0(t){const e=await q1(t),n=e.eventManager;return n.onListen=lU.bind(null,e.syncEngine),n.onUnlisten=cU.bind(null,e.syncEngine),n}class RU{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new A1(this,"async_queue_retry"),this.Wc=()=>{const n=mf();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=mf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=mf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Di;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Ll(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Oy.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function R0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qi extends rd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new RU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Q1(this),this._firestoreClient.terminate()}}function AU(t,e){const n=typeof t=="object"?t:wS(),r=typeof t=="string"?t:e||"(default)",i=wl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hP("firestore");s&&TU(i,...s)}return i}function G1(t){return t._firestoreClient||Q1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Q1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new l$(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new IU(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(bt.fromBase64String(e))}catch(n){throw new Y(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ao(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PU=/^__.*__$/;class OU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new $l(e,this.data,n,this.fieldTransforms)}}class Y1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function X1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class jy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new jy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return zc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(X1(this.sa)&&PU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class DU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||ed(e)}da(e,n,r,i=!1){return new jy({sa:e,methodName:n,fa:r,path:Ct.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Vy(t){const e=t._freezeSettings(),n=ed(t._databaseId);return new DU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J1(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);By("Data must be an object, but it was:",o,r);const a=Z1(r,o);let l,u;if(s.merge)l=new fn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const c of s.mergeFields){const d=cm(e,c,n);if(!o.contains(d))throw new Y(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tk(h,d)||h.push(d)}l=new fn(h),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new OU(new $t(a),l,u)}class od extends Fy{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof od}}function MU(t,e,n,r){const i=t.da(1,e,n);By("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();os(r,(l,u)=>{const h=zy(e,l,n);u=Fe(u);const c=i.ca(h);if(u instanceof od)s.push(h);else{const d=ad(u,c);d!=null&&(s.push(h),o.set(h,d))}});const a=new fn(s);return new Y1(o,a,i.fieldTransforms)}function LU(t,e,n,r,i,s){const o=t.da(1,e,n),a=[cm(e,r,n)],l=[i];if(s.length%2!=0)throw new Y(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(cm(e,s[d])),l.push(s[d+1]);const u=[],h=$t.empty();for(let d=a.length-1;d>=0;--d)if(!tk(u,a[d])){const m=a[d];let p=l[d];p=Fe(p);const v=o.ca(m);if(p instanceof od)u.push(m);else{const T=ad(p,v);T!=null&&(u.push(m),h.set(m,T))}}const c=new fn(u);return new Y1(h,c,o.fieldTransforms)}function ad(t,e){if(ek(t=Fe(t)))return By("Unsupported field value:",e,t),Z1(t,e);if(t instanceof Fy)return function(n,r){if(!X1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ad(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return b$(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Je.fromDate(n);return{timestampValue:Vc(r.It,i)}}if(n instanceof Je){const i=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vc(r.It,i)}}if(n instanceof Uy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ao)return{bytesValue:S1(r.It,n._byteString)};if(n instanceof Kt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Iy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${$y(n)}`)}(t,e)}function Z1(t,e){const n={};return n1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,i)=>{const s=ad(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ek(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Uy||t instanceof ao||t instanceof Kt||t instanceof Fy)}function By(t,e,n){if(!ek(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=$y(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function cm(t,e,n){if((e=Fe(e))instanceof sd)return e._internalPath;if(typeof e=="string")return zy(t,e);throw zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $U=new RegExp("[~\\*/\\[\\]]");function zy(t,e,n){if(e.search($U)>=0)throw zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sd(...e.split("."))._internalPath}catch{throw zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Y(R.INVALID_ARGUMENT,a+t+l)}function tk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rk("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FU extends nk{data(){return super.data()}}function rk(t,e){return typeof e=="string"?zy(t,e):e instanceof sd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{convertValue(e,n="none"){switch(Ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ro(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return os(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Uy(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=i1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Se(x1(r));const i=new Za(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||pr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sk extends nk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rk("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends sk{data(e={}){return super.data(e)}}class VU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:BU(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class ok extends jU{constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function zU(t,e,n){t=Hn(t,Kt);const r=Hn(t.firestore,qi),i=ik(t.converter,e,n);return ld(r,[J1(Vy(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function A0(t,e,n,...r){t=Hn(t,Kt);const i=Hn(t.firestore,qi),s=Vy(i);let o;return o=typeof(e=Fe(e))=="string"||e instanceof sd?LU(s,"updateDoc",t._key,e,n,r):MU(s,"updateDoc",t._key,e),ld(i,[o.toMutation(t._key,pn.exists(!0))])}function gf(t){return ld(Hn(t.firestore,qi),[new Sy(t._key,pn.none())])}function jo(t,e){const n=Hn(t.firestore,qi),r=yi(t),i=ik(t.converter,e);return ld(n,[J1(Vy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function kr(t,...e){var n,r,i;t=Fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||R0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(R0(e[o])){const c=e[o];e[o]=(n=c.next)===null||n===void 0?void 0:n.bind(c),e[o+1]=(r=c.error)===null||r===void 0?void 0:r.bind(c),e[o+2]=(i=c.complete)===null||i===void 0?void 0:i.bind(c)}let l,u,h;if(t instanceof Kt)u=Hn(t.firestore,qi),h=Cy(t._key.path),l={next:c=>{e[o]&&e[o](HU(u,t,c))},error:e[o+1],complete:e[o+2]};else{const c=Hn(t,id);u=Hn(c.firestore,qi),h=c._query;const d=new ok(u);l={next:m=>{e[o]&&e[o](new VU(u,d,c,m))},error:e[o+1],complete:e[o+2]},UU(t._query)}return function(c,d,m,p){const v=new SU(p),T=new rU(d,v,m);return c.asyncQueue.enqueueAndForget(async()=>ZF(await N0(c),T)),()=>{v.bc(),c.asyncQueue.enqueueAndForget(async()=>eU(await N0(c),T))}}(G1(u),h,a,l)}function ld(t,e){return function(n,r){const i=new Di;return n.asyncQueue.enqueueAndForget(async()=>hU(await NU(n),r,i)),i.promise}(G1(t),e)}function HU(t,e,n){const r=n.docs.get(e._key),i=new ok(t);return new sk(t,i,e._key,r,new na(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Io=n})(ui),yn(new rn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new qi(new QL(n.getProvider("auth-internal")),new ZL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Y(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),We(Zw,"3.7.0",t),We(Zw,"3.7.0","esm2017")})();const ak={apiKey:"AIzaSyCUkaT8gkDtiHm3MBfjdcx6TLjuwX1IbK4",authDomain:"ratios-app.firebaseapp.com",databaseURL:"https://ratios-app-default-rtdb.firebaseio.com",projectId:"ratios-app",storageBucket:"ratios-app.appspot.com",messagingSenderId:"497337383028",appId:"1:497337383028:web:a681e667ce52887556f921",measurementId:"G-1YS1RK2V0S"},lk=jg(ak),Ke=BM(lk),qe=AU(lk),uk=w.exports.createContext(),wr=()=>w.exports.useContext(uk),WU=({children:t})=>{const[e,n]=w.exports.useState(null),[r,i]=w.exports.useState(!0),[s,o]=w.exports.useState([{}]),[a,l]=w.exports.useState([{}]),[u,h]=w.exports.useState([{}]),[c,d]=w.exports.useState([{}]),[m,p]=w.exports.useState([{}]),[v,T]=w.exports.useState(!1),g=async(k,M)=>CD(Ke,k,M),y=async(k,M)=>TD(Ke,k,M),_=()=>xD(Ke),C=async k=>{const M=Ke.currentUser.uid;await zU(yi(qe,"user",`${M}`),k)},I=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"gestion-periodo"),{...k,uid:M})},N=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"cuentas"),{...k,uid:M})},A=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"bool-cuenta"),{...k,uid:M})},D=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"bool-calculate"),{...k,uid:M})},H=async k=>{await jo(Yt(qe,"bool-verify"),{...k})},J=async k=>{kr(Yt(qe,"bool-cuenta"),M=>{const B=Ke.currentUser.uid;M.forEach(W=>{const{uid:me,gestion:Nt}=W.data();me===B&&Nt===k&&gf(yi(qe,"bool-cuenta",`${W.id}`))})})},oe=async k=>{kr(Yt(qe,"gestion-periodo"),M=>{const B=Ke.currentUser.uid;M.forEach(W=>{const{uid:me,gestion:Nt}=W.data();me===B&&Nt===k&&gf(yi(qe,"gestion-periodo",`${W.id}`))})})},Qt=async k=>{kr(Yt(qe,"cuentas"),M=>{const B=Ke.currentUser.uid;M.forEach(W=>{const{uid:me,gestion:Nt}=W.data();me===B&&Nt===k&&(gf(yi(qe,"cuentas",`${W.id}`)),J(k),oe(k))})})},xt=async()=>{kr(Yt(qe,"bool-cuenta"),k=>{const M=[];k.forEach(B=>{const{uid:W}=B.data();W===K()&&M.push({...B.data()})}),o(M)})},Mt=async()=>{kr(Yt(qe,"bool-calculate"),k=>{const M=[];k.forEach(B=>{const{uid:W}=B.data();W===K()&&M.push({...B.data()})}),d(M)})},Pe=async()=>{kr(Yt(qe,"cuentas"),k=>{const M=[],B=Ke.currentUser.uid;k.forEach(W=>{const{uid:me}=W.data();me===B&&M.push({...W.data(),id:W.id})}),l(M)})},_n=async()=>{kr(Yt(qe,"gestion-periodo"),k=>{const M=[],B=Ke.currentUser.uid;k.forEach(W=>{const{uid:me}=W.data();me===B&&M.push({...W.data(),id:W.id})}),h(M)})},ln=async k=>{const M=[];a.map(B=>{const{gestion:W}=B;W===k&&M.push({...B})}),p(M)},O=async(k,M)=>{await A0(yi(qe,"cuentas",`${M}`),k)},G=async(k,M)=>{await A0(yi(qe,"gestion-periodo",`${M}`),k)},K=()=>{if(Ke!==null)return Ke.currentUser.uid},ye=async()=>{kr(Yt(qe,"bool-verify"),k=>{k.forEach(M=>{const{uid:B,verification:W}=M.data();B===K()&&T(W)})})},F=()=>Ke.currentUser.emailVerified;return w.exports.useEffect(()=>{bD(Ke,k=>{n(k),i(!1),Ke.currentUser!==null&&(ye(),Pe(),xt(),_n(),Mt())})},[Ke]),f(uk.Provider,{value:{signup:g,login:y,user:e,logout:_,loading:r,getIdCurrentUser:K,userAddDatabase:C,userAddGestionAndPeriodo:I,userAddCuentas:N,isEmailVerifyUser:F,userUpdateCuentas:O,userAddBool:A,boolCuenta:s,boolCalculate:c,userCounts:a,gestionCurrent:u,getCuentasOfGestion:ln,dataCalculate:m,userAddCuentasOfGestion:D,userAddVerificationEmail:H,boolVerificationEmail:v,userUpdateGestionCalculate:G,onDeleteListCounts:Qt},children:t})};var ck={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(ck);const he=ck.exports,KU=["as","disabled"];function qU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GU(t){return!t||t.trim()==="#"}function Hy({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const h=d=>{if((e||t==="a"&&GU(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},c=d=>{d.key===" "&&(d.preventDefault(),h(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:h,onKeyDown:c},u]}const hk=w.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=qU(t,KU);const[s,{tagName:o}]=Hy(Object.assign({tagName:n,disabled:r},i));return f(o,Object.assign({},i,s,{ref:e}))});hk.displayName="Button";const QU=["xxl","xl","lg","md","sm","xs"],YU="xs",Wy=w.exports.createContext({prefixes:{},breakpoints:QU,minBreakpoint:YU});function we(t,e){const{prefixes:n}=w.exports.useContext(Wy);return t||n[e]||e}function dk(){const{breakpoints:t}=w.exports.useContext(Wy);return t}function fk(){const{minBreakpoint:t}=w.exports.useContext(Wy);return t}const XU={variant:"primary",active:!1,disabled:!1},ct=w.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=we(e,"btn"),[u,{tagName:h}]=Hy({tagName:t,...o});return f(h,{...u,...o,ref:a,className:he(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});ct.displayName="Button";ct.defaultProps=XU;var Wn={exports:{}},JU="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ZU=JU,e2=ZU;function pk(){}function mk(){}mk.resetWarningCache=pk;var t2=function(){function t(r,i,s,o,a,l){if(l!==e2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mk,resetWarningCache:pk};return n.PropTypes=n,n};Wn.exports=t2();const n2={type:Wn.exports.string,tooltip:Wn.exports.bool,as:Wn.exports.elementType},ud=w.exports.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>f(t,{...i,ref:s,className:he(e,`${n}-${r?"tooltip":"feedback"}`)}));ud.displayName="Feedback";ud.propTypes=n2;const yr=w.exports.createContext({}),Ky=w.exports.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=w.exports.useContext(yr);return e=we(e,"form-check-input"),f(o,{...a,ref:l,type:r,id:t||u,className:he(n,e,i&&"is-valid",s&&"is-invalid")})});Ky.displayName="FormCheckInput";const Hc=w.exports.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=w.exports.useContext(yr);return t=we(t,"form-check-label"),f("label",{...r,ref:i,htmlFor:n||s,className:he(e,t)})});Hc.displayName="FormCheckLabel";function r2(t,e){return w.exports.Children.toArray(t).some(n=>w.exports.isValidElement(n)&&n.type===e)}const gk=w.exports.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:h,className:c,style:d,title:m="",type:p="checkbox",label:v,children:T,as:g="input",...y},_)=>{e=we(e,"form-check"),n=we(n,"form-switch");const{controlId:C}=w.exports.useContext(yr),I=w.exports.useMemo(()=>({controlId:t||C}),[C,t]),N=!T&&v!=null&&v!==!1||r2(T,Hc),A=f(Ky,{...y,type:p==="switch"?"checkbox":p,ref:_,isValid:o,isInvalid:a,disabled:s,as:g});return f(yr.Provider,{value:I,children:f("div",{style:d,className:he(c,N&&e,r&&`${e}-inline`,i&&`${e}-reverse`,p==="switch"&&n),children:T||E(j,{children:[A,N&&f(Hc,{title:m,children:v}),u&&f(ud,{type:h,tooltip:l,children:u})]})})})});gk.displayName="FormCheck";const Wc=Object.assign(gk,{Input:Ky,Label:Hc}),yk=w.exports.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:h="input",...c},d)=>{const{controlId:m}=w.exports.useContext(yr);t=we(t,"form-control");let p;return l?p={[`${t}-plaintext`]:!0}:p={[t]:!0,[`${t}-${n}`]:n},f(h,{...c,type:e,size:r,ref:d,readOnly:u,id:i||m,className:he(s,p,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});yk.displayName="FormControl";const i2=Object.assign(yk,{Feedback:ud});var s2=/-(.)/g;function o2(t){return t.replace(s2,function(e,n){return n.toUpperCase()})}const a2=t=>t[0].toUpperCase()+o2(t).slice(1);function Gt(t,{displayName:e=a2(t),Component:n,defaultProps:r}={}){const i=w.exports.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const h=we(o,t);return f(a,{ref:u,className:he(s,h),...l})});return i.defaultProps=r,i.displayName=e,i}const l2=Gt("form-floating"),qy=w.exports.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=w.exports.useMemo(()=>({controlId:t}),[t]);return f(yr.Provider,{value:i,children:f(e,{...n,ref:r})})});qy.displayName="FormGroup";function u2({as:t,bsPrefix:e,className:n,...r}){e=we(e,"col");const i=dk(),s=fk(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let h,c,d;typeof u=="object"&&u!=null?{span:h,offset:c,order:d}=u:h=u;const m=l!==s?`-${l}`:"";h&&o.push(h===!0?`${e}${m}`:`${e}${m}-${h}`),d!=null&&a.push(`order${m}-${d}`),c!=null&&a.push(`offset${m}-${c}`)}),[{...r,className:he(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const S=w.exports.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=u2(t);return f(i,{...r,ref:e,className:he(n,!o.length&&s)})});S.displayName="Col";const c2={column:!1,visuallyHidden:!1},Gy=w.exports.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=w.exports.useContext(yr);e=we(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const h=he(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?f(S,{ref:a,as:"label",className:h,htmlFor:s,...o}):f(t,{ref:a,className:h,htmlFor:s,...o})});Gy.displayName="FormLabel";Gy.defaultProps=c2;const vk=w.exports.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=w.exports.useContext(yr);return t=we(t,"form-range"),f("input",{...r,type:"range",ref:i,className:he(e,t),id:n||s})});vk.displayName="FormRange";const _k=w.exports.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=w.exports.useContext(yr);return t=we(t,"form-select"),f("select",{...a,size:n,ref:l,className:he(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});_k.displayName="FormSelect";const wk=w.exports.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=we(t,"form-text"),f(n,{...i,ref:s,className:he(e,t,r&&"text-muted")})));wk.displayName="FormText";const Ek=w.exports.forwardRef((t,e)=>f(Wc,{...t,ref:e,type:"switch"}));Ek.displayName="Switch";const h2=Object.assign(Ek,{Input:Wc.Input,Label:Wc.Label}),Ck=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=we(t,"form-floating"),E(qy,{ref:o,className:he(e,t),controlId:r,...s,children:[n,f("label",{htmlFor:r,children:i})]})));Ck.displayName="FloatingLabel";const d2={_ref:Wn.exports.any,validated:Wn.exports.bool,as:Wn.exports.elementType},Qy=w.exports.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>f(n,{...r,ref:i,className:he(t,e&&"was-validated")}));Qy.displayName="Form";Qy.propTypes=d2;const U=Object.assign(Qy,{Group:qy,Control:i2,Floating:l2,Check:Wc,Switch:h2,Label:Gy,Text:wk,Range:vk,Select:_k,FloatingLabel:Ck}),cd=t=>w.exports.forwardRef((e,n)=>f("div",{...e,ref:n,className:he(e.className,t)})),Tk=w.exports.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=we(t,"card-img");return f(r,{ref:s,className:he(n?`${o}-${n}`:o,e),...i})});Tk.displayName="CardImg";const Yy=w.exports.createContext(null);Yy.displayName="CardHeaderContext";const Sk=w.exports.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=we(t,"card-header"),o=w.exports.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return f(Yy.Provider,{value:o,children:f(n,{ref:i,...r,className:he(e,s)})})});Sk.displayName="CardHeader";const f2=cd("h5"),p2=cd("h6"),Ik=Gt("card-body"),m2=Gt("card-title",{Component:f2}),g2=Gt("card-subtitle",{Component:p2}),y2=Gt("card-link",{Component:"a"}),v2=Gt("card-text",{Component:"p"}),_2=Gt("card-footer"),w2=Gt("card-img-overlay"),E2={body:!1},Xy=w.exports.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s,children:o,as:a="div",...l},u)=>{const h=we(t,"card");return f(a,{ref:u,...l,className:he(e,h,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?f(Ik,{children:o}):o})});Xy.displayName="Card";Xy.defaultProps=E2;const te=Object.assign(Xy,{Img:Tk,Title:m2,Subtitle:g2,Body:Ik,Link:y2,Text:v2,Header:Sk,Footer:_2,ImgOverlay:w2}),C2={fluid:!1},Jt=w.exports.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=we(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return f(n,{ref:s,...i,className:he(r,e?`${o}${a}`:o)})});Jt.displayName="Container";Jt.defaultProps=C2;const re=w.exports.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=we(t,"row"),o=dk(),a=fk(),l=`${s}-cols`,u=[];return o.forEach(h=>{const c=r[h];delete r[h];let d;c!=null&&typeof c=="object"?{cols:d}=c:d=c;const m=h!==a?`-${h}`:"";d!=null&&u.push(`${l}${m}-${d}`)}),f(n,{ref:i,...r,className:he(e,s,...u)})});re.displayName="Row";function hm(){return hm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hm.apply(this,arguments)}function kk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P0(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function T2(t){var e=S2(t,"string");return typeof e=="symbol"?e:String(e)}function S2(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I2(t,e,n){var r=w.exports.useRef(t!==void 0),i=w.exports.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,w.exports.useCallback(function(u){for(var h=arguments.length,c=new Array(h>1?h-1:0),d=1;d<h;d++)c[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(c)),o(u)},[n])]}function Jy(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[P0(r)],a=s[r],l=kk(s,[P0(r),r].map(T2)),u=e[r],h=I2(a,o,t[u]),c=h[0],d=h[1];return hm({},l,(i={},i[r]=c,i[u]=d,i))},t)}function dm(t,e){return dm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},dm(t,e)}function k2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,dm(t,e)}function b2(t){var e=w.exports.useRef(t);return w.exports.useEffect(function(){e.current=t},[t]),e}function In(t){var e=b2(t);return w.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function x2(){var t=w.exports.useRef(!0),e=w.exports.useRef(function(){return t.current});return w.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function N2(t){var e=w.exports.useRef(null);return w.exports.useEffect(function(){e.current=t}),e.current}var R2=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",A2=typeof document<"u";const P2=A2||R2?w.exports.useLayoutEffect:w.exports.useEffect,O2=["onKeyDown"];function D2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function M2(t){return!t||t.trim()==="#"}const Zy=w.exports.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=D2(t,O2);const[i]=Hy(Object.assign({tagName:"a"},r)),s=In(o=>{i.onKeyDown(o),n==null||n(o)});return M2(r.href)||r.role==="button"?f("a",Object.assign({ref:e},r,i,{onKeyDown:s})):f("a",Object.assign({ref:e},r,{onKeyDown:n}))});Zy.displayName="Anchor";const O0={disabled:!1},bk=Un.createContext(null);var L2=function(e){return e.scrollTop},ra="unmounted",Rr="exited",Sn="entering",Yn="entered",il="exiting",Er=function(t){k2(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Rr,s.appearStatus=Sn):l=Yn:r.unmountOnExit||r.mountOnEnter?l=ra:l=Rr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===ra?{status:Rr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Sn&&o!==Yn&&(s=Sn):(o===Sn||o===Yn)&&(s=il)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Sn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:xs.findDOMNode(this);o&&L2(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Rr&&this.setState({status:ra})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[xs.findDOMNode(this),a],u=l[0],h=l[1],c=this.getTimeouts(),d=a?c.appear:c.enter;if(!i&&!o||O0.disabled){this.safeSetState({status:Yn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,h),this.safeSetState({status:Sn},function(){s.props.onEntering(u,h),s.onTransitionEnd(d,function(){s.safeSetState({status:Yn},function(){s.props.onEntered(u,h)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:xs.findDOMNode(this);if(!s||O0.disabled){this.safeSetState({status:Rr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:il},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Rr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:xs.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],h=l[1];this.props.addEndListener(u,h)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ra)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=kk(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f(bk.Provider,{value:null,children:typeof o=="function"?o(i,a):Un.cloneElement(Un.Children.only(o),a)})},e}(Un.Component);Er.contextType=bk;Er.propTypes={};function fs(){}Er.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:fs,onEntering:fs,onEntered:fs,onExit:fs,onExiting:fs,onExited:fs};Er.UNMOUNTED=ra;Er.EXITED=Rr;Er.ENTERING=Sn;Er.ENTERED=Yn;Er.EXITING=il;function ev(t){return t&&t.ownerDocument||document}function $2(t){var e=ev(t);return e&&e.defaultView||window}function F2(t,e){return $2(t).getComputedStyle(t,e)}var U2=/([A-Z])/g;function j2(t){return t.replace(U2,"-$1").toLowerCase()}var V2=/^ms-/;function Cu(t){return j2(t).replace(V2,"-ms-")}var B2=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function z2(t){return!!(t&&B2.test(t))}function sr(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Cu(e))||F2(t).getPropertyValue(Cu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Cu(i)):z2(i)?r+=i+"("+s+") ":n+=Cu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const hd=!!(typeof window<"u"&&window.document&&window.document.createElement);var fm=!1,pm=!1;try{var yf={get passive(){return fm=!0},get once(){return pm=fm=!0}};hd&&(window.addEventListener("test",yf,yf),window.removeEventListener("test",yf,!0))}catch{}function H2(t,e,n,r){if(r&&typeof r!="boolean"&&!pm){var i=r.once,s=r.capture,o=n;!pm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,fm?r:s)}t.addEventListener(e,n,r)}function W2(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Kc(t,e,n,r){return H2(t,e,n,r),function(){W2(t,e,n,r)}}function K2(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function q2(t){var e=sr(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function G2(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||K2(t,"transitionend",!0)},e+n),s=Kc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function Q2(t,e,n,r){n==null&&(n=q2(t)||0);var i=G2(t,n,r),s=Kc(t,"transitionend",e);return function(){i(),s()}}function D0(t,e){const n=sr(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function tv(t,e){const n=D0(t,"transitionDuration"),r=D0(t,"transitionDelay"),i=Q2(t,s=>{s.target===t&&(i(),e(s))},n+r)}function xk(t){t.offsetHeight}var M0=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function Y2(t,e){var n=M0(t),r=M0(e);return function(i){n&&n(i),r&&r(i)}}function Nk(t,e){return w.exports.useMemo(function(){return Y2(t,e)},[t,e])}function X2(t){return t&&"setState"in t?xs.findDOMNode(t):t!=null?t:null}const nv=Un.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},h)=>{const c=w.exports.useRef(null),d=Nk(c,l),m=N=>{d(X2(N))},p=N=>A=>{N&&c.current&&N(c.current,A)},v=w.exports.useCallback(p(t),[t]),T=w.exports.useCallback(p(e),[e]),g=w.exports.useCallback(p(n),[n]),y=w.exports.useCallback(p(r),[r]),_=w.exports.useCallback(p(i),[i]),C=w.exports.useCallback(p(s),[s]),I=w.exports.useCallback(p(o),[o]);return f(Er,{ref:h,...u,onEnter:v,onEntered:g,onEntering:T,onExit:y,onExited:C,onExiting:_,addEndListener:I,nodeRef:c,children:typeof a=="function"?(N,A)=>a(N,{...A,ref:m}):Un.cloneElement(a,{ref:m})})}),J2={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Z2={[Sn]:"show",[Yn]:"show"},Vl=w.exports.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=w.exports.useCallback((o,a)=>{xk(o),r.onEnter==null||r.onEnter(o,a)},[r]);return f(nv,{ref:i,addEndListener:tv,...r,onEnter:s,childRef:e.ref,children:(o,a)=>w.exports.cloneElement(e,{...a,className:he("fade",t,e.props.className,Z2[o],n[o])})})});Vl.defaultProps=J2;Vl.displayName="Fade";const ej={"aria-label":Wn.exports.string,onClick:Wn.exports.func,variant:Wn.exports.oneOf(["white"])},tj={"aria-label":"Close"},Bl=w.exports.forwardRef(({className:t,variant:e,...n},r)=>f("button",{ref:r,type:"button",className:he("btn-close",e&&`btn-close-${e}`,t),...n}));Bl.displayName="CloseButton";Bl.propTypes=ej;Bl.defaultProps=tj;const Rk=cd("h4");Rk.displayName="DivStyledAsH4";const nj=Gt("alert-heading",{Component:Rk}),rj=Gt("alert-link",{Component:Zy}),ij={variant:"primary",show:!0,transition:Vl,closeLabel:"Close alert"},rv=w.exports.forwardRef((t,e)=>{const{bsPrefix:n,show:r,closeLabel:i,closeVariant:s,className:o,children:a,variant:l,onClose:u,dismissible:h,transition:c,...d}=Jy(t,{show:"onClose"}),m=we(n,"alert"),p=In(g=>{u&&u(!1,g)}),v=c===!0?Vl:c,T=E("div",{role:"alert",...v?void 0:d,ref:e,className:he(o,m,l&&`${m}-${l}`,h&&`${m}-dismissible`),children:[h&&f(Bl,{onClick:p,"aria-label":i,variant:s}),a]});return v?f(v,{unmountOnExit:!0,...d,ref:void 0,in:r,children:T}):r?T:null});rv.displayName="Alert";rv.defaultProps=ij;const je=Object.assign(rv,{Link:rj,Heading:nj}),sj=()=>{const[t,e]=w.exports.useState({email:"",password:""}),{login:n}=wr(),r=rs(),[i,s]=w.exports.useState(),o=({target:{name:u,value:h}})=>{e({...t,[u]:h})},a=async u=>{if(u.preventDefault(),s(""),u.nativeEvent.submitter.id==="register")r("/register");else try{await n(t.email,t.password),r("/aplicacion")}catch(c){s(c.message)}},l=u=>{switch(u){case"Firebase: Error (auth/wrong-password).":return f(je,{className:"mb-3",variant:"danger",children:"Contrase\xF1a incorrecta"},"danger");case"Firebase: Error (auth/user-not-found).":return f(je,{className:"mb-3",variant:"danger",children:"El usuario no existe"},"danger")}};return E(j,{children:[f("br",{}),f(Jt,{children:f(re,{className:"justify-content-md-center",children:f(S,{sm:!0,lg:"4",children:E(te,{className:"text-center xs",children:[f(te.Header,{children:"Iniciar sesi\xF3n"}),E(te.Body,{children:[f(te.Title,{children:"Ingrese sus datos"}),E(U,{className:"mb-3",onSubmit:a,children:[f(U.Group,{className:"mb-3",controlId:"email",children:f(U.Control,{type:"email",name:"email",onChange:o,placeholder:"Correo electr\xF3nico"})}),f(U.Group,{className:"mb-3",controlId:"password",children:f(U.Control,{type:"password",name:"password",onChange:o,placeholder:"Contrase\xF1a"})}),l(i),f(ct,{variant:"primary",id:"login",type:"submit",children:"Entrar"}),f("span",{children:"\xBFA\xFAn no tienes cuenta? "}),f(ct,{variant:"primary",id:"register",type:"submit",children:"Registrarte"})]})]}),f(te.Footer,{className:"text-muted"})]})})})})]})},oj=()=>{const[t,e]=w.exports.useState({nombre:"",empresa:"",email:"",password:""}),n=c=>c.trim().length>0,{signup:r,userAddDatabase:i}=wr(),s=rs(),[o,a]=w.exports.useState(),l=({target:{name:c,value:d}})=>{e({...t,[c]:d})},u=async c=>{if(c.preventDefault(),a(""),!n(c.target[0].value)||!n(c.target[1].value))a("input-vacio");else try{await r(t.email,t.password),s("/confirm"),await i(t)}catch(d){a(d.message)}},h=c=>{switch(c){case"Firebase: Password should be at least 6 characters (auth/weak-password).":return f(je,{className:"mb-3",variant:"danger",children:"La contrase\xF1a debe tener almenos 6 caracteres"});case"input-vacio":return E(je,{className:"mb-3",variant:"danger",children:["Los campos de ",f("b",{children:"Empresa"})," y ",f("b",{children:"Nombre Completo"})," son obligatorios"]})}};return E(j,{children:[f("br",{}),f(Jt,{children:f(re,{className:"justify-content-md-center",children:f(S,{sm:!0,lg:"4",children:E(te,{className:"text-center xs",children:[f(te.Header,{children:"Registro de Usuario"}),E(te.Body,{children:[f(te.Title,{children:"Ingrese sus datos"}),E(U,{className:"mb-3",onSubmit:u,children:[f(U.Group,{className:"mb-3",controlId:"empresa",children:f(U.Control,{type:"text",name:"empresa",placeholder:"Empresa",onChange:l})}),f(U.Group,{className:"mb-3",controlId:"nombre",children:f(U.Control,{type:"text",name:"nombre",placeholder:"Nombre Completo",onChange:l})}),f(U.Group,{className:"mb-3",controlId:"email",children:f(U.Control,{type:"email",name:"email",placeholder:"Correo electr\xF3nico",onChange:l})}),f(U.Group,{className:"mb-3",controlId:"password",children:f(U.Control,{type:"password",name:"password",placeholder:"Contrase\xF1a",onChange:l})}),h(o),f(ct,{variant:"primary",type:"submit",children:"Registrarme"})]})]}),f(te.Footer,{className:"text-muted",children:"Se enviar\xE1 una correo para que confirme su registro"})]})})})})]})},aj=()=>{const{user:t,logout:e,isEmailVerifyUser:n,boolVerificationEmail:r,userAddVerificationEmail:i}=wr(),s=async()=>{await e()},o=async()=>{if(!await r){await SD(t);const l={uid:`${t.uid}`,verification:!0};await i(l)}};return console.log(r),w.exports.useEffect(()=>{n()?s():o()},[t]),f(j,{children:n()?f("h1",{children:"Redirigiendo..."}):E(j,{children:[E("h1",{children:["Bienvenido ",t.email]}),f("p",{children:"Porfavor confirma tu correo, una vez hecho eso,refresque la pagina."})]})})},lj=()=>{const[t,e]=w.exports.useState({gestion:"",periodo:"",politicaCobranza:""}),{userAddGestionAndPeriodo:n}=wr(),r=rs(),i=({target:{name:o,value:a}})=>{e({...t,[o]:a})},s=async o=>{o.preventDefault();try{r("/aplicacion"),await n(t)}catch(a){console.log(a)}};return E(j,{children:[f("br",{}),f(Jt,{children:f(re,{className:"justify-content-md-center",children:f(S,{sm:!0,lg:"4",children:E(te,{className:"text-center xs",children:[f(te.Header,{children:"Creando nueva Gesti\xF3n"}),E(te.Body,{children:[f(te.Title,{children:"Ingrese los datos"}),E(U,{className:"mb-3",onSubmit:s,children:[f(U.Group,{className:"mb-3",controlId:"gestion",children:f(U.Control,{type:"text",name:"gestion",onChange:i,placeholder:"A\xF1o de Gestion"})}),f(U.Group,{className:"mb-3",controlId:"periodo",placeholder:"Politica de cobranza",children:E("select",{className:"form-control",name:"periodo",onChange:i,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Selecione el periodo"}),f("option",{value:"Anual",children:"Anual"}),f("option",{value:"Semestral",children:"Semestral"}),f("option",{value:"Trimestral",children:"Trimestral"}),f("option",{value:"Mensual",children:"Mensual"})]})}),f(U.Group,{className:"mb-3",controlId:"politicaCobranza",children:f(U.Control,{type:"text",name:"politicaCobranza",onChange:i,placeholder:"Politica de cobranza"})}),f(ct,{variant:"primary",type:"submit",children:"Guardar datos"})]})]}),f(te.Footer,{className:"text-muted",children:"Revise si todo los datos son correctos"})]})})})})]})},L0=()=>{const[t,e]=w.exports.useState([{}]),[n,r]=w.exports.useState(""),[i,s]=w.exports.useState([]),[o,a]=w.exports.useState(!1),[l,u]=w.exports.useState(!1),[h,c]=w.exports.useState([{}]),[d,m]=w.exports.useState({}),[p,v]=w.exports.useState(!0),{userAddCuentas:T,userUpdateCuentas:g,userAddBool:y,boolCuenta:_,gestionCurrent:C,userCounts:I}=wr(),N=rs(),A=UA(),D=F=>{const k=F.target.value;e(k),C.map(({gestion:M,periodo:B})=>{k===M&&(r(B),a(!0))})},H=({target:{name:F,value:k}})=>{s({...i,[F]:k})},J=({target:{value:F}})=>{F==="cuentasPorCobrar"&&h.forEach(k=>{k.nombreCuenta==="cuentasPorCobrar"&&m({...k})}),F==="ventasAlCredito"&&h.forEach(k=>{k.nombreCuenta==="ventasAlCredito"&&m({...k})}),u(!0)},oe=({target:{name:F,value:k}})=>{m({...d,[F]:k})},Qt=async F=>{switch(F){case"cuentasPorCobrar":await y({...{cuentasPorCobrar:!0},gestion:`${t}`,nombreCuenta:`${F}`});break;case"ventasAlCredito":await y({...{ventasAlCredito:!0},gestion:`${t}`,nombreCuenta:`${F}`});break}},xt=F=>{let k=!1;return F.forEach(({name:M,value:B})=>{M!=="gestion"&&M!=="nombreCuenta"&&M!=="button"&&(B.trim().length>0?k=!0:k=!1)}),k},Mt=async F=>{F.preventDefault();const k=[...F.target];if(xt(k)){v(!0);const B=F.target[1].value;try{if(A.id)await g(d,d.id);else{let W=i,me;C.map(({gestion:Nt,politicaCobranza:Ro})=>{Nt===t&&(me=Ro)}),W={...i,gestion:`${t}`,periodo:`${n}`,politica:`${me}`},await T(W),await Qt(B)}N("/aplicacion")}catch(W){console.log(W)}}else v(!1)},Pe=F=>{switch(F){case"Mensual":return E(j,{children:[f("br",{}),f(U.Control,{type:"text",name:"enero",value:i.enero?i.enero:"",onChange:H,placeholder:"Enero",className:"mb-3"}),f(U.Control,{type:"text",name:"febrero",value:i.febrero?i.febrero:"",onChange:H,placeholder:"Febrero",className:"mb-3"}),f(U.Control,{type:"text",name:"marzo",value:i.marzo?i.marzo:"",onChange:H,placeholder:"Marzo",className:"mb-3"}),f(U.Control,{type:"text",name:"abril",value:i.abril?i.abril:"",onChange:H,placeholder:"Abril",className:"mb-3"}),f(U.Control,{type:"text",name:"mayo",value:i.mayo?i.mayo:"",onChange:H,placeholder:"Mayo",className:"mb-3"}),f(U.Control,{type:"text",name:"junio",value:i.junio?i.junio:"",onChange:H,placeholder:"Junio",className:"mb-3"}),f(U.Control,{type:"text",name:"julio",value:i.julio?i.julio:"",onChange:H,placeholder:"Julio",className:"mb-3"}),f(U.Control,{type:"text",name:"agosto",value:i.agosto?i.agosto:"",onChange:H,placeholder:"Agosto",className:"mb-3"}),f(U.Control,{type:"text",name:"septiembre",value:i.septiembre?i.septiembre:"",onChange:H,placeholder:"Septiembre",className:"mb-3"}),f(U.Control,{type:"text",name:"octubre",value:i.octubre?i.octubre:"",onChange:H,placeholder:"Octubre",className:"mb-3"}),f(U.Control,{type:"text",name:"noviembre",value:i.noviembre?i.noviembre:"",onChange:H,placeholder:"Noviembre",className:"mb-3"}),f(U.Control,{type:"text",name:"diciembre",value:i.diciembre?i.diciembre:"",onChange:H,placeholder:"Diciembre",className:"mb-3"})]});case"Trimestral":return E(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",name:"primerTrimestre",value:i.primerTrimestre?i.primerTrimestre:"",onChange:H,placeholder:"Primer trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"segundoTrimestre",value:i.segundoTrimestre?i.segundoTrimestre:"",onChange:H,placeholder:"Segundo Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"tercerTrimestre",value:i.tercerTrimestre?i.tercerTrimestre:"",onChange:H,placeholder:"Tercer Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"cuartoTrimestre",value:i.cuartoTrimestre?i.cuartoTrimestre:"",onChange:H,placeholder:"Cuarto Trimestre"})]});case"Semestral":return E(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:H,name:"primerSemestre",value:i.primerSemestre?i.primerSemestre:"",placeholder:"Primer semestre"}),f(U.Control,{className:"mb-3",type:"text",onChange:H,name:"segundoSemestre",value:i.segundoSemestre?i.segundoSemestre:"",placeholder:"Segundo semestre"})]});case"Anual":return E(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:H,name:"anual",value:i.anual?i.anual:"",placeholder:"Monto"})]})}},_n=F=>{switch(F){case"Mensual":return E(j,{children:[f("br",{}),f(U.Control,{type:"text",name:"enero",value:d.enero?d.enero:"",onChange:oe,placeholder:"Enero",className:"mb-3"}),f(U.Control,{type:"text",name:"febrero",value:d.febrero?d.febrero:"",onChange:oe,placeholder:"Febrero",className:"mb-3"}),f(U.Control,{type:"text",name:"marzo",value:d.marzo?d.marzo:"",onChange:oe,placeholder:"Marzo",className:"mb-3"}),f(U.Control,{type:"text",name:"abril",value:d.abril?d.abril:"",onChange:oe,placeholder:"Abril",className:"mb-3"}),f(U.Control,{type:"text",name:"mayo",value:d.mayo?d.mayo:"",onChange:oe,placeholder:"Mayo",className:"mb-3"}),f(U.Control,{type:"text",name:"junio",value:d.junio?d.junio:"",onChange:oe,placeholder:"Junio",className:"mb-3"}),f(U.Control,{type:"text",name:"julio",value:d.julio?d.julio:"",onChange:oe,placeholder:"Julio",className:"mb-3"}),f(U.Control,{type:"text",name:"agosto",value:d.agosto?d.agosto:"",onChange:oe,placeholder:"Agosto",className:"mb-3"}),f(U.Control,{type:"text",name:"septiembre",value:d.septiembre?d.septiembre:"",onChange:oe,placeholder:"Septiembre",className:"mb-3"}),f(U.Control,{type:"text",name:"octubre",value:d.octubre?d.octubre:"",onChange:oe,placeholder:"Octubre",className:"mb-3"}),f(U.Control,{type:"text",name:"noviembre",value:d.noviembre?d.noviembre:"",onChange:oe,placeholder:"Noviembre",className:"mb-3"}),f(U.Control,{type:"text",name:"diciembre",value:d.diciembre?d.diciembre:"",onChange:oe,placeholder:"Diciembre",className:"mb-3"})]});case"Trimestral":return E(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",name:"primerTrimestre",value:d.primerTrimestre?d.primerTrimestre:"",onChange:oe,placeholder:"Primer trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"segundoTrimestre",value:d.segundoTrimestre?d.segundoTrimestre:"",onChange:oe,placeholder:"Segundo Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"tercerTrimestre",value:d.tercerTrimestre?d.tercerTrimestre:"",onChange:oe,placeholder:"Tercer Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"cuartoTrimestre",value:d.cuartoTrimestre?d.cuartoTrimestre:"",onChange:oe,placeholder:"Cuarto Trimestre"})]});case"Semestral":return E(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:oe,name:"primerSemestre",value:d.primerSemestre?d.primerSemestre:"",placeholder:"Primer semestre"}),f(U.Control,{className:"mb-3",type:"text",onChange:oe,name:"segundoSemestre",value:d.segundoSemestre?d.segundoSemestre:"",placeholder:"Segundo semestre"})]});case"Anual":return E(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:oe,name:"anual",value:d.anual?d.anual:"",placeholder:"Monto"})]})}},ln=F=>{let k={cuentasPorCobrar:!1,ventasAlCredito:!1};F.forEach(({ventasAlCredito:W,cuentasPorCobrar:me,gestion:Nt})=>{Nt===t&&(me?k={...k,cuentasPorCobrar:me}:k={...k,ventasAlCredito:W})});const{ventasAlCredito:M,cuentasPorCobrar:B}=k;if(B&&M)return f(j,{});if(!B&&!M)return f(j,{children:E("select",{name:"nombreCuenta",className:"form-control",onChange:H,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})});if(B)return f(j,{children:E("select",{name:"nombreCuenta",className:"form-control",onChange:H,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"",disabled:!0,children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})});if(M)return f(j,{children:E("select",{name:"nombreCuenta",className:"form-control",onChange:H,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"",disabled:!0,children:"Ventas al credito"})]})})},O=F=>{let k={cuentasPorCobrar:!1,ventasAlCredito:!1};F.forEach(({ventasAlCredito:W,cuentasPorCobrar:me,gestion:Nt})=>{Nt===h[0].gestion&&(me?k={...k,cuentasPorCobrar:me}:k={...k,ventasAlCredito:W})});const{ventasAlCredito:M,cuentasPorCobrar:B}=k;if(B&&M)return f(j,{children:E("select",{name:"nombreCuenta",className:"form-control",onChange:J,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})});if(B)return f(j,{children:E("select",{name:"nombreCuenta",className:"form-control",onChange:J,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"",disabled:!0,children:"Ventas al credito"})]})});if(M)return f(j,{children:E("select",{name:"nombreCuenta",className:"form-control",onChange:J,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"",disabled:!0,children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})})},G=F=>{let k={cuentasPorCobrar:!1,ventasAlCredito:!1};F.forEach(({ventasAlCredito:W,cuentasPorCobrar:me,gestion:Nt})=>{Nt===t&&(me?k={...k,cuentasPorCobrar:me}:k={...k,ventasAlCredito:W})});const{ventasAlCredito:M,cuentasPorCobrar:B}=k;return!!(B&&M)},K=()=>o&&E(j,{children:[E(te.Header,{children:["Periodo ",n," "]}),ln(_),G(_)?E(j,{children:[f("br",{}),f(je,{variant:"success",children:"Usted ya ha registrado las cuentas de esta gestion."},"success")]}):E(j,{children:[Pe(n),!p&&E(j,{children:[f("br",{}),f(je,{variant:"danger",children:"Por favor rellene todos los campos."})]}),f(ct,{name:"button",variant:"primary",type:"submit",children:"Enviar Datos"})]})]}),ye=()=>o&&E(j,{children:[h.length>0&&E(j,{children:[E(te.Header,{children:["Periodo ",h[0].periodo," "]}),O(_)]}),l&&E(j,{children:[_n(h[0].periodo),!p&&E(j,{children:[f("br",{}),f(je,{variant:"danger",children:"Por favor rellene todos los campos."})]}),f(ct,{name:"button",variant:"primary",type:"submit",children:"Editar"})]})]});return w.exports.useEffect(()=>{const F=A.id;if(F){const k=[];let M="";I.map(B=>{const{id:W,gestion:me}=B;W===F?(k.push({...B}),M=B.gestion):M.length>0&&M===me&&k.push({...B})}),c(k),a(!0)}else s(i)},[A.id]),f(j,{children:h.length===0?E(j,{children:[f("br",{}),f(Jt,{children:E(je,{variant:"danger",children:[f(je.Heading,{children:"Ha ocurrido un error!"}),E("p",{children:["Usted no puede editar en esta gestion. ",f("b",{children:"No ha registrado ninguna cuenta"})]})]})})]}):E(j,{children:[f("br",{}),f(Jt,{children:f(re,{className:"justify-content-md-center",children:f(S,{sm:!0,lg:"4",children:E(te,{className:"text-center xs",children:[A.id?f(te.Header,{children:"Editando cuentas"}):f(te.Header,{children:"Seleccione la Gestion"}),f(te.Body,{children:E(U,{className:"mb-3",onSubmit:Mt,children:[f(U.Group,{className:"mb-3",children:A.id?f("select",{name:"gestion",className:"form-control",children:f("option",{value:h[0].gestion,selected:!0,disabled:!0,children:h[0].gestion})}):E("select",{name:"gestion",className:"form-control",onChange:D,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Gesti\xF3n"}),C.map(({gestion:F})=>E("option",{value:F,children:[" ",F," "]},F))]})}),A.id?ye():K()]})}),f(te.Footer,{className:"text-muted",children:"Los datos se guardar\xE1n en la base de datos"})]})})})})]})})},$0=(t,e,n,r)=>{switch(t){case"ratioRotacionCuentasPorCobrar":return uj(n,r,e);case"ratioPeriodoPromedioDeCobro":return cj(n,r,e)}},uj=(t,e,n)=>{let r=0;switch(n){case"Anual":return r=parseFloat(e.monto/t.monto),r.toFixed(2);case"Semestral":return r=parseFloat((e.primerSemestre+e.segundoSemestre)/(t.primerSemestre+t.segundoSemestre)),r.toFixed(2);case"Trimestral":return r=parseFloat((e.primerTrimestre+e.segundoTrimestre+e.tercerTrimestre+e.cuartoTrimestre)/(t.primerTrimestre+t.segundoTrimestre+t.tercerTrimestre+t.cuartoTrimestre)),r.toFixed(2);case"Mensual":return r=parseFloat((e.enero+e.febrero+e.marzo+e.abril+e.mayo+e.junio+e.julio+e.agosto+e.septiembre+e.octubre+e.noviembre+e.diciembre)/(t.enero+t.febrero+t.marzo+t.abril+t.mayo+t.junio+t.julio+t.agosto+t.septiembre+t.octubre+t.noviembre+t.diciembre)),r.toFixed(2)}},cj=(t,e,n)=>{let r=0;switch(n){case"Anual":return r=parseFloat(t.monto/e.monto),r.toFixed(2)*365;case"Semestral":return r=parseFloat((t.primerSemestre+t.segundoSemestre)/(e.primerSemestre+e.segundoSemestre)),r.toFixed(2)*365;case"Trimestral":return r=parseFloat((t.primerTrimestre+t.segundoTrimestre+t.tercerTrimestre+t.cuartoTrimestre)/(e.primerTrimestre+e.segundoTrimestre+e.tercerTrimestre+e.cuartoTrimestre)),r.toFixed(2)*365;case"Mensual":return r=parseFloat((t.enero+t.febrero+t.marzo+t.abril+t.mayo+t.junio+t.julio+t.agosto+t.septiembre+t.octubre+t.noviembre+t.diciembre)/(e.enero+e.febrero+e.marzo+e.abril+e.mayo+e.junio+e.julio+e.agosto+e.septiembre+e.octubre+e.noviembre+e.diciembre)),r.toFixed(2)*365}},hj={bg:"primary",pill:!1},$=w.exports.forwardRef(({bsPrefix:t,bg:e,pill:n,text:r,className:i,as:s="span",...o},a)=>{const l=we(t,"badge");return f(s,{ref:a,...o,className:he(i,l,n&&"rounded-pill",r&&`text-${r}`,e&&`bg-${e}`)})});$.displayName="Badge";$.defaultProps=hj;const dj=()=>{const{userCounts:t,onDeleteListCounts:e}=wr(),n=rs(),r=l=>{n(`/datos-gestion/${l}`)},i=(l,u)=>{let h=!1;return u.forEach(({gestion:c})=>{c===l&&(h=!0)}),h},s=(l,u)=>{let h=0;return u.forEach(({gestion:c})=>{c===l&&h++}),h},o=l=>{const u=[],h=[];return l.forEach(c=>{const{gestion:d,periodo:m,nombreCuenta:p}=c,v=d,T=i(d,u);let g=[];if(s(d,l)===1){switch(m){case"Anual":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{monto:`${c.anual}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{monto:`${c.anual}`}});break;case"Semestral":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{primerSemestre:`${c.primerSemestre}`,segundoSemestre:`${c.segundoSemestre}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{primerSemestre:`${c.primerSemestre}`,segundoSemestre:`${c.segundoSemestre}`}});break;case"Trimestral":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{primerTrimestre:`${c.primerTrimestre}`,segundoTrimestre:`${c.segundoTrimestre}`,tercerTrimestre:`${c.tercerTrimestre}`,cuartoTrimestre:`${c.cuartoTrimestre}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{primerTrimestre:`${c.primerTrimestre}`,segundoTrimestre:`${c.segundoTrimestre}`,tercerTrimestre:`${c.tercerTrimestre}`,cuartoTrimestre:`${c.cuartoTrimestre}`}});break;case"Mensual":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{enero:`${c.enero}`,febrero:`${c.febrero}`,marzo:`${c.marzo}`,abril:`${c.abril}`,mayo:`${c.mayo}`,junio:`${c.junio}`,julio:`${c.julio}`,agosto:`${c.agosto}`,septiembre:`${c.septiembre}`,octubre:`${c.octubre}`,noviembre:`${c.noviembre}`,diciembre:`${c.diciembre}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{enero:`${c.enero}`,febrero:`${c.febrero}`,marzo:`${c.marzo}`,abril:`${c.abril}`,mayo:`${c.mayo}`,junio:`${c.junio}`,julio:`${c.julio}`,agosto:`${c.agosto}`,septiembre:`${c.septiembre}`,octubre:`${c.octubre}`,noviembre:`${c.noviembre}`,diciembre:`${c.diciembre}`}});break}h.push({...g})}else if(T)u.forEach(_=>{const{gestion:C,periodo:I}=_;if(v===C){switch(I){case"Anual":p==="cuentasPorCobrar"&&(_={..._,cuentasPorCobrar:{monto:`${c.anual}`}}),p==="ventasAlCredito"&&(_={..._,ventasAlCredito:{monto:`${c.anual}`}});break;case"Semestral":p==="cuentasPorCobrar"&&(_={..._,cuentasPorCobrar:{primerSemestre:`${c.primerSemestre}`,segundoSemestre:`${c.segundoSemestre}`}}),p==="ventasAlCredito"&&(_={..._,ventasAlCredito:{primerSemestre:`${c.primerSemestre}`,segundoSemestre:`${c.segundoSemestre}`}});break;case"Trimestral":p==="cuentasPorCobrar"&&(_={..._,cuentasPorCobrar:{primerTrimestre:`${c.primerTrimestre}`,segundoTrimestre:`${c.segundoTrimestre}`,tercerTrimestre:`${c.tercerTrimestre}`,cuartoTrimestre:`${c.cuartoTrimestre}`}}),p==="ventasAlCredito"&&(_={..._,ventasAlCredito:{primerTrimestre:`${c.primerTrimestre}`,segundoTrimestre:`${c.segundoTrimestre}`,tercerTrimestre:`${c.tercerTrimestre}`,cuartoTrimestre:`${c.cuartoTrimestre}`}});break;case"Mensual":p==="cuentasPorCobrar"&&(_={..._,cuentasPorCobrar:{enero:`${c.enero}`,febrero:`${c.febrero}`,marzo:`${c.marzo}`,abril:`${c.abril}`,mayo:`${c.mayo}`,junio:`${c.junio}`,julio:`${c.julio}`,agosto:`${c.agosto}`,septiembre:`${c.septiembre}`,octubre:`${c.octubre}`,noviembre:`${c.noviembre}`,diciembre:`${c.diciembre}`}}),p==="ventasAlCredito"&&(_={..._,ventasAlCredito:{enero:`${c.enero}`,febrero:`${c.febrero}`,marzo:`${c.marzo}`,abril:`${c.abril}`,mayo:`${c.mayo}`,junio:`${c.junio}`,julio:`${c.julio}`,agosto:`${c.agosto}`,septiembre:`${c.septiembre}`,octubre:`${c.octubre}`,noviembre:`${c.noviembre}`,diciembre:`${c.diciembre}`}});break}const A=$0("ratioRotacionCuentasPorCobrar",_.periodo,_.cuentasPorCobrar,_.ventasAlCredito),D=$0("ratioPeriodoPromedioDeCobro",_.periodo,_.cuentasPorCobrar,_.ventasAlCredito);h.push({..._,ratioRotacionCuentasPorCobrar:`${A}`,ratioPeriodoPromedioDeCobro:`${D}`})}});else switch(m){case"Anual":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{monto:`${c.anual}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{monto:`${c.anual}`}}),u.push({...g});break;case"Semestral":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{primerSemestre:`${c.primerSemestre}`,segundoSemestre:`${c.segundoSemestre}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{primerSemestre:`${c.primerSemestre}`,segundoSemestre:`${c.segundoSemestre}`}}),u.push({...g});break;case"Trimestral":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{primerTrimestre:`${c.primerTrimestre}`,segundoTrimestre:`${c.segundoTrimestre}`,tercerTrimestre:`${c.tercerTrimestre}`,cuartoTrimestre:`${c.cuartoTrimestre}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{primerTrimestre:`${c.primerTrimestre}`,segundoTrimestre:`${c.segundoTrimestre}`,tercerTrimestre:`${c.tercerTrimestre}`,cuartoTrimestre:`${c.cuartoTrimestre}`}}),u.push({...g});break;case"Mensual":p==="cuentasPorCobrar"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,cuentasPorCobrar:{enero:`${c.enero}`,febrero:`${c.febrero}`,marzo:`${c.marzo}`,abril:`${c.abril}`,mayo:`${c.mayo}`,junio:`${c.junio}`,julio:`${c.julio}`,agosto:`${c.agosto}`,septiembre:`${c.septiembre}`,octubre:`${c.octubre}`,noviembre:`${c.noviembre}`,diciembre:`${c.diciembre}`}}),p==="ventasAlCredito"&&(g={id:`${c.id}`,gestion:`${c.gestion}`,periodo:`${c.periodo}`,politica:`${c.politica}`,ventasAlCredito:{enero:`${c.enero}`,febrero:`${c.febrero}`,marzo:`${c.marzo}`,abril:`${c.abril}`,mayo:`${c.mayo}`,junio:`${c.junio}`,julio:`${c.julio}`,agosto:`${c.agosto}`,septiembre:`${c.septiembre}`,octubre:`${c.octubre}`,noviembre:`${c.noviembre}`,diciembre:`${c.diciembre}`}}),u.push({...g});break}}),h},a=(l,u)=>{const{id:h,gestion:c,periodo:d,politica:m,cuentasPorCobrar:p,ventasAlCredito:v,ratioRotacionCuentasPorCobrar:T,ratioPeriodoPromedioDeCobro:g}=u;switch(l){case"Anual":return E(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:E(te,{className:"xs",children:[E(te.Header,{children:["GESTION ",c,f(ct,{variant:"dark",type:"submit",onClick:()=>r(h),children:"Editar"}),f(ct,{variant:"danger",type:"submit",onClick:()=>e(c),children:"Eliminar"})]}),E(te.Body,{children:[E(te.Title,{children:["Periodo ",d," - Plazo de deuda ",m," d\xEDas"]}),p===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),E(re,{children:[f(S,{}),f(S,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Monto"})})]}),E(re,{children:[f(S,{}),f(S,{children:p.monto})]}),f("br",{})]}),v===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),E(re,{children:[f(S,{}),f(S,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Monto"})})]}),E(re,{children:[f(S,{}),f(S,{children:v.monto})]}),f("br",{})]}),p===void 0||v===void 0?E(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):E(j,{children:[E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(S,{children:T}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzzzzzzz"}),f("br",{})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(S,{children:g}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzz"}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},h)]});case"Semestral":return E(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:E(te,{className:"xs",children:[E(te.Header,{children:["GESTION ",c,f(ct,{variant:"dark",type:"submit",onClick:()=>r(h),children:"Editar"}),f(ct,{variant:"danger",type:"submit",onClick:()=>e(c),children:"Eliminar"})]}),E(te.Body,{children:[E(te.Title,{children:["Periodo ",d," - Plazo de deuda ",m," d\xEDas"]}),p===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),E(re,{children:[f(S,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Primer semestre"})}),f(S,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo semestre"})})]}),E(re,{children:[f(S,{children:p.primerSemestre}),f(S,{children:p.segundoSemestre})]}),f("br",{})]}),v===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),E(re,{children:[f(S,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Primer semestre"})}),f(S,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo semestre"})})]}),E(re,{children:[f(S,{children:v.primerSemestre}),f(S,{children:v.segundoSemestre})]}),f("br",{})]}),p===void 0||v===void 0?E(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):E(j,{children:[E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(S,{children:T}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzzzzzzz"}),f("br",{})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(S,{children:g}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzz"}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},h)]});case"Trimestral":return E(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:E(te,{className:"xs",children:[E(te.Header,{children:["GESTION ",c,f(ct,{variant:"dark",type:"submit",onClick:()=>r(h),children:"Editar"}),f(ct,{variant:"danger",type:"submit",onClick:()=>e(c),children:"Eliminar"})]}),E(te.Body,{children:[E(te.Title,{children:["Periodo ",d," - Plazo de deuda ",m," d\xEDas"]}),p===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Primer trimestre"}),f(S,{children:p.primerTrimestre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo trimestre"}),f(S,{children:p.segundoTrimestre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Tercer trimestre"}),f(S,{children:p.tercerTrimestre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Cuarto trimestre"}),f(S,{children:p.cuartoTrimestre})]})]}),f("br",{})]}),v===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Primer trimestre"}),f(S,{children:v.primerTrimestre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo trimestre"}),f(S,{children:v.segundoTrimestre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Tercer trimestre"}),f(S,{children:v.tercerTrimestre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Cuarto trimestre"}),f(S,{children:v.cuartoTrimestre})]})]}),f("br",{})]}),p===void 0||v===void 0?E(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):E(j,{children:[E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(S,{children:T}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzzzzzzz"}),f("br",{})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(S,{children:g}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzz"}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},h)]});case"Mensual":return E(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:E(te,{className:"xs",children:[E(te.Header,{children:["GESTION ",c,f(ct,{variant:"dark",type:"submit",onClick:()=>r(h),children:"Editar"}),f(ct,{variant:"danger",type:"submit",onClick:()=>e(c),children:"Eliminar"})]}),E(te.Body,{children:[E(te.Title,{children:["Periodo ",d," - Plazo de deuda ",m," d\xEDas"]}),p===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Enero"}),f(S,{children:p.enero})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Febrero"}),f(S,{children:p.febrero})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Marzo"}),f(S,{children:p.marzo})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Abril"}),f(S,{children:p.abril})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Mayo"}),f(S,{children:p.mayo})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Junio"}),f(S,{children:p.junio})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Julio"}),f(S,{children:p.julio})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Agosto"}),f(S,{children:p.agosto})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Septiembre"}),f(S,{children:p.septiembre})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Octubre"}),f(S,{children:p.octubre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Noviembre"}),f(S,{children:p.noviembre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Diciembre"}),f(S,{children:p.diciembre})]})]}),f("br",{})]}),v===void 0?E(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):E(j,{children:[f(re,{children:f(S,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Enero"}),f(S,{children:v.enero})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Febrero"}),f(S,{children:v.febrero})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Marzo"}),f(S,{children:v.marzo})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Abril"}),f(S,{children:v.abril})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Mayo"}),f(S,{children:v.mayo})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Junio"}),f(S,{children:v.junio})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Julio"}),f(S,{children:v.julio})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Agosto"}),f(S,{children:v.agosto})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Septiembre"}),f(S,{children:v.septiembre})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Octubre"}),f(S,{children:v.octubre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Noviembre"}),f(S,{children:v.noviembre})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Diciembre"}),f(S,{children:v.diciembre})]})]}),f("br",{})]}),p===void 0||v===void 0?E(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):E(j,{children:[E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(S,{children:T}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzzzzzzz"}),f("br",{})]})]}),E(re,{children:[E(S,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(S,{children:g}),f("br",{})]}),E(S,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(S,{children:"zzzz"}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},h)]})}};return f(j,{children:t.length===0?E(j,{children:[f("br",{}),f(Jt,{className:"text-center",children:f("h5",{children:"Aun no ha se registraron cuentas . . ."})})]}):f(j,{children:o(t).map(l=>{const{periodo:u}=l;return a(u,l)})})})};var F0={exports:{}},mm={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,h,c){var d=u||"<<anonymous>>",m=c||l;if(a[l]==null)return o?new Error("Required "+h+" `"+m+"` was not specified "+("in `"+d+"`.")):null;for(var p=arguments.length,v=Array(p>6?p-6:0),T=6;T<p;T++)v[T-6]=arguments[T];return r.apply(void 0,[a,l,d,h,m].concat(v))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(mm,mm.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=mm.exports,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var h=arguments.length,c=Array(h),d=0;d<h;d++)c[d]=arguments[d];var m=null;return a.forEach(function(p){if(m==null){var v=p.apply(void 0,c);v!=null&&(m=v)}}),m}return(0,r.default)(u)}t.exports=e.default})(F0,F0.exports);var fj=Function.prototype.bind.call(Function.prototype.call,[].slice);function vi(t,e){return fj(t.querySelectorAll(e))}function pj(){var t=w.exports.useReducer(function(n){return!n},!1),e=t[1];return e}const iv=w.exports.createContext(null);iv.displayName="NavContext";const qc=w.exports.createContext(null),sv=(t,e=null)=>t!=null?String(t):e||null,Ak=w.exports.createContext(null),mj="data-rr-ui-",gj="rrUi";function dd(t){return`${mj}${t}`}function yj(t){return`${gj}${t}`}const vj=["as","active","eventKey"];function _j(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Pk({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=w.exports.useContext(qc),a=w.exports.useContext(iv),l=w.exports.useContext(Ak);let u=n;const h={role:i};if(a){!i&&a.role==="tablist"&&(h.role="tab");const c=a.getControllerId(t!=null?t:null),d=a.getControlledId(t!=null?t:null);h[dd("event-key")]=t,h.id=c||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(h["aria-controls"]=d)}return h.role==="tab"&&(h["aria-selected"]=u,u||(h.tabIndex=-1),s&&(h.tabIndex=-1,h["aria-disabled"]=!0)),h.onClick=In(c=>{s||(e==null||e(c),t!=null&&o&&!c.isPropagationStopped()&&o(t,c))}),[h,{isActive:u}]}const Ok=w.exports.forwardRef((t,e)=>{let{as:n=hk,active:r,eventKey:i}=t,s=_j(t,vj);const[o,a]=Pk(Object.assign({key:sv(i,s.href),active:r},s));return o[dd("active")]=a.isActive,f(n,Object.assign({},s,o,{ref:e}))});Ok.displayName="NavItem";const wj=["as","onSelect","activeKey","role","onKeyDown"];function Ej(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const U0=()=>{},j0=dd("event-key"),Dk=w.exports.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=Ej(t,wj);const l=pj(),u=w.exports.useRef(!1),h=w.exports.useContext(qc),c=w.exports.useContext(Ak);let d,m;c&&(s=s||"tablist",i=c.activeKey,d=c.getControlledId,m=c.getControllerId);const p=w.exports.useRef(null),v=_=>{const C=p.current;if(!C)return null;const I=vi(C,`[${j0}]:not([aria-disabled=true])`),N=C.querySelector("[aria-selected=true]");if(!N||N!==document.activeElement)return null;const A=I.indexOf(N);if(A===-1)return null;let D=A+_;return D>=I.length&&(D=0),D<0&&(D=I.length-1),I[D]},T=(_,C)=>{_!=null&&(r==null||r(_,C),h==null||h(_,C))},g=_=>{if(o==null||o(_),!c)return;let C;switch(_.key){case"ArrowLeft":case"ArrowUp":C=v(-1);break;case"ArrowRight":case"ArrowDown":C=v(1);break;default:return}!C||(_.preventDefault(),T(C.dataset[yj("EventKey")]||null,_),u.current=!0,l())};w.exports.useEffect(()=>{if(p.current&&u.current){const _=p.current.querySelector(`[${j0}][aria-selected=true]`);_==null||_.focus()}u.current=!1});const y=Nk(e,p);return f(qc.Provider,{value:T,children:f(iv.Provider,{value:{role:s,activeKey:sv(i),getControlledId:d||U0,getControllerId:m||U0},children:f(n,Object.assign({},a,{onKeyDown:g,ref:y,role:s}))})})});Dk.displayName="Nav";const Cj=Object.assign(Dk,{Item:Ok}),ls=w.exports.createContext(null);ls.displayName="NavbarContext";const Tj=Gt("nav-item"),Sj={disabled:!1},ov=w.exports.forwardRef(({bsPrefix:t,className:e,as:n=Zy,active:r,eventKey:i,...s},o)=>{t=we(t,"nav-link");const[a,l]=Pk({key:sv(i,s.href),active:r,...s});return f(n,{...s,...a,ref:o,className:he(e,t,s.disabled&&"disabled",l.isActive&&"active")})});ov.displayName="NavLink";ov.defaultProps=Sj;const Ij={justify:!1,fill:!1},av=w.exports.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:u,activeKey:h,...c}=Jy(t,{activeKey:"onSelect"}),d=we(r,"nav");let m,p,v=!1;const T=w.exports.useContext(ls),g=w.exports.useContext(Yy);return T?(m=T.bsPrefix,v=a==null?!0:a):g&&({cardHeaderBsPrefix:p}=g),f(Cj,{as:n,ref:e,activeKey:h,className:he(u,{[d]:!v,[`${m}-nav`]:v,[`${m}-nav-scroll`]:v&&l,[`${p}-${i}`]:!!p,[`${d}-${i}`]:!!i,[`${d}-fill`]:s,[`${d}-justified`]:o}),...c})});av.displayName="Nav";av.defaultProps=Ij;const kj=Object.assign(av,{Item:Tj,Link:ov}),Mk=w.exports.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=we(t,"navbar-brand");const s=n||(r.href?"a":"span");return f(s,{...r,ref:i,className:he(e,t)})});Mk.displayName="NavbarBrand";function Vo(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}const bj={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Lk(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=bj[t];return r+parseInt(sr(e,i[0]),10)+parseInt(sr(e,i[1]),10)}const xj={[Rr]:"collapse",[il]:"collapsing",[Sn]:"collapsing",[Yn]:"collapse show"},Nj={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Lk},$k=Un.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=Lk,...u},h)=>{const c=typeof a=="function"?a():a,d=w.exports.useMemo(()=>Vo(g=>{g.style[c]="0"},t),[c,t]),m=w.exports.useMemo(()=>Vo(g=>{const y=`scroll${c[0].toUpperCase()}${c.slice(1)}`;g.style[c]=`${g[y]}px`},e),[c,e]),p=w.exports.useMemo(()=>Vo(g=>{g.style[c]=null},n),[c,n]),v=w.exports.useMemo(()=>Vo(g=>{g.style[c]=`${l(c,g)}px`,xk(g)},r),[r,l,c]),T=w.exports.useMemo(()=>Vo(g=>{g.style[c]=null},i),[c,i]);return f(nv,{ref:h,addEndListener:tv,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:m,onEntered:p,onExit:v,onExiting:T,childRef:o.ref,children:(g,y)=>Un.cloneElement(o,{...y,className:he(s,o.props.className,xj[g],c==="width"&&"collapse-horizontal")})})});$k.defaultProps=Nj;const Fk=w.exports.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=we(e,"navbar-collapse");const i=w.exports.useContext(ls);return f($k,{in:!!(i&&i.expanded),...n,children:f("div",{ref:r,className:e,children:t})})});Fk.displayName="NavbarCollapse";const Rj={label:"Toggle navigation"},lv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=we(t,"navbar-toggler");const{onToggle:l,expanded:u}=w.exports.useContext(ls)||{},h=In(c=>{s&&s(c),l&&l()});return i==="button"&&(o.type="button"),f(i,{...o,ref:a,onClick:h,"aria-label":r,className:he(e,t,!u&&"collapsed"),children:n||f("span",{className:`${t}-icon`})})});lv.displayName="NavbarToggle";lv.defaultProps=Rj;var gm=new WeakMap,V0=function(e,n){if(!(!e||!n)){var r=gm.get(n)||new Map;gm.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function Aj(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=V0(t,e),r=w.exports.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return P2(function(){var o=V0(t,e);if(!o)return s(!1);var a=gm.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function Pj(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var h;if(typeof a=="object")h=a,u=l,l=!0;else{var c;l=l||!0,h=(c={},c[a]=l,c)}var d=w.exports.useMemo(function(){return Object.entries(h).reduce(function(m,p){var v=p[0],T=p[1];return(T==="up"||T===!0)&&(m=n(m,s(v))),(T==="down"||T===!0)&&(m=n(m,i(v))),m},"")},[JSON.stringify(h)]);return Aj(d,u)}return o}var Oj=Pj({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function vf(t){t===void 0&&(t=ev());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function B0(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function Dj(t){var e=w.exports.useRef(t);return e.current=t,e}function Mj(t){var e=Dj(t);w.exports.useEffect(function(){return function(){return e.current()}},[])}function Lj(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const z0=dd("modal-open");class uv{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Lj(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(sr(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(z0,""),sr(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(z0),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Uk=w.exports.createContext(hd?window:void 0);Uk.Provider;function jk(){return w.exports.useContext(Uk)}const _f=(t,e)=>hd?t==null?(e||ev()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function $j(t,e){const n=jk(),[r,i]=w.exports.useState(()=>_f(t,n==null?void 0:n.document));if(!r){const s=_f(t);s&&i(s)}return w.exports.useEffect(()=>{e&&r&&e(r)},[e,r]),w.exports.useEffect(()=>{const s=_f(t);s!==r&&i(s)},[t,r]),r}const Fj=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Uj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let wf;function jj(t){return wf||(wf=new uv({ownerDocument:t==null?void 0:t.document})),wf}function Vj(t){const e=jk(),n=t||jj(e),r=w.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:w.exports.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:w.exports.useCallback(i=>{r.current.backdrop=i},[])})}const Vk=w.exports.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:h,transition:c,backdropTransition:d,autoFocus:m=!0,enforceFocus:p=!0,restoreFocus:v=!0,restoreFocusOptions:T,renderDialog:g,renderBackdrop:y=Ie=>f("div",Object.assign({},Ie)),manager:_,container:C,onShow:I,onHide:N=()=>{},onExit:A,onExited:D,onExiting:H,onEnter:J,onEntering:oe,onEntered:Qt}=t,xt=Uj(t,Fj);const Mt=$j(C),Pe=Vj(_),_n=x2(),ln=N2(n),[O,G]=w.exports.useState(!n),K=w.exports.useRef(null);w.exports.useImperativeHandle(e,()=>Pe,[Pe]),hd&&!ln&&n&&(K.current=vf()),!c&&!n&&!O?G(!0):n&&O&&G(!1);const ye=In(()=>{if(Pe.add(),me.current=Kc(document,"keydown",B),W.current=Kc(document,"focus",()=>setTimeout(k),!0),I&&I(),m){const Ie=vf(document);Pe.dialog&&Ie&&!B0(Pe.dialog,Ie)&&(K.current=Ie,Pe.dialog.focus())}}),F=In(()=>{if(Pe.remove(),me.current==null||me.current(),W.current==null||W.current(),v){var Ie;(Ie=K.current)==null||Ie.focus==null||Ie.focus(T),K.current=null}});w.exports.useEffect(()=>{!n||!Mt||ye()},[n,Mt,ye]),w.exports.useEffect(()=>{!O||F()},[O,F]),Mj(()=>{F()});const k=In(()=>{if(!p||!_n()||!Pe.isTopModal())return;const Ie=vf();Pe.dialog&&Ie&&!B0(Pe.dialog,Ie)&&Pe.dialog.focus()}),M=In(Ie=>{Ie.target===Ie.currentTarget&&(u==null||u(Ie),a===!0&&N())}),B=In(Ie=>{l&&Ie.keyCode===27&&Pe.isTopModal()&&(h==null||h(Ie),Ie.defaultPrevented||N())}),W=w.exports.useRef(),me=w.exports.useRef(),Nt=(...Ie)=>{G(!0),D==null||D(...Ie)},Ro=c;if(!Mt||!(n||Ro&&!O))return null;const Xv=Object.assign({role:r,ref:Pe.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},xt,{style:s,className:i,tabIndex:-1});let Cd=g?g(Xv):f("div",Object.assign({},Xv,{children:w.exports.cloneElement(o,{role:"document"})}));Ro&&(Cd=f(Ro,{appear:!0,unmountOnExit:!0,in:!!n,onExit:A,onExiting:H,onExited:Nt,onEnter:J,onEntering:oe,onEntered:Qt,children:Cd}));let Xl=null;if(a){const Ie=d;Xl=y({ref:Pe.setBackdropRef,onClick:M}),Ie&&(Xl=f(Ie,{appear:!0,in:!!n,children:Xl}))}return f(j,{children:xs.createPortal(E(j,{children:[Xl,Cd]}),Mt)})});Vk.displayName="Modal";const Bj=Object.assign(Vk,{Manager:uv}),zj=Gt("offcanvas-body"),Hj={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Wj={[Sn]:"show",[Yn]:"show"},cv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=we(t,"offcanvas"),f(nv,{ref:i,addEndListener:tv,...r,childRef:n.ref,children:(s,o)=>w.exports.cloneElement(n,{...o,className:he(e,n.props.className,(s===Sn||s===il)&&`${t}-toggling`,Wj[s])})})));cv.defaultProps=Hj;cv.displayName="OffcanvasToggling";const Bk=w.exports.createContext({onHide(){}}),Kj={closeLabel:"Close",closeButton:!1},zk=w.exports.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=w.exports.useContext(Bk),l=In(()=>{a==null||a.onHide(),r==null||r()});return E("div",{ref:o,...s,children:[i,n&&f(Bl,{"aria-label":t,variant:e,onClick:l})]})});zk.defaultProps=Kj;const qj={closeLabel:"Close",closeButton:!1},hv=w.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=we(t,"offcanvas-header"),f(zk,{ref:r,...n,className:he(e,t)})));hv.displayName="OffcanvasHeader";hv.defaultProps=qj;const Gj=cd("h5"),Qj=Gt("offcanvas-title",{Component:Gj});function Yj(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Xj(t,e){t.classList?t.classList.add(e):Yj(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function H0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Jj(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=H0(t.className,e):t.setAttribute("class",H0(t.className&&t.className.baseVal||"",e))}const ps={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Hk extends uv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,sr(n,{[e]:`${parseFloat(sr(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],sr(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Xj(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";vi(n,ps.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),vi(n,ps.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),vi(n,ps.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Jj(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";vi(n,ps.FIXED_CONTENT).forEach(s=>this.restore(r,s)),vi(n,ps.STICKY_CONTENT).forEach(s=>this.restore(i,s)),vi(n,ps.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let Ef;function Zj(t){return Ef||(Ef=new Hk(t)),Ef}const eV={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function tV(t){return f(cv,{...t})}function nV(t){return f(Vl,{...t})}const dv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:h,onShow:c,onHide:d,container:m,autoFocus:p,enforceFocus:v,restoreFocus:T,restoreFocusOptions:g,onEntered:y,onExit:_,onExiting:C,onEnter:I,onEntering:N,onExited:A,backdropClassName:D,manager:H,renderStaticNode:J,...oe},Qt)=>{const xt=w.exports.useRef();t=we(t,"offcanvas");const{onToggle:Mt}=w.exports.useContext(ls)||{},[Pe,_n]=w.exports.useState(!1),ln=Oj(s||"xs","up");w.exports.useEffect(()=>{_n(s?o&&!ln:o)},[o,s,ln]);const O=In(()=>{Mt==null||Mt(),d==null||d()}),G=w.exports.useMemo(()=>({onHide:O}),[O]);function K(){return H||(u?(xt.current||(xt.current=new Hk({handleContainerOverflow:!1})),xt.current):Zj())}const ye=(B,...W)=>{B&&(B.style.visibility="visible"),I==null||I(B,...W)},F=(B,...W)=>{B&&(B.style.visibility=""),A==null||A(...W)},k=w.exports.useCallback(B=>f("div",{...B,className:he(`${t}-backdrop`,D)}),[D,t]),M=B=>f("div",{...B,...oe,className:he(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return E(j,{children:[!Pe&&(s||J)&&M({}),f(Bk.Provider,{value:G,children:f(Bj,{show:Pe,ref:Qt,backdrop:a,container:m,keyboard:l,autoFocus:p,enforceFocus:v&&!u,restoreFocus:T,restoreFocusOptions:g,onEscapeKeyDown:h,onShow:c,onHide:O,onEnter:ye,onEntering:N,onEntered:y,onExit:_,onExiting:C,onExited:F,manager:K(),transition:tV,backdropTransition:nV,renderBackdrop:k,renderDialog:M})})]})});dv.displayName="Offcanvas";dv.defaultProps=eV;const rV=Object.assign(dv,{Body:zj,Header:hv,Title:Qj}),Wk=w.exports.forwardRef((t,e)=>{const n=w.exports.useContext(ls);return f(rV,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});Wk.displayName="NavbarOffcanvas";const iV=Gt("navbar-text",{Component:"span"}),sV={expand:!0,variant:"light",collapseOnSelect:!1},fv=w.exports.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:h,onToggle:c,onSelect:d,collapseOnSelect:m,...p}=Jy(t,{expanded:"onToggle"}),v=we(n,"navbar"),T=w.exports.useCallback((..._)=>{d==null||d(..._),m&&h&&(c==null||c(!1))},[d,m,h,c]);p.role===void 0&&u!=="nav"&&(p.role="navigation");let g=`${v}-expand`;typeof r=="string"&&(g=`${g}-${r}`);const y=w.exports.useMemo(()=>({onToggle:()=>c==null?void 0:c(!h),bsPrefix:v,expanded:!!h,expand:r}),[v,h,r,c]);return f(ls.Provider,{value:y,children:f(qc.Provider,{value:T,children:f(u,{ref:e,...p,className:he(l,v,r&&g,i&&`${v}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});fv.defaultProps=sV;fv.displayName="Navbar";const Tu=Object.assign(fv,{Brand:Mk,Collapse:Fk,Offcanvas:Wk,Text:iV,Toggle:lv}),oV=()=>{const{user:t,logout:e}=wr(),n=async()=>{await e()};return f(j,{children:f(Tu,{bg:"light",expand:"lg",children:E(Jt,{children:[!t&&f(Tu.Brand,{href:"/",children:"Ratios financieros"}),t&&E(j,{children:[f(Tu.Toggle,{"aria-controls":"basic-navbar-nav"}),f(Tu.Collapse,{id:"basic-navbar-nav",children:E(kj,{className:"me-auto",children:[f(Xd,{to:"/aplicacion",children:" Mis Ratios Financieros "}),f(Xd,{to:"/gestion",children:" Gestion "}),f(Xd,{to:"/datos-gestion",children:" Registrar Datos "}),f(ct,{variant:"primary",type:"submit",onClick:n,children:"Cerrar Sesion"})]})})]})]})})})},Bo=({children:t})=>{const{user:e,loading:n}=wr();return n?f("h1",{children:"loading..."}):e?f(j,{children:t}):f(sS,{to:"/"})},aV=({children:t})=>{const{user:e,loading:n}=wr();return n?f("h1",{children:"loading..."}):e?f(sS,{to:"/aplicacion"}):f(j,{children:t})},W0="@firebase/database",K0="0.13.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kk="";function lV(t){Kk=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ja(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _r(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uV(e)}}catch{}return new cV},xi=qk("localStorage"),ym=qk("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new _l("@firebase/database"),hV=function(){let t=1;return function(){return t++}}(),Gk=function(t){const e=TP(t),n=new _P;n.update(e);const r=n.digest();return Mg.encodeByteArray(r)},zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zl.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let Li=null,q0=!0;const dV=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hs.logLevel=fe.VERBOSE,Li=Hs.log.bind(Hs),e&&ym.set("logging_enabled",!0)):typeof t=="function"?Li=t:(Li=null,ym.remove("logging_enabled"))},wt=function(...t){if(q0===!0&&(q0=!1,Li===null&&ym.get("logging_enabled")===!0&&dV(!0)),Li){const e=zl.apply(null,t);Li(e)}},Hl=function(t){return function(...e){wt(t,...e)}},vm=function(...t){const e="FIREBASE INTERNAL ERROR: "+zl(...t);Hs.error(e)},Gi=function(...t){const e=`FIREBASE FATAL ERROR: ${zl(...t)}`;throw Hs.error(e),new Error(e)},tn=function(...t){const e="FIREBASE WARNING: "+zl(...t);Hs.warn(e)},fV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qk=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lo="[MIN_NAME]",Qi="[MAX_NAME]",xo=function(t,e){if(t===e)return 0;if(t===lo||e===Qi)return-1;if(e===lo||t===Qi)return 1;{const n=G0(t),r=G0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mV=function(t,e){return t===e?0:t<e?-1:1},zo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},pv=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=pv(t[e[r]]);return n+="}",n},Yk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Xk=function(t){P(!Qk(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let c="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},gV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _V=new RegExp("^-?(0*)\\d{1,10}$"),wV=-2147483648,EV=2147483647,G0=function(t){if(_V.test(t)){const e=Number(t);if(e>=wV&&e<=EV)return e}return null},Wl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},CV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_a=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){tn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}class _m{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_m.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="5",Jk="v",Zk="s",eb="r",tb="f",nb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rb="ls",ib="p",wm="ac",sb="websocket",ob="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ab(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===sb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ob)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kV(t)&&(n.ns=t.namespace);const i=[];return qt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(){this.counters_={}}incrementCounter(e,n=1){_r(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={},Tf={};function gv(t){const e=t.toString();return Cf[e]||(Cf[e]=new bV),Cf[e]}function xV(t,e){const n=t.toString();return Tf[n]||(Tf[n]=e()),Tf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Wl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="start",RV="close",AV="pLPCommand",PV="pRTLPCB",lb="id",ub="pw",cb="ser",OV="cb",DV="seg",MV="ts",LV="d",$V="dframe",hb=1870,db=30,FV=hb-db,UV=25e3,jV=3e4;class Ps{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hl(e),this.stats_=gv(n),this.urlFn=l=>(this.appCheckToken&&(l[wm]=this.appCheckToken),ab(n,ob,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jV)),pV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yv((...s)=>{const[o,a,l,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Q0)this.id=a,this.password=l;else if(o===RV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Q0]="t",r[cb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[OV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Jk]=mv,this.transportSessionId&&(r[Zk]=this.transportSessionId),this.lastSessionId&&(r[rb]=this.lastSessionId),this.applicationId&&(r[ib]=this.applicationId),this.appCheckToken&&(r[wm]=this.appCheckToken),typeof location<"u"&&location.hostname&&nb.test(location.hostname)&&(r[eb]=tb);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gV()&&!yV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lS(n),i=Yk(r,FV);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$V]="t",r[lb]=e,r[ub]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hV(),window[AV+this.uniqueCallbackIdentifier]=e,window[PV+this.uniqueCallbackIdentifier]=n,this.myIFrame=yv.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lb]=this.myID,e[ub]=this.myPW,e[cb]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+db+r.length<=hb;){const o=this.pendingSegs.shift();r=r+"&"+DV+i+"="+o.seg+"&"+MV+i+"="+o.ts+"&"+LV+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(UV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV=16384,BV=45e3;let Gc=null;typeof MozWebSocket<"u"?Gc=MozWebSocket:typeof WebSocket<"u"&&(Gc=WebSocket);class kn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hl(this.connId),this.stats_=gv(n),this.connURL=kn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Jk]=mv,typeof location<"u"&&location.hostname&&nb.test(location.hostname)&&(o[eb]=tb),n&&(o[Zk]=n),r&&(o[rb]=r),i&&(o[wm]=i),s&&(o[ib]=s),ab(e,sb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xi.set("previous_websocket_failure",!0);try{let r;hS(),this.mySock=new Gc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Gc!==null&&!kn.forceDisallow_}static previouslyFailed(){return xi.isInMemoryStorage||xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yk(n,VV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kn.responsesRequiredToBeHealthy=2;kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ps,kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=kn&&kn.isAvailable();let r=n&&!kn.previouslyFailed();if(e.webSocketOnly&&(n||tn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kn];else{const i=this.transports_=[];for(const s of sl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);sl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}sl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=6e4,HV=5e3,WV=10*1024,KV=100*1024,Sf="t",Y0="d",qV="s",X0="r",GV="e",J0="o",Z0="a",eE="n",tE="p",QV="h";class YV{constructor(e,n,r,i,s,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hl("c:"+this.id+":"),this.transportManager_=new sl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sf in e){const n=e[Sf];n===Z0?this.upgradeIfSecondaryHealthy_():n===X0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===J0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Z0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:eE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zo(Sf,e);if(Y0 in e){const r=e[Y0];if(n===QV)this.onHandshake_(r);else if(n===eE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qV?this.onConnectionShutdown_(r):n===X0?this.onReset_(r):n===GV?vm("Server Error: "+r):n===J0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),mv!==r&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends pb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Lg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Qc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=32,rE=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ee("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ii(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function mb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gb(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function yb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Vt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return Vt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vv(t,e){if(ii(t)!==ii(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ii(t)>ii(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JV{constructor(e,n){this.errorPrefix_=n,this.parts_=gb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nh(this.parts_[r]);vb(this)}}function ZV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nh(e),vb(t)}function eB(t){const e=t.parts_.pop();t.byteLength_-=Nh(e),t.parts_.length>0&&(t.byteLength_-=1)}function vb(t){if(t.byteLength_>rE)throw new Error(t.errorPrefix_+"has a key path longer than "+rE+" bytes ("+t.byteLength_+").");if(t.parts_.length>nE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nE+") or object contains a cycle "+_i(t))}function _i(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v extends pb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _v}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=1e3,tB=60*5*1e3,iE=30*1e3,nB=1.3,rB=3e4,iB="server_kill",sE=3;class or extends fb{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=or.nextPersistentConnectionId_++,this.log_=Hl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ho,this.maxReconnectDelay_=tB,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!hS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_v.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(st(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Fg,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;or.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_r(e,"w")){const r=eo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=iE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vm("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rB&&(this.reconnectDelay_=Ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nB)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+or.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,a=new YV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{tn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(iB)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&tn(c),l())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dp(this.interruptReasons_)&&(this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>pv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sE&&(this.reconnectDelay_=iE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Kk.replace(/\./g,"-")]=1,Lg()?e["framework.cordova"]=1:cS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qc.getInstance().currentlyOnline();return Dp(this.interruptReasons_)&&e}}or.nextPersistentConnectionId_=0;or.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new se(lo,e),i=new se(lo,n);return this.compare(r,i)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su;class _b extends fd{static get __EMPTY_NODE(){return Su}static set __EMPTY_NODE(e){Su=e}compare(e,n){return xo(e.name,n.name)}isDefinedOn(e){throw vo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Qi,Su)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,Su)}toString(){return".key"}}const Ws=new _b;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:it.RED,this.left=i!=null?i:Bt.EMPTY_NODE,this.right=s!=null?s:Bt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Bt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class sB{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,n=Bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Iu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Iu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Iu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Iu(this.root_,null,this.comparator_,!0,e)}}Bt.EMPTY_NODE=new sB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oB(t,e){return xo(t.name,e.name)}function wv(t,e){return xo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Em;function aB(t){Em=t}const wb=function(t){return typeof t=="number"?"number:"+Xk(t):"string:"+t},Eb=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_r(e,".sv"),"Priority must be a string or number.")}else P(t===Em||t.isEmpty(),"priority of unexpected type.");P(t===Em||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oE;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Eb(this.priorityNode_)}static set __childrenNodeConstructor(e){oE=e}static get __childrenNodeConstructor(){return oE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ae(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xk(this.value_):e+=this.value_,this.lazyHash_=Gk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cb,Tb;function lB(t){Cb=t}function uB(t){Tb=t}class cB extends fd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Qi,new tt("[PRIORITY-POST]",Tb))}makePost(e,n){const r=Cb(e);return new se(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new cB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hB=Math.log(2);class dB{constructor(e){const n=s=>parseInt(Math.log(s)/hB,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yc=function(t,e,n,r){t.sort(e);const i=function(l,u){const h=u-l;let c,d;if(h===0)return null;if(h===1)return c=t[l],d=n?n(c):c,new it(d,c.node,it.BLACK,null,null);{const m=parseInt(h/2,10)+l,p=i(l,m),v=i(m+1,u);return c=t[m],d=n?n(c):c,new it(d,c.node,it.BLACK,p,v)}},s=function(l){let u=null,h=null,c=t.length;const d=function(p,v){const T=c-p,g=c;c-=p;const y=i(T+1,g),_=t[T],C=n?n(_):_;m(new it(C,_.node,v,null,y))},m=function(p){u?(u.left=p,u=p):(h=p,u=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));v?d(T,it.BLACK):(d(T,it.BLACK),d(T,it.RED))}return h},o=new dB(t.length),a=s(o);return new Bt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let If;const ms={};class nr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ms&&$e,"ChildrenNode.ts has not been loaded"),If=If||new nr({".priority":ms},{".priority":$e}),If}get(e){const n=eo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Bt?n:null}hasIndex(e){return _r(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(se.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Yc(r,e.getCompare()):a=ms;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new nr(h,u)}addToIndexes(e,n){const r=Tc(this.indexes_,(i,s)=>{const o=eo(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===ms)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(se.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Yc(a,o.getCompare())}else return ms;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new se(e.name,a))),l.insert(e,e.node)}});return new nr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Tc(this.indexes_,i=>{if(i===ms)return i;{const s=n.get(e.name);return s?i.remove(new se(e.name,s)):i}});return new nr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Eb(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wo||(Wo=new X(new Bt(wv),null,nr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wo}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wo:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new se(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wo:this.priorityNode_;return new X(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{P(ae(e)!==".priority"||ii(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wb(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Gk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new se(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kl?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fB extends X{constructor(){super(new Bt(wv),X.EMPTY_NODE,nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Kl=new fB;Object.defineProperties(se,{MIN:{value:new se(lo,X.EMPTY_NODE)},MAX:{value:new se(Qi,Kl)}});_b.__EMPTY_NODE=X.EMPTY_NODE;tt.__childrenNodeConstructor=X;aB(Kl);uB(Kl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pB=!0;function Et(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Et(e))}if(!(t instanceof Array)&&pB){const n=[];let r=!1;if(qt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Et(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new se(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=Yc(n,oB,o=>o.name,wv);if(r){const o=Yc(n,$e.getCompare());return new X(s,Et(e),new nr({".priority":o},{".priority":$e}))}else return new X(s,Et(e),nr.Default)}else{let n=X.EMPTY_NODE;return qt(t,(r,i)=>{if(_r(t,r)&&r.substring(0,1)!=="."){const s=Et(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Et(e))}}lB(Et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mB extends fd{constructor(e){super(),this.indexPath_=e,P(!le(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}makePost(e,n){const r=Et(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new se(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Kl);return new se(Qi,e)}toString(){return gb(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB extends fd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const r=Et(e);return new se(n,r)}toString(){return".value"}}const yB=new gB;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){return{type:"value",snapshotNode:t}}function uo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ol(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function al(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vB(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ol(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(uo(n,r)):o.trackChildChange(al(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(ol(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(al(i,s,o))}else r.trackChildChange(uo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.indexedFilter_=new Ev(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ll.getStartPost_(e),this.endPost_=ll.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new se(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new se(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _B{constructor(e){this.rangedFilter_=new ll(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new se(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const c=this.index_.getCompare();a=(d,m)=>c(m,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,h=!1;for(;l.hasNext();){const c=l.getNext();!h&&a(s,c)<=0&&(h=!0),h&&u<this.limit_&&a(c,o)<=0?u++:i=i.updateImmediateChild(c.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,m)=>c(m,d)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new se(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const m=d==null?1:o(d,l);if(h&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(al(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ol(n,c));const v=a.updateImmediateChild(n,X.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(uo(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:h&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ol(u.name,u.node)),s.trackChildChange(uo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lo}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Cv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wB(t){return t.loadsAllData()?new Ev(t.getIndex()):t.hasLimit()?new _B(t):new ll(t)}function aE(t){const e={};if(t.isDefault())return e;let n;return t.index_===$e?n="$priority":t.index_===yB?n="$value":t.index_===Ws?n="$key":(P(t.index_ instanceof mB,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_&&(e.startAt=st(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+st(t.indexStartName_))),t.endSet_&&(e.endAt=st(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+st(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends fb{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Hl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xc.getListenId_(e,r),a={};this.listens_[o]=a;const l=aE(e._queryParams);this.restRequest_(s+".json",l,(u,h)=>{let c=h;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),eo(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Xc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=aE(e._queryParams),r=e._path.toString(),i=new Fg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ja(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EB{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){return{value:null,children:new Map}}function Ib(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Jc());const i=t.children.get(r);e=Ce(e),Ib(i,e,n)}}function Cm(t,e,n){t.value!==null?n(e,t.value):CB(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);Cm(i,s,n)})}function CB(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TB{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=10*1e3,SB=30*1e3,IB=5*60*1e3;class kB{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TB(e);const r=uE+(SB-uE)*Math.random();_a(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qt(e,(i,s)=>{s>0&&_r(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_a(this.reportStats_.bind(this),Math.floor(Math.random()*2*IB))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function kb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Sv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xn.ACK_USER_WRITE,this.source=kb()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Zc(ge(),n,this.revert)}}else return P(ae(this.path)===e,"operationForChild called for unrelated child."),new Zc(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.source=e,this.path=n,this.type=xn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new ul(this.source,ge()):new ul(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xn.OVERWRITE}operationForChild(e){return le(this.path)?new Yi(this.source,ge(),this.snap.getImmediateChild(e)):new Yi(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new Yi(this.source,ge(),n.value):new cl(this.source,ge(),n)}else return P(ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cl(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xB(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(vB(o.childName,o.snapshotNode))}),Ko(t,i,"child_removed",e,r,n),Ko(t,i,"child_added",e,r,n),Ko(t,i,"child_moved",s,r,n),Ko(t,i,"child_changed",e,r,n),Ko(t,i,"value",e,r,n),i}function Ko(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RB(t,a,l)),o.forEach(a=>{const l=NB(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function NB(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RB(t,e,n){if(e.childName==null||n.childName==null)throw vo("Should only compare child_ events.");const r=new se(e.childName,e.snapshotNode),i=new se(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t,e){return{eventCache:t,serverCache:e}}function wa(t,e,n,r){return pd(new Xi(e,n,r),t.serverCache)}function bb(t,e,n,r){return pd(t.eventCache,new Xi(e,n,r))}function Tm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ji(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf;const AB=()=>(kf||(kf=new Bt(mV)),kf);class be{constructor(e,n=AB()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return qt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(le(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Qe(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new be(null)}}set(e,n){if(le(e))return new be(n,this.children);{const r=ae(e),s=(this.children.get(r)||new be(null)).set(Ce(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(le(e))return n;{const r=ae(e),s=(this.children.get(r)||new be(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Qe(n,i),r):new be(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new be(null))}}function Ea(t,e,n){if(le(e))return new Pn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Vt(i,e);return s=s.updateChild(o,n),new Pn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new Pn(s)}}}function cE(t,e,n){let r=t;return qt(n,(i,s)=>{r=Ea(r,Qe(e,i),s)}),r}function hE(t,e){if(le(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Pn(n)}}function Sm(t,e){return us(t,e)!=null}function us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Vt(n.path,e)):null}function dE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new se(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new se(r,i.value))}),e}function Jr(t,e){if(le(e))return t;{const n=us(t,e);return n!=null?new Pn(new be(n)):new Pn(t.writeTree_.subtree(e))}}function Im(t){return t.writeTree_.isEmpty()}function co(t,e){return xb(ge(),t.writeTree_,e)}function xb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=xb(Qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e){return Pb(e,t)}function PB(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ea(t.visibleWrites,e,n)),t.lastWriteId=r}function OB(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DB(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&MB(a,r.path)?i=!1:bn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return LB(t),!0;if(r.snap)t.visibleWrites=hE(t.visibleWrites,r.path);else{const a=r.children;qt(a,l=>{t.visibleWrites=hE(t.visibleWrites,Qe(r.path,l))})}return!0}else return!1}function MB(t,e){if(t.snap)return bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bn(Qe(t.path,n),e))return!0;return!1}function LB(t){t.visibleWrites=Nb(t.allWrites,$B,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $B(t){return t.visible}function Nb(t,e,n){let r=Pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)bn(n,o)?(a=Vt(n,o),r=Ea(r,a,s.snap)):bn(o,n)&&(a=Vt(o,n),r=Ea(r,ge(),s.snap.getChild(a)));else if(s.children){if(bn(n,o))a=Vt(n,o),r=cE(r,a,s.children);else if(bn(o,n))if(a=Vt(o,n),le(a))r=cE(r,ge(),s.children);else{const l=eo(s.children,ae(a));if(l){const u=l.getChild(Ce(a));r=Ea(r,ge(),u)}}}else throw vo("WriteRecord should have .snap or .children")}}return r}function Rb(t,e,n,r,i){if(!r&&!i){const s=us(t.visibleWrites,e);if(s!=null)return s;{const o=Jr(t.visibleWrites,e);if(Im(o))return n;if(n==null&&!Sm(o,ge()))return null;{const a=n||X.EMPTY_NODE;return co(o,a)}}}else{const s=Jr(t.visibleWrites,e);if(!i&&Im(s))return n;if(!i&&n==null&&!Sm(s,ge()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(bn(u.path,e)||bn(e,u.path))},a=Nb(t.allWrites,o,e),l=n||X.EMPTY_NODE;return co(a,l)}}}function FB(t,e,n){let r=X.EMPTY_NODE;const i=us(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jr(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=co(Jr(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),dE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jr(t.visibleWrites,e);return dE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function UB(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Qe(e,n);if(Sm(t.visibleWrites,s))return null;{const o=Jr(t.visibleWrites,s);return Im(o)?i.getChild(n):co(o,i.getChild(n))}}function jB(t,e,n,r){const i=Qe(e,n),s=us(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jr(t.visibleWrites,i);return co(o,r.getNode().getImmediateChild(n))}else return null}function VB(t,e){return us(t.visibleWrites,e)}function BB(t,e,n,r,i,s,o){let a;const l=Jr(t.visibleWrites,e),u=us(l,ge());if(u!=null)a=u;else if(n!=null)a=co(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],c=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=d.getNext();for(;m&&h.length<i;)c(m,r)!==0&&h.push(m),m=d.getNext();return h}else return[]}function zB(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function eh(t,e,n,r){return Rb(t.writeTree,t.treePath,e,n,r)}function kv(t,e){return FB(t.writeTree,t.treePath,e)}function fE(t,e,n,r){return UB(t.writeTree,t.treePath,e,n,r)}function th(t,e){return VB(t.writeTree,Qe(t.treePath,e))}function HB(t,e,n,r,i,s){return BB(t.writeTree,t.treePath,e,n,r,i,s)}function bv(t,e,n){return jB(t.writeTree,t.treePath,e,n)}function Ab(t,e){return Pb(Qe(t.treePath,e),t.writeTree)}function Pb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,al(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ol(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,uo(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,al(r,e.snapshotNode,i.oldSnap));else throw vo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KB{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ob=new KB;class xv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ji(this.viewCache_),s=HB(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qB(t){return{filter:t}}function GB(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QB(t,e,n,r,i){const s=new WB;let o,a;if(n.type===xn.OVERWRITE){const u=n;u.source.fromUser?o=km(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=nh(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===xn.MERGE){const u=n;u.source.fromUser?o=XB(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=bm(t,e,u.path,u.children,r,i,a,s))}else if(n.type===xn.ACK_USER_WRITE){const u=n;u.revert?o=ez(t,e,u.path,r,i,s):o=JB(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===xn.LISTEN_COMPLETE)o=ZB(t,e,n.path,r,s);else throw vo("Unknown operation type: "+n.type);const l=s.getChanges();return YB(e,o,l),{viewCache:o,changes:l}}function YB(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Tm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Sb(Tm(e)))}}function Db(t,e,n,r,i,s){const o=e.eventCache;if(th(r,n)!=null)return e;{let a,l;if(le(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ji(e),h=u instanceof X?u:X.EMPTY_NODE,c=kv(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=eh(r,Ji(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ae(n);if(u===".priority"){P(ii(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const c=fE(r,n,h,l);c!=null?a=t.filter.updatePriority(h,c):a=o.getNode()}else{const h=Ce(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=fE(r,n,o.getNode(),l);d!=null?c=o.getNode().getImmediateChild(u).updateChild(h,d):c=o.getNode().getImmediateChild(u)}else c=bv(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,h,i,s):a=o.getNode()}}return wa(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function nh(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),m,null)}else{const m=ae(n);if(!l.isCompleteForPath(n)&&ii(n)>1)return e;const p=Ce(n),T=l.getNode().getImmediateChild(m).updateChild(p,r);m===".priority"?u=h.updatePriority(l.getNode(),T):u=h.updateChild(l.getNode(),m,T,p,Ob,null)}const c=bb(e,u,l.isFullyInitialized()||le(n),h.filtersNodes()),d=new xv(i,c,s);return Db(t,c,n,i,d,a)}function km(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const h=new xv(i,e,s);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=wa(e,u,!0,t.filter.filtersNodes());else{const c=ae(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=wa(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),m=a.getNode().getImmediateChild(c);let p;if(le(d))p=r;else{const v=h.getCompleteChild(c);v!=null?mb(d)===".priority"&&v.getChild(yb(d)).isEmpty()?p=v:p=v.updateChild(d,r):p=X.EMPTY_NODE}if(m.equals(p))l=e;else{const v=t.filter.updateChild(a.getNode(),c,p,d,h,o);l=wa(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pE(t,e){return t.eventCache.isCompleteForChild(e)}function XB(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const h=Qe(n,l);pE(e,ae(h))&&(a=km(t,a,h,u,i,s,o))}),r.foreach((l,u)=>{const h=Qe(n,l);pE(e,ae(h))||(a=km(t,a,h,u,i,s,o))}),a}function mE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function bm(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;le(n)?u=r:u=new be(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(h.hasChild(c)){const m=e.serverCache.getNode().getImmediateChild(c),p=mE(t,m,d);l=nh(t,l,new Ee(c),p,i,s,o,a)}}),u.children.inorderTraversal((c,d)=>{const m=!e.serverCache.isCompleteForChild(c)&&d.value===null;if(!h.hasChild(c)&&!m){const p=e.serverCache.getNode().getImmediateChild(c),v=mE(t,p,d);l=nh(t,l,new Ee(c),v,i,s,o,a)}}),l}function JB(t,e,n,r,i,s,o){if(th(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nh(t,e,n,l.getNode().getChild(n),i,s,a,o);if(le(n)){let u=new be(null);return l.getNode().forEachChild(Ws,(h,c)=>{u=u.set(new Ee(h),c)}),bm(t,e,n,u,i,s,a,o)}else return e}else{let u=new be(null);return r.foreach((h,c)=>{const d=Qe(n,h);l.isCompleteForPath(d)&&(u=u.set(h,l.getNode().getChild(d)))}),bm(t,e,n,u,i,s,a,o)}}function ZB(t,e,n,r,i){const s=e.serverCache,o=bb(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return Db(t,o,n,r,Ob,i)}function ez(t,e,n,r,i,s){let o;if(th(r,n)!=null)return e;{const a=new xv(r,e,i),l=e.eventCache.getNode();let u;if(le(n)||ae(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=eh(r,Ji(e));else{const c=e.serverCache.getNode();P(c instanceof X,"serverChildren would be complete if leaf node"),h=kv(r,c)}h=h,u=t.filter.updateFullNode(l,h,s)}else{const h=ae(n);let c=bv(r,h,e.serverCache);c==null&&e.serverCache.isCompleteForChild(h)&&(c=l.getImmediateChild(h)),c!=null?u=t.filter.updateChild(l,h,c,Ce(n),a,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,X.EMPTY_NODE,Ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eh(r,Ji(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||th(r,ge())!=null,wa(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Ev(r.getIndex()),s=wB(r);this.processor_=qB(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new Xi(l,o.isFullyInitialized(),i.filtersNodes()),c=new Xi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=pd(c,h),this.eventGenerator_=new bB(this.query_)}get query(){return this.query_}}function nz(t){return t.viewCache_.serverCache.getNode()}function rz(t,e){const n=Ji(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function gE(t){return t.eventRegistrations_.length===0}function iz(t,e){t.eventRegistrations_.push(e)}function yE(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function vE(t,e,n,r){e.type===xn.MERGE&&e.source.queryId!==null&&(P(Ji(t.viewCache_),"We should always have a full cache before handling merges"),P(Tm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QB(t.processor_,i,e,n,r);return GB(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Mb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function sz(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(uo(s,o))}),n.isFullyInitialized()&&r.push(Sb(n.getNode())),Mb(t,r,n.getNode(),e)}function Mb(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xB(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh;class oz{constructor(){this.views=new Map}}function az(t){P(!rh,"__referenceConstructor has already been defined"),rh=t}function lz(){return P(rh,"Reference.ts has not been loaded"),rh}function uz(t){return t.views.size===0}function Nv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),vE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(vE(o,e,n,r));return s}}function cz(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=eh(n,i?r:null),l=!1;a?l=!0:r instanceof X?(a=kv(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=pd(new Xi(a,l,!1),new Xi(r,i,!1));return new tz(e,u)}return o}function hz(t,e,n,r,i,s){const o=cz(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iz(o,n),sz(o,n)}function dz(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=si(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(yE(u,n,r)),gE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(yE(l,n,r)),gE(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!si(t)&&s.push(new(lz())(e._repo,e._path)),{removed:s,events:o}}function Lb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ks(t,e){let n=null;for(const r of t.views.values())n=n||rz(r,e);return n}function $b(t,e){if(e._queryParams.loadsAllData())return md(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Fb(t,e){return $b(t,e)!=null}function si(t){return md(t)!=null}function md(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;function fz(t){P(!ih,"__referenceConstructor has already been defined"),ih=t}function pz(){return P(ih,"Reference.ts has not been loaded"),ih}let mz=1;class _E{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=zB(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gz(t,e,n,r,i){return PB(t.pendingWriteTree_,e,n,r,i),i?ql(t,new Yi(kb(),e,n)):[]}function Os(t,e,n=!1){const r=OB(t.pendingWriteTree_,e);if(DB(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(ge(),!0):qt(r.children,o=>{s=s.set(new Ee(o),!0)}),ql(t,new Zc(r.path,s,n))}else return[]}function gd(t,e,n){return ql(t,new Yi(Tv(),e,n))}function yz(t,e,n){const r=be.fromObject(n);return ql(t,new cl(Tv(),e,r))}function vz(t,e){return ql(t,new ul(Tv(),e))}function _z(t,e,n){const r=Rv(t,n);if(r){const i=Av(r),s=i.path,o=i.queryId,a=Vt(s,e),l=new ul(Sv(o),a);return Pv(t,s,l)}else return[]}function xm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Fb(o,e))){const l=dz(o,e,n,r);uz(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const h=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(d,m)=>si(m));if(h&&!c){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const m=Cz(d);for(let p=0;p<m.length;++p){const v=m[p],T=v.query,g=Bb(t,v);t.listenProvider_.startListening(Ca(T),sh(t,T),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(Ca(e),null):u.forEach(d=>{const m=t.queryToTagMap.get(yd(d));t.listenProvider_.stopListening(Ca(d),m)}))}Tz(t,u)}return a}function wz(t,e,n,r){const i=Rv(t,r);if(i!=null){const s=Av(i),o=s.path,a=s.queryId,l=Vt(o,e),u=new Yi(Sv(a),l,n);return Pv(t,o,u)}else return[]}function Ez(t,e,n,r){const i=Rv(t,r);if(i){const s=Av(i),o=s.path,a=s.queryId,l=Vt(o,e),u=be.fromObject(n),h=new cl(Sv(a),l,u);return Pv(t,o,h)}else return[]}function wE(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,m)=>{const p=Vt(d,i);s=s||Ks(m,p),o=o||si(m)});let a=t.syncPointTree_.get(i);a?(o=o||si(a),s=s||Ks(a,ge())):(a=new oz,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,p)=>{const v=Ks(p,ge());v&&(s=s.updateImmediateChild(m,v))}));const u=Fb(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=yd(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const m=Sz();t.queryToTagMap.set(d,m),t.tagToQueryMap.set(m,d)}const h=Iv(t.pendingWriteTree_,i);let c=hz(a,e,n,h,s,l);if(!u&&!o&&!r){const d=$b(a,e);c=c.concat(Iz(t,e,d))}return c}function Ub(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Vt(o,e),u=Ks(a,l);if(u)return u});return Rb(i,e,s,n,!0)}function ql(t,e){return jb(e,t.syncPointTree_,null,Iv(t.pendingWriteTree_,ge()))}function jb(t,e,n,r){if(le(t.path))return Vb(t,e,n,r);{const i=e.get(ge());n==null&&i!=null&&(n=Ks(i,ge()));let s=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=Ab(r,o);s=s.concat(jb(a,l,u,h))}return i&&(s=s.concat(Nv(i,t,r,n))),s}}function Vb(t,e,n,r){const i=e.get(ge());n==null&&i!=null&&(n=Ks(i,ge()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Ab(r,o),h=t.operationForChild(o);h&&(s=s.concat(Vb(h,a,l,u)))}),i&&(s=s.concat(Nv(i,t,r,n))),s}function Bb(t,e){const n=e.query,r=sh(t,n);return{hashFn:()=>(nz(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?_z(t,n._path,r):vz(t,n._path);{const s=vV(i,n);return xm(t,n,null,s)}}}}function sh(t,e){const n=yd(e);return t.queryToTagMap.get(n)}function yd(t){return t._path.toString()+"$"+t._queryIdentifier}function Rv(t,e){return t.tagToQueryMap.get(e)}function Av(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function Pv(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Iv(t.pendingWriteTree_,e);return Nv(r,n,i,null)}function Cz(t){return t.fold((e,n,r)=>{if(n&&si(n))return[md(n)];{let i=[];return n&&(i=Lb(n)),qt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ca(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pz())(t._repo,t._path):t}function Tz(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=yd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Sz(){return mz++}function Iz(t,e,n){const r=e._path,i=sh(t,e),s=Bb(t,n),o=t.listenProvider_.startListening(Ca(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,c)=>{if(!le(u)&&h&&si(h))return[md(h).query];{let d=[];return h&&(d=d.concat(Lb(h).map(m=>m.query))),qt(c,(m,p)=>{d=d.concat(p)}),d}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(Ca(h),sh(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ov(n)}node(){return this.node_}}class Dv{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Dv(this.syncTree_,n)}node(){return Ub(this.syncTree_,this.path_)}}const kz=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},EE=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bz(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xz(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bz=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},xz=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Nz=function(t,e,n,r){return Mv(e,new Dv(n,t),r)},Rz=function(t,e,n){return Mv(t,new Ov(e),n)};function Mv(t,e,n){const r=t.getPriority().val(),i=EE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=EE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Et(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild($e,(a,l)=>{const u=Mv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function $v(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=ae(n);for(;i!==null;){const s=eo(r.node.children,i)||{children:{},childCount:0};r=new Lv(i,r,s),n=Ce(n),i=ae(n)}return r}function No(t){return t.node.value}function zb(t,e){t.node.value=e,Nm(t)}function Hb(t){return t.node.childCount>0}function Az(t){return No(t)===void 0&&!Hb(t)}function vd(t,e){qt(t.node.children,(n,r)=>{e(new Lv(n,t,r))})}function Wb(t,e,n,r){n&&!r&&e(t),vd(t,i=>{Wb(i,e,!0,r)}),n&&r&&e(t)}function Pz(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gl(t){return new Ee(t.parent===null?t.name:Gl(t.parent)+"/"+t.name)}function Nm(t){t.parent!==null&&Oz(t.parent,t.name,t)}function Oz(t,e,n){const r=Az(n),i=_r(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Nm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dz=/[\[\].#$\/\u0000-\u001F\u007F]/,Mz=/[\[\].#$\u0000-\u001F\u007F]/,bf=10*1024*1024,Kb=function(t){return typeof t=="string"&&t.length!==0&&!Dz.test(t)},qb=function(t){return typeof t=="string"&&t.length!==0&&!Mz.test(t)},Lz=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qb(t)},Gb=function(t,e,n){const r=n instanceof Ee?new JV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_i(r));if(typeof e=="function")throw new Error(t+"contains a function "+_i(r)+" with contents = "+e.toString());if(Qk(e))throw new Error(t+"contains "+e.toString()+" "+_i(r));if(typeof e=="string"&&e.length>bf/3&&Nh(e)>bf)throw new Error(t+"contains a string greater than "+bf+" utf8 bytes "+_i(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kb(o)))throw new Error(t+" contains an invalid key ("+o+") "+_i(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZV(r,o),Gb(t,a,r),eB(r)}),i&&s)throw new Error(t+' contains ".value" child '+_i(r)+" in addition to actual children.")}},Qb=function(t,e,n,r){if(!(r&&n===void 0)&&!qb(n))throw new Error(gS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$z=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qb(t,e,n,r)},Fz=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Lz(n))throw new Error(gS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uz{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yb(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!vv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xb(t,e,n){Yb(t,n),Jb(t,r=>vv(r,e))}function cs(t,e,n){Yb(t,n),Jb(t,r=>bn(r,e)||bn(e,r))}function Jb(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jz(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jz(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Li&&wt("event: "+n.toString()),Wl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vz="repo_interrupt",Bz=25;class zz{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Uz,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jc(),this.transactionQueueTree_=new Lv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hz(t,e,n){if(t.stats_=gv(t.repoInfo_),t.forceRestClient_||CV())t.server_=new Xc(t.repoInfo_,(r,i,s,o)=>{CE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>TE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new or(t.repoInfo_,e,(r,i,s,o)=>{CE(t,r,i,s,o)},r=>{TE(t,r)},r=>{Kz(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xV(t.repoInfo_,()=>new kB(t.stats_,t.server_)),t.infoData_=new EB,t.infoSyncTree_=new _E({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=gd(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fv(t,"connected",!1),t.serverSyncTree_=new _E({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);cs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Wz(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Zb(t){return kz({timestamp:Wz(t)})}function CE(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Tc(n,u=>Et(u));o=Ez(t.serverSyncTree_,s,l,i)}else{const l=Et(n);o=wz(t.serverSyncTree_,s,l,i)}else if(r){const l=Tc(n,u=>Et(u));o=yz(t.serverSyncTree_,s,l)}else{const l=Et(n);o=gd(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=jv(t,s)),cs(t.eventQueue_,a,o)}function TE(t,e){Fv(t,"connected",e),e===!1&&Gz(t)}function Kz(t,e){qt(e,(n,r)=>{Fv(t,n,r)})}function Fv(t,e,n){const r=new Ee("/.info/"+e),i=Et(n);t.infoData_.updateSnapshot(r,i);const s=gd(t.infoSyncTree_,r,i);cs(t.eventQueue_,r,s)}function qz(t){return t.nextWriteId_++}function Gz(t){ex(t,"onDisconnectEvents");const e=Zb(t),n=Jc();Cm(t.onDisconnect_,ge(),(i,s)=>{const o=Nz(i,s,t.serverSyncTree_,e);Ib(n,i,o)});let r=[];Cm(n,ge(),(i,s)=>{r=r.concat(gd(t.serverSyncTree_,i,s));const o=Zz(t,i);jv(t,o)}),t.onDisconnect_=Jc(),cs(t.eventQueue_,ge(),r)}function Qz(t,e,n){let r;ae(e._path)===".info"?r=wE(t.infoSyncTree_,e,n):r=wE(t.serverSyncTree_,e,n),Xb(t.eventQueue_,e._path,r)}function SE(t,e,n){let r;ae(e._path)===".info"?r=xm(t.infoSyncTree_,e,n):r=xm(t.serverSyncTree_,e,n),Xb(t.eventQueue_,e._path,r)}function Yz(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vz)}function ex(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function tx(t,e,n){return Ub(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Uv(t,e=t.transactionQueueTree_){if(e||_d(t,e),No(e)){const n=rx(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Xz(t,Gl(e),n)}else Hb(e)&&vd(e,n=>{Uv(t,n)})}function Xz(t,e,n){const r=n.map(u=>u.currentWriteId),i=tx(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];P(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const c=Vt(e,h.path);s=s.updateChild(c,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{ex(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Os(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();_d(t,$v(t.transactionQueueTree_,e)),Uv(t,t.transactionQueueTree_),cs(t.eventQueue_,e,h);for(let d=0;d<c.length;d++)Wl(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{tn("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}jv(t,e)}},o)}function jv(t,e){const n=nx(t,e),r=Gl(n),i=rx(t,n);return Jz(t,i,r),r}function Jz(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Vt(n,l.path);let h=!1,c;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,c=l.abortReason,i=i.concat(Os(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Bz)h=!0,c="maxretry",i=i.concat(Os(t.serverSyncTree_,l.currentWriteId,!0));else{const d=tx(t,l.path,o);l.currentInputSnapshot=d;const m=e[a].update(d.val());if(m!==void 0){Gb("transaction failed: Data returned ",m,l.path);let p=Et(m);typeof m=="object"&&m!=null&&_r(m,".priority")||(p=p.updatePriority(d.getPriority()));const T=l.currentWriteId,g=Zb(t),y=Rz(p,d,g);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=qz(t),o.splice(o.indexOf(T),1),i=i.concat(gz(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),i=i.concat(Os(t.serverSyncTree_,T,!0))}else h=!0,c="nodata",i=i.concat(Os(t.serverSyncTree_,l.currentWriteId,!0))}cs(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}_d(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Wl(r[a]);Uv(t,t.transactionQueueTree_)}function nx(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&No(r)===void 0;)r=$v(r,n),e=Ce(e),n=ae(e);return r}function rx(t,e){const n=[];return ix(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ix(t,e,n){const r=No(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);vd(e,i=>{ix(t,i,n)})}function _d(t,e){const n=No(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,zb(e,n.length>0?n:void 0)}vd(e,r=>{_d(t,r)})}function Zz(t,e){const n=Gl(nx(t,e)),r=$v(t.transactionQueueTree_,e);return Pz(r,i=>{xf(t,i)}),xf(t,r),Wb(r,i=>{xf(t,i)}),n}function xf(t,e){const n=No(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Os(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zb(e,void 0):n.length=s+1,cs(t.eventQueue_,Gl(e),i);for(let o=0;o<r.length;o++)Wl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function t3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const IE=function(t,e){const n=n3(t),r=n.namespace;n.domain==="firebase.com"&&Gi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new IV(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},n3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(h,c)),h<c&&(i=e3(t.substring(h,c)));const d=t3(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class ox{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:mb(this._path)}get ref(){return new Cr(this._repo,this._path)}get _queryIdentifier(){const e=lE(this._queryParams),n=pv(e);return n==="{}"?"default":n}get _queryObject(){return lE(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Vv))return!1;const n=this._repo===e._repo,r=vv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XV(this._path)}}class Cr extends Vv{constructor(e,n){super(e,n,new Cv,!1)}get parent(){const e=yb(this._path);return e===null?null:new Cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=Rm(this.ref,e);return new hl(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new hl(i,Rm(this.ref,r),$e)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Rm(t,e){return t=Fe(t),ae(t._path)===null?$z("child","path",e,!1):Qb("child","path",e,!1),new Cr(t._repo,Qe(t._path,e))}class Bv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new sx("value",this,new hl(e.snapshotNode,new Cr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ox(this,e,n):null}matches(e){return e instanceof Bv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ox(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=Rm(new Cr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new sx(e.type,this,new hl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ql(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(h,c)=>{SE(t._repo,t,a),l(h,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new r3(n,s||void 0),a=e==="value"?new Bv(o):new zv(e,o);return Qz(t._repo,t,a),()=>SE(t._repo,t,a)}function i3(t,e,n,r){return Ql(t,"value",e,n,r)}function s3(t,e,n,r){return Ql(t,"child_added",e,n,r)}function o3(t,e,n,r){return Ql(t,"child_changed",e,n,r)}function a3(t,e,n,r){return Ql(t,"child_moved",e,n,r)}function l3(t,e,n,r){return Ql(t,"child_removed",e,n,r)}az(Cr);fz(Cr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u3="FIREBASE_DATABASE_EMULATOR_HOST",Am={};let c3=!1;function h3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=IE(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[u3]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=IE(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new _m(_m.OWNER):new SV(t.name,t.options,e);Fz("Invalid Firebase Database URL",o),le(o.path)||Gi("Database URL must point to the root of a Firebase Database (not including a child path).");const c=f3(a,t,h,new TV(t.name,n));return new p3(c,t)}function d3(t,e){const n=Am[e];(!n||n[t.key]!==t)&&Gi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yz(t),delete n[t.key]}function f3(t,e,n,r){let i=Am[e.name];i||(i={},Am[e.name]=i);let s=i[t.toURLString()];return s&&Gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new zz(t,c3,n,r),i[t.toURLString()]=s,s}class p3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hz(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cr(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m3(t){lV(ui),yn(new rn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return h3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),We(W0,K0,t),We(W0,K0,"esm2017")}or.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};or.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};m3();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const e=await this.appCheck.getToken();return e.error?null:e.token}return null}async getContext(){const e=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:e,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="us-central1";class v3{constructor(e,n,r,i,s=kE,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new y3(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=kE}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const bE="@firebase/functions",xE="0.8.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3="auth-internal",w3="app-check-internal",E3="messaging-internal";function C3(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(_3),a=r.getProvider(E3),l=r.getProvider(w3);return new v3(s,o,a,l,i,t)};yn(new rn(g3,n,"PUBLIC").setMultipleInstances(!0)),We(bE,xE,e),We(bE,xE,"esm2017")}C3(fetch.bind(self));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="firebasestorage.googleapis.com",T3="storageBucket",S3=2*60*1e3,I3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends vn{constructor(e,n,r=0){super(Nf(e),`Firebase Storage: ${n} (${Nf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Nf(t){return"storage/"+t}function k3(){const t="An unknown error occurred, please check the error payload for server response.";return new qn("unknown",t)}function b3(){return new qn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function x3(){return new qn("canceled","User canceled the upload/download.")}function N3(t){return new qn("invalid-url","Invalid URL '"+t+"'.")}function R3(t){return new qn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function NE(t){return new qn("invalid-argument",t)}function lx(){return new qn("app-deleted","The Firebase app was deleted.")}function A3(t){return new qn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw R3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const h="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${c}/${h}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===ax?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${T}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:m,indices:p,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<_.length;C++){const I=_[C],N=I.regex.exec(e);if(N){const A=N[I.indices.bucket];let D=N[I.indices.path];D||(D=""),r=new Nn(A,D),I.postModify(r);break}}if(r==null)throw N3(e);return r}}class P3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...T){u||(u=!0,e.apply(null,T))}function c(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function d(){s&&clearTimeout(s)}function m(T,...g){if(u){d();return}if(T){d(),h.call(null,T,...g);return}if(l()||o){d(),h.call(null,T,...g);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,c(_)}let p=!1;function v(T){p||(p=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),c(0)):T||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function D3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M3(t){return t!==void 0}function RE(t,e,n,r){if(r<e)throw NE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw NE(`Invalid value for '${t}'. Expected ${n} or less.`)}function L3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oh||(oh={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e,n,r,i,s,o,a,l,u,h,c,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,p)=>{this.resolve_=m,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ku(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===oh.NO_ERROR,l=s.getStatus();if((!a||$3(l,this.additionalRetryCodes_))&&this.retry){const h=s.getErrorCode()===oh.ABORT;r(!1,new ku(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ku(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());M3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=k3();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?lx():x3();o(l)}else{const l=b3();o(l)}};this.canceled_?n(!1,new ku(!1,null,!0)):this.backoffId_=O3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&D3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ku{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function U3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function j3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function V3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function B3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function z3(t,e,n,r,i,s,o=!0){const a=L3(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return V3(u,e),U3(u,n),j3(u,s),B3(u,r),new F3(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function W3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ah(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W3(this._location.path)}get storage(){return this._service}get parent(){const e=H3(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new ah(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A3(e)}}function AE(t,e){const n=e==null?void 0:e[T3];return n==null?null:Nn.makeFromBucketSpec(n,t)}class K3{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ax,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=S3,this._maxUploadRetryTime=I3,this._requests=new Set,i!=null?this._bucket=Nn.makeFromBucketSpec(i,this._host):this._bucket=AE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=AE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){RE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){RE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ah(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new P3(lx());{const o=z3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const PE="@firebase/storage",OE="0.9.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3="storage";function G3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new K3(n,r,i,e,ui)}function Q3(){yn(new rn(q3,G3,"PUBLIC").setMultipleInstances(!0)),We(PE,OE,""),We(PE,OE,"esm2017")}Q3();const ux="@firebase/installations",Hv="0.5.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=1e4,hx=`w:${Hv}`,dx="FIS_v2",Y3="https://firebaseinstallations.googleapis.com/v1",X3=60*60*1e3,J3="installations",Z3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eH={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Zi=new is(J3,Z3,eH);function fx(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px({projectId:t}){return`${Y3}/projects/${t}/installations`}function mx(t){return{token:t.token,requestStatus:2,expiresIn:nH(t.expiresIn),creationTime:Date.now()}}async function gx(t,e){const r=(await e.json()).error;return Zi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yx({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tH(t,{refreshToken:e}){const n=yx(t);return n.append("Authorization",rH(e)),n}async function vx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nH(t){return Number(t.replace("s","000"))}function rH(t){return`${dx} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iH({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=px(t),i=yx(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:dx,appId:t.appId,sdkVersion:hx},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await vx(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:mx(u.authToken)}}else throw await gx("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sH(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oH=/^[cdef][\w-]{21}$/,Pm="";function aH(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lH(t);return oH.test(n)?n:Pm}catch{return Pm}}function lH(t){return sH(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=new Map;function Ex(t,e){const n=wd(t);Cx(n,e),uH(n,e)}function Cx(t,e){const n=wx.get(t);if(!!n)for(const r of n)r(e)}function uH(t,e){const n=cH();n&&n.postMessage({key:t,fid:e}),hH()}let Ni=null;function cH(){return!Ni&&"BroadcastChannel"in self&&(Ni=new BroadcastChannel("[Firebase] FID Change"),Ni.onmessage=t=>{Cx(t.data.key,t.data.fid)}),Ni}function hH(){wx.size===0&&Ni&&(Ni.close(),Ni=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dH="firebase-installations-database",fH=1,es="firebase-installations-store";let Rf=null;function Wv(){return Rf||(Rf=_S(dH,fH,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}})),Rf}async function lh(t,e){const n=wd(t),i=(await Wv()).transaction(es,"readwrite"),s=i.objectStore(es),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Ex(t,e.fid),e}async function Tx(t){const e=wd(t),r=(await Wv()).transaction(es,"readwrite");await r.objectStore(es).delete(e),await r.done}async function Ed(t,e){const n=wd(t),i=(await Wv()).transaction(es,"readwrite"),s=i.objectStore(es),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ex(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(t){let e;const n=await Ed(t.appConfig,r=>{const i=pH(r),s=mH(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Pm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pH(t){const e=t||{fid:aH(),registrationStatus:0};return Sx(e)}function mH(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gH(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yH(t)}:{installationEntry:e}}async function gH(t,e){try{const n=await iH(t,e);return lh(t.appConfig,n)}catch(n){throw fx(n)&&n.customData.serverCode===409?await Tx(t.appConfig):await lh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yH(t){let e=await DE(t.appConfig);for(;e.registrationStatus===1;)await _x(100),e=await DE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kv(t);return r||n}return e}function DE(t){return Ed(t,e=>{if(!e)throw Zi.create("installation-not-found");return Sx(e)})}function Sx(t){return vH(t)?{fid:t.fid,registrationStatus:0}:t}function vH(t){return t.registrationStatus===1&&t.registrationTime+cx<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _H({appConfig:t,heartbeatServiceProvider:e},n){const r=wH(t,n),i=tH(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:hx,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await vx(()=>fetch(r,a));if(l.ok){const u=await l.json();return mx(u)}else throw await gx("Generate Auth Token",l)}function wH(t,{fid:e}){return`${px(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t,e=!1){let n;const r=await Ed(t.appConfig,s=>{if(!Ix(s))throw Zi.create("not-registered");const o=s.authToken;if(!e&&TH(o))return s;if(o.requestStatus===1)return n=EH(t,e),s;{if(!navigator.onLine)throw Zi.create("app-offline");const a=IH(s);return n=CH(t,a),a}});return n?await n:r.authToken}async function EH(t,e){let n=await ME(t.appConfig);for(;n.authToken.requestStatus===1;)await _x(100),n=await ME(t.appConfig);const r=n.authToken;return r.requestStatus===0?qv(t,e):r}function ME(t){return Ed(t,e=>{if(!Ix(e))throw Zi.create("not-registered");const n=e.authToken;return kH(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CH(t,e){try{const n=await _H(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lh(t.appConfig,r),n}catch(n){if(fx(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Tx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lh(t.appConfig,r)}throw n}}function Ix(t){return t!==void 0&&t.registrationStatus===2}function TH(t){return t.requestStatus===2&&!SH(t)}function SH(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+X3}function IH(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kH(t){return t.requestStatus===1&&t.requestTime+cx<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bH(t){const e=t,{installationEntry:n,registrationPromise:r}=await Kv(e);return r?r.catch(console.error):qv(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xH(t,e=!1){const n=t;return await NH(n),(await qv(n,e)).token}async function NH(t){const{registrationPromise:e}=await Kv(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RH(t){if(!t||!t.options)throw Af("App Configuration");if(!t.name)throw Af("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Af(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Af(t){return Zi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="installations",AH="installations-internal",PH=t=>{const e=t.getProvider("app").getImmediate(),n=RH(e),r=wl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OH=t=>{const e=t.getProvider("app").getImmediate(),n=wl(e,kx).getImmediate();return{getId:()=>bH(n),getToken:i=>xH(n,i)}};function DH(){yn(new rn(kx,PH,"PUBLIC")),yn(new rn(AH,OH,"PRIVATE"))}DH();We(ux,Hv);We(ux,Hv,"esm2017");const Pf="@firebase/remote-config",LE="0.3.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MH="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LH={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Ft=new is("remoteconfig","Remote Config",LH);function $H(t){const e=Fe(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FH{constructor(e,n,r,i){this.client=e,this.storage=n,this.storageCache=r,this.logger=i}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const r=Date.now()-n,i=r<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${r}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${i}.`),i}async fetch(e){const[n,r]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(r&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return r;e.eTag=r&&r.eTag;const i=await this.client.fetch(e),s=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return i.status===200&&s.push(this.storage.setLastSuccessfulFetchResponse(i)),await Promise.all(s),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UH(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jH{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},h={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:UH()},c={method:"POST",headers:u,body:JSON.stringify(h)},d=fetch(l,c),m=new Promise((_,C)=>{e.signal.addEventListener(()=>{const I=new Error("The operation was aborted.");I.name="AbortError",C(I)})});let p;try{await Promise.race([d,m]),p=await d}catch(_){let C="fetch-client-network";throw((n=_)===null||n===void 0?void 0:n.name)==="AbortError"&&(C="fetch-timeout"),Ft.create(C,{originalErrorMessage:(r=_)===null||r===void 0?void 0:r.message})}let v=p.status;const T=p.headers.get("ETag")||void 0;let g,y;if(p.status===200){let _;try{_=await p.json()}catch(C){throw Ft.create("fetch-client-parse",{originalErrorMessage:(i=C)===null||i===void 0?void 0:i.message})}g=_.entries,y=_.state}if(y==="INSTANCE_STATE_UNSPECIFIED"?v=500:y==="NO_CHANGE"?v=304:(y==="NO_TEMPLATE"||y==="EMPTY_CONFIG")&&(g={}),v!==304&&v!==200)throw Ft.create("fetch-status",{httpStatus:v});return{status:v,eTag:T,config:g}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VH(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BH(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zH{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await VH(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!BH(i))throw i;const s={throttleEndTimeMillis:Date.now()+xP(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HH=60*1e3,WH=12*60*60*1e3;class KH{constructor(e,n,r,i,s){this.app=e,this._client=n,this._storageCache=r,this._storage=i,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:HH,minimumFetchIntervalMillis:WH},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e){var n;const r=t.target.error||void 0;return Ft.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const wi="app_namespace_store",qH="firebase_remote_config",GH=1;function QH(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(qH,GH);r.onerror=i=>{e(Gu(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(wi,{keyPath:"compositeKey"})}}}catch(r){e(Ft.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class YH{constructor(e,n,r,i=QH()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([wi],"readonly").objectStore(wi),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=h=>{i(Gu(h,"storage-get"))},u.onsuccess=h=>{const c=h.target.result;r(c?c.value:void 0)}}catch(u){i(Ft.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([wi],"readwrite").objectStore(wi),u=this.createCompositeKey(e);try{const h=l.put({compositeKey:u,value:n});h.onerror=c=>{s(Gu(c,"storage-set"))},h.onsuccess=()=>{i()}}catch(h){s(Ft.create("storage-set",{originalErrorMessage:(o=h)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([wi],"readwrite").objectStore(wi),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=h=>{i(Gu(h,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Ft.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XH{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),r=this.storage.getActiveConfig(),i=await e;i&&(this.lastFetchStatus=i);const s=await n;s&&(this.lastSuccessfulFetchTimestampMillis=s);const o=await r;o&&(this.activeConfig=o)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JH(){yn(new rn(MH,t,"PUBLIC").setMultipleInstances(!0)),We(Pf,LE),We(Pf,LE,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Ft.create("registration-window");if(!dS())throw Ft.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Ft.create("registration-project-id");if(!o)throw Ft.create("registration-api-key");if(!a)throw Ft.create("registration-app-id");n=n||"firebase";const l=new YH(a,r.name,n),u=new XH(l),h=new _l(Pf);h.logLevel=fe.ERROR;const c=new jH(i,ui,n,s,o,a),d=new zH(c,l),m=new FH(d,l,u,h),p=new KH(r,m,u,l,h);return $H(p),p}}JH();var Om=function(t,e){return Om=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Om(t,e)};function Tr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Om(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Dm(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function dl(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function fl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function ar(t){return typeof t=="function"}function Gv(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Of=Gv(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function uh(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Yl=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Dm(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var h=this.initialTeardown;if(ar(h))try{h()}catch(v){s=v instanceof Of?v.errors:[v]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var d=Dm(c),m=d.next();!m.done;m=d.next()){var p=m.value;try{$E(p)}catch(v){s=s!=null?s:[],v instanceof Of?s=fl(fl([],dl(s)),dl(v.errors)):s.push(v)}}}catch(v){r={error:v}}finally{try{m&&!m.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new Of(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)$E(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&uh(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&uh(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),bx=Yl.EMPTY;function xx(t){return t instanceof Yl||t&&"closed"in t&&ar(t.remove)&&ar(t.add)&&ar(t.unsubscribe)}function $E(t){ar(t)?t():t.unsubscribe()}var Nx={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ZH={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,fl([t,e],dl(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function e4(t){ZH.setTimeout(function(){throw t})}function FE(){}function Qu(t){t()}var Qv=function(t){Tr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,xx(n)&&n.add(r)):r.destination=i4,r}return e.create=function(n,r,i){return new Mm(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Yl),t4=Function.prototype.bind;function Df(t,e){return t4.call(t,e)}var n4=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){bu(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){bu(r)}else bu(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){bu(n)}},t}(),Mm=function(t){Tr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(ar(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&Nx.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Df(n.next,a),error:n.error&&Df(n.error,a),complete:n.complete&&Df(n.complete,a)}):o=n}return s.destination=new n4(o),s}return e}(Qv);function bu(t){e4(t)}function r4(t){throw t}var i4={closed:!0,next:FE,error:r4,complete:FE},s4=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function o4(t){return t}function a4(t){return t.length===0?o4:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Lm=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=u4(e)?e:new Mm(e,n,r);return Qu(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=UE(n),new n(function(i,s){var o=new Mm({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[s4]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a4(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=UE(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function UE(t){var e;return(e=t!=null?t:Nx.Promise)!==null&&e!==void 0?e:Promise}function l4(t){return t&&ar(t.next)&&ar(t.error)&&ar(t.complete)}function u4(t){return t&&t instanceof Qv||l4(t)&&xx(t)}(function(t){Tr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(h){n.error(h)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(h){n.error(h)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Qv);var c4=Gv(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Rx=function(t){Tr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new jE(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new c4},e.prototype.next=function(n){var r=this;Qu(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Dm(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Qu(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Qu(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?bx:(this.currentObservers=null,a.push(n),new Yl(function(){r.currentObservers=null,uh(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Lm;return n.source=this,n},e.create=function(n,r){return new jE(n,r)},e}(Lm),jE=function(t){Tr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:bx},e}(Rx),Yv={now:function(){return(Yv.delegate||Date).now()},delegate:void 0};(function(t){Tr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Yv);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,h=1;h<s.length&&s[h]<=l;h+=2)u=h;u&&s.splice(0,u+1)}},e})(Rx);var h4=function(t){Tr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Yl),$m={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=$m.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,fl([t,e],dl(n))):setInterval.apply(void 0,fl([t,e],dl(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},d4=function(t){Tr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),$m.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;$m.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,uh(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(h4),VE=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Yv.now,t}(),f4=function(t){Tr(e,t);function e(n,r){r===void 0&&(r=VE.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(VE);new f4(d4);new Lm(function(t){return t.complete()});Gv(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const p4="[DEFAULT]",m4=w.exports.createContext(void 0),g4=w.exports.createContext(!1),y4="4.2.2",v4=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function _4(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=w.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=SO().find(o=>o.name===(n||p4));if(s){if(e&&v4(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=w.exports.version||"unknown";return We("react",o),We("reactfire",y4),jg(e,n)}},[t.firebaseApp,e,n]);return w.exports.createElement(m4.Provider,{value:i},f(g4.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fi,Ei;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Ei||(Ei={}));Object.freeze((fi={},fi[Ei.added]=s3,fi[Ei.removed]=l3,fi[Ei.changed]=o3,fi[Ei.moved]=a3,fi[Ei.value]=i3,fi));const w4=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=w4);const E4=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=E4);const C4=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=C4);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);const T4=()=>f(j,{children:f(_4,{firebaseConfig:ak,children:E(WU,{children:[f(oV,{}),E(GA,{children:[f(br,{path:"/",element:f(aV,{children:f(sj,{})})}),f(br,{path:"/gestion",element:f(Bo,{children:f(lj,{})})}),f(br,{path:"/datos-gestion",element:f(Bo,{children:f(L0,{})})}),f(br,{path:"/datos-gestion/:id",element:f(Bo,{children:f(L0,{})})}),f(br,{path:"/confirm",element:f(Bo,{children:f(aj,{})})}),f(br,{path:"/register",element:f(oj,{})}),f(br,{path:"/aplicacion",element:f(Bo,{children:f(dj,{})})})]})]})})});Lf.createRoot(document.getElementById("root")).render(f(Un.StrictMode,{children:f(ZA,{children:f(T4,{})})}));
