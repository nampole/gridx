require({cache:{
'url:dijit/templates/MenuSeparator.html':"<tr class=\"dijitMenuSeparator\" role=\"separator\">\r\n\t<td class=\"dijitMenuSeparatorIconCell\">\r\n\t\t<div class=\"dijitMenuSeparatorTop\"></div>\r\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\r\n\t</td>\r\n\t<td colspan=\"3\" class=\"dijitMenuSeparatorLabelCell\">\r\n\t\t<div class=\"dijitMenuSeparatorTop dijitMenuSeparatorLabel\"></div>\r\n\t\t<div class=\"dijitMenuSeparatorBottom\"></div>\r\n\t</td>\r\n</tr>\r\n"}});
define("dijit/MenuSeparator", [
	"dojo/_base/declare", // declare
	"dojo/dom", // dom.setSelectable
	"./_WidgetBase",
	"./_TemplatedMixin",
	"./_Contained",
	"dojo/text!./templates/MenuSeparator.html"
], function(declare, dom, _WidgetBase, _TemplatedMixin, _Contained, template){

	// module:
	//		dijit/MenuSeparator

	return declare("dijit.MenuSeparator", [_WidgetBase, _TemplatedMixin, _Contained], {
		// summary:
		//		A line between two menu items

		templateString: template,

		buildRendering: function(){
			this.inherited(arguments);
			dom.setSelectable(this.domNode, false);
		},

		isFocusable: function(){
			// summary:
			//		Override to always return false
			// tags:
			//		protected

			return false; // Boolean
		}
	});
});
