// LOSS Nav & Gillie
//CONSTANTS
var canvas = document.getElementById("GAMECANVAS");
var context = canvas.getContext("2d");
var Background = document.createElement("img");
	Background.src  = "background.png"

function Collision(x1, y1, h1, w1, x2, y2, h2, w2)
{
	if(y2 + h2 > y1 ||
	x2 + w2 > x1 ||
	y1 + h1 < y2 ||
	x2 + w2 < x2)
	
	
}	
	
function run()
{
	
	
	
	
	context.drawImage(Background, 0, 0)
};

(function() {
 var onEachFrame;
 if (window.requestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
 _cb();
 };
 } else if (window.mozRequestAnimationFrame) {
 onEachFrame = function(cb) {
 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
 _cb();
 };
 } else {
 onEachFrame = function(cb) {
 setInterval(cb, 1000 / 60);
 }
 }

 window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);