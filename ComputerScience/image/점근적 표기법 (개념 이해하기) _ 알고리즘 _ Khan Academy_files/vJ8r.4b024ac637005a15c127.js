(window.webpackJsonp=window.webpackJsonp||[]).push([["vJ8r"],{ChHZ:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=L(n("q1tI")),s=n("/MKj"),l=n("mR6N"),c=L(n("4PhQ")),u=n("MrPL"),d=n("Vxy9"),p=r(n("wa3X")),f=n("yhei"),m=r(n("Pwnf")),g=n("JasB"),h=r(n("gE8/")),b=n("JimW"),y=n("Pk2J"),v=r(n("HbaH")),w=r(n("Az/T")),C=r(n("P2Dy")),E=n("AE4M"),P=L(n("TqM9")),T=L(n("zbaY")),S=n("Tipd"),M=r(n("+9xx")),k=r(n("og3G")),O=n("i4Cj"),j=n("DDFQ"),x=r(n("cfQQ")),I=r(n("4Du/")),D=r(n("M+bw"));const q=["isTabSelected","trigger","numTabs","tabNum"];function A(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(A=function(e){return e?n:t})(e)}function L(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=A(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}class R extends a.Component{render(){const e=this.props,{isTabSelected:t,trigger:n,numTabs:r,tabNum:s}=e,c=(0,i.default)(e,q);return a.createElement("span",(0,o.default)({className:(0,l.css)(W.notAButton,W.tabTrigger,W.tabSpan,t?W.activeTab:W.inactiveTab),"data-test-id":"discussion-tab","data-tab-num":s,"data-num-tabs":r},c),a.createElement(d.LabelLarge,{tag:"h2"},n))}}R.defaultProps={isTabSelected:!1};const V=({children:e})=>a.createElement(b.View,{style:W.loginUpsell},a.createElement(b.View,{style:W.upsellText},a.createElement(d.HeadingSmall,{tag:"h2"},O.upsellStrings.heading)),a.createElement(b.View,{style:W.loginButtonContainer},e));class _ extends a.Component{constructor(e){super(e),this.state={showMistakesTab:!1},this.captureRef=(e,t)=>{"questions"===t?this.questionsTabNode=e:"comments"===t?this.commentsTabNode=e:this.mistakesTabNode=e},this.getTabNode=e=>"questions"===e?this.questionsTabNode:"comments"===e?this.commentsTabNode:this.mistakesTabNode,this.handleReportMistake=()=>{this.setState({showMistakesTab:!0}),this.props.onTabChanged("clarifications",this.props.gqlClient)},this.onTabChangedwithGql=e=>{this.props.onTabChanged(e,this.props.gqlClient)},this.renderInputFieldOrMessage=(e,t)=>{const{discussionContext:n,onPostSuccess:r,contentKind:i,hasUnansweredHelpRequests:s,focusOnTopLevelInput:l}=this.props,u=O.tabsStrings[t];if(!(0,E.userIsLoggedIn)())return this.renderLoginUpsell();const d=e&&(0,E.userMeetsCommunityRequirements)(e),p=(0,E.getUserUnverifiedEmail)(n);if(!d)return this.renderPointsUnverifiedEmailAccountAgeUpsell(p);if((0,E.userRestrictedPosting)(n))return null;if((0,E.userIsScratchpadAuthorViewingQuestionsTab)(t,i,n,e)){const{wantToAskQuestion:e,helpRequestsLink:t,questionsTabForQuestions:n}=O.userProjectsStrings;return`${e} ${t} ${n}`}return(0,E.userIsScratchpadAuthorViewingOpenHelpRequests)(t,i,n,e,s)?O.userProjectsStrings.cantPostHelpRequest:(0,E.userIsScratchpadAuthorViewingLoadingHelpRequests)(t,i,n,e,s)?a.createElement(f.CircularSpinner,{size:"medium",style:W.spinner}):(0,E.userNotScratchpadAuthorViewingHelpRequests)(t,i,n,e)?O.userProjectsStrings.authorHelpRequestsWillAppearHere:(0,E.showMainDiscussionInput)(t,i,n,e,s)?a.createElement(v.default,(0,o.default)({tab:u.key,onPostSuccess:r,onReportMistake:this.handleReportMistake,acceptingClarification:!1,autoFocus:l},this.props)):(c.default.error("Not showing input field, message, or spinner in discussion tab area. There must be an edge case we're missing here.",c.Errors.Internal),null)},this.getTabContent=e=>{const{discussionContext:t,contentKind:n,tab:r,acceptedClarificationPosts:o,topicSlug:i,clarificationsEnabled:s,profile:l,hasUnansweredHelpRequests:c}=this.props,u=!t.restrictPosting,d="Video"===n&&"clarifications"===r&&!!o.length,p=(0,E.getModifiedDiscussionContext)(l,t);return a.createElement(b.View,null,this.renderInputFieldOrMessage(l,e),u&&a.createElement(b.View,{style:[W.separator,W.topSeparator]}),d&&a.createElement(b.View,null,a.createElement(C.default,null),a.createElement(b.View,{style:W.separator})),a.createElement(w.default,{topicSlug:i,discussionContext:p,clarificationsEnabled:s,onContentPage:!0,hasUnansweredHelpRequests:null!=c&&c}),a.createElement(E.EnglishLink,{style:W.englishLink}))},this.createRenderers=e=>e.map((({key:t,trigger:n,content:r},i)=>({key:t,renderTab:(r,s)=>({tabHeader:a.createElement(R,(0,o.default)({numTabs:e.length,tabNum:i+1,ref:e=>this.captureRef(e,t),key:s.id,trigger:n,isTabSelected:r||!1},s),n),isTabDisabled:!1}),renderContent:()=>r}))),this.renderPointsUnverifiedEmailAccountAgeUpsell=e=>a.createElement(d.Body,{style:W.tabContent},a.createElement(V,null,a.createElement(b.View,null,a.createElement(d.Body,null,O.upsellStrings.notEnoughPointsUnverifiedEmailAccountAge),a.createElement(g.Strut,{size:h.default.medium_16}),e&&a.createElement(M.default,{email:e})))),this.renderLoginUpsell=()=>{let e=this.props.location.pathname;return-1===e.indexOf("?")?e+=`?${E.loggedInQueryName}=true`:e+=`&${E.loggedInQueryName}=true`,a.createElement(b.View,null,a.createElement(V,null,a.createElement(p.default,{style:W.loginButton,href:(0,S.getLoginURL)(e)},O.upsellStrings.buttonContent)))};this.createTabs().length&&(this.state={showMistakesTab:!1})}componentDidUpdate(e){const t=this.props.currentTabKey;t!==e.currentTabKey&&("clarifications"!==t||this.state.showMistakesTab||this.setState({showMistakesTab:!0}))}createTabs(){const{discussionContext:e}=this.props;return(0,u.keys)(O.tabsStrings).filter((t=>(this.state.showMistakesTab||"clarifications"!==t)&&(e.showProjectFeedback||"projecthelp"!==t))).map((e=>{const t=O.tabsStrings[e],n=a.createElement(d.Body,{style:W.tabContent},this.getTabContent(e));return{key:t.key,trigger:t.label,content:n}}))}render(){const e=this.createTabs();return e.length?a.createElement(b.UniqueIDProvider,{mockOnFirstRender:!0,scope:"discussionTabbedPanel"},(t=>a.createElement(b.View,{style:W.container},a.createElement(k.default,{tabs:this.createRenderers(e),selectedTabKey:this.props.currentTabKey,onTabChanged:this.onTabChangedwithGql,id:t.get("")},((e,t)=>[e(null,W.tabItemSpacing),a.createElement("div",{className:(0,l.css)(W.separator),key:"discussionTabsSeparator"}),t()]))))):null}}const W=l.StyleSheet.create({activeTab:(0,o.default)({color:m.default.blue},T.navbar.activeTab),inactiveTab:(0,o.default)({},T.navbar.inactiveTab),separator:(0,o.default)({},P.separator),topSeparator:{marginTop:50},container:(0,o.default)({position:"static"},P.discussionContainer),tabContent:{padding:"16px 0px",color:m.default.offBlack},tabTrigger:{zIndex:1,height:48,color:m.default.offBlack,boxShadow:"inset 0 -4px"},tabSpan:{display:"flex !important",alignItems:"center"},tabItemSpacing:{":not(:last-child)":{marginRight:24}},loginUpsell:{textAlign:"center",padding:"32px 0 22px 0"},upsellText:{marginBottom:18},loginButtonContainer:{flexDirection:"row",justifyContent:"center"},loginButton:{minWidth:138},notAButton:(0,o.default)({},P.notAButton),englishLink:{margin:"20px 0 0 20px"},spinner:{margin:"20px auto"}}),B={onPostSuccess:j.postSuccessAction,onTabChanged:j.changeTabAction};var N=(0,y.compose)(I.default,D.default,x.default,(0,s.connect)((e=>({currentTabKey:e.currentTab,hasUnansweredHelpRequests:e.hasUnansweredHelpRequests,focusOnTopLevelInput:e.focusOnTopLevelInput})),B))(_);t.default=N},MTqu:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n("q1tI")),i=n("mR6N"),a=f(n("4PhQ")),s=n("Vxy9"),l=n("JimW"),c=f(n("Pwnf")),u=r(n("Q8Wn")),d=f(n("8jAt"));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}class m extends o.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),a.default.error(e,a.Errors.Internal,{sentryData:{contexts:{extras:t}}})}render(){if(this.state.errorInfo){const{style:e}=this.props;return u.default.IS_DEV_SERVER?o.createElement(l.View,{style:[e,g.stackTraceContainer]},o.createElement(s.HeadingMedium,null,d.doNotTranslate("Something went wrong.")),o.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),this.state.errorInfo&&this.state.errorInfo.componentStack)):null}return this.props.children}}t.default=m;const g=i.StyleSheet.create({stackTraceContainer:{padding:20,border:`solid 1px ${c.default.red}`,borderRadius:4,backgroundColor:(0,c.fade)(c.default.red,.25)}})},P2Dy:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pVnL")),i=y(n("q1tI")),a=n("/MKj"),s=n("mR6N"),l=n("Pk2J"),c=r(n("wa3X")),u=n("Vxy9"),d=n("JimW"),p=r(n("PFZ4")),f=n("i4Cj"),m=y(n("TqM9")),g=r(n("M+bw")),h=n("DDFQ");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}class v extends i.Component{render(){const{acceptedClarificationPosts:e,isComplete:t,cursor:n,onNextPage:r,gqlClient:o}=this.props;return i.createElement(d.View,null,i.createElement(d.View,{style:m.listWrapper},i.createElement(u.LabelLarge,{style:m.clarificationsListHeader},f.miscStrings.clarificationListAccepted),i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:(0,s.css)(w.post)},i.createElement(p.default,{post:e})))))),n&&!t&&i.createElement(c.default,{onClick:()=>r(o)},f.miscStrings.showMore))}}const w=s.StyleSheet.create({post:(0,o.default)({},m.postWrapper)}),C={onNextPage:h.getNextPageAction};var E=(0,l.compose)(g.default,(0,a.connect)((e=>{const t=e.tabs.clarifications;return{acceptedClarificationPosts:e.acceptedClarificationPosts,cursor:t.cursor,isComplete:t.isComplete}}),C))(v);t.default=E},PFZ4:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DiscussionPostAcceptedClarification=void 0;var o=C(n("q1tI")),i=n("/MKj"),a=n("vwLt"),s=n("Vxy9"),l=n("mR6N"),c=n("JimW"),u=n("Pk2J"),d=r(n("qRmI")),p=r(n("mt3D")),f=n("IZy4"),m=n("i4Cj"),g=n("AE4M"),h=C(n("TqM9")),b=r(n("mCQM")),y=r(n("cfQQ")),v=n("DDFQ");function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}class E extends o.Component{constructor(...e){super(...e),this.renderPostHeader=()=>{const{post:e,profile:t}=this.props,{reporter:n,openTimestamp:r,closeTimestamp:i}=e,{nickname:a,kaid:l}=n||{},u=(0,f.getTimestampFromSeconds)(r),d=(0,f.getTimestampFromSeconds)(i),p=`${u.minutes}:${u.seconds}`,b=`${d.minutes}:${d.seconds}`,y=m.miscStrings.appearsAtTimestamp(p,b);return o.createElement(c.View,{style:h.postHeader},o.createElement(c.View,{style:h.nameAndDatetime},o.createElement(g.PostAuthorName,{name:a,kaid:l}),o.createElement(s.LabelMedium,{style:[h.datetime,P.videoTimestampLink]},o.createElement(f.VideoTimestampLink,{timestamp:p,minutes:u.minutes.toString(),seconds:u.seconds.toString(),children:y}))),this.renderModeratorActions(t,h.actionPickerMobile))}}renderModeratorActions(e,t){if(!e||!e.get("isModerator"))return null;const{onDeleteAcceptedClarificationPost:n,onStartEditingPost:r,post:i}=this.props,s=[o.createElement(a.ActionItem,{key:"edit",label:m.postStrings.edit,onClick:()=>r(i.id)}),o.createElement(a.ActionItem,{key:"delete",label:m.postStrings.delete,onClick:()=>n(i)})];return o.createElement(a.ActionMenu,{menuText:"more",alignment:"right",style:t},s)}render(){const{post:e,postBeingEditedKey:t,profile:n,onStopEditingPost:r}=this.props,{nickname:i,avatarSrc:a,kaid:l}=e.reporter||{},u=e.id===t;return o.createElement(c.View,{testId:"discussion-post"},!u&&o.createElement(c.View,{style:h.post},o.createElement(p.default,{username:i,avatarName:null,avatarSrc:a,kaid:l,enableProfilePreviewTooltip:!0}),o.createElement(c.View,{style:h.everythingButTheAvatar},this.renderPostHeader(),o.createElement(c.View,{style:h.contentContainer},o.createElement(s.Body,{style:h.content},o.createElement(c.View,null,e.text))),o.createElement(c.View,{style:h.postFooter},o.createElement(b.default,null),o.createElement(c.View,{style:h.tools},this.renderModeratorActions(n,h.actionPickerDesktop))))),u&&o.createElement(d.default,{post:e,editingOrAccepting:"editing",onCancel:r}))}}t.DiscussionPostAcceptedClarification=E;const P=l.StyleSheet.create({videoTimestampLink:{marginBottom:-2}}),T={onDeleteAcceptedClarificationPost:v.deleteAcceptedClarificationPost,onStartEditingPost:v.startEditingPostAction,onStopEditingPost:v.stopEditingPostAction};var S=(0,u.compose)(y.default,(0,i.connect)((e=>{const{postBeingEditedKey:t}=e;return{postBeingEditedKey:t}}),T))(E);t.default=S},UdSq:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("8OQS")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),a=n("mR6N"),s=n("WJtd"),l=r(n("rlH3")),c=r(n("MTqu")),u=n("t0zn");const d=["cachedPosts"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}class f extends i.Component{constructor(e){super(e),this.state={store:(0,u.createDiscussionStore)(this.props.cachedPosts)}}render(){const e=this.props,t=(0,o.default)(e,d);return i.createElement(s.Provider,{store:this.state.store},i.createElement(c.default,{style:m.errorBoundary},i.createElement(l.default,t)))}}t.default=f;const m=a.StyleSheet.create({errorBoundary:{maxWidth:688,margin:"auto"}})},oIKl:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pVnL")),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),a=n("Pk2J"),s=n("/MKj"),l=n("mR6N"),c=n("Vxy9"),u=n("JimW"),d=n("vwLt"),p=n("DDFQ"),f=n("TqM9"),m=n("i4Cj"),g=r(n("uEGL")),h=n("JasB"),b=r(n("M+bw"));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}const v=[{value:"top-voted",label:m.headerStrings.topVoted},{value:"recent",label:m.headerStrings.recent}];class w extends i.Component{constructor(...e){super(...e),this.handleFilterChanged=e=>{const{onSortByChanged:t,gqlClient:n}=this.props;t(e,n)}}render(){const{currentSort:e}=this.props;return i.createElement(u.View,{style:C.container},i.createElement(h.Spring,null),i.createElement(u.View,{style:C.filterContainer},i.createElement(c.LabelLarge,{tag:"label",htmlFor:"sortBy"},m.headerStrings.sortBy),i.createElement(d.SingleSelect,{onChange:this.handleFilterChanged,selectedValue:e,style:C.select,id:"sortBy"},v.map((e=>i.createElement(d.OptionItem,{value:e.value,key:e.value,label:e.label}))))))}}const C=l.StyleSheet.create({container:(0,o.default)({},f.discussionContainer,{flexDirection:"row",justifyContent:"space-between",paddingTop:6,paddingBottom:22,[g.default.xsOrSmaller]:{paddingLeft:8,flexDirection:"column"}}),countContainer:{[g.default.xsOrSmaller]:{paddingBottom:24}},filterContainer:{flexDirection:"row",alignItems:"center"},totalCount:{paddingTop:6},select:{minWidth:176,marginLeft:8,fontSize:14}}),E={onSortByChanged:p.changeSortByAction};var P=(0,a.compose)(b.default,(0,s.connect)((e=>({totalCount:e.tabs[e.currentTab].totalCount||0,currentSort:e.currentSort})),E))(w);t.default=P},rlH3:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pVnL")),i=P(n("q1tI")),a=r(n("i8i4")),s=n("/MKj"),l=n("mR6N"),c=n("Pk2J"),u=r(n("9/5/")),d=n("JimW"),p=P(n("ZpD3")),f=n("TqM9"),m=r(n("oIKl")),g=r(n("ChHZ")),h=n("AE4M"),b=P(n("6OHE")),y=n("8SBg"),v=r(n("cfQQ")),w=r(n("M+bw")),C=n("DDFQ");function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function P(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}class T extends i.Component{constructor(...e){super(...e),this._markedConversion=!1,this.handleInitializeContent=()=>{const{onInitializeContent:e,topicSlug:t,contentKind:n,contentId:r,discussionContext:o,youtubeId:i,gqlClient:a}=this.props;e(t,n,r,i,o&&o.expandFeedbackType,o&&o.qaExpandKey,a)},this.maybeLogConversion=()=>{if(!this.discussionRoot||this._markedConversion)return;this.discussionRoot.getBoundingClientRect().top<=window.innerHeight&&(p.markMinorConversions([{id:"content_discussions_view",extra:{contentKind:this.props.contentKind}}]),this._markedConversion=!0,document.removeEventListener("scroll",this._debouncedMaybeLogConversion))}}componentDidMount(){this.handleInitializeContent(),this._debouncedMaybeLogConversion=(0,u.default)(this.maybeLogConversion,500),document.addEventListener("scroll",this._debouncedMaybeLogConversion),this._debouncedMaybeLogConversion();const{discussionRoot:e}=this;if(e&&(0,h.userHasJustLoggedIn)(window.location)){const t=2*b.standardTransitionMs;setTimeout((()=>(0,y.scrollToElement)(e,t)),0)}}componentDidUpdate(e){this.props.contentId!==e.contentId&&this.handleInitializeContent()}componentWillUnmount(){this.props.onTabChanged("questions"),document.removeEventListener("scroll",this._debouncedMaybeLogConversion)}render(){const{profile:e,discussionContext:t,acceptedClarificationPosts:n,contentKind:r,tab:o,clarificationsEnabled:s,contentId:l,topicSlug:c}=this.props,u=(0,h.getModifiedDiscussionContext)(e,t);return i.createElement(d.View,{style:S.container,ref:e=>this.discussionRoot=a.default.findDOMNode(e),tabIndex:-1},i.createElement(m.default,null),i.createElement(g.default,{acceptedClarificationPosts:n,contentKind:r,discussionContext:u,tab:o,clarificationsEnabled:!!s,contentId:l,topicSlug:c}))}}T.defaultProps={discussionContext:{}};const S=l.StyleSheet.create({container:(0,o.default)({},f.discussionContainer,{paddingBottom:8})}),M={onInitializeContent:C.initializeContentAction,onTabChanged:C.changeTabAction};var k=(0,c.compose)(v.default,w.default,(0,s.connect)((e=>({tab:e.currentTab,acceptedClarificationPosts:e.acceptedClarificationPosts})),M))(T);t.default=k}}]);
//# sourceMappingURL=../../sourcemaps/en/vJ8r.4b024ac637005a15c127.js.map