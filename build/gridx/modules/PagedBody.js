//>>built
define("gridx/modules/PagedBody","dojo/_base/declare dojo/_base/lang dojo/query dojo/_base/array dojo/dom-construct dojo/dom-class dojo/_base/Deferred dojo/_base/sniff dojo/keys dijit/a11y ./Body dojo/i18n!../nls/Body dojo/touch".split(" "),function(y,m,q,s,p,n,r,t,u,v,z,e,w){return y(z,{maxPageCount:0,preload:function(){var a=this,b=a.grid,c=b.view;c.paging=1;c.rootStart=0;c.rootCount=this.arg("pageSize",a.model._cache.pageSize||20);n.remove(a.domNode,"gridxBodyRowHoverEffect");a.connect(a.domNode,
"onscroll",function(d){b.hScrollerNode.scrollLeft=a.domNode.scrollLeft});a._moreNode=p.create("div",{"class":"gridxLoadMore"});a.arg("createMoreNode").call(a,a._moreNode);a._prevNode=p.create("div",{"class":"gridxLoadMore"});a.arg("createPrevNode").call(a,a._prevNode);a.connect(a._moreNode,"onmouseover",function(){q("\x3e .gridxRowOver",a.domNode).removeClass("gridxRowOver")});a.connect(a._prevNode,"onmouseover",function(){q("\x3e .gridxRowOver",a.domNode).removeClass("gridxRowOver")});a._initFocus()},
_initFocus:function(){var a=this.grid.focus,b=function(b,c,h){return b.parentNode?(a.stopEvent(c),(b=v._getTabNavigable(b)[0>h?"last":"first"])&&b.focus(),!!b):!1},c=function(b,a,c){return b.parentNode?(b=v._getTabNavigable(b),a?a.target==(0>c?b.first:b.last):!0):!0};this.inherited(arguments);a.registerArea({name:"prevBtn",priority:0.9999,focusNode:this._prevNode,scope:this,doFocus:m.partial(b,this._prevNode),doBlur:m.partial(c,this._prevNode)});a.registerArea({name:"moreBtn",priority:1.0001,focusNode:this._moreNode,
scope:this,doFocus:m.partial(b,this._moreNode),doBlur:m.partial(c,this._moreNode)})},createMoreNode:function(a){var b=this;a=b._moreBtn=p.create("button",{innerHTML:b.arg("loadMoreLabel",e.loadMore)},a,"last");b.connect(a,w.press,function(){b._load(1)});b.connect(a,"onkeydown",function(a){a.keyCode==u.ENTER&&b._load(1)})},createPrevNode:function(a){var b=this;a=b._prevBtn=p.create("button",{innerHTML:b.arg("loadPreviousLabel",e.loadPrevious)},b._prevNode,"last");b.connect(a,w.press,function(){b._load()});
b.connect(a,"onkeydown",function(a){a.keyCode==u.ENTER&&b._load()})},load:function(a){a=this.grid.view;this.aspect(this.model,"onDelete","_onDelete");a._err&&this._loadFail(a._err);this.loaded.callback()},refresh:function(a){var b=this,c=b.grid.loadingNode,d=new r;delete b._err;n.add(c,"gridxLoading");b.grid.view.updateVisualCount().then(function(){try{b.renderStart=0;var g=b.renderCount=b.grid.view.visualCount;if("number"==typeof a&&0<=a){var h=g-a,l=q('\x3e [visualindex\x3d"'+a+'"]',b.domNode)[0],
g=[],f=[],k=b._buildRows(a,h,g,f);for(k&&p.place(k,l||b._moreNode,"before");l&&l!==b._moreNode;){var A=l.nextSibling,e=parseInt(l.getAttribute("visualindex"),10),m=l.getAttribute("rowid");p.destroy(l);if(e>=a+h)b.onUnrender(m);l=A}s.forEach(f,b.onAfterRow,b);r.when(b._buildUncachedRows(g),function(){b.onRender(a,h);n.remove(c,"gridxLoading");d.callback()})}else b.renderRows(0,g,0,1),n.remove(c,"gridxLoading"),d.callback()}catch(x){b._loadFail(x),n.remove(c,"gridxLoading"),d.errback(x)}},function(a){b._loadFail(a);
n.remove(c,"gridxLoading");d.errback(a)});return d},renderRows:function(a,b,c){var d=this,g=d.grid,h=[],l=[],f=d.domNode,k=g.emptyNode;if(!d._err)if(0<b){k.innerHTML=d.arg("loadingInfo",e.loadingInfo);k.style.zIndex="";c=d._buildRows(a,b,h,l);d.renderStart=a;d.renderCount=b;f.scrollTop=0;if(t("ie"))for(;f.childNodes.length;)f.removeChild(f.firstChild);f.innerHTML=c;g.view.rootStart+g.view.rootCount<g.model.size()&&f.appendChild(d._moreNode);f.scrollLeft=g.hScrollerNode.scrollLeft;c?k.innerHTML="":
k.style.zIndex=1;d.onUnrender();s.forEach(l,d.onAfterRow,d);r.when(d._buildUncachedRows(h),function(){d.onRender(a,b)})}else if(!{top:1,bottom:1}[c]){f.scrollTop=0;if(t("ie"))for(;f.childNodes.length;)f.removeChild(f.firstChild);f.innerHTML="";k.innerHTML=d.arg("emptyInfo",e.emptyInfo);k.style.zIndex=1;d.onUnrender();d.onEmpty();d.model.free()}},onRender:function(){var a=this.domNode;9>t("ie")&&a.childNodes.length&&(q("\x3e gridxLastRow",a).removeClass("gridxLastRow"),a.lastChild!==this._moreNode&&
n.add(a.lastChild,"gridxLastRow"))},_load:function(a){var b=this,c=b.grid,d=b.model,g=c.view,h=b.arg("pageSize"),l=a?b._moreNode:b._prevNode,f=g.rootStart,k=g.rootCount,e=a?f:f<h?0:f-h,m=a?k+h:f+k-e,r=function(c,d){b._busy(a);b._checkSize(!a,function(){q(".gridxBodyFirstRow").removeClass("gridxBodyFirstRow");var a=b._prevNode.nextSibling;a&&a!=b._moreNode&&n.add(a,"gridxBodyFirstRow");b.onRender(c,d)})};b._busy(a,1);d.when({start:a?f+k:e,count:a?h:f-e},function(){var f=d.size();a&&e+m>f&&(m=f-e);
g.updateRootRange(e,m).then(function(){var h=a?b.renderCount:0,e=g.visualCount-b.renderCount;b.renderStart=0;b.renderCount=g.visualCount;if(e){for(var k=[],m=0;m<e;++m){var n=g.getRowInfo({visualIndex:h+m});d.isId(n.id)||k.push({parentId:n.parentId,start:n.rowIndex,count:1})}d.when(k,function(){var d=[],k=c.bodyNode.scrollHeight;str=b._buildRows(h,e,[],d);p.place(str,l,a?"before":"after");a||(c.bodyNode.scrollTop+=c.bodyNode.scrollHeight-k);(a?g.rootStart+g.rootCount>=f:0===g.rootStart)&&b.domNode.removeChild(l);
s.forEach(d,b.onAfterRow,b);r(h,e)})}else b.domNode.removeChild(l),a||q(".gridxBodyFirstRow").removeClass("gridxBodyFirstRow"),r(h,e)})})},_checkSize:function(a,b){var c=this,d=c.grid.view,g=c.arg("maxPageCount"),h=g*c.arg("pageSize"),e=a?c._moreNode:c._prevNode;0<g&&d.rootCount>h?d.updateRootRange(a?d.rootStart:d.rootStart+d.rootCount-h,h).then(function(){e.parentNode&&e.parentNode.removeChild(e);c.unrenderRows(c.renderCount-d.visualCount,a?"post":"");c.renderStart=0;c.renderCount=d.visualCount;
q(".gridxRow",c.domNode).forEach(function(a,b){a.setAttribute("visualindex",b)});p.place(e,c.domNode,a?"last":"first");a||c.grid.vScroller.scrollToRow(d.visualCount-1);b()}):b()},_busy:function(a,b){var c=a?this._moreBtn:this._prevBtn,d=a?"More":"Previous";c.innerHTML=b?'\x3cspan class\x3d"gridxLoadingMore"\x3e\x3c/span\x3e'+this.arg("load"+d+"LoadingLabel",e["load"+d+"Loading"]):this.arg("load"+d+"Label",e["load"+d]);c.disabled=!!b},_onDelete:function(a){var b=this.grid.view;if(this.autoUpdate){var c=
this.getRowNode({rowId:a});if(c){var d=c.getAttribute("parentid"),c=parseInt(c.getAttribute("rowindex"),10);""===d&&(c>=b.rootStart&&c<b.rootStart+b.rootCount)&&b.updateRootRange(b.rootStart,b.rootCount-1)}}this.inherited(arguments)}})});
//@ sourceMappingURL=PagedBody.js.map