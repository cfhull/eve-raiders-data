(this["webpackJsonpeve-raiders-data"]=this["webpackJsonpeve-raiders-data"]||[]).push([[0],{104:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(85),o=t.n(c),l=(t(104),t(19)),s=t(86),i=t(22),u=t.n(i),m=function(e){var a=e.data,t=e.columns,n=e.placeholder,c=Object(s.useTable)({columns:t,data:a}),o=c.getTableProps,l=c.getTableBodyProps,i=c.headerGroups,m=c.rows,d=c.prepareRow;return r.a.createElement("div",{className:u.a.tableWrapper},r.a.createElement("table",Object.assign({className:u.a.table},o()),r.a.createElement("thead",{className:u.a.headers},i.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",Object.assign({className:u.a.headerCell,style:e.style||{}},e.getHeaderProps()),e.render("Header"))})))}))),r.a.createElement("tbody",Object.assign({className:u.a.body},l()),m.map((function(e,a){return d(e),r.a.createElement("tr",Object.assign({className:u.a.row},e.getRowProps()),e.cells.map((function(e){return r.a.createElement("td",Object.assign({className:u.a.cell,style:e.column.style||{}},e.getCellProps()),e.render("Cell"))})))})))),0===m.length&&r.a.createElement("div",{className:u.a.placeholder},n))},d=t(29),p=t(10),b=t.n(p),_=t(87),h=t.n(_),f=function(e){var a=e.className,t=e.type,n=void 0===t?"button":t,c=e.children,o=Object(d.a)(e,["className","type","children"]);return r.a.createElement("button",Object.assign({className:b()(a,h.a.button),type:n},o),c)},g=t(53),v=t(18),E=t(67),N=t.n(E),y=r.a.forwardRef((function(e,a){var t=e.className,c=e.label,o=e.name,s=e.active,i=e.children,u=Object(d.a)(e,["className","label","name","active","children"]),m=Object(n.useState)(!1),p=Object(l.a)(m,2),_=p[0],h=p[1],f=Object(n.useRef)();return Object(n.useEffect)((function(){return f.current&&(f.current.addEventListener("focus",(function(){h(!0)})),f.current.addEventListener("blur",(function(){h(!1)}))),h}),[]),r.a.createElement("div",Object.assign({ref:a,className:b()(t,N.a.inputWrapper,Object(v.a)({},N.a.active,_||s)),onClick:function(){f.current.focus()}},u),r.a.createElement("label",{className:N.a.label,htmlFor:o},c),i(f))})),j=t(90),O=t.n(j),S=function(e){var a=e.className,t=e.label,n=e.onChange,c=Object(d.a)(e,["className","label","onChange"]);return r.a.createElement(y,{className:a,label:t,name:c.name},(function(e){return r.a.createElement("input",Object.assign({ref:e,className:O.a.input,onChange:function(e){return n(e.currentTarget.value)},spellCheck:"false"},c))}))},x=t(62),I=t(33),C=t.n(I),R=t(44),T=function(e){var a=e.className,t=e.label,c=e.items,o=void 0===c?[]:c,s=e.name,i=e.placeholder,u=e.value,m=e.onChange,d=e.itemToString,p=void 0===d?function(e){return e}:d,_=Object(n.useState)(o),h=Object(l.a)(_,2),f=h[0],g=h[1],E=Object(x.a)({itemToString:function(e){return e?p(e):""},items:f,selectedItem:u,onSelectedItemChange:function(e){var a=e.selectedItem;m(a)},onInputValueChange:function(e){var a=e.inputValue;g(o.filter((function(e){return p(e).toLowerCase().startsWith(a.toLowerCase())})))}}),N=E.isOpen,j=E.getMenuProps,O=E.getInputProps,S=E.getToggleButtonProps,I=E.getComboboxProps,T=E.highlightedIndex,w=E.getItemProps;return r.a.createElement("div",{className:a},r.a.createElement(y,{label:t,name:s},(function(e){return r.a.createElement("div",Object.assign({className:C.a.combobox},I()),r.a.createElement("input",Object.assign({className:C.a.input,spellCheck:"false"},O({name:s,placeholder:i,ref:e}))),r.a.createElement("div",Object.assign({className:C.a.dropdownIcon},S({onClick:function(){return g(o)}})),r.a.createElement(R.b,{size:16})))})),r.a.createElement("ul",Object.assign({},j(),{className:b()(C.a.menu,Object(v.a)({},C.a.open,N))}),N&&f.map((function(e,a){return r.a.createElement("li",Object.assign({className:b()(C.a.item,Object(v.a)({},C.a.highlighted,T===a)),key:"".concat(p(e)).concat(a)},w({item:p(e),index:a})),p(e))}))))},w=t(24),B=t.n(w),k=function(e){var a=e.className,t=e.label,n=e.items,c=void 0===n?[]:n,o=e.name,l=e.placeholder,s=e.value,i=e.onChange,u=e.itemToString,m=void 0===u?function(e){return e}:u,d=Object(x.b)({itemToString:m,items:c,selectedItem:s,onSelectedItemChange:function(e){var a=e.selectedItem;i(a)}}),p=d.isOpen,_=d.selectedItem,h=d.getToggleButtonProps,f=d.getMenuProps,g=d.highlightedIndex,E=d.getItemProps;return r.a.createElement("div",{className:a},r.a.createElement(y,Object.assign({className:B.a.inputWrapper,active:p,label:t,name:o},h()),(function(e){return r.a.createElement("button",{ref:e,className:B.a.input,type:"button"},_||r.a.createElement("span",{className:B.a.placeholder},l),r.a.createElement(R.b,{className:B.a.dropdownIcon,size:16}))})),r.a.createElement("ul",Object.assign({},f(),{className:b()(B.a.menu,Object(v.a)({},B.a.open,p))}),p&&c.map((function(e,a){return r.a.createElement("li",Object.assign({className:b()(B.a.item,Object(v.a)({},B.a.highlighted,g===a)),key:"".concat(e).concat(a)},E({item:e,index:a})),e)}))))},P=t(91),W=t.n(P),M=t(49),A=t.n(M),F={select:k,combobox:T,"*":S},H=function(e){var a=e.config,t=e.onSubmit,c=e.loading,o=Object(n.useMemo)((function(){return a.fields.reduce((function(e,a){return e[a.name]=a.initialValue||"",e}),{})}),[a]);return r.a.createElement(g.d,{validationSchema:a.validation,initialValues:o,onSubmit:t},(function(e){var t=e.setFieldValue;return r.a.createElement(g.c,{className:b()(A.a.form,a.className)},a.fields.map((function(e){var a=e.className,n=e.name,c=e.type,o=Object(d.a)(e,["className","name","type"]);return r.a.createElement("div",{className:b()(A.a.field,a),key:n},r.a.createElement(g.b,{name:n},(function(e){var a=e.field,l=F[c]||F["*"];return r.a.createElement(l,Object.assign({key:n,type:c},a,o,{onChange:function(e){return t(n,e)}}))})),r.a.createElement(g.a,{name:n},(function(e){return r.a.createElement("div",{className:A.a.error},r.a.createElement(R.a,null)," ",e)})))})),r.a.createElement(f,{className:A.a.submitBtn,type:"submit",disabled:c},r.a.createElement("span",{style:{visibility:c?"hidden":"visible"}},"Search"),c&&r.a.createElement("div",{className:A.a.loader,style:{position:"absolute",top:10,left:"calc(50% - 10px)"}},r.a.createElement(W.a,{size:20,color:getComputedStyle(document.documentElement).getPropertyValue("--color-text-white")}))))}))},L=t(92),J=t.n(L).a.create({baseURL:"https://everaiders.azurewebsites.net/",timeout:3e4}),V=function(){return J.get("/api/Planets/filters")},q=t(94),D=t(68),z=t(25),K=t.n(z),U=D.a().shape({resourceType:D.b().required("Resource Type is required"),richness:D.b().required("Richness is required")}),X=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(),s=Object(l.a)(o,2),i=s[0],u=s[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),b=p[0],_=p[1],h=Object(n.useMemo)((function(){return[{Header:"Jumps",accessor:"distanceFromBase",style:{textAlign:"right"}},{Header:"Planet Name",accessor:"planetName",style:{textAlign:"left"}},{Header:"Resource Type",accessor:"resourceType",Cell:function(e){return e.value.replace(/([A-Z])/g," $1").trim()},style:{textAlign:"left"}},{Header:"Richness",accessor:"richness",style:{textAlign:"left"}}]}),[]),f=Object(q.a)("filters",V),g=f.loading,v=f.error,E=f.data,N=Object(n.useMemo)((function(){return E?E.data:[]}),[E]),y=N.regions,j=void 0===y?[]:y,O=N.richness,S=void 0===O?[]:O,x=N.types,I=void 0===x?[]:x,C=Object(n.useMemo)((function(){return I.map((function(e){return e.replace(/([A-Z])/g," $1").trim()}))}),[I]);if(g)return"Loading...";if(v)return"An error has occurred: "+v.message;var R={validation:U,className:K.a.resourceSearchForm,fields:[{name:"resourceType",label:"Resource Type",placeholder:"resource type",type:"combobox",items:C,className:K.a.resourceType},{name:"richness",label:"Richness",placeholder:"Select a richness",items:S,type:"select",className:K.a.richness},{name:"region",label:"Region",placeholder:"Select a region",items:j,type:"combobox",itemToString:function(e){var a;return null!==(a=null===e||void 0===e?void 0:e.name)&&void 0!==a?a:""},className:K.a.region}]};return r.a.createElement("div",{className:K.a.resourceSearch},r.a.createElement("div",{className:K.a.results},i&&r.a.createElement("div",{className:K.a.error},"An error occured. Please try again."),r.a.createElement(m,{data:t,columns:h,placeholder:"No data for selected filters"})),r.a.createElement("header",{className:K.a.header},r.a.createElement("h1",null,"Find Resources"),r.a.createElement(H,{config:R,onSubmit:function(e){_(!0),function(e){var a=e.resourceType,t=e.richness,n=e.region,r=(n=void 0===n?{}:n).id;n.name;return J.get("/api/Planets/resources/".concat(a.replace(/\s+/g,""),"/").concat(t),{params:{regionId:r}})}(e).then((function(e){var a=e.data;c(a)})).catch((function(e){u(e)})).finally((function(){return _(!1)}))},loading:b})))},Z=function(){return r.a.createElement("div",{style:{marginTop:20}},"Feature currently under development. Come back later!")},G=t(95),Q=t(96),$=t(52),Y=t.n($),ee=function(e){var a=e.selected,t=e.onClick,n=e.logo,c=e.label;return r.a.createElement("div",{className:b()(Y.a.navItem,Object(v.a)({},Y.a.active,a)),onClick:function(){return t()}},r.a.createElement("div",{className:Y.a.logo},r.a.createElement(n,null)),r.a.createElement("div",{className:Y.a.label},c))},ae=t(73),te=t.n(ae),ne=[{name:"resource-search",label:"Resource Search",logo:G.a},{name:"planet-search",label:"Planet Search",logo:Q.a}],re=function(e){var a=e.route,t=e.setRoute;return r.a.createElement("div",{className:te.a.navBar},r.a.createElement("img",{className:te.a.logo,src:"".concat("/eve-raiders-data","/logo.png"),alt:"raiders logo"}),ne.map((function(e){return r.a.createElement(ee,{key:e.name,selected:a===e.name,onClick:function(){return t(e.name)},logo:e.logo,label:e.label})})))},ce=t(97),oe=t.n(ce),le={"resource-search":X,"*":Z},se=function(){var e=Object(n.useState)("resource-search"),a=Object(l.a)(e,2),t=a[0],c=a[1],o=le[t]||le["*"];return r.a.createElement("div",{className:oe.a.dashboard},r.a.createElement(re,{route:t,setRoute:c}),r.a.createElement(o,null))},ie=t(98);t(137);var ue=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ie.ReactQueryDevtools,{initialIsOpen:!1}),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},22:function(e,a,t){e.exports={tableWrapper:"Table_tableWrapper__tZooT",table:"Table_table__2OuB7",headers:"Table_headers__M46s0",headerCell:"Table_headerCell__1nTkK",body:"Table_body__3kRrD",cell:"Table_cell__2s5cE",placeholder:"Table_placeholder__3cRb7"}},24:function(e,a,t){e.exports={combobox:"Select_combobox__2fVaR",inputWrapper:"Select_inputWrapper__2jpws",input:"Select_input__3xpvd",dropdownIcon:"Select_dropdownIcon__Emqpy",menu:"Select_menu__3w-dz",open:"Select_open__gibbM",item:"Select_item__3YpSq",highlighted:"Select_highlighted__cGxYx",placeholder:"Select_placeholder__VZlSA"}},25:function(e,a,t){e.exports={resourceSearch:"ResourceSearch_resourceSearch__34jlA",header:"ResourceSearch_header__iMR0J",results:"ResourceSearch_results__1Efvc",resourceSearchForm:"ResourceSearch_resourceSearchForm__280Hw",resourceType:"ResourceSearch_resourceType__1elrh",richness:"ResourceSearch_richness__L3K6U",error:"ResourceSearch_error__3Wevm"}},33:function(e,a,t){e.exports={combobox:"ComboBox_combobox__vKPv6",input:"ComboBox_input__32-1j",menu:"ComboBox_menu__1H2fX",open:"ComboBox_open__2oJ2D",dropdownIcon:"ComboBox_dropdownIcon__2yDOs",item:"ComboBox_item__1aND1",highlighted:"ComboBox_highlighted__dIQ44"}},49:function(e,a,t){e.exports={form:"FormRenderer_form__1oXro",field:"FormRenderer_field__2ebEy",error:"FormRenderer_error__3EXkk"}},52:function(e,a,t){e.exports={navItem:"NavItem_navItem__Mxr-P",hover:"NavItem_hover__2jylu",active:"NavItem_active__BRtlX",label:"NavItem_label__NjeuJ"}},67:function(e,a,t){e.exports={inputWrapper:"BaseInput_inputWrapper__1QLek",hover:"BaseInput_hover__fgPLf",active:"BaseInput_active__3J2K6",label:"BaseInput_label__ljkWO"}},73:function(e,a,t){e.exports={navBar:"NavBar_navBar__cg89M",logo:"NavBar_logo__1hftJ"}},87:function(e,a,t){e.exports={button:"Button_button__3Dwi5",hover:"Button_hover__2_H-W",active:"Button_active__19R-U"}},90:function(e,a,t){e.exports={input:"Input_input__1NUtq"}},97:function(e,a,t){e.exports={dashboard:"Dashboard_dashboard__1wLSR"}},99:function(e,a,t){e.exports=t(138)}},[[99,1,2]]]);
//# sourceMappingURL=main.042aebd2.chunk.js.map