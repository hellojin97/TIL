(window.webpackJsonp=window.webpackJsonp||[]).push([["2Uus"],{"13QT":function(t,e,n){"use strict";var s=n("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.containsExerciseContentOnly=e.containsExerciseContent=e.addQueryParamsToRelativeUrl=e.ValidationError=e.DEFAULT_TIME=e.CSV_DATE_FORMAT=e.COMPLETION_STATES=e.ASSIGNMENT_TASK_TRACKING_START_DATE=void 0,e.defaultDueDate=g,e.emptyAssignment=function(){const t=(0,i.default)().toDate();return{id:void 0,key:void 0,studentList:void 0,isDraft:!0,assignmentStatus:d.AssignmentStatus.DRAFT,students:[],assignedDate:t,startDate:t,dueDate:g(),contentDescriptors:[],domainId:"",courseId:"",unitId:"",lessonId:""}},e.formatDate=function(t,e,n){const s={lastDay:o._("[어제]"),sameDay:o._("[오늘]"),nextDay:o._("[내일]"),lastWeek:n?"dddd":"MMM Do",nextWeek:n?"dddd":"MMM Do",sameElse:"MMM Do"},r=(0,i.default)(t).calendar(null,s);if(e)return r;const a=(0,i.default)(t).format("h:mm A");return`${r}, ${a}`},e.formatDateForCsv=void 0,e.getContent=P,e.getContentTitle=e.getContentPath=e.getContentLibraryUrl=void 0,e.getDate=function(t,e="MMMM D"){return(0,i.default)(t).format(e)},e.getDay=T,e.getDefaultCourseMasteryDueDate=function(){return A((0,i.default)().add(6,"months").toDate(),c)},e.getInitialAssignmentDueDate=void 0,e.getMinDate=M,e.getScore=void 0,e.getTime=m,e.getTotalStudentCount=function(t,e){return t.filter((t=>e.includes(t.descriptor))).reduce(((t,e)=>t+(e.countStudents||e.students&&e.students.length||e.studentKaidsAndNicknames&&e.studentKaidsAndNicknames.length||0)),0)},e.getUniqueCount=void 0,e.getValidDueDate=function(t,e){const n=M(t);if((0,i.default)(e).isSameOrBefore(n))return n.add(2,"day").endOf("day").toDate();return e},e.isAfterNow=function(t){return(0,i.default)(t).isAfter()},e.isBeforeNow=_,e.isExerciseContent=void 0,e.isPastDate=h,e.isStudentReportVisible=void 0,e.isToday=function(t){return t&&(0,i.default)(T(t)).isSame(new Date,"day")},e.isValidToDraft=p,e.isValidToPost=function(t,e){var n;if(!p(t,e))return!1;const s=t.students&&t.students.length,r=t.studentList,i=r&&(0===r.countStudents||0===(null==(n=r.studentKaidsAndNicknames)?void 0:n.length)),a=s||i;if(!(e&&e.length>1||a))return!1;if(!t.dueDate)return!1;return!0},e.isValidToUpdateAssignments=function(t,e,n,s=new Date,r=new Date){const a=n!==d.AssignmentStatus.ASSIGNED;if(a&&!t&&!e)return{isValid:!1};let o,u;a&&t&&h(t)&&(o=D.PAST_START_DATE);t&&e&&(0,i.default)(e).isSameOrBefore(t)&&(u=D.DUE_BEFORE_START);a&&t&&(0,i.default)(t).isSameOrAfter(s)&&(o=D.START_AFTER_DUE);e&&(0,i.default)(e).isSameOrBefore(r)&&(u=D.DUE_BEFORE_START);e&&e.getTime()<(new Date).getTime()&&(u=D.PAST_DUE_DATE);if(o||u)return{isValid:!1,startDateMessage:o,dueDateMessage:u};return{isValid:!0}},e.triggerUpdateAssignmentsNotification=e.triggerUpdateAssignmentNotification=e.triggerUpdateAssignmentErrorNotification=e.triggerDuplicateErrorToast=e.triggerCreateAssignmentNotification=e.mapAssignmentToModalItem=void 0,e.updateDay=function(t,e){const n=(0,i.default)(e).startOf("day");return(0,i.default)(`${n.format("DD/MM/YYYY")} ${m(t)}`,"DD/MM/YYYY h:mm a").toDate()},e.updateLocalStoreSettings=void 0,e.updateTime=A,e.validateDueDate=S,e.validateStartDate=E;var r=s(n("pVnL")),i=s(n("eIwi")),a=n("MrPL"),o=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=l(e);if(n&&n.has(t))return n.get(t);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var a=r?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(s,i,a):s[i]=t[i]}s.default=t,n&&n.set(t,s);return s}(n("8jAt")),u=n("MRvb"),d=n("o6RB");function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(l=function(t){return t?n:e})(t)}const c="11:59 PM";e.DEFAULT_TIME=c;e.ASSIGNMENT_TASK_TRACKING_START_DATE="2017-08-24T17:00:00.000Z";const f={UNSTARTED:"unstarted",IN_PROGRESS:"in_progress",COMPLETED:"completed",LATE:"late",MISSED:"missed"};e.COMPLETION_STATES=f;const D=Object.freeze({PAST_START_DATE:o._("지난 날짜입니다."),PAST_DUE_DATE:o._("지난 날짜입니다."),START_AFTER_DUE:o._("시작일은 종료일보다 이전이어야 합니다."),DUE_BEFORE_START:o._("종료 날짜는 반드시 시작 날짜 이후여야 합니다.")});function g(){return A((0,i.default)().add(1,"days").toDate(),c)}function T(t){return(0,i.default)(t).startOf("day").toDate()}function m(t){return(0,i.default)(t).format("h:mm A")}function A(t,e){const n=(0,i.default)(T(t)).format("DD/MM/YYYY");return(0,i.default)(`${n} ${e}`,"DD/MM/YYYY h:mm a").toDate()}function E(t){const{assignmentStatus:e,startDate:n}=t;return e!==d.AssignmentStatus.ASSIGNED&&h(n)?D.PAST_START_DATE:null}function S(t){const{dueDate:e,startDate:n}=t;return _(e)?D.PAST_DUE_DATE:(0,i.default)(e).isSameOrBefore(n)?D.DUE_BEFORE_START:null}function p(t,e){const n=e&&e.length>1,s=t.studentList&&t.studentList.id;return!(!n&&!s)&&(!E(t)&&!S(t))}function h(t){return(0,i.default)(t).isBefore((0,i.default)(),"day")}function _(t){return(0,i.default)(t).isBefore()}function M(t){return h(t)?(0,i.default)():(0,i.default)(t)}e.ValidationError=D;const U="MMM Do, h:mmA";e.CSV_DATE_FORMAT=U;e.formatDateForCsv=(t,e="MMM Do, h:mmA")=>(0,i.default)(t).format(e);e.isStudentReportVisible=t=>t===f.COMPLETED||t===f.LATE;e.getInitialAssignmentDueDate=t=>{const e=(0,i.default)(t);return e.isAfter((0,i.default)())?new Date(t):A((0,i.default)().add(1,"day"),e.format("h:mm a"))};e.updateLocalStoreSettings=(t,e,n)=>{const s=(0,r.default)({},t),i=e.get(n)||{},a=i.classDescriptors||[],o=1===a.length&&s.studentList&&s.studentList.descriptor===a[0];s.studentList&&!o&&(s.classDescriptors=[s.studentList.descriptor],delete s.studentList,delete i.studentIds),s.classDescriptors&&i.studentIds&&delete i.studentIds,s.students&&(s.studentIds=s.students.map((({kaid:t})=>t)),delete s.students),e.set(n,(0,r.default)({},i,s))};const C=(t,e)=>{const n=(0,u.parseUrl)(t);for(const t of e)n.searchParams.set(t.key,t.value);return(0,u.toRelativeUrl)(n.href)};function P(t){return t.contents&&t.contents.length?t.contents[0]:{title:o._("과제에 내용이 없습니다"),kind:"",duration:0,defaultUrlPath:"/",topicPaths:[]}}e.addQueryParamsToRelativeUrl=C;const y=(t,e,n)=>{if(!t||t.length<1||!e||e.length<1)return null;const s=t[v(t,n)].path;return s&&5===s.length&&s[4].id===e?{domainId:s[0].id,courseId:s[1].id,unitId:s[2].id,lessonId:s[3].id,lessonSlug:s[3].slug,specificUrlPath:N(s)}:null};e.getContentPath=y;const N=t=>{if(5!==t.length)return null;return"/"+[t[0].slug,t[1].slug,t[2].slug,t[3].slug,{Video:"v",Exercise:"e",Article:"a",Talkthrough:"pt",Challenge:"pc",Interactive:"pi",Project:"pp"}[t[4].kind],t[4].slug].join("/")},v=(t,e)=>{const n=t.findIndex((t=>t.path&&t.path.length>0&&t.path.map((t=>t.slug)).includes(e)));return-1!==n?n:0};e.mapAssignmentToModalItem=t=>{const e=P(t),n=y(e.topicPaths,e.id,t.subjectSlug||"");return(0,r.default)({},e,{nodeUrl:n?n.specificUrlPath:e.defaultUrlPath,topicId:n?n.lessonId:null,topicSlug:n?n.lessonSlug:null},n?{nodePath:n}:null)};e.getContentLibraryUrl=t=>{const e=P(t);let n=e.defaultUrlPath;return"TopicQuiz"!==e.kind&&"TopicUnitTest"!==e.kind||(n=C(n,[{key:"open",value:"1"}])),n};e.getScore=t=>{if(!t||!t.bestScore||"number"!=typeof t.bestScore.numAttempted)return null;const{bestScore:e}=t;return Math.round(e.numCorrect/e.numAttempted*100)};const R=t=>t&&t.contents&&t.contents[0]&&t.contents[0].title||"";e.getContentTitle=R;const I=t=>{const e=t.reduce(((t,e)=>(t[e]=!0,t)),{});return(0,a.keys)(e).length};e.getUniqueCount=I;e.triggerCreateAssignmentNotification=(t,e,s,r=1,i=1)=>{const a=I(t.map((t=>t.contents&&t.contents[0]&&t.contents[0].id||""))),o=I(t.map((t=>t.studentList&&t.studentList.id||""))),u=t[0]&&t[0].studentList,d=t[0]&&t[0].students.length,l=s||R(t[0]);Promise.all([n.e("1FEV"),n.e("62NE"),n.e("74Uz"),n.e("1KcS")]).then(n.t.bind(null,"KVoV",7)).then((({renderToast:t})=>{t({class_:["CreateAssignmentNotification"],createAction:e,successContentCount:a,successClassCount:o,requestedClassCount:r,requestedContentCount:i,studentList:u,contentTitle:l,studentCount:d})}))};e.triggerDuplicateErrorToast=()=>{Promise.all([n.e("1FEV"),n.e("62NE"),n.e("74Uz"),n.e("1KcS")]).then(n.t.bind(null,"KVoV",7)).then((({renderToast:t})=>{t({class_:["CreateAssignmentNotification"],isDuplicateError:!0})}))};e.triggerUpdateAssignmentNotification=t=>{const e=R(t),s=t.studentList&&t.studentList.name||"";Promise.all([n.e("1FEV"),n.e("62NE"),n.e("74Uz"),n.e("1KcS")]).then(n.t.bind(null,"KVoV",7)).then((({renderToast:t})=>{t({class_:["UpdateAssignmentNotification"],contentTitle:e,studentListName:s})}))};e.triggerUpdateAssignmentsNotification=(t,e="")=>{Promise.all([n.e("1FEV"),n.e("62NE"),n.e("74Uz"),n.e("1KcS")]).then(n.t.bind(null,"KVoV",7)).then((({renderToast:n})=>{n({class_:["UpdateAssignmentNotification"],contentTitle:t,studentListName:e})}))};e.triggerUpdateAssignmentErrorNotification=t=>{Promise.all([n.e("1FEV"),n.e("62NE"),n.e("74Uz"),n.e("1KcS")]).then(n.t.bind(null,"KVoV",7)).then((({renderToast:e})=>{e({class_:["UpdateAssignmentNotification"],contentTitle:t,isError:!0})}))};e.isExerciseContent=t=>{if(!t||0===t.length)return!1;for(const e of t)if(e.startsWith("Exercise"))return!0;return!1};e.containsExerciseContent=t=>{if(0===t.length)return!1;for(const e of t)if(e.includes("Exercise"))return!0;return!1};e.containsExerciseContentOnly=t=>{if(0===t.length)return!1;for(const e of t)if(!e.includes("Exercise"))return!1;return!0}},o6RB:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Filters=e.AssignmentStatus=void 0;const s=Object.freeze({ASSIGNED:"ASSIGNED",SCHEDULED:"SCHEDULED",DRAFT:"DRAFT"});e.AssignmentStatus=s;const r=Object.freeze({ASSIGNED:"active",SCHEDULED:"scheduled",DRAFT:"draft"});e.Filters=r}}]);
//# sourceMappingURL=../../sourcemaps/en/2Uus.0ab035d5170a1206074f.js.map