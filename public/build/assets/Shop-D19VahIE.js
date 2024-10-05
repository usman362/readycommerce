import{f as k,o as u,c as p,a as t,n as j,t as e,F as C,r as V,b as h,u as S,j as z,w as B,p as F,x as M,e as g,s as N}from"./app-C8THt9Gf.js";import{r as O}from"./ArrowRightIcon-vlPtrMAx.js";const P={class:"w-full rounded-xl overflow-hidden border border-slate-100 hover:border-primary transition-all duration-300"},A={class:"h-28 w-full relative"},D=["src"],E={class:"text-white text-xs font-normal leading-none"},H={class:"w-full px-4 pt-14 pb-4 relative transition duration-300"},I={class:"w-[88px] h-[88px] absolute bg-slate-300 rounded-full left-1/2 -translate-x-1/2 -top-11 shadow-lg"},L=["src"],R={class:"text-slate-950 text-center text-lg font-bold leading-normal truncate overflow-hidden"},T={class:"flex justify-center items-center gap-4 w-full mt-3"},U={class:"text-slate-500 text-base font-normal leading-normal text-center"},q={class:"text-slate-500 text-base font-normal leading-normal text-center"},G={class:"flex items-center justify-center gap-2 mt-2"},J={class:"flex"},K={class:"flex gap-1"},Q={class:"text-slate-800 text-base font-bold leading-normal"},W={class:"text-slate-500 text-base font-normal leading-normal"},X={class:"w-full flex justify-center mt-3"},Y={class:"text-base font-normal leading-tight"},Z={__name:"ShopCard",props:{shop:Object},setup(f){const s=f;return(m,a)=>{var r,i,_,d,o,c,v,l,x,w,b;const n=k("router-link");return u(),p("div",P,[t("div",A,[t("img",{class:"w-full h-full object-cover",src:(r=s.shop)==null?void 0:r.banner,alt:"banner",loading:"lazy"},null,8,D),t("div",{class:j(["px-1 py-0.5 rounded-[10px] absolute top-2 right-2",((i=s.shop)==null?void 0:i.shop_status)==="Online"?"bg-lime-600":"bg-slate-500"])},[t("div",E,e((_=s.shop)==null?void 0:_.shop_status),1)],2)]),t("div",H,[t("div",I,[t("img",{src:(d=s.shop)==null?void 0:d.logo,alt:"logo",loading:"lazy",class:"w-full h-full object-cover rounded-full"},null,8,L)]),t("div",R,e((o=s.shop)==null?void 0:o.name),1),t("div",T,[t("div",U,e((c=s.shop)==null?void 0:c.total_products)+"+ Items ",1),a[0]||(a[0]=t("div",{class:"h-3 w-[0px] border text-slate-300"},null,-1)),t("div",q,e((v=s.shop)==null?void 0:v.total_categories)+"+ "+e(m.$t("Categorise")),1)]),t("div",G,[t("div",J,[(u(),p(C,null,V(5,y=>{var $;return h(S(z),{key:y,class:j(["w-4 h-4",y<=(($=s.shop)==null?void 0:$.rating)?"text-amber-500":"text-slate-300"])},null,8,["class"])}),64))]),t("div",K,[t("div",Q,e((x=(l=s.shop)==null?void 0:l.rating)==null?void 0:x.toFixed(1)),1),t("div",W," ("+e((w=s.shop)==null?void 0:w.total_reviews)+") ",1)])]),t("div",X,[h(n,{to:`/shops/${(b=s.shop)==null?void 0:b.id}`,class:"w-[156px] flex items-center justify-center px-4 py-3 transition duration-300 rounded-[10px] border border-primary text-primary hover:bg-primary hover:text-white font-medium"},{default:B(()=>[t("div",Y,e(m.$t("Visit Store")),1),h(S(O),{class:"w-5 h-5 ml-0.5"})]),_:1},8,["to"])])])])}}},tt={class:"main-container py-14"},et={class:"text-slate-800 text-3xl font-bold leading-9"},st={class:"mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start"},ot={class:"flex justify-between items-center w-full mt-8 gap-4 flex-wrap"},at={class:"text-slate-800 text-base font-normal leading-normal"},rt={__name:"Shop",setup(f){const s=F(),m=new M,a=g(1),n=g(12),r=g(0),i=g([]);N(()=>{if(!s.multiVendor){m.push("/");return}d(),window.scrollTo(0,0)});const _=async o=>{a.value=o,d()},d=async()=>{axios.get("/shops",{params:{page:a.value,per_page:n.value}}).then(o=>{r.value=o.data.data.total,i.value=o.data.data.shops})};return(o,c)=>{const v=k("vue-awesome-paginate");return u(),p("div",tt,[t("div",et,e(o.$t("All Shops")),1),t("div",st,[(u(!0),p(C,null,V(i.value,l=>(u(),p("div",{key:l.id,class:"w-full"},[h(Z,{shop:l},null,8,["shop"])]))),128))]),t("div",ot,[t("div",at,e(o.$t("Showing"))+" "+e(n.value*(a.value-1)+1)+" "+e(o.$t("to"))+" "+e(n.value*(a.value-1)+i.value.length)+" "+e(o.$t("of"))+" "+e(r.value)+" "+e(o.$t("results")),1),t("div",null,[h(v,{"total-items":r.value,"items-per-page":n.value,type:"button","hide-prev-next-when-ends":!0,"max-pages-shown":5,modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=l=>a.value=l),onClick:_},null,8,["total-items","items-per-page","modelValue"])])])])}}};export{rt as default};
