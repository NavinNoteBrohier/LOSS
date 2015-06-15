var SplashState = function()
{
	this.prototype = BaseState;
	this.StateType = "Splash";
	
	this.Timer = 3.0;
}

SplashState.prototype.load = function()
{
	console.log("Loading a Splash");
}

SplashState.prototype.unload = function()
{
	console.log("Unloading a Splash");
}

SplashState.prototype.update = function(dt) 
{
	this.Timer -= dt;
	if (this.Timer <= 0)
	{
		ss.switchState( new GameState() );
	}
}

SplashState.prototype.draw = function()
{
	context.font = "32pt ComicSans";
	context.fillStyle = "#000000";
	var width = context.measureText( "Splish Splash " + this.Timer).width;
	context.fillText("Splish Splash"  + this.Timer, SCREEN_WIDTH/2 - width/2, SCREEN_HEIGHT/2);
}