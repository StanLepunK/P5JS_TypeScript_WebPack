!function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}([function(t,n,o){"use strict";o.r(n);var e,r=function(){function t(){}return t.prototype.set_x=function(t){this.x_=t},t.prototype.set_y=function(t){this.y_=t},t.prototype.set_z=function(t){this.z_=t},t.prototype.set_w=function(t){this.w_=t},t.prototype.x=function(){return this.x_},t.prototype.y=function(){return this.y_},t.prototype.z=function(){return this.z_},t.prototype.w=function(){return this.w_},t}(),i=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),u=function(t){function n(n,o,e){return t.call(this)||this}return i(n,t),n.prototype.set=function(n,o,e){t.prototype.set_x.call(this,n),t.prototype.set_y.call(this,o),t.prototype.set_z.call(this,e)},n.prototype.x=function(){return t.prototype.x.call(this)},n.prototype.y=function(){return t.prototype.y.call(this)},n.prototype.z=function(){return t.prototype.z.call(this)},n}(r),p=(new p5(function(t){t.preload=function(){},t.setup=function(){t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),p=t.windowWidth,c=t.windowHeight},t.windowResized=function(){t.createCanvas(t.windowWidth,t.windowHeight,t.WEBGL),p=t.windowWidth,c=t.windowHeight},t.draw=function(){t.background(255,0,0);var n=t.mouseX-p/2,o=t.mouseY-c/2,e=t.random(c);f.set(n,o,e),t.fill(0,0,0),t.ellipse(f.x(),f.y(),50,50)}}),0),c=0,f=new u(0,0,0)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlY3Rvci9aX3ZlYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yL1pfdmVjMy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwidmVjIiwic2V0X3giLCJ4XyIsInRoaXMiLCJzZXRfeSIsInlfIiwic2V0X3oiLCJ6XyIsInNldF93Iiwid18iLCJ4IiwieSIsInoiLCJ3IiwiX3N1cGVyIiwidmVjMyIsIl9fZXh0ZW5kcyIsInNldCIsInA1IiwicHJlbG9hZCIsInNldHVwIiwiY3JlYXRlQ2FudmFzIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJXRUJHTCIsImgiLCJ3aW5kb3dSZXNpemVkIiwiZHJhdyIsImJhY2tncm91bmQiLCJweCIsIm1vdXNlWCIsInB5IiwibW91c2VZIiwicHoiLCJyYW5kb20iLCJwb3MiLCJmaWxsIiwiZWxsaXBzZSIsIlpfdmVjMyJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsRUFBQSxHQUdBLFNBQUFDLEVBQUFDLEdBR0EsR0FBQUYsRUFBQUUsR0FDQSxPQUFBRixFQUFBRSxHQUFBQyxRQUdBLElBQUFDLEVBQUFKLEVBQUFFLEdB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LE9BQU9FLEVBQUFsQixVQUFNZ0IsRUFBQ3pDLEtBQUFnQyxPQUVoQlksRUF0QkEsSUM0Q0lGLEdBRmMsSUFBSUssR0EvQlQsU0FBQ3BCLEdBQ1pBLEVBQUVxQixRQUFVLGFBSVpyQixFQUFFc0IsTUFBUSxXQUNSdEIsRUFBRXVCLGFBQWF2QixFQUFFd0IsWUFBYXhCLEVBQUV5QixhQUFjekIsRUFBRTBCLE9BRWhEWCxFQUFJZixFQUFFd0IsWUFDTkcsRUFBSTNCLEVBQUV5QixjQUdSekIsRUFBRTRCLGNBQWdCLFdBQ2hCNUIsRUFBRXVCLGFBQWF2QixFQUFFd0IsWUFBYXhCLEVBQUV5QixhQUFjekIsRUFBRTBCLE9BQ2hEWCxFQUFJZixFQUFFd0IsWUFDTkcsRUFBSTNCLEVBQUV5QixjQUdSekIsRUFBRTZCLEtBQU8sV0FDUDdCLEVBQUU4QixXQUFXLElBQUksRUFBRSxHQUNuQixJQUFJQyxFQUFZL0IsRUFBRWdDLE9BQVNqQixFQUFFLEVBQ3pCa0IsRUFBWWpDLEVBQUVrQyxPQUFTUCxFQUFFLEVBQ3pCUSxFQUFZbkMsRUFBRW9DLE9BQU9ULEdBQ3pCVSxFQUFJbEIsSUFBSVksRUFBR0UsRUFBR0UsR0FDZG5DLEVBQUVzQyxLQUFLLEVBQUUsRUFBRSxHQUNYdEMsRUFBRXVDLFFBQVFGLEVBQUl6QixJQUFJeUIsRUFBSXhCLElBQUksR0FBRyxPQVFoQixHQUNiYyxFQUFhLEVBRWJVLEVBQU0sSUFBSUcsRUFBSyxFQUFFLEVBQUUiLCJmaWxlIjoiZXhwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVjIHtcblx0cHJpdmF0ZSB4XyA6IG51bWJlcjtcblx0cHJpdmF0ZSB5XyA6IG51bWJlcjtcblx0cHJpdmF0ZSB6XyA6IG51bWJlcjtcblx0cHJpdmF0ZSB3XyA6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3RvcigpIHt9XG4gIFxuICAvLyBzZXRcblx0c2V0X3goeF86IG51bWJlcikge1xuXHRcdHRoaXMueF8gPSB4Xztcblx0fVxuXG5cdHNldF95KHlfOiBudW1iZXIpIHtcblx0XHR0aGlzLnlfID0geV87O1xuXHR9XG5cblx0c2V0X3ooel86IG51bWJlcikge1xuXHRcdHRoaXMuel89IHpfOztcblx0fVxuXG5cdHNldF93KHdfOiBudW1iZXIpIHtcblx0XHR0aGlzLndfPSB3Xzs7XG5cdH1cblxuICAvLyBnZXRcblx0eCgpIHtcblx0XHRyZXR1cm4gdGhpcy54Xztcblx0fVxuXG5cdHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMueV87XG5cdH1cblxuXHR6KCkge1xuXHRcdHJldHVybiB0aGlzLnpfO1xuXHR9XG5cblx0dygpIHtcblx0XHRyZXR1cm4gdGhpcy53Xztcblx0fVxufVxuIiwiaW1wb3J0IHZlYyBmcm9tICcuL1pfdmVjJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVjMyBleHRlbmRzIHZlYyB7XG5cdGNvbnN0cnVjdG9yKHhfIDogbnVtYmVyLCB5XyA6IG51bWJlciwgel8gOiBudW1iZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0KHhfIDogbnVtYmVyLCB5XyA6IG51bWJlciwgel8gOiBudW1iZXIpIHtcblx0XHRzdXBlci5zZXRfeCh4Xyk7XG5cdFx0c3VwZXIuc2V0X3koeV8pO1xuXHRcdHN1cGVyLnNldF96KHpfKTtcblx0fVxuXG5cdHgoKSB7XG5cdFx0cmV0dXJuIHN1cGVyLngoKTtcblx0fVxuXG5cdHkoKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnkoKTtcblx0fVxuXG5cdHooKSB7XG5cdFx0cmV0dXJuIHN1cGVyLnooKTtcblx0fVxufSIsIi8vIGltcG9ydCB2ZWMgZnJvbSAnLi9aX3ZlYydcbi8vIGltcG9ydCB2ZWMyIGZyb20gJy4vWl92ZWMyJ1xuLy8gaW1wb3J0IHZlYzMgZnJvbSAnLi9aX3ZlYzMnXG4vLyBpbXBvcnQgdmVjNCBmcm9tICcuL1pfdmVjNCdcblxuaW1wb3J0IHZlYyBmcm9tICcuL3ZlY3Rvci9aX3ZlYydcbmltcG9ydCB2ZWMyIGZyb20gJy4vdmVjdG9yL1pfdmVjMidcbmltcG9ydCB2ZWMzIGZyb20gJy4vdmVjdG9yL1pfdmVjMydcbmltcG9ydCB2ZWM0IGZyb20gJy4vdmVjdG9yL1pfdmVjNCdcblxuXG5cbnZhciBza2V0Y2ggPSAocDogcDUpID0+IHtcbiAgcC5wcmVsb2FkID0gKCkgPT4ge1xuXG4gIH1cblxuICBwLnNldHVwID0gKCkgPT4ge1xuICAgIHAuY3JlYXRlQ2FudmFzKHAud2luZG93V2lkdGgsIHAud2luZG93SGVpZ2h0LCBwLldFQkdMKTtcbiAgICAvLyBwLmNvbG9yTW9kZShwLkhTQiwzNjAsMTAwLDEwMCwxMDApO1xuICAgIHcgPSBwLndpbmRvd1dpZHRoO1xuICAgIGggPSBwLndpbmRvd0hlaWdodDtcbiAgfVxuXG4gIHAud2luZG93UmVzaXplZCA9ICgpID0+IHtcbiAgICBwLmNyZWF0ZUNhbnZhcyhwLndpbmRvd1dpZHRoLCBwLndpbmRvd0hlaWdodCwgcC5XRUJHTCk7XG4gICAgdyA9IHAud2luZG93V2lkdGg7XG4gICAgaCA9IHAud2luZG93SGVpZ2h0O1xuICB9XG4gIFxuICBwLmRyYXcgPSAoKSA9PiB7XG4gICAgcC5iYWNrZ3JvdW5kKDI1NSwwLDApO1xuICAgIGxldCBweDpudW1iZXIgPSBwLm1vdXNlWCAtKHcvMik7XG4gICAgbGV0IHB5Om51bWJlciA9IHAubW91c2VZIC0oaC8yKTtcbiAgICBsZXQgcHo6bnVtYmVyID0gcC5yYW5kb20oaCk7XG4gICAgcG9zLnNldChweCxweSxweik7XG4gICAgcC5maWxsKDAsMCwwKTtcbiAgICBwLmVsbGlwc2UocG9zLngoKSxwb3MueSgpLDUwLDUwKTtcbiAgfVxufVxuXG4vLyB2YXIgc2tldGNoUCA9IG5ldyBwNShza2V0Y2gpO1xuXG52YXIgc2tldGNoX3RydWMgPSBuZXcgcDUoc2tldGNoKTtcblxubGV0IHcgOiBudW1iZXIgPSAwO1xubGV0IGggOiBudW1iZXIgPSAwO1xuXG5sZXQgcG9zID0gbmV3IHZlYzMoMCwwLDApO1xuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=