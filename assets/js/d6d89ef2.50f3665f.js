"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29959],{58860:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>f});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>w,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var r=t(37953),o=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Inferencer"},p=void 0,m={unversionedId:"ui-integrations/mantine/components/inferencer/index",id:"ui-integrations/mantine/components/inferencer/index",title:"Inferencer",description:"You can automatically generate views for your resources using @refinedev/inferencer. Inferencer exports MantineListInferencer, MantineShowInferencer, MantineEditInferencer, MantineCreateInferencer components and finally the MantineInferencer component, which combines all in one place.",source:"@site/docs/ui-integrations/mantine/components/inferencer/index.md",sourceDirName:"ui-integrations/mantine/components/inferencer",slug:"/ui-integrations/mantine/components/inferencer/",permalink:"/docs/ui-integrations/mantine/components/inferencer/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/mantine/components/inferencer/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1716193884,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{title:"Inferencer"},sidebar:"mainSidebar",previous:{title:"<AutoSaveIndicator />",permalink:"/docs/ui-integrations/mantine/components/auto-save-indicator/"},next:{title:"Create",permalink:"/docs/ui-integrations/mantine/components/basic-views/create/"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"List",id:"list",level:3},{value:"Show",id:"show",level:3},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Example",id:"example",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",n)},f=u("DocThumbsUpDownFeedbackWidget"),h=u("Tabs"),g=u("TabItem"),y=u("CodeSandboxExample"),v={toc:d},b="wrapper";function w(e){var{components:n}=e,t=l(e,["components"]);return(0,o.yg)(b,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},v,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can automatically generate views for your resources using ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer"),". Inferencer exports ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineListInferencer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineShowInferencer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineEditInferencer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineCreateInferencer")," components and finally the ",(0,o.yg)("inlineCode",{parentName:"p"},"MantineInferencer")," component, which combines all in one place."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Inferencer components can be imported from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer/mantine"),". You can directly use the components in your routes without passing any props. If you use a ",(0,o.yg)("inlineCode",{parentName:"p"},"routerProvider"),", it will infer the ",(0,o.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"action")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"id")," from the current route."),(0,o.yg)(h,{defaultValue:"resources",values:[{label:(0,o.yg)(r.Fragment,null,"In",(0,o.yg)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.yg)(g,{value:"resources",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Global } from "@refinedev/mantine";\nimport { MantineProvider, LightTheme } from "@mantine/core";\n\n// highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          resources={[\n            {\n              name: "samples",\n              list: "/samples",\n            },\n          ]}\n        >\n          <Routes>\n            {/* highlight-next-line */}\n            <Route path="/samples" element={<MantineInferencer />} />\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </MantineProvider>\n  );\n};\n'))),(0,o.yg)(g,{value:"custom",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst SampleList = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="list" />\n  );\n};\n\nconst SampleShow = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="show" id="1" />\n  );\n};\n\nconst SampleCreate = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="create" />\n  );\n};\n\nconst SampleEdit = () => {\n  return (\n    // highlight-next-line\n    <MantineInferencer resource="samples" action="edit" id="1" />\n  );\n};\n')))),(0,o.yg)("p",null,"To learn more about ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package, please check out its ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Documentation"))),(0,o.yg)("h2",{id:"views"},"Views"),(0,o.yg)("h3",{id:"list"},"List"),(0,o.yg)(f,{id:"list",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample list view for your resources according to the API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"List")," component and from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/mantine")," and the ",(0,o.yg)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider\n      theme={RefineThemes.Blue}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              list: "/samples",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples" element={<MantineInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"show"},"Show"),(0,o.yg)(f,{id:"show",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample show view for your resources according to the API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/mantine")," with the ",(0,o.yg)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/core"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider\n      theme={RefineThemes.Blue}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              show: "/samples/show/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/show/:id" element={<MantineInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"create"},"Create"),(0,o.yg)(f,{id:"create",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Create")," component and the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/mantine"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider\n      theme={RefineThemes.Blue}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              create: "/samples/create",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/create" element={<MantineInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h3",{id:"edit"},"Edit"),(0,o.yg)(f,{id:"edit",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Generates a sample edit view for your resources according to the API response. It uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"Edit")," component and the ",(0,o.yg)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/mantine"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport { RefineThemes, ThemedLayoutV2 } from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <MantineProvider\n      theme={RefineThemes.Blue}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <BrowserRouter>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider(API_URL)}\n          resources={[\n            {\n              name: "samples",\n              edit: "/samples/edit/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              {/* highlight-next-line */}\n              <Route path="/samples/edit/:id" element={<MantineInferencer />} />\n            </Route>\n          </Routes>\n        </Refine>\n      </BrowserRouter>\n    </MantineProvider>\n  );\n};\n\n// visible-block-end\n\nrender(<App />);\n'))),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)(f,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Below you'll find a Live CodeSandbox Example displaying a fully setup ",(0,o.yg)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.yg)("inlineCode",{parentName:"p"},"@refinedev/inferencer/mantine")," components."),(0,o.yg)(y,{path:"inferencer-mantine",mdxType:"CodeSandboxExample"})))}w.isMDXComponent=!0}}]);