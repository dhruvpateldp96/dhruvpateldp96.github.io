(this["webpackJsonptcs-frontend-assignmnets"]=this["webpackJsonptcs-frontend-assignmnets"]||[]).push([[0],{166:function(e,t,a){},171:function(e,t,a){},218:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(31),c=a.n(s),r=(a(166),a(153)),i=a(58),d=a(24),l=(a(171),a(7));var o=function(){return Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark mb-5",children:[Object(l.jsx)(i.b,{className:"navbar-brand nav-link text-white text-lg brand-text",to:"/",children:"Index"}),Object(l.jsx)("ul",{className:"navbar-nav ml-auto text-light d-inline-block",children:Object(l.jsx)("li",{className:"nav-item d-inline-block mr-4",children:Object(l.jsx)("i",{className:"fab fa-react fa-5x",id:"react-logo"})})})]})};var j=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark fixed-bottom",children:Object(l.jsx)("div",{className:"col-md-12",children:Object(l.jsxs)("div",{className:"footer p-3 mt-2 text-center bg-dark text-light",children:["Developed By:"," ",Object(l.jsx)("span",{className:"text-warning font-weight-normal",children:"Dhruv Himanshu Patel 1973426"}),", Using ",Object(l.jsx)("i",{className:"fab fa-react"})," React JS & Redux JS integrated with no external data API"]})})})},b=a(28),x=a(290),h=x.a.Meta,u=function(){return Object(l.jsx)("div",{className:Object(b.css)(O.cardMeta),children:Object(l.jsx)(x.a,{hoverable:!0,style:{width:250,border:"1px solid #e1e1e1"},cover:Object(l.jsx)("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",width:"249",height:"auto"}),children:Object(l.jsx)(h,{style:{padding:"1rem"},title:"Europe Street beat",description:"www.instagram.com"})})})},O=b.StyleSheet.create({cardMeta:{boxShadow:"5px 5px 5px #e1e1e1",padding:"1rem",display:"flex",justifyContent:"center"}}),m=a(292);a(209);var p=function(e){var t=e.data;return Object(l.jsx)("div",{className:Object(b.css)(g.carouselContainer),children:Object(l.jsx)(m.a,{draggable:!0,centerMode:!0,touchThreshold:50,focusOnSelect:!0,swipeToSlide:!0,slidesToShow:5,children:t?t.map((function(e){return e})):Object(l.jsx)("h1",{children:"Loading"})})})},g=b.StyleSheet.create({carouselContainer:{boxShadow:"5px 5px 5px #e1e1e1","& .ant-carousel .slick-slide":{textAlign:"center",height:"auto",lineHeight:"auto",background:"#e1e1e1",overflow:"hidden",display:"flex",justifyContent:"center"}}}),f=(a(218),[Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{}),Object(l.jsx)(u,{})]),v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:Object(b.css)(y.heading),children:Object(l.jsx)("h1",{children:"Assignment1 March 12 (Design Sell)"})}),Object(l.jsx)(p,{data:f})]})},y=b.StyleSheet.create({heading:{display:"flex",justifyContent:"center"},cardContainer:{display:"flex",flexDirection:"row",overflow:"auto",flexWrap:"wrap"},antCarousel:{"& .slick-slide":{textAlign:"center",height:"160px",lineHeight:"160px",background:"#364d79"}}}),w=a(49),S=a(148),k=a(149),A=a(60),N="LOADING",D={text:"",phones:[],loading:!1},C=Object(w.combineReducers)({phones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(A.a)(Object(A.a)({},e),{},{loading:!0});default:return e}}}),T=[S.a],B=Object(w.createStore)(C,{},Object(k.composeWithDevTools)(w.applyMiddleware.apply(void 0,T))),I=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{className:"navbar-brand nav-link text-lg brand-text",to:"/assignment/1",children:Object(l.jsx)("h1",{children:"Assignment1"})}),Object(l.jsx)(i.b,{className:"navbar-brand nav-link text-lg brand-text",to:"/restaurant",children:Object(l.jsx)("h1",{children:"Section_7_1.20"})}),Object(l.jsx)(i.b,{className:"navbar-brand nav-link text-lg brand-text",to:"/budgetplanner",children:Object(l.jsx)("h1",{children:"Phase1_S-6_1.22_(Budget Planner)"})})]})},P=function(){return Object(l.jsx)("div",{})},V=(b.StyleSheet.create({restaurantGrid:{display:"grid"}}),a(156)),_=a(126),F=a(82),M=a(37),J=a(289),R=a(291),W=a(287),q=a(293),E=a(288),H={labelCol:{span:10},wrapperCol:{span:16}},L={wrapperCol:{offset:10,span:16}},G=function(){var e=Object(n.useState)([]),t=Object(_.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(0),r=Object(_.a)(c,2),i=r[0],d=r[1];console.log("table array",a);var o=[{title:"Vendor",dataIndex:"vendor",render:function(e){return Object(l.jsx)("a",{children:e})}},{title:"Deal Amount",dataIndex:"amt"},{title:"Address",dataIndex:"address"},{title:"Pass or Decline",dataIndex:"addedToBudget",render:function(e,t){return Object(l.jsxs)(F.a,{onChange:function(e){var n=a,c=n.find((function(e){return e.key==t.key}));c.addedToBudget=!c.addedToBudget,s(n),e.target.checked?d(i+parseFloat(t.amt)):d(i-parseFloat(t.amt))},children:["Add ",t.amt," to total budget"]})}},{title:"Delete Entry",key:"key",render:function(e,t){return Object(l.jsx)(q.a,{title:"Sure to delete? This will delete the amount from the total budget",onConfirm:function(){t.addedToBudget&&d(i-t.amt),s(a.filter((function(e){return e.key!=t.key})))},children:Object(l.jsxs)(M.a,{type:"danger",children:["Delete entry of venor ",t.vendor," ?"," "]})})}}];return Object(l.jsxs)("div",{className:Object(b.css)(K.container),children:[Object(l.jsxs)("div",{className:Object(b.css)(K.formAndStatecontainer),children:[Object(l.jsxs)("div",{className:Object(b.css)(K.formContainer),children:[Object(l.jsx)("h4",{children:"ADD the details of the deals here"}),Object(l.jsxs)(J.a,Object(A.a)(Object(A.a)({},H),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e),s([].concat(Object(V.a)(a),[{vendor:e.Vendor,amt:e.Deal_Amount,address:e.Address,key:new Date,addedToBudget:!1}]))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(l.jsx)(J.a.Item,{label:"Vendor",name:"Vendor",rules:[{required:!0,message:"Please input your Vendor!"}],children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(J.a.Item,{label:"Address",name:"Address",rules:[{required:!0,message:"Please input your Vendor's Address!"}],children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(J.a.Item,{label:"Deal Amount",name:"Deal_Amount",rules:[{required:!0,message:"Please input your Deal Amount!"}],children:Object(l.jsx)(R.a,{})}),Object(l.jsx)(J.a.Item,Object(A.a)(Object(A.a)({},L),{},{children:Object(l.jsx)(M.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))]}),Object(l.jsxs)("div",{style:{padding:"3rem",height:"300px",overflow:"auto"},children:[Object(l.jsx)("h4",{children:"The state of this project is displayed here"}),a.map((function(e){return Object(l.jsxs)("p",{children:["vendor: ",e.vendor,", amt: ",e.amt,", address: ",e.address,", addedToBudget:",e.addedToBudget,","]})}))]})]}),Object(l.jsx)(W.a,{}),Object(l.jsx)("h1",{children:"Records of all the deals"})," ",Object(l.jsxs)("h4",{children:["Total Budget: ",i]}),Object(l.jsx)("div",{className:Object(b.css)(K.tableContainer),children:Object(l.jsx)(E.a,{columns:o,dataSource:a})})]})},K=b.StyleSheet.create({container:{display:"flex",flexDirection:"column"},formAndStatecontainer:{display:"flex",flexDirection:"row",justifyContent:"space-around"},formContainer:{},tableContainer:{padding:"2rem 12rem 0rem 12rem"}}),Q=function(){return Object(l.jsx)(r.a,{store:B,children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(d.a,{exact:!0,path:"/",component:I}),Object(l.jsx)(d.a,{path:"/assignment/1",component:v}),Object(l.jsx)(d.a,{path:"/restaurant",component:P}),Object(l.jsx)(d.a,{path:"/budgetplanner",component:G}),Object(l.jsx)(j,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(l.jsx)(Q,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[285,1,2]]]);
//# sourceMappingURL=main.ef40f8ff.chunk.js.map