//>>built
require({cache:{"url:dijit/templates/Menu.html":'\x3ctable class\x3d"dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable" role\x3d"menu" tabIndex\x3d"${tabIndex}"\r\n\t   cellspacing\x3d"0"\x3e\r\n\t\x3ctbody class\x3d"dijitReset" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/tbody\x3e\r\n\x3c/table\x3e\r\n'}});
define("dijit/DropDownMenu",["dojo/_base/declare","dojo/keys","dojo/text!./templates/Menu.html","./_OnDijitClickMixin","./_MenuBase"],function(b,f,c,d,e){return b("dijit.DropDownMenu",[e,d],{templateString:c,baseClass:"dijitMenu",_onUpArrow:function(){this.focusPrev()},_onDownArrow:function(){this.focusNext()},_onRightArrow:function(a){this._moveToPopup(a);a.stopPropagation();a.preventDefault()},_onLeftArrow:function(){if(this.parentMenu)if(this.parentMenu._isMenuBar)this.parentMenu.focusPrev();else this.onCancel(!1);
else evt.stopPropagation(),evt.preventDefault()}})});
//@ sourceMappingURL=DropDownMenu.js.map