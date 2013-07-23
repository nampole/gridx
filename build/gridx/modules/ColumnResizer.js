//>>built
define("gridx/modules/ColumnResizer","dojo/_base/declare dojo/_base/window dojo/_base/event dojo/dom dojo/dom-style dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/keys dojo/query ../core/_Module".split(" "),function(t,e,u,r,s,n,v,g,h,k,w){return t(w,{name:"columnResizer",load:function(){var a=this.grid;this.batchConnect([a.header.domNode,"onmousemove","_mousemove"],[a,"onHeaderMouseOut","_mouseout"],[a,"onHeaderMouseDown","_mousedown",this,this.name],[a,"onHeaderKeyDown","_keydown"],[e.doc,
"onmousemove","_updateResizer"],[e.doc,"onmouseup","_mouseup"]);this.loaded.callback()},columnMixin:{setWidth:function(a){this.grid.columnResizer.setWidth(this.id,a)}},minWidth:20,detectWidth:5,step:2,setWidth:function(a,b){var d=this.grid,c,l=d._columns;c=d._columnsById[a];var e=this.arg("minWidth"),f;b=parseInt(b,10);b<e&&(b=e);c.width=b+"px";for(c=0;c<l.length;++c)l[c].declaredWidth=l[c].width;k('[colid\x3d"'+d._escapeId(a)+'"]',d.domNode).forEach(function(a){f||(f=s.get(a,"width"));a=a.style;
a.width=b+"px";a.minWidth=b+"px";a.maxWidth=b+"px"});d.body.onRender();d.vLayout.reLayout();this.onResize(a,b,f)},onResize:function(){},_mousemove:function(a){var b=this;if(!b._resizing&&!b._ismousedown){var d=b.arg("detectWidth"),c=b.grid,l=c.isLeftToRight(),h=e.body(),f=c._eventFlags;k(".gridxCell",c.header.innerNode).some(function(e){var p=g.position(e),m=l?p.x+p.w:p.x;e.getAttribute("colid");if(m-d<=a.clientX&&m+d>=a.clientX){var q=(m=k(a._target||a.target).closest("td",c.header.innerNode)[0])&&
g.position(m);if(m&&(a.clientX<=q.x+d||a.clientX>=q.x+q.w-d))return n.add(h,"gridxColumnResizing"),b._targetCell=e,b._cellPos=p,f.onHeaderMouseDown=b.name,b._readyToResize=1}})||(f.onHeaderMouseDown=void 0,n.remove(h,"gridxColumnResizing"));f.onHeaderCellMouseDown=f.onHeaderMouseDown}},_mouseout:function(a){if(!this._resizing){var b=g.position(this.grid.header.domNode);if(a.clientY<=b.y||a.clientY>=b.y+b.h||a.clientX<=b.x||a.clientX>=b.x+b.w)this._readyToResize=0,n.remove(e.body(),"gridxColumnResizing")}},
_mousedown:function(a){if(this._readyToResize){this._resizing=1;var b=this.grid,d=k(".gridxCell",b.header.innerNode)[0];r.setSelectable(b.domNode,!1);e.doc.onselectstart=function(){return!1};this._containerPos=g.position(b.domNode);this._headerPos=g.position(b.header.domNode);this._padBorder=g.getMarginBox(d).w-g.getContentBox(d).w;this._initResizer();this._updateResizer(a);this._moving=0}else this._ismousedown=1},_initResizer:function(){var a=this.grid,b=a.hScroller,d=b&&b.container.offsetHeight?
b.container:a.bodyNode,b=a.header.domNode.offsetTop,d=d.parentNode.offsetTop+d.offsetHeight-a.header.domNode.offsetTop,c=this._resizer;c||(c=this._resizer=v.create("div",{className:"gridxColumnResizer"},a.domNode,"last"),this.connect(c,"mouseup","_mouseup"));a=c.style;a.top=b+"px";a.height=d+"px";a.display="block"},_updateResizer:function(a){if(this._resizing){var b=this.grid.isLeftToRight(),d=this.arg("minWidth")+this._padBorder,c=this._cellPos;a=a.clientX;d=b?c.x+d:c.x+c.w-d;if(b?a<d:a>d)a=d;this._width=
(b?a-c.x:c.x+c.w-a)-this._padBorder;this._resizer.style.left=a-this._containerPos.x-2+"px";this._moving=1}},_mouseup:function(a){this._ismousedown=0;if(this._resizing){this._resizing=this._readyToResize=0;n.remove(e.body(),"gridxColumnResizing");r.setSelectable(this.grid.domNode,!0);e.doc.onselectstart=null;this._moving&&(this._moving=0,this.setWidth(this._targetCell.getAttribute("colid"),this._width+"px"));this._resizer.style.display="none";var b=a.clientX,d=a.clientY,c=this._headerPos;b>=c.x&&(b<=
c.x+c.w&&d>=c.y&&d<=c.y+c.h)&&(a._target=this._targetCell,this._mousemove(a))}},_keydown:function(a){if((a.keyCode==h.LEFT_ARROW||a.keyCode==h.RIGHT_ARROW)&&a.ctrlKey&&a.shiftKey){var b=this.grid,d=a.columnId,c=k('[colid\x3d"'+b._escapeId(d)+'"].gridxCell',b.header.innerNode)[0],e=this.arg("step"),e=a.keyCode==h.LEFT_ARROW^!!b.isLeftToRight()?e:-e;this.setWidth(d,s.get(c,"width")+e);u.stop(a)}}})});
//@ sourceMappingURL=ColumnResizer.js.map