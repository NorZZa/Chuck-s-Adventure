var Vector2 = function()
{
	this.x = 0;
	this.y = 0;
};

Vector2.prototype.set = function(x,y)
{
	this.x = y;
	this.y = y;
}

//normalize x and y because if your calling on the vector as a function, 
//at the end you need to 'reset' so that the next call is different.. i think 

Vector2.prototype.normalize = function(x,y)
{
	
}

//todos
//add
//subtract
//multiplyScalar(num)