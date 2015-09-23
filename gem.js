var Gem = function(x, y) 
{
	this.sprite = new Sprite("gem.png");
	this.sprite.buildAnimation(2, 1, 88, 94, 0.3, [0,1]);
	this.sprite.setAnimationOffset(0, -35, -40);
	
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.width = 36;
	this.height = 32;
	
	this.velocity = new Vector2();
	
	this.moveRight = true;
	this.pause = 0;
};

Gem.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
}

Gem.prototype.draw = function()
{
	var screenX = this.position.x - worldOffsetX;
	this.sprite.draw(context, screenX, this.position.y);
}