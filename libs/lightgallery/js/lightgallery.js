!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Lightgallery=e()}}(function(){var e;return function t(e,o,i){function r(s,n){if(!o[s]){if(!e[s]){var a="function"==typeof require&&require;if(!n&&a)return a(s,!0);if(l)return l(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=o[s]={exports:{}};e[s][0].call(d.exports,function(t){var o=e[s][1][t];return r(o?o:t)},d,d.exports,t,e,o,i)}return o[s].exports}for(var l="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,o,i){!function(t,o){if("function"==typeof e&&e.amd)e(["exports"],o);else if("undefined"!=typeof i)o(i);else{var r={exports:{}};o(r.exports),t.lgUtils=r.exports}}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.getAttribute=function(e){return window[e]},window.setAttribute=function(e,t){window[e]=t},document.getAttribute=function(e){return document[e]},document.setAttribute=function(e,t){document[e]=t};var t={wrap:function(e,t){if(e){var o=document.createElement("div");o.className=t,e.parentNode.insertBefore(o,e),e.parentNode.removeChild(e),o.appendChild(e)}},addClass:function(e,t){e&&(e.classList?e.classList.add(t):e.className+=" "+t)},removeClass:function(e,t){e&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setVendor:function(e,t,o){e&&(e.style[t.charAt(0).toLowerCase()+t.slice(1)]=o,e.style["webkit"+t]=o,e.style["moz"+t]=o,e.style["ms"+t]=o,e.style["o"+t]=o)},trigger:function(e,t){var o=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(e){var i=new CustomEvent(t,{detail:o});e.dispatchEvent(i)}},Listener:{uid:0},on:function(e,o,i){e&&o.split(" ").forEach(function(o){var r=e.getAttribute("lg-event-uid")||"";t.Listener.uid++,r+="&"+t.Listener.uid,e.setAttribute("lg-event-uid",r),t.Listener[o+t.Listener.uid]=i,e.addEventListener(o.split(".")[0],i,!1)})},off:function(e,o){if(e){var i=e.getAttribute("lg-event-uid");if(i){i=i.split("&");for(var r=0;r<i.length;r++)if(i[r]){var l=o+i[r];if("."===l.substring(0,1))for(var s in t.Listener)t.Listener.hasOwnProperty(s)&&s.split(".").indexOf(l.split(".")[1])>-1&&(e.removeEventListener(s.split(".")[0],t.Listener[s]),e.setAttribute("lg-event-uid",e.getAttribute("lg-event-uid").replace("&"+i[r],"")),delete t.Listener[s]);else e.removeEventListener(l.split(".")[0],t.Listener[l]),e.setAttribute("lg-event-uid",e.getAttribute("lg-event-uid").replace("&"+i[r],"")),delete t.Listener[l]}}}},param:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}};e.default=t})},{}],2:[function(t,o,i){!function(o,r){if("function"==typeof e&&e.amd)e(["./lg-utils"],r);else if("undefined"!=typeof i)r(t("./lg-utils"));else{var l={exports:{}};r(o.lgUtils),o.lightgallery=l.exports}}(this,function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(this.el=e,this.s=r({},l,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.items=[],this.s.dynamic?this.items=this.s.dynamicEl:"this"===this.s.selector?this.items.push(this.el):this.items=""!==this.s.selector?this.s.selectWithin?document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector):this.el.querySelectorAll(this.s.selector):this.el.children,this.___slide="",this.outer="",this.init(),this}var i=t(e),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}return"function"==typeof window.CustomEvent?!1:(e.prototype=window.Event.prototype,window.CustomEvent=e,void 0)}(),window.utils=i.default,window.lgData={uid:0},window.lgModules={};var l={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!1,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};o.prototype.init=function(){var e=this;e.s.preload>e.items.length&&(e.s.preload=e.items.length);var t=window.location.hash;if(t.indexOf("lg="+this.s.galleryId)>0&&(e.index=parseInt(t.split("&slide=")[1],10),i.default.addClass(document.body,"lg-from-hash"),i.default.hasClass(document.body,"lg-on")||(i.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}))),e.s.dynamic)i.default.trigger(this.el,"onBeforeOpen"),e.index=e.s.index||0,i.default.hasClass(document.body,"lg-on")||(i.default.addClass(document.body,"lg-on"),setTimeout(function(){e.build(e.index)}));else for(var o=0;o<e.items.length;o++)!function(t){i.default.on(e.items[t],"click.lgcustom",function(o){o.preventDefault(),i.default.trigger(e.el,"onBeforeOpen"),e.index=e.s.index||t,i.default.hasClass(document.body,"lg-on")||(e.build(e.index),i.default.addClass(document.body,"lg-on"))})}(o)},o.prototype.build=function(e){var t=this;t.structure();for(var o in window.lgModules)t.modules[o]=new window.lgModules[o](t.el);t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),t.items.length>1&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),i.default.trigger(t.el,"onAfterOpen"),i.default.on(t.outer,"mousemove.lg click.lg touchstart.lg",function(){i.default.removeClass(t.outer,"lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){i.default.addClass(t.outer,"lg-hide-items")},t.s.hideBarsDelay)})},o.prototype.structure=function(){var e,t="",o="",r=0,l="",s=this;for(document.body.insertAdjacentHTML("beforeend",'<div class="lg-backdrop"></div>'),i.default.setVendor(document.querySelector(".lg-backdrop"),"TransitionDuration",this.s.backdropDuration+"ms"),r=0;r<this.items.length;r++)t+='<div class="lg-item"></div>';if(this.s.controls&&this.items.length>1&&(o='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+"</div>"+'<div class="lg-next lg-icon">'+this.s.nextHtml+"</div>"+"</div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(l='<div class="lg-sub-html"></div>'),e='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'">'+'<div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'">'+'<div class="lg-inner">'+t+"</div>"+'<div class="lg-toolbar group">'+'<span class="lg-close lg-icon"></span>'+"</div>"+o+l+"</div>"+"</div>",document.body.insertAdjacentHTML("beforeend",e),this.outer=document.querySelector(".lg-outer"),this.___slide=this.outer.querySelectorAll(".lg-item"),this.s.useLeft?(i.default.addClass(this.outer,"lg-use-left"),this.s.mode="lg-slide"):i.default.addClass(this.outer,"lg-use-css3"),s.setTop(),i.default.on(window,"resize.lg orientationchange.lg",function(){setTimeout(function(){s.setTop()},100)}),i.default.addClass(this.___slide[this.index],"lg-current"),this.doCss()?i.default.addClass(this.outer,"lg-css3"):(i.default.addClass(this.outer,"lg-css"),this.s.speed=0),i.default.addClass(this.outer,this.s.mode),this.s.enableDrag&&this.items.length>1&&i.default.addClass(this.outer,"lg-grab"),this.s.showAfterLoad&&i.default.addClass(this.outer,"lg-show-after-load"),this.doCss()){var n=this.outer.querySelector(".lg-inner");i.default.setVendor(n,"TransitionTimingFunction",this.s.cssEasing),i.default.setVendor(n,"TransitionDuration",this.s.speed+"ms")}i.default.addClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){i.default.addClass(s.outer,"lg-visible")},this.s.backdropDuration),this.s.download&&this.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",'<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=document.documentElement.scrollTop||document.body.scrollTop},o.prototype.setTop=function(){if("100%"!==this.s.height){var e=window.innerHeight,t=(e-parseInt(this.s.height,10))/2,o=this.outer.querySelector(".lg");o.style.top=e>=parseInt(this.s.height,10)?t+"px":"0px"}},o.prototype.doCss=function(){var e=function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,o=0;for(o=0;o<e.length;o++)if(e[o]in t.style)return!0};return e()?!0:!1},o.prototype.isVideo=function(e,t){var o;if(o=this.s.dynamic?this.s.dynamicEl[t].html:this.items[t].getAttribute("data-html"),!e&&o)return{html5:!0};var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),r=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),l=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),s=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:r?{vimeo:r}:l?{dailymotion:l}:s?{vk:s}:void 0},o.prototype.counter=function(){this.s.counter&&this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML("beforeend",'<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.items.length+"</span></div>")},o.prototype.addHtml=function(e){var t,o=null;if(this.s.dynamic?o=this.s.dynamicEl[e].subHtml:(t=this.items[e],o=t.getAttribute("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!o&&(o=t.getAttribute("title"),o&&t.querySelector("img")&&(o=t.querySelector("img").getAttribute("alt")))),"undefined"!=typeof o&&null!==o){var r=o.substring(0,1);("."===r||"#"===r)&&(o=this.s.subHtmlSelectorRelative&&!this.s.dynamic?t.querySelector(o).innerHTML:document.querySelector(o).innerHTML)}else o="";".lg-sub-html"===this.s.appendSubHtmlTo?this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML=o:this.___slide[e].insertAdjacentHTML("beforeend",o),"undefined"!=typeof o&&null!==o&&(""===o?i.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html"):i.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo),"lg-empty-html")),i.default.trigger(this.el,"onAfterAppendSubHtml",{index:e})},o.prototype.preload=function(e){var t=1,o=1;for(t=1;t<=this.s.preload&&!(t>=this.items.length-e);t++)this.loadContent(e+t,!1,0);for(o=1;o<=this.s.preload&&!(0>e-o);o++)this.loadContent(e-o,!1,0)},o.prototype.loadContent=function(e,t,o){var r,l,s,n,a,u,d=this,c=!1,h=function(e){for(var t=[],o=[],i=0;i<e.length;i++){var r=e[i].split(" ");""===r[0]&&r.splice(0,1),o.push(r[0]),t.push(r[1])}for(var s=window.innerWidth,n=0;n<t.length;n++)if(parseInt(t[n],10)>s){l=o[n];break}};if(d.s.dynamic){if(d.s.dynamicEl[e].poster&&(c=!0,s=d.s.dynamicEl[e].poster),u=d.s.dynamicEl[e].html,l=d.s.dynamicEl[e].src,d.s.dynamicEl[e].responsive){var f=d.s.dynamicEl[e].responsive.split(",");h(f)}n=d.s.dynamicEl[e].srcset,a=d.s.dynamicEl[e].sizes}else{if(d.items[e].getAttribute("data-poster")&&(c=!0,s=d.items[e].getAttribute("data-poster")),u=d.items[e].getAttribute("data-html"),l=d.items[e].getAttribute("href")||d.items[e].getAttribute("data-src"),d.items[e].getAttribute("data-responsive")){var g=d.items[e].getAttribute("data-responsive").split(",");h(g)}n=d.items[e].getAttribute("data-srcset"),a=d.items[e].getAttribute("data-sizes")}var m=!1;d.s.dynamic?d.s.dynamicEl[e].iframe&&(m=!0):"true"===d.items[e].getAttribute("data-iframe")&&(m=!0);var p=d.isVideo(l,e);if(!i.default.hasClass(d.___slide[e],"lg-loaded")){if(m)d.___slide[e].insertAdjacentHTML("afterbegin",'<div class="lg-video-cont" style="max-width:'+d.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+l+'"  allowfullscreen="true"></iframe></div></div>');else if(c){var v="";v=p&&p.youtube?"lg-has-youtube":p&&p.vimeo?"lg-has-vimeo":"lg-has-html5",d.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont '+v+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+s+'" /></div></div>')}else p?(d.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-video-cont "><div class="lg-video"></div></div>'),i.default.trigger(d.el,"hasVideo",{index:e,src:l,html:u})):d.___slide[e].insertAdjacentHTML("beforeend",'<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+l+'" /></div>');if(i.default.trigger(d.el,"onAferAppendSlide",{index:e}),r=d.___slide[e].querySelector(".lg-object"),a&&r.setAttribute("sizes",a),n){r.setAttribute("srcset",n);try{picturefill({elements:[r[0]]})}catch(y){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&d.addHtml(e),i.default.addClass(d.___slide[e],"lg-loaded")}i.default.on(d.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){var t=0;o&&!i.default.hasClass(document.body,"lg-from-hash")&&(t=o),setTimeout(function(){i.default.addClass(d.___slide[e],"lg-complete"),i.default.trigger(d.el,"onSlideItemLoad",{index:e,delay:o||0})},t)}),p&&p.html5&&!c&&i.default.addClass(d.___slide[e],"lg-complete"),t===!0&&(i.default.hasClass(d.___slide[e],"lg-complete")?d.preload(e):i.default.on(d.___slide[e].querySelector(".lg-object"),"load.lg error.lg",function(){d.preload(e)}))},o.prototype.slide=function(e,t,o){for(var r=0,l=0;l<this.___slide.length;l++)if(i.default.hasClass(this.___slide[l],"lg-current")){r=l;break}var s=this;if(!s.lGalleryOn||r!==e){var n=this.___slide.length,a=s.lGalleryOn?this.s.speed:0,u=!1,d=!1;if(!s.lgBusy){if(this.s.download){var c;c=s.s.dynamic?s.s.dynamicEl[e].downloadUrl!==!1&&(s.s.dynamicEl[e].downloadUrl||s.s.dynamicEl[e].src):"false"!==s.items[e].getAttribute("data-download-url")&&(s.items[e].getAttribute("data-download-url")||s.items[e].getAttribute("href")||s.items[e].getAttribute("data-src")),c?(document.getElementById("lg-download").setAttribute("href",c),i.default.removeClass(s.outer,"lg-hide-download")):i.default.addClass(s.outer,"lg-hide-download")}if(i.default.trigger(s.el,"onBeforeSlide",{prevIndex:r,index:e,fromTouch:t,fromThumb:o}),s.lgBusy=!0,clearTimeout(s.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){s.addHtml(e)},a),this.arrowDisable(e),t){var h=e-1,f=e+1;0===e&&r===n-1?(f=0,h=n-1):e===n-1&&0===r&&(f=0,h=n-1),i.default.removeClass(s.outer.querySelector(".lg-prev-slide"),"lg-prev-slide"),i.default.removeClass(s.outer.querySelector(".lg-current"),"lg-current"),i.default.removeClass(s.outer.querySelector(".lg-next-slide"),"lg-next-slide"),i.default.addClass(s.___slide[h],"lg-prev-slide"),i.default.addClass(s.___slide[f],"lg-next-slide"),i.default.addClass(s.___slide[e],"lg-current")}else{i.default.addClass(s.outer,"lg-no-trans");for(var g=0;g<this.___slide.length;g++)i.default.removeClass(this.___slide[g],"lg-prev-slide"),i.default.removeClass(this.___slide[g],"lg-next-slide");r>e?(d=!0,0!==e||r!==n-1||o||(d=!1,u=!0)):e>r&&(u=!0,e!==n-1||0!==r||o||(d=!0,u=!1)),d?(i.default.addClass(this.___slide[e],"lg-prev-slide"),i.default.addClass(this.___slide[r],"lg-next-slide")):u&&(i.default.addClass(this.___slide[e],"lg-next-slide"),i.default.addClass(this.___slide[r],"lg-prev-slide")),setTimeout(function(){i.default.removeClass(s.outer.querySelector(".lg-current"),"lg-current"),i.default.addClass(s.___slide[e],"lg-current"),i.default.removeClass(s.outer,"lg-no-trans")},50)}s.lGalleryOn?(setTimeout(function(){s.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){s.lgBusy=!1,i.default.trigger(s.el,"onAfterSlide",{prevIndex:r,index:e,fromTouch:t,fromThumb:o})},this.s.speed)):(s.loadContent(e,!0,s.s.backdropDuration),s.lgBusy=!1,i.default.trigger(s.el,"onAfterSlide",{prevIndex:r,index:e,fromTouch:t,fromThumb:o})),s.lGalleryOn=!0,this.s.counter&&document.getElementById("lg-counter-current")&&(document.getElementById("lg-counter-current").innerHTML=e+1)}}},o.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.___slide.length?(t.index++,i.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,i.default.trigger(t.el,"onBeforeNextSlide",{index:t.index}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(i.default.addClass(t.outer,"lg-right-end"),setTimeout(function(){i.default.removeClass(t.outer,"lg-right-end")},400)))},o.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,i.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.items.length-1,i.default.trigger(t.el,"onBeforePrevSlide",{index:t.index,fromTouch:e}),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(i.default.addClass(t.outer,"lg-left-end"),setTimeout(function(){i.default.removeClass(t.outer,"lg-left-end")},400)))},o.prototype.keyPress=function(){var e=this;this.items.length>1&&i.default.on(window,"keyup.lg",function(t){e.items.length>1&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),i.default.on(window,"keydown.lg",function(t){e.s.escKey===!0&&27===t.keyCode&&(t.preventDefault(),i.default.hasClass(e.outer,"lg-thumb-open")?i.default.removeClass(e.outer,"lg-thumb-open"):e.destroy())})},o.prototype.arrow=function(){var e=this;i.default.on(this.outer.querySelector(".lg-prev"),"click.lg",function(){e.goToPrevSlide()}),i.default.on(this.outer.querySelector(".lg-next"),"click.lg",function(){e.goToNextSlide()})},o.prototype.arrowDisable=function(e){if(!this.s.loop&&this.s.hideControlOnEnd){var t=this.outer.querySelector(".lg-next"),o=this.outer.querySelector(".lg-prev");e+1<this.___slide.length?(t.removeAttribute("disabled"),i.default.removeClass(t,"disabled")):(t.setAttribute("disabled","disabled"),i.default.addClass(t,"disabled")),e>0?(o.removeAttribute("disabled"),i.default.removeClass(o,"disabled")):(t.setAttribute("disabled","disabled"),i.default.addClass(t,"disabled"))}},o.prototype.setTranslate=function(e,t,o){this.s.useLeft?e.style.left=t:i.default.setVendor(e,"Transform","translate3d("+t+"px, "+o+"px, 0px)")},o.prototype.touchMove=function(e,t){var o=t-e;Math.abs(o)>15&&(i.default.addClass(this.outer,"lg-dragging"),this.setTranslate(this.___slide[this.index],o,0),this.setTranslate(document.querySelector(".lg-prev-slide"),-this.___slide[this.index].clientWidth+o,0),this.setTranslate(document.querySelector(".lg-next-slide"),this.___slide[this.index].clientWidth+o,0))},o.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&i.default.addClass(t.outer,"lg-slide");for(var o=0;o<this.___slide.length;o++)i.default.hasClass(this.___slide[o],"lg-current")||i.default.hasClass(this.___slide[o],"lg-prev-slide")||i.default.hasClass(this.___slide[o],"lg-next-slide")||(this.___slide[o].style.opacity="0");setTimeout(function(){i.default.removeClass(t.outer,"lg-dragging"),0>e&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&i.default.trigger(t.el,"onSlideClick");for(var o=0;o<t.___slide.length;o++)t.___slide[o].removeAttribute("style")}),setTimeout(function(){i.default.hasClass(t.outer,"lg-dragging")||"lg-slide"===t.s.mode||i.default.removeClass(t.outer,"lg-slide")},t.s.speed+100)},o.prototype.enableSwipe=function(){var e=this,t=0,o=0,r=!1;if(e.s.enableSwipe&&e.isTouch&&e.doCss()){for(var l=0;l<e.___slide.length;l++)i.default.on(e.___slide[l],"touchstart.lg",function(o){i.default.hasClass(e.outer,"lg-zoomed")||e.lgBusy||(o.preventDefault(),e.manageSwipeClass(),t=o.targetTouches[0].pageX)});for(var s=0;s<e.___slide.length;s++)i.default.on(e.___slide[s],"touchmove.lg",function(l){i.default.hasClass(e.outer,"lg-zoomed")||(l.preventDefault(),o=l.targetTouches[0].pageX,e.touchMove(t,o),r=!0)});for(var n=0;n<e.___slide.length;n++)i.default.on(e.___slide[n],"touchend.lg",function(){i.default.hasClass(e.outer,"lg-zoomed")||(r?(r=!1,e.touchEnd(o-t)):i.default.trigger(e.el,"onSlideClick"))})}},o.prototype.enableDrag=function(){var e=this,t=0,o=0,r=!1,l=!1;if(e.s.enableDrag&&!e.isTouch&&e.doCss()){for(var s=0;s<e.___slide.length;s++)i.default.on(e.___slide[s],"mousedown.lg",function(o){i.default.hasClass(e.outer,"lg-zoomed")||(i.default.hasClass(o.target,"lg-object")||i.default.hasClass(o.target,"lg-video-play"))&&(o.preventDefault(),e.lgBusy||(e.manageSwipeClass(),t=o.pageX,r=!0,e.outer.scrollLeft+=1,e.outer.scrollLeft-=1,i.default.removeClass(e.outer,"lg-grab"),i.default.addClass(e.outer,"lg-grabbing"),i.default.trigger(e.el,"onDragstart")))});i.default.on(window,"mousemove.lg",function(s){r&&(l=!0,o=s.pageX,e.touchMove(t,o),i.default.trigger(e.el,"onDragmove"))}),i.default.on(window,"mouseup.lg",function(s){l?(l=!1,e.touchEnd(o-t),i.default.trigger(e.el,"onDragend")):(i.default.hasClass(s.target,"lg-object")||i.default.hasClass(s.target,"lg-video-play"))&&i.default.trigger(e.el,"onSlideClick"),r&&(r=!1,i.default.removeClass(e.outer,"lg-grabbing"),i.default.addClass(e.outer,"lg-grab"))})}},o.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,o=this.___slide.length;this.s.loop&&(0===this.index?t=o-1:this.index===o-1&&(e=0));for(var r=0;r<this.___slide.length;r++)i.default.removeClass(this.___slide[r],"lg-next-slide"),i.default.removeClass(this.___slide[r],"lg-prev-slide");t>-1&&i.default.addClass(this.___slide[t],"lg-prev-slide"),i.default.addClass(this.___slide[e],"lg-next-slide")},o.prototype.mousewheel=function(){var e=this;i.default.on(e.outer,"mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},o.prototype.closeGallery=function(){var e=this,t=!1;i.default.on(this.outer.querySelector(".lg-close"),"click.lg",function(){e.destroy()}),e.s.closable&&(i.default.on(e.outer,"mousedown.lg",function(e){t=i.default.hasClass(e.target,"lg-outer")||i.default.hasClass(e.target,"lg-item")||i.default.hasClass(e.target,"lg-img-wrap")?!0:!1}),i.default.on(e.outer,"mouseup.lg",function(o){(i.default.hasClass(o.target,"lg-outer")||i.default.hasClass(o.target,"lg-item")||i.default.hasClass(o.target,"lg-img-wrap")&&t)&&(i.default.hasClass(e.outer,"lg-dragging")||e.destroy())}))},o.prototype.destroy=function(e){var t=this;if(e||i.default.trigger(t.el,"onBeforeClose"),document.body.scrollTop=t.prevScrollTop,document.documentElement.scrollTop=t.prevScrollTop,e){if(!t.s.dynamic)for(var o=0;o<this.items.length;o++)i.default.off(this.items[o],".lg"),i.default.off(this.items[o],".lgcustom");var r=t.el.getAttribute("lg-uid");delete window.lgData[r],t.el.removeAttribute("lg-uid")}i.default.off(this.el,".lgtm");for(var l in window.lgModules)t.modules[l]&&t.modules[l].destroy();this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,i.default.off(window,".lg"),i.default.removeClass(document.body,"lg-on"),i.default.removeClass(document.body,"lg-from-hash"),t.outer&&i.default.removeClass(t.outer,"lg-visible"),i.default.removeClass(document.querySelector(".lg-backdrop"),"in"),setTimeout(function(){try{t.outer&&t.outer.parentNode.removeChild(t.outer),document.querySelector(".lg-backdrop")&&document.querySelector(".lg-backdrop").parentNode.removeChild(document.querySelector(".lg-backdrop")),e||i.default.trigger(t.el,"onCloseAfter")}catch(o){}},t.s.backdropDuration+50)},window.lightGallery=function(e,t){if(e)try{if(e.getAttribute("lg-uid"))try{window.lgData[e.getAttribute("lg-uid")].init()}catch(i){console.error("lightGallery has not initiated properly")}else{var r="lg"+window.lgData.uid++;window.lgData[r]=new o(e,t),e.setAttribute("lg-uid",r)}}catch(i){console.error("lightGallery has not initiated properly")}}})},{"./lg-utils":1}]},{},[2])(2)});