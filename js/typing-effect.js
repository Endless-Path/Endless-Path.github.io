((t,e)=>{"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.POWERMODE=e():t.POWERMODE=e()})(this,function(){return n=[function(t,e,i){function o(t,e){return Math.random()*(e-t)+t}function d(t){var e;return a.colorful?(e=o(0,360),"hsla("+o(e-10,e+10)+", 100%, "+o(50,80)+"%, 1)"):window.getComputedStyle(t).color}function a(){for(var t,e,o,n="TEXTAREA"===(t=document.activeElement).tagName||"INPUT"===t.tagName&&"text"===t.getAttribute("type")?(o=i(1)(t,t.selectionStart),e=t.getBoundingClientRect(),{x:o.left+e.left,y:o.top+e.top,color:d(t)}):(o=window.getSelection()).rangeCount?((o=(t=o.getRangeAt(0)).startContainer).nodeType===document.TEXT_NODE&&(o=o.parentNode),{x:(e=t.getBoundingClientRect()).left,y:e.top,color:d(o)}):{x:0,y:0,color:"transparent"},r=5+Math.round(10*Math.random());r--;)l[c]={x:n.x,y:n.y,alpha:1,color:n.color,velocity:{x:2*Math.random()-1,y:2*Math.random()-3.5}},c=(c+1)%500;a.shake&&(e=(t=1+2*Math.random())*(.5<Math.random()?-1:1),o=t*(.5<Math.random()?-1:1),document.body.style.marginLeft=e+"px",document.body.style.marginTop=o+"px",setTimeout(function(){document.body.style.marginLeft="",document.body.style.marginTop=""},75))}var n=document.createElement("canvas"),r=(n.width=window.innerWidth,n.height=window.innerHeight,n.style.cssText="position:fixed;top:0;left:0;pointer-events:none;z-index:999999",window.addEventListener("resize",function(){n.width=window.innerWidth,n.height=window.innerHeight}),document.body.appendChild(n),n.getContext("2d")),l=[],c=0;a.shake=!0,a.colorful=!1,requestAnimationFrame(function t(){requestAnimationFrame(t),r.clearRect(0,0,n.width,n.height);for(var e=0;e<l.length;++e){var o=l[e];o.alpha<=.1||(o.velocity.y+=.075,o.x+=o.velocity.x,o.y+=o.velocity.y,o.alpha*=.96,r.globalAlpha=o.alpha,r.fillStyle=o.color,r.fillRect(Math.round(o.x-1.5),Math.round(o.y-1.5),3,3))}}),t.exports=a},function(t,e){function o(t,e,o){var o=o&&o.debug||!1,n=(o&&(n=document.querySelector("#input-textarea-caret-position-mirror-div"))&&n.parentNode.removeChild(n),document.createElement("div")),r=(n.id="input-textarea-caret-position-mirror-div",document.body.appendChild(n),n.style),i=window.getComputedStyle?getComputedStyle(t):t.currentStyle,d=(r.whiteSpace="pre-wrap","INPUT"!==t.nodeName&&(r.wordWrap="break-word"),r.position="absolute",o||(r.visibility="hidden"),a.forEach(function(t){r[t]=i[t]}),l?t.scrollHeight>parseInt(i.height)&&(r.overflowY="scroll"):r.overflow="hidden",n.textContent=t.value.substring(0,e),"INPUT"===t.nodeName&&(n.textContent=n.textContent.replace(/\s/g,"聽")),document.createElement("span")),t=(d.textContent=t.value.substring(e)||".",n.appendChild(d),{top:d.offsetTop+parseInt(i.borderTopWidth),left:d.offsetLeft+parseInt(i.borderLeftWidth)});return o?d.style.backgroundColor="#aaa":document.body.removeChild(n),t}var a,l;a=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],l=null!=window.mozInnerScreenX,void 0!==t&&void 0!==t.exports?t.exports=o:window.getCaretCoordinates=o}],r={},o.m=n,o.c=r,o.p="",o(0);function o(t){var e;return(r[t]||(e=r[t]={exports:{},id:t,loaded:!1},n[t].call(e.exports,e,e.exports,o),e.loaded=!0,e)).exports}var n,r}),POWERMODE.colorful=!0,POWERMODE.shake=!1,document.body.addEventListener("input",POWERMODE);