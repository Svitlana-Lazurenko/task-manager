"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[121],{9542:function(n,e,t){t.d(e,{Z:function(){return _}});var r,o,i,c,s,u,a,l,d,p=t(9439),x=t(2791),f=t(9434),g=t(4164),h=t(3136),b=t(7084),v=t(267),j=t(1870),k=t(3277),m=t(2603),y=t(6398),Z=t(1307),w=t(168),C=t(7686),T=C.Z.div(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),A=C.Z.div(o||(o=(0,w.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 300px;\n  height: 200px;\n  padding: 18px;\n  background-color: rgb(141, 247, 241);\n  border-radius: 5px;\n  border: 1px solid rgb(128, 218, 11);\n"]))),S=C.Z.div(i||(i=(0,w.Z)([""]))),D=C.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 45px;\n"]))),E=C.Z.button(s||(s=(0,w.Z)(["\n  padding: 10px 20px;\n  height: 40px;\n\n  border-radius: 0.6em;\n  border: 2px solid rgb(53, 202, 8);\n  background-color: rgb(216, 255, 193);\n\n  font-size: 10px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  color: rgb(0, 167, 158);\n\n  :hover {\n    background-color: rgb(253, 239, 109);\n  }\n"]))),P=C.Z.h2(u||(u=(0,w.Z)(["\n  font-weight: 400;\n  margin-bottom: 10px;\n"]))),Q=C.Z.span(a||(a=(0,w.Z)([""]))),q=C.Z.form(l||(l=(0,w.Z)([""]))),z=C.Z.input(d||(d=(0,w.Z)(["\n  height: 25px;\n  padding: 10px 25px;\n  margin-top: 5px;\n\n  background: rgb(255, 249, 198);\n  border-radius: 10px;\n  border: 2px solid rgb(2, 211, 200);\n  outline-color: rgb(255, 224, 45);\n\n  font-size: 20px;\n  letter-spacing: 5px;\n"]))),L=t(3329),_=function(){var n=(0,f.v9)(j.eh),e=(0,f.v9)(j.LH),t=(0,f.v9)(j.P7),r=(0,f.v9)(j.KT),o=(0,f.v9)(j.wl),i=(0,f.v9)(k.Te),c=(0,f.v9)(k.qw),s=(0,f.v9)(m.l4),u=(0,f.I0)(),a=(0,x.useState)(i),l=(0,p.Z)(a,2),d=l[0],w=l[1],C=(0,x.useCallback)((function(){u((0,h.jg)(!1)),u((0,h.kJ)(!1)),u((0,h.FT)(!1)),u((0,h.Cn)(!1)),u((0,h.QA)(!1)),u((0,v.qi)(null)),u((0,b.vc)(null)),u((0,b.Ql)(""))}),[u]),_=(0,x.useCallback)((function(){u((0,h.jg)(!1)),u((0,h.kJ)(!1)),u((0,h.FT)(!1)),u((0,h.Cn)(!1)),u((0,h.QA)(!1)),u((0,v.qi)(null)),u((0,b.Ql)(""))}),[u]);(0,x.useEffect)((function(){var n=function(n){"Escape"===n.code&&C()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[u,C]);var I=function(n){w(n.target.value)},O=function(){C()};return(0,g.createPortal)((0,L.jsx)(T,{onClick:function(n){n.currentTarget===n.target&&C()},children:(0,L.jsxs)(A,{children:[o&&(0,L.jsx)(S,{children:(0,L.jsxs)(D,{children:[(0,L.jsx)(E,{type:"button",onClick:function(n){u((0,h.QA)(!1)),u((0,h.FT)(!0))},children:"Edit"}),(0,L.jsx)(E,{type:"button",onClick:function(n){u((0,h.QA)(!1)),u((0,h.kJ)(!0))},children:"Delete"})]})}),e&&(0,L.jsxs)(S,{children:[(0,L.jsx)(P,{children:"Do you want to delete this category ?"}),(0,L.jsxs)(D,{children:[(0,L.jsx)(E,{type:"button",onClick:function(n){n.preventDefault(),u((0,Z.uu)(c)),C()},children:"yes"}),(0,L.jsx)(E,{type:"button",onClick:O,children:"no"})]})]}),r&&(0,L.jsx)(S,{children:(0,L.jsxs)(q,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.name.value.trim();u((0,Z.cg)({id:c,name:t})),e.reset(),C()},children:[(0,L.jsxs)(P,{children:["Edit ",i," category"]}),(0,L.jsxs)("label",{children:[(0,L.jsx)(Q,{children:"name: "}),(0,L.jsx)(z,{name:"name",type:"text",value:d,onChange:I})]}),(0,L.jsxs)(D,{children:[(0,L.jsx)(E,{type:"submit",children:"save"}),(0,L.jsx)(E,{type:"button",onClick:O,children:"cancel"})]})]})}),t&&(0,L.jsx)(S,{children:(0,L.jsxs)(q,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.name.value.trim();u((0,Z.i8)({name:t})),e.reset(),C()},children:[(0,L.jsx)(P,{children:"Add new category"}),(0,L.jsxs)("label",{children:[(0,L.jsx)(Q,{children:"name: "}),(0,L.jsx)(z,{name:"name",type:"text",value:d,onChange:I})]}),(0,L.jsxs)(D,{children:[(0,L.jsx)(E,{type:"submit",children:"save"}),(0,L.jsx)(E,{type:"button",onClick:O,children:"cancel"})]})]})}),n&&(0,L.jsxs)(S,{children:[(0,L.jsx)(P,{children:"Do you want to delete this task ?"}),(0,L.jsxs)(D,{children:[(0,L.jsx)(E,{type:"button",onClick:function(n){n.preventDefault(),u((0,y._5)(s)),_()},children:"yes"}),(0,L.jsx)(E,{type:"button",onClick:O,children:"no"})]})]})]})}),document.querySelector("#task-popup-root"))}},4121:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,o,i,c,s,u,a,l=t(2791),d=t(9434),p=t(3277),x=t(7689),f=t(168),g=t(7686),h=g.Z.li(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 25px;\n\n  background-color: rgb(255, 236, 161);\n  border-radius: 10px;\n  border: 2px solid rgb(53, 202, 8);\n\n  :not(:last-child) {\n    margin-bottom: 25px;\n  }\n"]))),b=g.Z.span(o||(o=(0,f.Z)(["\n  font-size: 27px;\n  letter-spacing: 4px;\n"]))),v=g.Z.span(i||(i=(0,f.Z)(["\n  font-size: 20px;\n  letter-spacing: 4px;\n"]))),j=g.Z.span(c||(c=(0,f.Z)(["\n  font-size: 20px;\n  letter-spacing: 4px;\n"]))),k=g.Z.div(s||(s=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),m=g.Z.button(u||(u=(0,f.Z)(["\n  padding: 10px 20px;\n  height: 40px;\n\n  border-radius: 0.6em;\n  border: 2px solid rgb(53, 202, 8);\n  background-color: rgb(216, 255, 193);\n\n  font-size: 10px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  color: rgb(0, 167, 158);\n\n  :hover {\n    background-color: rgb(253, 239, 109);\n  }\n"]))),y=t(9542),Z=t(3136),w=t(1870),C=t(7084),T=t(3329),A=function(n){var e=n.id,t=n.name,r=n.numberOfTasks,o=n.date,i=(0,d.I0)(),c=(0,x.s0)(),s=(0,d.v9)(w.wl),u=o.split("T");return(0,T.jsxs)(h,{children:[(0,T.jsx)(b,{children:t}),(0,T.jsxs)(k,{children:[(0,T.jsxs)(v,{children:[r," tasks |"]}),(0,T.jsx)(j,{children:u[0]}),(0,T.jsx)(m,{type:"button",onClick:function(){i((0,Z.QA)(!0)),i((0,C.vc)(e)),i((0,C.Ql)(t))},children:"actions"}),(0,T.jsx)(m,{type:"button",onClick:function(){c("/tasks/".concat(e)),i((0,C.vc)(e))},children:"more"})]}),s&&(0,T.jsx)(y.Z,{})]})},S=g.Z.ul(a||(a=(0,f.Z)(["\n  width: 90%;\n  padding: 20px;\n  margin: 0 auto;\n\n  background-color: rgb(255, 245, 207);\n  border-radius: 10px;\n  border: 2px solid rgb(53, 202, 8);\n"]))),D=function(){var n=(0,d.v9)(p.us);return(0,T.jsx)(S,{children:n.map((function(n){var e=n._id,t=n.name,r=n.createdAt,o=n.numberOfTasks;return(0,T.jsx)(A,{id:e,name:t,date:r,numberOfTasks:o},e)}))})},E=t(1307),P={container:{padding:"30px 0"},button:{height:40,margin:"30px auto 0",padding:"10px 20px",display:"block",overflow:"hidden",backgroundColor:"rgb(193, 255, 252)",border:"2px solid rgb(2, 211, 200)",borderRadius:10,color:"rgb(125, 202, 0)",fontSize:15,fontWeight:600,textTransform:"uppercase",letterSpacing:6}};function Q(){var n=(0,d.I0)(),e=(0,d.v9)(p.xU),t=(0,d.v9)(w.KT),r=(0,d.v9)(w.P7),o=(0,d.v9)(w.LH);(0,l.useEffect)((function(){n((0,E.pE)())}),[n]);return(0,T.jsxs)("div",{style:P.container,children:[(0,T.jsx)("div",{children:e&&"Request in progress..."}),(0,T.jsx)(D,{}),(0,T.jsx)("button",{type:"button",style:P.button,onClick:function(e){n((0,Z.Cn)(!0))},children:"Add"}),o&&(0,T.jsx)(y.Z,{}),t&&(0,T.jsx)(y.Z,{}),r&&(0,T.jsx)(y.Z,{})]})}},3277:function(n,e,t){t.d(e,{Te:function(){return c},qw:function(){return i},us:function(){return r},xU:function(){return o}});var r=function(n){return n.categories.categoriesArr},o=function(n){return n.categories.isLoading},i=function(n){return n.categories.currentCategoryId},c=function(n){return n.categories.currentCategoryName}},1870:function(n,e,t){t.d(e,{KT:function(){return i},LH:function(){return o},P7:function(){return c},eh:function(){return r},wl:function(){return s}});var r=function(n){return n.popup.isShowDeleteTaskPopup},o=function(n){return n.popup.isShowDeleteCategoryPopup},i=function(n){return n.popup.isShowEditCategoryPopup},c=function(n){return n.popup.isShowAddCategoryPopup},s=function(n){return n.popup.isShowMenuPopup}},2603:function(n,e,t){t.d(e,{O3:function(){return c},Uq:function(){return r},l4:function(){return i},xU:function(){return o}});var r=function(n){return n.tasks.tasksArr},o=function(n){return n.tasks.isLoading},i=function(n){return n.tasks.currentTaskId},c=function(n){return n.tasks.currentTask}}}]);
//# sourceMappingURL=121.02b65eed.chunk.js.map