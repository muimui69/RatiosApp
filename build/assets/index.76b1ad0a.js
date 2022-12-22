function Rx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function VE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pl=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),Px=Symbol.for("react.fragment"),Ox=Symbol.for("react.strict_mode"),Dx=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),Fx=Symbol.for("react.suspense"),Ux=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),Xv=Symbol.iterator;function Vx(t){return t===null||typeof t!="object"?null:(t=Xv&&t[Xv]||t["@@iterator"],typeof t=="function"?t:null)}var BE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zE=Object.assign,HE={};function ho(t,e,n){this.props=t,this.context=e,this.refs=HE,this.updater=n||BE}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function WE(){}WE.prototype=ho.prototype;function $m(t,e,n){this.props=t,this.context=e,this.refs=HE,this.updater=n||BE}var Fm=$m.prototype=new WE;Fm.constructor=$m;zE(Fm,ho.prototype);Fm.isPureReactComponent=!0;var Jv=Array.isArray,KE=Object.prototype.hasOwnProperty,Um={current:null},qE={key:!0,ref:!0,__self:!0,__source:!0};function GE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)KE.call(e,r)&&!qE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pl,type:t,key:s,ref:o,props:i,_owner:Um.current}}function Bx(t,e){return{$$typeof:pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jm(t){return typeof t=="object"&&t!==null&&t.$$typeof===pl}function zx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zv=/\/+/g;function Cd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zx(""+t.key):e.toString(36)}function bu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pl:case Ax:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cd(o,0):r,Jv(i)?(n="",t!=null&&(n=t.replace(Zv,"$&/")+"/"),bu(i,e,n,"",function(u){return u})):i!=null&&(jm(i)&&(i=Bx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cd(s,a);o+=bu(s,e,n,l,i)}else if(l=Vx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cd(s,a++),o+=bu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(t,e,n){if(t==null)return t;var r=[],i=0;return bu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Hx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},xu={transition:null},Wx={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:xu,ReactCurrentOwner:Um};ce.Children={map:Jl,forEach:function(t,e,n){Jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jl(t,function(){e++}),e},toArray:function(t){return Jl(t,function(e){return e})||[]},only:function(t){if(!jm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ho;ce.Fragment=Px;ce.Profiler=Dx;ce.PureComponent=$m;ce.StrictMode=Ox;ce.Suspense=Fx;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Um.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)KE.call(e,l)&&!qE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pl,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:Lx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mx,_context:t},t.Consumer=t};ce.createElement=GE;ce.createFactory=function(t){var e=GE.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:$x,render:t}};ce.isValidElement=jm;ce.lazy=function(t){return{$$typeof:jx,_payload:{_status:-1,_result:t},_init:Hx}};ce.memo=function(t,e){return{$$typeof:Ux,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=xu.transition;xu.transition={};try{t()}finally{xu.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Dt.current.useCallback(t,e)};ce.useContext=function(t){return Dt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Dt.current.useEffect(t,e)};ce.useId=function(){return Dt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Dt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};ce.useRef=function(t){return Dt.current.useRef(t)};ce.useState=function(t){return Dt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Dt.current.useTransition()};ce.version="18.2.0";(function(t){t.exports=ce})(w);const Un=VE(w.exports),Df=Rx({__proto__:null,default:Un},[w.exports]);var Mf={},Vm={exports:{}},on={},QE={exports:{}},YE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var K=O.length;O.push(G);e:for(;0<K;){var ye=K-1>>>1,F=O[ye];if(0<i(F,G))O[ye]=G,O[K]=F,K=ye;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],K=O.pop();if(K!==G){O[0]=K;e:for(var ye=0,F=O.length,k=F>>>1;ye<k;){var M=2*(ye+1)-1,z=O[M],W=M+1,me=O[W];if(0>i(z,K))W<F&&0>i(me,z)?(O[ye]=me,O[W]=K,ye=W):(O[ye]=z,O[M]=K,ye=M);else if(W<F&&0>i(me,K))O[ye]=me,O[W]=K,ye=W;else break e}}return G}function i(O,G){var K=O.sortIndex-G.sortIndex;return K!==0?K:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=O)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function T(O){if(_=!1,v(O),!g)if(n(l)!==null)g=!0,_n(S);else{var G=n(u);G!==null&&ln(T,G.startTime-O)}}function S(O,G){g=!1,_&&(_=!1,m(D),D=-1),p=!0;var K=d;try{for(v(G),h=n(l);h!==null&&(!(h.expirationTime>G)||O&&!re());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var F=ye(h.expirationTime<=G);G=t.unstable_now(),typeof F=="function"?h.callback=F:h===n(l)&&r(l),v(G)}else r(l);h=n(l)}if(h!==null)var k=!0;else{var M=n(u);M!==null&&ln(T,M.startTime-G),k=!1}return k}finally{h=null,d=K,p=!1}}var x=!1,A=null,D=-1,B=5,Y=-1;function re(){return!(t.unstable_now()-Y<B)}function Nt(){if(A!==null){var O=t.unstable_now();Y=O;var G=!0;try{G=A(!0,O)}finally{G?lt():(x=!1,A=null)}}else x=!1}var lt;if(typeof y=="function")lt=function(){y(Nt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Pe=Lt.port2;Lt.port1.onmessage=Nt,lt=function(){Pe.postMessage(null)}}else lt=function(){E(Nt,0)};function _n(O){A=O,x||(x=!0,lt())}function ln(O,G){D=E(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,_n(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return O()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=d;d=O;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(O,G,K){var ye=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ye+K:ye):K=ye,O){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=K+F,O={id:c++,callback:G,priorityLevel:O,startTime:K,expirationTime:F,sortIndex:-1},K>ye?(O.sortIndex=K,e(u,O),n(l)===null&&O===n(u)&&(_?(m(D),D=-1):_=!0,ln(T,K-ye))):(O.sortIndex=F,e(l,O),g||p||(g=!0,_n(S))),O},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(O){var G=d;return function(){var K=d;d=G;try{return O.apply(this,arguments)}finally{d=K}}}})(YE);(function(t){t.exports=YE})(QE);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=w.exports,nn=QE.exports;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var JE=new Set,Ta={};function ts(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Ta[t]=e,t=0;t<e.length;t++)JE.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=Object.prototype.hasOwnProperty,Kx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,e_={},t_={};function qx(t){return Lf.call(t_,t)?!0:Lf.call(e_,t)?!1:Kx.test(t)?t_[t]=!0:(e_[t]=!0,!1)}function Gx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qx(t,e,n,r){if(e===null||typeof e>"u"||Gx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bm=/[\-:]([a-z])/g;function zm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bm,zm);mt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bm,zm);mt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bm,zm);mt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hm(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qx(e,n,i,r)&&(n=null),r||i===null?qx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _r=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),$f=Symbol.for("react.profiler"),ZE=Symbol.for("react.provider"),eC=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Uf=Symbol.for("react.suspense_list"),qm=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),tC=Symbol.for("react.offscreen"),n_=Symbol.iterator;function Ao(t){return t===null||typeof t!="object"?null:(t=n_&&t[n_]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,Td;function qo(t){if(Td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Td=e&&e[1]||""}return`
`+Td+t}var Sd=!1;function Id(t,e){if(!t||Sd)return"";Sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function Yx(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=Id(t.type,!1),t;case 11:return t=Id(t.type.render,!1),t;case 1:return t=Id(t.type,!0),t;default:return""}}function jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case $f:return"Profiler";case Wm:return"StrictMode";case Ff:return"Suspense";case Uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eC:return(t.displayName||"Context")+".Consumer";case ZE:return(t._context.displayName||"Context")+".Provider";case Km:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qm:return e=t.displayName||null,e!==null?e:jf(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return jf(t(e))}catch{}}return null}function Xx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(e);case 8:return e===Wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nC(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jx(t){var e=nC(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){t._valueTracker||(t._valueTracker=Jx(t))}function rC(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nC(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vf(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function r_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iC(t,e){e=e.checked,e!=null&&Hm(t,"checked",e,!1)}function Bf(t,e){iC(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&zf(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function i_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zf(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function s_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Go(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function sC(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function o_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function oC(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?oC(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tu,aC=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tu=tu||document.createElement("div"),tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zx=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){Zx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function lC(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function uC(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lC(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var eN=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kf(t,e){if(e){if(eN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gf=null;function Gm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qf=null,Ms=null,Ls=null;function a_(t){if(t=yl(t)){if(typeof Qf!="function")throw Error(b(280));var e=t.stateNode;e&&(e=fh(e),Qf(t.stateNode,t.type,e))}}function cC(t){Ms?Ls?Ls.push(t):Ls=[t]:Ms=t}function hC(){if(Ms){var t=Ms,e=Ls;if(Ls=Ms=null,a_(t),e)for(t=0;t<e.length;t++)a_(e[t])}}function dC(t,e){return t(e)}function fC(){}var kd=!1;function pC(t,e,n){if(kd)return t(e,n);kd=!0;try{return dC(t,e,n)}finally{kd=!1,(Ms!==null||Ls!==null)&&(fC(),hC())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var r=fh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Yf=!1;if(ur)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Yf=!1}function tN(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var sa=!1,Yu=null,Xu=!1,Xf=null,nN={onError:function(t){sa=!0,Yu=t}};function rN(t,e,n,r,i,s,o,a,l){sa=!1,Yu=null,tN.apply(nN,arguments)}function iN(t,e,n,r,i,s,o,a,l){if(rN.apply(this,arguments),sa){if(sa){var u=Yu;sa=!1,Yu=null}else throw Error(b(198));Xu||(Xu=!0,Xf=u)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mC(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function l_(t){if(ns(t)!==t)throw Error(b(188))}function sN(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return l_(i),t;if(s===r)return l_(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function gC(t){return t=sN(t),t!==null?yC(t):null}function yC(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yC(t);if(e!==null)return e;t=t.sibling}return null}var vC=nn.unstable_scheduleCallback,u_=nn.unstable_cancelCallback,oN=nn.unstable_shouldYield,aN=nn.unstable_requestPaint,Ve=nn.unstable_now,lN=nn.unstable_getCurrentPriorityLevel,Qm=nn.unstable_ImmediatePriority,_C=nn.unstable_UserBlockingPriority,Ju=nn.unstable_NormalPriority,uN=nn.unstable_LowPriority,wC=nn.unstable_IdlePriority,uh=null,jn=null;function cN(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(uh,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:fN,hN=Math.log,dN=Math.LN2;function fN(t){return t>>>=0,t===0?32:31-(hN(t)/dN|0)|0}var nu=64,ru=4194304;function Qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Qo(a):(s&=o,s!==0&&(r=Qo(s)))}else o=n&~i,o!==0?r=Qo(o):s!==0&&(r=Qo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function pN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=pN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function EC(){var t=nu;return nu<<=1,(nu&4194240)===0&&(nu=64),t}function bd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function gN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ym(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var _e=0;function CC(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var TC,Xm,SC,IC,kC,Zf=!1,iu=[],jr=null,Vr=null,Br=null,ka=new Map,ba=new Map,Ar=[],yN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function c_(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=yl(e),e!==null&&Xm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vN(t,e,n,r,i){switch(e){case"focusin":return jr=Oo(jr,t,e,n,r,i),!0;case"dragenter":return Vr=Oo(Vr,t,e,n,r,i),!0;case"mouseover":return Br=Oo(Br,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ka.set(s,Oo(ka.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ba.set(s,Oo(ba.get(s)||null,t,e,n,r,i)),!0}return!1}function bC(t){var e=Ci(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=mC(n),e!==null){t.blockedOn=e,kC(t.priority,function(){SC(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ep(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gf=r,n.target.dispatchEvent(r),Gf=null}else return e=yl(n),e!==null&&Xm(e),t.blockedOn=n,!1;e.shift()}return!0}function h_(t,e,n){Nu(t)&&n.delete(e)}function _N(){Zf=!1,jr!==null&&Nu(jr)&&(jr=null),Vr!==null&&Nu(Vr)&&(Vr=null),Br!==null&&Nu(Br)&&(Br=null),ka.forEach(h_),ba.forEach(h_)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,Zf||(Zf=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,_N)))}function xa(t){function e(i){return Do(i,t)}if(0<iu.length){Do(iu[0],t);for(var n=1;n<iu.length;n++){var r=iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jr!==null&&Do(jr,t),Vr!==null&&Do(Vr,t),Br!==null&&Do(Br,t),ka.forEach(e),ba.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)bC(n),n.blockedOn===null&&Ar.shift()}var $s=_r.ReactCurrentBatchConfig,ec=!0;function wN(t,e,n,r){var i=_e,s=$s.transition;$s.transition=null;try{_e=1,Jm(t,e,n,r)}finally{_e=i,$s.transition=s}}function EN(t,e,n,r){var i=_e,s=$s.transition;$s.transition=null;try{_e=4,Jm(t,e,n,r)}finally{_e=i,$s.transition=s}}function Jm(t,e,n,r){if(ec){var i=ep(t,e,n,r);if(i===null)$d(t,e,r,tc,n),c_(t,r);else if(vN(i,t,e,n,r))r.stopPropagation();else if(c_(t,r),e&4&&-1<yN.indexOf(t)){for(;i!==null;){var s=yl(i);if(s!==null&&TC(s),s=ep(t,e,n,r),s===null&&$d(t,e,r,tc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $d(t,e,r,null,n)}}var tc=null;function ep(t,e,n,r){if(tc=null,t=Gm(r),t=Ci(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mC(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tc=t,null}function xC(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lN()){case Qm:return 1;case _C:return 4;case Ju:case uN:return 16;case wC:return 536870912;default:return 16}default:return 16}}var $r=null,Zm=null,Ru=null;function NC(){if(Ru)return Ru;var t,e=Zm,n=e.length,r,i="value"in $r?$r.value:$r.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ru=i.slice(t,1<r?1-r:void 0)}function Au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function su(){return!0}function d_(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?su:d_,this.isPropagationStopped=d_,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=su)},persist:function(){},isPersistent:su}),e}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eg=an(fo),gl=Me({},fo,{view:0,detail:0}),CN=an(gl),xd,Nd,Mo,ch=Me({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(xd=t.screenX-Mo.screenX,Nd=t.screenY-Mo.screenY):Nd=xd=0,Mo=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Nd}}),f_=an(ch),TN=Me({},ch,{dataTransfer:0}),SN=an(TN),IN=Me({},gl,{relatedTarget:0}),Rd=an(IN),kN=Me({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),bN=an(kN),xN=Me({},fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NN=an(xN),RN=Me({},fo,{data:0}),p_=an(RN),AN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ON={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ON[t])?!!e[t]:!1}function tg(){return DN}var MN=Me({},gl,{key:function(t){if(t.key){var e=AN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tg,charCode:function(t){return t.type==="keypress"?Au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LN=an(MN),$N=Me({},ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m_=an($N),FN=Me({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tg}),UN=an(FN),jN=Me({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),VN=an(jN),BN=Me({},ch,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zN=an(BN),HN=[9,13,27,32],ng=ur&&"CompositionEvent"in window,oa=null;ur&&"documentMode"in document&&(oa=document.documentMode);var WN=ur&&"TextEvent"in window&&!oa,RC=ur&&(!ng||oa&&8<oa&&11>=oa),g_=String.fromCharCode(32),y_=!1;function AC(t,e){switch(t){case"keyup":return HN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PC(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function KN(t,e){switch(t){case"compositionend":return PC(e);case"keypress":return e.which!==32?null:(y_=!0,g_);case"textInput":return t=e.data,t===g_&&y_?null:t;default:return null}}function qN(t,e){if(vs)return t==="compositionend"||!ng&&AC(t,e)?(t=NC(),Ru=Zm=$r=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RC&&e.locale!=="ko"?null:e.data;default:return null}}var GN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!GN[t.type]:e==="textarea"}function OC(t,e,n,r){cC(r),e=nc(e,"onChange"),0<e.length&&(n=new eg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var aa=null,Na=null;function QN(t){HC(t,0)}function hh(t){var e=Es(t);if(rC(e))return t}function YN(t,e){if(t==="change")return e}var DC=!1;if(ur){var Ad;if(ur){var Pd="oninput"in document;if(!Pd){var __=document.createElement("div");__.setAttribute("oninput","return;"),Pd=typeof __.oninput=="function"}Ad=Pd}else Ad=!1;DC=Ad&&(!document.documentMode||9<document.documentMode)}function w_(){aa&&(aa.detachEvent("onpropertychange",MC),Na=aa=null)}function MC(t){if(t.propertyName==="value"&&hh(Na)){var e=[];OC(e,Na,t,Gm(t)),pC(QN,e)}}function XN(t,e,n){t==="focusin"?(w_(),aa=e,Na=n,aa.attachEvent("onpropertychange",MC)):t==="focusout"&&w_()}function JN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hh(Na)}function ZN(t,e){if(t==="click")return hh(e)}function eR(t,e){if(t==="input"||t==="change")return hh(e)}function tR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:tR;function Ra(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lf.call(e,i)||!On(t[i],e[i]))return!1}return!0}function E_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function C_(t,e){var n=E_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=E_(n)}}function LC(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?LC(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $C(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nR(t){var e=$C(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&LC(n.ownerDocument.documentElement,n)){if(r!==null&&rg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=C_(n,s);var o=C_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rR=ur&&"documentMode"in document&&11>=document.documentMode,_s=null,tp=null,la=null,np=!1;function T_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;np||_s==null||_s!==Qu(r)||(r=_s,"selectionStart"in r&&rg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&Ra(la,r)||(la=r,r=nc(tp,"onSelect"),0<r.length&&(e=new eg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Od={},FC={};ur&&(FC=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function dh(t){if(Od[t])return Od[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in FC)return Od[t]=e[n];return t}var UC=dh("animationend"),jC=dh("animationiteration"),VC=dh("animationstart"),BC=dh("transitionend"),zC=new Map,S_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(t,e){zC.set(t,e),ts(e,[t])}for(var Dd=0;Dd<S_.length;Dd++){var Md=S_[Dd],iR=Md.toLowerCase(),sR=Md[0].toUpperCase()+Md.slice(1);oi(iR,"on"+sR)}oi(UC,"onAnimationEnd");oi(jC,"onAnimationIteration");oi(VC,"onAnimationStart");oi("dblclick","onDoubleClick");oi("focusin","onFocus");oi("focusout","onBlur");oi(BC,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function I_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iN(r,e,void 0,t),t.currentTarget=null}function HC(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;I_(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;I_(i,a,u),s=l}}}if(Xu)throw t=Xf,Xu=!1,Xf=null,t}function ke(t,e){var n=e[ap];n===void 0&&(n=e[ap]=new Set);var r=t+"__bubble";n.has(r)||(WC(e,t,2,!1),n.add(r))}function Ld(t,e,n){var r=0;e&&(r|=4),WC(n,t,r,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[au]){t[au]=!0,JE.forEach(function(n){n!=="selectionchange"&&(oR.has(n)||Ld(n,!1,t),Ld(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[au]||(e[au]=!0,Ld("selectionchange",!1,e))}}function WC(t,e,n,r){switch(xC(e)){case 1:var i=wN;break;case 4:i=EN;break;default:i=Jm}n=i.bind(null,e,n,t),i=void 0,!Yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $d(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ci(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pC(function(){var u=s,c=Gm(n),h=[];e:{var d=zC.get(t);if(d!==void 0){var p=eg,g=t;switch(t){case"keypress":if(Au(n)===0)break e;case"keydown":case"keyup":p=LN;break;case"focusin":g="focus",p=Rd;break;case"focusout":g="blur",p=Rd;break;case"beforeblur":case"afterblur":p=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=f_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=SN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UN;break;case UC:case jC:case VC:p=bN;break;case BC:p=VN;break;case"scroll":p=CN;break;case"wheel":p=zN;break;case"copy":case"cut":case"paste":p=NN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=m_}var _=(e&4)!==0,E=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var y=u,v;y!==null;){v=y;var T=v.stateNode;if(v.tag===5&&T!==null&&(v=T,m!==null&&(T=Ia(y,m),T!=null&&_.push(Pa(y,T,v)))),E)break;y=y.return}0<_.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:_}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Gf&&(g=n.relatedTarget||n.fromElement)&&(Ci(g)||g[cr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Ci(g):null,g!==null&&(E=ns(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=f_,T="onMouseLeave",m="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(_=m_,T="onPointerLeave",m="onPointerEnter",y="pointer"),E=p==null?d:Es(p),v=g==null?d:Es(g),d=new _(T,y+"leave",p,n,c),d.target=E,d.relatedTarget=v,T=null,Ci(c)===u&&(_=new _(m,y+"enter",g,n,c),_.target=v,_.relatedTarget=E,T=_),E=T,p&&g)t:{for(_=p,m=g,y=0,v=_;v;v=hs(v))y++;for(v=0,T=m;T;T=hs(T))v++;for(;0<y-v;)_=hs(_),y--;for(;0<v-y;)m=hs(m),v--;for(;y--;){if(_===m||m!==null&&_===m.alternate)break t;_=hs(_),m=hs(m)}_=null}else _=null;p!==null&&k_(h,d,p,_,!1),g!==null&&E!==null&&k_(h,E,g,_,!0)}}e:{if(d=u?Es(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=YN;else if(v_(d))if(DC)S=eR;else{S=JN;var x=XN}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=ZN);if(S&&(S=S(t,u))){OC(h,S,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&zf(d,"number",d.value)}switch(x=u?Es(u):window,t){case"focusin":(v_(x)||x.contentEditable==="true")&&(_s=x,tp=u,la=null);break;case"focusout":la=tp=_s=null;break;case"mousedown":np=!0;break;case"contextmenu":case"mouseup":case"dragend":np=!1,T_(h,n,c);break;case"selectionchange":if(rR)break;case"keydown":case"keyup":T_(h,n,c)}var A;if(ng)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else vs?AC(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(RC&&n.locale!=="ko"&&(vs||D!=="onCompositionStart"?D==="onCompositionEnd"&&vs&&(A=NC()):($r=c,Zm="value"in $r?$r.value:$r.textContent,vs=!0)),x=nc(u,D),0<x.length&&(D=new p_(D,t,null,n,c),h.push({event:D,listeners:x}),A?D.data=A:(A=PC(n),A!==null&&(D.data=A)))),(A=WN?KN(t,n):qN(t,n))&&(u=nc(u,"onBeforeInput"),0<u.length&&(c=new p_("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}HC(h,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ia(t,n),s!=null&&r.unshift(Pa(t,s,i)),s=Ia(t,e),s!=null&&r.push(Pa(t,s,i))),t=t.return}return r}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function k_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ia(n,s),l!=null&&o.unshift(Pa(n,l,a))):i||(l=Ia(n,s),l!=null&&o.push(Pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aR=/\r\n?/g,lR=/\u0000|\uFFFD/g;function b_(t){return(typeof t=="string"?t:""+t).replace(aR,`
`).replace(lR,"")}function lu(t,e,n){if(e=b_(e),b_(t)!==e&&n)throw Error(b(425))}function rc(){}var rp=null,ip=null;function sp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var op=typeof setTimeout=="function"?setTimeout:void 0,uR=typeof clearTimeout=="function"?clearTimeout:void 0,x_=typeof Promise=="function"?Promise:void 0,cR=typeof queueMicrotask=="function"?queueMicrotask:typeof x_<"u"?function(t){return x_.resolve(null).then(t).catch(hR)}:op;function hR(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xa(e)}function zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function N_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),$n="__reactFiber$"+po,Oa="__reactProps$"+po,cr="__reactContainer$"+po,ap="__reactEvents$"+po,dR="__reactListeners$"+po,fR="__reactHandles$"+po;function Ci(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=N_(t);t!==null;){if(n=t[$n])return n;t=N_(t)}return e}t=n,n=t.parentNode}return null}function yl(t){return t=t[$n]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function fh(t){return t[Oa]||null}var lp=[],Cs=-1;function ai(t){return{current:t}}function xe(t){0>Cs||(t.current=lp[Cs],lp[Cs]=null,Cs--)}function Te(t,e){Cs++,lp[Cs]=t.current,t.current=e}var ei={},kt=ai(ei),Ht=ai(!1),$i=ei;function Gs(t,e){var n=t.type.contextTypes;if(!n)return ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function ic(){xe(Ht),xe(kt)}function R_(t,e,n){if(kt.current!==ei)throw Error(b(168));Te(kt,e),Te(Ht,n)}function KC(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,Xx(t)||"Unknown",i));return Me({},n,r)}function sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ei,$i=kt.current,Te(kt,t),Te(Ht,Ht.current),!0}function A_(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=KC(t,e,$i),r.__reactInternalMemoizedMergedChildContext=t,xe(Ht),xe(kt),Te(kt,t)):xe(Ht),Te(Ht,n)}var Yn=null,ph=!1,Ud=!1;function qC(t){Yn===null?Yn=[t]:Yn.push(t)}function pR(t){ph=!0,qC(t)}function li(){if(!Ud&&Yn!==null){Ud=!0;var t=0,e=_e;try{var n=Yn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Yn=null,ph=!1}catch(i){throw Yn!==null&&(Yn=Yn.slice(t+1)),vC(Qm,li),i}finally{_e=e,Ud=!1}}return null}var Ts=[],Ss=0,oc=null,ac=0,un=[],cn=0,Fi=null,Jn=1,Zn="";function pi(t,e){Ts[Ss++]=ac,Ts[Ss++]=oc,oc=t,ac=e}function GC(t,e,n){un[cn++]=Jn,un[cn++]=Zn,un[cn++]=Fi,Fi=t;var r=Jn;t=Zn;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Jn=1<<32-Rn(e)+i|n<<i|r,Zn=s+t}else Jn=1<<s|n<<i|r,Zn=t}function ig(t){t.return!==null&&(pi(t,1),GC(t,1,0))}function sg(t){for(;t===oc;)oc=Ts[--Ss],Ts[Ss]=null,ac=Ts[--Ss],Ts[Ss]=null;for(;t===Fi;)Fi=un[--cn],un[cn]=null,Zn=un[--cn],un[cn]=null,Jn=un[--cn],un[cn]=null}var en=null,Zt=null,Ne=!1,Tn=null;function QC(t,e){var n=hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function P_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Zt=zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fi!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Zt=null,!0):!1;default:return!1}}function up(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cp(t){if(Ne){var e=Zt;if(e){var n=e;if(!P_(t,e)){if(up(t))throw Error(b(418));e=zr(n.nextSibling);var r=en;e&&P_(t,e)?QC(r,n):(t.flags=t.flags&-4097|2,Ne=!1,en=t)}}else{if(up(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ne=!1,en=t}}}function O_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function uu(t){if(t!==en)return!1;if(!Ne)return O_(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sp(t.type,t.memoizedProps)),e&&(e=Zt)){if(up(t))throw YC(),Error(b(418));for(;e;)QC(t,e),e=zr(e.nextSibling)}if(O_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=en?zr(t.stateNode.nextSibling):null;return!0}function YC(){for(var t=Zt;t;)t=zr(t.nextSibling)}function Qs(){Zt=en=null,Ne=!1}function og(t){Tn===null?Tn=[t]:Tn.push(t)}var mR=_r.ReactCurrentBatchConfig;function En(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lc=ai(null),uc=null,Is=null,ag=null;function lg(){ag=Is=uc=null}function ug(t){var e=lc.current;xe(lc),t._currentValue=e}function hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){uc=t,ag=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(jt=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(ag!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(uc===null)throw Error(b(308));Is=t,uc.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var Ti=null;function cg(t){Ti===null?Ti=[t]:Ti.push(t)}function XC(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cg(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function hg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function JC(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(pe&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,cg(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function Pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ym(t,n)}}function D_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cc(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Me({},h,d);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ji|=o,t.lanes=o,t.memoizedState=h}}function M_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var ZC=new XE.Component().refs;function dp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mh={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Kr(t),s=ir(r,i);s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(An(e,t,i,r),Pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Kr(t),s=ir(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hr(t,s,i),e!==null&&(An(e,t,i,r),Pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=Kr(t),i=ir(n,r);i.tag=2,e!=null&&(i.callback=e),e=Hr(t,i,r),e!==null&&(An(e,t,r,n),Pu(e,t,r))}};function L_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,s):!0}function eT(t,e,n){var r=!1,i=ei,s=e.contextType;return typeof s=="object"&&s!==null?s=mn(s):(i=Wt(e)?$i:kt.current,r=e.contextTypes,s=(r=r!=null)?Gs(t,i):ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mh.enqueueReplaceState(e,e.state,null)}function fp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ZC,hg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=mn(s):(s=Wt(e)?$i:kt.current,i.context=Gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mh.enqueueReplaceState(i,i.state,null),cc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===ZC&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function cu(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function F_(t){var e=t._init;return e(t._payload)}function tT(t){function e(m,y){if(t){var v=m.deletions;v===null?(m.deletions=[y],m.flags|=16):v.push(y)}}function n(m,y){if(!t)return null;for(;y!==null;)e(m,y),y=y.sibling;return null}function r(m,y){for(m=new Map;y!==null;)y.key!==null?m.set(y.key,y):m.set(y.index,y),y=y.sibling;return m}function i(m,y){return m=qr(m,y),m.index=0,m.sibling=null,m}function s(m,y,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<y?(m.flags|=2,y):v):(m.flags|=2,y)):(m.flags|=1048576,y)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,y,v,T){return y===null||y.tag!==6?(y=Kd(v,m.mode,T),y.return=m,y):(y=i(y,v),y.return=m,y)}function l(m,y,v,T){var S=v.type;return S===ys?c(m,y,v.props.children,T,v.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xr&&F_(S)===y.type)?(T=i(y,v.props),T.ref=Lo(m,y,v),T.return=m,T):(T=Fu(v.type,v.key,v.props,null,m.mode,T),T.ref=Lo(m,y,v),T.return=m,T)}function u(m,y,v,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=qd(v,m.mode,T),y.return=m,y):(y=i(y,v.children||[]),y.return=m,y)}function c(m,y,v,T,S){return y===null||y.tag!==7?(y=Ai(v,m.mode,T,S),y.return=m,y):(y=i(y,v),y.return=m,y)}function h(m,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Kd(""+y,m.mode,v),y.return=m,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zl:return v=Fu(y.type,y.key,y.props,null,m.mode,v),v.ref=Lo(m,null,y),v.return=m,v;case gs:return y=qd(y,m.mode,v),y.return=m,y;case xr:var T=y._init;return h(m,T(y._payload),v)}if(Go(y)||Ao(y))return y=Ai(y,m.mode,v,null),y.return=m,y;cu(m,y)}return null}function d(m,y,v,T){var S=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(m,y,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zl:return v.key===S?l(m,y,v,T):null;case gs:return v.key===S?u(m,y,v,T):null;case xr:return S=v._init,d(m,y,S(v._payload),T)}if(Go(v)||Ao(v))return S!==null?null:c(m,y,v,T,null);cu(m,v)}return null}function p(m,y,v,T,S){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(v)||null,a(y,m,""+T,S);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zl:return m=m.get(T.key===null?v:T.key)||null,l(y,m,T,S);case gs:return m=m.get(T.key===null?v:T.key)||null,u(y,m,T,S);case xr:var x=T._init;return p(m,y,v,x(T._payload),S)}if(Go(T)||Ao(T))return m=m.get(v)||null,c(y,m,T,S,null);cu(y,T)}return null}function g(m,y,v,T){for(var S=null,x=null,A=y,D=y=0,B=null;A!==null&&D<v.length;D++){A.index>D?(B=A,A=null):B=A.sibling;var Y=d(m,A,v[D],T);if(Y===null){A===null&&(A=B);break}t&&A&&Y.alternate===null&&e(m,A),y=s(Y,y,D),x===null?S=Y:x.sibling=Y,x=Y,A=B}if(D===v.length)return n(m,A),Ne&&pi(m,D),S;if(A===null){for(;D<v.length;D++)A=h(m,v[D],T),A!==null&&(y=s(A,y,D),x===null?S=A:x.sibling=A,x=A);return Ne&&pi(m,D),S}for(A=r(m,A);D<v.length;D++)B=p(A,m,D,v[D],T),B!==null&&(t&&B.alternate!==null&&A.delete(B.key===null?D:B.key),y=s(B,y,D),x===null?S=B:x.sibling=B,x=B);return t&&A.forEach(function(re){return e(m,re)}),Ne&&pi(m,D),S}function _(m,y,v,T){var S=Ao(v);if(typeof S!="function")throw Error(b(150));if(v=S.call(v),v==null)throw Error(b(151));for(var x=S=null,A=y,D=y=0,B=null,Y=v.next();A!==null&&!Y.done;D++,Y=v.next()){A.index>D?(B=A,A=null):B=A.sibling;var re=d(m,A,Y.value,T);if(re===null){A===null&&(A=B);break}t&&A&&re.alternate===null&&e(m,A),y=s(re,y,D),x===null?S=re:x.sibling=re,x=re,A=B}if(Y.done)return n(m,A),Ne&&pi(m,D),S;if(A===null){for(;!Y.done;D++,Y=v.next())Y=h(m,Y.value,T),Y!==null&&(y=s(Y,y,D),x===null?S=Y:x.sibling=Y,x=Y);return Ne&&pi(m,D),S}for(A=r(m,A);!Y.done;D++,Y=v.next())Y=p(A,m,D,Y.value,T),Y!==null&&(t&&Y.alternate!==null&&A.delete(Y.key===null?D:Y.key),y=s(Y,y,D),x===null?S=Y:x.sibling=Y,x=Y);return t&&A.forEach(function(Nt){return e(m,Nt)}),Ne&&pi(m,D),S}function E(m,y,v,T){if(typeof v=="object"&&v!==null&&v.type===ys&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Zl:e:{for(var S=v.key,x=y;x!==null;){if(x.key===S){if(S=v.type,S===ys){if(x.tag===7){n(m,x.sibling),y=i(x,v.props.children),y.return=m,m=y;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xr&&F_(S)===x.type){n(m,x.sibling),y=i(x,v.props),y.ref=Lo(m,x,v),y.return=m,m=y;break e}n(m,x);break}else e(m,x);x=x.sibling}v.type===ys?(y=Ai(v.props.children,m.mode,T,v.key),y.return=m,m=y):(T=Fu(v.type,v.key,v.props,null,m.mode,T),T.ref=Lo(m,y,v),T.return=m,m=T)}return o(m);case gs:e:{for(x=v.key;y!==null;){if(y.key===x)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){n(m,y.sibling),y=i(y,v.children||[]),y.return=m,m=y;break e}else{n(m,y);break}else e(m,y);y=y.sibling}y=qd(v,m.mode,T),y.return=m,m=y}return o(m);case xr:return x=v._init,E(m,y,x(v._payload),T)}if(Go(v))return g(m,y,v,T);if(Ao(v))return _(m,y,v,T);cu(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(n(m,y.sibling),y=i(y,v),y.return=m,m=y):(n(m,y),y=Kd(v,m.mode,T),y.return=m,m=y),o(m)):n(m,y)}return E}var Ys=tT(!0),nT=tT(!1),vl={},Vn=ai(vl),Da=ai(vl),Ma=ai(vl);function Si(t){if(t===vl)throw Error(b(174));return t}function dg(t,e){switch(Te(Ma,e),Te(Da,t),Te(Vn,vl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wf(e,t)}xe(Vn),Te(Vn,e)}function Xs(){xe(Vn),xe(Da),xe(Ma)}function rT(t){Si(Ma.current);var e=Si(Vn.current),n=Wf(e,t.type);e!==n&&(Te(Da,t),Te(Vn,n))}function fg(t){Da.current===t&&(xe(Vn),xe(Da))}var Oe=ai(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function pg(){for(var t=0;t<jd.length;t++)jd[t]._workInProgressVersionPrimary=null;jd.length=0}var Ou=_r.ReactCurrentDispatcher,Vd=_r.ReactCurrentBatchConfig,Ui=0,De=null,Ge=null,rt=null,dc=!1,ua=!1,La=0,gR=0;function yt(){throw Error(b(321))}function mg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function gg(t,e,n,r,i,s){if(Ui=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ou.current=t===null||t.memoizedState===null?wR:ER,t=n(r,i),ua){s=0;do{if(ua=!1,La=0,25<=s)throw Error(b(301));s+=1,rt=Ge=null,e.updateQueue=null,Ou.current=CR,t=n(r,i)}while(ua)}if(Ou.current=fc,e=Ge!==null&&Ge.next!==null,Ui=0,rt=Ge=De=null,dc=!1,e)throw Error(b(300));return t}function yg(){var t=La!==0;return La=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?De.memoizedState=rt=t:rt=rt.next=t,rt}function gn(){if(Ge===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=rt===null?De.memoizedState:rt.next;if(e!==null)rt=e,Ge=t;else{if(t===null)throw Error(b(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},rt===null?De.memoizedState=rt=t:rt=rt.next=t}return rt}function $a(t,e){return typeof e=="function"?e(t):e}function Bd(t){var e=gn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ui&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,De.lanes|=c,ji|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,On(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zd(t){var e=gn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);On(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iT(){}function sT(t,e){var n=De,r=gn(),i=e(),s=!On(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,vg(lT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,aT.bind(null,n,r,i,e),void 0,null),ot===null)throw Error(b(349));(Ui&30)!==0||oT(n,e,i)}return i}function oT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aT(t,e,n,r){e.value=n,e.getSnapshot=r,uT(e)&&cT(t)}function lT(t,e,n){return n(function(){uT(e)&&cT(t)})}function uT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function cT(t){var e=hr(t,1);e!==null&&An(e,t,1,-1)}function U_(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},e.queue=t,t=t.dispatch=_R.bind(null,De,t),[e.memoizedState,t]}function Fa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hT(){return gn().memoizedState}function Du(t,e,n,r){var i=Ln();De.flags|=t,i.memoizedState=Fa(1|e,n,void 0,r===void 0?null:r)}function gh(t,e,n,r){var i=gn();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&mg(r,o.deps)){i.memoizedState=Fa(e,n,s,r);return}}De.flags|=t,i.memoizedState=Fa(1|e,n,s,r)}function j_(t,e){return Du(8390656,8,t,e)}function vg(t,e){return gh(2048,8,t,e)}function dT(t,e){return gh(4,2,t,e)}function fT(t,e){return gh(4,4,t,e)}function pT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mT(t,e,n){return n=n!=null?n.concat([t]):null,gh(4,4,pT.bind(null,e,t),n)}function _g(){}function gT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vT(t,e,n){return(Ui&21)===0?(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n):(On(n,e)||(n=EC(),De.lanes|=n,ji|=n,t.baseState=!0),e)}function yR(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Vd.transition;Vd.transition={};try{t(!1),e()}finally{_e=n,Vd.transition=r}}function _T(){return gn().memoizedState}function vR(t,e,n){var r=Kr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wT(t))ET(e,n);else if(n=XC(t,e,n,r),n!==null){var i=Ot();An(n,t,r,i),CT(n,e,r)}}function _R(t,e,n){var r=Kr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wT(t))ET(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(i.next=i,cg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=XC(t,e,i,r),n!==null&&(i=Ot(),An(n,t,r,i),CT(n,e,r))}}function wT(t){var e=t.alternate;return t===De||e!==null&&e===De}function ET(t,e){ua=dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function CT(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ym(t,n)}}var fc={readContext:mn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},wR={readContext:mn,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:j_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Du(4194308,4,pT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Du(4194308,4,t,e)},useInsertionEffect:function(t,e){return Du(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vR.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:U_,useDebugValue:_g,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=U_(!1),e=t[0];return t=yR.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=Ln();if(Ne){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),ot===null)throw Error(b(349));(Ui&30)!==0||oT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,j_(lT.bind(null,r,s,t),[t]),r.flags|=2048,Fa(9,aT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=ot.identifierPrefix;if(Ne){var n=Zn,r=Jn;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ER={readContext:mn,useCallback:gT,useContext:mn,useEffect:vg,useImperativeHandle:mT,useInsertionEffect:dT,useLayoutEffect:fT,useMemo:yT,useReducer:Bd,useRef:hT,useState:function(){return Bd($a)},useDebugValue:_g,useDeferredValue:function(t){var e=gn();return vT(e,Ge.memoizedState,t)},useTransition:function(){var t=Bd($a)[0],e=gn().memoizedState;return[t,e]},useMutableSource:iT,useSyncExternalStore:sT,useId:_T,unstable_isNewReconciler:!1},CR={readContext:mn,useCallback:gT,useContext:mn,useEffect:vg,useImperativeHandle:mT,useInsertionEffect:dT,useLayoutEffect:fT,useMemo:yT,useReducer:zd,useRef:hT,useState:function(){return zd($a)},useDebugValue:_g,useDeferredValue:function(t){var e=gn();return Ge===null?e.memoizedState=t:vT(e,Ge.memoizedState,t)},useTransition:function(){var t=zd($a)[0],e=gn().memoizedState;return[t,e]},useMutableSource:iT,useSyncExternalStore:sT,useId:_T,unstable_isNewReconciler:!1};function Js(t,e){try{var n="",r=e;do n+=Yx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hd(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function pp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TR=typeof WeakMap=="function"?WeakMap:Map;function TT(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){mc||(mc=!0,Sp=r),pp(t,e)},n}function ST(t,e,n){n=ir(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){pp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pp(t,e),typeof r!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function V_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$R.bind(null,t,e,n),e.then(t,t))}function B_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function z_(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,Hr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var SR=_r.ReactCurrentOwner,jt=!1;function At(t,e,n,r){e.child=t===null?nT(e,null,n,r):Ys(e,t.child,n,r)}function H_(t,e,n,r,i){n=n.render;var s=e.ref;return Fs(e,i),r=gg(t,e,n,r,s,i),n=yg(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Ne&&n&&ig(e),e.flags|=1,At(t,e,r,i),e.child)}function W_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,IT(t,e,s,r,i)):(t=Fu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function IT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ra(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(jt=!0);else return e.lanes=t.lanes,dr(t,e,i)}return mp(t,e,n,r,i)}function kT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(bs,Xt),Xt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(bs,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(bs,Xt),Xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(bs,Xt),Xt|=r;return At(t,e,i,n),e.child}function bT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mp(t,e,n,r,i){var s=Wt(n)?$i:kt.current;return s=Gs(e,s),Fs(e,i),n=gg(t,e,n,r,s,i),r=yg(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(Ne&&r&&ig(e),e.flags|=1,At(t,e,n,i),e.child)}function K_(t,e,n,r,i){if(Wt(n)){var s=!0;sc(e)}else s=!1;if(Fs(e,i),e.stateNode===null)Mu(t,e),eT(e,n,r),fp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=mn(u):(u=Wt(n)?$i:kt.current,u=Gs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$_(e,o,r,u),Nr=!1;var d=e.memoizedState;o.state=d,cc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ht.current||Nr?(typeof c=="function"&&(dp(e,n,c,r),l=e.memoizedState),(a=Nr||L_(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,JC(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=mn(l):(l=Wt(n)?$i:kt.current,l=Gs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&$_(e,o,r,l),Nr=!1,d=e.memoizedState,o.state=d,cc(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Ht.current||Nr?(typeof p=="function"&&(dp(e,n,p,r),g=e.memoizedState),(u=Nr||L_(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return gp(t,e,n,r,s,i)}function gp(t,e,n,r,i,s){bT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&A_(e,n,!1),dr(t,e,s);r=e.stateNode,SR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,s),e.child=Ys(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&A_(e,n,!0),e.child}function xT(t){var e=t.stateNode;e.pendingContext?R_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&R_(t,e.context,!1),dg(t,e.containerInfo)}function q_(t,e,n,r,i){return Qs(),og(i),e.flags|=256,At(t,e,n,r),e.child}var yp={dehydrated:null,treeContext:null,retryLane:0};function vp(t){return{baseLanes:t,cachePool:null,transitions:null}}function NT(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Oe,i&1),t===null)return cp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_h(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vp(n),e.memoizedState=yp,t):wg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qr(a,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yp,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wg(t,e){return e=_h({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hu(t,e,n,r){return r!==null&&og(r),Ys(e,t.child,null,n),t=wg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hd(Error(b(422))),hu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_h({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ys(e,t.child,null,o),e.child.memoizedState=vp(o),e.memoizedState=yp,s);if((e.mode&1)===0)return hu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=Hd(s,r,void 0),hu(t,e,o,r)}if(a=(o&t.childLanes)!==0,jt||a){if(r=ot,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),An(r,t,i,-1))}return kg(),r=Hd(Error(b(421))),hu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zt=zr(i.nextSibling),en=e,Ne=!0,Tn=null,t!==null&&(un[cn++]=Jn,un[cn++]=Zn,un[cn++]=Fi,Jn=t.id,Zn=t.overflow,Fi=e),e=wg(e,r.children),e.flags|=4096,e)}function G_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hp(t.return,e,n)}function Wd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function RT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=Oe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&G_(t,n,e);else if(t.tag===19)G_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Oe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wd(e,!0,n,null,s);break;case"together":Wd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mu(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ji|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kR(t,e,n){switch(e.tag){case 3:xT(e),Qs();break;case 5:rT(e);break;case 1:Wt(e.type)&&sc(e);break;case 4:dg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Oe,Oe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?NT(t,e,n):(Te(Oe,Oe.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Te(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return RT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,kT(t,e,n)}return dr(t,e,n)}var AT,_p,PT,OT;AT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_p=function(){};PT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Si(Vn.current);var s=null;switch(n){case"input":i=Vf(t,i),r=Vf(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Hf(t,i),r=Hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rc)}Kf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};OT=function(t,e,n,r){n!==r&&(e.flags|=4)};function $o(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bR(t,e,n){var r=e.pendingProps;switch(sg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Wt(e.type)&&ic(),vt(e),null;case 3:return r=e.stateNode,Xs(),xe(Ht),xe(kt),pg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tn!==null&&(bp(Tn),Tn=null))),_p(t,e),vt(e),null;case 5:fg(e);var i=Si(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)PT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return vt(e),null}if(t=Si(Vn.current),uu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Yo.length;i++)ke(Yo[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":r_(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":s_(r,s),ke("invalid",r)}Kf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":eu(r),i_(r,s,!0);break;case"textarea":eu(r),o_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=oC(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[Oa]=r,AT(t,e,!1,!1),e.stateNode=t;e:{switch(o=qf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Yo.length;i++)ke(Yo[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":r_(t,r),i=Vf(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),ke("invalid",t);break;case"textarea":s_(t,r),i=Hf(t,r),ke("invalid",t);break;default:i=r}Kf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uC(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&aC(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sa(t,l):typeof l=="number"&&Sa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ke("scroll",t):l!=null&&Hm(t,s,l,o))}switch(n){case"input":eu(t),i_(t,r,!1);break;case"textarea":eu(t),o_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)OT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Si(Ma.current),Si(Vn.current),uu(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return vt(e),null;case 13:if(xe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Zt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)YC(),Qs(),e.flags|=98560,s=!1;else if(s=uu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[$n]=e}else Qs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else Tn!==null&&(bp(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Oe.current&1)!==0?Ye===0&&(Ye=3):kg())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Xs(),_p(t,e),t===null&&Aa(e.stateNode.containerInfo),vt(e),null;case 10:return ug(e.type._context),vt(e),null;case 17:return Wt(e.type)&&ic(),vt(e),null;case 19:if(xe(Oe),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$o(s,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,$o(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ve()>Zs&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304)}else{if(!r)if(t=hc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return vt(e),null}else 2*Ve()-s.renderingStartTime>Zs&&n!==1073741824&&(e.flags|=128,r=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ve(),e.sibling=null,n=Oe.current,Te(Oe,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Ig(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Xt&1073741824)!==0&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function xR(t,e){switch(sg(e),e.tag){case 1:return Wt(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),xe(Ht),xe(kt),pg(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return fg(e),null;case 13:if(xe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(Oe),null;case 4:return Xs(),null;case 10:return ug(e.type._context),null;case 22:case 23:return Ig(),null;case 24:return null;default:return null}}var du=!1,wt=!1,NR=typeof WeakSet=="function"?WeakSet:Set,L=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function wp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Q_=!1;function RR(t,e){if(rp=ec,t=$C(),rg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ip={focusedElem:t,selectionRange:n},ec=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,E=g.memoizedState,m=e.stateNode,y=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:En(e.type,_),E);m.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(T){Le(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return g=Q_,Q_=!1,g}function ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wp(e,n,s)}i=i.next}while(i!==r)}}function yh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function DT(t){var e=t.alternate;e!==null&&(t.alternate=null,DT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Oa],delete e[ap],delete e[dR],delete e[fR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function MT(t){return t.tag===5||t.tag===3||t.tag===4}function Y_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||MT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(r!==4&&(t=t.child,t!==null))for(Cp(t,e,n),t=t.sibling;t!==null;)Cp(t,e,n),t=t.sibling}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}var ut=null,Cn=!1;function Ir(t,e,n){for(n=n.child;n!==null;)LT(t,e,n),n=n.sibling}function LT(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(uh,n)}catch{}switch(n.tag){case 5:wt||ks(n,e);case 6:var r=ut,i=Cn;ut=null,Ir(t,e,n),ut=r,Cn=i,ut!==null&&(Cn?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(Cn?(t=ut,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),xa(t)):Fd(ut,n.stateNode));break;case 4:r=ut,i=Cn,ut=n.stateNode.containerInfo,Cn=!0,Ir(t,e,n),ut=r,Cn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&wp(n,e,o),i=i.next}while(i!==r)}Ir(t,e,n);break;case 1:if(!wt&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,Ir(t,e,n),wt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function X_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NR),e.forEach(function(r){var i=UR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ut=a.stateNode,Cn=!1;break e;case 3:ut=a.stateNode.containerInfo,Cn=!0;break e;case 4:ut=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(ut===null)throw Error(b(160));LT(s,o,i),ut=null,Cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Le(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$T(e,t),e=e.sibling}function $T(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Mn(t),r&4){try{ca(3,t,t.return),yh(3,t)}catch(_){Le(t,t.return,_)}try{ca(5,t,t.return)}catch(_){Le(t,t.return,_)}}break;case 1:wn(e,t),Mn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(wn(e,t),Mn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var i=t.stateNode;try{Sa(i,"")}catch(_){Le(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iC(i,s),qf(a,o);var u=qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?uC(i,h):c==="dangerouslySetInnerHTML"?aC(i,h):c==="children"?Sa(i,h):Hm(i,c,h,u)}switch(a){case"input":Bf(i,s);break;case"textarea":sC(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ds(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ds(i,!!s.multiple,s.defaultValue,!0):Ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(_){Le(t,t.return,_)}}break;case 6:if(wn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Le(t,t.return,_)}}break;case 3:if(wn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(_){Le(t,t.return,_)}break;case 4:wn(e,t),Mn(t);break;case 13:wn(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tg=Ve())),r&4&&X_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,wn(e,t),wt=u):wn(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,p=d.child,d.tag){case 0:case 11:case 14:case 15:ca(4,d,d.return);break;case 1:ks(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Le(r,n,_)}}break;case 5:ks(d,d.return);break;case 22:if(d.memoizedState!==null){Z_(h);continue}}p!==null?(p.return=d,L=p):Z_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lC("display",o))}catch(_){Le(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Le(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wn(e,t),Mn(t),r&4&&X_(t);break;case 21:break;default:wn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(MT(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sa(i,""),r.flags&=-33);var s=Y_(t);Tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Y_(t);Cp(t,a,o);break;default:throw Error(b(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AR(t,e,n){L=t,FT(t)}function FT(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||du;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=du;var u=wt;if(du=o,(wt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?ew(i):l!==null?(l.return=o,L=l):ew(i);for(;s!==null;)L=s,FT(s),s=s.sibling;L=i,du=a,wt=u}J_(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):J_(t)}}function J_(t){for(;L!==null;){var e=L;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:wt||yh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&M_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}M_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}wt||e.flags&512&&Ep(e)}catch(d){Le(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Z_(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function ew(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Ep(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Ep(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var PR=Math.ceil,pc=_r.ReactCurrentDispatcher,Eg=_r.ReactCurrentOwner,dn=_r.ReactCurrentBatchConfig,pe=0,ot=null,He=null,ft=0,Xt=0,bs=ai(0),Ye=0,Ua=null,ji=0,vh=0,Cg=0,ha=null,$t=null,Tg=0,Zs=1/0,Qn=null,mc=!1,Sp=null,Wr=null,fu=!1,Fr=null,gc=0,da=0,Ip=null,Lu=-1,$u=0;function Ot(){return(pe&6)!==0?Ve():Lu!==-1?Lu:Lu=Ve()}function Kr(t){return(t.mode&1)===0?1:(pe&2)!==0&&ft!==0?ft&-ft:mR.transition!==null?($u===0&&($u=EC()),$u):(t=_e,t!==0||(t=window.event,t=t===void 0?16:xC(t.type)),t)}function An(t,e,n,r){if(50<da)throw da=0,Ip=null,Error(b(185));ml(t,n,r),((pe&2)===0||t!==ot)&&(t===ot&&((pe&2)===0&&(vh|=n),Ye===4&&Pr(t,ft)),Kt(t,r),n===1&&pe===0&&(e.mode&1)===0&&(Zs=Ve()+500,ph&&li()))}function Kt(t,e){var n=t.callbackNode;mN(t,e);var r=Zu(t,t===ot?ft:0);if(r===0)n!==null&&u_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&u_(n),e===1)t.tag===0?pR(tw.bind(null,t)):qC(tw.bind(null,t)),cR(function(){(pe&6)===0&&li()}),n=null;else{switch(CC(r)){case 1:n=Qm;break;case 4:n=_C;break;case 16:n=Ju;break;case 536870912:n=wC;break;default:n=Ju}n=KT(n,UT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function UT(t,e){if(Lu=-1,$u=0,(pe&6)!==0)throw Error(b(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=Zu(t,t===ot?ft:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=yc(t,r);else{e=r;var i=pe;pe|=2;var s=VT();(ot!==t||ft!==e)&&(Qn=null,Zs=Ve()+500,Ri(t,e));do try{MR();break}catch(a){jT(t,a)}while(1);lg(),pc.current=s,pe=i,He!==null?e=0:(ot=null,ft=0,e=Ye)}if(e!==0){if(e===2&&(i=Jf(t),i!==0&&(r=i,e=kp(t,i))),e===1)throw n=Ua,Ri(t,0),Pr(t,r),Kt(t,Ve()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!OR(i)&&(e=yc(t,r),e===2&&(s=Jf(t),s!==0&&(r=s,e=kp(t,s))),e===1))throw n=Ua,Ri(t,0),Pr(t,r),Kt(t,Ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:mi(t,$t,Qn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Tg+500-Ve(),10<e)){if(Zu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=op(mi.bind(null,t,$t,Qn),e);break}mi(t,$t,Qn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PR(r/1960))-r,10<r){t.timeoutHandle=op(mi.bind(null,t,$t,Qn),r);break}mi(t,$t,Qn);break;case 5:mi(t,$t,Qn);break;default:throw Error(b(329))}}}return Kt(t,Ve()),t.callbackNode===n?UT.bind(null,t):null}function kp(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Ri(t,e).flags|=256),t=yc(t,e),t!==2&&(e=$t,$t=n,e!==null&&bp(e)),t}function bp(t){$t===null?$t=t:$t.push.apply($t,t)}function OR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!On(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~Cg,e&=~vh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function tw(t){if((pe&6)!==0)throw Error(b(327));Us();var e=Zu(t,0);if((e&1)===0)return Kt(t,Ve()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var r=Jf(t);r!==0&&(e=r,n=kp(t,r))}if(n===1)throw n=Ua,Ri(t,0),Pr(t,e),Kt(t,Ve()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mi(t,$t,Qn),Kt(t,Ve()),null}function Sg(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Zs=Ve()+500,ph&&li())}}function Vi(t){Fr!==null&&Fr.tag===0&&(pe&6)===0&&Us();var e=pe;pe|=1;var n=dn.transition,r=_e;try{if(dn.transition=null,_e=1,t)return t()}finally{_e=r,dn.transition=n,pe=e,(pe&6)===0&&li()}}function Ig(){Xt=bs.current,xe(bs)}function Ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uR(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(sg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ic();break;case 3:Xs(),xe(Ht),xe(kt),pg();break;case 5:fg(r);break;case 4:Xs();break;case 13:xe(Oe);break;case 19:xe(Oe);break;case 10:ug(r.type._context);break;case 22:case 23:Ig()}n=n.return}if(ot=t,He=t=qr(t.current,null),ft=Xt=e,Ye=0,Ua=null,Cg=vh=ji=0,$t=ha=null,Ti!==null){for(e=0;e<Ti.length;e++)if(n=Ti[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ti=null}return t}function jT(t,e){do{var n=He;try{if(lg(),Ou.current=fc,dc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dc=!1}if(Ui=0,rt=Ge=De=null,ua=!1,La=0,Eg.current=null,n===null||n.return===null){Ye=1,Ua=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=B_(o);if(p!==null){p.flags&=-257,z_(p,o,a,s,e),p.mode&1&&V_(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if((e&1)===0){V_(s,u,e),kg();break e}l=Error(b(426))}}else if(Ne&&a.mode&1){var E=B_(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),z_(E,o,a,s,e),og(Js(l,a));break e}}s=l=Js(l,a),Ye!==4&&(Ye=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=TT(s,l,e);D_(s,m);break e;case 1:a=l;var y=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Wr===null||!Wr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=ST(s,a,e);D_(s,T);break e}}s=s.return}while(s!==null)}zT(n)}catch(S){e=S,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function VT(){var t=pc.current;return pc.current=fc,t===null?fc:t}function kg(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),ot===null||(ji&268435455)===0&&(vh&268435455)===0||Pr(ot,ft)}function yc(t,e){var n=pe;pe|=2;var r=VT();(ot!==t||ft!==e)&&(Qn=null,Ri(t,e));do try{DR();break}catch(i){jT(t,i)}while(1);if(lg(),pe=n,pc.current=r,He!==null)throw Error(b(261));return ot=null,ft=0,Ye}function DR(){for(;He!==null;)BT(He)}function MR(){for(;He!==null&&!oN();)BT(He)}function BT(t){var e=WT(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?zT(t):He=e,Eg.current=null}function zT(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=bR(n,e,Xt),n!==null){He=n;return}}else{if(n=xR(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function mi(t,e,n){var r=_e,i=dn.transition;try{dn.transition=null,_e=1,LR(t,e,n,r)}finally{dn.transition=i,_e=r}return null}function LR(t,e,n,r){do Us();while(Fr!==null);if((pe&6)!==0)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gN(t,s),t===ot&&(He=ot=null,ft=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fu||(fu=!0,KT(Ju,function(){return Us(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=dn.transition,dn.transition=null;var o=_e;_e=1;var a=pe;pe|=4,Eg.current=null,RR(t,n),$T(n,t),nR(ip),ec=!!rp,ip=rp=null,t.current=n,AR(n),aN(),pe=a,_e=o,dn.transition=s}else t.current=n;if(fu&&(fu=!1,Fr=t,gc=i),s=t.pendingLanes,s===0&&(Wr=null),cN(n.stateNode),Kt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mc)throw mc=!1,t=Sp,Sp=null,t;return(gc&1)!==0&&t.tag!==0&&Us(),s=t.pendingLanes,(s&1)!==0?t===Ip?da++:(da=0,Ip=t):da=0,li(),null}function Us(){if(Fr!==null){var t=CC(gc),e=dn.transition,n=_e;try{if(dn.transition=null,_e=16>t?16:t,Fr===null)var r=!1;else{if(t=Fr,Fr=null,gc=0,(pe&6)!==0)throw Error(b(331));var i=pe;for(pe|=4,L=t.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:ca(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,p=c.return;if(DT(c),c===u){L=null;break}if(d!==null){d.return=p,L=d;break}L=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var y=t.current;for(L=y;L!==null;){o=L;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,L=v;else e:for(o=y;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:yh(9,a)}}catch(S){Le(a,a.return,S)}if(a===o){L=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,L=T;break e}L=a.return}}if(pe=i,li(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(uh,t)}catch{}r=!0}return r}finally{_e=n,dn.transition=e}}return!1}function nw(t,e,n){e=Js(n,e),e=TT(t,e,1),t=Hr(t,e,1),e=Ot(),t!==null&&(ml(t,1,e),Kt(t,e))}function Le(t,e,n){if(t.tag===3)nw(t,t,n);else for(;e!==null;){if(e.tag===3){nw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wr===null||!Wr.has(r))){t=Js(n,t),t=ST(e,t,1),e=Hr(e,t,1),t=Ot(),e!==null&&(ml(e,1,t),Kt(e,t));break}}e=e.return}}function $R(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(ft&n)===n&&(Ye===4||Ye===3&&(ft&130023424)===ft&&500>Ve()-Tg?Ri(t,0):Cg|=n),Kt(t,e)}function HT(t,e){e===0&&((t.mode&1)===0?e=1:(e=ru,ru<<=1,(ru&130023424)===0&&(ru=4194304)));var n=Ot();t=hr(t,e),t!==null&&(ml(t,e,n),Kt(t,n))}function FR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),HT(t,n)}function UR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),HT(t,n)}var WT;WT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)jt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return jt=!1,kR(t,e,n);jt=(t.flags&131072)!==0}else jt=!1,Ne&&(e.flags&1048576)!==0&&GC(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Mu(t,e),t=e.pendingProps;var i=Gs(e,kt.current);Fs(e,n),i=gg(null,e,r,t,i,n);var s=yg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,sc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hg(e),i.updater=mh,e.stateNode=i,i._reactInternals=e,fp(e,r,t,n),e=gp(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&ig(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Mu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=VR(r),t=En(r,t),i){case 0:e=mp(null,e,r,t,n);break e;case 1:e=K_(null,e,r,t,n);break e;case 11:e=H_(null,e,r,t,n);break e;case 14:e=W_(null,e,r,En(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),mp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),K_(t,e,r,i,n);case 3:e:{if(xT(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,JC(t,e),cc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Js(Error(b(423)),e),e=q_(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(b(424)),e),e=q_(t,e,r,n,i);break e}else for(Zt=zr(e.stateNode.containerInfo.firstChild),en=e,Ne=!0,Tn=null,n=nT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=dr(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return rT(e),t===null&&cp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,sp(r,i)?o=null:s!==null&&sp(r,s)&&(e.flags|=32),bT(t,e),At(t,e,o,n),e.child;case 6:return t===null&&cp(e),null;case 13:return NT(t,e,n);case 4:return dg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ys(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),H_(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(lc,r._currentValue),r._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===i.children&&!Ht.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ir(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=mn(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),W_(t,e,r,i,n);case 15:return IT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Mu(t,e),e.tag=1,Wt(r)?(t=!0,sc(e)):t=!1,Fs(e,n),eT(e,r,i),fp(e,r,i,n),gp(null,e,r,!0,t,n);case 19:return RT(t,e,n);case 22:return kT(t,e,n)}throw Error(b(156,e.tag))};function KT(t,e){return vC(t,e)}function jR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,r){return new jR(t,e,n,r)}function bg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VR(t){if(typeof t=="function")return bg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Km)return 11;if(t===qm)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")bg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Ai(n.children,i,s,e);case Wm:o=8,i|=8;break;case $f:return t=hn(12,n,e,i|2),t.elementType=$f,t.lanes=s,t;case Ff:return t=hn(13,n,e,i),t.elementType=Ff,t.lanes=s,t;case Uf:return t=hn(19,n,e,i),t.elementType=Uf,t.lanes=s,t;case tC:return _h(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ZE:o=10;break e;case eC:o=9;break e;case Km:o=11;break e;case qm:o=14;break e;case xr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=hn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=hn(7,t,r,e),t.lanes=n,t}function _h(t,e,n,r){return t=hn(22,t,r,e),t.elementType=tC,t.lanes=n,t.stateNode={isHidden:!1},t}function Kd(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function qd(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bd(0),this.expirationTimes=bd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xg(t,e,n,r,i,s,o,a,l){return t=new BR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hg(s),t}function zR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qT(t){if(!t)return ei;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Wt(n))return KC(t,n,e)}return e}function GT(t,e,n,r,i,s,o,a,l){return t=xg(n,r,!0,t,i,s,o,a,l),t.context=qT(null),n=t.current,r=Ot(),i=Kr(n),s=ir(r,i),s.callback=e!=null?e:null,Hr(n,s,i),t.current.lanes=i,ml(t,i,r),Kt(t,r),t}function wh(t,e,n,r){var i=e.current,s=Ot(),o=Kr(i);return n=qT(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Hr(i,e,o),t!==null&&(An(t,i,o,s),Pu(t,i,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ng(t,e){rw(t,e),(t=t.alternate)&&rw(t,e)}function HR(){return null}var QT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rg(t){this._internalRoot=t}Eh.prototype.render=Rg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));wh(t,e,null,null)};Eh.prototype.unmount=Rg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){wh(null,t,null,null)}),e[cr]=null}};function Eh(t){this._internalRoot=t}Eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=IC();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&bC(t)}};function Ag(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function iw(){}function WR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=vc(o);s.call(u)}}var o=GT(e,r,t,0,null,!1,!1,"",iw);return t._reactRootContainer=o,t[cr]=o.current,Aa(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=vc(l);a.call(u)}}var l=xg(t,0,!1,null,null,!1,!1,"",iw);return t._reactRootContainer=l,t[cr]=l.current,Aa(t.nodeType===8?t.parentNode:t),Vi(function(){wh(e,l,n,r)}),l}function Th(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=vc(o);a.call(l)}}wh(e,o,t,i)}else o=WR(n,e,t,i,r);return vc(o)}TC=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qo(e.pendingLanes);n!==0&&(Ym(e,n|1),Kt(e,Ve()),(pe&6)===0&&(Zs=Ve()+500,li()))}break;case 13:Vi(function(){var r=hr(t,1);if(r!==null){var i=Ot();An(r,t,1,i)}}),Ng(t,1)}};Xm=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Ot();An(e,t,134217728,n)}Ng(t,134217728)}};SC=function(t){if(t.tag===13){var e=Kr(t),n=hr(t,e);if(n!==null){var r=Ot();An(n,t,e,r)}Ng(t,e)}};IC=function(){return _e};kC=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Qf=function(t,e,n){switch(e){case"input":if(Bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fh(r);if(!i)throw Error(b(90));rC(r),Bf(r,i)}}}break;case"textarea":sC(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};dC=Sg;fC=Vi;var KR={usingClientEntryPoint:!1,Events:[yl,Es,fh,cC,hC,Sg]},Fo={findFiberByHostInstance:Ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qR={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gC(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||HR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{uh=pu.inject(qR),jn=pu}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KR;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ag(e))throw Error(b(200));return zR(t,e,null,n)};on.createRoot=function(t,e){if(!Ag(t))throw Error(b(299));var n=!1,r="",i=QT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xg(t,1,!1,null,null,n,!1,r,i),t[cr]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Rg(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=gC(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return Vi(t)};on.hydrate=function(t,e,n){if(!Ch(e))throw Error(b(200));return Th(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!Ag(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=QT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=GT(e,null,t,1,n!=null?n:null,i,!1,s,o),t[cr]=e.current,Aa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eh(e)};on.render=function(t,e,n){if(!Ch(e))throw Error(b(200));return Th(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!Ch(t))throw Error(b(40));return t._reactRootContainer?(Vi(function(){Th(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};on.unstable_batchedUpdates=Sg;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ch(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Th(t,e,n,!1,r)};on.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=on})(Vm);const xs=VE(Vm.exports);var sw=Vm.exports;Mf.createRoot=sw.createRoot,Mf.hydrateRoot=sw.hydrateRoot;/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _c(){return _c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_c.apply(this,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));const ow="popstate";function GR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return xp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Np(i)}return YR(e,n,null,t)}function QR(){return Math.random().toString(36).substr(2,8)}function aw(t){return{usr:t.state,key:t.key}}function xp(t,e,n,r){return n===void 0&&(n=null),_c({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mo(e):e,{state:n,key:e&&e.key||r||QR()})}function Np(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ur.Pop,l=null;function u(){a=Ur.Pop,l&&l({action:a,location:d.location})}function c(p,g){a=Ur.Push;let _=xp(d.location,p,g);n&&n(_,p);let E=aw(_),m=d.createHref(_);try{o.pushState(E,"",m)}catch{i.location.assign(m)}s&&l&&l({action:a,location:_})}function h(p,g){a=Ur.Replace;let _=xp(d.location,p,g);n&&n(_,p);let E=aw(_),m=d.createHref(_);o.replaceState(E,"",m),s&&l&&l({action:a,location:_})}let d={get action(){return a},get location(){return t(i,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ow,u),l=p,()=>{i.removeEventListener(ow,u),l=null}},createHref(p){return e(i,p)},push:c,replace:h,go(p){return o.go(p)}};return d}var lw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lw||(lw={}));function XR(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?mo(e):e,i=XT(r.pathname||"/",n);if(i==null)return null;let s=YT(t);JR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=aA(s[a],i);return o}function YT(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(Xe(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Gr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),YT(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:sA(a,i.index),routesMeta:l})}),e}function JR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZR=/^:\w+$/,eA=3,tA=2,nA=1,rA=10,iA=-2,uw=t=>t==="*";function sA(t,e){let n=t.split("/"),r=n.length;return n.some(uw)&&(r+=iA),e&&(r+=tA),n.filter(i=>!uw(i)).reduce((i,s)=>i+(ZR.test(s)?eA:s===""?nA:rA),r)}function oA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Gr([i,c.pathname]),pathnameBase:fA(Gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Gr([i,c.pathnameBase]))}return s}function lA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=uA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=cA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function uA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),JT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function cA(t,e){try{return decodeURIComponent(t)}catch(n){return JT(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function XT(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function JT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?mo(t):t;return{pathname:n?n.startsWith("/")?n:dA(n,e):e,search:pA(r),hash:mA(i)}}function dA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ZT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=mo(t):(i=_c({},t),Xe(!i.pathname||!i.pathname.includes("?"),Gd("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Gd("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Gd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=hA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Gr=t=>t.join("/").replace(/\/\/+/g,"/"),fA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class gA{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function yA(t){return t instanceof gA}var Sh={exports:{}},Ih={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vA=w.exports,_A=Symbol.for("react.element"),wA=Symbol.for("react.fragment"),EA=Object.prototype.hasOwnProperty,CA=vA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TA={key:!0,ref:!0,__self:!0,__source:!0};function eS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)EA.call(e,r)&&!TA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_A,type:t,key:s,ref:o,props:i,_owner:CA.current}}Ih.Fragment=wA;Ih.jsx=eS;Ih.jsxs=eS;(function(t){t.exports=Ih})(Sh);const j=Sh.exports.Fragment,f=Sh.exports.jsx,C=Sh.exports.jsxs;/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rp(){return Rp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rp.apply(this,arguments)}function SA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const IA=typeof Object.is=="function"?Object.is:SA,{useState:kA,useEffect:bA,useLayoutEffect:xA,useDebugValue:NA}=Df;function RA(t,e,n){const r=e(),[{inst:i},s]=kA({inst:{value:r,getSnapshot:e}});return xA(()=>{i.value=r,i.getSnapshot=e,Qd(i)&&s({inst:i})},[t,r,e]),bA(()=>(Qd(i)&&s({inst:i}),t(()=>{Qd(i)&&s({inst:i})})),[t]),NA(r),r}function Qd(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!IA(n,r)}catch{return!0}}function AA(t,e,n){return e()}const PA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OA=!PA,DA=OA?AA:RA;"useSyncExternalStore"in Df&&(t=>t.useSyncExternalStore)(Df);const MA=w.exports.createContext(null),LA=w.exports.createContext(null),Pg=w.exports.createContext(null),Og=w.exports.createContext(null),kh=w.exports.createContext(null),go=w.exports.createContext({outlet:null,matches:[]}),tS=w.exports.createContext(null);function $A(t,e){let{relative:n}=e===void 0?{}:e;yo()||Xe(!1);let{basename:r,navigator:i}=w.exports.useContext(Og),{hash:s,pathname:o,search:a}=rS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function yo(){return w.exports.useContext(kh)!=null}function bh(){return yo()||Xe(!1),w.exports.useContext(kh).location}function nS(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function rs(){yo()||Xe(!1);let{basename:t,navigator:e}=w.exports.useContext(Og),{matches:n}=w.exports.useContext(go),{pathname:r}=bh(),i=JSON.stringify(nS(n).map(a=>a.pathnameBase)),s=w.exports.useRef(!1);return w.exports.useEffect(()=>{s.current=!0}),w.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=ZT(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Gr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function FA(){let{matches:t}=w.exports.useContext(go),e=t[t.length-1];return e?e.params:{}}function rS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=w.exports.useContext(go),{pathname:i}=bh(),s=JSON.stringify(nS(r).map(o=>o.pathnameBase));return w.exports.useMemo(()=>ZT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function UA(t,e){yo()||Xe(!1);let n=w.exports.useContext(Pg),{matches:r}=w.exports.useContext(go),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=bh(),l;if(e){var u;let g=typeof e=="string"?mo(e):e;o==="/"||((u=g.pathname)==null?void 0:u.startsWith(o))||Xe(!1),l=g}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=XR(t,{pathname:h}),p=zA(d&&d.map(g=>Object.assign({},g,{params:Object.assign({},s,g.params),pathname:Gr([o,g.pathname]),pathnameBase:g.pathnameBase==="/"?o:Gr([o,g.pathnameBase])})),r,n||void 0);return e?f(kh.Provider,{value:{location:Rp({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Ur.Pop},children:p}):p}function jA(){let t=WA(),e=yA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return C(j,{children:[f("h2",{children:"Unhandled Thrown Error!"}),f("h3",{style:{fontStyle:"italic"},children:e}),n?f("pre",{style:i,children:n}):null,f("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),C("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",f("code",{style:s,children:"errorElement"})," props on\xA0",f("code",{style:s,children:"<Route>"})]})]})}class VA extends w.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?f(tS.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function BA(t){let{routeContext:e,match:n,children:r}=t,i=w.exports.useContext(MA);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),f(go.Provider,{value:e,children:r})}function zA(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Xe(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||f(jA,{}):null,c=()=>f(BA,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?f(VA,{location:n.location,component:u,error:l,children:c()}):c()},null)}var cw;(function(t){t.UseRevalidator="useRevalidator"})(cw||(cw={}));var Ap;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ap||(Ap={}));function HA(t){let e=w.exports.useContext(Pg);return e||Xe(!1),e}function WA(){var t;let e=w.exports.useContext(tS),n=HA(Ap.UseRouteError),r=w.exports.useContext(go),i=r.matches[r.matches.length-1];return e||(r||Xe(!1),i.route.id||Xe(!1),(t=n.errors)==null?void 0:t[i.route.id])}function iS(t){let{to:e,replace:n,state:r,relative:i}=t;yo()||Xe(!1);let s=w.exports.useContext(Pg),o=rs();return w.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Gn(t){Xe(!1)}function KA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ur.Pop,navigator:s,static:o=!1}=t;yo()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=w.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=mo(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=w.exports.useMemo(()=>{let _=XT(u,a);return _==null?null:{pathname:_,search:c,hash:h,state:d,key:p}},[a,u,c,h,d,p]);return g==null?null:f(Og.Provider,{value:l,children:f(kh.Provider,{children:n,value:{location:g,navigationType:i}})})}function qA(t){let{children:e,location:n}=t,r=w.exports.useContext(LA),i=r&&!e?r.router.routes:Pp(e);return UA(i,n)}var hw;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(hw||(hw={}));new Promise(()=>{});function Pp(t,e){e===void 0&&(e=[]);let n=[];return w.exports.Children.forEach(t,(r,i)=>{if(!w.exports.isValidElement(r))return;if(r.type===w.exports.Fragment){n.push.apply(n,Pp(r.props.children,e));return}r.type!==Gn&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Pp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function GA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YA(t,e){return t.button===0&&(!e||e==="_self")&&!QA(t)}const XA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function JA(t){let{basename:e,children:n,window:r}=t,i=w.exports.useRef();i.current==null&&(i.current=GR({window:r,v5Compat:!0}));let s=i.current,[o,a]=w.exports.useState({action:s.action,location:s.location});return w.exports.useLayoutEffect(()=>s.listen(a),[s]),f(KA,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Yd=w.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=GA(e,XA),d=$A(u,{relative:i}),p=ZA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(_){r&&r(_),_.defaultPrevented||p(_)}return f("a",{...h,href:d,onClick:s?r:g,ref:n,target:l})});var dw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(dw||(dw={}));var fw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(fw||(fw={}));function ZA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=rs(),l=bh(),u=rS(t,{relative:o});return w.exports.useCallback(c=>{if(YA(c,n)){c.preventDefault();let h=r!==void 0?r:Np(l)===Np(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 */const sS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw vo(e)},vo=function(t){return new Error("Firebase Database ("+sS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const oS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},aS=function(t){const e=oS(t);return Dg.encodeByteArray(e,!0)},wc=function(t){return aS(t).replace(/\./g,"")},Ec=function(t){try{return Dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tP(t){return lS(void 0,t)}function lS(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nP(n)||(t[n]=lS(t[n],e[n]));return t}function nP(t){return t!=="__proto__"}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function rP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iP(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cS(){return sS.NODE_ADMIN===!0}function hS(){return typeof indexedDB=="object"}function sP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function oP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aP=()=>oP().__FIREBASE_DEFAULTS__,lP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uP=()=>{if(typeof document>"u")return;const t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/),e=t&&Ec(t[1]);return e&&JSON.parse(e)},Lg=()=>aP()||lP()||uP(),dS=t=>{var e,n;return(n=(e=Lg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cP=t=>{const e=dS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hP=()=>{var t;return(t=Lg())===null||t===void 0?void 0:t.config},fS=t=>{var e;return(e=Lg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wc(JSON.stringify(n)),wc(JSON.stringify(o)),a].join(".")}/**
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
 */const fP="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fP,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,r)}}function pP(t,e){return t.replace(mP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mP=/\{\$([^}]+)}/g;/**
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
 */const pS=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ja(Ec(s[0])||""),n=ja(Ec(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},gP=function(t){const e=pS(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yP=function(t){const e=pS(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function eo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Op(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Tc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(pw(s)&&pw(o)){if(!Tc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function pw(t){return t!==null&&typeof t=="object"}/**
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
 */class vP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const d=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _P(t,e){const n=new wP(t,e);return n.subscribe.bind(n)}class wP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xd),i.error===void 0&&(i.error=Xd),i.complete===void 0&&(i.complete=Xd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}function mS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const CP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const TP=1e3,SP=2,IP=4*60*60*1e3,kP=.5;function bP(t,e=TP,n=SP){const r=e*Math.pow(n,t),i=Math.round(kP*r*(Math.random()-.5)*2);return Math.min(IP,r+i)}/**
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
 */class xP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $g;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RP(e))try{this.getOrInitializeService({instanceIdentifier:gi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gi){return this.instances.has(e)}getOptions(e=gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gi){return this.component?this.component.multipleInstances?e:gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NP(t){return t===gi?void 0:t}function RP(t){return t.instantiationMode==="EAGER"}/**
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
 */class AP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const PP={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},OP=fe.INFO,DP={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},MP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _l{constructor(e){this.name=e,this._logLevel=OP,this._logHandler=MP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const LP=(t,e)=>e.some(n=>t instanceof n);let mw,gw;function $P(){return mw||(mw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FP(){return gw||(gw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gS=new WeakMap,Dp=new WeakMap,yS=new WeakMap,Jd=new WeakMap,Fg=new WeakMap;function UP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Qr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gS.set(n,t)}).catch(()=>{}),Fg.set(e,t),e}function jP(t){if(Dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dp.set(t,e)}let Mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VP(t){Mp=t(Mp)}function BP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return yS.set(r,e.sort?e.sort():[e]),Qr(r)}:FP().includes(t)?function(...e){return t.apply(Zd(this),e),Qr(gS.get(this))}:function(...e){return Qr(t.apply(Zd(this),e))}}function zP(t){return typeof t=="function"?BP(t):(t instanceof IDBTransaction&&jP(t),LP(t,$P())?new Proxy(t,Mp):t)}function Qr(t){if(t instanceof IDBRequest)return UP(t);if(Jd.has(t))return Jd.get(t);const e=zP(t);return e!==t&&(Jd.set(t,e),Fg.set(e,t)),e}const Zd=t=>Fg.get(t);function vS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qr(o.result),l.oldVersion,l.newVersion,Qr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const HP=["get","getKey","getAll","getAllKeys","count"],WP=["put","add","delete","clear"],ef=new Map;function yw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ef.set(e,s),s}VP(t=>({...t,get:(e,n,r)=>yw(e,n)||t.get(e,n,r),has:(e,n)=>!!yw(e,n)||t.has(e,n)}));/**
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
 */class KP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lp="@firebase/app",vw="0.8.1";/**
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
 */const Bi=new _l("@firebase/app"),GP="@firebase/app-compat",QP="@firebase/analytics-compat",YP="@firebase/analytics",XP="@firebase/app-check-compat",JP="@firebase/app-check",ZP="@firebase/auth",eO="@firebase/auth-compat",tO="@firebase/database",nO="@firebase/database-compat",rO="@firebase/functions",iO="@firebase/functions-compat",sO="@firebase/installations",oO="@firebase/installations-compat",aO="@firebase/messaging",lO="@firebase/messaging-compat",uO="@firebase/performance",cO="@firebase/performance-compat",hO="@firebase/remote-config",dO="@firebase/remote-config-compat",fO="@firebase/storage",pO="@firebase/storage-compat",mO="@firebase/firestore",gO="@firebase/firestore-compat",yO="firebase",vO="9.12.0";/**
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
 */const $p="[DEFAULT]",_O={[Lp]:"fire-core",[GP]:"fire-core-compat",[YP]:"fire-analytics",[QP]:"fire-analytics-compat",[JP]:"fire-app-check",[XP]:"fire-app-check-compat",[ZP]:"fire-auth",[eO]:"fire-auth-compat",[tO]:"fire-rtdb",[nO]:"fire-rtdb-compat",[rO]:"fire-fn",[iO]:"fire-fn-compat",[sO]:"fire-iid",[oO]:"fire-iid-compat",[aO]:"fire-fcm",[lO]:"fire-fcm-compat",[uO]:"fire-perf",[cO]:"fire-perf-compat",[hO]:"fire-rc",[dO]:"fire-rc-compat",[fO]:"fire-gcs",[pO]:"fire-gcs-compat",[mO]:"fire-fst",[gO]:"fire-fst-compat","fire-js":"fire-js",[yO]:"fire-js-all"};/**
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
 */const Va=new Map,Fp=new Map;function wO(t,e){try{t.container.addComponent(e)}catch(n){Bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(Fp.has(e))return Bi.debug(`There were multiple attempts to register component ${e}.`),!1;Fp.set(e,t);for(const n of Va.values())wO(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const EO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yr=new is("app","Firebase",EO);/**
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
 */class CO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ui=vO;function Ug(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$p,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yr.create("bad-app-name",{appName:String(i)});if(n||(n=hP()),!n)throw Yr.create("no-options");const s=Va.get(i);if(s){if(Tc(n,s.options)&&Tc(r,s.config))return s;throw Yr.create("duplicate-app",{appName:i})}const o=new AP(i);for(const l of Fp.values())o.addComponent(l);const a=new CO(n,r,o);return Va.set(i,a),a}function _S(t=$p){const e=Va.get(t);if(!e&&t===$p)return Ug();if(!e)throw Yr.create("no-app",{appName:t});return e}function TO(){return Array.from(Va.values())}function We(t,e,n){var r;let i=(r=_O[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bi.warn(a.join(" "));return}yn(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const SO="firebase-heartbeat-database",IO=1,Ba="firebase-heartbeat-store";let tf=null;function wS(){return tf||(tf=vS(SO,IO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ba)}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),tf}async function kO(t){var e;try{return(await wS()).transaction(Ba).objectStore(Ba).get(ES(t))}catch(n){if(n instanceof vn)Bi.warn(n.message);else{const r=Yr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Bi.warn(r.message)}}}async function _w(t,e){var n;try{const i=(await wS()).transaction(Ba,"readwrite");return await i.objectStore(Ba).put(e,ES(t)),i.done}catch(r){if(r instanceof vn)Bi.warn(r.message);else{const i=Yr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Bi.warn(i.message)}}}function ES(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bO=1024,xO=30*24*60*60*1e3;class NO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ww();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=xO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ww(),{heartbeatsToSend:n,unsentEntries:r}=RO(this._heartbeatsCache.heartbeats),i=wc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ww(){return new Date().toISOString().substring(0,10)}function RO(t,e=bO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ew(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ew(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hS()?sP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _w(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _w(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ew(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function PO(t){yn(new rn("platform-logger",e=>new KP(e),"PRIVATE")),yn(new rn("heartbeat",e=>new NO(e),"PRIVATE")),We(Lp,vw,t),We(Lp,vw,"esm2017"),We("fire-js","")}PO("");function jg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function CS(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OO=CS,TS=new is("auth","Firebase",CS());/**
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
 */const Cw=new _l("@firebase/auth");function Uu(t,...e){Cw.logLevel<=fe.ERROR&&Cw.error(`Auth (${ui}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw Vg(t,...e)}function Bn(t,...e){return Vg(t,...e)}function DO(t,e,n){const r=Object.assign(Object.assign({},OO()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function Vg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TS.create(t,...e)}function Q(t,e,...n){if(!t)throw Vg(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uu(e),new Error(e)}function fr(t,e){t||er(e)}/**
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
 */const Tw=new Map;function tr(t){fr(t instanceof Function,"Expected a class definition");let e=Tw.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tw.set(t,e),e)}/**
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
 */function MO(t,e){const n=wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tc(s,e!=null?e:{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function LO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Up(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $O(){return Sw()==="http:"||Sw()==="https:"}function Sw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($O()||rP()||"connection"in navigator)?navigator.onLine:!0}function UO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class El{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=Mg()||uS()}get(){return FO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bg(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class SS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const VO=new El(3e4,6e4);function wo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Eo(t,e,n,r,i={}){return IS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_o(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),SS.fetch()(kS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function IS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jO),e);try{const i=new BO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw DO(t,c,u);Dn(t,c)}}catch(i){if(i instanceof vn)throw i;Dn(t,"network-request-failed")}}async function Cl(t,e,n,r,i={}){const s=await Eo(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bg(t.config,i):`${t.config.apiScheme}://${i}`}class BO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bn(this.auth,"network-request-failed")),VO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function zO(t,e){return Eo(t,"POST","/v1/accounts:delete",e)}async function HO(t,e){return Eo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WO(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=zg(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fa(nf(i.auth_time)),issuedAtTime:fa(nf(i.iat)),expirationTime:fa(nf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function zg(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Uu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ec(r);return s?JSON.parse(s):(Uu("Failed to decode base64 JWT payload"),null)}catch(s){return Uu("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function KO(t){const e=zg(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&qO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fa(this.lastLoginAt),this.creationTime=fa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await za(t,HO(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?XO(s.providerUserInfo):[],a=YO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function QO(t){const e=Fe(t);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function XO(t){return t.map(e=>{var{providerId:n}=e,r=jg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JO(t,e){const n=await IS(t,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",SS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await JO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ha;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
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
 */function kr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await za(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WO(this,e)}reload(){return QO(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await za(this,zO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,y=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:T,isAnonymous:S,providerData:x,stsTokenManager:A}=n;Q(v&&A,e,"internal-error");const D=Ha.fromJSON(this.name,A);Q(typeof v=="string",e,"internal-error"),kr(h,e.name),kr(d,e.name),Q(typeof T=="boolean",e,"internal-error"),Q(typeof S=="boolean",e,"internal-error"),kr(p,e.name),kr(g,e.name),kr(_,e.name),kr(E,e.name),kr(m,e.name),kr(y,e.name);const B=new Pi({uid:v,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:S,photoURL:g,phoneNumber:p,tenantId:_,stsTokenManager:D,createdAt:m,lastLoginAt:y});return x&&Array.isArray(x)&&(B.providerData=x.map(Y=>Object.assign({},Y))),E&&(B._redirectEventId=E),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ha;i.updateFromServerResponse(n);const s=new Pi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sc(s),s}}/**
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
 */class xS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xS.type="NONE";const Iw=xS;/**
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
 */function ju(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(tr(Iw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tr(Iw);const o=ju(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Pi._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new js(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new js(s,e,r))}}/**
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
 */function kw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OS(e))return"Blackberry";if(DS(e))return"Webos";if(Hg(e))return"Safari";if((e.includes("chrome/")||RS(e))&&!e.includes("edge/"))return"Chrome";if(PS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NS(t=bt()){return/firefox\//i.test(t)}function Hg(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RS(t=bt()){return/crios\//i.test(t)}function AS(t=bt()){return/iemobile/i.test(t)}function PS(t=bt()){return/android/i.test(t)}function OS(t=bt()){return/blackberry/i.test(t)}function DS(t=bt()){return/webos/i.test(t)}function Nh(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZO(t=bt()){var e;return Nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eD(){return iP()&&document.documentMode===10}function MS(t=bt()){return Nh(t)||PS(t)||DS(t)||OS(t)||/windows phone/i.test(t)||AS(t)}function tD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function LS(t,e=[]){let n;switch(t){case"Browser":n=kw(bt());break;case"Worker":n=`${kw(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
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
 */class nD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class rD{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bw(this),this.idTokenSubscription=new bw(this),this.beforeStateQueue=new nD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TS,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Sc(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tr(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Tl(t){return Fe(t)}class bw{constructor(e){this.auth=e,this.observer=null,this.addObserver=_P(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function iD(t,e,n){const r=Tl(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$S(e),{host:o,port:a}=sD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oD()}function $S(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sD(t){const e=$S(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xw(o)}}}function xw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}async function aD(t,e){return Eo(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lD(t,e){return Cl(t,"POST","/v1/accounts:signInWithPassword",wo(t,e))}async function uD(t,e){return Eo(t,"POST","/v1/accounts:sendOobCode",wo(t,e))}async function cD(t,e){return uD(t,e)}/**
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
 */async function hD(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",wo(t,e))}async function dD(t,e){return Cl(t,"POST","/v1/accounts:signInWithEmailLink",wo(t,e))}/**
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
 */class Wa extends Wg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Wa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lD(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hD(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return aD(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dD(e,{idToken:n,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const fD="http://localhost";class zi extends Wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:fD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_o(n)}return e}}/**
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
 */function pD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mD(t){const e=Xo(Jo(t)).link,n=e?Xo(Jo(e)).deep_link_id:null,r=Xo(Jo(t)).deep_link_id;return(r?Xo(Jo(r)).link:null)||r||n||e||t}class Kg{constructor(e){var n,r,i,s,o,a;const l=Xo(Jo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=pD((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mD(e);try{return new Kg(n)}catch{return null}}}/**
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
 */class Co{constructor(){this.providerId=Co.PROVIDER_ID}static credential(e,n){return Wa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kg.parseLink(n);return Q(r,"argument-error"),Wa._fromEmailAndCode(e,r.code,r.tenantId)}}Co.PROVIDER_ID="password";Co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class FS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sl extends FS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function gD(t,e){return Cl(t,"POST","/v1/accounts:signUp",wo(t,e))}/**
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
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pi._fromIdTokenResponse(e,r,i),o=Nw(r);return new Hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Nw(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Nw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ic extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ic.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ic(e,n,r,i)}}function US(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(t,s,e,r):s})}async function yD(t,e,n=!1){const r=await za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
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
 */async function vD(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await za(t,US(i,s,e,t),n);Q(o.idToken,i,"internal-error");const a=zg(o.idToken);Q(a,i,"internal-error");const{sub:l}=a;return Q(t.uid===l,i,"user-mismatch"),Hi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Dn(i,"user-mismatch"),o}}/**
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
 */async function jS(t,e,n=!1){const r="signIn",i=await US(t,r,e),s=await Hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _D(t,e){return jS(Tl(t),e)}/**
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
 */function wD(t,e,n){var r;Q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}async function ED(t,e,n){const r=Tl(t),i=await gD(r,{returnSecureToken:!0,email:e,password:n}),s=await Hi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function CD(t,e,n){return _D(Fe(t),Co.credential(e,n))}async function TD(t,e){const n=Fe(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&wD(n.auth,i,e);const{email:s}=await cD(n.auth,i);s!==t.email&&await t.reload()}function SD(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function ID(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function kD(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function bD(t){return Fe(t).signOut()}const kc="__sak";/**
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
 */class VS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xD(){const t=bt();return Hg(t)||Nh(t)}const ND=1e3,RD=10;class BS extends VS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xD()&&tD(),this.fallbackToPolling=MS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ND)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BS.type="LOCAL";const AD=BS;/**
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
 */class zS extends VS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zS.type="SESSION";const HS=zS;/**
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
 */function PD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await PD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rh.receivers=[];/**
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
 */function qg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class OD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=qg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zn(){return window}function DD(t){zn().location.href=t}/**
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
 */function WS(){return typeof zn().WorkerGlobalScope<"u"&&typeof zn().importScripts=="function"}async function MD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $D(){return WS()?self:null}/**
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
 */const KS="firebaseLocalStorageDb",FD=1,bc="firebaseLocalStorage",qS="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ah(t,e){return t.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function UD(){const t=indexedDB.deleteDatabase(KS);return new Il(t).toPromise()}function jp(){const t=indexedDB.open(KS,FD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bc,{keyPath:qS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bc)?e(r):(r.close(),await UD(),e(await jp()))})})}async function Rw(t,e,n){const r=Ah(t,!0).put({[qS]:e,value:n});return new Il(r).toPromise()}async function jD(t,e){const n=Ah(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function Aw(t,e){const n=Ah(t,!0).delete(e);return new Il(n).toPromise()}const VD=800,BD=3;class GS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance($D()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MD(),!this.activeServiceWorker)return;this.sender=new OD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jp();return await Rw(e,kc,"1"),await Aw(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Aw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GS.type="LOCAL";const zD=GS;/**
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
 */function HD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function WD(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HD().appendChild(r)})}function KD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new El(3e4,6e4);/**
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
 */function qD(t,e){return e?tr(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gg extends Wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GD(t){return jS(t.auth,new Gg(t),t.bypassAuthState)}function QD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),vD(n,new Gg(t),t.bypassAuthState)}async function YD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),yD(n,new Gg(t),t.bypassAuthState)}/**
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
 */class QS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GD;case"linkViaPopup":case"linkViaRedirect":return YD;case"reauthViaPopup":case"reauthViaRedirect":return QD;default:Dn(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XD=new El(2e3,1e4);class Ns extends QS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=qg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,XD.get())};e()}}Ns.currentPopupAction=null;/**
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
 */const JD="pendingRedirect",Vu=new Map;class ZD extends QS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const r=await eM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eM(t,e){const n=rM(e),r=nM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tM(t,e){Vu.set(t._key(),e)}function nM(t){return tr(t._redirectPersistence)}function rM(t){return ju(JD,t.config.apiKey,t.name)}async function iM(t,e,n=!1){const r=Tl(t),i=qD(r,e),o=await new ZD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const sM=10*60*1e3;class oM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pw(e))}saveEventToCache(e){this.cachedEventUids.add(Pw(e)),this.lastProcessedEventTime=Date.now()}}function Pw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YS(t);default:return!1}}/**
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
 */async function lM(t,e={}){return Eo(t,"GET","/v1/projects",e)}/**
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
 */const uM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cM=/^https?/;async function hM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lM(t);for(const n of e)try{if(dM(n))return}catch{}Dn(t,"unauthorized-domain")}function dM(t){const e=Up(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cM.test(n))return!1;if(uM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const fM=new El(3e4,6e4);function Ow(){const t=zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pM(t){return new Promise((e,n)=>{var r,i,s;function o(){Ow(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ow(),n(Bn(t,"network-request-failed"))},timeout:fM.get()})}if(!((i=(r=zn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zn().gapi)===null||s===void 0)&&s.load)o();else{const a=KD("iframefcb");return zn()[a]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},WD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function mM(t){return Bu=Bu||pM(t),Bu}/**
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
 */const gM=new El(5e3,15e3),yM="__/auth/iframe",vM="emulator/auth/iframe",_M={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EM(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bg(e,vM):`https://${t.config.authDomain}/${yM}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=wM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function CM(t){const e=await mM(t),n=zn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:EM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_M,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),a=zn().setTimeout(()=>{s(o)},gM.get());function l(){zn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const TM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SM=500,IM=600,kM="_blank",bM="http://localhost";class Dw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xM(t,e,n,r=SM,i=IM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=bt().toLowerCase();n&&(a=RS(u)?kM:n),NS(u)&&(e=e||bM,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(ZO(u)&&a!=="_self")return NM(e||"",a),new Dw(null);const h=window.open(e||"",a,c);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Dw(h)}function NM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RM="__/auth/handler",AM="emulator/auth/handler";function Mw(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof FS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Op(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Sl){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${PM(t)}?${_o(a).slice(1)}`}function PM({config:t}){return t.emulator?Bg(t,AM):`https://${t.authDomain}/${RM}`}/**
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
 */const rf="webStorageSupport";class OM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HS,this._completeRedirectFn=iM,this._overrideRedirectResult=tM}async _openPopup(e,n,r,i){var s;fr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Mw(e,n,r,Up(),i);return xM(e,o,qg())}async _openRedirect(e,n,r,i){return await this._originValidation(e),DD(Mw(e,n,r,Up(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CM(e),r=new oM(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rf];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MS()||Hg()||Nh()}}const DM=OM;var Lw="@firebase/auth",$w="0.20.9";/**
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
 */class MM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $M(t){yn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{Q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LS(t)},c=new rD(a,l,u);return LO(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yn(new rn("auth-internal",e=>{const n=Tl(e.getProvider("auth").getImmediate());return(r=>new MM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),We(Lw,$w,LM(t)),We(Lw,$w,"esm2017")}/**
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
 */const FM=5*60,UM=fS("authIdTokenMaxAge")||FM;let Fw=null;const jM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UM)return;const i=n==null?void 0:n.token;Fw!==i&&(Fw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VM(t=_S()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MO(t,{popupRedirectResolver:DM,persistence:[zD,AD,HS]}),r=fS("authTokenSyncURL");if(r){const s=jM(r);ID(n,s,()=>s(n.currentUser)),SD(n,o=>s(o))}const i=dS("auth");return i&&iD(n,`http://${i}`),n}$M("Browser");var BM="firebase",zM="9.12.0";/**
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
 */We(BM,zM,"app");var HM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Qg=Qg||{},Z=HM||self;function xc(){}function Ph(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function kl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function WM(t){return Object.prototype.hasOwnProperty.call(t,sf)&&t[sf]||(t[sf]=++KM)}var sf="closure_uid_"+(1e9*Math.random()>>>0),KM=0;function qM(t,e,n){return t.call.apply(t.bind,arguments)}function GM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=qM:St=GM,St.apply(null,arguments)}function gu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ci(){this.s=this.s,this.o=this.o}var QM=0;ci.prototype.s=!1;ci.prototype.na=function(){!this.s&&(this.s=!0,this.M(),QM!=0)&&WM(this)};ci.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const XS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Uw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ph(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var YM=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",xc,e),Z.removeEventListener("test",xc,e)}catch{}return t}();function Nc(t){return/^[\s\xa0]*$/.test(t)}var jw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function of(t,e){return t<e?-1:t>e?1:0}function Oh(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Fn(t){return Oh().indexOf(t)!=-1}function Xg(t){return Xg[" "](t),t}Xg[" "]=xc;function XM(t){var e=eL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var JM=Fn("Opera"),to=Fn("Trident")||Fn("MSIE"),JS=Fn("Edge"),Vp=JS||to,ZS=Fn("Gecko")&&!(Oh().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge"))&&!(Fn("Trident")||Fn("MSIE"))&&!Fn("Edge"),ZM=Oh().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge");function eI(){var t=Z.document;return t?t.documentMode:void 0}var Rc;e:{var af="",lf=function(){var t=Oh();if(ZS)return/rv:([^\);]+)(\)|;)/.exec(t);if(JS)return/Edge\/([\d\.]+)/.exec(t);if(to)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ZM)return/WebKit\/(\S+)/.exec(t);if(JM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lf&&(af=lf?lf[1]:""),to){var uf=eI();if(uf!=null&&uf>parseFloat(af)){Rc=String(uf);break e}}Rc=af}var eL={};function tL(){return XM(function(){let t=0;const e=jw(String(Rc)).split("."),n=jw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=of(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||of(i[2].length==0,s[2].length==0)||of(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Bp;if(Z.document&&to){var Vw=eI();Bp=Vw||parseInt(Rc,10)||void 0}else Bp=void 0;var nL=Bp;function Ka(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ZS){e:{try{Xg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:rL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ka.X.h.call(this)}}gt(Ka,It);var rL={2:"touch",3:"pen",4:"mouse"};Ka.prototype.h=function(){Ka.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bl="closure_listenable_"+(1e6*Math.random()|0),iL=0;function sL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++iL,this.ba=this.ea=!1}function Dh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function tI(t){const e={};for(const n in t)e[n]=t[n];return e}const Bw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Bw.length;s++)n=Bw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Mh(t){this.src=t,this.g={},this.h=0}Mh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new sL(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function zp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=XS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Dh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Zg="closure_lm_"+(1e6*Math.random()|0),cf={};function rI(t,e,n,r,i){if(r&&r.once)return sI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)rI(t,e[s],n,r,i);return null}return n=ny(n),t&&t[bl]?t.N(e,n,kl(r)?!!r.capture:!!r,i):iI(t,e,n,!1,r,i)}function iI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=kl(i)?!!i.capture:!!i,a=ty(t);if(a||(t[Zg]=a=new Mh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=oL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(aI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oL(){function t(n){return e.call(t.src,t.listener,n)}const e=aL;return t}function sI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)sI(t,e[s],n,r,i);return null}return n=ny(n),t&&t[bl]?t.O(e,n,kl(r)?!!r.capture:!!r,i):iI(t,e,n,!0,r,i)}function oI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)oI(t,e[s],n,r,i);else r=kl(r)?!!r.capture:!!r,n=ny(n),t&&t[bl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hp(s,n,r,i),-1<n&&(Dh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ty(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hp(e,n,r,i)),(n=-1<t?e[t]:null)&&ey(n))}function ey(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[bl])zp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(aI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ty(e))?(zp(n,t),n.h==0&&(n.src=null,e[Zg]=null)):Dh(t)}}}function aI(t){return t in cf?cf[t]:cf[t]="on"+t}function aL(t,e){if(t.ba)t=!0;else{e=new Ka(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&ey(t),t=n.call(r,e)}return t}function ty(t){return t=t[Zg],t instanceof Mh?t:null}var hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function ny(t){return typeof t=="function"?t:(t[hf]||(t[hf]=function(e){return t.handleEvent(e)}),t[hf])}function at(){ci.call(this),this.i=new Mh(this),this.P=this,this.I=null}gt(at,ci);at.prototype[bl]=!0;at.prototype.removeEventListener=function(t,e,n,r){oI(this,t,e,n,r)};function pt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),nI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yu(o,r,!0,e)&&i}if(o=e.g=t,i=yu(o,r,!0,e)&&i,i=yu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yu(o,r,!1,e)&&i}at.prototype.M=function(){if(at.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Dh(n[r]);delete t.g[e],t.h--}}this.I=null};at.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&zp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ry=Z.JSON.stringify;function lL(){var t=cI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uL{constructor(){this.h=this.g=null}add(e,n){const r=lI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new cL,t=>t.reset());class cL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hL(t){Z.setTimeout(()=>{throw t},0)}function uI(t,e){Wp||dL(),Kp||(Wp(),Kp=!0),cI.add(t,e)}var Wp;function dL(){var t=Z.Promise.resolve(void 0);Wp=function(){t.then(fL)}}var Kp=!1,cI=new uL;function fL(){for(var t;t=lL();){try{t.h.call(t.g)}catch(n){hL(n)}var e=lI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kp=!1}function Lh(t,e){at.call(this),this.h=t||1,this.g=e||Z,this.j=St(this.lb,this),this.l=Date.now()}gt(Lh,at);V=Lh.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),pt(this,"tick"),this.ca&&(iy(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function iy(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Lh.X.M.call(this),iy(this),delete this.g};function sy(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function hI(t){t.g=sy(()=>{t.g=null,t.i&&(t.i=!1,hI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pL extends ci{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hI(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(t){ci.call(this),this.h=t,this.g={}}gt(qa,ci);var zw=[];function dI(t,e,n,r){Array.isArray(n)||(n&&(zw[0]=n.toString()),n=zw);for(var i=0;i<n.length;i++){var s=rI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function fI(t){Jg(t.g,function(e,n){this.g.hasOwnProperty(n)&&ey(e)},t),t.g={}}qa.prototype.M=function(){qa.X.M.call(this),fI(this)};qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $h(){this.g=!0}$h.prototype.Aa=function(){this.g=!1};function mL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Rs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vL(t,n)+(r?" "+r:"")})}function yL(t,e){t.info(function(){return"TIMEOUT: "+e})}$h.prototype.info=function(){};function vL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ry(n)}catch{return e}}var ss={},Hw=null;function Fh(){return Hw=Hw||new at}ss.Pa="serverreachability";function pI(t){It.call(this,ss.Pa,t)}gt(pI,It);function Ga(t){const e=Fh();pt(e,new pI(e))}ss.STAT_EVENT="statevent";function mI(t,e){It.call(this,ss.STAT_EVENT,t),this.stat=e}gt(mI,It);function Pt(t){const e=Fh();pt(e,new mI(e,t))}ss.Qa="timingevent";function gI(t,e){It.call(this,ss.Qa,t),this.size=e}gt(gI,It);function xl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Uh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},yI={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function oy(){}oy.prototype.h=null;function Ww(t){return t.h||(t.h=t.i())}function vI(){}var Nl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ay(){It.call(this,"d")}gt(ay,It);function ly(){It.call(this,"c")}gt(ly,It);var qp;function jh(){}gt(jh,oy);jh.prototype.g=function(){return new XMLHttpRequest};jh.prototype.i=function(){return{}};qp=new jh;function Rl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new qa(this),this.O=_L,t=Vp?125:void 0,this.T=new Lh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _I}function _I(){this.i=null,this.g="",this.h=!1}var _L=45e3,Gp={},Ac={};V=Rl.prototype;V.setTimeout=function(t){this.O=t};function Qp(t,e,n){t.K=1,t.v=Bh(pr(e)),t.s=n,t.P=!0,wI(t,null)}function wI(t,e){t.F=Date.now(),Al(t),t.A=pr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),xI(n.i,"t",r),t.C=0,n=t.l.H,t.h=new _I,t.g=QI(t.l,n?e:null,!t.s),0<t.N&&(t.L=new pL(St(t.La,t,t.g),t.N)),dI(t.S,t.g,"readystatechange",t.ib),e=t.H?tI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ga(),mL(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&nr(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const c=nr(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Vp||this.g&&(this.h.h||this.g.fa()||Qw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ga(3):Ga(2)),Vh(this);var n=this.g.aa();this.Y=n;t:if(EI(this)){var r=Qw(this.g);t="";var i=r.length,s=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ii(this),pa(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,gL(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nc(a)){var u=a;break t}}u=null}if(n=u)Rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yp(this,n);else{this.i=!1,this.o=3,Pt(12),Ii(this),pa(this);break e}}this.P?(CI(this,c,o),Vp&&this.i&&c==3&&(dI(this.S,this.T,"tick",this.hb),this.T.start())):(Rs(this.j,this.m,o,null),Yp(this,o)),c==4&&Ii(this),this.i&&!this.I&&(c==4?WI(this.l,this):(this.i=!1,Al(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Ii(this),pa(this)}}}catch{}finally{}};function EI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function CI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=wL(t,n),i==Ac){e==4&&(t.o=4,Pt(14),r=!1),Rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Gp){t.o=4,Pt(15),Rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rs(t.j,t.m,i,null),Yp(t,i);EI(t)&&i!=Ac&&i!=Gp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),my(e),e.K=!0,Pt(11))):(Rs(t.j,t.m,n,"[Invalid Chunked Response]"),Ii(t),pa(t))}V.hb=function(){if(this.g){var t=nr(this.g),e=this.g.fa();this.C<e.length&&(Vh(this),CI(this,t,e),this.i&&t!=4&&Al(this))}};function wL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ac:(n=Number(e.substring(n,r)),isNaN(n)?Gp:(r+=1,r+n>e.length?Ac:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,Ii(this)};function Al(t){t.V=Date.now()+t.O,TI(t,t.O)}function TI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xl(St(t.gb,t),e)}function Vh(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(yL(this.j,this.A),this.K!=2&&(Ga(),Pt(17)),Ii(this),this.o=2,pa(this)):TI(this,this.V-t)};function pa(t){t.l.G==0||t.I||WI(t.l,t)}function Ii(t){Vh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,iy(t.T),fI(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Xp(n.h,t))){if(!t.J&&Xp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Dc(n),Wh(n);else break e;py(n),Pt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=xl(St(n.cb,n),6e3));if(1>=AI(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ki(n,11)}else if((t.J||n.g==t)&&Dc(n),!Nc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(uy(s,s.h),s.h=null))}if(r.D){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,Re(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=GI(r,r.H?r.ka:null,r.V),o.J){PI(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Vh(a),Al(a)),r.g=o}else zI(r);0<n.i.length&&Kh(n)}else u[0]!="stop"&&u[0]!="close"||ki(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ki(n,7):fy(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Ga(4)}catch{}}function EL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ph(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function CL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ph(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function SI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ph(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=CL(t),r=EL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var II=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Oi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Oi){this.h=e!==void 0?e:t.h,Pc(this,t.j),this.s=t.s,this.g=t.g,Oc(this,t.m),this.l=t.l,e=t.i;var n=new Qa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kw(this,n),this.o=t.o}else t&&(n=String(t).match(II))?(this.h=!!e,Pc(this,n[1]||"",!0),this.s=Zo(n[2]||""),this.g=Zo(n[3]||"",!0),Oc(this,n[4]),this.l=Zo(n[5]||"",!0),Kw(this,n[6]||"",!0),this.o=Zo(n[7]||"")):(this.h=!!e,this.i=new Qa(null,this.h))}Oi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ea(e,qw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ea(e,qw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ea(n,n.charAt(0)=="/"?kL:IL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ea(n,xL)),t.join("")};function pr(t){return new Oi(t)}function Pc(t,e,n){t.j=n?Zo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kw(t,e,n){e instanceof Qa?(t.i=e,NL(t.i,t.h)):(n||(e=ea(e,bL)),t.i=new Qa(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Bh(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ea(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qw=/[#\/\?@]/g,IL=/[#\?:]/g,kL=/[#\?]/g,bL=/[#\?@]/g,xL=/#/g;function Qa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hi(t){t.g||(t.g=new Map,t.h=0,t.i&&TL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Qa.prototype;V.add=function(t,e){hi(this),this.i=null,t=To(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kI(t,e){hi(t),e=To(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bI(t,e){return hi(t),e=To(t,e),t.g.has(e)}V.forEach=function(t,e){hi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};V.oa=function(){hi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};V.W=function(t){hi(this);let e=[];if(typeof t=="string")bI(this,t)&&(e=e.concat(this.g.get(To(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return hi(this),this.i=null,t=To(this,t),bI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xI(t,e,n){kI(t,e),0<n.length&&(t.i=null,t.g.set(To(t,e),Yg(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function To(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function NL(t,e){e&&!t.j&&(hi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(kI(this,r),xI(this,i,n))},t)),t.j=e}var RL=class{constructor(t,e){this.h=t,this.g=e}};function NI(t){this.l=t||AL,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AL=10;function RI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function AI(t){return t.h?1:t.g?t.g.size:0}function Xp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function uy(t,e){t.g?t.g.add(e):t.h=e}function PI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}NI.prototype.cancel=function(){if(this.i=OI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function OI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Yg(t.i)}function cy(){}cy.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};cy.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function PL(){this.g=new cy}function OL(t,e,n){const r=n||"";try{SI(t,function(i,s){let o=i;kl(i)&&(o=ry(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function DL(t,e){const n=new $h;if(Z.Image){const r=new Image;r.onload=gu(vu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gu(vu,n,r,"TestLoadImage: error",!1,e),r.onabort=gu(vu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gu(vu,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pl(t){this.l=t.ac||null,this.j=t.jb||!1}gt(Pl,oy);Pl.prototype.g=function(){return new zh(this.l,this.j)};Pl.prototype.i=function(t){return function(){return t}}({});function zh(t,e){at.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(zh,at);var hy=0;V=zh.prototype;V.open=function(t,e){if(this.readyState!=hy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ya(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ol(this)),this.readyState=hy};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ya(this)),this.g&&(this.readyState=3,Ya(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;DI(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function DI(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ol(this):Ya(this),this.readyState==3&&DI(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Ol(this))};V.Ua=function(t){this.g&&(this.response=t,Ol(this))};V.ga=function(){this.g&&Ol(this)};function Ol(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ya(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ML=Z.JSON.parse;function Ue(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=MI,this.K=this.L=!1}gt(Ue,at);var MI="",LL=/^https?$/i,$L=["POST","PUT"];V=Ue.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qp.g(),this.C=this.u?Ww(this.u):Ww(qp),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Gw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=XS($L,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{FI(this),0<this.B&&((this.K=FL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=sy(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gw(this,s)}};function FL(t){return to&&tL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Qg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))};function Gw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,LI(t),Hh(t)}function LI(t){t.D||(t.D=!0,pt(t,"complete"),pt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),Hh(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hh(this,!0)),Ue.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?$I(this):this.fb())};V.fb=function(){$I(this)};function $I(t){if(t.h&&typeof Qg<"u"&&(!t.C[1]||nr(t)!=4||t.aa()!=2)){if(t.v&&nr(t)==4)sy(t.Ha,0,t);else if(pt(t,"readystatechange"),nr(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(II)[1]||null;if(!i&&Z.self&&Z.self.location){var s=Z.self.location.protocol;i=s.substr(0,s.length-1)}r=!LL.test(i?i.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var o=2<nr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",LI(t)}}finally{Hh(t)}}}}function Hh(t,e){if(t.g){FI(t);const n=t.g,r=t.C[0]?xc:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function FI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function nr(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ML(e)}};function Qw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case MI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function UI(t){let e="";return Jg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function dy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=UI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Uo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jI(t){this.Ca=0,this.i=[],this.j=new $h,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Uo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Uo("baseRetryDelayMs",5e3,t),this.bb=Uo("retryDelaySeedMs",1e4,t),this.$a=Uo("forwardChannelMaxRetries",2,t),this.ta=Uo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new NI(t&&t.concurrentRequestLimit),this.Fa=new PL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=jI.prototype;V.ma=8;V.G=1;function fy(t){if(VI(t),t.G==3){var e=t.U++,n=pr(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),Dl(t,n),e=new Rl(t,t.j,e,void 0),e.K=2,e.v=Bh(pr(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=QI(e.l,null),e.g.da(e.v)),e.F=Date.now(),Al(e)}qI(t)}function Wh(t){t.g&&(my(t),t.g.cancel(),t.g=null)}function VI(t){Wh(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Dc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Kh(t){RI(t.h)||t.m||(t.m=!0,uI(t.Ja,t),t.C=0)}function UL(t,e){return AI(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=xl(St(t.Ja,t,e),KI(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Rl(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=tI(s),nI(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=BI(this,i,e),n=pr(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),Dl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(UI(s)))+"&"+e:this.o&&dy(n,this.o,s)),uy(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Qp(i,n,null)):Qp(i,n,e),this.G=2}}else this.G==3&&(t?Yw(this,t):this.i.length==0||RI(this.h)||Yw(this))};function Yw(t,e){var n;e?n=e.m:n=t.U++;const r=pr(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),Dl(t,r),t.o&&t.s&&dy(r,t.o,t.s),n=new Rl(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=BI(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),uy(t.h,n),Qp(n,r,e)}function Dl(t,e){t.ia&&Jg(t.ia,function(n,r){Re(e,r,n)}),t.l&&SI({},function(n,r){Re(e,r,n)})}function BI(t,e,n){n=Math.min(t.i.length,n);var r=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{OL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function zI(t){t.g||t.u||(t.Z=1,uI(t.Ia,t),t.A=0)}function py(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xl(St(t.Ia,t),KI(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,HI(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xl(St(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Pt(10),Wh(this),HI(this))};function my(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function HI(t){t.g=new Rl(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=pr(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),Dl(t,e),t.o&&t.s&&dy(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Bh(pr(e)),n.s=null,n.P=!0,wI(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Wh(this),py(this),Pt(19))};function Dc(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function WI(t,e){var n=null;if(t.g==e){Dc(t),my(t),t.g=null;var r=2}else if(Xp(t.h,e))n=e.D,PI(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Fh(),pt(r,new gI(r,n)),Kh(t)}else zI(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&UL(t,e)||r==2&&py(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ki(t,5);break;case 4:ki(t,10);break;case 3:ki(t,6);break;default:ki(t,2)}}}function KI(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ki(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=St(t.kb,t);n||(n=new Oi("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Pc(n,"https"),Bh(n)),DL(n.toString(),r)}else Pt(2);t.G=0,t.l&&t.l.va(e),qI(t),VI(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function qI(t){if(t.G=0,t.la=[],t.l){const e=OI(t.h);(e.length!=0||t.i.length!=0)&&(Uw(t.la,e),Uw(t.la,t.i),t.h.i.length=0,Yg(t.i),t.i.length=0),t.l.ua()}}function GI(t,e,n){var r=n instanceof Oi?pr(n):new Oi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Oc(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Oi(null,void 0);r&&Pc(s,r),e&&(s.g=e),i&&Oc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),Dl(t,r),r}function QI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ue(new Pl({jb:!0})):new Ue(t.ra),e.Ka(t.H),e}function YI(){}V=YI.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Mc(){if(to&&!(10<=Number(nL)))throw Error("Environmental error: no available transport.")}Mc.prototype.g=function(t,e){return new sn(t,e)};function sn(t,e){at.call(this),this.g=new jI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Nc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new So(this)}gt(sn,at);sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=GI(t,null,t.V),Kh(t)};sn.prototype.close=function(){fy(this.g)};sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ry(t),t=n);e.i.push(new RL(e.ab++,t)),e.G==3&&Kh(e)};sn.prototype.M=function(){this.g.l=null,delete this.j,fy(this.g),delete this.g,sn.X.M.call(this)};function XI(t){ay.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(XI,ay);function JI(){ly.call(this),this.status=1}gt(JI,ly);function So(t){this.g=t}gt(So,YI);So.prototype.xa=function(){pt(this.g,"a")};So.prototype.wa=function(t){pt(this.g,new XI(t))};So.prototype.va=function(t){pt(this.g,new JI)};So.prototype.ua=function(){pt(this.g,"b")};Mc.prototype.createWebChannel=Mc.prototype.g;sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;Uh.NO_ERROR=0;Uh.TIMEOUT=8;Uh.HTTP_ERROR=6;yI.COMPLETE="complete";vI.EventType=Nl;Nl.OPEN="a";Nl.CLOSE="b";Nl.ERROR="c";Nl.MESSAGE="d";at.prototype.listen=at.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var jL=function(){return new Mc},VL=function(){return Fh()},df=Uh,BL=yI,zL=ss,Xw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},HL=Pl,_u=vI,WL=Ue;const Jw="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */const Wi=new _l("@firebase/firestore");function Zw(){return Wi.logLevel}function H(t,...e){if(Wi.logLevel<=fe.DEBUG){const n=e.map(gy);Wi.debug(`Firestore (${Io}): ${t}`,...n)}}function mr(t,...e){if(Wi.logLevel<=fe.ERROR){const n=e.map(gy);Wi.error(`Firestore (${Io}): ${t}`,...n)}}function Jp(t,...e){if(Wi.logLevel<=fe.WARN){const n=e.map(gy);Wi.warn(`Firestore (${Io}): ${t}`,...n)}}function gy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+t;throw mr(e),new Error(e)}function Se(t,e){t||ee()}function ne(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ZI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class qL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GL{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Di;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Di,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Di)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new ZI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new _t(e)}}class QL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class YL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new QL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new XL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class e1{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Je(0,0))}static max(){return new se(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Xa{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const e$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Xa{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return e$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new X(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ae.fromString(e))}static fromName(e){return new q(Ae.fromString(e).popFirst(5))}static empty(){return new q(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ae(e.slice()))}}function t$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new ti(i,q.empty(),e)}function n$(t){return new ti(t.readTime,t.key,-1)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(se.min(),q.empty(),-1)}static max(){return new ti(se.max(),q.empty(),-1)}}function r$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const i$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class s${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ml(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==i$)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function e0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */yy.at=-1;class et{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new et(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ct.RED,this.left=i!=null?i:ct.EMPTY,this.right=s!=null?s:ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new t0(this.data.getIterator())}getIteratorFrom(e){return new t0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class t0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Ze(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new xt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const o$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(Se(!!t),typeof t=="string"){let e=0;const n=o$.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ro(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */function n1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function r1(t){const e=t.mapValue.fields.__previous_value__;return n1(e)?r1(e):e}function Ja(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class a${constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}function qh(t){return t==null}function Lc(t){return t===0&&1/t==-1/0}function l$(t){return typeof t=="number"&&Number.isInteger(t)&&!Lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Eu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?n1(t)?4:u$(t)?9007199254740991:10:ee()}function Kn(t,e){if(t===e)return!0;const n=Ki(t);if(n!==Ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ja(t).isEqual(Ja(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ni(r.timestampValue),o=ni(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ro(r.bytesValue).isEqual(ro(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?Lc(s)===Lc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(e0(s)!==e0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Kn(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function el(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=Ki(t),r=Ki(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return n0(t.timestampValue,e.timestampValue);case 4:return n0(Ja(t),Ja(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ro(i),a=ro(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ve(o[l],a[l]);if(u!==0)return u}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ve(ze(i.latitude),ze(s.latitude));return o!==0?o:ve(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=io(o[l],a[l]);if(u)return u}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Eu.mapValue&&s===Eu.mapValue)return 0;if(i===Eu.mapValue)return 1;if(s===Eu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ve(a[c],u[c]);if(h!==0)return h;const d=io(o[a[c]],l[u[c]]);if(d!==0)return d}return ve(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function n0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=ni(t),r=ni(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function Bs(t){return Zp(t)}function Zp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ni(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ro(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Zp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Zp(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function em(t){return!!t&&"integerValue"in t}function vy(t){return!!t&&"arrayValue"in t}function r0(t){return!!t&&"nullValue"in t}function i0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zu(t){return!!t&&"mapValue"in t}function ma(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ma(t.arrayValue.values[n]);return e}return Object.assign({},t)}function u$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ma(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ma(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){os(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(ma(this.value))}}function i1(t){const e=[];return os(t.fields,(n,r)=>{const i=new Tt([n]);if(zu(r)){const s=i1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new fn(e)}/**
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
 */class dt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new dt(e,0,se.min(),se.min(),Ft.empty(),0)}static newFoundDocument(e,n,r){return new dt(e,1,n,se.min(),r,0)}static newNoDocument(e,n){return new dt(e,2,n,se.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,se.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class c${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function s0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new c$(t,e,n,r,i,s,o)}function _y(t){const e=ne(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Bs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.ht=n}return e.ht}function h$(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Bs(r.value)}`;var r}).join(", ")}]`),qh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Bs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Bs(n)).join(",")),`Target(${e})`}function wy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!_$(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Kn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!a0(t.startAt,e.startAt)&&a0(t.endAt,e.endAt)}function tm(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Vt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new d$(e,n,r):n==="array-contains"?new m$(e,r):n==="in"?new g$(e,r):n==="not-in"?new y$(e,r):n==="array-contains-any"?new v$(e,r):new Vt(e,n,r)}static lt(e,n,r){return n==="in"?new f$(e,r):new p$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(io(n,this.value)):n!==null&&Ki(this.value)===Ki(n)&&this.ft(io(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class d$ extends Vt{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.ft(n)}}class f$ extends Vt{constructor(e,n){super(e,"in",n),this.keys=s1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class p$ extends Vt{constructor(e,n){super(e,"not-in",n),this.keys=s1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function s1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class m$ extends Vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vy(n)&&el(n.arrayValue,this.value)}}class g$ extends Vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class y$ extends Vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!el(this.value.arrayValue,n)}}class v$ extends Vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vy(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}class $c{constructor(e,n){this.position=e,this.inclusive=n}}class ga{constructor(e,n="asc"){this.field=e,this.dir=n}}function _$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function o0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function a0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function w$(t,e,n,r,i,s,o,a){return new Gh(t,e,n,r,i,s,o,a)}function Ey(t){return new Gh(t)}function l0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function E$(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function C$(t){for(const e of t.filters)if(e.dt())return e.field;return null}function T$(t){return t.collectionGroup!==null}function tl(t){const e=ne(t);if(e._t===null){e._t=[];const n=C$(e),r=E$(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new ga(n)),e._t.push(new ga(Tt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new ga(Tt.keyField(),s))}}}return e._t}function gr(t){const e=ne(t);if(!e.wt)if(e.limitType==="F")e.wt=s0(e.path,e.collectionGroup,tl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of tl(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ga(s.field,o))}const r=e.endAt?new $c(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new $c(e.startAt.position,e.startAt.inclusive):null;e.wt=s0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function nm(t,e,n){return new Gh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qh(t,e){return wy(gr(t),gr(e))&&t.limitType===e.limitType}function o1(t){return`${_y(gr(t))}|lt:${t.limitType}`}function rm(t){return`Query(target=${h$(gr(t))}; limitType=${t.limitType})`}function Cy(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=o0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,tl(n),r)||n.endAt&&!function(i,s,o){const a=o0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,tl(n),r))}(t,e)}function S$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function a1(t){return(e,n)=>{let r=!1;for(const i of tl(t)){const s=I$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function I$(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?io(a,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */function l1(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function u1(t){return{integerValue:""+t}}function k$(t,e){return l$(e)?u1(e):l1(t,e)}/**
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
 */class Yh{constructor(){this._=void 0}}function b$(t,e,n){return t instanceof Fc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof nl?h1(t,e):t instanceof rl?d1(t,e):function(r,i){const s=c1(r,i),o=u0(s)+u0(r.yt);return em(s)&&em(r.yt)?u1(o):l1(r.It,o)}(t,e)}function x$(t,e,n){return t instanceof nl?h1(t,e):t instanceof rl?d1(t,e):n}function c1(t,e){return t instanceof Uc?em(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Fc extends Yh{}class nl extends Yh{constructor(e){super(),this.elements=e}}function h1(t,e){const n=f1(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class rl extends Yh{constructor(e){super(),this.elements=e}}function d1(t,e){let n=f1(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class Uc extends Yh{constructor(e,n){super(),this.It=e,this.yt=n}}function u0(t){return ze(t.integerValue||t.doubleValue)}function f1(t){return vy(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function N$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof nl&&r instanceof nl||n instanceof rl&&r instanceof rl?no(n.elements,r.elements,Kn):n instanceof Uc&&r instanceof Uc?Kn(n.yt,r.yt):n instanceof Fc&&r instanceof Fc}(t.transform,e.transform)}class R${constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xh{}function p1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ty(t.key,pn.none()):new $l(t.key,t.data,pn.none());{const n=t.data,r=Ft.empty();let i=new Ze(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new di(t.key,r,new fn(i.toArray()),pn.none())}}function A$(t,e,n){t instanceof $l?function(r,i,s){const o=r.value.clone(),a=h0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof di?function(r,i,s){if(!Hu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=h0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(m1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ya(t,e,n,r){return t instanceof $l?function(i,s,o,a){if(!Hu(i.precondition,s))return o;const l=i.value.clone(),u=d0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof di?function(i,s,o,a){if(!Hu(i.precondition,s))return o;const l=d0(i.fieldTransforms,a,s),u=s.data;return u.setAll(m1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Hu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function P$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=c1(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function c0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&no(n,r,(i,s)=>N$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $l extends Xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class di extends Xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function m1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function h0(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,x$(o,a,n[i]))}return r}function d0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,b$(s,o,e))}return r}class Ty extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class O$ extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class D${constructor(e){this.count=e}}/**
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
 */var Be,de;function M$(t){switch(t){default:return ee();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function g1(t){if(t===void 0)return mr("GRPC error has no .code"),R.UNKNOWN;switch(t){case Be.OK:return R.OK;case Be.CANCELLED:return R.CANCELLED;case Be.UNKNOWN:return R.UNKNOWN;case Be.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Be.INTERNAL:return R.INTERNAL;case Be.UNAVAILABLE:return R.UNAVAILABLE;case Be.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Be.NOT_FOUND:return R.NOT_FOUND;case Be.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Be.ABORTED:return R.ABORTED;case Be.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Be.DATA_LOSS:return R.DATA_LOSS;default:return ee()}}(de=Be||(Be={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return t1(this.inner)}size(){return this.innerSize}}/**
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
 */const L$=new et(q.comparator);function yr(){return L$}const y1=new et(q.comparator);function ta(...t){let e=y1;for(const n of t)e=e.insert(n.key,n);return e}function v1(t){let e=y1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function bi(){return va()}function _1(){return va()}function va(){return new ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const $$=new et(q.comparator),F$=new Ze(q.comparator);function ue(...t){let e=F$;for(const n of t)e=e.add(n);return e}const U$=new Ze(ve);function w1(){return U$}/**
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
 */class Jh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jh(se.min(),i,w1(),yr(),ue())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,ue(),ue(),ue())}}/**
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
 */class Wu{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class E1{constructor(e,n){this.targetId=e,this.At=n}}class C1{constructor(e,n,r=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class f0{constructor(){this.Rt=0,this.bt=m0(),this.Pt=xt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ue(),n=ue(),r=ue();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Fl(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=m0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class j${constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=yr(),this.qt=p0(),this.Kt=new Ze(ve)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(tm(s))if(r===0){const o=new q(s.path);this.jt(n,o,dt.newNoDocument(o,se.min()))}else Se(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&tm(a.target)){const l=new q(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,dt.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=ue();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Jh(e,n,this.Kt,this.Ut,r);return this.Ut=yr(),this.qt=p0(),this.Kt=new Ze(ve),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new f0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ze(ve),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new f0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function p0(){return new et(q.comparator)}function m0(){return new et(q.comparator)}/**
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
 */const V$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),B$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class z${constructor(e,n){this.databaseId=e,this.gt=n}}function jc(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function T1(t,e){return t.gt?e.toBase64():e.toUint8Array()}function H$(t,e){return jc(t,e.toTimestamp())}function sr(t){return Se(!!t),se.fromTimestamp(function(e){const n=ni(e);return new Je(n.seconds,n.nanos)}(t))}function Sy(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function S1(t){const e=Ae.fromString(t);return Se(b1(e)),e}function im(t,e){return Sy(t.databaseId,e.path)}function ff(t,e){const n=S1(e);if(n.get(1)!==t.databaseId.projectId)throw new X(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(I1(n))}function sm(t,e){return Sy(t.databaseId,e)}function W$(t){const e=S1(t);return e.length===4?Ae.emptyPath():I1(e)}function om(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function I1(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g0(t,e,n){return{name:im(t,e),fields:n.value.mapValue.fields}}function K$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Se(u===void 0||typeof u=="string"),xt.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),xt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:g1(l.code);return new X(u,l.message||"")}(o);n=new C1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ff(t,r.document.name),s=sr(r.document.updateTime),o=new Ft({mapValue:{fields:r.document.fields}}),a=dt.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Wu(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ff(t,r.document),s=r.readTime?sr(r.readTime):se.min(),o=dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Wu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ff(t,r.document),s=r.removedTargetIds||[];n=new Wu([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new D$(i),o=r.targetId;n=new E1(o,s)}}return n}function q$(t,e){let n;if(e instanceof $l)n={update:g0(t,e.key,e.value)};else if(e instanceof Ty)n={delete:im(t,e.key)};else if(e instanceof di)n={update:g0(t,e.key,e.data),updateMask:rF(e.fieldMask)};else{if(!(e instanceof O$))return ee();n={verify:im(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Fc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof nl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof rl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Uc)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:H$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function G$(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?sr(r.updateTime):sr(i);return s.isEqual(se.min())&&(s=sr(i)),new R$(s,r.transformResults||[])}(n,e))):[]}function Q$(t,e){return{documents:[sm(t,e.path)]}}function Y$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=sm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=sm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(i0(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NAN"}};if(r0(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(i0(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NOT_NAN"}};if(r0(h.value))return{unaryFilter:{field:ds(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(h.field),op:eF(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ds(c.field),direction:Z$(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||qh(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function X$(t){let e=W$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=k1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ga(As(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,qh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new $c(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new $c(d,h)}(n.endAt)),w$(e,i,o,s,a,"F",l,u)}function J$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function k1(t){return t?t.unaryFilter!==void 0?[nF(t)]:t.fieldFilter!==void 0?[tF(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>k1(e)).reduce((e,n)=>e.concat(n)):ee():[]}function Z$(t){return V$[t]}function eF(t){return B$[t]}function ds(t){return{fieldPath:t.canonicalString()}}function As(t){return Tt.fromServerFormat(t.fieldPath)}function tF(t){return Vt.create(As(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function nF(t){switch(t.unaryFilter.op){case"IS_NAN":const e=As(t.unaryFilter.field);return Vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=As(t.unaryFilter.field);return Vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=As(t.unaryFilter.field);return Vt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=As(t.unaryFilter.field);return Vt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}function rF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function b1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class iF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&A$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ya(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=p1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>c0(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>c0(n,r))}}class Iy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=$$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Iy(e,n,r,i)}}/**
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
 */class sF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mi{constructor(e,n,r,i,s=se.min(),o=se.min(),a=xt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class oF{constructor(e){this.re=e}}function aF(t){const e=X$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nm(e,e.limit,"L"):e}/**
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
 */class lF{constructor(){this.Ye=new uF}addToCollectionParentIndex(e,n){return this.Ye.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(ti.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class uF{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ae.comparator)).toArray()}}/**
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
 */class cF{constructor(){this.changes=new ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dF{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ya(r.mutation,i,fn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ta();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=yr();const o=va(),a=va();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof di)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),ya(c.mutation,u,c.mutation.getFieldMask(),Je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new hF(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let i=new et((o,a)=>o-a),s=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||fn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=_1();c.forEach(d=>{if(!s.has(d)){const p=p1(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(bi());let a=-1,l=s;return o.next(u=>N.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?N.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ue())).next(c=>({batchId:a,changes:v1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ta();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(u,c){return new Gh(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,dt.newInvalidDocument(u)))});let o=ta();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ya(u.mutation,l,fn.empty(),Je.now()),Cy(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):N.resolve(dt.newInvalidDocument(n))}}/**
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
 */class fF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:sr(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:aF(r.bundledQuery),readTime:sr(r.readTime)}}(n)),N.resolve()}}/**
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
 */class pF{constructor(){this.overlays=new et(q.comparator),this.es=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=bi();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=bi(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new et((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=bi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sF(n,r));let s=this.es.get(n);s===void 0&&(s=ue(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class ky{constructor(){this.ns=new Ze(nt.ss),this.rs=new Ze(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new nt(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new q(new Ae([])),r=new nt(n,e),i=new nt(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new Ae([])),r=new nt(n,e),i=new nt(n,e+1);let s=ue();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new nt(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||ve(e._s,n._s)}static os(e,n){return ve(e._s,n._s)||q.comparator(e.key,n.key)}}/**
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
 */class mF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ze(nt.ss)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new nt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ve);return n.forEach(i=>{const s=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),N.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new nt(new q(s),0);let a=new Ze(ve);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),N.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return N.forEach(n.mutations,i=>{const s=new nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new nt(n,0),i=this.gs.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gF{constructor(e){this.Es=e,this.docs=new et(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),N.resolve(r)}getAllFromCollection(e,n,r){let i=yr();const s=new q(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||r$(n$(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,n,r,i){ee()}As(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yF(this)}getSize(e){return N.resolve(this.size)}}class yF extends cF{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class vF{constructor(e){this.persistence=e,this.Rs=new ko(n=>_y(n),wy),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ky,this.targetCount=0,this.vs=so.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),N.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new so(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Dn(n),N.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Ps.containsKey(n))}}/**
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
 */class _F{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yy(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new vF(this),this.indexManager=new lF,this.remoteDocumentCache=function(r){return new gF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new oF(n),this.Ns=new fF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new mF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new wF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return N.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class wF extends s${constructor(e){super(),this.currentSequenceNumber=e}}class by{constructor(e){this.persistence=e,this.Fs=new ky,this.$s=null}static Bs(e){return new by(e)}get Ls(){if(this.$s)return this.$s;throw ee()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),N.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ls,r=>{const i=q.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return N.or([()=>N.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class xy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ue(),i=ue();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xy(e,n.fromCache,r,i)}}/**
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
 */class EF{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(l0(n))return N.resolve(null);let r=gr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nm(n,null,"F"),r=gr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ue(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,nm(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return l0(n)||i.isEqual(se.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Zw()<=fe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rm(n)),this.Bi(e,o,n,t$(i,-1)))})}Fi(e,n){let r=new Ze(a1(e));return n.forEach((i,s)=>{Cy(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Zw()<=fe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",rm(n)),this.Ni.getDocumentsMatchingQuery(e,n,ti.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class CF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new et(ve),this.qi=new ko(s=>_y(s),wy),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dF(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function TF(t,e,n,r){return new CF(t,e,n,r)}async function x1(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ue();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function SF(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=N.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const _=l.docVersions.get(p);Se(_!==null),g.version.compareTo(_)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ue();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function N1(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function IF(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(xt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,_,E){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let l=yr(),u=ue();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(kF(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(se.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function kF(t,e,n){let r=ue(),i=ue();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=yr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function bF(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xF(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Mi(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function am(t,e,n){const r=ne(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ll(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function y0(t,e,n){const r=ne(t);let i=se.min(),s=ue();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ne(a),h=c.qi.get(u);return h!==void 0?N.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,gr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:ue())).next(a=>(NF(r,S$(e),a),{documents:a,Hi:s})))}function NF(t,e,n){let r=t.Ki.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class v0{constructor(){this.activeTargetIds=w1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RF{constructor(){this.Lr=new v0,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new v0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class AF{qr(e){}shutdown(){}}/**
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
 */class _0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const PF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class DF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);H("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(H("RestConnection","Received: ",l),l),l=>{throw Jp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Io,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=PF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new WL;a.setWithCredentials(!0),a.listenOnce(BL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case df.NO_ERROR:const u=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(u)),s(u);break;case df.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new X(R.DEADLINE_EXCEEDED,"Request time out"));break;case df.HTTP_ERROR:const c=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(g)>=0?g:R.UNKNOWN}(h.status);o(new X(d,h.message))}else o(new X(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new X(R.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jL(),o=VL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new HL({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");H("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new OF({Hr:g=>{h?H("Connection","Not sending because WebChannel is closed:",g):(c||(H("Connection","Opening WebChannel transport."),u.open(),c=!0),H("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,_,E)=>{g.listen(_,m=>{try{E(m)}catch(y){setTimeout(()=>{throw y},0)}})};return p(u,_u.EventType.OPEN,()=>{h||H("Connection","WebChannel transport opened.")}),p(u,_u.EventType.CLOSE,()=>{h||(h=!0,H("Connection","WebChannel transport closed"),d.io())}),p(u,_u.EventType.ERROR,g=>{h||(h=!0,Jp("Connection","WebChannel transport errored:",g),d.io(new X(R.UNAVAILABLE,"The operation could not be completed")))}),p(u,_u.EventType.MESSAGE,g=>{var _;if(!h){const E=g.data[0];Se(!!E);const m=E,y=m.error||((_=m[0])===null||_===void 0?void 0:_.error);if(y){H("Connection","WebChannel received error:",y);const v=y.status;let T=function(x){const A=Be[x];if(A!==void 0)return g1(A)}(v),S=y.message;T===void 0&&(T=R.INTERNAL,S="Unknown error status: "+v+" with message "+y.message),h=!0,d.io(new X(T,S)),u.close()}else H("Connection","WebChannel received:",E),d.ro(E)}}),p(o,zL.STAT_EVENT,g=>{g.stat===Xw.PROXY?H("Connection","Detected buffering proxy"):g.stat===Xw.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function pf(){return typeof document<"u"?document:null}/**
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
 */function Zh(t){return new z$(t,!0)}class R1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class A1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new R1(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new X(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MF extends A1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=K$(this.It,e),r=function(i){if(!("targetChange"in i))return se.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?sr(s.readTime):se.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=om(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=tm(a)?{documents:Q$(i,a)}:{query:Y$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=T1(i,s.resumeToken):s.snapshotVersion.compareTo(se.min())>0&&(o.readTime=jc(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=J$(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=om(this.It),n.removeTarget=e,this.Lo(n)}}class LF extends A1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=G$(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.tu(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=om(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>q$(this.It,r))};this.Lo(n)}}/**
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
 */class $F extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new X(R.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(R.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(R.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class FF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(mr(n),this.uu=!1):H("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class UF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{as(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l.wu.add(4),await Ul(l),l.yu.set("Unknown"),l.wu.delete(4),await ed(l)}(this))})}),this.yu=new FF(r,i)}}async function ed(t){if(as(t))for(const e of t.mu)await e(!0)}async function Ul(t){for(const e of t.mu)await e(!1)}function P1(t,e){const n=ne(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Ay(n)?Ry(n):bo(n).Oo()&&Ny(n,e))}function O1(t,e){const n=ne(t),r=bo(n);n._u.delete(e),r.Oo()&&D1(n,e),n._u.size===0&&(r.Oo()?r.$o():as(n)&&n.yu.set("Unknown"))}function Ny(t,e){t.pu.Mt(e.targetId),bo(t).Ho(e)}function D1(t,e){t.pu.Mt(e),bo(t).Jo(e)}function Ry(t){t.pu=new j$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),bo(t).start(),t.yu.cu()}function Ay(t){return as(t)&&!bo(t).ko()&&t._u.size>0}function as(t){return ne(t).wu.size===0}function M1(t){t.pu=void 0}async function jF(t){t._u.forEach((e,n)=>{Ny(t,e)})}async function VF(t,e){M1(t),Ay(t)?(t.yu.lu(e),Ry(t)):t.yu.set("Unknown")}async function BF(t,e,n){if(t.yu.set("Online"),e instanceof C1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vc(t,r)}else if(e instanceof Wu?t.pu.Gt(e):e instanceof E1?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(se.min()))try{const r=await N1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(xt.EMPTY_BYTE_STRING,l.snapshotVersion)),D1(i,a);const u=new Mi(l.target,a,1,l.sequenceNumber);Ny(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Vc(t,r)}}async function Vc(t,e,n){if(!Ll(e))throw e;t.wu.add(1),await Ul(t),t.yu.set("Offline"),n||(n=()=>N1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ed(t)})}function L1(t,e){return e().catch(n=>Vc(t,n,e))}async function td(t){const e=ne(t),n=ri(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;zF(e);)try{const i=await bF(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,HF(e,i)}catch(i){await Vc(e,i)}$1(e)&&F1(e)}function zF(t){return as(t)&&t.du.length<10}function HF(t,e){t.du.push(e);const n=ri(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function $1(t){return as(t)&&!ri(t).ko()&&t.du.length>0}function F1(t){ri(t).start()}async function WF(t){ri(t).nu()}async function KF(t){const e=ri(t);for(const n of t.du)e.Zo(n.mutations)}async function qF(t,e,n){const r=t.du.shift(),i=Iy.from(r,e,n);await L1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await td(t)}async function GF(t,e){e&&ri(t).Xo&&await async function(n,r){if(i=r.code,M$(i)&&i!==R.ABORTED){const s=n.du.shift();ri(n).Fo(),await L1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await td(n)}var i}(t,e),$1(t)&&F1(t)}async function w0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=as(n);n.wu.add(3),await Ul(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ed(n)}async function QF(t,e){const n=ne(t);e?(n.wu.delete(2),await ed(n)):e||(n.wu.add(2),await Ul(n),n.yu.set("Unknown"))}function bo(t){return t.Iu||(t.Iu=function(e,n,r){const i=ne(e);return i.iu(),new MF(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:jF.bind(null,t),Zr:VF.bind(null,t),zo:BF.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Ay(t)?Ry(t):t.yu.set("Unknown")):(await t.Iu.stop(),M1(t))})),t.Iu}function ri(t){return t.Tu||(t.Tu=function(e,n,r){const i=ne(e);return i.iu(),new LF(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:WF.bind(null,t),Zr:GF.bind(null,t),eu:KF.bind(null,t),tu:qF.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await td(t)):(await t.Tu.stop(),t.du.length>0&&(H("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Py{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Py(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oy(t,e){if(mr("AsyncQueue",`${e}: ${t}`),Ll(t))return new X(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class E0{constructor(){this.Eu=new et(q.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):ee():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,zs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class YF{constructor(){this.Ru=void 0,this.listeners=[]}}class XF{constructor(){this.queries=new ko(e=>o1(e),Qh),this.onlineState="Unknown",this.bu=new Set}}async function JF(t,e){const n=ne(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new YF),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Oy(o,`Initialization of query '${rm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&Dy(n)}async function ZF(t,e){const n=ne(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function eU(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&Dy(n)}function tU(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Dy(t){t.bu.forEach(e=>{e.next()})}class nU{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class U1{constructor(e){this.key=e}}class j1{constructor(e){this.key=e}}class rU{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ue(),this.mutatedKeys=ue(),this.Gu=a1(e),this.Qu=new zs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new E0,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Cy(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==_&&(r.track({type:3,doc:p}),E=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.Gu(p,l)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return p(h)-p(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new oo(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new E0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ue(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new j1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new U1(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ue();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return oo.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class iU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sU{constructor(e){this.key=e,this.nc=!1}}class oU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new ko(a=>o1(a),Qh),this.rc=new Map,this.oc=new Set,this.uc=new et(q.comparator),this.cc=new Map,this.ac=new ky,this.hc={},this.lc=new Map,this.fc=so.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function aU(t,e){const n=yU(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await xF(n.localStore,gr(e));n.isPrimaryClient&&P1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await lU(n,e,r,a==="current",o.resumeToken)}return i}async function lU(t,e,n,r,i){t._c=(h,d,p)=>async function(g,_,E,m){let y=_.view.Wu(E);y.$i&&(y=await y0(g.localStore,_.query,!1).then(({documents:S})=>_.view.Wu(S,y)));const v=m&&m.targetChanges.get(_.targetId),T=_.view.applyChanges(y,g.isPrimaryClient,v);return T0(g,_.targetId,T.Xu),T.snapshot}(t,h,d,p);const s=await y0(t.localStore,e,!0),o=new rU(e,s.Hi),a=o.Wu(s.documents),l=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);T0(t,n,u.Xu);const c=new iU(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function uU(t,e){const n=ne(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Qh(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await am(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),O1(n.remoteStore,r.targetId),lm(n,r.targetId)}).catch(Ml)):(lm(n,r.targetId),await am(n.localStore,r.targetId,!0))}async function cU(t,e,n){const r=vU(t);try{const i=await function(s,o){const a=ne(s),l=Je.now(),u=o.reduce((d,p)=>d.add(p.key),ue());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=yr(),g=ue();return a.Gi.getEntries(d,u).next(_=>{p=_,p.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(_=>{c=_;const E=[];for(const m of o){const y=P$(m,c.get(m.key).overlayedDocument);y!=null&&E.push(new di(m.key,y,i1(y.value.mapValue),pn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(_=>{h=_;const E=_.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,E)})}).then(()=>({batchId:h.batchId,changes:v1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new et(ve)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await jl(r,i.changes),await td(r.remoteStore)}catch(i){const s=Oy(i,"Failed to persist write");n.reject(s)}}async function V1(t,e){const n=ne(t);try{const r=await IF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Se(o.nc):i.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await jl(n,r,e)}catch(r){await Ml(r)}}function C0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ne(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&Dy(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hU(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new et(q.comparator);o=o.insert(s,dt.newNoDocument(s,se.min()));const a=ue().add(s),l=new Jh(se.min(),new Map,new Ze(ve),o,a);await V1(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),My(r)}else await am(r.localStore,e,!1).then(()=>lm(r,e,n)).catch(Ml)}async function dU(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await SF(n.localStore,e);z1(n,r,null),B1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,i)}catch(i){await Ml(i)}}async function fU(t,e,n){const r=ne(t);try{const i=await function(s,o){const a=ne(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Se(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);z1(r,e,n),B1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,i)}catch(i){await Ml(i)}}function B1(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function z1(t,e,n){const r=ne(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function lm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||H1(t,r)})}function H1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(O1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),My(t))}function T0(t,e,n){for(const r of n)r instanceof U1?(t.ac.addReference(r.key,e),pU(t,r)):r instanceof j1?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||H1(t,r.key)):ee()}function pU(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(H("SyncEngine","New document in limbo: "+n),t.oc.add(r),My(t))}function My(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(Ae.fromString(e)),r=t.fc.next();t.cc.set(r,new sU(n)),t.uc=t.uc.insert(n,r),P1(t.remoteStore,new Mi(gr(Ey(n.path)),r,2,yy.at))}}async function jl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=xy.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=ne(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(l,h=>N.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>N.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ll(c))throw c;H("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Ui=u.Ui.insert(h,g)}}}(r.localStore,s))}async function mU(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await x1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new X(R.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.ji)}}function gU(t,e){const n=ne(t),r=n.cc.get(e);if(r&&r.nc)return ue().add(r.key);{let i=ue();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function yU(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=V1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hU.bind(null,e),e.sc.zo=eU.bind(null,e.eventManager),e.sc.wc=tU.bind(null,e.eventManager),e}function vU(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fU.bind(null,e),e}class _U{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Zh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return TF(this.persistence,new EF,e.initialUser,this.It)}yc(e){return new _F(by.Bs,this.It)}gc(e){return new RF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mU.bind(null,this.syncEngine),await QF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new XF}createDatastore(e){const n=Zh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new DF(i));var i;return function(s,o,a,l){return new $F(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>C0(this.syncEngine,a,0),o=_0.C()?new _0:new AF,new UF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new oU(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);H("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ul(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function W1(t,e,n){if(!n)throw new X(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function EU(t,e,n,r){if(e===!0&&r===!0)throw new X(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function S0(t){if(!q.isDocumentKey(t))throw new X(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function I0(t){if(q.isDocumentKey(t))throw new X(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ly(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ly(t);throw new X(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const k0=new Map;class b0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new X(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,EU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class nd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KL;switch(n.type){case"gapi":const r=n.client;return new YL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new X(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=k0.get(e);n&&(H("ComponentProvider","Removing Datastore"),k0.delete(e),n.terminate())}(this),Promise.resolve()}}function CU(t,e,n,r={}){var i;const s=(t=Hn(t,nd))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Jp("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=_t.MOCK_USER;else{o=dP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new X(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new _t(l)}t._authCredentials=new qL(new ZI(o,a))}}/**
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
 */class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class rd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rd(this.firestore,e,this._query)}}class Xr extends rd{constructor(e,n,r){super(e,n,Ey(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new q(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function Yt(t,e,...n){if(t=Fe(t),W1("collection","path",e),t instanceof nd){const r=Ae.fromString(e,...n);return I0(r),new Xr(t,null,r)}{if(!(t instanceof qt||t instanceof Xr))throw new X(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return I0(r),new Xr(t.firestore,null,r)}}function yi(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=e1.R()),W1("doc","path",e),t instanceof nd){const r=Ae.fromString(e,...n);return S0(r),new qt(t,null,new q(r))}{if(!(t instanceof qt||t instanceof Xr))throw new X(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return S0(r),new qt(t.firestore,t instanceof Xr?t.converter:null,new q(r))}}/**
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
 */class TU{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class SU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=e1.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Oy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function IU(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await x1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kU(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bU(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>w0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>w0(e.remoteStore,s)),t.onlineComponents=e}async function bU(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await IU(t,new _U)),t.offlineComponents}async function K1(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await kU(t,new wU)),t.onlineComponents}function xU(t){return K1(t).then(e=>e.syncEngine)}async function x0(t){const e=await K1(t),n=e.eventManager;return n.onListen=aU.bind(null,e.syncEngine),n.onUnlisten=uU.bind(null,e.syncEngine),n}class NU{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new R1(this,"async_queue_retry"),this.Wc=()=>{const n=pf();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=pf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=pf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Di;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Ll(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw mr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Py.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&ee()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function N0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qi extends nd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new NU,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||G1(this),this._firestoreClient.terminate()}}function RU(t,e){const n=typeof t=="object"?t:_S(),r=typeof t=="string"?t:e||"(default)",i=wl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cP("firestore");s&&CU(i,...s)}return i}function q1(t){return t._firestoreClient||G1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function G1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new a$(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new SU(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(xt.fromBase64String(e))}catch(n){throw new X(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ao(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $y{constructor(e){this._methodName=e}}/**
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
 */class Fy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const AU=/^__.*__$/;class PU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new di(e,this.data,this.fieldMask,n,this.fieldTransforms):new $l(e,this.data,n,this.fieldTransforms)}}class Q1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new di(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Uy{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Uy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Bc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Y1(this.sa)&&AU.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class OU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Zh(e)}da(e,n,r,i=!1){return new Uy({sa:e,methodName:n,fa:r,path:Tt.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function jy(t){const e=t._freezeSettings(),n=Zh(t._databaseId);return new OU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function X1(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Vy("Data must be an object, but it was:",o,r);const a=J1(r,o);let l,u;if(s.merge)l=new fn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=um(e,h,n);if(!o.contains(d))throw new X(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ek(c,d)||c.push(d)}l=new fn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new PU(new Ft(a),l,u)}class sd extends $y{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sd}}function DU(t,e,n,r){const i=t.da(1,e,n);Vy("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();os(r,(l,u)=>{const c=By(e,l,n);u=Fe(u);const h=i.ca(c);if(u instanceof sd)s.push(c);else{const d=od(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new fn(s);return new Q1(o,a,i.fieldTransforms)}function MU(t,e,n,r,i,s){const o=t.da(1,e,n),a=[um(e,r,n)],l=[i];if(s.length%2!=0)throw new X(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(um(e,s[d])),l.push(s[d+1]);const u=[],c=Ft.empty();for(let d=a.length-1;d>=0;--d)if(!ek(u,a[d])){const p=a[d];let g=l[d];g=Fe(g);const _=o.ca(p);if(g instanceof sd)u.push(p);else{const E=od(g,_);E!=null&&(u.push(p),c.set(p,E))}}const h=new fn(u);return new Q1(c,h,o.fieldTransforms)}function od(t,e){if(Z1(t=Fe(t)))return Vy("Unsupported field value:",e,t),J1(t,e);if(t instanceof $y)return function(n,r){if(!Y1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=od(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return k$(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Je.fromDate(n);return{timestampValue:jc(r.It,i)}}if(n instanceof Je){const i=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jc(r.It,i)}}if(n instanceof Fy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ao)return{bytesValue:T1(r.It,n._byteString)};if(n instanceof qt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ly(n)}`)}(t,e)}function J1(t,e){const n={};return t1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,i)=>{const s=od(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Z1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Fy||t instanceof ao||t instanceof qt||t instanceof $y)}function Vy(t,e,n){if(!Z1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ly(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function um(t,e,n){if((e=Fe(e))instanceof id)return e._internalPath;if(typeof e=="string")return By(t,e);throw Bc("Field path arguments must be of type string or ",t,!1,void 0,n)}const LU=new RegExp("[~\\*/\\[\\]]");function By(t,e,n){if(e.search(LU)>=0)throw Bc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new id(...e.split("."))._internalPath}catch{throw Bc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new X(R.INVALID_ARGUMENT,a+t+l)}function ek(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $U(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nk("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $U extends tk{data(){return super.data()}}function nk(t,e){return typeof e=="string"?By(t,e):e instanceof id?e._internalPath:e._delegate._internalPath}/**
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
 */function FU(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
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
 */class UU{convertValue(e,n="none"){switch(Ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ro(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return os(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Fy(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=r1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ja(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Se(b1(r));const i=new Za(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||mr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function rk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ik extends tk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nk("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ku extends ik{data(e={}){return super.data(e)}}class jU{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ku(this._firestore,this._userDataWriter,r.key,r,new na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ku(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ku(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:VU(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function VU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class sk extends UU{constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function BU(t,e,n){t=Hn(t,qt);const r=Hn(t.firestore,qi),i=rk(t.converter,e,n);return ad(r,[X1(jy(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,pn.none())])}function R0(t,e,n,...r){t=Hn(t,qt);const i=Hn(t.firestore,qi),s=jy(i);let o;return o=typeof(e=Fe(e))=="string"||e instanceof id?MU(s,"updateDoc",t._key,e,n,r):DU(s,"updateDoc",t._key,e),ad(i,[o.toMutation(t._key,pn.exists(!0))])}function mf(t){return ad(Hn(t.firestore,qi),[new Ty(t._key,pn.none())])}function jo(t,e){const n=Hn(t.firestore,qi),r=yi(t),i=rk(t.converter,e);return ad(n,[X1(jy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function br(t,...e){var n,r,i;t=Fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||N0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(N0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof qt)u=Hn(t.firestore,qi),c=Ey(t._key.path),l={next:h=>{e[o]&&e[o](zU(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Hn(t,rd);u=Hn(h.firestore,qi),c=h._query;const d=new sk(u);l={next:p=>{e[o]&&e[o](new jU(u,d,h,p))},error:e[o+1],complete:e[o+2]},FU(t._query)}return function(h,d,p,g){const _=new TU(g),E=new nU(d,_,p);return h.asyncQueue.enqueueAndForget(async()=>JF(await x0(h),E)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>ZF(await x0(h),E))}}(q1(u),c,a,l)}function ad(t,e){return function(n,r){const i=new Di;return n.asyncQueue.enqueueAndForget(async()=>cU(await xU(n),r,i)),i.promise}(q1(t),e)}function zU(t,e,n){const r=n.docs.get(e._key),i=new sk(t);return new ik(t,i,e._key,r,new na(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Io=n})(ui),yn(new rn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new qi(new GL(n.getProvider("auth-internal")),new JL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new X(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),We(Jw,"3.7.0",t),We(Jw,"3.7.0","esm2017")})();const ok={apiKey:"AIzaSyCUkaT8gkDtiHm3MBfjdcx6TLjuwX1IbK4",authDomain:"ratios-app.firebaseapp.com",databaseURL:"https://ratios-app-default-rtdb.firebaseio.com",projectId:"ratios-app",storageBucket:"ratios-app.appspot.com",messagingSenderId:"497337383028",appId:"1:497337383028:web:a681e667ce52887556f921",measurementId:"G-1YS1RK2V0S"},ak=Ug(ok),Ke=VM(ak),qe=RU(ak),lk=w.exports.createContext(),Er=()=>w.exports.useContext(lk),HU=({children:t})=>{const[e,n]=w.exports.useState(null),[r,i]=w.exports.useState(!0),[s,o]=w.exports.useState([{}]),[a,l]=w.exports.useState([{}]),[u,c]=w.exports.useState([{}]),[h,d]=w.exports.useState([{}]),[p,g]=w.exports.useState([{}]),[_,E]=w.exports.useState(!1),m=async(k,M)=>ED(Ke,k,M),y=async(k,M)=>CD(Ke,k,M),v=()=>bD(Ke),T=async k=>{const M=Ke.currentUser.uid;await BU(yi(qe,"user",`${M}`),k)},S=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"gestion-periodo"),{...k,uid:M})},x=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"cuentas"),{...k,uid:M})},A=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"bool-cuenta"),{...k,uid:M})},D=async k=>{const M=Ke.currentUser.uid;await jo(Yt(qe,"bool-calculate"),{...k,uid:M})},B=async k=>{await jo(Yt(qe,"bool-verify"),{...k})},Y=async k=>{br(Yt(qe,"bool-cuenta"),M=>{const z=Ke.currentUser.uid;M.forEach(W=>{const{uid:me,gestion:Rt}=W.data();me===z&&Rt===k&&mf(yi(qe,"bool-cuenta",`${W.id}`))})})},re=async k=>{br(Yt(qe,"gestion-periodo"),M=>{const z=Ke.currentUser.uid;M.forEach(W=>{const{uid:me,gestion:Rt}=W.data();me===z&&Rt===k&&mf(yi(qe,"gestion-periodo",`${W.id}`))})})},Nt=async k=>{br(Yt(qe,"cuentas"),M=>{const z=Ke.currentUser.uid;M.forEach(W=>{const{uid:me,gestion:Rt}=W.data();me===z&&Rt===k&&(mf(yi(qe,"cuentas",`${W.id}`)),Y(k),re(k))})})},lt=async()=>{br(Yt(qe,"bool-cuenta"),k=>{const M=[];k.forEach(z=>{const{uid:W}=z.data();W===K()&&M.push({...z.data()})}),o(M)})},Lt=async()=>{br(Yt(qe,"bool-calculate"),k=>{const M=[];k.forEach(z=>{const{uid:W}=z.data();W===K()&&M.push({...z.data()})}),d(M)})},Pe=async()=>{br(Yt(qe,"cuentas"),k=>{const M=[],z=Ke.currentUser.uid;k.forEach(W=>{const{uid:me}=W.data();me===z&&M.push({...W.data(),id:W.id})}),l(M)})},_n=async()=>{br(Yt(qe,"gestion-periodo"),k=>{const M=[],z=Ke.currentUser.uid;k.forEach(W=>{const{uid:me}=W.data();me===z&&M.push({...W.data(),id:W.id})}),c(M)})},ln=async k=>{const M=[];a.map(z=>{const{gestion:W}=z;W===k&&M.push({...z})}),g(M)},O=async(k,M)=>{await R0(yi(qe,"cuentas",`${M}`),k)},G=async(k,M)=>{await R0(yi(qe,"gestion-periodo",`${M}`),k)},K=()=>{if(Ke!==null)return Ke.currentUser.uid},ye=async()=>{br(Yt(qe,"bool-verify"),k=>{k.forEach(M=>{const{uid:z,verification:W}=M.data();z===K()&&E(W)})})},F=()=>Ke.currentUser.emailVerified;return w.exports.useEffect(()=>{kD(Ke,k=>{n(k),i(!1),Ke.currentUser!==null&&(ye(),Pe(),lt(),_n(),Lt())})},[Ke]),f(lk.Provider,{value:{signup:m,login:y,user:e,logout:v,loading:r,getIdCurrentUser:K,userAddDatabase:T,userAddGestionAndPeriodo:S,userAddCuentas:x,isEmailVerifyUser:F,userUpdateCuentas:O,userAddBool:A,boolCuenta:s,boolCalculate:h,userCounts:a,gestionCurrent:u,getCuentasOfGestion:ln,dataCalculate:p,userAddCuentasOfGestion:D,userAddVerificationEmail:B,boolVerificationEmail:_,userUpdateGestionCalculate:G,onDeleteListCounts:Nt},children:t})};var uk={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(uk);const he=uk.exports,WU=["as","disabled"];function KU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qU(t){return!t||t.trim()==="#"}function zy({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:a=0,type:l}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=d=>{if((e||t==="a"&&qU(n))&&d.preventDefault(),e){d.stopPropagation();return}o==null||o(d)},h=d=>{d.key===" "&&(d.preventDefault(),c(d))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s!=null?s:"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:c,onKeyDown:h},u]}const ck=w.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=KU(t,WU);const[s,{tagName:o}]=zy(Object.assign({tagName:n,disabled:r},i));return f(o,Object.assign({},i,s,{ref:e}))});ck.displayName="Button";const GU=["xxl","xl","lg","md","sm","xs"],QU="xs",Hy=w.exports.createContext({prefixes:{},breakpoints:GU,minBreakpoint:QU});function we(t,e){const{prefixes:n}=w.exports.useContext(Hy);return t||n[e]||e}function hk(){const{breakpoints:t}=w.exports.useContext(Hy);return t}function dk(){const{minBreakpoint:t}=w.exports.useContext(Hy);return t}const YU={variant:"primary",active:!1,disabled:!1},ht=w.exports.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},a)=>{const l=we(e,"btn"),[u,{tagName:c}]=zy({tagName:t,...o});return f(c,{...u,...o,ref:a,className:he(s,l,i&&"active",n&&`${l}-${n}`,r&&`${l}-${r}`,o.href&&o.disabled&&"disabled")})});ht.displayName="Button";ht.defaultProps=YU;var Wn={exports:{}},XU="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",JU=XU,ZU=JU;function fk(){}function pk(){}pk.resetWarningCache=fk;var e2=function(){function t(r,i,s,o,a,l){if(l!==ZU){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:pk,resetWarningCache:fk};return n.PropTypes=n,n};Wn.exports=e2();const t2={type:Wn.exports.string,tooltip:Wn.exports.bool,as:Wn.exports.elementType},ld=w.exports.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>f(t,{...i,ref:s,className:he(e,`${n}-${r?"tooltip":"feedback"}`)}));ld.displayName="Feedback";ld.propTypes=t2;const vr=w.exports.createContext({}),Wy=w.exports.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...a},l)=>{const{controlId:u}=w.exports.useContext(vr);return e=we(e,"form-check-input"),f(o,{...a,ref:l,type:r,id:t||u,className:he(n,e,i&&"is-valid",s&&"is-invalid")})});Wy.displayName="FormCheckInput";const zc=w.exports.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=w.exports.useContext(vr);return t=we(t,"form-check-label"),f("label",{...r,ref:i,htmlFor:n||s,className:he(e,t)})});zc.displayName="FormCheckLabel";function n2(t,e){return w.exports.Children.toArray(t).some(n=>w.exports.isValidElement(n)&&n.type===e)}const mk=w.exports.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:h,style:d,title:p="",type:g="checkbox",label:_,children:E,as:m="input",...y},v)=>{e=we(e,"form-check"),n=we(n,"form-switch");const{controlId:T}=w.exports.useContext(vr),S=w.exports.useMemo(()=>({controlId:t||T}),[T,t]),x=!E&&_!=null&&_!==!1||n2(E,zc),A=f(Wy,{...y,type:g==="switch"?"checkbox":g,ref:v,isValid:o,isInvalid:a,disabled:s,as:m});return f(vr.Provider,{value:S,children:f("div",{style:d,className:he(h,x&&e,r&&`${e}-inline`,i&&`${e}-reverse`,g==="switch"&&n),children:E||C(j,{children:[A,x&&f(zc,{title:p,children:_}),u&&f(ld,{type:c,tooltip:l,children:u})]})})})});mk.displayName="FormCheck";const Hc=Object.assign(mk,{Input:Wy,Label:zc}),gk=w.exports.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...h},d)=>{const{controlId:p}=w.exports.useContext(vr);t=we(t,"form-control");let g;return l?g={[`${t}-plaintext`]:!0}:g={[t]:!0,[`${t}-${n}`]:n},f(c,{...h,type:e,size:r,ref:d,readOnly:u,id:i||p,className:he(s,g,o&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});gk.displayName="FormControl";const r2=Object.assign(gk,{Feedback:ld});var i2=/-(.)/g;function s2(t){return t.replace(i2,function(e,n){return n.toUpperCase()})}const o2=t=>t[0].toUpperCase()+s2(t).slice(1);function Qt(t,{displayName:e=o2(t),Component:n,defaultProps:r}={}){const i=w.exports.forwardRef(({className:s,bsPrefix:o,as:a=n||"div",...l},u)=>{const c=we(o,t);return f(a,{ref:u,className:he(s,c),...l})});return i.defaultProps=r,i.displayName=e,i}const a2=Qt("form-floating"),Ky=w.exports.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=w.exports.useMemo(()=>({controlId:t}),[t]);return f(vr.Provider,{value:i,children:f(e,{...n,ref:r})})});Ky.displayName="FormGroup";function l2({as:t,bsPrefix:e,className:n,...r}){e=we(e,"col");const i=hk(),s=dk(),o=[],a=[];return i.forEach(l=>{const u=r[l];delete r[l];let c,h,d;typeof u=="object"&&u!=null?{span:c,offset:h,order:d}=u:c=u;const p=l!==s?`-${l}`:"";c&&o.push(c===!0?`${e}${p}`:`${e}${p}-${c}`),d!=null&&a.push(`order${p}-${d}`),h!=null&&a.push(`offset${p}-${h}`)}),[{...r,className:he(n,...o,...a)},{as:t,bsPrefix:e,spans:o}]}const I=w.exports.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=l2(t);return f(i,{...r,ref:e,className:he(n,!o.length&&s)})});I.displayName="Col";const u2={column:!1,visuallyHidden:!1},qy=w.exports.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},a)=>{const{controlId:l}=w.exports.useContext(vr);e=we(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=he(i,e,r&&"visually-hidden",n&&u);return s=s||l,n?f(I,{ref:a,as:"label",className:c,htmlFor:s,...o}):f(t,{ref:a,className:c,htmlFor:s,...o})});qy.displayName="FormLabel";qy.defaultProps=u2;const yk=w.exports.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=w.exports.useContext(vr);return t=we(t,"form-range"),f("input",{...r,type:"range",ref:i,className:he(e,t),id:n||s})});yk.displayName="FormRange";const vk=w.exports.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...a},l)=>{const{controlId:u}=w.exports.useContext(vr);return t=we(t,"form-select"),f("select",{...a,size:n,ref:l,className:he(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});vk.displayName="FormSelect";const _k=w.exports.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=we(t,"form-text"),f(n,{...i,ref:s,className:he(e,t,r&&"text-muted")})));_k.displayName="FormText";const wk=w.exports.forwardRef((t,e)=>f(Hc,{...t,ref:e,type:"switch"}));wk.displayName="Switch";const c2=Object.assign(wk,{Input:Hc.Input,Label:Hc.Label}),Ek=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=we(t,"form-floating"),C(Ky,{ref:o,className:he(e,t),controlId:r,...s,children:[n,f("label",{htmlFor:r,children:i})]})));Ek.displayName="FloatingLabel";const h2={_ref:Wn.exports.any,validated:Wn.exports.bool,as:Wn.exports.elementType},Gy=w.exports.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>f(n,{...r,ref:i,className:he(t,e&&"was-validated")}));Gy.displayName="Form";Gy.propTypes=h2;const U=Object.assign(Gy,{Group:Ky,Control:r2,Floating:a2,Check:Hc,Switch:c2,Label:qy,Text:_k,Range:yk,Select:vk,FloatingLabel:Ek}),ud=t=>w.exports.forwardRef((e,n)=>f("div",{...e,ref:n,className:he(e.className,t)})),Ck=w.exports.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const o=we(t,"card-img");return f(r,{ref:s,className:he(n?`${o}-${n}`:o,e),...i})});Ck.displayName="CardImg";const Qy=w.exports.createContext(null);Qy.displayName="CardHeaderContext";const Tk=w.exports.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=we(t,"card-header"),o=w.exports.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return f(Qy.Provider,{value:o,children:f(n,{ref:i,...r,className:he(e,s)})})});Tk.displayName="CardHeader";const d2=ud("h5"),f2=ud("h6"),Sk=Qt("card-body"),p2=Qt("card-title",{Component:d2}),m2=Qt("card-subtitle",{Component:f2}),g2=Qt("card-link",{Component:"a"}),y2=Qt("card-text",{Component:"p"}),v2=Qt("card-footer"),_2=Qt("card-img-overlay"),w2={body:!1},Yy=w.exports.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s,children:o,as:a="div",...l},u)=>{const c=we(t,"card");return f(a,{ref:u,...l,className:he(e,c,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?f(Sk,{children:o}):o})});Yy.displayName="Card";Yy.defaultProps=w2;const te=Object.assign(Yy,{Img:Ck,Title:p2,Subtitle:m2,Body:Sk,Link:g2,Text:y2,Header:Tk,Footer:v2,ImgOverlay:_2}),E2={fluid:!1},Jt=w.exports.forwardRef(({bsPrefix:t,fluid:e,as:n="div",className:r,...i},s)=>{const o=we(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return f(n,{ref:s,...i,className:he(r,e?`${o}${a}`:o)})});Jt.displayName="Container";Jt.defaultProps=E2;const ie=w.exports.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=we(t,"row"),o=hk(),a=dk(),l=`${s}-cols`,u=[];return o.forEach(c=>{const h=r[c];delete r[c];let d;h!=null&&typeof h=="object"?{cols:d}=h:d=h;const p=c!==a?`-${c}`:"";d!=null&&u.push(`${l}${p}-${d}`)}),f(n,{ref:i,...r,className:he(e,s,...u)})});ie.displayName="Row";function cm(){return cm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cm.apply(this,arguments)}function Ik(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function A0(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function C2(t){var e=T2(t,"string");return typeof e=="symbol"?e:String(e)}function T2(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function S2(t,e,n){var r=w.exports.useRef(t!==void 0),i=w.exports.useState(e),s=i[0],o=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&s!==e&&o(e),[a?t:s,w.exports.useCallback(function(u){for(var c=arguments.length,h=new Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(h)),o(u)},[n])]}function Xy(t,e){return Object.keys(e).reduce(function(n,r){var i,s=n,o=s[A0(r)],a=s[r],l=Ik(s,[A0(r),r].map(C2)),u=e[r],c=S2(a,o,t[u]),h=c[0],d=c[1];return cm({},l,(i={},i[r]=h,i[u]=d,i))},t)}function hm(t,e){return hm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},hm(t,e)}function I2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hm(t,e)}function k2(t){var e=w.exports.useRef(t);return w.exports.useEffect(function(){e.current=t},[t]),e}function In(t){var e=k2(t);return w.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}function b2(){var t=w.exports.useRef(!0),e=w.exports.useRef(function(){return t.current});return w.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function x2(t){var e=w.exports.useRef(null);return w.exports.useEffect(function(){e.current=t}),e.current}var N2=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",R2=typeof document<"u";const A2=R2||N2?w.exports.useLayoutEffect:w.exports.useEffect,P2=["onKeyDown"];function O2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function D2(t){return!t||t.trim()==="#"}const Jy=w.exports.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=O2(t,P2);const[i]=zy(Object.assign({tagName:"a"},r)),s=In(o=>{i.onKeyDown(o),n==null||n(o)});return D2(r.href)||r.role==="button"?f("a",Object.assign({ref:e},r,i,{onKeyDown:s})):f("a",Object.assign({ref:e},r,{onKeyDown:n}))});Jy.displayName="Anchor";const P0={disabled:!1},kk=Un.createContext(null);var M2=function(e){return e.scrollTop},ra="unmounted",Rr="exited",Sn="entering",Xn="entered",il="exiting",Cr=function(t){I2(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,a=o&&!o.isMounting?r.enter:r.appear,l;return s.appearStatus=null,r.in?a?(l=Rr,s.appearStatus=Sn):l=Xn:r.unmountOnExit||r.mountOnEnter?l=ra:l=Rr,s.state={status:l},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===ra?{status:Rr}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==Sn&&o!==Xn&&(s=Sn):(o===Sn||o===Xn)&&(s=il)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,a;return s=o=a=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,a=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:a}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===Sn){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:xs.findDOMNode(this);o&&M2(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Rr&&this.setState({status:ra})},n.performEnter=function(i){var s=this,o=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[xs.findDOMNode(this),a],u=l[0],c=l[1],h=this.getTimeouts(),d=a?h.appear:h.enter;if(!i&&!o||P0.disabled){this.safeSetState({status:Xn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Sn},function(){s.props.onEntering(u,c),s.onTransitionEnd(d,function(){s.safeSetState({status:Xn},function(){s.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),a=this.props.nodeRef?void 0:xs.findDOMNode(this);if(!s||P0.disabled){this.safeSetState({status:Rr},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:il},function(){i.props.onExiting(a),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Rr},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(a){o&&(o=!1,s.nextCallback=null,i(a))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:xs.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!o||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ra)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var a=Ik(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return f(kk.Provider,{value:null,children:typeof o=="function"?o(i,a):Un.cloneElement(Un.Children.only(o),a)})},e}(Un.Component);Cr.contextType=kk;Cr.propTypes={};function fs(){}Cr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:fs,onEntering:fs,onEntered:fs,onExit:fs,onExiting:fs,onExited:fs};Cr.UNMOUNTED=ra;Cr.EXITED=Rr;Cr.ENTERING=Sn;Cr.ENTERED=Xn;Cr.EXITING=il;function Zy(t){return t&&t.ownerDocument||document}function L2(t){var e=Zy(t);return e&&e.defaultView||window}function $2(t,e){return L2(t).getComputedStyle(t,e)}var F2=/([A-Z])/g;function U2(t){return t.replace(F2,"-$1").toLowerCase()}var j2=/^ms-/;function Cu(t){return U2(t).replace(j2,"-ms-")}var V2=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function B2(t){return!!(t&&V2.test(t))}function or(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Cu(e))||$2(t).getPropertyValue(Cu(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Cu(i)):B2(i)?r+=i+"("+s+") ":n+=Cu(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}const cd=!!(typeof window<"u"&&window.document&&window.document.createElement);var dm=!1,fm=!1;try{var gf={get passive(){return dm=!0},get once(){return fm=dm=!0}};cd&&(window.addEventListener("test",gf,gf),window.removeEventListener("test",gf,!0))}catch{}function z2(t,e,n,r){if(r&&typeof r!="boolean"&&!fm){var i=r.once,s=r.capture,o=n;!fm&&i&&(o=n.__once||function a(l){this.removeEventListener(e,a,s),n.call(this,l)},n.__once=o),t.addEventListener(e,o,dm?r:s)}t.addEventListener(e,n,r)}function H2(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Wc(t,e,n,r){return z2(t,e,n,r),function(){H2(t,e,n,r)}}function W2(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function K2(t){var e=or(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function q2(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||W2(t,"transitionend",!0)},e+n),s=Wc(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function G2(t,e,n,r){n==null&&(n=K2(t)||0);var i=q2(t,n,r),s=Wc(t,"transitionend",e);return function(){i(),s()}}function O0(t,e){const n=or(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function ev(t,e){const n=O0(t,"transitionDuration"),r=O0(t,"transitionDelay"),i=G2(t,s=>{s.target===t&&(i(),e(s))},n+r)}function bk(t){t.offsetHeight}var D0=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function Q2(t,e){var n=D0(t),r=D0(e);return function(i){n&&n(i),r&&r(i)}}function xk(t,e){return w.exports.useMemo(function(){return Q2(t,e)},[t,e])}function Y2(t){return t&&"setState"in t?xs.findDOMNode(t):t!=null?t:null}const tv=Un.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:a,childRef:l,...u},c)=>{const h=w.exports.useRef(null),d=xk(h,l),p=x=>{d(Y2(x))},g=x=>A=>{x&&h.current&&x(h.current,A)},_=w.exports.useCallback(g(t),[t]),E=w.exports.useCallback(g(e),[e]),m=w.exports.useCallback(g(n),[n]),y=w.exports.useCallback(g(r),[r]),v=w.exports.useCallback(g(i),[i]),T=w.exports.useCallback(g(s),[s]),S=w.exports.useCallback(g(o),[o]);return f(Cr,{ref:c,...u,onEnter:_,onEntered:m,onEntering:E,onExit:y,onExited:T,onExiting:v,addEndListener:S,nodeRef:h,children:typeof a=="function"?(x,A)=>a(x,{...A,ref:p}):Un.cloneElement(a,{ref:p})})}),X2={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},J2={[Sn]:"show",[Xn]:"show"},Vl=w.exports.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=w.exports.useCallback((o,a)=>{bk(o),r.onEnter==null||r.onEnter(o,a)},[r]);return f(tv,{ref:i,addEndListener:ev,...r,onEnter:s,childRef:e.ref,children:(o,a)=>w.exports.cloneElement(e,{...a,className:he("fade",t,e.props.className,J2[o],n[o])})})});Vl.defaultProps=X2;Vl.displayName="Fade";const Z2={"aria-label":Wn.exports.string,onClick:Wn.exports.func,variant:Wn.exports.oneOf(["white"])},ej={"aria-label":"Close"},Bl=w.exports.forwardRef(({className:t,variant:e,...n},r)=>f("button",{ref:r,type:"button",className:he("btn-close",e&&`btn-close-${e}`,t),...n}));Bl.displayName="CloseButton";Bl.propTypes=Z2;Bl.defaultProps=ej;const Nk=ud("h4");Nk.displayName="DivStyledAsH4";const tj=Qt("alert-heading",{Component:Nk}),nj=Qt("alert-link",{Component:Jy}),rj={variant:"primary",show:!0,transition:Vl,closeLabel:"Close alert"},nv=w.exports.forwardRef((t,e)=>{const{bsPrefix:n,show:r,closeLabel:i,closeVariant:s,className:o,children:a,variant:l,onClose:u,dismissible:c,transition:h,...d}=Xy(t,{show:"onClose"}),p=we(n,"alert"),g=In(m=>{u&&u(!1,m)}),_=h===!0?Vl:h,E=C("div",{role:"alert",..._?void 0:d,ref:e,className:he(o,p,l&&`${p}-${l}`,c&&`${p}-dismissible`),children:[c&&f(Bl,{onClick:g,"aria-label":i,variant:s}),a]});return _?f(_,{unmountOnExit:!0,...d,ref:void 0,in:r,children:E}):r?E:null});nv.displayName="Alert";nv.defaultProps=rj;const je=Object.assign(nv,{Link:nj,Heading:tj}),ij=()=>{const[t,e]=w.exports.useState({email:"",password:""}),{login:n}=Er(),r=rs(),[i,s]=w.exports.useState(),o=({target:{name:u,value:c}})=>{e({...t,[u]:c})},a=async u=>{if(u.preventDefault(),s(""),u.nativeEvent.submitter.id==="register")r("/register");else try{await n(t.email,t.password),r("/aplicacion")}catch(h){s(h.message)}},l=u=>{switch(u){case"Firebase: Error (auth/wrong-password).":return f(je,{className:"mb-3",variant:"danger",children:"Contrase\xF1a incorrecta"},"danger");case"Firebase: Error (auth/user-not-found).":return f(je,{className:"mb-3",variant:"danger",children:"El usuario no existe"},"danger")}};return C(j,{children:[f("br",{}),f(Jt,{children:f(ie,{className:"justify-content-md-center",children:f(I,{sm:!0,lg:"4",children:C(te,{className:"text-center xs",children:[f(te.Header,{children:f("h1",{children:"Iniciar sesi\xF3n"})}),C(te.Body,{children:[f(te.Title,{children:"Ingrese sus datos"}),C(U,{className:"mb-3",onSubmit:a,children:[f(U.Group,{className:"mb-3",controlId:"email",children:f(U.Control,{type:"email",name:"email",onChange:o,placeholder:"Correo electr\xF3nico"})}),f(U.Group,{className:"mb-3",controlId:"password",children:f(U.Control,{type:"password",name:"password",onChange:o,placeholder:"Contrase\xF1a"})}),l(i),f("h1",{children:f(ht,{variant:"primary",id:"login",type:"submit",children:"ENTRAR"})}),f("span",{children:"\xBFA\xFAn no tienes cuenta? "}),f("h1",{children:f(ht,{variant:"primary",id:"register",type:"submit",children:"Registrarte"})})]})]}),f(te.Footer,{className:"text-muted"})]})})})})]})},sj=()=>{const[t,e]=w.exports.useState({nombre:"",empresa:"",email:"",password:""}),n=h=>h.trim().length>0,{signup:r,userAddDatabase:i}=Er(),s=rs(),[o,a]=w.exports.useState(),l=({target:{name:h,value:d}})=>{e({...t,[h]:d})},u=async h=>{if(h.preventDefault(),a(""),!n(h.target[0].value)||!n(h.target[1].value))a("input-vacio");else try{await r(t.email,t.password),s("/confirm"),await i(t)}catch(d){a(d.message)}},c=h=>{switch(h){case"Firebase: Password should be at least 6 characters (auth/weak-password).":return f(je,{className:"mb-3",variant:"danger",children:"La contrase\xF1a debe tener almenos 6 caracteres"});case"input-vacio":return C(je,{className:"mb-3",variant:"danger",children:["Los campos de ",f("b",{children:"Empresa"})," y ",f("b",{children:"Nombre Completo"})," son obligatorios"]})}};return C(j,{children:[f("br",{}),f(Jt,{children:f(ie,{className:"justify-content-md-center",children:f(I,{sm:!0,lg:"4",children:C(te,{className:"text-center xs",children:[f(te.Header,{children:"Registro de Usuario"}),C(te.Body,{children:[f(te.Title,{children:"Ingrese sus datos"}),C(U,{className:"mb-3",onSubmit:u,children:[f(U.Group,{className:"mb-3",controlId:"empresa",children:f(U.Control,{type:"text",name:"empresa",placeholder:"Empresa",onChange:l})}),f(U.Group,{className:"mb-3",controlId:"nombre",children:f(U.Control,{type:"text",name:"nombre",placeholder:"Nombre Completo",onChange:l})}),f(U.Group,{className:"mb-3",controlId:"email",children:f(U.Control,{type:"email",name:"email",placeholder:"Correo electr\xF3nico",onChange:l})}),f(U.Group,{className:"mb-3",controlId:"password",children:f(U.Control,{type:"password",name:"password",placeholder:"Contrase\xF1a",onChange:l})}),c(o),f(ht,{variant:"primary",type:"submit",children:"Registrarme"})]})]}),f(te.Footer,{className:"text-muted",children:"Se enviar\xE1 una correo para que confirme su registro"})]})})})})]})},oj=()=>{const{user:t,logout:e,isEmailVerifyUser:n,boolVerificationEmail:r,userAddVerificationEmail:i}=Er(),s=async()=>{await e()},o=async()=>{if(!await r){await TD(t);const l={uid:`${t.uid}`,verification:!0};await i(l)}};return console.log(r),w.exports.useEffect(()=>{n()?s():o()},[t]),f(j,{children:n()?f("h1",{children:"Redirigiendo..."}):C(j,{children:[C("h1",{children:["Bienvenido ",t.email]}),f("p",{children:"Porfavor confirma tu correo, una vez hecho eso,refresque la pagina."})]})})},aj=()=>{const[t,e]=w.exports.useState({gestion:"",periodo:"",politicaCobranza:""}),{userAddGestionAndPeriodo:n}=Er(),r=rs(),i=({target:{name:o,value:a}})=>{e({...t,[o]:a})},s=async o=>{o.preventDefault();try{r("/aplicacion"),await n(t)}catch(a){console.log(a)}};return C(j,{children:[f("br",{}),f(Jt,{children:f(ie,{className:"justify-content-md-center",children:f(I,{sm:!0,lg:"4",children:C(te,{className:"text-center xs",children:[f(te.Header,{children:"Creando nueva Gesti\xF3n"}),C(te.Body,{children:[f(te.Title,{children:"Ingrese los datos"}),C(U,{className:"mb-3",onSubmit:s,children:[f(U.Group,{className:"mb-3",controlId:"gestion",children:f(U.Control,{type:"text",name:"gestion",onChange:i,placeholder:"A\xF1o de Gestion"})}),f(U.Group,{className:"mb-3",controlId:"periodo",placeholder:"Politica de cobranza",children:C("select",{className:"form-control",name:"periodo",onChange:i,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Selecione el periodo"}),f("option",{value:"Anual",children:"Anual"}),f("option",{value:"Semestral",children:"Semestral"}),f("option",{value:"Trimestral",children:"Trimestral"}),f("option",{value:"Mensual",children:"Mensual"})]})}),f(U.Group,{className:"mb-3",controlId:"politicaCobranza",children:f(U.Control,{type:"text",name:"politicaCobranza",onChange:i,placeholder:"Politica de cobranza"})}),f(ht,{variant:"primary",type:"submit",children:"Guardar datos"})]})]}),f(te.Footer,{className:"text-muted",children:"Revise si todo los datos son correctos"})]})})})})]})},M0=()=>{const[t,e]=w.exports.useState([{}]),[n,r]=w.exports.useState(""),[i,s]=w.exports.useState([]),[o,a]=w.exports.useState(!1),[l,u]=w.exports.useState(!1),[c,h]=w.exports.useState([{}]),[d,p]=w.exports.useState({}),[g,_]=w.exports.useState(!0),{userAddCuentas:E,userUpdateCuentas:m,userAddBool:y,boolCuenta:v,gestionCurrent:T,userCounts:S}=Er(),x=rs(),A=FA(),D=F=>{const k=F.target.value;e(k),T.map(({gestion:M,periodo:z})=>{k===M&&(r(z),a(!0))})},B=({target:{name:F,value:k}})=>{s({...i,[F]:k})},Y=({target:{value:F}})=>{F==="cuentasPorCobrar"&&c.forEach(k=>{k.nombreCuenta==="cuentasPorCobrar"&&p({...k})}),F==="ventasAlCredito"&&c.forEach(k=>{k.nombreCuenta==="ventasAlCredito"&&p({...k})}),u(!0)},re=({target:{name:F,value:k}})=>{p({...d,[F]:k})},Nt=async F=>{switch(F){case"cuentasPorCobrar":await y({...{cuentasPorCobrar:!0},gestion:`${t}`,nombreCuenta:`${F}`});break;case"ventasAlCredito":await y({...{ventasAlCredito:!0},gestion:`${t}`,nombreCuenta:`${F}`});break}},lt=F=>{let k=!1;return F.forEach(({name:M,value:z})=>{M!=="gestion"&&M!=="nombreCuenta"&&M!=="button"&&(z.trim().length>0?k=!0:k=!1)}),k},Lt=async F=>{F.preventDefault();const k=[...F.target];if(lt(k)){_(!0);const z=F.target[1].value;try{if(A.id)await m(d,d.id);else{let W=i,me;T.map(({gestion:Rt,politicaCobranza:Ro})=>{Rt===t&&(me=Ro)}),W={...i,gestion:`${t}`,periodo:`${n}`,politica:`${me}`},await E(W),await Nt(z)}x("/aplicacion")}catch(W){console.log(W)}}else _(!1)},Pe=F=>{switch(F){case"Mensual":return C(j,{children:[f("br",{}),f(U.Control,{type:"text",name:"enero",value:i.enero?i.enero:"",onChange:B,placeholder:"Enero",className:"mb-3"}),f(U.Control,{type:"text",name:"febrero",value:i.febrero?i.febrero:"",onChange:B,placeholder:"Febrero",className:"mb-3"}),f(U.Control,{type:"text",name:"marzo",value:i.marzo?i.marzo:"",onChange:B,placeholder:"Marzo",className:"mb-3"}),f(U.Control,{type:"text",name:"abril",value:i.abril?i.abril:"",onChange:B,placeholder:"Abril",className:"mb-3"}),f(U.Control,{type:"text",name:"mayo",value:i.mayo?i.mayo:"",onChange:B,placeholder:"Mayo",className:"mb-3"}),f(U.Control,{type:"text",name:"junio",value:i.junio?i.junio:"",onChange:B,placeholder:"Junio",className:"mb-3"}),f(U.Control,{type:"text",name:"julio",value:i.julio?i.julio:"",onChange:B,placeholder:"Julio",className:"mb-3"}),f(U.Control,{type:"text",name:"agosto",value:i.agosto?i.agosto:"",onChange:B,placeholder:"Agosto",className:"mb-3"}),f(U.Control,{type:"text",name:"septiembre",value:i.septiembre?i.septiembre:"",onChange:B,placeholder:"Septiembre",className:"mb-3"}),f(U.Control,{type:"text",name:"octubre",value:i.octubre?i.octubre:"",onChange:B,placeholder:"Octubre",className:"mb-3"}),f(U.Control,{type:"text",name:"noviembre",value:i.noviembre?i.noviembre:"",onChange:B,placeholder:"Noviembre",className:"mb-3"}),f(U.Control,{type:"text",name:"diciembre",value:i.diciembre?i.diciembre:"",onChange:B,placeholder:"Diciembre",className:"mb-3"})]});case"Trimestral":return C(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",name:"primerTrimestre",value:i.primerTrimestre?i.primerTrimestre:"",onChange:B,placeholder:"Primer trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"segundoTrimestre",value:i.segundoTrimestre?i.segundoTrimestre:"",onChange:B,placeholder:"Segundo Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"tercerTrimestre",value:i.tercerTrimestre?i.tercerTrimestre:"",onChange:B,placeholder:"Tercer Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"cuartoTrimestre",value:i.cuartoTrimestre?i.cuartoTrimestre:"",onChange:B,placeholder:"Cuarto Trimestre"})]});case"Semestral":return C(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:B,name:"primerSemestre",value:i.primerSemestre?i.primerSemestre:"",placeholder:"Primer semestre"}),f(U.Control,{className:"mb-3",type:"text",onChange:B,name:"segundoSemestre",value:i.segundoSemestre?i.segundoSemestre:"",placeholder:"Segundo semestre"})]});case"Anual":return C(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:B,name:"anual",value:i.anual?i.anual:"",placeholder:"Monto"})]})}},_n=F=>{switch(F){case"Mensual":return C(j,{children:[f("br",{}),f(U.Control,{type:"text",name:"enero",value:d.enero?d.enero:"",onChange:re,placeholder:"Enero",className:"mb-3"}),f(U.Control,{type:"text",name:"febrero",value:d.febrero?d.febrero:"",onChange:re,placeholder:"Febrero",className:"mb-3"}),f(U.Control,{type:"text",name:"marzo",value:d.marzo?d.marzo:"",onChange:re,placeholder:"Marzo",className:"mb-3"}),f(U.Control,{type:"text",name:"abril",value:d.abril?d.abril:"",onChange:re,placeholder:"Abril",className:"mb-3"}),f(U.Control,{type:"text",name:"mayo",value:d.mayo?d.mayo:"",onChange:re,placeholder:"Mayo",className:"mb-3"}),f(U.Control,{type:"text",name:"junio",value:d.junio?d.junio:"",onChange:re,placeholder:"Junio",className:"mb-3"}),f(U.Control,{type:"text",name:"julio",value:d.julio?d.julio:"",onChange:re,placeholder:"Julio",className:"mb-3"}),f(U.Control,{type:"text",name:"agosto",value:d.agosto?d.agosto:"",onChange:re,placeholder:"Agosto",className:"mb-3"}),f(U.Control,{type:"text",name:"septiembre",value:d.septiembre?d.septiembre:"",onChange:re,placeholder:"Septiembre",className:"mb-3"}),f(U.Control,{type:"text",name:"octubre",value:d.octubre?d.octubre:"",onChange:re,placeholder:"Octubre",className:"mb-3"}),f(U.Control,{type:"text",name:"noviembre",value:d.noviembre?d.noviembre:"",onChange:re,placeholder:"Noviembre",className:"mb-3"}),f(U.Control,{type:"text",name:"diciembre",value:d.diciembre?d.diciembre:"",onChange:re,placeholder:"Diciembre",className:"mb-3"})]});case"Trimestral":return C(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",name:"primerTrimestre",value:d.primerTrimestre?d.primerTrimestre:"",onChange:re,placeholder:"Primer trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"segundoTrimestre",value:d.segundoTrimestre?d.segundoTrimestre:"",onChange:re,placeholder:"Segundo Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"tercerTrimestre",value:d.tercerTrimestre?d.tercerTrimestre:"",onChange:re,placeholder:"Tercer Trimestre"}),f(U.Control,{className:"mb-3",type:"text",name:"cuartoTrimestre",value:d.cuartoTrimestre?d.cuartoTrimestre:"",onChange:re,placeholder:"Cuarto Trimestre"})]});case"Semestral":return C(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:re,name:"primerSemestre",value:d.primerSemestre?d.primerSemestre:"",placeholder:"Primer semestre"}),f(U.Control,{className:"mb-3",type:"text",onChange:re,name:"segundoSemestre",value:d.segundoSemestre?d.segundoSemestre:"",placeholder:"Segundo semestre"})]});case"Anual":return C(j,{children:[f("br",{}),f(U.Control,{className:"mb-3",type:"text",onChange:re,name:"anual",value:d.anual?d.anual:"",placeholder:"Monto"})]})}},ln=F=>{let k={cuentasPorCobrar:!1,ventasAlCredito:!1};F.forEach(({ventasAlCredito:W,cuentasPorCobrar:me,gestion:Rt})=>{Rt===t&&(me?k={...k,cuentasPorCobrar:me}:k={...k,ventasAlCredito:W})});const{ventasAlCredito:M,cuentasPorCobrar:z}=k;if(z&&M)return f(j,{});if(!z&&!M)return f(j,{children:C("select",{name:"nombreCuenta",className:"form-control",onChange:B,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})});if(z)return f(j,{children:C("select",{name:"nombreCuenta",className:"form-control",onChange:B,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"",disabled:!0,children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})});if(M)return f(j,{children:C("select",{name:"nombreCuenta",className:"form-control",onChange:B,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"",disabled:!0,children:"Ventas al credito"})]})})},O=F=>{let k={cuentasPorCobrar:!1,ventasAlCredito:!1};F.forEach(({ventasAlCredito:W,cuentasPorCobrar:me,gestion:Rt})=>{Rt===c[0].gestion&&(me?k={...k,cuentasPorCobrar:me}:k={...k,ventasAlCredito:W})});const{ventasAlCredito:M,cuentasPorCobrar:z}=k;if(z&&M)return f(j,{children:C("select",{name:"nombreCuenta",className:"form-control",onChange:Y,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})});if(z)return f(j,{children:C("select",{name:"nombreCuenta",className:"form-control",onChange:Y,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"cuentasPorCobrar",children:"Cuentas por cobrar"}),f("option",{value:"",disabled:!0,children:"Ventas al credito"})]})});if(M)return f(j,{children:C("select",{name:"nombreCuenta",className:"form-control",onChange:Y,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Cuenta a registrar"}),f("option",{value:"",disabled:!0,children:"Cuentas por cobrar"}),f("option",{value:"ventasAlCredito",children:"Ventas al credito"})]})})},G=F=>{let k={cuentasPorCobrar:!1,ventasAlCredito:!1};F.forEach(({ventasAlCredito:W,cuentasPorCobrar:me,gestion:Rt})=>{Rt===t&&(me?k={...k,cuentasPorCobrar:me}:k={...k,ventasAlCredito:W})});const{ventasAlCredito:M,cuentasPorCobrar:z}=k;return!!(z&&M)},K=()=>o&&C(j,{children:[C(te.Header,{children:["Periodo ",n," "]}),ln(v),G(v)?C(j,{children:[f("br",{}),f(je,{variant:"success",children:"Usted ya ha registrado las cuentas de esta gestion."},"success")]}):C(j,{children:[Pe(n),!g&&C(j,{children:[f("br",{}),f(je,{variant:"danger",children:"Por favor rellene todos los campos."})]}),f(ht,{name:"button",variant:"primary",type:"submit",children:"Enviar Datos"})]})]}),ye=()=>o&&C(j,{children:[c.length>0&&C(j,{children:[C(te.Header,{children:["Periodo ",c[0].periodo," "]}),O(v)]}),l&&C(j,{children:[_n(c[0].periodo),!g&&C(j,{children:[f("br",{}),f(je,{variant:"danger",children:"Por favor rellene todos los campos."})]}),f(ht,{name:"button",variant:"primary",type:"submit",children:"Editar"})]})]});return w.exports.useEffect(()=>{const F=A.id;if(F){const k=[];let M="";S.map(z=>{const{id:W,gestion:me}=z;W===F?(k.push({...z}),M=z.gestion):M.length>0&&M===me&&k.push({...z})}),h(k),a(!0)}else s(i)},[A.id]),f(j,{children:c.length===0?C(j,{children:[f("br",{}),f(Jt,{children:C(je,{variant:"danger",children:[f(je.Heading,{children:"Ha ocurrido un error!"}),C("p",{children:["Usted no puede editar en esta gestion. ",f("b",{children:"No ha registrado ninguna cuenta"})]})]})})]}):C(j,{children:[f("br",{}),f(Jt,{children:f(ie,{className:"justify-content-md-center",children:f(I,{sm:!0,lg:"4",children:C(te,{className:"text-center xs",children:[A.id?f(te.Header,{children:"Editando cuentas"}):f(te.Header,{children:"Seleccione la Gestion"}),f(te.Body,{children:C(U,{className:"mb-3",onSubmit:Lt,children:[f(U.Group,{className:"mb-3",children:A.id?f("select",{name:"gestion",className:"form-control",children:f("option",{value:c[0].gestion,selected:!0,disabled:!0,children:c[0].gestion})}):C("select",{name:"gestion",className:"form-control",onChange:D,children:[f("option",{value:"",selected:!0,disabled:!0,children:"Gesti\xF3n"}),T.map(({gestion:F})=>C("option",{value:F,children:[" ",F," "]},F))]})}),A.id?ye():K()]})}),f(te.Footer,{className:"text-muted",children:"Los datos se guardar\xE1n en la base de datos"})]})})})})]})})},L0=(t,e,n,r)=>{switch(t){case"ratioRotacionCuentasPorCobrar":return lj(n,r,e);case"ratioPeriodoPromedioDeCobro":return uj(n,r,e)}},lj=(t,e,n)=>{let r=0;switch(n){case"Anual":return r=parseFloat(e.monto/t.monto),r.toFixed(2);case"Semestral":return r=parseFloat((e.primerSemestre+e.segundoSemestre)/(t.primerSemestre+t.segundoSemestre)),r.toFixed(2);case"Trimestral":return r=parseFloat((e.primerTrimestre+e.segundoTrimestre+e.tercerTrimestre+e.cuartoTrimestre)/(t.primerTrimestre+t.segundoTrimestre+t.tercerTrimestre+t.cuartoTrimestre)),r.toFixed(2);case"Mensual":return r=parseFloat((e.enero+e.febrero+e.marzo+e.abril+e.mayo+e.junio+e.julio+e.agosto+e.septiembre+e.octubre+e.noviembre+e.diciembre)/(t.enero+t.febrero+t.marzo+t.abril+t.mayo+t.junio+t.julio+t.agosto+t.septiembre+t.octubre+t.noviembre+t.diciembre)),r.toFixed(2)}},uj=(t,e,n)=>{let r=0;switch(n){case"Anual":return r=parseFloat(t.monto/e.monto),r.toFixed(2)*365;case"Semestral":return r=parseFloat((t.primerSemestre+t.segundoSemestre)/(e.primerSemestre+e.segundoSemestre)),r.toFixed(2)*365;case"Trimestral":return r=parseFloat((t.primerTrimestre+t.segundoTrimestre+t.tercerTrimestre+t.cuartoTrimestre)/(e.primerTrimestre+e.segundoTrimestre+e.tercerTrimestre+e.cuartoTrimestre)),r.toFixed(2)*365;case"Mensual":return r=parseFloat((t.enero+t.febrero+t.marzo+t.abril+t.mayo+t.junio+t.julio+t.agosto+t.septiembre+t.octubre+t.noviembre+t.diciembre)/(e.enero+e.febrero+e.marzo+e.abril+e.mayo+e.junio+e.julio+e.agosto+e.septiembre+e.octubre+e.noviembre+e.diciembre)),r.toFixed(2)*365}},cj={bg:"primary",pill:!1},$=w.exports.forwardRef(({bsPrefix:t,bg:e,pill:n,text:r,className:i,as:s="span",...o},a)=>{const l=we(t,"badge");return f(s,{ref:a,...o,className:he(i,l,n&&"rounded-pill",r&&`text-${r}`,e&&`bg-${e}`)})});$.displayName="Badge";$.defaultProps=cj;const hj=()=>{const{userCounts:t,onDeleteListCounts:e}=Er(),n=rs(),r=c=>{n(`/datos-gestion/${c}`)},i=(c,h)=>{let d=!1;return h.forEach(({gestion:p})=>{p===c&&(d=!0)}),d},s=(c,h)=>{let d=0;return h.forEach(({gestion:p})=>{p===c&&d++}),d},o=(c,h)=>{const d=365/h;if(d>c)return"Bajo indice de rotacion";if(d<=c)return"Alto indice de rotacion"},a=(c,h)=>{if(h>c)return"Bajo indice de rotacion";if(h<=c)return"Alto indice de rotacion"},l=c=>{const h=[],d=[];return c.forEach(p=>{const{gestion:g,periodo:_,nombreCuenta:E}=p,m=g,y=i(g,h);let v=[];if(s(g,c)===1){switch(_){case"Anual":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{monto:`${p.anual}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{monto:`${p.anual}`}});break;case"Semestral":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{primerSemestre:`${p.primerSemestre}`,segundoSemestre:`${p.segundoSemestre}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{primerSemestre:`${p.primerSemestre}`,segundoSemestre:`${p.segundoSemestre}`}});break;case"Trimestral":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{primerTrimestre:`${p.primerTrimestre}`,segundoTrimestre:`${p.segundoTrimestre}`,tercerTrimestre:`${p.tercerTrimestre}`,cuartoTrimestre:`${p.cuartoTrimestre}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{primerTrimestre:`${p.primerTrimestre}`,segundoTrimestre:`${p.segundoTrimestre}`,tercerTrimestre:`${p.tercerTrimestre}`,cuartoTrimestre:`${p.cuartoTrimestre}`}});break;case"Mensual":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{enero:`${p.enero}`,febrero:`${p.febrero}`,marzo:`${p.marzo}`,abril:`${p.abril}`,mayo:`${p.mayo}`,junio:`${p.junio}`,julio:`${p.julio}`,agosto:`${p.agosto}`,septiembre:`${p.septiembre}`,octubre:`${p.octubre}`,noviembre:`${p.noviembre}`,diciembre:`${p.diciembre}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{enero:`${p.enero}`,febrero:`${p.febrero}`,marzo:`${p.marzo}`,abril:`${p.abril}`,mayo:`${p.mayo}`,junio:`${p.junio}`,julio:`${p.julio}`,agosto:`${p.agosto}`,septiembre:`${p.septiembre}`,octubre:`${p.octubre}`,noviembre:`${p.noviembre}`,diciembre:`${p.diciembre}`}});break}d.push({...v})}else if(y)h.forEach(S=>{const{gestion:x,periodo:A}=S;if(m===x){switch(A){case"Anual":E==="cuentasPorCobrar"&&(S={...S,cuentasPorCobrar:{monto:`${p.anual}`}}),E==="ventasAlCredito"&&(S={...S,ventasAlCredito:{monto:`${p.anual}`}});break;case"Semestral":E==="cuentasPorCobrar"&&(S={...S,cuentasPorCobrar:{primerSemestre:`${p.primerSemestre}`,segundoSemestre:`${p.segundoSemestre}`}}),E==="ventasAlCredito"&&(S={...S,ventasAlCredito:{primerSemestre:`${p.primerSemestre}`,segundoSemestre:`${p.segundoSemestre}`}});break;case"Trimestral":E==="cuentasPorCobrar"&&(S={...S,cuentasPorCobrar:{primerTrimestre:`${p.primerTrimestre}`,segundoTrimestre:`${p.segundoTrimestre}`,tercerTrimestre:`${p.tercerTrimestre}`,cuartoTrimestre:`${p.cuartoTrimestre}`}}),E==="ventasAlCredito"&&(S={...S,ventasAlCredito:{primerTrimestre:`${p.primerTrimestre}`,segundoTrimestre:`${p.segundoTrimestre}`,tercerTrimestre:`${p.tercerTrimestre}`,cuartoTrimestre:`${p.cuartoTrimestre}`}});break;case"Mensual":E==="cuentasPorCobrar"&&(S={...S,cuentasPorCobrar:{enero:`${p.enero}`,febrero:`${p.febrero}`,marzo:`${p.marzo}`,abril:`${p.abril}`,mayo:`${p.mayo}`,junio:`${p.junio}`,julio:`${p.julio}`,agosto:`${p.agosto}`,septiembre:`${p.septiembre}`,octubre:`${p.octubre}`,noviembre:`${p.noviembre}`,diciembre:`${p.diciembre}`}}),E==="ventasAlCredito"&&(S={...S,ventasAlCredito:{enero:`${p.enero}`,febrero:`${p.febrero}`,marzo:`${p.marzo}`,abril:`${p.abril}`,mayo:`${p.mayo}`,junio:`${p.junio}`,julio:`${p.julio}`,agosto:`${p.agosto}`,septiembre:`${p.septiembre}`,octubre:`${p.octubre}`,noviembre:`${p.noviembre}`,diciembre:`${p.diciembre}`}});break}const B=L0("ratioRotacionCuentasPorCobrar",S.periodo,S.cuentasPorCobrar,S.ventasAlCredito),Y=L0("ratioPeriodoPromedioDeCobro",S.periodo,S.cuentasPorCobrar,S.ventasAlCredito),re=S.politica,Nt=o(re,B),lt=a(re,Y);d.push({...S,ratioRotacionCuentasPorCobrar:`${B}`,ratioPeriodoPromedioDeCobro:`${Y}`,cc1:`${Nt}`,cc2:`${lt}`})}});else switch(_){case"Anual":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{monto:`${p.anual}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{monto:`${p.anual}`}}),h.push({...v});break;case"Semestral":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{primerSemestre:`${p.primerSemestre}`,segundoSemestre:`${p.segundoSemestre}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{primerSemestre:`${p.primerSemestre}`,segundoSemestre:`${p.segundoSemestre}`}}),h.push({...v});break;case"Trimestral":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{primerTrimestre:`${p.primerTrimestre}`,segundoTrimestre:`${p.segundoTrimestre}`,tercerTrimestre:`${p.tercerTrimestre}`,cuartoTrimestre:`${p.cuartoTrimestre}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{primerTrimestre:`${p.primerTrimestre}`,segundoTrimestre:`${p.segundoTrimestre}`,tercerTrimestre:`${p.tercerTrimestre}`,cuartoTrimestre:`${p.cuartoTrimestre}`}}),h.push({...v});break;case"Mensual":E==="cuentasPorCobrar"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,cuentasPorCobrar:{enero:`${p.enero}`,febrero:`${p.febrero}`,marzo:`${p.marzo}`,abril:`${p.abril}`,mayo:`${p.mayo}`,junio:`${p.junio}`,julio:`${p.julio}`,agosto:`${p.agosto}`,septiembre:`${p.septiembre}`,octubre:`${p.octubre}`,noviembre:`${p.noviembre}`,diciembre:`${p.diciembre}`}}),E==="ventasAlCredito"&&(v={id:`${p.id}`,gestion:`${p.gestion}`,periodo:`${p.periodo}`,politica:`${p.politica}`,ventasAlCredito:{enero:`${p.enero}`,febrero:`${p.febrero}`,marzo:`${p.marzo}`,abril:`${p.abril}`,mayo:`${p.mayo}`,junio:`${p.junio}`,julio:`${p.julio}`,agosto:`${p.agosto}`,septiembre:`${p.septiembre}`,octubre:`${p.octubre}`,noviembre:`${p.noviembre}`,diciembre:`${p.diciembre}`}}),h.push({...v});break}}),d},u=(c,h)=>{const{id:d,gestion:p,periodo:g,politica:_,cuentasPorCobrar:E,ventasAlCredito:m,ratioRotacionCuentasPorCobrar:y,ratioPeriodoPromedioDeCobro:v,cc1:T,cc2:S}=h;switch(c){case"Anual":return C(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:C(te,{className:"xs",children:[C(te.Header,{children:["GESTION ",p,f(ht,{variant:"dark",className:"float-end m-2",type:"submit",onClick:()=>r(d),children:"Editar"}),"\xA0",f(ht,{variant:"danger",className:"float-end m-2",type:"submit",onClick:()=>e(p),children:"Eliminar"})]}),C(te.Body,{children:[C(te.Title,{children:["Periodo ",g," - Plazo de deuda ",_," d\xEDas"]}),E===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),C(ie,{children:[f(I,{}),f(I,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Monto"})})]}),C(ie,{children:[f(I,{}),f(I,{children:E.monto})]}),f("br",{})]}),m===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),C(ie,{children:[f(I,{}),f(I,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Monto"})})]}),C(ie,{children:[f(I,{}),f(I,{children:m.monto})]}),f("br",{})]}),E===void 0||m===void 0?C(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):C(j,{children:[C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(I,{children:y}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:T}),f("br",{})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(I,{children:v}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:S}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},d)]});case"Semestral":return C(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:C(te,{className:"xs",children:[C(te.Header,{children:["GESTION ",p,f(ht,{className:"float-end m-2",variant:"dark",type:"submit",onClick:()=>r(d),children:"Editar"}),"\xA0",f(ht,{className:"float-end m-2",variant:"danger",type:"submit",onClick:()=>e(p),children:"Eliminar"})]}),C(te.Body,{children:[C(te.Title,{children:["Periodo ",g," - Plazo de deuda ",_," d\xEDas"]}),E===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),C(ie,{children:[f(I,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Primer semestre"})}),f(I,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo semestre"})})]}),C(ie,{children:[f(I,{children:E.primerSemestre}),f(I,{children:E.segundoSemestre})]}),f("br",{})]}),m===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),C(ie,{children:[f(I,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Primer semestre"})}),f(I,{children:f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo semestre"})})]}),C(ie,{children:[f(I,{children:m.primerSemestre}),f(I,{children:m.segundoSemestre})]}),f("br",{})]}),E===void 0||m===void 0?C(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):C(j,{children:[C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(I,{children:y}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:T}),f("br",{})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(I,{children:v}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:S}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},d)]});case"Trimestral":return C(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:C(te,{className:"xs",children:[C(te.Header,{children:["GESTION ",p,f(ht,{className:"float-end m-2",variant:"dark",type:"submit",onClick:()=>r(d),children:"Editar"}),"\xA0",f(ht,{className:"float-end m-2",variant:"danger",type:"submit",onClick:()=>e(p),children:"Eliminar"})]}),C(te.Body,{children:[C(te.Title,{children:["Periodo ",g," - Plazo de deuda ",_," d\xEDas"]}),E===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Primer trimestre"}),f(I,{children:E.primerTrimestre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo trimestre"}),f(I,{children:E.segundoTrimestre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Tercer trimestre"}),f(I,{children:E.tercerTrimestre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Cuarto trimestre"}),f(I,{children:E.cuartoTrimestre})]})]}),f("br",{})]}),m===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Primer trimestre"}),f(I,{children:m.primerTrimestre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Segundo trimestre"}),f(I,{children:m.segundoTrimestre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Tercer trimestre"}),f(I,{children:m.tercerTrimestre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Cuarto trimestre"}),f(I,{children:m.cuartoTrimestre})]})]}),f("br",{})]}),E===void 0||m===void 0?C(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):C(j,{children:[C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(I,{children:y}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:T}),f("br",{})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(I,{children:v}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:S}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},d)]});case"Mensual":return C(j,{children:[f("br",{}),f("div",{children:f(Jt,{children:C(te,{className:"xs",children:[C(te.Header,{children:["GESTION ",p,f(ht,{className:"float-end m-2",variant:"dark",type:"submit",onClick:()=>r(d),children:"Editar"}),"\xA0",f(ht,{className:"float-end m-2",variant:"danger",type:"submit",onClick:()=>e(p),children:"Eliminar"})]}),C(te.Body,{children:[C(te.Title,{children:["Periodo ",g," - Plazo de deuda ",_," d\xEDas"]}),E===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"cuentas por cobrar"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"success",children:"Cuentas por cobrar"})})}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Enero"}),f(I,{children:E.enero})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Febrero"}),f(I,{children:E.febrero})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Marzo"}),f(I,{children:E.marzo})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Abril"}),f(I,{children:E.abril})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Mayo"}),f(I,{children:E.mayo})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Junio"}),f(I,{children:E.junio})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Julio"}),f(I,{children:E.julio})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Agosto"}),f(I,{children:E.agosto})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Septiembre"}),f(I,{children:E.septiembre})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Octubre"}),f(I,{children:E.octubre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Noviembre"}),f(I,{children:E.noviembre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Diciembre"}),f(I,{children:E.diciembre})]})]}),f("br",{})]}),m===void 0?C(je,{variant:"dark",children:["Aun no se han registrado las ",f("b",{children:"ventas al credito"})]}):C(j,{children:[f(ie,{children:f(I,{children:f($,{pill:!0,bg:"danger",children:"Ventas al credito"})})}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Enero"}),f(I,{children:m.enero})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Febrero"}),f(I,{children:m.febrero})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Marzo"}),f(I,{children:m.marzo})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Abril"}),f(I,{children:m.abril})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Mayo"}),f(I,{children:m.mayo})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Junio"}),f(I,{children:m.junio})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Julio"}),f(I,{children:m.julio})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Agosto"}),f(I,{children:m.agosto})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Septiembre"}),f(I,{children:m.septiembre})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Octubre"}),f(I,{children:m.octubre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Noviembre"}),f(I,{children:m.noviembre})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"warning",children:"Diciembre"}),f(I,{children:m.diciembre})]})]}),f("br",{})]}),E===void 0||m===void 0?C(je,{variant:"danger",children:["No se puede realizar el calculo de ningun ratio. Se debe tener las ",f("b",{children:"cuentas por cobrar "})," y las ",f("b",{children:"ventas al credito"})," registradas"]}):C(j,{children:[C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de rotaci\xF3n de cuentas por cobrar"}),f(I,{children:y}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:T}),f("br",{})]})]}),C(ie,{children:[C(I,{children:[f($,{pill:!0,bg:"dark",children:"Ratio de periodo promedio de cobro"}),f(I,{children:v}),f("br",{})]}),C(I,{children:[f($,{pill:!0,text:"dark",bg:"primary",children:"Interpretacion"}),f(I,{children:S}),f("br",{})]})]})]})]}),f(te.Footer,{className:"text-muted"})]})})},d)]})}};return f(j,{children:t.length===0?C(j,{children:[f("br",{}),f(Jt,{className:"text-center",children:f("h5",{children:"Aun no ha se registraron cuentas . . ."})})]}):f(j,{children:l(t).map(c=>{const{periodo:h}=c;return u(h,c)})})})};var $0={exports:{}},pm={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){function i(o,a,l,u,c,h){var d=u||"<<anonymous>>",p=h||l;if(a[l]==null)return o?new Error("Required "+c+" `"+p+"` was not specified "+("in `"+d+"`.")):null;for(var g=arguments.length,_=Array(g>6?g-6:0),E=6;E<g;E++)_[E-6]=arguments[E];return r.apply(void 0,[a,l,d,c,p].concat(_))}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}t.exports=e.default})(pm,pm.exports);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var n=pm.exports,r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}function s(){for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];function u(){for(var c=arguments.length,h=Array(c),d=0;d<c;d++)h[d]=arguments[d];var p=null;return a.forEach(function(g){if(p==null){var _=g.apply(void 0,h);_!=null&&(p=_)}}),p}return(0,r.default)(u)}t.exports=e.default})($0,$0.exports);var dj=Function.prototype.bind.call(Function.prototype.call,[].slice);function vi(t,e){return dj(t.querySelectorAll(e))}function fj(){var t=w.exports.useReducer(function(n){return!n},!1),e=t[1];return e}const rv=w.exports.createContext(null);rv.displayName="NavContext";const Kc=w.exports.createContext(null),iv=(t,e=null)=>t!=null?String(t):e||null,Rk=w.exports.createContext(null),pj="data-rr-ui-",mj="rrUi";function hd(t){return`${pj}${t}`}function gj(t){return`${mj}${t}`}const yj=["as","active","eventKey"];function vj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ak({key:t,onClick:e,active:n,id:r,role:i,disabled:s}){const o=w.exports.useContext(Kc),a=w.exports.useContext(rv),l=w.exports.useContext(Rk);let u=n;const c={role:i};if(a){!i&&a.role==="tablist"&&(c.role="tab");const h=a.getControllerId(t!=null?t:null),d=a.getControlledId(t!=null?t:null);c[hd("event-key")]=t,c.id=h||r,u=n==null&&t!=null?a.activeKey===t:n,(u||!(l!=null&&l.unmountOnExit)&&!(l!=null&&l.mountOnEnter))&&(c["aria-controls"]=d)}return c.role==="tab"&&(c["aria-selected"]=u,u||(c.tabIndex=-1),s&&(c.tabIndex=-1,c["aria-disabled"]=!0)),c.onClick=In(h=>{s||(e==null||e(h),t!=null&&o&&!h.isPropagationStopped()&&o(t,h))}),[c,{isActive:u}]}const Pk=w.exports.forwardRef((t,e)=>{let{as:n=ck,active:r,eventKey:i}=t,s=vj(t,yj);const[o,a]=Ak(Object.assign({key:iv(i,s.href),active:r},s));return o[hd("active")]=a.isActive,f(n,Object.assign({},s,o,{ref:e}))});Pk.displayName="NavItem";const _j=["as","onSelect","activeKey","role","onKeyDown"];function wj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const F0=()=>{},U0=hd("event-key"),Ok=w.exports.forwardRef((t,e)=>{let{as:n="div",onSelect:r,activeKey:i,role:s,onKeyDown:o}=t,a=wj(t,_j);const l=fj(),u=w.exports.useRef(!1),c=w.exports.useContext(Kc),h=w.exports.useContext(Rk);let d,p;h&&(s=s||"tablist",i=h.activeKey,d=h.getControlledId,p=h.getControllerId);const g=w.exports.useRef(null),_=v=>{const T=g.current;if(!T)return null;const S=vi(T,`[${U0}]:not([aria-disabled=true])`),x=T.querySelector("[aria-selected=true]");if(!x||x!==document.activeElement)return null;const A=S.indexOf(x);if(A===-1)return null;let D=A+v;return D>=S.length&&(D=0),D<0&&(D=S.length-1),S[D]},E=(v,T)=>{v!=null&&(r==null||r(v,T),c==null||c(v,T))},m=v=>{if(o==null||o(v),!h)return;let T;switch(v.key){case"ArrowLeft":case"ArrowUp":T=_(-1);break;case"ArrowRight":case"ArrowDown":T=_(1);break;default:return}!T||(v.preventDefault(),E(T.dataset[gj("EventKey")]||null,v),u.current=!0,l())};w.exports.useEffect(()=>{if(g.current&&u.current){const v=g.current.querySelector(`[${U0}][aria-selected=true]`);v==null||v.focus()}u.current=!1});const y=xk(e,g);return f(Kc.Provider,{value:E,children:f(rv.Provider,{value:{role:s,activeKey:iv(i),getControlledId:d||F0,getControllerId:p||F0},children:f(n,Object.assign({},a,{onKeyDown:m,ref:y,role:s}))})})});Ok.displayName="Nav";const Ej=Object.assign(Ok,{Item:Pk}),ls=w.exports.createContext(null);ls.displayName="NavbarContext";const Cj=Qt("nav-item"),Tj={disabled:!1},sv=w.exports.forwardRef(({bsPrefix:t,className:e,as:n=Jy,active:r,eventKey:i,...s},o)=>{t=we(t,"nav-link");const[a,l]=Ak({key:iv(i,s.href),active:r,...s});return f(n,{...s,...a,ref:o,className:he(e,t,s.disabled&&"disabled",l.isActive&&"active")})});sv.displayName="NavLink";sv.defaultProps=Tj;const Sj={justify:!1,fill:!1},ov=w.exports.forwardRef((t,e)=>{const{as:n="div",bsPrefix:r,variant:i,fill:s,justify:o,navbar:a,navbarScroll:l,className:u,activeKey:c,...h}=Xy(t,{activeKey:"onSelect"}),d=we(r,"nav");let p,g,_=!1;const E=w.exports.useContext(ls),m=w.exports.useContext(Qy);return E?(p=E.bsPrefix,_=a==null?!0:a):m&&({cardHeaderBsPrefix:g}=m),f(Ej,{as:n,ref:e,activeKey:c,className:he(u,{[d]:!_,[`${p}-nav`]:_,[`${p}-nav-scroll`]:_&&l,[`${g}-${i}`]:!!g,[`${d}-${i}`]:!!i,[`${d}-fill`]:s,[`${d}-justified`]:o}),...h})});ov.displayName="Nav";ov.defaultProps=Sj;const Ij=Object.assign(ov,{Item:Cj,Link:sv}),Dk=w.exports.forwardRef(({bsPrefix:t,className:e,as:n,...r},i)=>{t=we(t,"navbar-brand");const s=n||(r.href?"a":"span");return f(s,{...r,ref:i,className:he(e,t)})});Dk.displayName="NavbarBrand";function Vo(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...i){e.apply(this,i),n.apply(this,i)}},null)}const kj={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Mk(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,r=e[n],i=kj[t];return r+parseInt(or(e,i[0]),10)+parseInt(or(e,i[1]),10)}const bj={[Rr]:"collapse",[il]:"collapsing",[Sn]:"collapsing",[Xn]:"collapse show"},xj={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Mk},Lk=Un.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,className:s,children:o,dimension:a="height",getDimensionValue:l=Mk,...u},c)=>{const h=typeof a=="function"?a():a,d=w.exports.useMemo(()=>Vo(m=>{m.style[h]="0"},t),[h,t]),p=w.exports.useMemo(()=>Vo(m=>{const y=`scroll${h[0].toUpperCase()}${h.slice(1)}`;m.style[h]=`${m[y]}px`},e),[h,e]),g=w.exports.useMemo(()=>Vo(m=>{m.style[h]=null},n),[h,n]),_=w.exports.useMemo(()=>Vo(m=>{m.style[h]=`${l(h,m)}px`,bk(m)},r),[r,l,h]),E=w.exports.useMemo(()=>Vo(m=>{m.style[h]=null},i),[h,i]);return f(tv,{ref:c,addEndListener:ev,...u,"aria-expanded":u.role?u.in:null,onEnter:d,onEntering:p,onEntered:g,onExit:_,onExiting:E,childRef:o.ref,children:(m,y)=>Un.cloneElement(o,{...y,className:he(s,o.props.className,bj[m],h==="width"&&"collapse-horizontal")})})});Lk.defaultProps=xj;const $k=w.exports.forwardRef(({children:t,bsPrefix:e,...n},r)=>{e=we(e,"navbar-collapse");const i=w.exports.useContext(ls);return f(Lk,{in:!!(i&&i.expanded),...n,children:f("div",{ref:r,className:e,children:t})})});$k.displayName="NavbarCollapse";const Nj={label:"Toggle navigation"},av=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,label:r,as:i="button",onClick:s,...o},a)=>{t=we(t,"navbar-toggler");const{onToggle:l,expanded:u}=w.exports.useContext(ls)||{},c=In(h=>{s&&s(h),l&&l()});return i==="button"&&(o.type="button"),f(i,{...o,ref:a,onClick:c,"aria-label":r,className:he(e,t,!u&&"collapsed"),children:n||f("span",{className:`${t}-icon`})})});av.displayName="NavbarToggle";av.defaultProps=Nj;var mm=new WeakMap,j0=function(e,n){if(!(!e||!n)){var r=mm.get(n)||new Map;mm.set(n,r);var i=r.get(e);return i||(i=n.matchMedia(e),i.refCount=0,r.set(i.media,i)),i}};function Rj(t,e){e===void 0&&(e=typeof window>"u"?void 0:window);var n=j0(t,e),r=w.exports.useState(function(){return n?n.matches:!1}),i=r[0],s=r[1];return A2(function(){var o=j0(t,e);if(!o)return s(!1);var a=mm.get(e),l=function(){s(o.matches)};return o.refCount++,o.addListener(l),l(),function(){o.removeListener(l),o.refCount--,o.refCount<=0&&(a==null||a.delete(o.media)),o=void 0}},[t]),i}function Aj(t){var e=Object.keys(t);function n(a,l){return a===l?l:a?a+" and "+l:l}function r(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function i(a){var l=r(a),u=t[l];return typeof u=="number"?u=u-.2+"px":u="calc("+u+" - 0.2px)","(max-width: "+u+")"}function s(a){var l=t[a];return typeof l=="number"&&(l=l+"px"),"(min-width: "+l+")"}function o(a,l,u){var c;if(typeof a=="object")c=a,u=l,l=!0;else{var h;l=l||!0,c=(h={},h[a]=l,h)}var d=w.exports.useMemo(function(){return Object.entries(c).reduce(function(p,g){var _=g[0],E=g[1];return(E==="up"||E===!0)&&(p=n(p,s(_))),(E==="down"||E===!0)&&(p=n(p,i(_))),p},"")},[JSON.stringify(c)]);return Rj(d,u)}return o}var Pj=Aj({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function yf(t){t===void 0&&(t=Zy());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function V0(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function Oj(t){var e=w.exports.useRef(t);return e.current=t,e}function Dj(t){var e=Oj(t);w.exports.useEffect(function(){return function(){return e.current()}},[])}function Mj(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const B0=hd("modal-open");class lv{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return Mj(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(or(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(B0,""),or(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(B0),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Fk=w.exports.createContext(cd?window:void 0);Fk.Provider;function Uk(){return w.exports.useContext(Fk)}const vf=(t,e)=>cd?t==null?(e||Zy()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function Lj(t,e){const n=Uk(),[r,i]=w.exports.useState(()=>vf(t,n==null?void 0:n.document));if(!r){const s=vf(t);s&&i(s)}return w.exports.useEffect(()=>{e&&r&&e(r)},[e,r]),w.exports.useEffect(()=>{const s=vf(t);s!==r&&i(s)},[t,r]),r}const $j=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Fj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let _f;function Uj(t){return _f||(_f=new lv({ownerDocument:t==null?void 0:t.document})),_f}function jj(t){const e=Uk(),n=t||Uj(e),r=w.exports.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:w.exports.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:w.exports.useCallback(i=>{r.current.backdrop=i},[])})}const jk=w.exports.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:h,backdropTransition:d,autoFocus:p=!0,enforceFocus:g=!0,restoreFocus:_=!0,restoreFocusOptions:E,renderDialog:m,renderBackdrop:y=Ie=>f("div",Object.assign({},Ie)),manager:v,container:T,onShow:S,onHide:x=()=>{},onExit:A,onExited:D,onExiting:B,onEnter:Y,onEntering:re,onEntered:Nt}=t,lt=Fj(t,$j);const Lt=Lj(T),Pe=jj(v),_n=b2(),ln=x2(n),[O,G]=w.exports.useState(!n),K=w.exports.useRef(null);w.exports.useImperativeHandle(e,()=>Pe,[Pe]),cd&&!ln&&n&&(K.current=yf()),!h&&!n&&!O?G(!0):n&&O&&G(!1);const ye=In(()=>{if(Pe.add(),me.current=Wc(document,"keydown",z),W.current=Wc(document,"focus",()=>setTimeout(k),!0),S&&S(),p){const Ie=yf(document);Pe.dialog&&Ie&&!V0(Pe.dialog,Ie)&&(K.current=Ie,Pe.dialog.focus())}}),F=In(()=>{if(Pe.remove(),me.current==null||me.current(),W.current==null||W.current(),_){var Ie;(Ie=K.current)==null||Ie.focus==null||Ie.focus(E),K.current=null}});w.exports.useEffect(()=>{!n||!Lt||ye()},[n,Lt,ye]),w.exports.useEffect(()=>{!O||F()},[O,F]),Dj(()=>{F()});const k=In(()=>{if(!g||!_n()||!Pe.isTopModal())return;const Ie=yf();Pe.dialog&&Ie&&!V0(Pe.dialog,Ie)&&Pe.dialog.focus()}),M=In(Ie=>{Ie.target===Ie.currentTarget&&(u==null||u(Ie),a===!0&&x())}),z=In(Ie=>{l&&Ie.keyCode===27&&Pe.isTopModal()&&(c==null||c(Ie),Ie.defaultPrevented||x())}),W=w.exports.useRef(),me=w.exports.useRef(),Rt=(...Ie)=>{G(!0),D==null||D(...Ie)},Ro=h;if(!Lt||!(n||Ro&&!O))return null;const Yv=Object.assign({role:r,ref:Pe.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},lt,{style:s,className:i,tabIndex:-1});let Ed=m?m(Yv):f("div",Object.assign({},Yv,{children:w.exports.cloneElement(o,{role:"document"})}));Ro&&(Ed=f(Ro,{appear:!0,unmountOnExit:!0,in:!!n,onExit:A,onExiting:B,onExited:Rt,onEnter:Y,onEntering:re,onEntered:Nt,children:Ed}));let Xl=null;if(a){const Ie=d;Xl=y({ref:Pe.setBackdropRef,onClick:M}),Ie&&(Xl=f(Ie,{appear:!0,in:!!n,children:Xl}))}return f(j,{children:xs.createPortal(C(j,{children:[Xl,Ed]}),Lt)})});jk.displayName="Modal";const Vj=Object.assign(jk,{Manager:lv}),Bj=Qt("offcanvas-body"),zj={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Hj={[Sn]:"show",[Xn]:"show"},uv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,...r},i)=>(t=we(t,"offcanvas"),f(tv,{ref:i,addEndListener:ev,...r,childRef:n.ref,children:(s,o)=>w.exports.cloneElement(n,{...o,className:he(e,n.props.className,(s===Sn||s===il)&&`${t}-toggling`,Hj[s])})})));uv.defaultProps=zj;uv.displayName="OffcanvasToggling";const Vk=w.exports.createContext({onHide(){}}),Wj={closeLabel:"Close",closeButton:!1},Bk=w.exports.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const a=w.exports.useContext(Vk),l=In(()=>{a==null||a.onHide(),r==null||r()});return C("div",{ref:o,...s,children:[i,n&&f(Bl,{"aria-label":t,variant:e,onClick:l})]})});Bk.defaultProps=Wj;const Kj={closeLabel:"Close",closeButton:!1},cv=w.exports.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=we(t,"offcanvas-header"),f(Bk,{ref:r,...n,className:he(e,t)})));cv.displayName="OffcanvasHeader";cv.defaultProps=Kj;const qj=ud("h5"),Gj=Qt("offcanvas-title",{Component:qj});function Qj(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function Yj(t,e){t.classList?t.classList.add(e):Qj(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function z0(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Xj(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=z0(t.className,e):t.setAttribute("class",z0(t.className&&t.className.baseVal||"",e))}const ps={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class zk extends lv{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,or(n,{[e]:`${parseFloat(or(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],or(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(Yj(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";vi(n,ps.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),vi(n,ps.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),vi(n,ps.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Xj(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";vi(n,ps.FIXED_CONTENT).forEach(s=>this.restore(r,s)),vi(n,ps.STICKY_CONTENT).forEach(s=>this.restore(i,s)),vi(n,ps.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let wf;function Jj(t){return wf||(wf=new zk(t)),wf}const Zj={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};function eV(t){return f(uv,{...t})}function tV(t){return f(Vl,{...t})}const hv=w.exports.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":r,placement:i,responsive:s,show:o,backdrop:a,keyboard:l,scroll:u,onEscapeKeyDown:c,onShow:h,onHide:d,container:p,autoFocus:g,enforceFocus:_,restoreFocus:E,restoreFocusOptions:m,onEntered:y,onExit:v,onExiting:T,onEnter:S,onEntering:x,onExited:A,backdropClassName:D,manager:B,renderStaticNode:Y,...re},Nt)=>{const lt=w.exports.useRef();t=we(t,"offcanvas");const{onToggle:Lt}=w.exports.useContext(ls)||{},[Pe,_n]=w.exports.useState(!1),ln=Pj(s||"xs","up");w.exports.useEffect(()=>{_n(s?o&&!ln:o)},[o,s,ln]);const O=In(()=>{Lt==null||Lt(),d==null||d()}),G=w.exports.useMemo(()=>({onHide:O}),[O]);function K(){return B||(u?(lt.current||(lt.current=new zk({handleContainerOverflow:!1})),lt.current):Jj())}const ye=(z,...W)=>{z&&(z.style.visibility="visible"),S==null||S(z,...W)},F=(z,...W)=>{z&&(z.style.visibility=""),A==null||A(...W)},k=w.exports.useCallback(z=>f("div",{...z,className:he(`${t}-backdrop`,D)}),[D,t]),M=z=>f("div",{...z,...re,className:he(e,s?`${t}-${s}`:t,`${t}-${i}`),"aria-labelledby":r,children:n});return C(j,{children:[!Pe&&(s||Y)&&M({}),f(Vk.Provider,{value:G,children:f(Vj,{show:Pe,ref:Nt,backdrop:a,container:p,keyboard:l,autoFocus:g,enforceFocus:_&&!u,restoreFocus:E,restoreFocusOptions:m,onEscapeKeyDown:c,onShow:h,onHide:O,onEnter:ye,onEntering:x,onEntered:y,onExit:v,onExiting:T,onExited:F,manager:K(),transition:eV,backdropTransition:tV,renderBackdrop:k,renderDialog:M})})]})});hv.displayName="Offcanvas";hv.defaultProps=Zj;const nV=Object.assign(hv,{Body:Bj,Header:cv,Title:Gj}),Hk=w.exports.forwardRef((t,e)=>{const n=w.exports.useContext(ls);return f(nV,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});Hk.displayName="NavbarOffcanvas";const rV=Qt("navbar-text",{Component:"span"}),iV={expand:!0,variant:"light",collapseOnSelect:!1},dv=w.exports.forwardRef((t,e)=>{const{bsPrefix:n,expand:r,variant:i,bg:s,fixed:o,sticky:a,className:l,as:u="nav",expanded:c,onToggle:h,onSelect:d,collapseOnSelect:p,...g}=Xy(t,{expanded:"onToggle"}),_=we(n,"navbar"),E=w.exports.useCallback((...v)=>{d==null||d(...v),p&&c&&(h==null||h(!1))},[d,p,c,h]);g.role===void 0&&u!=="nav"&&(g.role="navigation");let m=`${_}-expand`;typeof r=="string"&&(m=`${m}-${r}`);const y=w.exports.useMemo(()=>({onToggle:()=>h==null?void 0:h(!c),bsPrefix:_,expanded:!!c,expand:r}),[_,c,r,h]);return f(ls.Provider,{value:y,children:f(Kc.Provider,{value:E,children:f(u,{ref:e,...g,className:he(l,_,r&&m,i&&`${_}-${i}`,s&&`bg-${s}`,a&&`sticky-${a}`,o&&`fixed-${o}`)})})})});dv.defaultProps=iV;dv.displayName="Navbar";const sV=Object.assign(dv,{Brand:Dk,Collapse:$k,Offcanvas:Hk,Text:rV,Toggle:av}),oV=()=>{const{user:t,logout:e}=Er();return f(j,{children:t&&f(j,{children:f(sV,{bg:"light",expand:"lg",children:f(Jt,{children:C(Ij,{className:"justify-content-center",variant:"pills",children:[f(Yd,{to:"/aplicacion",className:"p-2 text-decoration-none text-secondary",children:" Mis Ratios Financieros "}),f(Yd,{to:"/gestion",className:"p-2 text-decoration-none text-secondary",children:" Gestion "}),f(Yd,{to:"/datos-gestion",className:"p-2 text-decoration-none text-secondary",children:" Registrar Datos "}),f(ht,{className:"p-2",variant:"primary",type:"submit",onClick:async()=>{await e()},children:"Cerrar Sesion"})]})})})})})},Bo=({children:t})=>{const{user:e,loading:n}=Er();return n?f("h1",{children:"loading..."}):e?f(j,{children:t}):f(iS,{to:"/"})},aV=({children:t})=>{const{user:e,loading:n}=Er();return n?f("h1",{children:"loading..."}):e?f(iS,{to:"/aplicacion"}):f(j,{children:t})},H0="@firebase/database",W0="0.13.8";/**
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
 */let Wk="";function lV(t){Wk=t}/**
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
 */class cV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Kk=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new uV(e)}}catch{}return new cV},xi=Kk("localStorage"),gm=Kk("sessionStorage");/**
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
 */const Hs=new _l("@firebase/database"),hV=function(){let t=1;return function(){return t++}}(),qk=function(t){const e=CP(t),n=new vP;n.update(e);const r=n.digest();return Dg.encodeByteArray(r)},zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zl.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let Li=null,K0=!0;const dV=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Hs.logLevel=fe.VERBOSE,Li=Hs.log.bind(Hs),e&&gm.set("logging_enabled",!0)):typeof t=="function"?Li=t:(Li=null,gm.remove("logging_enabled"))},Et=function(...t){if(K0===!0&&(K0=!1,Li===null&&gm.get("logging_enabled")===!0&&dV(!0)),Li){const e=zl.apply(null,t);Li(e)}},Hl=function(t){return function(...e){Et(t,...e)}},ym=function(...t){const e="FIREBASE INTERNAL ERROR: "+zl(...t);Hs.error(e)},Gi=function(...t){const e=`FIREBASE FATAL ERROR: ${zl(...t)}`;throw Hs.error(e),new Error(e)},tn=function(...t){const e="FIREBASE WARNING: "+zl(...t);Hs.warn(e)},fV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&tn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Gk=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},lo="[MIN_NAME]",Qi="[MAX_NAME]",xo=function(t,e){if(t===e)return 0;if(t===lo||e===Qi)return-1;if(e===lo||t===Qi)return 1;{const n=q0(t),r=q0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mV=function(t,e){return t===e?0:t<e?-1:1},zo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},fv=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=fv(t[e[r]]);return n+="}",n},Qk=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Gt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Yk=function(t){P(!Gk(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _V=new RegExp("^-?(0*)\\d{1,10}$"),wV=-2147483648,EV=2147483647,q0=function(t){if(_V.test(t)){const e=Number(t);if(e>=wV&&e<=EV)return e}return null},Wl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw tn("Exception was thrown by user callback.",n),e},Math.floor(0))}},CV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_a=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class SV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',tn(e)}}class vm{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vm.OWNER="owner";/**
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
 */const pv="5",Xk="v",Jk="s",Zk="r",eb="f",tb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,nb="ls",rb="p",_m="ac",ib="websocket",sb="long_polling";/**
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
 */class IV{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function kV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ob(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===ib)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kV(t)&&(n.ns=t.namespace);const i=[];return Gt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class bV{constructor(){this.counters_={}}incrementCounter(e,n=1){wr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tP(this.counters_)}}/**
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
 */const Ef={},Cf={};function mv(t){const e=t.toString();return Ef[e]||(Ef[e]=new bV),Ef[e]}function xV(t,e){const n=t.toString();return Cf[n]||(Cf[n]=e()),Cf[n]}/**
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
 */const G0="start",RV="close",AV="pLPCommand",PV="pRTLPCB",ab="id",lb="pw",ub="ser",OV="cb",DV="seg",MV="ts",LV="d",$V="dframe",cb=1870,hb=30,FV=cb-hb,UV=25e3,jV=3e4;class Ps{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hl(e),this.stats_=mv(n),this.urlFn=l=>(this.appCheckToken&&(l[_m]=this.appCheckToken),ob(n,sb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jV)),pV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gv((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===G0)this.id=a,this.password=l;else if(o===RV)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[G0]="t",r[ub]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[OV]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Xk]=pv,this.transportSessionId&&(r[Jk]=this.transportSessionId),this.lastSessionId&&(r[nb]=this.lastSessionId),this.applicationId&&(r[rb]=this.applicationId),this.appCheckToken&&(r[_m]=this.appCheckToken),typeof location<"u"&&location.hostname&&tb.test(location.hostname)&&(r[Zk]=eb);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ps.forceAllow_=!0}static forceDisallow(){Ps.forceDisallow_=!0}static isAvailable(){return Ps.forceAllow_?!0:!Ps.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gV()&&!yV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=aS(n),i=Qk(r,FV);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$V]="t",r[ab]=e,r[lb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=hV(),window[AV+this.uniqueCallbackIdentifier]=e,window[PV+this.uniqueCallbackIdentifier]=n,this.myIFrame=gv.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Et("frame writing exception"),a.stack&&Et(a.stack),Et(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ab]=this.myID,e[lb]=this.myPW,e[ub]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+hb+r.length<=cb;){const o=this.pendingSegs.shift();r=r+"&"+DV+i+"="+o.seg+"&"+MV+i+"="+o.ts+"&"+LV+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(UV)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const VV=16384,BV=45e3;let qc=null;typeof MozWebSocket<"u"?qc=MozWebSocket:typeof WebSocket<"u"&&(qc=WebSocket);class kn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hl(this.connId),this.stats_=mv(n),this.connURL=kn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Xk]=pv,typeof location<"u"&&location.hostname&&tb.test(location.hostname)&&(o[Zk]=eb),n&&(o[Jk]=n),r&&(o[nb]=r),i&&(o[_m]=i),s&&(o[rb]=s),ob(e,ib,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xi.set("previous_websocket_failure",!0);try{let r;cS(),this.mySock=new qc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&qc!==null&&!kn.forceDisallow_}static previouslyFailed(){return xi.isInMemoryStorage||xi.get("previous_websocket_failure")===!0}markConnectionHealthy(){xi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ja(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qk(n,VV);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(BV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kn.responsesRequiredToBeHealthy=2;kn.healthyTimeout=3e4;/**
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
 */const zV=6e4,HV=5e3,WV=10*1024,KV=100*1024,Tf="t",Q0="d",qV="s",Y0="r",GV="e",X0="o",J0="a",Z0="n",eE="p",QV="h";class YV{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hl("c:"+this.id+":"),this.transportManager_=new sl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=_a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tf in e){const n=e[Tf];n===J0?this.upgradeIfSecondaryHealthy_():n===Y0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===X0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:J0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Z0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zo("t",e),r=zo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zo(Tf,e);if(Q0 in e){const r=e[Q0];if(n===QV)this.onHandshake_(r);else if(n===Z0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qV?this.onConnectionShutdown_(r):n===Y0?this.onReset_(r):n===GV?ym("Server Error: "+r):n===X0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ym("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pv!==r&&tn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(HV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class db{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class fb{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Gc extends fb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Gc}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const tE=32,nE=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ee("")}function ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ii(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function pb(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function XV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function mb(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Qe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ee(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function Bt(t,e){const n=ae(t),r=ae(e);if(n===null)return e;if(n===r)return Bt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yv(t,e){if(ii(t)!==ii(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ii(t)>ii(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JV{constructor(e,n){this.errorPrefix_=n,this.parts_=mb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xh(this.parts_[r]);yb(this)}}function ZV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xh(e),yb(t)}function eB(t){const e=t.parts_.pop();t.byteLength_-=xh(e),t.parts_.length>0&&(t.byteLength_-=1)}function yb(t){if(t.byteLength_>nE)throw new Error(t.errorPrefix_+"has a key path longer than "+nE+" bytes ("+t.byteLength_+").");if(t.parts_.length>tE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tE+") or object contains a cycle "+_i(t))}function _i(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vv extends fb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vv}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ho=1e3,tB=60*5*1e3,rE=30*1e3,nB=1.3,rB=3e4,iB="server_kill",iE=3;class ar extends db{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ar.nextPersistentConnectionId_++,this.log_=Hl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ho,this.maxReconnectDelay_=tB,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!cS())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Gc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(st(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new $g,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;ar.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wr(e,"w")){const r=eo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();tn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=gP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ym("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rB&&(this.reconnectDelay_=Ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nB)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ar.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Et("getToken() completed but was canceled"):(Et("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new YV(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{tn(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(iB)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&tn(h),l())}}}interrupt(e){Et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Op(this.interruptReasons_)&&(this.reconnectDelay_=Ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>fv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=iE&&(this.reconnectDelay_=rE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=iE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wk.replace(/\./g,"-")]=1,Mg()?e["framework.cordova"]=1:uS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Gc.getInstance().currentlyOnline();return Op(this.interruptReasons_)&&e}}ar.nextPersistentConnectionId_=0;ar.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class dd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(lo,e),i=new oe(lo,n);return this.compare(r,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Tu;class vb extends dd{static get __EMPTY_NODE(){return Tu}static set __EMPTY_NODE(e){Tu=e}compare(e,n){return xo(e.name,n.name)}isDefinedOn(e){throw vo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Qi,Tu)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Tu)}toString(){return".key"}}const Ws=new vb;/**
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
 */class Su{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:it.RED,this.left=i!=null?i:zt.EMPTY_NODE,this.right=s!=null?s:zt.EMPTY_NODE}copy(e,n,r,i,s){return new it(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return zt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class sB{copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Su(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Su(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Su(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Su(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new sB;/**
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
 */function oB(t,e){return xo(t.name,e.name)}function _v(t,e){return xo(t,e)}/**
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
 */let wm;function aB(t){wm=t}const _b=function(t){return typeof t=="number"?"number:"+Yk(t):"string:"+t},wb=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wr(e,".sv"),"Priority must be a string or number.")}else P(t===wm||t.isEmpty(),"priority of unexpected type.");P(t===wm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sE;class tt{constructor(e,n=tt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wb(this.priorityNode_)}static set __childrenNodeConstructor(e){sE=e}static get __childrenNodeConstructor(){return sE}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ae(e)===".priority"?this.priorityNode_:tt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:tt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,tt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_b(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Yk(this.value_):e+=this.value_,this.lazyHash_=qk(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tt.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=tt.VALUE_TYPE_ORDER.indexOf(n),s=tt.VALUE_TYPE_ORDER.indexOf(r);return P(i>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}tt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Eb,Cb;function lB(t){Eb=t}function uB(t){Cb=t}class cB extends dd{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Qi,new tt("[PRIORITY-POST]",Cb))}makePost(e,n){const r=Eb(e);return new oe(n,new tt("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new cB;/**
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
 */const hB=Math.log(2);class dB{constructor(e){const n=s=>parseInt(Math.log(s)/hB,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qc=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=t[l],d=n?n(h):h,new it(d,h.node,it.BLACK,null,null);{const p=parseInt(c/2,10)+l,g=i(l,p),_=i(p+1,u);return h=t[p],d=n?n(h):h,new it(d,h.node,it.BLACK,g,_)}},s=function(l){let u=null,c=null,h=t.length;const d=function(g,_){const E=h-g,m=h;h-=g;const y=i(E+1,m),v=t[E],T=n?n(v):v;p(new it(T,v.node,_,null,y))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(g+1));_?d(E,it.BLACK):(d(E,it.BLACK),d(E,it.RED))}return c},o=new dB(t.length),a=s(o);return new zt(r||e,a)};/**
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
 */let Sf;const ms={};class rr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ms&&$e,"ChildrenNode.ts has not been loaded"),Sf=Sf||new rr({".priority":ms},{".priority":$e}),Sf}get(e){const n=eo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return wr(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(oe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Qc(r,e.getCompare()):a=ms;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new rr(c,u)}addToIndexes(e,n){const r=Cc(this.indexes_,(i,s)=>{const o=eo(this.indexSet_,s);if(P(o,"Missing index implementation for "+s),i===ms)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Qc(a,o.getCompare())}else return ms;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new rr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Cc(this.indexes_,i=>{if(i===ms)return i;{const s=n.get(e.name);return s?i.remove(new oe(e.name,s)):i}});return new rr(r,this.indexSet_)}}/**
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
 */let Wo;class J{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&wb(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wo||(Wo=new J(new zt(_v),null,rr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wo}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wo:n}}getChild(e){const n=ae(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wo:this.priorityNode_;return new J(i,o,s)}}updateChild(e,n){const r=ae(e);if(r===null)return n;{P(ae(e)!==".priority"||ii(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_b(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qk(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new oe(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kl?-1:0}withIndex(e){if(e===Ws||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ws?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fB extends J{constructor(){super(new zt(_v),J.EMPTY_NODE,rr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const Kl=new fB;Object.defineProperties(oe,{MIN:{value:new oe(lo,J.EMPTY_NODE)},MAX:{value:new oe(Qi,Kl)}});vb.__EMPTY_NODE=J.EMPTY_NODE;tt.__childrenNodeConstructor=J;aB(Kl);uB(Kl);/**
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
 */const pB=!0;function Ct(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new tt(n,Ct(e))}if(!(t instanceof Array)&&pB){const n=[];let r=!1;if(Gt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ct(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return J.EMPTY_NODE;const s=Qc(n,oB,o=>o.name,_v);if(r){const o=Qc(n,$e.getCompare());return new J(s,Ct(e),new rr({".priority":o},{".priority":$e}))}else return new J(s,Ct(e),rr.Default)}else{let n=J.EMPTY_NODE;return Gt(t,(r,i)=>{if(wr(t,r)&&r.substring(0,1)!=="."){const s=Ct(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ct(e))}}lB(Ct);/**
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
 */class mB extends dd{constructor(e){super(),this.indexPath_=e,P(!le(e)&&ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xo(e.name,n.name):s}makePost(e,n){const r=Ct(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,Kl);return new oe(Qi,e)}toString(){return mb(this.indexPath_,0).join("/")}}/**
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
 */class gB extends dd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=Ct(e);return new oe(n,r)}toString(){return".value"}}const yB=new gB;/**
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
 */function Tb(t){return{type:"value",snapshotNode:t}}function uo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ol(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function al(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vB(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wv{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ol(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(uo(n,r)):o.trackChildChange(al(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(ol(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(al(i,s,o))}else r.trackChildChange(uo(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ll{constructor(e){this.indexedFilter_=new wv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ll.getStartPost_(e),this.endPost_=ll.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new oe(n,r))||(r=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new oe(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class _B{constructor(e){this.rangedFilter_=new ll(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new oe(n,r))||(r=J.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,p)=>h(p,d)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(s,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:i=i.updateImmediateChild(h.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(al(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ol(n,h));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(uo(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(ol(u.name,u.node)),s.trackChildChange(uo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
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
 */class Ev{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:lo}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Qi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Ev;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wB(t){return t.loadsAllData()?new wv(t.getIndex()):t.hasLimit()?new _B(t):new ll(t)}function oE(t){const e={};if(t.isDefault())return e;let n;return t.index_===$e?n="$priority":t.index_===yB?n="$value":t.index_===Ws?n="$key":(P(t.index_ instanceof mB,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_&&(e.startAt=st(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+st(t.indexStartName_))),t.endSet_&&(e.endAt=st(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+st(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function aE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
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
 */class Yc extends db{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Hl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yc.getListenId_(e,r),a={};this.listens_[o]=a;const l=oE(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),eo(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Yc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=oE(e._queryParams),r=e._path.toString(),i=new $g;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ja(a.responseText)}catch{tn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&tn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class EB{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xc(){return{value:null,children:new Map}}function Sb(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ae(e);t.children.has(r)||t.children.set(r,Xc());const i=t.children.get(r);e=Ce(e),Sb(i,e,n)}}function Em(t,e,n){t.value!==null?n(e,t.value):CB(t,(r,i)=>{const s=new Ee(e.toString()+"/"+r);Em(i,s,n)})}function CB(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class TB{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Gt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const lE=10*1e3,SB=30*1e3,IB=5*60*1e3;class kB{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TB(e);const r=lE+(SB-lE)*Math.random();_a(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Gt(e,(i,s)=>{s>0&&wr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),_a(this.reportStats_.bind(this),Math.floor(Math.random()*2*IB))}}/**
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
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function Ib(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Jc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xn.ACK_USER_WRITE,this.source=Ib()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Jc(ge(),n,this.revert)}}else return P(ae(this.path)===e,"operationForChild called for unrelated child."),new Jc(Ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class bB{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function xB(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(vB(o.childName,o.snapshotNode))}),Ko(t,i,"child_removed",e,r,n),Ko(t,i,"child_added",e,r,n),Ko(t,i,"child_moved",s,r,n),Ko(t,i,"child_changed",e,r,n),Ko(t,i,"value",e,r,n),i}function Ko(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RB(t,a,l)),o.forEach(a=>{const l=NB(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function NB(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RB(t,e,n){if(e.childName==null||n.childName==null)throw vo("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function fd(t,e){return{eventCache:t,serverCache:e}}function wa(t,e,n,r){return fd(new Xi(e,n,r),t.serverCache)}function kb(t,e,n,r){return fd(t.eventCache,new Xi(e,n,r))}function Cm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ji(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let If;const AB=()=>(If||(If=new zt(mV)),If);class be{constructor(e,n=AB()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return Gt(e,(r,i)=>{n=n.set(new Ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(le(e))return null;{const r=ae(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Qe(new Ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ae(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new be(null)}}set(e,n){if(le(e))return new be(n,this.children);{const r=ae(e),s=(this.children.get(r)||new be(null)).set(Ce(e),n),o=this.children.insert(r,s);return new be(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ae(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new be(null):new be(this.value,s)}else return this}}get(e){if(le(e))return this.value;{const n=ae(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(le(e))return n;{const r=ae(e),s=(this.children.get(r)||new be(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new be(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Qe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(le(e))return null;{const s=ae(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Qe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const i=ae(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Qe(n,i),r):new be(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Qe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new be(null))}}function Ea(t,e,n){if(le(e))return new Pn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Bt(i,e);return s=s.updateChild(o,n),new Pn(t.writeTree_.set(i,s))}else{const i=new be(n),s=t.writeTree_.setTree(e,i);return new Pn(s)}}}function uE(t,e,n){let r=t;return Gt(n,(i,s)=>{r=Ea(r,Qe(e,i),s)}),r}function cE(t,e){if(le(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Pn(n)}}function Tm(t,e){return us(t,e)!=null}function us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Bt(n.path,e)):null}function hE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new oe(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new oe(r,i.value))}),e}function Jr(t,e){if(le(e))return t;{const n=us(t,e);return n!=null?new Pn(new be(n)):new Pn(t.writeTree_.subtree(e))}}function Sm(t){return t.writeTree_.isEmpty()}function co(t,e){return bb(ge(),t.writeTree_,e)}function bb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=bb(Qe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Qe(t,".priority"),r)),n}}/**
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
 */function Sv(t,e){return Ab(e,t)}function PB(t,e,n,r,i){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ea(t.visibleWrites,e,n)),t.lastWriteId=r}function OB(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DB(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&MB(a,r.path)?i=!1:bn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return LB(t),!0;if(r.snap)t.visibleWrites=cE(t.visibleWrites,r.path);else{const a=r.children;Gt(a,l=>{t.visibleWrites=cE(t.visibleWrites,Qe(r.path,l))})}return!0}else return!1}function MB(t,e){if(t.snap)return bn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bn(Qe(t.path,n),e))return!0;return!1}function LB(t){t.visibleWrites=xb(t.allWrites,$B,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $B(t){return t.visible}function xb(t,e,n){let r=Pn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)bn(n,o)?(a=Bt(n,o),r=Ea(r,a,s.snap)):bn(o,n)&&(a=Bt(o,n),r=Ea(r,ge(),s.snap.getChild(a)));else if(s.children){if(bn(n,o))a=Bt(n,o),r=uE(r,a,s.children);else if(bn(o,n))if(a=Bt(o,n),le(a))r=uE(r,ge(),s.children);else{const l=eo(s.children,ae(a));if(l){const u=l.getChild(Ce(a));r=Ea(r,ge(),u)}}}else throw vo("WriteRecord should have .snap or .children")}}return r}function Nb(t,e,n,r,i){if(!r&&!i){const s=us(t.visibleWrites,e);if(s!=null)return s;{const o=Jr(t.visibleWrites,e);if(Sm(o))return n;if(n==null&&!Tm(o,ge()))return null;{const a=n||J.EMPTY_NODE;return co(o,a)}}}else{const s=Jr(t.visibleWrites,e);if(!i&&Sm(s))return n;if(!i&&n==null&&!Tm(s,ge()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(bn(u.path,e)||bn(e,u.path))},a=xb(t.allWrites,o,e),l=n||J.EMPTY_NODE;return co(a,l)}}}function FB(t,e,n){let r=J.EMPTY_NODE;const i=us(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Jr(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const l=co(Jr(s,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),hE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Jr(t.visibleWrites,e);return hE(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function UB(t,e,n,r,i){P(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Qe(e,n);if(Tm(t.visibleWrites,s))return null;{const o=Jr(t.visibleWrites,s);return Sm(o)?i.getChild(n):co(o,i.getChild(n))}}function jB(t,e,n,r){const i=Qe(e,n),s=us(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Jr(t.visibleWrites,i);return co(o,r.getNode().getImmediateChild(n))}else return null}function VB(t,e){return us(t.visibleWrites,e)}function BB(t,e,n,r,i,s,o){let a;const l=Jr(t.visibleWrites,e),u=us(l,ge());if(u!=null)a=u;else if(n!=null)a=co(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function zB(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Zc(t,e,n,r){return Nb(t.writeTree,t.treePath,e,n,r)}function Iv(t,e){return FB(t.writeTree,t.treePath,e)}function dE(t,e,n,r){return UB(t.writeTree,t.treePath,e,n,r)}function eh(t,e){return VB(t.writeTree,Qe(t.treePath,e))}function HB(t,e,n,r,i,s){return BB(t.writeTree,t.treePath,e,n,r,i,s)}function kv(t,e,n){return jB(t.writeTree,t.treePath,e,n)}function Rb(t,e){return Ab(Qe(t.treePath,e),t.writeTree)}function Ab(t,e){return{treePath:t,writeTree:e}}/**
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
 */class KB{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Pb=new KB;class bv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ji(this.viewCache_),s=HB(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function qB(t){return{filter:t}}function GB(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QB(t,e,n,r,i){const s=new WB;let o,a;if(n.type===xn.OVERWRITE){const u=n;u.source.fromUser?o=Im(t,e,u.path,u.snap,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=th(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===xn.MERGE){const u=n;u.source.fromUser?o=XB(t,e,u.path,u.children,r,i,s):(P(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=km(t,e,u.path,u.children,r,i,a,s))}else if(n.type===xn.ACK_USER_WRITE){const u=n;u.revert?o=ez(t,e,u.path,r,i,s):o=JB(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===xn.LISTEN_COMPLETE)o=ZB(t,e,n.path,r,s);else throw vo("Unknown operation type: "+n.type);const l=s.getChanges();return YB(e,o,l),{viewCache:o,changes:l}}function YB(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Cm(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Tb(Cm(e)))}}function Ob(t,e,n,r,i,s){const o=e.eventCache;if(eh(r,n)!=null)return e;{let a,l;if(le(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Ji(e),c=u instanceof J?u:J.EMPTY_NODE,h=Iv(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Zc(r,Ji(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ae(n);if(u===".priority"){P(ii(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=dE(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=Ce(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=dE(r,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=kv(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return wa(e,a,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function th(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),p,null)}else{const p=ae(n);if(!l.isCompleteForPath(n)&&ii(n)>1)return e;const g=Ce(n),E=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),p,E,g,Pb,null)}const h=kb(e,u,l.isFullyInitialized()||le(n),c.filtersNodes()),d=new bv(i,h,s);return Ob(t,h,n,i,d,a)}function Im(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new bv(i,e,s);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=wa(e,u,!0,t.filter.filtersNodes());else{const h=ae(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=wa(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=Ce(n),p=a.getNode().getImmediateChild(h);let g;if(le(d))g=r;else{const _=c.getCompleteChild(h);_!=null?pb(d)===".priority"&&_.getChild(gb(d)).isEmpty()?g=_:g=_.updateChild(d,r):g=J.EMPTY_NODE}if(p.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,c,o);l=wa(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fE(t,e){return t.eventCache.isCompleteForChild(e)}function XB(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Qe(n,l);fE(e,ae(c))&&(a=Im(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Qe(n,l);fE(e,ae(c))||(a=Im(t,a,c,u,i,s,o))}),a}function pE(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function km(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;le(n)?u=r:u=new be(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=pE(t,p,d);l=th(t,l,new Ee(h),g,i,s,o,a)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!c.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),_=pE(t,g,d);l=th(t,l,new Ee(h),_,i,s,o,a)}}),l}function JB(t,e,n,r,i,s,o){if(eh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(le(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return th(t,e,n,l.getNode().getChild(n),i,s,a,o);if(le(n)){let u=new be(null);return l.getNode().forEachChild(Ws,(c,h)=>{u=u.set(new Ee(c),h)}),km(t,e,n,u,i,s,a,o)}else return e}else{let u=new be(null);return r.foreach((c,h)=>{const d=Qe(n,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),km(t,e,n,u,i,s,a,o)}}function ZB(t,e,n,r,i){const s=e.serverCache,o=kb(e,s.getNode(),s.isFullyInitialized()||le(n),s.isFiltered());return Ob(t,o,n,r,Pb,i)}function ez(t,e,n,r,i,s){let o;if(eh(r,n)!=null)return e;{const a=new bv(r,e,i),l=e.eventCache.getNode();let u;if(le(n)||ae(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Zc(r,Ji(e));else{const h=e.serverCache.getNode();P(h instanceof J,"serverChildren would be complete if leaf node"),c=Iv(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=ae(n);let h=kv(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,Ce(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,J.EMPTY_NODE,Ce(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zc(r,Ji(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||eh(r,ge())!=null,wa(e,u,o,t.filter.filtersNodes())}}/**
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
 */class tz{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wv(r.getIndex()),s=wB(r);this.processor_=qB(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(J.EMPTY_NODE,a.getNode(),null),c=new Xi(l,o.isFullyInitialized(),i.filtersNodes()),h=new Xi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=fd(h,c),this.eventGenerator_=new bB(this.query_)}get query(){return this.query_}}function nz(t){return t.viewCache_.serverCache.getNode()}function rz(t,e){const n=Ji(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ae(e)).isEmpty())?n.getChild(e):null}function mE(t){return t.eventRegistrations_.length===0}function iz(t,e){t.eventRegistrations_.push(e)}function gE(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function yE(t,e,n,r){e.type===xn.MERGE&&e.source.queryId!==null&&(P(Ji(t.viewCache_),"We should always have a full cache before handling merges"),P(Cm(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QB(t.processor_,i,e,n,r);return GB(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Db(t,s.changes,s.viewCache.eventCache.getNode(),null)}function sz(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(uo(s,o))}),n.isFullyInitialized()&&r.push(Tb(n.getNode())),Db(t,r,n.getNode(),e)}function Db(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return xB(t.eventGenerator_,e,n,i)}/**
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
 */let nh;class oz{constructor(){this.views=new Map}}function az(t){P(!nh,"__referenceConstructor has already been defined"),nh=t}function lz(){return P(nh,"Reference.ts has not been loaded"),nh}function uz(t){return t.views.size===0}function xv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return P(s!=null,"SyncTree gave us an op for an invalid query."),yE(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(yE(o,e,n,r));return s}}function cz(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Zc(n,i?r:null),l=!1;a?l=!0:r instanceof J?(a=Iv(n,r),l=!1):(a=J.EMPTY_NODE,l=!1);const u=fd(new Xi(a,l,!1),new Xi(r,i,!1));return new tz(e,u)}return o}function hz(t,e,n,r,i,s){const o=cz(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iz(o,n),sz(o,n)}function dz(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=si(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(gE(u,n,r)),mE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(gE(l,n,r)),mE(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!si(t)&&s.push(new(lz())(e._repo,e._path)),{removed:s,events:o}}function Mb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ks(t,e){let n=null;for(const r of t.views.values())n=n||rz(r,e);return n}function Lb(t,e){if(e._queryParams.loadsAllData())return pd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $b(t,e){return Lb(t,e)!=null}function si(t){return pd(t)!=null}function pd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let rh;function fz(t){P(!rh,"__referenceConstructor has already been defined"),rh=t}function pz(){return P(rh,"Reference.ts has not been loaded"),rh}let mz=1;class vE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=zB(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gz(t,e,n,r,i){return PB(t.pendingWriteTree_,e,n,r,i),i?ql(t,new Yi(Ib(),e,n)):[]}function Os(t,e,n=!1){const r=OB(t.pendingWriteTree_,e);if(DB(t.pendingWriteTree_,e)){let s=new be(null);return r.snap!=null?s=s.set(ge(),!0):Gt(r.children,o=>{s=s.set(new Ee(o),!0)}),ql(t,new Jc(r.path,s,n))}else return[]}function md(t,e,n){return ql(t,new Yi(Cv(),e,n))}function yz(t,e,n){const r=be.fromObject(n);return ql(t,new cl(Cv(),e,r))}function vz(t,e){return ql(t,new ul(Cv(),e))}function _z(t,e,n){const r=Nv(t,n);if(r){const i=Rv(r),s=i.path,o=i.queryId,a=Bt(s,e),l=new ul(Tv(o),a);return Av(t,s,l)}else return[]}function bm(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||$b(o,e))){const l=dz(o,e,n,r);uz(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,p)=>si(p));if(c&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const p=Cz(d);for(let g=0;g<p.length;++g){const _=p[g],E=_.query,m=Vb(t,_);t.listenProvider_.startListening(Ca(E),ih(t,E),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ca(e),null):u.forEach(d=>{const p=t.queryToTagMap.get(gd(d));t.listenProvider_.stopListening(Ca(d),p)}))}Tz(t,u)}return a}function wz(t,e,n,r){const i=Nv(t,r);if(i!=null){const s=Rv(i),o=s.path,a=s.queryId,l=Bt(o,e),u=new Yi(Tv(a),l,n);return Av(t,o,u)}else return[]}function Ez(t,e,n,r){const i=Nv(t,r);if(i){const s=Rv(i),o=s.path,a=s.queryId,l=Bt(o,e),u=be.fromObject(n),c=new cl(Tv(a),l,u);return Av(t,o,c)}else return[]}function _E(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const g=Bt(d,i);s=s||Ks(p,g),o=o||si(p)});let a=t.syncPointTree_.get(i);a?(o=o||si(a),s=s||Ks(a,ge())):(a=new oz,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const _=Ks(g,ge());_&&(s=s.updateImmediateChild(p,_))}));const u=$b(a,e);if(!u&&!e._queryParams.loadsAllData()){const d=gd(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=Sz();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const c=Sv(t.pendingWriteTree_,i);let h=hz(a,e,n,c,s,l);if(!u&&!o&&!r){const d=Lb(a,e);h=h.concat(Iz(t,e,d))}return h}function Fb(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Bt(o,e),u=Ks(a,l);if(u)return u});return Nb(i,e,s,n,!0)}function ql(t,e){return Ub(e,t.syncPointTree_,null,Sv(t.pendingWriteTree_,ge()))}function Ub(t,e,n,r){if(le(t.path))return jb(t,e,n,r);{const i=e.get(ge());n==null&&i!=null&&(n=Ks(i,ge()));let s=[];const o=ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Rb(r,o);s=s.concat(Ub(a,l,u,c))}return i&&(s=s.concat(xv(i,t,r,n))),s}}function jb(t,e,n,r){const i=e.get(ge());n==null&&i!=null&&(n=Ks(i,ge()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Rb(r,o),c=t.operationForChild(o);c&&(s=s.concat(jb(c,a,l,u)))}),i&&(s=s.concat(xv(i,t,r,n))),s}function Vb(t,e){const n=e.query,r=ih(t,n);return{hashFn:()=>(nz(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?_z(t,n._path,r):vz(t,n._path);{const s=vV(i,n);return bm(t,n,null,s)}}}}function ih(t,e){const n=gd(e);return t.queryToTagMap.get(n)}function gd(t){return t._path.toString()+"$"+t._queryIdentifier}function Nv(t,e){return t.tagToQueryMap.get(e)}function Rv(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function Av(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const i=Sv(t.pendingWriteTree_,e);return xv(r,n,i,null)}function Cz(t){return t.fold((e,n,r)=>{if(n&&si(n))return[pd(n)];{let i=[];return n&&(i=Mb(n)),Gt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ca(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pz())(t._repo,t._path):t}function Tz(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=gd(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Sz(){return mz++}function Iz(t,e,n){const r=e._path,i=ih(t,e),s=Vb(t,n),o=t.listenProvider_.startListening(Ca(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)P(!si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!le(u)&&c&&si(c))return[pd(c).query];{let d=[];return c&&(d=d.concat(Mb(c).map(p=>p.query))),Gt(h,(p,g)=>{d=d.concat(g)}),d}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ca(c),ih(t,c))}}return o}/**
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
 */class Pv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Pv(n)}node(){return this.node_}}class Ov{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Qe(this.path_,e);return new Ov(this.syncTree_,n)}node(){return Fb(this.syncTree_,this.path_)}}const kz=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wE=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bz(t[".sv"],e,n);if(typeof t[".sv"]=="object")return xz(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bz=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},xz=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Nz=function(t,e,n,r){return Dv(e,new Ov(n,t),r)},Rz=function(t,e,n){return Dv(t,new Pv(e),n)};function Dv(t,e,n){const r=t.getPriority().val(),i=wE(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=wE(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new tt(a,Ct(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new tt(i))),o.forEachChild($e,(a,l)=>{const u=Dv(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Mv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Lv(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,i=ae(n);for(;i!==null;){const s=eo(r.node.children,i)||{children:{},childCount:0};r=new Mv(i,r,s),n=Ce(n),i=ae(n)}return r}function No(t){return t.node.value}function Bb(t,e){t.node.value=e,xm(t)}function zb(t){return t.node.childCount>0}function Az(t){return No(t)===void 0&&!zb(t)}function yd(t,e){Gt(t.node.children,(n,r)=>{e(new Mv(n,t,r))})}function Hb(t,e,n,r){n&&!r&&e(t),yd(t,i=>{Hb(i,e,!0,r)}),n&&r&&e(t)}function Pz(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Gl(t){return new Ee(t.parent===null?t.name:Gl(t.parent)+"/"+t.name)}function xm(t){t.parent!==null&&Oz(t.parent,t.name,t)}function Oz(t,e,n){const r=Az(n),i=wr(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,xm(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xm(t))}/**
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
 */const Dz=/[\[\].#$\/\u0000-\u001F\u007F]/,Mz=/[\[\].#$\u0000-\u001F\u007F]/,kf=10*1024*1024,Wb=function(t){return typeof t=="string"&&t.length!==0&&!Dz.test(t)},Kb=function(t){return typeof t=="string"&&t.length!==0&&!Mz.test(t)},Lz=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Kb(t)},qb=function(t,e,n){const r=n instanceof Ee?new JV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+_i(r));if(typeof e=="function")throw new Error(t+"contains a function "+_i(r)+" with contents = "+e.toString());if(Gk(e))throw new Error(t+"contains "+e.toString()+" "+_i(r));if(typeof e=="string"&&e.length>kf/3&&xh(e)>kf)throw new Error(t+"contains a string greater than "+kf+" utf8 bytes "+_i(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Gt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Wb(o)))throw new Error(t+" contains an invalid key ("+o+") "+_i(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZV(r,o),qb(t,a,r),eB(r)}),i&&s)throw new Error(t+' contains ".value" child '+_i(r)+" in addition to actual children.")}},Gb=function(t,e,n,r){if(!(r&&n===void 0)&&!Kb(n))throw new Error(mS(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$z=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Gb(t,e,n,r)},Fz=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Lz(n))throw new Error(mS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Uz{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qb(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Yb(t,e,n){Qb(t,n),Xb(t,r=>yv(r,e))}function cs(t,e,n){Qb(t,n),Xb(t,r=>bn(r,e)||bn(e,r))}function Xb(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(jz(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function jz(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Li&&Et("event: "+n.toString()),Wl(r)}}}/**
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
 */const Vz="repo_interrupt",Bz=25;class zz{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Uz,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xc(),this.transactionQueueTree_=new Mv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hz(t,e,n){if(t.stats_=mv(t.repoInfo_),t.forceRestClient_||CV())t.server_=new Yc(t.repoInfo_,(r,i,s,o)=>{EE(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>CE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ar(t.repoInfo_,e,(r,i,s,o)=>{EE(t,r,i,s,o)},r=>{CE(t,r)},r=>{Kz(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=xV(t.repoInfo_,()=>new kB(t.stats_,t.server_)),t.infoData_=new EB,t.infoSyncTree_=new vE({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=md(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$v(t,"connected",!1),t.serverSyncTree_=new vE({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);cs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Wz(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jb(t){return kz({timestamp:Wz(t)})}function EE(t,e,n,r,i){t.dataUpdateCount++;const s=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Cc(n,u=>Ct(u));o=Ez(t.serverSyncTree_,s,l,i)}else{const l=Ct(n);o=wz(t.serverSyncTree_,s,l,i)}else if(r){const l=Cc(n,u=>Ct(u));o=yz(t.serverSyncTree_,s,l)}else{const l=Ct(n);o=md(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Uv(t,s)),cs(t.eventQueue_,a,o)}function CE(t,e){$v(t,"connected",e),e===!1&&Gz(t)}function Kz(t,e){Gt(e,(n,r)=>{$v(t,n,r)})}function $v(t,e,n){const r=new Ee("/.info/"+e),i=Ct(n);t.infoData_.updateSnapshot(r,i);const s=md(t.infoSyncTree_,r,i);cs(t.eventQueue_,r,s)}function qz(t){return t.nextWriteId_++}function Gz(t){Zb(t,"onDisconnectEvents");const e=Jb(t),n=Xc();Em(t.onDisconnect_,ge(),(i,s)=>{const o=Nz(i,s,t.serverSyncTree_,e);Sb(n,i,o)});let r=[];Em(n,ge(),(i,s)=>{r=r.concat(md(t.serverSyncTree_,i,s));const o=Zz(t,i);Uv(t,o)}),t.onDisconnect_=Xc(),cs(t.eventQueue_,ge(),r)}function Qz(t,e,n){let r;ae(e._path)===".info"?r=_E(t.infoSyncTree_,e,n):r=_E(t.serverSyncTree_,e,n),Yb(t.eventQueue_,e._path,r)}function TE(t,e,n){let r;ae(e._path)===".info"?r=bm(t.infoSyncTree_,e,n):r=bm(t.serverSyncTree_,e,n),Yb(t.eventQueue_,e._path,r)}function Yz(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Vz)}function Zb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Et(n,...e)}function ex(t,e,n){return Fb(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Fv(t,e=t.transactionQueueTree_){if(e||vd(t,e),No(e)){const n=nx(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Xz(t,Gl(e),n)}else zb(e)&&yd(e,n=>{Fv(t,n)})}function Xz(t,e,n){const r=n.map(u=>u.currentWriteId),i=ex(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];P(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Bt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Zb(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(Os(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();vd(t,Lv(t.transactionQueueTree_,e)),Fv(t,t.transactionQueueTree_),cs(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Wl(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{tn("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Uv(t,e)}},o)}function Uv(t,e){const n=tx(t,e),r=Gl(n),i=nx(t,n);return Jz(t,i,r),r}function Jz(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Bt(n,l.path);let c=!1,h;if(P(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(Os(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Bz)c=!0,h="maxretry",i=i.concat(Os(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ex(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){qb("transaction failed: Data returned ",p,l.path);let g=Ct(p);typeof p=="object"&&p!=null&&wr(p,".priority")||(g=g.updatePriority(d.getPriority()));const E=l.currentWriteId,m=Jb(t),y=Rz(g,d,m);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=y,l.currentWriteId=qz(t),o.splice(o.indexOf(E),1),i=i.concat(gz(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),i=i.concat(Os(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(Os(t.serverSyncTree_,l.currentWriteId,!0))}cs(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}vd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Wl(r[a]);Fv(t,t.transactionQueueTree_)}function tx(t,e){let n,r=t.transactionQueueTree_;for(n=ae(e);n!==null&&No(r)===void 0;)r=Lv(r,n),e=Ce(e),n=ae(e);return r}function nx(t,e){const n=[];return rx(t,e,n),n.sort((r,i)=>r.order-i.order),n}function rx(t,e,n){const r=No(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yd(e,i=>{rx(t,i,n)})}function vd(t,e){const n=No(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Bb(e,n.length>0?n:void 0)}yd(e,r=>{vd(t,r)})}function Zz(t,e){const n=Gl(tx(t,e)),r=Lv(t.transactionQueueTree_,e);return Pz(r,i=>{bf(t,i)}),bf(t,r),Hb(r,i=>{bf(t,i)}),n}function bf(t,e){const n=No(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Os(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Bb(e,void 0):n.length=s+1,cs(t.eventQueue_,Gl(e),i);for(let o=0;o<r.length;o++)Wl(r[o])}}/**
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
 */function e3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function t3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):tn(`Invalid query segment '${n}' in query '${t}'`)}return e}const SE=function(t,e){const n=n3(t),r=n.namespace;n.domain==="firebase.com"&&Gi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fV();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new IV(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},n3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=e3(t.substring(c,h)));const d=t3(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class ix{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class sx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class jv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return le(this._path)?null:pb(this._path)}get ref(){return new Tr(this._repo,this._path)}get _queryIdentifier(){const e=aE(this._queryParams),n=fv(e);return n==="{}"?"default":n}get _queryObject(){return aE(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof jv))return!1;const n=this._repo===e._repo,r=yv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XV(this._path)}}class Tr extends jv{constructor(e,n){super(e,n,new Ev,!1)}get parent(){const e=gb(this._path);return e===null?null:new Tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=Nm(this.ref,e);return new hl(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new hl(i,Nm(this.ref,r),$e)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nm(t,e){return t=Fe(t),ae(t._path)===null?$z("child","path",e,!1):Gb("child","path",e,!1),new Tr(t._repo,Qe(t._path,e))}class Vv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ix("value",this,new hl(e.snapshotNode,new Tr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sx(this,e,n):null}matches(e){return e instanceof Vv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sx(this,e,n):null}createEvent(e,n){P(e.childName!=null,"Child events should have a childName.");const r=Nm(new Tr(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new ix(e.type,this,new hl(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ql(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{TE(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new r3(n,s||void 0),a=e==="value"?new Vv(o):new Bv(e,o);return Qz(t._repo,t,a),()=>TE(t._repo,t,a)}function i3(t,e,n,r){return Ql(t,"value",e,n,r)}function s3(t,e,n,r){return Ql(t,"child_added",e,n,r)}function o3(t,e,n,r){return Ql(t,"child_changed",e,n,r)}function a3(t,e,n,r){return Ql(t,"child_moved",e,n,r)}function l3(t,e,n,r){return Ql(t,"child_removed",e,n,r)}az(Tr);fz(Tr);/**
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
 */const u3="FIREBASE_DATABASE_EMULATOR_HOST",Rm={};let c3=!1;function h3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Et("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=SE(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[u3]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=SE(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new vm(vm.OWNER):new SV(t.name,t.options,e);Fz("Invalid Firebase Database URL",o),le(o.path)||Gi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=f3(a,t,c,new TV(t.name,n));return new p3(h,t)}function d3(t,e){const n=Rm[e];(!n||n[t.key]!==t)&&Gi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Yz(t),delete n[t.key]}function f3(t,e,n,r){let i=Rm[e.name];i||(i={},Rm[e.name]=i);let s=i[t.toURLString()];return s&&Gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new zz(t,c3,n,r),i[t.toURLString()]=s,s}class p3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hz(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tr(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(d3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gi("Cannot call "+e+" on a deleted database.")}}/**
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
 */function m3(t){lV(ui),yn(new rn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return h3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),We(H0,W0,t),We(H0,W0,"esm2017")}ar.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ar.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};m3();/**
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
 */const IE="us-central1";class v3{constructor(e,n,r,i,s=IE,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new y3(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=IE}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}const kE="@firebase/functions",bE="0.8.6";/**
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
 */const _3="auth-internal",w3="app-check-internal",E3="messaging-internal";function C3(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(_3),a=r.getProvider(E3),l=r.getProvider(w3);return new v3(s,o,a,l,i,t)};yn(new rn(g3,n,"PUBLIC").setMultipleInstances(!0)),We(kE,bE,e),We(kE,bE,"esm2017")}C3(fetch.bind(self));/**
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
 */const ox="firebasestorage.googleapis.com",T3="storageBucket",S3=2*60*1e3,I3=10*60*1e3;/**
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
 */class qn extends vn{constructor(e,n,r=0){super(xf(e),`Firebase Storage: ${n} (${xf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function xf(t){return"storage/"+t}function k3(){const t="An unknown error occurred, please check the error payload for server response.";return new qn("unknown",t)}function b3(){return new qn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function x3(){return new qn("canceled","User canceled the upload/download.")}function N3(t){return new qn("invalid-url","Invalid URL '"+t+"'.")}function R3(t){return new qn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function xE(t){return new qn("invalid-argument",t)}function ax(){return new qn("app-deleted","The Firebase app was deleted.")}function A3(t){return new qn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw R3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},_=n===ox?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${E}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:p,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<v.length;T++){const S=v[T],x=S.regex.exec(e);if(x){const A=x[S.indices.bucket];let D=x[S.indices.path];D||(D=""),r=new Nn(A,D),S.postModify(r);break}}if(r==null)throw N3(e);return r}}class P3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function O3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function d(){s&&clearTimeout(s)}function p(E,...m){if(u){d();return}if(E){d(),c.call(null,E,...m);return}if(l()||o){d(),c.call(null,E,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,h(v)}let g=!1;function _(E){g||(g=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function D3(t){t(!1)}/**
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
 */function M3(t){return t!==void 0}function NE(t,e,n,r){if(r<e)throw xE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw xE(`Invalid value for '${t}'. Expected ${n} or less.`)}function L3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var sh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(sh||(sh={}));/**
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
 */class F3{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Iu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===sh.NO_ERROR,l=s.getStatus();if((!a||$3(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===sh.ABORT;r(!1,new Iu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Iu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());M3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=k3();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ax():x3();o(l)}else{const l=b3();o(l)}};this.canceled_?n(!1,new Iu(!1,null,!0)):this.backoffId_=O3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&D3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Iu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function U3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function j3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function V3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function B3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function z3(t,e,n,r,i,s,o=!0){const a=L3(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return V3(u,e),U3(u,n),j3(u,s),B3(u,r),new F3(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */class oh{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new oh(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W3(this._location.path)}get storage(){return this._service}get parent(){const e=H3(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new oh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw A3(e)}}function RE(t,e){const n=e==null?void 0:e[T3];return n==null?null:Nn.makeFromBucketSpec(n,t)}class K3{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ox,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=S3,this._maxUploadRetryTime=I3,this._requests=new Set,i!=null?this._bucket=Nn.makeFromBucketSpec(i,this._host):this._bucket=RE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=RE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){NE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){NE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new oh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new P3(ax());{const o=z3(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const AE="@firebase/storage",PE="0.9.11";/**
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
 */const q3="storage";function G3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new K3(n,r,i,e,ui)}function Q3(){yn(new rn(q3,G3,"PUBLIC").setMultipleInstances(!0)),We(AE,PE,""),We(AE,PE,"esm2017")}Q3();const lx="@firebase/installations",zv="0.5.14";/**
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
 */const ux=1e4,cx=`w:${zv}`,hx="FIS_v2",Y3="https://firebaseinstallations.googleapis.com/v1",X3=60*60*1e3,J3="installations",Z3="Installations";/**
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
 */const eH={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Zi=new is(J3,Z3,eH);function dx(t){return t instanceof vn&&t.code.includes("request-failed")}/**
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
 */function fx({projectId:t}){return`${Y3}/projects/${t}/installations`}function px(t){return{token:t.token,requestStatus:2,expiresIn:nH(t.expiresIn),creationTime:Date.now()}}async function mx(t,e){const r=(await e.json()).error;return Zi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gx({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tH(t,{refreshToken:e}){const n=gx(t);return n.append("Authorization",rH(e)),n}async function yx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nH(t){return Number(t.replace("s","000"))}function rH(t){return`${hx} ${t}`}/**
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
 */async function iH({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=fx(t),i=gx(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:hx,appId:t.appId,sdkVersion:cx},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await yx(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:px(u.authToken)}}else throw await mx("Create Installation",l)}/**
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
 */function vx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const oH=/^[cdef][\w-]{21}$/,Am="";function aH(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lH(t);return oH.test(n)?n:Am}catch{return Am}}function lH(t){return sH(t).substr(0,22)}/**
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
 */function _d(t){return`${t.appName}!${t.appId}`}/**
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
 */const _x=new Map;function wx(t,e){const n=_d(t);Ex(n,e),uH(n,e)}function Ex(t,e){const n=_x.get(t);if(!!n)for(const r of n)r(e)}function uH(t,e){const n=cH();n&&n.postMessage({key:t,fid:e}),hH()}let Ni=null;function cH(){return!Ni&&"BroadcastChannel"in self&&(Ni=new BroadcastChannel("[Firebase] FID Change"),Ni.onmessage=t=>{Ex(t.data.key,t.data.fid)}),Ni}function hH(){_x.size===0&&Ni&&(Ni.close(),Ni=null)}/**
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
 */const dH="firebase-installations-database",fH=1,es="firebase-installations-store";let Nf=null;function Hv(){return Nf||(Nf=vS(dH,fH,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}})),Nf}async function ah(t,e){const n=_d(t),i=(await Hv()).transaction(es,"readwrite"),s=i.objectStore(es),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&wx(t,e.fid),e}async function Cx(t){const e=_d(t),r=(await Hv()).transaction(es,"readwrite");await r.objectStore(es).delete(e),await r.done}async function wd(t,e){const n=_d(t),i=(await Hv()).transaction(es,"readwrite"),s=i.objectStore(es),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&wx(t,a.fid),a}/**
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
 */async function Wv(t){let e;const n=await wd(t.appConfig,r=>{const i=pH(r),s=mH(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Am?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pH(t){const e=t||{fid:aH(),registrationStatus:0};return Tx(e)}function mH(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gH(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yH(t)}:{installationEntry:e}}async function gH(t,e){try{const n=await iH(t,e);return ah(t.appConfig,n)}catch(n){throw dx(n)&&n.customData.serverCode===409?await Cx(t.appConfig):await ah(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yH(t){let e=await OE(t.appConfig);for(;e.registrationStatus===1;)await vx(100),e=await OE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wv(t);return r||n}return e}function OE(t){return wd(t,e=>{if(!e)throw Zi.create("installation-not-found");return Tx(e)})}function Tx(t){return vH(t)?{fid:t.fid,registrationStatus:0}:t}function vH(t){return t.registrationStatus===1&&t.registrationTime+ux<Date.now()}/**
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
 */async function _H({appConfig:t,heartbeatServiceProvider:e},n){const r=wH(t,n),i=tH(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:cx,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await yx(()=>fetch(r,a));if(l.ok){const u=await l.json();return px(u)}else throw await mx("Generate Auth Token",l)}function wH(t,{fid:e}){return`${fx(t)}/${e}/authTokens:generate`}/**
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
 */async function Kv(t,e=!1){let n;const r=await wd(t.appConfig,s=>{if(!Sx(s))throw Zi.create("not-registered");const o=s.authToken;if(!e&&TH(o))return s;if(o.requestStatus===1)return n=EH(t,e),s;{if(!navigator.onLine)throw Zi.create("app-offline");const a=IH(s);return n=CH(t,a),a}});return n?await n:r.authToken}async function EH(t,e){let n=await DE(t.appConfig);for(;n.authToken.requestStatus===1;)await vx(100),n=await DE(t.appConfig);const r=n.authToken;return r.requestStatus===0?Kv(t,e):r}function DE(t){return wd(t,e=>{if(!Sx(e))throw Zi.create("not-registered");const n=e.authToken;return kH(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function CH(t,e){try{const n=await _H(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ah(t.appConfig,r),n}catch(n){if(dx(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ah(t.appConfig,r)}throw n}}function Sx(t){return t!==void 0&&t.registrationStatus===2}function TH(t){return t.requestStatus===2&&!SH(t)}function SH(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+X3}function IH(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function kH(t){return t.requestStatus===1&&t.requestTime+ux<Date.now()}/**
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
 */async function bH(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wv(e);return r?r.catch(console.error):Kv(e).catch(console.error),n.fid}/**
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
 */async function xH(t,e=!1){const n=t;return await NH(n),(await Kv(n,e)).token}async function NH(t){const{registrationPromise:e}=await Wv(t);e&&await e}/**
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
 */function RH(t){if(!t||!t.options)throw Rf("App Configuration");if(!t.name)throw Rf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rf(t){return Zi.create("missing-app-config-values",{valueName:t})}/**
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
 */const Ix="installations",AH="installations-internal",PH=t=>{const e=t.getProvider("app").getImmediate(),n=RH(e),r=wl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OH=t=>{const e=t.getProvider("app").getImmediate(),n=wl(e,Ix).getImmediate();return{getId:()=>bH(n),getToken:i=>xH(n,i)}};function DH(){yn(new rn(Ix,PH,"PUBLIC")),yn(new rn(AH,OH,"PRIVATE"))}DH();We(lx,zv);We(lx,zv,"esm2017");const Af="@firebase/remote-config",ME="0.3.13";/**
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
 */const LH={["registration-window"]:"Undefined window object. This SDK only supports usage in a browser environment.",["registration-project-id"]:"Undefined project identifier. Check Firebase app initialization.",["registration-api-key"]:"Undefined API key. Check Firebase app initialization.",["registration-app-id"]:"Undefined app identifier. Check Firebase app initialization.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",["fetch-client-network"]:"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-timeout"]:'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',["fetch-throttle"]:'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',["fetch-client-parse"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["indexed-db-unavailable"]:"Indexed DB is not supported by current browser"},Ut=new is("remoteconfig","Remote Config",LH);function $H(t){const e=Fe(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}/**
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
 */class jH{constructor(e,n,r,i,s,o){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=r,this.projectId=i,this.apiKey=s,this.appId=o}async fetch(e){var n,r,i;const[s,o]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),l=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,u={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},c={sdk_version:this.sdkVersion,app_instance_id:s,app_instance_id_token:o,app_id:this.appId,language_code:UH()},h={method:"POST",headers:u,body:JSON.stringify(c)},d=fetch(l,h),p=new Promise((v,T)=>{e.signal.addEventListener(()=>{const S=new Error("The operation was aborted.");S.name="AbortError",T(S)})});let g;try{await Promise.race([d,p]),g=await d}catch(v){let T="fetch-client-network";throw((n=v)===null||n===void 0?void 0:n.name)==="AbortError"&&(T="fetch-timeout"),Ut.create(T,{originalErrorMessage:(r=v)===null||r===void 0?void 0:r.message})}let _=g.status;const E=g.headers.get("ETag")||void 0;let m,y;if(g.status===200){let v;try{v=await g.json()}catch(T){throw Ut.create("fetch-client-parse",{originalErrorMessage:(i=T)===null||i===void 0?void 0:i.message})}m=v.entries,y=v.state}if(y==="INSTANCE_STATE_UNSPECIFIED"?_=500:y==="NO_CHANGE"?_=304:(y==="NO_TEMPLATE"||y==="EMPTY_CONFIG")&&(m={}),_!==304&&_!==200)throw Ut.create("fetch-status",{httpStatus:_});return{status:_,eTag:E,config:m}}}/**
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
 */function VH(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BH(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class zH{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:r}){await VH(e.signal,n);try{const i=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),i}catch(i){if(!BH(i))throw i;const s={throttleEndTimeMillis:Date.now()+bP(r),backoffCount:r+1};return await this.storage.setThrottleMetadata(s),this.attemptFetch(e,s)}}}/**
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
 */function qu(t,e){var n;const r=t.target.error||void 0;return Ut.create(e,{originalErrorMessage:r&&((n=r)===null||n===void 0?void 0:n.message)})}const wi="app_namespace_store",qH="firebase_remote_config",GH=1;function QH(){return new Promise((t,e)=>{var n;try{const r=indexedDB.open(qH,GH);r.onerror=i=>{e(qu(i,"storage-open"))},r.onsuccess=i=>{t(i.target.result)},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(wi,{keyPath:"compositeKey"})}}}catch(r){e(Ut.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}})}class YH{constructor(e,n,r,i=QH()){this.appId=e,this.appName=n,this.namespace=r,this.openDbPromise=i}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([wi],"readonly").objectStore(wi),l=this.createCompositeKey(e);try{const u=a.get(l);u.onerror=c=>{i(qu(c,"storage-get"))},u.onsuccess=c=>{const h=c.target.result;r(h?h.value:void 0)}}catch(u){i(Ut.create("storage-get",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}async set(e,n){const r=await this.openDbPromise;return new Promise((i,s)=>{var o;const l=r.transaction([wi],"readwrite").objectStore(wi),u=this.createCompositeKey(e);try{const c=l.put({compositeKey:u,value:n});c.onerror=h=>{s(qu(h,"storage-set"))},c.onsuccess=()=>{i()}}catch(c){s(Ut.create("storage-set",{originalErrorMessage:(o=c)===null||o===void 0?void 0:o.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((r,i)=>{var s;const a=n.transaction([wi],"readwrite").objectStore(wi),l=this.createCompositeKey(e);try{const u=a.delete(l);u.onerror=c=>{i(qu(c,"storage-delete"))},u.onsuccess=()=>{r()}}catch(u){i(Ut.create("storage-delete",{originalErrorMessage:(s=u)===null||s===void 0?void 0:s.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
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
 */function JH(){yn(new rn(MH,t,"PUBLIC").setMultipleInstances(!0)),We(Af,ME),We(Af,ME,"esm2017");function t(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw Ut.create("registration-window");if(!hS())throw Ut.create("indexed-db-unavailable");const{projectId:s,apiKey:o,appId:a}=r.options;if(!s)throw Ut.create("registration-project-id");if(!o)throw Ut.create("registration-api-key");if(!a)throw Ut.create("registration-app-id");n=n||"firebase";const l=new YH(a,r.name,n),u=new XH(l),c=new _l(Af);c.logLevel=fe.ERROR;const h=new jH(i,ui,n,s,o,a),d=new zH(h,l),p=new FH(d,l,u,c),g=new KH(r,p,u,l,c);return $H(g),g}}JH();var Pm=function(t,e){return Pm=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Pm(t,e)};function Sr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Pm(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Om(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function dl(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function fl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function lr(t){return typeof t=="function"}function qv(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Pf=qv(function(t){return function(e){t(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,r){return r+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function lh(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Yl=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,i,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Om(o),l=a.next();!l.done;l=a.next()){var u=l.value;u.remove(this)}}catch(_){e={error:_}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else o.remove(this);var c=this.initialTeardown;if(lr(c))try{c()}catch(_){s=_ instanceof Pf?_.errors:[_]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var d=Om(h),p=d.next();!p.done;p=d.next()){var g=p.value;try{LE(g)}catch(_){s=s!=null?s:[],_ instanceof Pf?s=fl(fl([],dl(s)),dl(_.errors)):s.push(_)}}}catch(_){r={error:_}}finally{try{p&&!p.done&&(i=d.return)&&i.call(d)}finally{if(r)throw r.error}}}if(s)throw new Pf(s)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)LE(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&lh(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&lh(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),kx=Yl.EMPTY;function bx(t){return t instanceof Yl||t&&"closed"in t&&lr(t.remove)&&lr(t.add)&&lr(t.unsubscribe)}function LE(t){lr(t)?t():t.unsubscribe()}var xx={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ZH={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,fl([t,e],dl(n)))},clearTimeout:function(t){return clearTimeout(t)},delegate:void 0};function e4(t){ZH.setTimeout(function(){throw t})}function $E(){}function Gu(t){t()}var Gv=function(t){Sr(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,bx(n)&&n.add(r)):r.destination=i4,r}return e.create=function(n,r,i){return new Dm(n,r,i)},e.prototype.next=function(n){this.isStopped||this._next(n)},e.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Yl),t4=Function.prototype.bind;function Of(t,e){return t4.call(t,e)}var n4=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){ku(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){ku(r)}else ku(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){ku(n)}},t}(),Dm=function(t){Sr(e,t);function e(n,r,i){var s=t.call(this)||this,o;if(lr(n)||!n)o={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:i!=null?i:void 0};else{var a;s&&xx.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return s.unsubscribe()},o={next:n.next&&Of(n.next,a),error:n.error&&Of(n.error,a),complete:n.complete&&Of(n.complete,a)}):o=n}return s.destination=new n4(o),s}return e}(Gv);function ku(t){e4(t)}function r4(t){throw t}var i4={closed:!0,next:$E,error:r4,complete:$E},s4=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function o4(t){return t}function a4(t){return t.length===0?o4:t.length===1?t[0]:function(e){return t.reduce(function(n,r){return r(n)},e)}}var Mm=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var i=this,s=u4(e)?e:new Dm(e,n,r);return Gu(function(){var o=i,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?i._subscribe(s):i._trySubscribe(s))}),s},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=FE(n),new n(function(i,s){var o=new Dm({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:i});r.subscribe(o)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[s4]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a4(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=FE(e),new e(function(r,i){var s;n.subscribe(function(o){return s=o},function(o){return i(o)},function(){return r(s)})})},t.create=function(e){return new t(e)},t}();function FE(t){var e;return(e=t!=null?t:xx.Promise)!==null&&e!==void 0?e:Promise}function l4(t){return t&&lr(t.next)&&lr(t.error)&&lr(t.complete)}function u4(t){return t&&t instanceof Gv||l4(t)&&bx(t)}(function(t){Sr(e,t);function e(n,r,i,s,o,a){var l=t.call(this,n)||this;return l.onFinalize=o,l.shouldUnsubscribe=a,l._next=r?function(u){try{r(u)}catch(c){n.error(c)}}:t.prototype._next,l._error=s?function(u){try{s(u)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=i?function(){try{i()}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Gv);var c4=qv(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Nx=function(t){Sr(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new UE(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new c4},e.prototype.next=function(n){var r=this;Gu(function(){var i,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var o=Om(r.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(n)}}catch(u){i={error:u}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}})},e.prototype.error=function(n){var r=this;Gu(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var i=r.observers;i.length;)i.shift().error(n)}})},e.prototype.complete=function(){var n=this;Gu(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,i=this,s=i.hasError,o=i.isStopped,a=i.observers;return s||o?kx:(this.currentObservers=null,a.push(n),new Yl(function(){r.currentObservers=null,lh(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,i=r.hasError,s=r.thrownError,o=r.isStopped;i?n.error(s):o&&n.complete()},e.prototype.asObservable=function(){var n=new Mm;return n.source=this,n},e.create=function(n,r){return new UE(n,r)},e}(Mm),UE=function(t){Sr(e,t);function e(n,r){var i=t.call(this)||this;return i.destination=n,i.source=r,i}return e.prototype.next=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.next)===null||i===void 0||i.call(r,n)},e.prototype.error=function(n){var r,i;(i=(r=this.destination)===null||r===void 0?void 0:r.error)===null||i===void 0||i.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,i;return(i=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&i!==void 0?i:kx},e}(Nx),Qv={now:function(){return(Qv.delegate||Date).now()},delegate:void 0};(function(t){Sr(e,t);function e(n,r,i){n===void 0&&(n=1/0),r===void 0&&(r=1/0),i===void 0&&(i=Qv);var s=t.call(this)||this;return s._bufferSize=n,s._windowTime=r,s._timestampProvider=i,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,n),s._windowTime=Math.max(1,r),s}return e.prototype.next=function(n){var r=this,i=r.isStopped,s=r._buffer,o=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;i||(s.push(n),!o&&s.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),i=this,s=i._infiniteTimeWindow,o=i._buffer,a=o.slice(),l=0;l<a.length&&!n.closed;l+=s?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,i=n._timestampProvider,s=n._buffer,o=n._infiniteTimeWindow,a=(o?1:2)*r;if(r<1/0&&a<s.length&&s.splice(0,s.length-a),!o){for(var l=i.now(),u=0,c=1;c<s.length&&s[c]<=l;c+=2)u=c;u&&s.splice(0,u+1)}},e})(Nx);var h4=function(t){Sr(e,t);function e(n,r){return t.call(this)||this}return e.prototype.schedule=function(n,r){return this},e}(Yl),Lm={setInterval:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=Lm.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,fl([t,e],dl(n))):setInterval.apply(void 0,fl([t,e],dl(n)))},clearInterval:function(t){return clearInterval(t)},delegate:void 0},d4=function(t){Sr(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.scheduler=n,i.work=r,i.pending=!1,i}return e.prototype.schedule=function(n,r){if(r===void 0&&(r=0),this.closed)return this;this.state=n;var i=this.id,s=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(s,i,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(s,this.id,r),this},e.prototype.requestAsyncId=function(n,r,i){return i===void 0&&(i=0),Lm.setInterval(n.flush.bind(n,this),i)},e.prototype.recycleAsyncId=function(n,r,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return r;Lm.clearInterval(r)},e.prototype.execute=function(n,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,r);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(n,r){var i=!1,s;try{this.work(n)}catch(o){i=!0,s=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s},e.prototype.unsubscribe=function(){if(!this.closed){var n=this,r=n.id,i=n.scheduler,s=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,lh(s,this),r!=null&&(this.id=this.recycleAsyncId(i,r,null)),this.delay=null,t.prototype.unsubscribe.call(this)}},e}(h4),jE=function(){function t(e,n){n===void 0&&(n=t.now),this.schedulerActionCtor=e,this.now=n}return t.prototype.schedule=function(e,n,r){return n===void 0&&(n=0),new this.schedulerActionCtor(this,e).schedule(r,n)},t.now=Qv.now,t}(),f4=function(t){Sr(e,t);function e(n,r){r===void 0&&(r=jE.now);var i=t.call(this,n,r)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return e.prototype.flush=function(n){var r=this.actions;if(this._active){r.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=r.shift());if(this._active=!1,i){for(;n=r.shift();)n.unsubscribe();throw i}},e}(jE);new f4(d4);new Mm(function(t){return t.complete()});qv(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});const p4="[DEFAULT]",m4=w.exports.createContext(void 0),g4=w.exports.createContext(!1),y4="4.2.2",v4=(t,e)=>t===e||[...Object.keys(t),...Object.keys(e)].every(n=>t[n]===e[n]);function _4(t){const{firebaseConfig:e,appName:n,suspense:r}=t,i=w.exports.useMemo(()=>{if(t.firebaseApp)return t.firebaseApp;const s=TO().find(o=>o.name===(n||p4));if(s){if(e&&v4(s.options,e))return s;throw new Error(`Does not match the options already provided to the ${n||"default"} firebase app instance, give this new instance a different appName.`)}else{if(!e)throw new Error("No firebaseConfig provided");const o=w.exports.version||"unknown";return We("react",o),We("reactfire",y4),Ug(e,n)}},[t.firebaseApp,e,n]);return w.exports.createElement(m4.Provider,{value:i},f(g4.Provider,{...Object.assign({value:r!=null?r:!1},t)}))}/**
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
 */var fi,Ei;(function(t){t.added="child_added",t.removed="child_removed",t.changed="child_changed",t.moved="child_moved",t.value="value"})(Ei||(Ei={}));Object.freeze((fi={},fi[Ei.added]=s3,fi[Ei.removed]=l3,fi[Ei.changed]=o3,fi[Ei.moved]=a3,fi[Ei.value]=i3,fi));const w4=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=w4);const E4=globalThis._reactFirePreloadedObservables||new Map;globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=E4);const C4=globalThis._reactFireFirestoreQueryCache||[];globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=C4);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);w.exports.createContext(void 0);const T4=()=>C("div",{id:"message",children:[f("h2",{children:"404"}),f("h1",{children:"Page Not Found"}),f("p",{children:"The specified file was not found on this website. Please check the URL for mistakes and try again."}),f("h3",{children:"Why am I seeing this?"}),C("p",{children:["This page was generated by the Firebase Command-Line Interface. To modify it, edit the ",f("code",{children:"404.html"})," file in your project's configured ",f("code",{children:"public"})," directory."]})]}),S4=()=>f(j,{children:f(_4,{firebaseConfig:ok,children:C(HU,{children:[f(oV,{}),C(qA,{children:[f(Gn,{path:"/",element:f(aV,{children:f(ij,{})})}),f(Gn,{path:"/gestion",element:f(Bo,{children:f(aj,{})})}),f(Gn,{path:"/datos-gestion",element:f(Bo,{children:f(M0,{})})}),f(Gn,{path:"/datos-gestion/:id",element:f(Bo,{children:f(M0,{})})}),f(Gn,{path:"/confirm",element:f(Bo,{children:f(oj,{})})}),f(Gn,{path:"/register",element:f(sj,{})}),f(Gn,{path:"/aplicacion",element:f(Bo,{children:f(hj,{})})}),f(Gn,{path:"*",element:f(T4,{})})]})]})})});Mf.createRoot(document.getElementById("root")).render(f(Un.StrictMode,{children:f(JA,{children:f(S4,{})})}));
