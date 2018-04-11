function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function itemsTagTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (items) {// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca href=\"#{item.local_url}\" target=\"_blank\"\u003E\u003Cdiv class=\"ui card\"\u003E\u003Cimage\u003E\u003Cimg src=\"#{item.image}\" width=\"160\"\u002F\u003E\u003C\u002Fimage\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"header\"\u003E" + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"meta\"\u003E" + (pug_escape(null == (pug_interp = item.author) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\"\u003E" + (pug_escape(null == (pug_interp = item.content_text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Cp\u003E\u003C\u002Fp\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Ca href=\"#{item.local_url}\" target=\"_blank\"\u003E\u003Cdiv class=\"ui card\"\u003E\u003Cimage\u003E\u003Cimg src=\"#{item.image}\" width=\"160\"\u002F\u003E\u003C\u002Fimage\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"header\"\u003E" + (pug_escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"meta\"\u003E" + (pug_escape(null == (pug_interp = item.author) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"description\"\u003E" + (pug_escape(null == (pug_interp = item.content_text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Cp\u003E\u003C\u002Fp\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cscript\u003Efunction myfunc(){\n\tconsole.log('myfunc')\n}\n\u003C\u002Fscript\u003E";}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return pug_html;}