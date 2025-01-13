(()=>{var e={8597:(e,t)=>{"use strict";var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/\\([\u000b\u0020-\u00ff])/g,i=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function a(e){this.parameters=Object.create(null),this.type=e}t.q=function(e){if(!e)throw new TypeError("argument string is required");var t="object"==typeof e?function(e){var t;if("function"==typeof e.getHeader?t=e.getHeader("content-type"):"object"==typeof e.headers&&(t=e.headers&&e.headers["content-type"]),"string"!=typeof t)throw new TypeError("content-type header is missing from object");return t}(e):e;if("string"!=typeof t)throw new TypeError("argument string is required to be a string");var o=t.indexOf(";"),s=-1!==o?t.slice(0,o).trim():t.trim();if(!i.test(s))throw new TypeError("invalid media type");var l=new a(s.toLowerCase());if(-1!==o){var c,u,p;for(r.lastIndex=o;u=r.exec(t);){if(u.index!==o)throw new TypeError("invalid parameter format");o+=u[0].length,c=u[1].toLowerCase(),34===(p=u[2]).charCodeAt(0)&&-1!==(p=p.slice(1,-1)).indexOf("\\")&&(p=p.replace(n,"$1")),l.parameters[c]=p}if(o!==t.length)throw new TypeError("invalid parameter format")}return l}},2694:(e,t,r)=>{"use strict";var n=r(6925);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},5556:(e,t,r)=>{e.exports=r(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.i18n,n=window.wp.blocks,i=window.wp.components,a=window.wp.blockEditor;var o=r(5556),s=r.n(o);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var p=r(8597),d=new Map,f=function(e){return e.cloneNode(!0)},h=function(){return"file:"===window.location.protocol},m=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&2===n.readyState){var t=n.getResponseHeader("Content-Type");if(!t)throw new Error("Content type not found");var i=(0,p.q)(t).type;if("image/svg+xml"!==i&&"text/plain"!==i)throw new Error("Invalid content type: ".concat(i))}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw new Error(h()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(!(200===n.status||h()&&0===n.status))throw new Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText);r(null,n)}}catch(e){if(n.abort(),!(e instanceof Error))throw e;r(e,n)}},n.open("GET",e),n.withCredentials=t,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},g={},v=function(e,t){g[e]=g[e]||[],g[e].push(t)},w=function(e,t,r){if(d.has(e)){var n=d.get(e);if(void 0===n)return void v(e,r);if(n instanceof SVGSVGElement)return void r(null,f(n))}d.set(e,void 0),v(e,r),m(e,t,(function(t,r){var n;t?d.set(e,t):(null===(n=r.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&d.set(e,r.responseXML.documentElement),function(e){for(var t=function(t,r){setTimeout((function(){if(Array.isArray(g[e])){var r=d.get(e),n=g[e][t];r instanceof SVGSVGElement&&n(null,f(r)),r instanceof Error&&n(r),t===g[e].length-1&&delete g[e]}}),0)},r=0,n=g[e].length;r<n;r++)t(r)}(e)}))},b=function(e,t,r){m(e,t,(function(e,t){var n;e?r(e):(null===(n=t.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&r(null,t.responseXML.documentElement)}))},y=0,E=[],S={},A="http://www.w3.org/1999/xlink",x=function(e,t,r,n,i,a,o){var s=e.getAttribute("data-src")||e.getAttribute("src");if(s){if(-1!==E.indexOf(e))return E.splice(E.indexOf(e),1),void(e=null);E.push(e),e.setAttribute("src",""),(n?w:b)(s,i,(function(n,i){if(!i)return E.splice(E.indexOf(e),1),e=null,void o(n);var l=e.getAttribute("id");l&&i.setAttribute("id",l);var c=e.getAttribute("title");c&&i.setAttribute("title",c);var p=e.getAttribute("width");p&&i.setAttribute("width",p);var d=e.getAttribute("height");d&&i.setAttribute("height",d);var f=Array.from(new Set(u(u(u([],(i.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();i.setAttribute("class",f);var h=e.getAttribute("style");h&&i.setAttribute("style",h),i.setAttribute("data-src",s);var m=[].filter.call(e.attributes,(function(e){return/^data-\w[\w-]*$/.test(e.name)}));if(Array.prototype.forEach.call(m,(function(e){e.name&&e.value&&i.setAttribute(e.name,e.value)})),r){var g,v,w,b,x,I={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(I).forEach((function(e){g=e,w=I[e];for(var t=function(e,t){var r;b=v[e].id,x=b+"-"+ ++y,Array.prototype.forEach.call(w,(function(e){for(var t=0,n=(r=i.querySelectorAll("["+e+'*="'+b+'"]')).length;t<n;t++){var a=r[t].getAttribute(e);a&&!a.match(new RegExp('url\\("?#'+b+'"?\\)'))||r[t].setAttribute(e,"url(#"+x+")")}}));for(var n=i.querySelectorAll("[*|href]"),a=[],o=0,s=n.length;o<s;o++){var l=n[o].getAttributeNS(A,"href");l&&l.toString()==="#"+v[e].id&&a.push(n[o])}for(var c=0,u=a.length;c<u;c++)a[c].setAttributeNS(A,"href","#"+x);v[e].id=x},r=0,n=(v=i.querySelectorAll(g+"[id]")).length;r<n;r++)t(r)}))}i.removeAttribute("xmlns:a");for(var _,R,C=i.querySelectorAll("script"),O=[],j=0,k=C.length;j<k;j++)(R=C[j].getAttribute("type"))&&"application/ecmascript"!==R&&"application/javascript"!==R&&"text/javascript"!==R||((_=C[j].innerText||C[j].textContent)&&O.push(_),i.removeChild(C[j]));if(O.length>0&&("always"===t||"once"===t&&!S[s])){for(var T=0,W=O.length;T<W;T++)new Function(O[T])(window);S[s]=!0}var q=i.querySelectorAll("style");if(Array.prototype.forEach.call(q,(function(e){e.textContent+=""})),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("xmlns:xlink",A),a(i),!e.parentNode)return E.splice(E.indexOf(e),1),e=null,void o(new Error("Parent node is null"));e.parentNode.replaceChild(i,e),E.splice(E.indexOf(e),1),e=null,o(null,i)}))}else o(new Error("Invalid data-src or src attribute"))},I=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],_="http://www.w3.org/2000/svg",R="http://www.w3.org/1999/xlink",C=function(t){var r,n;function i(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).initialState={hasError:!1,isLoading:!0},e.state=e.initialState,e._isMounted=!1,e.reactWrapper=void 0,e.nonReactWrapper=void 0,e.refCallback=function(t){e.reactWrapper=t},e}n=t,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,c(r,n);var a=i.prototype;return a.renderSVG=function(){var e,t=this;if(this.reactWrapper instanceof(e=this.reactWrapper,((null==e?void 0:e.ownerDocument)||document).defaultView||window).Node){var r,n,i=this.props,a=i.desc,o=i.evalScripts,s=i.httpRequestWithCredentials,l=i.renumerateIRIElements,c=i.src,u=i.title,p=i.useRequestCache,d=this.props.onError,f=this.props.beforeInjection,h=this.props.afterInjection,m=this.props.wrapper;"svg"===m?((r=document.createElementNS(_,m)).setAttribute("xmlns",_),r.setAttribute("xmlns:xlink",R),n=document.createElementNS(_,m)):(r=document.createElement(m),n=document.createElement(m)),r.appendChild(n),n.dataset.src=c,this.nonReactWrapper=this.reactWrapper.appendChild(r);var g=function(e){t.removeSVG(),t._isMounted?t.setState((function(){return{hasError:!0,isLoading:!1}}),(function(){d(e)})):d(e)};!function(e,t){var r=void 0===t?{}:t,n=r.afterAll,i=void 0===n?function(){}:n,a=r.afterEach,o=void 0===a?function(){}:a,s=r.beforeEach,l=void 0===s?function(){}:s,c=r.cacheRequests,u=void 0===c||c,p=r.evalScripts,d=void 0===p?"never":p,f=r.httpRequestWithCredentials,h=void 0!==f&&f,m=r.renumerateIRIElements,g=void 0===m||m;if(e&&"length"in e)for(var v=0,w=0,b=e.length;w<b;w++)x(e[w],d,g,u,h,l,(function(t,r){o(t,r),e&&"length"in e&&e.length===++v&&i(v)}));else e?x(e,d,g,u,h,l,(function(t,r){o(t,r),i(1),e=null})):i(0)}(n,{afterEach:function(e,r){e?g(e):t._isMounted&&t.setState((function(){return{isLoading:!1}}),(function(){try{h(r)}catch(e){g(e)}}))},beforeEach:function(e){if(e.setAttribute("role","img"),a){var t=e.querySelector(":scope > desc");t&&e.removeChild(t);var r=document.createElement("desc");r.innerHTML=a,e.prepend(r)}if(u){var n=e.querySelector(":scope > title");n&&e.removeChild(n);var i=document.createElement("title");i.innerHTML=u,e.prepend(i)}try{f(e)}catch(e){g(e)}},cacheRequests:p,evalScripts:o,httpRequestWithCredentials:s,renumerateIRIElements:l})}},a.removeSVG=function(){var e;null!=(e=this.nonReactWrapper)&&e.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},a.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},a.componentDidUpdate=function(e){var t=this;(function(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1})(l({},e),this.props)&&this.setState((function(){return t.initialState}),(function(){t.removeSVG(),t.renderSVG()}))},a.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},a.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.desc,t.evalScripts;var r=t.fallback;t.httpRequestWithCredentials;var n=t.loading;t.renumerateIRIElements,t.src,t.title,t.useRequestCache;var i=t.wrapper,a=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(t,I),o=i;return e.createElement(o,l({},a,{ref:this.refCallback},"svg"===i?{xmlns:_,xmlnsXlink:R}:{}),this.state.isLoading&&n&&e.createElement(n,null),this.state.hasError&&r&&e.createElement(r,null))},i}(e.Component);C.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"},C.propTypes={afterInjection:o.func,beforeInjection:o.func,desc:o.string,evalScripts:o.oneOf(["always","once","never"]),fallback:o.oneOfType([o.func,o.object,o.string]),httpRequestWithCredentials:o.bool,loading:o.oneOfType([o.func,o.object,o.string]),onError:o.func,renumerateIRIElements:o.bool,src:o.string.isRequired,title:o.string,useRequestCache:o.bool,wrapper:o.oneOf(["div","span","svg"])};const O=r=>{const{attributes:n,setAttributes:o}=r,{contentPostType:s,svgURL:l,type:c,imageID:u,imageSizes:p,alignment:d,imageWidth:f,imageHeight:h,dimensionWidth:m,dimensionHeight:g}=n,v=(0,a.useBlockProps)({className:" wp-block-safe-svg-svg-icon safe-svg-cover",style:{textAlign:d}}),{className:w,style:b,...y}=v;delete b.textAlign,y.style={textAlign:d};const E=w.replace(/has-[\w-]*-color|has-background/g,"").trim();y.className=E,b.width=`${m}px`,b.height=`${g}px`;const S=["image/svg+xml"],A=e=>{var t;if(!e.sizes&&!e.media_details?.sizes)return;e.media_details&&(e.sizes=e.media_details.sizes);const r=null!==(t=e.sizes.full.url)&&void 0!==t?t:e.sizes.full.source_url;o({imageSizes:{full:e.sizes.full,medium:e.sizes.medium,thumbnail:e.sizes.thumbnail},imageWidth:e.sizes.full.width,imageHeight:e.sizes.full.height,dimensionWidth:e.sizes.full.width,dimensionHeight:e.sizes.full.height,imageID:e.id,svgURL:r,type:"full"})};return(0,e.createElement)(e.Fragment,null,l&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(i.PanelBody,{title:(0,t.__)("Image settings","safe-svg")},(0,e.createElement)(a.__experimentalImageSizeControl,{width:m,height:g,imageWidth:f,imageHeight:h,imageSizeOptions:[{value:"full",label:"Full Size"},{value:"medium",label:"Medium"},{value:"thumbnail",label:"Thumbnail"}],slug:c,onChange:e=>{var t,r;e.width||e.height||(e.width=parseInt(p[c].width),e.height=parseInt(p[c].height)),o({dimensionWidth:null!==(t=e.width)&&void 0!==t?t:m,dimensionHeight:null!==(r=e.height)&&void 0!==r?r:g})},onChangeImage:e=>{var t;const r=null!==(t=p[e].url)&&void 0!==t?t:p[e].source_url;if(!r)return null;let n=parseInt(p[e].width),i=parseInt(p[e].height);"full"!==e&&(p[e].width>=p[e].height?i=p[e].height*p.full.height/p.full.width:n=p[e].width*p.full.width/p.full.height),o({svgURL:r,imageWidth:n,imageHeight:i,dimensionWidth:n,dimensionHeight:i,type:e})}}))),(0,e.createElement)(a.BlockControls,null,(0,e.createElement)(a.AlignmentToolbar,{value:d,onChange:e=>o({alignment:e})})),(0,e.createElement)(a.BlockControls,null,(0,e.createElement)(a.MediaReplaceFlow,{mediaId:u,mediaURL:l,allowedTypes:S,accept:S,onSelect:A,onError:e=>{console.log((0,t.__)(`Something went wrong, please try again. Message: ${e}`,"safe-svg"))}}))),!l&&(0,e.createElement)(a.MediaPlaceholder,{onSelect:A,allowedTypes:S,accept:S,value:u,labels:{title:(0,t.__)("Inline SVG","safe-svg"),instructions:(0,t.__)("Upload an SVG or pick one from your media library.","safe-svg")}}),l&&(0,e.createElement)("div",{...y},(0,e.createElement)("div",{style:b,className:"safe-svg-inside"},(0,e.createElement)(C,{src:l,beforeInjection:e=>{e.setAttribute("style",`width: ${m}px; height: ${g}px;`)}}))),s&&(0,e.createElement)(i.Placeholder,{label:(0,t.__)("SafeSvg","safe-svg")},(0,e.createElement)("p",null,(0,t.__)("Please select the SVG icon.","safe-svg"))))};O.propTypes={attributes:s().shape({svgURL:s().string,alignment:s().string,imageID:s().number,imageWidth:s().number,imageHeight:s().number,dimensionWidth:s().number,dimensionHeight:s().number,imageSizes:s().object}).isRequired,className:s().string,clientId:s().string,setAttributes:s().func.isRequired};const j=O,k=JSON.parse('{"UU":"safe-svg/svg-icon"}');(0,n.registerBlockType)(k.UU,{title:(0,t.__)("Inline SVG","safe-svg"),description:(0,t.__)("Display an SVG icon","safe-svg"),edit:j,save:()=>null,icon:{src:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800",height:"800",viewBox:"0 0 512 512"},(0,e.createElement)("path",{fill:"currentColor",fillRule:"evenodd",d:"M321.838 42.667H87.171v234.666h42.667v-192h174.293l81.707 81.707v110.293h42.667v-128L321.838 42.667ZM85.333 441.734l4.17-24.65c14.68 6.163 27.126 9.244 37.337 9.244 6.645 0 11.54-1.631 14.68-4.894 2.72-2.84 4.079-6.313 4.079-10.422 0-3.685-1.33-6.555-3.988-8.61-2.658-2.053-9.213-5.225-19.665-9.515-7.734-3.202-13.186-5.588-16.358-7.16-3.172-1.57-6.087-3.352-8.745-5.346-7.552-5.619-11.328-13.715-11.328-24.287 0-9.123 2.477-17.129 7.43-24.016 7.613-10.694 20.12-16.04 37.52-16.04 12.566 0 26.22 2.325 40.962 6.977l-5.8 23.563c-8.7-3.202-15.24-5.317-19.62-6.344-4.38-1.027-8.957-1.54-13.73-1.54-5.437 0-9.576 1.208-12.416 3.625-2.96 2.597-4.44 5.89-4.44 9.878 0 3.443 1.253 6.147 3.76 8.11 2.508 1.964 8.535 4.91 18.08 8.837 9.486 3.927 15.77 6.66 18.85 8.201a55.772 55.772 0 0 1 8.7 5.392c7.432 5.68 11.147 14.35 11.147 26.01 0 13.775-4.682 24.197-14.047 31.265-7.975 5.982-19.152 8.972-33.53 8.972-14.984 0-29.333-2.417-43.048-7.25Zm146.722 4.985L183.39 318.303h30.087l21.388 57.637c5.437 14.682 9.515 26.765 12.234 36.25 4.169-13.291 8.126-24.982 11.872-35.071l22.022-58.816h28.637l-48.665 128.416h-28.91ZM429.8 374.853v65.522c-7.37 2.477-12.567 4.108-15.588 4.894-9.364 2.477-19.424 3.715-30.178 3.715-21.146 0-37.247-5.317-48.303-15.95-12.264-11.72-18.397-28.063-18.397-49.028 0-24.106 7.613-42.292 22.838-54.556 11.056-8.942 25.979-13.413 44.769-13.413 16.07 0 31.024 2.93 44.859 8.79l-9.878 22.567c-6.525-3.263-12.235-5.544-17.128-6.843-4.894-1.299-10.271-1.948-16.132-1.948-14.016 0-24.347 4.561-30.993 13.684-5.619 7.734-8.428 17.914-8.428 30.54 0 15.165 4.229 26.584 12.687 34.257 6.767 6.163 15.165 9.244 25.194 9.244 5.86 0 11.419-.997 16.675-2.99v-25.829h-22.113v-22.656H429.8Z"}))}})})()})();