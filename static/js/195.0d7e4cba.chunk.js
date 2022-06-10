"use strict";(self.webpackChunkjoskapotin_14_27052022=self.webpackChunkjoskapotin_14_27052022||[]).push([[195],{195:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var t=n(885),i=n(504),r=n(701),s=n(791);var o=function(e){var a=(0,s.useState)(e),n=(0,t.Z)(a,2),i=n[0],r=n[1];return[i,function(){return r(!i)}]},l=n(413),m=n(184);function b(e){var a=e.type,n=void 0===a?"text":a,t=e.name,i=e.label,r=e.register;return(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{htmlFor:t,className:"form-label",children:i}),(0,m.jsx)("input",(0,l.Z)({id:t,type:n,className:"form-control"},r(t)))]})}var c=b;b.defaultProps={type:"text"};var v=function(e){var a=e.name,n=e.label,t=e.options,i=e.register;return(0,m.jsxs)("div",{className:"form-group mb-3",children:[(0,m.jsx)("label",{htmlFor:a,className:"form-label",children:n}),(0,m.jsx)("select",(0,l.Z)((0,l.Z)({id:a,name:a,className:"form-control"},i(a)),{},{children:t.map((function(e){return(0,m.jsx)("option",{value:e.abbreviation,children:e.name},"option-".concat(e.name))}))}))]})};var u=function(e){var a=e.children,n=e.title;return(0,m.jsxs)("fieldset",{className:"mb-3",children:[(0,m.jsx)("legend",{children:n}),a]})};function d(e){var a=e.type,n=void 0===a?"button":a,t=e.text;return(0,m.jsx)("div",{className:"mb-3",children:(0,m.jsx)("input",{type:n,className:"btn btn-primary mb-3",value:t})})}var p=d;function h(e){var a=e.children,n=e.title,t=e.isOpen,i=void 0!==t&&t,r=e.toggle,s=void 0===r?null:r;return i?(0,m.jsx)("div",{className:"modal",tabIndex:"-1",children:(0,m.jsx)("div",{className:"modal-dialog",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsxs)("div",{className:"modal-header",children:[(0,m.jsx)("h5",{className:"modal-title",children:n}),s&&(0,m.jsx)("button",{type:"button",className:"btn-close",onClick:s,"aria-label":"Close"})]}),(0,m.jsx)("div",{className:"modal-body",children:a}),(0,m.jsx)("div",{className:"modal-footer",children:s&&(0,m.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:s,children:"Close"})})]})})}):null}d.defaultProps={type:"text"};var x=h;h.defaultProps={isOpen:!1,toggle:null};var f={states:[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],departments:[{name:"Sales"},{name:"Marketing"},{name:"Engineering"},{name:"Human Resources"},{name:"Legal"}]},N=n(390);var j=function(){var e=o(!1),a=(0,t.Z)(e,2),n=a[0],s=a[1],l=(0,r.cI)(),b=l.register,d=l.handleSubmit;return(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)("h1",{children:"HRnet"}),(0,m.jsx)(i.rU,{to:"employee-list",children:"View Current Employees"}),(0,m.jsx)("h2",{children:"Create Employee"})]}),(0,m.jsxs)("form",{className:"create-employee-form mx-auto",onSubmit:d((function(e){(0,N.l)(e),s()})),children:[(0,m.jsx)(c,{type:"text",name:"firstName",label:"First Name",register:b}),(0,m.jsx)(c,{type:"text",name:"lastName",label:"Last Name",register:b}),(0,m.jsx)(c,{type:"data",name:"dateOfBirth",label:"Date of Birth",register:b}),(0,m.jsx)(c,{type:"data",name:"startDate",label:"Start Date",register:b}),(0,m.jsxs)(u,{title:"Adress",children:[(0,m.jsx)(c,{type:"text",name:"street",label:"Street",register:b}),(0,m.jsx)(c,{type:"text",name:"city",label:"City",register:b}),(0,m.jsx)(v,{name:"state",label:"State",options:f.states,register:b}),(0,m.jsx)(c,{type:"number",name:"zipCode",label:"Zip Code",register:b})]}),(0,m.jsx)(v,{name:"department",label:"Department",options:f.departments,register:b}),(0,m.jsx)(p,{type:"submit",text:"save"})]}),(0,m.jsx)(x,{title:"Employee Created",isOpen:n,toggle:s,children:(0,m.jsxs)("p",{children:["Employee was successfully created. You can view the employees ",(0,m.jsx)(i.rU,{to:"employee-list",children:"here"}),"."]})})]})}},390:function(e,a,n){n.d(a,{f:function(){return o},l:function(){return m}});var t=n(214),i=n(861);function r(){return s.apply(this,arguments)}function s(){return s=(0,i.Z)((0,t.Z)().mark((function e(){var a,n=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:1e3,e.next=3,new Promise((function(e){setTimeout(e,a)}));case 3:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)((0,t.Z)().mark((function e(){var a,n,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(!(a=JSON.parse(localStorage.getItem("employees")))){e.next=5;break}return e.abrupt("return",a);case 5:return e.next=7,fetch("./mock/employees.json");case 7:return n=e.sent,e.next=10,n.json();case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){var a=JSON.parse(localStorage.getItem("employees"))||[];a.push(e),localStorage.setItem("employees",JSON.stringify(a))}}}]);
//# sourceMappingURL=195.0d7e4cba.chunk.js.map