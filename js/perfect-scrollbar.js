/* perfect-scrollbar v0.6.3 */
!function t(e,n,r){function o(l,s){if(!n[l]){if(!e[l]){var a="function"==typeof require&&require;if(!s&&a)return a(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t){"use strict";var e=t("../main");"function"==typeof define&&define.amd?define(e):(window.PerfectScrollbar=e,"undefined"==typeof window.Ps&&(window.Ps=e))},{"../main":7}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?t.classList:t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}n.e=function(t,e){var n=document.createElement(t);return n.className=e,n},n.appendTo=function(t,e){return e.appendChild(t),t},n.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},n.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},n.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}},{}],4:[function(t,e){"use strict";var n=function(t){this.element=t,this.events={}};n.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},n.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return n&&r!==e?!0:(this.element.removeEventListener(t,r,!1),!1)},this)},n.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var r=function(){this.eventElements=[]};r.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new n(t),this.eventElements.push(e)),e},r.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},r.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},r.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},r.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=r},{}],5:[function(t,e){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom");n.toInt=function(t){return parseInt(t,10)||0},n.clone=function(t){if(null===t)return null;if("object"==typeof t){var e={};for(var n in t)e[n]=this.clone(t[n]);return e}return t},n.extend=function(t,e){var n=this.clone(t);for(var r in e)n[r]=this.clone(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return this.toInt(o.css(t,"width"))+this.toInt(o.css(t,"paddingLeft"))+this.toInt(o.css(t,"paddingRight"))+this.toInt(o.css(t,"borderLeftWidth"))+this.toInt(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e){"use strict";var n=t("./plugin/destroy"),r=t("./plugin/initialize"),o=t("./plugin/update");e.exports={initialize:r,update:o,destroy:n}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":20}],8:[function(t,e){"use strict";e.exports={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0}},{}],9:[function(t,e){"use strict";var n=t("../lib/dom"),r=t("../lib/helper"),o=t("./instances");e.exports=function(t){var e=o.get(t);e.event.unbindAll(),n.remove(e.scrollbarX),n.remove(e.scrollbarY),n.remove(e.scrollbarXRail),n.remove(e.scrollbarYRail),r.removePsClasses(t),o.remove(t)}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e){"use strict";function n(t,e){function n(t){return t.getBoundingClientRect()}var o=window.Event.prototype.stopPropagation.bind;e.event.bind(e.scrollbarY,"click",o),e.event.bind(e.scrollbarYRail,"click",function(o){var l=r.toInt(e.scrollbarYHeight/2),s=e.railYRatio*(o.pageY-window.scrollY-n(e.scrollbarYRail).top-l),a=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),c=s/a;0>c?c=0:c>1&&(c=1),t.scrollTop=(e.contentHeight-e.containerHeight)*c,i(t),o.stopPropagation()}),e.event.bind(e.scrollbarX,"click",o),e.event.bind(e.scrollbarXRail,"click",function(o){var l=r.toInt(e.scrollbarXWidth/2),s=e.railXRatio*(o.pageX-window.scrollX-n(e.scrollbarXRail).left-l),a=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),c=s/a;0>c?c=0:c>1&&(c=1),t.scrollLeft=(e.contentWidth-e.containerWidth)*c-e.negativeScrollAdjustment,i(t),o.stopPropagation()})}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],11:[function(t,e){"use strict";function n(t,e){function n(n){var o=r+n*e.railXRatio,l=e.scrollbarXRail.getBoundingClientRect().left+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=0>o?0:o>l?l:o;var s=i.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;t.scrollLeft=s}var r=null,l=null,a=function(e){n(e.pageX-l),s(t),e.stopPropagation(),e.preventDefault()},c=function(){i.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarX,"mousedown",function(n){l=n.pageX,r=i.toInt(o.css(e.scrollbarX,"left"))*e.railXRatio,i.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",c),n.stopPropagation(),n.preventDefault()})}function r(t,e){function n(n){var o=r+n*e.railYRatio,l=e.scrollbarYRail.getBoundingClientRect().top+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=0>o?0:o>l?l:o;var s=i.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));t.scrollTop=s}var r=null,l=null,a=function(e){n(e.pageY-l),s(t),e.stopPropagation(),e.preventDefault()},c=function(){i.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",a)};e.event.bind(e.scrollbarY,"mousedown",function(n){l=n.pageY,r=i.toInt(o.css(e.scrollbarY,"top"))*e.railYRatio,i.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",a),e.event.once(e.ownerDocument,"mouseup",c),n.stopPropagation(),n.preventDefault()})}var o=t("../../lib/dom"),i=t("../../lib/helper"),l=t("../instances"),s=t("../update-geometry");e.exports=function(t){var e=l.get(t);n(t,e),r(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19}],12:[function(t,e){"use strict";function n(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var o=!1;e.event.bind(t,"mouseenter",function(){o=!0}),e.event.bind(t,"mouseleave",function(){o=!1});var l=!1;e.event.bind(e.ownerDocument,"keydown",function(s){if((!s.isDefaultPrevented||!s.isDefaultPrevented())&&o){var a=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(a){for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(r.isEditable(a))return}var c=0,u=0;switch(s.which){case 37:c=-30;break;case 38:u=30;break;case 39:c=30;break;case 40:u=-30;break;case 33:u=90;break;case 32:case 34:u=-90;break;case 35:u=s.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:u=s.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}t.scrollTop=t.scrollTop-u,t.scrollLeft=t.scrollLeft+c,i(t),l=n(c,u),l&&s.preventDefault()}})}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],13:[function(t,e){"use strict";function n(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function o(t){var e=t.deltaX,n=-1*t.deltaY;return("undefined"==typeof e||"undefined"==typeof n)&&(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function l(e,n){var r=t.querySelector("textarea:hover");if(r){var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&0>n))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&0>e||r.scrollLeft===i&&e>0))return!0}return!1}function s(s){if(r.env.isWebKit||!t.querySelector("select:focus")){var c=o(s),u=c[0],d=c[1];l(u,d)||(a=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(t.scrollTop=d?t.scrollTop-d*e.settings.wheelSpeed:t.scrollTop+u*e.settings.wheelSpeed,a=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(t.scrollLeft=u?t.scrollLeft+u*e.settings.wheelSpeed:t.scrollLeft-d*e.settings.wheelSpeed,a=!0):(t.scrollTop=t.scrollTop-d*e.settings.wheelSpeed,t.scrollLeft=t.scrollLeft+u*e.settings.wheelSpeed),i(t),a=a||n(u,d),a&&(s.stopPropagation(),s.preventDefault()))}}var a=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",s):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",s)}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],14:[function(t,e){"use strict";function n(t,e){e.event.bind(t,"scroll",function(){o(t)})}var r=t("../instances"),o=t("../update-geometry");e.exports=function(t){var e=r.get(t);n(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e){"use strict";function n(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function l(){a||(a=setInterval(function(){return o.get(t)?(t.scrollTop=t.scrollTop+c.top,t.scrollLeft=t.scrollLeft+c.left,void i(t)):void clearInterval(a)},50))}function s(){a&&(clearInterval(a),a=null),r.stopScrolling(t)}var a=null,c={top:0,left:0},u=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?u=!0:(u=!1,s())}),e.event.bind(window,"mouseup",function(){u&&(u=!1,s())}),e.event.bind(window,"mousemove",function(e){if(u){var n={x:e.pageX,y:e.pageY},o={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<o.left+3?(c.left=-5,r.startScrolling(t,"x")):n.x>o.right-3?(c.left=5,r.startScrolling(t,"x")):c.left=0,n.y<o.top+3?(c.top=o.top+3-n.y<5?-5:-20,r.startScrolling(t,"y")):n.y>o.bottom-3?(c.top=n.y-o.bottom+3<5?5:20,r.startScrolling(t,"y")):c.top=0,0===c.top&&0===c.left?s():l()}})}var r=t("../../lib/helper"),o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);n(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19}],16:[function(t,e){"use strict";function n(t,e,n,i){function l(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),s=Math.abs(r);if(s>l){if(0>r&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>s&&(0>n&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function s(e,n){t.scrollTop=t.scrollTop-n,t.scrollLeft=t.scrollLeft-e,o(t)}function a(){Y=!0}function c(){Y=!1}function u(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE?!0:!1}function p(t){if(d(t)){w=!0;var e=u(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==m&&clearInterval(m),t.stopPropagation()}}function f(t){if(!Y&&w&&d(t)){var e=u(t),n={pageX:e.pageX,pageY:e.pageY},r=n.pageX-b.pageX,o=n.pageY-b.pageY;s(r,o),b=n;var i=(new Date).getTime(),a=i-g;a>0&&(v.x=r/a,v.y=o/a,g=i),l(r,o)&&(t.stopPropagation(),t.preventDefault())}}function h(){!Y&&w&&(w=!1,clearInterval(m),m=setInterval(function(){return r.get(t)?Math.abs(v.x)<.01&&Math.abs(v.y)<.01?void clearInterval(m):(s(30*v.x,30*v.y),v.x*=.8,void(v.y*=.8)):void clearInterval(m)},10))}var b={},g=0,v={},m=null,Y=!1,w=!1;n&&(e.event.bind(window,"touchstart",a),e.event.bind(window,"touchend",c),e.event.bind(t,"touchstart",p),e.event.bind(t,"touchmove",f),e.event.bind(t,"touchend",h)),i&&(window.PointerEvent?(e.event.bind(window,"pointerdown",a),e.event.bind(window,"pointerup",c),e.event.bind(t,"pointerdown",p),e.event.bind(t,"pointermove",f),e.event.bind(t,"pointerup",h)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",a),e.event.bind(window,"MSPointerUp",c),e.event.bind(t,"MSPointerDown",p),e.event.bind(t,"MSPointerMove",f),e.event.bind(t,"MSPointerUp",h)))}var r=t("../instances"),o=t("../update-geometry");e.exports=function(t,e,o){var i=r.get(t);n(t,i,e,o)}},{"../instances":18,"../update-geometry":19}],17:[function(t,e){"use strict";var n=t("../lib/class"),r=t("../lib/helper"),o=t("./instances"),i=t("./update-geometry"),l=t("./handler/click-rail"),s=t("./handler/drag-scrollbar"),a=t("./handler/keyboard"),c=t("./handler/mouse-wheel"),u=t("./handler/native-scroll"),d=t("./handler/selection"),p=t("./handler/touch");e.exports=function(t,e){e="object"==typeof e?e:{},n.add(t,"ps-container");var f=o.add(t);f.settings=r.extend(f.settings,e),l(t),s(t),c(t),u(t),d(t),(r.env.supportsTouch||r.env.supportsIePointer)&&p(t,r.env.supportsTouch,r.env.supportsIePointer),f.settings.useKeyboard&&a(t),i(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){var e=this;e.settings=d.clone(a),e.containerWidth=null,e.containerHeight=null,e.contentWidth=null,e.contentHeight=null,e.isRtl="rtl"===s.css(t,"direction"),e.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,e.event=new c,e.ownerDocument=t.ownerDocument||document,e.scrollbarXRail=s.appendTo(s.e("div","ps-scrollbar-x-rail"),t),e.scrollbarX=s.appendTo(s.e("div","ps-scrollbar-x"),e.scrollbarXRail),e.scrollbarXActive=null,e.scrollbarXWidth=null,e.scrollbarXLeft=null,e.scrollbarXBottom=d.toInt(s.css(e.scrollbarXRail,"bottom")),e.isScrollbarXUsingBottom=e.scrollbarXBottom===e.scrollbarXBottom,e.scrollbarXTop=e.isScrollbarXUsingBottom?null:d.toInt(s.css(e.scrollbarXRail,"top")),e.railBorderXWidth=d.toInt(s.css(e.scrollbarXRail,"borderLeftWidth"))+d.toInt(s.css(e.scrollbarXRail,"borderRightWidth")),s.css(e.scrollbarXRail,"display","block"),e.railXMarginWidth=d.toInt(s.css(e.scrollbarXRail,"marginLeft"))+d.toInt(s.css(e.scrollbarXRail,"marginRight")),s.css(e.scrollbarXRail,"display",""),e.railXWidth=null,e.railXRatio=null,e.scrollbarYRail=s.appendTo(s.e("div","ps-scrollbar-y-rail"),t),e.scrollbarY=s.appendTo(s.e("div","ps-scrollbar-y"),e.scrollbarYRail),e.scrollbarYActive=null,e.scrollbarYHeight=null,e.scrollbarYTop=null,e.scrollbarYRight=d.toInt(s.css(e.scrollbarYRail,"right")),e.isScrollbarYUsingRight=e.scrollbarYRight===e.scrollbarYRight,e.scrollbarYLeft=e.isScrollbarYUsingRight?null:d.toInt(s.css(e.scrollbarYRail,"left")),e.scrollbarYOuterWidth=e.isRtl?d.outerWidth(e.scrollbarY):null,e.railBorderYWidth=d.toInt(s.css(e.scrollbarYRail,"borderTopWidth"))+d.toInt(s.css(e.scrollbarYRail,"borderBottomWidth")),s.css(e.scrollbarYRail,"display","block"),e.railYMarginHeight=d.toInt(s.css(e.scrollbarYRail,"marginTop"))+d.toInt(s.css(e.scrollbarYRail,"marginBottom")),s.css(e.scrollbarYRail,"display",""),e.railYHeight=null,e.railYRatio=null}function o(t){return"undefined"==typeof t.dataset?t.getAttribute("data-ps-id"):t.dataset.psId}function i(t,e){"undefined"==typeof t.dataset?t.setAttribute("data-ps-id",e):t.dataset.psId=e}function l(t){"undefined"==typeof t.dataset?t.removeAttribute("data-ps-id"):delete t.dataset.psId}var s=t("../lib/dom"),a=t("./default-setting"),c=t("../lib/event-manager"),u=t("../lib/guid"),d=t("../lib/helper"),p={};n.add=function(t){var e=u();return i(t,e),p[e]=new r(t),p[e]},n.remove=function(t){delete p[o(t)],l(t)},n.get=function(t){return p[o(t)]}},{"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e){"use strict";function n(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function r(t,e){var n={width:e.railXWidth};n.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,i.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?r.right=e.isRtl?e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:e.scrollbarYRight-t.scrollLeft:r.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:e.scrollbarYLeft+t.scrollLeft,i.css(e.scrollbarYRail,r),i.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),i.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var o=t("../lib/class"),i=t("../lib/dom"),l=t("../lib/helper"),s=t("./instances");e.exports=function(t){var e=s.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||i.appendTo(e.scrollbarXRail,t),t.contains(e.scrollbarYRail)||i.appendTo(e.scrollbarYRail,t),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=n(e,l.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=l.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):(e.scrollbarXActive=!1,e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=0),!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=n(e,l.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=l.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):(e.scrollbarYActive=!1,e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0),e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),r(t,e),o[e.scrollbarXActive?"add":"remove"](t,"ps-active-x"),o[e.scrollbarYActive?"add":"remove"](t,"ps-active-y")}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18}],20:[function(t,e){"use strict";var n=t("../lib/dom"),r=t("../lib/helper"),o=t("./instances"),i=t("./update-geometry");e.exports=function(t){var e=o.get(t);e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,n.css(e.scrollbarXRail,"display","block"),n.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=r.toInt(n.css(e.scrollbarXRail,"marginLeft"))+r.toInt(n.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=r.toInt(n.css(e.scrollbarYRail,"marginTop"))+r.toInt(n.css(e.scrollbarYRail,"marginBottom")),n.css(e.scrollbarXRail,"display","none"),n.css(e.scrollbarYRail,"display","none"),i(t),n.css(e.scrollbarXRail,"display",""),n.css(e.scrollbarYRail,"display","")}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19}]},{},[1]);