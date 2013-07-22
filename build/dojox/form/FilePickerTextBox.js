//>>built
require({cache:{"url:dojox/form/resources/FilePickerTextBox.html":'\x3cdiv class\x3d"dijit dijitReset dijitInlineTable dijitLeft"\r\n\tid\x3d"widget_${id}"\r\n\trole\x3d"combobox" tabIndex\x3d"-1"\r\n\t\x3e\x3cdiv style\x3d"overflow:hidden;"\r\n\t\t\x3e\x3cdiv class\x3d\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton\'\r\n\t\t\tdojoAttachPoint\x3d"downArrowNode,_buttonNode,_popupStateNode" role\x3d"presentation"\r\n\t\t\t\x3e\x3cdiv class\x3d"dijitArrowButtonInner"\x3e\x26thinsp;\x3c/div\r\n\t\t\t\x3e\x3cdiv class\x3d"dijitArrowButtonChar"\x3e\x26#9660;\x3c/div\r\n\t\t\x3e\x3c/div\r\n\t\t\x3e\x3cdiv class\x3d"dijitReset dijitValidationIcon"\x3e\x3cbr\x3e\x3c/div\r\n\t\t\x3e\x3cdiv class\x3d"dijitReset dijitValidationIconText"\x3e\x26Chi;\x3c/div\r\n\t\t\x3e\x3cdiv class\x3d"dijitReset dijitInputField"\r\n\t\t\t\x3e\x3cinput type\x3d"text" autocomplete\x3d"off" ${!nameAttrSetting} class\x3d\'dijitReset\'\r\n\t\t\t\tdojoAttachEvent\x3d\'onkeypress:_onKey\' \r\n\t\t\t\tdojoAttachPoint\x3d\'textbox,focusNode\' role\x3d"textbox" aria-haspopup\x3d"true" aria-autocomplete\x3d"list"\r\n\t\t/\x3e\x3c/div\r\n\t\x3e\x3c/div\r\n\x3e\x3c/div\x3e\r\n'}});
define("dojox/form/FilePickerTextBox","dojo/_base/lang dojo/_base/array dojo/_base/event dojo/window dijit/focus dijit/registry dijit/form/_TextBoxMixin dijit/form/ValidationTextBox dijit/_HasDropDown dojox/widget/FilePicker dojo/text!./resources/FilePickerTextBox.html dojo/_base/declare dojo/keys".split(" "),function(e,t,m,u,v,w,q,x,y,z,A,B,d){return B("dojox.form.FilePickerTextBox",[x,y],{baseClass:"dojoxFilePickerTextBox",templateString:A,searchDelay:500,valueItem:null,numPanes:2.25,postMixInProperties:function(){this.inherited(arguments);
this.dropDown=new z(this.constraints)},postCreate:function(){this.inherited(arguments);this.connect(this.dropDown,"onChange",this._onWidgetChange);this.connect(this.focusNode,"onblur","_focusBlur");this.connect(this.focusNode,"onfocus","_focusFocus");this.connect(this.focusNode,"ondblclick",function(){q.selectInputText(this.focusNode)})},_setValueAttr:function(a,c,b){if(!this._searchInProgress){this.inherited(arguments);a=a||"";var h=this.dropDown.get("pathValue")||"";a!==h&&(this._skip=!0,h=e.hitch(this,
"_setBlurValue"),this.dropDown._setPathValueAttr(a,!b,this._settingBlurValue?h:null))}},_onWidgetChange:function(a){if(!a&&this.focusNode.value)this._hasValidPath=!1,this.focusNode.value="";else{this.valueItem=a;if(a=this.dropDown._getPathValueAttr(a))this._hasValidPath=!0;this._skip||this._setValueAttr(a,void 0,!0);delete this._skip}this.validate()},startup:function(){this.dropDown._started||this.dropDown.startup();this.inherited(arguments)},openDropDown:function(){this.dropDown.domNode.style.width=
"0px";"minPaneWidth"in(this.constraints||{})||this.dropDown.set("minPaneWidth",this.domNode.offsetWidth/this.numPanes);this.inherited(arguments)},toggleDropDown:function(){this.inherited(arguments);this._opened&&this.dropDown.set("pathValue",this.get("value"))},_focusBlur:function(a){a.explicitOriginalTarget==this.focusNode&&!this._allowBlur?window.setTimeout(e.hitch(this,function(){this._allowBlur||this.focus()}),1):this._menuFocus&&(this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!1}),
delete this._menuFocus)},_focusFocus:function(a){this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!1});delete this._menuFocus;if(a=v.curNode)if(a=w.byNode(a))this._menuFocus=a.domNode;this._menuFocus&&this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!0});delete this._allowBlur},_onBlur:function(){this._allowBlur=!0;delete this.dropDown._savedFocus;this.inherited(arguments)},_setBlurValue:function(){this.dropDown&&!this._settingBlurValue?(this._settingBlurValue=!0,
this.set("value",this.focusNode.value)):(delete this._settingBlurValue,this.inherited(arguments))},parse:function(a,c){if(this._hasValidPath||this._hasSelection)return a;var b=this.dropDown,h=b.topDir,d=b.pathSeparator,b=b.get("pathValue"),l=function(a){h.length&&0===a.indexOf(h)&&(a=a.substring(h.length));d&&a[a.length-1]==d&&(a=a.substring(0,a.length-1));return a},b=l(b);if(l(a)==b)return a},_startSearchFromInput:function(){var a=this.dropDown,c=this.focusNode,b=c.value,d=b,k=a.topDir;this._hasSelection&&
q.selectInputText(c,d.length);this._hasSelection=!1;k.length&&0===b.indexOf(k)&&(b=b.substring(k.length));var l=b.split(a.pathSeparator),m=e.hitch(this,function(b){var n=l[b],f=a.getChildren()[b],r;this._searchInProgress=!0;var k=e.hitch(this,function(){delete this._searchInProgress});(n||f)&&!this._opened&&this.toggleDropDown();if(n&&f){var s=e.hitch(this,function(){r&&this.disconnect(r);delete r;var g=f._menu.getChildren(),e=t.filter(g,function(a){return a.label==n})[0],p=t.filter(g,function(a){return 0===
a.label.indexOf(n)})[0];if(e&&(l.length>b+1&&e.children||!e.children))b++,f._menu.onItemClick(e,{type:"internal",stopPropagation:function(){},preventDefault:function(){}}),l[b]?m(b):k();else{f._setSelected(null);if(p&&l.length===b+1){a._setInProgress=!0;a._removeAfter(f);delete a._setInProgress;g=p.label;p.children&&(g+=a.pathSeparator);g=g.substring(n.length);window.setTimeout(function(){u.scrollIntoView(p.domNode)},1);c.value=d+g;q.selectInputText(c,d.length);this._hasSelection=!0;try{p.focusNode.focus()}catch(s){}}else this._menuFocus&&
this.dropDown._updateClass(this._menuFocus,"Item",{Hover:!1,Focus:!1}),delete this._menuFocus;k()}});f.isLoaded?s():r=this.connect(f,"onLoad",s)}else f&&(f._setSelected(null),a._setInProgress=!0,a._removeAfter(f),delete a._setInProgress),k()});m(0)},_onKey:function(a){if(!this.disabled&&!this.readOnly){var c=a.charOrCode;c==d.DOWN_ARROW&&(this._allowBlur=!0);if(c==d.ENTER&&this._opened)this.dropDown.onExecute(),q.selectInputText(this.focusNode,this.focusNode.value.length),this._hasSelection=!1,m.stop(a);
else if((c==d.RIGHT_ARROW||c==d.LEFT_ARROW||c==d.TAB)&&this._hasSelection)this._startSearchFromInput(),m.stop(a);else{this.inherited(arguments);var b=!1;(c==d.BACKSPACE||c==d.DELETE)&&this._hasSelection?this._hasSelection=!1:b=c==d.BACKSPACE||c==d.DELETE||" "==c?!0:""!==a.keyChar;this._searchTimer&&window.clearTimeout(this._searchTimer);delete this._searchTimer;b&&(this._hasSelection=this._hasValidPath=!1,this._searchTimer=window.setTimeout(e.hitch(this,"_startSearchFromInput"),this.searchDelay+1))}}}})});
//@ sourceMappingURL=FilePickerTextBox.js.map