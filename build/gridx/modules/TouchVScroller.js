//>>built
define("gridx/modules/TouchVScroller","dojo/_base/kernel dojo/_base/Deferred dojo/_base/sniff dojo/_base/declare dojo/query dojo/dom-class ./VScroller dojox/mobile/scrollable".split(" "),function(m,n,f,p,q,l,r,s){m.experimental("gridx/modules/TouchVScroller");return p(r,{scrollToRow:function(a,b){if(f("ios")||f("android")){var d=new n,e=q('[visualindex\x3d"'+a+'"]',this.grid.bodyNode)[0];e&&this._scrollable.scrollIntoView(e,b);d.callback();return d}return this.inherited(arguments)},_init:function(){if(f("ios")||
f("android")){var a=this,b=a.grid,d=b.view,e=b.header.innerNode,h=b.mainNode,k=b.bodyNode,g=e.firstChild,c=a._scrollable=new s;l.add(b.domNode,"gridxTouchVScroller");e.style.height=g.offsetHeight+"px";c.init({domNode:h,containerNode:k,scrollDir:"none"==b.hScrollerNode.style.display?"v":"vh",noResize:!0});a.aspect(c,"scrollTo",function(a){"number"==typeof a.x&&(g.style.webkitTransform=c.makeTranslateStr({x:a.x}))});a.aspect(c,"slideTo",function(a,b,d){c._runSlideAnimation({x:c.getPos().x},{x:a.x},
b,d,g,2)});a.aspect(c,"stopAnimation",function(){l.remove(g,"mblScrollableScrollTo2")});a.aspect(b.hScroller,"refresh",function(){c._h=k.scrollWidth>h.clientWidth;c._v=k.scrollHeight>h.clientHeight});a._onBodyChange=function(){a._update()};a._onForcedScroll=function(){};a.model.when({start:d.rootStart,count:d.rootCount},function(){b.body.renderRows(0,d.visualCount)})}else this.inherited(arguments)}})});
//@ sourceMappingURL=TouchVScroller.js.map