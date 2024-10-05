import{k as I,p as O,q as V,o as v,c as f,a as e,t as o,u as s,_ as T,x as U,I as R,e as b,s as W,z as k,A as G,n as B,b as _,i as X,d as Y,V as J,m as j,L as K,l as A,f as Q,w as D,W as Z,E as M,F as ee,r as te,X as oe}from"./app-C8THt9Gf.js";import{_ as se,a as ae}from"./CheckoutShippingAddress-BWsWDb-g.js";import{r as le}from"./TrashIcon-BfzmzdvX.js";import{r as ne}from"./HomeIcon-DDahK0g5.js";import"./AddressForm-CLVWqhWb.js";import"./AddressFormModal-BigP3WcO.js";const re={class:"space-y-4 mt-3 transition duration-300"},ie={class:"px-4 py-3 bg-slate-50 rounded-xl border border-slate-100"},de={class:"text-slate-950 text-base font-medium leading-normal"},ce={class:"space-y-2 divide-y divide-slate-200"},ue={class:"flex gap-4 justify-start w-full items-center pt-1"},me={class:"w-[72px] h-[95px]"},pe=["src"],he={class:"flex flex-col gap-1 w-full"},_e={class:"text-primary text-xs font-normal leading-none"},ve={class:"text-slate-950 text-base font-normal leading-normal"},fe={class:"flex flex-wrap justify-between items-center gap-3"},ye={class:"flex items-center gap-1"},be={class:"min-w-8 text-center px-2 py-1 bg-slate-100 rounded text-slate-800 text-xs font-normal"},xe={class:"px-2 py-1 bg-slate-100 rounded text-slate-800 text-xs font-normal"},ge={class:"text-slate-800 text-base font-normal leading-normal"},we={__name:"BuyNowCheckoutProduct",setup(S){I();const g=O(),t=V();return(y,x)=>{var d,m,a,p,r,i,l,w,c,$,P,n,u;return v(),f("div",re,[e("div",ie,[e("div",de,o((m=(d=s(t).buyNowProduct)==null?void 0:d.shop)==null?void 0:m.name),1),e("div",ce,[e("div",ue,[e("div",me,[e("img",{src:(a=s(t).buyNowProduct)!=null&&a.thumbnail?(p=s(t).buyNowProduct)==null?void 0:p.thumbnail:(i=(r=s(t).buyNowProduct)==null?void 0:r.thumbnails[0])==null?void 0:i.thumbnail,class:"w-full h-full object-contain"},null,8,pe)]),e("div",he,[e("div",_e,o((l=s(t).buyNowProduct)==null?void 0:l.brand),1),e("div",ve,o((w=s(t).buyNowProduct)==null?void 0:w.name),1),e("div",fe,[e("div",ye,[e("div",be,o((c=s(t).buyNowProduct)==null?void 0:c.size),1),e("div",xe,o(($=s(t).buyNowProduct)==null?void 0:$.color),1)]),e("div",ge," 1 X "+o(s(g).showCurrency(((P=s(t).buyNowProduct)==null?void 0:P.discount_price)>0?(n=s(t).buyNowProduct)==null?void 0:n.discount_price:(u=s(t).buyNowProduct)==null?void 0:u.price)),1)])])])])])])}}},$e={class:"p-6 bg-white rounded-2xl border border-slate-200"},ke={class:"text-slate-950 text-xl font-medium leading-7"},Pe={class:"my-4 flex justify-between gap-4"},Ce={class:"text-slate-950 text-base font-normal leading-normal"},Ne={class:"text-slate-950 text-base font-normal leading-normal"},Se={class:"my-4 flex justify-between gap-4"},Me={class:"text-red-500 text-base font-normal leading-normal"},Be={class:"text-slate-950 text-base font-normal leading-normal"},je={class:"my-4 flex justify-between gap-4"},Ie={class:"text-slate-950 text-base font-normal leading-normal"},Oe={class:"text-slate-950 text-base font-normal leading-normal"},Ve={class:"my-4 flex justify-between gap-4"},ze={class:"text-slate-950 text-base font-normal leading-normal"},Ae={class:"text-slate-950 text-base font-normal leading-normal"},De={class:"my-4 flex justify-between gap-4"},Te={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},Ue={class:"text-slate-950 text-lg font-medium leading-normal tracking-tight"},We={class:"p-4 mt-6 bg-slate-100 rounded-xl"},Ge={class:"text-black text-base font-normal leading-normal"},qe={class:"relative mt-2"},Ee=["placeholder"],Fe={class:"absolute top-1/2 -translate-y-1/2 left-3"},He={__name:"BuyNowCheckoutOrderSummary",props:{note:String,paymentMethod:String},setup(S){const g=new U,t=V(),y=O(),x=I(),d=R(),m=b(!1),a=b(""),p=S,r=b({total_amount:0,coupon_discount:0,total_payable_amount:0,delivery_charge:0});W(()=>{a.value=t.coupon_code,i()});const i=()=>{t.buyNowProduct&&axios.post("/buy-now",{product_id:t.buyNowProduct.id,coupon_code:a.value,quantity:1},{headers:{Authorization:x.token}}).then(n=>{r.value=n.data.data,m.value=n.data.data.apply_coupon,m.value&&a.value.length>0?(d.success(n.data.message,{position:"bottom-left"}),t.coupon_code=a.value):!m.value&&a.value.length>0&&(d.error(n.data.message,{position:"bottom-left"}),t.coupon_code="")}).catch(n=>{d.error(n.response.data.message,{position:"bottom-left"})})},l=()=>{a.value.length>0&&i()},w=()=>{a.value="",m.value=!1,t.coupon_code="",i()},c={component:K,props:{title:"Order Placed",message:"Your order has been placed successfully."}},$=()=>{if(!t.address){d.error("Please select shipping address");return}if(p.paymentMethod==null){d.error("Please select payment method",{position:"bottom-left"});return}t.buyNowProduct?axios.post("/buy-now/place-order",{product_id:t.buyNowProduct.id,quantity:1,address_id:t.address.id,payment_method:p.paymentMethod,coupon_code:a.value,note:p.note,size:t.buyNowProduct.size??null,color:t.buyNowProduct.color??null},{headers:{Authorization:x.token}}).then(n=>{d(c,{type:"default",hideProgressBar:!0,icon:!1,position:"bottom-left",toastClassName:"vue-toastification-alert",timeout:2e3}),r.value.coupon_discount=0,r.value.total_payable_amount=0,r.value.delivery_charge=0,r.value.total_amount=0,t.buyNowProduct=null,t.coupon_code="";let u=n.data.data.order_payment_url;if(u!=null){P(u);return}else t.showOrderConfirmModal=!0}).catch(()=>{}):d.error("Please select at least one product",{position:"bottom-left"})},P=n=>{let u=700,C=700,q=screen.width/2-u/2,E=screen.height/2-C/2,F="popup,resizable,height="+C+",width="+u+",top="+E+",left="+q,h=window.open(n,null,F);h.title="Payment Window Screen - Make Payment",h.onload=()=>{h.title="Payment Window Screen - Make Payment"},h.focus();var N=setInterval(H,1e3);function H(){try{var z=h.location.pathname.replace(/\/order\/\d+/,"");if(z=="/payment/cancel"){h.close(),clearInterval(N),t.orderPaymentCancelModal=!0,d.error("Sorry! Payment Canceled",{position:"bottom-left"}),g.push({name:"home"});return}if(z=="/payment/success"){h.close(),clearInterval(N),t.showOrderConfirmModal=!0;return}(h.closed||!h)&&(clearInterval(N),h.close(),t.orderPaymentCancelModal=!0,g.push({name:"home"}))}catch{}}setTimeout(()=>{clearInterval(N),h.close()},18e4)};return(n,u)=>(v(),f("div",null,[e("div",$e,[e("div",ke,o(n.$t("Order Summary")),1),e("div",Pe,[e("div",Ce,o(n.$t("Subtotal")),1),e("div",Ne,o(s(y).showCurrency(r.value.total_amount)),1)]),e("div",Se,[e("div",Me,o(n.$t("Discount")),1),e("div",Be," -"+o(s(y).showCurrency(r.value.coupon_discount)),1)]),u[1]||(u[1]=e("div",{class:"w-full h-[0px] border-t border-dashed border-slate-400"},null,-1)),e("div",je,[e("div",Ie,o(n.$t("Subtotal After Discount")),1),e("div",Oe,o(s(y).showCurrency((r.value.total_amount-r.value.coupon_discount).toFixed(2))),1)]),e("div",Ve,[e("div",ze,o(n.$t("Shipping Charge")),1),e("div",Ae,o(s(y).showCurrency(r.value.delivery_charge)),1)]),u[2]||(u[2]=e("div",{class:"w-full h-[0px] border border-slate-500"},null,-1)),e("div",De,[e("div",Te,o(n.$t("Total Payable")),1),e("div",Ue,o(s(y).showCurrency(r.value.total_payable_amount)),1)]),e("div",We,[e("div",Ge,o(n.$t("Have a coupon"))+"? ",1),e("div",qe,[k(e("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=C=>a.value=C),class:B(["formInputCoupon pr-14 p-3",m.value?"text-green-500 pl-10":""]),placeholder:n.$t("Enter coupon code")},null,10,Ee),[[G,a.value]]),m.value?(v(),f("button",{key:1,class:"bg-slate-100 absolute top-1/2 -translate-y-1/2 right-1.5 h-10 w-10 rounded flex justify-center items-center",onClick:w},[_(s(le),{class:"w-6 h-6 text-red-500"})])):(v(),f("button",{key:0,class:"bg-slate-700 absolute top-1/2 -translate-y-1/2 right-1.5 h-10 w-10 rounded flex justify-center items-center",onClick:l},[_(s(X),{class:"w-6 h-6 text-white"})])),e("span",Fe,[m.value?(v(),Y(s(J),{key:0,class:"w-6 h-6 text-green-500"})):j("",!0)])])])]),e("button",{class:"px-6 py-4 w-full mt-4 bg-primary rounded-[10px] text-white text-base font-medium",onClick:$}," Place Order "),_(se)]))}},Le=T(He,[["__scopeId","data-v-679c1ca4"]]),Re={class:"main-container"},Xe={class:"flex items-center gap-2 overflow-hidden pt-4"},Ye={class:"grow w-full overflow-hidden"},Je={class:"space-x-1 text-slate-600 text-sm font-normal truncate"},Ke={class:"grid grid-cols-1 xl:grid-cols-3 my-3 gap-8"},Qe={class:"col-span-1 xl:col-span-2"},Ze={class:"flex gap-2 justify-between items-center"},et={class:"text-slate-950 text-lg sm:text-3xl font-medium leading-10"},tt={class:"text-primary-600 text-lg font-medium leading-normal tracking-tight"},ot={key:0},st={class:"mt-6"},at={class:"mb-1"},lt={class:"text-slate-950 text-xl font-medium leading-7"},nt={class:"text-slate-500 text-lg font-normal leading-7 tracking-tight"},rt=["placeholder"],it={class:"p-6 mt-4 bg-white rounded-2xl border border-slate-200"},dt={class:"text-slate-950 text-xl font-medium leading-7"},ct={class:"mt-4 flex flex-wrap gap-4"},ut={for:"cash",class:"flex items-center gap-4 xl:min-w-80"},mt={class:"text-slate-500 text-base font-normal leading-normal"},pt={for:"card",class:"flex items-center gap-4 xl:min-w-80"},ht={class:"text-slate-500 text-base font-normal leading-normal"},_t={key:0,class:"mt-5 border-t border-slate-200"},vt={class:"text-slate-600 pt-2 block text-md font-medium leading-7"},ft={class:"mt-3 flex flex-wrap gap-4"},yt=["for"],bt=["id","value"],xt={class:""},gt=["src"],wt={__name:"BuyNow",setup(S){const g=new U,t=I(),y=O(),x=V(),d=b(!0),m=b(""),a=b("cash"),p=b(null),r=b(null);return W(()=>{window.scrollTo(0,0),x.coupon_code="",p.value=a.value,t.user||g.push({name:"home"})}),A(a,()=>{a.value==="card"?p.value=r.value:p.value=a.value}),A(r,()=>{a.value==="card"&&(p.value=r.value)}),(i,l)=>{const w=Q("router-link");return v(),f("div",Re,[e("div",Xe,[_(w,{to:"/",class:"w-6 h-6"},{default:D(()=>[_(s(ne),{class:"w-5 h-5 text-slate-600"})]),_:1}),e("div",Ye,[e("div",Je,[e("span",null,o(i.$t("Home")),1),l[5]||(l[5]=e("span",null,"/",-1)),e("span",null,o(i.$t("Cart")),1),l[6]||(l[6]=e("span",null,"/",-1)),e("span",null,o(i.$t("Checkout")),1)])])]),e("div",Ke,[e("div",Qe,[e("div",{class:B(["py-4 border-b tran",d.value?"border-primary":"border-slate-200"])},[e("div",Ze,[e("div",et,o(i.$t("Checkout")),1),e("div",{class:"flex items-center gap-2 cursor-pointer",onClick:l[0]||(l[0]=c=>d.value=!d.value)},[e("div",tt," ("+o(s(x).buyNowProduct?1:0)+" "+o(i.$t("items"))+") ",1),_(s(Z),{class:B(["w-5 h-5 text-primary-600 transition duration-300",d.value?"rotate-180":""])},null,8,["class"])])]),d.value&&s(x).buyNowProduct?(v(),f("div",ot,[_(we)])):j("",!0)],2),_(ae),e("div",st,[e("div",at,[e("span",lt,o(i.$t("Note")),1),e("span",nt," ("+o(i.$t("Optional"))+") ",1)]),k(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=c=>m.value=c),rows:"3",class:"form-input",placeholder:i.$t("Write your note here")+"..."},null,8,rt),[[G,m.value]])]),e("div",it,[e("div",dt,o(i.$t("Payment Method")),1),e("div",ct,[e("label",ut,[k(e("input",{"onUpdate:modelValue":l[2]||(l[2]=c=>a.value=c),id:"cash",name:"payment",type:"radio",class:"radioBtn2",value:"cash",checked:""},null,512),[[M,a.value]]),l[7]||(l[7]=e("div",{class:"p-2 bg-white rounded-xl border border-slate-200"},[e("img",{src:"assets/icons/money-2.svg",alt:"",class:"w-7 h-7"})],-1)),e("span",mt,o(i.$t("Cash on delivery")),1)]),e("label",pt,[k(e("input",{"onUpdate:modelValue":l[3]||(l[3]=c=>a.value=c),id:"card",name:"payment",type:"radio",class:"radioBtn2",value:"card"},null,512),[[M,a.value]]),l[8]||(l[8]=e("div",{class:"p-2 bg-white rounded-xl border border-slate-200"},[e("img",{src:"assets/icons/card.svg",alt:"",class:"w-7 h-7"})],-1)),e("span",ht,o(i.$t("Credit or Debit Card")),1)])]),_(oe,{"leave-active-class":"transition ease-in duration-300","enter-active-class":"transition ease-out duration-300","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:D(()=>[a.value==="card"?(v(),f("div",_t,[e("span",vt,o(i.$t("Available Payment Gateways")),1),e("div",ft,[(v(!0),f(ee,null,te(s(y).paymentGateways,c=>(v(),f("label",{key:c.id,for:c.name,class:"flex items-center gap-4 border relative has-[:checked]:border-primary has-[:checked]:shadow-lg p-2 rounded-md border-slate-200 cursor-pointer"},[k(e("input",{"onUpdate:modelValue":l[4]||(l[4]=$=>r.value=$),id:c.name,name:"paymentGateway",type:"radio",class:"sr-only",value:c.name},null,8,bt),[[M,r.value]]),e("div",xt,[e("img",{src:c.logo,alt:"",class:"w-32 h-16 object-contain"},null,8,gt)])],8,yt))),128))])])):j("",!0)]),_:1})])]),_(Le,{note:m.value,paymentMethod:p.value},null,8,["note","paymentMethod"])])])}}},Mt=T(wt,[["__scopeId","data-v-87013513"]]);export{Mt as default};
