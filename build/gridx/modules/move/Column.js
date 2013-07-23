//>>built
define("gridx/modules/move/Column",["dojo/_base/declare","dojo/query","dojo/_base/array","dojo/keys","../../core/_Module"],function(n,k,m,h,p){return n(p,{name:"moveColumn",getAPIPath:function(){return{move:{column:this}}},preload:function(){this.aspect(this.grid,"onHeaderCellKeyDown","_onKeyDown")},columnMixin:{moveTo:function(b){this.grid.move.column.moveRange(this.index(),1,b);return this}},moveSelected:!0,_isInConstraints:function(b,e){var c=this.arg("constraints",{}),a;for(a in c)if(b>=a&&b<=
c[a]&&(e<a||e>c[a]+1)||b>=a&&b<=c[a]&&(e<a||e>c[a]+1))return 0;return 1},move:function(b,e){"number"===typeof b&&(b=[b]);var c=[],a,f,d=this.grid._columns,g,l=[];a=0;for(f=b.length;a<f;++a)this._isInConstraints(b[a],e)&&(c[b[a]]=!0);for(a=c.length-1;0<=a;--a)c[a]&&(l.unshift(d[a]),d.splice(a,1));a=0;for(f=d.length;a<f;++a)if(d[a].index>=e){g=a;break}void 0===g&&(g=d.length);this._moveComplete(l,g)},moveRange:function(b,e,c){if(c<b||c>b+e){for(var a=[],f=0;f<e;++f)this._isInConstraints(b+f,c)&&a.push(b+
f);this.move(a,c)}},onMoved:function(){},_moveComplete:function(b,e){var c=this.grid,a={},f=c._columns,d,g={},l=e<f.length?f[e].id:null,h=function(a){var b=k("\x3e .gridxCell",a).filter(function(a){return g[a.getAttribute("colid")]});if(null===l)b.place(a);else{var d=k('\x3e [colid\x3d"'+c._escapeId(l)+'"]',a)[0];d?b.place(d,"before"):0<e&&(a=k('\x3e [colid\x3d"'+c._escapeId(f[e-1].id)+'"]',a)[0])&&b.place(a,"after")}};for(d=b.length-1;0<=d;--d)a[b[d].index]=e+d,g[b[d].id]=1;[].splice.apply(f,[e,
0].concat(b));for(d=f.length-1;0<=d;--d)f[d].index=d;k(".gridxHeaderRowInner \x3e table \x3e tbody \x3e tr",c.headerNode).forEach(h);k(".gridxRow \x3e table \x3e tbody \x3e tr",c.bodyNode).forEach(h);this.onMoved(a)},_onKeyDown:function(b){var e=this.grid,c=this.arg("moveSelected")&&e.select&&e.select.column,a=e.isLeftToRight(),f=a?h.LEFT_ARROW:h.RIGHT_ARROW,a=a?h.RIGHT_ARROW:h.LEFT_ARROW;if(b.ctrlKey&&!b.shiftKey&&!b.altKey&&(b.keyCode==f||b.keyCode==a)){var d=b.columnIndex,c=c&&c.isSelected(b.columnId)?
m.map(c.getSelected(),function(a){return e._columnsById[a].index}):[b.columnIndex],g=e.header.getHeaderNode(b.columnId);if(b.keyCode==f){for(;0<=m.indexOf(c,d);)d--;0<=d&&(this.move(c,d),e.header._focusNode(g))}else if(b.keyCode==a){for(;0<=m.indexOf(c,d);)d++;d<e._columns.length&&(this.move(c,d+1),e.header._focusNode(g))}}}})});
//@ sourceMappingURL=Column.js.map