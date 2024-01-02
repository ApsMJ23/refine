"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"useImport",title:"useImport",description:"useImport hook API references of @pankod/refine-core"},p=void 0,s={unversionedId:"api-reference/core/hooks/import-export/useImport",id:"version-3.xx.xx/api-reference/core/hooks/import-export/useImport",title:"useImport",description:"useImport hook API references of @pankod/refine-core",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/import-export/useImport.md",sourceDirName:"api-reference/core/hooks/import-export",slug:"/api-reference/core/hooks/import-export/useImport",permalink:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useImport",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/import-export/useImport.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1704202728,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{id:"useImport",title:"useImport",description:"useImport hook API references of @pankod/refine-core"},sidebar:"someSidebar",previous:{title:"useExport",permalink:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},next:{title:"useInvalidate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate"}},d={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>mapData</code>",id:"mapdata",level:3},{value:"<code>paparseOptions</code>",id:"paparseoptions",level:3},{value:"<code>batchSize</code>",id:"batchsize",level:3},{value:"<code>onFinish</code>",id:"onfinish",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>onProgress</code>",id:"onprogress",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>inputProps</code>",id:"inputprops",level:3},{value:"<code>type</code>",id:"type",level:4},{value:"<code>accept</code>",id:"accept",level:4},{value:"<code>onChange</code>",id:"onchange",level:4},{value:"<code>handleChange</code>",id:"handlechange",level:3},{value:"<code>isLoading</code>",id:"isloading",level:3},{value:"<code>mutationResult</code>",id:"mutationresult",level:3},{value:"FAQ",id:"faq",level:2},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("PropsTable"),k=c("CodeSandboxExample"),h={toc:u};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook allows you to import data from a ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," file. For each row in the file, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider according to your configuration."),(0,a.kt)("p",null,"Internally, it uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to parse the file contents."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Here is a basic usage example of ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useImport } from "@pankod/refine-core";\n\ninterface IPostFile {\n  title: string;\n  categoryId: string;\n}\n\nexport const PostList: React.FC = () => {\n  const { inputProps } = useImport<IPostFile>();\n\n  return <input {...inputProps} />;\n};\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"resourcename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: Read from the current route")),(0,a.kt)("p",null,"Determines which resource is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  resourceName: "posts",\n});\n')),(0,a.kt)("h3",{id:"mapdata"},(0,a.kt)("inlineCode",{parentName:"h3"},"mapData")),(0,a.kt)("p",null,"If you want to map the data before sending it to a data provider method, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  mapData: (data) => ({\n    ...data,\n    category: {\n      id: data.categoryId,\n    },\n  }),\n});\n")),(0,a.kt)("h3",{id:"paparseoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"paparseOptions")),(0,a.kt)("p",null,"You can pass any Papa Parse ",(0,a.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs#config"},"options")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"paparseOptions")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  paparseOptions: {\n    header: true,\n  },\n});\n")),(0,a.kt)("h3",{id:"batchsize"},(0,a.kt)("inlineCode",{parentName:"h3"},"batchSize")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},(0,a.kt)("inlineCode",{parentName:"a"},"Number.MAX_SAFE_INTEGER")))),(0,a.kt)("p",null,"If you want to send the data in batches, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," property. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," is 1, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method of your data provider for each row in the file. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," is greater than 1, it calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider for each batch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  batchSize: 1,\n});\n")),(0,a.kt)("h3",{id:"onfinish"},(0,a.kt)("inlineCode",{parentName:"h3"},"onFinish")),(0,a.kt)("p",null,"If you want to do something after the import is finished, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"onFinish")," property. It returns an object with two properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"succeeded")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"errored")," which contain the responses of the successful and failed requests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onFinish: (result) => {\n    // success requests response\n    result.succeeded.forEach((item) => {\n      console.log(item);\n    });\n\n    // failed requests response\n    result.errored.forEach((item) => {\n      console.log(item);\n    });\n  },\n});\n")),(0,a.kt)("h3",{id:"metadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"metaData")),(0,a.kt)("p",null,"If you want to send additional data to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"createMany")," method of your data provider, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  metaData: {\n    foo: "bar",\n  },\n});\n')),(0,a.kt)("h3",{id:"onprogress"},(0,a.kt)("inlineCode",{parentName:"h3"},"onProgress")),(0,a.kt)("p",null,"A callback function that is called when the import progress changes. It returns an object with two properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"totalAmount")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"processedAmount")," which contain the total amount of rows and the processed amount of rows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onProgress: ({ totalAmount, processedAmount }) => {\n    // progress percentage\n    console.log((processedAmount / totalAmount) * 100);\n  },\n});\n")),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useImport({\n  dataProviderName: "second-data-provider",\n});\n')),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("h3",{id:"inputprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"inputProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"inputProps")," is an object that contains the props of the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," element. You can spread it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { inputProps } = useImport();\n\nreturn <input {...inputProps} />;\n")),(0,a.kt)("h4",{id:"type"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")),(0,a.kt)("p",null,"It is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," by default."),(0,a.kt)("h4",{id:"accept"},(0,a.kt)("inlineCode",{parentName:"h4"},"accept")),(0,a.kt)("p",null,"It is set to ",(0,a.kt)("inlineCode",{parentName:"p"},".csv")," by default."),(0,a.kt)("h4",{id:"onchange"},(0,a.kt)("inlineCode",{parentName:"h4"},"onChange")),(0,a.kt)("p",null,"It handles the file change event. If the file exists, it will call the ","[",(0,a.kt)("inlineCode",{parentName:"p"},"handleChange"),"][#handlechange]"," method with the file as an argument."),(0,a.kt)("h3",{id:"handlechange"},(0,a.kt)("inlineCode",{parentName:"h3"},"handleChange")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handleChange")," is a function that handles the file change event. It accepts an object with a ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," property which is the file that is selected by the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { handleChange } = useImport();\n\nreturn (\n  <input\n    type="file"\n    onChange={(event) => {\n      if (event.target.files) {\n        handleChange({\n          file: event.target.files[0],\n        });\n      }\n    }}\n  />\n);\n')),(0,a.kt)("h3",{id:"isloading"},(0,a.kt)("inlineCode",{parentName:"h3"},"isLoading")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isLoading")," is a boolean that indicates whether the import is in progress or not."),(0,a.kt)("h3",{id:"mutationresult"},(0,a.kt)("inlineCode",{parentName:"h3"},"mutationResult")),(0,a.kt)("p",null,"Returns the result of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreate"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCreateMany"))," hook."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,a.kt)("p",null,"Sometimes you need to process your parsed ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," data for certain cases, such as when your data includes relational data and references to other data, or when your backend API requires a specific data format. To handle this, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," to customize the process."),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," file is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,a.kt)("p",null,"Since the ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," are relational fields, we store only their ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," fields in the exported file as ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryId")," respectively. To create resources from this file, we need to map the data back to the required format of the backend API. To do this, we use the mapData option in ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport"),". Here's an example:"),(0,a.kt)("p",null,"When creating these resources back, we should map it back to our backend API's required format. ",(0,a.kt)("inlineCode",{parentName:"p"},"mapData")," option allows us to do this. Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useImport<IPostFile>({\n  mapData: (item) => {\n    return {\n      title: item.title,\n      content: item.content,\n      status: item.status,\n      category: {\n        id: item.categoryId,\n      },\n      user: {\n        id: item.userId,\n      },\n    };\n  },\n});\n\ninterface IPostFile {\n  title: string;\n  status: string;\n  content: string;\n  categoryId: string;\n  userId: string;\n}\n")),(0,a.kt)("p",null,"With this code, the parsed data will be mapped to conform to the API requirements."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(m,{module:"@pankod/refine-core/useImport",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"return-values-1"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inputProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Props to that you can pass ",(0,a.kt)("inlineCode",{parentName:"td"},"<input />")," element props."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#useimportinputpropstype"},(0,a.kt)("inlineCode",{parentName:"a"},"UseImportInputPropsType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handleChange"),(0,a.kt)("td",{parentName:"tr",align:null},"Props to handle ",(0,a.kt)("inlineCode",{parentName:"td"},'<input type="file">')," element ",(0,a.kt)("inlineCode",{parentName:"td"},"onChange")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,a.kt)("td",{parentName:"tr",align:null},"It can be used to handle the ",(0,a.kt)("inlineCode",{parentName:"td"},"loading")," status for the Import operation"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the mutation/mutations of creating imported resources"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"TError,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," unknown>")),") ","|"," ",(0,a.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/useMutation"},(0,a.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"{ data: TData[]},"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"},"TError,"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables[]; },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," unknown>")),")")))),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TItem"),(0,a.kt)("td",{parentName:"tr",align:null},"Interface of parsed csv data"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,a.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(k,{path:"core-use-import",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);