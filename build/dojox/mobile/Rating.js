//>>built
define("dojox/mobile/Rating",["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dijit/_WidgetBase","./iconUtils"],function(c,k,d,l,f){return c("dojox.mobile.Rating",l,{image:"",numStars:5,value:0,alt:"",baseClass:"mblRating",buildRendering:function(){this.inherited(arguments);this.domNode.style.display="inline-block";var a=this.imgNode=d.create("img");this.connect(a,"onload",k.hitch(this,function(){this.set("value",this.value)}));f.createIcon(this.image,null,a)},_setValueAttr:function(a){this._set("value",
a);var g=this.imgNode.height;if(0!=g){d.empty(this.domNode);var b,h,e=this.imgNode.width/3;for(b=0;b<this.numStars;b++){h=b<=a-1?0:b>=a?e:2*e;var c=d.create("div",{style:{"float":"left"}},this.domNode);f.createIcon(this.image,"0,"+h+","+e+","+g,null,this.alt,c)}}}})});
//@ sourceMappingURL=Rating.js.map