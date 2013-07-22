//>>built
define("dojox/data/demos/widgets/PicasaView",["dojo","dijit","dojox","dojo/require!dijit/_Templated,dijit/_Widget"],function(a,b,c){a.provide("dojox.data.demos.widgets.PicasaView");a.require("dijit._Templated");a.require("dijit._Widget");a.declare("dojox.data.demos.widgets.PicasaView",[b._Widget,b._Templated],{templateString:a.cache("dojox","data/demos/widgets/templates/PicasaView.html",'\x3ctable class\x3d"picasaView"\x3e\r\n\t\x3ctbody\x3e\r\n\t\t\x3ctr class\x3d"picasaTitle"\x3e\r\n\t\t\t\x3ctd\x3e\r\n\t\t\t\t\x3cb\x3e\r\n\t\t\t\t\tTitle:\r\n\t\t\t\t\x3c/b\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\t\x3ctd dojoAttachPoint\x3d"titleNode"\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd\x3e\r\n\t\t\t\t\x3cb\x3e\r\n\t\t\t\t\tAuthor:\r\n\t\t\t\t\x3c/b\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\t\x3ctd dojoAttachPoint\x3d"authorNode"\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd colspan\x3d"2"\x3e\r\n\t\t\t\t\x3cb\x3e\r\n\t\t\t\t\tSummary:\r\n\t\t\t\t\x3c/b\x3e\r\n\t\t\t\t\x3cspan class\x3d"picasaSummary" dojoAttachPoint\x3d"descriptionNode"\x3e\x3c/span\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd dojoAttachPoint\x3d"imageNode" colspan\x3d"2"\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/tbody\x3e\r\n\x3c/table\x3e\r\n\r\n'),
titleNode:null,descriptionNode:null,imageNode:null,authorNode:null,title:"",author:"",imageUrl:"",iconUrl:"",postCreate:function(){this.titleNode.appendChild(document.createTextNode(this.title));this.authorNode.appendChild(document.createTextNode(this.author));this.descriptionNode.appendChild(document.createTextNode(this.description));var a=document.createElement("a");a.setAttribute("href",this.imageUrl);a.setAttribute("target","_blank");var b=document.createElement("img");b.setAttribute("src",this.iconUrl);
a.appendChild(b);this.imageNode.appendChild(a)}})});
//@ sourceMappingURL=PicasaView.js.map