import{d,a9 as m,I as a,Y as f,c as o,X as i,w as _,g,n as x,J as S,aa as h,E as b,l as z}from"./CTaAGQfz.js";import{r as k}from"./20VNKqWb.js";import"./2ETV-d1z.js";const y=d({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:m("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const s=a(()=>((t=n)=>`{color.${t.color}.600}`)()),r=a(()=>((t=n)=>`{color.${t.color}.500}`)()),n=e,l={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:c}=f(n,l,{_YM9_buttonPrimary:s,_A23_buttonSecondary:r});return(t,H)=>{const u=h,p=b;return o(),i(p,{class:x(["button-link",[S(c)]]),to:e.href,target:e.blank?"_blank":void 0},{default:_(()=>[e.icon?(o(),i(u,{key:0,name:e.icon},null,8,["name"])):g("",!0),k(t.$slots,"default",{unwrap:"p ul li"},void 0,!0)]),_:3},8,["to","target","class"])}}}),q=z(y,[["__scopeId","data-v-579448c8"]]);export{q as default};
