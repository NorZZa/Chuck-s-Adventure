var Bullet = function(x, y, moveRight) 
{
	this.image = document.createElement("img");
	this.image.src = "bullet.png";
	
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.width = 5;
	this.height = 5;
	
	this.velocity = new Vector2();
	
	this.moveRight = moveRight;
	if(this.moveRight == true)
	{
		this.velocity.set(-MAXDX *2, 0);
	}
	else
	{
		this.velocity.set(MAXDX *2, 0);
	}
};

Bullet.prototype.update = function(deltaTime)
{
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
}
Bullet.prototype.draw = function()
{
	var screenX = this.position.x - worldOffsetX;
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.drawImage(this.image, screenX, this.position.y);
	context.restore();
}
