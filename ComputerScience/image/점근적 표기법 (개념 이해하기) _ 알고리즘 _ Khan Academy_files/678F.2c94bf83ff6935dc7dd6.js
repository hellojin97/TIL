(window.webpackJsonp=window.webpackJsonp||[]).push([["678F"],{Dg7G:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}o.default=e,r&&r.set(e,o);return o}(r("q1tI")),n=r("mR6N"),i=r("6OHE");function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}class s extends o.Component{getClassFromProps(){const{colors:{color:e,hoveredColor:t},padding:r}=this.props;return n.StyleSheet.create({button:{color:e,padding:r,":hover":{color:t},":focus":{color:t}}}).button}render(){const{children:e,testId:t,id:r}=this.props;return o.createElement("button",{onClick:this.props.onClick,className:(0,n.css)(a.resetButton,this.getClassFromProps()),"data-test-id":t,id:r},e)}}t.default=s,s.defaultProps={padding:0,colors:{color:i.colors.gray76,hoveredColor:i.colors.gray68}};const a=n.StyleSheet.create({resetButton:{border:"none",background:"inherit",cursor:"pointer",lineHeight:0}})},x0Jh:function(e,t,r){"use strict";var o=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("pVnL")),i=a(r("q1tI")),l=a(r("8jAt"));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function a(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}class c extends i.Component{componentDidMount(){this.refs.g.setAttribute("stroke-linejoin","round")}render(){const{size:e,iconSize:t,color:r,description:o}=this.props,s={stroke:r,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",fill:"none",fillRule:"evenodd"},a=(e-t)/2,c=(e+t)/2,u=l._("닫기"),p=`${u} ${o}`;return i.createElement("svg",{width:e,height:e,viewBox:`0 0 ${e} ${e}`,role:"img","aria-label":p},i.createElement("title",null,u),i.createElement("desc",null,o),i.createElement("g",(0,n.default)({ref:"g"},s),i.createElement("path",{d:`M${c},${a} L${a},${c}`}),i.createElement("path",{d:`M${a},${a} L${c},${c}`})))}}c.defaultProps={color:"currentColor",description:l._("현재 모듈 닫기")};var u=c;t.default=u}}]);
//# sourceMappingURL=../../sourcemaps/en/678F.9edaf0be3bc996e82aac.js.map