"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[598],{5302:function(n,e,t){t.d(e,{Z:function(){return z}});var r,a,i,o,s,u,c,d,l=t(9439),p=t(9434),x=t(2791),f=t(7689),g=t(6398),m=t(2603),b=t(3277),h=t(168),v=t(6060),k=v.Z.form(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  width: 50%;\n  padding: 40px 40px 60px 40px;\n  margin: 0 auto;\n\n  background-color: rgb(8, 8, 8);\n  border-radius: 10px;\n  border: 2px solid rgb(53, 202, 8);\n"]))),Z=v.Z.label(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 40px;\n  letter-spacing: 2px;\n"]))),j=v.Z.span(i||(i=(0,h.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  margin-left: 20px;\n\n  letter-spacing: 5px;\n  font-size: 15px;\n"]))),y=v.Z.input(o||(o=(0,h.Z)(["\n  height: 35px;\n  padding: 10px 25px;\n  margin-top: 5px;\n\n  background: transparent;\n  border-radius: 10px;\n  border: 2px solid rgb(53, 202, 8);\n  outline-color: rgb(53, 202, 8);\n\n  font-size: 20px;\n  color: rgb(240, 240, 240);\n  text-shadow: 0 0 1em rgb(53, 202, 8);\n  font-family: monospace;\n  letter-spacing: 5px;\n"]))),w=v.Z.textarea(s||(s=(0,h.Z)(["\n  resize: vertical;\n"]))),S=v.Z.input(u||(u=(0,h.Z)([""]))),C=v.Z.button(c||(c=(0,h.Z)(["\n  height: 40px;\n  margin: 30px auto 0;\n  padding: 10px 20px;\n\n  display: block;\n  overflow: hidden;\n  position: relative;\n  transition: 0.5s;\n\n  background-color: transparent;\n  border: none;\n\n  color: rgb(240, 240, 240);\n  text-shadow: 0 0 1em rgb(53, 202, 8);\n  font-size: 15px;\n  font-family: monospace;\n  text-transform: uppercase;\n  letter-spacing: 6px;\n\n  :hover {\n    background: rgb(3, 244, 15);\n    color: rgb(240, 240, 240);\n    border-radius: 5px;\n    box-shadow: 0 0 5px rgb(3, 244, 15), 0 0 25px rgb(3, 244, 15),\n      0 0 50px rgb(3, 244, 15), 0 0 100px rgb(3, 244, 15);\n  }\n"]))),E=v.Z.span(d||(d=(0,h.Z)(["\n  position: absolute;\n  display: block;\n\n  @keyframes btn-anim {\n    0% {\n      left: -100%;\n    }\n\n    50%,\n    100% {\n      left: 100%;\n    }\n  }\n\n  :first-of-type {\n    bottom: 2px;\n    left: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(90deg, transparent, rgb(3, 244, 15));\n    animation: btn-anim 2s linear infinite;\n  }\n"]))),T=t(3329),z=function(){var n=(0,f.s0)(),e=(0,p.I0)(),t=(0,f.TH)(),r=(0,f.UO)().id,a=(0,p.v9)(b.qw),i=(0,p.v9)(m.O3),o=t.pathname.split("/"),s=(0,x.useState)("create-task"===o[1]?"":i.name),u=(0,l.Z)(s,2),c=u[0],d=u[1],h=(0,x.useState)("create-task"===o[1]?"":i.description),v=(0,l.Z)(h,2),z=v[0],I=v[1],N=(0,x.useState)("create-task"===o[1]?"":i.dateStart),O=(0,l.Z)(N,2),U=O[0],_=O[1],q=(0,x.useState)("create-task"===o[1]?"":i.dateEnd),D=(0,l.Z)(q,2),A=D[0],L=D[1];return(0,T.jsxs)(k,{onSubmit:"create-task"===o[1]?function(t){t.preventDefault();var i=t.currentTarget;e((0,g.gI)({id:r,task:{name:i.elements.name.value,description:i.elements.description.value,dateStart:i.elements.dateStart.value,dateEnd:i.elements.dateEnd.value}})),i.reset(),n("/tasks/".concat(a))}:function(t){t.preventDefault();var i=t.currentTarget;e((0,g.PO)({id:r,task:{name:i.elements.name.value,description:i.elements.description.value,dateStart:i.elements.dateStart.value,dateEnd:i.elements.dateEnd.value}})),i.reset(),n("/tasks/".concat(a))},autoComplete:"off",children:[(0,T.jsxs)(Z,{children:[(0,T.jsx)(j,{children:" Name"}),(0,T.jsx)(y,{type:"text",name:"name",value:c,onChange:function(n){d(n.target.value)}})]}),(0,T.jsxs)(Z,{children:[(0,T.jsx)(j,{children:" Description"}),(0,T.jsx)(w,{name:"description",placeholder:"Enter description of task here...",rows:"5",value:z,onChange:function(n){I(n.target.value)}})]}),(0,T.jsxs)(Z,{children:[(0,T.jsx)(j,{children:" Name"}),(0,T.jsx)(S,{type:"date",name:"dateStart",value:U,onChange:function(n){_(n.target.value)}})]}),(0,T.jsxs)(Z,{children:[(0,T.jsx)(j,{children:" Name"}),(0,T.jsx)(S,{type:"date",name:"dateEnd",value:A,onChange:function(n){L(n.target.value)}})]}),(0,T.jsxs)(C,{type:"submit",children:["Save",(0,T.jsx)(E,{})]})]})}},598:function(n,e,t){t.r(e),t.d(e,{default:function(){return o}});var r=t(5302),a=t(3329),i={container:{height:"100vh",padding:"60px",backgroundSize:"500px"}};function o(){return(0,a.jsx)("div",{style:i.container,children:(0,a.jsx)(r.Z,{})})}},3277:function(n,e,t){t.d(e,{Te:function(){return o},qw:function(){return i},us:function(){return r},xU:function(){return a}});var r=function(n){return n.categories.categoriesArr},a=function(n){return n.categories.isLoading},i=function(n){return n.categories.currentCategoryId},o=function(n){return n.categories.currentCategoryName}},2603:function(n,e,t){t.d(e,{O3:function(){return o},Uq:function(){return r},l4:function(){return i},xU:function(){return a}});var r=function(n){return n.tasks.tasksArr},a=function(n){return n.tasks.isLoading},i=function(n){return n.tasks.currentTaskId},o=function(n){return n.tasks.currentTask}}}]);
//# sourceMappingURL=598.4a8b9abe.chunk.js.map