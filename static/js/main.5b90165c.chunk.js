(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i,s,b,d,u=n(1),j=n.n(u),l=n(5),p=n.n(l),x=(n(17),n(6)),f=n(7),h=n(8),g=n(11),O=n(10),v=n(2),k=n(3),m=k.a.li(a||(a=Object(v.a)(["\nmargin-top: 10px;\n"]))),w=k.a.ul(c||(c=Object(v.a)(["\nmargin-top: 10px;\npadding: 0px 20px 20px\n"]))),F=k.a.span(r||(r=Object(v.a)(["\nmargin-right: 10px;\nfont-weight: bold;\ntext-transform: capitalize;\n"]))),y=n(0),P=function(e){var t=e.stateObj,n=e.total,a=e.positivePercentage;return Object(y.jsxs)(w,{children:[Object.keys(t).map((function(e){return Object(y.jsxs)(m,{children:[Object(y.jsx)(F,{children:e}),t["".concat(e)]]},e)})),Object(y.jsxs)(m,{children:[Object(y.jsx)(F,{children:"Total:"}),n(Object.values(t))]},"total"),Object(y.jsxs)(m,{children:[Object(y.jsx)(F,{children:"Positive feedback:"}),a()]},"positivePercentage")]})},C=k.a.div(o||(o=Object(v.a)(["\ndisplay: flex;\njustify-content: space-around;\n\n"]))),S=k.a.button(i||(i=Object(v.a)(["\nmin-width: 90px;\npadding: 4px 20px;\nborder-radius: 5px;\nborder: none;\nbackground-color: #ffffff;\nbox-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),\n0px 2px 2px rgba(0, 0, 0, 0.12);\n\nfont-weight: bold;\ncursor: pointer;\n\n&:hover,\n&:focus {\n    background-color: #7AB7F4;\n    color: #ffffff;\n  }\n"]))),T=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(y.jsx)(C,{children:t.map((function(e){return Object(y.jsx)(S,{name:e,type:"button",onClick:n,children:e},e)}))})},L=k.a.h2(s||(s=Object(v.a)(["\nfont-weight: bold;\ntext-align: center;\n\npadding: 10px 20px;\n"]))),z=function(e){var t=e.title,n=e.children;return Object(y.jsxs)("section",{children:[Object(y.jsx)(L,{children:t}),n]})},A=k.a.p(b||(b=Object(v.a)(["\nfont-weight: bold;\nfont-size: 20px;\ntext-align: center;\ncolor: #4C4C4C;\n\npadding-bottom: 20px;\n"]))),B=function(e){var t=e.message;return Object(y.jsx)(A,{children:t})},J=k.a.div(d||(d=Object(v.a)(["\nwidth: 350px;\nmargin-left: auto;\nmargin-right: auto;\n\nbackground-color: rgba(238,238, 238, 0.8);\nborder-radius: 10px;\n"]))),M=function(e){Object(g.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(x.a)({},t.target.name,e["".concat(t.target.name)]+1)}))},e.countTotalFeedback=function(e){return e.reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=Math.round(100*e.state.good/e.countTotalFeedback(Object.values(e.state)));return"".concat(t,"%")},e}return Object(h.a)(n,[{key:"getStatistic",value:function(){return 0!==this.countTotalFeedback(Object.values(this.state))}},{key:"render",value:function(){return Object(y.jsxs)(J,{children:[Object(y.jsx)(z,{title:"Please leave feedback",children:Object(y.jsx)(T,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(y.jsx)(z,{title:"Statistic",children:this.getStatistic()?Object(y.jsx)(P,{stateObj:this.state,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):Object(y.jsx)(B,{message:"No feedback given"})})]})}}]),n}(u.Component);p.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5b90165c.chunk.js.map