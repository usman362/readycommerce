import{o as r,c as d,a as e,_ as E,x as pe,t,n as S,b as h,u as g,ag as me,e as c,l as D,I as ve,k as de,s as ie,v as L,w as U,Y as he,C as oe,G as fe,af as ne,a5 as _e,z as b,F as I,r as A,H as re,m as $,g as y,A as B,aa as ge,S as be,W as xe,X as we,f as ye,E as F,d as ke}from"./app-D50kYjO_.js";function $e(u,x){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{d:"M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"}),e("path",{d:"M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"})])}function Ce(u,x){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z","clip-rule":"evenodd"})])}function Te(u,x){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"})])}function je(u,x){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})])}const Se={class:"flex justify-between items-center gap-1.5 flex-wrap pb-3 border-b border-slate-200"},Me={class:"text-slate-500 text-sm font-normal"},Ve={class:"flex gap-2 items-center"},Ue={class:"text-blue-500 text-sm"},Be={class:"flex justify-between items-center gap-2 flex-wrap pt-3"},Ie={class:"flex flex-col gap-1"},Ae={class:"text-slate-500 text-sm font-normal"},ze={class:"text-slate-900 text-sm"},Ne={class:"flex flex-col gap-1 overflow-auto"},Le={class:"text-slate-500 text-sm font-normal"},Fe={class:"text-slate-900 text-sm truncate max-w-60 lg:min-w-60"},De={class:"flex flex-col gap-1 overflow-hidden"},Ee={class:"text-slate-500 text-sm font-normal"},Pe={class:"text-slate-900 text-sm truncate max-w-80 lg:min-w-80"},Oe={class:"h-8 w-8 bg-slate-100 rounded-2xl flex justify-center items-center"},Re={__name:"TicketCard",props:{supportTicket:Object},setup(u){const x=pe(),_=u,f=()=>{x.push({name:"support-ticket-details",params:{ticketNumber:_.supportTicket.ticket_no}})};return(w,C)=>(r(),d("div",{class:"p-4 bg-white rounded-xl border border-slate-200 cursor-pointer",onClick:C[0]||(C[0]=V=>f())},[e("div",Se,[e("span",Me,t(u.supportTicket.created_at),1),e("div",Ve,[e("span",Ue,"#"+t(u.supportTicket.ticket_no),1),e("span",{class:S(["px-2 py-1 rounded-xl capitalize text-xs ticketStatus",u.supportTicket.status])},t(u.supportTicket.status),3)])]),e("div",Be,[e("div",Ie,[e("div",Ae,t(w.$t("Order Number")),1),e("div",ze,t(u.supportTicket.order_number||"N/A"),1)]),e("div",Ne,[e("div",Le,t(w.$t("Issue Type")),1),e("div",Fe,t(u.supportTicket.issue_type),1)]),e("div",De,[e("div",Ee,t(w.$t("Subject")),1),e("div",Pe,t(u.supportTicket.subject),1)]),e("div",Oe,[h(g(me),{class:"w-5 h-5 text-slate-600"})])])]))}},Ze=E(Re,[["__scopeId","data-v-66b61d32"]]),z=u=>(xe("data-v-affc5ea5"),u=u(),we(),u),He=z(()=>e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"},null,-1)),Ge={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},We={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Ye={class:"bg-white p-5 sm:p-8 relative"},Xe={class:"text-slate-950 text-2xl font-medium"},qe={class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},Je={for:"name",class:"form-label mb-1"},Ke={value:"",selected:""},Qe=["value"],et={key:0,class:"text-red-500 text-sm"},tt={for:"name",class:"form-label mb-1"},st=z(()=>e("small",{class:"text-red-500"},"*",-1)),at={value:"",selected:""},lt=["value"],ot={key:0,class:"text-red-500 text-sm"},nt={class:"grid grid-cols-1 mt-6"},rt={for:"Subject",class:"form-label mb-1"},dt=["placeholder"],it={key:0,class:"text-red-500 text-sm"},ut={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"},ct={class:"form-label mb-1"},pt=z(()=>e("small",{class:"text-red-500"},"*",-1)),mt=["placeholder"],vt={key:0,class:"text-red-500 text-sm"},ht={class:"form-label mb-1"},ft={for:"attachment",class:"cursor-pointer px-4 py-3 rounded-lg border border-dashed border-primary-400 flex items-center gap-2 text-primary text-xs"},_t={class:"mt-3 flex flex-wrap gap-2.5"},gt=["src"],bt=["onClick"],xt={class:"text-slate-950 text-lg font-bold mt-5 flex justify-between gap-2 flex-wrap"},wt={class:"flex justify-start items-center gap-3"},yt={class:"flex gap-1.5 items-center"},kt=z(()=>e("input",{type:"checkbox",id:"email",class:"form-checkbox",checked:""},null,-1)),$t={class:"form-label",for:"email"},Ct={class:"flex gap-1.5 items-center"},Tt={class:"form-label",for:"phone"},jt={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3"},St={class:"relative rounded-md"},Mt={class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},Vt={class:"text-gray-500 sm:text-sm"},Ut=["placeholder"],Bt={key:0,class:"text-red-500 text-sm"},It={class:"relative rounded-md"},At={class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},zt={class:"text-gray-500 sm:text-sm"},Nt=["placeholder"],Lt={key:0,class:"text-red-500 text-sm"},Ft={class:"mt-6"},Dt=["disabled"],Et={__name:"CreateTicketModal",props:{showModal:Boolean},emits:["update:showModal","ticketCreated"],setup(u,{emit:x}){const _=c(!1),f=c(!1),w=x,C=u;D(()=>C.showModal,s=>{_.value=s}),D(()=>_.value,s=>{w("update:showModal",s)});const V=ve(),k=de(),T=c([]),o=c({issue_type:"",subject:"",message:"",email:"",phone:"",order_number:""}),v=c([]),a=c({}),j=c([]);ie(()=>{ue(),ce()});const i=s=>{v.value.push({url:URL.createObjectURL(s.target.files[0]),file:s.target.files[0],type:s.target.files[0].type})},p=s=>{v.value.splice(s,1)},M=c(!1),m=()=>{M.value=!0;const s=new FormData;s.append("issue_type",o.value.issue_type),s.append("subject",o.value.subject),s.append("message",o.value.message),s.append("order_number",o.value.order_number?o.value.order_number:""),s.append("email",o.value.email?o.value.email:""),s.append("phone",o.value.phone?o.value.phone:"");for(let l=0;l<v.value.length;l++)s.append("attachments["+l+"]",v.value[l].file);L.post("/support-ticket",s,{headers:{Authorization:k.token}}).then(l=>{M.value=!1,_.value=!1,o.value={},v.value=[],V.success(l.data.message,{position:"bottom-left"}),w("ticketCreated",!0)}).catch(l=>{M.value=!1,a.value=l.response.data.errors})},ue=()=>{L.get("/ticket-issue-types",{headers:{Authorization:k.token}}).then(s=>{T.value=s.data.data.issue_types})},ce=async()=>{L.get("/orders",{headers:{Authorization:k.token}}).then(s=>{j.value=s.data.data.orders})};return(s,l)=>(r(),d("div",null,[h(g(be),{as:"template",show:_.value},{default:U(()=>[h(g(he),{as:"div",class:"relative z-10",onClose:l[9]||(l[9]=N=>_.value=!1)},{default:U(()=>[h(g(oe),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:U(()=>[He]),_:1}),e("div",Ge,[e("div",We,[h(g(oe),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:U(()=>[h(g(fe),{class:"relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all my-8 md:my-0 w-full md:max-w-3xl"},{default:U(()=>{var N,P,O,R,Z,H,G,W,Y,X,q,J,K,Q,ee,te,se,ae;return[e("div",Ye,[e("div",{class:"w-9 h-9 bg-slate-100 rounded-[32px] absolute top-4 right-4 flex justify-center items-center cursor-pointer",onClick:l[0]||(l[0]=n=>_.value=!1)},[h(g(ne),{class:"w-6 h-6 text-slate-600"})]),e("div",Xe,t(s.$t("Create Support Ticket")),1),e("form",{onSubmit:l[8]||(l[8]=_e(n=>m(),["prevent"])),class:"mt-4"},[e("div",qe,[e("div",null,[e("label",Je,t(s.$t("Order Number")),1),b(e("select",{"onUpdate:modelValue":l[1]||(l[1]=n=>o.value.order_number=n),class:S(["form-input bg-transparent",a.value&&((N=a.value)!=null&&N.order_number)?"border-red-500":"border-slate-200"])},[e("option",Ke,t(s.$t("Select order number")),1),(r(!0),d(I,null,A(j.value,n=>(r(),d("option",{key:n.id,value:n.order_code},t(n.order_code),9,Qe))),128))],2),[[re,o.value.order_number]]),a.value&&((P=a.value)!=null&&P.order_number)?(r(),d("span",et,t((O=a.value)==null?void 0:O.order_number[0]),1)):$("",!0)]),e("div",null,[e("label",tt,[y(t(s.$t("Issue Type"))+" ",1),st]),b(e("select",{"onUpdate:modelValue":l[2]||(l[2]=n=>o.value.issue_type=n),class:S(["form-input bg-transparent",a.value&&((R=a.value)!=null&&R.issue_type)?"border-red-500":"border-slate-200"])},[e("option",at,t(s.$t("Select issue type")),1),(r(!0),d(I,null,A(T.value,n=>(r(),d("option",{key:n.id,value:n.name},t(n.name),9,lt))),128))],2),[[re,o.value.issue_type]]),a.value&&((Z=a.value)!=null&&Z.issue_type)?(r(),d("span",ot,t((H=a.value)==null?void 0:H.issue_type[0]),1)):$("",!0)])]),e("div",nt,[e("div",null,[e("label",rt,t(s.$t("Subject")),1),b(e("input",{type:"text",id:"Subject",placeholder:s.$t("Enter subject"),class:S(["form-input",a.value&&((G=a.value)!=null&&G.subject)?"border-red-500":"border-slate-200"]),"onUpdate:modelValue":l[3]||(l[3]=n=>o.value.subject=n)},null,10,dt),[[B,o.value.subject]]),a.value&&((W=a.value)!=null&&W.subject)?(r(),d("span",it,t((Y=a.value)==null?void 0:Y.subject[0]),1)):$("",!0)])]),e("div",ut,[e("div",null,[e("label",ct,[y(t(s.$t("Message"))+" ",1),pt]),b(e("textarea",{"onUpdate:modelValue":l[4]||(l[4]=n=>o.value.message=n),class:S(["form-input",a.value&&((X=a.value)!=null&&X.message)?"border-red-500":"border-slate-200"]),rows:"4",placeholder:s.$t("Write your message")+"..."},null,10,mt),[[B,o.value.message]]),a.value&&((q=a.value)!=null&&q.message)?(r(),d("span",vt,t((J=a.value)==null?void 0:J.message[0]),1)):$("",!0)]),e("div",null,[e("label",ht,t(s.$t("File Attachment"))+" (jpg, jpeg, png, pdf) ",1),e("label",ft,[e("input",{type:"file",id:"attachment",class:"hidden",accept:"image/jpeg, image/png, image/jpg, application/pdf",onChange:i},null,32),h(g(Te),{class:"w-6 h-6"}),y(" "+t(s.$t("Click to upload or, drag and drop here")),1)]),e("div",_t,[(r(!0),d(I,null,A(v.value,(n,le)=>(r(),d("div",{key:le,class:"w-12 h-12 relative"},[e("img",{src:n.type!="application/pdf"?n.url:"/assets/images/pdf.png",class:"w-full h-full object-cover rounded-lg",loading:"lazy"},null,8,gt),e("button",{type:"button",class:"absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 text-white flex justify-center items-center border-2 border-white",onClick:Qt=>p(le)},[h(g(ne),{class:"w-4 h-4"})],8,bt)]))),128))])])]),e("div",xt,[y(t(s.$t("Contact Info"))+" ",1),e("div",wt,[e("div",yt,[kt,e("label",$t,t(s.$t("Email Address")),1)]),e("div",Ct,[b(e("input",{type:"checkbox",id:"phone",class:"form-checkbox","onUpdate:modelValue":l[5]||(l[5]=n=>f.value=n)},null,512),[[ge,f.value]]),e("label",Tt,t(s.$t("Phone Number")),1)])])]),e("div",jt,[e("div",null,[e("div",St,[e("div",Mt,[e("span",Vt,[h(g($e),{class:"w-5 h-5"})])]),b(e("input",{type:"email",placeholder:s.$t("Enter email address"),class:S(["form-input",a.value&&((K=a.value)!=null&&K.email)?"border-red-500":"border-slate-200"]),style:{"padding-left":"2.5rem"},"onUpdate:modelValue":l[6]||(l[6]=n=>o.value.email=n)},null,10,Ut),[[B,o.value.email]])]),a.value&&((Q=a.value)!=null&&Q.email)?(r(),d("span",Bt,t((ee=a.value)==null?void 0:ee.email[0]),1)):$("",!0)]),e("div",null,[e("div",It,[e("div",At,[e("span",zt,[h(g(Ce),{class:"w-5 h-5"})])]),b(e("input",{type:"phone",placeholder:s.$t("Enter phone number"),class:S(["form-input",a.value&&((te=a.value)!=null&&te.phone)?"border-red-500":"border-slate-200"]),style:{"padding-left":"2.5rem"},"onUpdate:modelValue":l[7]||(l[7]=n=>o.value.phone=n)},null,10,Nt),[[B,o.value.phone]])]),a.value&&((se=a.value)!=null&&se.phone)?(r(),d("span",Lt,t((ae=a.value)==null?void 0:ae.phone[0]),1)):$("",!0)])]),e("div",Ft,[e("button",{class:"py-4 px-5 bg-primary text-white w-full rounded-xl",disabled:M.value},t(s.$t("Submit Ticket")),9,Dt)])],32)])]}),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]))}},Pt=E(Et,[["__scopeId","data-v-affc5ea5"]]),Ot={class:"py-3 px-2 text-slate-800 text-lg md:text-2xl font-medium tracking-tight md:leading-loose bg-white flex justify-between gap-2 flex-wrap items-center md:pr-8 lg:pr-16"},Rt={class:"bg-white px-3 border-t border-slate-100 flex gap-4 md:gap-8 overflow-x-auto"},Zt={class:"statusLinkBtn",for:"Pending"},Ht={class:"statusLinkBtn",for:"Confirm"},Gt={class:"statusLinkBtn",for:"Cancelled"},Wt={class:"px-2 pt-2 md:px-4 md:pt-4 lg:px-6 lg:pt-6"},Yt={class:"p-3 md:p-4 xl:p-6 bg-white rounded-xl md:rounded-2xl flex flex-col gap-3 md:gap-4"},Xt={key:0},qt={key:0,class:"flex justify-between items-center w-full mt-8 gap-4 flex-wrap"},Jt={class:"text-slate-800 text-base font-normal leading-normal"},Kt={__name:"SupportTicket",setup(u){const x=de(),_=c(!1),f=c("running"),w=c(0),C=c(0),V=c(0),k=c([]),T=c(10),o=c(10),v=c(1);ie(()=>{j(),window.scrollTo(0,0)}),D(()=>f.value,()=>{v.value=1,j()});const a=i=>{v.value=i,j()},j=()=>{axios.get("/support-tickets",{params:{page:v.value,per_page:o.value,status:f.value},headers:{Authorization:x.token}}).then(i=>{T.value=i.data.data.total,w.value=i.data.data.running,C.value=i.data.data.completed,V.value=i.data.data.cancel,k.value=i.data.data.support_tickets})};return(i,p)=>{const M=ye("vue-awesome-paginate");return r(),d("div",null,[e("div",Ot,[y(t(i.$t("Support Ticket"))+" ",1),e("button",{class:"px-3 py-2.5 bg-primary text-white rounded-lg flex items-center text-sm font-normal gap-1",onClick:p[0]||(p[0]=m=>_.value=!0)},[h(g(je),{class:"w-5 h-5"}),y(" "+t(i.$t("Create Ticket")),1)])]),e("div",Rt,[e("label",Zt,[b(e("input",{type:"radio","onUpdate:modelValue":p[1]||(p[1]=m=>f.value=m),name:"status",class:"sr-only",value:"Pending",id:"Pending",checked:""},null,512),[[F,f.value]]),y(" "+t(i.$t("Running"))+" ("+t(w.value)+") ",1)]),e("label",Ht,[b(e("input",{type:"radio","onUpdate:modelValue":p[2]||(p[2]=m=>f.value=m),name:"status",class:"sr-only",value:"completed",id:"Confirm"},null,512),[[F,f.value]]),y(" "+t(i.$t("Completed"))+" ("+t(C.value)+") ",1)]),e("label",Gt,[b(e("input",{type:"radio","onUpdate:modelValue":p[3]||(p[3]=m=>f.value=m),name:"status",class:"sr-only",value:"cancel",id:"Cancelled"},null,512),[[F,f.value]]),y(" "+t(i.$t("Cancel"))+" ("+t(V.value)+") ",1)])]),e("div",Wt,[e("div",Yt,[(r(!0),d(I,null,A(k.value,m=>(r(),ke(Ze,{key:m.id,supportTicket:m},null,8,["supportTicket"]))),128)),k.value.length==0?(r(),d("div",Xt,[e("p",null,t(i.$t("No Ticket Found")),1)])):$("",!0)]),T.value>o.value?(r(),d("div",qt,[e("div",Jt,t(i.$t("Showing"))+" "+t(o.value*(v.value-1)+1)+" "+t(i.$t("to"))+" "+t(o.value*(v.value-1)+k.value.length)+" "+t(i.$t("of"))+" "+t(T.value)+" "+t(i.$t("results")),1),e("div",null,[h(M,{"total-items":T.value,"items-per-page":o.value,type:"button","max-pages-shown":5,modelValue:v.value,"onUpdate:modelValue":p[4]||(p[4]=m=>v.value=m),"hide-prev-next-when-ends":!0,onClick:a},null,8,["total-items","items-per-page","modelValue"])])])):$("",!0)]),h(Pt,{showModal:_.value,"onUpdate:showModal":p[5]||(p[5]=m=>_.value=m),onTicketCreated:p[6]||(p[6]=m=>j())},null,8,["showModal"])])}}},ts=E(Kt,[["__scopeId","data-v-b96b6d66"]]);export{ts as default};