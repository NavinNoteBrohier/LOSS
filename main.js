// LOSS Nav & Gillie
//CONSTANTS
var canvas = document.getElementById("GAMECANVAS");
var context = canvas.getContext("2d");
var Background = document.createElement("img");
	Background.src  = "background.png";
var CANVASHEIGHT = canvas.height;
var CANVASWIDTH = canvas.width;
	
function run()
{
	
	//context.fillStyle = "#0000"
	//context.fillRect(0,0,CANVASWIDTH,CANVASHEIGHT);
	//context.endPath;
	
	context.drawImage(Background, 0, 0);
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