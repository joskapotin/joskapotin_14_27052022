import{a as g,r as O,j as I,b as f,L}from"./index.943df59e.js";import{g as D}from"./api.43632d1e.js";const _={pageSizeOptions:[10,25,50,100]};var d=(e=>(e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_PAGES="SET_TOTAL_PAGES",e.SET_PAGE_SIZE="SET_PAGE_SIZE",e.SET_FILTER="SET_FILTER",e.SET_FILTER_RESULTS="SET_FILTER_RESULTS",e.SET_SORTBY="SET_SORTBY",e.SET_SORTDIRECTION="SET_SORTDIRECTION",e))(d||{});const G={labels:[],entries:[],currentPage:1,totalPages:0,pageSize:_.pageSizeOptions[0],filter:"",filterResults:0,sortBy:"",sortDirection:"none"};function z(e,t){switch(t.type){case d.SET_CURRENT_PAGE:return{...e,currentPage:t.payload};case d.SET_TOTAL_PAGES:return{...e,totalPages:t.payload};case d.SET_PAGE_SIZE:return{...e,pageSize:t.payload};case d.SET_FILTER:return{...e,filter:t.payload};case d.SET_FILTER_RESULTS:return{...e,filterResults:t.payload};case d.SET_SORTBY:return{...e,sortBy:t.payload};case d.SET_SORTDIRECTION:return{...e,sortDirection:t.payload};default:return e}}var x={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B=O,U=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,F=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,o){var a,r={},n=null,s=null;o!==void 0&&(n=""+o),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)j.call(t,a)&&!M.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:U,type:e,key:n,ref:s,props:r,_owner:F.current}}A.Fragment=Q;A.jsx=R;A.jsxs=R;x.exports=A;const i=x.exports.jsx,p=x.exports.jsxs,C=g.exports.createContext(void 0);function V({data:e,children:t}){const o={...G,...e},[a,r]=g.exports.useReducer(z,o),n=g.exports.useMemo(()=>({state:a,dispatch:r}),[a,r]);return i(C.Provider,{value:n,children:t})}function u(){const e=g.exports.useContext(C);if(e===void 0)throw new Error("useDataTableContext must be used within a CountProvider");return e}var E,Y=new Uint8Array(16);function $(){if(!E&&(E=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(Y)}var Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function J(e){return typeof e=="string"&&Z.test(e)}var c=[];for(var S=0;S<256;++S)c.push((S+256).toString(16).substr(1));function q(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!J(o))throw TypeError("Stringified UUID is invalid");return o}function v(e,t,o){e=e||{};var a=e.random||(e.rng||$)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){o=o||0;for(var r=0;r<16;++r)t[o+r]=a[r];return t}return q(a)}const P=e=>({type:d.SET_CURRENT_PAGE,payload:e}),K=e=>({type:d.SET_TOTAL_PAGES,payload:e}),W=e=>({type:d.SET_PAGE_SIZE,payload:e}),H=e=>({type:d.SET_FILTER,payload:e}),X=e=>({type:d.SET_FILTER_RESULTS,payload:e}),w=e=>({type:d.SET_SORTBY,payload:e}),T=e=>({type:d.SET_SORTDIRECTION,payload:e});function ee(){const{state:e,dispatch:t}=u(),{pageSize:o}=e;return p("label",{htmlFor:"page-size",children:["show"," ",i("select",{className:"form-select d-inline-block w-auto","aria-label":"show entries",name:"page-size",onChange:r=>{t(W(parseInt(r.target.value,10)))},value:o,children:_.pageSizeOptions.map(r=>i("option",{value:r,children:r},`option-${r}`))})," ","entries"]})}function te(){const{state:e,dispatch:t}=u(),{filter:o}=e;return p("label",{htmlFor:"search",id:"dataTable-search",children:["Search:"," ",i("input",{name:"search",className:"form-control d-inline-block w-auto","aria-label":"search","aria-describedby":"dataTable-search",type:"search",onChange:r=>{t(H(r.target.value)),t(P(1))},value:o})]})}const k=e=>!Number.isNaN(Date.parse(e)),ae=({entries:e,sortBy:t,sortDirection:o})=>!o||!t?e:[...e].sort((a,r)=>{const n=k(a[t])?new Date(a[t]):a[t],s=k(r[t])?new Date(r[t]):r[t];return o==="asc"?n>s?1:-1:n<s?1:-1}),oe=(e,t)=>t?e.filter(o=>Object.values(o).find(a=>a.toLowerCase().includes(t.toLowerCase()))):e;function re({label:e}){const{state:t,dispatch:o}=u(),{sortBy:a,sortDirection:r}=t,n=()=>{switch(o(w(e.data)),r){case"asc":o(T("desc"));break;case"desc":o(w("")),o(T("none"));break;default:o(T("asc"))}};return i("th",{onClick:()=>n(),className:(()=>e.data===a?r==="asc"?"sorting sorting_asc":"sorting sorting_desc":"sorting")(),children:e.title})}function ne({labels:e}){return i("thead",{children:i("tr",{children:e.map(t=>i(re,{label:t},`label-${v()}`))})})}function ie({entry:e}){const{state:t}=u(),{labels:o,sortBy:a}=t;return i("tr",{children:o.map(r=>i("td",{className:r.data===a?"current-label":"",children:e[r.data]},`${r.data}-${v()}`))})}function se({entries:e}){return i("tbody",{className:"table-group-divider",children:e.map(t=>i(ie,{entry:t},`row-${v()}`))})}function le({tableId:e}){const{state:t,dispatch:o}=u(),{labels:a,entries:r,currentPage:n,pageSize:s,filter:l,sortBy:b,sortDirection:h}=t,m=g.exports.useMemo(()=>oe(r,l),[r,l]),N=g.exports.useMemo(()=>ae({entries:m,sortBy:b,sortDirection:h}),[m,b,h]).slice((n-1)*s,n*s);return g.exports.useEffect(()=>{o(X(m.length))},[m.length,o]),i("div",{className:"table-responsive",children:p("table",{className:"dataTable table table-striped",id:e,children:[i(ne,{labels:a}),i(se,{entries:N})]})})}function ce(){const{state:{entries:e,currentPage:t,totalPages:o,pageSize:a,filterResults:r}}=u(),n=e.length,s=r,l=s>0?(t-1)*a+1:0,b=a>s||t===o?s:t*a;return p("p",{className:"dataTable_info",role:"status","aria-live":"polite",children:["Showing ",l," to ",b," of ",s," entries ",s!==n&&p("span",{children:["(filtered from ",n," total entries)"]})]})}function de({tableId:e,pageIndex:t,text:o}){const{state:a,dispatch:r}=u(),{currentPage:n,totalPages:s}=a,l=n===1&&t===0||n===s&&t===s+1||s<2,b=n===t,h=()=>{switch(t){case 0:return n-1;case s+1:return n+1;default:return t}},m=()=>{const y=h();r(P(y))};return i("li",{className:"page-item",children:i("button",{type:"button",className:`page-link ${b&&"active"} ${l&&"disabled"}`,"aria-controls":e,onClick:()=>m(),disabled:l,children:o})})}function be({tableId:e}){const{state:{totalPages:t,pageSize:o,filterResults:a},dispatch:r}=u();return g.exports.useEffect(()=>{r(K(Math.ceil(a/o)))},[a,o,r]),i("nav",{"aria-label":"data-table page navigation",children:i("ul",{className:"pagination",children:(()=>{const s=[];for(let l=0;l<=t+1;l+=1){let b=l.toString();l===0&&(b="Previous"),l===t+1&&(b="Next"),s.push(i(de,{tableId:e,pageIndex:l,text:b},`page-${v()}`))}return s})()})})}function ge({data:e}){const t=v();return i(V,{data:e,children:p("div",{className:"dataTable_wrapper d-grid",children:[p("div",{className:"dataTable_header mt-3 mb-2 d-flex justify-content-between align-items-center",children:[i(ee,{}),i(te,{})]}),i(le,{tableId:t}),p("div",{className:"dataTable_footer mt-3 mb-2 d-flex justify-content-between",children:[i(ce,{}),i(be,{tableId:t})]})]})})}function pe(e,t=[]){const[o,a]=g.exports.useState(!0),[r,n]=g.exports.useState(),[s,l]=g.exports.useState(),b=g.exports.useCallback(()=>{a(!0),n(void 0),l(void 0),e().then(l).catch(n).finally(()=>a(!1))},t);return g.exports.useEffect(()=>{b()},[b]),{loading:o,error:r,value:s}}function me(){const{loading:e,error:t,value:o}=pe(D);return I("div",{className:"container",children:[f("div",{className:"text-center",children:f("h1",{children:"Current Employees"})}),e&&f("div",{children:"Loading..."}),o&&f(ge,{data:o}),t&&f("div",{children:t}),f("p",{className:"text-center",children:f(L,{to:"/",children:"Home"})})]})}export{me as default};
