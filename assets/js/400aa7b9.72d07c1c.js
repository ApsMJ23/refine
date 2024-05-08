"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50725],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>x});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),y=o,x=l["".concat(c,".").concat(y)]||l[y]||d[y]||i;return r?n.createElement(x,a(a({ref:t},u),{},{components:r})):n.createElement(x,a({ref:t},u))}));function x(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},35932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>l});r(96540);var n=r(15680);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"csv-export",title:"CSV Export"},c=void 0,s={unversionedId:"advanced-tutorials/import-export/csv-export",id:"version-3.xx.xx/advanced-tutorials/import-export/csv-export",title:"CSV Export",description:"With refine, you can easily add export functionality to your application. By using the useExport hook with desired configurations, you can turn any button into an export button. Which resources' records to export can be configured. By default, it is inferred from current route of browser.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/import-export/csv-export.md",sourceDirName:"advanced-tutorials/import-export",slug:"/advanced-tutorials/import-export/csv-export",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-export",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/import-export/csv-export.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1715173183,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"csv-export",title:"CSV Export"},sidebar:"someSidebar",previous:{title:"Save and Continue",permalink:"/docs/3.xx.xx/advanced-tutorials/forms/save-and-continue"},next:{title:"CSV Import",permalink:"/docs/3.xx.xx/advanced-tutorials/import-export/csv-import"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},y=d("DocThumbsUpDownFeedbackWidget"),x=d("CodeSandboxExample"),f={toc:l},m="wrapper";function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"With ",(0,n.yg)("strong",{parentName:"p"},"refine"),", you can easily add export functionality to your application. By using the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},(0,n.yg)("inlineCode",{parentName:"a"},"useExport"))," hook with desired configurations, you can turn any button into an export button. Which resources' records to export can be configured. By default, it is inferred from current route of browser."),(0,n.yg)("p",null,"Internally, it uses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},(0,n.yg)("inlineCode",{parentName:"a"},"export-to-csv"))," to create the ",(0,n.yg)("inlineCode",{parentName:"p"},"CSV")," file."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(y,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useExport } from "@pankod/refine-core";\n\ninterface IPost {\n    id: number;\n    slug: string;\n    title: string;\n    content: string;\n}\n\nexport const PostList: React.FC = () => {\n    const { triggerExport } = useExport<IPost>();\n\n    return (\n        <div>\n            <button onClick={triggerExport}>Export Button</button>\n            ...\n        </div>\n    );\n};\n')),(0,n.yg)("p",null,"After this setup is done, when the user clicks the button, download process will initialize."),(0,n.yg)("p",null,"Manually running the ",(0,n.yg)("inlineCode",{parentName:"p"},"triggerExport")," function is another option."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useExport")," returns two properties: ",(0,n.yg)("inlineCode",{parentName:"p"},"isLoading: boolean")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"triggerExport: async () => void"),". You can use these properties to create your own export button or pass them to the ",(0,n.yg)("inlineCode",{parentName:"p"},"ExportButton")," component."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/import-export/useExport"},"Refer to the useExport docs for more detailed information and export settings. ","\u2192")))),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)(y,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(x,{path:"import-export-antd",mdxType:"CodeSandboxExample"})))}g.isMDXComponent=!0}}]);