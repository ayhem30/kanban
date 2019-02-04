module.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@babel/runtime/helpers/builtin/assertThisInitialized")},function(e,t){e.exports=require("@babel/runtime/helpers/builtin/defineProperty")},function(e,t){e.exports=require("@babel/runtime/helpers/builtin/objectSpread")},function(e,t){e.exports=require("@babel/runtime/helpers/builtin/inheritsLoose")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-beautiful-dnd")},function(e,t){e.exports=require("react-aria-menubutton")},function(e,t){e.exports=require("react-textarea-autosize")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("@babel/runtime/helpers/builtin/objectWithoutProperties")},function(e,t){e.exports=require("react-icons/lib/fa/trash")},function(e,t){e.exports=require("@babel/runtime/helpers/builtin/extends")},function(e,t){e.exports=require("shortid")},function(e,t){e.exports=require("react-head")},function(e,t){e.exports=require("normalizr")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("slugify")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-modal")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("marked")},function(e,t){e.exports=require("react-onclickoutside")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("compression")},function(e,t,n){"use strict";n.r(t);var a=n(17),r=n.n(a),i=n(24),o=n.n(i),l=n(29),s=n.n(l),c=n(28),d=n.n(c),u=n(27),p=n.n(u),m=n(23),h=n(0),f=n.n(h),b=n(22),E=n(20),y=n(5),v=n(19),g=n(15),C=n(7),I=n(6),w=n(4),x=n.n(w),D=n(1),T=n.n(D),O=n(2),N=n.n(O),S=n(18),_=n.n(S),A=n(10),k=n.n(A),R=(n(44),function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"render",function(){return f.a.createElement("header",null,f.a.createElement(I.Link,{to:"/",className:"header-title"},"React Redux Kanban Board"))}),t||T()(n)}return x()(t,e),t}(h.Component)),L=n(14),B=n.n(L),M=n(26),j=n.n(M),q=function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"handleClickOutside",function(){return n.props.handleClickOutside()}),N()(T()(T()(n)),"render",function(){return n.props.children}),t||T()(n)}return x()(t,e),t}(h.Component),K=j()(q),F=function(e){function t(){var t;return t=e.call(this)||this,N()(T()(T()(t)),"toggleOpen",function(){t.setState({isOpen:!t.state.isOpen})}),N()(T()(T()(t)),"handleChange",function(e){t.setState({title:e.target.value})}),N()(T()(T()(t)),"handleSubmit",function(e){e.preventDefault();var n=t.state.title;if(""!==n){var a=t.props,r=a.dispatch,i=a.history,o=a.userId,l=B.a.generate();r({type:"ADD_BOARD",payload:{boardTitle:n,boardId:l,userId:o}});var s=_()(n,{lower:!0});i.push("/b/"+l+"/"+s),t.setState({isOpen:!1,title:""})}}),N()(T()(T()(t)),"handleKeyDown",function(e){27===e.keyCode&&t.setState({isOpen:!1})}),N()(T()(T()(t)),"render",function(){var e=t.state,n=e.isOpen,a=e.title;return n?f.a.createElement(K,{handleClickOutside:t.toggleOpen},f.a.createElement("form",{onSubmit:t.handleSubmit,className:"board-adder"},f.a.createElement("input",{autoFocus:!0,className:"submit-board-input",type:"text",value:a,onKeyDown:t.handleKeyDown,onChange:t.handleChange,spellCheck:!1}),f.a.createElement("input",{type:"submit",value:"Create",className:"submit-board-button",disabled:""===a}))):f.a.createElement("button",{onClick:t.toggleOpen,className:"add-board-button"},"Add a new board...")}),t.state={isOpen:!1,title:""},t}return x()(t,e),t}(h.Component),X=Object(y.connect)(function(e){return{userId:e.user?e.user._id:"guest"}})(F),H=(n(43),function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"render",function(){var e=n.props,t=e.boards,a=e.listsById,r=e.history;return f.a.createElement(f.a.Fragment,null,f.a.createElement(g.Title,null,"Home | React Kanban"),f.a.createElement(R,null),f.a.createElement("div",{className:"home"},f.a.createElement("div",{className:"main-content"},f.a.createElement("h1",null,"Boards"),f.a.createElement("div",{className:"boards"},t.map(function(e){return f.a.createElement(I.Link,{key:e._id,className:k()("board-link","blue"),to:"/b/"+e._id+"/"+_()(e.title,{lower:!0})},f.a.createElement("div",{className:"board-link-title"},e.title),f.a.createElement("div",{className:"mini-board"},e.lists.map(function(e){return f.a.createElement("div",{key:e,className:"mini-list",style:{height:Math.min(18*(a[e].cards.length+1),100)+"%"}})})))}),f.a.createElement(X,{history:r})))))}),t||T()(n)}return x()(t,e),t}(h.Component)),P=Object(y.connect)(function(e){var t=e.boardsById,n=e.listsById;return{boards:Object.keys(t).map(function(e){return t[e]}),listsById:n}})(H),U=n(13),G=n.n(U),W=n(9),z=n.n(W),V=n(8),J=n(12),Y=n.n(J),Q=(n(42),function(e){function t(t){var n;return n=e.call(this,t)||this,N()(T()(T()(n)),"handleChange",function(e){n.setState({newTitle:e.target.value})}),N()(T()(T()(n)),"handleKeyDown",function(e){13===e.keyCode?(e.preventDefault(),n.handleSubmit()):27===e.keyCode&&n.revertTitle()}),N()(T()(T()(n)),"handleSubmit",function(){var e=n.state.newTitle,t=n.props,a=t.listTitle,r=t.listId,i=t.dispatch;""!==e&&(e!==a&&i({type:"CHANGE_LIST_TITLE",payload:{listTitle:e,listId:r}}),n.setState({isOpen:!1}))}),N()(T()(T()(n)),"revertTitle",function(){n.setState({newTitle:n.props.listTitle,isOpen:!1})}),N()(T()(T()(n)),"deleteList",function(){var e=n.props,t=e.listId,a=e.cards,r=e.boardId;(0,e.dispatch)({type:"DELETE_LIST",payload:{cards:a,listId:t,boardId:r}})}),N()(T()(T()(n)),"openTitleEditor",function(){n.setState({isOpen:!0})}),N()(T()(T()(n)),"handleButtonKeyDown",function(e){13===e.keyCode&&(e.preventDefault(),n.openTitleEditor())}),n.state={isOpen:!1,newTitle:t.listTitle},n}return x()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.isOpen,a=t.newTitle,r=this.props,i=r.dragHandleProps,o=r.listTitle;return f.a.createElement("div",{className:"list-header"},n?f.a.createElement("div",{className:"list-title-textarea-wrapper"},f.a.createElement(z.a,{autoFocus:!0,useCacheForDOMMeasurements:!0,value:a,onChange:this.handleChange,onKeyDown:this.handleKeyDown,className:"list-title-textarea",onBlur:this.handleSubmit,spellCheck:!1})):f.a.createElement("div",G()({},i,{role:"button",tabIndex:0,onClick:this.openTitleEditor,onKeyDown:function(t){e.handleButtonKeyDown(t),i.onKeyDown(t)},className:"list-title-button"}),o),f.a.createElement(V.Wrapper,{className:"delete-list-wrapper",onSelection:this.deleteList},f.a.createElement(V.Button,{className:"delete-list-button"},f.a.createElement(Y.a,null)),f.a.createElement(V.Menu,{className:"delete-list-menu"},f.a.createElement("div",{className:"delete-list-header"},"Are you sure?"),f.a.createElement(V.MenuItem,{className:"delete-list-confirm"},"Delete"))))},t}(h.Component)),Z=Object(y.connect)()(Q),$=n(3),ee=n.n($),te=n(21),ne=n.n(te),ae=(n(41),function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"deleteCard",function(){var e=n.props,t=e.dispatch,a=e.listId;t({type:"DELETE_CARD",payload:{cardId:e.card._id,listId:a}})}),t||T()(n)}return x()(t,e),t.prototype.render=function(){var e=this.props.isCardNearRightBorder;return f.a.createElement("div",{className:"options-list",style:{alignItems:e?"flex-end":"flex-start"}},f.a.createElement("div",null,f.a.createElement("button",{onClick:this.deleteCard,className:"options-list-button"},f.a.createElement("div",{className:"modal-icon"},f.a.createElement(Y.a,null))," Delete")))},t}(h.Component)),re=Object(y.connect)()(ae),ie=(n(40),function(e){function t(t){var n;return n=e.call(this,t)||this,N()(T()(T()(n)),"componentWillReceiveProps",function(e){n.setState({newText:e.card.text})}),N()(T()(T()(n)),"handleKeyDown",function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),n.submitCard())}),N()(T()(T()(n)),"submitCard",function(){var e=n.state.newText,t=n.props,a=t.card,r=t.listId,i=t.dispatch,o=t.toggleCardEditor;""===e?n.deleteCard():e!==a.text&&i({type:"CHANGE_CARD_TEXT",payload:{cardText:e,cardId:a._id,listId:r}}),o()}),N()(T()(T()(n)),"handleChange",function(e){n.setState({newText:e.target.value})}),N()(T()(T()(n)),"handleRequestClose",function(){(0,n.props.toggleCardEditor)()}),n.state={newText:t.card.text,isTextareaFocused:!0},"undefined"!=typeof document&&ne.a.setAppElement("#app"),n}return x()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.newText,a=t.isTextareaFocused,r=this.props,i=r.cardElement,o=r.card,l=r.listId,s=r.isOpen;if(!i)return null;var c=i.getBoundingClientRect(),d=window.innerWidth-c.right<c.left,u=window.innerWidth<550,p={content:{top:Math.min(c.top,window.innerHeight-c.height-18),left:d?null:c.left,right:d?window.innerWidth-c.right:null,flexDirection:d?"row-reverse":"row"}};return f.a.createElement(ne.a,{closeTimeoutMS:150,isOpen:s,onRequestClose:this.handleRequestClose,contentLabel:"Card editor",overlayClassName:"modal-underlay",className:"modal",style:u?{content:{flexDirection:"column",top:3,left:3,right:3}}:p,includeDefaultStyles:!1,onClick:this.handleRequestClose},f.a.createElement("div",{className:"modal-textarea-wrapper",style:{minHeight:u?"none":c.height,width:u?"100%":c.width,boxShadow:a?"0px 0px 3px 2px rgb(0, 180, 255)":null}},f.a.createElement(z.a,{autoFocus:!0,useCacheForDOMMeasurements:!0,value:n,onChange:this.handleChange,onKeyDown:this.handleKeyDown,className:"modal-textarea",spellCheck:!1,onFocus:function(){return e.setState({isTextareaFocused:!0})},onBlur:function(){return e.setState({isTextareaFocused:!1})}})),f.a.createElement(re,{card:o,listId:l,boundingRect:c,isCardNearRightBorder:d,isThinDisplay:u}))},t}(h.Component)),oe=Object(y.connect)()(ie),le=n(25),se=n.n(le),ce=function(e){var t=0;return se()(e,{sanitize:!0,gfm:!0,breaks:!0}).replace(/<a/g,'<a target="_blank"').replace(/\[(\s|x)\]/g,function(e){var n;return n="[ ]"===e?"<input id="+t+' onclick="return false" type="checkbox">':"<input id="+t+' checked onclick="return false" type="checkbox">',t+=1,n})},de=(n(39),function(e){function t(){var t;return t=e.call(this)||this,N()(T()(T()(t)),"toggleCardEditor",function(){t.setState({isModalOpen:!t.state.isModalOpen})}),N()(T()(T()(t)),"handleClick",function(e){var n=e.target,a=n.tagName,r=n.checked,i=n.id;"input"===a.toLowerCase()?t.toggleCheckbox(r,parseInt(i,10)):"a"!==a.toLowerCase()&&t.toggleCardEditor(e)}),N()(T()(T()(t)),"handleKeyDown",function(e){13===e.keyCode&&"a"!==e.target.tagName.toLowerCase()&&(e.preventDefault(),t.toggleCardEditor())}),N()(T()(T()(t)),"toggleCheckbox",function(e,n){var a=t.props,r=a.card,i=a.dispatch,o=0,l=r.text.replace(/\[(\s|x)\]/g,function(t){var a;return a=n===o?e?"[x]":"[ ]":t,o+=1,a});i({type:"CHANGE_CARD_TEXT",payload:{cardId:r._id,cardText:l}})}),t.state={isModalOpen:!1},t}return x()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.card,a=t.index,r=t.listId,i=t.isDraggingOver,o=this.state.isModalOpen;!function(e){var t=e.match(/\[(\s|x)\]/g)||[],n=t.filter(function(e){return"[x]"===e}).length;t.length}(n.text);return f.a.createElement(f.a.Fragment,null,f.a.createElement(C.Draggable,{draggableId:n._id,index:a},function(t,a){return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",G()({className:k()("card-title",{"card-title--drag":a.isDragging}),ref:function(n){t.innerRef(n),e.ref=n}},t.draggableProps,t.dragHandleProps,{onClick:function(n){t.dragHandleProps.onClick(n),e.handleClick(n)},onKeyDown:function(n){t.dragHandleProps.onKeyDown(n),e.handleKeyDown(n)},style:ee()({},t.draggableProps.style,{background:n.color})}),f.a.createElement("div",{className:"card-title-html",dangerouslySetInnerHTML:{__html:ce(n.text)}})),i&&t.placeholder)}),f.a.createElement(oe,{isOpen:o,cardElement:this.ref,card:n,listId:r,toggleCardEditor:this.toggleCardEditor}))},t}(h.Component)),ue=Object(y.connect)(function(e,t){return{card:e.cardsById[t.cardId]}})(de),pe=function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"componentDidUpdate",function(e){n.props.cards[n.props.cards.length-2]===e.cards[e.cards.length-1]&&n.scrollToBottom()}),N()(T()(T()(n)),"scrollToBottom",function(){n.listEnd.scrollIntoView()}),t||T()(n)}return x()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.listId,a=t.cards;return f.a.createElement(C.Droppable,{droppableId:n},function(t,r){var i=r.isDraggingOver;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"cards",ref:t.innerRef},a.map(function(e,t){return f.a.createElement(ue,{isDraggingOver:i,key:e,cardId:e,index:t,listId:n})}),t.placeholder,f.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.listEnd=t}})))})},t}(h.Component),me=Object(y.connect)(function(e,t){return{cards:e.listsById[t.listId].cards}})(pe),he=(n(38),function(e){function t(){var t;return t=e.call(this)||this,N()(T()(T()(t)),"toggleCardComposer",function(){t.setState({isOpen:!t.state.isOpen})}),N()(T()(T()(t)),"handleChange",function(e){t.setState({newText:e.target.value})}),N()(T()(T()(t)),"handleKeyDown",function(e){13===e.keyCode&&!1===e.shiftKey?t.handleSubmit(e):27===e.keyCode&&t.toggleCardComposer()}),N()(T()(T()(t)),"handleSubmit",function(e){e.preventDefault();var n=t.state.newText,a=t.props,r=a.listId,i=a.dispatch;""!==n&&(i({type:"ADD_CARD",payload:{cardText:n,cardId:B.a.generate(),listId:r}}),t.toggleCardComposer(),t.setState({newText:""}))}),t.state={newText:"",isOpen:!1},t}return x()(t,e),t.prototype.render=function(){var e=this.state,t=e.newText;return e.isOpen?f.a.createElement(K,{handleClickOutside:this.toggleCardComposer},f.a.createElement("form",{onSubmit:this.handleSubmit,className:"card-adder-textarea-wrapper"},f.a.createElement(z.a,{autoFocus:!0,useCacheForDOMMeasurements:!0,minRows:1,onChange:this.handleChange,onKeyDown:this.handleKeyDown,value:t,className:"card-adder-textarea",placeholder:"Add a new card...",spellCheck:!1,onBlur:this.toggleCardComposer}))):f.a.createElement("button",{onClick:this.toggleCardComposer,className:"add-card-button"},"+")},t}(h.Component)),fe=Object(y.connect)()(he),be=(n(37),function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"render",function(){var e=n.props,t=e.list,a=e.boardId,r=e.index;return f.a.createElement(C.Draggable,{draggableId:t._id,index:r,disableInteractiveElementBlocking:!0},function(e,n){return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",G()({ref:e.innerRef},e.draggableProps,{className:"list-wrapper"}),f.a.createElement("div",{className:k()("list",{"list--drag":n.isDragging})},f.a.createElement(Z,{dragHandleProps:e.dragHandleProps,listTitle:t.title,listId:t._id,cards:t.cards,boardId:a}),f.a.createElement("div",{className:"cards-wrapper"},f.a.createElement(me,{listId:t._id}))),f.a.createElement(fe,{listId:t._id})),e.placeholder)})}),t||T()(n)}return x()(t,e),t}(h.Component)),Ee=Object(y.connect)()(be),ye=(n(36),function(e){function t(){var t;return t=e.call(this)||this,N()(T()(T()(t)),"handleBlur",function(){t.setState({isOpen:!1})}),N()(T()(T()(t)),"handleChange",function(e){t.setState({listTitle:e.target.value})}),N()(T()(T()(t)),"handleKeyDown",function(e){13===e.keyCode?(e.preventDefault(),t.handleSubmit()):27===e.keyCode&&t.setState({isOpen:!1,listTitle:""})}),N()(T()(T()(t)),"handleSubmit",function(){var e=t.props,n=e.dispatch,a=e.boardId,r=t.state.listTitle,i=B.a.generate();""!==r&&(n({type:"ADD_LIST",payload:{listTitle:r,listId:i,boardId:a}}),t.setState({isOpen:!1,listTitle:""}))}),N()(T()(T()(t)),"render",function(){var e=t.state,n=e.isOpen,a=e.listTitle;return n?f.a.createElement("div",{className:"list"},f.a.createElement(z.a,{autoFocus:!0,useCacheForDOMMeasurements:!0,value:a,onChange:t.handleChange,onKeyDown:t.handleKeyDown,className:"list-adder-textarea",onBlur:t.handleBlur,spellCheck:!1})):f.a.createElement("button",{onClick:function(){return t.setState({isOpen:!0})},className:"add-list-button"},"Add a new list...")}),t.state={isOpen:!1,listTitle:""},t}return x()(t,e),t}(h.Component)),ve=Object(y.connect)()(ye),ge=(n(35),function(e){function t(t){var n;return n=e.call(this,t)||this,N()(T()(T()(n)),"handleClick",function(){n.setState({isOpen:!0})}),N()(T()(T()(n)),"handleChange",function(e){n.setState({newTitle:e.target.value})}),N()(T()(T()(n)),"submitTitle",function(){var e=n.props,t=e.dispatch,a=e.boardId,r=e.boardTitle,i=n.state.newTitle;""!==i&&(r!==i&&t({type:"CHANGE_BOARD_TITLE",payload:{boardTitle:i,boardId:a}}),n.setState({isOpen:!1}))}),N()(T()(T()(n)),"revertTitle",function(){var e=n.props.boardTitle;n.setState({newTitle:e,isOpen:!1})}),N()(T()(T()(n)),"handleKeyDown",function(e){13===e.keyCode?n.submitTitle():27===e.keyCode&&n.revertTitle()}),N()(T()(T()(n)),"handleFocus",function(e){e.target.select()}),n.state={isOpen:!1,newTitle:t.boardTitle},n}return x()(t,e),t.prototype.render=function(){var e=this.state,t=e.isOpen,n=e.newTitle,a=this.props.boardTitle;return t?f.a.createElement("input",{autoFocus:!0,value:n,type:"text",onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.revertTitle,onFocus:this.handleFocus,className:"board-title-input",spellCheck:!1}):f.a.createElement("button",{className:"board-title-button",onClick:this.handleClick},f.a.createElement("h1",{className:"board-title-text"},a))},t}(h.Component)),Ce=Object(I.withRouter)(Object(y.connect)(function(e,t){var n=t.match.params.boardId;return{boardTitle:e.boardsById[n].title,boardId:n}})(ge)),Ie=(n(34),function(e){function t(){for(var t,n,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return t=n=e.call.apply(e,[this].concat(r))||this,N()(T()(T()(n)),"handleSelection",function(){var e=n.props,t=e.dispatch,a=e.match,r=e.history;t({type:"DELETE_BOARD",payload:{boardId:a.params.boardId}}),r.push("/")}),N()(T()(T()(n)),"render",function(){return f.a.createElement(V.Wrapper,{className:"board-deleter-wrapper",onSelection:n.handleSelection},f.a.createElement(V.Button,{className:"board-deleter-button"},f.a.createElement("div",{className:"modal-icon"},f.a.createElement(Y.a,null)),f.a.createElement("div",{className:"board-header-right-text"}," Delete board")),f.a.createElement(V.Menu,{className:"board-deleter-menu"},f.a.createElement("div",{className:"board-deleter-header"},"Are you sure?"),f.a.createElement(V.MenuItem,{className:"board-deleter-confirm"},"Delete")))}),t||T()(n)}return x()(t,e),t}(h.Component)),we=Object(I.withRouter)(Object(y.connect)()(Ie)),xe=(n(33),function(){return f.a.createElement("div",{className:"board-header"},f.a.createElement(Ce,null),f.a.createElement("div",{className:"board-header-right"},f.a.createElement(we,null)))}),De=(n(32),function(e){function t(t){var n;return n=e.call(this,t)||this,N()(T()(T()(n)),"componentDidMount",function(){var e=n.props,t=e.boardId;(0,e.dispatch)({type:"PUT_BOARD_ID_IN_REDUX",payload:{boardId:t}})}),N()(T()(T()(n)),"handleDragEnd",function(e){var t=e.source,a=e.destination,r=e.type;if(a){var i=n.props,o=i.dispatch,l=i.boardId;"COLUMN"!==r?t.index===a.index&&t.droppableId===a.droppableId||o({type:"MOVE_CARD",payload:{sourceListId:t.droppableId,destListId:a.droppableId,oldCardIndex:t.index,newCardIndex:a.index,boardId:l}}):t.index!==a.index&&o({type:"MOVE_LIST",payload:{oldListIndex:t.index,newListIndex:a.index,boardId:t.droppableId}})}}),N()(T()(T()(n)),"handleMouseDown",function(e){var t=e.target,a=e.clientX;"list-wrapper"!==t.className&&"lists"!==t.className||(window.addEventListener("mousemove",n.handleMouseMove),window.addEventListener("mouseup",n.handleMouseUp),n.setState({startX:a,startScrollX:window.scrollX}))}),N()(T()(T()(n)),"handleMouseMove",function(e){var t=e.clientX,a=n.state,r=a.startX,i=a.startScrollX,o=i-t+r;window.scrollTo(o,0);var l=window.scrollX;o!==l&&n.setState({startX:t+l-i})}),N()(T()(T()(n)),"handleMouseUp",function(){n.state.startX&&(window.removeEventListener("mousemove",n.handleMouseMove),window.removeEventListener("mouseup",n.handleMouseUp),n.setState({startX:null,startScrollX:null}))}),N()(T()(T()(n)),"handleWheel",function(e){var t=e.target,n=e.deltaY;"list-wrapper"!==t.className&&"lists"!==t.className&&"open-composer-button"!==t.className&&"list-title-button"!==t.className||(1===Math.sign(n)?window.scrollTo(window.scrollX+80,0):-1===Math.sign(n)&&window.scrollTo(window.scrollX-80,0))}),N()(T()(T()(n)),"render",function(){var e=n.props,t=e.lists,a=e.boardTitle,r=e.boardId;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:k()("board","blue")},f.a.createElement(g.Title,null,a," | React & Redux Kanban Board"),f.a.createElement(R,null),f.a.createElement(xe,null),f.a.createElement("div",{className:"lists-wrapper",onMouseDown:n.handleMouseDown,onWheel:n.handleWheel},f.a.createElement(C.DragDropContext,{onDragEnd:n.handleDragEnd},f.a.createElement(C.Droppable,{droppableId:r,type:"COLUMN",direction:"horizontal"},function(e){return f.a.createElement("div",{className:"lists",ref:e.innerRef},t.map(function(e,t){return f.a.createElement(Ee,{list:e,boardId:r,index:t,key:e._id})}),e.placeholder,f.a.createElement(ve,{boardId:r}))}))),f.a.createElement("div",{className:"board-underlay"})))}),n.state={startX:null,startScrollX:null},n}return x()(t,e),t}(h.Component)),Te=Object(y.connect)(function(e,t){var n=t.board;return{lists:n.lists.map(function(t){return e.listsById[t]}),boardTitle:n.title,boardId:n._id}})(De),Oe=Object(y.connect)(function(e,t){var n=t.match.params.boardId;return{board:e.boardsById[n]}})(function(e){return e.board?f.a.createElement(Te,{board:e.board}):f.a.createElement(v.Redirect,{to:"/"})}),Ne=(n(31),Object(I.withRouter)(function(){return f.a.createElement(I.Switch,null,f.a.createElement(I.Route,{exact:!0,path:"/",component:P}),f.a.createElement(I.Route,{path:"/b/:boardId",component:Oe}),f.a.createElement(I.Redirect,{to:"/"}))})),Se=n(11),_e=n.n(Se),Ae=function(e,t){switch(void 0===e&&(e={}),t.type){case"ADD_CARD":var n,a=t.payload,r=a.cardText,i=a.cardId;return ee()({},e,((n={})[i]={text:r,_id:i},n));case"CHANGE_CARD_TEXT":var o,l=t.payload,s=l.cardText,c=l.cardId;return ee()({},e,((o={})[c]=ee()({},e[c],{text:s}),o));case"CHANGE_CARD_DATE":var d,u=t.payload,p=u.date,m=u.cardId;return ee()({},e,((d={})[m]=ee()({},e[m],{date:p}),d));case"CHANGE_CARD_COLOR":var h,f=t.payload,b=f.color,E=f.cardId;return ee()({},e,((h={})[E]=ee()({},e[E],{color:b}),h));case"DELETE_CARD":var y=t.payload.cardId,v=e;return v[y],_e()(v,[y]);case"DELETE_LIST":var g=t.payload.cards;return Object.keys(e).filter(function(e){return!g.includes(e)}).reduce(function(t,n){var a;return ee()({},t,((a={})[n]=e[n],a))},{});default:return e}},ke=function(e,t){switch(void 0===e&&(e={}),t.type){case"ADD_CARD":var n,a=t.payload,r=a.listId,i=a.cardId;return ee()({},e,((n={})[r]=ee()({},e[r],{cards:e[r].cards.concat([i])}),n));case"MOVE_CARD":var o,l=t.payload,s=l.oldCardIndex,c=l.newCardIndex,d=l.sourceListId,u=l.destListId;if(d===u){var p,m=Array.from(e[d].cards),h=m.splice(s,1)[0];return m.splice(c,0,h),ee()({},e,((p={})[d]=ee()({},e[d],{cards:m}),p))}var f=Array.from(e[d].cards),b=f.splice(s,1)[0],E=Array.from(e[u].cards);return E.splice(c,0,b),ee()({},e,((o={})[d]=ee()({},e[d],{cards:f}),o[u]=ee()({},e[u],{cards:E}),o));case"DELETE_CARD":var y,v=t.payload,g=v.cardId,C=v.listId;return ee()({},e,((y={})[C]=ee()({},e[C],{cards:e[C].cards.filter(function(e){return e!==g})}),y));case"ADD_LIST":var I,w=t.payload,x=w.listId,D=w.listTitle;return ee()({},e,((I={})[x]={_id:x,title:D,cards:[]},I));case"CHANGE_LIST_TITLE":var T,O=t.payload,N=O.listId,S=O.listTitle;return ee()({},e,((T={})[N]=ee()({},e[N],{title:S}),T));case"DELETE_LIST":var _=t.payload.listId,A=e;return A[_],_e()(A,[_]);default:return e}},Re=function(e,t){switch(void 0===e&&(e={}),t.type){case"ADD_LIST":var n,a=t.payload,r=a.boardId,i=a.listId;return ee()({},e,((n={})[r]=ee()({},e[r],{lists:e[r].lists.concat([i])}),n));case"MOVE_LIST":var o,l=t.payload,s=l.oldListIndex,c=l.newListIndex,d=l.boardId,u=Array.from(e[d].lists),p=u.splice(s,1)[0];return u.splice(c,0,p),ee()({},e,((o={})[d]=ee()({},e[d],{lists:u}),o));case"DELETE_LIST":var m,h=t.payload,f=h.listId,b=h.boardId;return ee()({},e,((m={})[b]=ee()({},e[b],{lists:e[b].lists.filter(function(e){return e!==f})}),m));case"ADD_BOARD":var E,y=t.payload,v=y.boardTitle,g=y.boardId;return ee()({},e,((E={})[g]={_id:g,title:v,lists:[]},E));case"CHANGE_BOARD_TITLE":var C,I=t.payload,w=I.boardTitle,x=I.boardId;return ee()({},e,((C={})[x]=ee()({},e[x],{title:w}),C));case"CHANGE_BOARD_COLOR":var D,T=t.payload,O=T.boardId,N=T.color;return ee()({},e,((D={})[O]=ee()({},e[O],{color:N}),D));case"DELETE_BOARD":var S=t.payload.boardId,_=e;return _[S],_e()(_,[S]);default:return e}},Le=function(e,t){switch(void 0===e&&(e=null),t.type){case"PUT_BOARD_ID_IN_REDUX":case"ADD_BOARD":return t.payload.boardId;default:return e}},Be=Object(E.combineReducers)({cardsById:Ae,listsById:ke,boardsById:Re,currentBoardId:Le}),Me=JSON.parse(Object(m.readFileSync)("./dist/public/manifest.json","utf8")),je=Object(m.readFileSync)("./dist/public/main.css","utf8"),qe=function(e,t){var n=Object(E.createStore)(Be,e.initialState),a=[];Object(C.resetContext)();var r=Object(b.renderToString)(f.a.createElement(g.HeadCollector,{headTags:a},f.a.createElement(y.Provider,{store:n},f.a.createElement(v.StaticRouter,{location:e.url,context:{}},f.a.createElement(Ne,null))))),i=n.getState(),o='\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n        <style>'+je+"</style>\n        "+Object(b.renderToString)(a)+'\n      </head>\n      <body>\n        <div id="app">'+r+"</div>\n      </body>\n      <script>\n        window.PRELOADED_STATE = "+JSON.stringify(i)+"\n      <\/script>\n      <script src="+Me["main.js"]+"><\/script>\n    </html>\n  ";t.send(o)},Ke=n(16),Fe=function(){return function(e,t,n){var a,r,i,o;e.initialState=(a={},r=new Ke.schema.Entity("cardsById",{},{idAttribute:"_id"}),i=new Ke.schema.Entity("listsById",{cards:[r]},{idAttribute:"_id"}),o=new Ke.schema.Entity("boardsById",{lists:[i]},{idAttribute:"_id"}),Object(Ke.normalize)(a,[o]).entities),n()}},Xe=r()();Xe.use(d()()),Xe.use(p()("tiny")),Xe.use(s()()),Xe.use(r.a.json()),Xe.use(r.a.urlencoded({extended:!0})),Xe.use("/static",r.a.static("dist/public",{maxAge:"1y"})),Xe.use(o.a.initialize()),Xe.use(o.a.session()),Xe.use(Fe()),Xe.get("*",qe);var He=process.env.PORT||"1337";Xe.listen(He,function(){return console.log("Server listening on port "+He)})},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){}]);