(window.webpackJsonp=window.webpackJsonp||[]).push([["6Zt2"],{"1TAv":function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LOADING_STATE_TEST_ID=void 0;var o=r(n("8OQS")),u=n("JimW"),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),d=r(n("3mJ1"));const c=["header","spinnerTestId"];function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}const s="content-renderer-loading-spinner";t.LOADING_STATE_TEST_ID=s;var l=function(e){const{header:t,spinnerTestId:n=s}=e,r=(0,o.default)(e,c);return i.createElement(u.View,r,i.createElement(t,null),i.createElement(d.default,{testId:n}))};t.default=l},"8KlG":function(e,t,n){"use strict";function r(e,t){const n=[];for(const r of t)n.push(`${r.innerText} is a topic covered by this link: ${r.href.replace("www.khanacademy.org",e)}`);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.findLinksInCourseOrUnitPage=async function(e){await(t="#topic-progress",new Promise((e=>{if(document.querySelector(t))return e(document.querySelector(t));const n=new MutationObserver((r=>{document.querySelector(t)&&(e(document.querySelector(t)),n.disconnect())}));document.body&&n.observe(document.body,{childList:!0,subtree:!0})})));var t;const n=document.querySelectorAll("#topic-progress a");return r(e,n)},t.findLinksInLessonPage=function(e){const t=document.querySelectorAll("[data-test-id='tutor-content-cell'] a");return r(e,t)}},L583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("q1tI"),o=n("slUR");var u=()=>(0,r.useContext)(o.GuideContext);t.default=u},UNGa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sharedStyles=void 0;const r=n("mR6N").StyleSheet.create({rendererContainer:{flexShrink:0,flexGrow:1,height:"unset"},rendererScrollContainer:{overflowY:"auto",flexGrow:1},horizontalPadding:{"@media (min-width: 768px)":{paddingLeft:48,paddingRight:48}}});t.sharedStyles=r},f0sE:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("V7qd"));var u=e=>{var t;const{state:n}=(0,o.default)(),{unitId:r}=e;return r&&null!=(t=n.unitById[r])?t:null};t.default=u},n7sV:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("q1tI"),u=r(n("f0sE"));var i=e=>{const t=(0,u.default)(e),{lessonId:n}=e;return(0,o.useMemo)((()=>{if(!n)return null;const e=null==t?void 0:t.children.find((e=>e.id===n&&"Lesson"===e.contentKind));return"Lesson"===(null==e?void 0:e.contentKind)?e:null}),[t,n])};t.default=i}}]);
//# sourceMappingURL=../../sourcemaps/en/6Zt2.137768ca58dc4f10b1f8.js.map