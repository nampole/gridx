//>>built
define("gridx/modules/ColumnWidth","dojo/_base/declare dojo/_base/array dojo/_base/Deferred dojo/query dojo/_base/sniff dojo/dom-geometry dojo/dom-class dojo/dom-style dojo/keys ../core/_Module".split(" "),function(z,s,I,t,A,u,B,C,J,H){return z(H,{name:"columnWidth",forced:["hLayout"],constructor:function(){this._init()},load:function(){var b=this.grid;this.aspect(b.hLayout,"onUpdateWidth","_onUpdateWidth");this.aspect(b,"setColumns","_onSetColumns");this._adaptWidth();this.loaded.callback()},"default":60,
autoResize:!1,onUpdate:function(){},_init:function(){var b=this.grid,k=this.arg("autoResize"),c=this.arg("default")+"px";s.forEach(b._columns,function(a){a.hasOwnProperty("declaredWidth")||(a.declaredWidth=a.width=a.width||"auto");b.autoWidth&&"auto"==a.declaredWidth?a.width=c:k&&!/%$/.test(a.declaredWidth)&&(a.width="auto")});k&&B.add(b.domNode,"gridxPercentColumnWidth")},_onUpdateWidth:function(){var b=this.grid;if(b.autoWidth)this._adaptWidth();else{var k="none"==b.hScrollerNode.style.display,
c=this.autoResize;this._adaptWidth(!k,1);!c&&k&&t(".gridxCell",b.bodyNode).forEach(function(a){var d=b._columnsById[a.getAttribute("colId")],g=d.declaredWidth;if(c||!g||"auto"==g||/%$/.test(g))a=a.style,d=d.width,a.width=d,a.minWidth=d,a.maxWidth=d});this.onUpdate()}},_adaptWidth:function(b,k){var c=this.grid,a=c.domNode,d=c.header,g=c.isLeftToRight(),F=g?"marginLeft":"marginRight",g=g?"marginRight":"marginLeft",v=c.hLayout.lead,p=c.hLayout.tail,D=d.innerNode,z=c.bodyNode.style,E=D.style,q=u.getBorderExtents(d.domNode).w,
w=q,G=0,h=(a.clientWidth||C.get(a,"width"))-v-p-q,f=(q=t(".gridxCell",D)[0])?u.getMarginBox(q).w-u.getContentBox(q).w:0,x=c.header.arg("groups"),B=!a.offsetHeight;this._padBorder=f;0===w?w=1:G=2;E[F]=v+"px";E[g]=(p>w?p-w:0)+"px";c.mainNode.style[F]=v+"px";c.mainNode.style[g]=p+"px";h=0>h?0:h;if(b)this.onUpdate();else{if(c.autoWidth){var y=0;t(".gridxCell",D).forEach(function(e){var a=C.get(e,"width");if(x||!A("safari")||!B)a+=f;y+=a;var b=c._columnsById[e.getAttribute("colid")];if("auto"==b.width||
/%$/.test(b.width))e.style.width=b.width=a+"px",e.style.minWidth=b.width,e.style.maxWidth=b.width});z.width=y+"px";a.style.width=v+p+y+G+"px"}else if(this.arg("autoResize"))E.borderWidth="none"==c.vScrollerNode.style.display?0:"";else{var l=[],a=c._columns,m=0;!x&&A("safari")&&(f=0);s.forEach(a,function(e){if("auto"==e.declaredWidth)l.push(e);else if(/%$/.test(e.declaredWidth)){var b=parseInt(h*parseFloat(e.declaredWidth,10)/100-f,10);0>b&&(b=0);var a=d.getHeaderNode(e.id);a.style.width=e.width=b+
"px";a.style.minWidth=e.width;a.style.maxWidth=e.width}});s.forEach(a,function(b){if("auto"!=b.declaredWidth){var a=d.getHeaderNode(b.id),a=!x&&A("safari")?parseFloat(a.style.width,10):a.offsetWidth||C.get(a,"width")+f;/%$/.test(b.declaredWidth)&&(b.width=(a>f?a-f:0)+"px");m+=a}});if(l.length){var n=h>m?(h-m)/l.length-f:this.arg("default"),r=parseInt(n,10);h>m&&(r=h-m-(r+f)*(l.length-1)-f);n=parseInt(n,10);0>n&&(n=0);0>r&&(r=0);s.forEach(l,function(a,b){var c=d.getHeaderNode(a.id);c.style.width=a.width=
(b<l.length-1?n:r)+"px";c.style.minWidth=a.width;c.style.maxWidth=a.width})}}x&&t(".gridxCell",d.innerNode).forEach(function(a){var b=c._columnsById[a.getAttribute("colid")];if(/px$/.test(b.width)){var d=a.clientWidth-u.getPadExtents(a).w;parseInt(b.width,10)!=d&&(b.width=d+="px",a.style.width=d,a.style.minWidth=d,a.style.maxWidth=d)}});c.hScroller.scroll(0);d._onHScroll(0);c.vLayout.reLayout();if(!k)this.onUpdate()}},_onSetColumns:function(){var b=this.grid;this._init();b.header.refresh();this._adaptWidth();
b.cellWidget&&(b.cellWidget._init(),b.edit&&b.edit._init());b.tree&&b.tree._initExpandLevel();b.body.refresh()}})});
//@ sourceMappingURL=ColumnWidth.js.map