import{R as h,L as E,a as o,j as a,d as j,b as m,c as z,r as N,u as T,F as B}from"./index-373203f5.js";import{s as l,N as R,a as _,b as P}from"./firebase-25c1e4e2.js";import{b as D,L as A,B as H}from"./rickAndMortyApi-4425beed.js";var L={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},O=h.createContext&&h.createContext(L),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++){n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},d.apply(this,arguments)},G=globalThis&&globalThis.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]]);return e};function S(t){return t&&t.map(function(n,e){return h.createElement(n.tag,d({key:e},n.attr),S(n.child))})}function F(t){return function(n){return h.createElement(M,d({attr:d({},t.attr)},n),S(t.child))}}function M(t){var n=function(e){var r=t.attr,i=t.size,f=t.title,p=G(t,["attr","size","title"]),c=i||e.size||"1em",s;return e.className&&(s=e.className),t.className&&(s=(s?s+" ":"")+t.className),h.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,p,{className:s,style:d(d({color:t.color||e.color},e.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),f&&h.createElement("title",null,f),t.children)};return O!==void 0?h.createElement(O.Consumer,null,function(e){return n(e)}):n(L)}function U(t){return F({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(t)}const W=l(E)`
  position: absolute;
  left: 24px;
  top: 23px;
  display: flex;
  width: 108px;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  color: #000000;
  :hover,
  :focus {
    color: green;
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    left: 50px;
    top: 21px;
  }
`;function K({to:t,children:n}){return o(W,{to:t,children:[a(U,{size:"24"}),n]})}const q=()=>{const{id:t}=j(),[n,e]=m.useState({}),[r,i]=m.useState(!1),[f,p]=m.useState(!1),c=z();return m.useEffect(()=>{async function s(y){try{p(!0);const b=await D(y);e(b)}catch{R.Notify.failure("Can`t load characters!"),c(N.HOME,{replace:!0})}finally{p(!1)}}s(t)},[t,c]),m.useEffect(()=>{r!==!1&&toast.error(r)},[r]),{character:n,isLoading:f}},J=l.div`
  position: relative;
  width: 368px;
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`,Q=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 109px;
  padding-right: 109px;
  padding-top: 124px;
  margin-bottom: 34px;
  @media screen and (min-width: 1440px) {
    padding-top: 76px;
    padding-left: 557px;
    padding-right: 583px;
  }
`,V=l.img`
  width: 150px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
  margin-bottom: 34px;
  @media screen and (min-width: 1440px) {
    width: 300px;
    margin-bottom: 16px;
  }
`,X=l.h2`
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.19;
  align-items: center;
  text-align: center;
  color: #081f32;
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 1.17;
  }
`,Y=l.div`
  margin-left: 24px;
  margin-right: 32px;
  margin-bottom: 85px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 142px;
  }
`,Z=l.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    text-align: center;
    margin-bottom: 48px;
  }
`,$=l.ul`
  width: 312px;
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 413px;
  }
`,g=l.li`
  margin-left: 16px;
  padding-top: 9px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`,u=l.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #081f32;
`,x=l.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6e798c;
`,rt=()=>{var C;const t=T(),[n,e]=m.useState(localStorage.getItem("isAuth")),{character:r,isLoading:i}=q(),f=((C=t==null?void 0:t.state)==null?void 0:C.from)??"/",{image:p,name:c,gender:s,status:y,species:b,type:w,origin:v}=r,k=z(),I=()=>{_(P).then(()=>{localStorage.clear(),e(!1),k("/login")})};return o(B,{children:[i&&a(A,{}),o(J,{children:[a(K,{to:f,children:"Go Back"}),a(H,{type:"button",onClick:()=>I(),children:"Sign Out"}),o(Q,{children:[a(V,{src:p,alt:c}),a(X,{children:c})]}),o(Y,{children:[a(Z,{children:"Informations"}),o($,{children:[o(g,{children:[a(u,{children:"Gender"}),a(x,{children:s})]}),o(g,{children:[a(u,{children:"Status"}),a(x,{children:y})]}),o(g,{children:[a(u,{children:"Specie"}),a(x,{children:b})]}),o(g,{children:[a(u,{children:"Origin"}),a(x,{children:v&&v.name})]}),o(g,{children:[a(u,{children:"Type"}),a(x,{children:w||"Unknown"})]})]})]})]})]})};export{rt as default};
