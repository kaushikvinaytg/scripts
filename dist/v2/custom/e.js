/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-02-25; ee91) */

!function(o,n){if(o){function c(){return Math.random().toString(36).slice(2)}var s,u="https:",t="error",r=o.console,e="doNotTrack",i=o.navigator,f=o.location,p=o.document,a="Not sending requests ",h=encodeURIComponent,d=decodeURIComponent,l=JSON.stringify,m=o.addEventListener,v="https://"+n,y=undefined,g={version:2},w=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},E=function(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};try{s=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(re){}m(t,function(e){e.filename&&-1<e.filename.indexOf(n)&&te(e.message)},!1);function O(e,n){return e&&e.getAttribute("data-"+n)}var b,x,S="pushState",T=o.dispatchEvent,M=Date.now(),q=0,B=p.querySelector('script[src*="'+n+'"]'),D=O(B,"mode"),_="true"==O(B,"skip-dnt"),k=O(B,"hostname")||f.hostname,I=O(B,"sa-global")||"sa";if(g.hostname=k,!_&&e in i&&"1"==i[e])return w(a+"when "+e+" is enabled");if(-1==k.indexOf("."))return w(a+"from localhost");try{function $(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}var j,N,R={},A=c(),C="(utm_)?",F={source:$(C+"source|source|ref"),medium:$(C+"medium"),campaign:$(C+"campaign"),referrer:(p.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||y},H=0;o.addEventListener("visibilitychange",function(){p.hidden?N=Date.now():H+=Date.now()-N},!1);function L(e,n){var t={type:"append",original_id:n?e:A};t.duration=Math.round((Date.now()-M+H)/1e3),M=H=0,t.scrolled=Math.max(0,q,W()),!n&&U in i?i[U](v+"/append",l(t)):ne(t)}var U="sendBeacon";m("unload",L,!1);var z="scroll",J=p.body||{},P=p.documentElement||{},W=function(){try{var e="Height",n=z+e,t="offset"+e,r="client"+e,i=P[r]||0,a=Math.max(J[n]||0,J[t]||0,P[r]||0,P[n]||0,P[t]||0);return Math.min(100,5*Math.round(100*((P.scrollTop||0)+i)/a/5))}catch(o){return 0}};m("load",function(){q=W(),m(z,function(){q<W()&&(q=W())},!1)});function Z(e){var n=d(f.pathname);if("hash"==D&&f.hash&&(n+=f.hash.split("?")[0]),j!=n){var t={path:j=n},r=o.performance,i="navigation",a=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type);t.unique=!e&&!a&&(!p.referrer||p.referrer.split("/")[2]!=k),R=t,function(e,n){e&&L(""+A,!0),A=c(),R.id=A,ne(E(R,n?null:F,{https:f.protocol==u,timezone:s,width:o.innerWidth,type:"pageview"}))}(e,e||a)}}var G=o.history;if((G?G.pushState:y)&&Event&&T){G.pushState=(x=G[b=S],function(){var e,n=x.apply(this,arguments);return"function"==typeof Event?e=new Event(b):(e=document.createEvent("Event")).initEvent(b,!0,!0),e.arguments=arguments,T(e),n}),m(S,function(){Z(1)},!1),m("popstate",function(){Z(1)},!1)}"hash"==D&&"onhashchange"in o&&m("hashchange",function(){Z(1)},!1),Z();function K(e){try{e=""+e instanceof Function?e():e}catch(n){w("in your event function: "+n.message),e="event_errored"}ne(E(F,{type:"event",event:e,event_id:V}))}function Q(e){K(e)}var V=c();o[I]||(o[I]=Q);var X=o[I],Y=X&&X.q?X.q:[];for(var ee in o[I]=Q,Y)K(Y[ee])}catch(re){te(re)}}function ne(n){n=E(g,n),(new Image).src=v+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=y}).map(function(e){return h(e)+"="+h(n[e])}).join("&")}function te(e){e=e.message||e,w(e),ne({type:t,error:e,url:k+f.pathname})}}(window,"<!--# echo var="http_host" default="" -->");