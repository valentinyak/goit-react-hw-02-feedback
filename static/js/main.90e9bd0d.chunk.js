(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(10),r=n.n(i),o=(n(17),n(11)),u=n(2),b=n(3),l=n(5),j=n(4),d=n(7),h=n.n(d),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props).slice(0,3);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Statistics"}),Object(c.jsxs)("ul",{children:[t.map((function(t){return Object(c.jsx)("li",{children:t.slice(0,1).toUpperCase()+t.slice(1)+": "+e.props[t]},h.a.generate())})),Object(c.jsxs)("li",{children:["Total: ",this.props.total]}),Object(c.jsxs)("li",{children:["Positive feedback: ",Math.round(this.props.positivePercentage),"%"]})]})]})}}]),n}(s.Component),O=n(9),v=n.n(O),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.options,n=e.onLeaveFeedback;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Please leave feedback"}),Object(c.jsx)("ul",{className:v.a.buttonList,children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"button",className:v.a.statisticsBtn,onClick:function(){n(e)},children:e.slice(0,1).toUpperCase()+e.slice(1)})},h.a.generate())}))})]})}}]),n}(s.Component);function f(e){var t=e.message;return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:t})})}var x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e}return Object(b.a)(n,[{key:"getStateKeys",value:function(){return Object.keys(this.state)}},{key:"onLeaveFeedback",value:function(e){this.setState(Object(o.a)({},e,this.state[e]+1))}},{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}))}},{key:"countPositiveFeedbackPercentage",value:function(){return 0===this.countTotalFeedback()?0:this.state.good/this.countTotalFeedback()*100}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,s=e.bad;return Object(c.jsxs)("div",{children:[Object(c.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback.bind(this)}),0===Object.values(this.state).reduce((function(e,t){return e+t}))?Object(c.jsx)(f,{message:"No feedback given"}):Object(c.jsx)(p,{good:t,neutral:n,bad:s,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),n}(s.Component);r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={buttonList:"FeedbackOptions_buttonList__23o4Y",statisticsBtn:"FeedbackOptions_statisticsBtn__3MYHe"}}},[[26,1,2]]]);
//# sourceMappingURL=main.90e9bd0d.chunk.js.map