"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54789],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=d(r),m=n,c=y["".concat(p,".").concat(m)]||y[m]||u[m]||o;return r?a.createElement(c,i(i({ref:t},g),{},{components:r})):a.createElement(c,i({ref:t},g))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>p,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>y});r(96540);var a=r(15680);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"useLog",title:"useLog"},p=void 0,d={unversionedId:"api-reference/core/hooks/audit-log/useLog",id:"version-3.xx.xx/api-reference/core/hooks/audit-log/useLog",title:"useLog",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/audit-log/useLog.md",sourceDirName:"api-reference/core/hooks/audit-log",slug:"/api-reference/core/hooks/audit-log/useLog",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/audit-log/useLog.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1715173183,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"useLog",title:"useLog"},sidebar:"someSidebar",previous:{title:"useUpdatePassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword"},next:{title:"useLogList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLogList"}},g={},y=[{value:"Overview",id:"overview",level:2},{value:"<code>log</code>",id:"log",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"<code>rename</code>",id:"rename",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Return value",id:"return-value-1",level:3}],u=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var m;const c={toc:y},s="wrapper";function N(e){var{components:t}=e,r=i(e,["components"]);return(0,a.yg)(s,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},c,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)(u,{id:"overview",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you need to create or update an audit log, ",(0,a.yg)("strong",{parentName:"p"},"refine")," provides the ",(0,a.yg)("inlineCode",{parentName:"p"},"useLog")," hook for it. The hook returns two mutations called ",(0,a.yg)("inlineCode",{parentName:"p"},"log")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"rename"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@pankod/refine-core";\n\nconst { log, rename } = useLog();\n'))),(0,a.yg)("h2",{id:"log"},(0,a.yg)("inlineCode",{parentName:"h2"},"log")),(0,a.yg)(u,{id:"log",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"log")," is used to create an audit log event. The mutation uses ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method from ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider#create"},(0,a.yg)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@pankod/refine-core";\n\nconst { log } = useLog();\nconst { mutate } = log;\n\nmutate({\n    resource: "posts",\n    action: "create",\n    author: {\n        username: "admin",\n    },\n    data: {\n        id: 1,\n        title: "New post",\n    },\n    meta: {\n        id: 1,\n    },\n});\n')),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method is provided."))),(0,a.yg)("h3",{id:"properties"},"Properties"),(0,a.yg)(u,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{className:"required-block"},(0,a.yg)("div",null,"resource")," ",(0,a.yg)("div",{className:" required"},"Required"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("div",{className:"required-block"},(0,a.yg)("div",null,"action")," ",(0,a.yg)("div",{className:" required"},"Required"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"author"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"meta"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"data"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"previousData"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"Record<string, any>")))))),(0,a.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.yg)(u,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Desription"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,a.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,a.yg)("h3",{id:"return-value"},"Return value"),(0,a.yg)(u,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,a.yg)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"},"{ data: TData},"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"},"TError,"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"}," { id: BaseKey; name: string; },"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"}," unknown>"))))))),(0,a.yg)("h2",{id:"rename"},(0,a.yg)("inlineCode",{parentName:"h2"},"rename")),(0,a.yg)(u,{id:"rename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"log")," is used to update an audit log event. The mutation uses ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," method from ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider#update"},(0,a.yg)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@pankod/refine-core";\n\nconst { rename } = useLog();\nconst { mutate } = rename;\n\nmutate({\n    id: 1,\n    name: "Updated Name",\n});\n')),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,a.yg)("inlineCode",{parentName:"p"},"update")," method is provided."))),(0,a.yg)("h3",{id:"properties-1"},"Properties"),(0,a.yg)(u,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"id",(0,a.yg)("div",{className:" required"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"BaseKey"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name ",(0,a.yg)("div",{className:" required"},"Required")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string")))))),(0,a.yg)("h3",{id:"type-parameters-1"},"Type Parameters"),(0,a.yg)(u,{id:"type-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Desription"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,a.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,a.yg)("h3",{id:"return-value-1"},"Return value"),(0,a.yg)(u,{id:"return-value-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result of the ",(0,a.yg)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"},"{ data: TData},"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"},"TError,"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"}," { id: BaseKey; name: string; },"),(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"a"}," unknown>")))))),(0,a.yg)("br",null),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"You can get audit logs with ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLogList"},(0,a.yg)("inlineCode",{parentName:"a"},"useLogList")),"."))))}N.isMDXComponent=!0}}]);