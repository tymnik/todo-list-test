"use strict";(self.webpackChunktodo_list_test=self.webpackChunktodo_list_test||[]).push([[959],{241:function(e,t,s){s(791);var n=s(184);t.Z=function(e){var t=e.searchQuery,s=e.setSearchQuery;return(0,n.jsxs)("select",{value:t,onChange:function(e){return s(e.target.value)},children:[(0,n.jsx)("option",{value:"work",children:"Work"}),(0,n.jsx)("option",{value:"study",children:"Study"}),(0,n.jsx)("option",{value:"personal",children:"Personal"})]})}},539:function(e,t,s){s.d(t,{Z:function(){return o}});s(791);var n=s(420),a=s(617),r=s(573),c={},i=s(184),o=function(e){var t=e.task,s=(0,n.I0)();return(0,i.jsxs)("div",{className:c.wrapper,children:[(0,i.jsx)("input",{type:"checkbox",className:c.checkbox,checked:t.completed,onChange:function(){return s((0,r.KE)(t.id))}}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:c.nameText,children:[(0,i.jsx)("strong",{children:"Task:"})," ",t.text.name]}),(0,i.jsxs)("p",{className:c.descriptionText,children:[(0,i.jsx)("strong",{children:"Description:"}),t.text.description||"No Description"]}),(0,i.jsx)("p",{className:c.dateText,children:t.text.dueDate}),(0,i.jsx)("p",{className:c.categoryText,children:t.text.category})]}),(0,i.jsx)("button",{className:c.btn,onClick:function(){return s((0,r._5)(t.id))},children:(0,i.jsx)(a.HLd,{style:{fontSize:"20px"}})})]})}},959:function(e,t,s){s.r(t);var n=s(439),a=s(791),r=s(420),c=s(241),i=s(539),o=s(829),l=s(364),d=s(184);t.default=function(){var e=(0,r.v9)(o.A),t=(0,a.useState)(""),s=(0,n.Z)(t,2),u=s[0],p=s[1],h=e.filter((function(e){return e.completed&&e.text.category.toLowerCase().includes(u.toLowerCase())}));return(0,d.jsxs)("section",{className:l.Z.pageSection,children:[(0,d.jsxs)("div",{className:l.Z.pageWrapper,children:[(0,d.jsx)("h2",{className:l.Z.heading,children:"Completed tasks"}),(0,d.jsx)(c.Z,{searchQuery:u,setSearchQuery:p})]}),(0,d.jsx)("div",{children:h.map((function(e){return(0,d.jsx)(i.Z,{task:e},e.id)}))})]})}},364:function(e,t){t.Z={pageSection:"CompletedTasksPage_pageSection__e+nB1",pageWrapper:"CompletedTasksPage_pageWrapper__9ey71",heading:"CompletedTasksPage_heading__UaQiw"}}}]);
//# sourceMappingURL=959.f0434e76.chunk.js.map