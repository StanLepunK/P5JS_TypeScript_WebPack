!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,o=function(){function t(){}return t.prototype.set_x=function(t){this.x_=t},t.prototype.set_y=function(t){this.y_=t},t.prototype.set_z=function(t){this.z_=t},t.prototype.set_w=function(t){this.w_=t},t.prototype.x=function(){return this.x_},t.prototype.y=function(){return this.y_},t.prototype.z=function(){return this.z_},t.prototype.w=function(){return this.w_},t.prototype.red=function(){return this.x_},t.prototype.gre=function(){return this.y_},t.prototype.blu=function(){return this.z_},t.prototype.hue=function(){return this.x_},t.prototype.sat=function(){return this.y_},t.prototype.bri=function(){return this.z_},t.prototype.alp=function(){return this.w_},t.prototype.mult=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];1==t.length?(this.x_*=t[0],this.y_*=t[0],this.z_*=t[0],this.w_*=t[0]):2==t.length?(this.x_*=t[0],this.y_*=t[1]):3==t.length?(this.x_*=t[0],this.y_*=t[1],this.z_*=t[2]):4==t.length&&(this.x_*=t[0],this.y_*=t[1],this.z_*=t[2],this.w_*=t[3]),this.set_x(this.x_),this.set_y(this.y_),this.set_z(this.z_),this.set_w(this.w_)},t.prototype.div=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];1==t.length?(this.x_/=t[0],this.y_/=t[0],this.z_/=t[0],this.w_/=t[0]):2==t.length?(this.x_/=t[0],this.y_/=t[1]):3==t.length?(this.x_/=t[0],this.y_/=t[1],this.z_/=t[2]):4==t.length&&(this.x_/=t[0],this.y_/=t[1],this.z_/=t[2],this.w_/=t[3]),this.set_x(this.x_),this.set_y(this.y_),this.set_z(this.z_),this.set_w(this.w_)},t.prototype.add=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];1==t.length?(this.x_+=t[0],this.y_+=t[0],this.z_+=t[0],this.w_+=t[0]):2==t.length?(this.x_+=t[0],this.y_+=t[1]):3==t.length?(this.x_+=t[0],this.y_+=t[1],this.z_+=t[2]):4==t.length&&(this.x_+=t[0],this.y_+=t[1],this.z_+=t[2],this.w_+=t[3]),this.set_x(this.x_),this.set_y(this.y_),this.set_z(this.z_),this.set_w(this.w_)},t.prototype.sub=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];1==t.length?(this.x_-=t[0],this.y_-=t[0],this.z_-=t[0],this.w_-=t[0]):2==t.length?(this.x_-=t[0],this.y_-=t[1]):3==t.length?(this.x_-=t[0],this.y_-=t[1],this.z_-=t[2]):4==t.length&&(this.x_-=t[0],this.y_-=t[1],this.z_-=t[2],this.w_-=t[3]),this.set_x(this.x_),this.set_y(this.y_),this.set_z(this.z_),this.set_w(this.w_)},t.prototype.xy=function(){var e=new t;return e.set_x(this.x_),e.set_y(this.y_),e},t.prototype.xyz=function(){var e=new t;return e.set_x(this.x_),e.set_y(this.y_),e.set_z(this.z_),e},t.prototype.xyzw=function(){var e=new t;return e.set_x(this.x_),e.set_y(this.y_),e.set_z(this.z_),e.set_w(this.w_),e},t}(),r=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e,n,i){var o=t.call(this)||this;if(n>i)throw new Error(e+" input is "+n+" and the max is "+i+" this results in an invalid entry");return o}return r(e,t),e}(Error),h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),_=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var i=t.call(this)||this;return 1==e.length&&(i.x_=e[0],i.y_=e[0]),2==e.length?(i.x_=e[0],i.y_=e[1]):new s("class vec2 constructor() need 1 or 2 arguments",e.length,2),i}return h(e,t),e.prototype.set=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];1==e.length&&(this.x_=e[0],this.y_=e[0]),2==e.length?(this.x_=e[0],this.y_=e[1]):new s("class vec2 method set() need 1 or 2 arguments",e.length,2),t.prototype.set_x.call(this,this.x_),t.prototype.set_y.call(this,this.y_)},e}(o),u=new _(0,0),c=new _(0,0),y=0,f=0;function p(t,e,n,i,o){!function(t,e,n){var i=180*t.sin(.01*t.frameCount),o=t.color(i+180,100,100),r=t.color(360-(i+180),100,100);e%2==0?n%2==0?t.fill(o):t.fill(r):n%2==0?t.fill(r):t.fill(o);t.stroke(0,0,0),t.strokeWeight(1)}(t,e,o),t.rect(n.x(),n.y(),i.x(),i.y())}new p5(function(t){t.preload=function(){},t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight),t.colorMode(t.HSB,360,100,100,100),y=t.windowWidth,f=t.windowHeight},t.windowResized=function(){t.createCanvas(t.windowWidth,t.windowHeight),y=t.windowWidth,f=t.windowHeight},t.draw=function(){t.background(255,0,0);var e=y/10,n=f/10,i=0;t.fill(255,0,255),t.stroke(0,0,0),t.strokeWeight(1);for(var o=0;o<10;o++)for(var r=0;r<10;r++){var s=o*e,h=r*n;u.set(s,h),c.set(e,n),p(t,i,u,c,o),i++}}})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci9aX3ZlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IvRXJyb3JfaW5wdXRfbnVtX21heC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yL1pfdmVjMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidmVjIiwic2V0X3giLCJ4XyIsInRoaXMiLCJzZXRfeSIsInlfIiwic2V0X3oiLCJ6XyIsInNldF93Iiwid18iLCJ4IiwieSIsInoiLCJ3IiwicmVkIiwiZ3JlIiwiYmx1IiwiaHVlIiwic2F0IiwiYnJpIiwiYWxwIiwibXVsdCIsIl9pIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZGl2IiwiYWRkIiwiYSIsInN1YiIsInh5Iiwib3V0cHV0IiwieHl6IiwieHl6dyIsIl9zdXBlciIsIkVycm9yX2lucHV0X251bV9tYXgiLCJtZXNzYWdlIiwiaW5wdXQiLCJtYXgiLCJfdGhpcyIsIkVycm9yIiwiX19leHRlbmRzIiwidmVjMiIsImFyZyIsIkVycm9yX0Vycm9yX2lucHV0X251bV9tYXgiLCJaX3ZlYzJfZXh0ZW5kcyIsInNldCIsIlpfdmVjIiwicG9zIiwiWl92ZWMyIiwic2l6ZSIsImgiLCJjaG9zZSIsImluZGV4Iiwic2luIiwiZnJhbWVDb3VudCIsImNvbG91cl8xIiwiY29sb3IiLCJjb2xvdXJfMiIsImZpbGwiLCJzdHJva2UiLCJzdHJva2VXZWlnaHQiLCJhc3BlY3QiLCJyZWN0IiwicDUiLCJwcmVsb2FkIiwic2V0dXAiLCJjcmVhdGVDYW52YXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImNvbG9yTW9kZSIsIkhTQiIsIndpbmRvd1Jlc2l6ZWQiLCJkcmF3IiwiYmFja2dyb3VuZCIsInN4Iiwic3kiLCJweCIsInB5Il0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxX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Z0UsS0FBS2YsRUFBSXJDLElBQUlxQyxFQUFJcEMsSUFBSXNDLEVBQUt2QyxJQUFJdUMsRUFBS3RDLEtBd0IzQixJQUFJb0QsR0FyRUYsU0FBQ2pFLEdBQ2JBLEVBQUVrRSxRQUFVLGFBSVpsRSxFQUFFbUUsTUFBUSxXQUNUbkUsRUFBRW9FLGFBQWFwRSxFQUFFcUUsWUFBYXJFLEVBQUVzRSxjQUVoQ3RFLEVBQUV1RSxVQUFVdkUsRUFBRXdFLElBQUksSUFBSSxJQUFJLElBQUksS0FDOUJ6RCxFQUFJZixFQUFFcUUsWUFDTmpCLEVBQUlwRCxFQUFFc0UsY0FHUHRFLEVBQUV5RSxjQUFnQixXQUNqQnpFLEVBQUVvRSxhQUFhcEUsRUFBRXFFLFlBQWFyRSxFQUFFc0UsY0FFaEN2RCxFQUFJZixFQUFFcUUsWUFDTmpCLEVBQUlwRCxFQUFFc0UsY0FHUHRFLEVBQUUwRSxLQUFPLFdBQ1IxRSxFQUFFMkUsV0FBVyxJQUFJLEVBQUUsR0FDbkIsSUFFSUMsRUFBSzdELEVBRkMsR0FHTjhELEVBQUt6QixFQUZDLEdBR05FLEVBQWlCLEVBQ3JCdEQsRUFBRTRELEtBQUssSUFBSSxFQUFFLEtBQ2I1RCxFQUFFNkQsT0FBTyxFQUFFLEVBQUUsR0FDYjdELEVBQUU4RCxhQUFhLEdBQ2YsSUFBSSxJQUFJbEQsRUFBSSxFQUFJQSxFQVJOLEdBUWdCQSxJQUN6QixJQUFJLElBQUlDLEVBQUksRUFBSUEsRUFSUCxHQVFpQkEsSUFBSyxDQUM5QixJQUFJaUUsRUFBS2xFLEVBQUlnRSxFQUNURyxFQUFLbEUsRUFBSWdFLEVBQ2I1QixFQUFJRixJQUFJK0IsRUFBR0MsR0FDWDVCLEVBQUtKLElBQUk2QixFQUFHQyxHQUNaeEIsRUFBTXJELEVBQUVzRCxFQUFNTCxFQUFJRSxFQUFLdkMsR0FDdkIwQyIsImZpbGUiOiJleHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgdmVjMiBmcm9tICcuL1pfdmVjMidcbmltcG9ydCB2ZWMzIGZyb20gJy4vWl92ZWMzJ1xuaW1wb3J0IHZlYzQgZnJvbSAnLi9aX3ZlYzQnXG4vKipcbiogdmVjIGNsYXNzXG4qIHYgMC4wLjJcbiogMjAxOS0yMDE5XG4qIFZlY3RvciBjbGFzcyB3aXRoIGEgbnVtYmVyIHByZWNpc2lvblxuKiBAYXV0aG9yIEBzdGFubGVwdW5rXG4qIHJlZmFjdG9yaW5nIGZyb20gUm9wZSBQcm9jZXNzaW5nLUphdmEgbGlicmFyeVxuKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFuTGVwdW5LL1JvcGUgXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVjIHtcblx0cHJvdGVjdGVkIHhfOm51bWJlcjtcblx0cHJvdGVjdGVkIHlfOm51bWJlcjtcblx0cHJvdGVjdGVkIHpfOm51bWJlcjtcblx0cHJvdGVjdGVkIHdfOm51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG4gIFxuICAvLyBzZXRcblx0c2V0X3goeF86IG51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy54XyA9IHhfO1xuXHR9XG5cblx0c2V0X3koeV86IG51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy55XyA9IHlfOztcblx0fVxuXG5cdHNldF96KHpfOiBudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMuel89IHpfOztcblx0fVxuXG5cdHNldF93KHdfOiBudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMud189IHdfOztcblx0fVxuXG4gIC8vIGdldFxuXHR4KCk6bnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy54Xztcblx0fVxuXG5cdHkoKTpudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnlfO1xuXHR9XG5cblx0eigpOm51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuel87XG5cdH1cblxuXHR3KCk6bnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53Xztcblx0fVxuXG5cdC8vIHJnYlxuICByZWQoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnhfO1xuICB9XG5cbiAgZ3JlKCk6bnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy55XztcbiAgfVxuXG4gIGJsdSgpOm51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuel87XG4gIH1cblxuICAvLyBoc2JcbiAgaHVlKCk6bnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy54XztcbiAgfVxuXG4gIHNhdCgpOm51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMueV87XG4gIH1cblxuICBicmkoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnpfO1xuICB9XG4gIFxuICAvLyBhbHBoYVxuICBhbHAoKTpudW1iZXIge1xuICAgIHJldHVybiB0aGlzLndfO1xuICB9XG5cbiAgLy8gQkFTSUMgVkVDVE9SIE9QRVJBVElPTlxuICAvKipcbiAgICogbXVsdGlwbGljYXRpb25cbiAgICogQHBhcmFtIG1cbiAgICogQHJldHVyblxuICAgKi9cbiAgbXVsdCguLi5tOiBBcnJheTxudW1iZXI+KTp2b2lkIHtcbiAgIFx0aWYobS5sZW5ndGggPT0gMSkge1xuICAgXHRcdHRoaXMueF8gKj0gbVswXTsgXG5cdFx0XHR0aGlzLnlfICo9IG1bMF07IFxuICAgIFx0dGhpcy56XyAqPSBtWzBdO1xuICAgIFx0dGhpcy53XyAqPSBtWzBdOyAgXG4gICBcdH0gZWxzZSBpZihtLmxlbmd0aCA9PSAyKSB7XG4gICBcdFx0dGhpcy54XyAqPSBtWzBdOyBcblx0XHRcdHRoaXMueV8gKj0gbVsxXTsgIFxuICAgXHR9IGVsc2UgaWYobS5sZW5ndGggPT0gMykge1xuICAgXHRcdHRoaXMueF8gKj0gbVswXTsgXG5cdFx0XHR0aGlzLnlfICo9IG1bMV07IFxuICAgIFx0dGhpcy56XyAqPSBtWzJdOyBcbiAgIFx0fSBlbHNlIGlmKG0ubGVuZ3RoID09IDQpIHtcbiAgIFx0XHR0aGlzLnhfICo9IG1bMF07IFxuXHRcdFx0dGhpcy55XyAqPSBtWzFdOyBcbiAgICBcdHRoaXMuel8gKj0gbVsyXTtcbiAgICBcdHRoaXMud18gKj0gbVszXTsgXG4gICBcdH1cbiAgIFx0dGhpcy5zZXRfeCh0aGlzLnhfKTtcblx0XHR0aGlzLnNldF95KHRoaXMueV8pO1xuXHRcdHRoaXMuc2V0X3oodGhpcy56Xyk7XG5cdFx0dGhpcy5zZXRfdyh0aGlzLndfKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGRpdmlzaW9uXG4gICAqIEBwYXJhbSBkXG4gICAqIEByZXR1cm5cbiAgICovXG4gIGRpdiguLi5kOiBBcnJheTxudW1iZXI+KTp2b2lkIHtcbiAgIFx0aWYoZC5sZW5ndGggPT0gMSkge1xuICAgXHRcdHRoaXMueF8gLz0gZFswXTsgXG5cdFx0XHR0aGlzLnlfIC89IGRbMF07IFxuICAgIFx0dGhpcy56XyAvPSBkWzBdO1xuICAgIFx0dGhpcy53XyAvPSBkWzBdOyAgXG4gICBcdH0gZWxzZSBpZihkLmxlbmd0aCA9PSAyKSB7XG4gICBcdFx0dGhpcy54XyAvPSBkWzBdOyBcblx0XHRcdHRoaXMueV8gLz0gZFsxXTsgIFxuICAgXHR9IGVsc2UgaWYoZC5sZW5ndGggPT0gMykge1xuICAgXHRcdHRoaXMueF8gLz0gZFswXTsgXG5cdFx0XHR0aGlzLnlfIC89IGRbMV07IFxuICAgIFx0dGhpcy56XyAvPSBkWzJdOyBcbiAgIFx0fSBlbHNlIGlmKGQubGVuZ3RoID09IDQpIHtcbiAgIFx0XHR0aGlzLnhfIC89IGRbMF07IFxuXHRcdFx0dGhpcy55XyAvPSBkWzFdOyBcbiAgICBcdHRoaXMuel8gLz0gZFsyXTtcbiAgICBcdHRoaXMud18gLz0gZFszXTsgXG4gICBcdH1cbiAgIFx0dGhpcy5zZXRfeCh0aGlzLnhfKTtcblx0XHR0aGlzLnNldF95KHRoaXMueV8pO1xuXHRcdHRoaXMuc2V0X3oodGhpcy56Xyk7XG5cdFx0dGhpcy5zZXRfdyh0aGlzLndfKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIGFkZGl0aW9uXG4gICAqIEBwYXJhbSBhXG4gICAqIEByZXR1cm5cbiAgICovXG4gIGFkZCguLi5hOiBBcnJheTxudW1iZXI+KTp2b2lkIHtcbiAgIFx0aWYoYS5sZW5ndGggPT0gMSkge1xuICAgXHRcdHRoaXMueF8gKz0gYVswXTsgXG5cdFx0XHR0aGlzLnlfICs9IGFbMF07IFxuICAgIFx0dGhpcy56XyArPSBhWzBdO1xuICAgIFx0dGhpcy53XyArPSBhWzBdOyAgXG4gICBcdH0gZWxzZSBpZihhLmxlbmd0aCA9PSAyKSB7XG4gICBcdFx0dGhpcy54XyArPSBhWzBdOyBcblx0XHRcdHRoaXMueV8gKz0gYVsxXTsgIFxuICAgXHR9IGVsc2UgaWYoYS5sZW5ndGggPT0gMykge1xuICAgXHRcdHRoaXMueF8gKz0gYVswXTsgXG5cdFx0XHR0aGlzLnlfICs9IGFbMV07IFxuICAgIFx0dGhpcy56XyArPSBhWzJdOyBcbiAgIFx0fSBlbHNlIGlmKGEubGVuZ3RoID09IDQpIHtcbiAgIFx0XHR0aGlzLnhfICs9IGFbMF07IFxuXHRcdFx0dGhpcy55XyArPSBhWzFdOyBcbiAgICBcdHRoaXMuel8gKz0gYVsyXTtcbiAgICBcdHRoaXMud18gKz0gYVszXTsgXG4gICBcdH1cbiAgIFx0dGhpcy5zZXRfeCh0aGlzLnhfKTtcblx0XHR0aGlzLnNldF95KHRoaXMueV8pO1xuXHRcdHRoaXMuc2V0X3oodGhpcy56Xyk7XG5cdFx0dGhpcy5zZXRfdyh0aGlzLndfKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIHN1YnRyYWN0aW9uXG4gICAqIEBwYXJhbSBzXG4gICAqIEByZXR1cm5cbiAgICovXG4gIHN1YiguLi5zOiBBcnJheTxudW1iZXI+KTp2b2lkIHtcbiAgIFx0aWYocy5sZW5ndGggPT0gMSkge1xuICAgXHRcdHRoaXMueF8gLT0gc1swXTsgXG5cdFx0XHR0aGlzLnlfIC09IHNbMF07IFxuICAgIFx0dGhpcy56XyAtPSBzWzBdO1xuICAgIFx0dGhpcy53XyAtPSBzWzBdOyAgXG4gICBcdH0gZWxzZSBpZihzLmxlbmd0aCA9PSAyKSB7XG4gICBcdFx0dGhpcy54XyAtPSBzWzBdOyBcblx0XHRcdHRoaXMueV8gLT0gc1sxXTsgIFxuICAgXHR9IGVsc2UgaWYocy5sZW5ndGggPT0gMykge1xuICAgXHRcdHRoaXMueF8gLT0gc1swXTsgXG5cdFx0XHR0aGlzLnlfIC09IHNbMV07IFxuICAgIFx0dGhpcy56XyAtPSBzWzJdOyBcbiAgIFx0fSBlbHNlIGlmKHMubGVuZ3RoID09IDQpIHtcbiAgIFx0XHR0aGlzLnhfIC09IHNbMF07IFxuXHRcdFx0dGhpcy55XyAtPSBzWzFdOyBcbiAgICBcdHRoaXMuel8gLT0gc1syXTtcbiAgICBcdHRoaXMud18gLT0gc1szXTsgXG4gICBcdH1cbiAgIFx0dGhpcy5zZXRfeCh0aGlzLnhfKTtcblx0XHR0aGlzLnNldF95KHRoaXMueV8pO1xuXHRcdHRoaXMuc2V0X3oodGhpcy56Xyk7XG5cdFx0dGhpcy5zZXRfdyh0aGlzLndfKTtcbiAgfVxuICBcbiAgXG5cblxuXG5cbiAgLyoqXG4gICogTVVMVEkgQ09NUE9ORU5UXG4gICogbmVlZCBmaW5kIGEgc29sdXRpb24gdG8gcmV0dXJuIGEgdmVjMiwgdmVjMyBvciB2ZWM0IGJlZm9yZSBnbyBmYXIgaW4gdGhpcyB3YXlcbiAgKiB1bmRlcnN0YW5kIHdyaXRlIGEgbWV0aG9kIGxpa2UgeXgoKSwgeHgoKSwgeHl6dygpIGV0Yy4uLlxuICAqL1xuICBcbiAgeHkoKTpPYmplY3Qge1xuICBcdGxldCBvdXRwdXQgPSBuZXcgdmVjKCk7XG4gIFx0b3V0cHV0LnNldF94KHRoaXMueF8pO1xuICBcdG91dHB1dC5zZXRfeSh0aGlzLnlfKTtcblxuICBcdC8vIGxldCBvdXRwdXQgPSBudWxsO1xuICBcdC8vIGxldCBvdXRwdXQgPSBuZXcgdmVjMihudWxsLG51bGwpO1xuICBcdC8vbGV0IG91dHB1dCA9IG5ldyB2ZWMyKHRoaXMueF8sdGhpcy55Xyk7XG4gIFx0cmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIHh5eigpIHtcbiAgXHRsZXQgb3V0cHV0ID0gbmV3IHZlYygpO1xuICBcdG91dHB1dC5zZXRfeCh0aGlzLnhfKTtcbiAgXHRvdXRwdXQuc2V0X3kodGhpcy55Xyk7XG4gIFx0b3V0cHV0LnNldF96KHRoaXMuel8pO1xuICBcdC8vbGV0IG91dHB1dCA9IG5ldyB2ZWMzKHRoaXMueF8sdGhpcy55Xyx0aGlzLnpfKTtcbiAgXHRyZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgeHl6dygpIHtcbiAgXHRsZXQgb3V0cHV0ID0gbmV3IHZlYygpO1xuICBcdG91dHB1dC5zZXRfeCh0aGlzLnhfKTtcbiAgXHRvdXRwdXQuc2V0X3kodGhpcy55Xyk7XG4gIFx0b3V0cHV0LnNldF96KHRoaXMuel8pO1xuICBcdG91dHB1dC5zZXRfdyh0aGlzLndfKTtcbiAgXHQvL2xldCBvdXRwdXQgPSBuZXcgdmVjNCh0aGlzLnhfLHRoaXMueV8sdGhpcy56Xyx0aGlzLndfKTtcbiAgXHRyZXR1cm4gb3V0cHV0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcl9pbnB1dF9udW1fbWF4IGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlOnN0cmluZywgaW5wdXQ6bnVtYmVyLCBtYXg6bnVtYmVyKSB7XG5cdFx0c3VwZXIoKTtcblx0XHRpZihpbnB1dCA+IG1heCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UrIFwiIGlucHV0IGlzIFwiK2lucHV0ICtcIiBhbmQgdGhlIG1heCBpcyBcIiArIG1heCArIFwiIHRoaXMgcmVzdWx0cyBpbiBhbiBpbnZhbGlkIGVudHJ5XCIpO1xuXHRcdH1cblx0fVxufSIsIi8qKlxuKiB2ZWMyIGNsYXNzXG4qIHYgMC4wLjFcbiogMjAxOS0yMDE5XG4qIFZlY3RvciBjbGFzcyB3aXRoIGEgbnVtYmVyIHByZWNpc2lvblxuKiBAYXV0aG9yIEBzdGFubGVwdW5rXG4qIHJlZmFjdG9yaW5nIGZyb20gUm9wZSBQcm9jZXNzaW5nLUphdmEgbGlicmFyeVxuKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFuTGVwdW5LL1JvcGUgXG4qL1xuaW1wb3J0IHZlYyBmcm9tICcuL1pfdmVjJ1xuaW1wb3J0IEVycm9yX2lucHV0X251bV9tYXggZnJvbSAnLi4vRXJyb3IvRXJyb3JfaW5wdXRfbnVtX21heCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVjMiBleHRlbmRzIHZlYyB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZzogQXJyYXk8bnVtYmVyPikge1xuXHRcdHN1cGVyKCk7XG5cdFx0aWYoYXJnLmxlbmd0aCA9PSAxKSB7XG4gICBcdFx0dGhpcy54XyA9IGFyZ1swXTsgXG5cdFx0XHR0aGlzLnlfID0gYXJnWzBdO1xuXHRcdH0gaWYoYXJnLmxlbmd0aCA9PSAyKSB7XG4gICBcdFx0dGhpcy54XyA9IGFyZ1swXTsgXG5cdFx0XHR0aGlzLnlfID0gYXJnWzFdOyAgXG4gICBcdH0gZWxzZSB7XG4gICBcdFx0bmV3IEVycm9yX2lucHV0X251bV9tYXgoXCJjbGFzcyB2ZWMyIGNvbnN0cnVjdG9yKCkgbmVlZCAxIG9yIDIgYXJndW1lbnRzXCIsYXJnLmxlbmd0aCwyKTtcbiAgIFx0fVxuXHR9XG5cblx0c2V0KC4uLmFyZzogQXJyYXk8bnVtYmVyPik6dm9pZCB7XG5cdFx0aWYoYXJnLmxlbmd0aCA9PSAxKSB7XG4gICBcdFx0dGhpcy54XyA9IGFyZ1swXTsgXG5cdFx0XHR0aGlzLnlfID0gYXJnWzBdO1xuXHRcdH0gaWYoYXJnLmxlbmd0aCA9PSAyKSB7XG4gICBcdFx0dGhpcy54XyA9IGFyZ1swXTsgXG5cdFx0XHR0aGlzLnlfID0gYXJnWzFdOyAgXG4gICBcdH0gZWxzZSB7XG4gICBcdFx0bmV3IEVycm9yX2lucHV0X251bV9tYXgoXCJjbGFzcyB2ZWMyIG1ldGhvZCBzZXQoKSBuZWVkIDEgb3IgMiBhcmd1bWVudHNcIixhcmcubGVuZ3RoLDIpO1xuICAgXHR9XG4gICBcdHN1cGVyLnNldF94KHRoaXMueF8pO1xuXHRcdHN1cGVyLnNldF95KHRoaXMueV8pO1xuXHR9XG59IiwiLy8gaW1wb3J0IHZlYyBmcm9tICcuL1pfdmVjJ1xuLy8gaW1wb3J0IHZlYzIgZnJvbSAnLi9aX3ZlYzInXG4vLyBpbXBvcnQgdmVjMyBmcm9tICcuL1pfdmVjMydcbi8vIGltcG9ydCB2ZWM0IGZyb20gJy4vWl92ZWM0J1xuXG5pbXBvcnQgdmVjIGZyb20gJy4vdmVjdG9yL1pfdmVjJ1xuaW1wb3J0IHZlYzIgZnJvbSAnLi92ZWN0b3IvWl92ZWMyJ1xuaW1wb3J0IHZlYzMgZnJvbSAnLi92ZWN0b3IvWl92ZWMzJ1xuaW1wb3J0IHZlYzQgZnJvbSAnLi92ZWN0b3IvWl92ZWM0J1xuXG5sZXQgcG9zID0gbmV3IHZlYzIoMCwwKTtcbmxldCBzaXplID0gbmV3IHZlYzIoMCwwKTtcblxubGV0IHcgOiBudW1iZXIgPSAwO1xubGV0IGggOiBudW1iZXIgPSAwO1xuXG52YXIgc2tldGNoID0gKHA6IHA1KSA9PiB7XG5cdHAucHJlbG9hZCA9ICgpID0+IHtcblxuXHR9XG5cblx0cC5zZXR1cCA9ICgpID0+IHtcblx0XHRwLmNyZWF0ZUNhbnZhcyhwLndpbmRvd1dpZHRoLCBwLndpbmRvd0hlaWdodCk7XG5cdFx0Ly8gcC5jcmVhdGVDYW52YXMocC53aW5kb3dXaWR0aCwgcC53aW5kb3dIZWlnaHQsIHAuV0VCR0wpOyAvLyB0cmFuc2xhdGUgdGhlIHdvcmsgdG8gdGhlIG1pZGRsZSBvZiB0aGUgd2luZG93XG5cdFx0cC5jb2xvck1vZGUocC5IU0IsMzYwLDEwMCwxMDAsMTAwKTtcblx0XHR3ID0gcC53aW5kb3dXaWR0aDtcblx0XHRoID0gcC53aW5kb3dIZWlnaHQ7XG5cdH1cblxuXHRwLndpbmRvd1Jlc2l6ZWQgPSAoKSA9PiB7XG5cdFx0cC5jcmVhdGVDYW52YXMocC53aW5kb3dXaWR0aCwgcC53aW5kb3dIZWlnaHQpO1xuXHRcdC8vIHAuY3JlYXRlQ2FudmFzKHAud2luZG93V2lkdGgsIHAud2luZG93SGVpZ2h0LCBwLldFQkdMKTtcblx0XHR3ID0gcC53aW5kb3dXaWR0aDtcblx0XHRoID0gcC53aW5kb3dIZWlnaHQ7XG5cdH1cblx0XG5cdHAuZHJhdyA9ICgpID0+IHtcblx0XHRwLmJhY2tncm91bmQoMjU1LDAsMCk7XG5cdFx0bGV0IGNvbCA9IDEwO1xuXHRcdGxldCByb3cgPSAxMDtcblx0XHRsZXQgc3ggPSB3IC8gY29sO1xuXHRcdGxldCBzeSA9IGggLyByb3c7XG5cdFx0bGV0IGluZGV4IDogbnVtYmVyID0gMDtcblx0XHRwLmZpbGwoMjU1LDAsMjU1KTtcblx0XHRwLnN0cm9rZSgwLDAsMCk7XG5cdFx0cC5zdHJva2VXZWlnaHQoMSk7XG5cdFx0Zm9yKGxldCB4ID0gMCA7IHggPCBjb2wgOyB4KyspIHtcblx0XHRcdGZvcihsZXQgeSA9IDAgOyB5IDwgcm93IDsgeSsrKSB7XHRcblx0XHRcdFx0bGV0IHB4ID0geCAqIHN4O1xuXHRcdFx0XHRsZXQgcHkgPSB5ICogc3k7XG5cdFx0XHRcdHBvcy5zZXQocHgscHkpO1xuXHRcdFx0XHRzaXplLnNldChzeCxzeSk7XG5cdFx0XHRcdGNob3NlKHAsaW5kZXgscG9zLHNpemUseCk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNob3NlKHA6IHA1LCBpbmRleDogbnVtYmVyLCBwb3M6IHZlYzIsIHNpemU6IHZlYzIsIHg6IG51bWJlcikge1xuXHRhc3BlY3QocCwgaW5kZXgsIHgpO1xuXHRwLnJlY3QocG9zLngoKSxwb3MueSgpLHNpemUueCgpLHNpemUueSgpKTtcbn1cblxuZnVuY3Rpb24gYXNwZWN0KHA6IHA1LCBpbmRleDogbnVtYmVyLCB4OiBudW1iZXIpIHtcblx0bGV0IGh1ZSA9IHAuc2luKHAuZnJhbWVDb3VudCAqIDAuMDEpICogMTgwLjA7XG5cdGxldCBjb2xvdXJfMSA9IHAuY29sb3IoaHVlICsgMTgwLDEwMCwxMDApO1xuXHRsZXQgY29sb3VyXzIgPSBwLmNvbG9yKDM2MCAtKGh1ZSArIDE4MCksMTAwLDEwMCk7XG5cdGlmKGluZGV4JTIgPT0gMCkge1xuXHRcdGlmKHglMiA9PSAwKSB7XG4gICAgICBwLmZpbGwoY29sb3VyXzEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwLmZpbGwoY29sb3VyXzIpO1xuICAgIH1cblx0fSBlbHNlIHtcblx0XHRpZih4JTIgPT0gMCkge1xuICAgICAgcC5maWxsKGNvbG91cl8yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcC5maWxsKGNvbG91cl8xKTtcbiAgICB9XG5cdH1cblx0cC5zdHJva2UoMCwwLDApO1xuXHRwLnN0cm9rZVdlaWdodCgxKTtcbn1cblxudmFyIHRlc3QgPSBuZXcgcDUoc2tldGNoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=