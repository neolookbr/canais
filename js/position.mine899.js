/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}((function(t){return function(){t.ui=t.ui||{};var i,e,o=Math.max,n=Math.abs,l=Math.round,f=/left|center|right/,s=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,p=/%$/,c=t.fn.position;function d(t,i,e){return[parseFloat(t[0])*(p.test(t[0])?i/100:1),parseFloat(t[1])*(p.test(t[1])?e/100:1)]}function a(i,e){return parseInt(t.css(i,e),10)||0}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var e,o=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=o.children()[0];return t("body").append(o),e=n.offsetWidth,o.css("overflow","scroll"),e===(n=n.offsetWidth)&&(n=o[0].clientWidth),o.remove(),i=e-n},getScrollInfo:function(i){var e=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),o=i.isWindow||i.isDocument?"":i.element.css("overflow-y");e="scroll"===e||"auto"===e&&i.width<i.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:e?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var e=t(i||window),o=t.isWindow(e[0]);return{element:e,isWindow:o,isDocument:i=!!e[0]&&9===e[0].nodeType,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:o||i?e.width():e.outerWidth(),height:o||i?e.height():e.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return c.apply(this,arguments);i=t.extend({},i);var p,g,u,m,w,W,y=t(i.of),v=t.position.getWithinInfo(i.within),b=t.position.getScrollInfo(v),H=(i.collision||"flip").split(" "),x={},T=9===(W=(T=y)[0]).nodeType?{width:T.width(),height:T.height(),offset:{top:0,left:0}}:t.isWindow(W)?{width:T.width(),height:T.height(),offset:{top:T.scrollTop(),left:T.scrollLeft()}}:W.preventDefault?{width:0,height:0,offset:{top:W.pageY,left:W.pageX}}:{width:T.outerWidth(),height:T.outerHeight(),offset:T.offset()};return y[0].preventDefault&&(i.at="left top"),g=T.width,u=T.height,w=t.extend({},m=T.offset),t.each(["my","at"],(function(){var t,e,o=(i[this]||"").split(" ");(o=1===o.length?f.test(o[0])?o.concat(["center"]):s.test(o[0])?["center"].concat(o):["center","center"]:o)[0]=f.test(o[0])?o[0]:"center",o[1]=s.test(o[1])?o[1]:"center",t=h.exec(o[0]),e=h.exec(o[1]),x[this]=[t?t[0]:0,e?e[0]:0],i[this]=[r.exec(o[0])[0],r.exec(o[1])[0]]})),1===H.length&&(H[1]=H[0]),"right"===i.at[0]?w.left+=g:"center"===i.at[0]&&(w.left+=g/2),"bottom"===i.at[1]?w.top+=u:"center"===i.at[1]&&(w.top+=u/2),p=d(x.at,g,u),w.left+=p[0],w.top+=p[1],this.each((function(){var f,s,h=t(this),r=h.outerWidth(),c=h.outerHeight(),W=a(this,"marginLeft"),T=a(this,"marginTop"),L=r+W+a(this,"marginRight")+b.width,P=c+T+a(this,"marginBottom")+b.height,D=t.extend({},w),I=d(x.my,h.outerWidth(),h.outerHeight());"right"===i.my[0]?D.left-=r:"center"===i.my[0]&&(D.left-=r/2),"bottom"===i.my[1]?D.top-=c:"center"===i.my[1]&&(D.top-=c/2),D.left+=I[0],D.top+=I[1],e||(D.left=l(D.left),D.top=l(D.top)),f={marginLeft:W,marginTop:T},t.each(["left","top"],(function(e,o){t.ui.position[H[e]]&&t.ui.position[H[e]][o](D,{targetWidth:g,targetHeight:u,elemWidth:r,elemHeight:c,collisionPosition:f,collisionWidth:L,collisionHeight:P,offset:[p[0]+I[0],p[1]+I[1]],my:i.my,at:i.at,within:v,elem:h})})),i.using&&(s=function(t){var e=m.left-D.left,l=e+g-r,f=m.top-D.top,s=f+u-c,p={target:{element:y,left:m.left,top:m.top,width:g,height:u},element:{element:h,left:D.left,top:D.top,width:r,height:c},horizontal:l<0?"left":0<e?"right":"center",vertical:s<0?"top":0<f?"bottom":"middle"};g<r&&n(e+l)<g&&(p.horizontal="center"),u<c&&n(f+s)<u&&(p.vertical="middle"),o(n(e),n(l))>o(n(f),n(s))?p.important="horizontal":p.important="vertical",i.using.call(this,t,p)}),h.offset(t.extend(D,{using:s}))}))},t.ui.position={fit:{left:function(t,i){var e=i.within,n=e.isWindow?e.scrollLeft:e.offset.left,l=e.width,f=t.left-i.collisionPosition.marginLeft,s=n-f,h=f+i.collisionWidth-l-n;i.collisionWidth>l?0<s&&h<=0?(e=t.left+s+i.collisionWidth-l-n,t.left+=s-e):t.left=!(0<h&&s<=0)&&h<s?n+l-i.collisionWidth:n:0<s?t.left+=s:0<h?t.left-=h:t.left=o(t.left-f,t.left)},top:function(t,i){var e=i.within,n=e.isWindow?e.scrollTop:e.offset.top,l=i.within.height,f=t.top-i.collisionPosition.marginTop,s=n-f,h=f+i.collisionHeight-l-n;i.collisionHeight>l?0<s&&h<=0?(e=t.top+s+i.collisionHeight-l-n,t.top+=s-e):t.top=!(0<h&&s<=0)&&h<s?n+l-i.collisionHeight:n:0<s?t.top+=s:0<h?t.top-=h:t.top=o(t.top-f,t.top)}},flip:{left:function(t,i){var e=(r=i.within).offset.left+r.scrollLeft,o=r.width,l=r.isWindow?r.scrollLeft:r.offset.left,f=(p=t.left-i.collisionPosition.marginLeft)-l,s=p+i.collisionWidth-o-l,h="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,r="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,p=-2*i.offset[0];f<0?((e=t.left+h+r+p+i.collisionWidth-o-e)<0||e<n(f))&&(t.left+=h+r+p):0<s&&(0<(l=t.left-i.collisionPosition.marginLeft+h+r+p-l)||n(l)<s)&&(t.left+=h+r+p)},top:function(t,i){var e=(r=i.within).offset.top+r.scrollTop,o=r.height,l=r.isWindow?r.scrollTop:r.offset.top,f=(p=t.top-i.collisionPosition.marginTop)-l,s=p+i.collisionHeight-o-l,h="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,r="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,p=-2*i.offset[1];f<0?((e=t.top+h+r+p+i.collisionHeight-o-e)<0||e<n(f))&&(t.top+=h+r+p):0<s&&(0<(l=t.top-i.collisionPosition.marginTop+h+r+p-l)||n(l)<s)&&(t.top+=h+r+p)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var i,o=document.getElementsByTagName("body")[0],n=document.createElement("div"),l=document.createElement(o?"div":"body"),f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(i in o&&t.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"}),f)l.style[i]=f[i];l.appendChild(n),(o=o||document.documentElement).insertBefore(l,o.firstChild),n.style.cssText="position: absolute; left: 10.7432222px;",n=t(n).offset().left,e=10<n&&n<11,l.innerHTML="",o.removeChild(l)}()}(),t.ui.position}));