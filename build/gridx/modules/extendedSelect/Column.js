//>>built
define("gridx/modules/extendedSelect/Column","dojo/_base/declare dojo/_base/array dojo/_base/event dojo/query dojo/_base/lang dojo/_base/sniff dojo/dom-class dojo/mouse dojo/keys ../../core/_Module ./_Base".split(" "),function(p,f,q,l,r,s,k,t,g,v,u){return p(u,{name:"selectColumn",columnMixin:{select:function(){this.grid.select.column.selectById(this.id);return this},deselect:function(){this.grid.select.column.deselectById(this.id);return this},isSelected:function(){return!!this.grid._columnsById[this.id]._selected}},
getSelected:function(){return f.map(f.filter(this.grid._columns,function(a){return a._selected}),function(a){return a.id})},clear:function(a){l(".gridxColumnSelected",this.grid.domNode).forEach(function(a){k.remove(a,"gridxColumnSelected");a.removeAttribute("aria-selected")});f.forEach(this.grid._columns,function(a){a._selected=0});this._clear();a||this._onSelectionChange()},isSelected:function(){var a=this.grid._columnsById;return f.every(arguments,function(b){return(b=a[b])&&b._selected})},_type:"column",
_markById:function(a,b){f.forEach(a,function(a){if(a=this.grid._columnsById[a])a._selected=b,this._doHighlight({column:a.index},b)},this)},_markByIndex:function(a,b){var c,e,f=this.grid._columns;for(c=0;c<a.length;++c){var d=a[c];if(r.isArrayLike(d)){var h=d[0],d=d[1];if(0<=h&&Infinity>h)for(d>=h&&Infinity>d||(d=f.length-1);h<d+1;++h)if(e=f[h])e._selected=b,this._doHighlight({column:e.index},b)}else if(0<=d&&Infinity>d&&(e=f[d]))e._selected=b,this._doHighlight({column:d},b)}},_init:function(){var a=
this,b=a.grid;a.batchConnect([b,"onHeaderCellMouseDown",function(c){t.isLeft(c)&&!k.contains(c.target,"gridxArrowButtonNode")&&(a._start({column:c.columnIndex},b._isCopyEvent(c),c.shiftKey),!c.shiftKey&&!a.arg("canSwept")&&a._end())}],[b,"onHeaderCellMouseOver",function(b){a._highlight({column:b.columnIndex})}],[b,"onCellMouseOver",function(b){a._highlight({column:b.columnIndex})}],[b,4>s("ff")?"onHeaderCellKeyUp":"onHeaderCellKeyDown",function(c){if((c.keyCode==g.SPACE||c.keyCode==g.ENTER)&&!k.contains(c.target,
"gridxArrowButtonNode"))q.stop(c),a._start({column:c.columnIndex},b._isCopyEvent(c),c.shiftKey),a._end()}],[b.header,"onMoveToHeaderCell","_onMoveToHeaderCell"])},_onRender:function(a,b){var c,e,g=a+b,d=this.grid,h=d.bodyNode,m,n=f.filter(d._columns,function(a){return a._selected});for(c=n.length-1;0<=c;--c)for(e=a;e<g;++e)m=l(['[visualindex\x3d"',e,'"] [colid\x3d"',d._escapeId(n[c].id),'"]'].join(""),h)[0],k.add(m,"gridxColumnSelected"),m.setAttribute("aria-selected",!0)},_onMoveToHeaderCell:function(a,
b){if(b.shiftKey&&(b.keyCode==g.LEFT_ARROW||b.keyCode==g.RIGHT_ARROW))this._start({column:this.grid._columnsById[a].index},this.grid._isCopyEvent(b),1),this._end()},_isSelected:function(a){a=this.grid._columns[a.column];var b=a.id;return this._isRange?0<=f.indexOf(this._refSelectedIds,b):a._selected},_beginAutoScroll:function(){var a=this.grid.autoScroll;this._autoScrollV=a.vertical;a.vertical=!1},_endAutoScroll:function(){this.grid.autoScroll.vertical=this._autoScrollV},_doHighlight:function(a,b){l('[colid\x3d"'+
this.grid._escapeId(this.grid._columns[a.column].id)+'"].gridxCell',this.grid.domNode).forEach(function(a){k.toggle(a,"gridxColumnSelected",b)})},_focus:function(a){var b=this.grid;b.focus&&b.header._focusNode(l('[colid\x3d"'+b._escapeId(b._columns[a.column].id)+'"].gridxCell',b.header.domNode)[0])},_addToSelected:function(a,b,c){var e=this.grid,g;this._isRange||(this._refSelectedIds=this.getSelected());if(this._isRange&&this._inRange(b.column,a.column,this._lastEndItem.column)){a=Math.min(b.column,
this._lastEndItem.column);for(b=Math.max(b.column,this._lastEndItem.column);a<=b;++a)e._columns[a]._selected=0<=f.indexOf(this._refSelectedIds,e._columns[a].id)}else{g=Math.min(a.column,b.column);b=Math.max(a.column,b.column);for(a=g;a<=b;++a)e._columns[a]._selected=c}}})});
//@ sourceMappingURL=Column.js.map