parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"nTb1":[function(require,module,exports) {
"use strict";function e(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(r){t(e,r,o[r])})}return e}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.onMessage=n,exports.register=a,exports.default=void 0;const r=navigator.userAgent.indexOf("Edge")>=0;function o(e){const t=new Blob([e],{type:"video/mp4"}),o=URL.createObjectURL(t);return new Promise((e,t)=>{const n=document.createElement("video");n.addEventListener(r?"ended":"loadeddata",()=>{(null==n.mozDecodedFrames||n.mozDecodedFrames>0)&&(null==n.webkitDecodedFrameCount||n.webkitDecodedFrameCount>0)?e(n):t(new Error("partial AV1 frame"))}),n.addEventListener("error",()=>{t(new Error("cannot decode AV1 frame"))}),n.muted=!0,n.src=o,r&&n.play()}).then(e=>{const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.videoWidth,t.height=e.videoHeight,r.drawImage(e,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,data:o.data.buffer}}).then(e=>(URL.revokeObjectURL(o),e),e=>{throw URL.revokeObjectURL(o),e})}function n(t){const r=t.data;r&&"avif-mov"===r.type&&o(r.data).then(t=>{navigator.serviceWorker.controller.postMessage(e({id:r.id,type:"avif-rgba"},t),[t.data])},e=>{navigator.serviceWorker.controller.postMessage({id:r.id,type:"avif-error",data:e.toString()})})}function a(e,t){if(!("serviceWorker"in navigator))throw new Error("Service Worker API is not supported");if("function"==typeof t&&(t={confirmUpdate:t}),t=Object.assign({confirmUpdate:()=>!0,onUpdate:()=>window.location.reload()},t),"string"==typeof e){const r=t.scope?{scope:t.scope}:void 0;e=navigator.serviceWorker.register(e,r)}e.then(e=>{let r=!1;function o(){r||(r=!0,t.onUpdate(e))}function a(){Promise.resolve(t.confirmUpdate(e)).then(t=>{t&&(navigator.serviceWorker.controller?e.waiting.postMessage({type:"avif-update"}):o())})}if(navigator.serviceWorker.addEventListener("controllerchange",o),navigator.serviceWorker.addEventListener("message",n),navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({type:"avif-ready"}),console.log("@@@ INSIDE REG | ACTIVE:",e.active,"WAITING:",e.waiting,"INSTALLING:",e.installing,"CONTROLLER:",navigator.serviceWorker.controller),e.waiting)return a();e.addEventListener("updatefound",function(){const t=navigator.serviceWorker.controller?"installed":"activated";e.installing.addEventListener("statechange",function(){this.state===t&&a()})})})}var i={onMessage:n,register:a};exports.default=i;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=r(require("../avif.js"));function r(e){return e&&e.__esModule?e:{default:e}}"serviceWorker"in navigator&&e.default.register(navigator.serviceWorker.register("avif-sw.js"));
},{"../avif.js":"nTb1","./../avif-sw.js":[["avif-sw.js","XP93"],"avif-sw.map","XP93"]}]},{},["Focm"], null)
//# sourceMappingURL=demo.63fc3464.map