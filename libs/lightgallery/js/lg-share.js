!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.LgShare=e()}}(function(){var e;return function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[s]={exports:{}};e[s][0].call(c.exports,function(t){var r=e[s][1][t];return o(r?r:t)},c,c.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,r,n){!function(t,r){if("function"==typeof e&&e.amd)e([],r);else if("undefined"!=typeof n)r();else{var o={exports:{}};r(),t.lgShare=o.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",googlePlus:!0,googlePlusDropdownText:"GooglePlus",pinterest:!0,pinterestDropdownText:"Pinterest"},r=function(r){return this.el=r,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},t,this.core.s),this.core.s.share&&this.init(),this};r.prototype.init=function(){var e=this,t='<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';t+=e.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+"</span></a></li>":"",t+=e.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+"</span></a></li>":"",t+=e.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+"</span></a></li>":"",t+=e.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+"</span></a></li>":"",t+="</ul></span>",this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",t),this.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div id="lg-dropdown-overlay"></div>'),utils.on(document.getElementById("lg-share"),"click.lg",function(){utils.hasClass(e.core.outer,"lg-dropdown-active")?utils.removeClass(e.core.outer,"lg-dropdown-active"):utils.addClass(e.core.outer,"lg-dropdown-active")}),utils.on(document.getElementById("lg-dropdown-overlay"),"click.lg",function(){utils.removeClass(e.core.outer,"lg-dropdown-active")}),utils.on(e.core.el,"onAfterSlide.lgtm",function(t){setTimeout(function(){document.getElementById("lg-share-facebook").setAttribute("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.core.items[t.detail.index].getAttribute("data-facebook-share-url")||window.location.href)),document.getElementById("lg-share-twitter").setAttribute("href","https://twitter.com/intent/tweet?text="+e.core.items[t.detail.index].getAttribute("data-tweet-text")+"&url="+encodeURIComponent(e.core.items[t.detail.index].getAttribute("data-twitter-share-url")||window.location.href)),document.getElementById("lg-share-googleplus").setAttribute("href","https://plus.google.com/share?url="+encodeURIComponent(e.core.items[t.detail.index].getAttribute("data-googleplus-share-url")||window.location.href)),document.getElementById("lg-share-pinterest").setAttribute("href","http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(e.core.items[t.detail.index].getAttribute("data-pinterest-share-url")||window.location.href)+"&media="+encodeURIComponent(e.core.items[t.detail.index].getAttribute("href")||e.core.items[t.detail.index].getAttribute("data-src"))+"&description="+e.core.items[t.detail.index].getAttribute("data-pinterest-text"))},100)})},r.prototype.destroy=function(){},window.lgModules.share=r})},{}]},{},[1])(1)});