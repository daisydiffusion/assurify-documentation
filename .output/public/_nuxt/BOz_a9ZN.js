import{_ as f}from"./CajGRBdY.js";import{d as m,I as i,r as _,c as s,e as a,J as e,X as h,g as u,F as v,aj as k,n as g,p as w,j as b,f as I,l as x}from"./CTaAGQfz.js";const B=t=>(w("data-v-cfa5f079"),t=t(),b(),t),S={key:1,class:"loaded"},C=["poster"],V=["src"],$=["src","type"],j=["autoplay","src"],N=B(()=>I("button",null,null,-1)),E=[N],F=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),p=_(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var o,l;return r.src||((l=(o=r.sources)==null?void 0:o[0])==null?void 0:l.src)||!1});return(o,l)=>{const y=f;return s(),a("div",{class:g(["video-player",{loaded:e(p)}])},[(e(c)?e(c).poster:t.poster)?(s(),h(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(s(),a("div",S,[e(c)?e(c).name==="youtube"?(s(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,j)):u("",!0):(s(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(s(),a("source",{key:0,src:e(d)},null,8,V)):u("",!0),(s(!0),a(v,null,k(t.sources,n=>(s(),a("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,C))])):u("",!0),e(p)?u("",!0):(s(),a("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>p.value=!0)},E))],2)}}}),z=x(F,[["__scopeId","data-v-cfa5f079"]]);export{z as default};
