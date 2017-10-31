!function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,n){"use strict";var t=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(t);(0,n(7).registerPromiseWorker)(function(e){switch(e.method){case"compile":return(0,o.default)(e.code,e.config);case"getBabelVersion":try{return Babel.version}catch(e){return null}case"loadScript":try{return importScripts(e.url),!0}catch(e){return!1}case"registerEnvPreset":try{return Babel.registerPreset("env",babelPresetEnvStandalone.default),!0}catch(e){return!1}}})},function(e,r,n){"use strict";function t(e,r){var n=r.envConfig,t=null,s=null,i=null,a=null;if(n&&n.isEnvPresetEnabled){var l={};n.browsers&&(l.browsers=n.browsers.split(",").map(function(e){return e.trim()}).filter(function(e){return e})),n.isElectronEnabled&&(l.electron=n.electron),n.isNodeEnabled&&(l.node=n.node);var u=null;r.debugEnvPreset&&(u=function(e){i=(0,o.getDebugInfoFromEnvResult)(e)});var c={onPresetBuild:u,targets:l,useBuiltIns:!r.evaluate&&r.useBuiltIns};r.presets.push(["env",c])}try{var d=Babel.transform(e,{babelrc:!1,filename:"repl",presets:r.presets,sourceMap:r.sourceMap});if(t=d.code,r.sourceMap)try{a=JSON.stringify(d.map)}catch(e){console.error("Source Map generation failed: "+e)}}catch(e){t=null,s=e.message,i=null,a=null}return{compiled:t,compileErrorMessage:s,envPresetDebugInfo:i,sourceMap:a}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var o=n(2)},function(e,r,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.getDebugInfoFromEnvResult=r.persistedStateToEnvConfig=r.configToState=r.configArrayToStateMap=r.persistedStateToBabelState=r.loadPersistedState=r.envConfigToTargetsString=void 0;var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s=n(3),i=n(4),a=t(i),l=n(5),u=t(l),c=(r.envConfigToTargetsString=function(e){var r=[];return e.isElectronEnabled&&e.electron&&r.push("Electron-"+e.electron),e.isNodeEnabled&&e.node&&r.push("Node-"+e.node),encodeURIComponent(r.join(","))},r.loadPersistedState=function(){var e=a.default.get("replState"),r=u.default.parseQuery(),n=o({},e,r);return{babili:!0===n.babili,browsers:n.browsers||"",build:n.build||"",builtIns:!0===n.builtIns,circleciRepo:n.circleciRepo||"",code:n.code||"",debug:!0===n.debug,evaluate:!0===n.evaluate,isEnvPresetTabExpanded:!0===n.isEnvPresetTabExpanded,isPresetsTabExpanded:!0===n.isPresetsTabExpanded,isSettingsTabExpanded:!1!==n.isSettingsTabExpanded,lineWrap:null==n.lineWrap||n.lineWrap,presets:n.hasOwnProperty("presets")?n.presets:null,showSidebar:!1!==n.showSidebar,targets:n.targets||"",version:n.version||""}},r.persistedStateToBabelState=function(e){return{build:e.build,circleciRepo:e.circleciRepo,didError:!1,isLoaded:!1,isLoading:!0,version:e.version}},r.configArrayToStateMap=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.reduce(function(e,n){return e[n.package||n.label]=c(n,!0===r[n.package||n.label]),e},{})},r.configToState=function(e){return{config:e,didError:!1,isEnabled:arguments.length>1&&void 0!==arguments[1]&&arguments[1],isLoaded:!0===e.isPreLoaded,isLoading:!1,plugin:null}});r.persistedStateToEnvConfig=function(e){var r=Array.isArray(e.presets)&&e.presets.indexOf("env")>0,n={browsers:e.browsers,electron:s.envPresetDefaults.electron.default,isEnvPresetEnabled:r,isElectronEnabled:!1,isNodeEnabled:!1,node:s.envPresetDefaults.node.default};return decodeURIComponent(e.targets).split(",").forEach(function(e){try{var r=e.split("-"),t=r[0].toLowerCase(),o=parseFloat(r[1]);if(t)switch(t){case"electron":n.electron=o,n.isElectronEnabled=!0;break;case"node":n.node=o,n.isNodeEnabled=!0;break;default:console.warn('Unknown env target "'+t+'" specified')}}catch(e){console.error("Error parsing env preset configuration",e)}}),n},r.getDebugInfoFromEnvResult=function(e){var r=[];e.modulePlugin&&r.push("Using modules transform:\n  "+e.modulePlugin);var n=Object.keys(e.targets);return n.length&&r.push("Using targets:\n"+n.map(function(r){return"• "+r+": "+e.targets[r]}).join("\n")),e.transformationsWithTargets.length&&r.push("Using plugins:\n"+e.transformationsWithTargets.map(function(e){return"• "+e.name}).join("\n")),e.polyfillsWithTargets&&e.polyfillsWithTargets.length&&r.push("Using polyfills:\n"+e.polyfillsWithTargets.map(function(e){return"• "+e.name}).join("\n")),r.join("\n\n")}},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={label:"Env Preset",package:"babel-preset-env-standalone",version:"0"},o={browsers:{placeholder:"> 2%, ie 11, safari > 9"},electron:{min:.3,default:1.5,step:.1},node:{min:.1,default:7.4,step:.1}},s={label:"Runtime Polyfill",package:"babel-polyfill",version:"6"},i=[{baseUrl:"https://unpkg.com",label:"Minify",package:"babili-standalone",version:"0"}],a=[{label:"es2015",isPreLoaded:!0},{label:"es2015-loose",isPreLoaded:!0},{label:"es2016",isPreLoaded:!0},{label:"es2017",isPreLoaded:!0},{label:"react",isPreLoaded:!0},{label:"stage-0",isPreLoaded:!0},{label:"stage-1",isPreLoaded:!0},{label:"stage-2",isPreLoaded:!0},{label:"stage-3",isPreLoaded:!0}];r.envPresetConfig=t,r.envPresetDefaults=o,r.pluginConfigs=i,r.presetPluginConfigs=a,r.runtimePolyfillConfig=s},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={get:function(e){try{return JSON.parse(window.localStorage.getItem(e))}catch(e){}},set:function(e,r){try{window.localStorage.setItem(e,JSON.stringify(r))}catch(e){}}};r.default=t},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(6),o=function(e){return e&&e.__esModule?e:{default:e}}(t),s=["babili","browsers","build","builtIns","code","debug","circleciRepo","evaluate","lineWrap","presets","targets","version"],i=function(e){return o.default.compressToBase64(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},a=function(e){return o.default.decompressFromBase64(e.replace(/-/g,"+").replace(/_/g,"/"))},l=function(e){return window.encodeURIComponent(e)},u=function(e){try{return window.decodeURIComponent(""+e)}catch(r){return e}},c=function(e,r,n){r.forEach(function(r){null!=e[r]&&(n[r]=e[r])})},d=function(){var e=document.location.hash.replace(/^#\?/,"").split("&").reduce(function(e,r){var n=r.split("="),t=decodeURIComponent(""+n[0]),o=decodeURIComponent(""+n[1]);return"true"!==o&&"false"!==o||(o="true"===o),e[t]=o,e},{}),r={};return c(e,s,r),null!=e.code_lz&&(r.code=a(e.code_lz||"")),r},p=function(e){var r=s.map(function(r){return null==e[r]?null:"code"===r?r+"_lz="+i(e.code):r+"="+l(e[r])}).filter(function(e){return e}).join("&");window.location.hash="?"+r};r.default={compress:i,decode:u,decompress:a,encode:l,parseQuery:d,updateQuery:p}},function(e,r,n){var t,o=function(){function e(e,r){if(!o[e]){o[e]={};for(var n=0;n<e.length;n++)o[e][e.charAt(n)]=n}return o[e][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={},s={compressToBase64:function(e){if(null==e)return"";var r=s._compress(e,6,function(e){return n.charAt(e)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:s._decompress(r.length,32,function(t){return e(n,r.charAt(t))})},compressToUTF16:function(e){return null==e?"":s._compress(e,15,function(e){return r(e+32)})+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:s._decompress(e.length,16384,function(r){return e.charCodeAt(r)-32})},compressToUint8Array:function(e){for(var r=s.compress(e),n=new Uint8Array(2*r.length),t=0,o=r.length;t<o;t++){var i=r.charCodeAt(t);n[2*t]=i>>>8,n[2*t+1]=i%256}return n},decompressFromUint8Array:function(e){if(null===e||void 0===e)return s.decompress(e);for(var n=new Array(e.length/2),t=0,o=n.length;t<o;t++)n[t]=256*e[2*t]+e[2*t+1];var i=[];return n.forEach(function(e){i.push(r(e))}),s.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":s._compress(e,6,function(e){return t.charAt(e)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),s._decompress(r.length,32,function(n){return e(t,r.charAt(n))}))},compress:function(e){return s._compress(e,16,function(e){return r(e)})},_compress:function(e,r,n){if(null==e)return"";var t,o,s,i={},a={},l="",u="",c="",d=2,p=3,f=2,g=[],v=0,h=0;for(s=0;s<e.length;s+=1)if(l=e.charAt(s),Object.prototype.hasOwnProperty.call(i,l)||(i[l]=p++,a[l]=!0),u=c+l,Object.prototype.hasOwnProperty.call(i,u))c=u;else{if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(t=0;t<f;t++)v<<=1,h==r-1?(h=0,g.push(n(v)),v=0):h++;for(o=c.charCodeAt(0),t=0;t<8;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1}else{for(o=1,t=0;t<f;t++)v=v<<1|o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o=0;for(o=c.charCodeAt(0),t=0;t<16;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1}d--,0==d&&(d=Math.pow(2,f),f++),delete a[c]}else for(o=i[c],t=0;t<f;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1;d--,0==d&&(d=Math.pow(2,f),f++),i[u]=p++,c=String(l)}if(""!==c){if(Object.prototype.hasOwnProperty.call(a,c)){if(c.charCodeAt(0)<256){for(t=0;t<f;t++)v<<=1,h==r-1?(h=0,g.push(n(v)),v=0):h++;for(o=c.charCodeAt(0),t=0;t<8;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1}else{for(o=1,t=0;t<f;t++)v=v<<1|o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o=0;for(o=c.charCodeAt(0),t=0;t<16;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1}d--,0==d&&(d=Math.pow(2,f),f++),delete a[c]}else for(o=i[c],t=0;t<f;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1;d--,0==d&&(d=Math.pow(2,f),f++)}for(o=2,t=0;t<f;t++)v=v<<1|1&o,h==r-1?(h=0,g.push(n(v)),v=0):h++,o>>=1;for(;;){if(v<<=1,h==r-1){g.push(n(v));break}h++}return g.join("")},decompress:function(e){return null==e?"":""==e?null:s._decompress(e.length,32768,function(r){return e.charCodeAt(r)})},_decompress:function(e,n,t){var o,s,i,a,l,u,c,d=[],p=4,f=4,g=3,v="",h=[],b={val:t(0),position:n,index:1};for(o=0;o<3;o+=1)d[o]=o;for(i=0,l=Math.pow(2,2),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=t(b.index++)),i|=(a>0?1:0)*u,u<<=1;switch(i){case 0:for(i=0,l=Math.pow(2,8),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=t(b.index++)),i|=(a>0?1:0)*u,u<<=1;c=r(i);break;case 1:for(i=0,l=Math.pow(2,16),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=t(b.index++)),i|=(a>0?1:0)*u,u<<=1;c=r(i);break;case 2:return""}for(d[3]=c,s=c,h.push(c);;){if(b.index>e)return"";for(i=0,l=Math.pow(2,g),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=t(b.index++)),i|=(a>0?1:0)*u,u<<=1;switch(c=i){case 0:for(i=0,l=Math.pow(2,8),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=t(b.index++)),i|=(a>0?1:0)*u,u<<=1;d[f++]=r(i),c=f-1,p--;break;case 1:for(i=0,l=Math.pow(2,16),u=1;u!=l;)a=b.val&b.position,b.position>>=1,0==b.position&&(b.position=n,b.val=t(b.index++)),i|=(a>0?1:0)*u,u<<=1;d[f++]=r(i),c=f-1,p--;break;case 2:return h.join("")}if(0==p&&(p=Math.pow(2,g),g++),d[c])v=d[c];else{if(c!==f)return null;v=s+s.charAt(0)}h.push(v),d[f++]=s+v.charAt(0),p--,s=v,0==p&&(p=Math.pow(2,g),g++)}}};return s}();void 0!==(t=function(){return o}.call(r,n,r,e))&&(e.exports=t)},function(e,r,n){"use strict";function t(e){self.addEventListener("message",function(r){var n=r.data;try{var t=e(n.message);self.postMessage({message:t,uid:n.uid})}catch(e){self.postMessage({error:e.message,uid:n.uid})}})}function o(e){var r={},n=0;return e.addEventListener("message",function(e){var n=e.data,t=n.uid,o=n.error,i=n.message,a=s(r[t],2),l=a[0],u=a[1];delete r[t],null==o?l(i):u(o)}),{postMessage:function(t){var o=++n;return new Promise(function(n,s){r[o]=[n,s],e.postMessage({message:t,uid:o})})}}}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function e(e,r){var n=[],t=!0,o=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){o=!0,s=e}finally{try{!t&&a.return&&a.return()}finally{if(o)throw s}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r.registerPromiseWorker=t,r.registerPromiseWorkerApi=o}]);