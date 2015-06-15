
var StateStack = function()
{
	this.states = [];
}

StateStack.prototype.push = function( a_state )
{
	a_state.load();
	this.states.push(a_state);
}

StateStack.prototype.pop = function()
{
	if (this.states.length === 0)
		return null;
	
	this.states[this.states.length - 1].unload();
	var returnState = this.states[this.states.length - 1];
	this.states.pop();
	
	return returnState;
}

StateStack.prototype.switchState = function( a_state )
{
	var returnState = null;
	if (this.states.length !== 0)
	{
		this.states[this.states.length - 1].unload();
		returnState = this.states[this.states.length - 1];
		this.states.pop();
	}
	
	a_state.load();
	this.states.push(a_state);
	
	return returnState;
}

StateStack.prototype.update = function(dt)
{
	if (this.states.length !== 0)
	{
		this.states[this.states.length - 1].update(dt);
	}
}

StateStack.prototype.draw = function()
{
	if (this.states.length !== 0)
	{
		this.states[this.states.length - 1].draw();
	}
}
