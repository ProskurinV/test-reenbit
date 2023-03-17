import{u as y,j as t,L as w,r as S,a as c,b as r,c as k,O as I}from"./index-373203f5.js";import{f as N,C as v,H as R,B,L as A,a as E}from"./rickAndMortyApi-4425beed.js";import{s,N as u,a as O,b as q}from"./firebase-25c1e4e2.js";const Y=s.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`,j=s.div`
  width: 312px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  &:hover,
  &:focus {
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    min-width: 240px;
  }
`,z=s.img`
  width: 100%;
`,U=s.div`
  padding: 12px;
`,D=s.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`,F=s.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  letter-spacing: 0.25px;

  color: rgba(0, 0, 0, 0.6);
`,L=({characters:o})=>{const a=y();return t(Y,{children:o&&o.map(({image:i,name:n,species:e,id:l})=>t(w,{to:`/${S.CHARACTERDETAILS}/${l}`,state:{from:a},children:c(j,{children:[t(z,{src:i,alt:n}),c(U,{children:[c(D,{children:[" ",n]}),t(F,{children:e})]})]})},l))})},T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgB7ZixSxxBFMa/JAhJkcIUARO4IlekSIpACKRIyrNMkSZlGgv/IAstLbVQsPRKbYSzELSwuCsEtRC0UFBQ0fexu7q+XXd25815C+4PPo6Z3YP5Zt68ebNAQ0NDQ8Nz5gX8+SRqxxqPRS5E+6IDUU90iCHiY4ADn4x/y9AXdUUDDIEqBl4jGvgv+LEuWkW0QsEoa4Dh8V/0ATYYVvOiEwSijAHO/DTyB8+wYJz3U4PiexOir6IvOf+hiVkEWokyBv4gGzbHokW445orN437DZ7AcFpBAF45nnOj/lV9nMEZ0RHccJY3RZ9Fb1P9LTxcNW9eOp5PqjZnvuryn4vmkB1sBwEoMsA41qmSA/GJXZpYUH1tlE/Fj1Jk4Idqb8O25ANk90wbRooM6KyzAzs91R7qCkyo9gHs9FX7HYwUGXij2iFqGh2C4zDiykK1p8hA8NlCNizPYaSKAXPGED6qtnlfFRnQG+477Oja6EkNWA8ehqA20IORIgN5B88/RNVpVZKKNg0nyJzZXFloVbWT6rKKiWTwOgl0EQBXNcqNzPOglepjVfkN0cnsqosYclOi96p/TbSBALgMkD1ky2Ga+o2o3BgT3YjO4mecaV5meI/oIHsgkqXU+yae+kqp6cIYSmVWgDBUthDNdgt+MGyWRT9TfcnZ4v3FoqwBciXaRZQ9WISVPZk5ON4FGPOnyF5kTCaqGEjgxmb+5ia+FF0jyjRjqeeH8TtJiLhOdW8Tli9zFjrIv1JW3hM+KxCCZKbNKzEqAySIiVEaIGYTozZATCbqYIB4m6iLAfKYibyq+I46GSDahDOt1s0AGaR+g5TcDQ0NNeYWikR6o8jcSV8AAAAASUVORK5CYII=",P=s.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 32px;
  width: 312px;

  @media screen and (min-width: 1440px) {
    width: 1020px;
    margin-bottom: 61px;
  }
`,V=s.input`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  padding-left: 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`,W=s.div`
  background-image: url(${T});
  position: absolute;
  top: 48%;
  margin-left: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
`;function G({query:o,setQuery:a}){return r.useEffect(()=>{const n=localStorage.getItem("query");n&&a(n)},[a]),c(P,{children:[t(W,{}),t(V,{type:"text",value:o,onChange:n=>{const e=n.target.value;a(e),localStorage.setItem("query",e)},placeholder:"Filter by name..."})]})}const K=(o,a)=>{const[i,n]=r.useState([]),[e,l]=r.useState(!1),[d,p]=r.useState(!1);return r.useEffect(()=>{async function h(){try{p(!0);const m=(await N(o,a)).results.sort((b,C)=>b.name.localeCompare(C.name));n(m)}catch{u.Notify.failure("Can`t load characters!")}finally{p(!1)}}h()},[o,a]),r.useEffect(()=>{e!==!1&&u.Notify.failure("erorr")},[e]),{allCharacters:i,isLoading:d}},X=s.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
`,x=s.button`
  display: flex;
  border-radius: 4px;
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
`,Z=({page:o,setPage:a})=>c(X,{children:[t(x,{onClick:()=>{o!==1&&a(e=>e-1)},children:"Prev"}),t(x,{onClick:()=>{a(e=>e+1)},children:"Next"})]}),M=()=>{const[o,a]=r.useState(""),[i,n]=r.useState(localStorage.getItem("isAuth")),[e,l]=r.useState(1),{allCharacters:d,isLoading:p}=K(o,e),h=k(),g=()=>{O(q).then(()=>{localStorage.clear(),n(!1),h("/login")})},f=()=>{window.scroll({top:0,behavior:"smooth"})};return t(r.Suspense,{children:c(v,{children:[t(R,{}),t(B,{type:"button",onClick:()=>g(),children:"Sign Out"}),t(G,{query:o,setQuery:a}),p&&t(A,{}),t(L,{characters:d}),t(Z,{page:e,setPage:l}),t(E,{onClick:f,children:"Up"}),t(r.Suspense,{fallback:t(A,{}),children:t(I,{})})]})})};export{M as default};
