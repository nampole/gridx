//>>built
require({cache:{"url:dijit/form/templates/DropDownBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInline dijitLeft"\r\n\tid\x3d"widget_${id}"\r\n\trole\x3d"combobox"\r\n\taria-haspopup\x3d"true"\r\n\tdata-dojo-attach-point\x3d"_popupStateNode"\r\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\r\n\t\tdata-dojo-attach-point\x3d"_buttonNode" role\x3d"presentation"\r\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitArrowButtonInner" value\x3d"\x26#9660; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"button presentation" aria-hidden\x3d"true"\r\n\t\t\t${_buttonInputDisabled}\r\n\t/\x3e\x3c/div\r\n\t\x3e\x3cdiv class\x3d\'dijitReset dijitValidationContainer\'\r\n\t\t\x3e\x3cinput class\x3d"dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value\x3d"\x26#935; " type\x3d"text" tabIndex\x3d"-1" readonly\x3d"readonly" role\x3d"presentation"\r\n\t/\x3e\x3c/div\r\n\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField dijitInputContainer"\r\n\t\t\x3e\x3cinput class\x3d\'dijitReset dijitInputInner\' ${!nameAttrSetting} type\x3d"text" autocomplete\x3d"off"\r\n\t\t\tdata-dojo-attach-point\x3d"textbox,focusNode" role\x3d"textbox"\r\n\t/\x3e\x3c/div\r\n\x3e\x3c/div\x3e\r\n'}});
define("dijit/form/_DateTimeTextBox","dojo/date dojo/date/locale dojo/date/stamp dojo/_base/declare dojo/_base/lang ./RangeBoundTextBox ../_HasDropDown dojo/text!./templates/DropDownBox.html".split(" "),function(g,h,f,k,e,l,m,n){new Date("X");return k("dijit.form._DateTimeTextBox",[l,m],{templateString:n,hasDownArrow:!0,cssStateNodes:{_buttonNode:"dijitDownArrowButton"},pattern:h.regexp,datePackage:"",postMixInProperties:function(){this.inherited(arguments);this._set("type","text")},compare:function(a,
b){var c=this._isInvalidDate(a),d=this._isInvalidDate(b);return c?d?0:-1:d?1:g.compare(a,b,this._selector)},autoWidth:!0,format:function(a,b){return!a?"":this.dateLocaleModule.format(a,b)},parse:function(a,b){return this.dateLocaleModule.parse(a,b)||(this._isEmpty(a)?null:void 0)},serialize:function(a,b){a.toGregorian&&(a=a.toGregorian());return f.toISOString(a,b)},dropDownDefaultValue:new Date,value:new Date(""),_blankValue:null,popupClass:"",_selector:"",constructor:function(a){this.dateModule=
a.datePackage?e.getObject(a.datePackage,!1):g;this.dateClassObj=this.dateModule.Date||Date;this.dateLocaleModule=a.datePackage?e.getObject(a.datePackage+".locale",!1):h;this._set("pattern",this.dateLocaleModule.regexp);this._invalidDate=this.constructor.prototype.value.toString()},buildRendering:function(){this.inherited(arguments);this.hasDownArrow||(this._buttonNode.style.display="none");this.hasDownArrow||(this._buttonNode=this.domNode,this.baseClass+=" dijitComboBoxOpenOnClick")},_setConstraintsAttr:function(a){a.selector=
this._selector;a.fullYear=!0;var b=f.fromISOString;"string"==typeof a.min&&(a.min=b(a.min));"string"==typeof a.max&&(a.max=b(a.max));this.inherited(arguments)},_isInvalidDate:function(a){return!a||isNaN(a)||"object"!=typeof a||a.toString()==this._invalidDate},_setValueAttr:function(a,b,c){void 0!==a&&("string"==typeof a&&(a=f.fromISOString(a)),this._isInvalidDate(a)&&(a=null),a instanceof Date&&!(this.dateClassObj instanceof Date)&&(a=new this.dateClassObj(a)));this.inherited(arguments);this.value instanceof
Date&&(this.filterString="");this.dropDown&&this.dropDown.set("value",a,!1)},_set:function(a,b){var c=this._get("value");"value"==a&&c instanceof Date&&0==this.compare(b,c)||this.inherited(arguments)},_setDropDownDefaultValueAttr:function(a){this._isInvalidDate(a)&&(a=new this.dateClassObj);this._set("dropDownDefaultValue",a)},openDropDown:function(a){this.dropDown&&this.dropDown.destroy();var b=e.isString(this.popupClass)?e.getObject(this.popupClass,!1):this.popupClass,c=this,d=this.get("value");
this.dropDown=new b({onChange:function(a){c.set("value",a,!0)},id:this.id+"_popup",dir:c.dir,lang:c.lang,value:d,textDir:c.textDir,currentFocus:!this._isInvalidDate(d)?d:this.dropDownDefaultValue,constraints:c.constraints,filterString:c.filterString,datePackage:c.params.datePackage,isDisabledDate:function(a){return!c.rangeCheck(a,c.constraints)}});this.inherited(arguments)},_getDisplayedValueAttr:function(){return this.textbox.value},_setDisplayedValueAttr:function(a,b){this._setValueAttr(this.parse(a,
this.constraints),b,a)}})});
//@ sourceMappingURL=_DateTimeTextBox.js.map