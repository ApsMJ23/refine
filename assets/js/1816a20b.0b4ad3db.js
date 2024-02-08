"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",slug:"docker-exec",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/social.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/docker-exec",source:"@site/blog/2023-08-18-docker-exec.md",title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",date:"2023-08-18T00:00:00.000Z",formattedDate:"August 18, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.995,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",slug:"docker-exec",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/social.png",hide_table_of_contents:!1},prevItem:{title:"Creating Polished Content with React Markdown",permalink:"/blog/react-markdown"},nextItem:{title:"How to set up a WebSocket connection with Node.js and React.js?",permalink:"/blog/react-websocket-tutorial-nodejs"},relatedPosts:[{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"October 26, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.1,date:"2023-10-26T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.705,date:"2022-11-27T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",permalink:"/blog/docker-volumes",formattedDate:"July 11, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.64,date:"2023-07-11T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"November 3, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.02,date:"2022-11-03T00:00:00.000Z"},{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",permalink:"/blog/kubernetes-persistent-volumes",formattedDate:"December 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.32,date:"2023-12-14T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"3. Understanding Docker Exec Command",id:"3-understanding-docker-exec-command",level:2},{value:"Interactive Mode with Docker Exec",id:"interactive-mode-with-docker-exec",level:2},{value:"Running Specific Commands in a Docker Container",id:"running-specific-commands-in-a-docker-container",level:2},{value:"Running a Background Process in a Docker Container",id:"running-a-background-process-in-a-docker-container",level:2},{value:"How to Exit a Docker Exec Command",id:"how-to-exit-a-docker-exec-command",level:2},{value:"Common Issues and Troubleshooting",id:"common-issues-and-troubleshooting",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function p(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Docker has evolved into a critical tool in the modern industry, simplifying software development and deployment. Its containerization ensures that applications behave consistently across environments, while its efficiency and scalability result in shorter cycles and lower costs. When building or deploying containers, you'll frequently need to inspect or debug a running container's current state."),(0,a.kt)("p",null,"Docker provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec")," command to launch applications in already running containers. It enables you to launch a session within the container's default directory. When the container is restarted, sessions created with the exec command are not resumed. Docker exec is a command that allows any provided command to be executed within a Docker container. This implies that the inputs supplied to it will be interpreted as commands to be executed within the container. It improves application availability, performance and efficiency by enabling real-time updates and continuous monitoring of containers."),(0,a.kt)("p",null,"Steps we'll cover in this guide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#3-understanding-docker-exec-command"},"Understanding Docker Exec Command")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#interactive-mode-with-docker-exec"},"Interactive Mode with Docker Exec")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-specific-commands-in-a-docker-container"},"Running Specific Commands in a Docker Container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-a-background-process-in-a-docker-container"},"Running a Background Process in a Docker Container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-exit-a-docker-exec-command"},"How to Exit a Docker Exec Command")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#common-issues-and-troubleshooting"},"Common Issues and Troubleshooting"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker Installation:")," Docker must be installed on your machine. Docker's official website includes installation instructions for many operating systems. In order to install Docker on your machine, please visit: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"https://docs.docker.com/engine/install/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Understanding of Docker Command Line Interface:")," Docker is generally administered via the command line, thus, a basic understanding of the command line interface is required. Understanding fundamental commands and navigating the terminal will be useful. Please make sure to prepend the sudo commands in this guide if you are going to use Docker as a root user."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Running Container:")," We need to create a container for running the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec"),' command. For example, we create a "',(0,a.kt)("strong",{parentName:"p"},"test-container"),'" by running the following command:'),(0,a.kt)("p",null,"Running Container Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'docker run -d --name container-name alpine watch "date >> /var/log/date.log"\n')),(0,a.kt)("p",null,"While creating the container, we utilized a few options like '",(0,a.kt)("strong",{parentName:"p"},"-d"),"' to run the container by detaching it from the terminal. We created an alpine container and used 'watch' to iteratively run the command \"",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"date ",">",">"," /var/log/date.log")),'". The provided command inside the docker run command will print the date in the logs after every two seconds.'),(0,a.kt)("p",null,"After successfully installing Docker, use the following command to check the version:"),(0,a.kt)("p",null,"Detailed Docker Version Information Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker version\n")),(0,a.kt)("p",null,"This docker version command provides further information about the Docker engine version present on your system."),(0,a.kt)("p",null,"Alternatively, you can\xa0execute the following command, which simply outputs the docker version and no other information:"),(0,a.kt)("p",null,"Only Docker Version Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Docker \u2013version\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image1.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"3-understanding-docker-exec-command"},"3. Understanding Docker Exec Command"),(0,a.kt)("p",null,"Docker exec Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker exec <options> <container_name_or_container_id> <command>\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"docker exec:")," The docker exec keyword must be used to run a command on a currently running Docker container.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\\<options",">",":")," Depending on the scenario, we may specify several flags that are compatible with the docker exec command as an option. Each option serves the following purpose:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-d, --detach=true","|","false"))),(0,a.kt)("p",null,"Detached mode is to run the command in the background. The default value is false."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'--detach-keys=""'))),(0,a.kt)("p",null,"Override the key sequence to detach the container. The format can be a single character like ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"[","a-Z","]"," or ctrl-\\<value",">"))," where ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\\<value",">"))," is one of",(0,a.kt)("em",{parentName:"p"},": ",(0,a.kt)("strong",{parentName:"em"},"a-z, @, ^, ","[",", , or ","_"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-i, --interactive=true","|","false"))),(0,a.kt)("p",null,"Keep STDIN open even if not attached. The default is false."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"--privileged=true","|","false"))),(0,a.kt)("p",null,"Give the process extended capabilities when running in a container. The default is false. Without this flag, the process run by the docker exec in a running container has the same capabilities as the container, which may be limited. Set --privileged to give all capabilities to the process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"-t, --tty=true","|","false"))),(0,a.kt)("p",null,"Allocate a pseudo-TTY. The default is false."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'-u, --user=""'))),(0,a.kt)("p",null,"Sets the username or UID used and, optionally the group name or GID for the specified command."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\\<container_name_or_container_id ",">",":")," You can define container information, such as a container ID or name, with the exec command to assist in identifying the running container in the Docker environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\\<command",">",":")," We can define the command in the exec command as needed, and that specific command will run inside the container."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples of different ",(0,a.kt)("inlineCode",{parentName:"strong"},"docker exec")," commands")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")," Creating the file inside the container into the root directory by using '",(0,a.kt)("strong",{parentName:"p"},"docker exec"),"'."),(0,a.kt)("p",null,"Docker exec Create New File command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker exec -i test-container touch /newfile\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image2.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")," We want to list all the running processes within the specific container by using 'docker exec'."),(0,a.kt)("p",null,"List Running Processes Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker exec -i test-container ps\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image3.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"interactive-mode-with-docker-exec"},"Interactive Mode with Docker Exec"),(0,a.kt)("p",null,'"-i" or "--interactive" will Ensure that STDIN is opened if you have not attached it, and "',(0,a.kt)("strong",{parentName:"p"},"-t"),'" or ',(0,a.kt)("strong",{parentName:"p"},'"-tty'),"\" enables users to interact with the container's shell interactively. A combination of flags (-i and -t) can be used to indicate that the command should be run interactively using a pseudo-TTY (-t terminal) attached to the container. This will allow you to send commands and get responses from the container."),(0,a.kt)("p",null,"We are using the Alpine container, so let us access the shell of the container to run the commands and get responses interactively."),(0,a.kt)("p",null,"Interactive Mode Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker exec -it test-container /bin/sh\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image4.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"running-specific-commands-in-a-docker-container"},"Running Specific Commands in a Docker Container"),(0,a.kt)("p",null,"Let's go through how to use some particular commands using docker exec. As you know that we can use the docker exec command, followed by the container ID or container name and the command we want to execute within that docker container."),(0,a.kt)("p",null,"Now, let's take an example if we want to list the content of the current working directory in the container, so we will use the \"",(0,a.kt)("strong",{parentName:"p"},"ls"),'" switch with ',(0,a.kt)("inlineCode",{parentName:"p"},"docker exec"),'. After listing every item in the current directory, we need to run a command in a specific directory from the list. To do this, we will use the "',(0,a.kt)("strong",{parentName:"p"},"--workdir"),'" option with the command to print the directory name of the container where our command is being executed. Specifically, we will run the ',(0,a.kt)("inlineCode",{parentName:"p"},"pwd")," command inside the container along with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec"),' and the "',(0,a.kt)("strong",{parentName:"p"},"--workdir"),'" option to print the directory name where our command is being executed.'),(0,a.kt)("p",null,'At last, just to ensure the access rights to run other commands further, we want to identify the current user, so we will run the "whoami" command along with the "',(0,a.kt)("strong",{parentName:"p"},"docker exec"),"\" to print the current user's username."),(0,a.kt)("p",null,"Specific Commands using docker exec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker exec test-container ls\n\ndocker exec \u2013workdir /home test-container pwd\n\ndocker exec test-container whomami\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image5.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"running-a-background-process-in-a-docker-container"},"Running a Background Process in a Docker Container"),(0,a.kt)("p",null,'By using this command, you can ask the Docker engine to remain executing the command while you perform another operation by asking it to execute it within the container. When you run a container in detached mode with the "',(0,a.kt)("strong",{parentName:"p"},"-d"),"\" option, Docker launches the container in the background and returns control to the command-line tool you're currently using."),(0,a.kt)("p",null,"Let's run a command using docker exec that will continuously add logs in the background, even if we got control over the terminal and enabled it to run other commands."),(0,a.kt)("p",null,"Run Process in Background Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"docker exec -d test-container bin/sh -c \"while true; do echo 'Background Job Running Successfully'>> /var/log/container_logs.log; sleep 1; done\"\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image6.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"500px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image7.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"how-to-exit-a-docker-exec-command"},"How to Exit a Docker Exec Command"),(0,a.kt)("p",null,"To exit the container's shell, you can simply type the \"",(0,a.kt)("strong",{parentName:"p"},"exit"),'" command or press "',(0,a.kt)("strong",{parentName:"p"},"Ctrl + D"),'". This will bring you back to the command interpreter running on your own computer.'),(0,a.kt)("p",null,"Exit Container Shell Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"exit;\n")),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image8.png",alt:"docker exec"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"common-issues-and-troubleshooting"},"Common Issues and Troubleshooting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sometimes, you might face an error while utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec")," command, and this can be because the container is not running or you are typing the incorrect name or ID of the container. To avoid this issue, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," to list all containers that are running. This way, you can identify whether the specified container is running or not. Also, you can cross-check the name from the list of running containers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'If you try to run a command within the container and receive, a "permission denied" message. It\'s conceivable that the user running the ',(0,a.kt)("inlineCode",{parentName:"p"},"docker exec")," command lacks necessary container access rights. The -u option is used to identify the user for the purpose of checking access privileges.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you are attempting to run a command that is not supported inside the container, try using the command once more in the container's interactive shell. You can switch to the container's shell by utilizing ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/bash"),", or any other, according to availability.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The command will either block the terminal, or it will stop immediately. This may happen when the command is running in the foreground, waiting for input or output, or when it is running in the background and abruptly stops. To resolve this, use "',(0,a.kt)("strong",{parentName:"p"},"-d"),'" to run the command\xa0in detached mode in the background.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Make sure that your container is correctly configured and that you have the required dependencies set up. For any problems that might be encountered in "docker exec", check the container\'s docker file and configuration files.'),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-08-18-docker-exec/image9.png",alt:"docker exec"})))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can use this functionality to communicate with containers and execute various actions without having to create a new container instance.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This command will allow you to execute commands on your container's shell, allowing you to manage and debug it more effectively.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec")," command provides a versatile and fast way to communicate with Docker containers, whether you need to specify commands, access the container shell, or run scripts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker exec")," is a valuable tool for more efficiently managing and scaling applications when paired with an automation tool or container orchestration platform like Docker Compose or Kubernetes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Docker ecosystem includes an active community that provides a plethora of resources, tutorials, and best practices. By playing with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker exec"),", you will have the opportunity to learn from professionals and share your experiences with other enthusiasts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The Docker Exec command creates a secure environment for testing. You may start a new shell session within the container and experiment with different commands, configurations, and settings without impacting the host system or other containers. This sandboxed method reduces risks while encouraging creativity."))))}p.isMDXComponent=!0}}]);