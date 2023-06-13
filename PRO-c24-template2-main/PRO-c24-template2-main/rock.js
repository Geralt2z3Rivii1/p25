class Rock{
	constructor(x,y,r)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.8,
		friction:0.9,
		density:12

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			ellipse(this.body.position.x,this.body.position.y,this.r)

			pop()
	}

}