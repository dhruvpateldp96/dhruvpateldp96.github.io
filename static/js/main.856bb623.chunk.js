(this["webpackJsonptcs-frontend-assignmnets"]=this["webpackJsonptcs-frontend-assignmnets"]||[]).push([[0],{166:function(e,t,a){},171:function(e,t,a){},218:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(31),r=a.n(c),i=(a(166),a(153)),d=a(58),o=a(24),l=(a(171),a(7));var j=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark mb-5",children:[Object(l.jsx)(d.b,{className:"navbar-brand nav-link text-white text-lg brand-text",to:"/",children:"Index"}),Object(l.jsx)("ul",{className:"navbar-nav ml-auto text-light d-inline-block",children:Object(l.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(l.jsx)("i",{className:"fab fa-react fa-5x",id:"react-logo"})})})]})};var b=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark fixed-bottom",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("div",{className:"footer p-3 mt-2 text-center bg-dark text-light",children:["Developed By:"," ",Object(l.jsx)("span",{className:"text-warning font-weight-normal",children:"Dhruv Himanshu Patel 1973426"}),", Using ",Object(l.jsx)("i",{className:"fab fa-react"})," React JS & Redux JS integrated with no external data API"]})})})},x=a(28),h=a(291),u=h.a.Meta,O=function(){return Object(l.jsx)("div",{className:Object(x.css)(m.cardMeta),children:Object(l.jsx)(h.a,{hoverable:!0,style:{width:250,border:"1px solid #e1e1e1"},cover:Object(l.jsx)("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",width:"249",height:"auto"}),children:Object(l.jsx)(u,{style:{padding:"1rem"},title:"Europe Street beat",description:"www.instagram.com"})})})},m=x.StyleSheet.create({cardMeta:{boxShadow:"5px 5px 5px #e1e1e1",padding:"1rem",display:"flex",justifyContent:"center"}}),g=a(293);a(209);var p=function(e){var t=e.data;return Object(l.jsx)("div",{className:Object(x.css)(f.carouselContainer),children:Object(l.jsx)(g.a,{draggable:!0,centerMode:!0,touchThreshold:50,focusOnSelect:!0,swipeToSlide:!0,slidesToShow:5,children:t?t.map((function(e){return e})):Object(l.jsx)("h1",{children:"Loading"})})})},f=x.StyleSheet.create({carouselContainer:{boxShadow:"5px 5px 5px #e1e1e1","& .ant-carousel .slick-slide":{textAlign:"center",height:"auto",lineHeight:"auto",background:"#e1e1e1",overflow:"hidden",display:"flex",justifyContent:"center"}}}),v=(a(218),[Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{}),Object(l.jsx)(O,{})]),y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:Object(x.css)(S.heading),children:Object(l.jsx)("h1",{children:"Assignment1 March 12 (Design Sell)"})}),Object(l.jsx)(p,{data:v})]})},S=x.StyleSheet.create({heading:{display:"flex",justifyContent:"center"},cardContainer:{display:"flex",flexDirection:"row",overflow:"auto",flexWrap:"wrap"},antCarousel:{"& .slick-slide":{textAlign:"center",height:"160px",lineHeight:"160px",background:"#364d79"}}}),w=a(49),k=a(148),N=a(149),A=a(60),D="LOADING",C={text:"",phones:[],loading:!1},T=Object(w.combineReducers)({phones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});default:return e}}}),I=[k.a],B=Object(w.createStore)(T,{},Object(N.composeWithDevTools)(w.applyMiddleware.apply(void 0,I))),P=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(d.b,{className:"navbar-brand nav-link text-lg brand-text",to:"/assignment/1",children:Object(l.jsx)("h1",{children:"Assignment1"})}),Object(l.jsx)(d.b,{className:"navbar-brand nav-link text-lg brand-text",to:"/restaurant",children:Object(l.jsx)("h1",{children:"Section_7_1.20"})}),Object(l.jsx)(d.b,{className:"navbar-brand nav-link text-lg brand-text",to:"/budgetplanner",children:Object(l.jsx)("h1",{children:"Phase1_S-6_1.22_(Budget Planner)"})})]})},V=function(){return Object(l.jsx)("div",{})},_=(x.StyleSheet.create({restaurantGrid:{display:"grid"}}),a(156)),F=a(112),J=a(82),M=a(37),E=a(290),R=a(292),W=a(288),q=a(295),H=a(289),L=a(294),G={labelCol:{span:10},wrapperCol:{span:16}},K={wrapperCol:{offset:10,span:16}},Q=function(e,t){var a=s.a.useState(JSON.parse(sessionStorage.getItem(e))||t),c=Object(F.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){sessionStorage.setItem(e,JSON.stringify(r))}),[r]),[r,i]},U=function(){var e=Q("tableArr",[]),t=Object(F.a)(e,2),a=t[0],n=t[1],s=Q("total",0),c=Object(F.a)(s,2),r=c[0],i=c[1];console.log("table array",a);var d=[{title:"Vendor",dataIndex:"vendor",render:function(e){return Object(l.jsx)("a",{children:e})}},{title:"Deal Amount",dataIndex:"amt"},{title:"Address",dataIndex:"address"},{title:"Pass or Decline",dataIndex:"addedToBudget",render:function(e,t){return Object(l.jsxs)(J.a,{onChange:function(e){var s=a,c=s.find((function(e){return e.key==t.key}));c.addedToBudget=!c.addedToBudget,n(s),e.target.checked?i(r+parseFloat(t.amt)):i(r-parseFloat(t.amt))},children:["Add ",t.amt," to total budget"]})}},{title:"Delete Entry",key:"key",render:function(e,t){return Object(l.jsx)(q.a,{title:"Sure to delete? This will delete the amount from the total budget",onConfirm:function(){t.addedToBudget&&i(r-t.amt),n(a.filter((function(e){return e.key!=t.key})))},children:Object(l.jsxs)(M.a,{type:"danger",children:["Delete entry of venor ",t.vendor," ?"," "]})})}}];return Object(l.jsxs)("div",{className:Object(x.css)($.container),children:[Object(l.jsxs)("div",{className:Object(x.css)($.formAndStatecontainer),children:[Object(l.jsxs)("div",{className:Object(x.css)($.formContainer),children:[Object(l.jsx)("h4",{children:"ADD the details of the deals here"}),Object(l.jsxs)(E.a,Object(A.a)(Object(A.a)({},G),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),n([].concat(Object(_.a)(a),[{vendor:e.Vendor,amt:e.Deal_Amount,address:e.Address,key:Object(L.a)(),addedToBudget:!1}]))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(l.jsx)(E.a.Item,{label:"Vendor",name:"Vendor",rules:[{required:!0,message:"Please input your Vendor!"}],children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(E.a.Item,{label:"Address",name:"Address",rules:[{required:!0,message:"Please input your Vendor's Address!"}],children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(E.a.Item,{label:"Deal Amount",name:"Deal_Amount",rules:[{required:!0,message:"Please input your Deal Amount!"}],children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(E.a.Item,Object(A.a)(Object(A.a)({},K),{},{children:Object(l.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))]}),Object(l.jsxs)("div",{style:{padding:"3rem",height:"300px",overflow:"auto"},children:[Object(l.jsx)("h4",{children:"The state of this project is displayed here"}),a.map((function(e){return Object(l.jsxs)("p",{children:["vendor: ",e.vendor,", amt: ",e.amt,", address: ",e.address,", addedToBudget:",e.addedToBudget,","]},e.key)}))]})]}),Object(l.jsx)(W.a,{}),Object(l.jsx)("h1",{children:"Records of all the deals"})," ",Object(l.jsxs)("h4",{children:["Total Budget: ",r]}),Object(l.jsx)("div",{className:Object(x.css)($.tableContainer),children:Object(l.jsx)(H.a,{columns:d,dataSource:a})})]})},$=x.StyleSheet.create({container:{display:"flex",flexDirection:"column"},formAndStatecontainer:{display:"flex",flexDirection:"row",justifyContent:"space-around"},formContainer:{},tableContainer:{padding:"2rem 12rem 0rem 12rem"}}),z=function(){return Object(l.jsx)(i.a,{store:B,children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(o.a,{exact:!0,path:"/",component:P}),Object(l.jsx)(o.a,{path:"/assignment/1",component:y}),Object(l.jsx)(o.a,{path:"/restaurant",component:V}),Object(l.jsx)(o.a,{path:"/budgetplanner",component:U}),Object(l.jsx)(b,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[285,1,2]]]);
//# sourceMappingURL=main.856bb623.chunk.js.map