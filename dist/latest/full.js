/* Simple Analytics - Privacy friend analytics (docs.simpleanalytics.com/script) */

!function(s){if(s){function e(e){o&&o.warn&&o.warn("Simple Analytics: "+e)}function t(e,t){return e&&e.getAttribute("data-"+t)}var n,r,a="https://",i=a+"api.simpleanalyticscdn.com/v2/",o=s.console,c="doNotTrack",u="pageviews",h="events",d=s.navigator,l=d.userAgent,p=s.location,f=s.document,m=p.hostname,g="Not sending requests ",v="pushState",y=s.dispatchEvent,w=Date.now(),E=0,T=f.querySelector('script[src="'+a+'scripts.simpleanalyticscdn.com/latest.js"]'),b=t(T,"mode"),q="true"===t(T,"skip-dnt"),D=t(T,"sa-global")||"sa";if(!q&&c in d&&"1"===d[c])return e(g+"when "+c+" is enabled");if("localhost"===m||"file:"===p.protocol)return e(g+"from localhost");if(!l||-1<l.search(/(bot|spider|crawl)/gi))return e(g+"because bot detected");try{function M(e){var t=p.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var S;try{S=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(j){}var x="(utm_)?",B={version:2,hostname:m,timezone:S,width:s.innerWidth,source:{source:M(x+"source|ref"),medium:M(x+"medium"),campaign:M(x+"campaign"),referrer:(f.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||undefined},pageviews:[],events:[]},O=0,R=null;s.addEventListener("visibilitychange",function(){f.hidden?R=Date.now():O+=Date.now()-R},!1);function $(e){return Math.round((Date.now()-e)/1e3)}function k(){return Math.round(Date.now()/1e3)}var A,H="sendBeacon",I=s.addEventListener,L=JSON.stringify,N=H in d&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(l);N&&I("unload",function(){var e=B[u][B[u].length-1];e.duration=$(w+O),O=0;var t=Math.max(0,E,U());t&&(e.scrolled=t),B.time=k(),d[H](i+"post",L(B))},!1);var _="scroll",C=f.body,F=f.documentElement,U=function(){var e="Height",t=_+e,n="offset"+e,r="client"+e,a=Math.max(C[t],C[n],F[r],F[t],F[n]);return Math.min(100,5*Math.round(100*(F.scrollTop+F[r])/a/5))};I("load",function(){E=U(),I(_,function(){E<U()&&(E=U())})});function z(e,t,n){var r=B[e];if(r.length&&(r[r.length-1].duration=$(w+O),r[r.length-1].scrolled=E),r.push(t),N)return w=Date.now(),O=0,void(E=s.setTimeout(U,100));var a=new XMLHttpRequest;a.open("POST",i+e,!0),n&&delete B.source,B.time=k(),a.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),a.send(L(B))}function J(e){var t=p.pathname;if("hash"===b&&p.hash&&(t+=p.hash.split("?")[0]),A!==t){var n={url:A=t,added:k()};try{var r=s.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);n.unique=!e&&!i&&(!f.referrer||f.referrer.split("/")[2]!==m)}catch(o){n.error=o.message}z(u,n,e)}}var P=s.history;if((P?P.pushState:null)&&Event&&y){P.pushState=(r=P[n=v],function(){var e=r.apply(this,arguments),t=new Event(n);return t.arguments=arguments,y(t),e}),I(v,function(){J(1)}),s.onpopstate=function(){J(1)}}"hash"===b&&"onhashchange"in s&&(s.onhashchange=function(){J(1)}),J();var W=s[D]&&s[D].q?s[D].q:[];for(var X in s[D]=function(e){z(h,e)},W)z(h,W[X])}catch(j){e(j.message);var Z=i+"image.gif";j.message&&(Z=Z+"?error="+encodeURIComponent(j.message)),(new Image).src=Z}}}(window);