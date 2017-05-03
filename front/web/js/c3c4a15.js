/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.5.0
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){var t;return function t(e,n,i){function a(o,s){if(!n[o]){if(!e[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(r)return r(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};e[o][0].call(d.exports,function(t){var n=e[o][1][t];return a(n?n:t)},d,d.exports,t,e,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)a(i[o]);return a}({1:[function(t,e,n){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,n=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,a=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,r=/(\w+)/,o=[0,0,0],s=1,l=t.match(e);if(l){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l[u]+l[u],16)}else if(l=t.match(n)){l=l[1];for(var u=0;u<o.length;u++)o[u]=parseInt(l.slice(2*u,2*u+2),16)}else if(l=t.match(i)){for(var u=0;u<o.length;u++)o[u]=parseInt(l[u+1]);s=parseFloat(l[4])}else if(l=t.match(a)){for(var u=0;u<o.length;u++)o[u]=Math.round(2.55*parseFloat(l[u+1]));s=parseFloat(l[4])}else if(l=t.match(r)){if("transparent"==l[1])return[0,0,0,0];if(o=x[l[1]],!o)return}for(var u=0;u<o.length;u++)o[u]=b(o[u],0,255);return s=s||0==s?b(s,0,1):1,o[3]=s,o}}function a(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),r=b(parseFloat(n[2]),0,100),o=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function r(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,n=t.match(e);if(n){var i=parseFloat(n[4]),a=b(parseInt(n[1]),0,360),r=b(parseFloat(n[2]),0,100),o=b(parseFloat(n[3]),0,100),s=b(isNaN(i)?1:i,0,1);return[a,r,o,s]}}}function o(t){var e=i(t);return e&&e.slice(0,3)}function s(t){var e=a(t);return e&&e.slice(0,3)}function l(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=r(t))?e[3]:void 0}function u(t){return"#"+y(t[0])+y(t[1])+y(t[2])}function d(t,e){return e<1||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(e<1||t[3]&&t[3]<1)return f(t,e);var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+n+"%, "+i+"%, "+a+"%)"}function f(t,e){var n=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgba("+n+"%, "+i+"%, "+a+"%, "+(e||t[3]||1)+")"}function g(t,e){return e<1||t[3]&&t[3]<1?m(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function v(t){return k[t.slice(0,3)]}function b(t,e,n){return Math.min(Math.max(e,t),n)}function y(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var x=t(5);e.exports={getRgba:i,getHsla:a,getRgb:o,getHsl:s,getHwb:r,getAlpha:l,hexString:u,rgbString:d,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:m,hwbString:p,keyword:v};var k={};for(var _ in x)k[x[_]]=_},{5:5}],2:[function(t,e,n){var i=t(4),a=t(1),r=function(t){if(t instanceof r)return t;if(!(this instanceof r))return new r(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=a.getRgba(t))this.setValues("rgb",e);else if(e=a.getHsla(t))this.setValues("hsl",e);else{if(!(e=a.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};r.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=t<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return e<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,r=2*a-1,o=n.alpha()-i.alpha(),s=((r*o===-1?r:(r+o)/(1+r*o))+1)/2,l=1-s;return this.rgb(s*n.red()+l*i.red(),s*n.green()+l*i.green(),s*n.blue()+l*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new r,i=this.values,a=n.values;for(var o in i)i.hasOwnProperty(o)&&(t=i[o],e={}.toString.call(t),"[object Array]"===e?a[o]=t.slice(0):"[object Number]"===e?a[o]=t:console.error("unexpected color value:",t));return n}},r.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},r.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},r.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},r.prototype.setValues=function(t,e){var n,a=this.values,r=this.spaces,o=this.maxes,s=1;if("alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(n=0;n<t.length;n++)a[t][n]=e[l[n]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;var u;for(n=0;n<t.length;n++)u=Math.max(0,Math.min(o[t][n],a[t][n])),a[t][n]=Math.round(u);for(var d in r)d!==t&&(a[d]=i[t][d](a[t]));return!0},r.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},r.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=r),e.exports=r},{1:1,4:4}],3:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,r=t[1]/255,o=t[2]/255,s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=(s+l)/2,n=l==s?0:i<=.5?u/(l+s):u/(2-l-s),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],r=t[1],o=t[2],s=Math.min(a,r,o),l=Math.max(a,r,o),u=l-s;return n=0==l?0:u/l*1e3/10,l==s?e=0:a==l?e=(r-o)/u:r==l?e=2+(o-a)/u:o==l&&(e=4+(a-r)/u),e=Math.min(60*e,360),e<0&&(e+=360),i=l/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2],r=i(t)[0],o=1/255*Math.min(e,Math.min(n,a)),a=1-1/255*Math.max(e,Math.max(n,a));return[r,100*o,100*a]}function s(t){var e,n,i,a,r=t[0]/255,o=t[1]/255,s=t[2]/255;return a=Math.min(1-r,1-o,1-s),e=(1-r-a)/(1-a)||0,n=(1-o-a)/(1-a)||0,i=(1-s-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function l(t){return K[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var a=.4124*e+.3576*n+.1805*i,r=.2126*e+.7152*n+.0722*i,o=.0193*e+.1192*n+.9505*i;return[100*a,100*r,100*o]}function d(t){var e,n,i,a=u(t),r=a[0],o=a[1],s=a[2];return r/=95.047,o/=100,s/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,s=s>.008856?Math.pow(s,1/3):7.787*s+16/116,e=116*o-16,n=500*(r-o),i=200*(o-s),[e,n,i]}function c(t){return Y(d(t))}function h(t){var e,n,i,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return r=255*l,[r,r,r];n=l<.5?l*(1+s):l+s-l*s,e=2*l-n,a=[0,0,0];for(var u=0;u<3;u++)i=o+1/3*-(u-1),i<0&&i++,i>1&&i--,r=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*r;return a}function f(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return 0===r?[0,0,0]:(r*=2,a*=r<=1?r:2-r,n=(r+a)/2,e=2*a/(r+a),[i,100*e,100*n])}function m(t){return o(h(t))}function p(t){return s(h(t))}function v(t){return l(h(t))}function y(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*i*(1-n),s=255*i*(1-n*r),l=255*i*(1-n*(1-r)),i=255*i;switch(a){case 0:return[i,l,o];case 1:return[s,i,o];case 2:return[o,i,l];case 3:return[o,s,i];case 4:return[l,o,i];case 5:return[i,o,s]}}function x(t){var e,n,i=t[0],a=t[1]/100,r=t[2]/100;return n=(2-a)*r,e=a*r,e/=n<=1?n:2-n,e=e||0,n/=2,[i,100*e,100*n]}function k(t){return o(y(t))}function _(t){return s(y(t))}function w(t){return l(y(t))}function S(t){var e,n,i,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),e=Math.floor(6*o),n=1-l,i=6*o-e,0!=(1&e)&&(i=1-i),a=s+i*(n-s),e){default:case 6:case 0:r=n,g=a,b=s;break;case 1:r=a,g=n,b=s;break;case 2:r=s,g=n,b=a;break;case 3:r=s,g=a,b=n;break;case 4:r=a,g=s,b=n;break;case 5:r=n,g=s,b=a}return[255*r,255*g,255*b]}function M(t){return i(S(t))}function D(t){return a(S(t))}function C(t){return s(S(t))}function T(t){return l(S(t))}function P(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100,s=t[3]/100;return e=1-Math.min(1,a*(1-s)+s),n=1-Math.min(1,r*(1-s)+s),i=1-Math.min(1,o*(1-s)+s),[255*e,255*n,255*i]}function I(t){return i(P(t))}function A(t){return a(P(t))}function F(t){return o(P(t))}function O(t){return l(P(t))}function R(t){var e,n,i,a=t[0]/100,r=t[1]/100,o=t[2]/100;return e=3.2406*a+r*-1.5372+o*-.4986,n=a*-.9689+1.8758*r+.0415*o,i=.0557*a+r*-.204+1.057*o,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function L(t){var e,n,i,a=t[0],r=t[1],o=t[2];return a/=95.047,r/=100,o/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,e=116*r-16,n=500*(a-r),i=200*(r-o),[e,n,i]}function V(t){return Y(L(t))}function W(t){var e,n,i,a,r=t[0],o=t[1],s=t[2];return r<=8?(n=100*r/903.3,a=7.787*(n/100)+16/116):(n=100*Math.pow((r+16)/116,3),a=Math.pow(n/100,1/3)),e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i=i/108.883<=.008859?i=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3),[e,n,i]}function Y(t){var e,n,i,a=t[0],r=t[1],o=t[2];return e=Math.atan2(o,r),n=360*e/2/Math.PI,n<0&&(n+=360),i=Math.sqrt(r*r+o*o),[a,i,n]}function B(t){return R(W(t))}function z(t){var e,n,i,a=t[0],r=t[1],o=t[2];return i=o/360*2*Math.PI,e=r*Math.cos(i),n=r*Math.sin(i),[a,e,n]}function N(t){return W(z(t))}function H(t){return B(z(t))}function E(t){return J[t]}function U(t){return i(E(t))}function j(t){return a(E(t))}function G(t){return o(E(t))}function q(t){return s(E(t))}function Z(t){return d(E(t))}function X(t){return u(E(t))}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:u,rgb2lab:d,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:m,hsl2cmyk:p,hsl2keyword:v,hsv2rgb:y,hsv2hsl:x,hsv2hwb:k,hsv2cmyk:_,hsv2keyword:w,hwb2rgb:S,hwb2hsl:M,hwb2hsv:D,hwb2cmyk:C,hwb2keyword:T,cmyk2rgb:P,cmyk2hsl:I,cmyk2hsv:A,cmyk2hwb:F,cmyk2keyword:O,keyword2rgb:E,keyword2hsl:U,keyword2hsv:j,keyword2hwb:G,keyword2cmyk:q,keyword2lab:Z,keyword2xyz:X,xyz2rgb:R,xyz2lab:L,xyz2lch:V,lab2xyz:W,lab2rgb:B,lab2lch:Y,lch2lab:z,lch2xyz:N,lch2rgb:H};var J={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},K={};for(var Q in J)K[JSON.stringify(J[Q])]=Q},{}],4:[function(t,e,n){var i=t(3),a=function(){return new u};for(var r in i){a[r+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(r);var o=/(\w+)2(\w+)/.exec(r),s=o[1],l=o[2];a[s]=a[s]||{},a[s][l]=a[r]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(r)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{3:3}],5:[function(t,e,n){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],6:[function(e,n,i){!function(e,a){"object"==typeof i&&"undefined"!=typeof n?n.exports=a():"function"==typeof t&&t.amd?t(a):e.moment=a()}(this,function(){"use strict";function t(){return vi.apply(null,arguments)}function i(t){vi=t}function a(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function r(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function o(t){var e;for(e in t)return!1;return!0}function s(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function l(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function u(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function d(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function c(t,e){for(var n in e)d(e,n)&&(t[n]=e[n]);return d(e,"toString")&&(t.toString=e.toString),d(e,"valueOf")&&(t.valueOf=e.valueOf),t}function h(t,e,n,i){return ye(t,e,n,i,!0).utc()}function f(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function g(t){return null==t._pf&&(t._pf=f()),t._pf}function m(t){if(null==t._isValid){var e=g(t),n=yi.call(e.parsedDateParts,function(t){return null!=t}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return i;t._isValid=i}return t._isValid}function p(t){var e=h(NaN);return null!=t?c(g(e),t):g(e).userInvalidated=!0,e}function v(t){return void 0===t}function b(t,e){var n,i,a;if(v(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),v(e._i)||(t._i=e._i),v(e._f)||(t._f=e._f),v(e._l)||(t._l=e._l),v(e._strict)||(t._strict=e._strict),v(e._tzm)||(t._tzm=e._tzm),v(e._isUTC)||(t._isUTC=e._isUTC),v(e._offset)||(t._offset=e._offset),v(e._pf)||(t._pf=g(e)),v(e._locale)||(t._locale=e._locale),xi.length>0)for(n in xi)i=xi[n],a=e[i],v(a)||(t[i]=a);return t}function y(e){b(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ki===!1&&(ki=!0,t.updateOffset(this),ki=!1)}function x(t){return t instanceof y||null!=t&&null!=t._isAMomentObject}function k(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function _(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=k(e)),n}function w(t,e,n){var i,a=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(i=0;i<a;i++)(n&&t[i]!==e[i]||!n&&_(t[i])!==_(e[i]))&&o++;return o+r}function S(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function M(e,n){var i=!0;return c(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),i){for(var a,r=[],o=0;o<arguments.length;o++){if(a="","object"==typeof arguments[o]){a+="\n["+o+"] ";for(var s in arguments[0])a+=s+": "+arguments[0][s]+", ";a=a.slice(0,-2)}else a=arguments[o];r.push(a)}S(e+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function D(e,n){null!=t.deprecationHandler&&t.deprecationHandler(e,n),_i[e]||(S(n),_i[e]=!0)}function C(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function T(t){var e,n;for(n in t)e=t[n],C(e)?this[n]=e:this["_"+n]=e;this._config=t,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function P(t,e){var n,i=c({},t);for(n in e)d(e,n)&&(r(t[n])&&r(e[n])?(i[n]={},c(i[n],t[n]),c(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)d(t,n)&&!d(e,n)&&r(t[n])&&(i[n]=c({},i[n]));return i}function I(t){null!=t&&this.set(t)}function A(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return C(i)?i.call(e,n):i}function F(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function O(){return this._invalidDate}function R(t){return this._ordinal.replace("%d",t)}function L(t,e,n,i){var a=this._relativeTime[n];return C(a)?a(t,e,n,i):a.replace(/%d/i,t)}function V(t,e){var n=this._relativeTime[t>0?"future":"past"];return C(n)?n(e):n.replace(/%s/i,e)}function W(t,e){var n=t.toLowerCase();Fi[n]=Fi[n+"s"]=Fi[e]=t}function Y(t){return"string"==typeof t?Fi[t]||Fi[t.toLowerCase()]:void 0}function B(t){var e,n,i={};for(n in t)d(t,n)&&(e=Y(n),e&&(i[e]=t[n]));return i}function z(t,e){Oi[t]=e}function N(t){var e=[];for(var n in t)e.push({unit:n,priority:Oi[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}function H(e,n){return function(i){return null!=i?(U(this,e,i),t.updateOffset(this,n),this):E(this,e)}}function E(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function U(t,e,n){t.isValid()&&t._d["set"+(t._isUTC?"UTC":"")+e](n)}function j(t){return t=Y(t),C(this[t])?this[t]():this}function G(t,e){if("object"==typeof t){t=B(t);for(var n=N(t),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit])}else if(t=Y(t),C(this[t]))return this[t](e);return this}function q(t,e,n){var i=""+Math.abs(t),a=e-i.length,r=t>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+i}function Z(t,e,n,i){var a=i;"string"==typeof i&&(a=function(){return this[i]()}),t&&(Wi[t]=a),e&&(Wi[e[0]]=function(){return q(a.apply(this,arguments),e[1],e[2])}),n&&(Wi[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),t)})}function X(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function J(t){var e,n,i=t.match(Ri);for(e=0,n=i.length;e<n;e++)Wi[i[e]]?i[e]=Wi[i[e]]:i[e]=X(i[e]);return function(e){var a,r="";for(a=0;a<n;a++)r+=i[a]instanceof Function?i[a].call(e,t):i[a];return r}}function K(t,e){return t.isValid()?(e=Q(e,t.localeData()),Vi[e]=Vi[e]||J(e),Vi[e](t)):t.localeData().invalidDate()}function Q(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(Li.lastIndex=0;i>=0&&Li.test(t);)t=t.replace(Li,n),Li.lastIndex=0,i-=1;return t}function $(t,e,n){ea[t]=C(e)?e:function(t,i){return t&&n?n:e}}function tt(t,e){return d(ea,t)?ea[t](e._strict,e._locale):new RegExp(et(t))}function et(t){return nt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,a){return e||n||i||a}))}function nt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function it(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),s(e)&&(i=function(t,n){n[e]=_(t)}),n=0;n<t.length;n++)na[t[n]]=i}function at(t,e){it(t,function(t,n,i,a){i._w=i._w||{},e(t,i._w,i,a)})}function rt(t,e,n){null!=e&&d(na,t)&&na[t](e,n._a,n,t)}function ot(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function st(t,e){return t?a(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||fa).test(e)?"format":"standalone"][t.month()]:this._months}function lt(t,e){return t?a(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[fa.test(e)?"format":"standalone"][t.month()]:this._monthsShort}function ut(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=h([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===e?(a=ha.call(this._shortMonthsParse,o),a!==-1?a:null):(a=ha.call(this._longMonthsParse,o),a!==-1?a:null):"MMM"===e?(a=ha.call(this._shortMonthsParse,o),a!==-1?a:(a=ha.call(this._longMonthsParse,o),a!==-1?a:null)):(a=ha.call(this._longMonthsParse,o),a!==-1?a:(a=ha.call(this._shortMonthsParse,o),a!==-1?a:null))}function dt(t,e,n){var i,a,r;if(this._monthsParseExact)return ut.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(a=h([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function ct(t,e){var n;if(!t.isValid())return t;if("string"==typeof e)if(/^\d+$/.test(e))e=_(e);else if(e=t.localeData().monthsParse(e),!s(e))return t;return n=Math.min(t.date(),ot(t.year(),e)),
    t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function ht(e){return null!=e?(ct(this,e),t.updateOffset(this,!0),this):E(this,"Month")}function ft(){return ot(this.year(),this.month())}function gt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||pt.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=pa),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function mt(t){return this._monthsParseExact?(d(this,"_monthsRegex")||pt.call(this),t?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=va),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function pt(){function t(t,e){return e.length-t.length}var e,n,i=[],a=[],r=[];for(e=0;e<12;e++)n=h([2e3,e]),i.push(this.monthsShort(n,"")),a.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(t),a.sort(t),r.sort(t),e=0;e<12;e++)i[e]=nt(i[e]),a[e]=nt(a[e]);for(e=0;e<24;e++)r[e]=nt(r[e]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function vt(t){return bt(t)?366:365}function bt(t){return t%4===0&&t%100!==0||t%400===0}function yt(){return bt(this.year())}function xt(t,e,n,i,a,r,o){var s=new Date(t,e,n,i,a,r,o);return t<100&&t>=0&&isFinite(s.getFullYear())&&s.setFullYear(t),s}function kt(t){var e=new Date(Date.UTC.apply(null,arguments));return t<100&&t>=0&&isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t),e}function _t(t,e,n){var i=7+e-n,a=(7+kt(t,0,i).getUTCDay()-e)%7;return-a+i-1}function wt(t,e,n,i,a){var r,o,s=(7+n-i)%7,l=_t(t,i,a),u=1+7*(e-1)+s+l;return u<=0?(r=t-1,o=vt(r)+u):u>vt(t)?(r=t+1,o=u-vt(t)):(r=t,o=u),{year:r,dayOfYear:o}}function St(t,e,n){var i,a,r=_t(t.year(),e,n),o=Math.floor((t.dayOfYear()-r-1)/7)+1;return o<1?(a=t.year()-1,i=o+Mt(a,e,n)):o>Mt(t.year(),e,n)?(i=o-Mt(t.year(),e,n),a=t.year()+1):(a=t.year(),i=o),{week:i,year:a}}function Mt(t,e,n){var i=_t(t,e,n),a=_t(t+1,e,n);return(vt(t)-i+a)/7}function Dt(t){return St(t,this._week.dow,this._week.doy).week}function Ct(){return this._week.dow}function Tt(){return this._week.doy}function Pt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function It(t){var e=St(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function At(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Ft(t,e){return"string"==typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Ot(t,e){return t?a(this._weekdays)?this._weekdays[t.day()]:this._weekdays[this._weekdays.isFormat.test(e)?"format":"standalone"][t.day()]:this._weekdays}function Rt(t){return t?this._weekdaysShort[t.day()]:this._weekdaysShort}function Lt(t){return t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Vt(t,e,n){var i,a,r,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=h([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===e?(a=ha.call(this._weekdaysParse,o),a!==-1?a:null):"ddd"===e?(a=ha.call(this._shortWeekdaysParse,o),a!==-1?a:null):(a=ha.call(this._minWeekdaysParse,o),a!==-1?a:null):"dddd"===e?(a=ha.call(this._weekdaysParse,o),a!==-1?a:(a=ha.call(this._shortWeekdaysParse,o),a!==-1?a:(a=ha.call(this._minWeekdaysParse,o),a!==-1?a:null))):"ddd"===e?(a=ha.call(this._shortWeekdaysParse,o),a!==-1?a:(a=ha.call(this._weekdaysParse,o),a!==-1?a:(a=ha.call(this._minWeekdaysParse,o),a!==-1?a:null))):(a=ha.call(this._minWeekdaysParse,o),a!==-1?a:(a=ha.call(this._weekdaysParse,o),a!==-1?a:(a=ha.call(this._shortWeekdaysParse,o),a!==-1?a:null)))}function Wt(t,e,n){var i,a,r;if(this._weekdaysParseExact)return Vt.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(a=h([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(a,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(a,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(a,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function Yt(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=At(t,this.localeData()),this.add(t-e,"d")):e}function Bt(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function zt(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=Ft(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}function Nt(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ut.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=wa),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ht(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ut.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Sa),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Et(t){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ut.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ma),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ut(){function t(t,e){return e.length-t.length}var e,n,i,a,r,o=[],s=[],l=[],u=[];for(e=0;e<7;e++)n=h([2e3,1]).day(e),i=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),r=this.weekdays(n,""),o.push(i),s.push(a),l.push(r),u.push(i),u.push(a),u.push(r);for(o.sort(t),s.sort(t),l.sort(t),u.sort(t),e=0;e<7;e++)s[e]=nt(s[e]),l[e]=nt(l[e]),u[e]=nt(u[e]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function jt(){return this.hours()%12||12}function Gt(){return this.hours()||24}function qt(t,e){Z(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function Zt(t,e){return e._meridiemParse}function Xt(t){return"p"===(t+"").toLowerCase().charAt(0)}function Jt(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function Kt(t){return t?t.toLowerCase().replace("_","-"):t}function Qt(t){for(var e,n,i,a,r=0;r<t.length;){for(a=Kt(t[r]).split("-"),e=a.length,n=Kt(t[r+1]),n=n?n.split("-"):null;e>0;){if(i=$t(a.slice(0,e).join("-")))return i;if(n&&n.length>=e&&w(a,n,!0)>=e-1)break;e--}r++}return null}function $t(t){var i=null;if(!Ia[t]&&"undefined"!=typeof n&&n&&n.exports)try{i=Da._abbr,e("./locale/"+t),te(i)}catch(t){}return Ia[t]}function te(t,e){var n;return t&&(n=v(e)?ie(t):ee(t,e),n&&(Da=n)),Da._abbr}function ee(t,e){if(null!==e){var n=Pa;if(e.abbr=t,null!=Ia[t])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Ia[t]._config;else if(null!=e.parentLocale){if(null==Ia[e.parentLocale])return Aa[e.parentLocale]||(Aa[e.parentLocale]=[]),Aa[e.parentLocale].push({name:t,config:e}),null;n=Ia[e.parentLocale]._config}return Ia[t]=new I(P(n,e)),Aa[t]&&Aa[t].forEach(function(t){ee(t.name,t.config)}),te(t),Ia[t]}return delete Ia[t],null}function ne(t,e){if(null!=e){var n,i=Pa;null!=Ia[t]&&(i=Ia[t]._config),e=P(i,e),n=new I(e),n.parentLocale=Ia[t],Ia[t]=n,te(t)}else null!=Ia[t]&&(null!=Ia[t].parentLocale?Ia[t]=Ia[t].parentLocale:null!=Ia[t]&&delete Ia[t]);return Ia[t]}function ie(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Da;if(!a(t)){if(e=$t(t))return e;t=[t]}return Qt(t)}function ae(){return Mi(Ia)}function re(t){var e,n=t._a;return n&&g(t).overflow===-2&&(e=n[aa]<0||n[aa]>11?aa:n[ra]<1||n[ra]>ot(n[ia],n[aa])?ra:n[oa]<0||n[oa]>24||24===n[oa]&&(0!==n[sa]||0!==n[la]||0!==n[ua])?oa:n[sa]<0||n[sa]>59?sa:n[la]<0||n[la]>59?la:n[ua]<0||n[ua]>999?ua:-1,g(t)._overflowDayOfYear&&(e<ia||e>ra)&&(e=ra),g(t)._overflowWeeks&&e===-1&&(e=da),g(t)._overflowWeekday&&e===-1&&(e=ca),g(t).overflow=e),t}function oe(t){var e,n,i,a,r,o,s=t._i,l=Fa.exec(s)||Oa.exec(s);if(l){for(g(t).iso=!0,e=0,n=La.length;e<n;e++)if(La[e][1].exec(l[1])){a=La[e][0],i=La[e][2]!==!1;break}if(null==a)return void(t._isValid=!1);if(l[3]){for(e=0,n=Va.length;e<n;e++)if(Va[e][1].exec(l[3])){r=(l[2]||" ")+Va[e][0];break}if(null==r)return void(t._isValid=!1)}if(!i&&null!=r)return void(t._isValid=!1);if(l[4]){if(!Ra.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=a+(r||"")+(o||""),he(t)}else t._isValid=!1}function se(e){var n=Wa.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(oe(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function le(t,e,n){return null!=t?t:null!=e?e:n}function ue(e){var n=new Date(t.now());return e._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function de(t){var e,n,i,a,r=[];if(!t._d){for(i=ue(t),t._w&&null==t._a[ra]&&null==t._a[aa]&&ce(t),t._dayOfYear&&(a=le(t._a[ia],i[ia]),t._dayOfYear>vt(a)&&(g(t)._overflowDayOfYear=!0),n=kt(a,0,t._dayOfYear),t._a[aa]=n.getUTCMonth(),t._a[ra]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=r[e]=i[e];for(;e<7;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[oa]&&0===t._a[sa]&&0===t._a[la]&&0===t._a[ua]&&(t._nextDay=!0,t._a[oa]=0),t._d=(t._useUTC?kt:xt).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[oa]=24)}}function ce(t){var e,n,i,a,r,o,s,l;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)r=1,o=4,n=le(e.GG,t._a[ia],St(xe(),1,4).year),i=le(e.W,1),a=le(e.E,1),(a<1||a>7)&&(l=!0);else{r=t._locale._week.dow,o=t._locale._week.doy;var u=St(xe(),r,o);n=le(e.gg,t._a[ia],u.year),i=le(e.w,u.week),null!=e.d?(a=e.d,(a<0||a>6)&&(l=!0)):null!=e.e?(a=e.e+r,(e.e<0||e.e>6)&&(l=!0)):a=r}i<1||i>Mt(n,r,o)?g(t)._overflowWeeks=!0:null!=l?g(t)._overflowWeekday=!0:(s=wt(n,i,a,r,o),t._a[ia]=s.year,t._dayOfYear=s.dayOfYear)}function he(e){if(e._f===t.ISO_8601)return void oe(e);e._a=[],g(e).empty=!0;var n,i,a,r,o,s=""+e._i,l=s.length,u=0;for(a=Q(e._f,e._locale).match(Ri)||[],n=0;n<a.length;n++)r=a[n],i=(s.match(tt(r,e))||[])[0],i&&(o=s.substr(0,s.indexOf(i)),o.length>0&&g(e).unusedInput.push(o),s=s.slice(s.indexOf(i)+i.length),u+=i.length),Wi[r]?(i?g(e).empty=!1:g(e).unusedTokens.push(r),rt(r,i,e)):e._strict&&!i&&g(e).unusedTokens.push(r);g(e).charsLeftOver=l-u,s.length>0&&g(e).unusedInput.push(s),e._a[oa]<=12&&g(e).bigHour===!0&&e._a[oa]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[oa]=fe(e._locale,e._a[oa],e._meridiem),de(e),re(e)}function fe(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&e<12&&(e+=12),i||12!==e||(e=0),e):e}function ge(t){var e,n,i,a,r;if(0===t._f.length)return g(t).invalidFormat=!0,void(t._d=new Date(NaN));for(a=0;a<t._f.length;a++)r=0,e=b({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[a],he(e),m(e)&&(r+=g(e).charsLeftOver,r+=10*g(e).unusedTokens.length,g(e).score=r,(null==i||r<i)&&(i=r,n=e));c(t,n||e)}function me(t){if(!t._d){var e=B(t._i);t._a=u([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),de(t)}}function pe(t){var e=new y(re(ve(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function ve(t){var e=t._i,n=t._f;return t._locale=t._locale||ie(t._l),null===e||void 0===n&&""===e?p({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),x(e)?new y(re(e)):(l(e)?t._d=e:a(n)?ge(t):n?he(t):be(t),m(t)||(t._d=null),t))}function be(e){var n=e._i;void 0===n?e._d=new Date(t.now()):l(n)?e._d=new Date(n.valueOf()):"string"==typeof n?se(e):a(n)?(e._a=u(n.slice(0),function(t){return parseInt(t,10)}),de(e)):"object"==typeof n?me(e):s(n)?e._d=new Date(n):t.createFromInputFallback(e)}function ye(t,e,n,i,s){var l={};return n!==!0&&n!==!1||(i=n,n=void 0),(r(t)&&o(t)||a(t)&&0===t.length)&&(t=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=n,l._i=t,l._f=e,l._strict=i,pe(l)}function xe(t,e,n,i){return ye(t,e,n,i,!1)}function ke(t,e){var n,i;if(1===e.length&&a(e[0])&&(e=e[0]),!e.length)return xe();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}function _e(){var t=[].slice.call(arguments,0);return ke("isBefore",t)}function we(){var t=[].slice.call(arguments,0);return ke("isAfter",t)}function Se(t){var e=B(t),n=e.year||0,i=e.quarter||0,a=e.month||0,r=e.week||0,o=e.day||0,s=e.hour||0,l=e.minute||0,u=e.second||0,d=e.millisecond||0;this._milliseconds=+d+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*r,this._months=+a+3*i+12*n,this._data={},this._locale=ie(),this._bubble()}function Me(t){return t instanceof Se}function De(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function Ce(t,e){Z(t,0,0,function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+q(~~(t/60),2)+e+q(~~t%60,2)})}function Te(t,e){var n=(e||"").match(t);if(null===n)return null;var i=n[n.length-1]||[],a=(i+"").match(Na)||["-",0,0],r=+(60*a[1])+_(a[2]);return 0===r?0:"+"===a[0]?r:-r}function Pe(e,n){var i,a;return n._isUTC?(i=n.clone(),a=(x(e)||l(e)?e.valueOf():xe(e).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+a),t.updateOffset(i,!1),i):xe(e).local()}function Ie(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Ae(e,n){var i,a=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(e=Te(Qi,e),null===e)return this}else Math.abs(e)<16&&(e*=60);return!this._isUTC&&n&&(i=Ie(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==e&&(!n||this._changeInProgress?qe(this,He(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?a:Ie(this)}function Fe(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Oe(t){return this.utcOffset(0,t)}function Re(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Ie(this),"m")),this}function Le(){if(null!=this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var t=Te(Ki,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Ve(t){return!!this.isValid()&&(t=t?xe(t).utcOffset():0,(this.utcOffset()-t)%60===0)}function We(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ye(){if(!v(this._isDSTShifted))return this._isDSTShifted;var t={};if(b(t,this),t=ve(t),t._a){var e=t._isUTC?h(t._a):xe(t._a);this._isDSTShifted=this.isValid()&&w(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Be(){return!!this.isValid()&&!this._isUTC}function ze(){return!!this.isValid()&&this._isUTC}function Ne(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function He(t,e){var n,i,a,r=t,o=null;return Me(t)?r={ms:t._milliseconds,d:t._days,M:t._months}:s(t)?(r={},e?r[e]=t:r.milliseconds=t):(o=Ha.exec(t))?(n="-"===o[1]?-1:1,r={y:0,d:_(o[ra])*n,h:_(o[oa])*n,m:_(o[sa])*n,s:_(o[la])*n,ms:_(De(1e3*o[ua]))*n}):(o=Ea.exec(t))?(n="-"===o[1]?-1:1,r={y:Ee(o[2],n),M:Ee(o[3],n),w:Ee(o[4],n),d:Ee(o[5],n),h:Ee(o[6],n),m:Ee(o[7],n),s:Ee(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(a=je(xe(r.from),xe(r.to)),r={},r.ms=a.milliseconds,r.M=a.months),i=new Se(r),Me(t)&&d(t,"_locale")&&(i._locale=t._locale),i}function Ee(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ue(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function je(t,e){var n;return t.isValid()&&e.isValid()?(e=Pe(e,t),t.isBefore(e)?n=Ue(t,e):(n=Ue(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ge(t,e){return function(n,i){var a,r;return null===i||isNaN(+i)||(D(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=i,i=r),n="string"==typeof n?+n:n,a=He(n,i),qe(this,a,t),this}}function qe(e,n,i,a){var r=n._milliseconds,o=De(n._days),s=De(n._months);e.isValid()&&(a=null==a||a,r&&e._d.setTime(e._d.valueOf()+r*i),o&&U(e,"Date",E(e,"Date")+o*i),s&&ct(e,E(e,"Month")+s*i),a&&t.updateOffset(e,o||s))}function Ze(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Xe(e,n){var i=e||xe(),a=Pe(i,this).startOf("day"),r=t.calendarFormat(this,a)||"sameElse",o=n&&(C(n[r])?n[r].call(this,i):n[r]);return this.format(o||this.localeData().calendar(r,this,xe(i)))}function Je(){return new y(this)}function Ke(t,e){var n=x(t)?t:xe(t);return!(!this.isValid()||!n.isValid())&&(e=Y(v(e)?"millisecond":e),"millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())}function Qe(t,e){var n=x(t)?t:xe(t);return!(!this.isValid()||!n.isValid())&&(e=Y(v(e)?"millisecond":e),"millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())}function $e(t,e,n,i){return i=i||"()",("("===i[0]?this.isAfter(t,n):!this.isBefore(t,n))&&(")"===i[1]?this.isBefore(e,n):!this.isAfter(e,n))}function tn(t,e){var n,i=x(t)?t:xe(t);return!(!this.isValid()||!i.isValid())&&(e=Y(e||"millisecond"),"millisecond"===e?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))}function en(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function nn(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function an(t,e,n){var i,a,r,o;return this.isValid()?(i=Pe(t,this),i.isValid()?(a=6e4*(i.utcOffset()-this.utcOffset()),e=Y(e),"year"===e||"month"===e||"quarter"===e?(o=rn(this,i),"quarter"===e?o/=3:"year"===e&&(o/=12)):(r=this-i,o="second"===e?r/1e3:"minute"===e?r/6e4:"hour"===e?r/36e5:"day"===e?(r-a)/864e5:"week"===e?(r-a)/6048e5:r),n?o:k(o)):NaN):NaN}function rn(t,e){var n,i,a=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(a,"months");return e-r<0?(n=t.clone().add(a-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(a+1,"months"),i=(e-r)/(n-r)),-(a+i)||0}function on(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function sn(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?C(Date.prototype.toISOString)?this.toDate().toISOString():K(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ln(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",r=e+'[")]';return this.format(n+i+a+r)}function un(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var n=K(this,e);return this.localeData().postformat(n)}function dn(t,e){return this.isValid()&&(x(t)&&t.isValid()||xe(t).isValid())?He({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function cn(t){return this.from(xe(),t)}function hn(t,e){return this.isValid()&&(x(t)&&t.isValid()||xe(t).isValid())?He({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function fn(t){return this.to(xe(),t)}function gn(t){var e;return void 0===t?this._locale._abbr:(e=ie(t),null!=e&&(this._locale=e),this)}function mn(){return this._locale}function pn(t){switch(t=Y(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function vn(t){return t=Y(t),void 0===t||"millisecond"===t?this:("date"===t&&(t="day"),this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms"))}function bn(){return this._d.valueOf()-6e4*(this._offset||0)}function yn(){return Math.floor(this.valueOf()/1e3)}function xn(){return new Date(this.valueOf())}function kn(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function _n(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function wn(){return this.isValid()?this.toISOString():null}function Sn(){return m(this)}function Mn(){return c({},g(this))}function Dn(){return g(this).overflow}function Cn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Tn(t,e){Z(0,[t,t.length],0,e)}function Pn(t){return On.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function In(t){return On.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function An(){return Mt(this.year(),1,4)}function Fn(){var t=this.localeData()._week;return Mt(this.year(),t.dow,t.doy)}function On(t,e,n,i,a){var r;return null==t?St(this,i,a).year:(r=Mt(t,i,a),e>r&&(e=r),Rn.call(this,t,e,n,i,a))}function Rn(t,e,n,i,a){var r=wt(t,e,n,i,a),o=kt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Ln(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Vn(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function Wn(t,e){e[ua]=_(1e3*("0."+t))}function Yn(){return this._isUTC?"UTC":""}function Bn(){return this._isUTC?"Coordinated Universal Time":""}function zn(t){return xe(1e3*t)}function Nn(){return xe.apply(null,arguments).parseZone()}function Hn(t){return t}function En(t,e,n,i){var a=ie(),r=h().set(i,e);return a[n](r,t)}function Un(t,e,n){if(s(t)&&(e=t,t=void 0),t=t||"",null!=e)return En(t,e,n,"month");var i,a=[];for(i=0;i<12;i++)a[i]=En(t,i,n,"month");return a}function jn(t,e,n,i){"boolean"==typeof t?(s(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,s(e)&&(n=e,e=void 0),e=e||"");var a=ie(),r=t?a._week.dow:0;if(null!=n)return En(e,(n+r)%7,i,"day");var o,l=[];for(o=0;o<7;o++)l[o]=En(e,(o+r)%7,i,"day");return l}function Gn(t,e){return Un(t,e,"months")}function qn(t,e){return Un(t,e,"monthsShort")}function Zn(t,e,n){return jn(t,e,n,"weekdays")}function Xn(t,e,n){return jn(t,e,n,"weekdaysShort")}function Jn(t,e,n){return jn(t,e,n,"weekdaysMin")}function Kn(){var t=this._data;return this._milliseconds=tr(this._milliseconds),this._days=tr(this._days),this._months=tr(this._months),t.milliseconds=tr(t.milliseconds),t.seconds=tr(t.seconds),t.minutes=tr(t.minutes),t.hours=tr(t.hours),t.months=tr(t.months),t.years=tr(t.years),this}function Qn(t,e,n,i){var a=He(e,n);return t._milliseconds+=i*a._milliseconds,t._days+=i*a._days,t._months+=i*a._months,t._bubble()}function $n(t,e){return Qn(this,t,e,1)}function ti(t,e){return Qn(this,t,e,-1)}function ei(t){return t<0?Math.floor(t):Math.ceil(t)}function ni(){var t,e,n,i,a,r=this._milliseconds,o=this._days,s=this._months,l=this._data;return r>=0&&o>=0&&s>=0||r<=0&&o<=0&&s<=0||(r+=864e5*ei(ai(s)+o),o=0,s=0),l.milliseconds=r%1e3,t=k(r/1e3),l.seconds=t%60,e=k(t/60),l.minutes=e%60,n=k(e/60),l.hours=n%24,o+=k(n/24),a=k(ii(o)),s+=a,o-=ei(ai(a)),i=k(s/12),s%=12,l.days=o,l.months=s,l.years=i,this}function ii(t){return 4800*t/146097}function ai(t){return 146097*t/4800}function ri(t){var e,n,i=this._milliseconds;if(t=Y(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+ii(e),"month"===t?n:n/12;switch(e=this._days+Math.round(ai(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function oi(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*_(this._months/12)}function si(t){return function(){return this.as(t)}}function li(t){return t=Y(t),this[t+"s"]()}function ui(t){return function(){return this._data[t]}}function di(){return k(this.days()/7)}function ci(t,e,n,i,a){return a.relativeTime(e||1,!!n,t,i)}function hi(t,e,n){var i=He(t).abs(),a=pr(i.as("s")),r=pr(i.as("m")),o=pr(i.as("h")),s=pr(i.as("d")),l=pr(i.as("M")),u=pr(i.as("y")),d=a<vr.s&&["s",a]||r<=1&&["m"]||r<vr.m&&["mm",r]||o<=1&&["h"]||o<vr.h&&["hh",o]||s<=1&&["d"]||s<vr.d&&["dd",s]||l<=1&&["M"]||l<vr.M&&["MM",l]||u<=1&&["y"]||["yy",u];return d[2]=e,d[3]=+t>0,d[4]=n,ci.apply(null,d)}function fi(t){return void 0===t?pr:"function"==typeof t&&(pr=t,!0)}function gi(t,e){return void 0!==vr[t]&&(void 0===e?vr[t]:(vr[t]=e,!0))}function mi(t){var e=this.localeData(),n=hi(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function pi(){var t,e,n,i=br(this._milliseconds)/1e3,a=br(this._days),r=br(this._months);t=k(i/60),e=k(t/60),i%=60,t%=60,n=k(r/12),r%=12;var o=n,s=r,l=a,u=e,d=t,c=i,h=this.asSeconds();return h?(h<0?"-":"")+"P"+(o?o+"Y":"")+(s?s+"M":"")+(l?l+"D":"")+(u||d||c?"T":"")+(u?u+"H":"")+(d?d+"M":"")+(c?c+"S":""):"P0D"}var vi,bi;bi=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var yi=bi,xi=t.momentProperties=[],ki=!1,_i={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var wi;wi=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)d(t,e)&&n.push(e);return n};var Si,Mi=wi,Di={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ci={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ti="Invalid date",Pi="%d",Ii=/\d{1,2}/,Ai={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Fi={},Oi={},Ri=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Li=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Vi={},Wi={},Yi=/\d/,Bi=/\d\d/,zi=/\d{3}/,Ni=/\d{4}/,Hi=/[+-]?\d{6}/,Ei=/\d\d?/,Ui=/\d\d\d\d?/,ji=/\d\d\d\d\d\d?/,Gi=/\d{1,3}/,qi=/\d{1,4}/,Zi=/[+-]?\d{1,6}/,Xi=/\d+/,Ji=/[+-]?\d+/,Ki=/Z|[+-]\d\d:?\d\d/gi,Qi=/Z|[+-]\d\d(?::?\d\d)?/gi,$i=/[+-]?\d+(\.\d{1,3})?/,ta=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ea={},na={},ia=0,aa=1,ra=2,oa=3,sa=4,la=5,ua=6,da=7,ca=8;Si=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};var ha=Si;Z("M",["MM",2],"Mo",function(){return this.month()+1}),Z("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),Z("MMMM",0,0,function(t){return this.localeData().months(this,t)}),W("month","M"),z("month",8),$("M",Ei),$("MM",Ei,Bi),$("MMM",function(t,e){return e.monthsShortRegex(t)}),$("MMMM",function(t,e){return e.monthsRegex(t)}),it(["M","MM"],function(t,e){e[aa]=_(t)-1}),it(["MMM","MMMM"],function(t,e,n,i){var a=n._locale.monthsParse(t,i,n._strict);null!=a?e[aa]=a:g(n).invalidMonth=t});var fa=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ga="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ma="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),pa=ta,va=ta;Z("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),Z(0,["YY",2],0,function(){return this.year()%100}),Z(0,["YYYY",4],0,"year"),Z(0,["YYYYY",5],0,"year"),Z(0,["YYYYYY",6,!0],0,"year"),W("year","y"),z("year",1),$("Y",Ji),$("YY",Ei,Bi),$("YYYY",qi,Ni),$("YYYYY",Zi,Hi),$("YYYYYY",Zi,Hi),it(["YYYYY","YYYYYY"],ia),it("YYYY",function(e,n){n[ia]=2===e.length?t.parseTwoDigitYear(e):_(e)}),it("YY",function(e,n){n[ia]=t.parseTwoDigitYear(e)}),it("Y",function(t,e){e[ia]=parseInt(t,10)}),t.parseTwoDigitYear=function(t){return _(t)+(_(t)>68?1900:2e3)};var ba=H("FullYear",!0);Z("w",["ww",2],"wo","week"),Z("W",["WW",2],"Wo","isoWeek"),W("week","w"),W("isoWeek","W"),z("week",5),z("isoWeek",5),$("w",Ei),$("ww",Ei,Bi),$("W",Ei),$("WW",Ei,Bi),at(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=_(t)});var ya={dow:0,doy:6};Z("d",0,"do","day"),Z("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),Z("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),Z("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),Z("e",0,0,"weekday"),Z("E",0,0,"isoWeekday"),W("day","d"),W("weekday","e"),W("isoWeekday","E"),z("day",11),z("weekday",11),z("isoWeekday",11),$("d",Ei),$("e",Ei),$("E",Ei),$("dd",function(t,e){return e.weekdaysMinRegex(t)}),$("ddd",function(t,e){return e.weekdaysShortRegex(t)}),$("dddd",function(t,e){return e.weekdaysRegex(t)}),at(["dd","ddd","dddd"],function(t,e,n,i){var a=n._locale.weekdaysParse(t,i,n._strict);null!=a?e.d=a:g(n).invalidWeekday=t}),at(["d","e","E"],function(t,e,n,i){e[i]=_(t)});var xa="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ka="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),_a="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),wa=ta,Sa=ta,Ma=ta;Z("H",["HH",2],0,"hour"),Z("h",["hh",2],0,jt),Z("k",["kk",2],0,Gt),Z("hmm",0,0,function(){return""+jt.apply(this)+q(this.minutes(),2)}),Z("hmmss",0,0,function(){return""+jt.apply(this)+q(this.minutes(),2)+q(this.seconds(),2)}),Z("Hmm",0,0,function(){return""+this.hours()+q(this.minutes(),2)}),Z("Hmmss",0,0,function(){return""+this.hours()+q(this.minutes(),2)+q(this.seconds(),2)}),qt("a",!0),qt("A",!1),W("hour","h"),z("hour",13),$("a",Zt),$("A",Zt),$("H",Ei),$("h",Ei),$("HH",Ei,Bi),$("hh",Ei,Bi),$("hmm",Ui),$("hmmss",ji),$("Hmm",Ui),$("Hmmss",ji),it(["H","HH"],oa),it(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),it(["h","hh"],function(t,e,n){e[oa]=_(t),g(n).bigHour=!0}),it("hmm",function(t,e,n){var i=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i)),g(n).bigHour=!0}),it("hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i,2)),e[la]=_(t.substr(a)),g(n).bigHour=!0}),it("Hmm",function(t,e,n){var i=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i))}),it("Hmmss",function(t,e,n){var i=t.length-4,a=t.length-2;e[oa]=_(t.substr(0,i)),e[sa]=_(t.substr(i,2)),e[la]=_(t.substr(a))});var Da,Ca=/[ap]\.?m?\.?/i,Ta=H("Hours",!0),Pa={calendar:Di,longDateFormat:Ci,invalidDate:Ti,ordinal:Pi,ordinalParse:Ii,relativeTime:Ai,months:ga,monthsShort:ma,week:ya,weekdays:xa,weekdaysMin:_a,weekdaysShort:ka,meridiemParse:Ca},Ia={},Aa={},Fa=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Oa=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ra=/Z|[+-]\d\d(?::?\d\d)?/,La=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Va=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Wa=/^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback=M("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),t.ISO_8601=function(){};var Ya=M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:p()}),Ba=M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=xe.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:p()}),za=function(){return Date.now?Date.now():+new Date};Ce("Z",":"),Ce("ZZ",""),$("Z",Qi),$("ZZ",Qi),it(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Te(Qi,t)});var Na=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Ha=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ea=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;He.fn=Se.prototype;var Ua=Ge(1,"add"),ja=Ge(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Ga=M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});Z(0,["gg",2],0,function(){return this.weekYear()%100}),Z(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Tn("gggg","weekYear"),Tn("ggggg","weekYear"),Tn("GGGG","isoWeekYear"),Tn("GGGGG","isoWeekYear"),W("weekYear","gg"),W("isoWeekYear","GG"),z("weekYear",1),z("isoWeekYear",1),$("G",Ji),$("g",Ji),$("GG",Ei,Bi),$("gg",Ei,Bi),$("GGGG",qi,Ni),$("gggg",qi,Ni),$("GGGGG",Zi,Hi),$("ggggg",Zi,Hi),at(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=_(t)}),at(["gg","GG"],function(e,n,i,a){n[a]=t.parseTwoDigitYear(e)}),Z("Q",0,"Qo","quarter"),W("quarter","Q"),z("quarter",7),$("Q",Yi),it("Q",function(t,e){e[aa]=3*(_(t)-1)}),Z("D",["DD",2],"Do","date"),W("date","D"),z("date",9),$("D",Ei),$("DD",Ei,Bi),$("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),it(["D","DD"],ra),it("Do",function(t,e){e[ra]=_(t.match(Ei)[0],10)});var qa=H("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear"),W("dayOfYear","DDD"),z("dayOfYear",4),$("DDD",Gi),$("DDDD",zi),it(["DDD","DDDD"],function(t,e,n){n._dayOfYear=_(t)}),Z("m",["mm",2],0,"minute"),W("minute","m"),z("minute",14),$("m",Ei),$("mm",Ei,Bi),it(["m","mm"],sa);var Za=H("Minutes",!1);Z("s",["ss",2],0,"second"),W("second","s"),z("second",15),$("s",Ei),$("ss",Ei,Bi),it(["s","ss"],la);var Xa=H("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)}),Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Z(0,["SSS",3],0,"millisecond"),Z(0,["SSSS",4],0,function(){return 10*this.millisecond()}),Z(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),Z(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),Z(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),Z(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),Z(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),W("millisecond","ms"),z("millisecond",16),$("S",Gi,Yi),$("SS",Gi,Bi),$("SSS",Gi,zi);var Ja;for(Ja="SSSS";Ja.length<=9;Ja+="S")$(Ja,Xi);for(Ja="S";Ja.length<=9;Ja+="S")it(Ja,Wn);var Ka=H("Milliseconds",!1);Z("z",0,0,"zoneAbbr"),Z("zz",0,0,"zoneName");var Qa=y.prototype;Qa.add=Ua,Qa.calendar=Xe,Qa.clone=Je,Qa.diff=an,Qa.endOf=vn,Qa.format=un,Qa.from=dn,Qa.fromNow=cn,Qa.to=hn,Qa.toNow=fn,Qa.get=j,Qa.invalidAt=Dn,Qa.isAfter=Ke,Qa.isBefore=Qe,Qa.isBetween=$e,Qa.isSame=tn,Qa.isSameOrAfter=en,Qa.isSameOrBefore=nn,Qa.isValid=Sn,Qa.lang=Ga,Qa.locale=gn,Qa.localeData=mn,Qa.max=Ba,Qa.min=Ya,Qa.parsingFlags=Mn,Qa.set=G,Qa.startOf=pn,Qa.subtract=ja,Qa.toArray=kn,Qa.toObject=_n,Qa.toDate=xn,Qa.toISOString=sn,Qa.inspect=ln,Qa.toJSON=wn,Qa.toString=on,Qa.unix=yn,Qa.valueOf=bn,Qa.creationData=Cn,Qa.year=ba,Qa.isLeapYear=yt,Qa.weekYear=Pn,Qa.isoWeekYear=In,Qa.quarter=Qa.quarters=Ln,Qa.month=ht,Qa.daysInMonth=ft,Qa.week=Qa.weeks=Pt,Qa.isoWeek=Qa.isoWeeks=It,Qa.weeksInYear=Fn,Qa.isoWeeksInYear=An,Qa.date=qa,Qa.day=Qa.days=Yt,Qa.weekday=Bt,Qa.isoWeekday=zt,Qa.dayOfYear=Vn,Qa.hour=Qa.hours=Ta,Qa.minute=Qa.minutes=Za,Qa.second=Qa.seconds=Xa,Qa.millisecond=Qa.milliseconds=Ka,Qa.utcOffset=Ae,Qa.utc=Oe,Qa.local=Re,Qa.parseZone=Le,Qa.hasAlignedHourOffset=Ve,Qa.isDST=We,Qa.isLocal=Be,Qa.isUtcOffset=ze,Qa.isUtc=Ne,Qa.isUTC=Ne,Qa.zoneAbbr=Yn,Qa.zoneName=Bn,Qa.dates=M("dates accessor is deprecated. Use date instead.",qa),Qa.months=M("months accessor is deprecated. Use month instead",ht),Qa.years=M("years accessor is deprecated. Use year instead",ba),Qa.zone=M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Fe),Qa.isDSTShifted=M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ye);var $a=I.prototype;$a.calendar=A,$a.longDateFormat=F,$a.invalidDate=O,$a.ordinal=R,$a.preparse=Hn,$a.postformat=Hn,$a.relativeTime=L,$a.pastFuture=V,$a.set=T,$a.months=st,$a.monthsShort=lt,$a.monthsParse=dt,$a.monthsRegex=mt,$a.monthsShortRegex=gt,$a.week=Dt,$a.firstDayOfYear=Tt,$a.firstDayOfWeek=Ct,$a.weekdays=Ot,$a.weekdaysMin=Lt,$a.weekdaysShort=Rt,$a.weekdaysParse=Wt,$a.weekdaysRegex=Nt,$a.weekdaysShortRegex=Ht,$a.weekdaysMinRegex=Et,$a.isPM=Xt,$a.meridiem=Jt,te("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===_(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),t.lang=M("moment.lang is deprecated. Use moment.locale instead.",te),t.langData=M("moment.langData is deprecated. Use moment.localeData instead.",ie);var tr=Math.abs,er=si("ms"),nr=si("s"),ir=si("m"),ar=si("h"),rr=si("d"),or=si("w"),sr=si("M"),lr=si("y"),ur=ui("milliseconds"),dr=ui("seconds"),cr=ui("minutes"),hr=ui("hours"),fr=ui("days"),gr=ui("months"),mr=ui("years"),pr=Math.round,vr={s:45,m:45,h:22,d:26,M:11},br=Math.abs,yr=Se.prototype;return yr.abs=Kn,yr.add=$n,yr.subtract=ti,yr.as=ri,yr.asMilliseconds=er,yr.asSeconds=nr,yr.asMinutes=ir,yr.asHours=ar,yr.asDays=rr,yr.asWeeks=or,yr.asMonths=sr,yr.asYears=lr,yr.valueOf=oi,yr._bubble=ni,yr.get=li,yr.milliseconds=ur,yr.seconds=dr,yr.minutes=cr,yr.hours=hr,yr.days=fr,yr.weeks=di,yr.months=gr,yr.years=mr,yr.humanize=mi,yr.toISOString=pi,yr.toString=pi,yr.toJSON=pi,yr.locale=gn,yr.localeData=mn,yr.toIsoString=M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",pi),yr.lang=Ga,Z("X",0,0,"unix"),Z("x",0,0,"valueOf"),$("x",Ji),$("X",$i),it("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),it("x",function(t,e,n){n._d=new Date(_(t))}),t.version="2.17.1",i(xe),t.fn=Qa,t.min=_e,t.max=we,t.now=za,t.utc=h,t.unix=zn,t.months=Gn,t.isDate=l,t.locale=te,t.invalid=p,t.duration=He,t.isMoment=x,t.weekdays=Zn,t.parseZone=Nn,t.localeData=ie,t.isDuration=Me,t.monthsShort=qn,t.weekdaysMin=Jn,t.defineLocale=ee,t.updateLocale=ne,t.locales=ae,t.weekdaysShort=Xn,t.normalizeUnits=Y,t.relativeTimeRounding=fi,t.relativeTimeThreshold=gi,t.calendarFormat=Ze,t.prototype=Qa,t})},{}],7:[function(t,e,n){var i=t(28)();t(26)(i),t(42)(i),t(22)(i),t(31)(i),t(25)(i),t(21)(i),t(23)(i),t(24)(i),t(29)(i),t(33)(i),t(34)(i),t(32)(i),t(35)(i),t(30)(i),t(27)(i),t(36)(i),t(37)(i),t(38)(i),t(39)(i),t(40)(i),t(45)(i),t(43)(i),t(44)(i),t(46)(i),t(47)(i),t(48)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,42:42,43:43,44:44,45:45,46:46,47:47,48:48,8:8,9:9}],8:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,n){t.DatasetController.prototype.initialize.call(this,e,n);var i=this,a=i.getMeta(),r=i.getDataset();a.stack=r.stack,a.bar=!0},getStackCount:function(){var t=this,n=t.getMeta(),i=t.getScaleForId(n.yAxisID),a=[];return e.each(t.chart.data.datasets,function(e,n){var r=t.chart.getDatasetMeta(n);r.bar&&t.chart.isDatasetVisible(n)&&(i.options.stacked===!1||i.options.stacked===!0&&a.indexOf(r.stack)===-1||void 0===i.options.stacked&&(void 0===r.stack||a.indexOf(r.stack)===-1))&&a.push(r.stack)},t),a.length},update:function(t){var n=this;e.each(n.getMeta().data,function(e,i){n.updateElement(e,i,t)},n)},updateElement:function(t,n,i){var a=this,r=a.getMeta(),o=a.getScaleForId(r.xAxisID),s=a.getScaleForId(r.yAxisID),l=s.getBasePixel(),u=a.chart.options.elements.rectangle,d=t.custom||{},c=a.getDataset();t._xScale=o,t._yScale=s,t._datasetIndex=a.index,t._index=n;var h=a.getRuler(n);t._model={x:a.calculateBarX(n,a.index,h),y:i?l:a.calculateBarY(n,a.index),label:a.chart.data.labels[n],datasetLabel:c.label,horizontal:!1,base:i?l:a.calculateBarBase(a.index,n),width:a.calculateBarWidth(h),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,n,u.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:u.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(c.borderColor,n,u.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,n,u.borderWidth)},t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=a.getBaseValue(),o=r;if(a.options.stacked===!0||void 0===a.options.stacked&&void 0!==i.stack){for(var s=n.chart,l=s.data.datasets,u=Number(l[t].data[e]),d=0;d<t;d++){var c=l[d],h=s.getDatasetMeta(d);if(h.bar&&h.yAxisID===a.id&&s.isDatasetVisible(d)&&i.stack===h.stack){var f=Number(c.data[e]);r+=u<0?Math.min(f,o):Math.max(f,o)}}return a.getPixelForValue(r)}return a.getBasePixel()},getRuler:function(){var t=this,e=t.getMeta(),n=t.getScaleForId(e.xAxisID),i=t.getStackCount(),a=n.width/n.ticks.length,r=a*n.options.categoryPercentage,o=(a-a*n.options.categoryPercentage)/2,s=r/i,l=s*n.options.barPercentage,u=s-s*n.options.barPercentage;return{stackCount:i,tickWidth:a,categoryWidth:r,categorySpacing:o,fullBarWidth:s,barWidth:l,barSpacing:u}},calculateBarWidth:function(t){var e=this,n=e.getMeta(),i=e.getScaleForId(n.xAxisID);return i.options.barThickness?i.options.barThickness:t.barWidth},getStackIndex:function(t){var e,n,i=this,a=i.chart.getDatasetMeta(t),r=i.getScaleForId(a.yAxisID),o=[a.stack];for(n=0;n<t;++n)e=this.chart.getDatasetMeta(n),e.bar&&this.chart.isDatasetVisible(n)&&(r.options.stacked===!1||r.options.stacked===!0&&o.indexOf(e.stack)===-1||void 0===r.options.stacked&&(void 0===e.stack||o.indexOf(e.stack)===-1))&&o.push(e.stack);return o.length-1},calculateBarX:function(t,e,n){var i=this,a=i.getMeta(),r=i.getScaleForId(a.xAxisID),o=i.getStackIndex(e),s=r.getPixelForValue(null,t,e,i.chart.isCombo);return s-=i.chart.isCombo?n.tickWidth/2:0,s+n.barWidth/2+n.categorySpacing+n.barWidth*o+n.barSpacing/2+n.barSpacing*o},calculateBarY:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.yAxisID),r=Number(n.getDataset().data[t]);if(a.options.stacked||void 0===a.options.stacked&&void 0!==i.stack){for(var o=a.getBaseValue(),s=o,l=o,u=0;u<e;u++){var d=n.chart.data.datasets[u],c=n.chart.getDatasetMeta(u);if(c.bar&&c.yAxisID===a.id&&n.chart.isDatasetVisible(u)&&i.stack===c.stack){var h=Number(d.data[t]);h<0?l+=h||0:s+=h||0}}return r<0?a.getPixelForValue(l+r):a.getPixelForValue(s+r)}return a.getPixelForValue(r)},draw:function(e){var n,i,a=this,r=e||1,o=a.getMeta().data,s=a.getDataset();for(t.canvasHelpers.clipArea(a.chart.chart.ctx,a.chart.chartArea),n=0,i=o.length;n<i;++n){var l=s.data[n];null===l||void 0===l||isNaN(l)||o[n].transition(r).draw()}t.canvasHelpers.unclipArea(a.chart.chart.ctx)},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.hoverBackgroundColor,i,e.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor?a.hoverBorderColor:e.getValueAtIndexOrDefault(n.hoverBorderColor,i,e.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:e.getValueAtIndexOrDefault(n.hoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model,o=this.chart.options.elements.rectangle;r.backgroundColor=a.backgroundColor?a.backgroundColor:e.getValueAtIndexOrDefault(n.backgroundColor,i,o.backgroundColor),r.borderColor=a.borderColor?a.borderColor:e.getValueAtIndexOrDefault(n.borderColor,i,o.borderColor),r.borderWidth=a.borderWidth?a.borderWidth:e.getValueAtIndexOrDefault(n.borderWidth,i,o.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({getStackCount:function(){var t=this,n=t.getMeta(),i=t.getScaleForId(n.xAxisID),a=[];return e.each(t.chart.data.datasets,function(e,n){var r=t.chart.getDatasetMeta(n);r.bar&&t.chart.isDatasetVisible(n)&&(i.options.stacked===!1||i.options.stacked===!0&&a.indexOf(r.stack)===-1||void 0===i.options.stacked&&(void 0===r.stack||a.indexOf(r.stack)===-1))&&a.push(r.stack)},t),a.length},updateElement:function(t,n,i){var a=this,r=a.getMeta(),o=a.getScaleForId(r.xAxisID),s=a.getScaleForId(r.yAxisID),l=o.getBasePixel(),u=t.custom||{},d=a.getDataset(),c=a.chart.options.elements.rectangle;t._xScale=o,t._yScale=s,t._datasetIndex=a.index,t._index=n;var h=a.getRuler(n);t._model={x:i?l:a.calculateBarX(n,a.index),y:a.calculateBarY(n,a.index,h),label:a.chart.data.labels[n],datasetLabel:d.label,horizontal:!0,base:i?l:a.calculateBarBase(a.index,n),height:a.calculateBarHeight(h),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(d.backgroundColor,n,c.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:c.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(d.borderColor,n,c.borderColor),borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(d.borderWidth,n,c.borderWidth)},t.pivot()},calculateBarBase:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=a.getBaseValue(),o=r;if(a.options.stacked||void 0===a.options.stacked&&void 0!==i.stack){for(var s=n.chart,l=s.data.datasets,u=Number(l[t].data[e]),d=0;d<t;d++){var c=l[d],h=s.getDatasetMeta(d);if(h.bar&&h.xAxisID===a.id&&s.isDatasetVisible(d)&&i.stack===h.stack){var f=Number(c.data[e]);r+=u<0?Math.min(f,o):Math.max(f,o)}}return a.getPixelForValue(r)}return a.getBasePixel()},getRuler:function(){var t=this,e=t.getMeta(),n=t.getScaleForId(e.yAxisID),i=t.getStackCount(),a=n.height/n.ticks.length,r=a*n.options.categoryPercentage,o=(a-a*n.options.categoryPercentage)/2,s=r/i,l=s*n.options.barPercentage,u=s-s*n.options.barPercentage;return{stackCount:i,tickHeight:a,categoryHeight:r,categorySpacing:o,fullBarHeight:s,barHeight:l,barSpacing:u}},calculateBarHeight:function(t){var e=this,n=e.getMeta(),i=e.getScaleForId(n.yAxisID);return i.options.barThickness?i.options.barThickness:t.barHeight},getStackIndex:function(t){var e,n,i=this,a=i.chart.getDatasetMeta(t),r=i.getScaleForId(a.xAxisID),o=[a.stack];for(n=0;n<t;++n)e=this.chart.getDatasetMeta(n),e.bar&&this.chart.isDatasetVisible(n)&&(r.options.stacked===!1||r.options.stacked===!0&&o.indexOf(e.stack)===-1||void 0===r.options.stacked&&(void 0===e.stack||o.indexOf(e.stack)===-1))&&o.push(e.stack);return o.length-1},calculateBarX:function(t,e){var n=this,i=n.getMeta(),a=n.getScaleForId(i.xAxisID),r=Number(n.getDataset().data[t]);if(a.options.stacked||void 0===a.options.stacked&&void 0!==i.stack){for(var o=a.getBaseValue(),s=o,l=o,u=0;u<e;u++){var d=n.chart.data.datasets[u],c=n.chart.getDatasetMeta(u);if(c.bar&&c.xAxisID===a.id&&n.chart.isDatasetVisible(u)&&i.stack===c.stack){var h=Number(d.data[t]);h<0?l+=h||0:s+=h||0}}return r<0?a.getPixelForValue(l+r):a.getPixelForValue(s+r)}return a.getPixelForValue(r)},calculateBarY:function(t,e,n){var i=this,a=i.getMeta(),r=i.getScaleForId(a.yAxisID),o=i.getStackIndex(e),s=r.getPixelForValue(null,t,e,i.chart.isCombo);return s-=i.chart.isCombo?n.tickHeight/2:0,s+n.barHeight/2+n.categorySpacing+n.barHeight*o+n.barSpacing/2+n.barSpacing*o}})}},{}],16:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var n=this,i=n.getMeta(),a=i.data;e.each(a,function(e,i){n.updateElement(e,i,t)})},updateElement:function(n,i,a){var r=this,o=r.getMeta(),s=r.getScaleForId(o.xAxisID),l=r.getScaleForId(o.yAxisID),u=n.custom||{},d=r.getDataset(),c=d.data[i],h=r.chart.options.elements.point,f=r.index;e.extend(n,{_xScale:s,_yScale:l,_datasetIndex:f,_index:i,_model:{x:a?s.getPixelForDecimal(.5):s.getPixelForValue("object"==typeof c?c:NaN,i,f,r.chart.isCombo),y:a?l.getBasePixel():l.getPixelForValue(c,i,f),radius:a?0:u.radius?u.radius:r.getRadius(c),hitRadius:u.hitRadius?u.hitRadius:e.getValueAtIndexOrDefault(d.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(r,n,h);var g=n._model;g.skip=u.skip?u.skip:isNaN(g.x)||isNaN(g.y),n.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(n){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,n);var a=i.chart.data.datasets[n._datasetIndex],r=n._index,o=n.custom||{},s=n._model;s.radius=o.hoverRadius?o.hoverRadius:e.getValueAtIndexOrDefault(a.hoverRadius,r,i.chart.options.elements.point.hoverRadius)+i.getRadius(a.data[r])},removeHoverStyle:function(e){var n=this;t.DatasetController.prototype.removeHoverStyle.call(n,e,n.chart.options.elements.point);var i=n.chart.data.datasets[e._datasetIndex].data[e._index],a=e.custom||{},r=e._model;r.radius=a.radius?a.radius:n.getRadius(i)}})}},{}],17:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults;n.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s&&s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)a=o.getDatasetMeta(n),a.data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,n){var i=n.labels[t.index],a=": "+n.datasets[t.datasetIndex].data[t.index];return e.isArray(i)?(i=i.slice(),i[0]+=a):i+=a,i}}}},n.pie=e.clone(n.doughnut),e.extend(n.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var n=this,i=n.chart,a=i.chartArea,r=i.options,o=r.elements.arc,s=a.right-a.left-o.borderWidth,l=a.bottom-a.top-o.borderWidth,u=Math.min(s,l),d={x:0,y:0},c=n.getMeta(),h=r.cutoutPercentage,f=r.circumference;if(f<2*Math.PI){var g=r.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var m=g+f,p={x:Math.cos(g),y:Math.sin(g)},v={x:Math.cos(m),y:Math.sin(m)},b=g<=0&&0<=m||g<=2*Math.PI&&2*Math.PI<=m,y=g<=.5*Math.PI&&.5*Math.PI<=m||g<=2.5*Math.PI&&2.5*Math.PI<=m,x=g<=-Math.PI&&-Math.PI<=m||g<=Math.PI&&Math.PI<=m,k=g<=.5*-Math.PI&&.5*-Math.PI<=m||g<=1.5*Math.PI&&1.5*Math.PI<=m,_=h/100,w={x:x?-1:Math.min(p.x*(p.x<0?1:_),v.x*(v.x<0?1:_)),y:k?-1:Math.min(p.y*(p.y<0?1:_),v.y*(v.y<0?1:_))},S={x:b?1:Math.max(p.x*(p.x>0?1:_),v.x*(v.x>0?1:_)),y:y?1:Math.max(p.y*(p.y>0?1:_),v.y*(v.y>0?1:_))},M={width:.5*(S.x-w.x),height:.5*(S.y-w.y)};u=Math.min(s/M.width,l/M.height),d={x:(S.x+w.x)*-.5,y:(S.y+w.y)*-.5}}i.borderWidth=n.getMaxBorderWidth(c.data),i.outerRadius=Math.max((u-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:0,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=d.x*i.outerRadius,i.offsetY=d.y*i.outerRadius,c.total=n.calculateTotal(),n.outerRadius=i.outerRadius-i.radiusLength*n.getRingIndex(n.index),n.innerRadius=Math.max(n.outerRadius-i.radiusLength,0),e.each(c.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){var a=this,r=a.chart,o=r.chartArea,s=r.options,l=s.animation,u=(o.left+o.right)/2,d=(o.top+o.bottom)/2,c=s.rotation,h=s.rotation,f=a.getDataset(),g=i&&l.animateRotate?0:t.hidden?0:a.calculateCircumference(f.data[n])*(s.circumference/(2*Math.PI)),m=i&&l.animateScale?0:a.innerRadius,p=i&&l.animateScale?0:a.outerRadius,v=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:a.index,_index:n,_model:{x:u+r.offsetX,y:d+r.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:p,innerRadius:m,label:v(f.label,n,r.data.labels[n])}});var b=t._model;this.removeHoverStyle(t),i&&l.animateRotate||(0===n?b.startAngle=s.rotation:b.startAngle=a.getMeta().data[n-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,n=this.getDataset(),i=this.getMeta(),a=0;return e.each(i.data,function(e,i){t=n.data[i],isNaN(t)||e.hidden||(a+=Math.abs(t))}),a},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,n,i=0,a=this.index,r=t.length,o=0;o<r;o++)e=t[o]._model?t[o]._model.borderWidth:0,n=t[o]._chart?t[o]._chart.config.data.datasets[a].hoverBorderWidth:0,i=e>i?e:i,i=n>i?n:i;return i}})}},{}],18:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return n.getValueOrDefault(t.showLine,e.showLines)}var n=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var i,a,r,o=this,s=o.getMeta(),l=s.dataset,u=s.data||[],d=o.chart.options,c=d.elements.line,h=o.getScaleForId(s.yAxisID),f=o.getDataset(),g=e(f,d);for(g&&(r=l.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),l._scale=h,l._datasetIndex=o.index,l._children=u,l._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:r.tension?r.tension:n.getValueOrDefault(f.lineTension,c.tension),backgroundColor:r.backgroundColor?r.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:f.borderWidth||c.borderWidth,borderColor:r.borderColor?r.borderColor:f.borderColor||c.borderColor,borderCapStyle:r.borderCapStyle?r.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:r.borderDash?r.borderDash:f.borderDash||c.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:r.fill?r.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:r.steppedLine?r.steppedLine:n.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:r.cubicInterpolationMode?r.cubicInterpolationMode:n.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode),scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},l.pivot()),i=0,a=u.length;i<a;++i)o.updateElement(u[i],i,t);for(g&&0!==l._model.tension&&o.updateBezierControlPoints(),i=0,a=u.length;i<a;++i)u[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,a=this.getDataset(),r=t.custom||{};return r.backgroundColor?i=r.backgroundColor:a.pointBackgroundColor?i=n.getValueAtIndexOrDefault(a.pointBackgroundColor,e,i):a.backgroundColor&&(i=a.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,a=this.getDataset(),r=t.custom||{};return r.borderColor?i=r.borderColor:a.pointBorderColor?i=n.getValueAtIndexOrDefault(a.pointBorderColor,e,i):a.borderColor&&(i=a.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,a=this.getDataset(),r=t.custom||{};return isNaN(r.borderWidth)?isNaN(a.pointBorderWidth)?isNaN(a.borderWidth)||(i=a.borderWidth):i=n.getValueAtIndexOrDefault(a.pointBorderWidth,e,i):i=r.borderWidth,i},updateElement:function(t,e,i){var a,r,o=this,s=o.getMeta(),l=t.custom||{},u=o.getDataset(),d=o.index,c=u.data[e],h=o.getScaleForId(s.yAxisID),f=o.getScaleForId(s.xAxisID),g=o.chart.options.elements.point,m=o.chart.data.labels||[],p=1===m.length||1===u.data.length||o.chart.isCombo;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),a=f.getPixelForValue("object"==typeof c?c:NaN,e,d,p),r=i?h.getBasePixel():o.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:a,y:r,skip:l.skip||isNaN(a)||isNaN(r),radius:l.radius||n.getValueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:l.pointStyle||n.getValueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:o.getPointBackgroundColor(t,e),borderColor:o.getPointBorderColor(t,e),borderWidth:o.getPointBorderWidth(t,e),tension:s.dataset._model?s.dataset._model.tension:0,steppedLine:!!s.dataset._model&&s.dataset._model.steppedLine,hitRadius:l.hitRadius||n.getValueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var i,a,r,o=this,s=o.chart,l=o.getMeta(),u=o.getScaleForId(l.yAxisID),d=0,c=0;if(u.options.stacked){for(i=0;i<n;i++)if(a=s.data.datasets[i],r=s.getDatasetMeta(i),"line"===r.type&&r.yAxisID===u.id&&s.isDatasetVisible(i)){var h=Number(u.getRightValue(a.data[e]));h<0?c+=h||0:d+=h||0}var f=Number(u.getRightValue(t));return f<0?u.getPixelForValue(c+f):u.getPixelForValue(d+f)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,i,a,r,o,s=this,l=s.getMeta(),u=s.chart.chartArea,d=l.data||[];if(l.dataset._model.spanGaps&&(d=d.filter(function(t){return!t._model.skip})),"monotone"===l.dataset._model.cubicInterpolationMode)n.splineCurveMonotone(d);else for(e=0,i=d.length;e<i;++e)a=d[e],r=a._model,o=n.splineCurve(n.previousItem(d,e)._model,r,n.nextItem(d,e)._model,l.dataset._model.tension),r.controlPointPreviousX=o.previous.x,r.controlPointPreviousY=o.previous.y,r.controlPointNextX=o.next.x,r.controlPointNextY=o.next.y;if(s.chart.options.elements.line.capBezierPoints)for(e=0,i=d.length;e<i;++e)r=d[e]._model,r.controlPointPreviousX=t(r.controlPointPreviousX,u.left,u.right),r.controlPointPreviousY=t(r.controlPointPreviousY,u.top,u.bottom),r.controlPointNextX=t(r.controlPointNextX,u.left,u.right),r.controlPointNextY=t(r.controlPointNextY,u.top,u.bottom)},draw:function(n){var i,a,r=this,o=r.getMeta(),s=o.data||[],l=n||1;for(i=0,a=s.length;i<a;++i)s[i].transition(l);for(t.canvasHelpers.clipArea(r.chart.chart.ctx,r.chart.chartArea),e(r.getDataset(),r.chart.options)&&o.dataset.transition(l).draw(),t.canvasHelpers.unclipArea(r.chart.chart.ctx),i=0,a=s.length;i<a;++i)s[i].draw(r.chart.chartArea)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;r.radius=a.hoverRadius||n.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),r.backgroundColor=a.hoverBackgroundColor||n.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,n.getHoverColor(r.backgroundColor)),r.borderColor=a.hoverBorderColor||n.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,n.getHoverColor(r.borderColor)),r.borderWidth=a.hoverBorderWidth||n.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,r.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),o.radius=r.radius||n.getValueAtIndexOrDefault(i.pointRadius,a,e.chart.options.elements.point.radius),o.backgroundColor=e.getPointBackgroundColor(t,a),o.borderColor=e.getPointBorderColor(t,a),o.borderWidth=e.getPointBorderWidth(t,a)}})}},{}],19:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0,ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var r=0;r<i[0].data.length;++r)e.push('<li><span style="background-color:'+i[0].backgroundColor[r]+'"></span>'),a[r]&&e.push(a[r]),e.push("</li>");return e.push("</ul>"),e.join("");
},legend:{labels:{generateLabels:function(t){var n=t.data;return n.labels.length&&n.datasets.length?n.labels.map(function(i,a){var r=t.getDatasetMeta(0),o=n.datasets[0],s=r.data[a],l=s.custom||{},u=e.getValueAtIndexOrDefault,d=t.options.elements.arc,c=l.backgroundColor?l.backgroundColor:u(o.backgroundColor,a,d.backgroundColor),h=l.borderColor?l.borderColor:u(o.borderColor,a,d.borderColor),f=l.borderWidth?l.borderWidth:u(o.borderWidth,a,d.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(o.data[a])||r.data[a].hidden,index:a}}):[]}},onClick:function(t,e){var n,i,a,r=e.index,o=this.chart;for(n=0,i=(o.data.datasets||[]).length;n<i;++n)a=o.getDatasetMeta(n),a.data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var n=this,i=n.chart,a=i.chartArea,r=n.getMeta(),o=i.options,s=o.elements.arc,l=Math.min(a.right-a.left,a.bottom-a.top);i.outerRadius=Math.max((l-s.borderWidth/2)/2,0),i.innerRadius=Math.max(o.cutoutPercentage?i.outerRadius/100*o.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),n.outerRadius=i.outerRadius-i.radiusLength*n.index,n.innerRadius=n.outerRadius-i.radiusLength,r.count=n.countVisibleElements(),e.each(r.data,function(e,i){n.updateElement(e,i,t)})},updateElement:function(t,n,i){for(var a=this,r=a.chart,o=a.getDataset(),s=r.options,l=s.animation,u=r.scale,d=e.getValueAtIndexOrDefault,c=r.data.labels,h=a.calculateCircumference(o.data[n]),f=u.xCenter,g=u.yCenter,m=0,p=a.getMeta(),v=0;v<n;++v)isNaN(o.data[v])||p.data[v].hidden||++m;var b=s.startAngle,y=t.hidden?0:u.getDistanceFromCenterForValue(o.data[n]),x=b+h*m,k=x+(t.hidden?0:h),_=l.animateScale?0:u.getDistanceFromCenterForValue(o.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:u,_model:{x:f,y:g,innerRadius:0,outerRadius:i?_:y,startAngle:i&&l.animateRotate?b:x,endAngle:i&&l.animateRotate?b:k,label:d(c,n,c[n])}}),a.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),n=this.getMeta(),i=0;return e.each(n.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var n=this,i=n.getMeta(),a=i.dataset,r=i.data,o=a.custom||{},s=n.getDataset(),l=n.chart.options.elements.line,u=n.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(i.dataset,{_datasetIndex:n.index,_children:r,_loop:!0,_model:{tension:o.tension?o.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:o.backgroundColor?o.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:s.borderWidth||l.borderWidth,borderColor:o.borderColor?o.borderColor:s.borderColor||l.borderColor,fill:o.fill?o.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:o.borderCapStyle?o.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:o.borderDash?o.borderDash:s.borderDash||l.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle,scaleTop:u.top,scaleBottom:u.bottom,scaleZero:u.getBasePosition()}}),i.dataset.pivot(),e.each(r,function(e,i){n.updateElement(e,i,t)},n),n.updateBezierControlPoints()},updateElement:function(t,n,i){var a=this,r=t.custom||{},o=a.getDataset(),s=a.chart.scale,l=a.chart.options.elements.point,u=s.getPointPositionForValue(n,o.data[n]);e.extend(t,{_datasetIndex:a.index,_index:n,_scale:s,_model:{x:i?s.xCenter:u.x,y:i?s.yCenter:u.y,tension:r.tension?r.tension:e.getValueOrDefault(o.lineTension,a.chart.options.elements.line.tension),radius:r.radius?r.radius:e.getValueAtIndexOrDefault(o.pointRadius,n,l.radius),backgroundColor:r.backgroundColor?r.backgroundColor:e.getValueAtIndexOrDefault(o.pointBackgroundColor,n,l.backgroundColor),borderColor:r.borderColor?r.borderColor:e.getValueAtIndexOrDefault(o.pointBorderColor,n,l.borderColor),borderWidth:r.borderWidth?r.borderWidth:e.getValueAtIndexOrDefault(o.pointBorderWidth,n,l.borderWidth),pointStyle:r.pointStyle?r.pointStyle:e.getValueAtIndexOrDefault(o.pointStyle,n,l.pointStyle),hitRadius:r.hitRadius?r.hitRadius:e.getValueAtIndexOrDefault(o.hitRadius,n,l.hitRadius)}}),t._model.skip=r.skip?r.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,n=this.getMeta();e.each(n.data,function(i,a){var r=i._model,o=e.splineCurve(e.previousItem(n.data,a,!0)._model,r,e.nextItem(n.data,a,!0)._model,r.tension);r.controlPointPreviousX=Math.max(Math.min(o.previous.x,t.right),t.left),r.controlPointPreviousY=Math.max(Math.min(o.previous.y,t.bottom),t.top),r.controlPointNextX=Math.max(Math.min(o.next.x,t.right),t.left),r.controlPointNextY=Math.max(Math.min(o.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var n=this.getMeta(),i=t||1;e.each(n.data,function(t){t.transition(i)}),n.dataset.transition(i).draw(),e.each(n.data,function(t){t.draw()})},setHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model;r.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(n.pointHoverRadius,a,this.chart.options.elements.point.hoverRadius),r.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(n.pointHoverBackgroundColor,a,e.getHoverColor(r.backgroundColor)),r.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(n.pointHoverBorderColor,a,e.getHoverColor(r.borderColor)),r.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(n.pointHoverBorderWidth,a,r.borderWidth)},removeHoverStyle:function(t){var n=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},a=t._index,r=t._model,o=this.chart.options.elements.point;r.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(n.radius,a,o.radius),r.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(n.pointBackgroundColor,a,o.backgroundColor),r.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(n.pointBorderColor,a,o.borderColor),r.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(n.pointBorderWidth,a,o.borderWidth)}})}},{}],21:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a=this;i||(t.animating=!0);for(var r=0;r<a.animations.length;++r)if(a.animations[r].chartInstance===t)return void(a.animations[r].animationObject=e);a.animations.push({chartInstance:t,animationObject:e}),1===a.animations.length&&a.requestAnimationFrame()},cancelAnimation:function(t){var n=e.findIndex(this.animations,function(e){return e.chartInstance===t});n!==-1&&(this.animations.splice(n,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+n,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var a=Date.now(),r=(a-e)/t.frameDuration;t.dropFrames+=r,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],22:[function(t,e,n){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(e,n,i,a,r){var o,s,l,u,d,c;if("object"==typeof n&&(o=n.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return void e.drawImage(n,a-n.width/2,r-n.height/2);if(!(isNaN(i)||i<=0)){switch(n){default:e.beginPath(),e.arc(a,r,i,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),s=3*i/Math.sqrt(3),d=s*Math.sqrt(3)/2,e.moveTo(a-s/2,r+d/3),e.lineTo(a+s/2,r+d/3),e.lineTo(a,r-2*d/3),e.closePath(),e.fill();break;case"rect":c=1/Math.SQRT2*i,e.beginPath(),e.fillRect(a-c,r-c,2*c,2*c),e.strokeRect(a-c,r-c,2*c,2*c);break;case"rectRounded":var h=i/Math.SQRT2,f=a-h,g=r-h,m=Math.SQRT2*i;t.helpers.drawRoundedRectangle(e,f,g,m,m,i/2),e.fill();break;case"rectRot":c=1/Math.SQRT2*i,e.beginPath(),e.moveTo(a-c,r),e.lineTo(a,r+c),e.lineTo(a+c,r),e.lineTo(a,r-c),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(a,r+i),e.lineTo(a,r-i),e.moveTo(a-i,r),e.lineTo(a+i,r),e.closePath();break;case"crossRot":e.beginPath(),l=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(a-l,r-u),e.lineTo(a+l,r+u),e.moveTo(a-l,r+u),e.lineTo(a+l,r-u),e.closePath();break;case"star":e.beginPath(),e.moveTo(a,r+i),e.lineTo(a,r-i),e.moveTo(a-i,r),e.lineTo(a+i,r),l=Math.cos(Math.PI/4)*i,u=Math.sin(Math.PI/4)*i,e.moveTo(a-l,r-u),e.lineTo(a+l,r+u),e.moveTo(a-l,r+u),e.lineTo(a+l,r-u),e.closePath();break;case"line":e.beginPath(),e.moveTo(a-i,r),e.lineTo(a+i,r),e.closePath();break;case"dash":e.beginPath(),e.moveTo(a,r),e.lineTo(a+i,r),e.closePath()}e.stroke()}},e.clipArea=function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},e.unclipArea=function(t){t.restore()}}},{}],23:[function(t,e,n){"use strict";e.exports=function(t){function e(e){e=e||{};var n=e.data=e.data||{};return n.datasets=n.datasets||[],n.labels=n.labels||[],e.options=i.configMerge(t.defaults.global,t.defaults[e.type],e.options||{}),e}function n(t){var e=t.options;e.scale?t.scale.options=e.scale:e.scales&&e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e){t.scales[e.id].options=e}),t.tooltip._options=e.tooltips}var i=t.helpers,a=t.plugins,r=t.platform;t.types={},t.instances={},t.controllers={},t.Controller=function(n,a,o){var s=this;a=e(a);var l=r.acquireContext(n,a),u=l&&l.canvas,d=u&&u.height,c=u&&u.width;return o.ctx=l,o.canvas=u,o.config=a,o.width=c,o.height=d,o.aspectRatio=d?c/d:null,s.id=i.uid(),s.chart=o,s.config=a,s.options=a.options,s._bufferedRender=!1,t.instances[s.id]=s,Object.defineProperty(s,"data",{get:function(){return s.config.data}}),l&&u?(s.initialize(),s.update(),s):(console.error("Failed to create chart: can't acquire context from the given item"),s)},i.extend(t.Controller.prototype,{initialize:function(){var t=this;return a.notify(t,"beforeInit"),i.retinaScale(t.chart),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildScales(),t.initToolTip(),a.notify(t,"afterInit"),t},clear:function(){return i.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,n=e.chart,r=e.options,o=n.canvas,s=r.maintainAspectRatio&&n.aspectRatio||null,l=Math.floor(i.getMaximumWidth(o)),u=Math.floor(s?l/s:i.getMaximumHeight(o));if((n.width!==l||n.height!==u)&&(o.width=n.width=l,o.height=n.height=u,o.style.width=l+"px",o.style.height=u+"px",i.retinaScale(n),!t)){var d={width:l,height:u};a.notify(e,"resize",[d]),e.options.onResize&&e.options.onResize(e,d),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;i.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),i.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var e=this,n=e.options,a=e.scales={},r=[];n.scales&&(r=r.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),n.scale&&r.push({options:n.scale,dtype:"radialLinear",isDefault:!0}),i.each(r,function(n){var r=n.options,o=i.getValueOrDefault(r.type,n.dtype),s=t.scaleService.getScaleConstructor(o);if(s){var l=new s({id:r.id,options:r,ctx:e.chart.ctx,chart:e});a[l.id]=l,n.isDefault&&(e.scale=l)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],a=[];if(i.each(e.data.datasets,function(i,r){var o=e.getDatasetMeta(r);o.type||(o.type=i.type||e.config.type),n.push(o.type),o.controller?o.controller.updateIndex(r):(o.controller=new t.controllers[o.type](e,r),a.push(o.controller))},e),n.length>1)for(var r=1;r<n.length;r++)if(n[r]!==n[r-1]){e.isCombo=!0;break}return a},resetElements:function(){var t=this;i.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t,e){var r=this;if(n(r),a.notify(r,"beforeUpdate")!==!1){r.tooltip._data=r.data;var o=r.buildOrUpdateControllers();i.each(r.data.datasets,function(t,e){r.getDatasetMeta(e).controller.buildOrUpdateElements()},r),r.updateLayout(),i.each(o,function(t){t.reset()}),r.updateDatasets(),a.notify(r,"afterUpdate"),r._bufferedRender?r._bufferedRequest={lazy:e,duration:t}:r.render(t,e)}},updateLayout:function(){var e=this;a.notify(e,"beforeLayout")!==!1&&(t.layoutService.update(this,this.chart.width,this.chart.height),a.notify(e,"afterScaleUpdate"),a.notify(e,"afterLayout"))},updateDatasets:function(){var t=this;if(a.notify(t,"beforeDatasetsUpdate")!==!1){for(var e=0,n=t.data.datasets.length;e<n;++e)t.getDatasetMeta(e).controller.update();a.notify(t,"afterDatasetsUpdate")}},render:function(e,n){var r=this;if(a.notify(r,"beforeRender")!==!1){var o=r.options.animation,s=function(){a.notify(r,"afterRender");var t=o&&o.onComplete;t&&t.call&&t.call(r)};if(o&&("undefined"!=typeof e&&0!==e||"undefined"==typeof e&&0!==o.duration)){var l=new t.Animation;l.numSteps=(e||o.duration)/16.66,l.easing=o.easing,l.render=function(t,e){var n=i.easingEffects[e.easing],a=e.currentStep/e.numSteps,r=n(a);t.draw(r,a,e.currentStep)},l.onAnimationProgress=o.onProgress,l.onAnimationComplete=s,t.animationService.addAnimation(r,l,e,n)}else r.draw(),s();return r}},draw:function(t){var e=this;e.clear(),void 0!==t&&null!==t||(t=1),a.notify(e,"beforeDraw",[t])!==!1&&(i.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e.tooltip.transition(t).draw(),a.notify(e,"afterDraw",[t]))},drawDatasets:function(t){var e=this;a.notify(e,"beforeDatasetsDraw",[t])!==!1&&(i.each(e.data.datasets,function(n,i){e.isDatasetVisible(i)&&e.getDatasetMeta(i).controller.draw(t)},e,!0),a.notify(e,"afterDatasetsDraw",[t]))},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,n,i){var a=t.Interaction.modes[n];return"function"==typeof a?a(this,e,i):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var e,n,o,s=this,l=s.chart.canvas;for(s.stop(),n=0,o=s.data.datasets.length;n<o;++n)e=s.getDatasetMeta(n),e.controller&&(e.controller.destroy(),e.controller=null);l&&(s.unbindEvents(),i.clear(s.chart),r.releaseContext(s.chart.ctx),s.chart.canvas=null,s.chart.ctx=null),a.notify(s,"destroy"),delete t.instances[s.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e),e.tooltip.initialize()},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};i.each(t.options.events,function(i){r.addEventListener(t,i,n),e[i]=n}),t.options.responsive&&(n=function(){t.resize()},r.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,i.each(e,function(e,n){r.removeEventListener(t,n,e)}))},updateHoverStyle:function(t,e,n){var i,a,r,o=n?"setHoverStyle":"removeHoverStyle";for(a=0,r=t.length;a<r;++a)i=t[a],i&&this.getDatasetMeta(i._datasetIndex).controller[o](i)},eventHandler:function(t){var e=this,n=e.tooltip;if(a.notify(e,"beforeEvent",[t])!==!1){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);i|=n&&n.handleEvent(t),a.notify(e,"afterEvent",[t]);var r=e._bufferedRequest;return r?e.render(r.duration,r.lazy):i&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e=this,n=e.options||{},a=n.hover,r=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,a.mode,a),a.onHover&&a.onHover.call(e,t.native,e.active),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(e,t.native,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,a.mode,!1),e.active.length&&a.mode&&e.updateHoverStyle(e.active,a.mode,!0),r=!i.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,r}})}},{}],24:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t._chartjs?void t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),void a.forEach(function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),r=a.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,e)}),r}})}))}function n(t,e){var n=t._chartjs;if(n){var i=n.listeners,r=i.indexOf(e);r!==-1&&i.splice(r,1),i.length>0||(a.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=t.helpers,a=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],r=i.data;for(t=0,e=a.length;t<e;++t)r[t]=r[t]||n.createMetaData(t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),a=i.data||(i.data=[]);t._data!==a&&(t._data&&n(t._data,t),e(a,t),t._data=a),t.resyncElements()},update:i.noop,draw:function(t){var e,n,i=t||1,a=this.getMeta().data;for(e=0,n=a.length;e<n;++e)a[e].transition(i).draw()},removeHoverStyle:function(t,e){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,r=t.custom||{},o=i.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=r.backgroundColor?r.backgroundColor:o(n.backgroundColor,a,e.backgroundColor),s.borderColor=r.borderColor?r.borderColor:o(n.borderColor,a,e.borderColor),s.borderWidth=r.borderWidth?r.borderWidth:o(n.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},r=i.getValueAtIndexOrDefault,o=i.getHoverColor,s=t._model;s.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:r(e.hoverBackgroundColor,n,o(s.backgroundColor)),s.borderColor=a.hoverBorderColor?a.hoverBorderColor:r(e.hoverBorderColor,n,o(s.borderColor)),s.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:r(e.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),n=t.getDataset().data,i=e.data.length,a=n.length;a<i?e.data.splice(a,i-a):a>i&&t.insertElements(i,a-i)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{}],25:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var n=this;return n._view||(n._view=e.clone(n._model)),1===t?(n._view=n._model,n._start=null,n):(n._start||n.pivot(),e.each(n._model,function(i,a){if("_"===a[0]);else if(n._view.hasOwnProperty(a))if(i===n._view[a]);else if("string"==typeof i)try{var r=e.color(n._model[a]).mix(e.color(n._start[a]),t);n._view[a]=r.rgbString()}catch(t){n._view[a]=i}else if("number"==typeof i){var o=void 0!==n._start[a]&&isNaN(n._start[a])===!1?n._start[a]:0;n._view[a]=(n._model[a]-o)*t+o}else n._view[a]=i;else"number"!=typeof i||isNaN(n._view[a])?n._view[a]=i:n._view[a]=i*t},n),n)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],26:[function(t,e,n){"use strict";var i=t(2);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function a(t,i,a){var r=document.defaultView,o=t.parentNode,s=r.getComputedStyle(t)[i],l=r.getComputedStyle(o)[i],u=n(s),d=n(l),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(s,t,a):c,d?e(l,o,a):c):"none"}var r=t.helpers={};r.each=function(t,e,n,i){var a,o;if(r.isArray(t))if(o=t.length,i)for(a=o-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<o;a++)e.call(n,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(o=s.length,a=0;a<o;a++)e.call(n,t[s[a]],s[a])}},r.clone=function(t){var e={};return r.each(t,function(t,n){r.isArray(t)?e[n]=t.slice(0):"object"==typeof t&&null!==t?e[n]=r.clone(t):e[n]=t}),e},r.extend=function(t){for(var e=function(e,n){t[n]=e},n=1,i=arguments.length;n<i;n++)r.each(arguments[n],e);return t},r.configMerge=function(e){var n=r.clone(e);return r.each(Array.prototype.slice.call(arguments,1),function(e){r.each(e,function(e,i){var a=n.hasOwnProperty(i),o=a?n[i]:{};"scales"===i?n[i]=r.scaleMerge(o,e):"scale"===i?n[i]=r.configMerge(o,t.scaleService.getScaleDefaults(e.type),e):!a||"object"!=typeof o||r.isArray(o)||null===o||"object"!=typeof e||r.isArray(e)?n[i]=e:n[i]=r.configMerge(o,e)})}),n},r.scaleMerge=function(e,n){var i=r.clone(e);return r.each(n,function(e,n){"xAxes"===n||"yAxes"===n?i.hasOwnProperty(n)?r.each(e,function(e,a){var o=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(o);a>=i[n].length||!i[n][a].type?i[n].push(r.configMerge(s,e)):e.type&&e.type!==i[n][a].type?i[n][a]=r.configMerge(i[n][a],s,e):i[n][a]=r.configMerge(i[n][a],e)}):(i[n]=[],r.each(e,function(e){var a=r.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");i[n].push(r.configMerge(t.scaleService.getScaleDefaults(a),e))})):i.hasOwnProperty(n)&&"object"==typeof i[n]&&null!==i[n]&&"object"==typeof e?i[n]=r.configMerge(i[n],e):i[n]=e}),i},r.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:r.isArray(t)?e<t.length?t[e]:n:t},r.getValueOrDefault=function(t,e){return void 0===t?e:t},r.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var n=0,i=t.length;n<i;++n)if(t[n]===e)return n;return-1},r.where=function(t,e){if(r.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return r.each(t,function(t){e(t)&&n.push(t)}),n},r.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},r.findNextWhere=function(t,e,n){void 0!==n&&null!==n||(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},r.findPreviousWhere=function(t,e,n){void 0!==n&&null!==n||(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},r.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=n};return i.prototype=e.prototype,n.prototype=new i,n.extend=r.inherits,t&&r.extend(n.prototype,t),n.__super__=e.prototype,n},r.noop=function(){},r.uid=function(){var t=0;return function(){return t++}}(),r.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},r.almostEquals=function(t,e,n){return Math.abs(t-e)<n},r.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},r.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},r.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},r.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},r.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},r.toRadians=function(t){return t*(Math.PI/180)},r.toDegrees=function(t){return t*(180/Math.PI)},r.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),r=Math.atan2(i,n);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},r.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},r.aliasPixel=function(t){return t%2===0?0:.5},r.splineCurve=function(t,e,n,i){var a=t.skip?e:t,r=e,o=n.skip?e:n,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l);u=isNaN(u)?0:u,d=isNaN(d)?0:d;var c=i*u,h=i*d;return{previous:{x:r.x-c*(o.x-a.x),y:r.y-c*(o.y-a.y)},next:{x:r.x+h*(o.x-a.x),y:r.y+h*(o.y-a.y)}}},r.EPSILON=Number.EPSILON||1e-14,r.splineCurveMonotone=function(t){var e,n,i,a,o=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),s=o.length;for(e=0;e<s;++e)if(i=o[e],!i.model.skip){if(n=e>0?o[e-1]:null,a=e<s-1?o[e+1]:null,a&&!a.model.skip){var l=a.model.x-i.model.x;i.deltaK=0!==l?(a.model.y-i.model.y)/l:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}var u,d,c,h;for(e=0;e<s-1;++e)i=o[e],a=o[e+1],i.model.skip||a.model.skip||(r.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(u=i.mK/i.deltaK,d=a.mK/i.deltaK,h=Math.pow(u,2)+Math.pow(d,2),h<=9||(c=3/Math.sqrt(h),i.mK=u*c*i.deltaK,a.mK=d*c*i.deltaK)));var f;for(e=0;e<s;++e)i=o[e],i.model.skip||(n=e>0?o[e-1]:null,a=e<s-1?o[e+1]:null,n&&!n.model.skip&&(f=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-f,i.model.controlPointPreviousY=i.model.y-f*i.mK),a&&!a.model.skip&&(f=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+f,i.model.controlPointNextY=i.model.y+f*i.mK))},r.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},r.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},r.niceNum=function(t,e){var n,i=Math.floor(r.log10(t)),a=t/Math.pow(10,i);return n=e?a<1.5?1:a<3?2:a<7?5:10:a<=1?1:a<=2?2:a<=5?5:10,n*Math.pow(10,i)};var o=r.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===(t/=1)?1:(n||(n=.3),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2===(t/=.5)?1:(n||(n=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;
    return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*o.easeInBounce(2*t):.5*o.easeOutBounce(2*t-1)+.5}};r.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),r.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,o=t.currentTarget||t.srcElement,s=o.getBoundingClientRect(),l=a.touches;l&&l.length>0?(n=l[0].clientX,i=l[0].clientY):(n=a.clientX,i=a.clientY);var u=parseFloat(r.getStyle(o,"padding-left")),d=parseFloat(r.getStyle(o,"padding-top")),c=parseFloat(r.getStyle(o,"padding-right")),h=parseFloat(r.getStyle(o,"padding-bottom")),f=s.right-s.left-u-c,g=s.bottom-s.top-d-h;return n=Math.round((n-s.left-u)/f*o.width/e.currentDevicePixelRatio),i=Math.round((i-s.top-d)/g*o.height/e.currentDevicePixelRatio),{x:n,y:i}},r.addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},r.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=r.noop},r.getConstraintWidth=function(t){return a(t,"max-width","clientWidth")},r.getConstraintHeight=function(t){return a(t,"max-height","clientHeight")},r.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-left"),10),i=parseInt(r.getStyle(e,"padding-right"),10),a=e.clientWidth-n-i,o=r.getConstraintWidth(t);return isNaN(o)?a:Math.min(a,o)},r.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(r.getStyle(e,"padding-top"),10),i=parseInt(r.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-i,o=r.getConstraintHeight(t);return isNaN(o)?a:Math.min(a,o)},r.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},r.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var n=t.canvas,i=t.height,a=t.width;n.height=i*e,n.width=a*e,t.ctx.scale(e,e),n.style.height=i+"px",n.style.width=a+"px"}},r.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},r.fontString=function(t,e,n){return e+" "+t+"px "+n},r.longestText=function(t,e,n,i){i=i||{};var a=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},o=i.garbageCollect=[],i.font=e),t.font=e;var s=0;r.each(n,function(e){void 0!==e&&null!==e&&r.isArray(e)!==!0?s=r.measureText(t,a,o,s,e):r.isArray(e)&&r.each(e,function(e){void 0===e||null===e||r.isArray(e)||(s=r.measureText(t,a,o,s,e))})});var l=o.length/2;if(l>n.length){for(var u=0;u<l;u++)delete a[o[u]];o.splice(0,l)}return s},r.measureText=function(t,e,n,i,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,n.push(a)),r>i&&(i=r),i},r.numberOfLabelLines=function(t){var e=1;return r.each(t,function(t){r.isArray(t)&&t.length>e&&(e=t.length)}),e},r.drawRoundedRectangle=function(t,e,n,i,a,r){t.beginPath(),t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+r),t.lineTo(e+i,n+a-r),t.quadraticCurveTo(e+i,n+a,e+i-r,n+a),t.lineTo(e+r,n+a),t.quadraticCurveTo(e,n+a,e,n+a-r),t.lineTo(e,n+r),t.quadraticCurveTo(e,n,e+r,n),t.closePath()},r.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.error("Color.js not found!"),e)},r.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r.arrayEquals=function(t,e){var n,i,a,o;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(a=t[n],o=e[n],a instanceof Array&&o instanceof Array){if(!r.arrayEquals(a,o))return!1}else if(a!==o)return!1;return!0},r.callCallback=function(t,e,n){t&&"function"==typeof t.call&&t.apply(n,e)},r.getHoverColor=function(t){return t instanceof CanvasPattern?t:r.color(t).saturate(.5).darken(.1).rgbString()}}},{2:2}],27:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.native?{x:t.x,y:t.y}:o.getRelativePosition(t,e)}function n(t,e){var n,i,a,r,o,s=t.data.datasets;for(i=0,r=s.length;i<r;++i)if(t.isDatasetVisible(i))for(n=t.getDatasetMeta(i),a=0,o=n.data.length;a<o;++a){var l=n.data[a];l._view.skip||e(l)}}function i(t,e){var i=[];return n(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function a(t,e,i,a){var r=Number.POSITIVE_INFINITY,s=[];return a||(a=o.distanceBetweenPoints),n(t,function(t){if(!i||t.inRange(e.x,e.y)){var n=t.getCenterPoint(),o=a(e,n);o<r?(s=[t],r=o):o===r&&s.push(t)}}),s}function r(t,n,r){var o=e(n,t.chart),s=function(t,e){return Math.abs(t.x-e.x)},l=r.intersect?i(t,o):a(t,o,!1,s),u=[];return l.length?(t.data.datasets.forEach(function(e,n){if(t.isDatasetVisible(n)){var i=t.getDatasetMeta(n),a=i.data[l[0]._index];a&&!a._view.skip&&u.push(a)}}),u):[]}var o=t.helpers;t.Interaction={modes:{single:function(t,i){var a=e(i,t.chart),r=[];return n(t,function(t){if(t.inRange(a.x,a.y))return r.push(t),r}),r.slice(0,1)},label:r,index:r,dataset:function(t,n,r){var o=e(n,t.chart),s=r.intersect?i(t,o):a(t,o,!1);return s.length>0&&(s=t.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(t,e){return r(t,e,!0)},point:function(t,n){var a=e(n,t.chart);return i(t,a)},nearest:function(t,n,i){var r=e(n,t.chart),o=a(t,r,i.intersect);return o.length>1&&o.sort(function(t,e){var n=t.getArea(),i=e.getArea(),a=n-i;return 0===a&&(a=t._datasetIndex-e._datasetIndex),a}),o.slice(0,1)},x:function(t,i,a){var r=e(i,t.chart),o=[],s=!1;return n(t,function(t){t.inXRange(r.x)&&o.push(t),t.inRange(r.x,r.y)&&(s=!0)}),a.intersect&&!s&&(o=[]),o},y:function(t,i,a){var r=e(i,t.chart),o=[],s=!1;return n(t,function(t){t.inYRange(r.y)&&o.push(t),t.inRange(r.x,r.y)&&(s=!0)}),a.intersect&&!s&&(o=[]),o}}}}},{}],28:[function(t,e,n){"use strict";e.exports=function(){var t=function(e,n){return this.controller=new t.Controller(e,n,this),this.controller};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,n,i){function a(t){var e,n=t.isHorizontal();n?(e=t.update(t.options.fullWidth?y:M,S),D-=e.height):(e=t.update(w,_),M-=e.width),C.push({horizontal:n,minSize:e,box:t})}function r(t){var n=e.findNextWhere(C,function(e){return e.box===t});if(n)if(t.isHorizontal()){var i={left:Math.max(F,T),right:Math.max(O,P),top:0,bottom:0};t.update(t.options.fullWidth?y:M,x/2,i)}else t.update(n.minSize.width,D)}function o(t){var n=e.findNextWhere(C,function(e){return e.box===t}),i={left:0,right:0,top:R,bottom:L};n&&t.update(n.minSize.width,D,i)}function s(t){t.isHorizontal()?(t.left=t.options.fullWidth?d:F,t.right=t.options.fullWidth?n-c:F+M,t.top=N,t.bottom=N+t.height,N=t.bottom):(t.left=z,t.right=z+t.width,t.top=R,t.bottom=R+D,z=t.right)}if(t){var l=t.options.layout,u=l?l.padding:null,d=0,c=0,h=0,f=0;isNaN(u)?(d=u.left||0,c=u.right||0,h=u.top||0,f=u.bottom||0):(d=u,c=u,h=u,f=u);var g=e.where(t.boxes,function(t){return"left"===t.options.position}),m=e.where(t.boxes,function(t){return"right"===t.options.position}),p=e.where(t.boxes,function(t){return"top"===t.options.position}),v=e.where(t.boxes,function(t){return"bottom"===t.options.position}),b=e.where(t.boxes,function(t){return"chartArea"===t.options.position});p.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),v.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var y=n-d-c,x=i-h-f,k=y/2,_=x/2,w=(n-k)/(g.length+m.length),S=(i-_)/(p.length+v.length),M=y,D=x,C=[];e.each(g.concat(m,p,v),a);var T=0,P=0,I=0,A=0;e.each(p.concat(v),function(t){if(t.getPadding){var e=t.getPadding();T=Math.max(T,e.left),P=Math.max(P,e.right)}}),e.each(g.concat(m),function(t){if(t.getPadding){var e=t.getPadding();I=Math.max(I,e.top),A=Math.max(A,e.bottom)}});var F=d,O=c,R=h,L=f;e.each(g.concat(m),r),e.each(g,function(t){F+=t.width}),e.each(m,function(t){O+=t.width}),e.each(p.concat(v),r),e.each(p,function(t){R+=t.height}),e.each(v,function(t){L+=t.height}),e.each(g.concat(m),o),F=d,O=c,R=h,L=f,e.each(g,function(t){F+=t.width}),e.each(m,function(t){O+=t.width}),e.each(p,function(t){R+=t.height}),e.each(v,function(t){L+=t.height});var V=Math.max(T-F,0);F+=V,O+=Math.max(P-O,0);var W=Math.max(I-R,0);R+=W,L+=Math.max(A-L,0);var Y=i-R-L,B=n-F-O;B===M&&Y===D||(e.each(g,function(t){t.height=Y}),e.each(m,function(t){t.height=Y}),e.each(p,function(t){t.options.fullWidth||(t.width=B)}),e.each(v,function(t){t.options.fullWidth||(t.width=B)}),D=Y,M=B);var z=d+V,N=h+W;e.each(g.concat(p),s),z+=M,N+=D,e.each(m,s),e.each(v,s),t.chartArea={left:F,top:R,right:F+M,bottom:R+D},e.each(b,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(M,D)})}}}}},{}],30:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function n(e,n){var i=new t.Legend({ctx:e.chart.ctx,options:n,chart:e});e.legend=i,t.layoutService.addBox(e,i)}var i=t.helpers,a=i.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return i.isArray(e.datasets)?e.datasets.map(function(e,n){return{text:e.label,fillStyle:i.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:n}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){i.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:a,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:function(){var t=this,e=t.options.labels,n=e.generateLabels.call(t,t.chart);e.filter&&(n=n.filter(function(n){return e.filter(n,t.chart.data)})),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:a,beforeFit:a,fit:function(){var n=this,a=n.options,r=a.labels,o=a.display,s=n.ctx,l=t.defaults.global,u=i.getValueOrDefault,d=u(r.fontSize,l.defaultFontSize),c=u(r.fontStyle,l.defaultFontStyle),h=u(r.fontFamily,l.defaultFontFamily),f=i.fontString(d,c,h),g=n.legendHitBoxes=[],m=n.minSize,p=n.isHorizontal();if(p?(m.width=n.maxWidth,m.height=o?10:0):(m.width=o?10:0,m.height=n.maxHeight),o)if(s.font=f,p){var v=n.lineWidths=[0],b=n.legendItems.length?d+r.padding:0;s.textAlign="left",s.textBaseline="top",i.each(n.legendItems,function(t,i){var a=e(r,d),o=a+d/2+s.measureText(t.text).width;v[v.length-1]+o+r.padding>=n.width&&(b+=d+r.padding,v[v.length]=n.left),g[i]={left:0,top:0,width:o,height:d},v[v.length-1]+=o+r.padding}),m.height+=b}else{var y=r.padding,x=n.columnWidths=[],k=r.padding,_=0,w=0,S=d+y;i.each(n.legendItems,function(t,n){var i=e(r,d),a=i+d/2+s.measureText(t.text).width;w+S>m.height&&(k+=_+r.padding,x.push(_),_=0,w=0),_=Math.max(_,a),w+=S,g[n]={left:0,top:0,width:a,height:d}}),k+=_,x.push(_),m.width+=k}n.width=m.width,n.height=m.height},afterFit:a,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var n=this,a=n.options,r=a.labels,o=t.defaults.global,s=o.elements.line,l=n.width,u=n.lineWidths;if(a.display){var d,c=n.ctx,h=i.getValueOrDefault,f=h(r.fontColor,o.defaultFontColor),g=h(r.fontSize,o.defaultFontSize),m=h(r.fontStyle,o.defaultFontStyle),p=h(r.fontFamily,o.defaultFontFamily),v=i.fontString(g,m,p);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=v;var b=e(r,g),y=n.legendHitBoxes,x=function(e,n,i){if(!(isNaN(b)||b<=0)){c.save(),c.fillStyle=h(i.fillStyle,o.defaultColor),c.lineCap=h(i.lineCap,s.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,s.borderDashOffset),c.lineJoin=h(i.lineJoin,s.borderJoinStyle),c.lineWidth=h(i.lineWidth,s.borderWidth),c.strokeStyle=h(i.strokeStyle,o.defaultColor);var r=0===h(i.lineWidth,s.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,s.borderDash)),a.labels&&a.labels.usePointStyle){var l=g*Math.SQRT2/2,u=l/Math.SQRT2,d=e+u,f=n+u;t.canvasHelpers.drawPoint(c,i.pointStyle,l,d,f)}else r||c.strokeRect(e,n,b,g),c.fillRect(e,n,b,g);c.restore()}},k=function(t,e,n,i){c.fillText(n.text,b+g/2+t,e),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(b+g/2+t,e+g/2),c.lineTo(b+g/2+t+i,e+g/2),c.stroke())},_=n.isHorizontal();d=_?{x:n.left+(l-u[0])/2,y:n.top+r.padding,line:0}:{x:n.left+r.padding,y:n.top+r.padding,line:0};var w=g+r.padding;i.each(n.legendItems,function(t,e){var i=c.measureText(t.text).width,a=b+g/2+i,o=d.x,s=d.y;_?o+a>=l&&(s=d.y+=w,d.line++,o=d.x=n.left+(l-u[d.line])/2):s+w>n.bottom&&(o=d.x=o+n.columnWidths[d.line]+r.padding,s=d.y=n.top+r.padding,d.line++),x(o,s,t),y[e].left=o,y[e].top=s,k(o,s,t,i),_?d.x+=a+r.padding:d.y+=w})}},handleEvent:function(t){var e=this,n=e.options,i="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===i){if(!n.onHover)return}else{if("click"!==i)return;if(!n.onClick)return}var r=t.x,o=t.y;if(r>=e.left&&r<=e.right&&o>=e.top&&o<=e.bottom)for(var s=e.legendHitBoxes,l=0;l<s.length;++l){var u=s[l];if(r>=u.left&&r<=u.left+u.width&&o>=u.top&&o<=u.top+u.height){if("click"===i){n.onClick.call(e,t.native,e.legendItems[l]),a=!0;break}if("mousemove"===i){n.onHover.call(e,t.native,e.legendItems[l]),a=!0;break}}}return a}}),t.plugins.register({beforeInit:function(t){var e=t.options.legend;e&&n(t,e)},beforeUpdate:function(e){var a=e.options.legend;a?(a=i.configMerge(t.defaults.global.legend,a),e.legend?e.legend.options=a:n(e,a)):(t.layoutService.removeBox(e,e.legend),delete e.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}})}},{}],31:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.plugins={},t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){e.indexOf(t)===-1&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,r,o,s,l=this.descriptors(t),u=l.length;for(i=0;i<u;++i)if(a=l[i],r=a.plugin,s=r[e],"function"==typeof s&&(o=[t].concat(n||[]),o.push(a.options),s.apply(r,o)===!1))return!1;return!0},descriptors:function(n){var i=n._plugins||(n._plugins={});if(i.id===this._cacheId)return i.descriptors;var a=[],r=[],o=n&&n.config||{},s=t.defaults.global.plugins,l=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(t){var n=a.indexOf(t);if(n===-1){var i=t.id,o=l[i];o!==!1&&(o===!0&&(o=e.clone(s[i])),a.push(t),r.push({plugin:t,options:o||{}}))}}),i.descriptors=r,i.id=this._cacheId,r}},t.pluginService=t.plugins,t.PluginBase=e.inherits({})}},{}],32:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e,n){return i.isArray(e)?i.longestText(t,n,e):t.measureText(e).width}function n(e){var n=i.getValueOrDefault,a=t.defaults.global,r=n(e.fontSize,a.defaultFontSize),o=n(e.fontStyle,a.defaultFontStyle),s=n(e.fontFamily,a.defaultFontFamily);return{size:r,style:o,family:s,font:i.fontString(r,o,s)}}var i=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({getPadding:function(){var t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}},beforeUpdate:function(){i.callCallback(this.options.beforeUpdate,[this])},update:function(t,e,n){var a=this;return a.beforeUpdate(),a.maxWidth=t,a.maxHeight=e,a.margins=i.extend({left:0,right:0,top:0,bottom:0},n),a.longestTextCache=a.longestTextCache||{},a.beforeSetDimensions(),a.setDimensions(),a.afterSetDimensions(),a.beforeDataLimits(),a.determineDataLimits(),a.afterDataLimits(),a.beforeBuildTicks(),a.buildTicks(),a.afterBuildTicks(),a.beforeTickToLabelConversion(),a.convertTicksToLabels(),a.afterTickToLabelConversion(),a.beforeCalculateTickRotation(),a.calculateTickRotation(),a.afterCalculateTickRotation(),a.beforeFit(),a.fit(),a.afterFit(),a.afterUpdate(),a.minSize},afterUpdate:function(){i.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){i.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){i.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){i.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:i.noop,afterDataLimits:function(){i.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){i.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:i.noop,afterBuildTicks:function(){i.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){i.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback)},afterTickToLabelConversion:function(){i.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){i.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,a=t.options.ticks,r=n(a);e.font=r.font;var o=a.minRotation||0;if(t.options.display&&t.isHorizontal())for(var s,l,u=i.longestText(e,r.font,t.ticks,t.longestTextCache),d=u,c=t.getPixelForTick(1)-t.getPixelForTick(0)-6;d>c&&o<a.maxRotation;){var h=i.toRadians(o);if(s=Math.cos(h),l=Math.sin(h),l*u>t.maxHeight){o--;break}o++,d=s*u}t.labelRotation=o},afterCalculateTickRotation:function(){i.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){i.callCallback(this.options.beforeFit,[this])},fit:function(){var t=this,a=t.minSize={width:0,height:0},r=t.options,o=r.ticks,s=r.scaleLabel,l=r.gridLines,u=r.display,d=t.isHorizontal(),c=n(o),h=1.5*n(s).size,f=r.gridLines.tickMarkLength;if(d?a.width=t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:a.width=u&&l.drawTicks?f:0,d?a.height=u&&l.drawTicks?f:0:a.height=t.maxHeight,s.display&&u&&(d?a.height+=h:a.width+=h),o.display&&u){var g=i.longestText(t.ctx,c.font,t.ticks,t.longestTextCache),m=i.numberOfLabelLines(t.ticks),p=.5*c.size;if(d){t.longestLabelWidth=g;var v=i.toRadians(t.labelRotation),b=Math.cos(v),y=Math.sin(v),x=y*g+c.size*m+p*m;a.height=Math.min(t.maxHeight,a.height+x),t.ctx.font=c.font;var k=t.ticks[0],_=e(t.ctx,k,c.font),w=t.ticks[t.ticks.length-1],S=e(t.ctx,w,c.font);0!==t.labelRotation?(t.paddingLeft="bottom"===r.position?b*_+3:b*p+3,t.paddingRight="bottom"===r.position?b*p+3:b*S+3):(t.paddingLeft=_/2+3,t.paddingRight=S/2+3)}else o.mirror?g=0:g+=t.options.ticks.padding,a.width+=g,t.paddingTop=c.size/2,t.paddingBottom=c.size/2}t.handleMargins(),t.width=a.width,t.height=a.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){i.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:i.noop,getPixelForValue:i.noop,getValueForPixel:i.noop,getPixelForTick:function(t,e){var n=this;if(n.isHorizontal()){var i=n.width-(n.paddingLeft+n.paddingRight),a=i/Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),r=a*t+n.paddingLeft;e&&(r+=a/2);var o=n.left+Math.round(r);return o+=n.isFullWidth()?n.margins.left:0}var s=n.height-(n.paddingTop+n.paddingBottom);return n.top+t*(s/(n.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=e.width-(e.paddingLeft+e.paddingRight),i=n*t+e.paddingLeft,a=e.left+Math.round(i);return a+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this,e=t.min,n=t.max;return t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0},draw:function(e){var a=this,r=a.options;if(r.display){var o,s,l=a.ctx,u=t.defaults.global,d=r.ticks,c=r.gridLines,h=r.scaleLabel,f=0!==a.labelRotation,g=d.autoSkip,m=a.isHorizontal();d.maxTicksLimit&&(s=d.maxTicksLimit);var p=i.getValueOrDefault(d.fontColor,u.defaultFontColor),v=n(d),b=c.drawTicks?c.tickMarkLength:0,y=i.getValueOrDefault(c.borderDash,u.borderDash),x=i.getValueOrDefault(c.borderDashOffset,u.borderDashOffset),k=i.getValueOrDefault(h.fontColor,u.defaultFontColor),_=n(h),w=i.toRadians(a.labelRotation),S=Math.cos(w),M=a.longestLabelWidth*S;l.fillStyle=p;var D=[];if(m){if(o=!1,f&&(M/=2),(M+d.autoSkipPadding)*a.ticks.length>a.width-(a.paddingLeft+a.paddingRight)&&(o=1+Math.floor((M+d.autoSkipPadding)*a.ticks.length/(a.width-(a.paddingLeft+a.paddingRight)))),s&&a.ticks.length>s)for(;!o||a.ticks.length/(o||1)>s;)o||(o=1),o+=1;g||(o=!1)}var C="right"===r.position?a.left:a.right-b,T="right"===r.position?a.left+b:a.right,P="bottom"===r.position?a.top:a.bottom-b,I="bottom"===r.position?a.top+b:a.bottom;if(i.each(a.ticks,function(t,n){if(void 0!==t&&null!==t){var s=a.ticks.length===n+1,l=o>1&&n%o>0||n%o===0&&n+o>=a.ticks.length;if((!l||s)&&void 0!==t&&null!==t){var u,h;n===("undefined"!=typeof a.zeroLineIndex?a.zeroLineIndex:0)?(u=c.zeroLineWidth,h=c.zeroLineColor):(u=i.getValueAtIndexOrDefault(c.lineWidth,n),h=i.getValueAtIndexOrDefault(c.color,n));var g,p,v,k,_,S,M,A,F,O,R="middle",L="middle";if(m){"bottom"===r.position?(L=f?"middle":"top",R=f?"right":"center",O=a.top+b):(L=f?"middle":"bottom",R=f?"left":"center",O=a.bottom-b);var V=a.getPixelForTick(n)+i.aliasPixel(u);F=a.getPixelForTick(n,c.offsetGridLines)+d.labelOffset,g=v=_=M=V,p=P,k=I,S=e.top,A=e.bottom}else{var W,Y="left"===r.position,B=d.padding;d.mirror?(R=Y?"left":"right",W=B):(R=Y?"right":"left",W=b+B),F=Y?a.right-W:a.left+W;var z=a.getPixelForTick(n);z+=i.aliasPixel(u),O=a.getPixelForTick(n,c.offsetGridLines),g=C,v=T,_=e.left,M=e.right,p=k=S=A=z}D.push({tx1:g,ty1:p,tx2:v,ty2:k,x1:_,y1:S,x2:M,y2:A,labelX:F,labelY:O,glWidth:u,glColor:h,glBorderDash:y,glBorderDashOffset:x,rotation:-1*w,label:t,textBaseline:L,textAlign:R})}}}),i.each(D,function(t){if(c.display&&(l.save(),l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.setLineDash&&(l.setLineDash(t.glBorderDash),l.lineDashOffset=t.glBorderDashOffset),l.beginPath(),c.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),c.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke(),l.restore()),d.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=v.font,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var e=t.label;if(i.isArray(e))for(var n=0,a=0;n<e.length;++n)l.fillText(""+e[n],0,a),a+=1.5*v.size;else l.fillText(e,0,0);l.restore()}}),h.display){var A,F,O=0;if(m)A=a.left+(a.right-a.left)/2,F="bottom"===r.position?a.bottom-_.size/2:a.top+_.size/2;else{var R="left"===r.position;A=R?a.left+_.size/2:a.right-_.size/2,F=a.top+(a.bottom-a.top)/2,O=R?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(A,F),l.rotate(O),l.textAlign="center",l.textBaseline="middle",l.fillStyle=k,l.font=_.font,l.fillText(h.labelString,0,0),l.restore()}if(c.drawBorder){l.lineWidth=i.getValueAtIndexOrDefault(c.lineWidth,0),l.strokeStyle=i.getValueAtIndexOrDefault(c.color,0);var L=a.left,V=a.right,W=a.top,Y=a.bottom,B=i.aliasPixel(l.lineWidth);m?(W=Y="top"===r.position?a.bottom:a.top,W+=B,Y+=B):(L=V="left"===r.position?a.right:a.left,L+=B,V+=B),l.beginPath(),l.moveTo(L,W),l.lineTo(V,Y),l.stroke()}}}})}},{}],33:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,n,i){this.constructors[t]=n,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(n){return this.defaults.hasOwnProperty(n)?e.scaleMerge(t.defaults.scale,this.defaults[n]):{}},updateScaleDefaults:function(t,n){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],n))},addScalesToLayout:function(n){e.each(n.scales,function(e){t.layoutService.addBox(n,e)})}}}},{}],34:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,n){var i,a=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var r=e.niceNum(n.max-n.min,!1);i=e.niceNum(r/(t.maxTicks-1),!0)}var o=Math.floor(n.min/i)*i,s=Math.ceil(n.max/i)*i;t.min&&t.max&&t.stepSize&&e.almostWhole((t.max-t.min)/t.stepSize,i/1e3)&&(o=t.min,s=t.max);var l=(s-o)/i;l=e.almostEquals(l,Math.round(l),i/1e3)?Math.round(l):Math.ceil(l),a.push(void 0!==t.min?t.min:o);for(var u=1;u<l;++u)a.push(o+u*i);return a.push(void 0!==t.max?t.max:s),a},logarithmic:function(t,n){var i,a,r=[],o=e.getValueOrDefault,s=o(t.min,Math.pow(10,Math.floor(e.log10(n.min)))),l=Math.floor(e.log10(n.max)),u=Math.ceil(n.max/Math.pow(10,l));0===s?(i=Math.floor(e.log10(n.minNotZero)),a=Math.floor(n.minNotZero/Math.pow(10,i)),r.push(s),s=a*Math.pow(10,i)):(i=Math.floor(e.log10(s)),a=Math.floor(s/Math.pow(10,i)));do r.push(s),++a,10===a&&(a=1,++i),s=a*Math.pow(10,i);while(i<l||i===l&&a<u);var d=o(t.max,s);return r.push(d),r}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,n,i){var a=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var r=e.log10(Math.abs(a)),o="";if(0!==t){var s=-1*Math.floor(r);s=Math.max(Math.min(s,20),0),o=t.toFixed(s)}else o="0";return o},logarithmic:function(t,n,i){var a=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===n||n===i.length-1?t.toExponential():""}}}}},{}],35:[function(t,e,n){"use strict";e.exports=function(t){function e(e,n){var i=new t.Title({ctx:e.chart.ctx,options:n,chart:e});e.titleBlock=i,t.layoutService.addBox(e,i)}var n=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var i=n.noop;t.Title=t.Element.extend({initialize:function(t){var e=this;n.extend(e,t),e.legendHitBoxes=[]},beforeUpdate:i,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:i,afterBuildLabels:i,beforeFit:i,fit:function(){var e=this,i=n.getValueOrDefault,a=e.options,r=t.defaults.global,o=a.display,s=i(a.fontSize,r.defaultFontSize),l=e.minSize;e.isHorizontal()?(l.width=e.maxWidth,l.height=o?s+2*a.padding:0):(l.width=o?s+2*a.padding:0,l.height=e.maxHeight),e.width=l.width,e.height=l.height},afterFit:i,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var e=this,i=e.ctx,a=n.getValueOrDefault,r=e.options,o=t.defaults.global;if(r.display){var s,l,u,d=a(r.fontSize,o.defaultFontSize),c=a(r.fontStyle,o.defaultFontStyle),h=a(r.fontFamily,o.defaultFontFamily),f=n.fontString(d,c,h),g=0,m=e.top,p=e.left,v=e.bottom,b=e.right;i.fillStyle=a(r.fontColor,o.defaultFontColor),i.font=f,e.isHorizontal()?(s=p+(b-p)/2,l=m+(v-m)/2,u=b-p):(s="left"===r.position?p+d/2:b-d/2,l=m+(v-m)/2,u=v-m,g=Math.PI*("left"===r.position?-.5:.5)),i.save(),i.translate(s,l),i.rotate(g),i.textAlign="center",i.textBaseline="middle",i.fillText(r.text,0,0,u),i.restore()}}}),t.plugins.register({beforeInit:function(t){var n=t.options.title;n&&e(t,n)},beforeUpdate:function(i){var a=i.options.title;a?(a=n.configMerge(t.defaults.global.title,a),i.titleBlock?i.titleBlock.options=a:e(i,a)):(t.layoutService.removeBox(i,i.titleBlock),delete i.titleBlock)}})}},{}],36:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=l.color(t);return n.alpha(e*n.alpha()).rgbaString()}function n(t,e){return e&&(l.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function i(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a,x:t._model.x,y:t._model.y}}function a(e){var n=t.defaults.global,i=l.getValueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:i(e.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:i(e.bodyFontStyle,n.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:i(e.bodyFontSize,n.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:i(e.titleFontFamily,n.defaultFontFamily),_titleFontStyle:i(e.titleFontStyle,n.defaultFontStyle),titleFontSize:i(e.titleFontSize,n.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,
    titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:i(e.footerFontFamily,n.defaultFontFamily),_footerFontStyle:i(e.footerFontStyle,n.defaultFontStyle),footerFontSize:i(e.footerFontSize,n.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors}}function r(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,o=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=s*d,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=o*c,i+=o?(o-1)*e.bodySpacing:0,i+=u?e.footerMarginTop:0,i+=u*h,i+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){a=Math.max(a,n.measureText(t).width+f)};return n.font=l.fontString(d,e._titleFontStyle,e._titleFontFamily),l.each(e.title,g),n.font=l.fontString(c,e._bodyFontStyle,e._bodyFontFamily),l.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,l.each(r,function(t){l.each(t.before,g),l.each(t.lines,g),l.each(t.after,g)}),f=0,n.font=l.fontString(h,e._footerFontStyle,e._footerFontFamily),l.each(e.footer,g),a+=2*e.xPadding,{width:a,height:i}}function o(t,e){var n=t._model,i=t._chart,a=t._chartInstance.chartArea,r="center",o="center";n.y<e.height?o="top":n.y>i.height-e.height&&(o="bottom");var s,l,u,d,c,h=(a.left+a.right)/2,f=(a.top+a.bottom)/2;"center"===o?(s=function(t){return t<=h},l=function(t){return t>h}):(s=function(t){return t<=e.width/2},l=function(t){return t>=i.width-e.width/2}),u=function(t){return t+e.width>i.width},d=function(t){return t-e.width<0},c=function(t){return t<=f?"top":"bottom"},s(n.x)?(r="left",u(n.x)&&(r="center",o=c(n.y))):l(n.x)&&(r="right",d(n.x)&&(r="center",o=c(n.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:r,yAlign:g.yAlign?g.yAlign:o}}function s(t,e,n){var i=t.x,a=t.y,r=t.caretSize,o=t.caretPadding,s=t.cornerRadius,l=n.xAlign,u=n.yAlign,d=r+o,c=s+o;return"right"===l?i-=e.width:"center"===l&&(i-=e.width/2),"top"===u?a+=d:a-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===l?i+=d:"right"===l&&(i-=d):"left"===l?i-=c:"right"===l&&(i+=c),{x:i,y:a}}var l=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,callbacks:{beforeTitle:l.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var r=t[0];r.xLabel?n=r.xLabel:a>0&&r.index<a&&(n=i[r.index])}return n},afterTitle:l.noop,beforeBody:l.noop,beforeLabel:l.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n+": "+t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex),i=n.data[t.index],a=i._view;return{borderColor:a.borderColor,backgroundColor:a.backgroundColor}},afterLabel:l.noop,afterBody:l.noop,beforeFooter:l.noop,footer:l.noop,afterFooter:l.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=a(this._options)},getTitle:function(){var t=this,e=t._options,i=e.callbacks,a=i.beforeTitle.apply(t,arguments),r=i.title.apply(t,arguments),o=i.afterTitle.apply(t,arguments),s=[];return s=n(s,a),s=n(s,r),s=n(s,o)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,a=i._options.callbacks,r=[];return l.each(t,function(t){var o={before:[],lines:[],after:[]};n(o.before,a.beforeLabel.call(i,t,e)),n(o.lines,a.label.call(i,t,e)),n(o.after,a.afterLabel.call(i,t,e)),r.push(o)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return l.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),a=e.footer.apply(t,arguments),r=e.afterFooter.apply(t,arguments),o=[];return o=n(o,i),o=n(o,a),o=n(o,r)},update:function(e){var n,u,d=this,c=d._options,h=d._model,f=d._model=a(c),g=d._active,m=d._data,p=d._chartInstance,v={xAlign:h.xAlign,yAlign:h.yAlign},b={x:h.x,y:h.y},y={width:h.width,height:h.height},x={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var k=[];x=t.Tooltip.positioners[c.position](g,d._eventPosition);var _=[];for(n=0,u=g.length;n<u;++n)_.push(i(g[n]));c.filter&&(_=_.filter(function(t){return c.filter(t,m)})),c.itemSort&&(_=_.sort(function(t,e){return c.itemSort(t,e,m)})),l.each(_,function(t){k.push(c.callbacks.labelColor.call(d,t,p))}),f.title=d.getTitle(_,m),f.beforeBody=d.getBeforeBody(_,m),f.body=d.getBody(_,m),f.afterBody=d.getAfterBody(_,m),f.footer=d.getFooter(_,m),f.x=Math.round(x.x),f.y=Math.round(x.y),f.caretPadding=l.getValueOrDefault(x.padding,2),f.labelColors=k,f.dataPoints=_,y=r(this,f),v=o(this,y),b=s(f,y,v)}else f.opacity=0;return f.xAlign=v.xAlign,f.yAlign=v.yAlign,f.x=b.x,f.y=b.y,f.width=y.width,f.height=y.height,f.caretX=x.x,f.caretY=x.y,d._model=f,e&&c.custom&&c.custom.call(d,f),d},drawCaret:function(t,n,i){var a,r,o,s,l,u,d=this._view,c=this._chart.ctx,h=d.caretSize,f=d.cornerRadius,g=d.xAlign,m=d.yAlign,p=t.x,v=t.y,b=n.width,y=n.height;"center"===m?("left"===g?(a=p,r=a-h,o=a):(a=p+b,r=a+h,o=a),l=v+y/2,s=l-h,u=l+h):("left"===g?(a=p+f,r=a+h,o=r+h):"right"===g?(a=p+b-f,r=a-h,o=r-h):(r=p+b/2,a=r-h,o=r+h),"top"===m?(s=v,l=s-h,u=s):(s=v+y,l=s+h,u=s)),c.fillStyle=e(d.backgroundColor,i),c.beginPath(),c.moveTo(a,s),c.lineTo(r,l),c.lineTo(o,u),c.closePath(),c.fill()},drawTitle:function(t,n,i,a){var r=n.title;if(r.length){i.textAlign=n._titleAlign,i.textBaseline="top";var o=n.titleFontSize,s=n.titleSpacing;i.fillStyle=e(n.titleFontColor,a),i.font=l.fontString(o,n._titleFontStyle,n._titleFontFamily);var u,d;for(u=0,d=r.length;u<d;++u)i.fillText(r[u],t.x,t.y),t.y+=o+s,u+1===r.length&&(t.y+=n.titleMarginBottom-s)}},drawBody:function(t,n,i,a){var r=n.bodyFontSize,o=n.bodySpacing,s=n.body;i.textAlign=n._bodyAlign,i.textBaseline="top";var u=e(n.bodyFontColor,a);i.fillStyle=u,i.font=l.fontString(r,n._bodyFontStyle,n._bodyFontFamily);var d=0,c=function(e){i.fillText(e,t.x+d,t.y),t.y+=r+o};l.each(n.beforeBody,c);var h=n.displayColors;d=h?r+2:0,l.each(s,function(o,s){l.each(o.before,c),l.each(o.lines,function(o){h&&(i.fillStyle=e(n.legendColorBackground,a),i.fillRect(t.x,t.y,r,r),i.strokeStyle=e(n.labelColors[s].borderColor,a),i.strokeRect(t.x,t.y,r,r),i.fillStyle=e(n.labelColors[s].backgroundColor,a),i.fillRect(t.x+1,t.y+1,r-2,r-2),i.fillStyle=u),c(o)}),l.each(o.after,c)}),d=0,l.each(n.afterBody,c),t.y-=o},drawFooter:function(t,n,i,a){var r=n.footer;r.length&&(t.y+=n.footerMarginTop,i.textAlign=n._footerAlign,i.textBaseline="top",i.fillStyle=e(n.footerFontColor,a),i.font=l.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),l.each(r,function(e){i.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,n,i,a,r){i.fillStyle=e(n.backgroundColor,r),l.drawRoundedRectangle(i,t.x,t.y,a.width,a.height,n.cornerRadius),i.fill()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity;this._options.enabled&&(this.drawBackground(i,e,t,n,a),this.drawCaret(i,n,a),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,a),this.drawBody(i,e,t,a),this.drawFooter(i,e,t,a))}},handleEvent:function(t){var e=this,n=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chartInstance.getElementsAtEventForMode(t,n.mode,n),i=!l.arrayEquals(e._active,e._lastActive),e._lastActive=e._active,n.enabled||n.custom){e._eventPosition={x:t.x,y:t.y};var a=e._model;e.update(!0),e.pivot(),i|=a.x!==e._model.x||a.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,r=0;for(e=0,n=t.length;e<n;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();i+=s.x,a+=s.y,++r}}return{x:Math.round(i/r),y:Math.round(a/r)}},nearest:function(t,e){var n,i,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,a=t.length;i<a;++i){var u=t[i];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=l.distanceBetweenPoints(e,d);c<s&&(s=c,n=u)}}if(n){var h=n.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}}}},{}],37:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;n.elements.arc={backgroundColor:n.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,n){var i=this._view;if(i){for(var a=e.getAngleFromPoint(i,{x:t,y:n}),r=a.angle,o=a.distance,s=i.startAngle,l=i.endAngle;l<s;)l+=2*Math.PI;for(;r>l;)r-=2*Math.PI;for(;r<s;)r+=2*Math.PI;var u=r>=s&&r<=l,d=o>=i.innerRadius&&o<=i.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],38:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:n.defaultColor,borderWidth:3,borderColor:n.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){function t(t,e){var n=e._view;e._view.steppedLine===!0?(l.lineTo(n.x,t._view.y),l.lineTo(n.x,n.y)):0===e._view.tension?l.lineTo(n.x,n.y):l.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,n.controlPointPreviousX,n.controlPointPreviousY,n.x,n.y)}var i=this,a=i._view,r=a.spanGaps,o=a.scaleZero,s=i._loop;s||("top"===a.fill?o=a.scaleTop:"bottom"===a.fill&&(o=a.scaleBottom));var l=i._chart.ctx;l.save();var u=i._children.slice(),d=-1;s&&u.length&&u.push(u[0]);var c,h,f,g;if(u.length&&a.fill){for(l.beginPath(),c=0;c<u.length;++c)h=u[c],f=e.previousItem(u,c),g=h._view,0===c?(s?l.moveTo(o.x,o.y):l.moveTo(g.x,o),g.skip||(d=c,l.lineTo(g.x,g.y))):(f=d===-1?f:u[d],g.skip?r||d!==c-1||(s?l.lineTo(o.x,o.y):l.lineTo(f._view.x,o)):(d!==c-1?r&&d!==-1?t(f,h):s?l.lineTo(g.x,g.y):(l.lineTo(g.x,o),l.lineTo(g.x,g.y)):t(f,h),d=c));s||d===-1||l.lineTo(u[d]._view.x,o),l.fillStyle=a.backgroundColor||n.defaultColor,l.closePath(),l.fill()}var m=n.elements.line;for(l.lineCap=a.borderCapStyle||m.borderCapStyle,l.setLineDash&&l.setLineDash(a.borderDash||m.borderDash),l.lineDashOffset=a.borderDashOffset||m.borderDashOffset,l.lineJoin=a.borderJoinStyle||m.borderJoinStyle,l.lineWidth=a.borderWidth||m.borderWidth,l.strokeStyle=a.borderColor||n.defaultColor,l.beginPath(),d=-1,c=0;c<u.length;++c)h=u[c],f=e.previousItem(u,c),g=h._view,0===c?g.skip||(l.moveTo(g.x,g.y),d=c):(f=d===-1?f:u[d],g.skip||(d!==c-1&&!r||d===-1?l.moveTo(g.x,g.y):t(f,h),d=c));l.stroke(),l.restore()}})}},{}],39:[function(t,e,n){"use strict";e.exports=function(t){function e(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}function n(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)}var i=t.helpers,a=t.defaults.global,r=a.defaultColor;a.elements.point={radius:3,pointStyle:"circle",backgroundColor:r,borderWidth:1,borderColor:r,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:e,inXRange:e,inYRange:n,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(e){var n=this._view,o=this._model,s=this._chart.ctx,l=n.pointStyle,u=n.radius,d=n.x,c=n.y,h=t.helpers.color,f=1.01,g=0;n.skip||(s.strokeStyle=n.borderColor||r,s.lineWidth=i.getValueOrDefault(n.borderWidth,a.elements.point.borderWidth),s.fillStyle=n.backgroundColor||r,void 0!==e&&(o.x<e.left||e.right*f<o.x||o.y<e.top||e.bottom*f<o.y)&&(o.x<e.left?g=(d-o.x)/(e.left-o.x):e.right*f<o.x?g=(o.x-d)/(o.x-e.right):o.y<e.top?g=(c-o.y)/(e.top-o.y):e.bottom*f<o.y&&(g=(o.y-c)/(o.y-e.bottom)),g=Math.round(100*g)/100,s.strokeStyle=h(s.strokeStyle).alpha(g).rgbString(),s.fillStyle=h(s.fillStyle).alpha(g).rgbString()),t.canvasHelpers.drawPoint(s,l,u,d,c))}})}},{}],40:[function(t,e,n){"use strict";e.exports=function(t){function e(t){return void 0!==t._view.width}function n(t){var n,i,a,r,o=t._view;if(e(t)){var s=o.width/2;n=o.x-s,i=o.x+s,a=Math.min(o.y,o.base),r=Math.max(o.y,o.base)}else{var l=o.height/2;n=Math.min(o.x,o.base),i=Math.max(o.x,o.base),a=o.y-l,r=o.y+l}return{left:n,top:a,right:i,bottom:r}}var i=t.defaults.global;i.elements.rectangle={backgroundColor:i.defaultColor,borderWidth:0,borderColor:i.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return v[(y+t)%4]}var e,n,i,a,r,o,s,l=this._chart.ctx,u=this._view,d=u.borderWidth;if(u.horizontal?(e=u.base,n=u.x,i=u.y-u.height/2,a=u.y+u.height/2,r=n>e?1:-1,o=1,s=u.borderSkipped||"left"):(e=u.x-u.width/2,n=u.x+u.width/2,i=u.y,a=u.base,r=1,o=a>i?1:-1,s=u.borderSkipped||"bottom"),d){var c=Math.min(Math.abs(e-n),Math.abs(i-a));d=d>c?c:d;var h=d/2,f=e+("left"!==s?h*r:0),g=n+("right"!==s?-h*r:0),m=i+("top"!==s?h*o:0),p=a+("bottom"!==s?-h*o:0);f!==g&&(i=m,a=p),m!==p&&(e=f,n=g)}l.beginPath(),l.fillStyle=u.backgroundColor,l.strokeStyle=u.borderColor,l.lineWidth=d;var v=[[e,a],[e,i],[n,i],[n,a]],b=["bottom","left","top","right"],y=b.indexOf(s,0);y===-1&&(y=0);var x=t(0);l.moveTo(x[0],x[1]);for(var k=1;k<4;k++)x=t(k),l.lineTo(x[0],x[1]);l.fill(),d&&l.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var a=n(this);i=t>=a.left&&t<=a.right&&e>=a.top&&e<=a.bottom}return i},inLabelRange:function(t,i){var a=this;if(!a._view)return!1;var r=!1,o=n(a);return r=e(a)?t>=o.left&&t<=o.right:i>=o.top&&i<=o.bottom},inXRange:function(t){var e=n(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=n(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,n,i=this._view;return e(this)?(t=i.x,n=(i.y+i.base)/2):(t=(i.x+i.base)/2,n=i.y),{x:t,y:n}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],41:[function(t,e,n){"use strict";e.exports=function(t){function e(t,e){var n=l.getStyle(t,e),i=n&&n.match(/(\d+)px/);return i?Number(i[1]):void 0}function n(t,n){var i=t.style,a=t.getAttribute("height"),r=t.getAttribute("width");if(t._chartjs={initial:{height:a,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===r||""===r){var o=e(t,"width");void 0!==o&&(t.width=o)}if(null===a||""===a)if(""===t.style.height)t.height=t.width/(n.options.aspectRatio||2);else{var s=e(t,"height");void 0!==o&&(t.height=s)}return t}function i(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function a(t,e){var n=u[t.type]||t.type,a=l.getRelativePosition(t,e);return i(n,e,a.x,a.y,t)}function r(t){var e=document.createElement("iframe");return e.className="chartjs-hidden-iframe",e.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",e.tabIndex=-1,l.addEvent(e,"load",function(){l.addEvent(e.contentWindow||e,"resize",t),t()}),e}function o(t,e,n){var a=t._chartjs={ticking:!1},o=function(){a.ticking||(a.ticking=!0,l.requestAnimFrame.call(window,function(){if(a.resizer)return a.ticking=!1,e(i("resize",n))}))};a.resizer=r(o),t.insertBefore(a.resizer,t.firstChild)}function s(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}}var l=t.helpers,u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};return{acquireContext:function(t,e){if("string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t instanceof HTMLCanvasElement){var i=t.getContext&&t.getContext("2d");if(i instanceof CanvasRenderingContext2D)return n(t,e),i}return null},releaseContext:function(t){var e=t.canvas;if(e._chartjs){var n=e._chartjs.initial;["height","width"].forEach(function(t){var i=n[t];void 0===i||null===i?e.removeAttribute(t):e.setAttribute(t,i)}),l.each(n.style||{},function(t,n){e.style[n]=t}),e.width=e.width,delete e._chartjs}},addEventListener:function(t,e,n){var i=t.chart.canvas;if("resize"===e)return void o(i.parentNode,n,t.chart);var r=n._chartjs||(n._chartjs={}),s=r.proxies||(r.proxies={}),u=s[t.id+"_"+e]=function(e){n(a(e,t.chart))};l.addEvent(i,e,u)},removeEventListener:function(t,e,n){var i=t.chart.canvas;if("resize"===e)return void s(i.parentNode,n);var a=n._chartjs||{},r=a.proxies||{},o=r[t.id+"_"+e];o&&l.removeEvent(i,e,o)}}}},{}],42:[function(t,e,n){"use strict";var i=t(41);e.exports=function(t){t.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},t.helpers.extend(t.platform,i(t))}},{41:41}],43:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,n=t.getLabels();t.minIndex=0,t.maxIndex=n.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(n,t.options.ticks.min),t.minIndex=i!==-1?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(n,t.options.ticks.max),t.maxIndex=i!==-1?i:t.maxIndex),t.min=n[t.minIndex],t.max=n[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.isHorizontal();return i.yLabels&&!a?n.getRightValue(i.datasets[e].data[t]):n.ticks[t-n.minIndex]},getPixelForValue:function(t,e,n,i){var a=this,r=Math.max(a.maxIndex+1-a.minIndex-(a.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&isNaN(e)){var o=a.getLabels(),s=o.indexOf(t);e=s!==-1?s:e}if(a.isHorizontal()){var l=a.width/r,u=l*(e-a.minIndex);return(a.options.gridLines.offsetGridLines&&i||a.maxIndex===a.minIndex&&i)&&(u+=l/2),a.left+Math.round(u)}var d=a.height/r,c=d*(e-a.minIndex);return a.options.gridLines.offsetGridLines&&i&&(c+=d/2),a.top+Math.round(c)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,n=this,i=Math.max(n.ticks.length-(n.options.gridLines.offsetGridLines?0:1),1),a=n.isHorizontal(),r=(a?n.width:n.height)/i;return t-=a?n.left:n.top,n.options.gridLines.offsetGridLines&&(t-=r/2),e=t<=0?0:Math.round(t/r)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,n)}},{}],44:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=n.chart,r=a.data,o=r.datasets,s=n.isHorizontal();n.min=null,n.max=null;var l=i.stacked;if(void 0===l&&e.each(o,function(e,n){if(!l){var i=a.getDatasetMeta(n);a.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(l=!0)}}),i.stacked||l){var u={};e.each(o,function(r,o){var s=a.getDatasetMeta(o),l=[s.type,void 0===i.stacked&&void 0===s.stack?o:"",s.stack].join(".");void 0===u[l]&&(u[l]={positiveValues:[],negativeValues:[]});var d=u[l].positiveValues,c=u[l].negativeValues;a.isDatasetVisible(o)&&t(s)&&e.each(r.data,function(t,e){var a=+n.getRightValue(t);isNaN(a)||s.data[e].hidden||(d[e]=d[e]||0,c[e]=c[e]||0,i.relativePoints?d[e]=100:a<0?c[e]+=a:d[e]+=a)})}),e.each(u,function(t){var i=t.positiveValues.concat(t.negativeValues),a=e.min(i),r=e.max(i);n.min=null===n.min?a:Math.min(n.min,a),n.max=null===n.max?r:Math.max(n.max,r)})}else e.each(o,function(i,r){var o=a.getDatasetMeta(r);a.isDatasetVisible(r)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var n,i=this,a=i.options.ticks;if(i.isHorizontal())n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.width/50));else{var r=e.getValueOrDefault(a.fontSize,t.defaults.global.defaultFontSize);n=Math.min(a.maxTicksLimit?a.maxTicksLimit:11,Math.ceil(i.height/(2*r)))}return n},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,n=this,i=n.start,a=+n.getRightValue(t),r=n.end-i;return n.isHorizontal()?(e=n.left+n.width/r*(a-i),Math.round(e)):(e=n.bottom-n.height/r*(a-i),Math.round(e))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=n?e.width:e.height,a=(n?t-e.left:e.bottom-t)/i;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,n)}},{}],45:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,n=t.options,i=n.ticks;if(i.beginAtZero){var a=e.sign(t.min),r=e.sign(t.max);a<0&&r<0?t.max=0:a>0&&r>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:n,handleDirectionalChanges:n,buildTicks:function(){var n=this,i=n.options,a=i.ticks,r=n.getTickLimit();r=Math.max(2,r);var o={maxTicks:r,min:a.min,max:a.max,stepSize:e.getValueOrDefault(a.fixedStepSize,a.stepSize)},s=n.ticks=t.Ticks.generators.linear(o,n);n.handleDirectionalChanges(),n.max=e.max(s),n.min=e.min(s),a.reverse?(s.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],46:[function(t,e,n){"use strict";e.exports=function(t){var e=t.helpers,n={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return u?t.xAxisID===n.id:t.yAxisID===n.id}var n=this,i=n.options,a=i.ticks,r=n.chart,o=r.data,s=o.datasets,l=e.getValueOrDefault,u=n.isHorizontal();n.min=null,n.max=null,n.minNotZero=null;var d=i.stacked;if(void 0===d&&e.each(s,function(e,n){if(!d){var i=r.getDatasetMeta(n);r.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(d=!0)}}),i.stacked||d){var c={};e.each(s,function(a,o){var s=r.getDatasetMeta(o),l=[s.type,void 0===i.stacked&&void 0===s.stack?o:"",s.stack].join(".");r.isDatasetVisible(o)&&t(s)&&(void 0===c[l]&&(c[l]=[]),e.each(a.data,function(t,e){var a=c[l],r=+n.getRightValue(t);isNaN(r)||s.data[e].hidden||(a[e]=a[e]||0,i.relativePoints?a[e]=100:a[e]+=r)}))}),e.each(c,function(t){var i=e.min(t),a=e.max(t);n.min=null===n.min?i:Math.min(n.min,i),n.max=null===n.max?a:Math.max(n.max,a)})}else e.each(s,function(i,a){var o=r.getDatasetMeta(a);r.isDatasetVisible(a)&&t(o)&&e.each(i.data,function(t,e){var i=+n.getRightValue(t);isNaN(i)||o.data[e].hidden||(null===n.min?n.min=i:i<n.min&&(n.min=i),null===n.max?n.max=i:i>n.max&&(n.max=i),0!==i&&(null===n.minNotZero||i<n.minNotZero)&&(n.minNotZero=i))})});n.min=l(a.min,n.min),n.max=l(a.max,n.max),n.min===n.max&&(0!==n.min&&null!==n.min?(n.min=Math.pow(10,Math.floor(e.log10(n.min))-1),n.max=Math.pow(10,Math.floor(e.log10(n.max))+1)):(n.min=1,n.max=10))},buildTicks:function(){var n=this,i=n.options,a=i.ticks,r={min:a.min,max:a.max},o=n.ticks=t.Ticks.generators.logarithmic(r,n);n.isHorizontal()||o.reverse(),n.max=e.max(o),n.min=e.min(o),a.reverse?(o.reverse(),n.start=n.max,n.end=n.min):(n.start=n.min,n.end=n.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var n,i,a,r=this,o=r.start,s=+r.getRightValue(t),l=r.options,u=l.ticks;return r.isHorizontal()?(a=e.log10(r.end)-e.log10(o),0===s?i=r.left:(n=r.width,i=r.left+n/a*(e.log10(s)-e.log10(o)))):(n=r.height,0!==o||u.reverse?0===r.end&&u.reverse?(a=e.log10(r.start)-e.log10(r.minNotZero),i=s===r.end?r.top:s===r.minNotZero?r.top+.02*n:r.top+.02*n+.98*n/a*(e.log10(s)-e.log10(r.minNotZero))):(a=e.log10(r.end)-e.log10(o),n=r.height,i=r.bottom-n/a*(e.log10(s)-e.log10(o))):(a=e.log10(r.end)-e.log10(r.minNotZero),i=s===o?r.bottom:s===r.minNotZero?r.bottom-.02*n:r.bottom-.02*n-.98*n/a*(e.log10(s)-e.log10(r.minNotZero)))),i},getValueForPixel:function(t){var n,i,a=this,r=e.log10(a.end)-e.log10(a.start);return a.isHorizontal()?(i=a.width,n=a.start*Math.pow(10,(t-a.left)*r/i)):(i=a.height,n=Math.pow(10,(a.bottom-t)*r/i)/a.start),n}});t.scaleService.registerScaleType("logarithmic",i,n)}},{}],47:[function(t,e,n){"use strict";e.exports=function(t){function e(t){return t.options.lineArc?0:t.chart.data.labels.length}function n(t){var e=t.options.pointLabels,n=f.getValueOrDefault(e.fontSize,g.defaultFontSize),i=f.getValueOrDefault(e.fontStyle,g.defaultFontStyle),a=f.getValueOrDefault(e.fontFamily,g.defaultFontFamily),r=f.fontString(n,i,a);return{size:n,style:i,family:a,font:r}}function i(t,e,n){return f.isArray(n)?{w:f.longestText(t,t.font,n),h:n.length*e+1.5*(n.length-1)*e}:{w:t.measureText(n).width,h:e}}function a(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n-5,end:e}:{start:e,end:e+n+5}}function r(t){var r,o,s,l=n(t),u=Math.min(t.height/2,t.width/2),d={l:t.width,r:0,t:t.height,b:0},c={};t.ctx.font=l.font,t._pointLabelSizes=[];var h=e(t);for(r=0;r<h;r++){s=t.getPointPosition(r,u),o=i(t.ctx,l.size,t.pointLabels[r]||""),t._pointLabelSizes[r]=o;var g=t.getIndexAngle(r),m=f.toDegrees(g)%360,p=a(m,s.x,o.w,0,180),v=a(m,s.y,o.h,90,270);p.start<d.l&&(d.l=p.start,c.l=g),p.end>d.r&&(d.r=p.end,c.r=g),v.start<d.t&&(d.t=v.start,c.t=g),v.end>d.b&&(d.b=v.end,c.b=g)}t.setReductions(u,d,c)}function o(t){var e=Math.min(t.height/2,t.width/2);t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0)}function s(t){return 0===t||180===t?"center":t<180?"left":"right"}function l(t,e,n,i){if(f.isArray(e))for(var a=n.y,r=1.5*i,o=0;o<e.length;++o)t.fillText(e[o],n.x,a),a+=r;else t.fillText(e,n.x,n.y)}function u(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function d(t){var i=t.ctx,a=f.getValueOrDefault,r=t.options,o=r.angleLines,d=r.pointLabels;i.lineWidth=o.lineWidth,i.strokeStyle=o.color;var c=t.getDistanceFromCenterForValue(r.reverse?t.min:t.max),h=n(t);i.textBaseline="top";for(var m=e(t)-1;m>=0;m--){if(o.display){var p=t.getPointPosition(m,c);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(p.x,p.y),i.stroke(),i.closePath()}var v=t.getPointPosition(m,c+5),b=a(d.fontColor,g.defaultFontColor);i.font=h.font,i.fillStyle=b;var y=t.getIndexAngle(m),x=f.toDegrees(y);i.textAlign=s(x),u(x,t._pointLabelSizes[m],v),l(i,t.pointLabels[m]||"",v,h.size)}}function c(t,n,i,a){var r=t.ctx;if(r.strokeStyle=f.getValueAtIndexOrDefault(n.color,a-1),r.lineWidth=f.getValueAtIndexOrDefault(n.lineWidth,a-1),t.options.lineArc)r.beginPath(),r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),r.closePath(),r.stroke();else{var o=e(t);if(0===o)return;r.beginPath();var s=t.getPointPosition(0,i);r.moveTo(s.x,s.y);for(var l=1;l<o;l++)s=t.getPointPosition(l,i),r.lineTo(s.x,s.y);r.closePath(),r.stroke()}}function h(t){return f.isNumber(t)?t:0}var f=t.helpers,g=t.defaults.global,m={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{fontSize:10,callback:function(t){return t}}},p=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,n=e.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var i=f.min([t.height,t.width]),a=f.getValueOrDefault(n.fontSize,g.defaultFontSize);t.drawingArea=e.display?i/2-(a/2+n.backdropPaddingY):i/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;f.each(e.data.datasets,function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);f.each(a.data,function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(n=Math.min(r,n),i=Math.max(r,i))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=f.getValueOrDefault(t.fontSize,g.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){this.options.lineArc?o(this):r(this)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),r=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),s=-Math.max(e.b-i.height,0)/Math.cos(n.b);a=h(a),r=h(r),o=h(o),s=h(s),i.drawingArea=Math.min(Math.round(t-(a+r)/2),Math.round(t-(o+s)/2)),i.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,n,i){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=n+a.drawingArea,l=a.height-i-a.drawingArea;a.xCenter=Math.round((o+r)/2+a.left),a.yCenter=Math.round((s+l)/2+a.top)},getIndexAngle:function(t){var n=2*Math.PI/e(this),i=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,a=i*Math.PI*2/360;return t*n+a},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},draw:function(){var t=this,e=t.options,n=e.gridLines,i=e.ticks,a=f.getValueOrDefault;
    if(e.display){var r=t.ctx,o=a(i.fontSize,g.defaultFontSize),s=a(i.fontStyle,g.defaultFontStyle),l=a(i.fontFamily,g.defaultFontFamily),u=f.fontString(o,s,l);f.each(t.ticks,function(s,l){if(l>0||e.reverse){var d=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),h=t.yCenter-d;if(n.display&&0!==l&&c(t,n,d,l),i.display){var f=a(i.fontColor,g.defaultFontColor);if(r.font=u,i.showLabelBackdrop){var m=r.measureText(s).width;r.fillStyle=i.backdropColor,r.fillRect(t.xCenter-m/2-i.backdropPaddingX,h-o/2-i.backdropPaddingY,m+2*i.backdropPaddingX,o+2*i.backdropPaddingY)}r.textAlign="center",r.textBaseline="middle",r.fillStyle=f,r.fillText(s,t.xCenter,h)}}}),e.lineArc||d(t)}}});t.scaleService.registerScaleType("radialLinear",p,m)}},{}],48:[function(t,e,n){"use strict";var i=t(6);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,n={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},a={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},r=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return null===t||null===e?null:"undefined"!=typeof this.labelMoments[t]?this.labelMoments[t][e]:null},getLabelDiff:function(t,e){var n=this;return null===t||null===e?null:(void 0===n.labelDiffs&&n.buildLabelDiffs(),"undefined"!=typeof n.labelDiffs[t]?n.labelDiffs[t][e]:null)},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),n.push(i))},t),t.firstTick=i.min.call(t,n),t.lastTick=i.max.call(t,n)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(a,r){var o=[],s=t.chart.isDatasetVisible(r);"object"==typeof a.data[0]&&null!==a.data[0]?e.each(a.data,function(e){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),o.push(n),s&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,n):n,t.lastTick=null!==t.lastTick?i.max(t.lastTick,n):n))},t):o=n,t.labelMoments.push(o)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildLabelDiffs:function(){var t=this;t.labelDiffs=[];var n=[];t.chart.data.labels&&t.chart.data.labels.length>0&&e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),n.push(i.diff(t.firstTick,t.tickUnit,!0)))},t),e.each(t.chart.data.datasets,function(i){var a=[];"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(e){var n=t.parseTime(t.getRightValue(e));n.isValid()&&(t.options.time.round&&n.startOf(t.options.time.round),a.push(n.diff(t.firstTick,t.tickUnit,!0)))},t):a=n,t.labelDiffs.push(a)},t)},buildTicks:function(){var i=this;i.ctx.save();var a=e.getValueOrDefault(i.options.ticks.fontSize,t.defaults.global.defaultFontSize),r=e.getValueOrDefault(i.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),o=e.getValueOrDefault(i.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),s=e.fontString(a,r,o);if(i.ctx.font=s,i.ticks=[],i.unitScale=1,i.scaleSizeInUnits=0,i.options.time.unit)i.tickUnit=i.options.time.unit||"day",i.displayFormat=i.options.time.displayFormats[i.tickUnit],i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,1);else{var l=i.isHorizontal()?i.width:i.height,u=i.tickFormatFunction(i.firstTick,0,[]),d=i.ctx.measureText(u).width,c=Math.cos(e.toRadians(i.options.ticks.maxRotation)),h=Math.sin(e.toRadians(i.options.ticks.maxRotation));d=d*c+a*h;var f=l/d;i.tickUnit=i.options.time.minUnit,i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.displayFormat=i.options.time.displayFormats[i.tickUnit];for(var g=0,m=n.units[g];g<n.units.length;){if(i.unitScale=1,e.isArray(m.steps)&&Math.ceil(i.scaleSizeInUnits/f)<e.max(m.steps)){for(var p=0;p<m.steps.length;++p)if(m.steps[p]>=Math.ceil(i.scaleSizeInUnits/f)){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,m.steps[p]);break}break}if(m.maxStep===!1||Math.ceil(i.scaleSizeInUnits/f)<m.maxStep){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,Math.ceil(i.scaleSizeInUnits/f));break}++g,m=n.units[g],i.tickUnit=m.name;var v=i.firstTick.diff(i.getMomentStartOf(i.firstTick),i.tickUnit,!0),b=i.getMomentStartOf(i.lastTick.clone().add(1,i.tickUnit)).diff(i.lastTick,i.tickUnit,!0);i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)+v+b,i.displayFormat=i.options.time.displayFormats[m.name]}}var y;if(i.options.time.min?y=i.getMomentStartOf(i.firstTick):(i.firstTick=i.getMomentStartOf(i.firstTick),y=i.firstTick),!i.options.time.max){var x=i.getMomentStartOf(i.lastTick),k=x.diff(i.lastTick,i.tickUnit,!0);k<0?i.lastTick=i.getMomentStartOf(i.lastTick.add(1,i.tickUnit)):k>=0&&(i.lastTick=x),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)}i.options.time.displayFormat&&(i.displayFormat=i.options.time.displayFormat),i.ticks.push(i.firstTick.clone());for(var _=i.unitScale;_<=i.scaleSizeInUnits;_+=i.unitScale){var w=y.clone().add(_,i.tickUnit);if(i.options.time.max&&w.diff(i.lastTick,i.tickUnit,!0)>=0)break;i.ticks.push(w)}var S=i.ticks[i.ticks.length-1].diff(i.lastTick,i.tickUnit);0===S&&0!==i.scaleSizeInUnits||(i.options.time.max?(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.ticks[0],i.tickUnit,!0)):(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0))),i.ctx.restore(),i.labelDiffs=void 0},getLabelForIndex:function(t,e){var n=this,i=n.chart.data.labels&&t<n.chart.data.labels.length?n.chart.data.labels[t]:"",a=n.chart.data.datasets[e].data[t];return null!==a&&"object"==typeof a&&(i=n.getRightValue(a)),n.options.time.tooltipFormat&&(i=n.parseTime(i).format(n.options.time.tooltipFormat)),i},tickFormatFunction:function(t,n,i){var a=t.format(this.displayFormat),r=this.options.ticks,o=e.getValueOrDefault(r.callback,r.userCallback);return o?o(a,n,i):a},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,n){var i=this,a=null;if(void 0!==e&&void 0!==n&&(a=i.getLabelDiff(n,e)),null===a&&(t&&t.isValid||(t=i.parseTime(i.getRightValue(t))),t&&t.isValid&&t.isValid()&&(a=t.diff(i.firstTick,i.tickUnit,!0))),null!==a){var r=0!==a?a/i.scaleSizeInUnits:a;if(i.isHorizontal()){var o=i.width*r;return i.left+Math.round(o)}var s=i.height*r;return i.top+Math.round(s)}},getPixelForTick:function(t){return this.getPixelForValue(this.tickMoments[t],null,null)},getValueForPixel:function(t){var e=this,n=e.isHorizontal()?e.width:e.height,a=(t-(e.isHorizontal()?e.left:e.top))/n;return a*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(a,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",r,a)}},{6:6}]},{},[7])(7)});
/**
 * Resize function without multiple trigger
 * 
 * Usage:
 * $(window).smartresize(function(){  
 *     // code here
 * });
 */
(function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args); 
                timeout = null; 
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100); 
        };
    };

    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

	
	
// Sidebar
function init_sidebar() {
// TODO: This is some kind of easy fix, maybe we can improve this
var setContentHeight = function () {
	// reset height
	$RIGHT_COL.css('min-height', $(window).height());

	var bodyHeight = $BODY.outerHeight(),
		footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
		leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
		contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

	// normalize content
	contentHeight -= $NAV_MENU.height() + footerHeight;

	$RIGHT_COL.css('min-height', contentHeight);
};

  $SIDEBAR_MENU.find('a').on('click', function(ev) {
	  console.log('clicked - sidebar_menu');
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }else
            {
				if ( $BODY.is( ".nav-sm" ) )
				{
					$SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
					$SIDEBAR_MENU.find( "li ul" ).slideUp();
				}
			}
            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });

// toggle small or large menu 
$MENU_TOGGLE.on('click', function() {
		console.log('clicked - menu toggle');
		
		if ($BODY.hasClass('nav-md')) {
			$SIDEBAR_MENU.find('li.active ul').hide();
			$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$SIDEBAR_MENU.find('li.active-sm ul').show();
			$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
		}

	$BODY.toggleClass('nav-md nav-sm');

	setContentHeight();
});

	// check active menu
	$SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

	$SIDEBAR_MENU.find('a').filter(function () {
		return this.href == CURRENT_URL;
	}).parent('li').addClass('current-page').parents('ul').slideDown(function() {
		setContentHeight();
	}).parent().addClass('active');

	// recompute content when resizing
	$(window).smartresize(function(){  
		setContentHeight();
	});

	setContentHeight();

	// fixed sidebar
	if ($.fn.mCustomScrollbar) {
		$('.menu_fixed').mCustomScrollbar({
			autoHideScrollbar: true,
			theme: 'minimal',
			mouseWheel:{ preventDefault: true }
		});
	}
};
// /Sidebar

	var randNum = function() {
	  return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
	};


// Panel toolbox
$(document).ready(function() {
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');
        
        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200); 
            $BOX_PANEL.css('height', 'auto');  
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.close-link').click(function () {
        var $BOX_PANEL = $(this).closest('.x_panel');

        $BOX_PANEL.remove();
    });
});
// /Panel toolbox

// Tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
});
// /Tooltip

// Progressbar
if ($(".progress .progress-bar")[0]) {
    $('.progress .progress-bar').progressbar();
}
// /Progressbar

// Switchery
$(document).ready(function() {
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
});
// /Switchery


// iCheck
$(document).ready(function() {
    if ($("input.flat")[0]) {
        $(document).ready(function () {
            $('input.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });
        });
    }
});
// /iCheck

// Table
$('table input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var checkState = '';

$('.bulk_action input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    checkState = 'all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    checkState = 'none';
    countChecked();
});

function countChecked() {
    if (checkState === 'all') {
        $(".bulk_action input[name='table_records']").iCheck('check');
    }
    if (checkState === 'none') {
        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    }

    var checkCount = $(".bulk_action input[name='table_records']:checked").length;

    if (checkCount) {
        $('.column-title').hide();
        $('.bulk-actions').show();
        $('.action-cnt').html(checkCount + ' Records Selected');
    } else {
        $('.column-title').show();
        $('.bulk-actions').hide();
    }
}



// Accordion
$(document).ready(function() {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});

// NProgress
if (typeof NProgress != 'undefined') {
    $(document).ready(function () {
        NProgress.start();
    });

    $(window).load(function () {
        NProgress.done();
    });
}

	
	  //hover and retain popover when on popover content
        var originalLeave = $.fn.popover.Constructor.prototype.leave;
        $.fn.popover.Constructor.prototype.leave = function(obj) {
          var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
          var container, timeout;

          originalLeave.call(this, obj);

          if (obj.currentTarget) {
            container = $(obj.currentTarget).siblings('.popover');
            timeout = self.timeout;
            container.one('mouseenter', function() {
              //We entered the actual popover – call off the dogs
              clearTimeout(timeout);
              //Let's monitor popover content instead
              container.one('mouseleave', function() {
                $.fn.popover.Constructor.prototype.leave.call(self, self);
              });
            });
          }
        };

        $('body').popover({
          selector: '[data-popover]',
          trigger: 'click hover',
          delay: {
            show: 50,
            hide: 400
          }
        });


	function gd(year, month, day) {
		return new Date(year, month - 1, day).getTime();
	}
	  
	
	function init_flot_chart(){
		
		if( typeof ($.plot) === 'undefined'){ return; }
		
		console.log('init_flot_chart');
		
		
		
		var arr_data1 = [
			[gd(2012, 1, 1), 17],
			[gd(2012, 1, 2), 74],
			[gd(2012, 1, 3), 6],
			[gd(2012, 1, 4), 39],
			[gd(2012, 1, 5), 20],
			[gd(2012, 1, 6), 85],
			[gd(2012, 1, 7), 7]
		];

		var arr_data2 = [
		  [gd(2012, 1, 1), 82],
		  [gd(2012, 1, 2), 23],
		  [gd(2012, 1, 3), 66],
		  [gd(2012, 1, 4), 9],
		  [gd(2012, 1, 5), 119],
		  [gd(2012, 1, 6), 6],
		  [gd(2012, 1, 7), 9]
		];
		
		var arr_data3 = [
			[0, 1],
			[1, 9],
			[2, 6],
			[3, 10],
			[4, 5],
			[5, 17],
			[6, 6],
			[7, 10],
			[8, 7],
			[9, 11],
			[10, 35],
			[11, 9],
			[12, 12],
			[13, 5],
			[14, 3],
			[15, 4],
			[16, 9]
		];
		
		var chart_plot_02_data = [];
		
		var chart_plot_03_data = [
			[0, 1],
			[1, 9],
			[2, 6],
			[3, 10],
			[4, 5],
			[5, 17],
			[6, 6],
			[7, 10],
			[8, 7],
			[9, 11],
			[10, 35],
			[11, 9],
			[12, 12],
			[13, 5],
			[14, 3],
			[15, 4],
			[16, 9]
		];
		
		
		for (var i = 0; i < 30; i++) {
		  chart_plot_02_data.push([new Date(Date.today().add(i).days()).getTime(), randNum() + i + i + 10]);
		}
		
		
		var chart_plot_01_settings = {
          series: {
            lines: {
              show: false,
              fill: true
            },
            splines: {
              show: true,
              tension: 0.4,
              lineWidth: 1,
              fill: 0.4
            },
            points: {
              radius: 0,
              show: true
            },
            shadowSize: 2
          },
          grid: {
            verticalLines: true,
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#fff'
          },
          colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
          xaxis: {
            tickColor: "rgba(51, 51, 51, 0.06)",
            mode: "time",
            tickSize: [1, "day"],
            //tickLength: 10,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10
          },
          yaxis: {
            ticks: 8,
            tickColor: "rgba(51, 51, 51, 0.06)",
          },
          tooltip: false
        }
		
		var chart_plot_02_settings = {
			grid: {
				show: true,
				aboveData: true,
				color: "#3f3f3f",
				labelMargin: 10,
				axisMargin: 0,
				borderWidth: 0,
				borderColor: null,
				minBorderMargin: 5,
				clickable: true,
				hoverable: true,
				autoHighlight: true,
				mouseActiveRadius: 100
			},
			series: {
				lines: {
					show: true,
					fill: true,
					lineWidth: 2,
					steps: false
				},
				points: {
					show: true,
					radius: 4.5,
					symbol: "circle",
					lineWidth: 3.0
				}
			},
			legend: {
				position: "ne",
				margin: [0, -25],
				noColumns: 0,
				labelBoxBorderColor: null,
				labelFormatter: function(label, series) {
					return label + '&nbsp;&nbsp;';
				},
				width: 40,
				height: 1
			},
			colors: ['#96CA59', '#3F97EB', '#72c380', '#6f7a8a', '#f7cb38', '#5a8022', '#2c7282'],
			shadowSize: 0,
			tooltip: true,
			tooltipOpts: {
				content: "%s: %y.0",
				xDateFormat: "%d/%m",
			shifts: {
				x: -30,
				y: -50
			},
			defaultTheme: false
			},
			yaxis: {
				min: 0
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "day"],
				timeformat: "%d/%m/%y",
				min: chart_plot_02_data[0][0],
				max: chart_plot_02_data[20][0]
			}
		};	
	
		var chart_plot_03_settings = {
			series: {
				curvedLines: {
					apply: true,
					active: true,
					monotonicFit: true
				}
			},
			colors: ["#26B99A"],
			grid: {
				borderWidth: {
					top: 0,
					right: 0,
					bottom: 1,
					left: 1
				},
				borderColor: {
					bottom: "#7F8790",
					left: "#7F8790"
				}
			}
		};
        
		
        if ($("#chart_plot_01").length){
			console.log('Plot1');
			
			$.plot( $("#chart_plot_01"), [ arr_data1, arr_data2 ],  chart_plot_01_settings );
		}
		
		
		if ($("#chart_plot_02").length){
			console.log('Plot2');
			
			$.plot( $("#chart_plot_02"), 
			[{ 
				label: "Email Sent", 
				data: chart_plot_02_data, 
				lines: { 
					fillColor: "rgba(150, 202, 89, 0.12)" 
				}, 
				points: { 
					fillColor: "#fff" } 
			}], chart_plot_02_settings);
			
		}
		
		if ($("#chart_plot_03").length){
			console.log('Plot3');
			
			
			$.plot($("#chart_plot_03"), [{
				label: "Registrations",
				data: chart_plot_03_data,
				lines: {
					fillColor: "rgba(150, 202, 89, 0.12)"
				}, 
				points: {
					fillColor: "#fff"
				}
			}], chart_plot_03_settings);
			
		};
	  
	} 
	
		
	/* STARRR */
			
	function init_starrr() {
		
		if( typeof (starrr) === 'undefined'){ return; }
		console.log('init_starrr');
		
		$(".stars").starrr();

		$('.stars-existing').starrr({
		  rating: 4
		});

		$('.stars').on('starrr:change', function (e, value) {
		  $('.stars-count').html(value);
		});

		$('.stars-existing').on('starrr:change', function (e, value) {
		  $('.stars-count-existing').html(value);
		});
		
	  };
	
	
	function init_JQVmap(){

		//console.log('check init_JQVmap [' + typeof (VectorCanvas) + '][' + typeof (jQuery.fn.vectorMap) + ']' );	
		
		if(typeof (jQuery.fn.vectorMap) === 'undefined'){ return; }
		
		console.log('init_JQVmap');
	     
			if ($('#world-map-gdp').length ){
		 
				$('#world-map-gdp').vectorMap({
					map: 'world_en',
					backgroundColor: null,
					color: '#ffffff',
					hoverOpacity: 0.7,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					values: sample_data,
					scaleColors: ['#E6F2F0', '#149B7E'],
					normalizeFunction: 'polynomial'
				});
			
			}
			
			if ($('#usa_map').length ){
			
				$('#usa_map').vectorMap({
					map: 'usa_en',
					backgroundColor: null,
					color: '#ffffff',
					hoverOpacity: 0.7,
					selectedColor: '#666666',
					enableZoom: true,
					showTooltip: true,
					values: sample_data,
					scaleColors: ['#E6F2F0', '#149B7E'],
					normalizeFunction: 'polynomial'
				});
			
			}
			
	};
			
	    
	function init_skycons(){
				
			if( typeof (Skycons) === 'undefined'){ return; }
			console.log('init_skycons');
		
			var icons = new Skycons({
				"color": "#73879C"
			  }),
			  list = [
				"clear-day", "clear-night", "partly-cloudy-day",
				"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
				"fog"
			  ],
			  i;

			for (i = list.length; i--;)
			  icons.set(list[i], list[i]);

			icons.play();
	
	}  
	   
	   
	function init_chart_doughnut(){
				
		if( typeof (Chart) === 'undefined'){ return; }
		
		console.log('init_chart_doughnut');
	 
		if ($('.canvasDoughnut').length){
			
		var chart_doughnut_settings = {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: {
					labels: [
						"Symbian",
						"Blackberry",
						"Other",
						"Android",
						"IOS"
					],
					datasets: [{
						data: [15, 20, 30, 10, 30],
						backgroundColor: [
							"#BDC3C7",
							"#9B59B6",
							"#E74C3C",
							"#26B99A",
							"#3498DB"
						],
						hoverBackgroundColor: [
							"#CFD4D8",
							"#B370CF",
							"#E95E4F",
							"#36CAAB",
							"#49A9EA"
						]
					}]
				},
				options: { 
					legend: false, 
					responsive: false 
				}
			}
		
			$('.canvasDoughnut').each(function(){
				
				var chart_element = $(this);
				var chart_doughnut = new Chart( chart_element, chart_doughnut_settings);
				
			});			
		
		}  
	   
	}
	   
	function init_gauge() {
			
		if( typeof (Gauge) === 'undefined'){ return; }
		
		console.log('init_gauge [' + $('.gauge-chart').length + ']');
		
		console.log('init_gauge');
		

		  var chart_gauge_settings = {
		  lines: 12,
		  angle: 0,
		  lineWidth: 0.4,
		  pointer: {
			  length: 0.75,
			  strokeWidth: 0.042,
			  color: '#1D212A'
		  },
		  limitMax: 'false',
		  colorStart: '#1ABC9C',
		  colorStop: '#1ABC9C',
		  strokeColor: '#F0F3F3',
		  generateGradient: true
	  };
		
		
		if ($('#chart_gauge_01').length){ 
		
			var chart_gauge_01_elem = document.getElementById('chart_gauge_01');
			var chart_gauge_01 = new Gauge(chart_gauge_01_elem).setOptions(chart_gauge_settings);
			
		}	
		
		
		if ($('#gauge-text').length){ 
		
			chart_gauge_01.maxValue = 6000;
			chart_gauge_01.animationSpeed = 32;
			chart_gauge_01.set(3200);
			chart_gauge_01.setTextField(document.getElementById("gauge-text"));
		
		}
		
		if ($('#chart_gauge_02').length){
		
			var chart_gauge_02_elem = document.getElementById('chart_gauge_02');
			var chart_gauge_02 = new Gauge(chart_gauge_02_elem).setOptions(chart_gauge_settings);
			
		}
		
		
		if ($('#gauge-text2').length){
			
			chart_gauge_02.maxValue = 9000;
			chart_gauge_02.animationSpeed = 32;
			chart_gauge_02.set(2400);
			chart_gauge_02.setTextField(document.getElementById("gauge-text2"));
		
		}
	
	
	}   
	   	   
	/* SPARKLINES */
			
		function init_sparklines() {
			
			if(typeof (jQuery.fn.sparkline) === 'undefined'){ return; }
			console.log('init_sparklines'); 
			
			
			$(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '125',
				barWidth: 13,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'bar',
				height: '40',
				barWidth: 9,
				colorMap: {
					'7': '#a1a1a1'	
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
				type: 'line',
				width: '200',
				height: '40',
				lineColor: '#26B99A',
				fillColor: 'rgba(223, 223, 223, 0.57)',
				lineWidth: 2,
				spotColor: '#26B99A',
				minSpotColor: '#26B99A'
			});
			
			
			$(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
				type: 'bar',
				height: '40',
				barWidth: 8,
				colorMap: {
					'7': '#a1a1a1'
				},
				barSpacing: 2,
				barColor: '#26B99A'
			});
			
			
			$(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
				type: 'line',
				height: '40',
				width: '200',
				lineColor: '#26B99A',
				fillColor: '#ffffff',
				lineWidth: 3,
				spotColor: '#34495E',
				minSpotColor: '#34495E'
			});
	
	
			$(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'bar',
				colorMap: {
					'7': '#a1a1a1'
				},
				barColor: '#26B99A'
			});
			
			
			$(".sparkline_area").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
				type: 'line',
				lineColor: '#26B99A',
				fillColor: '#26B99A',
				spotColor: '#4578a0',
				minSpotColor: '#728fb2',
				maxSpotColor: '#6d93c4',
				highlightSpotColor: '#ef5179',
				highlightLineColor: '#8ba8bf',
				spotRadius: 2.5,
				width: 85
			});
			
			
			$(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
				type: 'line',
				lineColor: '#26B99A',
				fillColor: '#ffffff',
				width: 85,
				spotColor: '#34495E',
				minSpotColor: '#34495E'
			});
			
			
			$(".sparkline_pie").sparkline([1, 1, 2, 1], {
				type: 'pie',
				sliceColors: ['#26B99A', '#ccc', '#75BCDD', '#D66DE2']
			});
			
			
			$(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], {
				type: 'discrete',
				barWidth: 3,
				lineColor: '#26B99A',
				width: '85',
			});

			
		};   
	   
	   
	   /* AUTOCOMPLETE */
			
		function init_autocomplete() {
			
			if( typeof (autocomplete) === 'undefined'){ return; }
			console.log('init_autocomplete');
			
			var countries = { AD:"Andorra",A2:"Andorra Test",AE:"United Arab Emirates",AF:"Afghanistan",AG:"Antigua and Barbuda",AI:"Anguilla",AL:"Albania",AM:"Armenia",AN:"Netherlands Antilles",AO:"Angola",AQ:"Antarctica",AR:"Argentina",AS:"American Samoa",AT:"Austria",AU:"Australia",AW:"Aruba",AX:"Åland Islands",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BB:"Barbados",BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BL:"Saint Barthélemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BQ:"British Antarctic Territory",BR:"Brazil",BS:"Bahamas",BT:"Bhutan",BV:"Bouvet Island",BW:"Botswana",BY:"Belarus",BZ:"Belize",CA:"Canada",CC:"Cocos [Keeling] Islands",CD:"Congo - Kinshasa",CF:"Central African Republic",CG:"Congo - Brazzaville",CH:"Switzerland",CI:"Côte d’Ivoire",CK:"Cook Islands",CL:"Chile",CM:"Cameroon",CN:"China",CO:"Colombia",CR:"Costa Rica",CS:"Serbia and Montenegro",CT:"Canton and Enderbury Islands",CU:"Cuba",CV:"Cape Verde",CX:"Christmas Island",CY:"Cyprus",CZ:"Czech Republic",DD:"East Germany",DE:"Germany",DJ:"Djibouti",DK:"Denmark",DM:"Dominica",DO:"Dominican Republic",DZ:"Algeria",EC:"Ecuador",EE:"Estonia",EG:"Egypt",EH:"Western Sahara",ER:"Eritrea",ES:"Spain",ET:"Ethiopia",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",FQ:"French Southern and Antarctic Territories",FR:"France",FX:"Metropolitan France",GA:"Gabon",GB:"United Kingdom",GD:"Grenada",GE:"Georgia",GF:"French Guiana",GG:"Guernsey",GH:"Ghana",GI:"Gibraltar",GL:"Greenland",GM:"Gambia",GN:"Guinea",GP:"Guadeloupe",GQ:"Equatorial Guinea",GR:"Greece",GS:"South Georgia and the South Sandwich Islands",GT:"Guatemala",GU:"Guam",GW:"Guinea-Bissau",GY:"Guyana",HK:"Hong Kong SAR China",HM:"Heard Island and McDonald Islands",HN:"Honduras",HR:"Croatia",HT:"Haiti",HU:"Hungary",ID:"Indonesia",IE:"Ireland",IL:"Israel",IM:"Isle of Man",IN:"India",IO:"British Indian Ocean Territory",IQ:"Iraq",IR:"Iran",IS:"Iceland",IT:"Italy",JE:"Jersey",JM:"Jamaica",JO:"Jordan",JP:"Japan",JT:"Johnston Island",KE:"Kenya",KG:"Kyrgyzstan",KH:"Cambodia",KI:"Kiribati",KM:"Comoros",KN:"Saint Kitts and Nevis",KP:"North Korea",KR:"South Korea",KW:"Kuwait",KY:"Cayman Islands",KZ:"Kazakhstan",LA:"Laos",LB:"Lebanon",LC:"Saint Lucia",LI:"Liechtenstein",LK:"Sri Lanka",LR:"Liberia",LS:"Lesotho",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",LY:"Libya",MA:"Morocco",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MF:"Saint Martin",MG:"Madagascar",MH:"Marshall Islands",MI:"Midway Islands",MK:"Macedonia",ML:"Mali",MM:"Myanmar [Burma]",MN:"Mongolia",MO:"Macau SAR China",MP:"Northern Mariana Islands",MQ:"Martinique",MR:"Mauritania",MS:"Montserrat",MT:"Malta",MU:"Mauritius",MV:"Maldives",MW:"Malawi",MX:"Mexico",MY:"Malaysia",MZ:"Mozambique",NA:"Namibia",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NP:"Nepal",NQ:"Dronning Maud Land",NR:"Nauru",NT:"Neutral Zone",NU:"Niue",NZ:"New Zealand",OM:"Oman",PA:"Panama",PC:"Pacific Islands Trust Territory",PE:"Peru",PF:"French Polynesia",PG:"Papua New Guinea",PH:"Philippines",PK:"Pakistan",PL:"Poland",PM:"Saint Pierre and Miquelon",PN:"Pitcairn Islands",PR:"Puerto Rico",PS:"Palestinian Territories",PT:"Portugal",PU:"U.S. Miscellaneous Pacific Islands",PW:"Palau",PY:"Paraguay",PZ:"Panama Canal Zone",QA:"Qatar",RE:"Réunion",RO:"Romania",RS:"Serbia",RU:"Russia",RW:"Rwanda",SA:"Saudi Arabia",SB:"Solomon Islands",SC:"Seychelles",SD:"Sudan",SE:"Sweden",SG:"Singapore",SH:"Saint Helena",SI:"Slovenia",SJ:"Svalbard and Jan Mayen",SK:"Slovakia",SL:"Sierra Leone",SM:"San Marino",SN:"Senegal",SO:"Somalia",SR:"Suriname",ST:"São Tomé and Príncipe",SU:"Union of Soviet Socialist Republics",SV:"El Salvador",SY:"Syria",SZ:"Swaziland",TC:"Turks and Caicos Islands",TD:"Chad",TF:"French Southern Territories",TG:"Togo",TH:"Thailand",TJ:"Tajikistan",TK:"Tokelau",TL:"Timor-Leste",TM:"Turkmenistan",TN:"Tunisia",TO:"Tonga",TR:"Turkey",TT:"Trinidad and Tobago",TV:"Tuvalu",TW:"Taiwan",TZ:"Tanzania",UA:"Ukraine",UG:"Uganda",UM:"U.S. Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VA:"Vatican City",VC:"Saint Vincent and the Grenadines",VD:"North Vietnam",VE:"Venezuela",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",VN:"Vietnam",VU:"Vanuatu",WF:"Wallis and Futuna",WK:"Wake Island",WS:"Samoa",YD:"People's Democratic Republic of Yemen",YE:"Yemen",YT:"Mayotte",ZA:"South Africa",ZM:"Zambia",ZW:"Zimbabwe",ZZ:"Unknown or Invalid Region" };

			var countriesArray = $.map(countries, function(value, key) {
			  return {
				value: value,
				data: key
			  };
			});

			// initialize autocomplete with custom appendTo
			$('#autocomplete-custom-append').autocomplete({
			  lookup: countriesArray
			});
			
		};
	   
	 /* AUTOSIZE */
			
		function init_autosize() {
			
			if(typeof $.fn.autosize !== 'undefined'){
			
			autosize($('.resizable_textarea'));
			
			}
			
		};  
	   
	   /* PARSLEY */
			
		function init_parsley() {
			
			if( typeof (parsley) === 'undefined'){ return; }
			console.log('init_parsley');
			
			$/*.listen*/('parsley:field:validate', function() {
			  validateFront();
			});
			$('#demo-form .btn').on('click', function() {
			  $('#demo-form').parsley().validate();
			  validateFront();
			});
			var validateFront = function() {
			  if (true === $('#demo-form').parsley().isValid()) {
				$('.bs-callout-info').removeClass('hidden');
				$('.bs-callout-warning').addClass('hidden');
			  } else {
				$('.bs-callout-info').addClass('hidden');
				$('.bs-callout-warning').removeClass('hidden');
			  }
			};
		  
			$/*.listen*/('parsley:field:validate', function() {
			  validateFront();
			});
			$('#demo-form2 .btn').on('click', function() {
			  $('#demo-form2').parsley().validate();
			  validateFront();
			});
			var validateFront = function() {
			  if (true === $('#demo-form2').parsley().isValid()) {
				$('.bs-callout-info').removeClass('hidden');
				$('.bs-callout-warning').addClass('hidden');
			  } else {
				$('.bs-callout-info').addClass('hidden');
				$('.bs-callout-warning').removeClass('hidden');
			  }
			};
			
			  try {
				hljs.initHighlightingOnLoad();
			  } catch (err) {}
			
		};
	   
		
		  /* INPUTS */
		  
			function onAddTag(tag) {
				alert("Added a tag: " + tag);
			  }

			  function onRemoveTag(tag) {
				alert("Removed a tag: " + tag);
			  }

			  function onChangeTag(input, tag) {
				alert("Changed a tag: " + tag);
			  }

			  //tags input
			function init_TagsInput() {
				  
				if(typeof $.fn.tagsInput !== 'undefined'){	
				 
				$('#tags_1').tagsInput({
				  width: 'auto'
				});
				
				}
				
		    };
	   
		/* SELECT2 */
	  
		function init_select2() {
			 
			if( typeof (select2) === 'undefined'){ return; }
			console.log('init_toolbox');
			 
			$(".select2_single").select2({
			  placeholder: "Select a state",
			  allowClear: true
			});
			$(".select2_group").select2({});
			$(".select2_multiple").select2({
			  maximumSelectionLength: 4,
			  placeholder: "With Max Selection limit 4",
			  allowClear: true
			});
			
		};
	   
	   /* WYSIWYG EDITOR */

		function init_wysiwyg() {
			
		if( typeof ($.fn.wysiwyg) === 'undefined'){ return; }
		console.log('init_wysiwyg');	
			
        function init_ToolbarBootstrapBindings() {
          var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
              'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
              'Times New Roman', 'Verdana'
            ],
            fontTarget = $('[title=Font]').siblings('.dropdown-menu');
          $.each(fonts, function(idx, fontName) {
            fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
          });
          $('a[title]').tooltip({
            container: 'body'
          });
          $('.dropdown-menu input').click(function() {
              return false;
            })
            .change(function() {
              $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
            })
            .keydown('esc', function() {
              this.value = '';
              $(this).change();
            });

          $('[data-role=magic-overlay]').each(function() {
            var overlay = $(this),
              target = $(overlay.data('target'));
            overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
          });

          if ("onwebkitspeechchange" in document.createElement("input")) {
            var editorOffset = $('#editor').offset();

            $('.voiceBtn').css('position', 'absolute').offset({
              top: editorOffset.top,
              left: editorOffset.left + $('#editor').innerWidth() - 35
            });
          } else {
            $('.voiceBtn').hide();
          }
        }

        function showErrorAlert(reason, detail) {
          var msg = '';
          if (reason === 'unsupported-file-type') {
            msg = "Unsupported format " + detail;
          } else {
            console.log("error uploading file", reason, detail);
          }
          $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
            '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
        }

       $('.editor-wrapper').each(function(){
			var id = $(this).attr('id');	//editor-one
			
			$(this).wysiwyg({
				toolbarSelector: '[data-target="#' + id + '"]',
				fileUploadError: showErrorAlert
			});	
		});
 
		
        window.prettyPrint;
        prettyPrint();
	
    };
	  
	/* CROPPER */
		
		function init_cropper() {
			
			
			if( typeof ($.fn.cropper) === 'undefined'){ return; }
			console.log('init_cropper');
			
			var $image = $('#image');
			var $download = $('#download');
			var $dataX = $('#dataX');
			var $dataY = $('#dataY');
			var $dataHeight = $('#dataHeight');
			var $dataWidth = $('#dataWidth');
			var $dataRotate = $('#dataRotate');
			var $dataScaleX = $('#dataScaleX');
			var $dataScaleY = $('#dataScaleY');
			var options = {
				  aspectRatio: 16 / 9,
				  preview: '.img-preview',
				  crop: function (e) {
					$dataX.val(Math.round(e.x));
					$dataY.val(Math.round(e.y));
					$dataHeight.val(Math.round(e.height));
					$dataWidth.val(Math.round(e.width));
					$dataRotate.val(e.rotate);
					$dataScaleX.val(e.scaleX);
					$dataScaleY.val(e.scaleY);
				  }
				};


			// Tooltip
			$('[data-toggle="tooltip"]').tooltip();


			// Cropper
			$image.on({
			  'build.cropper': function (e) {
				console.log(e.type);
			  },
			  'built.cropper': function (e) {
				console.log(e.type);
			  },
			  'cropstart.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'cropmove.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'cropend.cropper': function (e) {
				console.log(e.type, e.action);
			  },
			  'crop.cropper': function (e) {
				console.log(e.type, e.x, e.y, e.width, e.height, e.rotate, e.scaleX, e.scaleY);
			  },
			  'zoom.cropper': function (e) {
				console.log(e.type, e.ratio);
			  }
			}).cropper(options);


			// Buttons
			if (!$.isFunction(document.createElement('canvas').getContext)) {
			  $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
			}

			if (typeof document.createElement('cropper').style.transition === 'undefined') {
			  $('button[data-method="rotate"]').prop('disabled', true);
			  $('button[data-method="scale"]').prop('disabled', true);
			}


			// Download
			if (typeof $download[0].download === 'undefined') {
			  $download.addClass('disabled');
			}


			// Options
			$('.docs-toggles').on('change', 'input', function () {
			  var $this = $(this);
			  var name = $this.attr('name');
			  var type = $this.prop('type');
			  var cropBoxData;
			  var canvasData;

			  if (!$image.data('cropper')) {
				return;
			  }

			  if (type === 'checkbox') {
				options[name] = $this.prop('checked');
				cropBoxData = $image.cropper('getCropBoxData');
				canvasData = $image.cropper('getCanvasData');

				options.built = function () {
				  $image.cropper('setCropBoxData', cropBoxData);
				  $image.cropper('setCanvasData', canvasData);
				};
			  } else if (type === 'radio') {
				options[name] = $this.val();
			  }

			  $image.cropper('destroy').cropper(options);
			});


			// Methods
			$('.docs-buttons').on('click', '[data-method]', function () {
			  var $this = $(this);
			  var data = $this.data();
			  var $target;
			  var result;

			  if ($this.prop('disabled') || $this.hasClass('disabled')) {
				return;
			  }

			  if ($image.data('cropper') && data.method) {
				data = $.extend({}, data); // Clone a new one

				if (typeof data.target !== 'undefined') {
				  $target = $(data.target);

				  if (typeof data.option === 'undefined') {
					try {
					  data.option = JSON.parse($target.val());
					} catch (e) {
					  console.log(e.message);
					}
				  }
				}

				result = $image.cropper(data.method, data.option, data.secondOption);

				switch (data.method) {
				  case 'scaleX':
				  case 'scaleY':
					$(this).data('option', -data.option);
					break;

				  case 'getCroppedCanvas':
					if (result) {

					  // Bootstrap's Modal
					  $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

					  if (!$download.hasClass('disabled')) {
						$download.attr('href', result.toDataURL());
					  }
					}

					break;
				}

				if ($.isPlainObject(result) && $target) {
				  try {
					$target.val(JSON.stringify(result));
				  } catch (e) {
					console.log(e.message);
				  }
				}

			  }
			});

			// Keyboard
			$(document.body).on('keydown', function (e) {
			  if (!$image.data('cropper') || this.scrollTop > 300) {
				return;
			  }

			  switch (e.which) {
				case 37:
				  e.preventDefault();
				  $image.cropper('move', -1, 0);
				  break;

				case 38:
				  e.preventDefault();
				  $image.cropper('move', 0, -1);
				  break;

				case 39:
				  e.preventDefault();
				  $image.cropper('move', 1, 0);
				  break;

				case 40:
				  e.preventDefault();
				  $image.cropper('move', 0, 1);
				  break;
			  }
			});

			// Import image
			var $inputImage = $('#inputImage');
			var URL = window.URL || window.webkitURL;
			var blobURL;

			if (URL) {
			  $inputImage.change(function () {
				var files = this.files;
				var file;

				if (!$image.data('cropper')) {
				  return;
				}

				if (files && files.length) {
				  file = files[0];

				  if (/^image\/\w+$/.test(file.type)) {
					blobURL = URL.createObjectURL(file);
					$image.one('built.cropper', function () {

					  // Revoke when load complete
					  URL.revokeObjectURL(blobURL);
					}).cropper('reset').cropper('replace', blobURL);
					$inputImage.val('');
				  } else {
					window.alert('Please choose an image file.');
				  }
				}
			  });
			} else {
			  $inputImage.prop('disabled', true).parent().addClass('disabled');
			}
			
			
		};
		
		/* CROPPER --- end */  
	  
		/* KNOB */
	  
		function init_knob() {
		
				if( typeof ($.fn.knob) === 'undefined'){ return; }
				console.log('init_knob');
	
				$(".knob").knob({
				  change: function(value) {
					//console.log("change : " + value);
				  },
				  release: function(value) {
					//console.log(this.$.attr('value'));
					console.log("release : " + value);
				  },
				  cancel: function() {
					console.log("cancel : ", this);
				  },
				  /*format : function (value) {
				   return value + '%';
				   },*/
				  draw: function() {

					// "tron" case
					if (this.$.data('skin') == 'tron') {

					  this.cursorExt = 0.3;

					  var a = this.arc(this.cv) // Arc
						,
						pa // Previous arc
						, r = 1;

					  this.g.lineWidth = this.lineWidth;

					  if (this.o.displayPrevious) {
						pa = this.arc(this.v);
						this.g.beginPath();
						this.g.strokeStyle = this.pColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
						this.g.stroke();
					  }

					  this.g.beginPath();
					  this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
					  this.g.stroke();

					  this.g.lineWidth = 2;
					  this.g.beginPath();
					  this.g.strokeStyle = this.o.fgColor;
					  this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
					  this.g.stroke();

					  return false;
					}
				  }
				  
				});

				// Example of infinite knob, iPod click wheel
				var v, up = 0,
				  down = 0,
				  i = 0,
				  $idir = $("div.idir"),
				  $ival = $("div.ival"),
				  incr = function() {
					i++;
					$idir.show().html("+").fadeOut();
					$ival.html(i);
				  },
				  decr = function() {
					i--;
					$idir.show().html("-").fadeOut();
					$ival.html(i);
				  };
				$("input.infinite").knob({
				  min: 0,
				  max: 20,
				  stopper: false,
				  change: function() {
					if (v > this.cv) {
					  if (up) {
						decr();
						up = 0;
					  } else {
						up = 1;
						down = 0;
					  }
					} else {
					  if (v < this.cv) {
						if (down) {
						  incr();
						  down = 0;
						} else {
						  down = 1;
						  up = 0;
						}
					  }
					}
					v = this.cv;
				  }
				});
				
		};
	 
		/* INPUT MASK */
			
		function init_InputMask() {
			
			if( typeof ($.fn.inputmask) === 'undefined'){ return; }
			console.log('init_InputMask');
			
				$(":input").inputmask();
				
		};
	  
		/* COLOR PICKER */
			 
		function init_ColorPicker() {
			
			if( typeof ($.fn.colorpicker) === 'undefined'){ return; }
			console.log('init_ColorPicker');
			
				$('.demo1').colorpicker();
				$('.demo2').colorpicker();

				$('#demo_forceformat').colorpicker({
					format: 'rgba',
					horizontal: true
				});

				$('#demo_forceformat3').colorpicker({
					format: 'rgba',
				});

				$('.demo-auto').colorpicker();
			
		}; 
	   
	   
		/* ION RANGE SLIDER */
			
		function init_IonRangeSlider() {
			
			if( typeof ($.fn.ionRangeSlider) === 'undefined'){ return; }
			console.log('init_IonRangeSlider');
			
			$("#range_27").ionRangeSlider({
			  type: "double",
			  min: 1000000,
			  max: 2000000,
			  grid: true,
			  force_edges: true
			});
			$("#range").ionRangeSlider({
			  hide_min_max: true,
			  keyboard: true,
			  min: 0,
			  max: 5000,
			  from: 1000,
			  to: 4000,
			  type: 'double',
			  step: 1,
			  prefix: "$",
			  grid: true
			});
			$("#range_25").ionRangeSlider({
			  type: "double",
			  min: 1000000,
			  max: 2000000,
			  grid: true
			});
			$("#range_26").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 10000,
			  step: 500,
			  grid: true,
			  grid_snap: true
			});
			$("#range_31").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 100,
			  from: 30,
			  to: 70,
			  from_fixed: true
			});
			$(".range_min_max").ionRangeSlider({
			  type: "double",
			  min: 0,
			  max: 100,
			  from: 30,
			  to: 70,
			  max_interval: 50
			});
			$(".range_time24").ionRangeSlider({
			  min: +moment().subtract(12, "hours").format("X"),
			  max: +moment().format("X"),
			  from: +moment().subtract(6, "hours").format("X"),
			  grid: true,
			  force_edges: true,
			  prettify: function(num) {
				var m = moment(num, "X");
				return m.format("Do MMMM, HH:mm");
			  }
			});
			
		};
	   
	   
	   /* DATERANGEPICKER */
	   
		function init_daterangepicker() {

			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker');
		
			var cb = function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			  $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			};

			var optionSet1 = {
			  startDate: moment().subtract(29, 'days'),
			  endDate: moment(),
			  minDate: '01/01/2012',
			  maxDate: '12/31/2015',
			  dateLimit: {
				days: 60
			  },
			  showDropdowns: true,
			  showWeekNumbers: true,
			  timePicker: false,
			  timePickerIncrement: 1,
			  timePicker12Hour: true,
			  ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			  },
			  opens: 'left',
			  buttonClasses: ['btn btn-default'],
			  applyClass: 'btn-small btn-primary',
			  cancelClass: 'btn-small',
			  format: 'MM/DD/YYYY',
			  separator: ' to ',
			  locale: {
				applyLabel: 'Submit',
				cancelLabel: 'Clear',
				fromLabel: 'From',
				toLabel: 'To',
				customRangeLabel: 'Custom',
				daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				firstDay: 1
			  }
			};
			
			$('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
			$('#reportrange').daterangepicker(optionSet1, cb);
			$('#reportrange').on('show.daterangepicker', function() {
			  console.log("show event fired");
			});
			$('#reportrange').on('hide.daterangepicker', function() {
			  console.log("hide event fired");
			});
			$('#reportrange').on('apply.daterangepicker', function(ev, picker) {
			  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
			});
			$('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
			  console.log("cancel event fired");
			});
			$('#options1').click(function() {
			  $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
			});
			$('#options2').click(function() {
			  $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
			});
			$('#destroy').click(function() {
			  $('#reportrange').data('daterangepicker').remove();
			});
   
		}
   	   
	   function init_daterangepicker_right() {
	      
				if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
				console.log('init_daterangepicker_right');
		  
				var cb = function(start, end, label) {
				  console.log(start.toISOString(), end.toISOString(), label);
				  $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
				};

				var optionSet1 = {
				  startDate: moment().subtract(29, 'days'),
				  endDate: moment(),
				  minDate: '01/01/2012',
				  maxDate: '12/31/2020',
				  dateLimit: {
					days: 60
				  },
				  showDropdowns: true,
				  showWeekNumbers: true,
				  timePicker: false,
				  timePickerIncrement: 1,
				  timePicker12Hour: true,
				  ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				  },
				  opens: 'right',
				  buttonClasses: ['btn btn-default'],
				  applyClass: 'btn-small btn-primary',
				  cancelClass: 'btn-small',
				  format: 'MM/DD/YYYY',
				  separator: ' to ',
				  locale: {
					applyLabel: 'Submit',
					cancelLabel: 'Clear',
					fromLabel: 'From',
					toLabel: 'To',
					customRangeLabel: 'Custom',
					daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
					monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					firstDay: 1
				  }
				};

				$('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

				$('#reportrange_right').daterangepicker(optionSet1, cb);

				$('#reportrange_right').on('show.daterangepicker', function() {
				  console.log("show event fired");
				});
				$('#reportrange_right').on('hide.daterangepicker', function() {
				  console.log("hide event fired");
				});
				$('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
				  console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
				});
				$('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
				  console.log("cancel event fired");
				});

				$('#options1').click(function() {
				  $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
				});

				$('#options2').click(function() {
				  $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
				});

				$('#destroy').click(function() {
				  $('#reportrange_right').data('daterangepicker').remove();
				});

	   }
	   
	    function init_daterangepicker_single_call() {
	      
			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker_single_call');
		   
			$('#single_cal1').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_1"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal2').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_2"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal3').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_3"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
			$('#single_cal4').daterangepicker({
			  singleDatePicker: true,
			  singleClasses: "picker_4"
			}, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});
  
  
		}
		
		 
		function init_daterangepicker_reservation() {
	      
			if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
			console.log('init_daterangepicker_reservation');
		 
			$('#reservation').daterangepicker(null, function(start, end, label) {
			  console.log(start.toISOString(), end.toISOString(), label);
			});

			$('#reservation-time').daterangepicker({
			  timePicker: true,
			  timePickerIncrement: 30,
			  locale: {
				format: 'MM/DD/YYYY h:mm A'
			  }
			});
	
		}
	   
	   /* SMART WIZARD */
		
		function init_SmartWizard() {
			
			if( typeof ($.fn.smartWizard) === 'undefined'){ return; }
			console.log('init_SmartWizard');
			
			$('#wizard').smartWizard();

			$('#wizard_verticle').smartWizard({
			  transitionEffect: 'slide'
			});

			$('.buttonNext').addClass('btn btn-success');
			$('.buttonPrevious').addClass('btn btn-primary');
			$('.buttonFinish').addClass('btn btn-default');
			
		};
	   
	   
	  /* VALIDATOR */

	  function init_validator () {
		 
		if( typeof (validator) === 'undefined'){ return; }
		console.log('init_validator'); 
	  
	  // initialize the validator function
      validator.message.date = 'not a real date';

      // validate a field on "blur" event, a 'select' on 'change' event & a '.reuired' classed multifield on 'keyup':
      $('form')
        .on('blur', 'input[required], input.optional, select.required', validator.checkField)
        .on('change', 'select.required', validator.checkField)
        .on('keypress', 'input[required][pattern]', validator.keypress);

      $('.multi.required').on('keyup blur', 'input', function() {
        validator.checkField.apply($(this).siblings().last()[0]);
      });

      $('form').submit(function(e) {
        e.preventDefault();
        var submit = true;

        // evaluate the form using generic validaing
        if (!validator.checkAll($(this))) {
          submit = false;
        }

        if (submit)
          this.submit();

        return false;
		});
	  
	  };
	   
	  	/* PNotify */
			
		function init_PNotify() {
			
			if( typeof (PNotify) === 'undefined'){ return; }
			console.log('init_PNotify');
			
			new PNotify({
			  title: "PNotify",
			  type: "info",
			  text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
			  nonblock: {
				  nonblock: true
			  },
			  addclass: 'dark',
			  styling: 'bootstrap3',
			  hide: false,
			  before_close: function(PNotify) {
				PNotify.update({
				  title: PNotify.options.title + " - Enjoy your Stay",
				  before_close: null
				});

				PNotify.queueRemove();

				return false;
			  }
			});

		}; 
	   
	   
	   /* CUSTOM NOTIFICATION */
			
		function init_CustomNotification() {
			
			console.log('run_customtabs');
			
			if( typeof (CustomTabs) === 'undefined'){ return; }
			console.log('init_CustomTabs');
			
			var cnt = 10;

			TabbedNotification = function(options) {
			  var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
				"</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

			  if (!document.getElementById('custom_notifications')) {
				alert('doesnt exists');
			  } else {
				$('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
				$('#custom_notifications #notif-group').append(message);
				cnt++;
				CustomTabs(options);
			  }
			};

			CustomTabs = function(options) {
			  $('.tabbed_notifications > div').hide();
			  $('.tabbed_notifications > div:first-of-type').show();
			  $('#custom_notifications').removeClass('dsp_none');
			  $('.notifications a').click(function(e) {
				e.preventDefault();
				var $this = $(this),
				  tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
				  others = $this.closest('li').siblings().children('a'),
				  target = $this.attr('href');
				others.removeClass('active');
				$this.addClass('active');
				$(tabbed_notifications).children('div').hide();
				$(target).show();
			  });
			};

			CustomTabs();

			var tabid = idname = '';

			$(document).on('click', '.notification_close', function(e) {
			  idname = $(this).parent().parent().attr("id");
			  tabid = idname.substr(-2);
			  $('#ntf' + tabid).remove();
			  $('#ntlink' + tabid).parent().remove();
			  $('.notifications a').first().addClass('active');
			  $('#notif-group div').first().css('display', 'block');
			});
			
		};
		
			/* EASYPIECHART */
			
			function init_EasyPieChart() {
				
				if( typeof ($.fn.easyPieChart) === 'undefined'){ return; }
				console.log('init_EasyPieChart');
				
				$('.chart').easyPieChart({
				  easing: 'easeOutElastic',
				  delay: 3000,
				  barColor: '#26B99A',
				  trackColor: '#fff',
				  scaleColor: false,
				  lineWidth: 20,
				  trackWidth: 16,
				  lineCap: 'butt',
				  onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				  }
				});
				var chart = window.chart = $('.chart').data('easyPieChart');
				$('.js_update').on('click', function() {
				  chart.update(Math.random() * 200 - 100);
				});

				//hover and retain popover when on popover content
				var originalLeave = $.fn.popover.Constructor.prototype.leave;
				$.fn.popover.Constructor.prototype.leave = function(obj) {
				  var self = obj instanceof this.constructor ?
					obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
				  var container, timeout;

				  originalLeave.call(this, obj);

				  if (obj.currentTarget) {
					container = $(obj.currentTarget).siblings('.popover');
					timeout = self.timeout;
					container.one('mouseenter', function() {
					  //We entered the actual popover – call off the dogs
					  clearTimeout(timeout);
					  //Let's monitor popover content instead
					  container.one('mouseleave', function() {
						$.fn.popover.Constructor.prototype.leave.call(self, self);
					  });
					});
				  }
				};

				$('body').popover({
				  selector: '[data-popover]',
				  trigger: 'click hover',
				  delay: {
					show: 50,
					hide: 400
				  }
				});
				
			};
	   
		
		function init_charts() {
			
				console.log('run_charts  typeof [' + typeof (Chart) + ']');
			
				if( typeof (Chart) === 'undefined'){ return; }
				
				console.log('init_charts');
			
				
				Chart.defaults.global.legend = {
					enabled: false
				};
				
				

			if ($('#canvas_line').length ){
				
				var canvas_line_00 = new Chart(document.getElementById("canvas_line"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});
				
			}

			
			if ($('#canvas_line1').length ){
			
				var canvas_line_01 = new Chart(document.getElementById("canvas_line1"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});
			
			}
				
				
			if ($('#canvas_line2').length ){		
			
				var canvas_line_02 = new Chart(document.getElementById("canvas_line2"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});

			}	
			
			
			if ($('#canvas_line3').length ){
			
				var canvas_line_03 = new Chart(document.getElementById("canvas_line3"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});

			}	
			
			
			if ($('#canvas_line4').length ){
				
				var canvas_line_04 = new Chart(document.getElementById("canvas_line4"), {
				  type: 'line',
				  data: {
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [{
					  label: "My First dataset",
					  backgroundColor: "rgba(38, 185, 154, 0.31)",
					  borderColor: "rgba(38, 185, 154, 0.7)",
					  pointBorderColor: "rgba(38, 185, 154, 0.7)",
					  pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(220,220,220,1)",
					  pointBorderWidth: 1,
					  data: [31, 74, 6, 39, 20, 85, 7]
					}, {
					  label: "My Second dataset",
					  backgroundColor: "rgba(3, 88, 106, 0.3)",
					  borderColor: "rgba(3, 88, 106, 0.70)",
					  pointBorderColor: "rgba(3, 88, 106, 0.70)",
					  pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					  pointHoverBackgroundColor: "#fff",
					  pointHoverBorderColor: "rgba(151,187,205,1)",
					  pointBorderWidth: 1,
					  data: [82, 23, 66, 9, 99, 4, 2]
					}]
				  },
				});		
				
			}
			
				
			  // Line chart
			 
			if ($('#lineChart').length ){	
			
			  var ctx = document.getElementById("lineChart");
			  var lineChart = new Chart(ctx, {
				type: 'line',
				data: {
				  labels: ["January", "February", "March", "April", "May", "June", "July"],
				  datasets: [{
					label: "My First dataset",
					backgroundColor: "rgba(38, 185, 154, 0.31)",
					borderColor: "rgba(38, 185, 154, 0.7)",
					pointBorderColor: "rgba(38, 185, 154, 0.7)",
					pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointBorderWidth: 1,
					data: [31, 74, 6, 39, 20, 85, 7]
				  }, {
					label: "My Second dataset",
					backgroundColor: "rgba(3, 88, 106, 0.3)",
					borderColor: "rgba(3, 88, 106, 0.70)",
					pointBorderColor: "rgba(3, 88, 106, 0.70)",
					pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
					pointHoverBackgroundColor: "#fff",
					pointHoverBorderColor: "rgba(151,187,205,1)",
					pointBorderWidth: 1,
					data: [82, 23, 66, 9, 99, 4, 2]
				  }]
				},
			  });
			
			}
				
			  // Bar chart
			  
			if ($('#mybarChart').length ){ 
			  
			  var ctx = document.getElementById("mybarChart");
			  var mybarChart = new Chart(ctx, {
				type: 'bar',
				data: {
				  labels: ["January", "February", "March", "April", "May", "June", "July"],
				  datasets: [{
					label: '# of Votes',
					backgroundColor: "#26B99A",
					data: [51, 30, 40, 28, 92, 50, 45]
				  }, {
					label: '# of Votes',
					backgroundColor: "#03586A",
					data: [41, 56, 25, 48, 72, 34, 12]
				  }]
				},

				options: {
				  scales: {
					yAxes: [{
					  ticks: {
						beginAtZero: true
					  }
					}]
				  }
				}
			  });
			  
			} 
			  

			  // Doughnut chart
			  
			if ($('#canvasDoughnut').length ){ 
			  
			  var ctx = document.getElementById("canvasDoughnut");
			  var data = {
				labels: [
				  "Dark Grey",
				  "Purple Color",
				  "Gray Color",
				  "Green Color",
				  "Blue Color"
				],
				datasets: [{
				  data: [120, 50, 140, 180, 100],
				  backgroundColor: [
					"#455C73",
					"#9B59B6",
					"#BDC3C7",
					"#26B99A",
					"#3498DB"
				  ],
				  hoverBackgroundColor: [
					"#34495E",
					"#B370CF",
					"#CFD4D8",
					"#36CAAB",
					"#49A9EA"
				  ]

				}]
			  };

			  var canvasDoughnut = new Chart(ctx, {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: data
			  });
			 
			} 

			  // Radar chart
			  
			if ($('#canvasRadar').length ){ 
			  
			  var ctx = document.getElementById("canvasRadar");
			  var data = {
				labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
				datasets: [{
				  label: "My First dataset",
				  backgroundColor: "rgba(3, 88, 106, 0.2)",
				  borderColor: "rgba(3, 88, 106, 0.80)",
				  pointBorderColor: "rgba(3, 88, 106, 0.80)",
				  pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
				  pointHoverBackgroundColor: "#fff",
				  pointHoverBorderColor: "rgba(220,220,220,1)",
				  data: [65, 59, 90, 81, 56, 55, 40]
				}, {
				  label: "My Second dataset",
				  backgroundColor: "rgba(38, 185, 154, 0.2)",
				  borderColor: "rgba(38, 185, 154, 0.85)",
				  pointColor: "rgba(38, 185, 154, 0.85)",
				  pointStrokeColor: "#fff",
				  pointHighlightFill: "#fff",
				  pointHighlightStroke: "rgba(151,187,205,1)",
				  data: [28, 48, 40, 19, 96, 27, 100]
				}]
			  };

			  var canvasRadar = new Chart(ctx, {
				type: 'radar',
				data: data,
			  });
			
			}
			
			
			  // Pie chart
			  if ($('#pieChart').length ){
				  
				  var ctx = document.getElementById("pieChart");
				  var data = {
					datasets: [{
					  data: [120, 50, 140, 180, 100],
					  backgroundColor: [
						"#455C73",
						"#9B59B6",
						"#BDC3C7",
						"#26B99A",
						"#3498DB"
					  ],
					  label: 'My dataset' // for legend
					}],
					labels: [
					  "Dark Gray",
					  "Purple",
					  "Gray",
					  "Green",
					  "Blue"
					]
				  };

				  var pieChart = new Chart(ctx, {
					data: data,
					type: 'pie',
					otpions: {
					  legend: false
					}
				  });
				  
			  }
			
			  
			  // PolarArea chart

			if ($('#polarArea').length ){

				var ctx = document.getElementById("polarArea");
				var data = {
				datasets: [{
				  data: [120, 50, 140, 180, 100],
				  backgroundColor: [
					"#455C73",
					"#9B59B6",
					"#BDC3C7",
					"#26B99A",
					"#3498DB"
				  ],
				  label: 'My dataset'
				}],
				labels: [
				  "Dark Gray",
				  "Purple",
				  "Gray",
				  "Green",
				  "Blue"
				]
				};

				var polarArea = new Chart(ctx, {
				data: data,
				type: 'polarArea',
				options: {
				  scale: {
					ticks: {
					  beginAtZero: true
					}
				  }
				}
				});
			
			}
		}

		/* COMPOSE */
		
		function init_compose() {
		
			if( typeof ($.fn.slideToggle) === 'undefined'){ return; }
			console.log('init_compose');
		
			$('#compose, .compose-close').click(function(){
				$('.compose').slideToggle();
			});
		
		};
	   
	   	/* CALENDAR */
		  
		    function  init_calendar() {
					
				if( typeof ($.fn.fullCalendar) === 'undefined'){ return; }
				console.log('init_calendar');
					
				var date = new Date(),
					d = date.getDate(),
					m = date.getMonth(),
					y = date.getFullYear(),
					started,
					categoryClass;

				var calendar = $('#calendar').fullCalendar({
				  header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay,listMonth'
				  },
				  selectable: true,
				  selectHelper: true,
				  select: function(start, end, allDay) {
					$('#fc_create').click();

					started = start;
					ended = end;

					$(".antosubmit").on("click", function() {
					  var title = $("#title").val();
					  if (end) {
						ended = end;
					  }

					  categoryClass = $("#event_type").val();

					  if (title) {
						calendar.fullCalendar('renderEvent', {
							title: title,
							start: started,
							end: end,
							allDay: allDay
						  },
						  true // make the event "stick"
						);
					  }

					  $('#title').val('');

					  calendar.fullCalendar('unselect');

					  $('.antoclose').click();

					  return false;
					});
				  },
				  eventClick: function(calEvent, jsEvent, view) {
					$('#fc_edit').click();
					$('#title2').val(calEvent.title);

					categoryClass = $("#event_type").val();

					$(".antosubmit2").on("click", function() {
					  calEvent.title = $("#title2").val();

					  calendar.fullCalendar('updateEvent', calEvent);
					  $('.antoclose2').click();
					});

					calendar.fullCalendar('unselect');
				  },
				  editable: true,
				  events: [{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				  }, {
					title: 'Long Event',
					start: new Date(y, m, d - 5),
					end: new Date(y, m, d - 2)
				  }, {
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				  }, {
					title: 'Lunch',
					start: new Date(y, m, d + 14, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				  }, {
					title: 'Birthday Party',
					start: new Date(y, m, d + 1, 19, 0),
					end: new Date(y, m, d + 1, 22, 30),
					allDay: false
				  }, {
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				  }]
				});
				
			};
	   
		/* DATA TABLES */
			
			function init_DataTables() {
				
				console.log('run_datatables');
				
				if( typeof ($.fn.DataTable) === 'undefined'){ return; }
				console.log('init_DataTables');
				
				var handleDataTableButtons = function() {
				  if ($("#datatable-buttons").length) {
					$("#datatable-buttons").DataTable({
					  dom: "Bfrtip",
					  buttons: [
						{
						  extend: "copy",
						  className: "btn-sm"
						},
						{
						  extend: "csv",
						  className: "btn-sm"
						},
						{
						  extend: "excel",
						  className: "btn-sm"
						},
						{
						  extend: "pdfHtml5",
						  className: "btn-sm"
						},
						{
						  extend: "print",
						  className: "btn-sm"
						},
					  ],
					  responsive: true
					});
				  }
				};

				TableManageButtons = function() {
				  "use strict";
				  return {
					init: function() {
					  handleDataTableButtons();
					}
				  };
				}();

				$('#datatable').dataTable();

				$('#datatable-keytable').DataTable({
				  keys: true
				});

				$('#datatable-responsive').DataTable();

				$('#datatable-scroller').DataTable({
				  ajax: "js/datatables/json/scroller-demo.json",
				  deferRender: true,
				  scrollY: 380,
				  scrollCollapse: true,
				  scroller: true
				});

				$('#datatable-fixed-header').DataTable({
				  fixedHeader: true
				});

				var $datatable = $('#datatable-checkbox');

				$datatable.dataTable({
				  'order': [[ 1, 'asc' ]],
				  'columnDefs': [
					{ orderable: false, targets: [0] }
				  ]
				});
				$datatable.on('draw.dt', function() {
				  $('checkbox input').iCheck({
					checkboxClass: 'icheckbox_flat-green'
				  });
				});

				TableManageButtons.init();
				
			};
	   
			/* CHART - MORRIS  */
		
		function init_morris_charts() {
			
			if( typeof (Morris) === 'undefined'){ return; }
			console.log('init_morris_charts');
			
			if ($('#graph_bar').length){ 
			
				Morris.Bar({
				  element: 'graph_bar',
				  data: [
					{device: 'iPhone 4', geekbench: 380},
					{device: 'iPhone 4S', geekbench: 655},
					{device: 'iPhone 3GS', geekbench: 275},
					{device: 'iPhone 5', geekbench: 1571},
					{device: 'iPhone 5S', geekbench: 655},
					{device: 'iPhone 6', geekbench: 2154},
					{device: 'iPhone 6 Plus', geekbench: 1144},
					{device: 'iPhone 6S', geekbench: 2371},
					{device: 'iPhone 6S Plus', geekbench: 1471},
					{device: 'Other', geekbench: 1371}
				  ],
				  xkey: 'device',
				  ykeys: ['geekbench'],
				  labels: ['Geekbench'],
				  barRatio: 0.4,
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  xLabelAngle: 35,
				  hideHover: 'auto',
				  resize: true
				});

			}	
			
			if ($('#graph_bar_group').length ){
			
				Morris.Bar({
				  element: 'graph_bar_group',
				  data: [
					{"period": "2016-10-01", "licensed": 807, "sorned": 660},
					{"period": "2016-09-30", "licensed": 1251, "sorned": 729},
					{"period": "2016-09-29", "licensed": 1769, "sorned": 1018},
					{"period": "2016-09-20", "licensed": 2246, "sorned": 1461},
					{"period": "2016-09-19", "licensed": 2657, "sorned": 1967},
					{"period": "2016-09-18", "licensed": 3148, "sorned": 2627},
					{"period": "2016-09-17", "licensed": 3471, "sorned": 3740},
					{"period": "2016-09-16", "licensed": 2871, "sorned": 2216},
					{"period": "2016-09-15", "licensed": 2401, "sorned": 1656},
					{"period": "2016-09-10", "licensed": 2115, "sorned": 1022}
				  ],
				  xkey: 'period',
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  ykeys: ['licensed', 'sorned'],
				  labels: ['Licensed', 'SORN'],
				  hideHover: 'auto',
				  xLabelAngle: 60,
				  resize: true
				});

			}
			
			if ($('#graphx').length ){
			
				Morris.Bar({
				  element: 'graphx',
				  data: [
					{x: '2015 Q1', y: 2, z: 3, a: 4},
					{x: '2015 Q2', y: 3, z: 5, a: 6},
					{x: '2015 Q3', y: 4, z: 3, a: 2},
					{x: '2015 Q4', y: 2, z: 4, a: 5}
				  ],
				  xkey: 'x',
				  ykeys: ['y', 'z', 'a'],
				  barColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  hideHover: 'auto',
				  labels: ['Y', 'Z', 'A'],
				  resize: true
				}).on('click', function (i, row) {
					console.log(i, row);
				});

			}
			
			if ($('#graph_area').length ){
			
				Morris.Area({
				  element: 'graph_area',
				  data: [
					{period: '2014 Q1', iphone: 2666, ipad: null, itouch: 2647},
					{period: '2014 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
					{period: '2014 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
					{period: '2014 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
					{period: '2015 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
					{period: '2015 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
					{period: '2015 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
					{period: '2015 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
					{period: '2016 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
					{period: '2016 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
				  ],
				  xkey: 'period',
				  ykeys: ['iphone', 'ipad', 'itouch'],
				  lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  labels: ['iPhone', 'iPad', 'iPod Touch'],
				  pointSize: 2,
				  hideHover: 'auto',
				  resize: true
				});

			}
			
			if ($('#graph_donut').length ){
			
				Morris.Donut({
				  element: 'graph_donut',
				  data: [
					{label: 'Jam', value: 25},
					{label: 'Frosted', value: 40},
					{label: 'Custard', value: 25},
					{label: 'Sugar', value: 10}
				  ],
				  colors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  formatter: function (y) {
					return y + "%";
				  },
				  resize: true
				});

			}
			
			if ($('#graph_line').length ){
			
				Morris.Line({
				  element: 'graph_line',
				  xkey: 'year',
				  ykeys: ['value'],
				  labels: ['Value'],
				  hideHover: 'auto',
				  lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
				  data: [
					{year: '2012', value: 20},
					{year: '2013', value: 10},
					{year: '2014', value: 5},
					{year: '2015', value: 5},
					{year: '2016', value: 20}
				  ],
				  resize: true
				});

				$MENU_TOGGLE.on('click', function() {
				  $(window).resize();
				});
			
			}
			
		};
	   
		
		
		/* ECHRTS */
	
		
		function init_echarts() {
		
				if( typeof (echarts) === 'undefined'){ return; }
				console.log('init_echarts');
			
		
				  var theme = {
				  color: [
					  '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
					  '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
				  ],

				  title: {
					  itemGap: 8,
					  textStyle: {
						  fontWeight: 'normal',
						  color: '#408829'
					  }
				  },

				  dataRange: {
					  color: ['#1f610a', '#97b58d']
				  },

				  toolbox: {
					  color: ['#408829', '#408829', '#408829', '#408829']
				  },

				  tooltip: {
					  backgroundColor: 'rgba(0,0,0,0.5)',
					  axisPointer: {
						  type: 'line',
						  lineStyle: {
							  color: '#408829',
							  type: 'dashed'
						  },
						  crossStyle: {
							  color: '#408829'
						  },
						  shadowStyle: {
							  color: 'rgba(200,200,200,0.3)'
						  }
					  }
				  },

				  dataZoom: {
					  dataBackgroundColor: '#eee',
					  fillerColor: 'rgba(64,136,41,0.2)',
					  handleColor: '#408829'
				  },
				  grid: {
					  borderWidth: 0
				  },

				  categoryAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },

				  valueAxis: {
					  axisLine: {
						  lineStyle: {
							  color: '#408829'
						  }
					  },
					  splitArea: {
						  show: true,
						  areaStyle: {
							  color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
						  }
					  },
					  splitLine: {
						  lineStyle: {
							  color: ['#eee']
						  }
					  }
				  },
				  timeline: {
					  lineStyle: {
						  color: '#408829'
					  },
					  controlStyle: {
						  normal: {color: '#408829'},
						  emphasis: {color: '#408829'}
					  }
				  },

				  k: {
					  itemStyle: {
						  normal: {
							  color: '#68a54a',
							  color0: '#a9cba2',
							  lineStyle: {
								  width: 1,
								  color: '#408829',
								  color0: '#86b379'
							  }
						  }
					  }
				  },
				  map: {
					  itemStyle: {
						  normal: {
							  areaStyle: {
								  color: '#ddd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  },
						  emphasis: {
							  areaStyle: {
								  color: '#99d2dd'
							  },
							  label: {
								  textStyle: {
									  color: '#c12e34'
								  }
							  }
						  }
					  }
				  },
				  force: {
					  itemStyle: {
						  normal: {
							  linkStyle: {
								  strokeColor: '#408829'
							  }
						  }
					  }
				  },
				  chord: {
					  padding: 4,
					  itemStyle: {
						  normal: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  },
						  emphasis: {
							  lineStyle: {
								  width: 1,
								  color: 'rgba(128, 128, 128, 0.5)'
							  },
							  chordStyle: {
								  lineStyle: {
									  width: 1,
									  color: 'rgba(128, 128, 128, 0.5)'
								  }
							  }
						  }
					  }
				  },
				  gauge: {
					  startAngle: 225,
					  endAngle: -45,
					  axisLine: {
						  show: true,
						  lineStyle: {
							  color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
							  width: 8
						  }
					  },
					  axisTick: {
						  splitNumber: 10,
						  length: 12,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  axisLabel: {
						  textStyle: {
							  color: 'auto'
						  }
					  },
					  splitLine: {
						  length: 18,
						  lineStyle: {
							  color: 'auto'
						  }
					  },
					  pointer: {
						  length: '90%',
						  color: 'auto'
					  },
					  title: {
						  textStyle: {
							  color: '#333'
						  }
					  },
					  detail: {
						  textStyle: {
							  color: 'auto'
						  }
					  }
				  },
				  textStyle: {
					  fontFamily: 'Arial, Verdana, sans-serif'
				  }
			  };

			  
			  //echart Bar
			  
			if ($('#mainb').length ){
			  
				  var echartBar = echarts.init(document.getElementById('mainb'), theme);

				  echartBar.setOption({
					title: {
					  text: 'Graph title',
					  subtext: 'Graph Sub-text'
					},
					tooltip: {
					  trigger: 'axis'
					},
					legend: {
					  data: ['sales', 'purchases']
					},
					toolbox: {
					  show: false
					},
					calculable: false,
					xAxis: [{
					  type: 'category',
					  data: ['1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?']
					}],
					yAxis: [{
					  type: 'value'
					}],
					series: [{
					  name: 'sales',
					  type: 'bar',
					  data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
					  markPoint: {
						data: [{
						  type: 'max',
						  name: '???'
						}, {
						  type: 'min',
						  name: '???'
						}]
					  },
					  markLine: {
						data: [{
						  type: 'average',
						  name: '???'
						}]
					  }
					}, {
					  name: 'purchases',
					  type: 'bar',
					  data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					  markPoint: {
						data: [{
						  name: 'sales',
						  value: 182.2,
						  xAxis: 7,
						  yAxis: 183,
						}, {
						  name: 'purchases',
						  value: 2.3,
						  xAxis: 11,
						  yAxis: 3
						}]
					  },
					  markLine: {
						data: [{
						  type: 'average',
						  name: '???'
						}]
					  }
					}]
				  });

			}
			  
			  
			  
			  
			   //echart Radar
			  
			if ($('#echart_sonar').length ){ 
			  
			  var echartRadar = echarts.init(document.getElementById('echart_sonar'), theme);

			  echartRadar.setOption({
				title: {
				  text: 'Budget vs spending',
				  subtext: 'Subtitle'
				},
				 tooltip: {
					trigger: 'item'
				},
				legend: {
				  orient: 'vertical',
				  x: 'right',
				  y: 'bottom',
				  data: ['Allocated Budget', 'Actual Spending']
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				polar: [{
				  indicator: [{
					text: 'Sales',
					max: 6000
				  }, {
					text: 'Administration',
					max: 16000
				  }, {
					text: 'Information Techology',
					max: 30000
				  }, {
					text: 'Customer Support',
					max: 38000
				  }, {
					text: 'Development',
					max: 52000
				  }, {
					text: 'Marketing',
					max: 25000
				  }]
				}],
				calculable: true,
				series: [{
				  name: 'Budget vs spending',
				  type: 'radar',
				  data: [{
					value: [4300, 10000, 28000, 35000, 50000, 19000],
					name: 'Allocated Budget'
				  }, {
					value: [5000, 14000, 28000, 31000, 42000, 21000],
					name: 'Actual Spending'
				  }]
				}]
			  });

			} 
			  
			   //echart Funnel
			  
			if ($('#echart_pyramid').length ){ 
			  
			  var echartFunnel = echarts.init(document.getElementById('echart_pyramid'), theme);

			  echartFunnel.setOption({
				title: {
				  text: 'Echart Pyramid Graph',
				  subtext: 'Subtitle'
				},
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				legend: {
				  data: ['Something #1', 'Something #2', 'Something #3', 'Something #4', 'Something #5'],
				  orient: 'vertical',
				  x: 'left',
				  y: 'bottom'
				},
				calculable: true,
				series: [{
				  name: '漏斗图',
				  type: 'funnel',
				  width: '40%',
				  data: [{
					value: 60,
					name: 'Something #1'
				  }, {
					value: 40,
					name: 'Something #2'
				  }, {
					value: 20,
					name: 'Something #3'
				  }, {
					value: 80,
					name: 'Something #4'
				  }, {
					value: 100,
					name: 'Something #5'
				  }]
				}]
			  });

			} 
			  
			   //echart Gauge
			  
			if ($('#echart_gauge').length ){ 
			  
			  var echartGauge = echarts.init(document.getElementById('echart_gauge'), theme);

			  echartGauge.setOption({
				tooltip: {
				  formatter: "{a} <br/>{b} : {c}%"
				},
				toolbox: {
				  show: true,
				  feature: {
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: 'Performance',
				  type: 'gauge',
				  center: ['50%', '50%'],
				  startAngle: 140,
				  endAngle: -140,
				  min: 0,
				  max: 100,
				  precision: 0,
				  splitNumber: 10,
				  axisLine: {
					show: true,
					lineStyle: {
					  color: [
						[0.2, 'lightgreen'],
						[0.4, 'orange'],
						[0.8, 'skyblue'],
						[1, '#ff4500']
					  ],
					  width: 30
					}
				  },
				  axisTick: {
					show: true,
					splitNumber: 5,
					length: 8,
					lineStyle: {
					  color: '#eee',
					  width: 1,
					  type: 'solid'
					}
				  },
				  axisLabel: {
					show: true,
					formatter: function(v) {
					  switch (v + '') {
						case '10':
						  return 'a';
						case '30':
						  return 'b';
						case '60':
						  return 'c';
						case '90':
						  return 'd';
						default:
						  return '';
					  }
					},
					textStyle: {
					  color: '#333'
					}
				  },
				  splitLine: {
					show: true,
					length: 30,
					lineStyle: {
					  color: '#eee',
					  width: 2,
					  type: 'solid'
					}
				  },
				  pointer: {
					length: '80%',
					width: 8,
					color: 'auto'
				  },
				  title: {
					show: true,
					offsetCenter: ['-65%', -10],
					textStyle: {
					  color: '#333',
					  fontSize: 15
					}
				  },
				  detail: {
					show: true,
					backgroundColor: 'rgba(0,0,0,0)',
					borderWidth: 0,
					borderColor: '#ccc',
					width: 100,
					height: 40,
					offsetCenter: ['-60%', 10],
					formatter: '{value}%',
					textStyle: {
					  color: 'auto',
					  fontSize: 30
					}
				  },
				  data: [{
					value: 50,
					name: 'Performance'
				  }]
				}]
			  });

			} 
			  
			   //echart Line
			  
			if ($('#echart_line').length ){ 
			  
			  var echartLine = echarts.init(document.getElementById('echart_line'), theme);

			  echartLine.setOption({
				title: {
				  text: 'Line Graph',
				  subtext: 'Subtitle'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  x: 220,
				  y: 40,
				  data: ['Intent', 'Pre-order', 'Deal']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  title: {
						line: 'Line',
						bar: 'Bar',
						stack: 'Stack',
						tiled: 'Tiled'
					  },
					  type: ['line', 'bar', 'stack', 'tiled']
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				xAxis: [{
				  type: 'category',
				  boundaryGap: false,
				  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				}],
				yAxis: [{
				  type: 'value'
				}],
				series: [{
				  name: 'Deal',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: [10, 12, 21, 54, 260, 830, 710]
				}, {
				  name: 'Pre-order',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: [30, 182, 434, 791, 390, 30, 10]
				}, {
				  name: 'Intent',
				  type: 'line',
				  smooth: true,
				  itemStyle: {
					normal: {
					  areaStyle: {
						type: 'default'
					  }
					}
				  },
				  data: [1320, 1132, 601, 234, 120, 90, 20]
				}]
			  });

			} 
			  
			   //echart Scatter
			  
			if ($('#echart_scatter').length ){ 
			  
			  var echartScatter = echarts.init(document.getElementById('echart_scatter'), theme);

			  echartScatter.setOption({
				title: {
				  text: 'Scatter Graph',
				  subtext: 'Heinz  2003'
				},
				tooltip: {
				  trigger: 'axis',
				  showDelay: 0,
				  axisPointer: {
					type: 'cross',
					lineStyle: {
					  type: 'dashed',
					  width: 1
					}
				  }
				},
				legend: {
				  data: ['Data2', 'Data1']
				},
				toolbox: {
				  show: true,
				  feature: {
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				xAxis: [{
				  type: 'value',
				  scale: true,
				  axisLabel: {
					formatter: '{value} cm'
				  }
				}],
				yAxis: [{
				  type: 'value',
				  scale: true,
				  axisLabel: {
					formatter: '{value} kg'
				  }
				}],
				series: [{
				  name: 'Data1',
				  type: 'scatter',
				  tooltip: {
					trigger: 'item',
					formatter: function(params) {
					  if (params.value.length > 1) {
						return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
					  } else {
						return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
					  }
					}
				  },
				  data: [
					[161.2, 51.6],
					[167.5, 59.0],
					[159.5, 49.2],
					[157.0, 63.0],
					[155.8, 53.6],
					[170.0, 59.0],
					[159.1, 47.6],
					[166.0, 69.8],
					[176.2, 66.8],
					[160.2, 75.2],
					[172.5, 55.2],
					[170.9, 54.2],
					[172.9, 62.5],
					[153.4, 42.0],
					[160.0, 50.0],
					[147.2, 49.8],
					[168.2, 49.2],
					[175.0, 73.2],
					[157.0, 47.8],
					[167.6, 68.8],
					[159.5, 50.6],
					[175.0, 82.5],
					[166.8, 57.2],
					[176.5, 87.8],
					[170.2, 72.8],
					[174.0, 54.5],
					[173.0, 59.8],
					[179.9, 67.3],
					[170.5, 67.8],
					[160.0, 47.0],
					[154.4, 46.2],
					[162.0, 55.0],
					[176.5, 83.0],
					[160.0, 54.4],
					[152.0, 45.8],
					[162.1, 53.6],
					[170.0, 73.2],
					[160.2, 52.1],
					[161.3, 67.9],
					[166.4, 56.6],
					[168.9, 62.3],
					[163.8, 58.5],
					[167.6, 54.5],
					[160.0, 50.2],
					[161.3, 60.3],
					[167.6, 58.3],
					[165.1, 56.2],
					[160.0, 50.2],
					[170.0, 72.9],
					[157.5, 59.8],
					[167.6, 61.0],
					[160.7, 69.1],
					[163.2, 55.9],
					[152.4, 46.5],
					[157.5, 54.3],
					[168.3, 54.8],
					[180.3, 60.7],
					[165.5, 60.0],
					[165.0, 62.0],
					[164.5, 60.3],
					[156.0, 52.7],
					[160.0, 74.3],
					[163.0, 62.0],
					[165.7, 73.1],
					[161.0, 80.0],
					[162.0, 54.7],
					[166.0, 53.2],
					[174.0, 75.7],
					[172.7, 61.1],
					[167.6, 55.7],
					[151.1, 48.7],
					[164.5, 52.3],
					[163.5, 50.0],
					[152.0, 59.3],
					[169.0, 62.5],
					[164.0, 55.7],
					[161.2, 54.8],
					[155.0, 45.9],
					[170.0, 70.6],
					[176.2, 67.2],
					[170.0, 69.4],
					[162.5, 58.2],
					[170.3, 64.8],
					[164.1, 71.6],
					[169.5, 52.8],
					[163.2, 59.8],
					[154.5, 49.0],
					[159.8, 50.0],
					[173.2, 69.2],
					[170.0, 55.9],
					[161.4, 63.4],
					[169.0, 58.2],
					[166.2, 58.6],
					[159.4, 45.7],
					[162.5, 52.2],
					[159.0, 48.6],
					[162.8, 57.8],
					[159.0, 55.6],
					[179.8, 66.8],
					[162.9, 59.4],
					[161.0, 53.6],
					[151.1, 73.2],
					[168.2, 53.4],
					[168.9, 69.0],
					[173.2, 58.4],
					[171.8, 56.2],
					[178.0, 70.6],
					[164.3, 59.8],
					[163.0, 72.0],
					[168.5, 65.2],
					[166.8, 56.6],
					[172.7, 105.2],
					[163.5, 51.8],
					[169.4, 63.4],
					[167.8, 59.0],
					[159.5, 47.6],
					[167.6, 63.0],
					[161.2, 55.2],
					[160.0, 45.0],
					[163.2, 54.0],
					[162.2, 50.2],
					[161.3, 60.2],
					[149.5, 44.8],
					[157.5, 58.8],
					[163.2, 56.4],
					[172.7, 62.0],
					[155.0, 49.2],
					[156.5, 67.2],
					[164.0, 53.8],
					[160.9, 54.4],
					[162.8, 58.0],
					[167.0, 59.8],
					[160.0, 54.8],
					[160.0, 43.2],
					[168.9, 60.5],
					[158.2, 46.4],
					[156.0, 64.4],
					[160.0, 48.8],
					[167.1, 62.2],
					[158.0, 55.5],
					[167.6, 57.8],
					[156.0, 54.6],
					[162.1, 59.2],
					[173.4, 52.7],
					[159.8, 53.2],
					[170.5, 64.5],
					[159.2, 51.8],
					[157.5, 56.0],
					[161.3, 63.6],
					[162.6, 63.2],
					[160.0, 59.5],
					[168.9, 56.8],
					[165.1, 64.1],
					[162.6, 50.0],
					[165.1, 72.3],
					[166.4, 55.0],
					[160.0, 55.9],
					[152.4, 60.4],
					[170.2, 69.1],
					[162.6, 84.5],
					[170.2, 55.9],
					[158.8, 55.5],
					[172.7, 69.5],
					[167.6, 76.4],
					[162.6, 61.4],
					[167.6, 65.9],
					[156.2, 58.6],
					[175.2, 66.8],
					[172.1, 56.6],
					[162.6, 58.6],
					[160.0, 55.9],
					[165.1, 59.1],
					[182.9, 81.8],
					[166.4, 70.7],
					[165.1, 56.8],
					[177.8, 60.0],
					[165.1, 58.2],
					[175.3, 72.7],
					[154.9, 54.1],
					[158.8, 49.1],
					[172.7, 75.9],
					[168.9, 55.0],
					[161.3, 57.3],
					[167.6, 55.0],
					[165.1, 65.5],
					[175.3, 65.5],
					[157.5, 48.6],
					[163.8, 58.6],
					[167.6, 63.6],
					[165.1, 55.2],
					[165.1, 62.7],
					[168.9, 56.6],
					[162.6, 53.9],
					[164.5, 63.2],
					[176.5, 73.6],
					[168.9, 62.0],
					[175.3, 63.6],
					[159.4, 53.2],
					[160.0, 53.4],
					[170.2, 55.0],
					[162.6, 70.5],
					[167.6, 54.5],
					[162.6, 54.5],
					[160.7, 55.9],
					[160.0, 59.0],
					[157.5, 63.6],
					[162.6, 54.5],
					[152.4, 47.3],
					[170.2, 67.7],
					[165.1, 80.9],
					[172.7, 70.5],
					[165.1, 60.9],
					[170.2, 63.6],
					[170.2, 54.5],
					[170.2, 59.1],
					[161.3, 70.5],
					[167.6, 52.7],
					[167.6, 62.7],
					[165.1, 86.3],
					[162.6, 66.4],
					[152.4, 67.3],
					[168.9, 63.0],
					[170.2, 73.6],
					[175.2, 62.3],
					[175.2, 57.7],
					[160.0, 55.4],
					[165.1, 104.1],
					[174.0, 55.5],
					[170.2, 77.3],
					[160.0, 80.5],
					[167.6, 64.5],
					[167.6, 72.3],
					[167.6, 61.4],
					[154.9, 58.2],
					[162.6, 81.8],
					[175.3, 63.6],
					[171.4, 53.4],
					[157.5, 54.5],
					[165.1, 53.6],
					[160.0, 60.0],
					[174.0, 73.6],
					[162.6, 61.4],
					[174.0, 55.5],
					[162.6, 63.6],
					[161.3, 60.9],
					[156.2, 60.0],
					[149.9, 46.8],
					[169.5, 57.3],
					[160.0, 64.1],
					[175.3, 63.6],
					[169.5, 67.3],
					[160.0, 75.5],
					[172.7, 68.2],
					[162.6, 61.4],
					[157.5, 76.8],
					[176.5, 71.8],
					[164.4, 55.5],
					[160.7, 48.6],
					[174.0, 66.4],
					[163.8, 67.3]
				  ],
				  markPoint: {
					data: [{
					  type: 'max',
					  name: 'Max'
					}, {
					  type: 'min',
					  name: 'Min'
					}]
				  },
				  markLine: {
					data: [{
					  type: 'average',
					  name: 'Mean'
					}]
				  }
				}, {
				  name: 'Data2',
				  type: 'scatter',
				  tooltip: {
					trigger: 'item',
					formatter: function(params) {
					  if (params.value.length > 1) {
						return params.seriesName + ' :<br/>' + params.value[0] + 'cm ' + params.value[1] + 'kg ';
					  } else {
						return params.seriesName + ' :<br/>' + params.name + ' : ' + params.value + 'kg ';
					  }
					}
				  },
				  data: [
					[174.0, 65.6],
					[175.3, 71.8],
					[193.5, 80.7],
					[186.5, 72.6],
					[187.2, 78.8],
					[181.5, 74.8],
					[184.0, 86.4],
					[184.5, 78.4],
					[175.0, 62.0],
					[184.0, 81.6],
					[180.0, 76.6],
					[177.8, 83.6],
					[192.0, 90.0],
					[176.0, 74.6],
					[174.0, 71.0],
					[184.0, 79.6],
					[192.7, 93.8],
					[171.5, 70.0],
					[173.0, 72.4],
					[176.0, 85.9],
					[176.0, 78.8],
					[180.5, 77.8],
					[172.7, 66.2],
					[176.0, 86.4],
					[173.5, 81.8],
					[178.0, 89.6],
					[180.3, 82.8],
					[180.3, 76.4],
					[164.5, 63.2],
					[173.0, 60.9],
					[183.5, 74.8],
					[175.5, 70.0],
					[188.0, 72.4],
					[189.2, 84.1],
					[172.8, 69.1],
					[170.0, 59.5],
					[182.0, 67.2],
					[170.0, 61.3],
					[177.8, 68.6],
					[184.2, 80.1],
					[186.7, 87.8],
					[171.4, 84.7],
					[172.7, 73.4],
					[175.3, 72.1],
					[180.3, 82.6],
					[182.9, 88.7],
					[188.0, 84.1],
					[177.2, 94.1],
					[172.1, 74.9],
					[167.0, 59.1],
					[169.5, 75.6],
					[174.0, 86.2],
					[172.7, 75.3],
					[182.2, 87.1],
					[164.1, 55.2],
					[163.0, 57.0],
					[171.5, 61.4],
					[184.2, 76.8],
					[174.0, 86.8],
					[174.0, 72.2],
					[177.0, 71.6],
					[186.0, 84.8],
					[167.0, 68.2],
					[171.8, 66.1],
					[182.0, 72.0],
					[167.0, 64.6],
					[177.8, 74.8],
					[164.5, 70.0],
					[192.0, 101.6],
					[175.5, 63.2],
					[171.2, 79.1],
					[181.6, 78.9],
					[167.4, 67.7],
					[181.1, 66.0],
					[177.0, 68.2],
					[174.5, 63.9],
					[177.5, 72.0],
					[170.5, 56.8],
					[182.4, 74.5],
					[197.1, 90.9],
					[180.1, 93.0],
					[175.5, 80.9],
					[180.6, 72.7],
					[184.4, 68.0],
					[175.5, 70.9],
					[180.6, 72.5],
					[177.0, 72.5],
					[177.1, 83.4],
					[181.6, 75.5],
					[176.5, 73.0],
					[175.0, 70.2],
					[174.0, 73.4],
					[165.1, 70.5],
					[177.0, 68.9],
					[192.0, 102.3],
					[176.5, 68.4],
					[169.4, 65.9],
					[182.1, 75.7],
					[179.8, 84.5],
					[175.3, 87.7],
					[184.9, 86.4],
					[177.3, 73.2],
					[167.4, 53.9],
					[178.1, 72.0],
					[168.9, 55.5],
					[157.2, 58.4],
					[180.3, 83.2],
					[170.2, 72.7],
					[177.8, 64.1],
					[172.7, 72.3],
					[165.1, 65.0],
					[186.7, 86.4],
					[165.1, 65.0],
					[174.0, 88.6],
					[175.3, 84.1],
					[185.4, 66.8],
					[177.8, 75.5],
					[180.3, 93.2],
					[180.3, 82.7],
					[177.8, 58.0],
					[177.8, 79.5],
					[177.8, 78.6],
					[177.8, 71.8],
					[177.8, 116.4],
					[163.8, 72.2],
					[188.0, 83.6],
					[198.1, 85.5],
					[175.3, 90.9],
					[166.4, 85.9],
					[190.5, 89.1],
					[166.4, 75.0],
					[177.8, 77.7],
					[179.7, 86.4],
					[172.7, 90.9],
					[190.5, 73.6],
					[185.4, 76.4],
					[168.9, 69.1],
					[167.6, 84.5],
					[175.3, 64.5],
					[170.2, 69.1],
					[190.5, 108.6],
					[177.8, 86.4],
					[190.5, 80.9],
					[177.8, 87.7],
					[184.2, 94.5],
					[176.5, 80.2],
					[177.8, 72.0],
					[180.3, 71.4],
					[171.4, 72.7],
					[172.7, 84.1],
					[172.7, 76.8],
					[177.8, 63.6],
					[177.8, 80.9],
					[182.9, 80.9],
					[170.2, 85.5],
					[167.6, 68.6],
					[175.3, 67.7],
					[165.1, 66.4],
					[185.4, 102.3],
					[181.6, 70.5],
					[172.7, 95.9],
					[190.5, 84.1],
					[179.1, 87.3],
					[175.3, 71.8],
					[170.2, 65.9],
					[193.0, 95.9],
					[171.4, 91.4],
					[177.8, 81.8],
					[177.8, 96.8],
					[167.6, 69.1],
					[167.6, 82.7],
					[180.3, 75.5],
					[182.9, 79.5],
					[176.5, 73.6],
					[186.7, 91.8],
					[188.0, 84.1],
					[188.0, 85.9],
					[177.8, 81.8],
					[174.0, 82.5],
					[177.8, 80.5],
					[171.4, 70.0],
					[185.4, 81.8],
					[185.4, 84.1],
					[188.0, 90.5],
					[188.0, 91.4],
					[182.9, 89.1],
					[176.5, 85.0],
					[175.3, 69.1],
					[175.3, 73.6],
					[188.0, 80.5],
					[188.0, 82.7],
					[175.3, 86.4],
					[170.5, 67.7],
					[179.1, 92.7],
					[177.8, 93.6],
					[175.3, 70.9],
					[182.9, 75.0],
					[170.8, 93.2],
					[188.0, 93.2],
					[180.3, 77.7],
					[177.8, 61.4],
					[185.4, 94.1],
					[168.9, 75.0],
					[185.4, 83.6],
					[180.3, 85.5],
					[174.0, 73.9],
					[167.6, 66.8],
					[182.9, 87.3],
					[160.0, 72.3],
					[180.3, 88.6],
					[167.6, 75.5],
					[186.7, 101.4],
					[175.3, 91.1],
					[175.3, 67.3],
					[175.9, 77.7],
					[175.3, 81.8],
					[179.1, 75.5],
					[181.6, 84.5],
					[177.8, 76.6],
					[182.9, 85.0],
					[177.8, 102.5],
					[184.2, 77.3],
					[179.1, 71.8],
					[176.5, 87.9],
					[188.0, 94.3],
					[174.0, 70.9],
					[167.6, 64.5],
					[170.2, 77.3],
					[167.6, 72.3],
					[188.0, 87.3],
					[174.0, 80.0],
					[176.5, 82.3],
					[180.3, 73.6],
					[167.6, 74.1],
					[188.0, 85.9],
					[180.3, 73.2],
					[167.6, 76.3],
					[183.0, 65.9],
					[183.0, 90.9],
					[179.1, 89.1],
					[170.2, 62.3],
					[177.8, 82.7],
					[179.1, 79.1],
					[190.5, 98.2],
					[177.8, 84.1],
					[180.3, 83.2],
					[180.3, 83.2]
				  ],
				  markPoint: {
					data: [{
					  type: 'max',
					  name: 'Max'
					}, {
					  type: 'min',
					  name: 'Min'
					}]
				  },
				  markLine: {
					data: [{
					  type: 'average',
					  name: 'Mean'
					}]
				  }
				}]
			  });

			} 
			  
			   //echart Bar Horizontal
			  
			if ($('#echart_bar_horizontal').length ){ 
			  
			  var echartBar = echarts.init(document.getElementById('echart_bar_horizontal'), theme);

			  echartBar.setOption({
				title: {
				  text: 'Bar Graph',
				  subtext: 'Graph subtitle'
				},
				tooltip: {
				  trigger: 'axis'
				},
				legend: {
				  x: 100,
				  data: ['2015', '2016']
				},
				toolbox: {
				  show: true,
				  feature: {
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				xAxis: [{
				  type: 'value',
				  boundaryGap: [0, 0.01]
				}],
				yAxis: [{
				  type: 'category',
				  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
				}],
				series: [{
				  name: '2015',
				  type: 'bar',
				  data: [18203, 23489, 29034, 104970, 131744, 630230]
				}, {
				  name: '2016',
				  type: 'bar',
				  data: [19325, 23438, 31000, 121594, 134141, 681807]
				}]
			  });

			} 
			  
			   //echart Pie Collapse
			  
			if ($('#echart_pie2').length ){ 
			  
			  var echartPieCollapse = echarts.init(document.getElementById('echart_pie2'), theme);
			  
			  echartPieCollapse.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel']
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				series: [{
				  name: 'Area Mode',
				  type: 'pie',
				  radius: [25, 90],
				  center: ['50%', 170],
				  roseType: 'area',
				  x: '50%',
				  max: 40,
				  sort: 'ascending',
				  data: [{
					value: 10,
					name: 'rose1'
				  }, {
					value: 5,
					name: 'rose2'
				  }, {
					value: 15,
					name: 'rose3'
				  }, {
					value: 25,
					name: 'rose4'
				  }, {
					value: 20,
					name: 'rose5'
				  }, {
					value: 35,
					name: 'rose6'
				  }]
				}]
			  });

			} 
			  
			   //echart Donut
			  
			if ($('#echart_donut').length ){  
			  
			  var echartDonut = echarts.init(document.getElementById('echart_donut'), theme);
			  
			  echartDonut.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				calculable: true,
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel'],
					  option: {
						funnel: {
						  x: '25%',
						  width: '50%',
						  funnelAlign: 'center',
						  max: 1548
						}
					  }
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: 'Access to the resource',
				  type: 'pie',
				  radius: ['35%', '55%'],
				  itemStyle: {
					normal: {
					  label: {
						show: true
					  },
					  labelLine: {
						show: true
					  }
					},
					emphasis: {
					  label: {
						show: true,
						position: 'center',
						textStyle: {
						  fontSize: '14',
						  fontWeight: 'normal'
						}
					  }
					}
				  },
				  data: [{
					value: 335,
					name: 'Direct Access'
				  }, {
					value: 310,
					name: 'E-mail Marketing'
				  }, {
					value: 234,
					name: 'Union Ad'
				  }, {
					value: 135,
					name: 'Video Ads'
				  }, {
					value: 1548,
					name: 'Search Engine'
				  }]
				}]
			  });

			} 
			  
			   //echart Pie
			  
			if ($('#echart_pie').length ){  
			  
			  var echartPie = echarts.init(document.getElementById('echart_pie'), theme);

			  echartPie.setOption({
				tooltip: {
				  trigger: 'item',
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  x: 'center',
				  y: 'bottom',
				  data: ['Direct Access', 'E-mail Marketing', 'Union Ad', 'Video Ads', 'Search Engine']
				},
				toolbox: {
				  show: true,
				  feature: {
					magicType: {
					  show: true,
					  type: ['pie', 'funnel'],
					  option: {
						funnel: {
						  x: '25%',
						  width: '50%',
						  funnelAlign: 'left',
						  max: 1548
						}
					  }
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				calculable: true,
				series: [{
				  name: '访问来源',
				  type: 'pie',
				  radius: '55%',
				  center: ['50%', '48%'],
				  data: [{
					value: 335,
					name: 'Direct Access'
				  }, {
					value: 310,
					name: 'E-mail Marketing'
				  }, {
					value: 234,
					name: 'Union Ad'
				  }, {
					value: 135,
					name: 'Video Ads'
				  }, {
					value: 1548,
					name: 'Search Engine'
				  }]
				}]
			  });

			  var dataStyle = {
				normal: {
				  label: {
					show: false
				  },
				  labelLine: {
					show: false
				  }
				}
			  };

			  var placeHolderStyle = {
				normal: {
				  color: 'rgba(0,0,0,0)',
				  label: {
					show: false
				  },
				  labelLine: {
					show: false
				  }
				},
				emphasis: {
				  color: 'rgba(0,0,0,0)'
				}
			  };

			} 
			  
			   //echart Mini Pie
			  
			if ($('#echart_mini_pie').length ){ 
			  
			  var echartMiniPie = echarts.init(document.getElementById('echart_mini_pie'), theme);

			  echartMiniPie .setOption({
				title: {
				  text: 'Chart #2',
				  subtext: 'From ExcelHome',
				  sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
				  x: 'center',
				  y: 'center',
				  itemGap: 20,
				  textStyle: {
					color: 'rgba(30,144,255,0.8)',
					fontFamily: '微软雅黑',
					fontSize: 35,
					fontWeight: 'bolder'
				  }
				},
				tooltip: {
				  show: true,
				  formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
				  orient: 'vertical',
				  x: 170,
				  y: 45,
				  itemGap: 12,
				  data: ['68%Something #1', '29%Something #2', '3%Something #3'],
				},
				toolbox: {
				  show: true,
				  feature: {
					mark: {
					  show: true
					},
					dataView: {
					  show: true,
					  title: "Text View",
					  lang: [
						"Text View",
						"Close",
						"Refresh",
					  ],
					  readOnly: false
					},
					restore: {
					  show: true,
					  title: "Restore"
					},
					saveAsImage: {
					  show: true,
					  title: "Save Image"
					}
				  }
				},
				series: [{
				  name: '1',
				  type: 'pie',
				  clockWise: false,
				  radius: [105, 130],
				  itemStyle: dataStyle,
				  data: [{
					value: 68,
					name: '68%Something #1'
				  }, {
					value: 32,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}, {
				  name: '2',
				  type: 'pie',
				  clockWise: false,
				  radius: [80, 105],
				  itemStyle: dataStyle,
				  data: [{
					value: 29,
					name: '29%Something #2'
				  }, {
					value: 71,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}, {
				  name: '3',
				  type: 'pie',
				  clockWise: false,
				  radius: [25, 80],
				  itemStyle: dataStyle,
				  data: [{
					value: 3,
					name: '3%Something #3'
				  }, {
					value: 97,
					name: 'invisible',
					itemStyle: placeHolderStyle
				  }]
				}]
			  });

			} 
			  
			   //echart Map
			  
			if ($('#echart_world_map').length ){ 
			  
				  var echartMap = echarts.init(document.getElementById('echart_world_map'), theme);
				  
				   
				  echartMap.setOption({
					title: {
					  text: 'World Population (2010)',
					  subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
					  x: 'center',
					  y: 'top'
					},
					tooltip: {
					  trigger: 'item',
					  formatter: function(params) {
						var value = (params.value + '').split('.');
						value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + '.' + value[1];
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
					  }
					},
					toolbox: {
					  show: true,
					  orient: 'vertical',
					  x: 'right',
					  y: 'center',
					  feature: {
						mark: {
						  show: true
						},
						dataView: {
						  show: true,
						  title: "Text View",
						  lang: [
							"Text View",
							"Close",
							"Refresh",
						  ],
						  readOnly: false
						},
						restore: {
						  show: true,
						  title: "Restore"
						},
						saveAsImage: {
						  show: true,
						  title: "Save Image"
						}
					  }
					},
					dataRange: {
					  min: 0,
					  max: 1000000,
					  text: ['High', 'Low'],
					  realtime: false,
					  calculable: true,
					  color: ['#087E65', '#26B99A', '#CBEAE3']
					},
					series: [{
					  name: 'World Population (2010)',
					  type: 'map',
					  mapType: 'world',
					  roam: false,
					  mapLocation: {
						y: 60
					  },
					  itemStyle: {
						emphasis: {
						  label: {
							show: true
						  }
						}
					  },
					  data: [{
						name: 'Afghanistan',
						value: 28397.812
					  }, {
						name: 'Angola',
						value: 19549.124
					  }, {
						name: 'Albania',
						value: 3150.143
					  }, {
						name: 'United Arab Emirates',
						value: 8441.537
					  }, {
						name: 'Argentina',
						value: 40374.224
					  }, {
						name: 'Armenia',
						value: 2963.496
					  }, {
						name: 'French Southern and Antarctic Lands',
						value: 268.065
					  }, {
						name: 'Australia',
						value: 22404.488
					  }, {
						name: 'Austria',
						value: 8401.924
					  }, {
						name: 'Azerbaijan',
						value: 9094.718
					  }, {
						name: 'Burundi',
						value: 9232.753
					  }, {
						name: 'Belgium',
						value: 10941.288
					  }, {
						name: 'Benin',
						value: 9509.798
					  }, {
						name: 'Burkina Faso',
						value: 15540.284
					  }, {
						name: 'Bangladesh',
						value: 151125.475
					  }, {
						name: 'Bulgaria',
						value: 7389.175
					  }, {
						name: 'The Bahamas',
						value: 66402.316
					  }, {
						name: 'Bosnia and Herzegovina',
						value: 3845.929
					  }, {
						name: 'Belarus',
						value: 9491.07
					  }, {
						name: 'Belize',
						value: 308.595
					  }, {
						name: 'Bermuda',
						value: 64.951
					  }, {
						name: 'Bolivia',
						value: 716.939
					  }, {
						name: 'Brazil',
						value: 195210.154
					  }, {
						name: 'Brunei',
						value: 27.223
					  }, {
						name: 'Bhutan',
						value: 716.939
					  }, {
						name: 'Botswana',
						value: 1969.341
					  }, {
						name: 'Central African Republic',
						value: 4349.921
					  }, {
						name: 'Canada',
						value: 34126.24
					  }, {
						name: 'Switzerland',
						value: 7830.534
					  }, {
						name: 'Chile',
						value: 17150.76
					  }, {
						name: 'China',
						value: 1359821.465
					  }, {
						name: 'Ivory Coast',
						value: 60508.978
					  }, {
						name: 'Cameroon',
						value: 20624.343
					  }, {
						name: 'Democratic Republic of the Congo',
						value: 62191.161
					  }, {
						name: 'Republic of the Congo',
						value: 3573.024
					  }, {
						name: 'Colombia',
						value: 46444.798
					  }, {
						name: 'Costa Rica',
						value: 4669.685
					  }, {
						name: 'Cuba',
						value: 11281.768
					  }, {
						name: 'Northern Cyprus',
						value: 1.468
					  }, {
						name: 'Cyprus',
						value: 1103.685
					  }, {
						name: 'Czech Republic',
						value: 10553.701
					  }, {
						name: 'Germany',
						value: 83017.404
					  }, {
						name: 'Djibouti',
						value: 834.036
					  }, {
						name: 'Denmark',
						value: 5550.959
					  }, {
						name: 'Dominican Republic',
						value: 10016.797
					  }, {
						name: 'Algeria',
						value: 37062.82
					  }, {
						name: 'Ecuador',
						value: 15001.072
					  }, {
						name: 'Egypt',
						value: 78075.705
					  }, {
						name: 'Eritrea',
						value: 5741.159
					  }, {
						name: 'Spain',
						value: 46182.038
					  }, {
						name: 'Estonia',
						value: 1298.533
					  }, {
						name: 'Ethiopia',
						value: 87095.281
					  }, {
						name: 'Finland',
						value: 5367.693
					  }, {
						name: 'Fiji',
						value: 860.559
					  }, {
						name: 'Falkland Islands',
						value: 49.581
					  }, {
						name: 'France',
						value: 63230.866
					  }, {
						name: 'Gabon',
						value: 1556.222
					  }, {
						name: 'United Kingdom',
						value: 62066.35
					  }, {
						name: 'Georgia',
						value: 4388.674
					  }, {
						name: 'Ghana',
						value: 24262.901
					  }, {
						name: 'Guinea',
						value: 10876.033
					  }, {
						name: 'Gambia',
						value: 1680.64
					  }, {
						name: 'Guinea Bissau',
						value: 10876.033
					  }, {
						name: 'Equatorial Guinea',
						value: 696.167
					  }, {
						name: 'Greece',
						value: 11109.999
					  }, {
						name: 'Greenland',
						value: 56.546
					  }, {
						name: 'Guatemala',
						value: 14341.576
					  }, {
						name: 'French Guiana',
						value: 231.169
					  }, {
						name: 'Guyana',
						value: 786.126
					  }, {
						name: 'Honduras',
						value: 7621.204
					  }, {
						name: 'Croatia',
						value: 4338.027
					  }, {
						name: 'Haiti',
						value: 9896.4
					  }, {
						name: 'Hungary',
						value: 10014.633
					  }, {
						name: 'Indonesia',
						value: 240676.485
					  }, {
						name: 'India',
						value: 1205624.648
					  }, {
						name: 'Ireland',
						value: 4467.561
					  }, {
						name: 'Iran',
						value: 240676.485
					  }, {
						name: 'Iraq',
						value: 30962.38
					  }, {
						name: 'Iceland',
						value: 318.042
					  }, {
						name: 'Israel',
						value: 7420.368
					  }, {
						name: 'Italy',
						value: 60508.978
					  }, {
						name: 'Jamaica',
						value: 2741.485
					  }, {
						name: 'Jordan',
						value: 6454.554
					  }, {
						name: 'Japan',
						value: 127352.833
					  }, {
						name: 'Kazakhstan',
						value: 15921.127
					  }, {
						name: 'Kenya',
						value: 40909.194
					  }, {
						name: 'Kyrgyzstan',
						value: 5334.223
					  }, {
						name: 'Cambodia',
						value: 14364.931
					  }, {
						name: 'South Korea',
						value: 51452.352
					  }, {
						name: 'Kosovo',
						value: 97.743
					  }, {
						name: 'Kuwait',
						value: 2991.58
					  }, {
						name: 'Laos',
						value: 6395.713
					  }, {
						name: 'Lebanon',
						value: 4341.092
					  }, {
						name: 'Liberia',
						value: 3957.99
					  }, {
						name: 'Libya',
						value: 6040.612
					  }, {
						name: 'Sri Lanka',
						value: 20758.779
					  }, {
						name: 'Lesotho',
						value: 2008.921
					  }, {
						name: 'Lithuania',
						value: 3068.457
					  }, {
						name: 'Luxembourg',
						value: 507.885
					  }, {
						name: 'Latvia',
						value: 2090.519
					  }, {
						name: 'Morocco',
						value: 31642.36
					  }, {
						name: 'Moldova',
						value: 103.619
					  }, {
						name: 'Madagascar',
						value: 21079.532
					  }, {
						name: 'Mexico',
						value: 117886.404
					  }, {
						name: 'Macedonia',
						value: 507.885
					  }, {
						name: 'Mali',
						value: 13985.961
					  }, {
						name: 'Myanmar',
						value: 51931.231
					  }, {
						name: 'Montenegro',
						value: 620.078
					  }, {
						name: 'Mongolia',
						value: 2712.738
					  }, {
						name: 'Mozambique',
						value: 23967.265
					  }, {
						name: 'Mauritania',
						value: 3609.42
					  }, {
						name: 'Malawi',
						value: 15013.694
					  }, {
						name: 'Malaysia',
						value: 28275.835
					  }, {
						name: 'Namibia',
						value: 2178.967
					  }, {
						name: 'New Caledonia',
						value: 246.379
					  }, {
						name: 'Niger',
						value: 15893.746
					  }, {
						name: 'Nigeria',
						value: 159707.78
					  }, {
						name: 'Nicaragua',
						value: 5822.209
					  }, {
						name: 'Netherlands',
						value: 16615.243
					  }, {
						name: 'Norway',
						value: 4891.251
					  }, {
						name: 'Nepal',
						value: 26846.016
					  }, {
						name: 'New Zealand',
						value: 4368.136
					  }, {
						name: 'Oman',
						value: 2802.768
					  }, {
						name: 'Pakistan',
						value: 173149.306
					  }, {
						name: 'Panama',
						value: 3678.128
					  }, {
						name: 'Peru',
						value: 29262.83
					  }, {
						name: 'Philippines',
						value: 93444.322
					  }, {
						name: 'Papua New Guinea',
						value: 6858.945
					  }, {
						name: 'Poland',
						value: 38198.754
					  }, {
						name: 'Puerto Rico',
						value: 3709.671
					  }, {
						name: 'North Korea',
						value: 1.468
					  }, {
						name: 'Portugal',
						value: 10589.792
					  }, {
						name: 'Paraguay',
						value: 6459.721
					  }, {
						name: 'Qatar',
						value: 1749.713
					  }, {
						name: 'Romania',
						value: 21861.476
					  }, {
						name: 'Russia',
						value: 21861.476
					  }, {
						name: 'Rwanda',
						value: 10836.732
					  }, {
						name: 'Western Sahara',
						value: 514.648
					  }, {
						name: 'Saudi Arabia',
						value: 27258.387
					  }, {
						name: 'Sudan',
						value: 35652.002
					  }, {
						name: 'South Sudan',
						value: 9940.929
					  }, {
						name: 'Senegal',
						value: 12950.564
					  }, {
						name: 'Solomon Islands',
						value: 526.447
					  }, {
						name: 'Sierra Leone',
						value: 5751.976
					  }, {
						name: 'El Salvador',
						value: 6218.195
					  }, {
						name: 'Somaliland',
						value: 9636.173
					  }, {
						name: 'Somalia',
						value: 9636.173
					  }, {
						name: 'Republic of Serbia',
						value: 3573.024
					  }, {
						name: 'Suriname',
						value: 524.96
					  }, {
						name: 'Slovakia',
						value: 5433.437
					  }, {
						name: 'Slovenia',
						value: 2054.232
					  }, {
						name: 'Sweden',
						value: 9382.297
					  }, {
						name: 'Swaziland',
						value: 1193.148
					  }, {
						name: 'Syria',
						value: 7830.534
					  }, {
						name: 'Chad',
						value: 11720.781
					  }, {
						name: 'Togo',
						value: 6306.014
					  }, {
						name: 'Thailand',
						value: 66402.316
					  }, {
						name: 'Tajikistan',
						value: 7627.326
					  }, {
						name: 'Turkmenistan',
						value: 5041.995
					  }, {
						name: 'East Timor',
						value: 10016.797
					  }, {
						name: 'Trinidad and Tobago',
						value: 1328.095
					  }, {
						name: 'Tunisia',
						value: 10631.83
					  }, {
						name: 'Turkey',
						value: 72137.546
					  }, {
						name: 'United Republic of Tanzania',
						value: 44973.33
					  }, {
						name: 'Uganda',
						value: 33987.213
					  }, {
						name: 'Ukraine',
						value: 46050.22
					  }, {
						name: 'Uruguay',
						value: 3371.982
					  }, {
						name: 'United States of America',
						value: 312247.116
					  }, {
						name: 'Uzbekistan',
						value: 27769.27
					  }, {
						name: 'Venezuela',
						value: 236.299
					  }, {
						name: 'Vietnam',
						value: 89047.397
					  }, {
						name: 'Vanuatu',
						value: 236.299
					  }, {
						name: 'West Bank',
						value: 13.565
					  }, {
						name: 'Yemen',
						value: 22763.008
					  }, {
						name: 'South Africa',
						value: 51452.352
					  }, {
						name: 'Zambia',
						value: 13216.985
					  }, {
						name: 'Zimbabwe',
						value: 13076.978
					  }]
					}]
				  });
	   
			}
	   
		}  
	   
	   
	$(document).ready(function() {
				
		init_sparklines();
		init_flot_chart();
		init_sidebar();
		init_wysiwyg();
		init_InputMask();
		init_JQVmap();
		init_cropper();
		init_knob();
		init_IonRangeSlider();
		init_ColorPicker();
		init_TagsInput();
		init_parsley();
		init_daterangepicker();
		init_daterangepicker_right();
		init_daterangepicker_single_call();
		init_daterangepicker_reservation();
		init_SmartWizard();
		init_EasyPieChart();
		init_charts();
		init_echarts();
		init_morris_charts();
		init_skycons();
		init_select2();
		init_validator();
		init_DataTables();
		init_chart_doughnut();
		init_gauge();
		init_PNotify();
		init_starrr();
		init_calendar();
		init_compose();
		init_CustomNotification();
		init_autosize();
		init_autocomplete();
				
	});	
	


/** 
 * @overview datejs
 * @version 1.0.0-rc3
 * @author Gregory Wild-Smith <gregory@wild-smith.com>
 * @copyright 2014 Gregory Wild-Smith
 * @license MIT
 * @homepage https://github.com/abritinthebay/datejs
 */(function () {
	var $D = Date;
	var lang = Date.CultureStrings ? Date.CultureStrings.lang : null;
	var loggedKeys = {}; // for debug purposes.
	var getText = {
		getFromKey: function (key, countryCode) {
			var output;
			if (Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key]) {
				output = Date.CultureStrings[countryCode][key];
			} else {
				output = getText.buildFromDefault(key);
			}
			if (key.charAt(0) === "/") { // Assume it's a regex
				output = getText.buildFromRegex(key, countryCode);
			}
			return output;
		},
		getFromObjectValues: function (obj, countryCode) {
			var key, output = {};
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					output[key] = getText.getFromKey(obj[key], countryCode);
				}
			}
			return output;
		},
		getFromObjectKeys: function (obj, countryCode) {
			var key, output = {};
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					output[getText.getFromKey(key, countryCode)] = obj[key];
				}
			}
			return output;
		},
		getFromArray: function (arr, countryCode) {
			var output = [];
			for (var i=0; i < arr.length; i++){
				if (i in arr) {
					output[i] = getText.getFromKey(arr[i], countryCode);
				}
			}
			return output;
		},
		buildFromDefault: function (key) {
			var output, length, split, last;
			switch(key) {
				case "name":
					output = "en-US";
					break;
				case "englishName":
					output = "English (United States)";
					break;
				case "nativeName":
					output = "English (United States)";
					break;
				case "twoDigitYearMax":
					output = 2049;
					break;
				case "firstDayOfWeek":
					output = 0;
					break;
				default:
					output = key;
					split = key.split("_");
					length = split.length;
					if (length > 1 && key.charAt(0) !== "/") {
						// if the key isn't a regex and it has a split.
						last = split[(length - 1)].toLowerCase();
						if (last === "initial" || last === "abbr") {
							output = split[0];
						}
					}
					break;
			}
			return output;
		},
		buildFromRegex: function (key, countryCode) {
			var output;
			if (Date.CultureStrings && Date.CultureStrings[countryCode] && Date.CultureStrings[countryCode][key]) {
				output = new RegExp(Date.CultureStrings[countryCode][key], "i");
			} else {
				output = new RegExp(key.replace(new RegExp("/", "g"),""), "i");
			}
			return output;
		}
	};

	var shallowMerge = function (obj1, obj2) {
		for (var attrname in obj2) {
			if (obj2.hasOwnProperty(attrname)) {
				obj1[attrname] = obj2[attrname];
			}
		}
	};

	var __ = function (key, language) {
		var countryCode = (language) ? language : lang;
		loggedKeys[key] = key;
		if (typeof key === "object") {
			if (key instanceof Array) {
				return getText.getFromArray(key, countryCode);
			} else {
				return getText.getFromObjectKeys(key, countryCode);
			}
		} else {
			return getText.getFromKey(key, countryCode);
		}
	};
	
	var loadI18nScript = function (code) {
		// paatterned after jQuery's getScript.
		var url = Date.Config.i18n + code + ".js";
		var head = document.getElementsByTagName("head")[0] || document.documentElement;
		var script = document.createElement("script");
		script.src = url;

		var completed = false;
		var events = {
			done: function (){} // placeholder function
		};
		// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {
			if ( !completed && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
				events.done();
				head.removeChild(script);
			}
		};

		setTimeout(function() {
			head.insertBefore(script, head.firstChild);
		}, 0); // allows return to execute first
		
		return {
			done: function (cb) {
				events.done = function() {
					if (cb) {
						setTimeout(cb,0);
					}
				};
			}
		};
	};

	var buildInfo = {
		buildFromMethodHash: function (obj) {
			var key;
			for(key in obj) {
				if (obj.hasOwnProperty(key)) {
					obj[key] = buildInfo[obj[key]]();
				}
			}
			return obj;
		},
		timeZoneDST: function () {
			var DST = {
				"CHADT": "+1345",
				"NZDT": "+1300",
				"AEDT": "+1100",
				"ACDT": "+1030",
				"AZST": "+0500",
				"IRDT": "+0430",
				"EEST": "+0300",
				"CEST": "+0200",
				"BST": "+0100",
				"PMDT": "-0200",
				"ADT": "-0300",
				"NDT": "-0230",
				"EDT": "-0400",
				"CDT": "-0500",
				"MDT": "-0600",
				"PDT": "-0700",
				"AKDT": "-0800",
				"HADT": "-0900"
			};
			return __(DST);
		},
		timeZoneStandard: function () {
			var standard = {
				"LINT": "+1400",
				"TOT": "+1300",
				"CHAST": "+1245",
				"NZST": "+1200",
				"NFT": "+1130",
				"SBT": "+1100",
				"AEST": "+1000",
				"ACST": "+0930",
				"JST": "+0900",
				"CWST": "+0845",
				"CT": "+0800",
				"ICT": "+0700",
				"MMT": "+0630",
				"BST": "+0600",
				"NPT": "+0545",
				"IST": "+0530",
				"PKT": "+0500",
				"AFT": "+0430",
				"MSK": "+0400",
				"IRST": "+0330",
				"FET": "+0300",
				"EET": "+0200",
				"CET": "+0100",
				"GMT": "+0000",
				"UTC": "+0000",
				"CVT": "-0100",
				"GST": "-0200",
				"BRT": "-0300",
				"NST": "-0330",
				"AST": "-0400",
				"EST": "-0500",
				"CST": "-0600",
				"MST": "-0700",
				"PST": "-0800",
				"AKST": "-0900",
				"MIT": "-0930",
				"HST": "-1000",
				"SST": "-1100",
				"BIT": "-1200"
			};
			return __(standard);
		},
		timeZones: function (data) {
			var zone;
			data.timezones = [];
			for (zone in data.abbreviatedTimeZoneStandard) {
				if (data.abbreviatedTimeZoneStandard.hasOwnProperty(zone)) {
					data.timezones.push({ name: zone, offset: data.abbreviatedTimeZoneStandard[zone]});
				}
			}
			for (zone in data.abbreviatedTimeZoneDST) {
				if (data.abbreviatedTimeZoneDST.hasOwnProperty(zone)) {
					data.timezones.push({ name: zone, offset: data.abbreviatedTimeZoneDST[zone], dst: true});
				}
			}
			return data.timezones;
		},
		days: function () {
			return __(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
		},
		dayAbbr: function () {
			return __(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
		},
		dayShortNames: function () {
			return __(["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]);
		},
		dayFirstLetters: function () {
			return __(["S_Sun_Initial", "M_Mon_Initial", "T_Tues_Initial", "W_Wed_Initial", "T_Thu_Initial", "F_Fri_Initial", "S_Sat_Initial"]);
		},
		months: function () {
			return __(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
		},
		monthAbbr: function () {
			return __(["Jan_Abbr", "Feb_Abbr", "Mar_Abbr", "Apr_Abbr", "May_Abbr", "Jun_Abbr", "Jul_Abbr", "Aug_Abbr", "Sep_Abbr", "Oct_Abbr", "Nov_Abbr", "Dec_Abbr"]);
		},
		formatPatterns: function () {
			return getText.getFromObjectValues({
				shortDate: "M/d/yyyy",
				longDate: "dddd, MMMM dd, yyyy",
				shortTime: "h:mm tt",
				longTime: "h:mm:ss tt",
				fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
				sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
				universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
				rfc1123: "ddd, dd MMM yyyy HH:mm:ss",
				monthDay: "MMMM dd",
				yearMonth: "MMMM, yyyy"
			}, Date.i18n.currentLanguage());
		},
		regex: function () {
			return getText.getFromObjectValues({
				inTheMorning: "/( in the )(morn(ing)?)\\b/",
				thisMorning: "/(this )(morn(ing)?)\\b/",
				amThisMorning: "/(\b\\d(am)? )(this )(morn(ing)?)/",
				inTheEvening: "/( in the )(even(ing)?)\\b/",
				thisEvening: "/(this )(even(ing)?)\\b/",
				pmThisEvening: "/(\b\\d(pm)? )(this )(even(ing)?)/",
				jan: "/jan(uary)?/",
				feb: "/feb(ruary)?/",
				mar: "/mar(ch)?/",
				apr: "/apr(il)?/",
				may: "/may/",
				jun: "/jun(e)?/",
				jul: "/jul(y)?/",
				aug: "/aug(ust)?/",
				sep: "/sep(t(ember)?)?/",
				oct: "/oct(ober)?/",
				nov: "/nov(ember)?/",
				dec: "/dec(ember)?/",
				sun: "/^su(n(day)?)?/",
				mon: "/^mo(n(day)?)?/",
				tue: "/^tu(e(s(day)?)?)?/",
				wed: "/^we(d(nesday)?)?/",
				thu: "/^th(u(r(s(day)?)?)?)?/",
				fri: "/fr(i(day)?)?/",
				sat: "/^sa(t(urday)?)?/",
				future: "/^next/",
				past: "/^last|past|prev(ious)?/",
				add: "/^(\\+|aft(er)?|from|hence)/",
				subtract: "/^(\\-|bef(ore)?|ago)/",
				yesterday: "/^yes(terday)?/",
				today: "/^t(od(ay)?)?/",
				tomorrow: "/^tom(orrow)?/",
				now: "/^n(ow)?/",
				millisecond: "/^ms|milli(second)?s?/",
				second: "/^sec(ond)?s?/",
				minute: "/^mn|min(ute)?s?/",
				hour: "/^h(our)?s?/",
				week: "/^w(eek)?s?/",
				month: "/^m(onth)?s?/",
				day: "/^d(ay)?s?/",
				year: "/^y(ear)?s?/",
				shortMeridian: "/^(a|p)/",
				longMeridian: "/^(a\\.?m?\\.?|p\\.?m?\\.?)/",
				timezone: "/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",
				ordinalSuffix: "/^\\s*(st|nd|rd|th)/",
				timeContext: "/^\\s*(\\:|a(?!u|p)|p)/"
			}, Date.i18n.currentLanguage());
		}
	};

	var CultureInfo = function () {
		var info = getText.getFromObjectValues({
			name: "name",
			englishName: "englishName",
			nativeName: "nativeName",
			amDesignator: "AM",
			pmDesignator: "PM",
			firstDayOfWeek: "firstDayOfWeek",
			twoDigitYearMax: "twoDigitYearMax",
			dateElementOrder: "mdy"
		}, Date.i18n.currentLanguage());

		var constructedInfo = buildInfo.buildFromMethodHash({
			dayNames: "days",
			abbreviatedDayNames: "dayAbbr",
			shortestDayNames: "dayShortNames",
			firstLetterDayNames: "dayFirstLetters",
			monthNames: "months",
			abbreviatedMonthNames: "monthAbbr",
			formatPatterns: "formatPatterns",
			regexPatterns: "regex",
			abbreviatedTimeZoneDST: "timeZoneDST",
			abbreviatedTimeZoneStandard: "timeZoneStandard"
		});

		shallowMerge(info, constructedInfo);
		buildInfo.timeZones(info);
		return info;
	};

	$D.i18n = {
		__: function (key, lang) {
			return __(key, lang);
		},
		currentLanguage: function () {
			return lang || "en-US";
		},
		setLanguage: function (code, force, cb) {
			var async = false;
			if (force || code === "en-US" || (!!Date.CultureStrings && !!Date.CultureStrings[code])) {
				lang = code;
				Date.CultureStrings = Date.CultureStrings || {};
				Date.CultureStrings.lang = code;
				Date.CultureInfo = new CultureInfo();
			} else {
				if (!(!!Date.CultureStrings && !!Date.CultureStrings[code])) {
					if (typeof exports !== "undefined" && this.exports !== exports) {
						// we're in a Node enviroment, load it using require
						try {
							require("../i18n/" + code + ".js");
							lang = code;
							Date.CultureStrings.lang = code;
							Date.CultureInfo = new CultureInfo();
						} catch (e) {
							// var str = "The language for '" + code + "' could not be loaded by Node. It likely does not exist.";
							throw new Error("The DateJS IETF language tag '" + code + "' could not be loaded by Node. It likely does not exist.");
						}
					} else if (Date.Config && Date.Config.i18n) {
						// we know the location of the files, so lets load them					
						async = true;
						loadI18nScript(code).done(function(){
							lang = code;
							Date.CultureStrings = Date.CultureStrings || {};
							Date.CultureStrings.lang = code;
							Date.CultureInfo = new CultureInfo();
							$D.Parsing.Normalizer.buildReplaceData(); // because this is async
							if ($D.Grammar) {
								$D.Grammar.buildGrammarFormats(); // so we can parse those strings...
							}
							if (cb) {
								setTimeout(cb,0);
							}
						});
					} else {
						Date.console.error("The DateJS IETF language tag '" + code + "' is not available and has not been loaded.");
						return false;
					}
				}
			}
			$D.Parsing.Normalizer.buildReplaceData(); // rebuild normalizer strings
			if ($D.Grammar) {
				$D.Grammar.buildGrammarFormats(); // so we can parse those strings...
			}
			if (!async && cb) {
				setTimeout(cb,0);
			}
		},
		getLoggedKeys: function () {
			return loggedKeys;
		},
		updateCultureInfo: function () {
			Date.CultureInfo = new CultureInfo();
		}
	};
	$D.i18n.updateCultureInfo(); // run automatically
}());
(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	
	if (typeof window !== "undefined" && typeof window.console !== "undefined" && typeof window.console.log !== "undefined") {
		$D.console = console; // used only to raise non-critical errors if available
	} else {
		// set mock so we don't give errors.
		$D.console = {
			log: function(){},
			error: function(){}
		};
	}
	$D.Config = $D.Config || {};

	$D.initOverloads = function() {
		/** 
		 * Overload of Date.now. Allows an alternate call for Date.now where it returns the 
		 * current Date as an object rather than just milliseconds since the Unix Epoch.
		 *
		 * Also provides an implementation of now() for browsers (IE<9) that don't have it.
		 * 
		 * Backwards compatible so with work with either:
		 *  Date.now() [returns ms]
		 * or
		 *  Date.now(true) [returns Date]
		 */
		if (!$D.now) {
			$D._now = function now() {
				return new Date().getTime();
			};
		} else if (!$D._now) {
			$D._now = $D.now;
		}

		$D.now = function (returnObj) {
			if (returnObj) {
				return $D.present();
			} else {
				return $D._now();
			}
		};

		if ( !$P.toISOString ) {
			$P.toISOString = function() {
				return this.getUTCFullYear() +
				"-" + p(this.getUTCMonth() + 1) +
				"-" + p(this.getUTCDate()) +
				"T" + p(this.getUTCHours()) +
				":" + p(this.getUTCMinutes()) +
				":" + p(this.getUTCSeconds()) +
				"." + String( (this.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5) +
				"Z";
			};
		}
		
		// private
		if ( $P._toString === undefined ){
			$P._toString = $P.toString;
		}

	};
	$D.initOverloads();


	/** 
	 * Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM).
	 * @return {Date}    The current date.
	 */
	$D.today = function () {
		return new Date().clearTime();
	};

	/** 
	 * Gets a date that is set to the current date and time (same as new Date, but chainable)
	 * @return {Date}    The current date.
	 */
	$D.present = function () {
		return new Date();
	};

	/**
	 * Compares the first date to the second date and returns an number indication of their relative values.  
	 * @param {Date}     First Date object to compare [Required].
	 * @param {Date}     Second Date object to compare to [Required].
	 * @return {Number}  -1 = date1 is lessthan date2. 0 = values are equal. 1 = date1 is greaterthan date2.
	 */
	$D.compare = function (date1, date2) {
		if (isNaN(date1) || isNaN(date2)) {
			throw new Error(date1 + " - " + date2);
		} else if (date1 instanceof Date && date2 instanceof Date) {
			return (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0;
		} else {
			throw new TypeError(date1 + " - " + date2);
		}
	};
	
	/**
	 * Compares the first Date object to the second Date object and returns true if they are equal.  
	 * @param {Date}     First Date object to compare [Required]
	 * @param {Date}     Second Date object to compare to [Required]
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$D.equals = function (date1, date2) {
		return (date1.compareTo(date2) === 0);
	};

	/**
	 * Gets the language appropriate day name when given the day number(0-6)
	 * eg - 0 == Sunday
	 * @return {String}  The day name
	 */
	$D.getDayName = function (n) {
		return Date.CultureInfo.dayNames[n];
	};

	/**
	 * Gets the day number (0-6) if given a CultureInfo specific string which is a valid dayName, abbreviatedDayName or shortestDayName (two char).
	 * @param {String}   The name of the day (eg. "Monday, "Mon", "tuesday", "tue", "We", "we").
	 * @return {Number}  The day number
	 */
	$D.getDayNumberFromName = function (name) {
		var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s || o[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};
	
	/**
	 * Gets the month number (0-11) if given a Culture Info specific string which is a valid monthName or abbreviatedMonthName.
	 * @param {String}   The name of the month (eg. "February, "Feb", "october", "oct").
	 * @return {Number}  The day number
	 */
	$D.getMonthNumberFromName = function (name) {
		var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * Gets the language appropriate month name when given the month number(0-11)
	 * eg - 0 == January
	 * @return {String}  The month name
	 */
	$D.getMonthName = function (n) {
		return Date.CultureInfo.monthNames[n];
	};

	/**
	 * Determines if the current date instance is within a LeapYear.
	 * @param {Number}   The year.
	 * @return {Boolean} true if date is within a LeapYear, otherwise false.
	 */
	$D.isLeapYear = function (year) {
		return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	};

	/**
	 * Gets the number of days in the month, given a year and month value. Automatically corrects for LeapYear.
	 * @param {Number}   The year.
	 * @param {Number}   The month (0-11).
	 * @return {Number}  The number of days in the month.
	 */
	$D.getDaysInMonth = function (year, month) {
		if (!month && $D.validateMonth(year)) {
				month = year;
				year = Date.today().getFullYear();
		}
		return [31, ($D.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	};

	$P.getDaysInMonth = function () {
		return $D.getDaysInMonth(this.getFullYear(), this.getMonth());
	};
 
	$D.getTimezoneAbbreviation = function (offset, dst) {
		var p, n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
		for (p in n) {
			if (n.hasOwnProperty(p)) {
				if (n[p] === offset) {
					return p;
				}
			}
		}
		return null;
	};
	
	$D.getTimezoneOffset = function (name, dst) {
		var i, a =[], z = Date.CultureInfo.timezones;
		if (!name) { name = (new Date()).getTimezone();}
		for (i = 0; i < z.length; i++) {
			if (z[i].name === name.toUpperCase()) {
				a.push(i);
			}
		}
		if (!z[a[0]]) {
			return null;
		}
		if (a.length === 1 || !dst) {
			return z[a[0]].offset;
		} else {
			for (i=0; i < a.length; i++) {
				if (z[a[i]].dst) {
					return z[a[i]].offset;
				}
			}
		}
	};

	$D.getQuarter = function (d) {
		d = d || new Date(); // If no date supplied, use today
		var q = [1,2,3,4];
		return q[Math.floor(d.getMonth() / 3)]; // ~~~ is a bitwise op. Faster than Math.floor
	};

	$D.getDaysLeftInQuarter = function (d) {
		d = d || new Date();
		var qEnd = new Date(d);
		qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
		return Math.floor((qEnd - d) / 8.64e7);
	};

	// private
	var validate = function (n, min, max, name) {
		name = name ? name : "Object";
		if (typeof n === "undefined") {
			return false;
		} else if (typeof n !== "number") {
			throw new TypeError(n + " is not a Number.");
		} else if (n < min || n > max) {
			// As failing validation is *not* an exceptional circumstance 
			// lets not throw a RangeError Exception here. 
			// It's semantically correct but it's not sensible.
			return false;
		}
		return true;
	};

	/**
	 * Validates the number is within an acceptable range for milliseconds [0-999].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMillisecond = function (value) {
		return validate(value, 0, 999, "millisecond");
	};

	/**
	 * Validates the number is within an acceptable range for seconds [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateSecond = function (value) {
		return validate(value, 0, 59, "second");
	};

	/**
	 * Validates the number is within an acceptable range for minutes [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMinute = function (value) {
		return validate(value, 0, 59, "minute");
	};

	/**
	 * Validates the number is within an acceptable range for hours [0-23].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateHour = function (value) {
		return validate(value, 0, 23, "hour");
	};

	/**
	 * Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateDay = function (value, year, month) {
		if (year === undefined || year === null || month === undefined || month === null) { return false;}
		return validate(value, 1, $D.getDaysInMonth(year, month), "day");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateWeek = function (value) {
		return validate(value, 0, 53, "week");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMonth = function (value) {
		return validate(value, 0, 11, "month");
	};

	/**
	 * Validates the number is within an acceptable range for years.
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateYear = function (value) {
		/**
		 * Per ECMAScript spec the range of times supported by Date objects is 
		 * exactly -100,000,000 days to +100,000,000 days measured relative to 
		 * midnight at the beginning of 01 January, 1970 UTC. 
		 * This gives a range of 8,640,000,000,000,000 milliseconds to either 
		 * side of 01 January, 1970 UTC.
		 *
		 * Earliest possible date: Tue, 20 Apr 271,822 B.C. 00:00:00 UTC
		 * Latest possible date: Sat, 13 Sep 275,760 00:00:00 UTC
		 */
		return validate(value, -271822, 275760, "year");
	};
	$D.validateTimezone = function(value) {
		var timezones = {"ACDT":1,"ACST":1,"ACT":1,"ADT":1,"AEDT":1,"AEST":1,"AFT":1,"AKDT":1,"AKST":1,"AMST":1,"AMT":1,"ART":1,"AST":1,"AWDT":1,"AWST":1,"AZOST":1,"AZT":1,"BDT":1,"BIOT":1,"BIT":1,"BOT":1,"BRT":1,"BST":1,"BTT":1,"CAT":1,"CCT":1,"CDT":1,"CEDT":1,"CEST":1,"CET":1,"CHADT":1,"CHAST":1,"CHOT":1,"ChST":1,"CHUT":1,"CIST":1,"CIT":1,"CKT":1,"CLST":1,"CLT":1,"COST":1,"COT":1,"CST":1,"CT":1,"CVT":1,"CWST":1,"CXT":1,"DAVT":1,"DDUT":1,"DFT":1,"EASST":1,"EAST":1,"EAT":1,"ECT":1,"EDT":1,"EEDT":1,"EEST":1,"EET":1,"EGST":1,"EGT":1,"EIT":1,"EST":1,"FET":1,"FJT":1,"FKST":1,"FKT":1,"FNT":1,"GALT":1,"GAMT":1,"GET":1,"GFT":1,"GILT":1,"GIT":1,"GMT":1,"GST":1,"GYT":1,"HADT":1,"HAEC":1,"HAST":1,"HKT":1,"HMT":1,"HOVT":1,"HST":1,"ICT":1,"IDT":1,"IOT":1,"IRDT":1,"IRKT":1,"IRST":1,"IST":1,"JST":1,"KGT":1,"KOST":1,"KRAT":1,"KST":1,"LHST":1,"LINT":1,"MAGT":1,"MART":1,"MAWT":1,"MDT":1,"MET":1,"MEST":1,"MHT":1,"MIST":1,"MIT":1,"MMT":1,"MSK":1,"MST":1,"MUT":1,"MVT":1,"MYT":1,"NCT":1,"NDT":1,"NFT":1,"NPT":1,"NST":1,"NT":1,"NUT":1,"NZDT":1,"NZST":1,"OMST":1,"ORAT":1,"PDT":1,"PET":1,"PETT":1,"PGT":1,"PHOT":1,"PHT":1,"PKT":1,"PMDT":1,"PMST":1,"PONT":1,"PST":1,"PYST":1,"PYT":1,"RET":1,"ROTT":1,"SAKT":1,"SAMT":1,"SAST":1,"SBT":1,"SCT":1,"SGT":1,"SLST":1,"SRT":1,"SST":1,"SYOT":1,"TAHT":1,"THA":1,"TFT":1,"TJT":1,"TKT":1,"TLT":1,"TMT":1,"TOT":1,"TVT":1,"UCT":1,"ULAT":1,"UTC":1,"UYST":1,"UYT":1,"UZT":1,"VET":1,"VLAT":1,"VOLT":1,"VOST":1,"VUT":1,"WAKT":1,"WAST":1,"WAT":1,"WEDT":1,"WEST":1,"WET":1,"WST":1,"YAKT":1,"YEKT":1,"Z":1};
		return (timezones[value] === 1);
	};
	$D.validateTimezoneOffset= function(value) {
		// timezones go from +14hrs to -12hrs, the +X hours are negative offsets.
		return (value > -841 && value < 721);
	};

}());

(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};

	var validateConfigObject = function (obj) {
		var result = {}, self = this, prop, testFunc;
		testFunc = function (prop, func, value) {
			if (prop === "day") {
				var month = (obj.month !== undefined) ? obj.month : self.getMonth();
				var year = (obj.year !== undefined) ? obj.year : self.getFullYear();
				return $D[func](value, year, month);
			} else {
				return $D[func](value);
			}
		};
		for (prop in obj) {
			if (hasOwnProperty.call(obj, prop)) {
				var func = "validate" + prop.charAt(0).toUpperCase() + prop.slice(1);

				if ($D[func] && obj[prop] !== null && testFunc(prop, func, obj[prop])) {
					result[prop] = obj[prop];
				}
			}
		}
		return result;
	};
	/**
	 * Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
	 * @param {Boolean}  .clone() this date instance before clearing Time
	 * @return {Date}    this
	 */
	$P.clearTime = function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	};

	/**
	 * Resets the time of this Date object to the current time ('now').
	 * @return {Date}    this
	 */
	$P.setTimeToNow = function () {
		var n = new Date();
		this.setHours(n.getHours());
		this.setMinutes(n.getMinutes());
		this.setSeconds(n.getSeconds());
		this.setMilliseconds(n.getMilliseconds());
		return this;
	};
	/**
	 * Returns a new Date object that is an exact date and time copy of the original instance.
	 * @return {Date}    A new Date instance
	 */
	$P.clone = function () {
		return new Date(this.getTime());
	};

	/**
	 * Compares this instance to a Date object and returns an number indication of their relative values.  
	 * @param {Date}     Date object to compare [Required]
	 * @return {Number}  -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date.
	 */
	$P.compareTo = function (date) {
		return Date.compare(this, date);
	};

	/**
	 * Compares this instance to another Date object and returns true if they are equal.  
	 * @param {Date}     Date object to compare. If no date to compare, new Date() [now] is used.
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$P.equals = function (date) {
		return Date.equals(this, (date !== undefined ? date : new Date()));
	};

	/**
	 * Determines if this instance is between a range of two dates or equal to either the start or end dates.
	 * @param {Date}     Start of range [Required]
	 * @param {Date}     End of range [Required]
	 * @return {Boolean} true is this is between or equal to the start and end dates, else false
	 */
	$P.between = function (start, end) {
		return this.getTime() >= start.getTime() && this.getTime() <= end.getTime();
	};

	/**
	 * Determines if this date occurs after the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is greater than the date to compare to (or "now"), otherwise false.
	 */
	$P.isAfter = function (date) {
		return this.compareTo(date || new Date()) === 1;
	};

	/**
	 * Determines if this date occurs before the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is less than the date to compare to (or "now").
	 */
	$P.isBefore = function (date) {
		return (this.compareTo(date || new Date()) === -1);
	};

	/**
	 * Determines if the current Date instance occurs today.
	 * @return {Boolean} true if this date instance is 'today', otherwise false.
	 */
	
	/**
	 * Determines if the current Date instance occurs on the same Date as the supplied 'date'. 
	 * If no 'date' to compare to is provided, the current Date instance is compared to 'today'. 
	 * @param {date}     Date object to compare. If no date to compare, the current Date ("now") is used.
	 * @return {Boolean} true if this Date instance occurs on the same Day as the supplied 'date'.
	 */
	$P.isToday = $P.isSameDay = function (date) {
		return this.clone().clearTime().equals((date || new Date()).clone().clearTime());
	};
	
	/**
	 * Adds the specified number of milliseconds to this instance. 
	 * @param {Number}   The number of milliseconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMilliseconds = function (value) {
		if (!value) { return this; }
		this.setTime(this.getTime() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addSeconds = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 1000);
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMinutes = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 60000); // 60*1000
	};

	/**
	 * Adds the specified number of hours to this instance. 
	 * @param {Number}   The number of hours to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addHours = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 3600000); // 60*60*1000
	};

	/**
	 * Adds the specified number of days to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addDays = function (value) {
		if (!value) { return this; }
		this.setDate(this.getDate() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of weekdays (ie - not sat or sun) to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeekdays = function (value) {
		if (!value) { return this; }
		var day = this.getDay();
		var weeks = (Math.ceil(Math.abs(value)/7));
		if (day === 0 || day === 6) {
			if (value > 0) {
				this.next().monday();
				this.addDays(-1);
				day = this.getDay();
			}
		}

		if (value < 0) {
			while (value < 0) {
				this.addDays(-1);
				day = this.getDay();
				if (day !== 0 && day !== 6) {
					value++;
				}
			}
			return this;
		} else if (value > 5 || (6-day) <= value) {
			value = value + (weeks * 2);
		}

		return this.addDays(value);
	};

	/**
	 * Adds the specified number of weeks to this instance. 
	 * @param {Number}   The number of weeks to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeeks = function (value) {
		if (!value) { return this; }
		return this.addDays(value * 7);
	};


	/**
	 * Adds the specified number of months to this instance. 
	 * @param {Number}   The number of months to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMonths = function (value) {
		if (!value) { return this; }
		var n = this.getDate();
		this.setDate(1);
		this.setMonth(this.getMonth() + value * 1);
		this.setDate(Math.min(n, $D.getDaysInMonth(this.getFullYear(), this.getMonth())));
		return this;
	};

	$P.addQuarters = function (value) {
		if (!value) { return this; }
		// note this will take you to the same point in the quarter as you are now.
		// i.e. - if you are 15 days into the quarter you'll be 15 days into the resulting one.
		// bonus: this allows adding fractional quarters
		return this.addMonths(value * 3);
	};

	/**
	 * Adds the specified number of years to this instance. 
	 * @param {Number}   The number of years to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addYears = function (value) {
		if (!value) { return this; }
		return this.addMonths(value * 12);
	};

	/**
	 * Adds (or subtracts) to the value of the years, months, weeks, days, hours, minutes, seconds, milliseconds of the date instance using given configuration object. Positive and Negative values allowed.
	 * Example
	<pre><code>
	Date.today().add( { days: 1, months: 1 } )
	 
	new Date().add( { years: -1 } )
	</code></pre> 
	 * @param {Object}   Configuration object containing attributes (months, days, etc.)
	 * @return {Date}    this
	 */
	$P.add = function (config) {
		if (typeof config === "number") {
			this._orient = config;
			return this;
		}
		
		var x = config;

		if (x.day) {
			// If we should be a different date than today (eg: for 'tomorrow -1d', etc).
			// Should only effect parsing, not direct usage (eg, Finish and FinishExact)
			if ((x.day - this.getDate()) !== 0) {
				this.setDate(x.day);
			}
		}
		if (x.milliseconds) {
			this.addMilliseconds(x.milliseconds);
		}
		if (x.seconds) {
			this.addSeconds(x.seconds);
		}
		if (x.minutes) {
			this.addMinutes(x.minutes);
		}
		if (x.hours) {
			this.addHours(x.hours);
		}
		if (x.weeks) {
			this.addWeeks(x.weeks);
		}
		if (x.months) {
			this.addMonths(x.months);
		}
		if (x.years) {
			this.addYears(x.years);
		}
		if (x.days) {
			this.addDays(x.days);
		}
		return this;
	};
	
	/**
	 * Get the week number. Week one (1) is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getWeek() function does NOT convert the date to UTC. The local datetime is used. 
	 * Please use .getISOWeek() to get the week of the UTC converted date.
	 * @return {Number}  1 to 53
	 */
	$P.getWeek = function (utc) {
		// Create a copy of this date object  
		var self, target = new Date(this.valueOf());
		if (utc) {
			target.addMinutes(target.getTimezoneOffset());
			self = target.clone();
		} else {
			self = this;
		}
		// ISO week date weeks start on monday  
		// so correct the day number  
		var dayNr = (self.getDay() + 6) % 7;
		// ISO 8601 states that week 1 is the week  
		// with the first thursday of that year.  
		// Set the target date to the thursday in the target week  
		target.setDate(target.getDate() - dayNr + 3);
		// Store the millisecond value of the target date  
		var firstThursday = target.valueOf();
		// Set the target to the first thursday of the year  
		// First set the target to january first  
		target.setMonth(0, 1);
		// Not a thursday? Correct the date to the next thursday  
		if (target.getDay() !== 4) {
			target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
		}
		// The weeknumber is the number of weeks between the   
		// first thursday of the year and the thursday in the target week  
		return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000  
	};
	
	/**
	 * Get the ISO 8601 week number. Week one ("01") is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getISOWeek() function does convert the date to it's UTC value. Please use .getWeek() to get the week of the local date.
	 * @return {String}  "01" to "53"
	 */
	$P.getISOWeek = function () {
		return p(this.getWeek(true));
	};

	/**
	 * Moves the date to Monday of the week set. Week one (1) is the week which contains the first Thursday of the year.
	 * @param {Number}   A Number (1 to 53) that represents the week of the year.
	 * @return {Date}    this
	 */
	$P.setWeek = function (n) {
		if ((n - this.getWeek()) === 0) {
			if (this.getDay() !== 1) {
				return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1));
			} else {
				return this;
			}
		} else {
			return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1)).addWeeks(n - this.getWeek());
		}
	};

	$P.setQuarter = function (qtr) {
		var month = Math.abs(((qtr-1) * 3) + 1);
		return this.setMonth(month, 1);
	};

	$P.getQuarter = function () {
		return Date.getQuarter(this);
	};

	$P.getDaysLeftInQuarter = function () {
		return Date.getDaysLeftInQuarter(this);
	};

	/**
	 * Moves the date to the next n'th occurrence of the dayOfWeek starting from the beginning of the month. The number (-1) is a magic number and will return the last occurrence of the dayOfWeek in the month.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   The n'th occurrence to move to. Use (-1) to return the last occurrence in the month
	 * @return {Date}    this
	 */
	$P.moveToNthOccurrence = function (dayOfWeek, occurrence) {
		if (dayOfWeek === "Weekday") {
			if (occurrence > 0) {
				this.moveToFirstDayOfMonth();
				if (this.is().weekday()) {
					occurrence -= 1;
				}
			} else if (occurrence < 0) {
				this.moveToLastDayOfMonth();
				if (this.is().weekday()) {
					occurrence += 1;
				}
			} else {
				return this;
			}
			return this.addWeekdays(occurrence);
		}
		var shift = 0;
		if (occurrence > 0) {
			shift = occurrence - 1;
		}
		else if (occurrence === -1) {
			this.moveToLastDayOfMonth();
			if (this.getDay() !== dayOfWeek) {
				this.moveToDayOfWeek(dayOfWeek, -1);
			}
			return this;
		}
		return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek, +1).addWeeks(shift);
	};


	var moveToN = function (getFunc, addFunc, nVal) {
		return function (value, orient) {
			var diff = (value - this[getFunc]() + nVal * (orient || +1)) % nVal;
			return this[addFunc]((diff === 0) ? diff += nVal * (orient || +1) : diff);
		};
	};
	/**
	 * Move to the next or last dayOfWeek based on the orient value.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToDayOfWeek = moveToN("getDay", "addDays", 7);
	/**
	 * Move to the next or last month based on the orient value.
	 * @param {Number}   The month to move to. 0 = January, 11 = December
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToMonth = moveToN("getMonth", "addMonths", 12);
	/**
	 * Get the Ordinate of the current day ("th", "st", "rd").
	 * @return {String} 
	 */
	$P.getOrdinate = function () {
		var num = this.getDate();
		return ord(num);
	};
	/**
	 * Get the Ordinal day (numeric day number) of the year, adjusted for leap year.
	 * @return {Number} 1 through 365 (366 in leap years)
	 */
	$P.getOrdinalNumber = function () {
		return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 86400000) + 1;
	};

	/**
	 * Get the time zone abbreviation of the current date.
	 * @return {String} The abbreviated time zone name (e.g. "EST")
	 */
	$P.getTimezone = function () {
		return $D.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime());
	};

	$P.setTimezoneOffset = function (offset) {
		var here = this.getTimezoneOffset(), there = Number(offset) * -6 / 10;
		return (there || there === 0) ? this.addMinutes(there - here) : this;
	};

	$P.setTimezone = function (offset) {
		return this.setTimezoneOffset($D.getTimezoneOffset(offset));
	};

	/**
	 * Indicates whether Daylight Saving Time is observed in the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.hasDaylightSavingTime = function () {
		return (Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== Date.today().set({month: 6, day: 1}).getTimezoneOffset());
	};
	
	/**
	 * Indicates whether this Date instance is within the Daylight Saving Time range for the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.isDaylightSavingTime = function () {
		return Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== this.getTimezoneOffset();
	};

	/**
	 * Get the offset from UTC of the current date.
	 * @return {String} The 4-character offset string prefixed with + or - (e.g. "-0500")
	 */
	$P.getUTCOffset = function (offset) {
		var n = (offset || this.getTimezoneOffset()) * -10 / 6, r;
		if (n < 0) {
			r = (n - 10000).toString();
			return r.charAt(0) + r.substr(2);
		} else {
			r = (n + 10000).toString();
			return "+" + r.substr(1);
		}
	};

	/**
	 * Returns the number of milliseconds between this date and date.
	 * @param {Date} Defaults to now
	 * @return {Number} The diff in milliseconds
	 */
	$P.getElapsed = function (date) {
		return (date || new Date()) - this;
	};

	/**
	 * Set the value of year, month, day, hour, minute, second, millisecond of date instance using given configuration object.
	 * Example
	<pre><code>
	Date.today().set( { day: 20, month: 1 } )

	new Date().set( { millisecond: 0 } )
	</code></pre>
	 * 
	 * @param {Object}   Configuration object containing attributes (month, day, etc.)
	 * @return {Date}    this
	 */
	$P.set = function (config) {
		config = validateConfigObject.call(this, config);
		var key;
		for (key in config) {
			if (hasOwnProperty.call(config, key)) {
				var name = key.charAt(0).toUpperCase() + key.slice(1);
				var addFunc, getFunc;
				if (key !== "week" && key !== "month" && key !== "timezone" && key !== "timezoneOffset") {
					name += "s";
				}
				addFunc = "add" + name;
				getFunc = "get" + name;
				if (key === "month") {
					addFunc = addFunc + "s";
				} else if (key === "year"){
					getFunc = "getFullYear";
				}
				if (key !== "day" && key !== "timezone" && key !== "timezoneOffset"  && key !== "week" &&  key !== "hour") {
						this[addFunc](config[key] - this[getFunc]());
				} else if ( key === "timezone"|| key === "timezoneOffset" || key === "week" || key === "hour") {
					this["set"+name](config[key]);
				}
			}
		}
		// day has to go last because you can't validate the day without first knowing the month
		if (config.day) {
			this.addDays(config.day - this.getDate());
		}
		
		return this;
	};

	/**
	 * Moves the date to the first day of the month.
	 * @return {Date}    this
	 */
	$P.moveToFirstDayOfMonth = function () {
		return this.set({ day: 1 });
	};

	/**
	 * Moves the date to the last day of the month.
	 * @return {Date}    this
	 */
	$P.moveToLastDayOfMonth = function () {
		return this.set({ day: $D.getDaysInMonth(this.getFullYear(), this.getMonth())});
	};


	/**
	 * Converts the value of the current Date object to its equivalent string representation.
	 * Format Specifiers
	 * CUSTOM DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 * ------  ---------------------------------------------------------------------------  -----------------------
	 * s      The seconds of the minute between 0-59.                                      "0" to "59"
	 * ss     The seconds of the minute with leading zero if required.                     "00" to "59"
	 * 
	 * m      The minute of the hour between 0-59.                                         "0"  or "59"
	 * mm     The minute of the hour with leading zero if required.                        "00" or "59"
	 * 
	 * h      The hour of the day between 1-12.                                            "1"  to "12"
	 * hh     The hour of the day with leading zero if required.                           "01" to "12"
	 * 
	 * H      The hour of the day between 0-23.                                            "0"  to "23"
	 * HH     The hour of the day with leading zero if required.                           "00" to "23"
	 * 
	 * d      The day of the month between 1 and 31.                                       "1"  to "31"
	 * dd     The day of the month with leading zero if required.                          "01" to "31"
	 * ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                                "Mon" to "Sun" 
	 * dddd   The full day name. Date.CultureInfo.dayNames.                                              "Monday" to "Sunday"
	 * 
	 * M      The month of the year between 1-12.                                          "1" to "12"
	 * MM     The month of the year with leading zero if required.                         "01" to "12"
	 * MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.                            "Jan" to "Dec"
	 * MMMM   The full month name. Date.CultureInfo.monthNames.                                          "January" to "December"
	 *
	 * yy     The year as a two-digit number.                                              "99" or "08"
	 * yyyy   The full four digit year.                                                    "1999" or "2008"
	 * 
	 * t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * 
	 * S      The ordinal suffix ("st, "nd", "rd" or "th") of the current day.            "st, "nd", "rd" or "th"
	 *
	 * STANDARD DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 *------  ---------------------------------------------------------------------------  -----------------------
	 * d      The CultureInfo shortDate Format Pattern                                     "M/d/yyyy"
	 * D      The CultureInfo longDate Format Pattern                                      "dddd, MMMM dd, yyyy"
	 * F      The CultureInfo fullDateTime Format Pattern                                  "dddd, MMMM dd, yyyy h:mm:ss tt"
	 * m      The CultureInfo monthDay Format Pattern                                      "MMMM dd"
	 * r      The CultureInfo rfc1123 Format Pattern                                       "ddd, dd MMM yyyy HH:mm:ss GMT"
	 * s      The CultureInfo sortableDateTime Format Pattern                              "yyyy-MM-ddTHH:mm:ss"
	 * t      The CultureInfo shortTime Format Pattern                                     "h:mm tt"
	 * T      The CultureInfo longTime Format Pattern                                      "h:mm:ss tt"
	 * u      The CultureInfo universalSortableDateTime Format Pattern                     "yyyy-MM-dd HH:mm:ssZ"
	 * y      The CultureInfo yearMonth Format Pattern                                     "MMMM, yyyy"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	
	var ord = function (n) {
		switch (n * 1) {
		case 1:
		case 21:
		case 31:
			return "st";
		case 2:
		case 22:
			return "nd";
		case 3:
		case 23:
			return "rd";
		default:
			return "th";
		}
	};
	var parseStandardFormats = function (format) {
		var y, c = Date.CultureInfo.formatPatterns;
		switch (format) {
			case "d":
				return this.toString(c.shortDate);
			case "D":
				return this.toString(c.longDate);
			case "F":
				return this.toString(c.fullDateTime);
			case "m":
				return this.toString(c.monthDay);
			case "r":
			case "R":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.rfc1123) + " GMT";
			case "s":
				return this.toString(c.sortableDateTime);
			case "t":
				return this.toString(c.shortTime);
			case "T":
				return this.toString(c.longTime);
			case "u":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.universalSortableDateTime);
			case "y":
				return this.toString(c.yearMonth);
			default:
				return false;
		}
	};
	var parseFormatStringsClosure = function (context) {
		return function (m) {
			if (m.charAt(0) === "\\") {
				return m.replace("\\", "");
			}
			switch (m) {
				case "hh":
					return p(context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12));
				case "h":
					return context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12);
				case "HH":
					return p(context.getHours());
				case "H":
					return context.getHours();
				case "mm":
					return p(context.getMinutes());
				case "m":
					return context.getMinutes();
				case "ss":
					return p(context.getSeconds());
				case "s":
					return context.getSeconds();
				case "yyyy":
					return p(context.getFullYear(), 4);
				case "yy":
					return p(context.getFullYear());
				case "y":
					return context.getFullYear();
				case "E":
				case "dddd":
					return Date.CultureInfo.dayNames[context.getDay()];
				case "ddd":
					return Date.CultureInfo.abbreviatedDayNames[context.getDay()];
				case "dd":
					return p(context.getDate());
				case "d":
					return context.getDate();
				case "MMMM":
					return Date.CultureInfo.monthNames[context.getMonth()];
				case "MMM":
					return Date.CultureInfo.abbreviatedMonthNames[context.getMonth()];
				case "MM":
					return p((context.getMonth() + 1));
				case "M":
					return context.getMonth() + 1;
				case "t":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
				case "tt":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				case "S":
					return ord(context.getDate());
				case "W":
					return context.getWeek();
				case "WW":
					return context.getISOWeek();
				case "Q":
					return "Q" + context.getQuarter();
				case "q":
					return String(context.getQuarter());
				case "z":
					return context.getTimezone();
				case "Z":
				case "X":
					return Date.getTimezoneOffset(context.getTimezone());
				case "ZZ": // Timezone offset in seconds
					return context.getTimezoneOffset() * -60;
				case "u":
					return context.getDay();
				case "L":
					return ($D.isLeapYear(context.getFullYear())) ? 1 : 0;
				case "B":
					// Swatch Internet Time (.beats)
					return "@"+((context.getUTCSeconds() + (context.getUTCMinutes()*60) + ((context.getUTCHours()+1)*3600))/86.4);
				default:
					return m;
			}
		};
	};
	$P.toString = function (format, ignoreStandards) {
		
		// Standard Date and Time Format Strings. Formats pulled from CultureInfo file and
		// may vary by culture. 
		if (!ignoreStandards && format && format.length === 1) {
			output = parseStandardFormats.call(this, format);
			if (output) {
				return output;
			}
		}
		var parseFormatStrings = parseFormatStringsClosure(this);
		return format ? format.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, parseFormatStrings).replace(/\[|\]/g, "") : this._toString();
	};

}());
/*************************************************************
 * SugarPak - Domain Specific Language -  Syntactical Sugar  *
 *************************************************************/
 
(function () {
	var $D = Date, $P = $D.prototype, $N = Number.prototype;

	// private
	$P._orient = +1;

	// private
	$P._nth = null;

	// private
	$P._is = false;

	// private
	$P._same = false;
	
	// private
	$P._isSecond = false;

	// private
	$N._dateElement = "days";

	/** 
	 * Moves the date to the next instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().next().friday();
	Date.today().next().fri();
	Date.today().next().march();
	Date.today().next().mar();
	Date.today().next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$P.next = function () {
		this._move = true;
		this._orient = +1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the next instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.next().friday();
	Date.next().fri();
	Date.next().march();
	Date.next().mar();
	Date.next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$D.next = function () {
		return $D.today().next();
	};

	/** 
	 * Moves the date to the previous instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().last().friday();
	Date.today().last().fri();
	Date.today().last().march();
	Date.today().last().mar();
	Date.today().last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.last = $P.prev = $P.previous = function () {
		this._move = true;
		this._orient = -1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the previous instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.last().friday();
	Date.last().fri();
	Date.previous().march();
	Date.prev().mar();
	Date.last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$D.last = $D.prev = $D.previous = function () {
		return $D.today().last();
	};

	/** 
	 * Performs a equality check when followed by either a month name, day name or .weekday() function.
	 * Example
	<pre><code>
	Date.today().is().friday(); // true|false
	Date.today().is().fri();
	Date.today().is().march();
	Date.today().is().mar();
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.is = function () {
		this._is = true;
		return this;
	};

	/** 
	 * Determines if two date objects occur on/in exactly the same instance of the subsequent date part function.
	 * The function .same() must be followed by a date part function (example: .day(), .month(), .year(), etc).
	 *
	 * An optional Date can be passed in the date part function. If now date is passed as a parameter, 'Now' is used. 
	 *
	 * The following example demonstrates how to determine if two dates fall on the exact same day.
	 *
	 * Example
	<pre><code>
	var d1 = Date.today(); // today at 00:00
	var d2 = new Date();   // exactly now.

	// Do they occur on the same day?
	d1.same().day(d2); // true
	
	// Do they occur on the same hour?
	d1.same().hour(d2); // false, unless d2 hour is '00' (midnight).
	
	// What if it's the same day, but one year apart?
	var nextYear = Date.today().add(1).year();

	d1.same().day(nextYear); // false, because the dates must occur on the exact same day. 
	</code></pre>
	 *
	 * Scenario: Determine if a given date occurs during some week period 2 months from now. 
	 *
	 * Example
	<pre><code>
	var future = Date.today().add(2).months();
	return someDate.same().week(future); // true|false;
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.same = function () {
		this._same = true;
		this._isSecond = false;
		return this;
	};

	/** 
	 * Determines if the current date/time occurs during Today. Must be preceded by the .is() function.
	 * Example
	<pre><code>
	someDate.is().today();    // true|false
	new Date().is().today();  // true
	Date.today().is().today();// true
	Date.today().add(-1).day().is().today(); // false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.today = function () {
		return this.same().day();
	};

	/** 
	 * Determines if the current date is a weekday. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekday(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekday = function () {
		if (this._nth) {
			return df("Weekday").call(this);
		}
		if (this._move) {
			return this.addWeekdays(this._orient);
		}
		if (this._is) {
			this._is = false;
			return (!this.is().sat() && !this.is().sun());
		}
		return false;
	};
	/** 
	 * Determines if the current date is on the weekend. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekend(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekend = function () {
		if (this._is) {
			this._is = false;
			return (this.is().sat() || this.is().sun());
		}
		return false;
	};

	/** 
	 * Sets the Time of the current Date instance. A string "6:15 pm" or config object {hour:18, minute:15} are accepted.
	 * Example
	<pre><code>
	// Set time to 6:15pm with a String
	Date.today().at("6:15pm");

	// Set time to 6:15pm with a config object
	Date.today().at({hour:18, minute:15});
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.at = function (time) {
		return (typeof time === "string") ? $D.parse(this.toString("d") + " " + time) : this.set(time);
	};
		
	/** 
	 * Creates a new Date() and adds this (Number) to the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().fromNow();
	(6).months().fromNow();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().fromNow();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.fromNow = $N.after = function (date) {
		var c = {};
		c[this._dateElement] = this;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	/** 
	 * Creates a new Date() and subtract this (Number) from the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().ago();
	(6).months().ago();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().ago();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.ago = $N.before = function (date) {
		var c = {},
		s = (this._dateElement[this._dateElement.length-1] !== "s") ? this._dateElement + "s" : this._dateElement;
		c[s] = this * -1;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	// Do NOT modify the following string tokens. These tokens are used to build dynamic functions.
	// All culture-specific strings can be found in the CultureInfo files.
	var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),
		mx = ("january february march april may june july august september october november december").split(/\s/),
		px = ("Millisecond Second Minute Hour Day Week Month Year Quarter Weekday").split(/\s/),
		pxf = ("Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter").split(/\s/),
		nth = ("final first second third fourth fifth").split(/\s/),
		de;

   /** 
	 * Returns an object literal of all the date parts.
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	// { year: 2008, month: 4, week: 20, day: 13, hour: 18, minute: 9, second: 32, millisecond: 812 }
	
	// The object properties can be referenced directly from the object.
	
	alert(o.day);  // alerts "13"
	alert(o.year); // alerts "2008"
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$P.toObject = function () {
		var o = {};
		for (var i = 0; i < px.length; i++) {
			if (this["get" + pxf[i]]) {
				o[px[i].toLowerCase()] = this["get" + pxf[i]]();
			}
		}
		return o;
	};
   
   /** 
	 * Returns a date created from an object literal. Ignores the .week property if set in the config. 
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	return Date.fromObject(o); // will return the same date. 

	var o2 = {month: 1, day: 20, hour: 18}; // birthday party!
	Date.fromObject(o2);
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$D.fromObject = function(config) {
		config.week = null;
		return Date.today().set(config);
	};
		
	// Create day name functions and abbreviated day name functions (eg. monday(), friday(), fri()).
	
	var df = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getDay() === n;
			}
			if (this._move) { this._move = null; }
			if (this._nth !== null) {
				// If the .second() function was called earlier, remove the _orient 
				// from the date, and then continue.
				// This is required because 'second' can be used in two different context.
				// 
				// Example
				//
				//   Date.today().add(1).second();
				//   Date.march().second().monday();
				// 
				// Things get crazy with the following...
				//   Date.march().add(1).second().second().monday(); // but it works!!
				//  
				if (this._isSecond) {
					this.addSeconds(this._orient * -1);
				}
				// make sure we reset _isSecond
				this._isSecond = false;

				var ntemp = this._nth;
				this._nth = null;
				var temp = this.clone().moveToLastDayOfMonth();
				this.moveToNthOccurrence(n, ntemp);
				if (this > temp) {
					throw new RangeError($D.getDayName(n) + " does not occur " + ntemp + " times in the month of " + $D.getMonthName(temp.getMonth()) + " " + temp.getFullYear() + ".");
				}
				return this;
			}
			return this.moveToDayOfWeek(n, this._orient);
		};
	};
	
	var sdf = function (n) {
		return function () {
			var t = $D.today(), shift = n - t.getDay();
			if (n === 0 && Date.CultureInfo.firstDayOfWeek === 1 && t.getDay() !== 0) {
				shift = shift + 7;
			}
			return t.addDays(shift);
		};
	};
	

	
	// Create month name functions and abbreviated month name functions (eg. january(), march(), mar()).
	var month_instance_functions = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getMonth() === n;
			}
			return this.moveToMonth(n, this._orient);
		};
	};
	
	var month_static_functions = function (n) {
		return function () {
			return $D.today().set({ month: n, day: 1 });
		};
	};
	
	var processTerms = function (names, staticFunc, instanceFunc) {
		for (var i = 0; i < names.length; i++) {
			// Create constant static Name variables.
			$D[names[i].toUpperCase()] = $D[names[i].toUpperCase().substring(0, 3)] = i;
			// Create Name functions.
			$D[names[i]] = $D[names[i].substring(0, 3)] = staticFunc(i);
			// Create Name instance functions.
			$P[names[i]] = $P[names[i].substring(0, 3)] = instanceFunc(i);
		}

	};

	processTerms(dx, sdf, df);
	processTerms(mx, month_static_functions, month_instance_functions);
	
	// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
	var ef = function (j) {
		return function () {
			// if the .second() function was called earlier, the _orient 
			// has alread been added. Just return this and reset _isSecond.
			if (this._isSecond) {
				this._isSecond = false;
				return this;
			}

			if (this._same) {
				this._same = this._is = false;
				var o1 = this.toObject(),
					o2 = (arguments[0] || new Date()).toObject(),
					v = "",
					k = j.toLowerCase();

				// the substr trick with -1 doesn't work in IE8 or less
				k = (k[k.length-1] === "s") ? k.substring(0,k.length-1) : k;
					
				for (var m = (px.length - 1); m > -1; m--) {
					v = px[m].toLowerCase();
					if (o1[v] !== o2[v]) {
						return false;
					}
					if (k === v) {
						break;
					}
				}
				return true;
			}
			
			if (j.substring(j.length - 1) !== "s") {
				j += "s";
			}
			if (this._move) { this._move = null; }
			return this["add" + j](this._orient);
		};
	};
	
	
	var nf = function (n) {
		return function () {
			this._dateElement = n;
			return this;
		};
	};
   
	for (var k = 0; k < px.length; k++) {
		de = px[k].toLowerCase();
		if(de !== "weekday") {
			// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
			$P[de] = $P[de + "s"] = ef(px[k]);
			
			// Create date element functions and plural date element functions used with Number (eg. day(), days(), months()).
			$N[de] = $N[de + "s"] = nf(de + "s");
		}
	}
	
	$P._ss = ef("Second");
	
	var nthfn = function (n) {
		return function (dayOfWeek) {
			if (this._same) {
				return this._ss(arguments[0]);
			}
			if (dayOfWeek || dayOfWeek === 0) {
				return this.moveToNthOccurrence(dayOfWeek, n);
			}
			this._nth = n;

			// if the operator is 'second' add the _orient, then deal with it later...
			if (n === 2 && (dayOfWeek === undefined || dayOfWeek === null)) {
				this._isSecond = true;
				return this.addSeconds(this._orient);
			}
			return this;
		};
	};

	for (var l = 0; l < nth.length; l++) {
		$P[nth[l]] = (l === 0) ? nthfn(-1) : nthfn(l);
	}
}());

(function () {
	"use strict";
	Date.Parsing = {
		Exception: function (s) {
			this.message = "Parse error at '" + s.substring(0, 10) + " ...'";
		}
	};
	var $P = Date.Parsing;
	var dayOffsets = {
		standard: [0,31,59,90,120,151,181,212,243,273,304,334],
		leap: [0,31,60,91,121,152,182,213,244,274,305,335]
	};

	$P.isLeapYear = function(year) {
		return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	};

	var utils = {
		multiReplace : function (str, hash ) {
			var key;
			for (key in hash) {
				if (Object.prototype.hasOwnProperty.call(hash, key)) {
					var regex;
					if (typeof hash[key] === "function") {

					} else {
						regex = (hash[key] instanceof RegExp) ? hash[key] : new RegExp(hash[key], "g");
					}
					str = str.replace(regex, key);
				}
			}
			return str;
		},
		getDayOfYearFromWeek : function (obj) {
			var d, jan4, offset;
			obj.weekDay = (!obj.weekDay && obj.weekDay !== 0) ? 1 : obj.weekDay;
			d = new Date(obj.year, 0, 4);
			jan4 = d.getDay() === 0 ? 7 : d.getDay(); // JS is 0 indexed on Sunday.
			offset = jan4+3;
			obj.dayOfYear = ((obj.week * 7) + (obj.weekDay === 0 ? 7 : obj.weekDay))-offset;
			return obj;
		},
		getDayOfYear : function (obj, dayOffset) {
			if (!obj.dayOfYear) {
				obj = utils.getDayOfYearFromWeek(obj);
			}
			for (var i=0;i <= dayOffset.length;i++) {
				if (obj.dayOfYear < dayOffset[i] || i === dayOffset.length) {
					obj.day = obj.day ? obj.day : (obj.dayOfYear - dayOffset[i-1]);
					break;
				} else {
					obj.month = i;
				}
			}
			return obj;
		},
		adjustForTimeZone : function (obj, date) {
			var offset;
			if (obj.zone.toUpperCase() === "Z" || (obj.zone_hours === 0 && obj.zone_minutes === 0)) {
				// it's UTC/GML so work out the current timeszone offset
				offset = -date.getTimezoneOffset();
			} else {
				offset = (obj.zone_hours*60) + (obj.zone_minutes || 0);
				if (obj.zone_sign === "+") {
					offset *= -1;
				}
				offset -= date.getTimezoneOffset();
			}
			date.setMinutes(date.getMinutes()+offset);
			return date;
		},
		setDefaults : function (obj) {
			obj.year = obj.year || Date.today().getFullYear();
			obj.hours = obj.hours || 0;
			obj.minutes = obj.minutes || 0;
			obj.seconds = obj.seconds || 0;
			obj.milliseconds = obj.milliseconds || 0;
			if (!(!obj.month && (obj.week || obj.dayOfYear))) {
				// if we have a month, or if we don't but don't have the day calculation data
				obj.month = obj.month || 0;
				obj.day = obj.day || 1;
			}
			return obj;
		},
		dataNum: function (data, mod, explict, postProcess) {
			var dataNum = data*1;
			if (mod) {
				if (postProcess) {
					return data ? mod(data)*1 : data;
				} else {
					return data ? mod(dataNum) : data;
				}
			} else if (!explict){
				return data ? dataNum : data;
			} else {
				return (data && typeof data !== "undefined") ? dataNum : data;
			}
		},
		timeDataProcess: function (obj) {
			var timeObj = {};
			for (var x in obj.data) {
				if (obj.data.hasOwnProperty(x)) {
					timeObj[x] = obj.ignore[x] ? obj.data[x] : utils.dataNum(obj.data[x], obj.mods[x], obj.explict[x], obj.postProcess[x]);
				}
			}
			if (obj.data.secmins) {
				obj.data.secmins = obj.data.secmins.replace(",", ".") * 60;
				if (!timeObj.minutes) {
					timeObj.minutes = obj.data.secmins;
				} else if (!timeObj.seconds) {
					timeObj.seconds = obj.data.secmins;
				}
				delete obj.secmins;
			}
			return timeObj;
		},
		buildTimeObjectFromData: function (data) {
			var time = utils.timeDataProcess({
				data: {
					year : data[1],
					month : data[5],
					day : data[7],
					week : data[8],
					dayOfYear : data[10],
					hours : data[15],
					zone_hours : data[23],
					zone_minutes : data[24],
					zone : data[21],
					zone_sign : data[22],
					weekDay : data[9],
					minutes: data[16],
					seconds: data[19],
					milliseconds: data[20],
					secmins: data[18]
				},
				mods: {
					month: function(data) {
						return data-1;
					},
					weekDay: function (data) {
						data = Math.abs(data);
						return (data === 7 ? 0 : data);
					},
					minutes: function (data) {
						return data.replace(":","");
					},
					seconds: function (data) {
						return Math.floor( (data.replace(":","").replace(",","."))*1 );
					},
					milliseconds: function (data) {
						return (data.replace(",",".")*1000);
					}
				},
				postProcess: {
					minutes: true,
					seconds: true,
					milliseconds: true
				},
				explict: {
					zone_hours: true,
					zone_minutes: true
				},
				ignore: {
					zone: true,
					zone_sign: true,
					secmins: true
				}
			});
			return time;
		},
		addToHash: function (hash, keys, data) {
			keys = keys;
			data = data;
			var len = keys.length;
			for (var i = 0; i < len; i++) {
			  hash[keys[i]] = data[i];
			}
			return hash;
		},
		combineRegex: function (r1, r2) {
			return new RegExp("(("+r1.source+")\\s("+r2.source+"))");
		},
		getDateNthString: function(add, last, inc){
			if (add) {
				return Date.today().addDays(inc).toString("d");
			} else if (last) {
				return Date.today().last()[inc]().toString("d");
			}

		},
		buildRegexData: function (array) {
			var arr = [];
			var len = array.length;
			for (var i=0; i < len; i++) {
				if (Object.prototype.toString.call(array[i]) === '[object Array]') { // oldIE compat version of Array.isArray
					arr.push(this.combineRegex(array[i][0], array[i][1]));
				} else {
					arr.push(array[i]);
				}
			}
			return arr;
		}
	};

	$P.processTimeObject = function (obj) {
		var date, dayOffset;

		utils.setDefaults(obj);
		dayOffset = ($P.isLeapYear(obj.year)) ? dayOffsets.leap : dayOffsets.standard;

		if (!obj.month && (obj.week || obj.dayOfYear)) {
			utils.getDayOfYear(obj, dayOffset);
		} else {
			obj.dayOfYear = dayOffset[obj.month] + obj.day;
		}

		date = new Date(obj.year, obj.month, obj.day, obj.hours, obj.minutes, obj.seconds, obj.milliseconds);

		if (obj.zone) {
			utils.adjustForTimeZone(obj, date); // adjust (and calculate) for timezone
		}
		return date;
	};

	$P.ISO = {
		regex : /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
		parse : function (s) {
			var time, data = s.match(this.regex);
			if (!data || !data.length) {
				return null;
			}

			time = utils.buildTimeObjectFromData(data);

			if (!time.year || (!time.year && (!time.month && !time.day) && (!time.week && !time.dayOfYear)) ) {
				return null;
			}
			return $P.processTimeObject(time);
		}
	};

	$P.Numeric = {
		isNumeric: function (e){return!isNaN(parseFloat(e))&&isFinite(e);},
		regex: /\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,
		parse: function (s) {
			var data, i,
				time = {},
				order = Date.CultureInfo.dateElementOrder.split("");
			if (!(this.isNumeric(s)) || // if it's non-numeric OR
				(s[0] === "+" && s[0] === "-")) {			// It's an arithmatic string (eg +/-1000)
				return null;
			}
			if (s.length < 5 && s.indexOf(".") < 0 && s.indexOf("/") < 0) { // assume it's just a year.
				time.year = s;
				return $P.processTimeObject(time);
			}
			data = s.match(this.regex);
			if (!data || !data.length) {
				return null;
			}
			for (i=0; i < order.length; i++) {
				switch(order[i]) {
					case "d":
						time.day = data[i+1];
						break;
					case "m":
						time.month = (data[i+1]-1);
						break;
					case "y":
						time.year = data[i+1];
						break;
				}
			}
			return $P.processTimeObject(time);
		}
	};

	$P.Normalizer = {
		regexData: function () {
			var $R = Date.CultureInfo.regexPatterns;
			return utils.buildRegexData([
				$R.tomorrow,
				$R.yesterday,
				[$R.past, $R.mon],
				[$R.past, $R.tue],
				[$R.past, $R.wed],
				[$R.past, $R.thu],
				[$R.past, $R.fri],
				[$R.past, $R.sat],
				[$R.past, $R.sun]
			]);
		},
		basicReplaceHash : function() {
			var $R = Date.CultureInfo.regexPatterns;
			return {
				"January": $R.jan.source,
				"February": $R.feb,
				"March": $R.mar,
				"April": $R.apr,
				"May": $R.may,
				"June": $R.jun,
				"July": $R.jul,
				"August": $R.aug,
				"September": $R.sep,
				"October": $R.oct,
				"November": $R.nov,
				"December": $R.dec,
				"": /\bat\b/gi,
				" ": /\s{2,}/,
				"am": $R.inTheMorning,
				"9am": $R.thisMorning,
				"pm": $R.inTheEvening,
				"7pm":$R.thisEvening
			};
		},
		keys : function(){
			return [
				utils.getDateNthString(true, false, 1),				// tomorrow
				utils.getDateNthString(true, false, -1),			// yesterday
				utils.getDateNthString(false, true, "monday"),		//last mon
				utils.getDateNthString(false, true, "tuesday"),		//last tues
				utils.getDateNthString(false, true, "wednesday"),	//last wed
				utils.getDateNthString(false, true, "thursday"),	//last thurs
				utils.getDateNthString(false, true, "friday"),		//last fri
				utils.getDateNthString(false, true, "saturday"),	//last sat
				utils.getDateNthString(false, true, "sunday")		//last sun
			];
		},
		buildRegexFunctions: function () {
			var $R = Date.CultureInfo.regexPatterns;
			var __ = Date.i18n.__;
			var tomorrowRE = new RegExp("(\\b\\d\\d?("+__("AM")+"|"+__("PM")+")? )("+$R.tomorrow.source.slice(1)+")", "i"); // adapted tomorrow regex for AM PM relative dates
			var todayRE = new RegExp($R.today.source + "(?!\\s*([+-]))\\b"); // today, but excludes the math operators (eg "today + 2h")

			this.replaceFuncs = [
				[todayRE, function (full) {
					return (full.length > 1) ? Date.today().toString("d") : full;
				}],
				[tomorrowRE,
				function(full, m1) {
					var t = Date.today().addDays(1).toString("d");
					return (t + " " + m1);
				}],
				[$R.amThisMorning, function(str, am){return am;}],
				[$R.pmThisEvening, function(str, pm){return pm;}]
			];

		},
		buildReplaceData: function () {
			this.buildRegexFunctions();
			this.replaceHash = utils.addToHash(this.basicReplaceHash(), this.keys(), this.regexData());
		},
		stringReplaceFuncs: function (s) {
			for (var i=0; i < this.replaceFuncs.length; i++) {
				s = s.replace(this.replaceFuncs[i][0], this.replaceFuncs[i][1]);
			}
			return s;
		},
		parse: function (s) {
			s = this.stringReplaceFuncs(s);
			s = utils.multiReplace(s, this.replaceHash);

			try {
				var n = s.split(/([\s\-\.\,\/\x27]+)/);
				if (n.length === 3 &&
					$P.Numeric.isNumeric(n[0]) &&
					$P.Numeric.isNumeric(n[2]) &&
					(n[2].length >= 4)) {
						// ok, so we're dealing with x/year. But that's not a full date.
						// This fixes wonky dateElementOrder parsing when set to dmy order.
						if (Date.CultureInfo.dateElementOrder[0] === "d") {
							s = "1/" + n[0] + "/" + n[2]; // set to 1st of month and normalize the seperator
						}
				}
			} catch (e) {}

			return s;
		}
	};
	$P.Normalizer.buildReplaceData();
}());
(function () {
	var $P = Date.Parsing;
	var _ = $P.Operators = {
		//
		// Tokenizers
		//
		rtoken: function (r) { // regex token
			return function (s) {
				var mx = s.match(r);
				if (mx) {
					return ([ mx[0], s.substring(mx[0].length) ]);
				} else {
					throw new $P.Exception(s);
				}
			};
		},
		token: function () { // whitespace-eating token
			return function (s) {
				return _.rtoken(new RegExp("^\\s*" + s + "\\s*"))(s);
			};
		},
		stoken: function (s) { // string token
			return _.rtoken(new RegExp("^" + s));
		},

		// Atomic Operators

		until: function (p) {
			return function (s) {
				var qx = [], rx = null;
				while (s.length) {
					try {
						rx = p.call(this, s);
					} catch (e) {
						qx.push(rx[0]);
						s = rx[1];
						continue;
					}
					break;
				}
				return [ qx, s ];
			};
		},
		many: function (p) {
			return function (s) {
				var rx = [], r = null;
				while (s.length) {
					try {
						r = p.call(this, s);
					} catch (e) {
						return [ rx, s ];
					}
					rx.push(r[0]);
					s = r[1];
				}
				return [ rx, s ];
			};
		},

		// generator operators -- see below
		optional: function (p) {
			return function (s) {
				var r = null;
				try {
					r = p.call(this, s);
				} catch (e) {
					return [ null, s ];
				}
				return [ r[0], r[1] ];
			};
		},
		not: function (p) {
			return function (s) {
				try {
					p.call(this, s);
				} catch (e) {
					return [null, s];
				}
				throw new $P.Exception(s);
			};
		},
		ignore: function (p) {
			return p ?
			function (s) {
				var r = null;
				r = p.call(this, s);
				return [null, r[1]];
			} : null;
		},
		product: function () {
			var px = arguments[0],
			qx = Array.prototype.slice.call(arguments, 1), rx = [];
			for (var i = 0 ; i < px.length ; i++) {
				rx.push(_.each(px[i], qx));
			}
			return rx;
		},
		cache: function (rule) {
			var cache = {}, cache_length = 0, cache_keys = [], CACHE_MAX = Date.Config.CACHE_MAX || 100000, r = null;
			var cacheCheck = function () {
				if (cache_length === CACHE_MAX) {
					// kill several keys, don't want to have to do this all the time...
					for (var i=0; i < 10; i++) {
						var key = cache_keys.shift();
						if (key) {
							delete cache[key];
							cache_length--;
						}
					}
				}
			};
			return function (s) {
				cacheCheck();
				try {
					r = cache[s] = (cache[s] || rule.call(this, s));
				} catch (e) {
					r = cache[s] = e;
				}
				cache_length++;
				cache_keys.push(s);
				if (r instanceof $P.Exception) {
					throw r;
				} else {
					return r;
				}
			};
		},

		// vector operators -- see below
		any: function () {
			var px = arguments;
			return function (s) {
				var r = null;
				for (var i = 0; i < px.length; i++) {
					if (px[i] == null) {
						continue;
					}
					try {
						r = (px[i].call(this, s));
					} catch (e) {
						r = null;
					}
					if (r) {
						return r;
					}
				}
				throw new $P.Exception(s);
			};
		},
		each: function () {
			var px = arguments;
			return function (s) {
				var rx = [], r = null;
				for (var i = 0; i < px.length ; i++) {
					if (px[i] == null) {
						continue;
					}
					try {
						r = (px[i].call(this, s));
					} catch (e) {
						throw new $P.Exception(s);
					}
					rx.push(r[0]);
					s = r[1];
				}
				return [ rx, s];
			};
		},
		all: function () {
			var px = arguments, _ = _;
			return _.each(_.optional(px));
		},

		// delimited operators
		sequence: function (px, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			
			if (px.length === 1) {
				return px[0];
			}
			return function (s) {
				var r = null, q = null;
				var rx = [];
				for (var i = 0; i < px.length ; i++) {
					try {
						r = px[i].call(this, s);
					} catch (e) {
						break;
					}
					rx.push(r[0]);
					try {
						q = d.call(this, r[1]);
					} catch (ex) {
						q = null;
						break;
					}
					s = q[1];
				}
				if (!r) {
					throw new $P.Exception(s);
				}
				if (q) {
					throw new $P.Exception(q[1]);
				}
				if (c) {
					try {
						r = c.call(this, r[1]);
					} catch (ey) {
						throw new $P.Exception(r[1]);
					}
				}
				return [ rx, (r?r[1]:s) ];
			};
		},

		//
		// Composite Operators
		//

		between: function (d1, p, d2) {
			d2 = d2 || d1;
			var _fn = _.each(_.ignore(d1), p, _.ignore(d2));
			return function (s) {
				var rx = _fn.call(this, s);
				return [[rx[0][0], r[0][2]], rx[1]];
			};
		},
		list: function (p, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			return (p instanceof Array ?
				_.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) :
				_.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c)));
		},
		set: function (px, d, c) {
			d = d || _.rtoken(/^\s*/);
			c = c || null;
			return function (s) {
				// r is the current match, best the current 'best' match
				// which means it parsed the most amount of input
				var r = null, p = null, q = null, rx = null, best = [[], s], last = false;
				// go through the rules in the given set
				for (var i = 0; i < px.length ; i++) {

					// last is a flag indicating whether this must be the last element
					// if there is only 1 element, then it MUST be the last one
					q = null;
					p = null;
					r = null;
					last = (px.length === 1);
					// first, we try simply to match the current pattern
					// if not, try the next pattern
					try {
						r = px[i].call(this, s);
					} catch (e) {
						continue;
					}
					// since we are matching against a set of elements, the first
					// thing to do is to add r[0] to matched elements
					rx = [[r[0]], r[1]];
					// if we matched and there is still input to parse and 
					// we don't already know this is the last element,
					// we're going to next check for the delimiter ...
					// if there's none, or if there's no input left to parse
					// than this must be the last element after all ...
					if (r[1].length > 0 && ! last) {
						try {
							q = d.call(this, r[1]);
						} catch (ex) {
							last = true;
						}
					} else {
						last = true;
					}

					// if we parsed the delimiter and now there's no more input,
					// that means we shouldn't have parsed the delimiter at all
					// so don't update r and mark this as the last element ...
					if (!last && q[1].length === 0) {
						last = true;
					}


					// so, if this isn't the last element, we're going to see if
					// we can get any more matches from the remaining (unmatched)
					// elements ...
					if (!last) {
						// build a list of the remaining rules we can match against,
						// i.e., all but the one we just matched against
						var qx = [];
						for (var j = 0; j < px.length ; j++) {
							if (i !== j) {
								qx.push(px[j]);
							}
						}

						// now invoke recursively set with the remaining input
						// note that we don't include the closing delimiter ...
						// we'll check for that ourselves at the end
						p = _.set(qx, d).call(this, q[1]);

						// if we got a non-empty set as a result ...
						// (otw rx already contains everything we want to match)
						if (p[0].length > 0) {
							// update current result, which is stored in rx ...
							// basically, pick up the remaining text from p[1]
							// and concat the result from p[0] so that we don't
							// get endless nesting ...
							rx[0] = rx[0].concat(p[0]);
							rx[1] = p[1];
						}
					}

					// at this point, rx either contains the last matched element
					// or the entire matched set that starts with this element.

					// now we just check to see if this variation is better than
					// our best so far, in terms of how much of the input is parsed
					if (rx[1].length < best[1].length) {
						best = rx;
					}

					// if we've parsed all the input, then we're finished
					if (best[1].length === 0) {
						break;
					}
				}

				// so now we've either gone through all the patterns trying them
				// as the initial match; or we found one that parsed the entire
				// input string ...

				// if best has no matches, just return empty set ...
				if (best[0].length === 0) {
					return best;
				}

				// if a closing delimiter is provided, then we have to check it also
				if (c) {
					// we try this even if there is no remaining input because the pattern
					// may well be optional or match empty input ...
					try {
						q = c.call(this, best[1]);
					} catch (ey) {
						throw new $P.Exception(best[1]);
					}

					// it parsed ... be sure to update the best match remaining input
					best[1] = q[1];
				}
				// if we're here, either there was no closing delimiter or we parsed it
				// so now we have the best match; just return it!
				return best;
			};
		},
		forward: function (gr, fname) {
			return function (s) {
				return gr[fname].call(this, s);
			};
		},

		//
		// Translation Operators
		//
		replace: function (rule, repl) {
			return function (s) {
				var r = rule.call(this, s);
				return [repl, r[1]];
			};
		},
		process: function (rule, fn) {
			return function (s) {
				var r = rule.call(this, s);
				return [fn.call(this, r[0]), r[1]];
			};
		},
		min: function (min, rule) {
			return function (s) {
				var rx = rule.call(this, s);
				if (rx[0].length < min) {
					throw new $P.Exception(s);
				}
				return rx;
			};
		}
	};
	

	// Generator Operators And Vector Operators

	// Generators are operators that have a signature of F(R) => R,
	// taking a given rule and returning another rule, such as 
	// ignore, which parses a given rule and throws away the result.

	// Vector operators are those that have a signature of F(R1,R2,...) => R,
	// take a list of rules and returning a new rule, such as each.

	// Generator operators are converted (via the following _generator
	// function) into functions that can also take a list or array of rules
	// and return an array of new rules as though the function had been
	// called on each rule in turn (which is what actually happens).

	// This allows generators to be used with vector operators more easily.
	// Example:
	// each(ignore(foo, bar)) instead of each(ignore(foo), ignore(bar))

	// This also turns generators into vector operators, which allows
	// constructs like:
	// not(cache(foo, bar))
	
	var _generator = function (op) {
		function gen() {
			var args = null, rx = [], px, i;
			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			} else if (arguments[0] instanceof Array) {
				args = arguments[0];
			}
			if (args) {
				px = args.shift();
				if (px.length > 0) {
					args.unshift(px[i]);
					rx.push(op.apply(null, args));
					args.shift();
					return rx;
				}
			} else {
				return op.apply(null, arguments);
			}
		}

		return gen;
	};
	
	var gx = "optional not ignore cache".split(/\s/);
	
	for (var i = 0 ; i < gx.length ; i++) {
		_[gx[i]] = _generator(_[gx[i]]);
	}

	var _vector = function (op) {
		return function () {
			if (arguments[0] instanceof Array) {
				return op.apply(null, arguments[0]);
			} else {
				return op.apply(null, arguments);
			}
		};
	};
	
	var vx = "each any all".split(/\s/);
	
	for (var j = 0 ; j < vx.length ; j++) {
		_[vx[j]] = _vector(_[vx[j]]);
	}
	
}());
(function () {
	var $D = Date;

	var flattenAndCompact = function (ax) {
		var rx = [];
		for (var i = 0; i < ax.length; i++) {
			if (ax[i] instanceof Array) {
				rx = rx.concat(flattenAndCompact(ax[i]));
			} else {
				if (ax[i]) {
					rx.push(ax[i]);
				}
			}
		}
		return rx;
	};

	var parseMeridian = function () {
		if (this.meridian && (this.hour || this.hour === 0)) {
			if (this.meridian === "a" && this.hour > 11 && Date.Config.strict24hr){
				throw "Invalid hour and meridian combination";
			} else if (this.meridian === "p" && this.hour < 12 && Date.Config.strict24hr){
				throw "Invalid hour and meridian combination";
			} else if (this.meridian === "p" && this.hour < 12) {
				this.hour = this.hour + 12;
			} else if (this.meridian === "a" && this.hour === 12) {
				this.hour = 0;
			}
		}
	};

	var setDefaults = function () {
		var now = new Date();
		if ((this.hour || this.minute) && (!this.month && !this.year && !this.day)) {
			this.day = now.getDate();
		}

		if (!this.year) {
			this.year = now.getFullYear();
		}
		
		if (!this.month && this.month !== 0) {
			this.month = now.getMonth();
		}
		
		if (!this.day) {
			this.day = 1;
		}
		
		if (!this.hour) {
			this.hour = 0;
		}
		
		if (!this.minute) {
			this.minute = 0;
		}

		if (!this.second) {
			this.second = 0;
		}
		if (!this.millisecond) {
			this.millisecond = 0;
		}
	};

	var finishUtils = {
		getToday: function () {
			 if (this.now || "hour minute second".indexOf(this.unit) !== -1) {
				return new Date();
			} else {
				return $D.today();
			}
		},
		setDaysFromWeekday: function (today, orient){
			var gap;
			orient = orient || 1;
			this.unit = "day";
			gap = ($D.getDayNumberFromName(this.weekday) - today.getDay());
			this.days = gap ? ((gap + (orient * 7)) % 7) : (orient * 7);
			return this;
		},
		setMonthsFromMonth: function (today, orient) {
			var gap;
			orient = orient || 1;
			this.unit = "month";
			gap = (this.month - today.getMonth());
			this.months = gap ? ((gap + (orient * 12)) % 12) : (orient * 12);
			this.month = null;
			return this;
		},
		setDMYFromWeekday: function () {
			var d = Date[this.weekday]();
			this.day = d.getDate();
			if (!this.month) {
				this.month = d.getMonth();
			}
			this.year = d.getFullYear();
			return this;
		},
		setUnitValue: function (orient) {
			if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) {
				this[this.unit + "s"] = this[this.unit + "s"] + ((this.operator === "add") ? 1 : -1) + (this.value||0) * orient;
			} else if (this[this.unit + "s"] == null || this.operator != null) {
				if (!this.value) {
					this.value = 1;
				}
				this[this.unit + "s"] = this.value * orient;
			}
		},
		generateDateFromWeeks: function () {
			var weekday = (this.weekday !== undefined) ? this.weekday : "today";
			var d = Date[weekday]().addWeeks(this.weeks);
			if (this.now) {
				d.setTimeToNow();
			}
			return d;
		}
	};

	$D.Translator = {
		hour: function (s) {
			return function () {
				this.hour = Number(s);
			};
		},
		minute: function (s) {
			return function () {
				this.minute = Number(s);
			};
		},
		second: function (s) {
			return function () {
				this.second = Number(s);
			};
		},
		/* for ss.s format */
		secondAndMillisecond: function (s) {
			return function () {
				var mx = s.match(/^([0-5][0-9])\.([0-9]{1,3})/);
				this.second = Number(mx[1]);
				this.millisecond = Number(mx[2]);
			};
		},
		meridian: function (s) {
			return function () {
				this.meridian = s.slice(0, 1).toLowerCase();
			};
		},
		timezone: function (s) {
			return function () {
				var n = s.replace(/[^\d\+\-]/g, "");
				if (n.length) {
					this.timezoneOffset = Number(n);
				} else {
					this.timezone = s.toLowerCase();
				}
			};
		},
		day: function (x) {
			var s = x[0];
			return function () {
				this.day = Number(s.match(/\d+/)[0]);
				if (this.day < 1) {
					throw "invalid day";
				}
			};
		},
		month: function (s) {
			return function () {
				this.month = (s.length === 3) ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4 : Number(s) - 1;
				if (this.month < 0) {
					throw "invalid month";
				}
			};
		},
		year: function (s) {
			return function () {
				var n = Number(s);
				this.year = ((s.length > 2) ? n :
					(n + (((n + 2000) < Date.CultureInfo.twoDigitYearMax) ? 2000 : 1900)));
			};
		},
		rday: function (s) {
			return function () {
				switch (s) {
					case "yesterday":
						this.days = -1;
						break;
					case "tomorrow":
						this.days = 1;
						break;
					case "today":
						this.days = 0;
						break;
					case "now":
						this.days = 0;
						this.now = true;
						break;
				}
			};
		},
		finishExact: function (x) {
			var d;
			x = (x instanceof Array) ? x : [x];

			for (var i = 0 ; i < x.length ; i++) {
				if (x[i]) {
					x[i].call(this);
				}
			}
			
			setDefaults.call(this);
			parseMeridian.call(this);

			if (this.day > $D.getDaysInMonth(this.year, this.month)) {
				throw new RangeError(this.day + " is not a valid value for days.");
			}

			d = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
			if (this.year < 100) {
				d.setFullYear(this.year); // means years less that 100 are process correctly. JS will parse it otherwise as 1900-1999.
			}
			if (this.timezone) {
				d.set({ timezone: this.timezone });
			} else if (this.timezoneOffset) {
				d.set({ timezoneOffset: this.timezoneOffset });
			}
			
			return d;
		},
		finish: function (x) {
			var today, expression, orient, temp;

			x = (x instanceof Array) ? flattenAndCompact(x) : [ x ];

			if (x.length === 0) {
				return null;
			}

			for (var i = 0 ; i < x.length ; i++) {
				if (typeof x[i] === "function") {
					x[i].call(this);
				}
			}
			if (this.now && !this.unit && !this.operator) {
				return new Date();
			} else {
				today = finishUtils.getToday.call(this);
			}
			
			expression = !!(this.days && this.days !== null || this.orient || this.operator);
			orient = ((this.orient === "past" || this.operator === "subtract") ? -1 : 1);

			if (this.month && this.unit === "week") {
				this.value = this.month + 1;
				delete this.month;
				delete this.day;
			}

			if ((this.month || this.month === 0) && "year day hour minute second".indexOf(this.unit) !== -1) {
				if (!this.value) {
					this.value = this.month + 1;
				}
				this.month = null;
				expression = true;
			}

			if (!expression && this.weekday && !this.day && !this.days) {
				finishUtils.setDMYFromWeekday.call(this);
			}

			if (expression && this.weekday && this.unit !== "month" && this.unit !== "week") {
				finishUtils.setDaysFromWeekday.call(this, today, orient);
			}

			if (this.weekday && this.unit !== "week" && !this.day && !this.days) {
				temp = Date[this.weekday]();
				this.day = temp.getDate();
				if (temp.getMonth() !== today.getMonth()) {
					this.month = temp.getMonth();
				}
			}

			if (this.month && this.unit === "day" && this.operator) {
				if (!this.value) {
					this.value = (this.month + 1);
				}
				this.month = null;
			}

			if (this.value != null && this.month != null && this.year != null) {
				this.day = this.value * 1;
			}

			if (this.month && !this.day && this.value) {
				today.set({ day: this.value * 1 });
				if (!expression) {
					this.day = this.value * 1;
				}
			}

			if (!this.month && this.value && this.unit === "month" && !this.now) {
				this.month = this.value;
				expression = true;
			}

			if (expression && (this.month || this.month === 0) && this.unit !== "year") {
				finishUtils.setMonthsFromMonth.call(this, today, orient);
			}

			if (!this.unit) {
				this.unit = "day";
			}

			finishUtils.setUnitValue.call(this, orient);
			parseMeridian.call(this);
			
			if ((this.month || this.month === 0) && !this.day) {
				this.day = 1;
			}

			if (!this.orient && !this.operator && this.unit === "week" && this.value && !this.day && !this.month) {
				return Date.today().setWeek(this.value);
			}

			if (this.unit === "week" && this.weeks && !this.day && !this.month) {
				return finishUtils.generateDateFromWeeks.call(this);
			}

			if (expression && this.timezone && this.day && this.days) {
				this.day = this.days;
			}

			if (expression){
				today.add(this);
			} else {
				today.set(this);
			}
			
			if (this.timezone) {
				this.timezone = this.timezone.toUpperCase();
				var offset = $D.getTimezoneOffset(this.timezone);
				var timezone;
				if (today.hasDaylightSavingTime()) {
					// lets check that we're being sane with timezone setting
					timezone = $D.getTimezoneAbbreviation(offset, today.isDaylightSavingTime());
					if (timezone !== this.timezone) {
						// bugger, we're in a place where things like EST vs EDT matters.
						if (today.isDaylightSavingTime()) {
							today.addHours(-1);
						} else {
							today.addHours(1);
						}
					}
				}
				today.setTimezoneOffset(offset);
			}

			return today;
		}
	};
}());
(function () {
	var $D = Date;
	$D.Grammar = {};
	var _ = $D.Parsing.Operators, g = $D.Grammar, t = $D.Translator, _fn;
	// Allow rolling up into general purpose rules
	_fn = function () {
		return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext")));
	};
	
	g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/);
	g.timePartDelimiter = _.stoken(":");
	g.whiteSpace = _.rtoken(/^\s*/);
	g.generalDelimiter = _.rtoken(/^(([\s\,]|at|@|on)+)/);
  
	var _C = {};
	g.ctoken = function (keys) {
		var fn = _C[keys];
		if (! fn) {
			var c = Date.CultureInfo.regexPatterns;
			var kx = keys.split(/\s+/), px = [];
			for (var i = 0; i < kx.length ; i++) {
				px.push(_.replace(_.rtoken(c[kx[i]]), kx[i]));
			}
			fn = _C[keys] = _.any.apply(null, px);
		}
		return fn;
	};
	g.ctoken2 = function (key) {
		return _.rtoken(Date.CultureInfo.regexPatterns[key]);
	};
	var cacheProcessRtoken = function (key, token, type, eachToken) {
		if (eachToken) {
			g[key] = _.cache(_.process(_.each(_.rtoken(token),_.optional(g.ctoken2(eachToken))), type));
		} else {
			g[key] = _.cache(_.process(_.rtoken(token), type));
		}
	};
	var cacheProcessCtoken = function (token, type) {
		return _.cache(_.process(g.ctoken2(token), type));
	};
	var _F = {}; //function cache

	var _get = function (f) {
		_F[f] = (_F[f] || g.format(f)[0]);
		return _F[f];
	};

	g.allformats = function (fx) {
		var rx = [];
		if (fx instanceof Array) {
			for (var i = 0; i < fx.length; i++) {
				rx.push(_get(fx[i]));
			}
		} else {
			rx.push(_get(fx));
		}
		return rx;
	};
  
	g.formats = function (fx) {
		if (fx instanceof Array) {
			var rx = [];
			for (var i = 0 ; i < fx.length ; i++) {
				rx.push(_get(fx[i]));
			}
			return _.any.apply(null, rx);
		} else {
			return _get(fx);
		}
	};

	var grammarFormats = {
		 timeFormats: function(){
			var i,
			RTokenKeys = [
				"h",
				"hh",
				"H",
				"HH",
				"m",
				"mm",
				"s",
				"ss",
				"ss.s",
				"z",
				"zz"
			],
			RToken = [
				/^(0[0-9]|1[0-2]|[1-9])/,
				/^(0[0-9]|1[0-2])/,
				/^([0-1][0-9]|2[0-3]|[0-9])/,
				/^([0-1][0-9]|2[0-3])/,
				/^([0-5][0-9]|[0-9])/,
				/^[0-5][0-9]/,
				/^([0-5][0-9]|[0-9])/,
				/^[0-5][0-9]/,
				/^[0-5][0-9]\.[0-9]{1,3}/,
				/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/,
				/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/
			],
			tokens = [
				t.hour,
				t.hour,
				t.hour,
				t.minute,
				t.minute,
				t.second,
				t.second,
				t.secondAndMillisecond,
				t.timezone,
				t.timezone,
				t.timezone
			];

			for (i=0; i < RTokenKeys.length; i++) {
				cacheProcessRtoken(RTokenKeys[i], RToken[i], tokens[i]);
			}

			g.hms = _.cache(_.sequence([g.H, g.m, g.s], g.timePartDelimiter));

			g.t = cacheProcessCtoken("shortMeridian", t.meridian);
			g.tt = cacheProcessCtoken("longMeridian", t.meridian);
			g.zzz = cacheProcessCtoken("timezone", t.timezone);

			g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([ g.tt, g.zzz ]));
			g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix);
		 },
		 dateFormats: function () {
			// pre-loaded rules for different date part order preferences
			var _setfn = function () {
				return  _.set(arguments, g.datePartDelimiter);
			};
			var i,
			RTokenKeys = [
				"d",
				"dd",
				"M",
				"MM",
				"y",
				"yy",
				"yyy",
				"yyyy"
			],
			RToken = [
				/^([0-2]\d|3[0-1]|\d)/,
				/^([0-2]\d|3[0-1])/,
				/^(1[0-2]|0\d|\d)/,
				/^(1[0-2]|0\d)/,
				/^(\d+)/,
				/^(\d\d)/,
				/^(\d\d?\d?\d?)/,
				/^(\d\d\d\d)/
			],
			tokens = [
				t.day,
				t.day,
				t.month,
				t.month,
				t.year,
				t.year,
				t.year,
				t.year
			],
			eachToken = [
				"ordinalSuffix",
				"ordinalSuffix"
			];
			for (i=0; i < RTokenKeys.length; i++) {
				cacheProcessRtoken(RTokenKeys[i], RToken[i], tokens[i], eachToken[i]);
			}

			g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month));
			g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),
				function (s) {
					return function () {
						this.weekday = s;
					};
				}
			));

			g.day = _fn(g.d, g.dd);
			g.month = _fn(g.M, g.MMM);
			g.year = _fn(g.yyyy, g.yy);

			g.mdy = _setfn(g.ddd, g.month, g.day, g.year);
			g.ymd = _setfn(g.ddd, g.year, g.month, g.day);
			g.dmy = _setfn(g.ddd, g.day, g.month, g.year);
						
			g.date = function (s) {
				return ((g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s));
			};
		 },
		 relative: function () {
			// relative date / time expressions
			g.orientation = _.process(g.ctoken("past future"),
				function (s) {
					return function () {
						this.orient = s;
					};
				}
			);

			g.operator = _.process(g.ctoken("add subtract"),
				function (s) {
					return function () {
						this.operator = s;
					};
				}
			);
			g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday);
			g.unit = _.process(g.ctoken("second minute hour day week month year"),
				function (s) {
					return function () {
						this.unit = s;
					};
				}
			);
		 }
	};

	g.buildGrammarFormats = function () {
		// these need to be rebuilt every time the language changes.
		_C = {};

		grammarFormats.timeFormats();
		grammarFormats.dateFormats();
		grammarFormats.relative();

		
		g.value = _.process(_.rtoken(/^([-+]?\d+)?(st|nd|rd|th)?/),
			function (s) {
				return function () {
					this.value = s.replace(/\D/g, "");
				};
			}
		);
		g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM ]);

		g.format = _.process(_.many(
			_.any(
				// translate format specifiers into grammar rules
				_.process(
					_.rtoken(/^(dd?d?d?(?!e)|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),
						function (fmt) {
							if (g[fmt]) {
								return g[fmt];
							} else {
								throw $D.Parsing.Exception(fmt);
							}
						}
					),
					// translate separator tokens into token rules
					_.process(_.rtoken(/^[^dMyhHmstz]+/), // all legal separators 
						function (s) {
							return _.ignore(_.stoken(s));
						}
					)
				)
			),
			// construct the parser ...
			function (rules) {
				return _.process(_.each.apply(null, rules), t.finishExact);
			}
		);

		// starting rule for general purpose grammar
		g._start = _.process(_.set([ g.date, g.time, g.expression ],
		g.generalDelimiter, g.whiteSpace), t.finish);
	};

	g.buildGrammarFormats();
	// parsing date format specifiers - ex: "h:m:s tt" 
	// this little guy will generate a custom parser based
	// on the format string, ex: g.format("h:m:s tt")
	// check for these formats first
	g._formats = g.formats([
		"\"yyyy-MM-ddTHH:mm:ssZ\"",
		"yyyy-MM-ddTHH:mm:ss.sz",
		"yyyy-MM-ddTHH:mm:ssZ",
		"yyyy-MM-ddTHH:mm:ssz",
		"yyyy-MM-ddTHH:mm:ss",
		"yyyy-MM-ddTHH:mmZ",
		"yyyy-MM-ddTHH:mmz",
		"yyyy-MM-ddTHH:mm",
		"ddd, MMM dd, yyyy H:mm:ss tt",
		"ddd MMM d yyyy HH:mm:ss zzz",
		"MMddyyyy",
		"ddMMyyyy",
		"Mddyyyy",
		"ddMyyyy",
		"Mdyyyy",
		"dMyyyy",
		"yyyy",
		"Mdyy",
		"dMyy",
		"d"
	]);
	
	// real starting rule: tries selected formats first, 
	// then general purpose rule
	g.start = function (s) {
		try {
			var r = g._formats.call({}, s);
			if (r[1].length === 0) {
				return r;
			}
		} catch (e) {}
		return g._start.call({}, s);
	};
}());
(function () {
	var $D = Date;

	/**
	 * @desc Converts the specified string value into its JavaScript Date equivalent using CultureInfo specific format information.
	 * 
	 * Example
	<pre><code>
	///////////
	// Dates //
	///////////

	// 15-Oct-2004
	var d1 = Date.parse("10/15/2004");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15");

	//Fri Oct 15, 2004
	var d1 = Date.parse("Fri Oct 15, 2004");

	///////////
	// Times //
	///////////

	// Today at 10 PM.
	var d1 = Date.parse("10 PM");

	// Today at 10:30 PM.
	var d1 = Date.parse("10:30 P.M.");

	// Today at 6 AM.
	var d1 = Date.parse("06am");

	/////////////////////
	// Dates and Times //
	/////////////////////

	// 8-July-2004 @ 10:30 PM
	var d1 = Date.parse("July 8th, 2004, 10:30 PM");

	// 1-July-2004 @ 10:30 PM
	var d1 = Date.parse("2004-07-01T22:30:00");

	////////////////////
	// Relative Dates //
	////////////////////

	// Returns today's date. The string "today" is culture specific.
	var d1 = Date.parse("today");

	// Returns yesterday's date. The string "yesterday" is culture specific.
	var d1 = Date.parse("yesterday");

	// Returns the date of the next thursday.
	var d1 = Date.parse("Next thursday");

	// Returns the date of the most previous monday.
	var d1 = Date.parse("last monday");

	// Returns today's day + one year.
	var d1 = Date.parse("next year");

	///////////////
	// Date Math //
	///////////////

	// Today + 2 days
	var d1 = Date.parse("t+2");

	// Today + 2 days
	var d1 = Date.parse("today + 2 days");

	// Today + 3 months
	var d1 = Date.parse("t+3m");

	// Today - 1 year
	var d1 = Date.parse("today - 1 year");

	// Today - 1 year
	var d1 = Date.parse("t-1y"); 


	/////////////////////////////
	// Partial Dates and Times //
	/////////////////////////////

	// July 15th of this year.
	var d1 = Date.parse("July 15");

	// 15th day of current day and year.
	var d1 = Date.parse("15");

	// July 1st of current year at 10pm.
	var d1 = Date.parse("7/1 10pm");
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required]
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	var parseUtils = {
		removeOrds: function (s) {
			ords = s.match(/\b(\d+)(?:st|nd|rd|th)\b/); // find ordinal matches
			s = ((ords && ords.length === 2) ? s.replace(ords[0], ords[1]) : s);
			return s;
		},
		grammarParser: function (s) {
			var r = null;
			try {
				r = $D.Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
			} catch (e) {
				return null;
			}
			
			return ((r[1].length === 0) ? r[0] : null);
		},
		nativeFallback: function(s) {
			var t;
			try {
				// ok we haven't parsed it, last ditch attempt with the built-in parser.
				t = Date._parse(s);
				return (t || t === 0) ? new Date(t) : null;
			} catch (e) {
				return null;
			}
		}
	};
	function parse (s) {
		var d;
		if (!s) {
			return null;
		}
		if (s instanceof Date) {
			return s.clone();
		}
		if (s.length >= 4 && s.charAt(0) !== "0" && s.charAt(0) !== "+"&& s.charAt(0) !== "-") { // ie: 2004 will pass, 0800 won't.
			//  Start with specific formats
			d = $D.Parsing.ISO.parse(s) || $D.Parsing.Numeric.parse(s);
		}
		if (d instanceof Date && !isNaN(d.getTime())) {
			return d;
		} else {
			// find ordinal dates (1st, 3rd, 8th, etc and remove them as they cause parsing issues)
			s = $D.Parsing.Normalizer.parse(parseUtils.removeOrds(s));
			d = parseUtils.grammarParser(s);
			if (d !== null) {
				return d;
			} else {
				return parseUtils.nativeFallback(s);
			}
		}
	}

	if (!$D._parse) {
		$D._parse = $D.parse;
	}
	$D.parse = parse;

	Date.getParseFunction = function (fx) {
		var fns = Date.Grammar.allformats(fx);
		return function (s) {
			var r = null;
			for (var i = 0; i < fns.length; i++) {
				try {
					r = fns[i].call({}, s);
				} catch (e) {
					continue;
				}
				if (r[1].length === 0) {
					return r[0];
				}
			}
			return null;
		};
	};
	
	/**
	 * Converts the specified string value into its JavaScript Date equivalent using the specified format {String} or formats {Array} and the CultureInfo specific format information.
	 * The format of the string value must match one of the supplied formats exactly.
	 * 
	 * Example
	<pre><code>
	// 15-Oct-2004
	var d1 = Date.parseExact("10/15/2004", "M/d/yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004", "M-ddd-yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15", "yyyy.MM.dd");

	// Multiple formats
	var d1 = Date.parseExact("10/15/2004", ["M/d/yyyy", "MMMM d, yyyy"]);
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required].
	 * @param {Object}   The expected format {String} or an array of expected formats {Array} of the date string [Required].
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	$D.parseExact = function (s, fx) {
		return $D.getParseFunction(fx)(s);
	};
}());

(function () {
	var $D = Date,
		$P = $D.prototype,
		// $C = $D.CultureInfo, // not used atm
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	/**
	 * Converts a PHP format string to Java/.NET format string.
	 * A PHP format string can be used with ._format or .format.
	 * A Java/.NET format string can be used with .toString().
	 * The .parseExact function will only accept a Java/.NET format string
	 *
	 * Example
	 * var f1 = "%m/%d/%y"
	 * var f2 = Date.normalizeFormat(f1);	// "MM/dd/yy"
	 *
	 * new Date().format(f1);	// "04/13/08"
	 * new Date()._format(f1);	// "04/13/08"
	 * new Date().toString(f2);	// "04/13/08"
	 *
	 * var date = Date.parseExact("04/13/08", f2); // Sun Apr 13 2008
	 *
	 * @param {String}   A PHP format string consisting of one or more format spcifiers.
	 * @return {String}  The PHP format converted to a Java/.NET format string.
	 */
	 var normalizerSubstitutions = {
		"d" : "dd",
		"%d": "dd",
		"D" : "ddd",
		"%a": "ddd",
		"j" : "dddd",
		"l" : "dddd",
		"%A": "dddd",
		"S" : "S",
		"F" : "MMMM",
		"%B": "MMMM",
		"m" : "MM",
		"%m": "MM",
		"M" : "MMM",
		"%b": "MMM",
		"%h": "MMM",
		"n" : "M",
		"Y" : "yyyy",
		"%Y": "yyyy",
		"y" : "yy",
		"%y": "yy",
		"g" : "h",
		"%I": "h",
		"G" : "H",
		"h" : "hh",
		"H" : "HH",
		"%H": "HH",
		"i" : "mm",
		"%M": "mm",
		"s" : "ss",
		"%S": "ss",
		"%r": "hh:mm tt",
		"%R": "H:mm",
		"%T": "H:mm:ss",
		"%X": "t",
		"%x": "d",
		"%e": "d",
		"%D": "MM/dd/yy",
		"%n": "\\n",
		"%t": "\\t",
		"e" : "z",
		"T" : "z",
		"%z": "z",
		"%Z": "z",
		"Z" : "ZZ",
		"N" : "u",
		"w" : "u",
		"%w": "u",
		"W" : "W",
		"%V": "W"
	};
	var normalizer = {
		substitutes: function (m) {
			return normalizerSubstitutions[m];
		},
		interpreted: function (m, x) {
			var y;
			switch (m) {
				case "%u":
					return x.getDay() + 1;
				case "z":
					return x.getOrdinalNumber();
				case "%j":
					return p(x.getOrdinalNumber(), 3);
				case "%U":
					var d1 = x.clone().set({month: 0, day: 1}).addDays(-1).moveToDayOfWeek(0),
						d2 = x.clone().addDays(1).moveToDayOfWeek(0, -1);
					return (d2 < d1) ? "00" : p((d2.getOrdinalNumber() - d1.getOrdinalNumber()) / 7 + 1);

				case "%W":
					return p(x.getWeek());
				case "t":
					return $D.getDaysInMonth(x.getFullYear(), x.getMonth());
				case "o":
				case "%G":
					return x.setWeek(x.getISOWeek()).toString("yyyy");
				case "%g":
					return x._format("%G").slice(-2);
				case "a":
				case "%p":
					return t("tt").toLowerCase();
				case "A":
					return t("tt").toUpperCase();
				case "u":
					return p(x.getMilliseconds(), 3);
				case "I":
					return (x.isDaylightSavingTime()) ? 1 : 0;
				case "O":
					return x.getUTCOffset();
				case "P":
					y = x.getUTCOffset();
					return y.substring(0, y.length - 2) + ":" + y.substring(y.length - 2);
				case "B":
					var now = new Date();
					return Math.floor(((now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds() + (now.getTimezoneOffset() + 60) * 60) / 86.4);
				case "c":
					return x.toISOString().replace(/\"/g, "");
				case "U":
					return $D.strtotime("now");
				case "%c":
					return t("d") + " " + t("t");
				case "%C":
					return Math.floor(x.getFullYear() / 100 + 1);
			}
		},
		shouldOverrideDefaults: function (m) {
			switch (m) {
				case "%e":
					return true;
				default:
					return false;
			}
		},
		parse: function (m, context) {
			var formatString, c = context || new Date();
			formatString = normalizer.substitutes(m);
			if (formatString) {
				return formatString;
			}
			formatString = normalizer.interpreted(m, c);

			if (formatString) {
				return formatString;
			} else {
				return m;
			}
		}
	};

	$D.normalizeFormat = function (format, context) {
		return format.replace(/(%|\\)?.|%%/g, function(t){
				return normalizer.parse(t, context);
		});
	};
	/**
	 * Format a local Unix timestamp according to locale settings
	 *
	 * Example:
	 * Date.strftime("%m/%d/%y", new Date());		// "04/13/08"
	 * Date.strftime("c", "2008-04-13T17:52:03Z");	// "04/13/08"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Number|String}   The number representing the number of seconds that have elapsed since January 1, 1970 (local time).
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strftime = function (format, time) {
		var d = Date.parse(time);
		return d._format(format);
	};
	/**
	 * Parse any textual datetime description into a Unix timestamp.
	 * A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
	 *
	 * Example:
	 * Date.strtotime("04/13/08");				// 1208044800
	 * Date.strtotime("1970-01-01T00:00:00Z");	// 0
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Object}   A string or date object.
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strtotime = function (time) {
		var d = $D.parse(time);
		return Math.round($D.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()) / 1000);
	};
	/**
	 * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
	 * Format Specifiers
	 * Format  Description																	Example
	 * ------  ---------------------------------------------------------------------------	-----------------------
	 * %a		abbreviated weekday name according to the current localed					"Mon" through "Sun"
	 * %A		full weekday name according to the current localed							"Sunday" through "Saturday"
	 * %b		abbreviated month name according to the current localed						"Jan" through "Dec"
	 * %B		full month name according to the current locale								"January" through "December"
	 * %c		preferred date and time representation for the current locale				"4/13/2008 12:33 PM"
	 * %C		century number (the year divided by 100 and truncated to an integer)		"00" to "99"
	 * %d		day of the month as a decimal number										"01" to "31"
	 * %D		same as %m/%d/%y															"04/13/08"
	 * %e		day of the month as a decimal number, a single digit is preceded by a space	"1" to "31"
	 * %g		like %G, but without the century											"08"
	 * %G		The 4-digit year corresponding to the ISO week number (see %V).				"2008"
	 *		This has the same format and value as %Y, except that if the ISO week number
	 *		belongs to the previous or next year, that year is used instead.
	 * %h		same as %b																	"Jan" through "Dec"
	 * %H		hour as a decimal number using a 24-hour clock.								"00" to "23"
	 * %I		hour as a decimal number using a 12-hour clock.								"01" to "12"
	 * %j		day of the year as a decimal number.										"001" to "366"
	 * %m		month as a decimal number.													"01" to "12"
	 * %M		minute as a decimal number.													"00" to "59"
	 * %n		newline character		"\n"
	 * %p		either "am" or "pm" according to the given time value, or the				"am" or "pm"
	 *		corresponding strings for the current locale.
	 * %r		time in a.m. and p.m. notation												"8:44 PM"
	 * %R		time in 24 hour notation													"20:44"
	 * %S		second as a decimal number													"00" to "59"
	 * %t		tab character																"\t"
	 * %T		current time, equal to %H:%M:%S												"12:49:11"
	 * %u		weekday as a decimal number ["1", "7"], with "1" representing Monday		"1" to "7"
	 * %U		week number of the current year as a decimal number, starting with the		"0" to ("52" or "53")
	 *		first Sunday as the first day of the first week
	 * %V		The ISO 8601:1988 week number of the current year as a decimal number,		"00" to ("52" or "53")
	 *		range 01 to 53, where week 1 is the first week that has at least 4 days
	 *		in the current year, and with Monday as the first day of the week.
	 *		(Use %G or %g for the year component that corresponds to the week number
	 *		for the specified timestamp.)
	 * %W		week number of the current year as a decimal number, starting with the		"00" to ("52" or "53")
	 *		first Monday as the first day of the first week
	 * %w		day of the week as a decimal, Sunday being "0"								"0" to "6"
	 * %x		preferred date representation for the current locale without the time		"4/13/2008"
	 * %X		preferred time representation for the current locale without the date		"12:53:05"
	 * %y		year as a decimal number without a century									"00" "99"
	 * %Y		year as a decimal number including the century								"2008"
	 * %Z		time zone or name or abbreviation											"UTC", "EST", "PST"
	 * %z		same as %Z
	 * %%		a literal "%" characters													"%"
	 * d		Day of the month, 2 digits with leading zeros								"01" to "31"
	 * D		A textual representation of a day, three letters							"Mon" through "Sun"
	 * j		Day of the month without leading zeros										"1" to "31"
	 * l		A full textual representation of the day of the week (lowercase "L")		"Sunday" through "Saturday"
	 * N		ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)	"1" (for Monday) through "7" (for Sunday)
	 * S		English ordinal suffix for the day of the month, 2 characters				"st", "nd", "rd" or "th". Works well with j
	 * w		Numeric representation of the day of the week								"0" (for Sunday) through "6" (for Saturday)
	 * z		The day of the year (starting from "0")										"0" through "365"
	 * W		ISO-8601 week number of year, weeks starting on Monday						"00" to ("52" or "53")
	 * F		A full textual representation of a month, such as January or March			"January" through "December"
	 * m		Numeric representation of a month, with leading zeros						"01" through "12"
	 * M		A short textual representation of a month, three letters					"Jan" through "Dec"
	 * n		Numeric representation of a month, without leading zeros					"1" through "12"
	 * t		Number of days in the given month											"28" through "31"
	 * L		Whether it's a leap year													"1" if it is a leap year, "0" otherwise
	 * o		ISO-8601 year number. This has the same value as Y, except that if the		"2008"
	 *		ISO week number (W) belongs to the previous or next year, that year
	 *		is used instead.
	 * Y		A full numeric representation of a year, 4 digits							"2008"
	 * y		A two digit representation of a year										"08"
	 * a		Lowercase Ante meridiem and Post meridiem									"am" or "pm"
	 * A		Uppercase Ante meridiem and Post meridiem									"AM" or "PM"
	 * B		Swatch Internet time														"000" through "999"
	 * g		12-hour format of an hour without leading zeros								"1" through "12"
	 * G		24-hour format of an hour without leading zeros								"0" through "23"
	 * h		12-hour format of an hour with leading zeros								"01" through "12"
	 * H		24-hour format of an hour with leading zeros								"00" through "23"
	 * i		Minutes with leading zeros													"00" to "59"
	 * s		Seconds, with leading zeros													"00" through "59"
	 * u		Milliseconds																"54321"
	 * e		Timezone identifier															"UTC", "EST", "PST"
	 * I		Whether or not the date is in daylight saving time (uppercase i)			"1" if Daylight Saving Time, "0" otherwise
	 * O		Difference to Greenwich time (GMT) in hours									"+0200", "-0600"
	 * P		Difference to Greenwich time (GMT) with colon between hours and minutes		"+02:00", "-06:00"
	 * T		Timezone abbreviation														"UTC", "EST", "PST"
	 * Z		Timezone offset in seconds. The offset for timezones west of UTC is			"-43200" through "50400"
	 *			always negative, and for those east of UTC is always positive.
	 * c		ISO 8601 date																"2004-02-12T15:19:21+00:00"
	 * r		RFC 2822 formatted date														"Thu, 21 Dec 2000 16:01:07 +0200"
	 * U		Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)					"0"
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	var formatReplace = function (context) {
		return function (m) {
			var formatString, override = false;
			if (m.charAt(0) === "\\" || m.substring(0, 2) === "%%") {
				return m.replace("\\", "").replace("%%", "%");
			}

			override = normalizer.shouldOverrideDefaults(m);
			formatString = $D.normalizeFormat(m, context);
			if (formatString) {
				return context.toString(formatString, override);
			}
		};
	};
	$P._format = function (format) {
		var formatter = formatReplace(this);
		if (!format) {
			return this._toString();
		} else {
			return format.replace(/(%|\\)?.|%%/g, formatter);
		}
	};

	if (!$P.format) {
		$P.format = $P._format;
	}
}());
(function () {
	"use strict";
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};
	/**
	 * new TimeSpan(milliseconds);
	 * new TimeSpan(days, hours, minutes, seconds);
	 * new TimeSpan(days, hours, minutes, seconds, milliseconds);
	 */
	var TimeSpan = function (days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 1 && typeof days === "number") {
			var orient = (days < 0) ? -1 : +1;
			var millsLeft = Math.abs(days);
			this.setDays(Math.floor(millsLeft / 86400000) * orient);
			millsLeft = millsLeft % 86400000;
			this.setHours(Math.floor(millsLeft / 3600000) * orient);
			millsLeft = millsLeft % 3600000;
			this.setMinutes(Math.floor(millsLeft / 60000) * orient);
			millsLeft = millsLeft % 60000;
			this.setSeconds(Math.floor(millsLeft / 1000) * orient);
			millsLeft = millsLeft % 1000;
			this.setMilliseconds(millsLeft * orient);
		} else {
			this.set(days, hours, minutes, seconds, milliseconds);
		}

		this.getTotalMilliseconds = function () {
			return	(this.getDays() * 86400000) +
					(this.getHours() * 3600000) +
					(this.getMinutes() * 60000) +
					(this.getSeconds() * 1000);
		};
		
		this.compareTo = function (time) {
			var t1 = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), t2;
			if (time === null) {
				t2 = new Date(1970, 1, 1, 0, 0, 0);
			}
			else {
				t2 = new Date(1970, 1, 1, time.getHours(), time.getMinutes(), time.getSeconds());
			}
			return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
		};

		this.equals = function (time) {
			return (this.compareTo(time) === 0);
		};

		this.add = function (time) {
			return (time === null) ? this : this.addSeconds(time.getTotalMilliseconds() / 1000);
		};

		this.subtract = function (time) {
			return (time === null) ? this : this.addSeconds(-time.getTotalMilliseconds() / 1000);
		};

		this.addDays = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 86400000));
		};

		this.addHours = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 3600000));
		};

		this.addMinutes = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 60000));
		};

		this.addSeconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 1000));
		};

		this.addMilliseconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + n);
		};

		this.get12HourHour = function () {
			return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
		};

		this.getDesignator = function () {
			return (this.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
		};

		this.toString = function (format) {
			this._toString = function () {
				if (this.getDays() !== null && this.getDays() > 0) {
					return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				} else {
					return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				}
			};
			
			this.p = function (s) {
				return (s.toString().length < 2) ? "0" + s : s;
			};
			
			var me = this;
			
			return format ? format.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
			function (format) {
				switch (format) {
				case "d":
					return me.getDays();
				case "dd":
					return me.p(me.getDays());
				case "H":
					return me.getHours();
				case "HH":
					return me.p(me.getHours());
				case "h":
					return me.get12HourHour();
				case "hh":
					return me.p(me.get12HourHour());
				case "m":
					return me.getMinutes();
				case "mm":
					return me.p(me.getMinutes());
				case "s":
					return me.getSeconds();
				case "ss":
					return me.p(me.getSeconds());
				case "t":
					return ((me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);
				case "tt":
					return (me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				}
			}
			) : this._toString();
		};
		return this;
	};
	addSetFuncs(TimeSpan, attrs.slice(2));
	TimeSpan.prototype.set = function (days, hours, minutes, seconds, milliseconds){
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};


	/**
	 * Gets the time of day for this date instances. 
	 * @return {TimeSpan} TimeSpan
	 */
	Date.prototype.getTimeOfDay = function () {
		return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
	};

	Date.TimeSpan = TimeSpan;

	if (typeof window !== "undefined" ) {
		// keeping API compatible for v1.x 
		window.TimeSpan = TimeSpan;
	}
}());
(function () {
	"use strict";
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};

	var setMonthsAndYears = function (orient, d1, d2, context) {
		function inc() {
			d1.addMonths(-orient);
			context.months++;
			if (context.months === 12) {
				context.years++;
				context.months = 0;
			}
		}
		if (orient === +1) {
			while (d1 > d2) {
				inc();
			}
		} else {
			while (d1 < d2) {
				inc();
			}
		}
		context.months--;
		context.months *= orient;
		context.years *= orient;
	};

	var adjustForDST = function(orient, startDate, endDate) {
		var hasDSTMismatch = (false === (startDate.isDaylightSavingTime() === endDate.isDaylightSavingTime()));
		if (hasDSTMismatch && orient === 1) {
			startDate.addHours(-1);
		} else if (hasDSTMismatch) {
			startDate.addHours(1);
		}
	};
	/**
	 * TimePeriod(startDate, endDate);
	 * TimePeriod(years, months, days, hours, minutes, seconds, milliseconds);
	 */
	var TimePeriod = function (years, months, days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 7) {
			this.set(years, months, days, hours, minutes, seconds, milliseconds);
		} else if (arguments.length === 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) {
			var startDate = arguments[0].clone();
			var endDate = arguments[1].clone();
			var orient = (startDate > endDate) ? +1 : -1;
			this.dates = {
				start: arguments[0].clone(),
				end: arguments[1].clone()
			};

			setMonthsAndYears(orient, startDate, endDate, this);
			adjustForDST(orient, startDate, endDate);
			// // TODO - adjust for DST
			var diff = endDate - startDate;
			if (diff !== 0) {
				var ts = new TimeSpan(diff);
				this.set(this.years, this.months, ts.getDays(), ts.getHours(), ts.getMinutes(), ts.getSeconds(), ts.getMilliseconds());
			}
		}
		return this;
	};
	// create all the set functions.
	addSetFuncs(TimePeriod, attrs);
	TimePeriod.prototype.set = function (years, months, days, hours, minutes, seconds, milliseconds){
		this.setYears(years || this.getYears());
		this.setMonths(months || this.getMonths());
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};

	Date.TimePeriod = TimePeriod;

	if (typeof window !== "undefined") {
		// keeping API compatible for v1.x 
		window.TimePeriod = TimePeriod;
	}
}());
/**
* @version: 2.1.24
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2016 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: https://www.improvely.com/
*/
// Follow the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            return (root.daterangepicker = factory(moment, jquery));
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        module.exports = factory(require('moment'), jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string')
              this.locale.customRangeLabel = options.locale.customRangeLabel;

        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.singleClasses === 'string')
            this.singleClasses = options.singleClasses;

        if (typeof options.singleClasses === 'object')
            this.singleClasses = options.singleClasses.join(' ');


        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && maxDate && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day')) 
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            if (this.singleClasses) {
                this.container.addClass(this.singleClasses);
            }
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input > i').hide();
            if (this.timePicker) {
                this.container.find('.ranges ul').hide();
            } else {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            this.container.find('.ranges').prependTo( this.container.find('.calendar.left').parent() );
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            .on('focus.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsFocused, this))
            .on('blur.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsBlurred, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-' + arrow.left + ' glyphicon glyphicon-' + arrow.left + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-' + arrow.right + ' glyphicon glyphicon-' + arrow.right + '"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (!this.endDate && timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.getAttribute('data-range-key');

            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            //if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
            //    return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate && !this.container.find('input[name=daterangepicker_start]').is(":focus")) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else if (!this.endDate && !this.container.find('input[name=daterangepicker_end]').is(":focus")) {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
                if (this.timePicker) {
                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateView();
        },

        formInputsFocused: function(e) {

            // Highlight the focused input
            this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass('active');
            $(e.target).addClass('active');

            // Set the state such that if the user goes back to using a mouse, 
            // the calendars are aware we're selecting the end of the range, not
            // the start. This allows someone to edit the end of a date range without
            // re-selecting the beginning, by clicking on the end date input then
            // using the calendar.
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            if (isRight) {
                this.endDate = null;
                this.setStartDate(this.startDate.clone());
                this.updateView();
            }

        },

        formInputsBlurred: function(e) {

            // this function has one purpose right now: if you tab from the first
            // text input to the second in the UI, the endDate is nulled so that
            // you can click another, but if you tab out without clicking anything
            // or changing the input value, the old endDate should be retained

            if (!this.endDate) {
                var val = this.container.find('input[name="daterangepicker_end"]').val();
                var end = moment(val, this.locale.format);
                if (end.isValid()) {
                    this.setEndDate(end);
                    this.updateView();
                }
            }

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));

;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());

/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(document,Math,undefined){(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(jQuery&&!jQuery.fn.sparkline){factory(jQuery)}})(function($){"use strict";var UNSET_OPTION={},getDefaults,createClass,SPFormat,clipval,quartile,normalizeValue,normalizeValues,remove,isNumber,all,sum,addCSS,ensureArray,formatNumber,RangeMap,MouseHandler,Tooltip,barHighlightMixin,line,bar,tristate,discrete,bullet,pie,box,defaultStyles,initStyles,VShape,VCanvas_base,VCanvas_canvas,VCanvas_vml,pending,shapeCount=0;getDefaults=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:false,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:false,enableHighlight:true,highlightLighten:1.4,tooltipSkipNull:true,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:false,numberFormatter:false,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:false,disableInteraction:false},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:undefined,normalRangeMax:undefined,normalRangeColor:"#ccc",drawNormalOnTop:false,chartRangeMin:undefined,chartRangeMax:undefined,chartRangeMinX:undefined,chartRangeMaxX:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:undefined,nullColor:undefined,zeroAxis:true,barWidth:4,barSpacing:1,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,colorMap:undefined,tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:undefined,thresholdValue:0,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:false,tooltipFormat:new SPFormat("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:undefined,tooltipFormat:new SPFormat("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:false,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:true,outlierIQR:1.5,spotRadius:1.5,target:undefined,targetColor:"#4a2",chartRangeMax:undefined,chartRangeMin:undefined,tooltipFormat:new SPFormat("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}};defaultStyles=".jqstooltip { "+"position: absolute;"+"left: 0px;"+"top: 0px;"+"visibility: hidden;"+"background: rgb(0, 0, 0) transparent;"+"background-color: rgba(0,0,0,0.6);"+"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);"+'-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";'+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"white-space: nowrap;"+"padding: 5px;"+"border: 1px solid white;"+"box-sizing: content-box;"+"z-index: 10000;"+"}"+".jqsfield { "+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"}";createClass=function(){var Class,args;Class=function(){this.init.apply(this,arguments)};if(arguments.length>1){if(arguments[0]){Class.prototype=$.extend(new arguments[0],arguments[arguments.length-1]);Class._super=arguments[0].prototype}else{Class.prototype=arguments[arguments.length-1]}if(arguments.length>2){args=Array.prototype.slice.call(arguments,1,-1);args.unshift(Class.prototype);$.extend.apply($,args)}}else{Class.prototype=arguments[0]}Class.prototype.cls=Class;return Class};$.SPFormatClass=SPFormat=createClass({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(format,fclass){this.format=format;this.fclass=fclass},render:function(fieldset,lookups,options){var self=this,fields=fieldset,match,token,lookupkey,fieldvalue,prec;return this.format.replace(this.fre,function(){var lookup;token=arguments[1];lookupkey=arguments[3];match=self.precre.exec(token);if(match){prec=match[2];token=match[1]}else{prec=false}fieldvalue=fields[token];if(fieldvalue===undefined){return""}if(lookupkey&&lookups&&lookups[lookupkey]){lookup=lookups[lookupkey];if(lookup.get){return lookups[lookupkey].get(fieldvalue)||fieldvalue}else{return lookups[lookupkey][fieldvalue]||fieldvalue}}if(isNumber(fieldvalue)){if(options.get("numberFormatter")){fieldvalue=options.get("numberFormatter")(fieldvalue)}else{fieldvalue=formatNumber(fieldvalue,prec,options.get("numberDigitGroupCount"),options.get("numberDigitGroupSep"),options.get("numberDecimalMark"))}}return fieldvalue})}});$.spformat=function(format,fclass){return new SPFormat(format,fclass)};clipval=function(val,min,max){if(val<min){return min}if(val>max){return max}return val};quartile=function(values,q){var vl;if(q===2){vl=Math.floor(values.length/2);return values.length%2?values[vl]:(values[vl-1]+values[vl])/2}else{if(values.length%2){vl=(values.length*q+q)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}else{vl=(values.length*q+2)/4;return vl%1?(values[Math.floor(vl)]+values[Math.floor(vl)-1])/2:values[vl-1]}}};normalizeValue=function(val){var nf;switch(val){case"undefined":val=undefined;break;case"null":val=null;break;case"true":val=true;break;case"false":val=false;break;default:nf=parseFloat(val);if(val==nf){val=nf}}return val};normalizeValues=function(vals){var i,result=[];for(i=vals.length;i--;){result[i]=normalizeValue(vals[i])}return result};remove=function(vals,filter){var i,vl,result=[];for(i=0,vl=vals.length;i<vl;i++){if(vals[i]!==filter){result.push(vals[i])}}return result};isNumber=function(num){return!isNaN(parseFloat(num))&&isFinite(num)};formatNumber=function(num,prec,groupsize,groupsep,decsep){var p,i;num=(prec===false?parseFloat(num).toString():num.toFixed(prec)).split("");p=(p=$.inArray(".",num))<0?num.length:p;if(p<num.length){num[p]=decsep}for(i=p-groupsize;i>0;i-=groupsize){num.splice(i,0,groupsep)}return num.join("")};all=function(val,arr,ignoreNull){var i;for(i=arr.length;i--;){if(ignoreNull&&arr[i]===null)continue;if(arr[i]!==val){return false}}return true};sum=function(vals){var total=0,i;for(i=vals.length;i--;){total+=typeof vals[i]==="number"?vals[i]:0}return total};ensureArray=function(val){return $.isArray(val)?val:[val]};addCSS=function(css){var tag,iefail;if(document.createStyleSheet){try{document.createStyleSheet().cssText=css;return}catch(e){iefail=true}}tag=document.createElement("style");tag.type="text/css";document.getElementsByTagName("head")[0].appendChild(tag);if(iefail){document.styleSheets[document.styleSheets.length-1].cssText=css}else{tag[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=css}};$.fn.simpledraw=function(width,height,useExisting,interact){var target,mhandler;if(useExisting&&(target=this.data("_jqs_vcanvas"))){return target}if($.fn.sparkline.canvas===false){return false}else if($.fn.sparkline.canvas===undefined){var el=document.createElement("canvas");if(!!(el.getContext&&el.getContext("2d"))){$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_canvas(width,height,target,interact)}}else if(document.namespaces&&!document.namespaces.v){document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML");$.fn.sparkline.canvas=function(width,height,target,interact){return new VCanvas_vml(width,height,target)}}else{$.fn.sparkline.canvas=false;return false}}if(width===undefined){width=$(this).innerWidth()}if(height===undefined){height=$(this).innerHeight()}target=$.fn.sparkline.canvas(width,height,this,interact);mhandler=$(this).data("_jqs_mhandler");if(mhandler){mhandler.registerCanvas(target)}return target};$.fn.cleardraw=function(){var target=this.data("_jqs_vcanvas");if(target){target.reset()}};$.RangeMapClass=RangeMap=createClass({init:function(map){var key,range,rangelist=[];for(key in map){if(map.hasOwnProperty(key)&&typeof key==="string"&&key.indexOf(":")>-1){range=key.split(":");range[0]=range[0].length===0?-Infinity:parseFloat(range[0]);range[1]=range[1].length===0?Infinity:parseFloat(range[1]);range[2]=map[key];rangelist.push(range)}}this.map=map;this.rangelist=rangelist||false},get:function(value){var rangelist=this.rangelist,i,range,result;if((result=this.map[value])!==undefined){return result}if(rangelist){for(i=rangelist.length;i--;){range=rangelist[i];if(range[0]<=value&&range[1]>=value){return range[2]}}}return undefined}});$.range_map=function(map){return new RangeMap(map)};MouseHandler=createClass({init:function(el,options){var $el=$(el);this.$el=$el;this.options=options;this.currentPageX=0;this.currentPageY=0;this.el=el;this.splist=[];this.tooltip=null;this.over=false;this.displayTooltips=!options.get("disableTooltips");this.highlightEnabled=!options.get("disableHighlight")},registerSparkline:function(sp){this.splist.push(sp);if(this.over){this.updateDisplay()}},registerCanvas:function(canvas){var $canvas=$(canvas.canvas);this.canvas=canvas;this.$canvas=$canvas;$canvas.mouseenter($.proxy(this.mouseenter,this));$canvas.mouseleave($.proxy(this.mouseleave,this));$canvas.click($.proxy(this.mouseclick,this))},reset:function(removeTooltip){this.splist=[];if(this.tooltip&&removeTooltip){this.tooltip.remove();this.tooltip=undefined}},mouseclick:function(e){var clickEvent=$.Event("sparklineClick");clickEvent.originalEvent=e;clickEvent.sparklines=this.splist;this.$el.trigger(clickEvent)},mouseenter:function(e){$(document.body).unbind("mousemove.jqs");$(document.body).bind("mousemove.jqs",$.proxy(this.mousemove,this));this.over=true;this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(!this.tooltip&&this.displayTooltips){this.tooltip=new Tooltip(this.options);this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},mouseleave:function(){$(document.body).unbind("mousemove.jqs");var splist=this.splist,spcount=splist.length,needsRefresh=false,sp,i;this.over=false;this.currentEl=null;if(this.tooltip){this.tooltip.remove();this.tooltip=null}for(i=0;i<spcount;i++){sp=splist[i];if(sp.clearRegionHighlight()){needsRefresh=true}}if(needsRefresh){this.canvas.render()}},mousemove:function(e){this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(this.tooltip){this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},updateDisplay:function(){var splist=this.splist,spcount=splist.length,needsRefresh=false,offset=this.$canvas.offset(),localX=this.currentPageX-offset.left,localY=this.currentPageY-offset.top,tooltiphtml,sp,i,result,changeEvent;if(!this.over){return}for(i=0;i<spcount;i++){sp=splist[i];result=sp.setRegionHighlight(this.currentEl,localX,localY);if(result){needsRefresh=true}}if(needsRefresh){changeEvent=$.Event("sparklineRegionChange");changeEvent.sparklines=this.splist;this.$el.trigger(changeEvent);if(this.tooltip){tooltiphtml="";for(i=0;i<spcount;i++){sp=splist[i];tooltiphtml+=sp.getCurrentRegionTooltip()}this.tooltip.setContent(tooltiphtml)}if(!this.disableHighlight){this.canvas.render()}}if(result===null){this.mouseleave()}}});Tooltip=createClass({sizeStyle:"position: static !important;"+"display: block !important;"+"visibility: hidden !important;"+"float: left !important;",init:function(options){var tooltipClassname=options.get("tooltipClassname","jqstooltip"),sizetipStyle=this.sizeStyle,offset;this.container=options.get("tooltipContainer")||document.body;this.tooltipOffsetX=options.get("tooltipOffsetX",10);this.tooltipOffsetY=options.get("tooltipOffsetY",12);$("#jqssizetip").remove();$("#jqstooltip").remove();this.sizetip=$("<div/>",{id:"jqssizetip",style:sizetipStyle,"class":tooltipClassname});this.tooltip=$("<div/>",{id:"jqstooltip","class":tooltipClassname}).appendTo(this.container);offset=this.tooltip.offset();this.offsetLeft=offset.left;this.offsetTop=offset.top;this.hidden=true;$(window).unbind("resize.jqs scroll.jqs");$(window).bind("resize.jqs scroll.jqs",$.proxy(this.updateWindowDims,this));this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=$(window).scrollTop();this.scrollLeft=$(window).scrollLeft();this.scrollRight=this.scrollLeft+$(window).width();this.updatePosition()},getSize:function(content){this.sizetip.html(content).appendTo(this.container);this.width=this.sizetip.width()+1;this.height=this.sizetip.height();this.sizetip.remove()},setContent:function(content){if(!content){this.tooltip.css("visibility","hidden");this.hidden=true;return}this.getSize(content);this.tooltip.html(content).css({width:this.width,height:this.height,visibility:"visible"});if(this.hidden){this.hidden=false;this.updatePosition()}},updatePosition:function(x,y){if(x===undefined){if(this.mousex===undefined){return}x=this.mousex-this.offsetLeft;y=this.mousey-this.offsetTop}else{this.mousex=x=x-this.offsetLeft;this.mousey=y=y-this.offsetTop}if(!this.height||!this.width||this.hidden){return}y-=this.height+this.tooltipOffsetY;x+=this.tooltipOffsetX;if(y<this.scrollTop){y=this.scrollTop}if(x<this.scrollLeft){x=this.scrollLeft}else if(x+this.width>this.scrollRight){x=this.scrollRight-this.width}this.tooltip.css({left:x,top:y})},remove:function(){this.tooltip.remove();this.sizetip.remove();this.sizetip=this.tooltip=undefined;$(window).unbind("resize.jqs scroll.jqs")}});initStyles=function(){addCSS(defaultStyles)};$(initStyles);pending=[];$.fn.sparkline=function(userValues,userOptions){return this.each(function(){var options=new $.fn.sparkline.options(this,userOptions),$this=$(this),render,i;render=function(){var values,width,height,tmp,mhandler,sp,vals;if(userValues==="html"||userValues===undefined){vals=this.getAttribute(options.get("tagValuesAttribute"));if(vals===undefined||vals===null){vals=$this.html()}values=vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else{values=userValues}width=options.get("width")==="auto"?values.length*options.get("defaultPixelsPerValue"):options.get("width");if(options.get("height")==="auto"){if(!options.get("composite")||!$.data(this,"_jqs_vcanvas")){tmp=document.createElement("span");tmp.innerHTML="a";$this.html(tmp);height=$(tmp).innerHeight()||$(tmp).height();$(tmp).remove();tmp=null}}else{height=options.get("height")}if(!options.get("disableInteraction")){mhandler=$.data(this,"_jqs_mhandler");if(!mhandler){mhandler=new MouseHandler(this,options);$.data(this,"_jqs_mhandler",mhandler)}else if(!options.get("composite")){mhandler.reset()}}else{mhandler=false}if(options.get("composite")&&!$.data(this,"_jqs_vcanvas")){if(!$.data(this,"_jqs_errnotify")){alert("Attempted to attach a composite sparkline to an element with no existing sparkline");$.data(this,"_jqs_errnotify",true)}return}sp=new($.fn.sparkline[options.get("type")])(this,values,options,width,height);sp.render();if(mhandler){mhandler.registerSparkline(sp)}};if($(this).html()&&!options.get("disableHiddenCheck")&&$(this).is(":hidden")||!$(this).parents("body").length){if(!options.get("composite")&&$.data(this,"_jqs_pending")){for(i=pending.length;i;i--){if(pending[i-1][0]==this){pending.splice(i-1,1)}}}pending.push([this,render]);$.data(this,"_jqs_pending",true)}else{render.call(this)}})};$.fn.sparkline.defaults=getDefaults();$.sparkline_display_visible=function(){var el,i,pl;var done=[];for(i=0,pl=pending.length;i<pl;i++){el=pending[i][0];if($(el).is(":visible")&&!$(el).parents().is(":hidden")){pending[i][1].call(el);$.data(pending[i][0],"_jqs_pending",false);done.push(i)}else if(!$(el).closest("html").length&&!$.data(el,"_jqs_pending")){$.data(pending[i][0],"_jqs_pending",false);done.push(i)}}for(i=done.length;i;i--){pending.splice(done[i-1],1)}};$.fn.sparkline.options=createClass({init:function(tag,userOptions){var extendedOptions,defaults,base,tagOptionType;this.userOptions=userOptions=userOptions||{};this.tag=tag;this.tagValCache={};defaults=$.fn.sparkline.defaults;base=defaults.common;this.tagOptionsPrefix=userOptions.enableTagOptions&&(userOptions.tagOptionsPrefix||base.tagOptionsPrefix);tagOptionType=this.getTagSetting("type");if(tagOptionType===UNSET_OPTION){extendedOptions=defaults[userOptions.type||base.type]}else{extendedOptions=defaults[tagOptionType]}this.mergedOptions=$.extend({},base,extendedOptions,userOptions)},getTagSetting:function(key){var prefix=this.tagOptionsPrefix,val,i,pairs,keyval;if(prefix===false||prefix===undefined){return UNSET_OPTION}if(this.tagValCache.hasOwnProperty(key)){val=this.tagValCache.key}else{val=this.tag.getAttribute(prefix+key);if(val===undefined||val===null){val=UNSET_OPTION}else if(val.substr(0,1)==="["){val=val.substr(1,val.length-2).split(",");for(i=val.length;i--;){val[i]=normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g,""))}}else if(val.substr(0,1)==="{"){pairs=val.substr(1,val.length-2).split(",");val={};for(i=pairs.length;i--;){keyval=pairs[i].split(":",2);val[keyval[0].replace(/(^\s*)|(\s*$)/g,"")]=normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g,""))}}else{val=normalizeValue(val)}this.tagValCache.key=val}return val},get:function(key,defaultval){var tagOption=this.getTagSetting(key),result;if(tagOption!==UNSET_OPTION){return tagOption}return(result=this.mergedOptions[key])===undefined?defaultval:result}});$.fn.sparkline._base=createClass({disabled:false,init:function(el,values,options,width,height){this.el=el;this.$el=$(el);this.values=values;this.options=options;this.width=width;this.height=height;this.currentRegion=undefined},initTarget:function(){var interactive=!this.options.get("disableInteraction");if(!(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),interactive))){this.disabled=true}else{this.canvasWidth=this.target.pixelWidth;this.canvasHeight=this.target.pixelHeight}},render:function(){if(this.disabled){this.el.innerHTML="";return false}return true},getRegion:function(x,y){},setRegionHighlight:function(el,x,y){var currentRegion=this.currentRegion,highlightEnabled=!this.options.get("disableHighlight"),newRegion;if(x>this.canvasWidth||y>this.canvasHeight||x<0||y<0){return null}newRegion=this.getRegion(el,x,y);if(currentRegion!==newRegion){if(currentRegion!==undefined&&highlightEnabled){this.removeHighlight()}this.currentRegion=newRegion;if(newRegion!==undefined&&highlightEnabled){this.renderHighlight()}return true}return false},clearRegionHighlight:function(){if(this.currentRegion!==undefined){this.removeHighlight();this.currentRegion=undefined;return true}return false},renderHighlight:function(){this.changeHighlight(true)},removeHighlight:function(){this.changeHighlight(false)},changeHighlight:function(highlight){},getCurrentRegionTooltip:function(){var options=this.options,header="",entries=[],fields,formats,formatlen,fclass,text,i,showFields,showFieldsKey,newFields,fv,formatter,format,fieldlen,j;if(this.currentRegion===undefined){return""}fields=this.getCurrentRegionFields();formatter=options.get("tooltipFormatter");if(formatter){return formatter(this,options,fields)}if(options.get("tooltipChartTitle")){header+='<div class="jqs jqstitle">'+options.get("tooltipChartTitle")+"</div>\n"}formats=this.options.get("tooltipFormat");if(!formats){return""}if(!$.isArray(formats)){formats=[formats]}if(!$.isArray(fields)){fields=[fields]}showFields=this.options.get("tooltipFormatFieldlist");showFieldsKey=this.options.get("tooltipFormatFieldlistKey");if(showFields&&showFieldsKey){newFields=[];for(i=fields.length;i--;){fv=fields[i][showFieldsKey];if((j=$.inArray(fv,showFields))!=-1){newFields[j]=fields[i]}}fields=newFields}formatlen=formats.length;fieldlen=fields.length;for(i=0;i<formatlen;i++){format=formats[i];if(typeof format==="string"){format=new SPFormat(format)}fclass=format.fclass||"jqsfield";for(j=0;j<fieldlen;j++){if(!fields[j].isNull||!options.get("tooltipSkipNull")){$.extend(fields[j],{prefix:options.get("tooltipPrefix"),suffix:options.get("tooltipSuffix")});text=format.render(fields[j],options.get("tooltipValueLookups"),options);entries.push('<div class="'+fclass+'">'+text+"</div>")}}}if(entries.length){return header+entries.join("\n")}return""},getCurrentRegionFields:function(){},calcHighlightColor:function(color,options){var highlightColor=options.get("highlightColor"),lighten=options.get("highlightLighten"),parse,mult,rgbnew,i;if(highlightColor){return highlightColor}if(lighten){parse=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);if(parse){rgbnew=[];mult=color.length===4?16:1;for(i=0;i<3;i++){rgbnew[i]=clipval(Math.round(parseInt(parse[i+1],16)*mult*lighten),0,255)}return"rgb("+rgbnew.join(",")+")"}}return color}});barHighlightMixin={changeHighlight:function(highlight){var currentRegion=this.currentRegion,target=this.target,shapeids=this.regionShapes[currentRegion],newShapes;if(shapeids){newShapes=this.renderRegion(currentRegion,highlight);if($.isArray(newShapes)||$.isArray(shapeids)){target.replaceWithShapes(shapeids,newShapes);this.regionShapes[currentRegion]=$.map(newShapes,function(newShape){return newShape.id})}else{target.replaceWithShape(shapeids,newShapes);this.regionShapes[currentRegion]=newShapes.id}}},render:function(){var values=this.values,target=this.target,regionShapes=this.regionShapes,shapes,ids,i,j;if(!this.cls._super.render.call(this)){return}for(i=values.length;i--;){shapes=this.renderRegion(i);if(shapes){if($.isArray(shapes)){ids=[];for(j=shapes.length;j--;){shapes[j].append();ids.push(shapes[j].id)}regionShapes[i]=ids}else{shapes.append();regionShapes[i]=shapes.id}}else{regionShapes[i]=null}}target.render()}};$.fn.sparkline.line=line=createClass($.fn.sparkline._base,{type:"line",init:function(el,values,options,width,height){line._super.init.call(this,el,values,options,width,height);this.vertices=[];this.regionMap=[];this.xvalues=[];this.yvalues=[];this.yminmax=[];this.hightlightSpotId=null;this.lastShapeId=null;this.initTarget()},getRegion:function(el,x,y){var i,regionMap=this.regionMap;for(i=regionMap.length;i--;){if(regionMap[i]!==null&&x>=regionMap[i][0]&&x<=regionMap[i][1]){return regionMap[i][2]}}return undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.yvalues[currentRegion]===null,x:this.xvalues[currentRegion],y:this.yvalues[currentRegion],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:currentRegion}},renderHighlight:function(){var currentRegion=this.currentRegion,target=this.target,vertex=this.vertices[currentRegion],options=this.options,spotRadius=options.get("spotRadius"),highlightSpotColor=options.get("highlightSpotColor"),highlightLineColor=options.get("highlightLineColor"),highlightSpot,highlightLine;if(!vertex){return}if(spotRadius&&highlightSpotColor){highlightSpot=target.drawCircle(vertex[0],vertex[1],spotRadius,undefined,highlightSpotColor);this.highlightSpotId=highlightSpot.id;target.insertAfterShape(this.lastShapeId,highlightSpot)}if(highlightLineColor){highlightLine=target.drawLine(vertex[0],this.canvasTop,vertex[0],this.canvasTop+this.canvasHeight,highlightLineColor);this.highlightLineId=highlightLine.id;target.insertAfterShape(this.lastShapeId,highlightLine)}},removeHighlight:function(){var target=this.target;if(this.highlightSpotId){target.removeShapeId(this.highlightSpotId);this.highlightSpotId=null}if(this.highlightLineId){target.removeShapeId(this.highlightLineId);this.highlightLineId=null}},scanValues:function(){var values=this.values,valcount=values.length,xvalues=this.xvalues,yvalues=this.yvalues,yminmax=this.yminmax,i,val,isStr,isArray,sp;for(i=0;i<valcount;i++){val=values[i];isStr=typeof values[i]==="string";isArray=typeof values[i]==="object"&&values[i]instanceof Array;sp=isStr&&values[i].split(":");if(isStr&&sp.length===2){xvalues.push(Number(sp[0]));yvalues.push(Number(sp[1]));yminmax.push(Number(sp[1]))}else if(isArray){xvalues.push(val[0]);yvalues.push(val[1]);yminmax.push(val[1])}else{xvalues.push(i);if(values[i]===null||values[i]==="null"){yvalues.push(null)}else{yvalues.push(Number(val));yminmax.push(Number(val))}}}if(this.options.get("xvalues")){xvalues=this.options.get("xvalues")}this.maxy=this.maxyorg=Math.max.apply(Math,yminmax);this.miny=this.minyorg=Math.min.apply(Math,yminmax);this.maxx=Math.max.apply(Math,xvalues);this.minx=Math.min.apply(Math,xvalues);this.xvalues=xvalues;this.yvalues=yvalues;this.yminmax=yminmax},processRangeOptions:function(){var options=this.options,normalRangeMin=options.get("normalRangeMin"),normalRangeMax=options.get("normalRangeMax");if(normalRangeMin!==undefined){if(normalRangeMin<this.miny){this.miny=normalRangeMin}if(normalRangeMax>this.maxy){this.maxy=normalRangeMax}}if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.miny)){this.miny=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.maxy)){this.maxy=options.get("chartRangeMax")}if(options.get("chartRangeMinX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMinX")<this.minx)){this.minx=options.get("chartRangeMinX")}if(options.get("chartRangeMaxX")!==undefined&&(options.get("chartRangeClipX")||options.get("chartRangeMaxX")>this.maxx)){this.maxx=options.get("chartRangeMaxX")}},drawNormalRange:function(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey){var normalRangeMin=this.options.get("normalRangeMin"),normalRangeMax=this.options.get("normalRangeMax"),ytop=canvasTop+Math.round(canvasHeight-canvasHeight*((normalRangeMax-this.miny)/rangey)),height=Math.round(canvasHeight*(normalRangeMax-normalRangeMin)/rangey);this.target.drawRect(canvasLeft,ytop,canvasWidth,height,undefined,this.options.get("normalRangeColor")).append()},render:function(){var options=this.options,target=this.target,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,vertices=this.vertices,spotRadius=options.get("spotRadius"),regionMap=this.regionMap,rangex,rangey,yvallast,canvasTop,canvasLeft,vertex,path,paths,x,y,xnext,xpos,xposnext,last,next,yvalcount,lineShapes,fillShapes,plen,valueSpots,hlSpotsEnabled,color,xvalues,yvalues,i;if(!line._super.render.call(this)){return}this.scanValues();this.processRangeOptions();xvalues=this.xvalues;yvalues=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2){return}canvasTop=canvasLeft=0;rangex=this.maxx-this.minx===0?1:this.maxx-this.minx;rangey=this.maxy-this.miny===0?1:this.maxy-this.miny;yvallast=this.yvalues.length-1;if(spotRadius&&(canvasWidth<spotRadius*4||canvasHeight<spotRadius*4)){spotRadius=0}if(spotRadius){hlSpotsEnabled=options.get("highlightSpotColor")&&!options.get("disableInteraction");if(hlSpotsEnabled||options.get("minSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.miny){canvasHeight-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("maxSpotColor")||options.get("spotColor")&&yvalues[yvallast]===this.maxy){canvasHeight-=Math.ceil(spotRadius);canvasTop+=Math.ceil(spotRadius)}if(hlSpotsEnabled||(options.get("minSpotColor")||options.get("maxSpotColor"))&&(yvalues[0]===this.miny||yvalues[0]===this.maxy)){canvasLeft+=Math.ceil(spotRadius);canvasWidth-=Math.ceil(spotRadius)}if(hlSpotsEnabled||options.get("spotColor")||(options.get("minSpotColor")||options.get("maxSpotColor")&&(yvalues[yvallast]===this.miny||yvalues[yvallast]===this.maxy))){canvasWidth-=Math.ceil(spotRadius)}}canvasHeight--;if(options.get("normalRangeMin")!==undefined&&!options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}path=[];paths=[path];last=next=null;yvalcount=yvalues.length;for(i=0;i<yvalcount;i++){x=xvalues[i];xnext=xvalues[i+1];y=yvalues[i];xpos=canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex));xposnext=i<yvalcount-1?canvasLeft+Math.round((xnext-this.minx)*(canvasWidth/rangex)):canvasWidth;next=xpos+(xposnext-xpos)/2;regionMap[i]=[last||0,next,i];last=next;if(y===null){if(i){if(yvalues[i-1]!==null){path=[];paths.push(path)}vertices.push(null)}}else{if(y<this.miny){y=this.miny}if(y>this.maxy){y=this.maxy}if(!path.length){path.push([xpos,canvasTop+canvasHeight])}vertex=[xpos,canvasTop+Math.round(canvasHeight-canvasHeight*((y-this.miny)/rangey))];path.push(vertex);vertices.push(vertex)}}lineShapes=[];fillShapes=[];plen=paths.length;for(i=0;i<plen;i++){path=paths[i];if(path.length){if(options.get("fillColor")){path.push([path[path.length-1][0],canvasTop+canvasHeight]);fillShapes.push(path.slice(0));path.pop()}if(path.length>2){path[0]=[path[0][0],path[1][1]]}lineShapes.push(path)}}plen=fillShapes.length;for(i=0;i<plen;i++){target.drawShape(fillShapes[i],options.get("fillColor"),options.get("fillColor")).append()}if(options.get("normalRangeMin")!==undefined&&options.get("drawNormalOnTop")){this.drawNormalRange(canvasLeft,canvasTop,canvasHeight,canvasWidth,rangey)}plen=lineShapes.length;for(i=0;i<plen;i++){target.drawShape(lineShapes[i],options.get("lineColor"),undefined,options.get("lineWidth")).append()}if(spotRadius&&options.get("valueSpots")){valueSpots=options.get("valueSpots");if(valueSpots.get===undefined){valueSpots=new RangeMap(valueSpots)}for(i=0;i<yvalcount;i++){color=valueSpots.get(yvalues[i]);if(color){target.drawCircle(canvasLeft+Math.round((xvalues[i]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[i]-this.miny)/rangey)),spotRadius,undefined,color).append()}}}if(spotRadius&&options.get("spotColor")&&yvalues[yvallast]!==null){target.drawCircle(canvasLeft+Math.round((xvalues[xvalues.length-1]-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((yvalues[yvallast]-this.miny)/rangey)),spotRadius,undefined,options.get("spotColor")).append()}if(this.maxy!==this.minyorg){if(spotRadius&&options.get("minSpotColor")){x=xvalues[$.inArray(this.minyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.minyorg-this.miny)/rangey)),spotRadius,undefined,options.get("minSpotColor")).append()}if(spotRadius&&options.get("maxSpotColor")){x=xvalues[$.inArray(this.maxyorg,yvalues)];target.drawCircle(canvasLeft+Math.round((x-this.minx)*(canvasWidth/rangex)),canvasTop+Math.round(canvasHeight-canvasHeight*((this.maxyorg-this.miny)/rangey)),spotRadius,undefined,options.get("maxSpotColor")).append()}}this.lastShapeId=target.getLastShapeId();this.canvasTop=canvasTop;target.render()}});$.fn.sparkline.bar=bar=createClass($.fn.sparkline._base,barHighlightMixin,{type:"bar",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10),chartRangeMin=options.get("chartRangeMin"),chartRangeMax=options.get("chartRangeMax"),chartRangeClip=options.get("chartRangeClip"),stackMin=Infinity,stackMax=-Infinity,isStackString,groupMin,groupMax,stackRanges,numValues,i,vlen,range,zeroAxis,xaxisOffset,min,max,clipMin,clipMax,stacked,vlist,j,slen,svals,val,yoffset,yMaxCalc,canvasHeightEf;bar._super.init.call(this,el,values,options,width,height);for(i=0,vlen=values.length;i<vlen;i++){val=values[i];isStackString=typeof val==="string"&&val.indexOf(":")>-1;if(isStackString||$.isArray(val)){stacked=true;if(isStackString){val=values[i]=normalizeValues(val.split(":"));

}val=remove(val,null);groupMin=Math.min.apply(Math,val);groupMax=Math.max.apply(Math,val);if(groupMin<stackMin){stackMin=groupMin}if(groupMax>stackMax){stackMax=groupMax}}}this.stacked=stacked;this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.width=width=values.length*barWidth+(values.length-1)*barSpacing;this.initTarget();if(chartRangeClip){clipMin=chartRangeMin===undefined?-Infinity:chartRangeMin;clipMax=chartRangeMax===undefined?Infinity:chartRangeMax}numValues=[];stackRanges=stacked?[]:numValues;var stackTotals=[];var stackRangesNeg=[];for(i=0,vlen=values.length;i<vlen;i++){if(stacked){vlist=values[i];values[i]=svals=[];stackTotals[i]=0;stackRanges[i]=stackRangesNeg[i]=0;for(j=0,slen=vlist.length;j<slen;j++){val=svals[j]=chartRangeClip?clipval(vlist[j],clipMin,clipMax):vlist[j];if(val!==null){if(val>0){stackTotals[i]+=val}if(stackMin<0&&stackMax>0){if(val<0){stackRangesNeg[i]+=Math.abs(val)}else{stackRanges[i]+=val}}else{stackRanges[i]+=Math.abs(val-(val<0?stackMax:stackMin))}numValues.push(val)}}}else{val=chartRangeClip?clipval(values[i],clipMin,clipMax):values[i];val=values[i]=normalizeValue(val);if(val!==null){numValues.push(val)}}}this.max=max=Math.max.apply(Math,numValues);this.min=min=Math.min.apply(Math,numValues);this.stackMax=stackMax=stacked?Math.max.apply(Math,stackTotals):max;this.stackMin=stackMin=stacked?Math.min.apply(Math,numValues):min;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<min)){min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>max)){max=options.get("chartRangeMax")}this.zeroAxis=zeroAxis=options.get("zeroAxis",true);if(min<=0&&max>=0&&zeroAxis){xaxisOffset=0}else if(zeroAxis==false){xaxisOffset=min}else if(min>0){xaxisOffset=min}else{xaxisOffset=max}this.xaxisOffset=xaxisOffset;range=stacked?Math.max.apply(Math,stackRanges)+Math.max.apply(Math,stackRangesNeg):max-min;this.canvasHeightEf=zeroAxis&&min<0?this.canvasHeight-2:this.canvasHeight-1;if(min<xaxisOffset){yMaxCalc=stacked&&max>=0?stackMax:max;yoffset=(yMaxCalc-xaxisOffset)/range*this.canvasHeight;if(yoffset!==Math.ceil(yoffset)){this.canvasHeightEf-=2;yoffset=Math.ceil(yoffset)}}else{yoffset=this.canvasHeight}this.yoffset=yoffset;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.range=range},getRegion:function(el,x,y){var result=Math.floor(x/this.totalBarWidth);return result<0||result>=this.values.length?undefined:result},getCurrentRegionFields:function(){var currentRegion=this.currentRegion,values=ensureArray(this.values[currentRegion]),result=[],value,i;for(i=values.length;i--;){value=values[i];result.push({isNull:value===null,value:value,color:this.calcColor(i,value,currentRegion),offset:currentRegion})}return result},calcColor:function(stacknum,value,valuenum){var colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,options=this.options,color,newColor;if(this.stacked){color=options.get("stackedBarColor")}else{color=value<0?options.get("negBarColor"):options.get("barColor")}if(value===0&&options.get("zeroColor")!==undefined){color=options.get("zeroColor")}if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}return $.isArray(color)?color[stacknum%color.length]:color},renderRegion:function(valuenum,highlight){var vals=this.values[valuenum],options=this.options,xaxisOffset=this.xaxisOffset,result=[],range=this.range,stacked=this.stacked,target=this.target,x=valuenum*this.totalBarWidth,canvasHeightEf=this.canvasHeightEf,yoffset=this.yoffset,y,height,color,isNull,yoffsetNeg,i,valcount,val,minPlotted,allMin;vals=$.isArray(vals)?vals:[vals];valcount=vals.length;val=vals[0];isNull=all(null,vals);allMin=all(xaxisOffset,vals,true);if(isNull){if(options.get("nullColor")){color=highlight?options.get("nullColor"):this.calcHighlightColor(options.get("nullColor"),options);y=yoffset>0?yoffset-1:yoffset;return target.drawRect(x,y,this.barWidth-1,0,color,color)}else{return undefined}}yoffsetNeg=yoffset;for(i=0;i<valcount;i++){val=vals[i];if(stacked&&val===xaxisOffset){if(!allMin||minPlotted){continue}minPlotted=true}if(range>0){height=Math.floor(canvasHeightEf*(Math.abs(val-xaxisOffset)/range))+1}else{height=1}if(val<xaxisOffset||val===xaxisOffset&&yoffset===0){y=yoffsetNeg;yoffsetNeg+=height}else{y=yoffset-height;yoffset-=height}color=this.calcColor(i,val,valuenum);if(highlight){color=this.calcHighlightColor(color,options)}result.push(target.drawRect(x,y,this.barWidth-1,height-1,color,color))}if(result.length===1){return result[0]}return result}});$.fn.sparkline.tristate=tristate=createClass($.fn.sparkline._base,barHighlightMixin,{type:"tristate",init:function(el,values,options,width,height){var barWidth=parseInt(options.get("barWidth"),10),barSpacing=parseInt(options.get("barSpacing"),10);tristate._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.barWidth=barWidth;this.barSpacing=barSpacing;this.totalBarWidth=barWidth+barSpacing;this.values=$.map(values,Number);this.width=width=values.length*barWidth+(values.length-1)*barSpacing;if($.isArray(options.get("colorMap"))){this.colorMapByIndex=options.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=options.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===undefined){this.colorMapByValue=new RangeMap(this.colorMapByValue)}}this.initTarget()},getRegion:function(el,x,y){return Math.floor(x/this.totalBarWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],color:this.calcColor(this.values[currentRegion],currentRegion),offset:currentRegion}},calcColor:function(value,valuenum){var values=this.values,options=this.options,colorMapByIndex=this.colorMapByIndex,colorMapByValue=this.colorMapByValue,color,newColor;if(colorMapByValue&&(newColor=colorMapByValue.get(value))){color=newColor}else if(colorMapByIndex&&colorMapByIndex.length>valuenum){color=colorMapByIndex[valuenum]}else if(values[valuenum]<0){color=options.get("negBarColor")}else if(values[valuenum]>0){color=options.get("posBarColor")}else{color=options.get("zeroBarColor")}return color},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,target=this.target,canvasHeight,height,halfHeight,x,y,color;canvasHeight=target.pixelHeight;halfHeight=Math.round(canvasHeight/2);x=valuenum*this.totalBarWidth;if(values[valuenum]<0){y=halfHeight;height=halfHeight-1}else if(values[valuenum]>0){y=0;height=halfHeight-1}else{y=halfHeight-1;height=2}color=this.calcColor(values[valuenum],valuenum);if(color===null){return}if(highlight){color=this.calcHighlightColor(color,options)}return target.drawRect(x,y,this.barWidth-1,height-1,color,color)}});$.fn.sparkline.discrete=discrete=createClass($.fn.sparkline._base,barHighlightMixin,{type:"discrete",init:function(el,values,options,width,height){discrete._super.init.call(this,el,values,options,width,height);this.regionShapes={};this.values=values=$.map(values,Number);this.min=Math.min.apply(Math,values);this.max=Math.max.apply(Math,values);this.range=this.max-this.min;this.width=width=options.get("width")==="auto"?values.length*2:this.width;this.interval=Math.floor(width/values.length);this.itemWidth=width/values.length;if(options.get("chartRangeMin")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMin")<this.min)){this.min=options.get("chartRangeMin")}if(options.get("chartRangeMax")!==undefined&&(options.get("chartRangeClip")||options.get("chartRangeMax")>this.max)){this.max=options.get("chartRangeMax")}this.initTarget();if(this.target){this.lineHeight=options.get("lineHeight")==="auto"?Math.round(this.canvasHeight*.3):options.get("lineHeight")}},getRegion:function(el,x,y){return Math.floor(x/this.itemWidth)},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],offset:currentRegion}},renderRegion:function(valuenum,highlight){var values=this.values,options=this.options,min=this.min,max=this.max,range=this.range,interval=this.interval,target=this.target,canvasHeight=this.canvasHeight,lineHeight=this.lineHeight,pheight=canvasHeight-lineHeight,ytop,val,color,x;val=clipval(values[valuenum],min,max);x=valuenum*interval;ytop=Math.round(pheight-pheight*((val-min)/range));color=options.get("thresholdColor")&&val<options.get("thresholdValue")?options.get("thresholdColor"):options.get("lineColor");if(highlight){color=this.calcHighlightColor(color,options)}return target.drawLine(x,ytop,x,ytop+lineHeight,color)}});$.fn.sparkline.bullet=bullet=createClass($.fn.sparkline._base,{type:"bullet",init:function(el,values,options,width,height){var min,max,vals;bullet._super.init.call(this,el,values,options,width,height);this.values=values=normalizeValues(values);vals=values.slice();vals[0]=vals[0]===null?vals[2]:vals[0];vals[1]=values[1]===null?vals[2]:vals[1];min=Math.min.apply(Math,values);max=Math.max.apply(Math,values);if(options.get("base")===undefined){min=min<0?min:0}else{min=options.get("base")}this.min=min;this.max=max;this.range=max-min;this.shapes={};this.valueShapes={};this.regiondata={};this.width=width=options.get("width")==="auto"?"4.0em":width;this.target=this.$el.simpledraw(width,height,options.get("composite"));if(!values.length){this.disabled=true}this.initTarget()},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{fieldkey:currentRegion.substr(0,1),value:this.values[currentRegion.substr(1)],region:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,shapeid=this.valueShapes[currentRegion],shape;delete this.shapes[shapeid];switch(currentRegion.substr(0,1)){case"r":shape=this.renderRange(currentRegion.substr(1),highlight);break;case"p":shape=this.renderPerformance(highlight);break;case"t":shape=this.renderTarget(highlight);break}this.valueShapes[currentRegion]=shape.id;this.shapes[shape.id]=currentRegion;this.target.replaceWithShape(shapeid,shape)},renderRange:function(rn,highlight){var rangeval=this.values[rn],rangewidth=Math.round(this.canvasWidth*((rangeval-this.min)/this.range)),color=this.options.get("rangeColors")[rn-2];if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,0,rangewidth-1,this.canvasHeight-1,color,color)},renderPerformance:function(highlight){var perfval=this.values[1],perfwidth=Math.round(this.canvasWidth*((perfval-this.min)/this.range)),color=this.options.get("performanceColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(0,Math.round(this.canvasHeight*.3),perfwidth-1,Math.round(this.canvasHeight*.4)-1,color,color)},renderTarget:function(highlight){var targetval=this.values[0],x=Math.round(this.canvasWidth*((targetval-this.min)/this.range)-this.options.get("targetWidth")/2),targettop=Math.round(this.canvasHeight*.1),targetheight=this.canvasHeight-targettop*2,color=this.options.get("targetColor");if(highlight){color=this.calcHighlightColor(color,this.options)}return this.target.drawRect(x,targettop,this.options.get("targetWidth")-1,targetheight-1,color,color)},render:function(){var vlen=this.values.length,target=this.target,i,shape;if(!bullet._super.render.call(this)){return}for(i=2;i<vlen;i++){shape=this.renderRange(i).append();this.shapes[shape.id]="r"+i;this.valueShapes["r"+i]=shape.id}if(this.values[1]!==null){shape=this.renderPerformance().append();this.shapes[shape.id]="p1";this.valueShapes.p1=shape.id}if(this.values[0]!==null){shape=this.renderTarget().append();this.shapes[shape.id]="t0";this.valueShapes.t0=shape.id}target.render()}});$.fn.sparkline.pie=pie=createClass($.fn.sparkline._base,{type:"pie",init:function(el,values,options,width,height){var total=0,i;pie._super.init.call(this,el,values,options,width,height);this.shapes={};this.valueShapes={};this.values=values=$.map(values,Number);if(options.get("width")==="auto"){this.width=this.height}if(values.length>0){for(i=values.length;i--;){total+=values[i]}}this.total=total;this.initTarget();this.radius=Math.floor(Math.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(el,x,y){var shapeid=this.target.getShapeAt(el,x,y);return shapeid!==undefined&&this.shapes[shapeid]!==undefined?this.shapes[shapeid]:undefined},getCurrentRegionFields:function(){var currentRegion=this.currentRegion;return{isNull:this.values[currentRegion]===undefined,value:this.values[currentRegion],percent:this.values[currentRegion]/this.total*100,color:this.options.get("sliceColors")[currentRegion%this.options.get("sliceColors").length],offset:currentRegion}},changeHighlight:function(highlight){var currentRegion=this.currentRegion,newslice=this.renderSlice(currentRegion,highlight),shapeid=this.valueShapes[currentRegion];delete this.shapes[shapeid];this.target.replaceWithShape(shapeid,newslice);this.valueShapes[currentRegion]=newslice.id;this.shapes[newslice.id]=currentRegion},renderSlice:function(valuenum,highlight){var target=this.target,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),offset=options.get("offset"),circle=2*Math.PI,values=this.values,total=this.total,next=offset?2*Math.PI*(offset/360):0,start,end,i,vlen,color;vlen=values.length;for(i=0;i<vlen;i++){start=next;end=next;if(total>0){end=next+circle*(values[i]/total)}if(valuenum===i){color=options.get("sliceColors")[i%options.get("sliceColors").length];if(highlight){color=this.calcHighlightColor(color,options)}return target.drawPieSlice(radius,radius,radius-borderWidth,start,end,undefined,color)}next=end}},render:function(){var target=this.target,values=this.values,options=this.options,radius=this.radius,borderWidth=options.get("borderWidth"),shape,i;if(!pie._super.render.call(this)){return}if(borderWidth){target.drawCircle(radius,radius,Math.floor(radius-borderWidth/2),options.get("borderColor"),undefined,borderWidth).append()}for(i=values.length;i--;){if(values[i]){shape=this.renderSlice(i).append();this.valueShapes[i]=shape.id;this.shapes[shape.id]=i}}target.render()}});$.fn.sparkline.box=box=createClass($.fn.sparkline._base,{type:"box",init:function(el,values,options,width,height){box._super.init.call(this,el,values,options,width,height);this.values=$.map(values,Number);this.width=options.get("width")==="auto"?"4.0em":width;this.initTarget();if(!this.values.length){this.disabled=1}},getRegion:function(){return 1},getCurrentRegionFields:function(){var result=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];if(this.loutlier!==undefined){result.push({field:"lo",value:this.loutlier})}if(this.routlier!==undefined){result.push({field:"ro",value:this.routlier})}if(this.lwhisker!==undefined){result.push({field:"lw",value:this.lwhisker})}if(this.rwhisker!==undefined){result.push({field:"rw",value:this.rwhisker})}return result},render:function(){var target=this.target,values=this.values,vlen=values.length,options=this.options,canvasWidth=this.canvasWidth,canvasHeight=this.canvasHeight,minValue=options.get("chartRangeMin")===undefined?Math.min.apply(Math,values):options.get("chartRangeMin"),maxValue=options.get("chartRangeMax")===undefined?Math.max.apply(Math,values):options.get("chartRangeMax"),canvasLeft=0,lwhisker,loutlier,iqr,q1,q2,q3,rwhisker,routlier,i,size,unitSize;if(!box._super.render.call(this)){return}if(options.get("raw")){if(options.get("showOutliers")&&values.length>5){loutlier=values[0];lwhisker=values[1];q1=values[2];q2=values[3];q3=values[4];rwhisker=values[5];routlier=values[6]}else{lwhisker=values[0];q1=values[1];q2=values[2];q3=values[3];rwhisker=values[4]}}else{values.sort(function(a,b){return a-b});q1=quartile(values,1);q2=quartile(values,2);q3=quartile(values,3);iqr=q3-q1;if(options.get("showOutliers")){lwhisker=rwhisker=undefined;for(i=0;i<vlen;i++){if(lwhisker===undefined&&values[i]>q1-iqr*options.get("outlierIQR")){lwhisker=values[i]}if(values[i]<q3+iqr*options.get("outlierIQR")){rwhisker=values[i]}}loutlier=values[0];routlier=values[vlen-1]}else{lwhisker=values[0];rwhisker=values[vlen-1]}}this.quartiles=[q1,q2,q3];this.lwhisker=lwhisker;this.rwhisker=rwhisker;this.loutlier=loutlier;this.routlier=routlier;unitSize=canvasWidth/(maxValue-minValue+1);if(options.get("showOutliers")){canvasLeft=Math.ceil(options.get("spotRadius"));canvasWidth-=2*Math.ceil(options.get("spotRadius"));unitSize=canvasWidth/(maxValue-minValue+1);if(loutlier<lwhisker){target.drawCircle((loutlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}if(routlier>rwhisker){target.drawCircle((routlier-minValue)*unitSize+canvasLeft,canvasHeight/2,options.get("spotRadius"),options.get("outlierLineColor"),options.get("outlierFillColor")).append()}}target.drawRect(Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q3-q1)*unitSize),Math.round(canvasHeight*.8),options.get("boxLineColor"),options.get("boxFillColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q1-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((lwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),Math.round((q3-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2),options.get("lineColor")).append();target.drawLine(Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/4),Math.round((rwhisker-minValue)*unitSize+canvasLeft),Math.round(canvasHeight-canvasHeight/4),options.get("whiskerColor")).append();target.drawLine(Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.1),Math.round((q2-minValue)*unitSize+canvasLeft),Math.round(canvasHeight*.9),options.get("medianColor")).append();if(options.get("target")){size=Math.ceil(options.get("spotRadius"));target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2-size),Math.round((options.get("target")-minValue)*unitSize+canvasLeft),Math.round(canvasHeight/2+size),options.get("targetColor")).append();target.drawLine(Math.round((options.get("target")-minValue)*unitSize+canvasLeft-size),Math.round(canvasHeight/2),Math.round((options.get("target")-minValue)*unitSize+canvasLeft+size),Math.round(canvasHeight/2),options.get("targetColor")).append()}target.render()}});VShape=createClass({init:function(target,id,type,args){this.target=target;this.id=id;this.type=type;this.args=args},append:function(){this.target.appendShape(this);return this}});VCanvas_base=createClass({_pxregex:/(\d+)(px)?\s*$/i,init:function(width,height,target){if(!width){return}this.width=width;this.height=height;this.target=target;this.lastShapeId=null;if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this)},drawLine:function(x1,y1,x2,y2,lineColor,lineWidth){return this.drawShape([[x1,y1],[x2,y2]],lineColor,lineWidth)},drawShape:function(path,lineColor,fillColor,lineWidth){return this._genShape("Shape",[path,lineColor,fillColor,lineWidth])},drawCircle:function(x,y,radius,lineColor,fillColor,lineWidth){return this._genShape("Circle",[x,y,radius,lineColor,fillColor,lineWidth])},drawPieSlice:function(x,y,radius,startAngle,endAngle,lineColor,fillColor){return this._genShape("PieSlice",[x,y,radius,startAngle,endAngle,lineColor,fillColor])},drawRect:function(x,y,width,height,lineColor,fillColor){return this._genShape("Rect",[x,y,width,height,lineColor,fillColor])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(el,target){$(target).html(el)},_calculatePixelDims:function(width,height,canvas){var match;match=this._pxregex.exec(height);if(match){this.pixelHeight=match[1]}else{this.pixelHeight=$(canvas).height()}match=this._pxregex.exec(width);if(match){this.pixelWidth=match[1]}else{this.pixelWidth=$(canvas).width()}},_genShape:function(shapetype,shapeargs){var id=shapeCount++;shapeargs.unshift(id);return new VShape(this,id,shapetype,shapeargs)},appendShape:function(shape){alert("appendShape not implemented")},replaceWithShape:function(shapeid,shape){alert("replaceWithShape not implemented")},insertAfterShape:function(shapeid,shape){alert("insertAfterShape not implemented")},removeShapeId:function(shapeid){alert("removeShapeId not implemented")},getShapeAt:function(el,x,y){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}});VCanvas_canvas=createClass(VCanvas_base,{init:function(width,height,target,interact){VCanvas_canvas._super.init.call(this,width,height,target);this.canvas=document.createElement("canvas");if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);$(this.canvas).css({display:"inline-block",width:width,height:height,verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;this.interact=interact;this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined;$(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(lineColor,fillColor,lineWidth){var context=this.canvas.getContext("2d");if(lineColor!==undefined){context.strokeStyle=lineColor}context.lineWidth=lineWidth===undefined?1:lineWidth;if(fillColor!==undefined){context.fillStyle=fillColor}return context},reset:function(){var context=this._getContext();context.clearRect(0,0,this.pixelWidth,this.pixelHeight);this.shapes={};this.shapeseq=[];this.currentTargetShapeId=undefined},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth),i,plen;context.beginPath();context.moveTo(path[0][0]+.5,path[0][1]+.5);for(i=1,plen=path.length;i<plen;i++){context.lineTo(path[i][0]+.5,path[i][1]+.5)}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var context=this._getContext(lineColor,fillColor,lineWidth);context.beginPath();context.arc(x,y,radius,0,2*Math.PI,false);if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}if(lineColor!==undefined){context.stroke()}if(fillColor!==undefined){context.fill()}},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var context=this._getContext(lineColor,fillColor);context.beginPath();context.moveTo(x,y);context.arc(x,y,radius,startAngle,endAngle,false);context.lineTo(x,y);context.closePath();if(lineColor!==undefined){context.stroke()}if(fillColor){context.fill()}if(this.targetX!==undefined&&this.targetY!==undefined&&context.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=shapeid}},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x+width,y],[x+width,y+height],[x,y+height],[x,y]],lineColor,fillColor)},appendShape:function(shape){this.shapes[shape.id]=shape;this.shapeseq.push(shape.id);this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;this.shapes[shape.id]=shape;for(i=shapeseq.length;i--;){if(shapeseq[i]==shapeid){shapeseq[i]=shape.id}}delete this.shapes[shapeid]},replaceWithShapes:function(shapeids,shapes){var shapeseq=this.shapeseq,shapemap={},sid,i,first;for(i=shapeids.length;i--;){shapemap[shapeids[i]]=true}for(i=shapeseq.length;i--;){sid=shapeseq[i];if(shapemap[sid]){shapeseq.splice(i,1);delete this.shapes[sid];first=i}}for(i=shapes.length;i--;){shapeseq.splice(first,0,shapes[i].id);this.shapes[shapes[i].id]=shapes[i]}},insertAfterShape:function(shapeid,shape){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i+1,0,shape.id);this.shapes[shape.id]=shape;return}}},removeShapeId:function(shapeid){var shapeseq=this.shapeseq,i;for(i=shapeseq.length;i--;){if(shapeseq[i]===shapeid){shapeseq.splice(i,1);break}}delete this.shapes[shapeid]},getShapeAt:function(el,x,y){this.targetX=x;this.targetY=y;this.render();return this.currentTargetShapeId},render:function(){var shapeseq=this.shapeseq,shapes=this.shapes,shapeCount=shapeseq.length,context=this._getContext(),shapeid,shape,i;context.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(i=0;i<shapeCount;i++){shapeid=shapeseq[i];shape=shapes[shapeid];this["_draw"+shape.type].apply(this,shape.args)}if(!this.interact){this.shapes={};this.shapeseq=[]}}});VCanvas_vml=createClass(VCanvas_base,{init:function(width,height,target){var groupel;VCanvas_vml._super.init.call(this,width,height,target);if(target[0]){target=target[0]}$.data(target,"_jqs_vcanvas",this);this.canvas=document.createElement("span");$(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:width,height:height,margin:"0px",padding:"0px",verticalAlign:"top"});this._insert(this.canvas,target);this._calculatePixelDims(width,height,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;groupel='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>';this.canvas.insertAdjacentHTML("beforeEnd",groupel);this.group=$(this.canvas).children()[0];this.rendered=false;this.prerender=""},_drawShape:function(shapeid,path,lineColor,fillColor,lineWidth){var vpath=[],initial,stroke,fill,closed,vel,plen,i;for(i=0,plen=path.length;i<plen;i++){vpath[i]=""+path[i][0]+","+path[i][1]}initial=vpath.splice(0,1);lineWidth=lineWidth===undefined?1:lineWidth;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';closed=vpath[0]===vpath[vpath.length-1]?"x ":"";vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+initial+" l "+vpath.join(", ")+" "+closed+'e">'+" </v:shape>";return vel},_drawCircle:function(shapeid,x,y,radius,lineColor,fillColor,lineWidth){var stroke,fill,vel;x-=radius;y-=radius;stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="'+lineWidth+'px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel="<v:oval "+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;top:'+y+"px; left:"+x+"px; width:"+radius*2+"px; height:"+radius*2+'px"></v:oval>';return vel},_drawPieSlice:function(shapeid,x,y,radius,startAngle,endAngle,lineColor,fillColor){var vpath,startx,starty,endx,endy,stroke,fill,vel;if(startAngle===endAngle){return""}if(endAngle-startAngle===2*Math.PI){startAngle=0;endAngle=2*Math.PI}startx=x+Math.round(Math.cos(startAngle)*radius);starty=y+Math.round(Math.sin(startAngle)*radius);endx=x+Math.round(Math.cos(endAngle)*radius);endy=y+Math.round(Math.sin(endAngle)*radius);if(startx===endx&&starty===endy){if(endAngle-startAngle<Math.PI){return""}startx=endx=x+radius;starty=endy=y}if(startx===endx&&starty===endy&&endAngle-startAngle<Math.PI){return""}vpath=[x-radius,y-radius,x+radius,y+radius,startx,starty,endx,endy];stroke=lineColor===undefined?' stroked="false" ':' strokeWeight="1px" strokeColor="'+lineColor+'" ';fill=fillColor===undefined?' filled="false"':' fillColor="'+fillColor+'" filled="true" ';vel='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+shapeid+'" '+stroke+fill+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+x+","+y+" wa "+vpath.join(", ")+' x e">'+" </v:shape>";return vel},_drawRect:function(shapeid,x,y,width,height,lineColor,fillColor){return this._drawShape(shapeid,[[x,y],[x,y+height],[x+width,y+height],[x+width,y],[x,y]],lineColor,fillColor)},reset:function(){this.group.innerHTML=""},appendShape:function(shape){var vel=this["_draw"+shape.type].apply(this,shape.args);if(this.rendered){this.group.insertAdjacentHTML("beforeEnd",vel)}else{this.prerender+=vel}this.lastShapeId=shape.id;return shape.id},replaceWithShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].outerHTML=vel},replaceWithShapes:function(shapeids,shapes){var existing=$("#jqsshape"+shapeids[0]),replace="",slen=shapes.length,i;for(i=0;i<slen;i++){replace+=this["_draw"+shapes[i].type].apply(this,shapes[i].args)}existing[0].outerHTML=replace;for(i=1;i<shapeids.length;i++){$("#jqsshape"+shapeids[i]).remove()}},insertAfterShape:function(shapeid,shape){var existing=$("#jqsshape"+shapeid),vel=this["_draw"+shape.type].apply(this,shape.args);existing[0].insertAdjacentHTML("afterEnd",vel)},removeShapeId:function(shapeid){var existing=$("#jqsshape"+shapeid);this.group.removeChild(existing[0])},getShapeAt:function(el,x,y){var shapeid=el.id.substr(8);return shapeid},render:function(){if(!this.rendered){this.group.innerHTML=this.prerender;this.rendered=true}}})})})(document,Math);
var myChart;
var autorefresh = false;
$(function() {
    $.ajax({
        url: "/api/brewing/last"
    }).done(function(response) {

        var labels = [];
        var data = [];
        var targetData = [];

        //Found Brewing state for scheme
        response.states.forEach(function(state) {
            if(state.type.name === "Brewing"){
                state.temperatures.forEach(function(temperature) {

                    var date = new Date(temperature.createdAt.timestamp*1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    labels.push(formattedTime);
                    data.push(temperature.value);
                    targetData.push(temperature.target);
                });
            }
         });


        var ctx = document.getElementById("myChart");
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Current brewing',
                    data: data,
                    spanGaps: true,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },{
                    spanGaps: false,
                    label: 'profil',
                    data: targetData,
                    spanGaps: true,
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    duration: 0
                }
            }
        });
    });

    jQuery("#brewing-autorefresh").click(function(){
        if(autorefresh){
            console.log("unactive autorefresh");
            autorefresh = false;
            jQuery("#brewing-autorefresh").removeClass("btn-danger");
            jQuery("#brewing-autorefresh").addClass("btn-success");
        }else{
            console.log("active autorefresh");
            autorefresh = true;
            jQuery("#brewing-autorefresh").addClass("btn-danger");
            jQuery("#brewing-autorefresh").removeClass("btn-success");
            autorefreshFunction();
        }
    });
});

function autorefreshFunction(){
    setTimeout(updateChart, 2000);
    if(autorefresh){
        setTimeout(autorefreshFunction, 2000);
    }
}

function updateChart(){
    $.ajax({
        url: "/api/brewing/last"
    }).done(function(response) {
        var labels = [];
        var data = [];
        var targetData = [];

        //Found Brewing state for scheme
        response.states.forEach(function(state) {
            if(state.type.name === "Brewing"){
                state.temperatures.forEach(function(temperature) {

                    var date = new Date(temperature.createdAt.timestamp*1000);
                    var hours = date.getHours();
                    var minutes = "0" + date.getMinutes();
                    var seconds = "0" + date.getSeconds();
                    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                    labels.push(formattedTime);
                    data.push(temperature.value);
                    targetData.push(temperature.target);
                });
            }
        });
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = data;
        myChart.data.datasets[1].data = targetData;
        myChart.update();
    });
}
//! moment.js
//! version : 2.17.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

// This is done to register the method called with moment()
// without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        var k;
        for (k in obj) {
            // even if its not own property I'd still call it non-empty
            return false;
        }
        return true;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    var some$1 = some;

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    function isUndefined(input) {
        return input === void 0;
    }

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

// Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

// compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var keys$1 = keys;

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid()) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

// MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

// format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    var indexOf$1 = indexOf;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

// FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

// ALIASES

    addUnitAlias('month', 'M');

// PRIORITY

    addUnitPriority('month', 8);

// PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

// LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return this._months;
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return this._monthsShort;
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf$1.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf$1.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf$1.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf$1.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

// MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

// FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

    addUnitAlias('year', 'y');

// PRIORITIES

    addUnitPriority('year', 1);

// PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

// HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

// HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

// MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        //the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

// start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

// FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

// PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

// PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

// HELPERS

// LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

// MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

// FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

// PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

// PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

// HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

// LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return this._weekdays;
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf$1.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf$1.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf$1.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf$1.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

// MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

// FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

// ALIASES

    addUnitAlias('hour', 'h');

// PRIORITY
    addUnitPriority('hour', 13);

// PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

// LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
    var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        ordinalParse: defaultOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

// internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config
                    });
                    return null;
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, parentConfig = baseConfig;
            // MERGE
            if (locales[name] != null) {
                parentConfig = locales[name]._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

// returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys$1(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                    a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                        a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                                    a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                        -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

// iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

// date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

// Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

// constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

// date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

// date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

// TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

// FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

// PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
            0 :
            parts[0] === '+' ? minutes : -minutes;
    }

// Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

// ASP.NET json date format regex
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
        // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

// TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                        diff < 2 ? 'nextDay' :
                            diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            delta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                    units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                        units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if (isFunction(Date.prototype.toISOString)) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
            createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
            createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
            /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
            /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
            /* falls through */
            case 'hour':
                this.minutes(0);
            /* falls through */
            case 'minute':
                this.seconds(0);
            /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$1 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

// FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


// PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

// MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

// FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

    addUnitAlias('quarter', 'Q');

// PRIORITY

    addUnitPriority('quarter', 7);

// PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

// MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

// FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

    addUnitAlias('date', 'D');

// PRIOROITY
    addUnitPriority('date', 9);

// PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

// MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

    addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
    addUnitPriority('dayOfYear', 4);

// PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

// HELPERS

// MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

// FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

    addUnitAlias('minute', 'm');

// PRIORITY

    addUnitPriority('minute', 14);

// PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

    addUnitAlias('second', 's');

// PRIORITY

    addUnitPriority('second', 15);

// PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

// MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


// ALIASES

    addUnitAlias('millisecond', 'ms');

// PRIORITY

    addUnitPriority('millisecond', 16);

// PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
// MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$1;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;

// Year
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;

// Week Year
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;

// Quarter
    proto.quarter = proto.quarters = getSetQuarter;

// Month
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;

// Week
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;

// Day
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;

// Hour
    proto.hour = proto.hours = getSetHour;

// Minute
    proto.minute = proto.minutes = getSetMinute;

// Second
    proto.second = proto.seconds = getSetSecond;

// Millisecond
    proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;

// Timezone
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;

// Deprecations
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

// Month
    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;

// Week
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                        (b === 2) ? 'nd' :
                            (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

// Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

// supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

// supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

// TODO: Use this.as('ms')?
    function valueOf$1 () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function get$2 (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
            minutes <= 1           && ['m']           ||
            minutes < thresholds.m && ['mm', minutes] ||
            hours   <= 1           && ['h']           ||
            hours   < thresholds.h && ['hh', hours]   ||
            days    <= 1           && ['d']           ||
            days    < thresholds.d && ['dd', days]    ||
            months  <= 1           && ['M']           ||
            months  < thresholds.M && ['MM', months]  ||
            years   <= 1           && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

// This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

// This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

// Deprecations
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

// Side effect imports

// FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

// PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

// Side effect imports


    hooks.version = '2.17.1';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    return hooks;

})));
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});

