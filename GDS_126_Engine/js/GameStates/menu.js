/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.width=200;
startButton.hitBoxWidth=800
startButton.y = 370
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/BackgroundImage.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play(`music`, 0, true, .2)
		}

		//Hover Effect Graffic
		startButton.color = `yellow`
		startButton.img.src="images/HoverButton.png"
		startButton.angle = -3

	}
	else
	{
		//Default Button Graphic
		startButton.color = `red`
		startButton.img.src="images/DefaultButton.png"
		startButton.angle = 0

	}

	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
}
	
	
