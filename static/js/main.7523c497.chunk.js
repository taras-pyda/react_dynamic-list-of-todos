(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(9),c=n.n(s),o=n(7),r=n(2),a=n(3),d=n(5),i=n(4),l=n(1),u=n.n(l),h=(n(16),n(17),n(10)),p=n.n(h),j=(n(18),n(8)),b=n.n(j),m=n(11),f="https://mate.academy/students-api/";function O(){return fetch("".concat(f,"todos")).then((function(e){return e.json()}))}function v(){return(v=Object(m.a)(b.a.mark((function e(t,n){var s,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:s=e.sent,c=t.toLocaleLowerCase().trim(),o=s.filter((function(e){return e.title.trim().toLocaleLowerCase().includes(c)})),e.t0=n,e.next="active"===e.t0?8:"completed"===e.t0?9:10;break;case 8:return e.abrupt("return",o.filter((function(e){return!e.completed})));case 9:return e.abrupt("return",o.filter((function(e){return e.completed})));case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return fetch("".concat(f,"users/").concat(e)).then((function(e){return e.json()}))}var _=n(0),S=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.todosSearch,s=t.todosStatus,c=t.setTodos;e.todosSearch===n&&e.todosStatus===s||function(e,t){return v.apply(this,arguments)}(n,s).then((function(e){return c(e)}))}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.selectedTodoId,s=e.setSelectedId,c=e.todosSearch,o=e.todosStatus,r=e.onChange;return Object(_.jsxs)("div",{className:"TodoList",children:[Object(_.jsx)("input",{type:"text",name:"todosSearch",value:c,placeholder:"Search todo",onChange:r}),Object(_.jsxs)("select",{name:"todosStatus",value:o,onChange:r,children:[Object(_.jsx)("option",{value:"all",children:"All"}),Object(_.jsx)("option",{value:"active",children:"Active"}),Object(_.jsx)("option",{value:"completed",children:"Completed"})]}),Object(_.jsx)("h2",{children:"Todos:"}),Object(_.jsx)("div",{className:"TodoList__list-container",children:Object(_.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){var t=e.id,c=e.title,o=e.userId,r=e.completed;return Object(_.jsxs)("li",{className:p()("TodoList__item",{"TodoList__item--checked":r,"TodoList__item--unchecked":!r}),children:[Object(_.jsxs)("label",{htmlFor:"".concat(t),children:[Object(_.jsx)("input",{id:"".concat(t),type:"checkbox",checked:r,readOnly:!0}),Object(_.jsx)("p",{children:c})]}),n===t?Object(_.jsx)("button",{type:"button",className:"TodoList__user-button TodoList__user-button--selected button",onClick:function(){s("selectedTodoId",0),s("selectedUserId",0)},children:"User #".concat(o)}):Object(_.jsx)("button",{type:"button",className:"TodoList__user-button button",onClick:function(){s("selectedTodoId",t),s("selectedUserId",o)},children:"User #".concat(o)})]},t)}))})})]})}}]),n}(u.a.PureComponent),I=(n(21),function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedUser:{id:0,createdAt:"",updatedAt:"",name:"",username:"",email:"",phone:"",website:""}},e.loadingData=function(){x(e.props.selectedUserId).then((function(t){e.setState({selectedUser:t})}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.loadingData()}},{key:"componentDidUpdate",value:function(e){this.props.selectedUserId!==e.selectedUserId&&this.loadingData()}},{key:"render",value:function(){var e=this.state.selectedUser,t=this.props.setSelectedId;return Object(_.jsxs)("div",{className:"CurrentUser",children:[Object(_.jsx)("h2",{className:"CurrentUser__title",children:Object(_.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(_.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(_.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(_.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(_.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:function(){t("selectedTodoId",0),t("selectedUserId",0)},children:"Clear"})]})}}]),n}(u.a.Component)),y=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={todos:[],selectedUserId:0,selectedTodoId:0,todosSearch:"",todosStatus:"all"},e.setFilteredTodos=function(t){e.setState({todos:t})},e.setSelectedId=function(t,n){e.setState(Object(o.a)({},t,n))},e.changeHandler=function(t){var n=t.target,s=n.name,c=n.value;e.setState(Object(o.a)({},s,c))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,s=e.selectedTodoId,c=e.todosSearch,o=e.todosStatus;return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"App__sidebar",children:Object(_.jsx)(S,{todos:t,selectedTodoId:s,setSelectedId:this.setSelectedId,todosSearch:c,todosStatus:o,onChange:this.changeHandler,setTodos:this.setFilteredTodos})}),Object(_.jsx)("div",{className:"App__content",children:Object(_.jsx)("div",{className:"App__content-container",children:n?Object(_.jsx)(I,{selectedUserId:n,setSelectedId:this.setSelectedId}):"No user selected"})})]})}}]),n}(u.a.Component),U=y;c.a.render(Object(_.jsx)(U,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7523c497.chunk.js.map