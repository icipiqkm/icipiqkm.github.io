System.register("chunks:///http.js",["./BaseModule-8a96da91.js","cc","./http_config-34069bdb.js"],(function(){var e,t,n,o,s,r,a,u,i,c;return{setters:[function(u){e=u.m,t=u._,n=u.a,o=u.C,s=u.T,r=u.N,a=u.i},function(e){u=e.cclegacy,i=e._decorator},function(e){c=e.H}],execute:function(){var p,l,d,g;u._RF.push({},"5d405StQsxBVqeHtS64+M1x","http",void 0);var f=i.ccclass;i.property,p=f("http"),l=e.Global(c.Event.Request),p((t((g=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var a=t.prototype;return a.onRequest=function(e,t,n,r){var a=e.method.toLocaleUpperCase(),u=e.port,i=o.instance.data.custom.http;u&&(i=i.replace(/:\d+/,":"+u));var c=s.buildUrl(i,e.api);return"GET"===a&&(c=this.handleGetRequest(c,t)),this.sendRequest(a,c,t,n,r)},a.sendRequest=function(e,t,n,o,s){var r=this;return new Promise((function(a,u){var i=new XMLHttpRequest;i.timeout=c.Config.TimeOut,console.log(e,"url",t),i.open(e,t,!0),r.setCommonHeaders(i,s),r.setupResponseHandler(i,t,o,a,u),"POST"===e?(r.logger.log_darkSand("["+e+"]:"+t,n),i.send(JSON.stringify(n))):(r.logger.log_lightOrange("["+e+"]:"+t),i.send())}))},a.setCommonHeaders=function(e,t){t&&e.setRequestHeader("game_token",t)},a.handleGetRequest=function(e,t){t&&(e+="?"+new URLSearchParams(t).toString());return e},a.setupResponseHandler=function(e,t,n,o,s){var a=this;e.onreadystatechange=function(){if(4==e.readyState){var s={};e.status>=200&&e.status<300?(s.response=JSON.parse(e.responseText),s.ok=!0,s.status=e.status):(s.ok=!1,s.status=e.status,s.response=null),a.logger.log_orange("响应:"+t,s),r.instance.emit(n,s),o(s),e.abort()}},e.onerror=function(t){e.abort(),r.instance.emit(c.Event.OnError,n,t),s(t)}},t}(a)).prototype,"onRequest",[l],Object.getOwnPropertyDescriptor(g.prototype,"onRequest"),g.prototype),d=g));u._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/http', 'chunks:///http.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});