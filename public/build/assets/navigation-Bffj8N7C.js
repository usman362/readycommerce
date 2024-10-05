import{f as w,c as k,m as c}from"./swiper-qv0RRoi4.js";function N(g,a,d,o){return g.params.createElements&&Object.keys(o).forEach(l=>{if(!d[l]&&d.auto===!0){let r=w(g.el,`.${o[l]}`)[0];r||(r=k("div",o[l]),r.className=o[l],g.el.append(r)),d[l]=r,a[l]=r}}),d}function O(g){let{swiper:a,extendParams:d,on:o,emit:l}=g;d({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};function r(n){let e;return n&&typeof n=="string"&&a.isElement&&(e=a.el.querySelector(n)||a.hostEl.querySelector(n),e)?e:(n&&(typeof n=="string"&&(e=[...document.querySelectorAll(n)]),a.params.uniqueNavElements&&typeof n=="string"&&e&&e.length>1&&a.el.querySelectorAll(n).length===1?e=a.el.querySelector(n):e&&e.length===1&&(e=e[0])),n&&!e?n:e)}function u(n,e){const t=a.params.navigation;n=c(n),n.forEach(i=>{i&&(i.classList[e?"add":"remove"](...t.disabledClass.split(" ")),i.tagName==="BUTTON"&&(i.disabled=e),a.params.watchOverflow&&a.enabled&&i.classList[a.isLocked?"add":"remove"](t.lockClass))})}function v(){const{nextEl:n,prevEl:e}=a.navigation;if(a.params.loop){u(e,!1),u(n,!1);return}u(e,a.isBeginning&&!a.params.rewind),u(n,a.isEnd&&!a.params.rewind)}function b(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),l("navigationPrev"))}function x(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),l("navigationNext"))}function E(){const n=a.params.navigation;if(a.params.navigation=N(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let e=r(n.nextEl),t=r(n.prevEl);Object.assign(a.navigation,{nextEl:e,prevEl:t}),e=c(e),t=c(t);const i=(s,m)=>{s&&s.addEventListener("click",m==="next"?x:b),!a.enabled&&s&&s.classList.add(...n.lockClass.split(" "))};e.forEach(s=>i(s,"next")),t.forEach(s=>i(s,"prev"))}function h(){let{nextEl:n,prevEl:e}=a.navigation;n=c(n),e=c(e);const t=(i,s)=>{i.removeEventListener("click",s==="next"?x:b),i.classList.remove(...a.params.navigation.disabledClass.split(" "))};n.forEach(i=>t(i,"next")),e.forEach(i=>t(i,"prev"))}o("init",()=>{a.params.navigation.enabled===!1?C():(E(),v())}),o("toEdge fromEdge lock unlock",()=>{v()}),o("destroy",()=>{h()}),o("enable disable",()=>{let{nextEl:n,prevEl:e}=a.navigation;if(n=c(n),e=c(e),a.enabled){v();return}[...n,...e].filter(t=>!!t).forEach(t=>t.classList.add(a.params.navigation.lockClass))}),o("click",(n,e)=>{let{nextEl:t,prevEl:i}=a.navigation;t=c(t),i=c(i);const s=e.target;let m=i.includes(s)||t.includes(s);if(a.isElement&&!m){const p=e.path||e.composedPath&&e.composedPath();p&&(m=p.find(f=>t.includes(f)||i.includes(f)))}if(a.params.navigation.hideOnClick&&!m){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===s||a.pagination.el.contains(s)))return;let p;t.length?p=t[0].classList.contains(a.params.navigation.hiddenClass):i.length&&(p=i[0].classList.contains(a.params.navigation.hiddenClass)),l(p===!0?"navigationShow":"navigationHide"),[...t,...i].filter(f=>!!f).forEach(f=>f.classList.toggle(a.params.navigation.hiddenClass))}});const L=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),E(),v()},C=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(a.navigation,{enable:L,disable:C,update:v,init:E,destroy:h})}export{O as N,N as c};
