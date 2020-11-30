window.__require=function t(e,n,i){function r(s,c){if(!n[s]){if(!e[s]){var h=s.split("/");if(h=h[h.length-1],!e[h]){var a="function"==typeof __require&&__require;if(!c&&a)return a(h,!0);if(o)return o(h,!0);throw new Error("Cannot find module '"+s+"'")}s=h}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){return r(e[s][1][t]||t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof __require&&__require,s=0;s<i.length;s++)r(i[s]);return r}({CircularItem:[function(t,e,n){"use strict";cc._RF.push(e,"30e06uoWYlOR5v6V4xqZz0g","CircularItem");var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=cc._decorator,c=s.ccclass,h=s.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.speed=5,e}return r(e,t),e.prototype.show=function(t,e,n){this.index=t,this.parent=n,this.target=cc.v2(this.parent.radius,0),this.node.setPosition(cc.v2(this.parent.radius,0)),this.refreshItem(e)},e.prototype.refreshItem=function(t){this.info=t,this.label.string=this.info.name},e.prototype.onClick=function(){this.angle=0,this.direction=this.getDirection(),this.parent.onClick(this)},e.prototype.follow=function(t){this.centerIndex=t.index,t.index!==this.index&&(this.angle=(this.index-t.index)*this.parent.interval,0===t.direction?this.direction=this.getDirection():this.direction=t.direction),this.speed=10,this.isFollow=!0},e.prototype.following=function(){var t=this.node.position.angle(cc.v3(this.parent.radius,0))/3;this.node.setScale(1-t);var e=this.angle*t*.5,n=this.node.position.angle(this.target.rotate(this.angle-e)),i=cc.v2(this.node.position.x,this.node.position.y).rotate(this.direction*n*this.speed*.01);if(this.node.setPosition(i),this.parent.maxItemCount>1){var r=1.5;2===this.parent.maxItemCount&&(r=.5),3===this.parent.maxItemCount&&(r=.9),4===this.parent.maxItemCount&&(r=.9),5===this.parent.maxItemCount&&(r=1.3),0===this.index&&this.node.position.angle(cc.v3(this.parent.radius,0))>r&&-1===this.direction&&(this.parent.remIndexs(this),this.angle=(this.parent.maxItemCount-this.centerIndex)*this.parent.interval,this.speed+=3),this.index===this.parent.maxItemCount-1&&this.node.position.angle(cc.v3(this.parent.radius,0))>r&&1===this.direction&&(this.parent.addIndexs(this),this.angle=-(this.centerIndex+1)*this.parent.interval,this.speed+=3)}n<=.01&&(this.isFollow=!1,this.parent.onCenter(this.info))},e.prototype.resetPosScale=function(t){var e=this.node.position.angle(this.target.rotate(this.angle-t)),n=cc.v2(this.node.position.x,this.node.position.y).rotate(this.direction*e);this.node.setPosition(n);var i=this.node.position.angle(cc.v3(this.parent.radius,0))/3;this.node.setScale(1-i)},e.prototype.addIndex=function(t){this!==t?(this.index++,this.centerIndex++):this.index=0},e.prototype.remIndex=function(t){this!==t?(this.index--,this.centerIndex--):this.index=this.parent.maxItemCount-1},e.prototype.update=function(t){this.isFollow&&this.following(t)},e.prototype.getDirection=function(){var t=cc.v2(this.node.position.x,this.node.position.y).normalizeSelf(),e=this.angle*this.node.scale*.5,n=this.target.rotate(this.angle-e).normalizeSelf(),i=t.cross(n);return i>0?1:i<0?-1:0},o([h(cc.Label)],e.prototype,"label",void 0),o([c],e)}(cc.Component);n.default=a,cc._RF.pop()},{}],CircularMenu:[function(t,e,n){"use strict";cc._RF.push(e,"b3c17XliU1N0ZyIKZpmZuyL","CircularMenu");var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=t("./CircularItem"),c=cc._decorator,h=c.ccclass,a=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.prefab=null,e.items=[],e._radius=260,e._interval=.6,e.total=10,e.config=[],e}return r(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"interval",{get:function(){return this._interval},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxItemCount",{get:function(){return this._maxItemCount},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){for(var t=0;t<this.total;t++)this.config.push({name:t});for(this._interval=Math.max(this._interval,0),this._interval=Math.min(this._interval,.7),this._maxItemCount=this.config.length>9?9:this.config.length,t=0;t<this.maxItemCount;t++){var e=this.config[t],n=this.getItem();n.node.name=t.toString(),n.show(t,e,this),this.items.push(n)}this.currentMinIndex=0,this.currentMaxIndex=this.maxItemCount-1,this.items[1].onClick()},e.prototype.onClick=function(t){if(this.currentInfo!==t.info){this.currentInfo=t.info;for(var e=0;e<this.items.length;e++)this.items[e].follow(t)}else cc.warn("\u4e0d\u80fd\u91cd\u590d\u70b9\u51fb")},e.prototype.onCenter=function(){},e.prototype.getItem=function(){var t=cc.instantiate(this.prefab);return this.node.addChild(t),t.getComponent(s.default)},e.prototype.addIndexs=function(t){for(var e=0;e<this.items.length;e++)this.items[e].addIndex(t);this.currentMinIndex--,this.currentMaxIndex--,this.currentMinIndex<0&&(this.currentMinIndex=this.config.length-1),this.currentMaxIndex<0&&(this.currentMaxIndex=this.config.length-1),t.refreshItem(this.config[this.currentMinIndex])},e.prototype.remIndexs=function(t){for(var e=0;e<this.items.length;e++)this.items[e].remIndex(t);this.currentMaxIndex++,this.currentMinIndex++,this.currentMaxIndex>=this.config.length&&(this.currentMaxIndex=0),this.currentMinIndex>=this.config.length&&(this.currentMinIndex=0),t.refreshItem(this.config[this.currentMaxIndex])},o([a(cc.Prefab)],e.prototype,"prefab",void 0),o([h],e)}(cc.Component);n.default=u,cc._RF.pop()},{"./CircularItem":"CircularItem"}]},{},["CircularItem","CircularMenu"]);