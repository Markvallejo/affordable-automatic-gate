import{j as s}from"./jsx-runtime.D5qyYPMi.js";import{r as o}from"./index.CZlPm10g.js";import{M as m}from"./modal.CUx-k28y.js";import{G as x,b as h}from"./gallery.oOQM8HV4.js";import"./index.DmcuHbSi.js";/* empty css                       */const j=({image:e,title:a,description:t,currentIndex:n})=>{const i="card-gates",[r,l]=o.useState(!1),c=()=>{l(!1)},d=()=>{l(!0)};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`${i}`,onClick:d,children:[s.jsx("div",{className:`${i}__image-container`,children:s.jsx("img",{src:e,alt:"style gate"})}),s.jsxs("div",{className:`${i}__text-container`,children:[s.jsx("h3",{children:a}),s.jsx("div",{dangerouslySetInnerHTML:{__html:t}})]})]}),r&&s.jsx(m,{title:"Gallery",closeModalHandler:c,children:s.jsx(x,{currentIndex:n})})]})},f=({})=>{const e="styles-gates";return s.jsxs("div",{id:"gate-styles",className:`${e}__container`,children:[s.jsxs("div",{className:`${e}__top`,children:[s.jsxs("div",{className:`${e}__image-title-container`,children:[s.jsx("div",{className:`${e}__image-container`,children:s.jsx("img",{src:"assets/home_styles_icon.png",alt:"styles icon"})}),s.jsx("div",{className:`${e}__title-container`,children:s.jsxs("h2",{children:["Gate and fence ",s.jsx("strong",{children:"Styles"})]})})]}),s.jsxs("p",{className:`${e}__description`,children:["Rectangular or with arch, all built with the",s.jsx("strong",{children:" best quality materials"}),", we specialize in mixing styles and creating ",s.jsx("strong",{children:"custom designs"}),"and fixing any gate and fence problems."]})]}),s.jsx("div",{className:`${e}__grid-cards`,children:h.map((a,t)=>s.jsx(j,{currentIndex:t,image:a.image,title:a.title,description:a.description},t))})]})};export{f as default};
