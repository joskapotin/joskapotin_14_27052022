import{a as b,r as G,j,b as h,L as U}from"./index.917795f2.js";import{g as Q}from"./api.58f44bae.js";var y,F=new Uint8Array(16);function q(){if(!y&&(y=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(F)}var M=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function V(e){return typeof e=="string"&&M.test(e)}var c=[];for(var E=0;E<256;++E)c.push((E+256).toString(16).substr(1));function Y(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!V(a))throw TypeError("Stringified UUID is invalid");return a}function v(e,t,a){e=e||{};var r=e.random||(e.rng||q)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){a=a||0;for(var o=0;o<16;++o)t[a+o]=r[o];return t}return Y(r)}const g=Object.freeze({SET_CURRENT_PAGE:"SET_CURRENT_PAGE",SET_TOTAL_PAGES:"SET_TOTAL_PAGES",SET_PAGE_SIZE:"SET_PAGE_SIZE",SET_SORT_BY:"SET_SORT_BY",SET_SORT_DIRECTION:"SET_SORT_DIRECTION",SET_FILTER_RESULTS:"SET_FILTER_RESULTS"}),$={labels:[],entries:[],pageSizeOptions:[10,25,50,100],currentPage:1,totalPages:1,pageSize:10,sortBy:"",sortDirection:"asc",filterResults:[]};function W(e,t){switch(t.type){case g.SET_CURRENT_PAGE:return{...e,currentPage:t.payload};case g.SET_TOTAL_PAGES:return{...e,totalPages:t.payload};case g.SET_PAGE_SIZE:return{...e,pageSize:t.payload,currentPage:1};case g.SET_SORT_BY:return{...e,sortBy:t.payload};case g.SET_SORT_DIRECTION:return{...e,sortDirection:e.sortDirection==="asc"?"desc":"asc"};case g.SET_FILTER_RESULTS:return{...e,filterResults:t.payload,currentPage:1};default:return e}}var x={exports:{}},Z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",J=Z,K=J;function R(){}function _(){}_.resetWarningCache=R;var H=function(){function e(r,o,i,l,d,p){if(p!==K){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:R};return a.PropTypes=a,a};x.exports=H();var n=x.exports,A={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=G,ee=Symbol.for("react.element"),te=Symbol.for("react.fragment"),re=Object.prototype.hasOwnProperty,ae=X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,a){var r,o={},i=null,l=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)re.call(t,r)&&!oe.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ee,type:e,key:i,ref:l,props:o,_owner:ae.current}}T.Fragment=te;T.jsx=w;T.jsxs=w;A.exports=T;const s=A.exports.jsx,m=A.exports.jsxs,k=b.exports.createContext();function P({dataTable:e,children:t}){const[a,r]=b.exports.useReducer(W,{...$,...e}),o=b.exports.useMemo(()=>[a,r],[a,r]);return s(k.Provider,{value:o,children:t})}P.propTypes={dataTable:n.shape({dataTable:n.shape({labels:n.arrayOf(n.shape({title:n.string,data:n.string})),entries:n.arrayOf(n.objectOf(n.string)),pageSizeOptions:n.arrayOf(n.number),sortBy:n.string,sortDirection:n.string})}),children:n.node};function f(){const[e,t]=b.exports.useContext(k);return[e,t]}const ne=e=>({type:g.SET_CURRENT_PAGE,payload:e}),ie=e=>({type:g.SET_TOTAL_PAGES,payload:e}),O=e=>({type:g.SET_PAGE_SIZE,payload:e}),se=e=>({type:g.SET_SORT_BY,payload:e}),le=()=>({type:g.SET_SORT_DIRECTION}),ce=e=>({type:g.SET_FILTER_RESULTS,payload:e});function de(){const[{pageSize:e,pageSizeOptions:t},a]=f();return m("label",{htmlFor:"page-size",children:["show"," ",s("select",{className:"form-select d-inline-block w-auto","aria-label":"show entries",name:"page-size",onChange:o=>{a(O(parseInt(o.target.value,10)))},value:e,children:t.map(o=>s("option",{value:o,children:o},`option-${o}`))})," ","entries"]})}const S=e=>!Number.isNaN(Date.parse(e)),pe=({entries:e,sortBy:t,sortDirection:a})=>e.sort((o,i)=>{const l=S(o[t].toString())?new Date(o[t]):o[t],d=S(i[t])?new Date(i[t]):i[t];return a==="asc"?l>d?1:-1:l<d?1:-1}),be=(e,t)=>e.filter(r=>Object.values(r).find(o=>o.toLowerCase().includes(t.toLowerCase())));function ge(){const[{entries:e},t]=f(),[a,r]=b.exports.useState("");return b.exports.useEffect(()=>{const i=be(e,a);t(ce(i))},[e,a,t]),m("label",{htmlFor:"search",id:"dataTable-search",children:["Search:"," ",s("input",{name:"search",className:"form-control d-inline-block w-auto","aria-label":"search","aria-describedby":"dataTable-search",type:"search",onChange:i=>{r(i.target.value)},value:a})]})}function C({label:e}){const[{sortBy:t,sortDirection:a},r]=f(),o=l=>{r(l===t?le():se(l))},i=l=>l===t?a==="asc"?"sorting sorting_asc":"sorting sorting_desc":"sorting";return b.exports.useMemo(()=>s("th",{onClick:()=>o(e.data),className:i(e.data),children:e.title}),[t,a])}C.propTypes={label:n.shape({title:n.string.isRequired,data:n.string.isRequired}).isRequired};function ue(){const[{labels:e}]=f();return b.exports.useMemo(()=>s("thead",{children:s("tr",{children:e.map(t=>s(C,{label:t},`label-${v()}`))})}),[e])}function N({entry:e}){const[{labels:t,sortBy:a}]=f();return s("tr",{children:t.map(r=>s("td",{className:r.data===a?"current-label":"",children:e[r.data]},`${r.data}-${v()}`))})}N.propTypes={entry:n.objectOf(n.string).isRequired};function fe(){const[{currentPage:e,pageSize:t,sortBy:a,sortDirection:r,filterResults:o}]=f(),l=pe({entries:o,sortBy:a,sortDirection:r}).slice((e-1)*t,e*t);return s("tbody",{className:"table-group-divider",children:l.map(d=>s(N,{entry:d},`row-${v()}`))})}function I({tableId:e}){return s("div",{className:"table-responsive",children:m("table",{className:"dataTable table table-striped",id:e,children:[s(ue,{}),s(fe,{})]})})}I.propTypes={tableId:n.string.isRequired};function me(){const[{entries:e,currentPage:t,totalPages:a,pageSize:r,filterResults:o}]=f(),i=e.length,l=o.length,d=l!==i,p=(t-1)*r+1,u=r>l||t===a?l:t*r;return m("p",{className:"dataTable_info",role:"status","aria-live":"polite",children:["Showing ",p," to ",u," of ",l," entries ",d&&m("span",{children:["(filtered from ",i," total entries)"]})]})}function D({tableId:e,index:t,text:a}){const[{currentPage:r,totalPages:o},i]=f(),l=r===1&&t===0||r===o&&t===o+1||o<2,d=r===t,p=()=>{switch(t){case 0:return r-1;case o+1:return r+1;default:return t}},u=B=>{i(ne(B))};return s("li",{className:"page-item",children:s("button",{type:"button",className:`page-link ${d&&"active"} ${l&&"disabled"}`,"aria-controls":e,onClick:()=>u(p()),disabled:l,children:a})})}D.propTypes={tableId:n.string.isRequired,index:n.number.isRequired,text:n.string.isRequired};function L({tableId:e}){const[{totalPages:t,pageSize:a,pageSizeOptions:r,filterResults:o},i]=f();return b.exports.useEffect(()=>{i(O(parseInt(r[0],10)))},[r]),b.exports.useEffect(()=>{i(ie(Math.ceil(o.length/a)))},[o,a,i]),s("nav",{"aria-label":"data-table page navigation",children:s("ul",{className:"pagination",children:(()=>{const d=[];for(let p=0;p<=t+1;p+=1){let u=p.toString();p===0&&(u="Previous"),p===t+1&&(u="Next"),d.push(s(D,{tableId:e,index:p,text:u},`page-${v()}`))}return d})()})})}L.propTypes={tableId:n.string.isRequired};function z({dataTable:e}){const t=v();return s(P,{dataTable:e,children:m("div",{className:"dataTable_wrapper d-grid",children:[m("div",{className:"dataTable_header mt-3 mb-2 d-flex justify-content-between align-items-center",children:[s(de,{}),s(ge,{})]}),s(I,{tableId:t}),m("div",{className:"dataTable_footer mt-3 mb-2 d-flex justify-content-between",children:[s(me,{}),s(L,{tableId:t})]})]})})}z.propTypes={dataTable:n.shape({labels:n.arrayOf(n.shape({title:n.string,data:n.string})),entries:n.arrayOf(n.objectOf(n.string)),pageSizeOptions:n.arrayOf(n.number),sortBy:n.string,sortDirection:n.string})};function he(e,t=[]){const[a,r]=b.exports.useState(!0),[o,i]=b.exports.useState(),[l,d]=b.exports.useState(),p=b.exports.useCallback(()=>{r(!0),i(void 0),d(void 0),e().then(d).catch(i).finally(()=>r(!1))},t);return b.exports.useEffect(()=>{p()},[p]),{loading:a,error:o,value:l}}function Te(){const{loading:e,error:t,value:a}=he(Q);return j("div",{className:"container",children:[h("div",{className:"text-center",children:h("h1",{children:"Current Employees"})}),e&&h("div",{children:"Loading..."}),a&&h(z,{dataTable:a}),t&&h("div",{children:t}),h("p",{className:"text-center",children:h(U,{to:"/",children:"Home"})})]})}export{Te as default};
