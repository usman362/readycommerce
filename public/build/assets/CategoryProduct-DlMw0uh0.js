import{y as O,s as R,l as C,e as p,f as j,o as c,c as m,a as e,b as n,w as i,u as s,n as _,F as b,r as y,d as W,t as r,m as A,Y as L,C as B,G as T,D as E,j as G,z as d,E as v,H as Y,A as U,S as I}from"./app-C8THt9Gf.js";import{S as M,d as J}from"./swiper-qv0RRoi4.js";import{_ as K}from"./ProductCard-CXK6RkWV.js";import{r as Q}from"./ArrowLeftIcon-BmjyWHce.js";import{r as X}from"./FunnelIcon-CQ9dbxIS.js";const Z={class:"main-container py-4 bg-slate-100"},ee={class:"w-full p-2 sm:p-4 bg-white rounded-lg sm:rounded-xl md:rounded-2xl flex gap-3 md:gap-6 items-center justify-between"},te={class:"grow overflow-x-auto"},le=["onClick"],ae={class:"grow shrink basis-0"},oe={class:"main-container py-12"},re={class:"grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 items-start"},se={key:0,class:"flex justify-center items-center w-full mt-8"},ne={class:"text-slate-800 text-base font-normal leading-normal"},ie={class:"flex justify-between items-center w-full mt-8 gap-4 flex-wrap"},de={class:"text-slate-800 text-base font-normal leading-normal"},ue={class:"fixed inset-0 overflow-hidden"},ce={class:"absolute inset-0 overflow-hidden"},me={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},pe={class:"flex h-full flex-col justify-between overflow-y-scroll bg-white shadow-xl"},ve={class:"p-4 flex flex-col gap-7"},fe={class:"flex justify-between items-center"},ge={class:"text-slate-950 text-base font-medium leading-normal"},xe={class:"flex flex-col gap-2 mt-3"},be=["for"],ye={class:"flex items-center gap-1"},he={class:"flex items-center"},we={class:"text-base font-medium leading-normal"},_e=["id","value"],ke={class:"text-slate-950 text-base font-medium leading-normal"},$e=["value"],Pe={class:"flex justify-between items-center gap-2"},Ce={class:"text-slate-950 text-base font-medium leading-normal"},Be={class:"text-primary text-base font-normal leading-normal"},Ve={class:"flex mt-2"},Se={class:"text-slate-400 text-xs font-normal leading-none flex justify-between mt-2"},je={class:"text-slate-950 text-base font-medium leading-normal"},Ue={class:"flex flex-wrap gap-4 p-3 rounded-xl border border-slate-200 mt-1"},Me={class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Fe={for:"Black",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},ze={for:"Blue",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},Ne={for:"Orange",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},qe={for:"White",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},De={for:"Multicolour",class:"cursor-pointer has-[:checked]:text-primary text-slate-800 flex items-center p-2 bg-white gap-2"},He={class:"flex gap-6 p-6 border-t border-slate-200"},k=12,Ee={__name:"CategoryProduct",setup(Oe){const u=O();R(()=>{g(),S(),window.scrollTo(0,0)}),C(()=>u.params.slug,()=>{g(),S()}),C(()=>u.query.subcategory,()=>{g()});const f=p(1),F=o=>{f.value=o,g()},h=p(!1),t=p({review:null,shortBy:null,brand:null,color:null,size:null,minPrice:null,maxPrice:null}),$=p(!1);C(t.value,()=>{t.value.review||t.value.shortBy||t.value.brand||t.value.color||t.value.size||t.value.minPrice||t.value.maxPrice?$.value=!0:$.value=!1},{deep:!0});const z=()=>{t.value.review=null,t.value.shortBy=null,t.value.brand=null,t.value.color=null,t.value.size=null,t.value.minPrice=null,t.value.maxPrice=null,g()},N=[5,4,3,2,1],V=p([]),w=p([]),P=p(0),g=async()=>{axios.get("/products",{params:{category_id:u.params.slug,page:f.value,per_page:k,rating:t.value.review,sort_type:t.value.shortBy,min_price:t.value.minPrice,max_price:t.value.maxPrice,color:t.value.color,sub_category_id:u.query.subcategory}}).then(o=>{P.value=o.data.data.total,w.value=o.data.data.products})},S=async()=>{axios.get("/sub-categories?category_id="+u.params.slug).then(o=>{V.value=o.data.data.sub_categories})},q=[{name:"High to Low",value:"high_to_low"},{name:"Low to High",value:"low_to_high"},{name:"Most Selling",value:"most_selling"},{name:"Top Seller",value:"top_seller"},{name:"New Product",value:"new_product"}];return(o,a)=>{const D=j("router-link"),H=j("vue-awesome-paginate");return c(),m("div",null,[e("div",Z,[e("div",ee,[n(D,{to:"/",class:"py-2 flex gap-1 sm:gap-2 items-center justify-center"},{default:i(()=>[n(s(Q),{class:"w-4 h-4 sm:w-6 sm:h-6 text-slate-600"}),a[15]||(a[15]=e("div",{class:"text-slate-600 text-sm sm:text-base font-normal leading-normal"},"Back",-1))]),_:1}),e("div",te,[n(s(J),{slidesPerView:"auto",spaceBetween:16,class:"categorySwiper"},{default:i(()=>[n(s(M),null,{default:i(()=>[e("div",{class:_(["p-2 sm:px-4 sm:py-3 rounded-md sm:rounded-[10px] border text-base font-normal leading-normal hover:text-primary cursor-pointer transition duration-300",s(u).query.subcategory?"border-slate-200 text-slate-600":"text-primary border-primary"]),onClick:a[0]||(a[0]=l=>o.$router.push(`/categories/${s(u).params.slug}`))}," All ",2)]),_:1}),(c(!0),m(b,null,y(V.value,l=>(c(),W(s(M),{key:l.id},{default:i(()=>[e("div",{class:_(["p-2 sm:px-4 sm:py-3 rounded-md sm:rounded-[10px] border text-base font-normal leading-normal hover:text-primary cursor-pointer transition duration-300",l.id==s(u).query.subcategory?"text-primary border-primary":"border-slate-200 text-slate-600"]),onClick:x=>o.$router.push(`/categories/${s(u).params.slug}?subcategory=${l.id}`)},r(l.name),11,le)]),_:2},1024))),128))]),_:1})]),e("div",null,[e("button",{class:_(["p-2 sm:px-4 sm:py-3 rounded-md sm:rounded-[10px] justify-center items-center gap-2 inline-flex text-sm sm:text-base font-normal leading-normal border-0 outline-none hover:text-primary transition duration-300",$.value?" bg-primary-200 text-primary":"text-slate-600 bg-slate-200"]),onClick:a[1]||(a[1]=l=>h.value=!0)},[n(s(X),{class:"w-4 h-4 sm:w-6 sm:h-6"}),e("div",ae,r(o.$t("Filter")),1)],2)])])]),e("div",oe,[e("div",re,[(c(!0),m(b,null,y(w.value,l=>(c(),m("div",{key:l.id,class:"w-full"},[n(K,{product:l},null,8,["product"])]))),128))]),w.value.length==0?(c(),m("div",se,[e("div",ne,r(o.$t("No products found")),1)])):A("",!0),e("div",ie,[e("div",de,r(o.$t("Showing"))+" "+r(k*(f.value-1)+1)+" to "+r(k*(f.value-1)+w.value.length)+" "+r(o.$t("of"))+" "+r(P.value)+" "+r(o.$t("results")),1),e("div",null,[n(H,{"total-items":P.value,"items-per-page":k,type:"button","max-pages-shown":5,modelValue:f.value,"onUpdate:modelValue":a[2]||(a[2]=l=>f.value=l),"hide-prev-next-when-ends":!0,onClick:F},null,8,["total-items","modelValue"])])])]),n(s(I),{as:"template",show:h.value},{default:i(()=>[n(s(L),{as:"div",class:"relative z-10",onClose:a[14]||(a[14]=l=>h.value=!1)},{default:i(()=>[n(s(B),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>a[16]||(a[16]=[e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity"},null,-1)])),_:1}),e("div",ue,[e("div",ce,[e("div",me,[n(s(B),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:i(()=>[n(s(T),{class:"pointer-events-auto relative w-screen max-w-md"},{default:i(()=>[n(s(B),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>a[17]||(a[17]=[e("div",{class:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"},null,-1)])),_:1}),e("div",pe,[e("div",ve,[e("div",fe,[a[18]||(a[18]=e("div",{class:"text-slate-950 text-xl font-bold leading-loose"},"Filter",-1)),e("button",{class:"w-8 h-8 flex justify-center items-center bg-slate-100 rounded-full",onClick:a[3]||(a[3]=l=>h.value=!1)},[n(s(E),{class:"w-5 h-5 text-slate-700"})])]),e("div",null,[e("div",ge,r(o.$t("Customer Review")),1),e("div",xe,[(c(),m(b,null,y(N,l=>e("div",{key:l,class:"grow"},[e("label",{for:`rating${l}`,class:"cursor-pointer has-[:checked]:border-primary text-slate-800 flex items-center justify-between px-2 py-1.5 bg-white rounded-lg border border-slate-100 gap-1.5"},[e("div",ye,[e("div",he,[(c(),m(b,null,y(5,x=>n(s(G),{key:x,class:_(["w-5 h-5",x<=l?"text-amber-500":"text-gray-200"])},null,8,["class"])),64))]),e("div",we,r(l)+".0 ",1)]),d(e("input",{type:"radio","onUpdate:modelValue":a[4]||(a[4]=x=>t.value.review=x),id:`rating${l}`,name:"review",value:l,class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,8,_e),[[v,t.value.review]])],8,be)])),64))])]),e("div",null,[e("div",ke,r(o.$t("Sort by")),1),d(e("select",{"onUpdate:modelValue":a[5]||(a[5]=l=>t.value.shortBy=l),class:"w-full mt-1 p-3 rounded bg-transparent border border-gray-100 outline-none"},[(c(),m(b,null,y(q,l=>e("option",{key:l,value:l.value},r(l.name),9,$e)),64))],512),[[Y,t.value.shortBy]])]),e("div",null,[e("div",Pe,[e("div",Ce,r(o.$t("Product Price")),1),e("div",Be,r(o.$t("$300 - $4200")),1)]),e("div",Ve,[d(e("input",{type:"range",min:"00",max:"9200","onUpdate:modelValue":a[6]||(a[6]=l=>t.value.minPrice=l),class:"w-full rotate-180 appearance-none bg-slate-300 accent-primary-600 focus:accent-primary h-2 rounded-r-full"},null,512),[[U,t.value.minPrice]]),d(e("input",{type:"range",min:"00",max:"10000","onUpdate:modelValue":a[7]||(a[7]=l=>t.value.maxPrice=l),class:"w-full appearance-none bg-slate-300 accent-primary-600 focus:accent-primary h-2 rounded-r-full -ml-0.5"},null,512),[[U,t.value.maxPrice]])]),e("div",Se,[e("span",null," $"+r(t.value.minPrice),1),e("span",null," $"+r(t.value.maxPrice),1)])]),e("div",null,[e("div",je,r(o.$t("Color")),1),e("div",Ue,[e("label",Me,[d(e("input",{type:"radio","onUpdate:modelValue":a[8]||(a[8]=l=>t.value.color=l),value:"red",id:"red",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[v,t.value.color]]),e("span",null,r(o.$t("Red")),1)]),e("label",Fe,[d(e("input",{type:"radio","onUpdate:modelValue":a[9]||(a[9]=l=>t.value.color=l),value:"black",id:"Black",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[v,t.value.color]]),e("span",null,r(o.$t("Black")),1)]),e("label",ze,[d(e("input",{type:"radio","onUpdate:modelValue":a[10]||(a[10]=l=>t.value.color=l),value:"Blue",id:"Blue",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[v,t.value.color]]),e("span",null,r(o.$t("Blue")),1)]),e("label",Ne,[d(e("input",{type:"radio","onUpdate:modelValue":a[11]||(a[11]=l=>t.value.color=l),value:"Orange",id:"Orange",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[v,t.value.color]]),e("span",null,r(o.$t("Orange")),1)]),e("label",qe,[d(e("input",{type:"radio","onUpdate:modelValue":a[12]||(a[12]=l=>t.value.color=l),value:"White",id:"White",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[v,t.value.color]]),e("span",null,r(o.$t("White")),1)]),e("label",De,[d(e("input",{type:"radio","onUpdate:modelValue":a[13]||(a[13]=l=>t.value.color=l),value:"Multicolour",id:"Multicolour",name:"color",class:"w-5 h-5 appearance-none checked:bg-primary rounded-full border-2 border-slate-300 shrink-0 transition duration-300"},null,512),[[v,t.value.color]]),e("span",null,r(o.$t("Multicolour")),1)])])])]),e("div",He,[e("button",{class:"grow px-4 py-3 rounded-[10px] border border-primary text-primary text-base font-medium leading-normal",onClick:z},r(o.$t("Clear")),1),e("button",{class:"grow px-4 py-3 bg-primary rounded-[10px] border border-primary text-white text-base font-medium leading-normal",onClick:g},r(o.$t("Apply")),1)])])]),_:1})]),_:1})])])])]),_:1})]),_:1},8,["show"])])}}};export{Ee as default};
