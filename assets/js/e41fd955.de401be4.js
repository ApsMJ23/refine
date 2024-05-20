"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[20710],{58860:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),g=p(t),c=r,u=g["".concat(l,".").concat(c)]||g[c]||m[c]||o;return t?a.createElement(u,i(i({ref:n},s),{},{components:t})):a.createElement(u,i({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[g]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},92720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>g});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const d={id:"v4-to-v5",title:"Migration Guide"},l=void 0,p={unversionedId:"api-reference/antd/migration-guide/v4-to-v5",id:"version-3.xx.xx/api-reference/antd/migration-guide/v4-to-v5",title:"Migration Guide",description:"Ant Design released a new major version as a v5. This document will help you upgrade from antd 4.x version to antd 5.x version.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/migration-guide/v4-to-v5.md",sourceDirName:"api-reference/antd/migration-guide",slug:"/api-reference/antd/migration-guide/v4-to-v5",permalink:"/docs/3.xx.xx/api-reference/antd/migration-guide/v4-to-v5",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/migration-guide/v4-to-v5.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1716193884,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"v4-to-v5",title:"Migration Guide"},sidebar:"someSidebar",previous:{title:"Sider",permalink:"/docs/3.xx.xx/api-reference/antd/customization/antd-custom-sider"},next:{title:"Chakra UI API",permalink:"/docs/3.xx.xx/api-reference/chakra-ui"}},s={},g=[{value:"Updating the packages",id:"updating-the-packages",level:2},{value:"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating Imports",id:"updating-imports",level:3},{value:"Updating Props",id:"updating-props",level:3},{value:"Customized <code>&lt;Sider&gt;</code>",id:"customized-sider",level:3},{value:"Customized <code>&lt;Header&gt;</code>",id:"customized-header",level:3},{value:"LESS Users",id:"less-users",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Compile errors",id:"compile-errors",level:3},{value:"Solution 1",id:"solution-1",level:4},{value:"Solution 2",id:"solution-2",level:4}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},c=m("DocThumbsUpDownFeedbackWidget"),u=m("Tabs"),y=m("TabItem"),f={toc:g},h="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(h,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Ant Design released a new major version as a v5. This document will help you upgrade from antd 4.x version to antd 5.x version."),(0,a.yg)("p",null,"Ant Design removed ",(0,a.yg)("inlineCode",{parentName:"p"},"less")," and adopt ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS-in-JS"),", for better support of dynamic themes. The bottom layer uses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ant-design/cssinjs"},(0,a.yg)("inlineCode",{parentName:"a"},"@ant-design/cssinjs"))," as a solution.\nSome components are removed or renamed, and some APIs are changed."),(0,a.yg)("p",null,"Some of the changes are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"<PageHeader>")," component moved into ",(0,a.yg)("inlineCode",{parentName:"li"},"@ant-design/pro-components"),". ",(0,a.yg)("strong",{parentName:"li"},"refine")," is using ",(0,a.yg)("inlineCode",{parentName:"li"},"<PageHeader>")," in ",(0,a.yg)("inlineCode",{parentName:"li"},"<List>"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"<Create>"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"<Edit>"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"<Show>")," components and added as a dependency. You don't need to install ",(0,a.yg)("inlineCode",{parentName:"li"},"@ant-design/pro-components")," package manually."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"<Comment>")," component moved into ",(0,a.yg)("inlineCode",{parentName:"li"},"@ant-design/compatible"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"moment.js")," is replaced with ",(0,a.yg)("inlineCode",{parentName:"li"},"day.js"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less")," is removed from ",(0,a.yg)("inlineCode",{parentName:"li"},"antd")," package.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5"},"Ant Design Migration Guide")," for detailed information.")),(0,a.yg)("admonition",{title:"A little more clarification",type:"info"},(0,a.yg)("table",{parentName:"admonition"},(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"refine")," package"),(0,a.yg)("th",{parentName:"tr",align:null},"Ant Design version"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","3.x.x"),(0,a.yg)("td",{parentName:"tr",align:null},"antd","@","4.x.x")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@","pankod/refine-antd","@","4.x.x"),(0,a.yg)("td",{parentName:"tr",align:null},"antd","@","5.x.x"))))),(0,a.yg)("h2",{id:"updating-the-packages"},"Updating the packages"),(0,a.yg)(c,{id:"updating-the-packages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," must be updated to ",(0,a.yg)("inlineCode",{parentName:"p"},"4.x.x")),(0,a.yg)(u,{defaultValue:"refine-cli",values:[{label:"refine CLI",value:"refine-cli"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},(0,a.yg)(y,{value:"refine-cli",mdxType:"TabItem"},(0,a.yg)("p",null,"\u26a1\ufe0f You can easily update ",(0,a.yg)("strong",{parentName:"p"},"refine")," packages with ",(0,a.yg)("strong",{parentName:"p"},"refine")," CLI ",(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/#update"},(0,a.yg)("inlineCode",{parentName:"a"},"update"))," command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run refine update\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("a",{parentName:"p",href:"https://refine.dev/docs/packages/documentation/cli/#how-to-add-to-an-existing-project"},"How to add refine CLI to an existing project?")))),(0,a.yg)(y,{value:"manual",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-antd@latest\n"))))),(0,a.yg)("h2",{id:"-migrating-your-project-automatically-with-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with Codemod \u2728 (recommended)"),(0,a.yg)(c,{id:"-migrating-your-project-automatically-with-codemod--recommended",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-codemod")," package handles the breaking changes for your project automatically, without any manual steps. It migrates your ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," version from 3.x.x to 4.x.x."),(0,a.yg)("p",null,"Just ",(0,a.yg)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod antd4-to-antd5\n")),(0,a.yg)("p",null,"And it's done. Now your project uses ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\ud83d\udea8 Customized or swizzled ",(0,a.yg)("a",{parentName:"p",href:"#customized-sider"},"components")," and ",(0,a.yg)("a",{parentName:"p",href:"#less-users"},".less")," files cannot be migrated automatically. You need to migrate them manually."))),(0,a.yg)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,a.yg)("h3",{id:"updating-imports"},"Updating Imports"),(0,a.yg)(c,{id:"updating-imports",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"CSS files are no longer included in package. Since CSS-in-JS supports importing on demand, the original ",(0,a.yg)("inlineCode",{parentName:"li"},"styles/antd.less")," has also been abandoned. If you need to reset some basic styles, please import ",(0,a.yg)("inlineCode",{parentName:"li"},"@pankod/refine-antd/dist/reset.css"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.tsx"',title:'"App.tsx"'},'- import "@pankod/refine-antd/dist/styles.min.css";\n+ import "@pankod/refine-antd/dist/reset.css";\n'))),(0,a.yg)("h3",{id:"updating-props"},"Updating Props"),(0,a.yg)(c,{id:"updating-props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"actionButtons")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"pageHeaderProps")," props was deprecated on ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-antd@3.x.x")," and removed on ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x")," from ",(0,a.yg)("inlineCode",{parentName:"p"},"<List>"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"<Create>"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"<Edit>"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"<Show>")," component due to incosistency with all UI packages. Use ",(0,a.yg)("inlineCode",{parentName:"p"},"headerButtons")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"headerProps")," props instead."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="List.tsx"',title:'"List.tsx"'},"- <List actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <List headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="Create.tsx"',title:'"Create.tsx"'},"- <Create actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Create headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="Show.tsx"',title:'"Show.tsx"'},"- <Show actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Show headerButtons={actionButtons} headerProps={pageHeaderProps}>\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="Edit.tsx"',title:'"Edit.tsx"'},"- <Edit actionButtons={actionButtons} pageHeaderProps={pageHeaderProps}>\n+ <Edit headerButtons={actionButtons} headerProps={pageHeaderProps}>\n"))),(0,a.yg)("h3",{id:"customized-sider"},"Customized ",(0,a.yg)("inlineCode",{parentName:"h3"},"<Sider>")),(0,a.yg)(c,{id:"customized-sider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you have customized or ",(0,a.yg)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Sider>")," component, there may be a color mismatch issue.\nYou can give theme dark to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Menu>")," component in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Sider>")," component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="Sider.tsx"',title:'"Sider.tsx"'},"    <AntdLayout.Sider\n      collapsible\n      collapsed={collapsed}\n      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n      collapsedWidth={isMobile ? 0 : 80}\n      breakpoint='lg'\n      style={isMobile ? antLayoutSiderMobile : antLayoutSider}>\n      <RenderToTitle collapsed={collapsed} />\n      <Menu\n+       theme='dark'\n        selectedKeys={[selectedKey]}\n        defaultOpenKeys={defaultOpenKeys}\n        mode='inline'\n        onClick={() => {\n          if (!breakpoint.lg) {\n            setCollapsed(true)\n          }\n        }}>\n        {renderSider()}\n      </Menu>\n    </AntdLayout.Sider>\n"))),(0,a.yg)("h3",{id:"customized-header"},"Customized ",(0,a.yg)("inlineCode",{parentName:"h3"},"<Header>")),(0,a.yg)(c,{id:"customized-header",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you have customized or ",(0,a.yg)("inlineCode",{parentName:"p"},"swizzled")," the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Header>")," component, there may be a color mismatch issue.\nYou can remove constant background color in ",(0,a.yg)("inlineCode",{parentName:"p"},"<Header>")," component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-diff",metastring:'title="Header.tsx"',title:'"Header.tsx"'},"   <AntdLayout.Header\n      style={{\n        display: 'flex',\n        justifyContent: 'flex-end',\n        alignItems: 'center',\n        padding: '0px 24px',\n        height: '64px',\n-       backgroundColor: '#FFF',\n      }}>\n"))),(0,a.yg)("h3",{id:"less-users"},"LESS Users"),(0,a.yg)(c,{id:"less-users",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Ant Design removed ",(0,a.yg)("inlineCode",{parentName:"p"},"less"),", uses and recommends ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS-in-JS")," instead. You need to manually migrate your ",(0,a.yg)("inlineCode",{parentName:"p"},".less")," files to ",(0,a.yg)("inlineCode",{parentName:"p"},"CSS-in-JS"),". ",(0,a.yg)("a",{parentName:"p",href:"https://ant.design/docs/react/migration-v5#less-migration"},"Ant Design's documentation for less migration."))),(0,a.yg)("h2",{id:"known-issues"},"Known Issues"),(0,a.yg)("h3",{id:"compile-errors"},"Compile errors"),(0,a.yg)(c,{id:"compile-errors",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Some users repored (",(0,a.yg)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056236230641209396/1056236230641209396"},"issue#1"),", ",(0,a.yg)("a",{parentName:"p",href:"https://discord.com/channels/837692625737613362/1056592183702061177/1056592183702061177"},"issue#2"),") compile errors after upgrading from ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-antd@3.x.x")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"@pankod/refine-antd@4.x.x"),". They also provided solutions.")),(0,a.yg)("h4",{id:"solution-1"},"Solution 1"),(0,a.yg)(c,{id:"solution-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"remove ",(0,a.yg)("inlineCode",{parentName:"li"},"node_modules")," folder"),(0,a.yg)("li",{parentName:"ol"},"remove ",(0,a.yg)("inlineCode",{parentName:"li"},"package-lock.json")," file"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"npm install")))),(0,a.yg)("h4",{id:"solution-2"},"Solution 2"),(0,a.yg)(c,{id:"solution-2",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install react@latest react-dom@latest\n"))))}b.isMDXComponent=!0}}]);