import{n as B,h as E}from"./swiper-C9BXQAsw.js";import{o as x,c as _,a as i,t as r,F as k,r as $,b as P,n as j,u as z,j as F,M as I}from"./app-D50kYjO_.js";function de(g){let{swiper:e,extendParams:M,emit:v,once:f}=g;M({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function n(){if(e.params.cssMode)return;const a=e.getTranslate();e.setTranslate(a),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function p(){if(e.params.cssMode)return;const{touchEventsData:a,touches:c}=e;a.velocities.length===0&&a.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:B()})}function w(a){let{currentPos:c}=a;if(e.params.cssMode)return;const{params:t,wrapperEl:h,rtlTranslate:b,snapGrid:d,touchEventsData:m}=e,N=B()-m.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(m.velocities.length>1){const o=m.velocities.pop(),l=m.velocities.pop(),C=o.position-l.position,D=o.time-l.time;e.velocity=C/D,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(D>150||B()-o.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,m.velocities.length=0;let u=1e3*t.freeMode.momentumRatio;const V=e.velocity*u;let s=e.translate+V;b&&(s=-s);let R=!1,T;const y=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let S;if(s<e.maxTranslate())t.freeMode.momentumBounce?(s+e.maxTranslate()<-y&&(s=e.maxTranslate()-y),T=e.maxTranslate(),R=!0,m.allowMomentumBounce=!0):s=e.maxTranslate(),t.loop&&t.centeredSlides&&(S=!0);else if(s>e.minTranslate())t.freeMode.momentumBounce?(s-e.minTranslate()>y&&(s=e.minTranslate()+y),T=e.minTranslate(),R=!0,m.allowMomentumBounce=!0):s=e.minTranslate(),t.loop&&t.centeredSlides&&(S=!0);else if(t.freeMode.sticky){let o;for(let l=0;l<d.length;l+=1)if(d[l]>-s){o=l;break}Math.abs(d[o]-s)<Math.abs(d[o-1]-s)||e.swipeDirection==="next"?s=d[o]:s=d[o-1],s=-s}if(S&&f("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(b?u=Math.abs((-s-e.translate)/e.velocity):u=Math.abs((s-e.translate)/e.velocity),t.freeMode.sticky){const o=Math.abs((b?-s:s)-e.translate),l=e.slidesSizesGrid[e.activeIndex];o<l?u=t.speed:o<2*l?u=t.speed*1.5:u=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&R?(e.updateProgress(T),e.setTransition(u),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating=!0,E(h,()=>{!e||e.destroyed||!m.allowMomentumBounce||(v("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(T),E(h,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(v("_freeModeNoMomentumRelease"),e.updateProgress(s),e.setTransition(u),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,E(h,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(s),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&v("_freeModeNoMomentumRelease");(!t.freeMode.momentum||N>=t.longSwipesMs)&&(v("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:n,onTouchMove:p,onTouchEnd:w}})}const A={class:"flex flex-col sm:flex-row gap-4 lg:gap-12 items-center mt-3"},O={class:"flex flex-col gap-2.5 items-center sm:items-start"},G={class:"text-slate-950 text-2xl font-bold"},H={class:"flex"},L={class:"text-slate-600 text-base font-normal leading-normal"},X=i("div",{class:"hidden w-px h-[88px] bg-slate-200"},null,-1),Y={class:"flex items-center flex-col w-full"},q={class:"text-slate-900 text-base font-medium"},J={class:"h-2 bg-slate-200 rounded w-full"},K={class:"pl-4 w-[80px] text-slate-300 text-base font-normal"},me={__name:"ReviewRatings",props:{reviewRatings:Object,avarageRating:Number,totalReview:Number},setup(g){const e=g;return(M,v)=>{var f;return x(),_("div",A,[i("div",O,[i("div",G,r((f=e.avarageRating)==null?void 0:f.toFixed(1)),1),i("div",H,[(x(),_(k,null,$(5,n=>P(z(F),{key:n,class:j(["w-6 h-6",n<=e.avarageRating?"text-amber-500":"text-slate-300"])},null,8,["class"])),64))]),i("div",L,r(e.totalReview)+" "+r(M.$t("reviews")),1)]),X,i("div",Y,[(x(!0),_(k,null,$(e.reviewRatings,(n,p)=>(x(),_("div",{key:n.id,class:"h-6 w-full justify-start items-center gap-2 inline-flex"},[i("span",q,r(p),1),i("div",J,[i("div",{class:"h-full bg-amber-500 rounded",style:I({width:n+"%"})},null,4)]),i("div",K,r(n)+"% ",1)]))),128))])])}}},Q={class:"flex gap-4"},U={class:"w-12 shrink-0"},W=["src"],Z={class:"grow flex flex-col gap-4 border-b border-slate-100 pb-4"},ee={class:"flex justify-between items-center gap-3"},te={class:"flex flex-col gap-1"},se={class:"text-slate-950 text-sm font-medium leading-tight"},ie={class:"flex items-center"},oe={class:"text-gray-900 text-sm font-bold leading-tight ml-1"},ne={class:"text-right text-slate-400 text-xs font-normal leading-none"},ae={class:"text-slate-700 text-sm font-normal leading-tight"},ue={__name:"Review",props:{review:Object},setup(g){const e=g;return(M,v)=>{var f,n,p,w,a,c;return x(),_("div",Q,[i("div",U,[i("img",{src:(f=e.review)==null?void 0:f.customer_profile,class:"w-full object-cover"},null,8,W)]),i("div",Z,[i("div",ee,[i("div",te,[i("div",se,r((n=e.review)==null?void 0:n.customer_name),1),i("div",ie,[(x(),_(k,null,$(5,t=>{var h;return P(z(F),{key:t,class:j(["w-5 h-5",t<=((h=e.review)==null?void 0:h.rating)?"text-amber-500":"text-slate-300"])},null,8,["class"])}),64)),i("div",oe,r((w=(p=e.review)==null?void 0:p.rating)==null?void 0:w.toFixed(1)),1)])]),i("div",ne,r((a=e.review)==null?void 0:a.created_at),1)]),i("div",ae,r((c=e.review)==null?void 0:c.description),1)])])}}};export{me as _,ue as a,de as f};