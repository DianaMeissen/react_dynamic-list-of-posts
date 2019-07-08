(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(25)},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(5),o=n.n(r),c=n(1),l=n.n(c),i=n(6),u=n(7),m=n(8),p=n(12),f=n(9),h=n(13),d=n(14),b=n(10),E=(n(22),function(t){var e=t.onFilter,n=t.showAll;return s.a.createElement("form",{className:"filter",onSubmit:function(t){e(t.target.filterInput.value),t.target.filterInput.value="",t.preventDefault()}},s.a.createElement("div",{className:"block"},s.a.createElement("input",{className:"filter-input",type:"text",name:"filterInput"}),s.a.createElement("label",{className:"filter-label"},"Find post by text"),s.a.createElement("button",{type:"button",className:"show-all-button",onClick:n},"Show all")))}),v=(n(3),function(t){var e=t.comment;return s.a.createElement("div",{className:"comment"},"(",s.a.createElement("span",{className:"highlitedText"},e.name),", ",e.email,")",s.a.createElement("br",null),e.body)}),y=function(t){var e=t.comments;return s.a.createElement("div",{className:"commentlist"},s.a.createElement("h3",null,"Comments"),e.map(function(t){return s.a.createElement(v,{key:t.id,comment:t})}))},w=(n(4),function(t){var e=t.post;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:"bottom-line"},e.title),s.a.createElement("p",{className:"bottom-line"},e.body))}),N=(n(23),function(t){var e=t.user;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"user-title"},"Author"),s.a.createElement("p",{className:"user"},s.a.createElement("span",{className:"highlitedText"},e.name),","," ","<".concat(e.username,">"),", ",e.address.zipcode,", ",e.address.city,","," ",e.address.street,", ",e.address.suite))}),x=function(t){var e=t.posts;return s.a.createElement("div",{className:"postlist"},e.map(function(t){return s.a.createElement("div",{className:"post",key:t.id},s.a.createElement(w,{post:t}),s.a.createElement(N,{user:t.user}),s.a.createElement(y,{comments:t.comments}))}))},g=(n(24),function(t,e,n){return t.map(function(t){return Object(d.a)({},t,{user:e.find(function(e){return e.id===t.userId}),comments:n.filter(function(e){return e.postId===t.id})})})}),j=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(p.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(s)))).state={posts:[],shownPosts:[],btnVisible:!0,btnText:"Load",visible:!1},n.findPostByText=function(t){var e=n.state.posts.filter(function(e){return e.title.includes(t)||e.body.includes(t)});n.setState({shownPosts:e})},n.showAllPosts=function(){n.setState({shownPosts:n.state.posts})},n}return Object(h.a)(e,t),Object(m.a)(e,[{key:"getPosts",value:function(){var t=Object(i.a)(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=g,t.next=3,fetch("https://jsonplaceholder.typicode.com/posts").then(function(t){return t.json()});case 3:return t.t1=t.sent,t.next=6,fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()});case 6:return t.t2=t.sent,t.next=9,fetch("https://jsonplaceholder.typicode.com/comments").then(function(t){return t.json()});case 9:t.t3=t.sent,e=(0,t.t0)(t.t1,t.t2,t.t3),this.setState({posts:e,shownPosts:e,btnVisible:!1});case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"main-div"},this.state.btnVisible&&s.a.createElement("button",{type:"button",className:"load-button",onClick:function(){t.setState({visible:!0,btnText:"Loading..."}),t.getPosts()}},this.state.btnText),this.state.visible&&(this.state.posts.length>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"main-title"},"Dynamic list of posts"),s.a.createElement(E,{onFilter:this.findPostByText,showAll:this.showAllPosts}),s.a.createElement(x,{posts:this.state.shownPosts})):s.a.createElement(b.a,{size:50})))}}]),e}(s.a.Component);o.a.render(s.a.createElement(j,null),document.getElementById("root"))},3:function(t,e,n){},4:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.6d8bd1e6.chunk.js.map