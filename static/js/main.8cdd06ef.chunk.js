(this["webpackJsonpcrypto-tools"]=this["webpackJsonpcrypto-tools"]||[]).push([[0],{221:function(t,e,n){"use strict";(function(t){var a=n(27),i=n(407),r=n(409),c=n(229),s=n(230),u=n(120),l=n(0),o=n(8),p=Object(i.a)((function(t){return Object(r.a)({wrapper:{padding:"25px",width:"90%"},icon:{marginRight:"5px"},textFieldWrapper:{display:"inline-block",width:"640px",margin:"25px"},textArea:{width:"820px",marginBottom:"10px",marginLeft:"10px"},button:{margin:"5px"}})}));e.a=function(e){var n=p(),i=Object(l.useState)(!1),r=Object(a.a)(i,2),d=r[0],b=r[1],x=Object(l.useState)(""),j=Object(a.a)(x,2),h=j[0],f=j[1],g=Object(l.useState)(""),O=Object(a.a)(g,2),v=O[0],m=O[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{className:n.textArea,label:"Input",type:"text",value:h,onChange:function(t){var e;f(t.target.value),b((e=t.target.value,Boolean(e.match(/^[0-9A-Fa-f]+$/i))))},multiline:!0,rows:6,fullWidth:!0,variant:"outlined"}),Object(o.jsx)(c.a,{className:n.textArea,label:"Output",type:"text",value:v,multiline:!0,rows:6,fullWidth:!0,variant:"outlined",disabled:!0})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,{className:n.button,variant:"outlined",onClick:function(){console.log("Encrypting",h);var n=Object(u.encrypt)(e.keyPair.pubKey.toString("hex"),t.from(h));console.log("Encrypted: ",n.toString("utf8")),m(n.toString("hex"))},children:"Encrypt"}),Object(o.jsx)(s.a,{className:n.button,variant:"outlined",onClick:function(){var n=Object(u.decrypt)(e.keyPair.privKey,t.from(h,"hex"));m(n.toString("utf8"))},disabled:!d,children:"Decrypt"})]})]})}}).call(this,n(5).Buffer)},239:function(t,e,n){},240:function(t,e,n){},253:function(t,e){},255:function(t,e){},265:function(t,e){},267:function(t,e){},294:function(t,e){},295:function(t,e){},300:function(t,e){},302:function(t,e){},309:function(t,e){},328:function(t,e){},349:function(t,e){},405:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(13),c=n.n(r),s=(n(239),n(240),n(27)),u=n(407),l=n(409),o=n(439),p=n(440),d=n(230),b=n(229),x=n(227),j=n.n(x),h=n(119),f=n(221),g=n(66),O=n.n(g),v=n(122),m=n(49),y=n(123),w=n(8),k=Object(u.a)((function(t){return Object(l.a)({wrapper:{padding:"25px",width:"90%"},icon:{marginRight:"5px"},textFieldWrapper:{display:"inline-block",width:"640px",margin:"25px"},textArea:{width:"820px",marginBottom:"10px",marginLeft:"10px"},button:{margin:"5px"}})})),S=function(t){var e=k(),n=Object(a.useState)(""),i=Object(s.a)(n,2),r=i[0],c=i[1],u=Object(a.useState)(""),l=Object(s.a)(u,2),o=l[0],p=l[1];function x(t){return m.createHash("sha256").update(t).digest()}function j(){return(j=Object(v.a)(O.a.mark((function e(){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x(r),e.next=3,y.sign(t.keyPair.privKey,n);case 3:a=e.sent,p(a.toString("hex"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(v.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x(r),e.prev=1,e.next=4,y.verify(t.keyPair.pubKey,n,o);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Signature is invalid");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(b.a,{className:e.textArea,label:"Message",type:"text",value:r,onChange:function(t){return c(t.target.value)},multiline:!0,rows:6,fullWidth:!0,variant:"outlined"}),Object(w.jsx)(b.a,{className:e.textArea,label:"Signature",type:"text",value:o,multiline:!0,rows:6,fullWidth:!0,variant:"outlined",onChange:function(t){return p(t.target.value)}})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(d.a,{className:e.button,variant:"outlined",onClick:function(){return j.apply(this,arguments)},children:"Sign Message"}),Object(w.jsx)(d.a,{className:e.button,variant:"outlined",onClick:function(){return h.apply(this,arguments)},children:"Verify Signature"})]})]})},N=Object(u.a)((function(t){return Object(l.a)({wrapper:{padding:"25px",width:"90%"},icon:{marginRight:"5px"},textFieldWrapper:{display:"inline-block",width:"640px",margin:"25px"},textArea:{width:"820px",marginBottom:"10px",marginLeft:"10px"},button:{margin:"5px"}})})),P=function(){var t=N(),e=Object(a.useState)(new h.KeyPair),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(w.jsxs)(o.a,{className:t.wrapper,children:[Object(w.jsx)(p.a,{variant:"h2",component:"h2",children:"Assymetric Operations"}),Object(w.jsxs)(d.a,{variant:"outlined",onClick:function(){return r(new h.KeyPair)},children:[Object(w.jsx)(j.a,{className:t.icon})," New Key Pair"]}),Object(w.jsx)("div",{className:t.textFieldWrapper,children:Object(w.jsx)(b.a,{id:"pubKey",label:"Public",type:"text",InputLabelProps:{shrink:!0},value:i.pubKey.toString("hex"),variant:"outlined",fullWidth:!0})}),Object(w.jsx)("div",{className:t.textFieldWrapper,children:Object(w.jsx)(b.a,{id:"pubKey",label:"Private",type:"text",InputLabelProps:{shrink:!0},value:i.privKey.toString("hex"),variant:"outlined",fullWidth:!0})}),Object(w.jsx)(f.a,{keyPair:i}),Object(w.jsx)("br",{}),Object(w.jsx)(S,{keyPair:i})]})};var F=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("header",{className:"App-header",children:Object(w.jsx)(P,{})})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,442)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};c.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(F,{})}),document.getElementById("root")),A()}},[[405,1,2]]]);
//# sourceMappingURL=main.8cdd06ef.chunk.js.map