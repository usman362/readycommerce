import{_ as x}from"./AuthPageheader-DOrG1W9L.js";import{o as n,c as i,a as e,k as f,x as g,s as d,f as v,b as a,F as w,r as b,u as s,a7 as y,t as o,m as r,w as k,a8 as A}from"./app-CoTvvPk0.js";function $(m,c){return n(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"}),e("path",{d:"M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"})])}const C={class:"flex flex-col h-full"},M={class:"p-3 md:p-4 xl:p-6 h-full flex flex-col justify-between gap-4"},V={class:"space-y-4"},B={class:"flex w-[60px] sm:w-[88px] bg-slate-50 rounded-lg flex-col gap-2 justify-center items-center shrink-0"},N={class:"px-1.5 py-[3px] bg-slate-800 rounded-md text-white text-xs font-medium uppercase"},j={class:"overflow-hidden"},Z={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},D={class:"text-slate-500 text-base font-normal leading-normal"},E={class:"text-slate-500 text-base font-normal leading-normal truncate"},F={key:0,class:"text-blue-500 mt-1 text-sm font-normal leading-[18px] italic"},H=["onClick"],S={class:"text-xs md:text-sm font-normal"},L={key:0,class:"w-full bg-white p-2 md:p-3 lg:p-4 rounded md:rounded-lg border border-slate-200"},R={class:"text-slate-600 text-xl font-medium leading-normal italic"},T={class:"w-full flex justify-end"},q={class:"text-base font-medium leading-normal"},K={__name:"ManageAddress",setup(m){const c=f(),p=g();d(()=>{u(),window.scrollTo(0,0)});const u=()=>{c.fetchAddresses()},_=l=>{p.push({name:"edit-address",params:{id:l.id}})};return(l,z)=>{const h=v("router-link");return n(),i("div",C,[a(x,{title:"Manage Address"}),e("div",M,[e("div",V,[(n(!0),i(w,null,b(s(c).addresses,t=>(n(),i("div",{key:t.id,class:"p-2 md:p-3 lg:p-4 flex gap-2 md:gap-4 xl:gap-6 rounded-lg border border-slate-200 w-full bg-white relative"},[e("div",B,[a(s(y),{class:"w-6 h-6 text-primary-600"}),e("div",N,o(t==null?void 0:t.address_type),1)]),e("div",j,[e("div",Z,o(t==null?void 0:t.name),1),e("div",D,o(t==null?void 0:t.phone),1),e("div",E,o((t!=null&&t.flat_no?(t==null?void 0:t.flat_no)+", ":"")+(t==null?void 0:t.address_line)+", "+(t!=null&&t.address_line2?(t==null?void 0:t.address_line2)+", ":""))+" "+o((t==null?void 0:t.area)+"-"+(t==null?void 0:t.post_code)),1),t.is_default?(n(),i("div",F,o(l.$t("Default Address")),1)):r("",!0)]),e("button",{class:"absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 px-1 py-0.5 md:px-2 md:py-1 rounded-md border border-primary hover:bg-primary text-primary hover:text-white transition-all flex items-center gap-0.5",onClick:G=>_(t)},[a(s($),{class:"w-4 h-4 md:w-5 md:h-5"}),e("div",S,o(l.$t("Edit")),1)],8,H)]))),128)),s(c).addresses.length===0?(n(),i("div",L,[e("div",R,o(l.$t("Address list is empty")),1)])):r("",!0)]),e("div",T,[a(h,{to:"/manage-address/new",class:"p-2 md:p-3 lg:p-4 flex gap-2 rounded md:rounded-lg bg-primary text-white items-center"},{default:k(()=>[a(s(A),{class:"w-5 h-5"}),e("div",q,o(l.$t("New Address")),1)]),_:1})])])])}}};export{K as default};