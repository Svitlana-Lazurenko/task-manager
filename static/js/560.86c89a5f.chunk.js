"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[560],{9542:function(n,t,e){e.d(t,{Z:function(){return U}});var r,o,i,c,u,a,s,d,l,p=e(9439),x=e(2791),f=e(9434),g=e(4164),h=e(3136),b=e(7084),j=e(267),v=e(1870),m=e(3277),k=e(2603),y=e(6398),Z=e(1307),w=e(168),C=e(7686),S=C.Z.div(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),T=C.Z.div(o||(o=(0,w.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 300px;\n  height: 200px;\n  padding: 18px;\n  background-color: rgb(141, 247, 241);\n  border-radius: 5px;\n  border: 1px solid rgb(128, 218, 11);\n"]))),E=C.Z.div(i||(i=(0,w.Z)([""]))),q=C.Z.div(c||(c=(0,w.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 45px;\n"]))),A=C.Z.button(u||(u=(0,w.Z)(["\n  padding: 10px 20px;\n  height: 40px;\n\n  border-radius: 0.6em;\n  border: 2px solid rgb(53, 202, 8);\n  background-color: rgb(216, 255, 193);\n\n  font-size: 10px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  color: rgb(0, 167, 158);\n\n  :hover {\n    background-color: rgb(253, 239, 109);\n  }\n"]))),D=C.Z.h2(a||(a=(0,w.Z)(["\n  font-weight: 400;\n  margin-bottom: 10px;\n"]))),P=C.Z.span(s||(s=(0,w.Z)([""]))),z=C.Z.form(d||(d=(0,w.Z)([""]))),L=C.Z.input(l||(l=(0,w.Z)(["\n  height: 25px;\n  padding: 10px 25px;\n  margin-top: 5px;\n\n  background: rgb(255, 249, 198);\n  border-radius: 10px;\n  border: 2px solid rgb(2, 211, 200);\n  outline-color: rgb(255, 224, 45);\n\n  font-size: 20px;\n  letter-spacing: 5px;\n"]))),Q=e(3329),U=function(){var n=(0,f.v9)(v.eh),t=(0,f.v9)(v.LH),e=(0,f.v9)(v.P7),r=(0,f.v9)(v.KT),o=(0,f.v9)(v.wl),i=(0,f.v9)(m.Te),c=(0,f.v9)(m.qw),u=(0,f.v9)(k.l4),a=(0,f.I0)(),s=(0,x.useState)(i),d=(0,p.Z)(s,2),l=d[0],w=d[1],C=(0,x.useCallback)((function(){a((0,h.jg)(!1)),a((0,h.kJ)(!1)),a((0,h.FT)(!1)),a((0,h.Cn)(!1)),a((0,h.QA)(!1)),a((0,j.qi)(null)),a((0,b.vc)(null)),a((0,b.Ql)(""))}),[a]),U=(0,x.useCallback)((function(){a((0,h.jg)(!1)),a((0,h.kJ)(!1)),a((0,h.FT)(!1)),a((0,h.Cn)(!1)),a((0,h.QA)(!1)),a((0,j.qi)(null)),a((0,b.Ql)(""))}),[a]);(0,x.useEffect)((function(){var n=function(n){"Escape"===n.code&&C()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[a,C]);var _=function(n){w(n.target.value)},I=function(){C()};return(0,g.createPortal)((0,Q.jsx)(S,{onClick:function(n){n.currentTarget===n.target&&C()},children:(0,Q.jsxs)(T,{children:[o&&(0,Q.jsx)(E,{children:(0,Q.jsxs)(q,{children:[(0,Q.jsx)(A,{type:"button",onClick:function(n){a((0,h.QA)(!1)),a((0,h.FT)(!0))},children:"Edit"}),(0,Q.jsx)(A,{type:"button",onClick:function(n){a((0,h.QA)(!1)),a((0,h.kJ)(!0))},children:"Delete"})]})}),t&&(0,Q.jsxs)(E,{children:[(0,Q.jsx)(D,{children:"Do you want to delete this category ?"}),(0,Q.jsxs)(q,{children:[(0,Q.jsx)(A,{type:"button",onClick:function(n){n.preventDefault(),a((0,Z.uu)(c)),C()},children:"yes"}),(0,Q.jsx)(A,{type:"button",onClick:I,children:"no"})]})]}),r&&(0,Q.jsx)(E,{children:(0,Q.jsxs)(z,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,e=t.elements.name.value.trim();a((0,Z.cg)({id:c,name:e})),t.reset(),C()},children:[(0,Q.jsxs)(D,{children:["Edit ",i," category"]}),(0,Q.jsxs)("label",{children:[(0,Q.jsx)(P,{children:"name: "}),(0,Q.jsx)(L,{name:"name",type:"text",value:l,onChange:_})]}),(0,Q.jsxs)(q,{children:[(0,Q.jsx)(A,{type:"submit",children:"save"}),(0,Q.jsx)(A,{type:"button",onClick:I,children:"cancel"})]})]})}),e&&(0,Q.jsx)(E,{children:(0,Q.jsxs)(z,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,e=t.elements.name.value.trim();a((0,Z.i8)({name:e})),t.reset(),C()},children:[(0,Q.jsx)(D,{children:"Add new category"}),(0,Q.jsxs)("label",{children:[(0,Q.jsx)(P,{children:"name: "}),(0,Q.jsx)(L,{name:"name",type:"text",value:l,onChange:_})]}),(0,Q.jsxs)(q,{children:[(0,Q.jsx)(A,{type:"submit",children:"save"}),(0,Q.jsx)(A,{type:"button",onClick:I,children:"cancel"})]})]})}),n&&(0,Q.jsxs)(E,{children:[(0,Q.jsx)(D,{children:"Do you want to delete this task ?"}),(0,Q.jsxs)(q,{children:[(0,Q.jsx)(A,{type:"button",onClick:function(n){n.preventDefault(),a((0,y._5)(u)),U()},children:"yes"}),(0,Q.jsx)(A,{type:"button",onClick:I,children:"no"})]})]})]})}),document.querySelector("#task-popup-root"))}},1560:function(n,t,e){e.r(t),e.d(t,{default:function(){return L}});var r,o,i,c,u,a,s,d=e(1413),l=e(2791),p=e(9434),x=e(7689),f=e(2603),g=e(168),h=e(7686),b=h.Z.li(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  padding: 15px 15px;\n  margin: 0 auto;\n  width: 247px;\n\n  background-color: rgb(255, 236, 161);\n  border-radius: 10px;\n  border: 2px solid rgb(53, 202, 8);\n  }\n"]))),j=h.Z.span(o||(o=(0,g.Z)(["\n  font-size: 27px;\n  letter-spacing: 4px;\n  margin-bottom: 15px;\n"]))),v=h.Z.span(i||(i=(0,g.Z)(["\n  font-size: 20px;\n  letter-spacing: 4px;\n  margin-bottom: 35px;\n"]))),m=h.Z.span(c||(c=(0,g.Z)(["\n  font-size: 13px;\n  letter-spacing: 4px;\n  margin-bottom: 10px;\n"]))),k=h.Z.div(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),y=h.Z.button(a||(a=(0,g.Z)(["\n  padding: 10px 20px;\n  height: 40px;\n\n  border-radius: 0.6em;\n  border: 2px solid rgb(53, 202, 8);\n  background-color: rgb(216, 255, 193);\n\n  font-size: 10px;\n  letter-spacing: 4px;\n  text-transform: uppercase;\n  color: rgb(0, 167, 158);\n\n  :hover {\n    background-color: rgb(253, 239, 109);\n  }\n"]))),Z=e(3136),w=e(267),C=e(3329),S=function(n){var t=n.id,e=n.name,r=n.description,o=n.dateStart,i=n.dateEnd,c=(0,x.s0)(),u=(0,p.I0)();return(0,C.jsxs)(b,{children:[(0,C.jsx)(j,{children:e}),(0,C.jsx)(v,{children:r}),(0,C.jsxs)(m,{children:["date of start: ",o]}),(0,C.jsxs)(m,{children:["date of end: ",i]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(y,{type:"button",onClick:function(){u((0,Z.jg)(!0)),u((0,w.qi)(t))},children:"delete"}),(0,C.jsx)(y,{type:"button",onClick:function(){u((0,w.qJ)({id:t,name:e,description:r,dateStart:o,dateEnd:i})),c("/edit-task/".concat(t))},children:"edit"})]})]})},T=h.Z.ul(s||(s=(0,g.Z)(["\n  width: 90%;\n  padding: 20px;\n  margin: 0 auto;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n\n  background-color: rgb(255, 245, 207);\n  border-radius: 10px;\n  border: 2px solid rgb(53, 202, 8);\n"]))),E=function(){var n=(0,p.v9)(f.Uq);return(0,C.jsx)(T,{children:n.map((function(n){var t=n._id,e=n.name,r=n.description,o=n.dateStart,i=n.dateEnd;return(0,C.jsx)(S,{name:e,description:r,dateStart:o,dateEnd:i,id:t},t)}))})},q=e(9542),A=e(6398),D=e(1870),P=e(7084),z={container:{padding:"30px 0"},button:{height:40,padding:"10px 20px",display:"block",overflow:"hidden",border:"2px solid rgb(2, 211, 200)",borderRadius:10,color:"rgb(125, 202, 0)",fontSize:15,fontWeight:600,textTransform:"uppercase",letterSpacing:6}};function L(){var n=(0,p.I0)(),t=(0,x.s0)(),e=(0,x.UO)().id,r=(0,p.v9)(D.eh),o=(0,p.v9)(f.xU);(0,l.useEffect)((function(){n((0,A.Jv)(e))}),[n,e]);return(0,C.jsxs)("div",{style:z.container,children:[(0,C.jsx)("button",{type:"button",onClick:function(){t("/categories"),n((0,P.vc)(null))},style:(0,d.Z)((0,d.Z)({},z.button),{},{marginBottom:"10px",marginLeft:"25px",backgroundColor:"transparent"}),children:"Back"}),(0,C.jsx)("div",{children:o&&"Request in progress..."}),(0,C.jsx)(E,{}),(0,C.jsx)("button",{type:"button",onClick:function(){t("/create-task/".concat(e))},style:(0,d.Z)((0,d.Z)({},z.button),{},{margin:"30px auto 0",backgroundColor:"rgb(193, 255, 252)"}),children:"Add"}),r&&(0,C.jsx)(q.Z,{})]})}},3277:function(n,t,e){e.d(t,{Te:function(){return c},qw:function(){return i},us:function(){return r},xU:function(){return o}});var r=function(n){return n.categories.categoriesArr},o=function(n){return n.categories.isLoading},i=function(n){return n.categories.currentCategoryId},c=function(n){return n.categories.currentCategoryName}},1870:function(n,t,e){e.d(t,{KT:function(){return i},LH:function(){return o},P7:function(){return c},eh:function(){return r},wl:function(){return u}});var r=function(n){return n.popup.isShowDeleteTaskPopup},o=function(n){return n.popup.isShowDeleteCategoryPopup},i=function(n){return n.popup.isShowEditCategoryPopup},c=function(n){return n.popup.isShowAddCategoryPopup},u=function(n){return n.popup.isShowMenuPopup}},2603:function(n,t,e){e.d(t,{O3:function(){return c},Uq:function(){return r},l4:function(){return i},xU:function(){return o}});var r=function(n){return n.tasks.tasksArr},o=function(n){return n.tasks.isLoading},i=function(n){return n.tasks.currentTaskId},c=function(n){return n.tasks.currentTask}}}]);
//# sourceMappingURL=560.86c89a5f.chunk.js.map