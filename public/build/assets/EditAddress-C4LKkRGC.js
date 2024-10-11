import{_ as Z}from"./AuthPageheader-KVsHgj9S.js";import{_ as ee,I as te,x as se,k as J,e as w,l as ae,o as i,c as u,a as e,a3 as le,g as _,t as d,z as r,A as p,n as c,m as v,E as $,a8 as oe,b as n,w as b,u as f,Y as de,C as H,G as re,S as ne,F as ie,L as q,y as ue,s as me,f as pe}from"./app-C8THt9Gf.js";import{r as ce}from"./TrashIcon-BfzmzdvX.js";import{r as ve}from"./HomeIcon-6KPnlSFv.js";const fe={class:"p-6 bg-white rounded-2xl border border-slate-200 mt-3"},he={class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},_e={for:"name",class:"form-label mb-2"},be=["placeholder"],xe={key:0,class:"text-red-500 text-sm"},ye=["placeholder"],ge={key:0,class:"text-red-500 text-sm"},we={class:"grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"},$e={for:"Area",class:"form-label mb-2"},ke=["placeholder"],Ae={key:0,class:"text-red-500 text-sm"},Ce={for:"Flat",class:"form-label mb-2"},Ee=["placeholder"],Ve={key:0,class:"text-red-500 text-sm"},Ue={for:"Postal",class:"form-label mb-2"},Fe=["placeholder"],Me={key:0,class:"text-red-500 text-sm"},Pe={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"},Ne={for:"address",class:"form-label mb-2"},Se=["placeholder"],je={key:0,class:"text-red-500 text-sm"},ze={for:"address2",class:"form-label mb-2"},Be=["placeholder"],De={key:0,class:"text-red-500 text-sm"},Te={class:"mt-4"},Ie={class:"flex justify-between items-center gap-2 mt-2 flex-wrap"},Oe={class:"flex items-center gap-2"},Re={for:"home",class:"px-3 py-2 bg-white rounded-[42px] border flex gap-2 items-center text-slate-600 text-base font-normal leading-normal cursor-pointer has-[:checked]:border-primary has-[:checked]:text-primary"},Le=["checked"],Ye={class:"text-base font-normal"},Ge={for:"office",class:"px-3 py-2 bg-white rounded-[42px] border flex gap-2 items-center text-slate-600 text-base font-normal leading-normal cursor-pointer has-[:checked]:border-primary has-[:checked]:text-primary"},He=["checked"],qe={class:"text-base font-normal"},Je={for:"other",class:"px-3 py-2 bg-white rounded-[42px] border flex gap-2 items-center text-slate-600 text-base font-normal leading-normal cursor-pointer has-[:checked]:border-primary has-[:checked]:text-primary"},Ke=["checked"],Qe={class:"text-base font-normal"},We={class:"flex items-center gap-2"},Xe=["checked"],Ze={for:"default",class:"text-slate-500 text-sm font-normal leading-tight m-0"},et={class:"flex justify-between items-center gap-2 mt-6"},tt={type:"submit",class:"px-4 py-3 md:px-6 md:py-4 bg-primary text-white text-sm md:text-base rounded-[10px] w-[140px] md:w-[152px"},st={class:"text-red-500 text-base font-medium leading-normal"},at={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},lt={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ot={class:"bg-white p-5 sm:p-8 text-center"},dt={class:"bg-red-500 w-14 h-14 md:w-20 md:h-20 rounded-full mx-auto flex justify-center items-center"},rt={class:"mt-3 text-center text-gray-900 text-2xl md:text-3xl font-bold"},nt={class:"mt-4 text-center text-slate-700 text-base md:text-xl font-normal"},it={class:"flex justify-between items-center gap-4 mt-8"},ut={__name:"AddressEditForm",props:{address:Object},setup(k){const h=te(),g=se(),x=J(),m=w(!1),y=k,a=w({name:"",phone:"",area:"",flat_no:"",post_code:"",address_line:"",address_line2:"",address_type:"home",langitude:"",longitude:"",is_default:!1});ae(()=>y.address,()=>{a.value=y.address});const s=w({}),K={component:q,props:{title:"Address Updated!",message:"Address updated successfully"}},Q={component:q,props:{title:"Address Deleted!",message:"Address deleted successfully"}},W=()=>{axios.delete(`/address/${y.address.id}/delete`,{headers:{Authorization:x.token}}).then(()=>{h(Q,{type:"default",hideProgressBar:!0,icon:!1,position:"bottom-left",toastClassName:"vue-toastification-alert",timeout:2e3}),g.push({name:"manage-address"})}).catch(l=>{h.error(l.response.data.message,{position:"bottom-left"})})},X=()=>{axios.post(`/address/${y.address.id}/update`,a.value,{headers:{Authorization:x.token}}).then(()=>{a.value={},h(K,{type:"default",hideProgressBar:!0,icon:!1,position:"bottom-left",toastClassName:"vue-toastification-alert",timeout:2e3}),g.push({name:"manage-address"})}).catch(l=>{s.value=l.response.data.errors,h.error(l.response.data.message,{position:"bottom-left"})})};return(l,t)=>{var A,C,E,V,U,F,M,P,N,S,j,z,B,D,T,I,O,R,L,Y,G;return i(),u(ie,null,[e("div",fe,[e("form",{onSubmit:t[12]||(t[12]=le(o=>X(),["prevent"]))},[e("div",he,[e("div",null,[e("label",_e,[_(d(l.$t("Name"))+" ",1),t[15]||(t[15]=e("small",{class:"text-red-500"},"*",-1))]),r(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>a.value.name=o),placeholder:l.$t("Enter name"),class:c(["form-input",s.value&&((A=s.value)!=null&&A.name)?"border-red-500":"border-slate-200"])},null,10,be),[[p,a.value.name]]),s.value&&((C=s.value)!=null&&C.name)?(i(),u("span",xe,d((E=s.value)==null?void 0:E.name[0]),1)):v("",!0)]),e("div",null,[t[16]||(t[16]=e("label",{for:"Phone",class:"form-label mb-2"},[_(" Phone "),e("small",{class:"text-red-500"},"*")],-1)),r(e("input",{type:"text",id:"Phone",placeholder:l.$t("Enter phone"),value:"0123456789",class:c(["form-input",s.value&&((V=s.value)!=null&&V.phone)?"border-red-500":"border-slate-200"]),"onUpdate:modelValue":t[1]||(t[1]=o=>a.value.phone=o)},null,10,ye),[[p,a.value.phone]]),s.value&&((U=s.value)!=null&&U.phone)?(i(),u("span",ge,d((F=s.value)==null?void 0:F.phone[0]),1)):v("",!0)])]),e("div",we,[e("div",null,[e("label",$e,[_(d(l.$t("Area"))+" ",1),t[17]||(t[17]=e("small",{class:"text-red-500"},"*",-1))]),r(e("input",{type:"text",id:"Area",placeholder:l.$t("Enter Area"),class:c(["form-input",s.value&&((M=s.value)!=null&&M.area)?"border-red-500":"border-slate-200"]),"onUpdate:modelValue":t[2]||(t[2]=o=>a.value.area=o)},null,10,ke),[[p,a.value.area]]),s.value&&((P=s.value)!=null&&P.area)?(i(),u("span",Ae,d((N=s.value)==null?void 0:N.area[0]),1)):v("",!0)]),e("div",null,[e("label",Ce,d(l.$t("Flat")),1),r(e("input",{type:"text",id:"Flat",placeholder:l.$t("Enter Flat no"),value:"",class:c(["form-input",s.value&&((S=s.value)!=null&&S.flat_no)?"border-red-500":"border-slate-200"]),"onUpdate:modelValue":t[3]||(t[3]=o=>a.value.flat_no=o)},null,10,Ee),[[p,a.value.flat_no]]),s.value&&((j=s.value)!=null&&j.flat_no)?(i(),u("span",Ve,d((z=s.value)==null?void 0:z.flat_no[0]),1)):v("",!0)]),e("div",null,[e("label",Ue,[_(d(l.$t("Postal Code"))+" ",1),t[18]||(t[18]=e("small",{class:"text-red-500"},"*",-1))]),r(e("input",{type:"text",id:"Postal","onUpdate:modelValue":t[4]||(t[4]=o=>a.value.post_code=o),placeholder:l.$t("Enter Postal Code"),value:"",class:c(["form-input",s.value&&((B=s.value)!=null&&B.post_code)?"border-red-500":"border-slate-200"])},null,10,Fe),[[p,a.value.post_code]]),s.value&&((D=s.value)!=null&&D.post_code)?(i(),u("span",Me,d((T=s.value)==null?void 0:T.post_code[0]),1)):v("",!0)])]),e("div",Pe,[e("div",null,[e("label",Ne,[_(d(l.$t("Address Line 1"))+" ",1),t[19]||(t[19]=e("small",{class:"text-red-500"},"*",-1))]),r(e("input",{type:"text",id:"address","onUpdate:modelValue":t[5]||(t[5]=o=>a.value.address_line=o),placeholder:l.$t("Enter address 1"),class:c(["form-input",s.value&&((I=s.value)!=null&&I.address_line)?"border-red-500":"border-slate-200"])},null,10,Se),[[p,a.value.address_line]]),s.value&&((O=s.value)!=null&&O.address_line)?(i(),u("span",je,d((R=s.value)==null?void 0:R.address_line[0]),1)):v("",!0)]),e("div",null,[e("label",ze,d(l.$t("Address Line 2")),1),r(e("input",{type:"text",id:"address2","onUpdate:modelValue":t[6]||(t[6]=o=>a.value.address_line2=o),placeholder:l.$t("Enter address 2"),value:"",class:c(["form-input",s.value&&((L=s.value)!=null&&L.address_line2)?"border-red-500":"border-slate-200"])},null,10,Be),[[p,a.value.address_line2]]),s.value&&((Y=s.value)!=null&&Y.address_line2)?(i(),u("span",De,d((G=s.value)==null?void 0:G.address_line2[0]),1)):v("",!0)])]),e("div",Te,[t[20]||(t[20]=e("div",{class:"text-slate-950 text-base font-medium leading-normal"}," Address Tag ",-1)),e("div",Ie,[e("div",Oe,[e("label",Re,[r(e("input",{type:"radio",id:"home","onUpdate:modelValue":t[7]||(t[7]=o=>a.value.address_type=o),name:"tag",value:"home",class:"radio-btn",checked:a.value.address_type==="home"},null,8,Le),[[$,a.value.address_type]]),e("span",Ye,d(l.$t("HOME")),1)]),e("label",Ge,[r(e("input",{type:"radio",id:"office","onUpdate:modelValue":t[8]||(t[8]=o=>a.value.address_type=o),name:"tag",value:"office",class:"radio-btn",checked:a.value.address_type==="office"},null,8,He),[[$,a.value.address_type]]),e("span",qe,d(l.$t("OFFICE")),1)]),e("label",Je,[r(e("input",{type:"radio",id:"other","onUpdate:modelValue":t[9]||(t[9]=o=>a.value.address_type=o),name:"tag",value:"other",class:"radio-btn",checked:a.value.address_type==="other"},null,8,Ke),[[$,a.value.address_type]]),e("span",Qe,d(l.$t("OTHER")),1)])]),e("div",We,[r(e("input",{id:"default","onUpdate:modelValue":t[10]||(t[10]=o=>a.value.is_default=o),name:"default",type:"checkbox",class:"w-4 h-4",checked:a.value.is_default},null,8,Xe),[[oe,a.value.is_default]]),e("label",Ze,d(l.$t("Make it default address")),1)])]),e("div",et,[e("button",tt,d(l.$t("Update")),1),e("button",{type:"button",class:"bg-white rounded-lg py-2 md:py-4 px-2",onClick:t[11]||(t[11]=o=>m.value=!0)},[e("div",st,d(l.$t("Delete this")),1)])])])],32)]),n(f(ne),{as:"template",show:m.value},{default:b(()=>[n(f(de),{as:"div",class:"relative z-10",onClose:t[14]||(t[14]=o=>m.value=!1)},{default:b(()=>[n(f(H),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:b(()=>t[21]||(t[21]=[e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1)])),_:1}),e("div",at,[e("div",lt,[n(f(H),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:b(()=>[n(f(re),{class:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:b(()=>[e("div",ot,[e("div",dt,[n(f(ce),{class:"w-8 h-8 md:w-12 md:h-12 text-white"})]),e("div",rt,d(l.$t("Delete address")),1),e("div",nt,d(l.$t("Are you sure want to delete this address")),1),e("div",it,[e("button",{class:"text-slate-800 grow text-base font-medium px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-[10px] border border-slate-300",onClick:t[13]||(t[13]=o=>m.value=!1)},d(l.$t("Cancel")),1),e("button",{class:"text-white grow bg-red-500 text-base font-medium px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-[10px]",onClick:W},d(l.$t("Yes")),1)])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}},mt=ee(ut,[["__scopeId","data-v-8a64dd73"]]),pt={class:"bg-white px-3 text-slate-600 flex items-center gap-1 pt-2 leading-normal"},ct={class:"p-3 md:p-4 xl:p-6"},vt={class:"max-w-5xl mx-auto"},xt={__name:"EditAddress",setup(k){const h=ue(),g=J(),x=w({});return me(()=>{x.value=g.getAddressById(h.params.id)}),(m,y)=>{const a=pe("router-link");return i(),u("div",null,[e("div",pt,[n(f(ve),{class:"w-5 h-5 md:w-6 md:h-6"}),n(a,{to:"/manage-address",class:"hover:text-primary"},{default:b(()=>[_(d(m.$t("Manage Address")),1)]),_:1}),e("span",null,"/ "+d(m.$t("Edit Address")),1)]),n(Z,{title:m.$t("Edit Address")},null,8,["title"]),e("div",ct,[e("div",vt,[n(mt,{address:x.value},null,8,["address"])])])])}}};export{xt as default};