!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){function t(t,e,n){this.x_=t,this.y_=e,this.z_=n,this.x=t,this.y=e,this.z=n}return t.prototype.set=function(t,e,n){this.x=t,this.y=e,this.z=n},t.prototype.get_x=function(){return this.x},t.prototype.get_y=function(){return this.y},t.prototype.get_z=function(){return this.z},t}(),r=0,i=0,u=!1,a=(new p5(function(t){t.preload=function(){},t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),t.colorMode(t.HSB,360,100,100,100),r=t.windowWidth,i=t.windowHeight},t.windowResized=function(){t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),r=t.windowWidth,i=t.windowHeight},t.draw=function(){t.background(a,100,100),u?(h=t.map(t.mouseX,0,t.width,0,t.TAU),w=t.map(t.mouseY,0,t.height,0,t.TAU)):(y=t.mouseX-r/2,b=t.mouseY-i/2);var e=2*(y/r-.5),n=2*(y/i-.5);s=360*t.abs(t.sin(.01*t.frameCount)),t.directionalLight(s,c,f,-e,-n,.25),t.ambientMaterial(d,l,p),t.translate(y,b,0),t.rotateX(w),t.rotateY(h);var o=r/3,m=t.abs(t.cos(.01*t.frameCount))*o+20,g=t.abs(t.cos(.02*t.frameCount))*o+20,v=t.abs(t.cos(.001*t.frameCount))*o+20;t.box(m,g,v)},t.mousePressed=function(){u=!0,a=t.random(360)},t.mouseReleased=function(){u=!1}}),255),s=0,c=100,f=100,d=0,l=0,p=100,h=(new o(0,0,0),0),w=0,y=0,b=0}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1pfdmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidmVjMyIsInhfIiwieV8iLCJ6XyIsInRoaXMiLCJ4IiwieSIsInoiLCJzZXQiLCJnZXRfeCIsImdldF95IiwiZ2V0X3oiLCJ3IiwiaCIsIm1vdXNlX3ByZXNzZWQiLCJodWVfYmciLCJwNSIsInByZWxvYWQiLCJzZXR1cCIsImNyZWF0ZUNhbnZhcyIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiV0VCR0wiLCJjb2xvck1vZGUiLCJIU0IiLCJ3aW5kb3dSZXNpemVkIiwiZHJhdyIsImJhY2tncm91bmQiLCJyb3RfeCIsIm1hcCIsIm1vdXNlWCIsIndpZHRoIiwiVEFVIiwicm90X3kiLCJtb3VzZVkiLCJoZWlnaHQiLCJwb3NfeCIsInBvc195IiwiZGlyX2xpZ2h0X3giLCJkaXJfbGlnaHRfeSIsImh1ZV9saWdodCIsImFicyIsInNpbiIsImZyYW1lQ291bnQiLCJkaXJlY3Rpb25hbExpZ2h0Iiwic2F0dXJhdGlvbl9saWdodCIsImJyaWdodG5lc3NfbGlnaHQiLCJhbWJpZW50TWF0ZXJpYWwiLCJodWVfYW1iaWVudCIsInNhdHVyYXRpb25fYW1iaWVudCIsImJyaWdodG5lc3NfYW1iaWVudCIsInRyYW5zbGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwic2l6ZSIsImJveF9zaXplX3giLCJjb3MiLCJib3hfc2l6ZV95IiwiYm94X3NpemVfeiIsImJveCIsIm1vdXNlUHJlc3NlZCIsInJhbmRvbSIsIm1vdXNlUmVsZWFzZWQiLCJaX3ZlYzMiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxFQUFBLENBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQTFCLEVBQUFrQixFQUFBTyxHQUNBWCxPQUFBQyxlQUFBVSxF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M0QsRUFBRTJDLElBQUkzQyxFQUFFMEQsSUFBa0IsSUFBZDFELEVBQUU2QyxhQUFtQlcsRUFGbkMsR0FHcEJJLEVBQXNCNUQsRUFBRTJDLElBQUkzQyxFQUFFMEQsSUFBa0IsS0FBZDFELEVBQUU2QyxhQUFvQlcsRUFIcEMsR0FJeEJ4RCxFQUFFNkQsSUFBSUosRUFBV0UsRUFBV0MsSUFJOUI1RCxFQUFFOEQsYUFBZSxXQUNmOUMsR0FBZ0IsRUFDaEJDLEVBQVNqQixFQUFFK0QsT0FBTyxNQUdwQi9ELEVBQUVnRSxjQUFnQixXQUNoQmhELEdBQWdCLEtBVUQsS0FFZjBCLEVBQWtCLEVBQ2xCSyxFQUF5QixJQUN6QkMsRUFBeUIsSUFFekJFLEVBQW9CLEVBQ3BCQyxFQUEyQixFQUMzQkMsRUFBMkIsSUFJM0J0QixHQUZNLElBQUltQyxFQUFLLEVBQUUsRUFBRSxHQUVKLEdBQ2Y5QixFQUFlLEVBRWZHLEVBQWUsRUFDZkMsRUFBZSIsImZpbGUiOiJleHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB2ZWMzIHtcblx0eCA6IG51bWJlcjtcblx0eSA6IG51bWJlcjtcblx0eiA6IG51bWJlcjtcbiBcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgeF8gOiBudW1iZXIsIHB1YmxpYyB5XyA6IG51bWJlciwgcHVibGljIHpfIDogbnVtYmVyKSB7XG5cdFx0dGhpcy54ID0geF87XG5cdFx0dGhpcy55ID0geV87XG5cdFx0dGhpcy56ID0gel87XG5cdH1cblxuXHRzZXQoeF8gOiBudW1iZXIsIHlfIDogbnVtYmVyLCB6XyA6IG51bWJlcikge1xuXHRcdHRoaXMueCA9IHhfO1xuXHRcdHRoaXMueSA9IHlfO1xuXHRcdHRoaXMueiA9IHpfO1xuXHR9XG5cblx0Z2V0X3goKSB7XG5cdFx0cmV0dXJuIHRoaXMueDtcblx0fVxuXG5cdGdldF95KCkge1xuXHRcdHJldHVybiB0aGlzLnk7XG5cdH1cblxuXHRnZXRfeigpIHtcblx0XHRyZXR1cm4gdGhpcy56O1xuXHR9XG59XG4iLCJpbXBvcnQgdmVjMyBmcm9tICcuL1pfdmVjMydcblxuXG52YXIgc2tldGNoID0gKHA6IHA1KSA9PiB7XG4gIHAucHJlbG9hZCA9ICgpID0+IHtcblxuICB9XG5cbiAgcC5zZXR1cCA9ICgpID0+IHtcbiAgICBwLmNyZWF0ZUNhbnZhcyhwLndpbmRvd1dpZHRoLCBwLndpbmRvd0hlaWdodCwgcC5XRUJHTCk7XG4gICAgcC5jb2xvck1vZGUocC5IU0IsMzYwLDEwMCwxMDAsMTAwKTtcbiAgICB3ID0gcC53aW5kb3dXaWR0aDtcbiAgICBoID0gcC53aW5kb3dIZWlnaHQ7XG4gIH1cblxuICBwLndpbmRvd1Jlc2l6ZWQgPSAoKSA9PiB7XG4gICAgcC5jcmVhdGVDYW52YXMocC53aW5kb3dXaWR0aCwgcC53aW5kb3dIZWlnaHQsIHAuV0VCR0wpO1xuICAgIHcgPSBwLndpbmRvd1dpZHRoO1xuICAgIGggPSBwLndpbmRvd0hlaWdodDtcbiAgfVxuICBcbiAgcC5kcmF3ID0gKCkgPT4ge1xuICAgIHAuYmFja2dyb3VuZChodWVfYmcsMTAwLDEwMCk7XG4gICAgaWYobW91c2VfcHJlc3NlZCkge1xuICAgICAgcm90X3ggPSBwLm1hcChwLm1vdXNlWCwwLHAud2lkdGgsMCxwLlRBVSk7XG4gICAgICByb3RfeSA9IHAubWFwKHAubW91c2VZLDAscC5oZWlnaHQsMCxwLlRBVSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHBmZmZmIHdlIG5lZWQgdG8gbWFrZSB0aGlzIGRpc3BsYWVtZW50IHdoZW4gd2UncmUgaW4gV0VCR0wgdG8gaGF2ZSBzb21ldGhpbmcgaW4gdGhlIGNlbnRlciBvZiB3aW5kb3cgOihcbiAgICAgIHBvc194ID0gcC5tb3VzZVggLSh3LzIpO1xuICAgICAgcG9zX3kgPSBwLm1vdXNlWSAtKGgvMik7XG4gICAgfVxuXG4gICAgbGV0IGRpcl9saWdodF94ID0gKHBvc194IC8gdyAtIDAuNSkgKiAyO1xuICAgIGxldCBkaXJfbGlnaHRfeSA9IChwb3NfeCAvIGggLSAwLjUpICogMjtcbiAgICBodWVfbGlnaHQgPSBwLmFicyhwLnNpbihwLmZyYW1lQ291bnQgKi4wMSkpKjM2MC4wO1xuICAgIHAuZGlyZWN0aW9uYWxMaWdodChodWVfbGlnaHQsc2F0dXJhdGlvbl9saWdodCxicmlnaHRuZXNzX2xpZ2h0LCAtZGlyX2xpZ2h0X3gsIC1kaXJfbGlnaHRfeSwgMC4yNSk7XG4gICAgcC5hbWJpZW50TWF0ZXJpYWwoaHVlX2FtYmllbnQsc2F0dXJhdGlvbl9hbWJpZW50LGJyaWdodG5lc3NfYW1iaWVudCk7XG4gICAgXG4gICAgcC50cmFuc2xhdGUocG9zX3gscG9zX3ksMCk7XG4gICAgcC5yb3RhdGVYKHJvdF95KTtcbiAgICBwLnJvdGF0ZVkocm90X3gpO1xuICAgIFxuICAgIGxldCBzaXplIDogbnVtYmVyID0gdy8zO1xuICAgIGxldCBtaW5fc2l6ZSA6IG51bWJlciA9IDIwO1xuICAgIGxldCBib3hfc2l6ZV94IDogbnVtYmVyID0gcC5hYnMocC5jb3MocC5mcmFtZUNvdW50ICouMDEpKSAqc2l6ZSArbWluX3NpemU7XG4gICAgbGV0IGJveF9zaXplX3kgOiBudW1iZXIgPSBwLmFicyhwLmNvcyhwLmZyYW1lQ291bnQgKi4wMikpICpzaXplICttaW5fc2l6ZTtcbiAgICBsZXQgYm94X3NpemVfeiA6IG51bWJlciA9IHAuYWJzKHAuY29zKHAuZnJhbWVDb3VudCAqLjAwMSkpICpzaXplICttaW5fc2l6ZTtcbiAgICBwLmJveChib3hfc2l6ZV94LGJveF9zaXplX3ksYm94X3NpemVfeik7ICBcbiAgICBcbiAgfVxuXG4gIHAubW91c2VQcmVzc2VkID0gKCkgPT4ge1xuICAgIG1vdXNlX3ByZXNzZWQgPSB0cnVlO1xuICAgIGh1ZV9iZyA9IHAucmFuZG9tKDM2MCk7XG4gIH1cblxuICBwLm1vdXNlUmVsZWFzZWQgPSAoKSA9PiB7XG4gICAgbW91c2VfcHJlc3NlZCA9IGZhbHNlO1xuICB9XG59XG5cbmxldCB3IDogbnVtYmVyID0gMDtcbmxldCBoIDogbnVtYmVyID0gMDtcblxubGV0IG1vdXNlX3ByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbnZhciBza2V0Y2hQID0gbmV3IHA1KHNrZXRjaCk7XG5cbnZhciBodWVfYmc6bnVtYmVyID0yNTU7XG5cbnZhciBodWVfbGlnaHQ6bnVtYmVyID0wO1xudmFyIHNhdHVyYXRpb25fbGlnaHQ6bnVtYmVyID0xMDA7XG52YXIgYnJpZ2h0bmVzc19saWdodDpudW1iZXIgPTEwMDtcblxudmFyIGh1ZV9hbWJpZW50Om51bWJlciA9MDtcbnZhciBzYXR1cmF0aW9uX2FtYmllbnQ6bnVtYmVyID0wO1xudmFyIGJyaWdodG5lc3NfYW1iaWVudDpudW1iZXIgPTEwMDtcblxubGV0IHBvcyA9IG5ldyB2ZWMzKDAsMCwwKTtcblxubGV0IHJvdF94Om51bWJlciA9IDA7XG5sZXQgcm90X3k6bnVtYmVyID0gMDtcblxubGV0IHBvc194Om51bWJlciA9IDA7XG5sZXQgcG9zX3k6bnVtYmVyID0gMDtcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9