"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",slug:"tanstack-react-table",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/tanstack-react-table",source:"@site/blog/2023-10-31-react-table.md",title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",date:"2023-10-31T00:00:00.000Z",formattedDate:"October 31, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:11.75,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",slug:"tanstack-react-table",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/social.png",hide_table_of_contents:!1},prevItem:{title:"Unraveling the Kubernetes ImagePullBackOff Error",permalink:"/blog/kubernetes-imagepullbackoff-error"},nextItem:{title:"React Slick Examples - Creating a carousel",permalink:"/blog/react-slick"},relatedPosts:[{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:16.995,date:"2021-11-12T00:00:00.000Z"},{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref",permalink:"/blog/react-useref-hook-and-ref",formattedDate:"October 26, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.04,date:"2022-10-26T00:00:00.000Z"},{title:"Building a React Admin Dashboard with refine",description:"We will be building a Complete React CRUD application using refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.82,date:"2023-04-06T00:00:00.000Z"}],authorPosts:[{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.44,date:"2022-09-24T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.44,date:"2023-07-02T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.86,date:"2022-09-29T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is TanStack table",id:"what-is-tanstack-table",level:2},{value:"What is React Table",id:"what-is-react-table",level:2},{value:"How to use React Table",id:"how-to-use-react-table",level:2},{value:"How to use React Table with refine",id:"how-to-use-react-table-with-refine",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Most tables we use in real-world applications come with features such as filtering, sorting, and selection. Therefore, building tables from the ground up using plain markup and vanilla JavaScript can be tedious and challenging."),(0,a.kt)("p",null,"With libraries such as ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"TanStack Table"),", you can bootstrap feature-rich tables quickly. TanStack Table is a headless, customizable, and feature-rich package for building tables and data grids."),(0,a.kt)("p",null,"Because it is headless by design, TanStack only has the table logic, state, and API for creating the UI components but doesn't implement the markup or styling."),(0,a.kt)("p",null,"You can use it with Vanilla JavaScript or popular front-end frameworks like React, refine, Vue,  Solid, and Svelte using adapters. This article will introduce you to TanStack Table and React Table, the TanStack Table adapter for react. We will also explore how to use TanStack in a refine project."),(0,a.kt)("p",null,"What we'll cover in this article:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-tanstack-table"},"What is TanStack table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-react-table"},"What is React Table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-react-table"},"How to use React Table")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-react-table-with-refine"},"How to use React Table with refine"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pagination"},"Pagination")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sorting"},"Sorting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#filtering"},"Filtering"))))),(0,a.kt)("h2",{id:"what-is-tanstack-table"},"What is TanStack table"),(0,a.kt)("p",null,"As explained above, ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"TanStack Table")," is a headless and framework-agnostic package for building tables and data grids. It has adapters for some of the most popular front-end frameworks like React, refine, Vue, Solid, and Svelte."),(0,a.kt)("p",null,"The core TanStack Table package exposes several APIs. You can access these APIs directly from the core TanStack API or one of the adapters for your front-end framework."),(0,a.kt)("p",null,"Some table features that TanStack Table supports out of the box include pagination, sorting, row selection, column resizing, and ordering."),(0,a.kt)("h2",{id:"what-is-react-table"},"What is React Table"),(0,a.kt)("p",null,"As highlighted above, TanStack Table is framework agnostic. You can use it with front-end frameworks like React, Vue, Svelte, and Solid via adapters. These adapters make working with the core TanStack Table API easier."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@tanstack/react-table")," package, referred to as React Table in short, is the TanStack table adapter for react. It wraps around the core TanStack table logic."),(0,a.kt)("p",null,"With the React Table adapter, you can manage state like in a typical react project."),(0,a.kt)("h2",{id:"how-to-use-react-table"},"How to use React Table"),(0,a.kt)("p",null,"To start using TanStack Table in a react project, you need to install the React Table adapter as a dependency from the NPM package registry using the command below. The command below assumes you are using the NPM package manager."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @tanstack/react-table\n")),(0,a.kt)("p",null,"The React Table adapter exports the ",(0,a.kt)("inlineCode",{parentName:"p"},"useReactTable")," hook. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useReactTable")," hook takes an options object as argument and returns a table object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const table = useReactTable(options)\n")),(0,a.kt)("p",null,"The options object has several properties, which we will not explore in detail in this article. However, you should have the data and the table column objects. The example below illustrates the basic use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useReactTable")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  useReactTable,\n  createColumnHelper,\n  flexRender,\n  getCoreRowModel,\n} from "@tanstack/react-table";\n\nconst columnHelper = createColumnHelper();\n\nconst data = [\n  {\n    firstName: "Jane",\n    surname: "Doe",\n    age: 13,\n    gender: "Female",\n  },\n  {\n    firstName: "John",\n    surname: "Doe",\n    age: 43,\n    gender: "Male",\n  },\n  {\n    firstName: "Tom",\n    surname: "Doe",\n    age: 89,\n    gender: "Male",\n  },\n];\n\nconst columns = [\n  columnHelper.accessor((row) => `${row.firstName} ${row.surname}`, {\n    id: "fullName",\n    header: "Full Name",\n  }),\n  columnHelper.accessor("gender", {\n    header: \'Gender\'\n  }),\n];\n\nfunction App() {\n  const table = useReactTable({\n    data,\n    columns,\n    getCoreRowModel: getCoreRowModel(),\n  });\n\n  return (\n    <table>\n      <thead>\n        {table.getHeaderGroups().map((headerGroup) => {\n          return (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => {\n                return (\n                  <th id={header.id}>\n                    {" "}\n                    {header.isPlaceholder\n                      ? null\n                      : flexRender(\n                          header.column.columnDef.header,\n                          header.getContext()\n                        )}\n                  </th>\n                );\n              })}\n            </tr>\n          );\n        })}\n      </thead>\n      <tbody>\n        {table.getRowModel().rows.map((row) => {\n          return (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => {\n                return (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                );\n              })}\n            </tr>\n          );\n        })}\n      </tbody>\n    </table>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"As the example above illustrates, React Table is headless. Therefore, you are responsible for the markup and styling. You must pass the table data and table header array as arguments to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useReactTable")," hook."),(0,a.kt)("p",null,"In the above example, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"createColumnHelper")," from the core TanStack Table to create accessor column definition type."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useReactTable")," returns an object consisting of several methods you can use to render the table. The ",(0,a.kt)("inlineCode",{parentName:"p"},"getHeaderGroups")," method returns the header group. Similarly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"getRowModel")," returns the final row model. You can use the two properties to render the table UI as in the above example."),(0,a.kt)("p",null,"The table object has several other properties that you can look up in the React Table documentation."),(0,a.kt)("h2",{id:"how-to-use-react-table-with-refine"},"How to use React Table with refine"),(0,a.kt)("p",null,"TanStack Table is framework agnostic. Therefore, you need an adapter to use it with front-end frameworks like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/stargazers"},"refine"),". The refine ecosystem has the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/react-table"},(0,a.kt)("inlineCode",{parentName:"a"},"@refinedev/react-table"))," adapter for integrating TanStack Table into your refine application."),(0,a.kt)("p",null,"Depending on your package manager, first, install it from the NPM package registry. The command below assumes you're using the NPM package manager."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @refinedev/react-table\n")),(0,a.kt)("p",null,"Under the hood, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package uses refine's ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook. It has out-of-the-box support for all the features of the core TanStack table package and much more."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package exports the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook reads the resource from the URL and returns the data from the API endpoint in its basic usage."),(0,a.kt)("p",null,"The code below illustrates how to use React Table with refine. If you have a running refine project already, use the example code below to display data from the the ",(0,a.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/categories"},"categories"),"resource of the ",(0,a.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/"},"fake REST API")," in tabular form using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package."),(0,a.kt)("p",null,"The fake REST API was created by the refine team to try out the examples in refine."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show CategoryList component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  const columns = React.useMemo<ColumnDef<any>[]>(\n    () => [\n      {\n        id: "id",\n        accessorKey: "id",\n        header: "Id",\n      },\n      {\n        id: "title",\n        accessorKey: "title",\n        header: "Title",\n      },\n      {\n        id: "actions",\n        accessorKey: "id",\n        header: "Actions",\n        cell: function render({ getValue }) {\n          return (\n            <div\n              style={{\n                display: "flex",\n                flexDirection: "row",\n                flexWrap: "wrap",\n                gap: "4px",\n              }}\n            >\n              <button\n                onClick={() => {\n                  show("categories", getValue() as string);\n                }}\n              >\n                Show\n              </button>\n              <button\n                onClick={() => {\n                  edit("categories", getValue() as string);\n                }}\n              >\n                Edit\n              </button>\n            </div>\n          );\n        },\n      },\n    ],\n    []\n  );\n\n  const { edit, show } = useNavigation();\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  setOptions((prev) => ({\n    ...prev,\n    meta: {\n      ...prev.meta,\n    },\n  }));\n\n  return (\n    <div style={{ padding: "16px" }}>\n      <div\n        style={{\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <h1>Categories List</h1>\n      </div>\n      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>\n        <table>\n          <thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <th key={header.id}>\n                    {!header.isPlaceholder &&\n                      flexRender(\n                        header.column.columnDef.header,\n                        header.getContext()\n                      )}\n                  </th>\n                ))}\n              </tr>\n            ))}\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => (\n              <tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                ))}\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n'))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table.png",alt:"react slick"})),(0,a.kt)("p",null,"As in the above example, refine's React Table adapter exports the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook. You need to create the table column and pass it as an argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook returns several methods and properties that you can use to retrieve the table headers and rows and add other useful table features. Be aware that the refine TanStack table adapter is headless. You are responsible for the markup and styling as in the above example."),(0,a.kt)("p",null,"The above example retrieves the data and displays it in a simple table. However, a typical table will need additional features such as pagination, sorting, and filtering. Let us explore how to add them in the sub-sections below."),(0,a.kt)("h3",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook returns an object with several methods such as ",(0,a.kt)("inlineCode",{parentName:"p"},"setPageIndex"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getPageCount"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"previousPage"),". You can use some of these methods to manage pagination in the table. The method names are pretty much self-explanatory."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show CategoryList component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  ...\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      tableQueryResult: { data: tableData },\n    },\n    //highlight-start\n    getState,\n    setPageIndex,\n    getCanPreviousPage,\n    getPageCount,\n    getCanNextPage,\n    nextPage,\n    previousPage,\n    setPageSize,\n    getColumn,\n    //highlight-end\n  } = useTable({\n    columns,\n  });\n\n  setOptions((prev) => ({\n    ...prev,\n    meta: {\n      ...prev.meta,\n    },\n  }));\n\n  return (\n    <div style={{ padding: "16px" }}>\n      ...\n      //highlight-start\n      <div style={{ marginTop: "12px" }}>\n        <button\n          onClick={() => setPageIndex(0)}\n          disabled={!getCanPreviousPage()}\n        >\n          {"<<"}\n        </button>\n        <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>\n          {"<"}\n        </button>\n        <button onClick={() => nextPage()} disabled={!getCanNextPage()}>\n          {">"}\n        </button>\n        <button\n          onClick={() => setPageIndex(getPageCount() - 1)}\n          disabled={!getCanNextPage()}\n        >\n          {">>"}\n        </button>\n        <span>\n          <strong>\n            {" "}\n            {getState().pagination.pageIndex + 1} / {getPageCount()}{" "}\n          </strong>\n        </span>\n        <span>\n          | Go to page :{" "}\n          <input\n            type="number"\n            defaultValue={getState().pagination.pageIndex + 1}\n            onChange={(e) => {\n              const page = e.target.value ? +e.target.value - 1 : 0;\n              setPageIndex(page);\n            }}\n          />\n        </span>{" "}\n        <select\n          value={getState().pagination.pageSize}\n          onChange={(e) => {\n            setPageSize(Number(e.target.value));\n          }}\n        >\n          {[10, 20, 30, 40, 50].map((pageSize) => (\n            <option key={pageSize} value={pageSize}>\n              Show {pageSize}\n            </option>\n          ))}\n        </select>\n      </div>\n      //highlight-end\n    </div>\n  );\n};\n'))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-pagination.png",alt:"react slick"})),(0,a.kt)("p",null,"After adding the changes above, you can now navigate to any page of the data. By default, pagination is handled on the server side. If you want pagination to be handled on the client side, set the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination.mode")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},'"client')," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useTable({\n  columns,\n  refineCoreProps: {\n    pagination: {\n      mode: "client",\n    },\n  },\n});\n')),(0,a.kt)("p",null,"If you set the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," state is automatically encoded in the URL parameters. Any change in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," state also updates the URL and vice versa."),(0,a.kt)("p",null,"The value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," by default. You can either set its value globally using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component or the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useTable({\n  refineCoreProps: {\n    syncWithLocation: true,\n  },\n});\n")),(0,a.kt)("h3",{id:"sorting"},"Sorting"),(0,a.kt)("p",null,"Similar to pagination, the object returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook has methods you can use to manage sorting. Let's explore how to sort data in this sub-section. Add the changes below to your code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  ...\n  return (\n    <div style={{ padding: "16px" }}>\n      <div\n        style={{\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <h1>Categories List</h1>\n      </div>\n      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>\n        <table>\n          <thead>\n          //highlight-start\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <th key={header.id}>\n                    {header.id === "title" ? (\n                      <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                        {{\n                          asc: " \ud83d\udd3c",\n                          desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                      </div>\n                    ) : (\n                      <div>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                      </div>\n                    )}\n                  </th>\n                ))}\n              </tr>\n            ))}\n          //highlight-end\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => (\n              <tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                ))}\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n      ...\n    </div>\n  );\n};\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-sorting.png",alt:"react slick"})),(0,a.kt)("p",null,"You can now click the Title header to sort the table in ascending or descending order of the title."),(0,a.kt)("h3",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"Similar to pagination and sorting explained in the previous two sections, the object returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook has methods for filtering."),(0,a.kt)("p",null,"When defining the table column, you can specify which columns can be filtered and specify the filter operator using the ",(0,a.kt)("inlineCode",{parentName:"p"},"filterOperator"),"\xa0property of the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"meta"),"\xa0object. The default filter operator is ",(0,a.kt)("inlineCode",{parentName:"p"},'"eq"')," for all fields."),(0,a.kt)("p",null,"Add the following changes to the code above."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show CategoryList component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  const columns = React.useMemo<ColumnDef<any>[]>(\n    () => [\n      {\n        id: "id",\n        accessorKey: "id",\n        header: "Id",\n      },\n      {\n        id: "title",\n        accessorKey: "title",\n        header: "Title",\n        //highlight-next-line\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "actions",\n        accessorKey: "id",\n        header: "Actions",\n        cell: function render({ getValue }) {\n          return (\n            <div\n              style={{\n                display: "flex",\n                flexDirection: "row",\n                flexWrap: "wrap",\n                gap: "4px",\n              }}\n            >\n              <button\n                onClick={() => {\n                  show("categories", getValue() as string);\n                }}\n              >\n                Show\n              </button>\n              <button\n                onClick={() => {\n                  edit("categories", getValue() as string);\n                }}\n              >\n                Edit\n              </button>\n            </div>\n          );\n        },\n      },\n    ],\n    []\n  );\n  ...\n  return (\n    <div style={{ padding: "16px" }}>\n      <div\n        style={{\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <h1>Categories List</h1>\n      </div>\n      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>\n        <table>\n          <thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <th key={header.id}>\n                    {header.id === "title" ? (\n                      <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                        {{\n                          asc: " \ud83d\udd3c",\n                          desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                        //highlight-start\n                        {header.column.getCanFilter() ? (\n                          <div>\n                            <input\n                              value={\n                                (header.column.getFilterValue() as string) ?? ""\n                              }\n                              onChange={(e) =>\n                                header.column.setFilterValue(e.target.value)\n                              }\n                            />\n                          </div>\n                        ) : null}\n                        //highlight-end\n                      </div>\n                    ) : (\n                      <div>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                      </div>\n                    )}\n                  </th>\n                ))}\n              </tr>\n            ))}\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => (\n              <tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                ))}\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n      ...\n    </div>\n  );\n};\n'))),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-filtering.png",alt:"react slick"})),(0,a.kt)("p",null,"You will now see a search field that you can use to search for an entry in the title field."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-refine.gif",alt:"react slick"})),(0,a.kt)("p",null,"There are several features of React Table that we haven't explored in this section. Check out the documentation."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"TanStack table is a headless, framework-agnostic library for managing data and data grids. Because it's framework-independent, you can use it with the most popular front-end frameworks like React, Vue, Svelte, Solid, and refine using adapters."),(0,a.kt)("p",null,'React Table is the TanStack adapter for React. It enables you to manage your table state in a "react way." It has all the features of the core TanStack table package and much more.'),(0,a.kt)("p",null,"refine also has an adapter that you can use to integrate TanStack table into your refine application."))}h.isMDXComponent=!0}}]);