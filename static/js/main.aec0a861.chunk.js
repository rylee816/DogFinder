(this["webpackJsonpdog-finder"]=this["webpackJsonpdog-finder"]||[]).push([[0],{24:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(1),c=t(16),r=t.n(c),i=(t(24),t(10)),o=t(18),l=t(2),d=t(7);t(25);var b=function(e){return Object(n.jsxs)("div",{className:"Dog",children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsxs)("h3",{children:[e.age," years old."]}),Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{onClick:e.clicked,src:e.image,alt:e.name})}),Object(n.jsxs)("div",{className:"Dog-facts",children:[e.facts.map((function(e){return Object(n.jsx)("h7",{children:e})})),Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("button",{className:"btn btn-sm btn-danger",children:"Go Back"})})]})]})};t(31);var j=function(e){return Object(n.jsx)("div",{className:"DogList Dog",children:e.dogs.map((function(e){return Object(n.jsxs)("div",{className:"dog",children:[Object(n.jsx)("h1",{children:e.name}),Object(n.jsx)("a",{href:"/dogs/".concat(e.name),children:Object(n.jsx)("img",{src:e.src,alt:""})}),Object(n.jsx)("hr",{className:"underline"})]})}))})};t(32),t(33);var m=function(e){var a=e.dogs.map((function(e){return Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(d.c,{className:"nav-link",exact:!0,to:"/dogs/".concat(e.name),children:e.name})},e.name)}));return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/dogs",children:"DogFinder"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsxs)(d.c,{className:"nav-link",exact:!0,to:"/dogs",children:["Home ",Object(n.jsx)("span",{className:"sr-only",children:"(current)"})]})}),a]}),Object(n.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(n.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})})]})]})};var h=function(){var e=Object(s.useState)([{name:"Whiskey",age:5,src:"https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",facts:["Whiskey loves eating popcorn.","Whiskey is a terrible guard dog.","Whiskey wants to cuddle with you!"]},{name:"Hazel",age:3,src:"https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvZ3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60",facts:["Hazel has soooo much energy!","Hazel is highly intelligent.","Hazel loves people more than other dogs."]},{name:"Tubby",age:4,src:"https://images.unsplash.com/photo-1528989712079-1506dd4ca2c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZmF0JTIwZG9nfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",facts:["Tubby is not the brightest dog","Tubby does not like walks or exercise.","Tubby loves eating food."]},{name:"Bizzle",age:19,src:"https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",facts:["Bizzle is loud","Bizzle is stinky","Bizzle loves potato chips","Bizzle identifies as a dog"]}]),a=Object(o.a)(e,2),t=a[0];a[1],console.log(t);var c=function(e){var a=e.match.params.name,s=t.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}));return s?Object(n.jsx)(b,Object(i.a)(Object(i.a)({},e),{},{dog:s,name:s.name,age:s.age,image:s.src,facts:s.facts})):Object(n.jsx)(l.a,{to:"/"})};return Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{dogs:t}),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{className:"display-3 text-center",children:"Dog Finder"}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(j,Object(i.a)(Object(i.a)({},e),{},{dogs:t}))}}),Object(n.jsx)(l.b,{exact:!0,path:"/dogs/:name",render:c}),Object(n.jsx)(l.b,{render:function(){return Object(n.jsx)("h1",{children:"Error 404: Not Found"})}})]})]})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(n.jsx)(d.a,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.aec0a861.chunk.js.map