KISSY.Editor.add("htmlparser-text",function(){function a(b){this.value=b;this._={isBlockLike:g}}var e=KISSY,c=e.Editor,g=false;e.augment(a,{type:c.NODE.NODE_TEXT,writeHtml:function(b,f){var d=this.value;f&&!(d=f.onText(d,this))||b.text(d)}});c.HtmlParser.Text=a;c.HtmlParser.Text=a});
