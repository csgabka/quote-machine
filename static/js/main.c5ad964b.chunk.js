(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),r=a(2),c=a.n(r),u=(a(15),a(3)),i=a(4),s=a(7),l=a(5),d=a(8),m=(a(17),function(t){var e=t.quoteText,a=t.quoteAuthor;return n.a.createElement("div",null,n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Quote"),n.a.createElement("div",{className:"card-body"},n.a.createElement("blockquote",{className:"blockquote mb-0"},n.a.createElement("p",{id:"text"},e),n.a.createElement("footer",{id:"author",className:"blockquote-footer"},a)))))}),h=function(t){var e=t.loadNewQuote;return n.a.createElement("button",{id:"new-quote",className:"btn btn-dark",onClick:e},"Get a new quote")},f=a(6),w=a.n(f),q=function(t){var e=t.quoteText,a=t.quoteAuthor;return n.a.createElement("div",null,n.a.createElement("a",{className:"twitter-share-button",id:"tweet",href:"https://twitter.com/intent/tweet?text="+e+" - "+a},n.a.createElement("img",{alt:"share-on-twitter",id:"twitter",src:w.a})))},v=(a(19),function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(s.a)(this,Object(l.a)(e).call(this,t))).fetchData=function(){fetch("https://favqs.com/api/qotd").then(function(t){if(t.status>=400)throw new Error("Bad response from server");return t.json()}).then(function(t){return a.setState({quoteText:t.quote.body,quoteAuthor:t.quote.author})})},a.loadNewQuote=function(){a.fetchData()},a.state={quoteText:"",quoteAuthor:""},a}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"wrapper",id:"quote-box"},n.a.createElement(m,{quoteText:this.state.quoteText,quoteAuthor:this.state.quoteAuthor}),n.a.createElement(h,{loadNewQuote:this.loadNewQuote}),n.a.createElement(q,{quoteText:this.state.quoteText,quoteAuthor:this.state.quoteAuthor})))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,a){t.exports=a.p+"static/media/twitter.da43cdfd.svg"},9:function(t,e,a){t.exports=a(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.c5ad964b.chunk.js.map