"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",slug:"react-hot-toast",authors:"david_omotayo",tags:["react","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-hot-toast",source:"@site/blog/2023-10-06-react-hot-toast.md",title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",date:"2023-10-06T00:00:00.000Z",formattedDate:"October 6, 2023",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"refine",permalink:"/blog/tags/refine"}],readingTime:12.935,hasTruncateMarker:!1,authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],frontMatter:{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",slug:"react-hot-toast",authors:"david_omotayo",tags:["react","refine"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/social.png",hide_table_of_contents:!1},prevItem:{title:"Next.js vs React - A Beginner's Guide",permalink:"/blog/next-js-vs-react"},nextItem:{title:"Docker Swarm Mode Guide",permalink:"/blog/docker-swarm"},relatedPosts:[{title:"Svelte vs React Comparison",description:"We will compare the optimal performance of React and Svelte",permalink:"/blog/svelte-vs-react",formattedDate:"December 8, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:9.225,date:"2022-12-08T00:00:00.000Z"},{title:"React Ecosystem in 2024 - Sustaining Popularity",description:"We'll look at the React ecosystem and the tools and libraries that have been created to support React.",permalink:"/blog/react-js-ecosystem-in-2024",formattedDate:"January 11, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:25.36,date:"2024-01-11T00:00:00.000Z"},{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.1,date:"2022-12-14T00:00:00.000Z"}],authorPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.18,date:"2023-03-07T00:00:00.000Z"},{title:"Best React Admin Dashboard Libraries 2023",description:"We have curated a compilation of the 5 best React admin dashboard libraries that encompass all the essential features needed to create modern and feature-rich dashboards with minimal effort.",permalink:"/blog/react-admin-dashboard",formattedDate:"March 17, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:6.495,date:"2023-03-17T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.14,date:"2022-11-17T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is react-hot-toast",id:"what-is-react-hot-toast",level:2},{value:"What is refine",id:"what-is-refine",level:2},{value:"Set up a refine app",id:"set-up-a-refine-app",level:2},{value:"What is refine notification provider",id:"what-is-refine-notification-provider",level:2},{value:"Create custom notification provider with react-hot-toast",id:"create-custom-notification-provider-with-react-hot-toast",level:2},{value:"Install react-hot-toast",id:"install-react-hot-toast",level:3},{value:"Set up a notification provider",id:"set-up-a-notification-provider",level:3},{value:"Integrating react-hot-toast",id:"integrating-react-hot-toast",level:3},{value:"Positioning your toast notifications",id:"positioning-your-toast-notifications",level:3},{value:"Dismissing React Hot Toast Notifications",id:"dismissing-react-hot-toast-notifications",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live CodeSandbox Example",id:"live-codesandbox-example",level:2}],u=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const h={toc:d};function f(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Building data-intensive enterprise web applications entails coalescing numerous features that have proven to be cumbersome to develop."),(0,o.kt)("p",null,"An effective notification system ensures proper feedback for changes throughout your application, effortlessly improving the user experience, which has become a hallmark for modern applications."),(0,o.kt)("p",null,"Javascript libraries like React simplify the difficulty of building data-intensive web applications with their innovative architecture and developer-friendly syntax in an ever-evolving ecosystem. There's only so much React can do to provide a foolproof solution for building these kinds of applications. This is where frameworks like refine come into play."),(0,o.kt)("p",null,"Using a modular design, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," leverages the best of what the React ecosystem has to offer, ranging from design systems to state management and notification libraries, to create a multipurpose React toolkit. This toolkit not only makes building enterprise-grade applications like admin panels, dashboards, and B2B applications a breeze but also provides built-in notification providers for centralized notification management."),(0,o.kt)("p",null,"In this article, we'll introduce refine and explore how to set up a refine application and create a custom notification provider using the ",(0,o.kt)("a",{parentName:"p",href:"https://react-hot-toast.com/"},"react-hot-toast")," library."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-react-hot-toast"},"What is react-hot-toast")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-refine"},"What is refine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-up-a-refine-app"},"Set up a refine app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-refine-notification-provider"},"What is refine notification provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-custom-notification-provider-with-react-hot-toast"},"Create custom notification provider with react-hot-toast"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-react-hot-toast"},"Install react-hot-toast")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#set-up-a-notification-provider"},"Set up a notification provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#integrating-react-hot-toast"},"Integrating react-hot-toast")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#positioning-your-toast-notifications"},"Positioning your toast notifications")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dismissing-react-hot-toast-notifications"},"Dismissing React Hot Toast Notifications"))),(0,o.kt)("h2",{id:"what-is-react-hot-toast"},"What is react-hot-toast"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/hot-toast.png",alt:"react-hot-toast"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-hot-toast.com/"},"React-hot-toast")," is a lightweight and open-source notification library for React. Like other React toast libraries, this library is designed to mimic push notifications popularized by native operating systems, such as iOS and Android, in web applications."),(0,o.kt)("p",null,"The library provides a simple API for creating and displaying various types of notifications, including success, error, and loading messages in React or React-based frameworks like refine. With minimal setup requirements, you can easily incorporate a toast notification into your application using a component-based approach facilitated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster />")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast()")," function."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster />")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast()")," function are the primary building blocks of the react-hot-toast library. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster/>")," component creates a DOM element for rendering toast notifications and accepts several props and options that can be used to customize the appearance and behavior of the notifications. Below is the basic structure of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster />")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Toaster\n  position="top-center"\n  reverseOrder={false}\n  gutter={8}\n  containerClassName=""\n  containerStyle={{}}\n  toastOptions={{\n    // Define default options\n    className: "",\n    duration: 5000,\n    style: {\n      background: "#363636",\n      color: "#fff",\n    },\n  }}\n/>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"toast()")," function triggers a notification anywhere in your application. It accepts the toast message and an optional configuration object, also known as ",(0,o.kt)("inlineCode",{parentName:"p"},"ToastOptions"),", as its second argument."),(0,o.kt)("p",null,"This object is used to configure and customize the appearance and type of the toast notification. If a configuration object is provided, it will overwrite the ",(0,o.kt)("inlineCode",{parentName:"p"},"toastOptions")," object property on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster/>")," component."),(0,o.kt)("p",null,"The following example demonstrates how to invoke a toast notification with similar ",(0,o.kt)("inlineCode",{parentName:"p"},"toastoptions")," as the previous example with the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster/>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'toast("Hello World", {\n  className: "",\n  duration: 799,\n  style: {\n    background: "#363636",\n    color: "#fff",\n  },\n});\n')),(0,o.kt)("p",null,"Alternatively, the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast")," function offers the option to chain methods that invoke specific notification types, such as success, error, loading, and custom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'Success;\ntoast.success("Successfully created!");\n\nError;\ntoast.error("This is an error!");\n\nLoading;\ntoast.loading("Waiting...");\n\nCustom;\ntoast.custom(<div>Hello World</div>);\n')),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://react-hot-toast.com/docs/toast"},"react-hot-toast documentation")," to learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast")," function."),(0,o.kt)("h2",{id:"what-is-refine"},"What is refine"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," is an open-source, React-based framework that facilitates the development of enterprise web applications, such as admin panels, dashboards, and B2B applications. It is a feature-rich library that prioritizes simplicity by eliminating repetitive tasks for CRUD, routing, internalization, and networking."),(0,o.kt)("p",null,"refine is innately agnostic, which allows for the seamless integration of the highlighted features with widely used design systems, data fetching, state management, and complex form management libraries such as Material Design, Ant Design, React Query, React Hook Form, and more."),(0,o.kt)("p",null,"Additionally, refine's loosely coupled design allows for the seamless integration of various backend architectures, ranging from a simple REST API to complex headless CMSs and databases, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supabase"),(0,o.kt)("li",{parentName:"ul"},"AppWrite"),(0,o.kt)("li",{parentName:"ul"},"Strapi"),(0,o.kt)("li",{parentName:"ul"},"Airtable"),(0,o.kt)("li",{parentName:"ul"},"Hasura")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"documentation")," provides detailed information about refine and its architecture. You can start there to learn more about the refine framework. However, in the section below, we will explore how to set up a refine application from scratch."),(0,o.kt)("h2",{id:"set-up-a-refine-app"},"Set up a refine app"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/#playground"},"refine app Scaffolder")," is an efficient tool that allows you to create refine app seamlessly in your browser."),(0,o.kt)("p",null,"You can choose the libraries and frameworks you want to work with, and the tool will generate a boilerplate code for you.\nOnce you have completed these steps, you will be able to follow the on-screen instructions to create a refine application tailored to your preference."),(0,o.kt)("p",null,"For this tutorial, we will use the following configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React platform: Vite"),(0,o.kt)("li",{parentName:"ul"},"UI framework: Headless"),(0,o.kt)("li",{parentName:"ul"},"Backend: REST API"),(0,o.kt)("li",{parentName:"ul"},"Authentication Provider: No Auth")),(0,o.kt)("p",null,"After creating your project, give it a title or use the default title, and then build and download the Gzipped compressed file to your local computer."),(0,o.kt)("p",null,"Next, extract the downloaded compressed file using a zip file extractor and open the project in an IDE of your choice. Finally, run the following commands to install the project dependencies and start the development server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Install dependencies\nnpm install\n\n// Start development server\nnpm run dev\n")),(0,o.kt)("p",null,"Upon successfully starting the development server, navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:5173"},"http://localhost:5173")," on your browser of choice. Your project should render as shown in the image below."),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/initial-app.png",alt:"react-hot-toast"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"what-is-refine-notification-provider"},"What is refine notification provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/notification-provider/"},"refine notification provider")," is a feature that enables the display of notifications to users within a refine application. The primary purpose of the notification provider is to centralize the management of notifications, making it easy to display different types of notifications, such as \u201c",(0,o.kt)("strong",{parentName:"p"},"success"),"\u201d, \u201c",(0,o.kt)("strong",{parentName:"p"},"error"),"\u201d, and \u201c",(0,o.kt)("strong",{parentName:"p"},"progress"),"\u201d, to users from different parts of the application."),(0,o.kt)("p",null,"To understand how the notification provider works, we first need to comprehend how it interacts with the application. For every design system you choose to use in your refine application, whether it's Ant Design, Material Design, Mantine, or Chakra UI, refine provides a built-in notification provider that is passed as a prop to the refine component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@refinedev/antd";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={notificationProvider}\n  />\n);\n')),(0,o.kt)("p",null,"The code above uses refine's built-in notification provider for Ant Design. When a notification is triggered, refine will use the notification provider to invoke the Ant Design notification object and display notifications in the application. The same goes for the highlighted design systems."),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/w-refine-provider.png",alt:"react-hot-toast"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"The notification provider is an object with ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods, which refine uses to show and hide notifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const notificationProvider = {\n  open: () => {},\n  close: () => {},\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The")," ",(0,o.kt)("inlineCode",{parentName:"p"},"**open**")," ",(0,o.kt)("strong",{parentName:"p"},"and")," ",(0,o.kt)("inlineCode",{parentName:"p"},"**close**")," ",(0,o.kt)("strong",{parentName:"p"},"methods"),"\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method is invoked when refine needs to send a notification and provide feedback on users' actions in the application."),(0,o.kt)("p",null,"The method takes an object argument with several properties that are used to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", and a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," for the notification. The predefined abstract type below illustrates the properties available to the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'interface OpenNotificationParams {\n  key?: string;\n  message: string;\n  type: "success" | "error" | "progress";\n  description?: string;\n  cancelMutation?: () => void;\n  undoableTimeout?: number;\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"message"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," properties are the only required properties of the group; the rest are optional. The ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," properties accept the respective notification message and type from refine, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," property accepts a unique ID that helps refine identify active notifications and prevents it from displaying duplicate notifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export const notificationProvider = {\n      open: ({ key, message, type, undoableTimeout, cancelMutation }) => {\n       ...\n      },\n   };\n")),(0,o.kt)("p",null,"Unlike the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method, the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method only takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," argument, which contains the unique ID of the active notification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export const notificationProvider = {\n      ...\n      close: (key: any) => toast.dismiss(key),\n    };\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method uses this unique ID to terminate or dismiss the toast notification when the set duration has elapsed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The")," ",(0,o.kt)("inlineCode",{parentName:"p"},"**useNotification**")," ",(0,o.kt)("strong",{parentName:"p"},"hook"),"\nThe ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/useNotification/"},(0,o.kt)("inlineCode",{parentName:"a"},"useNotification"))," hook is a special function that allows you to manually invoke notifications anywhere in a refine application. It exports the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods from the notification provider, which allows you to show and hide notifications from any component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open, close } = useNotification();\n\n// Open notification\nopen({\n  type: "success",\n  message: "Success",\n  description: "This is a success message",\n});\n\n// close notification\nclose("notification-key");\n')),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"useNottification")," hook, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/useNotification/#basic-usage"},"documentation")," page."),(0,o.kt)("p",null,"We'll see the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods in action in the next section, as we explore how to create a custom notification provider Using the react-hot-toast library."),(0,o.kt)("h2",{id:"create-custom-notification-provider-with-react-hot-toast"},"Create custom notification provider with react-hot-toast"),(0,o.kt)("p",null,"The notification provider is not included in your refine application by default, depending on your project's configuration. It is only set up in projects configured to use a select design system. Therefore, headless projects without a design system, such as the project we created earlier, use refine's default notification provider, which does not add notification functionality to your application."),(0,o.kt)("p",null,"However, refine provides the option to create custom notification providers with the React toast library of your choice. Using the notification provider object as a single source of truth, you can create a notification provider with any toast library in the React ecosystem. In this section, we will demonstrate how you can create one with the react-hot-toast library."),(0,o.kt)("h3",{id:"install-react-hot-toast"},"Install react-hot-toast"),(0,o.kt)("p",null,"As a first step, open your IDE's command-line tool or use the built-in one on your machine, and ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," to your project's directory. Next, run the following command to install the react-hot-toast library as a dependency for your refine application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install react-hot-toast\n")),(0,o.kt)("h3",{id:"set-up-a-notification-provider"},"Set up a notification provider"),(0,o.kt)("p",null,"To set up a custom notification provider, we'll begin by creating a dedicated file to house all of our notification provider's logic."),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory, create a new folder and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"providers"),". You can choose any name you prefer, but it's recommended to use providers to maintain a coherent file structure."),(0,o.kt)("p",null,"Next, create a new file inside the newly created providers directory and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationProvider.tsx"),". Then, add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { NotificationProvider } from "@refinedev/core";\n\nexport const notificationProvider: NotificationProvider = {\n  open: ({ key, message, type }) => {},\n  close: (key: any) => {},\n};\n')),(0,o.kt)("p",null,"In the code above, we export a ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," object with the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods defined. Then we use the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," method type from refine's core to validate the object's structure and add type safety to the methods."),(0,o.kt)("p",null,"This is what the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," object type looks like under the hood:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface NotificationProvider {\n  open: (params: OpenNotificationParams) => void;\n  close: (key: string) => void;\n}\n")),(0,o.kt)("p",null,"We have created a base for our notification provider. Next, we will examine how to integrate the react-hot-toast library into the provider."),(0,o.kt)("h3",{id:"integrating-react-hot-toast"},"Integrating react-hot-toast"),(0,o.kt)("p",null,"As previously explained, the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast")," function invokes a toast notification when called. Therefore, we can declare it inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods and pass it the necessary arguments from each methods."),(0,o.kt)("p",null,"This way, when refine calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method, the toast method will be triggered, and a toast will be displayed on the screen. Similarly, when the notification time elapses, the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method is called, and the notification is removed."),(0,o.kt)("p",null,"Now, return to your code and update it with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { NotificationProvider } from "@refinedev/core";\nimport toast from "react-hot-toast";\n\nexport const notificationProvider: NotificationProvider = {\n  open: ({ key, message, type }) => {\n    switch (type) {\n      case "success":\n        toast.success(message, {\n          id: key,\n          position: "top-right",\n        });\n        break;\n      case "error":\n        toast.error(message, {\n          id: key,\n          position: "top-right",\n        });\n      default:\n        break;\n    }\n  },\n\n  close: (key: any) => {\n    toast.dismiss(key);\n  },\n};\n')),(0,o.kt)("p",null,"Here, we import the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast")," function from react-hot-toast and declare it inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," methods, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," arguments passed to it."),(0,o.kt)("p",null,"Since the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast")," function's toast options don't include a ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," property that we can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," argument from the ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," method to, we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statement to check the type of notification being invoked by refine and chain the appropriate method to the ",(0,o.kt)("inlineCode",{parentName:"p"},"toast")," function."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method, however, we chain a dismiss method to the toast function and pass it the key argument. This method uses the key to identify active toast notifications and terminates them when the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method is called."),(0,o.kt)("p",null,"After completing the steps above, your ",(0,o.kt)("inlineCode",{parentName:"p"},"NotificationProvider.tsx")," file should look as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { NotificationProvider } from "@refinedev/core";\nimport toast from "react-hot-toast";\n\nexport const notificationProvider: NotificationProvider = {\n  open: ({ key, message, type }) => {\n    switch (type) {\n      case "success":\n        toast.success(message, {\n          id: key,\n          position: "top-right",\n        });\n        break;\n      case "error":\n        toast.error(message, {\n          id: key,\n          position: "top-right",\n        });\n      default:\n        break;\n    }\n  },\n  close: (key: any) => {\n    toast.dismiss(key);\n  },\n};\n')),(0,o.kt)("p",null,"To complete the setup, we'll add the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," object and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Toaster/>")," component from react-hot-toast to the refine context via the ",(0,o.kt)("inlineCode",{parentName:"p"},"notificationProvider")," prop and the route ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,o.kt)("p",null,"To do this, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file and make the following modifications:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'...\n    import { Toaster } from "react-hot-toast";\n    import { notificationProvider } from "./providers/notificationProvider";\n\n\n    function App() {\n      ...\n      return (\n        <BrowserRouter>\n            <Refine\n              ...\n              notificationProvider={notificationProvider}\n              i18nProvider={i18nProvider}\n              ...\n            >\n              <Routes>\n                <Route\n                  element={\n                    <Layout>\n                      <Outlet />\n                      <Toaster />\n                    </Layout>\n                  }\n                >\n                ...\n                </Route>\n              </Routes>\n              <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n      );\n    }\n')),(0,o.kt)("p",null,"Congratulations! You have successfully created a custom notification provider for your refine application. You can now preview your notification by editing or creating a record on the dashboard."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Success notification")),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/success-min.gif",alt:"react-hot-toast"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"positioning-your-toast-notifications"},"Positioning your toast notifications"),(0,o.kt)("p",null,"React Hot Toast lets you easily pick where you want the toasts to show up on the screen. It has six ready-to-use spots, but you can also set your own spot using the 'position' setting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'toast.success("Successfully logged in", {\n  position: "top-left",\n  style: {\n    background: "green",\n    color: "#fff",\n  },\n});\n\ntoast.success("Successfully logged in", {\n  position: "top-center",\n  style: {\n    background: "green",\n    color: "#fff",\n  },\n});\n\ntoast.success("Successfully logged in", {\n  position: "top-right",\n  style: {\n    background: "green",\n    color: "#fff",\n  },\n});\n\ntoast.success("Successfully logged in", {\n  position: "bottom-left",\n  style: {\n    background: "green",\n    color: "#fff",\n  },\n});\n\ntoast.success("Successfully logged in", {\n  position: "bottom-center",\n  style: {\n    background: "green",\n    color: "#fff",\n  },\n});\n\ntoast.success("Successfully logged in", {\n  position: "bottom-right",\n  style: {\n    background: "green",\n    color: "#fff",\n  },\n});\n')),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-06-react-hot-toast/location-min.gif",alt:"react-hot-toast"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"dismissing-react-hot-toast-notifications"},"Dismissing React Hot Toast Notifications"),(0,o.kt)("p",null,"We can make toast notifications go away by setting a time or using the 'dismiss' button. To use this button, you need the toast's special ID or the toast itself. You usually get the toast when you show the notification. To get rid of one toast, use the 'dismiss' function with its ID. To get rid of all toasts, just use the function without any ID."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"As demonstrated in the article, refine abstracts the overhead complexity involved in building system-wide customizable notification systems in React applications. Given its robust functionalities and the highly customizable nature of the react-hot-toast library, you can improve on what\u2019s covered in this tutorial, or better yet, use any of the design systems with their built-in notification systems."),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live CodeSandbox Example"),(0,o.kt)(u,{path:"blog-react-hot-toast",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);