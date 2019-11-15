/* Simple Analytics - Privacy friend analytics (docs.simpleanalytics.com/script) */

!function(s,e){if(s){function o(e){t&&t.warn&&t.warn("Simple Analytics: "+e)}var n,r,c=s.navigator,p=s.location,u=p.hostname,l=s.document,t=s.console,h=s.performance,f="//"+e,i="https://"+e;try{function a(e,t){return e&&e.getAttribute("data-"+t)}var g,m=c.userAgent,d=s.dispatchEvent,v="Not sending requests ",y=l.querySelector('script[src$="'+f+'/app.js"]'),w=a(y,"mode"),E="true"===a(y,"skip-dnt"),T=a(y,"sa-global")||"sa";if("localhost"===u)return o(v+"from localhost");if(/(bot|spider|crawl)/i.test(m))return o(v+"because user agent is a robot");function b(e){var t=p.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}function S(e){var t=p.protocol+"//"+u+p.pathname;if("hash"===w&&p.hash&&(t+=p.hash.split("?")[0]),g!==t){if(g=t,!E&&"doNotTrack"in c&&"1"===c.doNotTrack)return o(v+"when doNotTrack is enabled");var n={url:t};m&&(n.ua=m),q&&(n.urlReferrer=q),k&&!e&&(n.referrer=k),s.innerWidth&&(n.width=s.innerWidth);try{var r=h&&h.getEntriesByType&&h.getEntriesByType("navigation")[0]&&h.getEntriesByType("navigation")[0].type?-1<["reload","back_forward"].indexOf(h.getEntriesByType("navigation")[0].type):h&&h.navigation&&-1<[1,2].indexOf(h.navigation.type);n.unique=!e&&!r&&(l.referrer&&l.referrer.split("/")[2]!==p.hostname)}catch(i){n.error=i.message}try{n.timezone="undefined"!=typeof Intl?Intl.DateTimeFormat().resolvedOptions().timeZone:null}catch(i){n.error=i.message}var a=new XMLHttpRequest;a.open("POST",f+"/api",!0),a.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),a.send(JSON.stringify(n))}}var q=b("utm_source|source|ref"),x=b("utm_campaign|campaign"),k=l.referrer.replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||null,R=s.history;if((R?R.pushState:null)&&Event&&d){R.pushState=(r=R[n="pushState"],function(){var e=r.apply(this,arguments),t=new Event(n);return t.arguments=arguments,d(t),e}),s.addEventListener("pushState",function(){S(!0)})}"hash"===w&&"onhashchange"in s&&(s.onhashchange=S),S();var $=/\.(.+)/.exec(e)[1];if(u!==$&&!new RegExp("."+$+"$","i").test(u))return o("Events via this script only work on "+$+" domains");function N(){A=!0;var a=l.createElement("iframe");a.setAttribute("src",f+"/iframe.html"),a.style.display="none",a.onload=function(){var t=a.contentWindow,n=q||k;try{if(O)for(var e=0;e<O.length;e++)t.postMessage({event:O[e][0],ref:n,campaign:x},i)}catch(r){}s[T]=function(e){t.postMessage({event:e,ref:n,campaign:x},i)}},l.body.appendChild(a)}var O=s[T]&&s[T].q?s[T].q:[],A=!1;s[T]=function(){A||N(),O.push([].slice.call(arguments))},!A&&O.length&&N()}catch(I){o(I.message);var B=f+"/image.gif";I.message&&(B=B+"?error="+encodeURIComponent(I.message)),(new Image).src=B}}}(window,"<!--# echo var="http_host" default="" -->");