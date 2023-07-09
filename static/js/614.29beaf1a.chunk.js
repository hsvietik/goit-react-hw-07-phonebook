"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[614],{4614:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});t(2791);var r,o,i,c,a,s,l,u,d,p,x=t(168),f=t(7686),h=f.Z.div(r||(r=(0,x.Z)(["\n  margin-bottom: 20px;\n"]))),g=f.Z.input(o||(o=(0,x.Z)(["\n  padding: 10px;\n  border-radius: 6px;\n  background-color: #e1d5bb;\n  &:focus,\n  &hover {\n    outline: solid 2px #c7a149;\n  }\n"]))),b=t(9434),m=t(6895),Z=t(3329),j=function(){var n=(0,b.I0)();return(0,Z.jsxs)(h,{children:[(0,Z.jsx)("h2",{children:"Find contact by name"}),(0,Z.jsx)(g,{name:"search",type:"text",onChange:function(e){return n((0,m.T)(e.currentTarget.value.toLowerCase()))}})]})},v=t(9135),y=f.Z.ul(i||(i=(0,x.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),k=f.Z.li(c||(c=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin: 0px;\n"]))),w=f.Z.p(a||(a=(0,x.Z)(["\n  margin: 0px;\n"]))),_=f.Z.button(s||(s=(0,x.Z)(["\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: inherit;\n"]))),C=f.Z.button(l||(l=(0,x.Z)(["\n  display: inline-block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: inherit;\n"]))),T=(0,f.Z)(v.Xm5)(u||(u=(0,x.Z)(["\n  width: 15px;\n  height: 15px;\n  &:hover,\n  &:focus {\n    color: #389677;\n  }\n"]))),I=(0,f.Z)(v.$0H)(d||(d=(0,x.Z)(["\n  color: #b64d3e;\n"]))),L=t(4092),z=function(n){var e=n.contacts,t=(0,b.I0)();return(0,Z.jsx)(y,{children:e.map((function(n){var e=n.id,r=n.name,o=n.number,i=n.favorite;return(0,Z.jsxs)(k,{children:[(0,Z.jsx)(C,{type:"button",onClick:function(){return t((0,L.mN)(e))},children:i?(0,Z.jsx)(I,{}):(0,Z.jsx)(v.BgW,{})}),(0,Z.jsxs)(w,{children:[r,": ",o]}),(0,Z.jsx)(_,{type:"button",onClick:function(){return t((0,L.GK)(e))},children:(0,Z.jsx)(T,{})})]},e)}))})},A=t(1087),B=(0,f.Z)(A.rU)(p||(p=(0,x.Z)(["\n  text-decoration: none;\n  font-style: inherit;\n  color: inherit;\n  font-size: 18px;\n  font-weight: 900;\n  &:hover,\n  &:focus {\n    color: #1f7ba0;\n  }\n"])));function F(){return(0,Z.jsxs)("p",{children:["There are no contacts, use"," ",(0,Z.jsx)(B,{to:"/add",children:"Add contact"})," form"]})}var G=function(){var n=(0,b.v9)((function(n){return n.contacts})),e=(0,b.v9)((function(n){return n.filter})),t=n.filter((function(n){return n.name.toLowerCase().includes(e)})).reverse();return(0,Z.jsxs)("section",{children:[(0,Z.jsx)(j,{}),t.length>0?(0,Z.jsx)(z,{contacts:t}):(0,Z.jsx)(F,{})]})}}}]);
//# sourceMappingURL=614.29beaf1a.chunk.js.map