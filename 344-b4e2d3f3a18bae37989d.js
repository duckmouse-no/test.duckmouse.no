"use strict";(self.webpackChunkduckmouse_no=self.webpackChunkduckmouse_no||[]).push([[344],{9344:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return v},swapPlaceholderImage:function(){return m}});var o,r=n(5861),i=n(4687),a=n.n(i),c=n(6296),u=n(7294),s=n(7762),l=(n(72),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function f(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function b(e,t,n,o,r,i){var a=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),u=n.has(t);function s(e){var t=this;this.removeEventListener("load",s);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){f(t,c),null==r||r({wasCached:u})})).catch((function(e){f(t,c),null==i||i(e)})):(f(this,c),null==r||r({wasCached:u}))}return a.addEventListener("load",s),null==o||o({wasCached:u}),Array.from(a.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),a.complete&&s.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",s)}}function m(e,t,i,u,s,g,f){if(!(0,c.h)()){var m,v,h,w=(k=function(){m=b(e,t,i,s,g,f)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=l.get(e.target))||t(),l.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return l.set(e,k),o.observe(e),function(){o&&e&&(l.delete(e),o.unobserve(e))}}):function(){return k(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(v=u.objectFit)?v:"cover",e.dataset.objectPosition=""+(null!=(h=u.objectPosition)?h:"50% 50%"),(y=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){m&&m(),p()}}var y,k;return b(e,t,i,s,g,f)}function v(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,r=e.isLoading,i=e.isLoaded,a=e.imgClassName,l=e.imgStyle,d=void 0===l?{}:l,f=e.objectPosition,b=e.backgroundColor,m=e.objectFit,v=void 0===m?"cover":m,h=(0,c._)(e,g),w=t.width,p=t.height,y=t.layout,k=t.images,j=t.placeholder,C=t.backgroundColor;return d=(0,c.a)({objectFit:v,objectPosition:f,backgroundColor:b},d),(0,s.renderToStaticMarkup)(u.createElement(c.L,{layout:y,width:w,height:p},u.createElement(c.P,(0,c.a)({},(0,c.g)(j,i,y,w,p,C,v,f))),u.createElement(c.M,(0,c.a)({},h,{width:w,height:p,className:a},(0,c.b)(r,i,k,o,d)))))}}}]);
//# sourceMappingURL=344-b4e2d3f3a18bae37989d.js.map