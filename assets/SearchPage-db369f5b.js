import{h as v,j as g,k as y,r as l,b as m,q as f,o as s,d as u,x as _,z as k,e as o,F as x,f as S,c as w,w as $,g as q,i as B}from"./index-13cc2c11.js";const z=v({id:"search",state:()=>({content:null,url:"https://api.themoviedb.org/3/search/multi",params:`&api_key=${g}&language=ru-RU&page=1`}),actions:{async getSearch(r){try{const t=await y.get(`${this.url}?query=${r}${this.params}`);this.content=t.data.results}catch(t){console.error("Произошла ошибка при поиске.",t)}}}});const L={class:"container search"},R={class:"search-content"},b={alt:""},D={__name:"SearchPage",setup(r){const t=l(""),n=z(),c=l([]),d=async i=>{await n.getSearch(i),c.value=n.content};return(i,a)=>{const p=m("RouterLink"),h=f("lazy");return s(),u("section",L,[_(o("input",{type:"text",placeholder:"Найти фильм, сериал...",required:"",autofocus:"","onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),onInput:a[1]||(a[1]=e=>d(t.value))},null,544),[[k,t.value]]),o("div",R,[(s(!0),u(x,null,S(c.value,e=>(s(),w(p,{to:e.title?"/movie/"+e.id:"/tv/"+e.id,key:e.id},{default:$(()=>[_(o("img",b,null,512),[[h,q(B)+e.poster_path]])]),_:2},1032,["to"]))),128))])])}}};export{D as default};
