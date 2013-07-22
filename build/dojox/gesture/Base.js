//>>built
define("dojox/gesture/Base","dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom dojo/on dojo/touch dojo/has ../main".split(" "),function(p,q,g,e,r,h,l,s,t){p.experimental("dojox.gesture.Base");e.getObject("gesture",!0,t);return q(null,{defaultEvent:" ",subEvents:[],touchOnly:!1,_elements:null,constructor:function(a){e.mixin(this,a);this.init()},init:function(){this._elements=[];if(!s("touch")&&this.touchOnly)console.warn("Gestures:[",this.defaultEvent,"] is only supported on touch devices!");
else{var a=this.defaultEvent;this.call=this._handle(a);this._events=[a];g.forEach(this.subEvents,function(c){this[c]=this._handle(a+"."+c);this._events.push(a+"."+c)},this)}},_handle:function(a){var c=this;return function(b,d){var k=arguments;2<k.length&&(b=k[1],d=k[2]);if(!b||!b.nodeType&&!b.attachEvent&&!b.addEventListener)return h(b,a,d);var e=c._add(b,a,d);return{remove:function(){e.remove();c._remove(b,a)}}}},_add:function(a,c,b){var d=this._getGestureElement(a);if(!d){var d={target:a,data:{},
handles:{}},k=e.hitch(this,"_process",d,"press"),g=e.hitch(this,"_process",d,"move"),m=e.hitch(this,"_process",d,"release"),n=e.hitch(this,"_process",d,"cancel"),f=d.handles;this.touchOnly?(f.press=h(a,"touchstart",k),f.move=h(a,"touchmove",g),f.release=h(a,"touchend",m),f.cancel=h(a,"touchcancel",n)):(f.press=l.press(a,k),f.move=l.move(a,g),f.release=l.release(a,m),f.cancel=l.cancel(a,n));this._elements.push(d)}d.handles[c]=!d.handles[c]?1:++d.handles[c];return h(a,c,b)},_getGestureElement:function(a){for(var c=
0,b;c<this._elements.length;c++)if(b=this._elements[c],b.target===a)return b},_process:function(a,c,b){b._locking=b._locking||{};!b._locking[this.defaultEvent]&&!this.isLocked(b.currentTarget)&&(("INPUT"!=b.target.tagName||"radio"==b.target.type||"checkbox"==b.target.type)&&"TEXTAREA"!=b.target.tagName&&b.preventDefault(),b._locking[this.defaultEvent]=!0,this[c](a.data,b))},press:function(a,c){},move:function(a,c){},release:function(a,c){},cancel:function(a,c){},fire:function(a,c){a&&c&&(c.bubbles=
!0,c.cancelable=!0,h.emit(a,c.type,c))},_remove:function(a,c){var b=this._getGestureElement(a);if(b&&b.handles){b.handles[c]--;var d=b.handles;g.some(this._events,function(a){return 0<d[a]})||(this._cleanHandles(d),b=g.indexOf(this._elements,b),0<=b&&this._elements.splice(b,1))}},_cleanHandles:function(a){for(var c in a)a[c].remove&&a[c].remove(),delete a[c]},lock:function(a){this._lock=a},unLock:function(){this._lock=null},isLocked:function(a){return!this._lock||!a?!1:this._lock!==a&&r.isDescendant(a,
this._lock)},destroy:function(){g.forEach(this._elements,function(a){this._cleanHandles(a.handles)},this);this._elements=null}})});
//@ sourceMappingURL=Base.js.map