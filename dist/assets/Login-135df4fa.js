import{c as n,j as o}from"./index-373203f5.js";import{s,c as a,N as l,g as c,b as g}from"./firebase-25c1e4e2.js";const h=s.button`
  display: flex;
  border-radius: 4px;
  margin: 30vh auto;
  width: 150px;
  background: transparent;
  border: 2px solid lightgreen;
  cursor: pointer;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  :hover,
  :focus {
    color: green;
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    width: 250px;
  }
`,p=({setIsAuth:e})=>{const r=n(),i=()=>{a(g,c).then(t=>{localStorage.setItem("isAuth",!0),e(!0),r("/")}).catch(t=>{console.error(t),l.Notify.failure("Error")})};return o("div",{children:o(h,{type:"button",onClick:()=>i(),children:"Sign in with Google"})})};export{p as default};
