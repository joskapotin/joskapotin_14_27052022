import{a as b,r as C,j as N,b as f,L as O}from"./index.909d3780.js";import{g as D}from"./api.f2096d2a.js";const S=e=>!Number.isNaN(Date.parse(e)),I=({entries:e,sortBy:t,sortDirection:o})=>!o||!t?e:[...e].sort((a,r)=>{const n=S(a[t])?new Date(a[t]):a[t],i=S(r[t])?new Date(r[t]):r[t];return o==="asc"?n>i?1:-1:n<i?1:-1}),z=({entries:e,filter:t})=>t?e.filter(o=>Object.values(o).find(a=>a.toLowerCase().includes(t.toLowerCase()))):e;var c=(e=>(e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_PAGES="SET_TOTAL_PAGES",e.SET_PAGE_SIZE="SET_PAGE_SIZE",e.SET_FILTER="SET_FILTER",e.SET_SORTBY="SET_SORTBY",e.SET_SORTDIRECTION="SET_SORTDIRECTION",e))(c||{});function G(e,t){switch(t.type){case c.SET_CURRENT_PAGE:return{...e,currentPage:t.payload};case c.SET_TOTAL_PAGES:return{...e,totalPages:t.payload};case c.SET_PAGE_SIZE:{const o=Math.ceil(e.filterResults.length/t.payload);return{...e,pageSize:t.payload,totalPages:o}}case c.SET_FILTER:{const o=z({entries:e.entries,filter:t.payload}),a=Math.ceil(o.length/e.pageSize);return{...e,filter:t.payload,currentPage:1,totalPages:a,filterResults:o}}case c.SET_SORTBY:return{...e,sortBy:t.payload};case c.SET_SORTDIRECTION:return{...e,sortDirection:t.payload};default:return e}}var y={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=C,L=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,U=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,o){var a,r={},n=null,i=null;o!==void 0&&(n=""+o),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(i=t.ref);for(a in t)j.call(t,a)&&!M.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:L,type:e,key:n,ref:i,props:r,_owner:U.current}}E.Fragment=Q;E.jsx=T;E.jsxs=T;y.exports=E;const s=y.exports.jsx,u=y.exports.jsxs,k=b.exports.createContext(void 0);function V({initialState:e,children:t}){const[o,a]=b.exports.useReducer(G,e),r=b.exports.useMemo(()=>({state:o,dispatch:a}),[o,a]);return s(k.Provider,{value:r,children:t})}var v,F=new Uint8Array(16);function Y(){if(!v&&(v=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(F)}var $=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Z(e){return typeof e=="string"&&$.test(e)}var l=[];for(var x=0;x<256;++x)l.push((x+256).toString(16).substr(1));function J(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!Z(o))throw TypeError("Stringified UUID is invalid");return o}function m(e,t,o){e=e||{};var a=e.random||(e.rng||Y)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){o=o||0;for(var r=0;r<16;++r)t[o+r]=a[r];return t}return J(a)}const R={pageSizeOptions:[10,25,50,100]};function p(){const e=b.exports.useContext(k);if(e===void 0)throw new Error("useDataTableContext must be used within a DataTableContextProvider");return e}const q=e=>({type:c.SET_CURRENT_PAGE,payload:e}),K=e=>({type:c.SET_PAGE_SIZE,payload:e}),W=e=>({type:c.SET_FILTER,payload:e}),w=e=>({type:c.SET_SORTBY,payload:e}),A=e=>({type:c.SET_SORTDIRECTION,payload:e});function H(){const{state:e,dispatch:t}=p(),{pageSize:o}=e,a=r=>{t(K(parseInt(r.target.value,10)))};return console.info("pageSize rendered"),u("label",{htmlFor:"page-size",children:["show"," ",s("select",{className:"form-select d-inline-block w-auto","aria-label":"show entries",name:"page-size",onChange:a,value:o,children:R.pageSizeOptions.map(r=>s("option",{value:r,children:r},`option-${r}`))})," ","entries"]})}function X(){const{state:e,dispatch:t}=p(),{filter:o}=e,a=r=>{t(W(r.target.value))};return console.info("filter rendered"),u("label",{htmlFor:"search",id:"dataTable-search",children:["Search:"," ",s("input",{name:"search",className:"form-control d-inline-block w-auto","aria-label":"search","aria-describedby":"dataTable-search",type:"search",onChange:a,value:o})]})}function ee({label:e}){const{state:t,dispatch:o}=p(),{sortBy:a,sortDirection:r}=t,n=()=>{if(a===e.data)switch(r){case"asc":o(A("desc"));break;case"desc":o(A(void 0)),o(w(void 0));break;default:o(A("asc"))}else o(w(e.data)),o(A("asc"))},i=()=>{if(e.data!==a)return"sorting";if(r==="asc")return"sorting sorting_asc";if(r==="desc")return"sorting sorting_desc"};return console.info("column rendered"),s("th",{onClick:()=>n(),className:i(),children:e.title})}function te(){const{state:e}=p(),{labels:t}=e;return console.info("head rendered"),s("thead",{children:s("tr",{children:t.map(o=>s(ee,{label:o},`label-${m()}`))})})}function oe({entry:e}){const{state:t}=p(),{labels:o,sortBy:a}=t;return s("tr",{children:o.map(r=>s("td",{className:r.data===a?"current-label":"",children:e[r.data]},`${r.data}-${m()}`))})}function ae(){const{state:e}=p(),{currentPage:t,pageSize:o,filterResults:a,sortBy:r,sortDirection:n}=e,d=b.exports.useMemo(()=>I({entries:a,sortBy:r,sortDirection:n}),[a,r,n]).slice((t-1)*o,t*o);return console.info("body rendered"),s("tbody",{className:"table-group-divider",children:d.map(g=>s(oe,{entry:g},`row-${m()}`))})}function re({tableId:e}){return console.info("table rendered"),s("div",{className:"table-responsive",children:u("table",{className:"dataTable table table-striped",id:e,children:[s(te,{}),s(ae,{})]})})}function ne(){const{state:{entries:e,currentPage:t,totalPages:o,pageSize:a,filterResults:r}}=p(),n=e.length,i=r.length,d=i>0?(t-1)*a+1:0,g=a>i||t===o?i:t*a,h=i!==n;return console.info("info rendered"),u("p",{className:"dataTable_info",role:"status","aria-live":"polite",children:["Showing ",d," to ",g," of ",i," entries ",h&&u("span",{children:["(filtered from ",n," total entries)"]})]})}function ie({tableId:e,pageIndex:t,text:o}){const{state:a,dispatch:r}=p(),{currentPage:n,totalPages:i}=a,d=n===1&&t===0||n===i&&t===i+1||i<2,g=n===t,h=()=>{switch(t){case 0:return n-1;case i+1:return n+1;default:return t}},_=()=>{const P=h();r(q(P))};return console.info("page-item rendered"),s("li",{className:"page-item",children:s("button",{type:"button",className:`page-link ${g&&"active"} ${d&&"disabled"}`,"aria-controls":e,onClick:()=>_(),disabled:d,children:o})})}function se({tableId:e}){const{state:t}=p(),{totalPages:o}=t,a=b.exports.useCallback(()=>{const r=[];for(let n=0;n<=o+1;n+=1){let i=n.toString();n===0&&(i="Previous"),n===o+1&&(i="Next"),r.push(s(ie,{tableId:e,pageIndex:n,text:i},`page-${m()}`))}return r},[o,e]);return console.info("paginate rendered"),s("nav",{"aria-label":"data-table page navigation",children:s("ul",{className:"pagination",children:a()})})}function le({data:e}){const t=m(),{labels:o,entries:a,sortBy:r,sortDirection:n}=e,i=R.pageSizeOptions[0],d=Math.ceil(a.length/i);return s(V,{initialState:{labels:o,entries:a,currentPage:1,pageSize:i,totalPages:d,filter:"",filterResults:a,sortBy:r,sortDirection:n},children:u("div",{className:"dataTable_wrapper d-grid",children:[u("div",{className:"dataTable_header mt-3 mb-2 d-flex justify-content-between align-items-center",children:[s(H,{}),s(X,{})]}),s(re,{tableId:t}),u("div",{className:"dataTable_footer mt-3 mb-2 d-flex justify-content-between",children:[s(ne,{}),s(se,{tableId:t})]})]})})}function ce(e,t=[]){const[o,a]=b.exports.useState(!0),[r,n]=b.exports.useState(),[i,d]=b.exports.useState(),g=b.exports.useCallback(()=>{a(!0),n(void 0),d(void 0),e().then(d).catch(n).finally(()=>a(!1))},t);return b.exports.useEffect(()=>{g()},[g]),{loading:o,error:r,value:i}}function ge(){const{loading:e,error:t,value:o}=ce(D);return N("div",{className:"container",children:[f("div",{className:"text-center",children:f("h1",{children:"Current Employees"})}),e&&f("div",{children:"Loading..."}),o&&f(le,{data:o}),t&&f("div",{children:t}),f("p",{className:"text-center",children:f(O,{to:"/",children:"Home"})})]})}export{ge as default};
