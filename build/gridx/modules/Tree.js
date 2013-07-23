//>>built
define("gridx/modules/Tree","dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/dom-class dojo/dom-geometry dojo/_base/lang dojo/_base/Deferred dojo/DeferredList dojo/query dojo/keys ../core/_Module".split(" "),function(t,u,n,p,v,q,k,r,g,m,w){function s(a){return(a=a.firstChild)&&a.className&&p.contains(a,"gridxTreeExpandoCell")&&!p.contains(a,"gridxTreeExpandoLoading")}t.experimental("gridx/modules/Tree");return u(w,{name:"tree",forced:["view"],preload:function(){var a=this,b=a.grid;b.domNode.setAttribute("role",
"treegrid");a.aspect(b.body,"collectCellWrapper","_createCellWrapper");a.aspect(b.body,"onAfterRow","_onAfterRow");a.aspect(b.body,"onCheckCustomRow",function(b,d){!a.nested&&a.mergedParentRow&&(d[b.id]=b.canExpand())});a.aspect(b.body,"onBuildCustomRow",function(a,b){b[a.id]=a.id});a.aspect(b,"onCellClick","_onCellClick");a.aspect(b,"onRowClick",function(b){!a.nested&&a.mergedParentRow&&a.canExpand(b.rowId)&&(a.isExpanded(b.rowId)?a.collapse(b.rowId):a.expand(b.rowId))});a._initExpandLevel();a._initFocus()},
rowMixin:{canExpand:function(){return this.grid.tree.canExpand(this.id)},isExpanded:function(){return this.grid.tree.isExpanded(this.id)},expand:function(){return this.grid.tree.expand(this.id)},collapse:function(){return this.grid.tree.collapse(this.id)},expandRecursive:function(){return this.grid.tree.expandRecursive(this.id)},collapseRecursive:function(){return this.grid.tree.collapseRecursive(this.id)}},nested:!1,expandoWidth:16,expandoPadding:18,expandLevel:1/0,clearOnSetStore:!0,mergedParentRow:!1,
onExpand:function(a){},onCollapse:function(a){},canExpand:function(a){var b=this.model,c=b.treePath(a).length,d=this.arg("expandLevel");return b.hasChildren(a)&&(!(0<d)||c<=d)},isExpanded:function(a){return!!this.grid.view._openInfo[a]},isPaddingCell:function(a,b){var c=this.model.treePath(a).length,d=this.grid._columnsById[b];if(this.arg("nested")&&1<c&&!1!==d.padding)for(var f=0;f<this.grid._columns.length;++f){var e=this.grid._columns[f];if(e.expandLevel==c)return d.index<e.index}return!1},expand:function(a,
b){var c=new k,d=this;a&&!d.isExpanded(a)&&d.canExpand(a)?(d._beginLoading(a),d.grid.view.logicExpand(a).then(function(){k.when(d._updateBody(a,b,!0),function(){d._endLoading(a);c.callback();d.onExpand(a)})})):c.callback();return c},collapse:function(a,b){var c=new k,d=this;a&&d.isExpanded(a)?(d.grid.view.logicCollapse(a),k.when(d._updateBody(a,b),function(){c.callback();d.onCollapse(a)})):c.callback();return c},expandRecursive:function(a,b){var c=this,d=c.model,f=new k;c._beginLoading(a);c.expand(a,
1).then(function(){var e,h=[],l=d.size(a);d.when({start:0,parentId:a},function(){for(e=0;e<l;++e){var b=d.indexToId(e,a);h.push(c.expandRecursive(b,1))}}).then(function(){(new r(h)).then(function(){k.when(c._updateBody(a,b),function(){c._endLoading(a);f.callback()})})})});return f},collapseRecursive:function(a,b){var c=new k,d=q.hitch(c,c.callback),f=q.hitch(c,c.errback),e=this,h=e.grid.view._openInfo[a||""],l,g=[];if(h){for(l=h.openned.length-1;0<=l;--l)g.push(e.collapseRecursive(h.openned[l],1));
(new r(g)).then(function(){a?e.collapse(a,b).then(d,f):k.when(e._updateBody("",b),d,f)})}else d();return c},_initExpandLevel:function(){var a=n.filter(this.grid._columns,function(a){return!a.ignore});n.some(a,function(a){return a.expandLevel})||(this.arg("nested")?n.forEach(a,function(a,c){a.expandLevel=c+1}):a[0].expandLevel=1)},_createCellWrapper:function(a,b,c){var d=this.grid._columnsById[c];if(!d||d.expandLevel){c=this.arg("nested");var f=this.model.treePath(b).length,e=this.arg("expandLevel");
if((!c||d&&d.expandLevel==f)&&(!(0<e)||f<=e+1)){var h=this.model.hasChildren(b),l=this.isExpanded(b),g=0,k=this.arg("expandoWidth");b=this.arg("expandoPadding");var m=this.grid.isLeftToRight();c||(g=(f-1)*b);if(f==e+1){if(c)return;h=!1}a.push({priority:0,wrap:function(a){return["\x3cdiv class\x3d'gridxTreeExpandoCell ",l?"gridxTreeExpandoCellOpen":"","' style\x3d'padding-",m?"left":"right",": ",g+k,"px;'\x3e\x3cdiv class\x3d'gridxTreeExpandoIcon ",h?"":"gridxTreeExpandoIconNoChildren","' style\x3d'margin-",
m?"left":"right",": ",g,"px;'\x3e\x3cdiv class\x3d'gridxTreeExpandoInner'\x3e",l?"-":"+","\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'gridxTreeExpandoContent gridxCellContent'\x3e",a,"\x3c/div\x3e\x3c/div\x3e"].join("")}})}}},_onCellClick:function(a){if(s(a.cellNode)){var b=v.position(g(".gridxTreeExpandoIcon",a.cellNode)[0]);a.clientX>=b.x&&(a.clientX<=b.x+b.w&&a.clientY>=b.y&&a.clientY<=b.y+b.h)&&(this.isExpanded(a.rowId)?this.collapse(a.rowId):this.expand(a.rowId))}},_beginLoading:function(a){if(a=
this.grid.body.getRowNode({rowId:a}))g(".gridxTreeExpandoCell",a).addClass("gridxTreeExpandoLoading"),g(".gridxTreeExpandoIcon",a).forEach(function(a){a.firstChild.innerHTML="o"})},_endLoading:function(a){var b=this.grid.body.getRowNode({rowId:a}),c=this.isExpanded(a);b&&(g(".gridxTreeExpandoCell",b).removeClass("gridxTreeExpandoLoading").toggleClass("gridxTreeExpandoCellOpen",c).closest(".gridxCell").attr("aria-expanded",String(c)),g(".gridxTreeExpandoIcon",b).forEach(function(a){a.firstChild.innerHTML=
c?"-":"+"}),b.setAttribute("aria-expanded",String(c)))},_updateBody:function(a,b,c){var d=this.grid.view,f=this.grid.body;return!b?(a=c&&a?d.getRowInfo({rowIndex:this.model.idToIndex(a),parentId:this.model.parentId(a)}).visualIndex:-1,f.refresh(c&&a+1)):null},_onAfterRow:function(a){if(this.model.hasChildren(a.id)){a=a.node();var b=this.isExpanded();a.setAttribute("aria-expanded",b);g(".gridxTreeExpandoCell",a).closest(".gridxCell").attr("aria-expanded",String(b))}},_initFocus:function(){this.connect(this.grid,
"onCellKeyPress","_onKey")},_onKey:function(a){if(a.keyCode==m.ESCAPE){var b=this.model,c=b.treePath(a.rowId),d=c.pop();a=c.length;var f=this.grid;if(d){var e,h,g;for(e=f._columns.length-1;0<=e&&!(h=f._columns[e],h.expandLevel&&(!this.arg("nested")||h.expandLevel==a));--e);b.when({id:d},function(){g=f.view.getRowInfo({parentId:c.pop(),rowIndex:b.idToIndex(d)}).visualIndex}).then(function(){f.vScroller.scrollToRow(g).then(function(){f.body._focusCell(null,g,h.index)})})}}else a.ctrlKey&&s(a.cellNode)&&
(e=this.grid.isLeftToRight(),a.keyCode==(e?m.LEFT_ARROW:m.RIGHT_ARROW)&&this.isExpanded(a.rowId)?this.collapse(a.rowId):a.keyCode==(e?m.RIGHT_ARROW:m.LEFT_ARROW)&&!this.isExpanded(a.rowId)&&this.expand(a.rowId))}})});
//@ sourceMappingURL=Tree.js.map