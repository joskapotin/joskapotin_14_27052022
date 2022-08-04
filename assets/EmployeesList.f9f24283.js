import{d as m,r as D,a as I,j as f,e as L,L as k}from"./index.fe4332f0.js";import{u as v,a as j,b as $,R as z}from"./selectors.ba66e7a1.js";const R=e=>!Number.isNaN(Date.parse(e)),F=({entries:e,sortBy:t,sortDirection:a})=>!a||!t?e:[...e].sort((r,n)=>{const s=R(r[t])?new Date(r[t]):r[t],i=R(n[t])?new Date(n[t]):n[t];return a==="asc"?s>i?1:-1:s<i?1:-1}),A=({entries:e,filter:t})=>t?e.filter(a=>Object.values(a).find(r=>r.toLowerCase().includes(t.toLowerCase()))):e;var c=(e=>(e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_PAGES="SET_TOTAL_PAGES",e.SET_PAGE_SIZE="SET_PAGE_SIZE",e.SET_FILTER="SET_FILTER",e.SET_SORTBY="SET_SORTBY",e.SET_SORTDIRECTION="SET_SORTDIRECTION",e))(c||{});function G(e,t){switch(t.type){case c.SET_CURRENT_PAGE:return{...e,currentPage:t.payload};case c.SET_TOTAL_PAGES:return{...e,totalPages:t.payload};case c.SET_PAGE_SIZE:{const a=Math.ceil(e.filterResults.length/t.payload);return{...e,pageSize:t.payload,totalPages:a}}case c.SET_FILTER:{const a=A({entries:e.entries,filter:t.payload}),r=Math.ceil(a.length/e.pageSize);return{...e,filter:t.payload,currentPage:1,totalPages:r,filterResults:a}}case c.SET_SORTBY:return{...e,sortBy:t.payload};case c.SET_SORTDIRECTION:return{...e,sortDirection:t.payload};default:return e}}var b={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U=D,B=Symbol.for("react.element"),V=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,Y=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,a){var r,n={},s=null,i=null;a!==void 0&&(s=""+a),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)M.call(t,r)&&!Z.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:B,type:e,key:s,ref:i,props:n,_owner:Y.current}}T.Fragment=V;T.jsx=N;T.jsxs=N;b.exports=T;const o=b.exports.jsx,p=b.exports.jsxs,P=m.exports.createContext(void 0);function H({initialState:e,children:t}){const[a,r]=m.exports.useReducer(G,e),n=m.exports.useMemo(()=>({state:a,dispatch:r}),[a,r]);return o(P.Provider,{value:n,children:t})}var E,q=new Uint8Array(16);function J(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(q)}var W=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function X(e){return typeof e=="string"&&W.test(e)}var l=[];for(var y=0;y<256;++y)l.push((y+256).toString(16).substr(1));function K(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!X(a))throw TypeError("Stringified UUID is invalid");return a}function g(e,t,a){e=e||{};var r=e.random||(e.rng||J)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){a=a||0;for(var n=0;n<16;++n)t[a+n]=r[n];return t}return K(r)}const x={pageSizeOptions:[10,25,50,100]};function d(){const e=m.exports.useContext(P);if(e===void 0)throw new Error("useDataTableContext must be used within a DataTableContextProvider");return e}const Q=e=>({type:c.SET_CURRENT_PAGE,payload:e}),ee=e=>({type:c.SET_PAGE_SIZE,payload:e}),te=e=>({type:c.SET_FILTER,payload:e}),C=e=>({type:c.SET_SORTBY,payload:e}),S=e=>({type:c.SET_SORTDIRECTION,payload:e});function ae(){const{state:e,dispatch:t}=d(),{pageSize:a}=e;return p("label",{htmlFor:"page-size",children:["show"," ",o("select",{className:"form-select d-inline-block w-auto","aria-label":"show entries",name:"page-size",onChange:n=>{t(ee(parseInt(n.target.value,10)))},value:a,children:x.pageSizeOptions.map(n=>o("option",{value:n,children:n},`option-${n}`))})," ","entries"]})}function re(){const{state:e,dispatch:t}=d(),{filter:a}=e;return p("label",{htmlFor:"search",id:"dataTable-search",children:["Search:"," ",o("input",{name:"search",className:"form-control d-inline-block w-auto","aria-label":"search","aria-describedby":"dataTable-search",type:"search",onChange:n=>{t(te(n.target.value))},value:a})]})}function ne({label:e}){const{state:t,dispatch:a}=d(),{sortBy:r,sortDirection:n}=t,s=()=>{if(r===e.data)switch(n){case"asc":a(S("desc"));break;case"desc":a(S(void 0)),a(C(void 0));break;default:a(S("asc"))}else a(C(e.data)),a(S("asc"))};return o("th",{onClick:()=>s(),className:(()=>{if(e.data!==r)return"sorting";if(n==="asc")return"sorting sorting_asc";if(n==="desc")return"sorting sorting_desc"})(),children:e.title})}function se(){const{state:e}=d(),{labels:t}=e;return o("thead",{children:o("tr",{children:t.map(a=>o(ne,{label:a},`label-${g()}`))})})}function oe({entry:e}){const{state:t}=d(),{labels:a,sortBy:r}=t;return o("tr",{children:a.map(n=>o("td",{className:n.data===r?"current-label":"",children:e[n.data]},`${n.data}-${g()}`))})}function ie(){const{state:e}=d(),{currentPage:t,pageSize:a,filterResults:r,sortBy:n,sortDirection:s}=e,u=m.exports.useMemo(()=>F({entries:r,sortBy:n,sortDirection:s}),[r,n,s]).slice((t-1)*a,t*a);return o("tbody",{className:"table-group-divider",children:u.map(h=>o(oe,{entry:h},`row-${g()}`))})}function le({tableId:e}){return o("div",{className:"table-responsive",children:p("table",{className:"dataTable table table-striped",id:e,children:[o(se,{}),o(ie,{})]})})}function ce(){const{state:{entries:e,currentPage:t,totalPages:a,pageSize:r,filterResults:n}}=d(),s=e.length,i=n.length,u=i>0?(t-1)*r+1:0,h=r>i||t===a?i:t*r;return p("p",{className:"dataTable_info",role:"status","aria-live":"polite",children:["Showing ",u," to ",h," of ",i," entries ",i!==s&&p("span",{children:["(filtered from ",s," total entries)"]})]})}function de({tableId:e,pageIndex:t,text:a}){const{state:r,dispatch:n}=d(),{currentPage:s,totalPages:i}=r,u=s===1&&t===0||s===i&&t===i+1||i<2,h=s===t,_=()=>{switch(t){case 0:return s-1;case i+1:return s+1;default:return t}},w=()=>{const O=_();n(Q(O))};return o("li",{className:"page-item",children:o("button",{type:"button",className:`page-link ${h&&"active"} ${u&&"disabled"}`,"aria-controls":e,onClick:()=>w(),disabled:u,children:a})})}function ue({tableId:e}){const{state:t}=d(),{totalPages:a}=t,r=m.exports.useCallback(()=>{const n=[];for(let s=0;s<=a+1;s+=1){let i=s.toString();s===0&&(i="Previous"),s===a+1&&(i="Next"),n.push(o(de,{tableId:e,pageIndex:s,text:i},`page-${g()}`))}return n},[a,e]);return o("nav",{"aria-label":"data-table page navigation",children:o("ul",{className:"pagination",children:r()})})}function pe({data:e}){const t=g(),{labels:a,entries:r,sortBy:n,sortDirection:s}=e,i=x.pageSizeOptions[0],u=Math.ceil(r.length/i);return o(H,{initialState:{labels:a,entries:r,currentPage:1,pageSize:i,totalPages:u,filterResults:r,sortBy:n,sortDirection:s},children:p("div",{className:"dataTable_wrapper d-grid",children:[p("div",{className:"dataTable_header mt-3 mb-2 d-flex justify-content-between align-items-center",children:[o(ae,{}),o(re,{})]}),o(le,{tableId:t}),p("div",{className:"dataTable_footer mt-3 mb-2 d-flex justify-content-between",children:[o(ce,{}),o(ue,{tableId:t})]})]})})}function me(){const{isLoading:e,isError:t,message:a}=v(j),r=v($);return I("div",{className:"container",children:[f("div",{className:"text-center",children:f("h1",{children:"Current Employees"})}),e?f(L,{}):t?f("p",{children:a}):f(pe,{data:{labels:[{title:"First Name",data:"firstName"},{title:"Last Name",data:"lastName"},{title:"Start Date",data:"startDate"},{title:"Department",data:"department"},{title:"Date of Birth",data:"dateOfBirth"},{title:"Street",data:"street"},{title:"City",data:"city"},{title:"State",data:"state"},{title:"Zip Code",data:"zipCode"}],entries:r,sortBy:"firstName",sortDirection:"asc"}}),f("p",{className:"text-center",children:f(k,{to:z.HOME,children:"Home"})})]})}export{me as default};
