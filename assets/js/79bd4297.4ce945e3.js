"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61256],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});t(67294);var r=t(3905);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={},s=void 0,u={unversionedId:"guides-concepts/authentication/auth-provider-interface",id:"guides-concepts/authentication/auth-provider-interface",title:"auth-provider-interface",description:"",source:"@site/docs/guides-concepts/authentication/auth-provider-interface.md",sourceDirName:"guides-concepts/authentication",slug:"/guides-concepts/authentication/auth-provider-interface",permalink:"/docs/guides-concepts/authentication/auth-provider-interface",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/authentication/auth-provider-interface.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1704202728,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{}},l={},p=[],d={toc:p};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Refine, AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n  register: async (params) => {\n    if (params.email === authCredentials.email && params.password) {\n      localStorage.setItem("email", params.email);\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    }\n    return {\n      success: false,\n      error: {\n        message: "Register failed",\n        name: "Invalid email or password",\n      },\n    };\n  },\n  login: async ({ providerName, email }) => {\n    if (providerName === "google") {\n      window.location.href = "https://accounts.google.com/o/oauth2/v2/auth";\n      return {\n        success: true,\n      };\n    }\n\n    if (providerName === "github") {\n      window.location.href = "https://github.com/login/oauth/authorize";\n      return {\n        success: true,\n      };\n    }\n\n    if (email === authCredentials.email) {\n      localStorage.setItem("email", email);\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    }\n\n    return {\n      success: false,\n      error: {\n        message: "Login failed",\n        name: "Invalid email or password",\n      },\n    };\n  },\n  check: async () => {\n    return localStorage.getItem("email")\n      ? {\n          authenticated: true,\n        }\n      : {\n          authenticated: false,\n          error: {\n            message: "Check failed",\n            name: "Not authenticated",\n          },\n          logout: true,\n          redirectTo: "/login",\n        };\n  },\n  logout: async () => {\n    localStorage.removeItem("email");\n    return {\n      success: true,\n      redirectTo: "/login",\n    };\n  },\n  onError: async (error) => {\n    console.error(error);\n    return { error };\n  },\n  getIdentity: async () => ({\n    id: 1,\n    name: "Jane Doe",\n    avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",\n  }),\n  updatePassword: async (params) => {\n    if (params.password === authCredentials.password) {\n      //we can update password here\n      return {\n        success: true,\n      };\n    }\n    return {\n      success: false,\n      error: {\n        message: "Update password failed",\n        name: "Invalid password",\n      },\n    };\n  },\n  forgotPassword: async (params) => {\n    if (params.email === authCredentials.email) {\n      //we can send email with reset password link here\n      return {\n        success: true,\n      };\n    }\n    return {\n      success: false,\n      error: {\n        message: "Forgot password failed",\n        name: "Invalid email",\n      },\n    };\n  },\n  getPermissions: async () => ["admin"],\n};\n')))}f.isMDXComponent=!0}}]);