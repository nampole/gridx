//>>built
define("gridx/support/LinkSizer","dojo/_base/declare dojo/query dojo/_base/event dojo/string dojo/dom-class dojo/keys ./_LinkPageBase".split(" "),function(m,d,l,n,g,b,p){var k=g.contains;return m(p,{templateString:'\x3cdiv class\x3d"gridxLinkSizer" role\x3d"toolbar" aria-label\x3d"switch page size" data-dojo-attach-event\x3d"onclick: _changePageSize, onmouseover: _onHover, onmouseout: _onHover"\x3e\x3c/div\x3e',postMixInProperties:function(){this.inherited(arguments);this.connect(this.grid.pagination,
"onChangePageSize","_onChange")},startup:function(){this.inherited(arguments);this._onChange(this.grid.pagination.pageSize())},sizeSeparator:"|",sizes:[10,25,50,100,0],refresh:function(){for(var a=[],q=this._tabIndex,e=this.sizeSeparator,c=this.grid.pagination.pageSize(),b=n.substitute,d=0,g=this.sizes.length;d<g;++d){var f=this.sizes[d],h=!1;0<f||(f=0,h=!0);a.push('\x3cspan class\x3d"gridxPagerSizeSwitchBtn ',c===f?"gridxPagerSizeSwitchBtnActive":"",'" pagesize\x3d"',f,'" title\x3d"',h?this.pageSizeAllTitle:
b(this.pageSizeTitle,[f]),'" aria-label\x3d"',h?this.pageSizeTitle:b(this.pageSizeTitle,[f]),'" tabindex\x3d"',q,'"\x3e',h?this.pageSizeAll:b(this.pageSize,[f]),"\x3c/span\x3e",'\x3cspan class\x3d"gridxPagerSizeSwitchSeparator"\x3e'+e+"\x3c/span\x3e")}a.pop();this.domNode.innerHTML=a.join("");this.grid.vLayout.reLayout()},_onHover:function(a){this._toggleHover(a,"gridxPagerSizeSwitchBtn","gridxLinkSizer","gridxPagerSizeSwitchBtnHover")},_onChange:function(a,b){var e=this.domNode,c=d('[pagesize\x3d"'+
a+'"]',e)[0];c&&g.add(c,"gridxPagerSizeSwitchBtnActive");(c=d('[pagesize\x3d"'+b+'"]',e)[0])&&g.remove(c,"gridxPagerSizeSwitchBtnActive")},_changePageSize:function(a){if(a=this._findNodeByEvent(a,"gridxPagerSizeSwitchBtn","gridxLinkSizer"))a=this._focusPageSize=a.getAttribute("pagesize"),this.grid.pagination.setPageSize(parseInt(a,10))},_onKey:function(a){var d=this.grid.pagination,e=this.grid.isLeftToRight()?b.LEFT_ARROW:b.RIGHT_ARROW;a.keyCode==b.LEFT_ARROW||a.keyCode==b.RIGHT_ARROW?(l.stop(a),
this._focusNextBtn(!0,a.keyCode==e)):a.keyCode==b.ENTER&&(k(a.target,"gridxPagerSizeSwitchBtn")&&!k(a.target,"gridxPagerSizeSwitchBtnActive"))&&(l.stop(a),d.setPageSize(parseInt(this._focusPageSize,10)))},_focusNextBtn:function(a,b){var e=this.domNode,c=d('[pagesize\x3d"'+this._focusPageSize+'"]',e)[0];if(c=this._focus(d(".gridxPagerSizeSwitchBtn",e),c,a,b,function(a){return!k(a,"gridxPagerSizeSwitchBtnActive")}))this._focusPageSize=c.getAttribute("pagesize");return c}})});
//@ sourceMappingURL=LinkSizer.js.map