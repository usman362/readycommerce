import{y as d,e as u,s as h,f as p,o as _,d as m,w as g,a as t,t as f}from"./app-C8THt9Gf.js";const v={class:"p-5 bg-white rounded-2xl border border-slate-100 hover:border-primary transition duration-300 group"},y={class:"w-full overflow-hidden 2xl:h-32 xl:h-24 lg:h-24 md:h-36 sm:h-36 h-28"},x=["src"],b={class:"text-center text-slate-600 group-hover:text-primary transition-all text-base font-medium leading-normal truncate"},C={__name:"CategoryCard",props:{category:Object},setup(c){var s;const r=d(),e=c,a=u(`/categories/${(s=e.category)==null?void 0:s.id}`);return h(()=>{var o;r.name==="shop-detail"&&(a.value=`/shops/${r.params.id}/categories/${(o=e.category)==null?void 0:o.id}`)}),(o,w)=>{const i=p("router-link");return _(),m(i,{to:a.value,class:"w-full"},{default:g(()=>{var n,l;return[t("div",v,[t("div",y,[t("img",{src:(n=e.category)==null?void 0:n.thumbnail,class:"w-full h-full object-cover transition duration-500 group-hover:scale-110",loading:"lazy"},null,8,x)]),t("div",b,f((l=e.category)==null?void 0:l.name),1)])]}),_:1},8,["to"])}}};export{C as _};
