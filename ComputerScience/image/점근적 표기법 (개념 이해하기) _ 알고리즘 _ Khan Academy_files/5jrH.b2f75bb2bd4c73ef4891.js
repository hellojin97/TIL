(window.webpackJsonp=window.webpackJsonp||[]).push([["5jrH","3st3"],{VxSq:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.updateArticleProgress=void 0;var o=n(r("pVnL")),s=n(r("lTCR")),a=n(r("x+rD")),l=n(r("nSHN")),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}n.default=e,r&&r.set(e,n);return n}(r("4PhQ"));let i;function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}const d=(0,r("8r+/").gqlOp)((0,s.default)(i||(i=(e=>e)`
    mutation updateUserArticleProgress($input: UserArticleProgressInput!) {
        updateUserArticleProgress(articleProgressUpdate: $input) {
            actionResults {
                tutorialNodeProgress {
                    contentId
                    progress
                }
                notificationsAdded {
                    avatarParts
                    badges
                    continueUrl
                    readable
                    toast
                    urgent
                }
                userProfile {
                    countBrandNewNotifications
                    countVideosCompleted
                    points
                }
            }
            error {
                code
                debugMessage
            }
        }
    }
`)));t.updateArticleProgress=(e,t,r,n,o,s)=>{a.default.getGAReferrer().then((a=>p(e,t,r,n,o,s,a)))};const p=(e,t,r,n,s,a,i)=>{const c={input:(0,o.default)({articleId:r,conversionId:t.toUpperCase(),articleSlug:n},s?{topicId:s}:null,{platform:"WEB",occurredAt:new Date,gaReferrer:i},a)};e.mutate(d,{variables:c,module:"multithreaded"}).then((e=>{const t=e.data.updateUserArticleProgress;if(null!=t&&t.error)f(t.error.code);else if(null!=t&&t.actionResults)try{l.default.respondToGraphQLAction(t.actionResults)}catch(e){const t=e.code||500;f(t,e)}else u.default.error("UpdateUserArticleProgress came back with both a null error and no actionResults.",u.Errors.Internal)})).catch((e=>{u.default.log("Failed to update user article progress",e)}))},f=(e,t=null)=>{u.default.error("Failed to update user article progress. Error returned from GraphQL mutation",u.Errors.Internal,{cause:t,sentryData:{contexts:{extras:{errorCode:e}},fingerprint:["updateUserArticleProgress",e]}})}},nTsq:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),s=n(r("9/5/")),a=n(r("hKI/"));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}class u extends o.Component{componentDidMount(){null==this.props.children&&this.trackNode(window)}componentWillUnmount(){this.reset()}reset(){this.node.removeEventListener("scroll",this.boundHandler)}trackNode(e){null!=this.boundHandler&&this.reset();const{debounce:t,delayMs:r,onScroll:n}=this.props,o=t?s.default:a.default;this.boundHandler=o((t=>{const r=function(e,t){return e===window?window.pageYOffset:t instanceof HTMLElement?t.scrollTop:0}(e,t.target);n(r,t)}),r),this.node=e,this.node.addEventListener("scroll",this.boundHandler)}render(){return this.props.children?o.cloneElement(o.Children.only(this.props.children),{ref:e=>e&&this.trackNode(e)}):null}}u.defaultProps={debounce:!1,delayMs:250};var i=u;t.default=i},nX5L:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.computeArticleScrollParams=function(e,t,r,s=o){let a=(e+t)/r*100;a<0&&(a=0);a>100&&(a=100);const l=Math.ceil(a/n),{percentage:u}=s,i=Math.ceil(u/n);if(l!==i||100===a&&u<100||a<100&&100===u)return{percentage:a,scrolledAmount:e};return null};const n=100/6,o={percentage:0,scrolledAmount:0}}}]);
//# sourceMappingURL=../../sourcemaps/en/5jrH.b2f75bb2bd4c73ef4891.js.map