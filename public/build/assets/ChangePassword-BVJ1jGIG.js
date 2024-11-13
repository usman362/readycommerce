import{_ as M,k as T,I as L,x as R,e as i,f as Y,o,c as v,a as e,b as w,u as d,ab as j,w as q,g as F,t as l,a5 as G,z as h,ac as _,n as f,d as u,ad as b,ae as y,m as x,L as H}from"./app-D50kYjO_.js";import{_ as J}from"./AuthPageheader-C1PC03Qj.js";const K={class:"bg-white px-3 text-slate-600 flex items-center gap-1 pt-2 leading-normal"},O={class:"p-3 md:p-4 xl:p-6"},Q={class:"max-w-5xl mx-auto"},W={class:""},X={class:"form-label"},Z={class:"relative"},ee=["type","placeholder"],se={key:0,class:"text-red-500 text-sm"},te={class:"mt-4"},ae={class:"form-label"},oe={class:"relative"},re=["type","placeholder"],le={key:0,class:"text-red-500 text-sm"},ne={class:"mt-4"},de={class:"form-label"},ue={class:"relative"},ie=["type","placeholder"],pe={key:0,class:"text-red-500 text-sm"},ce={type:"submit",class:"px-4 py-3 md:px-6 md:py-4 bg-primary text-white text-sm md:text-base rounded-[10px] mt-6"},me={__name:"ChangePassword",setup(ve){const S=T(),g=L(),z=R(),p=i(!1),c=i(!1),m=i(!1),n=i({current_password:"",password:"",password_confirmation:""}),s=i({}),E={component:H,props:{title:"Password Updated",message:"Your password updated successfully"}},A=()=>{axios.post("/change-password",n.value,{headers:{Authorization:S.token}}).then(()=>{n.value={},g(E,{type:"default",hideProgressBar:!0,icon:!1,position:"bottom-left",toastClassName:"vue-toastification-alert",timeout:2e3}),s.value=null,z.push({name:"profile"})}).catch(a=>{s.value=a.response.data.errors,a.response.data.errors||g.error(a.response.data.message,{position:"bottom-left"})})};return(a,t)=>{var C,k,P,$,N,V,B,U,D;const I=Y("router-link");return o(),v("div",null,[e("div",K,[w(d(j),{class:"w-5 h-5 md:w-6 md:h-6"}),w(I,{to:"/profile",class:"hover:text-primary"},{default:q(()=>[F(l(a.$t("Profile")),1)]),_:1}),e("span",null,"/ "+l(a.$t("Change Password")),1)]),w(J,{title:"Change Password"}),e("div",O,[e("div",Q,[e("form",{onSubmit:t[6]||(t[6]=G(r=>A(),["prevent"])),class:"bg-white rounded-lg md:rounded-xl p-4 md:p-6"},[e("div",W,[e("label",X,l(a.$t("Change Password")),1),e("div",Z,[h(e("input",{type:p.value?"text":"password","onUpdate:modelValue":t[0]||(t[0]=r=>n.value.current_password=r),placeholder:a.$t("Enter Current Password"),class:f(["form-input",s.value&&((C=s.value)!=null&&C.current_password)?"border-red-500":"border-slate-200"])},null,10,ee),[[_,n.value.current_password]]),e("button",{type:"button",onClick:t[1]||(t[1]=r=>p.value=!p.value)},[p.value?(o(),u(d(b),{key:0,class:"w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2"})):(o(),u(d(y),{key:1,class:"w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2"}))])]),s.value&&((k=s.value)!=null&&k.current_password)?(o(),v("span",se,l((P=s.value)==null?void 0:P.current_password[0]),1)):x("",!0)]),e("div",te,[e("label",ae,l(a.$t("Create New Password")),1),e("div",oe,[h(e("input",{type:c.value?"text":"password","onUpdate:modelValue":t[2]||(t[2]=r=>n.value.password=r),placeholder:a.$t("Enter Create New Password"),class:f(["form-input",s.value&&(($=s.value)!=null&&$.password)?"border-red-500":"border-slate-200"])},null,10,re),[[_,n.value.password]]),e("button",{type:"button",onClick:t[3]||(t[3]=r=>c.value=!c.value)},[c.value?(o(),u(d(b),{key:0,class:"w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2"})):(o(),u(d(y),{key:1,class:"w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2"}))])]),s.value&&((N=s.value)!=null&&N.password)?(o(),v("span",le,l((V=s.value)==null?void 0:V.password[0]),1)):x("",!0)]),e("div",ne,[e("label",de,l(a.$t("Confirm New Password")),1),e("div",ue,[h(e("input",{type:m.value?"text":"password","onUpdate:modelValue":t[4]||(t[4]=r=>n.value.password_confirmation=r),placeholder:a.$t("Confirm New Password"),class:f(["form-input",s.value&&((B=s.value)!=null&&B.password_confirmation)?"border-red-500":"border-slate-200"])},null,10,ie),[[_,n.value.password_confirmation]]),e("button",{type:"button",onClick:t[5]||(t[5]=r=>m.value=!m.value)},[m.value?(o(),u(d(b),{key:0,class:"w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2"})):(o(),u(d(y),{key:1,class:"w-6 h-6 text-slate-700 absolute right-4 top-1/2 -translate-y-1/2"}))])]),s.value&&((U=s.value)!=null&&U.password_confirmation)?(o(),v("span",pe,l((D=s.value)==null?void 0:D.password_confirmation[0]),1)):x("",!0)]),e("button",ce,l(a.$t("Update Password")),1)],32)])])])}}},_e=M(me,[["__scopeId","data-v-11fd1158"]]);export{_e as default};