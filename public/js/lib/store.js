window.store={localStoreSupport:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}},set:function(t,e,o){var r,n;n=o?((r=new Date).setTime(r.getTime()+24*o*60*60*1e3),"; expires="+r.toGMTString()):"",this.localStoreSupport()?localStorage.setItem(t,e):document.cookie=t+"="+e+n+"; path=/"},get:function(t){if(this.localStoreSupport())return localStorage.getItem(t);for(var e=t+"=",o=document.cookie.split(";"),r=0;r<o.length;r++){for(var n=o[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(e))return n.substring(e.length,n.length)}return null},del:function(t){this.localStoreSupport()?localStorage.removeItem(t):this.set(t,"",-1)}};