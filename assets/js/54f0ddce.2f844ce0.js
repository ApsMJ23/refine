"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99111],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var i=n(86010),o=n(67294),r=n(73808),a=n(96319),s=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,i.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){c(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?o.createElement(h,e):o.createElement(f,e)},f=e=>{var t,n,c,m,f,h,v,g,b,k,y,w,N,x,P,{startRoute:O,showNavigator:C,showLineNumbers:R,showOpenInCodeSandbox:E,initialPercentage:T=50,dependencies:S,showReadOnly:j,options:B={showTabs:!0,initMode:"lazy",classes:{"sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,i.Z)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-tab-button":(0,i.Z)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:M="react-ts",customSetup:I,files:F,previewOnly:A,layout:z,height:D=420,wrapperClassName:L,className:H,showFiles:U=!1,showConsole:G=!1,hidePreview:$=!1}=e,W=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[Z,q]=o.useState(!1);o.useEffect((()=>{q(!0)}),[]);const{colorMode:_}=(0,s.I)();var X,Y;null!=B||(B={}),null!==(X=(x=B).resizablePanels)&&void 0!==X||(x.resizablePanels=!0),null!==(Y=(P=B).editorWidthPercentage)&&void 0!==Y||(P.editorWidthPercentage=null!=T?T:50);const K={showTabs:B.showTabs,showLineNumbers:B.showLineNumbers,showInlineErrors:B.showInlineErrors,wrapContent:B.wrapContent,closableTabs:B.closableTabs,initMode:B.initMode,extensions:null===(t=B.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=B.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:B.readOnly,showReadOnly:null!=j?j:B.showReadOnly,additionalLanguages:null===(c=B.codeEditor)||void 0===c?void 0:c.additionalLanguages},J={activeFile:B.activeFile,visibleFiles:B.visibleFiles,recompileMode:B.recompileMode,recompileDelay:B.recompileDelay,autorun:B.autorun,autoReload:B.autoReload,bundlerURL:B.bundlerURL,startRoute:B.startRoute,skipEval:B.skipEval,fileResolver:B.fileResolver,initMode:B.initMode,initModeObserverOptions:B.initModeObserverOptions,externalResources:B.externalResources,logLevel:B.logLevel,classes:B.classes},[V,Q]=o.useState(!1),{onHandleMouseDown:ee,horizontalSize:te}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),i=o.useRef(null),r=e=>{if(!i.current)return;const t=i.current.parentElement;if(!t)return;const{left:o,width:r}=t.getBoundingClientRect(),a=(e.clientX-o)/r*100,s=Math.min(Math.max(a,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},a=()=>{var e;const t=null===(e=i.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),i.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",r),document.body.addEventListener("mouseup",a),()=>{document.body.removeEventListener("mousemove",r),document.body.removeEventListener("mouseup",a)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{i.current=e.target}),[])}})({initialSize:B.editorWidthPercentage}),ne=!A&&!(null===(f=z)||void 0===f||null===(m=f.includes)||void 0===m?void 0:m.call(f,"col"));var ie,oe,re,ae,se,le;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,i.Z)("pb-6",L)},o.createElement("div",{className:(0,i.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",H)},o.createElement(a.oT,d({key:`${M}-${_}-${Z}`,customSetup:d({dependencies:S},I),files:F,options:J,template:M,theme:"light"===_?u(d({},r.FM),{colors:u(d({},r.FM.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(d({},r.I2),{colors:u(d({},r.I2.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,i.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},W),o.createElement(a.sp,{className:(0,i.Z)("col"===z&&"!flex-col","col-reverse"===z&&"!flex-col-reverse")},U&&o.createElement(a.Lj,{autoHiddenFiles:!0,style:{height:null!==(ie=B.editorHeight)&&void 0!==ie?ie:D}}),!A&&o.createElement(a._V,u(d({},K),{showLineNumbers:R,closableTabs:U,initMode:"lazy",style:u(d({height:null!==(oe=B.editorHeight)&&void 0!==oe?oe:D},(null===(v=z)||void 0===v||null===(h=v.includes)||void 0===h?void 0:h.call(v,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})})),G?o.createElement(a.Tq,{style:u(d({height:null!==(re=B.editorHeight)&&void 0!==re?re:D},(null===(b=z)||void 0===b||null===(g=b.includes)||void 0===g?void 0:g.call(b,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})}):null,ne?o.createElement(l,{onMouseDown:ee,horizontalSize:te}):null,$?null:o.createElement(o.Fragment,null,o.createElement(a.Gj,{showOpenInCodeSandbox:E,startRoute:O,showNavigator:null!=C?C:B.showNavigator,showRefreshButton:B.showRefreshButton,style:u(d({display:$?"none":"flex"},(null===(y=z)||void 0===y||null===(k=y.includes)||void 0===k?void 0:k.call(y,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-te,flexShrink:100-te,flexBasis:0,width:A?"100%":100-te+"%"}),{gap:0,height:null!==(ae=B.editorHeight)&&void 0!==ae?ae:D})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,i.Z)("w-12","h-12","rounded-full")}))))))),o.createElement("div",{className:(0,i.Z)(""),style:{height:Number(null!==(se=B.editorHeight)&&void 0!==se?se:D)+2}}),o.createElement("div",{className:(0,i.Z)((null===(N=z)||void 0===N||null===(w=N.includes)||void 0===w?void 0:w.call(N,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=B.editorHeight)&&void 0!==le?le:D)+2}})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=S?S:{}).map((e=>`${e}@${S[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=F?F:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in F[e]?F[e].code:F[e]}`))))))},h=e=>{const t={hidePreview:!0};return o.createElement(f,u(d({},e,t),{template:"react-ts"}))};'\nimport { NavigateToResource } from "@refinedev/nextjs-router";\n\nconst Home = () => {\n    return <NavigateToResource resource="products" />;\n};\n\nexport default Home;\n'.trim()},70115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>N,default:()=>j,frontMatter:()=>w,metadata:()=>x,toc:()=>O});var i=n(67294),o=n(3905),r=n(58943);function a(){return i.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/antd":"latest","@refinedev/core":"latest","@refinedev/simple-rest":"latest",antd:"^5.0.5"},startRoute:"/",files:{"/App.tsx":{code:s},"/home-page.tsx":{code:l,active:!0}}})}const s='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport { useNotificationProvider, RefineThemes } from "@refinedev/antd";\nimport { ConfigProvider, App as AntdApp } from "antd";\nimport dataProvider from "@refinedev/simple-rest";\nimport "@refinedev/antd/dist/reset.css";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ConfigProvider theme={RefineThemes.Blue}>\n            <AntdApp>\n                <Refine\n                    dataProvider={dataProvider(API_URL)}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </AntdApp>\n        </ConfigProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),l='\nimport React from "react";\nimport { useNotification } from "@refinedev/core";\nimport { Button, Col, Row } from "antd";\n\nexport const HomePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n  return (\n      <Row\n          gutter={[16, 16]}\n          style={{\n              justifyContent: "center",\n              alignItems: "center",\n              height: "100vh",\n          }}\n      >\n          <Col>\n              <Button\n                  type="primary"\n                  onClick={() => {\n                      open?.({\n                          type: "success",\n                          message: "Notification Title",\n                          description:\n                              "This is the content of the notification.",\n                          key: "notification-key",\n                      });\n                  }}\n              >\n                  Open Notification\n              </Button>\n          </Col>\n          <Col>\n              <Button\n                  type="default"\n                  onClick={() => {\n                      close?.("notification-key");\n                  }}\n              >\n                  Close Notification\n              </Button>\n          </Col>\n      </Row>\n  );\n};\n\n\n'.trim();function c(){return i.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@emotion/react":"^11.8.2","@emotion/styled":"^11.8.1","@mui/lab":"^5.0.0-alpha.85","@mui/material":"^5.14.2","@refinedev/mui":"latest"},startRoute:"/",files:{"/App.tsx":{code:d},"/home-page.tsx":{code:u,active:!0}}})}const d='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport {\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport GlobalStyles from "@mui/material/GlobalStyles";\nimport { ThemeProvider } from "@mui/material/styles";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider preventDuplicate={true}>\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),u='\nimport React from "react";\nimport Grid from "@mui/material/Grid";\nimport Button from "@mui/material/Button";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n    return (\n        <Grid\n            container\n            spacing={2}\n            sx={{\n                justifyContent: "center",\n                alignItems: "center",\n                height: "100vh",\n            }}\n        >\n            <Grid item>\n                <Button\n                    variant="contained"\n                    onClick={() => {\n                        open?.({\n                            type: "success",\n                            message: "Notification Title",\n                            description:\n                                "This is the content of the notification.",\n                            key: "notification-key",\n                        });\n                    }}\n                >\n                    Open Notification\n                </Button>\n            </Grid>\n            <Grid item>\n                <Button\n                    variant="outlined"\n                    onClick={() => {\n                        close?.("notification-key");\n                    }}\n                >\n                    Close Notification\n                </Button>\n            </Grid>\n        </Grid>\n    );\n};\n\n\n'.trim();function p(){return i.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@mantine/notifications":"^5.10.4","@emotion/react":"^11.8.2","@mantine/core":"^5.10.4","@mantine/hooks":"^5.10.4","@refinedev/mantine":"^2.28.21"},startRoute:"/",files:{"/App.tsx":{code:m},"/home-page.tsx":{code:f,active:!0}}})}const m='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport { notificationProvider, RefineThemes } from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider\n            theme={RefineThemes.Blue}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),f='\nimport React from "react";\nimport { Flex, Button } from "@mantine/core";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Flex mih={"100vh"} gap="md" justify="center" align="center">\n            <Button\n                onClick={() => {\n                    open?.({\n                        type: "success",\n                        message: "Notification Title",\n                        description: "This is the content of the notification.",\n                        key: "notification-key",\n                    });\n                }}\n            >\n                Open Notification\n            </Button>\n            <Button\n                variant="outline"\n                onClick={() => {\n                    close?.("notification-key");\n                }}\n            >\n                Close Notification\n            </Button>\n        </Flex>\n    );\n};\n\n\n'.trim();function h(){return i.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@chakra-ui/react":"^2.5.1","@refinedev/chakra-ui":"^2.26.17"},startRoute:"/",files:{"/App.tsx":{code:v},"/home-page.tsx":{code:g,active:!0}}})}const v='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport { RefineThemes, notificationProvider } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            >\n                <HomePage />\n            </Refine>\n        </ChakraProvider>\n    );\n};\n\nexport default App;\n'.trim(),g='\nimport React from "react";\nimport { Flex, Button } from "@chakra-ui/react";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Flex align="center" justify="center" height="100vh" gap={4}>\n            <Button\n                onClick={() => {\n                    open?.({\n                        type: "success",\n                        message: "Notification Title",\n                        description: "This is the content of the notification.",\n                        key: "notification-key",\n                    });\n                }}\n            >\n                Open Notification\n            </Button>\n            <Button\n                variant="outline"\n                onClick={() => {\n                    close?.("notification-key");\n                }}\n            >\n                Close Notification\n            </Button>\n        </Flex>\n    );\n};\n\n\n'.trim();function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function y(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const w={title:"Notifications"},N=void 0,x={unversionedId:"guides-concepts/notifications/index",id:"guides-concepts/notifications/index",title:"Notifications",description:"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted.",source:"@site/docs/guides-concepts/notifications/index.md",sourceDirName:"guides-concepts/notifications",slug:"/guides-concepts/notifications/",permalink:"/docs/guides-concepts/notifications/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/notifications/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1705578357,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"Notifications"},sidebar:"mainSidebar",previous:{title:"UI Libraries",permalink:"/docs/guides-concepts/ui-libraries/"},next:{title:"Realtime",permalink:"/docs/guides-concepts/realtime/"}},P={},O=[{value:"Notification Providers",id:"notification-providers",level:2},{value:"Built-in Notification Providers",id:"built-in-notification-providers",level:3},{value:"Undoable",id:"undoable",level:3},{value:"Customizing Notifications",id:"customizing-notifications",level:2},{value:"With props",id:"with-props",level:3},{value:'With i18n <GuideBadge id="i18n/i18n-provider/" />',id:"with-i18n-",level:3}],C=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},R=C("Tabs"),E=C("TabItem"),T=C("GuideBadge"),S={toc:O};function j(e){var{components:t}=e,n=y(e,["components"]);return(0,o.kt)("wrapper",k(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){b(e,t,n[t])}))}return e}({},S,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted."),(0,o.kt)("p",null,"While this integration is not coupled with the UI integrations, it will be a wise choice to use the one that is provided by the UI libraries for a consistent design language. This is why Refine's UI integrations also provides a ",(0,o.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"notificationProvider"))," to be used with the notification integration of refine."),(0,o.kt)("h2",{id:"notification-providers"},"Notification Providers"),(0,o.kt)("p",null,"Refine let's you set a notification API by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. Refine uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,o.kt)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," must include ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods with the following types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'interface NotificationProvider {\n  open: (params: OpenNotificationParams) => void;\n  close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n  key?: string;\n  message: string;\n  type: "success" | "error" | "progress";\n  description?: string;\n  cancelMutation?: () => void;\n  undoableTimeout?: number;\n}\n')),(0,o.kt)("p",null,"Once you provide the notification provider, Refine seamlessly integrate with ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides-concepts/data-fetching/#data-hooks"},"data hooks")," to displays user-friendly notifications for various data-related actions, ensuring a clear and informative user experience. This includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Form Submission"),": Whether a ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-form/"},"form")," is successfully submitted or encounters errors, Refine will display the appropriate notification to keep the user informed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resource Management"),": ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-create/"},"Creation"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-delete/"},"deletion"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-update/"},"update"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/core/hooks/utilities/use-import/"},"import"),", and ",(0,o.kt)("a",{parentName:"li",href:"/docs/core/hooks/utilities/use-export/"},"export")," of resources are all accompanied by success or error notifications, providing immediate feedback to the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Fetching"),": Refine also displays notifications for failed data fetching operations, including those using ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-list/"},"useList"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-infinite-list/"},"useInfiniteList"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-many/"},"useMany"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-one/"},"useOne"),"."),(0,o.kt)("li",{parentName:"ul"},"Auth Actions: ",(0,o.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-login/"},"Login"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-logout/"},"logout"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-register/"},"register"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-update-password/"},"update password"),", and ",(0,o.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-forgot-password/"},"forgot password")," actions are all integrated with Refine's notification provider to display error notifications.")),(0,o.kt)("h3",{id:"built-in-notification-providers"},"Built-in Notification Providers"),(0,o.kt)("p",null,"Using of the prebuilt notification providers are optional and can be customized, extended or even swapped with a custom implementation if needed."),(0,o.kt)("p",null,"As an example, we'll demonstrate how to open and close notifications using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useNotification")," hook. However, in most cases, you won't need to do this, as Refine typically manages notifications for you automatically."),(0,o.kt)(R,{wrapContent:!1,mdxType:"Tabs"},(0,o.kt)(E,{default:!0,value:"antd",label:"Ant Design",mdxType:"TabItem"},(0,o.kt)(a,{mdxType:"NotificationAntd"})),(0,o.kt)(E,{value:"material-ui",label:"Material UI",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"NotificationMui"})),(0,o.kt)(E,{value:"mantine",label:"Mantine",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"NotificationMantine"})),(0,o.kt)(E,{value:"chakra-ui",label:"Chakra UI",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"NotificationChakraUI"}))),(0,o.kt)("h3",{id:"undoable"},"Undoable"),(0,o.kt)("p",null,"Refine also supports undoable notification."),(0,o.kt)("p",null,"You can trigger an undoable notification by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"progress"),". After timeout, the notification will be closed automatically. If the user clicks the undo button, the ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelMutation")," callback will be called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "progress",\n  message: "Progress",\n  undoableTimeout: 5,\n  cancelMutation: () => {\n    // when undo button is clicked, run this callback\n  },\n});\n')),(0,o.kt)("p",null,"Mutation hooks such as ",(0,o.kt)("inlineCode",{parentName:"p"},"useUpdate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"useDelete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," supports undoable notifications. It can be used for canceling the mutation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useForm } from "@refinedev/core";\n\n// automatically cancel the mutation when undo button is clicked\nuseForm({ mutationMode: "undoable" });\n')),(0,o.kt)("h2",{id:"customizing-notifications"},"Customizing Notifications"),(0,o.kt)("h3",{id:"with-props"},"With props"),(0,o.kt)("p",null,"All data hooks have a ",(0,o.kt)("inlineCode",{parentName:"p"},"successNotification")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"errorNotification")," prop that can be used to customize the notification that will be shown when the hook is called."),(0,o.kt)("p",null,"We will look ",(0,o.kt)("inlineCode",{parentName:"p"},"useUpdate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hooks as an example but all data hooks have the same props and they work the same way."),(0,o.kt)(R,{mdxType:"Tabs"},(0,o.kt)(E,{default:!0,value:"useUpdate",label:"useUpdate",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n  // it will be called when the mutation is successful\n  // By setting it to `false`, you can disable the notification.\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n  // it will be called when the mutation is failed\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,o.kt)(E,{value:"useForm",label:"useForm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForm } from "@refinedev/core";\n\nuseForm({\n  //  it will be called when the form is submitted successfully\n  // By setting it to `false`, you can disable the notification.\n  successNotification: (data, values, resource) => {\n    return {\n      message: `Successfully created ${data.title}`,\n      description: "good job!",\n      type: "success",\n    };\n  },\n  // it will be called when the form is submitted with errors\n  // By setting it to `false`, you can disable the notification.\n  errorNotification: (error, values, resource) => {\n    return {\n      message: `Failed to create ${values.title}`,\n      description: error.message,\n      type: "error",\n    };\n  },\n});\n')))),(0,o.kt)("h3",{id:"with-i18n-"},"With i18n ",(0,o.kt)(T,{id:"i18n/i18n-provider/",mdxType:"GuideBadge"})),(0,o.kt)("p",null,"Refine's notification integration is also integrated with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/"},(0,o.kt)("inlineCode",{parentName:"a"},"i18n Provider")),". This means that you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n")," integration to customize the notifications."),(0,o.kt)("p",null,"Refine uses following keys for the notifications and popultes ",(0,o.kt)("inlineCode",{parentName:"p"},"{{resource}}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{{statusCode}}"),". You can override these keys in your ",(0,o.kt)("inlineCode",{parentName:"p"},"i18n")," provider to customize the notifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n  "notifications": {\n    "success": "Successful",\n    "error": "Error (status code: {{statusCode}})",\n    "undoable": "You have {{seconds}} seconds to undo",\n    "createSuccess": "Successfully created {{resource}}",\n    "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "Successfully deleted {{resource}}",\n    "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "Successfully edited {{resource}}",\n    "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n    "importProgress": "Importing: {{processed}}/{{total}}"\n  }\n}\n')))}j.isMDXComponent=!0}}]);