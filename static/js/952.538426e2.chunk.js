"use strict";(self.webpackChunkgoit_react_hw_07_phonebook=self.webpackChunkgoit_react_hw_07_phonebook||[]).push([[952],{7952:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});r(2791);var a,t,i,o,d=r(1413),s=r(887),u=r(7689),c=r(1686),l=r.n(c),m=r(9434),p=r(4695),b=r(6727),h=r(168),f=r(7686),x=f.Z.form(a||(a=(0,h.Z)(["\n  width: 300px;\n  display: inline-flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 30px;\n  border: solid 2px;\n  border-radius: 6px;\n  background-color: #389677;\n"]))),g=f.Z.input(t||(t=(0,h.Z)(["\n  padding: 10px;\n  border-radius: 6px;\n  background-color: #e1d5bb;\n  &:focus,\n  &:hover {\n    outline: solid 2px #c7a149;\n  }\n"]))),Z=f.Z.button(i||(i=(0,h.Z)(["\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 6px;\n  font-size: 16px;\n  background-color: #c7a149;\n  &:focus,\n  &:hover {\n    background-color: #b38f41;\n  }\n"]))),v=f.Z.p(o||(o=(0,h.Z)(["\n  margin: 0px;\n  padding: 0px;\n"]))),j=r(6351),k=r(2526),_=r(6895),y=r(184),w=b.Ry().shape({name:b.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:b.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}).required();function A(){var n,e,r=(0,m.I0)(),a=(0,u.s0)(),t=(0,m.v9)(j.K2),i=(0,s.cI)({defaultValues:{name:"",number:""},resolver:(0,p.X)(w)}),o=i.register,c=i.handleSubmit,b=i.formState.errors,h=i.reset;return(0,y.jsxs)(x,{onSubmit:c((function(n){var e=n.name,i=n.number;if(t.find((function(n){return n.name===e})))return l().Notify.failure("".concat(e," is already in contacts."),100);r((0,k.uK)({name:e,number:i})),r((0,_.T)("")),h(),a("/",{replace:!0})})),children:[(0,y.jsx)("label",{htmlFor:"name",children:"Name"}),(0,y.jsx)(g,(0,d.Z)((0,d.Z)({},o("name")),{},{type:"text",id:"name"})),(0,y.jsx)(v,{children:null===(n=b.name)||void 0===n?void 0:n.message}),(0,y.jsx)("label",{htmlFor:"number",children:"Number"}),(0,y.jsx)(g,(0,d.Z)((0,d.Z)({},o("number")),{},{type:"tel",id:"number"})),(0,y.jsx)(v,{children:null===(e=b.number)||void 0===e?void 0:e.message}),(0,y.jsx)(Z,{type:"submit",children:"Add contact"})]})}var z=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{children:"Add contact using the form below "}),(0,y.jsx)(A,{})]})}},6351:function(n,e,r){r.d(e,{K2:function(){return a},zK:function(){return t}});var a=function(n){return n.contacts.items},t=function(n){return n.filter}}}]);
//# sourceMappingURL=952.538426e2.chunk.js.map