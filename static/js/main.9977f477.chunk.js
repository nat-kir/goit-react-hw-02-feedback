(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__3oKT7",good:"Statistics_good__18zd4",neutral:"Statistics_neutral__3mDg3",bad:"Statistics_bad__1V8Qu",total:"Statistics_total__2pGqP"}},11:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),l=a(5),i=a(6),s=a(7),u=a(10),d=a(9),b=a(8),_=a.n(b),m=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement("button",{key:e,type:"button",onClick:function(){return a(e)},className:_.a[e]},e)})))},k=a(2),g=a.n(k),v=function(e){var t=e.title,a=e.children;return c.a.createElement("section",null,c.a.createElement("h2",{className:"title"},t),a)};v.propTipes={title:g.a.string.isRequired,children:g.a.node.isRequired};var f=v,E=a(1),p=a.n(E),h=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,r=e.positivePercentage;return c.a.createElement("ul",{className:p.a.list},c.a.createElement("li",{className:p.a.good},"Good: ",t),c.a.createElement("li",{className:p.a.neutral},"Neutral: ",a),c.a.createElement("li",{className:p.a.bad},"Bad: ",n),c.a.createElement("li",{className:p.a.total},"Total:",o),c.a.createElement("li",null,"Positive feedback: ",r,"%"))},F=function(e){var t=e.message;return c.a.createElement("p",null,t)},N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.LeaveFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e}return Object(s.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback();return Math.round(this.state.good/e*100)}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,o=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{title:"Please leave feedback"},c.a.createElement(m,{options:["good","neutral","bad"],onLeaveFeedback:this.LeaveFeedback})),c.a.createElement(f,{title:"Statistics"},o>0?c.a.createElement(h,{good:t,neutral:a,bad:n,total:o,positivePercentage:r}):c.a.createElement(F,{message:"No feedback given"})))}}]),a}(n.Component);a(18),a(19);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={button:"Feedback_button__1E_-H",good:"Feedback_good__3ddyw Feedback_button__1E_-H",neutral:"Feedback_neutral__1M_3N Feedback_button__1E_-H",bad:"Feedback_bad__2sWDd Feedback_button__1E_-H"}}},[[11,1,2]]]);
//# sourceMappingURL=main.9977f477.chunk.js.map