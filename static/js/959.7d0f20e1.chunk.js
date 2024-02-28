"use strict";(self.webpackChunktodo_list_test=self.webpackChunktodo_list_test||[]).push([[959],{215:function(e,s,t){t.d(s,{Z:function(){return r}});t(791);var a="CategorySearchSelector_selector__nv-Qh",c=t(184),r=function(e){var s=e.searchQuery,t=e.setSearchQuery;return(0,c.jsxs)("select",{className:a,"aria-label":"Select the category for task",value:s,onChange:function(e){return t(e.target.value)},children:[(0,c.jsx)("option",{value:"work",children:"Work"}),(0,c.jsx)("option",{value:"study",children:"Study"}),(0,c.jsx)("option",{value:"personal",children:"Personal"})]})}},539:function(e,s,t){t.d(s,{Z:function(){return l}});t(791);var a=t(420),c=t(617),r=t(573),n={wrapper:"Task_wrapper__zvx3s",checkboxBlock:"Task_checkboxBlock__cu9wR",checkbox:"Task_checkbox__XsrPA",taskDetails:"Task_taskDetails__gua-q",taskAdditional:"Task_taskAdditional__8X7c8",categoryText:"Task_categoryText__mmx3K",btn:"Task_btn__5Zeie"},i=t(184),l=function(e){var s=e.task,t=(0,a.I0)(),l=function(){return t((0,r.KE)(s.id))};return(0,i.jsxs)("div",{className:n.wrapper,children:[(0,i.jsxs)("div",{className:n.checkboxBlock,children:[!s.completed&&(0,i.jsx)("p",{className:n.checkboxLabel,children:"Done"}),(0,i.jsx)("div",{className:n.checkboxWrapper,children:s.completed?(0,i.jsx)(c.pl2,{className:n.checkboxIconChecked,onClick:l,style:{fontSize:"20px"}}):(0,i.jsx)("div",{className:n.checkbox,onClick:l})})]}),(0,i.jsx)("div",{className:n.taskDetails,children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:n.nameText,children:[(0,i.jsx)("strong",{children:"Task:"})," ",s.text.name]}),(0,i.jsxs)("p",{className:n.descriptionText,children:[(0,i.jsx)("strong",{children:"Description:"})," ",s.text.description||"No Description"]}),(0,i.jsx)("p",{className:n.dateText,children:(0,i.jsx)("strong",{children:s.text.dueDate})})]})}),(0,i.jsxs)("div",{className:n.taskAdditional,children:[(0,i.jsx)("p",{className:n.categoryText,children:s.text.category}),(0,i.jsx)("button",{className:n.btn,onClick:function(){return t((0,r._5)(s.id))},children:(0,i.jsx)(c.HLd,{style:{fontSize:"20px"}})})]})]})}},959:function(e,s,t){t.r(s);var a=t(439),c=t(791),r=t(420),n=t(215),i=t(539),l=t(829),o=t(364),d=t(184);s.default=function(){var e=(0,r.v9)(l.A),s=(0,c.useState)(""),t=(0,a.Z)(s,2),x=t[0],h=t[1],p=e.filter((function(e){return e.completed&&e.text.category.toLowerCase().includes(x.toLowerCase())}));return(0,d.jsxs)("section",{className:o.Z.pageSection,children:[(0,d.jsxs)("div",{className:o.Z.pageWrapper,children:[(0,d.jsx)("h2",{className:o.Z.heading,children:"Completed tasks"}),(0,d.jsx)(n.Z,{searchQuery:x,setSearchQuery:h})]}),(0,d.jsx)("div",{className:o.Z.filteredList,children:p.map((function(e){return(0,d.jsx)(i.Z,{task:e},e.id)}))})]})}},364:function(e,s){s.Z={pageSection:"CompletedTasksPage_pageSection__e+nB1",pageWrapper:"CompletedTasksPage_pageWrapper__9ey71",heading:"CompletedTasksPage_heading__UaQiw",filteredList:"CompletedTasksPage_filteredList__0FBPR"}}}]);
//# sourceMappingURL=959.7d0f20e1.chunk.js.map