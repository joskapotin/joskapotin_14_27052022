"use strict";(self.webpackChunkjoskapotin_14_27052022=self.webpackChunkjoskapotin_14_27052022||[]).push([[196],{479:function(t,e,a){a.r(e);var r=a(504),n=a(278),s=a(390),i=a(184),o={id:"employee-table",columns:[{title:"First Name",data:"firstName"},{title:"Last Name",data:"lastName"},{title:"Start Date",data:"startDate"},{title:"Department",data:"department"},{title:"Date of Birth",data:"dateOfBirth"},{title:"Street",data:"street"},{title:"City",data:"city"},{title:"State",data:"state"},{title:"Zip Code",data:"zipCode"}],getData:s.f,pageSizeOptions:[10,25,50,100],sortBy:"firstName",sortDirection:"asc"};e.default=function(){return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)("h1",{children:"Current Employees"})}),(0,i.jsx)(n.Z,{dataTable:o}),(0,i.jsx)("p",{className:"text-center",children:(0,i.jsx)(r.rU,{to:"/",children:"Home"})})]})}},390:function(t,e,a){a.d(e,{f:function(){return o},l:function(){return u}});var r=a(214),n=a(861);function s(){return i.apply(this,arguments)}function i(){return i=(0,n.Z)((0,r.Z)().mark((function t(){var e,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1e3,t.next=3,new Promise((function(t){setTimeout(t,e)}));case 3:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function o(){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)((0,r.Z)().mark((function t(){var e,a,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:if(!(e=JSON.parse(localStorage.getItem("employees")))){t.next=5;break}return t.abrupt("return",e);case 5:return t.next=7,fetch("./mock/employees.json");case 7:return a=t.sent,t.next=10,a.json();case 10:return n=t.sent,t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){var e=JSON.parse(localStorage.getItem("employees"))||[];e.push(t),localStorage.setItem("employees",JSON.stringify(e))}}}]);
//# sourceMappingURL=196.97bbea3b.chunk.js.map