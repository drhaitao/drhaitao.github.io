!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.LgPager=e()}}(function(){var e;return function t(e,n,r){function o(s,l){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,n,r){!function(t,n){if("function"==typeof e&&e.amd)e([],n);else if("undefined"!=typeof r)n();else{var o={exports:{}};n(),t.lgPager=o.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t={pager:!1},n=function(n){return this.el=n,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},t,this.core.s),this.core.s.pager&&this.core.items.length>1&&this.init(),this};n.prototype.init=function(){var e,t,n,r=this,o="";if(r.core.outer.querySelector(".lg").insertAdjacentHTML("beforeend",'<div class="lg-pager-outer"></div>'),r.core.s.dynamic)for(var i=0;i<r.core.s.dynamicEl.length;i++)o+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+r.core.s.dynamicEl[i].thumb+'" /></div></span>';else for(var s=0;s<r.core.items.length;s++)o+=r.core.s.exThumbImage?'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+r.core.items[s].getAttribute(r.core.s.exThumbImage)+'" /></div></span>':'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+r.core.items[s].querySelector("img").getAttribute("src")+'" /></div></span>';t=r.core.outer.querySelector(".lg-pager-outer"),t.innerHTML=o,e=r.core.outer.querySelectorAll(".lg-pager-cont");for(var l=0;l<e.length;l++)!function(t){utils.on(e[t],"click.lg touchend.lg",function(){r.core.index=t,r.core.slide(r.core.index,!1,!1)})}(l);utils.on(t,"mouseover.lg",function(){clearTimeout(n),utils.addClass(t,"lg-pager-hover")}),utils.on(t,"mouseout.lg",function(){n=setTimeout(function(){utils.removeClass(t,"lg-pager-hover")})}),utils.on(r.core.el,"onBeforeSlide.lgtm",function(t){for(var n=0;n<e.length;n++)utils.removeClass(e[n],"lg-pager-active"),t.detail.index===n&&utils.addClass(e[n],"lg-pager-active")})},n.prototype.destroy=function(){},window.lgModules.pager=n})},{}]},{},[1])(1)});